import styled from 'styled-components';

import { getAddBackgroundColor } from './_utils';

export const StyledFilesUploader = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  background: ${({ theme }) => theme.filesUploader.backgroundColor};
  border: 1px solid ${({ theme }) => theme.filesUploader.borderColor};
  border-radius: 8px;
  overflow: hidden;
`;

export const StyledFilesUploaderHeader = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  padding: 16px 16px 0;
  background: ${({ theme }) => theme.filesUploader.headerBackgroundColor};
`;

export const StyledFilesUploaderAdd = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  text-align: center;
  background: ${({ theme, isActive, isError }) => getAddBackgroundColor(theme, isActive, isError)};
  transition: border 0.32s ease-out, background 0.32s ease-out;
`;

export const StyledFilesUploaderAddInner = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  padding: 16px;
  outline: 0 none;
`;

export const StyledFilesUploaderAddError = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  margin-top: 8px;
`;

export const StyledFilesUploaderItems = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  padding: 16px;

  ${StyledFilesUploaderAdd} + & {
    padding-top: 0;
  }
`;

export const StyledFilesUploaderItem = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  padding: 8px 0 8px 32px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.filesUploader.itemBackgroundColors.normal};

  :hover {
    background-color: ${({ theme, isDisabled }) =>
      isDisabled ? theme.filesUploader.itemBackgroundColors.normal : theme.filesUploader.itemBackgroundColors.hover};
  }
`;

export const StyledFilesUploaderItemIcon = styled.div`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 24px;
  top: 4px;
  left: 0;
`;

export const StyledFilesUploaderItemRemove = styled.div`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 24px;
  top: 4px;
  right: 0;
  cursor: pointer;
`;

export const StyledFilesUploaderItemRepeat = styled.div`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 24px;
  top: 4px;
  right: 28px;
  cursor: pointer;
`;

export const StyledFilesUploaderItemName = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  word-wrap: break-word;
`;
