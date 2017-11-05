

var firstBtnTest = document.querySelectorAll(".btn-st");
var secondBtnTest = document.querySelectorAll(".st-list-link");
var thirdBtnTest = document.querySelectorAll(".list_parents-btn");
var stList = document.querySelectorAll(".st-list");
var scListChilds = document.querySelectorAll(".screen-list_childs");
var firstScreen = document.querySelectorAll(".test-screen");
var titleScreen = document.querySelectorAll(".screen-title");
var mainScreen = document.querySelector(".main-screen");
var z1 = firstBtnTest.length;
var z2 = secondBtnTest.length;
var z3 = thirdBtnTest.length;


for (var i = 0; i < z1; i++) {
  firstBtnTest[i].addEventListener('click', function(evt) {
     evt.preventDefault();
     var current = evt.target;
     if (current.classList.contains("btn-st")) {
     var n = z1;
     while(n--) {
        if(firstBtnTest[n] == current) {
           var x = n;
           break;
        }
     }
     stList[x].classList.toggle("show");

   } else {
        return;
     }
  });
};

for (var i = 0; i < z2; i++) {
  secondBtnTest[i].addEventListener('click', function(evt) {
     evt.preventDefault();
     var current = evt.target;
     if (current.classList.contains("st-list-link")) {
     var n = z2;
     while(n--) {
        if(secondBtnTest[n] == current) {
           var x = n;
           break;
        }
     }
     mainScreen.classList.add("hide");
     firstScreen[x].classList.add("show");
   } else {
        return;
     }
  });
};

for (var i = 0; i < z3; i++) {
  thirdBtnTest[i].addEventListener('click', function(evt) {
     evt.preventDefault();
     var current = evt.target;
     if (current.classList.contains("list_parents-btn")) {
     var n = z3;
     while(n--) {
        if(thirdBtnTest[n] == current) {
           var x = n;
           break;
        }
     }
     scListChilds[x].classList.toggle("show");

   } else {
        return;
     }
  });
};
