$('#location').tooltip({
	title: "Select the best suggestion",
	position: 'bottom'
})
.on('change', function(){
	// one of these listeners
	$(this).one('blur.empty', function(){
		$(this).val(''); // this empties the input
		$('#suggested_location').text('Suggestion given and not taken.');
	});
})
.on('blur', function(){
	if(!$(this).val()){
		// other things you might need to happen on blur
		$('#suggested_location').text('Suggestion neither given nor taken.');
	}
});

var approximateLocation = new google.maps.places.Autocomplete(
			(document.getElementById('location')), {types: ['geocode']}
		);
		google.maps.event.addListener(approximateLocation, 'place_changed', function(){
			var place = approximateLocation.getPlace();
			$('#suggested_location').text('Suggestion taken: ' + place.formatted_address);
			// don't empty the input anymore
			$('#location').off('blur.empty');
		}
);


$('#location2').tooltip({
	title: "Select the best suggestion",
	position: 'bottom'
})
.on('change', function(){
	// one of these listeners
	$(this).one('blur.empty', function(){
		$(this).val(''); // this empties the input
		$('#suggested_location2').text('Suggestion given and not taken.');
	});
})
.on('blur', function(){
	if(!$(this).val()){
		// other things you might need to happen on blur
		$('#suggested_location2').text('Suggestion neither given nor taken.');
	}
});

var approximateLocation = new google.maps.places.Autocomplete(
			(document.getElementById('location2')), {types: ['geocode']}
		);
		google.maps.event.addListener(approximateLocation, 'place_changed', function(){
			var place = approximateLocation.getPlace();
			$('#suggested_location2').text('Suggestion taken: ' + place.formatted_address);
			// don't empty the input anymore
			$('#location2').off('blur.empty');
		}
);