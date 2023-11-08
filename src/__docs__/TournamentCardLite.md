```js static
REFS: {
  TYPES: {
    LINE: 'line',
    CIRCLE: 'circle',
  },
}
```

### TournamentCardLite colors
```jsx
import IconWithBadge from '../IconWithBadge';
import IconBullet from '../Icon/IconBullet';
import IconKnockout from '../Icon/IconKnockout';

<div className="omay-ds-block">
  {Object.keys(TournamentCardLite.REFS.COLORS).map(value => (
    <div className="omay-ds-block">
      Иконка цвета {TournamentCardLite.REFS.COLORS[value]}
      <TournamentCardLite color={TournamentCardLite.REFS.COLORS[value]}>
        <IconWithBadge
          id={TournamentCardLite.REFS.COLORS[value]}
          size={IconWithBadge.REFS.SIZES.S}
        >
          <IconBullet />
          <IconKnockout />
        </IconWithBadge>
      </TournamentCardLite>
    </div>
  ))}
</div>
```

### TournamentCardLite sizes
```jsx
<div className="omay-ds-block">
  {Object.keys(TournamentCardLite.REFS.SIZES).map(value => (
    <div className="omay-ds-block">
      Иконка размера {TournamentCardLite.REFS.SIZES[value]}
      <TournamentCardLite color='rapid' value={1} size={TournamentCardLite.REFS.SIZES[value]}/>
    </div>
  ))}
</div>
```
### TournamentCardLite inactive
```jsx
import IconBullet from '../Icon/IconBullet';

<div className="omay-ds-block">  
  <div className="omay-ds-block">
    <TournamentCardLite color='offline' value={1} inactive>
      <IconBullet />
    </TournamentCardLite>
  </div>
</div>
```
