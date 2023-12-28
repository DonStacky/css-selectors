import { findDomElement } from '../../helper/findDomElement';
import { audioManager } from '../controller/audioManager';

class VolumeListener {
  input: HTMLInputElement;

  constructor() {
    this.input = findDomElement('.game-board__volume');
  }

  startVolumeListener() {
    this.input.addEventListener('change', () => {
      audioManager.startAudio();
    }, { once: true });

    this.input.addEventListener('change', () => {
      audioManager.changeVolume(Number(this.input.value));
    });
  }
}

export const volumeListener = new VolumeListener;