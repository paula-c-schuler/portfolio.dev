
$(document).ready(function () {
	alert("Doc ready");

	// scroll down, after bottom of portfolio section,
	// displays contact information
	// fixed in viewport for all scroll down.
	// scroll up displays none
	$(function(){


	$( window ).scroll(function() {
  	$( "span" ).css( "display", "inline" ).fadeOut( "slow" );
	});

	// $( "body" ).scroll(function () {
  		// if ( $( "p:first" ).is( ":hidden" ) ) {
  			// alert("is hidden");

    	// $( "p" ).slideDown( "slow" );
  		// } else {
    		// $( "p" ).hide();
 		// }
	// });

	});



	// SwipeTouch Plugin 
	$(function() {			
	//Enable swiping...
	$("#test").swipe( {
		//Generic swipe handler for all directions
		swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
			$(this).text("You swiped " + direction );	
		},
		//Default is 75px, set to 0 for demo so any distance triggers swipe
	   threshold:0
		});
	});

});
