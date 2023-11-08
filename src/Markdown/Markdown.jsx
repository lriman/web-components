import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import ReactMarkdown from 'react-markdown';

import { Block, P, Heading, Table, TableRow, TableCell, List, ListItem } from '../Typography';
import { addDataAttributes } from '../_utils';
import Link from '../Link';

import { StyledMarkdown } from './_style';
import { COMPONENTS } from './_constants';

function Markdown(props) {
  const { children } = props;

  const renderers = {
    root: Block,
    paragraph: P,
    link: linkProps => <Link {...linkProps} isPrimary />,
    table: Table,
    tableRow: TableRow,
    tableCell: TableCell,
    heading: Heading,
    list: List,
    listItem: ListItem,
  };

  return (
    <StyledMarkdown {...addDataAttributes({ component: COMPONENTS.GENERAL })}>
      <ReactMarkdown renderers={renderers}>{children}</ReactMarkdown>
    </StyledMarkdown>
  );
}

Markdown.propTypes = {
  children: PropTypes.string.isRequired,
};

export default withTheme(Markdown);
