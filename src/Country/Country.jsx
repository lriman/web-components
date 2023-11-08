import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../_utils';

import { Span } from '../Typography';

import { COMPONENTS, REFS } from './_constants';
import {
  StyledCountry,
  StyledCountryInner,
  StyledCountryFlag,
  StyledCountryFlagImg,
  StyledCountryName,
} from './_style';

export default function Country(props) {
  const { flag, name, size, color, compact } = props;

  return (
    <StyledCountry {...addDataAttributes({ component: COMPONENTS.GENERAL })}>
      <StyledCountryInner>
        {flag && (
          <StyledCountryFlag sSize={size} title={name}>
            <StyledCountryFlagImg src={flag} />
          </StyledCountryFlag>
        )}
        {name && !compact && (
          <StyledCountryName>
            <Span color={color}>{name}</Span>
          </StyledCountryName>
        )}
      </StyledCountryInner>
    </StyledCountry>
  );
}

Country.propTypes = {
  size: PropTypes.oneOf(Object.values(REFS.SIZES)),
  color: PropTypes.oneOf(Object.values(REFS.COLORS)),
  flag: PropTypes.string,
  name: PropTypes.string,
  compact: PropTypes.bool,
};

Country.defaultProps = {
  size: REFS.SIZES.M,
  color: REFS.COLORS.MINOR,
  flag: null,
  name: null,
  compact: false,
};

Country.REFS = REFS;
