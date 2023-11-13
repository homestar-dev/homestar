import ReactGA from "react-ga";

export const logEvent = (category = "", action = "") => {
  if (category && action) {
    ReactGA.event({ category, action });
    console.log(category, action);
  }
};
