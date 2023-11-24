interface Window {
  GA_INITIALIZED: boolean;
  gtag: (key: string, ...params: any[]) => void;
}
