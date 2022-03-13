var firebaseRef = firebase.database();
const allDiv = document.querySelectorAll(".back");
var step
var activeName
var activatedname
var selectedElement

firebaseRef.ref().on("value", snapshot => {
    var snap = snapshot.val();
    step = snap.step;
    allDiv.forEach(function (unit) {
        unit.style.display = "none"
    })
    activeName = "step" + step.toString();
    activatedname = activeName.toString()
    selectedElement = document.getElementById(activatedname)
    console.log(selectedElement);
    selectedElement.style.display = "block"
    const btnname = "button" + step.toString();
    const inpname = "input" + step.toString();
    if (step == 1 || step == 3 || step == 4 || step == 6 || step == 7 || step == 8) {
        document.getElementById(btnname).addEventListener("click", function () {
            if (step == 1) {
                const enteredcode = document.getElementById(inpname).value;
                if (enteredcode == 2042) {
                    alert("Correct code!")
                    step = step + 1;
                    fstep = { step: step }
                    firebaseRef.ref().update(fstep);
                }
                else {
                    alert("Incorrect!")
                }
            }
            else if (step == 3) {
                const enteredcode = document.getElementById(inpname).value;
                if (enteredcode == "unless") {
                    step = step + 1;
                    fstep = { step: step }
                    firebaseRef.ref().update(fstep);
                }
                else {
                    alert("Incorrect!")
                }
            }
            else if (step == 4) {
                const enteredcode = document.getElementById(inpname).value;
                if (enteredcode == 1359) {
                    var num = { 1359: true }
                    alert("Correct Code!")
                    firebaseRef.ref("numbers").update(num)
                }
                else if (enteredcode == 1857) {
                    num = { 1857: true }
                    alert("Correct Code!")
                    firebaseRef.ref("numbers").update(num)
                }
                else if (enteredcode == 1912) {
                    num = { 1912: true }
                    alert("Correct Code!")
                    firebaseRef.ref("numbers").update(num)
                }
                else if (enteredcode == 2044) {
                    num = { 2044: true }
                    alert("Correct Code!")
                    firebaseRef.ref("numbers").update(num)
                }
                else if (enteredcode == 2051) {
                    num = { 2051: true }
                    alert("Correct Code!")
                    firebaseRef.ref("numbers").update(num)
                }
                else if (enteredcode == 2464) {
                    num = { 2464: true }
                    alert("Correct Code!")
                    firebaseRef.ref("numbers").update(num)
                }
                else if (enteredcode == 2623) {
                    num = { 2623: true }
                    alert("Correct Code!")
                    firebaseRef.ref("numbers").update(num)
                }
                else if (enteredcode == 2862) {
                    num = { 2862: true }
                    alert("Correct Code!")
                    firebaseRef.ref("numbers").update(num)
                }
                else if (enteredcode == 4581) {
                    num = { 4581: true }
                    alert("Correct Code!")
                    firebaseRef.ref("numbers").update(num)
                }
                else if (enteredcode == 4704) {
                    num = { 4704: true }
                    alert("Correct Code!")
                    firebaseRef.ref("numbers").update(num)
                }
                else if (enteredcode == 4978) {
                    num = { 4978: true }
                    alert("Correct Code!")
                    firebaseRef.ref("numbers").update(num)
                }
                else if (enteredcode == 5086) {
                    num = { 5086: true }
                    alert("Correct Code!")
                    firebaseRef.ref("numbers").update(num)
                }
                else if (enteredcode == 5317) {
                    num = { 5317: true }
                    alert("Correct Code!")
                    firebaseRef.ref("numbers").update(num)
                }
                else if (enteredcode == 5340) {
                    num = { 5340: true }
                    alert("Correct Code!")
                    firebaseRef.ref("numbers").update(num)
                }
                else if (enteredcode == 5591) {
                    num = { 5591: true }
                    alert("Correct Code!")
                    firebaseRef.ref("numbers").update(num)
                }
                else if (enteredcode == 5596) {
                    num = { 5596: true }
                    alert("Correct Code!")
                    firebaseRef.ref("numbers").update(num)
                }
                else if (enteredcode == 5609) {
                    num = { 5609: true }
                    alert("Correct Code!")
                    firebaseRef.ref("numbers").update(num)
                }
                else if (enteredcode == 6384) {
                    num = { 6384: true}
                    alert("Correct Code!")
                    firebaseRef.ref("numbers").update(num)
                }
                else if (enteredcode == 6567) {
                    num = { 6567: true }
                    alert("Correct Code!")
                    firebaseRef.ref("numbers").update(num)
                }
                else if (enteredcode == 6732) {
                    num = { 6732: true }
                    alert("Correct Code!")
                    firebaseRef.ref("numbers").update(num)
                }
                else if (enteredcode == 6965) {
                    num = { 6965: true }
                    alert("Correct Code!")
                    firebaseRef.ref("numbers").update(num)
                }
                else if (enteredcode == 7226) {
                    num = { 7226: true }
                    alert("Correct Code!")
                    firebaseRef.ref("numbers").update(num)
                }
                else if (enteredcode == 7389) {
                    num = { 7389: true }
                    alert("Correct Code!")
                    firebaseRef.ref("numbers").update(num)
                }
                else if (enteredcode == 7420) {
                    num = { 7420: true }
                    alert("Correct Code!")
                    firebaseRef.ref("numbers").update(num)
                }
                else if (enteredcode == 7727) {
                    num = { 7727: true }
                    alert("Correct Code!")
                    firebaseRef.ref("numbers").update(num)
                }
                else if (enteredcode == 7730) {
                    num = { 7730: true }
                    alert("Correct Code!")
                    firebaseRef.ref("numbers").update(num)
                }
                else if (enteredcode == 7864) {
                    num = { 7864: true }
                    alert("Correct Code!")
                    firebaseRef.ref("numbers").update(num)
                }
                else if (enteredcode == 8314) {
                    num = { 8314: true }
                    alert("Correct Code!")
                    firebaseRef.ref("numbers").update(num)
                }
                else if (enteredcode == 8526) {
                    num = { 8526: true }
                    alert("Correct Code!")
                    firebaseRef.ref("numbers").update(num)
                }
                else if (enteredcode == 8590) {
                    num = { 8590: true }
                    alert("Correct Code!")
                    firebaseRef.ref("numbers").update(num)
                }
                else if (enteredcode == 8768) {
                    num = { 8768: true }
                    alert("Correct Code!")
                    firebaseRef.ref("numbers").update(num)
                }
                else if (enteredcode == 8778) {
                    num = { 8778: true }
                    alert("Correct Code!")
                    firebaseRef.ref("numbers").update(num)
                }
                else if (enteredcode == 8959) {
                    num = { 8959: true }
                    alert("Correct Code!")
                    firebaseRef.ref("numbers").update(num)
                }
                else if (enteredcode == 9617) {
                    num = { 9617: true }
                    alert("Correct Code!")
                    firebaseRef.ref("numbers").update(num)
                }
                else {
                    alert("Incorrect!")
                }
            }
            else if (step == 6) {
                const enteredcode = document.getElementById(inpname).value;
                if (enteredcode == "AZ-758-PS") {
                    alert("Correct Number Plate!")
                    step = step + 1;
                    fstep = { step: step }
                    firebaseRef.ref().update(fstep);
                }
                else {
                    alert("Incorrect!")
                }
            }
            else if (step == 7) {
                const enteredcode = document.getElementById(inpname).value;
                if (enteredcode == 1978) {
                    alert("Correct Code!")
                    step = step + 1;
                    fstep = { step: step }
                    firebaseRef.ref().update(fstep);
                }
                else {
                    alert("Incorrect!")
                }
            }
            else if (step == 8) {
                const enteredcode = document.getElementById(inpname).value;
                if (enteredcode == "lsl lsl lsl  slll sl ss slss s lss  ll s") {
                    alert("Correct Code!")
                    step = step + 1;
                    fstep = { step: step }
                    firebaseRef.ref().update(fstep);
                }
                else {
                    alert("Incorrect!")
                }
            }
        })
    } else {
        console.log("not on a good one")
    }
});