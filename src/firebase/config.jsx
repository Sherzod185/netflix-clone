import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBWNQ59VJqa9mNdJUSRsw6BqUF52BgwGtU",
  authDomain: "netflixclone-532f4.firebaseapp.com",
  projectId: "netflixclone-532f4",
  storageBucket: "netflixclone-532f4.appspot.com",
  messagingSenderId: "444062321598",
  appId: "1:444062321598:web:c3f34630d72ca1ff1b47ef",
  measurementId: "G-D8PLT3JD3S",
};
const app = new initializeApp(firebaseConfig);
const auth = new getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
