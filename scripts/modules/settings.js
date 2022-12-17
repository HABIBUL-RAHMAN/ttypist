import Config from "./config.js";
import { test } from "../main.js";
import * as Elements from "./elements.js";
import * as Constants from "./constants.js"
import { time, history, sentence } from "./test.js";

function updateCaretType(evt) {
  evt.preventDefault();

  let clickedcaret = this;

  if (clickedcaret.title === Config.caret) return;

  for (let caret of Elements.allcarettype) {
    if (clickedcaret !== caret) {
      caret.style.backgroundColor = "var(--settings-caret__bg)";
      if (caret === Elements.offtype) {
        Elements.offtype_icon.style.color = "#6b6b6b";
      }
    }
  }

  if (clickedcaret === Elements.offtype) {
    Elements.offtype_icon.style.color = "#ff0000";
    Elements.offtype.style.backgroundColor = "#ffeaea";
  } else {
    clickedcaret.style.backgroundColor = "var(--settings-caret__bg-active)";
  }

  const lastcaret = Config.caret; // previous caret type

  Config.caret = clickedcaret.title; // current caret type

  Array.from(document.getElementsByTagName("letter")).forEach(function (letter) {
    letter.classList.remove(Constants.carettypes[lastcaret]);
    sentence.removeCaretFromActiveLetter();

    letter.classList.add(Constants.carettypes[Config.caret]);
    sentence.addCaretToActiveLetter();

    Elements.inputbox.focus();
  });
}

Elements.offtype.addEventListener      ("click", updateCaretType);
Elements.boxtype.addEventListener      ("click", updateCaretType);
Elements.linetype.addEventListener     ("click", updateCaretType);
Elements.blocktype.addEventListener    ("click", updateCaretType);
Elements.underlinetype.addEventListener("click", updateCaretType);

Elements.inputbox.addEventListener("focus",     (evt) => { evt.preventDefault(); Config.typing = true;  });
Elements.inputbox.addEventListener("focusout",  (evt) => { evt.preventDefault(); Config.typing = false; });

Elements.btn_restart.addEventListener('click', (evt) => {
  evt.preventDefault();
  test.start();
});

Elements.btn_restart.addEventListener('focus', (evt) => { 
  Elements.btn_restart.style.border = "1px solid lightgray"
  Elements.btn_restart_icon.style.color = "black"
});

Elements.btn_restart.addEventListener('focusout', (evt) => { 
  Elements.btn_restart.style.border = ""
  Elements.btn_restart_icon.style.color = "#6b6b6b"
});