const fontbase = 34;

function addFontSize() {
	const paragraphs = document.querySelectorAll("#poster span");

	//Add font size
	paragraphs.forEach((paragraph) => {
		const text = paragraph.textContent;
		const characterCount = text.length;
		const fontSize = fontbase / characterCount + "rem";
		paragraph.style.fontSize = fontSize;

		if (parseFloat(fontSize) < 1) {
			paragraph.style.lineHeight = "1.2em";
		}

		//Show the result
		document.getElementById("poster").classList.add("showposter");
	});
}

addFontSize();