let particles = [];
let numOfParticles = 100;
let displayText = false;

// Initializing particle class
class Particle {
  constructor(id) {
      this.location = createVector(random(windowWidth), random(windowHeight)); 
      this.velocity = createVector(random(-2, 2), random(-2,2));
      this.id = id;
      this.maxDistance = 200;
      this.connections = 0;
  }

  move() {
    this.location.x += this.velocity.x;
    this.location.x = (windowWidth + this.location.x) % windowWidth ;
    this.location.y += this.velocity.y;
    this.location.y = (windowHeight + this.location.y) % windowHeight;
  }

  draw(){
    fill(255);
    noStroke();
    let size = 4 + (this.connections);
    ellipse(this.location.x,this.location.y, size,size);
    fill (240,0,0);

    if(displayText){
    let locationText = Math.round(this.location.x) + ", " + Math.round(this.location.y);
    fill(255);
    textSize(15);
    text(locationText, this.location.x, this.location.y)
    }
  }

  detectNeighbour(){
    this.connections = 0;

    for (let j = this.id + 1 ; j < particles.length; j++){
      if (this.location.dist(particles[j].location) < this.maxDistance){
        this.connections++;
        this.drawLine(this.location, particles[j].location);
      }
    }
  }

  drawLine(startPoint, endPoint){
    let dist = startPoint.dist(endPoint);
    let alpha = map(dist, 0, this.maxDistance, 1.0, 0.0);
    let c = color('rgba(0, 255, 255,' + alpha +  ')')
    stroke(c);
    strokeWeight(1);
    line(startPoint.x, startPoint.y, endPoint.x, endPoint.y);


  }


}


function setup() {
  createCanvas(windowWidth, windowHeight);
  myParticle = new Particle();
  console.log(myParticle.velocity);
  for (let i = 0; i < numOfParticles; i++){
    particles.push(new Particle(i));
  }

}

function draw() {
  background(20);
  for (let i = 0; i < numOfParticles; i++){
    particles[i].detectNeighbour();
    particles[i].move();
    particles[i].draw();
  }
}