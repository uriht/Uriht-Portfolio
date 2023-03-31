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
