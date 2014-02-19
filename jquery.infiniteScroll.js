(function($)
{
	$.fn.infiniteScroll=function(options)
	{

		var defauts =
		{
			"videos" : 4,
			"show" : 4
		}

		var parametres=$.extend(defauts, options);

		this.each(function()
		{
			var element = $(this);
			element.find('div').slice(parametres.videos).hide();

			$('.more').click(function() {
				var divTotal = element.find('div').length;
				var divVisible = element.find('div:visible').length;
				var divAffiche = divVisible + parametres.show;
				element.find('div').slice(0, divAffiche).show();
				if (divAffiche >= divTotal)
					$('.more').hide();
				return false;
			});

		});

		return this;
	}
})(jQuery);