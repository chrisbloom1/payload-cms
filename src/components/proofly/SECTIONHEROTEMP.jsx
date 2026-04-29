"use client"
// http-url:https://framerusercontent.com/modules/09dlm6EvEmz0yjK6TiY3/1KlvtujTSWbBRHu2bibm/EBEez75XI.js
import { jsx as _jsx2, jsxs as _jsxs2 } from "react/jsx-runtime";
import { addFonts, addPropertyControls as addPropertyControls2, ComponentViewportProvider, ControlType as ControlType2, cx, getFonts, getFontsFromSharedStyle, RichText, SmartComponentScopedContainer, SVG, useComponentViewport, useLocaleInfo, useVariantState, withCSS, withFX, withOptimizedAppearEffect } from "@proofly-framer/runtime";
import { LayoutGroup, motion as motion2, MotionConfigContext } from "@proofly-framer/runtime";
import * as React2 from "react";
import { useRef as useRef2 } from "react";

// Extracted SVG assets
const __svg_1 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 1 404\" overflow=\"visible\"><path d=\"M 0 0 L 0 404\" fill=\"transparent\" stroke-width=\"2\" stroke=\"var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62)) /* {&quot;name&quot;:&quot;SERVICE&quot;} */\"></path></svg>";
const __svg_2 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 25 18\" overflow=\"visible\"><path d=\"M 23.422 4.03 L 15.678 11.715 L 19.869 1.675 L 17.807 0.827 L 13.616 10.867 L 13.616 0 L 11.384 0 L 11.384 10.867 L 7.193 0.827 L 5.131 1.675 L 9.322 11.715 L 1.578 4.03 L 0 5.596 L 12.5 18 L 25 5.596 Z\" fill=\"rgb(245,244,250)\"></path></svg>";
const __svg_3 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 1 464.5\" overflow=\"visible\"><path d=\"M 0 0 L 0 464.5\" fill=\"transparent\" stroke-width=\"2\" stroke=\"var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62)) /* {&quot;name&quot;:&quot;SERVICE&quot;} */\"></path></svg>";


// http-url:https://framerusercontent.com/modules/gOzdabqVTJRBvB3HjiKo/l9eXWUuBeS8jGcGsJovx/MyInput.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { addPropertyControls, ControlType, motion } from "@proofly-framer/runtime";
function MyInput(props) {
  const {
    height,
    placeholder,
    placeholderColor,
    textColor,
    font,
    fontSize,
    buttonColor,
    buttonTextColor,
    textareaBg,
    textareaBorderColor,
    textareaBorderRadius
  } = props;
  const [value, setValue] = React.useState("");
  const textareaRef = React.useRef(null);
  React.useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);
  const handleSend = () => {
    if (!value.trim()) return;
    const encoded = encodeURIComponent(value.trim());
    let baseUrl = "https://app.bloomnetwork.ai/marketplace/request/new";
    try {
      if (typeof (typeof window !== "undefined" ? window : undefined) !== "undefined" && typeof URLSearchParams !== "undefined") {
        const urlParams = new URLSearchParams(window.location.search);
        for (const [key, value2] of urlParams.entries()) {
          if (key.toLowerCase() === "vchaturl") {
            baseUrl = value2;
            break;
          }
        }
      }
    } catch (error) {
      console.log("Could not read URL params:", error);
    }
    const separator = baseUrl.includes("?") ? "&" : "?";
    const finalUrl = `${baseUrl}${separator}prefill=${encoded}`;
    window.open(finalUrl, "_blank");
  };
  const handleKeyDown = e => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  const fontFamily = `"${font?.family || "Haffer"}", sans-serif`;
  return <div style={{
    width: "100%",
    height,
    position: "relative"
  }}>{<textarea ref={textareaRef} value={value} onChange={e => setValue(e.target.value)} onKeyDown={handleKeyDown} placeholder={placeholder} style={{
      width: "100%",
      height: "100%",
      padding: "12px 12px 60px 12px",
      borderRadius: textareaBorderRadius,
      border: `1px solid ${textareaBorderColor}`,
      background: textareaBg,
      fontFamily,
      fontWeight: font?.weight || 400,
      fontSize,
      color: textColor,
      outline: "none",
      resize: "none",
      boxSizing: "border-box"
    }} />}{_jsx(motion.button, {
      whileTap: {
        scale: value.trim() ? 0.96 : 1
      },
      onClick: handleSend,
      disabled: !value.trim(),
      style: {
        position: "absolute",
        right: 12,
        bottom: 12,
        padding: "12px 24px",
        borderRadius: textareaBorderRadius,
        border: "none",
        background: buttonColor,
        fontFamily,
        fontWeight: font?.weight || 600,
        fontSize: fontSize * 0.9,
        color: buttonTextColor,
        cursor: value.trim() ? "pointer" : "default",
        opacity: 1,
        pointerEvents: value.trim() ? "auto" : "none",
        transition: "opacity 0.2s ease"
      },
      children: "Chat now"
    })}{<style>{`
                textarea::placeholder {
                    color: ${placeholderColor};
                    font-family: ${fontFamily};
                    font-weight: ${font?.weight || 400};
                    opacity: 1;
                }
            `}</style>}</div>;
}
addPropertyControls(MyInput, {
  placeholder: {
    type: ControlType.String,
    title: "Placeholder",
    defaultValue: "Describe your product's supply chain needs"
  },
  placeholderColor: {
    type: ControlType.Color,
    title: "Placeholder Color",
    defaultValue: "#888"
  },
  textColor: {
    type: ControlType.Color,
    title: "Text Color",
    defaultValue: "#000"
  },
  font: {
    type: ControlType.Font,
    title: "Font",
    defaultValue: {
      family: "Haffer",
      weight: 400
    }
  },
  fontSize: {
    type: ControlType.Number,
    title: "Font Size",
    defaultValue: 18,
    min: 10,
    max: 40
  },
  textareaBg: {
    type: ControlType.Color,
    title: "Textarea BG",
    defaultValue: "#fff"
  },
  textareaBorderColor: {
    type: ControlType.Color,
    title: "Border Color",
    defaultValue: "rgba(0,0,0,0.2)"
  },
  textareaBorderRadius: {
    type: ControlType.Number,
    title: "Radius",
    defaultValue: 12,
    min: 0,
    max: 50
  },
  buttonColor: {
    type: ControlType.Color,
    title: "Button BG",
    defaultValue: "#000"
  },
  buttonTextColor: {
    type: ControlType.Color,
    title: "Button Text Color",
    defaultValue: "#fff"
  },
  height: {
    type: ControlType.Number,
    title: "Height",
    defaultValue: 100,
    min: 60,
    max: 300
  }
});

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
import { jsx as _ctxJsx } from "react/jsx-runtime";
import { ContextProviders, useVariant } from "@proofly-framer/runtime";
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

// http-url:https://framerusercontent.com/modules/09dlm6EvEmz0yjK6TiY3/1KlvtujTSWbBRHu2bibm/EBEez75XI.js
var RichTextWithFX = withFX(RichText);
var MyInputFonts = getFonts(MyInput);
var SmartComponentScopedContainerWithFX = withFX(SmartComponentScopedContainer);
var MotionDivWithFXWithOptimizedAppearEffect = withOptimizedAppearEffect(withFX(motion2.div));
var MotionDivWithFX = withFX(motion2.div);
var cycleOrder = ["nS1nvr7pE", "DveDLr698", "ShzEuOi2R"];
var serializationHash = "framer-c4r1k";
var variantClassNames = {
  DveDLr698: "framer-v-n1ogt4",
  nS1nvr7pE: "framer-v-1sepgc3",
  ShzEuOi2R: "framer-v-1qxbv15"
};
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach(variant => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = {
  bounce: 0.2,
  delay: 0,
  duration: 0.4,
  type: "spring"
};
var animation = {
  opacity: 0,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  skewX: 0,
  skewY: 0,
  x: 0,
  y: 16
};
var transition2 = {
  damping: 60,
  delay: 0.2,
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
  y: 16
};
var transition3 = {
  damping: 60,
  delay: 0.3,
  mass: 1,
  stiffness: 250,
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
  transition: transition3,
  x: 0,
  y: 16
};
var transition4 = {
  damping: 60,
  delay: 0.4,
  mass: 1,
  stiffness: 250,
  type: "spring"
};
var transformTemplate1 = (_, t) => `translateX(-50%) ${t}`;
var transition5 = {
  bounce: 0.6,
  delay: 2,
  duration: 1.2,
  type: "spring"
};
var animation3 = {
  opacity: 1,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  skewX: 0,
  skewY: 0,
  transition: transition5,
  x: 0,
  y: 0
};
var animation4 = {
  opacity: 1e-3,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 0.5,
  skewX: 0,
  skewY: 0,
  x: 0,
  y: 0
};
var transition6 = {
  delay: 2.8,
  duration: 0.5,
  ease: [0.44, 0, 0.56, 1],
  type: "tween"
};
var animation5 = {
  opacity: 1,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  skewX: 0,
  skewY: 0,
  transition: transition6,
  x: 0,
  y: 0
};
var animation6 = {
  opacity: 1e-3,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  skewX: 0,
  skewY: 0,
  x: 0,
  y: -65
};
var animation7 = {
  opacity: 0,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 0,
  skewX: 0,
  skewY: 0,
  x: 0,
  y: 0
};
var transition7 = {
  bounce: 0.5,
  delay: 1.4,
  duration: 0.8,
  type: "spring"
};
var animation8 = {
  opacity: 1e-3,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  skewX: 0,
  skewY: 0,
  x: 0,
  y: 195
};
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
  Desktop: "nS1nvr7pE",
  Phone: "ShzEuOi2R",
  tablet: "DveDLr698"
};
var getProps = ({
  height,
  id,
  text,
  textColor,
  width,
  ...props
}) => {
  return {
    ...props,
    GaUzieZ72: text ?? props.GaUzieZ72 ?? "Leverage Bloom\u2019s intelligent matchmaking and booking platform to scale hardware more efficiently",
    iBBzRpGUK: textColor ?? props.iBBzRpGUK ?? "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
    variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "nS1nvr7pE"
  };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = React2.forwardRef(function (props, ref) {
  const fallbackRef = useRef2(null);
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
    GaUzieZ72,
    iBBzRpGUK,
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
    defaultVariant: "nS1nvr7pE",
    ref: refBinding,
    variant,
    variantClassNames
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [className2, className];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  const isDisplayed = () => {
    if (baseVariant === "ShzEuOi2R") return false;
    return true;
  };
  const isDisplayed1 = () => {
    if (baseVariant === "ShzEuOi2R") return true;
    return false;
  };
  return <LayoutGroup id={layoutId ?? defaultLayoutId}>{<Variants animate={variants} initial={false}>{<Transition value={transition1}>{_jsxs2(motion2.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx(scopingClassNames, "framer-1sepgc3", className3, classNames),
          "data-framer-name": "Desktop",
          layoutDependency,
          layoutId: "nS1nvr7pE",
          ref: refBinding,
          style: {
            ...style
          },
          ...addPropertyOverrides({
            DveDLr698: {
              "data-framer-name": "tablet"
            },
            ShzEuOi2R: {
              "data-framer-name": "Phone"
            }
          }, baseVariant, gestureVariant),
          children: [isDisplayed() && _jsx2(motion2.div, {
            className: "framer-1vk7ea1",
            "data-framer-name": "Container",
            layoutDependency,
            layoutId: "LjJn96vw8",
            children: _jsxs2(motion2.div, {
              className: "framer-19iao02",
              layoutDependency,
              layoutId: "PvDbYfZJy",
              children: [<RichTextWithFX __framer__animate={{
                transition: transition2
              }} __framer__animateOnce __framer__enter={animation} __framer__exit={animation1} __framer__styleAppearEffectEnabled __framer__threshold={0.5} __fromCanvasComponent __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-vi4kow" data-framer-name="A security-first alternative to Okta" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="VGjO5sShu" style={{
                "--extracted-gdpscs": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
              }} verticalAlignment="top" withExternalLayout>{<React2.Fragment>{_jsxs2(motion2.h1, {
                    className: "framer-styles-preset-xwk33z",
                    "data-styles-preset": "Sn1ggcgQ3",
                    style: {
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-gdpscs, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                    },
                    children: ["Build, Deliver, Service", _jsx2(motion2.br, {}), "hardware better with Bloom"]
                  })}</React2.Fragment>}</RichTextWithFX>, <RichTextWithFX __framer__animate={{
                transition: transition3
              }} __framer__animateOnce __framer__enter={animation} __framer__styleAppearEffectEnabled __framer__threshold={0.5} __fromCanvasComponent __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-yptx5a" data-framer-name="We are building a platform for better security in workforce identity and access management. Join as an early design partner and make your mark on the future of identity." fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="pMLfIGo2x" style={{
                "--extracted-r6o4lv": "var(--variable-reference-iBBzRpGUK-EBEez75XI)",
                "--variable-reference-iBBzRpGUK-EBEez75XI": iBBzRpGUK
              }} text={GaUzieZ72} verticalAlignment="top" withExternalLayout>{<React2.Fragment>{_jsx2(motion2.p, {
                    className: "framer-styles-preset-k8yxrn",
                    "data-styles-preset": "ferGDeq75",
                    style: {
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-iBBzRpGUK-EBEez75XI))"
                    },
                    children: "Leverage Bloom\u2019s intelligent matchmaking and booking platform to scale hardware more efficiently"
                  })}</React2.Fragment>}</RichTextWithFX>]
            })
          }), isDisplayed1() && _jsxs2(motion2.div, {
            className: "framer-16j1ts4",
            layoutDependency,
            layoutId: "TCZxnvwzY",
            children: [isDisplayed1() && <RichTextWithFX __framer__animate={{
              transition: transition3
            }} __framer__animateOnce __framer__enter={animation} __framer__exit={animation2} __framer__styleAppearEffectEnabled __framer__threshold={0.5} __fromCanvasComponent __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-1w0g136" data-framer-name="We are building a platform for better security in workforce identity and access management. Join as an early design partner and make your mark on the future of identity." fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="qWF1aJ40S" style={{
              "--extracted-r6o4lv": "var(--variable-reference-iBBzRpGUK-EBEez75XI)",
              "--variable-reference-iBBzRpGUK-EBEez75XI": iBBzRpGUK
            }} text={GaUzieZ72} verticalAlignment="top" withExternalLayout>{<React2.Fragment>{_jsx2(motion2.p, {
                  className: "framer-styles-preset-k8yxrn",
                  "data-styles-preset": "ferGDeq75",
                  style: {
                    "--framer-text-alignment": "left",
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-iBBzRpGUK-EBEez75XI))"
                  },
                  children: "Leverage Bloom\u2019s intelligent matchmaking and booking platform to scale hardware more efficiently"
                })}</React2.Fragment>}</RichTextWithFX>, isDisplayed1() && <RichTextWithFX __framer__animate={{
              transition: transition2
            }} __framer__animateOnce __framer__enter={animation} __framer__exit={animation1} __framer__styleAppearEffectEnabled __framer__threshold={0.5} __fromCanvasComponent __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-lu7mcl" data-framer-name="A security-first alternative to Okta" fonts={["CUSTOM;Haffer Bold"]} layoutDependency={layoutDependency} layoutId="SCoqB3dkW" style={{
              "--extracted-gdpscs": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
            }} verticalAlignment="top" withExternalLayout>{<React2.Fragment>{_jsxs2(motion2.h1, {
                  style: {
                    "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                    "--framer-font-family": '"Haffer Bold", sans-serif',
                    "--framer-font-size": "32px",
                    "--framer-font-weight": "790",
                    "--framer-line-height": "90%",
                    "--framer-text-alignment": "left",
                    "--framer-text-color": "var(--extracted-gdpscs, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                  },
                  children: ["Build, Deliver, Service hardware ", _jsx2(motion2.br, {}), "better with Bloom"]
                })}</React2.Fragment>}</RichTextWithFX>]
          }), _jsxs2(motion2.div, {
            className: "framer-ghnb08",
            "data-framer-name": "container with top padding",
            layoutDependency,
            layoutId: "VRLbs2gBS",
            children: [_jsx2(motion2.div, {
              className: "framer-77g5qs",
              "data-framer-name": "line 1",
              layoutDependency,
              layoutId: "FfD83Hc7L",
              children: _jsxs2(motion2.div, {
                className: "framer-15tjrk4",
                layoutDependency,
                layoutId: "F9V_ZX7vZ",
                children: [<ComponentViewportProvider>{<SmartComponentScopedContainerWithFX __framer__animate={{
                    transition: transition4
                  }} __framer__animateOnce __framer__enter={animation} __framer__styleAppearEffectEnabled __framer__threshold={0.5} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-1urskbr-container" isAuthoredByUser layoutDependency={layoutDependency} layoutId="VN4UQANE9-container" nodeId="VN4UQANE9" rendersWithMotion scopeId="EBEez75XI">{<MyInput buttonColor="var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))" buttonIconColor="rgb(255, 255, 255)" focusedPlaceholder="How can Bloom help you today?" font={{
                      fontFamily: '"Inter", "Inter Placeholder", sans-serif',
                      fontStyle: "normal",
                      fontWeight: 400
                    }} fontSize={16} height="100%" id="VN4UQANE9" layoutId="VN4UQANE9" placeholderColor="var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143))" redirectUrl="https://bloom-ai-chat-onboarding-git-main-hitesh-3604s-projects.vercel.app/" rotatingPlaceholders={["I need to build a batch of drones", "I want to ship battery packs", "Store crates of electric motorcycles", "Find a contract manufacturer for robotic lawnmower", "I need to deliver a batch of EV chargers", "Discover a network of service providers"]} style={{
                      height: "100%",
                      maxWidth: "100%",
                      width: "100%"
                    }} textareaBg="var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))" textareaBorderColor="rgba(0, 0, 0, 0)" textareaBorderRadius={12} textColor="var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))" width="100%" />}</SmartComponentScopedContainerWithFX>}</ComponentViewportProvider>, <MotionDivWithFXWithOptimizedAppearEffect __perspectiveFX={false} __smartComponentFX __targetOpacity={1} animate={animation3} className="framer-1tkdbmr" data-framer-appear-id="1tkdbmr" data-framer-name="cta" initial={animation4} layoutDependency={layoutDependency} layoutId="d45iU4CWX" optimized style={{
                  background: "radial-gradient(134% 560% at 0% 100%, var(--token-d40a5262-b4fe-45d5-9e97-61d735d1744e, rgb(255, 152, 0)) 0%, var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62)) 100%)",
                  borderBottomLeftRadius: 100,
                  borderBottomRightRadius: 100,
                  borderTopLeftRadius: 100,
                  borderTopRightRadius: 100,
                  boxShadow: "0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06)"
                }} transformTemplate={transformTemplate1} {...addPropertyOverrides({
                  ShzEuOi2R: {
                    transformTemplate: void 0
                  }
                }, baseVariant, gestureVariant)}>{<RichText __fromCanvasComponent className="framer-o51e71" data-framer-name="We are building a platform for better security in workforce identity and access management. Join as an early design partner and make your mark on the future of identity." fonts={["CUSTOMV2;Haffer Bold"]} layoutDependency={layoutDependency} layoutId="nreWjX13y" style={{
                    "--extracted-r6o4lv": "var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248))"
                  }} verticalAlignment="top" withExternalLayout>{<React2.Fragment>{_jsx2(motion2.p, {
                        style: {
                          "--font-selector": "Q1VTVE9NVjI7SGFmZmVyIEJvbGQ=",
                          "--framer-font-family": '"Haffer Bold", sans-serif',
                          "--framer-font-size": "12px",
                          "--framer-font-weight": "790",
                          "--framer-line-height": "120%",
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)))"
                        },
                        children: "Chat with Bloom AI now!"
                      })}</React2.Fragment>}</RichText>}</MotionDivWithFXWithOptimizedAppearEffect>]
              })
            }), _jsx2(motion2.div, {
              className: "framer-ws6xfb",
              "data-framer-name": "line 2",
              layoutDependency,
              layoutId: "D0t7xAB_Y",
              children: <MotionDivWithFXWithOptimizedAppearEffect __perspectiveFX={false} __smartComponentFX __targetOpacity={1} animate={animation5} className="framer-1a6tim8" data-framer-appear-id="1a6tim8" initial={animation6} layoutDependency={layoutDependency} layoutId="VAhp7hxt1" optimized>{<SVG className="framer-13g3gpa" layoutDependency={layoutDependency} layoutId="JIaxwkVkm" opacity={1} requiresOverflowVisible svg={__svg_1} withExternalLayout />}</MotionDivWithFXWithOptimizedAppearEffect>
            }), _jsx2(motion2.div, {
              className: "framer-qem5lv",
              "data-framer-name": "line 3",
              layoutDependency,
              layoutId: "pBQgAtmNt",
              children: _jsx2(motion2.div, {
                className: "framer-1c71syd",
                layoutDependency,
                layoutId: "BkNK5KlC4",
                children: <MotionDivWithFX __framer__animate={{
                  transition: transition7
                }} __framer__animateOnce __framer__enter={animation7} __framer__styleAppearEffectEnabled __framer__threshold={0.5} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-1fdqnva" data-framer-name="bloom" layoutDependency={layoutDependency} layoutId="QuBBEYOWH" style={{
                  background: "radial-gradient(100% 100% at 100% 0%, var(--token-d40a5262-b4fe-45d5-9e97-61d735d1744e, rgb(255, 152, 0)) 0%, var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62)) 100%)",
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8
                }}>{_jsx2(motion2.div, {
                    className: "framer-212a13",
                    layoutDependency,
                    layoutId: "i996hqgGu",
                    children: <SVG className="framer-1ty7y1d" layoutDependency={layoutDependency} layoutId="rYuxT2PFF" opacity={1} requiresOverflowVisible={false} svg={__svg_2} withExternalLayout />
                  })}</MotionDivWithFX>
              })
            }), _jsx2(motion2.div, {
              className: "framer-kjckdo",
              "data-framer-name": "line 4",
              layoutDependency,
              layoutId: "znYEPwC62",
              children: <MotionDivWithFXWithOptimizedAppearEffect __perspectiveFX={false} __smartComponentFX __targetOpacity={1} animate={animation5} className="framer-1m7a4ju" data-framer-appear-id="1m7a4ju" initial={animation8} layoutDependency={layoutDependency} layoutId="sW0Nkfdlq" optimized>{<SVG className="framer-qxsntb" layoutDependency={layoutDependency} layoutId="HVOgN15it" opacity={1} requiresOverflowVisible svg={__svg_3} withExternalLayout />}</MotionDivWithFXWithOptimizedAppearEffect>
            })]
          })]
        })}</Transition>}</Variants>}</LayoutGroup>;
});
var css3 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-c4r1k.framer-134xvvz, .framer-c4r1k .framer-134xvvz { display: block; }", ".framer-c4r1k.framer-1sepgc3 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: 720px; justify-content: center; max-height: 720px; min-height: 550px; overflow: visible; padding: 36px 36px 0px 36px; position: relative; width: 1200px; }", ".framer-c4r1k .framer-1vk7ea1 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; max-width: 1280px; overflow: visible; padding: 96px 0px 48px 0px; position: relative; width: 100%; }", ".framer-c4r1k .framer-19iao02 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-c4r1k .framer-vi4kow { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 687px; word-break: break-word; word-wrap: break-word; z-index: 1; }", ".framer-c4r1k .framer-yptx5a { flex: none; height: auto; max-width: 580px; position: relative; white-space: pre-wrap; width: 481px; word-break: break-word; word-wrap: break-word; z-index: 1; }", ".framer-c4r1k .framer-16j1ts4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 200px; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-c4r1k .framer-1w0g136 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; z-index: 1; }", ".framer-c4r1k .framer-lu7mcl { --framer-text-wrap: balance; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; z-index: 1; }", ".framer-c4r1k .framer-ghnb08 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1px; justify-content: flex-start; max-width: 1280px; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-c4r1k .framer-77g5qs { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-c4r1k .framer-15tjrk4 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; z-index: 1; }", ".framer-c4r1k .framer-1urskbr-container { flex: none; height: 120px; max-width: 600px; position: relative; width: 100%; }", ".framer-c4r1k .framer-1tkdbmr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 50%; overflow: visible; padding: 8px 16px 8px 16px; position: absolute; top: -24px; width: min-content; z-index: 1; }", ".framer-c4r1k .framer-o51e71 { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }", ".framer-c4r1k .framer-ws6xfb { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 48px; height: 1px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-c4r1k .framer-1a6tim8 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; z-index: 0; }", ".framer-c4r1k .framer-13g3gpa { height: 404px; position: relative; width: 1px; }", ".framer-c4r1k .framer-qem5lv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-c4r1k .framer-1c71syd { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }", ".framer-c4r1k .framer-1fdqnva { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 2.5446794033050537px; height: 48px; justify-content: center; overflow: visible; padding: 2.5446794033050537px; position: relative; width: 48px; }", ".framer-c4r1k .framer-212a13 { flex: none; height: 18px; overflow: visible; position: relative; width: 40px; }", ".framer-c4r1k .framer-1ty7y1d { height: 18px; left: 8px; position: absolute; top: 1px; width: 25px; }", ".framer-c4r1k .framer-kjckdo { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 48px; height: 1px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-c4r1k .framer-1m7a4ju { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 291px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }", ".framer-c4r1k .framer-qxsntb { height: 465px; position: relative; width: 1px; }", ".framer-c4r1k.framer-v-n1ogt4.framer-1sepgc3 { height: 628px; padding: 32px 32px 0px 32px; width: 724px; }", ".framer-c4r1k.framer-v-n1ogt4 .framer-1vk7ea1 { padding: 96px 0px 32px 0px; }", ".framer-c4r1k.framer-v-n1ogt4 .framer-vi4kow { width: 647px; }", ".framer-c4r1k.framer-v-1qxbv15.framer-1sepgc3 { gap: 43px; height: 574px; justify-content: flex-start; max-height: unset; min-height: unset; padding: 104px 16px 0px 16px; width: 374px; }", ".framer-c4r1k.framer-v-1qxbv15 .framer-16j1ts4 { flex-direction: column; min-height: unset; order: 1; }", ".framer-c4r1k.framer-v-1qxbv15 .framer-1w0g136 { flex: none; order: 1; width: 100%; }", ".framer-c4r1k.framer-v-1qxbv15 .framer-lu7mcl { flex: none; order: 0; width: 100%; }", ".framer-c4r1k.framer-v-1qxbv15 .framer-ghnb08 { order: 2; }", ".framer-c4r1k.framer-v-1qxbv15 .framer-1tkdbmr { left: unset; padding: 4px 8px 4px 8px; right: 0px; top: -15px; }", ".framer-c4r1k.framer-v-1qxbv15 .framer-o51e71 { white-space: pre-wrap; width: 135px; word-break: break-word; word-wrap: break-word; }", ...css2, ...css];
var FramerEBEez75XI = withCSS(Component, css3, "framer-c4r1k");
var EBEez75XI_default = FramerEBEez75XI;
FramerEBEez75XI.displayName = "SECTION HERO - TEMP";
FramerEBEez75XI.defaultProps = {
  height: 720,
  width: 1200
};
addPropertyControls2(FramerEBEez75XI, {
  variant: {
    options: ["nS1nvr7pE", "DveDLr698", "ShzEuOi2R"],
    optionTitles: ["Desktop", "tablet", "Phone"],
    title: "Variant",
    type: ControlType2.Enum
  },
  GaUzieZ72: {
    defaultValue: "Leverage Bloom\u2019s intelligent matchmaking and booking platform to scale hardware more efficiently",
    displayTextArea: true,
    title: "Text",
    type: ControlType2.String
  },
  iBBzRpGUK: {
    defaultValue: 'var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))',
    title: "text color",
    type: ControlType2.Color
  }
});
addFonts(FramerEBEez75XI, [{
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
    cssFamilyName: "Haffer Bold",
    source: "custom",
    style: "normal",
    uiFamilyName: "Haffer",
    url: "https://framerusercontent.com/assets/eRqmC6W9PktN8mUcnwel9B6wmPs.woff",
    weight: "790"
  }, {
    cssFamilyName: "Haffer Bold",
    source: "custom",
    style: "normal",
    uiFamilyName: "Haffer",
    url: "https://framerusercontent.com/assets/eRqmC6W9PktN8mUcnwel9B6wmPs.woff",
    weight: "790"
  }]
}, ...MyInputFonts, ...getFontsFromSharedStyle(fonts2), ...getFontsFromSharedStyle(fonts)], {
  supportsExplicitInterCodegen: true
});
var __FramerMetadata__ = {
  "exports": {
    "default": {
      "type": "reactComponent",
      "name": "FramerEBEez75XI",
      "slots": [],
      "annotations": {
        "framerComponentViewportWidth": "true",
        "framerAutoSizeImages": "true",
        "framerContractVersion": "1",
        "framerVariables": '{"GaUzieZ72":"text","iBBzRpGUK":"textColor"}',
        "framerDisplayContentsDiv": "false",
        "framerIntrinsicWidth": "1200",
        "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"],"constraints":[null,null,"550px","720px"]},"DveDLr698":{"layout":["fixed","fixed"],"constraints":[null,null,"550px","720px"]},"ShzEuOi2R":{"layout":["fixed","fixed"]}}}',
        "framerColorSyntax": "true",
        "framerIntrinsicHeight": "720",
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
var _OriginalComponent = EBEez75XI_default;
function SECTIONHEROTEMPWrapped(props) {
  var _variant = useVariant(props.variant);
  var _inner = (_variant !== undefined) ? { ...props, variant: _variant } : props;
  return _ctxJsx(ContextProviders, { children: _ctxJsx(_OriginalComponent, _inner) });
}
Object.assign(SECTIONHEROTEMPWrapped, _OriginalComponent);
export {  __FramerMetadata__,  SECTIONHEROTEMPWrapped as default   };