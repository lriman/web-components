```js static
REFS: {
  SIZES: {
    XXS: 'xxs',
    XS: 'xs',
    S: 's',
    M: 'm',
    L: 'l',
    XL: 'xl',
  },
  COLORS: {
    MAJOR: 'major',
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    MINOR: 'minor',
    DISABLED: 'disabled',
    POSITIVE: 'positive',
    NEGATIVE: 'negative',
    WARNING: 'warning',
    ACCENT_1: 'accent1',
    ACCENT_2: 'accent2',
  },
}
```

### Размеры
```jsx
import Layout from '../Layout';

<div className="omay-ds-block m-clear-indent">
    <Layout>
        <Layout.Section type="normal">
            <Layout.Block>
                {Object.keys(Heading.REFS.SIZES).map(value => (
                    <div className="omay-ds-block" key={value}>
                        <Heading size={Heading.REFS.SIZES[value]}>Шрифт размера {Heading.REFS.SIZES[value]}</Heading>
                    </div>
                ))}
            </Layout.Block>
        </Layout.Section>
    </Layout>
</div>
```

### Цвета
```jsx
import Layout from '../Layout';

<div className="omay-ds-block m-clear-indent">
    <Layout>
        <Layout.Section type="normal">
            <Layout.Block>
                {Object.keys(Heading.REFS.COLORS).map(value => (
                    <div className="omay-ds-block" key={value}>
                        <Heading color={Heading.REFS.COLORS[value]}>Шрифт цвета {Heading.REFS.COLORS[value]}</Heading>
                    </div>
                ))}
            </Layout.Block>
        </Layout.Section>
        <Layout.Section type="inverse">
            <Layout.Block>
                {Object.keys(Heading.REFS.COLORS).map(value => (
                    <div className="omay-ds-block" key={value}>
                        <Heading color={Heading.REFS.COLORS[value]}>Шрифт цвета {Heading.REFS.COLORS[value]}</Heading>
                    </div>
                ))}
            </Layout.Block>
        </Layout.Section>
    </Layout>
</div>
```