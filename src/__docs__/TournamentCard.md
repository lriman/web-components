### TournamentCard
```jsx
import Grid, { Item } from '../Grid';

 const ratingTypes = [
      {
        ratingType: 'bullet',
        timeControl: '1+0',
      },
      {
        ratingType: 'blitz',
        timeControl: '3+0',

      },
      {
        ratingType: 'rapid',
        timeControl: '15+0',
      },
      {
        ratingType: 'classic',
        timeControl: '30+0',
      },
      {
        ratingType: 'offline',
        timeControl: '1 день',
      },
    ]

const data = {
 cap: { badge: { status: 'active', label: 'Идет' }, date: '23 ноября', time: '12:30' },
 type: 'swiss',
 ratingType: 'rapid',
 timeControl: '1 + 0',
 title: 'Ежемесячная SuperBlitz Арена Ежемесячная SuperBlitz Арена',
 describe: '1| 0 рейтинговая | 8/12 игроков 9/4 туров Продолжительность 30 мин',
 participants: {
   list: [
           {
             id: 'palyer1',
             name: 'Иван Иванов',
             piture: '',
             
           },
           {
             id: 'palyer2',
             name: 'Николай Николаев',
             piture: '',             
           },
           {
             id: 'palyer3',
             name: 'Константин Константинов',
             piture: '',             
           },
          ],
   extra: 5,
  }
};

 const items = ratingTypes.map(item => ({ ...data, ratingType: item.ratingType, timeControl: item.timeControl, image: item.image}));
<div className="omay-ds-block"> 
  <div className="omay-ds-block"> 
    <Grid>
    {items.map(item => (
      <Item key={item.ratingType}>
        <TournamentCard key={item.ratingType} data={item} /> 
      </Item>
      ))}  
    </Grid>
  </div>

  // compact size='l'
  <div className="omay-ds-block"> 
    <Grid>
    {items.map(item => (
      <Item key={item.ratingType}>
        <TournamentCard key={item.ratingType} data={item} size='l' compact/> 
      </Item>
      ))}  
    </Grid>
  </div>

  // compact size='s'
  <div className="omay-ds-block"> 
    <Grid>
    {items.map(item => (
      <Item key={item.ratingType}>
        <TournamentCard key={item.ratingType} data={item} size='s' compact/> 
      </Item>
      ))}  
    </Grid>
  </div>
</div>
```

### TournamentCardCustom
```jsx
import Grid, { Item } from '../Grid';

 const ratingTypes = [
      {
        ratingType: 'bullet',
        timeControl: '1+0',
      },
      {
        ratingType: 'blitz',
        timeControl: '3+0',
      },
      {
        ratingType: 'rapid',
        timeControl: '15+0',
      },
      {
        ratingType: 'classic',
        timeControl: '30+0',
      },
      {
        ratingType: 'offline',
        timeControl: '1 день',
      },
    ]

const data = {
 cap: { badge: { status: 'active', label: 'Идет' }, date: '23 ноября', time: '12:30' },
 type: 'swiss',
 ratingType: 'rapid',
 timeControl: '1 + 0',
 title: 'Ежемесячная SuperBlitz Арена Ежемесячная SuperBlitz Арена',
 describe: '1| 0 рейтинговая | 8/12 игроков 9/4 туров Продолжительность 30 мин',
 participants: {
   list: [
           {
             id: 'palyer1',
             name: 'Иван Иванов',
             piture: '',
             
           },
           {
             id: 'palyer2',
             name: 'Николай Николаев',
             piture: '',             
           },
           {
             id: 'palyer3',
             name: 'Константин Константинов',
             piture: '',             
           },
          ],
   extra: 5,
  }
};

 const items = ratingTypes.map(item => ({ ...data, ratingType: item.ratingType, timeControl: item.timeControl, image: item.image}));
<div className="omay-ds-block"> 
  <div className="omay-ds-block"> 
    <Grid>
    {items.map(item => (
      <Item key={item.ratingType}>
        <TournamentCard key={item.ratingType} data={item} type={TournamentCard.REFS.TYPES.CUSTOM} /> 
      </Item>
      ))}  
    </Grid>
  </div>

  // compact size='l'
  <div className="omay-ds-block"> 
    <Grid>
    {items.map(item => (
      <Item key={item.ratingType}>
        <TournamentCard key={item.ratingType} data={item} size='l' type={TournamentCard.REFS.TYPES.CUSTOM} compact/> 
      </Item>
      ))}  
    </Grid>
  </div>

  // compact size='s'
  <div className="omay-ds-block"> 
    <Grid>
    {items.map(item => (
      <Item key={item.ratingType}>
        <TournamentCard key={item.ratingType} data={item} size='s' type={TournamentCard.REFS.TYPES.CUSTOM} compact/> 
      </Item>
      ))}  
    </Grid>
  </div>
</div>
```
