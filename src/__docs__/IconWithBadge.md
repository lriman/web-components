### REFS

```js static
{
  SIZES: {
    S: 's',
    M: 'm',
    L: 'l',
  },
}
```

### IconWithBadge Types and Sizes

```jsx
import IconBullet from '../Icon/IconBullet';
import IconRabbit from '../Icon/IconRabbit';
import IconLightning from '../Icon/IconLightning';
import IconKnockout from '../Icon/IconKnockout';
import IconShield from '../Icon/IconShield';
import IconCup from '../Icon/IconCup';

<div className="omay-ds-block">
  <IconWithBadge
    id={`IconWithBadge{IconWithBadge.REFS.TYPES[type]}`}
    size={IconWithBadge.REFS.SIZES.S}
  >
    <IconLightning/>
    <IconShield/>
  </IconWithBadge>
  <IconWithBadge
    id={`IconWithBadge{IconWithBadge.REFS.TYPES[type]}`}
  >
    <IconRabbit/>
    <IconCup/>
  </IconWithBadge>
  <IconWithBadge
    id={`IconWithBadge{IconWithBadge.REFS.TYPES[type]}`}
    size={IconWithBadge.REFS.SIZES.s}
  >
    <IconBullet/>
    <IconKnockout/>
  </IconWithBadge>

</div>;
```