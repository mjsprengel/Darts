var p1score = 0;
var p2score = 0;
var points = 0;
var strk = 180;
var current_player = true;
var clicks = 0;
var arr = [10,15,2,17,3,19,7,16,8,11,14,9,12,5,20,1,18,4,13,6]; //displays numbers in ring around dart board
var scoreArr = [20,19,18,17,16,15,"B"]; //used for displaying scorebox numbers
var counter = 0;
var alph = 255;
var p1Arr = [];
var p2Arr = []; 
var p1Ledger = [0,0,0,0,0,0,0];
var p2Ledger = [0,0,0,0,0,0,0];
var thump;

function preload(){
  thump = loadSound('thump.mp3');
}

function setup() {
  width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
  createCanvas(width, height);

}

function draw() {
 
  //noLoop();
  background(20);
  stroke(180);
  fill(0, 0, 0);
  ellipse(width/2, height/2, height-10, height-10);
  strokeWeight(1);
  
  if(current_player){
    fill(128 + sin(frameCount*0.1) * 128, 0, 85);
    textAlign(LEFT,BASELINE);
    textSize(42 + 1.5*sin(frameCount*0.1));
    text("Unstoppable Force", width/40, height/12);
    fill(0,0,85);
    textSize(42);
    textAlign(RIGHT);
    text("Immovable Object", 39*width/40, height/12);
    textAlign(CENTER);
    textSize(64)
    noStroke();
    if(mouseIsPressed && clicks!=0){
      fill(161,0,255,alph);
      textAlign(LEFT);
      text(p1score, width/40, height/5);
      textAlign(RIGHT);
      fill(161,0,255);
      text(p2score, 39*width/40, height/5);
      alph -= 100;

    } else {
      alph = 255;
      fill(161,0,255);
      textAlign(LEFT);
      text(p1score, width/40, height/5);
      textAlign(RIGHT);
      text(p2score, 39*width/40, height/5);
    }
    
  }
  
  if(!current_player){
    fill(0,0,85);
    textSize(42);
    textAlign(LEFT,BASELINE);
    text("Unstoppable Force", width/40, height/12);
    textSize(42);
    fill(128 + sin(frameCount*0.1) * 128, 0, 85);
    textAlign(RIGHT);
    textSize(42 + 1.5*sin(frameCount*0.1));
    text("Immovable Object", 39*width/40, height/12);
    textAlign(CENTER);
    textSize(64);
    noStroke();
    if(mouseIsPressed && clicks!=0){ //161,0,255
      fill(161,0,255);
      textAlign(LEFT);
      text(p1score, width/40, height/5);
      textAlign(RIGHT);
      fill(161,0,255, alph);
      text(p2score, 39*width/40, height/5);
      alph -= 100;
    } else {
      alph = 255;
      fill(161,0,255);
      textAlign(LEFT);
      text(p1score, width/40, height/5);
      textAlign(RIGHT);
      text(p2score, 39*width/40, height/5);
    }
  }
  
  //reset button
  if(mouseIsPressed && mouseX>width-70 && mouseY>height-30){
    fill(100,0,0);
    stroke(100);
    rect(width-70, height-30, 69, 29);
  } else {
    fill(255,0,0);
    stroke(255);
    rect(width-70, height-30, 69, 29);
  }
  
  fill(255);
  textSize(12);
  textAlign(CENTER);
  text("RESET", width-35, height-10);
  
  //score history
  textSize(30);
  textAlign(LEFT);
  fill(161,0,255);
  text(p1Arr, width/40, 11*height/12);
  textAlign(RIGHT);
  text(p2Arr, 39*width/40, 11*height/12);
  
  textAlign(CENTER,CENTER);
  //outter red doubles ring
  var k = 1;
  var n = 1;
  for(var i = 0; i<10; i++){
    stroke(strk);
    fill(211,31,31);
    arc(width/2, height/2, height-(height/16.5), height-(height/16.5), k*(TWO_PI/40) , n*(TWO_PI/20)+TWO_PI/40);
    k += 4;
    n += 2;
  }
  
  //outter green doubles ring
  var k = 1;
  var n = 1;
  for(var i = 0; i<10; i++){
    stroke(strk);
    fill(81,187,51);
    arc(width/2, height/2, height-(height/16.5), height-(height/16.5), k*(TWO_PI/40)-TWO_PI/20 , n*(TWO_PI/20)-TWO_PI/40);
    k += 4;
    n += 2;
  }
  
  //main singles black ring
  var k = 1;
  var n = 1;
  for(var i = 0; i<10; i++){
    stroke(strk);
    fill(10,10,10);
    arc(width/2, height/2, height-(height/6.62), height-(height/6.62), k*(TWO_PI/40) , n*(TWO_PI/20)+TWO_PI/40);
    k += 4;
    n += 2;
  }
  
  //main singles white ring
  var k = 1;
  var n = 1;
  for(var i = 0; i<10; i++){
    stroke(strk);
    fill(200,165,77);
    arc(width/2, height/2, height-(height/6.62), height-(height/6.62), k*(TWO_PI/40)-TWO_PI/20 , n*(TWO_PI/20)-TWO_PI/40);
    k += 4;
    n += 2;
  }
  
  //inner red triples ring
  var k = 1;
  var n = 1;
  for(var i = 0; i<10; i++){
    stroke(strk);
    fill(211,31,31);
    arc(width/2, height/2, height-(height/2.2), height-(height/2.2), k*(TWO_PI/40) , n*(TWO_PI/20)+TWO_PI/40);
    k += 4;
    n += 2;
  }
  
  //inner green triples ring
  var k = 1;
  var n = 1;
  for(var i = 0; i<10; i++){
    stroke(strk);
    fill(81,187,51);
    arc(width/2, height/2, height-(height/2.2), height-(height/2.2), k*(TWO_PI/40)-TWO_PI/20 , n*(TWO_PI/20)-TWO_PI/40);
    k += 4;
    n += 2;
  }
  
  //main singles black ring
  var k = 1;
  var n = 1;
  for(var i = 0; i<10; i++){
    stroke(strk);
    fill(10,10,10);
    arc(width/2, height/2, height-(height/1.83), height-(height/1.83), k*(TWO_PI/40) , n*(TWO_PI/20)+TWO_PI/40);
    k += 4;
    n += 2;
  }
  
  //main singles white ring
  var k = 1;
  var n = 1;
  for(var i = 0; i<10; i++){
    stroke(strk);
    fill(200,165,77);
    arc(width/2, height/2, height-(height/1.83), height-(height/1.83), k*(TWO_PI/40)-TWO_PI/20 , n*(TWO_PI/20)-TWO_PI/40);
    k += 4;
    n += 2;
  }
  
  //numbers on outter edge. They're held in the array arr, in order starting from 10 going clockwise
  textSize(20);
  for(var i = 1; i<21; i++){
    stroke(255);
    fill(255);
    text(arr[i-1],(((height-(height/25))/2)*(cos(i*(TWO_PI/20))))+width/2,(((height-(height/25))/2)*(sin(i*(TWO_PI/20))))+height/2);
    fill(81,187,51);
    stroke(strk);
    line(width/2, height/2, (((height-(height/16.5))/2)*(cos(TWO_PI/40 + i*(TWO_PI/20))))+width/2, (((height-(height/16.5))/2)*(sin(TWO_PI/40 + i*(TWO_PI/20))))+height/2);
    ellipse(width/2, height/2, height/10, height/10);
    fill(211,31,31);
    ellipse(width/2, height/2, height/20, height/20);
  }
  
  //SCOREBOXES
  for(var i = 4; i<12; i++){
    line(width/40, i*height/16, 7*width/40, i*height/16); //left scorebox
    line(39*width/40, i*height/16, 33*width/40, i*height/16); //right scorebox
  }
  
  textSize(32);
  noStroke();
  fill(161,0,255);
  for(var i = 4; i<12; i++){
    var j = 1 + 2*i;
    if(counter < scoreArr.length){
      textAlign(LEFT);
      text(scoreArr[counter], width/40, j*height/32);
      textAlign(RIGHT);
      text(scoreArr[counter], 39*width/40, j*height/32); //draw p2score here
    }
    counter++;
  }
  counter = 0;
  
  for(var i = 4; i<11; i++){
    var j = 1 + 2*i;
    drawScore(); //draws p1score here, drawScore takes true or false, for right pointing or left pointing x's
  }
  
}

function mousePressed(){
  
  thump.setVolume(0.1);
  thump.play();
  var d = dist(mouseX, mouseY, width/2, height/2);
  
  //double ring
  if((d < (height-(height/16.5))/2) && (d > (height-(height/6.62))/2)){

    var angle = atan2(mouseY-height/2, mouseX-width/2);
    
    if(angle < PI/20 && angle > -PI/20){
      console.log("DOUBLE SIX");
      points = 6;
    }
    if(angle < 3*PI/20 && angle > PI/20){
      console.log("DOUBLE TEN");
      points = 10;
    }
    if(angle < 5*PI/20 && angle > 3*PI/20){
      console.log("DOUBLE FIFTEEN");
      if(current_player){
        p1Ledger[0] += 2;
      } else {
        p2Ledger[0] += 2;
      }
      points = 15;
    }
    if(angle < 7*PI/20 && angle > 5*PI/20){
      console.log("DOUBLE TWO");
      points = 2;
    }
    if(angle < 9*PI/20 && angle > 7*PI/20){
      console.log("DOUBLE SEVENTEEN");
      if(current_player){
        p1Ledger[2] += 2;
      } else {
        p2Ledger[2] += 2;
      }
      points = 17;
    }
    if(angle < 11*PI/20 && angle > 9*PI/20){
      console.log("DOUBLE THREE");
      points = 3;
    }
    if(angle < 13*PI/20 && angle > 11*PI/20){
      console.log("DOUBLE NINETEEN");
      if(current_player){
        p1Ledger[4] += 2;
      } else {
        p2Ledger[4] += 2;
      }
      points = 19;
    }
    if(angle < 15*PI/20 && angle > 13*PI/20){
      console.log("DOUBLE SEVEN");
      points = 7;
    }
    if(angle < 17*PI/20 && angle > 15*PI/20){
      console.log("DOUBLE SIXTEEN");
      if(current_player){
        p1Ledger[1] += 2;
      } else {
        p2Ledger[1] += 2;
      }
      points = 16;
    }
    if(angle < 19*PI/20 && angle > 17*PI/20){
      console.log("DOUBLE EIGHT");
      points = 8;
    }
    if((angle < PI && angle > 19*PI/20) || (angle < -19*PI/20 && angle > -PI)){
      console.log("DOUBLE ELEVEN");
      points = 11;
    }
    if(angle < -17*PI/20 && angle > -19*PI/20){
      console.log("DOUBLE FOURTEEN");
      points = 14;
    }
    if(angle < -15*PI/20 && angle > -17*PI/20){
      console.log("DOUBLE NINE");
      points = 9;
    }
    if(angle < -13*PI/20 && angle > -15*PI/20){
      console.log("DOUBLE TWELVE");
      points = 12;
    }
    if(angle < -11*PI/20 && angle > -13*PI/20){
      console.log("DOUBLE FIVE");
      points = 5;
    }
    if(angle < -9*PI/20 && angle > -11*PI/20){
      console.log("DOUBLE TWENTY");
      if(current_player){
        p1Ledger[5] += 2;
      } else {
        p2Ledger[5] += 2;
      }
      points = 20;
    }
    if(angle < -7*PI/20 && angle > -9*PI/20){
      console.log("DOUBLE ONE");
      points = 1;
    }
    if(angle < -5*PI/20 && angle > -7*PI/20){
      console.log("DOUBLE EIGHTEEN");
      if(current_player){
        p1Ledger[3] += 2;
      } else {
        p2Ledger[3] += 2;
      }
      points = 18;
    }
    if(angle < -3*PI/20 && angle > -5*PI/20){
      console.log("DOUBLE FOUR");
      points = 4;
    }
    if(angle < -PI/20 && angle > -3*PI/20){
      console.log("DOUBLE THIRTEEN");
      points = 13;
    }
    
    points = points*2;
  }
  
  //main rings for singles                                                                150                               
  if(((d < (height-(height/6.62))/2) && (d > (height-(height/2.2))/2)) || ((d < (height-(height/1.83))/2) && (d > (height/20) ))){
    var angle = atan2(mouseY-height/2, mouseX-width/2);
    
    if(angle < PI/20 && angle > -PI/20){
      console.log("SIX");
      points = 6;
    }
    if(angle < 3*PI/20 && angle > PI/20){
      console.log("TEN");
      points = 10;
    }
    if(angle < 5*PI/20 && angle > 3*PI/20){
      console.log("FIFTEEN");
      if(current_player){
        p1Ledger[0] += 1;
      } else {
        p2Ledger[0] += 1;
      }
      points = 15;
    }
    if(angle < 7*PI/20 && angle > 5*PI/20){
      console.log("TWO");
      points = 2;
    }
    if(angle < 9*PI/20 && angle > 7*PI/20){
      console.log("SEVENTEEN");
      if(current_player){
        p1Ledger[2] += 1;
      } else {
        p2Ledger[2] += 1;
      }
      points = 17;
    }
    if(angle < 11*PI/20 && angle > 9*PI/20){
      console.log("THREE");
      points = 3;
    }
    if(angle < 13*PI/20 && angle > 11*PI/20){
      console.log("NINETEEN");
      if(current_player){
        p1Ledger[4] += 1;
      } else {
        p2Ledger[4] += 1;
      }
      points = 19;
    }
    if(angle < 15*PI/20 && angle > 13*PI/20){
      console.log("SEVEN");
      points = 7;
    }
    if(angle < 17*PI/20 && angle > 15*PI/20){
      console.log("SIXTEEN");
      if(current_player){
        p1Ledger[1] += 1;
      } else {
        p2Ledger[1] += 1;
      }
      points = 16;
    }
    if(angle < 19*PI/20 && angle > 17*PI/20){
      console.log("EIGHT");
      points = 8;
    }
    if((angle < PI && angle > 19*PI/20) || (angle < -19*PI/20 && angle > -PI)){
      console.log("ELEVEN");
      points = 11;
    }
    if(angle < -17*PI/20 && angle > -19*PI/20){
      console.log("FOURTEEN");
      points = 14;
    }
    if(angle < -15*PI/20 && angle > -17*PI/20){
      console.log("NINE");
      points = 9;
    }
    if(angle < -13*PI/20 && angle > -15*PI/20){
      console.log("TWELVE");
      points = 12;
    }
    if(angle < -11*PI/20 && angle > -13*PI/20){
      console.log("FIVE");
      points = 5;
    }
    if(angle < -9*PI/20 && angle > -11*PI/20){
      console.log("TWENTY");
      if(current_player){
        p1Ledger[5] += 1;
      } else {
        p2Ledger[5] += 1;
      }
      points = 20;
    }
    if(angle < -7*PI/20 && angle > -9*PI/20){
      console.log("ONE");
      points = 1;
    }
    if(angle < -5*PI/20 && angle > -7*PI/20){
      console.log("EIGHTEEN");
      if(current_player){
        p1Ledger[3] += 1;
      } else {
        p2Ledger[3] += 1;
      }
      points = 18;
    }
    if(angle < -3*PI/20 && angle > -5*PI/20){
      console.log("FOUR");
      points = 4;
    }
    if(angle < -PI/20 && angle > -3*PI/20){
      console.log("THIRTEEN");
      points = 13;
    }
    
    if(current_player){
      //p1score += points;
    }
    if(!current_player){
      //p2score += points;
    }
  }
  
  // TRIPLES!!!
  if((d < (height-(height/2.2))/2) && (d > (height-(height/1.83))/2)){
    var angle = atan2(mouseY-height/2, mouseX-width/2);   
    
    if(angle < PI/20 && angle > -PI/20){
      console.log("TRIPLE SIX");
      points = 6;
    }
    if(angle < 3*PI/20 && angle > PI/20){
      console.log("TRIPLE TEN");
      points = 10;
    }
    if(angle < 5*PI/20 && angle > 3*PI/20){
      console.log("TRIPLE FIFTEEN");
      if(current_player){
        p1Ledger[0] += 3;
      } else {
        p2Ledger[0] += 3;
      }
      points = 15;
    }
    if(angle < 7*PI/20 && angle > 5*PI/20){
      console.log("TRIPLE TWO");
      points = 2;
    }
    if(angle < 9*PI/20 && angle > 7*PI/20){
      console.log("TRIPLE SEVENTEEN");
      if(current_player){
        p1Ledger[2] += 3;
      } else {
        p2Ledger[2] += 3;
      }
      points = 17;
    }
    if(angle < 11*PI/20 && angle > 9*PI/20){
      console.log("TRIPLE THREE");
      points = 3;
    }
    if(angle < 13*PI/20 && angle > 11*PI/20){
      console.log("TRIPLE NINETEEN");
      if(current_player){
        p1Ledger[4] += 3;
      } else {
        p2Ledger[4] += 3;
      }
      points = 19;
    }
    if(angle < 15*PI/20 && angle > 13*PI/20){
      console.log("TRIPLE SEVEN");
      points = 7;
    }
    if(angle < 17*PI/20 && angle > 15*PI/20){
      console.log("TRIPLE SIXTEEN");
      if(current_player){
        p1Ledger[1] += 3;
      } else {
        p2Ledger[1] += 3;
      }
      points = 16;
    }
    if(angle < 19*PI/20 && angle > 17*PI/20){
      console.log("TRIPLE EIGHT");
      points = 8;
    }
    if((angle < PI && angle > 19*PI/20) || (angle < -19*PI/20 && angle > -PI)){
      console.log("TRIPLE ELEVEN");
      points = 11;
    }
    if(angle < -17*PI/20 && angle > -19*PI/20){
      console.log("TRIPLE FOURTEEN");
      points = 14;
    }
    if(angle < -15*PI/20 && angle > -17*PI/20){
      console.log("TRIPLE NINE");
      points = 9;
    }
    if(angle < -13*PI/20 && angle > -15*PI/20){
      console.log("TRIPLE TWELVE");
      points = 12;
    }
    if(angle < -11*PI/20 && angle > -13*PI/20){
      console.log("TRIPLE FIVE");
      points = 5;
    }
    if(angle < -9*PI/20 && angle > -11*PI/20){
      console.log("TRIPLE TWENTY");
      if(current_player){
        p1Ledger[5] += 3;
      } else {
        p2Ledger[5] += 3;
      }
      points = 20;
    }
    if(angle < -7*PI/20 && angle > -9*PI/20){
      console.log("TRIPLE ONE");
      points = 1;
    }
    if(angle < -5*PI/20 && angle > -7*PI/20){
      console.log("TRIPLE EIGHTEEN");
      if(current_player){
        p1Ledger[3] += 3;
      } else {
        p2Ledger[3] += 3;
      }
      points = 18;
    }
    if(angle < -3*PI/20 && angle > -5*PI/20){
      console.log("TRIPLE FOUR");
      points = 4;
    }
    if(angle < -PI/20 && angle > -3*PI/20){
      console.log("TRIPLE THIRTEEN");
      points = 13;
    }
    
    points = points*3;
  }
  
  //outter bullseye
  if((d < height/20 ) && (d >= height/40)){
    if(current_player){
      //p1score += 25;
      p1Ledger[6] += 1;
      points += 25;
    }
    if(!current_player){
      //p2score += 25;
      p2Ledger[6] += 1;
      points += 25;
    }
    console.log("OUTTER BULLSEYE");
  }
  //inner bullseye
  if((d < height/40 )){
    if(current_player){
      //p1score += 50;
      p1Ledger[6] += 2;
      points += 50;
    }
    if(!current_player){
      //p2score += 50;
      p2Ledger[6] += 2;
      points += 50;
    }
    console.log("INNER BULLSEYE");
  }
  
  //check score every mouse click
  checkScore();
  
  //toggling players
  if(current_player){
    p1Arr.push(points);
    p2Arr = [];
  } else {
    p2Arr.push(points);
    p1Arr = [];
  }
  
  clicks += 1;
  if(clicks>=3){
    current_player = !current_player;
    clicks = 0;
  }

  //resetting score
  if(mouseX > width-69 && mouseY > height-29){
    p1score = 0;
    p2score = 0;
    clicks = 0;
    current_player = true;
    p1Arr = [];
    p2Arr = [];
    p1Ledger = [0,0,0,0,0,0,0];
    p2Ledger = [0,0,0,0,0,0,0];
  }
  
    points = 0; //resets to zero in between throws, since points works by += assignment, has to start at 0
}

function checkScore(){
  
  for(var i = 0; i < p1Ledger.length; i++){
    
      if(p1Ledger[0] > 3 && p2Ledger[0] < 3){
        p1score += (p1Ledger[0]-3)*15;
        p1Ledger[0] = 3;
      }
      if(p1Ledger[1] > 3 && p2Ledger[1] < 3){
        p1score += (p1Ledger[1]-3)*16;
        p1Ledger[1] = 3;
      }
      if(p1Ledger[2] > 3 && p2Ledger[2] < 3){
        p1score += (p1Ledger[2]-3)*17;
        p1Ledger[2] = 3;
      }
      if(p1Ledger[3] > 3 && p2Ledger[3] < 3){
        p1score += (p1Ledger[3]-3)*18;
        p1Ledger[3] = 3;
      }
      if(p1Ledger[4] > 3 && p2Ledger[4] < 3){
        p1score += (p1Ledger[4]-3)*19;
        p1Ledger[4] = 3;
      }
      if(p1Ledger[5] > 3 && p2Ledger[5] < 3){
        p1score += (p1Ledger[5]-3)*20;
        p1Ledger[5] = 3;
      }
      if(p1Ledger[6] > 3 && p2Ledger[6] < 3){
        p1score += (p1Ledger[6]-3)*25;
        p1Ledger[6] = 3;
      }
  }
  
  for(var i = 0; i < p2Ledger.length; i++){
      if(p2Ledger[0] > 3 && p1Ledger[0] < 3){
        p2score += (p2Ledger[0]-3)*15;
        p2Ledger[0] = 3;
      }
      if(p2Ledger[1] > 3 && p1Ledger[1] < 3){
        p2score += (p2Ledger[1]-3)*16;
        p2Ledger[1] = 3;
      }
      if(p2Ledger[2] > 3 && p1Ledger[2] < 3){
        p2score += (p2Ledger[2]-3)*17;
        p2Ledger[2] = 3;
      }
      if(p2Ledger[3] > 3 && p1Ledger[3] < 3){
        p2score += (p2Ledger[3]-3)*18;
        p2Ledger[3] = 3;
      }
      if(p2Ledger[4] > 3 && p1Ledger[4] < 3){
        p2score += (p2Ledger[4]-3)*19;
        p2Ledger[4] = 3;
      }
      if(p2Ledger[5] > 3 && p1Ledger[5] < 3){
        p2score += (p2Ledger[5]-3)*20;
        p2Ledger[5] = 3;
      }
      if(p2Ledger[6] > 3 && p1Ledger[6] < 3){
        p2score += (p2Ledger[6]-3)*25;
        p2Ledger[6] = 3;
      }
  }
}

function drawXmark(x, y){ //x, y are center of x
  var tmpLen = height/48;
  strokeWeight(3);
  line(x - (tmpLen), y - (tmpLen), x + (tmpLen), y + (tmpLen));
  line(x + (tmpLen), y - (tmpLen), x - (tmpLen), y + (tmpLen));
  strokeWeight(1);
  noStroke();
} 

function draw2XMark(x, y, isP1){//draws 2 evenly spaced x marks, colored red
  if(isP1){
    stroke(255, 0, 0);
    drawXmark(x,y);
    stroke(255, 0, 0);
    drawXmark(x+(height/16),y);
  } else {
    stroke(255, 0, 0);
    drawXmark(x,y);
    stroke(255, 0, 0);
    drawXmark(x-(height/16),y);
  }
}

function draw3XMark(x, y, isP1){ //draws 3 evenly spaced x marks, colored green
  if(isP1){
    stroke(0,255,0);
    drawXmark(x,y);
    stroke(0,255,0);
    drawXmark(x+(height/16),y);
    stroke(0,255,0);
    drawXmark(x+(2*height/16),y);
  } else {
    stroke(0,255,0);
    drawXmark(x,y);
    stroke(0,255,0);
    drawXmark(x-(height/16),y);
    stroke(0,255,0);
    drawXmark(x-(2*height/16),y);
  }
}

function drawScore(){
  
  // FIFTEEN //
  if(p1Ledger[0] >= 3){ 
    draw3XMark(3*width/40, 19*height/32, true);
  }
  if(p1Ledger[0] == 2){
    draw2XMark(3*width/40, 19*height/32, true);
  }
  if(p1Ledger[0] == 1){
    stroke(255,0,0);
    drawXmark(3*width/40, 19*height/32);
  }
  
  if(p2Ledger[0] >= 3){ 
    draw3XMark(37*width/40, 19*height/32, false);
  }
  if(p2Ledger[0] == 2){
    draw2XMark(37*width/40, 19*height/32, false);
  }
  if(p2Ledger[0] == 1){
    stroke(255,0,0);
    drawXmark(37*width/40, 19*height/32);
  }
  
  // SIXTEEN //
  if(p1Ledger[1] >= 3){ //drawing x marks for 15
    draw3XMark(3*width/40, 17*height/32, true);
  }
  if(p1Ledger[1] == 2){
    draw2XMark(3*width/40, 17*height/32, true);
  }
  if(p1Ledger[1] == 1){
    stroke(255,0,0);
    drawXmark(3*width/40, 17*height/32);
  }
  
  if(p2Ledger[1] >= 3){ 
    draw3XMark(37*width/40, 17*height/32, false);
  }
  if(p2Ledger[1] == 2){
    draw2XMark(37*width/40, 17*height/32, false);
  }
  if(p2Ledger[1] == 1){
    stroke(255,0,0);
    drawXmark(37*width/40, 17*height/32);
  }
  
  // SEVENTEEN //
  if(p1Ledger[2] >= 3){ //drawing x marks for 15
    draw3XMark(3*width/40, 15*height/32, true);
  }
  if(p1Ledger[2] == 2){
    draw2XMark(3*width/40, 15*height/32, true);
  }
  if(p1Ledger[2] == 1){
    stroke(255,0,0);
    drawXmark(3*width/40, 15*height/32);
  }
  
  if(p2Ledger[2] >= 3){ 
    draw3XMark(37*width/40, 15*height/32, false);
  }
  if(p2Ledger[2] == 2){
    draw2XMark(37*width/40, 15*height/32, false);
  }
  if(p2Ledger[2] == 1){
    stroke(255,0,0);
    drawXmark(37*width/40, 15*height/32);
  }
  
  // EIGHTEEN //
  if(p1Ledger[3] >= 3){ //drawing x marks for 15
    draw3XMark(3*width/40, 13*height/32, true);
  }
  if(p1Ledger[3] == 2){
    draw2XMark(3*width/40, 13*height/32, true);
  }
  if(p1Ledger[3] == 1){
    stroke(255,0,0);
    drawXmark(3*width/40, 13*height/32);
  }
  
  if(p2Ledger[3] >= 3){ 
    draw3XMark(37*width/40, 13*height/32, false);
  }
  if(p2Ledger[3] == 2){
    draw2XMark(37*width/40, 13*height/32, false);
  }
  if(p2Ledger[3] == 1){
    stroke(255,0,0);
    drawXmark(37*width/40, 13*height/32);
  }
  
  // NINETEEN //
  if(p1Ledger[4] >= 3){ //drawing x marks for 15
    draw3XMark(3*width/40, 11*height/32, true);
  }
  if(p1Ledger[4] == 2){
    draw2XMark(3*width/40, 11*height/32, true);
  }
  if(p1Ledger[4] == 1){
    stroke(255,0,0);
    drawXmark(3*width/40, 11*height/32);
  }
  
  if(p2Ledger[4] >= 3){ 
    draw3XMark(37*width/40, 11*height/32, false);
  }
  if(p2Ledger[4] == 2){
    draw2XMark(37*width/40, 11*height/32, false);
  }
  if(p2Ledger[4] == 1){
    stroke(255,0,0);
    drawXmark(37*width/40, 11*height/32);
  }
  
  // TWENTY //
  if(p1Ledger[5] >= 3){ //drawing x marks for 15
    draw3XMark(3*width/40, 9*height/32, true);
  }
  if(p1Ledger[5] == 2){
    draw2XMark(3*width/40, 9*height/32, true);
  }
  if(p1Ledger[5] == 1){
    stroke(255,0,0);
    drawXmark(3*width/40, 9*height/32);
  }
  
  if(p2Ledger[5] >= 3){ 
    draw3XMark(37*width/40, 9*height/32, false);
  }
  if(p2Ledger[5] == 2){
    draw2XMark(37*width/40, 9*height/32, false);
  }
  if(p2Ledger[5] == 1){
    stroke(255,0,0);
    drawXmark(37*width/40, 9*height/32);
  }
  
  // BULLSEYE //
  if(p1Ledger[6] >= 3){ //drawing x marks for 15
    draw3XMark(3*width/40, 21*height/32, true);
  }
  if(p1Ledger[6] == 2){
    draw2XMark(3*width/40, 21*height/32, true);
  }
  if(p1Ledger[6] == 1){
    stroke(255,0,0);
    drawXmark(3*width/40, 21*height/32);
  }
  
  if(p2Ledger[6] >= 3){ 
    draw3XMark(37*width/40, 21*height/32, false);
  }
  if(p2Ledger[6] == 2){
    draw2XMark(37*width/40, 21*height/32, false);
  }
  if(p2Ledger[6] == 1){
    stroke(255,0,0);
    drawXmark(37*width/40, 21*height/32);
  }
  
}
