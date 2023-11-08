### SocialNetworks
```jsx
import Layout from '../Layout';

<div className="omay-ds-block m-clear-indent">
    <Layout>
        <Layout.Section type="normal">
            <Layout.Block>
              
                <div className="omay-ds-block">
                    <div className="omay-ds-block">
                      <SocialNetworks size="xl" />
                    </div>
                    <div className="omay-ds-block">
                      <SocialNetworks position="vertical" />
                    </div>
                </div>

            </Layout.Block>
        </Layout.Section>
        <Layout.Section type="deep">
            <Layout.Block>

                <div className="omay-ds-block">
                    <div className="omay-ds-block">
                      <SocialNetworks size="xl" />
                    </div>
                    <div className="omay-ds-block">
                      <SocialNetworks position="vertical" />
                    </div>
                </div>

            </Layout.Block>
        </Layout.Section>
    </Layout>
</div>
```

### SocialNetworks Share
```jsx
import Layout from '../Layout';
const url = 'https://www.levitovchess.com/tournaments/';
const title = 'LevitovChess tournaments';

  <div className="omay-ds-block m-clear-indent">
    <Layout>
        <Layout.Section type="normal">
            <Layout.Block>
              
                <div className="omay-ds-block">
                    <div className="omay-ds-block">
                      <SocialNetworks.Share size="xl" url={url} title={title} />
                    </div>
                    <div className="omay-ds-block">
                      <SocialNetworks.Share position="vertical" url={url} title={title} />
                    </div>
                </div>

            </Layout.Block>
        </Layout.Section>
        <Layout.Section type="deep">
            <Layout.Block>

                <div className="omay-ds-block">
                    <div className="omay-ds-block">
                      <SocialNetworks.Share size="xl" url={url} title={title} />
                    </div>
                    <div className="omay-ds-block">
                      <SocialNetworks.Share position="vertical" url={url} title={title} />
                    </div>
                </div>

            </Layout.Block>
        </Layout.Section>
    </Layout>
</div>
```