import { ConfirmDataUsage, GoogleAnalytics, Navigation } from "@/components";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ParallaxProvider } from "react-scroll-parallax";
import useHotjar from "react-use-hotjar";
import { useEffect } from "react";
import { initGA } from "../utils";

export default function App({ Component, pageProps }: AppProps) {
  const { initHotjar } = useHotjar();

  const hotjarHJID = 3704257;
  const hotjarHJSV = 6;

  useEffect(() => {
    initHotjar(hotjarHJID, hotjarHJSV);
  }, [initHotjar]);

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
  }, []);

  return (
    <>
      <GoogleAnalytics googleAnalyticsId="G-P8PT20C0G5" />
      <ConfirmDataUsage>
        <Navigation>
          <ParallaxProvider>
            <Component {...pageProps} />
          </ParallaxProvider>
        </Navigation>
      </ConfirmDataUsage>
    </>
  );
}
