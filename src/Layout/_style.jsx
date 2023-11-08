import styled, { keyframes } from 'styled-components';

import { MEDIA, MEDIA_SIZES } from '../_constants';
import { REFS as TYPOGRAPHY_REFS, STYLES as TYPOGRAPHY_STYLES } from '../Typography/_constants';
import { getFontSize } from '../Typography/_utils';

import {
  getSectionBackgroundColor,
  getSectionColor,
  getSectionPatternPosition,
  getSectionGeometricPosition,
  getSectionGeometricWidth,
  getSectionGeometricHeight,
  getSectionBlockPadding,
  getSectionBlockJustify,
  getNavigationTogglePosition,
  getNavigationSocialNetworksPosition,
  getNavigationContentPadding,
  getNavigationLinksItemColor,
} from './_utils';

export const StyledLayout = styled.div`
  position: relative;
  box-sizing: border-box;
  min-height: 100%;
  min-width: 320px;
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  justify-content: space-between;
  background: ${({ theme }) => theme.layouts.backgroundColor};
  font-size: ${getFontSize(TYPOGRAPHY_REFS.SIZES.M, MEDIA_SIZES.S)};
  line-height: ${TYPOGRAPHY_STYLES.PARAGRAPH_LINE_HEIGHT};

  @media (${MEDIA.TABLET}) {
    font-size: ${getFontSize(TYPOGRAPHY_REFS.SIZES.M, MEDIA_SIZES.M)};
  }

  @media (${MEDIA.DESKTOP}) {
    font-size: ${getFontSize(TYPOGRAPHY_REFS.SIZES.M, MEDIA_SIZES.L)};
  }
`;

export const StyledLayoutSection = styled.div`
  position: relative;
  box-sizing: border-box;
  background: ${({ theme, sType, sTransparent }) => getSectionBackgroundColor(theme, sType, sTransparent)};
  color: ${({ theme, sType }) => getSectionColor(theme, sType)};
  width: 100%;
  flex-grow: ${({ sGrow }) => (sGrow ? '1' : '0')};
`;

export const StyledLayoutSectionPattern = styled.div`
  position: absolute;
  box-sizing: border-box;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
  top: ${({ sType }) => getSectionPatternPosition(sType, 'top')};
  right: ${({ sType }) => getSectionPatternPosition(sType, 'right')};
  bottom: ${({ sType }) => getSectionPatternPosition(sType, 'bottom')};
  left: ${({ sType }) => getSectionPatternPosition(sType, 'left')};
  z-index: 1;
`;

export const StyledLayoutSectionBackgroundImage = styled.div`
  position: absolute;
  box-sizing: border-box;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
`;

export const StyledLayoutSectionBackgroundImageElement = styled.img`
  position: absolute;
  box-sizing: border-box;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const effectAnimation = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const StyledLayoutSectionBackgroundImageEffect = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  background: ${({ theme, sSectionType }) => getSectionBackgroundColor(theme, sSectionType)};
  animation: ${effectAnimation} 0.6s;
`;

export const StyledLayoutSectionBackgroundImagePlaceholder = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme, sSectionType }) => getSectionBackgroundColor(theme, sSectionType)};
`;

export const StyledLayoutSectionGeometric = styled.div`
  position: absolute;
  box-sizing: border-box;
  top: ${({ sType }) => getSectionGeometricPosition(sType, 'top')};
  right: ${({ sType }) => getSectionGeometricPosition(sType, 'right')};
  bottom: ${({ sType }) => getSectionGeometricPosition(sType, 'bottom')};
  left: ${({ sType }) => getSectionGeometricPosition(sType, 'left')};
  z-index: 3;
  width: ${({ sType }) => getSectionGeometricWidth(sType, MEDIA_SIZES.S)};
  height: ${({ sType }) => getSectionGeometricHeight(sType, MEDIA_SIZES.S)};

  @media (${MEDIA.TABLET}) {
    width: ${({ sType }) => getSectionGeometricWidth(sType, MEDIA_SIZES.M)};
    height: ${({ sType }) => getSectionGeometricHeight(sType, MEDIA_SIZES.M)};
  }

  @media (${MEDIA.DESKTOP}) {
    width: ${({ sType }) => getSectionGeometricWidth(sType, MEDIA_SIZES.L)};
    height: ${({ sType }) => getSectionGeometricHeight(sType, MEDIA_SIZES.L)};
  }
`;

export const StyledLayoutSectionContent = styled.div`
  position: relative;
  box-sizing: border-box;
  z-index: 4;
`;

export const StyledLayoutSectionContentInner = styled.div`
  position: relative;
  box-sizing: border-box;
  min-height: 100%;
  display: flex;
  flex-flow: column nowrap;
`;

export const StyledLayoutSectionContentARWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  padding-top: ${({ sAspectRatio }) => sAspectRatio * 100}%;
`;

export const StyledLayoutSectionContentARInner = styled.div`
  position: absolute;
  box-sizing: border-box;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const StyledLayoutBlock = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  flex-grow: ${({ sGrow }) => (sGrow ? 1 : 0)};
  justify-content: ${({ sJustify }) => getSectionBlockJustify(sJustify)};
  padding: ${({ sSpacing, sProportional }) => getSectionBlockPadding(MEDIA_SIZES.S, sSpacing, sProportional)};

  @media (${MEDIA.TABLET}) {
    padding: ${({ sSpacing, sProportional }) => getSectionBlockPadding(MEDIA_SIZES.M, sSpacing, sProportional)};
  }

  @media (${MEDIA.DESKTOP}) {
    padding: ${({ sSpacing, sProportional }) => getSectionBlockPadding(MEDIA_SIZES.L, sSpacing, sProportional)};
  }

  ${({ withoutExtraLarge, sSpacing }) =>
    !withoutExtraLarge &&
    `@media (${MEDIA.EXTRA_LARGE_DESKTOP}) {
    padding: ${getSectionBlockPadding(MEDIA_SIZES.L, sSpacing, true)};
    width: 1567px;
    margin: 0 auto;
  }`}
`;

export const StyledLayoutHeader = styled.div`
  position: relative;
  box-sizing: border-box;
  z-index: 1;
`;

export const StyledLayoutNavigation = styled.div`
  position: absolute;
  box-sizing: border-box;
  top: 0;
  left: 0;
  z-index: 10;
`;

export const StyledLayoutNavigationToggle = styled.div`
  position: fixed;
  box-sizing: border-box;
  cursor: pointer;
  z-index: 12;
  top: ${getNavigationTogglePosition(MEDIA_SIZES.S, 'top')};
  left: ${getNavigationTogglePosition(MEDIA_SIZES.S, 'left')};

  @media (${MEDIA.TABLET}) {
    top: ${getNavigationTogglePosition(MEDIA_SIZES.M, 'top')};
    left: ${getNavigationTogglePosition(MEDIA_SIZES.M, 'left')};
  }

  @media (${MEDIA.DESKTOP}) {
    top: ${getNavigationTogglePosition(MEDIA_SIZES.L, 'top')};
    left: ${getNavigationTogglePosition(MEDIA_SIZES.L, 'left')};
  }
`;

export const StyledLayoutNavigationModal = styled.div`
  position: fixed;
  box-sizing: border-box;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: ${({ theme }) => theme.layouts.navigation.modalBackgroundColor};
  z-index: 11;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

export const StyledLayoutNavigationSocialNetworks = styled.div`
  position: absolute;
  box-sizing: border-box;
  z-index: 12;
  top: ${getNavigationSocialNetworksPosition(MEDIA_SIZES.S, 'top')};
  left: ${getNavigationSocialNetworksPosition(MEDIA_SIZES.S, 'left')};

  @media (${MEDIA.TABLET}) {
    top: ${getNavigationSocialNetworksPosition(MEDIA_SIZES.M, 'top')};
    left: ${getNavigationSocialNetworksPosition(MEDIA_SIZES.M, 'left')};
  }

  @media (${MEDIA.DESKTOP}) {
    top: ${getNavigationSocialNetworksPosition(MEDIA_SIZES.L, 'top')};
    left: ${getNavigationSocialNetworksPosition(MEDIA_SIZES.L, 'left')};
  }
`;

export const StyledLayoutNavigationContent = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: ${getNavigationContentPadding(MEDIA_SIZES.S)};

  @media (${MEDIA.TABLET}) {
    padding: ${getNavigationContentPadding(MEDIA_SIZES.M)};
  }

  @media (${MEDIA.DESKTOP}) {
    padding: ${getNavigationContentPadding(MEDIA_SIZES.L)};
  }
`;

export const StyledLayoutNavigationMenu = styled.div`
  position: relative;
  box-sizing: border-box;
  margin: -24px 0;
`;

export const StyledLayoutNavigationMenuItem = styled.div`
  position: relative;
  box-sizing: border-box;
  margin: 24px 0;
  padding: 8px 0;

  &:after {
    content: '';
    display: ${({ isActive }) => (isActive ? 'block' : 'none')};
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 96px;
    background: ${({ theme }) => theme.layouts.navigation.menuItemActiveBorderColor};
  }
`;

export const StyledLayoutNavigationMenuItemLink = styled.div`
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  color: ${({ theme }) => theme.layouts.navigation.menuItemLinkColors.normal};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.layouts.navigation.menuItemLinkColors.hover};
  }
`;

export const StyledLayoutNavigationLinks = styled.div`
  position: relative;
  box-sizing: border-box;
  margin: 36px -16px;
`;

export const StyledLayoutNavigationLinksItem = styled.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  margin: 0 16px;
  padding: 4px 0;
  color: ${({ theme, isDisabled }) => getNavigationLinksItemColor(theme, isDisabled)};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme, isDisabled }) => getNavigationLinksItemColor(theme, isDisabled, true)};
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    left: -16px;
    top: 50%;
    margin: -2.5px 0 0 -2.5px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${({ theme }) => getSectionColor(theme, 'inverse')};
  }

  &:first-child:before {
    display: none;
  }

  &:after {
    content: '';
    display: ${({ isActive }) => (isActive ? 'block' : 'none')};
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 48px;
    background: ${({ theme }) => theme.layouts.navigation.menuItemActiveBorderColor};
  }
`;

export const StyledLayoutNavigationLinksItemLink = styled.div`
  cursor: ${({ isDisabled }) => (isDisabled ? 'default' : 'pointer')};
  text-decoration: none;
  color: inherit;
`;

export const StyledLayoutNavigationApplications = styled.div`
  position: relative;
  box-sizing: border-box;
  margin: 36px 0;
`;
