### Pagination
```jsx
import Layout from '../Layout';
const PaginationExample = require('../__examples__/Pagination.example').default;

<div className="sg-block">
  <Layout>
    <Layout.Section type="normal">
      <Layout.Block>
        <PaginationExample />
      </Layout.Block>
    </Layout.Section>
  </Layout>
  <Layout>
    <Layout.Section type="inverse">
      <Layout.Block>
        <PaginationExample />
      </Layout.Block>
    </Layout.Section>
  </Layout>
  <Layout>
    <Layout.Section type="normal">
      <Layout.Block>
        <PaginationExample showPageItems />
      </Layout.Block>
    </Layout.Section>
  </Layout>
  <Layout>
    <Layout.Section type="inverse">
      <Layout.Block>
        <PaginationExample showPageItems />
      </Layout.Block>
    </Layout.Section>
  </Layout>
</div>
```
