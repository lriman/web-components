```js static
REFS: {
  SIZES: {
    XS: 'xs',
    S: 's',
    M: 'm',
    L: 'l',
    XL: 'xl',
  },
  
  DISPLAY: {
    BLOCK: 'block',
    INLINE: 'inline',
  },
  
  COLORS: {
    MAJOR: 'major',
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    MINOR: 'minor',
    LIGHT: 'light',
    POSITIVE: 'positive',
    WARNING: 'warning',
    NEGATIVE: 'negative',
    LINK: 'link',
  },
}
```

### Размеры
```jsx
<div className="omay-ds-block m-center">
  <div className="omay-ds-list">
    {Object.keys(IconColumns.REFS.SIZES).map(size => (
      <div className="omay-ds-list-item" key={size}>
        <div className="omay-ds-value">
          <IconColumns size={IconColumns.REFS.SIZES[size]} />
        </div>
        <div className="omay-ds-label">{IconColumns.REFS.SIZES[size]}</div>
      </div>
    ))}
  </div>
</div>
```

### Цвета
```jsx
<div className="omay-ds-block m-center">
  <div className="omay-ds-list">
    {Object.keys(IconColumns.REFS.COLORS).map(color => (
      <div className={IconColumns.REFS.COLORS[color] === 'light' ? 'omay-ds-list-item m-dark' : 'omay-ds-list-item'} key={color}>
        <div className="omay-ds-value">
          <IconColumns color={IconColumns.REFS.COLORS[color]} />
        </div>
        <div className="omay-ds-label">{IconColumns.REFS.COLORS[color]}</div>
      </div>
    ))}
  </div>
</div>
```
