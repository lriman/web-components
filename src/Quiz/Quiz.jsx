import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../_utils';

import Grid, { Item } from '../Grid';
import { Block, Span, H5 } from '../Typography';
import { IconPuzzle, IconSuccessFill } from '../Icon';

import QuizLogo from './_internal/QuizLogo';

import { COMPONENTS } from './_constants';
import { StyledQuiz, StyledQuizFlex } from './_style';

export default function Quiz(props) {
  const { round, solved, showInfo, children } = props;

  return (
    <StyledQuiz {...addDataAttributes({ component: COMPONENTS.GENERAL })}>
      <Grid justify="spaceBetween" alignItems="center" noWrap>
        <Item>
          <QuizLogo />
        </Item>
        <Item>
          <Grid alignItems="center" noWrap>
            {showInfo && (
              <Item>
                {round && (
                  <Block textAlign="right" margin="xs">
                    <Span size="l" weight="medium">
                      {round}
                    </Span>
                  </Block>
                )}
                <Block margin="xs">
                  <Grid alignItems="center" noWrap>
                    <Item>
                      <IconPuzzle />
                    </Item>
                    <Item>
                      <StyledQuizFlex>
                        <IconSuccessFill size="s" color="positive" />
                        {solved && (
                          <Block margin="xs">
                            <H5>{solved}</H5>
                          </Block>
                        )}
                      </StyledQuizFlex>
                    </Item>
                  </Grid>
                </Block>
              </Item>
            )}
            {children && <Item>{children}</Item>}
          </Grid>
        </Item>
      </Grid>
    </StyledQuiz>
  );
}

Quiz.propTypes = {
  round: PropTypes.string,
  solved: PropTypes.string,
  showInfo: PropTypes.bool,
  children: PropTypes.node,
};

Quiz.defaultProps = {
  round: undefined,
  solved: undefined,
  showInfo: false,
  children: undefined,
};
