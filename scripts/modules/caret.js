import Config from "./config.js";

function addCaretTo(letter) {
	letter.setAttribute("id", Config.caret);
}

function removeCaretFrom(letter) {
	letter.removeAttribute("id");
}

function addHighlightTo(word) {
	word.classList.add("active");
}

function removeHighlightFrom(word) {
	word.classList.remove("active");
}

function goToNextLetter(sentence) {
	removeCaretFrom(sentence.activeLetter);
	sentence.incrementLetterIndex();
	addCaretTo(sentence.activeLetter);
}

function goToPreviousLetter(sentence) {

	let isExtra = false;

	if ( sentence.activeLetterIndex > 0 ) {
		sentence.decrementLetterIndex();
		isExtra = sentence.activeLetter.classList.contains('extra');
		if ( isExtra ) {
			sentence.activeLetter.remove();
		} else {
			sentence.incrementLetterIndex();
		}
	}

	if ( !isExtra ) {
		removeCaretFrom(sentence.activeLetter);
		sentence.decrementLetterIndex();
		addCaretTo(sentence.activeLetter);
	}
}

function goToNextWord(sentence) {
	removeHighlightFrom(sentence.activeWord);
	sentence.incrementWordIndex();
	addHighlightTo(sentence.activeWord);
}

function goToPreviousWord(sentence) {
	removeHighlightFrom(sentence.activeWord);
	sentence.decrementWordIndex();
	addHighlightTo(sentence.activeWord);
}

export { 
	goToPreviousWord, 	goToNextWord,
	goToPreviousLetter, goToNextLetter,
	addCaretTo, 				removeCaretFrom,
	addHighlightTo, 		removeHighlightFrom,
};