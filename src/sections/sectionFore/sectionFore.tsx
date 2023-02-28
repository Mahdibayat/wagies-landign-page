//==== STYLEs
import styles from './sectionFore.module.css';

const SectionFore = () => {
  return (
    <div className={styles.sectionFore}>
      <div className={styles.backgroundWords}>
        <h2>WAGIES WAGIES WAGIES</h2>
        <h2 className={styles.center}>WAGIES WAGIES WAGIES</h2>
        <h2>WAGIES WAGIES WAGIES</h2>
      </div>

      <div className={styles.main}>
        <div className={styles.mainContent}>
          <h2>so much more to come!</h2>
          <p>
            Our original landing page with the full roadmap is literally 10 feet
            long...
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionFore;
