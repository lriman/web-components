### Цвета
```jsx
<div className="omay-ds-block m-center">
  <div className="omay-ds-list">
    {Object.keys(GeometricBeta.REFS.COLORS).map(color => (
      <div className="omay-ds-list-item" key={color}>
        <div className="omay-ds-value">
          <GeometricBeta color={GeometricBeta.REFS.COLORS[color]} />
        </div>
        <div className="omay-ds-label">{GeometricBeta.REFS.COLORS[color]}</div>
      </div>
    ))}
  </div>
</div>
```
