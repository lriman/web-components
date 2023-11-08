```jsx
import Layout from '../Layout';

const xAxis = [
    { id: '01.01', title: '01.01' },
    { id: '02.01', title: '02.01' },
    { id: '03.01', title: '03.01' },
    { id: '04.01', title: '04.01' },
    { id: '05.01', title: '05.01' },
    { id: '06.01', title: '06.01' },
    { id: '07.01', title: '07.01' },
    { id: '08.01', title: '08.01' },
    { id: '09.01', title: '09.01' },
    { id: '10.01', title: '10.01' },
  ];

const data = [
    {
      id: 'bullet',
      color: "#F2B560",
      title: 'Пуля',
      values: {
        '01.01': 1200,
        '02.01': 1300,
        '03.01': 1400,
        '09.01': 1350,
        '10.01': 1500,
      },
    },
    {
      id: 'blitz',
      color: "#8585E8",
      title: 'Блиц',
      values: {
        '01.01': 1500,
        '05.01': 1530,
        '06.01': 1600,
        '07.01': 1750,
        '10.01': 1500,
      },
    },
    {
      id: 'classic',
      color: "#EA7C62",
      title: 'Классика',
      values: {
        '01.01': 1100,
        '05.01': 1090,
        '06.01': 1180,
        '07.01': 1220,
        '10.01': 1130,
      },
    },
  ];

<div className="omay-ds-block m-clear-indent">
    <Layout>
        <Layout.Section type="normal">
            <Layout.Block>
                <Charts data={data} xAxis={xAxis} />
            </Layout.Block>
        </Layout.Section>
        <Layout.Section type="deep">
            <Layout.Block>
                <Charts data={data} xAxis={xAxis} />
            </Layout.Block>
        </Layout.Section>
    </Layout>
</div>
```

