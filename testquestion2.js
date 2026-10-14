let square;

function setup(){
    new Canvas(400, 600);
   world.gravity.y = 15;
    


    // code to create a new square sprite
    square = new Sprite();
}

function draw(){
    background("grey");
    
    
    // code to check if mouse is pressed i.e. mouse.presses()
    // if mouse is pressed, the square sprite "flies" up
    if (mouse.presses()) {
        square.velocity.y -=5
    }
}
