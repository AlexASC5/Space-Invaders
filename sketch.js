// Alex & Shreyo
let score = 0;
function setup() {
    createCanvas(1000, 1000);
}

//spaceship

let enemies = 24;
let x = 0;
let y = 0;
let k = 0;
let moving = false;



function draw() {
    background("black");
    let i = 100;
    fill("white");
    while (i < 901) {
        ellipse(i, 200, 50);
        ellipse(i, 300, 50);
        ellipse(i, 400, 50);
        i += 100;
    }
    textSize(50);
    text("Score:", 300, 100);
    text(score, 450, 100);
    fill("orange");
    rect(0, 800, 1000, 200); 
    //k += 10;
    fill("green");
    rect(450 + x, 850 + y, 60, 60);

    //

    if (keyIsDown(LEFT_ARROW) && x > -400 && moving == false) {
        x -= 5;

    }

    if (keyIsDown(RIGHT_ARROW) && x < 450 && moving == false) {
        x += 5;
    }

    let bulletx = 480 + x;

    if (moving == true) {
        fill("red");
        k += 12;
        ellipse(bulletx, 850 - k,20);
    }
    if (k >= 850) {
        moving = false;
        k = 0;
        score ++;
    }

   // if (k < 900) {
        //k+=5;
   // }

}


function keyPressed(){
    if(keyCode === UP_ARROW){
        moving = true;
    }
}


//SpaceINVADERS


/*let x = 0
let y = 0

isGoingRight = true
function draw(){
    //spaceinvaders
    background("black");
    fill("red");
    rect(100 + x, 50, 50, 50)

    if (x > 150) {
        isGoingRight = false
    } else if (x < 100) {
        isGoingRight = true
    }

    if (isGoingRight) {
        x += 1.5
    } else {
        x -= 1.5
    }

    //second space invader 
    //issue - I know why this isnt working. The draw loop just reloops and draws over the first space invader. 
    //how do I tackle that?
    
    background("black");
        fill("blue");
        rect(200 + y, 50, 50, 50)

        if (y > 250) {
            isGoingRight = false
        } else if (y < 200) {
            isGoingRight = true
        }

        if (isGoingRight) {
            y += 1.5
        } else {
            y -= 1.5
        } 
}
*/

//spaceship