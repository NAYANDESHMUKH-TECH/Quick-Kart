import { useState } from "react";
import { LogIn, UserPlus } from "lucide-react";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const endpoint = isLogin
      ? "http://localhost:5000/api/login"
      : "http://localhost:5000/api/register";

    const body = isLogin
      ? { email, password }
      : { name, email, password };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      alert(data.message);

      console.log(data);
    } catch (error) {
      console.error("Authentication error:", error);
      alert("Unable to connect to the server");
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-73px)] items-center justify-center bg-gray-50 px-6 py-12">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-lg">

        <div className="mb-8 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-2xl font-bold text-white">
            Q
          </div>

          <h1 className="mt-4 text-2xl font-bold text-gray-900">
            {isLogin ? "Welcome back" : "Create your account"}
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            {isLogin
              ? "Login to continue shopping with Quick-Kart."
              : "Join Quick-Kart and start shopping."}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          {!isLogin && (
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter your name"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                required
              />
            </div>
          )}

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              required
            />
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 py-3.5 font-semibold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-600"
          >
            {isLogin ? (
              <>
                <LogIn size={19} />
                Login
              </>
            ) : (
              <>
                <UserPlus size={19} />
                Create Account
              </>
            )}
          </button>

        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}

          <button
            type="button"
            onClick={() => setIsLogin((current) => !current)}
            className="ml-1 font-semibold text-orange-500 hover:text-orange-600"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </div>

      </div>
    </div>
  );
}

export default Auth;