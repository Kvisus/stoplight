import "./App.css";
import StopLight from "./StopLight";

const App = () => {
  return (
    <div className="wrapper">
      <StopLight initialState="go" />
      <StopLight />
      <StopLight />
    </div>
  );
};
export default App;
