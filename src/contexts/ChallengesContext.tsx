import { createContext, ReactNode, useEffect, useState } from "react";
import challenges from '../../challenges.json';
import Cookies from 'js-cookie';
import { LevelUpModal } from "../components/LevelUpModal";

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;

}


interface ChallengeContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  experienceToNextLevel: number;
  activeChallenge: Challenge;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
  closeLevelUpModal: () => void;
  setImage: () => void;
  userName: string;

}

interface ChallengesProviderProps {
  children: ReactNode;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  userName: string;
}


export const ChallengesContext = createContext({} as ChallengeContextData);


export function ChallengesProvider({ children, ...rest }: ChallengesProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
  const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);

  const [activeChallenge, setActiveChallenge] = useState(null);

  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);
  const [userName, setUsername] = useState(rest.userName ?? "")


  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)


  useEffect(() => {
    Notification.requestPermission();
  }, [])

  function setImage() {
    setUsername(prompt("Digite seu username do github:"));
  }

  useEffect(() => {
    Cookies.set('level', String(level));
    Cookies.set('currentExperience', String(currentExperience));
    Cookies.set('challengesCompleted', String(challengesCompleted));
    Cookies.set('userName', String(userName));
  }, [level, currentExperience, challengesCompleted, userName])

  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }


  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex];


    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    if (Notification.permission == 'granted') {
      new Notification('Novo desafio!! ', {
        body: `Valendo ${challenge.amount}xp`
      })
    }

  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1)
  }
  return (

    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        levelUp,
        experienceToNextLevel,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        completeChallenge,
        closeLevelUpModal,
        userName,
        setImage
      }}>
      {children}

      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengesContext.Provider>
  )
}
