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
const InputTextAreaExample = require('../__examples__/InputTextArea.example').default;
import Layout from '../Layout';

<div className="omay-ds-block m-clear-indent">
    <Layout>
        <Layout.Section type="normal">
            <Layout.Block>
              
                  {Object.keys(InputTextArea.REFS.SIZES).map(size => (
                    <div className="omay-ds-block" key={size}>
                      <InputTextAreaExample
                        size={InputTextArea.REFS.SIZES[size]}
                        label="Текстовое поле"
                      />
                    </div>
                  ))}
                  <div className="omay-ds-block">
                    <InputTextAreaExample
                      size={InputTextArea.REFS.SIZES.S}
                      placeholder="С подсказкой"
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputTextAreaExample
                      label="Ограничение длины"
                      value="1234"
                      maxLength={4}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputTextAreaExample
                      label="Текст по центру"
                      value="Текст по центру"
                      textAlign={InputTextArea.REFS.TEXT_ALIGN.CENTER}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputTextAreaExample
                      label="Текст справа"
                      value="Текст справа"
                      textAlign={InputTextArea.REFS.TEXT_ALIGN.RIGHT}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputTextAreaExample
                      label="Ошибка"
                      isError
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputTextAreaExample
                      label="Предупреждение"
                      isWarning
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputTextAreaExample
                      label="Не доступно"
                      disabled
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputTextAreaExample
                      label="Больше строк"
                      rows={7}
                    />
                  </div>

            </Layout.Block>
        </Layout.Section>
        <Layout.Section type="deep">
            <Layout.Block>

                  {Object.keys(InputTextArea.REFS.SIZES).map(size => (
                    <div className="omay-ds-block" key={size}>
                      <InputTextAreaExample
                        size={InputTextArea.REFS.SIZES[size]}
                        label="Текстовое поле"
                      />
                    </div>
                  ))}
                  <div className="omay-ds-block">
                    <InputTextAreaExample
                      size={InputTextArea.REFS.SIZES.S}
                      placeholder="С подсказкой"
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputTextAreaExample
                      label="Ограничение длины"
                      value="1234"
                      maxLength={4}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputTextAreaExample
                      label="Текст по центру"
                      value="Текст по центру"
                      textAlign={InputTextArea.REFS.TEXT_ALIGN.CENTER}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputTextAreaExample
                      label="Текст справа"
                      value="Текст справа"
                      textAlign={InputTextArea.REFS.TEXT_ALIGN.RIGHT}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputTextAreaExample
                      label="Ошибка"
                      isError
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputTextAreaExample
                      label="Предупреждение"
                      isWarning
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputTextAreaExample
                      label="Не доступно"
                      disabled
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputTextAreaExample
                      label="Больше строк"
                      rows={7}
                    />
                  </div>              

            </Layout.Block>
        </Layout.Section>
    </Layout>
</div>
```
