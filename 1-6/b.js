
document.write("<hr> bashar  'qawasmi' <hr>");
document.write('bashar  "qawasmi" <hr>');

document.getElementById("c").innerHTML="hello";         /*امسكنا الديف الي اسمه c واكتب جواه
                                                         *وليش بعمل هيك ليش ما اكتب بالديف وخلص لانه ممكن يكون عندي زر وبس اضغط عليه يكتب كذا كذا او يجط صورة*/
document.getElementById("button_hello").onclick = function(){
    
    
};

console.log("");  /*يظهر في الكونسول لاختبار الكود عند سطر 100 مثلا*/

/*____________________________________function______________________________________________*/

var c = function(){
    
};
var d= function play(){
    
} ;   /*الثانيه لو حدث مشكلة في الميثود يعطيك اسم الميثود اما الاولى حيقلك غير معروف*/

c();

(function test() {
    console.log("hai");
})();     /*ميثود بدون ما تعملها كول تنفذ   IIFE*/


/*_______________________________________events________________________________________________________*/

// onclick , ondblclick , onmousemove , onmouseenter , onmouseleave 

var btn = document.getElementById("button");
var div = document.getElementById("c");

btn.onmousemove = function(){
    
  div.innerHTML="hello";  
};


//  onkeypress onkeydown onkeyup

// onload    بس تعمل تحميل للصفحة يعمل كذا كذا

window.onload = function(){
  alert("done");
};
/*__________________________________________________________________________________*/

window.p.innerHTML="to go creat";    //او طريقة قيت اليمنت لاستدعاء عنصر كونتينت 
window.q.innerHTML="bash";

var v1="rema";                          /*var v1="rema"     v1=bashjr    المتغيرات */
document.write(v1 );

var v2="ayman" ,v4=788;      
document.write(v2);
document.write(v4);
document.write(v2+","+v4);    // دمج نصوص

var v3=true;      
document.write(v3);
document.write("<br>");

v6="qawas";             // ممكن انعرفه بدون ما نكتب فار اصلا
document.write(v6);
document.write("<br>");

document.write(typeof(v3));    //يعرفلك نوعه هنا في المثال بوليان


var employee={name:"ahmad" , salary:3000 , id:3};  /*متغير من نوع اوبجكت يحمل اكثر من قيمة*/
document.write(employee.id);
document.write("<br>");

/*__________________________________________________________________________________*/
/* الثوابت conctant*/

const pi = 3.14;
document.write(pi);





