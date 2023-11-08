import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';
import ColorContext from '../../_context/colorContext';
import { ModalWindowContext } from '../../ModalWindow/_context';

import { PopupContext } from '../_context';
import { COMPONENTS, BOX_REFS as REFS } from '../_constants';
import { StyledPopupBox, StyledPopupBoxInner } from '../_style';

class PopupBoxWithContext extends Component {
  static propTypes = {
    openerNode: PropTypes.shape({}),
    placement: PropTypes.oneOf(Object.values(REFS.PLACEMENT)),
    align: PropTypes.oneOf(Object.values(REFS.ALIGN)),
    zIndex: PropTypes.number,
    isNotClosingOnEscPress: PropTypes.bool,
    isClosingOnMouseLeave: PropTypes.bool,
    isTransparent: PropTypes.bool,
    overflow: PropTypes.string,
    colorType: PropTypes.string,
    onClose: PropTypes.func,
    children: PropTypes.element.isRequired,
  };

  static defaultProps = {
    openerNode: null,
    placement: REFS.PLACEMENT.BOTTOM,
    align: REFS.ALIGN.START,
    zIndex: 9,
    isNotClosingOnEscPress: false,
    isClosingOnMouseLeave: false,
    isTransparent: false,
    overflow: 'auto',
    colorType: undefined,
    onClose: () => null,
  };

  constructor(props) {
    super(props);

    const { openerNode } = this.props;

    this.state = {
      isMounted: false,
      openerNode,
      openerNodeTop: null,
      openerNodeLeft: null,
      openerNodeHeight: null,
      openerNodeWidth: null,
      innerNodeHeight: null,
      innerNodeWidth: null,
    };

    this.node = React.createRef();
    this.innerNode = React.createRef();
    this.bodyNode = document.body;
  }

  static getDerivedStateFromProps(props, state) {
    if (props.openerNode && !state.openerNode) {
      return { openerNode: props.openerNode };
    }
    return null;
  }

  componentDidMount() {
    window.addEventListener('resize', this.setOffset);
    document.addEventListener('scroll', this.setOffset, true);
    document.addEventListener('click', this.handleClick);
    document.addEventListener('touchstart', this.handleClick);
    document.addEventListener('keydown', this.handleKeyPress);
    document.addEventListener('mousemove', this.handleOnPointerMove);
    setTimeout(this.setOffset, 0);
  }

  componentDidUpdate() {
    const { innerNodeHeight, innerNodeWidth } = this.state;
    const innerNodeBCRect = this.innerNode.current.getBoundingClientRect();
    if (innerNodeHeight !== innerNodeBCRect.height || innerNodeWidth !== innerNodeBCRect.width) {
      this.setOffset();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setOffset);
    document.removeEventListener('scroll', this.setOffset);
    document.removeEventListener('click', this.handleClick);
    document.removeEventListener('touchstart', this.handleClick);
    document.removeEventListener('keydown', this.handleKeyPress);
    document.removeEventListener('mousemove', this.handleOnPointerMove);
  }

  setOffset = () => {
    const { openerNode } = this.state;
    if (!openerNode || !openerNode.current || !this.innerNode || !this.innerNode.current) return;
    const openerNodeBCRect = openerNode.current.getBoundingClientRect();
    const innerNodeBCRect = this.innerNode.current.getBoundingClientRect();

    this.setState({
      isMounted: true,
      openerNodeTop: openerNodeBCRect.top,
      openerNodeLeft: openerNodeBCRect.left,
      openerNodeHeight: openerNodeBCRect.height,
      openerNodeWidth: openerNodeBCRect.width,
      innerNodeHeight: innerNodeBCRect.height,
      innerNodeWidth: innerNodeBCRect.width,
    });
  };

  getPositioningParams = () => {
    const {
      openerNodeTop,
      openerNodeLeft,
      openerNodeHeight,
      openerNodeWidth,
      innerNodeHeight,
      innerNodeWidth,
    } = this.state;
    return {
      openerNodeTop,
      openerNodeLeft,
      openerNodeHeight,
      openerNodeWidth,
      innerNodeHeight,
      innerNodeWidth,
    };
  };

  handleClick = e => {
    const { onClose } = this.props;
    const { openerNode } = this.state;

    if (!this.node.current.contains(e.target) && !openerNode.current.contains(e.target)) {
      e.preventDefault();
      onClose();
    }
  };

  handlePopupClick = e => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };

  handleKeyPress = e => {
    const { isNotClosingOnEscPress, onClose } = this.props;
    if (!isNotClosingOnEscPress && e.which === 27) onClose();
  };

  handleOnPointerMove = e => {
    const { isClosingOnMouseLeave, onClose } = this.props;
    const { openerNode } = this.state;

    if (isClosingOnMouseLeave && !this.node.current.contains(e.target) && !openerNode.current.contains(e.target))
      onClose();
  };

  render() {
    const { placement, align, zIndex, colorType, isTransparent, overflow, children } = this.props;
    const { isMounted } = this.state;

    return createPortal(
      <StyledPopupBox
        {...addDataAttributes({ component: COMPONENTS.BOX })}
        ref={this.node}
        isMounted={isMounted}
        sPlacement={placement}
        sAlign={align}
        sPositioningParams={this.getPositioningParams()}
        sZIndex={zIndex}
        sColorType={colorType}
        isTransparent={isTransparent}
        sOverflow={overflow}
        onClick={this.handlePopupClick}
      >
        <StyledPopupBoxInner sColorType={colorType} ref={this.innerNode}>
          {children}
        </StyledPopupBoxInner>
      </StyledPopupBox>,
      this.bodyNode,
    );
  }
}

const PopupBox = props => (
  <PopupContext.Consumer>
    {({ openerNode, isOpened, onClose }) =>
      isOpened ? (
        <ModalWindowContext.Consumer>
          {({ popupBoxZIndex: modalWindowPopupBoxZIndex }) => (
            <ColorContext.Consumer>
              {({ colorType = 'normal' }) => (
                <PopupBoxWithContext
                  zIndex={modalWindowPopupBoxZIndex}
                  {...props}
                  openerNode={openerNode}
                  colorType={colorType}
                  onClose={onClose}
                />
              )}
            </ColorContext.Consumer>
          )}
        </ModalWindowContext.Consumer>
      ) : null
    }
  </PopupContext.Consumer>
);

PopupBox.propTypes = {
  placement: PropTypes.oneOf(Object.values(REFS.PLACEMENT)),
  align: PropTypes.oneOf(Object.values(REFS.ALIGN)),
  isNotClosingOnEscPress: PropTypes.bool,
  isClosingOnMouseLeave: PropTypes.bool,
  children: PropTypes.element.isRequired,
};

PopupBox.defaultProps = {
  placement: REFS.PLACEMENT.BOTTOM,
  align: REFS.ALIGN.START,
  isNotClosingOnEscPress: false,
  isClosingOnMouseLeave: false,
};

PopupBox.REFS = { ...REFS };

export default PopupBox;
