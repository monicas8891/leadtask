# LeadDesk Mini

A simple Lead Management System built using **React**, **Spring Boot**, and **MySQL**.

This project allows customers to submit project enquiries, while administrators can log in to manage leads.

---

## Features

### Customer
- Submit a new lead
- Enter Name, Email, Budget, and Message
- Form validation

### Admin
- Secure Login
- View all leads
- Search leads by name
- Update lead status
    - New
    - Contacted
    - Closed
- Logout

---

## Technologies Used

### Frontend
- React
- Vite
- Bootstrap
- Axios
- React Router

### Backend
- Spring Boot
- Spring Security
- JWT Authentication
- Spring Data JPA
- Hibernate

### Database
- MySQL

---

## Project Structure

```
LeadDesk-Mini
│
├── leaddesk-frontend
│
└── leaddesk-backend
```

---

## Installation

### 1. Clone the Repository

```bash
git clone <your-github-repository-url>
```

---

### 2. Backend Setup

Open the backend project in IntelliJ.

Configure MySQL in:

```
src/main/resources/application.properties
```

Example:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/leaddesk
spring.datasource.username=root
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
```

Run:

```
LeaddeskBackendApplication.java
```

Backend runs on:

```
http://localhost:8080
```

---

### 3. Frontend Setup

Open terminal:

```bash
cd leaddesk-frontend
```

Install dependencies:

```bash
npm install
```

Run the project:

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## Admin Login

Username

```
admin
```

Password

```
admin123
```

---

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/leads | Submit Lead |
| GET | /api/leads | Get All Leads |
| GET | /api/leads/search | Search Leads |
| PUT | /api/leads/{id}/status | Update Lead Status |
| POST | /api/auth/login | Admin Login |

---

## Screenshots

### Customer Form

(Add Screenshot)

### Admin Login

(Add Screenshot)

### Admin Dashboard

(Add Screenshot)

---

## Built For

Built for **Digital Heroes Training Task**

https://digitalheroesco.com

---

## Author

**Your Name**

GitHub:
https://github.com/your-github-username