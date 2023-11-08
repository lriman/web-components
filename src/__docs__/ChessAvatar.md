```jsx

<div className="omay-ds-block m-center">
<div className="omay-ds-block m-center">
  <div className="omay-ds-list">
    {Object.keys(ChessAvatar.REFS.SIZES).map(size => (
      <div className="omay-ds-list-item" key={size}>
        <div className="omay-ds-value">
          <ChessAvatar size={ChessAvatar.REFS.SIZES[size]} name="Константин Константинопольский" chessColor="black"/>
        </div>
        <div className="omay-ds-label">{ChessAvatar.REFS.SIZES[size]}</div>
      </div>
    ))}
  </div>
</div>

<div className="omay-ds-block m-center">
  <div className="omay-ds-list">
    {Object.keys(ChessAvatar.REFS.SIZES).map(size => (
      <div className="omay-ds-list-item" key={size}>
        <div className="omay-ds-value">
          <ChessAvatar size={ChessAvatar.REFS.SIZES[size]} isActive name="Константин Константинопольский" chessColor="white" />
        </div>
        <div className="omay-ds-label">{ChessAvatar.REFS.SIZES[size]}</div>
      </div>
    ))}
  </div>
</div>
</div>
```

```jsx

<div>
    <div className="omay-ds-block">
        <ChessAvatar name="Константин Константинопольский" />
    </div>   
    <div className="omay-ds-block">
        <ChessAvatar name="Константин Константинопольский" compact />
    </div>
    <div className="omay-ds-block">
        <ChessAvatar name="Константин Константинопольский" />
    </div>
    <div className="omay-ds-block">
        <ChessAvatar name="Константин Константинопольский" isActive avatar="https://lh3.googleusercontent.com/-sy_MKuS1gBk/AAAAAAAAAAI/AAAAAAAAAAA/AKF05nD0OcotvyzUomgjekPKXgkxV8jtaA.CMID/s83-c/photo.jpg" />
    </div>
    <div className="omay-ds-block">
        <ChessAvatar name="Константин Константинопольский" compact avatar="https://lh3.googleusercontent.com/-sy_MKuS1gBk/AAAAAAAAAAI/AAAAAAAAAAA/AKF05nD0OcotvyzUomgjekPKXgkxV8jtaA.CMID/s83-c/photo.jpg" />
    </div>
</div>
```
