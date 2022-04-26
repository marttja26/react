import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
	apiKey: "AIzaSyAMeq84QONPjyU7SpfAsm15Fz1d6n9i_QE",
	authDomain: "ecommerce-10b95.firebaseapp.com",
	projectId: "ecommerce-10b95",
	storageBucket: "ecommerce-10b95.appspot.com",
	messagingSenderId: "624194832267",
	appId: "1:624194832267:web:dc22af4001fb0e3e5d918e",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);