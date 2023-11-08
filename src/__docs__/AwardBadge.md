```jsx
<div className="omay-ds-block">
  {Object.keys(AwardBadge.REFS.TYPES).map(type => (
    <div className="omay-ds-block" key={type}>
      <AwardBadge value={24} type={AwardBadge.REFS.TYPES[type]} />
    </div>
  ))}
</div>
```
