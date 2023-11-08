```js static
REFS: {
  JUSTIFY: {
    START: 'start',
    CENTER: 'center',
    END: 'end',
    SPACE_BETWEEN: 'spaceBetween',
    SPACE_AROUND: 'spaceAround',
    SPACE_EVENLY: 'spaceEvenly',
  },

  ALIGN_ITEMS: {
    START: 'start',
    CENTER: 'center',
    END: 'end',
    STRETCH: 'stretch',
  },

  SPACING: {
    XS: 'xs',
    S: 's',
    M: 'm',
    L: 'l',
    XL: 'xl',
  },
}
```

Component Grid adapts to screen and orientation, ensuring consistency across layouts.

Компонент Item импортируются из компонента Grid и имеет props для настройки размещения:

```js static
import Grid, { Item } from '@levitovchess/components/lib/Grid'

Item props: {
  size: {
    Type: number,
    Default: 0,
  },
  tablet: {
    Type: number,
    Default: 0,
  },
  desktop: {
    Type: number,
    Default: 0,
  },
  children: {
      Type: node,
      Default: null,
  },
}
```



### Примеры размещения Grid
```jsx
import Card from '../Card';
import { Block } from '../Typography';

<div className="omay-ds-block">
  <Grid>
    <Grid.Item size={1}>
       <Card border="1px solid gray"><Block padding={Block.REFS.PADDING.S}>1</Block></Card>
    </Grid.Item>
    <Grid.Item size={11}>
       <Card border="1px solid gray"><Block padding={Block.REFS.PADDING.S}>11</Block></Card>
    </Grid.Item>
    <Grid.Item size={2}>
       <Card border="1px solid gray"><Block padding={Block.REFS.PADDING.S}>2</Block></Card>
    </Grid.Item>
    <Grid.Item size={10}>
       <Card border="1px solid gray"><Block padding={Block.REFS.PADDING.S}>10</Block></Card>
    </Grid.Item>
    <Grid.Item size={3}>
       <Card border="1px solid gray"><Block padding={Block.REFS.PADDING.S}>3</Block></Card>
    </Grid.Item>
    <Grid.Item size={9}>
       <Card border="1px solid gray"><Block padding={Block.REFS.PADDING.S}>9</Block></Card>
    </Grid.Item>
    <Grid.Item size={4}>
       <Card border="1px solid gray"><Block padding={Block.REFS.PADDING.S}>4</Block></Card>
    </Grid.Item>
    <Grid.Item size={8}>
       <Card border="1px solid gray"><Block padding={Block.REFS.PADDING.S}>8</Block></Card>
    </Grid.Item>
    <Grid.Item size={5}>
       <Card border="1px solid gray"><Block padding={Block.REFS.PADDING.S}>5</Block></Card>
    </Grid.Item>
    <Grid.Item size={7}>
       <Card border="1px solid gray"><Block padding={Block.REFS.PADDING.S}>7</Block></Card>
    </Grid.Item>
    <Grid.Item size={6}>
       <Card border="1px solid gray"><Block padding={Block.REFS.PADDING.S}>6</Block></Card>
    </Grid.Item>
    <Grid.Item size={6}>
       <Card border="1px solid gray"><Block padding={Block.REFS.PADDING.S}>6</Block></Card>
    </Grid.Item>
    <Grid.Item size={12}>
       <Card border="1px solid gray"><Block padding={Block.REFS.PADDING.S}>1</Block></Card>
    </Grid.Item>
  </Grid>
</div>
```

```jsx
import Card from '../Card';
import { Block } from '../Typography';

<div className="omay-ds-block">
  <Grid>
    <Grid.Item tablet={1}>
       <Card border="1px solid gray"><Block padding={Block.REFS.PADDING.S}>1</Block></Card>
    </Grid.Item>
    <Grid.Item tablet={11}>
       <Card border="1px solid gray"><Block padding={Block.REFS.PADDING.S}>11</Block></Card>
    </Grid.Item>
    <Grid.Item tablet={2}>
       <Card border="1px solid gray"><Block padding={Block.REFS.PADDING.S}>2</Block></Card>
    </Grid.Item>
    <Grid.Item tablet={10}>
       <Card border="1px solid gray"><Block padding={Block.REFS.PADDING.S}>10</Block></Card>
    </Grid.Item>
    <Grid.Item tablet={3}>
       <Card border="1px solid gray"><Block padding={Block.REFS.PADDING.S}>3</Block></Card>
    </Grid.Item>
    <Grid.Item tablet={9}>
       <Card border="1px solid gray"><Block padding={Block.REFS.PADDING.S}>9</Block></Card>
    </Grid.Item>
    <Grid.Item tablet={4}>
       <Card border="1px solid gray"><Block padding={Block.REFS.PADDING.S}>4</Block></Card>
    </Grid.Item>
    <Grid.Item tablet={8}>
       <Card border="1px solid gray"><Block padding={Block.REFS.PADDING.S}>8</Block></Card>
    </Grid.Item>
    <Grid.Item tablet={5}>
       <Card border="1px solid gray"><Block padding={Block.REFS.PADDING.S}>5</Block></Card>
    </Grid.Item>
    <Grid.Item tablet={7}>
       <Card border="1px solid gray"><Block padding={Block.REFS.PADDING.S}>7</Block></Card>
    </Grid.Item>
    <Grid.Item tablet={6}>
       <Card border="1px solid gray"><Block padding={Block.REFS.PADDING.S}>6</Block></Card>
    </Grid.Item>
    <Grid.Item tablet={6}>
       <Card border="1px solid gray"><Block padding={Block.REFS.PADDING.S}>6</Block></Card>
    </Grid.Item>
    <Grid.Item tablet={12}>
       <Card border="1px solid gray"><Block padding={Block.REFS.PADDING.S}>1</Block></Card>
    </Grid.Item>
  </Grid>
</div>
```

```jsx
import Card from '../Card';
import { Block } from '../Typography';

<div className="omay-ds-block">
  <Grid>
    <Grid.Item desktop={1}>
       <Card border="1px solid gray"><Block padding={Block.REFS.PADDING.S}>1</Block></Card>
    </Grid.Item>
    <Grid.Item desktop={11}>
       <Card border="1px solid gray"><Block padding={Block.REFS.PADDING.S}>11</Block></Card>
    </Grid.Item>
    <Grid.Item desktop={2}>
       <Card border="1px solid gray"><Block padding={Block.REFS.PADDING.S}>2</Block></Card>
    </Grid.Item>
    <Grid.Item desktop={10}>
       <Card border="1px solid gray"><Block padding={Block.REFS.PADDING.S}>10</Block></Card>
    </Grid.Item>
    <Grid.Item desktop={3}>
       <Card border="1px solid gray"><Block padding={Block.REFS.PADDING.S}>3</Block></Card>
    </Grid.Item>
    <Grid.Item desktop={9}>
       <Card border="1px solid gray"><Block padding={Block.REFS.PADDING.S}>9</Block></Card>
    </Grid.Item>
    <Grid.Item desktop={4}>
       <Card border="1px solid gray"><Block padding={Block.REFS.PADDING.S}>4</Block></Card>
    </Grid.Item>
    <Grid.Item desktop={8}>
       <Card border="1px solid gray"><Block padding={Block.REFS.PADDING.S}>8</Block></Card>
    </Grid.Item>
    <Grid.Item desktop={5}>
       <Card border="1px solid gray"><Block padding={Block.REFS.PADDING.S}>5</Block></Card>
    </Grid.Item>
    <Grid.Item desktop={7}>
       <Card border="1px solid gray"><Block padding={Block.REFS.PADDING.S}>7</Block></Card>
    </Grid.Item>
    <Grid.Item desktop={6}>
       <Card border="1px solid gray"><Block padding={Block.REFS.PADDING.S}>6</Block></Card>
    </Grid.Item>
    <Grid.Item desktop={6}>
       <Card border="1px solid gray"><Block padding={Block.REFS.PADDING.S}>6</Block></Card>
    </Grid.Item>
    <Grid.Item desktop={12}>
       <Card border="1px solid gray"><Block padding={Block.REFS.PADDING.S}>1</Block></Card>
    </Grid.Item>
  </Grid>
</div>
```

### Примеры размещения Items
```jsx
import Card from '../Card';
import { Block } from '../Typography';

<div className="omay-ds-block">
  {Object.keys(Grid.REFS.JUSTIFY).map(key => (
    <div className="omay-ds-block" key={key}>
      <div className="omay-ds-title m-center">{Grid.REFS.JUSTIFY[key]}</div>
      <div className="omay-ds-block">
        <Grid justify={Grid.REFS.JUSTIFY[key]}>
          <Grid.Item size={2}>
             <Card border="1px solid gray"><Block padding={Block.REFS.PADDING.S}>2</Block></Card>
          </Grid.Item>
          <Grid.Item size={2}>
             <Card border="1px solid gray"><Block padding={Block.REFS.PADDING.S}>2</Block></Card>
          </Grid.Item>
          <Grid.Item size={3}>
             <Card border="1px solid gray"><Block padding={Block.REFS.PADDING.S}>3</Block></Card>
          </Grid.Item>
        </Grid>
      </div>
    </div>
    ))}
</div>
```

```jsx
<div className="omay-ds-block">
  {Object.keys(Grid.REFS.ALIGN_ITEMS).map(key => (
    <div className="omay-ds-block" key={key}>
      <div className="omay-ds-title m-center">{Grid.REFS.ALIGN_ITEMS[key]}</div>
      <div className="omay-ds-block">
        <Grid alignItems={Grid.REFS.ALIGN_ITEMS[key]}>
          <Grid.Item size={4}>
             <div className="omay-ds-block m-filled">
               1
             </div>
          </Grid.Item>
          <Grid.Item size={4}>
             <div className="omay-ds-block m-filled">
               1<br />2
             </div>
          </Grid.Item>
          <Grid.Item size={4}>
             <div className="omay-ds-block m-filled">
               1<br />2<br />3
             </div>
          </Grid.Item>
        </Grid>
      </div>
    </div>
  ))}
</div>
```

### Отступы
```jsx
<div className="omay-ds-block">
  {Object.keys(Grid.REFS.SPACING).map(key => (
    <div className="omay-ds-block" key={key}>
      <div className="omay-ds-title m-center">{Grid.REFS.SPACING[key]}</div>
      <div className="omay-ds-block">
        <Grid spacing={Grid.REFS.SPACING[key]}>
          <Grid.Item size={4}>
             <div className="omay-ds-block m-filled">4</div>
          </Grid.Item>
          <Grid.Item size={4}>
             <div className="omay-ds-block m-filled">4</div>
          </Grid.Item>
          <Grid.Item size={4}>
             <div className="omay-ds-block m-filled">4</div>
          </Grid.Item>
          <Grid.Item size={4}>
             <div className="omay-ds-block m-filled">4</div>
          </Grid.Item>
          <Grid.Item size={4}>
             <div className="omay-ds-block m-filled">4</div>
          </Grid.Item>
          <Grid.Item size={4}>
             <div className="omay-ds-block m-filled">4</div>
          </Grid.Item>
        </Grid>
      </div>
    </div>
  ))}
</div>
```

