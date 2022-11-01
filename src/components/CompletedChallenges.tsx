import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import Style from '../styles/components/CompletedChallenges.module.css';


export function CompletedChallenges() {

  const { challengesCompleted } = useContext(ChallengesContext)

  return (
    <div className={Style.CompletedChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  )
}
