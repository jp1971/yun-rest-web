/*
 *      Yún JS Module:
 *      	toggle-led.js
 *
 *      desc:
 *      	This module uses AJAX POST to send data to the Yún's /arduino REST API endpoint.
 *
 */

define( ['jquery'], function ( $ ) {

	if ( $( 'body' ).hasClass( 'led' ) ) {
		var _state;
		_get_state();
		_init();
	}

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	function _get_state() {
		$.ajax( {
			type: "POST",
			url: "/arduino/13"
		} )
		.done( function( state ) {
			_state = state;
			console.log( _state );
		} );
	}
	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	function _init() {

		alert( 'class = led' );

		$( 'button.toggle' ).click( function(){
			if ( _state == 0 ) {
				$.ajax( {
					type: "POST",
					url: "/arduino/13/1"
				} )
				.done( function( state ) {
					_state = state;
					console.log( _state );
				} );
			} else if ( _state = 1 ) {
				$.ajax( {
					type: "POST",
					url: "/arduino/13/0"
				} )
				.done( function( state ) {
					_state = state;
					console.log( _state );
				} );
			}
		});
	}

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

});	