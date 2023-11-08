import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

import { addDataAttributes } from '../../_utils';

import { Span } from '../../Typography';

import { COMPONENTS } from '../_constants';
import { StyledLayoutNavigationLinksItem, StyledLayoutNavigationLinksItemLink } from '../_style';

export default function LayoutNavigationLinksItem(props) {
  const { title, route, active, disabled, external, onClick } = props;

  return (
    <StyledLayoutNavigationLinksItem
      {...addDataAttributes({ component: COMPONENTS.NAVIGATION_LINKS_ITEM })}
      isActive={active}
      isDisabled={disabled}
    >
      {!disabled && !external && (
        <StyledLayoutNavigationLinksItemLink as={RouterLink} to={route} onClick={onClick}>
          <Span size="xl">{title}</Span>
        </StyledLayoutNavigationLinksItemLink>
      )}
      {!disabled && external && (
        <StyledLayoutNavigationLinksItemLink as="a" href={route} target="_blank">
          <Span size="xl">{title}</Span>
        </StyledLayoutNavigationLinksItemLink>
      )}
      {disabled && (
        <StyledLayoutNavigationLinksItemLink isDisabled>
          <Span size="xl">{title}</Span>
        </StyledLayoutNavigationLinksItemLink>
      )}
    </StyledLayoutNavigationLinksItem>
  );
}

LayoutNavigationLinksItem.propTypes = {
  title: PropTypes.node.isRequired,
  route: PropTypes.string.isRequired,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  external: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

LayoutNavigationLinksItem.defaultProps = {
  active: false,
  disabled: false,
  external: false,
};
