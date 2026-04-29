"use client"
// http-url:https://framerusercontent.com/modules/7CNUd4F0kjv8n4jHzdMa/1pPMSTNx0UwE5ixBEKD7/W_eemmykD.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, getFontsFromSharedStyle, getLoadingLazyAtYPosition, Image, Link, RichText, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "@proofly-framer/runtime";
import { LayoutGroup, motion, MotionConfigContext } from "@proofly-framer/runtime";
import * as React from "react";
import { useRef } from "react";

// http-url:https://framerusercontent.com/modules/4Gv6O9WcEjYFF3D7KrRp/D2m1QMhoIrhAelQp8PSY/mBypMumWB.js
import { fontStore } from "@proofly-framer/runtime";
import { jsx as _ctxJsx } from "react/jsx-runtime";
import { ContextProviders, useVariant } from "@proofly-framer/runtime";
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

// http-url:https://framerusercontent.com/modules/7CNUd4F0kjv8n4jHzdMa/1pPMSTNx0UwE5ixBEKD7/W_eemmykD.js
var cycleOrder = ["Yuhc3Pc9b", "J3JR4cE69", "VcGftXc_o", "pmA62WFKH", "v8T2oFNb_", "WyG4fuovb"];
var serializationHash = "framer-0zx3S";
var variantClassNames = {
  J3JR4cE69: "framer-v-1t7137a",
  pmA62WFKH: "framer-v-1sce556",
  v8T2oFNb_: "framer-v-cphdpv",
  VcGftXc_o: "framer-v-1v8o892",
  WyG4fuovb: "framer-v-1yvgcm6",
  Yuhc3Pc9b: "framer-v-8ihv7d"
};
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach(variant => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var toResponsiveImage = value => {
  if (typeof value === "object" && value !== null && typeof value.src === "string") {
    return value;
  }
  return typeof value === "string" ? {
    src: value
  } : void 0;
};
var transition1 = {
  bounce: 0.2,
  delay: 0,
  duration: 0.4,
  type: "spring"
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
  "LIL - left": "v8T2oFNb_",
  "LIL - right": "VcGftXc_o",
  "phone - bottom": "pmA62WFKH",
  "phone - top": "WyG4fuovb",
  left: "J3JR4cE69",
  right: "Yuhc3Pc9b"
};
var getProps = ({
  background,
  background1,
  height,
  id,
  link,
  logo,
  text,
  textColor,
  width,
  ...props
}) => {
  return {
    ...props,
    bURQZwrLE: textColor ?? props.bURQZwrLE ?? "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))",
    C4cqly4vX: link ?? props.C4cqly4vX,
    DYmJe19Vr: background1 ?? props.DYmJe19Vr ?? {
      pixelHeight: 533,
      pixelWidth: 800,
      src: "https://framerusercontent.com/images/DGmlVI3LDA6qvAmtkw7iLmveH88.jpg",
      srcSet: "https://framerusercontent.com/images/DGmlVI3LDA6qvAmtkw7iLmveH88.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/DGmlVI3LDA6qvAmtkw7iLmveH88.jpg 800w"
    },
    hdtcxxiNv: background ?? props.hdtcxxiNv ?? "var(--token-7ce68db9-0723-4469-83ef-663a6e703840, rgb(43, 43, 61))",
    iEMIaO3Y5: text ?? props.iEMIaO3Y5 ?? "Bloom's offers Benno Bikes US-based logistics, product development, and market expansion.",
    variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "Yuhc3Pc9b",
    Yik3rynrU: logo ?? props.Yik3rynrU ?? {
      pixelHeight: 302,
      pixelWidth: 672,
      src: "https://framerusercontent.com/images/jh0VzgneXRMAPG61iX0MerwUGSY.png",
      srcSet: "https://framerusercontent.com/images/jh0VzgneXRMAPG61iX0MerwUGSY.png?scale-down-to=512 512w,https://framerusercontent.com/images/jh0VzgneXRMAPG61iX0MerwUGSY.png 672w"
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
    className: className2,
    layoutId,
    variant,
    hdtcxxiNv,
    iEMIaO3Y5,
    bURQZwrLE,
    DYmJe19Vr,
    Yik3rynrU,
    C4cqly4vX,
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
    defaultVariant: "Yuhc3Pc9b",
    ref: refBinding,
    variant,
    variantClassNames
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [className];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return <LayoutGroup id={layoutId ?? defaultLayoutId}>{<Variants animate={variants} initial={false}>{<Transition value={transition1}>{<Image {...restProps} {...gestureHandlers} background={{
          alt: "",
          fit: "fill",
          loading: getLoadingLazyAtYPosition(componentViewport?.y || 0),
          pixelHeight: 533,
          pixelWidth: 800,
          sizes: componentViewport?.width || "100vw",
          ...toResponsiveImage(DYmJe19Vr)
        }} className={cx(scopingClassNames, "framer-8ihv7d", className2, classNames)} data-framer-name="right" layoutDependency={layoutDependency} layoutId="Yuhc3Pc9b" ref={refBinding} style={{
          ...style
        }} {...addPropertyOverrides({
          J3JR4cE69: {
            "data-framer-name": "left"
          },
          pmA62WFKH: {
            "data-framer-name": "phone - bottom"
          },
          v8T2oFNb_: {
            "data-framer-name": "LIL - left"
          },
          VcGftXc_o: {
            "data-framer-name": "LIL - right"
          },
          WyG4fuovb: {
            "data-framer-name": "phone - top"
          }
        }, baseVariant, gestureVariant)}>{_jsx(motion.div, {
            className: "framer-1fbbsh4",
            layoutDependency,
            layoutId: "sJshm00ny",
            children: <Link href={C4cqly4vX} motionChild nodeId="n2bPqgIZf" scopeId="W_eemmykD" {...addPropertyOverrides({
              J3JR4cE69: {
                smoothScroll: true
              }
            }, baseVariant, gestureVariant)}>{_jsxs(motion.a, {
                className: "framer-1cnw97o framer-12vojpd",
                layoutDependency,
                layoutId: "n2bPqgIZf",
                style: {
                  backgroundColor: hdtcxxiNv
                },
                children: [<Image background={{
                  alt: "",
                  fit: "fit",
                  intrinsicHeight: 151,
                  intrinsicWidth: 336,
                  loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 64 + ((componentViewport?.height || 600) - 128 - 300) + 0 + 16 + 0),
                  pixelHeight: 302,
                  pixelWidth: 672,
                  sizes: "153px",
                  ...toResponsiveImage(Yik3rynrU),
                  ...{
                    positionX: "left",
                    positionY: "center"
                  }
                }} className="framer-dudzei" data-framer-name="Image" layoutDependency={layoutDependency} layoutId="mL9Y_x6x0" {...addPropertyOverrides({
                  pmA62WFKH: {
                    background: {
                      alt: "",
                      fit: "fit",
                      intrinsicHeight: 151,
                      intrinsicWidth: 336,
                      loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 24 + ((componentViewport?.height || 600) - 48 - 239.6) + 0 + 16 + 0),
                      pixelHeight: 302,
                      pixelWidth: 672,
                      sizes: "153px",
                      ...toResponsiveImage(Yik3rynrU),
                      ...{
                        positionX: "left",
                        positionY: "center"
                      }
                    }
                  },
                  v8T2oFNb_: {
                    background: {
                      alt: "",
                      fit: "fit",
                      intrinsicHeight: 151,
                      intrinsicWidth: 336,
                      loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 32 + ((componentViewport?.height || 600) - 64 - 244.6) + 0 + 16 + 0),
                      pixelHeight: 302,
                      pixelWidth: 672,
                      sizes: "110px",
                      ...toResponsiveImage(Yik3rynrU),
                      ...{
                        positionX: "left",
                        positionY: "center"
                      }
                    }
                  },
                  VcGftXc_o: {
                    background: {
                      alt: "",
                      fit: "fit",
                      intrinsicHeight: 151,
                      intrinsicWidth: 336,
                      loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 32 + ((componentViewport?.height || 600) - 64 - 244.6) + 0 + 16 + 0),
                      pixelHeight: 302,
                      pixelWidth: 672,
                      sizes: "110px",
                      ...toResponsiveImage(Yik3rynrU),
                      ...{
                        positionX: "left",
                        positionY: "center"
                      }
                    }
                  },
                  WyG4fuovb: {
                    background: {
                      alt: "",
                      fit: "fit",
                      intrinsicHeight: 151,
                      intrinsicWidth: 336,
                      loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 24 + 0 + 16 + 0),
                      pixelHeight: 302,
                      pixelWidth: 672,
                      sizes: "153px",
                      ...toResponsiveImage(Yik3rynrU),
                      ...{
                        positionX: "left",
                        positionY: "center"
                      }
                    }
                  }
                }, baseVariant, gestureVariant)} />, _jsxs(motion.div, {
                  className: "framer-1054cid",
                  layoutDependency,
                  layoutId: "iRevUyyAw",
                  children: [<RichText __fromCanvasComponent className="framer-1bx10wq" data-framer-name="We are building a platform for better security in workforce identity and access management. Join as an early design partner and make your mark on the future of identity." fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="MFqKd79aL" style={{
                    "--extracted-1eung3n": "var(--variable-reference-bURQZwrLE-W_eemmykD)",
                    "--variable-reference-bURQZwrLE-W_eemmykD": bURQZwrLE
                  }} text={iEMIaO3Y5} variants={{
                    pmA62WFKH: {
                      "--extracted-r6o4lv": "var(--variable-reference-bURQZwrLE-W_eemmykD)"
                    },
                    v8T2oFNb_: {
                      "--extracted-r6o4lv": "var(--variable-reference-bURQZwrLE-W_eemmykD)"
                    },
                    VcGftXc_o: {
                      "--extracted-r6o4lv": "var(--variable-reference-bURQZwrLE-W_eemmykD)"
                    },
                    WyG4fuovb: {
                      "--extracted-r6o4lv": "var(--variable-reference-bURQZwrLE-W_eemmykD)"
                    }
                  }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
                    pmA62WFKH: {
                      children: <>{_jsx(motion.p, {
                          style: {
                            "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                            "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                            "--framer-line-height": "130%",
                            "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-bURQZwrLE-W_eemmykD))"
                          },
                          children: "Bloom's offers Benno Bikes US-based logistics, product development, and market expansion."
                        })}</>,
                      fonts: ["CUSTOM;Haffer Bold"]
                    },
                    v8T2oFNb_: {
                      children: <>{_jsx(motion.p, {
                          style: {
                            "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                            "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                            "--framer-font-size": "20px",
                            "--framer-line-height": "130%",
                            "--framer-text-alignment": "left",
                            "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-bURQZwrLE-W_eemmykD))"
                          },
                          children: "Bloom's offers Benno Bikes US-based logistics, product development, and market expansion."
                        })}</>,
                      fonts: ["CUSTOM;Haffer Bold"]
                    },
                    VcGftXc_o: {
                      children: <>{_jsx(motion.p, {
                          style: {
                            "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                            "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                            "--framer-font-size": "20px",
                            "--framer-line-height": "130%",
                            "--framer-text-alignment": "left",
                            "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-bURQZwrLE-W_eemmykD))"
                          },
                          children: "Bloom's offers Benno Bikes US-based logistics, product development, and market expansion."
                        })}</>,
                      fonts: ["CUSTOM;Haffer Bold"]
                    },
                    WyG4fuovb: {
                      children: <>{_jsx(motion.p, {
                          style: {
                            "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                            "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                            "--framer-line-height": "130%",
                            "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-bURQZwrLE-W_eemmykD))"
                          },
                          children: "Bloom's offers Benno Bikes US-based logistics, product development, and market expansion."
                        })}</>,
                      fonts: ["CUSTOM;Haffer Bold"]
                    }
                  }, baseVariant, gestureVariant)}>{<>{_jsx(motion.h4, {
                        className: "framer-styles-preset-r2slzk",
                        "data-styles-preset": "mBypMumWB",
                        style: {
                          "--framer-text-color": "var(--extracted-1eung3n, var(--variable-reference-bURQZwrLE-W_eemmykD))"
                        },
                        children: "Bloom's infrastructure presents Benno Bikes with assistance, logistics, and upcoming brand advancement services."
                      })}</>}</RichText>, <RichText __fromCanvasComponent className="framer-gefvmp" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="uwN04KNTP" style={{
                    "--extracted-r6o4lv": "var(--variable-reference-bURQZwrLE-W_eemmykD)",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                    "--framer-paragraph-spacing": "16px",
                    "--variable-reference-bURQZwrLE-W_eemmykD": bURQZwrLE
                  }} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.p, {
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                          "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                          "--framer-line-height": "110%",
                          "--framer-text-alignment": "left",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-bURQZwrLE-W_eemmykD))",
                          "--framer-text-decoration": "underline"
                        },
                        children: _jsx(motion.strong, {
                          children: "Read Story ->"
                        })
                      })}</>}</RichText>]
                })]
              })}</Link>
          })}</Image>}</Transition>}</Variants>}</LayoutGroup>;
});
var css2 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-0zx3S.framer-12vojpd, .framer-0zx3S .framer-12vojpd { display: block; }", ".framer-0zx3S.framer-8ihv7d { align-content: flex-end; align-items: flex-end; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 600px; justify-content: center; overflow: hidden; padding: 64px; position: relative; width: 1512px; }", ".framer-0zx3S .framer-1fbbsh4 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; max-width: 1280px; overflow: visible; padding: 0px; position: relative; width: 1px; }", ".framer-0zx3S .framer-1cnw97o { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 300px; justify-content: space-between; min-height: 300px; overflow: hidden; padding: 16px; position: relative; text-decoration: none; width: 449px; z-index: 1; }", ".framer-0zx3S .framer-dudzei { flex: none; height: 46px; overflow: visible; position: relative; width: 153px; }", ".framer-0zx3S .framer-1054cid { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-0zx3S .framer-1bx10wq { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-0zx3S .framer-gefvmp { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-0zx3S.framer-v-1t7137a .framer-1fbbsh4, .framer-0zx3S.framer-v-cphdpv .framer-1fbbsh4 { justify-content: flex-start; }", ".framer-0zx3S.framer-v-1v8o892.framer-8ihv7d, .framer-0zx3S.framer-v-cphdpv.framer-8ihv7d { padding: 32px; }", ".framer-0zx3S.framer-v-1v8o892 .framer-1cnw97o, .framer-0zx3S.framer-v-cphdpv .framer-1cnw97o { gap: 16px; height: min-content; justify-content: center; min-height: unset; width: 35%; }", ".framer-0zx3S.framer-v-1v8o892 .framer-dudzei, .framer-0zx3S.framer-v-cphdpv .framer-dudzei { height: 33px; width: 110px; }", ".framer-0zx3S.framer-v-1v8o892 .framer-1054cid, .framer-0zx3S.framer-v-cphdpv .framer-1054cid { gap: 16px; }", ".framer-0zx3S.framer-v-1sce556.framer-8ihv7d { overflow: visible; padding: 24px; width: 390px; }", ".framer-0zx3S.framer-v-1sce556 .framer-1cnw97o { flex: 1 0 0px; gap: 16px; height: min-content; justify-content: center; min-height: unset; order: 0; width: 1px; }", ".framer-0zx3S.framer-v-1sce556 .framer-1054cid, .framer-0zx3S.framer-v-1yvgcm6 .framer-1054cid { gap: 24px; }", ".framer-0zx3S.framer-v-1yvgcm6.framer-8ihv7d { align-content: flex-start; align-items: flex-start; overflow: visible; padding: 24px; width: 390px; }", ".framer-0zx3S.framer-v-1yvgcm6 .framer-1cnw97o { flex: 1 0 0px; gap: 16px; height: min-content; justify-content: center; min-height: unset; width: 1px; }", ...css];
var FramerW_eemmykD = withCSS(Component, css2, "framer-0zx3S");
var W_eemmykD_default = FramerW_eemmykD;
FramerW_eemmykD.displayName = "stories card";
FramerW_eemmykD.defaultProps = {
  height: 600,
  width: 1512
};
addPropertyControls(FramerW_eemmykD, {
  variant: {
    options: ["Yuhc3Pc9b", "J3JR4cE69", "VcGftXc_o", "pmA62WFKH", "v8T2oFNb_", "WyG4fuovb"],
    optionTitles: ["right", "left", "LIL - right", "phone - bottom", "LIL - left", "phone - top"],
    title: "Variant",
    type: ControlType.Enum
  },
  hdtcxxiNv: {
    defaultValue: 'var(--token-7ce68db9-0723-4469-83ef-663a6e703840, rgb(43, 43, 61))',
    title: "Background",
    type: ControlType.Color
  },
  iEMIaO3Y5: {
    defaultValue: "Bloom's offers Benno Bikes US-based logistics, product development, and market expansion.",
    displayTextArea: true,
    title: "Text",
    type: ControlType.String
  },
  bURQZwrLE: {
    defaultValue: 'var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))',
    title: "text color",
    type: ControlType.Color
  },
  DYmJe19Vr: {
    __defaultAssetReference: "data:framer/asset-reference,DGmlVI3LDA6qvAmtkw7iLmveH88.jpg?originalFilename=49807199737_c53cc7a215_c.jpg&preferredSize=auto",
    title: "background",
    type: ControlType.ResponsiveImage
  },
  Yik3rynrU: {
    __defaultAssetReference: "data:framer/asset-reference,jh0VzgneXRMAPG61iX0MerwUGSY.png?originalFilename=image.png&preferredSize=auto",
    title: "logo",
    type: ControlType.ResponsiveImage
  },
  C4cqly4vX: {
    title: "Link",
    type: ControlType.Link
  }
});
addFonts(FramerW_eemmykD, [{
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
    family: "Haffer Bold",
    source: "custom",
    url: "https://framerusercontent.com/assets/eRqmC6W9PktN8mUcnwel9B6wmPs.woff"
  }, {
    family: "Haffer Regular",
    source: "custom",
    url: "https://framerusercontent.com/assets/tAGQcvN09kwW2QjPLqLO197UqBQ.woff"
  }]
}, ...getFontsFromSharedStyle(fonts)], {
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
      "name": "FramerW_eemmykD",
      "slots": [],
      "annotations": {
        "framerIntrinsicHeight": "600",
        "framerComponentViewportWidth": "true",
        "framerColorSyntax": "true",
        "framerVariables": '{"hdtcxxiNv":"background","iEMIaO3Y5":"text","bURQZwrLE":"textColor","DYmJe19Vr":"background1","Yik3rynrU":"logo","C4cqly4vX":"link"}',
        "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"J3JR4cE69":{"layout":["fixed","fixed"]},"VcGftXc_o":{"layout":["fixed","fixed"]},"pmA62WFKH":{"layout":["fixed","fixed"]},"v8T2oFNb_":{"layout":["fixed","fixed"]},"WyG4fuovb":{"layout":["fixed","fixed"]}}}',
        "framerImmutableVariables": "true",
        "framerContractVersion": "1",
        "framerAutoSizeImages": "true",
        "framerIntrinsicWidth": "1512",
        "framerDisplayContentsDiv": "false"
      }
    },
    "__FramerMetadata__": {
      "type": "variable"
    }
  }
};
var _OriginalComponent = W_eemmykD_default;
function Storiescard_2Wrapped(props) {
  var _variant = useVariant(props.variant);
  var _inner = (_variant !== undefined) ? { ...props, variant: _variant } : props;
  return _ctxJsx(ContextProviders, { children: _ctxJsx(_OriginalComponent, _inner) });
}
Object.assign(Storiescard_2Wrapped, _OriginalComponent);
export {  __FramerMetadata__,  Storiescard_2Wrapped as default   };