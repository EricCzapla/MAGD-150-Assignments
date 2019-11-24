var a = 1;
function setup() {
	createCanvas(500, 500);
	background(155);
}
function draw()
{
	for(let x=1;x<100;x++)
	{
		noFill();
		ellipse(width/2,height/2,(x*35),(x*35));
	}


	strokeWeight(6);
	ellipse(250,250,460,460);
	fill('#FFC02A');
	ellipse(250,250,450,450);

	if(mouseIsPressed)
	{
		fill('#FF0602')
		ellipse(300,200,60,60);
		ellipse(300,400,60,60);
		ellipse(200,350,50,50);
		if(keyIsPressed === true)
		{
		fill('#C8FF40')
		triangle(300,100,350,100,325,60);
		}
		else
		{
		fill('#C8FF40')
		triangle(300,100,350,100,325,60);
		}
	}
	else
	{
		fill('#FF0602')
		ellipse(200,150,60,60);
		ellipse(100,300,60,60);
		ellipse(400,225,60,60);
	}
	if(keyIsPressed === true)
	{

		fill('#FF693B');
	}
	else
	{

		fill('#FF7653');
	}
	rect(300,200,50,50);
	rect(160,400,30,30);

	fill('#746B7D');
	ellipse(a+20,200,60,30);
	a++;
	fill('#B0862C');
	rect(a+5,200,50,10);
	a++;

}

