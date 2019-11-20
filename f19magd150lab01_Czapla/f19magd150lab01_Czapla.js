function setup() {
	createCanvas(300, 300);
	
}
function draw()
{
	background(100);
	{
	rect(20,70,50,230);
	fill(51);
	}
	noStroke();
	rect(120,150,60,150);
	fill(255);
	
	rect(200,50,90,250);
	strokeWeight(4);
	stroke(51);

	

	fill(255);
	strokeWeight(1);
	ellipse(250, 150, 30,30)

	point(30,10);
	point(50,15);
	point(60,5);
	point(140,10);
	point(230,15);

	
	strokeWeight(2);
	fill(255);
	rect(130,170,10,20);

	strokeWeight(2);
	fill(255);
	rect(160,170,10,20);

	line(250, 150, 70, 75);
	line(250, 0, 250, 50);

	rectMode(CORNER); 
	fill(150); 
	rect(250, 250, 30, 60);

	noStroke();
	ellipse(45, 55, 35, 25);
}