```js static
 REFS: {
  ROLES: {
    ADMIN: 'admin',
    STREAMER: 'streamer',
    COACH: 'coach'
  },
};
```

### RoleCard types
```jsx
<div className="omay-ds-block">
  {Object.keys(RoleCard.REFS.ROLES).map(value => (
    <div className="omay-ds-block">      
      <RoleCard role={RoleCard.REFS.ROLES[value]}>
        {RoleCard.REFS.ROLES[value]}
      </RoleCard>
    </div>
  ))}
</div>
```