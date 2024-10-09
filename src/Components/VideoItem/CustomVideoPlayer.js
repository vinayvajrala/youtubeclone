import ReactPlayer from "react-player";
import { PlayerWrapper } from "./styledcomponent";
import { useRef, useState } from "react";
import { Slider } from "@mui/material";

const CustomVideoPlayer = ({ videoUrl }) => {
  const [playing, setPlaying] = useState(false);
  const [played, setPlayed] = useState(0);
  const playerRef = useRef(null);

  const handleProgress = (progress) => {
    setPlayed(progress.played);
  };

  const handleSeekChange = (e, newValue) => {
    setPlayed(newValue / 100);
    playerRef.current.seekTo(newValue / 100);
  };

  const handleMouseLeave = () => {
    setPlaying(false);
    playerRef.current.seekTo(0); // Reset video to the beginning
  };

  return (
    <PlayerWrapper
      style={{
        borderRadius: "10px",
        overflow: "hidden",
        cursor: "pointer",
        position: "relative",
      }}
      onMouseEnter={() => setPlaying(true)}
      onMouseLeave={handleMouseLeave}
    >
      <ReactPlayer
        ref={playerRef}
        className="react-player-styling"
        height="100%"
        width="100%"
        url={videoUrl}
        controls={false}
        playing={playing}
        muted={true}
        onProgress={handleProgress}
        config={{
          youtube: {
            playerVars: {
              modestbranding: 0,
              showinfo: 0,
              controls: 0,
              rel: 0,
              disablekb: 1,
              iv_load_policy: 3,
              fs: 0,
              autoplay: 0,
            },
          },
        }}
        // onReady={(player) =>
        //   (player.getInternalPlayer().style.pointerEvents = "none")
        // }
        style={{ pointerEvents: "none" }}
      />
      <div style={{ position: "absolute", bottom: -17, width: "100%" }}>
        <Slider
          value={played * 100}
          onChange={handleSeekChange}
          aria-labelledby="continuous-slider"
          sx={{
            color: "rgb(247, 168, 168)",
            "& .MuiSlider-thumb": {
              display: "none", // Hide the slider thumb
            },
            "& .MuiSlider-track": {
              height: "3px",
              color: "red", // Customize the track height
            },
            "& .MuiSlider-rail": {
              height: "3px", // Customize the rail height
            },
          }}
        />
      </div>
    </PlayerWrapper>
  );
};

export default CustomVideoPlayer;
