import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../_utils';

import { H5, Span } from '../Typography';
import { IconChessBadgeBlack, IconChessBadgeWhite, IconSuccessFill, IconWarningFill } from '../Icon';

import { COMPONENTS, REFS } from './_constants';
import { StyledStatusCard, StyledStatusCardInner, StyledStatusCardValue } from './_style';

function iconSize(size) {
  switch (size) {
    case REFS.SIZES.S:
      return 'xs';
    case REFS.SIZES.L:
      return 'xl';
    default:
      return 'm';
  }
}

function getBoardInfoIcon(type, size) {
  switch (type) {
    case REFS.ICONS.W:
      return <IconChessBadgeWhite size={iconSize(size)} />;
    case REFS.ICONS.B:
      return <IconChessBadgeBlack size={iconSize(size)} />;
    case REFS.ICONS.WON:
      return <IconSuccessFill size={iconSize(size)} color="positive" />;
    case REFS.ICONS.LOST:
      return <IconWarningFill size={iconSize(size)} color="negative" />;
    default:
      return null;
  }
}

function getBoardInfoLabel(label, size) {
  switch (size) {
    case REFS.SIZES.S:
      return (
        <Span size="xs" weight="medium">
          {label}
        </Span>
      );
    case REFS.SIZES.L:
      return <H5>{label}</H5>;
    default:
      return <Span weight="medium">{label}</Span>;
  }
}

function getColor(type) {
  switch (type) {
    case 'won':
      return 'positive';
    case 'lost':
      return 'negative';
    default:
      return 'normal';
  }
}

export default function StatusCard(props) {
  const { icon, size, label } = props;

  return (
    <StyledStatusCard {...addDataAttributes({ component: COMPONENTS.GENERAL })}>
      <StyledStatusCardInner sColor={getColor(icon)} sSize={size}>
        {getBoardInfoIcon(icon, size)}
        <StyledStatusCardValue sSize={size}>{getBoardInfoLabel(label, size)}</StyledStatusCardValue>
      </StyledStatusCardInner>
    </StyledStatusCard>
  );
}

StatusCard.propTypes = {
  icon: PropTypes.oneOf(Object.values(REFS.ICONS)).isRequired,
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  label: PropTypes.string.isRequired,
};

StatusCard.defaultProps = {
  size: REFS.SIZES.M,
};

StatusCard.REFS = REFS;
