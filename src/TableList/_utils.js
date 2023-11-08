import { REFS } from './_constants';

export const getSectionTitleColor = (theme, colorType) => {
  return theme.tableList[colorType].sectionTitleColor;
};

export const getSectionTitleBorderColor = (theme, colorType) => {
  return theme.tableList[colorType].sectionTitleBorderColor;
};

export const getCaptionsColor = (theme, colorType) => {
  return theme.tableList[colorType].captionsColor;
};

export const getCaptionsBorderColor = (theme, colorType) => {
  return theme.tableList[colorType].captionsBorderColor;
};

export const getRowColor = (theme, colorType, isHovered, isWithoutRowHover) => {
  if (isHovered && !isWithoutRowHover) return theme.tableList[colorType]?.rowColors.hovered;
  return theme.tableList[colorType]?.rowColors.normal;
};

export const getRowBackgroundColor = (theme, colorType, type, isCaption, isHovered, isWithoutRowHover) => {
  if (type === REFS.TYPES.PRIMARY && isCaption) return null;
  if (isHovered && !isWithoutRowHover) return theme.tableList[colorType]?.rowBackgroundColors.hovered;
  return theme.tableList[colorType]?.rowBackgroundColors.normal;
};

export const getRowBorder = (theme, type, colorType, isLast) => {
  if (type === REFS.TYPES.SECONDARY && !isLast) return `1px solid ${theme.tableList[colorType].rowBorderColor}`;
  return null;
};

export const getRowBorderRadius = (type, isFirst, isLast) => {
  if (type === REFS.TYPES.SECONDARY && isFirst) return `4px 4px 0 0`;
  if (type === REFS.TYPES.SECONDARY && isLast) return `0 0 4px 4px`;
  if (type === REFS.TYPES.SECONDARY) return `0`;
  return '4px';
};

export const getCellBorder = (theme, type, colorType, isLast, isWithoutBorder) => {
  if (type === REFS.TYPES.SECONDARY && !isLast && !isWithoutBorder)
    return `1px solid ${theme.tableList[colorType].rowBorderColor}`;
  return null;
};

export const getInitSortableColumns = captions => {
  const item = captions.find(element => element.sortOrder);
  if (item) return { [item.id]: item.sortOrder };
  return {};
};

export const getSortedData = (data, item, sortableColumns) => {
  if (!sortableColumns[item.id]) return data;
  return data.map(element => {
    let items = [...element.items].sort(item.sort);
    if (sortableColumns[item.id] === REFS.SORT_ORDERS.DESC) items = items.reverse();
    return { ...element, items };
  });
};

export const getSortableColumns = (sortableColumns, item) => {
  let columnSort;
  if (!sortableColumns[item.id]) columnSort = REFS.SORT_ORDERS.ASC;
  else columnSort = sortableColumns[item.id] === REFS.SORT_ORDERS.ASC ? REFS.SORT_ORDERS.DESC : null;
  return { [item.id]: columnSort };
};

export const getUpdateSortItem = (sortableColumns, captions) => {
  const sortableColumnsItems = Object.keys(sortableColumns).filter(item => sortableColumns[item]);
  if (sortableColumnsItems?.length) return captions.find(item => item.id === sortableColumnsItems[0]);
  return null;
};

export const getCanPaginateColumns = (nodeWidth, captions) => {
  const result = captions.reduce((acc, item) => {
    acc += item.tableViewMinWidth || 0;
    return acc;
  }, 0);
  return result > nodeWidth;
};

export const getColumnsPaginationLimit = (nodeWidth, captions) => {
  const withoutPagination = captions
    .filter(item => !item.isPaginate)
    .reduce((acc, item) => {
      acc += item.tableViewMinWidth || 0;
      return acc;
    }, 0);
  const paginateItemWidth = captions.find(item => item.isPaginate).tableViewMinWidth;
  return Math.floor((nodeWidth - withoutPagination) / paginateItemWidth);
};

export const getColumnsPagination = (nodeWidth, captions) => {
  if (!nodeWidth || !captions.find(item => item.isPaginate)) return null;
  if (getCanPaginateColumns(nodeWidth, captions)) {
    const limit = getColumnsPaginationLimit(nodeWidth, captions);
    return { offset: 0, limit };
  }
  return null;
};

export const getCalcCaptions = (captions, params) => {
  if (!params) return captions;
  const calcCaptions = [...captions];
  const paginated = captions.filter(item => item.isPaginate);
  const paginatedIndex = captions.indexOf(paginated[0]);
  const paginatedItems = paginated.slice(params.offset, params.offset + params.limit);
  const preparedPaginatedItems = paginatedItems.map((item, index) => {
    if (
      index === 0 &&
      params.offset > 0 &&
      paginatedItems.length === 1 &&
      params.offset + params.limit < paginated.length
    )
      return { ...item, canGoLeft: true, canGoRight: true };
    if (index === 0 && params.offset > 0) return { ...item, canGoLeft: true };
    if (index === paginatedItems.length - 1 && params.offset + params.limit < paginated.length)
      return { ...item, canGoRight: true };
    return item;
  });
  calcCaptions.splice(paginatedIndex, paginated.length, ...preparedPaginatedItems);
  return calcCaptions;
};

export const getPaginateTotal = data => {
  return data.reduce((acc, item) => {
    acc += item.items.length;
    return acc;
  }, 0);
};

export const getInitPagination = (paginateLimit, data) => {
  if (!paginateLimit) return null;
  return { offset: 0, limit: paginateLimit, total: getPaginateTotal(data) };
};

export const getPaginatedTableData = (data, pagination) => {
  if (!pagination) return data;

  let offset = 0;
  let { limit } = pagination;

  return data
    .map(item => {
      if (offset !== pagination.offset && offset + item.items?.length < pagination.offset) {
        offset += item.items.length;
        return null;
      }

      if ((offset !== pagination.offset && offset + item.items?.length >= pagination.offset) || limit > 0) {
        const items = item.items.slice(pagination.offset - offset, pagination.offset - offset + limit);
        limit -= item.items.length - (pagination.offset - offset);
        offset = pagination.offset;

        if (!items.length) return null;
        return { ...item, items };
      }
      return null;
    })
    .filter(item => item);
};
