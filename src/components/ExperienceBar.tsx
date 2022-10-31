import Style from '../styles/components/Experience.module.css';


export function ExperienceBar() {


  return (
    <header className={Style.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: '50%'}}></div>
          <span className={Style.currentExperience} style={{left: '50%'}}>300 xp</span>
      </div>
      <span>600 xp</span>
    </header>

  )
}
