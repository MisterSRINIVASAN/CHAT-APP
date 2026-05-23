@echo off
title Chat App Runner
echo ===================================================
echo               STARTING CHAT APPLICATION             
echo ===================================================
echo.
echo [1/2] Starting Backend Server (Express + Socket.io) in a new window...
start "Chat App Backend" cmd /k "cd server && npm run dev"

echo.
echo [2/2] Starting Frontend Client (React) in a new window...
start "Chat App Frontend" cmd /k "cd public && npm start"

echo.
echo ===================================================
echo Both processes have been initiated!
echo - Backend: http://localhost:5000
echo - Frontend: http://localhost:3000
echo.
echo Keep the new terminal windows open while using the app.
echo ===================================================
echo.
pause
