$(document).ready(function() {
	$('#keyboard-upper-container').hide();
});

$(document).keydown(function(event) {
		if(event.which == 16) {
			$("#keyboard-upper-container").hide();
			$("#keyboard-lower-container").show();
		}

});

$(document).keyup(function(event) {
		if(event.which == 16) {
			$("#keyboard-upper-container").hide();
			$("#keyboard-lower-container").show();
		};
});
	
$(document).on("keypress", function(event){
		$("#" + event.which).css("background-color", "Lightblue");
		$(document).keyup(function(){ 
			$("#" + event.which).css("background-color", "#f5f5f5");
		})
});

var sentences = ['Raindrop,', 'drop top', 'eating on cookie in the hotbox',
'dabbing on your chick she a thot, thot,', 'Coding up hope in the crockpot,',
'We code from nothing to something ninja', 'dont trust nobody grip the trigger',
'Call up the gang, they come and get you', 'Cry me a river, give you a tissue',
'My code is bad and boujee', 'Coding up hope with lil Uzi',
'My ninjas is savage, ruthless', 'We got 30s and 100 rounds too'];
for (var i = 0; i < sentences.length; i++) {
console.log(sentences[i]);
$("#sentence").append(sentences[i]);
}
