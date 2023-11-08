```js static
REFS: {
  TYPES: {
    UNKNOWN: 'unknown',
    SUCCESS: 'success',
    ERROR: 'error',
  },
}
```

```jsx
import Layout from '../Layout';

<div className="omay-ds-block m-clear-indent">
    <Layout>
        <Layout.Section type="normal">
            <Layout.Block>

                {Object.keys(Status.REFS.TYPES).map(type => (
                    <div className="omay-ds-block" key={type}>
                        {Object.keys(Status.REFS.SIZES).map(size => (
                            <div className="omay-ds-block" key={size}>
                                <Status
                                    type={Status.REFS.TYPES[type]}
                                    size={Status.REFS.SIZES[size]}
                                    value="Статус"
                                />
                            </div>
                        ))}
                    </div>
                ))}

            </Layout.Block>
        </Layout.Section>
        <Layout.Section type="deep">
            <Layout.Block>

                {Object.keys(Status.REFS.TYPES).map(type => (
                    <div className="omay-ds-block" key={type}>
                        {Object.keys(Status.REFS.SIZES).map(size => (
                            <div className="omay-ds-block" key={size}>
                                <Status
                                    type={Status.REFS.TYPES[type]}
                                    size={Status.REFS.SIZES[size]}
                                    value="Статус"
                                />
                            </div>
                        ))}
                    </div>
                ))}

            </Layout.Block>
        </Layout.Section>
    </Layout>
</div>
```
