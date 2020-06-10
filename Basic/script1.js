$(document).ready(function() {
	$('div').on('click', function() {
		var ref = $(this).attr('class')
		console.log(ref)
		if (ref == "smallbox box"){
			$("h2").text("You clicked on the Christmas Present.")
		} else if (ref == "smallbox santa"){
			$("h2").text("You clicked on Santa Claus.")
		} else if (ref == "smallbox bells"){
			$("h2").text("You clicked on the Christmas bell.")
		}
        })
	$("body").css({"display":"flex", "flex-direction": "column", "align-items": "center"})
	$("#bigbox").css({"display":"flex", "justify-content": "space-around"})
	$(".smallbox").css({"width":"32%"})
	$("img").css({"height":"24vw"})
});