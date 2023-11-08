import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../../Button';
import { Span } from '../../../Typography';
import { IconArrowLeft, IconArrowRight } from '../../../Icon';

import { StyledTableListPagination } from '../../_style';

const TableListPagination = ({ labels, pagination, setPagination }) => {
  if (!pagination || pagination.total <= pagination.limit) return null;

  const { offset, limit, total } = pagination;

  const onPaginate = ({ id }) => {
    if (id === 'prevPage' && offset > 0) setPagination({ ...pagination, offset: offset - limit });
    if (id === 'nextPage' && offset + limit < total) setPagination({ ...pagination, offset: offset + limit });
  };

  const end = offset + limit;

  return (
    <StyledTableListPagination>
      <Span style={{ marginRight: '16px' }}>
        {offset + 1} - {end > total ? total : end} {labels?.of} {total}
      </Span>
      <Button id="prevPage" size="s" disabled={offset === 0} onClick={onPaginate}>
        <IconArrowLeft />
      </Button>
      <Button id="nextPage" size="s" disabled={end >= total} onClick={onPaginate}>
        <IconArrowRight />
      </Button>
    </StyledTableListPagination>
  );
};

TableListPagination.propTypes = {
  labels: PropTypes.shape(),
  pagination: PropTypes.shape(),
  setPagination: PropTypes.func,
};

TableListPagination.defaultProps = {
  labels: undefined,
  pagination: undefined,
  setPagination: undefined,
};

export default TableListPagination;
