import styled from 'styled-components';

import { StyledLayoutMain, StyledLayoutMainBody, StyledLayoutMainBlock } from '../LayoutMain/_style';

export const StyledLayoutBlank = styled(StyledLayoutMain)``;

export const StyledLayoutBlankBody = styled(StyledLayoutMainBody)`
  margin-left: 0;
`;

export const StyledLayoutBlankBlock = styled(StyledLayoutMainBlock)`
  max-width: 960px;
  margin: 0 auto;
`;

export const StyledLayoutBlankHeader = styled(StyledLayoutBlankBlock)`
  width: 100%;
`;

export const StyledLayoutBlankContent = styled(StyledLayoutBlankBlock)`
  width: 100%;
  flex-grow: 1;
`;
