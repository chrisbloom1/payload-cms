"use client"
// http-url:https://framerusercontent.com/modules/un9r9LASwW223zhwioeP/ntUgwoOPe8RRf99KDTLV/Tx8iX5PmF.js
import { jsx as _jsx3, jsxs as _jsxs2 } from "react/jsx-runtime";
import { addFonts as addFonts2, addPropertyControls as addPropertyControls3, ComponentViewportProvider, ControlType as ControlType3, cx as cx3, getFonts as getFonts2, getFontsFromSharedStyle as getFontsFromSharedStyle2, ResolveLinks, RichText as RichText2, useActiveVariantCallback as useActiveVariantCallback2, useComponentViewport as useComponentViewport2, useLocaleInfo as useLocaleInfo2, useRouter, useVariantState as useVariantState2, withCSS as withCSS3, withFX } from "@proofly-framer/runtime";
import { LayoutGroup as LayoutGroup2, motion as motion3, MotionConfigContext as MotionConfigContext2 } from "@proofly-framer/runtime";
import * as React3 from "react";

// Extracted SVG assets
const __svg_1 = '<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 5.5 5.25 L 0 10.5" fill="transparent" height="10.5px" id="pTO_zwTXv" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(13.75 6.75)" width="5.5px"/><path d="M 14.25 0 L 0 0" fill="transparent" height="1px" id="Jh7NTfV71" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(4.75 12)" width="14.25px"/></svg>';


// http-url:https://framerusercontent.com/modules/pXZkrUiMRO2bF9vULdG6/Hw0wz853mhyY536Et5MB/ls1deq5j3.js
import { fontStore } from "@proofly-framer/runtime";
fontStore.loadFonts(["CUSTOM;Haffer Bold"]);
var fonts = [{
  explicitInter: true,
  fonts: [{
    family: "Haffer Bold",
    source: "custom",
    url: "https://framerusercontent.com/assets/eRqmC6W9PktN8mUcnwel9B6wmPs.woff"
  }]
}];
var css = ['.framer-fUnxd .framer-styles-preset-uzffr2:not(.rich-text-wrapper), .framer-fUnxd .framer-styles-preset-uzffr2.rich-text-wrapper p { --framer-font-family: "Haffer Bold", "Haffer Bold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 100%; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-7049cce7-715e-45a0-a41e-932274474306, #ff003c); --framer-text-decoration: underline; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }'];
var className = "framer-fUnxd";

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
var css2 = ['.framer-aqieJ .framer-styles-preset-mnimbo:not(.rich-text-wrapper), .framer-aqieJ .framer-styles-preset-mnimbo.rich-text-wrapper p { --framer-font-family: "Haffer Regular", "Haffer Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, #0a0b0a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }'];
var className2 = "framer-aqieJ";

// http-url:https://framerusercontent.com/modules/1yPBes2MOQpyJo6DFDOk/MdZClTJzdIorZJNcVjTw/UDEB09jjg.js
import { fontStore as fontStore3 } from "@proofly-framer/runtime";
fontStore3.loadFonts(["CUSTOM;Haffer Regular"]);
var fonts3 = [{
  explicitInter: true,
  fonts: [{
    cssFamilyName: "Haffer Regular",
    source: "custom",
    style: "normal",
    uiFamilyName: "Haffer",
    url: "https://framerusercontent.com/assets/tAGQcvN09kwW2QjPLqLO197UqBQ.woff",
    weight: "430"
  }]
}];
var css3 = ['.framer-6hVw8 .framer-styles-preset-1p8b08q:not(.rich-text-wrapper), .framer-6hVw8 .framer-styles-preset-1p8b08q.rich-text-wrapper p { --framer-font-family: "Haffer Regular", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 430; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, #eaeaeb); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; }', '@media (max-width: 810px) and (min-width: 510px) { .framer-6hVw8 .framer-styles-preset-1p8b08q:not(.rich-text-wrapper), .framer-6hVw8 .framer-styles-preset-1p8b08q.rich-text-wrapper p { --framer-font-family: "Haffer Regular", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 430; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, #eaeaeb); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }', '@media (max-width: 509px) and (min-width: 0px) { .framer-6hVw8 .framer-styles-preset-1p8b08q:not(.rich-text-wrapper), .framer-6hVw8 .framer-styles-preset-1p8b08q.rich-text-wrapper p { --framer-font-family: "Haffer Regular", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 430; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, #eaeaeb); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }'];
var className3 = "framer-6hVw8";

// http-url:https://framerusercontent.com/modules/5b0cRZbgNRw1dCNVnxhv/mDSpobAAY3IZwQ4LzCUn/z4Urx0kPV.js
import { fontStore as fontStore4 } from "@proofly-framer/runtime";
fontStore4.loadFonts(["CUSTOM;Haffer Regular", "CUSTOMV2;Haffer Bold", "CUSTOMV2;Haffer Bold Italic", "CUSTOMV2;Haffer Regular Italic"]);
var fonts4 = [{
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
var css4 = ['.framer-tLH4r .framer-styles-preset-1e98430:not(.rich-text-wrapper), .framer-tLH4r .framer-styles-preset-1e98430.rich-text-wrapper h5 { --framer-font-family: "Haffer Regular", sans-serif; --framer-font-family-bold: "Haffer Bold", sans-serif; --framer-font-family-bold-italic: "Haffer Bold Italic", sans-serif; --framer-font-family-italic: "Haffer Regular Italic", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 430; --framer-font-weight-bold: 790; --framer-font-weight-bold-italic: 790; --framer-font-weight-italic: 430; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }', '@media (max-width: 768px) and (min-width: 0px) { .framer-tLH4r .framer-styles-preset-1e98430:not(.rich-text-wrapper), .framer-tLH4r .framer-styles-preset-1e98430.rich-text-wrapper h5 { --framer-font-family: "Haffer Regular", sans-serif; --framer-font-family-bold: "Haffer Bold", sans-serif; --framer-font-family-bold-italic: "Haffer Bold Italic", sans-serif; --framer-font-family-italic: "Haffer Regular Italic", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 430; --framer-font-weight-bold: 790; --framer-font-weight-bold-italic: 790; --framer-font-weight-italic: 430; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }'];
var className4 = "framer-tLH4r";

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
    className: className6,
    layoutId,
    variant,
    fICyAUQY1,
    lKf_CQTz5,
    BKVe8Pgvw,
    ...restProps
  } = getProps(props);
  const href = useSVGTemplate("1173457374", svg);
  return <SVG {...restProps} className={cx("framer-EcgqK", className6)} layoutId={layoutId} ref={ref} role="presentation" style={{
    "--1335ju": lKf_CQTz5,
    "--18mrqx2": fICyAUQY1,
    ...style
  }} viewBox="0 0 24 24">{<use href={href} />}</SVG>;
});
var css5 = [`.framer-EcgqK { -webkit-mask: ${mask}; aspect-ratio: 1; display: block; mask: ${mask}; width: 24px; }`];
var Icon = withCSS(Component, css5, "framer-EcgqK");
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

// http-url:https://framerusercontent.com/modules/Ae2JxZ1NzMSdVHWpQSYI/6DXq0VgytYexIhDwN2rC/YlBLAavU6.js
import { fontStore as fontStore5 } from "@proofly-framer/runtime";
import { jsx as _ctxJsx } from "react/jsx-runtime";
import { ContextProviders, useVariant } from "@proofly-framer/runtime";
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
    className: className6,
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
  const sharedStyleClassNames = [className5, className2];
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
            className: `${cx2(scopingClassNames, "framer-16c10ng", className6, classNames)} framer-3bbyhf`,
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
var css7 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-BsBK3.framer-3bbyhf, .framer-BsBK3 .framer-3bbyhf { display: block; }", ".framer-BsBK3.framer-16c10ng { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 12px 16px 12px 16px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-BsBK3 .framer-1lw4bu5 { flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }", ".framer-BsBK3 .framer-1nfv7fv { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-BsBK3 .framer-129t4kk { bottom: -23px; flex: none; height: auto; left: 50%; position: absolute; white-space: pre; width: auto; z-index: 1; }", ".framer-BsBK3.framer-v-1f8bjye.framer-16c10ng, .framer-BsBK3.framer-v-6stzd3.framer-16c10ng { padding: 12px; }", ".framer-BsBK3.framer-v-26utbf.framer-16c10ng, .framer-BsBK3.framer-v-nbkuw9.framer-16c10ng { padding: 4px 8px 4px 8px; }", ".framer-BsBK3.framer-v-mfbo2h.framer-16c10ng { padding: 24px 32px 24px 32px; }", ".framer-BsBK3.framer-v-mfbo2h .framer-129t4kk { bottom: -42px; }", ".framer-BsBK3.framer-v-19s4zot.framer-16c10ng { width: 48px; }", ".framer-BsBK3.framer-v-16c10ng.hover .framer-1nfv7fv { left: 50%; order: 1; position: absolute; top: -24px; z-index: 1; }", ".framer-BsBK3.framer-v-16c10ng.hover .framer-129t4kk { bottom: unset; left: unset; order: 2; position: relative; }", ".framer-BsBK3.framer-v-1f8bjye.hover .framer-1nfv7fv, .framer-BsBK3.framer-v-6stzd3.hover .framer-1nfv7fv { left: 50%; position: absolute; top: -24px; z-index: 1; }", ".framer-BsBK3.framer-v-1f8bjye.hover .framer-129t4kk, .framer-BsBK3.framer-v-j08lig.hover .framer-129t4kk, .framer-BsBK3.framer-v-26utbf.hover .framer-129t4kk, .framer-BsBK3.framer-v-6stzd3.hover .framer-129t4kk, .framer-BsBK3.framer-v-mfbo2h.hover .framer-129t4kk { bottom: unset; left: unset; position: relative; }", ".framer-BsBK3.framer-v-j08lig.hover.framer-16c10ng { padding: 11px 16px 12px 16px; }", ".framer-BsBK3.framer-v-j08lig.hover .framer-1nfv7fv { left: 50%; position: absolute; top: -17px; z-index: 1; }", ".framer-BsBK3.framer-v-26utbf.hover .framer-1nfv7fv { left: 50%; position: absolute; top: -22px; z-index: 1; }", ".framer-BsBK3.framer-v-mfbo2h.hover .framer-1nfv7fv { left: 50%; position: absolute; top: -45px; z-index: 1; }", ...css6, ...css2, '.framer-BsBK3[data-border="true"]::after, .framer-BsBK3 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }'];
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
}, ...ArrowRightFonts, ...getFontsFromSharedStyle(fonts5), ...getFontsFromSharedStyle(fonts2)], {
  supportsExplicitInterCodegen: true
});

// http-url:https://framerusercontent.com/modules/un9r9LASwW223zhwioeP/ntUgwoOPe8RRf99KDTLV/Tx8iX5PmF.js
var ButtonFonts = getFonts2(yZBQGZIRL_default);
var MotionDivWithFX = withFX(motion3.div);
var cycleOrder2 = ["hxu9As9l2", "C7I7OJDKi", "w3PhWo8Sf", "KOPhYzfZr", "LlrNByMzC", "BmD51F7vo", "tu9jXzDOE"];
var serializationHash2 = "framer-hAAaN";
var variantClassNames2 = {
  BmD51F7vo: "framer-v-mhtlnm",
  C7I7OJDKi: "framer-v-1peo0c4",
  hxu9As9l2: "framer-v-1pds881",
  KOPhYzfZr: "framer-v-1qy7it0",
  LlrNByMzC: "framer-v-7fdsqt",
  tu9jXzDOE: "framer-v-1fbcpic",
  w3PhWo8Sf: "framer-v-d076eh"
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
var transformTemplate12 = (_, t) => `translate(-50%, -50%) ${t}`;
var animation = {
  opacity: 0,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  skewX: 0,
  skewY: 0,
  x: 0,
  y: 100
};
var transition2 = {
  damping: 60,
  delay: 0.1,
  mass: 1,
  stiffness: 250,
  type: "spring"
};
var animation1 = {
  opacity: 0,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  skewX: 0,
  skewY: 0,
  transition: transition2,
  x: 0,
  y: 100
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
  "phone-build": "LlrNByMzC",
  "phone-deliver": "BmD51F7vo",
  "phone-network": "KOPhYzfZr",
  "phone-service": "tu9jXzDOE",
  "service verticals": "hxu9As9l2",
  deliver: "C7I7OJDKi",
  service: "w3PhWo8Sf"
};
var getProps3 = ({
  height,
  id,
  width,
  ...props
}) => {
  return {
    ...props,
    variant: humanReadableVariantMap2[props.variant] ?? props.variant ?? "hxu9As9l2"
  };
};
var createLayoutDependency2 = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component3 = React3.forwardRef(function (props, ref) {
  const {
    activeLocale,
    setLocale
  } = useLocaleInfo2();
  const {
    style,
    className: className6,
    layoutId,
    variant,
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
    defaultVariant: "hxu9As9l2",
    variant,
    variantClassNames: variantClassNames2
  });
  const layoutDependency = createLayoutDependency2(props, variants);
  const {
    activeVariantCallback,
    delay
  } = useActiveVariantCallback2(baseVariant);
  const onTapl735sr = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("hxu9As9l2"), 200);
  });
  const onTapqtifoy = activeVariantCallback(async (...args) => {
    setVariant("KOPhYzfZr");
  });
  const onTap1ckfu5n = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("C7I7OJDKi"), 200);
  });
  const onTap1iniqwu = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("BmD51F7vo"), 200);
  });
  const onTap5sfpd2 = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("w3PhWo8Sf"), 200);
  });
  const onTap1yvwynn = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("tu9jXzDOE"), 200);
  });
  const ref1 = React3.useRef(null);
  const isDisplayed = () => {
    if (["C7I7OJDKi", "w3PhWo8Sf"].includes(baseVariant)) return false;
    return true;
  };
  const router = useRouter();
  const isDisplayed1 = () => {
    if (baseVariant === "C7I7OJDKi") return true;
    return false;
  };
  const isDisplayed2 = () => {
    if (baseVariant === "w3PhWo8Sf") return true;
    return false;
  };
  const defaultLayoutId = React3.useId();
  const sharedStyleClassNames = [className2, className4, className3, className];
  const componentViewport = useComponentViewport2();
  return <LayoutGroup2 id={layoutId ?? defaultLayoutId}>{<Variants2 animate={variants} initial={false}>{<Transition2 value={transition12}>{_jsxs2(motion3.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx3(serializationHash2, ...sharedStyleClassNames, "framer-1pds881", className6, classNames),
          "data-framer-name": "service verticals",
          layoutDependency,
          layoutId: "hxu9As9l2",
          ref: ref ?? ref1,
          style: {
            ...style
          },
          ...addPropertyOverrides2({
            BmD51F7vo: {
              "data-framer-name": "phone-deliver"
            },
            C7I7OJDKi: {
              "data-framer-name": "deliver"
            },
            KOPhYzfZr: {
              "data-framer-name": "phone-network"
            },
            LlrNByMzC: {
              "data-framer-name": "phone-build"
            },
            tu9jXzDOE: {
              "data-framer-name": "phone-service"
            },
            w3PhWo8Sf: {
              "data-framer-name": "service"
            }
          }, baseVariant, gestureVariant),
          children: [_jsxs2(motion3.div, {
            className: "framer-hbzf2b",
            layoutDependency,
            layoutId: "WbZsvzJ3S",
            children: [_jsx3(motion3.div, {
              className: "framer-15td2ve",
              "data-highlight": true,
              layoutDependency,
              layoutId: "bghZR9nu1",
              onTap: onTapl735sr,
              style: {
                backgroundColor: "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))",
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10
              },
              variants: {
                BmD51F7vo: {
                  borderTopLeftRadius: 5,
                  borderTopRightRadius: 5
                },
                C7I7OJDKi: {
                  backgroundColor: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(4, 22, 40))"
                },
                KOPhYzfZr: {
                  borderTopLeftRadius: 5,
                  borderTopRightRadius: 5
                },
                LlrNByMzC: {
                  borderTopLeftRadius: 5,
                  borderTopRightRadius: 5
                },
                tu9jXzDOE: {
                  borderTopLeftRadius: 5,
                  borderTopRightRadius: 5
                },
                w3PhWo8Sf: {
                  backgroundColor: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(4, 22, 40))"
                }
              },
              ...addPropertyOverrides2({
                BmD51F7vo: {
                  onTap: onTapqtifoy
                },
                KOPhYzfZr: {
                  onTap: onTapqtifoy
                },
                LlrNByMzC: {
                  onTap: onTapqtifoy
                },
                tu9jXzDOE: {
                  onTap: onTapqtifoy
                }
              }, baseVariant, gestureVariant),
              children: <RichText2 __fromCanvasComponent className="framer-1uwu800" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="tV8_0VF65" style={{
                "--extracted-r6o4lv": "var(--token-8b7bf222-cf23-422b-9349-f0eb5832be6f, rgb(18, 9, 174))",
                "--framer-link-text-color": "rgb(0, 153, 255)",
                "--framer-link-text-decoration": "underline"
              }} transformTemplate={transformTemplate12} variants={{
                C7I7OJDKi: {
                  "--extracted-r6o4lv": "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))"
                },
                w3PhWo8Sf: {
                  "--extracted-r6o4lv": "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))"
                }
              }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides2({
                BmD51F7vo: {
                  children: <React3.Fragment>{_jsx3(motion3.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "12px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "center",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8b7bf222-cf23-422b-9349-f0eb5832be6f, rgb(18, 9, 174)))",
                        "--framer-text-transform": "uppercase"
                      },
                      children: "Build"
                    })}</React3.Fragment>,
                  fonts: ["CUSTOM;Haffer Regular"],
                  transformTemplate: void 0
                },
                C7I7OJDKi: {
                  children: <React3.Fragment>{_jsx3(motion3.p, {
                      className: "framer-styles-preset-mnimbo",
                      "data-styles-preset": "QkI8Aa5rN",
                      style: {
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))"
                      },
                      children: "Build"
                    })}</React3.Fragment>
                },
                KOPhYzfZr: {
                  children: <React3.Fragment>{_jsx3(motion3.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "12px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "center",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8b7bf222-cf23-422b-9349-f0eb5832be6f, rgb(18, 9, 174)))",
                        "--framer-text-transform": "uppercase"
                      },
                      children: "Build"
                    })}</React3.Fragment>,
                  fonts: ["CUSTOM;Haffer Regular"],
                  transformTemplate: void 0
                },
                LlrNByMzC: {
                  children: <React3.Fragment>{_jsx3(motion3.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "12px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "center",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8b7bf222-cf23-422b-9349-f0eb5832be6f, rgb(18, 9, 174)))",
                        "--framer-text-transform": "uppercase"
                      },
                      children: "Build"
                    })}</React3.Fragment>,
                  fonts: ["CUSTOM;Haffer Regular"],
                  transformTemplate: void 0
                },
                tu9jXzDOE: {
                  children: <React3.Fragment>{_jsx3(motion3.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "12px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "center",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8b7bf222-cf23-422b-9349-f0eb5832be6f, rgb(18, 9, 174)))",
                        "--framer-text-transform": "uppercase"
                      },
                      children: "Build"
                    })}</React3.Fragment>,
                  fonts: ["CUSTOM;Haffer Regular"],
                  transformTemplate: void 0
                },
                w3PhWo8Sf: {
                  children: <React3.Fragment>{_jsx3(motion3.p, {
                      className: "framer-styles-preset-mnimbo",
                      "data-styles-preset": "QkI8Aa5rN",
                      style: {
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))"
                      },
                      children: "Build"
                    })}</React3.Fragment>
                }
              }, baseVariant, gestureVariant)}>{<React3.Fragment>{_jsx3(motion3.p, {
                    className: "framer-styles-preset-mnimbo",
                    "data-styles-preset": "QkI8Aa5rN",
                    style: {
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8b7bf222-cf23-422b-9349-f0eb5832be6f, rgb(18, 9, 174)))"
                    },
                    children: "Build"
                  })}</React3.Fragment>}</RichText2>
            }), _jsx3(motion3.div, {
              className: "framer-1qbjzfd",
              "data-highlight": true,
              layoutDependency,
              layoutId: "ZVjYK0om4",
              onTap: onTap1ckfu5n,
              style: {
                backgroundColor: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(4, 22, 40))",
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10
              },
              variants: {
                BmD51F7vo: {
                  borderTopLeftRadius: 5,
                  borderTopRightRadius: 5
                },
                C7I7OJDKi: {
                  backgroundColor: "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))"
                },
                KOPhYzfZr: {
                  borderTopLeftRadius: 5,
                  borderTopRightRadius: 5
                },
                LlrNByMzC: {
                  borderTopLeftRadius: 5,
                  borderTopRightRadius: 5
                },
                tu9jXzDOE: {
                  borderTopLeftRadius: 5,
                  borderTopRightRadius: 5
                }
              },
              ...addPropertyOverrides2({
                BmD51F7vo: {
                  onTap: onTap1iniqwu
                },
                KOPhYzfZr: {
                  onTap: onTap1iniqwu
                },
                LlrNByMzC: {
                  onTap: onTap1iniqwu
                },
                tu9jXzDOE: {
                  onTap: onTap1iniqwu
                }
              }, baseVariant, gestureVariant),
              children: <RichText2 __fromCanvasComponent className="framer-qt6q1k" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="ME7RWLKwG" style={{
                "--extracted-r6o4lv": "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))",
                "--framer-link-text-color": "rgb(0, 153, 255)",
                "--framer-link-text-decoration": "underline"
              }} transformTemplate={transformTemplate12} variants={{
                C7I7OJDKi: {
                  "--extracted-r6o4lv": "var(--token-8b7bf222-cf23-422b-9349-f0eb5832be6f, rgb(18, 9, 174))"
                }
              }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides2({
                BmD51F7vo: {
                  children: <React3.Fragment>{_jsx3(motion3.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "12px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "center",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))",
                        "--framer-text-transform": "uppercase"
                      },
                      children: "Deliver"
                    })}</React3.Fragment>,
                  fonts: ["CUSTOM;Haffer Regular"],
                  transformTemplate: void 0
                },
                C7I7OJDKi: {
                  children: <React3.Fragment>{_jsx3(motion3.p, {
                      className: "framer-styles-preset-mnimbo",
                      "data-styles-preset": "QkI8Aa5rN",
                      style: {
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8b7bf222-cf23-422b-9349-f0eb5832be6f, rgb(18, 9, 174)))"
                      },
                      children: "Deliver"
                    })}</React3.Fragment>
                },
                KOPhYzfZr: {
                  children: <React3.Fragment>{_jsx3(motion3.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "12px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "center",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))",
                        "--framer-text-transform": "uppercase"
                      },
                      children: "Deliver"
                    })}</React3.Fragment>,
                  fonts: ["CUSTOM;Haffer Regular"],
                  transformTemplate: void 0
                },
                LlrNByMzC: {
                  children: <React3.Fragment>{_jsx3(motion3.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "12px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "center",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))",
                        "--framer-text-transform": "uppercase"
                      },
                      children: "Deliver"
                    })}</React3.Fragment>,
                  fonts: ["CUSTOM;Haffer Regular"],
                  transformTemplate: void 0
                },
                tu9jXzDOE: {
                  children: <React3.Fragment>{_jsx3(motion3.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "12px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "center",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))",
                        "--framer-text-transform": "uppercase"
                      },
                      children: "Deliver"
                    })}</React3.Fragment>,
                  fonts: ["CUSTOM;Haffer Regular"],
                  transformTemplate: void 0
                }
              }, baseVariant, gestureVariant)}>{<React3.Fragment>{_jsx3(motion3.p, {
                    className: "framer-styles-preset-mnimbo",
                    "data-styles-preset": "QkI8Aa5rN",
                    style: {
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))"
                    },
                    children: "Deliver"
                  })}</React3.Fragment>}</RichText2>
            }), _jsx3(motion3.div, {
              className: "framer-115uf5m",
              "data-highlight": true,
              layoutDependency,
              layoutId: "s0ptL9hVK",
              onTap: onTap5sfpd2,
              style: {
                backgroundColor: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(4, 22, 40))",
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10
              },
              variants: {
                BmD51F7vo: {
                  borderTopLeftRadius: 5,
                  borderTopRightRadius: 5
                },
                KOPhYzfZr: {
                  borderTopLeftRadius: 5,
                  borderTopRightRadius: 5
                },
                LlrNByMzC: {
                  borderTopLeftRadius: 5,
                  borderTopRightRadius: 5
                },
                tu9jXzDOE: {
                  borderTopLeftRadius: 5,
                  borderTopRightRadius: 5
                },
                w3PhWo8Sf: {
                  backgroundColor: "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))"
                }
              },
              ...addPropertyOverrides2({
                BmD51F7vo: {
                  onTap: onTap1yvwynn
                },
                KOPhYzfZr: {
                  onTap: onTap1yvwynn
                },
                LlrNByMzC: {
                  onTap: onTap1yvwynn
                },
                tu9jXzDOE: {
                  onTap: onTap1yvwynn
                }
              }, baseVariant, gestureVariant),
              children: <RichText2 __fromCanvasComponent className="framer-qazfje" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="bO4wD_PGU" style={{
                "--extracted-r6o4lv": "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))",
                "--framer-link-text-color": "rgb(0, 153, 255)",
                "--framer-link-text-decoration": "underline"
              }} transformTemplate={transformTemplate12} variants={{
                w3PhWo8Sf: {
                  "--extracted-r6o4lv": "var(--token-8b7bf222-cf23-422b-9349-f0eb5832be6f, rgb(18, 9, 174))"
                }
              }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides2({
                BmD51F7vo: {
                  children: <React3.Fragment>{_jsx3(motion3.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "12px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "center",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))",
                        "--framer-text-transform": "uppercase"
                      },
                      children: "Service"
                    })}</React3.Fragment>,
                  fonts: ["CUSTOM;Haffer Regular"],
                  transformTemplate: void 0
                },
                KOPhYzfZr: {
                  children: <React3.Fragment>{_jsx3(motion3.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "12px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "center",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))",
                        "--framer-text-transform": "uppercase"
                      },
                      children: "Service"
                    })}</React3.Fragment>,
                  fonts: ["CUSTOM;Haffer Regular"],
                  transformTemplate: void 0
                },
                LlrNByMzC: {
                  children: <React3.Fragment>{_jsx3(motion3.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "12px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "center",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))",
                        "--framer-text-transform": "uppercase"
                      },
                      children: "Service"
                    })}</React3.Fragment>,
                  fonts: ["CUSTOM;Haffer Regular"],
                  transformTemplate: void 0
                },
                tu9jXzDOE: {
                  children: <React3.Fragment>{_jsx3(motion3.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "12px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "center",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))",
                        "--framer-text-transform": "uppercase"
                      },
                      children: "Service"
                    })}</React3.Fragment>,
                  fonts: ["CUSTOM;Haffer Regular"],
                  transformTemplate: void 0
                },
                w3PhWo8Sf: {
                  children: <React3.Fragment>{_jsx3(motion3.p, {
                      className: "framer-styles-preset-mnimbo",
                      "data-styles-preset": "QkI8Aa5rN",
                      style: {
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-8b7bf222-cf23-422b-9349-f0eb5832be6f, rgb(18, 9, 174)))"
                      },
                      children: "Service"
                    })}</React3.Fragment>
                }
              }, baseVariant, gestureVariant)}>{<React3.Fragment>{_jsx3(motion3.p, {
                    className: "framer-styles-preset-mnimbo",
                    "data-styles-preset": "QkI8Aa5rN",
                    style: {
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))"
                    },
                    children: "Service"
                  })}</React3.Fragment>}</RichText2>
            })]
          }), isDisplayed() && _jsxs2(motion3.div, {
            className: "framer-muvmau",
            layoutDependency,
            layoutId: "EFvFHPJLE",
            style: {
              backgroundColor: "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))",
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16,
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16
            },
            children: [_jsx3(motion3.div, {
              className: "framer-169n2zj",
              layoutDependency,
              layoutId: "hZ3GOAeJ0",
              children: <RichText2 __fromCanvasComponent className="framer-1qbaong" data-framer-name="HARDWARE BRAND" fonts={["Inter", "Inter-Bold"]} layoutDependency={layoutDependency} layoutId="L2BH7gRDf" style={{
                "--extracted-1lwpl3i": "var(--token-7d157a73-1367-4d99-bd80-4c0a389c19cb, rgb(254, 87, 11))",
                "--framer-paragraph-spacing": "10px"
              }} verticalAlignment="bottom" withExternalLayout>{<React3.Fragment>{_jsx3(motion3.h5, {
                    className: "framer-styles-preset-1e98430",
                    "data-styles-preset": "z4Urx0kPV",
                    style: {
                      "--framer-text-alignment": "left",
                      "--framer-text-color": "var(--extracted-1lwpl3i, var(--token-7d157a73-1367-4d99-bd80-4c0a389c19cb, rgb(254, 87, 11)))"
                    },
                    children: _jsx3(motion3.span, {
                      "data-text-fill": "true",
                      style: {
                        backgroundImage: "linear-gradient(0deg, var(--token-75fdd7c7-59c1-4dd9-b6a6-a95e1f848dd6, rgb(254, 87, 11)) 0%, var(--token-e7b58a1e-85ee-45bd-8748-51bf33b27920, rgb(255, 24, 94)) 100%)"
                      },
                      children: _jsx3(motion3.strong, {
                        children: "Build"
                      })
                    })
                  })}</React3.Fragment>}</RichText2>
            }), <RichText2 __fromCanvasComponent className="framer-1j1k38w" data-framer-name="Leverage a network that supports every stage of your product’s lifecycle, from concept to delivery." fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="U7vcDgjMy" style={{
              "--extracted-r6o4lv": "var(--token-7ce68db9-0723-4469-83ef-663a6e703840, rgb(43, 43, 61))",
              "--framer-paragraph-spacing": "10px"
            }} verticalAlignment="center" withExternalLayout>{<React3.Fragment>{_jsx3(motion3.p, {
                  className: "framer-styles-preset-1p8b08q",
                  "data-styles-preset": "UDEB09jjg",
                  style: {
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7ce68db9-0723-4469-83ef-663a6e703840, rgb(43, 43, 61)))"
                  },
                  children: "Quality contract manufacturing and assembly with a Detroit-based contract manufacturer & 7 national partners."
                })}</React3.Fragment>}</RichText2>, _jsxs2(motion3.div, {
              className: "framer-6sb1sp",
              layoutDependency,
              layoutId: "JclletFjH",
              children: [<ResolveLinks links={[{
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }, {
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }, {
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }, {
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }, {
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }]}>{resolvedLinks => <ComponentViewportProvider height={46} y={(componentViewport?.y || 0) + 85 + (((componentViewport?.height || 637) - 170 - 708) / 2 + 50 + 0) + 16 + 212 + 32.5} {...addPropertyOverrides2({
                  BmD51F7vo: {
                    y: (componentViewport?.y || 0) + 85 + (((componentViewport?.height || 574) - 170 - 694) / 2 + 36 + 0) + 16 + 212 + 32.5
                  },
                  KOPhYzfZr: {
                    y: (componentViewport?.y || 0) + 85 + (((componentViewport?.height || 574) - 170 - 694) / 2 + 36 + 0) + 16 + 212 + 32.5
                  },
                  LlrNByMzC: {
                    y: (componentViewport?.y || 0) + 85 + (((componentViewport?.height || 562) - 170 - 682) / 2 + 24 + 0) + 16 + 212 + 32.5
                  },
                  tu9jXzDOE: {
                    y: (componentViewport?.y || 0) + 85 + (((componentViewport?.height || 574) - 170 - 694) / 2 + 36 + 0) + 16 + 212 + 32.5
                  }
                }, baseVariant, gestureVariant)}>{_jsx3(motion3.div, {
                    className: "framer-tbw7wv-container",
                    layoutDependency,
                    layoutId: "pnj_V_1BZ-container",
                    children: _jsx3(yZBQGZIRL_default, {
                      height: "100%",
                      id: "pnj_V_1BZ",
                      layoutId: "pnj_V_1BZ",
                      P7ZHYgc9n: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(4, 22, 40))",
                      qzxtK1_9Y: resolvedLinks[0],
                      RQDpSij6V: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(224, 224, 255))",
                      TiAMtDaz3: "CBU (Complete Build Up)",
                      variant: "llZeWFj0E",
                      width: "100%",
                      ...addPropertyOverrides2({
                        BmD51F7vo: {
                          qzxtK1_9Y: resolvedLinks[3]
                        },
                        KOPhYzfZr: {
                          qzxtK1_9Y: resolvedLinks[1]
                        },
                        LlrNByMzC: {
                          qzxtK1_9Y: resolvedLinks[2]
                        },
                        tu9jXzDOE: {
                          qzxtK1_9Y: resolvedLinks[4]
                        }
                      }, baseVariant, gestureVariant)
                    })
                  })}</ComponentViewportProvider>}</ResolveLinks>, <ResolveLinks links={[{
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }, {
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }, {
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }, {
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }, {
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }]}>{resolvedLinks1 => <ComponentViewportProvider height={46} y={(componentViewport?.y || 0) + 85 + (((componentViewport?.height || 637) - 170 - 708) / 2 + 50 + 0) + 16 + 212 + 32.5} {...addPropertyOverrides2({
                  BmD51F7vo: {
                    y: (componentViewport?.y || 0) + 85 + (((componentViewport?.height || 574) - 170 - 694) / 2 + 36 + 0) + 16 + 212 + 32.5
                  },
                  KOPhYzfZr: {
                    y: (componentViewport?.y || 0) + 85 + (((componentViewport?.height || 574) - 170 - 694) / 2 + 36 + 0) + 16 + 212 + 32.5
                  },
                  LlrNByMzC: {
                    y: (componentViewport?.y || 0) + 85 + (((componentViewport?.height || 562) - 170 - 682) / 2 + 24 + 0) + 16 + 212 + 32.5
                  },
                  tu9jXzDOE: {
                    y: (componentViewport?.y || 0) + 85 + (((componentViewport?.height || 574) - 170 - 694) / 2 + 36 + 0) + 16 + 212 + 32.5
                  }
                }, baseVariant, gestureVariant)}>{_jsx3(motion3.div, {
                    className: "framer-2ov3qj-container",
                    layoutDependency,
                    layoutId: "bC38QrJhy-container",
                    children: _jsx3(yZBQGZIRL_default, {
                      height: "100%",
                      id: "bC38QrJhy",
                      layoutId: "bC38QrJhy",
                      P7ZHYgc9n: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(4, 22, 40))",
                      qzxtK1_9Y: resolvedLinks1[0],
                      RQDpSij6V: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(224, 224, 255))",
                      TiAMtDaz3: "SKD (Semi Knock Down)",
                      variant: "llZeWFj0E",
                      width: "100%",
                      ...addPropertyOverrides2({
                        BmD51F7vo: {
                          qzxtK1_9Y: resolvedLinks1[3]
                        },
                        KOPhYzfZr: {
                          qzxtK1_9Y: resolvedLinks1[1]
                        },
                        LlrNByMzC: {
                          qzxtK1_9Y: resolvedLinks1[2]
                        },
                        tu9jXzDOE: {
                          qzxtK1_9Y: resolvedLinks1[4]
                        }
                      }, baseVariant, gestureVariant)
                    })
                  })}</ComponentViewportProvider>}</ResolveLinks>, <ResolveLinks links={[{
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }, {
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }, {
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }, {
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }, {
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }]}>{resolvedLinks2 => <ComponentViewportProvider height={46} y={(componentViewport?.y || 0) + 85 + (((componentViewport?.height || 637) - 170 - 708) / 2 + 50 + 0) + 16 + 212 + 32.5} {...addPropertyOverrides2({
                  BmD51F7vo: {
                    y: (componentViewport?.y || 0) + 85 + (((componentViewport?.height || 574) - 170 - 694) / 2 + 36 + 0) + 16 + 212 + 32.5
                  },
                  KOPhYzfZr: {
                    y: (componentViewport?.y || 0) + 85 + (((componentViewport?.height || 574) - 170 - 694) / 2 + 36 + 0) + 16 + 212 + 32.5
                  },
                  LlrNByMzC: {
                    y: (componentViewport?.y || 0) + 85 + (((componentViewport?.height || 562) - 170 - 682) / 2 + 24 + 0) + 16 + 212 + 32.5
                  },
                  tu9jXzDOE: {
                    y: (componentViewport?.y || 0) + 85 + (((componentViewport?.height || 574) - 170 - 694) / 2 + 36 + 0) + 16 + 212 + 32.5
                  }
                }, baseVariant, gestureVariant)}>{_jsx3(motion3.div, {
                    className: "framer-k83t3e-container",
                    layoutDependency,
                    layoutId: "vLknZGq2H-container",
                    children: _jsx3(yZBQGZIRL_default, {
                      height: "100%",
                      id: "vLknZGq2H",
                      layoutId: "vLknZGq2H",
                      P7ZHYgc9n: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(4, 22, 40))",
                      qzxtK1_9Y: resolvedLinks2[0],
                      RQDpSij6V: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(224, 224, 255))",
                      TiAMtDaz3: "Quality Control & Reworks",
                      variant: "llZeWFj0E",
                      width: "100%",
                      ...addPropertyOverrides2({
                        BmD51F7vo: {
                          qzxtK1_9Y: resolvedLinks2[3]
                        },
                        KOPhYzfZr: {
                          qzxtK1_9Y: resolvedLinks2[1]
                        },
                        LlrNByMzC: {
                          qzxtK1_9Y: resolvedLinks2[2]
                        },
                        tu9jXzDOE: {
                          qzxtK1_9Y: resolvedLinks2[4]
                        }
                      }, baseVariant, gestureVariant)
                    })
                  })}</ComponentViewportProvider>}</ResolveLinks>]
            }), _jsxs2(motion3.div, {
              className: "framer-j862k1",
              layoutDependency,
              layoutId: "OyrETAItA",
              children: [<ResolveLinks links={[{
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }, {
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }, {
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }, {
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }, {
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }]}>{resolvedLinks3 => <ComponentViewportProvider height={46} y={(componentViewport?.y || 0) + 85 + (((componentViewport?.height || 637) - 170 - 708) / 2 + 50 + 0) + 16 + 318 + 25} {...addPropertyOverrides2({
                  BmD51F7vo: {
                    y: (componentViewport?.y || 0) + 85 + (((componentViewport?.height || 574) - 170 - 694) / 2 + 36 + 0) + 16 + 318 + 25
                  },
                  KOPhYzfZr: {
                    y: (componentViewport?.y || 0) + 85 + (((componentViewport?.height || 574) - 170 - 694) / 2 + 36 + 0) + 16 + 318 + 25
                  },
                  LlrNByMzC: {
                    y: (componentViewport?.y || 0) + 85 + (((componentViewport?.height || 562) - 170 - 682) / 2 + 24 + 0) + 16 + 318 + 25
                  },
                  tu9jXzDOE: {
                    y: (componentViewport?.y || 0) + 85 + (((componentViewport?.height || 574) - 170 - 694) / 2 + 36 + 0) + 16 + 318 + 25
                  }
                }, baseVariant, gestureVariant)}>{_jsx3(motion3.div, {
                    className: "framer-11aa8xi-container",
                    layoutDependency,
                    layoutId: "agTs0lVbs-container",
                    children: _jsx3(yZBQGZIRL_default, {
                      height: "100%",
                      id: "agTs0lVbs",
                      layoutId: "agTs0lVbs",
                      P7ZHYgc9n: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(4, 22, 40))",
                      qzxtK1_9Y: resolvedLinks3[0],
                      RQDpSij6V: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(224, 224, 255))",
                      TiAMtDaz3: "Paint",
                      variant: "llZeWFj0E",
                      width: "100%",
                      ...addPropertyOverrides2({
                        BmD51F7vo: {
                          qzxtK1_9Y: resolvedLinks3[3]
                        },
                        KOPhYzfZr: {
                          qzxtK1_9Y: resolvedLinks3[1]
                        },
                        LlrNByMzC: {
                          qzxtK1_9Y: resolvedLinks3[2]
                        },
                        tu9jXzDOE: {
                          qzxtK1_9Y: resolvedLinks3[4]
                        }
                      }, baseVariant, gestureVariant)
                    })
                  })}</ComponentViewportProvider>}</ResolveLinks>, <ResolveLinks links={[{
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }, {
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }, {
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }, {
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }, {
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }]}>{resolvedLinks4 => <ComponentViewportProvider height={46} y={(componentViewport?.y || 0) + 85 + (((componentViewport?.height || 637) - 170 - 708) / 2 + 50 + 0) + 16 + 318 + 25} {...addPropertyOverrides2({
                  BmD51F7vo: {
                    y: (componentViewport?.y || 0) + 85 + (((componentViewport?.height || 574) - 170 - 694) / 2 + 36 + 0) + 16 + 318 + 25
                  },
                  KOPhYzfZr: {
                    y: (componentViewport?.y || 0) + 85 + (((componentViewport?.height || 574) - 170 - 694) / 2 + 36 + 0) + 16 + 318 + 25
                  },
                  LlrNByMzC: {
                    y: (componentViewport?.y || 0) + 85 + (((componentViewport?.height || 562) - 170 - 682) / 2 + 24 + 0) + 16 + 318 + 25
                  },
                  tu9jXzDOE: {
                    y: (componentViewport?.y || 0) + 85 + (((componentViewport?.height || 574) - 170 - 694) / 2 + 36 + 0) + 16 + 318 + 25
                  }
                }, baseVariant, gestureVariant)}>{_jsx3(motion3.div, {
                    className: "framer-1h3ctrw-container",
                    layoutDependency,
                    layoutId: "Mviz1VFHp-container",
                    children: _jsx3(yZBQGZIRL_default, {
                      height: "100%",
                      id: "Mviz1VFHp",
                      layoutId: "Mviz1VFHp",
                      P7ZHYgc9n: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(4, 22, 40))",
                      qzxtK1_9Y: resolvedLinks4[0],
                      RQDpSij6V: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(224, 224, 255))",
                      TiAMtDaz3: "Flexible MOQs",
                      variant: "llZeWFj0E",
                      width: "100%",
                      ...addPropertyOverrides2({
                        BmD51F7vo: {
                          qzxtK1_9Y: resolvedLinks4[3]
                        },
                        KOPhYzfZr: {
                          qzxtK1_9Y: resolvedLinks4[1]
                        },
                        LlrNByMzC: {
                          qzxtK1_9Y: resolvedLinks4[2]
                        },
                        tu9jXzDOE: {
                          qzxtK1_9Y: resolvedLinks4[4]
                        }
                      }, baseVariant, gestureVariant)
                    })
                  })}</ComponentViewportProvider>}</ResolveLinks>, <ResolveLinks links={[{
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }, {
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }, {
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }, {
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }, {
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }]}>{resolvedLinks5 => <ComponentViewportProvider height={46} y={(componentViewport?.y || 0) + 85 + (((componentViewport?.height || 637) - 170 - 708) / 2 + 50 + 0) + 16 + 318 + 25} {...addPropertyOverrides2({
                  BmD51F7vo: {
                    y: (componentViewport?.y || 0) + 85 + (((componentViewport?.height || 574) - 170 - 694) / 2 + 36 + 0) + 16 + 318 + 25
                  },
                  KOPhYzfZr: {
                    y: (componentViewport?.y || 0) + 85 + (((componentViewport?.height || 574) - 170 - 694) / 2 + 36 + 0) + 16 + 318 + 25
                  },
                  LlrNByMzC: {
                    y: (componentViewport?.y || 0) + 85 + (((componentViewport?.height || 562) - 170 - 682) / 2 + 24 + 0) + 16 + 318 + 25
                  },
                  tu9jXzDOE: {
                    y: (componentViewport?.y || 0) + 85 + (((componentViewport?.height || 574) - 170 - 694) / 2 + 36 + 0) + 16 + 318 + 25
                  }
                }, baseVariant, gestureVariant)}>{_jsx3(motion3.div, {
                    className: "framer-1ottk1t-container",
                    layoutDependency,
                    layoutId: "C596a4MvV-container",
                    children: _jsx3(yZBQGZIRL_default, {
                      height: "100%",
                      id: "C596a4MvV",
                      layoutId: "C596a4MvV",
                      P7ZHYgc9n: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(4, 22, 40))",
                      qzxtK1_9Y: resolvedLinks5[0],
                      RQDpSij6V: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(224, 224, 255))",
                      TiAMtDaz3: "CKD (Complete Knock Down)",
                      variant: "llZeWFj0E",
                      width: "100%",
                      ...addPropertyOverrides2({
                        BmD51F7vo: {
                          qzxtK1_9Y: resolvedLinks5[3]
                        },
                        KOPhYzfZr: {
                          qzxtK1_9Y: resolvedLinks5[1]
                        },
                        LlrNByMzC: {
                          qzxtK1_9Y: resolvedLinks5[2]
                        },
                        tu9jXzDOE: {
                          qzxtK1_9Y: resolvedLinks5[4]
                        }
                      }, baseVariant, gestureVariant)
                    })
                  })}</ComponentViewportProvider>}</ResolveLinks>, <ResolveLinks links={[{
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }, {
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }, {
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }, {
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }, {
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }]}>{resolvedLinks6 => <ComponentViewportProvider height={46} y={(componentViewport?.y || 0) + 85 + (((componentViewport?.height || 637) - 170 - 708) / 2 + 50 + 0) + 16 + 318 + 25} {...addPropertyOverrides2({
                  BmD51F7vo: {
                    y: (componentViewport?.y || 0) + 85 + (((componentViewport?.height || 574) - 170 - 694) / 2 + 36 + 0) + 16 + 318 + 25
                  },
                  KOPhYzfZr: {
                    y: (componentViewport?.y || 0) + 85 + (((componentViewport?.height || 574) - 170 - 694) / 2 + 36 + 0) + 16 + 318 + 25
                  },
                  LlrNByMzC: {
                    y: (componentViewport?.y || 0) + 85 + (((componentViewport?.height || 562) - 170 - 682) / 2 + 24 + 0) + 16 + 318 + 25
                  },
                  tu9jXzDOE: {
                    y: (componentViewport?.y || 0) + 85 + (((componentViewport?.height || 574) - 170 - 694) / 2 + 36 + 0) + 16 + 318 + 25
                  }
                }, baseVariant, gestureVariant)}>{_jsx3(motion3.div, {
                    className: "framer-bmiki3-container",
                    layoutDependency,
                    layoutId: "vg5pVXMM8-container",
                    children: _jsx3(yZBQGZIRL_default, {
                      height: "100%",
                      id: "vg5pVXMM8",
                      layoutId: "vg5pVXMM8",
                      P7ZHYgc9n: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(4, 22, 40))",
                      qzxtK1_9Y: resolvedLinks6[0],
                      RQDpSij6V: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(224, 224, 255))",
                      TiAMtDaz3: "Rightsized Production",
                      variant: "llZeWFj0E",
                      width: "100%",
                      ...addPropertyOverrides2({
                        BmD51F7vo: {
                          qzxtK1_9Y: resolvedLinks6[3]
                        },
                        KOPhYzfZr: {
                          qzxtK1_9Y: resolvedLinks6[1]
                        },
                        LlrNByMzC: {
                          qzxtK1_9Y: resolvedLinks6[2]
                        },
                        tu9jXzDOE: {
                          qzxtK1_9Y: resolvedLinks6[4]
                        }
                      }, baseVariant, gestureVariant)
                    })
                  })}</ComponentViewportProvider>}</ResolveLinks>]
            }), _jsx3(motion3.div, {
              className: "framer-vihljn",
              layoutDependency,
              layoutId: "hrL131Ol6",
              children: <ResolveLinks links={[{
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }, {
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }, {
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }, {
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }, {
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }]}>{resolvedLinks7 => <ComponentViewportProvider height={46} y={(componentViewport?.y || 0) + 85 + (((componentViewport?.height || 637) - 170 - 708) / 2 + 50 + 0) + 16 + 424 + 25} {...addPropertyOverrides2({
                  BmD51F7vo: {
                    y: (componentViewport?.y || 0) + 85 + (((componentViewport?.height || 574) - 170 - 694) / 2 + 36 + 0) + 16 + 424 + 25
                  },
                  KOPhYzfZr: {
                    y: (componentViewport?.y || 0) + 85 + (((componentViewport?.height || 574) - 170 - 694) / 2 + 36 + 0) + 16 + 424 + 25
                  },
                  LlrNByMzC: {
                    y: (componentViewport?.y || 0) + 85 + (((componentViewport?.height || 562) - 170 - 682) / 2 + 24 + 0) + 16 + 424 + 25
                  },
                  tu9jXzDOE: {
                    y: (componentViewport?.y || 0) + 85 + (((componentViewport?.height || 574) - 170 - 694) / 2 + 36 + 0) + 16 + 424 + 25
                  }
                }, baseVariant, gestureVariant)}>{_jsx3(motion3.div, {
                    className: "framer-1oblf13-container",
                    layoutDependency,
                    layoutId: "NZcIc7uim-container",
                    children: _jsx3(yZBQGZIRL_default, {
                      height: "100%",
                      id: "NZcIc7uim",
                      layoutId: "NZcIc7uim",
                      P7ZHYgc9n: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(4, 22, 40))",
                      qzxtK1_9Y: resolvedLinks7[0],
                      RQDpSij6V: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(224, 224, 255))",
                      TiAMtDaz3: "Short Term Flexible Assembly Stations",
                      variant: "llZeWFj0E",
                      width: "100%",
                      ...addPropertyOverrides2({
                        BmD51F7vo: {
                          qzxtK1_9Y: resolvedLinks7[3]
                        },
                        KOPhYzfZr: {
                          qzxtK1_9Y: resolvedLinks7[1]
                        },
                        LlrNByMzC: {
                          qzxtK1_9Y: resolvedLinks7[2]
                        },
                        tu9jXzDOE: {
                          qzxtK1_9Y: resolvedLinks7[4]
                        }
                      }, baseVariant, gestureVariant)
                    })
                  })}</ComponentViewportProvider>}</ResolveLinks>
            }), <RichText2 __fromCanvasComponent className="framer-17rcw2o" data-framer-name="Workflows for secure access" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="DgFXuPFmo" style={{
              "--extracted-r6o4lv": "var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(255, 0, 60))"
            }} verticalAlignment="center" withExternalLayout>{<React3.Fragment>{_jsx3(motion3.p, {
                  className: "framer-styles-preset-uzffr2",
                  "data-styles-preset": "ls1deq5j3",
                  style: {
                    "--framer-text-alignment": "center",
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(255, 0, 60)))"
                  },
                  children: "Request Access ->"
                })}</React3.Fragment>}</RichText2>]
          }), isDisplayed1() && <MotionDivWithFX __framer__animate={{
            transition: transition2
          }} __framer__animateOnce __framer__enter={animation} __framer__exit={animation1} __framer__styleAppearEffectEnabled __framer__threshold={0} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-1qu9tvi" layoutDependency={layoutDependency} layoutId="Lo8wqWCtY" style={{
            backgroundColor: "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))",
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16
          }}>{_jsx3(motion3.div, {
              className: "framer-1tmlf24",
              layoutDependency,
              layoutId: "H_W3e0St1",
              children: <RichText2 __fromCanvasComponent className="framer-j1mqox" data-framer-name="HARDWARE BRAND" fonts={["Inter", "Inter-Bold"]} layoutDependency={layoutDependency} layoutId="dlLtQwH_r" style={{
                "--extracted-1lwpl3i": "var(--token-8b7bf222-cf23-422b-9349-f0eb5832be6f, rgb(18, 9, 174))",
                "--framer-paragraph-spacing": "10px"
              }} verticalAlignment="bottom" withExternalLayout>{<React3.Fragment>{_jsx3(motion3.h5, {
                    className: "framer-styles-preset-1e98430",
                    "data-styles-preset": "z4Urx0kPV",
                    style: {
                      "--framer-text-alignment": "left",
                      "--framer-text-color": "var(--extracted-1lwpl3i, var(--token-8b7bf222-cf23-422b-9349-f0eb5832be6f, rgb(18, 9, 174)))"
                    },
                    children: _jsx3(motion3.span, {
                      "data-text-fill": "true",
                      style: {
                        backgroundImage: "linear-gradient(0deg, var(--token-b7db9d9c-abd3-40d6-95b2-4be44f0ddc10, rgb(10, 112, 243)) 0%, var(--token-acdba013-8b8d-4351-afb8-0da8206fb334, rgb(6, 181, 236)) 100%)"
                      },
                      children: _jsx3(motion3.strong, {
                        children: "Deliver"
                      })
                    })
                  })}</React3.Fragment>}</RichText2>
            })}{<RichText2 __fromCanvasComponent className="framer-124e4if" data-framer-name="Leverage a network that supports every stage of your product’s lifecycle, from concept to delivery." fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="c9vEhKfmJ" style={{
              "--extracted-r6o4lv": "var(--token-7ce68db9-0723-4469-83ef-663a6e703840, rgb(43, 43, 61))",
              "--framer-paragraph-spacing": "10px"
            }} verticalAlignment="center" withExternalLayout>{<React3.Fragment>{_jsx3(motion3.p, {
                  className: "framer-styles-preset-1p8b08q",
                  "data-styles-preset": "UDEB09jjg",
                  style: {
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7ce68db9-0723-4469-83ef-663a6e703840, rgb(43, 43, 61)))"
                  },
                  children: "Optimized fulfillment, warehousing & purpose-built third party logistics."
                })}</React3.Fragment>}</RichText2>}{_jsxs2(motion3.div, {
              className: "framer-18lk8xy",
              layoutDependency,
              layoutId: "ERE7aImrU",
              children: [<ResolveLinks links={[{
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }, {
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }]}>{resolvedLinks8 => <ComponentViewportProvider height={46} {...addPropertyOverrides2({
                  C7I7OJDKi: {
                    y: (componentViewport?.y || 0) + 85 + (((componentViewport?.height || 637) - 170 - 708) / 2 + 50 + 0) + 16 + 212 + 32.5
                  }
                }, baseVariant, gestureVariant)}>{_jsx3(motion3.div, {
                    className: "framer-uydb4l-container",
                    layoutDependency,
                    layoutId: "FsHzZavYC-container",
                    children: _jsx3(yZBQGZIRL_default, {
                      height: "100%",
                      id: "FsHzZavYC",
                      layoutId: "FsHzZavYC",
                      P7ZHYgc9n: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(4, 22, 40))",
                      qzxtK1_9Y: resolvedLinks8[0],
                      RQDpSij6V: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(224, 224, 255))",
                      TiAMtDaz3: "Flexible National Network",
                      variant: "llZeWFj0E",
                      width: "100%",
                      ...addPropertyOverrides2({
                        C7I7OJDKi: {
                          qzxtK1_9Y: resolvedLinks8[1]
                        }
                      }, baseVariant, gestureVariant)
                    })
                  })}</ComponentViewportProvider>}</ResolveLinks>, <ResolveLinks links={[{
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }, {
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }]}>{resolvedLinks9 => <ComponentViewportProvider height={46} {...addPropertyOverrides2({
                  C7I7OJDKi: {
                    y: (componentViewport?.y || 0) + 85 + (((componentViewport?.height || 637) - 170 - 708) / 2 + 50 + 0) + 16 + 212 + 32.5
                  }
                }, baseVariant, gestureVariant)}>{_jsx3(motion3.div, {
                    className: "framer-1akns82-container",
                    layoutDependency,
                    layoutId: "XP1TsHXtb-container",
                    children: _jsx3(yZBQGZIRL_default, {
                      height: "100%",
                      id: "XP1TsHXtb",
                      layoutId: "XP1TsHXtb",
                      P7ZHYgc9n: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(4, 22, 40))",
                      qzxtK1_9Y: resolvedLinks9[0],
                      RQDpSij6V: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(224, 224, 255))",
                      TiAMtDaz3: "Mass Merchant Routing",
                      variant: "llZeWFj0E",
                      width: "100%",
                      ...addPropertyOverrides2({
                        C7I7OJDKi: {
                          qzxtK1_9Y: resolvedLinks9[1]
                        }
                      }, baseVariant, gestureVariant)
                    })
                  })}</ComponentViewportProvider>}</ResolveLinks>, <ResolveLinks links={[{
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }, {
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }]}>{resolvedLinks10 => <ComponentViewportProvider height={46} {...addPropertyOverrides2({
                  C7I7OJDKi: {
                    y: (componentViewport?.y || 0) + 85 + (((componentViewport?.height || 637) - 170 - 708) / 2 + 50 + 0) + 16 + 212 + 32.5
                  }
                }, baseVariant, gestureVariant)}>{_jsx3(motion3.div, {
                    className: "framer-h999qv-container",
                    layoutDependency,
                    layoutId: "xPGA2HXAW-container",
                    children: _jsx3(yZBQGZIRL_default, {
                      height: "100%",
                      id: "xPGA2HXAW",
                      layoutId: "xPGA2HXAW",
                      P7ZHYgc9n: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(4, 22, 40))",
                      qzxtK1_9Y: resolvedLinks10[0],
                      RQDpSij6V: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(224, 224, 255))",
                      TiAMtDaz3: "Final & Replacement Parts",
                      variant: "llZeWFj0E",
                      width: "100%",
                      ...addPropertyOverrides2({
                        C7I7OJDKi: {
                          qzxtK1_9Y: resolvedLinks10[1]
                        }
                      }, baseVariant, gestureVariant)
                    })
                  })}</ComponentViewportProvider>}</ResolveLinks>]
            })}{_jsxs2(motion3.div, {
              className: "framer-1a23jxj",
              layoutDependency,
              layoutId: "bRHy0DDlB",
              children: [<ResolveLinks links={[{
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }, {
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }]}>{resolvedLinks11 => <ComponentViewportProvider height={46} {...addPropertyOverrides2({
                  C7I7OJDKi: {
                    y: (componentViewport?.y || 0) + 85 + (((componentViewport?.height || 637) - 170 - 708) / 2 + 50 + 0) + 16 + 318 + 25
                  }
                }, baseVariant, gestureVariant)}>{_jsx3(motion3.div, {
                    className: "framer-1nj18ey-container",
                    layoutDependency,
                    layoutId: "XqORtPnBR-container",
                    children: _jsx3(yZBQGZIRL_default, {
                      height: "100%",
                      id: "XqORtPnBR",
                      layoutId: "XqORtPnBR",
                      P7ZHYgc9n: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(4, 22, 40))",
                      qzxtK1_9Y: resolvedLinks11[0],
                      RQDpSij6V: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(224, 224, 255))",
                      TiAMtDaz3: "Ecommerce Integration",
                      variant: "llZeWFj0E",
                      width: "100%",
                      ...addPropertyOverrides2({
                        C7I7OJDKi: {
                          qzxtK1_9Y: resolvedLinks11[1]
                        }
                      }, baseVariant, gestureVariant)
                    })
                  })}</ComponentViewportProvider>}</ResolveLinks>, <ResolveLinks links={[{
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }, {
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }]}>{resolvedLinks12 => <ComponentViewportProvider height={46} {...addPropertyOverrides2({
                  C7I7OJDKi: {
                    y: (componentViewport?.y || 0) + 85 + (((componentViewport?.height || 637) - 170 - 708) / 2 + 50 + 0) + 16 + 318 + 25
                  }
                }, baseVariant, gestureVariant)}>{_jsx3(motion3.div, {
                    className: "framer-2r6ghj-container",
                    layoutDependency,
                    layoutId: "SgYRHTCLH-container",
                    children: _jsx3(yZBQGZIRL_default, {
                      height: "100%",
                      id: "SgYRHTCLH",
                      layoutId: "SgYRHTCLH",
                      P7ZHYgc9n: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(4, 22, 40))",
                      qzxtK1_9Y: resolvedLinks12[0],
                      RQDpSij6V: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(224, 224, 255))",
                      TiAMtDaz3: "Canadian Distribution",
                      variant: "llZeWFj0E",
                      width: "100%",
                      ...addPropertyOverrides2({
                        C7I7OJDKi: {
                          qzxtK1_9Y: resolvedLinks12[1]
                        }
                      }, baseVariant, gestureVariant)
                    })
                  })}</ComponentViewportProvider>}</ResolveLinks>, <ResolveLinks links={[{
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }, {
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }]}>{resolvedLinks13 => <ComponentViewportProvider height={46} {...addPropertyOverrides2({
                  C7I7OJDKi: {
                    y: (componentViewport?.y || 0) + 85 + (((componentViewport?.height || 637) - 170 - 708) / 2 + 50 + 0) + 16 + 318 + 25
                  }
                }, baseVariant, gestureVariant)}>{_jsx3(motion3.div, {
                    className: "framer-uo2oi4-container",
                    layoutDependency,
                    layoutId: "SszvN_K8G-container",
                    children: _jsx3(yZBQGZIRL_default, {
                      height: "100%",
                      id: "SszvN_K8G",
                      layoutId: "SszvN_K8G",
                      P7ZHYgc9n: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(4, 22, 40))",
                      qzxtK1_9Y: resolvedLinks13[0],
                      RQDpSij6V: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(224, 224, 255))",
                      TiAMtDaz3: "Roll On / Roll Off Delivery",
                      variant: "llZeWFj0E",
                      width: "100%",
                      ...addPropertyOverrides2({
                        C7I7OJDKi: {
                          qzxtK1_9Y: resolvedLinks13[1]
                        }
                      }, baseVariant, gestureVariant)
                    })
                  })}</ComponentViewportProvider>}</ResolveLinks>]
            })}{_jsxs2(motion3.div, {
              className: "framer-17lsxup",
              layoutDependency,
              layoutId: "gJUMMVmuh",
              children: [<ResolveLinks links={[{
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }, {
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }]}>{resolvedLinks14 => <ComponentViewportProvider height={46} {...addPropertyOverrides2({
                  C7I7OJDKi: {
                    y: (componentViewport?.y || 0) + 85 + (((componentViewport?.height || 637) - 170 - 708) / 2 + 50 + 0) + 16 + 424 + 25
                  }
                }, baseVariant, gestureVariant)}>{_jsx3(motion3.div, {
                    className: "framer-5z5kxi-container",
                    layoutDependency,
                    layoutId: "djsyKnmyP-container",
                    children: _jsx3(yZBQGZIRL_default, {
                      height: "100%",
                      id: "djsyKnmyP",
                      layoutId: "djsyKnmyP",
                      P7ZHYgc9n: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(4, 22, 40))",
                      qzxtK1_9Y: resolvedLinks14[0],
                      RQDpSij6V: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(224, 224, 255))",
                      TiAMtDaz3: "Competitive Parcel & Freight",
                      variant: "llZeWFj0E",
                      width: "100%",
                      ...addPropertyOverrides2({
                        C7I7OJDKi: {
                          qzxtK1_9Y: resolvedLinks14[1]
                        }
                      }, baseVariant, gestureVariant)
                    })
                  })}</ComponentViewportProvider>}</ResolveLinks>, <ResolveLinks links={[{
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }, {
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }]}>{resolvedLinks15 => <ComponentViewportProvider height={46} {...addPropertyOverrides2({
                  C7I7OJDKi: {
                    y: (componentViewport?.y || 0) + 85 + (((componentViewport?.height || 637) - 170 - 708) / 2 + 50 + 0) + 16 + 424 + 25
                  }
                }, baseVariant, gestureVariant)}>{_jsx3(motion3.div, {
                    className: "framer-vplsu-container",
                    layoutDependency,
                    layoutId: "e6uhpAyEM-container",
                    children: _jsx3(yZBQGZIRL_default, {
                      height: "100%",
                      id: "e6uhpAyEM",
                      layoutId: "e6uhpAyEM",
                      P7ZHYgc9n: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(4, 22, 40))",
                      qzxtK1_9Y: resolvedLinks15[0],
                      RQDpSij6V: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(224, 224, 255))",
                      TiAMtDaz3: "FTZ (Foreign Trade Zone)",
                      variant: "llZeWFj0E",
                      width: "100%",
                      ...addPropertyOverrides2({
                        C7I7OJDKi: {
                          qzxtK1_9Y: resolvedLinks15[1]
                        }
                      }, baseVariant, gestureVariant)
                    })
                  })}</ComponentViewportProvider>}</ResolveLinks>]
            })}{<RichText2 __fromCanvasComponent className="framer-wlpid4" data-framer-name="Workflows for secure access" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="JqbcazCdU" style={{
              "--extracted-r6o4lv": "var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(255, 0, 60))"
            }} verticalAlignment="center" withExternalLayout>{<React3.Fragment>{_jsx3(motion3.p, {
                  className: "framer-styles-preset-uzffr2",
                  "data-styles-preset": "ls1deq5j3",
                  style: {
                    "--framer-text-alignment": "center",
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(255, 0, 60)))"
                  },
                  children: "Request Access ->"
                })}</React3.Fragment>}</RichText2>}</MotionDivWithFX>, isDisplayed2() && <MotionDivWithFX __framer__animate={{
            transition: transition2
          }} __framer__animateOnce __framer__enter={animation} __framer__exit={animation1} __framer__styleAppearEffectEnabled __framer__threshold={0} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-15sucb4" layoutDependency={layoutDependency} layoutId="IjkHZ0NUh" style={{
            backgroundColor: "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))",
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16
          }}>{_jsx3(motion3.div, {
              className: "framer-16sxe5q",
              layoutDependency,
              layoutId: "PoYWmSdmG",
              children: <RichText2 __fromCanvasComponent className="framer-18ah34y" data-framer-name="HARDWARE BRAND" fonts={["Inter", "Inter-Bold"]} layoutDependency={layoutDependency} layoutId="YqwB36P5K" style={{
                "--extracted-1lwpl3i": "var(--token-8b7bf222-cf23-422b-9349-f0eb5832be6f, rgb(18, 9, 174))",
                "--framer-paragraph-spacing": "10px"
              }} verticalAlignment="bottom" withExternalLayout>{<React3.Fragment>{_jsx3(motion3.h5, {
                    className: "framer-styles-preset-1e98430",
                    "data-styles-preset": "z4Urx0kPV",
                    style: {
                      "--framer-text-alignment": "left",
                      "--framer-text-color": "var(--extracted-1lwpl3i, var(--token-8b7bf222-cf23-422b-9349-f0eb5832be6f, rgb(18, 9, 174)))"
                    },
                    children: _jsx3(motion3.span, {
                      "data-text-fill": "true",
                      style: {
                        backgroundImage: "linear-gradient(0deg, var(--token-99bfac99-5598-40b5-8605-b0924b16c16a, rgb(95, 0, 235)) 0%, var(--token-7562deb6-b7e2-4d5a-b0cb-4086ef7d2220, rgb(188, 1, 172)) 100%)"
                      },
                      children: _jsx3(motion3.strong, {
                        children: "Service"
                      })
                    })
                  })}</React3.Fragment>}</RichText2>
            })}{<RichText2 __fromCanvasComponent className="framer-1pl1zxk" data-framer-name="Leverage a network that supports every stage of your product’s lifecycle, from concept to delivery." fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="kAHyxoVeF" style={{
              "--extracted-r6o4lv": "var(--token-7ce68db9-0723-4469-83ef-663a6e703840, rgb(43, 43, 61))",
              "--framer-paragraph-spacing": "10px"
            }} verticalAlignment="center" withExternalLayout>{<React3.Fragment>{_jsx3(motion3.p, {
                  className: "framer-styles-preset-1p8b08q",
                  "data-styles-preset": "UDEB09jjg",
                  style: {
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7ce68db9-0723-4469-83ef-663a6e703840, rgb(43, 43, 61)))"
                  },
                  children: "Defining a new standard in after-sales support with dynamic nationwide service providers."
                })}</React3.Fragment>}</RichText2>}{_jsxs2(motion3.div, {
              className: "framer-1ddvcj5",
              layoutDependency,
              layoutId: "dZZaOW90R",
              children: [<ResolveLinks links={[{
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }, {
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }]}>{resolvedLinks16 => <ComponentViewportProvider height={46} {...addPropertyOverrides2({
                  w3PhWo8Sf: {
                    y: (componentViewport?.y || 0) + 85 + (((componentViewport?.height || 571) - 170 - 602) / 2 + 50 + 0) + 16 + 212 + 32.5
                  }
                }, baseVariant, gestureVariant)}>{_jsx3(motion3.div, {
                    className: "framer-akpydb-container",
                    layoutDependency,
                    layoutId: "r9PIAw9t4-container",
                    children: _jsx3(yZBQGZIRL_default, {
                      height: "100%",
                      id: "r9PIAw9t4",
                      layoutId: "r9PIAw9t4",
                      P7ZHYgc9n: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(4, 22, 40))",
                      qzxtK1_9Y: resolvedLinks16[0],
                      RQDpSij6V: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(224, 224, 255))",
                      TiAMtDaz3: "Scalable & Industry Specific",
                      variant: "llZeWFj0E",
                      width: "100%",
                      ...addPropertyOverrides2({
                        w3PhWo8Sf: {
                          qzxtK1_9Y: resolvedLinks16[1]
                        }
                      }, baseVariant, gestureVariant)
                    })
                  })}</ComponentViewportProvider>}</ResolveLinks>, <ResolveLinks links={[{
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }, {
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }]}>{resolvedLinks17 => <ComponentViewportProvider height={46} {...addPropertyOverrides2({
                  w3PhWo8Sf: {
                    y: (componentViewport?.y || 0) + 85 + (((componentViewport?.height || 571) - 170 - 602) / 2 + 50 + 0) + 16 + 212 + 32.5
                  }
                }, baseVariant, gestureVariant)}>{_jsx3(motion3.div, {
                    className: "framer-osgood-container",
                    layoutDependency,
                    layoutId: "ppOoxcPEK-container",
                    children: _jsx3(yZBQGZIRL_default, {
                      height: "100%",
                      id: "ppOoxcPEK",
                      layoutId: "ppOoxcPEK",
                      P7ZHYgc9n: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(4, 22, 40))",
                      qzxtK1_9Y: resolvedLinks17[0],
                      RQDpSij6V: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(224, 224, 255))",
                      TiAMtDaz3: "Rework & Refurbish",
                      variant: "llZeWFj0E",
                      width: "100%",
                      ...addPropertyOverrides2({
                        w3PhWo8Sf: {
                          qzxtK1_9Y: resolvedLinks17[1]
                        }
                      }, baseVariant, gestureVariant)
                    })
                  })}</ComponentViewportProvider>}</ResolveLinks>, <ResolveLinks links={[{
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }, {
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }]}>{resolvedLinks18 => <ComponentViewportProvider height={46} {...addPropertyOverrides2({
                  w3PhWo8Sf: {
                    y: (componentViewport?.y || 0) + 85 + (((componentViewport?.height || 571) - 170 - 602) / 2 + 50 + 0) + 16 + 212 + 32.5
                  }
                }, baseVariant, gestureVariant)}>{_jsx3(motion3.div, {
                    className: "framer-1rmv1v6-container",
                    layoutDependency,
                    layoutId: "Ij4_bs5bI-container",
                    children: _jsx3(yZBQGZIRL_default, {
                      height: "100%",
                      id: "Ij4_bs5bI",
                      layoutId: "Ij4_bs5bI",
                      P7ZHYgc9n: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(4, 22, 40))",
                      qzxtK1_9Y: resolvedLinks18[0],
                      RQDpSij6V: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(224, 224, 255))",
                      TiAMtDaz3: "Reverse Logistics",
                      variant: "llZeWFj0E",
                      width: "100%",
                      ...addPropertyOverrides2({
                        w3PhWo8Sf: {
                          qzxtK1_9Y: resolvedLinks18[1]
                        }
                      }, baseVariant, gestureVariant)
                    })
                  })}</ComponentViewportProvider>}</ResolveLinks>, <ResolveLinks links={[{
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }, {
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }]}>{resolvedLinks19 => <ComponentViewportProvider height={46} {...addPropertyOverrides2({
                  w3PhWo8Sf: {
                    y: (componentViewport?.y || 0) + 85 + (((componentViewport?.height || 571) - 170 - 602) / 2 + 50 + 0) + 16 + 212 + 32.5
                  }
                }, baseVariant, gestureVariant)}>{_jsx3(motion3.div, {
                    className: "framer-otbe0v-container",
                    layoutDependency,
                    layoutId: "sv2bytHhW-container",
                    children: _jsx3(yZBQGZIRL_default, {
                      height: "100%",
                      id: "sv2bytHhW",
                      layoutId: "sv2bytHhW",
                      P7ZHYgc9n: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(4, 22, 40))",
                      qzxtK1_9Y: resolvedLinks19[0],
                      RQDpSij6V: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(224, 224, 255))",
                      TiAMtDaz3: "Canadian Distribution",
                      variant: "llZeWFj0E",
                      width: "100%",
                      ...addPropertyOverrides2({
                        w3PhWo8Sf: {
                          qzxtK1_9Y: resolvedLinks19[1]
                        }
                      }, baseVariant, gestureVariant)
                    })
                  })}</ComponentViewportProvider>}</ResolveLinks>]
            })}{_jsxs2(motion3.div, {
              className: "framer-149vocp",
              layoutDependency,
              layoutId: "R_vswfQUE",
              children: [<ResolveLinks links={[{
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }, {
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }]}>{resolvedLinks20 => <ComponentViewportProvider height={46} {...addPropertyOverrides2({
                  w3PhWo8Sf: {
                    y: (componentViewport?.y || 0) + 85 + (((componentViewport?.height || 571) - 170 - 602) / 2 + 50 + 0) + 16 + 318 + 25
                  }
                }, baseVariant, gestureVariant)}>{_jsx3(motion3.div, {
                    className: "framer-1as2qxc-container",
                    layoutDependency,
                    layoutId: "FAthS5boW-container",
                    children: _jsx3(yZBQGZIRL_default, {
                      height: "100%",
                      id: "FAthS5boW",
                      layoutId: "FAthS5boW",
                      P7ZHYgc9n: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(4, 22, 40))",
                      qzxtK1_9Y: resolvedLinks20[0],
                      RQDpSij6V: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(224, 224, 255))",
                      TiAMtDaz3: "Skilled Mechanics & Engineers",
                      variant: "llZeWFj0E",
                      width: "100%",
                      ...addPropertyOverrides2({
                        w3PhWo8Sf: {
                          qzxtK1_9Y: resolvedLinks20[1]
                        }
                      }, baseVariant, gestureVariant)
                    })
                  })}</ComponentViewportProvider>}</ResolveLinks>, <ResolveLinks links={[{
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }, {
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }]}>{resolvedLinks21 => <ComponentViewportProvider height={46} {...addPropertyOverrides2({
                  w3PhWo8Sf: {
                    y: (componentViewport?.y || 0) + 85 + (((componentViewport?.height || 571) - 170 - 602) / 2 + 50 + 0) + 16 + 318 + 25
                  }
                }, baseVariant, gestureVariant)}>{_jsx3(motion3.div, {
                    className: "framer-18sgqyl-container",
                    layoutDependency,
                    layoutId: "jImc0hf36-container",
                    children: _jsx3(yZBQGZIRL_default, {
                      height: "100%",
                      id: "jImc0hf36",
                      layoutId: "jImc0hf36",
                      P7ZHYgc9n: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(4, 22, 40))",
                      qzxtK1_9Y: resolvedLinks21[0],
                      RQDpSij6V: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(224, 224, 255))",
                      TiAMtDaz3: "Quality Control",
                      variant: "llZeWFj0E",
                      width: "100%",
                      ...addPropertyOverrides2({
                        w3PhWo8Sf: {
                          qzxtK1_9Y: resolvedLinks21[1]
                        }
                      }, baseVariant, gestureVariant)
                    })
                  })}</ComponentViewportProvider>}</ResolveLinks>, <ResolveLinks links={[{
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }, {
                href: {
                  webPageId: "lfwaIwuua"
                },
                implicitPathVariables: void 0
              }]}>{resolvedLinks22 => <ComponentViewportProvider height={46} {...addPropertyOverrides2({
                  w3PhWo8Sf: {
                    y: (componentViewport?.y || 0) + 85 + (((componentViewport?.height || 571) - 170 - 602) / 2 + 50 + 0) + 16 + 318 + 25
                  }
                }, baseVariant, gestureVariant)}>{_jsx3(motion3.div, {
                    className: "framer-1j5kd2s-container",
                    layoutDependency,
                    layoutId: "LI1yeuHdd-container",
                    children: _jsx3(yZBQGZIRL_default, {
                      height: "100%",
                      id: "LI1yeuHdd",
                      layoutId: "LI1yeuHdd",
                      P7ZHYgc9n: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(4, 22, 40))",
                      qzxtK1_9Y: resolvedLinks22[0],
                      RQDpSij6V: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(224, 224, 255))",
                      TiAMtDaz3: "Industry Certifications",
                      variant: "llZeWFj0E",
                      width: "100%",
                      ...addPropertyOverrides2({
                        w3PhWo8Sf: {
                          qzxtK1_9Y: resolvedLinks22[1]
                        }
                      }, baseVariant, gestureVariant)
                    })
                  })}</ComponentViewportProvider>}</ResolveLinks>]
            })}{<RichText2 __fromCanvasComponent className="framer-zyl1zv" data-framer-name="Workflows for secure access" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="vVuEO8qKt" style={{
              "--extracted-r6o4lv": "var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(255, 0, 60))"
            }} verticalAlignment="center" withExternalLayout>{<React3.Fragment>{_jsx3(motion3.p, {
                  className: "framer-styles-preset-uzffr2",
                  "data-styles-preset": "ls1deq5j3",
                  style: {
                    "--framer-text-alignment": "center",
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(255, 0, 60)))"
                  },
                  children: "Request Access ->"
                })}</React3.Fragment>}</RichText2>}</MotionDivWithFX>]
        })}</Transition2>}</Variants2>}</LayoutGroup2>;
});
var css8 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-hAAaN.framer-5wb20m, .framer-hAAaN .framer-5wb20m { display: block; }", ".framer-hAAaN.framer-1pds881 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 85px 0px 85px 0px; position: relative; width: 1015px; }", ".framer-hAAaN .framer-hbzf2b { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; max-width: 500px; overflow: visible; padding: 0px; position: relative; width: 464px; }", ".framer-hAAaN .framer-15td2ve { cursor: pointer; flex: none; height: 50px; overflow: hidden; position: relative; width: 96px; will-change: var(--framer-will-change-override, transform); }", ".framer-hAAaN .framer-1uwu800, .framer-hAAaN .framer-qt6q1k, .framer-hAAaN .framer-qazfje { flex: none; height: auto; left: 50%; position: absolute; top: 48%; white-space: pre-wrap; width: 76px; word-break: break-word; word-wrap: break-word; }", ".framer-hAAaN .framer-1qbjzfd, .framer-hAAaN .framer-115uf5m { cursor: pointer; flex: none; height: 32px; overflow: hidden; position: relative; width: 96px; will-change: var(--framer-will-change-override, transform); }", ".framer-hAAaN .framer-muvmau, .framer-hAAaN .framer-1qu9tvi, .framer-hAAaN .framer-15sucb4 { display: grid; flex: none; gap: 10px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(1, minmax(50px, 1fr)); grid-template-rows: repeat(3, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: hidden; padding: 16px 16px 16px 35px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }", ".framer-hAAaN .framer-169n2zj, .framer-hAAaN .framer-1tmlf24 { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: center; justify-self: start; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-hAAaN .framer-1qbaong, .framer-hAAaN .framer-j1mqox, .framer-hAAaN .framer-18ah34y { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }", ".framer-hAAaN .framer-1j1k38w, .framer-hAAaN .framer-124e4if, .framer-hAAaN .framer-1pl1zxk { align-self: start; flex: none; height: 100%; justify-self: start; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }", ".framer-hAAaN .framer-6sb1sp, .framer-hAAaN .framer-18lk8xy, .framer-hAAaN .framer-1ddvcj5 { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 13px; height: 100%; justify-content: center; justify-self: start; overflow: hidden; padding: 15px 0px 0px 0px; position: relative; width: 100%; }", ".framer-hAAaN .framer-tbw7wv-container, .framer-hAAaN .framer-2ov3qj-container, .framer-hAAaN .framer-k83t3e-container, .framer-hAAaN .framer-11aa8xi-container, .framer-hAAaN .framer-1h3ctrw-container, .framer-hAAaN .framer-1ottk1t-container, .framer-hAAaN .framer-bmiki3-container, .framer-hAAaN .framer-1oblf13-container, .framer-hAAaN .framer-uydb4l-container, .framer-hAAaN .framer-1akns82-container, .framer-hAAaN .framer-h999qv-container, .framer-hAAaN .framer-1nj18ey-container, .framer-hAAaN .framer-2r6ghj-container, .framer-hAAaN .framer-uo2oi4-container, .framer-hAAaN .framer-5z5kxi-container, .framer-hAAaN .framer-vplsu-container, .framer-hAAaN .framer-akpydb-container, .framer-hAAaN .framer-osgood-container, .framer-hAAaN .framer-1rmv1v6-container, .framer-hAAaN .framer-otbe0v-container, .framer-hAAaN .framer-1as2qxc-container, .framer-hAAaN .framer-18sgqyl-container, .framer-hAAaN .framer-1j5kd2s-container { flex: none; height: auto; position: relative; width: auto; z-index: 2; }", ".framer-hAAaN .framer-j862k1, .framer-hAAaN .framer-vihljn, .framer-hAAaN .framer-1a23jxj, .framer-hAAaN .framer-17lsxup, .framer-hAAaN .framer-149vocp { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 13px; height: 100%; justify-content: center; justify-self: start; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-hAAaN .framer-17rcw2o, .framer-hAAaN .framer-wlpid4, .framer-hAAaN .framer-zyl1zv { align-self: end; flex: none; height: auto; justify-self: center; position: relative; white-space: pre; width: fit-content; }", ".framer-hAAaN .framer-16sxe5q { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: center; justify-self: start; overflow: hidden; padding: 0px 0px 15px 0px; position: relative; width: 100%; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-hAAaN.framer-1pds881, .framer-hAAaN .framer-hbzf2b, .framer-hAAaN .framer-169n2zj, .framer-hAAaN .framer-6sb1sp, .framer-hAAaN .framer-j862k1, .framer-hAAaN .framer-vihljn, .framer-hAAaN .framer-1tmlf24, .framer-hAAaN .framer-18lk8xy, .framer-hAAaN .framer-1a23jxj, .framer-hAAaN .framer-17lsxup, .framer-hAAaN .framer-16sxe5q, .framer-hAAaN .framer-1ddvcj5, .framer-hAAaN .framer-149vocp { gap: 0px; } .framer-hAAaN.framer-1pds881 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-hAAaN.framer-1pds881 > :first-child { margin-top: 0px; } .framer-hAAaN.framer-1pds881 > :last-child { margin-bottom: 0px; } .framer-hAAaN .framer-hbzf2b > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } .framer-hAAaN .framer-hbzf2b > :first-child, .framer-hAAaN .framer-169n2zj > :first-child, .framer-hAAaN .framer-6sb1sp > :first-child, .framer-hAAaN .framer-j862k1 > :first-child, .framer-hAAaN .framer-vihljn > :first-child, .framer-hAAaN .framer-1tmlf24 > :first-child, .framer-hAAaN .framer-18lk8xy > :first-child, .framer-hAAaN .framer-1a23jxj > :first-child, .framer-hAAaN .framer-17lsxup > :first-child, .framer-hAAaN .framer-16sxe5q > :first-child, .framer-hAAaN .framer-1ddvcj5 > :first-child, .framer-hAAaN .framer-149vocp > :first-child { margin-left: 0px; } .framer-hAAaN .framer-hbzf2b > :last-child, .framer-hAAaN .framer-169n2zj > :last-child, .framer-hAAaN .framer-6sb1sp > :last-child, .framer-hAAaN .framer-j862k1 > :last-child, .framer-hAAaN .framer-vihljn > :last-child, .framer-hAAaN .framer-1tmlf24 > :last-child, .framer-hAAaN .framer-18lk8xy > :last-child, .framer-hAAaN .framer-1a23jxj > :last-child, .framer-hAAaN .framer-17lsxup > :last-child, .framer-hAAaN .framer-16sxe5q > :last-child, .framer-hAAaN .framer-1ddvcj5 > :last-child, .framer-hAAaN .framer-149vocp > :last-child { margin-right: 0px; } .framer-hAAaN .framer-169n2zj > *, .framer-hAAaN .framer-1tmlf24 > *, .framer-hAAaN .framer-16sxe5q > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-hAAaN .framer-6sb1sp > *, .framer-hAAaN .framer-j862k1 > *, .framer-hAAaN .framer-vihljn > *, .framer-hAAaN .framer-18lk8xy > *, .framer-hAAaN .framer-1a23jxj > *, .framer-hAAaN .framer-17lsxup > *, .framer-hAAaN .framer-1ddvcj5 > *, .framer-hAAaN .framer-149vocp > * { margin: 0px; margin-left: calc(13px / 2); margin-right: calc(13px / 2); } }", ".framer-hAAaN.framer-v-1peo0c4 .framer-hbzf2b, .framer-hAAaN.framer-v-d076eh .framer-1as2qxc-container { order: 0; }", ".framer-hAAaN.framer-v-1peo0c4 .framer-15td2ve, .framer-hAAaN.framer-v-d076eh .framer-15td2ve { height: 32px; }", ".framer-hAAaN.framer-v-1peo0c4 .framer-1qbjzfd, .framer-hAAaN.framer-v-d076eh .framer-115uf5m { height: 50px; }", ".framer-hAAaN.framer-v-1peo0c4 .framer-1qu9tvi, .framer-hAAaN.framer-v-d076eh .framer-1j5kd2s-container { order: 2; }", ".framer-hAAaN.framer-v-d076eh .framer-18sgqyl-container { order: 1; }", ".framer-hAAaN.framer-v-1qy7it0.framer-1pds881, .framer-hAAaN.framer-v-7fdsqt.framer-1pds881, .framer-hAAaN.framer-v-mhtlnm.framer-1pds881, .framer-hAAaN.framer-v-1fbcpic.framer-1pds881 { width: 390px; }", ".framer-hAAaN.framer-v-1qy7it0 .framer-hbzf2b, .framer-hAAaN.framer-v-7fdsqt .framer-hbzf2b, .framer-hAAaN.framer-v-mhtlnm .framer-hbzf2b, .framer-hAAaN.framer-v-1fbcpic .framer-hbzf2b { width: 100%; }", ".framer-hAAaN.framer-v-1qy7it0 .framer-15td2ve, .framer-hAAaN.framer-v-mhtlnm .framer-1qbjzfd, .framer-hAAaN.framer-v-1fbcpic .framer-115uf5m { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 36px; justify-content: center; padding: 0px 8px 0px 8px; width: min-content; }", ".framer-hAAaN.framer-v-1qy7it0 .framer-1uwu800, .framer-hAAaN.framer-v-1qy7it0 .framer-qt6q1k, .framer-hAAaN.framer-v-1qy7it0 .framer-qazfje, .framer-hAAaN.framer-v-7fdsqt .framer-1uwu800, .framer-hAAaN.framer-v-7fdsqt .framer-qt6q1k, .framer-hAAaN.framer-v-7fdsqt .framer-qazfje, .framer-hAAaN.framer-v-mhtlnm .framer-1uwu800, .framer-hAAaN.framer-v-mhtlnm .framer-qt6q1k, .framer-hAAaN.framer-v-mhtlnm .framer-qazfje, .framer-hAAaN.framer-v-1fbcpic .framer-1uwu800, .framer-hAAaN.framer-v-1fbcpic .framer-qt6q1k, .framer-hAAaN.framer-v-1fbcpic .framer-qazfje { left: unset; position: relative; top: unset; white-space: pre; width: auto; }", ".framer-hAAaN.framer-v-1qy7it0 .framer-1qbjzfd, .framer-hAAaN.framer-v-1qy7it0 .framer-115uf5m, .framer-hAAaN.framer-v-7fdsqt .framer-15td2ve, .framer-hAAaN.framer-v-7fdsqt .framer-1qbjzfd, .framer-hAAaN.framer-v-7fdsqt .framer-115uf5m, .framer-hAAaN.framer-v-mhtlnm .framer-15td2ve, .framer-hAAaN.framer-v-mhtlnm .framer-115uf5m, .framer-hAAaN.framer-v-1fbcpic .framer-15td2ve, .framer-hAAaN.framer-v-1fbcpic .framer-1qbjzfd { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 24px; justify-content: center; padding: 0px 8px 0px 8px; width: min-content; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-hAAaN.framer-v-1qy7it0 .framer-15td2ve, .framer-hAAaN.framer-v-1qy7it0 .framer-1qbjzfd, .framer-hAAaN.framer-v-1qy7it0 .framer-115uf5m { gap: 0px; } .framer-hAAaN.framer-v-1qy7it0 .framer-15td2ve > *, .framer-hAAaN.framer-v-1qy7it0 .framer-1qbjzfd > *, .framer-hAAaN.framer-v-1qy7it0 .framer-115uf5m > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-hAAaN.framer-v-1qy7it0 .framer-15td2ve > :first-child, .framer-hAAaN.framer-v-1qy7it0 .framer-1qbjzfd > :first-child, .framer-hAAaN.framer-v-1qy7it0 .framer-115uf5m > :first-child { margin-top: 0px; } .framer-hAAaN.framer-v-1qy7it0 .framer-15td2ve > :last-child, .framer-hAAaN.framer-v-1qy7it0 .framer-1qbjzfd > :last-child, .framer-hAAaN.framer-v-1qy7it0 .framer-115uf5m > :last-child { margin-bottom: 0px; } }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-hAAaN.framer-v-7fdsqt .framer-15td2ve, .framer-hAAaN.framer-v-7fdsqt .framer-1qbjzfd, .framer-hAAaN.framer-v-7fdsqt .framer-115uf5m { gap: 0px; } .framer-hAAaN.framer-v-7fdsqt .framer-15td2ve > *, .framer-hAAaN.framer-v-7fdsqt .framer-1qbjzfd > *, .framer-hAAaN.framer-v-7fdsqt .framer-115uf5m > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-hAAaN.framer-v-7fdsqt .framer-15td2ve > :first-child, .framer-hAAaN.framer-v-7fdsqt .framer-1qbjzfd > :first-child, .framer-hAAaN.framer-v-7fdsqt .framer-115uf5m > :first-child { margin-top: 0px; } .framer-hAAaN.framer-v-7fdsqt .framer-15td2ve > :last-child, .framer-hAAaN.framer-v-7fdsqt .framer-1qbjzfd > :last-child, .framer-hAAaN.framer-v-7fdsqt .framer-115uf5m > :last-child { margin-bottom: 0px; } }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-hAAaN.framer-v-mhtlnm .framer-15td2ve, .framer-hAAaN.framer-v-mhtlnm .framer-1qbjzfd, .framer-hAAaN.framer-v-mhtlnm .framer-115uf5m { gap: 0px; } .framer-hAAaN.framer-v-mhtlnm .framer-15td2ve > *, .framer-hAAaN.framer-v-mhtlnm .framer-1qbjzfd > *, .framer-hAAaN.framer-v-mhtlnm .framer-115uf5m > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-hAAaN.framer-v-mhtlnm .framer-15td2ve > :first-child, .framer-hAAaN.framer-v-mhtlnm .framer-1qbjzfd > :first-child, .framer-hAAaN.framer-v-mhtlnm .framer-115uf5m > :first-child { margin-top: 0px; } .framer-hAAaN.framer-v-mhtlnm .framer-15td2ve > :last-child, .framer-hAAaN.framer-v-mhtlnm .framer-1qbjzfd > :last-child, .framer-hAAaN.framer-v-mhtlnm .framer-115uf5m > :last-child { margin-bottom: 0px; } }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-hAAaN.framer-v-1fbcpic .framer-15td2ve, .framer-hAAaN.framer-v-1fbcpic .framer-1qbjzfd, .framer-hAAaN.framer-v-1fbcpic .framer-115uf5m { gap: 0px; } .framer-hAAaN.framer-v-1fbcpic .framer-15td2ve > *, .framer-hAAaN.framer-v-1fbcpic .framer-1qbjzfd > *, .framer-hAAaN.framer-v-1fbcpic .framer-115uf5m > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-hAAaN.framer-v-1fbcpic .framer-15td2ve > :first-child, .framer-hAAaN.framer-v-1fbcpic .framer-1qbjzfd > :first-child, .framer-hAAaN.framer-v-1fbcpic .framer-115uf5m > :first-child { margin-top: 0px; } .framer-hAAaN.framer-v-1fbcpic .framer-15td2ve > :last-child, .framer-hAAaN.framer-v-1fbcpic .framer-1qbjzfd > :last-child, .framer-hAAaN.framer-v-1fbcpic .framer-115uf5m > :last-child { margin-bottom: 0px; } }", ...css2, ...css4, ...css3, ...css];
var FramerTx8iX5PmF = withCSS3(Component3, css8, "framer-hAAaN");
var Tx8iX5PmF_default = FramerTx8iX5PmF;
FramerTx8iX5PmF.displayName = "pillars";
FramerTx8iX5PmF.defaultProps = {
  height: 637,
  width: 1015
};
addPropertyControls3(FramerTx8iX5PmF, {
  variant: {
    options: ["hxu9As9l2", "C7I7OJDKi", "w3PhWo8Sf", "KOPhYzfZr", "LlrNByMzC", "BmD51F7vo", "tu9jXzDOE"],
    optionTitles: ["service verticals", "deliver", "service", "phone-network", "phone-build", "phone-deliver", "phone-service"],
    title: "Variant",
    type: ControlType3.Enum
  }
});
addFonts2(FramerTx8iX5PmF, [{
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
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
    url: "https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2",
    weight: "700"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
    url: "https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2",
    weight: "700"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+1F00-1FFF",
    url: "https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2",
    weight: "700"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0370-03FF",
    url: "https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2",
    weight: "700"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
    url: "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2",
    weight: "700"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    url: "https://framerusercontent.com/assets/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2",
    weight: "700"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
    url: "https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2",
    weight: "700"
  }]
}, ...ButtonFonts, ...getFontsFromSharedStyle2(fonts2), ...getFontsFromSharedStyle2(fonts4), ...getFontsFromSharedStyle2(fonts3), ...getFontsFromSharedStyle2(fonts)], {
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
      "name": "FramerTx8iX5PmF",
      "slots": [],
      "annotations": {
        "framerContractVersion": "1",
        "framerComponentViewportWidth": "true",
        "framerImmutableVariables": "true",
        "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"C7I7OJDKi":{"layout":["fixed","auto"]},"w3PhWo8Sf":{"layout":["fixed","auto"]},"KOPhYzfZr":{"layout":["fixed","auto"]},"LlrNByMzC":{"layout":["fixed","auto"]},"BmD51F7vo":{"layout":["fixed","auto"]},"tu9jXzDOE":{"layout":["fixed","auto"]}}}',
        "framerIntrinsicWidth": "1015",
        "framerIntrinsicHeight": "637",
        "framerDisplayContentsDiv": "false"
      }
    },
    "__FramerMetadata__": {
      "type": "variable"
    }
  }
};
var _OriginalComponent = Tx8iX5PmF_default;
function PillarsWrapped(props) {
  var _variant = useVariant(props.variant);
  var _inner = (_variant !== undefined) ? { ...props, variant: _variant } : props;
  return _ctxJsx(ContextProviders, { children: _ctxJsx(_OriginalComponent, _inner) });
}
Object.assign(PillarsWrapped, _OriginalComponent);
export {  __FramerMetadata__,  PillarsWrapped as default   };