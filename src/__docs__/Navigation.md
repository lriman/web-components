### Navigation

```jsx
const NavigationExample = require('../__examples__/Navigation.example').default;

<div className="sg-block">
  <div className="sg-block" style={{ width: 260 }}>
    <NavigationExample />
  </div>
</div>
```

### Icons

```jsx
import Icons from '../Navigation/_internal/_icons';
import Span from '../Typography/Span';

<div className="sg-block">
  {Object.keys(Icons).map(type => (
    <div className="sg-block" key={type}>
      {Icons[type]}
      <Span size="s">{type}</Span>
    </div>
  ))}
</div>
```
