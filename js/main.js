/* SMOOTH SCROOLING*/

$(document).ready(function() { 
 
	$('a[href^="#"]').on('click', function(event) {
	
		var target = $( $(this).attr('href') );
	
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});
 
});
/*NAVBAR AFTER SCROLL*/

$(window).scroll(function(){
    if($(document).scrollTop() > 50){
        $("nav").addClass("scrolling");
    } else {
        $("nav").removeClass("scrolling");
    }    
});

/*RESPONSIVE NAVIGATION*/

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/*SETTINGS FOR TICKER*/
$('.first_col').vTicker({
   speed: 500,
   pause: 3000,
   showItems: 1,
   animation: 'fade',
   mousePause: false,
   height: 0,
   direction: 'up'
});

/*-----------HOVER ON TEXT in ABOUT SECTION*/
/*JIM CAREY*/
$(document).ready(function(){
    $("#jim").click(function(){
         $("#img-slide1").addClass("jimcarey");
        setTimeout(function(){
           $("#img-slide1").removeClass("jimcarey"); 
        }, 6000);
    });
   }); 
/*KABOM*/
    $(document).ready(function(){
    $("#jim").click(function(){
         $("#img-slide2").addClass("kabom");
        setTimeout(function(){
           $("#img-slide2").removeClass("kabom"); 
        }, 2000);
    });
});
/*BLIZZARD*/
/*orc*/
    $(document).ready(function(){
    $("#blizzard").click(function(){
         $("#img-slide3").addClass("dance_orc");
        setTimeout(function(){
           $("#img-slide3").removeClass("dance_orc"); 
        }, 10000);
    });
});
/*tauren*/
   $(document).ready(function(){
    $("#blizzard").click(function(){
         $("#img-slide4").addClass("dance_tauren");
        setTimeout(function(){
           $("#img-slide4").removeClass("dance_tauren"); 
        }, 10000);
    });
});


/* SKILLS ICON EFFECT*/
$(document).ready(function(){
 
  // hide our element on page load
  $('.icons').css('opacity', 0);
 
  $('.icons').waypoint(function() {
      $('.icons').addClass('fadeInLeft');
  }, { offset: '60%' });
 
});

/*SLIDER IN CERT SECTION*/


var images = [];
images.push("<img src ='img/dyploms/Akademia108.jpg' class = 'opacImg'>");
images.push("<img src ='img/dyploms/angielski.jpg' class = 'opacImg'>");
images.push("<img src ='img/dyploms/MTM-UAS1.jpg' class = 'opacImg'>");
images.push("<img src ='img/dyploms/MTM-UAS2.jpg' class = 'opacImg'>");
images.push("<img src ='img/dyploms/award4.jpg' class = 'opacImg'>");
images.push("<img src ='img/dyploms/award1.jpg' class = 'opacImg'>");
images.push("<img src ='img/dyploms/award2.jpg' class = 'opacImg'>");
images.push("<img src ='img/dyploms/award3.jpg' class = 'opacImg'>");


var curIndex = 0 ;
var mainDiv = document.getElementById("my-image-slider");
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");

mainDiv.innerHTML = images[0];

function getElement() {
    mainDiv.innerHTML = images[curIndex];
    /*images.style.opacity = 1;*/
};

function goNext() {
    var nextIndex = curIndex + 1;
    if (nextIndex === images.length) {
        return 0;
    } else {
        return nextIndex;
    }
};

nextBtn.addEventListener("click", function () {
    curIndex = goNext();
    getElement();
});

function goPrev() {
    var prevIndex = curIndex - 1;
    if (prevIndex === -1) {
        return images.length-1;
    } else {
        return prevIndex;
    }
};

prevBtn.addEventListener("click", function () {
    curIndex = goPrev();
    getElement();
});

/* ARTICLE TO SLIDER*/

var articles = [];
articles.push("<h3>Szkoła programowania</h3><br><p>Kurs bootcamp Front-end developer w szkole Akademia 108</p>");
articles.push("<h3>Kurs języka angielskiego</h3><br><p>Ukończenie kursu języka angielskiego poziom B1+</p>");
articles.push("<h3>Certyfikat MTM-UAS</h3><br><p>Uzyskanie kwalifikacji do zastosowania systemu modułów MTM-UAS</p>");
articles.push("<h3>MTM-1</h3><br><p>Uzyskanie kwalifikacji do zastosowania bloków procesowych MTM</p>");
articles.push("<h3>MTM-USA</h3><br><p>I miejsce w kokursie na najlepszy projekt roku 'Optymalizacja okna logistycznego'</p>");
articles.push("<h3>Najlepszy projekt</h3><br><p>II miejsce w kokursie na najlepszy projekt roku 'Aplikacja dotowarowania segmentu GFT20'</p>");
articles.push("<h3>MTM-USA</h3><br><p>III miejsce w kokursie na najlepszy projekt roku 'Wprowadzenie FIFO na magazynie'</p>");
articles.push("<h3>MTM-USA</h3><br><p>Wyróżnienie w kokursie na najlepszy projekt roku 'Stojak na części'</p>");


var curIndexArt = 0 ;
var mainDivArt = document.getElementById("slider-article");
var nextBtnArt = document.getElementById("next");
var prevBtnArt = document.getElementById("prev");

mainDivArt.innerHTML = articles[0];

function getElementArt() {
    mainDivArt.innerHTML = articles[curIndexArt];
};

function goNextArt() {
    var nextIndexArt = curIndexArt + 1;
    if (nextIndexArt === articles.length) {
        return 0;
    } else {
        return nextIndexArt;
    }
};

nextBtnArt.addEventListener("click", function () {
    curIndexArt = goNextArt();
    getElementArt();
});

function goPrevArt() {
    var prevIndexArt = curIndexArt - 1;
    if (prevIndexArt === -1) {
        return articles.length-1;
    } else {
        return prevIndexArt;
    }
};

prevBtnArt.addEventListener("click", function () {
    curIndexArt = goPrevArt();
    getElementArt();
});