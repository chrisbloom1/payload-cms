"use client"
// http-url:https://framerusercontent.com/modules/9RixVEx4vugpMY3ZAikb/XLUeRK2FEfVdMrYWmMU8/Gt7tOVoI8.js
import { jsx as _jsx2, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls as addPropertyControls2, ControlType as ControlType2, cx as cx2, getFonts, useComponentViewport, useLocaleInfo, useVariantState, withCSS as withCSS2, withFX } from "@proofly-framer/runtime";
import { LayoutGroup, motion as motion2, MotionConfigContext } from "@proofly-framer/runtime";
import * as React2 from "react";
import { useRef } from "react";

// Extracted SVG assets
const __svg_1 = '<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 5.5 5.25 L 0 10.5" fill="transparent" height="10.5px" id="pTO_zwTXv" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(13.75 6.75)" width="5.5px"/><path d="M 14.25 0 L 0 0" fill="transparent" height="1px" id="Jh7NTfV71" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(4.75 12)" width="14.25px"/></svg>';


// http-url:https://framerusercontent.com/modules/gGXLFANbZFKf2qU8bbVL/uQjjbN7Yn6nBRqTZdwzU/HoKrrnQcM.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addPropertyControls, ControlType, cx, motion, useSVGTemplate, withCSS } from "@proofly-framer/runtime";
import * as React from "react";
import { forwardRef as forwardRef2 } from "react";
import { jsx as _ctxJsx } from "react/jsx-runtime";
import { ContextProviders, useVariant } from "@proofly-framer/runtime";
var mask = "var(--framer-icon-mask)";
var Base = forwardRef2(function (props, ref) {
  return <svg {...props} ref={ref}>{props.children}</svg>;
});
var MotionSVG = motion.create(Base);
var SVG = forwardRef2((props, ref) => {
  const {
    animated,
    layoutId,
    children,
    ...rest
  } = props;
  return animated ? <MotionSVG {...rest} layoutId={layoutId} ref={ref}>{children}</MotionSVG> : <svg {...rest} ref={ref}>{children}</svg>;
});
var svg = __svg_1;
var getProps = ({
  dots,
  height,
  id,
  stroke,
  width,
  width1,
  ...props
}) => {
  return {
    ...props,
    BKVe8Pgvw: dots ?? props.BKVe8Pgvw ?? 1,
    fICyAUQY1: stroke ?? props.fICyAUQY1 ?? "rgb(0, 0, 0)",
    lKf_CQTz5: width1 ?? props.lKf_CQTz5 ?? 1.5
  };
};
var Component = React.forwardRef(function (props, ref) {
  const {
    style,
    className,
    layoutId,
    variant,
    fICyAUQY1,
    lKf_CQTz5,
    BKVe8Pgvw,
    ...restProps
  } = getProps(props);
  const href = useSVGTemplate("1173457374", svg);
  return <SVG {...restProps} className={cx("framer-EcgqK", className)} layoutId={layoutId} ref={ref} role="presentation" style={{
    "--1335ju": lKf_CQTz5,
    "--18mrqx2": fICyAUQY1,
    ...style
  }} viewBox="0 0 24 24">{<use href={href} />}</SVG>;
});
var css = [`.framer-EcgqK { -webkit-mask: ${mask}; aspect-ratio: 1; display: block; mask: ${mask}; width: 24px; }`];
var Icon = withCSS(Component, css, "framer-EcgqK");
Icon.displayName = "Arrow Right";
var HoKrrnQcM_default = Icon;
addPropertyControls(Icon, {
  fICyAUQY1: {
    defaultValue: "rgb(0, 0, 0)",
    hidden: false,
    title: "Stroke",
    type: ControlType.Color
  },
  lKf_CQTz5: {
    defaultValue: 1.5,
    displayStepper: true,
    hidden: false,
    max: 4,
    min: 0,
    step: 0.5,
    title: "Width",
    type: ControlType.Number
  },
  BKVe8Pgvw: {
    defaultValue: 1,
    displayStepper: true,
    hidden: true,
    max: 4,
    min: 1,
    title: "Dots",
    type: ControlType.Number
  }
});

// http-url:https://framerusercontent.com/modules/9RixVEx4vugpMY3ZAikb/XLUeRK2FEfVdMrYWmMU8/Gt7tOVoI8.js
var ArrowRightFonts = getFonts(HoKrrnQcM_default);
var MotionDivWithFX = withFX(motion2.div);
var enabledGestures = {
  tJO1VfHJS: {
    hover: true,
    pressed: true
  }
};
var cycleOrder = ["tJO1VfHJS", "ar7bekWWr", "dsPvK_DXI", "y18hq9FYJ", "iXeV6vlqK", "X6iS2wszV"];
var serializationHash = "framer-SYDst";
var variantClassNames = {
  ar7bekWWr: "framer-v-18ltk2z",
  dsPvK_DXI: "framer-v-red3y4",
  iXeV6vlqK: "framer-v-1klvup4",
  tJO1VfHJS: "framer-v-1mwlbjn",
  X6iS2wszV: "framer-v-rw8jig",
  y18hq9FYJ: "framer-v-107ndk"
};
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach(variant => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = {
  delay: 0,
  duration: 0.2,
  ease: [0.44, 0, 0.56, 1],
  type: "tween"
};
var transition2 = {
  delay: 0,
  duration: 1,
  ease: [0, 0, 1, 1],
  type: "tween"
};
var animation = {
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
var transformTemplate1 = (_, t) => `translateX(-50%) ${t}`;
var Transition = ({
  value,
  children
}) => {
  const config = React2.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React2.useMemo(() => ({
    ...config,
    transition
  }), [JSON.stringify(transition)]);
  return <MotionConfigContext.Provider value={contextValue}>{children}</MotionConfigContext.Provider>;
};
var Variants = motion2.create(React2.Fragment);
var humanReadableVariantMap = {
  Default: "tJO1VfHJS",
  Disabled: "dsPvK_DXI",
  Error: "iXeV6vlqK",
  Loading: "ar7bekWWr",
  Off: "X6iS2wszV",
  Success: "y18hq9FYJ"
};
var getProps2 = ({
  height,
  id,
  width,
  ...props
}) => {
  return {
    ...props,
    variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "tJO1VfHJS"
  };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component2 = React2.forwardRef(function (props, ref) {
  const fallbackRef = useRef(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React2.useId();
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
  } = getProps2(props);
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
    defaultVariant: "tJO1VfHJS",
    enabledGestures,
    ref: refBinding,
    variant,
    variantClassNames
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx2(serializationHash, ...sharedStyleClassNames);
  const isDisplayed = () => {
    if (baseVariant === "ar7bekWWr") return false;
    return true;
  };
  const isDisplayed1 = () => {
    if (baseVariant === "ar7bekWWr") return true;
    return false;
  };
  return <LayoutGroup id={layoutId ?? defaultLayoutId}>{<Variants animate={variants} initial={false}>{<Transition value={transition1}>{_jsxs(motion2.button, {
          ...restProps,
          ...gestureHandlers,
          className: cx2(scopingClassNames, "framer-1mwlbjn", className, classNames),
          "data-framer-name": "Default",
          "data-reset": "button",
          layoutDependency,
          layoutId: "tJO1VfHJS",
          ref: refBinding,
          style: {
            backgroundColor: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
            borderBottomLeftRadius: 48,
            borderBottomRightRadius: 48,
            borderTopLeftRadius: 48,
            borderTopRightRadius: 48,
            opacity: 1,
            ...style
          },
          variants: {
            "tJO1VfHJS-hover": {
              backgroundColor: "rgba(34, 23, 66, 0.8)",
              opacity: 1
            },
            "tJO1VfHJS-pressed": {
              opacity: 1
            },
            dsPvK_DXI: {
              opacity: 0.5
            },
            iXeV6vlqK: {
              backgroundColor: "rgba(255, 34, 68, 0.15)",
              opacity: 1
            },
            X6iS2wszV: {
              opacity: 1
            },
            y18hq9FYJ: {
              opacity: 1
            }
          },
          ...addPropertyOverrides({
            "tJO1VfHJS-hover": {
              "data-framer-name": void 0
            },
            "tJO1VfHJS-pressed": {
              "data-framer-name": void 0
            },
            ar7bekWWr: {
              "data-framer-name": "Loading"
            },
            dsPvK_DXI: {
              "data-framer-name": "Disabled"
            },
            iXeV6vlqK: {
              "data-framer-name": "Error"
            },
            X6iS2wszV: {
              "data-framer-name": "Off"
            },
            y18hq9FYJ: {
              "data-framer-name": "Success"
            }
          }, baseVariant, gestureVariant),
          children: [isDisplayed() && <HoKrrnQcM_default animated className="framer-1d4hh8a" layoutDependency={layoutDependency} layoutId="stTA1CK7Q" style={{
            "--1335ju": 2,
            "--18mrqx2": "var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248))",
            "--3it368": 1
          }} />, isDisplayed1() && _jsx2(motion2.div, {
            className: "framer-hlxjwk",
            "data-framer-name": "Spinner",
            layoutDependency,
            layoutId: "xM3xi3YSt",
            style: {
              mask: "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add",
              WebkitMask: "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add"
            },
            children: <MotionDivWithFX __framer__loop={animation} __framer__loopEffectEnabled __framer__loopRepeatDelay={0} __framer__loopRepeatType="loop" __framer__loopTransition={transition2} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-1um2mt8" data-framer-name="Conic" layoutDependency={layoutDependency} layoutId="E3Tx3VZVY" style={{
              background: "conic-gradient(from 180deg at 50% 50%, rgb(68, 204, 255) 0deg, rgb(68, 204, 255) 360deg)",
              backgroundColor: "rgb(68, 204, 255)",
              mask: "none",
              WebkitMask: "none"
            }} variants={{
              ar7bekWWr: {
                background: "conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 7.208614864864882deg, rgb(255, 255, 255) 342deg)",
                backgroundColor: "rgba(0, 0, 0, 0)",
                mask: "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add",
                WebkitMask: "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add"
              }
            }}>{_jsx2(motion2.div, {
                className: "framer-xxsh49",
                "data-framer-name": "Rounding",
                layoutDependency,
                layoutId: "lbN_cmEg5",
                style: {
                  backgroundColor: "rgb(255, 255, 255)",
                  borderBottomLeftRadius: 1,
                  borderBottomRightRadius: 1,
                  borderTopLeftRadius: 1,
                  borderTopRightRadius: 1
                },
                transformTemplate: transformTemplate1
              })}</MotionDivWithFX>
          })]
        })}</Transition>}</Variants>}</LayoutGroup>;
});
var css2 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-SYDst.framer-1gcj6s, .framer-SYDst .framer-1gcj6s { display: block; }", ".framer-SYDst.framer-1mwlbjn { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 48px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 48px; }", ".framer-SYDst .framer-1d4hh8a { flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }", ".framer-SYDst .framer-hlxjwk { aspect-ratio: 1 / 1; flex: none; gap: 10px; height: var(--framer-aspect-ratio-supported, 20px); overflow: hidden; position: relative; width: 20px; }", ".framer-SYDst .framer-1um2mt8 { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }", ".framer-SYDst .framer-xxsh49 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 2px); left: 50%; overflow: visible; position: absolute; top: 0px; width: 2px; }", ".framer-SYDst.framer-v-18ltk2z.framer-1mwlbjn, .framer-SYDst.framer-v-red3y4.framer-1mwlbjn, .framer-SYDst.framer-v-107ndk.framer-1mwlbjn, .framer-SYDst.framer-v-1klvup4.framer-1mwlbjn, .framer-SYDst.framer-v-rw8jig.framer-1mwlbjn { cursor: unset; }", ".framer-SYDst.framer-v-18ltk2z .framer-1um2mt8 { overflow: hidden; }"];
var FramerGt7tOVoI8 = withCSS2(Component2, css2, "framer-SYDst");
var Gt7tOVoI8_default = FramerGt7tOVoI8;
FramerGt7tOVoI8.displayName = "sendButton";
FramerGt7tOVoI8.defaultProps = {
  height: 48,
  width: 48
};
addPropertyControls2(FramerGt7tOVoI8, {
  variant: {
    options: ["tJO1VfHJS", "ar7bekWWr", "dsPvK_DXI", "y18hq9FYJ", "iXeV6vlqK", "X6iS2wszV"],
    optionTitles: ["Default", "Loading", "Disabled", "Success", "Error", "Off"],
    title: "Variant",
    type: ControlType2.Enum
  }
});
addFonts(FramerGt7tOVoI8, [{
  explicitInter: true,
  fonts: []
}, ...ArrowRightFonts], {
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
      "name": "FramerGt7tOVoI8",
      "slots": [],
      "annotations": {
        "framerImmutableVariables": "true",
        "framerAutoSizeImages": "true",
        "framerDisplayContentsDiv": "false",
        "framerIntrinsicWidth": "48",
        "framerContractVersion": "1",
        "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"ar7bekWWr":{"layout":["fixed","fixed"]},"dsPvK_DXI":{"layout":["fixed","fixed"]},"y18hq9FYJ":{"layout":["fixed","fixed"]},"iXeV6vlqK":{"layout":["fixed","fixed"]},"X6iS2wszV":{"layout":["fixed","fixed"]},"mt75ZBpZt":{"layout":["fixed","fixed"]},"xclVB3L2P":{"layout":["fixed","fixed"]}}}',
        "framerColorSyntax": "true",
        "framerComponentViewportWidth": "true",
        "framerIntrinsicHeight": "48"
      }
    },
    "__FramerMetadata__": {
      "type": "variable"
    }
  }
};
var _OriginalComponent = Gt7tOVoI8_default;
function SendButtonWrapped(props) {
  var _variant = useVariant(props.variant);
  var _inner = (_variant !== undefined) ? { ...props, variant: _variant } : props;
  return _ctxJsx(ContextProviders, { children: _ctxJsx(_OriginalComponent, _inner) });
}
Object.assign(SendButtonWrapped, _OriginalComponent);
export {  __FramerMetadata__,  SendButtonWrapped as default   };