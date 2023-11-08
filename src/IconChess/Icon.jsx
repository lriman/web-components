import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import Map from './_map';

/** @component */
export default function Icon(props) {
  return Map[props.type]({
    size: props.size,
    display: props.display,
    color: props.color,
  });
}

Icon.propTypes = {
  type: PropTypes.oneOf(Object.values(TYPES)).isRequired,
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  color: PropTypes.string,
};

Icon.REFS = { TYPES, ...REFS };
