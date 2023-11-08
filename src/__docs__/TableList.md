```jsx
import Layout from '../Layout';
const renderRow = ({ children }) => (<div>{children}</div>);

const rounds = Array.from(Array(15).keys());
const roundCaptions = rounds.map(item => ({
  id: String(item),
  title: `${item + 1} Тур`,
  tableViewWidth: 45,
  cardsViewWidth: 50,
  tableViewMinWidth: 100,
  justify: 'center',
  isPaginate: true,
}))
const roundGames = rounds.reduce((acc, item, i) => ({ ...acc, [item]: i % 2 == 0 ? 0 : 1 }), {})

const captions = [
  {
    id: 'game',
    title: 'Партия',
    tableViewWidth: 25,
    cardsViewWidth: 50,
    tableViewMinWidth: 150,
  },
  {
    id: 'players',
    title: 'Игроки',
    tableViewWidth: 25,
    cardsViewWidth: 50,
    tableViewMinWidth: 150,
  },
  ...roundCaptions,
  {
    id: 'result',
    title: 'Результат',
    tableViewWidth: 25,
    cardsViewWidth: 100,
    tableViewMinWidth: 150,
  },
  {
    id: 'ratingChanges',
    title: 'Изменение рейтинга',
    tableViewWidth: 25,
    cardsViewWidth: 100,
    tableViewMinWidth: 150,
    sortOrder: 'asc',
    sort: (a, b) => a.ratingChanges - b.ratingChanges,
  },
];

const data = [
  {
    id: '11-12-2020',
    title: '11 декабря 2020',
    items: [
      {
        id: 'item1',
        game: 'Пуля',
        players: 'Игрок 1, Игрок 2',
        result: 'Белые выиграли',
        ratingChanges: '+100',
        ...roundGames,
      },
      {
        id: 'item2',
        game: 'Пуля',
        players: 'Игрок 1, Игрок 2',
        result: 'Белые выиграли',
        ratingChanges: '+120',
        ...roundGames,
      },
      {
        id: 'item3',
        game: 'Пуля',
        players: 'Игрок 1, Игрок 2',
        result: 'Белые выиграли',
        ratingChanges: '+130',
        ...roundGames,
      },
    ],
  },
  {
    id: '12-12-2020',
    title: '12 декабря 2020',
    items: [
      {
        id: 'item1',
        game: 'Пуля',
        players: 'Игрок 1, Игрок 2',
        result: 'Белые выиграли',
        ratingChanges: '+123',
        ...roundGames,
      },
      {
        id: 'item2',
        game: 'Пуля',
        players: 'Игрок 1, Игрок 2',
        result: 'Белые выиграли',
        ratingChanges: '+123',
        ...roundGames,
      },
      {
        id: 'item3',
        game: 'Пуля',
        players: 'Игрок 1, Игрок 2',
        result: 'Белые выиграли',
        ratingChanges: '+123',
        ...roundGames,
      },
    ],
  },
];

const draggableData = [
  {
    id: '11-12-2020',
    title: '11 декабря 2020',
    items: [
      {
        id: 'item1',
        game: 'Пуля',
        players: 'Игрок 1, Игрок 2',
        result: 'Черные выиграли',
        ratingChanges: '+100',
      },
      {
        id: 'item2',
        game: 'Пуля',
        players: 'Игрок 1, Игрок 2',
        result: 'Белые выиграли',
        ratingChanges: '+123',
      },
      {
        id: 'item3',
        game: 'Рапид',
        players: 'Игрок 1, Игрок 2',
        result: 'Ничья',
        ratingChanges: '+10',
      },
    ],
  },
];

const labels = { of: ' из' }
const handleOnDragEnd = (e) => {
  console.log(e);
}

function RowRenderer(props) {
  const { id, children } = props;
  const childrenWithNewProps = React.cloneElement(children, { isDragDisabled: id === 'item2' });
  return (
    <div id={id}>
      {childrenWithNewProps}
    </div>
  );
}

function CaptionRenderer(props) {
  const { data } = props;
  const { id } = data;

  return (
    <div id={id} style={{ color: 'red' }}>
      {data.title}
    </div>
  );
}

<div className="omay-ds-block m-clear-indent">
  <Layout>
    <Layout.Section type="normal">
      <Layout.Block>
        <TableList viewSwitchingWidth={600} captions={captions} data={data} labels={labels} renderRow={renderRow} />
      </Layout.Block>
    </Layout.Section>
    <Layout.Section type="main">
      <Layout.Block>
        <TableList viewSwitchingWidth={600} captions={captions} data={data} labels={labels} renderRow={renderRow} />
      </Layout.Block>
    </Layout.Section>
    <Layout.Section type="normal">
      <Layout.Block>
        <h3>Таблица DragDrop</h3>
        <TableList viewSwitchingWidth={600} captions={captions} data={draggableData} renderRow={RowRenderer} isDraggable handleOnDragEnd={handleOnDragEnd} />
      </Layout.Block>
    </Layout.Section>
    <Layout.Section type="normal">
      <Layout.Block>
        <h3>Кастомный renderCaption</h3>
        <TableList viewSwitchingWidth={600} captions={captions} data={data} labels={labels} renderCaption={CaptionRenderer} />
      </Layout.Block>
    </Layout.Section>
    <Layout.Section type="normal">
      <Layout.Block>
        <h3>type=REFS.TYPES.SECONDARY</h3>
        <TableList viewSwitchingWidth={600} captions={captions} data={data} labels={labels} renderRow={renderRow} type="secondary" />
      </Layout.Block>
    </Layout.Section>
  </Layout>
</div>
```
