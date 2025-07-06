# FoodApp

This repository contains a React Native mobile application and a Node.js backend API.

## Structure

- `mobile-app` – Expo based React Native app
- `backend-api` – Express.js REST API

## Setup

Follow the README in each folder for detailed steps. A quick start:

1. Start the backend API
   ```bash
   cd backend-api
   npm install
   cp .env.example .env
   mkdir uploads
   npm run dev
   ```

2. Run the mobile app
   ```bash
   cd mobile-app
   npm install
   cp .env.example .env
   # set EXPO_PUBLIC_API_BASE_URL to the IP of your backend
   expo start
   ```
