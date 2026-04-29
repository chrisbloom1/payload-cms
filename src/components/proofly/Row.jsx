"use client"
// http-url:https://framerusercontent.com/modules/vQsFqUdpMAzYiHhJw2u9/FuCdiYrPVMjLtUb364LR/CnJrH4aCB.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, getFontsFromSharedStyle, RichText, useActiveVariantCallback, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "@proofly-framer/runtime";
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

// http-url:https://framerusercontent.com/modules/vQsFqUdpMAzYiHhJw2u9/FuCdiYrPVMjLtUb364LR/CnJrH4aCB.js
var cycleOrder = ["IFA3VX2P0", "G7soleXni", "XucMDh0Kl", "mYA2ra5XK"];
var serializationHash = "framer-8eYm7";
var variantClassNames = {
  G7soleXni: "framer-v-9ojn2b",
  IFA3VX2P0: "framer-v-1ee19rx",
  mYA2ra5XK: "framer-v-s3lh2c",
  XucMDh0Kl: "framer-v-149djwu"
};
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach(variant => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = {
  damping: 40,
  delay: 0,
  mass: 1,
  stiffness: 400,
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
  "last-closed": "XucMDh0Kl",
  "last-open": "mYA2ra5XK",
  Closed: "IFA3VX2P0",
  Open: "G7soleXni"
};
var getProps = ({
  answer,
  backgroundColor,
  click,
  height,
  id,
  question,
  textColor,
  width,
  ...props
}) => {
  return {
    ...props,
    hY3oIpwxB: backgroundColor ?? props.hY3oIpwxB ?? "var(--token-7ce68db9-0723-4469-83ef-663a6e703840, rgb(43, 43, 61))",
    qkkFBERoT: textColor ?? props.qkkFBERoT ?? "var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248))",
    qsrM5838n: click ?? props.qsrM5838n,
    T8rQFvSBR: answer ?? props.T8rQFvSBR ?? "Framer is a web builder for creative pros. Be sure to check out framer.com to learn more.",
    variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "IFA3VX2P0",
    W88zB8mIG: question ?? props.W88zB8mIG ?? "Framer is a web builder for creative pros. Be sure to check out framer.com to learn more."
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
    className: className3,
    layoutId,
    variant,
    W88zB8mIG,
    T8rQFvSBR,
    qsrM5838n,
    hY3oIpwxB,
    qkkFBERoT,
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
    defaultVariant: "IFA3VX2P0",
    ref: refBinding,
    variant,
    variantClassNames
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const {
    activeVariantCallback,
    delay
  } = useActiveVariantCallback(baseVariant);
  const onTap17v5lic = activeVariantCallback(async (...args) => {
    setGestureState({
      isPressed: false
    });
    if (qsrM5838n) {
      const res = await qsrM5838n(...args);
      if (res === false) return false;
    }
  });
  const onTap11qys6k = activeVariantCallback(async (...args) => {
    setVariant("G7soleXni");
  });
  const onTapsragfr = activeVariantCallback(async (...args) => {
    setVariant("IFA3VX2P0");
  });
  const onTap1pyacua = activeVariantCallback(async (...args) => {
    setVariant("XucMDh0Kl");
  });
  const sharedStyleClassNames = [className2, className];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  const isDisplayed = () => {
    if (["G7soleXni", "mYA2ra5XK"].includes(baseVariant)) return true;
    return false;
  };
  return <LayoutGroup id={layoutId ?? defaultLayoutId}>{<Variants animate={variants} initial={false}>{<Transition value={transition1}>{_jsxs(motion.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx(scopingClassNames, "framer-1ee19rx", className3, classNames),
          "data-framer-name": "Closed",
          "data-highlight": true,
          layoutDependency,
          layoutId: "IFA3VX2P0",
          onTap: onTap17v5lic,
          ref: refBinding,
          style: {
            backgroundColor: hY3oIpwxB,
            ...style
          },
          ...addPropertyOverrides({
            G7soleXni: {
              "data-framer-name": "Open"
            },
            mYA2ra5XK: {
              "data-framer-name": "last-open"
            },
            XucMDh0Kl: {
              "data-framer-name": "last-closed"
            }
          }, baseVariant, gestureVariant),
          children: [_jsxs(motion.div, {
            className: "framer-1dl1a3z",
            "data-framer-name": "Question",
            "data-highlight": true,
            layoutDependency,
            layoutId: "vtWKkBVCx",
            onTap: onTap11qys6k,
            ...addPropertyOverrides({
              G7soleXni: {
                onTap: onTapsragfr
              },
              mYA2ra5XK: {
                onTap: onTap1pyacua
              }
            }, baseVariant, gestureVariant),
            children: [_jsxs(motion.div, {
              className: "framer-hcic6a",
              "data-framer-name": "Plus",
              layoutDependency,
              layoutId: "BQ2tSTW0t",
              style: {
                rotate: 0
              },
              variants: {
                G7soleXni: {
                  rotate: 45
                },
                mYA2ra5XK: {
                  rotate: 45
                },
                XucMDh0Kl: {
                  rotate: 0
                }
              },
              children: [_jsx(motion.div, {
                className: "framer-1tbtoi5",
                layoutDependency,
                layoutId: "QrGyJb03d",
                style: {
                  backgroundColor: qkkFBERoT,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10
                }
              }), _jsx(motion.div, {
                className: "framer-16xx3z0",
                layoutDependency,
                layoutId: "LF0NPlXYd",
                style: {
                  backgroundColor: qkkFBERoT,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10
                }
              })]
            }), <RichText __fromCanvasComponent className="framer-18gamxd" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="ON4zFC0ob" style={{
              "--extracted-1lwpl3i": "var(--variable-reference-qkkFBERoT-CnJrH4aCB)",
              "--framer-link-text-color": "rgb(0, 153, 255)",
              "--framer-link-text-decoration": "underline",
              "--framer-paragraph-spacing": "0px",
              "--variable-reference-qkkFBERoT-CnJrH4aCB": qkkFBERoT
            }} text={W88zB8mIG} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.h5, {
                  className: "framer-styles-preset-1e98430",
                  "data-styles-preset": "z4Urx0kPV",
                  style: {
                    "--framer-text-alignment": "left",
                    "--framer-text-color": "var(--extracted-1lwpl3i, var(--variable-reference-qkkFBERoT-CnJrH4aCB))"
                  },
                  children: "Framer is a web builder for creative pros. Be sure to check out framer.com to learn more."
                })}</>}</RichText>]
          }), isDisplayed() && _jsx(motion.div, {
            className: "framer-fizcoe",
            "data-framer-name": "Answer",
            layoutDependency,
            layoutId: "qqkNUHE6N",
            style: {
              opacity: 0
            },
            variants: {
              G7soleXni: {
                opacity: 1
              },
              mYA2ra5XK: {
                opacity: 1
              }
            },
            children: <RichText __fromCanvasComponent className="framer-1lv6zzi" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="cmmWH2c9g" style={{
              "--framer-paragraph-spacing": "0px",
              "--variable-reference-qkkFBERoT-CnJrH4aCB": qkkFBERoT,
              opacity: 0.6
            }} text={T8rQFvSBR} variants={{
              G7soleXni: {
                "--extracted-r6o4lv": "var(--variable-reference-qkkFBERoT-CnJrH4aCB)",
                "--variable-reference-qkkFBERoT-CnJrH4aCB": qkkFBERoT,
                opacity: 1
              },
              mYA2ra5XK: {
                opacity: 1
              }
            }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
              G7soleXni: {
                children: <>{_jsx(motion.p, {
                    className: "framer-styles-preset-k8yxrn",
                    "data-styles-preset": "ferGDeq75",
                    style: {
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-qkkFBERoT-CnJrH4aCB))"
                    },
                    children: "Framer is a web builder for creative pros. Be sure to check out framer.com to learn more."
                  })}</>
              }
            }, baseVariant, gestureVariant)}>{<>{_jsx(motion.p, {
                  className: "framer-styles-preset-k8yxrn",
                  "data-styles-preset": "ferGDeq75",
                  children: "Framer is a web builder for creative pros. Be sure to check out framer.com to learn more."
                })}</>}</RichText>
          })]
        })}</Transition>}</Variants>}</LayoutGroup>;
});
var css3 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-8eYm7.framer-9od6rb, .framer-8eYm7 .framer-9od6rb { display: block; }", ".framer-8eYm7.framer-1ee19rx { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 400px; }", ".framer-8eYm7 .framer-1dl1a3z { -webkit-user-select: none; align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 32px 0px 32px 0px; position: relative; user-select: none; width: 100%; }", ".framer-8eYm7 .framer-hcic6a { flex: none; height: 16px; overflow: hidden; position: relative; width: 16px; z-index: 1; }", ".framer-8eYm7 .framer-1tbtoi5 { flex: none; height: 2px; left: calc(50.00000000000002% - 16px / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 2px / 2); width: 16px; }", ".framer-8eYm7 .framer-16xx3z0 { flex: none; height: 16px; left: calc(50.00000000000002% - 2px / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 16px / 2); width: 2px; }", ".framer-8eYm7 .framer-18gamxd { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }", ".framer-8eYm7 .framer-fizcoe { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 20px 20px 40px; position: relative; width: 100%; }", ".framer-8eYm7 .framer-1lv6zzi { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ...css2, ...css];
var FramerCnJrH4aCB = withCSS(Component, css3, "framer-8eYm7");
var CnJrH4aCB_default = FramerCnJrH4aCB;
FramerCnJrH4aCB.displayName = "Row";
FramerCnJrH4aCB.defaultProps = {
  height: 150.5,
  width: 400
};
addPropertyControls(FramerCnJrH4aCB, {
  variant: {
    options: ["IFA3VX2P0", "G7soleXni", "XucMDh0Kl", "mYA2ra5XK"],
    optionTitles: ["Closed", "Open", "last-closed", "last-open"],
    title: "Variant",
    type: ControlType.Enum
  },
  W88zB8mIG: {
    defaultValue: "Framer is a web builder for creative pros. Be sure to check out framer.com to learn more.",
    displayTextArea: true,
    title: "Question",
    type: ControlType.String
  },
  T8rQFvSBR: {
    defaultValue: "Framer is a web builder for creative pros. Be sure to check out framer.com to learn more.",
    displayTextArea: true,
    title: "Answer",
    type: ControlType.String
  },
  qsrM5838n: {
    title: "Click",
    type: ControlType.EventHandler
  },
  hY3oIpwxB: {
    defaultValue: 'var(--token-7ce68db9-0723-4469-83ef-663a6e703840, rgb(43, 43, 61))',
    title: "background color",
    type: ControlType.Color
  },
  qkkFBERoT: {
    defaultValue: 'var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248))',
    title: "text color",
    type: ControlType.Color
  }
});
addFonts(FramerCnJrH4aCB, [{
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
}, ...getFontsFromSharedStyle(fonts2), ...getFontsFromSharedStyle(fonts)], {
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
      "name": "FramerCnJrH4aCB",
      "slots": [],
      "annotations": {
        "framerDisplayContentsDiv": "false",
        "framerVariables": '{"W88zB8mIG":"question","T8rQFvSBR":"answer","qsrM5838n":"click","hY3oIpwxB":"backgroundColor","qkkFBERoT":"textColor"}',
        "framerComponentViewportWidth": "true",
        "framerIntrinsicHeight": "150.5",
        "framerAutoSizeImages": "true",
        "framerIntrinsicWidth": "400",
        "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"G7soleXni":{"layout":["fixed","auto"]},"XucMDh0Kl":{"layout":["fixed","auto"]},"mYA2ra5XK":{"layout":["fixed","auto"]}}}',
        "framerColorSyntax": "true",
        "framerImmutableVariables": "true",
        "framerContractVersion": "1"
      }
    },
    "__FramerMetadata__": {
      "type": "variable"
    }
  }
};
var _OriginalComponent = CnJrH4aCB_default;
function RowWrapped(props) {
  var _variant = useVariant(props.variant);
  var _inner = (_variant !== undefined) ? { ...props, variant: _variant } : props;
  return _ctxJsx(ContextProviders, { children: _ctxJsx(_OriginalComponent, _inner) });
}
Object.assign(RowWrapped, _OriginalComponent);
export {  __FramerMetadata__,  RowWrapped as default   };