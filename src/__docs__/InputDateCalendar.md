### REFS

```js static
{
  SIZES: {
    S: 's',
    M: 'm',
    L: 'l',
  },
}
```

```jsx
const InputDateCalendarExample = require('../__examples__/InputDateCalendar.example').default;
import Layout from '../Layout';

<div className="omay-ds-block m-clear-indent">
    <Layout>
        <Layout.Section type="normal">
            <Layout.Block>
              
                  {Object.keys(InputDateCalendar.REFS.SIZES).map(size => (
                    <div className="omay-ds-block" key={size}>
                      <InputDateCalendarExample
                        size={InputDateCalendar.REFS.SIZES[size]}
                        label="Дата"
                      />
                    </div>
                  ))}
                  <div className="omay-ds-block">
                    <InputDateCalendarExample
                      size={InputDateCalendar.REFS.SIZES.S}
                      placeholder="С подсказкой"
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputDateCalendarExample
                      label="Ошибка"
                      isError
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputDateCalendarExample
                      label="Предупреждение"
                      isWarning
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputDateCalendarExample
                      label="Не доступно"
                      disabled
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputDateCalendarExample
                      label="Не очищается"
                      uncleanable
                    />
                  </div>
            </Layout.Block>
        </Layout.Section>
        <Layout.Section type="deep">
            <Layout.Block>

                  {Object.keys(InputDateCalendar.REFS.SIZES).map(size => (
                    <div className="omay-ds-block" key={size}>
                      <InputDateCalendarExample
                        size={InputDateCalendar.REFS.SIZES[size]}
                        label="Дата"
                      />
                    </div>
                  ))}
                  <div className="omay-ds-block">
                    <InputDateCalendarExample
                      size={InputDateCalendar.REFS.SIZES.S}
                      placeholder="С подсказкой"
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputDateCalendarExample
                      label="Ошибка"
                      isError
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputDateCalendarExample
                      label="Предупреждение"
                      isWarning
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputDateCalendarExample
                      label="Не доступно"
                      disabled
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputDateCalendarExample
                      label="Не очищается"
                      uncleanable
                    />
                  </div>              
            </Layout.Block>
        </Layout.Section>
    </Layout>
</div>
```
