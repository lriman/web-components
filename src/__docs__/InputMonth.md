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
  SEPARATORS = {
    DOT: '.',
    DASH: '-',
    SLASH: '/',
  },
}
```

```jsx
const InputMonthExample = require('../__examples__/InputMonth.example').default;
import Layout from '../Layout';

<div className="omay-ds-block m-clear-indent">
    <Layout>
        <Layout.Section type="normal">
            <Layout.Block>
              
                  {Object.keys(InputMonth.REFS.SIZES).map(size => (
                    <div className="omay-ds-block" key={size}>
                      <InputMonthExample
                        size={InputMonth.REFS.SIZES[size]}
                        label="Текстовое поле"
                      />
                    </div>
                  ))}
                  <div className="omay-ds-block">
                    <InputMonthExample
                      size={InputMonth.REFS.SIZES.S}
                      placeholder="С подсказкой"
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputMonthExample
                      label="Ограничение длины"
                      value="1234"
                      maxLength={4}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputMonthExample
                      label="Текст по центру"
                      value="1234"
                      textAlign={InputMonth.REFS.TEXT_ALIGN.CENTER}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputMonthExample
                      label="Текст справа"
                      value="1234"
                      textAlign={InputMonth.REFS.TEXT_ALIGN.RIGHT}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputMonthExample
                      label="Ошибка"
                      isError
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputMonthExample
                      label="Предупреждение"
                      isWarning
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputMonthExample
                      label="Не доступно"
                      disabled
                    />
                  </div>


            </Layout.Block>
        </Layout.Section>
        <Layout.Section type="deep">
            <Layout.Block>

                  {Object.keys(InputMonth.REFS.SIZES).map(size => (
                    <div className="omay-ds-block" key={size}>
                      <InputMonthExample
                        size={InputMonth.REFS.SIZES[size]}
                        label="Текстовое поле"
                      />
                    </div>
                  ))}
                  <div className="omay-ds-block">
                    <InputMonthExample
                      size={InputMonth.REFS.SIZES.S}
                      placeholder="С подсказкой"
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputMonthExample
                      label="Ограничение длины"
                      value="1234"
                      maxLength={4}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputMonthExample
                      label="Текст по центру"
                      value="1234"
                      textAlign={InputMonth.REFS.TEXT_ALIGN.CENTER}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputMonthExample
                      label="Текст справа"
                      value="1234"
                      textAlign={InputMonth.REFS.TEXT_ALIGN.RIGHT}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputMonthExample
                      label="Ошибка"
                      isError
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputMonthExample
                      label="Предупреждение"
                      isWarning
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputMonthExample
                      label="Не доступно"
                      disabled
                    />
                  </div>
              

            </Layout.Block>
        </Layout.Section>
    </Layout>
</div>
```
