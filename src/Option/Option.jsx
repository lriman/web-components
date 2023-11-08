import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Highlighter from 'react-highlight-words';

import { addDataAttributes } from '../_utils';
import { Block, Span } from '../Typography';
import Grid, { Item } from '../Grid';

import { COMPONENTS, STYLES } from './_constants';
import { StyledOption } from './_style';

export default class Option extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    extra: PropTypes.string,
    describe: PropTypes.string,
    highlight: PropTypes.string,
  };

  static defaultProps = {
    extra: null,
    describe: null,
    highlight: null,
  };

  hihglightRenderer = param => {
    const { highlight } = this.props;

    if (!highlight) return param;

    return (
      <Highlighter searchWords={[highlight]} textToHighlight={param} highlightStyle={STYLES.HIGHLIGHT} autoEscape />
    );
  };

  render() {
    const { title, extra, describe } = this.props;

    return (
      <StyledOption {...addDataAttributes({ component: COMPONENTS.GENERAL })}>
        <Block margin={Block.REFS.MARGIN.XS} size={Block.REFS.SIZES.M}>
          <Grid noWrap justify={Grid.REFS.JUSTIFY.SPACE_BETWEEN}>
            <Item>{this.hihglightRenderer(title)}</Item>
            {extra && (
              <Item>
                <Span color={Span.REFS.COLORS.MINOR}>{this.hihglightRenderer(extra)}</Span>
              </Item>
            )}
          </Grid>
        </Block>
        {describe && (
          <Block margin={Block.REFS.MARGIN.XS} size={Block.REFS.SIZES.S} color={Block.REFS.COLORS.MINOR}>
            {this.hihglightRenderer(describe)}
          </Block>
        )}
      </StyledOption>
    );
  }
}
