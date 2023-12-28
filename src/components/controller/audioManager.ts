import title from '../../assets/audio/Angelo_Badalamenti_Twin_Peaks.mp3';
import level1 from '../../assets/audio/Pink Floyd - Hey you.mp3';
import level2 from '../../assets/audio/Janis Joplin - Big Brother & The Holding Co - Summertime.mp3';
import level3 from '../../assets/audio/Led Zeppelin - Immigrant Song.mp3';
import level4 from '../../assets/audio/Journey - Wheel In The Sky.mp3';
import level5 from '../../assets/audio/Rainbow Eyes.mp3';
import level6 from '../../assets/audio/Lynyrd Skynyrd - Simple Man.mp3';
import level8 from '../../assets/audio/The Mamas And Papas - Make Your Own Kind Of Music.mp3';
import level7 from '../../assets/audio/Shocking Blue - Long And Lonesome Road (1969).mp3';
import level9 from '../../assets/audio/Jefferson Airplane - White Rabbit.mp3';
import level10 from '../../assets/audio/The Rolling Stones - Paint It, Black.mp3';
import level11 from '../../assets/audio/Black Sabbath - War Pigs.mp3';
import key from '../../assets/audio/knopka.mp3';
import space from '../../assets/audio/space.mp3';
import { levelCreator } from './levelManager';

const playlist = [level1, level2, level3, level4, level5,
  level6, level7, level8, level9, level10, level11];

class AudioManager {
  titleTheme: HTMLAudioElement;

  key: HTMLAudioElement;

  space: HTMLAudioElement;

  volume: number;

  modalAudio: HTMLAudioElement;

  constructor() {
    this.titleTheme = new Audio(title);
    this.key = new Audio(key);
    this.space = new Audio(space);
    this.volume = 0.1;
    this.modalAudio = new Audio(playlist[0]);
  }

  changeVolume(value: number) {
    const newVolume = value / 100;
    this.setVolume(newVolume);
  }

  setVolume(volume: number) {
    this.volume = volume;
    this.titleTheme.volume = volume;
  }

  startAudio() {
    this.titleTheme.play();
    this.titleTheme.volume = 0.1;
    this.titleTheme.loop = true;
  }

  changeAudio(index = levelCreator.levelNumber) {
    this.titleTheme.pause();
    this.modalAudio = new Audio(playlist[index]);
    this.modalAudio.play();
    this.modalAudio.volume = this.volume;
  }

  stopModalAudio() {
    this.modalAudio.pause();
    this.titleTheme.play();
  }

  helpAudio(sound = 'key') {
    if (sound === 'space') {
      this.space.play();
      this.space.volume = this.volume;
    } else {
      this.key.play();
      this.key.volume = this.volume;
    }
  }

  endGameAudio() {
    document.querySelectorAll('.vinyl__record--finish').forEach((item, index) => {
      item.addEventListener('mouseover', () => {
        this.changeAudio(index);
      });

      item.addEventListener('mouseout', () => {
        this.stopModalAudio();
      });
    });
  }
}

export const audioManager = new AudioManager;