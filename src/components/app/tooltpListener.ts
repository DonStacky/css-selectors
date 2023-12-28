import { findDomElement } from '../../helper/findDomElement';
import { TooltipManager } from '../controller/tooltipManager';

class TooltipListener {
  gameLayer: HTMLElement;

  gameBoard: HTMLElement;

  constructor() {
    this.gameLayer = findDomElement('#gameLayer');
    this.gameBoard = findDomElement('.game-board__player');
  }

  startTooltipListener() {
    const tooltipManager = new TooltipManager();

    this.gameBoard.addEventListener('mouseover', (event) => tooltipManager.listenGameboard(event));
    this.gameLayer.addEventListener('mouseover', (event) => tooltipManager.listenGameLayer(event));
  }
}

export const tooltipListener = new TooltipListener();

