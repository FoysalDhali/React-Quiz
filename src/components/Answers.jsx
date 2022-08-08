import { Fragment } from "react";
import classes from "../styles/Answer.module.css";
import Checkbox from "./Checkbox";

export default function Answers({ options = [], handleChange, input }) {
  return (
    <div className={classes.answers}>
      {options.map((option, index) => (
        <Fragment key={index}>
          {input ? (
            <Checkbox
              className={classes.answer}
              checked={option.checked}
              text={option.title}
              onChange={(e) => handleChange(e, index)}
            />
          ) : (
            <Checkbox
              className={`${classes.answer} ${option.correct ? classes.correct : option.checked ? classes.wrong : null} `}
              defaultChecked={option.checked}
              text={option.title}
              disabled          />
          )}
        </Fragment>
      ))}
    </div>
  );
}
