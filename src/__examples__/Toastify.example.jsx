import React, { PureComponent } from 'react';

import Toastify, { store } from '../Toastify';
import Grid, { Item } from '../Grid';
import Button from '../Button';

export default class ToastifyExample extends PureComponent {
  onAdd = param => {
    switch (param) {
      case 'normal':
        return store.addNotification({
          type: 'normal',
          title: 'По умолчанию',
          message: 'Тут сообщение нотификации',
          container: 'top-left',
          dismiss: { duration: 0, click: false, showIcon: true },
        });
      case 'success':
        return store.addNotification({
          type: 'success',
          title: 'Успех!',
          message: 'Тут сообщение нотификации',
          container: 'top-center',
          dismiss: { duration: 5000 },
        });
      case 'warning':
        return store.addNotification({
          type: 'warning',
          title: 'Внимание',
          message: 'Тут сообщение нотификации',
          container: 'top-left',
          dismiss: { duration: 5000 },
        });
      case 'error':
        return store.addNotification({
          type: 'error',
          title: 'Ошибка!',
          message: 'Тут сообщение нотификации',
          container: 'top-right',
          dismiss: { duration: 0, click: false, showIcon: true },
        });
      default:
        return null;
    }
  };

  render() {
    return (
      <>
        <Grid>
          <Item>
            <Button id="ToasifyDefault" onClick={() => this.onAdd('normal')}>
              Default
            </Button>
          </Item>
          <Item>
            <Button id="ToasifySuccess" onClick={() => this.onAdd('success')}>
              Success
            </Button>
          </Item>
          <Item>
            <Button id="ToasifyWarning" onClick={() => this.onAdd('warning')}>
              Warning
            </Button>
          </Item>
          <Item>
            <Button id="ToasifyError" onClick={() => this.onAdd('error')}>
              Error
            </Button>
          </Item>
        </Grid>
        <Toastify />
      </>
    );
  }
}
