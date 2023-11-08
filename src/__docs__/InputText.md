### REFS

```js static
{
  SIZES: {
    S: 's',
    M: 'm',
    L: 'l',
  },
  TEXT_ALIGN: {
    LEFT: 'left',
    CENTER: 'center',
    RIGHT: 'right',
  },
}
```

```jsx
const InputTextExample = require('../__examples__/InputText.example').default;
import Layout from '../Layout';

<div className="omay-ds-block m-clear-indent">
    <Layout>
        <Layout.Section type="normal">
            <Layout.Block>
              {Object.keys(InputText.REFS.SIZES).map(size => (
                <div className="omay-ds-block" key={size}>
                  <InputTextExample
                    size={InputText.REFS.SIZES[size]}
                    label="Текстовое поле"
                  />
                </div>
              ))}
            
              <div className="omay-ds-block">
                <InputTextExample
                  size={InputText.REFS.SIZES.S}
                  placeholder="С подсказкой"
                />
              </div>
              <div className="omay-ds-block">
                <InputTextExample
                  label="Ограничение длины"
                  value="1234"
                  maxLength={4}
                />
              </div>
              <div className="omay-ds-block">
                <InputTextExample
                  label="Текст по центру"
                  value="Текст по центру"
                  textAlign={InputText.REFS.TEXT_ALIGN.CENTER}
                />
              </div>
              <div className="omay-ds-block">
                <InputTextExample
                  label="Текст справа"
                  value="Текст справа"
                  textAlign={InputText.REFS.TEXT_ALIGN.RIGHT}
                />
              </div>
              <div className="omay-ds-block">
                <InputTextExample
                  label="Ошибка"
                  isError
                />
              </div>
              <div className="omay-ds-block">
                <InputTextExample
                  label="Предупреждение"
                  isWarning
                />
              </div>
              <div className="omay-ds-block">
                <InputTextExample
                  label="Не доступно"
                  value="Не доступно"
                  disabled
                />
              </div>

            </Layout.Block>
        </Layout.Section>
        <Layout.Section type="deep">
            <Layout.Block>
              {Object.keys(InputText.REFS.SIZES).map(size => (
                <div className="omay-ds-block" key={size}>
                  <InputTextExample
                    id={`InputText_Inverse_${InputText.REFS.SIZES[size]}`}
                    size={InputText.REFS.SIZES[size]}
                    label="Текстовое поле"
                  />
                </div>
              ))}

              <div className="omay-ds-block">
                <InputTextExample
                  size={InputText.REFS.SIZES.S}
                  placeholder="С подсказкой"
                />
              </div>
              <div className="omay-ds-block">
                <InputTextExample
                  label="Ограничение длины"
                  value="1234"
                  maxLength={4}
                />
              </div>
              <div className="omay-ds-block">
                <InputTextExample
                  label="Текст по центру"
                  value="Текст по центру"
                  textAlign={InputText.REFS.TEXT_ALIGN.CENTER}
                />
              </div>
              <div className="omay-ds-block">
                <InputTextExample
                  label="Текст справа"
                  value="Текст справа"
                  textAlign={InputText.REFS.TEXT_ALIGN.RIGHT}
                />
              </div>
              <div className="omay-ds-block">
                <InputTextExample
                  label="Ошибка"
                  isError
                />
              </div>
              <div className="omay-ds-block">
                <InputTextExample
                  label="Предупреждение"
                  isWarning
                />
              </div>
              <div className="omay-ds-block">
                <InputTextExample
                  label="Не доступно"
                  value="Не доступно"
                  disabled
                />
              </div>

            </Layout.Block>
        </Layout.Section>
    </Layout>
</div>
```
