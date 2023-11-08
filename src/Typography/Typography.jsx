import React from 'react';

import Block from './Block';
import Heading from './Heading';
import Paragraph from './Paragraph';
import Span from './Span';
import List from './List';
import Table from './Table';

const { SIZE, ...HEADING_REFS } = Heading.REFS;

const H1 = props => <Heading size={Heading.REFS.SIZES.XL} {...props} />;
H1.REFS = HEADING_REFS;
const H2 = props => <Heading size={Heading.REFS.SIZES.L} {...props} />;
H2.REFS = HEADING_REFS;
const H3 = props => <Heading size={Heading.REFS.SIZES.M} {...props} />;
H3.REFS = HEADING_REFS;
const H4 = props => <Heading size={Heading.REFS.SIZES.S} {...props} />;
H4.REFS = HEADING_REFS;
const H5 = props => <Heading size={Heading.REFS.SIZES.XS} {...props} />;
H5.REFS = HEADING_REFS;
const H6 = props => <Heading size={Heading.REFS.SIZES.XXS} {...props} />;
H6.REFS = HEADING_REFS;

const { TYPES, ...LIST_REFS } = Heading.REFS;
const Ul = props => <List type={List.REFS.TYPES.UL} {...props} />;
Ul.REFS = LIST_REFS;
const Ol = props => <List type={List.REFS.TYPES.OL} {...props} />;
Ol.REFS = LIST_REFS;

const Typography = {
  Block,
  Div: Block,
  Heading,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Paragraph,
  P: Paragraph,
  Span,
  Table,
  TableRow: Table.Row,
  TableCell: Table.Cell,
  List,
  Ul,
  Ol,
  ListItem: List.Item,
  Li: List.Item,
};

export default Typography;
