import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment-duration-format';

import Card from '../../Card';
import Grid, { Item } from '../../Grid';
import Span from '../../Typography/Span';
import IconAlarmClock from '../../Icon/IconAlarmClock';

import { formatTime, getAlarmClockColor } from '../_utils';

class GameNotationTimer extends Component {
  static propTypes = {
    startDate: PropTypes.string.isRequired,
    gameData: PropTypes.shape().isRequired,
  };

  constructor(props) {
    super(props);
    this.stopwatchId = null;
    this.state = {
      result: '',
      alarmClockColor: 'minor',
    };
  }

  componentDidMount() {
    this.stopwatchId = setInterval(this.timerInit, 1000);
  }

  componentWillUnmount() {
    if (this.stopwatchId) {
      clearInterval(this.stopwatchId);
    }
  }

  timerInit = () => {
    const { startDate, gameData } = this.props;
    const result = moment() - moment(startDate);
    const alarmClockColor = getAlarmClockColor(gameData);
    this.setState({ result: formatTime(result), alarmClockColor });
  };

  render() {
    const { result, alarmClockColor } = this.state;
    const { gameData } = this.props;

    if (!gameData) return null;

    return (
      <Grid justify="end" alignItems="center" spacing="s">
        <Item>
          <Card style={{ display: 'flex', alignItems: 'center', marginBottom: '3px' }}>
            <IconAlarmClock size="xs" color={alarmClockColor} />
          </Card>
        </Item>
        <Item>
          <Span>{result}</Span>
        </Item>
      </Grid>
    );
  }
}
export default GameNotationTimer;
