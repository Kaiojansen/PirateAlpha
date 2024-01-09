import React, { Component } from 'react';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import { ReactComponent as IconGithub } from './assets/icons/github.svg';
import "./App.css";
import VideoBackground from './VideoBackground'; // Import the custom video background component
import oceanVideo from './ocean.mp4'; 
import logoImage from './logo.png';
import pirateImage from './pirate.png';
import discordImage from './image.png';
import discordMusic from './music.mp3';

class App extends Component {
  state = {
    showImage: false,
  };

  handleDiscordClick = () => {
    this.setState({ showImage: true });
    const audio = new Audio(discordMusic);
    audio.play();

    setTimeout(() => {
      window.open('https://discord.gg/piratealpha', '_blank');
    }, 4000);
  };

  render() {
    return (
      <div className="card">
        <VideoBackground src={oceanVideo} />
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
          <button onClick={this.handleDiscordClick}>
            <div className="cta">DISCORD</div>
          </button>
          {this.state.showImage && 
 <img 
 src={discordImage} // Usa a imagem importada diretamente
 alt="Pirate" 
 className="pirate-image"
/>

}
        </div>

      </div>
    );
  }
}

export default App;
