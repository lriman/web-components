import styled from 'styled-components';

import { getDisplay } from './_utils';

export const StyledCard = styled.div.attrs(({ sStyle }) => ({
  style: sStyle || {},
}))`
  position: relative;
  box-sizing: border-box;
  vertical-align: middle;
  display: ${props => getDisplay(props.sDisplay)};
  margin: ${props => props.sMargin || 0};
  border: ${props => props.sBorder || 'none'};
  padding: ${props => props.sPadding || 0};
  border-radius: ${props => props.sBorderRadius || 0};
  box-shadow: ${props => props.sBoxShadow || 'none'};
  background: ${props => props.sBackground || 'none'};
  height: ${props => props.sHeight || 'auto'};
  width: ${props => props.sWidth || 'auto'};
`;
