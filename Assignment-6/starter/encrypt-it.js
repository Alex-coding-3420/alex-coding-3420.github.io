/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.

    console.log("Window loaded!");
    const encryptBtn = document.getElementById("encrypt-it");
    encryptBtn.addEventListener("click", handleClick);
  }

  function handleClick(){
    console.log("Button clicked!");
    const inputElement = document.getElementById("input-text");
    const inputText = inputElement.value;

    const encryptedText = shiftCipher(inputText);


    const resultElement = document.getElementById("result");
    resultElement.textContent = encryptedText;
  }

  function shiftCipher(text) {
    const lowercaseText = text.toLowerCase();
    let result = "";
    for (let i = 0; i < lowercaseText.length; i++) {
      const letter = lowercaseText[i];
      if (letter < 'a' || letter > 'z') {
        result += letter;
      } else if (letter === 'z') {
        result += 'a';
      } else { // letter is between 'a' and 'y'
        const shiftedCharCode = letter.charCodeAt(0) + 1;
        const shiftedLetter = String.fromCharCode(shiftedCharCode);
        result += shiftedLetter;
      }
    }
    return result;
  }


  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

})();

