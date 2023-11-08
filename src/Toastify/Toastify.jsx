import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import { MEDIA_BREAKPOINTS } from '../_constants';
import { addDataAttributes } from '../_utils';

import { COMPONENTS } from './_constants';
import store from './store';
import { getNotificationsForEachContainer, getNotificationsForMobileView } from './_utils';
import {
  StyledToastify,
  StyledToastifyContainerTopCenter,
  StyledToastifyContainerBottomCenter,
  StyledToastifyContainerTopLeft,
  StyledToastifyContainerTopRight,
  StyledToastifyContainerBottomLeft,
  StyledToastifyContainerBottomRight,
  StyledToastifyContainerMobileTop,
  StyledToastifyContainerMobileBottom,
} from './_style';
import ToastifyItem from './_internal/ToastifyItem';

export default class Toastify extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 0,
      notifications: [],
    };

    this.bodyNode = document.body;
  }

  componentDidMount() {
    store.register({
      addNotification: this.add,
      removeNotification: this.remove,
    });

    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({ width: window.innerWidth });
  };

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

  toggleRemoval = (id, callback) => {
    this.setState(
      ({ notifications }) => ({
        notifications: notifications.filter(({ id: nId }) => nId !== id),
      }),
      callback,
    );
  };

  renderNotifications(notifications) {
    return notifications.map(notification => (
      <ToastifyItem
        key={notification.id}
        notification={notification}
        toggleRemoval={this.toggleRemoval}
        count={notifications.length}
        removed={notification.removed}
      />
    ));
  }

  renderMobileNotifications() {
    const { notifications } = this.state;
    const mobileNotifications = getNotificationsForMobileView(notifications);
    const top = this.renderNotifications(mobileNotifications.top);
    const bottom = this.renderNotifications(mobileNotifications.bottom);

    return (
      <>
        <StyledToastifyContainerMobileTop>{top}</StyledToastifyContainerMobileTop>
        <StyledToastifyContainerMobileBottom>{bottom}</StyledToastifyContainerMobileBottom>
      </>
    );
  }

  renderScreenNotifications() {
    const { notifications } = this.state;
    const notificationsPerContainer = getNotificationsForEachContainer(notifications);
    const topLeft = this.renderNotifications(notificationsPerContainer.topLeft);
    const topRight = this.renderNotifications(notificationsPerContainer.topRight);
    const topCenter = this.renderNotifications(notificationsPerContainer.topCenter);
    const bottomLeft = this.renderNotifications(notificationsPerContainer.bottomLeft);
    const bottomRight = this.renderNotifications(notificationsPerContainer.bottomRight);
    const bottomCenter = this.renderNotifications(notificationsPerContainer.bottomCenter);

    return (
      <>
        <StyledToastifyContainerTopLeft>{topLeft}</StyledToastifyContainerTopLeft>
        <StyledToastifyContainerTopRight>{topRight}</StyledToastifyContainerTopRight>
        <StyledToastifyContainerBottomLeft>{bottomLeft}</StyledToastifyContainerBottomLeft>
        <StyledToastifyContainerBottomRight>{bottomRight}</StyledToastifyContainerBottomRight>
        <StyledToastifyContainerTopCenter>{topCenter}</StyledToastifyContainerTopCenter>
        <StyledToastifyContainerBottomCenter>{bottomCenter}</StyledToastifyContainerBottomCenter>
      </>
    );
  }

  render() {
    const { width } = this.state;

    return createPortal(
      <StyledToastify {...addDataAttributes({ component: COMPONENTS.GENERAL })}>
        {width <= MEDIA_BREAKPOINTS.TABLET ? this.renderMobileNotifications() : this.renderScreenNotifications()}
      </StyledToastify>,
      this.bodyNode,
    );
  }
}
