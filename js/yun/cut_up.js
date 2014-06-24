/*
 *      Yún JS Module:
 *      	toggle-led.js
 *
 *      desc:
 *      	This module uses AJAX POST to send data to the Yún's /arduino REST API endpoint.
 *
 */

define( ['jquery'], function ( $ ) {

	var _text;

	_init();

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	function _init() {

		$( 'button.speak' ).click( function(){

			_text = escape( $( 'textarea' ).val() );
			console.log( _text );

			var post = "/arduino/" + _text;

			$.ajax( {
				type: "POST",
				url: post
			} )
			.done( function( text ) {
				console.log( text );
			} );

		// 	if ( _state == 0 ) {
		// 		$.ajax( {
		// 			type: "POST",
		// 			url: "/arduino/13/1"
		// 		} )
		// 		.done( function( state ) {
		// 			_state = state;
		// 			console.log( _state );
		// 		} );
		// 	} else if ( _state = 1 ) {
		// 		$.ajax( {
		// 			type: "POST",
		// 			url: "/arduino/13/0"
		// 		} )
		// 		.done( function( state ) {
		// 			_state = state;
		// 			console.log( _state );
		// 		} );
		// 	}
		});
	}

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

});	