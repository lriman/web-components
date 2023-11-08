```jsx
import Layout from '../Layout';

<div className="omay-ds-block m-clear-indent">
    <Layout>
        <Layout.Section type="normal">
            <Layout.Block>
              
                <div className="omay-ds-block">
                    <MobileAppButtons />
                </div>
                <div className="omay-ds-block">
                    <MobileAppButtons position="vertical" />
                </div>
                <div className="omay-ds-block">
                    <MobileAppButtons disabled />
                </div>
                <div className="omay-ds-block">
                    <MobileAppButtons position="vertical" disabled />
                </div>

            </Layout.Block>
        </Layout.Section>
        <Layout.Section type="deep">
            <Layout.Block>

                <div className="omay-ds-block">
                    <MobileAppButtons />
                </div>
                <div className="omay-ds-block">
                    <MobileAppButtons position="vertical" />
                </div>
                <div className="omay-ds-block">
                    <MobileAppButtons disabled />
                </div>
                <div className="omay-ds-block">
                    <MobileAppButtons position="vertical" disabled />
                </div>

            </Layout.Block>
        </Layout.Section>
    </Layout>
</div>
```