import { findDomElement } from '../../helper/findDomElement';
import { progressManager } from '../controller/progressManager';

const asideBurger = findDomElement('.aside__burger');
const headerBurger = findDomElement('.header__burger');
const aside = findDomElement('.aside');
const menu = findDomElement('.aside__menu');
const levels = document.querySelectorAll('.aside__level-link');
const asideBtn = findDomElement('.aside__button');
const overlay = findDomElement('.overlay');

function toggleBurger() {
  asideBurger.classList.toggle('burger--active');
  menu.classList.toggle('aside__menu--active');
}

function removeSelectLevel() {
  levels.forEach((item) => {
    item.classList.remove('aside__level-link--active');
  });
}

function selectLevel(item:Element, index: number) {
  removeSelectLevel();
  item.classList.toggle('aside__level-link--active');
  toggleBurger();
  progressManager.changeLevel(index);
}

function openAsideMenu() {
  aside.classList.add('aside--active');
  headerBurger.classList.add('header__burger--hide');
  overlay.classList.add('overlay--active');
}

function closeAsideMenu() {
  headerBurger.classList.remove('header__burger--hide');
  overlay.classList.remove('overlay--active');
  aside.classList.remove('aside--active');
}

export function startAsideListener() {
  asideBurger.addEventListener('click', () => {
    toggleBurger();
  });

  levels.forEach((item, index) => {
    item.addEventListener('click', () => {
      selectLevel(item, index);
    });

    headerBurger.addEventListener('click', () => {
      openAsideMenu();
    });
  });

  asideBtn.addEventListener('click', () => {
    progressManager.resetProgress();
  });

  overlay.addEventListener('click', () => {
    if (document.querySelector('.aside--active')) {
      closeAsideMenu();
    }
  });
}