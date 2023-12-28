import { findDomElement } from '../../helper/findDomElement';
import { LevelsText } from '../../type/type';
import { LevelsVinyl } from '../../type/type';
import { levelsTextArray } from '../controller/levels';
import { levelsVinylArray } from '../controller/levels';
import 'highlight.js/styles/base16/atelier-sulphurpool.css';
import hljs from 'highlight.js/lib/common';
import { audioManager } from './audioManager';
import { checkMarksStyles } from './progressManager';


class LevelManager {
  levelNumber: number;

  textData: LevelsText[];

  elementData: LevelsVinyl[];

  gameboard: HTMLElement;

  checkMarks: NodeListOf<Element>;

  constructor() {
    this.levelNumber = 0;
    this.textData = levelsTextArray;
    this.elementData = levelsVinylArray;
    this.gameboard = findDomElement('.game-board__player');
    this.checkMarks = document.querySelectorAll('.aside__check');
  }

  insertLevelsText(levelNumber: number) {
    const textConsumers: (keyof LevelsText)[] = ['task', 'gameLayer', 'level', 'name', 'levelsDescription', 'selector', 'selectorDescription', 'examples'];

    textConsumers.forEach((item) => {
      const textConsumer = findDomElement(`#${item}`);
      const text = this.textData[levelNumber];
      textConsumer.innerHTML = text[item];
    });
  }

  insertLevelsVinyl(levelNumber: number) {
    for (let i = 1; i <= this.elementData[levelNumber].vinylQty; i++) {
      const vinylPlace = document.createElement('div');
      vinylPlace.classList.add('vinyl');
      this.gameboard.prepend(vinylPlace);
    }

    const vinylPlaces = document.querySelectorAll('.vinyl');

    this.elementData[levelNumber].vinylStyles.forEach((item, index) => {
      const vinylRecord = document.createElement('div');
      vinylRecord.classList.add('vinyl__record');
      vinylRecord.setAttribute('data-vinyl-table', `${index}`);
      item.split('.').forEach((string) => {
        vinylRecord.classList.add(string);
      });

      if (this.elementData[levelNumber].tooltip[index] !== null) {
        const tooltip = document.createElement('span');
        tooltip.classList.add('tooltip');
        tooltip.innerText = this.elementData[levelNumber].tooltip[index] as string;
        vinylRecord.append(tooltip);
      }

      if (this.elementData[levelNumber].vinyltape[index] !== null) {
        const tape = document.createElement('div');
        tape.classList.add('tape');
        const tapeClasses = this.elementData[levelNumber].vinyltape[index] as string;
        tapeClasses.split('.').forEach((string) => {
          tape.classList.add(string);
        });
        tape.setAttribute('data-tape-table', `${index}`);
        const tooltiptape = document.createElement('span');
        tooltiptape.classList.add('tooltiptape');
        tooltiptape.innerText = this.elementData[levelNumber].tooltiptape[index] as string;
        tape.append(tooltiptape);
        vinylRecord.append(tape);
      }

      vinylPlaces[index].append(vinylRecord);

      document.querySelectorAll('pre code').forEach((el: Element): void => {
        hljs.highlightElement(el as HTMLElement);
        hljs.configure({ ignoreUnescapedHTML: true });
      });
    });

    if (document.querySelector('.modal__vinyl')) {
      findDomElement('.modal__vinyl').remove();
    }

    const vinylModal = document.createElement('div');
    vinylModal.classList.add('modal__vinyl');
    vinylModal.classList.add(this.elementData[levelNumber].modalVinyl);
    findDomElement('.modal__title').after(vinylModal);

    this.clearCheckMarks();
    this.insertCheckMarks();
    findDomElement('.game-board__table').classList.remove('game-board__table--finish');
  }

  insertCheckMarks() {
    const lastLevel = 11;

    this.checkMarks.forEach((item, index) => {
      if (index === lastLevel) {
        item.classList.add(checkMarksStyles[this.levelNumber]);
      } else {
        item.classList.add(checkMarksStyles[index]);
      }
    });

    document.querySelectorAll('.aside__level-link').forEach((item, index) => {
      if (index === this.levelNumber) {
        item.classList.add('aside__level-link--active');
      }
    });
  }

  clearCheckMarks() {
    this.checkMarks.forEach((item) => {
      item.classList.remove('aside__check--done');
      item.classList.remove('aside__check--help');
    });
  }

  clearLevel() {
    findDomElement('.game-board__player').innerHTML = '';
    document.querySelectorAll('.aside__level-link').forEach((item) => {
      item.classList.remove('aside__level-link--active');
    });
  }

  newLevel(level: number) {
    this.clearLevel();
    this.insertLevelsText(level);
    this.insertLevelsVinyl(level);
  }

  finishGame() {
    const vinyls = ['floyd', 'brother2', 'zeppelin', 'journey', 'rainbow', 'skynyrd2', 'mamas', 'shocking', 'jefferson', 'stones', 'sabbath'];

    this.gameboard.innerHTML = '';
    findDomElement('#task').textContent = 'You rock at vinilla CSS.';
    findDomElement('.game-board__table').classList.add('game-board__table--finish');

    vinyls.forEach((item) => {
      const vinylRecord = document.createElement('div');
      vinylRecord.classList.add('vinyl__record');
      vinylRecord.classList.add('vinyl__record--finish');
      vinylRecord.classList.add(item);
      this.gameboard.append(vinylRecord);
    });

    audioManager.endGameAudio();
  }
}

export const levelCreator = new LevelManager();
