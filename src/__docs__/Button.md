### REFS

```js static
{
  TYPES: {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    OUTLINE: 'outline',
    TERTIARY: 'tertiary',
    MUTED: 'muted',
    BRAND: 'brand',
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

### Button Types and Dimensions

```jsx
import IconSearch from '../Icon/IconSearch';

<div className="omay-ds-block">
  {Object.keys(Button.REFS.SIZES).map(size => (
    <div className="omay-ds-list" key={size}>
      {Object.keys(Button.REFS.TYPES).map(type => (
        <div className="omay-ds-list-item" key={type}>
          <Button
            id={`Button_${Button.REFS.TYPES[type]}`}
            type={Button.REFS.TYPES[type]}
            size={Button.REFS.SIZES[size]}
            onClick={() => {}}
          >
            size {Button.REFS.SIZES[size]} type {Button.REFS.TYPES[type]}
          </Button>
        </div>
      ))}
    </div>
  ))}
  {Object.keys(Button.REFS.SIZES).map(size => (
    <div className="omay-ds-list" key={size}>
      {Object.keys(Button.REFS.TYPES).map(type => (
        <div className="omay-ds-list-item" key={type}>
          <div className="omay-ds-block">
              <Button
                id={`Button_${Button.REFS.TYPES[type]}`}
                type={Button.REFS.TYPES[type]}
                size={Button.REFS.SIZES[size]}
                onClick={() => {}}
              >
                <IconSearch size="s" />
                <span>Поиск</span>
              </Button>
          </div>
          <div className="omay-ds-block">
              <Button
                id={`Button_${Button.REFS.TYPES[type]}`}
                type={Button.REFS.TYPES[type]}
                size={Button.REFS.SIZES[size]}
                onClick={() => {}}
              >
                <span>Поиск</span>
                <IconSearch size="s" />
              </Button>
          </div>
        </div>
      ))}
    </div>
  ))}
</div>
```
### Button Types
```jsx
import Layout from '../Layout';
import Grid , { Item } from '../Grid';

<div className="omay-ds-block m-clear-indent">
    <Layout>
        <Layout.Section type="normal">
            <Layout.Block>
              <Grid>
                <Item>
                  {Object.keys(Button.REFS.TYPES).map(type => (
                    <div className="omay-ds-block" key={type}>
                      <Button
                        id={`Button_${Button.REFS.TYPES[type]}`}
                        type={Button.REFS.TYPES[type]}                     
                        onClick={() => {}}
                      >
                        type {Button.REFS.TYPES[type]}
                      </Button>
                      </div>
                  ))}
                </Item>
                <Item>
                  {Object.keys(Button.REFS.TYPES).map(type => (
                  <div className="omay-ds-block" key={type}>
                    <Button
                      id={`Button_${Button.REFS.TYPES[type]}`}
                      type={Button.REFS.TYPES[type]}                     
                      onClick={() => {}}
                      isActive
                    >
                      type {Button.REFS.TYPES[type]} active
                    </Button>
                    </div>
                  ))}
                </Item>
              </Grid>
            <div className="omay-ds-block">
              <Button
                id="ButtonE1"
                onClick={() => {}}
                isLoading
              >
                Идет загрузка
              </Button>
            </div>
            <div className="omay-ds-block">
              <Button
                id="ButtonE1"
                onClick={() => {}}
                disabled
              >
                Недоступно
              </Button>
            </div>
            </Layout.Block>
        </Layout.Section>
        <Layout.Section type="main">
            <Layout.Block>
              <Grid>
                <Item>
                  {Object.keys(Button.REFS.TYPES).map(type => (
                    <div className="omay-ds-block" key={type}>
                      <Button
                        id={`Button_${Button.REFS.TYPES[type]}`}
                        type={Button.REFS.TYPES[type]}                    
                        onClick={() => {}}
                      >
                        type {Button.REFS.TYPES[type]}
                      </Button>
                    </div>
                  ))}
                </Item>
                <Item>
                  {Object.keys(Button.REFS.TYPES).map(type => (
                    <div className="omay-ds-block" key={type}>
                      <Button
                        id={`Button_${Button.REFS.TYPES[type]}`}
                        type={Button.REFS.TYPES[type]}                    
                        onClick={() => {}}
                        isActive
                      >
                        type {Button.REFS.TYPES[type]} active
                      </Button>
                    </div>
                  ))}   
                </Item>
              </Grid>

            <div className="omay-ds-block">
              <Button
                id="ButtonE1"
                onClick={() => {}}
                isLoading
              >
                Идет загрузка
              </Button>
            </div>
            <div className="omay-ds-block">
              <Button
                id="ButtonE1"
                onClick={() => {}}
                disabled
              >
                Недоступно
              </Button>
            </div>
            </Layout.Block>
        </Layout.Section>
    </Layout>
</div>
```
