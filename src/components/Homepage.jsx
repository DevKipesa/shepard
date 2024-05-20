import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTelegram, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Homepage.css';

const HomePage = () => {
  return (
    <div className="homepage">
        <h2 className='shep'>SHEPARD</h2>
      <header className="header">
        <h1 className='sky'>Heading Beyond the Sky</h1>
        <img
          src="/yup.png"
          alt="Header"
          className="header-image"
        />
        <div className="confetti"></div>
      </header>
      <div className='buy'>
      <button className='btn' >Buy Now</button>
      </div>
      <div className="tokenomics">
        <img
          src="/hello.png"
          alt="Tokenomics"
          className="tokenomics-image"
        />
        <div className="tokenomics-content">
          <h3 className='token'>Tokenomics</h3>
          <p>Shepard made 555 Million tokens but he's a greedy son of a bitch and wants to keep them all to himself. It always keeps on rising. Go beyond the sky friends.</p>
        </div>
      </div>
      < div className='social'>
      <h2 className='soci'>SOCIALS</h2>
      <h2>JOIN THE SHEPARD COMMUNITY</h2>
      </div>
      <footer className="footer">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="icon" />
        </a>
        <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTelegram} className="icon" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="icon" />
        </a>
      </footer>
    </div>
  );
};

export default HomePage;
