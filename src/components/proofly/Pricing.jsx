"use client"
// http-url:https://framerusercontent.com/modules/Y9G0qWJqgO1sncJcI3Cr/XW2rkIPyAiSwVcBXGdGz/Dk7kI0f37.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, cx, RichText, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "@proofly-framer/runtime";
import { LayoutGroup, motion, MotionConfigContext } from "@proofly-framer/runtime";
import * as React from "react";
import { useRef } from "react";
import { jsx as _ctxJsx } from "react/jsx-runtime";
import { ContextProviders, useVariant } from "@proofly-framer/runtime";
var serializationHash = "framer-rqNWW";
var variantClassNames = {
  J3gP8iY1l: "framer-v-ary5dj"
};
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
var getProps = ({
  height,
  id,
  width,
  ...props
}) => {
  return {
    ...props
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
    defaultVariant: "J3gP8iY1l",
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
          className: cx(scopingClassNames, "framer-ary5dj", className, classNames),
          "data-framer-name": "Variant 1",
          layoutDependency,
          layoutId: "J3gP8iY1l",
          ref: refBinding,
          style: {
            ...style
          },
          children: [_jsxs(motion.div, {
            className: "framer-qjhntr",
            layoutDependency,
            layoutId: "jwV6QrU_B",
            children: [_jsx(motion.div, {
              className: "framer-1p9xvts",
              layoutDependency,
              layoutId: "gkVioVPh2",
              children: <RichText __fromCanvasComponent className="framer-sec539" data-framer-name="Bloom Preferred Pricing\xA0" fonts={["CUSTOM;Haffer Bold"]} layoutDependency={layoutDependency} layoutId="zjODCyzVN" style={{
                "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                "--framer-paragraph-spacing": "9.60006332397461px"
              }} verticalAlignment="center" withExternalLayout>{<>{_jsx(motion.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                      "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                      "--framer-line-height": "110%",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                    },
                    children: "Membership"
                  })}</>}</RichText>
            }), _jsx(motion.div, {
              className: "framer-kruuyq",
              layoutDependency,
              layoutId: "GbgpXDo6p",
              children: <RichText __fromCanvasComponent className="framer-zq7oto" data-framer-name="Bloom Preferred Pricing\xA0" fonts={["CUSTOM;Haffer Bold"]} layoutDependency={layoutDependency} layoutId="uZIizVrAL" style={{
                "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                "--framer-paragraph-spacing": "9.60006332397461px"
              }} verticalAlignment="center" withExternalLayout>{<>{_jsx(motion.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                      "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                      "--framer-line-height": "110%",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                    },
                    children: "Tiers"
                  })}</>}</RichText>
            }), _jsxs(motion.div, {
              className: "framer-1kuqjkk",
              layoutDependency,
              layoutId: "OhrcPXO1B",
              children: [<RichText __fromCanvasComponent className="framer-1mslyee" data-framer-name="Bloom Preferred Pricing\xA0" fonts={["CUSTOM;Haffer Bold"]} layoutDependency={layoutDependency} layoutId="i5XZOxBTM" style={{
                "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                "--framer-paragraph-spacing": "9.60006332397461px"
              }} verticalAlignment="center" withExternalLayout>{<>{_jsx(motion.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                      "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                      "--framer-line-height": "110%",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                    },
                    children: "Delivery partners"
                  })}</>}</RichText>, <RichText __fromCanvasComponent className="framer-10qzcxc" data-framer-name="Bloom Preferred Pricing\xA0" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="AfwK8Mloy" style={{
                "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                "--framer-paragraph-spacing": "9.60006332397461px"
              }} verticalAlignment="center" withExternalLayout>{<>{_jsxs(motion.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-line-height": "110%",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                    },
                    children: ["Logistics, ", _jsx(motion.br, {}), "Warehousing, ", _jsx(motion.br, {}), "Shipping."]
                  })}</>}</RichText>]
            }), _jsxs(motion.div, {
              className: "framer-tiya82",
              layoutDependency,
              layoutId: "DAA239h5w",
              children: [<RichText __fromCanvasComponent className="framer-152tdmq" data-framer-name="Bloom Preferred Pricing\xA0" fonts={["CUSTOM;Haffer Bold"]} layoutDependency={layoutDependency} layoutId="sByIZXKCg" style={{
                "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                "--framer-paragraph-spacing": "9.60006332397461px"
              }} verticalAlignment="center" withExternalLayout>{<>{_jsx(motion.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                      "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                      "--framer-line-height": "110%",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                    },
                    children: "Build Partners"
                  })}</>}</RichText>, <RichText __fromCanvasComponent className="framer-1tppxde" data-framer-name="Bloom Preferred Pricing\xA0" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="Mc3gYRFRO" style={{
                "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                "--framer-paragraph-spacing": "9.60006332397461px"
              }} verticalAlignment="center" withExternalLayout>{<>{_jsxs(motion.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-line-height": "110%",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                    },
                    children: ["Contract Manufacturing,", _jsx(motion.br, {}), "Assembly"]
                  })}</>}</RichText>]
            }), _jsxs(motion.div, {
              className: "framer-5me4ha",
              layoutDependency,
              layoutId: "A8HVl6n8M",
              children: [<RichText __fromCanvasComponent className="framer-ndxv5j" data-framer-name="Bloom Preferred Pricing\xA0" fonts={["CUSTOM;Haffer Bold"]} layoutDependency={layoutDependency} layoutId="i8YnqKD0K" style={{
                "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                "--framer-paragraph-spacing": "9.60006332397461px"
              }} verticalAlignment="center" withExternalLayout>{<>{_jsx(motion.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                      "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                      "--framer-line-height": "110%",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                    },
                    children: "Delivery partners"
                  })}</>}</RichText>, <RichText __fromCanvasComponent className="framer-2yulpu" data-framer-name="Bloom Preferred Pricing\xA0" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="iRkJjOhyR" style={{
                "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                "--framer-paragraph-spacing": "9.60006332397461px"
              }} verticalAlignment="center" withExternalLayout>{<>{_jsx(motion.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-line-height": "110%",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                    },
                    children: "Logistics, Warehousing, Shipping"
                  })}</>}</RichText>]
            }), _jsxs(motion.div, {
              className: "framer-1aashtr",
              layoutDependency,
              layoutId: "kMM6Srbxl",
              children: [<RichText __fromCanvasComponent className="framer-1kzpfaq" data-framer-name="Bloom Preferred Pricing\xA0" fonts={["CUSTOM;Haffer Bold"]} layoutDependency={layoutDependency} layoutId="yHB4pMpic" style={{
                "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                "--framer-paragraph-spacing": "9.60006332397461px"
              }} verticalAlignment="center" withExternalLayout>{<>{_jsx(motion.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                      "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                      "--framer-line-height": "110%",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                    },
                    children: "Delivery partners"
                  })}</>}</RichText>, <RichText __fromCanvasComponent className="framer-jmi9ax" data-framer-name="Bloom Preferred Pricing\xA0" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="LNjMxk1EI" style={{
                "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                "--framer-paragraph-spacing": "9.60006332397461px"
              }} verticalAlignment="center" withExternalLayout>{<>{_jsx(motion.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-line-height": "110%",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                    },
                    children: "Logistics, Warehousing, Shipping"
                  })}</>}</RichText>]
            })]
          }), _jsxs(motion.div, {
            className: "framer-x2ufkd",
            layoutDependency,
            layoutId: "mFnjRMCp_",
            children: [<RichText __fromCanvasComponent className="framer-1k66z4q" data-framer-name="Monthly Membership" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="rjrHUQqRY" style={{
              "--extracted-1lwpl3i": "var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143))",
              "--framer-paragraph-spacing": "9.60006332397461px"
            }} verticalAlignment="center" withExternalLayout>{<>{_jsx(motion.h5, {
                  style: {
                    "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                    "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                    "--framer-font-size": "14px",
                    "--framer-line-height": "120%",
                    "--framer-text-alignment": "center",
                    "--framer-text-color": "var(--extracted-1lwpl3i, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)))"
                  },
                  children: "SEED"
                })}</>}</RichText>, _jsxs(motion.div, {
              className: "framer-174yabl",
              layoutDependency,
              layoutId: "DOlERmMVa",
              style: {
                backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))",
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4
              },
              children: [<RichText __fromCanvasComponent className="framer-1ki3n8" data-framer-name="$500" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="xxWIcGwmT" style={{
                "--extracted-1lwpl3i": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                "--framer-paragraph-spacing": "0px"
              }} verticalAlignment="center" withExternalLayout>{<>{_jsx(motion.h5, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-font-size": "18px",
                      "--framer-line-height": "120%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-1lwpl3i, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                    },
                    children: "$500"
                  })}</>}</RichText>, <RichText __fromCanvasComponent className="framer-1opscaj" data-framer-name="YES" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="Ngy8TuOCf" style={{
                "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                "--framer-paragraph-spacing": "0px"
              }} verticalAlignment="center" withExternalLayout>{<>{_jsx(motion.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-font-size": "12px",
                      "--framer-line-height": "1em",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                    },
                    children: "\u2013"
                  })}</>}</RichText>, <RichText __fromCanvasComponent className="framer-153g5ax" data-framer-name="$30 / $35" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="xBMPmR8pm" style={{
                "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                "--framer-paragraph-spacing": "0px"
              }} verticalAlignment="center" withExternalLayout>{<>{_jsxs(motion.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-font-size": "12px",
                      "--framer-line-height": "1em",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                    },
                    children: ["One-click,", _jsx(motion.br, {}), "Auto-pay"]
                  })}</>}</RichText>]
            })]
          }), _jsxs(motion.div, {
            className: "framer-ihcygm",
            layoutDependency,
            layoutId: "Ludl38A3S",
            children: [<RichText __fromCanvasComponent className="framer-1l94t12" data-framer-name="Monthly Membership" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="Qptt1cU3t" style={{
              "--extracted-1lwpl3i": "var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143))",
              "--framer-paragraph-spacing": "9.60006332397461px"
            }} verticalAlignment="center" withExternalLayout>{<>{_jsx(motion.h5, {
                  style: {
                    "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                    "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                    "--framer-font-size": "14px",
                    "--framer-line-height": "120%",
                    "--framer-text-alignment": "center",
                    "--framer-text-color": "var(--extracted-1lwpl3i, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)))"
                  },
                  children: "GROW"
                })}</>}</RichText>, _jsxs(motion.div, {
              className: "framer-69cqto",
              layoutDependency,
              layoutId: "qnVoVEMHj",
              style: {
                backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))",
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4
              },
              children: [<RichText __fromCanvasComponent className="framer-o52m4" data-framer-name="$2,000" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="h1fx8lS1S" style={{
                "--extracted-1lwpl3i": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                "--framer-paragraph-spacing": "0px"
              }} verticalAlignment="center" withExternalLayout>{<>{_jsx(motion.h5, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-font-size": "18px",
                      "--framer-line-height": "120%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-1lwpl3i, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                    },
                    children: "$2,000"
                  })}</>}</RichText>, <RichText __fromCanvasComponent className="framer-15hld3a" data-framer-name="YES" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="cPzQ7IQke" style={{
                "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                "--framer-paragraph-spacing": "0px"
              }} verticalAlignment="center" withExternalLayout>{<>{_jsx(motion.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-font-size": "12px",
                      "--framer-line-height": "1em",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                    },
                    children: "10%"
                  })}</>}</RichText>, <RichText __fromCanvasComponent className="framer-1m6okhd" data-framer-name="$25 / $30" fonts={["CUSTOM;Haffer Regular", "CUSTOM;Haffer Bold"]} layoutDependency={layoutDependency} layoutId="x1ZnGhsIt" style={{
                "--extracted-1w3ko1f": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                "--extracted-r6o4lv": "var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143))",
                "--framer-paragraph-spacing": "0px"
              }} verticalAlignment="center" withExternalLayout>{<>{_jsxs(motion.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-font-size": "12px",
                      "--framer-line-height": "1em",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)))"
                    },
                    children: [_jsx(motion.span, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                        "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                        "--framer-text-color": "var(--extracted-1w3ko1f, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                      },
                      children: _jsx(motion.strong, {
                        children: "Net 15 terms"
                      })
                    }), _jsx(motion.strong, {
                      children: _jsx(motion.br, {})
                    }), "Extendable to ", _jsx(motion.br, {}), "Net 120*"]
                  })}</>}</RichText>]
            })]
          }), _jsxs(motion.div, {
            className: "framer-1twvvr",
            layoutDependency,
            layoutId: "ZtROwHyAA",
            children: [<RichText __fromCanvasComponent className="framer-ji8j9h" data-framer-name="Monthly Membership" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="J9t5pdbHe" style={{
              "--extracted-1lwpl3i": "var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143))",
              "--framer-paragraph-spacing": "9.60006332397461px"
            }} verticalAlignment="center" withExternalLayout>{<>{_jsx(motion.h5, {
                  style: {
                    "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                    "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                    "--framer-font-size": "14px",
                    "--framer-line-height": "120%",
                    "--framer-text-alignment": "center",
                    "--framer-text-color": "var(--extracted-1lwpl3i, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)))"
                  },
                  children: "FULL BLOOM"
                })}</>}</RichText>, _jsxs(motion.div, {
              className: "framer-11polst",
              layoutDependency,
              layoutId: "CRF2_X3io",
              style: {
                backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))",
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4
              },
              children: [<RichText __fromCanvasComponent className="framer-1in3kmq" data-framer-name="$6,000" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="f4AEhfGhN" style={{
                "--extracted-1lwpl3i": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                "--framer-paragraph-spacing": "0px"
              }} verticalAlignment="center" withExternalLayout>{<>{_jsx(motion.h5, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-font-size": "18px",
                      "--framer-line-height": "120%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-1lwpl3i, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                    },
                    children: "$6,000"
                  })}</>}</RichText>, <RichText __fromCanvasComponent className="framer-jst28r" data-framer-name="YES" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="FJ0Ehqfq7" style={{
                "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                "--framer-paragraph-spacing": "0px"
              }} verticalAlignment="center" withExternalLayout>{<>{_jsx(motion.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-font-size": "12px",
                      "--framer-line-height": "1em",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                    },
                    children: "Custom"
                  })}</>}</RichText>, <RichText __fromCanvasComponent className="framer-1ndgzzg" data-framer-name="“Custom”\u2028(Internal: $20 / 25)" fonts={["CUSTOM;Haffer Regular", "CUSTOM;Haffer Bold"]} layoutDependency={layoutDependency} layoutId="cvxucvcCD" style={{
                "--extracted-1w3ko1f": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                "--extracted-r6o4lv": "var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143))",
                "--framer-paragraph-spacing": "0px"
              }} verticalAlignment="center" withExternalLayout>{<>{_jsxs(motion.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-font-size": "12px",
                      "--framer-line-height": "1em",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)))"
                    },
                    children: [_jsx(motion.span, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                        "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                        "--framer-text-color": "var(--extracted-1w3ko1f, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                      },
                      children: _jsx(motion.strong, {
                        children: "Net 30 terms"
                      })
                    }), _jsx(motion.strong, {
                      children: _jsx(motion.br, {})
                    }), "Extendable to ", _jsx(motion.br, {}), "Net 120*"]
                  })}</>}</RichText>]
            })]
          })]
        })}</Transition>}</Variants>}</LayoutGroup>;
});
var css = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-rqNWW.framer-b9ucf8, .framer-rqNWW .framer-b9ucf8 { display: block; }", ".framer-rqNWW.framer-ary5dj { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: 380px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 810px; }", ".framer-rqNWW .framer-qjhntr { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: 100%; justify-content: center; overflow: hidden; padding: 8px; position: relative; width: 251px; }", ".framer-rqNWW .framer-1p9xvts, .framer-rqNWW .framer-kruuyq, .framer-rqNWW .framer-1kuqjkk, .framer-rqNWW .framer-tiya82, .framer-rqNWW .framer-5me4ha, .framer-rqNWW .framer-1aashtr { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-rqNWW .framer-sec539, .framer-rqNWW .framer-zq7oto, .framer-rqNWW .framer-1mslyee, .framer-rqNWW .framer-10qzcxc, .framer-rqNWW .framer-152tdmq, .framer-rqNWW .framer-1tppxde, .framer-rqNWW .framer-ndxv5j, .framer-rqNWW .framer-2yulpu, .framer-rqNWW .framer-1kzpfaq, .framer-rqNWW .framer-jmi9ax { flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }", ".framer-rqNWW .framer-x2ufkd, .framer-rqNWW .framer-ihcygm, .framer-rqNWW .framer-1twvvr { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }", ".framer-rqNWW .framer-1k66z4q, .framer-rqNWW .framer-1l94t12, .framer-rqNWW .framer-ji8j9h { flex: none; height: auto; overflow: visible; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-rqNWW .framer-174yabl, .framer-rqNWW .framer-69cqto, .framer-rqNWW .framer-11polst { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 8px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }", ".framer-rqNWW .framer-1ki3n8, .framer-rqNWW .framer-1opscaj, .framer-rqNWW .framer-153g5ax { flex: none; height: 48px; overflow: visible; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-rqNWW .framer-o52m4, .framer-rqNWW .framer-15hld3a, .framer-rqNWW .framer-1m6okhd, .framer-rqNWW .framer-1in3kmq, .framer-rqNWW .framer-jst28r, .framer-rqNWW .framer-1ndgzzg { flex: none; height: 48px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }"];
var FramerDk7kI0f37 = withCSS(Component, css, "framer-rqNWW");
var Dk7kI0f37_default = FramerDk7kI0f37;
FramerDk7kI0f37.displayName = "pricing";
FramerDk7kI0f37.defaultProps = {
  height: 380,
  width: 810
};
addFonts(FramerDk7kI0f37, [{
  explicitInter: true,
  fonts: [{
    family: "Haffer Bold",
    source: "custom",
    url: "https://framerusercontent.com/assets/eRqmC6W9PktN8mUcnwel9B6wmPs.woff"
  }, {
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
      "name": "FramerDk7kI0f37",
      "slots": [],
      "annotations": {
        "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]}}}',
        "framerDisplayContentsDiv": "false",
        "framerIntrinsicHeight": "380",
        "framerComponentViewportWidth": "true",
        "framerContractVersion": "1",
        "framerImmutableVariables": "true",
        "framerIntrinsicWidth": "810",
        "framerColorSyntax": "true",
        "framerAutoSizeImages": "true"
      }
    },
    "__FramerMetadata__": {
      "type": "variable"
    }
  }
};
var _OriginalComponent = Dk7kI0f37_default;
function PricingWrapped(props) {
  var _variant = useVariant(props.variant);
  var _inner = (_variant !== undefined) ? { ...props, variant: _variant } : props;
  return _ctxJsx(ContextProviders, { children: _ctxJsx(_OriginalComponent, _inner) });
}
Object.assign(PricingWrapped, _OriginalComponent);
export {  __FramerMetadata__,  PricingWrapped as default   };