import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { Container } from './App.styled';

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onClickButton = value => {
    setState(prevState => ({
      ...prevState,
      [value.toLowerCase()]: prevState[value.toLowerCase()] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return state.good + state.neutral + state.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? Math.round((state.good / total) * 100) : 0;
  };

  return (
    <Container>
      <Section title="Leave your feedback">
        <FeedbackOptions options={state} onClickButton={onClickButton} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            stats={state}
            total={countTotalFeedback()}
            positive={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </Container>
  );
};
