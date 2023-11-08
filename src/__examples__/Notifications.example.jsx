import React, { PureComponent } from 'react';

import { Notifications, store } from '../Notifications';
import Grid, { Item } from '../Grid';
import Button from '../Button';
import Card from '../Card';
import Block from '../Typography/Block';

export default class NotificationsExample extends PureComponent {
  onAdd = param => {
    switch (param) {
      case 'default':
        return store.addNotification({
          type: 'default',
          title: 'По умолчанию',
          message: 'Тут сообщение нотификации',
          dismiss: { duration: 5000, click: false, showIcon: true },
        });
      case 'answer':
        return store.addNotification({
          type: 'answer',
          title: 'По умолчанию',
          message: 'Тут сообщение нотификации',
          dismiss: { duration: 5000, click: false, showIcon: true },
        });
      case 'error':
        return store.addNotification({
          type: 'error',
          title: 'Ваша партия будет прервана',
          message: 'автоматически через',
          dismiss: { duration: 60000, click: false, showIcon: true, timer: 60 },
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
            <Button id="ToasifyDefault" onClick={() => this.onAdd('default')}>
              Default
            </Button>
          </Item>
          <Item>
            <Button id="ToasifyAnswer" onClick={() => this.onAdd('answer')}>
              Answer
            </Button>
          </Item>
          <Item>
            <Button id="ToasifyAnswer" onClick={() => this.onAdd('error')}>
              Error
            </Button>
          </Item>
          <Item>
            <Card
              id="portal"
              style={{ position: 'relative', width: '600px', height: '600px', border: '1px solid gray' }}
            >
              <Block textAlign={Block.REFS.TEXT_ALIGN.CENTER} padding={Block.REFS.PADDING.XL}>
                Тут будут сообщения нотификации
              </Block>
            </Card>
          </Item>
        </Grid>
        <Notifications nodeId="portal" />
      </>
    );
  }
}
