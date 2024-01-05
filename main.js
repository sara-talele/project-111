Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function (data_url) {
        document.getElementById("result").innerHTML = '<img id="capture_image" src="' + data_url + '"/>';

    });

}
console.log("ml5 version : ", ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/LrzHmZeGl/', modelloaded);

function modelloaded() {
    console.log("modelloaded");

}

function check_snapshot() {
    img = document.getElementById("capture_image");
    classifier.classify(img, got_result);
}

function got_result(error, results) {
    if (error) {
        console.error(error);

    } else {
        console.log(results);
        document.getElementById("result_name").innerHTML = results[0].label;
        document.getElementById("result_accuracy").innerHTML = results[0].confidence.toFixed(3);

        var synth = window.speechSynthesis;
        speak_data = "the object predicted is " + results[0].label;
        var utterthis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterthis);
    }
}