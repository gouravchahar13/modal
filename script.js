// variable
const open=document.querySelector('#open-btn');
const close=document.querySelector('#close-btn');
const container=document.querySelector('#container');

// adding event listners 

// 1st open btn 
open.addEventListener("click",function(){
   container.style.display="flex";

});

//close btn 
close.addEventListener('click',function(){
    container.style.display="none";
});
 
//window
window.addEventListener("click",function(e){
    if(e.target===container){
        container.style.display="none";
    }
});