//--------------------------------------
//jn-gallery behavior
//--------------------------------------
(function($)
{
	$(document).ready(function()
	{
		// ------------------------
		// init
		// ------------------------
		var target = $('#jngallery-1');
		if(!target.length) return;

		var item = target.find('.gallery-item');

		// ------------------------
		// events
		// ------------------------
		// event for window resize
		$(window).resize(function(){
			scaleImages();
		});
		$(window).trigger('resize');


		// ------------------------
		// functions
		// ------------------------
		// function for images scale
		function scaleImages() {
			var fullwidth = $(window).width();
			var whitem = fullwidth / 4;
			var hgallery = fullwidth / 2;
			target.css('height', hgallery);
			item.each(function() {
				$(this).css({
					'width': whitem,
					'height': whitem
				});
			});
			target.find('#gallery-item-2').css('height', hgallery);
		}


		/*-----------------------------------------------------------------
		Magnific Popup
		-------------------------------------------------------------------*/
		$('.jnilla-gallery').magnificPopup({
			delegate: 'a',
			type: 'image',
			gallery:{
				enabled:true
			},
			removalDelay: 500,
			callbacks: {
				beforeOpen: function() {
					this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
					this.st.mainClass = this.st.el.attr('data-effect');
				}
			},
			closeOnContentClick: true,
			midClick: true
		});


	});

})(jQuery);
