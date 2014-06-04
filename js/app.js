/*
 *      Yún Require JS Module:
 *          app.js
 *
 *      desc:
 *          This file specifies the JS modules to be loaded and initialized by Require JS.
 *
 */

requirejs.config({
    paths: {
        'jquery': 'lib/jquery.min',
        'toggle_led': 'yun/toggle_led'
    },
    shim: {
    }
});

requirejs([
        'jquery',
        'toggle_led'
    ], function (
        $,
        toggle_led
    ){
});
