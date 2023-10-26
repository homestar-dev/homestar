import { ConfirmDataUsage, GoogleAnalytics, Navigation } from "@/components";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { hotjar } from "react-hotjar";
import { ParallaxProvider } from "react-scroll-parallax";

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
