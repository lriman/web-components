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
const InputDateRangeCalendarExample = require('../__examples__/InputDateRangeCalendar.example').default;
import Layout from '../Layout';

<div className="omay-ds-block m-clear-indent">
    <Layout>
        <Layout.Section type="normal">
            <Layout.Block>
              
                  {Object.keys(InputDateRangeCalendar.REFS.SIZES).map(size => (
                    <div className="omay-ds-block" key={size}>
                      <InputDateRangeCalendarExample
                        size={InputDateRangeCalendar.REFS.SIZES[size]}
                        label="Дата"
                      />
                    </div>
                  ))}
                  <div className="omay-ds-block">
                    <InputDateRangeCalendarExample
                      size={InputDateRangeCalendar.REFS.SIZES.S}
                      placeholder={["Нач.дата", "Кон.дата"]}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputDateRangeCalendarExample
                      label="Ошибка"
                      isError
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputDateRangeCalendarExample
                      label="Предупреждение"
                      isWarning
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputDateRangeCalendarExample
                      label="Не доступно"
                      disabled
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputDateRangeCalendarExample
                      label="Не очищается"
                      uncleanable
                    />
                  </div>

            </Layout.Block>
        </Layout.Section>
        <Layout.Section type="deep">
            <Layout.Block>

                  {Object.keys(InputDateRangeCalendar.REFS.SIZES).map(size => (
                    <div className="omay-ds-block" key={size}>
                      <InputDateRangeCalendarExample
                        size={InputDateRangeCalendar.REFS.SIZES[size]}
                        label="Дата"
                      />
                    </div>
                  ))}
                  <div className="omay-ds-block">
                    <InputDateRangeCalendarExample
                      size={InputDateRangeCalendar.REFS.SIZES.S}
                      placeholder={["Нач.дата", "Кон.дата"]}
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputDateRangeCalendarExample
                      label="Ошибка"
                      isError
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputDateRangeCalendarExample
                      label="Предупреждение"
                      isWarning
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputDateRangeCalendarExample
                      label="Не доступно"
                      disabled
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputDateRangeCalendarExample
                      label="Не очищается"
                      uncleanable
                    />
                  </div>              

            </Layout.Block>
        </Layout.Section>
    </Layout>
</div>
```
