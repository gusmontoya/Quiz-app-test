import React from "react";
import { useGlobalContext } from "../context";

const QuizForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();
  return (
    <section className="quiz quiz-small">
      <form>
        <h2 style={{ marginBottom: "2rem" }}>Welcome to the trivia app</h2>
        <div className="mb-3">
          <label for="nuOfQuestions" className="form-label">
            Number of Questions
          </label>
          <input
            type="number"
            name="amount"
            className="form-control"
            value={quiz.amount}
            onChange={handleChange}
            min={1}
            max={50}
            style={{ width: "400px" }}
          />
        </div>
        {/* <div className="mb-3">
          <label for="category" className="form-label">Category</label>
          <select
            className="form-select"
            name="category"
            id="category"
            value={quiz.category}
            onChange={handleChange}
          >
            <options value="sports">sports</options>
            <options value="history">history</options>
            <options value="politics">politics</options>
          </select>
        </div>
        <div className="mb-3">
          <label for="difficulty" className="form-label">Difficulty</label>
          <select
            className="form-select"
            name="difficulty"
            id="difficulty"
            value={quiz.difficulty}
            onChange={handleChange}
          >
            <options value="easy">easy</options>
            <options value="medium">medium</options>
            <options value="hard">hard</options>
          </select>
        </div> */}
        {error && (
          <p className="error">
            Can't generate questions, please try other options
          </p>
        )}
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary start-btn"
        >
          Start
        </button>
      </form>
    </section>
  );
};

export default QuizForm;