// Import function to config/initialize firebase!
import { initializeApp } from "firebase/app";

// Import function for realtime database service.
import { getDatabase } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCyYFriX4c9s1pqu2oVxX6PReEE3yWpxe0",
    authDomain: "bag-of-holding-9cb78.firebaseapp.com",
    projectId: "bag-of-holding-9cb78",
    storageBucket: "bag-of-holding-9cb78.appspot.com",
    messagingSenderId: "900982830458",
    appId: "1:900982830458:web:cd3ce733c270a45fadd2c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Go get the realtime database service & pass it the app function.
const realtime = getDatabase(app)

export default realtime;