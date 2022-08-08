import { useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { useLocation, useParams } from "react-router-dom";
import classes from "../styles/MiniPlayer.module.css";

export default function MiniPlayer({ title }) {
  const { id } = useParams();
  const buttonRef = useRef();
  const displayRef = useRef();
  const [status, setStatus] = useState(false);
  const [display, setDisplay] =useState('none')
  const {state} = useLocation();


  function toggleMiniPlayer() {
    if (!status) {
      setStatus(true);
      buttonRef.current.classList.remove(classes.floatingBtn);
      setDisplay('block')
    } else {
      setStatus(false);
      buttonRef.current.classList.add(classes.floatingBtn);
      setDisplay('none')
    }
  }

  return (
    <div
      className={`${classes.miniPlayer} ${classes.floatingBtn}`}
      ref={buttonRef}
      onClick={toggleMiniPlayer}
    >
      <span className={`material-icons-outlined ${classes.open}`}>
        {" "}
        play_circle_filled{" "}
      </span>
      <span
        className={`material-icons-outlined ${classes.close}`}
        onClick={toggleMiniPlayer}
      >
        {" "}
        close{" "}
      </span>

      <ReactPlayer
        style={{display: `${display}`}}
        ref={displayRef}
        className={`${classes.player}`}
        url={`https://www.youtube.com/watch?v=${id}`}
        width="300px"
        height="168px"
        playing={status}
        volume={0.1}
        controls
      />

      <p>{state.videoTitle}</p>
    </div>
  );
}
