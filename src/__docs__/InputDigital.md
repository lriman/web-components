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
const InputDigitalExample = require('../__examples__/InputDigital.example').default;
import Layout from '../Layout';

<div className="omay-ds-block m-clear-indent">
    <Layout>
        <Layout.Section type="normal">
            <Layout.Block>
              
                  {Object.keys(InputDigital.REFS.SIZES).map(size => (
                    <div className="omay-ds-block" key={size}>
                      <InputDigitalExample
                        size={InputDigital.REFS.SIZES[size]}
                        label="Текстовое поле"
                      />
                    </div>
                  ))}

                  <div className="omay-ds-block">
                    <InputDigitalExample
                      size={InputDigital.REFS.SIZES.S}
                      placeholder="С подсказкой"
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputDigitalExample
                      label="Ограничение длины"
                      value="1234"
                      maxLength={4}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputDigitalExample
                      label="Текст по центру"
                      value="1234"
                      textAlign={InputDigital.REFS.TEXT_ALIGN.CENTER}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputDigitalExample
                      label="Текст справа"
                      value="1234"
                      textAlign={InputDigital.REFS.TEXT_ALIGN.RIGHT}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputDigitalExample
                      label="Ошибка"
                      isError
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputDigitalExample
                      label="Предупреждение"
                      isWarning
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputDigitalExample
                      label="Не доступно"
                      disabled
                    />
                  </div>

            </Layout.Block>
        </Layout.Section>
        <Layout.Section type="deep">
            <Layout.Block>

                  {Object.keys(InputDigital.REFS.SIZES).map(size => (
                    <div className="omay-ds-block" key={size}>
                      <InputDigitalExample
                        size={InputDigital.REFS.SIZES[size]}
                        label="Текстовое поле"
                      />
                    </div>
                  ))}

                  <div className="omay-ds-block">
                    <InputDigitalExample
                      size={InputDigital.REFS.SIZES.S}
                      placeholder="С подсказкой"
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputDigitalExample
                      label="Ограничение длины"
                      value="1234"
                      maxLength={4}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputDigitalExample
                      label="Текст по центру"
                      value="1234"
                      textAlign={InputDigital.REFS.TEXT_ALIGN.CENTER}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputDigitalExample
                      label="Текст справа"
                      value="1234"
                      textAlign={InputDigital.REFS.TEXT_ALIGN.RIGHT}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputDigitalExample
                      label="Ошибка"
                      isError
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputDigitalExample
                      label="Предупреждение"
                      isWarning
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputDigitalExample
                      label="Не доступно"
                      disabled
                    />
                  </div>              

            </Layout.Block>
        </Layout.Section>
    </Layout>
</div>
```
