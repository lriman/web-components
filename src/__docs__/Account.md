```jsx
import Layout from '../Layout';

const country = {
    code: 'RU',
    flag: 'http://assets.ipstack.com/flags/ru.svg',
    name: 'Russia',
};

const menu = [
    { id: 'profile', label: 'Профиль', link: 'https://www.levitovchess.com/profile/heller/' },
    { id: 'settings', label: 'Настройки' },
    { id: 'logout', label: 'Выйти' },
];

<div className="omay-ds-block m-clear-indent">
    <Layout>
        <Layout.Section type="normal">
            <Layout.Block>
                <div className="omay-ds-block m-center">
                  <div className="omay-ds-list">
                    {Object.keys(Account.REFS.SIZES).map(size => (
                      <div className="omay-ds-list-item" key={size}>
                        <div className="omay-ds-value">
                          <Account size={Account.REFS.SIZES[size]} name="Kostik" fullName="Константин Константинопольский" onChangeClick={() => {}} />
                        </div>
                        <div className="omay-ds-label">{Account.REFS.SIZES[size]}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="omay-ds-block m-center">
                  <div className="omay-ds-list">
                    {Object.keys(Account.REFS.SIZES).map(size => (
                      <div className="omay-ds-list-item" key={size}>
                        <div className="omay-ds-value">
                          <Account size={Account.REFS.SIZES[size]} name="Kostik" fullName="Константин Константинопольский" country={country}/>
                        </div>
                        <div className="omay-ds-label">{Account.REFS.SIZES[size]}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="omay-ds-block m-center">
                  <div className="omay-ds-list">
                    {Object.keys(Account.REFS.SIZES).map(size => (
                      <div className="omay-ds-list-item" key={size}>
                        <div className="omay-ds-value">
                          <Account size={Account.REFS.SIZES[size]} name="Kostik" fullName="Константин Константинопольский" country={country} isFriend />
                        </div>
                        <div className="omay-ds-label">{Account.REFS.SIZES[size]}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="omay-ds-block m-center">
                  <div className="omay-ds-list">
                    {Object.keys(Account.REFS.SIZES).map(size => (
                      <div className="omay-ds-list-item" key={size}>
                        <div className="omay-ds-value">
                          <Account size={Account.REFS.SIZES[size]} name="Kostik" fullName="Константин Константинопольский" chessColor='white'/>
                        </div>
                        <div className="omay-ds-label">{Account.REFS.SIZES[size]}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="omay-ds-block m-center">
                  <div className="omay-ds-list">
                    {Object.keys(Account.REFS.SIZES).map(size => (
                      <div className="omay-ds-list-item" key={size}>
                        <div className="omay-ds-value">
                          <Account size={Account.REFS.SIZES[size]} name="Kostik" fullName="Константин Константинопольский" chessColor='black'/>
                        </div>
                        <div className="omay-ds-label">{Account.REFS.SIZES[size]}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="omay-ds-block m-center">
                  <div className="omay-ds-list">
                    {Object.keys(Account.REFS.SIZES).map(size => (
                      <div className="omay-ds-list-item" key={size}>
                        <div className="omay-ds-value">
                          <Account size={Account.REFS.SIZES[size]} name="Kostik" fullName="Константин Константинопольский" chessColor='black' isActive/>
                        </div>
                        <div className="omay-ds-label">{Account.REFS.SIZES[size]}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="omay-ds-block">
                    <Account name="Константин Константинопольский" />
                </div>
                <div className="omay-ds-block">
                    <Account name="Константин Константинопольский">
                        Россия, Москва
                    </Account>
                </div>
                <div className="omay-ds-block">
                    <Account name="Константин Константинопольский" menu={menu} isClickable >
                        Россия, Москва
                    </Account>
                </div>
                <div className="omay-ds-block">
                    <Account name="Константин Константинопольский" compact />
                </div>
                <div className="omay-ds-block">
                    <Account name="Константин Константинопольский" compact menu={menu} isClickable />
                </div>
                <div className="omay-ds-block">
                    <Account name="Константин Константинопольский" avatar="https://lh3.googleusercontent.com/-sy_MKuS1gBk/AAAAAAAAAAI/AAAAAAAAAAA/AKF05nD0OcotvyzUomgjekPKXgkxV8jtaA.CMID/s83-c/photo.jpg" />
                </div>
                <div className="omay-ds-block">
                    <Account name="Константин Константинопольский" compact avatar="https://lh3.googleusercontent.com/-sy_MKuS1gBk/AAAAAAAAAAI/AAAAAAAAAAA/AKF05nD0OcotvyzUomgjekPKXgkxV8jtaA.CMID/s83-c/photo.jpg" />
                </div>

            </Layout.Block>
        </Layout.Section>
    </Layout>
</div>
```

```jsx
import Layout from '../Layout';

const country = {
    code: 'RU',
    flag: 'http://assets.ipstack.com/flags/ru.svg',
    name: 'Russia',
};

const menu = [
    { id: 'profile', label: 'Профиль', link: 'https://www.levitovchess.com/profile/heller/' },
    { id: 'logout', label: 'Выйти' },
];

<div className="omay-ds-block m-clear-indent">
    <Layout>
        <Layout.Section type="main">
            <Layout.Block>
                <div className="omay-ds-block m-center">
                  <div className="omay-ds-list">
                    {Object.keys(Account.REFS.SIZES).map(size => (
                      <div className="omay-ds-list-item" key={size}>
                        <div className="omay-ds-value">
                          <Account size={Account.REFS.SIZES[size]} name="Kostik" fullName="Константин Константинопольский" onChangeClick={() => {}} />
                        </div>
                        <div className="omay-ds-label">{Account.REFS.SIZES[size]}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="omay-ds-block m-center">
                  <div className="omay-ds-list">
                    {Object.keys(Account.REFS.SIZES).map(size => (
                      <div className="omay-ds-list-item" key={size}>
                        <div className="omay-ds-value">
                          <Account size={Account.REFS.SIZES[size]} name="Kostik" fullName="Константин Константинопольский" country={country}/>
                        </div>
                        <div className="omay-ds-label">{Account.REFS.SIZES[size]}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="omay-ds-block m-center">
                  <div className="omay-ds-list">
                    {Object.keys(Account.REFS.SIZES).map(size => (
                      <div className="omay-ds-list-item" key={size}>
                        <div className="omay-ds-value">
                          <Account size={Account.REFS.SIZES[size]} name="Kostik" fullName="Константин Константинопольский" country={country} isFriend/>
                        </div>
                        <div className="omay-ds-label">{Account.REFS.SIZES[size]}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="omay-ds-block m-center">
                  <div className="omay-ds-list">
                    {Object.keys(Account.REFS.SIZES).map(size => (
                      <div className="omay-ds-list-item" key={size}>
                        <div className="omay-ds-value">
                          <Account size={Account.REFS.SIZES[size]} name="Kostik" fullName="Константин Константинопольский" chessColor='white'/>
                        </div>
                        <div className="omay-ds-label">{Account.REFS.SIZES[size]}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="omay-ds-block m-center">
                  <div className="omay-ds-list">
                    {Object.keys(Account.REFS.SIZES).map(size => (
                      <div className="omay-ds-list-item" key={size}>
                        <div className="omay-ds-value">
                          <Account size={Account.REFS.SIZES[size]} name="Kostik" fullName="Константин Константинопольский" chessColor='black'/>
                        </div>
                        <div className="omay-ds-label">{Account.REFS.SIZES[size]}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="omay-ds-block m-center">
                  <div className="omay-ds-list">
                    {Object.keys(Account.REFS.SIZES).map(size => (
                      <div className="omay-ds-list-item" key={size}>
                        <div className="omay-ds-value">
                          <Account size={Account.REFS.SIZES[size]} name="Kostik" fullName="Константин Константинопольский" chessColor='black' isActive/>
                        </div>
                        <div className="omay-ds-label">{Account.REFS.SIZES[size]}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="omay-ds-block">
                    <Account name="Константин Константинопольский" />
                </div>
                <div className="omay-ds-block">
                    <Account name="Константин Константинопольский">
                        Россия, Москва
                    </Account>
                </div>
                <div className="omay-ds-block">
                    <Account name="Константин Константинопольский" menu={menu} isClickable>
                        Россия, Москва
                    </Account>
                </div>
                <div className="omay-ds-block">
                    <Account name="Константин Константинопольский" compact />
                </div>
                <div className="omay-ds-block">
                    <Account name="Константин Константинопольский" compact menu={menu} isClickable />
                </div>
                <div className="omay-ds-block">
                    <Account name="Константин Константинопольский" avatar="https://lh3.googleusercontent.com/-sy_MKuS1gBk/AAAAAAAAAAI/AAAAAAAAAAA/AKF05nD0OcotvyzUomgjekPKXgkxV8jtaA.CMID/s83-c/photo.jpg" />
                </div>
                <div className="omay-ds-block">
                    <Account name="Константин Константинопольский" compact avatar="https://lh3.googleusercontent.com/-sy_MKuS1gBk/AAAAAAAAAAI/AAAAAAAAAAA/AKF05nD0OcotvyzUomgjekPKXgkxV8jtaA.CMID/s83-c/photo.jpg" />
                </div>

            </Layout.Block>
        </Layout.Section>
    </Layout>
</div>
```
