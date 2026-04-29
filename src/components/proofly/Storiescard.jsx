"use client"
// http-url:https://framerusercontent.com/modules/IUMaFXdT1k5nmJeUkdmK/CrkxCVxOSPQ0BRPWv7iG/wWNnxshjj.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, getFontsFromSharedStyle, getLoadingLazyAtYPosition, Image, RichText, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "@proofly-framer/runtime";
import { LayoutGroup, motion, MotionConfigContext } from "@proofly-framer/runtime";
import * as React from "react";

// http-url:https://framerusercontent.com/modules/4Gv6O9WcEjYFF3D7KrRp/D2m1QMhoIrhAelQp8PSY/mBypMumWB.js
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
var css = ['.framer-RGOBY .framer-styles-preset-r2slzk:not(.rich-text-wrapper), .framer-RGOBY .framer-styles-preset-r2slzk.rich-text-wrapper h4 { --framer-font-family: "Haffer Bold", "Haffer Bold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 30px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 100%; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }', '@media (max-width: 1279px) and (min-width: 768px) { .framer-RGOBY .framer-styles-preset-r2slzk:not(.rich-text-wrapper), .framer-RGOBY .framer-styles-preset-r2slzk.rich-text-wrapper h4 { --framer-font-family: "Haffer Bold", "Haffer Bold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 28px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 100%; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }', '@media (max-width: 767px) and (min-width: 0px) { .framer-RGOBY .framer-styles-preset-r2slzk:not(.rich-text-wrapper), .framer-RGOBY .framer-styles-preset-r2slzk.rich-text-wrapper h4 { --framer-font-family: "Haffer Bold", "Haffer Bold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 100%; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }'];
var className = "framer-RGOBY";

// http-url:https://framerusercontent.com/modules/5b0cRZbgNRw1dCNVnxhv/mDSpobAAY3IZwQ4LzCUn/z4Urx0kPV.js
import { fontStore as fontStore2 } from "@proofly-framer/runtime";
import { jsx as _ctxJsx } from "react/jsx-runtime";
import { ContextProviders, useVariant } from "@proofly-framer/runtime";
fontStore2.loadFonts(["CUSTOM;Haffer Regular", "CUSTOMV2;Haffer Bold", "CUSTOMV2;Haffer Bold Italic", "CUSTOMV2;Haffer Regular Italic"]);
var fonts2 = [{
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
var css2 = ['.framer-tLH4r .framer-styles-preset-1e98430:not(.rich-text-wrapper), .framer-tLH4r .framer-styles-preset-1e98430.rich-text-wrapper h5 { --framer-font-family: "Haffer Regular", sans-serif; --framer-font-family-bold: "Haffer Bold", sans-serif; --framer-font-family-bold-italic: "Haffer Bold Italic", sans-serif; --framer-font-family-italic: "Haffer Regular Italic", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 430; --framer-font-weight-bold: 790; --framer-font-weight-bold-italic: 790; --framer-font-weight-italic: 430; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }', '@media (max-width: 768px) and (min-width: 0px) { .framer-tLH4r .framer-styles-preset-1e98430:not(.rich-text-wrapper), .framer-tLH4r .framer-styles-preset-1e98430.rich-text-wrapper h5 { --framer-font-family: "Haffer Regular", sans-serif; --framer-font-family-bold: "Haffer Bold", sans-serif; --framer-font-family-bold-italic: "Haffer Bold Italic", sans-serif; --framer-font-family-italic: "Haffer Regular Italic", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 430; --framer-font-weight-bold: 790; --framer-font-weight-bold-italic: 790; --framer-font-weight-italic: 430; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }'];
var className2 = "framer-tLH4r";

// http-url:https://framerusercontent.com/modules/IUMaFXdT1k5nmJeUkdmK/CrkxCVxOSPQ0BRPWv7iG/wWNnxshjj.js
var cycleOrder = ["VIYrMMGAh", "K9SyFG2a_"];
var serializationHash = "framer-TYTOt";
var variantClassNames = {
  K9SyFG2a_: "framer-v-1k5ug26",
  VIYrMMGAh: "framer-v-awd6ls"
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
var Variants = motion(React.Fragment);
var humanReadableVariantMap = {
  "Variant 1": "VIYrMMGAh",
  "Variant 2": "K9SyFG2a_"
};
var getProps = ({
  background,
  height,
  id,
  image,
  width,
  ...props
}) => {
  return {
    ...props,
    SFuM7TRGi: background ?? props.SFuM7TRGi ?? "var(--token-7ce68db9-0723-4469-83ef-663a6e703840, rgb(43, 43, 61))",
    SKwgEjy34: image ?? props.SKwgEjy34 ?? {
      src: "https://framerusercontent.com/images/DGmlVI3LDA6qvAmtkw7iLmveH88.jpg",
      srcSet: "https://framerusercontent.com/images/DGmlVI3LDA6qvAmtkw7iLmveH88.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/DGmlVI3LDA6qvAmtkw7iLmveH88.jpg 800w"
    },
    variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "VIYrMMGAh"
  };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = React.forwardRef(function (props, ref) {
  const {
    activeLocale,
    setLocale
  } = useLocaleInfo();
  const {
    style,
    className: className3,
    layoutId,
    variant,
    SFuM7TRGi,
    SKwgEjy34,
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
    defaultVariant: "VIYrMMGAh",
    variant,
    variantClassNames
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const ref1 = React.useRef(null);
  const isDisplayed = () => {
    if (baseVariant === "K9SyFG2a_") return false;
    return true;
  };
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [className2, className];
  const componentViewport = useComponentViewport();
  return <LayoutGroup id={layoutId ?? defaultLayoutId}>{<Variants animate={variants} initial={false}>{<Transition value={transition1}>{_jsxs(motion.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx(serializationHash, ...sharedStyleClassNames, "framer-awd6ls", className3, classNames),
          "data-framer-name": "Variant 1",
          layoutDependency,
          layoutId: "VIYrMMGAh",
          ref: ref ?? ref1,
          style: {
            backgroundColor: "rgb(255, 255, 255)",
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            ...style
          },
          variants: {
            K9SyFG2a_: {
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0
            }
          },
          ...addPropertyOverrides({
            K9SyFG2a_: {
              "data-framer-name": "Variant 2"
            }
          }, baseVariant, gestureVariant),
          children: [<Image background={{
            alt: "",
            fit: "fill",
            loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 0 + (((componentViewport?.height || 612) - 0 - 506) / 2 + 0 + 0)),
            sizes: componentViewport?.width || "100vw",
            ...toResponsiveImage(SKwgEjy34),
            ...{
              positionX: "center",
              positionY: "center"
            }
          }} className="framer-dpdigk" layoutDependency={layoutDependency} layoutId="AFqiB2n0r" {...addPropertyOverrides({
            K9SyFG2a_: {
              background: {
                alt: "",
                fit: "fill",
                loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + ((componentViewport?.height || 300) * 0.5000000000000002 - 500)),
                sizes: componentViewport?.width || "100vw",
                ...toResponsiveImage(SKwgEjy34),
                ...{
                  positionX: "center",
                  positionY: "center"
                }
              }
            }
          }, baseVariant, gestureVariant)} />, _jsxs(motion.div, {
            className: "framer-extuvu",
            layoutDependency,
            layoutId: "z2MGTRJXH",
            style: {
              backgroundColor: SFuM7TRGi
            },
            children: [<Image background={{
              alt: "",
              fit: "fill",
              intrinsicHeight: 151,
              intrinsicWidth: 336,
              loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 0 + (((componentViewport?.height || 612) - 0 - 506) / 2 + 300 + 0) + 16 + 0),
              pixelHeight: 302,
              pixelWidth: 672,
              sizes: "80px",
              src: "https://framerusercontent.com/images/jh0VzgneXRMAPG61iX0MerwUGSY.png?scale-down-to=512",
              srcSet: "https://framerusercontent.com/images/jh0VzgneXRMAPG61iX0MerwUGSY.png?scale-down-to=512 512w,https://framerusercontent.com/images/jh0VzgneXRMAPG61iX0MerwUGSY.png 672w"
            }} className="framer-1cj5mwf" data-framer-name="Image" layoutDependency={layoutDependency} layoutId="mIGWjSvbD" {...addPropertyOverrides({
              K9SyFG2a_: {
                background: {
                  alt: "",
                  fit: "fill",
                  intrinsicHeight: 151,
                  intrinsicWidth: 336,
                  loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + -35 + 16 + 0),
                  pixelHeight: 302,
                  pixelWidth: 672,
                  sizes: "80px",
                  src: "https://framerusercontent.com/images/jh0VzgneXRMAPG61iX0MerwUGSY.png?scale-down-to=512",
                  srcSet: "https://framerusercontent.com/images/jh0VzgneXRMAPG61iX0MerwUGSY.png?scale-down-to=512 512w,https://framerusercontent.com/images/jh0VzgneXRMAPG61iX0MerwUGSY.png 672w"
                }
              }
            }, baseVariant, gestureVariant)} />, _jsxs(motion.div, {
              className: "framer-1alyxib",
              layoutDependency,
              layoutId: "W6xeRWwzt",
              children: [<RichText __fromCanvasComponent className="framer-18r776y" data-framer-name="We are building a platform for better security in workforce identity and access management. Join as an early design partner and make your mark on the future of identity." fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="q_qm2qvfe" style={{
                "--extracted-1lwpl3i": "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))"
              }} variants={{
                K9SyFG2a_: {
                  "--extracted-1eung3n": "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))"
                }
              }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
                K9SyFG2a_: {
                  children: <>{_jsx(motion.h4, {
                      className: "framer-styles-preset-r2slzk",
                      "data-styles-preset": "mBypMumWB",
                      style: {
                        "--framer-text-color": "var(--extracted-1eung3n, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))"
                      },
                      children: "Bloom's infrastructure presents Benno Bikes with assistance, logistics, and upcoming brand advancement services."
                    })}</>
                }
              }, baseVariant, gestureVariant)}>{<>{_jsx(motion.h5, {
                    className: "framer-styles-preset-1e98430",
                    "data-styles-preset": "z4Urx0kPV",
                    style: {
                      "--framer-text-alignment": "left",
                      "--framer-text-color": "var(--extracted-1lwpl3i, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))"
                    },
                    children: "Bloom's infrastructure presents Benno Bikes with assistance, logistics, and upcoming brand advancement services."
                  })}</>}</RichText>, <RichText __fromCanvasComponent className="framer-n7178s" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="gehAe9X2S" style={{
                "--extracted-r6o4lv": "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))",
                "--framer-link-text-color": "rgb(0, 153, 255)",
                "--framer-link-text-decoration": "underline",
                "--framer-paragraph-spacing": "16px"
              }} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-line-height": "110%",
                      "--framer-text-alignment": "left",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))",
                      "--framer-text-decoration": "underline"
                    },
                    children: _jsx(motion.strong, {
                      children: "Read Story ->"
                    })
                  })}</>}</RichText>]
            }), isDisplayed() && _jsx(motion.div, {
              className: "framer-5rf27e",
              layoutDependency,
              layoutId: "RGT9jMXdx"
            })]
          })]
        })}</Transition>}</Variants>}</LayoutGroup>;
});
var css3 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-TYTOt.framer-16z0qha, .framer-TYTOt .framer-16z0qha { display: block; }", ".framer-TYTOt.framer-awd6ls { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 660px; will-change: var(--framer-will-change-override, transform); }", ".framer-TYTOt .framer-dpdigk { flex: none; height: 300px; position: relative; width: 100%; }", ".framer-TYTOt .framer-extuvu { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 16px; position: relative; width: 100%; }", ".framer-TYTOt .framer-1cj5mwf { aspect-ratio: 2.225165562913907 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 36px); overflow: visible; position: relative; width: 80px; }", ".framer-TYTOt .framer-1alyxib { flex: none; height: 106px; overflow: visible; position: relative; width: 628px; }", ".framer-TYTOt .framer-18r776y { flex: none; height: auto; left: 0px; position: absolute; right: 0px; top: 0px; white-space: pre-wrap; word-break: break-word; word-wrap: break-word; }", ".framer-TYTOt .framer-n7178s { bottom: 1px; flex: none; height: auto; left: 0px; position: absolute; white-space: pre; width: auto; }", ".framer-TYTOt .framer-5rf27e { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 106px; overflow: visible; padding: 0px; position: relative; width: 100%; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-TYTOt.framer-awd6ls, .framer-TYTOt .framer-extuvu, .framer-TYTOt .framer-5rf27e { gap: 0px; } .framer-TYTOt.framer-awd6ls > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-TYTOt.framer-awd6ls > :first-child, .framer-TYTOt .framer-extuvu > :first-child { margin-top: 0px; } .framer-TYTOt.framer-awd6ls > :last-child, .framer-TYTOt .framer-extuvu > :last-child { margin-bottom: 0px; } .framer-TYTOt .framer-extuvu > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-TYTOt .framer-5rf27e > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-TYTOt .framer-5rf27e > :first-child { margin-left: 0px; } .framer-TYTOt .framer-5rf27e > :last-child { margin-right: 0px; } }", ".framer-TYTOt.framer-v-1k5ug26.framer-awd6ls { flex-direction: row; min-height: 300px; width: 897px; }", ".framer-TYTOt.framer-v-1k5ug26 .framer-dpdigk { height: calc(var(--framer-viewport-height, 100vh) * 1); left: 0px; order: 0; position: absolute; top: calc(50.00000000000002% - 100vh / 2); z-index: 0; }", ".framer-TYTOt.framer-v-1k5ug26 .framer-extuvu { gap: unset; height: 300px; justify-content: space-between; min-height: 300px; order: 1; position: absolute; right: 48px; top: -35px; width: 50%; z-index: 1; }", ".framer-TYTOt.framer-v-1k5ug26 .framer-1alyxib { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; padding: 0px; width: 100%; }", ".framer-TYTOt.framer-v-1k5ug26 .framer-18r776y { left: unset; position: relative; right: unset; top: unset; width: 100%; }", ".framer-TYTOt.framer-v-1k5ug26 .framer-n7178s { bottom: unset; left: unset; position: relative; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-TYTOt.framer-v-1k5ug26.framer-awd6ls, .framer-TYTOt.framer-v-1k5ug26 .framer-extuvu, .framer-TYTOt.framer-v-1k5ug26 .framer-1alyxib { gap: 0px; } .framer-TYTOt.framer-v-1k5ug26.framer-awd6ls > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-TYTOt.framer-v-1k5ug26.framer-awd6ls > :first-child { margin-left: 0px; } .framer-TYTOt.framer-v-1k5ug26.framer-awd6ls > :last-child { margin-right: 0px; } .framer-TYTOt.framer-v-1k5ug26 .framer-extuvu > *, .framer-TYTOt.framer-v-1k5ug26 .framer-extuvu > :first-child, .framer-TYTOt.framer-v-1k5ug26 .framer-extuvu > :last-child { margin: 0px; } .framer-TYTOt.framer-v-1k5ug26 .framer-1alyxib > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-TYTOt.framer-v-1k5ug26 .framer-1alyxib > :first-child { margin-top: 0px; } .framer-TYTOt.framer-v-1k5ug26 .framer-1alyxib > :last-child { margin-bottom: 0px; } }", ...css2, ...css];
var FramerwWNnxshjj = withCSS(Component, css3, "framer-TYTOt");
var wWNnxshjj_default = FramerwWNnxshjj;
FramerwWNnxshjj.displayName = "stories card";
FramerwWNnxshjj.defaultProps = {
  height: 612,
  width: 660
};
addPropertyControls(FramerwWNnxshjj, {
  variant: {
    options: ["VIYrMMGAh", "K9SyFG2a_"],
    optionTitles: ["Variant 1", "Variant 2"],
    title: "Variant",
    type: ControlType.Enum
  },
  SFuM7TRGi: {
    defaultValue: 'var(--token-7ce68db9-0723-4469-83ef-663a6e703840, rgb(43, 43, 61))',
    title: "Background",
    type: ControlType.Color
  },
  SKwgEjy34: {
    __defaultAssetReference: "data:framer/asset-reference,DGmlVI3LDA6qvAmtkw7iLmveH88.jpg?originalFilename=49807199737_c53cc7a215_c.jpg&preferredSize=auto",
    title: "Image",
    type: ControlType.ResponsiveImage
  }
});
addFonts(FramerwWNnxshjj, [{
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
}, ...getFontsFromSharedStyle(fonts2), ...getFontsFromSharedStyle(fonts)], {
  supportsExplicitInterCodegen: true
});
var __FramerMetadata__ = {
  "exports": {
    "default": {
      "type": "reactComponent",
      "name": "FramerwWNnxshjj",
      "slots": [],
      "annotations": {
        "framerImmutableVariables": "true",
        "framerIntrinsicWidth": "660",
        "framerContractVersion": "1",
        "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"K9SyFG2a_":{"layout":["fixed","auto"]}}}',
        "framerIntrinsicHeight": "612",
        "framerVariables": '{"SFuM7TRGi":"background","SKwgEjy34":"image"}',
        "framerDisplayContentsDiv": "false",
        "framerComponentViewportWidth": "true"
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
var _OriginalComponent = wWNnxshjj_default;
function StoriescardWrapped(props) {
  var _variant = useVariant(props.variant);
  var _inner = (_variant !== undefined) ? { ...props, variant: _variant } : props;
  return _ctxJsx(ContextProviders, { children: _ctxJsx(_OriginalComponent, _inner) });
}
Object.assign(StoriescardWrapped, _OriginalComponent);
export {  __FramerMetadata__,  StoriescardWrapped as default   };