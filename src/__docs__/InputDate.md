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
const InputDateExample = require('../__examples__/InputDate.example').default;
import Layout from '../Layout';

<div className="omay-ds-block m-clear-indent">
    <Layout>
        <Layout.Section type="normal">
            <Layout.Block>

              {Object.keys(InputDate.REFS.SIZES).map(size => (
                <div className="omay-ds-block" key={size}>
                  <InputDateExample
                    size={InputDate.REFS.SIZES[size]}
                    label="Дата"
                  />
                </div>
              ))}

              <div className="omay-ds-block">
                <InputDateExample
                  size={InputDate.REFS.SIZES.S}
                  placeholder="С подсказкой"
                />
              </div>
              <div className="omay-ds-block">
                <InputDateExample
                  label="Ошибка"
                  isError
                />
              </div>
              <div className="omay-ds-block">
                <InputDateExample
                  label="Предупреждение"
                  isWarning
                />
              </div>
              <div className="omay-ds-block">
                <InputDateExample
                  label="Не доступно"
                  disabled
                />
              </div>
              <div className="omay-ds-block">
                <InputDateExample
                  label="Не очищаемое"
                  uncleanable
                />
              </div>

            </Layout.Block>
        </Layout.Section>
        <Layout.Section type="deep">
            <Layout.Block>

              {Object.keys(InputDate.REFS.SIZES).map(size => (
                <div className="omay-ds-block" key={size}>
                  <InputDateExample
                    size={InputDate.REFS.SIZES[size]}
                    label="Дата"
                  />
                </div>
              ))}

              <div className="omay-ds-block">
                <InputDateExample
                  size={InputDate.REFS.SIZES.S}
                  placeholder="С подсказкой"
                />
              </div>
              <div className="omay-ds-block">
                <InputDateExample
                  label="Ошибка"
                  isError
                />
              </div>
              <div className="omay-ds-block">
                <InputDateExample
                  label="Предупреждение"
                  isWarning
                />
              </div>
              <div className="omay-ds-block">
                <InputDateExample
                  label="Не доступно"
                  disabled
                />
              </div>
              <div className="omay-ds-block">
                <InputDateExample
                  label="Не очищаемое"
                  uncleanable
                />
              </div>

            </Layout.Block>
        </Layout.Section>
    </Layout>
</div>
```
