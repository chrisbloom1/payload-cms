"use client"
// http-url:https://framerusercontent.com/modules/mttQ5c3MbdBSZ937Y0RA/rEmGyMavboJ3kdP5PBoP/LFfCExDTO.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, getFontsFromSharedStyle, RichText, useActiveVariantCallback, useComponentViewport, useLocaleInfo, useOnVariantChange, useVariantState, withCSS } from "@proofly-framer/runtime";
import { LayoutGroup, motion, MotionConfigContext } from "@proofly-framer/runtime";
import * as React from "react";
import { useRef } from "react";

// http-url:https://framerusercontent.com/modules/qy8eVo5TXcYP2TWH72Db/lnFwfHBmEXS5R0BdeKYE/ferGDeq75.js
import { fontStore } from "@proofly-framer/runtime";
import { jsx as _ctxJsx } from "react/jsx-runtime";
import { ContextProviders, useVariant } from "@proofly-framer/runtime";
fontStore.loadFonts(["CUSTOM;Haffer Regular", "CUSTOM;Haffer Bold", "CUSTOM;Haffer Bold Italic", "CUSTOM;Haffer Regular Italic"]);
var fonts = [{
  explicitInter: true,
  fonts: [{
    cssFamilyName: "Haffer Regular",
    source: "custom",
    style: "normal",
    uiFamilyName: "Haffer",
    url: "https://framerusercontent.com/assets/tAGQcvN09kwW2QjPLqLO197UqBQ.woff",
    weight: "430"
  }, {
    cssFamilyName: "Haffer Bold",
    source: "custom",
    style: "normal",
    uiFamilyName: "Haffer",
    url: "https://framerusercontent.com/assets/eRqmC6W9PktN8mUcnwel9B6wmPs.woff",
    weight: "790"
  }, {
    cssFamilyName: "Haffer Bold Italic",
    source: "custom",
    style: "italic",
    uiFamilyName: "Haffer",
    url: "https://framerusercontent.com/assets/nK8pUfSDH0nLIPBzC7czJktTfw.woff",
    weight: "790"
  }, {
    cssFamilyName: "Haffer Regular Italic",
    source: "custom",
    style: "italic",
    uiFamilyName: "Haffer",
    url: "https://framerusercontent.com/assets/q5d4DOSHctGYpqDsNH3ul4OVKic.woff",
    weight: "430"
  }]
}];
var css = ['.framer-z9vLR .framer-styles-preset-k8yxrn:not(.rich-text-wrapper), .framer-z9vLR .framer-styles-preset-k8yxrn.rich-text-wrapper p { --framer-font-family: "Haffer Regular", sans-serif; --framer-font-family-bold: "Haffer Bold", sans-serif; --framer-font-family-bold-italic: "Haffer Bold Italic", sans-serif; --framer-font-family-italic: "Haffer Regular Italic", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 430; --framer-font-weight-bold: 790; --framer-font-weight-bold-italic: 790; --framer-font-weight-italic: 430; --framer-letter-spacing: 0em; --framer-line-height: 130%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #eaeaeb; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; }', '@media (max-width: 1199px) and (min-width: 724px) { .framer-z9vLR .framer-styles-preset-k8yxrn:not(.rich-text-wrapper), .framer-z9vLR .framer-styles-preset-k8yxrn.rich-text-wrapper p { --framer-font-family: "Haffer Regular", sans-serif; --framer-font-family-bold: "Haffer Bold", sans-serif; --framer-font-family-bold-italic: "Haffer Bold Italic", sans-serif; --framer-font-family-italic: "Haffer Regular Italic", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 430; --framer-font-weight-bold: 790; --framer-font-weight-bold-italic: 790; --framer-font-weight-italic: 430; --framer-letter-spacing: 0em; --framer-line-height: 130%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #eaeaeb; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }', '@media (max-width: 723px) and (min-width: 0px) { .framer-z9vLR .framer-styles-preset-k8yxrn:not(.rich-text-wrapper), .framer-z9vLR .framer-styles-preset-k8yxrn.rich-text-wrapper p { --framer-font-family: "Haffer Regular", sans-serif; --framer-font-family-bold: "Haffer Bold", sans-serif; --framer-font-family-bold-italic: "Haffer Bold Italic", sans-serif; --framer-font-family-italic: "Haffer Regular Italic", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 430; --framer-font-weight-bold: 790; --framer-font-weight-bold-italic: 790; --framer-font-weight-italic: 430; --framer-letter-spacing: 0em; --framer-line-height: 130%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #eaeaeb; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }'];
var className = "framer-z9vLR";

// http-url:https://framerusercontent.com/modules/mttQ5c3MbdBSZ937Y0RA/rEmGyMavboJ3kdP5PBoP/LFfCExDTO.js
var cycleOrder = ["UpTCY6axe", "D3zLXKpLT", "LxrITL9ce", "Pt4DfzKJc", "ZgMJZBzTX", "Wt3gbkbFr", "TVyWY77xy", "LzE7p022E"];
var serializationHash = "framer-SMJe7";
var variantClassNames = {
  D3zLXKpLT: "framer-v-1mry6y1",
  LxrITL9ce: "framer-v-lzijez",
  LzE7p022E: "framer-v-14cuwci",
  Pt4DfzKJc: "framer-v-w4lbhh",
  TVyWY77xy: "framer-v-10cvvt8",
  UpTCY6axe: "framer-v-1xlm2xu",
  Wt3gbkbFr: "framer-v-1ft3cg5",
  ZgMJZBzTX: "framer-v-elrd7n"
};
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach(variant => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = {
  delay: 0,
  duration: 0.4,
  ease: [0.44, 0, 0.56, 1],
  type: "tween"
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
var humanReadableVariantMap = {
  "phone 1": "ZgMJZBzTX",
  "phone 2": "Wt3gbkbFr",
  "phone 3": "TVyWY77xy",
  "phone 4": "LzE7p022E",
  "Variant 1": "UpTCY6axe",
  "Variant 2": "D3zLXKpLT",
  "Variant 3": "LxrITL9ce",
  "Variant 4": "Pt4DfzKJc"
};
var Variants = motion.create(React.Fragment);
var getProps = ({
  color1,
  color2,
  height,
  id,
  width,
  ...props
}) => {
  return {
    ...props,
    mkLyGhWRQ: color1 ?? props.mkLyGhWRQ ?? "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
    ozbI8aBcS: color2 ?? props.ozbI8aBcS ?? "var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248))",
    variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "UpTCY6axe"
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
    mkLyGhWRQ,
    ozbI8aBcS,
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
    defaultVariant: "UpTCY6axe",
    ref: refBinding,
    variant,
    variantClassNames
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const {
    activeVariantCallback,
    delay
  } = useActiveVariantCallback(baseVariant);
  const onAppearhsvwlm = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("D3zLXKpLT", true), 3500);
  });
  const onAppear1fohord = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("LxrITL9ce", true), 3500);
  });
  const onAppear8cqabe = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("Pt4DfzKJc", true), 3500);
  });
  const onAppear1t71qdh = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("UpTCY6axe", true), 3500);
  });
  const onAppear1iefjlq = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("Wt3gbkbFr", true), 3500);
  });
  const onAppear191reph = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("TVyWY77xy", true), 3500);
  });
  const onAppear15dzuv = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("LzE7p022E", true), 3500);
  });
  const onAppear1ohl7r9 = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("ZgMJZBzTX", true), 3500);
  });
  const onTap1l6ke5l = activeVariantCallback(async (...args) => {
    setVariant("Wt3gbkbFr");
  });
  useOnVariantChange(baseVariant, {
    D3zLXKpLT: onAppear1fohord,
    default: onAppearhsvwlm,
    LxrITL9ce: onAppear8cqabe,
    LzE7p022E: onAppear1ohl7r9,
    Pt4DfzKJc: onAppear1t71qdh,
    TVyWY77xy: onAppear15dzuv,
    Wt3gbkbFr: onAppear191reph,
    ZgMJZBzTX: onAppear1iefjlq
  });
  const sharedStyleClassNames = [className];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return <LayoutGroup id={layoutId ?? defaultLayoutId}>{<Variants animate={variants} initial={false}>{<Transition value={transition1}>{_jsxs(motion.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx(scopingClassNames, "framer-1xlm2xu", className2, classNames),
          "data-framer-name": "Variant 1",
          "data-highlight": true,
          layoutDependency,
          layoutId: "UpTCY6axe",
          ref: refBinding,
          style: {
            ...style
          },
          ...addPropertyOverrides({
            D3zLXKpLT: {
              "data-framer-name": "Variant 2"
            },
            LxrITL9ce: {
              "data-framer-name": "Variant 3"
            },
            LzE7p022E: {
              "data-framer-name": "phone 4"
            },
            Pt4DfzKJc: {
              "data-framer-name": "Variant 4"
            },
            TVyWY77xy: {
              "data-framer-name": "phone 3"
            },
            Wt3gbkbFr: {
              "data-framer-name": "phone 2"
            },
            ZgMJZBzTX: {
              "data-framer-name": "phone 1"
            }
          }, baseVariant, gestureVariant),
          children: [_jsx(motion.div, {
            className: "framer-oh7j98",
            "data-framer-name": "Stack",
            layoutDependency,
            layoutId: "bhOKP8cp0",
            children: <RichText __fromCanvasComponent className="framer-hrspa4" data-framer-name="A security-first alternative to Okta" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="sbp4OrRXe" style={{
              "--extracted-r6o4lv": "var(--variable-reference-mkLyGhWRQ-LFfCExDTO)",
              "--variable-reference-mkLyGhWRQ-LFfCExDTO": mkLyGhWRQ
            }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
              LzE7p022E: {
                children: <>{_jsx(motion.p, {
                    dir: "auto",
                    style: {
                      "--font-selector": "Q1VTVE9NVjI7SGFmZmVyIEJvbGQ=",
                      "--framer-font-family": '"Haffer Bold", sans-serif',
                      "--framer-font-weight": "790",
                      "--framer-line-height": "130%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-mkLyGhWRQ-LFfCExDTO))"
                    },
                    children: "We help make"
                  })}</>,
                fonts: ["CUSTOMV2;Haffer Bold"]
              },
              TVyWY77xy: {
                children: <>{_jsx(motion.p, {
                    dir: "auto",
                    style: {
                      "--font-selector": "Q1VTVE9NVjI7SGFmZmVyIEJvbGQ=",
                      "--framer-font-family": '"Haffer Bold", sans-serif',
                      "--framer-font-weight": "790",
                      "--framer-line-height": "130%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-mkLyGhWRQ-LFfCExDTO))"
                    },
                    children: "We help make"
                  })}</>,
                fonts: ["CUSTOMV2;Haffer Bold"]
              },
              Wt3gbkbFr: {
                children: <>{_jsx(motion.p, {
                    dir: "auto",
                    style: {
                      "--font-selector": "Q1VTVE9NVjI7SGFmZmVyIEJvbGQ=",
                      "--framer-font-family": '"Haffer Bold", sans-serif',
                      "--framer-font-weight": "790",
                      "--framer-line-height": "130%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-mkLyGhWRQ-LFfCExDTO))"
                    },
                    children: "We help make"
                  })}</>,
                fonts: ["CUSTOMV2;Haffer Bold"]
              },
              ZgMJZBzTX: {
                children: <>{_jsx(motion.p, {
                    dir: "auto",
                    style: {
                      "--font-selector": "Q1VTVE9NVjI7SGFmZmVyIEJvbGQ=",
                      "--framer-font-family": '"Haffer Bold", sans-serif',
                      "--framer-font-weight": "790",
                      "--framer-line-height": "130%",
                      "--framer-text-alignment": "left",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-mkLyGhWRQ-LFfCExDTO))"
                    },
                    children: "We help make"
                  })}</>,
                fonts: ["CUSTOMV2;Haffer Bold"]
              }
            }, baseVariant, gestureVariant)}>{<>{_jsx(motion.p, {
                  className: "framer-styles-preset-k8yxrn",
                  "data-styles-preset": "ferGDeq75",
                  dir: "auto",
                  style: {
                    "--framer-text-alignment": "center",
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-mkLyGhWRQ-LFfCExDTO))"
                  },
                  children: "We help make"
                })}</>}</RichText>
          }), _jsx(motion.div, {
            className: "framer-175oaup",
            layoutDependency,
            layoutId: "r6RBmVyUM",
            style: {
              borderBottomLeftRadius: 4,
              borderBottomRightRadius: 4,
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4
            },
            children: _jsxs(motion.div, {
              className: "framer-2f8v2u",
              "data-framer-name": "tags",
              layoutDependency,
              layoutId: "fDdpXZyRC",
              style: {
                backgroundColor: mkLyGhWRQ,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0
              },
              variants: {
                D3zLXKpLT: {
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4
                },
                LxrITL9ce: {
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4
                },
                LzE7p022E: {
                  backgroundColor: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4
                },
                Pt4DfzKJc: {
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4
                },
                TVyWY77xy: {
                  backgroundColor: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4
                },
                Wt3gbkbFr: {
                  backgroundColor: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4
                },
                ZgMJZBzTX: {
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0
                }
              },
              ...addPropertyOverrides({
                Wt3gbkbFr: {
                  "data-highlight": true,
                  onTap: onTap1l6ke5l
                }
              }, baseVariant, gestureVariant),
              children: [_jsx(motion.div, {
                className: "framer-a4mpwi",
                "data-framer-name": "Stack",
                layoutDependency,
                layoutId: "ceMvZTuQk",
                style: {
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4
                },
                children: <RichText __fromCanvasComponent className="framer-1crzua0" data-framer-name="A security-first alternative to Okta" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="DnnuY_Kd8" style={{
                  "--extracted-r6o4lv": "var(--variable-reference-ozbI8aBcS-LFfCExDTO)",
                  "--variable-reference-ozbI8aBcS-LFfCExDTO": ozbI8aBcS
                }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
                  LzE7p022E: {
                    children: <>{_jsx(motion.p, {
                        dir: "auto",
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                          "--framer-font-family": '"Haffer Regular", sans-serif',
                          "--framer-font-weight": "430",
                          "--framer-line-height": "130%",
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ozbI8aBcS-LFfCExDTO))"
                        },
                        children: "Manufacturing"
                      })}</>,
                    fonts: ["CUSTOM;Haffer Regular"]
                  },
                  TVyWY77xy: {
                    children: <>{_jsx(motion.p, {
                        dir: "auto",
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                          "--framer-font-family": '"Haffer Regular", sans-serif',
                          "--framer-font-weight": "430",
                          "--framer-line-height": "130%",
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ozbI8aBcS-LFfCExDTO))"
                        },
                        children: "Manufacturing"
                      })}</>,
                    fonts: ["CUSTOM;Haffer Regular"]
                  },
                  Wt3gbkbFr: {
                    children: <>{_jsx(motion.p, {
                        dir: "auto",
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                          "--framer-font-family": '"Haffer Regular", sans-serif',
                          "--framer-font-weight": "430",
                          "--framer-line-height": "130%",
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ozbI8aBcS-LFfCExDTO))"
                        },
                        children: "Manufacturing"
                      })}</>,
                    fonts: ["CUSTOM;Haffer Regular"]
                  },
                  ZgMJZBzTX: {
                    children: <>{_jsx(motion.p, {
                        dir: "auto",
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                          "--framer-font-family": '"Haffer Regular", sans-serif',
                          "--framer-font-weight": "430",
                          "--framer-line-height": "130%",
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ozbI8aBcS-LFfCExDTO))"
                        },
                        children: "Manufacturing"
                      })}</>,
                    fonts: ["CUSTOM;Haffer Regular"]
                  }
                }, baseVariant, gestureVariant)}>{<>{_jsx(motion.p, {
                      className: "framer-styles-preset-k8yxrn",
                      "data-styles-preset": "ferGDeq75",
                      dir: "auto",
                      style: {
                        "--framer-text-alignment": "center",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ozbI8aBcS-LFfCExDTO))"
                      },
                      children: "Manufacturing"
                    })}</>}</RichText>
              }), _jsx(motion.div, {
                className: "framer-1kd4w50",
                "data-framer-name": "Stack",
                layoutDependency,
                layoutId: "u8aVSsQN6",
                style: {
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4
                },
                children: <RichText __fromCanvasComponent className="framer-137yp3r" data-framer-name="A security-first alternative to Okta" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="IP8iKfmLb" style={{
                  "--extracted-r6o4lv": "var(--variable-reference-ozbI8aBcS-LFfCExDTO)",
                  "--variable-reference-ozbI8aBcS-LFfCExDTO": ozbI8aBcS
                }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
                  LzE7p022E: {
                    children: <>{_jsx(motion.p, {
                        dir: "auto",
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                          "--framer-font-family": '"Haffer Regular", sans-serif',
                          "--framer-font-weight": "430",
                          "--framer-line-height": "130%",
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ozbI8aBcS-LFfCExDTO))"
                        },
                        children: "Warehousing"
                      })}</>,
                    fonts: ["CUSTOM;Haffer Regular"]
                  },
                  TVyWY77xy: {
                    children: <>{_jsx(motion.p, {
                        dir: "auto",
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                          "--framer-font-family": '"Haffer Regular", sans-serif',
                          "--framer-font-weight": "430",
                          "--framer-line-height": "130%",
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ozbI8aBcS-LFfCExDTO))"
                        },
                        children: "Warehousing"
                      })}</>,
                    fonts: ["CUSTOM;Haffer Regular"]
                  },
                  Wt3gbkbFr: {
                    children: <>{_jsx(motion.p, {
                        dir: "auto",
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                          "--framer-font-family": '"Haffer Regular", sans-serif',
                          "--framer-font-weight": "430",
                          "--framer-line-height": "130%",
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ozbI8aBcS-LFfCExDTO))"
                        },
                        children: "Warehousing"
                      })}</>,
                    fonts: ["CUSTOM;Haffer Regular"]
                  },
                  ZgMJZBzTX: {
                    children: <>{_jsx(motion.p, {
                        dir: "auto",
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                          "--framer-font-family": '"Haffer Regular", sans-serif',
                          "--framer-font-weight": "430",
                          "--framer-line-height": "130%",
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ozbI8aBcS-LFfCExDTO))"
                        },
                        children: "Warehousing"
                      })}</>,
                    fonts: ["CUSTOM;Haffer Regular"]
                  }
                }, baseVariant, gestureVariant)}>{<>{_jsx(motion.p, {
                      className: "framer-styles-preset-k8yxrn",
                      "data-styles-preset": "ferGDeq75",
                      dir: "auto",
                      style: {
                        "--framer-text-alignment": "center",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ozbI8aBcS-LFfCExDTO))"
                      },
                      children: "Warehousing"
                    })}</>}</RichText>
              }), _jsx(motion.div, {
                className: "framer-115y1me",
                "data-framer-name": "Stack",
                layoutDependency,
                layoutId: "aSv3mDUHx",
                style: {
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4
                },
                children: <RichText __fromCanvasComponent className="framer-lvst6n" data-framer-name="A security-first alternative to Okta" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="wk835TSHo" style={{
                  "--extracted-r6o4lv": "var(--variable-reference-ozbI8aBcS-LFfCExDTO)",
                  "--variable-reference-ozbI8aBcS-LFfCExDTO": ozbI8aBcS
                }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
                  LzE7p022E: {
                    children: <>{_jsx(motion.p, {
                        dir: "auto",
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                          "--framer-font-family": '"Haffer Regular", sans-serif',
                          "--framer-font-weight": "430",
                          "--framer-line-height": "130%",
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ozbI8aBcS-LFfCExDTO))"
                        },
                        children: "Assembly"
                      })}</>,
                    fonts: ["CUSTOM;Haffer Regular"]
                  },
                  TVyWY77xy: {
                    children: <>{_jsx(motion.p, {
                        dir: "auto",
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                          "--framer-font-family": '"Haffer Regular", sans-serif',
                          "--framer-font-weight": "430",
                          "--framer-line-height": "130%",
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ozbI8aBcS-LFfCExDTO))"
                        },
                        children: "Assembly"
                      })}</>,
                    fonts: ["CUSTOM;Haffer Regular"]
                  },
                  Wt3gbkbFr: {
                    children: <>{_jsx(motion.p, {
                        dir: "auto",
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                          "--framer-font-family": '"Haffer Regular", sans-serif',
                          "--framer-font-weight": "430",
                          "--framer-line-height": "130%",
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ozbI8aBcS-LFfCExDTO))"
                        },
                        children: "Assembly"
                      })}</>,
                    fonts: ["CUSTOM;Haffer Regular"]
                  },
                  ZgMJZBzTX: {
                    children: <>{_jsx(motion.p, {
                        dir: "auto",
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                          "--framer-font-family": '"Haffer Regular", sans-serif',
                          "--framer-font-weight": "430",
                          "--framer-line-height": "130%",
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ozbI8aBcS-LFfCExDTO))"
                        },
                        children: "Assembly"
                      })}</>,
                    fonts: ["CUSTOM;Haffer Regular"]
                  }
                }, baseVariant, gestureVariant)}>{<>{_jsx(motion.p, {
                      className: "framer-styles-preset-k8yxrn",
                      "data-styles-preset": "ferGDeq75",
                      dir: "auto",
                      style: {
                        "--framer-text-alignment": "center",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ozbI8aBcS-LFfCExDTO))"
                      },
                      children: "Assembly"
                    })}</>}</RichText>
              }), _jsx(motion.div, {
                className: "framer-12h77jk",
                "data-framer-name": "Stack",
                layoutDependency,
                layoutId: "Qiuf9XjFX",
                style: {
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4
                },
                children: <RichText __fromCanvasComponent className="framer-1q9m7ms" data-framer-name="A security-first alternative to Okta" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="UNzfr2Lmg" style={{
                  "--extracted-r6o4lv": "var(--variable-reference-ozbI8aBcS-LFfCExDTO)",
                  "--variable-reference-ozbI8aBcS-LFfCExDTO": ozbI8aBcS
                }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
                  LzE7p022E: {
                    children: <>{_jsx(motion.p, {
                        dir: "auto",
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                          "--framer-font-family": '"Haffer Regular", sans-serif',
                          "--framer-font-weight": "430",
                          "--framer-line-height": "130%",
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ozbI8aBcS-LFfCExDTO))"
                        },
                        children: "Logistics"
                      })}</>,
                    fonts: ["CUSTOM;Haffer Regular"]
                  },
                  TVyWY77xy: {
                    children: <>{_jsx(motion.p, {
                        dir: "auto",
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                          "--framer-font-family": '"Haffer Regular", sans-serif',
                          "--framer-font-weight": "430",
                          "--framer-line-height": "130%",
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ozbI8aBcS-LFfCExDTO))"
                        },
                        children: "Logistics"
                      })}</>,
                    fonts: ["CUSTOM;Haffer Regular"]
                  },
                  Wt3gbkbFr: {
                    children: <>{_jsx(motion.p, {
                        dir: "auto",
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                          "--framer-font-family": '"Haffer Regular", sans-serif',
                          "--framer-font-weight": "430",
                          "--framer-line-height": "130%",
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ozbI8aBcS-LFfCExDTO))"
                        },
                        children: "Logistics"
                      })}</>,
                    fonts: ["CUSTOM;Haffer Regular"]
                  },
                  ZgMJZBzTX: {
                    children: <>{_jsx(motion.p, {
                        dir: "auto",
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                          "--framer-font-family": '"Haffer Regular", sans-serif',
                          "--framer-font-weight": "430",
                          "--framer-line-height": "130%",
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ozbI8aBcS-LFfCExDTO))"
                        },
                        children: "Logistics"
                      })}</>,
                    fonts: ["CUSTOM;Haffer Regular"]
                  }
                }, baseVariant, gestureVariant)}>{<>{_jsx(motion.p, {
                      className: "framer-styles-preset-k8yxrn",
                      "data-styles-preset": "ferGDeq75",
                      dir: "auto",
                      style: {
                        "--framer-text-alignment": "center",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ozbI8aBcS-LFfCExDTO))"
                      },
                      children: "Logistics"
                    })}</>}</RichText>
              })]
            })
          }), _jsx(motion.div, {
            className: "framer-16ws4uc",
            "data-framer-name": "Stack",
            layoutDependency,
            layoutId: "LoubR6SOG",
            children: <RichText __fromCanvasComponent className="framer-o0e00p" data-framer-name="A security-first alternative to Okta" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="gynwd7zv5" style={{
              "--extracted-r6o4lv": "var(--variable-reference-mkLyGhWRQ-LFfCExDTO)",
              "--variable-reference-mkLyGhWRQ-LFfCExDTO": mkLyGhWRQ
            }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
              LzE7p022E: {
                children: <>{_jsx(motion.p, {
                    dir: "auto",
                    style: {
                      "--font-selector": "Q1VTVE9NVjI7SGFmZmVyIEJvbGQ=",
                      "--framer-font-family": '"Haffer Bold", sans-serif',
                      "--framer-font-weight": "790",
                      "--framer-line-height": "130%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-mkLyGhWRQ-LFfCExDTO))"
                    },
                    children: "easier."
                  })}</>,
                fonts: ["CUSTOMV2;Haffer Bold"]
              },
              TVyWY77xy: {
                children: <>{_jsx(motion.p, {
                    dir: "auto",
                    style: {
                      "--font-selector": "Q1VTVE9NVjI7SGFmZmVyIEJvbGQ=",
                      "--framer-font-family": '"Haffer Bold", sans-serif',
                      "--framer-font-weight": "790",
                      "--framer-line-height": "130%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-mkLyGhWRQ-LFfCExDTO))"
                    },
                    children: "easier."
                  })}</>,
                fonts: ["CUSTOMV2;Haffer Bold"]
              },
              Wt3gbkbFr: {
                children: <>{_jsx(motion.p, {
                    dir: "auto",
                    style: {
                      "--font-selector": "Q1VTVE9NVjI7SGFmZmVyIEJvbGQ=",
                      "--framer-font-family": '"Haffer Bold", sans-serif',
                      "--framer-font-weight": "790",
                      "--framer-line-height": "130%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-mkLyGhWRQ-LFfCExDTO))"
                    },
                    children: "easier."
                  })}</>,
                fonts: ["CUSTOMV2;Haffer Bold"]
              },
              ZgMJZBzTX: {
                children: <>{_jsx(motion.p, {
                    dir: "auto",
                    style: {
                      "--font-selector": "Q1VTVE9NVjI7SGFmZmVyIEJvbGQ=",
                      "--framer-font-family": '"Haffer Bold", sans-serif',
                      "--framer-font-weight": "790",
                      "--framer-line-height": "130%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-mkLyGhWRQ-LFfCExDTO))"
                    },
                    children: "easier."
                  })}</>,
                fonts: ["CUSTOMV2;Haffer Bold"]
              }
            }, baseVariant, gestureVariant)}>{<>{_jsx(motion.p, {
                  className: "framer-styles-preset-k8yxrn",
                  "data-styles-preset": "ferGDeq75",
                  dir: "auto",
                  style: {
                    "--framer-text-alignment": "center",
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-mkLyGhWRQ-LFfCExDTO))"
                  },
                  children: "easier."
                })}</>}</RichText>
          })]
        })}</Transition>}</Variants>}</LayoutGroup>;
});
var css2 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-SMJe7.framer-1klfqup, .framer-SMJe7 .framer-1klfqup { display: block; }", ".framer-SMJe7.framer-1xlm2xu { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }", ".framer-SMJe7 .framer-oh7j98, .framer-SMJe7 .framer-16ws4uc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 8px 0px 8px 0px; position: relative; width: min-content; }", ".framer-SMJe7 .framer-hrspa4 { flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; white-space: pre-wrap; width: 131px; word-break: break-word; word-wrap: break-word; z-index: 1; }", ".framer-SMJe7 .framer-175oaup { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-SMJe7 .framer-2f8v2u { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 42px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 149px; }", ".framer-SMJe7 .framer-a4mpwi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 8px; position: absolute; top: 0px; width: min-content; will-change: var(--framer-will-change-override, transform); z-index: 1; }", ".framer-SMJe7 .framer-1crzua0, .framer-SMJe7 .framer-137yp3r, .framer-SMJe7 .framer-lvst6n, .framer-SMJe7 .framer-1q9m7ms, .framer-SMJe7 .framer-o0e00p { flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; z-index: 1; }", ".framer-SMJe7 .framer-1kd4w50 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 8px; position: absolute; top: 52px; width: min-content; will-change: var(--framer-will-change-override, transform); z-index: 1; }", ".framer-SMJe7 .framer-115y1me { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 8px; position: absolute; top: 104px; width: min-content; will-change: var(--framer-will-change-override, transform); z-index: 1; }", ".framer-SMJe7 .framer-12h77jk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 8px; position: absolute; top: 156px; width: min-content; will-change: var(--framer-will-change-override, transform); z-index: 1; }", ".framer-SMJe7.framer-v-1mry6y1 .framer-2f8v2u { width: 136px; will-change: var(--framer-will-change-override, transform); }", ".framer-SMJe7.framer-v-1mry6y1 .framer-a4mpwi, .framer-SMJe7.framer-v-lzijez .framer-1kd4w50, .framer-SMJe7.framer-v-w4lbhh .framer-115y1me, .framer-SMJe7.framer-v-1ft3cg5 .framer-a4mpwi, .framer-SMJe7.framer-v-10cvvt8 .framer-1kd4w50, .framer-SMJe7.framer-v-14cuwci .framer-115y1me { top: -52px; }", ".framer-SMJe7.framer-v-1mry6y1 .framer-1kd4w50, .framer-SMJe7.framer-v-lzijez .framer-115y1me, .framer-SMJe7.framer-v-w4lbhh .framer-12h77jk, .framer-SMJe7.framer-v-1ft3cg5 .framer-1kd4w50, .framer-SMJe7.framer-v-10cvvt8 .framer-115y1me, .framer-SMJe7.framer-v-14cuwci .framer-12h77jk { top: 0px; }", ".framer-SMJe7.framer-v-1mry6y1 .framer-115y1me, .framer-SMJe7.framer-v-lzijez .framer-12h77jk, .framer-SMJe7.framer-v-1ft3cg5 .framer-115y1me, .framer-SMJe7.framer-v-10cvvt8 .framer-12h77jk { top: 52px; }", ".framer-SMJe7.framer-v-1mry6y1 .framer-12h77jk, .framer-SMJe7.framer-v-1ft3cg5 .framer-12h77jk { top: 104px; }", ".framer-SMJe7.framer-v-lzijez .framer-2f8v2u { width: 103px; will-change: var(--framer-will-change-override, transform); }", ".framer-SMJe7.framer-v-lzijez .framer-a4mpwi, .framer-SMJe7.framer-v-w4lbhh .framer-1kd4w50, .framer-SMJe7.framer-v-10cvvt8 .framer-a4mpwi, .framer-SMJe7.framer-v-14cuwci .framer-1kd4w50 { top: -104px; }", ".framer-SMJe7.framer-v-w4lbhh .framer-2f8v2u { width: 94px; will-change: var(--framer-will-change-override, transform); }", ".framer-SMJe7.framer-v-w4lbhh .framer-a4mpwi, .framer-SMJe7.framer-v-14cuwci .framer-a4mpwi { top: -156px; }", ".framer-SMJe7.framer-v-elrd7n.framer-1xlm2xu { height: 37px; width: 436px; }", ".framer-SMJe7.framer-v-elrd7n .framer-hrspa4, .framer-SMJe7.framer-v-1ft3cg5 .framer-hrspa4, .framer-SMJe7.framer-v-10cvvt8 .framer-hrspa4, .framer-SMJe7.framer-v-14cuwci .framer-hrspa4 { overflow: visible; white-space: pre; width: auto; }", ".framer-SMJe7.framer-v-elrd7n .framer-2f8v2u { height: 37px; width: 124px; }", ".framer-SMJe7.framer-v-1ft3cg5.framer-1xlm2xu { width: 502px; }", ".framer-SMJe7.framer-v-1ft3cg5 .framer-2f8v2u { cursor: pointer; height: 37px; width: 114px; will-change: var(--framer-will-change-override, transform); }", ".framer-SMJe7.framer-v-10cvvt8.framer-1xlm2xu { width: 521px; }", ".framer-SMJe7.framer-v-10cvvt8 .framer-2f8v2u { height: 37px; width: 87px; will-change: var(--framer-will-change-override, transform); }", ".framer-SMJe7.framer-v-14cuwci.framer-1xlm2xu { width: 388px; }", ".framer-SMJe7.framer-v-14cuwci .framer-2f8v2u { height: 37px; width: 80px; will-change: var(--framer-will-change-override, transform); }", ...css];
var FramerLFfCExDTO = withCSS(Component, css2, "framer-SMJe7");
var LFfCExDTO_default = FramerLFfCExDTO;
FramerLFfCExDTO.displayName = "we help make";
FramerLFfCExDTO.defaultProps = {
  height: 42,
  width: 347.5
};
addPropertyControls(FramerLFfCExDTO, {
  variant: {
    options: ["UpTCY6axe", "D3zLXKpLT", "LxrITL9ce", "Pt4DfzKJc", "ZgMJZBzTX", "Wt3gbkbFr", "TVyWY77xy", "LzE7p022E"],
    optionTitles: ["Variant 1", "Variant 2", "Variant 3", "Variant 4", "phone 1", "phone 2", "phone 3", "phone 4"],
    title: "Variant",
    type: ControlType.Enum
  },
  mkLyGhWRQ: {
    defaultValue: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
    title: "Color 1",
    type: ControlType.Color
  },
  ozbI8aBcS: {
    defaultValue: "var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248))",
    title: "Color 2",
    type: ControlType.Color
  }
});
addFonts(FramerLFfCExDTO, [{
  explicitInter: true,
  fonts: [{
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
    url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
    weight: "400"
  }, {
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
    url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
    weight: "400"
  }, {
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+1F00-1FFF",
    url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
    weight: "400"
  }, {
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+0370-03FF",
    url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
    weight: "400"
  }, {
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
    url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
    weight: "400"
  }, {
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2",
    weight: "400"
  }, {
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
    url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
    weight: "400"
  }, {
    cssFamilyName: "Haffer Bold",
    source: "custom",
    style: "normal",
    uiFamilyName: "Haffer",
    url: "https://framerusercontent.com/assets/eRqmC6W9PktN8mUcnwel9B6wmPs.woff",
    weight: "790"
  }, {
    cssFamilyName: "Haffer Regular",
    source: "custom",
    style: "normal",
    uiFamilyName: "Haffer",
    url: "https://framerusercontent.com/assets/tAGQcvN09kwW2QjPLqLO197UqBQ.woff",
    weight: "430"
  }]
}, ...getFontsFromSharedStyle(fonts)], {
  supportsExplicitInterCodegen: true
});
var __FramerMetadata__ = {
  "exports": {
    "default": {
      "type": "reactComponent",
      "name": "FramerLFfCExDTO",
      "slots": [],
      "annotations": {
        "framerContractVersion": "1",
        "framerIntrinsicHeight": "42",
        "framerDisplayContentsDiv": "false",
        "framerVariables": '{"mkLyGhWRQ":"color1","ozbI8aBcS":"color2"}',
        "framerColorSyntax": "true",
        "framerImmutableVariables": "true",
        "framerComponentViewportWidth": "true",
        "framerAutoSizeImages": "true",
        "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["auto","auto"]},"D3zLXKpLT":{"layout":["auto","auto"]},"LxrITL9ce":{"layout":["auto","auto"]},"Pt4DfzKJc":{"layout":["auto","auto"]},"ZgMJZBzTX":{"layout":["fixed","fixed"]},"Wt3gbkbFr":{"layout":["fixed","auto"]},"TVyWY77xy":{"layout":["fixed","auto"]},"LzE7p022E":{"layout":["fixed","auto"]}}}',
        "framerIntrinsicWidth": "347.5"
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
var _OriginalComponent = LFfCExDTO_default;
function WehelpmakeWrapped(props) {
  var _variant = useVariant(props.variant);
  var _inner = (_variant !== undefined) ? { ...props, variant: _variant } : props;
  return _ctxJsx(ContextProviders, { children: _ctxJsx(_OriginalComponent, _inner) });
}
Object.assign(WehelpmakeWrapped, _OriginalComponent);
export {  __FramerMetadata__,  WehelpmakeWrapped as default   };