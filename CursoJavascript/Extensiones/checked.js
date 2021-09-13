// NOTE;
// OPTIMIZE;
// TODO;
// HACK;
// XXX;
// FIXME;
// BUG;

var checkboxes = document.getElementsByTagName("input");

for (var i = 0, n = checkboxes.length; i < n; i++) {
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

// NOTE PURO JAVASCRIPT
// HACK 119 LETTERS
let s = document.getElementsByTagName("input");
for (var i = 0, n = s.length; i < n; i++) {
  s[i].value = "alex";
}

// NOTE PURO JQUERY

var script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.4.1.min.js";
script.type = "text/javascript";
document.getElementsByTagName("head")[0].appendChild(script);

var j = jQuery.noConflict();
// HACK 116 LETTERS
j(function(){
  for (var i = 0, n = $('input').length; i < n; i++) {
    $('input')[i].value = "alex";
  }
});
