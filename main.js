function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = backround_image;


    rover_imgTag = new Image();
    rover_imgTag.upload =uploadrover;
    rover_imgTag.src =rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0, 0, canvas.width, canvas.height);

}
function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover-height);

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
        up();
        console.log("up");

    }
    if(keyPressed == '40')
    {
        down();
        console.log("down");

    }
    if(keyPressed == '37')
    {
        left();
        console.log("left");

    }
    if(keyPressed == '39')
    {
        right();
        console.log("right");

    }

}