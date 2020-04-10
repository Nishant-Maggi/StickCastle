
var ground;

var wallL,wallR;

var towerL,towerR;

var platL,platR;

var crownL,crownR;

var mainBuild;

var floor2;

var platT;

var crownT;

var doorL,doorR;

var brickL1,brickL2,brickL3;

var brickR1,brickR2,brickR3;

var brick1,brick2,brick3,brick4,brick5,brick6,brick7,brick8,brick9;

var windowL1,windowL2,windowL3;

var windowR1,windowR2,windowR3;

function setup() {

  createCanvas(800,600);

  wallL = new Stick(50,510,100,160);
  brickL1 = new Stick(10,430,20,40);
  brickL2 = new Stick(45,430,30,40);
  brickL3 = new Stick(90,430,40,40);

  wallR = new Stick(750,510,100,160);
  brickR1 = new Stick(790,430,20,40);
  brickR2 = new Stick(755,430,30,40);
  brickR3 = new Stick(710,430,40,40);


  towerL = new Stick(150,380,100,420);

  towerR = new Stick(650,380,100,420);

  platL = new Stick(150,165,120,10);
  platR = new Stick(650,165,120,10);

  crownL = new Top(100,160,200,160,150,85);
  crownR = new Top(700,160,600,160,650,85); 
  
  mainBuild = new Stick(400,470,400,240);
  brick1 = new Stick(210,335,20,30);
  brick2 = new Stick(255,335,30,30);
  brick3 = new Stick(305,335,30,30);
  brick4 = new Stick(355,335,30,30);
  brick5 = new Stick(405,335,30,30);
  brick6 = new Stick(455,335,30,30);
  brick7 = new Stick(505,335,30,30);
  brick8 = new Stick(555,335,30,30);
  brick9 = new Stick(590,335,20,30);

  doorL = new Door(370,545,60,90);
  doorR = new Door(435,545,60,90);

  floor2 = new Stick(400,295,300,110);

  platT = new Stick(400,240,320,10);

  crownT = new Top(240,235,560,235,400,85);

  windowL1 = new Door(120,220,20,30);
  windowL2 = new Door(180,335,20,30);
  windowL3 = new Door(120,450,20,30);

  windowR1 = new Door(680,220,20,30);
  windowR2 = new Door(620,335,20,30);
  windowR3 = new Door(680,450,20,30);
}

function draw() {

  background(0);

  rectMode (CENTER);
  rect(400,590,800,10);

  floor2.display();
  
  brick1.display();
  brick2.display();
  brick3.display();
  brick4.display();
  brick5.display();
  brick6.display();
  brick7.display();
  brick8.display();
  brick9.display();

  brickL1.display();
  brickL2.display();
  brickL3.display();

  brickR1.display();
  brickR2.display();
  brickR3.display();

  wallL.display();
  wallR.display();


  towerL.display();
  towerR.display();

  platL.display();
  platR.display();

  crownL.display();
  crownR.display();

  mainBuild.display();

  platT.display();

  crownT.display();

  doorL.display();
  doorR.display();

  windowL1.display();
  windowL2.display();
  windowL3.display();

  windowR1.display();
  windowR2.display();
  windowR3.display();
}