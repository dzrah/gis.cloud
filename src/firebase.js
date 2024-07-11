// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCEDP7SbdWQmjNG-Uasa6dNvy8uY6JUKpI',
	authDomain: 'gis-cloud-form-f.firebaseapp.com',
	projectId: 'gis-cloud-form-f',
	storageBucket: 'gis-cloud-form-f.appspot.com',
	messagingSenderId: '827483033208',
	appId: '1:827483033208:web:7f1f50ddd4b230942c278d',
	measurementId: 'G-YCXKCQF762'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
