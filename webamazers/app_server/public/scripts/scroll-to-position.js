/* ------------------------------

	Scroll to a position (id)
	in a document

------------------------------ */

function scrollToPosition(position, margin, duration) {

	// check if position already set or we have an id and need to set
	if(typeof position != 'number') {
		// set element
		element = document.getElementById(position);
		if(typeof(margin) != "undefined") {
			// get style
			var element_style = element.currentStyle || window.getComputedStyle(element);
			// calculate postion
			position = element.offsetTop - element_style.marginBottom.replace("px","");
		} else {
			position = element.offsetTop;
		}
	}

	// set the window
	var body = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
	
	// set default if nothing given
	if(typeof(duration) == "undefined") var duration = 350;

    // we have reached the end
    if (duration <= 0) return;

    // calculate
    var difference = position - body,
    	perTick = difference / duration * 10;

    // do the scroll
    setTimeout(function() {
        window.scroll(0, body + perTick);
        scrollToPosition(position, margin, duration - 10);
    }, 10);

}




