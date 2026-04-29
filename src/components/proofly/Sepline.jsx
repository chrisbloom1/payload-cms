"use client"
// http-url:https://framerusercontent.com/modules/rZUGV2BIsGtQ83nacBh5/iQDCGZAiMelTi8SIEbMb/G6WHwM4iV.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "@proofly-framer/runtime";
import { LayoutGroup, motion, MotionConfigContext } from "@proofly-framer/runtime";
import * as React from "react";
import { useRef } from "react";
import { jsx as _ctxJsx } from "react/jsx-runtime";
import { ContextProviders, useVariant } from "@proofly-framer/runtime";
var cycleOrder = ["OIRtSzVJi", "PSyJB3XmH"];
var serializationHash = "framer-NKG4m";
var variantClassNames = {
  OIRtSzVJi: "framer-v-xa9pao",
  PSyJB3XmH: "framer-v-kw3otm"
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
  "single color": "PSyJB3XmH",
  gradient: "OIRtSzVJi"
};
var getProps = ({
  color,
  height,
  id,
  width,
  ...props
}) => {
  return {
    ...props,
    sehgKZpKS: color ?? props.sehgKZpKS ?? "var(--token-2ae4d622-3758-4fad-a56d-08fa00cc7638, rgb(173, 173, 199))",
    variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "OIRtSzVJi"
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
    className,
    layoutId,
    variant,
    sehgKZpKS,
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
    defaultVariant: "OIRtSzVJi",
    ref: refBinding,
    variant,
    variantClassNames
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return <LayoutGroup id={layoutId ?? defaultLayoutId}>{<Variants animate={variants} initial={false}>{<Transition value={transition1}>{_jsx(motion.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx(scopingClassNames, "framer-xa9pao", className, classNames),
          "data-framer-name": "gradient",
          layoutDependency,
          layoutId: "OIRtSzVJi",
          ref: refBinding,
          style: {
            ...style
          },
          ...addPropertyOverrides({
            PSyJB3XmH: {
              "data-framer-name": "single color"
            }
          }, baseVariant, gestureVariant),
          children: _jsx(motion.div, {
            className: "framer-5kec28",
            layoutDependency,
            layoutId: "wjZIJum9p",
            style: {
              background: "linear-gradient(270deg, var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62)) 0%, var(--token-d40a5262-b4fe-45d5-9e97-61d735d1744e, rgb(255, 152, 0)) 100%)",
              backgroundColor: "rgba(0, 0, 0, 0)"
            },
            variants: {
              PSyJB3XmH: {
                background: `linear-gradient(270deg, ${sehgKZpKS} 0%, ${sehgKZpKS} 100%)`,
                backgroundColor: sehgKZpKS
              }
            }
          })
        })}</Transition>}</Variants>}</LayoutGroup>;
});
var css = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-NKG4m.framer-zakvr7, .framer-NKG4m .framer-zakvr7 { display: block; }", ".framer-NKG4m.framer-xa9pao { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 2px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 116px; }", ".framer-NKG4m .framer-5kec28 { flex: 1 0 0px; height: 100%; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; }"];
var FramerG6WHwM4iV = withCSS(Component, css, "framer-NKG4m");
var G6WHwM4iV_default = FramerG6WHwM4iV;
FramerG6WHwM4iV.displayName = "sep-line";
FramerG6WHwM4iV.defaultProps = {
  height: 2,
  width: 116
};
addPropertyControls(FramerG6WHwM4iV, {
  variant: {
    options: ["OIRtSzVJi", "PSyJB3XmH"],
    optionTitles: ["gradient", "single color"],
    title: "Variant",
    type: ControlType.Enum
  },
  sehgKZpKS: {
    defaultValue: 'var(--token-2ae4d622-3758-4fad-a56d-08fa00cc7638, rgb(173, 173, 199))',
    title: "color",
    type: ControlType.Color
  }
});
addFonts(FramerG6WHwM4iV, [{
  explicitInter: true,
  fonts: []
}], {
  supportsExplicitInterCodegen: true
});
var __FramerMetadata__ = {
  "exports": {
    "default": {
      "type": "reactComponent",
      "name": "FramerG6WHwM4iV",
      "slots": [],
      "annotations": {
        "framerIntrinsicWidth": "116",
        "framerAutoSizeImages": "true",
        "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"PSyJB3XmH":{"layout":["fixed","fixed"]}}}',
        "framerVariables": '{"sehgKZpKS":"color"}',
        "framerDisplayContentsDiv": "false",
        "framerContractVersion": "1",
        "framerComponentViewportWidth": "true",
        "framerIntrinsicHeight": "2",
        "framerColorSyntax": "true",
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
var _OriginalComponent = G6WHwM4iV_default;
function SeplineWrapped(props) {
  var _variant = useVariant(props.variant);
  var _inner = (_variant !== undefined) ? { ...props, variant: _variant } : props;
  return _ctxJsx(ContextProviders, { children: _ctxJsx(_OriginalComponent, _inner) });
}
Object.assign(SeplineWrapped, _OriginalComponent);
export {  __FramerMetadata__,  SeplineWrapped as default   };