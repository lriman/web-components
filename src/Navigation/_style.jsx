import styled from 'styled-components';
import { StyledIconSvg } from '../Icon/_style';

function getSectionMainColor(theme, isActive) {
  if (isActive) return theme.navigation.section.main.colors.active;
  return theme.navigation.section.main.colors.normal;
}

function getSectionMainBackgroundColor(theme, isActive) {
  if (isActive) return theme.navigation.section.main.backgroundColors.active;
  return theme.navigation.section.main.backgroundColors.normal;
}

function getSectionItemBorderColor(theme, isActive) {
  if (isActive) return theme.navigation.section.item.borderColors.active;
  return theme.navigation.section.item.borderColors.normal;
}

function getSectionItemInnerColor(theme, isActive) {
  if (isActive) return theme.navigation.section.item.inner.colors.active;
  return theme.navigation.section.item.inner.colors.normal;
}

function getSectionItemInnerBackgroundColor(theme, isActive) {
  if (isActive) return theme.navigation.section.item.inner.backgroundColors.active;
  return theme.navigation.section.item.inner.backgroundColors.normal;
}

export const StyledAdminNavigation = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  color: ${({ theme }) => theme.navigation.color};
  background: ${({ theme }) => theme.navigation.backgroundColor};
`;

export const StyledAdminNavigationInner = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  margin: ${({ theme }) => theme.navigation.margin};
`;

export const StyledAdminNavigationIcon = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  height: ${({ theme }) => theme.navigation.icon.size}px;
  width: ${({ theme }) => theme.navigation.icon.size}px;
`;

export const StyledAdminNavigationIconSvg = styled.svg`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
`;

export const StyledAdminNavigationSectionMain = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  font-size: ${({ theme }) => theme.navigation.section.main.fontSize}px;
  font-weight: ${({ theme }) => theme.navigation.section.main.fontWeight};
  line-height: ${({ theme }) => theme.navigation.section.main.lineHeight}px;
  padding: ${({ theme }) => theme.navigation.section.main.padding};
  border-radius: ${({ theme }) => theme.navigation.section.main.borderRadius}px;
  text-decoration: none;
`;

export const StyledAdminNavigationSectionIcon = styled.div`
  position: absolute;
  box-sizing: border-box;
  display: block;
  top: 50%;
  left: 24px;
  transform: translate(-50%, -50%);
`;

export const StyledAdminNavigationSectionTitle = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
`;

export const StyledAdminNavigationSectionPointer = styled.div`
  position: absolute;
  box-sizing: border-box;
  display: block;
  top: 50%;
  right: 20px;
  transform: translate(50%, -50%);
  cursor: pointer;
`;

export const StyledAdminNavigationSection = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  padding: ${({ theme }) => theme.navigation.section.padding};

  & ${StyledAdminNavigationSectionMain} {
    color: ${({ theme, isActive }) => getSectionMainColor(theme, isActive)};
    background: ${({ theme, isActive }) => getSectionMainBackgroundColor(theme, isActive)};
    cursor: ${({ isActive }) => (isActive ? 'default' : 'pointer')};
  }

  & ${StyledAdminNavigationIconSvg} {
    fill: ${({ theme, isActive }) => getSectionMainColor(theme, isActive)};
  }

  & ${StyledIconSvg} {
    fill: ${({ theme, isActive }) => getSectionMainColor(theme, isActive)};
  }
`;

export const StyledAdminNavigationSectionItems = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  padding: ${({ theme }) => theme.navigation.section.items.padding};
`;

export const StyledAdminNavigationSectionItemsInner = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  border-left: 1px solid ${({ theme }) => theme.navigation.section.items.inner.borderColor};
`;

export const StyledAdminNavigationSectionItemInner = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  font-size: ${({ theme }) => theme.navigation.section.item.inner.fontSize}px;
  font-weight: ${({ theme }) => theme.navigation.section.item.inner.fontWeight};
  line-height: ${({ theme }) => theme.navigation.section.item.inner.lineHeight}px;
  padding: ${({ theme }) => theme.navigation.section.item.inner.padding};
  border-radius: ${({ theme }) => theme.navigation.section.item.inner.borderRadius}px;
  text-decoration: none;
`;

export const StyledAdminNavigationSectionItem = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  margin-left: -1px;
  padding: ${({ theme }) => theme.navigation.section.item.padding};
  border-left: 2px solid ${({ theme, isActive }) => getSectionItemBorderColor(theme, isActive)};

  & ${StyledAdminNavigationSectionItemInner} {
    color: ${({ theme, isActive }) => getSectionItemInnerColor(theme, isActive)};
    background: ${({ theme, isActive }) => getSectionItemInnerBackgroundColor(theme, isActive)};
    cursor: ${({ isActive }) => (isActive ? 'default' : 'pointer')};
  }
`;
