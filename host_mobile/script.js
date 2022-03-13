const firebaseRef = firebase.database();
const stepup = document.getElementById("stepup")
const stepdown = document.getElementById("stepdown")
const resetp = document.getElementById("resetp")
const resetc = document.getElementById("resetc")
const begstep = document.getElementById("begstep")
const laststep = document.getElementById("laststep")
var step

firebaseRef.ref().on("value", snapshot => {
    const snap = snapshot.val()
    step = snap.step
})

stepup.addEventListener("click", function () {
    if (step != 9) {
        step = step + 1
        const fstep = { step: step }
        firebaseRef.ref().update(fstep)
    }
    else{
        alert("You are at the end!")
    }
})
stepdown.addEventListener("click", function () {
    if (step != 0) {
        step = step - 1
        const fstep = { step: step }
        firebaseRef.ref().update(fstep)
    }
    else {
        alert("You are at the beginning!")
    }
})

resetp.addEventListener("click", function () {
    fetch("code.json")
    .then(Response => Response.json())
    .then (data => {
        firebaseRef.ref("codes").set(data);
    })
})

resetc.addEventListener("click", function () {
    fetch("numbers.json")
    .then(Response => Response.json())
    .then (data => {
        firebaseRef.ref("numbers").set(data);
    })
})

begstep.addEventListener("click", function(){
    step = 0
    const fstep={step: step}
    firebaseRef.ref().update(fstep)
})

laststep.addEventListener("click", function(){
    step=9
    const fstep = {step:step}
    firebaseRef.ref().update(fstep)
})