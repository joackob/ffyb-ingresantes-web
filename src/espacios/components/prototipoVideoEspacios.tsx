import React, { Component } from 'react';
import { Player } from 'video-react';
import { Container, IconButton } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";

interface PlayerControlProps {}

interface PlayerControlState {
  source: string;
}

const videoSources = {
    desktop: "https://sharedby.blomp.com/qTphr8",
    mobile: "https://sharedby.blomp.com/kzv6mK",
    // desktop: "/desk.mp4",
    // mobile: "/mob.mp4",
  };
  export default class videoProps extends Component {
    constructor(props: videoProps) {
        super(props);
  
    this.state = {
        source: window.innerWidth > 640 ? videoSources.desktop : videoSources.mobile
        pause: true
      };
  
      this.play = this.play.bind(this);
      this.pause = this.pause.bind(this);
      this.load = this.load.bind(this);
    }
    componentDidMount() {
        // subscribe state change
        this.player.subscribeToStateChange(this.handleStateChange.bind(this));
      }
      
      handleStateChange(state) {
        // copy player state to this component's state
        this.setState({
          player: state,
          currentTime: state.currentTime
          
        });
      }
    play(): void {
        this.player.play();
      }
    
      pause(): void {
        this.player.pause();
      }
    
      load(): void {
        this.player.load();
      }
      togglePause() {
    // Cambia el estado de pausa del video al valor opuesto
    this.setState({ isPaused: !this.state.isPaused });
  }
}

return (
    <Container id="videos" sx={{ position: "relative" }}>
      <Player 
        playsInline
        src={this.source} 
      />
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
        }}
      >
        {!this.state. && (
          <IconButton onClick={this.play}>
            <PlayCircleIcon
              sx={{ fontSize: "8rem", color: "#3728b7", opacity: "80%" }}
            />
          </IconButton>
        )}

        {reproduciendo && (
          <IconButton onClick={this.pause}>
            <PauseCircleIcon
              sx={{ fontSize: "8rem", color: "#3728b7", opacity: "80%" }}
            />
          </IconButton>
        )}
      </Container>
    </Container>
  );
};