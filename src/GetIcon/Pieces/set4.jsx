import React from 'react';
import PropTypes from 'prop-types';
import IconPawnWhiteSet4 from '../../IconChess/Set4/IconPawnWhiteSet4';
import IconRookWhiteSet4 from '../../IconChess/Set4/IconRookWhiteSet4';
import IconHorseWhiteSet4 from '../../IconChess/Set4/IconHorseWhiteSet4';
import IconBishopWhiteSet4 from '../../IconChess/Set4/IconBishopWhiteSet4';
import IconQeenWhiteSet4 from '../../IconChess/Set4/IconQeenWhiteSet4';
import IconKingWhiteSet4 from '../../IconChess/Set4/IconKingWhiteSet4';
import IconPawnBlackSet4 from '../../IconChess/Set4/IconPawnBlackSet4';
import IconRookBlackSet4 from '../../IconChess/Set4/IconRookBlackSet4';
import IconHorseBlackSet4 from '../../IconChess/Set4/IconHorseBlackSet4';
import IconBishopBlackSet4 from '../../IconChess/Set4/IconBishopBlackSet4';
import IconQeenBlackSet4 from '../../IconChess/Set4/IconQeenBlackSet4';
import IconKingBlackSet4 from '../../IconChess/Set4/IconKingBlackSet4';
import { IconPointer, IconRemove } from '../../Icon';

export const set4 = {
  wp: ({ squareWidth }) => (
    <IconPawnWhiteSet4
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  wr: ({ squareWidth }) => (
    <IconRookWhiteSet4
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  wn: ({ squareWidth }) => (
    <IconHorseWhiteSet4
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  wb: ({ squareWidth }) => (
    <IconBishopWhiteSet4
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  wq: ({ squareWidth }) => (
    <IconQeenWhiteSet4
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  wk: ({ squareWidth }) => (
    <IconKingWhiteSet4
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  bp: ({ squareWidth }) => (
    <IconPawnBlackSet4
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  br: ({ squareWidth }) => (
    <IconRookBlackSet4
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  bn: ({ squareWidth }) => (
    <IconHorseBlackSet4
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  bb: ({ squareWidth }) => (
    <IconBishopBlackSet4
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  bq: ({ squareWidth }) => (
    <IconQeenBlackSet4
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  bk: ({ squareWidth }) => (
    <IconKingBlackSet4
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  pointer: ({ squareWidth }) => (
    <IconPointer
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  trash: ({ squareWidth }) => (
    <IconRemove
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
};

set4.wp.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set4.wr.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set4.wn.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set4.wb.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set4.wq.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set4.wk.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set4.bp.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set4.br.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set4.bn.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set4.bb.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set4.bq.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set4.bk.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set4.pointer.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set4.trash.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
