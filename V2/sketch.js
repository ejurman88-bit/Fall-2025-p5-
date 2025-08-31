let sunX = 50
let sunY = 50 
let step = 10  
let sheep 


function preload() {
sheep = loadImage("Sheep.jpg")

}




function setup() {
  createCanvas(700, 600);


imageMode(CORNER)

}



function draw() {
  noStroke();
  background(130, 200, 229);



  image(sheep, 150, 460, 50, 50,)


  // ground
  fill(29, 191, 17);
  rect(0, 500, 700, 300);

  // Sun
  fill(255, 223, 34);
  ellipse(sunX, sunY, 90);

  // rainbow
  textSize(300);
  text('🌈', 405, 470);

  // barn parts
  stroke('white');
  strokeWeight(1);
  fill(124, 10, 2);
  square(280, 420, 100);

  fill(128, 10, 2);
  rect(310, 480, 20, 40);
  rect(330, 480, 20, 40);

 
  triangle(280, 420, 380, 420, 330, 355);
  square(317, 395, 25);

  // barn lines
  line(310, 480, 330, 520);
  line(310, 520, 330, 480);
  line(330, 480, 350, 520);
  line(330, 520, 350, 480);
  line(317, 395, 342, 420);
  line(317, 420, 342, 395);

  // clouds
  noStroke();
  fill(255);
  ellipse(280, 70, 45);
  ellipse(350, 70, 55);
  ellipse(310, 70, 60);

  ellipse(430, 180, 55);
  ellipse(460, 180, 65);
  ellipse(510, 190, 60);

  ellipse(50, 260, 50);
  ellipse(90, 265, 60);
  ellipse(130, 255, 55);


     
  
  
  
    const baseX = constrain(mouseX, 20, width - 20);
  const groundY = 500;

  stroke('black');
  strokeWeight(2);
  line(baseX + 7,  groundY, baseX + 7,  groundY + 15);
  line(baseX + 2,  groundY, baseX + 2,  groundY + 15);
  line(baseX - 3,  groundY, baseX - 3,  groundY + 15);
  line(baseX - 8,  groundY, baseX - 8,  groundY + 15);

  // Body 
  noStroke();
  fill(255);
  ellipse(baseX - 8, groundY, 20);
  ellipse(baseX,     groundY, 20);
  ellipse(baseX + 4, groundY, 20);

  // Head  
  fill(0);
  ellipse(baseX + 7, groundY, 15);   
}

function keyPressed() {
  if (key === ' ') {
    sunX += step;
    if (sunX > width + 45) {
      sunX = -45; 
    }
  }
}
