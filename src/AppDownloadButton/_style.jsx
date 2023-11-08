import styled from 'styled-components';

const StyledAppDownloadButton = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  height: 42px;
`;

export const StyledAppDownloadButtonSvg = styled.svg`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
`;

export const StyledAppDownloadButtonAppStore = styled(StyledAppDownloadButton)`
  width: 122px;
`;

export const StyledAppDownloadButtonGooglePlay = styled(StyledAppDownloadButton)`
  width: 137px;
`;
