import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { Span } from '../../Typography';
import IconSuccessFill from '../../Icon/IconSuccessFill';
import IconWarningFill from '../../Icon/IconWarningFill';
import ColorContext from '../../_context/colorContext';

import TreeItems from './TreeItems';
import GameNotationMove from './GameNotationMove';

import { COMPONENTS } from '../_constants';
import { addDataAttributes } from '../../_utils';
import { StyledInlineMove, StyledInlineNotation, StyledInlineNotationBody } from '../_style';

function getMoveIcon(item) {
  if (item.isSuccess) return <IconSuccessFill color="positive" size="s" />;
  if (item.isError) return <IconWarningFill color="negative" size="s" />;
  return null;
}

function getViewData(item, settings, active, colorType, onChangeMove) {
  if (!item) return null;
  if (item.san === '...') return item.san;

  const handleChangeMove = () => {
    if (onChangeMove) onChangeMove(item);
  };

  return (
    <StyledInlineMove
      isActive={item.moveIdString === active}
      padding={item.moveIdString === active ? '0 6px 0 2px' : null}
      isPointer={!!onChangeMove}
      sColorType={colorType}
      onClick={handleChangeMove}
    >
      <GameNotationMove data={item} gameSettings={settings} />
      {(item.isSuccess || item.isError) && (
        <StyledInlineMove sColorType={colorType} margin="0 0 0 4px">
          {getMoveIcon(item)}
        </StyledInlineMove>
      )}
    </StyledInlineMove>
  );
}

const InlineNotation = props => {
  const { notation, settings, active, onChangeMove, onRemoveLine } = props;

  const { colorType = 'normal' } = useContext(ColorContext);

  return (
    <StyledInlineNotation {...addDataAttributes({ component: COMPONENTS.INLINE_NOTATION })}>
      <StyledInlineNotationBody sColorType={colorType}>
        {notation.map((val, i) => (
          <React.Fragment key={val[0]?.id || i}>
            <StyledInlineMove sColorType={colorType}>
              <Span color={colorType === 'normal' ? 'accent1' : 'minor'}>{val[0]?.moveNum}.</Span>
              {val[0] && getViewData(val[0], settings, active, colorType, onChangeMove)}
              {val[1] && getViewData(val[1], settings, active, colorType, onChangeMove)}
            </StyledInlineMove>
            <TreeItems
              index={i}
              item={val[0]}
              active={active}
              settings={settings}
              colorType={colorType}
              onChangeMove={onChangeMove}
              onRemoveLine={onRemoveLine}
            />
            <TreeItems
              index={i}
              item={val[1]}
              active={active}
              settings={settings}
              colorType={colorType}
              onChangeMove={onChangeMove}
              onRemoveLine={onRemoveLine}
            />
          </React.Fragment>
        ))}
      </StyledInlineNotationBody>
    </StyledInlineNotation>
  );
};

InlineNotation.propTypes = {
  settings: PropTypes.shape({}),
  notation: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))).isRequired,
  active: PropTypes.string,
  onChangeMove: PropTypes.func,
  onRemoveLine: PropTypes.func,
};

InlineNotation.defaultProps = {
  settings: undefined,
  active: undefined,
  onChangeMove: undefined,
  onRemoveLine: undefined,
};

export default InlineNotation;
