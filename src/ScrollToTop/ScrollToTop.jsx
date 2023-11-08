import React, { useEffect, useState } from 'react';

import { addDataAttributes } from '../_utils';
import { IconArrowUpTailed } from '../Icon';

import { StyledScrollToTop } from './_style';
import { COMPONENTS } from './_constants';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
  }, []);

  return (
    isVisible && (
      <StyledScrollToTop {...addDataAttributes({ component: COMPONENTS.GENERAL })} onClick={scrollToTop}>
        <IconArrowUpTailed />
      </StyledScrollToTop>
    )
  );
}
