import { parseNotification } from './_utils';
import { validators } from './_validators';

function Store() {
  this.add = () => {};

  this.addNotification = notification => {
    if (process.env.NODE_ENV === 'development') {
      validators.forEach(validator => validator(notification));
    }

    return this.add(parseNotification(notification));
  };

  this.removeNotification = () => {};
  this.removeAllNotifications = () => {};

  this.register = ({ addNotification, removeNotification, removeAllNotifications }) => {
    this.add = addNotification;
    this.removeNotification = removeNotification;
    this.removeAllNotifications = removeAllNotifications;
  };

  return this;
}

export default new Store();
