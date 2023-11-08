### REFS

```js static
{
  TYPES: {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    DANGER: 'danger',
  },
  DISPLAY: {
    BLOCK: 'block',
    INLINE: 'inline',
  },
  SIZES: {
    S: 's',
    M: 'm',
    L: 'l',
  },
}
```

### IconCircleButton Types and Sizes

```jsx
import IconSocialNetworkFacebook from '../Icon/IconSocialNetworkFacebook';

<div className="omay-ds-block">
  {Object.keys(IconCircleButton.REFS.SIZES).map(size => (
    <div className="omay-ds-list" key={size}>
      {Object.keys(IconCircleButton.REFS.TYPES).map(type => (
        <div className="omay-ds-list-item" key={type}>
          <IconCircleButton
            id={`IconCircleButton_${IconCircleButton.REFS.TYPES[type]}`}
            type={IconCircleButton.REFS.TYPES[type]}
            size={IconCircleButton.REFS.SIZES[size]}
            onClick={() => {}}
          >
                <IconSocialNetworkFacebook size={size === 'S' ? 'm' : (size === 'M' ? 'l' : 'xl')} />
          </IconCircleButton>
        </div>
      ))}
    </div>
  ))}
</div>
```