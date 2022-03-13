var firebaseRef = firebase.database();
var step = 0
const allDiv = document.querySelectorAll(".div");
var presnum = 0
var codenum = 0

firebaseRef.ref().on("value", snapshot => {
    presnum = 0
    var presfound = "Number of presidents scanned: " + presnum.toString() + "/16";
    document.getElementById("prescan").innerHTML = presfound;
    codenum = 0
    var codefound = "Number of codes found: " + codenum.toString() + "/34";
    document.getElementById("codefill").innerHTML = codefound;
    const snap = snapshot.val()
    step = snap.step
    const pres = snap.codes
    const code = snap.numbers
    console.log(pres)
    allDiv.forEach(function (unit) {
        unit.style.display = "none"
    })
    activeName = "step" + step.toString()
    activatedname = activeName.toString()
    selectedElement = document.getElementById(activatedname)
    selectedElement.style.display = "block"
    for (var pre in pres) {
        if (pres[pre] == true) {
            presnum = presnum + 1
            presfound = "Number of presidents scanned: " + presnum.toString() + "/16";
            document.getElementById("prescan").innerHTML = presfound;
        } else {

        }
    }
    for (var num in code) {
        if (code[num] == true) {
            codenum = codenum + 1
            codefound = "Number of codes found: " + codenum.toString() + "/34";
            document.getElementById("codefill").innerHTML = codefound;
        } else {

        }
    }
})