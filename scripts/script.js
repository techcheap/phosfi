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
var firebaseRef = firebase.database();

//firebaseRef.ref().on("value", snapshot=>{
//    var name = document.getElementById("name");
//    var snap = snapshot.val();
//    var fname = snap.name;
//    name.innerHTML = fname;
//});

//qr generating part
//var qrcode = new QRCode("outpubox");

//function makeCode(){
//    var input = document.getElementById("data");

//    qrcode.makeCode(input.value);
//}

//$("#data").on('blur', function(){
//    makeCode;
//}).on('keydown', function(e){
//    if(e.keyCode == 13){
//        makeCode();
//    }
//});

// qr readin part

let scanner = new Instascan.Scanner({ video: document.getElementById('preview'), mirror:false });
Instascan.Camera.getCameras().then(function (cameras) {
    if (cameras.length > 0) {
        scanner.start(cameras[0]);
    } else {
        console.error('No cameras found.');
    }
}).catch(function (e) {
    console.error(e);
});
scanner.addListener('scan', function (content) {
    console.log(content);
});