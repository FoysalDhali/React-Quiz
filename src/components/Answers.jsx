import classes from "../styles/Answer.module.css";
import Checkbox from "./Checkbox";

export default function Answers({ options = [], handleChange }) {
  return (
    <div className={classes.answers}>
      {options.map((option, index) => (
        <Checkbox
          key={index}
          className={classes.answer}
          checked={option.checked}
          text={option.title}
          onChange={(e) => handleChange(e, index)}
        />
      ))}
    </div>
  );
}
