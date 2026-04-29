"use client"
// http-url:https://framerusercontent.com/modules/pXnP043LLKqjhBjTBVUH/2SidYqAoJb3TIsWyLK2h/IPAXg69bN.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, getFontsFromSharedStyle, RichText, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "@proofly-framer/runtime";
import { LayoutGroup, motion, MotionConfigContext } from "@proofly-framer/runtime";
import * as React from "react";

// http-url:https://framerusercontent.com/modules/1yPBes2MOQpyJo6DFDOk/MdZClTJzdIorZJNcVjTw/UDEB09jjg.js
import { fontStore } from "@proofly-framer/runtime";
import { jsx as _ctxJsx } from "react/jsx-runtime";
import { ContextProviders, useVariant } from "@proofly-framer/runtime";
fontStore.loadFonts(["CUSTOM;Haffer Regular"]);
var fonts = [{
  explicitInter: true,
  fonts: [{
    cssFamilyName: "Haffer Regular",
    source: "custom",
    style: "normal",
    uiFamilyName: "Haffer",
    url: "https://framerusercontent.com/assets/tAGQcvN09kwW2QjPLqLO197UqBQ.woff",
    weight: "430"
  }]
}];
var css = ['.framer-6hVw8 .framer-styles-preset-1p8b08q:not(.rich-text-wrapper), .framer-6hVw8 .framer-styles-preset-1p8b08q.rich-text-wrapper p { --framer-font-family: "Haffer Regular", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 430; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, #eaeaeb); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; }', '@media (max-width: 810px) and (min-width: 510px) { .framer-6hVw8 .framer-styles-preset-1p8b08q:not(.rich-text-wrapper), .framer-6hVw8 .framer-styles-preset-1p8b08q.rich-text-wrapper p { --framer-font-family: "Haffer Regular", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 430; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, #eaeaeb); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }', '@media (max-width: 509px) and (min-width: 0px) { .framer-6hVw8 .framer-styles-preset-1p8b08q:not(.rich-text-wrapper), .framer-6hVw8 .framer-styles-preset-1p8b08q.rich-text-wrapper p { --framer-font-family: "Haffer Regular", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 430; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, #eaeaeb); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }'];
var className = "framer-6hVw8";

// http-url:https://framerusercontent.com/modules/pXnP043LLKqjhBjTBVUH/2SidYqAoJb3TIsWyLK2h/IPAXg69bN.js
var cycleOrder = ["eUCuq9PHb", "bEE6lKb1U", "tbV1q6kn3", "fqOJSwX2h"];
var serializationHash = "framer-bwa64";
var variantClassNames = {
  bEE6lKb1U: "framer-v-pg5tal",
  eUCuq9PHb: "framer-v-1196wzk",
  fqOJSwX2h: "framer-v-kcevoj",
  tbV1q6kn3: "framer-v-aece5m"
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
  "Mobility Brand": "eUCuq9PHb",
  "phone - mobility brand": "tbV1q6kn3",
  "phone - service provider": "fqOJSwX2h",
  "Service Provider": "bEE6lKb1U"
};
var getProps = ({
  height,
  id,
  width,
  ...props
}) => {
  return {
    ...props,
    variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "eUCuq9PHb"
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
    defaultVariant: "eUCuq9PHb",
    variant,
    variantClassNames
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const ref1 = React.useRef(null);
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [className];
  const componentViewport = useComponentViewport();
  return <LayoutGroup id={layoutId ?? defaultLayoutId}>{<Variants animate={variants} initial={false}>{<Transition value={transition1}>{_jsx(motion.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx(serializationHash, ...sharedStyleClassNames, "framer-1196wzk", className2, classNames),
          "data-framer-name": "Mobility Brand",
          layoutDependency,
          layoutId: "eUCuq9PHb",
          ref: ref ?? ref1,
          style: {
            background: "radial-gradient(100% 115.99999999999999% at 9.9% 8.4%, rgb(66, 111, 173) 0%, rgb(46, 62, 84) 100%)",
            borderBottomLeftRadius: 21,
            borderBottomRightRadius: 21,
            borderTopLeftRadius: 21,
            borderTopRightRadius: 21,
            boxShadow: "0.39809593676181976px 0.39809593676181976px 0.5629926728941875px -0.9375px rgba(0, 0, 0, 0.24093), 1.207253071552259px 1.207253071552259px 1.7073136670057811px -1.875px rgba(0, 0, 0, 0.22758), 3.1913267607422307px 3.1913267607422307px 4.51321758700586px -2.8125px rgba(0, 0, 0, 0.19484), 10px 10px 14.142135623730951px -3.75px rgba(0, 0, 0, 0.0825)",
            ...style
          },
          variants: {
            fqOJSwX2h: {
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10
            },
            tbV1q6kn3: {
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10
            }
          },
          ...addPropertyOverrides({
            bEE6lKb1U: {
              "data-framer-name": "Service Provider"
            },
            fqOJSwX2h: {
              "data-framer-name": "phone - service provider"
            },
            tbV1q6kn3: {
              "data-framer-name": "phone - mobility brand"
            }
          }, baseVariant, gestureVariant),
          children: _jsx(motion.div, {
            className: "framer-poat9c",
            "data-framer-name": "token content",
            layoutDependency,
            layoutId: "PoUGGfele",
            style: {
              backgroundColor: "rgb(45, 63, 84)",
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20
            },
            variants: {
              fqOJSwX2h: {
                borderBottomLeftRadius: 9,
                borderBottomRightRadius: 9,
                borderTopLeftRadius: 9,
                borderTopRightRadius: 9
              },
              tbV1q6kn3: {
                borderBottomLeftRadius: 9,
                borderBottomRightRadius: 9,
                borderTopLeftRadius: 9,
                borderTopRightRadius: 9
              }
            },
            children: <RichText __fromCanvasComponent className="framer-10whw5z" data-framer-name="Workflows for secure access" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="JdUT5UJE0" style={{
              "--extracted-r6o4lv": "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))"
            }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides({
              bEE6lKb1U: {
                children: <>{_jsx(motion.p, {
                    className: "framer-styles-preset-1p8b08q",
                    "data-styles-preset": "UDEB09jjg",
                    style: {
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))"
                    },
                    children: "Service Partner"
                  })}</>
              },
              fqOJSwX2h: {
                children: <>{_jsx(motion.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-font-size": "12px",
                      "--framer-line-height": "120%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))"
                    },
                    children: "Service Partner"
                  })}</>,
                fonts: ["CUSTOM;Haffer Regular"]
              },
              tbV1q6kn3: {
                children: <>{_jsx(motion.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-font-size": "12px",
                      "--framer-line-height": "120%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))"
                    },
                    children: "Hardware Band"
                  })}</>,
                fonts: ["CUSTOM;Haffer Regular"]
              }
            }, baseVariant, gestureVariant)}>{<>{_jsx(motion.p, {
                  className: "framer-styles-preset-1p8b08q",
                  "data-styles-preset": "UDEB09jjg",
                  style: {
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))"
                  },
                  children: "Hardware Brand"
                })}</>}</RichText>
          })
        })}</Transition>}</Variants>}</LayoutGroup>;
});
var css2 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-bwa64.framer-198sdlf, .framer-bwa64 .framer-198sdlf { display: block; }", ".framer-bwa64.framer-1196wzk { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 1px; position: relative; width: 200px; }", ".framer-bwa64 .framer-poat9c { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 8px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }", ".framer-bwa64 .framer-10whw5z { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-bwa64.framer-1196wzk, .framer-bwa64 .framer-poat9c { gap: 0px; } .framer-bwa64.framer-1196wzk > *, .framer-bwa64 .framer-poat9c > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-bwa64.framer-1196wzk > :first-child, .framer-bwa64 .framer-poat9c > :first-child { margin-top: 0px; } .framer-bwa64.framer-1196wzk > :last-child, .framer-bwa64 .framer-poat9c > :last-child { margin-bottom: 0px; } }", ".framer-bwa64.framer-v-aece5m.framer-1196wzk, .framer-bwa64.framer-v-kcevoj.framer-1196wzk { width: 100px; }", ".framer-bwa64.framer-v-aece5m .framer-poat9c, .framer-bwa64.framer-v-kcevoj .framer-poat9c { padding: 12px; }", ".framer-bwa64.framer-v-aece5m .framer-10whw5z { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-bwa64.framer-v-kcevoj .framer-10whw5z { order: 0; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ...css];
var FramerIPAXg69bN = withCSS(Component, css2, "framer-bwa64");
var IPAXg69bN_default = FramerIPAXg69bN;
FramerIPAXg69bN.displayName = "token";
FramerIPAXg69bN.defaultProps = {
  height: 37,
  width: 200
};
addPropertyControls(FramerIPAXg69bN, {
  variant: {
    options: ["eUCuq9PHb", "bEE6lKb1U", "tbV1q6kn3", "fqOJSwX2h"],
    optionTitles: ["Mobility Brand", "Service Provider", "phone - mobility brand", "phone - service provider"],
    title: "Variant",
    type: ControlType.Enum
  }
});
addFonts(FramerIPAXg69bN, [{
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
    unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
    url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
    weight: "400"
  }, {
    family: "Haffer Regular",
    source: "custom",
    url: "https://framerusercontent.com/assets/tAGQcvN09kwW2QjPLqLO197UqBQ.woff"
  }]
}, ...getFontsFromSharedStyle(fonts)], {
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
      "name": "FramerIPAXg69bN",
      "slots": [],
      "annotations": {
        "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"bEE6lKb1U":{"layout":["fixed","auto"]},"tbV1q6kn3":{"layout":["fixed","auto"]},"fqOJSwX2h":{"layout":["fixed","auto"]}}}',
        "framerImmutableVariables": "true",
        "framerComponentViewportWidth": "true",
        "framerIntrinsicHeight": "37",
        "framerDisplayContentsDiv": "false",
        "framerContractVersion": "1",
        "framerIntrinsicWidth": "200"
      }
    },
    "__FramerMetadata__": {
      "type": "variable"
    }
  }
};
var _OriginalComponent = IPAXg69bN_default;
function TokenWrapped(props) {
  var _variant = useVariant(props.variant);
  var _inner = (_variant !== undefined) ? { ...props, variant: _variant } : props;
  return _ctxJsx(ContextProviders, { children: _ctxJsx(_OriginalComponent, _inner) });
}
Object.assign(TokenWrapped, _OriginalComponent);
export {  __FramerMetadata__,  TokenWrapped as default   };