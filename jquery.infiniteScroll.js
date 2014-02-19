(function($)
{
	$.fn.infiniteScroll=function(options)
	{

		var defauts =
		{
			"videos" : 4,
			"show" : 4,
			"element" : "div"
		}

		var parametres=$.extend(defauts, options);

		this.each(function()
		{
			var element = $(this);
			element.find(parametres.element).slice(parametres.videos).hide();

			$('.more').click(function() {
				var divTotal = element.find(parametres.element).length;
				var divVisible = element.find(parametres.element + ':visible').length;
				var divAffiche = divVisible + parametres.show;
				element.find(parametres.element).slice(0, divAffiche).show();
				if (divAffiche >= divTotal)
					$('.more').hide();
				return false;
			});

		});

		return this;
	}
})(jQuery);