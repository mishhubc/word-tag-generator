$(document).ready(function () {
	$('#wordCloud').jQWCloud({
		words: [
			{ word: 'USZCZELNIENIA', weight: 60 },
			{ word: 'SZKŁO', weight: 39 },
			{ word: 'SZKLANE', weight: 11, color: 'green' },
			{ word: 'BAZALT', weight: 27 },
			{ word: 'ARAMID', weight: 36 },
			{ word: 'KRZEM', weight: 39 },
			{ word: 'WŁÓKNO', weight: 12, color: 'green' },
			{ word: 'KWADRAT', weight: 27 },
			{ word: 'SILONTEX', weight: 36 },
			{ word: 'SZCZELIWO', weight: 22 },
			{ word: 'SKRĘCANIE', weight: 40 },
			{ word: 'PRZĘDZA', weight: 39 },
			{ word: 'SZYDEŁKOWA', weight: 11, color: 'green' },
			{ word: 'RDZEŃ', weight: 27 },
			{ word: 'TAŚMA', weight: 36 },
			{ word: 'TEMPERATUROWY', weight: 39 },
			{ word: 'TKANY', weight: 12, color: 'green' },
			{ word: 'DZIANA', weight: 27 },
			{ word: 'HERMETYCZNY', weight: 27 },
			{ word: 'SZPULA', weight: 22 },
			{ word: 'SZCZELNY', weight: 12, color: 'green' },
			{ word: 'GRZANE', weight: 27 },
			{ word: 'CIEPŁO', weight: 36 },
			{ word: 'TECHNOLOGIA', weight: 22 },
			{ word: 'IZOLACJA', weight: 40 },
			{ word: 'CERTYFIKATY', weight: 39 },
			{ word: 'PIEC', weight: 11, color: 'green' },
			{ word: 'DOM', weight: 27 },
			{ word: 'ROZWÓJ', weight: 36 },
			{ word: 'ROLKA', weight: 39 },
			{ word: 'PREMIUM', weight: 12, color: 'green' },
			{ word: 'OGNIOTRWAŁY', weight: 27 },
			{ word: 'OGRZEWANIE', weight: 60 },
			{ word: 'KOMINEK', weight: 22 },
		],
		//cloud_color: 'yellow',
		minFont: 10,
		maxFont: 50,
		//fontOffset: 5,
		//cloud_font_family: 'Owned',
		//verticalEnabled: false,
		padding_left: 1,
		//showSpaceDIV: true,
		//spaceDIVColor: 'white',
		word_common_classes: 'WordClass',
		word_mouseEnter: function () {
			$(this).css('text-decoration', 'underline');
		},
		word_mouseOut: function () {
			$(this).css('text-decoration', 'none');
		},
		// word_click: function () {
		// 	alert('You have selected:' + $(this).text());
		// },
	});
});
