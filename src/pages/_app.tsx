import { ConfirmDataUsage, GoogleAnalytics, Navigation } from "@/components";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ParallaxProvider } from "react-scroll-parallax";
import useHotjar from "react-use-hotjar";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { logPageView } from "@/utils";

export default function App({ Component, pageProps }: AppProps) {
  const { initHotjar } = useHotjar();
  const router = useRouter();
  const hotjarHJID = 3704257;
  const hotjarHJSV = 6;

  useEffect(() => {
    initHotjar(hotjarHJID, hotjarHJSV);
  }, [initHotjar]);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      logPageView(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

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
