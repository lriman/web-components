### REFS
```js static
{
  SIZES: {
    S: 's',
    M: 'm',
    L: 'l',
  },
  TYPES: {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
  },
  MARKS: {
    DOT: 'dot',
    CHECK: 'check',
  },
}
```

### InputRadioGroup Dimensions

```jsx
const InputRadioGroupExample = require('../__examples__/InputRadioGroup.example').default;
import Layout from '../Layout';

<div className="omay-ds-block m-clear-indent">
    <Layout>
        <Layout.Section type="normal">
            <Layout.Block>

                 {Object.keys(InputRadioGroup.REFS.SIZES).map(size => (
                   <div className="omay-ds-block" key={size}>
                     <InputRadioGroupExample
                       id={`InputRadioGroup_${InputRadioGroup.REFS.SIZES[size]}`}
                       size={InputRadioGroup.REFS.SIZES[size]}
                     />
                   </div>
                 ))}

                  <div className="omay-ds-block">
                    <InputRadioGroupExample
                      id="InputRadioGroupE1"
                      isError
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputRadioGroupExample
                      id="InputRadioGroupE2"
                      isWarning
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputRadioGroupExample
                      id="InputRadioGroupE3"
                      disabled
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputRadioGroupExample
                      id="InputRadioGroupE4"
                      mark={InputRadioGroup.REFS.MARKS.CHECK}
                    />
                  </div>

            </Layout.Block>
        </Layout.Section>
        <Layout.Section type="deep">
            <Layout.Block>

                 {Object.keys(InputRadioGroup.REFS.SIZES).map(size => (
                   <div className="omay-ds-block" key={size}>
                     <InputRadioGroupExample
                       id={`InputRadioGroup_${InputRadioGroup.REFS.SIZES[size]}`}
                       size={InputRadioGroup.REFS.SIZES[size]}
                     />
                   </div>
                 ))}

                  <div className="omay-ds-block">
                    <InputRadioGroupExample
                      id="InputRadioGroupE1"
                      isError
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputRadioGroupExample
                      id="InputRadioGroupE2"
                      isWarning
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputRadioGroupExample
                      id="InputRadioGroupE3"
                      disabled
                    />
                  </div>
                  <div className="omay-ds-block">
                    <InputRadioGroupExample
                      id="InputRadioGroupE4"
                      mark={InputRadioGroup.REFS.MARKS.CHECK}
                    />
                  </div>

            </Layout.Block>
        </Layout.Section>
    </Layout>
</div>
```

### InputRadioGroup with Buttons

```jsx
const InputRadioGroupExample = require('../__examples__/InputRadioGroupButtons.example').default;
import Layout from '../Layout';

<div className="omay-ds-block">
  <Layout>
    <Layout.Section type="normal">
      <Layout.Block>
        <div className="omay-ds-block">
          {Object.keys(InputRadioGroup.REFS.SIZES).map(size => (
            <div className="omay-ds-block" key={size}>
              <InputRadioGroupExample
                id={`InputRadioGroup_${InputRadioGroup.REFS.SIZES[size]}`}
                size={InputRadioGroup.REFS.SIZES[size]}
              />
            </div>
          ))}
        </div>
        <div className="omay-ds-block">
          <InputRadioGroupExample
            id="InputRadioGroup_E1"
            disabled
          />
        </div>
      </Layout.Block>
    </Layout.Section>
    <Layout.Section type="deep">
      <Layout.Block>
        <div className="omay-ds-block">
          {Object.keys(InputRadioGroup.REFS.SIZES).map(size => (
            <div className="omay-ds-block" key={size}>
              <InputRadioGroupExample
                id={`InputRadioGroup_${InputRadioGroup.REFS.SIZES[size]}`}
                size={InputRadioGroup.REFS.SIZES[size]}
              />
            </div>
          ))}
        </div>
        <div className="omay-ds-block">
          <InputRadioGroupExample
            id="InputRadioGroup_E1"
            disabled
          />
        </div>
      </Layout.Block>
    </Layout.Section>
  </Layout>
</div>;
```

