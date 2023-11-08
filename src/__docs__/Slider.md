```jsx
const SliderExample = require('../__examples__/Slider.example').default;

const marksPercent = {
  0: '0',
  10: '10',
  20: '20',
  30: '30',
  40: '40',
  50: '50',
  60: '60',
  70: '70',
  80: '80',
  90: '90',
  99: '99%',
};

const marksSum = {
  0: '0',
  75000: '75 000 ₽',
};

const marksMonths = {
  6: '6',
  9: '9',
  12: '12',
  15: '15',
  18: '18',
  21: '21',
  24: '24 мес.',
};

<div className="omay-ds-block">
  <div className="omay-ds-block">
    <SliderExample id="testSlider1" min={0} max={100} />
  </div>
  <div className="omay-ds-block">
    <SliderExample id="testSlider2" min={0} max={100} value={50} />
  </div>
  <div className="omay-ds-block">
    <SliderExample id="testSlider3" min={0} max={99} value={50} marks={marksPercent} step={null} label="Первоначальный взнос" />
  </div>
  <div className="omay-ds-block">
    <SliderExample id="testSlider4" min={0} max={99} value={50} marks={marksPercent} step={null} label="Первоначальный взнос" compact />
  </div>
  <div className="omay-ds-block">
    <SliderExample id="testSlider5" min={0} max={75000} value={25000} marks={marksSum} step={2500} label="Первоначальны взнос" />
  </div>
  <div className="omay-ds-block">
    <SliderExample id="testSlider6" min={6} max={24} value={12} marks={marksMonths} step={null} label="Срок кредита" />
  </div>
  <div className="omay-ds-block">
    <SliderExample id="testSlider7" min={6} max={24} value={15} marks={marksMonths} step={null} label="Срок кредита" disabled />
  </div>
  <div className="omay-ds-block">
    <SliderExample id="testSlider8" tooltip min={6} max={24} value={12} marks={marksMonths} step={null} label="Срок кредита" />
  </div>
  <div className="omay-ds-block">
    <SliderExample id="testSlider8" topMark min={6} max={24} value={12} marks={marksMonths} step={null} label="Срок кредита" />
  </div>
</div>
```

### Slider Range
```jsx
const SliderExample = require('../__examples__/Slider.example').default;

const marksPercent = {
  0: '0',
  10: '10',
  20: '20',
  30: '30',
  40: '40',
  50: '50',
  60: '60',
  70: '70',
  80: '80',
  90: '90',
  99: '99%',
};

const marksSum = {
  0: '0',
  75000: '75 000 ₽',
};

const marksMonths = {
  6: '6',
  9: '9',
  12: '12',
  15: '15',
  18: '18',
  21: '21',
  24: '24 мес.',
};

<div className="omay-ds-block">
  <div className="omay-ds-block">
    <SliderExample id="testSliderRange1" range min={0} max={100} />
  </div>
  <div className="omay-ds-block">
    <SliderExample id="testSliderRange2" range min={0} max={100} value={[25, 50]} />
  </div>
  <div className="omay-ds-block">
    <SliderExample id="testSliderRange3" range min={0} max={99} value={[25, 50]} marks={marksPercent} step={null} label="Первоначальный взнос" />
  </div>
  <div className="omay-ds-block">
    <SliderExample id="testSliderRange4" range min={0} max={99} value={[50, 99]} marks={marksPercent} step={null} label="Первоначальный взнос" compact />
  </div>
  <div className="omay-ds-block">
    <SliderExample id="testSliderRange5" range min={0} max={75000} value={[0, 25000]} marks={marksSum} step={2500} label="Первоначальны взнос" />
  </div>
  <div className="omay-ds-block">
    <SliderExample id="testSliderRange6" range min={6} max={24} value={[12, 24]} marks={marksMonths} step={null} label="Срок кредита" />
  </div>
  <div className="omay-ds-block">
    <SliderExample id="testSliderRange7" range min={6} max={24} value={[15, 18]} marks={marksMonths} step={null} label="Срок кредита" disabled />
  </div>
  <div className="omay-ds-block">
    <SliderExample id="testSliderRange8" tooltip range min={6} max={24} value={[12, 24]} marks={marksMonths} step={null} label="Срок кредита" />
  </div>
  <div className="omay-ds-block">
    <SliderExample id="testSliderRange8" topMark range min={6} max={24} value={[12, 24]} marks={marksMonths} step={null} label="Срок кредита" />
  </div>
</div>
```