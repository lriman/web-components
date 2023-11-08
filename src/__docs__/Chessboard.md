
### Chessboard

```jsx
const ChessboardExample = require('../__examples__/Chessboard.example').default;

<div className="omay-ds-block">
  <ChessboardExample />
</div>
```

### ChessboardEditor

```jsx
const ChessboardEditorExample = require('../__examples__/ChessboardEditor.example').default;

<div className="omay-ds-block">       
  <ChessboardEditorExample />
</div>
```

### ChessboardStyles

```jsx
import Grid, { Item } from '../Grid';
import { H6, Block } from '../Typography';
import getBoardStyles from '../Chessboard/_utils';

const position = 'rnbqkbnr/1p1p1p1p/p1p1p3/6p1/P7/1P1P1N2/2P1PPPP/RNBQKB1R b KQkq - 0 5';

<div className="omay-ds-block">
  <Grid>
    {Object.values(Chessboard.REFS.CHESSBOARD_STYLES).map(value => {
      const boardStyles = getBoardStyles(value);
      const squareStyles = {
        f3: boardStyles.moveSquareStyles,
        g1: boardStyles.moveSquareStyles,
        d2: boardStyles.preMoveSquareStyles,
        d3: boardStyles.preMoveSquareStyles,
        a5: boardStyles.highlightStyles,
        b6: boardStyles.highlightStyles,
        c7: boardStyles.highlightStyles,
        d8: boardStyles.highlightStyles,
        e7: boardStyles.highlightStyles,
        f6: boardStyles.highlightStyles,
      };
      
      return (
          <Item key={value} size={2}>
            <Block margin='xs'>
              <H6>
                {value}
              </H6>                
            </Block>            
            <Chessboard
              id="board"
              position={position}
              boardStyle={value}
              squareStyles={squareStyles}
            />
          </Item>
      )
    })}
  </Grid>
</div>
```