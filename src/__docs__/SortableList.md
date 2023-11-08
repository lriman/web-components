```jsx
import Layout from '../Layout';
import Block from '../Typography/Block';

<div className="omay-ds-block m-clear-indent">
    <Layout>
        <Layout.Section type="normal">
            <Layout.Block>
              <SortableList id="Items" handleOnDragEnd={params => { console.log(params); }}>
                <SortableList.Item id="Item-1" index={0}>
                   <Block padding="xl">Item 1</Block>
                </SortableList.Item>
                <SortableList.Item id="Item-2" index={1}>
                   <Block padding="xl">Item 2</Block>
                </SortableList.Item>
                <SortableList.Item id="Item-3" index={2}>
                   <Block padding="xl">Item 3</Block>
                </SortableList.Item>
              </SortableList>
            </Layout.Block>
        </Layout.Section>
    </Layout>
</div>
```
