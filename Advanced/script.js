$(document).ready(function () {
	function shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }
	  return array;
	}

	cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	shuffle_cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

	card_class = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]
	var shuffled_cards = shuffle(shuffle_cards);

	for (let i = 1; i <= shuffled_cards.length; i++){
		$(".cards.drag").append(`<div class="card" id="card_${i}"><img id="img_${i}"></div>`)
		var num = shuffled_cards[i-1]
		$(`#img_${i}`).attr("src", "img/" + num +".png")

		$(".cards.drop").append(`<div class="card" id="slot_${i}"></div>`)
	}

	$("img").draggable({
			revert: "invalid"

			
			})

	for (let i = 1; i <= shuffled_cards.length; i++){
		console.log(`#img_${i}`)
		console.log(`#slot_${shuffled_cards[i-1]}`)
		$(`#slot_${shuffled_cards[i-1]}`).droppable({

			accept: `#img_${i}`,

			drop: function (_event, ui) {
				$(this).addClass('finished'),




		}})
	}

})

	/*$(function() {
		for (i = 1; i <= shuffled_cards.length; i++){
			
	    	$(".card." + card_class[shuffled_cards[i-1]-1] + " img").draggable();
	    	$(".drop." + card_class[cards[i-1]-1]).droppable({
	    		drop: function(event, ui){
	    			const num_uno = shuffled_cards[i-1]
					const num_or = cards[i-1]

	    			$(".drop." + card_class[num_uno-1]).css({"box-color": "#e6dc1c", "box-shadow": "1vw 1vw 1vw 0.4vw rgba(200,200,0,0.75)"})
	    			
	    		}
	    	})
	}} );
})

//$(this).attr('class')

$( function() {
    $( "#draggable" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
  } ); */