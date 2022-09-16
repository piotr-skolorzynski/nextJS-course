import { useRef } from 'react';

const HomePage = () => {
  const emailInput = useRef();
  const feedbackInput = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailInput.current.value;
    const enteredFeedback = feedbackInput.current.value;
  };

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmFor='email'>Yor Email Address</label>
          <input id='email' type='email' ref={emailInput} />
        </div>
        <div>
          <label htmFor='feedback'>Yor Feedback</label>
          <textarea id='feedback' rows='5' ref={feedbackInput}></textarea>
        </div>
        <button>Send Feedback</button>
      </form>
    </div>
  );
};

export default HomePage;
