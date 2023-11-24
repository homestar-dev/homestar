export const logEvent = ({ action, params }: { action: any; params: any }) => {
  if (window !== undefined) {
    window.gtag("event", action, params);
  }
};
