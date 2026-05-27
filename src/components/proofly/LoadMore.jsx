"use client"
// http-url:https://framerusercontent.com/modules/Vf8VfcBoM8l2AaI81Zd6/TLr1tpN7jcFJOYJ9wiFe/OYAxnZYsf.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, RichText, useActiveVariantCallback, useComponentViewport, useLocaleInfo, useVariantState, withCSS, withFX, withOptimizedAppearEffect } from "@proofly-framer/runtime";
import { LayoutGroup, motion, MotionConfigContext } from "@proofly-framer/runtime";
import * as React from "react";
import { jsx as _ctxJsx } from "react/jsx-runtime";
import { ContextProviders, useVariant } from "@proofly-framer/runtime";
var MotionDivWithFX = withFX(motion.div);
var MotionDivWithFXWithOptimizedAppearEffect = withOptimizedAppearEffect(withFX(motion.div));
var cycleOrder = ["UsMyRFzRL", "ZpfV3oM7j", "IUL2W8RCv"];
var serializationHash = "framer-eOG8U";
var variantClassNames = {
  IUL2W8RCv: "framer-v-c1mlhh",
  UsMyRFzRL: "framer-v-1sa4w02",
  ZpfV3oM7j: "framer-v-ujwzpp"
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
var humanReadableVariantMap = {
  Default: "UsMyRFzRL",
  Hidden: "IUL2W8RCv",
  Loading: "ZpfV3oM7j"
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
    variant: (_ref = (_humanReadableVariantMap_props_variant = humanReadableVariantMap[props.variant]) !== null && _humanReadableVariantMap_props_variant !== void 0 ? _humanReadableVariantMap_props_variant : props.variant) !== null && _ref !== void 0 ? _ref : "UsMyRFzRL",
    Wld3NDzSj: click !== null && click !== void 0 ? click : props.Wld3NDzSj
  };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Variants = motion.create(React.Fragment);
var Component = React.forwardRef(function (props, ref) {
  const {
    activeLocale,
    setLocale
  } = useLocaleInfo();
  const {
    style,
    className,
    layoutId,
    variant,
    Wld3NDzSj,
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
    defaultVariant: "UsMyRFzRL",
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
  const sharedStyleClassNames = [];
  const isDisplayed = () => {
    if (baseVariant === "IUL2W8RCv") return false;
    return true;
  };
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  const ref1 = React.useRef(null);
  const isDisplayed1 = () => {
    if (baseVariant === "ZpfV3oM7j") return false;
    return true;
  };
  const isDisplayed2 = () => {
    if (baseVariant === "ZpfV3oM7j") return true;
    return false;
  };
  const defaultLayoutId = React.useId();
  const componentViewport = useComponentViewport();
  return <LayoutGroup id={layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId}>{<Variants animate={variants} initial={false}>{isDisplayed() && <Transition value={transition1}>{_jsxs(motion.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx(scopingClassNames, "framer-1sa4w02", className, classNames),
          "data-framer-name": "Default",
          "data-highlight": true,
          layoutDependency,
          layoutId: "UsMyRFzRL",
          onTap: onTapn9xadi,
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: {
            backgroundColor: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
            ...style
          },
          ...addPropertyOverrides({
            ZpfV3oM7j: {
              "data-framer-name": "Loading"
            }
          }, baseVariant, gestureVariant),
          children: [isDisplayed1() && <RichText __fromCanvasComponent className="framer-1eia8a2" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="SxDLjlDzG" style={{
            "--extracted-r6o4lv": "rgb(255, 255, 255)"
          }} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.p, {
                style: {
                  "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                  "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                  "--framer-font-size": "14px",
                  "--framer-text-alignment": "center",
                  "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))"
                },
                children: "Load More"
              })}</>}</RichText>, isDisplayed2() && <MotionDivWithFXWithOptimizedAppearEffect __perspectiveFX={false} __smartComponentFX __targetOpacity={1} animate={animation} className="framer-127qldy" data-framer-appear-id="127qldy" data-framer-name="Spinner" initial={animation1} layoutDependency={layoutDependency} layoutId="SJ8YfMsq0" optimized style={{
            mask: "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add",
            WebkitMask: "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add"
          }}>{<MotionDivWithFX __framer__loop={animation2} __framer__loopEffectEnabled __framer__loopRepeatDelay={0} __framer__loopRepeatType="loop" __framer__loopTransition={transition3} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-3svcd9" data-framer-name="Conic" layoutDependency={layoutDependency} layoutId="gMaZfDO0E" style={{
              background: "conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 0deg, rgb(255, 255, 255) 342deg)"
            }}>{_jsx(motion.div, {
                className: "framer-nrvxvj",
                "data-framer-name": "Round",
                layoutDependency,
                layoutId: "MkXBo8Gkv",
                style: {
                  backgroundColor: "rgb(255, 255, 255)",
                  borderBottomLeftRadius: 1,
                  borderBottomRightRadius: 1,
                  borderTopLeftRadius: 1,
                  borderTopRightRadius: 1
                }
              })}</MotionDivWithFX>}</MotionDivWithFXWithOptimizedAppearEffect>]
        })}</Transition>}</Variants>}</LayoutGroup>;
});
var css = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-eOG8U.framer-1132k4d, .framer-eOG8U .framer-1132k4d { display: block; }", ".framer-eOG8U.framer-1sa4w02 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; padding: 0px; position: relative; width: 100px; }", ".framer-eOG8U .framer-1eia8a2 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }", ".framer-eOG8U .framer-127qldy { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 20px); overflow: visible; position: relative; width: 20px; }", ".framer-eOG8U .framer-3svcd9 { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }", ".framer-eOG8U .framer-nrvxvj { flex: none; height: 2px; left: calc(50.00000000000002% - 2px / 2); overflow: visible; position: absolute; top: 0px; width: 2px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-eOG8U.framer-1sa4w02 { gap: 0px; } .framer-eOG8U.framer-1sa4w02 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-eOG8U.framer-1sa4w02 > :first-child { margin-left: 0px; } .framer-eOG8U.framer-1sa4w02 > :last-child { margin-right: 0px; } }"];
var FramerOYAxnZYsf = withCSS(Component, css, "framer-eOG8U");
var OYAxnZYsf_default = FramerOYAxnZYsf;
FramerOYAxnZYsf.displayName = "Load More";
FramerOYAxnZYsf.defaultProps = {
  height: 40,
  width: 100
};
addPropertyControls(FramerOYAxnZYsf, {
  variant: {
    options: ["UsMyRFzRL", "ZpfV3oM7j", "IUL2W8RCv"],
    optionTitles: ["Default", "Loading", "Hidden"],
    title: "Variant",
    type: ControlType.Enum
  },
  Wld3NDzSj: {
    title: "Click",
    type: ControlType.EventHandler
  }
});
addFonts(FramerOYAxnZYsf, [{
  explicitInter: true,
  fonts: [{
    family: "Haffer Regular",
    source: "custom",
    url: "https://framerusercontent.com/assets/tAGQcvN09kwW2QjPLqLO197UqBQ.woff"
  }]
}], {
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
      "name": "FramerOYAxnZYsf",
      "slots": [],
      "annotations": {
        "framerImmutableVariables": "true",
        "framerIntrinsicHeight": "40",
        "framerContractVersion": "1",
        "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"ZpfV3oM7j":{"layout":["fixed","fixed"]},"IUL2W8RCv":{"layout":["fixed","fixed"]}}}',
        "framerDisplayContentsDiv": "false",
        "framerComponentViewportWidth": "true",
        "framerVariables": '{"Wld3NDzSj":"click"}',
        "framerIntrinsicWidth": "100"
      }
    },
    "__FramerMetadata__": {
      "type": "variable"
    }
  }
};
var _OriginalComponent = OYAxnZYsf_default;
function LoadMoreWrapped(props) {
  var _variant = useVariant(props.variant);
  var _inner = (_variant !== undefined) ? { ...props, variant: _variant } : props;
  return _ctxJsx(ContextProviders, { children: _ctxJsx(_OriginalComponent, _inner) });
}
Object.assign(LoadMoreWrapped, _OriginalComponent);
export {  __FramerMetadata__,  LoadMoreWrapped as default   };