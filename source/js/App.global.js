// Setup App namespace
var App = App || {};

// Load scripts
/* ------------------------------------------------------------ */
var scripts = [
	{jquery: 		"js/vendor/jquery-2.1.3.min.js"},
	{device: 		"js/vendor/device.min.js"},
	{moment: 		"js/vendor/moment.min.js"},
	{chosen: 		"js/vendor/chosen.jquery.min.js"},
	{rangycore: 	"js/vendor/rangy/rangy-core.js"},
	{rangytextrange:"js/vendor/rangy/rangy-textrange.js"},
	{undo: 			"js/vendor/undomanager.js"},
	{storage: 		"js/vendor/localforage.min.js"},
	{switchery: 	"js/vendor/switchery.min.js"},
	{fontloader: 	"js/vendor/webfontloader.js"},
	{autolink: 		"js/vendor/ba-linkify.min.js"}
];


// Globals
/* ------------------------------------------------------------ */

var event_down, 
	event_move, 
	event_release, 
	transition = "transitionend webkitTransitionEnd",
	animation = "animationend webkitAnimationEnd";


