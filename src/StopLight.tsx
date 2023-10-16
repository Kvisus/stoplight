import { useEffect, useState } from "react";

type StopLightState = "red" | "yellow" | "go";

const StopLight = ({ initialState }: { initialState?: StopLightState }) => {
  const [state, setState] = useState<StopLightState>(initialState ?? "red");

  function getStoplightClass(light: StopLightState) {
    return `light ${light} ` + (state === light ? "on" : "");
  }

  useEffect(() => {
    if (state === "red") {
      setTimeout(() => setState("go"), 3000);
    } else if (state === "yellow") {
      setTimeout(() => setState("red"), 2000);
    } else {
      //go
      setTimeout(() => setState("yellow"), 1000);
    }
  }, [state]);

  return (
    <div className="stop-light">
      <div className={getStoplightClass("red")}></div>
      <div className={getStoplightClass("yellow")}></div>
      <div className={getStoplightClass("go")}></div>
    </div>
  );
};
export default StopLight;
