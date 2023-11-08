import React from 'react';
import { processNodes } from 'react-html-parser';

import Card from '../Card';
import Link from '../Link';
import Button from '../Button';
import Account from '../Account';
import { H6, Span, Block, Paragraph } from '../Typography';
import GameNotationMove from '../GameNotation/_internal/GameNotationMove';

const transform = (node, index) => { //eslint-disable-line
  if (node.type === 'tag' && node.name === 'h6') {
    return <H6 key={index}>{processNodes(node.children, transform)}</H6>;
  }

  if (node.type === 'tag' && node.name === 'span') {
    return <Span key={index}>{processNodes(node.children, transform)}</Span>;
  }

  if (node.type === 'tag' && node.name === 'b') {
    return (
      <Span key={index} isAccented>
        {processNodes(node.children, transform)}
      </Span>
    );
  }

  if (node.type === 'tag' && node.name === 'p') {
    return <Paragraph key={index}>{processNodes(node.children, transform)}</Paragraph>;
  }

  if (node.type === 'tag' && node.name === 'a' && node?.attribs?.type === 'button') {
    return (
      <Block margin="s" key={index}>
        <Link href={node?.attribs?.href} target="_blank" isPrimary>
          <Button type="brand" size="s">
            {processNodes(node.children, transform)}
          </Button>
        </Link>
      </Block>
    );
  }

  if (node.type === 'tag' && node.name === 'a') {
    return (
      <Link href={node?.attribs?.href} target="_blank" key={index} isPrimary>
        {processNodes(node.children, transform)}
      </Link>
    );
  }

  if (node.type === 'tag' && node.name === 'button') {
    return (
      <Button key={index} type="brand" size="s">
        {processNodes(node.children, transform)}
      </Button>
    );
  }

  if (node.type === 'tag' && node.name === 'avatar') {
    return (
      <Account key={index} name={node?.attribs?.name} avatar={node?.attribs?.src} compact>
        {processNodes(node.children, transform)}
      </Account>
    );
  }

  if (node.type === 'tag' && node.name === 'move') {
    return (
      <Card
        key={index}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
        }}
      >
        <GameNotationMove
          gameSettings={{ notationIcon: true }}
          data={{ piece: node?.attribs?.piece, san: node.children[0]?.data, color: node?.attribs?.color }}
        />
      </Card>
    );
  }
};

export default transform;
