import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes, formatLabel } from '../_utils';
import { Block, H2, Span } from '../Typography';
import Grid, { Item } from '../Grid';

import { COMPONENTS } from './_constants';
import {
  StyledLevel,
  StyledLevelMain,
  StyledLevelTitle,
  StyledLevelTrack,
  StyledLevelTrackValue,
  StyledLevelDescribe,
  StyledLevelItems,
  StyledLevelItem,
  StyledLevelItemValue,
  StyledLevelItemPicture,
  StyledLevelItemPictures,
  StyledLevelItemTrack,
  StyledLevelItemTrackValue,
} from './_style';

export default function Level(props) {
  const { value, points, maxPoints, totalSubAchieves, nextLevelPoints, labels, items, handleItemClick } = props;

  const trackWidth = (points / maxPoints) * 100;

  const onItemClick = id => () => {
    if (handleItemClick) handleItemClick(id);
  };

  return (
    <StyledLevel {...addDataAttributes({ component: COMPONENTS.GENERAL })}>
      {value && (
        <StyledLevelMain>
          <Grid alignItems="end" noWrap>
            <Item>
              <Block margin="s" textAlign="center">
                <H2>{value}</H2>
              </Block>
              <Block margin="s" textAlign="center">
                <StyledLevelTitle>
                  <Span weight="medium">{labels.title}</Span>
                </StyledLevelTitle>
              </Block>
            </Item>
            <Item>
              <StyledLevelDescribe>
                <Block margin="xs">
                  <Span color="minor">{labels.describe[0]}</Span>
                  <Span color="accent1">{formatLabel(labels.describe[1], { points: totalSubAchieves })}</Span>
                </Block>
                <Block margin="xs">
                  <Span color="minor">{labels.describe[2]}</Span>
                  <Span color="minor">{formatLabel(labels.describe[3], { nextLevelPoints })}</Span>
                  <Span color="minor">{labels.describe[4]}</Span>
                </Block>
              </StyledLevelDescribe>
            </Item>
          </Grid>
          <StyledLevelTrack>
            <StyledLevelTrackValue sWidth={trackWidth} />
          </StyledLevelTrack>
        </StyledLevelMain>
      )}
      {items && !!items.length && (
        <StyledLevelItems>
          {items.map(item => (
            <StyledLevelItem key={item.id} canClick={!!handleItemClick} onClick={onItemClick(item.id)}>
              <Grid justify="spaceBetween">
                <Item>
                  <Block>
                    <Span size="xl" weight="medium">
                      {item.title}
                    </Span>
                  </Block>
                </Item>
                <Item>
                  <StyledLevelItemValue>
                    <StyledLevelItemPictures>
                      {!!item.items?.length &&
                        item.items.map(element => (
                          <StyledLevelItemPicture key={element.id} src={element.picture} alt={element.title} />
                        ))}
                    </StyledLevelItemPictures>
                    <Span size="xl" weight="medium">
                      {item.value}/{item.total}
                    </Span>
                  </StyledLevelItemValue>
                </Item>
              </Grid>
              <StyledLevelItemTrack>
                <StyledLevelItemTrackValue sWidth={(item.value / item.total) * 100} />
              </StyledLevelItemTrack>
            </StyledLevelItem>
          ))}
        </StyledLevelItems>
      )}
    </StyledLevel>
  );
}

Level.propTypes = {
  value: PropTypes.number,
  points: PropTypes.number,
  maxPoints: PropTypes.number,
  totalSubAchieves: PropTypes.number,
  nextLevelPoints: PropTypes.number,
  handleItemClick: PropTypes.func,
  labels: PropTypes.shape({
    title: PropTypes.string,
    describe: PropTypes.arrayOf(PropTypes.string),
  }),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      total: PropTypes.number.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          picture: PropTypes.string.isRequired,
        }),
      ),
    }),
  ),
};

Level.defaultProps = {
  value: null,
  points: null,
  maxPoints: null,
  totalSubAchieves: null,
  nextLevelPoints: null,
  labels: undefined,
  items: null,
  handleItemClick: undefined,
};
