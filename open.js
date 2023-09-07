let btn=document.querySelector("#submit-btn");
btn.addEventListener('mouseover',(e)=>{
    e.preventDefault();
    document.querySelector(".card").style.background="red";
    document.querySelector(".card").style.color="black";
    document.querySelector('body').style.background="black";
})
btn.addEventListener('mouseout',(e)=>{
    e.preventDefault();
    document.querySelector(".card").style.background="black";
    document.querySelector(".card").style.color="white";
    document.querySelector('body').style.background="red";
})
let myform=document.querySelector('form');
let inputname=document.querySelector(".text");
let emailname=document.querySelector('.email');
myform.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(inputname.value===" "||emailname.value===" "){
        inputname.addEventListener('error');
    }//food
})