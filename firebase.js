import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAzRN22QPCks-jTImBHC_Vg7mAFICkn-6g",
  authDomain: "ottplatform-ba86d.firebaseapp.com",
  projectId: "ottplatform-ba86d",
  storageBucket: "ottplatform-ba86d.appspot.com",
  messagingSenderId: "531674227274",
  appId: "1:531674227274:web:379ce49030aacea8b17cb3",
};

export const app = initializeApp(firebaseConfig);
const db = getFirestore(db);

export { db };
