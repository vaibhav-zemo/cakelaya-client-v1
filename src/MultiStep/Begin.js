import React, { Component } from "react";
import Age from "./Age";
import Gender from "./Gender";
import Success from "./Success";
import OccassionType from "./OccassionType";
import Relation from "./Relation";
import Budget from "./Budget";

export default class Signup extends Component {
  state = {
    step: 1,
    gender: "Male",
    age: "0 - 15",
    occassionType: "Birthday",
    relation: "Family",
    budget: "1 - 2000",
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  handleChange = (input, e) => {
    this.setState({ [input]: e.target.innerHTML });
  };

  render() {
    const { step } = this.state;
    const { gender, age, occassionType, relation, budget } = this.state;
    const values = { gender, age, occassionType, relation, budget };

    switch (step) {
      case 1:
        return (
          <Age
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Gender
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <OccassionType
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <Relation
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return (
          <Budget
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 6:
        return <Success values={values} />;
    }
  }
}
