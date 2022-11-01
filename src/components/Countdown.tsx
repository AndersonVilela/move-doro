import { useContext, useEffect, useState } from 'react';
import Style from '../styles/components/Countdown.module.css';
import { AiFillCheckCircle } from 'react-icons/ai';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';


export function Countdown() {
  const {minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

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
