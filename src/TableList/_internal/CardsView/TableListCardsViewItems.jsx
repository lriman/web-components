import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../../_utils';

import { Block, Span } from '../../../Typography';

import { COMPONENTS } from '../../_constants';
import {
  StyledTableListCardsViewItems,
  StyledTableListCardsViewItem,
  StyledTableListCardsViewBlock,
  StyledTableListCardsViewBlockCaption,
} from '../../_style';

function TableListCardsViewItem(props) {
  const { captions, item, renderCell, colorType, renderCardItem, ...rest } = props;

  return captions.map(caption =>
    renderCardItem ? (
      renderCardItem({
        dataCaption: caption,
        dataCell: item,
        view: 'cards',
        cell: renderCell ? renderCell({ data: item, caption: caption.id, view: 'cards' }) : item[caption.id],
        ...rest,
      })
    ) : (
      <StyledTableListCardsViewBlock key={caption.id} sWidth={caption.cardsViewWidth || 100} sAlign={caption.align}>
        <Block margin={Block.REFS.MARGIN.XS}>
          <StyledTableListCardsViewBlockCaption sColorType={colorType}>
            <Span size={Span.REFS.SIZES.S}>{caption.title}</Span>
          </StyledTableListCardsViewBlockCaption>
        </Block>
        <Block margin={Block.REFS.MARGIN.XS}>
          {renderCell ? renderCell({ data: item, caption: caption.id, view: 'cards', ...rest }) : item[caption.id]}
        </Block>
      </StyledTableListCardsViewBlock>
    ),
  );
}

TableListCardsViewItem.propTypes = {
  captions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      align: PropTypes.oneOf(['left', 'center', 'right']),
      tableViewWidth: PropTypes.number.isRequired,
      cardsViewWidth: PropTypes.number,
    }),
  ).isRequired,
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  colorType: PropTypes.string.isRequired,
  renderCell: PropTypes.func,
};

TableListCardsViewItem.defaultProps = {
  renderCell: undefined,
};

export default function TableListCardsViewItems(props) {
  const { captions, items, renderRow, renderCell, colorType, renderCardItem, ...rest } = props;

  return (
    <StyledTableListCardsViewItems {...addDataAttributes({ component: COMPONENTS.ITEMS })}>
      {items.map(item => (
        <StyledTableListCardsViewItem key={item.id} sColorType={colorType}>
          {renderRow ? (
            renderRow({
              ...rest,
              id: item.id,
              children: (
                <TableListCardsViewItem
                  key={item.id}
                  item={item}
                  captions={captions}
                  renderCell={renderCell}
                  colorType={colorType}
                  renderCardItem={renderCardItem}
                  {...rest}
                />
              ),
            })
          ) : (
            <TableListCardsViewItem
              key={item.id}
              item={item}
              captions={captions}
              renderCell={renderCell}
              colorType={colorType}
              renderCardItem={renderCardItem}
            />
          )}
        </StyledTableListCardsViewItem>
      ))}
    </StyledTableListCardsViewItems>
  );
}

TableListCardsViewItems.propTypes = {
  captions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      align: PropTypes.oneOf(['left', 'center', 'right']),
      tableViewWidth: PropTypes.number.isRequired,
      cardsViewWidth: PropTypes.number,
    }),
  ).isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  colorType: PropTypes.string.isRequired,
  renderRow: PropTypes.func,
  renderCell: PropTypes.func,
  renderCardItem: PropTypes.func,
};

TableListCardsViewItems.defaultProps = {
  renderRow: undefined,
  renderCell: undefined,
  renderCardItem: undefined,
};
