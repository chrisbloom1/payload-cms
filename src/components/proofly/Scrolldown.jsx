"use client"
// http-url:https://framerusercontent.com/modules/q1LpX8ealr8ATDPOu02C/uSj8RtDXVPyIYoJfn0xp/HHRSCXnR8.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, getLoadingLazyAtYPosition, Image, Link, RichText, useComponentViewport, useLocaleInfo, useVariantState, withCSS, withFX, withOptimizedAppearEffect } from "@proofly-framer/runtime";
import { LayoutGroup, motion, MotionConfigContext } from "@proofly-framer/runtime";
import * as React from "react";
import { jsx as _ctxJsx } from "react/jsx-runtime";
import { ContextProviders, useVariant } from "@proofly-framer/runtime";
var ImageWithFX = withFX(Image);
var MotionAWithFXWithOptimizedAppearEffect = withOptimizedAppearEffect(withFX(motion.a));
var cycleOrder = ["eZ6kUd9fB", "t02a66Jsj"];
var serializationHash = "framer-bek3x";
var variantClassNames = {
  eZ6kUd9fB: "framer-v-5c4z1c",
  t02a66Jsj: "framer-v-625il2"
};
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0 ? void 0 : variants.forEach(variant => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = {
  delay: 2.5,
  duration: 0.8,
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
  transition: transition1,
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
var transition2 = {
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
var transition3 = {
  delay: 0,
  duration: 1.5,
  ease: [0, 0, 1, 1],
  type: "tween"
};
var animation2 = {
  opacity: 1,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  skewX: 0,
  skewY: 0,
  x: 0,
  y: -10
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
var Variants = motion.create(React.Fragment);
var humanReadableVariantMap = {
  default: "eZ6kUd9fB",
  small: "t02a66Jsj"
};
var getProps = ({
  height,
  icon,
  id,
  link,
  text,
  textColor,
  width,
  ...props
}) => {
  var _ref, _humanReadableVariantMap_props_variant, _ref1, _ref2;
  return {
    ...props,
    B0SqkXtNj: (_ref = text !== null && text !== void 0 ? text : props.B0SqkXtNj) !== null && _ref !== void 0 ? _ref : "Learn more",
    BPNNwmtO5: link !== null && link !== void 0 ? link : props.BPNNwmtO5,
    OPyMnhpfb: icon !== null && icon !== void 0 ? icon : props.OPyMnhpfb,
    variant: (_ref1 = (_humanReadableVariantMap_props_variant = humanReadableVariantMap[props.variant]) !== null && _humanReadableVariantMap_props_variant !== void 0 ? _humanReadableVariantMap_props_variant : props.variant) !== null && _ref1 !== void 0 ? _ref1 : "eZ6kUd9fB",
    yXi7gqHpW: (_ref2 = textColor !== null && textColor !== void 0 ? textColor : props.yXi7gqHpW) !== null && _ref2 !== void 0 ? _ref2 : "rgb(0, 0, 0)"
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
    B0SqkXtNj,
    OPyMnhpfb,
    yXi7gqHpW,
    BPNNwmtO5,
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
    defaultVariant: "eZ6kUd9fB",
    variant,
    variantClassNames
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const ref1 = React.useRef(null);
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport();
  return <LayoutGroup id={layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId}>{<Variants animate={variants} initial={false}>{<Transition value={transition2}>{<Link href={BPNNwmtO5} openInNewTab={false} smoothScroll>{<MotionAWithFXWithOptimizedAppearEffect {...restProps} {...gestureHandlers} __framer__adjustPosition={false} __framer__offset={0} __framer__parallaxTransformEnabled __framer__presenceAnimate={animation} __framer__presenceInitial={animation1} __framer__speed={125} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className={`${cx(serializationHash, ...sharedStyleClassNames, "framer-5c4z1c", className, classNames)} framer-184g4na`} data-framer-appear-id="5c4z1c" data-framer-name="default" layoutDependency={layoutDependency} layoutId="eZ6kUd9fB" optimized ref={ref !== null && ref !== void 0 ? ref : ref1} style={{
            ...style
          }} {...addPropertyOverrides({
            t02a66Jsj: {
              "data-framer-name": "small"
            }
          }, baseVariant, gestureVariant)}>{<ImageWithFX __framer__loop={animation2} __framer__loopEffectEnabled __framer__loopRepeatDelay={0} __framer__loopRepeatType="mirror" __framer__loopTransition={transition3} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} background={{
              alt: "",
              fit: "fill",
              loading: getLoadingLazyAtYPosition(((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 + (((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.height) || 80) - 0 - 79.8 + 0 + 0)),
              sizes: "50px",
              ...toResponsiveImage(OPyMnhpfb),
              ...{
                positionX: "center",
                positionY: "center"
              }
            }} className="framer-1779vzo" layoutDependency={layoutDependency} layoutId="M63RAJLlZ" style={{
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50
            }} {...addPropertyOverrides({
              t02a66Jsj: {
                background: {
                  alt: "",
                  fit: "fill",
                  loading: getLoadingLazyAtYPosition(((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0 + (((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.height) || 61) - 0 - 61.400000000000006 + 0 + 0)),
                  sizes: "36px",
                  ...toResponsiveImage(OPyMnhpfb),
                  ...{
                    positionX: "center",
                    positionY: "center"
                  }
                }
              }
            }, baseVariant, gestureVariant)} />}{<RichText __fromCanvasComponent className="framer-1u3h2n4" fonts={["CUSTOM;Haffer Bold"]} layoutDependency={layoutDependency} layoutId="fbVLxk9PN" style={{
              "--extracted-r6o4lv": "var(--variable-reference-yXi7gqHpW-HHRSCXnR8)",
              "--framer-link-text-color": "rgb(0, 153, 255)",
              "--framer-link-text-decoration": "underline",
              "--variable-reference-yXi7gqHpW-HHRSCXnR8": yXi7gqHpW
            }} text={B0SqkXtNj} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
              t02a66Jsj: {
                children: <>{_jsx(motion.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                      "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                      "--framer-font-size": "14px",
                      "--framer-line-height": "110%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-yXi7gqHpW-HHRSCXnR8))",
                      "--framer-text-decoration": "underline"
                    },
                    children: "Know more about us"
                  })}</>
              }
            }, baseVariant, gestureVariant)}>{<>{_jsx(motion.p, {
                  style: {
                    "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                    "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                    "--framer-font-size": "18px",
                    "--framer-line-height": "110%",
                    "--framer-text-alignment": "center",
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-yXi7gqHpW-HHRSCXnR8))",
                    "--framer-text-decoration": "underline"
                  },
                  children: "Know more about us"
                })}</>}</RichText>}</MotionAWithFXWithOptimizedAppearEffect>}</Link>}</Transition>}</Variants>}</LayoutGroup>;
});
var css = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-bek3x.framer-184g4na, .framer-bek3x .framer-184g4na { display: block; }", ".framer-bek3x.framer-5c4z1c { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }", ".framer-bek3x .framer-1779vzo { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 50px); overflow: hidden; position: relative; width: 50px; will-change: var(--framer-will-change-override, transform); }", ".framer-bek3x .framer-1u3h2n4 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-bek3x.framer-5c4z1c { gap: 0px; } .framer-bek3x.framer-5c4z1c > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-bek3x.framer-5c4z1c > :first-child { margin-top: 0px; } .framer-bek3x.framer-5c4z1c > :last-child { margin-bottom: 0px; } }", ".framer-bek3x.framer-v-625il2 .framer-1779vzo { height: var(--framer-aspect-ratio-supported, 36px); width: 36px; }"];
var FramerHHRSCXnR8 = withCSS(Component, css, "framer-bek3x");
var HHRSCXnR8_default = FramerHHRSCXnR8;
FramerHHRSCXnR8.displayName = "scroll down";
FramerHHRSCXnR8.defaultProps = {
  height: 80,
  width: 94
};
addPropertyControls(FramerHHRSCXnR8, {
  variant: {
    options: ["eZ6kUd9fB", "t02a66Jsj"],
    optionTitles: ["default", "small"],
    title: "Variant",
    type: ControlType.Enum
  },
  B0SqkXtNj: {
    defaultValue: "Learn more",
    displayTextArea: true,
    title: "text",
    type: ControlType.String
  },
  OPyMnhpfb: {
    title: "icon",
    type: ControlType.ResponsiveImage
  },
  yXi7gqHpW: {
    defaultValue: "rgb(0, 0, 0)",
    title: "text color",
    type: ControlType.Color
  },
  BPNNwmtO5: {
    title: "Link",
    type: ControlType.Link
  }
});
addFonts(FramerHHRSCXnR8, [{
  explicitInter: true,
  fonts: [{
    family: "Haffer Bold",
    source: "custom",
    url: "https://framerusercontent.com/assets/eRqmC6W9PktN8mUcnwel9B6wmPs.woff"
  }]
}], {
  supportsExplicitInterCodegen: true
});
var __FramerMetadata__ = {
  "exports": {
    "default": {
      "type": "reactComponent",
      "name": "FramerHHRSCXnR8",
      "slots": [],
      "annotations": {
        "framerIntrinsicHeight": "80",
        "framerDisplayContentsDiv": "false",
        "framerIntrinsicWidth": "94",
        "framerContractVersion": "1",
        "framerImmutableVariables": "true",
        "framerVariables": '{"B0SqkXtNj":"text","OPyMnhpfb":"icon","yXi7gqHpW":"textColor","BPNNwmtO5":"link"}',
        "framerComponentViewportWidth": "true",
        "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["auto","auto"]},"t02a66Jsj":{"layout":["auto","auto"]}}}'
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
var _OriginalComponent = HHRSCXnR8_default;
function ScrolldownWrapped(props) {
  var _variant = useVariant(props.variant);
  var _inner = (_variant !== undefined) ? { ...props, variant: _variant } : props;
  return _ctxJsx(ContextProviders, { children: _ctxJsx(_OriginalComponent, _inner) });
}
Object.assign(ScrolldownWrapped, _OriginalComponent);
export {  __FramerMetadata__,  ScrolldownWrapped as default   };