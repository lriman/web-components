```jsx
import Layout from '../Layout';

const labels = {
  drag: 'Перетащите сюда файл',
  or: 'или',
  add: 'Выберите фото на вашем компьютере',
  cancel: 'Отменить',
  submit: 'Применить',
};

<div className="omay-ds-block m-clear-indent">
  <Layout>
    <Layout.Section type="main">
      <Layout.Block>        
        <AvatarUploader id="test" labels={labels} onSubmit={image => { console.log(image); }} />
      </Layout.Block>
    </Layout.Section>
  </Layout>
</div>;
```
