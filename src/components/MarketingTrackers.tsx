"use client";

import Script from "next/script";

// Marketing pixels / visitor-tracking scripts used by go-to-market.
// All three load with `lazyOnload` so they don't compete with
// hydration for the main thread — none of them gate user flows,
// they only record sessions/identity for sales follow-up.
//
// - Apollo.io   : reverse-IP visitor identification for sales
// - Instantly   : Leadsy.ai visitor tracking pixel
// - Google Tag  : separate component (`@next/third-parties/google`)
//                 in layout.tsx for first-party measurement IDs

const APOLLO_APP_ID = "699f2a0e8d211000197c835e";
const INSTANTLY_PID = "lrmfM3MTsqHJpPng";

const apolloLoader = `
function initApollo(){
  var n = Math.random().toString(36).substring(7);
  var o = document.createElement("script");
  o.src = "https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=" + n;
  o.async = !0;
  o.defer = !0;
  o.onload = function(){
    window.trackingFunctions && window.trackingFunctions.onLoad({ appId: "${APOLLO_APP_ID}" });
  };
  document.head.appendChild(o);
}
initApollo();
`.trim();

export function MarketingTrackers() {
  return (
    <>
      {/* Apollo.io reverse-IP tracker. The provided snippet bootstraps
          its own <script> tag, so we wrap it in next/script to get the
          lazy-load lifecycle. */}
      <Script id="apollo-tracker" strategy="lazyOnload">
        {apolloLoader}
      </Script>

      {/* Instantly / Leadsy.ai visitor tracking. Loaded async + lazy so
          it doesn't impact LCP or hydration timing. */}
      <Script
        id="instantly-vtag"
        src="https://r2.leadsy.ai/tag.js"
        data-pid={INSTANTLY_PID}
        data-version="062024"
        strategy="lazyOnload"
      />
    </>
  );
}
