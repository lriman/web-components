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

  this.register = ({ addNotification, removeNotification }) => {
    this.add = addNotification;
    this.removeNotification = removeNotification;
  };

  return this;
}

export default new Store();
