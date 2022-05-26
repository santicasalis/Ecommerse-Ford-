
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDlERNUT9ng2ldAb6PyfdQjrmdnzeEv3FQ",
  authDomain: "ecommerceford-977ee.firebaseapp.com",
  projectId: "ecommerceford-977ee",
  storageBucket: "ecommerceford-977ee.appspot.com",
  messagingSenderId: "811680306268",
  appId: "1:811680306268:web:6dfafff07020ad25b90299"
};


const app = initializeApp(firebaseConfig);

export default function getFireStoreApp(){
    return app
}