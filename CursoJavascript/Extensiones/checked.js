
  var checkboxes = document.getElementsByTagName('input'); 
  
    for(var i=0, n=checkboxes.length;i<n;i++) {
      checkboxes[i].checked = true;
    }
  
   var demoClasses = document.querySelectorAll(".el-switch");
  
   demoClasses.forEach((element2) => {
     element2.className = "el-switch is-checked";
   });
  
   var demoClasses1 = document.querySelectorAll(".el-checkbox__input");
  
   demoClasses1.forEach((element) => {
     element.className = "el-checkbox__input is-checked";
   });
       
