### StatusCard

```jsx
import Layout from '../Layout';
const data = {
  whiteMove: {
    icon: 'w',
    label: 'Ход белых'
  },
  blackMove: {
    icon: 'b',
    label: 'Ход черных'
  },
  won: {
    icon: 'won',
    label: 'Решено'
  },
  lost: {
    icon: 'lost',
    label: 'Ошибка'
  }
};

<div className="omay-ds-block">
  <Layout>
    <Layout.Section type="deep">
      {Object.values(data).map(item => {
        return Object.values(StatusCard.REFS.SIZES).map(size => (
            <Layout.Block>
              <StatusCard {...item} size={size} />
            </Layout.Block>
          ))
      })}
    </Layout.Section>
  </Layout>
</div>
```