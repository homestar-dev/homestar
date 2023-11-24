import ReactGA from "react-ga";

export const pageview = (url: string) => {
  if (window !== undefined) {
    window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
      page_path: url,
    });
  }
};
