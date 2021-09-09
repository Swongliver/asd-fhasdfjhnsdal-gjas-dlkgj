console.log("ml5 version=",ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/W-llAz4K0/model.json",modelLoaded)
function modelLoaded(){
    console.log("modelLoaded")
}
Webcam.set({
    height:300,
    width:350,
    image_format:"png",
    png_quality:80
})
camera=document.getElementById("camera");
Webcam.attach(camera);
function snap(){
Webcam.snap(function(data_uri){
    console.log(data_uri);
    document.getElementById("result").innerHTML="<img id='captured_image' src='"+ data_uri+"'>";
})
}
prediction_1="";
prediction_2="";
function speak(){
    var synth=window.speechSynthesis;
var speak_1="The first prediction is "+ prediction_1;
var speak_2="and the second prediction is "+ prediction_2
var utter_this= new SpeechSynthesisUtterance(speak_1+speak_2)
synth.speak(utter_this) 
}