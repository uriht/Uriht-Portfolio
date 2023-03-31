// -------------------- About -----------------------
var tabLinks = document.getElementsByClassName('tab-links');
var tabContents = document.getElementsByClassName('tab-contents');



function openTab(tabName) {

    for (let tabLink of tabLinks) {
        tabLink
            .classList
            .remove("active-link");
    }

    for (let tabContent of tabContents) {
        tabContent
            .classList
            .remove("active-tab");
    }

    event
        .currentTarget
        .classList
        .add('active-link');
    document
        .getElementById(tabName)
        .classList
        .add('active-tab');
}

// ---------------- JS for Mobile Menu ------------------
var mobileMenu = document.getElementById("mobile-menu");
function openMenu() {
    mobileMenu.style.right = "0px";
}

function closeMenu() {
    mobileMenu.style.right = "-400px";
}

// This is Resume text JS
const animateTextTyping = (node) => {
	const text = node.textContent;
	const chars = text.split("");
	node.innerHTML = "";
	node.classList.add("typing");
	i = 0;
	const addNextChar = (i) => {
		let nextChar = chars[i];
		node.innerHTML += "<span>" + nextChar + "<span>";
		if (i < chars.length - 1) {
			setTimeout(function () {
				addNextChar(i + 1);
			}, 50 + Math.random() * 100); // add random delay to make it more human ;)
		} else {
			setTimeout(function () {
				node.classList.remove("typing");
			}, 50 + Math.random() * 150);
		}
	};
	addNextChar(i);
};
let text = document.getElementById("text");
animateTextTyping(text);
