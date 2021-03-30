let teapot;
let n = 0;
let song;

//preload obj and sound files
function preload() {
  song = loadSound('sirius.mp3');
  teapot = loadModel('teapot.obj');
}


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(0);
  song.loop(); // loop song
}

function draw() {

  //key press adds 1 to n
  //so if key is pressed background
  //is either updated or not

  if (n % 2 == 0) {
    background(0); //
  }


    if (mouseIsPressed) {
      //rotate teapots with mouse position
      rotateY(mouseX * 0.01);
      rotateX(mouseY* 0.01)
    }

  //rotate canvas along y axis continuously
  rotateY(frameCount * 0.01);

  //lights
  //directionalLight(255,0,0,1,0,0);
  directionalLight(0, 255, 0, -1, 0, 0);
  directionalLight(0, 0, 255, -1, 0, 0);
  directionalLight(255, 255, 0, 0, 1, 0);
  directionalLight(0, 255, 255, 0, 0, 1);
  directionalLight(255, 0, 255, 0, 0, -1);

  //make it bigger
  scale(10);

  //sets of teapots dancing in circles 

  //j is the number of teapot circles
  for (let j = 0; j < 3; j++) {
    push();
    //i is the number of teapots in each circle
    for (let i = 0; i < 10; i++) {
      translate(
        sin(frameCount * 0.001 + j) * 100, //x value
        sin(frameCount * 0.001 + j) * 100, //y value
        i * 0.1 //z value 
      );
      //teapots slowly rotate along z axis
      rotateZ(frameCount * 0.002);

      //appearance of teapots
      push();
      noStroke();
      specularMaterial(255);
      shininess(20);
      model(teapot);
      pop();
    }
    pop();
  }
}

//function to control n for bg change
function keyPressed(event) {
  n += 1
  console.log(event);
}
