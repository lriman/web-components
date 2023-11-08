```js static
REFS: {
  SIZES: {
    XS: 'xs',
    S: 's',
    M: 'm',
    L: 'l',
    XL: 'xl',
  },
  
  TEXT_ALIGN: {
    LEFT: 'left',
    CENTER: 'center',
    RIGHT: 'right',
    JUSTIFY: 'justify',
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
                {Object.keys(Paragraph.REFS.SIZES).map(value => (
                    <div className="omay-ds-block" key={value}>
                        <Paragraph size={Paragraph.REFS.SIZES[value]}>Шрифт размера {Paragraph.REFS.SIZES[value]}</Paragraph>
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
                {Object.keys(Paragraph.REFS.COLORS).map(value => (
                    <div className="omay-ds-block" key={value}>
                        <Paragraph color={Paragraph.REFS.COLORS[value]}>Шрифт цвета {Paragraph.REFS.COLORS[value]}</Paragraph>
                    </div>
                ))}
            </Layout.Block>
        </Layout.Section>
        <Layout.Section type="inverse">
            <Layout.Block>
                {Object.keys(Paragraph.REFS.COLORS).map(value => (
                    <div className="omay-ds-block" key={value}>
                        <Paragraph color={Paragraph.REFS.COLORS[value]}>Шрифт цвета {Paragraph.REFS.COLORS[value]}</Paragraph>
                    </div>
                ))}
            </Layout.Block>
        </Layout.Section>
    </Layout>
</div>
```