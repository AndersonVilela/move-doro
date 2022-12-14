import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import Style from '../styles/components/ChallengeBox.module.css';


export  function ChallengeBox() {

  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }
  return (
    <div className={Style.challengeBoxContainer}>
      { activeChallenge ? (
        <div className={Style.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>
          
          <main>
            <img src='icons/body.svg'  />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button 
              type='button' 
              className={Style.challengeFailedButton}
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>

            <button 
              type='button' 
              className={Style.challengeSucceededButton}
              onClick={handleChallengeSucceded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={Style.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src='icons/level-up.svg' alt='Level Up' />
            Avance de level completando desafios.
          </p>
        </div>
      ) }
    </div>
  )
}
