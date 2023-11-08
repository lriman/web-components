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
const InputNumberIntegerExample = require('../__examples__/InputNumberInteger.example').default;
import Layout from '../Layout';

<div className="omay-ds-block m-clear-indent">
    <Layout>
        <Layout.Section type="normal">
            <Layout.Block>
              
                  {Object.keys(InputNumberInteger.REFS.SIZES).map(size => (
                    <div className="omay-ds-block" key={size}>
                      <InputNumberIntegerExample
                        size={InputNumberInteger.REFS.SIZES[size]}
                        label="Текстовое поле"
                      />
                    </div>
                  ))}
                  <div className="omay-ds-block">
                    <InputNumberIntegerExample
                      size={InputNumberInteger.REFS.SIZES.S}
                      placeholder="С подсказкой"
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputNumberIntegerExample
                      label="С валютой"
                      units="₽"
                      textAlign={InputNumberInteger.REFS.TEXT_ALIGN.LEFT}
                      isFormatted
                      isNegative
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputNumberIntegerExample
                      label="С валютой"
                      units="руб."
                      value={1000}
                      textAlign={InputNumberInteger.REFS.TEXT_ALIGN.RIGHT}
                      isFormatted
                      isNegative
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputNumberIntegerExample
                      label="Ограничение длины"
                      value={1234}
                      maxLength={4}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputNumberIntegerExample
                      label="Текст по центру"
                      value={1234}
                      textAlign={InputNumberInteger.REFS.TEXT_ALIGN.CENTER}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputNumberIntegerExample
                      label="Текст справа"
                      value={1234}
                      textAlign={InputNumberInteger.REFS.TEXT_ALIGN.RIGHT}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputNumberIntegerExample
                      label="Ошибка"
                      isError
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputNumberIntegerExample
                      label="Предупреждение"
                      isWarning
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputNumberIntegerExample
                      label="Не доступно"
                      disabled
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputNumberIntegerExample
                      label="Отрицательные числа"
                      value={-10000}
                      isNegative
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputNumberIntegerExample
                      label="С форматированием"
                      value={10000}
                      isFormatted
                    />
                  </div>

            </Layout.Block>
        </Layout.Section>
        <Layout.Section type="deep">
            <Layout.Block>

                  {Object.keys(InputNumberInteger.REFS.SIZES).map(size => (
                    <div className="omay-ds-block" key={size}>
                      <InputNumberIntegerExample
                        size={InputNumberInteger.REFS.SIZES[size]}
                        label="Текстовое поле"
                      />
                    </div>
                  ))}
                  <div className="omay-ds-block">
                    <InputNumberIntegerExample
                      size={InputNumberInteger.REFS.SIZES.S}
                      placeholder="С подсказкой"
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputNumberIntegerExample
                      label="С валютой"
                      units="₽"
                      textAlign={InputNumberInteger.REFS.TEXT_ALIGN.LEFT}
                      isFormatted
                      isNegative
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputNumberIntegerExample
                      label="С валютой"
                      units="руб."
                      value={1000}
                      textAlign={InputNumberInteger.REFS.TEXT_ALIGN.RIGHT}
                      isFormatted
                      isNegative
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputNumberIntegerExample
                      label="Ограничение длины"
                      value={1234}
                      maxLength={4}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputNumberIntegerExample
                      label="Текст по центру"
                      value={1234}
                      textAlign={InputNumberInteger.REFS.TEXT_ALIGN.CENTER}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputNumberIntegerExample
                      label="Текст справа"
                      value={1234}
                      textAlign={InputNumberInteger.REFS.TEXT_ALIGN.RIGHT}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputNumberIntegerExample
                      label="Ошибка"
                      isError
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputNumberIntegerExample
                      label="Предупреждение"
                      isWarning
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputNumberIntegerExample
                      label="Не доступно"
                      disabled
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputNumberIntegerExample
                      label="Отрицательные числа"
                      value={-10000}
                      isNegative
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputNumberIntegerExample
                      label="С форматированием"
                      value={10000}
                      isFormatted
                    />
                  </div>              

            </Layout.Block>
        </Layout.Section>
    </Layout>
</div>
```
