import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var config = {
    apiKey: "AIzaSyDaXMYhTAOKYZ-j6YGxarz3lwlmq1SqJGI",
    authDomain: "my-books-app-14a42.firebaseapp.com",
    databaseURL: "https://my-books-app-14a42.firebaseio.com",
    projectId: "my-books-app-14a42",
    storageBucket: "my-books-app-14a42.appspot.com",
    messagingSenderId: "194458968439",
    timestampsInSnapshots: true
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
