import { findDomElement } from '../../helper/findDomElement';
import { audioManager } from '../controller/audioManager';
import { levelCreator } from '../controller/levelManager';
import { levelsVinylArray } from '../controller/levels';
import { checkMarksStyles, progressManager } from '../controller/progressManager';
import { selectorManager } from '../controller/selectorManager';

const help = findDomElement('.game-board__help');
const input = (findDomElement('.editor__input') as HTMLInputElement);

function showHelp() {
  const answer = levelsVinylArray[levelCreator.levelNumber].selectors[0];
  checkMarksStyles[levelCreator.levelNumber] = 'aside__check--help';
  progressManager.isHelp = true;
  let iterationNumber = 1;

  const interval = setInterval(() => {
    input.value = answer.slice(0, iterationNumber++);
    selectorManager.inputView();
    if (input.value[input.value.length - 1] === ' ') {
      audioManager.helpAudio('space');
    } else {
      audioManager.helpAudio();
    }
    if (iterationNumber > answer.length) {
      clearInterval(interval);
      selectorManager.inputListener();
    }
  }, 400);
}

export function startHelpListener() {
  help.addEventListener('click', () => {
    showHelp();
  });
}