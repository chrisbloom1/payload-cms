"use client"
// http-url:https://framerusercontent.com/modules/7g5BRNeId9oR4L1iJ9ca/E815L5TFMonz1PhTCqRG/BM6dW4dQJ.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, useActiveVariantCallback, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "@proofly-framer/runtime";
import { LayoutGroup, motion, MotionConfigContext } from "@proofly-framer/runtime";
import * as React from "react";
import { jsx as _ctxJsx } from "react/jsx-runtime";
import { ContextProviders, useVariant } from "@proofly-framer/runtime";
var cycleOrder = ["giz4yYTJn", "at430vW36"];
var serializationHash = "framer-7L1CG";
var variantClassNames = {
  at430vW36: "framer-v-1ld6zf9",
  giz4yYTJn: "framer-v-1av4fzl"
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
  Close: "at430vW36",
  Menu: "giz4yYTJn"
};
var getProps = ({
  height,
  id,
  tap,
  width,
  ...props
}) => {
  var _humanReadableVariantMap_props_variant, _ref;
  return {
    ...props,
    variant: (_ref = (_humanReadableVariantMap_props_variant = humanReadableVariantMap[props.variant]) !== null && _humanReadableVariantMap_props_variant !== void 0 ? _humanReadableVariantMap_props_variant : props.variant) !== null && _ref !== void 0 ? _ref : "giz4yYTJn",
    XKaY3MrGu: tap !== null && tap !== void 0 ? tap : props.XKaY3MrGu
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
    className,
    layoutId,
    variant,
    XKaY3MrGu,
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
    defaultVariant: "giz4yYTJn",
    variant,
    variantClassNames
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const {
    activeVariantCallback,
    delay
  } = useActiveVariantCallback(baseVariant);
  const onTapc2fruv = activeVariantCallback(async (...args) => {
    setGestureState({
      isPressed: false
    });
    if (XKaY3MrGu) {
      const res = await XKaY3MrGu(...args);
      if (res === false) return false;
    }
  });
  const ref1 = React.useRef(null);
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport();
  return <LayoutGroup id={layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId}>{<Variants animate={variants} initial={false}>{<Transition value={transition1}>{_jsxs(motion.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx(serializationHash, ...sharedStyleClassNames, "framer-1av4fzl", className, classNames),
          "data-framer-name": "Menu",
          "data-highlight": true,
          layoutDependency,
          layoutId: "giz4yYTJn",
          onTap: onTapc2fruv,
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: {
            ...style
          },
          ...addPropertyOverrides({
            at430vW36: {
              "data-framer-name": "Close"
            }
          }, baseVariant, gestureVariant),
          children: [_jsx(motion.div, {
            className: "framer-195idzx",
            "data-framer-name": "Bottom",
            layoutDependency,
            layoutId: "Y8eu91fC7",
            style: {
              backgroundColor: "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))",
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              rotate: 0
            },
            variants: {
              at430vW36: {
                rotate: -45
              }
            }
          }), _jsx(motion.div, {
            className: "framer-1x62hc",
            "data-framer-name": "Top",
            layoutDependency,
            layoutId: "b0GU_P9Ca",
            style: {
              backgroundColor: "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))",
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              rotate: 0
            },
            variants: {
              at430vW36: {
                rotate: 45
              }
            }
          })]
        })}</Transition>}</Variants>}</LayoutGroup>;
});
var css = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-7L1CG.framer-1q4vfm, .framer-7L1CG .framer-1q4vfm { display: block; }", ".framer-7L1CG.framer-1av4fzl { cursor: pointer; height: 44px; overflow: hidden; position: relative; width: 44px; }", ".framer-7L1CG .framer-195idzx { flex: none; height: 2px; left: calc(50.00000000000002% - 20px / 2); overflow: hidden; position: absolute; top: calc(62.50000000000002% - 2px / 2); width: 20px; will-change: var(--framer-will-change-override, transform); }", ".framer-7L1CG .framer-1x62hc { flex: none; height: 2px; left: calc(50.00000000000002% - 20px / 2); overflow: hidden; position: absolute; top: calc(37.50000000000002% - 2px / 2); width: 20px; will-change: var(--framer-will-change-override, transform); }", ".framer-7L1CG.framer-v-1ld6zf9.framer-1av4fzl { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 44px); }", ".framer-7L1CG.framer-v-1ld6zf9 .framer-195idzx, .framer-7L1CG.framer-v-1ld6zf9 .framer-1x62hc { top: calc(50.00000000000002% - 2px / 2); }"];
var FramerBM6dW4dQJ = withCSS(Component, css, "framer-7L1CG");
var BM6dW4dQJ_default = FramerBM6dW4dQJ;
FramerBM6dW4dQJ.displayName = "Navigation/Menu Icon";
FramerBM6dW4dQJ.defaultProps = {
  height: 44,
  width: 44
};
addPropertyControls(FramerBM6dW4dQJ, {
  variant: {
    options: ["giz4yYTJn", "at430vW36"],
    optionTitles: ["Menu", "Close"],
    title: "Variant",
    type: ControlType.Enum
  },
  XKaY3MrGu: {
    title: "Tap",
    type: ControlType.EventHandler
  }
});
addFonts(FramerBM6dW4dQJ, [{
  explicitInter: true,
  fonts: []
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
      "name": "FramerBM6dW4dQJ",
      "slots": [],
      "annotations": {
        "framerVariables": '{"XKaY3MrGu":"tap"}',
        "framerIntrinsicHeight": "44",
        "framerContractVersion": "1",
        "framerComponentViewportWidth": "true",
        "framerImmutableVariables": "true",
        "framerDisplayContentsDiv": "false",
        "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"at430vW36":{"layout":["fixed","fixed"]}}}',
        "framerIntrinsicWidth": "44"
      }
    },
    "__FramerMetadata__": {
      "type": "variable"
    }
  }
};
var _OriginalComponent = BM6dW4dQJ_default;
function NavigationMenuIconWrapped(props) {
  var _variant = useVariant(props.variant);
  var _inner = (_variant !== undefined) ? { ...props, variant: _variant } : props;
  return _ctxJsx(ContextProviders, { children: _ctxJsx(_OriginalComponent, _inner) });
}
Object.assign(NavigationMenuIconWrapped, _OriginalComponent);
export {  __FramerMetadata__,  NavigationMenuIconWrapped as default   };