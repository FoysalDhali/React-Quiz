import _ from "lodash";
import { useLocation, useParams } from "react-router-dom";
import useAnswer from "../../hooks/useAnswer";
import Analysis from "../Analysis";
import Summary from "../Summary";

export default function Result() {
  const { id } = useParams();
  const { state } = useLocation();
  const { qna } = state;
  const { answer, error, loading } = useAnswer(id);

  function calculator() {
    let score = 0;
    let count = 0;

    answer.forEach((question, index1) => {
      const correctIndex = [];
      const checkedIndex = [];

      question.options.forEach((option, index2) => {
        if (option.correct) correctIndex.push(index2);
        if (qna[index1].options[index2].checked) {
          checkedIndex.push(index2);
          option.checked = true;
        }
      });

      if (_.isEqual(correctIndex, checkedIndex)) {
        score = score + 5;
        count = count + 1;
      }
    });
    return  {
      score,
      count,
    };
  }

  const {score, count} = calculator()

  return (
    <>
      {loading && <h2>Loading....</h2>}
      {error && <h2>There Was an Error!</h2>}
      {answer && answer.length > 0 && (
        <>
          <Summary score={score} noq={answer.length * 5} />
          <Analysis answers={answer} count={count} />
        </>
      )}
    </>
  );
}
