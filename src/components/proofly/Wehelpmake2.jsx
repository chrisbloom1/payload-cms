"use client"
// http-url:https://framerusercontent.com/modules/j6v2AzFsvhz2mnlFX5V4/877eaCqx1AQfi26wUKtW/Bc52Q1e_A.js
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

// http-url:https://framerusercontent.com/modules/j6v2AzFsvhz2mnlFX5V4/877eaCqx1AQfi26wUKtW/Bc52Q1e_A.js
var cycleOrder = ["HFt1Jacyg", "Tfygxw4sr", "q2d1g_Y7W", "t_4qtuDxr", "RcXY0NVt3", "jpoA8SNaC", "CMzxw1iem", "Ncb8PTxrr"];
var serializationHash = "framer-Kbalu";
var variantClassNames = {
  CMzxw1iem: "framer-v-19mrtgx",
  HFt1Jacyg: "framer-v-1xy7cak",
  jpoA8SNaC: "framer-v-887cer",
  Ncb8PTxrr: "framer-v-1b33340",
  q2d1g_Y7W: "framer-v-178arp3",
  RcXY0NVt3: "framer-v-1t3g0bv",
  t_4qtuDxr: "framer-v-1aqqd73",
  Tfygxw4sr: "framer-v-1ya84so"
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
  "phone 1": "RcXY0NVt3",
  "phone 2": "jpoA8SNaC",
  "phone 3": "CMzxw1iem",
  "phone 4": "Ncb8PTxrr",
  "Variant 1": "HFt1Jacyg",
  "Variant 2": "Tfygxw4sr",
  "Variant 3": "q2d1g_Y7W",
  "Variant 4": "t_4qtuDxr"
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
    variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "HFt1Jacyg"
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
    defaultVariant: "HFt1Jacyg",
    ref: refBinding,
    variant,
    variantClassNames
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const {
    activeVariantCallback,
    delay
  } = useActiveVariantCallback(baseVariant);
  const onAppear1dex15j = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("Tfygxw4sr", true), 3500);
  });
  const onAppear1gqz6mm = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("q2d1g_Y7W", true), 3500);
  });
  const onAppear7r4wrw = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("t_4qtuDxr", true), 3500);
  });
  const onAppear1ytf9le = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("HFt1Jacyg", true), 3500);
  });
  const onAppear1y4vnvq = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("jpoA8SNaC", true), 3500);
  });
  const onAppearjwxol2 = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("CMzxw1iem", true), 3500);
  });
  const onAppearrlqbcz = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("Ncb8PTxrr", true), 3500);
  });
  const onAppear1dc74zl = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("RcXY0NVt3", true), 3500);
  });
  const onTap170xe9s = activeVariantCallback(async (...args) => {
    setVariant("jpoA8SNaC");
  });
  useOnVariantChange(baseVariant, {
    CMzxw1iem: onAppearrlqbcz,
    default: onAppear1dex15j,
    jpoA8SNaC: onAppearjwxol2,
    Ncb8PTxrr: onAppear1dc74zl,
    q2d1g_Y7W: onAppear7r4wrw,
    RcXY0NVt3: onAppear1y4vnvq,
    t_4qtuDxr: onAppear1ytf9le,
    Tfygxw4sr: onAppear1gqz6mm
  });
  const sharedStyleClassNames = [className];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return <LayoutGroup id={layoutId ?? defaultLayoutId}>{<Variants animate={variants} initial={false}>{<Transition value={transition1}>{_jsxs(motion.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx(scopingClassNames, "framer-1xy7cak", className2, classNames),
          "data-framer-name": "Variant 1",
          "data-highlight": true,
          layoutDependency,
          layoutId: "HFt1Jacyg",
          ref: refBinding,
          style: {
            ...style
          },
          ...addPropertyOverrides({
            CMzxw1iem: {
              "data-framer-name": "phone 3"
            },
            jpoA8SNaC: {
              "data-framer-name": "phone 2"
            },
            Ncb8PTxrr: {
              "data-framer-name": "phone 4"
            },
            q2d1g_Y7W: {
              "data-framer-name": "Variant 3"
            },
            RcXY0NVt3: {
              "data-framer-name": "phone 1"
            },
            t_4qtuDxr: {
              "data-framer-name": "Variant 4"
            },
            Tfygxw4sr: {
              "data-framer-name": "Variant 2"
            }
          }, baseVariant, gestureVariant),
          children: [_jsx(motion.div, {
            className: "framer-1famsfj",
            "data-framer-name": "Stack",
            layoutDependency,
            layoutId: "ogqyfTfdj",
            children: <RichText __fromCanvasComponent className="framer-s8byxn" data-framer-name="A security-first alternative to Okta" fonts={["Inter", "Inter-Bold"]} layoutDependency={layoutDependency} layoutId="pbfjQmhSu" style={{
              "--extracted-r6o4lv": "var(--variable-reference-mkLyGhWRQ-Bc52Q1e_A)",
              "--variable-reference-mkLyGhWRQ-Bc52Q1e_A": mkLyGhWRQ
            }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
              CMzxw1iem: {
                children: <>{_jsx(motion.p, {
                    dir: "auto",
                    style: {
                      "--font-selector": "Q1VTVE9NVjI7SGFmZmVyIEJvbGQ=",
                      "--framer-font-family": '"Haffer Bold", sans-serif',
                      "--framer-font-weight": "790",
                      "--framer-line-height": "130%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-mkLyGhWRQ-Bc52Q1e_A))"
                    },
                    children: _jsx(motion.strong, {
                      children: "We make"
                    })
                  })}</>,
                fonts: ["CUSTOMV2;Haffer Bold"]
              },
              jpoA8SNaC: {
                children: <>{_jsx(motion.p, {
                    dir: "auto",
                    style: {
                      "--font-selector": "Q1VTVE9NVjI7SGFmZmVyIEJvbGQ=",
                      "--framer-font-family": '"Haffer Bold", sans-serif',
                      "--framer-font-weight": "790",
                      "--framer-line-height": "130%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-mkLyGhWRQ-Bc52Q1e_A))"
                    },
                    children: _jsx(motion.strong, {
                      children: "We make"
                    })
                  })}</>,
                fonts: ["CUSTOMV2;Haffer Bold"]
              },
              Ncb8PTxrr: {
                children: <>{_jsx(motion.p, {
                    dir: "auto",
                    style: {
                      "--font-selector": "Q1VTVE9NVjI7SGFmZmVyIEJvbGQ=",
                      "--framer-font-family": '"Haffer Bold", sans-serif',
                      "--framer-font-weight": "790",
                      "--framer-line-height": "130%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-mkLyGhWRQ-Bc52Q1e_A))"
                    },
                    children: _jsx(motion.strong, {
                      children: "We make"
                    })
                  })}</>,
                fonts: ["CUSTOMV2;Haffer Bold"]
              },
              RcXY0NVt3: {
                children: <>{_jsx(motion.p, {
                    dir: "auto",
                    style: {
                      "--font-selector": "Q1VTVE9NVjI7SGFmZmVyIEJvbGQ=",
                      "--framer-font-family": '"Haffer Bold", sans-serif',
                      "--framer-font-weight": "790",
                      "--framer-line-height": "130%",
                      "--framer-text-alignment": "left",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-mkLyGhWRQ-Bc52Q1e_A))"
                    },
                    children: _jsx(motion.strong, {
                      children: "We make"
                    })
                  })}</>,
                fonts: ["CUSTOMV2;Haffer Bold"]
              }
            }, baseVariant, gestureVariant)}>{<>{_jsx(motion.p, {
                  className: "framer-styles-preset-k8yxrn",
                  "data-styles-preset": "ferGDeq75",
                  dir: "auto",
                  style: {
                    "--framer-text-alignment": "center",
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-mkLyGhWRQ-Bc52Q1e_A))"
                  },
                  children: _jsx(motion.strong, {
                    children: "We make"
                  })
                })}</>}</RichText>
          }), _jsx(motion.div, {
            className: "framer-1w58xv4",
            layoutDependency,
            layoutId: "AwM_nqE9A",
            style: {
              borderBottomLeftRadius: 4,
              borderBottomRightRadius: 4,
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4
            },
            children: _jsxs(motion.div, {
              className: "framer-oms5jr",
              "data-framer-name": "tags",
              layoutDependency,
              layoutId: "ZIGEjYN3W",
              style: {
                backgroundColor: mkLyGhWRQ,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0
              },
              variants: {
                CMzxw1iem: {
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4
                },
                jpoA8SNaC: {
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4
                },
                Ncb8PTxrr: {
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4
                },
                q2d1g_Y7W: {
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4
                },
                RcXY0NVt3: {
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0
                },
                t_4qtuDxr: {
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4
                },
                Tfygxw4sr: {
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4
                }
              },
              ...addPropertyOverrides({
                jpoA8SNaC: {
                  "data-highlight": true,
                  onTap: onTap170xe9s
                }
              }, baseVariant, gestureVariant),
              children: [_jsx(motion.div, {
                className: "framer-ogaozj",
                "data-framer-name": "Stack",
                layoutDependency,
                layoutId: "BZmpI7N2t",
                style: {
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4
                },
                children: <RichText __fromCanvasComponent className="framer-1dxd384" data-framer-name="A security-first alternative to Okta" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="MHcUsutXm" style={{
                  "--extracted-r6o4lv": "var(--variable-reference-ozbI8aBcS-Bc52Q1e_A)",
                  "--variable-reference-ozbI8aBcS-Bc52Q1e_A": ozbI8aBcS
                }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
                  CMzxw1iem: {
                    children: <>{_jsx(motion.p, {
                        dir: "auto",
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                          "--framer-font-family": '"Haffer Regular", sans-serif',
                          "--framer-font-weight": "430",
                          "--framer-line-height": "130%",
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ozbI8aBcS-Bc52Q1e_A))"
                        },
                        children: "Manufacturing"
                      })}</>,
                    fonts: ["CUSTOM;Haffer Regular"]
                  },
                  jpoA8SNaC: {
                    children: <>{_jsx(motion.p, {
                        dir: "auto",
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                          "--framer-font-family": '"Haffer Regular", sans-serif',
                          "--framer-font-weight": "430",
                          "--framer-line-height": "130%",
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ozbI8aBcS-Bc52Q1e_A))"
                        },
                        children: "Manufacturing"
                      })}</>,
                    fonts: ["CUSTOM;Haffer Regular"]
                  },
                  Ncb8PTxrr: {
                    children: <>{_jsx(motion.p, {
                        dir: "auto",
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                          "--framer-font-family": '"Haffer Regular", sans-serif',
                          "--framer-font-weight": "430",
                          "--framer-line-height": "130%",
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ozbI8aBcS-Bc52Q1e_A))"
                        },
                        children: "Manufacturing"
                      })}</>,
                    fonts: ["CUSTOM;Haffer Regular"]
                  },
                  RcXY0NVt3: {
                    children: <>{_jsx(motion.p, {
                        dir: "auto",
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                          "--framer-font-family": '"Haffer Regular", sans-serif',
                          "--framer-font-weight": "430",
                          "--framer-line-height": "130%",
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ozbI8aBcS-Bc52Q1e_A))"
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
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ozbI8aBcS-Bc52Q1e_A))"
                      },
                      children: "Manufacturing"
                    })}</>}</RichText>
              }), _jsx(motion.div, {
                className: "framer-wbxj5i",
                "data-framer-name": "Stack",
                layoutDependency,
                layoutId: "UJgOoP5Kb",
                style: {
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4
                },
                children: <RichText __fromCanvasComponent className="framer-1ax37vc" data-framer-name="A security-first alternative to Okta" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="yTUBfynOQ" style={{
                  "--extracted-r6o4lv": "var(--variable-reference-ozbI8aBcS-Bc52Q1e_A)",
                  "--variable-reference-ozbI8aBcS-Bc52Q1e_A": ozbI8aBcS
                }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
                  CMzxw1iem: {
                    children: <>{_jsx(motion.p, {
                        dir: "auto",
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                          "--framer-font-family": '"Haffer Regular", sans-serif',
                          "--framer-font-weight": "430",
                          "--framer-line-height": "130%",
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ozbI8aBcS-Bc52Q1e_A))"
                        },
                        children: "Warehousing"
                      })}</>,
                    fonts: ["CUSTOM;Haffer Regular"]
                  },
                  jpoA8SNaC: {
                    children: <>{_jsx(motion.p, {
                        dir: "auto",
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                          "--framer-font-family": '"Haffer Regular", sans-serif',
                          "--framer-font-weight": "430",
                          "--framer-line-height": "130%",
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ozbI8aBcS-Bc52Q1e_A))"
                        },
                        children: "Warehousing"
                      })}</>,
                    fonts: ["CUSTOM;Haffer Regular"]
                  },
                  Ncb8PTxrr: {
                    children: <>{_jsx(motion.p, {
                        dir: "auto",
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                          "--framer-font-family": '"Haffer Regular", sans-serif',
                          "--framer-font-weight": "430",
                          "--framer-line-height": "130%",
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ozbI8aBcS-Bc52Q1e_A))"
                        },
                        children: "Warehousing"
                      })}</>,
                    fonts: ["CUSTOM;Haffer Regular"]
                  },
                  RcXY0NVt3: {
                    children: <>{_jsx(motion.p, {
                        dir: "auto",
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                          "--framer-font-family": '"Haffer Regular", sans-serif',
                          "--framer-font-weight": "430",
                          "--framer-line-height": "130%",
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ozbI8aBcS-Bc52Q1e_A))"
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
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ozbI8aBcS-Bc52Q1e_A))"
                      },
                      children: "Warehousing"
                    })}</>}</RichText>
              }), _jsx(motion.div, {
                className: "framer-1y9kiqi",
                "data-framer-name": "Stack",
                layoutDependency,
                layoutId: "KYDo9wGg2",
                style: {
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4
                },
                children: <RichText __fromCanvasComponent className="framer-ds1ven" data-framer-name="A security-first alternative to Okta" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="pqFkFvus7" style={{
                  "--extracted-r6o4lv": "var(--variable-reference-ozbI8aBcS-Bc52Q1e_A)",
                  "--variable-reference-ozbI8aBcS-Bc52Q1e_A": ozbI8aBcS
                }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
                  CMzxw1iem: {
                    children: <>{_jsx(motion.p, {
                        dir: "auto",
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                          "--framer-font-family": '"Haffer Regular", sans-serif',
                          "--framer-font-weight": "430",
                          "--framer-line-height": "130%",
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ozbI8aBcS-Bc52Q1e_A))"
                        },
                        children: "Assembly"
                      })}</>,
                    fonts: ["CUSTOM;Haffer Regular"]
                  },
                  jpoA8SNaC: {
                    children: <>{_jsx(motion.p, {
                        dir: "auto",
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                          "--framer-font-family": '"Haffer Regular", sans-serif',
                          "--framer-font-weight": "430",
                          "--framer-line-height": "130%",
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ozbI8aBcS-Bc52Q1e_A))"
                        },
                        children: "Assembly"
                      })}</>,
                    fonts: ["CUSTOM;Haffer Regular"]
                  },
                  Ncb8PTxrr: {
                    children: <>{_jsx(motion.p, {
                        dir: "auto",
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                          "--framer-font-family": '"Haffer Regular", sans-serif',
                          "--framer-font-weight": "430",
                          "--framer-line-height": "130%",
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ozbI8aBcS-Bc52Q1e_A))"
                        },
                        children: "Assembly"
                      })}</>,
                    fonts: ["CUSTOM;Haffer Regular"]
                  },
                  RcXY0NVt3: {
                    children: <>{_jsx(motion.p, {
                        dir: "auto",
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                          "--framer-font-family": '"Haffer Regular", sans-serif',
                          "--framer-font-weight": "430",
                          "--framer-line-height": "130%",
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ozbI8aBcS-Bc52Q1e_A))"
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
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ozbI8aBcS-Bc52Q1e_A))"
                      },
                      children: "Assembly"
                    })}</>}</RichText>
              }), _jsx(motion.div, {
                className: "framer-iktbtc",
                "data-framer-name": "Stack",
                layoutDependency,
                layoutId: "weD5YfQZ2",
                style: {
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4
                },
                children: <RichText __fromCanvasComponent className="framer-qq3q0h" data-framer-name="A security-first alternative to Okta" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="vxGCK6Snd" style={{
                  "--extracted-r6o4lv": "var(--variable-reference-ozbI8aBcS-Bc52Q1e_A)",
                  "--variable-reference-ozbI8aBcS-Bc52Q1e_A": ozbI8aBcS
                }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
                  CMzxw1iem: {
                    children: <>{_jsx(motion.p, {
                        dir: "auto",
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                          "--framer-font-family": '"Haffer Regular", sans-serif',
                          "--framer-font-weight": "430",
                          "--framer-line-height": "130%",
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ozbI8aBcS-Bc52Q1e_A))"
                        },
                        children: "Logistics"
                      })}</>,
                    fonts: ["CUSTOM;Haffer Regular"]
                  },
                  jpoA8SNaC: {
                    children: <>{_jsx(motion.p, {
                        dir: "auto",
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                          "--framer-font-family": '"Haffer Regular", sans-serif',
                          "--framer-font-weight": "430",
                          "--framer-line-height": "130%",
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ozbI8aBcS-Bc52Q1e_A))"
                        },
                        children: "Logistics"
                      })}</>,
                    fonts: ["CUSTOM;Haffer Regular"]
                  },
                  Ncb8PTxrr: {
                    children: <>{_jsx(motion.p, {
                        dir: "auto",
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                          "--framer-font-family": '"Haffer Regular", sans-serif',
                          "--framer-font-weight": "430",
                          "--framer-line-height": "130%",
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ozbI8aBcS-Bc52Q1e_A))"
                        },
                        children: "Logistics"
                      })}</>,
                    fonts: ["CUSTOM;Haffer Regular"]
                  },
                  RcXY0NVt3: {
                    children: <>{_jsx(motion.p, {
                        dir: "auto",
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                          "--framer-font-family": '"Haffer Regular", sans-serif',
                          "--framer-font-weight": "430",
                          "--framer-line-height": "130%",
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ozbI8aBcS-Bc52Q1e_A))"
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
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ozbI8aBcS-Bc52Q1e_A))"
                      },
                      children: "Logistics"
                    })}</>}</RichText>
              })]
            })
          }), _jsx(motion.div, {
            className: "framer-1rg8oxr",
            "data-framer-name": "Stack",
            layoutDependency,
            layoutId: "xtI7e8vz9",
            children: <RichText __fromCanvasComponent className="framer-tglzl3" data-framer-name="A security-first alternative to Okta" fonts={["Inter", "Inter-Bold"]} layoutDependency={layoutDependency} layoutId="oLZnhi8HT" style={{
              "--extracted-r6o4lv": "var(--variable-reference-mkLyGhWRQ-Bc52Q1e_A)",
              "--variable-reference-mkLyGhWRQ-Bc52Q1e_A": mkLyGhWRQ
            }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
              CMzxw1iem: {
                children: <>{_jsx(motion.p, {
                    dir: "auto",
                    style: {
                      "--font-selector": "Q1VTVE9NVjI7SGFmZmVyIEJvbGQ=",
                      "--framer-font-family": '"Haffer Bold", sans-serif',
                      "--framer-font-weight": "790",
                      "--framer-line-height": "130%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-mkLyGhWRQ-Bc52Q1e_A))"
                    },
                    children: _jsx(motion.strong, {
                      children: "easier."
                    })
                  })}</>,
                fonts: ["CUSTOMV2;Haffer Bold"]
              },
              jpoA8SNaC: {
                children: <>{_jsx(motion.p, {
                    dir: "auto",
                    style: {
                      "--font-selector": "Q1VTVE9NVjI7SGFmZmVyIEJvbGQ=",
                      "--framer-font-family": '"Haffer Bold", sans-serif',
                      "--framer-font-weight": "790",
                      "--framer-line-height": "130%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-mkLyGhWRQ-Bc52Q1e_A))"
                    },
                    children: _jsx(motion.strong, {
                      children: "easier."
                    })
                  })}</>,
                fonts: ["CUSTOMV2;Haffer Bold"]
              },
              Ncb8PTxrr: {
                children: <>{_jsx(motion.p, {
                    dir: "auto",
                    style: {
                      "--font-selector": "Q1VTVE9NVjI7SGFmZmVyIEJvbGQ=",
                      "--framer-font-family": '"Haffer Bold", sans-serif',
                      "--framer-font-weight": "790",
                      "--framer-line-height": "130%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-mkLyGhWRQ-Bc52Q1e_A))"
                    },
                    children: _jsx(motion.strong, {
                      children: "easier."
                    })
                  })}</>,
                fonts: ["CUSTOMV2;Haffer Bold"]
              },
              RcXY0NVt3: {
                children: <>{_jsx(motion.p, {
                    dir: "auto",
                    style: {
                      "--font-selector": "Q1VTVE9NVjI7SGFmZmVyIEJvbGQ=",
                      "--framer-font-family": '"Haffer Bold", sans-serif',
                      "--framer-font-weight": "790",
                      "--framer-line-height": "130%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-mkLyGhWRQ-Bc52Q1e_A))"
                    },
                    children: _jsx(motion.strong, {
                      children: "easier."
                    })
                  })}</>,
                fonts: ["CUSTOMV2;Haffer Bold"]
              }
            }, baseVariant, gestureVariant)}>{<>{_jsx(motion.p, {
                  className: "framer-styles-preset-k8yxrn",
                  "data-styles-preset": "ferGDeq75",
                  dir: "auto",
                  style: {
                    "--framer-text-alignment": "center",
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-mkLyGhWRQ-Bc52Q1e_A))"
                  },
                  children: _jsx(motion.strong, {
                    children: "easier."
                  })
                })}</>}</RichText>
          })]
        })}</Transition>}</Variants>}</LayoutGroup>;
});
var css2 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-Kbalu.framer-1i7jol5, .framer-Kbalu .framer-1i7jol5 { display: block; }", ".framer-Kbalu.framer-1xy7cak { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }", ".framer-Kbalu .framer-1famsfj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 8px 0px 8px 0px; position: relative; width: min-content; }", ".framer-Kbalu .framer-s8byxn { flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; white-space: pre-wrap; width: 86px; word-break: break-word; word-wrap: break-word; z-index: 1; }", ".framer-Kbalu .framer-1w58xv4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-Kbalu .framer-oms5jr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 42px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 149px; }", ".framer-Kbalu .framer-ogaozj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 8px; position: absolute; top: 0px; width: min-content; will-change: var(--framer-will-change-override, transform); z-index: 1; }", ".framer-Kbalu .framer-1dxd384, .framer-Kbalu .framer-1ax37vc, .framer-Kbalu .framer-ds1ven, .framer-Kbalu .framer-qq3q0h, .framer-Kbalu .framer-tglzl3 { flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; z-index: 1; }", ".framer-Kbalu .framer-wbxj5i { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 8px; position: absolute; top: 52px; width: min-content; will-change: var(--framer-will-change-override, transform); z-index: 1; }", ".framer-Kbalu .framer-1y9kiqi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 8px; position: absolute; top: 104px; width: min-content; will-change: var(--framer-will-change-override, transform); z-index: 1; }", ".framer-Kbalu .framer-iktbtc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 8px; position: absolute; top: 156px; width: min-content; will-change: var(--framer-will-change-override, transform); z-index: 1; }", ".framer-Kbalu .framer-1rg8oxr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 8px 0px 8px 0px; position: relative; width: min-content; }", ".framer-Kbalu.framer-v-1ya84so .framer-oms5jr { width: 136px; will-change: var(--framer-will-change-override, transform); }", ".framer-Kbalu.framer-v-1ya84so .framer-ogaozj, .framer-Kbalu.framer-v-178arp3 .framer-wbxj5i, .framer-Kbalu.framer-v-1aqqd73 .framer-1y9kiqi, .framer-Kbalu.framer-v-887cer .framer-ogaozj, .framer-Kbalu.framer-v-19mrtgx .framer-wbxj5i, .framer-Kbalu.framer-v-1b33340 .framer-1y9kiqi { top: -52px; }", ".framer-Kbalu.framer-v-1ya84so .framer-wbxj5i, .framer-Kbalu.framer-v-178arp3 .framer-1y9kiqi, .framer-Kbalu.framer-v-1aqqd73 .framer-iktbtc, .framer-Kbalu.framer-v-887cer .framer-wbxj5i, .framer-Kbalu.framer-v-19mrtgx .framer-1y9kiqi, .framer-Kbalu.framer-v-1b33340 .framer-iktbtc { top: 0px; }", ".framer-Kbalu.framer-v-1ya84so .framer-1y9kiqi, .framer-Kbalu.framer-v-178arp3 .framer-iktbtc, .framer-Kbalu.framer-v-887cer .framer-1y9kiqi, .framer-Kbalu.framer-v-19mrtgx .framer-iktbtc { top: 52px; }", ".framer-Kbalu.framer-v-1ya84so .framer-iktbtc, .framer-Kbalu.framer-v-887cer .framer-iktbtc { top: 104px; }", ".framer-Kbalu.framer-v-178arp3 .framer-oms5jr { width: 103px; will-change: var(--framer-will-change-override, transform); }", ".framer-Kbalu.framer-v-178arp3 .framer-ogaozj, .framer-Kbalu.framer-v-1aqqd73 .framer-wbxj5i, .framer-Kbalu.framer-v-19mrtgx .framer-ogaozj, .framer-Kbalu.framer-v-1b33340 .framer-wbxj5i { top: -104px; }", ".framer-Kbalu.framer-v-1aqqd73 .framer-oms5jr { width: 94px; will-change: var(--framer-will-change-override, transform); }", ".framer-Kbalu.framer-v-1aqqd73 .framer-ogaozj, .framer-Kbalu.framer-v-1b33340 .framer-ogaozj { top: -156px; }", ".framer-Kbalu.framer-v-1t3g0bv.framer-1xy7cak { height: 37px; }", ".framer-Kbalu.framer-v-1t3g0bv .framer-s8byxn, .framer-Kbalu.framer-v-887cer .framer-s8byxn, .framer-Kbalu.framer-v-19mrtgx .framer-s8byxn, .framer-Kbalu.framer-v-1b33340 .framer-s8byxn { overflow: visible; white-space: pre; width: auto; }", ".framer-Kbalu.framer-v-1t3g0bv .framer-oms5jr { height: 37px; width: 124px; }", ".framer-Kbalu.framer-v-887cer .framer-oms5jr { cursor: pointer; height: 37px; width: 114px; will-change: var(--framer-will-change-override, transform); }", ".framer-Kbalu.framer-v-19mrtgx .framer-oms5jr { height: 37px; width: 87px; will-change: var(--framer-will-change-override, transform); }", ".framer-Kbalu.framer-v-1b33340 .framer-oms5jr { height: 37px; width: 80px; will-change: var(--framer-will-change-override, transform); }", ...css];
var FramerBc52Q1e_A = withCSS(Component, css2, "framer-Kbalu");
var Bc52Q1e_A_default = FramerBc52Q1e_A;
FramerBc52Q1e_A.displayName = "we help make 2";
FramerBc52Q1e_A.defaultProps = {
  height: 42,
  width: 305.5
};
addPropertyControls(FramerBc52Q1e_A, {
  variant: {
    options: ["HFt1Jacyg", "Tfygxw4sr", "q2d1g_Y7W", "t_4qtuDxr", "RcXY0NVt3", "jpoA8SNaC", "CMzxw1iem", "Ncb8PTxrr"],
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
addFonts(FramerBc52Q1e_A, [{
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
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
    url: "https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2",
    weight: "700"
  }, {
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
    url: "https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2",
    weight: "700"
  }, {
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+1F00-1FFF",
    url: "https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2",
    weight: "700"
  }, {
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+0370-03FF",
    url: "https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2",
    weight: "700"
  }, {
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
    url: "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2",
    weight: "700"
  }, {
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    url: "https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2",
    weight: "700"
  }, {
    cssFamilyName: "Inter",
    source: "framer",
    style: "normal",
    uiFamilyName: "Inter",
    unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
    url: "https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2",
    weight: "700"
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
    "Props": {
      "type": "tsType",
      "annotations": {
        "framerContractVersion": "1"
      }
    },
    "default": {
      "type": "reactComponent",
      "name": "FramerBc52Q1e_A",
      "slots": [],
      "annotations": {
        "framerIntrinsicWidth": "305.5",
        "framerIntrinsicHeight": "42",
        "framerDisplayContentsDiv": "false",
        "framerImmutableVariables": "true",
        "framerColorSyntax": "true",
        "framerComponentViewportWidth": "true",
        "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["auto","auto"]},"Tfygxw4sr":{"layout":["auto","auto"]},"q2d1g_Y7W":{"layout":["auto","auto"]},"t_4qtuDxr":{"layout":["auto","auto"]},"RcXY0NVt3":{"layout":["auto","fixed"]},"jpoA8SNaC":{"layout":["auto","auto"]},"CMzxw1iem":{"layout":["auto","auto"]},"Ncb8PTxrr":{"layout":["auto","auto"]}}}',
        "framerAutoSizeImages": "true",
        "framerContractVersion": "1",
        "framerVariables": '{"mkLyGhWRQ":"color1","ozbI8aBcS":"color2"}'
      }
    },
    "__FramerMetadata__": {
      "type": "variable"
    }
  }
};
var _OriginalComponent = Bc52Q1e_A_default;
function Wehelpmake2Wrapped(props) {
  var _variant = useVariant(props.variant);
  var _inner = (_variant !== undefined) ? { ...props, variant: _variant } : props;
  return _ctxJsx(ContextProviders, { children: _ctxJsx(_OriginalComponent, _inner) });
}
Object.assign(Wehelpmake2Wrapped, _OriginalComponent);
export {  __FramerMetadata__,  Wehelpmake2Wrapped as default   };