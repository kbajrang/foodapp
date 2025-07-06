# Mobile App

React Native app built with Expo.

## Setup

```bash
npm install -g expo-cli # if not installed
cd mobile-app
npm install
cp .env.example .env # set backend URL
# set the backend URL reachable by your phone
# for example EXPO_PUBLIC_API_BASE_URL=http://192.168.1.10:3000
```

## Run

```bash
expo start
```

Use the Expo Go app to scan the QR code, or connect an Android device via USB
with debugging enabled and run:

```bash
npx expo run:android
```

After installation, open the app on your device. You should see buttons to take
a photo, enter the food weight, and get the calorie estimate.

Build for Android using EAS:

```bash
eas build -p android
```
