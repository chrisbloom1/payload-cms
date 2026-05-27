"use client"
// http-url:https://framerusercontent.com/modules/1WH3cOPeHx85Dh864kVX/wLPpPHf8nCvd79n0kEH2/qCoYf_YMs.js
import { jsx as _jsx2, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts as addFonts2, addPropertyControls as addPropertyControls2, ComponentViewportProvider, ControlType as ControlType2, cx as cx2, getFonts, ResolveLinks, useComponentViewport as useComponentViewport2, useLocaleInfo as useLocaleInfo2, useRouter, useVariantState as useVariantState2, withCSS as withCSS2 } from "@proofly-framer/runtime";
import { LayoutGroup as LayoutGroup2, motion as motion2, MotionConfigContext as MotionConfigContext2 } from "@proofly-framer/runtime";
import * as React2 from "react";

// http-url:https://framerusercontent.com/modules/i2IT9dOQLGMB4XcsfifL/8StubFIyJPoLD80VJ5Mj/cjAIGZ7bO.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, getFontsFromSharedStyle, Link, RichText, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "@proofly-framer/runtime";
import { LayoutGroup, motion, MotionConfigContext } from "@proofly-framer/runtime";
import * as React from "react";

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

// http-url:https://framerusercontent.com/modules/i2IT9dOQLGMB4XcsfifL/8StubFIyJPoLD80VJ5Mj/cjAIGZ7bO.js
var enabledGestures = {
  W6pjYC2ge: {
    hover: true
  }
};
var cycleOrder = ["W6pjYC2ge", "m2T2PnX3b"];
var serializationHash = "framer-yES1V";
var variantClassNames = {
  m2T2PnX3b: "framer-v-16p84lo",
  W6pjYC2ge: "framer-v-ysmzw2"
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
var Variants = motion.create(React.Fragment);
var humanReadableVariantMap = {
  "Variant 2": "m2T2PnX3b",
  Default: "W6pjYC2ge"
};
var getProps = ({
  height,
  id,
  link,
  title,
  width,
  ...props
}) => {
  var _ref, _humanReadableVariantMap_props_variant, _ref1;
  return {
    ...props,
    da_sRoliP: (_ref = title !== null && title !== void 0 ? title : props.da_sRoliP) !== null && _ref !== void 0 ? _ref : "Home",
    NKxlkEiAh: link !== null && link !== void 0 ? link : props.NKxlkEiAh,
    variant: (_ref1 = (_humanReadableVariantMap_props_variant = humanReadableVariantMap[props.variant]) !== null && _humanReadableVariantMap_props_variant !== void 0 ? _humanReadableVariantMap_props_variant : props.variant) !== null && _ref1 !== void 0 ? _ref1 : "W6pjYC2ge"
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
    da_sRoliP,
    NKxlkEiAh,
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
    defaultVariant: "W6pjYC2ge",
    enabledGestures,
    variant,
    variantClassNames
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const ref1 = React.useRef(null);
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [className];
  const componentViewport = useComponentViewport();
  return <LayoutGroup id={layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId}>{<Variants animate={variants} initial={false}>{<Transition value={transition1}>{<Link href={NKxlkEiAh} openInNewTab={false}>{_jsx(motion.a, {
            ...restProps,
            ...gestureHandlers,
            className: `${cx(serializationHash, ...sharedStyleClassNames, "framer-ysmzw2", className2, classNames)} framer-3uyeef`,
            "data-framer-name": "Default",
            layoutDependency,
            layoutId: "W6pjYC2ge",
            ref: ref !== null && ref !== void 0 ? ref : ref1,
            style: {
              backdropFilter: "blur(40px)",
              borderBottomLeftRadius: 32,
              borderBottomRightRadius: 32,
              borderTopLeftRadius: 32,
              borderTopRightRadius: 32,
              WebkitBackdropFilter: "blur(40px)",
              ...style
            },
            variants: {
              m2T2PnX3b: {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0
              }
            },
            ...addPropertyOverrides({
              "W6pjYC2ge-hover": {
                "data-framer-name": void 0
              },
              m2T2PnX3b: {
                "data-framer-name": "Variant 2"
              }
            }, baseVariant, gestureVariant),
            children: <RichText __fromCanvasComponent className="framer-bxk5mn" data-framer-name="Home" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="w3jxZvVmw" style={{
              "--extracted-r6o4lv": "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))",
              "--framer-paragraph-spacing": "0px"
            }} text={da_sRoliP} verticalAlignment="center" withExternalLayout {...addPropertyOverrides({
              m2T2PnX3b: {
                children: <>{_jsx(motion.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                      "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                      "--framer-font-size": "28px",
                      "--framer-line-height": "120%",
                      "--framer-text-alignment": "left",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))"
                    },
                    children: "Home"
                  })}</>,
                fonts: ["CUSTOM;Haffer Bold"]
              }
            }, baseVariant, gestureVariant)}>{<>{_jsx(motion.p, {
                  className: "framer-styles-preset-mnimbo",
                  "data-styles-preset": "QkI8Aa5rN",
                  style: {
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))"
                  },
                  children: "Home"
                })}</>}</RichText>
          })}</Link>}</Transition>}</Variants>}</LayoutGroup>;
});
var css2 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-yES1V.framer-3uyeef, .framer-yES1V .framer-3uyeef { display: block; }", ".framer-yES1V.framer-ysmzw2 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 4px 10px 4px 10px; position: relative; text-decoration: none; width: min-content; }", ".framer-yES1V .framer-bxk5mn { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-yES1V.framer-ysmzw2 { gap: 0px; } .framer-yES1V.framer-ysmzw2 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-yES1V.framer-ysmzw2 > :first-child { margin-left: 0px; } .framer-yES1V.framer-ysmzw2 > :last-child { margin-right: 0px; } }", ".framer-yES1V.framer-v-16p84lo.framer-ysmzw2 { cursor: unset; padding: 4px 0px 4px 0px; }", ...css];
var FramercjAIGZ7bO = withCSS(Component, css2, "framer-yES1V");
var cjAIGZ7bO_default = FramercjAIGZ7bO;
FramercjAIGZ7bO.displayName = "Navigation/Link";
FramercjAIGZ7bO.defaultProps = {
  height: 25,
  width: 64
};
addPropertyControls(FramercjAIGZ7bO, {
  variant: {
    options: ["W6pjYC2ge", "m2T2PnX3b"],
    optionTitles: ["Default", "Variant 2"],
    title: "Variant",
    type: ControlType.Enum
  },
  da_sRoliP: {
    defaultValue: "Home",
    displayTextArea: false,
    title: "Title",
    type: ControlType.String
  },
  NKxlkEiAh: {
    title: "Link",
    type: ControlType.Link
  }
});
addFonts(FramercjAIGZ7bO, [{
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
    family: "Haffer Bold",
    source: "custom",
    url: "https://framerusercontent.com/assets/eRqmC6W9PktN8mUcnwel9B6wmPs.woff"
  }]
}, ...getFontsFromSharedStyle(fonts)], {
  supportsExplicitInterCodegen: true
});

// http-url:https://framerusercontent.com/modules/1WH3cOPeHx85Dh864kVX/wLPpPHf8nCvd79n0kEH2/qCoYf_YMs.js
var NavigationLinkFonts = getFonts(cjAIGZ7bO_default);
var cycleOrder2 = ["wAumL15_s", "CzX2r29jw"];
var serializationHash2 = "framer-7CyAf";
var variantClassNames2 = {
  CzX2r29jw: "framer-v-1run053",
  wAumL15_s: "framer-v-cus498"
};
function addPropertyOverrides2(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0 ? void 0 : variants.forEach(variant => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition12 = {
  damping: 60,
  delay: 0,
  mass: 1,
  stiffness: 500,
  type: "spring"
};
var Transition2 = ({
  value,
  children
}) => {
  const config = React2.useContext(MotionConfigContext2);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React2.useMemo(() => ({
    ...config,
    transition
  }), [JSON.stringify(transition)]);
  return <MotionConfigContext2.Provider value={contextValue}>{children}</MotionConfigContext2.Provider>;
};
var Variants2 = motion2.create(React2.Fragment);
var humanReadableVariantMap2 = {
  "Variant 1": "wAumL15_s",
  "Variant 2": "CzX2r29jw"
};
var getProps2 = ({
  height,
  id,
  width,
  ...props
}) => {
  var _humanReadableVariantMap_props_variant, _ref;
  return {
    ...props,
    variant: (_ref = (_humanReadableVariantMap_props_variant = humanReadableVariantMap2[props.variant]) !== null && _humanReadableVariantMap_props_variant !== void 0 ? _humanReadableVariantMap_props_variant : props.variant) !== null && _ref !== void 0 ? _ref : "wAumL15_s"
  };
};
var createLayoutDependency2 = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component2 = React2.forwardRef(function (props, ref) {
  const {
    activeLocale,
    setLocale
  } = useLocaleInfo2();
  const {
    style,
    className: className2,
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
  } = useVariantState2({
    cycleOrder: cycleOrder2,
    defaultVariant: "wAumL15_s",
    variant,
    variantClassNames: variantClassNames2
  });
  const layoutDependency = createLayoutDependency2(props, variants);
  const ref1 = React2.useRef(null);
  const router = useRouter();
  const defaultLayoutId = React2.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport2();
  return <LayoutGroup2 id={layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId}>{<Variants2 animate={variants} initial={false}>{<Transition2 value={transition12}>{_jsxs(motion2.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx2(serializationHash2, ...sharedStyleClassNames, "framer-cus498", className2, classNames),
          "data-framer-name": "Variant 1",
          layoutDependency,
          layoutId: "wAumL15_s",
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: {
            borderBottomLeftRadius: 32,
            borderBottomRightRadius: 32,
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
            ...style
          },
          ...addPropertyOverrides2({
            CzX2r29jw: {
              "data-framer-name": "Variant 2"
            }
          }, baseVariant, gestureVariant),
          children: [<ResolveLinks links={[{
            href: {
              webPageId: "augiA20Il"
            },
            implicitPathVariables: void 0
          }, {
            href: {
              webPageId: "augiA20Il"
            },
            implicitPathVariables: void 0
          }]}>{resolvedLinks => <ComponentViewportProvider height={25} y={((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + (6 + (((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.height) || 37) - 12 - 25) / 2)} {...addPropertyOverrides2({
              CzX2r29jw: {
                y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 16 + 0
              }
            }, baseVariant, gestureVariant)}>{_jsx2(motion2.div, {
                className: "framer-18tx4up-container",
                layoutDependency,
                layoutId: "TFto6nviJ-container",
                children: _jsx2(cjAIGZ7bO_default, {
                  da_sRoliP: "Company",
                  height: "100%",
                  id: "TFto6nviJ",
                  layoutId: "TFto6nviJ",
                  NKxlkEiAh: resolvedLinks[0],
                  variant: "W6pjYC2ge",
                  width: "100%",
                  ...addPropertyOverrides2({
                    CzX2r29jw: {
                      NKxlkEiAh: resolvedLinks[1],
                      variant: "m2T2PnX3b"
                    }
                  }, baseVariant, gestureVariant)
                })
              })}</ComponentViewportProvider>}</ResolveLinks>, <ResolveLinks links={[{
            href: {
              webPageId: "Qy9zYxbIQ"
            },
            implicitPathVariables: void 0
          }, {
            href: {
              webPageId: "Qy9zYxbIQ"
            },
            implicitPathVariables: void 0
          }]}>{resolvedLinks1 => <ComponentViewportProvider height={25} y={((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + (6 + (((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.height) || 37) - 12 - 25) / 2)} {...addPropertyOverrides2({
              CzX2r29jw: {
                y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 16 + 31
              }
            }, baseVariant, gestureVariant)}>{_jsx2(motion2.div, {
                className: "framer-wtgkor-container",
                layoutDependency,
                layoutId: "mgFmhxDR4-container",
                children: _jsx2(cjAIGZ7bO_default, {
                  da_sRoliP: "Stories",
                  height: "100%",
                  id: "mgFmhxDR4",
                  layoutId: "mgFmhxDR4",
                  NKxlkEiAh: resolvedLinks1[0],
                  variant: "W6pjYC2ge",
                  width: "100%",
                  ...addPropertyOverrides2({
                    CzX2r29jw: {
                      NKxlkEiAh: resolvedLinks1[1],
                      variant: "m2T2PnX3b"
                    }
                  }, baseVariant, gestureVariant)
                })
              })}</ComponentViewportProvider>}</ResolveLinks>, <ResolveLinks links={[{
            href: {
              webPageId: "VNMiAd7Jw"
            },
            implicitPathVariables: void 0
          }, {
            href: {
              webPageId: "VNMiAd7Jw"
            },
            implicitPathVariables: void 0
          }]}>{resolvedLinks2 => <ComponentViewportProvider height={25} y={((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + (6 + (((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.height) || 37) - 12 - 25) / 2)} {...addPropertyOverrides2({
              CzX2r29jw: {
                y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 16 + 62
              }
            }, baseVariant, gestureVariant)}>{_jsx2(motion2.div, {
                className: "framer-e72i62-container",
                layoutDependency,
                layoutId: "KdYQIhEhQ-container",
                children: _jsx2(cjAIGZ7bO_default, {
                  da_sRoliP: "Newsroom",
                  height: "100%",
                  id: "KdYQIhEhQ",
                  layoutId: "KdYQIhEhQ",
                  NKxlkEiAh: resolvedLinks2[0],
                  variant: "W6pjYC2ge",
                  width: "100%",
                  ...addPropertyOverrides2({
                    CzX2r29jw: {
                      NKxlkEiAh: resolvedLinks2[1],
                      variant: "m2T2PnX3b"
                    }
                  }, baseVariant, gestureVariant)
                })
              })}</ComponentViewportProvider>}</ResolveLinks>, <ComponentViewportProvider height={25} y={((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + (6 + (((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.height) || 37) - 12 - 25) / 2)} {...addPropertyOverrides2({
            CzX2r29jw: {
              y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 16 + 93
            }
          }, baseVariant, gestureVariant)}>{_jsx2(motion2.div, {
              className: "framer-fkpsgr-container",
              layoutDependency,
              layoutId: "SRAcwlTQL-container",
              children: _jsx2(cjAIGZ7bO_default, {
                da_sRoliP: "Contact Us",
                height: "100%",
                id: "SRAcwlTQL",
                layoutId: "SRAcwlTQL",
                variant: "W6pjYC2ge",
                width: "100%",
                ...addPropertyOverrides2({
                  CzX2r29jw: {
                    variant: "m2T2PnX3b"
                  }
                }, baseVariant, gestureVariant)
              })
            })}</ComponentViewportProvider>, <ComponentViewportProvider height={25} y={((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + (6 + (((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.height) || 37) - 12 - 25) / 2)} {...addPropertyOverrides2({
            CzX2r29jw: {
              y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 16 + 124
            }
          }, baseVariant, gestureVariant)}>{_jsx2(motion2.div, {
              className: "framer-15ks8cj-container",
              layoutDependency,
              layoutId: "OJzIJsp_O-container",
              children: _jsx2(cjAIGZ7bO_default, {
                da_sRoliP: "Login",
                height: "100%",
                id: "OJzIJsp_O",
                layoutId: "OJzIJsp_O",
                variant: "W6pjYC2ge",
                width: "100%",
                ...addPropertyOverrides2({
                  CzX2r29jw: {
                    variant: "m2T2PnX3b"
                  }
                }, baseVariant, gestureVariant)
              })
            })}</ComponentViewportProvider>]
        })}</Transition2>}</Variants2>}</LayoutGroup2>;
});
var css3 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-7CyAf.framer-1t7dwmf, .framer-7CyAf .framer-1t7dwmf { display: block; }", ".framer-7CyAf.framer-cus498 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: visible; padding: 6px; position: relative; width: min-content; }", ".framer-7CyAf .framer-18tx4up-container, .framer-7CyAf .framer-wtgkor-container, .framer-7CyAf .framer-e72i62-container, .framer-7CyAf .framer-fkpsgr-container, .framer-7CyAf .framer-15ks8cj-container { flex: none; height: auto; position: relative; width: auto; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-7CyAf.framer-cus498 { gap: 0px; } .framer-7CyAf.framer-cus498 > * { margin: 0px; margin-left: calc(6px / 2); margin-right: calc(6px / 2); } .framer-7CyAf.framer-cus498 > :first-child { margin-left: 0px; } .framer-7CyAf.framer-cus498 > :last-child { margin-right: 0px; } }", ".framer-7CyAf.framer-v-1run053.framer-cus498 { align-content: flex-start; align-items: flex-start; flex-direction: column; padding: 16px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-7CyAf.framer-v-1run053.framer-cus498 { gap: 0px; } .framer-7CyAf.framer-v-1run053.framer-cus498 > * { margin: 0px; margin-bottom: calc(6px / 2); margin-top: calc(6px / 2); } .framer-7CyAf.framer-v-1run053.framer-cus498 > :first-child { margin-top: 0px; } .framer-7CyAf.framer-v-1run053.framer-cus498 > :last-child { margin-bottom: 0px; } }"];
var FramerqCoYf_YMs = withCSS2(Component2, css3, "framer-7CyAf");
var qCoYf_YMs_default = FramerqCoYf_YMs;
FramerqCoYf_YMs.displayName = "Navigation/Menu";
FramerqCoYf_YMs.defaultProps = {
  height: 37,
  width: 465
};
addPropertyControls2(FramerqCoYf_YMs, {
  variant: {
    options: ["wAumL15_s", "CzX2r29jw"],
    optionTitles: ["Variant 1", "Variant 2"],
    title: "Variant",
    type: ControlType2.Enum
  }
});
addFonts2(FramerqCoYf_YMs, [{
  explicitInter: true,
  fonts: []
}, ...NavigationLinkFonts], {
  supportsExplicitInterCodegen: true
});
var __FramerMetadata__ = {
  "exports": {
    "default": {
      "type": "reactComponent",
      "name": "FramerqCoYf_YMs",
      "slots": [],
      "annotations": {
        "framerContractVersion": "1",
        "framerIntrinsicHeight": "37",
        "framerImmutableVariables": "true",
        "framerComponentViewportWidth": "true",
        "framerDisplayContentsDiv": "false",
        "framerIntrinsicWidth": "465",
        "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["auto","auto"]},"CzX2r29jw":{"layout":["auto","auto"]}}}'
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
var _OriginalComponent = qCoYf_YMs_default;
function NavigationMenuWrapped(props) {
  var _variant = useVariant(props.variant);
  var _inner = (_variant !== undefined) ? { ...props, variant: _variant } : props;
  return _ctxJsx(ContextProviders, { children: _ctxJsx(_OriginalComponent, _inner) });
}
Object.assign(NavigationMenuWrapped, _OriginalComponent);
export {  __FramerMetadata__,  NavigationMenuWrapped as default   };