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
const allDiv = document.querySelectorAll(".back");
var step
var activeName
var activatedname
var selectedElement

firebaseRef.ref().on("value", snapshot=>{
    var snap = snapshot.val();
    step = snap.step;
    allDiv.forEach(function(unit){
        unit.style.display="none"
    })
    activeName = "step" + step.toString();
    activatedname = activeName.toString()
    selectedElement = document.getElementById(activatedname)
    console.log(selectedElement);
    selectedElement.style.display = "block"
    const btnname = "button" + step.toString();
    const inpname = "input" + step.toString();
    document.getElementById(btnname).addEventListener("click", function () {
        const enteredcode = document.getElementById(inpname).value;
        if (enteredcode == 1234) {
            step = step + 1;
            fstep = {step : step}
            firebaseRef.ref().update(fstep);
        }
        else {
            alert("Incorrect!")
        }
    })
});