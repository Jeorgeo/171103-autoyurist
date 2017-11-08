/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports) {



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


/***/ })
/******/ ]);