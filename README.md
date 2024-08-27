Book Exchange Platform
Frontend: Book Exchange Platform Frontend
Backend: Book Exchange Platform Backend

Features
User authentication (register, login, logout)
Book listing and management
Book discovery with filters
Matchmaking for book exchanges
Exchange request functionality
Setup
Clone the repo and install dependencies.
Create a .env file with MongoDB URI and JWT secret.
Run the application locally.
Deployment
API Endpoints
POST /api/auth/register: Register a new user.
Body: { "username": "string", "email": "string", "password": "string" }
POST /api/auth/login: Login a user.
Body: { "email": "string", "password": "string" }
GET /api/books: Get a list of all books.
POST /api/books: Add a new book listing.
Body: { "title": "string", "author": "string", "genre": "string" }
PUT /api/books/:id: Update an existing book listing.
Body: { "title": "string", "author": "string", "genre": "string" }
DELETE /api/books/:id: Delete a book listing.
POST /api/exchange-requests: Create a new exchange request.
Body: { "bookListingId": "string", "requesterId": "string", "status": "string" }
