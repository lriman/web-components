### Цвета
```jsx
<div className="omay-ds-block m-center">
  <div className="omay-ds-list">
    {Object.keys(GeometricAlpha.REFS.COLORS).map(color => (
      <div className="omay-ds-list-item" key={color}>
        <div className="omay-ds-value">
          <GeometricAlpha color={GeometricAlpha.REFS.COLORS[color]} />
        </div>
        <div className="omay-ds-label">{GeometricAlpha.REFS.COLORS[color]}</div>
      </div>
    ))}
  </div>
</div>
```
