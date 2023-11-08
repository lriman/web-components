### REFS

```js static
{
  SIZES: {
    S: 's',
    M: 'm',
    L: 'l',
  },
  POPUP_BOX_ALIGN: {
    START: 'start',
    END: 'end',
  },
}
```

```jsx
const InputMultiSelectExample = require('../__examples__/InputMultiSelect.example').default;
import Layout from '../Layout';

<div className="omay-ds-block m-clear-indent">
    <Layout>
        <Layout.Section type="normal">
            <Layout.Block>
              
                          {Object.keys(InputMultiSelect.REFS.SIZES).map(size => (
                            <div className="omay-ds-block" key={size}>
                              <InputMultiSelectExample
                                size={InputMultiSelect.REFS.SIZES[size]}
                                label="Текстовое поле"
                              />
                            </div>
                          ))}
                          <div className="omay-ds-block">
                            <InputMultiSelectExample
                              size={InputMultiSelect.REFS.SIZES.S}
                              placeholder="С подсказкой"
                            />
                          </div>
                          <div className="omay-ds-block">
                            <InputMultiSelectExample
                              label="Ошибка"
                              isError
                            />
                          </div>
                          <div className="omay-ds-block">
                            <InputMultiSelectExample
                              label="Предупреждение"
                              isWarning
                            />
                          </div>
                          <div className="omay-ds-block">
                            <InputMultiSelectExample
                              label="Не доступно"
                              disabled
                            />
                          </div>

            </Layout.Block>
        </Layout.Section>
        <Layout.Section type="deep">
            <Layout.Block>

                          {Object.keys(InputMultiSelect.REFS.SIZES).map(size => (
                            <div className="omay-ds-block" key={size}>
                              <InputMultiSelectExample
                                size={InputMultiSelect.REFS.SIZES[size]}
                                label="Текстовое поле"
                              />
                            </div>
                          ))}
                          <div className="omay-ds-block">
                            <InputMultiSelectExample
                              size={InputMultiSelect.REFS.SIZES.S}
                              placeholder="С подсказкой"
                            />
                          </div>
                          <div className="omay-ds-block">
                            <InputMultiSelectExample
                              label="Ошибка"
                              isError
                            />
                          </div>
                          <div className="omay-ds-block">
                            <InputMultiSelectExample
                              label="Предупреждение"
                              isWarning
                            />
                          </div>
                          <div className="omay-ds-block">
                            <InputMultiSelectExample
                              label="Не доступно"
                              disabled
                            />
                          </div>              

            </Layout.Block>
        </Layout.Section>
    </Layout>
</div>
```
