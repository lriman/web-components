import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../../_utils';

import { COMPONENTS, ROW_REFS as REFS } from '../_constants';
import { StyledTableRow } from '../_style';

export default function TableRow(props) {
  const { verticalAlign, children, ...rest } = props;

  return (
    <StyledTableRow {...addDataAttributes({ component: COMPONENTS.ROW })} sVerticalAlign={verticalAlign} {...rest}>
      {children}
    </StyledTableRow>
  );
}

TableRow.propTypes = {
  verticalAlign: PropTypes.oneOf(Object.values(REFS.VERTICAL_ALIGN)),
  children: PropTypes.node.isRequired,
};

TableRow.defaultProps = {
  verticalAlign: null,
};

TableRow.REFS = REFS;
