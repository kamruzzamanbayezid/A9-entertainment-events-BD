
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
      apiKey: "AIzaSyCvfhLZ2acRKEK_CJ9QSLVTWMMPUmdEU6I",
      authDomain: "sports-event-e2c06.firebaseapp.com",
      projectId: "sports-event-e2c06",
      storageBucket: "sports-event-e2c06.appspot.com",
      messagingSenderId: "404481511530",
      appId: "1:404481511530:web:0cd4fa1b6ace15f5503a13"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth;