var firebaseRef = firebase.database();
var step
firebaseRef.ref().on("value", snapshot => {
    const snap = snapshot.val();
    step = snap.step;
})
//image recognition
const imageUpload = document.getElementById('imageUpload')
const imageUpload1 = document.getElementById('imageUpload1')

Promise.all([
    faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
    faceapi.nets.ssdMobilenetv1.loadFromUri('/models')
]).then(start)

async function start() {
    const container = document.createElement('div')
    container.style.position = 'relative'
    document.body.append(container)
    const labeledFaceDescriptors = await loadLabeledImages()
    const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors, 0.8)
    let image
    let canvas
    document.querySelectorAll("label").forEach(function (element) {
        element.style.display = "block";
    });
    document.querySelectorAll("#scanload").forEach(function (element) {
        element.style.display = "none";
    });
    imageUpload.addEventListener('change', async () => {
        if (image) image.remove()
        if (canvas) canvas.remove()
        image = await faceapi.bufferToImage(imageUpload.files[0])
        canvas = faceapi.createCanvasFromMedia(image)
        const displaySize = { width: image.width, height: image.height }
        faceapi.matchDimensions(canvas, displaySize)
        const detections = await faceapi.detectAllFaces(image).withFaceLandmarks().withFaceDescriptors()
        const resizedDetections = faceapi.resizeResults(detections, displaySize)
        const results = resizedDetections.map(d => faceMatcher.findBestMatch(d.descriptor))
        results.forEach((result, i) => {
            var res = result.toString();
            console.log(res)
            if (res.indexOf("Abraham Lincoln") > -1) {
                const code = {
                    lincoln: true
                }
                firebaseRef.ref("codes").update(code)
                alert("Abraham Lincoln found!")
            }
            else if (res.indexOf("Barack Obama") > -1) {
                const code = {
                    obama: true
                }
                firebaseRef.ref("codes").update(code)
                alert("Barack Obama found!")
            }
            else if (res.indexOf("Bill Clinton") > -1) {
                const code = {
                    clinton: true
                }
                firebaseRef.ref("codes").update(code)
                alert("Bill Clinton found!")
            }
            else if (res.indexOf("Dwight Eisenhower") > -1) {
                const code = {
                    eisenhower: true
                }
                firebaseRef.ref("codes").update(code)
                alert("Dwight Eisenhower found!")
            }
            else if (res.indexOf("Franklin Delano Roosevelt") > -1) {
                const code = {
                    roosevelt: true
                }
                firebaseRef.ref("codes").update(code)
                alert("Franklin Delano Roosevelt found!")
            }
            else if (res.indexOf("George Bush") > -1) {
                const code = {
                    bush: true
                }
                firebaseRef.ref("codes").update(code)
                alert("George Bush found!")
            }
            else if (res.indexOf("George Washington") > -1) {
                const code = {
                    washington: true
                }
                firebaseRef.ref("codes").update(code)
                alert("George Washington found!")
            }
            else if (res.indexOf("Harry Truman") > -1) {
                const code = {
                    truman: true
                }
                firebaseRef.ref("codes").update(code)
                alert("Harry Truman found!")
            }
            else if (res.indexOf("James Abraham Garfield") > -1) {
                const code = {
                    garfield: true
                }
                firebaseRef.ref("codes").update(code)
                alert("James Abraham Garfield found!")
            }
            else if (res.indexOf("Joe Biden") > -1) {
                const code = {
                    biden: true
                }
                firebaseRef.ref("codes").update(code)
                alert("Joe Biden found!")
            }
            else if (res.indexOf("John Fitzgerald Kennedy") > -1) {
                const code = {
                    kennedy: true
                }
                firebaseRef.ref("codes").update(code)
                alert("John Fitzgerald Kennedy found!")
            }
            else if (res.indexOf("McKinley") > -1) {
                const code = {
                    mckinley: true
                }
                firebaseRef.ref("codes").update(code)
                alert("McKinley found!")
            }
            else if (res.indexOf("Richard Nixon") > -1) {
                const code = {
                    nixon: true
                }
                firebaseRef.ref("codes").update(code)
                alert("Richard Nixon found!")
            }
            else if (res.indexOf("Ronald Reagan") > -1) {
                const code = {
                    reagan: true
                }
                firebaseRef.ref("codes").update(code)
                alert("Ronald Reagan found!")
            }
            else if (res.indexOf("Ulysse Grant") > -1) {
                const code = {
                    grant: true
                }
                firebaseRef.ref("codes").update(code)
                alert("Ulysse Grant found!")
            }
            else if (res.indexOf("Woodrow Wilson") > -1) {
                const code = {
                    wilson: true
                }
                firebaseRef.ref("codes").update(code)
                alert("Woodrow Wilson found!")
            }
            else {
                alert("Unknown person!")
            }
        })
    })
    imageUpload1.addEventListener('change', async () => {
        if (image) image.remove()
        if (canvas) canvas.remove()
        image = await faceapi.bufferToImage(imageUpload1.files[0])
        canvas = faceapi.createCanvasFromMedia(image)
        const displaySize = { width: image.width, height: image.height }
        faceapi.matchDimensions(canvas, displaySize)
        const detections = await faceapi.detectAllFaces(image).withFaceLandmarks().withFaceDescriptors()
        const resizedDetections = faceapi.resizeResults(detections, displaySize)
        const results = resizedDetections.map(d => faceMatcher.findBestMatch(d.descriptor))
        results.forEach((result, i) => {
            var res = result.toString();
            console.log(res)
            if (res.indexOf("Lady Liberty") > -1) {
                const code = {
                    lliberty: true
                }
                firebaseRef.ref("codes").update(code)
                step = step + 1
                const fstep = {
                    step : step
                }
                firebaseRef.ref().update(fstep)
                alert("Lady Liberty found!")
            }
            else {
                alert("Unknown person!")
            }
        })
    })
}

function loadLabeledImages() {
    const labels = ["Abraham Lincoln", "Barack Obama", "Bill Clinton", "Dwight Eisenhower", "Franklin Delano Roosevelt", "George Bush", "George Washington", "Harry Truman", "James Abraham Garfield", "Joe Biden", "John Fitzgerald Kennedy", "McKinley", "Richard Nixon", "Ronald Reagan", "Ulysse Grant", "Woodrow Wilson", "Lady Liberty"]
    return Promise.all(
        labels.map(async label => {
            const descriptions = []
            const img = await faceapi.fetchImage(`labeled_images/${label}/1.jpg`)
            const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()
            descriptions.push(detections.descriptor)

            return new faceapi.LabeledFaceDescriptors(label, descriptions)
        })
    )
}