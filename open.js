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
let myobj={
    objname:"jagan",
    objemail:"jaganatarajan1@gmail.com"
}
let obj_serialized=JSON.stringify(myobj);
localStorage.setItem("obj",obj_serialized);
console.log(localStorage);

myform.addEventListener('submit', (e)=>{
    e.preventDefault();
    let inputname=document.getElementById("name");
    let emailname=document.getElementById('email');
    localStorage.setItem('name',inputname.value);
    localStorage.setItem('email',emailname.value);
    if(inputname.value===" "||emailname.value===" "){
        inputname.addEventListener('error');
    }//food
})