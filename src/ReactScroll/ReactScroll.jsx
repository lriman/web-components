import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../_utils';

import useScrollBoost from './_utils/useScrollBoost';

import { StyledReactScroll } from './_style';
import { COMPONENTS, REFS } from './_constants';

export default function ReactScroll(props) {
  const { direction, scrollMode, withoutScrollbar, children, ...rest } = props;

  const { viewport } = useScrollBoost({
    onLoadData: () => {},
    direction,
    scrollMode,
  });

  return (
    <StyledReactScroll
      {...addDataAttributes({ component: COMPONENTS.GENERAL })}
      ref={viewport}
      withoutScrollbar={withoutScrollbar}
      {...rest}
    >
      {children}
    </StyledReactScroll>
  );
}

ReactScroll.propTypes = {
  direction: PropTypes.oneOf(Object.values(REFS.DIRECTIONS)),
  scrollMode: PropTypes.oneOf(Object.values(REFS.SCROLL_MODES)),
  withoutScrollbar: PropTypes.bool,
  children: PropTypes.node,
};

ReactScroll.defaultProps = {
  direction: REFS.DIRECTIONS.HORIZONTAL,
  scrollMode: REFS.SCROLL_MODES.NATIVE,
  withoutScrollbar: false,
  children: null,
};
