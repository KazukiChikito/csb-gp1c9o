import { useState, useEffect } from 'react';
import toDateTime from '../toDateTime.js';

function useCountdown(expireDate) {
  const expireTime = new Date(expireDate).getTime();

  const [countdown, setCountdown] = useState(expireTime - Date.now());

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCountdown(expireTime - Date.now());
    }, 1000);

    return ()=>clearInterval(interval);
  }, [expireTime]);

  return toDateTime(countdown);
}

export { useCountdown };