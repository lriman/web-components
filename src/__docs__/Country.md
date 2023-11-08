```jsx
<div className="omay-ds-block m-center">
    <div className="omay-ds-block m-center">
        <div className="omay-ds-list">
            {Object.keys(Country.REFS.SIZES).map(size => (
                <div className="omay-ds-list-item" key={size}>
                    <div className="omay-ds-value">
                        <Country size={Country.REFS.SIZES[size]} name="Russia" flag="http://assets.ipstack.com/flags/ru.svg" />
                    </div>
                    <div className="omay-ds-label">{Country.REFS.SIZES[size]}</div>
                </div>
            ))}
        </div>
    </div>
    <div className="omay-ds-block m-center">
        <div className="omay-ds-list">
            {Object.keys(Country.REFS.SIZES).map(size => (
                <div className="omay-ds-list-item" key={size}>
                    <div className="omay-ds-value">
                        <Country size={Country.REFS.SIZES[size]} name="Russia" flag="http://assets.ipstack.com/flags/ru.svg" compact />
                    </div>
                    <div className="omay-ds-label">{Country.REFS.SIZES[size]}</div>
                </div>
            ))}
        </div>
    </div>
</div>
```

### Цвета

```jsx
import Layout from '../Layout';

<div className="omay-ds-block m-clear-indent">
    <Layout>
        <Layout.Section type="normal">
            <Layout.Block>
                <div className="omay-ds-list">
                    {Object.keys(Country.REFS.COLORS).map(color => (
                        <div className="omay-ds-list-item" key={color}>
                            <div className="omay-ds-value">
                                <Country color={Country.REFS.COLORS[color]} name="Russia" flag="http://assets.ipstack.com/flags/ru.svg" />
                            </div>
                            <div className="omay-ds-label">{Country.REFS.COLORS[color]}</div>
                        </div>
                    ))}
                </div>
            </Layout.Block>
        </Layout.Section>
        <Layout.Section type="inverse">
            <Layout.Block>
                <div className="omay-ds-list">
                    {Object.keys(Country.REFS.COLORS).map(color => (
                        <div className="omay-ds-list-item" key={color}>
                            <div className="omay-ds-value">
                                <Country color={Country.REFS.COLORS[color]} name="Russia" flag="http://assets.ipstack.com/flags/ru.svg" />
                            </div>
                            <div className="omay-ds-label">{Country.REFS.COLORS[color]}</div>
                        </div>
                    ))}
                </div>
            </Layout.Block>
        </Layout.Section>
    </Layout>
</div>
```
