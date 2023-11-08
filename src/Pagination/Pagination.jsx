import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../_utils';
import { Block, Span } from '../Typography';

import PaginationItem from './_internal/PaginationItem';

import { getPages } from './_utils';
import { COMPONENTS } from './_constants';
import { StyledPagination, StyledPaginationInner } from './_style';

export default function Pagination(props) {
  const { active, title, total, limit, pageNeighbours, showPageItems, onChange } = props;

  const totalPages = useMemo(() => Math.ceil(total / limit), [total, limit]);
  const pages = useMemo(() => getPages(totalPages, active, pageNeighbours, limit, total), [
    totalPages,
    active,
    pageNeighbours,
    limit,
    total,
  ]);

  return (
    <StyledPagination {...addDataAttributes({ component: COMPONENTS.GENERAL })}>
      {title && (
        <Block>
          <Span>{title}</Span>
        </Block>
      )}
      <StyledPaginationInner>
        {pages.map(item => (
          <PaginationItem key={item.id} item={item} active={active} showPageItems={showPageItems} onChange={onChange} />
        ))}
      </StyledPaginationInner>
    </StyledPagination>
  );
}

Pagination.propTypes = {
  active: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  title: PropTypes.string,
  limit: PropTypes.number,
  pageNeighbours: PropTypes.number,
  showPageItems: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  title: null,
  limit: 20,
  pageNeighbours: 1,
  showPageItems: false,
};
