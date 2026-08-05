# LeadDesk Mini – Lead Management System

> Built for the Digital Heroes Internship Qualification Task

## 📌 Project Overview

LeadDesk Mini is a full-stack lead management application that allows potential clients to submit inquiries through a public form while providing administrators with a secure dashboard to manage those leads.

The application demonstrates CRUD operations, REST APIs, database integration, authentication, and frontend-backend communication.

---

## 🚀 Features

### Public Lead Form
- Submit a new lead
- Form validation
- Name, Email, Budget, and Message fields

### Admin Dashboard
- Secure Login
- View all leads
- Search leads by name
- Update lead status
- Manage customer inquiries

### Lead Status
- New
- Contacted
- Closed

---

## 🛠 Tech Stack

### Frontend
- React
- Vite
- HTML5
- CSS3
- JavaScript
- Axios

### Backend
- Spring Boot
- Spring MVC
- Spring Data JPA
- Spring Security
- JWT Authentication

### Database
- MySQL

### Tools
- IntelliJ IDEA
- MySQL Workbench
- Postman
- Git
- GitHub

---

## 📂 Project Structure

```
LeadDesk-Mini
│
├── frontend
│   ├── components
│   ├── pages
│   ├── services
│   └── App.jsx
│
├── backend
│   ├── controller
│   ├── entity
│   ├── repository
│   ├── service
│   ├── config
│   ├── security
│   ├── exception
│   └── resources
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/leaddesk-mini.git
```

---

### Backend Setup

```bash
cd backend
```

Configure `application.properties`

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/leaddesk
spring.datasource.username=root
spring.datasource.password=yourpassword

spring.jpa.hibernate.ddl-auto=update
```

Run the application.

---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 📡 API Endpoints

### Create Lead

```
POST /api/leads
```

---

### Get All Leads

```
GET /api/leads
```

---

### Search Lead

```
GET /api/leads/search?name=Nithish
```

---

### Update Status

```
PUT /api/leads/{id}?status=Contacted
```

---

### Login

```
POST /api/auth/login
```

---

## 🗄 Database Schema

### Table: leads

| Column | Type |
|----------|---------|
| id | BIGINT |
| name | VARCHAR |
| email | VARCHAR |
| budget | VARCHAR |
| message | TEXT |
| status | VARCHAR |

---

## 🔒 Authentication

JWT (JSON Web Token) is used for secure authentication.

Flow:

1. Admin logs in.
2. Backend validates credentials.
3. JWT token is generated.
4. Token is returned to frontend.
5. Frontend stores token.
6. Protected APIs require the token.

---

## ✅ Validation

Backend validation includes:

- Name required
- Valid email required
- Budget required
- Message required

---

## 📸 Screenshots
<img width="919" height="400" alt="Screenshot 2026-08-05 211228" src="https://github.com/user-attachments/assets/9bc2108d-6799-4670-8651-245e2f8a6663" />
<img width="923" height="242" alt="Screenshot 2026-08-05 211245" src="https://github.com/user-attachments/assets/8aab26be-7780-4664-b28c-0f9d2fc300a2" />
<img width="932" height="447" alt="Screenshot 2026-08-05 211357" src="https://github.com/user-attachments/assets/13a95b84-04cd-44b8-9c28-8b93aa0bf2e1" />




## 🌐 Deployment

### Frontend

Vercel

### Backend

Render

### Database

MySQL

---

## 👨‍💻 Author

**Monica S**

BE – Computer Science & Engineering

---

## 📜 License

This project was developed for the Digital Heroes Internship Qualification Task.
