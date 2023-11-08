import React from 'react';
import styled from 'styled-components';

import ReactScroll from '../ReactScroll';

export const StyledSimpleScrollExample = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

export const StyledSimpleScrollExampleItem = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 16px 24px;
  border: 1px solid gray;
  border-radius: 6px;
  margin: 8px;
`;

const items = Array.from(Array(15).keys());

export default function ReactScrollExample(props) {
  return (
    <ReactScroll {...props}>
      <StyledSimpleScrollExample>
        {items.map(item => (
          <StyledSimpleScrollExampleItem key={item}>Item</StyledSimpleScrollExampleItem>
        ))}
      </StyledSimpleScrollExample>
    </ReactScroll>
  );
}
