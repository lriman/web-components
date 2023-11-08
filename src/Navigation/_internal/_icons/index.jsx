import React from 'react';
import { ICONS } from '../../_constants';
import * as Items from './_items';

const Icons = {
  [ICONS.ADMIN]: <Items.NavigationIconAdmin />,
  [ICONS.PUZZLE]: <Items.NavigationIconPuzzle />,
  [ICONS.STREAM]: <Items.NavigationIconStream />,
  [ICONS.CONTENT]: <Items.NavigationIconContent />,
  [ICONS.FOLDERS]: <Items.NavigationIconFolders />,
  [ICONS.GOODS]: <Items.NavigationIconGoods />,
  [ICONS.LIST]: <Items.NavigationIconList />,
  [ICONS.STATISTICS]: <Items.NavigationIconStatistics />,
};

export default Icons;
