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
    {Object.keys(Logo.REFS.SIZES).map(size => (
        <div className="omay-ds-block" key={size}>
            <div className="omay-ds-value">
              <Logo size={Logo.REFS.SIZES[size]} />
            </div>
            <div className="omay-ds-label">{Logo.REFS.SIZES[size]}</div>
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
      <Logo />
    </Section>
  </div>
  <div className="omay-ds-block">
    <Section type="inverse">
      <Logo />
    </Section>
  </div>
  <div className="omay-ds-block">
    <Section type="main">
      <Logo />
    </Section>
  </div>
</div>
```

