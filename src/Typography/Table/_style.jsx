import styled from 'styled-components';

import { MEDIA, MEDIA_SIZES } from '../../_constants';

import { getSpacing, getFontSize, getVerticalAlign, getTextAlign } from '../_utils';

import { getTableSpacing, getTableCellBorder } from './_utils';

export const StyledTableCell = styled.td`
  padding: 0;
  vertical-align: ${props => props.sVAlign};
  border-bottom: ${props => getTableCellBorder('horizontal', props.sBorder)};
  border-right: ${props => getTableCellBorder('vertical', props.sBorder)};
`;

export const StyledTableCellInner = styled.div`
  position: relative;
  box-sizing: border-box;
  text-align: ${props => getTextAlign(props.sTextAlign)};
`;

export const StyledTableRow = styled.tr`
  ${StyledTableCell} {
    vertical-align: ${props => getVerticalAlign(props.sVerticalAlign)};
  }
`;

export const StyledTable = styled.div`
  position: relative;
  box-sizing: border-box;
  margin: ${props => getTableSpacing(props.sSpacing, props.isRemoveSideSpacing, MEDIA_SIZES.S)};
  font-size: ${props => getFontSize(props.sSize, MEDIA_SIZES.S)};

  ${StyledTableCellInner} {
    padding: ${props => getSpacing(props.sSpacing, MEDIA_SIZES.S)};

    :first-child {
      padding-left: ${props => (props.isRemoveSideSpacing ? 0 : getSpacing(props.sSpacing, MEDIA_SIZES.S))};
    }

    :last-child {
      padding-right: ${props => (props.isRemoveSideSpacing ? 0 : getSpacing(props.sSpacing, MEDIA_SIZES.S))};
    }
  }

  @media (${MEDIA.TABLET}) {
    margin: -${props => getTableSpacing(props.sSpacing, props.isRemoveSideSpacing, MEDIA_SIZES.M)};
    font-size: ${props => getFontSize(props.sSize, MEDIA_SIZES.M)};

    ${StyledTableCellInner} {
      padding: ${props => getSpacing(props.sSpacing, MEDIA_SIZES.M)};
    }
  }

  @media (${MEDIA.DESKTOP}) {
    margin: -${props => getTableSpacing(props.sSpacing, props.isRemoveSideSpacing, MEDIA_SIZES.L)};
    font-size: ${props => getFontSize(props.sSize, MEDIA_SIZES.L)};

    ${StyledTableCellInner} {
      padding: ${props => getSpacing(props.sSpacing, MEDIA_SIZES.L)};
    }
  }
`;

export const StyledTableInner = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border-top: ${props => getTableCellBorder('horizontal', props.sBorder)};
  border-left: ${props => getTableCellBorder('vertical', props.sBorder)};
`;

export const StyledTableBody = styled.tbody``;
