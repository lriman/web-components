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
const InputCheckboxExample = require('../__examples__/InputCheckbox.example').default;
import Layout from '../Layout';

<div className="omay-ds-block m-clear-indent">
    <Layout>
        <Layout.Section type="normal">
            <Layout.Block>

                  {Object.keys(InputCheckbox.REFS.SIZES).map(size => (
                    <div className="omay-ds-block" key={size}>
                      <InputCheckboxExample
                        id={`InputCheckbox_${InputCheckbox.REFS.SIZES[size]}`}
                        size={InputCheckbox.REFS.SIZES[size]}
                      >
                        Checkbox
                      </InputCheckboxExample>
                    </div>
                  ))}
                  {Object.keys(InputCheckbox.REFS.SIZES).map(size => (
                    <div className="omay-ds-block" key={size}>
                      <InputCheckboxExample
                        id={`InputCheckbox_${InputCheckbox.REFS.SIZES[size]}`}
                        size={InputCheckbox.REFS.SIZES[size]}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                        fermentum libero ac auctor dignissim. Vestibulum sit amet ultricies
                        sem, eu pretium risus. Integer eu lectus venenatis purus lobortis
                        ullamcorper. Morbi placerat augue in nibh euismod accumsan. Fusce
                        venenatis egestas scelerisque. In hac habitasse platea dictumst.
                        Mauris ut ex a elit auctor suscipit in ut nibh.
                      </InputCheckboxExample>
                    </div>
                  ))}
                  <div className="omay-ds-block">
                    <InputCheckboxExample
                      id="InputCheckboxE1"
                      isError
                    >
                      Checkbox
                    </InputCheckboxExample>
                  </div>
                  <div className="omay-ds-block">
                    <InputCheckboxExample
                      id="InputCheckboxE2"
                      isWarning
                    >
                      Checkbox
                    </InputCheckboxExample>
                  </div>
                  <div className="omay-ds-block">
                    <InputCheckboxExample
                      id="InputCheckboxE3"
                      disabled
                    >
                      Checkbox
                    </InputCheckboxExample>
                  </div>
                  <div className="omay-ds-block">
                    <InputCheckboxExample
                      id="InputCheckboxE4"
                      disabled
                      checked
                    >
                      Checkbox
                    </InputCheckboxExample>
                  </div>

            </Layout.Block>
        </Layout.Section>
        <Layout.Section type="deep">
            <Layout.Block>

                  {Object.keys(InputCheckbox.REFS.SIZES).map(size => (
                    <div className="omay-ds-block" key={size}>
                      <InputCheckboxExample
                        id={`InputCheckbox_${InputCheckbox.REFS.SIZES[size]}`}
                        size={InputCheckbox.REFS.SIZES[size]}
                      >
                        Checkbox
                      </InputCheckboxExample>
                    </div>
                  ))}
                  {Object.keys(InputCheckbox.REFS.SIZES).map(size => (
                    <div className="omay-ds-block" key={size}>
                      <InputCheckboxExample
                        id={`InputCheckbox_${InputCheckbox.REFS.SIZES[size]}`}
                        size={InputCheckbox.REFS.SIZES[size]}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                        fermentum libero ac auctor dignissim. Vestibulum sit amet ultricies
                        sem, eu pretium risus. Integer eu lectus venenatis purus lobortis
                        ullamcorper. Morbi placerat augue in nibh euismod accumsan. Fusce
                        venenatis egestas scelerisque. In hac habitasse platea dictumst.
                        Mauris ut ex a elit auctor suscipit in ut nibh.
                      </InputCheckboxExample>
                    </div>
                  ))}
                  <div className="omay-ds-block">
                    <InputCheckboxExample
                      id="InputCheckboxE1"
                      isError
                    >
                      Checkbox
                    </InputCheckboxExample>
                  </div>
                  <div className="omay-ds-block">
                    <InputCheckboxExample
                      id="InputCheckboxE2"
                      isWarning
                    >
                      Checkbox
                    </InputCheckboxExample>
                  </div>
                  <div className="omay-ds-block">
                    <InputCheckboxExample
                      id="InputCheckboxE3"
                      disabled
                    >
                      Checkbox
                    </InputCheckboxExample>
                  </div>
                  <div className="omay-ds-block">
                    <InputCheckboxExample
                      id="InputCheckboxE4"
                      disabled
                      checked
                    >
                      Checkbox
                    </InputCheckboxExample>
                  </div>

            </Layout.Block>
        </Layout.Section>
    </Layout>
</div>
```
