"use client"
// http-url:https://framerusercontent.com/modules/kzzkZGws8387oXPQBdnr/YNVkZ9tZPWB5a51HiBVD/PlV87rtwn.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, RichText, useActiveVariantCallback, useComponentViewport, useLocaleInfo, useOnVariantChange, useVariantState, withCSS, withFX, withOptimizedAppearEffect } from "@proofly-framer/runtime";
import { LayoutGroup, motion, MotionConfigContext } from "@proofly-framer/runtime";
import * as React from "react";
import { useRef } from "react";
import { jsx as _ctxJsx } from "react/jsx-runtime";
import { ContextProviders, useVariant } from "@proofly-framer/runtime";
var MotionDivWithFXWithOptimizedAppearEffect = withOptimizedAppearEffect(withFX(motion.div));
var cycleOrder = ["nlkp_EGfi", "iGElGOb3O", "W5Tv8ydyG", "oivwHypDM", "Xb_O1yX3Q", "v8CbWZZWW", "hPD8_uF3x", "lV47bvrvK", "CsyJSfhW5", "vLA37VWRp", "nKVgrglFO", "CY3HrDc05", "LG6tHZz14", "wSubc5ICB", "bWBK_yHmc"];
var serializationHash = "framer-ueFRz";
var variantClassNames = {
  bWBK_yHmc: "framer-v-vrvfx0",
  CsyJSfhW5: "framer-v-nrqmiq",
  CY3HrDc05: "framer-v-16793wo",
  hPD8_uF3x: "framer-v-1lxdjip",
  iGElGOb3O: "framer-v-eepihh",
  LG6tHZz14: "framer-v-1gd83c8",
  lV47bvrvK: "framer-v-nrdtyg",
  nKVgrglFO: "framer-v-g368id",
  nlkp_EGfi: "framer-v-1opq3xu",
  oivwHypDM: "framer-v-16j6cyz",
  v8CbWZZWW: "framer-v-1osjxdw",
  vLA37VWRp: "framer-v-1ocgqp7",
  W5Tv8ydyG: "framer-v-1rjwtxl",
  wSubc5ICB: "framer-v-nhwgr8",
  Xb_O1yX3Q: "framer-v-e6s035"
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
var transition2 = {
  bounce: 0.2,
  delay: 0.2,
  duration: 0.2,
  type: "spring"
};
var animation = {
  opacity: 1,
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
var animation1 = {
  opacity: 1e-3,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 0,
  skewX: 0,
  skewY: 0,
  x: 0,
  y: 0
};
var animation2 = {
  opacity: 0.8,
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
var animation3 = {
  opacity: 0.6,
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
var animation4 = {
  opacity: 0.4,
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
var animation5 = {
  opacity: 0.2,
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
  "01": "iGElGOb3O",
  "02": "W5Tv8ydyG",
  "03": "oivwHypDM",
  "04": "Xb_O1yX3Q",
  "05": "v8CbWZZWW",
  "06": "hPD8_uF3x",
  "07": "lV47bvrvK",
  "08": "CsyJSfhW5",
  "09": "vLA37VWRp",
  "10": "nKVgrglFO",
  "11": "CY3HrDc05",
  "12": "LG6tHZz14",
  "13": "wSubc5ICB",
  "14": "bWBK_yHmc",
  "Variant 1": "nlkp_EGfi"
};
var Variants = motion.create(React.Fragment);
var getProps = ({
  height,
  id,
  width,
  ...props
}) => {
  return {
    ...props,
    variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "nlkp_EGfi"
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
    defaultVariant: "nlkp_EGfi",
    ref: refBinding,
    variant,
    variantClassNames
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const {
    activeVariantCallback,
    delay
  } = useActiveVariantCallback(baseVariant);
  const onAppearb68ege = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("W5Tv8ydyG", true), 3e3);
  });
  const onAppear1monkk2 = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("oivwHypDM", true), 3e3);
  });
  const onAppearugvr91 = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("Xb_O1yX3Q", true), 3e3);
  });
  const onAppearjwn4ya = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("v8CbWZZWW", true), 3e3);
  });
  const onAppeard5ha0c = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("hPD8_uF3x", true), 3e3);
  });
  const onAppeartqky62 = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("lV47bvrvK", true), 3e3);
  });
  const onAppear17e1nwb = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("CsyJSfhW5", true), 3e3);
  });
  const onAppearzuqvry = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("vLA37VWRp", true), 3e3);
  });
  const onAppear14y447b = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("nKVgrglFO", true), 3e3);
  });
  const onAppearfxaqvb = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("CY3HrDc05", true), 1e3);
  });
  const onAppear6ipr2u = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("LG6tHZz14", true), 1e3);
  });
  const onAppearskwzhk = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("wSubc5ICB", true), 1e3);
  });
  const onAppear8b79u4 = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("bWBK_yHmc", true), 1e3);
  });
  const onAppear1i1wd4s = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("iGElGOb3O", true), 1e3);
  });
  useOnVariantChange(baseVariant, {
    bWBK_yHmc: onAppear1i1wd4s,
    CsyJSfhW5: onAppearzuqvry,
    CY3HrDc05: onAppear6ipr2u,
    hPD8_uF3x: onAppeartqky62,
    iGElGOb3O: onAppearb68ege,
    LG6tHZz14: onAppearskwzhk,
    lV47bvrvK: onAppear17e1nwb,
    nKVgrglFO: onAppearfxaqvb,
    oivwHypDM: onAppearugvr91,
    v8CbWZZWW: onAppeard5ha0c,
    vLA37VWRp: onAppear14y447b,
    W5Tv8ydyG: onAppear1monkk2,
    wSubc5ICB: onAppear8b79u4,
    Xb_O1yX3Q: onAppearjwn4ya
  });
  const sharedStyleClassNames = [];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  const isDisplayed = () => {
    if (["hPD8_uF3x", "lV47bvrvK", "CsyJSfhW5"].includes(baseVariant)) return false;
    return true;
  };
  const isDisplayed1 = () => {
    if (["iGElGOb3O", "lV47bvrvK", "CsyJSfhW5"].includes(baseVariant)) return false;
    return true;
  };
  const isDisplayed2 = () => {
    if (["iGElGOb3O", "W5Tv8ydyG", "CsyJSfhW5", "vLA37VWRp", "nKVgrglFO", "CY3HrDc05", "LG6tHZz14", "wSubc5ICB", "bWBK_yHmc"].includes(baseVariant)) return false;
    return true;
  };
  const isDisplayed3 = () => {
    if (["iGElGOb3O", "W5Tv8ydyG", "oivwHypDM", "vLA37VWRp", "nKVgrglFO", "CY3HrDc05", "LG6tHZz14", "wSubc5ICB", "bWBK_yHmc"].includes(baseVariant)) return false;
    return true;
  };
  const isDisplayed4 = () => {
    if (["iGElGOb3O", "W5Tv8ydyG", "oivwHypDM", "Xb_O1yX3Q", "vLA37VWRp", "nKVgrglFO", "CY3HrDc05", "LG6tHZz14", "wSubc5ICB", "bWBK_yHmc"].includes(baseVariant)) return false;
    return true;
  };
  const isDisplayed5 = () => {
    if (["iGElGOb3O", "W5Tv8ydyG", "oivwHypDM", "Xb_O1yX3Q", "v8CbWZZWW", "vLA37VWRp", "nKVgrglFO", "CY3HrDc05", "LG6tHZz14", "wSubc5ICB", "bWBK_yHmc"].includes(baseVariant)) return false;
    return true;
  };
  const isDisplayed6 = () => {
    if (["iGElGOb3O", "W5Tv8ydyG", "oivwHypDM", "Xb_O1yX3Q", "v8CbWZZWW", "hPD8_uF3x", "vLA37VWRp", "nKVgrglFO", "CY3HrDc05", "LG6tHZz14", "wSubc5ICB", "bWBK_yHmc"].includes(baseVariant)) return false;
    return true;
  };
  const isDisplayed7 = () => {
    if (["iGElGOb3O", "W5Tv8ydyG", "oivwHypDM", "Xb_O1yX3Q", "v8CbWZZWW", "hPD8_uF3x", "lV47bvrvK", "vLA37VWRp", "nKVgrglFO", "CY3HrDc05", "LG6tHZz14", "wSubc5ICB", "bWBK_yHmc"].includes(baseVariant)) return false;
    return true;
  };
  const isDisplayed8 = () => {
    if (["iGElGOb3O", "W5Tv8ydyG", "oivwHypDM", "Xb_O1yX3Q", "v8CbWZZWW", "hPD8_uF3x", "lV47bvrvK", "CsyJSfhW5", "vLA37VWRp", "nKVgrglFO", "CY3HrDc05", "LG6tHZz14", "wSubc5ICB", "bWBK_yHmc"].includes(baseVariant)) return false;
    return true;
  };
  return <LayoutGroup id={layoutId ?? defaultLayoutId}>{<Variants animate={variants} initial={false}>{<Transition value={transition1}>{_jsxs(motion.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx(scopingClassNames, "framer-1opq3xu", className, classNames),
          "data-framer-name": "Variant 1",
          layoutDependency,
          layoutId: "nlkp_EGfi",
          ref: refBinding,
          style: {
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            opacity: 1,
            ...style
          },
          variants: {
            bWBK_yHmc: {
              opacity: 1
            },
            CsyJSfhW5: {
              opacity: 0.8
            },
            CY3HrDc05: {
              opacity: 1
            },
            LG6tHZz14: {
              opacity: 1
            },
            nKVgrglFO: {
              opacity: 1
            },
            vLA37VWRp: {
              opacity: 1
            },
            wSubc5ICB: {
              opacity: 1
            }
          },
          ...addPropertyOverrides({
            bWBK_yHmc: {
              "data-framer-name": "14",
              "data-highlight": true
            },
            CsyJSfhW5: {
              "data-framer-name": "08",
              "data-highlight": true
            },
            CY3HrDc05: {
              "data-framer-name": "11",
              "data-highlight": true
            },
            hPD8_uF3x: {
              "data-framer-name": "06",
              "data-highlight": true
            },
            iGElGOb3O: {
              "data-framer-name": "01",
              "data-highlight": true
            },
            LG6tHZz14: {
              "data-framer-name": "12",
              "data-highlight": true
            },
            lV47bvrvK: {
              "data-framer-name": "07",
              "data-highlight": true
            },
            nKVgrglFO: {
              "data-framer-name": "10",
              "data-highlight": true
            },
            oivwHypDM: {
              "data-framer-name": "03",
              "data-highlight": true
            },
            v8CbWZZWW: {
              "data-framer-name": "05",
              "data-highlight": true
            },
            vLA37VWRp: {
              "data-framer-name": "09",
              "data-highlight": true
            },
            W5Tv8ydyG: {
              "data-framer-name": "02",
              "data-highlight": true
            },
            wSubc5ICB: {
              "data-framer-name": "13",
              "data-highlight": true
            },
            Xb_O1yX3Q: {
              "data-framer-name": "04",
              "data-highlight": true
            }
          }, baseVariant, gestureVariant),
          children: [isDisplayed() && <MotionDivWithFXWithOptimizedAppearEffect __perspectiveFX={false} __smartComponentFX __targetOpacity={1} animate={animation} className="framer-6c7u7o" data-framer-appear-id="6c7u7o" data-framer-name="01" initial={animation1} layoutDependency={layoutDependency} layoutId="gJNXNCckV" optimized style={{
            backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))",
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            opacity: 1
          }} variants={{
            bWBK_yHmc: {
              opacity: 0.8
            },
            CY3HrDc05: {
              opacity: 0.8
            },
            LG6tHZz14: {
              opacity: 0.8
            },
            nKVgrglFO: {
              opacity: 0.8
            },
            oivwHypDM: {
              opacity: 0.6
            },
            v8CbWZZWW: {
              opacity: 0.2
            },
            vLA37VWRp: {
              opacity: 0.8
            },
            W5Tv8ydyG: {
              opacity: 0.8
            },
            wSubc5ICB: {
              opacity: 0.8
            },
            Xb_O1yX3Q: {
              opacity: 0.4
            }
          }} {...addPropertyOverrides({
            bWBK_yHmc: {
              __targetOpacity: 0.8,
              animate: animation2
            },
            CY3HrDc05: {
              __targetOpacity: 0.8,
              animate: animation2
            },
            LG6tHZz14: {
              __targetOpacity: 0.8,
              animate: animation2
            },
            nKVgrglFO: {
              __targetOpacity: 0.8,
              animate: animation2
            },
            oivwHypDM: {
              __targetOpacity: 0.6,
              animate: animation3
            },
            v8CbWZZWW: {
              __targetOpacity: 0.2,
              animate: animation5
            },
            vLA37VWRp: {
              __targetOpacity: 0.8,
              animate: animation2
            },
            W5Tv8ydyG: {
              __targetOpacity: 0.8,
              animate: animation2
            },
            wSubc5ICB: {
              __targetOpacity: 0.8,
              animate: animation2
            },
            Xb_O1yX3Q: {
              __targetOpacity: 0.4,
              animate: animation4
            }
          }, baseVariant, gestureVariant)}>{<RichText __fromCanvasComponent className="framer-146fnk5" data-framer-name="text" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="az4SENpL2" style={{
              "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
            }} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.p, {
                  dir: "auto",
                  style: {
                    "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                    "--framer-font-family": '"Haffer Regular", sans-serif',
                    "--framer-font-size": "14px",
                    "--framer-font-weight": "430",
                    "--framer-line-height": "130%",
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                  },
                  children: "text 1"
                })}</>}</RichText>}</MotionDivWithFXWithOptimizedAppearEffect>, isDisplayed1() && <MotionDivWithFXWithOptimizedAppearEffect __perspectiveFX={false} __smartComponentFX __targetOpacity={1} animate={animation} className="framer-qfgd5p" data-framer-appear-id="qfgd5p" data-framer-name="02" initial={animation1} layoutDependency={layoutDependency} layoutId="WqAJhDPuM" optimized style={{
            backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))",
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            opacity: 1
          }} variants={{
            bWBK_yHmc: {
              opacity: 1
            },
            CY3HrDc05: {
              opacity: 1
            },
            hPD8_uF3x: {
              opacity: 0.2
            },
            LG6tHZz14: {
              opacity: 1
            },
            nKVgrglFO: {
              opacity: 1
            },
            oivwHypDM: {
              opacity: 0.8
            },
            v8CbWZZWW: {
              opacity: 0.4
            },
            vLA37VWRp: {
              opacity: 1
            },
            wSubc5ICB: {
              opacity: 1
            },
            Xb_O1yX3Q: {
              opacity: 0.6
            }
          }} {...addPropertyOverrides({
            hPD8_uF3x: {
              __targetOpacity: 0.2,
              animate: animation5
            },
            oivwHypDM: {
              __targetOpacity: 0.8,
              animate: animation2
            },
            v8CbWZZWW: {
              __targetOpacity: 0.4,
              animate: animation4
            },
            Xb_O1yX3Q: {
              __targetOpacity: 0.6,
              animate: animation3
            }
          }, baseVariant, gestureVariant)}>{<RichText __fromCanvasComponent className="framer-wgcruz" data-framer-name="text" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="dHMkGxpuk" style={{
              "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
            }} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.p, {
                  dir: "auto",
                  style: {
                    "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                    "--framer-font-family": '"Haffer Regular", sans-serif',
                    "--framer-font-size": "14px",
                    "--framer-font-weight": "430",
                    "--framer-line-height": "130%",
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                  },
                  children: "text 2"
                })}</>}</RichText>}</MotionDivWithFXWithOptimizedAppearEffect>, isDisplayed2() && <MotionDivWithFXWithOptimizedAppearEffect __perspectiveFX={false} __smartComponentFX __targetOpacity={1} animate={animation} className="framer-b1ygef" data-framer-appear-id="b1ygef" data-framer-name="03" initial={animation1} layoutDependency={layoutDependency} layoutId="vbaXBbFNa" optimized style={{
            backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))",
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            opacity: 1
          }} variants={{
            hPD8_uF3x: {
              opacity: 0.4
            },
            lV47bvrvK: {
              opacity: 0.2
            },
            v8CbWZZWW: {
              opacity: 0.6
            },
            Xb_O1yX3Q: {
              opacity: 0.8
            }
          }} {...addPropertyOverrides({
            hPD8_uF3x: {
              __targetOpacity: 0.4,
              animate: animation4
            },
            lV47bvrvK: {
              __targetOpacity: 0.2,
              animate: animation5
            },
            v8CbWZZWW: {
              __targetOpacity: 0.6,
              animate: animation3
            },
            Xb_O1yX3Q: {
              __targetOpacity: 0.8,
              animate: animation2
            }
          }, baseVariant, gestureVariant)}>{<RichText __fromCanvasComponent className="framer-6qlg0q" data-framer-name="text" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="JiFbMVzzr" style={{
              "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
            }} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.p, {
                  dir: "auto",
                  style: {
                    "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                    "--framer-font-family": '"Haffer Regular", sans-serif',
                    "--framer-font-size": "14px",
                    "--framer-font-weight": "430",
                    "--framer-line-height": "130%",
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                  },
                  children: "text 3"
                })}</>}</RichText>}</MotionDivWithFXWithOptimizedAppearEffect>, isDisplayed3() && <MotionDivWithFXWithOptimizedAppearEffect __perspectiveFX={false} __smartComponentFX __targetOpacity={1} animate={animation} className="framer-124cvs0" data-framer-appear-id="124cvs0" data-framer-name="04" initial={animation1} layoutDependency={layoutDependency} layoutId="ixJ41H6ci" optimized style={{
            backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))",
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            opacity: 1
          }} variants={{
            CsyJSfhW5: {
              opacity: 0.2
            },
            hPD8_uF3x: {
              opacity: 0.6
            },
            lV47bvrvK: {
              opacity: 0.4
            },
            v8CbWZZWW: {
              opacity: 0.8
            }
          }} {...addPropertyOverrides({
            CsyJSfhW5: {
              __targetOpacity: 0.2,
              animate: animation5
            },
            hPD8_uF3x: {
              __targetOpacity: 0.6,
              animate: animation3
            },
            lV47bvrvK: {
              __targetOpacity: 0.4,
              animate: animation4
            },
            v8CbWZZWW: {
              __targetOpacity: 0.8,
              animate: animation2
            }
          }, baseVariant, gestureVariant)}>{<RichText __fromCanvasComponent className="framer-1hzz4iw" data-framer-name="text" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="tWp3xbDvr" style={{
              "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
            }} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.p, {
                  dir: "auto",
                  style: {
                    "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                    "--framer-font-family": '"Haffer Regular", sans-serif',
                    "--framer-font-size": "14px",
                    "--framer-font-weight": "430",
                    "--framer-line-height": "130%",
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                  },
                  children: "text 4"
                })}</>}</RichText>}</MotionDivWithFXWithOptimizedAppearEffect>, isDisplayed4() && <MotionDivWithFXWithOptimizedAppearEffect __perspectiveFX={false} __smartComponentFX __targetOpacity={1} animate={animation} className="framer-4l7e18" data-framer-appear-id="4l7e18" data-framer-name="05" initial={animation1} layoutDependency={layoutDependency} layoutId="jX5TcbWUV" optimized style={{
            backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))",
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            opacity: 1
          }} variants={{
            CsyJSfhW5: {
              opacity: 0.4
            },
            hPD8_uF3x: {
              opacity: 0.8
            },
            lV47bvrvK: {
              opacity: 0.6
            }
          }} {...addPropertyOverrides({
            CsyJSfhW5: {
              __targetOpacity: 0.4,
              animate: animation4
            },
            hPD8_uF3x: {
              __targetOpacity: 0.8,
              animate: animation2
            },
            lV47bvrvK: {
              __targetOpacity: 0.6,
              animate: animation3
            }
          }, baseVariant, gestureVariant)}>{<RichText __fromCanvasComponent className="framer-lpfc2t" data-framer-name="text" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="LgctnkkMM" style={{
              "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
            }} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.p, {
                  dir: "auto",
                  style: {
                    "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                    "--framer-font-family": '"Haffer Regular", sans-serif',
                    "--framer-font-size": "14px",
                    "--framer-font-weight": "430",
                    "--framer-line-height": "130%",
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                  },
                  children: "text 5"
                })}</>}</RichText>}</MotionDivWithFXWithOptimizedAppearEffect>, isDisplayed5() && <MotionDivWithFXWithOptimizedAppearEffect __perspectiveFX={false} __smartComponentFX __targetOpacity={1} animate={animation} className="framer-n76bly" data-framer-appear-id="n76bly" data-framer-name="06" initial={animation1} layoutDependency={layoutDependency} layoutId="wA40vto1f" optimized style={{
            backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))",
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            opacity: 1
          }} variants={{
            CsyJSfhW5: {
              opacity: 0.6
            },
            lV47bvrvK: {
              opacity: 0.8
            }
          }} {...addPropertyOverrides({
            CsyJSfhW5: {
              __targetOpacity: 0.6,
              animate: animation3
            },
            lV47bvrvK: {
              __targetOpacity: 0.8,
              animate: animation2
            }
          }, baseVariant, gestureVariant)}>{<RichText __fromCanvasComponent className="framer-1qiihsm" data-framer-name="text" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="JFaW_dGlA" style={{
              "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
            }} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.p, {
                  dir: "auto",
                  style: {
                    "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                    "--framer-font-family": '"Haffer Regular", sans-serif',
                    "--framer-font-size": "14px",
                    "--framer-font-weight": "430",
                    "--framer-line-height": "130%",
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                  },
                  children: "text 6"
                })}</>}</RichText>}</MotionDivWithFXWithOptimizedAppearEffect>, isDisplayed6() && <MotionDivWithFXWithOptimizedAppearEffect __perspectiveFX={false} __smartComponentFX __targetOpacity={1} animate={animation} className="framer-1svptiy" data-framer-appear-id="1svptiy" data-framer-name="07" initial={animation1} layoutDependency={layoutDependency} layoutId="UiaVtUwV_" optimized style={{
            backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))",
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            opacity: 1
          }} variants={{
            CsyJSfhW5: {
              opacity: 0.8
            }
          }} {...addPropertyOverrides({
            CsyJSfhW5: {
              __targetOpacity: 0.8,
              animate: animation2
            }
          }, baseVariant, gestureVariant)}>{<RichText __fromCanvasComponent className="framer-wd1vyp" data-framer-name="text" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="IhYKLawAy" style={{
              "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
            }} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.p, {
                  dir: "auto",
                  style: {
                    "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                    "--framer-font-family": '"Haffer Regular", sans-serif',
                    "--framer-font-size": "14px",
                    "--framer-font-weight": "430",
                    "--framer-line-height": "130%",
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                  },
                  children: "text 7"
                })}</>}</RichText>}</MotionDivWithFXWithOptimizedAppearEffect>, isDisplayed7() && <MotionDivWithFXWithOptimizedAppearEffect __perspectiveFX={false} __smartComponentFX __targetOpacity={1} animate={animation} className="framer-r9cxmm" data-framer-appear-id="r9cxmm" data-framer-name="08" initial={animation1} layoutDependency={layoutDependency} layoutId="hwA4YkMjM" optimized style={{
            backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))",
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8
          }}>{<RichText __fromCanvasComponent className="framer-73lej7" data-framer-name="text" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="oLyQrrLHO" style={{
              "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
            }} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.p, {
                  dir: "auto",
                  style: {
                    "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                    "--framer-font-family": '"Haffer Regular", sans-serif',
                    "--framer-font-size": "14px",
                    "--framer-font-weight": "430",
                    "--framer-line-height": "130%",
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                  },
                  children: "text 8"
                })}</>}</RichText>}</MotionDivWithFXWithOptimizedAppearEffect>, isDisplayed8() && <MotionDivWithFXWithOptimizedAppearEffect __perspectiveFX={false} __smartComponentFX __targetOpacity={1} animate={animation} className="framer-1gqy21a" data-framer-appear-id="1gqy21a" data-framer-name="09" initial={animation1} layoutDependency={layoutDependency} layoutId="DTiaftIxK" optimized style={{
            backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))",
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8
          }}>{<RichText __fromCanvasComponent className="framer-1l0k3d8" data-framer-name="text" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="QbY4AGEea" style={{
              "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
            }} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.p, {
                  dir: "auto",
                  style: {
                    "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                    "--framer-font-family": '"Haffer Regular", sans-serif',
                    "--framer-font-size": "14px",
                    "--framer-font-weight": "430",
                    "--framer-line-height": "130%",
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                  },
                  children: "Discover, book, and manage partners"
                })}</>}</RichText>}</MotionDivWithFXWithOptimizedAppearEffect>, isDisplayed8() && <MotionDivWithFXWithOptimizedAppearEffect __perspectiveFX={false} __smartComponentFX __targetOpacity={1} animate={animation} className="framer-1xt0f4o" data-framer-appear-id="1xt0f4o" data-framer-name="10" initial={animation1} layoutDependency={layoutDependency} layoutId="xedN79XMm" optimized style={{
            backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))",
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8
          }}>{<RichText __fromCanvasComponent className="framer-1kyz87o" data-framer-name="text" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="QCkaSZMzW" style={{
              "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
            }} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.p, {
                  dir: "auto",
                  style: {
                    "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                    "--framer-font-family": '"Haffer Regular", sans-serif',
                    "--framer-font-size": "14px",
                    "--framer-font-weight": "430",
                    "--framer-line-height": "130%",
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                  },
                  children: "Discover, book, and manage partners"
                })}</>}</RichText>}</MotionDivWithFXWithOptimizedAppearEffect>, isDisplayed8() && <MotionDivWithFXWithOptimizedAppearEffect __perspectiveFX={false} __smartComponentFX __targetOpacity={1} animate={animation} className="framer-1ozp9yz" data-framer-appear-id="1ozp9yz" data-framer-name="11" initial={animation1} layoutDependency={layoutDependency} layoutId="SCPIQu558" optimized style={{
            backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))",
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8
          }}>{<RichText __fromCanvasComponent className="framer-d17bwp" data-framer-name="text" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="CknkR28mH" style={{
              "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
            }} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.p, {
                  dir: "auto",
                  style: {
                    "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                    "--framer-font-family": '"Haffer Regular", sans-serif',
                    "--framer-font-size": "14px",
                    "--framer-font-weight": "430",
                    "--framer-line-height": "130%",
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                  },
                  children: "Discover, book, and manage partners"
                })}</>}</RichText>}</MotionDivWithFXWithOptimizedAppearEffect>, isDisplayed8() && <MotionDivWithFXWithOptimizedAppearEffect __perspectiveFX={false} __smartComponentFX __targetOpacity={1} animate={animation} className="framer-1br6gzf" data-framer-appear-id="1br6gzf" data-framer-name="12" initial={animation1} layoutDependency={layoutDependency} layoutId="Xd5pFDQeZ" optimized style={{
            backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))",
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8
          }}>{<RichText __fromCanvasComponent className="framer-8l8xqa" data-framer-name="text" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="PQOzwLV8R" style={{
              "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
            }} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.p, {
                  dir: "auto",
                  style: {
                    "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                    "--framer-font-family": '"Haffer Regular", sans-serif',
                    "--framer-font-size": "14px",
                    "--framer-font-weight": "430",
                    "--framer-line-height": "130%",
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                  },
                  children: "Discover, book, and manage partners"
                })}</>}</RichText>}</MotionDivWithFXWithOptimizedAppearEffect>]
        })}</Transition>}</Variants>}</LayoutGroup>;
});
var css = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-ueFRz.framer-l43hli, .framer-ueFRz .framer-l43hli { display: block; }", ".framer-ueFRz.framer-1opq3xu { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 824px; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: 456px; }", ".framer-ueFRz .framer-6c7u7o, .framer-ueFRz .framer-qfgd5p, .framer-ueFRz .framer-b1ygef, .framer-ueFRz .framer-124cvs0, .framer-ueFRz .framer-4l7e18, .framer-ueFRz .framer-n76bly, .framer-ueFRz .framer-1svptiy, .framer-ueFRz .framer-r9cxmm, .framer-ueFRz .framer-1gqy21a, .framer-ueFRz .framer-1xt0f4o, .framer-ueFRz .framer-1ozp9yz, .framer-ueFRz .framer-1br6gzf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 12px; position: relative; width: 100%; }", ".framer-ueFRz .framer-146fnk5, .framer-ueFRz .framer-wgcruz, .framer-ueFRz .framer-6qlg0q, .framer-ueFRz .framer-1hzz4iw, .framer-ueFRz .framer-lpfc2t, .framer-ueFRz .framer-1qiihsm, .framer-ueFRz .framer-wd1vyp, .framer-ueFRz .framer-73lej7, .framer-ueFRz .framer-1l0k3d8, .framer-ueFRz .framer-1kyz87o, .framer-ueFRz .framer-d17bwp, .framer-ueFRz .framer-8l8xqa { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }"];
var FramerPlV87rtwn = withCSS(Component, css, "framer-ueFRz");
var PlV87rtwn_default = FramerPlV87rtwn;
FramerPlV87rtwn.displayName = "imput_slider";
FramerPlV87rtwn.defaultProps = {
  height: 824,
  width: 456
};
addPropertyControls(FramerPlV87rtwn, {
  variant: {
    options: ["nlkp_EGfi", "iGElGOb3O", "W5Tv8ydyG", "oivwHypDM", "Xb_O1yX3Q", "v8CbWZZWW", "hPD8_uF3x", "lV47bvrvK", "CsyJSfhW5", "vLA37VWRp", "nKVgrglFO", "CY3HrDc05", "LG6tHZz14", "wSubc5ICB", "bWBK_yHmc"],
    optionTitles: ["Variant 1", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14"],
    title: "Variant",
    type: ControlType.Enum
  }
});
addFonts(FramerPlV87rtwn, [{
  explicitInter: true,
  fonts: [{
    cssFamilyName: "Haffer Regular",
    source: "custom",
    style: "normal",
    uiFamilyName: "Haffer",
    url: "https://framerusercontent.com/assets/tAGQcvN09kwW2QjPLqLO197UqBQ.woff",
    weight: "430"
  }]
}], {
  supportsExplicitInterCodegen: true
});
var __FramerMetadata__ = {
  "exports": {
    "default": {
      "type": "reactComponent",
      "name": "FramerPlV87rtwn",
      "slots": [],
      "annotations": {
        "framerAutoSizeImages": "true",
        "framerImmutableVariables": "true",
        "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"iGElGOb3O":{"layout":["fixed","fixed"]},"W5Tv8ydyG":{"layout":["fixed","fixed"]},"oivwHypDM":{"layout":["fixed","fixed"]},"Xb_O1yX3Q":{"layout":["fixed","fixed"]},"v8CbWZZWW":{"layout":["fixed","fixed"]},"hPD8_uF3x":{"layout":["fixed","fixed"]},"lV47bvrvK":{"layout":["fixed","fixed"]},"CsyJSfhW5":{"layout":["fixed","fixed"]},"vLA37VWRp":{"layout":["fixed","fixed"]},"nKVgrglFO":{"layout":["fixed","fixed"]},"CY3HrDc05":{"layout":["fixed","fixed"]},"LG6tHZz14":{"layout":["fixed","fixed"]},"wSubc5ICB":{"layout":["fixed","fixed"]},"bWBK_yHmc":{"layout":["fixed","fixed"]}}}',
        "framerIntrinsicHeight": "824",
        "framerDisplayContentsDiv": "false",
        "framerContractVersion": "1",
        "framerComponentViewportWidth": "true",
        "framerColorSyntax": "true",
        "framerIntrinsicWidth": "456"
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
var _OriginalComponent = PlV87rtwn_default;
function ImputsliderWrapped(props) {
  var _variant = useVariant(props.variant);
  var _inner = (_variant !== undefined) ? { ...props, variant: _variant } : props;
  return _ctxJsx(ContextProviders, { children: _ctxJsx(_OriginalComponent, _inner) });
}
Object.assign(ImputsliderWrapped, _OriginalComponent);
export {  __FramerMetadata__,  ImputsliderWrapped as default   };