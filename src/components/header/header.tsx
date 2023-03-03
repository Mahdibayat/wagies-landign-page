import { useState, useEffect } from 'react';

//==== STYLEs
import Button from '../button/button';
import styles from './header.module.css';

const Header = () => {
  const [responsiveMenu, setResponsiveMenu] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.left}>
          {/* <img src="./assets/logo.png" alt="" className={styles.logo} /> */}
          <span>WAGIES</span>
        </div>

        <div className={styles.right}>
          <div className={styles.rightLinks}>
            <a href="#">ABOUT</a>
            <a href="#">COMMUNITY</a>
            <a href="#">DROPS</a>
          </div>

          {/* <Button kind="blue">CONNECT WALLET</Button> */}
        </div>

        <Button
          kind="blue"
          className={styles.responsiveButton}
          onClick={() => setResponsiveMenu(true)}
        >
          Menu
        </Button>
      </div>

      {responsiveMenu && (
        <div
          className={styles.responsiveNavbarContainer}
          onClick={() => setResponsiveMenu(false)}
        >
          <div className={styles.responsiveNavbar}>
            <a href="#">ABOUT</a>
            <a href="#">COMMUNITY</a>
            <a href="#">DROPS</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
