import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';
import ColorContext from '../../_context/colorContext';

import Grid, { Item } from '../../Grid';
import SocialNetworks from '../../SocialNetworks';
import MobileAppButtons from '../../MobileAppButtons';

import { COMPONENTS } from '../_constants';
import {
  StyledLayoutNavigationModal,
  StyledLayoutNavigationContent,
  StyledLayoutNavigationSocialNetworks,
  StyledLayoutNavigationApplications,
} from '../_style';

import LayoutSection from './LayoutSection';
import LayoutBlock from './LayoutBlock';
import LayoutHeader from './LayoutHeader';
import LayoutNavigationMenu from './LayoutNavigationMenu';
import LayoutNavigationLinks from './LayoutNavigationLinks';

export default function LayoutNavigationModal(props) {
  const { language, isOpen, homeRoute, menu, links, handleClose, children } = props;

  return (
    <StyledLayoutNavigationModal {...addDataAttributes({ component: COMPONENTS.NAVIGATION_MODAL })} isOpen={isOpen}>
      <LayoutSection type="inverse">
        <LayoutBlock withoutExtraLarge>
          <LayoutHeader homeRoute={homeRoute} />
        </LayoutBlock>
        <LayoutBlock>
          <Grid>
            <Item size={12} desktop={5}>
              <StyledLayoutNavigationContent>
                <LayoutNavigationMenu items={menu} onItemClick={handleClose} />
                {links && <LayoutNavigationLinks items={links} onItemClick={handleClose} />}
                <StyledLayoutNavigationApplications>
                  <MobileAppButtons language={language} gradientPrefix="LayoutNavigation" />
                </StyledLayoutNavigationApplications>
              </StyledLayoutNavigationContent>
            </Item>
            <Item size={12} desktop={7}>
              {children}
            </Item>
          </Grid>
        </LayoutBlock>
      </LayoutSection>
      <ColorContext.Provider value={{ colorType: 'inverse' }}>
        <StyledLayoutNavigationSocialNetworks>
          <SocialNetworks position="vertical" />
        </StyledLayoutNavigationSocialNetworks>
      </ColorContext.Provider>
    </StyledLayoutNavigationModal>
  );
}

LayoutNavigationModal.propTypes = {
  language: PropTypes.oneOf(['en', 'ru']),
  isOpen: PropTypes.bool,
  homeRoute: PropTypes.string,
  menu: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  links: PropTypes.arrayOf(PropTypes.shape()),
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

LayoutNavigationModal.defaultProps = {
  language: 'en',
  isOpen: false,
  homeRoute: null,
  links: null,
  children: null,
};
