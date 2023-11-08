import styled from 'styled-components';

export const StyledReactScroll = styled.div`
  position: relative;
  box-sizing: border-box;
  flex-grow: 1;
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: ${({ withoutScrollbar }) => withoutScrollbar && 'none'};
  }
`;
