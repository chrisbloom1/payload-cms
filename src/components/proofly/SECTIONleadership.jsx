"use client"
// http-url:https://framerusercontent.com/modules/Pf0AClOOF0sIw4RQSVZt/hijiTctQF2hzsTuXpMZC/lZiAP5duP.js
import { jsx as _jsx5, jsxs as _jsxs4 } from "react/jsx-runtime";
import { addFonts as addFonts4, addPropertyControls as addPropertyControls5, ComponentViewportProvider as ComponentViewportProvider2, ControlType as ControlType5, cx as cx5, getFonts as getFonts3, getFontsFromSharedStyle as getFontsFromSharedStyle4, RichText as RichText4, useActiveVariantCallback as useActiveVariantCallback4, useComponentViewport as useComponentViewport4, useLocaleInfo as useLocaleInfo4, useVariantState as useVariantState4, withCSS as withCSS5, withFX as withFX2, withOptimizedAppearEffect as withOptimizedAppearEffect2 } from "@proofly-framer/runtime";
import { LayoutGroup as LayoutGroup4, motion as motion5, MotionConfigContext as MotionConfigContext4 } from "@proofly-framer/runtime";
import * as React5 from "react";

// Extracted SVG assets
const __svg_1 = '<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 5.5 5.25 L 0 10.5" fill="transparent" height="10.5px" id="pTO_zwTXv" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(13.75 6.75)" width="5.5px"/><path d="M 14.25 0 L 0 0" fill="transparent" height="1px" id="Jh7NTfV71" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(4.75 12)" width="14.25px"/></svg>';
const __svg_2 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><path d="M 14.819 0.085 C 15.425 0.085 15.959 0.613 15.959 1.247 L 15.959 14.739 C 15.959 15.374 15.425 15.867 14.819 15.867 L 1.104 15.867 C 0.499 15.867 0 15.374 0 14.74 L 0 1.247 C 0 0.613 0.499 0.085 1.104 0.085 Z M 4.809 13.612 L 4.809 6.109 L 2.458 6.109 L 2.458 13.612 Z M 3.633 5.052 C 3.992 5.052 4.337 4.911 4.591 4.66 C 4.845 4.409 4.987 4.068 4.987 3.713 C 4.987 2.974 4.381 2.339 3.633 2.339 C 2.85 2.339 2.244 2.974 2.244 3.713 C 2.244 4.453 2.85 5.052 3.633 5.052 Z M 13.679 13.612 L 13.679 9.49 C 13.679 7.483 13.216 5.897 10.829 5.897 C 9.689 5.897 8.906 6.531 8.585 7.13 L 8.549 7.13 L 8.549 6.109 L 6.305 6.109 L 6.305 13.612 L 8.656 13.612 L 8.656 9.913 C 8.656 8.927 8.835 7.976 10.081 7.976 C 11.293 7.976 11.293 9.103 11.293 9.948 L 11.293 13.612 Z" fill="var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)) /* {&quot;name&quot;:&quot;Background&quot;} */"></path></svg>';
const __svg_3 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 20 20\"><path d=\"M 18.524 0.106 C 19.281 0.106 19.949 0.767 19.949 1.559 L 19.949 18.424 C 19.949 19.217 19.281 19.833 18.524 19.833 L 1.38 19.833 C 0.624 19.833 0 19.217 0 18.424 L 0 1.559 C 0 0.767 0.623 0.106 1.38 0.106 Z M 6.011 17.015 L 6.011 7.636 L 3.073 7.636 L 3.073 17.015 Z M 4.542 6.315 C 4.99 6.315 5.421 6.139 5.738 5.825 C 6.056 5.511 6.234 5.085 6.234 4.642 C 6.234 3.717 5.477 2.924 4.542 2.924 C 3.562 2.924 2.805 3.717 2.805 4.642 C 2.805 5.566 3.562 6.315 4.542 6.315 Z M 17.099 17.015 L 17.099 11.863 C 17.099 9.353 16.52 7.372 13.537 7.372 C 12.112 7.372 11.132 8.164 10.731 8.913 L 10.687 8.913 L 10.687 7.636 L 7.882 7.636 L 7.882 17.015 L 10.82 17.015 L 10.82 12.392 C 10.82 11.159 11.043 9.97 12.602 9.97 C 14.116 9.97 14.116 11.379 14.116 12.436 L 14.116 17.015 Z\" fill=\"var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)) /* {&quot;name&quot;:&quot;Background&quot;} */\"></path></svg>";


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

// http-url:https://framerusercontent.com/modules/y15caBhvP7gkgZ0xWkkK/FaFuipn14V781YvuwOfF/Sn1ggcgQ3.js
import { fontStore as fontStore2 } from "@proofly-framer/runtime";
fontStore2.loadFonts(["CUSTOM;Haffer Bold"]);
var fonts2 = [{
  explicitInter: true,
  fonts: [{
    family: "Haffer Bold",
    source: "custom",
    url: "https://framerusercontent.com/assets/eRqmC6W9PktN8mUcnwel9B6wmPs.woff"
  }]
}];
var css2 = ['.framer-uqB8w .framer-styles-preset-xwk33z:not(.rich-text-wrapper), .framer-uqB8w .framer-styles-preset-xwk33z.rich-text-wrapper h1 { --framer-font-family: "Haffer Bold", "Haffer Bold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 48px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 100%; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }', '@media (max-width: 1199px) and (min-width: 746px) { .framer-uqB8w .framer-styles-preset-xwk33z:not(.rich-text-wrapper), .framer-uqB8w .framer-styles-preset-xwk33z.rich-text-wrapper h1 { --framer-font-family: "Haffer Bold", "Haffer Bold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 48px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 100%; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }', '@media (max-width: 745px) and (min-width: 0px) { .framer-uqB8w .framer-styles-preset-xwk33z:not(.rich-text-wrapper), .framer-uqB8w .framer-styles-preset-xwk33z.rich-text-wrapper h1 { --framer-font-family: "Haffer Bold", "Haffer Bold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 36px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 100%; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }'];
var className2 = "framer-uqB8w";

// http-url:https://framerusercontent.com/modules/b4bNUYeFeMFtiv3tajVu/nPjufhtWtvydoNqljOxg/Uiq33N87W.js
import { jsx as _jsx3, jsxs as _jsxs2 } from "react/jsx-runtime";
import { addFonts as addFonts2, addPropertyControls as addPropertyControls3, ComponentViewportProvider, ControlType as ControlType3, cx as cx3, getFonts as getFonts2, getFontsFromSharedStyle as getFontsFromSharedStyle2, getLoadingLazyAtYPosition, Image, Link as Link2, RichText as RichText2, SmartComponentScopedContainer, SVG as SVG2, useActiveVariantCallback as useActiveVariantCallback2, useComponentViewport as useComponentViewport2, useLocaleInfo as useLocaleInfo2, useVariantState as useVariantState2, withCSS as withCSS3, withFX, withOptimizedAppearEffect } from "@proofly-framer/runtime";
import { LayoutGroup as LayoutGroup2, motion as motion3, MotionConfigContext as MotionConfigContext2 } from "@proofly-framer/runtime";
import * as React3 from "react";
import { useRef as useRef2 } from "react";

// http-url:https://framerusercontent.com/modules/5b0cRZbgNRw1dCNVnxhv/mDSpobAAY3IZwQ4LzCUn/z4Urx0kPV.js
import { fontStore as fontStore3 } from "@proofly-framer/runtime";
fontStore3.loadFonts(["CUSTOM;Haffer Regular", "CUSTOMV2;Haffer Bold", "CUSTOMV2;Haffer Bold Italic", "CUSTOMV2;Haffer Regular Italic"]);
var fonts3 = [{
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
var css3 = ['.framer-tLH4r .framer-styles-preset-1e98430:not(.rich-text-wrapper), .framer-tLH4r .framer-styles-preset-1e98430.rich-text-wrapper h5 { --framer-font-family: "Haffer Regular", sans-serif; --framer-font-family-bold: "Haffer Bold", sans-serif; --framer-font-family-bold-italic: "Haffer Bold Italic", sans-serif; --framer-font-family-italic: "Haffer Regular Italic", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 430; --framer-font-weight-bold: 790; --framer-font-weight-bold-italic: 790; --framer-font-weight-italic: 430; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }', '@media (max-width: 768px) and (min-width: 0px) { .framer-tLH4r .framer-styles-preset-1e98430:not(.rich-text-wrapper), .framer-tLH4r .framer-styles-preset-1e98430.rich-text-wrapper h5 { --framer-font-family: "Haffer Regular", sans-serif; --framer-font-family-bold: "Haffer Bold", sans-serif; --framer-font-family-bold-italic: "Haffer Bold Italic", sans-serif; --framer-font-family-italic: "Haffer Regular Italic", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 430; --framer-font-weight-bold: 790; --framer-font-weight-bold-italic: 790; --framer-font-weight-italic: 430; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }'];
var className3 = "framer-tLH4r";

// http-url:https://framerusercontent.com/modules/tLVqKCltCYmTTKeYPY8O/61TR8ONf7Q5XYv19SfxW/yZBQGZIRL.js
import { jsx as _jsx2, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls as addPropertyControls2, ControlType as ControlType2, cx as cx2, getFonts, getFontsFromSharedStyle, Link, RichText, useActiveVariantCallback, useComponentViewport, useLocaleInfo, useVariantState, withCSS as withCSS2 } from "@proofly-framer/runtime";
import { LayoutGroup, motion as motion2, MotionConfigContext } from "@proofly-framer/runtime";
import * as React2 from "react";
import { useRef } from "react";

// http-url:https://framerusercontent.com/modules/gGXLFANbZFKf2qU8bbVL/uQjjbN7Yn6nBRqTZdwzU/HoKrrnQcM.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addPropertyControls, ControlType, cx, motion, useSVGTemplate, withCSS } from "@proofly-framer/runtime";
import * as React from "react";
import { forwardRef as forwardRef2 } from "react";
var mask = "var(--framer-icon-mask)";
var Base = forwardRef2(function (props, ref) {
  return <svg {...props} ref={ref}>{props.children}</svg>;
});
var MotionSVG = motion.create(Base);
var SVG = forwardRef2((props, ref) => {
  const {
    animated,
    layoutId,
    children,
    ...rest
  } = props;
  return animated ? <MotionSVG {...rest} layoutId={layoutId} ref={ref}>{children}</MotionSVG> : <svg {...rest} ref={ref}>{children}</svg>;
});
var svg = __svg_1;
var getProps = ({
  dots,
  height,
  id,
  stroke,
  width,
  width1,
  ...props
}) => {
  return {
    ...props,
    BKVe8Pgvw: dots ?? props.BKVe8Pgvw ?? 1,
    fICyAUQY1: stroke ?? props.fICyAUQY1 ?? "rgb(0, 0, 0)",
    lKf_CQTz5: width1 ?? props.lKf_CQTz5 ?? 1.5
  };
};
var Component = React.forwardRef(function (props, ref) {
  const {
    style,
    className: className7,
    layoutId,
    variant,
    fICyAUQY1,
    lKf_CQTz5,
    BKVe8Pgvw,
    ...restProps
  } = getProps(props);
  const href = useSVGTemplate("1173457374", svg);
  return <SVG {...restProps} className={cx("framer-EcgqK", className7)} layoutId={layoutId} ref={ref} role="presentation" style={{
    "--1335ju": lKf_CQTz5,
    "--18mrqx2": fICyAUQY1,
    ...style
  }} viewBox="0 0 24 24">{<use href={href} />}</SVG>;
});
var css4 = [`.framer-EcgqK { -webkit-mask: ${mask}; aspect-ratio: 1; display: block; mask: ${mask}; width: 24px; }`];
var Icon = withCSS(Component, css4, "framer-EcgqK");
Icon.displayName = "Arrow Right";
var HoKrrnQcM_default = Icon;
addPropertyControls(Icon, {
  fICyAUQY1: {
    defaultValue: "rgb(0, 0, 0)",
    hidden: false,
    title: "Stroke",
    type: ControlType.Color
  },
  lKf_CQTz5: {
    defaultValue: 1.5,
    displayStepper: true,
    hidden: false,
    max: 4,
    min: 0,
    step: 0.5,
    title: "Width",
    type: ControlType.Number
  },
  BKVe8Pgvw: {
    defaultValue: 1,
    displayStepper: true,
    hidden: true,
    max: 4,
    min: 1,
    title: "Dots",
    type: ControlType.Number
  }
});

// http-url:https://framerusercontent.com/modules/jtYjlqHZqHU87icHOGiw/OOuSnFcca3KULIr591Dj/QkI8Aa5rN.js
import { fontStore as fontStore4 } from "@proofly-framer/runtime";
fontStore4.loadFonts(["CUSTOM;Haffer Regular"]);
var fonts4 = [{
  explicitInter: true,
  fonts: [{
    family: "Haffer Regular",
    source: "custom",
    url: "https://framerusercontent.com/assets/tAGQcvN09kwW2QjPLqLO197UqBQ.woff"
  }]
}];
var css5 = ['.framer-aqieJ .framer-styles-preset-mnimbo:not(.rich-text-wrapper), .framer-aqieJ .framer-styles-preset-mnimbo.rich-text-wrapper p { --framer-font-family: "Haffer Regular", "Haffer Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, #0a0b0a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }'];
var className4 = "framer-aqieJ";

// http-url:https://framerusercontent.com/modules/Ae2JxZ1NzMSdVHWpQSYI/6DXq0VgytYexIhDwN2rC/YlBLAavU6.js
import { fontStore as fontStore5 } from "@proofly-framer/runtime";
fontStore5.loadFonts(["CUSTOM;Haffer Regular"]);
var fonts5 = [{
  explicitInter: true,
  fonts: [{
    family: "Haffer Regular",
    source: "custom",
    url: "https://framerusercontent.com/assets/tAGQcvN09kwW2QjPLqLO197UqBQ.woff"
  }]
}];
var css6 = ['.framer-RqrbG .framer-styles-preset-1ydx3rt:not(.rich-text-wrapper), .framer-RqrbG .framer-styles-preset-1ydx3rt.rich-text-wrapper p { --framer-font-family: "Haffer Regular", "Haffer Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, #0a0b0a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }', '@media (max-width: 767px) and (min-width: 0px) { .framer-RqrbG .framer-styles-preset-1ydx3rt:not(.rich-text-wrapper), .framer-RqrbG .framer-styles-preset-1ydx3rt.rich-text-wrapper p { --framer-font-family: "Haffer Regular", "Haffer Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, #0a0b0a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }'];
var className5 = "framer-RqrbG";

// http-url:https://framerusercontent.com/modules/tLVqKCltCYmTTKeYPY8O/61TR8ONf7Q5XYv19SfxW/yZBQGZIRL.js
var ArrowRightFonts = getFonts(HoKrrnQcM_default);
var enabledGestures = {
  bHEcOt3us: {
    hover: true
  },
  br7LBM8iN: {
    hover: true
  },
  coXNANDm3: {
    hover: true
  },
  llZeWFj0E: {
    hover: true
  },
  tLEpsRpVS: {
    hover: true
  },
  ZmCP_eD3_: {
    hover: true
  }
};
var cycleOrder = ["ZmCP_eD3_", "llZeWFj0E", "tLEpsRpVS", "bHEcOt3us", "FbG4z2omJ", "coXNANDm3", "br7LBM8iN", "bMRQAPM8x"];
var serializationHash = "framer-BsBK3";
var variantClassNames = {
  bHEcOt3us: "framer-v-26utbf",
  bMRQAPM8x: "framer-v-19s4zot",
  br7LBM8iN: "framer-v-mfbo2h",
  coXNANDm3: "framer-v-6stzd3",
  FbG4z2omJ: "framer-v-nbkuw9",
  llZeWFj0E: "framer-v-1f8bjye",
  tLEpsRpVS: "framer-v-j08lig",
  ZmCP_eD3_: "framer-v-16c10ng"
};
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach(variant => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var radiusForCorner = (value, cornerIndex) => {
  if (typeof value === "number" && Number.isFinite(value)) return Math.max(0, value) + "px";
  if (typeof value !== "string" || typeof cornerIndex !== "number") return void 0;
  const segments = value.split(" ");
  return segments[cornerIndex] || segments[cornerIndex - 2] || segments[0];
};
var transition1 = {
  damping: 60,
  delay: 0,
  mass: 1,
  stiffness: 500,
  type: "spring"
};
var transformTemplate1 = (_, t) => `translateX(-50%) ${t}`;
var Transition = ({
  value,
  children
}) => {
  const config = React2.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React2.useMemo(() => ({
    ...config,
    transition
  }), [JSON.stringify(transition)]);
  return <MotionConfigContext.Provider value={contextValue}>{children}</MotionConfigContext.Provider>;
};
var Variants = motion2.create(React2.Fragment);
var humanReadableVariantMap = {
  "Just Icon": "bMRQAPM8x",
  "small-gradient": "coXNANDm3",
  "tiny stroke": "FbG4z2omJ",
  Big: "ZmCP_eD3_",
  Dark: "tLEpsRpVS",
  huge: "br7LBM8iN",
  Small: "llZeWFj0E",
  tiny: "bHEcOt3us"
};
var getProps2 = ({
  background,
  border,
  click,
  height,
  id,
  link,
  radius,
  title,
  titleColor,
  width,
  ...props
}) => {
  return {
    ...props,
    du4PAlRaB: click ?? props.du4PAlRaB,
    KhVtTQLb4: radius ?? props.KhVtTQLb4 ?? "4px",
    P7ZHYgc9n: titleColor ?? props.P7ZHYgc9n ?? "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
    qzxtK1_9Y: link ?? props.qzxtK1_9Y,
    RQDpSij6V: background ?? props.RQDpSij6V ?? "var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(255, 59, 50))",
    TiAMtDaz3: title ?? props.TiAMtDaz3 ?? "Login",
    variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "ZmCP_eD3_",
    wN3STPwMb: border ?? props.wN3STPwMb ?? {
      borderColor: 'var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))',
      borderStyle: "solid",
      borderWidth: 0
    }
  };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component2 = React2.forwardRef(function (props, ref) {
  const fallbackRef = useRef(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React2.useId();
  const {
    activeLocale,
    setLocale
  } = useLocaleInfo();
  const componentViewport = useComponentViewport();
  const {
    style,
    className: className7,
    layoutId,
    variant,
    qzxtK1_9Y,
    TiAMtDaz3,
    RQDpSij6V,
    P7ZHYgc9n,
    du4PAlRaB,
    wN3STPwMb,
    KhVtTQLb4,
    ...restProps
  } = getProps2(props);
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
    defaultVariant: "ZmCP_eD3_",
    enabledGestures,
    ref: refBinding,
    variant,
    variantClassNames
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const {
    activeVariantCallback,
    delay
  } = useActiveVariantCallback(baseVariant);
  const onTaphj2y62 = activeVariantCallback(async (...args) => {
    setGestureState({
      isPressed: false
    });
    if (du4PAlRaB) {
      const res = await du4PAlRaB(...args);
      if (res === false) return false;
    }
  });
  const sharedStyleClassNames = [className5, className4];
  const scopingClassNames = cx2(serializationHash, ...sharedStyleClassNames);
  const isDisplayed = () => {
    if (baseVariant === "bMRQAPM8x") return true;
    return false;
  };
  const isDisplayed1 = () => {
    if (baseVariant === "bMRQAPM8x") return false;
    return true;
  };
  return <LayoutGroup id={layoutId ?? defaultLayoutId}>{<Variants animate={variants} initial={false}>{<Transition value={transition1}>{<Link href={qzxtK1_9Y} motionChild nodeId="ZmCP_eD3_" scopeId="yZBQGZIRL">{_jsxs(motion2.a, {
            ...restProps,
            ...gestureHandlers,
            className: `${cx2(scopingClassNames, "framer-16c10ng", className7, classNames)} framer-3bbyhf`,
            "data-border": true,
            "data-framer-name": "Big",
            "data-highlight": true,
            layoutDependency,
            layoutId: "ZmCP_eD3_",
            onTap: onTaphj2y62,
            ref: refBinding,
            style: {
              "--border-bottom-width": (wN3STPwMb.borderBottomWidth ?? wN3STPwMb.borderWidth) + "px",
              "--border-color": wN3STPwMb.borderColor,
              "--border-left-width": (wN3STPwMb.borderLeftWidth ?? wN3STPwMb.borderWidth) + "px",
              "--border-right-width": (wN3STPwMb.borderRightWidth ?? wN3STPwMb.borderWidth) + "px",
              "--border-style": wN3STPwMb.borderStyle,
              "--border-top-width": (wN3STPwMb.borderTopWidth ?? wN3STPwMb.borderWidth) + "px",
              background: `radial-gradient(50% 50% at 50% 50%, ${RQDpSij6V} 0%, ${RQDpSij6V} 100%)`,
              backgroundColor: RQDpSij6V,
              borderBottomLeftRadius: radiusForCorner(KhVtTQLb4, 3),
              borderBottomRightRadius: radiusForCorner(KhVtTQLb4, 2),
              borderTopLeftRadius: radiusForCorner(KhVtTQLb4, 0),
              borderTopRightRadius: radiusForCorner(KhVtTQLb4, 1),
              ...style
            },
            variants: {
              bMRQAPM8x: {
                background: "radial-gradient(50% 50% at 50% 50%, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(10, 11, 10)) 0%, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(10, 11, 10)) 100%)",
                backgroundColor: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(10, 11, 10))"
              },
              coXNANDm3: {
                background: "radial-gradient(100% 100% at 100% 0%, var(--token-d40a5262-b4fe-45d5-9e97-61d735d1744e, rgb(255, 152, 0)) 0%, var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62)) 100%)",
                backgroundColor: "rgba(0, 0, 0, 0)",
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4
              },
              FbG4z2omJ: {
                backgroundColor: "rgba(0, 0, 0, 0)"
              },
              llZeWFj0E: {
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4
              },
              tLEpsRpVS: {
                background: "radial-gradient(50% 50% at 50% 50%, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(10, 11, 10)) 0%, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(10, 11, 10)) 100%)",
                backgroundColor: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(10, 11, 10))"
              }
            },
            ...addPropertyOverrides({
              "bHEcOt3us-hover": {
                "data-framer-name": void 0
              },
              "br7LBM8iN-hover": {
                "data-framer-name": void 0
              },
              "coXNANDm3-hover": {
                "data-framer-name": void 0
              },
              "llZeWFj0E-hover": {
                "data-framer-name": void 0
              },
              "tLEpsRpVS-hover": {
                "data-framer-name": void 0
              },
              "ZmCP_eD3_-hover": {
                "data-framer-name": void 0
              },
              bHEcOt3us: {
                "data-framer-name": "tiny"
              },
              bMRQAPM8x: {
                "data-framer-name": "Just Icon"
              },
              br7LBM8iN: {
                "data-framer-name": "huge"
              },
              coXNANDm3: {
                "data-framer-name": "small-gradient"
              },
              FbG4z2omJ: {
                "data-framer-name": "tiny stroke"
              },
              llZeWFj0E: {
                "data-framer-name": "Small"
              },
              tLEpsRpVS: {
                "data-framer-name": "Dark"
              }
            }, baseVariant, gestureVariant),
            children: [isDisplayed() && <HoKrrnQcM_default animated className="framer-1lw4bu5" layoutDependency={layoutDependency} layoutId="cfewrxkWn" style={{
              "--1335ju": 1.5,
              "--18mrqx2": "var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248))",
              "--3it368": 1
            }} />, isDisplayed1() && <RichText __fromCanvasComponent className="framer-1nfv7fv" data-framer-name="Join the waitlist" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="hoHhg6wtS" style={{
              "--extracted-r6o4lv": "var(--variable-reference-P7ZHYgc9n-yZBQGZIRL)",
              "--framer-paragraph-spacing": "0px",
              "--variable-reference-P7ZHYgc9n-yZBQGZIRL": P7ZHYgc9n,
              opacity: 1
            }} text={TiAMtDaz3} variants={{
              "bHEcOt3us-hover": {
                opacity: 1
              },
              "br7LBM8iN-hover": {
                opacity: 1
              },
              "coXNANDm3-hover": {
                opacity: 1
              },
              "llZeWFj0E-hover": {
                opacity: 0
              },
              "tLEpsRpVS-hover": {
                opacity: 0
              },
              bHEcOt3us: {
                "--extracted-r6o4lv": "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))"
              },
              br7LBM8iN: {
                "--extracted-a0htzi": "var(--variable-reference-P7ZHYgc9n-yZBQGZIRL)"
              },
              coXNANDm3: {
                "--extracted-r6o4lv": "var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248))"
              },
              tLEpsRpVS: {
                "--extracted-r6o4lv": "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))"
              }
            }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides({
              "bHEcOt3us-hover": {
                transformTemplate: transformTemplate1
              },
              "br7LBM8iN-hover": {
                transformTemplate: transformTemplate1
              },
              "coXNANDm3-hover": {
                transformTemplate: transformTemplate1
              },
              "llZeWFj0E-hover": {
                transformTemplate: transformTemplate1
              },
              "tLEpsRpVS-hover": {
                transformTemplate: transformTemplate1
              },
              "ZmCP_eD3_-hover": {
                transformTemplate: transformTemplate1
              },
              bHEcOt3us: {
                children: <React2.Fragment>{_jsx2(motion2.p, {
                    className: "framer-styles-preset-mnimbo",
                    "data-styles-preset": "QkI8Aa5rN",
                    style: {
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))"
                    },
                    children: "Join the waitlist"
                  })}</React2.Fragment>
              },
              br7LBM8iN: {
                children: <React2.Fragment>{_jsx2(motion2.h3, {
                    style: {
                      "--font-selector": "Q1VTVE9NVjI7SGFmZmVyIFJlZ3VsYXI=",
                      "--framer-font-family": '"Haffer Regular", sans-serif',
                      "--framer-font-size": "40px",
                      "--framer-font-weight": "430",
                      "--framer-line-height": "100%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-a0htzi, var(--variable-reference-P7ZHYgc9n-yZBQGZIRL))"
                    },
                    children: "Login"
                  })}</React2.Fragment>,
                fonts: ["CUSTOMV2;Haffer Regular"]
              },
              coXNANDm3: {
                children: <React2.Fragment>{_jsx2(motion2.p, {
                    className: "framer-styles-preset-mnimbo",
                    "data-styles-preset": "QkI8Aa5rN",
                    style: {
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)))"
                    },
                    children: "Login"
                  })}</React2.Fragment>
              },
              FbG4z2omJ: {
                children: <React2.Fragment>{_jsx2(motion2.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-font-size": "11px",
                      "--framer-line-height": "120%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-P7ZHYgc9n-yZBQGZIRL))",
                      "--framer-text-transform": "uppercase"
                    },
                    children: "Login"
                  })}</React2.Fragment>,
                fonts: ["CUSTOM;Haffer Regular"]
              },
              llZeWFj0E: {
                children: <React2.Fragment>{_jsx2(motion2.p, {
                    className: "framer-styles-preset-mnimbo",
                    "data-styles-preset": "QkI8Aa5rN",
                    style: {
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-P7ZHYgc9n-yZBQGZIRL))"
                    },
                    children: "Join the waitlist"
                  })}</React2.Fragment>
              },
              tLEpsRpVS: {
                children: <React2.Fragment>{_jsx2(motion2.p, {
                    className: "framer-styles-preset-mnimbo",
                    "data-styles-preset": "QkI8Aa5rN",
                    style: {
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))"
                    },
                    children: "Join the waitlist"
                  })}</React2.Fragment>
              }
            }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsx2(motion2.p, {
                  className: "framer-styles-preset-1ydx3rt",
                  "data-styles-preset": "YlBLAavU6",
                  style: {
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-P7ZHYgc9n-yZBQGZIRL))"
                  },
                  children: "Join the waitlist"
                })}</React2.Fragment>}</RichText>, <RichText __fromCanvasComponent className="framer-129t4kk" data-framer-name="Join the waitlist" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="KLzc6sfs7" style={{
              "--extracted-r6o4lv": "var(--variable-reference-P7ZHYgc9n-yZBQGZIRL)",
              "--framer-paragraph-spacing": "0px",
              "--variable-reference-P7ZHYgc9n-yZBQGZIRL": P7ZHYgc9n,
              opacity: 1
            }} text={TiAMtDaz3} transformTemplate={transformTemplate1} variants={{
              "bHEcOt3us-hover": {
                opacity: 1
              },
              "coXNANDm3-hover": {
                "--extracted-r6o4lv": "var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248))",
                opacity: 1
              },
              "llZeWFj0E-hover": {
                opacity: 1
              },
              "tLEpsRpVS-hover": {
                opacity: 1
              },
              "ZmCP_eD3_-hover": {
                opacity: 1
              },
              bHEcOt3us: {
                "--extracted-r6o4lv": "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))",
                opacity: 0
              },
              bMRQAPM8x: {
                "--extracted-r6o4lv": "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))",
                opacity: 0
              },
              br7LBM8iN: {
                "--extracted-a0htzi": "var(--variable-reference-P7ZHYgc9n-yZBQGZIRL)",
                opacity: 1
              },
              coXNANDm3: {
                opacity: 0
              },
              FbG4z2omJ: {
                "--extracted-r6o4lv": "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))",
                opacity: 0
              },
              llZeWFj0E: {
                opacity: 0
              },
              tLEpsRpVS: {
                "--extracted-r6o4lv": "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))",
                opacity: 0
              }
            }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides({
              "bHEcOt3us-hover": {
                transformTemplate: void 0
              },
              "br7LBM8iN-hover": {
                children: <React2.Fragment>{_jsx2(motion2.h3, {
                    style: {
                      "--font-selector": "Q1VTVE9NVjI7SGFmZmVyIFJlZ3VsYXI=",
                      "--framer-font-family": '"Haffer Regular", sans-serif',
                      "--framer-font-size": "40px",
                      "--framer-font-weight": "430",
                      "--framer-line-height": "100%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-a0htzi, var(--variable-reference-P7ZHYgc9n-yZBQGZIRL))"
                    },
                    children: "Login"
                  })}</React2.Fragment>,
                fonts: ["CUSTOMV2;Haffer Regular"],
                transformTemplate: void 0
              },
              "coXNANDm3-hover": {
                children: <React2.Fragment>{_jsx2(motion2.p, {
                    className: "framer-styles-preset-mnimbo",
                    "data-styles-preset": "QkI8Aa5rN",
                    style: {
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)))"
                    },
                    children: "Login"
                  })}</React2.Fragment>,
                transformTemplate: void 0
              },
              "llZeWFj0E-hover": {
                transformTemplate: void 0
              },
              "tLEpsRpVS-hover": {
                transformTemplate: void 0
              },
              "ZmCP_eD3_-hover": {
                transformTemplate: void 0
              },
              bHEcOt3us: {
                children: <React2.Fragment>{_jsx2(motion2.p, {
                    className: "framer-styles-preset-mnimbo",
                    "data-styles-preset": "QkI8Aa5rN",
                    style: {
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))"
                    },
                    children: "Join the waitlist"
                  })}</React2.Fragment>
              },
              bMRQAPM8x: {
                children: <React2.Fragment>{_jsx2(motion2.p, {
                    className: "framer-styles-preset-mnimbo",
                    "data-styles-preset": "QkI8Aa5rN",
                    style: {
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))"
                    },
                    children: "Join the waitlist"
                  })}</React2.Fragment>
              },
              br7LBM8iN: {
                children: <React2.Fragment>{_jsx2(motion2.h3, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                      "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                      "--framer-font-size": "40px",
                      "--framer-line-height": "100%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-a0htzi, var(--variable-reference-P7ZHYgc9n-yZBQGZIRL))"
                    },
                    children: "Login"
                  })}</React2.Fragment>,
                fonts: ["CUSTOM;Haffer Bold"]
              },
              coXNANDm3: {
                children: <React2.Fragment>{_jsx2(motion2.p, {
                    className: "framer-styles-preset-mnimbo",
                    "data-styles-preset": "QkI8Aa5rN",
                    style: {
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-P7ZHYgc9n-yZBQGZIRL))"
                    },
                    children: "Join the waitlist"
                  })}</React2.Fragment>
              },
              FbG4z2omJ: {
                children: <React2.Fragment>{_jsx2(motion2.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-font-size": "11px",
                      "--framer-line-height": "120%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))",
                      "--framer-text-transform": "uppercase"
                    },
                    children: "Login"
                  })}</React2.Fragment>,
                fonts: ["CUSTOM;Haffer Regular"]
              },
              llZeWFj0E: {
                children: <React2.Fragment>{_jsx2(motion2.p, {
                    className: "framer-styles-preset-mnimbo",
                    "data-styles-preset": "QkI8Aa5rN",
                    style: {
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-P7ZHYgc9n-yZBQGZIRL))"
                    },
                    children: "Join the waitlist"
                  })}</React2.Fragment>
              },
              tLEpsRpVS: {
                children: <React2.Fragment>{_jsx2(motion2.p, {
                    className: "framer-styles-preset-mnimbo",
                    "data-styles-preset": "QkI8Aa5rN",
                    style: {
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))"
                    },
                    children: "Join the waitlist"
                  })}</React2.Fragment>
              }
            }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsx2(motion2.p, {
                  className: "framer-styles-preset-1ydx3rt",
                  "data-styles-preset": "YlBLAavU6",
                  style: {
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-P7ZHYgc9n-yZBQGZIRL))"
                  },
                  children: "Join the waitlist"
                })}</React2.Fragment>}</RichText>]
          })}</Link>}</Transition>}</Variants>}</LayoutGroup>;
});
var css7 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-BsBK3.framer-3bbyhf, .framer-BsBK3 .framer-3bbyhf { display: block; }", ".framer-BsBK3.framer-16c10ng { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 12px 16px 12px 16px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-BsBK3 .framer-1lw4bu5 { flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }", ".framer-BsBK3 .framer-1nfv7fv { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-BsBK3 .framer-129t4kk { bottom: -23px; flex: none; height: auto; left: 50%; position: absolute; white-space: pre; width: auto; z-index: 1; }", ".framer-BsBK3.framer-v-1f8bjye.framer-16c10ng, .framer-BsBK3.framer-v-6stzd3.framer-16c10ng { padding: 12px; }", ".framer-BsBK3.framer-v-26utbf.framer-16c10ng, .framer-BsBK3.framer-v-nbkuw9.framer-16c10ng { padding: 4px 8px 4px 8px; }", ".framer-BsBK3.framer-v-mfbo2h.framer-16c10ng { padding: 24px 32px 24px 32px; }", ".framer-BsBK3.framer-v-mfbo2h .framer-129t4kk { bottom: -42px; }", ".framer-BsBK3.framer-v-19s4zot.framer-16c10ng { width: 48px; }", ".framer-BsBK3.framer-v-16c10ng.hover .framer-1nfv7fv { left: 50%; order: 1; position: absolute; top: -24px; z-index: 1; }", ".framer-BsBK3.framer-v-16c10ng.hover .framer-129t4kk { bottom: unset; left: unset; order: 2; position: relative; }", ".framer-BsBK3.framer-v-1f8bjye.hover .framer-1nfv7fv, .framer-BsBK3.framer-v-6stzd3.hover .framer-1nfv7fv { left: 50%; position: absolute; top: -24px; z-index: 1; }", ".framer-BsBK3.framer-v-1f8bjye.hover .framer-129t4kk, .framer-BsBK3.framer-v-j08lig.hover .framer-129t4kk, .framer-BsBK3.framer-v-26utbf.hover .framer-129t4kk, .framer-BsBK3.framer-v-6stzd3.hover .framer-129t4kk, .framer-BsBK3.framer-v-mfbo2h.hover .framer-129t4kk { bottom: unset; left: unset; position: relative; }", ".framer-BsBK3.framer-v-j08lig.hover.framer-16c10ng { padding: 11px 16px 12px 16px; }", ".framer-BsBK3.framer-v-j08lig.hover .framer-1nfv7fv { left: 50%; position: absolute; top: -17px; z-index: 1; }", ".framer-BsBK3.framer-v-26utbf.hover .framer-1nfv7fv { left: 50%; position: absolute; top: -22px; z-index: 1; }", ".framer-BsBK3.framer-v-mfbo2h.hover .framer-1nfv7fv { left: 50%; position: absolute; top: -45px; z-index: 1; }", ...css6, ...css5, '.framer-BsBK3[data-border="true"]::after, .framer-BsBK3 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }'];
var FrameryZBQGZIRL = withCSS2(Component2, css7, "framer-BsBK3");
var yZBQGZIRL_default = FrameryZBQGZIRL;
FrameryZBQGZIRL.displayName = "Button";
FrameryZBQGZIRL.defaultProps = {
  height: 45.5,
  width: 85
};
addPropertyControls2(FrameryZBQGZIRL, {
  variant: {
    options: ["ZmCP_eD3_", "llZeWFj0E", "tLEpsRpVS", "bHEcOt3us", "FbG4z2omJ", "coXNANDm3", "br7LBM8iN", "bMRQAPM8x"],
    optionTitles: ["Big", "Small", "Dark", "tiny", "tiny stroke", "small-gradient", "huge", "Just Icon"],
    title: "Variant",
    type: ControlType2.Enum
  },
  qzxtK1_9Y: {
    title: "Link",
    type: ControlType2.Link
  },
  TiAMtDaz3: {
    defaultValue: "Login",
    displayTextArea: false,
    title: "Title",
    type: ControlType2.String
  },
  RQDpSij6V: {
    defaultValue: 'var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(255, 59, 50))',
    title: "Background",
    type: ControlType2.Color
  },
  P7ZHYgc9n: {
    defaultValue: 'var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))',
    title: "Title Color",
    type: ControlType2.Color
  },
  du4PAlRaB: {
    title: "Click",
    type: ControlType2.EventHandler
  },
  wN3STPwMb: {
    defaultValue: {
      borderColor: 'var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))',
      borderStyle: "solid",
      borderWidth: 0
    },
    title: "Border",
    type: ControlType2.Border
  },
  KhVtTQLb4: {
    defaultValue: "4px",
    title: "Radius",
    type: ControlType2.BorderRadius
  }
});
addFonts(FrameryZBQGZIRL, [{
  explicitInter: true,
  fonts: [{
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
    url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
    weight: "400"
  }, {
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
    url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
    weight: "400"
  }, {
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+1F00-1FFF",
    url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
    weight: "400"
  }, {
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+0370-03FF",
    url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
    weight: "400"
  }, {
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
    url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
    weight: "400"
  }, {
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2",
    weight: "400"
  }, {
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
    url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
    weight: "400"
  }, {
    cssFamilyName: "Haffer Regular",
    source: "custom",
    style: "normal",
    uiFamilyName: "Haffer",
    url: "https://framerusercontent.com/assets/tAGQcvN09kwW2QjPLqLO197UqBQ.woff",
    weight: "430"
  }, {
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
  }]
}, ...ArrowRightFonts, ...getFontsFromSharedStyle(fonts5), ...getFontsFromSharedStyle(fonts4)], {
  supportsExplicitInterCodegen: true
});

// http-url:https://framerusercontent.com/modules/b4bNUYeFeMFtiv3tajVu/nPjufhtWtvydoNqljOxg/Uiq33N87W.js
var ButtonFonts = getFonts2(yZBQGZIRL_default);
var RichTextWithFXWithOptimizedAppearEffect = withOptimizedAppearEffect(withFX(RichText2));
var cycleOrder2 = ["lb0RxMr55", "W9p3QxUPk", "VkSn7kGfD", "W1ObH1llL"];
var serializationHash2 = "framer-HmAp8";
var variantClassNames2 = {
  lb0RxMr55: "framer-v-hor6ip",
  VkSn7kGfD: "framer-v-1a1doss",
  W1ObH1llL: "framer-v-ifkfn6",
  W9p3QxUPk: "framer-v-1lje9ty"
};
function addPropertyOverrides2(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach(variant => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition12 = {
  bounce: 0.2,
  delay: 0,
  duration: 0.4,
  type: "spring"
};
var toResponsiveImage = value => {
  if (typeof value === "object" && value !== null && typeof value.src === "string") {
    return value;
  }
  return typeof value === "string" ? {
    src: value
  } : void 0;
};
var animation = {
  opacity: 1,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  skewX: 0,
  skewY: 0,
  transition: transition12,
  x: 0,
  y: 0
};
var animation1 = {
  opacity: 1e-3,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  skewX: 0,
  skewY: 0,
  x: 0,
  y: 0
};
var Transition2 = ({
  value,
  children
}) => {
  const config = React3.useContext(MotionConfigContext2);
  const transition = value ?? config.transition;
  const contextValue = React3.useMemo(() => ({
    ...config,
    transition
  }), [JSON.stringify(transition)]);
  return <MotionConfigContext2.Provider value={contextValue}>{children}</MotionConfigContext2.Provider>;
};
var Variants2 = motion3.create(React3.Fragment);
var humanReadableVariantMap2 = {
  "primary front": "lb0RxMr55",
  "tablet back": "W1ObH1llL",
  "tablet front": "VkSn7kGfD",
  "Variant 3": "W9p3QxUPk"
};
var getProps3 = ({
  bio,
  click,
  height,
  id,
  link,
  name1,
  pic,
  role,
  width,
  ...props
}) => {
  return {
    ...props,
    AdqzABu7s: click ?? props.AdqzABu7s,
    mq3ZFyruO: link ?? props.mq3ZFyruO,
    mSV1Cy9OQ: bio ?? props.mSV1Cy9OQ ?? "A seasoned investment banker, discovered his passion for e-biking while living in Brooklyn. Justin joined Vela, a Sao Paulo-based e-bike manufacturer, as CEO in 2020. Justin moved Vela\u2019s primary manufacturing to Detroit in 2022 to ensure reliable supply lines. Inspired by collaboration at Brooklyn Newlab and the Michigan Central incubator, Justin partnered with Chris Nolte in 2023 to found Bloom, optimizing logistics and fostering domestic production to raise industry standards.",
    NuYJweThp: pic ?? props.NuYJweThp ?? {
      pixelHeight: 241,
      pixelWidth: 241,
      src: "https://framerusercontent.com/images/N5cGzQfx1UCAOOUPGVZBtylfK0.png?width=241&height=241"
    },
    Q6MRFnGBV: name1 ?? props.Q6MRFnGBV ?? "Justin \nKosmides",
    RHVU0_UK3: role ?? props.RHVU0_UK3 ?? "Role,\nRole",
    variant: humanReadableVariantMap2[props.variant] ?? props.variant ?? "lb0RxMr55"
  };
};
var createLayoutDependency2 = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component3 = React3.forwardRef(function (props, ref) {
  const fallbackRef = useRef2(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React3.useId();
  const {
    activeLocale,
    setLocale
  } = useLocaleInfo2();
  const componentViewport = useComponentViewport2();
  const {
    style,
    className: className7,
    layoutId,
    variant,
    NuYJweThp,
    Q6MRFnGBV,
    RHVU0_UK3,
    mq3ZFyruO,
    mSV1Cy9OQ,
    AdqzABu7s,
    ...restProps
  } = getProps3(props);
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
  } = useVariantState2({
    cycleOrder: cycleOrder2,
    defaultVariant: "lb0RxMr55",
    ref: refBinding,
    variant,
    variantClassNames: variantClassNames2
  });
  const layoutDependency = createLayoutDependency2(props, variants);
  const {
    activeVariantCallback,
    delay
  } = useActiveVariantCallback2(baseVariant);
  const onTap4tn9l6 = activeVariantCallback(async (...args) => {
    setGestureState({
      isPressed: false
    });
    if (AdqzABu7s) {
      const res = await AdqzABu7s(...args);
      if (res === false) return false;
    }
  });
  const du4PAlRaB13mncjf = activeVariantCallback(async (...args) => {
    setVariant("W9p3QxUPk");
  });
  const du4PAlRaBlxurr0 = activeVariantCallback(async (...args) => {
    setVariant("W1ObH1llL");
  });
  const du4PAlRaBda3c1i = activeVariantCallback(async (...args) => {
    setVariant("VkSn7kGfD");
  });
  const du4PAlRaBz48lvv = activeVariantCallback(async (...args) => {
    setVariant("lb0RxMr55");
  });
  const sharedStyleClassNames = [className3];
  const scopingClassNames = cx3(serializationHash2, ...sharedStyleClassNames);
  return <LayoutGroup2 id={layoutId ?? defaultLayoutId}>{<Variants2 animate={variants} initial={false}>{<Transition2 value={transition12}>{_jsxs2(motion3.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx3(scopingClassNames, "framer-hor6ip", className7, classNames),
          "data-framer-name": "primary front",
          "data-highlight": true,
          layoutDependency,
          layoutId: "lb0RxMr55",
          onTap: onTap4tn9l6,
          ref: refBinding,
          style: {
            backgroundColor: "var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248))",
            ...style
          },
          ...addPropertyOverrides2({
            VkSn7kGfD: {
              "data-framer-name": "tablet front"
            },
            W1ObH1llL: {
              "data-framer-name": "tablet back"
            },
            W9p3QxUPk: {
              "data-framer-name": "Variant 3"
            }
          }, baseVariant, gestureVariant),
          children: [_jsxs2(motion3.div, {
            className: "framer-1a9a98p",
            "data-framer-name": "top",
            layoutDependency,
            layoutId: "Obz1LTIpL",
            children: [<Image background={{
              alt: "",
              fit: "fill",
              intrinsicHeight: 240.5,
              intrinsicWidth: 240.5,
              loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 20 + 0 + 0 + 0),
              pixelHeight: 481,
              pixelWidth: 481,
              sizes: "150px",
              ...toResponsiveImage(NuYJweThp),
              ...{
                positionX: "center",
                positionY: "center"
              }
            }} className="framer-1b39o7q" data-border data-framer-name="Image" layoutDependency={layoutDependency} layoutId="HxNCUgajP" style={{
              "--border-bottom-width": "2px",
              "--border-color": "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))",
              "--border-left-width": "2px",
              "--border-right-width": "2px",
              "--border-style": "solid",
              "--border-top-width": "2px"
            }} {...addPropertyOverrides2({
              VkSn7kGfD: {
                background: {
                  alt: "",
                  fit: "fill",
                  intrinsicHeight: 240.5,
                  intrinsicWidth: 240.5,
                  loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 12 + 0 + 0),
                  pixelHeight: 481,
                  pixelWidth: 481,
                  sizes: "100px",
                  ...toResponsiveImage(NuYJweThp),
                  ...{
                    positionX: "center",
                    positionY: "center"
                  }
                }
              },
              W1ObH1llL: {
                background: {
                  alt: "",
                  fit: "fill",
                  intrinsicHeight: 240.5,
                  intrinsicWidth: 240.5,
                  loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + -140 + 0),
                  pixelHeight: 481,
                  pixelWidth: 481,
                  sizes: "100px",
                  ...toResponsiveImage(NuYJweThp),
                  ...{
                    positionX: "center",
                    positionY: "center"
                  }
                }
              },
              W9p3QxUPk: {
                background: {
                  alt: "",
                  fit: "fill",
                  intrinsicHeight: 240.5,
                  intrinsicWidth: 240.5,
                  loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + -160 + 0 + 0),
                  pixelHeight: 481,
                  pixelWidth: 481,
                  sizes: "150px",
                  ...toResponsiveImage(NuYJweThp),
                  ...{
                    positionX: "center",
                    positionY: "center"
                  }
                }
              }
            }, baseVariant, gestureVariant)} />, _jsxs2(motion3.div, {
              className: "framer-1ajz80m",
              layoutDependency,
              layoutId: "UsRPOvbKh",
              children: [_jsxs2(motion3.div, {
                className: "framer-xajnsw",
                layoutDependency,
                layoutId: "ofDKXZG6T",
                children: [_jsx3(motion3.div, {
                  className: "framer-1b6rqn4",
                  layoutDependency,
                  layoutId: "tpY0Cn7kn",
                  children: <RichText2 __fromCanvasComponent className="framer-dymof4" data-framer-name="Heading5" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="RsFSFATo6" style={{
                    "--extracted-14bv5g2": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                    "--extracted-as4nhg": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                    "--framer-paragraph-spacing": "0px"
                  }} text={Q6MRFnGBV} variants={{
                    VkSn7kGfD: {
                      "--extracted-1eung3n": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
                    },
                    W1ObH1llL: {
                      "--extracted-1eung3n": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
                    }
                  }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides2({
                    VkSn7kGfD: {
                      children: <React3.Fragment>{_jsxs2(motion3.h4, {
                          style: {
                            "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                            "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                            "--framer-font-size": "20px",
                            "--framer-line-height": "100%",
                            "--framer-text-alignment": "left",
                            "--framer-text-color": "var(--extracted-1eung3n, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                          },
                          children: ["Justin ", _jsx3(motion3.br, {}), "Kosmides"]
                        })}</React3.Fragment>,
                      fonts: ["CUSTOM;Haffer Regular"]
                    },
                    W1ObH1llL: {
                      children: <React3.Fragment>{_jsxs2(motion3.h4, {
                          style: {
                            "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                            "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                            "--framer-font-size": "24px",
                            "--framer-line-height": "100%",
                            "--framer-text-alignment": "left",
                            "--framer-text-color": "var(--extracted-1eung3n, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                          },
                          children: ["Justin ", _jsx3(motion3.br, {}), "Kosmides"]
                        })}</React3.Fragment>,
                      fonts: ["CUSTOM;Haffer Bold"]
                    }
                  }, baseVariant, gestureVariant)}>{<React3.Fragment>{_jsxs2(motion3.h5, {
                        className: "framer-styles-preset-1e98430",
                        "data-styles-preset": "z4Urx0kPV",
                        style: {
                          "--framer-text-alignment": "left"
                        },
                        children: [_jsx3(motion3.span, {
                          style: {
                            "--framer-text-color": "var(--extracted-as4nhg, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                          },
                          children: "Justin "
                        }), _jsx3(motion3.br, {}), _jsx3(motion3.span, {
                          style: {
                            "--framer-text-color": "var(--extracted-14bv5g2, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                          },
                          children: "Kosmides"
                        })]
                      })}</React3.Fragment>}</RichText2>
                }), <RichText2 __fromCanvasComponent className="framer-131fmk5" data-framer-name="Subtitle2" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="z70XpDjBt" style={{
                  "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                  "--framer-paragraph-spacing": "0px"
                }} text={RHVU0_UK3} verticalAlignment="top" withExternalLayout {...addPropertyOverrides2({
                  VkSn7kGfD: {
                    children: <React3.Fragment>{_jsxs2(motion3.p, {
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                          "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                          "--framer-font-size": "10px",
                          "--framer-line-height": "100%",
                          "--framer-text-alignment": "left",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                        },
                        children: [_jsx3(motion3.span, {
                          style: {
                            "--framer-font-size": "12px"
                          },
                          children: "Role,"
                        }), _jsx3(motion3.span, {
                          style: {
                            "--framer-font-size": "12px"
                          },
                          children: _jsx3(motion3.br, {})
                        }), _jsx3(motion3.span, {
                          style: {
                            "--framer-font-size": "12px"
                          },
                          children: "Role"
                        })]
                      })}</React3.Fragment>
                  },
                  W1ObH1llL: {
                    children: <React3.Fragment>{_jsxs2(motion3.p, {
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                          "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                          "--framer-font-size": "9px",
                          "--framer-line-height": "120%",
                          "--framer-text-alignment": "left",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                        },
                        children: [_jsx3(motion3.span, {
                          style: {
                            "--framer-font-size": "10px"
                          },
                          children: "Role,"
                        }), _jsx3(motion3.span, {
                          style: {
                            "--framer-font-size": "10px"
                          },
                          children: _jsx3(motion3.br, {})
                        }), _jsx3(motion3.span, {
                          style: {
                            "--framer-font-size": "10px"
                          },
                          children: "Role"
                        })]
                      })}</React3.Fragment>
                  }
                }, baseVariant, gestureVariant)}>{<React3.Fragment>{_jsx3(motion3.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "13px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "left",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                      },
                      children: "CO-FOUNDER, CHIEF EXECUTIVE OFFICER"
                    })}</React3.Fragment>}</RichText2>]
              }), _jsxs2(motion3.div, {
                className: "framer-vvr8p7",
                layoutDependency,
                layoutId: "Y3Ozc9fvG",
                children: [<Link2 href={mq3ZFyruO} motionChild nodeId="Ew_1ChfFP" scopeId="Uiq33N87W">{_jsx3(motion3.a, {
                    className: "framer-zgzfl4 framer-d539dj",
                    layoutDependency,
                    layoutId: "Ew_1ChfFP",
                    children: <SVG2 className="framer-tiju0m" data-framer-name="Graphic" layout="position" layoutDependency={layoutDependency} layoutId="nVGWio2Q0" opacity={1} style={{
                      backgroundColor: "rgba(0, 0, 0, 0)"
                    }} svg={__svg_3} svgContentId={10161535335} withExternalLayout {...addPropertyOverrides2({
                      VkSn7kGfD: {
                        svg: __svg_2,
                        svgContentId: 9631316729
                      }
                    }, baseVariant, gestureVariant)} />
                  })}</Link2>, <ComponentViewportProvider height={45} y={(componentViewport?.y || 0) + 20 + 0 + 0 + 0 + 0 + 105 + 0} {...addPropertyOverrides2({
                  VkSn7kGfD: {
                    y: (componentViewport?.y || 0) + 12 + 0 + 0 + 0 + 55 + 0
                  },
                  W1ObH1llL: {
                    y: (componentViewport?.y || 0) + -140 + 0 + 0 + 55 + 0
                  },
                  W9p3QxUPk: {
                    y: (componentViewport?.y || 0) + -160 + 0 + 0 + 0 + 105 + 0
                  }
                }, baseVariant, gestureVariant)}>{<SmartComponentScopedContainer className="framer-p251py-container" layoutDependency={layoutDependency} layoutId="BRzM9N41W-container" nodeId="BRzM9N41W" rendersWithMotion scopeId="Uiq33N87W">{_jsx3(yZBQGZIRL_default, {
                      du4PAlRaB: du4PAlRaB13mncjf,
                      height: "100%",
                      id: "BRzM9N41W",
                      layoutId: "BRzM9N41W",
                      P7ZHYgc9n: "var(--token-2ae4d622-3758-4fad-a56d-08fa00cc7638, rgb(173, 173, 199))",
                      RQDpSij6V: "rgba(173, 173, 199, 0)",
                      TiAMtDaz3: "Bio",
                      variant: "FbG4z2omJ",
                      width: "100%",
                      wN3STPwMb: {
                        borderColor: "var(--token-2ae4d622-3758-4fad-a56d-08fa00cc7638, rgb(173, 173, 199))",
                        borderStyle: "solid",
                        borderWidth: 1.3
                      },
                      ...addPropertyOverrides2({
                        VkSn7kGfD: {
                          du4PAlRaB: du4PAlRaBlxurr0
                        },
                        W1ObH1llL: {
                          du4PAlRaB: du4PAlRaBda3c1i
                        }
                      }, baseVariant, gestureVariant)
                    })}</SmartComponentScopedContainer>}</ComponentViewportProvider>]
              })]
            })]
          }), _jsxs2(motion3.div, {
            className: "framer-1jbo8dx",
            "data-framer-name": "bottom",
            layoutDependency,
            layoutId: "ga0cwLmxF",
            children: [<RichTextWithFXWithOptimizedAppearEffect __fromCanvasComponent __perspectiveFX={false} __smartComponentFX __targetOpacity={1} animate={animation} className="framer-1ry9mb2" data-framer-appear-id="1ry9mb2" fonts={["CUSTOM;Haffer Regular"]} initial={animation1} layoutDependency={layoutDependency} layoutId="xG_P97nls" optimized style={{
              "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
              "--framer-link-text-color": "rgb(0, 153, 255)",
              "--framer-link-text-decoration": "underline"
            }} text={mSV1Cy9OQ} verticalAlignment="top" withExternalLayout>{<React3.Fragment>{_jsx3(motion3.p, {
                  style: {
                    "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                    "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                    "--framer-font-size": "14px",
                    "--framer-line-height": "140%",
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                  },
                  children: "A seasoned investment banker, discovered his passion for e-biking while living in Brooklyn. Justin joined Vela, a Sao Paulo-based e-bike manufacturer, as CEO in 2020. Justin moved Vela\u2019s primary manufacturing to Detroit in 2022 to ensure reliable supply lines. Inspired by collaboration at Brooklyn Newlab and the Michigan Central incubator, Justin partnered with Chris Nolte in 2023 to found Bloom, optimizing logistics and fostering domestic production to raise industry standards."
                })}</React3.Fragment>}</RichTextWithFXWithOptimizedAppearEffect>, _jsx3(motion3.div, {
              className: "framer-56q22z",
              "data-framer-name": "close",
              layoutDependency,
              layoutId: "qGVctKkFZ",
              children: <ComponentViewportProvider height={45} y={(componentViewport?.y || 0) + 199 + 0 + 108 + 0} {...addPropertyOverrides2({
                VkSn7kGfD: {
                  y: (componentViewport?.y || 0) + 134.75 + 0 + 108 + 0
                },
                W1ObH1llL: {
                  y: (componentViewport?.y || 0) + 16 + 0 + 0 + 108 + 0
                },
                W9p3QxUPk: {
                  y: (componentViewport?.y || 0) + 20 + 0 + 0 + 108 + 0
                }
              }, baseVariant, gestureVariant)}>{<SmartComponentScopedContainer className="framer-1vrvwmp-container" layoutDependency={layoutDependency} layoutId="x43WzDob4-container" nodeId="x43WzDob4" rendersWithMotion scopeId="Uiq33N87W">{_jsx3(yZBQGZIRL_default, {
                    height: "100%",
                    id: "x43WzDob4",
                    layoutId: "x43WzDob4",
                    P7ZHYgc9n: "var(--token-2ae4d622-3758-4fad-a56d-08fa00cc7638, rgb(173, 173, 199))",
                    RQDpSij6V: "var(--token-2ae4d622-3758-4fad-a56d-08fa00cc7638, rgb(173, 173, 199))",
                    TiAMtDaz3: "Close",
                    variant: "FbG4z2omJ",
                    width: "100%",
                    wN3STPwMb: {
                      borderColor: "var(--token-2ae4d622-3758-4fad-a56d-08fa00cc7638, rgb(173, 173, 199))",
                      borderStyle: "solid",
                      borderWidth: 2
                    },
                    ...addPropertyOverrides2({
                      VkSn7kGfD: {
                        wN3STPwMb: {
                          borderColor: "var(--token-2ae4d622-3758-4fad-a56d-08fa00cc7638, rgb(173, 173, 199))",
                          borderStyle: "solid",
                          borderWidth: 1.3
                        }
                      },
                      W1ObH1llL: {
                        du4PAlRaB: du4PAlRaBda3c1i,
                        RQDpSij6V: "rgba(173, 173, 199, 0)",
                        wN3STPwMb: {
                          borderColor: "var(--token-2ae4d622-3758-4fad-a56d-08fa00cc7638, rgb(173, 173, 199))",
                          borderStyle: "solid",
                          borderWidth: 1.3
                        }
                      },
                      W9p3QxUPk: {
                        du4PAlRaB: du4PAlRaBz48lvv,
                        RQDpSij6V: "rgba(173, 173, 199, 0)",
                        wN3STPwMb: {
                          borderColor: "var(--token-2ae4d622-3758-4fad-a56d-08fa00cc7638, rgb(173, 173, 199))",
                          borderStyle: "solid",
                          borderWidth: 1.3
                        }
                      }
                    }, baseVariant, gestureVariant)
                  })}</SmartComponentScopedContainer>}</ComponentViewportProvider>
            })]
          })]
        })}</Transition2>}</Variants2>}</LayoutGroup2>;
});
var css8 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-HmAp8.framer-d539dj, .framer-HmAp8 .framer-d539dj { display: block; }", ".framer-HmAp8.framer-hor6ip { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 20px; position: relative; width: 420px; }", ".framer-HmAp8 .framer-1a9a98p { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-HmAp8 .framer-1b39o7q { flex: none; height: 150px; overflow: visible; position: relative; width: 150px; }", ".framer-HmAp8 .framer-1ajz80m { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: auto; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 1px; }", ".framer-HmAp8 .framer-xajnsw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-HmAp8 .framer-1b6rqn4, .framer-HmAp8 .framer-vvr8p7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-HmAp8 .framer-dymof4 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }", ".framer-HmAp8 .framer-131fmk5, .framer-HmAp8 .framer-1ry9mb2 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-HmAp8 .framer-zgzfl4 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 1px; }", ".framer-HmAp8 .framer-tiju0m { flex: none; height: 20px; position: relative; width: 20px; }", ".framer-HmAp8 .framer-p251py-container, .framer-HmAp8 .framer-1vrvwmp-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-HmAp8 .framer-1jbo8dx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 20px; overflow: visible; padding: 0px; position: absolute; top: 199px; width: 380px; z-index: 1; }", ".framer-HmAp8 .framer-56q22z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }", ".framer-HmAp8.framer-v-1lje9ty.framer-hor6ip { gap: 10px; }", ".framer-HmAp8.framer-v-1lje9ty .framer-1a9a98p { left: 20px; order: 0; position: absolute; top: -160px; width: 380px; z-index: 1; }", ".framer-HmAp8.framer-v-1lje9ty .framer-1jbo8dx, .framer-HmAp8.framer-v-ifkfn6 .framer-1jbo8dx { flex-wrap: wrap; left: unset; order: 1; position: relative; top: unset; width: 100%; }", ".framer-HmAp8.framer-v-1a1doss.framer-hor6ip { align-content: center; align-items: center; padding: 12px; width: 290px; }", ".framer-HmAp8.framer-v-1a1doss .framer-1a9a98p { align-content: flex-start; align-items: flex-start; }", ".framer-HmAp8.framer-v-1a1doss .framer-1b39o7q, .framer-HmAp8.framer-v-ifkfn6 .framer-1b39o7q { height: 100px; width: 100px; }", ".framer-HmAp8.framer-v-1a1doss .framer-xajnsw { gap: 2px; }", ".framer-HmAp8.framer-v-1a1doss .framer-tiju0m { height: 16px; width: 16px; }", ".framer-HmAp8.framer-v-1a1doss .framer-1jbo8dx { left: 12px; top: 135px; width: 267px; }", ".framer-HmAp8.framer-v-ifkfn6.framer-hor6ip { gap: 10px; padding: 16px; width: 290px; }", ".framer-HmAp8.framer-v-ifkfn6 .framer-1a9a98p { align-content: flex-start; align-items: flex-start; left: 12px; order: 0; overflow: hidden; position: absolute; top: -140px; width: 251px; z-index: 1; }", ...css3, '.framer-HmAp8[data-border="true"]::after, .framer-HmAp8 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'];
var FramerUiq33N87W = withCSS3(Component3, css8, "framer-HmAp8");
var Uiq33N87W_default = FramerUiq33N87W;
FramerUiq33N87W.displayName = "team member card";
FramerUiq33N87W.defaultProps = {
  height: 190,
  width: 420
};
addPropertyControls3(FramerUiq33N87W, {
  variant: {
    options: ["lb0RxMr55", "W9p3QxUPk", "VkSn7kGfD", "W1ObH1llL"],
    optionTitles: ["primary front", "Variant 3", "tablet front", "tablet back"],
    title: "Variant",
    type: ControlType3.Enum
  },
  NuYJweThp: {
    __defaultAssetReference: "data:framer/asset-reference,N5cGzQfx1UCAOOUPGVZBtylfK0.png?originalFilename=Justin-Newlab-819x1024+1.png&preferredSize=auto",
    title: "pic",
    type: ControlType3.ResponsiveImage
  },
  Q6MRFnGBV: {
    defaultValue: "Justin \nKosmides",
    description: "First and Last Name",
    displayTextArea: true,
    title: "Name",
    type: ControlType3.String
  },
  RHVU0_UK3: {
    defaultValue: "Role,\nRole",
    description: "Member Role",
    displayTextArea: true,
    title: "Role",
    type: ControlType3.String
  },
  mq3ZFyruO: {
    description: "linkedin link",
    title: "link",
    type: ControlType3.Link
  },
  mSV1Cy9OQ: {
    defaultValue: "A seasoned investment banker, discovered his passion for e-biking while living in Brooklyn. Justin joined Vela, a Sao Paulo-based e-bike manufacturer, as CEO in 2020. Justin moved Vela\u2019s primary manufacturing to Detroit in 2022 to ensure reliable supply lines. Inspired by collaboration at Brooklyn Newlab and the Michigan Central incubator, Justin partnered with Chris Nolte in 2023 to found Bloom, optimizing logistics and fostering domestic production to raise industry standards.",
    displayTextArea: true,
    title: "Bio",
    type: ControlType3.String
  },
  AdqzABu7s: {
    title: "Click",
    type: ControlType3.EventHandler
  }
});
addFonts2(FramerUiq33N87W, [{
  explicitInter: true,
  fonts: [{
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
    url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
    weight: "400"
  }, {
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
    url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
    weight: "400"
  }, {
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+1F00-1FFF",
    url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
    weight: "400"
  }, {
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+0370-03FF",
    url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
    weight: "400"
  }, {
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
    url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
    weight: "400"
  }, {
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2",
    weight: "400"
  }, {
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
    url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
    weight: "400"
  }, {
    cssFamilyName: "Haffer Regular",
    source: "custom",
    uiFamilyName: "Haffer Regular",
    url: "https://framerusercontent.com/assets/tAGQcvN09kwW2QjPLqLO197UqBQ.woff"
  }, {
    cssFamilyName: "Haffer Bold",
    source: "custom",
    uiFamilyName: "Haffer Bold",
    url: "https://framerusercontent.com/assets/eRqmC6W9PktN8mUcnwel9B6wmPs.woff"
  }]
}, ...ButtonFonts, ...getFontsFromSharedStyle2(fonts3)], {
  supportsExplicitInterCodegen: true
});

// http-url:https://framerusercontent.com/modules/SlKNGR3e1DOVXrX5qFtx/PQRHgUBEy45sTVpbizbP/VG4Cdi1PG.js
import { jsx as _jsx4, jsxs as _jsxs3 } from "react/jsx-runtime";
import { addFonts as addFonts3, addPropertyControls as addPropertyControls4, ControlType as ControlType4, cx as cx4, getFontsFromSharedStyle as getFontsFromSharedStyle3, getLoadingLazyAtYPosition as getLoadingLazyAtYPosition2, Image as Image2, RichText as RichText3, useActiveVariantCallback as useActiveVariantCallback3, useComponentViewport as useComponentViewport3, useLocaleInfo as useLocaleInfo3, useVariantState as useVariantState3, withCSS as withCSS4 } from "@proofly-framer/runtime";
import { LayoutGroup as LayoutGroup3, motion as motion4, MotionConfigContext as MotionConfigContext3 } from "@proofly-framer/runtime";
import * as React4 from "react";

// http-url:https://framerusercontent.com/modules/4Gv6O9WcEjYFF3D7KrRp/D2m1QMhoIrhAelQp8PSY/mBypMumWB.js
import { fontStore as fontStore6 } from "@proofly-framer/runtime";
import { jsx as _ctxJsx } from "react/jsx-runtime";
import { ContextProviders, useVariant } from "@proofly-framer/runtime";
fontStore6.loadFonts(["CUSTOM;Haffer Bold"]);
var fonts6 = [{
  explicitInter: true,
  fonts: [{
    family: "Haffer Bold",
    source: "custom",
    url: "https://framerusercontent.com/assets/eRqmC6W9PktN8mUcnwel9B6wmPs.woff"
  }]
}];
var css9 = ['.framer-RGOBY .framer-styles-preset-r2slzk:not(.rich-text-wrapper), .framer-RGOBY .framer-styles-preset-r2slzk.rich-text-wrapper h4 { --framer-font-family: "Haffer Bold", "Haffer Bold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 30px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 100%; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }', '@media (max-width: 1279px) and (min-width: 768px) { .framer-RGOBY .framer-styles-preset-r2slzk:not(.rich-text-wrapper), .framer-RGOBY .framer-styles-preset-r2slzk.rich-text-wrapper h4 { --framer-font-family: "Haffer Bold", "Haffer Bold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 28px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 100%; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }', '@media (max-width: 767px) and (min-width: 0px) { .framer-RGOBY .framer-styles-preset-r2slzk:not(.rich-text-wrapper), .framer-RGOBY .framer-styles-preset-r2slzk.rich-text-wrapper h4 { --framer-font-family: "Haffer Bold", "Haffer Bold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 100%; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }'];
var className6 = "framer-RGOBY";

// http-url:https://framerusercontent.com/modules/SlKNGR3e1DOVXrX5qFtx/PQRHgUBEy45sTVpbizbP/VG4Cdi1PG.js
var enabledGestures2 = {
  nNgDQrwry: {
    hover: true,
    pressed: true
  }
};
var serializationHash3 = "framer-z0xyd";
var variantClassNames3 = {
  nNgDQrwry: "framer-v-rop6p0"
};
function addPropertyOverrides3(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach(variant => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition13 = {
  bounce: 0.2,
  delay: 0,
  duration: 0.4,
  type: "spring"
};
var toResponsiveImage2 = value => {
  if (typeof value === "object" && value !== null && typeof value.src === "string") {
    return value;
  }
  return typeof value === "string" ? {
    src: value
  } : void 0;
};
var Transition3 = ({
  value,
  children
}) => {
  const config = React4.useContext(MotionConfigContext3);
  const transition = value ?? config.transition;
  const contextValue = React4.useMemo(() => ({
    ...config,
    transition
  }), [JSON.stringify(transition)]);
  return <MotionConfigContext3.Provider value={contextValue}>{children}</MotionConfigContext3.Provider>;
};
var getProps4 = ({
  click,
  height,
  id,
  name1,
  picture,
  role,
  width,
  ...props
}) => {
  return {
    ...props,
    JXB6Jd6G9: click ?? props.JXB6Jd6G9,
    RFjLBCnQo: picture ?? props.RFjLBCnQo ?? {
      src: "https://framerusercontent.com/images/OdNHS7cE8IyL65pIQiXWJ6J23wA.png"
    },
    SwCKgp6TX: role ?? props.SwCKgp6TX ?? "CO-FOUNDER, PRESIDENT",
    w4hMM9O64: name1 ?? props.w4hMM9O64 ?? "Chris Nolte"
  };
};
var createLayoutDependency3 = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Variants3 = motion4.create(React4.Fragment);
var Component4 = React4.forwardRef(function (props, ref) {
  const {
    activeLocale,
    setLocale
  } = useLocaleInfo3();
  const {
    style,
    className: className7,
    layoutId,
    variant,
    w4hMM9O64,
    SwCKgp6TX,
    RFjLBCnQo,
    JXB6Jd6G9,
    ...restProps
  } = getProps4(props);
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
  } = useVariantState3({
    defaultVariant: "nNgDQrwry",
    enabledGestures: enabledGestures2,
    variant,
    variantClassNames: variantClassNames3
  });
  const layoutDependency = createLayoutDependency3(props, variants);
  const {
    activeVariantCallback,
    delay
  } = useActiveVariantCallback3(baseVariant);
  const onTapfgewhd = activeVariantCallback(async (...args) => {
    setGestureState({
      isPressed: false
    });
    if (JXB6Jd6G9) {
      const res = await JXB6Jd6G9(...args);
      if (res === false) return false;
    }
  });
  const sharedStyleClassNames = [className6];
  const scopingClassNames = cx4(serializationHash3, ...sharedStyleClassNames);
  const ref1 = React4.useRef(null);
  const defaultLayoutId = React4.useId();
  const componentViewport = useComponentViewport3();
  return <LayoutGroup3 id={layoutId ?? defaultLayoutId}>{<Variants3 animate={variants} initial={false}>{<Transition3 value={transition13}>{_jsxs3(motion4.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx4(scopingClassNames, "framer-rop6p0", className7, classNames),
          "data-framer-name": "Variant 1",
          "data-highlight": true,
          layoutDependency,
          layoutId: "nNgDQrwry",
          onTap: onTapfgewhd,
          ref: ref ?? ref1,
          style: {
            backgroundColor: "var(--token-7ce68db9-0723-4469-83ef-663a6e703840, rgb(43, 43, 61))",
            ...style
          },
          variants: {
            "nNgDQrwry-hover": {
              backgroundColor: "var(--token-8b7bf222-cf23-422b-9349-f0eb5832be6f, rgb(18, 9, 174))"
            },
            "nNgDQrwry-pressed": {
              backgroundColor: "var(--token-8b7bf222-cf23-422b-9349-f0eb5832be6f, rgb(18, 9, 174))"
            }
          },
          ...addPropertyOverrides3({
            "nNgDQrwry-hover": {
              "data-framer-name": void 0
            },
            "nNgDQrwry-pressed": {
              "data-framer-name": void 0
            }
          }, baseVariant, gestureVariant),
          children: [<Image2 background={{
            alt: "",
            fit: "fill",
            intrinsicHeight: 240.5,
            intrinsicWidth: 240.5,
            loading: getLoadingLazyAtYPosition2((componentViewport?.y || 0) + 0 + (((componentViewport?.height || 235.5) - 0 - 298) / 2 + 0 + 0)),
            pixelHeight: 481,
            pixelWidth: 481,
            sizes: componentViewport?.width || "100vw",
            ...toResponsiveImage2(RFjLBCnQo),
            ...{
              positionX: "center",
              positionY: "center"
            }
          }} className="framer-1vfqdx4" data-framer-name="Image" layoutDependency={layoutDependency} layoutId="yAIyCseMb" />, _jsxs3(motion4.div, {
            className: "framer-2lzihm",
            "data-framer-name": "name",
            layoutDependency,
            layoutId: "wkmqaSAPq",
            children: [<RichText3 __fromCanvasComponent className="framer-62fr4f" data-framer-name="Heading5" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="YEhq8UvdF" style={{
              "--framer-paragraph-spacing": "0px"
            }} text={w4hMM9O64} verticalAlignment="top" withExternalLayout>{<React4.Fragment>{_jsxs3(motion4.h4, {
                  className: "framer-styles-preset-r2slzk",
                  "data-styles-preset": "mBypMumWB",
                  children: ["Chris ", _jsx4(motion4.br, {}), "Nolte"]
                })}</React4.Fragment>}</RichText3>, <RichText3 __fromCanvasComponent className="framer-1up00ns" data-framer-name="Subtitle2" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="yrVOStfJF" style={{
              "--extracted-r6o4lv": "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(224, 224, 255))",
              "--framer-paragraph-spacing": "0px"
            }} text={SwCKgp6TX} verticalAlignment="top" withExternalLayout>{<React4.Fragment>{_jsx4(motion4.p, {
                  style: {
                    "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                    "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                    "--framer-font-size": "13px",
                    "--framer-line-height": "120%",
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(224, 224, 255)))"
                  },
                  children: "CO-FOUNDER, PRESIDENT"
                })}</React4.Fragment>}</RichText3>]
          })]
        })}</Transition3>}</Variants3>}</LayoutGroup3>;
});
var css10 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-z0xyd.framer-aa850j, .framer-z0xyd .framer-aa850j { display: block; }", ".framer-z0xyd.framer-rop6p0 { align-content: flex-end; align-items: flex-end; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 199px; }", ".framer-z0xyd .framer-1vfqdx4 { flex: none; height: 150px; overflow: visible; position: relative; width: 100%; }", ".framer-z0xyd .framer-2lzihm { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 16px; position: relative; width: 100%; }", ".framer-z0xyd .framer-62fr4f, .framer-z0xyd .framer-1up00ns { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-z0xyd.framer-rop6p0, .framer-z0xyd .framer-2lzihm { gap: 0px; } .framer-z0xyd.framer-rop6p0 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-z0xyd.framer-rop6p0 > :first-child, .framer-z0xyd .framer-2lzihm > :first-child { margin-top: 0px; } .framer-z0xyd.framer-rop6p0 > :last-child, .framer-z0xyd .framer-2lzihm > :last-child { margin-bottom: 0px; } .framer-z0xyd .framer-2lzihm > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } }", ".framer-z0xyd.framer-v-rop6p0.hover .framer-1vfqdx4, .framer-z0xyd.framer-v-rop6p0.pressed .framer-1vfqdx4 { mix-blend-mode: screen; }", ...css9];
var FramerVG4Cdi1PG = withCSS4(Component4, css10, "framer-z0xyd");
var VG4Cdi1PG_default = FramerVG4Cdi1PG;
FramerVG4Cdi1PG.displayName = "leadership card";
FramerVG4Cdi1PG.defaultProps = {
  height: 235.5,
  width: 199
};
addPropertyControls4(FramerVG4Cdi1PG, {
  w4hMM9O64: {
    defaultValue: "Chris Nolte",
    displayTextArea: true,
    title: "Name",
    type: ControlType4.String
  },
  SwCKgp6TX: {
    defaultValue: "CO-FOUNDER, PRESIDENT",
    displayTextArea: true,
    placeholder: "Role",
    title: "Role",
    type: ControlType4.String
  },
  RFjLBCnQo: {
    __defaultAssetReference: "data:framer/asset-reference,OdNHS7cE8IyL65pIQiXWJ6J23wA.png?originalFilename=image.png&preferredSize=auto",
    title: "picture",
    type: ControlType4.ResponsiveImage
  },
  JXB6Jd6G9: {
    title: "Click",
    type: ControlType4.EventHandler
  }
});
addFonts3(FramerVG4Cdi1PG, [{
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
    unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
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
}, ...getFontsFromSharedStyle3(fonts6)], {
  supportsExplicitInterCodegen: true
});

// http-url:https://framerusercontent.com/modules/Pf0AClOOF0sIw4RQSVZt/hijiTctQF2hzsTuXpMZC/lZiAP5duP.js
var MotionDivWithFXWithOptimizedAppearEffect = withOptimizedAppearEffect2(withFX2(motion5.div));
var LeadershipCardFullFonts = getFonts3(Uiq33N87W_default);
var LeadershipCardFonts = getFonts3(VG4Cdi1PG_default);
var cycleOrder3 = ["XVqg6ogDJ", "BmiEGSNnl", "lu5zWILya", "H37rjnWJ4", "dJ4xxk_wZ", "vAuR8fRo3", "Uok8iieqZ", "mc0TMdDqP", "flPoymSnq", "bTZvBZjSv", "aS11NaEDy", "omJBwanlu", "PNkn41bS7", "Po2nnhHn7"];
var serializationHash4 = "framer-o0aIb";
var variantClassNames4 = {
  aS11NaEDy: "framer-v-1tnxthm",
  BmiEGSNnl: "framer-v-1ql1djs",
  bTZvBZjSv: "framer-v-mipqkt",
  dJ4xxk_wZ: "framer-v-1az8f7v",
  flPoymSnq: "framer-v-cu5c9g",
  H37rjnWJ4: "framer-v-rzgkbw",
  lu5zWILya: "framer-v-gfs07a",
  mc0TMdDqP: "framer-v-1m5vjtp",
  omJBwanlu: "framer-v-1lyazs",
  PNkn41bS7: "framer-v-1e9vnlp",
  Po2nnhHn7: "framer-v-1trijr1",
  Uok8iieqZ: "framer-v-j9eft6",
  vAuR8fRo3: "framer-v-g57pji",
  XVqg6ogDJ: "framer-v-1f9a43h"
};
function addPropertyOverrides4(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach(variant => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition14 = {
  bounce: 0.2,
  delay: 0,
  duration: 0.4,
  type: "spring"
};
var transition2 = {
  delay: 0,
  duration: 1,
  ease: [0.44, 0, 0.56, 1],
  type: "tween"
};
var transition3 = {
  delay: 0,
  duration: 0.2,
  ease: [0.44, 0, 0.56, 1],
  type: "tween"
};
var animation2 = {
  opacity: 1,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  skewX: 0,
  skewY: 0,
  transition: transition3,
  x: 0,
  y: 0
};
var animation12 = {
  opacity: 1e-3,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  skewX: 0,
  skewY: 0,
  x: 0,
  y: 0
};
var transition4 = {
  delay: 0.5,
  duration: 0.4,
  ease: [0.44, 0, 0.56, 1],
  type: "tween"
};
var animation22 = {
  opacity: 1,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  skewX: 0,
  skewY: 0,
  transition: transition4,
  x: 0,
  y: 0
};
var addImageAlt = (image, alt) => {
  if (!image || typeof image !== "object") {
    return;
  }
  return {
    ...image,
    alt
  };
};
var Transition4 = ({
  value,
  children
}) => {
  const config = React5.useContext(MotionConfigContext4);
  const transition = value ?? config.transition;
  const contextValue = React5.useMemo(() => ({
    ...config,
    transition
  }), [JSON.stringify(transition)]);
  return <MotionConfigContext4.Provider value={contextValue}>{children}</MotionConfigContext4.Provider>;
};
var Variants4 = motion5.create(React5.Fragment);
var humanReadableVariantMap3 = {
  "Desktop Charlie": "Uok8iieqZ",
  "Desktop Chris": "dJ4xxk_wZ",
  "Desktop Justin": "H37rjnWJ4",
  "Desktop Tarani": "vAuR8fRo3",
  "phone chris": "PNkn41bS7",
  "phone justin": "omJBwanlu",
  "phone tarani": "Po2nnhHn7",
  "tablet charlie": "aS11NaEDy",
  "tablet chris": "flPoymSnq",
  "tablet justin": "mc0TMdDqP",
  "tablet tarani": "bTZvBZjSv",
  Desktop: "XVqg6ogDJ",
  phone: "lu5zWILya",
  tablet: "BmiEGSNnl"
};
var getProps5 = ({
  height,
  id,
  width,
  ...props
}) => {
  return {
    ...props,
    variant: humanReadableVariantMap3[props.variant] ?? props.variant ?? "XVqg6ogDJ"
  };
};
var createLayoutDependency4 = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component5 = React5.forwardRef(function (props, ref) {
  const {
    activeLocale,
    setLocale
  } = useLocaleInfo4();
  const {
    style,
    className: className7,
    layoutId,
    variant,
    ...restProps
  } = getProps5(props);
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
  } = useVariantState4({
    cycleOrder: cycleOrder3,
    defaultVariant: "XVqg6ogDJ",
    variant,
    variantClassNames: variantClassNames4
  });
  const layoutDependency = createLayoutDependency4(props, variants);
  const {
    activeVariantCallback,
    delay
  } = useActiveVariantCallback4(baseVariant);
  const onTap1j2rnm = activeVariantCallback(async (...args) => {
    setVariant("XVqg6ogDJ");
  });
  const hHARPIgb91kt1ar8 = activeVariantCallback(async (...args) => {
    setVariant("vAuR8fRo3");
  });
  const JXB6Jd6G91kgxnao = activeVariantCallback(async (...args) => {
    setVariant("H37rjnWJ4");
  });
  const JXB6Jd6G9t2nky1 = activeVariantCallback(async (...args) => {
    setVariant("mc0TMdDqP");
  });
  const JXB6Jd6G91iw9mv = activeVariantCallback(async (...args) => {
    setVariant("omJBwanlu");
  });
  const JXB6Jd6G91kt1ar8 = activeVariantCallback(async (...args) => {
    setVariant("vAuR8fRo3");
  });
  const JXB6Jd6G91e00af8 = activeVariantCallback(async (...args) => {
    setVariant("bTZvBZjSv");
  });
  const JXB6Jd6G91ei3zjw = activeVariantCallback(async (...args) => {
    setVariant("Po2nnhHn7");
  });
  const JXB6Jd6G9uy9oly = activeVariantCallback(async (...args) => {
    setVariant("dJ4xxk_wZ");
  });
  const JXB6Jd6G9zpu82c = activeVariantCallback(async (...args) => {
    setVariant("flPoymSnq");
  });
  const JXB6Jd6G91hnd2yn = activeVariantCallback(async (...args) => {
    setVariant("PNkn41bS7");
  });
  const onTap164wnr1 = activeVariantCallback(async (...args) => {
    setVariant("BmiEGSNnl");
  });
  const onTappkv1bq = activeVariantCallback(async (...args) => {
    setVariant("lu5zWILya");
  });
  const sharedStyleClassNames = [className2, className];
  const scopingClassNames = cx5(serializationHash4, ...sharedStyleClassNames);
  const ref1 = React5.useRef(null);
  const isDisplayed = () => {
    if (["H37rjnWJ4", "dJ4xxk_wZ", "vAuR8fRo3", "Uok8iieqZ"].includes(baseVariant)) return true;
    return false;
  };
  const isDisplayed1 = () => {
    if (["mc0TMdDqP", "flPoymSnq", "bTZvBZjSv", "aS11NaEDy"].includes(baseVariant)) return true;
    return false;
  };
  const isDisplayed2 = () => {
    if (["flPoymSnq", "bTZvBZjSv", "aS11NaEDy"].includes(baseVariant)) return false;
    return true;
  };
  const isDisplayed3 = () => {
    if (["mc0TMdDqP", "bTZvBZjSv", "aS11NaEDy"].includes(baseVariant)) return false;
    return true;
  };
  const isDisplayed4 = () => {
    if (["mc0TMdDqP", "flPoymSnq", "aS11NaEDy"].includes(baseVariant)) return false;
    return true;
  };
  const isDisplayed5 = () => {
    if (["mc0TMdDqP", "flPoymSnq", "bTZvBZjSv"].includes(baseVariant)) return false;
    return true;
  };
  const isDisplayed6 = () => {
    if (["omJBwanlu", "PNkn41bS7", "Po2nnhHn7"].includes(baseVariant)) return true;
    return false;
  };
  const defaultLayoutId = React5.useId();
  const componentViewport = useComponentViewport4();
  return <LayoutGroup4 id={layoutId ?? defaultLayoutId}>{<Variants4 animate={variants} initial={false}>{<Transition4 value={transition14} {...addPropertyOverrides4({
        dJ4xxk_wZ: {
          value: transition2
        },
        H37rjnWJ4: {
          value: transition2
        },
        Uok8iieqZ: {
          value: transition2
        },
        vAuR8fRo3: {
          value: transition2
        }
      }, baseVariant, gestureVariant)}>{_jsxs4(motion5.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx5(scopingClassNames, "framer-1f9a43h", className7, classNames),
          "data-framer-name": "Desktop",
          layoutDependency,
          layoutId: "XVqg6ogDJ",
          ref: ref ?? ref1,
          style: {
            backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))",
            ...style
          },
          ...addPropertyOverrides4({
            aS11NaEDy: {
              "data-framer-name": "tablet charlie"
            },
            BmiEGSNnl: {
              "data-framer-name": "tablet"
            },
            bTZvBZjSv: {
              "data-framer-name": "tablet tarani"
            },
            dJ4xxk_wZ: {
              "data-framer-name": "Desktop Chris"
            },
            flPoymSnq: {
              "data-framer-name": "tablet chris"
            },
            H37rjnWJ4: {
              "data-framer-name": "Desktop Justin"
            },
            lu5zWILya: {
              "data-framer-name": "phone"
            },
            mc0TMdDqP: {
              "data-framer-name": "tablet justin"
            },
            omJBwanlu: {
              "data-framer-name": "phone justin"
            },
            PNkn41bS7: {
              "data-framer-name": "phone chris"
            },
            Po2nnhHn7: {
              "data-framer-name": "phone tarani"
            },
            Uok8iieqZ: {
              "data-framer-name": "Desktop Charlie"
            },
            vAuR8fRo3: {
              "data-framer-name": "Desktop Tarani"
            }
          }, baseVariant, gestureVariant),
          children: [isDisplayed() && _jsxs4(motion5.div, {
            className: "framer-18uk9h2",
            layoutDependency,
            layoutId: "ZDHg8X0cQ",
            children: [<MotionDivWithFXWithOptimizedAppearEffect __perspectiveFX={false} __smartComponentFX __targetOpacity={1} animate={animation2} className="framer-rh0gg2" data-framer-appear-id="rh0gg2" data-framer-name="backdrop" data-highlight initial={animation12} layoutDependency={layoutDependency} layoutId="jY24GIHty" onTap={onTap1j2rnm} optimized style={{
              backgroundColor: "rgba(245, 245, 247, 0.95)"
            }} />, _jsxs4(motion5.div, {
              className: "framer-14tiroo",
              layoutDependency,
              layoutId: "M6SIq5JyB",
              children: [isDisplayed() && <ComponentViewportProvider2 {...addPropertyOverrides4({
                dJ4xxk_wZ: {
                  height: 458,
                  width: `max(min(${componentViewport?.width || "100vw"}, 512px), 1px)`,
                  y: (componentViewport?.y || 0) + ((componentViewport?.height || 557) * 0.5008976660682228 - (componentViewport?.height || 557) * 1 / 2) + 0 + (((componentViewport?.height || 557) * 1 - 0 - 458) / 2 + 0 + 0) + 0
                },
                H37rjnWJ4: {
                  height: 458,
                  width: `max(min(${componentViewport?.width || "100vw"}, 512px), 1px)`,
                  y: (componentViewport?.y || 0) + ((componentViewport?.height || 557) * 0.5008976660682228 - (componentViewport?.height || 557) * 1 / 2) + 0 + (((componentViewport?.height || 557) * 1 - 0 - 458) / 2 + 0 + 0) + 0
                },
                Uok8iieqZ: {
                  height: 458,
                  width: `max(min(${componentViewport?.width || "100vw"}, 512px), 1px)`,
                  y: (componentViewport?.y || 0) + ((componentViewport?.height || 557) * 0.5008976660682228 - (componentViewport?.height || 557) * 1 / 2) + 0 + (((componentViewport?.height || 557) * 1 - 0 - 458) / 2 + 0 + 0) + 0
                },
                vAuR8fRo3: {
                  height: 458,
                  width: `max(min(${componentViewport?.width || "100vw"}, 512px), 1px)`,
                  y: (componentViewport?.y || 0) + ((componentViewport?.height || 557) * 0.5008976660682228 - (componentViewport?.height || 557) * 1 / 2) + 0 + (((componentViewport?.height || 557) * 1 - 0 - 458) / 2 + 0 + 0) + 0
                }
              }, baseVariant, gestureVariant)}>{<MotionDivWithFXWithOptimizedAppearEffect __perspectiveFX={false} __smartComponentFX __targetOpacity={1} animate={animation22} className="framer-hrl31b-container" data-framer-appear-id="hrl31b" initial={animation12} layoutDependency={layoutDependency} layoutId="XtzmQeTK2-container" optimized>{<Uiq33N87W_default height="100%" id="XtzmQeTK2" layoutId="XtzmQeTK2" mSV1Cy9OQ="A seasoned investment banker, discovered his passion for e-biking while living in Brooklyn. Justin joined Vela, a Sao Paulo-based e-bike manufacturer, as CEO in 2020. Justin moved Vela’s primary manufacturing to Detroit in 2022 to ensure reliable supply lines. Inspired by collaboration at Brooklyn Newlab and the Michigan Central incubator, Justin partnered with Chris Nolte in 2023 to found Bloom, optimizing logistics and fostering domestic production to raise industry standards." Q6MRFnGBV="Justin \nKosmides" RHVU0_UK3="CO-FOUNDER, \nCHIEF EXECUTIVE OFFICER" style={{
                    width: "100%"
                  }} variant="lb0RxMr55" width="100%" {...addPropertyOverrides4({
                    dJ4xxk_wZ: {
                      mSV1Cy9OQ: "A well-known figure in the e-bike community, Nolte is a trusted voice for safety and quality in mobility commerce, and has played a major role in setting industry standards for the burgeoning market of micromobility. His passion for e-bikes is both principled and personal. After suffering a back injury on a tour of duty in Iraq, Nolte returned home as a disabled combat veteran. Looking to re-engage his active lifestyle, he built his first electric bike, and soon realized the implications of the technology\u2019s power to transform personal transportation and lessen U.S. dependence on foreign oil. In 2011, Nolte founded Long Island Electric Bikes, which over the course of a decade grew into Propel, one of the nation\u2019s leading e-bike retailers. In 2023, he founded Bloom, bringing his problem-solving skills to manufacturing, assembly and shipping logistics that promise to centralize and streamline the light electric vehicle industry as it matures into a sustainable and dependable form of mass transportation. ",
                      NuYJweThp: addImageAlt({
                        src: "https://framerusercontent.com/images/zdrr6YJvVWvl9wt5j5QpJ0OoBE0.png"
                      }, ""),
                      Q6MRFnGBV: "Chris\nNolte",
                      RHVU0_UK3: "CO-FOUNDER, PRESIDENT"
                    },
                    H37rjnWJ4: {
                      RHVU0_UK3: "CO-FOUNDER, CHIEF EXECUTIVE OFFICER"
                    },
                    Uok8iieqZ: {
                      NuYJweThp: addImageAlt({
                        src: "https://framerusercontent.com/images/z2gKNODdDe8mXdnkSLSOK7iqo.png"
                      }, ""),
                      Q6MRFnGBV: "Charlie\nBischoff",
                      RHVU0_UK3: "FOUNDING MEMBER,\nCHIEF FINANTIAL OFFICER"
                    },
                    vAuR8fRo3: {
                      hHARPIgb9: hHARPIgb91kt1ar8,
                      mSV1Cy9OQ: "Tarani is an accomplished product and operations leader with over a decade of expertise in software, hard tech, and AI-driven technologies. She is passionate about leveraging cutting-edge innovations to solve real-world challenges, from autonomy in unstructured environments to AI-powered logistics. As Chief Product Officer and founding member of Bloom, Tarani leads the company's mission to build an integrated ecosystem for hardware brands. Her career includes leadership roles at CitiBike, Uber and Mapbox, where she spearheaded the launch of groundbreaking products that reshaped mobility and predictive logistics.",
                      NuYJweThp: addImageAlt({
                        src: "https://framerusercontent.com/images/1WMKmYujlJ1ZGxCtIGSB0XKs0.png"
                      }, ""),
                      Q6MRFnGBV: "Tarani\nDuncan",
                      RHVU0_UK3: "FOUNDING MEMBER, CHIEF PRODUCT OFFICER"
                    }
                  }, baseVariant, gestureVariant)} />}</MotionDivWithFXWithOptimizedAppearEffect>}</ComponentViewportProvider2>, <MotionDivWithFXWithOptimizedAppearEffect __perspectiveFX={false} __smartComponentFX __targetOpacity={1} animate={animation22} className="framer-163u3mj" data-framer-appear-id="163u3mj" data-framer-name="Icon" data-highlight initial={animation12} layoutDependency={layoutDependency} layoutId="vPn7vm05C" onTap={onTap1j2rnm} optimized>{_jsx5(motion5.div, {
                  className: "framer-1gaorll",
                  "data-framer-name": "Bottom",
                  layoutDependency,
                  layoutId: "aE7JeDytu",
                  style: {
                    backgroundColor: "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))",
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    rotate: -45
                  }
                })}{_jsx5(motion5.div, {
                  className: "framer-1ohf8e7",
                  "data-framer-name": "Top",
                  layoutDependency,
                  layoutId: "HucvfebUY",
                  style: {
                    backgroundColor: "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))",
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    rotate: 45
                  }
                })}</MotionDivWithFXWithOptimizedAppearEffect>]
            })]
          }), _jsxs4(motion5.div, {
            className: "framer-14x6zf4",
            layoutDependency,
            layoutId: "GsNZAGEe4",
            children: [_jsx5(motion5.div, {
              className: "framer-1juqq35",
              layoutDependency,
              layoutId: "wUYUaEqSv",
              children: _jsxs4(motion5.div, {
                className: "framer-zw0gpp",
                "data-framer-name": "head-txt",
                layoutDependency,
                layoutId: "shpSkfvIG",
                children: [<RichText4 __fromCanvasComponent className="framer-1dhyljf" data-framer-name="h" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="CVSqqSEFQ" style={{
                  "--extracted-gdpscs": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
                }} verticalAlignment="top" withExternalLayout>{<React5.Fragment>{_jsxs4(motion5.h1, {
                      className: "framer-styles-preset-xwk33z",
                      "data-styles-preset": "Sn1ggcgQ3",
                      style: {
                        "--framer-text-color": "var(--extracted-gdpscs, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                      },
                      children: ["Bloom ", _jsx5(motion5.br, {}), "Leadership"]
                    })}</React5.Fragment>}</RichText4>, <RichText4 __fromCanvasComponent className="framer-1aij8jg" data-framer-name="text" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="CKHWMnpU8" style={{
                  "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
                }} verticalAlignment="top" withExternalLayout>{<React5.Fragment>{_jsx5(motion5.p, {
                      className: "framer-styles-preset-k8yxrn",
                      "data-styles-preset": "ferGDeq75",
                      style: {
                        "--framer-text-alignment": "left",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                      },
                      children: "The Bloom leadership team combines decades of hands-on experience to drive the evolution of the global hardware industry."
                    })}</React5.Fragment>}</RichText4>]
              })
            }), _jsxs4(motion5.div, {
              className: "framer-yyioco",
              layoutDependency,
              layoutId: "j5bnBfG4d",
              children: [<ComponentViewportProvider2 height={235} width="205.3333px" y={(componentViewport?.y || 0) + 96 + (((componentViewport?.height || 557) - 192 - 235) / 2 + 0 + 0) + 0 + 0} {...addPropertyOverrides4({
                aS11NaEDy: {
                  y: (componentViewport?.y || 0) + 96 + (((componentViewport?.height || 801) - 192 - 549.8) / 2 + 0 + 0) + 32 + 250.8 + 0
                },
                BmiEGSNnl: {
                  y: (componentViewport?.y || 0) + 96 + (((componentViewport?.height || 801) - 192 - 549.8) / 2 + 0 + 0) + 32 + 250.8 + 0
                },
                bTZvBZjSv: {
                  y: (componentViewport?.y || 0) + 96 + (((componentViewport?.height || 801) - 192 - 549.8) / 2 + 0 + 0) + 32 + 250.8 + 0
                },
                flPoymSnq: {
                  y: (componentViewport?.y || 0) + 96 + (((componentViewport?.height || 801) - 192 - 549.8) / 2 + 0 + 0) + 32 + 250.8 + 0
                },
                lu5zWILya: {
                  width: `calc(${componentViewport?.width || "100vw"} - 64px)`,
                  y: (componentViewport?.y || 0) + 64 + (((componentViewport?.height || 200) - 128 - 1067.8) / 2 + 0 + 0) + 32 + 250.8 + 0 + 0
                },
                mc0TMdDqP: {
                  y: (componentViewport?.y || 0) + 96 + (((componentViewport?.height || 801) - 192 - 549.8) / 2 + 0 + 0) + 32 + 250.8 + 0
                },
                omJBwanlu: {
                  width: `calc(${componentViewport?.width || "100vw"} - 64px)`,
                  y: (componentViewport?.y || 0) + 64 + (((componentViewport?.height || 200) - 128 - 1067.8) / 2 + 0 + 0) + 32 + 250.8 + 0 + 0
                },
                PNkn41bS7: {
                  width: `calc(${componentViewport?.width || "100vw"} - 64px)`,
                  y: (componentViewport?.y || 0) + 64 + (((componentViewport?.height || 200) - 128 - 1067.8) / 2 + 0 + 0) + 32 + 250.8 + 0 + 0
                },
                Po2nnhHn7: {
                  width: `calc(${componentViewport?.width || "100vw"} - 64px)`,
                  y: (componentViewport?.y || 0) + 64 + (((componentViewport?.height || 200) - 128 - 1067.8) / 2 + 0 + 0) + 32 + 250.8 + 0 + 0
                }
              }, baseVariant, gestureVariant)}>{_jsx5(motion5.div, {
                  className: "framer-1l4b8xe-container",
                  layoutDependency,
                  layoutId: "UVgqqcIeI-container",
                  children: <VG4Cdi1PG_default height="100%" id="UVgqqcIeI" JXB6Jd6G9={JXB6Jd6G91kgxnao} layoutId="UVgqqcIeI" RFjLBCnQo={addImageAlt({
                    src: "https://framerusercontent.com/images/pLViitw3ut2resPML5WRmUfD8.png"
                  }, "")} style={{
                    width: "100%"
                  }} SwCKgp6TX="CO-FOUNDER, \nCHIEF EXECUTIVE OFFICER" w4hMM9O64="Justin \nKosmides" width="100%" {...addPropertyOverrides4({
                    BmiEGSNnl: {
                      JXB6Jd6G9: JXB6Jd6G9t2nky1
                    },
                    lu5zWILya: {
                      JXB6Jd6G9: JXB6Jd6G91iw9mv
                    }
                  }, baseVariant, gestureVariant)} />
                })}</ComponentViewportProvider2>, <ComponentViewportProvider2 height={235} width="205.3333px" y={(componentViewport?.y || 0) + 96 + (((componentViewport?.height || 557) - 192 - 235) / 2 + 0 + 0) + 0 + 0} {...addPropertyOverrides4({
                aS11NaEDy: {
                  y: (componentViewport?.y || 0) + 96 + (((componentViewport?.height || 801) - 192 - 549.8) / 2 + 0 + 0) + 32 + 250.8 + 0
                },
                BmiEGSNnl: {
                  y: (componentViewport?.y || 0) + 96 + (((componentViewport?.height || 801) - 192 - 549.8) / 2 + 0 + 0) + 32 + 250.8 + 0
                },
                bTZvBZjSv: {
                  y: (componentViewport?.y || 0) + 96 + (((componentViewport?.height || 801) - 192 - 549.8) / 2 + 0 + 0) + 32 + 250.8 + 0
                },
                flPoymSnq: {
                  y: (componentViewport?.y || 0) + 96 + (((componentViewport?.height || 801) - 192 - 549.8) / 2 + 0 + 0) + 32 + 250.8 + 0
                },
                lu5zWILya: {
                  width: `calc(${componentViewport?.width || "100vw"} - 64px)`,
                  y: (componentViewport?.y || 0) + 64 + (((componentViewport?.height || 200) - 128 - 1067.8) / 2 + 0 + 0) + 32 + 250.8 + 0 + 259
                },
                mc0TMdDqP: {
                  y: (componentViewport?.y || 0) + 96 + (((componentViewport?.height || 801) - 192 - 549.8) / 2 + 0 + 0) + 32 + 250.8 + 0
                },
                omJBwanlu: {
                  width: `calc(${componentViewport?.width || "100vw"} - 64px)`,
                  y: (componentViewport?.y || 0) + 64 + (((componentViewport?.height || 200) - 128 - 1067.8) / 2 + 0 + 0) + 32 + 250.8 + 0 + 259
                },
                PNkn41bS7: {
                  width: `calc(${componentViewport?.width || "100vw"} - 64px)`,
                  y: (componentViewport?.y || 0) + 64 + (((componentViewport?.height || 200) - 128 - 1067.8) / 2 + 0 + 0) + 32 + 250.8 + 0 + 259
                },
                Po2nnhHn7: {
                  width: `calc(${componentViewport?.width || "100vw"} - 64px)`,
                  y: (componentViewport?.y || 0) + 64 + (((componentViewport?.height || 200) - 128 - 1067.8) / 2 + 0 + 0) + 32 + 250.8 + 0 + 259
                }
              }, baseVariant, gestureVariant)}>{_jsx5(motion5.div, {
                  className: "framer-lt9lob-container",
                  layoutDependency,
                  layoutId: "NefkWhV7v-container",
                  children: <VG4Cdi1PG_default height="100%" id="NefkWhV7v" JXB6Jd6G9={JXB6Jd6G91kt1ar8} layoutId="NefkWhV7v" RFjLBCnQo={addImageAlt({
                    src: "https://framerusercontent.com/images/TFtVLaFnbQvZ5el523yAXjHwr0.png",
                    srcSet: "https://framerusercontent.com/images/TFtVLaFnbQvZ5el523yAXjHwr0.png?scale-down-to=1024 748w,https://framerusercontent.com/images/TFtVLaFnbQvZ5el523yAXjHwr0.png 900w"
                  }, "")} style={{
                    width: "100%"
                  }} SwCKgp6TX="FOUNDING MEMBER, \nCHIEF PRODUCT OFFICER" w4hMM9O64="Tarani \nDuncan" width="100%" {...addPropertyOverrides4({
                    BmiEGSNnl: {
                      JXB6Jd6G9: JXB6Jd6G91e00af8
                    },
                    lu5zWILya: {
                      JXB6Jd6G9: JXB6Jd6G91ei3zjw
                    }
                  }, baseVariant, gestureVariant)} />
                })}</ComponentViewportProvider2>, <ComponentViewportProvider2 height={235} width="205.3333px" y={(componentViewport?.y || 0) + 96 + (((componentViewport?.height || 557) - 192 - 235) / 2 + 0 + 0) + 0 + 0} {...addPropertyOverrides4({
                aS11NaEDy: {
                  y: (componentViewport?.y || 0) + 96 + (((componentViewport?.height || 801) - 192 - 549.8) / 2 + 0 + 0) + 32 + 250.8 + 0
                },
                BmiEGSNnl: {
                  y: (componentViewport?.y || 0) + 96 + (((componentViewport?.height || 801) - 192 - 549.8) / 2 + 0 + 0) + 32 + 250.8 + 0
                },
                bTZvBZjSv: {
                  y: (componentViewport?.y || 0) + 96 + (((componentViewport?.height || 801) - 192 - 549.8) / 2 + 0 + 0) + 32 + 250.8 + 0
                },
                flPoymSnq: {
                  y: (componentViewport?.y || 0) + 96 + (((componentViewport?.height || 801) - 192 - 549.8) / 2 + 0 + 0) + 32 + 250.8 + 0
                },
                lu5zWILya: {
                  width: `calc(${componentViewport?.width || "100vw"} - 64px)`,
                  y: (componentViewport?.y || 0) + 64 + (((componentViewport?.height || 200) - 128 - 1067.8) / 2 + 0 + 0) + 32 + 250.8 + 0 + 518
                },
                mc0TMdDqP: {
                  y: (componentViewport?.y || 0) + 96 + (((componentViewport?.height || 801) - 192 - 549.8) / 2 + 0 + 0) + 32 + 250.8 + 0
                },
                omJBwanlu: {
                  width: `calc(${componentViewport?.width || "100vw"} - 64px)`,
                  y: (componentViewport?.y || 0) + 64 + (((componentViewport?.height || 200) - 128 - 1067.8) / 2 + 0 + 0) + 32 + 250.8 + 0 + 518
                },
                PNkn41bS7: {
                  width: `calc(${componentViewport?.width || "100vw"} - 64px)`,
                  y: (componentViewport?.y || 0) + 64 + (((componentViewport?.height || 200) - 128 - 1067.8) / 2 + 0 + 0) + 32 + 250.8 + 0 + 518
                },
                Po2nnhHn7: {
                  width: `calc(${componentViewport?.width || "100vw"} - 64px)`,
                  y: (componentViewport?.y || 0) + 64 + (((componentViewport?.height || 200) - 128 - 1067.8) / 2 + 0 + 0) + 32 + 250.8 + 0 + 518
                }
              }, baseVariant, gestureVariant)}>{_jsx5(motion5.div, {
                  className: "framer-1yxhh20-container",
                  layoutDependency,
                  layoutId: "NsDrhYZ2z-container",
                  children: <VG4Cdi1PG_default height="100%" id="NsDrhYZ2z" JXB6Jd6G9={JXB6Jd6G9uy9oly} layoutId="NsDrhYZ2z" RFjLBCnQo={addImageAlt({
                    src: "https://framerusercontent.com/images/Iptg9QuK8UHUeWzvAhZAyNzGfQ.png"
                  }, "")} style={{
                    width: "100%"
                  }} SwCKgp6TX="CO-FOUNDER,\nPRESIDENT" w4hMM9O64="Chris \nNolte" width="100%" {...addPropertyOverrides4({
                    BmiEGSNnl: {
                      JXB6Jd6G9: JXB6Jd6G9zpu82c
                    },
                    lu5zWILya: {
                      JXB6Jd6G9: JXB6Jd6G91hnd2yn
                    }
                  }, baseVariant, gestureVariant)} />
                })}</ComponentViewportProvider2>]
            })]
          }), isDisplayed1() && _jsxs4(motion5.div, {
            className: "framer-r4dslk",
            layoutDependency,
            layoutId: "fKP5vPsKw",
            children: [<MotionDivWithFXWithOptimizedAppearEffect __perspectiveFX={false} __smartComponentFX __targetOpacity={1} animate={animation2} className="framer-70ebkl" data-framer-appear-id="70ebkl" data-framer-name="backdrop" data-highlight initial={animation12} layoutDependency={layoutDependency} layoutId="jzz1RROuD" onTap={onTap164wnr1} optimized style={{
              backgroundColor: "rgba(245, 245, 247, 0.95)"
            }} />, _jsxs4(motion5.div, {
              className: "framer-taizcz",
              layoutDependency,
              layoutId: "aw6o4Q0ux",
              children: [isDisplayed2() && <ComponentViewportProvider2 height={458} {...addPropertyOverrides4({
                mc0TMdDqP: {
                  width: `max(min(${componentViewport?.width || "100vw"}, 512px), 1px)`,
                  y: (componentViewport?.y || 0) + 0.5 + 0 + (((componentViewport?.height || 801) * 1 - 0 - 458) / 2 + 0 + 0) + 0
                }
              }, baseVariant, gestureVariant)}>{<MotionDivWithFXWithOptimizedAppearEffect __perspectiveFX={false} __smartComponentFX __targetOpacity={1} animate={animation22} className="framer-92in8q-container" data-framer-appear-id="92in8q" initial={animation12} layoutDependency={layoutDependency} layoutId="HltFqFwZw-container" optimized>{<Uiq33N87W_default height="100%" id="HltFqFwZw" layoutId="HltFqFwZw" mSV1Cy9OQ="A seasoned investment banker, discovered his passion for e-biking while living in Brooklyn. Justin joined Vela, a Sao Paulo-based e-bike manufacturer, as CEO in 2020. Justin moved Vela’s primary manufacturing to Detroit in 2022 to ensure reliable supply lines. Inspired by collaboration at Brooklyn Newlab and the Michigan Central incubator, Justin partnered with Chris Nolte in 2023 to found Bloom, optimizing logistics and fostering domestic production to raise industry standards." Q6MRFnGBV="Justin \nKosmides" RHVU0_UK3="CO-FOUNDER, CHIEF EXECUTIVE OFFICER" style={{
                    width: "100%"
                  }} variant="lb0RxMr55" width="100%" />}</MotionDivWithFXWithOptimizedAppearEffect>}</ComponentViewportProvider2>, <MotionDivWithFXWithOptimizedAppearEffect __perspectiveFX={false} __smartComponentFX __targetOpacity={1} animate={animation22} className="framer-1umv0bo" data-framer-appear-id="1umv0bo" data-framer-name="Icon" data-highlight initial={animation12} layoutDependency={layoutDependency} layoutId="sLfOK5pAb" onTap={onTap164wnr1} optimized>{_jsx5(motion5.div, {
                  className: "framer-1sxdvm4",
                  "data-framer-name": "Bottom",
                  layoutDependency,
                  layoutId: "RQgFWFpmF",
                  style: {
                    backgroundColor: "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))",
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    rotate: -45
                  }
                })}{_jsx5(motion5.div, {
                  className: "framer-6gv4ue",
                  "data-framer-name": "Top",
                  layoutDependency,
                  layoutId: "yFZ7MkCoM",
                  style: {
                    backgroundColor: "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))",
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    rotate: 45
                  }
                })}</MotionDivWithFXWithOptimizedAppearEffect>, isDisplayed3() && <ComponentViewportProvider2 height={458} {...addPropertyOverrides4({
                flPoymSnq: {
                  width: `max(min(${componentViewport?.width || "100vw"}, 512px), 1px)`,
                  y: (componentViewport?.y || 0) + 0.5 + 0 + (((componentViewport?.height || 801) * 1 - 0 - 458) / 2 + 0 + 0) + 0
                }
              }, baseVariant, gestureVariant)}>{<MotionDivWithFXWithOptimizedAppearEffect __perspectiveFX={false} __smartComponentFX __targetOpacity={1} animate={animation22} className="framer-1i6l8vc-container" data-framer-appear-id="1i6l8vc" initial={animation12} layoutDependency={layoutDependency} layoutId="fOGba4rg6-container" optimized>{<Uiq33N87W_default height="100%" id="fOGba4rg6" layoutId="fOGba4rg6" mSV1Cy9OQ="A well-known figure in the e-bike community, Nolte is a trusted voice for safety and quality in mobility commerce, and has played a major role in setting industry standards for the burgeoning market of micromobility. His passion for e-bikes is both principled and personal. After suffering a back injury on a tour of duty in Iraq, Nolte returned home as a disabled combat veteran. Looking to re-engage his active lifestyle, he built his first electric bike, and soon realized the implications of the technology’s power to transform personal transportation and lessen U.S. dependence on foreign oil. In 2011, Nolte founded Long Island Electric Bikes, which over the course of a decade grew into Propel, one of the nation’s leading e-bike retailers. In 2023, he founded Bloom, bringing his problem-solving skills to manufacturing, assembly and shipping logistics that promise to centralize and streamline the light electric vehicle industry as it matures into a sustainable and dependable form of mass transportation. " NuYJweThp={addImageAlt({
                    src: "https://framerusercontent.com/images/zdrr6YJvVWvl9wt5j5QpJ0OoBE0.png"
                  }, "")} Q6MRFnGBV="Chris\nNolte" RHVU0_UK3="CO-FOUNDER, PRESIDENT" style={{
                    width: "100%"
                  }} variant="lb0RxMr55" width="100%" />}</MotionDivWithFXWithOptimizedAppearEffect>}</ComponentViewportProvider2>, isDisplayed4() && <ComponentViewportProvider2 height={458} {...addPropertyOverrides4({
                bTZvBZjSv: {
                  width: `max(min(${componentViewport?.width || "100vw"}, 512px), 1px)`,
                  y: (componentViewport?.y || 0) + 0.5 + 0 + (((componentViewport?.height || 801) * 1 - 0 - 458) / 2 + 0 + 0) + 0
                }
              }, baseVariant, gestureVariant)}>{<MotionDivWithFXWithOptimizedAppearEffect __perspectiveFX={false} __smartComponentFX __targetOpacity={1} animate={animation22} className="framer-176im6m-container" data-framer-appear-id="176im6m" initial={animation12} layoutDependency={layoutDependency} layoutId="aQeBTTaQ4-container" optimized>{<Uiq33N87W_default height="100%" id="aQeBTTaQ4" layoutId="aQeBTTaQ4" mSV1Cy9OQ="Tarani is an accomplished product and operations leader with over a decade of expertise in software, hard tech, and AI-driven technologies. She is passionate about leveraging cutting-edge innovations to solve real-world challenges, from autonomy in unstructured environments to AI-powered logistics. As Chief Product Officer and founding member of Bloom, Tarani leads the company's mission to build an integrated ecosystem for hardware brands. Her career includes leadership roles at CitiBike, Uber and Mapbox, where she spearheaded the launch of groundbreaking products that reshaped mobility and predictive logistics." NuYJweThp={addImageAlt({
                    src: "https://framerusercontent.com/images/1WMKmYujlJ1ZGxCtIGSB0XKs0.png"
                  }, "")} Q6MRFnGBV="Tarani\nDuncan" RHVU0_UK3="FOUNDING MEMBER, CHIEF PRODUCT OFFICER" style={{
                    width: "100%"
                  }} variant="lb0RxMr55" width="100%" />}</MotionDivWithFXWithOptimizedAppearEffect>}</ComponentViewportProvider2>, isDisplayed5() && <ComponentViewportProvider2 height={458} {...addPropertyOverrides4({
                aS11NaEDy: {
                  width: `max(min(${componentViewport?.width || "100vw"}, 512px), 1px)`,
                  y: (componentViewport?.y || 0) + 0.5 + 0 + (((componentViewport?.height || 801) * 1 - 0 - 458) / 2 + 0 + 0) + 0
                }
              }, baseVariant, gestureVariant)}>{<MotionDivWithFXWithOptimizedAppearEffect __perspectiveFX={false} __smartComponentFX __targetOpacity={1} animate={animation22} className="framer-5y2nh-container" data-framer-appear-id="5y2nh" initial={animation12} layoutDependency={layoutDependency} layoutId="ZJ767bCYi-container" optimized>{<Uiq33N87W_default height="100%" id="ZJ767bCYi" layoutId="ZJ767bCYi" mSV1Cy9OQ="A seasoned investment banker, discovered his passion for e-biking while living in Brooklyn. Justin joined Vela, a Sao Paulo-based e-bike manufacturer, as CEO in 2020. Justin moved Vela’s primary manufacturing to Detroit in 2022 to ensure reliable supply lines. Inspired by collaboration at Brooklyn Newlab and the Michigan Central incubator, Justin partnered with Chris Nolte in 2023 to found Bloom, optimizing logistics and fostering domestic production to raise industry standards." NuYJweThp={addImageAlt({
                    src: "https://framerusercontent.com/images/z2gKNODdDe8mXdnkSLSOK7iqo.png"
                  }, "")} Q6MRFnGBV="Charlie\nBischoff" RHVU0_UK3="FOUNDING MEMBER,\nCHIEF FINANTIAL OFFICER" style={{
                    width: "100%"
                  }} variant="lb0RxMr55" width="100%" />}</MotionDivWithFXWithOptimizedAppearEffect>}</ComponentViewportProvider2>]
            })]
          }), isDisplayed6() && _jsxs4(motion5.div, {
            className: "framer-1n9npqe",
            layoutDependency,
            layoutId: "Aa9TtAngU",
            children: [<MotionDivWithFXWithOptimizedAppearEffect __perspectiveFX={false} __smartComponentFX __targetOpacity={1} animate={animation2} className="framer-ugq3y7" data-framer-appear-id="ugq3y7" data-framer-name="backdrop" data-highlight initial={animation12} layoutDependency={layoutDependency} layoutId="n8bjyi5gs" onTap={onTap164wnr1} optimized style={{
              backgroundColor: "rgba(245, 245, 247, 0.95)"
            }} />, _jsxs4(motion5.div, {
              className: "framer-5v5kuz",
              layoutDependency,
              layoutId: "C8JPegWwT",
              children: [<ComponentViewportProvider2 height={458} {...addPropertyOverrides4({
                omJBwanlu: {
                  width: `max(min(${componentViewport?.width || "100vw"} - 48px, 512px), 1px)`,
                  y: (componentViewport?.y || 0) + 0.5 + 0 + (((componentViewport?.height || 200) * 1 - 0 - 458) / 2 + 0 + 0) + 0
                },
                PNkn41bS7: {
                  width: `max(min(${componentViewport?.width || "100vw"} - 48px, 512px), 1px)`,
                  y: (componentViewport?.y || 0) + 0.5 + 0 + (((componentViewport?.height || 200) * 1 - 0 - 458) / 2 + 0 + 0) + 0
                },
                Po2nnhHn7: {
                  width: `max(min(${componentViewport?.width || "100vw"} - 48px, 512px), 1px)`,
                  y: (componentViewport?.y || 0) + 0.5 + 0 + (((componentViewport?.height || 200) * 1 - 0 - 458) / 2 + 0 + 0) + 0
                }
              }, baseVariant, gestureVariant)}>{<MotionDivWithFXWithOptimizedAppearEffect __perspectiveFX={false} __smartComponentFX __targetOpacity={1} animate={animation22} className="framer-1pc2dme-container" data-framer-appear-id="1pc2dme" initial={animation12} layoutDependency={layoutDependency} layoutId="Dcb42qbzu-container" optimized>{<Uiq33N87W_default height="100%" id="Dcb42qbzu" layoutId="Dcb42qbzu" mSV1Cy9OQ="A seasoned investment banker, discovered his passion for e-biking while living in Brooklyn. Justin joined Vela, a Sao Paulo-based e-bike manufacturer, as CEO in 2020. Justin moved Vela’s primary manufacturing to Detroit in 2022 to ensure reliable supply lines. Inspired by collaboration at Brooklyn Newlab and the Michigan Central incubator, Justin partnered with Chris Nolte in 2023 to found Bloom, optimizing logistics and fostering domestic production to raise industry standards." Q6MRFnGBV="Justin \nKosmides" RHVU0_UK3="CO-FOUNDER, \nCHIEF EXECUTIVE OFFICER" style={{
                    width: "100%"
                  }} variant="fuNPr_RGA" width="100%" {...addPropertyOverrides4({
                    PNkn41bS7: {
                      mSV1Cy9OQ: "A well-known figure in the e-bike community, Nolte is a trusted voice for safety and quality in mobility commerce, and has played a major role in setting industry standards for the burgeoning market of micromobility. His passion for e-bikes is both principled and personal. After suffering a back injury on a tour of duty in Iraq, Nolte returned home as a disabled combat veteran. Looking to re-engage his active lifestyle, he built his first electric bike, and soon realized the implications of the technology\u2019s power to transform personal transportation and lessen U.S. dependence on foreign oil. In 2011, Nolte founded Long Island Electric Bikes, which over the course of a decade grew into Propel, one of the nation\u2019s leading e-bike retailers. In 2023, he founded Bloom, bringing his problem-solving skills to manufacturing, assembly and shipping logistics that promise to centralize and streamline the light electric vehicle industry as it matures into a sustainable and dependable form of mass transportation. ",
                      NuYJweThp: addImageAlt({
                        src: "https://framerusercontent.com/images/zdrr6YJvVWvl9wt5j5QpJ0OoBE0.png"
                      }, ""),
                      Q6MRFnGBV: "Chris \nNolte",
                      RHVU0_UK3: "CO-FOUNDER, PRESIDENT"
                    },
                    Po2nnhHn7: {
                      mSV1Cy9OQ: "Tarani is an accomplished product and operations leader with over a decade of expertise in software, hard tech, and AI-driven technologies. She is passionate about leveraging cutting-edge innovations to solve real-world challenges, from autonomy in unstructured environments to AI-powered logistics. As Chief Product Officer and founding member of Bloom, Tarani leads the company's mission to build an integrated ecosystem for hardware brands. Her career includes leadership roles at CitiBike, Uber and Mapbox, where she spearheaded the launch of groundbreaking products that reshaped mobility and predictive logistics.",
                      NuYJweThp: addImageAlt({
                        src: "https://framerusercontent.com/images/1WMKmYujlJ1ZGxCtIGSB0XKs0.png"
                      }, ""),
                      Q6MRFnGBV: "Tarani \nDuncan",
                      RHVU0_UK3: "FOUNDING MEMBER, \nCHIEF PRODUCT OFFICER"
                    }
                  }, baseVariant, gestureVariant)} />}</MotionDivWithFXWithOptimizedAppearEffect>}</ComponentViewportProvider2>, <MotionDivWithFXWithOptimizedAppearEffect __perspectiveFX={false} __smartComponentFX __targetOpacity={1} animate={animation22} className="framer-ba7yw0" data-framer-appear-id="ba7yw0" data-framer-name="Icon" data-highlight initial={animation12} layoutDependency={layoutDependency} layoutId="DrAqRvKZ3" onTap={onTappkv1bq} optimized>{_jsx5(motion5.div, {
                  className: "framer-mvomp3",
                  "data-framer-name": "Bottom",
                  layoutDependency,
                  layoutId: "yWifA0Idc",
                  style: {
                    backgroundColor: "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))",
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    rotate: -45
                  }
                })}{_jsx5(motion5.div, {
                  className: "framer-1lteqs9",
                  "data-framer-name": "Top",
                  layoutDependency,
                  layoutId: "oFXzmMjRC",
                  style: {
                    backgroundColor: "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))",
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    rotate: 45
                  }
                })}</MotionDivWithFXWithOptimizedAppearEffect>]
            })]
          })]
        })}</Transition4>}</Variants4>}</LayoutGroup4>;
});
var css11 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-o0aIb.framer-1vqakd0, .framer-o0aIb .framer-1vqakd0 { display: block; }", ".framer-o0aIb.framer-1f9a43h { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: 557px; justify-content: center; overflow: visible; padding: 96px 0px 96px 0px; position: relative; width: 1512px; }", ".framer-o0aIb .framer-18uk9h2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; top: calc(50.08976660682228% - 100% / 2); width: 100%; z-index: 1; }", ".framer-o0aIb .framer-rh0gg2, .framer-o0aIb .framer-70ebkl, .framer-o0aIb .framer-ugq3y7 { bottom: 0px; cursor: default; flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; position: absolute; width: 100%; z-index: 1; }", ".framer-o0aIb .framer-14tiroo { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 512px; min-height: 402px; overflow: visible; padding: 0px; position: relative; width: 1px; }", ".framer-o0aIb .framer-hrl31b-container, .framer-o0aIb .framer-92in8q-container, .framer-o0aIb .framer-1i6l8vc-container, .framer-o0aIb .framer-176im6m-container, .framer-o0aIb .framer-5y2nh-container, .framer-o0aIb .framer-1pc2dme-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; z-index: 1; }", ".framer-o0aIb .framer-163u3mj, .framer-o0aIb .framer-1umv0bo, .framer-o0aIb .framer-ba7yw0 { cursor: pointer; flex: none; height: 44px; overflow: hidden; position: absolute; right: 0px; top: 0px; width: 44px; z-index: 10; }", ".framer-o0aIb .framer-1gaorll, .framer-o0aIb .framer-1ohf8e7, .framer-o0aIb .framer-1sxdvm4, .framer-o0aIb .framer-6gv4ue, .framer-o0aIb .framer-mvomp3, .framer-o0aIb .framer-1lteqs9 { flex: none; height: 2px; left: calc(50.00000000000002% - 20px / 2); overflow: hidden; position: absolute; top: calc(50.00000000000002% - 2px / 2); width: 20px; will-change: var(--framer-will-change-override, transform); }", ".framer-o0aIb .framer-14x6zf4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1280px; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-o0aIb .framer-1juqq35 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }", ".framer-o0aIb .framer-zw0gpp { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-o0aIb .framer-1dhyljf { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-o0aIb .framer-1aij8jg { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 415px; word-break: break-word; word-wrap: break-word; }", ".framer-o0aIb .framer-yyioco { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 664px; }", ".framer-o0aIb .framer-1l4b8xe-container, .framer-o0aIb .framer-lt9lob-container, .framer-o0aIb .framer-1yxhh20-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }", ".framer-o0aIb .framer-r4dslk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; top: 1px; width: 100%; z-index: 1; }", ".framer-o0aIb .framer-taizcz, .framer-o0aIb .framer-5v5kuz { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 512px; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-o0aIb .framer-1n9npqe { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; left: 0px; overflow: visible; padding: 0px 24px 0px 24px; position: absolute; top: 1px; width: 100%; z-index: 1; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-o0aIb.framer-1f9a43h, .framer-o0aIb .framer-18uk9h2, .framer-o0aIb .framer-14tiroo, .framer-o0aIb .framer-1juqq35, .framer-o0aIb .framer-zw0gpp, .framer-o0aIb .framer-yyioco, .framer-o0aIb .framer-r4dslk, .framer-o0aIb .framer-taizcz, .framer-o0aIb .framer-1n9npqe, .framer-o0aIb .framer-5v5kuz { gap: 0px; } .framer-o0aIb.framer-1f9a43h > *, .framer-o0aIb .framer-1juqq35 > *, .framer-o0aIb .framer-zw0gpp > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-o0aIb.framer-1f9a43h > :first-child, .framer-o0aIb .framer-1juqq35 > :first-child, .framer-o0aIb .framer-zw0gpp > :first-child, .framer-o0aIb .framer-r4dslk > :first-child, .framer-o0aIb .framer-1n9npqe > :first-child { margin-top: 0px; } .framer-o0aIb.framer-1f9a43h > :last-child, .framer-o0aIb .framer-1juqq35 > :last-child, .framer-o0aIb .framer-zw0gpp > :last-child, .framer-o0aIb .framer-r4dslk > :last-child, .framer-o0aIb .framer-1n9npqe > :last-child { margin-bottom: 0px; } .framer-o0aIb .framer-18uk9h2 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-o0aIb .framer-18uk9h2 > :first-child, .framer-o0aIb .framer-14tiroo > :first-child, .framer-o0aIb .framer-yyioco > :first-child, .framer-o0aIb .framer-taizcz > :first-child, .framer-o0aIb .framer-5v5kuz > :first-child { margin-left: 0px; } .framer-o0aIb .framer-18uk9h2 > :last-child, .framer-o0aIb .framer-14tiroo > :last-child, .framer-o0aIb .framer-yyioco > :last-child, .framer-o0aIb .framer-taizcz > :last-child, .framer-o0aIb .framer-5v5kuz > :last-child { margin-right: 0px; } .framer-o0aIb .framer-14tiroo > *, .framer-o0aIb .framer-taizcz > *, .framer-o0aIb .framer-5v5kuz > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-o0aIb .framer-yyioco > * { margin: 0px; margin-left: calc(24px / 2); margin-right: calc(24px / 2); } .framer-o0aIb .framer-r4dslk > *, .framer-o0aIb .framer-1n9npqe > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }", ".framer-o0aIb.framer-v-1ql1djs.framer-1f9a43h, .framer-o0aIb.framer-v-1m5vjtp.framer-1f9a43h, .framer-o0aIb.framer-v-cu5c9g.framer-1f9a43h, .framer-o0aIb.framer-v-mipqkt.framer-1f9a43h, .framer-o0aIb.framer-v-1tnxthm.framer-1f9a43h { height: min-content; }", ".framer-o0aIb.framer-v-1ql1djs .framer-14x6zf4, .framer-o0aIb.framer-v-gfs07a .framer-14x6zf4, .framer-o0aIb.framer-v-1m5vjtp .framer-14x6zf4, .framer-o0aIb.framer-v-cu5c9g .framer-14x6zf4, .framer-o0aIb.framer-v-mipqkt .framer-14x6zf4, .framer-o0aIb.framer-v-1tnxthm .framer-14x6zf4, .framer-o0aIb.framer-v-1lyazs .framer-14x6zf4, .framer-o0aIb.framer-v-1e9vnlp .framer-14x6zf4, .framer-o0aIb.framer-v-1trijr1 .framer-14x6zf4 { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 32px; justify-content: flex-start; max-width: unset; padding: 32px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-o0aIb.framer-v-1ql1djs .framer-14x6zf4 { gap: 0px; } .framer-o0aIb.framer-v-1ql1djs .framer-14x6zf4 > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-o0aIb.framer-v-1ql1djs .framer-14x6zf4 > :first-child { margin-top: 0px; } .framer-o0aIb.framer-v-1ql1djs .framer-14x6zf4 > :last-child { margin-bottom: 0px; } }", ".framer-o0aIb.framer-v-gfs07a.framer-1f9a43h, .framer-o0aIb.framer-v-1lyazs.framer-1f9a43h, .framer-o0aIb.framer-v-1e9vnlp.framer-1f9a43h, .framer-o0aIb.framer-v-1trijr1.framer-1f9a43h { height: min-content; padding: 64px 0px 64px 0px; width: 390px; }", ".framer-o0aIb.framer-v-gfs07a .framer-1juqq35, .framer-o0aIb.framer-v-gfs07a .framer-zw0gpp, .framer-o0aIb.framer-v-1lyazs .framer-1juqq35, .framer-o0aIb.framer-v-1lyazs .framer-zw0gpp, .framer-o0aIb.framer-v-1e9vnlp .framer-1juqq35, .framer-o0aIb.framer-v-1e9vnlp .framer-zw0gpp, .framer-o0aIb.framer-v-1trijr1 .framer-1juqq35, .framer-o0aIb.framer-v-1trijr1 .framer-zw0gpp { width: 100%; }", ".framer-o0aIb.framer-v-gfs07a .framer-1dhyljf, .framer-o0aIb.framer-v-1lyazs .framer-1dhyljf, .framer-o0aIb.framer-v-1e9vnlp .framer-1dhyljf, .framer-o0aIb.framer-v-1trijr1 .framer-1dhyljf { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-o0aIb.framer-v-gfs07a .framer-yyioco, .framer-o0aIb.framer-v-1lyazs .framer-yyioco, .framer-o0aIb.framer-v-1e9vnlp .framer-yyioco, .framer-o0aIb.framer-v-1trijr1 .framer-yyioco { align-content: flex-start; align-items: flex-start; flex-direction: column; width: 100%; }", ".framer-o0aIb.framer-v-gfs07a .framer-1l4b8xe-container, .framer-o0aIb.framer-v-gfs07a .framer-lt9lob-container, .framer-o0aIb.framer-v-gfs07a .framer-1yxhh20-container, .framer-o0aIb.framer-v-1lyazs .framer-1l4b8xe-container, .framer-o0aIb.framer-v-1lyazs .framer-lt9lob-container, .framer-o0aIb.framer-v-1lyazs .framer-1yxhh20-container, .framer-o0aIb.framer-v-1e9vnlp .framer-1l4b8xe-container, .framer-o0aIb.framer-v-1e9vnlp .framer-lt9lob-container, .framer-o0aIb.framer-v-1e9vnlp .framer-1yxhh20-container, .framer-o0aIb.framer-v-1trijr1 .framer-1l4b8xe-container, .framer-o0aIb.framer-v-1trijr1 .framer-lt9lob-container, .framer-o0aIb.framer-v-1trijr1 .framer-1yxhh20-container { flex: none; width: 100%; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-o0aIb.framer-v-gfs07a .framer-14x6zf4, .framer-o0aIb.framer-v-gfs07a .framer-yyioco { gap: 0px; } .framer-o0aIb.framer-v-gfs07a .framer-14x6zf4 > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-o0aIb.framer-v-gfs07a .framer-14x6zf4 > :first-child, .framer-o0aIb.framer-v-gfs07a .framer-yyioco > :first-child { margin-top: 0px; } .framer-o0aIb.framer-v-gfs07a .framer-14x6zf4 > :last-child, .framer-o0aIb.framer-v-gfs07a .framer-yyioco > :last-child { margin-bottom: 0px; } .framer-o0aIb.framer-v-gfs07a .framer-yyioco > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } }", ".framer-o0aIb.framer-v-rzgkbw .framer-18uk9h2, .framer-o0aIb.framer-v-1az8f7v .framer-18uk9h2, .framer-o0aIb.framer-v-g57pji .framer-18uk9h2, .framer-o0aIb.framer-v-j9eft6 .framer-18uk9h2 { flex-direction: column; }", ".framer-o0aIb.framer-v-rzgkbw .framer-14tiroo, .framer-o0aIb.framer-v-1az8f7v .framer-14tiroo, .framer-o0aIb.framer-v-g57pji .framer-14tiroo, .framer-o0aIb.framer-v-j9eft6 .framer-14tiroo { flex: none; min-height: unset; width: 100%; }", ".framer-o0aIb.framer-v-rzgkbw .framer-hrl31b-container, .framer-o0aIb.framer-v-1az8f7v .framer-hrl31b-container, .framer-o0aIb.framer-v-g57pji .framer-hrl31b-container, .framer-o0aIb.framer-v-j9eft6 .framer-hrl31b-container { order: 0; }", ".framer-o0aIb.framer-v-rzgkbw .framer-163u3mj, .framer-o0aIb.framer-v-1az8f7v .framer-163u3mj, .framer-o0aIb.framer-v-g57pji .framer-163u3mj, .framer-o0aIb.framer-v-j9eft6 .framer-163u3mj, .framer-o0aIb.framer-v-cu5c9g .framer-1i6l8vc-container, .framer-o0aIb.framer-v-mipqkt .framer-176im6m-container { order: 1; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-o0aIb.framer-v-rzgkbw .framer-18uk9h2 { gap: 0px; } .framer-o0aIb.framer-v-rzgkbw .framer-18uk9h2 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-o0aIb.framer-v-rzgkbw .framer-18uk9h2 > :first-child { margin-top: 0px; } .framer-o0aIb.framer-v-rzgkbw .framer-18uk9h2 > :last-child { margin-bottom: 0px; } }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-o0aIb.framer-v-1az8f7v .framer-18uk9h2 { gap: 0px; } .framer-o0aIb.framer-v-1az8f7v .framer-18uk9h2 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-o0aIb.framer-v-1az8f7v .framer-18uk9h2 > :first-child { margin-top: 0px; } .framer-o0aIb.framer-v-1az8f7v .framer-18uk9h2 > :last-child { margin-bottom: 0px; } }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-o0aIb.framer-v-g57pji .framer-18uk9h2 { gap: 0px; } .framer-o0aIb.framer-v-g57pji .framer-18uk9h2 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-o0aIb.framer-v-g57pji .framer-18uk9h2 > :first-child { margin-top: 0px; } .framer-o0aIb.framer-v-g57pji .framer-18uk9h2 > :last-child { margin-bottom: 0px; } }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-o0aIb.framer-v-j9eft6 .framer-18uk9h2 { gap: 0px; } .framer-o0aIb.framer-v-j9eft6 .framer-18uk9h2 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-o0aIb.framer-v-j9eft6 .framer-18uk9h2 > :first-child { margin-top: 0px; } .framer-o0aIb.framer-v-j9eft6 .framer-18uk9h2 > :last-child { margin-bottom: 0px; } }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-o0aIb.framer-v-1m5vjtp .framer-14x6zf4 { gap: 0px; } .framer-o0aIb.framer-v-1m5vjtp .framer-14x6zf4 > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-o0aIb.framer-v-1m5vjtp .framer-14x6zf4 > :first-child { margin-top: 0px; } .framer-o0aIb.framer-v-1m5vjtp .framer-14x6zf4 > :last-child { margin-bottom: 0px; } }", ".framer-o0aIb.framer-v-cu5c9g .framer-1umv0bo, .framer-o0aIb.framer-v-mipqkt .framer-1umv0bo { order: 2; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-o0aIb.framer-v-cu5c9g .framer-14x6zf4 { gap: 0px; } .framer-o0aIb.framer-v-cu5c9g .framer-14x6zf4 > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-o0aIb.framer-v-cu5c9g .framer-14x6zf4 > :first-child { margin-top: 0px; } .framer-o0aIb.framer-v-cu5c9g .framer-14x6zf4 > :last-child { margin-bottom: 0px; } }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-o0aIb.framer-v-mipqkt .framer-14x6zf4 { gap: 0px; } .framer-o0aIb.framer-v-mipqkt .framer-14x6zf4 > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-o0aIb.framer-v-mipqkt .framer-14x6zf4 > :first-child { margin-top: 0px; } .framer-o0aIb.framer-v-mipqkt .framer-14x6zf4 > :last-child { margin-bottom: 0px; } }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-o0aIb.framer-v-1tnxthm .framer-14x6zf4 { gap: 0px; } .framer-o0aIb.framer-v-1tnxthm .framer-14x6zf4 > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-o0aIb.framer-v-1tnxthm .framer-14x6zf4 > :first-child { margin-top: 0px; } .framer-o0aIb.framer-v-1tnxthm .framer-14x6zf4 > :last-child { margin-bottom: 0px; } }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-o0aIb.framer-v-1lyazs .framer-14x6zf4, .framer-o0aIb.framer-v-1lyazs .framer-yyioco { gap: 0px; } .framer-o0aIb.framer-v-1lyazs .framer-14x6zf4 > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-o0aIb.framer-v-1lyazs .framer-14x6zf4 > :first-child, .framer-o0aIb.framer-v-1lyazs .framer-yyioco > :first-child { margin-top: 0px; } .framer-o0aIb.framer-v-1lyazs .framer-14x6zf4 > :last-child, .framer-o0aIb.framer-v-1lyazs .framer-yyioco > :last-child { margin-bottom: 0px; } .framer-o0aIb.framer-v-1lyazs .framer-yyioco > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-o0aIb.framer-v-1e9vnlp .framer-14x6zf4, .framer-o0aIb.framer-v-1e9vnlp .framer-yyioco { gap: 0px; } .framer-o0aIb.framer-v-1e9vnlp .framer-14x6zf4 > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-o0aIb.framer-v-1e9vnlp .framer-14x6zf4 > :first-child, .framer-o0aIb.framer-v-1e9vnlp .framer-yyioco > :first-child { margin-top: 0px; } .framer-o0aIb.framer-v-1e9vnlp .framer-14x6zf4 > :last-child, .framer-o0aIb.framer-v-1e9vnlp .framer-yyioco > :last-child { margin-bottom: 0px; } .framer-o0aIb.framer-v-1e9vnlp .framer-yyioco > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-o0aIb.framer-v-1trijr1 .framer-14x6zf4, .framer-o0aIb.framer-v-1trijr1 .framer-yyioco { gap: 0px; } .framer-o0aIb.framer-v-1trijr1 .framer-14x6zf4 > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-o0aIb.framer-v-1trijr1 .framer-14x6zf4 > :first-child, .framer-o0aIb.framer-v-1trijr1 .framer-yyioco > :first-child { margin-top: 0px; } .framer-o0aIb.framer-v-1trijr1 .framer-14x6zf4 > :last-child, .framer-o0aIb.framer-v-1trijr1 .framer-yyioco > :last-child { margin-bottom: 0px; } .framer-o0aIb.framer-v-1trijr1 .framer-yyioco > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } }", ...css2, ...css];
var FramerlZiAP5duP = withCSS5(Component5, css11, "framer-o0aIb");
var lZiAP5duP_default = FramerlZiAP5duP;
FramerlZiAP5duP.displayName = "SECTION leadership";
FramerlZiAP5duP.defaultProps = {
  height: 557,
  width: 1512
};
addPropertyControls5(FramerlZiAP5duP, {
  variant: {
    options: ["XVqg6ogDJ", "BmiEGSNnl", "lu5zWILya", "H37rjnWJ4", "dJ4xxk_wZ", "vAuR8fRo3", "Uok8iieqZ", "mc0TMdDqP", "flPoymSnq", "bTZvBZjSv", "aS11NaEDy", "omJBwanlu", "PNkn41bS7", "Po2nnhHn7"],
    optionTitles: ["Desktop", "tablet", "phone", "Desktop Justin", "Desktop Chris", "Desktop Tarani", "Desktop Charlie", "tablet justin", "tablet chris", "tablet tarani", "tablet charlie", "phone justin", "phone chris", "phone tarani"],
    title: "Variant",
    type: ControlType5.Enum
  }
});
addFonts4(FramerlZiAP5duP, [{
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
    unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
    url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
    weight: "400"
  }]
}, ...LeadershipCardFullFonts, ...LeadershipCardFonts, ...getFontsFromSharedStyle4(fonts2), ...getFontsFromSharedStyle4(fonts)], {
  supportsExplicitInterCodegen: true
});
var __FramerMetadata__ = {
  "exports": {
    "default": {
      "type": "reactComponent",
      "name": "FramerlZiAP5duP",
      "slots": [],
      "annotations": {
        "framerIntrinsicHeight": "557",
        "framerImmutableVariables": "true",
        "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"BmiEGSNnl":{"layout":["fixed","auto"]},"lu5zWILya":{"layout":["fixed","auto"]},"H37rjnWJ4":{"layout":["fixed","fixed"]},"dJ4xxk_wZ":{"layout":["fixed","fixed"]},"vAuR8fRo3":{"layout":["fixed","fixed"]},"Uok8iieqZ":{"layout":["fixed","fixed"]},"mc0TMdDqP":{"layout":["fixed","auto"]},"flPoymSnq":{"layout":["fixed","auto"]},"bTZvBZjSv":{"layout":["fixed","auto"]},"aS11NaEDy":{"layout":["fixed","auto"]},"omJBwanlu":{"layout":["fixed","auto"]},"PNkn41bS7":{"layout":["fixed","auto"]},"Po2nnhHn7":{"layout":["fixed","auto"]}}}',
        "framerDisplayContentsDiv": "false",
        "framerComponentViewportWidth": "true",
        "framerContractVersion": "1",
        "framerIntrinsicWidth": "1512"
      }
    },
    "Props": {
      "type": "tsType",
      "annotations": {
        "framerContractVersion": "1"
      }
    },
    "__FramerMetadata__": {
      "type": "variable"
    }
  }
};
var _OriginalComponent = lZiAP5duP_default;
function SECTIONleadershipWrapped(props) {
  var _variant = useVariant(props.variant);
  var _inner = (_variant !== undefined) ? { ...props, variant: _variant } : props;
  return _ctxJsx(ContextProviders, { children: _ctxJsx(_OriginalComponent, _inner) });
}
Object.assign(SECTIONleadershipWrapped, _OriginalComponent);
export {  __FramerMetadata__,  SECTIONleadershipWrapped as default   };