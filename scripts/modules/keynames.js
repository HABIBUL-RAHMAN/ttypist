/**
 *  KeyboardEvent.isTrusted
 *   	  The isTrusted read-only property of the Event interface is a boolean value
 *   	  that is true when the event was generated by a user action, and false when
 *   	  the event was created or modified by a script or dispatched via 
 *   	  EventTarget.dispatchEvent()
**/ 

// https://www.w3.org/TR/uievents-code/#table-key-code-alphanumeric-writing-system
const keyboardevent = new Map([
  // Alphanumeric
  [`Digit1`, [`1`, `!`]],
  [`Digit2`, [`2`, `@`]],
  [`Digit3`, [`3`, `#`]],
  [`Digit4`, [`4`, `$`]],
  [`Digit5`, [`5`, `%`]],
  [`Digit6`, [`6`, `^`]],
  [`Digit7`, [`7`, `&`]],
  [`Digit8`, [`8`, `*`]],
  [`Digit9`, [`9`, `(`]],
  [`Digit0`, [`0`, `)`]],
  [`Backquote`, ["`", `~`]],
  [`Backslash`, [`\\`, `|`]],
  [`Backspace`, [`Backspace`, `delete`]],
  [`BracketLeft`, [`[`, `{`]],
  [`BracketRight`, [`]`, `}`]],
  [`Minus`, [`-`, `_`]],
  [`Equal`, [`=`, `+`]],
  [`Comma`, [`,`, `<`]],
  [`Period`, [`.`, `>`]],
  [`Quote`, [`'`, `"`]],
  [`Semicolon`, [`;`, `:`]],
  [`Slash`, [`/`, `?`]],
  [`KeyA`, `a`],
  [`KeyB`, `b`],
  [`KeyC`, `c`],
  [`KeyD`, `d`],
  [`KeyE`, `e`],
  [`KeyF`, `f`],
  [`KeyG`, `g`],
  [`KeyH`, `h`],
  [`KeyI`, `i`],
  [`KeyJ`, `j`],
  [`KeyK`, `k`],
  [`KeyL`, `l`],
  [`KeyM`, `m`],
  [`KeyN`, `n`],
  [`KeyO`, `o`],
  [`KeyP`, `p`],
  [`KeyQ`, `q`],
  [`KeyR`, `r`],
  [`KeyS`, `s`],
  [`KeyT`, `t`],
  [`KeyU`, `u`],
  [`KeyV`, `v`],
  [`KeyW`, `w`],
  [`KeyX`, `x`],
  [`KeyY`, `y`],
  [`KeyZ`, `z`],
  [`Tab`, `Tab`],
  [`Space`, ` `],
  [`Enter`, `Enter`],
  [`MetaLeft`, `Meta`],
  [`MetaRight`, `Meta`],
  [`ShiftLeft`, `Shift`],
  [`ShiftRight`, `Shift`],
  [`CapsLock`, `CapsLock`],
  [`ControlLeft`, `Control`],
  [`ControlRight`, `Control`],
  [`AltLeft`, `Alt`],
  [`AltRight`, [`Alt`, `AltGr`]],

  // control pad
  [`Delete`, ``],
  [`End`, ``],
  [`Help`, ``],
  [`Home`, ``],
  [`Insert`, ``],
  [`PageDown`, ``],
  [`PageUp`, ``],

  // arrow pad
  [`ArrowDown`, `ArrowDown`],
  [`ArrowLeft`, `ArrowLeft`],
  [`ArrowRight`, `ArrowRight`],
  [`ArrowUp`, `ArrowUp`],
  [`Escape`, `Escape`],
  
  // keypad/numpad:
  // These gives alternate values if Numpad is locked for event.key & event.code
  [`NumLock`, ``], // On Mac, NumLock is NumpadClear
  [`Numpad0`, [0, `Ins`]],
  [`Numpad1`, [1, `End`]],
  [`Numpad2`, [2, `ArrowDown`]],
  [`Numpad3`, [3, `PgDn`]],
  [`Numpad4`, [4, `ArrowLeft`]],
  [`Numpad5`, [5, `Clear`]], // 'Clear' in windows when Numpad is locked
  [`Numpad6`, [6, `ArrowRight`]],
  [`Numpad7`, [7, `Home`]],
  [`Numpad8`, [8, `ArrowUp`]],
  [`Numpad9`, [9, `PgUp`]],
  [`NumpadDecimal`, [`.`, `Delete`]],

  // These does gives same value for event.key & event.code where Numpad
  // is locked or not.
  [`NumpadAdd`, `+`],
  [`NumpadSubtract`, `-`],
  [`NumpadDivide`, `/`],
  [`NumpadMultiply`, `*`],
  [`NumpadClear`, ``],
  [`NumpadEqual`, `=`],
  [`NumpadEnter`, `Enter`],

  [`F1`, `F1`],
  [`F2`, `F2`],
  [`F3`, `F3`],
  [`F4`, `F4`],
  [`F5`, `F5`],
  [`F6`, `F6`],
  [`F7`, `F7`],
  [`F8`, `F8`],
  [`F9`, `F9`],
  [`F10`, `F10`],
  [`F11`, `F11`],
  [`F12`, `F12`],
]);