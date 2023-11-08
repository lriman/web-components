```js static
REFS: {
  SIZES: {
    XS: 'xs',
    S: 's',
    M: 'm',
    L: 'l',
    XL: 'xl',
  },
  
  MARGIN: {
    XS: 'xs',
    S: 's',
    M: 'm',
    L: 'l',
    XL: 'xl',
  },
  
  PADDING: {
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
                {Object.keys(Block.REFS.SIZES).map(value => (
                    <div className="omay-ds-block" key={value}>
                        <Block size={Block.REFS.SIZES[value]}>Шрифт размера {Block.REFS.SIZES[value]}</Block>
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
                {Object.keys(Block.REFS.COLORS).map(value => (
                    <div className="omay-ds-block" key={value}>
                        <Block color={Block.REFS.COLORS[value]}>Шрифт цвета {Block.REFS.COLORS[value]}</Block>
                    </div>
                ))}
            </Layout.Block>
        </Layout.Section>
        <Layout.Section type="main">
            <Layout.Block>
                {Object.keys(Block.REFS.COLORS).map(value => (
                    <div className="omay-ds-block" key={value}>
                        <Block color={Block.REFS.COLORS[value]}>Шрифт цвета {Block.REFS.COLORS[value]}</Block>
                    </div>
                ))}
            </Layout.Block>
        </Layout.Section>
    </Layout>
</div>
```

### Расположение текста
```jsx
import Layout from '../Layout';

<div className="omay-ds-block m-clear-indent">
    <Layout>
        <Layout.Section type="normal">
            <Layout.Block>
                {Object.keys(Block.REFS.TEXT_ALIGN).map(value => (
                    <div className="omay-ds-block" key={value}>
                        <Block textAlign={Block.REFS.TEXT_ALIGN[value]}>
                            Шрифт с расположением текста {Block.REFS.TEXT_ALIGN[value]} 
                            Также как понимание сути ресурсосберегающих технологий прекрасно подходит для
                            реализации распределения внутренних резервов и ресурсов. Являясь всего лишь 
                            частью общей картины, акционеры крупнейших компаний ассоциативно распределены по отраслям.
                        </Block>
                    </div>
                ))}
            </Layout.Block>
        </Layout.Section>
    </Layout>
</div>
```

### Внешние отступы
```jsx
import Layout from '../Layout';

<div className="omay-ds-block m-clear-indent">
    <Layout>
        <Layout.Section type="normal">
            <Layout.Block>
                {Object.keys(Block.REFS.MARGIN).map(value => (
                    <div className="omay-ds-block" key={value}>
                        <Block margin={Block.REFS.MARGIN[value]}>
                            Отступ {Block.REFS.MARGIN[value]} 
                        </Block>
                        <Block margin={Block.REFS.MARGIN[value]}>
                            Также как понимание сути ресурсосберегающих технологий прекрасно подходит для
                            реализации распределения внутренних резервов и ресурсов. Являясь всего лишь 
                            частью общей картины, акционеры крупнейших компаний ассоциативно распределены по отраслям.
                        </Block>
                    </div>
                ))}
            </Layout.Block>
        </Layout.Section>
    </Layout>
</div>
```

### Внутренние отступы
```jsx
import Layout from '../Layout';

<div className="omay-ds-block m-clear-indent">
    <Layout>
        <Layout.Section type="normal">
            <Layout.Block>
                {Object.keys(Block.REFS.PADDING).map(value => (
                    <div className="omay-ds-block" key={value}>
                        <Block padding={Block.REFS.PADDING[value]}>
                            Отступ {Block.REFS.PADDING[value]} 
                        </Block>
                        <Block padding={Block.REFS.PADDING[value]}>
                            Также как понимание сути ресурсосберегающих технологий прекрасно подходит для
                            реализации распределения внутренних резервов и ресурсов. Являясь всего лишь 
                            частью общей картины, акционеры крупнейших компаний ассоциативно распределены по отраслям.
                        </Block>
                    </div>
                ))}
            </Layout.Block>
        </Layout.Section>
    </Layout>
</div>
```
