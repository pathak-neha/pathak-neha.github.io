window.onload = function () {

    // toggle animation
    var particles = Particles.init({
        selector: '.background',
      color: ['#DA0463', '#404B69', '#DBEDF3'],
      connectParticles: false,
      maxParticles: 170,
      sizeVariations: 4,
      speed: 1,
      responsive: [
        {
          breakpoint: 768,
          options: {
            maxParticles: 120,
            connectParticles: false
          }
        }, {
          breakpoint: 425,
          options: {
            maxParticles: 100,
          }
        }, {
          breakpoint: 320,
          options: {
            maxParticles: 0 // disables particles.js
          }
        }
      ] 
    });

    $(".buttons").mouseover(function(){
        $(this).addClass("animated jello");
      });
      
      $(".buttons").mouseout(function(){
        $(this).removeClass("animated jello");
      });
      
      
      
      
      setTimeout(function() {
        $(".loader").css("display", "none");
        loaded.play();
      }, 2500);
      
      width = $(window).width();
      
      if (width <= 700) {
        $(".name").click(function() {
          $(".intro").css("right", "0");
          // $(".text").css("transform", "translateX(20px)")
          $(".wrapper").css("z-index", "20");
        });
      
        $(".close").click(function() {
          $(".intro").css("right", "-1000px");
        });
      
      }
      
      $("#arrow").click(function() {
        open.play();
        about.play();
      
        if (width <= 700) {
          $(".wrapper").css("z-index", "20");
          $(".intro").css("transform", "translateX:100px")
        }
      });
      
      $(".close").click(function() {
        close.play();
      })
      
      var loaded = anime({
        targets: '.name',
        scale: [{
          value: 3,
          duration: 100,
          elasticity: 100
        }, {
          value: 1,
          duration: 500,
          elasticity: 100
        }],
        duration: 4000,
        autoplay: false,
      
      });
      
      var open = anime({
        targets: '.intro',
        translateX: -1000,
        duration: 1000,
        autoplay: false
      });
      
      var close = anime({
        targets: '.intro',
        translateX: 1800,
        duration: 500,
        autoplay: false,
      });
      
      var about = anime({
        targets: '.text',
        translateX: [{
          value: -200,
          duration: 100,
          elasticity: 100
        }, {
          value: 0,
          duration: 500,
          elasticity: 100
        }],
        delay: 200
      });
};