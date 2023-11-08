import styled from 'styled-components';

import { getJustifyContent, getBorderColor, getColor, getItemPadding, getItemFontSize, getBorderWidth } from './_utils';

export const StyledMenu = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: ${props => getJustifyContent(props.sAlign)};
`;

export const StyledMenuMain = styled.div`
  position: relative;
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-bottom: ${({ theme, sColorType, isBordered }) =>
    isBordered && `1px solid ${theme.menu[sColorType].menuBorderColor}`};
`;

export const StyledMenuMainInner = styled.div.attrs(({ sWidth }) => ({
  style: { width: sWidth },
}))`
  position: relative;
  box-sizing: border-box;
  display: block;
  white-space: nowrap;
  overflow: hidden;
`;

export const StyledMenuExtra = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
`;

export const StyledMenuExtraOpener = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
`;

export const StyledMenuExtraPopup = styled.div`
  padding: 8px 0;
  min-width: 160px;
`;

export const StyledMenuItem = styled.div`
  position: relative;
  box-sizing: border-box;
  display: ${props => (props.isExtra ? 'block' : 'inline-block')};
  vertical-align: middle;
  padding: ${({ isExtra }) => (isExtra ? '0 24px' : '0 24px 0 0')};
`;

export const StyledMenuItemInner = styled.div`
  position: relative;
  box-sizing: border-box;
  vertical-align: middle;
  display: block;
  font-weight: 500;
  font-size: ${({ sSize, isExtra }) => getItemFontSize(sSize, isExtra)}px;
  white-space: nowrap;
  cursor: ${props => (props.isActive ? 'default' : 'pointer')};
  padding: ${({ sSize, isExtra }) => getItemPadding(sSize, isExtra)};
  color: ${({ isActive, sColorType, theme }) => getColor(isActive, sColorType, theme)};
  transition: background-color 0.32s ease-out;

  &:after {
    content: '';
    display: ${({ isActive }) => (isActive ? 'block' : 'none')};
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: ${({ sSize }) => getBorderWidth(sSize)}px;
    background: ${({ isActive, sColorType, theme }) => getBorderColor(isActive, sColorType, theme)};
  }

  &:hover {
    color: ${({ isActive, sColorType, theme }) => getColor(isActive, sColorType, theme, true)};

    &:after {
      background: ${({ isActive, sColorType, theme }) => getBorderColor(isActive, sColorType, theme, true)};
    }
  }
`;
