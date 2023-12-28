export interface ElementCreatorParam {
  tag: string,
  classNames: string[],
  textContent: string,
  callback: ((event: Event) => void) | null
}

export interface LevelsText {
  task: string,
  gameLayer: string,
  level: string,
  name: string,
  selector: string,
  selectorDescription: string,
  levelsDescription: string,
  examples: string
}

export interface LevelsVinyl {
  vinylQty: number,
  vinylStyles: string[],
  vinyltape: (string | null)[],
  tooltip: (string | null)[],
  tooltiptape: (string | null)[],
  selectors: string[],
  modalVinyl: string,
}