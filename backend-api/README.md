# Backend API

Express.js REST API for food classification.

## Setup

```bash
cd backend-api
npm install
cp .env.example .env
# create a folder for uploaded images
mkdir uploads
```

## Development

```bash
npm run dev
```

## Production

```bash
npm run build
npm start
```

### Docker

```bash
docker build -t foodapp-backend .
docker run -p 3000:3000 foodapp-backend
```
