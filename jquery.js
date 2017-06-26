var sentences = [
	'Raindrop', 
	'(DRIP)', 'DROP TOP', 'eating some cookies in a hotbox'];

sentenceCounter = 0;
letterCounter = 0;
currentsentence = '';

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

function handleSentences() {
	$('#sentences').empty();
	currentsentence = sentences
	$('#sentences').append(sentences[sentencesCounter]);
	sentenesCounter++;
}