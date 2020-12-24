var canvas = new fabric.Canvas("myCanvas");
var blockImageWidth = 30;
var blockImageHeight = 30;
var playerX = 10;
var playerY = 10;
var playerObject = "";

function playerUpdate() {
    fabric.Image.fromURL("player.png", function (Img) {
        playerObject = Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(playerObject);
    });
};
function newImage(getImage) {
    fabric.Image.fromURL(getImage, function (Img) {

        blockImageObject = Img;
        blockImageObject.scaleToWidth(blockImageWidth);
        blockImageObject.scaleToHeight(blockImageHeight);
        blockImageObject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(blockImageObject);
    });

}
window.addEventListener("keydown", myKeyDown);
function myKeyDown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);

    if (e.shiftKey == true && keypressed == '80') {
        console.log("p & shift pressed together");
        blockImageWidth = blockImageWidth + 10;
        blockImageHeight = blockImageHeight + 10;
        document.getElementById("current_width").innerHTML = blockImageWidth;
        document.getElementById("current_height").innerHTML = blockImageHeight;
    }
    if (e.shiftKey == true && keypressed == '77') {
        console.log("m & shift pressed together");
        blockImageWidth = blockImageWidth - 10;
        blockImageHeight = blockImageHeight - 10;
        document.getElementById("current_width").innerHTML = blockImageWidth;
        document.getElementById("current_height").innerHTML = blockImageHeight;
    }

    if (keypressed == '38') {
        up();
        console.log("up");
    }

    if (keypressed == '40') {
        down();
        console.log("down");
    }

    if (keypressed == '37') {
        left();
        console.log("left");
    }

    if (keypressed == '39') {
        right();
        console.log("right");
    }

    if (keypressed == '87') {
        newImage('wall.jpg');
        console.log("w");
    }

    if (keypressed == '84') {
        newImage('trunk.jpg');
        console.log("t");
    }

    if (keypressed == '68') {
        newImage('dark_green.png');
        console.log("d");
    }

    if (keypressed == '76') {
        newImage('light_green.png');
        console.log("l");
    }

    if (keypressed == '71') {
        newImage('ground.png');
        console.log("g");
    }

    if (keypressed == '89') {
        newImage('yellow_wall.png');
        console.log("y");
    }

    if (keypressed == '82') {
        newImage('roof.jpg');
        console.log("r");
    }

    if (keypressed == '67') {
        newImage('cloud.jpg');
        console.log("c");
    }

    if (keypressed == '85') {
        newImage('unique.png');
        console.log("u");
    }

}
function up() {
    if (playerY >= 0) {
        playerY = playerY - blockImageHeight;
        console.log("up");
        console.log("blockImageHeight" +blockImageHeight);
        console.log("when up arrow key is pressed, X=" + playerX + "Y=" + playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function down() {
    if (playerY <= 600)
        playerY = playerY + blockImageHeight;
    console.log("down");
    console.log("blockImageHeight", -blockImageHeight);
    console.log("when down arrow is pressed, X=" + playerX + "Y=" + playerY);
    canvas.remove(playerObject);
    playerUpdate();
}
function left() {
    if(playerX > 0)
        playerX = playerX - blockImageWidth;
    console.log("left");
    console.log("when left arrow key is pressed, Y=" + playerY + "X=" + playerX);
    canvas.remove(playerObject);
    playerUpdate();
}
function right() {
    if(playerX <= 850)
        playerX = playerX + blockImageWidth;
    console.log("right");
    console.log("when right arrow is pressed, Y=" + playerY + "X=" + playerX);
    canvas.remove(playerObject);
    playerUpdate();
}