$( document ).ready(function() {


  $( ".add" ).click(function(e) {
  	e.preventDefault();
	$( ".modal" ).css("display","block");
    });

   $( ".modal__close" ).click(function(e) {
  	e.preventDefault();
	$( ".modal" ).css("display","none");
    });
	


	$( ".menu" ).click(function() {
   	console.log("works");
	$( ".header__menu-pop-up" ).toggle();
	});
});