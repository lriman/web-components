import React from 'react';
import PropTypes from 'prop-types';
import IconPawnWhiteSet1 from '../../IconChess/Set1/IconPawnWhiteSet1';
import IconRookWhiteSet1 from '../../IconChess/Set1/IconRookWhiteSet1';
import IconHorseWhiteSet1 from '../../IconChess/Set1/IconHorseWhiteSet1';
import IconBishopWhiteSet1 from '../../IconChess/Set1/IconBishopWhiteSet1';
import IconQeenWhiteSet1 from '../../IconChess/Set1/IconQeenWhiteSet1';
import IconKingWhiteSet1 from '../../IconChess/Set1/IconKingWhiteSet1';
import IconPawnBlackSet1 from '../../IconChess/Set1/IconPawnBlackSet1';
import IconRookBlackSet1 from '../../IconChess/Set1/IconRookBlackSet1';
import IconHorseBlackSet1 from '../../IconChess/Set1/IconHorseBlackSet1';
import IconBishopBlackSet1 from '../../IconChess/Set1/IconBishopBlackSet1';
import IconQeenBlackSet1 from '../../IconChess/Set1/IconQeenBlackSet1';
import IconKingBlackSet1 from '../../IconChess/Set1/IconKingBlackSet1';
import { IconPointer, IconRemove } from '../../Icon';

export const set1 = {
  wp: ({ squareWidth }) => (
    <IconPawnWhiteSet1
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  wr: ({ squareWidth }) => (
    <IconRookWhiteSet1
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  wn: ({ squareWidth }) => (
    <IconHorseWhiteSet1
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  wb: ({ squareWidth }) => (
    <IconBishopWhiteSet1
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  wq: ({ squareWidth }) => (
    <IconQeenWhiteSet1
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  wk: ({ squareWidth }) => (
    <IconKingWhiteSet1
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  bp: ({ squareWidth }) => (
    <IconPawnBlackSet1
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  br: ({ squareWidth }) => (
    <IconRookBlackSet1
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  bn: ({ squareWidth }) => (
    <IconHorseBlackSet1
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  bb: ({ squareWidth }) => (
    <IconBishopBlackSet1
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  bq: ({ squareWidth }) => (
    <IconQeenBlackSet1
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  bk: ({ squareWidth }) => (
    <IconKingBlackSet1
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

set1.wp.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set1.wr.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set1.wn.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set1.wb.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set1.wq.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set1.wk.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set1.bp.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set1.br.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set1.bn.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set1.bb.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set1.bq.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set1.bk.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set1.pointer.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set1.trash.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
