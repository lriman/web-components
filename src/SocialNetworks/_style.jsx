import styled from 'styled-components';

import { StyledIconSvg } from '../Icon/_style';

import { STYLES } from './_constants';

function getFlexFlowDirection(position) {
  return STYLES.DIRECTION[position];
}

export const StyledSocialNetworksItem = styled.a.attrs(() => ({ target: '_blank' }))`
  position: relative;
  box-sizing: border-box;
  display: block;
  cursor: pointer;
  text-decoration: none;
  margin: 12px 8px;

  & ${StyledIconSvg} {
    fill: ${({ theme, sColorType }) => theme.socialNetworks[sColorType].iconColors.normal};
  }

  &:hover {
    & ${StyledIconSvg} {
      fill: ${({ theme, sColorType }) => theme.socialNetworks[sColorType].iconColors.hover};
    }
  }
`;

export const StyledSocialNetworks = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  margin: -12px -8px;
`;

export const StyledSocialNetworksInner = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-flow: wrap ${({ sPosition }) => getFlexFlowDirection(sPosition)};
`;

export const StyledSocialNetworksShareItem = styled.button`
  position: relative;
  box-sizing: border-box;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  margin: 12px 24px 12px 12px;

  & ${StyledIconSvg} {
    fill: ${({ theme, sColorType }) => theme.socialNetworks[sColorType].iconColors.normal};
  }

  &:hover {
    & ${StyledIconSvg} {
      fill: ${({ theme, sColorType }) => theme.socialNetworks[sColorType].iconColors.hover};
    }
  }
`;
