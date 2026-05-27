"use client"
// http-url:https://framerusercontent.com/modules/h6LrbUlZWU7BH0QeL8JG/OlBLGjH1aZzKSk0jBaf8/MYLHWEDkN.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, getFontsFromSharedStyle, RichText, SVG, useActiveVariantCallback, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "@proofly-framer/runtime";
import { LayoutGroup, motion, MotionConfigContext } from "@proofly-framer/runtime";
import * as React from "react";
import { useRef } from "react";

// Extracted SVG assets
const __svg_1 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 64 1\" overflow=\"visible\"><path d=\"M 0 0 L 64 0\" fill=\"transparent\" stroke-width=\"2\" stroke=\"var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62)) /* {&quot;name&quot;:&quot;SERVICE&quot;} */\"></path></svg>";
const __svg_2 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 64 1\" overflow=\"visible\"><path d=\"M 0 0 L 64 0\" fill=\"transparent\" stroke-width=\"2\" stroke=\"var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62)) /* {&quot;name&quot;:&quot;SERVICE&quot;} */\"></path></svg>";
const __svg_3 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 64 1\" overflow=\"visible\"><path d=\"M 0 0 L 64 0\" fill=\"transparent\" stroke-width=\"2\" stroke=\"var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62)) /* {&quot;name&quot;:&quot;SERVICE&quot;} */\"></path></svg>";
const __svg_4 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 64 1\" overflow=\"visible\"><path d=\"M 0 0 L 64 0\" fill=\"transparent\" stroke-width=\"2\" stroke=\"var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62)) /* {&quot;name&quot;:&quot;SERVICE&quot;} */\"></path></svg>";
const __svg_5 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 64 1\" overflow=\"visible\"><path d=\"M 0 0 L 64 0\" fill=\"transparent\" stroke-width=\"2\" stroke=\"var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62)) /* {&quot;name&quot;:&quot;SERVICE&quot;} */\"></path></svg>";
const __svg_6 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 64 1\" overflow=\"visible\"><path d=\"M 0 0 L 64 0\" fill=\"transparent\" stroke-width=\"2\" stroke=\"var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62)) /* {&quot;name&quot;:&quot;SERVICE&quot;} */\"></path></svg>";
const __svg_7 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 64 1\" overflow=\"visible\"><path d=\"M 0 0 L 64 0\" fill=\"transparent\" stroke-width=\"2\" stroke=\"var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62)) /* {&quot;name&quot;:&quot;SERVICE&quot;} */\"></path></svg>";
const __svg_8 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 64 1\" overflow=\"visible\"><path d=\"M 0 0 L 64 0\" fill=\"transparent\" stroke-width=\"2\" stroke=\"var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62)) /* {&quot;name&quot;:&quot;SERVICE&quot;} */\"></path></svg>";


// http-url:https://framerusercontent.com/modules/qy8eVo5TXcYP2TWH72Db/lnFwfHBmEXS5R0BdeKYE/ferGDeq75.js
import { fontStore } from "@proofly-framer/runtime";
fontStore.loadFonts(["CUSTOM;Haffer Regular", "CUSTOM;Haffer Bold", "CUSTOM;Haffer Bold Italic", "CUSTOM;Haffer Regular Italic"]);
var fonts = [{
  explicitInter: true,
  fonts: [{
    cssFamilyName: "Haffer Regular",
    source: "custom",
    style: "normal",
    uiFamilyName: "Haffer",
    url: "https://framerusercontent.com/assets/tAGQcvN09kwW2QjPLqLO197UqBQ.woff",
    weight: "430"
  }, {
    cssFamilyName: "Haffer Bold",
    source: "custom",
    style: "normal",
    uiFamilyName: "Haffer",
    url: "https://framerusercontent.com/assets/eRqmC6W9PktN8mUcnwel9B6wmPs.woff",
    weight: "790"
  }, {
    cssFamilyName: "Haffer Bold Italic",
    source: "custom",
    style: "italic",
    uiFamilyName: "Haffer",
    url: "https://framerusercontent.com/assets/nK8pUfSDH0nLIPBzC7czJktTfw.woff",
    weight: "790"
  }, {
    cssFamilyName: "Haffer Regular Italic",
    source: "custom",
    style: "italic",
    uiFamilyName: "Haffer",
    url: "https://framerusercontent.com/assets/q5d4DOSHctGYpqDsNH3ul4OVKic.woff",
    weight: "430"
  }]
}];
var css = ['.framer-z9vLR .framer-styles-preset-k8yxrn:not(.rich-text-wrapper), .framer-z9vLR .framer-styles-preset-k8yxrn.rich-text-wrapper p { --framer-font-family: "Haffer Regular", sans-serif; --framer-font-family-bold: "Haffer Bold", sans-serif; --framer-font-family-bold-italic: "Haffer Bold Italic", sans-serif; --framer-font-family-italic: "Haffer Regular Italic", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 430; --framer-font-weight-bold: 790; --framer-font-weight-bold-italic: 790; --framer-font-weight-italic: 430; --framer-letter-spacing: 0em; --framer-line-height: 130%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #eaeaeb; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; }', '@media (max-width: 1199px) and (min-width: 724px) { .framer-z9vLR .framer-styles-preset-k8yxrn:not(.rich-text-wrapper), .framer-z9vLR .framer-styles-preset-k8yxrn.rich-text-wrapper p { --framer-font-family: "Haffer Regular", sans-serif; --framer-font-family-bold: "Haffer Bold", sans-serif; --framer-font-family-bold-italic: "Haffer Bold Italic", sans-serif; --framer-font-family-italic: "Haffer Regular Italic", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 430; --framer-font-weight-bold: 790; --framer-font-weight-bold-italic: 790; --framer-font-weight-italic: 430; --framer-letter-spacing: 0em; --framer-line-height: 130%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #eaeaeb; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }', '@media (max-width: 723px) and (min-width: 0px) { .framer-z9vLR .framer-styles-preset-k8yxrn:not(.rich-text-wrapper), .framer-z9vLR .framer-styles-preset-k8yxrn.rich-text-wrapper p { --framer-font-family: "Haffer Regular", sans-serif; --framer-font-family-bold: "Haffer Bold", sans-serif; --framer-font-family-bold-italic: "Haffer Bold Italic", sans-serif; --framer-font-family-italic: "Haffer Regular Italic", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 430; --framer-font-weight-bold: 790; --framer-font-weight-bold-italic: 790; --framer-font-weight-italic: 430; --framer-letter-spacing: 0em; --framer-line-height: 130%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #eaeaeb; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }'];
var className = "framer-z9vLR";

// http-url:https://framerusercontent.com/modules/4JCyuHashtk9IL0HTPhp/LDRc1yhCjjQjJOdy0Jhw/oXuB5yYcU.js
import { fontStore as fontStore2 } from "@proofly-framer/runtime";
import { jsx as _ctxJsx } from "react/jsx-runtime";
import { ContextProviders, useVariant } from "@proofly-framer/runtime";
fontStore2.loadFonts(["CUSTOM;Haffer Bold", "Inter-Black", "Inter-BlackItalic", "Inter-BoldItalic"]);
var fonts2 = [{
  explicitInter: true,
  fonts: [{
    family: "Haffer Bold",
    source: "custom",
    url: "https://framerusercontent.com/assets/eRqmC6W9PktN8mUcnwel9B6wmPs.woff"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
    url: "https://framerusercontent.com/assets/mkY5Sgyq51ik0AMrSBwhm9DJg.woff2",
    weight: "900"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
    url: "https://framerusercontent.com/assets/X5hj6qzcHUYv7h1390c8Rhm6550.woff2",
    weight: "900"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+1F00-1FFF",
    url: "https://framerusercontent.com/assets/gQhNpS3tN86g8RcVKYUUaKt2oMQ.woff2",
    weight: "900"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0370-03FF",
    url: "https://framerusercontent.com/assets/cugnVhSraaRyANCaUtI5FV17wk.woff2",
    weight: "900"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
    url: "https://framerusercontent.com/assets/5HcVoGak8k5agFJSaKa4floXVu0.woff2",
    weight: "900"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    url: "https://framerusercontent.com/assets/jn4BtSPLlS0NDp1KiFAtFKiiY0o.woff2",
    weight: "900"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
    url: "https://framerusercontent.com/assets/P2Bw01CtL0b9wqygO0sSVogWbo.woff2",
    weight: "900"
  }, {
    family: "Inter",
    source: "framer",
    style: "italic",
    unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
    url: "https://framerusercontent.com/assets/05KsVHGDmqXSBXM4yRZ65P8i0s.woff2",
    weight: "900"
  }, {
    family: "Inter",
    source: "framer",
    style: "italic",
    unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
    url: "https://framerusercontent.com/assets/ky8ovPukK4dJ1Pxq74qGhOqCYI.woff2",
    weight: "900"
  }, {
    family: "Inter",
    source: "framer",
    style: "italic",
    unicodeRange: "U+1F00-1FFF",
    url: "https://framerusercontent.com/assets/vvNSqIj42qeQ2bvCRBIWKHscrc.woff2",
    weight: "900"
  }, {
    family: "Inter",
    source: "framer",
    style: "italic",
    unicodeRange: "U+0370-03FF",
    url: "https://framerusercontent.com/assets/3ZmXbBKToJifDV9gwcifVd1tEY.woff2",
    weight: "900"
  }, {
    family: "Inter",
    source: "framer",
    style: "italic",
    unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
    url: "https://framerusercontent.com/assets/FNfhX3dt4ChuLJq2PwdlxHO7PU.woff2",
    weight: "900"
  }, {
    family: "Inter",
    source: "framer",
    style: "italic",
    unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    url: "https://framerusercontent.com/assets/g0c8vEViiXNlKAgI4Ymmk3Ig.woff2",
    weight: "900"
  }, {
    family: "Inter",
    source: "framer",
    style: "italic",
    unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
    url: "https://framerusercontent.com/assets/efTfQcBJ53kM2pB1hezSZ3RDUFs.woff2",
    weight: "900"
  }, {
    family: "Inter",
    source: "framer",
    style: "italic",
    unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
    url: "https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2",
    weight: "700"
  }, {
    family: "Inter",
    source: "framer",
    style: "italic",
    unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
    url: "https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2",
    weight: "700"
  }, {
    family: "Inter",
    source: "framer",
    style: "italic",
    unicodeRange: "U+1F00-1FFF",
    url: "https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2",
    weight: "700"
  }, {
    family: "Inter",
    source: "framer",
    style: "italic",
    unicodeRange: "U+0370-03FF",
    url: "https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2",
    weight: "700"
  }, {
    family: "Inter",
    source: "framer",
    style: "italic",
    unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
    url: "https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2",
    weight: "700"
  }, {
    family: "Inter",
    source: "framer",
    style: "italic",
    unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    url: "https://framerusercontent.com/assets/QxmhnWTzLtyjIiZcfaLIJ8EFBXU.woff2",
    weight: "700"
  }, {
    family: "Inter",
    source: "framer",
    style: "italic",
    unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
    url: "https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2",
    weight: "700"
  }]
}];
var css2 = ['.framer-xLpMg .framer-styles-preset-1vvwmrq:not(.rich-text-wrapper), .framer-xLpMg .framer-styles-preset-1vvwmrq.rich-text-wrapper h5 { --framer-font-family: "Haffer Bold", "Haffer Bold Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: 0em; --framer-line-height: 100%; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-2ae4d622-3758-4fad-a56d-08fa00cc7638, #adadc7); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }', '@media (max-width: 1199px) and (min-width: 810px) { .framer-xLpMg .framer-styles-preset-1vvwmrq:not(.rich-text-wrapper), .framer-xLpMg .framer-styles-preset-1vvwmrq.rich-text-wrapper h5 { --framer-font-family: "Haffer Bold", "Haffer Bold Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: 0em; --framer-line-height: 100%; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-2ae4d622-3758-4fad-a56d-08fa00cc7638, #adadc7); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }', '@media (max-width: 809px) and (min-width: 0px) { .framer-xLpMg .framer-styles-preset-1vvwmrq:not(.rich-text-wrapper), .framer-xLpMg .framer-styles-preset-1vvwmrq.rich-text-wrapper h5 { --framer-font-family: "Haffer Bold", "Haffer Bold Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 17px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: 0em; --framer-line-height: 100%; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-2ae4d622-3758-4fad-a56d-08fa00cc7638, #adadc7); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }'];
var className2 = "framer-xLpMg";

// http-url:https://framerusercontent.com/modules/h6LrbUlZWU7BH0QeL8JG/OlBLGjH1aZzKSk0jBaf8/MYLHWEDkN.js
var cycleOrder = ["SE6Gqpb1T", "mkKW73nyz", "sCMAmqvTy", "NMRpnvN4r", "OdGxk_fVc", "GSX0B4Lq2", "hRlTfHjnb", "oi8OElEEz", "Bst45q6cg"];
var serializationHash = "framer-u2Enb";
var variantClassNames = {
  Bst45q6cg: "framer-v-6m9lhk",
  GSX0B4Lq2: "framer-v-jrtvf",
  hRlTfHjnb: "framer-v-mktdb2",
  mkKW73nyz: "framer-v-1m1tmk5",
  NMRpnvN4r: "framer-v-gpqje",
  OdGxk_fVc: "framer-v-shag1s",
  oi8OElEEz: "framer-v-1k91uan",
  sCMAmqvTy: "framer-v-198hoi8",
  SE6Gqpb1T: "framer-v-757twx"
};
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach(variant => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = {
  delay: 0,
  duration: 0.8,
  ease: [0.44, 0, 0.56, 1],
  type: "tween"
};
var Transition = ({
  value,
  children
}) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({
    ...config,
    transition
  }), [JSON.stringify(transition)]);
  return <MotionConfigContext.Provider value={contextValue}>{children}</MotionConfigContext.Provider>;
};
var Variants = motion.create(React.Fragment);
var humanReadableVariantMap = {
  "Variant 1": "SE6Gqpb1T",
  "Variant 2": "mkKW73nyz",
  "Variant 3": "sCMAmqvTy",
  "Variant 4": "NMRpnvN4r",
  "Variant 5": "OdGxk_fVc",
  "Variant 6": "GSX0B4Lq2",
  "Variant 7": "hRlTfHjnb",
  "Variant 8": "oi8OElEEz",
  PHONE: "Bst45q6cg"
};
var getProps = ({
  height,
  id,
  width,
  ...props
}) => {
  return {
    ...props,
    variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "SE6Gqpb1T"
  };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = React.forwardRef(function (props, ref) {
  const fallbackRef = useRef(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React.useId();
  const {
    activeLocale,
    setLocale
  } = useLocaleInfo();
  const componentViewport = useComponentViewport();
  const {
    style,
    className: className3,
    layoutId,
    variant,
    ...restProps
  } = getProps(props);
  const {
    baseVariant,
    classNames,
    clearLoadingGesture,
    gestureHandlers,
    gestureVariant,
    isLoading,
    setGestureState,
    setVariant,
    variants
  } = useVariantState({
    cycleOrder,
    defaultVariant: "SE6Gqpb1T",
    ref: refBinding,
    variant,
    variantClassNames
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const {
    activeVariantCallback,
    delay
  } = useActiveVariantCallback(baseVariant);
  const onTap3c3q34 = activeVariantCallback(async (...args) => {
    setVariant("SE6Gqpb1T");
  });
  const onTapa4ixpe = activeVariantCallback(async (...args) => {
    setVariant("mkKW73nyz");
  });
  const onTap7c7mf7 = activeVariantCallback(async (...args) => {
    setVariant("sCMAmqvTy");
  });
  const onTap1b8pacs = activeVariantCallback(async (...args) => {
    setVariant("NMRpnvN4r");
  });
  const onTap66r3bx = activeVariantCallback(async (...args) => {
    setVariant("OdGxk_fVc");
  });
  const onTap1h69r2g = activeVariantCallback(async (...args) => {
    setVariant("GSX0B4Lq2");
  });
  const onTapwoptiq = activeVariantCallback(async (...args) => {
    setVariant("hRlTfHjnb");
  });
  const onTapaj59xw = activeVariantCallback(async (...args) => {
    setVariant("oi8OElEEz");
  });
  const sharedStyleClassNames = [className2, className];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  const isDisplayed = () => {
    if (baseVariant === "Bst45q6cg") return false;
    return true;
  };
  const isDisplayed1 = () => {
    if (baseVariant === "Bst45q6cg") return true;
    return false;
  };
  return <LayoutGroup id={layoutId ?? defaultLayoutId}>{<Variants animate={variants} initial={false}>{<Transition value={transition1}>{_jsxs(motion.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx(scopingClassNames, "framer-757twx", className3, classNames),
          "data-framer-name": "Variant 1",
          layoutDependency,
          layoutId: "SE6Gqpb1T",
          ref: refBinding,
          style: {
            ...style
          },
          ...addPropertyOverrides({
            Bst45q6cg: {
              "data-framer-name": "PHONE"
            },
            GSX0B4Lq2: {
              "data-framer-name": "Variant 6"
            },
            hRlTfHjnb: {
              "data-framer-name": "Variant 7"
            },
            mkKW73nyz: {
              "data-framer-name": "Variant 2"
            },
            NMRpnvN4r: {
              "data-framer-name": "Variant 4"
            },
            OdGxk_fVc: {
              "data-framer-name": "Variant 5"
            },
            oi8OElEEz: {
              "data-framer-name": "Variant 8"
            },
            sCMAmqvTy: {
              "data-framer-name": "Variant 3"
            }
          }, baseVariant, gestureVariant),
          children: [isDisplayed() && _jsx(motion.div, {
            className: "framer-jaq348",
            layoutDependency,
            layoutId: "cDD_dcAPw",
            style: {
              background: "linear-gradient(90deg, rgba(245, 245, 247, 0) 0%, var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)) 80%)"
            }
          }), isDisplayed() && _jsx(motion.div, {
            className: "framer-1ehx98j",
            layoutDependency,
            layoutId: "hlyTk0azm",
            style: {
              background: "linear-gradient(90deg, var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)) 28.000000000000004%, rgba(245, 245, 247, 0) 100%)"
            }
          }), _jsxs(motion.div, {
            className: "framer-1sh6x3l",
            layoutDependency,
            layoutId: "AxmhNSqHf",
            children: [_jsxs(motion.div, {
              className: "framer-1m3o99",
              "data-framer-name": "1",
              layoutDependency,
              layoutId: "SlZKJ5RCy",
              style: {
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15
              },
              children: [_jsx(motion.div, {
                className: "framer-1pusak2",
                "data-border": true,
                "data-framer-name": "border",
                layoutDependency,
                layoutId: "SlZKJ5RCyStf358ngw",
                style: {
                  "--border-bottom-width": "2px",
                  "--border-color": "var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62))",
                  "--border-left-width": "2px",
                  "--border-right-width": "2px",
                  "--border-style": "solid",
                  "--border-top-width": "2px",
                  borderBottomLeftRadius: 14,
                  borderBottomRightRadius: 14,
                  borderTopLeftRadius: 14,
                  borderTopRightRadius: 14
                },
                children: _jsxs(motion.div, {
                  className: "framer-efntq8",
                  layoutDependency,
                  layoutId: "SlZKJ5RCyzTLL_g3_bm1AD_bi0H",
                  style: {
                    backgroundColor: "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))",
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    boxShadow: "0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06)"
                  },
                  children: [<RichText __fromCanvasComponent className="framer-tc3i7o" data-framer-name="h" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="c1uaINrp5" style={{
                    "--extracted-1lwpl3i": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
                  }} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.h5, {
                        className: "framer-styles-preset-1vvwmrq",
                        "data-styles-preset": "oXuB5yYcU",
                        style: {
                          "--framer-text-alignment": "left",
                          "--framer-text-color": "var(--extracted-1lwpl3i, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                        },
                        children: "Core Capabilities"
                      })}</>}</RichText>, <RichText __fromCanvasComponent className="framer-1uzkq4z" data-framer-name="text" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="ODdgzIO31" style={{
                    "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
                  }} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.p, {
                        className: "framer-styles-preset-k8yxrn",
                        "data-styles-preset": "ferGDeq75",
                        style: {
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                        },
                        children: "Review of services offered (e.g., warehousing, delivery, assembly) and alignment with Bloom categories."
                      })}</>}</RichText>]
                })
              }), <RichText __fromCanvasComponent className="framer-kmv4vn" data-framer-name="h" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="lwRcaSzM9" style={{
                "--extracted-1eung3n": "var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62))"
              }} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.h4, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-font-size": "30px",
                      "--framer-line-height": "100%",
                      "--framer-text-color": "var(--extracted-1eung3n, var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62)))"
                    },
                    children: "1"
                  })}</>}</RichText>]
            }), _jsx(motion.div, {
              className: "framer-5zwiw4",
              "data-framer-name": "LINE",
              layoutDependency,
              layoutId: "bP5Eut2td",
              children: <SVG className="framer-xzv0ld" layoutDependency={layoutDependency} layoutId="K64eqb8FN" opacity={1} requiresOverflowVisible svg={__svg_1} withExternalLayout />
            }), _jsxs(motion.div, {
              className: "framer-g9j4hb",
              "data-framer-name": "2",
              layoutDependency,
              layoutId: "bntJmB2kD",
              style: {
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15
              },
              children: [_jsx(motion.div, {
                className: "framer-5pgx6w",
                "data-border": true,
                "data-framer-name": "border",
                layoutDependency,
                layoutId: "KUdoxSgQw",
                style: {
                  "--border-bottom-width": "2px",
                  "--border-color": "var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62))",
                  "--border-left-width": "2px",
                  "--border-right-width": "2px",
                  "--border-style": "solid",
                  "--border-top-width": "2px",
                  borderBottomLeftRadius: 14,
                  borderBottomRightRadius: 14,
                  borderTopLeftRadius: 14,
                  borderTopRightRadius: 14
                },
                children: _jsxs(motion.div, {
                  className: "framer-d5z5zp",
                  layoutDependency,
                  layoutId: "JhRyQqFCV",
                  style: {
                    backgroundColor: "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))",
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    boxShadow: "0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06)"
                  },
                  children: [<RichText __fromCanvasComponent className="framer-u4rbjf" data-framer-name="h" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="XY6tA9qZG" style={{
                    "--extracted-1lwpl3i": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
                  }} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.h5, {
                        className: "framer-styles-preset-1vvwmrq",
                        "data-styles-preset": "oXuB5yYcU",
                        style: {
                          "--framer-text-alignment": "left",
                          "--framer-text-color": "var(--extracted-1lwpl3i, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                        },
                        children: "Facility & Systems"
                      })}</>}</RichText>, <RichText __fromCanvasComponent className="framer-fjw1vg" data-framer-name="text" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="LyA3lzZZv" style={{
                    "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
                  }} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.p, {
                        className: "framer-styles-preset-k8yxrn",
                        "data-styles-preset": "ferGDeq75",
                        style: {
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                        },
                        children: "Assessment of physical site readiness, cleanliness, and use of digital or manual tracking systems."
                      })}</>}</RichText>]
                })
              }), <RichText __fromCanvasComponent className="framer-14v8hfw" data-framer-name="h" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="BjM0wtq1O" style={{
                "--extracted-1eung3n": "var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62))"
              }} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.h4, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-font-size": "30px",
                      "--framer-line-height": "100%",
                      "--framer-text-color": "var(--extracted-1eung3n, var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62)))"
                    },
                    children: "2"
                  })}</>}</RichText>]
            }), _jsx(motion.div, {
              className: "framer-210ieb",
              "data-framer-name": "LINE",
              layoutDependency,
              layoutId: "vpAIXIbrY",
              children: <SVG className="framer-1bzmpc4" layoutDependency={layoutDependency} layoutId="ZfcGjUvO1" opacity={1} requiresOverflowVisible svg={__svg_2} withExternalLayout />
            }), _jsxs(motion.div, {
              className: "framer-1okqlau",
              "data-framer-name": "3",
              layoutDependency,
              layoutId: "rY85nRA03",
              style: {
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15
              },
              children: [_jsx(motion.div, {
                className: "framer-3zd63s",
                "data-border": true,
                "data-framer-name": "border",
                layoutDependency,
                layoutId: "vfY_7PWLb",
                style: {
                  "--border-bottom-width": "2px",
                  "--border-color": "var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62))",
                  "--border-left-width": "2px",
                  "--border-right-width": "2px",
                  "--border-style": "solid",
                  "--border-top-width": "2px",
                  borderBottomLeftRadius: 14,
                  borderBottomRightRadius: 14,
                  borderTopLeftRadius: 14,
                  borderTopRightRadius: 14
                },
                children: _jsxs(motion.div, {
                  className: "framer-2a7tzm",
                  layoutDependency,
                  layoutId: "MvSNILtM1",
                  style: {
                    backgroundColor: "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))",
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    boxShadow: "0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06)"
                  },
                  children: [<RichText __fromCanvasComponent className="framer-24b7b4" data-framer-name="h" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="iNfeXw59j" style={{
                    "--extracted-1lwpl3i": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
                  }} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.h5, {
                        className: "framer-styles-preset-1vvwmrq",
                        "data-styles-preset": "oXuB5yYcU",
                        style: {
                          "--framer-text-color": "var(--extracted-1lwpl3i, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                        },
                        children: "Certifications & Compliance"
                      })}</>}</RichText>, <RichText __fromCanvasComponent className="framer-i005z4" data-framer-name="text" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="fOzbt5O7z" style={{
                    "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
                  }} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.p, {
                        className: "framer-styles-preset-k8yxrn",
                        "data-styles-preset": "ferGDeq75",
                        style: {
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                        },
                        children: "Review of licenses, insurance, safety protocols, and relevant certifications for regulatory alignment."
                      })}</>}</RichText>]
                })
              }), <RichText __fromCanvasComponent className="framer-s8rf0i" data-framer-name="h" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="rjmhVS0TI" style={{
                "--extracted-1eung3n": "var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62))"
              }} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.h4, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-font-size": "30px",
                      "--framer-line-height": "100%",
                      "--framer-text-color": "var(--extracted-1eung3n, var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62)))"
                    },
                    children: "3"
                  })}</>}</RichText>]
            }), _jsx(motion.div, {
              className: "framer-5wrvbz",
              "data-framer-name": "LINE",
              layoutDependency,
              layoutId: "g0SHJmqQ0",
              children: <SVG className="framer-103gbpm" layoutDependency={layoutDependency} layoutId="LTuCmtWF8" opacity={1} requiresOverflowVisible svg={__svg_3} withExternalLayout />
            }), _jsxs(motion.div, {
              className: "framer-1cstmkp",
              "data-framer-name": "4",
              layoutDependency,
              layoutId: "tMBowZyml",
              style: {
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15
              },
              children: [_jsx(motion.div, {
                className: "framer-1comvys",
                "data-border": true,
                "data-framer-name": "border",
                layoutDependency,
                layoutId: "tViFxeBVu",
                style: {
                  "--border-bottom-width": "2px",
                  "--border-color": "var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62))",
                  "--border-left-width": "2px",
                  "--border-right-width": "2px",
                  "--border-style": "solid",
                  "--border-top-width": "2px",
                  borderBottomLeftRadius: 14,
                  borderBottomRightRadius: 14,
                  borderTopLeftRadius: 14,
                  borderTopRightRadius: 14
                },
                children: _jsxs(motion.div, {
                  className: "framer-169nk85",
                  layoutDependency,
                  layoutId: "bwEKGEr3l",
                  style: {
                    backgroundColor: "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))",
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    boxShadow: "0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06)"
                  },
                  children: [<RichText __fromCanvasComponent className="framer-1h7uv10" data-framer-name="h" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="V1MSIoaly" style={{
                    "--extracted-1lwpl3i": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
                  }} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.h5, {
                        className: "framer-styles-preset-1vvwmrq",
                        "data-styles-preset": "oXuB5yYcU",
                        style: {
                          "--framer-text-color": "var(--extracted-1lwpl3i, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                        },
                        children: "Capacity & Lead Times"
                      })}</>}</RichText>, <RichText __fromCanvasComponent className="framer-oxd2wl" data-framer-name="text" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="KJoiO92Wh" style={{
                    "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
                  }} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.p, {
                        className: "framer-styles-preset-k8yxrn",
                        "data-styles-preset": "ferGDeq75",
                        style: {
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                        },
                        children: "Evaluation of available capacity, response times, and ability to meet SLAs."
                      })}</>}</RichText>]
                })
              }), <RichText __fromCanvasComponent className="framer-nqc84u" data-framer-name="h" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="YNGjyi7mh" style={{
                "--extracted-1eung3n": "var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62))"
              }} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.h4, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-font-size": "30px",
                      "--framer-line-height": "100%",
                      "--framer-text-color": "var(--extracted-1eung3n, var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62)))"
                    },
                    children: "4"
                  })}</>}</RichText>]
            }), _jsx(motion.div, {
              className: "framer-1f10et9",
              "data-framer-name": "LINE",
              layoutDependency,
              layoutId: "Ls7DD8TOZ",
              children: <SVG className="framer-1wl3r75" layoutDependency={layoutDependency} layoutId="unF2RiMIF" opacity={1} requiresOverflowVisible svg={__svg_4} withExternalLayout />
            }), _jsxs(motion.div, {
              className: "framer-1k554nz",
              "data-framer-name": "5",
              layoutDependency,
              layoutId: "aY5JDUFIK",
              style: {
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15
              },
              children: [_jsx(motion.div, {
                className: "framer-b14sko",
                "data-border": true,
                "data-framer-name": "border",
                layoutDependency,
                layoutId: "r3JTatQ3p",
                style: {
                  "--border-bottom-width": "2px",
                  "--border-color": "var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62))",
                  "--border-left-width": "2px",
                  "--border-right-width": "2px",
                  "--border-style": "solid",
                  "--border-top-width": "2px",
                  borderBottomLeftRadius: 14,
                  borderBottomRightRadius: 14,
                  borderTopLeftRadius: 14,
                  borderTopRightRadius: 14
                },
                children: _jsxs(motion.div, {
                  className: "framer-1be5f5h",
                  layoutDependency,
                  layoutId: "GvUqd8exz",
                  style: {
                    backgroundColor: "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))",
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    boxShadow: "0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06)"
                  },
                  children: [<RichText __fromCanvasComponent className="framer-18xdppx" data-framer-name="h" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="zKr7GV3Bn" style={{
                    "--extracted-1lwpl3i": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
                  }} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.h5, {
                        className: "framer-styles-preset-1vvwmrq",
                        "data-styles-preset": "oXuB5yYcU",
                        style: {
                          "--framer-text-color": "var(--extracted-1lwpl3i, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                        },
                        children: "Customer Experience"
                      })}</>}</RichText>, <RichText __fromCanvasComponent className="framer-14twwa4" data-framer-name="text" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="Fed6pL1D4" style={{
                    "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
                  }} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.p, {
                        className: "framer-styles-preset-k8yxrn",
                        "data-styles-preset": "ferGDeq75",
                        style: {
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                        },
                        children: "Review of responsiveness, communication practices, and service-level consistency."
                      })}</>}</RichText>]
                })
              }), <RichText __fromCanvasComponent className="framer-s8y9vb" data-framer-name="h" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="V3dtDdHj4" style={{
                "--extracted-1eung3n": "var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62))"
              }} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.h4, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-font-size": "30px",
                      "--framer-line-height": "100%",
                      "--framer-text-color": "var(--extracted-1eung3n, var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62)))"
                    },
                    children: "5"
                  })}</>}</RichText>]
            }), _jsx(motion.div, {
              className: "framer-qji8my",
              "data-framer-name": "LINE",
              layoutDependency,
              layoutId: "U6THQZCin",
              children: <SVG className="framer-1408uhf" layoutDependency={layoutDependency} layoutId="Whx6L8KlW" opacity={1} requiresOverflowVisible svg={__svg_5} withExternalLayout />
            }), _jsxs(motion.div, {
              className: "framer-p7yt8t",
              "data-framer-name": "6",
              layoutDependency,
              layoutId: "zQK0EGkXL",
              style: {
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15
              },
              children: [_jsx(motion.div, {
                className: "framer-6rllmn",
                "data-border": true,
                "data-framer-name": "border",
                layoutDependency,
                layoutId: "tlJDdNIAC",
                style: {
                  "--border-bottom-width": "2px",
                  "--border-color": "var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62))",
                  "--border-left-width": "2px",
                  "--border-right-width": "2px",
                  "--border-style": "solid",
                  "--border-top-width": "2px",
                  borderBottomLeftRadius: 14,
                  borderBottomRightRadius: 14,
                  borderTopLeftRadius: 14,
                  borderTopRightRadius: 14
                },
                children: _jsxs(motion.div, {
                  className: "framer-1i0vet1",
                  layoutDependency,
                  layoutId: "oZ0LCXwe1",
                  style: {
                    backgroundColor: "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))",
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    boxShadow: "0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06)"
                  },
                  children: [<RichText __fromCanvasComponent className="framer-leg36i" data-framer-name="h" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="yyPcOqWsM" style={{
                    "--extracted-1lwpl3i": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
                  }} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.h5, {
                        className: "framer-styles-preset-1vvwmrq",
                        "data-styles-preset": "oXuB5yYcU",
                        style: {
                          "--framer-text-color": "var(--extracted-1lwpl3i, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                        },
                        children: "Technical Fit"
                      })}</>}</RichText>, <RichText __fromCanvasComponent className="framer-3cpe4s" data-framer-name="text" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="Zpd4Wso9q" style={{
                    "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
                  }} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.p, {
                        className: "framer-styles-preset-k8yxrn",
                        "data-styles-preset": "ferGDeq75",
                        style: {
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                        },
                        children: "Evaluation of ability to follow work instructions, handle specialized products, and perform QC checks."
                      })}</>}</RichText>]
                })
              }), <RichText __fromCanvasComponent className="framer-h3dq6z" data-framer-name="h" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="hS72kzKZo" style={{
                "--extracted-1eung3n": "var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62))"
              }} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.h4, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-font-size": "30px",
                      "--framer-line-height": "100%",
                      "--framer-text-color": "var(--extracted-1eung3n, var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62)))"
                    },
                    children: "6"
                  })}</>}</RichText>]
            }), _jsx(motion.div, {
              className: "framer-1ofdtmu",
              "data-framer-name": "LINE",
              layoutDependency,
              layoutId: "xsKUW6_Jp",
              children: <SVG className="framer-1uo0iv9" layoutDependency={layoutDependency} layoutId="XwzLAxTsm" opacity={1} requiresOverflowVisible svg={__svg_6} withExternalLayout />
            }), _jsxs(motion.div, {
              className: "framer-1pfgm3h",
              "data-framer-name": "7",
              layoutDependency,
              layoutId: "gFvwarpcJ",
              style: {
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15
              },
              children: [_jsx(motion.div, {
                className: "framer-18jxz36",
                "data-border": true,
                "data-framer-name": "border",
                layoutDependency,
                layoutId: "eZfVLo7TU",
                style: {
                  "--border-bottom-width": "2px",
                  "--border-color": "var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62))",
                  "--border-left-width": "2px",
                  "--border-right-width": "2px",
                  "--border-style": "solid",
                  "--border-top-width": "2px",
                  borderBottomLeftRadius: 14,
                  borderBottomRightRadius: 14,
                  borderTopLeftRadius: 14,
                  borderTopRightRadius: 14
                },
                children: _jsxs(motion.div, {
                  className: "framer-1c74jf6",
                  layoutDependency,
                  layoutId: "w2xKmEZiT",
                  style: {
                    backgroundColor: "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))",
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    boxShadow: "0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06)"
                  },
                  children: [<RichText __fromCanvasComponent className="framer-1o1wctq" data-framer-name="h" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="iO6PL_hHJ" style={{
                    "--extracted-1lwpl3i": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
                  }} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.h5, {
                        className: "framer-styles-preset-1vvwmrq",
                        "data-styles-preset": "oXuB5yYcU",
                        style: {
                          "--framer-text-color": "var(--extracted-1lwpl3i, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                        },
                        children: "Track Record"
                      })}</>}</RichText>, <RichText __fromCanvasComponent className="framer-x6nau7" data-framer-name="text" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="lHrbjYgGy" style={{
                    "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
                  }} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.p, {
                        className: "framer-styles-preset-k8yxrn",
                        "data-styles-preset": "ferGDeq75",
                        style: {
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                        },
                        children: "Review of previous customer types, volume handled, and relevant industry experience."
                      })}</>}</RichText>]
                })
              }), <RichText __fromCanvasComponent className="framer-1lt6m0q" data-framer-name="h" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="t4a_wSbic" style={{
                "--extracted-1eung3n": "var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62))"
              }} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.h4, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-font-size": "30px",
                      "--framer-line-height": "100%",
                      "--framer-text-color": "var(--extracted-1eung3n, var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62)))"
                    },
                    children: "7"
                  })}</>}</RichText>]
            }), _jsx(motion.div, {
              className: "framer-6mro0h",
              "data-framer-name": "LINE",
              layoutDependency,
              layoutId: "quGVj_8qp",
              children: <SVG className="framer-1vv5xw5" layoutDependency={layoutDependency} layoutId="p0h_adDxM" opacity={1} requiresOverflowVisible svg={__svg_7} withExternalLayout />
            }), isDisplayed1() && _jsx(motion.div, {
              className: "framer-190usi0",
              "data-framer-name": "LINE",
              layoutDependency,
              layoutId: "XQOtC8ZXE",
              style: {
                opacity: 0
              },
              children: <SVG className="framer-1034okl" layoutDependency={layoutDependency} layoutId="tXuukpgOL" opacity={1} requiresOverflowVisible svg={__svg_8} withExternalLayout />
            }), _jsxs(motion.div, {
              className: "framer-18p2o0l",
              "data-framer-name": "8",
              layoutDependency,
              layoutId: "gAd6SXc_7",
              style: {
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15
              },
              children: [_jsx(motion.div, {
                className: "framer-6d4m9w",
                "data-border": true,
                "data-framer-name": "border",
                layoutDependency,
                layoutId: "wMXmljvJS",
                style: {
                  "--border-bottom-width": "2px",
                  "--border-color": "var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62))",
                  "--border-left-width": "2px",
                  "--border-right-width": "2px",
                  "--border-style": "solid",
                  "--border-top-width": "2px",
                  borderBottomLeftRadius: 14,
                  borderBottomRightRadius: 14,
                  borderTopLeftRadius: 14,
                  borderTopRightRadius: 14
                },
                children: _jsxs(motion.div, {
                  className: "framer-1r3tb36",
                  layoutDependency,
                  layoutId: "ctYJAQzDT",
                  style: {
                    backgroundColor: "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))",
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    boxShadow: "0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06)"
                  },
                  children: [<RichText __fromCanvasComponent className="framer-nduai9" data-framer-name="h" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="u3wU9auwT" style={{
                    "--extracted-1lwpl3i": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
                  }} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.h5, {
                        className: "framer-styles-preset-1vvwmrq",
                        "data-styles-preset": "oXuB5yYcU",
                        style: {
                          "--framer-text-color": "var(--extracted-1lwpl3i, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                        },
                        children: "Onboarding & Collaboration"
                      })}</>}</RichText>, <RichText __fromCanvasComponent className="framer-1pd5hx9" data-framer-name="text" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="PASWrKok2" style={{
                    "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
                  }} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.p, {
                        className: "framer-styles-preset-k8yxrn",
                        "data-styles-preset": "ferGDeq75",
                        style: {
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                        },
                        children: "Assessment of willingness to align with SOPs and participate in pilot programs."
                      })}</>}</RichText>]
                })
              }), <RichText __fromCanvasComponent className="framer-fe5378" data-framer-name="h" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="oEp_X2g5K" style={{
                "--extracted-1eung3n": "var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62))"
              }} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.h4, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-font-size": "30px",
                      "--framer-line-height": "100%",
                      "--framer-text-color": "var(--extracted-1eung3n, var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62)))"
                    },
                    children: "8"
                  })}</>}</RichText>]
            })]
          }), isDisplayed() && _jsxs(motion.div, {
            className: "framer-dwcsny",
            layoutDependency,
            layoutId: "fvK_3xPeG",
            children: [_jsx(motion.div, {
              className: "framer-1lek3zc",
              "data-border": true,
              layoutDependency,
              layoutId: "GUFv5mW7a",
              style: {
                "--border-bottom-width": "2px",
                "--border-color": "var(--token-2ae4d622-3758-4fad-a56d-08fa00cc7638, rgb(173, 173, 199))",
                "--border-left-width": "2px",
                "--border-right-width": "2px",
                "--border-style": "solid",
                "--border-top-width": "2px",
                borderBottomLeftRadius: 64,
                borderBottomRightRadius: 64,
                borderTopLeftRadius: 64,
                borderTopRightRadius: 64,
                opacity: 0.3
              },
              variants: {
                GSX0B4Lq2: {
                  opacity: 1
                },
                hRlTfHjnb: {
                  opacity: 1
                },
                mkKW73nyz: {
                  opacity: 1
                },
                NMRpnvN4r: {
                  opacity: 1
                },
                OdGxk_fVc: {
                  opacity: 1
                },
                oi8OElEEz: {
                  opacity: 1
                },
                sCMAmqvTy: {
                  opacity: 1
                }
              },
              children: <RichText __fromCanvasComponent className="framer-5uf6y2" data-framer-name="h" data-highlight fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="bFwA5TFp2" onTap={onTap3c3q34} style={{
                "--extracted-1eung3n": "var(--token-2ae4d622-3758-4fad-a56d-08fa00cc7638, rgb(173, 173, 199))"
              }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides({
                GSX0B4Lq2: {
                  onTap: onTap66r3bx
                },
                hRlTfHjnb: {
                  onTap: onTap1h69r2g
                },
                NMRpnvN4r: {
                  onTap: onTap7c7mf7
                },
                OdGxk_fVc: {
                  onTap: onTap1b8pacs
                },
                oi8OElEEz: {
                  onTap: onTapwoptiq
                },
                sCMAmqvTy: {
                  onTap: onTapa4ixpe
                }
              }, baseVariant, gestureVariant)}>{<>{_jsx(motion.h4, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-font-size": "30px",
                      "--framer-line-height": "100%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-1eung3n, var(--token-2ae4d622-3758-4fad-a56d-08fa00cc7638, rgb(173, 173, 199)))"
                    },
                    children: "<-"
                  })}</>}</RichText>
            }), _jsx(motion.div, {
              className: "framer-88q6ba",
              "data-border": true,
              layoutDependency,
              layoutId: "uXtXRsZwp",
              style: {
                "--border-bottom-width": "2px",
                "--border-color": "var(--token-2ae4d622-3758-4fad-a56d-08fa00cc7638, rgb(173, 173, 199))",
                "--border-left-width": "2px",
                "--border-right-width": "2px",
                "--border-style": "solid",
                "--border-top-width": "2px",
                borderBottomLeftRadius: 64,
                borderBottomRightRadius: 64,
                borderTopLeftRadius: 64,
                borderTopRightRadius: 64,
                opacity: 1
              },
              variants: {
                oi8OElEEz: {
                  opacity: 0.3
                }
              },
              children: <RichText __fromCanvasComponent className="framer-yszlwr" data-framer-name="h" data-highlight fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="QDsuSgVxS" onTap={onTapa4ixpe} style={{
                "--extracted-1eung3n": "var(--token-2ae4d622-3758-4fad-a56d-08fa00cc7638, rgb(173, 173, 199))"
              }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides({
                GSX0B4Lq2: {
                  onTap: onTapwoptiq
                },
                hRlTfHjnb: {
                  onTap: onTapaj59xw
                },
                mkKW73nyz: {
                  onTap: onTap7c7mf7
                },
                NMRpnvN4r: {
                  onTap: onTap66r3bx
                },
                OdGxk_fVc: {
                  onTap: onTap1h69r2g
                },
                oi8OElEEz: {
                  "data-highlight": void 0,
                  onTap: void 0
                },
                sCMAmqvTy: {
                  onTap: onTap1b8pacs
                }
              }, baseVariant, gestureVariant)}>{<>{_jsx(motion.h4, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-font-size": "30px",
                      "--framer-line-height": "100%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-1eung3n, var(--token-2ae4d622-3758-4fad-a56d-08fa00cc7638, rgb(173, 173, 199)))"
                    },
                    children: "->"
                  })}</>}</RichText>
            })]
          })]
        })}</Transition>}</Variants>}</LayoutGroup>;
});
var css3 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-u2Enb.framer-14iha4g, .framer-u2Enb .framer-14iha4g { display: block; }", ".framer-u2Enb.framer-757twx { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: 398px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1072px; }", ".framer-u2Enb .framer-jaq348 { bottom: 0px; flex: none; overflow: hidden; position: absolute; right: -1px; top: 0px; width: 64px; z-index: 2; }", ".framer-u2Enb .framer-1ehx98j { bottom: 0px; flex: none; left: -1px; overflow: hidden; position: absolute; top: 0px; width: 64px; z-index: 2; }", ".framer-u2Enb .framer-1sh6x3l { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; left: 64px; overflow: visible; padding: 0px; position: absolute; top: 80px; width: 3000px; z-index: 1; }", ".framer-u2Enb .framer-1m3o99, .framer-u2Enb .framer-g9j4hb, .framer-u2Enb .framer-1okqlau, .framer-u2Enb .framer-1cstmkp, .framer-u2Enb .framer-1k554nz, .framer-u2Enb .framer-p7yt8t, .framer-u2Enb .framer-1pfgm3h, .framer-u2Enb .framer-18p2o0l { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 320px; }", ".framer-u2Enb .framer-1pusak2, .framer-u2Enb .framer-5pgx6w, .framer-u2Enb .framer-3zd63s, .framer-u2Enb .framer-1comvys, .framer-u2Enb .framer-b14sko, .framer-u2Enb .framer-6rllmn, .framer-u2Enb .framer-18jxz36, .framer-u2Enb .framer-6d4m9w { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 16px; position: relative; width: 1px; }", ".framer-u2Enb .framer-efntq8, .framer-u2Enb .framer-d5z5zp, .framer-u2Enb .framer-2a7tzm, .framer-u2Enb .framer-169nk85, .framer-u2Enb .framer-1be5f5h, .framer-u2Enb .framer-1i0vet1, .framer-u2Enb .framer-1c74jf6, .framer-u2Enb .framer-1r3tb36 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 16px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }", ".framer-u2Enb .framer-tc3i7o, .framer-u2Enb .framer-1uzkq4z, .framer-u2Enb .framer-u4rbjf, .framer-u2Enb .framer-fjw1vg, .framer-u2Enb .framer-24b7b4, .framer-u2Enb .framer-i005z4, .framer-u2Enb .framer-1h7uv10, .framer-u2Enb .framer-oxd2wl, .framer-u2Enb .framer-18xdppx, .framer-u2Enb .framer-14twwa4, .framer-u2Enb .framer-leg36i, .framer-u2Enb .framer-3cpe4s, .framer-u2Enb .framer-1o1wctq, .framer-u2Enb .framer-x6nau7, .framer-u2Enb .framer-nduai9, .framer-u2Enb .framer-1pd5hx9 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-u2Enb .framer-kmv4vn, .framer-u2Enb .framer-14v8hfw, .framer-u2Enb .framer-s8rf0i, .framer-u2Enb .framer-nqc84u, .framer-u2Enb .framer-s8y9vb, .framer-u2Enb .framer-h3dq6z, .framer-u2Enb .framer-1lt6m0q, .framer-u2Enb .framer-fe5378 { flex: none; height: auto; left: 1px; position: absolute; top: -40px; white-space: pre-wrap; width: 37px; word-break: break-word; word-wrap: break-word; z-index: 1; }", ".framer-u2Enb .framer-5zwiw4, .framer-u2Enb .framer-210ieb, .framer-u2Enb .framer-5wrvbz, .framer-u2Enb .framer-1f10et9, .framer-u2Enb .framer-qji8my, .framer-u2Enb .framer-1ofdtmu, .framer-u2Enb .framer-6mro0h { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 64px; }", ".framer-u2Enb .framer-xzv0ld, .framer-u2Enb .framer-1bzmpc4, .framer-u2Enb .framer-103gbpm, .framer-u2Enb .framer-1wl3r75, .framer-u2Enb .framer-1408uhf, .framer-u2Enb .framer-1uo0iv9, .framer-u2Enb .framer-1vv5xw5, .framer-u2Enb .framer-1034okl { height: 1px; position: relative; width: 64px; }", ".framer-u2Enb .framer-190usi0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 16px; }", ".framer-u2Enb .framer-dwcsny { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; right: 0px; z-index: 1; }", ".framer-u2Enb .framer-1lek3zc, .framer-u2Enb .framer-88q6ba { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 64px; justify-content: center; overflow: visible; padding: 0px 0px 4px 0px; position: relative; width: 64px; }", ".framer-u2Enb .framer-5uf6y2, .framer-u2Enb .framer-yszlwr { cursor: pointer; flex: 1 0 0px; height: 100%; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; z-index: 1; }", ".framer-u2Enb.framer-v-1m1tmk5 .framer-1sh6x3l { left: -320px; }", ".framer-u2Enb.framer-v-198hoi8 .framer-1sh6x3l { left: -704px; }", ".framer-u2Enb.framer-v-gpqje .framer-1sh6x3l { left: -1088px; }", ".framer-u2Enb.framer-v-shag1s .framer-1sh6x3l { left: -1472px; }", ".framer-u2Enb.framer-v-jrtvf .framer-1sh6x3l { left: -1856px; }", ".framer-u2Enb.framer-v-mktdb2 .framer-1sh6x3l { left: -2240px; }", ".framer-u2Enb.framer-v-1k91uan .framer-1sh6x3l { left: -2624px; }", ".framer-u2Enb.framer-v-1k91uan .framer-yszlwr { cursor: unset; }", ".framer-u2Enb.framer-v-6m9lhk.framer-757twx { overflow: auto; padding: 64px 0px 24px 24px; width: 320px; }", ".framer-u2Enb.framer-v-6m9lhk .framer-1sh6x3l { left: unset; position: relative; top: unset; width: 740%; }", ".framer-u2Enb.framer-v-6m9lhk .framer-1m3o99 { flex: 1 0 0px; order: 0; width: 1px; }", ".framer-u2Enb.framer-v-6m9lhk .framer-5zwiw4 { order: 1; width: 24px; }", ".framer-u2Enb.framer-v-6m9lhk .framer-g9j4hb { flex: 1 0 0px; order: 2; width: 1px; }", ".framer-u2Enb.framer-v-6m9lhk .framer-210ieb { order: 3; width: 24px; }", ".framer-u2Enb.framer-v-6m9lhk .framer-1okqlau { flex: 1 0 0px; order: 4; width: 1px; }", ".framer-u2Enb.framer-v-6m9lhk .framer-5wrvbz { order: 5; width: 24px; }", ".framer-u2Enb.framer-v-6m9lhk .framer-1cstmkp { flex: 1 0 0px; order: 6; width: 1px; }", ".framer-u2Enb.framer-v-6m9lhk .framer-1f10et9 { order: 7; width: 24px; }", ".framer-u2Enb.framer-v-6m9lhk .framer-1k554nz { flex: 1 0 0px; order: 8; width: 1px; }", ".framer-u2Enb.framer-v-6m9lhk .framer-qji8my { order: 9; width: 24px; }", ".framer-u2Enb.framer-v-6m9lhk .framer-p7yt8t { flex: 1 0 0px; order: 10; width: 1px; }", ".framer-u2Enb.framer-v-6m9lhk .framer-1ofdtmu { order: 11; width: 24px; }", ".framer-u2Enb.framer-v-6m9lhk .framer-1pfgm3h { flex: 1 0 0px; order: 12; width: 1px; }", ".framer-u2Enb.framer-v-6m9lhk .framer-6mro0h { order: 13; width: 24px; }", ".framer-u2Enb.framer-v-6m9lhk .framer-190usi0 { order: 15; }", ".framer-u2Enb.framer-v-6m9lhk .framer-18p2o0l { flex: 1 0 0px; order: 14; width: 1px; }", ...css2, ...css, '.framer-u2Enb[data-border="true"]::after, .framer-u2Enb [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'];
var FramerMYLHWEDkN = withCSS(Component, css3, "framer-u2Enb");
var MYLHWEDkN_default = FramerMYLHWEDkN;
FramerMYLHWEDkN.displayName = "steps slider";
FramerMYLHWEDkN.defaultProps = {
  height: 398,
  width: 1072
};
addPropertyControls(FramerMYLHWEDkN, {
  variant: {
    options: ["SE6Gqpb1T", "mkKW73nyz", "sCMAmqvTy", "NMRpnvN4r", "OdGxk_fVc", "GSX0B4Lq2", "hRlTfHjnb", "oi8OElEEz", "Bst45q6cg"],
    optionTitles: ["Variant 1", "Variant 2", "Variant 3", "Variant 4", "Variant 5", "Variant 6", "Variant 7", "Variant 8", "PHONE"],
    title: "Variant",
    type: ControlType.Enum
  }
});
addFonts(FramerMYLHWEDkN, [{
  explicitInter: true,
  fonts: [{
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
    url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
    url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+1F00-1FFF",
    url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0370-03FF",
    url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
    url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
    url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
    weight: "400"
  }, {
    family: "Haffer Regular",
    source: "custom",
    url: "https://framerusercontent.com/assets/tAGQcvN09kwW2QjPLqLO197UqBQ.woff"
  }]
}, ...getFontsFromSharedStyle(fonts2), ...getFontsFromSharedStyle(fonts)], {
  supportsExplicitInterCodegen: true
});
var __FramerMetadata__ = {
  "exports": {
    "Props": {
      "type": "tsType",
      "annotations": {
        "framerContractVersion": "1"
      }
    },
    "default": {
      "type": "reactComponent",
      "name": "FramerMYLHWEDkN",
      "slots": [],
      "annotations": {
        "framerAutoSizeImages": "true",
        "framerDisplayContentsDiv": "false",
        "framerIntrinsicWidth": "1072",
        "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"mkKW73nyz":{"layout":["fixed","fixed"]},"sCMAmqvTy":{"layout":["fixed","fixed"]},"NMRpnvN4r":{"layout":["fixed","fixed"]},"OdGxk_fVc":{"layout":["fixed","fixed"]},"GSX0B4Lq2":{"layout":["fixed","fixed"]},"hRlTfHjnb":{"layout":["fixed","fixed"]},"oi8OElEEz":{"layout":["fixed","fixed"]},"Bst45q6cg":{"layout":["fixed","fixed"]}}}',
        "framerContractVersion": "1",
        "framerImmutableVariables": "true",
        "framerComponentViewportWidth": "true",
        "framerIntrinsicHeight": "398",
        "framerColorSyntax": "true"
      }
    },
    "__FramerMetadata__": {
      "type": "variable"
    }
  }
};
var _OriginalComponent = MYLHWEDkN_default;
function StepssliderWrapped(props) {
  var _variant = useVariant(props.variant);
  var _inner = (_variant !== undefined) ? { ...props, variant: _variant } : props;
  return _ctxJsx(ContextProviders, { children: _ctxJsx(_OriginalComponent, _inner) });
}
Object.assign(StepssliderWrapped, _OriginalComponent);
export {  __FramerMetadata__,  StepssliderWrapped as default   };