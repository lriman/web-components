import styled from 'styled-components';
import { getSimpleBoardBorder, getSimpleBoardEdgeBorder } from './_utils';
import BOARD_BACKGROUNDS from '../Chessboard/_boardStyles/_backgrounds';
import { StyledIconSvg } from '../Icon/_style';

export const StyledSimpleBoardEdgeBorder = styled.div`
  border: ${({ theme }) => getSimpleBoardEdgeBorder(theme)};
  :hover {
    border: ${({ theme }) => getSimpleBoardEdgeBorder(theme, true)};
  }
`;

export const StyledSimpleBoardBorder = styled.div`
  box-sizing: border-box;
  position: relative;
  border: ${({ width, theme }) => getSimpleBoardBorder(width, theme)};

  :hover {
    border: ${({ width, theme }) => getSimpleBoardBorder(width, theme, true)};
  }
`;

export const StyledSimpleBoardRow = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  background: ${({ boardStyle }) => `no-repeat white url(${BOARD_BACKGROUNDS[boardStyle]})`};
  background-size: contain;
`;

export const StyledSimpleBoardRowIcon = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 6px;
  right: 8px;

  ${StyledIconSvg} {
    fill: ${({ theme }) => theme.simpleBoard.iconSuccessFill};
  }
`;
