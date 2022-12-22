import * as Misc from "./misc.js"
import * as Caret from "./caret.js";
import * as Elements from "./elements.js";
import * as Constants from "./constants.js";

import Config from "./config.js";
import Sentence from "./sentence.js";
import { test } from "../main.js";
import { Time, History } from "./stats.js";

let time = new Time();
let history = new History();
let sentence = new Sentence();

let firsttimeerror = true;
let tmp, previousErrorElement;

function handlekeydown(evt) {
  evt.preventDefault();

  if ( !time.started ) time.start();

  let typedkey = evt.key;
  
  if ( typedkey === 'Tab' ) {
    Elements.inputbox.blur();
    Elements.btn_restart.focus();
  }

  if ( (Misc.charcode(sentence.activeLetterValue) === Misc.charcode(Config.sentence.wordseparator)) && (typedkey === " ") ) {
    
    Caret.removeCaretFrom(sentence.activeLetter);
    Caret.goToNextWord(sentence);

    sentence.resetActiveLetterIndex();
    Caret.addCaretTo(sentence.activeLetter);
    
  } else if (typedkey === sentence.activeLetterValue) {
    
    firsttimeerror = true;
    
    sentence.activeWord.classList.remove('error');
    Caret.goToNextLetter(sentence);
    
    if ( sentence.typed ) {
      time.stop();

      Caret.removeCaretFrom(sentence.activeLetter);
      Caret.removeHighlightFrom(sentence.activeWord);
      
      Elements.inputbox.removeEventListener('keydown', handlekeydown, false);

      Misc.showspeed(sentence, time);
      test.start();
    }
    
  } else if (evt.metaKey && typedkey === "Backspace") {

    Caret.removeCaretFrom(sentence.activeLetter);
    Caret.removeHighlightFrom(sentence.activeWord);

    let i = sentence.totalwords - 1;
    while ( i >= 0 ) {
      sentence.activeWord.classList.remove("error");
      sentence.decrementWordIndex();
      --i;
      if ( sentence.activeWordIndex < 0 ) break;
    }

    sentence.resetActiveWordIndex();
    sentence.resetActiveLetterIndex();
    
    Caret.addHighlightTo(sentence.activeWord);
    Caret.addCaretTo(sentence.activeLetter);
    
  } else if (
    evt.altKey  && typedkey === "Backspace" ||
    evt.ctrlKey && typedkey === "Backspace"
  ) {

    Caret.removeCaretFrom(sentence.activeLetter);
    sentence.activeWord.classList.remove("error");

    if ( sentence.activeWordIndex > 0 && sentence.activeLetterIndex === 0 ) {
      Caret.goToPreviousWord(sentence);
    }

    sentence.activeWord.classList.remove("error");
    sentence.resetActiveLetterIndex();
    Caret.addCaretTo(sentence.activeLetter);

  } else if ( typedkey === "Backspace" ) {

    sentence.activeWord.classList.remove("error");

    if ( sentence.activeLetterIndex > 0 ) {
      Caret.goToPreviousLetter(sentence);
    } else {
      if ( sentence.activeLetterIndex === 0 && sentence.activeWordIndex > 0 ) {
        
        Caret.removeCaretFrom(sentence.activeLetter);
        Caret.goToPreviousWord(sentence);

        sentence.activeLetterIndex = sentence.activeWordLength - 1;
        Caret.addCaretTo(sentence.activeLetter);
      }
    }
    
  } else {

    if (!Constants.invisibles.includes(typedkey)) {

      // this ensures that sentence object returns correct activeLetter
      
      if ( firsttimeerror ) {
        sentence.activeWord.classList.add("error");
        previousErrorElement = errorletter(typedkey);
        sentence.activeLetter.insertAdjacentElement('beforebegin', previousErrorElement);
        firsttimeerror = false;
      } else {
        tmp = errorletter(typedkey);
        previousErrorElement.insertAdjacentElement('afterend', tmp);
        previousErrorElement = tmp;
      }

      sentence.incrementLetterIndex();
    }
  }
}

// 1. first error letter will be inserted before the letter which the user was
//    typing
// 2. after that error letter will be added after previous error letter

function errorletter(typedkey) {

  let letter = document.createElement('letter');

  letter.classList.add(Constants.carettypes[Config.caret]);
  letter.classList.add("extra");

  if ( typedkey == ' ' ) {
    letter.innerHTML = `<span style="padding: 0px 3px;">⸱</span>`;
  } else {
    letter.textContent = typedkey;
  }
  
  return letter;
}

class Test {

  constructor () { }

  start() {
    time.reset();
    sentence.reset();

    Caret.addHighlightTo(sentence.activeWord);
    Caret.addCaretTo(sentence.activeLetter);

    Elements.inputbox.addEventListener('keydown', handlekeydown, false);
    Elements.btn_restart.blur();
    Elements.inputbox.focus();
  }
}

export default Test;
export { time, history, sentence };