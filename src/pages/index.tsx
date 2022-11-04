import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import Style from '../styles/pages/Home.module.css';
import { Countdown } from "../components/Countdown";
import Head from "next/head";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";
import { GetServerSideProps } from 'next'
import { ChallengesProvider } from '../contexts/ChallengesContext';


interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  userName: string;
}

export default function Home(props: HomeProps) {
  return (

    <ChallengesProvider  
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
      userName={props.userName}
    >
      <div className={Style.container}>
        <Head>
          <title>Inicio | move-doro</title>
        </Head>
        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted, userName } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
      userName: String(userName)
    }
  } 
}


