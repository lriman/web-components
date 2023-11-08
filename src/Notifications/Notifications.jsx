import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import store from './store';
import Toast from './Toast';

import { StyledToastsWrapper } from './style';

export default class Notifications extends Component {
  static propTypes = {
    nodeId: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      notifications: [],
    };

    this.bodyNode = document.body;
  }

  componentDidMount() {
    store.register({
      addNotification: this.add,
      removeNotification: this.remove,
      removeAllNotifications: this.removeAll,
    });
  }

  add = notification => {
    this.setState(({ notifications }) => ({
      notifications:
        notification.insert === 'top' ? [notification, ...notifications] : [...notifications, notification],
    }));

    return notification.id;
  };

  remove = id => {
    this.setState(({ notifications }) => ({
      notifications: notifications.map(notification => {
        if (notification.id === id) return { ...notification, removed: true };
        return notification;
      }),
    }));
  };

  removeAll = () => {
    this.setState(() => ({
      notifications: [],
    }));
  };

  toggleRemoval = (id, callback) => {
    this.setState(
      ({ notifications }) => ({
        notifications: notifications.filter(({ id: nId }) => nId !== id),
      }),
      callback,
    );
  };

  render() {
    const { nodeId } = this.props;
    const { notifications } = this.state;

    const domElement = document.getElementById(nodeId);
    if (!domElement) return null;

    return createPortal(
      <StyledToastsWrapper>
        {notifications.map(notification => (
          <Toast key={notification.id} remove={() => this.toggleRemoval(notification.id)} notification={notification} />
        ))}
      </StyledToastsWrapper>,
      domElement,
    );
  }
}
