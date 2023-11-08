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
const InputToggleSwitchExample = require('../__examples__/InputToggleSwitch.example').default;
import Layout from '../Layout';

<div className="omay-ds-block m-clear-indent">
    <Layout>
        <Layout.Section type="normal">
            <Layout.Block>
              
                  {Object.keys(InputToggleSwitch.REFS.SIZES).map(size => (
                    <div className="omay-ds-block" key={size}>
                      <InputToggleSwitchExample
                        size={InputToggleSwitch.REFS.SIZES[size]}
                      >
                        ToggleSwitch
                      </InputToggleSwitchExample>
                    </div>
                  ))}
                  <div className="omay-ds-block">
                    <InputToggleSwitchExample
                      isError
                    >
                      ToggleSwitch
                    </InputToggleSwitchExample>
                  </div>
                  <div className="omay-ds-block">
                    <InputToggleSwitchExample
                      isWarning
                    >
                      ToggleSwitch
                    </InputToggleSwitchExample>
                  </div>
                  <div className="omay-ds-block">
                    <InputToggleSwitchExample
                      disabled
                    >
                      ToggleSwitch
                    </InputToggleSwitchExample>
                  </div>
                  <div className="omay-ds-block">
                    <InputToggleSwitchExample
                      color="major"
                    >
                      ToggleSwitch
                    </InputToggleSwitchExample>
                  </div>

            </Layout.Block>
        </Layout.Section>
        <Layout.Section type="deep">
            <Layout.Block>

                  {Object.keys(InputToggleSwitch.REFS.SIZES).map(size => (
                    <div className="omay-ds-block" key={size}>
                      <InputToggleSwitchExample
                        size={InputToggleSwitch.REFS.SIZES[size]}
                      >
                        ToggleSwitch
                      </InputToggleSwitchExample>
                    </div>
                  ))}
                  <div className="omay-ds-block">
                    <InputToggleSwitchExample
                      isError
                    >
                      ToggleSwitch
                    </InputToggleSwitchExample>
                  </div>
                  <div className="omay-ds-block">
                    <InputToggleSwitchExample
                      isWarning
                    >
                      ToggleSwitch
                    </InputToggleSwitchExample>
                  </div>
                  <div className="omay-ds-block">
                    <InputToggleSwitchExample
                      disabled
                    >
                      ToggleSwitch
                    </InputToggleSwitchExample>
                  </div>              
                  <div className="omay-ds-block">
                    <InputToggleSwitchExample
                      color="primary"
                    >
                      ToggleSwitch
                    </InputToggleSwitchExample>
                  </div>

            </Layout.Block>
        </Layout.Section>
    </Layout>
</div>
```
