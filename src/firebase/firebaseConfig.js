import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAlrMuNbxOpXVUiQ5f0qFeDOo7cIXCaCic",
  authDomain: "mystore-e6553.firebaseapp.com",
  projectId: "mystore-e6553",
  storageBucket: "mystore-e6553.appspot.com",
  messagingSenderId: "761462521759",
  appId: "1:761462521759:web:dd49048cdeb56c540407aa",
  measurementId: "G-CMDBPWVQ3K",
};

const app = initializeApp(firebaseConfig);

//auth
export const auth = getAuth(app);
