import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
// import { Component } from "react";
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

    // return this.state.good + this.state.neutral + this.state.bad;
    return good + neutral + bad;

  };

  const countPositiveFeedbackPercentage = () => {

    // if (this.countTotalFeedback() === 0) return 0;
    // return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
        if (countTotalFeedback() === 0) return 0;
    return Math.floor((good / countTotalFeedback()) * 100);

  };

  // changeState = name => {

  //   this.setState(prevState => ({
  //     [name]: prevState[name] + 1,

  //   }));
  // };

  // render() {
    // return (

    //   <Section title={"Please leave feedback"}>

    //     <FeedbackOptions
    //       options={Object.keys(feedback)}
    //       onLeaveFeedback={this.changeState}
    //     />

    //     {this.countTotalFeedback() ? (
    //       <Statistics
    //         good={this.state.good}
    //         neutral={this.state.neutral}
    //         bad={this.state.bad}
    //         total={this.countTotalFeedback()}
    //         positivePercentage={this.countPositiveFeedbackPercentage()}
    //       />
    //     ) : (
    //       <Notification message="There is no feedback" />
    //     )}

//   </Section>
  
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
// }

export default App;