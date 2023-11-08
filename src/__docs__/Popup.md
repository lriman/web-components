```js static
import Popup, { Opener, Box } from '@levitovchess/components/lib/Popup'

Opener props: {
  display: {
    Type: enum,
    Default: null,
    Description: Object.values(REFS.DISPLAY)
  },
  isNotAutoOpen: {
    Type: bool,
    Default: false,
  },
  children: {
    Type: node,
    Default: null,
  },
}

Opener REFS: {
  DISPLAY: {
    INLINE: 'inline',
    BLOCK: 'block',
  },
}

Box props: {
  placement: {
    Type: enum,
    Default: null,
    Description: Object.values(REFS.PLASEMENT)
  },
  align: {
    Type: enum,
    Default: null,
    Description: Object.values(REFS.ALIGN)
  },
  isNotClosingOnEscPress: {
    Type: bool,
    Default: false,
  },
  isClosingOnMouseLeave: {
    Type: bool,
    Default: false,
  },
  children: {
    Type: node,
    Default: null,
  },
}

Box REFS: {
  PLACEMENT: {
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left',
  },
  ALIGN: {
    START: 'start',
    CENTER: 'center',
    END: 'end',
  },
}
```

### Popup placement and align
```jsx
<div className="omay-ds-block">
  {Object.keys(Popup.Box.REFS.PLACEMENT).map(placement => (
    <div className="omay-ds-block" key={placement}>

  {Object.keys(Popup.Box.REFS.ALIGN).map(align => (
    <div
      key={align}
      className={`omay-ds-block ${(Popup.Box.REFS.PLACEMENT[placement] === 'top' || Popup.Box.REFS.PLACEMENT[placement] === 'bottom') && 'm-center'} ${Popup.Box.REFS.PLACEMENT[placement] === 'left' && 'm-right'}`}
    >
    <Popup>
      <Popup.Opener>
        <div className="omay-popup-opener">{Popup.Box.REFS.PLACEMENT[placement]} {Popup.Box.REFS.ALIGN[align]}</div>
      </Popup.Opener>
      <Popup.Box placement={Popup.Box.REFS.PLACEMENT[placement]} align={Popup.Box.REFS.ALIGN[align]}>
        <div className="omay-popup-box">popup-box content</div>
      </Popup.Box>
    </Popup>
    </div>
  ))}

    </div>
  ))}
</div>
```

### Popup colors
```jsx
import Layout from '../Layout';

<div className="omay-ds-block m-clear-indent">
    <Layout>
        <Layout.Section type="normal">
            <Layout.Block>                
              <Popup>
                <Popup.Opener>
                  <div className="omay-popup-opener">popup-opener-normal</div>
                </Popup.Opener>
                <Popup.Box isNotClosingOnEscPress isClosingOnMouseLeave >
                  <div className="omay-popup-box">popup-box</div>
                </Popup.Box>
              </Popup>
            </Layout.Block>
        </Layout.Section>
        <Layout.Section type="main">
            <Layout.Block>                
              <Popup>
                <Popup.Opener>
                  <div className="omay-popup-opener">popup-opener-main</div>
                </Popup.Opener>
                <Popup.Box isNotClosingOnEscPress isClosingOnMouseLeave >
                  <div className="omay-popup-box">popup-box</div>
                </Popup.Box>
              </Popup>
            </Layout.Block>
        </Layout.Section>
    </Layout>
</div>
```

### Popup with isClosingOnMouseLeave and with isNotClosingOnEscPress
```jsx
<Popup>
  <Popup.Opener>
    <div className="omay-popup-opener">popup-opener</div>
  </Popup.Opener>
  <Popup.Box isNotClosingOnEscPress isClosingOnMouseLeave >
    <div className="omay-popup-box">popup-box</div>
  </Popup.Box>
</Popup>
```
