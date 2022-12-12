var img1;
var img2;
var img3;
var index = 0;
var words = ["cut", "paste", "trim", "glue"];
var w = 1600;
var h = 900;
var x = 50;
var y = 100;
var yspeed = 3;
var xspeed = 2;

var a = 100;
var p;

let f;
function preload() {
  f = loadFont('AlfaSlabOne-Regular.ttf');
}

// function setup() {
//   createCanvas(400, 400);
//    p = PI / 3
//      background(220);

// }
function preload(){
  img1 = loadImage('bg1.webp');
  img2 = loadImage('images.jpg')
  img3 = loadImage('3.2pdf.png')
}

function setup() {
  createCanvas(1600, 900);
  background(img1);
   
    p = PI / 3

  copy(img1, 50, 300, 50, 50, 40, 40, 485, 300);
  stroke(255);
  noFill();
  // Rectangle shows area being copied
  rect(90, 315, 50, 50);
  
  image(img1,random(100,1000),random(100,500));
  image(img2,random(100,1000),random(100,500));
  // image(img3,random(100,1000),random(100,500));
   
  //random shapes
  for(i=1; i<10; i++){
    fill(random(255),random(100),random(100), random (200))
    noStroke()
   
    beginShape();
    vertex(random(width),random(height));
    bezierVertex(random(w),random(h),random(w),random(h),random(w),random(h))
    endShape();
    
  }
  //line
   for(i=1; i<2; i++){
    noFill()
    stroke(random,random,random)
     strokeWeight(30)
   
    beginShape();
    vertex(random(width),random(height));
    bezierVertex(random(w),random(h),random(w),random(h),random(w),random(h))
    endShape();
  }
  
     fill(255);
  noStroke()
  textSize(32)
  textFont('impact')
  text(words[index], random(100,800), random(100,600))
}

function draw( ){
  
  fill(255,0,0)
  translate(width/2, height/2)
  rotate(p)
  rect(-30+p,-30+p,10,60)
  
  p = p + 3
  
}
function draw() {
  
  
  
  rect(1400,400,50,50)
  rect(1400,500,50,50)
  rect(1400,600,50,50)
  
  // image(img3,mouseX,mouseY)
  
  stroke(150,200,200)
  

 noStroke()
    textSize(60);
    fill(255)
  textFont("Abril Flatface");
text("Collage Workshop", x, y);
  

  fill(255)
  rect(100,width,mouseX,mouseY)
  
}

function mousePressed(){
  index= index + 1;
  
  if(index == words.length){
    index=0;
  }
  


}

