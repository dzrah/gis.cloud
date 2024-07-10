// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDah2oYhMGicjurQj_yPljNaN3ffpX7QaU',
	authDomain: 'gis-cloud-form.firebaseapp.com',
	projectId: 'gis-cloud-form',
	storageBucket: 'gis-cloud-form.appspot.com',
	messagingSenderId: '1083131121103',
	appId: '1:1083131121103:web:987749497fb414dab896ba',
	measurementId: 'G-KJ5K6J2XW1'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
