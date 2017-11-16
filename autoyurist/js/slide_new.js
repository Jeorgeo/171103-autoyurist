

var firstBtnTest = document.querySelectorAll(".btn-st");
var secondBtnTest = document.querySelectorAll(".st-list-link");
var thirdBtnTest = document.querySelectorAll(".list_parents-btn");
var stList = document.querySelectorAll(".st-list");
var scListChilds = document.querySelectorAll(".screen-list_childs");
var firstScreen = document.querySelectorAll(".test-screen");
var resultBtn = document.querySelector("#result-test");
var newBtn = document.querySelector("#new-test");
var mainScreen = document.querySelector(".main-screen");
var topFooter = document.querySelector(".top-footer");
var bottomFooter = document.querySelector(".bottom-footer");
var checkboxList = document.querySelectorAll(".check-input");
var resultS = document.querySelector(".screen-result.success");
var resultF = document.querySelector(".screen-result.fail");
var wrapScreen = document.querySelectorAll(".wrap-list_parents");
var z1 = firstBtnTest.length;
var z2 = secondBtnTest.length;
var z3 = thirdBtnTest.length;
var z4 = checkboxList.length;
var z5 = wrapScreen.length;

var phoneIndicator = getCookie('phoneIn');
  alert(phoneIndicator);

var TENDAYS = 10 * 24 * 60 * 60 * 1000;

var dateToExpire = Date.now() + TENDAYS;
var formatteddateToExpire = new Date(dateToExpire).toUTCString();
alert(formatteddateToExpire);






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
     firstBtn = stList[x];
     firstBtn.classList.toggle("show");
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
     bottomFooter.classList.add("hide");
     topFooter.classList.add("show");
     boxFS = firstScreen[x];
     boxFS.classList.add("show");
     firstBtn.classList.remove("show");
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

resultBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  for (var i = 0; i < z4; i++) {
    if (checkboxList[i].checked) {
      var res = true;
      for (var i = 0; i < z4; i++) {
        checkboxList[i].checked = false;
      };
      break;
    }
  };
  for (var i = 0; i < z3; i++) {
     scListChilds[i].classList.remove("show");
  }
  if (resultF.classList.contains("show-result")) {
    resultF.classList.remove("show-result");
  };
  if (resultS.classList.contains("show-result")) {
    resultS.classList.remove("show-result");
  };
  if (!res) {
    resultF.classList.add("show-result");
  } else {
    resultS.classList.add("show-result");
  };
  for (var i = 0; i < z5; i++) {
    wrapScreen[i].classList.add("show");
  };
  resultBtn.classList.add("hide");
  newBtn.classList.remove("hide");
});

newBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  location.reload();
});

function getCookie(phone) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + phone.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

function setCookie(name, value, options) {
  options = options || {};

  var expires = options.expires;

  if (typeof expires == "number" && expires) {
    var d = new Date();
    d.setTime(d.getTime() + expires * 1000);
    expires = options.expires = d;
  }
  if (expires && expires.toUTCString) {
    options.expires = expires.toUTCString();
  }

  value = encodeURIComponent(value);

  var updatedCookie = name + "=" + value;

  for (var propName in options) {
    updatedCookie += "; " + propName;
    var propValue = options[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }

  document.cookie = updatedCookie;
};
