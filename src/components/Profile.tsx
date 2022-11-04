import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import Style from '../styles/components/Profile.module.css';

export function Profile() {

  const { level, userName, setImage } = useContext(ChallengesContext);
  
  return (
    <div className={Style.profileContainer}>
      <img src={`https://github.com/${userName}.png`} alt=""  onClick={setImage}/>
      <div>
        <strong onClick={setImage}>{userName}</strong>
        <p>
          <img src='icons/level.svg' alt='Level' />
          Level {level}
        </p>
      </div>
    </div>
  )
}
