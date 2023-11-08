```jsx
import Grid, {Item} from '../Grid';

const html = `<avatar name="Иван Иванов" src='https://uploads.staging.corp.levitovchess.com/lc.staging.uploads/images/9071c5d5-edd2-459f-8573-9bc49b21136b.jpeg'></avatar><content><h6>Новый ход в партии</h6><b>Morphy</b> сделал ход: <move color='w' piece='b'>Bh6</move>. <br> Сделайте свой ход <a type="button" href="https://staging.corp.levitovchess.com/play-with-human/60018a225f9ab18519e6cb63">Перейти в игру</a></content>`;

const preprocessNotContentNodes = (nodes) => {
  return nodes.filter(item => item.name !== 'content');
}

const preprocessContentNodes = (nodes) => {
  return nodes.filter(item => item.name === 'content');
}
<div className="omay-ds-block">
  <Grid>
    <Item>
        <HtmlParserLite html={html} preprocessNodes={preprocessNotContentNodes}/>
    </Item> 
    <Item>
        <HtmlParserLite html={html} preprocessNodes={preprocessContentNodes}/>
    </Item>
  </Grid>
</div>
```
