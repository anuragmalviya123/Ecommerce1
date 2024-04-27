// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID,
// };

// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBW_Cl7PuaaoQJLQuDib4i9S8_ht_m7TtM",
  authDomain: "ecommerce-5fe5f.firebaseapp.com",
  projectId: "ecommerce-5fe5f",
  storageBucket: "ecommerce-5fe5f.appspot.com",
  messagingSenderId: "379486743594",
  appId: "1:379486743594:web:4c2ac321485a8060336753",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

