import React from 'react';

import { StyledAdminNavigationIcon, StyledAdminNavigationIconSvg } from '../../_style';

export default function NavigationIconStream() {
  return (
    <StyledAdminNavigationIcon>
      <StyledAdminNavigationIconSvg viewBox="0 0 20 20" focusable="false">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 18.3333C14.6024 18.3333 18.3334 14.6024 18.3334 10C18.3334 5.39763 14.6024 1.66667 10 1.66667C5.39765 1.66667 1.66669 5.39763 1.66669 10C1.66669 14.6024 5.39765 18.3333 10 18.3333Z"
            stroke="#B8B9BD"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.33331 6.66667L13.3333 10L8.33331 13.3333V6.66667Z"
            stroke="#B8B9BD"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </StyledAdminNavigationIconSvg>
    </StyledAdminNavigationIcon>
  );
}
