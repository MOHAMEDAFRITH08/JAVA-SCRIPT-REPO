var a=document.getElementById("stopButton");
var b=document.getElementById("redColor");
var c=document.getElementById("readyButton");
var d=document.getElementById("yellowColor");
var e=document.getElementById("goButton");
var f=document.getElementById("greenColor");

a.addEventListener("click",()=>{
    b.style.backgroundColor="red";
    a.style.backgroundColor="red";
    d.style.backgroundColor="";
    c.style.backgroundColor="";
    e.style.backgroundColor="";
    f.style.backgroundColor="";
    c.style.color="";
})
c.addEventListener("click",()=>{
    d.style.backgroundColor="yellow";
    c.style.backgroundColor="yellow";
    c.style.color="black";
    a.style.backgroundColor="";
    b.style.backgroundColor="";
    e.style.backgroundColor="";
    f.style.backgroundColor="";
})
e.addEventListener("click",()=>{
    e.style.backgroundColor="green";
    f.style.backgroundColor="green";
    b.style.backgroundColor="";
    a.style.backgroundColor="";
    d.style.backgroundColor="";
    c.style.backgroundColor="";
    c.style.color="";
})