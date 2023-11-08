import React from 'react';
import PropTypes from 'prop-types';

import { StyledSettingsButton } from './_style';

const SettingsButton = ({ children }) => {
  return <StyledSettingsButton>{children}</StyledSettingsButton>;
};

SettingsButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SettingsButton;
