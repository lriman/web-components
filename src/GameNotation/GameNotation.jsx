import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import Span from '../Typography/Span';
import IconEqual from '../Icon/IconEqual';
import IconNotEqual from '../Icon/IconNotEqual';
import ColorContext from '../_context/colorContext';

import GameNotationTimer from './_internal/GameNotationTimer';
import GameNotationMove from './_internal/GameNotationMove';
import GameNotationCountdown from './_internal/GameNotationCountdown';
import TreeItems from './_internal/TreeItems';
import InlineNotation from './_internal/InlineNotation';

import { notationScroll } from './_utils';
import {
  StyledGameNotation,
  StyledGameNotationBody,
  StyledGameNotationRow,
  StyledGameNotationCell,
  StyledGameNotationColumnLabel,
  StyledMove,
} from './_style';
import { addDataAttributes } from '../_utils';
import { COMPONENTS } from './_constants';

const getDrawIcon = item => {
  if (item.drawDeny) return <IconNotEqual />;
  if (item.drawRequest) return <IconEqual />;
  return null;
};

const getViewData = (item, gameData, active, settings, colorType, isLeft, isRight, onChangeMove) => {
  if (!item) return <StyledGameNotationCell width={46} sColorType={colorType} />;

  if (item.san === '...')
    return (
      <StyledGameNotationCell width={46} sColorType={colorType} isLeft={isLeft} isRight={isRight} isBlocked>
        {item.san}
      </StyledGameNotationCell>
    );

  return (
    <StyledGameNotationCell
      id={`notation_${item.moveIdString}`}
      isActive={item.moveIdString === active}
      isBlocked={settings.isBlocked}
      isNew={item.isNew}
      sColorType={colorType}
      isLeft={isLeft}
      isRight={isRight}
      width={46}
      onClick={() => onChangeMove(item)}
    >
      {item.san && (
        <StyledMove marginLeft="0">
          {item.extra && getDrawIcon(item.extra)}
          <GameNotationMove data={item} gameSettings={settings} />
        </StyledMove>
      )}
      {item.passedTime ? <Span>{item.passedTime}</Span> : null}
      {item.showTime && <GameNotationTimer startDate={item.ts} gameData={gameData} />}
      {item.showCountdown && <GameNotationCountdown ts={item.ts} />}
    </StyledGameNotationCell>
  );
};

const GameNotation = props => {
  const { gameData, notation, settings, columnLabels, active, onChangeMove, onRemoveLine, ...rest } = props;

  const scrollToItem = () => {
    const target = document.getElementById(`notation_${active}`);
    const container = document.getElementById('notation_container');
    if (target && container) notationScroll(target, container);
  };

  useEffect(() => {
    setTimeout(scrollToItem);
  }, [active]); //eslint-disable-line

  const { colorType = 'normal' } = useContext(ColorContext);

  return (
    <StyledGameNotation {...addDataAttributes({ component: COMPONENTS.GENERAL })}>
      <StyledGameNotationBody id="notation_container" {...rest} sColorType={colorType}>
        {columnLabels && (
          <StyledGameNotationRow>
            <StyledGameNotationCell width={8} sColorType={colorType} />
            <StyledGameNotationCell width={46} sColorType={colorType} cellPadding="10px 0px">
              <StyledGameNotationColumnLabel sColorType={colorType}>
                {columnLabels.whiteMove}
              </StyledGameNotationColumnLabel>
            </StyledGameNotationCell>
            <StyledGameNotationCell width={46} sColorType={colorType} cellPadding="10px 0px">
              <StyledGameNotationColumnLabel sColorType={colorType}>
                {columnLabels.blackMove}
              </StyledGameNotationColumnLabel>
            </StyledGameNotationCell>
          </StyledGameNotationRow>
        )}
        {notation.map((item, i) => (
          <div key={item[0]?.moveIdString || i}>
            <StyledGameNotationRow>
              <StyledGameNotationCell width={8} sColorType={colorType} isMoveNum cellPadding="10px 0px">
                {item[0]?.moveNum}
              </StyledGameNotationCell>
              {getViewData(item[0], gameData, active, settings, colorType, true, false, onChangeMove)}
              {getViewData(item[1], gameData, active, settings, colorType, false, true, onChangeMove)}
            </StyledGameNotationRow>
            <TreeItems
              index={i}
              item={item[0]}
              active={active}
              settings={settings}
              colorType={colorType}
              onChangeMove={onChangeMove}
              onRemoveLine={onRemoveLine}
            />
            <TreeItems
              index={i}
              item={item[1]}
              active={active}
              settings={settings}
              colorType={colorType}
              onChangeMove={onChangeMove}
              onRemoveLine={onRemoveLine}
            />
          </div>
        ))}
      </StyledGameNotationBody>
    </StyledGameNotation>
  );
};

GameNotation.propTypes = {
  gameData: PropTypes.shape({}),
  settings: PropTypes.shape({}),
  notation: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))).isRequired,
  columnLabels: PropTypes.shape({
    whiteMove: PropTypes.string,
    blackMove: PropTypes.string,
  }),
  active: PropTypes.string,
  onChangeMove: PropTypes.func,
  onRemoveLine: PropTypes.func,
};

GameNotation.defaultProps = {
  gameData: undefined,
  settings: undefined,
  columnLabels: undefined,
  active: undefined,
  onChangeMove: () => null,
  onRemoveLine: () => null,
};

GameNotation.Inline = InlineNotation;

export default GameNotation;
