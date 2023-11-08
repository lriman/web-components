import styled from 'styled-components';

import { getFlagSize } from './_utils';

export const StyledCountry = styled.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;
`;

export const StyledCountryInner = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

export const StyledCountryFlag = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  width: ${props => getFlagSize(props.sSize)};
  height: ${props => getFlagSize(props.sSize)};
  border-radius: 50%;
  overflow: hidden;
`;

export const StyledCountryFlagImg = styled.img`
  position: absolute;
  box-sizing: border-box;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const StyledCountryName = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  line-height: 1.3;
  margin-left: 8px;
`;
