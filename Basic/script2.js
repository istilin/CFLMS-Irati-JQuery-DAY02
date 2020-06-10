$(document).ready(function() {
	$('div').on('click', function() {
		var ref = $(this).attr('class')
		console.log(ref)
		
		if (ref == "smallbox santa"){
			$(this).hide()
		}
        })
	$("body").css({"display":"flex", "flex-direction": "column", "align-items": "center"})
	$("#bigbox").css({"display":"flex", "justify-content": "space-around", "flex-wrap": "wrap"})
	$(".smallbox").css({"width":"32%"})
	$("img").css({"height":"24vw"})
});