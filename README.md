# AI & Robotics Summer Workshop

A responsive workshop landing page built using React.js and Express.js.

## Features

- Hero Section
- Workshop Details
- Learning Outcomes
- FAQ Section
- Registration Form
- Express.js Backend API
- Responsive Design
- Form Validation

## Tech Stack

- React.js
- CSS3
- Express.js
- Node.js

## Frontend Setup

```bash
npm install
npm start
```

Frontend runs at:

```text
http://localhost:3000
```

## Backend Setup

```bash
cd server
npm install
node server.js
```

Backend runs at:

```text
http://localhost:5000
```

## API Endpoint

```http
POST /api/enquiry
```

### Sample Request

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210"
}
```

### Sample Response

```json
{
  "success": true,
  "message": "Enquiry submitted successfully"
}
```

## Future Improvements

- MongoDB Integration
- Email Notifications
- Advanced Form Validation
- Better Animations
- Admin Dashboard

## Author

Prakyath J Rai