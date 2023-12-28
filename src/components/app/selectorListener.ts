import { findDomElement } from '../../helper/findDomElement';
import { selectorManager } from '../controller/selectorManager';

const input = findDomElement('.editor__input');
const button = findDomElement('.editor__btn');

export function startSelectorListener() {
  input.addEventListener('change', () => {
    selectorManager.inputListener();
  });

  button.addEventListener('click', () => {
    selectorManager.inputListener();
  });

  input.addEventListener('input', () => {
    selectorManager.inputView();
  });
}