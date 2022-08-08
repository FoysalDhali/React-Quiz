import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useAnswer(videoId) {
  const [answer, setAnswer] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAnswer() {
      const db = getDatabase();
      const answerRef = ref(db, "answers/" + videoId + "/questions");
      const answerQuery = query(answerRef, orderByKey());

      try {
        setError(false);
        setLoading(true);

        const snapshot = await get(answerQuery);
        setLoading(false);

        if (snapshot.exists()) {
          setAnswer((prevAnswer) => {
            return [...prevAnswer, ...Object.values(snapshot.val())];
          });
        }
      } catch (err) {
        console.log(err);
        setLoading(false)
        setError(true)
      }
    }

    fetchAnswer();
  }, [videoId]);

  return {
    answer,
    error,
    loading,
  };
}
