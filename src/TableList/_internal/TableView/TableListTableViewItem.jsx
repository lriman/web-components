import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';

import { StyledTableListTableViewRow, StyledTableListTableViewCell } from '../../_style';

const withDraggable = WrappedComponent => {
  return class extends React.PureComponent {
    static propTypes = {
      isDraggable: PropTypes.bool.isRequired,
      item: PropTypes.shape().isRequired,
      index: PropTypes.number.isRequired,
      isDragDisabled: PropTypes.bool,
    };

    static defaultProps = {
      isDragDisabled: false,
    };

    render() {
      const { isDraggable, item, index, isDragDisabled } = this.props;
      if (isDraggable) {
        return (
          <Draggable key={item.id} draggableId={item.id} index={index} isDragDisabled={isDragDisabled}>
            {provided => <WrappedComponent provided={provided} {...this.props} />}
          </Draggable>
        );
      }
      return <WrappedComponent {...this.props} />;
    }
  };
};

function TableListTableViewItem(props) {
  const {
    captions,
    item,
    type,
    index,
    lastIndex,
    renderCell,
    colorType,
    isWithoutRowHover,
    provided,
    isScrollable,
    ...rest
  } = props;

  return (
    <StyledTableListTableViewRow
      key={item.id}
      sColorType={colorType}
      sType={type}
      isFirst={index === 0}
      isLast={index === lastIndex}
      isWithoutRowHover={isWithoutRowHover}
      isScrollable={isScrollable}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      {captions.map((caption, i) => (
        <StyledTableListTableViewCell
          key={caption.id}
          sWidth={caption.tableViewWidth}
          sMinWidth={caption.tableViewMinWidth}
          sJustify={caption.justify}
          cellPadding={caption.cellPadding}
          isWithoutBorder={caption.isWithoutBorder}
          sColorType={colorType}
          sType={type}
          isLast={i === captions.length - 1}
        >
          {renderCell ? renderCell({ data: item, caption: caption.id, view: 'table', ...rest }) : item[caption.id]}
        </StyledTableListTableViewCell>
      ))}
    </StyledTableListTableViewRow>
  );
}

TableListTableViewItem.propTypes = {
  captions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      align: PropTypes.oneOf(['left', 'center', 'right']),
      tableViewWidth: PropTypes.number.isRequired,
      tableViewMinWidth: PropTypes.number,
      cardsViewWidth: PropTypes.number,
    }),
  ).isRequired,
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  type: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  lastIndex: PropTypes.number.isRequired,
  colorType: PropTypes.string.isRequired,
  isWithoutRowHover: PropTypes.bool.isRequired,
  isScrollable: PropTypes.bool,
  renderCell: PropTypes.func,
  provided: PropTypes.shape(),
};

TableListTableViewItem.defaultProps = {
  renderCell: undefined,
  provided: {},
  isScrollable: false,
};

export default withDraggable(TableListTableViewItem);
