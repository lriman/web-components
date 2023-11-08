import styled from 'styled-components';
import { getEditorItemBackgroundColor } from './_utils';

export const StyledEditor = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #dadadc;
  border-radius: ${({ isTop }) => (isTop ? '8px 8px 0px 0px' : '0px 0px 8px 8px')};
`;

export const StyledEditorItem = styled.div`
  box-sizing: border-box;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  background: ${({ sSpare, isSelected }) => getEditorItemBackgroundColor(sSpare, isSelected)};
  transition: background 0.3s ease;
  border-right: ${({ sSpare }) => sSpare === 'pointer' && '1px solid #DADADC'};
  border-left: ${({ sSpare }) => sSpare === 'trash' && '1px solid #DADADC'};
  border-radius: 4px;
  width: 100%;
  height: 100%;
`;
