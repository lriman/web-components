import PropTypes from 'prop-types';

import { TYPES, REFS } from './_constants';
import Map from './_map';

/** @component */
export default function Geometric(props) {
  return Map[props.type]({
    color: props.color,
  });
}

Geometric.propTypes = {
  type: PropTypes.oneOf(Object.values(TYPES)).isRequired,
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
};

Geometric.REFS = { TYPES, ...REFS };
