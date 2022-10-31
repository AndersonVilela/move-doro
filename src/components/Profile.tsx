import Style from '../styles/components/Profile.module.css';

export function Profile() {

  return (
    <div className={Style.profileContainer}>
      <img src="https://github.com/AndersonVilela.png" alt="" />
      <div>
        <strong>Anderson Vilela</strong>
        <p>
          <img src='icons/level.svg' alt='Level' />
          Level 1
        </p>
      </div>
    </div>
  )
}
