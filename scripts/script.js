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

// qr readin part
function hasGetUserMedia() {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}
if (hasGetUserMedia()) {
    // Good to go!
} else {
    alert("getUserMedia() is not supported by your browser");
}

const constraints = {
    video: true,
};

const video = document.querySelector("video");
const screenshotButton = document.querySelector("#screenshot")
const img = document.querySelector("img")
const canvas = document.createElement("canvas");
const play = document.querySelector("#play")

navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
    video.srcObject = stream;
});

play.onclick = function(){
    video.play();
}

screenshotButton.onclick = video.onclick = function () {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0);
    // Other browsers will fall back to image/png
    console.log(canvas.toDataURL("image/png"));
};

function handleSuccess(stream) {
    screenshotButton.disabled = false;
    video.srcObject = stream;
}