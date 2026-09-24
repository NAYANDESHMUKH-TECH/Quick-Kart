# 🛒 Quick-Kart

Quick-Kart is a quick-commerce web application inspired by platforms like Blinkit and Instamart.

The project was built using React, Node.js, Express, and MySQL, and deployed on AWS using a 3-Tier Architecture.

## 🏗️ Architecture

The application follows a 3-Tier Architecture:

```text
Internet
    ↓
Public Application Load Balancer
    ↓
Web Tier
React + Nginx
EC2 × 2
    ↓
Internal Application Load Balancer
    ↓
Application Tier
Node.js + Express
EC2 × 2
    ↓
Database Tier
Amazon RDS MySQL

```

🚀 Technologies Used
Frontend
- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- React Router
Backend
- Node.js
- Express.js
- MySQL
- REST API
- bcrypt
AWS
- Amazon EC2
- Amazon VPC
- Application Load Balancer
- Amazon RDS for MySQL
- Internet Gateway
- NAT Gateway
- Route Tables
- Security Groups
- AWS Systems Manager Session Manager
Tools
- Git
- GitHub
- Linux
- Nginx
- PM2
  
  
☁️ AWS Architecture
VPC
A custom VPC was created with:
CIDR: 10.0.0.0/16

The VPC was divided across two Availability Zones.
Public Subnets
AZ-A → 10.0.1.0/24
AZ-B → 10.0.2.0/24

The Web Tier EC2 instances and Public Application Load Balancer were deployed in the public subnets.
Private Application Subnets
AZ-A → 10.0.11.0/24
AZ-B → 10.0.12.0/24
The Node.js application servers were deployed in private subnets.
Private Database Subnets
AZ-A → 10.0.21.0/24
AZ-B → 10.0.22.0/24

Amazon RDS MySQL was deployed using private database subnets.
🔄 Application Flow
User
  ↓
Public ALB
  ↓
Nginx + React
  ↓
Internal ALB
  ↓
Node.js + Express
  ↓
Amazon RDS MySQL

Nginx was configured as a reverse proxy to forward API requests from the frontend to the internal Application Load Balancer.
🔐 Security
Security Groups were configured to control communication between the different tiers.
Internet
   ↓ HTTP :80
Public ALB
   ↓ HTTP :80
Web EC2
   ↓ TCP :8080
Internal ALB
   ↓ TCP :8080
Application EC2
   ↓ MySQL :3306
RDS MySQL


The application and database tiers were kept in private subnets.
AWS Systems Manager Session Manager was used to access the private EC2 instances without requiring a bastion host.
🗄️ Database
MySQL was used as the application database.
The existing Quick-Kart product data was migrated from the local MySQL database to Amazon RDS.
Main database tables:
products
users

Database credentials were stored using environment variables and were not committed to GitHub.
🛒 Features
- Product browsing
- Product search
- Shopping cart
- User registration and login
- Product data through REST APIs
- MySQL database integration
- Responsive user interface
- React-based frontend
- Nginx reverse proxy
- Load balancing using Application Load Balancers
📁 Project Structure
Quick-Kart/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── README.md
└── .gitignore

💻 Run Locally
Clone the repository
git clone https://github.com/NAYANDESHMUKH-TECH/Quick-Kart.git

cd Quick-Kart

Backend
cd backend
npm install

Create a .env file:
DB_HOST=localhost
DB_PORT=3306
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=quickkart

Start the backend:
node server.js

Backend runs on:
http://localhost:8080

Frontend
Open another terminal:
cd frontend
npm install
npm run dev

📦 Production Build
npm run build

The production build is generated inside:
frontend/dist/

📚 What I Learned
This project gave me hands-on experience with:
- AWS VPC networking
- Public and private subnets
- EC2 deployment
- Application Load Balancers
- NAT Gateway
- Route Tables
- Security Groups
- Nginx reverse proxy
- Linux server administration
- Node.js backend deployment
- Amazon RDS MySQL
- MySQL data migration
- AWS Systems Manager
- Git and GitHub
🔮 Future Improvements
- CI/CD pipeline using Jenkins or GitHub Actions
- Infrastructure as Code using Terraform or CloudFormation
- Docker-based deployment
- HTTPS using AWS Certificate Manager
- Custom domain using Route 53
- Automated deployments
- Improved monitoring and logging


👨‍💻 Author
Nayan Deshmukh
