"use client"
// http-url:https://framerusercontent.com/modules/ydQJuJVd3EwAkDz1SpDd/st15srvWNgk9HrVUWCxe/FX7QM6dnM.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addFonts, cx, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "@proofly-framer/runtime";
import { LayoutGroup, motion, MotionConfigContext } from "@proofly-framer/runtime";
import * as React from "react";
import { useRef } from "react";
import { jsx as _ctxJsx } from "react/jsx-runtime";
import { ContextProviders, useVariant } from "@proofly-framer/runtime";
var serializationHash = "framer-r3fpS";
var variantClassNames = {
  M3LcDU6JS: "framer-v-50gzf6"
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
var getProps = ({
  height,
  id,
  width,
  ...props
}) => {
  return {
    ...props
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
    defaultVariant: "M3LcDU6JS",
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
          className: cx(scopingClassNames, "framer-50gzf6", className, classNames),
          "data-framer-name": "Variant 1",
          layoutDependency,
          layoutId: "M3LcDU6JS",
          ref: refBinding,
          style: {
            ...style
          }
        })}</Transition>}</Variants>}</LayoutGroup>;
});
var css = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-r3fpS.framer-1khuxmp, .framer-r3fpS .framer-1khuxmp { display: block; }", ".framer-r3fpS.framer-50gzf6 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 87px; overflow: visible; padding: 0px; position: relative; width: 1128px; }"];
var FramerFX7QM6dnM = withCSS(Component, css, "framer-r3fpS");
var FX7QM6dnM_default = FramerFX7QM6dnM;
FramerFX7QM6dnM.displayName = "InputBox";
FramerFX7QM6dnM.defaultProps = {
  height: 87,
  width: 1128
};
addFonts(FramerFX7QM6dnM, [{
  explicitInter: true,
  fonts: []
}], {
  supportsExplicitInterCodegen: true
});
var __FramerMetadata__ = {
  "exports": {
    "default": {
      "type": "reactComponent",
      "name": "FramerFX7QM6dnM",
      "slots": [],
      "annotations": {
        "framerColorSyntax": "true",
        "framerDisplayContentsDiv": "false",
        "framerComponentViewportWidth": "true",
        "framerContractVersion": "1",
        "framerIntrinsicHeight": "87",
        "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]}}}',
        "framerImmutableVariables": "true",
        "framerIntrinsicWidth": "1128",
        "framerAutoSizeImages": "true"
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
var _OriginalComponent = FX7QM6dnM_default;
function InputBoxWrapped(props) {
  var _variant = useVariant(props.variant);
  var _inner = (_variant !== undefined) ? { ...props, variant: _variant } : props;
  return _ctxJsx(ContextProviders, { children: _ctxJsx(_OriginalComponent, _inner) });
}
Object.assign(InputBoxWrapped, _OriginalComponent);
export {  __FramerMetadata__,  InputBoxWrapped as default   };