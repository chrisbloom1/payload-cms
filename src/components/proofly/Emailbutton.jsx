"use client"
// http-url:https://framerusercontent.com/modules/913zN0EIOqPTAu8rtrIx/ZaG20zr5DWXeh4i8v2Nr/f48WTEfsx.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, Link, RichText, useActiveVariantCallback, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "@proofly-framer/runtime";
import { LayoutGroup, motion, MotionConfigContext } from "@proofly-framer/runtime";
import * as React from "react";
import { useRef } from "react";
import { jsx as _ctxJsx } from "react/jsx-runtime";
import { ContextProviders, useVariant } from "@proofly-framer/runtime";
var enabledGestures = {
  XUv1GLAEE: {
    hover: true
  }
};
var cycleOrder = ["XUv1GLAEE", "dhEgiHgLb"];
var serializationHash = "framer-OWcvO";
var variantClassNames = {
  dhEgiHgLb: "framer-v-ynvu88",
  XUv1GLAEE: "framer-v-gvv7g9"
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
  default: "XUv1GLAEE",
  small: "dhEgiHgLb"
};
var getProps = ({
  backgroundColor,
  height,
  id,
  sendEmail,
  textColor,
  width,
  ...props
}) => {
  return {
    ...props,
    IBwW_0EaH: textColor ?? props.IBwW_0EaH ?? "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
    MM29L_WuY: sendEmail ?? props.MM29L_WuY,
    roS9AHtKf: backgroundColor ?? props.roS9AHtKf ?? "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))",
    variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "XUv1GLAEE"
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
    MM29L_WuY,
    roS9AHtKf,
    IBwW_0EaH,
    P7ZHYgc9nyZBQGZIRL,
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
    defaultVariant: "XUv1GLAEE",
    enabledGestures,
    ref: refBinding,
    variant,
    variantClassNames
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const {
    activeVariantCallback,
    delay
  } = useActiveVariantCallback(baseVariant);
  const onTap1f8esqy = activeVariantCallback(async (...args) => {
    setGestureState({
      isPressed: false
    });
    if (MM29L_WuY) {
      const res = await MM29L_WuY(...args);
      if (res === false) return false;
    }
  });
  const sharedStyleClassNames = [];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  const isDisplayed = () => {
    if (baseVariant === "dhEgiHgLb") return false;
    return true;
  };
  return <LayoutGroup id={layoutId ?? defaultLayoutId}>{<Variants animate={variants} initial={false}>{<Transition value={transition1}>{<Link href={{
          webPageId: "lfwaIwuua"
        }} motionChild nodeId="XUv1GLAEE" openInNewTab={false} scopeId="f48WTEfsx">{_jsxs(motion.a, {
            ...restProps,
            ...gestureHandlers,
            className: `${cx(scopingClassNames, "framer-gvv7g9", className, classNames)} framer-1u8ymvh`,
            "data-framer-name": "default",
            "data-highlight": true,
            layoutDependency,
            layoutId: "XUv1GLAEE",
            onTap: onTap1f8esqy,
            ref: refBinding,
            style: {
              backgroundColor: roS9AHtKf,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              ...style
            },
            variants: {
              "XUv1GLAEE-hover": {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0
              },
              dhEgiHgLb: {
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4
              }
            },
            ...addPropertyOverrides({
              "XUv1GLAEE-hover": {
                "data-framer-name": void 0
              },
              dhEgiHgLb: {
                "data-framer-name": "small"
              }
            }, baseVariant, gestureVariant),
            children: [<RichText __fromCanvasComponent className="framer-14esaww" data-framer-name="Join the waitlist" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="J3k4OEeX7" style={{
              "--extracted-r6o4lv": "var(--variable-reference-IBwW_0EaH-f48WTEfsx)",
              "--framer-paragraph-spacing": "0px",
              "--variable-reference-IBwW_0EaH-f48WTEfsx": IBwW_0EaH
            }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides({
              dhEgiHgLb: {
                children: <>{_jsx(motion.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-font-size": "14px",
                      "--framer-line-height": "120%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-IBwW_0EaH-f48WTEfsx))",
                      "--framer-text-transform": "uppercase"
                    },
                    children: "Plug into our network"
                  })}</>
              }
            }, baseVariant, gestureVariant)}>{<>{_jsx(motion.p, {
                  style: {
                    "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                    "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                    "--framer-font-size": "18px",
                    "--framer-line-height": "120%",
                    "--framer-text-alignment": "center",
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-IBwW_0EaH-f48WTEfsx))",
                    "--framer-text-transform": "uppercase"
                  },
                  children: "Plug into our network"
                })}</>}</RichText>, isDisplayed() && <RichText __fromCanvasComponent className="framer-y43e2z" data-framer-name="Join the waitlist" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="GUFDX2w2o" style={{
              "--extracted-r6o4lv": "var(--variable-reference-P7ZHYgc9n-yZBQGZIRL)",
              "--framer-paragraph-spacing": "0px",
              "--variable-reference-P7ZHYgc9n-yZBQGZIRL": P7ZHYgc9nyZBQGZIRL
            }} verticalAlignment="center" withExternalLayout>{<>{_jsx(motion.p, {
                  style: {
                    "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                    "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                    "--framer-font-size": "18px",
                    "--framer-line-height": "120%",
                    "--framer-text-alignment": "center",
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-P7ZHYgc9n-yZBQGZIRL))",
                    "--framer-text-transform": "uppercase"
                  },
                  children: "Plug into our network"
                })}</>}</RichText>]
          })}</Link>}</Transition>}</Variants>}</LayoutGroup>;
});
var css = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-OWcvO.framer-1u8ymvh, .framer-OWcvO .framer-1u8ymvh { display: block; }", ".framer-OWcvO.framer-gvv7g9 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 16px; position: relative; text-decoration: none; width: min-content; }", ".framer-OWcvO .framer-14esaww { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-OWcvO .framer-y43e2z { bottom: -24px; flex: none; height: auto; left: 16px; position: absolute; white-space: pre; width: auto; z-index: 1; }", ".framer-OWcvO.framer-v-ynvu88.framer-gvv7g9 { gap: 0px; padding: 8px; will-change: var(--framer-will-change-override, transform); }", ".framer-OWcvO.framer-v-ynvu88 .framer-14esaww { order: 0; }", ".framer-OWcvO.framer-v-gvv7g9.hover .framer-14esaww { position: absolute; right: 16px; top: -24px; z-index: 1; }", ".framer-OWcvO.framer-v-gvv7g9.hover .framer-y43e2z { bottom: unset; left: unset; position: relative; }"];
var Framerf48WTEfsx = withCSS(Component, css, "framer-OWcvO");
var f48WTEfsx_default = Framerf48WTEfsx;
Framerf48WTEfsx.displayName = "email button";
Framerf48WTEfsx.defaultProps = {
  height: 53.5,
  width: 254.5
};
addPropertyControls(Framerf48WTEfsx, {
  variant: {
    options: ["XUv1GLAEE", "dhEgiHgLb"],
    optionTitles: ["default", "small"],
    title: "Variant",
    type: ControlType.Enum
  },
  MM29L_WuY: {
    title: "Send Email",
    type: ControlType.EventHandler
  },
  roS9AHtKf: {
    defaultValue: 'var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))',
    title: "background color",
    type: ControlType.Color
  },
  IBwW_0EaH: {
    defaultValue: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
    title: "text color",
    type: ControlType.Color
  }
});
addFonts(Framerf48WTEfsx, [{
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
      "name": "Framerf48WTEfsx",
      "slots": [],
      "annotations": {
        "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["auto","auto"]},"dhEgiHgLb":{"layout":["auto","auto"]},"hTB5GOhb1":{"layout":["auto","auto"]}}}',
        "framerContractVersion": "1",
        "framerIntrinsicHeight": "53.5",
        "framerAutoSizeImages": "true",
        "framerIntrinsicWidth": "254.5",
        "framerVariables": '{"MM29L_WuY":"sendEmail","roS9AHtKf":"backgroundColor","IBwW_0EaH":"textColor"}',
        "framerComponentViewportWidth": "true",
        "framerDisplayContentsDiv": "false",
        "framerImmutableVariables": "true",
        "framerColorSyntax": "true"
      }
    },
    "__FramerMetadata__": {
      "type": "variable"
    }
  }
};
var _OriginalComponent = f48WTEfsx_default;
function EmailbuttonWrapped(props) {
  var _variant = useVariant(props.variant);
  var _inner = (_variant !== undefined) ? { ...props, variant: _variant } : props;
  return _ctxJsx(ContextProviders, { children: _ctxJsx(_OriginalComponent, _inner) });
}
Object.assign(EmailbuttonWrapped, _OriginalComponent);
export {  __FramerMetadata__,  EmailbuttonWrapped as default   };