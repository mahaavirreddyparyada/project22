var gameObject2,gameObject1; 

function setup()
{ 
   createCanvas(1200,800);
   gameObject1=createSprite(200,200,50,50);
   gameObject2=createSprite(1000,200,50,50);
  
   gameObject1.shapeColor="green";
   gameObject2.shapeColor="green";
   
   gameObject1.debug=true;
   gameObject2.debug=true;
  gameObject1.velocityX = 2
  gameObject2.velocityX = -2
   
   }
 function draw() {
     background(0);

   bounceOff(gameObject1,gameObject2) ;
  drawSprites();
 }

 function bounceOff(object1,object2){
   if(object1.x-object2.x < object2.width/2 + object1.width/2 &&
      object2.x-object1.x < object2.width/2 +object1.width/2 ){
       object1.velocityX=object1.velocityX*(-1);
       object2.velocityX=object2.velocityX*(-1);
       

        }
        if( object1.y-object2.y < object2.height/2 + object1.height/2 &&
         object2.y-object1.y < object2.height/2 + object1.height/2){
            object1.velocityY = object1.velocityY*(-1);
            object2.velocityY = object2.velocityY*(-1);
            
        }
 }