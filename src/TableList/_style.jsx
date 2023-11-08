import styled from 'styled-components';
import { StyledIconSvg } from '../Icon/_style';

import {
  getCaptionsColor,
  getCellBorder,
  getRowBackgroundColor,
  getRowBorder,
  getRowBorderRadius,
  getRowColor,
  getSectionTitleBorderColor,
  getSectionTitleColor,
} from './_utils';
import { REFS } from './_constants';

export const StyledTableList = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
`;

export const StyledTableListCardView = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
`;

export const StyledTableListCardsViewData = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
`;

export const StyledTableListCardsViewSection = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  padding: 8px 0;
`;

export const StyledTableListCardsViewSectionTitle = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  color: ${({ theme, sColorType }) => getSectionTitleColor(theme, sColorType)};
  padding: 4px 16px;
  border-bottom: 1px solid ${({ theme, sColorType }) => getSectionTitleBorderColor(theme, sColorType)};
`;

export const StyledTableListCardsViewSectionContent = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
`;

export const StyledTableListCardsViewItems = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
`;

export const StyledTableListCardsViewItem = styled.div`
  position: relative;
  box-sizing: border-box;
  color: ${({ theme, sColorType }) => getRowColor(theme, sColorType)};
  background: ${({ theme, sColorType }) => getRowBackgroundColor(theme, sColorType)};
  padding: 4px 0;
  margin-bottom: 4px;
  border-radius: 4px;

  ${StyledIconSvg} {
    fill: ${({ theme, sColorType }) => getRowColor(theme, sColorType)};
  }
`;

export const StyledTableListCardsViewBlock = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 16px;
`;

export const StyledTableListCardsViewBlockCaption = styled.div`
  position: relative;
  box-sizing: border-box;
  color: ${({ theme, sColorType }) => getCaptionsColor(theme, sColorType)};
`;

export const StyledTableListTableView = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  width: ${({ isFitContent }) => (isFitContent ? 'fit-content ' : 'auto')};
  overflow: ${({ isScrollable }) => (isScrollable ? 'auto' : 'visible')};
`;

export const StyledTableListTableViewCaptions = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  color: ${({ theme, sColorType }) => getCaptionsColor(theme, sColorType)};
  user-select: none;
`;

export const StyledTableListTableViewData = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
`;

export const StyledTableListTableViewSection = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  padding: ${({ isWithTitle }) => (isWithTitle ? '4px 0' : '8px 0')};
`;

export const StyledTableListTableViewSectionTitle = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  color: ${({ theme, sColorType }) => getSectionTitleColor(theme, sColorType)};
  padding: 8px 16px;
`;

export const StyledTableListTableViewSectionContent = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
`;

export const StyledTableListTableViewItems = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
`;

export const StyledTableListTableViewItemsInner = styled.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
  min-width: 100%;
`;

export const StyledTableListTableViewItem = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
`;

export const StyledTableListTableViewRow = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  justify-content: stretch;
  align-items: stretch;
  margin-bottom: ${({ sType }) => (sType === REFS.TYPES.PRIMARY ? '4px' : 0)};
  border-radius: ${({ sType, isFirst, isLast }) => getRowBorderRadius(sType, isFirst, isLast)};
  color: ${({ theme, sColorType }) => getRowColor(theme, sColorType)};
  background: ${({ theme, sColorType, sType, isCaption }) =>
    getRowBackgroundColor(theme, sColorType, sType, isCaption)};
  border-bottom: ${({ theme, sType, sColorType, isLast }) => getRowBorder(theme, sType, sColorType, isLast)};
  transition: background 0.3s ease;
  overflow: ${({ isScrollable }) => (isScrollable ? 'visible' : 'hidden')};

  &:hover {
    color: ${({ theme, sColorType, isWithoutRowHover }) => getRowColor(theme, sColorType, true, isWithoutRowHover)};
    background: ${({ theme, sColorType, sType, isCaption, isWithoutRowHover }) =>
      getRowBackgroundColor(theme, sColorType, sType, isCaption, true, isWithoutRowHover)};
  }
`;

export const StyledTableListTableViewCell = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  justify-content: ${props => (props.sJustify ? props.sJustify : 'flex-start')};
  align-items: center;
  flex-basis: ${props => props.sWidth}%;
  min-width: ${props => props.sMinWidth}px;
  padding: ${props => props.cellPadding || '16px 12px'};
  border-right: ${({ theme, sType, sColorType, isLast, isWithoutBorder }) =>
    getCellBorder(theme, sType, sColorType, isLast, isWithoutBorder)};
  cursor: ${({ isClickable }) => (isClickable ? 'pointer' : 'default')};
`;

export const StyledTableListTableViewCellIcon = styled.div`
  position: relative;
  box-sizing: border-box;
  margin: ${({ sMargin }) => sMargin || '0 8px'};
  cursor: pointer;
`;

export const StyledTableListPagination = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 8px 0;
`;
