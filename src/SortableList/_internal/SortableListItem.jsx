import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';

import { StyledSortableListItem } from '../_style';
import { addDataAttributes } from '../../_utils';
import { COMPONENTS } from '../_constants';

export default function SortableListItem(props) {
  const { id, index, children } = props;

  return (
    <Draggable key={id} draggableId={id} index={index}>
      {provided => (
        <StyledSortableListItem
          {...addDataAttributes({ component: COMPONENTS.ITEM })}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {children}
        </StyledSortableListItem>
      )}
    </Draggable>
  );
}

SortableListItem.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

SortableListItem.Item = SortableListItem;
