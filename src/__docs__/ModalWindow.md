
### ModalWindowExample

```jsx
import Layout from '../Layout';
const ModalWindowExample = require('../__examples__/ModalWindow.example').default;

<div className="omay-ds-block">
  <Layout>
    <Layout.Section>
      <Layout.Block>        
         <ModalWindowExample />
      </Layout.Block>
    </Layout.Section>
    <Layout.Section type="main">
      <Layout.Block>        
         <ModalWindowExample />
      </Layout.Block>
    </Layout.Section>
  </Layout>
</div>;
```
```
import Layout from '../Layout';
const ModalWindowExample = require('../__examples__/ModalWindow.example').default;

<div className="omay-ds-block">
  <Layout>
    <Layout.Section>
      <Layout.Block>        
         <ModalWindowExample isWithoutShade />
      </Layout.Block>
    </Layout.Section>
    <Layout.Section type="main">
      <Layout.Block>        
         <ModalWindowExample isWithoutShade />
      </Layout.Block>
    </Layout.Section>
  </Layout>
</div>;
```
