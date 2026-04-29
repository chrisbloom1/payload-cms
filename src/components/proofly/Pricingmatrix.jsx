"use client"
// http-url:https://framerusercontent.com/modules/oTqWhKWyGDpCquz2Mv54/zeGTgUUnLksWO6622Gn4/CkeFAk831.js
import { jsx as _jsx2, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts as addFonts2, addPropertyControls as addPropertyControls2, ComponentViewportProvider, ControlType as ControlType2, cx as cx2, getFonts, RichText, SmartComponentScopedContainer, useActiveVariantCallback, useComponentViewport as useComponentViewport2, useLocaleInfo as useLocaleInfo2, useVariantState as useVariantState2, withCSS as withCSS2, withFX } from "@proofly-framer/runtime";
import { LayoutGroup as LayoutGroup2, motion as motion2, MotionConfigContext as MotionConfigContext2 } from "@proofly-framer/runtime";
import * as React2 from "react";
import { useRef as useRef2 } from "react";

// http-url:https://framerusercontent.com/modules/rZUGV2BIsGtQ83nacBh5/iQDCGZAiMelTi8SIEbMb/G6WHwM4iV.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "@proofly-framer/runtime";
import { LayoutGroup, motion, MotionConfigContext } from "@proofly-framer/runtime";
import * as React from "react";
import { useRef } from "react";
import { jsx as _ctxJsx } from "react/jsx-runtime";
import { ContextProviders, useVariant } from "@proofly-framer/runtime";
var cycleOrder = ["OIRtSzVJi", "PSyJB3XmH"];
var serializationHash = "framer-NKG4m";
var variantClassNames = {
  OIRtSzVJi: "framer-v-xa9pao",
  PSyJB3XmH: "framer-v-kw3otm"
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
  "single color": "PSyJB3XmH",
  gradient: "OIRtSzVJi"
};
var getProps = ({
  color,
  height,
  id,
  width,
  ...props
}) => {
  return {
    ...props,
    sehgKZpKS: color ?? props.sehgKZpKS ?? "var(--token-2ae4d622-3758-4fad-a56d-08fa00cc7638, rgb(173, 173, 199))",
    variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "OIRtSzVJi"
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
    sehgKZpKS,
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
    defaultVariant: "OIRtSzVJi",
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
          className: cx(scopingClassNames, "framer-xa9pao", className, classNames),
          "data-framer-name": "gradient",
          layoutDependency,
          layoutId: "OIRtSzVJi",
          ref: refBinding,
          style: {
            ...style
          },
          ...addPropertyOverrides({
            PSyJB3XmH: {
              "data-framer-name": "single color"
            }
          }, baseVariant, gestureVariant),
          children: _jsx(motion.div, {
            className: "framer-5kec28",
            layoutDependency,
            layoutId: "wjZIJum9p",
            style: {
              background: "linear-gradient(270deg, var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62)) 0%, var(--token-d40a5262-b4fe-45d5-9e97-61d735d1744e, rgb(255, 152, 0)) 100%)",
              backgroundColor: "rgba(0, 0, 0, 0)"
            },
            variants: {
              PSyJB3XmH: {
                background: `linear-gradient(270deg, ${sehgKZpKS} 0%, ${sehgKZpKS} 100%)`,
                backgroundColor: sehgKZpKS
              }
            }
          })
        })}</Transition>}</Variants>}</LayoutGroup>;
});
var css = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-NKG4m.framer-zakvr7, .framer-NKG4m .framer-zakvr7 { display: block; }", ".framer-NKG4m.framer-xa9pao { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 2px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 116px; }", ".framer-NKG4m .framer-5kec28 { flex: 1 0 0px; height: 100%; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; }"];
var FramerG6WHwM4iV = withCSS(Component, css, "framer-NKG4m");
var G6WHwM4iV_default = FramerG6WHwM4iV;
FramerG6WHwM4iV.displayName = "sep-line";
FramerG6WHwM4iV.defaultProps = {
  height: 2,
  width: 116
};
addPropertyControls(FramerG6WHwM4iV, {
  variant: {
    options: ["OIRtSzVJi", "PSyJB3XmH"],
    optionTitles: ["gradient", "single color"],
    title: "Variant",
    type: ControlType.Enum
  },
  sehgKZpKS: {
    defaultValue: 'var(--token-2ae4d622-3758-4fad-a56d-08fa00cc7638, rgb(173, 173, 199))',
    title: "color",
    type: ControlType.Color
  }
});
addFonts(FramerG6WHwM4iV, [{
  explicitInter: true,
  fonts: []
}], {
  supportsExplicitInterCodegen: true
});

// http-url:https://framerusercontent.com/modules/oTqWhKWyGDpCquz2Mv54/zeGTgUUnLksWO6622Gn4/CkeFAk831.js
var RichTextWithFX = withFX(RichText);
var SepLineFonts = getFonts(G6WHwM4iV_default);
var cycleOrder2 = ["msWzoZ5wF", "cuagyt069", "vGIzjqcNO", "pJHmrJ94C"];
var serializationHash2 = "framer-cql3d";
var variantClassNames2 = {
  cuagyt069: "framer-v-1hg0c7y",
  msWzoZ5wF: "framer-v-1mlfsao",
  pJHmrJ94C: "framer-v-4ha265",
  vGIzjqcNO: "framer-v-1stosg7"
};
function addPropertyOverrides2(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach(variant => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition12 = {
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
  scale: 1,
  skewX: 0,
  skewY: 0,
  x: 0,
  y: 0
};
var transition2 = {
  delay: 0.2,
  duration: 0.4,
  ease: [0.44, 0, 0.56, 1],
  type: "tween"
};
var animation1 = {
  opacity: 0,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  skewX: 0,
  skewY: 0,
  transition: transition2,
  x: 0,
  y: 0
};
var Transition2 = ({
  value,
  children
}) => {
  const config = React2.useContext(MotionConfigContext2);
  const transition = value ?? config.transition;
  const contextValue = React2.useMemo(() => ({
    ...config,
    transition
  }), [JSON.stringify(transition)]);
  return <MotionConfigContext2.Provider value={contextValue}>{children}</MotionConfigContext2.Provider>;
};
var Variants2 = motion2.create(React2.Fragment);
var humanReadableVariantMap2 = {
  "phone-full": "pJHmrJ94C",
  "phone-growth": "vGIzjqcNO",
  "phone-seed": "cuagyt069",
  "Variant 1": "msWzoZ5wF"
};
var getProps2 = ({
  height,
  id,
  width,
  ...props
}) => {
  return {
    ...props,
    variant: humanReadableVariantMap2[props.variant] ?? props.variant ?? "msWzoZ5wF"
  };
};
var createLayoutDependency2 = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component2 = React2.forwardRef(function (props, ref) {
  const fallbackRef = useRef2(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React2.useId();
  const {
    activeLocale,
    setLocale
  } = useLocaleInfo2();
  const componentViewport = useComponentViewport2();
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
  } = useVariantState2({
    cycleOrder: cycleOrder2,
    defaultVariant: "msWzoZ5wF",
    ref: refBinding,
    variant,
    variantClassNames: variantClassNames2
  });
  const layoutDependency = createLayoutDependency2(props, variants);
  const {
    activeVariantCallback,
    delay
  } = useActiveVariantCallback(baseVariant);
  const onTap1tlw5g7 = activeVariantCallback(async (...args) => {
    setVariant("INFkX7Ds5");
  });
  const onTapva567y = activeVariantCallback(async (...args) => {
    setVariant("cuagyt069");
  });
  const onTapa891a7 = activeVariantCallback(async (...args) => {
    setVariant("YbPRxhZKN");
  });
  const onTapqkz07s = activeVariantCallback(async (...args) => {
    setVariant("vGIzjqcNO");
  });
  const onTapwtohag = activeVariantCallback(async (...args) => {
    setVariant("pJHmrJ94C");
  });
  const sharedStyleClassNames = [];
  const scopingClassNames = cx2(serializationHash2, ...sharedStyleClassNames);
  const isDisplayed = () => {
    if (["cuagyt069", "vGIzjqcNO", "pJHmrJ94C"].includes(baseVariant)) return true;
    return false;
  };
  const isDisplayed1 = () => {
    if (["cuagyt069", "vGIzjqcNO", "pJHmrJ94C"].includes(baseVariant)) return false;
    return true;
  };
  const isDisplayed2 = () => {
    if (["vGIzjqcNO", "pJHmrJ94C"].includes(baseVariant)) return false;
    return true;
  };
  const isDisplayed3 = () => {
    if (["cuagyt069", "pJHmrJ94C"].includes(baseVariant)) return false;
    return true;
  };
  const isDisplayed4 = () => {
    if (["cuagyt069", "vGIzjqcNO"].includes(baseVariant)) return false;
    return true;
  };
  return <LayoutGroup2 id={layoutId ?? defaultLayoutId}>{<Variants2 animate={variants} initial={false}>{<Transition2 value={transition12}>{_jsxs(motion2.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx2(scopingClassNames, "framer-1mlfsao", className, classNames),
          "data-framer-name": "Variant 1",
          layoutDependency,
          layoutId: "msWzoZ5wF",
          ref: refBinding,
          style: {
            ...style
          },
          ...addPropertyOverrides2({
            cuagyt069: {
              "data-framer-name": "phone-seed"
            },
            pJHmrJ94C: {
              "data-framer-name": "phone-full"
            },
            vGIzjqcNO: {
              "data-framer-name": "phone-growth"
            }
          }, baseVariant, gestureVariant),
          children: [isDisplayed() && _jsxs(motion2.div, {
            className: "framer-1chqgvh",
            "data-framer-name": "nav",
            layoutDependency,
            layoutId: "lsRImA2vI",
            children: [<RichText __fromCanvasComponent className="framer-kmd9io" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="pFgI2Ehym" style={{
              "--extracted-r6o4lv": "var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143))",
              "--framer-link-text-color": "rgb(0, 153, 255)",
              "--framer-link-text-decoration": "underline"
            }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides2({
              cuagyt069: {
                children: <React2.Fragment>{_jsxs(motion2.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-font-size": "12px",
                      "--framer-line-height": "120%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)))"
                    },
                    children: ["Select", _jsx2(motion2.br, {}), "Plan ->"]
                  })}</React2.Fragment>
              },
              pJHmrJ94C: {
                children: <React2.Fragment>{_jsxs(motion2.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-font-size": "12px",
                      "--framer-line-height": "120%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)))"
                    },
                    children: ["Select", _jsx2(motion2.br, {}), "Plan ->"]
                  })}</React2.Fragment>
              },
              vGIzjqcNO: {
                children: <React2.Fragment>{_jsxs(motion2.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-font-size": "12px",
                      "--framer-line-height": "120%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)))"
                    },
                    children: ["Select", _jsx2(motion2.br, {}), "Plan ->"]
                  })}</React2.Fragment>
              }
            }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsxs(motion2.p, {
                  style: {
                    "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                    "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                    "--framer-font-size": "12px",
                    "--framer-line-height": "120%",
                    "--framer-text-alignment": "left",
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)))"
                  },
                  children: ["Select", _jsx2(motion2.br, {}), "Plan ->"]
                })}</React2.Fragment>}</RichText>, _jsx2(motion2.div, {
              className: "framer-mv0uf9",
              "data-framer-name": "L",
              layoutDependency,
              layoutId: "wbEb6HS5y",
              children: _jsx2(motion2.div, {
                className: "framer-i0e3y3",
                "data-framer-name": "Frame 896",
                layoutDependency,
                layoutId: "Wx2u3E7FO",
                children: _jsx2(motion2.div, {
                  className: "framer-1clv0ug",
                  "data-framer-name": "Frame 1146",
                  "data-highlight": true,
                  layoutDependency,
                  layoutId: "Dh9AMmkBv",
                  onTap: onTap1tlw5g7,
                  style: {
                    backgroundColor: "var(--token-2ae4d622-3758-4fad-a56d-08fa00cc7638, rgb(173, 173, 199))",
                    borderBottomLeftRadius: 2,
                    borderBottomRightRadius: 2,
                    borderTopLeftRadius: 2,
                    borderTopRightRadius: 2
                  },
                  variants: {
                    cuagyt069: {
                      backgroundColor: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
                    }
                  },
                  ...addPropertyOverrides2({
                    cuagyt069: {
                      onTap: onTapva567y
                    },
                    pJHmrJ94C: {
                      onTap: onTapva567y
                    },
                    vGIzjqcNO: {
                      onTap: onTapva567y
                    }
                  }, baseVariant, gestureVariant),
                  children: <RichText __fromCanvasComponent className="framer-e9jaic" data-framer-name="FULL BLOOM" fonts={["GF;Haffer-regular"]} layoutDependency={layoutDependency} layoutId="EdOBL47qu" style={{
                    "--extracted-r6o4lv": "var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248))",
                    "--framer-paragraph-spacing": "0px"
                  }} verticalAlignment="center" withExternalLayout>{<React2.Fragment>{_jsx2(motion2.p, {
                        style: {
                          "--font-selector": "R0Y7SGFmZmVyLXJlZ3VsYXI=",
                          "--framer-font-family": '"Haffer", "Haffer Placeholder", sans-serif',
                          "--framer-font-size": "12px",
                          "--framer-letter-spacing": "0.02em",
                          "--framer-line-height": "19.41px",
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)))"
                        },
                        children: "SEED"
                      })}</React2.Fragment>}</RichText>
                })
              })
            }), _jsx2(motion2.div, {
              className: "framer-1835qjo",
              "data-framer-name": "L",
              layoutDependency,
              layoutId: "VkcoQnD6j",
              children: _jsx2(motion2.div, {
                className: "framer-uy72j1",
                "data-framer-name": "Frame 896",
                layoutDependency,
                layoutId: "G4ELUSaQJ",
                children: _jsx2(motion2.div, {
                  className: "framer-19o3dd3",
                  "data-framer-name": "Frame 1146",
                  "data-highlight": true,
                  layoutDependency,
                  layoutId: "sZpmmPaiQ",
                  onTap: onTapa891a7,
                  style: {
                    backgroundColor: "var(--token-2ae4d622-3758-4fad-a56d-08fa00cc7638, rgb(173, 173, 199))",
                    borderBottomLeftRadius: 2,
                    borderBottomRightRadius: 2,
                    borderTopLeftRadius: 2,
                    borderTopRightRadius: 2
                  },
                  variants: {
                    vGIzjqcNO: {
                      backgroundColor: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
                    }
                  },
                  ...addPropertyOverrides2({
                    cuagyt069: {
                      onTap: onTapqkz07s
                    },
                    pJHmrJ94C: {
                      onTap: onTapqkz07s
                    },
                    vGIzjqcNO: {
                      onTap: onTapqkz07s
                    }
                  }, baseVariant, gestureVariant),
                  children: <RichText __fromCanvasComponent className="framer-am35yq" data-framer-name="FULL BLOOM" fonts={["GF;Haffer-regular"]} layoutDependency={layoutDependency} layoutId="dK02IeqlP" style={{
                    "--extracted-r6o4lv": "var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248))",
                    "--framer-paragraph-spacing": "0px"
                  }} verticalAlignment="center" withExternalLayout>{<React2.Fragment>{_jsx2(motion2.p, {
                        style: {
                          "--font-selector": "R0Y7SGFmZmVyLXJlZ3VsYXI=",
                          "--framer-font-family": '"Haffer", "Haffer Placeholder", sans-serif',
                          "--framer-font-size": "12px",
                          "--framer-letter-spacing": "0.02em",
                          "--framer-line-height": "19.41px",
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)))"
                        },
                        children: "GROWTH"
                      })}</React2.Fragment>}</RichText>
                })
              })
            }), _jsx2(motion2.div, {
              className: "framer-1pe9gmk",
              "data-framer-name": "L",
              layoutDependency,
              layoutId: "r1JjHO8Ve",
              children: _jsx2(motion2.div, {
                className: "framer-rb1r44",
                "data-framer-name": "Frame 896",
                layoutDependency,
                layoutId: "L8WmV_MF9",
                children: _jsx2(motion2.div, {
                  className: "framer-iaafce",
                  "data-framer-name": "Frame 1146",
                  layoutDependency,
                  layoutId: "KClVmc_9Y",
                  style: {
                    backgroundColor: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                    borderBottomLeftRadius: 2,
                    borderBottomRightRadius: 2,
                    borderTopLeftRadius: 2,
                    borderTopRightRadius: 2
                  },
                  variants: {
                    cuagyt069: {
                      backgroundColor: "var(--token-2ae4d622-3758-4fad-a56d-08fa00cc7638, rgb(173, 173, 199))"
                    },
                    vGIzjqcNO: {
                      backgroundColor: "var(--token-2ae4d622-3758-4fad-a56d-08fa00cc7638, rgb(173, 173, 199))"
                    }
                  },
                  ...addPropertyOverrides2({
                    cuagyt069: {
                      "data-highlight": true,
                      onTap: onTapwtohag
                    },
                    pJHmrJ94C: {
                      "data-highlight": true,
                      onTap: onTapwtohag
                    },
                    vGIzjqcNO: {
                      "data-highlight": true,
                      onTap: onTapwtohag
                    }
                  }, baseVariant, gestureVariant),
                  children: <RichText __fromCanvasComponent className="framer-1gbbd52" data-framer-name="FULL BLOOM" fonts={["GF;Haffer-regular"]} layoutDependency={layoutDependency} layoutId="xydDxl1wM" style={{
                    "--extracted-r6o4lv": "var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248))",
                    "--framer-paragraph-spacing": "0px"
                  }} verticalAlignment="center" withExternalLayout>{<React2.Fragment>{_jsx2(motion2.p, {
                        style: {
                          "--font-selector": "R0Y7SGFmZmVyLXJlZ3VsYXI=",
                          "--framer-font-family": '"Haffer", "Haffer Placeholder", sans-serif',
                          "--framer-font-size": "12px",
                          "--framer-letter-spacing": "0.02em",
                          "--framer-line-height": "19.41px",
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)))"
                        },
                        children: "FULL BLOOM"
                      })}</React2.Fragment>}</RichText>
                })
              })
            })]
          }), isDisplayed1() && _jsxs(motion2.div, {
            className: "framer-10ps3c5",
            layoutDependency,
            layoutId: "SiURQABq9",
            children: [_jsx2(motion2.div, {
              className: "framer-6nz85u",
              "data-framer-name": "description",
              layoutDependency,
              layoutId: "WdQTfROdy",
              children: _jsx2(motion2.div, {
                className: "framer-1ac69s7",
                layoutDependency,
                layoutId: "HFMxhxSpr",
                children: <RichText __fromCanvasComponent className="framer-sczk59" data-framer-name="Monthly Membership" fonts={["CUSTOM;Haffer Bold"]} layoutDependency={layoutDependency} layoutId="zJJl7uGYp" style={{
                  "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                  "--framer-paragraph-spacing": "9.60006332397461px"
                }} verticalAlignment="center" withExternalLayout>{<React2.Fragment>{_jsx2(motion2.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                        "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                        "--framer-font-size": "12px",
                        "--framer-line-height": "110%",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                      },
                      children: " "
                    })}</React2.Fragment>}</RichText>
              })
            }), _jsxs(motion2.div, {
              className: "framer-y9eg1d",
              layoutDependency,
              layoutId: "Bh4hPMhxI",
              children: [_jsx2(motion2.div, {
                className: "framer-yippg7",
                "data-framer-name": "seed",
                layoutDependency,
                layoutId: "y6pcfJW0h",
                children: <RichText __fromCanvasComponent className="framer-11wlsw4" data-framer-name="$500" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="UM6Km27o7" style={{
                  "--extracted-r6o4lv": "var(--token-d40a5262-b4fe-45d5-9e97-61d735d1744e, rgb(255, 152, 0))",
                  "--framer-paragraph-spacing": "0px"
                }} verticalAlignment="center" withExternalLayout>{<React2.Fragment>{_jsx2(motion2.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "24px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "left",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d40a5262-b4fe-45d5-9e97-61d735d1744e, rgb(255, 152, 0)))"
                      },
                      children: "Seed"
                    })}</React2.Fragment>}</RichText>
              }), _jsx2(motion2.div, {
                className: "framer-1oo855u",
                "data-framer-name": "grow",
                layoutDependency,
                layoutId: "ZQbNOZEPC",
                children: <RichText __fromCanvasComponent className="framer-7uizz4" data-framer-name="$500" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="Smmy0aYqK" style={{
                  "--extracted-r6o4lv": "var(--token-72a14b31-6f29-4213-aff7-7a715cf36f11, rgb(252, 76, 1))",
                  "--framer-paragraph-spacing": "0px"
                }} verticalAlignment="center" withExternalLayout>{<React2.Fragment>{_jsx2(motion2.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "24px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "left",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-72a14b31-6f29-4213-aff7-7a715cf36f11, rgb(252, 76, 1)))"
                      },
                      children: "Growth"
                    })}</React2.Fragment>}</RichText>
              }), _jsx2(motion2.div, {
                className: "framer-tu03ni",
                "data-framer-name": "full",
                layoutDependency,
                layoutId: "YL5DKHiQg",
                children: <RichText __fromCanvasComponent className="framer-1wobeg9" data-framer-name="$500" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="j7oubPiwX" style={{
                  "--extracted-r6o4lv": "var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62))",
                  "--framer-paragraph-spacing": "0px"
                }} verticalAlignment="center" withExternalLayout>{<React2.Fragment>{_jsx2(motion2.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "24px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "left",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62)))"
                      },
                      children: "Full Bloom"
                    })}</React2.Fragment>}</RichText>
              })]
            })]
          }), _jsxs(motion2.div, {
            className: "framer-1gubwwl",
            layoutDependency,
            layoutId: "UyixQ3HUj",
            children: [_jsx2(motion2.div, {
              className: "framer-pxt0vh",
              "data-framer-name": "description",
              layoutDependency,
              layoutId: "c8Tw_vTv3",
              children: <RichText __fromCanvasComponent className="framer-yncdz9" data-framer-name="Monthly Membership" fonts={["CUSTOM;Haffer Bold"]} layoutDependency={layoutDependency} layoutId="fh_Ilehbn" style={{
                "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                "--framer-paragraph-spacing": "9.60006332397461px"
              }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides2({
                cuagyt069: {
                  children: <React2.Fragment>{_jsx2(motion2.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                        "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                        "--framer-font-size": "12px",
                        "--framer-line-height": "110%",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                      },
                      children: "Tiers"
                    })}</React2.Fragment>
                },
                pJHmrJ94C: {
                  children: <React2.Fragment>{_jsx2(motion2.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                        "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                        "--framer-font-size": "12px",
                        "--framer-line-height": "110%",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                      },
                      children: "Tiers"
                    })}</React2.Fragment>
                },
                vGIzjqcNO: {
                  children: <React2.Fragment>{_jsx2(motion2.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                        "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                        "--framer-font-size": "12px",
                        "--framer-line-height": "110%",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                      },
                      children: "Tiers"
                    })}</React2.Fragment>
                }
              }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsx2(motion2.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                      "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                      "--framer-font-size": "14px",
                      "--framer-line-height": "110%",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                    },
                    children: "Tiers"
                  })}</React2.Fragment>}</RichText>
            }), _jsxs(motion2.div, {
              className: "framer-hz7ly5",
              layoutDependency,
              layoutId: "yq31PkrAG",
              children: [isDisplayed2() && _jsxs(motion2.div, {
                className: "framer-tadthj",
                "data-framer-name": "seed",
                layoutDependency,
                layoutId: "rJEZ4jtS1",
                style: {
                  backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))",
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8
                },
                children: [<RichTextWithFX __fromCanvasComponent className="framer-xw74y" data-framer-name="$500" fonts={["CUSTOM;Haffer Regular", "CUSTOM;Haffer Bold"]} layoutDependency={layoutDependency} layoutId="dXiaaA92s" style={{
                  "--extracted-1lwpl3i": "var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143))",
                  "--extracted-as4nhg": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                  "--framer-paragraph-spacing": "0px"
                }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides2({
                  cuagyt069: {
                    __framer__animate: {
                      transition: transition2
                    },
                    __framer__animateOnce: false,
                    __framer__enter: animation,
                    __framer__exit: animation1,
                    __framer__styleAppearEffectEnabled: true,
                    __framer__threshold: 0.5,
                    __perspectiveFX: false,
                    __smartComponentFX: true,
                    __targetOpacity: 1
                  }
                }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsxs(motion2.h5, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "12px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "left",
                        "--framer-text-color": "var(--extracted-1lwpl3i, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)))"
                      },
                      children: [_jsx2(motion2.span, {
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                          "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                          "--framer-font-size": "24px",
                          "--framer-text-color": "var(--extracted-as4nhg, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                        },
                        children: "$500"
                      }), "/month"]
                    })}</React2.Fragment>}</RichTextWithFX>, <RichTextWithFX __fromCanvasComponent className="framer-7usysk" data-framer-name="$500" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="BYvQ7lgJN" style={{
                  "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                  "--framer-paragraph-spacing": "0px"
                }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides2({
                  cuagyt069: {
                    __framer__animate: {
                      transition: transition2
                    },
                    __framer__animateOnce: false,
                    __framer__enter: animation,
                    __framer__exit: animation1,
                    __framer__styleAppearEffectEnabled: true,
                    __framer__threshold: 0.5,
                    __perspectiveFX: false,
                    __smartComponentFX: true,
                    __targetOpacity: 1
                  }
                }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsx2(motion2.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "14px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "left",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                      },
                      children: "Best for hardware brands to get full access to Bloom's network, with limited access to finance tools."
                    })}</React2.Fragment>}</RichTextWithFX>]
              }), isDisplayed3() && _jsxs(motion2.div, {
                className: "framer-1nmhh2d",
                "data-framer-name": "grow",
                layoutDependency,
                layoutId: "j0Z4SVX1d",
                style: {
                  backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))",
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8
                },
                children: [<RichTextWithFX __fromCanvasComponent className="framer-l02skh" data-framer-name="$500" fonts={["CUSTOM;Haffer Bold", "CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="kLlkBjVOW" style={{
                  "--extracted-1lwpl3i": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                  "--extracted-1nqvagd": "var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143))",
                  "--framer-paragraph-spacing": "0px"
                }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides2({
                  vGIzjqcNO: {
                    __framer__animate: {
                      transition: transition2
                    },
                    __framer__animateOnce: false,
                    __framer__enter: animation,
                    __framer__exit: animation1,
                    __framer__styleAppearEffectEnabled: true,
                    __framer__threshold: 0.5,
                    __perspectiveFX: false,
                    __smartComponentFX: true,
                    __targetOpacity: 1
                  }
                }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsxs(motion2.h5, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                        "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                        "--framer-font-size": "12px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "left",
                        "--framer-text-color": "var(--extracted-1lwpl3i, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                      },
                      children: [_jsx2(motion2.span, {
                        style: {
                          "--framer-font-size": "24px"
                        },
                        children: "$2,000"
                      }), _jsx2(motion2.span, {
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                          "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                          "--framer-text-color": "var(--extracted-1nqvagd, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)))"
                        },
                        children: "/month"
                      })]
                    })}</React2.Fragment>}</RichTextWithFX>, <RichTextWithFX __fromCanvasComponent className="framer-121v15v" data-framer-name="$500" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="tb_1AISFX" style={{
                  "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                  "--framer-paragraph-spacing": "0px"
                }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides2({
                  vGIzjqcNO: {
                    __framer__animate: {
                      transition: transition2
                    },
                    __framer__animateOnce: false,
                    __framer__enter: animation,
                    __framer__exit: animation1,
                    __framer__styleAppearEffectEnabled: true,
                    __framer__threshold: 0.5,
                    __perspectiveFX: false,
                    __smartComponentFX: true,
                    __targetOpacity: 1
                  }
                }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsx2(motion2.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "14px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "left",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                      },
                      children: "Best for hardware companies with operational spend over $50,000/month and more complex supply chains."
                    })}</React2.Fragment>}</RichTextWithFX>]
              }), isDisplayed4() && _jsxs(motion2.div, {
                className: "framer-xw98ig",
                "data-framer-name": "full",
                layoutDependency,
                layoutId: "KRoa1SGeq",
                style: {
                  backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))",
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8
                },
                children: [<RichTextWithFX __fromCanvasComponent className="framer-43u8lm" data-framer-name="$500" fonts={["CUSTOM;Haffer Bold", "CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="vyl_kyg3C" style={{
                  "--extracted-1lwpl3i": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                  "--extracted-1nqvagd": "var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143))",
                  "--framer-paragraph-spacing": "0px"
                }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides2({
                  pJHmrJ94C: {
                    __framer__animate: {
                      transition: transition2
                    },
                    __framer__animateOnce: false,
                    __framer__enter: animation,
                    __framer__exit: animation1,
                    __framer__styleAppearEffectEnabled: true,
                    __framer__threshold: 0.5,
                    __perspectiveFX: false,
                    __smartComponentFX: true,
                    __targetOpacity: 1
                  }
                }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsxs(motion2.h5, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                        "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                        "--framer-font-size": "12px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "left",
                        "--framer-text-color": "var(--extracted-1lwpl3i, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                      },
                      children: [_jsx2(motion2.span, {
                        style: {
                          "--framer-font-size": "24px"
                        },
                        children: "$6,000"
                      }), _jsx2(motion2.span, {
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                          "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                          "--framer-text-color": "var(--extracted-1nqvagd, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)))"
                        },
                        children: "/month"
                      })]
                    })}</React2.Fragment>}</RichTextWithFX>, <RichTextWithFX __fromCanvasComponent className="framer-712227" data-framer-name="$500" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="j_M1dlzPY" style={{
                  "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                  "--framer-paragraph-spacing": "0px"
                }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides2({
                  pJHmrJ94C: {
                    __framer__animate: {
                      transition: transition2
                    },
                    __framer__animateOnce: false,
                    __framer__enter: animation,
                    __framer__exit: animation1,
                    __framer__styleAppearEffectEnabled: true,
                    __framer__threshold: 0.5,
                    __perspectiveFX: false,
                    __smartComponentFX: true,
                    __targetOpacity: 1
                  }
                }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsx2(motion2.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "14px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "left",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                      },
                      children: "Best for enterprise and rapid growth hardware brands with custom solutions."
                    })}</React2.Fragment>}</RichTextWithFX>]
              })]
            })]
          }), <ComponentViewportProvider height={2} width={componentViewport?.width || "100vw"} y={(componentViewport?.y || 0) + 0 + (((componentViewport?.height || 457) - 0 - 779) / 2 + 166 + 0)} {...addPropertyOverrides2({
            cuagyt069: {
              y: (componentViewport?.y || 0) + 0 + (((componentViewport?.height || 514) - 0 - 786) / 2 + 228 + 0)
            },
            pJHmrJ94C: {
              y: (componentViewport?.y || 0) + 0 + (((componentViewport?.height || 514) - 0 - 786) / 2 + 228 + 0)
            },
            vGIzjqcNO: {
              y: (componentViewport?.y || 0) + 0 + (((componentViewport?.height || 514) - 0 - 786) / 2 + 228 + 0)
            }
          }, baseVariant, gestureVariant)}>{<SmartComponentScopedContainer className="framer-kbmm39-container" layoutDependency={layoutDependency} layoutId="k_eq8Y_kU-container" nodeId="k_eq8Y_kU" rendersWithMotion scopeId="CkeFAk831">{<G6WHwM4iV_default height="100%" id="k_eq8Y_kU" layoutId="k_eq8Y_kU" sehgKZpKS="rgba(245, 245, 247, 0)" style={{
                height: "100%",
                width: "100%"
              }} variant="PSyJB3XmH" width="100%" />}</SmartComponentScopedContainer>}</ComponentViewportProvider>, _jsxs(motion2.div, {
            className: "framer-17q2oej",
            layoutDependency,
            layoutId: "tntyHBNVQ",
            children: [_jsx2(motion2.div, {
              className: "framer-ejmxav",
              "data-framer-name": "description",
              layoutDependency,
              layoutId: "YeLEfBZ6C",
              children: _jsxs(motion2.div, {
                className: "framer-1p0h0v9",
                layoutDependency,
                layoutId: "nBGOUvsno",
                children: [<RichText __fromCanvasComponent className="framer-448m1k" data-framer-name="Monthly Membership" fonts={["CUSTOM;Haffer Bold"]} layoutDependency={layoutDependency} layoutId="ITpn_gNyJ" style={{
                  "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                  "--framer-paragraph-spacing": "9.60006332397461px"
                }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides2({
                  cuagyt069: {
                    children: <React2.Fragment>{_jsx2(motion2.p, {
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                          "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                          "--framer-font-size": "12px",
                          "--framer-line-height": "110%",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                        },
                        children: "Delivery partners"
                      })}</React2.Fragment>
                  },
                  pJHmrJ94C: {
                    children: <React2.Fragment>{_jsx2(motion2.p, {
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                          "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                          "--framer-font-size": "12px",
                          "--framer-line-height": "110%",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                        },
                        children: "Delivery partners"
                      })}</React2.Fragment>
                  },
                  vGIzjqcNO: {
                    children: <React2.Fragment>{_jsx2(motion2.p, {
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                          "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                          "--framer-font-size": "12px",
                          "--framer-line-height": "110%",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                        },
                        children: "Delivery partners"
                      })}</React2.Fragment>
                  }
                }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsx2(motion2.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                        "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                        "--framer-font-size": "14px",
                        "--framer-line-height": "110%",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                      },
                      children: "Delivery partners"
                    })}</React2.Fragment>}</RichText>, <RichText __fromCanvasComponent className="framer-bfbcio" data-framer-name="Monthly Membership" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="n7OocNWcd" style={{
                  "--extracted-r6o4lv": "var(--token-2ae4d622-3758-4fad-a56d-08fa00cc7638, rgb(173, 173, 199))",
                  "--framer-paragraph-spacing": "9.60006332397461px"
                }} verticalAlignment="center" withExternalLayout>{<React2.Fragment>{_jsx2(motion2.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "10px",
                        "--framer-line-height": "110%",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-2ae4d622-3758-4fad-a56d-08fa00cc7638, rgb(173, 173, 199)))"
                      },
                      children: "Logistics, warehousing, shipping"
                    })}</React2.Fragment>}</RichText>]
              })
            }), _jsxs(motion2.div, {
              className: "framer-14fi2w4",
              layoutDependency,
              layoutId: "NMXRKJTly",
              children: [isDisplayed2() && _jsx2(motion2.div, {
                className: "framer-hamuyo",
                "data-framer-name": "seed",
                layoutDependency,
                layoutId: "foxGOJKCd",
                style: {
                  backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))"
                },
                children: <RichTextWithFX __fromCanvasComponent className="framer-1tok6lo" data-framer-name="$500" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="REWRgaZIE" style={{
                  "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                  "--framer-paragraph-spacing": "0px"
                }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides2({
                  cuagyt069: {
                    __framer__animate: {
                      transition: transition2
                    },
                    __framer__animateOnce: false,
                    __framer__enter: animation,
                    __framer__exit: animation1,
                    __framer__styleAppearEffectEnabled: true,
                    __framer__threshold: 0.5,
                    __perspectiveFX: false,
                    __smartComponentFX: true,
                    __targetOpacity: 1
                  }
                }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsx2(motion2.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "14px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "left",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                      },
                      children: "Bloom's Preferred Pricing"
                    })}</React2.Fragment>}</RichTextWithFX>
              }), isDisplayed3() && _jsx2(motion2.div, {
                className: "framer-uigr5s",
                "data-framer-name": "grow",
                layoutDependency,
                layoutId: "k6sf7kGQU",
                style: {
                  backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))"
                },
                children: <RichTextWithFX __fromCanvasComponent className="framer-g61aac" data-framer-name="$500" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="TbS0b2dXg" style={{
                  "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                  "--framer-paragraph-spacing": "0px"
                }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides2({
                  vGIzjqcNO: {
                    __framer__animate: {
                      transition: transition2
                    },
                    __framer__animateOnce: false,
                    __framer__enter: animation,
                    __framer__exit: animation1,
                    __framer__styleAppearEffectEnabled: true,
                    __framer__threshold: 0.5,
                    __perspectiveFX: false,
                    __smartComponentFX: true,
                    __targetOpacity: 1
                  }
                }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsx2(motion2.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "14px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "left",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                      },
                      children: "Bloom's Preferred Pricing with volume discount"
                    })}</React2.Fragment>}</RichTextWithFX>
              }), isDisplayed4() && _jsx2(motion2.div, {
                className: "framer-1j8bz31",
                "data-framer-name": "full",
                layoutDependency,
                layoutId: "Vm3akB38i",
                style: {
                  backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))"
                },
                children: <RichTextWithFX __fromCanvasComponent className="framer-lbh187" data-framer-name="$500" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="RqL7d5dvZ" style={{
                  "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                  "--framer-paragraph-spacing": "0px"
                }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides2({
                  pJHmrJ94C: {
                    __framer__animate: {
                      transition: transition2
                    },
                    __framer__animateOnce: false,
                    __framer__enter: animation,
                    __framer__exit: animation1,
                    __framer__styleAppearEffectEnabled: true,
                    __framer__threshold: 0.5,
                    __perspectiveFX: false,
                    __smartComponentFX: true,
                    __targetOpacity: 1
                  }
                }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsx2(motion2.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "14px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "left",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                      },
                      children: "Custom"
                    })}</React2.Fragment>}</RichTextWithFX>
              })]
            })]
          }), <ComponentViewportProvider height={2} width={componentViewport?.width || "100vw"} y={(componentViewport?.y || 0) + 0 + (((componentViewport?.height || 457) - 0 - 779) / 2 + 316 + 0)} {...addPropertyOverrides2({
            cuagyt069: {
              y: (componentViewport?.y || 0) + 0 + (((componentViewport?.height || 514) - 0 - 786) / 2 + 367 + 0)
            },
            pJHmrJ94C: {
              y: (componentViewport?.y || 0) + 0 + (((componentViewport?.height || 514) - 0 - 786) / 2 + 367 + 0)
            },
            vGIzjqcNO: {
              y: (componentViewport?.y || 0) + 0 + (((componentViewport?.height || 514) - 0 - 786) / 2 + 367 + 0)
            }
          }, baseVariant, gestureVariant)}>{<SmartComponentScopedContainer className="framer-1mi7pxx-container" layoutDependency={layoutDependency} layoutId="r2oaeG8WN-container" nodeId="r2oaeG8WN" rendersWithMotion scopeId="CkeFAk831">{<G6WHwM4iV_default height="100%" id="r2oaeG8WN" layoutId="r2oaeG8WN" sehgKZpKS="rgba(245, 245, 247, 0)" style={{
                height: "100%",
                width: "100%"
              }} variant="PSyJB3XmH" width="100%" />}</SmartComponentScopedContainer>}</ComponentViewportProvider>, _jsxs(motion2.div, {
            className: "framer-10ue7ql",
            layoutDependency,
            layoutId: "iNl4SKRyd",
            children: [_jsx2(motion2.div, {
              className: "framer-o59l1d",
              "data-framer-name": "description",
              layoutDependency,
              layoutId: "pW33UH1Of",
              children: _jsxs(motion2.div, {
                className: "framer-tw82up",
                layoutDependency,
                layoutId: "qdkjJbcOG",
                children: [<RichText __fromCanvasComponent className="framer-190a71e" data-framer-name="Monthly Membership" fonts={["CUSTOM;Haffer Bold"]} layoutDependency={layoutDependency} layoutId="PMtChB8Dl" style={{
                  "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                  "--framer-paragraph-spacing": "9.60006332397461px"
                }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides2({
                  cuagyt069: {
                    children: <React2.Fragment>{_jsx2(motion2.p, {
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                          "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                          "--framer-font-size": "12px",
                          "--framer-line-height": "110%",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                        },
                        children: "Build partners"
                      })}</React2.Fragment>
                  },
                  pJHmrJ94C: {
                    children: <React2.Fragment>{_jsx2(motion2.p, {
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                          "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                          "--framer-font-size": "12px",
                          "--framer-line-height": "110%",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                        },
                        children: "Build partners"
                      })}</React2.Fragment>
                  },
                  vGIzjqcNO: {
                    children: <React2.Fragment>{_jsx2(motion2.p, {
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                          "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                          "--framer-font-size": "12px",
                          "--framer-line-height": "110%",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                        },
                        children: "Build partners"
                      })}</React2.Fragment>
                  }
                }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsx2(motion2.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                        "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                        "--framer-font-size": "14px",
                        "--framer-line-height": "110%",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                      },
                      children: "Build partners"
                    })}</React2.Fragment>}</RichText>, <RichText __fromCanvasComponent className="framer-1pdje62" data-framer-name="Monthly Membership" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="GlKmTaMvn" style={{
                  "--extracted-r6o4lv": "var(--token-2ae4d622-3758-4fad-a56d-08fa00cc7638, rgb(173, 173, 199))",
                  "--framer-paragraph-spacing": "9.60006332397461px"
                }} verticalAlignment="center" withExternalLayout>{<React2.Fragment>{_jsx2(motion2.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "10px",
                        "--framer-line-height": "110%",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-2ae4d622-3758-4fad-a56d-08fa00cc7638, rgb(173, 173, 199)))"
                      },
                      children: "Contract manufacturing, assembly"
                    })}</React2.Fragment>}</RichText>]
              })
            }), _jsxs(motion2.div, {
              className: "framer-14uu7vi",
              layoutDependency,
              layoutId: "CqUh8k5nb",
              children: [isDisplayed2() && _jsx2(motion2.div, {
                className: "framer-6j9y5r",
                "data-framer-name": "seed",
                layoutDependency,
                layoutId: "PphcsuMFC",
                style: {
                  backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))"
                },
                children: <RichTextWithFX __fromCanvasComponent className="framer-1sv6lhx" data-framer-name="$500" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="af9pm850o" style={{
                  "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                  "--framer-paragraph-spacing": "0px"
                }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides2({
                  cuagyt069: {
                    __framer__animate: {
                      transition: transition2
                    },
                    __framer__animateOnce: false,
                    __framer__enter: animation,
                    __framer__exit: animation1,
                    __framer__styleAppearEffectEnabled: true,
                    __framer__threshold: 0.5,
                    __perspectiveFX: false,
                    __smartComponentFX: true,
                    __targetOpacity: 1
                  }
                }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsx2(motion2.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "14px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "left",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                      },
                      children: "Bloom's Preferred Pricing"
                    })}</React2.Fragment>}</RichTextWithFX>
              }), isDisplayed3() && _jsx2(motion2.div, {
                className: "framer-1yle7d0",
                "data-framer-name": "grow",
                layoutDependency,
                layoutId: "ffuxqY_hr",
                style: {
                  backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))"
                },
                children: <RichTextWithFX __fromCanvasComponent className="framer-18wh74b" data-framer-name="$500" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="wW4zU_xML" style={{
                  "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                  "--framer-paragraph-spacing": "0px"
                }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides2({
                  vGIzjqcNO: {
                    __framer__animate: {
                      transition: transition2
                    },
                    __framer__animateOnce: false,
                    __framer__enter: animation,
                    __framer__exit: animation1,
                    __framer__styleAppearEffectEnabled: true,
                    __framer__threshold: 0.5,
                    __perspectiveFX: false,
                    __smartComponentFX: true,
                    __targetOpacity: 1
                  }
                }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsx2(motion2.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "14px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "left",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                      },
                      children: "Bloom's Preferred Pricing"
                    })}</React2.Fragment>}</RichTextWithFX>
              }), isDisplayed4() && _jsx2(motion2.div, {
                className: "framer-dqkava",
                "data-framer-name": "full",
                layoutDependency,
                layoutId: "PX4JQ2TJM",
                style: {
                  backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))"
                },
                children: <RichTextWithFX __fromCanvasComponent className="framer-10tdnl7" data-framer-name="$500" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="KepJVMo3z" style={{
                  "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                  "--framer-paragraph-spacing": "0px"
                }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides2({
                  pJHmrJ94C: {
                    __framer__animate: {
                      transition: transition2
                    },
                    __framer__animateOnce: false,
                    __framer__enter: animation,
                    __framer__exit: animation1,
                    __framer__styleAppearEffectEnabled: true,
                    __framer__threshold: 0.5,
                    __perspectiveFX: false,
                    __smartComponentFX: true,
                    __targetOpacity: 1
                  }
                }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsx2(motion2.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "14px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "left",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                      },
                      children: "Bloom's Preferred Pricing"
                    })}</React2.Fragment>}</RichTextWithFX>
              })]
            })]
          }), <ComponentViewportProvider height={2} width={componentViewport?.width || "100vw"} y={(componentViewport?.y || 0) + 0 + (((componentViewport?.height || 457) - 0 - 779) / 2 + 466 + 0)} {...addPropertyOverrides2({
            cuagyt069: {
              y: (componentViewport?.y || 0) + 0 + (((componentViewport?.height || 514) - 0 - 786) / 2 + 506 + 0)
            },
            pJHmrJ94C: {
              y: (componentViewport?.y || 0) + 0 + (((componentViewport?.height || 514) - 0 - 786) / 2 + 506 + 0)
            },
            vGIzjqcNO: {
              y: (componentViewport?.y || 0) + 0 + (((componentViewport?.height || 514) - 0 - 786) / 2 + 506 + 0)
            }
          }, baseVariant, gestureVariant)}>{<SmartComponentScopedContainer className="framer-17r4zu7-container" layoutDependency={layoutDependency} layoutId="y7vKYaRtM-container" nodeId="y7vKYaRtM" rendersWithMotion scopeId="CkeFAk831">{<G6WHwM4iV_default height="100%" id="y7vKYaRtM" layoutId="y7vKYaRtM" sehgKZpKS="rgba(245, 245, 247, 0)" style={{
                height: "100%",
                width: "100%"
              }} variant="PSyJB3XmH" width="100%" />}</SmartComponentScopedContainer>}</ComponentViewportProvider>, _jsxs(motion2.div, {
            className: "framer-1n3ai8e",
            layoutDependency,
            layoutId: "gfUuByDam",
            children: [_jsx2(motion2.div, {
              className: "framer-3bk9am",
              "data-framer-name": "description",
              layoutDependency,
              layoutId: "ZuRaa24Pc",
              children: _jsx2(motion2.div, {
                className: "framer-156aspt",
                layoutDependency,
                layoutId: "aeAmzQbOl",
                children: <RichText __fromCanvasComponent className="framer-4c3800" data-framer-name="Monthly Membership" fonts={["CUSTOM;Haffer Bold"]} layoutDependency={layoutDependency} layoutId="qatQt3Gqn" style={{
                  "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                  "--framer-paragraph-spacing": "9.60006332397461px"
                }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides2({
                  cuagyt069: {
                    children: <React2.Fragment>{_jsx2(motion2.p, {
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                          "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                          "--framer-font-size": "12px",
                          "--framer-line-height": "110%",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                        },
                        children: "Support"
                      })}</React2.Fragment>
                  },
                  pJHmrJ94C: {
                    children: <React2.Fragment>{_jsx2(motion2.p, {
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                          "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                          "--framer-font-size": "12px",
                          "--framer-line-height": "110%",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                        },
                        children: "Support"
                      })}</React2.Fragment>
                  },
                  vGIzjqcNO: {
                    children: <React2.Fragment>{_jsx2(motion2.p, {
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                          "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                          "--framer-font-size": "12px",
                          "--framer-line-height": "110%",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                        },
                        children: "Support"
                      })}</React2.Fragment>
                  }
                }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsx2(motion2.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                        "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                        "--framer-font-size": "14px",
                        "--framer-line-height": "110%",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                      },
                      children: "Support"
                    })}</React2.Fragment>}</RichText>
              })
            }), _jsxs(motion2.div, {
              className: "framer-yclzlb",
              layoutDependency,
              layoutId: "KIgpHAWvA",
              children: [isDisplayed2() && _jsx2(motion2.div, {
                className: "framer-12r43hy",
                "data-framer-name": "seed",
                layoutDependency,
                layoutId: "ynBisHMg7",
                style: {
                  backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))"
                },
                children: <RichTextWithFX __fromCanvasComponent className="framer-phng3c" data-framer-name="$500" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="ahJMBMsAt" style={{
                  "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                  "--framer-paragraph-spacing": "0px"
                }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides2({
                  cuagyt069: {
                    __framer__animate: {
                      transition: transition2
                    },
                    __framer__animateOnce: false,
                    __framer__enter: animation,
                    __framer__exit: animation1,
                    __framer__styleAppearEffectEnabled: true,
                    __framer__threshold: 0.5,
                    __perspectiveFX: false,
                    __smartComponentFX: true,
                    __targetOpacity: 1
                  }
                }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsx2(motion2.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "14px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "left",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                      },
                      children: "Limited "
                    })}</React2.Fragment>}</RichTextWithFX>
              }), isDisplayed3() && _jsx2(motion2.div, {
                className: "framer-turlvv",
                "data-framer-name": "grow",
                layoutDependency,
                layoutId: "PBxcsQn3q",
                style: {
                  backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))"
                },
                children: <RichTextWithFX __fromCanvasComponent className="framer-gx2wn7" data-framer-name="$500" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="wMA3x9e2k" style={{
                  "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                  "--framer-paragraph-spacing": "0px"
                }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides2({
                  vGIzjqcNO: {
                    __framer__animate: {
                      transition: transition2
                    },
                    __framer__animateOnce: false,
                    __framer__enter: animation,
                    __framer__exit: animation1,
                    __framer__styleAppearEffectEnabled: true,
                    __framer__threshold: 0.5,
                    __perspectiveFX: false,
                    __smartComponentFX: true,
                    __targetOpacity: 1
                  }
                }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsx2(motion2.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "14px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "left",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                      },
                      children: "Guided"
                    })}</React2.Fragment>}</RichTextWithFX>
              }), isDisplayed4() && _jsx2(motion2.div, {
                className: "framer-50e5x7",
                "data-framer-name": "full",
                layoutDependency,
                layoutId: "K_oM7Mgo0",
                style: {
                  backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))"
                },
                children: <RichTextWithFX __fromCanvasComponent className="framer-11b45q5" data-framer-name="$500" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="D1QOTjq_k" style={{
                  "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                  "--framer-paragraph-spacing": "0px"
                }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides2({
                  pJHmrJ94C: {
                    __framer__animate: {
                      transition: transition2
                    },
                    __framer__animateOnce: false,
                    __framer__enter: animation,
                    __framer__exit: animation1,
                    __framer__styleAppearEffectEnabled: true,
                    __framer__threshold: 0.5,
                    __perspectiveFX: false,
                    __smartComponentFX: true,
                    __targetOpacity: 1
                  }
                }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsx2(motion2.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "14px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "left",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                      },
                      children: "Dedicated"
                    })}</React2.Fragment>}</RichTextWithFX>
              })]
            })]
          }), <ComponentViewportProvider height={2} width={componentViewport?.width || "100vw"} y={(componentViewport?.y || 0) + 0 + (((componentViewport?.height || 457) - 0 - 779) / 2 + 545 + 0)} {...addPropertyOverrides2({
            cuagyt069: {
              y: (componentViewport?.y || 0) + 0 + (((componentViewport?.height || 514) - 0 - 786) / 2 + 574 + 0)
            },
            pJHmrJ94C: {
              y: (componentViewport?.y || 0) + 0 + (((componentViewport?.height || 514) - 0 - 786) / 2 + 574 + 0)
            },
            vGIzjqcNO: {
              y: (componentViewport?.y || 0) + 0 + (((componentViewport?.height || 514) - 0 - 786) / 2 + 574 + 0)
            }
          }, baseVariant, gestureVariant)}>{<SmartComponentScopedContainer className="framer-16zu7sh-container" layoutDependency={layoutDependency} layoutId="igTqBEx2d-container" nodeId="igTqBEx2d" rendersWithMotion scopeId="CkeFAk831">{<G6WHwM4iV_default height="100%" id="igTqBEx2d" layoutId="igTqBEx2d" sehgKZpKS="rgba(245, 245, 247, 0)" style={{
                height: "100%",
                width: "100%"
              }} variant="PSyJB3XmH" width="100%" />}</SmartComponentScopedContainer>}</ComponentViewportProvider>, _jsxs(motion2.div, {
            className: "framer-22dsq8",
            layoutDependency,
            layoutId: "R62cCiDCr",
            children: [_jsx2(motion2.div, {
              className: "framer-19ezq8w",
              "data-framer-name": "description",
              layoutDependency,
              layoutId: "DMvSgtwuT",
              children: _jsx2(motion2.div, {
                className: "framer-1gbegol",
                layoutDependency,
                layoutId: "lmio3yExo",
                children: <RichText __fromCanvasComponent className="framer-tjtt91" data-framer-name="Monthly Membership" fonts={["CUSTOM;Haffer Bold"]} layoutDependency={layoutDependency} layoutId="gIB_E0seH" style={{
                  "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                  "--framer-paragraph-spacing": "9.60006332397461px"
                }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides2({
                  cuagyt069: {
                    children: <React2.Fragment>{_jsx2(motion2.p, {
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                          "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                          "--framer-font-size": "12px",
                          "--framer-line-height": "110%",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                        },
                        children: "Invoice terms"
                      })}</React2.Fragment>
                  },
                  pJHmrJ94C: {
                    children: <React2.Fragment>{_jsx2(motion2.p, {
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                          "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                          "--framer-font-size": "12px",
                          "--framer-line-height": "110%",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                        },
                        children: "Invoice terms"
                      })}</React2.Fragment>
                  },
                  vGIzjqcNO: {
                    children: <React2.Fragment>{_jsx2(motion2.p, {
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                          "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                          "--framer-font-size": "12px",
                          "--framer-line-height": "110%",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                        },
                        children: "Invoice terms"
                      })}</React2.Fragment>
                  }
                }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsx2(motion2.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                        "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                        "--framer-font-size": "14px",
                        "--framer-line-height": "110%",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                      },
                      children: "Invoice terms"
                    })}</React2.Fragment>}</RichText>
              })
            }), _jsxs(motion2.div, {
              className: "framer-98poci",
              layoutDependency,
              layoutId: "vh1E01fw0",
              children: [isDisplayed2() && _jsx2(motion2.div, {
                className: "framer-9zj6aj",
                "data-framer-name": "seed",
                layoutDependency,
                layoutId: "S24gG5oaP",
                style: {
                  backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))"
                },
                children: <RichTextWithFX __fromCanvasComponent className="framer-l3iqax" data-framer-name="$500" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="wGoX9ZD_n" style={{
                  "--extracted-r6o4lv": "rgb(34, 23, 66)",
                  "--framer-paragraph-spacing": "0px"
                }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides2({
                  cuagyt069: {
                    __framer__animate: {
                      transition: transition2
                    },
                    __framer__animateOnce: false,
                    __framer__enter: animation,
                    __framer__exit: animation1,
                    __framer__styleAppearEffectEnabled: true,
                    __framer__threshold: 0.5,
                    __perspectiveFX: false,
                    __smartComponentFX: true,
                    __targetOpacity: 1
                  }
                }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsx2(motion2.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "14px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "left",
                        "--framer-text-color": "var(--extracted-r6o4lv, rgb(34, 23, 66))"
                      },
                      children: "Auto Pay"
                    })}</React2.Fragment>}</RichTextWithFX>
              }), isDisplayed3() && _jsx2(motion2.div, {
                className: "framer-s18h4k",
                "data-framer-name": "grow",
                layoutDependency,
                layoutId: "wDnuNNkeW",
                style: {
                  backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))"
                },
                children: <RichTextWithFX __fromCanvasComponent className="framer-b457pc" data-framer-name="$500" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="M1uJzSBWY" style={{
                  "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                  "--framer-paragraph-spacing": "0px"
                }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides2({
                  vGIzjqcNO: {
                    __framer__animate: {
                      transition: transition2
                    },
                    __framer__animateOnce: false,
                    __framer__enter: animation,
                    __framer__exit: animation1,
                    __framer__styleAppearEffectEnabled: true,
                    __framer__threshold: 0.5,
                    __perspectiveFX: false,
                    __smartComponentFX: true,
                    __targetOpacity: 1
                  }
                }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsx2(motion2.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "14px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "left",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                      },
                      children: "Net 30*"
                    })}</React2.Fragment>}</RichTextWithFX>
              }), isDisplayed4() && _jsx2(motion2.div, {
                className: "framer-h5blxh",
                "data-framer-name": "full",
                layoutDependency,
                layoutId: "nycQvSx5H",
                style: {
                  backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))"
                },
                children: <RichTextWithFX __fromCanvasComponent className="framer-143w7yk" data-framer-name="$500" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="gIWySdwQ7" style={{
                  "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                  "--framer-paragraph-spacing": "0px"
                }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides2({
                  pJHmrJ94C: {
                    __framer__animate: {
                      transition: transition2
                    },
                    __framer__animateOnce: false,
                    __framer__enter: animation,
                    __framer__exit: animation1,
                    __framer__styleAppearEffectEnabled: true,
                    __framer__threshold: 0.5,
                    __perspectiveFX: false,
                    __smartComponentFX: true,
                    __targetOpacity: 1
                  }
                }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsx2(motion2.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "14px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "left",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                      },
                      children: "Custom"
                    })}</React2.Fragment>}</RichTextWithFX>
              })]
            })]
          }), <ComponentViewportProvider height={2} width={componentViewport?.width || "100vw"} y={(componentViewport?.y || 0) + 0 + (((componentViewport?.height || 457) - 0 - 779) / 2 + 624 + 0)} {...addPropertyOverrides2({
            cuagyt069: {
              y: (componentViewport?.y || 0) + 0 + (((componentViewport?.height || 514) - 0 - 786) / 2 + 642 + 0)
            },
            pJHmrJ94C: {
              y: (componentViewport?.y || 0) + 0 + (((componentViewport?.height || 514) - 0 - 786) / 2 + 642 + 0)
            },
            vGIzjqcNO: {
              y: (componentViewport?.y || 0) + 0 + (((componentViewport?.height || 514) - 0 - 786) / 2 + 642 + 0)
            }
          }, baseVariant, gestureVariant)}>{<SmartComponentScopedContainer className="framer-h6cul2-container" layoutDependency={layoutDependency} layoutId="tkqomgUgg-container" nodeId="tkqomgUgg" rendersWithMotion scopeId="CkeFAk831">{<G6WHwM4iV_default height="100%" id="tkqomgUgg" layoutId="tkqomgUgg" sehgKZpKS="rgba(245, 245, 247, 0)" style={{
                height: "100%",
                width: "100%"
              }} variant="PSyJB3XmH" width="100%" />}</SmartComponentScopedContainer>}</ComponentViewportProvider>, _jsxs(motion2.div, {
            className: "framer-19a8rl0",
            layoutDependency,
            layoutId: "ot24XNwGn",
            children: [_jsx2(motion2.div, {
              className: "framer-1ersxdy",
              "data-framer-name": "description",
              layoutDependency,
              layoutId: "Nc7uZXtBC",
              children: _jsx2(motion2.div, {
                className: "framer-15xbbs4",
                layoutDependency,
                layoutId: "ha5fFDg8a",
                children: <RichText __fromCanvasComponent className="framer-1xxretk" data-framer-name="Monthly Membership" fonts={["CUSTOM;Haffer Bold"]} layoutDependency={layoutDependency} layoutId="t4h6rotlL" style={{
                  "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                  "--framer-paragraph-spacing": "9.60006332397461px"
                }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides2({
                  cuagyt069: {
                    children: <React2.Fragment>{_jsx2(motion2.p, {
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                          "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                          "--framer-font-size": "12px",
                          "--framer-line-height": "110%",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                        },
                        children: "Extended payment terms"
                      })}</React2.Fragment>
                  },
                  pJHmrJ94C: {
                    children: <React2.Fragment>{_jsx2(motion2.p, {
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                          "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                          "--framer-font-size": "12px",
                          "--framer-line-height": "110%",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                        },
                        children: "Extended payment terms"
                      })}</React2.Fragment>
                  },
                  vGIzjqcNO: {
                    children: <React2.Fragment>{_jsx2(motion2.p, {
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                          "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                          "--framer-font-size": "12px",
                          "--framer-line-height": "110%",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                        },
                        children: "Extended payment terms"
                      })}</React2.Fragment>
                  }
                }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsx2(motion2.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                        "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                        "--framer-font-size": "14px",
                        "--framer-line-height": "110%",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                      },
                      children: "Extended payment terms"
                    })}</React2.Fragment>}</RichText>
              })
            }), _jsxs(motion2.div, {
              className: "framer-rpjnsg",
              layoutDependency,
              layoutId: "DxL13J51D",
              children: [isDisplayed2() && _jsx2(motion2.div, {
                className: "framer-sr1d2t",
                "data-framer-name": "seed",
                layoutDependency,
                layoutId: "NY5mlOUXa",
                style: {
                  backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))",
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8
                },
                children: <RichTextWithFX __fromCanvasComponent className="framer-leyck" data-framer-name="$500" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="zk7GcinZ5" style={{
                  "--extracted-r6o4lv": "var(--token-2ae4d622-3758-4fad-a56d-08fa00cc7638, rgb(173, 173, 199))",
                  "--framer-paragraph-spacing": "0px"
                }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides2({
                  cuagyt069: {
                    __framer__animate: {
                      transition: transition2
                    },
                    __framer__animateOnce: false,
                    __framer__enter: animation,
                    __framer__exit: animation1,
                    __framer__styleAppearEffectEnabled: true,
                    __framer__threshold: 0.5,
                    __perspectiveFX: false,
                    __smartComponentFX: true,
                    __targetOpacity: 1
                  }
                }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsx2(motion2.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "14px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "left",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-2ae4d622-3758-4fad-a56d-08fa00cc7638, rgb(173, 173, 199)))"
                      },
                      children: "Not available"
                    })}</React2.Fragment>}</RichTextWithFX>
              }), isDisplayed3() && _jsx2(motion2.div, {
                className: "framer-15cruay",
                "data-framer-name": "grow",
                layoutDependency,
                layoutId: "xNFZcSlms",
                style: {
                  backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))",
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8
                },
                children: <RichTextWithFX __fromCanvasComponent className="framer-17gqbkf" data-framer-name="$500" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="OVv0cydjp" style={{
                  "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                  "--framer-paragraph-spacing": "0px"
                }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides2({
                  vGIzjqcNO: {
                    __framer__animate: {
                      transition: transition2
                    },
                    __framer__animateOnce: false,
                    __framer__enter: animation,
                    __framer__exit: animation1,
                    __framer__styleAppearEffectEnabled: true,
                    __framer__threshold: 0.5,
                    __perspectiveFX: false,
                    __smartComponentFX: true,
                    __targetOpacity: 1
                  }
                }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsx2(motion2.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "14px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "left",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                      },
                      children: "Up to net 120*"
                    })}</React2.Fragment>}</RichTextWithFX>
              }), isDisplayed4() && _jsx2(motion2.div, {
                className: "framer-1odmj95",
                "data-framer-name": "full",
                layoutDependency,
                layoutId: "AcnYDjJDJ",
                style: {
                  backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))",
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8
                },
                children: <RichTextWithFX __fromCanvasComponent className="framer-hu9mv2" data-framer-name="$500" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="NqTf_jyj5" style={{
                  "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                  "--framer-paragraph-spacing": "0px"
                }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides2({
                  pJHmrJ94C: {
                    __framer__animate: {
                      transition: transition2
                    },
                    __framer__animateOnce: false,
                    __framer__enter: animation,
                    __framer__exit: animation1,
                    __framer__styleAppearEffectEnabled: true,
                    __framer__threshold: 0.5,
                    __perspectiveFX: false,
                    __smartComponentFX: true,
                    __targetOpacity: 1
                  }
                }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsx2(motion2.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "14px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "left",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                      },
                      children: "Up to net 120*"
                    })}</React2.Fragment>}</RichTextWithFX>
              })]
            })]
          }), _jsx2(motion2.div, {
            className: "framer-ucfsnc",
            layoutDependency,
            layoutId: "lOXUtPUHS",
            children: <RichText __fromCanvasComponent className="framer-shsn7c" data-framer-name="$25 / $30" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="BOrTjQHfa" style={{
              "--extracted-r6o4lv": "var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143))",
              "--framer-paragraph-spacing": "0px"
            }} verticalAlignment="center" withExternalLayout>{<React2.Fragment>{_jsx2(motion2.p, {
                  style: {
                    "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                    "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                    "--framer-font-size": "12px",
                    "--framer-line-height": "1em",
                    "--framer-text-alignment": "right",
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)))"
                  },
                  children: "*Extended terms subject to credit approval."
                })}</React2.Fragment>}</RichText>
          })]
        })}</Transition2>}</Variants2>}</LayoutGroup2>;
});
var css2 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-cql3d.framer-5hp3dq, .framer-cql3d .framer-5hp3dq { display: block; }", ".framer-cql3d.framer-1mlfsao { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 919px; }", ".framer-cql3d .framer-1chqgvh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 16px 0px; position: relative; width: 100%; z-index: 10; }", ".framer-cql3d .framer-kmd9io { flex: 1 0 0px; height: auto; overflow: visible; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }", ".framer-cql3d .framer-mv0uf9, .framer-cql3d .framer-1835qjo, .framer-cql3d .framer-1pe9gmk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6.469607353210449px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-cql3d .framer-i0e3y3, .framer-cql3d .framer-uy72j1, .framer-cql3d .framer-rb1r44 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-cql3d .framer-1clv0ug, .framer-cql3d .framer-19o3dd3 { align-content: flex-end; align-items: flex-end; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 2px 4px 2px 4px; position: relative; width: min-content; }", ".framer-cql3d .framer-e9jaic, .framer-cql3d .framer-am35yq, .framer-cql3d .framer-1gbbd52 { flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }", ".framer-cql3d .framer-iaafce { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 2px 4px 2px 4px; position: relative; width: min-content; }", ".framer-cql3d .framer-10ps3c5, .framer-cql3d .framer-17q2oej, .framer-cql3d .framer-10ue7ql, .framer-cql3d .framer-1n3ai8e, .framer-cql3d .framer-22dsq8, .framer-cql3d .framer-19a8rl0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 48px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }", ".framer-cql3d .framer-6nz85u, .framer-cql3d .framer-pxt0vh, .framer-cql3d .framer-ejmxav, .framer-cql3d .framer-o59l1d, .framer-cql3d .framer-3bk9am, .framer-cql3d .framer-19ezq8w, .framer-cql3d .framer-1ersxdy { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 120px; }", ".framer-cql3d .framer-1ac69s7, .framer-cql3d .framer-156aspt, .framer-cql3d .framer-1gbegol, .framer-cql3d .framer-15xbbs4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 120px; }", ".framer-cql3d .framer-sczk59, .framer-cql3d .framer-xw74y, .framer-cql3d .framer-l02skh, .framer-cql3d .framer-43u8lm, .framer-cql3d .framer-448m1k, .framer-cql3d .framer-bfbcio, .framer-cql3d .framer-190a71e, .framer-cql3d .framer-1pdje62, .framer-cql3d .framer-4c3800, .framer-cql3d .framer-tjtt91, .framer-cql3d .framer-1xxretk { flex: none; height: auto; overflow: visible; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-cql3d .framer-y9eg1d, .framer-cql3d .framer-hz7ly5, .framer-cql3d .framer-14fi2w4, .framer-cql3d .framer-14uu7vi, .framer-cql3d .framer-yclzlb, .framer-cql3d .framer-98poci, .framer-cql3d .framer-rpjnsg { align-content: center; align-items: center; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: auto; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }", ".framer-cql3d .framer-yippg7, .framer-cql3d .framer-1oo855u, .framer-cql3d .framer-tu03ni, .framer-cql3d .framer-hamuyo, .framer-cql3d .framer-uigr5s, .framer-cql3d .framer-1j8bz31, .framer-cql3d .framer-6j9y5r, .framer-cql3d .framer-1yle7d0, .framer-cql3d .framer-dqkava, .framer-cql3d .framer-12r43hy, .framer-cql3d .framer-turlvv, .framer-cql3d .framer-50e5x7, .framer-cql3d .framer-9zj6aj, .framer-cql3d .framer-s18h4k, .framer-cql3d .framer-h5blxh, .framer-cql3d .framer-sr1d2t, .framer-cql3d .framer-15cruay, .framer-cql3d .framer-1odmj95 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: 100%; justify-content: center; overflow: visible; padding: 8px; position: relative; width: 1px; }", ".framer-cql3d .framer-11wlsw4, .framer-cql3d .framer-7uizz4, .framer-cql3d .framer-1wobeg9, .framer-cql3d .framer-7usysk, .framer-cql3d .framer-121v15v, .framer-cql3d .framer-712227, .framer-cql3d .framer-1tok6lo, .framer-cql3d .framer-g61aac, .framer-cql3d .framer-lbh187, .framer-cql3d .framer-1sv6lhx, .framer-cql3d .framer-18wh74b, .framer-cql3d .framer-10tdnl7, .framer-cql3d .framer-phng3c, .framer-cql3d .framer-gx2wn7, .framer-cql3d .framer-11b45q5, .framer-cql3d .framer-l3iqax, .framer-cql3d .framer-b457pc, .framer-cql3d .framer-143w7yk, .framer-cql3d .framer-leyck, .framer-cql3d .framer-17gqbkf, .framer-cql3d .framer-hu9mv2, .framer-cql3d .framer-shsn7c { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-cql3d .framer-1gubwwl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 100px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }", ".framer-cql3d .framer-yncdz9 { flex: none; height: 48px; overflow: visible; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-cql3d .framer-tadthj, .framer-cql3d .framer-1nmhh2d, .framer-cql3d .framer-xw98ig { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: 100%; justify-content: flex-start; overflow: visible; padding: 8px; position: relative; width: 1px; }", ".framer-cql3d .framer-kbmm39-container, .framer-cql3d .framer-1mi7pxx-container, .framer-cql3d .framer-17r4zu7-container, .framer-cql3d .framer-16zu7sh-container, .framer-cql3d .framer-h6cul2-container { flex: none; height: 2px; position: relative; width: 100%; }", ".framer-cql3d .framer-1p0h0v9, .framer-cql3d .framer-tw82up { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 8px 0px 8px 0px; position: relative; width: 120px; }", ".framer-cql3d .framer-ucfsnc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 16px 0px 0px 0px; position: relative; width: 100%; }", ".framer-cql3d.framer-v-1hg0c7y.framer-1mlfsao, .framer-cql3d.framer-v-1stosg7.framer-1mlfsao, .framer-cql3d.framer-v-4ha265.framer-1mlfsao { width: 280px; }", ".framer-cql3d.framer-v-1hg0c7y .framer-kmd9io { order: 0; }", ".framer-cql3d.framer-v-1hg0c7y .framer-mv0uf9 { order: 2; }", ".framer-cql3d.framer-v-1hg0c7y .framer-1835qjo { order: 3; }", ".framer-cql3d.framer-v-1hg0c7y .framer-1pe9gmk { order: 4; }", ".framer-cql3d.framer-v-1hg0c7y .framer-iaafce, .framer-cql3d.framer-v-1stosg7 .framer-iaafce, .framer-cql3d.framer-v-4ha265 .framer-iaafce { cursor: pointer; }", ".framer-cql3d.framer-v-1hg0c7y .framer-1gubwwl, .framer-cql3d.framer-v-1stosg7 .framer-1gubwwl, .framer-cql3d.framer-v-4ha265 .framer-1gubwwl { min-height: 140px; }", ".framer-cql3d.framer-v-1hg0c7y .framer-pxt0vh, .framer-cql3d.framer-v-1hg0c7y .framer-ejmxav, .framer-cql3d.framer-v-1hg0c7y .framer-o59l1d, .framer-cql3d.framer-v-1hg0c7y .framer-3bk9am, .framer-cql3d.framer-v-1hg0c7y .framer-19ezq8w, .framer-cql3d.framer-v-1hg0c7y .framer-1ersxdy, .framer-cql3d.framer-v-1stosg7 .framer-pxt0vh, .framer-cql3d.framer-v-1stosg7 .framer-ejmxav, .framer-cql3d.framer-v-1stosg7 .framer-1p0h0v9, .framer-cql3d.framer-v-1stosg7 .framer-o59l1d, .framer-cql3d.framer-v-1stosg7 .framer-tw82up, .framer-cql3d.framer-v-1stosg7 .framer-3bk9am, .framer-cql3d.framer-v-1stosg7 .framer-156aspt, .framer-cql3d.framer-v-1stosg7 .framer-19ezq8w, .framer-cql3d.framer-v-1stosg7 .framer-1gbegol, .framer-cql3d.framer-v-1stosg7 .framer-1ersxdy, .framer-cql3d.framer-v-1stosg7 .framer-15xbbs4, .framer-cql3d.framer-v-4ha265 .framer-pxt0vh, .framer-cql3d.framer-v-4ha265 .framer-ejmxav, .framer-cql3d.framer-v-4ha265 .framer-1p0h0v9, .framer-cql3d.framer-v-4ha265 .framer-o59l1d, .framer-cql3d.framer-v-4ha265 .framer-tw82up, .framer-cql3d.framer-v-4ha265 .framer-3bk9am, .framer-cql3d.framer-v-4ha265 .framer-156aspt, .framer-cql3d.framer-v-4ha265 .framer-19ezq8w, .framer-cql3d.framer-v-4ha265 .framer-1gbegol, .framer-cql3d.framer-v-4ha265 .framer-1ersxdy, .framer-cql3d.framer-v-4ha265 .framer-15xbbs4 { width: 80px; }", ".framer-cql3d.framer-v-1hg0c7y .framer-17q2oej, .framer-cql3d.framer-v-1hg0c7y .framer-10ue7ql, .framer-cql3d.framer-v-1stosg7 .framer-17q2oej, .framer-cql3d.framer-v-1stosg7 .framer-10ue7ql, .framer-cql3d.framer-v-4ha265 .framer-17q2oej, .framer-cql3d.framer-v-4ha265 .framer-10ue7ql { min-height: 72px; }", ".framer-cql3d.framer-v-1hg0c7y .framer-1p0h0v9, .framer-cql3d.framer-v-1hg0c7y .framer-tw82up, .framer-cql3d.framer-v-1hg0c7y .framer-156aspt, .framer-cql3d.framer-v-1hg0c7y .framer-1gbegol, .framer-cql3d.framer-v-1hg0c7y .framer-15xbbs4 { width: 100%; }"];
var FramerCkeFAk831 = withCSS2(Component2, css2, "framer-cql3d");
var CkeFAk831_default = FramerCkeFAk831;
FramerCkeFAk831.displayName = "pricing matrix";
FramerCkeFAk831.defaultProps = {
  height: 457,
  width: 919
};
addPropertyControls2(FramerCkeFAk831, {
  variant: {
    options: ["msWzoZ5wF", "cuagyt069", "vGIzjqcNO", "pJHmrJ94C"],
    optionTitles: ["Variant 1", "phone-seed", "phone-growth", "phone-full"],
    title: "Variant",
    type: ControlType2.Enum
  }
});
addFonts2(FramerCkeFAk831, [{
  explicitInter: true,
  fonts: [{
    family: "Haffer Regular",
    source: "custom",
    url: "https://framerusercontent.com/assets/tAGQcvN09kwW2QjPLqLO197UqBQ.woff"
  }, {
    family: "Haffer Bold",
    source: "custom",
    url: "https://framerusercontent.com/assets/eRqmC6W9PktN8mUcnwel9B6wmPs.woff"
  }]
}, ...SepLineFonts], {
  supportsExplicitInterCodegen: true
});
var __FramerMetadata__ = {
  "exports": {
    "default": {
      "type": "reactComponent",
      "name": "FramerCkeFAk831",
      "slots": [],
      "annotations": {
        "framerComponentViewportWidth": "true",
        "framerDisplayContentsDiv": "false",
        "framerIntrinsicHeight": "457",
        "framerImmutableVariables": "true",
        "framerAutoSizeImages": "true",
        "framerIntrinsicWidth": "919",
        "framerColorSyntax": "true",
        "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"cuagyt069":{"layout":["fixed","auto"]},"vGIzjqcNO":{"layout":["fixed","auto"]},"pJHmrJ94C":{"layout":["fixed","auto"]}}}',
        "framerContractVersion": "1"
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
var _OriginalComponent = CkeFAk831_default;
function PricingmatrixWrapped(props) {
  var _variant = useVariant(props.variant);
  var _inner = (_variant !== undefined) ? { ...props, variant: _variant } : props;
  return _ctxJsx(ContextProviders, { children: _ctxJsx(_OriginalComponent, _inner) });
}
Object.assign(PricingmatrixWrapped, _OriginalComponent);
export {  __FramerMetadata__,  PricingmatrixWrapped as default   };