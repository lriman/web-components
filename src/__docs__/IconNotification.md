### REFS

```js static
{
  TYPES: {
    PRIMARY: 'primary',
  },
  DISPLAY: {
    BLOCK: 'block',
    INLINE: 'inline',
  },
  SIZES: {
    S: 's',
    M: 'm',
    L: 'l',
  },
}
```

### IconCircleButton Types and Sizes

```jsx
import IconBell from '../Icon/IconBell';
import IconQuestionCircle from '../Icon/IconQuestionCircle';

import Layout from '../Layout';

<div className="omay-ds-block m-clear-indent">
    <Layout>
        <Layout.Section type="normal">
            <Layout.Block>                
               <div>
               <div className="omay-ds-block">
                 {Object.keys(IconNotification.REFS.SIZES).map(size => (
                   <div className="omay-ds-list" key={size}>
                     {Object.keys(IconNotification.REFS.TYPES).map(type => (
                       <div className="omay-ds-list-item" key={type}>
                         <IconNotification
                           value={3}
                           id={`IconNotification{IconNotification.REFS.TYPES[type]}`}
                           type={IconNotification.REFS.TYPES[type]}
                           size={IconNotification.REFS.SIZES[size]}
                           onClick={() => {}}
                         >
                               <IconBell />
                         </IconNotification>
                       </div>
                     ))}
                   </div>
                 ))}
               </div>
               
               <div className="omay-ds-block">
                 {Object.keys(IconNotification.REFS.SIZES).map(size => (
                   <div className="omay-ds-list" key={size}>
                     {Object.keys(IconNotification.REFS.TYPES).map(type => (
                       <div className="omay-ds-list-item" key={type}>
                         <IconNotification
                           value={300}
                           id={`IconNotification{IconNotification.REFS.TYPES[type]}`}
                           type={IconNotification.REFS.TYPES[type]}
                           size={IconNotification.REFS.SIZES[size]}
                           onClick={() => {}}
                         >
                               <IconQuestionCircle />
                         </IconNotification>
                       </div>
                     ))}
                   </div>
                 ))}
               </div>
               </div>
            </Layout.Block>
        </Layout.Section>
        <Layout.Section type="main">
            <Layout.Block>                
              <div>
              <div className="omay-ds-block">
                {Object.keys(IconNotification.REFS.SIZES).map(size => (
                  <div className="omay-ds-list" key={size}>
                    {Object.keys(IconNotification.REFS.TYPES).map(type => (
                      <div className="omay-ds-list-item" key={type}>
                        <IconNotification
                          value={3}
                          id={`IconNotification{IconNotification.REFS.TYPES[type]}`}
                          type={IconNotification.REFS.TYPES[type]}
                          size={IconNotification.REFS.SIZES[size]}
                          onClick={() => {}}
                        >
                              <IconBell />
                        </IconNotification>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              
              <div className="omay-ds-block">
                {Object.keys(IconNotification.REFS.SIZES).map(size => (
                  <div className="omay-ds-list" key={size}>
                    {Object.keys(IconNotification.REFS.TYPES).map(type => (
                      <div className="omay-ds-list-item" key={type}>
                        <IconNotification
                          value={300}
                          id={`IconNotification{IconNotification.REFS.TYPES[type]}`}
                          type={IconNotification.REFS.TYPES[type]}
                          size={IconNotification.REFS.SIZES[size]}
                          onClick={() => {}}
                        >
                              <IconQuestionCircle />
                        </IconNotification>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              </div>
            </Layout.Block>
        </Layout.Section>
    </Layout>
</div>
```