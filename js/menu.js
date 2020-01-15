///////Menu scrolling///////////////////////
let navigation = $('.navigation'),
	scrollPrev = 0;

$(window).scroll(function() {
	let scrolled = $(window).scrollTop();

	if ( scrolled > 50 && scrolled > scrollPrev ) {
		navigation.addClass('out');
	} else {
		navigation.removeClass('out');
	}
	scrollPrev = scrolled;
});

let scrolled;
window.onscroll = function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 200){
        $(".navigation").css({"background-color": "#300d8b"})
    }
    if(100 > scrolled){
        $(".navigation").css({"background": "none"})
    }

}

$(document).ready(function(){
 $(".anchor").on("click","a.anchorA", function (event) {
   event.preventDefault();
   var id  = $(this).attr('href'),
   top = $(id).offset().top - 50 + 'px';
   $('body,html').animate({scrollTop: top}, 700);

 });
  $('#menu a').click(function() {
    $('#menuToggle input').click();
 });
});
