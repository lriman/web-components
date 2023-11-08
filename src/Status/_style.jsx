import styled from 'styled-components';

import { getSize } from './utils';

export const StyledStatus = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-end;
`;

export const StyledStatusIcon = styled.svg.attrs(() => ({
  viewBox: '0 0 24 24',
}))`
  position: relative;
  box-sizing: border-box;
  width: ${({ sSize }) => getSize(sSize)};
  height: ${({ sSize }) => getSize(sSize)};
`;

export const StyledStatusValue = styled.div`
  position: relative;
  box-sizing: border-box;
`;
