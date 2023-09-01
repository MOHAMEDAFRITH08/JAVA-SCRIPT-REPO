var a=document.getElementById("onbutton");
a.addEventListener("click",()=>{
    var b=document.getElementById("image").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    var c=document.getElementById("image1").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("heading").innerHTML="Switched ON";
    a.style.backgroundColor = "green";
    a.style.color="white";
    d.style.color="";
    d.style.backgroundColor="";
})
var d=document.getElementById("offButton");
d.addEventListener("click",()=>{
    var e=document.getElementById("image").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    var f=document.getElementById("image1").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("heading").innerHTML="Switched OFF";
    d.style.backgroundColor = "red";
    d.style.color="white";
    a.style.color="";
    a.style.backgroundColor = "";
})
