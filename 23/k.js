//الصورة تمشي
var l=0;
var myi;

var mye;

var myh;
var v=0;

function move() {
    window.i.style.left=l++;
    
    if (l>600) {
        clearInterval(myi);
    }
}
myi=setInterval(move,20);


//------------------------------
//اهتزاز الصورة 
function move1() {
    window.i2.style.left=3;
    mye=setTimeout(move2,10);
}
function move2() {
    window.i2.style.left=0;
    mye=setTimeout(move1,10);
}
//----------------------------------------

function fronts() {
    window.h.style.fontSize=v++;
    if (v>30) {
        clearInterval(myh);
    }
}
myh=setInterval(fronts,15);