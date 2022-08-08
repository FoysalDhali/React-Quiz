import classes from "../styles/Analysis.module.css";
import Question from "./Question";


export default function Analysis({answers, count}) {
  console.log(answers)
  return (
    <div className={classes.analysis}>
      <h1>Question Analysis</h1>
      <h4>You answered {count} out of {answers.length} questions correctly</h4>
      <Question answers={answers} />
    </div>
  );
}
