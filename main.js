//https://teachablemachine.withgoogle.com/models/4PhYLUL8x/
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
        document.getElementById("result").innerHTML = '<img id="capture_image" src="' + data_url + '">';
    });
}
console.log('ml5 version : ', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/4PhYLUL8x/modal.json', modalloaded);