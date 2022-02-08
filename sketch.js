let colors = ["#ff0000", "#0000ff", "#0fff00", "#0fff00"];
//let colors = ["#000000"];
let shapes = ["ellipse(80, 80, 160)"];
let canvas;
let value = 0;
let rgb = false;
let save = false;

function setup() {
  canvas = createCanvas(500, 500);
  imageMode(CENTER);
  
  let div = createDiv();
  div.addClass("controls");

  slider = createSlider(2, 15, 7, 1);
  slider.parent(div);

  button1 = createButton("RGB");
  button1.mousePressed(changeMode);
  button1.parent(div);
  button1.style('background-color', "white");
  button1.style('font-size', "15px");
  button1.style('font-family', "Roboto Mono");

  button = createButton("Save image");
  button.mousePressed(saveImage);
  button.parent(div);
  button.style('background-color', "white");
  button.style('font-size', "15px");
  button.style('font-family', "Roboto Mono");

}

function draw() {  


  randomSeed();
  background(255);
  grid();
  noLoop();

}


function mousePressed(){
  redraw();
}

function grid() {
  
  //frameRate(.5);
  //let seg = int(random(2, 10));
  let seg = slider.value();

  let w = width / seg;
  for (let i = 0; i < seg; i++) {
    for (let j = 0; j < seg; j++) {
      let x = i * w + w / 2;
      let y = j * w + w / 2;
      var ran = floor(random(4));
      drawRndGrfx(x, y, w, ran);
    }
  }
}

function drawRndGrfx(x, y, w, ran) {
  let g = createGraphics(w, w);

  if(rgb){

  //shuffle(colors, true);
  g.fill(colors[ran]);

  }
  else{
    g.fill("black");
  }
  
  g.push();
  g.noStroke();
  //g.background("white");
  //g.fill(colors[0]);
  
  if(ran == 0){
    g.translate(w / 2, w / 2);
    g.ellipse(0,0,w);
  }
  if(ran == 1){
    g.rect(0,0,w,w);
  }

 if(ran == 2){
    g.triangle(0,0,w,0,0,w);
 } 

 if(ran == 3){
    g.triangle(w,0,w,w,0,w);
 }

 if(ran == 4){
    g.fill("white");
    g.rect(0,0,w,w);
} 

  g.pop();
  image(g, x, y);

}

function saveImage() {
  saveCanvas(canvas, "Pattern", "jpg"); 
}

function changeMode() {
  rgb = !rgb;
  if(rgb == true){
    button1.style("background", "#D3D3D3");
    
  }
  if(rgb == false){
      button1.style("background", "white");
  }
 }

function windowResized() {
}

