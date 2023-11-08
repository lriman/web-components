import styled from 'styled-components';

import { MEDIA, MEDIA_SIZES } from '../_constants';
import { REFS as TYPOGRAPHY_REFS } from '../Typography/_constants';
import { getFontSize, getColor } from '../Typography/_utils';

import { BOX_REFS } from './_constants';
import { getDisplay } from './_utils';

const popupBoxPositioningVertical = (placement, align, params) => {
  if (params.openerNodeHeight === null || params.innerNodeHeight === null) return { top: 0 };

  let top = 'auto';
  let bottom = 'auto';
  let height = 'auto';

  const viewportHeight = document.documentElement.clientHeight || window.innerHeight;
  const { scrollHeight, scrollTop } = document.documentElement;
  const spaceTop = params.openerNodeTop;
  const spaceBottom = viewportHeight - spaceTop - params.openerNodeHeight;
  const realSpaceTop = scrollTop + spaceTop;
  const realSpaceBottom = scrollHeight - scrollTop - viewportHeight + spaceBottom;

  if (placement === BOX_REFS.PLACEMENT.BOTTOM) {
    top = spaceTop + params.openerNodeHeight;
    if (params.innerNodeHeight > spaceBottom) {
      if (params.innerNodeHeight > realSpaceBottom) {
        height = realSpaceBottom;
      }
      if (spaceBottom < spaceTop) {
        top = 'auto';
        height = 'auto';
        bottom = spaceBottom + params.openerNodeHeight;
        if (params.innerNodeHeight > realSpaceTop) {
          height = realSpaceTop;
        }
      }
    }
  } else if (placement === BOX_REFS.PLACEMENT.TOP) {
    bottom = spaceBottom + params.openerNodeHeight;
    if (params.innerNodeHeight > spaceTop) {
      if (params.innerNodeHeight > realSpaceTop) {
        height = realSpaceTop;
      }
      if (spaceTop < spaceBottom) {
        bottom = 'auto';
        height = 'auto';
        top = spaceTop + params.openerNodeHeight;
        if (params.innerNodeHeight > realSpaceBottom) {
          height = realSpaceBottom;
        }
      }
    }
  } else if ([BOX_REFS.PLACEMENT.RIGHT, BOX_REFS.PLACEMENT.LEFT].includes(placement)) {
    if (params.innerNodeHeight > viewportHeight) {
      top = 0;
      bottom = 0;
    } else if (align === BOX_REFS.ALIGN.START) {
      top = spaceTop;
      if (params.innerNodeHeight > params.openerNodeHeight + spaceBottom) {
        top = 'auto';
        bottom = 0;
      }
    } else if (align === BOX_REFS.ALIGN.END) {
      bottom = spaceBottom;
      if (params.innerNodeHeight > spaceTop + params.openerNodeHeight) {
        top = 0;
        bottom = 'auto';
      }
    } else if (align === BOX_REFS.ALIGN.CENTER) {
      const diffHeight = (params.innerNodeHeight - params.openerNodeHeight) / 2;
      top = diffHeight > spaceTop ? 0 : spaceTop - diffHeight;
      if (params.innerNodeHeight - diffHeight > params.openerNodeWidth + spaceBottom) {
        top = 'auto';
        bottom = 0;
      }
    }
  }

  return { top, bottom, height };
};

const popupBoxPositioningHorizontal = (placement, align, params) => {
  if (params.openerNodeWidth === null || params.innerNodeWidth === null) return { left: 0 };

  let left = 'auto';
  let right = 'auto';
  let width = 'auto';

  const viewportWidth = document.documentElement.clientWidth || window.innerWidth;
  const { scrollWidth, scrollLeft } = document.documentElement;
  const spaceLeft = params.openerNodeLeft;
  const spaceRight = viewportWidth - spaceLeft - params.openerNodeWidth;
  const realSpaceLeft = scrollLeft + spaceLeft;
  const realSpaceRight = scrollWidth - scrollLeft - viewportWidth + spaceRight;

  if (placement === BOX_REFS.PLACEMENT.RIGHT) {
    left = spaceLeft + params.openerNodeWidth;
    if (params.innerNodeWidth > spaceRight) {
      if (params.innerNodeWidth > realSpaceRight) {
        width = realSpaceRight;
      }
      if (spaceRight < spaceLeft) {
        left = 'auto';
        width = 'auto';
        right = spaceRight + params.openerNodeWidth;
        if (params.innerNodeWidth > realSpaceLeft) {
          width = realSpaceLeft;
        }
      }
    }
  } else if (placement === BOX_REFS.PLACEMENT.LEFT) {
    right = spaceRight + params.openerNodeWidth;
    if (params.innerNodeWidth > spaceLeft) {
      if (params.innerNodeWidth > realSpaceLeft) {
        width = realSpaceLeft;
      }
      if (spaceLeft < spaceRight) {
        right = 'auto';
        width = 'auto';
        left = spaceLeft + params.openerNodeWidth;
        if (params.innerNodeWidth > realSpaceRight) {
          width = realSpaceRight;
        }
      }
    }
  } else if ([BOX_REFS.PLACEMENT.TOP, BOX_REFS.PLACEMENT.BOTTOM].includes(placement)) {
    if (params.innerNodeWidth > viewportWidth) {
      left = 0;
      right = 0;
    } else if (align === BOX_REFS.ALIGN.START) {
      left = spaceLeft;
      if (params.innerNodeWidth > params.openerNodeWidth + spaceRight) {
        left = 'auto';
        right = 0;
      }
    } else if (align === BOX_REFS.ALIGN.END) {
      right = spaceRight;
      if (params.innerNodeWidth > spaceLeft + params.openerNodeWidth) {
        left = 0;
        right = 'auto';
      }
    } else if (align === BOX_REFS.ALIGN.CENTER) {
      const diffWidth = (params.innerNodeWidth - params.openerNodeWidth) / 2;
      left = diffWidth > spaceLeft ? 0 : spaceLeft - diffWidth;
      if (params.innerNodeWidth - diffWidth > params.openerNodeWidth + spaceRight) {
        left = 'auto';
        right = 0;
      }
    }
  }

  return { left, right, width };
};

export const StyledPopupOpener = styled.span`
  box-sizing: border-box;
  display: ${props => getDisplay(props.sDisplay)};
`;

export const StyledPopupBox = styled.div.attrs(({ sPlacement, sAlign, sPositioningParams, sZIndex }) => ({
  style: {
    ...popupBoxPositioningVertical(sPlacement, sAlign, sPositioningParams),
    ...popupBoxPositioningHorizontal(sPlacement, sAlign, sPositioningParams),
    zIndex: sZIndex,
  },
}))`
  position: fixed;
  box-sizing: border-box;
  opacity: ${props => (props.isMounted ? 1 : 0)};
  font-size: 0;
  overflow: ${({ sOverflow }) => sOverflow};
  background: ${({ theme, sColorType, isTransparent }) => !isTransparent && theme.popup[sColorType].backgroundColor};
  border: ${({ theme, sColorType, isTransparent }) =>
    !isTransparent && `1px solid ${theme.popup[sColorType].borderColor}`};
  box-shadow: ${({ theme, sColorType, isTransparent }) => !isTransparent && theme.popup[sColorType].boxShadow};
  margin: 2px 0;
  border-radius: 6px;
  max-height: 400px;
`;

export const StyledPopupBoxInner = styled.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({ theme, sColorType }) => getColor(theme, sColorType, TYPOGRAPHY_REFS.COLORS.PRIMARY)};
  font-size: ${getFontSize(TYPOGRAPHY_REFS.SIZES.M, MEDIA_SIZES.S)};

  @media (${MEDIA.TABLET}) {
    font-size: ${getFontSize(TYPOGRAPHY_REFS.SIZES.M, MEDIA_SIZES.M)};
  }

  @media (${MEDIA.DESKTOP}) {
    font-size: ${getFontSize(TYPOGRAPHY_REFS.SIZES.M, MEDIA_SIZES.L)};
  }
`;
