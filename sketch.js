

function setup() {
  
  var strk;
  strk = 200;
  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
  createCanvas(width, height);
  background(80);
  fill(0, 0, 0);
  ellipse(width/2, height/2, height-10, height-10);
  console.log(height);
  
  //outter red doubles ring
  var k = 1;
  var n = 1;
  for(var i = 0; i<10; i++){
    strokeWeight(1);
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
  
  for(var i = 1; i<21; i++){
    stroke(strk);
    line(width/2, height/2, (((height-(height/16.5))/2)*(cos(TWO_PI/40 + i*(TWO_PI/20))))+width/2, (((height-(height/16.5))/2)*(sin(TWO_PI/40 + i*(TWO_PI/20))))+height/2);
    
    fill(81,187,51);
    ellipse(width/2, height/2, height/10, height/10);
    fill(211,31,31);
    ellipse(width/2, height/2, height/20, height/20);
  }



}

function draw() {


}
