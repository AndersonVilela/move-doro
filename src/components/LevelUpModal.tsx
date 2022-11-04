import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import Style from '../styles/components/LevelUpModal.module.css';



export function LevelUpModal() {

  const { level, closeLevelUpModal } = useContext(ChallengesContext)

  return (
    <div className={Style.overlay}>

      <div className={Style.container}>
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src='icons/close.svg' alt='Fechar modal' />
        </button>
      </div>
    </div>

  )
}
