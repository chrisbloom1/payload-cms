"use client"
// http-url:https://framerusercontent.com/modules/7ivnQoKIW746u6BNAlxr/NcI5EcEDP22ctopwlcwJ/YHbXewHRr.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, getFontsFromSharedStyle, optimizeAppear, RichText, useActiveVariantCallback, useComponentViewport, useLocaleInfo, useVariantState, withCSS, withFX } from "@proofly-framer/runtime";
import { LayoutGroup, motion, MotionConfigContext } from "@proofly-framer/runtime";
import * as React from "react";

// http-url:https://framerusercontent.com/modules/jtYjlqHZqHU87icHOGiw/OOuSnFcca3KULIr591Dj/QkI8Aa5rN.js
import { fontStore } from "@proofly-framer/runtime";
import { jsx as _ctxJsx } from "react/jsx-runtime";
import { ContextProviders, useVariant } from "@proofly-framer/runtime";
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

// http-url:https://framerusercontent.com/modules/7ivnQoKIW746u6BNAlxr/NcI5EcEDP22ctopwlcwJ/YHbXewHRr.js
var MotionDivWithFX = withFX(motion.div);
var cycleOrder = ["FdT7iBApf", "hlVf9MYOU", "X2dtqOTcB"];
var serializationHash = "framer-8owbM";
var variantClassNames = {
  FdT7iBApf: "framer-v-13r0n0g",
  hlVf9MYOU: "framer-v-188b7v8",
  X2dtqOTcB: "framer-v-sbtw8o"
};
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0 ? void 0 : variants.forEach(variant => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = {
  duration: 0,
  type: "tween"
};
var transition2 = {
  delay: 0,
  duration: 0.3,
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
  transition: transition2,
  x: 0,
  y: 0
};
var animation1 = {
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
var transition3 = {
  delay: 0,
  duration: 1,
  ease: [0, 0, 1, 1],
  type: "tween"
};
var animation2 = {
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
  Default: "FdT7iBApf",
  Hidden: "X2dtqOTcB",
  Loading: "hlVf9MYOU"
};
var getProps = ({
  click,
  height,
  id,
  width,
  ...props
}) => {
  var _humanReadableVariantMap_props_variant, _ref;
  return {
    ...props,
    variant: (_ref = (_humanReadableVariantMap_props_variant = humanReadableVariantMap[props.variant]) !== null && _humanReadableVariantMap_props_variant !== void 0 ? _humanReadableVariantMap_props_variant : props.variant) !== null && _ref !== void 0 ? _ref : "FdT7iBApf",
    Wld3NDzSj: click !== null && click !== void 0 ? click : props.Wld3NDzSj
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
    Wld3NDzSj,
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
    defaultVariant: "FdT7iBApf",
    variant,
    variantClassNames
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const {
    activeVariantCallback,
    delay
  } = useActiveVariantCallback(baseVariant);
  const onTapn9xadi = activeVariantCallback(async (...args) => {
    setGestureState({
      isPressed: false
    });
    if (Wld3NDzSj) {
      const res = await Wld3NDzSj(...args);
      if (res === false) return false;
    }
  });
  const isDisplayed = () => {
    if (baseVariant === "X2dtqOTcB") return false;
    return true;
  };
  const ref1 = React.useRef(null);
  const isDisplayed1 = () => {
    if (baseVariant === "hlVf9MYOU") return false;
    return true;
  };
  const isDisplayed2 = () => {
    if (baseVariant === "hlVf9MYOU") return true;
    return false;
  };
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [className];
  const componentViewport = useComponentViewport();
  return <LayoutGroup id={layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId}>{<Variants animate={variants} initial={false}>{isDisplayed() && <Transition value={transition1}>{_jsxs(motion.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx(serializationHash, ...sharedStyleClassNames, "framer-13r0n0g", className2, classNames),
          "data-framer-name": "Default",
          "data-highlight": true,
          layoutDependency,
          layoutId: "FdT7iBApf",
          onTap: onTapn9xadi,
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: {
            backgroundColor: "var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(197, 249, 111))",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            ...style
          },
          ...addPropertyOverrides({
            hlVf9MYOU: {
              "data-framer-name": "Loading"
            }
          }, baseVariant, gestureVariant),
          children: [isDisplayed1() && <RichText __fromCanvasComponent className="framer-1ipkld0" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="xvcroG1Ya" verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.p, {
                className: "framer-styles-preset-mnimbo",
                "data-styles-preset": "QkI8Aa5rN",
                children: "Load More"
              })}</>}</RichText>, isDisplayed2() && <MotionDivWithFX __perspectiveFX={false} __smartComponentFX __targetOpacity={1} animate={optimizeAppear("animate", "1qobph6", animation, "13r0n0g")} className="framer-1qobph6" data-framer-appear-id="1qobph6" data-framer-name="Spinner" initial={optimizeAppear("initial", "1qobph6", animation1, "13r0n0g")} layoutDependency={layoutDependency} layoutId="gDwFHLm40" style={{
            mask: "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add",
            WebkitMask: "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add"
          }} {...addPropertyOverrides({
            hlVf9MYOU: {
              "data-framer-appear-id": "1yncqdq",
              animate: optimizeAppear("animate", "1yncqdq", animation, "188b7v8"),
              initial: optimizeAppear("initial", "1yncqdq", animation1, "188b7v8")
            }
          }, baseVariant, gestureVariant)}>{<MotionDivWithFX __framer__loop={animation2} __framer__loopEffectEnabled __framer__loopRepeatDelay={0} __framer__loopRepeatType="loop" __framer__loopTransition={transition3} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-1fmciit" data-framer-name="Conic" layoutDependency={layoutDependency} layoutId="K6ObPLhwl" style={{
              background: 'conic-gradient(from 0deg at 50% 50%, rgba(10, 11, 10, 0) 0deg, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(10, 11, 10)) 342deg)'
            }}>{_jsx(motion.div, {
                className: "framer-omsa2u",
                "data-framer-name": "Round",
                layoutDependency,
                layoutId: "jo5pWuxfy",
                style: {
                  backgroundColor: "rgb(255, 255, 255)",
                  borderBottomLeftRadius: 1,
                  borderBottomRightRadius: 1,
                  borderTopLeftRadius: 1,
                  borderTopRightRadius: 1
                }
              })}</MotionDivWithFX>}</MotionDivWithFX>]
        })}</Transition>}</Variants>}</LayoutGroup>;
});
var css2 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-8owbM.framer-1up57e6, .framer-8owbM .framer-1up57e6 { display: block; }", ".framer-8owbM.framer-13r0n0g { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 12px 16px 12px 16px; position: relative; width: min-content; }", ".framer-8owbM .framer-1ipkld0 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }", ".framer-8owbM .framer-1qobph6 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 20px); overflow: visible; position: relative; width: 20px; }", ".framer-8owbM .framer-1fmciit { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }", ".framer-8owbM .framer-omsa2u { flex: none; height: 2px; left: calc(50.00000000000002% - 2px / 2); overflow: visible; position: absolute; top: 0px; width: 2px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-8owbM.framer-13r0n0g { gap: 0px; } .framer-8owbM.framer-13r0n0g > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-8owbM.framer-13r0n0g > :first-child { margin-left: 0px; } .framer-8owbM.framer-13r0n0g > :last-child { margin-right: 0px; } }", ...css];
var FramerYHbXewHRr = withCSS(Component, css2, "framer-8owbM");
var YHbXewHRr_default = FramerYHbXewHRr;
FramerYHbXewHRr.displayName = "Load More Button";
FramerYHbXewHRr.defaultProps = {
  height: 43,
  width: 108
};
addPropertyControls(FramerYHbXewHRr, {
  variant: {
    options: ["FdT7iBApf", "hlVf9MYOU", "X2dtqOTcB"],
    optionTitles: ["Default", "Loading", "Hidden"],
    title: "Variant",
    type: ControlType.Enum
  },
  Wld3NDzSj: {
    title: "Click",
    type: ControlType.EventHandler
  }
});
addFonts(FramerYHbXewHRr, [{
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
      "name": "FramerYHbXewHRr",
      "slots": [],
      "annotations": {
        "framerContractVersion": "1",
        "framerComponentViewportWidth": "true",
        "framerIntrinsicWidth": "108",
        "framerIntrinsicHeight": "43",
        "framerDisplayContentsDiv": "false",
        "framerImmutableVariables": "true",
        "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["auto","auto"]},"hlVf9MYOU":{"layout":["auto","auto"]},"X2dtqOTcB":{"layout":["auto","auto"]}}}',
        "framerVariables": '{"Wld3NDzSj":"click"}'
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
var _OriginalComponent = YHbXewHRr_default;
function LoadMoreButtonWrapped(props) {
  var _variant = useVariant(props.variant);
  var _inner = (_variant !== undefined) ? { ...props, variant: _variant } : props;
  return _ctxJsx(ContextProviders, { children: _ctxJsx(_OriginalComponent, _inner) });
}
Object.assign(LoadMoreButtonWrapped, _OriginalComponent);
export {  __FramerMetadata__,  LoadMoreButtonWrapped as default   };