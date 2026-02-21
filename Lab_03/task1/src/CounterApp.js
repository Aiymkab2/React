import react from "react";
import StepCounter from "./StepCounter";

const CounterApp = () => {
    return (
    <div>
      <h1>Counter App</h1>
      <StepCounter initialValue={0} step={1} />
      <StepCounter initialValue={1} step={5} />
    </div>
    );
};

export default CounterApp;