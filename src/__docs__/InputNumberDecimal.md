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
const InputNumberDecimalExample = require('../__examples__/InputNumberDecimal.example').default;
import Layout from '../Layout';

<div className="omay-ds-block m-clear-indent">
    <Layout>
        <Layout.Section type="normal">
            <Layout.Block>
              
                  {Object.keys(InputNumberDecimal.REFS.SIZES).map(size => (
                    <div className="omay-ds-block" key={size}>
                      <InputNumberDecimalExample
                        size={InputNumberDecimal.REFS.SIZES[size]}
                        label="Текстовое поле"
                      />
                    </div>
                  ))}
                  <div className="omay-ds-block">
                    <InputNumberDecimalExample
                      size={InputNumberDecimal.REFS.SIZES.S}
                      placeholder="С подсказкой"
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputNumberDecimalExample
                      label="С валютой"
                      units="₽"
                      textAlign={InputNumberDecimal.REFS.TEXT_ALIGN.LEFT}
                      isFormatted
                      isNegative
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputNumberDecimalExample
                      label="С валютой"
                      units="руб."
                      value={1000}
                      textAlign={InputNumberDecimal.REFS.TEXT_ALIGN.RIGHT}
                      isFormatted
                      isNegative
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputNumberDecimalExample
                      label="Ограничение длины"
                      value={1234}
                      maxLength={4}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputNumberDecimalExample
                      label="Текст по центру"
                      value={1234}
                      textAlign={InputNumberDecimal.REFS.TEXT_ALIGN.CENTER}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputNumberDecimalExample
                      label="Текст справа"
                      value={1234}
                      textAlign={InputNumberDecimal.REFS.TEXT_ALIGN.RIGHT}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputNumberDecimalExample
                      label="Ошибка"
                      isError
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputNumberDecimalExample
                      label="Предупреждение"
                      isWarning
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputNumberDecimalExample
                      label="Не доступно"
                      disabled
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputNumberDecimalExample
                      label="Отрицательные числа"
                      value={-10000}
                      isNegative
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputNumberDecimalExample
                      label="С форматированием"
                      value={10000}
                      isFormatted
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputNumberDecimalExample
                      label="4 знака после запятой"
                      value={10000}
                      frictionLength={4}
                    />
                  </div>

            </Layout.Block>
        </Layout.Section>
        <Layout.Section type="deep">
            <Layout.Block>

                  {Object.keys(InputNumberDecimal.REFS.SIZES).map(size => (
                    <div className="omay-ds-block" key={size}>
                      <InputNumberDecimalExample
                        size={InputNumberDecimal.REFS.SIZES[size]}
                        label="Текстовое поле"
                      />
                    </div>
                  ))}
                  <div className="omay-ds-block">
                    <InputNumberDecimalExample
                      size={InputNumberDecimal.REFS.SIZES.S}
                      placeholder="С подсказкой"
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputNumberDecimalExample
                      label="С валютой"
                      units="₽"
                      textAlign={InputNumberDecimal.REFS.TEXT_ALIGN.LEFT}
                      isFormatted
                      isNegative
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputNumberDecimalExample
                      label="С валютой"
                      units="руб."
                      value={1000}
                      textAlign={InputNumberDecimal.REFS.TEXT_ALIGN.RIGHT}
                      isFormatted
                      isNegative
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputNumberDecimalExample
                      label="Ограничение длины"
                      value={1234}
                      maxLength={4}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputNumberDecimalExample
                      label="Текст по центру"
                      value={1234}
                      textAlign={InputNumberDecimal.REFS.TEXT_ALIGN.CENTER}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputNumberDecimalExample
                      label="Текст справа"
                      value={1234}
                      textAlign={InputNumberDecimal.REFS.TEXT_ALIGN.RIGHT}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputNumberDecimalExample
                      label="Ошибка"
                      isError
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputNumberDecimalExample
                      label="Предупреждение"
                      isWarning
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputNumberDecimalExample
                      label="Не доступно"
                      disabled
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputNumberDecimalExample
                      label="Отрицательные числа"
                      value={-10000}
                      isNegative
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputNumberDecimalExample
                      label="С форматированием"
                      value={10000}
                      isFormatted
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputNumberDecimalExample
                      label="4 знака после запятой"
                      value={10000}
                      frictionLength={4}
                    />
                  </div>              

            </Layout.Block>
        </Layout.Section>
    </Layout>
</div>
```
