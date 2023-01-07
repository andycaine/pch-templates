// JavaScript Document
    // You can also use "$(window).load(function() {"
	// JKM - Had to replace // $(function () { //   with   // jQuery(function ($) {  // due to Uncaught TypeError
    jQuery(function ($) {

      // Slideshow 1 - Quotes System
      $("#slider1").responsiveSlides({
		auto: true,
        maxwidth: 1440,
        speed: 800,
		random: true,
      });
    });