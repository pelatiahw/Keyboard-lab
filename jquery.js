var sentences = [
	'Raindrop', //0
	'(DRIP)', //1
	'DROP TOP', //2
	'eating some cookies in a hotbox'];
	append.sentenceCounter

sentenceCounter = 0;


$(document).keydown(function(event) {
	$( "#yellow-block" ).animate({
			left: "+=50",
		},  function() {
			// Animation complete.
		});
});
$(document).ready(function() {
	$('#keyboard-upper-container').hide();

	$("#sentence").append(sentences[0]);
});

$(document).keydown(function(event) {
		if(event.which == 16) {
			$("#keyboard-lower-container").hide();
			$("#keyboard-upper-container").show();
		}

});

$(document).keyup(function(event) {
		if(event.which == 16) {
			$("#keyboard-upper-container").hide();
			$("#keyboard-lower-container").show();
		};
});
	
$(document).on("keypress", function(event){
		$("#" + event.which).css({backgroundColor: "Lightblue"});
		$(document).keyup(function(){ 
			$("#" + event.which).css({backgroundColor: "#f5f5f5"});
		})
});
