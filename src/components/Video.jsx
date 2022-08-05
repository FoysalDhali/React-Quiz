import classes from "../styles/Video.module.css";

export default function Video({ noq, title, ID }) {
  return (
    <div className={classes.video}>
      <img
        src={`https://img.youtube.com/vi/${ID}/maxresdefault.jpg`}
        alt={title}
      />
      <p>{title}</p>
      <div className={classes.qmeta}>
        <p>{noq} Questions</p>
        <p>Total Points : {noq * 5}</p>
      </div>
    </div>
  );
}
