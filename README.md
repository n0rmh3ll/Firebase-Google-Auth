# Firebase Google Auth React App

## Setup and Installation

1. Clone the repository : ```git clone https://github.com/n0rmh3ll/firebase-google-auth.git```
2. cd firebase-google-auth
3. Install dependencies : ```npm install```
4. Edit [Firebase.ts](https://github.com/n0rmh3ll/Firebase-Google-Auth/blob/main/src/firebase.ts) file with your own Credentials [Check Firebase Setup below]
5. Start and run development : ```npm run dev```

## Firebase Setup
1. navigate and login to [Firebase](https://console.firebase.google.com/)
2. Create new project
3. Select Sign-in method as 'Google' from Authentication menu
4. In Project overview -> Project settings, scroll down and you will find the credentials
5. Copy them to Firebase.ts

## Deployment
1. Remove credentials from firebase.ts file before uploading to github
2. create a vercel account and connect with github
3. Click add new project, select your project
4. Select Environment variables and edit with your firebase configurations
```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```
5. Deploy your app
6. And for the final step go to firebase console
7. Inside Authentication -> Settings -> Authorized domains : Add your new vercel application url
8. All done
     

## Features

- Firebase's `browserSessionPersistence` is used to maintain user sessions.
- If a logged-in user navigates back to the login page, they are automatically redirected to the welcome page.
- Sessions persist until the user explicitly logs out or closes the browser







