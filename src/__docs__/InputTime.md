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
const InputTimeExample = require('../__examples__/InputTime.example').default;
import Layout from '../Layout';

<div className="omay-ds-block m-clear-indent">
    <Layout>
        <Layout.Section type="normal">
            <Layout.Block>
              
                  {Object.keys(InputTime.REFS.SIZES).map(size => (
                    <div className="omay-ds-block" key={size}>
                      <InputTimeExample
                        size={InputTime.REFS.SIZES[size]}
                        label="Текстовое поле"
                      />
                    </div>
                  ))}

                  <div className="omay-ds-block">
                    <InputTimeExample
                      size={InputTime.REFS.SIZES.S}
                      placeholder="С подсказкой"
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputTimeExample
                      label="Ограничение длины"
                      value="12:13"
                      maxLength={4}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputTimeExample
                      label="Ошибка"
                      isError
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputTimeExample
                      label="Предупреждение"
                      isWarning
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputTimeExample
                      label="Не доступно"
                      disabled
                    />
                  </div>

            </Layout.Block>
        </Layout.Section>
        <Layout.Section type="deep">
            <Layout.Block>

                  {Object.keys(InputTime.REFS.SIZES).map(size => (
                    <div className="omay-ds-block" key={size}>
                      <InputTimeExample
                        size={InputTime.REFS.SIZES[size]}
                        label="Текстовое поле"
                      />
                    </div>
                  ))}
                  <div className="omay-ds-block">
                    <InputTimeExample
                      size={InputTime.REFS.SIZES.S}
                      placeholder="С подсказкой"
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputTimeExample
                      label="Ограничение длины"
                      value="00:00"
                      maxLength={4}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputTimeExample
                      label="Текст по центру"
                      value="23:23"
                      textAlign={InputTime.REFS.TEXT_ALIGN.CENTER}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputTimeExample
                      label="Текст справа"
                      value="10:00"
                      textAlign={InputTime.REFS.TEXT_ALIGN.RIGHT}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputTimeExample
                      label="Ошибка"
                      isError
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputTimeExample
                      label="Предупреждение"
                      isWarning
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputTimeExample
                      label="Не доступно"
                      disabled
                    />
                  </div>              

            </Layout.Block>
        </Layout.Section>
    </Layout>
</div>
```
