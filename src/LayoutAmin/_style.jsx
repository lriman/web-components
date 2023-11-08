import styled from 'styled-components';

export const StyledAdminLayout = styled.div`
  position: relative;
  box-sizing: border-box;
  min-height: 100%;
  min-width: 320px;
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  justify-content: space-between;
  color: ${({ theme }) => theme.layoutAdmin.color};
  background: ${({ theme }) => theme.layoutAdmin.backgroundColor};
`;

export const StyledAdminLayoutSide = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  flex-shrink: 0;
  width: ${({ theme }) => theme.layoutAdmin.side.width}px;
`;

export const StyledAdminLayoutSideInner = styled.div`
  position: fixed;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  justify-content: space-between;
  top: 0;
  left: 0;
  height: 100%;
  overflow: auto;
  width: ${({ theme }) => theme.layoutAdmin.side.inner.width}px;
  background: ${({ theme }) => theme.layoutAdmin.side.inner.backgroundColor};
  z-index: 3;
`;

export const StyledAdminLayoutSideBlock = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  flex-grow: ${({ isGrow }) => (isGrow ? 1 : 0)};
  padding: ${({ theme }) => theme.layoutAdmin.side.block.padding};
`;

export const StyledAdminLayoutContent = styled.div`
  position: relative;
  box-sizing: border-box;
  flex-grow: 1;
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  justify-content: space-between;
  background: ${({ theme }) => theme.layoutAdmin.content.backgroundColor};
`;

export const StyledAdminLayoutContentBlock = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  flex-grow: ${({ isGrow }) => (isGrow ? 1 : 0)};
  padding: ${({ theme }) => theme.layoutAdmin.content.block.padding};
`;
