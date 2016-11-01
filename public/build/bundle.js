/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	
	var c = document.getElementById("canvas");
	var ctx = c.getContext("2d");


	var array =[

	                {

	                name:"ARTIC CIRCLE",
	                xpos:"600",
	                ypos:"50",
	                radius:"3"

	                },


	                {

	                 name:"THE UNITED STATES OF AMERICA",
	                 xpos:"100",
	                 ypos:"138",
	                 radius:"3"   

	                },  


	                {

	                  name:"AUSTRALIA",
	                  xpos:"594",
	                  ypos:"264",
	                  radius:"3"      

	                },
	                {
	                  name:"ARGENTINA",
	                  xpos:"176",
	                  ypos:"298",
	                  radius:"3"      



	                }





	];


	function draw(){


	    array.map(function(user){    
	    ctx.beginPath();
	    ctx.arc(user.xpos, user.ypos, user.radius, 0, 2 * Math.PI);
	    ctx.stroke();
	    ctx.fillStyle = "#FF0000";
	    ctx.fill();
	    ctx.closePath();
	    });
	    

	}
	draw();


	function getPosition(event) {
	    x = event.clientX;
	    y = event.clientY;  
	    findPos();
	}


	function findPos(){
	var r = 5;

	array.map(function(user){

	    if ((x > (user.xpos - r) && x < (user.xpos + r)) && (y > (user.ypos - r) && y < (user.ypos + r)))
	    {
	       $("#status").text(user.name);
	    }
	   
	    
	});

	}









/***/ }
/******/ ]);