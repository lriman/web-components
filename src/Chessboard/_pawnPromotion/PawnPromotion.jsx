import React from 'react';
import PropTypes from 'prop-types';

import Grid, { Item } from '../../Grid';
import Block from '../../Typography/Block';
import getPawnPromotionIcon from '../../GetIcon/getPawnPromotionIcon';

import { StyledPromotionIconBox, StyledPromotionModal } from '../_style';

const PROMOTION_CHESS_PIECES = ['r', 'b', 'n', 'q'];

const PawnPromotion = props => {
  const { pawnPromotion, orientation, onChangePawn } = props;

  if (!pawnPromotion) return null;
  return (
    pawnPromotion?.isOpenModal && (
      <StyledPromotionModal color={pawnPromotion?.color} orientation={orientation}>
        <Block>
          <Grid justify="spaceBetween">
            {PROMOTION_CHESS_PIECES.map(key => (
              <Item key={key}>
                <StyledPromotionIconBox onClick={() => onChangePawn(key)}>
                  {getPawnPromotionIcon(pawnPromotion?.color, key, 'xxl')}
                </StyledPromotionIconBox>
              </Item>
            ))}
          </Grid>
        </Block>
      </StyledPromotionModal>
    )
  );
};

PawnPromotion.propTypes = {
  pawnPromotion: PropTypes.shape({
    isOpenModal: PropTypes.bool,
    color: PropTypes.string,
  }),
  orientation: PropTypes.string,
  onChangePawn: PropTypes.func,
};

PawnPromotion.defaultProps = {
  pawnPromotion: undefined,
  orientation: undefined,
  onChangePawn: undefined,
};

export default PawnPromotion;
