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
const InputPhoneExample = require('../__examples__/InputPhone.example').default;
import Layout from '../Layout';

<div className="omay-ds-block m-clear-indent">
    <Layout>
        <Layout.Section type="normal">
            <Layout.Block>
              
                  {Object.keys(InputPhone.REFS.SIZES).map(size => (
                    <div className="omay-ds-block" key={size}>
                      <InputPhoneExample
                        size={InputPhone.REFS.SIZES[size]}
                        label="Текстовое поле"
                      />
                    </div>
                  ))}
                  <div className="omay-ds-block">
                    <InputPhoneExample
                      size={InputPhone.REFS.SIZES.S}
                      placeholder="С подсказкой"
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputPhoneExample
                      label="Ограничение длины"
                      value="1234567890"
                      maxLength={4}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputPhoneExample
                      label="Текст по центру"
                      value="1234567890"
                      textAlign={InputPhone.REFS.TEXT_ALIGN.CENTER}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputPhoneExample
                      label="Текст справа"
                      value="1234567890"
                      textAlign={InputPhone.REFS.TEXT_ALIGN.RIGHT}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputPhoneExample
                      label="Ошибка"
                      isError
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputPhoneExample
                      label="Предупреждение"
                      isWarning
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputPhoneExample
                      label="Не доступно"
                      disabled
                    />
                  </div>

            </Layout.Block>
        </Layout.Section>
        <Layout.Section type="deep">
            <Layout.Block>

                  {Object.keys(InputPhone.REFS.SIZES).map(size => (
                    <div className="omay-ds-block" key={size}>
                      <InputPhoneExample
                        size={InputPhone.REFS.SIZES[size]}
                        label="Текстовое поле"
                      />
                    </div>
                  ))}
                  <div className="omay-ds-block">
                    <InputPhoneExample
                      size={InputPhone.REFS.SIZES.S}
                      placeholder="С подсказкой"
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputPhoneExample
                      label="Ограничение длины"
                      value="1234567890"
                      maxLength={4}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputPhoneExample
                      label="Текст по центру"
                      value="1234567890"
                      textAlign={InputPhone.REFS.TEXT_ALIGN.CENTER}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputPhoneExample
                      label="Текст справа"
                      value="1234567890"
                      textAlign={InputPhone.REFS.TEXT_ALIGN.RIGHT}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputPhoneExample
                      label="Ошибка"
                      isError
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputPhoneExample
                      label="Предупреждение"
                      isWarning
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputPhoneExample
                      label="Не доступно"
                      disabled
                    />
                  </div>              

            </Layout.Block>
        </Layout.Section>
    </Layout>
</div>
```
