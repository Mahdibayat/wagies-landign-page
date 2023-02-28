import { useEffect, useState } from 'react';

//==== STYLEs
import styles from './goToTop.module.css';

//=== IMAGEs
import Rocket from '../../assets/rocket.svg';

const GoToTop = () => {
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    document.addEventListener('scroll', trackScrolling);
    return () => {
      document.removeEventListener('scroll', trackScrolling);
    };
  }, []);

  function isBottom(el: HTMLElement | null) {
    if (!el) return;
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }

  function trackScrolling() {
    const wrappedElement = document.getElementById('header');
    if (isBottom(wrappedElement)) {
      console.log('header bottom reached');
      setShowGoToTop(true);
      // document.removeEventListener('scroll', trackScrolling);
    } else {
      setShowGoToTop(false);
    }
  }

  function handleGoToTop() {
    if (!showGoToTop) return;
    window.scrollTo({ behavior: 'smooth', top: 0 });
  }

  return (
    <div className={styles.goToTop}>
      <div
        className={styles.container}
        style={
          showGoToTop
            ? { opacity: 1 }
            : { opacity: 0, cursor: 'default', pointerEvents: 'none' }
        }
        onClick={handleGoToTop}
      >
        <img src={Rocket} alt="rocket" />
      </div>
    </div>
  );
};

export default GoToTop;
