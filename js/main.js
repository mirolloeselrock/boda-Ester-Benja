function countDownTo(countDate) {
    var now = new Date().getTime();
    var distance = countDate - now;
    var days = Math.ceil(distance / (1000 * 60 * 60 * 24));    

    if (distance < 0) {
        clearInterval(x);
        days=0;                
    }
    if (days != document.getElementById("days").innerHTML)
        $('#days')
          .prop('number', 365)
          .animateNumber(
            {
              number: days,
              numberStep: function(now, tween) {
                var target = $(tween.elem),
                    rounded_now = Math.round(now);

                target.text(rounded_now);
              }
            },
            400,
            'linear'
          );         
}

(function($) {
	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {
		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				i++;
				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});					
				}, 70);				
			}
		} , { offset: '95%' } );
	};
	contentWayPoint();


	var OnePageNav = function() {
		$("a[href^='#']").on('click', function(e) {
		 	e.preventDefault();

		 	var hash = this.hash,
		 			navToggler = $('.navbar-toggler');
		 	$('html, body').animate({
		    scrollTop: $(hash).offset().top
		  }, 700, 'easeInOutExpo', function(){
		    window.location.hash = hash;
		  });

		  if ( navToggler.is(':visible') ) {
             $("#ftco-nav").collapse('hide');
		  }
          
		});
		$('body').on('activate.bs.scrollspy', function () {
		  console.log('nice');
		})
	};
	OnePageNav();

    $(".popup-gallery").magnificPopup({
        delegate:"a",
        type:"image",
        tLoading:"Cargando imagen #%curr%...",
        mainClass:"mfp-img-mobile",
        gallery:{
            enabled:!0,
            navigateByImgClick:!0,
            preload:[0,1]},
        image:{tError:'<a href="%url%">La imagen #%curr%</a> no se ha podido cargar.'}
    });


	var countDownDate = new Date("Jun 8, 2019 00:00:00").getTime();
    
	var x = setInterval(function() {
       countDownTo(countDownDate);
	}, 1000);


})(jQuery);
