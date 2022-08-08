import classes from "../styles/Question.module.css";
import Answers from "./Answers";

export default function Question({ answers = [] }) {
  return answers.map((qns, index) => (
    <div className={classes.question} key={index}>
      <div className={classes.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        {qns.title}
      </div>
      <Answers options={qns.options} input={false} />
    </div>
  ));
}