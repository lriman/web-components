```js static
REFS: {
  SIZES: {
    XS: 'xs',
    S: 's',
    M: 'm',
    L: 'l',
    XL: 'xl',
  },
  
  SPACING: {
    XS: 'xs',
    S: 's',
    M: 'm',
    L: 'l',
    XL: 'xl',
  },

  BORDER: {
    HORIZONTAL: 'horizontal',
    VERTICAL: 'vertical',
    EVERYWHERE: 'everywhere',
  },
}
```

```js static
import Table, { Row, Cell } from '@levitovchess/components/lib/Table'

Row props: {
  verticalAlign: {
    Type: enum,
    Default: null,
    Description: Object.values(REFS.VERTICAL_ALIGN)
  },
  children: {
      Type: node,
      Default: Required,
  },
}

Row REFS: {
  VERTICAL_ALIGN: {
    TOP: 'top',
    MIDDLE: 'middle',
    BOTTOM: 'bottom',
  },
}

Cell props: {
  textAlign: {
    Type: enum,
    Default: null,
    Description: Object.values(REFS.TEXT_ALIGN)
  },
  children: {
      Type: node,
      Default: null,
  },
}

Cell REFS: {
  TEXT_ALIGN: {
    LEFT: 'left',
    CENTER: 'center',
    RIGHT: 'right',
    JUSTIFY: 'justify',
  },
}
```


### Размеры
```jsx
<div className="omay-ds-block">
  {Object.keys(Table.REFS.SIZES).map(item => (
    <div className="omay-ds-block" key={item}>
      <Table size={Table.REFS.SIZES[item]}>
        <Table.Row>
          <Table.Cell>
            <div className="omay-ds-block m-filled">Row 1 Cell 1</div>
          </Table.Cell>
          <Table.Cell>
            <div className="omay-ds-block m-filled">Row 1 Cell 2</div>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <div className="omay-ds-block m-filled">Row 2 Cell 1</div>
          </Table.Cell>
          <Table.Cell>
            <div className="omay-ds-block m-filled">Row 2 Cell 2</div>
          </Table.Cell>
        </Table.Row>
      </Table>
    </div>
  ))}
</div>
```

### Отступы
```jsx
<div className="omay-ds-block">
  {Object.keys(Table.REFS.SPACING).map(item => (
    <div className="omay-ds-block" key={item}>
      <Table spacing={Table.REFS.SPACING[item]}>
        <Table.Row>
          <Table.Cell>
            <div className="omay-ds-block m-filled">Row 1 Cell 1</div>
          </Table.Cell>
          <Table.Cell>
            <div className="omay-ds-block m-filled">Row 1 Cell 2</div>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <div className="omay-ds-block m-filled">Row 2 Cell 1</div>
          </Table.Cell>
          <Table.Cell>
            <div className="omay-ds-block m-filled">Row 2 Cell 2</div>
          </Table.Cell>
        </Table.Row>
      </Table>
    </div>
  ))}
</div>
```

### Расположения рядов и ячеек
```jsx
<div className="omay-ds-block">
  <Table>
    <Table.Row verticalAlign={Table.Row.REFS.VERTICAL_ALIGN.TOP}>
      <Table.Cell textAlign={Table.Cell.REFS.TEXT_ALIGN.LEFT}>
        <div className="omay-ds-block m-filled">1<br />2<br />3</div>
      </Table.Cell>
      <Table.Cell textAlign={Table.Cell.REFS.TEXT_ALIGN.CENTER}>
        <div className="omay-ds-block m-filled">1<br />2</div>
      </Table.Cell>
      <Table.Cell textAlign={Table.Cell.REFS.TEXT_ALIGN.RIGHT}>
        <div className="omay-ds-block m-filled">1</div>
      </Table.Cell>
    </Table.Row>
    <Table.Row verticalAlign={Table.Row.REFS.VERTICAL_ALIGN.MIDDLE}>
      <Table.Cell textAlign={Table.Cell.REFS.TEXT_ALIGN.LEFT}>
        <div className="omay-ds-block m-filled">1<br />2<br />3</div>
      </Table.Cell>
      <Table.Cell textAlign={Table.Cell.REFS.TEXT_ALIGN.CENTER}>
        <div className="omay-ds-block m-filled">1<br />2</div>
      </Table.Cell>
      <Table.Cell textAlign={Table.Cell.REFS.TEXT_ALIGN.RIGHT}>
        <div className="omay-ds-block m-filled">1</div>
      </Table.Cell>
    </Table.Row>
    <Table.Row verticalAlign={Table.Row.REFS.VERTICAL_ALIGN.BOTTOM}>
      <Table.Cell textAlign={Table.Cell.REFS.TEXT_ALIGN.LEFT}>
        <div className="omay-ds-block m-filled">1<br />2<br />3</div>
      </Table.Cell>
      <Table.Cell textAlign={Table.Cell.REFS.TEXT_ALIGN.CENTER}>
        <div className="omay-ds-block m-filled">1<br />2</div>
      </Table.Cell>
      <Table.Cell textAlign={Table.Cell.REFS.TEXT_ALIGN.RIGHT}>
        <div className="omay-ds-block m-filled">1</div>
      </Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell textAlign={Table.Cell.REFS.TEXT_ALIGN.JUSTIFY}>
        <div className="omay-ds-block m-filled">Являясь всего лишь частью общей картины, акционеры крупнейших компаний ассоциативно распределены по отраслям.</div>
      </Table.Cell>
      <Table.Cell textAlign={Table.Cell.REFS.TEXT_ALIGN.JUSTIFY}>
        <div className="omay-ds-block m-filled">Являясь всего лишь частью общей картины, акционеры крупнейших компаний ассоциативно распределены по отраслям.</div>
      </Table.Cell>
      <Table.Cell textAlign={Table.Cell.REFS.TEXT_ALIGN.JUSTIFY}>
        <div className="omay-ds-block m-filled">Являясь всего лишь частью общей картины, акционеры крупнейших компаний ассоциативно распределены по отраслям.</div>
      </Table.Cell>
    </Table.Row>
  </Table>
</div>
```

### Границы
```jsx
<div className="omay-ds-block">
  {Object.keys(Table.REFS.BORDER).map(item => (
    <div className="omay-ds-block" key={item}>
      <Table border={Table.REFS.BORDER[item]}>
        <Table.Row>
          <Table.Cell>
            Label
          </Table.Cell>
          <Table.Cell textAlign={Table.Cell.REFS.TEXT_ALIGN.RIGHT}>
            Value
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            Label
          </Table.Cell>
          <Table.Cell textAlign={Table.Cell.REFS.TEXT_ALIGN.RIGHT}>
            Value
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            Label
          </Table.Cell>
          <Table.Cell textAlign={Table.Cell.REFS.TEXT_ALIGN.RIGHT}>
            Value
          </Table.Cell>
        </Table.Row>
      </Table>
    </div>
  ))}
</div>
```