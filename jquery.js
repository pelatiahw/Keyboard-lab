var sentences =[
	
	'Ten ate neite ate nee enet ite ate inet ent eate',
    'Too ato too nOt enot one totA not anot tOO aNot',
    'oat itain oat tain nate eate tea anne inant nean',
    'itant eate anot eat nato inate eat anot tain eat',
    'nee ene ate ite tent tiet ent ine ene ete ene ate'
	
	];

var keyPress;
var i = -1;
var l = 0;
var sentLength = sentences[l].length;
var numTick = 0;
var correct = $('<span />').attr({'class':'glyphicon glyphicon-ok', 'aria-hidden':'true' });
var incorrect = $('<span />').attr({'class':'glyphicon glyphicon-remove', 'aria-hidden':'true' });
var numWrong = 0;
var numberOfWords = 54;
var start = new Date();

$(document).ready(function() {
    $('#keyboard-upper-container').hide();
    
$(document).keyup(function() {
    if(event.which == 16) {
        $('#keyboard-lower-container').show();
        $('#keyboard-upper-container').hide();
    }   
});

$(document).keydown(function() {
    if(event.which == 16) {
        $('#keyboard-lower-container').hide();
        $('#keyboard-upper-container').show();
    }   
});

$('body').keypress(function(e) {
    keyPress = String.fromCharCode(event.which);
});

$(document).keypress(function(event) {
    $('#' + event.which).css('background-color', 'yellow');
        $(document).keyup(function() {
            $('#' + event.which).css('background-color', '#f5f5f5');
        });
});

    $('#sentence').html((sentences[0].split('')));

    $('body').on('keypress', function() {
        i++;
        push();
    });
});

function push() {
    numTick++;
    var sentChar = sentences[l].charAt(i);
    $('#target-letter').text(sentChar);
    if (sentChar == keyPress) {
        $('#feedback').html(correct);
    } 
    else if (numTick == 50){
        gameEnd();
    } else if (numTick >= sentences[l].length) {
        l++;
        $('#yellow-block').css('margin-left', "-15px");
        $('#sentence').html((sentences[l]).split(''));
        $('#feedback').html('');
        numTick = 0;
        i = -1;
        return;
    } 
    else {
        $('#feedback').html(incorrect);
        numWrong++;
    }
};



/*
$('#feedback').empty()
    
    if (x[letterCounter] == String.fromCharCode(e.which)) {
        
        $('#target-letter').empty()
        $('#feedback').append('<div class="glyphicon glyphicon-ok"></div>');
        if (letterCounter < x.length) {
            letterCounter = letterCounter + 1
            $('#yellow-block').animate({ left: '+=17px' }, 'fast');
            $('#target-letter').append(x[letterCounter]);
            
        }
        
    }

    else if (x[letterCounter] !== String.fromCharCode(e.which)) {
        $('#feedback').append('<div class="glyphicon glyphicon-remove"></div>');
        letterCounter = letterCounter
        numberOfMistakes++

    }

$(document).ready(function () {
    $('#sentences').append(sentences[sentenceCounter]);
    $('#target-letter').append(x[letterCounter]); /*MAKE ONLY FIRST LETTER OF FIRST LINE WORK*/