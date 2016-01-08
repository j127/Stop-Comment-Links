(function ($) {
	console.log('Saluton, Mondo');

	var commentBox,
		commentText,
		bannedStrings = [],
		containsLinks = false,
		warningMessageDiv = $('<div>'),
		i, iLen;

	// Define banned strings
	bannedStrings = [
		'<a href=',
		'http://',
		'https://',
		'www.'
	];

	commentBox = $('textarea#comment');

	// Add CSS and text to the warning message
	warningMessageDiv.css({
			'color': '#f00',
			'font-size': '19px',
			'font-weight': 'bold',
			'display': 'none'
		})
		.attr('id', 'sclWarningMessage')
		.text('Links are not allowed in comments.');

	commentBox.before(warningMessageDiv);

	function showWarning() {
		commentBox.css('outline', '6px solid #f00');
		warningMessageDiv.fadeIn();
	}

	function removeWarning() {
		commentBox.css('outline', '1px solid green');
		warningMessageDiv.fadeOut();
	}

	// Event listeners
	commentBox.on('keydown', function (e) {
		commentText = $(this).val();

		containsLinks = false;

		// Check for banned text
		for (i = 0, iLen = bannedStrings.length; i < iLen; i++) {
			if (commentText.indexOf(bannedStrings[i]) > -1) {
				containsLinks = true;
			}
		}

		// Show or remove the warning
		containsLinks === true ? showWarning() : removeWarning();

	});

	// Prevent form submission if there are links
	$('form#commentform').on('submit', function (e) {
		if (containsLinks === true) {
			e.preventDefault();
			alert('Please remove all links from your comment before submitting it. Otherwise it will go in the trash.')
		}
	});

}(jQuery));
