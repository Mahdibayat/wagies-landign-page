//==== STYLEs
import Button from '../../components/button/button';
import styles from './sectionFive.module.css';

import discord from '../../assets/discord.svg';
import twitter from '../../assets/twitter.svg';
import GoToTop from '../../components/goToTop/goToTop';

const SectionFive = () => {
  return (
    <div className={styles.sectionFive} id="header">
      <div className={styles.top}>
        <h2>
          get on <br /> whitelist
        </h2>
        <Button kind="yellow">
          <span className="y-btn">BE THE FIRST</span>
        </Button>
      </div>

      <div className={styles.bottom}>
        <div className={styles.logo}>
          {/* <img src="#" alt="logo wagies" /> */}
          <h2>WAGIES</h2>
        </div>
        <div className={styles.socialArea}>
          <Button kind="social">
            <img src={discord} alt="social" />
          </Button>
          <Button kind="social">
            <img src={twitter} alt="social" />
          </Button>
        </div>
      </div>

      <GoToTop />
    </div>
  );
};

export default SectionFive;
