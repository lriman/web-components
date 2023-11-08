```jsx
import Layout from '../Layout';

const country = {
  code: 'RU',
  flag: 'http://assets.ipstack.com/flags/ru.svg',
  name: 'Russia',
};

const data = [
  {
    id: '1',
    name: 'Иван Иванов',
    picture: null,
    rating: 1800,
    country,
  },
  {
    id: '2',
    name: 'Семен Семенов',
    picture: null,
    rating: 1800,
    country,
  },
  {
    id: '3',
    name: 'Михаил Михайлов',
    picture: null,
    rating: 1800,
    country,
  },
];

<div className="omay-ds-block m-center">
  <div className="omay-ds-list">
    <Layout>
      <Layout.Section type="main">
        <Layout.Block>
          <TopPlayers data={data} />
        </Layout.Block>
      </Layout.Section>
    </Layout>
  </div>
</div>
```
