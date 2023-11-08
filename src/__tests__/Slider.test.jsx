import React from 'react';
import TestRenderer from 'react-test-renderer';
import 'jest-styled-components';
import Slider from '../Slider';

describe('Slider', () => {
  it(`default`, () => {
    const wrapper = TestRenderer.create(<Slider id="slider" min={0} max={100} value={0} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it(`with marks`, () => {
    const wrapper = TestRenderer.create(
      <Slider id="slider" min={0} max={100} marks={{ 0: '0%', 50: '50%', 100: '100%' }} step={null} value={0} />,
    ).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it(`with step`, () => {
    const wrapper = TestRenderer.create(<Slider id="slider" min={0} max={100} step={10} value={0} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it(`disabled`, () => {
    const wrapper = TestRenderer.create(<Slider id="slider" min={0} max={100} disabled value={0} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it(`with onChange`, () => {
    const wrapper = TestRenderer.create(
      <Slider id="slider" min={0} max={100} onChange={() => {}} value={0} />,
    ).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it(`with children`, () => {
    const wrapper = TestRenderer.create(
      <Slider id="slider" min={0} max={100} onChange={() => {}} value={0}>
        <div>Slider</div>
      </Slider>,
    ).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
