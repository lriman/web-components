```js static
REFS: {
  SIZES: {
    S: 's',
    M: 'm',
    L: 'l',
  },
}
```

### Размеры
```jsx
<div className="omay-ds-block">
    {Object.keys(LogoBlack.REFS.SIZES).map(size => (
        <div className="omay-ds-block" key={size}>
            <div className="omay-ds-value">
              <LogoBlack size={LogoBlack.REFS.SIZES[size]} />
            </div>
            <div className="omay-ds-label">{LogoBlack.REFS.SIZES[size]}</div>
        </div>
    ))}
</div>
```
```jsx
<div className="omay-ds-block">
    {Object.keys(LogoBlack.REFS.SIZES).map(size => (
        <div className="omay-ds-block" key={size}>  
            <div className="omay-ds-value">
              <LogoBlack size={LogoBlack.REFS.SIZES[size]} light />
            </div>
            <div className="omay-ds-label">{LogoBlack.REFS.SIZES[size]}</div>
        </div>
    ))}
</div>
```

