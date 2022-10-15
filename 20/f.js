var d1= false;  // انو انت مش ضاغط ع الصورة عشان لو ضاغط  هنعملها ترو
var d2= false;
var d3= false;

function movenow(el) {
    el.style.left=window.event.clientX-50;
    el.style.top=window.event.clientY-50;
}


function move() {
    if (d1) {
                
  movenow(window.i1);
}
  else if (d2) {
                
  movenow(window.i2);
}
 else if (d3) {
                
  movenow(window.i3);
}

}




