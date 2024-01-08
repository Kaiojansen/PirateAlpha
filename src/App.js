import React, { useState } from 'react';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import { ReactComponent as IconGithub } from './assets/icons/github.svg';
import "./App.css";
import oceanVideo from './ocean.mp4'; 
import logoImage from './logo.png';
import pirateImage from './pirate.png';
import discordImage from './image.png'; // Caminho da imagem
import discordMusic from './music.mp3'; // Caminho da música

class App extends React.Component {
  state = {
    showImage: false,
  }

  handleDiscordClick = () => {
    this.setState({ showImage: true });
    const audio = new Audio(discordMusic);
    audio.play();

    setTimeout(() => {
      window.open('https://discord.gg/piratealpha', '_blank');
    }, 4000); // Ajuste o atraso conforme necessário
  }

  render = () => {
    return (
      <div className="card">
        <video className="video-background" autoPlay loop muted>
          <source src={oceanVideo} type="video/mp4" />
        </video>
        <div className="header">
          <div className="logo">
            <a href=".">
              <img src={logoImage} alt="Logo" className="logo" />
            </a>
          </div>
          <div className="social">
            <a href="https://twitter.com" title="Twitter" target="_blank" rel="noopener noreferrer">
              <IconTwitter className="icon" />
            </a>
            <a href="https://github.com/arkn98/coming-soon" title="GitHub" target="_blank" rel="noopener noreferrer">
              <IconGithub className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <img src={pirateImage} alt="Pirate" className="pirate-title" />
            <p>Em breve, novidades incríveis! Fique por dentro entrando no nosso Discord</p>
          </div>
          <a onClick={this.handleDiscordClick}>
            <div className="cta">DISCORD</div>
          </a>
          {this.state.showImage && 
 <img 
 src={discordImage} // Usa a imagem importada diretamente
 alt="Pirate" 
 className="pirate-image"
/>

}
        </div>
        <div className="footer">
          <span>MADE BY <a className="underlined" href="https://github.com/arkn98" target="_blank" rel="noopener noreferrer">BOOLISH</a> </span>
        </div>
      </div>
    );
  }
}

export default App;
