import { ConfirmDataUsage, GoogleAnalytics, Navigation } from "@/components";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ParallaxProvider } from "react-scroll-parallax";
import { hotjar } from "react-hotjar";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const hotjarHJID = 3704257;
  const hotjarHJSV = 6;

  useEffect(() => {
    hotjar.initialize(hotjarHJID, hotjarHJSV);
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
