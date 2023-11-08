import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import themes from '../_themes';

export default function Provider({ children }) {
  const theme = 'light';

  return (
    <div style={{ background: theme === 'dark' ? '#2D2E37' : '#FFFFFF', margin: '-16px', padding: '16px' }}>
      <BrowserRouter>
        <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
};

Provider.defaultProps = {
  children: PropTypes.node,
};
