const SEC_MS = 1000;
const MIN_MS = SEC_MS * 60;
const HOUR_MS = MIN_MS * 60;
const DAY_MS = HOUR_MS * 24;


const toDateTime = (countdown) => {
  const seconds = Math.floor((countdown % MIN_MS) / SEC_MS);
  const minutes = Math.floor((countdown % HOUR_MS) / MIN_MS);
  const hours = Math.floor((countdown % DAY_MS) / HOUR_MS);
  const days = Math.floor(countdown / DAY_MS);

  return [days, hours, minutes, seconds];
};

export default toDateTime;