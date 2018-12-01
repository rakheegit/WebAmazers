/* ------------------------------

	Navigation

------------------------------ */

function nav(element) {

	// get the href value
	const hash = element.getAttribute("href");
	const section = hash.replace("#", "");

	// scroll to
	scrollToPosition(section, true);

	// remove mobile classes
	document.body.classList.remove("no-scroll");
	document.getElementById('mobile-menu').classList.remove('mobile-menu--active');

	// enable scroll
	stopBodyScrolling(false);

}





/* ------------------------------

	Mobile menu toggle

------------------------------ */

// toggle menu
function toggleMobileMenu() {

	// get the html and menu
	const menu = document.getElementById('mobile-menu');
	const body = document.body;

	// check if open
	if(menu.classList.contains("mobile-menu--active")) {

		// close the menu
		menu.classList.remove('mobile-menu--active');
		body.classList.remove("no-scroll");

		// enable scroll
		stopBodyScrolling(false);

	} else {

		// close the menu
		menu.classList.add('mobile-menu--active');
		body.classList.add("no-scroll");

		// disable scroll
		stopBodyScrolling(true);

	}

}





/* ------------------------------

	Stop scroll on mobile devices
	https://benfrain.com/preventing-body-scroll-for-modals-in-ios/

------------------------------ */

function stopBodyScrolling(bool) {
    if (bool === true) {
        document.body.addEventListener("touchmove", freezeVp, false);
    } else {
        document.body.removeEventListener("touchmove", freezeVp, false);
    }
}

var freezeVp = function(e) {
    e.preventDefault();
};





/* ------------------------------

	Modal windows

------------------------------ */

/* open */
function modalWindowOpen(element) {

	// set id that has the content
	const id = element.getAttribute("href").replace("#", "");

	// get modal
	const modal = document.getElementById("modal");

	// get content
	const content = document.getElementById(id).cloneNode(true);

	// need to remove link from about info
	if(id == "about-novice" || id == "about-ninja") {
		modal.classList.remove("modal--team");
		modal.classList.add("modal--about");
		content.removeChild(content.getElementsByTagName("a")[0]);
	} else if(id == "team-info") {
		modal.classList.remove("modal--about");
		modal.classList.add("modal--team");
	}
	
	// set html in the popup
	document.getElementById("modal-content").innerHTML = content.innerHTML;

	// remove content from dom
	content.remove();

	// open modal
	modal.classList.add("modal--open");

	// disable scroll
	stopBodyScrolling(true);

}

/* close */
function modalWindowClose() {

	// get modal
	const modal = document.getElementById("modal");
	const modal_content = document.getElementById("modal-content");

	// clear content
	modal_content.innerHTML = '';

	// close modal
	modal.classList.remove("modal--open");

	// enable scroll
	stopBodyScrolling(false);

}




