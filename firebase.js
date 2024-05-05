import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
// import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyAW1KjXEUVeR-Vo87yGOD6vitl-BgeXeuQ",
    authDomain: "nourish-network-131d2.firebaseapp.com",
    projectId: "nourish-network-131d2",
    storageBucket: "nourish-network-131d2.appspot.com",
    messagingSenderId: "804082212206",
    appId: "1:804082212206:web:534c55ba428ecc7d8d757f",
    measurementId: "G-WF3T83SMDL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();

const googleLogin1 = document.getElementById('googlebtn1');
googleLogin1.addEventListener("click", function () {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const user = result.user;
            console.log(user);
            window.location.href= "./doner_dashboard.html"
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
})
const googleLogin2 = document.getElementById('googlebtn2');
googleLogin2.addEventListener("click", function () {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const user = result.user;
            console.log(user);
            window.location.href= "./ngoDashboard_donations.html"
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
})
const googleLogin3 = document.getElementById('googlebtn3');
googleLogin3.addEventListener("click", function () {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const user = result.user;
            console.log(user);
            window.location.href= "./farmerDashboard.html"
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
})
