```js static
REFS: {
  TYPES: {
    DEFAULT: 'default',
    SUCCESS: 'success',
    WARNING: 'warning',
    ERROR: 'error',
  },
}
```

### Типы
```jsx
<div className="omay-ds-block" style={{ width: 280 }}>
  <div className="omay-ds-block">
    <NotificationSticker
      type={NotificationSticker.REFS.TYPES.NORMAL}
      message="В ближайшее время магазин сообщит вам о готовности заказа"
    />
  </div>
  <div className="omay-ds-block">
    <NotificationSticker
      type={NotificationSticker.REFS.TYPES.SUCCESS}
      message="Мы получили все ваши фотографии и готовы предоставить вам кредит"
    />
  </div>
  <div className="omay-ds-block">
    <NotificationSticker
      type={NotificationSticker.REFS.TYPES.WARNING}
      message="Внимательно введите код и попробуйте отправить еще раз"
    />
  </div>
  <div className="omay-ds-block">
    <NotificationSticker
      type={NotificationSticker.REFS.TYPES.ERROR}
      message="Проверьте данные и попробуйте отправить заявку еще раз"
    />
  </div>
</div>
```

### С возвожностью закрыть
```jsx
<div className="omay-ds-block" style={{ width: 280 }}>
  <div className="omay-ds-block">
    <NotificationSticker
      type={NotificationSticker.REFS.TYPES.NORMAL}
      message="В ближайшее время магазин сообщит вам о готовности заказа"
      onClose={() => {console.log('close');}}
    />
  </div>
  <div className="omay-ds-block">
    <NotificationSticker
      type={NotificationSticker.REFS.TYPES.SUCCESS}
      message="Мы получили все ваши фотографии"
      onClose={() => {console.log('close');}}
    />
  </div>
  <div className="omay-ds-block">
    <NotificationSticker
      type={NotificationSticker.REFS.TYPES.WARNING}
      message="Внимательно введите код и попробуйте отправить еще раз"
      onClose={() => {console.log('close');}}
    />
  </div>
  <div className="omay-ds-block">
    <NotificationSticker
      type={NotificationSticker.REFS.TYPES.ERROR}
      message="Проверьте данные и попробуйте отправить заявку еще раз"
      onClose={() => {console.log('close');}}
    />
  </div>
</div>
```
