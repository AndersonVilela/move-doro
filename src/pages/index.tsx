import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import Style from '../styles/pages/Home.module.css';
import { Countdown } from "../components/Countdown";
import Head from "next/head";
import { ChallengeBox } from "../components/ChallengeBox";

export default function Home() {
  return (
      <div className={Style.container}>
      <Head>
        <title>Inicio | move-doro</title>
      </Head>
      <ExperienceBar />

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
    </div>
  )
}
