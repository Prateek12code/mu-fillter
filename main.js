noseX=0;
noseY=0;

function preload()
{
clown_nose = loadImage('https://i.postimg.cc/GprFTSnm/download-2-removebg-preview.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center(); 
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("poseNet is Intialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x - 22;
        noseY = results[0].pose.nose.y - 5;
        console.log("nose x =" + noseX);
        console.log("nose y =" + noseY);
    }

}

function draw(){

    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 50, 50);

}

function take_snapshot(){
    save('myImage.png');
}