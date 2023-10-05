import Script from "next/script";

interface IGoogleAnalyticsProps {
  googleAnalyticsId: string;
}

export const GoogleAnalytics: React.FC<IGoogleAnalyticsProps> = ({
  googleAnalyticsId,
}) => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', "${googleAnalyticsId}");
				`}
      </Script>
    </>
  );
};
