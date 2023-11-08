import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

import { StyledIcon, StyledIconSvg } from '../Icon/_style';

export const linkColor = (theme, colorType, isPrimary, isSecondary, isDanger, isDisabled) => {
  if (isDisabled) return theme.link[colorType].disabled.text;
  if (isDanger) return theme.link[colorType].danger.text;
  if (isPrimary) return theme.link[colorType].primary.text;
  if (isSecondary) return theme.link[colorType].secondary.text;
  return theme.link[colorType].default.text;
};

const linkUnderline = (
  theme,
  colorType,
  isPrimary,
  isSecondary,
  isDanger,
  isWithIcon,
  isDisabled,
  isBlock,
  isHovered,
) => {
  if (isDisabled || isBlock) return '';

  let lineColor = theme.link[colorType].default.border;
  if (isDanger) lineColor = theme.link[colorType].danger.border;
  if (isPrimary) lineColor = theme.link[colorType].primary.border;
  if (isSecondary) lineColor = theme.link[colorType].secondary.border;
  if (isHovered) {
    lineColor = theme.link[colorType].default.hover;
    if (isDanger) lineColor = theme.link[colorType].danger.hover;
    if (isPrimary) lineColor = theme.link[colorType].primary.hover;
    if (isSecondary) lineColor = theme.link[colorType].secondary.hover;
  }

  const lineStyle = `background: linear-gradient(to left, ${lineColor}, ${lineColor} 100%) repeat-x 0 100%; background-size: 100% 1px;`;

  if (isWithIcon) return `> * {${lineStyle}}`;

  return lineStyle;
};

export const StyledLink = styled.a`
  display: inline;
  text-decoration: none;
  color: ${({ theme, sColorType, isPrimary, isSecondary, isDanger, isDisabled }) =>
    linkColor(theme, sColorType, isPrimary, isSecondary, isDanger, isDisabled)};
  cursor: ${props => (props.isDisabled ? 'default' : 'pointer')};

  ${props =>
    props.isUnderline &&
    linkUnderline(
      props.theme,
      props.sColorType,
      props.isPrimary,
      props.isSecondary,
      props.isDanger,
      props.isWithIcon,
      props.isDisabled,
      props.isBlock,
    )};

  :hover {
    ${props =>
      linkUnderline(
        props.theme,
        props.sColorType,
        props.isPrimary,
        props.isSecondary,
        props.isDanger,
        props.isWithIcon,
        props.isDisabled,
        props.isBlock,
        true,
      )};
  }

  ${StyledIcon} {
    top: -1px;
    margin: 0 4px;
    background: none;

    :first-child {
      margin-left: 0;
    }

    :last-child {
      margin-right: 0;
    }
  }

  ${StyledIconSvg} {
    fill: ${({ theme, sColorType, isPrimary, isSecondary, isDanger, isDisabled }) =>
      linkColor(theme, sColorType, isPrimary, isSecondary, isDanger, isDisabled)};
  }
`;

export const StyledRouterLink = styled(RouterLink)`
  cursor: inherit;
  text-decoration: inherit;
  color: inherit;
`;
