import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../../_utils';

import { TableContext } from '../_context';
import { COMPONENTS, CELL_REFS as REFS, REFS as TABLE_REFS } from '../_constants';
import { StyledTableCell, StyledTableCellInner } from '../_style';

function TableCellWithContext(props) {
  const { textAlign, border, children, ...rest } = props;

  return (
    <StyledTableCell {...addDataAttributes({ component: COMPONENTS.CELL })} sBorder={border} {...rest}>
      <StyledTableCellInner sTextAlign={textAlign}>{children}</StyledTableCellInner>
    </StyledTableCell>
  );
}

TableCellWithContext.propTypes = {
  textAlign: PropTypes.oneOf(Object.values(REFS.TEXT_ALIGN)),
  border: PropTypes.oneOf(Object.values(TABLE_REFS.BORDER)),
  children: PropTypes.node,
};

TableCellWithContext.defaultProps = {
  textAlign: null,
  border: null,
  children: null,
};

export default function TableCell(props) {
  return (
    <TableContext.Consumer>{({ border }) => <TableCellWithContext {...props} border={border} />}</TableContext.Consumer>
  );
}

TableCell.propTypes = {
  textAlign: PropTypes.oneOf(Object.values(REFS.TEXT_ALIGN)),
  children: PropTypes.node,
};

TableCell.defaultProps = {
  textAlign: null,
  children: null,
};

TableCell.REFS = REFS;
