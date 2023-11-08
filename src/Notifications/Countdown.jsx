import React from 'react';
import PropTypes from 'prop-types';
import Span from '../Typography/Span';
import { StyledCountdown } from './style';

const Countdown = props => {
  const { init } = props;
  const [counter, setCounter] = React.useState(init);

  React.useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <StyledCountdown>
      <Span>0:{counter} с</Span>
    </StyledCountdown>
  );
};

Countdown.propTypes = {
  init: PropTypes.number.isRequired,
};

export default Countdown;
