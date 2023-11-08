```js static
REFS: {
  SIZES: {
    XS: 'xs',
    S: 's',
    M: 'm',
    L: 'l',
    XL: 'xl',
  },
  
  WEIGHTS: {
    BOLD: 'bold',
    MEDIUM: 'medium',
    NORMAL: 'normal',
    LIGHT: 'light',
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
                {Object.keys(Span.REFS.SIZES).map(value => (
                    <div className="omay-ds-block" key={value}>
                        <Span size={Span.REFS.SIZES[value]}>Шрифт размера {Span.REFS.SIZES[value]}</Span>
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
                {Object.keys(Span.REFS.COLORS).map(value => (
                    <div className="omay-ds-block" key={value}>
                        <Span color={Span.REFS.COLORS[value]}>Шрифт цвета {Span.REFS.COLORS[value]}</Span>
                    </div>
                ))}
            </Layout.Block>
        </Layout.Section>
        <Layout.Section type="inverse">
            <Layout.Block>
                {Object.keys(Span.REFS.COLORS).map(value => (
                    <div className="omay-ds-block" key={value}>
                        <Span color={Span.REFS.COLORS[value]}>Шрифт цвета {Span.REFS.COLORS[value]}</Span>
                    </div>
                ))}
            </Layout.Block>
        </Layout.Section>
    </Layout>
</div>
```

### Толщина шрифта, акцентировани и числовые значения
```jsx
<div className="omay-ds-block">
  <Span weight={Span.REFS.WEIGHTS.BOLD}>Жирное начертание</Span>
</div>
<div className="omay-ds-block">
  <Span weight={Span.REFS.WEIGHTS.NORMAL}>Нормальное начертание</Span>
</div>
<div className="omay-ds-block">
  <Span weight={Span.REFS.WEIGHTS.LIGHT}>Легкое начертание</Span>
</div>
<div className="omay-ds-block">
  <Span weight={Span.REFS.WEIGHTS.BOLD} isAccented>Жирное начертание с акцентированием</Span>
</div>
<div className="omay-ds-block">
  <Span weight={Span.REFS.WEIGHTS.NORMAL} isAccented>Нормальное начертание с акцентированием</Span>
</div>
<div className="omay-ds-block">
  <Span weight={Span.REFS.WEIGHTS.LIGHT} isAccented>Легкое начертание с акцентированием</Span>
</div>
<div className="omay-ds-block">
  <Span weight={Span.REFS.WEIGHTS.BOLD} isDigital>12 678 ₽</Span>
</div>
<div className="omay-ds-block">
  <Span weight={Span.REFS.WEIGHTS.NORMAL} isDigital>67 766 ₽</Span>
</div>
<div className="omay-ds-block">
  <Span weight={Span.REFS.WEIGHTS.LIGHT} isDigital>1 000 ₽</Span>
</div>
```
