import React, { useEffect, useState } from "react";

function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log('setting timeout')
    const timer = setTimeout(onTimeout, timeout);
    return ()=> clearTimeout(timer)
}, [onTimeout, timeout]);

useEffect(() => {
      console.log('setting intreval')
    const interval = setInterval(
      () => setRemainingTime((prevRemainingTime) => prevRemainingTime - 10),
      10
    );

    return () => {clearInterval(interval)}
  }, []);

  return (
    <progress id="question-time" max={timeout} value={remainingTime}></progress>
  );
}

export default QuestionTimer;
