import { useRef } from 'react';
import classes from './newsletter-registration.module.css';

const NewsletterRegistration = () => {
  const emailInputRef = useRef();

  const registrationHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;

    fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        'Content-type': 'application/json',
      },
    });
  };

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            ref={emailInputRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
};

export default NewsletterRegistration;
