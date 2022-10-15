

$(document).ready()(function(){}) 




// my=جبلي التاق الي الايدي تبعو 

var all1 = document.getElementsByClassName("my");

for (x=0 ; x<all1.length ; x++) {
window.msg.innerHTML+=all1[x].tagName+"-";
}

  
// input جبلي كل التاغ الي اسمه 
var all2 = document.getElementsByTagName("input");

for (x=0 ; x<all2.length ; x++) {
window.msg.innerHTML+=all2[x].tagName+"-";
}

//جبلي كل التاقات
var all3 = document.getElementsByTagName("*");

for (x=0 ; x<all3.length ; x++) {  
window.msg.innerHTML+=all3[x].tagName+"-";
if (all3[x].tagName=="INPUT") {     //اذا التاق اسمه انبت خليله قيمته = هلو 
    all3[x].value="heloo";
}

if (all3[x].tagName=="BUTTON"){   // ادا التاق اسمه بوتون بس اضغط عليه طلعلي اون كليك
    
all3[x].onclick= function(){
window.msg.innerHTML +="onclick;";
    
    };
}


}

