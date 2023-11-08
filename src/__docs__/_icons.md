```js static
REFS: {
  TYPES: {
      ALTERNATIVE: 'alternative',
      ARROW_DOWN: 'arrowDown',
      ARROW_DOWN_FILLED: 'arrowDownFilled',
      ARROW_DOWN_TAILED: 'arrowDownTailed',
      ARROW_DOWN_NEXT: 'arrowDownNext',
      ARROW_LEFT: 'arrowLeft',
      ARROW_LEFT_DOUBLE: 'arrowLeftDouble',
      ARROW_LEFT_FILLED: 'arrowLeftFilled',
      ARROW_LEFT_NEXT: 'arrowLeftNext',
      ARROW_LEFT_TAILED: 'arrowLeftTailed',
      ARROW_RIGHT: 'arrowRight',
      ARROW_RIGHT_DOUBLE: 'arrowRightDouble',
      ARROW_RIGHT_FILLED: 'arrowRightFilled',
      ARROW_UP: 'arrowUp',
      ARROW_UP_FILLED: 'arrowUpFilled',
      BLANK: 'blank',
      CALENDAR: 'calendar',
      CAMERA: 'camera',
      CAMERA_CHANGE: 'cameraChange',
      CART: 'cart',
      CHECKED_CHECKBOX: 'checkedCheckbox',
      CHECKED_RADIO: 'checkedRadio',
      CLOSE: 'close',
      CONTEXT_HORIZONTAL: 'contextHorizontal',
      CONTEXT_VERTICAL: 'contextVertical',
      DOCUMENT: 'document',
      DOCUMENT_PDF: 'documentPDF',
      ERROR: 'error',
      EYE_CLOSED: 'eyeClosed',
      EYE_OPEN: 'eyeOpen',
      FILTER: 'filter',
      INFO_CIRCLE: 'infoCircle',
      OPEN_NEW_WINDOW: 'openNewWindow',
      PLUS: 'plus',
      PRINT: 'print',
      PROCESS_CHOOSE: 'processChoose',
      PROCESS_CONTRACT: 'processContract',
      PROCESS_DECISION: 'processDecision',
      PROCESS_FILL: 'processFill',
      PROCESS_MONEY: 'processMoney',
      QUESTION_CIRCLE: 'questionCircle',
      REMOVE: 'remove',
      REPEAT: 'repeat',
      SEARCH: 'search',
      SIGN: 'sign',
      SORTING: 'sorting',
      SORTING_ASC: 'sortingAsc',
      SORTING_DESC: 'sortingDesc',
      SUCCESS: 'success',
      SUCCESS_CIRCLE: 'successCircle',
      TICK: 'tick',
      UPLOAD: 'upload',
      WAIT: 'wait',
      WARNING: 'warning',
      SANDGLASS: 'sandglass',
      FIRE: 'fire',
      BOARD_EDITOR: 'boardEditor',
      QUIZ: 'quiz',
      BRUSH: 'brush',
      LOCK: 'lock',
  },

  SIZES: {
    XS: 'xs',
    S: 's',
    M: 'm',
    L: 'l',
    XL: 'xl',
  },
  
  DISPLAY: {
    BLOCK: 'block',
    INLINE: 'inline',
  },
  
  COLORS: {
    MAJOR: 'major',
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    MINOR: 'minor',
    LIGHT: 'light',
    POSITIVE: 'positive',
    WARNING: 'warning',
    NEGATIVE: 'negative',
  },
}
```

```jsx
import Icon from '../Icon';

<div className="omay-ds-list m-center">
  {Object.keys(Icon.REFS.TYPES).map(type => (
    <div className="omay-ds-list-item" key={type}>
      <div className="omay-ds-value">
        <Icon type={Icon.REFS.TYPES[type]} />
      </div>
      <div className="omay-ds-label">{Icon.REFS.TYPES[type]}</div>
    </div>
  ))}
</div>
```
