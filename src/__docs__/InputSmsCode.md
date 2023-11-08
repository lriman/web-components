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
const InputSmsCodeExample = require('../__examples__/InputSmsCode.example').default;
import Layout from '../Layout';

<div className="omay-ds-block m-clear-indent">
    <Layout>
        <Layout.Section type="normal">
            <Layout.Block>
              
                  {Object.keys(InputSmsCode.REFS.SIZES).map(size => (
                    <div className="omay-ds-block" key={size}>
                      <InputSmsCodeExample
                        size={InputSmsCode.REFS.SIZES[size]}
                        label="Текстовое поле"
                      />
                    </div>
                  ))}
                  <div className="omay-ds-block">
                    <InputSmsCodeExample
                      size={InputSmsCode.REFS.SIZES.S}
                      placeholder="С подсказкой"
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputSmsCodeExample
                      label="Шестизначный"
                      value="123456"
                      maxLength={6}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputSmsCodeExample
                      label="Текст по центру"
                      value="1234"
                      textAlign={InputSmsCode.REFS.TEXT_ALIGN.CENTER}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputSmsCodeExample
                      label="Текст справа"
                      value="1234"
                      textAlign={InputSmsCode.REFS.TEXT_ALIGN.RIGHT}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputSmsCodeExample
                      label="Ошибка"
                      isError
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputSmsCodeExample
                      label="Предупреждение"
                      isWarning
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputSmsCodeExample
                      label="Не доступно"
                      disabled
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputSmsCodeExample
                      label="Скрытый"
                      isHidden
                    />
                  </div>

            </Layout.Block>
        </Layout.Section>
        <Layout.Section type="deep">
            <Layout.Block>

                  {Object.keys(InputSmsCode.REFS.SIZES).map(size => (
                    <div className="omay-ds-block" key={size}>
                      <InputSmsCodeExample
                        size={InputSmsCode.REFS.SIZES[size]}
                        label="Текстовое поле"
                      />
                    </div>
                  ))}
                  <div className="omay-ds-block">
                    <InputSmsCodeExample
                      size={InputSmsCode.REFS.SIZES.S}
                      placeholder="С подсказкой"
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputSmsCodeExample
                      label="Шестизначный"
                      value="123456"
                      maxLength={6}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputSmsCodeExample
                      label="Текст по центру"
                      value="1234"
                      textAlign={InputSmsCode.REFS.TEXT_ALIGN.CENTER}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputSmsCodeExample
                      label="Текст справа"
                      value="1234"
                      textAlign={InputSmsCode.REFS.TEXT_ALIGN.RIGHT}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputSmsCodeExample
                      label="Ошибка"
                      isError
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputSmsCodeExample
                      label="Предупреждение"
                      isWarning
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputSmsCodeExample
                      label="Не доступно"
                      disabled
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputSmsCodeExample
                      label="Скрытый"
                      isHidden
                    />
                  </div>              

            </Layout.Block>
        </Layout.Section>
    </Layout>
</div>
```
