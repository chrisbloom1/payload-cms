"use client"
// http-url:https://framerusercontent.com/modules/uey3UHNPM3g99A1lem5o/Mmv1AhhTaLjNqTQA4aGy/ZuPfGTShB.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, getLoadingLazyAtYPosition, Image, useComponentViewport, useLocaleInfo, useVariantState, withCSS, withFX } from "@proofly-framer/runtime";
import { LayoutGroup, motion, MotionConfigContext } from "@proofly-framer/runtime";
import * as React from "react";
import { useRef } from "react";
import { jsx as _ctxJsx } from "react/jsx-runtime";
import { ContextProviders, useVariant } from "@proofly-framer/runtime";
var MotionDivWithFX = withFX(motion.div);
var cycleOrder = ["L4Gg_cnSy", "ph_fOP53d"];
var serializationHash = "framer-lftUM";
var variantClassNames = {
  L4Gg_cnSy: "framer-v-fjqs5u",
  ph_fOP53d: "framer-v-146mc6t"
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
var animation = {
  opacity: 0,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 0,
  skewX: 0,
  skewY: 0,
  x: 0,
  y: 0
};
var transition2 = {
  damping: 14,
  delay: 0.2,
  mass: 1,
  stiffness: 130,
  type: "spring"
};
var animation1 = {
  opacity: 0,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 0,
  skewX: 0,
  skewY: 0,
  transition: transition2,
  x: 0,
  y: 0
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
  damping: 14,
  delay: 0.4,
  mass: 1,
  stiffness: 130,
  type: "spring"
};
var animation2 = {
  opacity: 0,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 0,
  skewX: 0,
  skewY: 0,
  transition: transition3,
  x: 0,
  y: 0
};
var transition4 = {
  damping: 14,
  delay: 0.6,
  mass: 1,
  stiffness: 130,
  type: "spring"
};
var animation3 = {
  opacity: 0,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 0,
  skewX: 0,
  skewY: 0,
  transition: transition4,
  x: 0,
  y: 0
};
var transition5 = {
  damping: 14,
  delay: 0.8,
  mass: 1,
  stiffness: 130,
  type: "spring"
};
var animation4 = {
  opacity: 0,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 0,
  skewX: 0,
  skewY: 0,
  transition: transition5,
  x: 0,
  y: 0
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
  "Variant 1": "L4Gg_cnSy",
  "Variant 2": "ph_fOP53d"
};
var getProps = ({
  height,
  id,
  image1,
  image2,
  image3,
  image4,
  width,
  ...props
}) => {
  return {
    ...props,
    aXbZBwTww: image2 ?? props.aXbZBwTww,
    QZqik0i9a: image4 ?? props.QZqik0i9a,
    variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "L4Gg_cnSy",
    vl9A8iu89: image1 ?? props.vl9A8iu89,
    zE_4GLWQJ: image3 ?? props.zE_4GLWQJ
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
    vl9A8iu89,
    aXbZBwTww,
    zE_4GLWQJ,
    QZqik0i9a,
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
    defaultVariant: "L4Gg_cnSy",
    ref: refBinding,
    variant,
    variantClassNames
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return <LayoutGroup id={layoutId ?? defaultLayoutId}>{<Variants animate={variants} initial={false}>{<Transition value={transition1}>{_jsxs(motion.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx(scopingClassNames, "framer-fjqs5u", className, classNames),
          "data-framer-name": "Variant 1",
          layoutDependency,
          layoutId: "L4Gg_cnSy",
          ref: refBinding,
          style: {
            ...style
          },
          ...addPropertyOverrides({
            ph_fOP53d: {
              "data-framer-name": "Variant 2"
            }
          }, baseVariant, gestureVariant),
          children: [<MotionDivWithFX __framer__animate={{
            transition: transition2
          }} __framer__animateOnce __framer__enter={animation} __framer__exit={animation1} __framer__styleAppearEffectEnabled __framer__threshold={0.5} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-1mrft6" data-framer-name="delivery" layoutDependency={layoutDependency} layoutId="L4Gg_cnSyOKigLXt2f" style={{
            backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))",
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8
          }} variants={{
            ph_fOP53d: {
              borderBottomLeftRadius: 4,
              borderBottomRightRadius: 4,
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4
            }
          }}>{<Image background={{
              alt: "",
              fit: "fill",
              loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 0 + (0 * (((componentViewport?.height || 364) - 0 - 16) / 2) + 0) + 0 + 0),
              sizes: `max(max((${componentViewport?.width || "100vw"} - 16px) / 2, 50px), 140px)`,
              ...toResponsiveImage(vl9A8iu89)
            }} className="framer-1tcpiak" layoutDependency={layoutDependency} layoutId="T82bH08ce" {...addPropertyOverrides({
              ph_fOP53d: {
                background: {
                  alt: "",
                  fit: "fill",
                  loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 0 + (0 * (((componentViewport?.height || 340) - 0 - 8) / 2) + 0) + 0 + (((componentViewport?.height || 340) - 0 - 8) / 2 * 1 + 0 - 0 - (Math.max(0, (((componentViewport?.height || 340) - 0 - 8) / 2 * 1 + 0 - 0 - 0) / 1) * 1 + 0) + 0 + 0)),
                  sizes: `max(max((${componentViewport?.width || "100vw"} - 8px) / 2, 50px), 110px)`,
                  ...toResponsiveImage(vl9A8iu89)
                }
              }
            }, baseVariant, gestureVariant)} />}</MotionDivWithFX>, <MotionDivWithFX __framer__animate={{
            transition: transition3
          }} __framer__animateOnce __framer__enter={animation} __framer__exit={animation2} __framer__styleAppearEffectEnabled __framer__threshold={0.5} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-14yu70y" data-framer-name="delivery" layoutDependency={layoutDependency} layoutId="L4Gg_cnSypXFz9JIUy" style={{
            backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))",
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8
          }} variants={{
            ph_fOP53d: {
              borderBottomLeftRadius: 4,
              borderBottomRightRadius: 4,
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4
            }
          }}>{<Image background={{
              alt: "",
              fit: "fill",
              loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 0 + (0 * (((componentViewport?.height || 364) - 0 - 16) / 2) + 0) + 0 + 0),
              sizes: `max(max((${componentViewport?.width || "100vw"} - 16px) / 2, 50px), 140px)`,
              ...toResponsiveImage(aXbZBwTww)
            }} className="framer-12hq529" layoutDependency={layoutDependency} layoutId="Lz8eCPyJF" {...addPropertyOverrides({
              ph_fOP53d: {
                background: {
                  alt: "",
                  fit: "fill",
                  loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 0 + (0 * (((componentViewport?.height || 340) - 0 - 8) / 2) + 0) + 0 + (((componentViewport?.height || 340) - 0 - 8) / 2 * 1 + 0 - 0 - (Math.max(0, (((componentViewport?.height || 340) - 0 - 8) / 2 * 1 + 0 - 0 - 0) / 1) * 1 + 0) + 0 + 0)),
                  sizes: `max(max((${componentViewport?.width || "100vw"} - 8px) / 2, 50px), 110px)`,
                  ...toResponsiveImage(aXbZBwTww)
                }
              }
            }, baseVariant, gestureVariant)} />}</MotionDivWithFX>, <MotionDivWithFX __framer__animate={{
            transition: transition4
          }} __framer__animateOnce __framer__enter={animation} __framer__exit={animation3} __framer__styleAppearEffectEnabled __framer__threshold={0.5} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-19s9gri" data-framer-name="delivery" layoutDependency={layoutDependency} layoutId="L4Gg_cnSyWImtVY6aI" style={{
            backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))",
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8
          }} variants={{
            ph_fOP53d: {
              borderBottomLeftRadius: 4,
              borderBottomRightRadius: 4,
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4
            }
          }}>{<Image background={{
              alt: "",
              fit: "fill",
              loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 0 + (1 * (((componentViewport?.height || 364) - 0 - 16) / 2) + 16) + 0 + 0),
              sizes: `max(max((${componentViewport?.width || "100vw"} - 16px) / 2, 50px), 140px)`,
              ...toResponsiveImage(zE_4GLWQJ)
            }} className="framer-1hugk13" layoutDependency={layoutDependency} layoutId="R9muS2oYB" {...addPropertyOverrides({
              ph_fOP53d: {
                background: {
                  alt: "",
                  fit: "fill",
                  loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 0 + (1 * (((componentViewport?.height || 340) - 0 - 8) / 2) + 8) + 0 + (((componentViewport?.height || 340) - 0 - 8) / 2 * 1 + 0 - 0 - (Math.max(0, (((componentViewport?.height || 340) - 0 - 8) / 2 * 1 + 0 - 0 - 0) / 1) * 1 + 0) + 0 + 0)),
                  sizes: `max(max((${componentViewport?.width || "100vw"} - 8px) / 2, 50px), 110px)`,
                  ...toResponsiveImage(zE_4GLWQJ)
                }
              }
            }, baseVariant, gestureVariant)} />}</MotionDivWithFX>, <MotionDivWithFX __framer__animate={{
            transition: transition5
          }} __framer__animateOnce __framer__enter={animation} __framer__exit={animation4} __framer__styleAppearEffectEnabled __framer__threshold={0.5} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-yzu0yq" data-framer-name="delivery" layoutDependency={layoutDependency} layoutId="L4Gg_cnSyvcKXR3IDx" style={{
            backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))",
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8
          }} variants={{
            ph_fOP53d: {
              borderBottomLeftRadius: 4,
              borderBottomRightRadius: 4,
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4
            }
          }}>{<Image background={{
              alt: "",
              fit: "fill",
              loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 0 + (1 * (((componentViewport?.height || 364) - 0 - 16) / 2) + 16) + 0 + 0),
              sizes: `max(max((${componentViewport?.width || "100vw"} - 16px) / 2, 50px), 140px)`,
              ...toResponsiveImage(QZqik0i9a)
            }} className="framer-1gf3j5p" layoutDependency={layoutDependency} layoutId="YATBUKijO" {...addPropertyOverrides({
              ph_fOP53d: {
                background: {
                  alt: "",
                  fit: "fill",
                  loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 0 + (1 * (((componentViewport?.height || 340) - 0 - 8) / 2) + 8) + 0 + (((componentViewport?.height || 340) - 0 - 8) / 2 * 1 + 0 - 0 - (Math.max(0, (((componentViewport?.height || 340) - 0 - 8) / 2 * 1 + 0 - 0 - 0) / 1) * 1 + 0) + 0 + 0)),
                  sizes: `max(max((${componentViewport?.width || "100vw"} - 8px) / 2, 50px), 110px)`,
                  ...toResponsiveImage(QZqik0i9a)
                }
              }
            }, baseVariant, gestureVariant)} />}</MotionDivWithFX>]
        })}</Transition>}</Variants>}</LayoutGroup>;
});
var css = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-lftUM.framer-95j8eq, .framer-lftUM .framer-95j8eq { display: block; }", ".framer-lftUM.framer-fjqs5u { display: grid; gap: 16px 16px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 431px; }", ".framer-lftUM .framer-1mrft6, .framer-lftUM .framer-19s9gri, .framer-lftUM .framer-yzu0yq { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: 174px; justify-content: flex-end; justify-self: start; min-width: 140px; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }", ".framer-lftUM .framer-1tcpiak, .framer-lftUM .framer-12hq529, .framer-lftUM .framer-1hugk13, .framer-lftUM .framer-1gf3j5p { flex: 1 0 0px; height: 1px; position: relative; width: 100%; }", ".framer-lftUM .framer-14yu70y { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: 174px; justify-content: flex-end; justify-self: start; min-width: 140px; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }", ".framer-lftUM.framer-v-146mc6t.framer-fjqs5u { gap: 8px 8px; height: 340px; width: 320px; }", ".framer-lftUM.framer-v-146mc6t .framer-1mrft6, .framer-lftUM.framer-v-146mc6t .framer-14yu70y, .framer-lftUM.framer-v-146mc6t .framer-19s9gri, .framer-lftUM.framer-v-146mc6t .framer-yzu0yq { height: 100%; min-width: 110px; }"];
var FramerZuPfGTShB = withCSS(Component, css, "framer-lftUM");
var ZuPfGTShB_default = FramerZuPfGTShB;
FramerZuPfGTShB.displayName = "animation products";
FramerZuPfGTShB.defaultProps = {
  height: 364,
  width: 431
};
addPropertyControls(FramerZuPfGTShB, {
  variant: {
    options: ["L4Gg_cnSy", "ph_fOP53d"],
    optionTitles: ["Variant 1", "Variant 2"],
    title: "Variant",
    type: ControlType.Enum
  },
  vl9A8iu89: {
    title: "Image 1",
    type: ControlType.ResponsiveImage
  },
  aXbZBwTww: {
    title: "Image 2",
    type: ControlType.ResponsiveImage
  },
  zE_4GLWQJ: {
    title: "Image 3",
    type: ControlType.ResponsiveImage
  },
  QZqik0i9a: {
    title: "Image 4",
    type: ControlType.ResponsiveImage
  }
});
addFonts(FramerZuPfGTShB, [{
  explicitInter: true,
  fonts: []
}], {
  supportsExplicitInterCodegen: true
});
var __FramerMetadata__ = {
  "exports": {
    "default": {
      "type": "reactComponent",
      "name": "FramerZuPfGTShB",
      "slots": [],
      "annotations": {
        "framerAutoSizeImages": "true",
        "framerIntrinsicWidth": "431",
        "framerDisplayContentsDiv": "false",
        "framerContractVersion": "1",
        "framerIntrinsicHeight": "364",
        "framerColorSyntax": "true",
        "framerImmutableVariables": "true",
        "framerComponentViewportWidth": "true",
        "framerVariables": '{"vl9A8iu89":"image1","aXbZBwTww":"image2","zE_4GLWQJ":"image3","QZqik0i9a":"image4"}',
        "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"ph_fOP53d":{"layout":["fixed","fixed"]}}}'
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
var _OriginalComponent = ZuPfGTShB_default;
function AnimationproductsWrapped(props) {
  var _variant = useVariant(props.variant);
  var _inner = (_variant !== undefined) ? { ...props, variant: _variant } : props;
  return _ctxJsx(ContextProviders, { children: _ctxJsx(_OriginalComponent, _inner) });
}
Object.assign(AnimationproductsWrapped, _OriginalComponent);
export {  __FramerMetadata__,  AnimationproductsWrapped as default   };