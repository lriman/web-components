### Календарь 
```jsx
<div className="omay-ds-block">
  <div className="omay-ds-block">
    <RangeCalendar value={[]} onSelect={value => { console.log(value); }} />
  </div>
</div>
```


### Календарь с предустановленной датой
```jsx
<div className="omay-ds-block">
  <div className="omay-ds-block">
    <RangeCalendar value={["1980-02-17", "2010-02-17"]} onSelect={value => { console.log(value); }} />
  </div>
</div>
```