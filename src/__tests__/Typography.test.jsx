import React from 'react';
import TestRenderer from 'react-test-renderer';
import 'jest-styled-components';
import { Block, Heading, Paragraph, Span, Table, TableRow, TableCell } from '../Typography';
import IconDocument from '../Icon/IconDocument';

describe('Typography', () => {
  describe(`Block`, () => {
    const sizes = Object.values(Block.REFS.SIZES);

    sizes.forEach(size => {
      it(`size ${size}`, () => {
        const wrapper = TestRenderer.create(<Block size={size}>Text</Block>).toJSON();
        expect(wrapper).toMatchSnapshot();
      });
    });
  });

  describe(`Heading`, () => {
    const sizes = Object.values(Heading.REFS.SIZES);

    sizes.forEach(size => {
      it(`size ${size}`, () => {
        const wrapper = TestRenderer.create(<Heading size={size}>Text</Heading>).toJSON();
        expect(wrapper).toMatchSnapshot();
      });
    });
  });

  describe(`Paragraph`, () => {
    const sizes = Object.values(Paragraph.REFS.SIZES);

    sizes.forEach(size => {
      it(`size ${size}`, () => {
        const wrapper = TestRenderer.create(<Paragraph size={size}>Text</Paragraph>).toJSON();
        expect(wrapper).toMatchSnapshot();
      });
    });

    it(`withIcon`, () => {
      const wrapper = TestRenderer.create(
        <Paragraph>
          <IconDocument />
        </Paragraph>,
      ).toJSON();
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe(`Span`, () => {
    const sizes = Object.values(Span.REFS.SIZES);

    sizes.forEach(size => {
      it(`size ${size}`, () => {
        const wrapper = TestRenderer.create(<Span size={size}>Text</Span>).toJSON();
        expect(wrapper).toMatchSnapshot();
      });
    });

    it(`isAccented`, () => {
      const wrapper = TestRenderer.create(<Span isAccented>Text</Span>).toJSON();
      expect(wrapper).toMatchSnapshot();
    });

    it(`isDigital`, () => {
      const wrapper = TestRenderer.create(<Span isDigital>Text</Span>).toJSON();
      expect(wrapper).toMatchSnapshot();
    });

    it(`noWrap`, () => {
      const wrapper = TestRenderer.create(<Span noWrap>Text</Span>).toJSON();
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe(`Table`, () => {
    const sizes = Object.values(Table.REFS.SIZES);

    sizes.forEach(size => {
      it(`size ${size}`, () => {
        const wrapper = TestRenderer.create(
          <Table size={size}>
            <TableRow>
              <TableCell>TableCell</TableCell>
              <TableCell>TableCell</TableCell>
              <TableCell>TableCell</TableCell>
              <TableCell>TableCell</TableCell>
            </TableRow>
            <TableRow verticalAlign={TableRow.REFS.VERTICAL_ALIGN.TOP}>
              <TableCell textAlign={TableCell.REFS.TEXT_ALIGN.LEFT}>TableCell</TableCell>
              <TableCell textAlign={TableCell.REFS.TEXT_ALIGN.CENTER}>TableCell</TableCell>
              <TableCell textAlign={TableCell.REFS.TEXT_ALIGN.RIGHT}>TableCell</TableCell>
              <TableCell textAlign={TableCell.REFS.TEXT_ALIGN.JUSTIFY}>TableCell</TableCell>
            </TableRow>
            <TableRow verticalAlign={TableRow.REFS.VERTICAL_ALIGN.MIDDLE}>
              <TableCell textAlign={TableCell.REFS.TEXT_ALIGN.LEFT}>TableCell</TableCell>
              <TableCell textAlign={TableCell.REFS.TEXT_ALIGN.CENTER}>TableCell</TableCell>
              <TableCell textAlign={TableCell.REFS.TEXT_ALIGN.RIGHT}>TableCell</TableCell>
              <TableCell textAlign={TableCell.REFS.TEXT_ALIGN.JUSTIFY}>TableCell</TableCell>
            </TableRow>
            <TableRow verticalAlign={TableRow.REFS.VERTICAL_ALIGN.BOTTOM}>
              <TableCell textAlign={TableCell.REFS.TEXT_ALIGN.LEFT}>TableCell</TableCell>
              <TableCell textAlign={TableCell.REFS.TEXT_ALIGN.CENTER}>TableCell</TableCell>
              <TableCell textAlign={TableCell.REFS.TEXT_ALIGN.RIGHT}>TableCell</TableCell>
              <TableCell textAlign={TableCell.REFS.TEXT_ALIGN.JUSTIFY}>TableCell</TableCell>
            </TableRow>
          </Table>,
        ).toJSON();
        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});
