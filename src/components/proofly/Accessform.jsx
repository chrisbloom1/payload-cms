"use client"
// http-url:https://framerusercontent.com/modules/nb1kJeyZfGADDECYI19R/rstW3cescI9xpabxFizO/lbFmcIGGk.js
import { jsx as _jsx2, jsxs as _jsxs2, Fragment as _Fragment } from "react/jsx-runtime";
import { addFonts as addFonts2, ComponentViewportProvider, cx as cx2, FormBooleanInput, FormContainer, FormPlainTextInput, forwardLoader, getFonts, RichText as RichText2, SmartComponentScopedContainer, useComponentViewport as useComponentViewport2, useLocaleInfo as useLocaleInfo2, useVariantState as useVariantState2, withCSS as withCSS2 } from "@proofly-framer/runtime";
import { LayoutGroup as LayoutGroup2, motion as motion2, MotionConfigContext as MotionConfigContext2 } from "@proofly-framer/runtime";
import * as React2 from "react";
import { useRef as useRef2 } from "react";

// http-url:https://framerusercontent.com/modules/B1YJUp1iMFw2fjuxlZ8H/A62mFpxfdTuY6hddRDvV/w14UYzR89.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, getFontsFromSharedStyle, RichText, useComponentViewport, useLocaleInfo, useVariantState, withCSS, withFX } from "@proofly-framer/runtime";
import { LayoutGroup, motion, MotionConfigContext } from "@proofly-framer/runtime";
import * as React from "react";
import { useRef } from "react";

// http-url:https://framerusercontent.com/modules/qy8eVo5TXcYP2TWH72Db/lnFwfHBmEXS5R0BdeKYE/ferGDeq75.js
import { fontStore } from "@proofly-framer/runtime";
import { jsx as _ctxJsx } from "react/jsx-runtime";
import { ContextProviders, useVariant } from "@proofly-framer/runtime";
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

// http-url:https://framerusercontent.com/modules/B1YJUp1iMFw2fjuxlZ8H/A62mFpxfdTuY6hddRDvV/w14UYzR89.js
var MotionDivWithFX = withFX(motion.div);
var enabledGestures = {
  si3ejPH9M: {
    hover: true,
    pressed: true
  }
};
var cycleOrder = ["si3ejPH9M", "bMERotEIC", "TciCWBxm5", "qvMs0h71H", "Sg8FHyXRA"];
var serializationHash = "framer-W3FhL";
var variantClassNames = {
  bMERotEIC: "framer-v-uykjsp",
  qvMs0h71H: "framer-v-1bvgv54",
  Sg8FHyXRA: "framer-v-18c8ph7",
  si3ejPH9M: "framer-v-tsow44",
  TciCWBxm5: "framer-v-43kwnu"
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
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({
    ...config,
    transition
  }), [JSON.stringify(transition)]);
  return <MotionConfigContext.Provider value={contextValue}>{children}</MotionConfigContext.Provider>;
};
var humanReadableVariantMap = {
  Default: "si3ejPH9M",
  Disabled: "TciCWBxm5",
  Error: "Sg8FHyXRA",
  Loading: "bMERotEIC",
  Success: "qvMs0h71H"
};
var Variants = motion.create(React.Fragment);
var getProps = ({
  height,
  id,
  width,
  ...props
}) => {
  return {
    ...props,
    variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "si3ejPH9M"
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
    className: className2,
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
    defaultVariant: "si3ejPH9M",
    enabledGestures,
    ref: refBinding,
    variant,
    variantClassNames
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [className];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  const isDisplayed = () => {
    if (baseVariant === "bMERotEIC") return false;
    return true;
  };
  const isDisplayed1 = () => {
    if (baseVariant === "bMERotEIC") return true;
    return false;
  };
  return <LayoutGroup id={layoutId ?? defaultLayoutId}>{<Variants animate={variants} initial={false}>{<Transition value={transition1}>{_jsxs(motion.button, {
          ...restProps,
          ...gestureHandlers,
          className: cx(scopingClassNames, "framer-tsow44", className2, classNames),
          "data-framer-name": "Default",
          "data-reset": "button",
          layoutDependency,
          layoutId: "si3ejPH9M",
          ref: refBinding,
          style: {
            backgroundColor: "var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(238, 39, 55))",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            opacity: 1,
            ...style
          },
          variants: {
            "si3ejPH9M-hover": {
              opacity: 1
            },
            "si3ejPH9M-pressed": {
              opacity: 1
            },
            qvMs0h71H: {
              opacity: 1
            },
            Sg8FHyXRA: {
              backgroundColor: "rgba(255, 34, 68, 0.15)",
              opacity: 1
            },
            TciCWBxm5: {
              opacity: 0.5
            }
          },
          ...addPropertyOverrides({
            "si3ejPH9M-hover": {
              "data-framer-name": void 0
            },
            "si3ejPH9M-pressed": {
              "data-framer-name": void 0
            },
            bMERotEIC: {
              "data-framer-name": "Loading"
            },
            qvMs0h71H: {
              "data-framer-name": "Success"
            },
            Sg8FHyXRA: {
              "data-framer-name": "Error"
            },
            TciCWBxm5: {
              "data-framer-name": "Disabled"
            }
          }, baseVariant, gestureVariant),
          children: [isDisplayed() && <RichText __fromCanvasComponent className="framer-bog2q6" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="Cf5uIn3i1" style={{
            "--extracted-r6o4lv": "var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248))",
            "--framer-link-text-color": "rgb(0, 153, 255)",
            "--framer-link-text-decoration": "underline"
          }} variants={{
            qvMs0h71H: {
              "--extracted-r6o4lv": "rgb(255, 255, 255)"
            },
            Sg8FHyXRA: {
              "--extracted-r6o4lv": "rgb(255, 34, 68)"
            }
          }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
            qvMs0h71H: {
              children: <>{_jsx(motion.p, {
                  dir: "auto",
                  style: {
                    "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                    "--framer-font-size": "14px",
                    "--framer-font-weight": "600",
                    "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))"
                  },
                  children: "Thank you"
                })}</>,
              fonts: ["Inter-SemiBold"]
            },
            Sg8FHyXRA: {
              children: <>{_jsx(motion.p, {
                  dir: "auto",
                  style: {
                    "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                    "--framer-font-size": "14px",
                    "--framer-font-weight": "600",
                    "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 34, 68))"
                  },
                  children: "Something went wrong"
                })}</>,
              fonts: ["Inter-SemiBold"]
            }
          }, baseVariant, gestureVariant)}>{<>{_jsx(motion.p, {
                className: "framer-styles-preset-k8yxrn",
                "data-styles-preset": "ferGDeq75",
                dir: "auto",
                style: {
                  "--framer-text-color": "var(--extracted-r6o4lv, var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)))"
                },
                children: "Submit"
              })}</>}</RichText>, isDisplayed1() && _jsx(motion.div, {
            className: "framer-1ywcuqx",
            "data-framer-name": "Spinner",
            layoutDependency,
            layoutId: "Lk1b77xsO",
            style: {
              mask: "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add",
              WebkitMask: "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add"
            },
            children: <MotionDivWithFX __framer__loop={animation} __framer__loopEffectEnabled __framer__loopRepeatDelay={0} __framer__loopRepeatType="loop" __framer__loopTransition={transition2} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-1non31d" data-framer-name="Conic" layoutDependency={layoutDependency} layoutId="gyEU6hR5W" style={{
              background: "conic-gradient(from 180deg at 50% 50%, rgb(68, 204, 255) 0deg, rgb(68, 204, 255) 360deg)",
              backgroundColor: "rgb(68, 204, 255)",
              mask: "none",
              WebkitMask: "none"
            }} variants={{
              bMERotEIC: {
                background: "conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 7.208614864864882deg, rgb(255, 255, 255) 342deg)",
                backgroundColor: "rgba(0, 0, 0, 0)",
                mask: "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add",
                WebkitMask: "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add"
              }
            }}>{_jsx(motion.div, {
                className: "framer-1qh6t0n",
                "data-framer-name": "Rounding",
                layoutDependency,
                layoutId: "y4cBYoZ5V",
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
var css2 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-W3FhL.framer-hobsmn, .framer-W3FhL .framer-hobsmn { display: block; }", ".framer-W3FhL.framer-tsow44 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 40px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 240px; }", ".framer-W3FhL .framer-bog2q6 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }", ".framer-W3FhL .framer-1ywcuqx { aspect-ratio: 1 / 1; flex: none; gap: 10px; height: var(--framer-aspect-ratio-supported, 20px); overflow: hidden; position: relative; width: 20px; }", ".framer-W3FhL .framer-1non31d { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }", ".framer-W3FhL .framer-1qh6t0n { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 2px); left: 50%; overflow: visible; position: absolute; top: 0px; width: 2px; }", ".framer-W3FhL.framer-v-uykjsp.framer-tsow44, .framer-W3FhL.framer-v-43kwnu.framer-tsow44, .framer-W3FhL.framer-v-1bvgv54.framer-tsow44, .framer-W3FhL.framer-v-18c8ph7.framer-tsow44 { cursor: unset; }", ".framer-W3FhL.framer-v-uykjsp .framer-1non31d { overflow: hidden; }", ...css];
var Framerw14UYzR89 = withCSS(Component, css2, "framer-W3FhL");
var w14UYzR89_default = Framerw14UYzR89;
Framerw14UYzR89.displayName = "Button 4";
Framerw14UYzR89.defaultProps = {
  height: 40,
  width: 240
};
addPropertyControls(Framerw14UYzR89, {
  variant: {
    options: ["si3ejPH9M", "bMERotEIC", "TciCWBxm5", "qvMs0h71H", "Sg8FHyXRA"],
    optionTitles: ["Default", "Loading", "Disabled", "Success", "Error"],
    title: "Variant",
    type: ControlType.Enum
  }
});
addFonts(Framerw14UYzR89, [{
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
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
    url: "https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2",
    weight: "600"
  }, {
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
    url: "https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2",
    weight: "600"
  }, {
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+1F00-1FFF",
    url: "https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2",
    weight: "600"
  }, {
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+0370-03FF",
    url: "https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2",
    weight: "600"
  }, {
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
    url: "https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2",
    weight: "600"
  }, {
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    url: "https://framerusercontent.com/assets/yDtI2UI8XcEg1W2je9XPN3Noo.woff2",
    weight: "600"
  }, {
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
    url: "https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2",
    weight: "600"
  }]
}, ...getFontsFromSharedStyle(fonts)], {
  supportsExplicitInterCodegen: true
});

// http-url:https://framerusercontent.com/modules/nb1kJeyZfGADDECYI19R/rstW3cescI9xpabxFizO/lbFmcIGGk.js
var Button4Fonts = getFonts(w14UYzR89_default);
var serializationHash2 = "framer-yuJGu";
var variantClassNames2 = {
  g_wCl3VQq: "framer-v-1jrbxq8"
};
var transition12 = {
  bounce: 0.2,
  delay: 0,
  duration: 0.4,
  type: "spring"
};
var matchVariant = (...args) => {
  for (const arg of args) {
    if (arg && typeof arg === "string") return arg;
  }
  return void 0;
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
var Transition2 = ({
  value,
  children
}) => {
  const config = React2.useContext(MotionConfigContext2);
  const transition = value ?? config.transition;
  const contextValue = React2.useMemo(() => ({
    ...config,
    transition
  }), [JSON.stringify(transition)]);
  return <MotionConfigContext2.Provider value={contextValue}>{children}</MotionConfigContext2.Provider>;
};
var Variants2 = motion2.create(React2.Fragment);
var getProps2 = ({
  height,
  id,
  width,
  ...props
}) => {
  return {
    ...props
  };
};
var createLayoutDependency2 = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component2 = React2.forwardRef(function (props, ref) {
  const fallbackRef = useRef2(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React2.useId();
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
  } = useVariantState2({
    defaultVariant: "g_wCl3VQq",
    ref: refBinding,
    variant,
    variantClassNames: variantClassNames2
  });
  const layoutDependency = createLayoutDependency2(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx2(serializationHash2, ...sharedStyleClassNames);
  return <LayoutGroup2 id={layoutId ?? defaultLayoutId}>{<Variants2 animate={variants} initial={false}>{<Transition2 value={transition12}>{<FormContainer {...restProps} {...gestureHandlers} action="https://api.framer.com/forms/v1/forms/518e13e5-84df-446e-923a-c12b6b12a884/submit" className={cx2(scopingClassNames, "framer-1jrbxq8", className2, classNames)} data-framer-name="Variant 1" layoutDependency={layoutDependency} layoutId="g_wCl3VQq" nodeId="g_wCl3VQq" ref={refBinding} style={{
          backgroundColor: "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))",
          borderBottomLeftRadius: 16,
          borderBottomRightRadius: 16,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          ...style
        }}>{formState => <>{_jsxs2(motion2.div, {
              className: "framer-1fuxn94",
              "data-framer-name": "Radio Group",
              layoutDependency,
              layoutId: "tNPqOInV_",
              children: [<RichText2 __fromCanvasComponent className="framer-s1frz" fonts={["Inter-Medium"]} layoutDependency={layoutDependency} layoutId="AsJOD3Rtc" style={{
                "--extracted-r6o4lv": "rgb(136, 136, 136)"
              }} verticalAlignment="top" withExternalLayout>{<React2.Fragment>{_jsx2(motion2.p, {
                    style: {
                      "--font-selector": "SW50ZXItTWVkaXVt",
                      "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                      "--framer-font-size": "12px",
                      "--framer-font-weight": "500",
                      "--framer-text-color": "var(--extracted-r6o4lv, rgb(136, 136, 136))"
                    },
                    children: "I am a..."
                  })}</React2.Fragment>}</RichText2>, _jsxs2(motion2.label, {
                className: "framer-3i3w7j",
                layoutDependency,
                layoutId: "TtgqhSzJK",
                children: [<FormBooleanInput className="framer-ef4cts" defaultChecked defaultValue="Option 1" inputName="Radio" layoutDependency={layoutDependency} layoutId="OBmlLxL59" style={{
                  "--framer-input-background": "rgba(187, 187, 187, 0.2)",
                  "--framer-input-boolean-checked-background": "rgb(255, 255, 255)",
                  "--framer-input-boolean-checked-border-color": "rgb(0, 153, 255)",
                  "--framer-input-boolean-checked-border-style": "solid",
                  "--framer-input-boolean-checked-border-width": "1px",
                  "--framer-input-boolean-checked-box-shadow": "inset 0px 0px 0px 5px rgb(0, 153, 255)",
                  "--framer-input-border-bottom-width": "1px",
                  "--framer-input-border-color": "rgba(136, 136, 136, 0.2)",
                  "--framer-input-border-left-width": "1px",
                  "--framer-input-border-radius-bottom-left": "8px",
                  "--framer-input-border-radius-bottom-right": "8px",
                  "--framer-input-border-radius-top-left": "8px",
                  "--framer-input-border-radius-top-right": "8px",
                  "--framer-input-border-right-width": "1px",
                  "--framer-input-border-style": "solid",
                  "--framer-input-border-top-width": "1px",
                  "--framer-input-icon-mask-image": "none"
                }} type="radio" />, <RichText2 __fromCanvasComponent className="framer-1u92aez" fonts={["Inter-Medium"]} layoutDependency={layoutDependency} layoutId="THjfv3r5D" style={{
                  "--extracted-r6o4lv": "rgb(136, 136, 136)"
                }} verticalAlignment="top" withExternalLayout>{<React2.Fragment>{_jsx2(motion2.p, {
                      style: {
                        "--font-selector": "SW50ZXItTWVkaXVt",
                        "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                        "--framer-font-size": "12px",
                        "--framer-font-weight": "500",
                        "--framer-text-color": "var(--extracted-r6o4lv, rgb(136, 136, 136))"
                      },
                      children: "Hardware Brand"
                    })}</React2.Fragment>}</RichText2>]
              }), _jsxs2(motion2.label, {
                className: "framer-19m2lur",
                layoutDependency,
                layoutId: "C334DECtu",
                children: [<FormBooleanInput className="framer-1t6gp3g" defaultChecked={false} defaultValue="Option 2" inputName="Radio" layoutDependency={layoutDependency} layoutId="FZNfGGw8D" style={{
                  "--framer-input-background": "rgba(187, 187, 187, 0.2)",
                  "--framer-input-boolean-checked-background": "rgb(255, 255, 255)",
                  "--framer-input-boolean-checked-border-color": "rgb(0, 153, 255)",
                  "--framer-input-boolean-checked-border-style": "solid",
                  "--framer-input-boolean-checked-border-width": "1px",
                  "--framer-input-boolean-checked-box-shadow": "inset 0px 0px 0px 5px rgb(0, 153, 255)",
                  "--framer-input-border-bottom-width": "1px",
                  "--framer-input-border-color": "rgba(136, 136, 136, 0.2)",
                  "--framer-input-border-left-width": "1px",
                  "--framer-input-border-radius-bottom-left": "8px",
                  "--framer-input-border-radius-bottom-right": "8px",
                  "--framer-input-border-radius-top-left": "8px",
                  "--framer-input-border-radius-top-right": "8px",
                  "--framer-input-border-right-width": "1px",
                  "--framer-input-border-style": "solid",
                  "--framer-input-border-top-width": "1px",
                  "--framer-input-icon-mask-image": "none"
                }} type="radio" />, <RichText2 __fromCanvasComponent className="framer-1e3b7vm" fonts={["Inter-Medium"]} layoutDependency={layoutDependency} layoutId="Mnuz8abq5" style={{
                  "--extracted-r6o4lv": "rgb(136, 136, 136)"
                }} verticalAlignment="top" withExternalLayout>{<React2.Fragment>{_jsx2(motion2.p, {
                      style: {
                        "--font-selector": "SW50ZXItTWVkaXVt",
                        "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                        "--framer-font-size": "12px",
                        "--framer-font-weight": "500",
                        "--framer-text-color": "var(--extracted-r6o4lv, rgb(136, 136, 136))"
                      },
                      children: "Service Partner"
                    })}</React2.Fragment>}</RichText2>]
              }), _jsxs2(motion2.label, {
                className: "framer-vrxrdp",
                layoutDependency,
                layoutId: "AEHBXS_Zv",
                children: [<FormBooleanInput className="framer-ag6k99" defaultChecked={false} defaultValue="Option 3" inputName="Radio" layoutDependency={layoutDependency} layoutId="ESQYpN99a" style={{
                  "--framer-input-background": "rgba(187, 187, 187, 0.2)",
                  "--framer-input-boolean-checked-background": "rgb(255, 255, 255)",
                  "--framer-input-boolean-checked-border-color": "rgb(0, 153, 255)",
                  "--framer-input-boolean-checked-border-style": "solid",
                  "--framer-input-boolean-checked-border-width": "1px",
                  "--framer-input-boolean-checked-box-shadow": "inset 0px 0px 0px 5px rgb(0, 153, 255)",
                  "--framer-input-border-bottom-width": "1px",
                  "--framer-input-border-color": "rgba(136, 136, 136, 0.2)",
                  "--framer-input-border-left-width": "1px",
                  "--framer-input-border-radius-bottom-left": "8px",
                  "--framer-input-border-radius-bottom-right": "8px",
                  "--framer-input-border-radius-top-left": "8px",
                  "--framer-input-border-radius-top-right": "8px",
                  "--framer-input-border-right-width": "1px",
                  "--framer-input-border-style": "solid",
                  "--framer-input-border-top-width": "1px",
                  "--framer-input-icon-mask-image": "none"
                }} type="radio" />, <RichText2 __fromCanvasComponent className="framer-rwpgdo" fonts={["Inter-Medium"]} layoutDependency={layoutDependency} layoutId="mTY5NkCfT" style={{
                  "--extracted-r6o4lv": "rgb(136, 136, 136)"
                }} verticalAlignment="top" withExternalLayout>{<React2.Fragment>{_jsx2(motion2.p, {
                      style: {
                        "--font-selector": "SW50ZXItTWVkaXVt",
                        "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                        "--framer-font-size": "12px",
                        "--framer-font-weight": "500",
                        "--framer-text-color": "var(--extracted-r6o4lv, rgb(136, 136, 136))"
                      },
                      children: "Other"
                    })}</React2.Fragment>}</RichText2>]
              })]
            })}{_jsxs2(motion2.div, {
              className: "framer-yu5t2n",
              "data-framer-name": "Radio Group",
              layoutDependency,
              layoutId: "BUUcCjVR9",
              children: [<RichText2 __fromCanvasComponent className="framer-1culfwm" fonts={["Inter-Medium"]} layoutDependency={layoutDependency} layoutId="Idy9zrKEM" style={{
                "--extracted-r6o4lv": "rgb(136, 136, 136)"
              }} verticalAlignment="top" withExternalLayout>{<React2.Fragment>{_jsx2(motion2.p, {
                    style: {
                      "--font-selector": "SW50ZXItTWVkaXVt",
                      "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                      "--framer-font-size": "12px",
                      "--framer-font-weight": "500",
                      "--framer-text-color": "var(--extracted-r6o4lv, rgb(136, 136, 136))"
                    },
                    children: "I am seeking..."
                  })}</React2.Fragment>}</RichText2>, _jsxs2(motion2.label, {
                className: "framer-upgune",
                layoutDependency,
                layoutId: "edf6QYXb1",
                children: [<FormBooleanInput className="framer-1wsu4ab" defaultChecked defaultValue="Option 1" inputName="Radio" layoutDependency={layoutDependency} layoutId="tyhHy0zOh" style={{
                  "--framer-input-background": "rgba(187, 187, 187, 0.2)",
                  "--framer-input-boolean-checked-background": "rgb(255, 255, 255)",
                  "--framer-input-boolean-checked-border-color": "rgb(0, 153, 255)",
                  "--framer-input-boolean-checked-border-style": "solid",
                  "--framer-input-boolean-checked-border-width": "1px",
                  "--framer-input-boolean-checked-box-shadow": "inset 0px 0px 0px 5px rgb(0, 153, 255)",
                  "--framer-input-border-bottom-width": "1px",
                  "--framer-input-border-color": "rgba(136, 136, 136, 0.2)",
                  "--framer-input-border-left-width": "1px",
                  "--framer-input-border-radius-bottom-left": "8px",
                  "--framer-input-border-radius-bottom-right": "8px",
                  "--framer-input-border-radius-top-left": "8px",
                  "--framer-input-border-radius-top-right": "8px",
                  "--framer-input-border-right-width": "1px",
                  "--framer-input-border-style": "solid",
                  "--framer-input-border-top-width": "1px",
                  "--framer-input-icon-mask-image": "none"
                }} type="radio" />, <RichText2 __fromCanvasComponent className="framer-1lw9gnc" fonts={["Inter-Medium"]} layoutDependency={layoutDependency} layoutId="qrfQM0XYq" style={{
                  "--extracted-r6o4lv": "rgb(136, 136, 136)"
                }} verticalAlignment="top" withExternalLayout>{<React2.Fragment>{_jsx2(motion2.p, {
                      style: {
                        "--font-selector": "SW50ZXItTWVkaXVt",
                        "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                        "--framer-font-size": "12px",
                        "--framer-font-weight": "500",
                        "--framer-text-color": "var(--extracted-r6o4lv, rgb(136, 136, 136))"
                      },
                      children: "Network Access"
                    })}</React2.Fragment>}</RichText2>]
              }), _jsxs2(motion2.label, {
                className: "framer-16sptsy",
                layoutDependency,
                layoutId: "Zw7fzfQlx",
                children: [<FormBooleanInput className="framer-bijtpy" defaultChecked={false} defaultValue="Option 2" inputName="Radio" layoutDependency={layoutDependency} layoutId="oxH2kCZP0" style={{
                  "--framer-input-background": "rgba(187, 187, 187, 0.2)",
                  "--framer-input-boolean-checked-background": "rgb(255, 255, 255)",
                  "--framer-input-boolean-checked-border-color": "rgb(0, 153, 255)",
                  "--framer-input-boolean-checked-border-style": "solid",
                  "--framer-input-boolean-checked-border-width": "1px",
                  "--framer-input-boolean-checked-box-shadow": "inset 0px 0px 0px 5px rgb(0, 153, 255)",
                  "--framer-input-border-bottom-width": "1px",
                  "--framer-input-border-color": "rgba(136, 136, 136, 0.2)",
                  "--framer-input-border-left-width": "1px",
                  "--framer-input-border-radius-bottom-left": "8px",
                  "--framer-input-border-radius-bottom-right": "8px",
                  "--framer-input-border-radius-top-left": "8px",
                  "--framer-input-border-radius-top-right": "8px",
                  "--framer-input-border-right-width": "1px",
                  "--framer-input-border-style": "solid",
                  "--framer-input-border-top-width": "1px",
                  "--framer-input-icon-mask-image": "none"
                }} type="radio" />, <RichText2 __fromCanvasComponent className="framer-1w6k39g" fonts={["Inter-Medium"]} layoutDependency={layoutDependency} layoutId="Qh2cezVj0" style={{
                  "--extracted-r6o4lv": "rgb(136, 136, 136)"
                }} verticalAlignment="top" withExternalLayout>{<React2.Fragment>{_jsx2(motion2.p, {
                      style: {
                        "--font-selector": "SW50ZXItTWVkaXVt",
                        "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                        "--framer-font-size": "12px",
                        "--framer-font-weight": "500",
                        "--framer-text-color": "var(--extracted-r6o4lv, rgb(136, 136, 136))"
                      },
                      children: "Additional Information"
                    })}</React2.Fragment>}</RichText2>]
              })]
            })}{_jsxs2(motion2.label, {
              className: "framer-ooqjer",
              layoutDependency,
              layoutId: "z4lHGxYg2",
              children: [<RichText2 __fromCanvasComponent className="framer-2ba2n4" fonts={["Inter-Medium"]} layoutDependency={layoutDependency} layoutId="B8AWsRBJi" style={{
                "--extracted-r6o4lv": "rgb(136, 136, 136)"
              }} verticalAlignment="top" withExternalLayout>{<React2.Fragment>{_jsx2(motion2.p, {
                    style: {
                      "--font-selector": "SW50ZXItTWVkaXVt",
                      "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                      "--framer-font-size": "12px",
                      "--framer-font-weight": "500",
                      "--framer-text-color": "var(--extracted-r6o4lv, rgb(136, 136, 136))"
                    },
                    children: "First name"
                  })}</React2.Fragment>}</RichText2>, <FormPlainTextInput className="framer-1h7yfdw" inputName="Name" layoutDependency={layoutDependency} layoutId="LTRj2d4W3" placeholder="Johnny" style={{
                "--framer-input-background": "rgba(187, 187, 187, 0.15)",
                "--framer-input-border-bottom-width": "1px",
                "--framer-input-border-color": "rgba(136, 136, 136, 0.1)",
                "--framer-input-border-left-width": "1px",
                "--framer-input-border-radius-bottom-left": "10px",
                "--framer-input-border-radius-bottom-right": "10px",
                "--framer-input-border-radius-top-left": "10px",
                "--framer-input-border-radius-top-right": "10px",
                "--framer-input-border-right-width": "1px",
                "--framer-input-border-style": "solid",
                "--framer-input-border-top-width": "1px",
                "--framer-input-font-color": "rgb(153, 153, 153)",
                "--framer-input-icon-color": "rgb(153, 153, 153)",
                "--framer-input-placeholder-color": "rgb(153, 153, 153)"
              }} type="text" />]
            })}{_jsxs2(motion2.label, {
              className: "framer-1nenbg9",
              layoutDependency,
              layoutId: "A6vQLxfUG",
              children: [<RichText2 __fromCanvasComponent className="framer-1pjf1he" fonts={["Inter-Medium"]} layoutDependency={layoutDependency} layoutId="rA_mLv2gm" style={{
                "--extracted-r6o4lv": "rgb(136, 136, 136)"
              }} verticalAlignment="top" withExternalLayout>{<React2.Fragment>{_jsx2(motion2.p, {
                    style: {
                      "--font-selector": "SW50ZXItTWVkaXVt",
                      "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                      "--framer-font-size": "12px",
                      "--framer-font-weight": "500",
                      "--framer-text-color": "var(--extracted-r6o4lv, rgb(136, 136, 136))"
                    },
                    children: "Last Name"
                  })}</React2.Fragment>}</RichText2>, <FormPlainTextInput className="framer-b0qt83" inputName="Name" layoutDependency={layoutDependency} layoutId="vROp0WNFy" placeholder="Smith" style={{
                "--framer-input-background": "rgba(187, 187, 187, 0.15)",
                "--framer-input-border-bottom-width": "1px",
                "--framer-input-border-color": "rgba(136, 136, 136, 0.1)",
                "--framer-input-border-left-width": "1px",
                "--framer-input-border-radius-bottom-left": "10px",
                "--framer-input-border-radius-bottom-right": "10px",
                "--framer-input-border-radius-top-left": "10px",
                "--framer-input-border-radius-top-right": "10px",
                "--framer-input-border-right-width": "1px",
                "--framer-input-border-style": "solid",
                "--framer-input-border-top-width": "1px",
                "--framer-input-font-color": "rgb(153, 153, 153)",
                "--framer-input-icon-color": "rgb(153, 153, 153)",
                "--framer-input-placeholder-color": "rgb(153, 153, 153)"
              }} type="text" />]
            })}{_jsxs2(motion2.label, {
              className: "framer-15j83nk",
              layoutDependency,
              layoutId: "bqMfIZ5u8",
              children: [<RichText2 __fromCanvasComponent className="framer-1dmjvdv" fonts={["Inter-Medium"]} layoutDependency={layoutDependency} layoutId="Fk2VKQ7Vb" style={{
                "--extracted-r6o4lv": "rgb(136, 136, 136)"
              }} verticalAlignment="top" withExternalLayout>{<React2.Fragment>{_jsx2(motion2.p, {
                    style: {
                      "--font-selector": "SW50ZXItTWVkaXVt",
                      "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                      "--framer-font-size": "12px",
                      "--framer-font-weight": "500",
                      "--framer-text-color": "var(--extracted-r6o4lv, rgb(136, 136, 136))"
                    },
                    children: "Email"
                  })}</React2.Fragment>}</RichText2>, <FormPlainTextInput className="framer-192amsd" inputName="Email" layoutDependency={layoutDependency} layoutId="pFgEvdYTm" placeholder="John@togetherwebloom.us" style={{
                "--framer-input-background": "rgba(187, 187, 187, 0.15)",
                "--framer-input-border-bottom-width": "1px",
                "--framer-input-border-color": "rgba(136, 136, 136, 0.1)",
                "--framer-input-border-left-width": "1px",
                "--framer-input-border-radius-bottom-left": "10px",
                "--framer-input-border-radius-bottom-right": "10px",
                "--framer-input-border-radius-top-left": "10px",
                "--framer-input-border-radius-top-right": "10px",
                "--framer-input-border-right-width": "1px",
                "--framer-input-border-style": "solid",
                "--framer-input-border-top-width": "1px",
                "--framer-input-font-color": "rgb(153, 153, 153)",
                "--framer-input-icon-color": "rgb(153, 153, 153)",
                "--framer-input-placeholder-color": "rgb(153, 153, 153)"
              }} type="email" />]
            })}{_jsxs2(motion2.label, {
              className: "framer-sw2qyt",
              layoutDependency,
              layoutId: "nrbfVt0RU",
              children: [<RichText2 __fromCanvasComponent className="framer-16oys13" fonts={["Inter-Medium"]} layoutDependency={layoutDependency} layoutId="JCbwcaDTD" style={{
                "--extracted-r6o4lv": "rgb(136, 136, 136)"
              }} verticalAlignment="top" withExternalLayout>{<React2.Fragment>{_jsx2(motion2.p, {
                    style: {
                      "--font-selector": "SW50ZXItTWVkaXVt",
                      "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                      "--framer-font-size": "12px",
                      "--framer-font-weight": "500",
                      "--framer-text-color": "var(--extracted-r6o4lv, rgb(136, 136, 136))"
                    },
                    children: "Company"
                  })}</React2.Fragment>}</RichText2>, <FormPlainTextInput className="framer-1u4z3su" inputName="Email" layoutDependency={layoutDependency} layoutId="plO4mH9FG" placeholder="Bloom Manufacturing" style={{
                "--framer-input-background": "rgba(187, 187, 187, 0.15)",
                "--framer-input-border-bottom-width": "1px",
                "--framer-input-border-color": "rgba(136, 136, 136, 0.1)",
                "--framer-input-border-left-width": "1px",
                "--framer-input-border-radius-bottom-left": "10px",
                "--framer-input-border-radius-bottom-right": "10px",
                "--framer-input-border-radius-top-left": "10px",
                "--framer-input-border-radius-top-right": "10px",
                "--framer-input-border-right-width": "1px",
                "--framer-input-border-style": "solid",
                "--framer-input-border-top-width": "1px",
                "--framer-input-font-color": "rgb(153, 153, 153)",
                "--framer-input-icon-color": "rgb(153, 153, 153)",
                "--framer-input-placeholder-color": "rgb(153, 153, 153)"
              }} type="email" />]
            })}{<ComponentViewportProvider height={40} width={`calc(${componentViewport?.width || "100vw"} - 40px)`} y={(componentViewport?.y || 0) + 20 + 536.4}>{<SmartComponentScopedContainer className="framer-ulxcue-container" layoutDependency={layoutDependency} layoutId="ylCoQzRo7-container" nodeId="ylCoQzRo7" rendersWithMotion scopeId="lbFmcIGGk">{_jsx2(w14UYzR89_default, {
                  height: "100%",
                  id: "ylCoQzRo7",
                  layoutId: "ylCoQzRo7",
                  style: {
                    height: "100%",
                    width: "100%"
                  },
                  type: "submit",
                  variant: formVariants(formState, {
                    pending: "bMERotEIC",
                    success: "qvMs0h71H"
                  }, matchVariant("si3ejPH9M")),
                  width: "100%"
                })}</SmartComponentScopedContainer>}</ComponentViewportProvider>}</>}</FormContainer>}</Transition2>}</Variants2>}</LayoutGroup2>;
});
var css3 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-yuJGu.framer-uzvuch, .framer-yuJGu .framer-uzvuch { display: block; }", ".framer-yuJGu.framer-1jrbxq8 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 20px; position: relative; width: 280px; will-change: var(--framer-will-change-override, transform); }", ".framer-yuJGu .framer-1fuxn94, .framer-yuJGu .framer-yu5t2n, .framer-yuJGu .framer-ooqjer, .framer-yuJGu .framer-1nenbg9, .framer-yuJGu .framer-15j83nk, .framer-yuJGu .framer-sw2qyt { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }", ".framer-yuJGu .framer-s1frz, .framer-yuJGu .framer-1culfwm, .framer-yuJGu .framer-2ba2n4, .framer-yuJGu .framer-1pjf1he, .framer-yuJGu .framer-1dmjvdv, .framer-yuJGu .framer-16oys13 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-yuJGu .framer-3i3w7j, .framer-yuJGu .framer-19m2lur, .framer-yuJGu .framer-vrxrdp, .framer-yuJGu .framer-upgune, .framer-yuJGu .framer-16sptsy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }", ".framer-yuJGu .framer-ef4cts, .framer-yuJGu .framer-1t6gp3g, .framer-yuJGu .framer-ag6k99, .framer-yuJGu .framer-1wsu4ab, .framer-yuJGu .framer-bijtpy { --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 16px); position: relative; width: 16px; }", ".framer-yuJGu .framer-1u92aez, .framer-yuJGu .framer-1e3b7vm, .framer-yuJGu .framer-rwpgdo, .framer-yuJGu .framer-1lw9gnc, .framer-yuJGu .framer-1w6k39g { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }", '.framer-yuJGu .framer-1h7yfdw, .framer-yuJGu .framer-b0qt83, .framer-yuJGu .framer-192amsd, .framer-yuJGu .framer-1u4z3su { --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-padding: 12px; flex: none; height: 40px; position: relative; width: 100%; }', ".framer-yuJGu .framer-ulxcue-container { flex: none; height: 40px; position: relative; width: 100%; }"];
var FramerlbFmcIGGk = withCSS2(Component2, css3, "framer-yuJGu");
var lbFmcIGGk_default = FramerlbFmcIGGk;
FramerlbFmcIGGk.displayName = "access form";
FramerlbFmcIGGk.defaultProps = {
  height: 200,
  width: 280
};
addFonts2(FramerlbFmcIGGk, [{
  explicitInter: true,
  fonts: [{
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
    url: "https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2",
    weight: "500"
  }, {
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
    url: "https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2",
    weight: "500"
  }, {
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+1F00-1FFF",
    url: "https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2",
    weight: "500"
  }, {
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+0370-03FF",
    url: "https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2",
    weight: "500"
  }, {
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
    url: "https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2",
    weight: "500"
  }, {
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    url: "https://framerusercontent.com/assets/UjlFhCnUjxhNfep4oYBPqnEssyo.woff2",
    weight: "500"
  }, {
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
    url: "https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2",
    weight: "500"
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
}, ...Button4Fonts], {
  supportsExplicitInterCodegen: true
});
FramerlbFmcIGGk.loader = {
  load: (props, context) => {
    const locale = context.locale;
    return Promise.allSettled([forwardLoader(w14UYzR89_default, {}, context)]);
  }
};
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
      "name": "FramerlbFmcIGGk",
      "slots": [],
      "annotations": {
        "framerComponentViewportWidth": "true",
        "framerIntrinsicHeight": "200",
        "framerColorSyntax": "true",
        "framerContractVersion": "1",
        "framerImmutableVariables": "true",
        "framerIntrinsicWidth": "280",
        "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]}}}',
        "framerAutoSizeImages": "true",
        "framerDisplayContentsDiv": "false"
      }
    },
    "__FramerMetadata__": {
      "type": "variable"
    }
  }
};
var _OriginalComponent = lbFmcIGGk_default;
function AccessformWrapped(props) {
  var _variant = useVariant(props.variant);
  var _inner = (_variant !== undefined) ? { ...props, variant: _variant } : props;
  return _ctxJsx(ContextProviders, { children: _ctxJsx(_OriginalComponent, _inner) });
}
Object.assign(AccessformWrapped, _OriginalComponent);
export {  __FramerMetadata__,  AccessformWrapped as default   };