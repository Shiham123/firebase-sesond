import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDoGbWK5W-Eq9M2u2uzPX9Awwn0LyzFi9I',
  authDomain: 'second-firebase-project-bbf79.firebaseapp.com',
  projectId: 'second-firebase-project-bbf79',
  storageBucket: 'second-firebase-project-bbf79.appspot.com',
  messagingSenderId: '1056000661683',
  appId: '1:1056000661683:web:87ef2edd91027e260678c6',
};

const app = initializeApp(firebaseConfig);

const globalAuth = getAuth(app);
export default globalAuth;
