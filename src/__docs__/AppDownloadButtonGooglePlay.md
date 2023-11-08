```jsx
import Layout from '../Layout';

<div className="omay-ds-block m-clear-indent">
    <Layout>
        <Layout.Section type="normal">
            <Layout.Block>
                
                <div className="omay-ds-block">
                    <AppDownloadButtonGooglePlay prefix="a" color="normal" onClick={() => {}} />
                </div>
                <div className="omay-ds-block">
                    <AppDownloadButtonGooglePlay color="inverse" onClick={() => {}} />
                </div>

                <div className="omay-ds-block">
                    <AppDownloadButtonGooglePlay language="ru" prefix="b" color="normal" onClick={() => {}} />
                </div>
                <div className="omay-ds-block">
                    <AppDownloadButtonGooglePlay language="ru" color="inverse" onClick={() => {}} />
                </div>

            </Layout.Block>
        </Layout.Section>
        <Layout.Section type="main">
            <Layout.Block>

                <div className="omay-ds-block">
                    <AppDownloadButtonGooglePlay prefix="c" color="normal" onClick={() => {}} />
                </div>
                <div className="omay-ds-block">
                    <AppDownloadButtonGooglePlay color="inverse" onClick={() => {}} />
                </div>

                <div className="omay-ds-block">
                    <AppDownloadButtonGooglePlay language="ru" prefix="d" color="normal" onClick={() => {}} />
                </div>
                <div className="omay-ds-block">
                    <AppDownloadButtonGooglePlay language="ru" color="inverse" onClick={() => {}} />
                </div>

            </Layout.Block>
        </Layout.Section>
    </Layout>
</div>
```
