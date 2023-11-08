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
  },
}
```

```jsx
import IconChess from '../IconChess';

<div className="omay-ds-list m-center">
  {Object.keys(IconChess.REFS.TYPES).map(type => (
    <div className="omay-ds-list-item" key={type}>
      <div className="omay-ds-value">
        <IconChess type={IconChess.REFS.TYPES[type]} />
      </div>
      <div className="omay-ds-label">{IconChess.REFS.TYPES[type]}</div>
    </div>
  ))}
</div>
```
