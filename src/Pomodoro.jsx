/* eslint-disable react/button-has-type */
import { useState } from 'react';
import styled from 'styled-components';

const TimerWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;  
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const StyledTime = styled.code`
  color: lightgray;
  font-size: 10rem;
`;

function PomodoroTimer({ ...omittedProps }) {
  const [intervalID, setIntervalID] = useState(null);
  const [time, setTime] = useState(25);
  const [timerOn, setTimerOn] = useState(false);

  const decrement = () => {
    setTime((oldTime) => oldTime - 1);
  };

  const onClickStart = () => {
    if (intervalID === null) { // small fix to prevent starting multiple intervals
      setIntervalID(setInterval(decrement, 1100)); // 60000
      setTimerOn(true);
    }
  };

  const onClickStop = () => {
    clearInterval(intervalID);
    setIntervalID(null);
    setTimerOn(false);
  };

  const onResetClick = () => {
    setTime(25);
    onClickStop();
  };

  return (
    <TimerWrapper role="timer" {...omittedProps}>
      <StyledTime>
        {time}
      </StyledTime>
      <button type="reset" onClick={timerOn ? onClickStop : onClickStart}>
        {timerOn ? 'Pause Timer' : 'Start Timer'}
      </button>
      <button type="reset" onClick={onResetClick}>
        Reset Timer
      </button>
    </TimerWrapper>
  );
}

export default PomodoroTimer;
