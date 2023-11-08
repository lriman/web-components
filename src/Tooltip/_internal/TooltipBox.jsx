import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';
import PopupBox from '../../Popup/_internal/PopupBox';
import { PopupContext } from '../../Popup/_context';

import { COMPONENTS, BOX_REFS as REFS } from '../_constants';
import { StyledTooltipBox } from '../_style';

const TooltipBoxWithContext = props => {
  const { placement, align, openerNode, children } = props;
  const innerNodeRef = useRef();

  const [params, setParams] = useState({});

  const handleResize = () => { // eslint-disable-line
    if (innerNodeRef?.current) {
      const openerNodeBCRect = openerNode.current.getBoundingClientRect();
      const innerNodeBCRect = innerNodeRef.current.getBoundingClientRect();

      setParams({
        mounted: true,
        openerNodeTop: openerNodeBCRect.top,
        openerNodeLeft: openerNodeBCRect.left,
        openerNodeHeight: openerNodeBCRect.height,
        openerNodeWidth: openerNodeBCRect.width,

        innerNodeTop: innerNodeBCRect.top,
        innerNodeLeft: innerNodeBCRect.left,
        innerNodeHeight: innerNodeBCRect.height,
        innerNodeWidth: innerNodeBCRect.width,
      });
    }
  };

  useEffect(() => {
    if (innerNodeRef.current) setTimeout(handleResize, 0);
    window.addEventListener('resize', handleResize);
    document.addEventListener('scroll', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('scroll', handleResize);
    };
  }, [innerNodeRef, handleResize]);

  return (
    <PopupBox {...props} overflow="visible" isTransparent>
      <StyledTooltipBox
        {...addDataAttributes({ component: COMPONENTS.BOX })}
        sPlacement={placement}
        sAlign={align}
        sParams={params}
        ref={innerNodeRef}
      >
        {children}
      </StyledTooltipBox>
    </PopupBox>
  );
};

TooltipBoxWithContext.propTypes = {
  openerNode: PropTypes.shape(),
  placement: PropTypes.oneOf(Object.values(REFS.PLACEMENT)),
  align: PropTypes.oneOf(Object.values(REFS.ALIGN)),
  zIndex: PropTypes.number,
  children: PropTypes.element.isRequired,
};

TooltipBoxWithContext.defaultProps = {
  openerNode: null,
  placement: REFS.PLACEMENT.BOTTOM,
  align: REFS.ALIGN.START,
  zIndex: 9,
};

const TooltipBox = props => (
  <PopupContext.Consumer>
    {({ openerNode, isOpened }) => (isOpened ? <TooltipBoxWithContext {...props} openerNode={openerNode} /> : null)}
  </PopupContext.Consumer>
);

TooltipBox.propTypes = {
  placement: PropTypes.oneOf(Object.values(REFS.PLACEMENT)),
  align: PropTypes.oneOf(Object.values(REFS.ALIGN)),
  isNotClosingOnEscPress: PropTypes.bool,
  isClosingOnMouseLeave: PropTypes.bool,
  padding: PropTypes.string,
  children: PropTypes.element.isRequired,
};

TooltipBox.defaultProps = {
  placement: REFS.PLACEMENT.BOTTOM,
  align: REFS.ALIGN.CENTER,
  padding: null,
  isNotClosingOnEscPress: false,
  isClosingOnMouseLeave: false,
};

export default TooltipBox;
