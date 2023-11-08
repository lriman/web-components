import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { addDataAttributes } from '../_utils';

import { COMPONENTS } from './_constants';
import { StyledSortableList } from './_style';

import SortableListItem from './_internal/SortableListItem';

export default function SortableList(props) {
  const { id, children, handleOnDragEnd } = props;

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId={id}>
        {provided => (
          <>
            <StyledSortableList
              {...addDataAttributes({ component: COMPONENTS.GENERAL })}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {children}
            </StyledSortableList>
            {provided.placeholder}
          </>
        )}
      </Droppable>
    </DragDropContext>
  );
}

SortableList.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  handleOnDragEnd: PropTypes.func.isRequired,
};

SortableList.Item = SortableListItem;
