# Login and Signup Application

This project is a simple login and signup application built using a Node.js backend, a React frontend, and a database. The application allows users to register and log in, managing user authentication.

## Project Structure

```
login-signup-app
├── backend
│   ├── src
│   │   ├── app.ts
│   │   ├── controllers
│   │   │   └── authController.ts
│   │   ├── models
│   │   │   └── userModel.ts
│   │   ├── routes
│   │   │   └── authRoutes.ts
│   │   └── types
│   │       └── index.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── Dockerfile
├── frontend
│   ├── src
│   │   ├── App.tsx
│   │   ├── components
│   │   │   ├── Login.tsx
│   │   │   └── Signup.tsx
│   │   └── types
│   │       └── index.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── Dockerfile
├── database
│   └── Dockerfile
├── docker-compose.yml
└── README.md
```

## Technologies Used

- **Backend**: Node.js, Express, TypeScript
- **Frontend**: React, TypeScript
- **Database**: MongoDB (or any other database of your choice)
- **Containerization**: Docker, Docker Compose

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd login-signup-app
   ```

2. **Build and run the application using Docker Compose**:
   ```
   docker-compose up --build
   ```

3. **Access the application**:
   - Frontend: Open your browser and navigate to `http://localhost:3000`
   - Backend: The API will be available at `http://localhost:5000`

## Usage

- **Signup**: Navigate to the signup page and fill in the required fields to create a new account.
- **Login**: After signing up, you can log in using your credentials.

## Contributing

Feel free to fork the repository and submit pull requests for any improvements or features you would like to add.

## License

This project is licensed under the MIT License.