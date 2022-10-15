function meesage() {
    var user =window.txtuser.value;    
    var pass =window.txtpass.value;
    var meesage= "<hr> "+ user + "<hr>" + pass+ "<hr>";
    //document.write(meesage);
    
    window.lblmessage.innerHTML=meesage;   // div حطلي المهعلومات هاي في 
}



//دالة لعرض البيانات


function show(name,id,salary) {   // id=5  ممكن نعطي القيم قيمة ديفولت مثلا
   var msage= "name:"+name+"<br>"
                +"id:"+id +"<br>"
                +"salary:"+salary;
                window.lbl.innerHTML=msage;    // div حطلي المهعلومات هاي في 
}