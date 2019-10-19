$('#open-card').on('click', function() {
	console.log("🎃");

	$('.inside-card-container').toggleClass("visible");
	$('.card-container, .peak-inside').addClass("hidden");
});

$('#close-card').on('click', function() {
	console.log("🦇");

	$('.inside-card-container').removeClass("visible");
	$('.card-container, .peak-inside').removeClass("hidden");
});