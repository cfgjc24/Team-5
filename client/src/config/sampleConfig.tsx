// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore" ;
import { getDocs, getDoc, collection, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    // YOUR CONFIG HERE
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)

export async function getMarkers() {
    const markerCollection = collection(db, "markers") ;
    const newMarkerList : any [] = [] ;
    const markers = await getDocs(markerCollection) ;
    markers.docs.map((doc) => (
        newMarkerList.push(doc.data())
    ))
    
    // console.log(newMarkerList)
    return (newMarkerList) ;
    // 
    // console.log(markers) ;
    // markers.map((marker => addMarker())
}



