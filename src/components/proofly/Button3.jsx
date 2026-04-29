"use client"
// http-url:https://framerusercontent.com/modules/aG0Ruv9DVugAeYhibu5R/N6ZDkrNIFZapfWsUxHBU/sK5M6Rxy6.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, getFontsFromSharedStyle, RichText, useComponentViewport, useLocaleInfo, useVariantState, withCSS, withFX } from "@proofly-framer/runtime";
import { LayoutGroup, motion, MotionConfigContext } from "@proofly-framer/runtime";
import * as React from "react";
import { useRef } from "react";

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

// http-url:https://framerusercontent.com/modules/aG0Ruv9DVugAeYhibu5R/N6ZDkrNIFZapfWsUxHBU/sK5M6Rxy6.js
var MotionDivWithFX = withFX(motion.div);
var cycleOrder = ["wdK9rk8QF", "YRLvUFvwT", "PMf_Bh51J", "B7LwZ9oXj", "IFkdb9s1E"];
var serializationHash = "framer-3HcY5";
var variantClassNames = {
  B7LwZ9oXj: "framer-v-qf3ks3",
  IFkdb9s1E: "framer-v-l1l9wv",
  PMf_Bh51J: "framer-v-ih9005",
  wdK9rk8QF: "framer-v-153g4vl",
  YRLvUFvwT: "framer-v-1lfcbcd"
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
  Default: "wdK9rk8QF",
  Disabled: "PMf_Bh51J",
  Error: "IFkdb9s1E",
  Loading: "YRLvUFvwT",
  Success: "B7LwZ9oXj"
};
var getProps = ({
  height,
  id,
  width,
  ...props
}) => {
  return {
    ...props,
    variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "wdK9rk8QF"
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
    className: className2,
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
    cycleOrder,
    defaultVariant: "wdK9rk8QF",
    ref: refBinding,
    variant,
    variantClassNames
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [className];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  const isDisplayed = () => {
    if (baseVariant === "YRLvUFvwT") return false;
    return true;
  };
  const isDisplayed1 = () => {
    if (baseVariant === "YRLvUFvwT") return true;
    return false;
  };
  return <LayoutGroup id={layoutId ?? defaultLayoutId}>{<Variants animate={variants} initial={false}>{<Transition value={transition1}>{_jsxs(motion.button, {
          ...restProps,
          ...gestureHandlers,
          className: cx(scopingClassNames, "framer-153g4vl", className2, classNames),
          "data-framer-name": "Default",
          "data-reset": "button",
          layoutDependency,
          layoutId: "wdK9rk8QF",
          ref: refBinding,
          style: {
            backgroundColor: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            opacity: 1,
            ...style
          },
          variants: {
            B7LwZ9oXj: {
              opacity: 1
            },
            IFkdb9s1E: {
              backgroundColor: "rgba(255, 34, 68, 0.15)",
              opacity: 1
            },
            PMf_Bh51J: {
              opacity: 0.5
            }
          },
          ...addPropertyOverrides({
            B7LwZ9oXj: {
              "data-framer-name": "Success"
            },
            IFkdb9s1E: {
              "data-framer-name": "Error"
            },
            PMf_Bh51J: {
              "data-framer-name": "Disabled"
            },
            YRLvUFvwT: {
              "data-framer-name": "Loading"
            }
          }, baseVariant, gestureVariant),
          children: [isDisplayed() && <RichText __fromCanvasComponent className="framer-2zcoif" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="cgR7_Jj1e" style={{
            "--extracted-r6o4lv": "var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248))",
            "--framer-link-text-color": "rgb(0, 153, 255)",
            "--framer-link-text-decoration": "underline"
          }} variants={{
            B7LwZ9oXj: {
              "--extracted-r6o4lv": "rgb(255, 255, 255)"
            },
            IFkdb9s1E: {
              "--extracted-r6o4lv": "rgb(255, 34, 68)"
            }
          }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
            B7LwZ9oXj: {
              children: <>{_jsx(motion.p, {
                  style: {
                    "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                    "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                    "--framer-font-size": "14px",
                    "--framer-font-weight": "600",
                    "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))"
                  },
                  children: "Thank you"
                })}</>,
              fonts: ["Inter-SemiBold"]
            },
            IFkdb9s1E: {
              children: <>{_jsx(motion.p, {
                  style: {
                    "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                    "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                    "--framer-font-size": "14px",
                    "--framer-font-weight": "600",
                    "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 34, 68))"
                  },
                  children: "Something went wrong"
                })}</>,
              fonts: ["Inter-SemiBold"]
            }
          }, baseVariant, gestureVariant)}>{<>{_jsx(motion.p, {
                className: "framer-styles-preset-mnimbo",
                "data-styles-preset": "QkI8Aa5rN",
                style: {
                  "--framer-text-color": "var(--extracted-r6o4lv, var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)))"
                },
                children: "Apply"
              })}</>}</RichText>, isDisplayed1() && _jsx(motion.div, {
            className: "framer-qzik0o",
            "data-framer-name": "Spinner",
            layoutDependency,
            layoutId: "OYjfCj8XG",
            style: {
              mask: "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add",
              WebkitMask: "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add"
            },
            children: <MotionDivWithFX __framer__loop={animation} __framer__loopEffectEnabled __framer__loopRepeatDelay={0} __framer__loopRepeatType="loop" __framer__loopTransition={transition2} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-p9rf9t" data-framer-name="Conic" layoutDependency={layoutDependency} layoutId="MJXthAhqr" style={{
              background: "conic-gradient(from 180deg at 50% 50%, rgb(68, 204, 255) 0deg, rgb(68, 204, 255) 360deg)",
              backgroundColor: "rgb(68, 204, 255)",
              mask: "none",
              WebkitMask: "none"
            }} variants={{
              YRLvUFvwT: {
                background: "conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 7.208614864864882deg, rgb(255, 255, 255) 342deg)",
                backgroundColor: "rgba(0, 0, 0, 0)",
                mask: "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add",
                WebkitMask: "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add"
              }
            }}>{_jsx(motion.div, {
                className: "framer-pg9abh",
                "data-framer-name": "Rounding",
                layoutDependency,
                layoutId: "R8bVRD06a",
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
var css2 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-3HcY5.framer-14nlehr, .framer-3HcY5 .framer-14nlehr { display: block; }", ".framer-3HcY5.framer-153g4vl { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 40px; justify-content: center; overflow: visible; padding: 0px 16px 0px 16px; position: relative; width: min-content; }", ".framer-3HcY5 .framer-2zcoif { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }", ".framer-3HcY5 .framer-qzik0o { aspect-ratio: 1 / 1; flex: none; gap: 10px; height: var(--framer-aspect-ratio-supported, 20px); overflow: hidden; position: relative; width: 20px; }", ".framer-3HcY5 .framer-p9rf9t { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }", ".framer-3HcY5 .framer-pg9abh { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 2px); left: 50%; overflow: visible; position: absolute; top: 0px; width: 2px; }", ".framer-3HcY5.framer-v-1lfcbcd .framer-p9rf9t { overflow: hidden; }", ...css];
var FramersK5M6Rxy6 = withCSS(Component, css2, "framer-3HcY5");
var sK5M6Rxy6_default = FramersK5M6Rxy6;
FramersK5M6Rxy6.displayName = "Button 3";
FramersK5M6Rxy6.defaultProps = {
  height: 40,
  width: 72.5
};
addPropertyControls(FramersK5M6Rxy6, {
  variant: {
    options: ["wdK9rk8QF", "YRLvUFvwT", "PMf_Bh51J", "B7LwZ9oXj", "IFkdb9s1E"],
    optionTitles: ["Default", "Loading", "Disabled", "Success", "Error"],
    title: "Variant",
    type: ControlType.Enum
  }
});
addFonts(FramersK5M6Rxy6, [{
  explicitInter: true,
  fonts: [{
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
    url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
    url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+1F00-1FFF",
    url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0370-03FF",
    url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
    url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
    url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
    url: "https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2",
    weight: "600"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
    url: "https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2",
    weight: "600"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+1F00-1FFF",
    url: "https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2",
    weight: "600"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0370-03FF",
    url: "https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2",
    weight: "600"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
    url: "https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2",
    weight: "600"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    url: "https://framerusercontent.com/assets/yDtI2UI8XcEg1W2je9XPN3Noo.woff2",
    weight: "600"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
    url: "https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2",
    weight: "600"
  }]
}, ...getFontsFromSharedStyle(fonts)], {
  supportsExplicitInterCodegen: true
});
var __FramerMetadata__ = {
  "exports": {
    "default": {
      "type": "reactComponent",
      "name": "FramersK5M6Rxy6",
      "slots": [],
      "annotations": {
        "framerAutoSizeImages": "true",
        "framerIntrinsicHeight": "40",
        "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["auto","fixed"]},"YRLvUFvwT":{"layout":["auto","fixed"]},"PMf_Bh51J":{"layout":["auto","fixed"]},"B7LwZ9oXj":{"layout":["auto","fixed"]},"IFkdb9s1E":{"layout":["auto","fixed"]}}}',
        "framerContractVersion": "1",
        "framerIntrinsicWidth": "72.5",
        "framerComponentViewportWidth": "true",
        "framerColorSyntax": "true",
        "framerDisplayContentsDiv": "false",
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
var _OriginalComponent = sK5M6Rxy6_default;
function Button3Wrapped(props) {
  var _variant = useVariant(props.variant);
  var _inner = (_variant !== undefined) ? { ...props, variant: _variant } : props;
  return _ctxJsx(ContextProviders, { children: _ctxJsx(_OriginalComponent, _inner) });
}
Object.assign(Button3Wrapped, _OriginalComponent);
export {  __FramerMetadata__,  Button3Wrapped as default   };