var a = 470;
var b = 470;
var c = 40;
var d = 40;

var w = 40;
var x = 470;
var y = 30;
var z = 30;

var s = 150;
var t = 150;
var speed = 2;

var j= 300;
var k= 300;

var rectOver = false;
var circleOver = false;

function setup() {
	createCanvas(500, 500);
	background(5);	
	stroke(0);
	noFill();
}
function draw()
{
update(mouseX,mouseY);
  
  
  
	background(5);
	fill('#EB0051');
	rect(50,50,400,400);
	fill(95);
	
	ellipse(490,490,30,30);
	
	if(mouseIsPressed)
	{
		if(mouseX>a && mouseX <a+c && mouseY>b && mouseY <b+d)
		{
			fill(105);
			rect(50,50,400,400);
			textSize(30);
			fill(255);
			text("Power Off",190,250);
			
		}
	}
  

fill(225);
rect(w,x,y,z);
		
	if(mouseIsPressed)
	{
		if(mouseX>w && mouseX <w+y && mouseY>x && mouseY <x+z)
		{
			fill('#3061FF');
			rect(50,50,400,400);
			textSize(30);
			fill(2);
			text("Power On",190,250);
			
		}
	}
rect(s,t,50,50);
  s+= speed;
  if(s-50 <= 0 || s+95>width)
 	{
    speed *= -1;
	}

rect(j,k,50,50)
j+= speed;
if(j-50 <=0 || j+95>width)
{
	speed *=-1;
}


  
if (rectOver) {
    fill(150, 0 , 190);
  } else {
    fill(200, 0, 80);
  }
  rect(40,470, 30, 30);
  
  
if (circleOver) {
    fill(150, 200 , 0);
  } else {
    fill(200, 40, 0);
  }
  ellipse(490,490, 30, 30);

  textSize(13);
fill(255);
text("Off",480,490);
  textSize(18);
fill(5);
text("On",41,490);
}
//everything below was sourced from Buttons Example 2
function overRect(x, y, width, height)  {
  if (mouseX >= x && mouseX <= x+width && 
      mouseY >= y && mouseY <= y+height) {
    return true;
  } 
  else 
  {
    return false;
  }
}

function overCircle(x,y,diameter) {
  var disX = x - mouseX;
  var disY = y - mouseY;
  if (sqrt(sq(disX) + sq(disY)) < diameter/2 ) {
    return true;
  } 
  else 
  {
    return false;
  }
}

function update( x, y) {
  if ( overCircle(490, 490, 30, 30)) {
    circleOver = true;
    rectOver = false;
  } 
  else if ( overRect(40,470, 30, 30)) 
  {
    rectOver = true;
    circleOver = false;
  } 
  else 
  {
    circleOver = rectOver = false;
  }

}
