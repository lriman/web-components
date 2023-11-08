```jsx
import Layout from '../Layout';
import Account from '../Account';

const round = '1 тур';
const solved = '0/1';

<div className="omay-ds-block m-center">
  <div className="omay-ds-list">
    <Layout>
      <Layout.Section type="main">
        <Layout.Block>
          <Quiz round={round} solved={solved}>
            <Account name='Иван Иванов' compact />
          </Quiz>
        </Layout.Block>
      </Layout.Section>
    </Layout>
  </div>
</div>
```
