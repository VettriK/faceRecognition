var camera = document.getElementById("camera")
Webcam.attach(camera)
Webcam.set({
    width: 340,
    height: 250,
    image_format:"jpeg",
    jpeg_quality: 95
})
function capture() {
    Webcam.snap(function(dataUri){
        document.getElementById("result").innerHTML="<img id='imgResult' src="+dataUri+">"
    })
}
console.log("ML5 Version", ml5.version)
var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/XZGy3_jy4/model.json",modelLoaded)
function modelLoaded() {
    console.log("ModelLoadedSuccessfully")
}
function identify() {
    var img = document.getElementById("imgResult")
    classifier.classify(img, getResult)
}
function getResult(error, result) {
    if(error){
        console.log(error)
    }
    else {
        console.log(result)
        document.getElementById("objectName").innerHTML=result[0].label
        document.getElementById("acurracy").innerHTML=result[0].confidence.toFixed(2)
    }
}