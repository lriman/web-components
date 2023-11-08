import React from 'react';
import PropTypes from 'prop-types';
import IconPawnWhiteSet2 from '../../IconChess/Set2/IconPawnWhiteSet2';
import IconRookWhiteSet2 from '../../IconChess/Set2/IconRookWhiteSet2';
import IconHorseWhiteSet2 from '../../IconChess/Set2/IconHorseWhiteSet2';
import IconBishopWhiteSet2 from '../../IconChess/Set2/IconBishopWhiteSet2';
import IconQeenWhiteSet2 from '../../IconChess/Set2/IconQeenWhiteSet2';
import IconKingWhiteSet2 from '../../IconChess/Set2/IconKingWhiteSet2';
import IconPawnBlackSet2 from '../../IconChess/Set2/IconPawnBlackSet2';
import IconRookBlackSet2 from '../../IconChess/Set2/IconRookBlackSet2';
import IconHorseBlackSet2 from '../../IconChess/Set2/IconHorseBlackSet2';
import IconBishopBlackSet2 from '../../IconChess/Set2/IconBishopBlackSet2';
import IconQeenBlackSet2 from '../../IconChess/Set2/IconQeenBlackSet2';
import IconKingBlackSet2 from '../../IconChess/Set2/IconKingBlackSet2';
import { IconPointer, IconRemove } from '../../Icon';

export const set2 = {
  wp: ({ squareWidth }) => (
    <IconPawnWhiteSet2
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  wr: ({ squareWidth }) => (
    <IconRookWhiteSet2
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  wn: ({ squareWidth }) => (
    <IconHorseWhiteSet2
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  wb: ({ squareWidth }) => (
    <IconBishopWhiteSet2
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  wq: ({ squareWidth }) => (
    <IconQeenWhiteSet2
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  wk: ({ squareWidth }) => (
    <IconKingWhiteSet2
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  bp: ({ squareWidth }) => (
    <IconPawnBlackSet2
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  br: ({ squareWidth }) => (
    <IconRookBlackSet2
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  bn: ({ squareWidth }) => (
    <IconHorseBlackSet2
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  bb: ({ squareWidth }) => (
    <IconBishopBlackSet2
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  bq: ({ squareWidth }) => (
    <IconQeenBlackSet2
      style={{
        width: squareWidth,
        height: squareWidth,
      }}
    />
  ),
  bk: ({ squareWidth }) => (
    <IconKingBlackSet2
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

set2.wp.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set2.wr.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set2.wn.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set2.wb.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set2.wq.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set2.wk.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set2.bp.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set2.br.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set2.bn.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set2.bb.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set2.bq.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set2.bk.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set2.pointer.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
set2.trash.propTypes = {
  squareWidth: PropTypes.number.isRequired,
};
