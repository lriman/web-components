import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';

import { TableContext } from './_context';
import { COMPONENTS, REFS } from './_constants';
import { StyledTable, StyledTableBody, StyledTableInner } from './_style';

import TableRow from './_internal/TableRow';
import TableCell from './_internal/TableCell';

export default function Table(props) {
  const { size, spacing, removeSideSpacing, border, children, ...rest } = props;

  return (
    <StyledTable
      {...addDataAttributes({ component: COMPONENTS.GENERAL, size })}
      sSize={size}
      sSpacing={spacing}
      isRemoveSideSpacing={removeSideSpacing}
      {...rest}
    >
      <StyledTableInner sBorder={border}>
        <StyledTableBody>
          <TableContext.Provider value={{ border }}>{children}</TableContext.Provider>
        </StyledTableBody>
      </StyledTableInner>
    </StyledTable>
  );
}

Table.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  spacing: PropTypes.oneOf(Object.values(REFS.SPACING)),
  removeSideSpacing: PropTypes.bool,
  border: PropTypes.oneOf(Object.values(REFS.BORDER)),
  children: PropTypes.node.isRequired,
};

Table.defaultProps = {
  size: null,
  spacing: REFS.SPACING.M,
  removeSideSpacing: false,
  border: null,
};

Table.REFS = REFS;

Table.Row = TableRow;
Table.Cell = TableCell;
