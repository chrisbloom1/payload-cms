"use client"
// http-url:https://framerusercontent.com/modules/vKIe5ryUd6TMoV5bbtQR/PoCQExqcznl6qqhCOx8X/NIA2LSiQL.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, getFontsFromSharedStyle, RichText, useActiveVariantCallback, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "@proofly-framer/runtime";
import { LayoutGroup, motion, MotionConfigContext } from "@proofly-framer/runtime";
import * as React from "react";

// http-url:https://framerusercontent.com/modules/hrEYztSl8D8TyacXlaiy/DgASN1v42yT6tA5SiBwC/Wrgt1shwF.js
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
var css = ['.framer-Pou2l .framer-styles-preset-1sq323:not(.rich-text-wrapper), .framer-Pou2l .framer-styles-preset-1sq323.rich-text-wrapper p { --framer-font-family: "Haffer Bold", "Haffer Bold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }', '@media (max-width: 809px) and (min-width: 0px) { .framer-Pou2l .framer-styles-preset-1sq323:not(.rich-text-wrapper), .framer-Pou2l .framer-styles-preset-1sq323.rich-text-wrapper p { --framer-font-family: "Haffer Bold", "Haffer Bold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }'];
var className = "framer-Pou2l";

// http-url:https://framerusercontent.com/modules/vKIe5ryUd6TMoV5bbtQR/PoCQExqcznl6qqhCOx8X/NIA2LSiQL.js
var cycleOrder = ["KpcuynoY7", "V4xAYZNQE", "yZxybhQhU", "UbDFENOCE"];
var serializationHash = "framer-aEyzc";
var variantClassNames = {
  KpcuynoY7: "framer-v-cv0zg0",
  UbDFENOCE: "framer-v-1x20s42",
  V4xAYZNQE: "framer-v-lunmc0",
  yZxybhQhU: "framer-v-islpku"
};
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0 ? void 0 : variants.forEach(variant => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = {
  damping: 60,
  delay: 0,
  mass: 1,
  stiffness: 500,
  type: "spring"
};
var radiusForCorner = (value, cornerIndex) => {
  if (typeof value === "number" && Number.isFinite(value)) return Math.max(0, value) + "px";
  if (typeof value !== "string" || typeof cornerIndex !== "number") return void 0;
  const segments = value.split(" ");
  return segments[cornerIndex] || segments[cornerIndex - 2] || segments[0];
};
var Transition = ({
  value,
  children
}) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({
    ...config,
    transition
  }), [JSON.stringify(transition)]);
  return <MotionConfigContext.Provider value={contextValue}>{children}</MotionConfigContext.Provider>;
};
var Variants = motion(React.Fragment);
var humanReadableVariantMap = {
  "Active v2": "UbDFENOCE",
  "Disable v2": "yZxybhQhU",
  Active: "V4xAYZNQE",
  Disable: "KpcuynoY7"
};
var getProps = ({
  click,
  height,
  id,
  radius,
  title,
  width,
  ...props
}) => {
  var _ref, _ref1, _humanReadableVariantMap_props_variant, _ref2;
  return {
    ...props,
    OCwxvzhqM: click !== null && click !== void 0 ? click : props.OCwxvzhqM,
    ssa_z29zs: (_ref = title !== null && title !== void 0 ? title : props.ssa_z29zs) !== null && _ref !== void 0 ? _ref : "Development team",
    TZWm30yhb: (_ref1 = radius !== null && radius !== void 0 ? radius : props.TZWm30yhb) !== null && _ref1 !== void 0 ? _ref1 : "10px",
    variant: (_ref2 = (_humanReadableVariantMap_props_variant = humanReadableVariantMap[props.variant]) !== null && _humanReadableVariantMap_props_variant !== void 0 ? _humanReadableVariantMap_props_variant : props.variant) !== null && _ref2 !== void 0 ? _ref2 : "KpcuynoY7"
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
    className: className2,
    layoutId,
    variant,
    ssa_z29zs,
    OCwxvzhqM,
    TZWm30yhb,
    ...restProps
  } = getProps(props);
  const {
    baseVariant,
    classNames,
    gestureHandlers,
    gestureVariant,
    setGestureState,
    setVariant,
    variants
  } = useVariantState({
    cycleOrder,
    defaultVariant: "KpcuynoY7",
    variant,
    variantClassNames
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const {
    activeVariantCallback,
    delay
  } = useActiveVariantCallback(baseVariant);
  const onTapvpplrs = activeVariantCallback(async (...args) => {
    setGestureState({
      isPressed: false
    });
    if (OCwxvzhqM) {
      const res = await OCwxvzhqM(...args);
      if (res === false) return false;
    }
  });
  const ref1 = React.useRef(null);
  const isDisplayed = () => {
    if (["yZxybhQhU", "UbDFENOCE"].includes(baseVariant)) return false;
    return true;
  };
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [className];
  const componentViewport = useComponentViewport();
  return <LayoutGroup id={layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId}>{<Variants animate={variants} initial={false}>{<Transition value={transition1}>{_jsxs(motion.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx(serializationHash, ...sharedStyleClassNames, "framer-cv0zg0", className2, classNames),
          "data-framer-name": "Disable",
          "data-highlight": true,
          layoutDependency,
          layoutId: "KpcuynoY7",
          onTap: onTapvpplrs,
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: {
            "--border-bottom-width": "0px",
            "--border-color": "rgba(0, 0, 0, 0)",
            "--border-left-width": "0px",
            "--border-right-width": "0px",
            "--border-style": "solid",
            "--border-top-width": "0px",
            backgroundColor: "rgba(0, 0, 0, 0)",
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            ...style
          },
          variants: {
            UbDFENOCE: {
              "--border-bottom-width": "1px",
              "--border-color": "rgba(182, 182, 185, 0)",
              "--border-left-width": "1px",
              "--border-right-width": "1px",
              "--border-style": "solid",
              "--border-top-width": "1px",
              backgroundColor: "var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(197, 249, 111))",
              borderBottomLeftRadius: radiusForCorner(TZWm30yhb, 3),
              borderBottomRightRadius: radiusForCorner(TZWm30yhb, 2),
              borderTopLeftRadius: radiusForCorner(TZWm30yhb, 0),
              borderTopRightRadius: radiusForCorner(TZWm30yhb, 1)
            },
            yZxybhQhU: {
              "--border-bottom-width": "1px",
              "--border-color": "var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(124, 124, 124))",
              "--border-left-width": "1px",
              "--border-right-width": "1px",
              "--border-style": "solid",
              "--border-top-width": "1px",
              borderBottomLeftRadius: radiusForCorner(TZWm30yhb, 3),
              borderBottomRightRadius: radiusForCorner(TZWm30yhb, 2),
              borderTopLeftRadius: radiusForCorner(TZWm30yhb, 0),
              borderTopRightRadius: radiusForCorner(TZWm30yhb, 1)
            }
          },
          ...addPropertyOverrides({
            UbDFENOCE: {
              "data-border": true,
              "data-framer-name": "Active v2"
            },
            V4xAYZNQE: {
              "data-framer-name": "Active"
            },
            yZxybhQhU: {
              "data-border": true,
              "data-framer-name": "Disable v2"
            }
          }, baseVariant, gestureVariant),
          children: [<RichText __fromCanvasComponent className="framer-1waqwby" data-framer-name="Development team" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="Tumj1YRSK" style={{
            "--extracted-r6o4lv": "var(--token-2ae4d622-3758-4fad-a56d-08fa00cc7638, rgb(182, 182, 185))",
            "--framer-paragraph-spacing": "0px"
          }} text={ssa_z29zs} variants={{
            UbDFENOCE: {
              "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(10, 11, 10))"
            },
            V4xAYZNQE: {
              "--extracted-r6o4lv": "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))"
            }
          }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides({
            UbDFENOCE: {
              children: <>{_jsx(motion.p, {
                  className: "framer-styles-preset-1sq323",
                  "data-styles-preset": "Wrgt1shwF",
                  style: {
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(10, 11, 10)))"
                  },
                  children: "Development team"
                })}</>
            },
            V4xAYZNQE: {
              children: <>{_jsx(motion.p, {
                  className: "framer-styles-preset-1sq323",
                  "data-styles-preset": "Wrgt1shwF",
                  style: {
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))"
                  },
                  children: "Development team"
                })}</>
            }
          }, baseVariant, gestureVariant)}>{<>{_jsx(motion.p, {
                className: "framer-styles-preset-1sq323",
                "data-styles-preset": "Wrgt1shwF",
                style: {
                  "--framer-text-color": "var(--extracted-r6o4lv, var(--token-2ae4d622-3758-4fad-a56d-08fa00cc7638, rgb(182, 182, 185)))"
                },
                children: "Development team"
              })}</>}</RichText>, isDisplayed() && _jsx(motion.div, {
            className: "framer-1fazxe1",
            "data-framer-name": "Rectangle 22433",
            layoutDependency,
            layoutId: "aKgn75J2L",
            style: {
              backgroundColor: "var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(124, 124, 124))"
            },
            variants: {
              V4xAYZNQE: {
                backgroundColor: "var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(197, 249, 111))"
              }
            }
          })]
        })}</Transition>}</Variants>}</LayoutGroup>;
});
var css2 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-aEyzc.framer-1frc08u, .framer-aEyzc .framer-1frc08u { display: block; }", ".framer-aEyzc.framer-cv0zg0 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-aEyzc .framer-1waqwby { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-aEyzc .framer-1fazxe1 { flex: none; height: 2px; position: relative; width: 100%; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-aEyzc.framer-cv0zg0 { gap: 0px; } .framer-aEyzc.framer-cv0zg0 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-aEyzc.framer-cv0zg0 > :first-child { margin-top: 0px; } .framer-aEyzc.framer-cv0zg0 > :last-child { margin-bottom: 0px; } }", ".framer-aEyzc.framer-v-islpku.framer-cv0zg0, .framer-aEyzc.framer-v-1x20s42.framer-cv0zg0 { padding: 16px 24px 16px 24px; }", ...css, '.framer-aEyzc[data-border="true"]::after, .framer-aEyzc [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'];
var FramerNIA2LSiQL = withCSS(Component, css2, "framer-aEyzc");
var NIA2LSiQL_default = FramerNIA2LSiQL;
FramerNIA2LSiQL.displayName = "Tab";
FramerNIA2LSiQL.defaultProps = {
  height: 36,
  width: 184
};
addPropertyControls(FramerNIA2LSiQL, {
  variant: {
    options: ["KpcuynoY7", "V4xAYZNQE", "yZxybhQhU", "UbDFENOCE"],
    optionTitles: ["Disable", "Active", "Disable v2", "Active v2"],
    title: "Variant",
    type: ControlType.Enum
  },
  ssa_z29zs: {
    defaultValue: "Development team",
    displayTextArea: false,
    title: "Title",
    type: ControlType.String
  },
  OCwxvzhqM: {
    title: "Click",
    type: ControlType.EventHandler
  },
  TZWm30yhb: {
    defaultValue: "10px",
    title: "Radius",
    type: ControlType.BorderRadius
  }
});
addFonts(FramerNIA2LSiQL, [{
  explicitInter: true,
  fonts: [{
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
    url: "https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
    url: "https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+1F00-1FFF",
    url: "https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0370-03FF",
    url: "https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
    url: "https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    url: "https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
    url: "https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2",
    weight: "400"
  }]
}, ...getFontsFromSharedStyle(fonts)], {
  supportsExplicitInterCodegen: true
});
var __FramerMetadata__ = {
  "exports": {
    "default": {
      "type": "reactComponent",
      "name": "FramerNIA2LSiQL",
      "slots": [],
      "annotations": {
        "framerContractVersion": "1",
        "framerComponentViewportWidth": "true",
        "framerIntrinsicWidth": "184",
        "framerDisplayContentsDiv": "false",
        "framerVariables": '{"ssa_z29zs":"title","OCwxvzhqM":"click","TZWm30yhb":"radius"}',
        "framerImmutableVariables": "true",
        "framerIntrinsicHeight": "36",
        "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["auto","auto"]},"V4xAYZNQE":{"layout":["auto","auto"]},"yZxybhQhU":{"layout":["auto","auto"]},"UbDFENOCE":{"layout":["auto","auto"]}}}'
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
var _OriginalComponent = NIA2LSiQL_default;
function TabWrapped(props) {
  var _variant = useVariant(props.variant);
  var _inner = (_variant !== undefined) ? { ...props, variant: _variant } : props;
  return _ctxJsx(ContextProviders, { children: _ctxJsx(_OriginalComponent, _inner) });
}
Object.assign(TabWrapped, _OriginalComponent);
export {  __FramerMetadata__,  TabWrapped as default   };