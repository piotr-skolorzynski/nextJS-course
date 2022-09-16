import { useRef } from 'react';

const HomePage = () => {
  const emailInput = useRef();
  const feedbackInput = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailInput.current.value;
    const enteredFeedback = feedbackInput.current.value;

    const reqBody = { email: enteredEmail, text: enteredFeedback };

    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor='email'>Yor Email Address</label>
          <input id='email' type='email' ref={emailInput} />
        </div>
        <div>
          <label htmlFor='feedback'>Yor Feedback</label>
          <textarea id='feedback' rows='5' ref={feedbackInput}></textarea>
        </div>
        <button>Send Feedback</button>
      </form>
    </div>
  );
};

export default HomePage;
