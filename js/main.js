

var firstBtnTest = document.querySelectorAll(".btn-st");
var stList = document.querySelectorAll(".st-list");
var firstScreen = document.querySelectorAll(".test-screen");
var titleScreen = document.querySelectorAll(".screen-title");
var i = 0;
var k = 0;
var x = 0;
var y = 0;
var w = firstBtnTest.length;


for (var k = 0; k < w; k++) {
  firstBtnTest[k].addEventListener('click', function(evt) {
     evt.preventDefault();
     var current = evt.target;
     if (current.classList.contains("btn-st")) {
     var m = w;
     while(m--) {
        if(firstBtnTest[m] == current) {
           var y = m;
           break;
        }
     }
     if (stList[y].classList.contains("show")) {
       stList[y].classList.remove("show");
     } else {
       stList[y].classList.add("show");
     };

   } else {
        return;
     }
  });
};
