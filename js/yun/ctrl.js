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

		$( 'button.left' ).click( function() {
			_left();			
		} );

		$( 'button.stop' ).click( function() {
			_stop();
		});

		$( 'button.right' ).click( function() {
			right();
		});

		$( 'button.reverse' ).click( function() {
			_reverse();
		});

		var my_combos = listener.register_many( [
		    {
		        'keys'          : 'space',
		        'on_keydown'    : function() {
		        	_stop();
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
		            _right();
		        },
		        'prevent_defaut': true
		    },
		    {
		        'keys'          : 'down',
		        'on_keydown'    : function() {
		            _reverse();
		        },
		        'prevent_defaut': true
		    }
		] );
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

	function _stop() {
		$.ajax( {
			type: 'POST',
			url: '/arduino/2'
		} )
		.done( function( text ) {
			console.log( text );
		} );
	}

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	function _right() {
		$.ajax( {
			type: 'POST',
			url: '/arduino/3'
		} )
		.done( function( text ) {
			console.log( text );
		} );
	}

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	function _reverse() {
		$.ajax( {
			type: 'POST',
			url: '/arduino/4'
		} )
		.done( function( text ) {
			console.log( text );
		} );
	}
});	