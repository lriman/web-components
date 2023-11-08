import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../_utils';
import ColorContext from '../_context/colorContext';

import { Block, H4, H5, Span } from '../Typography';
import Popup, { Opener, Box } from '../Popup';
import Card from '../Card';
import Country from '../Country';

import { COMPONENTS, REFS } from './_constants';
import {
  StyledAccount,
  StyledAccountInner,
  StyledAccountContent,
  StyledAccountName,
  StyledAccountFullName,
  StyledAccountDescribe,
  StyledAccountMenu,
} from './_style';
import AccountAvatar from './_internal/AccountAvatar';
import AccountMenuItem from './_internal/AccountMenuItem';

const getAccountName = (name, size) => {
  switch (size) {
    case REFS.SIZES.L:
      return <H5>{name}</H5>;
    case REFS.SIZES.XL:
      return <H4>{name}</H4>;
    default:
      return <Span>{name}</Span>;
  }
};

const getAccountFullName = (fullName, size) => {
  if (!fullName) return null;

  switch (size) {
    case REFS.SIZES.XL:
      return (
        <Span size="xl" weight="medium">
          {fullName}
        </Span>
      );
    default:
      return <Span>{fullName}</Span>;
  }
};

export default function Account(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const {
    name,
    fullName,
    size,
    compact,
    avatar,
    country,
    children,
    menu,
    display,
    isActive,
    isFriend,
    chessColor,
    isClickable,
    onMenuItemClick,
    onChangeAvatarClick,
    ...rest
  } = props;

  const { colorType = 'normal' } = useContext(ColorContext);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleMenuItemClick = id => {
    onMenuItemClick(id);
    handleMenuClose();
  };

  return (
    <StyledAccount {...addDataAttributes({ component: COMPONENTS.GENERAL })} sColorType={colorType} sDisplay={display}>
      <StyledAccountInner>
        {menu && (
          <Popup onOpen={handleMenuOpen} onClose={handleMenuClose} isOpened={isMenuOpen}>
            <Opener display={Opener.REFS.DISPLAY.BLOCK}>
              <AccountAvatar
                name={name}
                avatar={avatar}
                size={size}
                isActive={isActive}
                isFriend={isFriend}
                chessColor={chessColor}
                isClickable={isClickable}
                {...rest}
              />
            </Opener>
            <Box align={Box.REFS.ALIGN.END}>
              <Card boxShadow={Card.REFS.BOX_SHADOWS.GENERAL()}>
                <StyledAccountMenu sColorType={colorType}>
                  {menu.map(item => (
                    <AccountMenuItem
                      key={item.id}
                      id={item.id}
                      label={item.label}
                      link={item.link}
                      onClick={handleMenuItemClick}
                    />
                  ))}
                </StyledAccountMenu>
              </Card>
            </Box>
          </Popup>
        )}
        {!menu && (
          <AccountAvatar
            name={name}
            avatar={avatar}
            size={size}
            isActive={isActive}
            isFriend={isFriend}
            chessColor={chessColor}
            isClickable={isClickable}
            onChangeClick={onChangeAvatarClick}
            {...rest}
          />
        )}
        {!compact && (
          <StyledAccountContent sSize={size}>
            <StyledAccountName>{getAccountName(name, size)}</StyledAccountName>
            <StyledAccountFullName>{getAccountFullName(fullName, size)}</StyledAccountFullName>
            {(country || children) && (
              <StyledAccountDescribe>
                {country && <Country size={size} flag={country.flag} name={country.name} />}
                {children && <Block size={Span.REFS.SIZES.S}>{children}</Block>}
              </StyledAccountDescribe>
            )}
          </StyledAccountContent>
        )}
      </StyledAccountInner>
    </StyledAccount>
  );
}

Account.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  name: PropTypes.string.isRequired,
  fullName: PropTypes.string,
  compact: PropTypes.bool,
  avatar: PropTypes.string,
  display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
  isActive: PropTypes.bool,
  isFriend: PropTypes.bool,
  chessColor: PropTypes.oneOf(Object.values(REFS.CHESS_COLORS)),
  isClickable: PropTypes.bool,
  country: PropTypes.shape({
    code: PropTypes.string,
    flag: PropTypes.string,
    name: PropTypes.string,
  }),
  children: PropTypes.node,
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      link: PropTypes.string,
      label: PropTypes.string.isRequired,
    }),
  ),
  onMenuItemClick: PropTypes.func,
  onChangeAvatarClick: PropTypes.func,
};

Account.defaultProps = {
  size: REFS.SIZES.M,
  fullName: null,
  compact: false,
  avatar: null,
  country: null,
  children: null,
  menu: null,
  display: REFS.DISPLAY.INLINE,
  isActive: false,
  isFriend: false,
  chessColor: null,
  isClickable: false,
  onMenuItemClick: null,
  onChangeAvatarClick: null,
};

Account.REFS = REFS;
