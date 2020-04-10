class Stick{
    constructor(x,y,width,height){
        

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

       
    }

    display(){
       
        rectMode(CENTER);
        fill("white");
        strokeWeight(2);
        rect(this.x,this.y, this.width, this.height);
      }
    };

   