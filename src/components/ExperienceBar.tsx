import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import Style from '../styles/components/Experience.module.css';


export function ExperienceBar() {
  
  const { currentExperience, experienceToNextLevel } =  useContext(ChallengesContext);

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;


  return (
    <header className={Style.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%`}}></div>
          <span className={Style.currentExperience} style={{left: `${percentToNextLevel}%`}}>{currentExperience} xp</span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>

  )
}
