"use client"
// http-url:https://framerusercontent.com/modules/b4bNUYeFeMFtiv3tajVu/nPjufhtWtvydoNqljOxg/Uiq33N87W.js
import { jsx as _jsx3, jsxs as _jsxs2 } from "react/jsx-runtime";
import { addFonts as addFonts2, addPropertyControls as addPropertyControls3, ComponentViewportProvider, ControlType as ControlType3, cx as cx3, getFonts as getFonts2, getFontsFromSharedStyle as getFontsFromSharedStyle2, getLoadingLazyAtYPosition, Image, Link as Link2, RichText as RichText2, SmartComponentScopedContainer, SVG as SVG2, useActiveVariantCallback as useActiveVariantCallback2, useComponentViewport as useComponentViewport2, useLocaleInfo as useLocaleInfo2, useVariantState as useVariantState2, withCSS as withCSS3, withFX, withOptimizedAppearEffect } from "@proofly-framer/runtime";
import { LayoutGroup as LayoutGroup2, motion as motion3, MotionConfigContext as MotionConfigContext2 } from "@proofly-framer/runtime";
import * as React3 from "react";
import { useRef as useRef2 } from "react";

// Extracted SVG assets
const __svg_1 = '<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 5.5 5.25 L 0 10.5" fill="transparent" height="10.5px" id="pTO_zwTXv" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(13.75 6.75)" width="5.5px"/><path d="M 14.25 0 L 0 0" fill="transparent" height="1px" id="Jh7NTfV71" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(4.75 12)" width="14.25px"/></svg>';
const __svg_2 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><path d="M 14.819 0.085 C 15.425 0.085 15.959 0.613 15.959 1.247 L 15.959 14.739 C 15.959 15.374 15.425 15.867 14.819 15.867 L 1.104 15.867 C 0.499 15.867 0 15.374 0 14.74 L 0 1.247 C 0 0.613 0.499 0.085 1.104 0.085 Z M 4.809 13.612 L 4.809 6.109 L 2.458 6.109 L 2.458 13.612 Z M 3.633 5.052 C 3.992 5.052 4.337 4.911 4.591 4.66 C 4.845 4.409 4.987 4.068 4.987 3.713 C 4.987 2.974 4.381 2.339 3.633 2.339 C 2.85 2.339 2.244 2.974 2.244 3.713 C 2.244 4.453 2.85 5.052 3.633 5.052 Z M 13.679 13.612 L 13.679 9.49 C 13.679 7.483 13.216 5.897 10.829 5.897 C 9.689 5.897 8.906 6.531 8.585 7.13 L 8.549 7.13 L 8.549 6.109 L 6.305 6.109 L 6.305 13.612 L 8.656 13.612 L 8.656 9.913 C 8.656 8.927 8.835 7.976 10.081 7.976 C 11.293 7.976 11.293 9.103 11.293 9.948 L 11.293 13.612 Z" fill="var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)) /* {&quot;name&quot;:&quot;Background&quot;} */"></path></svg>';
const __svg_3 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 20 20\"><path d=\"M 18.524 0.106 C 19.281 0.106 19.949 0.767 19.949 1.559 L 19.949 18.424 C 19.949 19.217 19.281 19.833 18.524 19.833 L 1.38 19.833 C 0.624 19.833 0 19.217 0 18.424 L 0 1.559 C 0 0.767 0.623 0.106 1.38 0.106 Z M 6.011 17.015 L 6.011 7.636 L 3.073 7.636 L 3.073 17.015 Z M 4.542 6.315 C 4.99 6.315 5.421 6.139 5.738 5.825 C 6.056 5.511 6.234 5.085 6.234 4.642 C 6.234 3.717 5.477 2.924 4.542 2.924 C 3.562 2.924 2.805 3.717 2.805 4.642 C 2.805 5.566 3.562 6.315 4.542 6.315 Z M 17.099 17.015 L 17.099 11.863 C 17.099 9.353 16.52 7.372 13.537 7.372 C 12.112 7.372 11.132 8.164 10.731 8.913 L 10.687 8.913 L 10.687 7.636 L 7.882 7.636 L 7.882 17.015 L 10.82 17.015 L 10.82 12.392 C 10.82 11.159 11.043 9.97 12.602 9.97 C 14.116 9.97 14.116 11.379 14.116 12.436 L 14.116 17.015 Z\" fill=\"var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)) /* {&quot;name&quot;:&quot;Background&quot;} */\"></path></svg>";


// http-url:https://framerusercontent.com/modules/5b0cRZbgNRw1dCNVnxhv/mDSpobAAY3IZwQ4LzCUn/z4Urx0kPV.js
import { fontStore } from "@proofly-framer/runtime";
fontStore.loadFonts(["CUSTOM;Haffer Regular", "CUSTOMV2;Haffer Bold", "CUSTOMV2;Haffer Bold Italic", "CUSTOMV2;Haffer Regular Italic"]);
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
var css = ['.framer-tLH4r .framer-styles-preset-1e98430:not(.rich-text-wrapper), .framer-tLH4r .framer-styles-preset-1e98430.rich-text-wrapper h5 { --framer-font-family: "Haffer Regular", sans-serif; --framer-font-family-bold: "Haffer Bold", sans-serif; --framer-font-family-bold-italic: "Haffer Bold Italic", sans-serif; --framer-font-family-italic: "Haffer Regular Italic", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 430; --framer-font-weight-bold: 790; --framer-font-weight-bold-italic: 790; --framer-font-weight-italic: 430; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }', '@media (max-width: 768px) and (min-width: 0px) { .framer-tLH4r .framer-styles-preset-1e98430:not(.rich-text-wrapper), .framer-tLH4r .framer-styles-preset-1e98430.rich-text-wrapper h5 { --framer-font-family: "Haffer Regular", sans-serif; --framer-font-family-bold: "Haffer Bold", sans-serif; --framer-font-family-bold-italic: "Haffer Bold Italic", sans-serif; --framer-font-family-italic: "Haffer Regular Italic", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 430; --framer-font-weight-bold: 790; --framer-font-weight-bold-italic: 790; --framer-font-weight-italic: 430; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }'];
var className = "framer-tLH4r";

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
    className: className4,
    layoutId,
    variant,
    fICyAUQY1,
    lKf_CQTz5,
    BKVe8Pgvw,
    ...restProps
  } = getProps(props);
  const href = useSVGTemplate("1173457374", svg);
  return <SVG {...restProps} className={cx("framer-EcgqK", className4)} layoutId={layoutId} ref={ref} role="presentation" style={{
    "--1335ju": lKf_CQTz5,
    "--18mrqx2": fICyAUQY1,
    ...style
  }} viewBox="0 0 24 24">{<use href={href} />}</SVG>;
});
var css2 = [`.framer-EcgqK { -webkit-mask: ${mask}; aspect-ratio: 1; display: block; mask: ${mask}; width: 24px; }`];
var Icon = withCSS(Component, css2, "framer-EcgqK");
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
import { fontStore as fontStore2 } from "@proofly-framer/runtime";
fontStore2.loadFonts(["CUSTOM;Haffer Regular"]);
var fonts2 = [{
  explicitInter: true,
  fonts: [{
    family: "Haffer Regular",
    source: "custom",
    url: "https://framerusercontent.com/assets/tAGQcvN09kwW2QjPLqLO197UqBQ.woff"
  }]
}];
var css3 = ['.framer-aqieJ .framer-styles-preset-mnimbo:not(.rich-text-wrapper), .framer-aqieJ .framer-styles-preset-mnimbo.rich-text-wrapper p { --framer-font-family: "Haffer Regular", "Haffer Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, #0a0b0a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }'];
var className2 = "framer-aqieJ";

// http-url:https://framerusercontent.com/modules/Ae2JxZ1NzMSdVHWpQSYI/6DXq0VgytYexIhDwN2rC/YlBLAavU6.js
import { fontStore as fontStore3 } from "@proofly-framer/runtime";
import { jsx as _ctxJsx } from "react/jsx-runtime";
import { ContextProviders, useVariant } from "@proofly-framer/runtime";
fontStore3.loadFonts(["CUSTOM;Haffer Regular"]);
var fonts3 = [{
  explicitInter: true,
  fonts: [{
    family: "Haffer Regular",
    source: "custom",
    url: "https://framerusercontent.com/assets/tAGQcvN09kwW2QjPLqLO197UqBQ.woff"
  }]
}];
var css4 = ['.framer-RqrbG .framer-styles-preset-1ydx3rt:not(.rich-text-wrapper), .framer-RqrbG .framer-styles-preset-1ydx3rt.rich-text-wrapper p { --framer-font-family: "Haffer Regular", "Haffer Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, #0a0b0a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }', '@media (max-width: 767px) and (min-width: 0px) { .framer-RqrbG .framer-styles-preset-1ydx3rt:not(.rich-text-wrapper), .framer-RqrbG .framer-styles-preset-1ydx3rt.rich-text-wrapper p { --framer-font-family: "Haffer Regular", "Haffer Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, #0a0b0a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }'];
var className3 = "framer-RqrbG";

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
    className: className4,
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
  const sharedStyleClassNames = [className3, className2];
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
            className: `${cx2(scopingClassNames, "framer-16c10ng", className4, classNames)} framer-3bbyhf`,
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
var css5 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-BsBK3.framer-3bbyhf, .framer-BsBK3 .framer-3bbyhf { display: block; }", ".framer-BsBK3.framer-16c10ng { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 12px 16px 12px 16px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-BsBK3 .framer-1lw4bu5 { flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }", ".framer-BsBK3 .framer-1nfv7fv { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-BsBK3 .framer-129t4kk { bottom: -23px; flex: none; height: auto; left: 50%; position: absolute; white-space: pre; width: auto; z-index: 1; }", ".framer-BsBK3.framer-v-1f8bjye.framer-16c10ng, .framer-BsBK3.framer-v-6stzd3.framer-16c10ng { padding: 12px; }", ".framer-BsBK3.framer-v-26utbf.framer-16c10ng, .framer-BsBK3.framer-v-nbkuw9.framer-16c10ng { padding: 4px 8px 4px 8px; }", ".framer-BsBK3.framer-v-mfbo2h.framer-16c10ng { padding: 24px 32px 24px 32px; }", ".framer-BsBK3.framer-v-mfbo2h .framer-129t4kk { bottom: -42px; }", ".framer-BsBK3.framer-v-19s4zot.framer-16c10ng { width: 48px; }", ".framer-BsBK3.framer-v-16c10ng.hover .framer-1nfv7fv { left: 50%; order: 1; position: absolute; top: -24px; z-index: 1; }", ".framer-BsBK3.framer-v-16c10ng.hover .framer-129t4kk { bottom: unset; left: unset; order: 2; position: relative; }", ".framer-BsBK3.framer-v-1f8bjye.hover .framer-1nfv7fv, .framer-BsBK3.framer-v-6stzd3.hover .framer-1nfv7fv { left: 50%; position: absolute; top: -24px; z-index: 1; }", ".framer-BsBK3.framer-v-1f8bjye.hover .framer-129t4kk, .framer-BsBK3.framer-v-j08lig.hover .framer-129t4kk, .framer-BsBK3.framer-v-26utbf.hover .framer-129t4kk, .framer-BsBK3.framer-v-6stzd3.hover .framer-129t4kk, .framer-BsBK3.framer-v-mfbo2h.hover .framer-129t4kk { bottom: unset; left: unset; position: relative; }", ".framer-BsBK3.framer-v-j08lig.hover.framer-16c10ng { padding: 11px 16px 12px 16px; }", ".framer-BsBK3.framer-v-j08lig.hover .framer-1nfv7fv { left: 50%; position: absolute; top: -17px; z-index: 1; }", ".framer-BsBK3.framer-v-26utbf.hover .framer-1nfv7fv { left: 50%; position: absolute; top: -22px; z-index: 1; }", ".framer-BsBK3.framer-v-mfbo2h.hover .framer-1nfv7fv { left: 50%; position: absolute; top: -45px; z-index: 1; }", ...css4, ...css3, '.framer-BsBK3[data-border="true"]::after, .framer-BsBK3 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }'];
var FrameryZBQGZIRL = withCSS2(Component2, css5, "framer-BsBK3");
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
}, ...ArrowRightFonts, ...getFontsFromSharedStyle(fonts3), ...getFontsFromSharedStyle(fonts2)], {
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
    className: className4,
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
  const sharedStyleClassNames = [className];
  const scopingClassNames = cx3(serializationHash2, ...sharedStyleClassNames);
  return <LayoutGroup2 id={layoutId ?? defaultLayoutId}>{<Variants2 animate={variants} initial={false}>{<Transition2 value={transition12}>{_jsxs2(motion3.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx3(scopingClassNames, "framer-hor6ip", className4, classNames),
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
var css6 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-HmAp8.framer-d539dj, .framer-HmAp8 .framer-d539dj { display: block; }", ".framer-HmAp8.framer-hor6ip { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 20px; position: relative; width: 420px; }", ".framer-HmAp8 .framer-1a9a98p { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-HmAp8 .framer-1b39o7q { flex: none; height: 150px; overflow: visible; position: relative; width: 150px; }", ".framer-HmAp8 .framer-1ajz80m { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: auto; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 1px; }", ".framer-HmAp8 .framer-xajnsw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-HmAp8 .framer-1b6rqn4, .framer-HmAp8 .framer-vvr8p7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-HmAp8 .framer-dymof4 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }", ".framer-HmAp8 .framer-131fmk5, .framer-HmAp8 .framer-1ry9mb2 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-HmAp8 .framer-zgzfl4 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 1px; }", ".framer-HmAp8 .framer-tiju0m { flex: none; height: 20px; position: relative; width: 20px; }", ".framer-HmAp8 .framer-p251py-container, .framer-HmAp8 .framer-1vrvwmp-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-HmAp8 .framer-1jbo8dx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 20px; overflow: visible; padding: 0px; position: absolute; top: 199px; width: 380px; z-index: 1; }", ".framer-HmAp8 .framer-56q22z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }", ".framer-HmAp8.framer-v-1lje9ty.framer-hor6ip { gap: 10px; }", ".framer-HmAp8.framer-v-1lje9ty .framer-1a9a98p { left: 20px; order: 0; position: absolute; top: -160px; width: 380px; z-index: 1; }", ".framer-HmAp8.framer-v-1lje9ty .framer-1jbo8dx, .framer-HmAp8.framer-v-ifkfn6 .framer-1jbo8dx { flex-wrap: wrap; left: unset; order: 1; position: relative; top: unset; width: 100%; }", ".framer-HmAp8.framer-v-1a1doss.framer-hor6ip { align-content: center; align-items: center; padding: 12px; width: 290px; }", ".framer-HmAp8.framer-v-1a1doss .framer-1a9a98p { align-content: flex-start; align-items: flex-start; }", ".framer-HmAp8.framer-v-1a1doss .framer-1b39o7q, .framer-HmAp8.framer-v-ifkfn6 .framer-1b39o7q { height: 100px; width: 100px; }", ".framer-HmAp8.framer-v-1a1doss .framer-xajnsw { gap: 2px; }", ".framer-HmAp8.framer-v-1a1doss .framer-tiju0m { height: 16px; width: 16px; }", ".framer-HmAp8.framer-v-1a1doss .framer-1jbo8dx { left: 12px; top: 135px; width: 267px; }", ".framer-HmAp8.framer-v-ifkfn6.framer-hor6ip { gap: 10px; padding: 16px; width: 290px; }", ".framer-HmAp8.framer-v-ifkfn6 .framer-1a9a98p { align-content: flex-start; align-items: flex-start; left: 12px; order: 0; overflow: hidden; position: absolute; top: -140px; width: 251px; z-index: 1; }", ...css, '.framer-HmAp8[data-border="true"]::after, .framer-HmAp8 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'];
var FramerUiq33N87W = withCSS3(Component3, css6, "framer-HmAp8");
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
}, ...ButtonFonts, ...getFontsFromSharedStyle2(fonts)], {
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
      "name": "FramerUiq33N87W",
      "slots": [],
      "annotations": {
        "framerImmutableVariables": "true",
        "framerDisplayContentsDiv": "false",
        "framerContractVersion": "1",
        "framerIntrinsicWidth": "420",
        "framerColorSyntax": "true",
        "framerComponentViewportWidth": "true",
        "framerIntrinsicHeight": "190",
        "framerAutoSizeImages": "true",
        "framerVariables": '{"NuYJweThp":"pic","Q6MRFnGBV":"name1","RHVU0_UK3":"role","mq3ZFyruO":"link","mSV1Cy9OQ":"bio","AdqzABu7s":"click"}',
        "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"W9p3QxUPk":{"layout":["fixed","auto"]},"VkSn7kGfD":{"layout":["fixed","auto"]},"W1ObH1llL":{"layout":["fixed","auto"]}}}'
      }
    },
    "__FramerMetadata__": {
      "type": "variable"
    }
  }
};
var _OriginalComponent = Uiq33N87W_default;
function TeammembercardWrapped(props) {
  var _variant = useVariant(props.variant);
  var _inner = (_variant !== undefined) ? { ...props, variant: _variant } : props;
  return _ctxJsx(ContextProviders, { children: _ctxJsx(_OriginalComponent, _inner) });
}
Object.assign(TeammembercardWrapped, _OriginalComponent);
export {  __FramerMetadata__,  TeammembercardWrapped as default   };