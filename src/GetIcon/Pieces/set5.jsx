import React from 'react';
import PropTypes from 'prop-types';
import IconPawnWhiteSet5 from '../../IconChess/Set5/IconPawnWhiteSet5';
import IconRookWhiteSet5 from '../../IconChess/Set5/IconRookWhiteSet5';
import IconHorseWhiteSet5 from '../../IconChess/Set5/IconHorseWhiteSet5';
import IconBishopWhiteSet5 from '../../IconChess/Set5/IconBishopWhiteSet5';
import IconQeenWhiteSet5 from '../../IconChess/Set5/IconQeenWhiteSet5';
import IconKingWhiteSet5 from '../../IconChess/Set5/IconKingWhiteSet5';
import IconPawnBlackSet5 from '../../IconChess/Set5/IconPawnBlackSet5';
import IconRookBlackSet5 from '../../IconChess/Set5/IconRookBlackSet5';
import IconHorseBlackSet5 from '../../IconChess/Set5/IconHorseBlackSet5';
import IconBishopBlackSet5 from '../../IconChess/Set5/IconBishopBlackSet5';
import IconQeenBlackSet5 from '../../IconChess/Set5/IconQeenBlackSet5';
import IconKingBlackSet5 from '../../IconChess/Set5/IconKingBlackSet5';
import { IconPointer, IconRemove } from '../../Icon';

export const set5 = {
  wp: ({ squareWidth }) => (
    <IconPawnWhiteSet5
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  wr: ({ squareWidth }) => (
    <IconRookWhiteSet5
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  wn: ({ squareWidth }) => (
    <IconHorseWhiteSet5
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  wb: ({ squareWidth }) => (
    <IconBishopWhiteSet5
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  wq: ({ squareWidth }) => (
    <IconQeenWhiteSet5
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  wk: ({ squareWidth }) => (
    <IconKingWhiteSet5
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  bp: ({ squareWidth }) => (
    <IconPawnBlackSet5
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  br: ({ squareWidth }) => (
    <IconRookBlackSet5
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  bn: ({ squareWidth }) => (
    <IconHorseBlackSet5
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  bb: ({ squareWidth }) => (
    <IconBishopBlackSet5
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  bq: ({ squareWidth }) => (
    <IconQeenBlackSet5
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  bk: ({ squareWidth }) => (
    <IconKingBlackSet5
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

set5.wp.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set5.wr.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set5.wn.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set5.wb.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set5.wq.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set5.wk.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set5.bp.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set5.br.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set5.bn.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set5.bb.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set5.bq.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set5.bk.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set5.pointer.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set5.trash.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
