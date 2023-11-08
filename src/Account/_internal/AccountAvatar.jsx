import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';
import ColorContext from '../../_context/colorContext';

import { Span, H3, H5 } from '../../Typography';
import IconCamera from '../../Icon/IconCamera';
import IconFriends from '../../Icon/IconFriends';
import IconChessBadgeWhite from '../../Icon/IconChessBadgeWhite';
import IconChessBadgeBlack from '../../Icon/IconChessBadgeBlack';

import { COMPONENTS, REFS } from '../_constants';
import {
  StyledAccountAvatar,
  StyledAccountAvatarInner,
  StyledAccountAvatarImg,
  StyledAccountAvatarInitials,
  StyledAccountAvatarChange,
  StyledAccountAvatarChessIcon,
  StyledAccountAvatarFriendsIcon,
} from '../_style';
import { getIconChessSize, getIconFriendsSize, getInitials } from '../_utils';

const getChangeIconSize = size => {
  switch (size) {
    case REFS.SIZES.S:
      return IconCamera.REFS.SIZES.XXS;
    case REFS.SIZES.M:
      return IconCamera.REFS.SIZES.XS;
    case REFS.SIZES.L:
      return IconCamera.REFS.SIZES.S;
    case REFS.SIZES.XL:
      return IconCamera.REFS.SIZES.XL;
    default:
      return IconCamera.REFS.SIZES.S;
  }
};

const getAvatarInitials = (size, initials) => {
  switch (size) {
    case REFS.SIZES.S:
      return (
        <Span size="m" weight="medium" color="major">
          {initials}
        </Span>
      );
    case REFS.SIZES.M:
      return (
        <Span size="l" weight="medium" color="major">
          {initials}
        </Span>
      );
    case REFS.SIZES.L:
      return <H5 color="major">{initials}</H5>;
    case REFS.SIZES.XL:
      return <H3 color="major">{initials}</H3>;
    default:
      return null;
  }
};

const getChessIconType = (color, size) => {
  if (color === REFS.CHESS_COLORS.WHITE) return <IconChessBadgeWhite size={getIconChessSize(size)} />;
  if (color === REFS.CHESS_COLORS.BLACK) return <IconChessBadgeBlack size={getIconChessSize(size)} />;
  return null;
};

export default function AccountAvatar(props) {
  const { name, light, avatar, isClickable, size, isActive, isFriend, chessColor, onChangeClick, ...rest } = props;
  const initials = getInitials(name);

  const { colorType = 'normal' } = useContext(ColorContext);

  return (
    <StyledAccountAvatar {...addDataAttributes({ component: COMPONENTS.AVATAR })} sSize={size}>
      <StyledAccountAvatarInner
        isLight={light}
        isClickable={isClickable}
        title={name}
        sSize={size}
        isActive={isActive}
        sColorType={colorType}
        {...rest}
      >
        {avatar && <StyledAccountAvatarImg src={avatar} alt={name} />}
        {!avatar && (
          <StyledAccountAvatarInitials>
            <ColorContext.Provider value={{ colorType: 'inverse' }}>
              {getAvatarInitials(size, initials)}
            </ColorContext.Provider>
          </StyledAccountAvatarInitials>
        )}
      </StyledAccountAvatarInner>
      {onChangeClick && (
        <StyledAccountAvatarChange onClick={onChangeClick} sSize={size} sColorType={colorType}>
          <IconCamera sSize={getChangeIconSize(size)} />
        </StyledAccountAvatarChange>
      )}
      {chessColor && (
        <StyledAccountAvatarChessIcon sSize={size}>{getChessIconType(chessColor, size)}</StyledAccountAvatarChessIcon>
      )}
      {isFriend && (
        <StyledAccountAvatarFriendsIcon sSize={size} sColorType={colorType}>
          <IconFriends size={getIconFriendsSize(size)} color={IconFriends.REFS.COLORS.ACCENT_1} />
        </StyledAccountAvatarFriendsIcon>
      )}
    </StyledAccountAvatar>
  );
}

AccountAvatar.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  compact: PropTypes.bool,
  light: PropTypes.bool,
  avatar: PropTypes.string,
  isClickable: PropTypes.bool,
  isActive: PropTypes.bool.isRequired,
  isFriend: PropTypes.bool.isRequired,
  chessColor: PropTypes.string,
  onChangeClick: PropTypes.func,
};

AccountAvatar.defaultProps = {
  compact: false,
  light: false,
  avatar: null,
  isClickable: false,
  chessColor: null,
  onChangeClick: null,
};
