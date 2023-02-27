//==== STYLEs
import styles from './sectionOne.module.css';
import Slider from 'react-slick';
import Button from '../../components/button/button';

//==== IMAGEs
import NFT1 from '../../assets/nfts/1.jpg';
import NFT2 from '../../assets/nfts/2.jpg';
import NFT3 from '../../assets/nfts/3.jpg';
import NFT4 from '../../assets/nfts/4.jpg';

import discord from '../../assets/discord.svg';
import twitter from '../../assets/twitter.svg';

const SectionOne = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <div className={styles.sectionOne} id="section-one">
      <div className={styles.caruselContainer}>
        <Slider {...settings}>
          <div className={styles.nftItem}>
            <img src={NFT1} alt="nft" />
          </div>
          <div className={styles.nftItem}>
            <img src={NFT2} alt="nft" />
          </div>
          <div className={styles.nftItem}>
            <img src={NFT3} alt="nft" />
          </div>
          <div className={styles.nftItem}>
            <img src={NFT4} alt="nft" />
          </div>
        </Slider>
      </div>

      <div className={styles.main}>
        <h1>WAGIES</h1>
        <h2>
          MORE THAN NFT <br />
          COLLECTION
        </h2>

        <div className={styles.actions}>
          <Button kind="yellow">
            <span className="y-btn">GET ON WHITELIST</span>
          </Button>
          <div className={styles.socialArea}>
            <Button kind="social">
              <img src={discord} alt="social" />
            </Button>
            <Button kind="social">
              <img src={twitter} alt="social" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
