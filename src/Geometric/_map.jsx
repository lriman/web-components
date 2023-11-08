import React from 'react';
import { TYPES } from './_constants';
import * as Items from './_items';

const Map = {
  [TYPES.ALPHA]: props => <Items.GeometricAlpha {...props} />,
  [TYPES.BETA]: props => <Items.GeometricBeta {...props} />,
  [TYPES.GAMMA]: props => <Items.GeometricGamma {...props} />,
  [TYPES.DELTA]: props => <Items.GeometricDelta {...props} />,
};

export default Map;
