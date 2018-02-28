$(document).scroll(function() {
  navbarScroll();
  navbarColision();
  fade();

  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
  });  

jQuery(function() {
  function slideMenu() {
    var activeState = jQuery('#menu-container .menu-list').hasClass('active');
    jQuery('#menu-container .menu-list').animate({
    left: activeState ? '0%' : '-100%'
  }, 400);
}

jQuery('#menu-wrapper').click(function(event) {
event.stopPropagation();
jQuery('#hamburger-menu').toggleClass('open');
jQuery('#menu-container .menu-list').toggleClass('active');
slideMenu();

Query('body').toggleClass('overflow-hidden');
});
          
jQuery(".menu-list").find('.accordion-toggle').click(function() {
});
          
}); // jQuery load
});


function navbarScroll() {
  var y = window.scrollY;
  if (y > 20) {
    $('.header').addClass('small');

  } else if (y < 20) {
    $('.header').removeClass('small');
  }
}


function fade () {
  var q = window.scrollY;
  if(q > 20) {
   $('.header').addClass('newbar');
   document.getElementById("new-top").innerHTML = "^";
   var top = document.getElementById("new-top");

  top.style.color = "black"
  top.style.fontSize = "large"
  top.style.fontFamily = "verdana"

  document.getElementById("logo-small").style.display = "none"; 

  }
  else if (q < 20) {
    $('.header').removeClass('newbar');
    document.getElementById("new-top").innerHTML = "";
  document.getElementById("logo-small").style.display = "flex"; 
  }
}

function navbarColision () {
	var w = window.scrollY;
	if (w > 510) {
		$('.second_header').addClass('move_second_header');
	}
	else if (w < 510) {
		$('.second_header').removeClass('move_second_header');
	}
}
