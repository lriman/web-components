```jsx
const source = `
# Заголовок первого уровня
## Заголовок второго уровня
### Заголовок третьего уровня
#### Заголовок четвертого уровня
##### Заголовок пятого уровня
###### Заголовок шестого уровня

Don't put tabs or spaces in front of your paragraphs.

Keep lines left-aligned like this.

1. ###### First item
    1. Indented item
    2. Indented item
    3. Indented item
2. ###### Second item
3. ###### Third item
    1. Indented item
    2. Indented item
4. ###### Fourth item

* First item
* Second item
* Third item
* Fourth item

[Link](./)
`;

<div className="omay-ds-block">
    <Markdown>
        {source}
    </Markdown>
</div>
```
