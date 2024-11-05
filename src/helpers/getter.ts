import { validateElements, validateText } from './validator';

export const getElements = (selector: string): NodeListOf<Element> => {
  const elements = document.querySelectorAll(selector);
  validateElements(elements);

  return elements;
};

export const getElementAttr = (
  element: Element,
  customAttr: string,
): string => {
  return validateText(customAttr);
};
