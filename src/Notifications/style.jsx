import styled from 'styled-components';
import { COLORS, MAIN_COLORS } from '../_constants';

export const StyledToastsWrapper = styled.div`
  position: absolute;
  top: 55%;
  padding-left: 15px;
  z-index: 10;
  width: 94%;
}
`;

export const StyledToasts = styled.div`
  position: relative;  
  border-left: ${props => (props.type === 'error' ? '8px solid #F58879' : '')};
  background-color: ${props => (props.type === 'error' ? '#FFF2EF' : '#FAFAFA')};
  opacity: 0.95;
  min-width: 300px;  
  box-shadow: 0px 0px 3px rgba(0, 0, 0, .1);
  margin-top: 4px;  
  width: 97%;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  transition: 1s;
}
`;
export const StyledToastsItem = styled.div`
  color: ${props => (props.type === 'error' ? MAIN_COLORS.BRIGHT_ORANGE : '')};
  padding: ${props => (props.type === 'answer' ? `16px 24px 16px 45px` : `16px 24px`)};
  line-height: 1.4;
}
`;

export const StyledToastsItemTitle = styled.div`
  box-sizing: border-box;
`;

export const StyledToastsItemMessage = styled.div`
  box-sizing: border-box;
  color: ${props => (props.type === 'error' ? MAIN_COLORS.BRIGHT_ORANGE : COLORS.GRAYISH_BLUE)};
`;

export const StyledCountdown = styled.div`
  font-size: 24px;
  margin: auto 0;
  color: ${MAIN_COLORS.BRIGHT_ORANGE};
`;

export const StyledToastsCloseButton = styled.div`
  border: none;
  background-color: transparent;
  margin-top: 8px;
  margin-right: 8px;
  cursor: pointer;
`;

export const StyledToastsText = styled.div``;
