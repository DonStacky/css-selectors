import { levelCreator } from '../controller/levelManager';
import { tooltipListener } from './tooltpListener';
import { volumeListener } from './volumeListener';
import { startSelectorListener } from './selectorListener';
import { startAsideListener } from './burgerListener';
import { startHelpListener } from './helpListener';
import { startLoadListener } from './loadListener';

export class App {
  createView() {
    levelCreator.insertLevelsText(levelCreator.levelNumber);
    levelCreator.insertLevelsVinyl(levelCreator.levelNumber);
  }

  addListeners() {
    tooltipListener.startTooltipListener();
    volumeListener.startVolumeListener();
    startSelectorListener();
    startAsideListener();
    startHelpListener();
    startLoadListener();
  }
}