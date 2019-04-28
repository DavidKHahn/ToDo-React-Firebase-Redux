import * as firebase from 'firebase';

const config = {
    apiKey: process.env.REACT_APP_WEATHER_API_KEY,
    authDomain: "todo-react-firebase-redux.firebaseapp.com",
    databaseURL: "https://todo-react-firebase-redux.firebaseio.com",
    projectId: "todo-react-firebase-redux",
    storageBucket: "todo-react-firebase-redux.appspot.com",
    messagingSenderId: "985988842512"
}

firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos")