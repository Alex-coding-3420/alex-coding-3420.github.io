'use strict';

class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];

    if (this.isDeleting) {
      this.#deleteCharacter(fullTxt);
    } else {
      this.#addCharacter(fullTxt);
    }

    // Initial Type Speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      this.#completeWord();
      typeSpeed = this.wait;
    } else if (this.isDeleting && this.txt === '') {
      this.#moveToNextWord();
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }

  #deleteCharacter(fullTxt) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    this.#updateTextElement();
  }

  #addCharacter(fullTxt) {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    this.#updateTextElement(fullTxt);
  }

  #updateTextElement() {
    this.#clearTextElement();
    const textContent = this.#getTextContent();
    const ch = this.txt.charAt(this.txt.length - 1);

    const textSpan = this.#createTextSpan(textContent);

    if (ch === '/') {
      const colorSpan = this.#createColorSpan(ch);
      this.txtElement.appendChild(textSpan);
      this.txtElement.appendChild(colorSpan);
    } else {
      this.txtElement.appendChild(textSpan);
    }
  }

  #clearTextElement() {
    while (this.txtElement.firstChild) {
      this.txtElement.removeChild(this.txtElement.firstChild);
    }
  }

  #getTextContent() {
    let textContent = this.txt;
    const ch = this.txt.charAt(this.txt.length - 1);
    if (ch === '/') {
      textContent = this.txt.substring(0, this.txt.length - 1);
    }
    return textContent;
  }

  #createTextSpan(textContent) {
    const textSpan = document.createElement('span');
    textSpan.classList.add('txt');
    textSpan.textContent = textContent;
    return textSpan;
  }

  #createColorSpan(ch) {
    const colorSpan = document.createElement('span');
    colorSpan.style.color = '#343a40';
    colorSpan.textContent = ch;
    return colorSpan;
  }

  #completeWord() {
    this.isDeleting = true;
  }

  #moveToNextWord() {
    this.isDeleting = false;
    this.wordIndex++;
  }
}

// Init On DOM Load

// Init App
function init() {
  const txtElement = document.querySelector('.home__secondary--type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  setTimeout(() => new TypeWriter(txtElement, words, wait), 5000);
}
document.addEventListener('DOMContentLoaded', init);
