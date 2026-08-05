# LeadDesk Mini

LeadDesk Mini is a Full Stack Lead Management System developed for the Digital Heroes Internship Task.

## Features
- Add new leads
- View all leads
- Search leads
- Update lead status
- Admin login (JWT)

## Tech Stack
- React
- Spring Boot
- MySQL
- Spring Security
- JWT

## Setup

### Backend
1. Open the Spring Boot project.
2. Configure MySQL in `application.properties`.
3. Run the application.

### Frontend
1. Open the React project.
2. Run:
```bash
npm install
npm run dev
```

## API Endpoints

- `POST /api/leads` – Add lead
- `GET /api/leads` – View all leads
- `GET /api/leads/search?name=` – Search leads
- `PUT /api/leads/{id}` – Update status

## Author

**Nithish C**

Developed for the **Digital Heroes Internship Qualification Task**.
