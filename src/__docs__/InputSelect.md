### REFS

```js static
{
  SIZES: {
    S: 's',
    M: 'm',
    L: 'l',
  },
  POPUP_BOX_ALIGN: {
    START: 'start',
    END: 'end',
  },
  TYPES: {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
  },
}
```

```jsx
const InputSelectExample = require('../__examples__/InputSelect.example').default;
import Layout from '../Layout';

<div className="omay-ds-block m-clear-indent">
    <Layout>
        <Layout.Section type="normal">
            <Layout.Block>
              
              {Object.keys(InputSelect.REFS.SIZES).map(size => (
                <div className="omay-ds-block" key={size}>
                  <InputSelectExample
                    size={InputSelect.REFS.SIZES[size]}
                    label="Текстовое поле"
                  />
                </div>
              ))}
            
              <div className="omay-ds-block">
                <InputSelectExample
                  size={InputSelect.REFS.SIZES.S}
                  placeholder="С подсказкой"
                />
              </div>
              <div className="omay-ds-block">
                <InputSelectExample
                  label="Ошибка"
                  isError
                />
              </div>
              <div className="omay-ds-block">
                <InputSelectExample
                  label="Предупреждение"
                  isWarning
                />
              </div>
              <div className="omay-ds-block">
                <InputSelectExample
                  label="Не доступно"
                  disabled
                />
              </div>
              <div className="omay-ds-block">
                <InputSelectExample
                  label="Тип secondary"
                  type={InputSelect.REFS.TYPES.SECONDARY}
                />
              </div>
            </Layout.Block>
        </Layout.Section>
        <Layout.Section type="main">
            <Layout.Block>

              {Object.keys(InputSelect.REFS.SIZES).map(size => (
                <div className="omay-ds-block" key={size}>
                  <InputSelectExample
                    size={InputSelect.REFS.SIZES[size]}
                    label="Текстовое поле"
                  />
                </div>
              ))}
            
              <div className="omay-ds-block">
                <InputSelectExample
                  size={InputSelect.REFS.SIZES.S}
                  placeholder="С подсказкой"
                />
              </div>
              <div className="omay-ds-block">
                <InputSelectExample
                  label="Ошибка"
                  isError
                />
              </div>
              <div className="omay-ds-block">
                <InputSelectExample
                  label="Предупреждение"
                  isWarning
                />
              </div>
              <div className="omay-ds-block">
                <InputSelectExample
                  label="Не доступно"
                  disabled
                />
              </div>              
              <div className="omay-ds-block">
                <InputSelectExample
                  label="Тип secondary"
                  type={InputSelect.REFS.TYPES.SECONDARY}
                />
              </div>
            </Layout.Block>
        </Layout.Section>
    </Layout>
</div>
```
