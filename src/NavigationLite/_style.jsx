import styled from 'styled-components';

import {
  getNavigationLiteLinkColor,
  getNavigationLiteLinkMarkBackgroundColor,
  getNavigationLiteSectionTitleColor,
  getNavigationLiteLinkCursor,
} from './_utils';

export const StyledNavigationLite = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
`;

export const StyledNavigationLiteExpanded = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
`;

export const StyledNavigationLiteOpener = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  cursor: pointer;
  padding: 12px 0;
`;

export const StyledNavigationLiteOpenerIcon = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
`;

export const StyledNavigationLiteOpenerValue = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  color: ${({ theme }) => theme.navigationLite.linkColors.active};
  padding: 0 24px 0 8px;
`;

export const StyledNavigationLitePopup = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  padding-left: 24px;
`;

export const StyledNavigationLiteItems = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
`;

export const StyledNavigationLiteSection = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  padding-bottom: 24px;
`;

export const StyledNavigationLiteSectionTitle = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  padding-bottom: 29px;
  cursor: ${props => (props.isActive ? 'default' : 'pointer')};
  color: ${({ theme, isActive }) => getNavigationLiteSectionTitleColor(isActive, theme)};
  transition: color 0.32s ease-out;

  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    margin-top: 10px;
    bottom: 16px;
    width: 96px;
    height: 2px;
    background: ${({ theme, isActive }) => getNavigationLiteLinkMarkBackgroundColor(isActive, theme)};
  }

  &:hover {
    color: ${({ theme, isActive }) => getNavigationLiteSectionTitleColor(isActive, theme, true)};
  }
`;

export const StyledNavigationLiteSectionContent = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
`;

export const StyledNavigationLiteLink = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  padding: 6px 24px 6px 0;
  color: ${({ theme, isActive }) => getNavigationLiteLinkColor(isActive, theme)};
  cursor: ${({ isActive, isDisabled }) => getNavigationLiteLinkCursor(isActive, isDisabled)};
  transition: color 0.32s ease-out;

  &:hover {
    color: ${({ theme, isActive }) => getNavigationLiteLinkColor(isActive, theme, true)};
  }
`;
