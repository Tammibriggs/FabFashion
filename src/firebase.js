import { initializeApp } from "firebase/app";

const firebaseConfig = {

  apiKey: "AIzaSyAIFBG1yQuWTn6p3ls1iGj-2cgm2pZkuTg",
  authDomain: "fabfashion-d5670.firebaseapp.com",
  projectId: "fabfashion-d5670",
  storageBucket: "fabfashion-d5670.appspot.com",
  messagingSenderId: "727149245685",
  appId: "1:727149245685:web:6332f40bd94ae6f63d01bc"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app