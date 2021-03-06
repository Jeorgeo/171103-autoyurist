

var firstBtnTest = document.querySelectorAll(".btn-st");
var secondBtnTest = document.querySelectorAll(".st-list-link");
var thirdBtnTest = document.querySelectorAll(".list_parents-btn");
var stList = document.querySelectorAll(".st-list");
var scListChilds = document.querySelectorAll(".screen-list_childs");
var firstScreen = document.querySelectorAll(".test-screen");
var resultBtn = document.querySelector("#result-test");
var newBtn = document.querySelector("#new-test");
var mainScreen = document.querySelector(".main-screen");
var topFooter = document.querySelector(".footer-line");
var bottomFooter = document.querySelector(".bottom-footer");
var checkboxList = document.querySelectorAll(".check-input");
var resultS = document.querySelector(".screen-result.success");
var resultF = document.querySelector(".screen-result.fail");
var wrapScreen = document.querySelectorAll(".wrap-list_parents");
var popup = document.querySelector(".popup-question");
var popupVideo = document.querySelector(".popup-question-video");
var winPopup = document.querySelector(".wrap-win");
var close = popup.querySelector(".popup-question-close");
var closeVideo = popupVideo.querySelector(".popup-video-close");
var footer = document.querySelector("footer");
var playerBtn = document.querySelector(".btn-ytplay");
var screenHeader = document.querySelector(".screen-header");
var z1 = firstBtnTest.length;
var z2 = secondBtnTest.length;
var z3 = thirdBtnTest.length;
var z4 = checkboxList.length;
var z5 = wrapScreen.length;

if (!navigator.cookieEnabled) {
  alert( 'Включите cookie для комфортной работы с этим сайтом' );
}

var TENDAYS = 10 * 24 * 60 * 60 * 1000;
var cDate = Date.now() + TENDAYS;
var phoneIndicator = 1;
var expiresDate = new Date(cDate);


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
     mainScreen.classList.add("hide");
     screenHeader.classList.remove("hide");
     firstBtn.classList.add("show");
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
     var phoneIndicator = Cookies.get('phone') || 2;
     if (phoneIndicator == 2) {
       showPopup();
     } else {
       bottomFooter.classList.add("hide");
       topFooter.classList.add("hide");
       boxFS = firstScreen[x];
       boxFS.classList.add("show");
       firstBtn.classList.remove("show");

     };
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
     thirdCurrentList = scListChilds[x];
     thirdCurrentList.classList.add("show");
      thirdBtnTest[x].classList.add("hide");
      resultBtn.classList.add("show");
   } else {
        return;
     }
  });
};

function showThirdTest(scListChilds) {
  scListChilds.classList.toggle("show");
};

function showPopup() {
  popup.classList.add("modal-content-show");
  winPopup.classList.add("modal-content-show");
};

function removePopup() {
  popup.classList.remove("modal-content-show");
  winPopup.classList.remove("modal-content-show");
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
     thirdBtnTest[i].classList.add("hide");
  };
  if (resultF.classList.contains("show-result")) {
    resultF.classList.remove("show-result");
  };
  if (resultS.classList.contains("show-result")) {
    resultS.classList.remove("show-result");
  };
  if (!res) {
    resultF.classList.add("show-result");
    bottomFooter.classList.remove("hide");
    footer.classList.remove("hide");
    topFooter.classList.remove("hide");
  } else {
    resultS.classList.add("show-result");
    bottomFooter.classList.remove("hide");
    footer.classList.remove("hide");
    topFooter.classList.remove("hide");
  };
  for (var i = 0; i < z5; i++) {
    wrapScreen[i].classList.add("show");
  };
  resultBtn.classList.add("hide");
  newBtn.classList.add("show");
});

newBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  location.reload();
});

  close.addEventListener("click", function(event) {

    event.preventDefault();

    removePopup();

  });

window.addEventListener("keydown", function(event) {

  if (event.keyCode === 27) {

    if (popup.classList.contains("modal-content-show")) {

      removePopup();
      removeVideo();

    }

  }

});

winPopup.addEventListener("click", function(event) {

  if (winPopup.classList.contains("modal-content-show")) {

    removePopup();
    removeVideo();

  }

});

playerBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupVideo.classList.add("modal-content-show");
  winPopup.classList.add("modal-content-show");
  videoBox = '<iframe src="' + playerBtn.href + '" frameborder="0" allowfullscreen></iframe>';
  popupVideo.insertAdjacentHTML('afterbegin', videoBox);
});

  closeVideo.addEventListener("click", function(event) {

    event.preventDefault();

    removeVideo();

  });

  function removeVideo() {
    popupVideo.classList.remove("modal-content-show");
    winPopup.classList.remove("modal-content-show");
    var videoScreen = popupVideo.querySelector("iframe");
    videoScreen.src = "#";
    popupVideo.removeChild(videoScreen);
  }


$(document).ready(function() {

	//E-mail Ajax Send
	$(".order-form").submit(function() { //Change
		var th = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th
		}).done(function() {
			removePopup();
      Cookies.set('phone', phoneIndicator, { expires: expiresDate });
		});
		return false;
	});

  $(".cons").submit(function() { //Change
		var th = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th
		}).done(function() {
			alert ('Спасибо! Ваша заявка принята! Мы вам перезвоним в ближайшее время.')
		});
		return false;
	});

});
