import { useEffect, useRef } from 'react';
import Button from '../../components/button/button';

//==== STYLEs
import styles from './sectionThree.module.css';

const SectionThree = () => {
  const isIosRef = useRef<boolean>(false);
  const ua = navigator.userAgent;
  useEffect(() => {
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (isSafari) {
      isIosRef.current = true;
    }
  }, []);
  return (
    <>
      {isIosRef.current ? (
        <div className={styles.safariContainer}>
          <div className={styles.safariMain}>
            <div className={styles.rowOne}>
              <Button className={styles.num11}>WITH</Button>
            </div>
            <div className={styles.rowTwo}>
              <Button className={styles.num22}>and revenue</Button>
              <Button kind="blue" className={styles.num33}>
                staking
              </Button>
            </div>
            <div className={styles.rowThree}>
              <Button kind="yellow" className={styles.num44}>
                share
              </Button>
            </div>
          </div>
        </div>
      ) : (
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
      )}
    </>
  );
};

export default SectionThree;
