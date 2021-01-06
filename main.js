var canvas=new fabric.Canvas("myCanvas");
block_image_width=30;
block_image_height=30;
SuperWomen_x=10;
SuperWomen_y=10;
var SuperWomen_object="";
function SuperWomen_update() {
    fabric.Image.fromURL("Super Women.jpg",function(Img) {
    SuperWomen_object=Img;
   SuperWomen_object.scaleToWidth(150);
    SuperWomen_object.scaleToHeight(140);
    SuperWomen_object.set({
    top:SuperWomen_y,left:SuperWomen_x
    });
    canvas.add(SuperWomen_object);
    });
}
function new_Image(get_image) {
fabric.Image.fromURL(get_image,function(Img){
block_image_object=Img;
block_image_object.scaleToWidth(block_image_width);
block_image_object.scaleToHeight(block_image_height);
block_image_object.set({
    top:SuperWomen_y,left:SuperWomen_x
});
canvas.add(block_image_object);
});
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '80'){
        console.log("shift and p are pressed together");
        block_image_width = block_image_width+10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
        }
        if (e.shiftKey == true && keyPressed == '77'){
            console.log("shift and m are pressed together");
            block_image_width = block_image_width-10;
            block_image_height = block_image_height - 10;
            document.getElementById("current_width").innerHTML=block_image_width;
            document.getElementById("current_height").innerHTML=block_image_height;
            }
            if (keyPressed == '38') {
                 up();
                 console.log("up");

            }
            if (keyPressed == '39') {
                right();
                console.log("right");
                
           }
           if (keyPressed == '40') {
            down();
            console.log("down");
            
       }
       if (keyPressed == '37') {
        left();
        console.log("left");
       }
    }
    function up() {
        if (SuperWomen_y >= 0) {
            SuperWomen_y = SuperWomen_y  -  block_image_height;
            canvas.remove(SuperWomen_object);
            SuperWomen_update();
    
    
        }
    }
    function down() {
        if (SuperWomen_y <= 500) {
            SuperWomen_y = SuperWomen_y  +  block_image_height;
            canvas.remove(SuperWomen_object);
            SuperWomen_update();
            
    
        }
    }
    function left() {
        if (SuperWomen_x > 0) {
            SuperWomen_x = SuperWomen_x-block_image_width;
            canvas.remove(SuperWomen_object);
            SuperWomen_update();
            
    
        }
    }
    function right() {
        if (SuperWomen_x <= 850) {
            SuperWomen_x = SuperWomen_x  +  block_image_width;
            canvas.remove(SuperWomen_object);
            SuperWomen_update();
            
    
        }
    }