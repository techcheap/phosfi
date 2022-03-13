//configure firebase
var firebaseConfig = {
    apiKey: "AIzaSyB2gzeEAsM-Tp-nZW1ypYx4WPoHEI83__Q",
    authDomain: "ocpl-a04ed.firebaseapp.com",
    databaseURL: "https://ocpl-a04ed-default-rtdb.firebaseio.com/",
    projectId: "ocpl-a04ed",
    storageBucket: "ocpl-a04ed.appspot.com",
    messagingSenderId: "199314678237",
    appId: "1:199314678237:web:f578a12444167abdd39634",
    measurementId: "G-EZPF38WNSH"
};
//Initialize database
firebase.initializeApp(firebaseConfig)
//FirebaseRef used to get the database