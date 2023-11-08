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
    {Object.keys(LogoVertical.REFS.SIZES).map(size => (
        <div className="omay-ds-block" key={size}>
            <div className="omay-ds-value">
              <LogoVertical size={LogoVertical.REFS.SIZES[size]} />
            </div>
            <div className="omay-ds-label">{LogoVertical.REFS.SIZES[size]}</div>
        </div>
    ))}
</div>
```

### Sections
```jsx
import Layout, { Section } from '../Layout';

<div className="omay-ds-block">
  <div className="omay-ds-block">
    <Section type="normal">
      <LogoVertical />
    </Section>
  </div>
  <div className="omay-ds-block">
    <Section type="inverse">
      <LogoVertical />
    </Section>
  </div>
  <div className="omay-ds-block">
    <Section type="main">
      <LogoVertical />
    </Section>
  </div>
</div>
```

