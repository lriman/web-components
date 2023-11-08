import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';

import { COMPONENTS, OPENER_REFS as REFS } from '../_constants';
import { PopupContext } from '../_context';
import { StyledPopupOpener } from '../_style';

class PopupOpenerWithContext extends PureComponent {
  static propTypes = {
    display: PropTypes.oneOf(Object.values(REFS.DISPLAY)),
    setOpenerNode: PropTypes.func.isRequired,
    onToggle: PropTypes.func,
    onOpen: PropTypes.func,
    isStopPropagation: PropTypes.bool,
    isNotAutoOpen: PropTypes.bool,
    isOpenOnMouseOver: PropTypes.bool,
    children: PropTypes.element.isRequired,
  };

  static defaultProps = {
    display: REFS.DISPLAY.INLINE,
    onToggle: () => null,
    onOpen: () => null,
    isStopPropagation: false,
    isNotAutoOpen: false,
    isOpenOnMouseOver: false,
  };

  constructor(props) {
    super(props);

    this.node = React.createRef();
  }

  componentDidMount() {
    const { setOpenerNode } = this.props;
    setOpenerNode(this.node);
  }

  handleClick = e => {
    const { isStopPropagation, isNotAutoOpen, onToggle } = this.props;

    if (isStopPropagation) {
      e.preventDefault();
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
    }
    if (!isNotAutoOpen) onToggle(e);
  };

  handleMouseOver = e => {
    const { isOpenOnMouseOver, onOpen } = this.props;
    if (isOpenOnMouseOver) onOpen(e);
  };

  render() {
    const { display, children } = this.props;

    return (
      <StyledPopupOpener  /* eslint-disable-line */
        {...addDataAttributes({ component: COMPONENTS.OPENER })}
        ref={this.node}
        sDisplay={display}
        onClick={this.handleClick}
        onMouseOver={this.handleMouseOver}  /* eslint-disable-line */
      >
        {children}
      </StyledPopupOpener>
    );
  }
}

const PopupOpener = props => (
  <PopupContext.Consumer>
    {({ setOpenerNode, isStopPropagation, onToggle, onOpen }) => (
      <PopupOpenerWithContext
        {...props}
        setOpenerNode={setOpenerNode}
        onToggle={onToggle}
        onOpen={onOpen}
        isStopPropagation={isStopPropagation}
      />
    )}
  </PopupContext.Consumer>
);

PopupOpener.REFS = REFS;

export default PopupOpener;
