import { buildFeedbackPath, extractFeedback } from '../api/feedback';

const FeedbackPage = ({ feedbackItems }) => {
  return (
    <ul>
      {feedbackItems.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export const getStaticProps = async () => {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);

  return {
    props: {
      feedbackItems: data,
    },
  };
};

export default FeedbackPage;
