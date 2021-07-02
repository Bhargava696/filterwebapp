pos_x = 0;
pos_y = 0;

function preload() {
    images = loadImage("https://i.postimg.cc/TP6gQD17/Moustache-Graphic.png");
}

function setup() {
    abc = createCanvas(400, 300);
    abc.center();
    dions = createCapture(VIDEO);
    dions.size(400, 300);
    dions.hide();
    dan = ml5.poseNet(dions, modelLoaded);
    dan.on("pose", gotPoses);
}

function draw() {
    image(dions, 0, 0, 400, 300);
    image(images, pos_x, pos_y, 100, 50);
}

function capt() {
    save("image.png");
}

function modelLoaded() {
    console.log("Model is loaded")
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        pos_x = results[0].pose.nose.x - 50;
        pos_y = results[0].pose.nose.y - 5;
        console.log("x = " + pos_x);
        console.log("y = " + pos_y);
    }
}