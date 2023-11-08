```jsx
import Layout from '../Layout';

const items = [
    {
        id: 'newGame',
        title: 'Новая партия',
        active: false,
    },
    {
        id: 'games',
        title: 'Играть',
        active: false,
    },
    {
        id: 'news',
        title: 'Новости',
        active: false,
    },
    {
        id: 'support',
        title: 'Поддержка',
        active: false,
    },
    {
        id: 'contacts',
        title: 'Контакты',
        active: false,
    },
    {
        id: 'personalData',
        title: 'Персональные данные',
        active: true,
    },
];

<div className="omay-ds-block">
<Layout>
        <Layout.Section type="normal">
            <Layout.Block>                
              <Tabs items={items} onItemClick={id => console.log(id)} />
            </Layout.Block>
        </Layout.Section>
        <Layout.Section type="main">
            <Layout.Block>                
              <Tabs items={items} onItemClick={id => console.log(id)} />
            </Layout.Block>
        </Layout.Section>
    </Layout>    
</div>
```
