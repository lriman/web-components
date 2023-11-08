import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../_utils';
import ColorContext from '../_context/colorContext';

import { COMPONENTS } from './_constants';
import { StyledLink, StyledRouterLink } from './_style';

export default function Link(props) {
  const {
    isPseudo,
    isRouter,
    isPrimary,
    isSecondary,
    isDanger,
    isUnderline,
    isWithIcon,
    isBlock,
    disabled,
    href,
    children,
    ...restProps
  } = props;

  const { colorType = 'normal' } = useContext(ColorContext);

  const styleProps = { isPrimary, isSecondary, isDanger, isUnderline, isWithIcon, isBlock, isDisabled: disabled };

  return (
    <StyledLink
      as={isPseudo || isRouter || disabled ? 'span' : 'a'}
      {...addDataAttributes({ component: COMPONENTS.GENERAL })}
      sColorType={colorType}
      {...styleProps}
      {...restProps}
      href={href}
    >
      {isRouter && (
        <StyledRouterLink to={href} {...restProps}>
          {children}
        </StyledRouterLink>
      )}
      {!isRouter && children}
    </StyledLink>
  );
}

Link.propTypes = {
  isPseudo: PropTypes.bool,
  isRouter: PropTypes.bool,
  isPrimary: PropTypes.bool,
  isSecondary: PropTypes.bool,
  isDanger: PropTypes.bool,
  isUnderline: PropTypes.bool,
  isWithIcon: PropTypes.bool,
  isBlock: PropTypes.bool,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  children: PropTypes.node,
};

Link.defaultProps = {
  isPseudo: false,
  isRouter: false,
  isPrimary: false,
  isSecondary: false,
  isDanger: false,
  isUnderline: false,
  isWithIcon: false,
  isBlock: false,
  disabled: false,
  href: null,
  children: null,
};
