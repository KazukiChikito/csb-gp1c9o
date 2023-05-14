import DisplayDate from './DisplayDate.js'

function DisplayTimer({days, hours, mins, secs}) {
  return (
    <div className='display-timer'>
      <DisplayDate value={days} type={`days`} isDanger={days<=3}/>
      <p>:</p>
      <DisplayDate value={hours} type={`hours`}/>
      <p>:</p>
      <DisplayDate value={mins} type={`minutes`}/>
      <p>:</p>
      <DisplayDate value={secs} type={`seconds`}/>
    </div>
  );
}

export default DisplayTimer;