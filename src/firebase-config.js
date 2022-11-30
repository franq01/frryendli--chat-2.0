/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyB7OrcNRx-Xkv6Cn60pQuXClJZ-jxgGNY4",
  authDomain: "friendlychat-91b4a.firebaseapp.com",
  projectId: "friendlychat-91b4a",
  storageBucket: "friendlychat-91b4a.appspot.com",
  messagingSenderId: "677430332544",
  appId: "1:677430332544:web:67304a697c449be5a3aa65"
};
export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}