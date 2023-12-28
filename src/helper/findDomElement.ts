export function findDomElement<T extends HTMLElement>(selector: string): T {
  const searchElement = document.querySelector(selector);

  if (searchElement) {
    return searchElement as T;
  } else {
    throw new Error(`Element ${selector} doesn't exist`);
  }
}