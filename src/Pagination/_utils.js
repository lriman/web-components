import { REFS } from './_constants';

const range = ({ from, to, step = 1, limit, total }) => {
  let i = from;
  const result = [];

  while (i <= to) {
    result.push({
      id: i - 1,
      label: String(i),
      extra: `${(i - 1) * limit + 1}-${(i === to && total) || i * limit}`,
    });
    i += step;
  }

  return result;
};

export const getPages = (totalPages, active, pageNeighbours, limit, total) => {
  const totalNumbers = pageNeighbours * 2 + 3;
  const totalBlocks = totalNumbers + 2;

  if (totalPages > totalBlocks) {
    const startPage = Math.max(2, active + 1 - pageNeighbours);
    const endPage = Math.min(totalPages - 1, active + 1 + pageNeighbours);
    let pages = range({ from: startPage, to: endPage, limit });
    const hasLeftSpill = startPage > 2;
    const hasRightSpill = totalPages - endPage > 1;
    const spillOffset = totalNumbers - (pages.length + 1);

    switch (true) {
      case hasLeftSpill && !hasRightSpill: {
        const extraPages = range({ from: startPage - spillOffset, to: startPage - 1, limit });
        pages = [{ id: 'prevEllipsis', label: '...' }, ...extraPages, ...pages];
        break;
      }
      case !hasLeftSpill && hasRightSpill: {
        const extraPages = range({ from: endPage + 1, to: endPage + spillOffset, limit });
        pages = [...pages, ...extraPages, { id: 'nextEllipsis', label: '...' }];
        break;
      }
      case hasLeftSpill && hasRightSpill:
      default: {
        pages = [{ id: 'prevEllipsis', label: '...' }, ...pages, { id: 'nextEllipsis', label: '...' }];
        break;
      }
    }

    return [
      {
        id: REFS.PAGE_SIDES.LEFT_PAGE,
        disabled: active === 0,
      },
      {
        id: 0,
        label: '1',
        extra: `1-${limit}`,
      },
      ...pages,
      {
        id: totalPages - 1,
        label: String(totalPages),
        extra: `${(totalPages - 1) * limit + 1}-${total}`,
      },
      {
        id: REFS.PAGE_SIDES.RIGHT_PAGE,
        disabled: active === totalPages - 1,
      },
    ];
  }

  return [
    {
      id: REFS.PAGE_SIDES.LEFT_PAGE,
      disabled: active === 0,
    },
    ...range({ from: 1, to: totalPages, limit, total }),
    {
      id: REFS.PAGE_SIDES.RIGHT_PAGE,
      disabled: active === totalPages - 1,
    },
  ];
};

export const getPaginationItemColor = (theme, colorType, isActive, isDisabled, isEllipsis, isHovered) => {
  if (isDisabled) return theme.pagination[colorType].colors.disabled;
  if (isEllipsis) return theme.pagination[colorType].colors.normal;
  if (isActive) return theme.pagination[colorType].colors.active;
  if (isHovered) return theme.pagination[colorType].colors.hovered;
  return theme.pagination[colorType].colors.normal;
};
