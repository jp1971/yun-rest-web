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
        'keypress': 'lib/keypress',
        'ctrl': 'yun/ctrl',
        'toggle_led': 'yun/toggle_led',
        'cut_up': 'yun/cut_up'
    },
    shim: {
        // 'keypress': {
        //     exports: 'keypress'
        // }
    }
});

requirejs([
        'jquery',
        'keypress',
        'ctrl',
        'toggle_led',
        'cut_up'
    ], function (
        $,
        keypress,
        ctrl,
        toggle_led,
        cut_up
    ){
});
