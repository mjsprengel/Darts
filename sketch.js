var p1score = 0;
var p2score = 0;
var points = 0;
var strk = 180;
var width;
var height;
var current_player = true;
var clicks = 0;
var arr = [10,15,2,17,3,19,7,16,8,11,14,9,12,5,20,1,18,4,13,6];

function setup() {
  width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
  createCanvas(width, height);

}

function draw() {
 
  //noLoop();
  background(51);
  stroke(180);
  fill(0, 0, 0);
  ellipse(width/2, height/2, height-10, height-10);
  strokeWeight(1);
  
  if(current_player){
    fill(128 + sin(frameCount*0.1) * 128);
    textSize(42);
    textAlign(LEFT);
    text("Unstoppable Force", width/40, height/12);
    fill(255);
    textAlign(RIGHT);
    text("Immovable Object", 39*width/40, height/12);
    textAlign(CENTER);
    textSize(100)
    text(p1score, width/7, height/4);
    textAlign(CENTER);
    text(p2score, 6*width/7, height/4);
    
  }
  if(!current_player){
    fill(255);
    textSize(42);
    textAlign(LEFT);
    text("Unstoppable Force", width/40, height/12);
    fill(128 + sin(frameCount*0.1) * 128);
    textAlign(RIGHT);
    text("Immovable Object", 39*width/40, height/12);
    fill(255);
    textAlign(CENTER);
    textSize(100)
    text(p1score, width/7, height/4);
    textAlign(CENTER);
    text(p2score, 6*width/7, height/4);
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
  text("RESET", width-35, height-10);
  
  textSize(20)
  //need to make a point generating function for evenly spaced text
  

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
  

  textSize(20);
  for(var i = 1; i<21; i++){
    stroke(255);
    fill(255);
    text(arr[i-1],(((height-(height/16))/2)*(cos(i*(TWO_PI/20))))+width/2,(((height-(height/16))/2)*(sin(i*(TWO_PI/20))))+height/2)
    fill(81,187,51);
    stroke(strk);
    line(width/2, height/2, (((height-(height/16.5))/2)*(cos(TWO_PI/40 + i*(TWO_PI/20))))+width/2, (((height-(height/16.5))/2)*(sin(TWO_PI/40 + i*(TWO_PI/20))))+height/2);
    ellipse(width/2, height/2, height/10, height/10);
    fill(211,31,31);
    ellipse(width/2, height/2, height/20, height/20);
  }
}

function mousePressed(){
  
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
      points = 15;
    }
    if(angle < 7*PI/20 && angle > 5*PI/20){
      console.log("DOUBLE TWO");
      points = 2;
    }
    if(angle < 9*PI/20 && angle > 7*PI/20){
      console.log("DOUBLE SEVENTEEN");
      points = 17;
    }
    if(angle < 11*PI/20 && angle > 9*PI/20){
      console.log("DOUBLE THREE");
      points = 3;
    }
    if(angle < 13*PI/20 && angle > 11*PI/20){
      console.log("DOUBLE NINETEEN");
      points = 19;
    }
    if(angle < 15*PI/20 && angle > 13*PI/20){
      console.log("DOUBLE SEVEN");
      points = 7;
    }
    if(angle < 17*PI/20 && angle > 15*PI/20){
      console.log("DOUBLE SIXTEEN");
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
      points = 20;
    }
    if(angle < -7*PI/20 && angle > -9*PI/20){
      console.log("DOUBLE ONE");
      points = 1;
    }
    if(angle < -5*PI/20 && angle > -7*PI/20){
      console.log("DOUBLE EIGHTEEN");
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
    if(current_player){
      p1score += points;
      redraw();
    }
    if(!current_player){
      p2score += points;
      redraw();
    }
    points = 0;
  }
  
  //main rings for singles                                                                150                               
  if(((d < (height-(height/6.62))/2) && (d > (height-(height/2.2))/2)) || ((d < (height-(height/1.83))/2) && (d > (height/20) ))){
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
      points = 15;
    }
    if(angle < 7*PI/20 && angle > 5*PI/20){
      console.log("DOUBLE TWO");
      points = 2;
    }
    if(angle < 9*PI/20 && angle > 7*PI/20){
      console.log("DOUBLE SEVENTEEN");
      points = 17;
    }
    if(angle < 11*PI/20 && angle > 9*PI/20){
      console.log("DOUBLE THREE");
      points = 3;
    }
    if(angle < 13*PI/20 && angle > 11*PI/20){
      console.log("DOUBLE NINETEEN");
      points = 19;
    }
    if(angle < 15*PI/20 && angle > 13*PI/20){
      console.log("DOUBLE SEVEN");
      points = 7;
    }
    if(angle < 17*PI/20 && angle > 15*PI/20){
      console.log("DOUBLE SIXTEEN");
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
      points = 20;
    }
    if(angle < -7*PI/20 && angle > -9*PI/20){
      console.log("DOUBLE ONE");
      points = 1;
    }
    if(angle < -5*PI/20 && angle > -7*PI/20){
      console.log("DOUBLE EIGHTEEN");
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
    
    if(current_player){
      p1score += points;
      redraw();
    }
    if(!current_player){
      p2score += points;
      redraw();
    }
    points = 0;
  }
  
  // TRIPLES!!!
  if((d < (height-(height/2.2))/2) && (d > (height-(height/1.83))/2)){
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
      points = 15;
    }
    if(angle < 7*PI/20 && angle > 5*PI/20){
      console.log("DOUBLE TWO");
      points = 2;
    }
    if(angle < 9*PI/20 && angle > 7*PI/20){
      console.log("DOUBLE SEVENTEEN");
      points = 17;
    }
    if(angle < 11*PI/20 && angle > 9*PI/20){
      console.log("DOUBLE THREE");
      points = 3;
    }
    if(angle < 13*PI/20 && angle > 11*PI/20){
      console.log("DOUBLE NINETEEN");
      points = 19;
    }
    if(angle < 15*PI/20 && angle > 13*PI/20){
      console.log("DOUBLE SEVEN");
      points = 7;
    }
    if(angle < 17*PI/20 && angle > 15*PI/20){
      console.log("DOUBLE SIXTEEN");
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
      points = 20;
    }
    if(angle < -7*PI/20 && angle > -9*PI/20){
      console.log("DOUBLE ONE");
      points = 1;
    }
    if(angle < -5*PI/20 && angle > -7*PI/20){
      console.log("DOUBLE EIGHTEEN");
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
    
    points = points*3;
    if(current_player){
      p1score += points;
      redraw();
    }
    if(!current_player){
      p2score += points;
      redraw();
    }
    points = 0;
    
  }
  
  //outter bullseye
  if((d < height/20 ) && (d >= height/40)){
    if(current_player){
      p1score += 25;
      redraw();
    }
    if(!current_player){
      p2score += 25;
      redraw();
    }
    console.log("OUTTER BULLSEYE");
  }

  if((d < height/40 )){
    if(current_player){
      p1score += 50;
      redraw();
    }
    if(!current_player){
      p2score += 50;
      redraw();
    }
    console.log("INNER MOTHERFUCKIN BULLSEYE");
  }
  
  //toggling players
  clicks += 1;
  if(clicks>=3){
    current_player = !current_player
    clicks = 0;
  }
  
  //resetting score
  if(mouseX > width-69 && mouseY > height-29){
    p1score = 0;
    p2score = 0;
  }
}
