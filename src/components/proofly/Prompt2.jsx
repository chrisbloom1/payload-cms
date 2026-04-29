"use client"
// http-url:https://framerusercontent.com/modules/Pw8jpCZ1wThfSboUENwq/6gsMMnZ7AIzWU37IOPiY/e_UBUlaxP.js
import { jsx as _jsx3, jsxs as _jsxs2, Fragment as _Fragment } from "react/jsx-runtime";
import { addFonts as addFonts2, addPropertyControls as addPropertyControls3, ComponentViewportProvider, ControlType as ControlType3, cx as cx3, FormContainer, FormPlainTextInput, getFonts as getFonts2, getFontsFromSharedStyle, RichText, SmartComponentScopedContainer, useActiveVariantCallback, useComponentViewport as useComponentViewport2, useLocaleInfo as useLocaleInfo2, useOnVariantChange, useVariantState as useVariantState2, withCSS as withCSS3, withFX as withFX2, withOptimizedAppearEffect } from "@proofly-framer/runtime";
import { LayoutGroup as LayoutGroup2, motion as motion3, MotionConfigContext as MotionConfigContext2 } from "@proofly-framer/runtime";
import * as React3 from "react";
import { useRef as useRef2 } from "react";

// Extracted SVG assets
const __svg_1 = '<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 5.5 5.25 L 0 10.5" fill="transparent" height="10.5px" id="pTO_zwTXv" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(13.75 6.75)" width="5.5px"/><path d="M 14.25 0 L 0 0" fill="transparent" height="1px" id="Jh7NTfV71" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(4.75 12)" width="14.25px"/></svg>';


// http-url:https://framerusercontent.com/modules/1yPBes2MOQpyJo6DFDOk/MdZClTJzdIorZJNcVjTw/UDEB09jjg.js
import { fontStore } from "@proofly-framer/runtime";
fontStore.loadFonts(["CUSTOM;Haffer Regular"]);
var fonts = [{
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
var css = ['.framer-6hVw8 .framer-styles-preset-1p8b08q:not(.rich-text-wrapper), .framer-6hVw8 .framer-styles-preset-1p8b08q.rich-text-wrapper p { --framer-font-family: "Haffer Regular", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 430; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, #eaeaeb); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; }', '@media (max-width: 810px) and (min-width: 510px) { .framer-6hVw8 .framer-styles-preset-1p8b08q:not(.rich-text-wrapper), .framer-6hVw8 .framer-styles-preset-1p8b08q.rich-text-wrapper p { --framer-font-family: "Haffer Regular", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 430; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, #eaeaeb); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }', '@media (max-width: 509px) and (min-width: 0px) { .framer-6hVw8 .framer-styles-preset-1p8b08q:not(.rich-text-wrapper), .framer-6hVw8 .framer-styles-preset-1p8b08q.rich-text-wrapper p { --framer-font-family: "Haffer Regular", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 430; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, #eaeaeb); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }'];
var className = "framer-6hVw8";

// http-url:https://framerusercontent.com/modules/9RixVEx4vugpMY3ZAikb/XLUeRK2FEfVdMrYWmMU8/Gt7tOVoI8.js
import { jsx as _jsx2, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls as addPropertyControls2, ControlType as ControlType2, cx as cx2, getFonts, useComponentViewport, useLocaleInfo, useVariantState, withCSS as withCSS2, withFX } from "@proofly-framer/runtime";
import { LayoutGroup, motion as motion2, MotionConfigContext } from "@proofly-framer/runtime";
import * as React2 from "react";
import { useRef } from "react";

// http-url:https://framerusercontent.com/modules/gGXLFANbZFKf2qU8bbVL/uQjjbN7Yn6nBRqTZdwzU/HoKrrnQcM.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addPropertyControls, ControlType, cx, motion, useSVGTemplate, withCSS } from "@proofly-framer/runtime";
import * as React from "react";
import { forwardRef as forwardRef2 } from "react";
import { jsx as _ctxJsx } from "react/jsx-runtime";
import { ContextProviders, useVariant } from "@proofly-framer/runtime";
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
    className: className2,
    layoutId,
    variant,
    fICyAUQY1,
    lKf_CQTz5,
    BKVe8Pgvw,
    ...restProps
  } = getProps(props);
  const href = useSVGTemplate("1173457374", svg);
  return <SVG {...restProps} className={cx("framer-EcgqK", className2)} layoutId={layoutId} ref={ref} role="presentation" style={{
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

// http-url:https://framerusercontent.com/modules/9RixVEx4vugpMY3ZAikb/XLUeRK2FEfVdMrYWmMU8/Gt7tOVoI8.js
var ArrowRightFonts = getFonts(HoKrrnQcM_default);
var MotionDivWithFX = withFX(motion2.div);
var enabledGestures = {
  tJO1VfHJS: {
    hover: true,
    pressed: true
  }
};
var cycleOrder = ["tJO1VfHJS", "ar7bekWWr", "dsPvK_DXI", "y18hq9FYJ", "iXeV6vlqK", "X6iS2wszV"];
var serializationHash = "framer-SYDst";
var variantClassNames = {
  ar7bekWWr: "framer-v-18ltk2z",
  dsPvK_DXI: "framer-v-red3y4",
  iXeV6vlqK: "framer-v-1klvup4",
  tJO1VfHJS: "framer-v-1mwlbjn",
  X6iS2wszV: "framer-v-rw8jig",
  y18hq9FYJ: "framer-v-107ndk"
};
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach(variant => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = {
  delay: 0,
  duration: 0.2,
  ease: [0.44, 0, 0.56, 1],
  type: "tween"
};
var transition2 = {
  delay: 0,
  duration: 1,
  ease: [0, 0, 1, 1],
  type: "tween"
};
var animation = {
  opacity: 1,
  rotate: 360,
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  skewX: 0,
  skewY: 0,
  x: 0,
  y: 0
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
  Default: "tJO1VfHJS",
  Disabled: "dsPvK_DXI",
  Error: "iXeV6vlqK",
  Loading: "ar7bekWWr",
  Off: "X6iS2wszV",
  Success: "y18hq9FYJ"
};
var getProps2 = ({
  height,
  id,
  width,
  ...props
}) => {
  return {
    ...props,
    variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "tJO1VfHJS"
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
    className: className2,
    layoutId,
    variant,
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
    defaultVariant: "tJO1VfHJS",
    enabledGestures,
    ref: refBinding,
    variant,
    variantClassNames
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx2(serializationHash, ...sharedStyleClassNames);
  const isDisplayed = () => {
    if (baseVariant === "ar7bekWWr") return false;
    return true;
  };
  const isDisplayed1 = () => {
    if (baseVariant === "ar7bekWWr") return true;
    return false;
  };
  return <LayoutGroup id={layoutId ?? defaultLayoutId}>{<Variants animate={variants} initial={false}>{<Transition value={transition1}>{_jsxs(motion2.button, {
          ...restProps,
          ...gestureHandlers,
          className: cx2(scopingClassNames, "framer-1mwlbjn", className2, classNames),
          "data-framer-name": "Default",
          "data-reset": "button",
          layoutDependency,
          layoutId: "tJO1VfHJS",
          ref: refBinding,
          style: {
            backgroundColor: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
            borderBottomLeftRadius: 48,
            borderBottomRightRadius: 48,
            borderTopLeftRadius: 48,
            borderTopRightRadius: 48,
            opacity: 1,
            ...style
          },
          variants: {
            "tJO1VfHJS-hover": {
              backgroundColor: "rgba(34, 23, 66, 0.8)",
              opacity: 1
            },
            "tJO1VfHJS-pressed": {
              opacity: 1
            },
            dsPvK_DXI: {
              opacity: 0.5
            },
            iXeV6vlqK: {
              backgroundColor: "rgba(255, 34, 68, 0.15)",
              opacity: 1
            },
            X6iS2wszV: {
              opacity: 1
            },
            y18hq9FYJ: {
              opacity: 1
            }
          },
          ...addPropertyOverrides({
            "tJO1VfHJS-hover": {
              "data-framer-name": void 0
            },
            "tJO1VfHJS-pressed": {
              "data-framer-name": void 0
            },
            ar7bekWWr: {
              "data-framer-name": "Loading"
            },
            dsPvK_DXI: {
              "data-framer-name": "Disabled"
            },
            iXeV6vlqK: {
              "data-framer-name": "Error"
            },
            X6iS2wszV: {
              "data-framer-name": "Off"
            },
            y18hq9FYJ: {
              "data-framer-name": "Success"
            }
          }, baseVariant, gestureVariant),
          children: [isDisplayed() && <HoKrrnQcM_default animated className="framer-1d4hh8a" layoutDependency={layoutDependency} layoutId="stTA1CK7Q" style={{
            "--1335ju": 2,
            "--18mrqx2": "var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248))",
            "--3it368": 1
          }} />, isDisplayed1() && _jsx2(motion2.div, {
            className: "framer-hlxjwk",
            "data-framer-name": "Spinner",
            layoutDependency,
            layoutId: "xM3xi3YSt",
            style: {
              mask: "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add",
              WebkitMask: "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add"
            },
            children: <MotionDivWithFX __framer__loop={animation} __framer__loopEffectEnabled __framer__loopRepeatDelay={0} __framer__loopRepeatType="loop" __framer__loopTransition={transition2} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-1um2mt8" data-framer-name="Conic" layoutDependency={layoutDependency} layoutId="E3Tx3VZVY" style={{
              background: "conic-gradient(from 180deg at 50% 50%, rgb(68, 204, 255) 0deg, rgb(68, 204, 255) 360deg)",
              backgroundColor: "rgb(68, 204, 255)",
              mask: "none",
              WebkitMask: "none"
            }} variants={{
              ar7bekWWr: {
                background: "conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 7.208614864864882deg, rgb(255, 255, 255) 342deg)",
                backgroundColor: "rgba(0, 0, 0, 0)",
                mask: "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add",
                WebkitMask: "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add"
              }
            }}>{_jsx2(motion2.div, {
                className: "framer-xxsh49",
                "data-framer-name": "Rounding",
                layoutDependency,
                layoutId: "lbN_cmEg5",
                style: {
                  backgroundColor: "rgb(255, 255, 255)",
                  borderBottomLeftRadius: 1,
                  borderBottomRightRadius: 1,
                  borderTopLeftRadius: 1,
                  borderTopRightRadius: 1
                },
                transformTemplate: transformTemplate1
              })}</MotionDivWithFX>
          })]
        })}</Transition>}</Variants>}</LayoutGroup>;
});
var css3 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-SYDst.framer-1gcj6s, .framer-SYDst .framer-1gcj6s { display: block; }", ".framer-SYDst.framer-1mwlbjn { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 48px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 48px; }", ".framer-SYDst .framer-1d4hh8a { flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }", ".framer-SYDst .framer-hlxjwk { aspect-ratio: 1 / 1; flex: none; gap: 10px; height: var(--framer-aspect-ratio-supported, 20px); overflow: hidden; position: relative; width: 20px; }", ".framer-SYDst .framer-1um2mt8 { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }", ".framer-SYDst .framer-xxsh49 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 2px); left: 50%; overflow: visible; position: absolute; top: 0px; width: 2px; }", ".framer-SYDst.framer-v-18ltk2z.framer-1mwlbjn, .framer-SYDst.framer-v-red3y4.framer-1mwlbjn, .framer-SYDst.framer-v-107ndk.framer-1mwlbjn, .framer-SYDst.framer-v-1klvup4.framer-1mwlbjn, .framer-SYDst.framer-v-rw8jig.framer-1mwlbjn { cursor: unset; }", ".framer-SYDst.framer-v-18ltk2z .framer-1um2mt8 { overflow: hidden; }"];
var FramerGt7tOVoI8 = withCSS2(Component2, css3, "framer-SYDst");
var Gt7tOVoI8_default = FramerGt7tOVoI8;
FramerGt7tOVoI8.displayName = "sendButton";
FramerGt7tOVoI8.defaultProps = {
  height: 48,
  width: 48
};
addPropertyControls2(FramerGt7tOVoI8, {
  variant: {
    options: ["tJO1VfHJS", "ar7bekWWr", "dsPvK_DXI", "y18hq9FYJ", "iXeV6vlqK", "X6iS2wszV"],
    optionTitles: ["Default", "Loading", "Disabled", "Success", "Error", "Off"],
    title: "Variant",
    type: ControlType2.Enum
  }
});
addFonts(FramerGt7tOVoI8, [{
  explicitInter: true,
  fonts: []
}, ...ArrowRightFonts], {
  supportsExplicitInterCodegen: true
});

// http-url:https://framerusercontent.com/modules/Pw8jpCZ1wThfSboUENwq/6gsMMnZ7AIzWU37IOPiY/e_UBUlaxP.js
var MotionDivWithFXWithOptimizedAppearEffect = withOptimizedAppearEffect(withFX2(motion3.div));
var SendButtonFonts = getFonts2(Gt7tOVoI8_default);
var FormContainerWithFX = withFX2(FormContainer);
var cycleOrder2 = ["UhzpDRDsl", "HG8krI2TC", "KNEJ5lY2_", "GaK4YS73f", "JQUH3ijxj", "Hjyr01iTw", "l3BopbGU_", "tVxY4aqGQ", "KKhbXCkK0"];
var serializationHash2 = "framer-20hxK";
var variantClassNames2 = {
  GaK4YS73f: "framer-v-1sjscy3",
  HG8krI2TC: "framer-v-1es0za9",
  Hjyr01iTw: "framer-v-21af86",
  JQUH3ijxj: "framer-v-u4jils",
  KKhbXCkK0: "framer-v-1mqp5zn",
  KNEJ5lY2_: "framer-v-1k1djfy",
  l3BopbGU_: "framer-v-umoz32",
  tVxY4aqGQ: "framer-v-19lgw53",
  UhzpDRDsl: "framer-v-1eus4b3"
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
var animation2 = {
  opacity: 0,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  skewX: 0,
  skewY: 0,
  x: 0,
  y: 0
};
var transition22 = {
  delay: 0.5,
  duration: 0.4,
  ease: [0.44, 0, 0.56, 1],
  type: "tween"
};
var animation1 = {
  opacity: 0,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  skewX: 0,
  skewY: 0,
  transition: transition22,
  x: 0,
  y: 0
};
var transition3 = {
  delay: 0.3,
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
  transition: transition3,
  x: 0,
  y: 0
};
var animation3 = {
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
var formVariants = (form, variants, currentVariant) => {
  switch (form.state) {
    case "success":
      return variants.success ?? currentVariant;
    case "pending":
      return variants.pending ?? currentVariant;
    case "error":
      return variants.error ?? currentVariant;
    case "incomplete":
      return variants.incomplete ?? currentVariant;
    default:
      return currentVariant;
  }
};
var animation4 = {
  opacity: 1e-3,
  rotate: 0,
  scale: 1,
  skewX: 0,
  skewY: 0,
  x: 0,
  y: 0
};
var transition4 = {
  delay: 0.05,
  duration: 0.2,
  ease: [0.44, 0, 0.56, 1],
  type: "tween"
};
var textEffect = {
  effect: animation4,
  tokenization: "character",
  transition: transition4,
  trigger: "onMount",
  type: "appear"
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
  "prompt 1": "HG8krI2TC",
  "prompt 2": "KNEJ5lY2_",
  "prompt 3": "GaK4YS73f",
  "prompt 4": "JQUH3ijxj",
  "prompt 5": "Hjyr01iTw",
  "prompt 6": "l3BopbGU_",
  chatBox: "KKhbXCkK0",
  entry: "tVxY4aqGQ",
  interact: "UhzpDRDsl"
};
var getProps3 = ({
  height,
  id,
  width,
  ...props
}) => {
  return {
    ...props,
    variant: humanReadableVariantMap2[props.variant] ?? props.variant ?? "UhzpDRDsl"
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
    className: className2,
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
    defaultVariant: "UhzpDRDsl",
    ref: refBinding,
    variant,
    variantClassNames: variantClassNames2
  });
  const layoutDependency = createLayoutDependency2(props, variants);
  const {
    activeVariantCallback,
    delay
  } = useActiveVariantCallback(baseVariant);
  const onTap1jys48n = activeVariantCallback(async (...args) => {
    setGestureState({
      isPressed: false
    });
    setVariant("UhzpDRDsl");
  });
  const onAppear1rm0h2r = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("KNEJ5lY2_", true), 3e3);
  });
  const onAppear1998eh4 = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("GaK4YS73f", true), 3e3);
  });
  const onAppearjsi3sj = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("JQUH3ijxj", true), 3e3);
  });
  const onAppear1gtcaoj = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("Hjyr01iTw", true), 3e3);
  });
  const onAppear1yqzdu4 = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("l3BopbGU_", true), 3e3);
  });
  const onAppearwpmcyp = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("HG8krI2TC", true), 3e3);
  });
  const onTapg6xsmw = activeVariantCallback(async (...args) => {
    setGestureState({
      isPressed: false
    });
    setVariant("tVxY4aqGQ");
  });
  const onAppearmkwjqj = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("HG8krI2TC", true), 1300);
  });
  useOnVariantChange(baseVariant, {
    GaK4YS73f: onAppearjsi3sj,
    HG8krI2TC: onAppear1rm0h2r,
    Hjyr01iTw: onAppear1yqzdu4,
    JQUH3ijxj: onAppear1gtcaoj,
    KNEJ5lY2_: onAppear1998eh4,
    l3BopbGU_: onAppearwpmcyp,
    tVxY4aqGQ: onAppearmkwjqj
  });
  const sharedStyleClassNames = [className];
  const scopingClassNames = cx3(serializationHash2, ...sharedStyleClassNames);
  const isDisplayed = () => {
    if (baseVariant === "tVxY4aqGQ") return false;
    return true;
  };
  const isDisplayed1 = () => {
    if (["HG8krI2TC", "KNEJ5lY2_", "GaK4YS73f", "JQUH3ijxj", "Hjyr01iTw", "l3BopbGU_"].includes(baseVariant)) return false;
    return true;
  };
  const isDisplayed2 = () => {
    if (baseVariant === "HG8krI2TC") return true;
    return false;
  };
  const isDisplayed3 = () => {
    if (baseVariant === "KNEJ5lY2_") return true;
    return false;
  };
  const isDisplayed4 = () => {
    if (baseVariant === "GaK4YS73f") return true;
    return false;
  };
  const isDisplayed5 = () => {
    if (baseVariant === "JQUH3ijxj") return true;
    return false;
  };
  const isDisplayed6 = () => {
    if (baseVariant === "Hjyr01iTw") return true;
    return false;
  };
  const isDisplayed7 = () => {
    if (baseVariant === "l3BopbGU_") return true;
    return false;
  };
  return <LayoutGroup2 id={layoutId ?? defaultLayoutId}>{<Variants2 animate={variants} initial={false}>{<Transition2 value={transition12}>{_jsx3(motion3.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx3(scopingClassNames, "framer-1eus4b3", className2, classNames),
          "data-framer-name": "interact",
          layoutDependency,
          layoutId: "UhzpDRDsl",
          ref: refBinding,
          style: {
            backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))",
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            boxShadow: "0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06)",
            ...style
          },
          ...addPropertyOverrides2({
            GaK4YS73f: {
              "data-framer-name": "prompt 3",
              "data-highlight": true,
              onTap: onTap1jys48n
            },
            HG8krI2TC: {
              "data-framer-name": "prompt 1",
              "data-highlight": true,
              onTap: onTap1jys48n
            },
            Hjyr01iTw: {
              "data-framer-name": "prompt 5",
              "data-highlight": true,
              onTap: onTap1jys48n
            },
            JQUH3ijxj: {
              "data-framer-name": "prompt 4",
              "data-highlight": true,
              onTap: onTap1jys48n
            },
            KKhbXCkK0: {
              "data-framer-name": "chatBox"
            },
            KNEJ5lY2_: {
              "data-framer-name": "prompt 2",
              "data-highlight": true,
              onTap: onTap1jys48n
            },
            l3BopbGU_: {
              "data-framer-name": "prompt 6",
              "data-highlight": true,
              onTap: onTap1jys48n
            },
            tVxY4aqGQ: {
              "data-framer-name": "entry",
              "data-highlight": true,
              onTap: onTapg6xsmw
            }
          }, baseVariant, gestureVariant),
          children: isDisplayed() && <FormContainerWithFX __framer__animate={{
            transition: transition22
          }} __framer__animateOnce={false} __framer__enter={animation2} __framer__exit={animation1} __framer__styleAppearEffectEnabled __framer__threshold={0.5} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} action="https://api.framer.com/forms/v1/forms/b9edf792-84a6-4cff-b73c-2216902447fa/submit" className="framer-90qsyz" data-framer-name="Imput" layoutDependency={layoutDependency} layoutId="v1obwNm8Y" nodeId="v1obwNm8Y" redirectUrl="https://bloom-ai-chat-onboarding-git-main-hitesh-3604s-projects.vercel.app/" style={{
            backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))"
          }}>{formState => <>{isDisplayed1() && <MotionDivWithFXWithOptimizedAppearEffect __perspectiveFX={false} __smartComponentFX __targetOpacity={1} animate={animation22} className="framer-1clsuyc" data-framer-appear-id="1clsuyc" initial={animation3} layoutDependency={layoutDependency} layoutId="bN8N0GTEq" optimized>{<FormPlainTextInput className="framer-1ikp6c9" data-framer-name="myImput" inputName="ybmjNh__N" layoutDependency={layoutDependency} layoutId="ybmjNh__N" placeholder="How can Bloom help you today?" required style={{
                  "--framer-input-font-color": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                  "--framer-input-icon-color": "rgb(153, 153, 153)",
                  "--framer-input-placeholder-color": "var(--token-2ae4d622-3758-4fad-a56d-08fa00cc7638, rgb(173, 173, 199))"
                }} type="textarea" {...addPropertyOverrides2({
                  KKhbXCkK0: {
                    inputName: "KKhbXCkK0ybmjNh__N"
                  }
                }, baseVariant, gestureVariant)} />}</MotionDivWithFXWithOptimizedAppearEffect>}{<ComponentViewportProvider height={40} width="40px" y={(componentViewport?.y || 0) + (12 + ((componentViewport?.height || 132) - 24 - ((componentViewport?.height || 132) - 24) * 1) / 2) + 0 + (((componentViewport?.height || 132) - 24) * 1 - 0 - 40)} {...addPropertyOverrides2({
                GaK4YS73f: {
                  y: (componentViewport?.y || 0) + 12 + ((componentViewport?.height || 132) - 24 - ((componentViewport?.height || 132) - 24) * 1) + 0 + (((componentViewport?.height || 132) - 24) * 1 - 0 - 40)
                },
                HG8krI2TC: {
                  y: (componentViewport?.y || 0) + 12 + ((componentViewport?.height || 132) - 24 - ((componentViewport?.height || 132) - 24) * 1) + 0 + (((componentViewport?.height || 132) - 24) * 1 - 0 - 40)
                },
                Hjyr01iTw: {
                  y: (componentViewport?.y || 0) + 12 + ((componentViewport?.height || 132) - 24 - ((componentViewport?.height || 132) - 24) * 1) + 0 + (((componentViewport?.height || 132) - 24) * 1 - 0 - 40)
                },
                JQUH3ijxj: {
                  y: (componentViewport?.y || 0) + 12 + ((componentViewport?.height || 132) - 24 - ((componentViewport?.height || 132) - 24) * 1) + 0 + (((componentViewport?.height || 132) - 24) * 1 - 0 - 40)
                },
                KNEJ5lY2_: {
                  y: (componentViewport?.y || 0) + 12 + ((componentViewport?.height || 132) - 24 - ((componentViewport?.height || 132) - 24) * 1) + 0 + (((componentViewport?.height || 132) - 24) * 1 - 0 - 40)
                },
                l3BopbGU_: {
                  y: (componentViewport?.y || 0) + 12 + ((componentViewport?.height || 132) - 24 - ((componentViewport?.height || 132) - 24) * 1) + 0 + (((componentViewport?.height || 132) - 24) * 1 - 0 - 40)
                }
              }, baseVariant, gestureVariant)}>{<SmartComponentScopedContainer className="framer-181mikq-container" layoutDependency={layoutDependency} layoutId="rGwEjXllK-container" nodeId="rGwEjXllK" rendersWithMotion scopeId="e_UBUlaxP">{<Gt7tOVoI8_default height="100%" id="rGwEjXllK" layoutId="rGwEjXllK" style={{
                    height: "100%",
                    width: "100%"
                  }} type="submit" variant={formVariants(formState, {
                    pending: "ar7bekWWr",
                    success: "y18hq9FYJ"
                  }, "tJO1VfHJS")} width="100%" {...addPropertyOverrides2({
                    GaK4YS73f: {
                      variant: formVariants(formState, {
                        pending: "X6iS2wszV",
                        success: "X6iS2wszV"
                      }, "X6iS2wszV")
                    },
                    HG8krI2TC: {
                      variant: formVariants(formState, {
                        pending: "X6iS2wszV",
                        success: "X6iS2wszV"
                      }, "X6iS2wszV")
                    },
                    Hjyr01iTw: {
                      variant: formVariants(formState, {
                        pending: "X6iS2wszV",
                        success: "X6iS2wszV"
                      }, "X6iS2wszV")
                    },
                    JQUH3ijxj: {
                      variant: formVariants(formState, {
                        pending: "X6iS2wszV",
                        success: "X6iS2wszV"
                      }, "X6iS2wszV")
                    },
                    KNEJ5lY2_: {
                      variant: formVariants(formState, {
                        pending: "X6iS2wszV",
                        success: "X6iS2wszV"
                      }, "X6iS2wszV")
                    },
                    l3BopbGU_: {
                      variant: formVariants(formState, {
                        pending: "X6iS2wszV",
                        success: "X6iS2wszV"
                      }, "X6iS2wszV")
                    }
                  }, baseVariant, gestureVariant)} />}</SmartComponentScopedContainer>}</ComponentViewportProvider>}{isDisplayed2() && <RichText __fromCanvasComponent className="framer-8vhdus" data-framer-name="01" effect={textEffect} fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="TTs0UiT98" style={{
                "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
              }} verticalAlignment="top" withExternalLayout>{<React3.Fragment>{_jsx3(motion3.p, {
                    className: "framer-styles-preset-1p8b08q",
                    "data-styles-preset": "UDEB09jjg",
                    style: {
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                    },
                    children: "I need to build a batch of drones"
                  })}</React3.Fragment>}</RichText>}{isDisplayed3() && <RichText __fromCanvasComponent className="framer-1kelry8" data-framer-name="02" effect={textEffect} fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="I8fPzDBHY" style={{
                "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
              }} verticalAlignment="top" withExternalLayout>{<React3.Fragment>{_jsx3(motion3.p, {
                    className: "framer-styles-preset-1p8b08q",
                    "data-styles-preset": "UDEB09jjg",
                    style: {
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                    },
                    children: "I want to ship battery packs"
                  })}</React3.Fragment>}</RichText>}{isDisplayed4() && <RichText __fromCanvasComponent className="framer-hkd90f" data-framer-name="03" effect={textEffect} fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="w1W8FiDT3" style={{
                "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
              }} verticalAlignment="top" withExternalLayout>{<React3.Fragment>{_jsx3(motion3.p, {
                    className: "framer-styles-preset-1p8b08q",
                    "data-styles-preset": "UDEB09jjg",
                    style: {
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                    },
                    children: "Store crates of electric motorcycles"
                  })}</React3.Fragment>}</RichText>}{isDisplayed5() && <RichText __fromCanvasComponent className="framer-5dd5wd" data-framer-name="04" effect={textEffect} fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="z7YJGsTwr" style={{
                "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
              }} verticalAlignment="top" withExternalLayout>{<React3.Fragment>{_jsx3(motion3.p, {
                    className: "framer-styles-preset-1p8b08q",
                    "data-styles-preset": "UDEB09jjg",
                    style: {
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                    },
                    children: "Find a contract manufacturer for robotic lawnmower"
                  })}</React3.Fragment>}</RichText>}{isDisplayed6() && <RichText __fromCanvasComponent className="framer-ppvh7l" data-framer-name="05" effect={textEffect} fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="rNR6NV0Vz" style={{
                "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
              }} verticalAlignment="top" withExternalLayout>{<React3.Fragment>{_jsx3(motion3.p, {
                    className: "framer-styles-preset-1p8b08q",
                    "data-styles-preset": "UDEB09jjg",
                    style: {
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                    },
                    children: "I need to deliver a batch of EV chargers"
                  })}</React3.Fragment>}</RichText>}{isDisplayed7() && <RichText __fromCanvasComponent className="framer-yy5pqi" data-framer-name="06" effect={textEffect} fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="KfKQrLCPP" style={{
                "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
              }} verticalAlignment="top" withExternalLayout>{<React3.Fragment>{_jsx3(motion3.p, {
                    className: "framer-styles-preset-1p8b08q",
                    "data-styles-preset": "UDEB09jjg",
                    style: {
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                    },
                    children: "Discover a network of service providers"
                  })}</React3.Fragment>}</RichText>}</>}</FormContainerWithFX>
        })}</Transition2>}</Variants2>}</LayoutGroup2>;
});
var css4 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-20hxK.framer-1b6pq6o, .framer-20hxK .framer-1b6pq6o { display: block; }", ".framer-20hxK.framer-1eus4b3 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 132px; justify-content: flex-end; min-height: 74px; overflow: hidden; padding: 12px; position: relative; width: 591px; will-change: var(--framer-will-change-override, transform); }", ".framer-20hxK .framer-90qsyz { align-content: flex-end; align-items: flex-end; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: 100%; justify-content: flex-end; overflow: hidden; padding: 0px; position: relative; width: 1px; }", ".framer-20hxK .framer-1clsuyc { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; min-height: 100px; overflow: visible; padding: 0px; position: relative; width: 1px; }", '.framer-20hxK .framer-1ikp6c9 { --framer-input-font-family: "Haffer Regular"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 16px; --framer-input-font-weight: 430; --framer-input-padding: 0px; flex: 1 0 0px; height: 100%; min-height: 100px; position: relative; width: 1px; }', ".framer-20hxK .framer-181mikq-container { flex: none; height: 40px; position: relative; width: 40px; }", ".framer-20hxK .framer-8vhdus, .framer-20hxK .framer-1kelry8, .framer-20hxK .framer-hkd90f, .framer-20hxK .framer-5dd5wd, .framer-20hxK .framer-ppvh7l, .framer-20hxK .framer-yy5pqi { flex: 1 0 0px; height: 100%; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; z-index: 1; }", ".framer-20hxK.framer-v-1es0za9.framer-1eus4b3, .framer-20hxK.framer-v-1k1djfy.framer-1eus4b3, .framer-20hxK.framer-v-1sjscy3.framer-1eus4b3, .framer-20hxK.framer-v-u4jils.framer-1eus4b3, .framer-20hxK.framer-v-21af86.framer-1eus4b3, .framer-20hxK.framer-v-umoz32.framer-1eus4b3, .framer-20hxK.framer-v-19lgw53.framer-1eus4b3 { align-content: flex-end; align-items: flex-end; cursor: pointer; max-height: 356px; min-height: unset; }", ".framer-20hxK.framer-v-1es0za9 .framer-90qsyz { order: 0; }", ".framer-20hxK.framer-v-1es0za9 .framer-181mikq-container, .framer-20hxK.framer-v-1k1djfy .framer-181mikq-container, .framer-20hxK.framer-v-1sjscy3 .framer-181mikq-container, .framer-20hxK.framer-v-u4jils .framer-181mikq-container, .framer-20hxK.framer-v-21af86 .framer-181mikq-container, .framer-20hxK.framer-v-umoz32 .framer-181mikq-container { order: 7; pointer-events: none; }", ".framer-20hxK.framer-v-1es0za9 .framer-8vhdus { order: 1; }", ".framer-20hxK.framer-v-1k1djfy .framer-1kelry8 { order: 2; }", ".framer-20hxK.framer-v-1sjscy3 .framer-hkd90f { order: 3; }", ".framer-20hxK.framer-v-u4jils .framer-5dd5wd { order: 4; }", ".framer-20hxK.framer-v-21af86 .framer-ppvh7l { order: 5; }", ".framer-20hxK.framer-v-umoz32 .framer-yy5pqi { order: 6; }", ...css];
var Framere_UBUlaxP = withCSS3(Component3, css4, "framer-20hxK");
var e_UBUlaxP_default = Framere_UBUlaxP;
Framere_UBUlaxP.displayName = "prompt 2";
Framere_UBUlaxP.defaultProps = {
  height: 132,
  width: 591
};
addPropertyControls3(Framere_UBUlaxP, {
  variant: {
    options: ["UhzpDRDsl", "HG8krI2TC", "KNEJ5lY2_", "GaK4YS73f", "JQUH3ijxj", "Hjyr01iTw", "l3BopbGU_", "tVxY4aqGQ", "KKhbXCkK0"],
    optionTitles: ["interact", "prompt 1", "prompt 2", "prompt 3", "prompt 4", "prompt 5", "prompt 6", "entry", "chatBox"],
    title: "Variant",
    type: ControlType3.Enum
  }
});
addFonts2(Framere_UBUlaxP, [{
  explicitInter: true,
  fonts: [{
    cssFamilyName: "Haffer Regular",
    source: "custom",
    style: "normal",
    uiFamilyName: "Haffer",
    url: "https://framerusercontent.com/assets/tAGQcvN09kwW2QjPLqLO197UqBQ.woff",
    weight: "430"
  }, {
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
}, ...SendButtonFonts, ...getFontsFromSharedStyle(fonts)], {
  supportsExplicitInterCodegen: true
});
var __FramerMetadata__ = {
  "exports": {
    "default": {
      "type": "reactComponent",
      "name": "Framere_UBUlaxP",
      "slots": [],
      "annotations": {
        "framerAutoSizeImages": "true",
        "framerColorSyntax": "true",
        "framerComponentViewportWidth": "true",
        "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"],"constraints":[null,null,"74px",null]},"HG8krI2TC":{"layout":["fixed","fixed"],"constraints":[null,null,null,"356px"]},"KNEJ5lY2_":{"layout":["fixed","fixed"],"constraints":[null,null,null,"356px"]},"GaK4YS73f":{"layout":["fixed","fixed"],"constraints":[null,null,null,"356px"]},"JQUH3ijxj":{"layout":["fixed","fixed"],"constraints":[null,null,null,"356px"]},"Hjyr01iTw":{"layout":["fixed","fixed"],"constraints":[null,null,null,"356px"]},"l3BopbGU_":{"layout":["fixed","fixed"],"constraints":[null,null,null,"356px"]},"tVxY4aqGQ":{"layout":["fixed","fixed"],"constraints":[null,null,null,"356px"]},"KKhbXCkK0":{"layout":["fixed","fixed"],"constraints":[null,null,"74px",null]}}}',
        "framerDisplayContentsDiv": "false",
        "framerContractVersion": "1",
        "framerIntrinsicWidth": "591",
        "framerIntrinsicHeight": "132",
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
var _OriginalComponent = e_UBUlaxP_default;
function Prompt2Wrapped(props) {
  var _variant = useVariant(props.variant);
  var _inner = (_variant !== undefined) ? { ...props, variant: _variant } : props;
  return _ctxJsx(ContextProviders, { children: _ctxJsx(_OriginalComponent, _inner) });
}
Object.assign(Prompt2Wrapped, _OriginalComponent);
export {  __FramerMetadata__,  Prompt2Wrapped as default   };