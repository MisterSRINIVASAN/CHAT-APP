# 💬 Real-Time Chat Application

![Tech Stack](https://img.shields.io/badge/Tech_Stack-MERN_%7C_Socket.io-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

A fully functional, real-time chat application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.io for seamless real-time communication. This app allows users to register, log in, set avatars, and chat with other registered users instantly.

---

## 🌟 Key Features
- **Real-time Messaging:** Instant message delivery using WebSockets (Socket.io).
- **User Authentication:** Secure signup and login with hashed passwords (Bcrypt).
- **Custom Avatars:** Users can choose a personalized avatar during setup.
- **Emoji Support:** Integrated emoji picker for expressive messaging.
- **Responsive UI:** Beautiful, modern, and dark-themed user interface built with `styled-components`.
- **Session Management:** Persists user sessions securely.

---

## 🛠️ Tech Stack

### Frontend (Client)
- **React.js** - UI Library
- **React Router DOM** - Navigation & Routing
- **Styled-Components** - Component-scoped styling
- **Socket.io-client** - Real-time WebSocket connection to the server
- **Axios** - HTTP client for API requests
- **Emoji-Picker-React** - Emoji integration

### Backend (Server)
- **Node.js & Express.js** - Server framework
- **Socket.io** - WebSockets for real-time events
- **MongoDB & Mongoose** - NoSQL Database & ODM
- **Bcrypt** - Password encryption
- **Cors & Dotenv** - Cross-origin resource sharing & Environment variable management

---

## 📂 Project Structure

```text
CHAT-APP/
├── public/                 # Frontend React Application
│   ├── public/             # Static assets (index.html, icons, manifest)
│   ├── src/                # React Source Code
│   │   ├── assets/         # Images, loaders, etc.
│   │   ├── components/     # Reusable UI components (Welcome, Logout, etc.)
│   │   ├── pages/          # Full-page components (Login, Register, Chat)
│   │   ├── utils/          # API routes and utility functions
│   │   ├── App.js          # Main React component
│   │   └── index.js        # React entry point
│   └── package.json        # Frontend dependencies
│
├── server/                 # Backend Express Application
│   ├── controllers/        # Route controllers (user, message logic)
│   ├── model/              # Mongoose database models
│   ├── routes/             # Express API routes
│   ├── .env                # Backend environment variables
│   ├── index.js            # Main server entry point & Socket.io setup
│   └── package.json        # Backend dependencies
│
├── run_app.bat             # Startup script to run both servers concurrently
└── README.md               # Project documentation
```

---

## 🚀 How to Run Locally

### Prerequisites
1. **Node.js** installed on your machine.
2. **MongoDB** installed and running locally on port `27017` (or update the `.env` with a remote URI).

### Installation & Setup

1. **Install Dependencies:**
   You need to install dependencies for both the frontend and backend.
   ```bash
   cd server
   npm install

   cd ../public
   npm install
   ```

2. **Environment Variables:**
   Ensure your backend `server/.env` looks like this:
   ```env
   PORT=5000
   MONGO_URL=mongodb://localhost:27017/chat-app
   ```

3. **Start the Application:**
   I have included a handy startup script to launch both ends of the app simultaneously.
   - Simply double-click the **`run_app.bat`** file located in the root directory.
   
   *Alternatively, start them manually:*
   - **Backend:** `cd server && npm run dev`
   - **Frontend:** `cd public && npm start`

The frontend will run on [http://localhost:3000](http://localhost:3000) and the backend on [http://localhost:5000](http://localhost:5000).

---

## 🤝 Contributing
Contributions, issues, and feature requests are welcome!

## 📜 License
This project is open-source and available under the MIT License.