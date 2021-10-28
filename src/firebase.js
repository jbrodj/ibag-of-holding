// Import function to config/initialize firebase!
import { initializeApp } from "firebase/app";
// Import auth from firebase authentication
import { getAuth } from "firebase/auth";

// Import function for realtime database service.
import { getDatabase } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
    // apiKey: "AIzaSyCyYFriX4c9s1pqu2oVxX6PReEE3yWpxe0",
    // authDomain: "bag-of-holding-9cb78.firebaseapp.com",
    // databaseURL: "https://bag-of-holding-9cb78-default-rtdb.firebaseio.com",
    // projectId: "bag-of-holding-9cb78",
    // storageBucket: "bag-of-holding-9cb78.appspot.com",
    // messagingSenderId: "900982830458",
    // appId: "1:900982830458:web:cd3ce733c270a45fadd2c3"
    apiKey: "AIzaSyCkhG3JTqbwlLM2fJ9Bu-H_jBu7dup9ed8",
    authDomain: "bagofholding-e1a03.firebaseapp.com",
    databaseURL: "https://bagofholding-e1a03-default-rtdb.firebaseio.com",
    projectId: "bagofholding-e1a03",
    storageBucket: "bagofholding-e1a03.appspot.com",
    messagingSenderId: "1056648701082",
    appId: "1:1056648701082:web:9bd19efa00b75d68f62b23"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Go get the realtime database service & pass it the app function.
const realtime = getDatabase(app)

// Create and export variable for authentication function, passing it app!
export const auth = getAuth(app)

export default realtime;