import { ConfirmDataUsage, GoogleAnalytics, Navigation } from "@/components";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { ParallaxProvider } from "react-scroll-parallax";

export default function App({ Component, pageProps }: AppProps) {
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
