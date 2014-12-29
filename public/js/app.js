/*!
 * DO NOT EDIT THIS FILE
 * File concatatenated by grunt @ 2014-12-29 16:02
 * HeadStart
 * 
 * 
 * @author Nic Mulvaney
 * @version 0.0.1
 * Copyright 2013. MIT licensed.
 */


// Setup App namespace
var App = App || {};

// Load scripts
/* ------------------------------------------------------------ */
var scripts = [
	{jquery: 		"//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"},
	{device: 		"js/vendor/device.min.js"},
	{transparency: 	"js/vendor/transparency.min.js"}
];


// Globals
/* ------------------------------------------------------------ */

var event_down, 
	event_move, 
	event_release, 
	transition = "transitionend webkitTransitionEnd",
	animation = "animationend webkitAnimationEnd";



App.view = (function () {

	var init = function(){
		console.log("All ready!");
	};

	return {
		init:init
	};

})();


App.api = (function () {


	var xhr;
	var urls = {
		// related to type
	};

	var get = function(type, data, success, error){
		var url = urls[type];
		xhr = $.ajax({
			url:url,
			data: data,
			dataType: "jsonp",
			type: "GET",
			contentType: 'application/json',
			cache: false,
			timeout:15000,
			success: function (data) {
				if(success){success(data);}
			},
			error: function (data) {
				if(data.statusText==="timeout"){
					console.log("Connection timed out.");
				}else if(data.statusText!=="abort"){
					console.log("Connection error!");
				}
				if(error){error(data);}
			}
		});
	};

	var abort = function(type){
		if(xhr && xhr.readyState !== 4){
            xhr.abort();
        }

	};

	return {
		get:get,
		abort:abort
	};

})();


// GENERIC TOOLS
/* ------------------------------------------------------------ */

// Load scripts and initiate the app
var ready = function(){
	head.js.apply(window, scripts).ready('transparency', function(){
		checkDevice();
		App.view.init();
	});
};

if(!window.cordova){ 
	ready();
}else{ // if Cordova wait for device
    document.addEventListener("deviceready", ready, false);
}

// Disable Console if not available;
window.console = window.console || { log: function (d) {} };

// Check if mobile device
var checkDevice = function(){
	if(device.desktop()) {
	    event_down 		= "mousedown";
	    event_move 		= "mousemove";
	    event_release	= "mouseup";
	}else{
		event_down 		= "touchstart";
	    event_move 		= "touchmove";
	    event_release 	= "touchend";
	}
};
