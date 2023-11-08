import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { PopupContext } from './_context';
import PopupOpener from './_internal/PopupOpener';
import PopupBox from './_internal/PopupBox';

export default class Popup extends PureComponent {
  static propTypes = {
    isOpened: PropTypes.bool,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    isStopPropagation: PropTypes.bool,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    isOpened: undefined,
    isStopPropagation: false,
    onOpen: () => null,
    onClose: () => null,
  };

  constructor(props) {
    super(props);

    const { isOpened, isStopPropagation } = this.props;

    this.state = {
      openerNode: null,
      setOpenerNode: this.setOpenerNode,
      isOpened,
      isStopPropagation,
      onOpen: this.onOpen,
      onClose: this.onClose,
      onToggle: this.onToggle,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.isOpened !== undefined && props.isOpened !== state.isOpened) {
      return { isOpened: props.isOpened };
    }
    return null;
  }

  onOpen = () => {
    const { onOpen } = this.props;
    this.setState({ isOpened: true });
    onOpen();
  };

  onClose = () => {
    const { onClose } = this.props;
    this.setState({ isOpened: false });
    onClose();
  };

  onToggle = () => {
    const { isOpened } = this.state;
    if (isOpened) this.onClose();
    else this.onOpen();
  };

  setOpenerNode = node => {
    this.setState({ openerNode: node });
  };

  render() {
    const { children } = this.props;
    return <PopupContext.Provider value={{ ...this.state }}>{children}</PopupContext.Provider>;
  }
}

Popup.Opener = PopupOpener;
Popup.Box = PopupBox;
