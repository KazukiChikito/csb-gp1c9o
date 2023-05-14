import { useCountdown } from './hooks/useCountdown.js';
import DisplayTimer from './DisplayTimer.js';
import ExpireNotice from './ExpireNotice.js';

function CountdownTimer({expireDate}) {
  const [days, hours, mins, secs] = useCountdown(expireDate);
  if (days+hours+mins+secs <= 0)
    return <ExpireNotice />;
  return (<>
    <p className='buy-text'> Buy before you die !!!</p>
    <DisplayTimer 
      days={days}
      hours={hours}
      mins={mins}
      secs={secs}
    />
  </>);
}

export default CountdownTimer;