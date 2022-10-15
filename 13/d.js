function big(img) {
    img.style.height=120;
    img.style.width=120;
}

//_____________________________________________________
function small(img) {   
    img.style.height=90;
    img.style.width=90;
}
function color(div) {
 div.style.color="red";
}
  
//_____________________________________________________
function o1(img) { 
    img.style.opacity=1;  
}
function o2(img) {  
    img.style.opacity=0.5;
}

//______________________________________________

function getxy(e) {
    var x =e.clientX;
    var y =e.clientY;
    window.out.innerHTML="x:"+x+","+"y:"+y;
}