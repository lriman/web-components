import styled from 'styled-components';
import { STYLES } from './_constants';

export const StyledRoleCard = styled.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  padding: 3px 10px;
  border-radius: 16px;
  color: #ffffff;
  background: ${({ sRole }) => STYLES.BACKGROUND_COLORS[sRole]};
`;
