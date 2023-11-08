import { FIELD_INPUT_TYPES, STYLES } from './_constants';

export function getFieldWidth(width) {
  if (typeof width === 'number') return `${width}px`;
  return width || '100%';
}

export function getFieldAlign(align) {
  return STYLES.FIELD_ALIGN[align];
}

export function prepareFieldChildrenWithContext(children, props) {
  let result = children;
  if (children.type && FIELD_INPUT_TYPES.includes(children.type.inputType)) {
    result = { ...result, props: { ...result.props, ...props } };
  }
  return result;
}
