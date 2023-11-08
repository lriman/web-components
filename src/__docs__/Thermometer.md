### Thermometer

```jsx
import Layout from '../Layout';
import Grid, { Item } from '../Grid';

<Layout>
  <Layout.Section type="main" grow>
    <Grid>
      <Item>
        <div className="omay-ds-block" style={{ width: '50px', height: '500px', padding: '10px' }}>
          <Thermometer final={4} value={0} />
        </div>
      </Item>      
    </Grid>
  </Layout.Section>
</Layout>
```

