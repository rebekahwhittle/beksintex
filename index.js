
	// Custom jQuery for tab area
	tabThrough: function() {
		$('.header-tabs').on('click', function(e){
			e.preventDefault();
			var $currentAttrValue = $(this).attr('href');
            var $currentClassToggle = $(this).data('class-toggle');
            var $background = $('#background');
            $('.tab-content .tab').removeClass('active').hide();
            $('.tab-content ' + $currentAttrValue).addClass('active').show();
            $(this).addClass('active');
            $('.tab-links .header-tabs').not(this).removeClass('active');
            $background.removeClass().addClass($currentClassToggle);
		});
	},

	// Custom jQuery for smooth scroll on pricing page
	transactionFee: function() {
		$('#transaction-fee-btn').on('click', function(e) {
			e.preventDefault();
			var $root = $('html, body');
			var $feeModule = $(this).attr('href');

			$root.animate({
				scrollTop: $( $feeModule ).offset().top-100
			}, 700);
		});
	},