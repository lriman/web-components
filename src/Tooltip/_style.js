import styled from 'styled-components';
import { BOX_REFS } from './_constants';

const tooltipBoxIconPositioningVertical = (theme, placement, align, params) => {
  const { openerNodeTop, openerNodeLeft, innerNodeTop, innerNodeLeft } = params;

  const result = {};

  if (placement === BOX_REFS.PLACEMENT.RIGHT) {
    if (innerNodeLeft > openerNodeLeft) {
      result.left = '-14px';
      result['border-right-color'] = theme.tooltip.box.backgroundColor;
    } else {
      result.right = '-14px';
      result['border-left-color'] = theme.tooltip.box.backgroundColor;
    }
  }

  if (placement === BOX_REFS.PLACEMENT.LEFT) {
    if (innerNodeLeft > openerNodeLeft) {
      result.left = '-14px';
      result['border-right-color'] = theme.tooltip.box.backgroundColor;
    } else {
      result.right = '-14px';
      result['border-left-color'] = theme.tooltip.box.backgroundColor;
    }
  }
  if ([BOX_REFS.PLACEMENT.TOP, BOX_REFS.PLACEMENT.BOTTOM].includes(placement)) {
    if (openerNodeTop > innerNodeTop) {
      result.bottom = '-14px';
      result['border-top-color'] = theme.tooltip.box.backgroundColor;
    } else {
      result.top = '-14px';
      result['border-bottom-color'] = theme.tooltip.box.backgroundColor;
    }
  }

  return result;
};

const tooltipBoxIconPositioningHorizontal = (placement, align, params) => {
  const {
    openerNodeTop,
    openerNodeLeft,
    openerNodeWidth,
    innerNodeTop,
    innerNodeLeft,
    innerNodeHeight,
    innerNodeWidth,
  } = params;
  const viewportHeight = document.documentElement.clientHeight || window.innerHeight;

  const result = {};

  if ([BOX_REFS.PLACEMENT.LEFT, BOX_REFS.PLACEMENT.RIGHT].includes(placement) && align === BOX_REFS.ALIGN.START) {
    if (innerNodeTop >= 0 && innerNodeTop + innerNodeHeight >= viewportHeight) {
      result.top = openerNodeTop - innerNodeTop;
    } else {
      result.top = '10px';
    }
  }
  if ([BOX_REFS.PLACEMENT.LEFT, BOX_REFS.PLACEMENT.RIGHT].includes(placement) && align === BOX_REFS.ALIGN.CENTER) {
    if (innerNodeTop >= 0 && innerNodeTop + innerNodeHeight < viewportHeight) {
      result.top = '50%';
      result.transform = 'translateY(-50%)';
    } else {
      result.top = openerNodeTop - innerNodeTop;
    }
  }
  if ([BOX_REFS.PLACEMENT.LEFT, BOX_REFS.PLACEMENT.RIGHT].includes(placement) && align === BOX_REFS.ALIGN.END) {
    if (innerNodeTop < 0) {
      result.top = openerNodeTop - innerNodeTop;
    } else result.bottom = '10px';
  }

  if ([BOX_REFS.PLACEMENT.TOP, BOX_REFS.PLACEMENT.BOTTOM].includes(placement) && align === BOX_REFS.ALIGN.START) {
    result.left = openerNodeLeft - innerNodeLeft + 2;
  }

  if ([BOX_REFS.PLACEMENT.TOP, BOX_REFS.PLACEMENT.BOTTOM].includes(placement) && align === BOX_REFS.ALIGN.CENTER) {
    if (Math.ceil(innerNodeLeft + innerNodeWidth / 2) !== Math.ceil(openerNodeLeft + openerNodeWidth / 2)) {
      result.left = openerNodeLeft + openerNodeWidth / 2 - innerNodeLeft - 10;
    } else {
      result.left = '50%';
      result.transform = 'translateX(-50%)';
    }
  }

  if ([BOX_REFS.PLACEMENT.TOP, BOX_REFS.PLACEMENT.BOTTOM].includes(placement) && align === BOX_REFS.ALIGN.END) {
    if (innerNodeLeft + innerNodeWidth - 12 > openerNodeLeft + openerNodeWidth) {
      result.right = innerNodeLeft + innerNodeWidth - 2 - openerNodeLeft - openerNodeWidth;
    } else result.right = '10px';
  }

  return result;
};

const getBoxMargin = (placement, align) => {
  let margin;

  if ([BOX_REFS.PLACEMENT.LEFT, BOX_REFS.PLACEMENT.RIGHT].includes(placement)) {
    margin = '-5px 7px';
  }

  if ([BOX_REFS.PLACEMENT.TOP, BOX_REFS.PLACEMENT.BOTTOM].includes(placement) && align === BOX_REFS.ALIGN.START) {
    margin = '5px -7px';
  }

  if ([BOX_REFS.PLACEMENT.TOP, BOX_REFS.PLACEMENT.BOTTOM].includes(placement) && align !== BOX_REFS.ALIGN.START) {
    margin = '5px 0';
  }
  return margin;
};

export const StyledTooltipBox = styled.div`
  position: relative;
  box-sizing: border-box;
  max-width: 320px;
  opacity: ${({ sParams }) => (sParams.mounted ? 1 : 0)};
  transition: opacity 0.33s ease;
  color: ${({ theme }) => theme.tooltip.box.color};
  background: ${({ theme }) => theme.tooltip.box.backgroundColor};
  border-radius: ${({ theme }) => theme.tooltip.box.borderRadius}px;
  padding: ${({ theme }) => `${theme.tooltip.box.padding[0]}px ${theme.tooltip.box.padding[1]}px`};
  margin: ${({ sPlacement, sAlign }) => getBoxMargin(sPlacement, sAlign)};

  &:after {
    content: '';
    position: absolute;
    box-sizing: border-box;
    display: block;
    border: 8px solid transparent;
    pointer-events: none;
    ${({ theme, sPlacement, sAlign, sParams }) => ({
      ...tooltipBoxIconPositioningVertical(theme, sPlacement, sAlign, sParams),
      ...tooltipBoxIconPositioningHorizontal(sPlacement, sAlign, sParams),
    })}
  }
`;
