"use client"
// http-url:https://framerusercontent.com/modules/i3tgSXN7NaAZBlkOeU1f/LDeXfzL5lqiPAVqgNwn4/MCfMNsuZw.js
import { jsx as _jsx3, jsxs as _jsxs2 } from "react/jsx-runtime";
import { addFonts as addFonts2, addPropertyControls as addPropertyControls3, ComponentViewportProvider, ControlType as ControlType3, cx as cx3, forwardLoader, getFonts as getFonts2, getFontsFromSharedStyle as getFontsFromSharedStyle2, Link as Link2, RichText as RichText2, SmartComponentScopedContainer, SVG as SVG2, useActiveVariantCallback as useActiveVariantCallback2, useComponentViewport as useComponentViewport2, useLocaleInfo as useLocaleInfo2, useVariantState as useVariantState2, withCSS as withCSS3, withFX, withOptimizedAppearEffect } from "@proofly-framer/runtime";
import { LayoutGroup as LayoutGroup2, motion as motion3, MotionConfigContext as MotionConfigContext2 } from "@proofly-framer/runtime";
import * as React3 from "react";
import { useRef as useRef2 } from "react";

// Extracted SVG assets
const __svg_1 = '<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 5.5 5.25 L 0 10.5" fill="transparent" height="10.5px" id="pTO_zwTXv" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(13.75 6.75)" width="5.5px"/><path d="M 14.25 0 L 0 0" fill="transparent" height="1px" id="Jh7NTfV71" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(4.75 12)" width="14.25px"/></svg>';
const __svg_2 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 126 28"><path d="M 124.915 2.86 L 119.593 8.19 L 122.473 1.226 L 121.057 0.638 L 118.176 7.602 L 118.176 0.065 L 116.642 0.065 L 116.642 7.602 L 113.762 0.638 L 112.345 1.226 L 115.225 8.19 L 109.903 2.86 L 108.818 3.947 L 117.409 12.55 L 126 3.947 Z" fill="var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)) /* {&quot;name&quot;:&quot;Off-White&quot;} */"></path><path d="M 0 0.078 L 11.93 0.078 C 16.758 0.078 20.015 2.868 20.015 7.034 C 20.015 9.51 18.406 11.751 16.286 12.655 C 19.308 13.519 21.545 16.231 21.545 19.375 C 21.545 24.327 17.66 27.589 12.009 27.589 L 0 27.589 Z M 14.049 8.017 C 14.049 6.445 12.754 5.344 10.949 5.344 L 6.24 5.344 L 6.24 10.689 L 10.949 10.689 C 12.754 10.689 14.049 9.628 14.049 8.017 Z M 15.305 18.904 C 15.305 16.939 13.696 15.602 11.381 15.602 L 6.24 15.602 L 6.24 22.323 L 11.381 22.323 C 13.696 22.323 15.305 20.908 15.305 18.903 Z M 24.37 0.078 L 30.178 0.078 L 30.178 27.589 L 24.37 27.589 Z M 33.16 17.646 C 33.16 11.672 37.595 7.467 43.678 7.467 C 49.8 7.467 54.195 11.672 54.195 17.646 C 54.195 23.659 49.761 27.904 43.678 27.904 C 37.555 27.904 33.16 23.62 33.16 17.646 Z M 48.387 17.646 C 48.387 14.502 46.464 12.379 43.678 12.379 C 40.891 12.379 39.007 14.463 39.007 17.646 C 39.007 20.83 40.891 22.991 43.678 22.991 C 46.464 22.991 48.387 20.829 48.387 17.646 Z M 56.236 17.646 C 56.236 11.672 60.67 7.467 66.753 7.467 C 72.875 7.467 77.271 11.672 77.271 17.646 C 77.271 23.659 72.836 27.904 66.753 27.904 C 60.631 27.904 56.236 23.62 56.236 17.646 Z M 71.463 17.646 C 71.463 14.502 69.539 12.379 66.753 12.379 C 63.967 12.379 62.083 14.463 62.083 17.646 C 62.083 20.83 63.967 22.991 66.753 22.991 C 69.54 22.991 71.463 20.829 71.463 17.646 Z M 111.374 14.895 L 111.374 27.589 L 105.605 27.589 L 105.605 16.152 C 105.605 13.873 104.428 12.537 102.544 12.537 C 100.071 12.537 98.737 14.816 98.737 17.725 L 98.737 27.589 L 92.929 27.589 L 92.929 16.152 C 92.929 13.873 91.83 12.537 89.907 12.537 C 87.435 12.537 86.061 14.816 86.061 17.725 L 86.061 27.589 L 80.253 27.589 L 80.253 7.781 L 86.061 7.781 L 86.061 10.179 C 87.199 8.606 89.475 7.467 92.105 7.467 C 94.695 7.467 96.971 8.685 97.717 10.375 C 99.208 8.685 101.72 7.467 104.114 7.467 C 108.352 7.467 111.374 10.257 111.374 14.895 Z" fill="var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)) /* {&quot;name&quot;:&quot;Background&quot;} */"></path></svg>';
const __svg_3 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 126 28\"><path d=\"M 124.915 2.86 L 119.593 8.19 L 122.473 1.226 L 121.057 0.638 L 118.176 7.602 L 118.176 0.065 L 116.642 0.065 L 116.642 7.602 L 113.762 0.638 L 112.345 1.226 L 115.225 8.19 L 109.903 2.86 L 108.818 3.947 L 117.409 12.55 L 126 3.947 Z\" fill=\"var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)) /* {&quot;name&quot;:&quot;Off-White&quot;} */\"></path><path d=\"M 0 0.078 L 11.93 0.078 C 16.758 0.078 20.015 2.868 20.015 7.034 C 20.015 9.51 18.406 11.751 16.286 12.655 C 19.308 13.519 21.545 16.231 21.545 19.375 C 21.545 24.327 17.66 27.589 12.009 27.589 L 0 27.589 Z M 14.049 8.017 C 14.049 6.445 12.754 5.344 10.949 5.344 L 6.24 5.344 L 6.24 10.689 L 10.949 10.689 C 12.754 10.689 14.049 9.628 14.049 8.017 Z M 15.305 18.904 C 15.305 16.939 13.696 15.602 11.381 15.602 L 6.24 15.602 L 6.24 22.323 L 11.381 22.323 C 13.696 22.323 15.305 20.908 15.305 18.903 Z M 24.37 0.078 L 30.178 0.078 L 30.178 27.589 L 24.37 27.589 Z M 33.16 17.646 C 33.16 11.672 37.595 7.467 43.678 7.467 C 49.8 7.467 54.195 11.672 54.195 17.646 C 54.195 23.659 49.761 27.904 43.678 27.904 C 37.555 27.904 33.16 23.62 33.16 17.646 Z M 48.387 17.646 C 48.387 14.502 46.464 12.379 43.678 12.379 C 40.891 12.379 39.007 14.463 39.007 17.646 C 39.007 20.83 40.891 22.991 43.678 22.991 C 46.464 22.991 48.387 20.829 48.387 17.646 Z M 56.236 17.646 C 56.236 11.672 60.67 7.467 66.753 7.467 C 72.875 7.467 77.271 11.672 77.271 17.646 C 77.271 23.659 72.836 27.904 66.753 27.904 C 60.631 27.904 56.236 23.62 56.236 17.646 Z M 71.463 17.646 C 71.463 14.502 69.539 12.379 66.753 12.379 C 63.967 12.379 62.083 14.463 62.083 17.646 C 62.083 20.83 63.967 22.991 66.753 22.991 C 69.54 22.991 71.463 20.829 71.463 17.646 Z M 111.374 14.895 L 111.374 27.589 L 105.605 27.589 L 105.605 16.152 C 105.605 13.873 104.428 12.537 102.544 12.537 C 100.071 12.537 98.737 14.816 98.737 17.725 L 98.737 27.589 L 92.929 27.589 L 92.929 16.152 C 92.929 13.873 91.83 12.537 89.907 12.537 C 87.435 12.537 86.061 14.816 86.061 17.725 L 86.061 27.589 L 80.253 27.589 L 80.253 7.781 L 86.061 7.781 L 86.061 10.179 C 87.199 8.606 89.475 7.467 92.105 7.467 C 94.695 7.467 96.971 8.685 97.717 10.375 C 99.208 8.685 101.72 7.467 104.114 7.467 C 108.352 7.467 111.374 10.257 111.374 14.895 Z\" fill=\"var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)) /* {&quot;name&quot;:&quot;Off-White&quot;} */\"></path></svg>";


// http-url:https://framerusercontent.com/modules/jtYjlqHZqHU87icHOGiw/OOuSnFcca3KULIr591Dj/QkI8Aa5rN.js
import { fontStore } from "@proofly-framer/runtime";
fontStore.loadFonts(["CUSTOM;Haffer Regular"]);
var fonts = [{
  explicitInter: true,
  fonts: [{
    family: "Haffer Regular",
    source: "custom",
    url: "https://framerusercontent.com/assets/tAGQcvN09kwW2QjPLqLO197UqBQ.woff"
  }]
}];
var css = ['.framer-aqieJ .framer-styles-preset-mnimbo:not(.rich-text-wrapper), .framer-aqieJ .framer-styles-preset-mnimbo.rich-text-wrapper p { --framer-font-family: "Haffer Regular", "Haffer Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, #0a0b0a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }'];
var className = "framer-aqieJ";

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
    className: className3,
    layoutId,
    variant,
    fICyAUQY1,
    lKf_CQTz5,
    BKVe8Pgvw,
    ...restProps
  } = getProps(props);
  const href = useSVGTemplate("1173457374", svg);
  return <SVG {...restProps} className={cx("framer-EcgqK", className3)} layoutId={layoutId} ref={ref} role="presentation" style={{
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

// http-url:https://framerusercontent.com/modules/Ae2JxZ1NzMSdVHWpQSYI/6DXq0VgytYexIhDwN2rC/YlBLAavU6.js
import { fontStore as fontStore2 } from "@proofly-framer/runtime";
import { jsx as _ctxJsx } from "react/jsx-runtime";
import { ContextProviders, useVariant } from "@proofly-framer/runtime";
fontStore2.loadFonts(["CUSTOM;Haffer Regular"]);
var fonts2 = [{
  explicitInter: true,
  fonts: [{
    family: "Haffer Regular",
    source: "custom",
    url: "https://framerusercontent.com/assets/tAGQcvN09kwW2QjPLqLO197UqBQ.woff"
  }]
}];
var css3 = ['.framer-RqrbG .framer-styles-preset-1ydx3rt:not(.rich-text-wrapper), .framer-RqrbG .framer-styles-preset-1ydx3rt.rich-text-wrapper p { --framer-font-family: "Haffer Regular", "Haffer Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, #0a0b0a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }', '@media (max-width: 767px) and (min-width: 0px) { .framer-RqrbG .framer-styles-preset-1ydx3rt:not(.rich-text-wrapper), .framer-RqrbG .framer-styles-preset-1ydx3rt.rich-text-wrapper p { --framer-font-family: "Haffer Regular", "Haffer Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, #0a0b0a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }'];
var className2 = "framer-RqrbG";

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
    className: className3,
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
  const sharedStyleClassNames = [className2, className];
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
            className: `${cx2(scopingClassNames, "framer-16c10ng", className3, classNames)} framer-3bbyhf`,
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
var css4 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-BsBK3.framer-3bbyhf, .framer-BsBK3 .framer-3bbyhf { display: block; }", ".framer-BsBK3.framer-16c10ng { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 12px 16px 12px 16px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-BsBK3 .framer-1lw4bu5 { flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }", ".framer-BsBK3 .framer-1nfv7fv { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-BsBK3 .framer-129t4kk { bottom: -23px; flex: none; height: auto; left: 50%; position: absolute; white-space: pre; width: auto; z-index: 1; }", ".framer-BsBK3.framer-v-1f8bjye.framer-16c10ng, .framer-BsBK3.framer-v-6stzd3.framer-16c10ng { padding: 12px; }", ".framer-BsBK3.framer-v-26utbf.framer-16c10ng, .framer-BsBK3.framer-v-nbkuw9.framer-16c10ng { padding: 4px 8px 4px 8px; }", ".framer-BsBK3.framer-v-mfbo2h.framer-16c10ng { padding: 24px 32px 24px 32px; }", ".framer-BsBK3.framer-v-mfbo2h .framer-129t4kk { bottom: -42px; }", ".framer-BsBK3.framer-v-19s4zot.framer-16c10ng { width: 48px; }", ".framer-BsBK3.framer-v-16c10ng.hover .framer-1nfv7fv { left: 50%; order: 1; position: absolute; top: -24px; z-index: 1; }", ".framer-BsBK3.framer-v-16c10ng.hover .framer-129t4kk { bottom: unset; left: unset; order: 2; position: relative; }", ".framer-BsBK3.framer-v-1f8bjye.hover .framer-1nfv7fv, .framer-BsBK3.framer-v-6stzd3.hover .framer-1nfv7fv { left: 50%; position: absolute; top: -24px; z-index: 1; }", ".framer-BsBK3.framer-v-1f8bjye.hover .framer-129t4kk, .framer-BsBK3.framer-v-j08lig.hover .framer-129t4kk, .framer-BsBK3.framer-v-26utbf.hover .framer-129t4kk, .framer-BsBK3.framer-v-6stzd3.hover .framer-129t4kk, .framer-BsBK3.framer-v-mfbo2h.hover .framer-129t4kk { bottom: unset; left: unset; position: relative; }", ".framer-BsBK3.framer-v-j08lig.hover.framer-16c10ng { padding: 11px 16px 12px 16px; }", ".framer-BsBK3.framer-v-j08lig.hover .framer-1nfv7fv { left: 50%; position: absolute; top: -17px; z-index: 1; }", ".framer-BsBK3.framer-v-26utbf.hover .framer-1nfv7fv { left: 50%; position: absolute; top: -22px; z-index: 1; }", ".framer-BsBK3.framer-v-mfbo2h.hover .framer-1nfv7fv { left: 50%; position: absolute; top: -45px; z-index: 1; }", ...css3, ...css, '.framer-BsBK3[data-border="true"]::after, .framer-BsBK3 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }'];
var FrameryZBQGZIRL = withCSS2(Component2, css4, "framer-BsBK3");
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
}, ...ArrowRightFonts, ...getFontsFromSharedStyle(fonts2), ...getFontsFromSharedStyle(fonts)], {
  supportsExplicitInterCodegen: true
});

// http-url:https://framerusercontent.com/modules/i3tgSXN7NaAZBlkOeU1f/LDeXfzL5lqiPAVqgNwn4/MCfMNsuZw.js
var ButtonFonts = getFonts2(yZBQGZIRL_default);
var SmartComponentScopedContainerWithFXWithOptimizedAppearEffect = withOptimizedAppearEffect(withFX(SmartComponentScopedContainer));
var MotionDivWithFXWithOptimizedAppearEffect = withOptimizedAppearEffect(withFX(motion3.div));
var MotionNavWithFX = withFX(motion3.nav);
var cycleOrder2 = ["xdbU_wt2t", "VsgY67RQW", "ni53Sjk5X", "jQDwaZ7Un"];
var serializationHash2 = "framer-6hzLG";
var variantClassNames2 = {
  jQDwaZ7Un: "framer-v-z1tvur",
  ni53Sjk5X: "framer-v-68c7n5",
  VsgY67RQW: "framer-v-g4n2og",
  xdbU_wt2t: "framer-v-12b1cph"
};
function addPropertyOverrides2(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach(variant => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition12 = {
  delay: 0,
  duration: 0.8,
  ease: [0.44, 0, 0.56, 1],
  type: "tween"
};
var animation = {
  opacity: 1,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  skewX: 0,
  skewY: 0,
  x: 0,
  y: -150
};
var transition2 = {
  damping: 40,
  delay: 0,
  mass: 1,
  stiffness: 400,
  type: "spring"
};
var transition3 = {
  delay: 0.4,
  duration: 0.4,
  ease: [0.44, 0, 0.56, 1],
  type: "tween"
};
var animation1 = {
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
var animation2 = {
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
var transformTemplate12 = (_, t) => `translateX(-50%) ${t}`;
var matchVariant = (...args) => {
  for (const arg of args) {
    if (arg && typeof arg === "string") return arg;
  }
  return void 0;
};
var transition4 = {
  delay: 0.3,
  duration: 0.4,
  ease: [0.44, 0, 0.56, 1],
  type: "tween"
};
var animation3 = {
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
var humanReadableVariantMap2 = {
  "Phone Open": "ni53Sjk5X",
  Desktop: "xdbU_wt2t",
  Laptop: "jQDwaZ7Un",
  Phone: "VsgY67RQW"
};
var Variants2 = motion3.create(React3.Fragment);
var getProps3 = ({
  height,
  id,
  width,
  ...props
}) => {
  return {
    ...props,
    variant: humanReadableVariantMap2[props.variant] ?? props.variant ?? "xdbU_wt2t"
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
    className: className3,
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
    defaultVariant: "xdbU_wt2t",
    ref: refBinding,
    variant,
    variantClassNames: variantClassNames2
  });
  const layoutDependency = createLayoutDependency2(props, variants);
  const {
    activeVariantCallback,
    delay
  } = useActiveVariantCallback2(baseVariant);
  const onTap6pmuk4 = activeVariantCallback(async (...args) => {
    setVariant("ni53Sjk5X");
  });
  const onTap1ggdh62 = activeVariantCallback(async (...args) => {
    setVariant("VsgY67RQW");
  });
  const sharedStyleClassNames = [className];
  const scopingClassNames = cx3(serializationHash2, ...sharedStyleClassNames);
  const isDisplayed = () => {
    if (["VsgY67RQW", "ni53Sjk5X"].includes(baseVariant)) return true;
    return false;
  };
  const isDisplayed1 = () => {
    if (baseVariant === "VsgY67RQW") return false;
    return true;
  };
  return <LayoutGroup2 id={layoutId ?? defaultLayoutId}>{<Variants2 animate={variants} initial={false}>{<Transition2 value={transition2}>{<MotionNavWithFX {...restProps} {...gestureHandlers} __framer__animate={{
          transition: transition12
        }} __framer__animateOnce={false} __framer__scrollDirection={{
          direction: "down",
          target: animation
        }} __framer__styleAppearEffectEnabled __framer__threshold={0.5} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className={cx3(scopingClassNames, "framer-12b1cph", className3, classNames)} data-framer-name="Desktop" layoutDependency={layoutDependency} layoutId="xdbU_wt2t" ref={refBinding} style={{
          ...style
        }} {...addPropertyOverrides2({
          jQDwaZ7Un: {
            "data-framer-name": "Laptop"
          },
          ni53Sjk5X: {
            "data-framer-name": "Phone Open"
          },
          VsgY67RQW: {
            "data-framer-name": "Phone"
          }
        }, baseVariant, gestureVariant)}>{_jsxs2(motion3.div, {
            className: "framer-h9alic",
            layoutDependency,
            layoutId: "mHZppzhFm",
            style: {
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(0, 0, 0, 0)",
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              WebkitBackdropFilter: "blur(10px)"
            },
            variants: {
              jQDwaZ7Un: {
                backgroundColor: "rgba(0, 0, 0, 0)"
              },
              ni53Sjk5X: {
                backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))"
              }
            },
            children: [_jsxs2(motion3.div, {
              className: "framer-1o3nz8h",
              "data-framer-name": "Top",
              layoutDependency,
              layoutId: "q5mlT13Ek",
              children: [isDisplayed() && _jsxs2(motion3.div, {
                className: "framer-1b5cy43",
                "data-framer-name": "Icon",
                layoutDependency,
                layoutId: "qySQT4DF5",
                ...addPropertyOverrides2({
                  ni53Sjk5X: {
                    "data-highlight": true,
                    onTap: onTap1ggdh62
                  },
                  VsgY67RQW: {
                    "data-highlight": true,
                    onTap: onTap6pmuk4
                  }
                }, baseVariant, gestureVariant),
                children: [_jsx3(motion3.div, {
                  className: "framer-1vt9pf5",
                  "data-framer-name": "Bottom",
                  layoutDependency,
                  layoutId: "UcY_8ZuoX",
                  style: {
                    backgroundColor: "rgb(153, 153, 153)",
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    rotate: 0
                  },
                  variants: {
                    ni53Sjk5X: {
                      backgroundColor: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                      rotate: -45
                    },
                    VsgY67RQW: {
                      backgroundColor: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
                    }
                  }
                }), _jsx3(motion3.div, {
                  className: "framer-1f6i0tm",
                  "data-framer-name": "Top",
                  layoutDependency,
                  layoutId: "apDPswYWl",
                  style: {
                    backgroundColor: "rgb(153, 153, 153)",
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    rotate: 0
                  },
                  variants: {
                    ni53Sjk5X: {
                      backgroundColor: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                      rotate: 45
                    },
                    VsgY67RQW: {
                      backgroundColor: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
                    }
                  }
                })]
              }), <Link2 href={{
                webPageId: "tExHQbrzG"
              }} motionChild nodeId="wUvsALBX0" openInNewTab={false} scopeId="MCfMNsuZw">{<SVG2 as="a" className="framer-1dy0zeo framer-1va902j" data-framer-name="Graphic" layout="position" layoutDependency={layoutDependency} layoutId="wUvsALBX0" opacity={1} svg={__svg_3} svgContentId={11497284614} withExternalLayout {...addPropertyOverrides2({
                  ni53Sjk5X: {
                    svg: __svg_2,
                    svgContentId: 11510243764
                  }
                }, baseVariant, gestureVariant)} />}</Link2>]
            }), isDisplayed1() && <MotionDivWithFXWithOptimizedAppearEffect className="framer-1d27je2" data-framer-appear-id="1d27je2" layoutDependency={layoutDependency} layoutId="dq8fkyJQZ" {...addPropertyOverrides2({
              ni53Sjk5X: {
                __perspectiveFX: false,
                __smartComponentFX: true,
                __targetOpacity: 1,
                animate: animation1,
                initial: animation2,
                optimized: true
              }
            }, baseVariant, gestureVariant)}>{_jsxs2(motion3.div, {
                className: "framer-1jycxy6",
                "data-border": true,
                "data-framer-name": "Button",
                layoutDependency,
                layoutId: "lQLH4uf_P",
                style: {
                  "--border-bottom-width": "0px",
                  "--border-color": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                  "--border-left-width": "0px",
                  "--border-right-width": "0px",
                  "--border-style": "solid",
                  "--border-top-width": "0px",
                  background: "radial-gradient(50% 50% at 50% 50%, var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)) 0%, var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)) 100%)",
                  backgroundColor: "var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248))",
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4
                },
                variants: {
                  jQDwaZ7Un: {
                    background: "radial-gradient(100% 100% at 100% 0%, var(--token-d40a5262-b4fe-45d5-9e97-61d735d1744e, rgb(255, 152, 0)) 0%, var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62)) 100%)",
                    backgroundColor: "rgba(0, 0, 0, 0)"
                  },
                  ni53Sjk5X: {
                    background: "radial-gradient(100% 100% at 100% 0%, var(--token-d40a5262-b4fe-45d5-9e97-61d735d1744e, rgb(255, 152, 0)) 0%, var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62)) 100%)",
                    backgroundColor: "rgba(0, 0, 0, 0)"
                  }
                },
                children: [<RichText2 __fromCanvasComponent className="framer-nzd0go" data-framer-name="Join the waitlist" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="xc5ECOiTI" style={{
                  "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                  "--framer-paragraph-spacing": "0px"
                }} variants={{
                  jQDwaZ7Un: {
                    "--extracted-r6o4lv": "var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248))"
                  },
                  ni53Sjk5X: {
                    "--extracted-r6o4lv": "var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248))"
                  }
                }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides2({
                  jQDwaZ7Un: {
                    children: <React3.Fragment>{_jsx3(motion3.p, {
                        className: "framer-styles-preset-mnimbo",
                        "data-styles-preset": "QkI8Aa5rN",
                        dir: "auto",
                        style: {
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)))"
                        },
                        children: "Login"
                      })}</React3.Fragment>
                  },
                  ni53Sjk5X: {
                    children: <React3.Fragment>{_jsx3(motion3.p, {
                        className: "framer-styles-preset-mnimbo",
                        "data-styles-preset": "QkI8Aa5rN",
                        dir: "auto",
                        style: {
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)))"
                        },
                        children: "Login"
                      })}</React3.Fragment>
                  }
                }, baseVariant, gestureVariant)}>{<React3.Fragment>{_jsx3(motion3.p, {
                      className: "framer-styles-preset-mnimbo",
                      "data-styles-preset": "QkI8Aa5rN",
                      dir: "auto",
                      style: {
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                      },
                      children: "Get Started"
                    })}</React3.Fragment>}</RichText2>, <RichText2 __fromCanvasComponent className="framer-13b0t8f" data-framer-name="Join the waitlist" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="NFdiF_F8C" style={{
                  "--extracted-r6o4lv": "var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248))",
                  "--framer-paragraph-spacing": "0px",
                  opacity: 0
                }} transformTemplate={transformTemplate12} verticalAlignment="center" withExternalLayout {...addPropertyOverrides2({
                  jQDwaZ7Un: {
                    children: <React3.Fragment>{_jsx3(motion3.p, {
                        className: "framer-styles-preset-mnimbo",
                        "data-styles-preset": "QkI8Aa5rN",
                        dir: "auto",
                        style: {
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)))"
                        },
                        children: "Join the waitlist"
                      })}</React3.Fragment>
                  },
                  ni53Sjk5X: {
                    children: <React3.Fragment>{_jsx3(motion3.p, {
                        className: "framer-styles-preset-mnimbo",
                        "data-styles-preset": "QkI8Aa5rN",
                        dir: "auto",
                        style: {
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)))"
                        },
                        children: "Join the waitlist"
                      })}</React3.Fragment>
                  }
                }, baseVariant, gestureVariant)}>{<React3.Fragment>{_jsx3(motion3.p, {
                      className: "framer-styles-preset-mnimbo",
                      "data-styles-preset": "QkI8Aa5rN",
                      dir: "auto",
                      style: {
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)))"
                      },
                      children: "Get Started"
                    })}</React3.Fragment>}</RichText2>]
              })}{<ComponentViewportProvider height={45} y={(componentViewport?.y || 0) + (12 + ((componentViewport?.height || 96) - 24 - 72) / 2) + 13.5 + 0} {...addPropertyOverrides2({
                ni53Sjk5X: {
                  y: (componentViewport?.y || 0) + 16 + 0 + 0 + (0 + 68 + (Math.max(0, ((componentViewport?.height || 720) - 32 - 0) / 1) * 1 - 0 - 243.8) / 1 * 1) + 16 + 50.8
                }
              }, baseVariant, gestureVariant)}>{<SmartComponentScopedContainerWithFXWithOptimizedAppearEffect className="framer-jeraa9-container" data-framer-appear-id="jeraa9" layoutDependency={layoutDependency} layoutId="X_TQk3GfJ-container" nodeId="X_TQk3GfJ" rendersWithMotion scopeId="MCfMNsuZw" {...addPropertyOverrides2({
                  ni53Sjk5X: {
                    __perspectiveFX: false,
                    __smartComponentFX: true,
                    __targetOpacity: 1,
                    animate: animation3,
                    initial: animation2,
                    optimized: true
                  }
                }, baseVariant, gestureVariant)}>{_jsx3(yZBQGZIRL_default, {
                    height: "100%",
                    id: "X_TQk3GfJ",
                    KhVtTQLb4: "4px",
                    layoutId: "X_TQk3GfJ",
                    P7ZHYgc9n: "var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248))",
                    qzxtK1_9Y: "https://app.bloomnetwork.ai/sign-in",
                    RQDpSij6V: "rgba(255, 255, 255, 0)",
                    TiAMtDaz3: "Log In",
                    variant: matchVariant("llZeWFj0E"),
                    width: "100%",
                    wN3STPwMb: {
                      borderColor: "var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248))",
                      borderStyle: "solid",
                      borderWidth: 1
                    }
                  })}</SmartComponentScopedContainerWithFXWithOptimizedAppearEffect>}</ComponentViewportProvider>}</MotionDivWithFXWithOptimizedAppearEffect>]
          })}</MotionNavWithFX>}</Transition2>}</Variants2>}</LayoutGroup2>;
});
var css5 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-6hzLG.framer-1va902j, .framer-6hzLG .framer-1va902j { display: block; }", ".framer-6hzLG.framer-12b1cph { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 12px; position: relative; width: 1200px; }", ".framer-6hzLG .framer-h9alic { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1280px; overflow: visible; padding: 12px 12px 12px 24px; position: relative; width: 1px; }", ".framer-6hzLG .framer-1o3nz8h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 10px 0px 10px 0px; position: relative; width: min-content; }", ".framer-6hzLG .framer-1b5cy43 { flex: none; height: 40px; overflow: hidden; position: relative; width: 40px; }", ".framer-6hzLG .framer-1vt9pf5 { flex: none; height: 2px; left: calc(50.00000000000002% - 20px / 2); overflow: hidden; position: absolute; top: calc(62.50000000000002% - 2px / 2); width: 20px; will-change: var(--framer-will-change-override, transform); }", ".framer-6hzLG .framer-1f6i0tm { flex: none; height: 2px; left: calc(50.00000000000002% - 20px / 2); overflow: hidden; position: absolute; top: calc(37.50000000000002% - 2px / 2); width: 20px; will-change: var(--framer-will-change-override, transform); }", ".framer-6hzLG .framer-1dy0zeo { flex: none; height: 28px; position: relative; text-decoration: none; width: 126px; }", ".framer-6hzLG .framer-1d27je2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-6hzLG .framer-1jycxy6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 12px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-6hzLG .framer-nzd0go { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-6hzLG .framer-13b0t8f { bottom: -23px; flex: none; height: auto; left: 50%; position: absolute; white-space: pre; width: auto; z-index: 1; }", ".framer-6hzLG .framer-jeraa9-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-6hzLG.framer-v-g4n2og.framer-12b1cph { flex-direction: column; gap: 0px; padding: 16px 8px 16px 8px; width: 390px; }", ".framer-6hzLG.framer-v-g4n2og .framer-h9alic { flex: none; padding: 12px; width: 100%; }", ".framer-6hzLG.framer-v-g4n2og .framer-1o3nz8h { flex: 1 0 0px; gap: unset; justify-content: space-between; padding: 0px; width: 1px; }", ".framer-6hzLG.framer-v-g4n2og .framer-1b5cy43, .framer-6hzLG.framer-v-68c7n5 .framer-1b5cy43 { cursor: pointer; height: 44px; order: 1; width: 44px; }", ".framer-6hzLG.framer-v-g4n2og .framer-1dy0zeo, .framer-6hzLG.framer-v-68c7n5 .framer-1dy0zeo { order: 0; }", ".framer-6hzLG.framer-v-68c7n5.framer-12b1cph { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 0px; height: 1200px; justify-content: flex-start; max-height: calc(var(--framer-viewport-height, 100vh) * 1); min-height: calc(var(--framer-viewport-height, 100vh) * 1); overflow: auto; overscroll-behavior: contain; padding: 16px 8px 16px 8px; width: 390px; }", ".framer-6hzLG.framer-v-68c7n5 .framer-h9alic { align-content: flex-start; align-items: flex-start; flex-direction: column; height: 1px; padding: 0px; width: 100%; }", ".framer-6hzLG.framer-v-68c7n5 .framer-1o3nz8h { gap: unset; justify-content: space-between; padding: 12px; width: 100%; }", ".framer-6hzLG.framer-v-68c7n5 .framer-1vt9pf5, .framer-6hzLG.framer-v-68c7n5 .framer-1f6i0tm { top: calc(50.00000000000002% - 2px / 2); }", ".framer-6hzLG.framer-v-68c7n5 .framer-1d27je2 { flex-direction: column; padding: 16px 16px 64px 16px; width: 100%; }", ...css, '.framer-6hzLG[data-border="true"]::after, .framer-6hzLG [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }'];
var FramerMCfMNsuZw = withCSS3(Component3, css5, "framer-6hzLG");
var MCfMNsuZw_default = FramerMCfMNsuZw;
FramerMCfMNsuZw.displayName = "Navigation 2";
FramerMCfMNsuZw.defaultProps = {
  height: 96,
  width: 1200
};
addPropertyControls3(FramerMCfMNsuZw, {
  variant: {
    options: ["xdbU_wt2t", "VsgY67RQW", "ni53Sjk5X", "jQDwaZ7Un"],
    optionTitles: ["Desktop", "Phone", "Phone Open", "Laptop"],
    title: "Variant",
    type: ControlType3.Enum
  }
});
addFonts2(FramerMCfMNsuZw, [{
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
  }]
}, ...ButtonFonts, ...getFontsFromSharedStyle2(fonts)], {
  supportsExplicitInterCodegen: true
});
FramerMCfMNsuZw.loader = {
  load: (props, context) => {
    const locale = context.locale;
    return Promise.allSettled([forwardLoader(yZBQGZIRL_default, {}, context)]);
  }
};
var __FramerMetadata__ = {
  "exports": {
    "default": {
      "type": "reactComponent",
      "name": "FramerMCfMNsuZw",
      "slots": [],
      "annotations": {
        "framerColorSyntax": "true",
        "framerDisplayContentsDiv": "false",
        "framerIntrinsicWidth": "1200",
        "framerIntrinsicHeight": "96",
        "framerContractVersion": "1",
        "framerComponentViewportWidth": "true",
        "framerAutoSizeImages": "true",
        "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"VsgY67RQW":{"layout":["fixed","auto"]},"ni53Sjk5X":{"layout":["fixed","fixed"],"constraints":[null,null,"100vh","100vh"]},"jQDwaZ7Un":{"layout":["fixed","auto"]}}}',
        "framerImmutableVariables": "true"
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
var _OriginalComponent = MCfMNsuZw_default;
function Navigation2Wrapped(props) {
  var _variant = useVariant(props.variant);
  var _inner = (_variant !== undefined) ? { ...props, variant: _variant } : props;
  return _ctxJsx(ContextProviders, { children: _ctxJsx(_OriginalComponent, _inner) });
}
Object.assign(Navigation2Wrapped, _OriginalComponent);
export {  __FramerMetadata__,  Navigation2Wrapped as default   };