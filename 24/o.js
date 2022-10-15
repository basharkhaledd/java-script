       function check() {
    var text = window.txt.value;
    var patt;
    
   // patt=/^\+002\d{8}$/;   // لازم تتدخل رمز الدولة وثمن ارقام 
    
  //  patt=/^[A-Z][a-z]+$/;     // لازم تدخل اول حرف كبير بعدها اكتب حروف صغيرة قد ما بدك
  
  //patt=/\w/; // يدخل الي بدو ياه
  
  patt=/[ا-ي]+/;
  
    var b =patt.test(text);
    if (b) {
                window.h.innerHTML="<div style='color:#0f0;'>التحقق صحيح</div>";

    }
    else  {
        window.h.innerHTML="<div style='color:#f00;'>التحقق غير صحيح</div>";
    }
    

}