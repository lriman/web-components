```jsx
import Layout from '../Layout';

const items = [
    {
        id: 'settings',
        title: 'Настройки',
        type: 'section',
        opened: true,
        items: [
            {
                id: 'confidentiality',
                title: 'Конфиденциальность',
                type: 'link',
                active: true,
            },
            {
                id: 'blackList',
                title: 'Заблокированные пользователи',
                type: 'link',
                active: false,
            },
            {
                id: 'notifications',
                title: 'Уведомления',
                type: 'link',
                active: false,
                disabled: true,
            },
        ],
    },
    {
        id: 'gameSettings',
        title: 'Настройки игры',
        type: 'section',
        opened: false,
        items: [
            {
                id: 'quick',
                title: 'Пуля / Блиц / Рапид',
                type: 'link',
                active: false,
            },
            {
                id: 'long',
                title: 'Классическая / Дневная ',
                type: 'link',
                active: false,
            },
        ],
    },
];

<div className="omay-ds-block" style={{ height: 800 }}>
  <Layout>
    <Layout.Section type="main">
      <Layout.Block>
        <NavigationLite items={items} onItemClick={id => console.log(id)} />
      </Layout.Block>
    </Layout.Section>
  </Layout>
</div>;
```
