import styled from 'styled-components';
import { MEDIA } from '../_constants';
import BOARD_BACKGROUNDS from './_boardStyles/_backgrounds';
import { getPromotionModalPosition } from './_utils';

export const StyledChessBoard = styled.div`
  box-sizing: border-box;
  position: relative;
  opacity: ${props => (props.mounted ? 1 : 0)};

  & > div {
    background: ${props => `white url(${BOARD_BACKGROUNDS[props.boardStyle]}) no-repeat`};
    background-size: cover;
    filter: ${props => (props.disabled ? 'brightness(0.6)' : 'none')};
    pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
  }
`;

export const StyledPromotionModal = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 80%;
  min-height: 160px;
  padding: 24px;
  top: ${({ color, orientation }) => getPromotionModalPosition(color, orientation, true)};
  bottom: ${({ color, orientation }) => getPromotionModalPosition(color, orientation, false, true)};
  transform: translateX(12.5%);
  background: #ffffff;
  box-shadow: 0px 0px 12.04px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  z-index: 1;

  @media (${MEDIA.TABLET}) {
    padding: 32px;
  }

  @media (${MEDIA.DESKTOP}) {
    padding: 48px;
  }
`;

export const StyledPromotionIconBox = styled.div`
  padding: 14px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #7575f9;
  }
`;
