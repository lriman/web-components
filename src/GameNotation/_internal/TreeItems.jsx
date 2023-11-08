import React from 'react';
import PropTypes from 'prop-types';

import Grid, { Item } from '../../Grid';
import { Span } from '../../Typography';
import { IconClose } from '../../Icon';

import GameNotationMove from './GameNotationMove';

import { COMPONENTS } from '../_constants';
import { getTreeKey } from '../_utils';
import { addDataAttributes } from '../../_utils';
import {
  StyledGameNotationTreeLink,
  StyledGameNotationTree,
  StyledGameNotationTreeLine,
  StyledGameNotationTreeLineRemove,
} from '../_style';

export const getViewData = (item, active, settings, colorType, onChangeMove) => {
  if (!item) return null;
  if (item.san === '...') return item.san;

  return (
    <StyledGameNotationTreeLink
      id={`notation_${item.moveIdString}`}
      isActive={item.moveIdString === active}
      sMargin={item.color === 'b' && '0 10px 0 0'}
      sColorType={colorType}
      onClick={() => onChangeMove(item)}
    >
      <GameNotationMove data={item} gameSettings={settings} />
    </StyledGameNotationTreeLink>
  );
};

export const getItems = (index, item, active, settings, colorType, onChangeMove, onRemoveLine) => {
  if (!item) return null;

  return (
    !!item.items?.length &&
    item.items.map((line, k) => {
      return (
        <StyledGameNotationTreeLine key={getTreeKey(line, k)}>
          <StyledGameNotationTreeLineRemove sIndex={index} onClick={() => onRemoveLine({ line })}>
            <IconClose size="s" />
          </StyledGameNotationTreeLineRemove>
          <Grid noWrap>
            <Item>
              <Span size="s" color="accent1">{`${String.fromCharCode(97 + k)}) `}</Span>
            </Item>
            <Item grow>
              {!!line.length &&
                line.map((val, i) => (
                  <React.Fragment key={val[0]?.moveIdString || i}>
                    <Span size="s" color={colorType === 'normal' ? 'accent1' : 'minor'}>
                      {`${val[0]?.moveNum}.`}
                    </Span>
                    {val[0] && getViewData(val[0], active, settings, colorType, onChangeMove)}
                    {val[1] && getViewData(val[1], active, settings, colorType, onChangeMove)}
                    {val[0] &&
                      val[0].items &&
                      getItems(index + i, val[0], active, settings, colorType, onChangeMove, onRemoveLine)}
                    {val[1] &&
                      val[1].items &&
                      getItems(index + i, val[1], active, settings, colorType, onChangeMove, onRemoveLine)}
                  </React.Fragment>
                ))}
            </Item>
          </Grid>
        </StyledGameNotationTreeLine>
      );
    })
  );
};

const TreeItems = props => {
  const { index, item, active, settings, colorType, onChangeMove, onRemoveLine } = props;

  if (!item || !item.items) return null;

  return (
    <StyledGameNotationTree sColorType={colorType} {...addDataAttributes({ component: COMPONENTS.NOTATION_TREE })}>
      {getItems(index, item, active, settings, colorType, onChangeMove, onRemoveLine)}
    </StyledGameNotationTree>
  );
};

TreeItems.propTypes = {
  item: PropTypes.shape(),
  index: PropTypes.number,
  active: PropTypes.string,
  settings: PropTypes.shape(),
  colorType: PropTypes.string.isRequired,
  onChangeMove: PropTypes.func,
  onRemoveLine: PropTypes.func,
};

TreeItems.defaultProps = {
  item: undefined,
  index: undefined,
  active: undefined,
  settings: undefined,
  onChangeMove: () => null,
  onRemoveLine: () => null,
};

export default TreeItems;
