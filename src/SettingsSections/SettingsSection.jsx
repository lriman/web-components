import React from 'react';
import PropTypes from 'prop-types';

import { StyledSettingsSection } from './_style';

const SettingsSection = ({ children }) => {
  return <StyledSettingsSection>{children}</StyledSettingsSection>;
};

SettingsSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SettingsSection;
