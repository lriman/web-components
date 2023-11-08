import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { addDataAttributes } from '../../../_utils';

import { COMPONENTS } from '../../_constants';
import {
  StyledTableListTableViewData,
  StyledTableListTableViewSection,
  StyledTableListTableViewSectionTitle,
  StyledTableListTableViewSectionContent,
} from '../../_style';

import TableListTableViewItems from './TableListTableViewItems';

const withDroppable = WrappedComponent => {
  return class extends React.PureComponent {
    static propTypes = {
      isDraggable: PropTypes.bool.isRequired,
      handleOnDragEnd: PropTypes.func.isRequired,
    };

    render() {
      const { isDraggable, handleOnDragEnd } = this.props;
      if (isDraggable) {
        return (
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="TableList">
              {provided => (
                <>
                  <WrappedComponent provided={provided} {...this.props} />
                  {provided.placeholder}
                </>
              )}
            </Droppable>
          </DragDropContext>
        );
      }
      return <WrappedComponent {...this.props} />;
    }
  };
};

function TableListTableViewData(props) {
  const {
    captions,
    data,
    type,
    renderSectionTitle,
    renderRow,
    renderCell,
    colorType,
    isWithoutRowHover,
    isDraggable,
    isScrollable,
    provided,
    ...rest
  } = props;

  return (
    <StyledTableListTableViewData
      {...addDataAttributes({ component: COMPONENTS.DATA })}
      {...provided.droppableProps}
      ref={provided.innerRef}
    >
      {data.map(item => (
        <StyledTableListTableViewSection key={item.id} isWithTitle={!!item.title}>
          {item.title && (
            <StyledTableListTableViewSectionTitle sColorType={colorType}>
              {renderSectionTitle ? renderSectionTitle({ data: item }) : item.title}
            </StyledTableListTableViewSectionTitle>
          )}
          <StyledTableListTableViewSectionContent>
            <TableListTableViewItems
              items={item.items}
              captions={captions}
              renderRow={renderRow}
              renderCell={renderCell}
              colorType={colorType}
              isWithoutRowHover={isWithoutRowHover}
              isDraggable={isDraggable}
              isScrollable={isScrollable}
              type={type}
              {...rest}
            />
          </StyledTableListTableViewSectionContent>
        </StyledTableListTableViewSection>
      ))}
    </StyledTableListTableViewData>
  );
}

TableListTableViewData.propTypes = {
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
  type: PropTypes.string.isRequired,
  colorType: PropTypes.string.isRequired,
  isWithoutRowHover: PropTypes.bool.isRequired,
  renderSectionTitle: PropTypes.func,
  renderRow: PropTypes.func,
  renderCell: PropTypes.func,
  isDraggable: PropTypes.bool.isRequired,
  isScrollable: PropTypes.bool,
  provided: PropTypes.shape(),
};

TableListTableViewData.defaultProps = {
  renderSectionTitle: undefined,
  renderRow: undefined,
  renderCell: undefined,
  provided: {},
  isScrollable: false,
};

export default withDroppable(TableListTableViewData);
