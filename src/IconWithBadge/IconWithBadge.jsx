import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { REFS, COMPONENTS } from './_constants';
import { StyledIconWithBadge, StyledIconWithBadgeInner, StyledIconWithBadgeItem } from './_style';
import { addDataAttributes } from '../_utils';

export default class IconWithBadge extends PureComponent {
  static REFS = REFS;

  static propTypes = {
    size: PropTypes.oneOf(Object.values(REFS.SIZES)),
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    size: REFS.SIZES.M,
  };

  render() {
    const { size, children, ...rest } = this.props;

    return (
      <StyledIconWithBadge {...addDataAttributes({ component: COMPONENTS.GENERAL })} sSize={size} {...rest}>
        <StyledIconWithBadgeItem sSize={size} {...rest}>
          {React.Children.toArray(children)[0]}
        </StyledIconWithBadgeItem>
        <StyledIconWithBadgeInner sSize={size}>{React.Children.toArray(children)[1]}</StyledIconWithBadgeInner>
      </StyledIconWithBadge>
    );
  }
}
