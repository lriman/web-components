```js static
REFS: {
  TYPES: {
    LINE: 'line',
    CIRCLE: 'circle',
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
    POSITIVE: 'positive',
    WARNING: 'warning',
    NEGATIVE: 'negative',
    LINK: 'link',
    DISABLED: 'disabled',
  },
};
```

### Размеры
```jsx
<div className="omay-ds-block">
  <div className="omay-ds-block">
    <Progress type={Progress.REFS.TYPES.LINE} lineHeight={Progress.REFS.SIZES.XS} final={300} value={30} />
  </div>
  <div className="omay-ds-block">
    <Progress type={Progress.REFS.TYPES.LINE} lineHeight={Progress.REFS.SIZES.S} final={300} value={30} />
  </div>
  <div className="omay-ds-block">
    <Progress type={Progress.REFS.TYPES.LINE} final={300} value={30} />
  </div>
  <div className="omay-ds-block">
    <Progress type={Progress.REFS.TYPES.LINE} lineHeight={Progress.REFS.SIZES.L} final={300} value={30} />
  </div>
</div>
```

### Цвета
```jsx
<div className="omay-ds-block">
  <div className="omay-ds-block">
    <Progress type={Progress.REFS.TYPES.LINE} color={Progress.REFS.COLORS.MAJOR} final={300} value={30} />
  </div>
  <div className="omay-ds-block">
    <Progress type={Progress.REFS.TYPES.LINE} color={Progress.REFS.COLORS.PRIMARY} final={300} value={30} />
  </div>
  <div className="omay-ds-block">
    <Progress type={Progress.REFS.TYPES.LINE} color={Progress.REFS.COLORS.SECONDARY} final={300} value={30} />
  </div>
  <div className="omay-ds-block">
    <Progress type={Progress.REFS.TYPES.LINE} color={Progress.REFS.COLORS.MINOR} final={300} value={30} />
  </div>
  <div className="omay-ds-block">
    <Progress type={Progress.REFS.TYPES.LINE} color={Progress.REFS.COLORS.POSITIVE} final={300} value={30} />
  </div>
  <div className="omay-ds-block">
    <Progress type={Progress.REFS.TYPES.LINE} color={Progress.REFS.COLORS.WARNING} final={300} value={30} />
  </div>
  <div className="omay-ds-block">
    <Progress type={Progress.REFS.TYPES.LINE} color={Progress.REFS.COLORS.NEGATIVE} final={300} value={30} />
  </div>
  <div className="omay-ds-block">
    <Progress type={Progress.REFS.TYPES.LINE} color={Progress.REFS.COLORS.LINK} final={300} value={30} />
  </div>
  <div className="omay-ds-block">
    <Progress type={Progress.REFS.TYPES.LINE} color={Progress.REFS.COLORS.DISABLED} final={300} value={30} />
  </div>
</div>
```

### Прогресс линейный
```jsx
<div className="omay-ds-block">
  <div className="omay-ds-block">
    <Progress type={Progress.REFS.TYPES.LINE} final={300} value={30} />
  </div>
  <div className="omay-ds-block">
    <Progress type={Progress.REFS.TYPES.LINE} final={300} value={60} isDecreased />
  </div>
  <div className="omay-ds-block">
    <Progress type={Progress.REFS.TYPES.LINE} final={300} value={100} isTimer />
  </div>
  <div className="omay-ds-block">
    <Progress type={Progress.REFS.TYPES.LINE} final={300} value={150} isTimer isDecreased />
  </div>
</div>
```

### Прогресс круговой
```jsx
<div className="omay-ds-block">
  <div className="omay-ds-block">
    <Progress type={Progress.REFS.TYPES.CIRCLE} final={300} value={45} />
  </div>
  <div className="omay-ds-block">
    <Progress type={Progress.REFS.TYPES.CIRCLE} final={300} value={123} isDecreased />
  </div>
  <div className="omay-ds-block">
    <Progress type={Progress.REFS.TYPES.CIRCLE} final={300} value={234} isTimer />
  </div>
  <div className="omay-ds-block">
    <Progress type={Progress.REFS.TYPES.CIRCLE} final={300} value={287} isTimer isDecreased />
  </div>
</div>
```
