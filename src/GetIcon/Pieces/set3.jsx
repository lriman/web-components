import React from 'react';
import PropTypes from 'prop-types';
import IconPawnWhiteSet3 from '../../IconChess/Set3/IconPawnWhiteSet3';
import IconRookWhiteSet3 from '../../IconChess/Set3/IconRookWhiteSet3';
import IconHorseWhiteSet3 from '../../IconChess/Set3/IconHorseWhiteSet3';
import IconBishopWhiteSet3 from '../../IconChess/Set3/IconBishopWhiteSet3';
import IconQeenWhiteSet3 from '../../IconChess/Set3/IconQeenWhiteSet3';
import IconKingWhiteSet3 from '../../IconChess/Set3/IconKingWhiteSet3';
import IconPawnBlackSet3 from '../../IconChess/Set3/IconPawnBlackSet3';
import IconRookBlackSet3 from '../../IconChess/Set3/IconRookBlackSet3';
import IconHorseBlackSet3 from '../../IconChess/Set3/IconHorseBlackSet3';
import IconBishopBlackSet3 from '../../IconChess/Set3/IconBishopBlackSet3';
import IconQeenBlackSet3 from '../../IconChess/Set3/IconQeenBlackSet3';
import IconKingBlackSet3 from '../../IconChess/Set3/IconKingBlackSet3';
import { IconPointer, IconRemove } from '../../Icon';

export const set3 = {
  wp: ({ squareWidth }) => (
    <IconPawnWhiteSet3
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  wr: ({ squareWidth }) => (
    <IconRookWhiteSet3
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  wn: ({ squareWidth }) => (
    <IconHorseWhiteSet3
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  wb: ({ squareWidth }) => (
    <IconBishopWhiteSet3
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  wq: ({ squareWidth }) => (
    <IconQeenWhiteSet3
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  wk: ({ squareWidth }) => (
    <IconKingWhiteSet3
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  bp: ({ squareWidth }) => (
    <IconPawnBlackSet3
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  br: ({ squareWidth }) => (
    <IconRookBlackSet3
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  bn: ({ squareWidth }) => (
    <IconHorseBlackSet3
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  bb: ({ squareWidth }) => (
    <IconBishopBlackSet3
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  bq: ({ squareWidth }) => (
    <IconQeenBlackSet3
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  bk: ({ squareWidth }) => (
    <IconKingBlackSet3
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

set3.wp.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set3.wr.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set3.wn.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set3.wb.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set3.wq.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set3.wk.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set3.bp.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set3.br.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set3.bn.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set3.bb.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set3.bq.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set3.bk.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set3.pointer.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set3.trash.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
