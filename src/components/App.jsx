import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import { Component } from "react";

// export const App = () => {
//   return (
//     // <div
//     //   style={{
//     //     height: '100vh',
//     //     display: 'flex',
//     //     justifyContent: 'center',
//     //     alignItems: 'center',
//     //     fontSize: 40,
//     //     color: '#010101'
//     //   }}
//     // >

//       <Section title="Please leave feedback">
//         <Statistics>
//           good={this.good}
//           neutral={this.neutral}
//           bad={this.bad}
//         </Statistics>
//       </Section>
//     // </div>
//   );
// };
 
export class App extends Component {
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {

    return this.state.good + this.state.neutral + this.state.bad;

  };

  countPositiveFeedbackPercentage = () => {

    if (this.countTotalFeedback() === 0) return 0;
    return Math.floor((this.state.good / this.countTotalFeedback()) * 100);

  };

  changeState = name => {

    this.setState(prevState => ({
      [name]: prevState[name] + 1,

    }));
  };

  render() {
    return (

      <Section title={"Please leave feedback"}>

        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.changeState}
        />

        {this.countTotalFeedback() ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}

      </Section>

    );
  }
}

export default App;