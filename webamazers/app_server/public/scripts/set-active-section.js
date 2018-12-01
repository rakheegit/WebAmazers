/* ------------------------------

	Set event listeners

------------------------------ */

if(window.addEventListener) {
    addEventListener('DOMContentLoaded', setActiveSection, false); 
    addEventListener('load', setActiveSection, false); 
    addEventListener('scroll', setActiveSection, false); 
    addEventListener('resize', setActiveSection, false); 
} else if(window.attachEvent)  {
    attachEvent('onDOMContentLoaded', setActiveSection); // IE9+ :(
    attachEvent('onload', setActiveSection);
    attachEvent('onscroll', setActiveSection);
    attachEvent('onresize', setActiveSection);
}





/* ------------------------------

	Function

------------------------------ */

// set default active section
var section_active = "home";

function setActiveSection() {
    
    // get sections
	const sections = document.getElementsByClassName("section");
	const sections_in_viewport = [];

	// run through
	for (let i = 0; i < sections.length; i++) {

		// set start and end of section
		var section_start = sections[i].offsetTop,
			section_end = sections[i].offsetTop + sections[i].offsetHeight;

		// check if current section is in viewport
		if(section_end > window.pageYOffset && window.pageYOffset + window.innerHeight - section_start > 0) {

			// two sections max can be in viewport
			// depending on positons we calculate size

			var section_size = 0;

			if(section_start < window.pageYOffset) {
				section_size = section_end - window.pageYOffset;
			} else {
				section_size = window.pageYOffset + window.innerHeight - section_start;
			}

			// create array with current section
			// and push that shit to sections_in_viewport array

			// first check if section belongs to another section
			const section_name = sections[i].dataset.parent !== undefined ? sections[i].dataset.parent : sections[i].id;

			var section_current = {
			  'name' : section_name,
			  'size' : section_size
			};

			sections_in_viewport.push(section_current);

		}

	}

	if(sections_in_viewport[1] === undefined || sections_in_viewport[0].size >= sections_in_viewport[1].size) {
		
		if(sections_in_viewport[0].name != section_active) {
			
			// set active
			section_active = sections_in_viewport[0].name;
			setActiveMenuClass(section_active);

		}

	} else {

		if(sections_in_viewport[1].name != section_active) {
			
			// set active
			section_active = sections_in_viewport[1].name;
			setActiveMenuClass(section_active);

		}
	}

};





/* ------------------------------

	Set nav active class

------------------------------ */

function setActiveMenuClass(section) {

	// get the nav
	const nav_elements = document.getElementsByClassName("nav-js");

	// and clear active class
	for (let i = 0; i < nav_elements.length; i++) {
	   nav_elements[i].classList.remove('active');
	}

	// set active
	document.querySelector(".nav-js--" + section).classList.add("active");

	// add hash
	history.pushState(null, null, "#" + section);

};




