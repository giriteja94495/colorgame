var numSquares=6;
var colors=generateColors(numSquares);
var pickedColor=colors[randomColor()];

var square=document.querySelectorAll(".square");
var value=document.getElementById("value");
var message=document.getElementById("message");
var butt=document.getElementById("butt");
var head=document.getElementById("head");
var easybtn=document.getElementById("easy");
$(document).ready(function(){
setTimeout(function(){
$('#modal1').modal("show");
setTimeout(function(){
$('#modal1').modal("hide");
},10000);
},3000);
});
var hardbtn=document.getElementById("hard");
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }
function changetext (){
   var p=document.querySelector("p");
    p.textContent="There is a mixture of 3 colors in the below figures,you have to choose a color which has right proportion of red green blue colors(it is mentioned as rgb)....once you understood the instructions refresh the page and have fun in playing the color picking game";
}

easybtn.addEventListener("click",function(){
    numSquares=3;
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    colors=generateColors(numSquares);
    pickedColor=colors[randomColor()];
    value.textContent=pickedColor;
  for(var i=0;i<square.length;i++){
      if(colors[i]){
          square[i].style.backgroundColor=colors[i];
      }
      else{
          square[i].style.display="none";
      }
  }
 
    
})
hardbtn.addEventListener("click",function(){
    numSquares=6;
    easybtn.classList.remove("selected");
    hardbtn.classList.add("selected");
      colors=generateColors(numSquares);
    pickedColor=colors[randomColor()];
    value.textContent=pickedColor;
  for(var i=0;i<square.length;i++){
     
          square[i].style.backgroundColor=colors[i];
      
          square[i].style.display="block";
      
        }
})
value.textContent=pickedColor;
butt.addEventListener("click",function(){
    colors=generateColors(numSquares);
    pickedColor=colors[randomColor()];
    value.textContent=pickedColor;
    message.textContent="";
    this.textContent="New Colors"
    for(var i=0;i<square.length;i++)
    {
    square[i].style.backgroundColor=colors[i];
    }
    head.style.backgroundColor="steelblue";
  
})
for(var i=0; i<square.length ;i++){
    square[i].style.backgroundColor =  colors[i];
    square[i].addEventListener("click",function(){
        var clickedColor=this.style.backgroundColor;
        if(clickedColor===pickedColor){
           message.textContent="Yay!! you did it";
           changeColor(clickedColor);
           butt.textContent="Play Again ?"
           head.style.backgroundColor=clickedColor;
        }
        else{
       this.style.backgroundColor="#6DD5FA";
        message.textContent="Seems like it ain't the correct one";
       
        }
    })
}
function changeColor(color){
    for(var i=0;i<square.length;i++)
    {
        this.square[i].style.backgroundColor=color;
    }
}
function randomColor(){
   var lol=Math.floor(Math.random()*colors.length);
   return lol;
}
function generateColors(num){
    var arr=[];
for(var i=0;i<num;i++){
    arr.push(randomrgb());
}
    return arr;
}
function randomrgb(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
   return "rgb(" + r + ", " + g + ", " + b +")";
} 

