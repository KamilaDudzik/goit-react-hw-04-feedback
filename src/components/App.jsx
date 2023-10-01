import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import { useState } from "react";
 
export const App = () => {

  const[feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  })

  const { good, neutral, bad } = feedback;
  
  const handlerFeedback = option => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }))
  };

  const countTotalFeedback = () => {

    return good + neutral + bad;

  };

  const countPositiveFeedbackPercentage = () => {
    
    if (countTotalFeedback() === 0) return 0;
    return Math.floor((good / countTotalFeedback()) * 100);

  };

  return (

      <Section title={"Please leave feedback"}>

        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={handlerFeedback}
        />

        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}

      </Section>
    );
  }


export default App;