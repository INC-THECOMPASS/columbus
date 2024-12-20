import { getElementAttr, getElements } from '../../services/getter';
import { validateAttr, validateText } from '../../services/validator';
import { onEvent } from '../../services/lifecycleManager';

const commaizeNumber = () => {
  const customAttr = 'tc-format-number';
  const attrValue = 'comma';

  const elements = getElements(`[${customAttr}]`);

  elements.forEach((elem: Element) => {
    const attr = getElementAttr(elem, customAttr);

    if (validateAttr(attr, attrValue)) {
      const hasText = validateText(elem.textContent);
      const number = parseInt(hasText, 10);

      if (!Number.isNaN(number)) {
        elem.textContent = number.toLocaleString('ko-KR');
      }
    }
  });
};

onEvent('DOMContentLoaded', commaizeNumber);

export default commaizeNumber;
