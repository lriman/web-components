import styled from 'styled-components';

import { STYLES } from './_constants';

function getFlexFlowDirection(position) {
  return STYLES.DIRECTION[position];
}

export const StyledMobileAppButtonsItem = styled.a.attrs(() => ({ target: '_blank' }))`
  position: relative;
  box-sizing: border-box;
  display: block;
  cursor: ${({ isDisabled }) => (isDisabled ? 'default' : 'pointer')};
  opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};
  text-decoration: none;
  margin: 12px 8px;
`;

export const StyledMobileAppButtons = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  margin: -12px -8px;
`;

export const StyledMobileAppButtonsInner = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-flow: wrap ${({ sPosition }) => getFlexFlowDirection(sPosition)};
`;
