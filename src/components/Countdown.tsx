import { useContext, useEffect, useState } from 'react';
import Style from '../styles/components/Countdown.module.css';
import { AiFillCheckCircle } from 'react-icons/ai';
import { ChallengesContext } from '../contexts/ChallengesContext';

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {

  const {startNewChallenge} = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');
  const [hasFinished, setHasFinished] = useState(false);

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);

  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    } else if (isActive && time == 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time])

  return (
    <div>
      <div className={Style.countdownContainer}>

        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      {hasFinished ? (
        <button disabled className={Style.countdownButton} >
          Ciclo encerrado <AiFillCheckCircle  style={{color: 'var(--green)', marginLeft: '7px',}}/>
        </button>
      ) : (
        <>

          {isActive ? (

            <button type='button' className={`${Style.countdownButton} ${Style.countdownButtonActive}`} onClick={resetCountdown} >
              Abandonar ciclo
            </button>

          ) : (

            <button type='button' className={Style.countdownButton} onClick={startCountdown} >
              Iniciar um ciclo
            </button>

          )}
        </>
      )}

    </div>
  )
}
