"use client"
// http-url:https://framerusercontent.com/modules/qenG6WbSPU3X0OduQ7T6/frYQNHPRjtMmY0CJBo5q/EXzLZaNnS.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, getFontsFromSharedStyle, getLoadingLazyAtYPosition, Image, RichText, useComponentViewport, useLocaleInfo, useVariantState, withCSS, withFX } from "@proofly-framer/runtime";
import { LayoutGroup, motion, MotionConfigContext } from "@proofly-framer/runtime";
import * as React from "react";
import { useRef } from "react";

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

// http-url:https://framerusercontent.com/modules/zg2eX91MMKVjR7Bs5ras/JqLhicMJ1tTM5wW56DJq/fOTtXmCE4.js
import { fontStore as fontStore2 } from "@proofly-framer/runtime";
fontStore2.loadFonts(["CUSTOM;Haffer Bold", "CUSTOM;Haffer Bold", "CUSTOM;Haffer Bold Italic", "CUSTOM;Haffer Regular Italic"]);
var fonts2 = [{
  explicitInter: true,
  fonts: [{
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
var css2 = ['.framer-cVlFz .framer-styles-preset-rp61ro:not(.rich-text-wrapper), .framer-cVlFz .framer-styles-preset-rp61ro.rich-text-wrapper h2 { --framer-font-family: "Haffer Bold", sans-serif; --framer-font-family-bold: "Haffer Bold", sans-serif; --framer-font-family-bold-italic: "Haffer Bold Italic", sans-serif; --framer-font-family-italic: "Haffer Regular Italic", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 36px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 790; --framer-font-weight-bold: 790; --framer-font-weight-bold-italic: 790; --framer-font-weight-italic: 430; --framer-letter-spacing: 0.01em; --framer-line-height: 100%; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; }', '@media (max-width: 1199px) and (min-width: 724px) { .framer-cVlFz .framer-styles-preset-rp61ro:not(.rich-text-wrapper), .framer-cVlFz .framer-styles-preset-rp61ro.rich-text-wrapper h2 { --framer-font-family: "Haffer Bold", sans-serif; --framer-font-family-bold: "Haffer Bold", sans-serif; --framer-font-family-bold-italic: "Haffer Bold Italic", sans-serif; --framer-font-family-italic: "Haffer Regular Italic", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 32px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 790; --framer-font-weight-bold: 790; --framer-font-weight-bold-italic: 790; --framer-font-weight-italic: 430; --framer-letter-spacing: 0.01em; --framer-line-height: 100%; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }', '@media (max-width: 723px) and (min-width: 0px) { .framer-cVlFz .framer-styles-preset-rp61ro:not(.rich-text-wrapper), .framer-cVlFz .framer-styles-preset-rp61ro.rich-text-wrapper h2 { --framer-font-family: "Haffer Bold", sans-serif; --framer-font-family-bold: "Haffer Bold", sans-serif; --framer-font-family-bold-italic: "Haffer Bold Italic", sans-serif; --framer-font-family-italic: "Haffer Regular Italic", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 790; --framer-font-weight-bold: 790; --framer-font-weight-bold-italic: 790; --framer-font-weight-italic: 430; --framer-letter-spacing: 0.01em; --framer-line-height: 100%; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }'];
var className2 = "framer-cVlFz";

// http-url:https://framerusercontent.com/modules/5b0cRZbgNRw1dCNVnxhv/mDSpobAAY3IZwQ4LzCUn/z4Urx0kPV.js
import { fontStore as fontStore3 } from "@proofly-framer/runtime";
import { jsx as _ctxJsx } from "react/jsx-runtime";
import { ContextProviders, useVariant } from "@proofly-framer/runtime";
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

// http-url:https://framerusercontent.com/modules/qenG6WbSPU3X0OduQ7T6/frYQNHPRjtMmY0CJBo5q/EXzLZaNnS.js
var ImageWithFX = withFX(Image);
var cycleOrder = ["Jb2HwvZYJ", "Yhe7sy2ar", "JihdGDX35"];
var serializationHash = "framer-QRKTr";
var variantClassNames = {
  Jb2HwvZYJ: "framer-v-1e4om2y",
  JihdGDX35: "framer-v-h957i3",
  Yhe7sy2ar: "framer-v-s8zfuo"
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
var toResponsiveImage = value => {
  if (typeof value === "object" && value !== null && typeof value.src === "string") {
    return value;
  }
  return typeof value === "string" ? {
    src: value
  } : void 0;
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
  "DESK img at left": "Yhe7sy2ar",
  "DESK img at right": "Jb2HwvZYJ",
  PHONE: "JihdGDX35"
};
var getProps = ({
  heading,
  height,
  id,
  image,
  spamTitle,
  spanTitleColor,
  text,
  width,
  ...props
}) => {
  return {
    ...props,
    BFkqabiDf: spamTitle ?? props.BFkqabiDf ?? "SPAM TITLE",
    eCE3MYUo4: spanTitleColor ?? props.eCE3MYUo4 ?? "var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(255, 59, 50))",
    variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "Jb2HwvZYJ",
    WAslLbjM6: heading ?? props.WAslLbjM6 ?? "Heading",
    WV7NnyME_: text ?? props.WV7NnyME_ ?? "Paragraph text",
    y7cIqeAOi: image ?? props.y7cIqeAOi ?? {
      pixelHeight: 8267,
      pixelWidth: 5905,
      src: "https://framerusercontent.com/images/rPyv8IKcDCDlKmm4qLqP2BY8c.jpg?scale-down-to=2048",
      srcSet: "https://framerusercontent.com/images/rPyv8IKcDCDlKmm4qLqP2BY8c.jpg?scale-down-to=1024 731w,https://framerusercontent.com/images/rPyv8IKcDCDlKmm4qLqP2BY8c.jpg?scale-down-to=2048 1462w,https://framerusercontent.com/images/rPyv8IKcDCDlKmm4qLqP2BY8c.jpg?scale-down-to=4096 2925w,https://framerusercontent.com/images/rPyv8IKcDCDlKmm4qLqP2BY8c.jpg 5905w"
    }
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
    className: className4,
    layoutId,
    variant,
    WAslLbjM6,
    WV7NnyME_,
    y7cIqeAOi,
    BFkqabiDf,
    eCE3MYUo4,
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
    defaultVariant: "Jb2HwvZYJ",
    ref: refBinding,
    variant,
    variantClassNames
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [className3, className2, className];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return <LayoutGroup id={layoutId ?? defaultLayoutId}>{<Variants animate={variants} initial={false}>{<Transition value={transition1}>{_jsxs(motion.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx(scopingClassNames, "framer-1e4om2y", className4, classNames),
          "data-framer-name": "DESK img at right",
          layoutDependency,
          layoutId: "Jb2HwvZYJ",
          ref: refBinding,
          style: {
            ...style
          },
          ...addPropertyOverrides({
            JihdGDX35: {
              "data-framer-name": "PHONE"
            },
            Yhe7sy2ar: {
              "data-framer-name": "DESK img at left"
            }
          }, baseVariant, gestureVariant),
          children: [_jsx(motion.div, {
            className: "framer-3tb54f",
            "data-framer-name": "TEXT CONTENT",
            layoutDependency,
            layoutId: "kIUd3h_x8",
            children: _jsxs(motion.div, {
              className: "framer-fsje4z",
              layoutDependency,
              layoutId: "SzFyB_oAg",
              children: [<RichText __fromCanvasComponent className="framer-18g7oym" data-framer-name="spam title" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="G_e000X2H" style={{
                "--extracted-1lwpl3i": "var(--variable-reference-eCE3MYUo4-EXzLZaNnS)",
                "--variable-reference-eCE3MYUo4-EXzLZaNnS": eCE3MYUo4
              }} text={BFkqabiDf} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.h5, {
                    className: "framer-styles-preset-1e98430",
                    "data-styles-preset": "z4Urx0kPV",
                    style: {
                      "--framer-text-alignment": "left",
                      "--framer-text-color": "var(--extracted-1lwpl3i, var(--variable-reference-eCE3MYUo4-EXzLZaNnS))"
                    },
                    children: "SPAM TITLE"
                  })}</>}</RichText>, <RichText __fromCanvasComponent className="framer-1lvyzha" data-framer-name="heading" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="wYKcdDR1C" style={{
                "--extracted-1of0zx5": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
              }} text={WAslLbjM6} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.h2, {
                    className: "framer-styles-preset-rp61ro",
                    "data-styles-preset": "fOTtXmCE4",
                    style: {
                      "--framer-text-color": "var(--extracted-1of0zx5, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                    },
                    children: "Heading"
                  })}</>}</RichText>, <RichText __fromCanvasComponent className="framer-1ruzeb9" data-framer-name="text" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="tfsZNJr9c" style={{
                "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
              }} text={WV7NnyME_} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.p, {
                    className: "framer-styles-preset-k8yxrn",
                    "data-styles-preset": "ferGDeq75",
                    style: {
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                    },
                    children: "Paragraph text"
                  })}</>}</RichText>]
            })
          }), <ImageWithFX __framer__adjustPosition={false} __framer__offset={0} __framer__parallaxTransformEnabled __framer__speed={90} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} background={{
            alt: "",
            fit: "fill",
            loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + (0 + ((componentViewport?.height || 171) - 0 - ((componentViewport?.height || 171) - 0) * 1) / 2)),
            sizes: `max(${componentViewport?.width || "100vw"} / 2 - 32px, 1px)`,
            ...toResponsiveImage(y7cIqeAOi),
            ...{
              positionX: "center",
              positionY: "center"
            }
          }} className="framer-u4w0m0" layoutDependency={layoutDependency} layoutId="EBSgwIVtd" {...addPropertyOverrides({
            JihdGDX35: {
              __framer__parallaxTransformEnabled: void 0,
              background: {
                alt: "",
                fit: "fill",
                loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 0 + 0),
                sizes: componentViewport?.width || "100vw",
                ...toResponsiveImage(y7cIqeAOi),
                ...{
                  positionX: "center",
                  positionY: "center"
                }
              }
            },
            Yhe7sy2ar: {
              __framer__speed: 105,
              background: {
                alt: "",
                fit: "fill",
                loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + (0 + ((componentViewport?.height || 360) - 0 - ((componentViewport?.height || 360) - 0) * 1) / 2)),
                sizes: `max(${componentViewport?.width || "100vw"} / 2 - 32px, 1px)`,
                ...toResponsiveImage(y7cIqeAOi),
                ...{
                  positionX: "center",
                  positionY: "center"
                }
              }
            }
          }, baseVariant, gestureVariant)} />]
        })}</Transition>}</Variants>}</LayoutGroup>;
});
var css4 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-QRKTr.framer-vmtun4, .framer-QRKTr .framer-vmtun4 { display: block; }", ".framer-QRKTr.framer-1e4om2y { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1280px; }", ".framer-QRKTr .framer-3tb54f { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-end; overflow: visible; padding: 32px; position: relative; width: 50%; }", ".framer-QRKTr .framer-fsje4z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-QRKTr .framer-18g7oym { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 2; }", ".framer-QRKTr .framer-1lvyzha, .framer-QRKTr .framer-1ruzeb9 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-QRKTr .framer-u4w0m0 { align-self: stretch; flex: 1 0 0px; height: auto; position: relative; width: 1px; }", ".framer-QRKTr.framer-v-s8zfuo.framer-1e4om2y { min-height: 360px; }", ".framer-QRKTr.framer-v-s8zfuo .framer-3tb54f { order: 1; }", ".framer-QRKTr.framer-v-s8zfuo .framer-u4w0m0 { order: 0; }", ".framer-QRKTr.framer-v-h957i3.framer-1e4om2y { flex-direction: column; width: 390px; }", ".framer-QRKTr.framer-v-h957i3 .framer-3tb54f { order: 1; padding: 0px; width: 100%; }", ".framer-QRKTr.framer-v-h957i3 .framer-u4w0m0 { align-self: unset; aspect-ratio: 1.625 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 240px); order: 0; width: 100%; }", ...css3, ...css2, ...css];
var FramerEXzLZaNnS = withCSS(Component, css4, "framer-QRKTr");
var EXzLZaNnS_default = FramerEXzLZaNnS;
FramerEXzLZaNnS.displayName = "image card no button";
FramerEXzLZaNnS.defaultProps = {
  height: 171,
  width: 1280
};
addPropertyControls(FramerEXzLZaNnS, {
  variant: {
    options: ["Jb2HwvZYJ", "Yhe7sy2ar", "JihdGDX35"],
    optionTitles: ["DESK img at right", "DESK img at left", "PHONE"],
    title: "Variant",
    type: ControlType.Enum
  },
  WAslLbjM6: {
    defaultValue: "Heading",
    displayTextArea: true,
    title: "Heading",
    type: ControlType.String
  },
  WV7NnyME_: {
    defaultValue: "Paragraph text",
    displayTextArea: true,
    title: "Text",
    type: ControlType.String
  },
  y7cIqeAOi: {
    __defaultAssetReference: "data:framer/asset-reference,rPyv8IKcDCDlKmm4qLqP2BY8c.jpg?originalFilename=photo-1729067915069-fb84564ca0ec%3Fcrop%3Dentropy%26cs%3Dsrgb%26fm%3Djpg%26ixid%3DM3wxMzc5NjJ8MHwxfGFsbHw5fHx8fHx8fHwxNzMwMzI1ODEwfA%26ixlib%3Drb-4.0.jpg&preferredSize=auto",
    title: "Image",
    type: ControlType.ResponsiveImage
  },
  BFkqabiDf: {
    defaultValue: "SPAM TITLE",
    displayTextArea: true,
    title: "Spam Title",
    type: ControlType.String
  },
  eCE3MYUo4: {
    defaultValue: "var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(255, 59, 50))",
    title: "Span title color",
    type: ControlType.Color
  }
});
addFonts(FramerEXzLZaNnS, [{
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
  }]
}, ...getFontsFromSharedStyle(fonts3), ...getFontsFromSharedStyle(fonts2), ...getFontsFromSharedStyle(fonts)], {
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
      "name": "FramerEXzLZaNnS",
      "slots": [],
      "annotations": {
        "framerVariables": '{"WAslLbjM6":"heading","WV7NnyME_":"text","y7cIqeAOi":"image","BFkqabiDf":"spamTitle","eCE3MYUo4":"spanTitleColor"}',
        "framerDisplayContentsDiv": "false",
        "framerAutoSizeImages": "true",
        "framerIntrinsicWidth": "1280",
        "framerIntrinsicHeight": "171",
        "framerComponentViewportWidth": "true",
        "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"Yhe7sy2ar":{"layout":["fixed","auto"],"constraints":[null,null,"360px",null]},"JihdGDX35":{"layout":["fixed","auto"]}}}',
        "framerImmutableVariables": "true",
        "framerContractVersion": "1",
        "framerColorSyntax": "true"
      }
    },
    "__FramerMetadata__": {
      "type": "variable"
    }
  }
};
var _OriginalComponent = EXzLZaNnS_default;
function ImagecardnobuttonWrapped(props) {
  var _variant = useVariant(props.variant);
  var _inner = (_variant !== undefined) ? { ...props, variant: _variant } : props;
  return _ctxJsx(ContextProviders, { children: _ctxJsx(_OriginalComponent, _inner) });
}
Object.assign(ImagecardnobuttonWrapped, _OriginalComponent);
export {  __FramerMetadata__,  ImagecardnobuttonWrapped as default   };