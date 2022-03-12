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

//verifying if ok
function hasGetUserMedia() {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}
if (hasGetUserMedia()) {
    // Good to go!
} else {
    alert("getUserMedia() is not supported by your browser");
}

//getting all the elements
const video = document.querySelector("video");
const screenshotButton = document.querySelector("#screenshot")
const img = document.querySelector("img")
const canvas = document.createElement("canvas");
const play = document.querySelector("#play")
var videoSelect = document.querySelector('select#videoSource');

//getting camera change
videoSelect.onchange = getStream;
getStream().then(getDevices).then(gotDevices);

//devices list
function getDevices() {
    // AFAICT in Safari this only gets default devices until gUM is called :/
    return navigator.mediaDevices.enumerateDevices();
}

//listing all devices
function gotDevices(deviceInfos) {
    window.deviceInfos = deviceInfos; // make available to console
    console.log('Available input and output devices:', deviceInfos);
    for (const deviceInfo of deviceInfos) {
        const option = document.createElement('option');
        option.value = deviceInfo.deviceId;
        if (deviceInfo.kind === 'videoinput') {
            option.text = deviceInfo.label || `Camera ${videoSelect.length + 1}`;
            videoSelect.appendChild(option);
        }
    }
}

//stream listing
function getStream() {
    if (window.stream) {
        window.stream.getTracks().forEach(track => {
            track.stop();
        });
    }
    const videoSource = videoSelect.value;
    const constraints = {
        video: { deviceId: videoSource ? { exact: videoSource } : undefined }
    };
    return navigator.mediaDevices.getUserMedia(constraints).
        then(gotStream).catch(handleError);
}

//stream chosing
function gotStream(stream) {
    window.stream = stream; // make stream available to console
    videoSelect.selectedIndex = [...videoSelect.options].
        findIndex(option => option.text === stream.getVideoTracks()[0].label);
    video.srcObject = stream;
}

//error handling
function handleError(error) {
    console.error('Error: ', error);
}

//play button
play.onclick = function(){
    video.play();
}

//canvas printing
screenshotButton.onclick = video.onclick = function () {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0);
    // Other browsers will fall back to image/png
    console.log(canvas.toDataURL("image/png"));
};

//screenshot success
function handleSuccess(stream) {
    screenshotButton.disabled = false;
}