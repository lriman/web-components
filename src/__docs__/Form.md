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

```jsx
import Grid, { Item } from '../Grid';
import InputText from '../Input/InputText';

<div className="omay-ds-block">
  {Object.keys(Form.REFS.SIZES).map(size => (
    <div className="omay-ds-block" key={size}>
      <Form size={Form.REFS.SIZES[size]}>
        <Grid>
          <Item size={12} tablet={4}>
            <Form.Field>
              <InputText id={`Field1_${size}`} onChange={() => {}} label="Текстовое поле 1" />
            </Form.Field>
          </Item>
          <Item size={12} tablet={4}>
            <Form.Field error="Поле обязательно для заполнения">
              <InputText id={`Field2_${size}`} onChange={() => {}} label="Текстовое поле 2" isError />
            </Form.Field>
          </Item>
          <Item size={12} tablet={4}>
            <Form.Field>
              <InputText id={`Field3_${size}`} onChange={() => {}} label="Текстовое поле 3" />
            </Form.Field>
          </Item>
        </Grid>
      </Form>
    </div>
  ))}
</div>
```
