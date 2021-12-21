class createSnow{
    constructor(x,y){
        var options={
            isStatic:false,
            friction:0.001,
            restitution:0.1

        }

        this.snow=Bodies.circle(x,y,5,options);
        var rand=Math.round(random(1,2));
        var img;
        if(rand===1){
            img="snow4.webp";
        }
        else{
            img="snow5.webp";
        }
        this.image=loadImg(img);
        World.add(myWorld,this.snow);
    }

    showSnow(){
        imageMode (CENTER); 
        image (this.image,this.snow.position.x,this.snow.position.y,10,10);
    }
}