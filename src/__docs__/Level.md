```jsx
import Layout from '../Layout';
const items = [
  {
    id: 'legend',
    title: 'Легендарные',
    value: 1,
    total: 1,
    items: [
      {
        id: 'l1',
        title: 'first legend',
        picture: 'http://i.hmp.me/m/06fc66d53885514eaa4d786924a5327d.png',
      },
    ]
  },
  {
    id: 'bool',
    title: 'Пуля',
    value: 2,
    total: 5,
    items: [
      {
        id: 'b1',
        title: 'first bullet',
        picture: 'http://i.hmp.me/m/06fc66d53885514eaa4d786924a5327d.png',
      },
      {
        id: 'b2',
        title: 'second bullet',
        picture: 'http://i.hmp.me/m/06fc66d53885514eaa4d786924a5327d.png',
      },
    ]
  },
];

const labels = {
  title: 'Уровень',
  describe: [
    'Вы открыли ',
    '{:points} [:points(достижение,достижения,достижений)].',
    ' Осталось набрать еще ',
    '{:nextLevelPoints} [:nextLevelPoints(очко,очка,очков)]',
    ' до следующего уровня.',
  ],
};

<div className="omay-ds-block m-clear-indent">
  <Layout>
    <Layout.Section type="main">
      <Layout.Block>        
        <Level value={22} points={250} maxPoints={1000} totalSubAchieves={10} nextLevelPoints={47} labels={labels} items={items} />       
      </Layout.Block>
    </Layout.Section>
  </Layout>
</div>;
```
