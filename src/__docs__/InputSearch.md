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
  POPUP_BOX_ALIGN: {
    START: 'start',
    END: 'end',
  },
}
```

```jsx
const InputSearchExample = require('../__examples__/InputSearch.example').default;
import Layout from '../Layout';

<div className="omay-ds-block m-clear-indent">
    <Layout>
        <Layout.Section type="normal">
            <Layout.Block>
              
                  {Object.keys(InputSearch.REFS.SIZES).map(size => (
                    <div className="omay-ds-block" key={size}>
                      <InputSearchExample
                        size={InputSearch.REFS.SIZES[size]}
                        label="Текстовое поле"
                      />
                    </div>
                  ))}
                  <div className="omay-ds-block">
                    <InputSearchExample
                      size={InputSearch.REFS.SIZES.S}
                      placeholder="С подсказкой"
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputSearchExample
                      label="Ограничение длины"
                      value="1234"
                      maxLength={4}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputSearchExample
                      label="Текст по центру"
                      value="Текст по центру"
                      textAlign={InputSearch.REFS.TEXT_ALIGN.CENTER}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputSearchExample
                      label="Текст справа"
                      value="Текст справа"
                      textAlign={InputSearch.REFS.TEXT_ALIGN.RIGHT}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputSearchExample
                      label="Ошибка"
                      isError
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputSearchExample
                      label="Предупреждение"
                      isWarning
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputSearchExample
                      label="Не доступно"
                      disabled
                    />
                  </div>

            </Layout.Block>
        </Layout.Section>
        <Layout.Section type="deep">
            <Layout.Block>

                  {Object.keys(InputSearch.REFS.SIZES).map(size => (
                    <div className="omay-ds-block" key={size}>
                      <InputSearchExample
                        size={InputSearch.REFS.SIZES[size]}
                        label="Текстовое поле"
                      />
                    </div>
                  ))}
                  <div className="omay-ds-block">
                    <InputSearchExample
                      size={InputSearch.REFS.SIZES.S}
                      placeholder="С подсказкой"
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputSearchExample
                      label="Ограничение длины"
                      value="1234"
                      maxLength={4}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputSearchExample
                      label="Текст по центру"
                      value="Текст по центру"
                      textAlign={InputSearch.REFS.TEXT_ALIGN.CENTER}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputSearchExample
                      label="Текст справа"
                      value="Текст справа"
                      textAlign={InputSearch.REFS.TEXT_ALIGN.RIGHT}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputSearchExample
                      label="Ошибка"
                      isError
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputSearchExample
                      label="Предупреждение"
                      isWarning
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputSearchExample
                      label="Не доступно"
                      disabled
                    />
                  </div>              

            </Layout.Block>
        </Layout.Section>
    </Layout>
</div>
```
