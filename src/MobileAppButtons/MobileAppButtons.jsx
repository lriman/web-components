import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../_utils';

import { AppDownloadButtonAppStore, AppDownloadButtonGooglePlay } from '../AppDownloadButton';

import { COMPONENTS, REFS, LINKS } from './_constants';
import { StyledMobileAppButtons, StyledMobileAppButtonsInner, StyledMobileAppButtonsItem } from './_style';

export default function MobileAppButtons(props) {
  const { gradientPrefix, language, position } = props;

  return (
    <StyledMobileAppButtons {...addDataAttributes({ component: COMPONENTS.GENERAL })}>
      <StyledMobileAppButtonsInner sPosition={position}>
        <StyledMobileAppButtonsItem as="a" href={LINKS[REFS.TYPE.GOOGLE_PLAY]} target="_blank">
          <AppDownloadButtonGooglePlay language={language} gradientPrefix={gradientPrefix} />
        </StyledMobileAppButtonsItem>
        <StyledMobileAppButtonsItem as="a" href={LINKS[REFS.TYPE.APP_STORE]} target="_blank">
          <AppDownloadButtonAppStore language={language} />
        </StyledMobileAppButtonsItem>
      </StyledMobileAppButtonsInner>
    </StyledMobileAppButtons>
  );
}

MobileAppButtons.propTypes = {
  language: PropTypes.oneOf(['en', 'ru']),
  position: PropTypes.oneOf(Object.values(REFS.POSITION)),
  gradientPrefix: PropTypes.string,
};

MobileAppButtons.defaultProps = {
  language: 'en',
  position: REFS.POSITION.HORIZONTAL,
  gradientPrefix: undefined,
};
