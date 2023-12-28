import { levelCreator } from './levelManager';
import { findDomElement } from '../../helper/findDomElement';

export let checkMarksStyles = ['aside__check', 'aside__check', 'aside__check', 'aside__check', 'aside__check', 'aside__check', 'aside__check', 'aside__check', 'aside__check', 'aside__check', 'aside__check'];

class ProgressManager {
  gameboardPlayer: HTMLElement;

  gameboardTable: HTMLElement;

  isHelp: boolean;

  constructor() {
    this.gameboardPlayer = findDomElement('.game-board__player');
    this.gameboardTable = findDomElement('.game-board__table');
    this.isHelp = false;
  }

  changeLevel(index: number) {
    levelCreator.levelNumber = index;
    this.gameboardPlayer.classList.add('game-board__player--change');
    this.gameboardTable.classList.add('game-board__table--change');

    setTimeout(() => {
      levelCreator.newLevel(index);
    }, 1000);

    setTimeout(() => {
      this.gameboardPlayer.classList.remove('game-board__player--change');
      this.gameboardTable.classList.remove('game-board__table--change');
    }, 2000);
  }

  addProgressMark() {
    if (this.isHelp === false) {
      checkMarksStyles[levelCreator.levelNumber] = 'aside__check--done';
    } else {
      this.isHelp = false;
    }
  }


  resetProgress() {
    checkMarksStyles = ['aside__check', 'aside__check', 'aside__check', 'aside__check', 'aside__check', 'aside__check', 'aside__check', 'aside__check', 'aside__check', 'aside__check', 'aside__check'];
    levelCreator.levelNumber = 0;
    localStorage.clear();
    levelCreator.clearLevel();
    levelCreator.insertLevelsText(levelCreator.levelNumber);
    levelCreator.insertLevelsVinyl(levelCreator.levelNumber);
  }

  setCheckMarkStyles(localString: string) {
    checkMarksStyles = localString.split('.');
  }
}

export const progressManager = new ProgressManager;