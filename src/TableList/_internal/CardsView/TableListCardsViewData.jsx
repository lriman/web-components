import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../../_utils';

import { COMPONENTS } from '../../_constants';
import {
  StyledTableListCardsViewData,
  StyledTableListCardsViewSection,
  StyledTableListCardsViewSectionTitle,
  StyledTableListCardsViewSectionContent,
} from '../../_style';

import TableListCardsViewItems from './TableListCardsViewItems';

export default function TableListCardsViewData(props) {
  const { captions, data, renderSectionTitle, renderRow, renderCell, colorType, renderCardItem, ...rest } = props;

  return (
    <StyledTableListCardsViewData {...addDataAttributes({ component: COMPONENTS.DATA })}>
      {data.map(item => (
        <StyledTableListCardsViewSection key={item.id}>
          {item.title && (
            <StyledTableListCardsViewSectionTitle sColorType={colorType}>
              {renderSectionTitle ? renderSectionTitle({ data: item }) : item.title}
            </StyledTableListCardsViewSectionTitle>
          )}
          <StyledTableListCardsViewSectionContent>
            <TableListCardsViewItems
              items={item.items}
              captions={captions}
              renderRow={renderRow}
              renderCell={renderCell}
              colorType={colorType}
              renderCardItem={renderCardItem}
              {...rest}
            />
          </StyledTableListCardsViewSectionContent>
        </StyledTableListCardsViewSection>
      ))}
    </StyledTableListCardsViewData>
  );
}

TableListCardsViewData.propTypes = {
  captions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      align: PropTypes.oneOf(['left', 'center', 'right']),
      tableViewWidth: PropTypes.number.isRequired,
      cardsViewWidth: PropTypes.number,
    }),
  ).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
        }),
      ).isRequired,
    }),
  ).isRequired,
  colorType: PropTypes.string.isRequired,
  renderSectionTitle: PropTypes.func,
  renderRow: PropTypes.func,
  renderCell: PropTypes.func,
  renderCardItem: PropTypes.func,
};

TableListCardsViewData.defaultProps = {
  renderSectionTitle: undefined,
  renderRow: undefined,
  renderCell: undefined,
  renderCardItem: undefined,
};
