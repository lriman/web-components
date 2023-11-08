import React from 'react';
import PropTypes from 'prop-types';

import { getFullNotation } from '../_utils';
import { getCapturedIcon } from '../../GetIcon';

const getMoveWithIcon = ({ parsedSan, color }) => {
  const { beforeSan, figureSan, afterSan } = parsedSan;

  return (
    <>
      {beforeSan}
      {figureSan && getCapturedIcon(color, figureSan.toLowerCase(), 'xs', { margin: '0 2px 3px 0' })}
      {afterSan}
    </>
  );
};

const GameNotationMove = ({ data, gameSettings }) => {
  if (!data || !data.san) return null;
  const move = gameSettings?.notationFull ? getFullNotation(data) : data;

  if (gameSettings?.notationIcon && move.parsedSan) return getMoveWithIcon(move);
  return move.san;
};

GameNotationMove.propTypes = {
  data: PropTypes.shape(),
  values: PropTypes.shape(),
};

GameNotationMove.defaultProps = {
  data: undefined,
  values: undefined,
};

export default GameNotationMove;
