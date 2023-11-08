import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { REFS } from './_constants';
import AwardBadge from '../AwardBadge/AwardBadge';
import ColorContext from '../_context/colorContext';

import { StyledIconNotificationItem, StyledIconNotificationInner, StyledIconNotification } from './_style';

const IconNotification = props => {
  const { size, type, isActive, children, value, ...rest } = props;
  const { colorType = 'normal' } = useContext(ColorContext);

  return (
    <StyledIconNotification sSize={size} isActive={isActive} sColorType={colorType} {...rest}>
      <StyledIconNotificationItem sSize={size} isActive={isActive} sColorType={colorType} {...rest}>
        {children}
      </StyledIconNotificationItem>
      {!!value && (
        <StyledIconNotificationInner sSize={size}>
          <AwardBadge
            value={value}
            type={type}
            style={{ fontSize: '12px', height: '16px', padding: '3px 6px', display: 'flex', alignItems: 'center' }}
          />
        </StyledIconNotificationInner>
      )}
    </StyledIconNotification>
  );
};

IconNotification.propTypes = {
  type: PropTypes.oneOf(Object.values(REFS.TYPES)),
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  value: PropTypes.number,
  isActive: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

IconNotification.defaultProps = {
  type: REFS.TYPES.PRIMARY,
  size: REFS.SIZES.M,
  value: null,
  isActive: false,
};

IconNotification.REFS = REFS;

export default IconNotification;
