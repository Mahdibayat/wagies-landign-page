//==== STYLEs
import Button from '../../components/button/button';
import styles from './sectionTwo.module.css';

//==== IMAGEs
import Game from '../../assets/sectionTwo.png';

const SectionTwo = () => {
  return (
    <div className={styles.sectionTwo}>
      <div className={styles.left}>
        <h2>blockchain game</h2>
        <p>In house created & built, new, fare and square casino style game.</p>

        <Button kind="yellow">
          <span className="y-btn">check it out</span>
        </Button>
      </div>
      <div className={styles.right}>
        <img src={Game} alt="nft game" />
      </div>
    </div>
  );
};

export default SectionTwo;
