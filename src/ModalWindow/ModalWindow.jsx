import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../_utils';
import IconClose from '../Icon/IconClose';
import ColorContext from '../_context/colorContext';

import { COMPONENTS, REFS } from './_constants';
import { ModalWindowContext } from './_context';
import {
  StyledModalWindowFade,
  StyledModalWindowWrap,
  StyledModalWindow,
  StyledModalWindowClose,
  StyledModalWindowInner,
} from './_style';

class ModalWindowWithRef extends Component {
  static REFS = { ...REFS };

  static propTypes = {
    children: PropTypes.node.isRequired,
    vAlign: PropTypes.oneOf(Object.values(REFS.V_ALIGN)),
    align: PropTypes.oneOf(Object.values(REFS.ALIGN)),
    type: PropTypes.oneOf(Object.values(REFS.TYPES)),
    isNotClosingOnEscPress: PropTypes.bool,
    isNotClosingOnOutClick: PropTypes.bool,
    isWithoutClosingIcon: PropTypes.bool,
    isWithoutShade: PropTypes.bool,
    isFullWindow: PropTypes.bool,
    padding: PropTypes.number,
    onClose: PropTypes.func,
    forwardedRef: PropTypes.shape({}),
    zIndex: PropTypes.number,
  };

  static defaultProps = {
    vAlign: REFS.V_ALIGN.CENTER,
    align: REFS.ALIGN.CENTER,
    type: REFS.TYPES.NORMAL,
    isNotClosingOnEscPress: false,
    isNotClosingOnOutClick: false,
    isWithoutClosingIcon: false,
    isWithoutShade: false,
    isFullWindow: false,
    padding: 0,
    onClose: () => null,
    forwardedRef: null,
    zIndex: 12,
  };

  constructor(props) {
    super(props);

    this.state = {
      isMounted: false,
      innerNodeHeight: null,
      innerNodeWidth: null,
      windowHeight: null,
      windowWidth: null,
    };

    this.innerNode = React.createRef();
    this.bodyNode = document.body;
    this.bodyNodeStyleOverflow = '';
  }

  componentDidMount() {
    const { isWithoutShade } = this.props;
    if (!isWithoutShade) {
      this.bodyNodeStyleOverflow = window.getComputedStyle(this.bodyNode).overflow;
      this.bodyNode.style.overflow = 'hidden';
    }
    window.addEventListener('resize', this.setOffset);
    document.addEventListener('scroll', this.setOffset);
    document.addEventListener('click', this.handleClick, true);
    document.addEventListener('touchstart', this.handleClick, true);
    document.addEventListener('keydown', this.handleKeyPress);
    this.setOffset();
  }

  componentDidUpdate() {
    const { innerNodeHeight, innerNodeWidth } = this.state;
    const innerNodeBCRect = this.innerNode.current.getBoundingClientRect();
    if (innerNodeHeight !== innerNodeBCRect.height || innerNodeWidth !== innerNodeBCRect.width) {
      this.setOffset();
    }
  }

  componentWillUnmount() {
    const { isWithoutShade } = this.props;
    if (!isWithoutShade) {
      this.bodyNode.style.overflow = this.bodyNodeStyleOverflow;
    }
    window.removeEventListener('resize', this.setOffset);
    document.removeEventListener('scroll', this.setOffset);
    document.removeEventListener('click', this.handleClick, true);
    document.removeEventListener('touchstart', this.handleClick, true);
    document.removeEventListener('keypress', this.handleKeyPress);
  }

  setOffset = () => {
    if (!this.innerNode || !this.innerNode.current) return;
    const innerNodeBCRect = this.innerNode.current.getBoundingClientRect();

    this.setState({
      isMounted: true,
      innerNodeHeight: innerNodeBCRect.height,
      innerNodeWidth: innerNodeBCRect.width,
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
    });
  };

  handleClick = e => {
    const { isNotClosingOnOutClick, onClose } = this.props;
    if (!isNotClosingOnOutClick && !this.innerNode.current.contains(e.target)) {
      e.preventDefault();
      onClose();
    }
  };

  handleKeyPress = e => {
    const { isNotClosingOnEscPress, onClose } = this.props;
    if (!isNotClosingOnEscPress && e.which === 27) {
      onClose();
    }
  };

  render() {
    const {
      isWithoutShade,
      zIndex,
      forwardedRef,
      vAlign,
      align,
      children,
      isWithoutClosingIcon,
      onClose,
      isFullWindow,
      padding,
      ...rest
    } = this.props;
    const { isMounted, windowHeight, windowWidth } = this.state;

    return createPortal(
      <ColorContext.Consumer>
        {({ colorType = 'normal' }) => (
          <>
            {!isWithoutShade && (
              <StyledModalWindowFade
                {...addDataAttributes({ component: COMPONENTS.MODAL_WINDOW_FADE })}
                zIndex={zIndex}
              />
            )}
            <StyledModalWindowWrap sVAlign={vAlign} sAlign={align} zIndex={zIndex}>
              <StyledModalWindow
                {...addDataAttributes({ component: COMPONENTS.MODAL_WINDOW })}
                ref={forwardedRef || null}
                isMounted={isMounted}
                sColorType={colorType}
                {...rest}
              >
                <ModalWindowContext.Provider value={{ popupBoxZIndex: 14 }}>
                  <StyledModalWindowInner
                    ref={this.innerNode}
                    isFullWindow={isFullWindow}
                    sWindowHeight={windowHeight}
                    sWindowWidth={windowWidth}
                    sPadding={padding}
                  >
                    {children}
                  </StyledModalWindowInner>
                  {!isWithoutClosingIcon && (
                    <StyledModalWindowClose sColorType={colorType} onClick={onClose}>
                      <IconClose display={IconClose.REFS.DISPLAY.BLOCK} size={IconClose.REFS.SIZES.S} />
                    </StyledModalWindowClose>
                  )}
                </ModalWindowContext.Provider>
              </StyledModalWindow>
            </StyledModalWindowWrap>
          </>
        )}
      </ColorContext.Consumer>,
      this.bodyNode,
    );
  }
}

const ModalWindow = React.forwardRef((props, ref) => <ModalWindowWithRef {...props} forwardedRef={ref} />);

ModalWindow.REFS = { ...REFS };

ModalWindow.propTypes = {
  children: PropTypes.node.isRequired,
  vAlign: PropTypes.oneOf(Object.values(REFS.V_ALIGN)),
  align: PropTypes.oneOf(Object.values(REFS.ALIGN)),
  isNotClosingOnEscPress: PropTypes.bool,
  isNotClosingOnOutClick: PropTypes.bool,
  isWithoutClosingIcon: PropTypes.bool,
  isWithoutShade: PropTypes.bool,
  isFullWindow: PropTypes.bool,
  padding: PropTypes.number,
  onClose: PropTypes.func,
};

ModalWindow.defaultProps = {
  vAlign: REFS.V_ALIGN.CENTER,
  align: REFS.ALIGN.CENTER,
  isNotClosingOnEscPress: false,
  isNotClosingOnOutClick: false,
  isWithoutClosingIcon: false,
  isWithoutShade: false,
  isFullWindow: false,
  padding: 0,
  onClose: () => null,
};

export default ModalWindow;
