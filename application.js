
$(document).ready(function() {


//forst box hover

	$( "div .bg-gradient--gray:first").mouseenter(function() {
	 	$("#basecamp").addClass("show");
	 	$(".main-headline").addClass("hide")
	 });

	 	$( "div .bg-gradient--gray:first").mouseleave(function() {
	 	$("#basecamp").removeClass("show");
	 	$(".main-headline").removeClass("hide");
	 });

//second box hover	

	 $( "div .bg-gradient--gray:nth-child(2)").mouseenter(function() {
	 	$("#highrise").addClass("show");
	 	$(".main-headline").addClass("hide")
	 });

	 	 $( "div .bg-gradient--gray:nth-child(2)").mouseleave(function() {
	 	$("#highrise").removeClass("show");
	 	$(".main-headline").removeClass("hide");
	 });

//third box hover	

	 $( "div .bg-gradient--gray:last").mouseenter(function() {
	 	$("#campfire").addClass("show");
	 	$(".main-headline").addClass("hide")
	 });

	 	 $( "div .bg-gradient--gray:last").mouseleave(function() {
	 	$("#campfire").removeClass("show");
	 	$(".main-headline").removeClass("hide");
	 });

});



