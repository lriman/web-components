```jsx
import Grid, { Item } from '../Grid';

const items = [
  {
    id: 'block-1',
    direction: 'row',
    justify: 'center',
    size: 100,
    items: [
      { id: 'TS', placement: 'top', align: 'start' },
      { id: 'TC', placement: 'top', align: 'center' },
      { id: 'TE', placement: 'top', align: 'end' },
    ]
  },
  {
    id: 'block-2',
    direction: 'column',
    items: [
      { id: 'LS', placement: 'left', align: 'start' },
      { id: 'LC', placement: 'left', align: 'center' },
      { id: 'LE', placement: 'left', align: 'end' },
    ]
  },
  {
    id: 'block-3',
    direction: 'column',
    items: [
      { id: 'RS', placement: 'right', align: 'start' },
      { id: 'RC', placement: 'right', align: 'center' },
      { id: 'RE', placement: 'right', align: 'end' },
    ]
  },
  {
    id: 'block-4',
    direction: 'row',
    justify: 'center',
    size: 100,
    items: [
      { id: 'RS', placement: 'bottom', align: 'start' },
      { id: 'RC', placement: 'bottom', align: 'center' },
      { id: 'RE', placement: 'bottom', align: 'end' },
    ]
  },
];

<div className="sg-block" style={{ height: '1000px' }}>
  <Grid size={100} justify='spaceBetween'>
    {items.map(item => (
      <Item key={item.id} size={item.size}>
        <Grid direction={item.direction} justify={item.justify} spacing='xl'>
          {item.items.map(element => (
            <Item key={element.id}>
              <Tooltip>
                <Tooltip.Opener>
                  <div>
                    {element.placement} - {element.align}
                  </div>
                </Tooltip.Opener>
                <Tooltip.Box placement={element.placement} align={element.align}>
                  <div className="sg-block">tooltip box content</div>
                </Tooltip.Box>
              </Tooltip>
            </Item>
          ))}
        </Grid>
      </Item>
    ))}
  </Grid>
</div>
```