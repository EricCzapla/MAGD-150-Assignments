function setup() {
	createCanvas(500, 500);
	colorMode(HSB);
	background(250, 90, 40,100);
}
function draw()
{
	
	fill('#A2FFA3')
	noStroke();
	triangle(410,25,470,25,440,95);
	triangle(400, 65, 440, 10, 470, 65);


	fill('#FF9532');
	stroke(155,50,0);
	beginShape();
	vertex(30,40);
	vertex(160,30);
	vertex(180,50);
	vertex(160,70)
	vertex(100,80);
	beginContour();
	vertex(40,42)
	vertex(160,35);
	vertex(175,50);
	vertex(160,65);
	vertex(100,75);
	endContour();
	endShape(CLOSE);


	fill('#EB301F');
	strokeWeight(2);
	arc(300, 250, 100, 100, 0, PI + QUARTER_PI, CHORD);


	strokeWeight(3);
	fill('#EBD724');
	ellipse(430,430,100,100);


colorMode(RGB);
fill(125,150,10);
line(160,70,100,90);
line(250,250,170,260);
stroke(0,0,0);
bezier(160,70,100,90,250,250,170,260);

colorMode(RGB);
fill(102, 0, 204)
quad(70,350,120,330,180,350,120,380);


beginShape();
vertex(250,100);
vertex(270,40);
vertex(290,100);
vertex(270,170);
vertex(250,100);
endShape();

fill('#71FF71')
ellipse(120,355,30,30);

fill('#EBD724');
ellipse(70,430,100,100);

colorMode(RGB);
fill(0,155,150);
triangle(70,400,90,450,50,450);
triangle(430,400,450,450,410,450);
}