import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../_utils';
import { Block } from '../Typography';
import Grid, { Item } from '../Grid';
import IconClose from '../Icon/IconClose';
import IconSuccess from '../Icon/IconSuccess';
import IconQuestionCircle from '../Icon/IconQuestionCircle';
import IconError from '../Icon/IconError';

import { COMPONENTS, REFS } from './_constants';
import {
  StyledNotificationSticker,
  StyledNotificationStickerContent,
  StyledNotificationStickerClose,
  StyledNotificationStickerContentIcon,
} from './_style';

function getItemIcon(type) {
  switch (type) {
    case REFS.TYPES.SUCCESS:
      return <IconSuccess />;
    case REFS.TYPES.WARNING:
      return <IconQuestionCircle />;
    case REFS.TYPES.ERROR:
      return <IconError />;
    default:
    case REFS.TYPES.NORMAL:
      return null;
  }
}

export default function NotificationSticker(props) {
  const { type, onClose, children } = props;
  return (
    <StyledNotificationSticker {...addDataAttributes({ component: COMPONENTS.GENERAL })} sType={type}>
      <StyledNotificationStickerContent isClosable={!!onClose}>
        <Grid alignItems="center" noWrap>
          <Item>
            <StyledNotificationStickerContentIcon sType={type}>
              {getItemIcon(type)}
            </StyledNotificationStickerContentIcon>
          </Item>
          <Item>{children && <Block>{children}</Block>}</Item>
        </Grid>
      </StyledNotificationStickerContent>
      {onClose && (
        <StyledNotificationStickerClose onClick={onClose}>
          <IconClose size={IconClose.REFS.SIZES.XS} display={IconClose.REFS.DISPLAY.BLOCK} />
        </StyledNotificationStickerClose>
      )}
    </StyledNotificationSticker>
  );
}

NotificationSticker.propTypes = {
  type: PropTypes.oneOf(Object.values(REFS.TYPES)),
  onClose: PropTypes.func,
  children: PropTypes.node,
};

NotificationSticker.defaultProps = {
  type: REFS.TYPES.DEFAULT,
  onClose: null,
  children: null,
};

NotificationSticker.REFS = REFS;
