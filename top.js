class Top{
    constructor(x1,y1,x2,y2,x3,y3){
       

        this.vertices = {x1:x1 ,y1:y1 ,x2:x2 ,y2:y2 ,x3:x3 ,y3:y3 }

    
    }

    display(){
        var vertices = this.vertices;

        fill("white");
        strokeWeight(2);
        triangle(vertices.x1,vertices.y1,vertices.x2,vertices.y2,vertices.x3,vertices.y3);
        
      }
    };


