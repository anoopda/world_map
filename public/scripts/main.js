
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");


var array =[

                {

                name:"ARTIC CIRCLE",
                xpos:"600",
                ypos:"50",
                radius:"3"

                },


                {

                 name:"THE UNITED STATES OF AMERICA",
                 xpos:"100",
                 ypos:"138",
                 radius:"3"   

                },  


                {

                  name:"AUSTRALIA",
                  xpos:"594",
                  ypos:"264",
                  radius:"3"      

                },
                {
                  name:"ARGENTINA",
                  xpos:"176",
                  ypos:"298",
                  radius:"3"      



                }





];


function draw(){


    array.map(function(user){    
    ctx.beginPath();
    ctx.arc(user.xpos, user.ypos, user.radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
    });
    

}
draw();


function getPosition(event) {
    x = event.clientX;
    y = event.clientY;  
    findPos();
}


function findPos(){
var r = 5;

array.map(function(user){

    if ((x > (user.xpos - r) && x < (user.xpos + r)) && (y > (user.ypos - r) && y < (user.ypos + r)))
    {
       $("#status").text(user.name);
    }
   
    
});

}







