/*
 *      Yún JS Module:
 *      	ctrl.js
 *
 *      desc:
 *      	This module uses AJAX POST to send data to the Yún's /arduino REST API endpoint
 			to control servo motors with the Adafruit 16-Channel 12-bit PWM/Servo Driver.
 *
 */

define( ['jquery', 'keypress'], function ( $, keypress ) {

	var listener = new keypress.Listener();
	_init();

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	function _init() {

		// Click functions
		$( 'button' ).click( function() {

			$( 'button' ).not( this ).removeClass( 'active' );
			$( this ).addClass( 'active' );
		} );

		$( 'button.forward' ).click( function() {

			_forward();
		} );

		$('button.left').click(function(){

			_left();			
		});

		$( 'button.stop' ).click( function() {

			$.ajax( {
				type: 'POST',
				url: '/arduino/2'
			} )
			.done( function( text ) {
				console.log( text );
			} );
		});

		$( 'button.right' ).click( function() {

			$.ajax( {
				type: 'POST',
				url: '/arduino/3'
			} )
			.done( function( text ) {
				console.log( text );
			} );
		});

		$( 'button.reverse' ).click( function() {

			$.ajax( {
				type: 'POST',
				url: '/arduino/4'
			} )
			.done( function( text ) {
				console.log( text );
			} );
		});

		var my_combos = listener.register_many([
		    {
		        'keys'          : 'space',
		        'on_keydown'    : function() {

		        },
		        'prevent_defaut': true
		    },
		    {
		        'keys'          : 'up',
		        'on_keydown'    : function() {
		        	_forward();
		        },
		        'prevent_defaut': true
		    },
		    {
		        'keys'          : 'left',
		        'on_keydown'    : function() {
		            _left();
		        },
		        'prevent_defaut': true
		    },
		    {
		        'keys'          : 'right',
		        'on_keydown'    : function() {
		            console.log('You pressed right.');
		        },
		        'prevent_defaut': true
		    },
		    {
		        'keys'          : 'down',
		        'on_keydown'    : function() {
		            console.log('You pressed down.');
		        },
		        'prevent_defaut': true
		    }
		]);
	}

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	function _forward() {
		$.ajax( {
			type: 'POST',
			url: '/arduino/0'
		} )
		.done( function( text ) {
			console.log( text );
		} );
	}

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	function _left() {
		$.ajax( {
			type: 'POST',
			url: '/arduino/1'
		} )
		.done( function( text ) {
			console.log( text );
		} );
	}

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

});	