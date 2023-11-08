import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';

import { H3, Block } from '../../Typography';

import { COMPONENTS, REFS } from '../_constants';
import {
  StyledNavigationLiteSection,
  StyledNavigationLiteSectionTitle,
  StyledNavigationLiteSectionContent,
} from '../_style';

import NavigationLiteItems from './NavigationLiteItems'; /* eslint-disable-line */

export default function NavigationLiteSection(props) {
  const { id, title, opened, items, onClick } = props;

  const handleClick = () => {
    if (!opened) onClick({ id, type: REFS.ITEMS_TYPES.SECTION });
  };

  return (
    <StyledNavigationLiteSection {...addDataAttributes({ component: COMPONENTS.SECTION })}>
      <StyledNavigationLiteSectionTitle isActive={opened} onClick={handleClick}>
        <Block>
          <H3>{title}</H3>
        </Block>
      </StyledNavigationLiteSectionTitle>
      {opened && (
        <StyledNavigationLiteSectionContent>
          <NavigationLiteItems items={items} onItemClick={onClick} />
        </StyledNavigationLiteSectionContent>
      )}
    </StyledNavigationLiteSection>
  );
}

NavigationLiteSection.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  opened: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onClick: PropTypes.func.isRequired,
};
