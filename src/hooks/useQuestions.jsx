import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useQuestion(videoId) {
  const [question, setQuestion] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchQuestion() {
      const db = getDatabase();
      const QuizRef = ref(db, "quiz/" + videoId + "/questions");
      const QuestionQuery = query(QuizRef, orderByKey());

      try {
        setError(false);
        setLoading(true);

        const snapshot = await get(QuestionQuery);
        setLoading(false);

        if (snapshot.exists()) {
          setQuestion((prevQuestion) => {
            return [...prevQuestion, ...Object.values(snapshot.val())];
          });
        }
      } catch (err) {
        console.log(err);
        setLoading(false)
        setError(true)
      }
    }

    fetchQuestion();
  }, [videoId]);

  return {
    question,
    error,
    loading,
  };
}
