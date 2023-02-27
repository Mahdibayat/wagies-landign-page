//==== STYLEs
import Button from '../../components/button/button';
import styles from './sectionThree.module.css';

const SectionThree = () => {
  return (
    <div className={styles.sectionThree}>
      <div className={styles.container}>
        <Button className={styles.num1}>WITH</Button>
        <Button className={styles.num2}>and revenue</Button>
        <Button kind="blue" className={styles.num3}>
          staking
        </Button>
        <Button kind="yellow" className={styles.num4}>
          share
        </Button>
      </div>
    </div>
  );
};

export default SectionThree;
