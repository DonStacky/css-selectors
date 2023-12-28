import { levelsVinylArray } from './levels';
import { findDomElement } from '../../helper/findDomElement';
import { audioManager } from './audioManager';
import { levelCreator } from './levelManager';
import { progressManager } from './progressManager';

class SelectorManager {
  modal: HTMLElement;

  gameBoard: HTMLElement;

  overlay: HTMLElement;

  input: HTMLInputElement;

  button: HTMLButtonElement;

  constructor() {
    this.modal = findDomElement('.modal');
    this.overlay = findDomElement('.overlay');
    this.gameBoard = findDomElement('.game-board__player');
    this.input = findDomElement('.editor__input');
    this.button = findDomElement('.modal__btn');
  }

  inputListener() {
    const level = levelCreator.levelNumber;

    if (levelsVinylArray[level].selectors.includes(this.input.value)) {
      this.openModal();
      progressManager.addProgressMark();
      this.button.addEventListener('click', () => {
        findDomElement('.editor__view').innerHTML = '';
        this.closeModal();
        this.changeLevel();
      }, { once: true });
    } else {
      const selected = document.querySelectorAll('.selected');
      if (selected) {
        selected.forEach((item) => {
          item.classList.add('wrong-selector');
        });
        setTimeout(() => {
          selected.forEach((item) => {
            item.classList.remove('wrong-selector');
          });
        }, 1000);
      }
    }
  }

  inputView() {
    const matchesArray = Array.from(this.input.value.matchAll(/[.# /[]/g));
    let firstIndex = 0;
    let lastIndex;
    const selectorsArray = [];
    let resultString = '';

    for (let i = 0; i <= matchesArray.length; i++) {
      if (matchesArray[i]) {
        lastIndex = matchesArray[i].index;
        selectorsArray.push(this.input.value.slice(firstIndex, lastIndex));
        firstIndex = (lastIndex as number);
      } else {
        selectorsArray.push(this.input.value.slice(firstIndex));
      }
    }

    for (const item of selectorsArray) {
      if (item[0] === '.') {
        resultString += `<span class="editor__view--class">${item}</span>`;
      } else if (item[0] === '#') {
        resultString += `<span class="editor__view--id">${item}</span>`;
      } else if (item[0] === '[') {
        resultString += `<span class="editor__view--attr">${item}</span>`;
      } else {
        resultString += `<span class="editor__view--tag">${item}</span>`;
      }
    }

    findDomElement('.editor__view').innerHTML = resultString;
  }

  closeModal() {
    this.modal.classList.remove('modal--active');
    this.overlay.classList.remove('overlay--active');
    audioManager.stopModalAudio();
  }

  changeLevel() {
    this.input.value = '';
    if (levelCreator.levelNumber === 10) {
      levelCreator.finishGame();
    } else {
      progressManager.changeLevel(levelCreator.levelNumber + 1);
    }
  }

  openModal() {
    this.modal.classList.add('modal--active');
    this.overlay.classList.add('overlay--active');
    this.button.focus();
    audioManager.changeAudio();
  }
}

export const selectorManager = new SelectorManager();
