import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
}
// Initialize Firebase
const app = initializeApp(firebaseConfig)


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)

const addDoc = () => {

}
// {
// try {
//     const docRef = await addDoc(collection(db, "users"), {
//         first: "Guilherme",
//         last: "Leal",
//         born: 1995
//     });
//     console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//     console.error("Error adding document: ", e);
// }
// }
export default db