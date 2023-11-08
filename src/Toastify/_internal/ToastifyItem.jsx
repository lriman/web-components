import React, { Component, isValidElement } from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';
import NotificationSticker from '../../NotificationSticker';

import { COMPONENTS, REMOVAL, CONTAINER } from '../_constants';
import {
  StyledToastifyItem,
  StyledToastifyItemContent,
  StyledToastifyItemTitle,
  StyledToastifyItemMessage,
} from '../_style';
import Timer from '../_timer';

export default class ToastifyItem extends Component {
  static propTypes = {
    notification: PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      container: PropTypes.string,
      content: PropTypes.node,
      title: PropTypes.node,
      message: PropTypes.node,
      dismiss: PropTypes.shape({
        duration: PropTypes.number,
        click: PropTypes.bool,
        showIcon: PropTypes.bool,
        pauseOnHover: PropTypes.bool,
      }),
      onRemoval: PropTypes.func,
    }).isRequired,
    toggleRemoval: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired,
    removed: PropTypes.bool,
  };

  static defaultProps = {
    removed: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      height: null,
      isRemoving: false,
    };

    this.element = React.createRef();
  }

  componentDidMount() {
    const { notification } = this.props;
    const {
      dismiss: { duration },
    } = notification;

    if (!duration) return;
    this.timer = new Timer(() => this.removeNotification(REMOVAL.TIMEOUT), duration);
  }

  componentDidUpdate({ removed }) {
    const { removed: RemovedProp } = this.props;
    if (RemovedProp && !removed) {
      this.removeNotification(REMOVAL.MANUAL);
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      this.timer.clear();
    }
  }

  onClick = () => {
    const {
      notification: { dismiss },
    } = this.props;
    if (dismiss.click || dismiss.showIcon) {
      this.removeNotification(REMOVAL.CLICK);
    }
  };

  onMouseEnter = () => {
    if (this.timer) {
      this.timer.pause();
    }
  };

  onMouseLeave = () => {
    if (this.timer) {
      this.timer.resume();
    }
  };

  removeNotification(removalFlag) {
    const { notification, toggleRemoval } = this.props;
    const { id, onRemoval } = notification;

    this.setState({ isRemoving: true, height: this.element.current.getBoundingClientRect().height });

    setTimeout(() => {
      toggleRemoval(id, () => onRemoval(id, removalFlag));
    }, 500);
  }

  renderCustomContent() {
    const {
      notification: {
        id,
        content: CustomContent,
        type,
        dismiss: { showIcon, duration, pauseOnHover },
      },
    } = this.props;
    const hasMouseEvents = duration > 0 && pauseOnHover;

    return (
      <NotificationSticker
        type={type}
        onClose={showIcon ? this.onClick : undefined}
        onMouseEnter={hasMouseEvents ? this.onMouseEnter : null}
        onMouseLeave={hasMouseEvents ? this.onMouseLeave : null}
      >
        {isValidElement(CustomContent) ? CustomContent : <CustomContent {...{ id }} />}
      </NotificationSticker>
    );
  }

  renderNotification() {
    const {
      notification: {
        type,
        title,
        message,
        dismiss: { showIcon, duration, pauseOnHover },
      },
    } = this.props;
    const hasMouseEvents = duration > 0 && pauseOnHover;

    return (
      <NotificationSticker
        type={type}
        onClose={showIcon ? this.onClick : undefined}
        onMouseEnter={hasMouseEvents ? this.onMouseEnter : null}
        onMouseLeave={hasMouseEvents ? this.onMouseLeave : null}
      >
        <StyledToastifyItemContent>
          {title && <StyledToastifyItemTitle>{title}</StyledToastifyItemTitle>}
          {<StyledToastifyItemMessage>{message}</StyledToastifyItemMessage>}
        </StyledToastifyItemContent>
      </NotificationSticker>
    );
  }

  render() {
    const {
      notification: {
        container,
        content,
        dismiss: { click },
      },
    } = this.props;
    const { isRemoving, height } = this.state;
    let className =
      container === CONTAINER.TOP_LEFT || container === CONTAINER.BOTTOM_LEFT
        ? 'ds-toastify-item-m-left'
        : 'ds-toastify-item-m-right';
    if (isRemoving) className = 'ds-toastify-item-s-removing';

    return (
      <StyledToastifyItem
        {...addDataAttributes({ component: COMPONENTS.ITEM })}
        ref={this.element}
        onClick={click ? this.onClick : null}
        className={className}
        sHeight={height}
      >
        {content ? this.renderCustomContent() : this.renderNotification()}
      </StyledToastifyItem>
    );
  }
}
