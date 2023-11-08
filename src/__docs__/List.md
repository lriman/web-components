```js static
REFS: {
  TYPES: {
    UL: 'ul',
    OL: 'ol',
  },
  SIZES: {
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

### Ul
```jsx
<div className="omay-ds-block">
    {Object.keys(List.REFS.SIZES).map(size => (
        <div className="omay-ds-block" key={size}>
            <List size={List.REFS.SIZES[size]}>
                <List.Item>
                    Пункт 1
                    <List size={List.REFS.SIZES[size]}>
                        <List.Item>Пункт 1</List.Item>
                        <List.Item>Пункт 2</List.Item>
                        <List.Item>Пункт 3</List.Item>
                        <List.Item>Пункт 4</List.Item>
                        <List.Item>Пункт 5</List.Item>
                    </List>
                </List.Item>
                <List.Item>Пункт 2</List.Item>
                <List.Item>Пункт 3</List.Item>
                <List.Item>Пункт 4</List.Item>
                <List.Item>Пункт 5</List.Item>
            </List>
        </div>
    ))}
</div>
```

### Ol
```jsx
<div className="omay-ds-block">
    {Object.keys(List.REFS.SIZES).map(size => (
        <div className="omay-ds-block" key={size}>
            <List type={List.REFS.TYPES.OL} size={List.REFS.SIZES[size]}>
                <List.Item>
                    Пункт 1
                    <List type={List.REFS.TYPES.OL} size={List.REFS.SIZES[size]}>
                <List.Item>
                    Пункт 1
                    <List type={List.REFS.TYPES.OL} size={List.REFS.SIZES[size]}>
                        <List.Item>Пункт 1</List.Item>
                        <List.Item>Пункт 2</List.Item>
                        <List.Item>Пункт 3</List.Item>
                        <List.Item>Пункт 4</List.Item>
                        <List.Item>Пункт 5</List.Item>
                    </List>
                </List.Item>
                        <List.Item>Пункт 2</List.Item>
                        <List.Item>Пункт 3</List.Item>
                        <List.Item>Пункт 4</List.Item>
                        <List.Item>Пункт 5</List.Item>
                    </List>
                </List.Item>
                <List.Item>Пункт 2</List.Item>
                <List.Item>Пункт 3</List.Item>
                <List.Item>Пункт 4</List.Item>
                <List.Item>Пункт 5</List.Item>
            </List>
        </div>
    ))}
</div>
```
