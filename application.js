
$(document).ready(function() {


//forst box hover

	$( "div .bg-gradient--gray:first, #basecamp").mouseover(function() {
	 	$("#basecamp").addClass("show");
	 	$(".main-headline").addClass("hide");

	 
	 });

	 	$( "div .bg-gradient--gray:first, #basecamp").mouseout(function() {
	 	$("#basecamp").removeClass("show");
	 	$(".main-headline").removeClass("hide");


	 });

//second box hover	

	 $( "div .bg-gradient--gray:nth-child(2), #highrise").mouseover(function() {
	 	$("#highrise").addClass("show");
	 	$(".main-headline").addClass("hide");

	 });

	 	 $( "div .bg-gradient--gray:nth-child(2), #highrise").mouseout(function() {
	 	$("#highrise").removeClass("show");
	 	$(".main-headline").removeClass("hide");
	 });

//third box hover	

	 $( "div .bg-gradient--gray:last, #campfire").mouseover(function() {
	 	$("#campfire").addClass("show");
	 	$(".main-headline").addClass("hide")
	 });

	 	 $( "div .bg-gradient--gray:last, #campfire").mouseout(function() {
	 	$("#campfire").removeClass("show");
	 	$(".main-headline").removeClass("hide");
	 });

});



