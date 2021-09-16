var nose_X=0;
var nose_Y=0;
var rightWrist_X=0;
var leftWrist_X=0;
var difference=0;
var color_box;
function preload(){
   
}

function setup(){
  canvas= createCanvas(400, 400);
  canvas.center();
  video=createCapture(VIDEO);
  video.size(500, 600);
  poseNet=ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotResult);

}

function modelLoaded(){
  console.log("Model is loaded");
}

function draw(){
  color_box=document.getElementById("color_box").value;
  background('#476b6b');
  fill(color_box);
  stroke(color_box);
  square(nose_X, nose_Y, difference);
  
}

function gotResult(results){
  if(results.length > 0){
      console.log(results);
      nose_X=results[0].pose.nose.x;
      nose_Y=results[0].pose.nose.y;
      console.log("nose_X: "+ nose_X+", "+"nose_Y: "+ nose_Y);
      leftWrist_X=results[0].pose.leftWrist.x;
      rightWrist_X=results[0].pose.rightWrist.x;

      console.log("leftWrist_X: "+ leftWrist_X + ", " + "rightWrist_X: " + rightWrist_X);
      difference=floor(leftWrist_X - rightWrist_X);
      console.log("difference"+ difference);
      document.getElementById("size_of_box").innerHTML=difference+"x"+ difference;
      }

}