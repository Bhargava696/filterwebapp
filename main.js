function preload(){}
function setup(){
    abc = createCanvas(400,300);
    abc.center();
    dions = createCapture(VIDEO);
    dions.size(400,300);
    dions.hide();
    dan = ml5.poseNet(dions,modelLoaded);
    dan.on("pose",gotPoses);
}
function draw(){
    image(dions,0,0,400,300);
}
function capt(){
    save("image.png");
}
function modelLoaded(){
    console.log("Model is loaded")
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("x = "+results[0].pose.nose.x);
        console.log("y = "+results[0].pose.nose.y);
    }
}