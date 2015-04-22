function eon_checkbox () {
		
	if($("#isAgeSelected").is(':checked'))
	    $("#txtAge").show();  // checked
	else
	    $("#txtAge").hide();  // unchecked
}