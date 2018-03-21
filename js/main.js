
$(document).ready(function() {
	$.getJSON("./data/technologies.json", function(data) {
		$.each(data, function (i, obj) {
			let listItem = `<div class="col-sm-2 tech-logo-cont text-center">
						<img class="img-fluid tech-logo" src="./images/logos/${obj.image}.png">
						<h5 class="logo-title">${obj.name}</h5>`;
			$('#techListContainer').append(listItem);
		});
	});
});