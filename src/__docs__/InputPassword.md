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
const InputPasswordExample = require('../__examples__/InputPassword.example').default;
import Layout from '../Layout';

<div className="omay-ds-block m-clear-indent">
    <Layout>
        <Layout.Section type="normal">
            <Layout.Block>
              {Object.keys(InputPassword.REFS.SIZES).map(size => (
                <div className="omay-ds-block" key={size}>
                  <InputPasswordExample
                    size={InputPassword.REFS.SIZES[size]}
                    label="Текстовое поле"
                  />
                </div>
              ))}
            
              <div className="omay-ds-block">
                <InputPasswordExample
                  size={InputPassword.REFS.SIZES.S}
                  placeholder="С подсказкой"
                />
              </div>
              <div className="omay-ds-block">
                <InputPasswordExample
                  label="Ограничение длины"
                  value="1234"
                  maxLength={4}
                />
              </div>
              <div className="omay-ds-block">
                <InputPasswordExample
                  label="Текст по центру"
                  value="Текст по центру"
                  textAlign={InputPassword.REFS.TEXT_ALIGN.CENTER}
                />
              </div>
              <div className="omay-ds-block">
                <InputPasswordExample
                  label="Текст справа"
                  value="Текст справа"
                  textAlign={InputPassword.REFS.TEXT_ALIGN.RIGHT}
                />
              </div>
              <div className="omay-ds-block">
                <InputPasswordExample
                  label="Ошибка"
                  isError
                />
              </div>
              <div className="omay-ds-block">
                <InputPasswordExample
                  label="Предупреждение"
                  isWarning
                />
              </div>
              <div className="omay-ds-block">
                <InputPasswordExample
                  label="Не доступно"
                  value="Не доступно"
                  disabled
                />
              </div>
              <div className="omay-ds-block">
                <InputPasswordExample
                  label="Пароль"
                  value="passW0rd"
                  visible
                />
              </div>

            </Layout.Block>
        </Layout.Section>
        <Layout.Section type="deep">
            <Layout.Block>
              {Object.keys(InputPassword.REFS.SIZES).map(size => (
                <div className="omay-ds-block" key={size}>
                  <InputPasswordExample
                    id={`InputPassword_Inverse_${InputPassword.REFS.SIZES[size]}`}
                    size={InputPassword.REFS.SIZES[size]}
                    label="Текстовое поле"
                  />
                </div>
              ))}

              <div className="omay-ds-block">
                <InputPasswordExample
                  size={InputPassword.REFS.SIZES.S}
                  placeholder="С подсказкой"
                />
              </div>
              <div className="omay-ds-block">
                <InputPasswordExample
                  label="Ограничение длины"
                  value="1234"
                  maxLength={4}
                />
              </div>
              <div className="omay-ds-block">
                <InputPasswordExample
                  label="Текст по центру"
                  value="Текст по центру"
                  textAlign={InputPassword.REFS.TEXT_ALIGN.CENTER}
                />
              </div>
              <div className="omay-ds-block">
                <InputPasswordExample
                  label="Текст справа"
                  value="Текст справа"
                  textAlign={InputPassword.REFS.TEXT_ALIGN.RIGHT}
                />
              </div>
              <div className="omay-ds-block">
                <InputPasswordExample
                  label="Ошибка"
                  isError
                />
              </div>
              <div className="omay-ds-block">
                <InputPasswordExample
                  label="Предупреждение"
                  isWarning
                />
              </div>
              <div className="omay-ds-block">
                <InputPasswordExample
                  label="Не доступно"
                  value="Не доступно"
                  disabled
                />
              </div>
              <div className="omay-ds-block">
                <InputPasswordExample
                  size="s"
                  label="Пароль"
                  value="passW0rd"
                  visible
                />
              </div>
              <div className="omay-ds-block">
                <InputPasswordExample
                  size="m"
                  label="Пароль"
                  value="passW0rd"
                  visible
                />
              </div>
              <div className="omay-ds-block">
                <InputPasswordExample
                  size="l"
                  label="Пароль"
                  value="passW0rd"
                  visible
                />
              </div>

            </Layout.Block>
        </Layout.Section>
    </Layout>
</div>
```
