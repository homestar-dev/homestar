export const logPageView = (url: string) => {
  if (window !== undefined) {
    window.gtag("config", "G-P8PT20C0G5", {
      page_path: url,
    });
  }
};
