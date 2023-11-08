import styled from 'styled-components';

import { MEDIA, MEDIA_SIZES } from '../_constants';

import { getPadding } from './_utils';
import illustration from './_illustration';

export const StyledEmpty = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  color: ${({ theme, sColorType }) => theme.empty[sColorType].color};
  padding: ${getPadding(MEDIA_SIZES.S)};

  @media (${MEDIA.TABLET}) {
    padding: ${getPadding(MEDIA_SIZES.M)};
  }

  @media (${MEDIA.DESKTOP}) {
    padding: ${getPadding(MEDIA_SIZES.L)};
  }
`;

export const StyledEmptyImage = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  margin-bottom: 20px;
  width: 182px;
  height: 139px;
  background: center center url(${illustration});
  background-size: cover;
`;

export const StyledEmptyMessage = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
`;
