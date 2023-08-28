(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        // Sticky Navbar js
        window.addEventListener("scroll", function(){
            var header = this.document.querySelector("header");
            header.classList.toggle("sticky", this.window.scrollY > 0);
        });

        // Owl Carousel js
        $('.banner-slider').owlCarousel({
          loop:true,
          margin:10,
          nav:true,
          autoplay:true,
          autoplayTimeout:7000,
          autoplayHoverPause:true,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              1000:{
                  items:1
              }
          }
        });
    
    });

}(jQuery));	

