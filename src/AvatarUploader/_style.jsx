import styled from 'styled-components';

import 'react-image-crop/dist/ReactCrop.css';

export const StyledAvatarUploader = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  padding: 55px;
`;

export const StyledAvatarUploaderSelectFile = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  text-align: center;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.avatarUploader.addBorderColor};
`;

export const StyledAvatarUploaderSelectFileInner = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  padding: 24px;
  outline: 0 none;
`;

export const StyledAvatarUploaderCrop = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
`;

export const StyledAvatarUploaderCropInner = styled.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
`;
