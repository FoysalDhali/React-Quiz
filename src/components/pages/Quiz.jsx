import { getDatabase, ref, set } from "firebase/database";
import _ from "lodash";
import { useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import useQuestion from "../../hooks/useQuestions";
import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";

const initialState = null;

const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;

    case "answer":
      const questions = _.cloneDeep(state);
      questions[action.questionsId].options[action.optionIndex].checked =
        action.value;

      return questions;

    default:
      return state;
  }
};

export default function Quiz() {
  const { id } = useParams();
  const { question, error, loading } = useQuestion(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [qna, dispatch] = useReducer(reducer, initialState);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({
      type: "questions",
      value: question,
    });
  }, [question]);

  function handleAnswerChange(e, index) {
    dispatch({
      type: "answer",
      questionsId: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  }

  function nextChange() {
    if (currentQuestion + 1 < question.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }
  }
  function prevChange() {
    if (currentQuestion > 0) {
      setCurrentQuestion((prevQuestion) => prevQuestion - 1);
    }
  }

  async function submit() {
    const { uid } = currentUser;

    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}/${[id]}`);
    await set(resultRef, qna);

    navigate({
      pathname: `/result/${id}`,
      state: {
        user: qna,
      },
    });
  }

  const progress =
    question.length > 0 ? ((currentQuestion + 1) / question.length) * 100 : 0;

  return (
    <>
      {loading && <h2>Loading....</h2>}
      {error && <h2>there Was an Error!</h2>}
      {!loading && !error && qna.length > 0 && (
        <>
          <h1>{qna[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answers
            options={qna[currentQuestion].options}
            handleChange={handleAnswerChange}
          />
          <ProgressBar
            nextChange={nextChange}
            prevChange={prevChange}
            submit={submit}
            progress={progress}
          />
          <MiniPlayer />
        </>
      )}
    </>
  );
}
