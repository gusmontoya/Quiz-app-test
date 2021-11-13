import React from 'react';
import QuizForm from "./components/QuizForm";
import Loading from "./components/Loading";
import Modal from "./components/Modal";
import { useGlobalContext } from "./context";

const App = () => {
  const {
    waiting,
    loading,
    questions,
    index,
    correct,
    nextQuestion,
    checkAnswer
  } = useGlobalContext();

  if (waiting) {
    return <QuizForm />;
  }

  if (loading) {
    return <Loading />;
  }
  // console.log("questions", questions);
  // logic for checking if user response is correct
  const {question, incorrect_answers, correct_answer} = questions[index];
  let answers = [...incorrect_answers];
  const tempIndex = Math.floor(Math.random() * 4);
  if (tempIndex === 3) {
    answers.push(correct_answer);
  } else {
    answers.push(answers[tempIndex]);
    answers[tempIndex] = correct_answer;
  }
  return (
    <main>
      <Modal />
      <section className="quiz">
        <p>
          Correct Answer: {correct}/{index}
        </p>
        <article className="container">
          <h2 dangerouslySetInnerHTML={{__html: question}} />
          <div>
            {answers.map((answer, index) => {
              return (
                <>
                <button
                key={index}
                style={{ width: "60%", textAlign: "center"}}
                className="btn btn-info answer-btn"
                onClick={() => checkAnswer(correct_answer === answer)}
                dangerouslySetInnerHTML={{__html: answer}}
                />
                </>
              );
            })}
          </div>
        </article>
        <p>questions remaining</p>
        <button 
          className="btn btn-warning next-question" 
          style={{ width: "20%", marginRight: "1rem" }}
          onClick={nextQuestion}
        >
          NConfirm Answer
        </button>
      </section>
    </main>
  );
};

export default App;
