var x,y;
var yspeed;
var posX=35;
var posY = 300;
var ballD = 30;
var vY=0.0;
var gravity = 1.5; 
var touchGround = false;
var jumpD= -25; 
var k = 3;
var j = 0.5;

function setup() {
  createCanvas(1000, 400);
  x=width/2;
  y=25;
  yspeed=3;

}

function draw() {

  background('#33D0FF');
  fill('#1C8260');
  rect(0,350,1000,400);
  fill('#FFAE01');
  ellipse(0,0,60,60);

k = cos(j)*2;

if(keyIsPressed)//When one of the keys is pressed it performs the action set to that key.
	{
		if((key == 'w') || (key == 'W'))
		{
			if(touchGround)
			{
    		goUp();
   			}
		}
		if((key == 'a') || (key == 'A'))
		{
			posX = posX -2;
		}
		if((key == 'd') || (key == 'D'))
		{
			posX = posX +2;
		}
	}
fill('#9744B3')
rect(x,y,50,100);
  
  y+= yspeed;
 
  if (y-25<=0 || y+25 >= 400){//This allows the rectangle to move bounce back up after touching the bottom.
    yspeed *=-1;
  }

rect(180,y,50,100);
  y+= yspeed;
 if (y-25<=0 || y+25 >= 400){
    yspeed *=-1;
  }
  
  rect(800,y,50,100)
  y+= yspeed;
   if (y-25<=0 || y+25 >= 400){
    yspeed *=-1;
  }

fill(5)
textSize(25);
text("Movement: A:left,W:up,D:right",100,100)//Tells the person looking at the code how to move.

if(dist(posX,posY,180,y)<75)//Makes ball move back if it touches the moving rectangle.
{
	posX = posX -10;
	yspeed  *=-1;
}

if(dist(posX,posY,440,y)<75)
{
	posX = posX -10;
	yspeed  *=-1;
}

if(dist(posX,posY,850,y)<75)
{
	posX = posX -10;
	yspeed  *=-1;
}




change();
mtext();
}

function change()//code for this was referenced from Lesson 6 Balljump2
{
  vY = gravity + vY;

  posY= vY + posY;

  if (posY +(ballD/2) >= (height))
  {
    posY= (height)- (ballD/2);

    touchGround = true;
  } 
  else 
  	{
    touchGround = false;
  	}
 
for (let x=1; x<2; x++)
{
  fill('#FF231F');
  ellipse(posX, posY, ballD+(x*15), ballD + (x*15));//This determines the balls starting position and size.
}
}

function keyPress()
{
    if(touchGround)
    {
    	goUp();
    }
  }


function goUp()
{
  vY = jumpD;
}


function mtext(){

 rotate(PI / 7.0); 

    textSize(30); 
    text("Get movin!!", 50, 70); 
    translate(10,25);
    scale(k);

}