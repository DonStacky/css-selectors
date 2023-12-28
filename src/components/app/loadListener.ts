import { findDomElement } from '../../helper/findDomElement';
import { audioManager } from '../controller/audioManager';
import { levelCreator } from '../controller/levelManager';
import { checkMarksStyles, progressManager } from '../controller/progressManager';

const progress = 'progressRSG';
const currentLevel = 'currentLevelRSG';
const volume = 'volumeRSG';

function setLocalStorage() {
  localStorage.setItem(progress, checkMarksStyles.join('.'));
  localStorage.setItem(currentLevel, String(levelCreator.levelNumber));
  localStorage.setItem(volume, String(audioManager.volume));
}

function getLocalStorage() {
  if (localStorage.getItem(progress)) {
    const localString = localStorage.getItem(progress) as string;
    progressManager.setCheckMarkStyles(localString);
  }

  if (localStorage.getItem(currentLevel)) {
    const localString = localStorage.getItem(currentLevel) as string;
    levelCreator.levelNumber = +localString;
  }

  if (localStorage.getItem(volume)) {
    const localString = localStorage.getItem(volume) as string;
    audioManager.setVolume(+localString);
    (findDomElement('.game-board__volume') as HTMLInputElement).value = String(+localString * 100);
  }

  levelCreator.clearLevel();
  levelCreator.insertLevelsText(levelCreator.levelNumber);
  levelCreator.insertLevelsVinyl(levelCreator.levelNumber);
}

export function startLoadListener() {
  window.addEventListener('beforeunload', setLocalStorage);
  window.addEventListener('DOMContentLoaded', getLocalStorage);
}