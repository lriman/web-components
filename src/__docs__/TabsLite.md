```jsx
const items = [
    {
        id: 'newGame',
        title: 'Новая партия',
        active: false,
    },
    {
        id: 'games',
        title: 'Играть',
        active: false,
    },
    {
        id: 'news',
        title: 'Новости',
        active: false,
    },
    {
        id: 'support',
        title: 'Поддержка',
        active: false,
    },
    {
        id: 'contacts',
        title: 'Контакты',
        active: true,
    },
    {
        id: 'personalData',
        title: 'Персональные данные',
        active: false,
    },
];

<div className="omay-ds-block">
    <div className="omay-ds-block">
        <TabsLite items={items} onItemClick={id => console.log(id)} size="s" />
    </div>
    <div className="omay-ds-block">
        <TabsLite items={items} onItemClick={id => console.log(id)} size="m" />
    </div>
    <div className="omay-ds-block">
        <TabsLite items={items} onItemClick={id => console.log(id)} size="l" />
    </div>
</div>
```
