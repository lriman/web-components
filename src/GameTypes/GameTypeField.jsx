import React from 'react';
import PropTypes from 'prop-types';

import Grid, { Item } from '../Grid';
import { Block, Span } from '../Typography';
import { getGameTypeIcon } from '../GetIcon';
import IconInfoCircle from '../Icon/IconInfoCircle';
import Popup from '../Popup';

import { StyledGameTypeText, StyledGameTypeTime, StyledGameTypeTitle, StyledGameTypeTitleIcon } from './_style';

const GameTypeField = props => {
  const { item, value, times, type, handleChange } = props;

  const onChangeTime = time => () => {
    handleChange({ id: item.id, value: time, gameType: item.value });
  };

  return (
    <Block>
      <Block margin="xs">
        <StyledGameTypeTitle sType={type}>
          <Span size="xl" weight="medium">
            {item.title}
          </Span>
          {item.text && (
            <Popup>
              <Popup.Opener>
                <StyledGameTypeTitleIcon>
                  <IconInfoCircle size="xxs" />
                </StyledGameTypeTitleIcon>
              </Popup.Opener>
              <Popup.Box isClosingOnMouseLeave>
                <StyledGameTypeText sType={type}>
                  <Span size="l">{item.text}</Span>
                </StyledGameTypeText>
              </Popup.Box>
            </Popup>
          )}
        </StyledGameTypeTitle>
      </Block>
      <Block margin="s">
        <Grid justify="start" alignItems="center">
          {times[item.value].map(element => (
            <Item key={element.id}>
              <StyledGameTypeTime
                id={element.id}
                onClick={onChangeTime(element.value)}
                sType={type}
                isActive={value && value.find(el => el === element.value)}
              >
                {getGameTypeIcon(item.value, 'xl')}
                <Span weight="medium">{element.title}</Span>
              </StyledGameTypeTime>
            </Item>
          ))}
        </Grid>
      </Block>
    </Block>
  );
};

GameTypeField.propTypes = {
  item: PropTypes.shape().isRequired,
  value: PropTypes.arrayOf(PropTypes.string).isRequired,
  times: PropTypes.shape().isRequired,
  type: PropTypes.string,
  handleChange: PropTypes.func,
};

GameTypeField.defaultProps = {
  type: null,
  handleChange: undefined,
};

export default GameTypeField;
