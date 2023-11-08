const getRandomId = () => Math.random().toString(36).substr(2, 9);
const isNull = object => object === null || object === undefined;

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
  const { id, type, insert, dismiss, onRemoval } = notification;

  notification.id = id || getRandomId();
  notification.type = type.toLowerCase();

  notification.insert = (insert || 'bottom').toLowerCase();
  notification.dismiss = defaultDismiss(dismiss);
  notification.onRemoval = onRemoval || (() => {});

  return notification;
}
