import { FormSuccess } from "@/components";
import Script from "next/script";
import React from "react";

export default function ContactSuccess() {
  return (
    <>
      <Script id="google-conversion" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {
            'send_to': 'AW-11268532703',
            'value': 1.0,
            'currency': 'USD'
          });
        `}
      </Script>
      <FormSuccess />
    </>
  );
}
