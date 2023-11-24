import ReactGA from "react-ga";

export const event = ({ action, params }: { action: any; params: any }) => {
  if (window !== undefined) {
    window.gtag("event", action, params);
  }
};
