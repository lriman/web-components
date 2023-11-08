import { CONTAINER } from './_constants';

const getRandomId = () => Math.random().toString(36).substr(2, 9);
const isNull = object => object === null || object === undefined;

export function isBottomContainer(container) {
  return (
    container === CONTAINER.BOTTOM_LEFT || container === CONTAINER.BOTTOM_RIGHT || container === CONTAINER.BOTTOM_CENTER
  );
}

export function isTopContainer(container) {
  return container === CONTAINER.TOP_LEFT || container === CONTAINER.TOP_RIGHT || container === CONTAINER.TOP_CENTER;
}

export function getNotificationsForMobileView(notifications) {
  const top = [];
  const bottom = [];

  notifications.forEach(notification => {
    const { container } = notification;
    if (isTopContainer(container)) {
      top.push(notification);
    } else if (isBottomContainer(container)) {
      bottom.push(notification);
    }
  });

  return { top, bottom };
}

export function getNotificationsForEachContainer(notifications) {
  const topLeft = [];
  const topRight = [];
  const topCenter = [];
  const bottomLeft = [];
  const bottomRight = [];
  const bottomCenter = [];

  notifications.forEach(notification => {
    const { container } = notification;
    if (container === CONTAINER.TOP_LEFT) {
      topLeft.push(notification);
    } else if (container === CONTAINER.TOP_RIGHT) {
      topRight.push(notification);
    } else if (container === CONTAINER.TOP_CENTER) {
      topCenter.push(notification);
    } else if (container === CONTAINER.BOTTOM_LEFT) {
      bottomLeft.push(notification);
    } else if (container === CONTAINER.BOTTOM_RIGHT) {
      bottomRight.push(notification);
    } else if (container === CONTAINER.BOTTOM_CENTER) {
      bottomCenter.push(notification);
    }
  });

  return {
    topLeft,
    topRight,
    topCenter,
    bottomLeft,
    bottomRight,
    bottomCenter,
  };
}

function defaultDismiss(dismiss) {
  const option = dismiss;
  const defaults = {
    duration: 0,
    click: true,
    onScreen: false,
    waitForAnimation: false,
    showIcon: false,
  };

  if (!option) {
    return defaults;
  }

  Object.keys(defaults).forEach(prop => {
    if (isNull(option[prop])) {
      option[prop] = defaults[prop];
    }
  });

  return option;
}

export function parseNotification(options) {
  const notification = options;
  const { id, type, insert, container, dismiss, onRemoval } = notification;

  notification.id = id || getRandomId();
  notification.type = type.toLowerCase();

  notification.container = container.toLowerCase();
  notification.insert = (insert || 'bottom').toLowerCase();
  notification.dismiss = defaultDismiss(dismiss);
  notification.onRemoval = onRemoval || (() => {});

  return notification;
}
