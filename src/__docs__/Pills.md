```jsx
import Layout from '../Layout';
import IconChessboard3x3 from '../Icon/IconChessboard3x3';

const items = [
  {
    id: 'newGame',
    title: 'Новая партия',
    active: true,
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
    disabled: true,
  },
];

<div className="omay-ds-block">
  <Layout>
    <Layout.Section type="normal">
      <Layout.Block>
        {Object.values(Pills.REFS.TYPES).map(type => (
          <div className="omay-ds-block">
            <Pills items={items} type={type} onItemClick={id => console.log(id)} />
          </div>
        ))}
      </Layout.Block>
    </Layout.Section>
    <Layout.Section type="main">
      <Layout.Block>
        {Object.values(Pills.REFS.TYPES).map(type => (
          <div className="omay-ds-block">
            <Pills items={items} type={type} onItemClick={id => console.log(id)} />
          </div>
        ))}
      </Layout.Block>
    </Layout.Section>
  </Layout>
</div>
```
