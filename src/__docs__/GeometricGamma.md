### Цвета
```jsx
<div className="omay-ds-block m-center">
  <div className="omay-ds-list">
    {Object.keys(GeometricGamma.REFS.COLORS).map(color => (
      <div className="omay-ds-list-item" key={color}>
        <div className="omay-ds-value">
          <GeometricGamma color={GeometricGamma.REFS.COLORS[color]} />
        </div>
        <div className="omay-ds-label">{GeometricGamma.REFS.COLORS[color]}</div>
      </div>
    ))}
  </div>
</div>
```
