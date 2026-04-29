"use client"
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};

// http-url:https://framerusercontent.com/modules/gGXLFANbZFKf2qU8bbVL/uQjjbN7Yn6nBRqTZdwzU/HoKrrnQcM.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addPropertyControls, ControlType, cx, motion, useSVGTemplate, withCSS } from "@proofly-framer/runtime";
import * as React from "react";
import { forwardRef as forwardRef2 } from "react";

// Extracted SVG assets
const __svg_1 = '<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 5.5 5.25 L 0 10.5" fill="transparent" height="10.5px" id="pTO_zwTXv" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(13.75 6.75)" width="5.5px"/><path d="M 14.25 0 L 0 0" fill="transparent" height="1px" id="Jh7NTfV71" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(4.75 12)" width="14.25px"/></svg>';

var mask, Base, MotionSVG, SVG, svg, getProps, Component, css, Icon, HoKrrnQcM_default;
var init_HoKrrnQcM = __esm({
  "http-url:https://framerusercontent.com/modules/gGXLFANbZFKf2qU8bbVL/uQjjbN7Yn6nBRqTZdwzU/HoKrrnQcM.js"() {
    mask = "var(--framer-icon-mask)";
    Base = forwardRef2(function (props, ref) {
      return <svg {...props} ref={ref}>{props.children}</svg>;
    });
    MotionSVG = motion.create(Base);
    SVG = forwardRef2((props, ref) => {
      const {
        animated,
        layoutId,
        children,
        ...rest
      } = props;
      return animated ? <MotionSVG {...rest} layoutId={layoutId} ref={ref}>{children}</MotionSVG> : <svg {...rest} ref={ref}>{children}</svg>;
    });
    svg = __svg_1;
    getProps = ({
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
    Component = React.forwardRef(function (props, ref) {
      const {
        style,
        className: className7,
        layoutId,
        variant,
        fICyAUQY1,
        lKf_CQTz5,
        BKVe8Pgvw,
        ...restProps
      } = getProps(props);
      const href = useSVGTemplate("1173457374", svg);
      return <SVG {...restProps} className={cx("framer-EcgqK", className7)} layoutId={layoutId} ref={ref} role="presentation" style={{
        "--1335ju": lKf_CQTz5,
        "--18mrqx2": fICyAUQY1,
        ...style
      }} viewBox="0 0 24 24">{<use href={href} />}</SVG>;
    });
    css = [`.framer-EcgqK { -webkit-mask: ${mask}; aspect-ratio: 1; display: block; mask: ${mask}; width: 24px; }`];
    Icon = withCSS(Component, css, "framer-EcgqK");
    Icon.displayName = "Arrow Right";
    HoKrrnQcM_default = Icon;
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
  }
});

// http-url:https://framerusercontent.com/modules/jtYjlqHZqHU87icHOGiw/OOuSnFcca3KULIr591Dj/QkI8Aa5rN.js
import { fontStore } from "@proofly-framer/runtime";
var fonts, css2, className;
var init_QkI8Aa5rN = __esm({
  "http-url:https://framerusercontent.com/modules/jtYjlqHZqHU87icHOGiw/OOuSnFcca3KULIr591Dj/QkI8Aa5rN.js"() {
    fontStore.loadFonts(["CUSTOM;Haffer Regular"]);
    fonts = [{
      explicitInter: true,
      fonts: [{
        family: "Haffer Regular",
        source: "custom",
        url: "https://framerusercontent.com/assets/tAGQcvN09kwW2QjPLqLO197UqBQ.woff"
      }]
    }];
    css2 = ['.framer-aqieJ .framer-styles-preset-mnimbo:not(.rich-text-wrapper), .framer-aqieJ .framer-styles-preset-mnimbo.rich-text-wrapper p { --framer-font-family: "Haffer Regular", "Haffer Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, #0a0b0a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }'];
    className = "framer-aqieJ";
  }
});

// http-url:https://framerusercontent.com/modules/Ae2JxZ1NzMSdVHWpQSYI/6DXq0VgytYexIhDwN2rC/YlBLAavU6.js
import { fontStore as fontStore2 } from "@proofly-framer/runtime";
var fonts2, css3, className2;
var init_YlBLAavU6 = __esm({
  "http-url:https://framerusercontent.com/modules/Ae2JxZ1NzMSdVHWpQSYI/6DXq0VgytYexIhDwN2rC/YlBLAavU6.js"() {
    fontStore2.loadFonts(["CUSTOM;Haffer Regular"]);
    fonts2 = [{
      explicitInter: true,
      fonts: [{
        family: "Haffer Regular",
        source: "custom",
        url: "https://framerusercontent.com/assets/tAGQcvN09kwW2QjPLqLO197UqBQ.woff"
      }]
    }];
    css3 = ['.framer-RqrbG .framer-styles-preset-1ydx3rt:not(.rich-text-wrapper), .framer-RqrbG .framer-styles-preset-1ydx3rt.rich-text-wrapper p { --framer-font-family: "Haffer Regular", "Haffer Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, #0a0b0a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }', '@media (max-width: 767px) and (min-width: 0px) { .framer-RqrbG .framer-styles-preset-1ydx3rt:not(.rich-text-wrapper), .framer-RqrbG .framer-styles-preset-1ydx3rt.rich-text-wrapper p { --framer-font-family: "Haffer Regular", "Haffer Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, #0a0b0a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }'];
    className2 = "framer-RqrbG";
  }
});

// http-url:https://framerusercontent.com/modules/tLVqKCltCYmTTKeYPY8O/61TR8ONf7Q5XYv19SfxW/yZBQGZIRL.js
var yZBQGZIRL_exports = {};
__export(yZBQGZIRL_exports, {
  __FramerMetadata__: () => __FramerMetadata__,
  default: () => yZBQGZIRL_default
});
import { jsx as _jsx2, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls as addPropertyControls2, ControlType as ControlType2, cx as cx2, getFonts, getFontsFromSharedStyle, Link, RichText, useActiveVariantCallback, useComponentViewport, useLocaleInfo, useVariantState, withCSS as withCSS2 } from "@proofly-framer/runtime";
import { LayoutGroup, motion as motion2, MotionConfigContext } from "@proofly-framer/runtime";
import * as React2 from "react";
import { useRef } from "react";
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach(variant => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var ArrowRightFonts, enabledGestures, cycleOrder, serializationHash, variantClassNames, radiusForCorner, transition1, transformTemplate1, Transition, Variants, humanReadableVariantMap, getProps2, createLayoutDependency, Component2, css4, FrameryZBQGZIRL, yZBQGZIRL_default, __FramerMetadata__;
var init_yZBQGZIRL = __esm({
  "http-url:https://framerusercontent.com/modules/tLVqKCltCYmTTKeYPY8O/61TR8ONf7Q5XYv19SfxW/yZBQGZIRL.js"() {
    init_HoKrrnQcM();
    init_QkI8Aa5rN();
    init_YlBLAavU6();
    ArrowRightFonts = getFonts(HoKrrnQcM_default);
    enabledGestures = {
      bHEcOt3us: {
        hover: true
      },
      br7LBM8iN: {
        hover: true
      },
      coXNANDm3: {
        hover: true
      },
      llZeWFj0E: {
        hover: true
      },
      tLEpsRpVS: {
        hover: true
      },
      ZmCP_eD3_: {
        hover: true
      }
    };
    cycleOrder = ["ZmCP_eD3_", "llZeWFj0E", "tLEpsRpVS", "bHEcOt3us", "FbG4z2omJ", "coXNANDm3", "br7LBM8iN", "bMRQAPM8x"];
    serializationHash = "framer-BsBK3";
    variantClassNames = {
      bHEcOt3us: "framer-v-26utbf",
      bMRQAPM8x: "framer-v-19s4zot",
      br7LBM8iN: "framer-v-mfbo2h",
      coXNANDm3: "framer-v-6stzd3",
      FbG4z2omJ: "framer-v-nbkuw9",
      llZeWFj0E: "framer-v-1f8bjye",
      tLEpsRpVS: "framer-v-j08lig",
      ZmCP_eD3_: "framer-v-16c10ng"
    };
    radiusForCorner = (value, cornerIndex) => {
      if (typeof value === "number" && Number.isFinite(value)) return Math.max(0, value) + "px";
      if (typeof value !== "string" || typeof cornerIndex !== "number") return void 0;
      const segments = value.split(" ");
      return segments[cornerIndex] || segments[cornerIndex - 2] || segments[0];
    };
    transition1 = {
      damping: 60,
      delay: 0,
      mass: 1,
      stiffness: 500,
      type: "spring"
    };
    transformTemplate1 = (_2, t5) => `translateX(-50%) ${t5}`;
    Transition = ({
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
    Variants = motion2.create(React2.Fragment);
    humanReadableVariantMap = {
      "Just Icon": "bMRQAPM8x",
      "small-gradient": "coXNANDm3",
      "tiny stroke": "FbG4z2omJ",
      Big: "ZmCP_eD3_",
      Dark: "tLEpsRpVS",
      huge: "br7LBM8iN",
      Small: "llZeWFj0E",
      tiny: "bHEcOt3us"
    };
    getProps2 = ({
      background,
      border,
      click,
      height,
      id,
      link,
      radius,
      title,
      titleColor,
      width,
      ...props
    }) => {
      return {
        ...props,
        du4PAlRaB: click ?? props.du4PAlRaB,
        KhVtTQLb4: radius ?? props.KhVtTQLb4 ?? "4px",
        P7ZHYgc9n: titleColor ?? props.P7ZHYgc9n ?? "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
        qzxtK1_9Y: link ?? props.qzxtK1_9Y,
        RQDpSij6V: background ?? props.RQDpSij6V ?? "var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(255, 59, 50))",
        TiAMtDaz3: title ?? props.TiAMtDaz3 ?? "Login",
        variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "ZmCP_eD3_",
        wN3STPwMb: border ?? props.wN3STPwMb ?? {
          borderColor: 'var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))',
          borderStyle: "solid",
          borderWidth: 0
        }
      };
    };
    createLayoutDependency = (props, variants) => {
      if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
      return variants.join("-");
    };
    Component2 = React2.forwardRef(function (props, ref) {
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
        className: className7,
        layoutId,
        variant,
        qzxtK1_9Y,
        TiAMtDaz3,
        RQDpSij6V,
        P7ZHYgc9n,
        du4PAlRaB,
        wN3STPwMb,
        KhVtTQLb4,
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
        defaultVariant: "ZmCP_eD3_",
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
      const onTaphj2y62 = activeVariantCallback(async (...args) => {
        setGestureState({
          isPressed: false
        });
        if (du4PAlRaB) {
          const res = await du4PAlRaB(...args);
          if (res === false) return false;
        }
      });
      const sharedStyleClassNames = [className2, className];
      const scopingClassNames = cx2(serializationHash, ...sharedStyleClassNames);
      const isDisplayed = () => {
        if (baseVariant === "bMRQAPM8x") return true;
        return false;
      };
      const isDisplayed1 = () => {
        if (baseVariant === "bMRQAPM8x") return false;
        return true;
      };
      return <LayoutGroup id={layoutId ?? defaultLayoutId}>{<Variants animate={variants} initial={false}>{<Transition value={transition1}>{<Link href={qzxtK1_9Y} motionChild nodeId="ZmCP_eD3_" scopeId="yZBQGZIRL">{_jsxs(motion2.a, {
                ...restProps,
                ...gestureHandlers,
                className: `${cx2(scopingClassNames, "framer-16c10ng", className7, classNames)} framer-3bbyhf`,
                "data-border": true,
                "data-framer-name": "Big",
                "data-highlight": true,
                layoutDependency,
                layoutId: "ZmCP_eD3_",
                onTap: onTaphj2y62,
                ref: refBinding,
                style: {
                  "--border-bottom-width": (wN3STPwMb.borderBottomWidth ?? wN3STPwMb.borderWidth) + "px",
                  "--border-color": wN3STPwMb.borderColor,
                  "--border-left-width": (wN3STPwMb.borderLeftWidth ?? wN3STPwMb.borderWidth) + "px",
                  "--border-right-width": (wN3STPwMb.borderRightWidth ?? wN3STPwMb.borderWidth) + "px",
                  "--border-style": wN3STPwMb.borderStyle,
                  "--border-top-width": (wN3STPwMb.borderTopWidth ?? wN3STPwMb.borderWidth) + "px",
                  background: `radial-gradient(50% 50% at 50% 50%, ${RQDpSij6V} 0%, ${RQDpSij6V} 100%)`,
                  backgroundColor: RQDpSij6V,
                  borderBottomLeftRadius: radiusForCorner(KhVtTQLb4, 3),
                  borderBottomRightRadius: radiusForCorner(KhVtTQLb4, 2),
                  borderTopLeftRadius: radiusForCorner(KhVtTQLb4, 0),
                  borderTopRightRadius: radiusForCorner(KhVtTQLb4, 1),
                  ...style
                },
                variants: {
                  bMRQAPM8x: {
                    background: "radial-gradient(50% 50% at 50% 50%, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(10, 11, 10)) 0%, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(10, 11, 10)) 100%)",
                    backgroundColor: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(10, 11, 10))"
                  },
                  coXNANDm3: {
                    background: "radial-gradient(100% 100% at 100% 0%, var(--token-d40a5262-b4fe-45d5-9e97-61d735d1744e, rgb(255, 152, 0)) 0%, var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62)) 100%)",
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4,
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4
                  },
                  FbG4z2omJ: {
                    backgroundColor: "rgba(0, 0, 0, 0)"
                  },
                  llZeWFj0E: {
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4,
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4
                  },
                  tLEpsRpVS: {
                    background: "radial-gradient(50% 50% at 50% 50%, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(10, 11, 10)) 0%, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(10, 11, 10)) 100%)",
                    backgroundColor: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(10, 11, 10))"
                  }
                },
                ...addPropertyOverrides({
                  "bHEcOt3us-hover": {
                    "data-framer-name": void 0
                  },
                  "br7LBM8iN-hover": {
                    "data-framer-name": void 0
                  },
                  "coXNANDm3-hover": {
                    "data-framer-name": void 0
                  },
                  "llZeWFj0E-hover": {
                    "data-framer-name": void 0
                  },
                  "tLEpsRpVS-hover": {
                    "data-framer-name": void 0
                  },
                  "ZmCP_eD3_-hover": {
                    "data-framer-name": void 0
                  },
                  bHEcOt3us: {
                    "data-framer-name": "tiny"
                  },
                  bMRQAPM8x: {
                    "data-framer-name": "Just Icon"
                  },
                  br7LBM8iN: {
                    "data-framer-name": "huge"
                  },
                  coXNANDm3: {
                    "data-framer-name": "small-gradient"
                  },
                  FbG4z2omJ: {
                    "data-framer-name": "tiny stroke"
                  },
                  llZeWFj0E: {
                    "data-framer-name": "Small"
                  },
                  tLEpsRpVS: {
                    "data-framer-name": "Dark"
                  }
                }, baseVariant, gestureVariant),
                children: [isDisplayed() && <HoKrrnQcM_default animated className="framer-1lw4bu5" layoutDependency={layoutDependency} layoutId="cfewrxkWn" style={{
                  "--1335ju": 1.5,
                  "--18mrqx2": "var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248))",
                  "--3it368": 1
                }} />, isDisplayed1() && <RichText __fromCanvasComponent className="framer-1nfv7fv" data-framer-name="Join the waitlist" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="hoHhg6wtS" style={{
                  "--extracted-r6o4lv": "var(--variable-reference-P7ZHYgc9n-yZBQGZIRL)",
                  "--framer-paragraph-spacing": "0px",
                  "--variable-reference-P7ZHYgc9n-yZBQGZIRL": P7ZHYgc9n,
                  opacity: 1
                }} text={TiAMtDaz3} variants={{
                  "bHEcOt3us-hover": {
                    opacity: 1
                  },
                  "br7LBM8iN-hover": {
                    opacity: 1
                  },
                  "coXNANDm3-hover": {
                    opacity: 1
                  },
                  "llZeWFj0E-hover": {
                    opacity: 0
                  },
                  "tLEpsRpVS-hover": {
                    opacity: 0
                  },
                  bHEcOt3us: {
                    "--extracted-r6o4lv": "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))"
                  },
                  br7LBM8iN: {
                    "--extracted-a0htzi": "var(--variable-reference-P7ZHYgc9n-yZBQGZIRL)"
                  },
                  coXNANDm3: {
                    "--extracted-r6o4lv": "var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248))"
                  },
                  tLEpsRpVS: {
                    "--extracted-r6o4lv": "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))"
                  }
                }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides({
                  "bHEcOt3us-hover": {
                    transformTemplate: transformTemplate1
                  },
                  "br7LBM8iN-hover": {
                    transformTemplate: transformTemplate1
                  },
                  "coXNANDm3-hover": {
                    transformTemplate: transformTemplate1
                  },
                  "llZeWFj0E-hover": {
                    transformTemplate: transformTemplate1
                  },
                  "tLEpsRpVS-hover": {
                    transformTemplate: transformTemplate1
                  },
                  "ZmCP_eD3_-hover": {
                    transformTemplate: transformTemplate1
                  },
                  bHEcOt3us: {
                    children: <React2.Fragment>{_jsx2(motion2.p, {
                        className: "framer-styles-preset-mnimbo",
                        "data-styles-preset": "QkI8Aa5rN",
                        style: {
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))"
                        },
                        children: "Join the waitlist"
                      })}</React2.Fragment>
                  },
                  br7LBM8iN: {
                    children: <React2.Fragment>{_jsx2(motion2.h3, {
                        style: {
                          "--font-selector": "Q1VTVE9NVjI7SGFmZmVyIFJlZ3VsYXI=",
                          "--framer-font-family": '"Haffer Regular", sans-serif',
                          "--framer-font-size": "40px",
                          "--framer-font-weight": "430",
                          "--framer-line-height": "100%",
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-a0htzi, var(--variable-reference-P7ZHYgc9n-yZBQGZIRL))"
                        },
                        children: "Login"
                      })}</React2.Fragment>,
                    fonts: ["CUSTOMV2;Haffer Regular"]
                  },
                  coXNANDm3: {
                    children: <React2.Fragment>{_jsx2(motion2.p, {
                        className: "framer-styles-preset-mnimbo",
                        "data-styles-preset": "QkI8Aa5rN",
                        style: {
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)))"
                        },
                        children: "Login"
                      })}</React2.Fragment>
                  },
                  FbG4z2omJ: {
                    children: <React2.Fragment>{_jsx2(motion2.p, {
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                          "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                          "--framer-font-size": "11px",
                          "--framer-line-height": "120%",
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-P7ZHYgc9n-yZBQGZIRL))",
                          "--framer-text-transform": "uppercase"
                        },
                        children: "Login"
                      })}</React2.Fragment>,
                    fonts: ["CUSTOM;Haffer Regular"]
                  },
                  llZeWFj0E: {
                    children: <React2.Fragment>{_jsx2(motion2.p, {
                        className: "framer-styles-preset-mnimbo",
                        "data-styles-preset": "QkI8Aa5rN",
                        style: {
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-P7ZHYgc9n-yZBQGZIRL))"
                        },
                        children: "Join the waitlist"
                      })}</React2.Fragment>
                  },
                  tLEpsRpVS: {
                    children: <React2.Fragment>{_jsx2(motion2.p, {
                        className: "framer-styles-preset-mnimbo",
                        "data-styles-preset": "QkI8Aa5rN",
                        style: {
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))"
                        },
                        children: "Join the waitlist"
                      })}</React2.Fragment>
                  }
                }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsx2(motion2.p, {
                      className: "framer-styles-preset-1ydx3rt",
                      "data-styles-preset": "YlBLAavU6",
                      style: {
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-P7ZHYgc9n-yZBQGZIRL))"
                      },
                      children: "Join the waitlist"
                    })}</React2.Fragment>}</RichText>, <RichText __fromCanvasComponent className="framer-129t4kk" data-framer-name="Join the waitlist" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="KLzc6sfs7" style={{
                  "--extracted-r6o4lv": "var(--variable-reference-P7ZHYgc9n-yZBQGZIRL)",
                  "--framer-paragraph-spacing": "0px",
                  "--variable-reference-P7ZHYgc9n-yZBQGZIRL": P7ZHYgc9n,
                  opacity: 1
                }} text={TiAMtDaz3} transformTemplate={transformTemplate1} variants={{
                  "bHEcOt3us-hover": {
                    opacity: 1
                  },
                  "coXNANDm3-hover": {
                    "--extracted-r6o4lv": "var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248))",
                    opacity: 1
                  },
                  "llZeWFj0E-hover": {
                    opacity: 1
                  },
                  "tLEpsRpVS-hover": {
                    opacity: 1
                  },
                  "ZmCP_eD3_-hover": {
                    opacity: 1
                  },
                  bHEcOt3us: {
                    "--extracted-r6o4lv": "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))",
                    opacity: 0
                  },
                  bMRQAPM8x: {
                    "--extracted-r6o4lv": "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))",
                    opacity: 0
                  },
                  br7LBM8iN: {
                    "--extracted-a0htzi": "var(--variable-reference-P7ZHYgc9n-yZBQGZIRL)",
                    opacity: 1
                  },
                  coXNANDm3: {
                    opacity: 0
                  },
                  FbG4z2omJ: {
                    "--extracted-r6o4lv": "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))",
                    opacity: 0
                  },
                  llZeWFj0E: {
                    opacity: 0
                  },
                  tLEpsRpVS: {
                    "--extracted-r6o4lv": "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))",
                    opacity: 0
                  }
                }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides({
                  "bHEcOt3us-hover": {
                    transformTemplate: void 0
                  },
                  "br7LBM8iN-hover": {
                    children: <React2.Fragment>{_jsx2(motion2.h3, {
                        style: {
                          "--font-selector": "Q1VTVE9NVjI7SGFmZmVyIFJlZ3VsYXI=",
                          "--framer-font-family": '"Haffer Regular", sans-serif',
                          "--framer-font-size": "40px",
                          "--framer-font-weight": "430",
                          "--framer-line-height": "100%",
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-a0htzi, var(--variable-reference-P7ZHYgc9n-yZBQGZIRL))"
                        },
                        children: "Login"
                      })}</React2.Fragment>,
                    fonts: ["CUSTOMV2;Haffer Regular"],
                    transformTemplate: void 0
                  },
                  "coXNANDm3-hover": {
                    children: <React2.Fragment>{_jsx2(motion2.p, {
                        className: "framer-styles-preset-mnimbo",
                        "data-styles-preset": "QkI8Aa5rN",
                        style: {
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)))"
                        },
                        children: "Login"
                      })}</React2.Fragment>,
                    transformTemplate: void 0
                  },
                  "llZeWFj0E-hover": {
                    transformTemplate: void 0
                  },
                  "tLEpsRpVS-hover": {
                    transformTemplate: void 0
                  },
                  "ZmCP_eD3_-hover": {
                    transformTemplate: void 0
                  },
                  bHEcOt3us: {
                    children: <React2.Fragment>{_jsx2(motion2.p, {
                        className: "framer-styles-preset-mnimbo",
                        "data-styles-preset": "QkI8Aa5rN",
                        style: {
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))"
                        },
                        children: "Join the waitlist"
                      })}</React2.Fragment>
                  },
                  bMRQAPM8x: {
                    children: <React2.Fragment>{_jsx2(motion2.p, {
                        className: "framer-styles-preset-mnimbo",
                        "data-styles-preset": "QkI8Aa5rN",
                        style: {
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))"
                        },
                        children: "Join the waitlist"
                      })}</React2.Fragment>
                  },
                  br7LBM8iN: {
                    children: <React2.Fragment>{_jsx2(motion2.h3, {
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                          "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                          "--framer-font-size": "40px",
                          "--framer-line-height": "100%",
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-a0htzi, var(--variable-reference-P7ZHYgc9n-yZBQGZIRL))"
                        },
                        children: "Login"
                      })}</React2.Fragment>,
                    fonts: ["CUSTOM;Haffer Bold"]
                  },
                  coXNANDm3: {
                    children: <React2.Fragment>{_jsx2(motion2.p, {
                        className: "framer-styles-preset-mnimbo",
                        "data-styles-preset": "QkI8Aa5rN",
                        style: {
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-P7ZHYgc9n-yZBQGZIRL))"
                        },
                        children: "Join the waitlist"
                      })}</React2.Fragment>
                  },
                  FbG4z2omJ: {
                    children: <React2.Fragment>{_jsx2(motion2.p, {
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                          "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                          "--framer-font-size": "11px",
                          "--framer-line-height": "120%",
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))",
                          "--framer-text-transform": "uppercase"
                        },
                        children: "Login"
                      })}</React2.Fragment>,
                    fonts: ["CUSTOM;Haffer Regular"]
                  },
                  llZeWFj0E: {
                    children: <React2.Fragment>{_jsx2(motion2.p, {
                        className: "framer-styles-preset-mnimbo",
                        "data-styles-preset": "QkI8Aa5rN",
                        style: {
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-P7ZHYgc9n-yZBQGZIRL))"
                        },
                        children: "Join the waitlist"
                      })}</React2.Fragment>
                  },
                  tLEpsRpVS: {
                    children: <React2.Fragment>{_jsx2(motion2.p, {
                        className: "framer-styles-preset-mnimbo",
                        "data-styles-preset": "QkI8Aa5rN",
                        style: {
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))"
                        },
                        children: "Join the waitlist"
                      })}</React2.Fragment>
                  }
                }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsx2(motion2.p, {
                      className: "framer-styles-preset-1ydx3rt",
                      "data-styles-preset": "YlBLAavU6",
                      style: {
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-P7ZHYgc9n-yZBQGZIRL))"
                      },
                      children: "Join the waitlist"
                    })}</React2.Fragment>}</RichText>]
              })}</Link>}</Transition>}</Variants>}</LayoutGroup>;
    });
    css4 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-BsBK3.framer-3bbyhf, .framer-BsBK3 .framer-3bbyhf { display: block; }", ".framer-BsBK3.framer-16c10ng { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 12px 16px 12px 16px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-BsBK3 .framer-1lw4bu5 { flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }", ".framer-BsBK3 .framer-1nfv7fv { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-BsBK3 .framer-129t4kk { bottom: -23px; flex: none; height: auto; left: 50%; position: absolute; white-space: pre; width: auto; z-index: 1; }", ".framer-BsBK3.framer-v-1f8bjye.framer-16c10ng, .framer-BsBK3.framer-v-6stzd3.framer-16c10ng { padding: 12px; }", ".framer-BsBK3.framer-v-26utbf.framer-16c10ng, .framer-BsBK3.framer-v-nbkuw9.framer-16c10ng { padding: 4px 8px 4px 8px; }", ".framer-BsBK3.framer-v-mfbo2h.framer-16c10ng { padding: 24px 32px 24px 32px; }", ".framer-BsBK3.framer-v-mfbo2h .framer-129t4kk { bottom: -42px; }", ".framer-BsBK3.framer-v-19s4zot.framer-16c10ng { width: 48px; }", ".framer-BsBK3.framer-v-16c10ng.hover .framer-1nfv7fv { left: 50%; order: 1; position: absolute; top: -24px; z-index: 1; }", ".framer-BsBK3.framer-v-16c10ng.hover .framer-129t4kk { bottom: unset; left: unset; order: 2; position: relative; }", ".framer-BsBK3.framer-v-1f8bjye.hover .framer-1nfv7fv, .framer-BsBK3.framer-v-6stzd3.hover .framer-1nfv7fv { left: 50%; position: absolute; top: -24px; z-index: 1; }", ".framer-BsBK3.framer-v-1f8bjye.hover .framer-129t4kk, .framer-BsBK3.framer-v-j08lig.hover .framer-129t4kk, .framer-BsBK3.framer-v-26utbf.hover .framer-129t4kk, .framer-BsBK3.framer-v-6stzd3.hover .framer-129t4kk, .framer-BsBK3.framer-v-mfbo2h.hover .framer-129t4kk { bottom: unset; left: unset; position: relative; }", ".framer-BsBK3.framer-v-j08lig.hover.framer-16c10ng { padding: 11px 16px 12px 16px; }", ".framer-BsBK3.framer-v-j08lig.hover .framer-1nfv7fv { left: 50%; position: absolute; top: -17px; z-index: 1; }", ".framer-BsBK3.framer-v-26utbf.hover .framer-1nfv7fv { left: 50%; position: absolute; top: -22px; z-index: 1; }", ".framer-BsBK3.framer-v-mfbo2h.hover .framer-1nfv7fv { left: 50%; position: absolute; top: -45px; z-index: 1; }", ...css3, ...css2, '.framer-BsBK3[data-border="true"]::after, .framer-BsBK3 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }'];
    FrameryZBQGZIRL = withCSS2(Component2, css4, "framer-BsBK3");
    yZBQGZIRL_default = FrameryZBQGZIRL;
    FrameryZBQGZIRL.displayName = "Button";
    FrameryZBQGZIRL.defaultProps = {
      height: 45.5,
      width: 85
    };
    addPropertyControls2(FrameryZBQGZIRL, {
      variant: {
        options: ["ZmCP_eD3_", "llZeWFj0E", "tLEpsRpVS", "bHEcOt3us", "FbG4z2omJ", "coXNANDm3", "br7LBM8iN", "bMRQAPM8x"],
        optionTitles: ["Big", "Small", "Dark", "tiny", "tiny stroke", "small-gradient", "huge", "Just Icon"],
        title: "Variant",
        type: ControlType2.Enum
      },
      qzxtK1_9Y: {
        title: "Link",
        type: ControlType2.Link
      },
      TiAMtDaz3: {
        defaultValue: "Login",
        displayTextArea: false,
        title: "Title",
        type: ControlType2.String
      },
      RQDpSij6V: {
        defaultValue: 'var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(255, 59, 50))',
        title: "Background",
        type: ControlType2.Color
      },
      P7ZHYgc9n: {
        defaultValue: 'var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))',
        title: "Title Color",
        type: ControlType2.Color
      },
      du4PAlRaB: {
        title: "Click",
        type: ControlType2.EventHandler
      },
      wN3STPwMb: {
        defaultValue: {
          borderColor: 'var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))',
          borderStyle: "solid",
          borderWidth: 0
        },
        title: "Border",
        type: ControlType2.Border
      },
      KhVtTQLb4: {
        defaultValue: "4px",
        title: "Radius",
        type: ControlType2.BorderRadius
      }
    });
    addFonts(FrameryZBQGZIRL, [{
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
        cssFamilyName: "Haffer Regular",
        source: "custom",
        style: "normal",
        uiFamilyName: "Haffer",
        url: "https://framerusercontent.com/assets/tAGQcvN09kwW2QjPLqLO197UqBQ.woff",
        weight: "430"
      }, {
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
      }]
    }, ...ArrowRightFonts, ...getFontsFromSharedStyle(fonts2), ...getFontsFromSharedStyle(fonts)], {
      supportsExplicitInterCodegen: true
    });
    __FramerMetadata__ = {
      "exports": {
        "default": {
          "type": "reactComponent",
          "name": "FrameryZBQGZIRL",
          "slots": [],
          "annotations": {
            "framerIntrinsicWidth": "85",
            "framerDisplayContentsDiv": "false",
            "framerVariables": '{"qzxtK1_9Y":"link","TiAMtDaz3":"title","RQDpSij6V":"background","P7ZHYgc9n":"titleColor","du4PAlRaB":"click","wN3STPwMb":"border","KhVtTQLb4":"radius"}',
            "framerComponentViewportWidth": "true",
            "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["auto","auto"]},"llZeWFj0E":{"layout":["auto","auto"]},"tLEpsRpVS":{"layout":["auto","auto"]},"bHEcOt3us":{"layout":["auto","auto"]},"FbG4z2omJ":{"layout":["auto","auto"]},"coXNANDm3":{"layout":["auto","auto"]},"br7LBM8iN":{"layout":["auto","auto"]},"bMRQAPM8x":{"layout":["fixed","auto"]},"CcrgbSZoF":{"layout":["auto","auto"]},"yyrSt0KbD":{"layout":["auto","auto"]},"NkVCzEeH4":{"layout":["auto","auto"]},"m60SfQlhZ":{"layout":["auto","auto"]},"XYwyABw2B":{"layout":["auto","auto"]},"R4xpg2Uga":{"layout":["auto","auto"]}}}',
            "framerIntrinsicHeight": "45.5",
            "framerImmutableVariables": "true",
            "framerAutoSizeImages": "true",
            "framerContractVersion": "1",
            "framerColorSyntax": "true"
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
  }
});

// http-url:https://framerusercontent.com/modules/fLO7cQfzzutEFzybDV5O/OB55Pmajr1NjU6sMaGtv/ZzbMsXH1T.js
import { jsx as _jsx6, jsxs as _jsxs5, Fragment as _Fragment } from "react/jsx-runtime";
import { addFonts as addFonts5, addPropertyControls as addPropertyControls6, ComponentViewportProvider, ControlType as ControlType6, cx as cx6, getFonts as getFonts2, getFontsFromSharedStyle as getFontsFromSharedStyle5, PathVariablesContext, ResolveLinks, RichText as RichText5, useActiveVariantCallback as useActiveVariantCallback4, useComponentViewport as useComponentViewport5, useLoadMorePaginatedQuery, useLocaleInfo as useLocaleInfo5, useQueryData, useRouter, useVariantState as useVariantState5, withCSS as withCSS6 } from "@proofly-framer/runtime";
import { LayoutGroup as LayoutGroup5, motion as motion6, MotionConfigContext as MotionConfigContext5 } from "@proofly-framer/runtime";
import * as React6 from "react";

// http-url:https://framerusercontent.com/modules/qhQiGAWFbghejOHA2qLN/3QLUwpxB0HNMpUBsu19D/Xd1J0o8me.js
import { addPropertyControls as e5, ControlType as t4, lazy as l3, QueryEngine as a3 } from "@proofly-framer/runtime";

// http-url:https://framerusercontent.com/modules/qhQiGAWFbghejOHA2qLN/3QLUwpxB0HNMpUBsu19D/Xd1J0o8me-0.js
import { ControlType as y } from "@proofly-framer/runtime";
import { ControlType as P } from "@proofly-framer/runtime";
var t;
var e = Object.create;
var r = Object.defineProperty;
var n = Object.getOwnPropertyDescriptor;
var i = Object.getOwnPropertyNames;
var s = Object.getPrototypeOf;
var a = Object.prototype.hasOwnProperty;
var o = (t5, e6, n4) => e6 in t5 ? r(t5, e6, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: n4
}) : t5[e6] = n4;
var u = (t5, e6) => function () {
  return e6 || (0, t5[i(t5)[0]])((e6 = {
    exports: {}
  }).exports, e6), e6.exports;
};
var l = (t5, e6, s4, o3) => {
  if (e6 && "object" == typeof e6 || "function" == typeof e6) for (let u4 of i(e6)) a.call(t5, u4) || u4 === s4 || r(t5, u4, {
    get: () => e6[u4],
    enumerable: !(o3 = n(e6, u4)) || o3.enumerable
  });
  return t5;
};
var h = (t5, n4, i4) => (i4 = null != t5 ? e(s(t5)) : {}, l(
// If the importer is in node compatibility mode or this is not an ESM
// file that has been converted to a CommonJS file using a Babel-
// compatible transform (i.e. "__esModule" has not been set), then set
// "default" to the CommonJS "module.exports" for node compatibility.
!n4 && t5 && t5.__esModule ? i4 : r(i4, "default", {
  value: t5,
  enumerable: true
}), t5));
var c = (t5, e6, r3) => o(t5, "symbol" != typeof e6 ? e6 + "" : e6, r3);
var f = u({
  "../../../node_modules/dataloader/index.js"(t5, e6) {
    var r3,
      n4 = function () {
        function t6(t7, e8) {
          if ("function" != typeof t7) throw TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: " + t7 + ".");
          this._batchLoadFn = t7, this._maxBatchSize = function (t8) {
            if (!(!t8 || false !== t8.batch)) return 1;
            var e9 = t8 && t8.maxBatchSize;
            if (void 0 === e9) return 1 / 0;
            if ("number" != typeof e9 || e9 < 1) throw TypeError("maxBatchSize must be a positive number: " + e9);
            return e9;
          }(e8), this._batchScheduleFn = function (t8) {
            var e9 = t8 && t8.batchScheduleFn;
            if (void 0 === e9) return i4;
            if ("function" != typeof e9) throw TypeError("batchScheduleFn must be a function: " + e9);
            return e9;
          }(e8), this._cacheKeyFn = function (t8) {
            var e9 = t8 && t8.cacheKeyFn;
            if (void 0 === e9) return function (t9) {
              return t9;
            };
            if ("function" != typeof e9) throw TypeError("cacheKeyFn must be a function: " + e9);
            return e9;
          }(e8), this._cacheMap = function (t8) {
            if (!(!t8 || false !== t8.cache)) return null;
            var e9 = t8 && t8.cacheMap;
            if (void 0 === e9) return new Map();
            if (null !== e9) {
              var r4 = ["get", "set", "delete", "clear"].filter(function (t9) {
                return e9 && "function" != typeof e9[t9];
              });
              if (0 !== r4.length) throw TypeError("Custom cacheMap missing methods: " + r4.join(", "));
            }
            return e9;
          }(e8), this._batch = null, this.name = e8 && e8.name ? e8.name : null;
        }
        var e7 = t6.prototype;
        return e7.load = function (t7) {
          if (null == t7) throw TypeError("The loader.load() function must be called with a value, but got: " + String(t7) + ".");
          var e8 = function (t8) {
              var e9 = t8._batch;
              if (null !== e9 && !e9.hasDispatched && e9.keys.length < t8._maxBatchSize) return e9;
              var r5 = {
                hasDispatched: false,
                keys: [],
                callbacks: []
              };
              return t8._batch = r5, t8._batchScheduleFn(function () {
                (function (t9, e10) {
                  var r6;
                  if (e10.hasDispatched = true, 0 === e10.keys.length) {
                    a4(e10);
                    return;
                  }
                  try {
                    r6 = t9._batchLoadFn(e10.keys);
                  } catch (r7) {
                    return s4(t9, e10, TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: " + String(r7) + "."));
                  }
                  if (!r6 || "function" != typeof r6.then) return s4(t9, e10, TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: " + String(r6) + "."));
                  r6.then(function (t10) {
                    if (!o3(t10)) throw TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: " + String(t10) + ".");
                    if (t10.length !== e10.keys.length) throw TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.\n\nKeys:\n" + String(e10.keys) + "\n\nValues:\n" + String(t10));
                    a4(e10);
                    for (var r7 = 0; r7 < e10.callbacks.length; r7++) {
                      var n6 = t10[r7];
                      n6 instanceof Error ? e10.callbacks[r7].reject(n6) : e10.callbacks[r7].resolve(n6);
                    }
                  }).catch(function (r7) {
                    s4(t9, e10, r7);
                  });
                })(t8, r5);
              }), r5;
            }(this),
            r4 = this._cacheMap,
            n5 = this._cacheKeyFn(t7);
          if (r4) {
            var i5 = r4.get(n5);
            if (i5) {
              var u4 = e8.cacheHits || (e8.cacheHits = []);
              return new Promise(function (t8) {
                u4.push(function () {
                  t8(i5);
                });
              });
            }
          }
          e8.keys.push(t7);
          var l4 = new Promise(function (t8, r5) {
            e8.callbacks.push({
              resolve: t8,
              reject: r5
            });
          });
          return r4 && r4.set(n5, l4), l4;
        }, e7.loadMany = function (t7) {
          if (!o3(t7)) throw TypeError("The loader.loadMany() function must be called with Array<key> but got: " + t7 + ".");
          for (var e8 = [], r4 = 0; r4 < t7.length; r4++) e8.push(this.load(t7[r4]).catch(function (t8) {
            return t8;
          }));
          return Promise.all(e8);
        }, e7.clear = function (t7) {
          var e8 = this._cacheMap;
          if (e8) {
            var r4 = this._cacheKeyFn(t7);
            e8.delete(r4);
          }
          return this;
        }, e7.clearAll = function () {
          var t7 = this._cacheMap;
          return t7 && t7.clear(), this;
        }, e7.prime = function (t7, e8) {
          var r4 = this._cacheMap;
          if (r4) {
            var n5,
              i5 = this._cacheKeyFn(t7);
            void 0 === r4.get(i5) && (e8 instanceof Error ? (n5 = Promise.reject(e8)).catch(function () {}) : n5 = Promise.resolve(e8), r4.set(i5, n5));
          }
          return this;
        }, t6;
      }(),
      i4 = "object" == typeof process && "function" == typeof process.nextTick ? function (t6) {
        r3 || (r3 = Promise.resolve()), r3.then(function () {
          process.nextTick(t6);
        });
      } : "function" == typeof setImmediate ? function (t6) {
        setImmediate(t6);
      } : function (t6) {
        setTimeout(t6);
      };
    function s4(t6, e7, r4) {
      a4(e7);
      for (var n5 = 0; n5 < e7.keys.length; n5++) t6.clear(e7.keys[n5]), e7.callbacks[n5].reject(r4);
    }
    function a4(t6) {
      if (t6.cacheHits) for (var e7 = 0; e7 < t6.cacheHits.length; e7++) t6.cacheHits[e7]();
    }
    function o3(t6) {
      return "object" == typeof t6 && null !== t6 && "number" == typeof t6.length && (0 === t6.length || t6.length > 0 && Object.prototype.hasOwnProperty.call(t6, t6.length - 1));
    }
    e6.exports = n4;
  }
});
var d = h(f(), 1);
var g = {
  Uint8: 1,
  Uint16: 2,
  Uint32: 4,
  BigUint64: 8,
  Int8: 1,
  Int16: 2,
  Int32: 4,
  BigInt64: 8,
  Float32: 4,
  Float64: 8
};
var p = class {
  getOffset() {
    return this.offset;
  }
  ensureLength(t5) {
    let e6 = this.bytes.length;
    if (!(this.offset + t5 <= e6)) throw Error("Reading out of bounds");
  }
  readUint8() {
    let t5 = g.Uint8;
    this.ensureLength(t5);
    let e6 = this.view.getUint8(this.offset);
    return this.offset += t5, e6;
  }
  readUint16() {
    let t5 = g.Uint16;
    this.ensureLength(t5);
    let e6 = this.view.getUint16(this.offset);
    return this.offset += t5, e6;
  }
  readUint32() {
    let t5 = g.Uint32;
    this.ensureLength(t5);
    let e6 = this.view.getUint32(this.offset);
    return this.offset += t5, e6;
  }
  readUint64() {
    let t5 = this.readBigUint64();
    return Number(t5);
  }
  readBigUint64() {
    let t5 = g.BigUint64;
    this.ensureLength(t5);
    let e6 = this.view.getBigUint64(this.offset);
    return this.offset += t5, e6;
  }
  readInt8() {
    let t5 = g.Int8;
    this.ensureLength(t5);
    let e6 = this.view.getInt8(this.offset);
    return this.offset += t5, e6;
  }
  readInt16() {
    let t5 = g.Int16;
    this.ensureLength(t5);
    let e6 = this.view.getInt16(this.offset);
    return this.offset += t5, e6;
  }
  readInt32() {
    let t5 = g.Int32;
    this.ensureLength(t5);
    let e6 = this.view.getInt32(this.offset);
    return this.offset += t5, e6;
  }
  readInt64() {
    let t5 = this.readBigInt64();
    return Number(t5);
  }
  readBigInt64() {
    let t5 = g.BigInt64;
    this.ensureLength(t5);
    let e6 = this.view.getBigInt64(this.offset);
    return this.offset += t5, e6;
  }
  readFloat32() {
    let t5 = g.Float32;
    this.ensureLength(t5);
    let e6 = this.view.getFloat32(this.offset);
    return this.offset += t5, e6;
  }
  readFloat64() {
    let t5 = g.Float64;
    this.ensureLength(t5);
    let e6 = this.view.getFloat64(this.offset);
    return this.offset += t5, e6;
  }
  readBytes(t5) {
    let e6 = this.offset,
      r3 = e6 + t5,
      n4 = this.bytes.subarray(e6, r3);
    return this.offset = r3, n4;
  }
  readString() {
    let t5 = this.readUint32(),
      e6 = this.readBytes(t5);
    return this.decoder.decode(e6);
  }
  readJson() {
    let t5 = this.readString();
    return JSON.parse(t5);
  }
  constructor(t5) {
    this.bytes = t5, c(this, "offset", 0), c(this, "view"), c(this, "decoder", new TextDecoder()), this.view = v(this.bytes);
  }
};
function v(t5) {
  return new DataView(t5.buffer, t5.byteOffset, t5.byteLength);
}
var m = "undefined" != typeof (typeof window !== "undefined" ? window : undefined);
var w = m && "function" == typeof (typeof window !== "undefined" ? window : undefined).requestIdleCallback;
function I(t5, ...e6) {
  if (!t5) throw Error("Assertion Error" + (e6.length > 0 ? ": " + e6.join(" ") : ""));
}
function b(t5) {
  throw Error(`Unexpected value: ${t5}`);
}
var U = 1024;
var S = 1.5;
var k = t5 => 2 ** t5 - 1;
var L = t5 => -(2 ** (t5 - 1));
var B = t5 => 2 ** (t5 - 1) - 1;
var E = {
  Uint8: 0,
  Uint16: 0,
  Uint32: 0,
  Uint64: 0,
  BigUint64: 0,
  Int8: L(8),
  Int16: L(16),
  Int32: L(32),
  Int64: Number.MIN_SAFE_INTEGER,
  BigInt64: -(BigInt(2) ** BigInt(63))
};
var M = {
  Uint8: k(8),
  Uint16: k(16),
  Uint32: k(32),
  Uint64: Number.MAX_SAFE_INTEGER,
  BigUint64: BigInt(2) ** BigInt(64) - BigInt(1),
  Int8: B(8),
  Int16: B(16),
  Int32: B(32),
  Int64: Number.MAX_SAFE_INTEGER,
  BigInt64: BigInt(2) ** BigInt(63) - BigInt(1)
};
function T(t5, e6, r3, n4) {
  I(t5 >= e6, t5, "outside lower bound for", n4), I(t5 <= r3, t5, "outside upper bound for", n4);
}
var F = class {
  getOffset() {
    return this.offset;
  }
  slice(t5 = 0, e6 = this.offset) {
    return this.bytes.slice(t5, e6);
  }
  subarray(t5 = 0, e6 = this.offset) {
    return this.bytes.subarray(t5, e6);
  }
  ensureLength(t5) {
    let e6 = this.bytes.length;
    if (this.offset + t5 <= e6) return;
    let r3 = new Uint8Array(Math.ceil(e6 * S) + t5);
    r3.set(this.bytes), this.bytes = r3, this.view = v(r3);
  }
  writeUint8(t5) {
    T(t5, E.Uint8, M.Uint8, "Uint8");
    let e6 = g.Uint8;
    this.ensureLength(e6), this.view.setUint8(this.offset, t5), this.offset += e6;
  }
  writeUint16(t5) {
    T(t5, E.Uint16, M.Uint16, "Uint16");
    let e6 = g.Uint16;
    this.ensureLength(e6), this.view.setUint16(this.offset, t5), this.offset += e6;
  }
  writeUint32(t5) {
    T(t5, E.Uint32, M.Uint32, "Uint32");
    let e6 = g.Uint32;
    this.ensureLength(e6), this.view.setUint32(this.offset, t5), this.offset += e6;
  }
  writeUint64(t5) {
    T(t5, E.Uint64, M.Uint64, "Uint64");
    let e6 = BigInt(t5);
    this.writeBigUint64(e6);
  }
  writeBigUint64(t5) {
    T(t5, E.BigUint64, M.BigUint64, "BigUint64");
    let e6 = g.BigUint64;
    this.ensureLength(e6), this.view.setBigUint64(this.offset, t5), this.offset += e6;
  }
  writeInt8(t5) {
    T(t5, E.Int8, M.Int8, "Int8");
    let e6 = g.Int8;
    this.ensureLength(e6), this.view.setInt8(this.offset, t5), this.offset += e6;
  }
  writeInt16(t5) {
    T(t5, E.Int16, M.Int16, "Int16");
    let e6 = g.Int16;
    this.ensureLength(e6), this.view.setInt16(this.offset, t5), this.offset += e6;
  }
  writeInt32(t5) {
    T(t5, E.Int32, M.Int32, "Int32");
    let e6 = g.Int32;
    this.ensureLength(e6), this.view.setInt32(this.offset, t5), this.offset += e6;
  }
  writeInt64(t5) {
    T(t5, E.Int64, M.Int64, "Int64");
    let e6 = BigInt(t5);
    this.writeBigInt64(e6);
  }
  writeBigInt64(t5) {
    T(t5, E.BigInt64, M.BigInt64, "BigInt64");
    let e6 = g.BigInt64;
    this.ensureLength(e6), this.view.setBigInt64(this.offset, t5), this.offset += e6;
  }
  writeFloat32(t5) {
    let e6 = g.Float32;
    this.ensureLength(e6), this.view.setFloat32(this.offset, t5), this.offset += e6;
  }
  writeFloat64(t5) {
    let e6 = g.Float64;
    this.ensureLength(e6), this.view.setFloat64(this.offset, t5), this.offset += e6;
  }
  writeBytes(t5) {
    let e6 = t5.length;
    this.ensureLength(e6), this.bytes.set(t5, this.offset), this.offset += e6;
  }
  encodeString(t5) {
    let e6 = this.encodedStrings.get(t5);
    if (e6) return e6;
    let r3 = this.encoder.encode(t5);
    return this.encodedStrings.set(t5, r3), r3;
  }
  writeString(t5) {
    let e6 = this.encodeString(t5),
      r3 = e6.length;
    this.writeUint32(r3), this.writeBytes(e6);
  }
  writeJson(t5) {
    let e6 = JSON.stringify(t5);
    this.writeString(e6);
  }
  constructor() {
    c(this, "offset", 0), c(this, "bytes", new Uint8Array(U)), c(this, "view", v(this.bytes)), c(this, "encoder", new TextEncoder()), c(this, "encodedStrings", new Map());
  }
};
function x(t5) {
  return "string" == typeof t5;
}
function N(t5) {
  return Number.isFinite(t5);
}
function A(t5) {
  return null === t5;
}
var O = class t2 {
  static fromString(e6) {
    let [r3, n4, i4] = e6.split("/").map(Number);
    return I(N(r3), "Invalid chunkId"), I(N(n4), "Invalid offset"), I(N(i4), "Invalid length"), new t2(r3, n4, i4);
  }
  toString() {
    return `${this.chunkId}/${this.offset}/${this.length}`;
  }
  static read(e6) {
    let r3 = e6.readUint16(),
      n4 = e6.readUint32(),
      i4 = e6.readUint32();
    return new t2(r3, n4, i4);
  }
  write(t5) {
    t5.writeUint16(this.chunkId), t5.writeUint32(this.offset), t5.writeUint32(this.length);
  }
  compare(t5) {
    return this.chunkId < t5.chunkId ? -1 : this.chunkId > t5.chunkId ? 1 : this.offset < t5.offset ? -1 : this.offset > t5.offset ? 1 : (I(this.length === t5.length), 0);
  }
  constructor(t5, e6, r3) {
    this.chunkId = t5, this.offset = e6, this.length = r3;
  }
};
function R(t5) {
  if (A(t5)) return 0;
  switch (t5.type) {
    case P.Array:
      return 1;
    case P.Boolean:
      return 2;
    case P.Color:
      return 3;
    case P.Date:
      return 4;
    case P.Enum:
      return 5;
    case P.File:
      return 6;
    case P.ResponsiveImage:
      return 10;
    case P.Link:
      return 7;
    case P.Number:
      return 8;
    case P.Object:
      return 9;
    case P.RichText:
      return 11;
    case P.String:
      return 12;
    case P.VectorSetItem:
      return 13;
    default:
      b(t5);
  }
}
function q(e6) {
  let r3 = e6.readUint16(),
    n4 = [];
  for (let i4 = 0; i4 < r3; i4++) {
    let r4 = t.read(e6);
    n4.push(r4);
  }
  return {
    type: P.Array,
    value: n4
  };
}
function _(e6, r3) {
  for (let n4 of (e6.writeUint16(r3.value.length), r3.value)) t.write(e6, n4);
}
function D(e6, r3, n4) {
  let i4 = e6.value.length,
    s4 = r3.value.length;
  if (i4 < s4) return -1;
  if (i4 > s4) return 1;
  for (let s5 = 0; s5 < i4; s5++) {
    let i5 = e6.value[s5],
      a4 = r3.value[s5],
      o3 = t.compare(i5, a4, n4);
    if (0 !== o3) return o3;
  }
  return 0;
}
function j(t5) {
  return {
    type: P.Boolean,
    value: 0 !== t5.readUint8()
  };
}
function C(t5, e6) {
  t5.writeUint8(e6.value ? 1 : 0);
}
function J(t5, e6) {
  return t5.value < e6.value ? -1 : t5.value > e6.value ? 1 : 0;
}
function V(t5) {
  return {
    type: P.Color,
    value: t5.readString()
  };
}
function W(t5, e6) {
  t5.writeString(e6.value);
}
function $(t5, e6) {
  return t5.value < e6.value ? -1 : t5.value > e6.value ? 1 : 0;
}
function z(t5) {
  let e6 = t5.readInt64(),
    r3 = new Date(e6);
  return {
    type: P.Date,
    value: r3.toISOString()
  };
}
function G(t5, e6) {
  let r3 = new Date(e6.value),
    n4 = r3.getTime();
  t5.writeInt64(n4);
}
function K(t5, e6) {
  let r3 = new Date(t5.value),
    n4 = new Date(e6.value);
  return r3 < n4 ? -1 : r3 > n4 ? 1 : 0;
}
function H(t5) {
  return {
    type: P.Enum,
    value: t5.readString()
  };
}
function X(t5, e6) {
  t5.writeString(e6.value);
}
function Q(t5, e6) {
  return t5.value < e6.value ? -1 : t5.value > e6.value ? 1 : 0;
}
function Y(t5) {
  return {
    type: P.File,
    value: t5.readString()
  };
}
function Z(t5, e6) {
  t5.writeString(e6.value);
}
function tt(t5, e6) {
  return t5.value < e6.value ? -1 : t5.value > e6.value ? 1 : 0;
}
function te(t5) {
  return {
    type: P.Link,
    value: t5.readJson()
  };
}
function tr(t5, e6) {
  t5.writeJson(e6.value);
}
function tn(t5, e6) {
  let r3 = JSON.stringify(t5.value),
    n4 = JSON.stringify(e6.value);
  return r3 < n4 ? -1 : r3 > n4 ? 1 : 0;
}
function ti(t5) {
  return {
    type: P.Number,
    value: t5.readFloat64()
  };
}
function ts(t5, e6) {
  t5.writeFloat64(e6.value);
}
function ta(t5, e6) {
  return t5.value < e6.value ? -1 : t5.value > e6.value ? 1 : 0;
}
function to(e6) {
  let r3 = e6.readUint16(),
    n4 = {};
  for (let i4 = 0; i4 < r3; i4++) {
    let r4 = e6.readString();
    n4[r4] = t.read(e6);
  }
  return {
    type: P.Object,
    value: n4
  };
}
function tu(e6, r3) {
  let n4 = Object.entries(r3.value);
  for (let [r4, i4] of (e6.writeUint16(n4.length), n4)) e6.writeString(r4), t.write(e6, i4);
}
function tl(e6, r3, n4) {
  let i4 = Object.keys(e6.value).sort(),
    s4 = Object.keys(r3.value).sort();
  if (i4.length < s4.length) return -1;
  if (i4.length > s4.length) return 1;
  for (let a4 = 0; a4 < i4.length; a4++) {
    let o3 = i4[a4],
      u4 = s4[a4];
    if (o3 < u4) return -1;
    if (o3 > u4) return 1;
    let l4 = e6.value[o3] ?? null,
      h3 = r3.value[u4] ?? null,
      c4 = t.compare(l4, h3, n4);
    if (0 !== c4) return c4;
  }
  return 0;
}
function th(t5) {
  return {
    type: P.ResponsiveImage,
    value: t5.readJson()
  };
}
function tc(t5, e6) {
  t5.writeJson(e6.value);
}
function tf(t5, e6) {
  let r3 = JSON.stringify(t5.value),
    n4 = JSON.stringify(e6.value);
  return r3 < n4 ? -1 : r3 > n4 ? 1 : 0;
}
function td(t5) {
  let e6 = t5.readInt8();
  if (0 === e6) return {
    type: P.RichText,
    value: t5.readUint32()
  };
  if (1 === e6) return {
    type: P.RichText,
    value: t5.readString()
  };
  throw Error("Invalid rich text pointer");
}
function tg(t5, e6) {
  if (N(e6.value)) {
    t5.writeInt8(0), t5.writeUint32(e6.value);
    return;
  }
  if (x(e6.value)) {
    t5.writeInt8(1), t5.writeString(e6.value);
    return;
  }
  throw Error("Invalid rich text pointer");
}
function tp(t5, e6) {
  let r3 = t5.value,
    n4 = e6.value;
  if (N(r3) && N(n4) || x(r3) && x(n4)) return r3 < n4 ? -1 : r3 > n4 ? 1 : 0;
  throw Error("Invalid rich text pointer");
}
function tv(t5) {
  return {
    type: P.String,
    value: t5.readString()
  };
}
function ty(t5, e6) {
  t5.writeString(e6.value);
}
function tm(t5, e6, r3) {
  let n4 = t5.value,
    i4 = e6.value;
  return (0 === r3.type && (n4 = t5.value.toLowerCase(), i4 = e6.value.toLowerCase()), n4 < i4) ? -1 : n4 > i4 ? 1 : 0;
}
function tw(t5) {
  return {
    type: P.VectorSetItem,
    value: t5.readUint32()
  };
}
function tI(t5, e6) {
  t5.writeUint32(e6.value);
}
function tb(t5, e6) {
  let r3 = t5.value,
    n4 = e6.value;
  return r3 < n4 ? -1 : r3 > n4 ? 1 : 0;
}
(t5 => {
  t5.read = function (t6) {
    let e6 = t6.readUint8();
    switch (e6) {
      case 0:
        return null;
      case 1:
        return q(t6);
      case 2:
        return j(t6);
      case 3:
        return V(t6);
      case 4:
        return z(t6);
      case 5:
        return H(t6);
      case 6:
        return Y(t6);
      case 7:
        return te(t6);
      case 8:
        return ti(t6);
      case 9:
        return to(t6);
      case 10:
        return th(t6);
      case 11:
        return td(t6);
      case 12:
        return tv(t6);
      case 13:
        return tw(t6);
      default:
        b(e6);
    }
  }, t5.write = function (t6, e6) {
    let r3 = R(e6);
    if (t6.writeUint8(r3), !A(e6)) switch (e6.type) {
      case P.Array:
        return _(t6, e6);
      case P.Boolean:
        return C(t6, e6);
      case P.Color:
        return W(t6, e6);
      case P.Date:
        return G(t6, e6);
      case P.Enum:
        return X(t6, e6);
      case P.File:
        return Z(t6, e6);
      case P.Link:
        return tr(t6, e6);
      case P.Number:
        return ts(t6, e6);
      case P.Object:
        return tu(t6, e6);
      case P.ResponsiveImage:
        return tc(t6, e6);
      case P.RichText:
        return tg(t6, e6);
      case P.VectorSetItem:
        return tI(t6, e6);
      case P.String:
        return ty(t6, e6);
      default:
        b(e6);
    }
  }, t5.compare = function (t6, e6, r3) {
    let n4 = R(t6),
      i4 = R(e6);
    if (n4 < i4) return -1;
    if (n4 > i4) return 1;
    if (A(t6) || A(e6)) return 0;
    switch (t6.type) {
      case P.Array:
        return I(e6.type === P.Array), D(t6, e6, r3);
      case P.Boolean:
        return I(e6.type === P.Boolean), J(t6, e6);
      case P.Color:
        return I(e6.type === P.Color), $(t6, e6);
      case P.Date:
        return I(e6.type === P.Date), K(t6, e6);
      case P.Enum:
        return I(e6.type === P.Enum), Q(t6, e6);
      case P.File:
        return I(e6.type === P.File), tt(t6, e6);
      case P.Link:
        return I(e6.type === P.Link), tn(t6, e6);
      case P.Number:
        return I(e6.type === P.Number), ta(t6, e6);
      case P.Object:
        return I(e6.type === P.Object), tl(t6, e6, r3);
      case P.ResponsiveImage:
        return I(e6.type === P.ResponsiveImage), tf(t6, e6);
      case P.RichText:
        return I(e6.type === P.RichText), tp(t6, e6);
      case P.VectorSetItem:
        return I(e6.type === P.VectorSetItem), tb(t6, e6);
      case P.String:
        return I(e6.type === P.String), tm(t6, e6, r3);
      default:
        b(t6);
    }
  };
})(t || (t = {}));
var tU = class e2 {
  sortEntries() {
    this.entries.sort((e6, r3) => {
      for (let n4 = 0; n4 < this.fieldNames.length; n4++) {
        let i4 = e6.values[n4],
          s4 = r3.values[n4],
          a4 = t.compare(i4, s4, this.options.collation);
        if (0 !== a4) return a4;
      }
      return e6.pointer.compare(r3.pointer);
    });
  }
  static deserialize(r3) {
    let n4 = new p(r3),
      i4 = n4.readJson(),
      s4 = n4.readUint8(),
      a4 = [];
    for (let t5 = 0; t5 < s4; t5++) {
      let t6 = n4.readString();
      a4.push(t6);
    }
    let o3 = new e2(a4, {
        collation: i4
      }),
      u4 = n4.readUint32();
    for (let e6 = 0; e6 < u4; e6++) {
      let e7 = [];
      for (let r5 = 0; r5 < s4; r5++) {
        let r6 = t.read(n4);
        e7.push(r6);
      }
      let r4 = O.read(n4);
      o3.entries.push({
        values: e7,
        pointer: r4
      });
    }
    return o3;
  }
  serialize() {
    let e6 = new F();
    for (let t5 of (e6.writeJson(this.options.collation), e6.writeUint8(this.fieldNames.length), this.fieldNames)) e6.writeString(t5);
    for (let r3 of (this.sortEntries(), e6.writeUint32(this.entries.length), this.entries)) {
      let {
        values: n4,
        pointer: i4
      } = r3;
      for (let r4 of n4) t.write(e6, r4);
      i4.write(e6);
    }
    return e6.subarray();
  }
  addItem(t5, e6) {
    let r3 = this.fieldNames.map(e7 => t5.getField(e7) ?? null);
    this.entries.push({
      values: r3,
      pointer: e6
    });
  }
  constructor(t5, e6) {
    this.fieldNames = t5, this.options = e6, c(this, "entries", []);
  }
};
var tS = 3;
var tk = 250;
var tL = [408,
// Request Timeout
429,
// Too Many Requests
500,
// Internal Server Error
502,
// Bad Gateway
503,
// Service Unavailable
504];
var tB = async (t5, e6) => {
  let r3 = 0;
  for (;;) {
    try {
      let n4 = await fetch(t5, e6);
      if (!tL.includes(n4.status) || ++r3 > tS) return n4;
    } catch (t6) {
      if (e6?.signal?.aborted || ++r3 > tS) throw t6;
    }
    await tE(r3);
  }
};
async function tE(t5) {
  let e6 = Math.floor(tk * (Math.random() + 1) * 2 ** (t5 - 1));
  await new Promise(t6 => {
    setTimeout(t6, e6);
  });
}
async function tM(t5, e6) {
  let r3 = tx(e6),
    n4 = [],
    i4 = 0;
  for (let t6 of r3) n4.push(`${t6.from}-${t6.to - 1}`), i4 += t6.to - t6.from;
  let s4 = new URL(t5),
    a4 = n4.join(",");
  s4.searchParams.set("range", a4);
  let o3 = await tB(s4);
  if (200 !== o3.status) throw Error(`Request failed: ${o3.status} ${o3.statusText}`);
  let u4 = await o3.arrayBuffer(),
    l4 = new Uint8Array(u4);
  if (l4.length !== i4) throw Error("Request failed: Unexpected response length");
  let h3 = new tT(),
    c4 = 0;
  for (let t6 of r3) {
    let e7 = t6.to - t6.from,
      r4 = c4 + e7,
      n5 = l4.subarray(c4, r4);
    h3.write(t6.from, n5), c4 = r4;
  }
  return e6.map(t6 => h3.read(t6.from, t6.to - t6.from));
}
var tT = class {
  read(t5, e6) {
    for (let r3 of this.chunks) {
      if (t5 < r3.start) break;
      if (t5 > r3.end) continue;
      if (t5 + e6 > r3.end) break;
      let n4 = t5 - r3.start,
        i4 = n4 + e6;
      return r3.data.slice(n4, i4);
    }
    throw Error("Missing data");
  }
  write(t5, e6) {
    let r3 = t5,
      n4 = r3 + e6.length,
      i4 = 0,
      s4 = this.chunks.length;
    for (; i4 < s4; i4++) {
      let t6 = this.chunks[i4];
      if (I(t6, "Missing chunk"), !(r3 > t6.end)) {
        if (r3 > t6.start) {
          let n5 = r3 - t6.start,
            i5 = t6.data.subarray(0, n5);
          e6 = tF(i5, e6), r3 = t6.start;
        }
        break;
      }
    }
    for (; s4 > i4; s4--) {
      let t6 = this.chunks[s4 - 1];
      if (I(t6, "Missing chunk"), !(n4 < t6.start)) {
        if (n4 < t6.end) {
          let r4 = n4 - t6.start,
            i5 = t6.data.subarray(r4);
          e6 = tF(e6, i5), n4 = t6.end;
        }
        break;
      }
    }
    let a4 = {
        start: r3,
        end: n4,
        data: e6
      },
      o3 = s4 - i4;
    this.chunks.splice(i4, o3, a4);
  }
  constructor() {
    c(this, "chunks", []);
  }
};
function tF(t5, e6) {
  let r3 = t5.length + e6.length,
    n4 = new Uint8Array(r3);
  return n4.set(t5, 0), n4.set(e6, t5.length), n4;
}
function tx(t5) {
  I(t5.length > 0, "Must have at least one range");
  let e6 = [...t5].sort((t6, e7) => t6.from - e7.from),
    r3 = [];
  for (let t6 of e6) {
    let e7 = r3.length - 1,
      n4 = r3[e7];
    n4 && t6.from <= n4.to ? r3[e7] = {
      from: n4.from,
      to: Math.max(n4.to, t6.to)
    } : r3.push(t6);
  }
  return r3;
}
var tN = class {
  async loadModel() {
    let [t5] = await tM(this.options.url, [this.options.range]);
    return I(t5, "Failed to load model"), tU.deserialize(t5);
  }
  async getModel() {
    return this.modelPromise ?? (this.modelPromise = this.loadModel()), this.model ?? (this.model = await this.modelPromise), this.model;
  }
  async lookupItems(t5) {
    I(t5.length === this.fields.length, "Invalid query length");
    let e6 = await this.getModel(),
      r3 = t5.reduce((t6, e7, r4) => t6.flatMap(t7 => {
        switch (e7.type) {
          case "All":
            return [t7];
          case "Equals":
            return this.queryEquals(t7, e7, r4);
          case "NotEquals":
            return this.queryNotEquals(t7, e7, r4);
          case "LessThan":
            return this.queryLessThan(t7, e7, r4);
          case "GreaterThan":
            return this.queryGreaterThan(t7, e7, r4);
          case "Contains":
            return this.queryContains(t7, e7, r4);
          case "StartsWith":
            return this.queryStartsWith(t7, e7, r4);
          case "EndsWith":
            return this.queryEndsWith(t7, e7, r4);
          default:
            b(e7);
        }
      }), [e6.entries]),
      n4 = [];
    for (let t6 of r3) for (let e7 of t6) {
      let t7 = {};
      for (let r4 = 0; r4 < this.options.fieldNames.length; r4++) {
        let n5 = this.options.fieldNames[r4],
          i4 = e7.values[r4];
        t7[n5] = i4;
      }
      n4.push({
        pointer: e7.pointer.toString(),
        data: t7
      });
    }
    return n4;
  }
  queryEquals(t5, e6, r3) {
    let n4 = this.getLeftMost(t5, r3, e6.value),
      i4 = this.getRightMost(t5, r3, e6.value),
      s4 = t5.slice(n4, i4 + 1);
    return s4.length > 0 ? [s4] : [];
  }
  queryNotEquals(t5, e6, r3) {
    let n4 = this.getLeftMost(t5, r3, e6.value),
      i4 = this.getRightMost(t5, r3, e6.value),
      s4 = [],
      a4 = t5.slice(0, n4);
    a4.length > 0 && s4.push(a4);
    let o3 = t5.slice(i4 + 1);
    return o3.length > 0 && s4.push(o3), s4;
  }
  queryLessThan(t5, e6, r3) {
    let n4 = this.getRightMost(t5, r3, null);
    if (t5 = t5.slice(n4 + 1), e6.inclusive) {
      let n5 = this.getRightMost(t5, r3, e6.value),
        i5 = t5.slice(0, n5 + 1);
      return i5.length > 0 ? [i5] : [];
    }
    let i4 = this.getLeftMost(t5, r3, e6.value),
      s4 = t5.slice(0, i4);
    return s4.length > 0 ? [s4] : [];
  }
  queryGreaterThan(t5, e6, r3) {
    let n4 = this.getRightMost(t5, r3, null);
    if (t5 = t5.slice(n4 + 1), e6.inclusive) {
      let n5 = this.getLeftMost(t5, r3, e6.value),
        i5 = t5.slice(n5);
      return i5.length > 0 ? [i5] : [];
    }
    let i4 = this.getRightMost(t5, r3, e6.value),
      s4 = t5.slice(i4 + 1);
    return s4.length > 0 ? [s4] : [];
  }
  queryContains(t5, e6, r3) {
    return this.findItems(t5, r3, t6 => {
      if (t6?.type !== y.String || e6.value?.type !== y.String) return false;
      let r4 = t6.value,
        n4 = e6.value.value;
      return 0 === this.collation.type && (r4 = r4.toLowerCase(), n4 = n4.toLowerCase()), r4.includes(n4);
    });
  }
  queryStartsWith(t5, e6, r3) {
    return this.findItems(t5, r3, t6 => {
      if (t6?.type !== y.String || e6.value?.type !== y.String) return false;
      let r4 = t6.value,
        n4 = e6.value.value;
      return 0 === this.collation.type && (r4 = r4.toLowerCase(), n4 = n4.toLowerCase()), r4.startsWith(n4);
    });
  }
  queryEndsWith(t5, e6, r3) {
    return this.findItems(t5, r3, t6 => {
      if (t6?.type !== y.String || e6.value?.type !== y.String) return false;
      let r4 = t6.value,
        n4 = e6.value.value;
      return 0 === this.collation.type && (r4 = r4.toLowerCase(), n4 = n4.toLowerCase()), r4.endsWith(n4);
    });
  }
  /**
  * Returns the index of the left most entry that is equal to the target.
  *
  * ```text
  *   Left most
  *       ↓
  * ┌───┬───┬───┬───┬───┬───┐
  * │ 1 │ 2 │ 2 │ 2 │ 2 │ 3 │
  * └───┴───┴───┴───┴───┴───┘
  * ```
  *
  * @param entries The entries array to search in.
  * @param position The position of the value in the entry.
  * @param target The target value to search for.
  * @returns The index of the left most entry that is equal to the target.
  */
  getLeftMost(e6, r3, n4) {
    let i4 = 0,
      s4 = e6.length;
    for (; i4 < s4;) {
      let a4 = i4 + s4 >> 1,
        o3 = e6[a4],
        u4 = o3.values[r3];
      0 > t.compare(u4, n4, this.collation) ? i4 = a4 + 1 : s4 = a4;
    }
    return i4;
  }
  /**
  * Returns the index of the right most entry that is equal to the target.
  *
  * ```text
  *              Right most
  *                   ↓
  * ┌───┬───┬───┬───┬───┬───┐
  * │ 1 │ 2 │ 2 │ 2 │ 2 │ 3 │
  * └───┴───┴───┴───┴───┴───┘
  * ```
  *
  * @param entries The entries array to search in.
  * @param position The position of the value in the entry.
  * @param target The target value to search for.
  * @returns The index of the right most entry that is equal to the target.
  */
  getRightMost(e6, r3, n4) {
    let i4 = 0,
      s4 = e6.length;
    for (; i4 < s4;) {
      let a4 = i4 + s4 >> 1,
        o3 = e6[a4],
        u4 = o3.values[r3];
      t.compare(u4, n4, this.collation) > 0 ? s4 = a4 : i4 = a4 + 1;
    }
    return s4 - 1;
  }
  /**
  * Finds all items that are matching the predicate and groups adjacent items together.
  *
  * @param entries The entries array to search in.
  * @param position The position of the value in the entry.
  * @param predicate The predicate to match the values against.
  * @returns An array of chunks that match the predicate.
  */
  findItems(t5, e6, r3) {
    let n4 = [],
      i4 = 0;
    for (let s4 = 0; s4 < t5.length; s4++) {
      let a4 = t5[s4],
        o3 = a4.values[e6],
        u4 = r3(o3);
      if (!u4) {
        if (i4 < s4) {
          let e7 = t5.slice(i4, s4);
          n4.push(e7);
        }
        i4 = s4 + 1;
      }
    }
    if (i4 < t5.length) {
      let e7 = t5.slice(i4);
      n4.push(e7);
    }
    return n4;
  }
  constructor(t5) {
    this.options = t5, c(this, "schema"), c(this, "fields"), c(this, "supportedLookupTypes", ["All", "Equals", "NotEquals", "LessThan", "GreaterThan", "Contains", "StartsWith", "EndsWith"
    /* EndsWith */]), c(this, "modelPromise"), c(this, "model"), c(this, "collation");
    let e6 = {},
      r3 = [];
    for (let t6 of this.options.fieldNames) {
      let n4 = this.options.collectionSchema[t6];
      I(n4, "Missing definition for field", t6), e6[t6] = n4, r3.push({
        type: "Identifier",
        name: t6
      });
    }
    this.schema = e6, this.fields = r3, this.collation = this.options.collation;
  }
};
var tA = class e3 {
  static read(r3) {
    let n4 = new e3(),
      i4 = r3.readUint16();
    for (let e6 = 0; e6 < i4; e6++) {
      let e7 = r3.readString(),
        i5 = t.read(r3);
      n4.setField(e7, i5);
    }
    return n4;
  }
  write(e6) {
    for (let [r3, n4] of (e6.writeUint16(this.fields.size), this.fields)) e6.writeString(r3), t.write(e6, n4);
  }
  getData() {
    let t5 = {};
    for (let [e6, r3] of this.fields) t5[e6] = r3;
    return t5;
  }
  setField(t5, e6) {
    this.fields.set(t5, e6);
  }
  getField(t5) {
    return this.fields.get(t5);
  }
  constructor() {
    c(this, "fields", new Map());
  }
};
var tO = class {
  scanItems() {
    return this.itemsPromise ?? (this.itemsPromise = tB(this.url).then(async t5 => {
      if (!t5.ok) throw Error(`Request failed: ${t5.status} ${t5.statusText}`);
      let e6 = await t5.arrayBuffer(),
        r3 = new Uint8Array(e6),
        n4 = new p(r3),
        i4 = [],
        s4 = n4.readUint32();
      for (let t6 = 0; t6 < s4; t6++) {
        let t7 = n4.getOffset(),
          e7 = tA.read(n4),
          r4 = n4.getOffset() - t7,
          s5 = new O(this.id, t7, r4),
          a4 = s5.toString(),
          o3 = {
            pointer: a4,
            data: e7.getData()
          };
        this.itemLoader.prime(a4, o3), i4.push(o3);
      }
      return i4;
    })), this.itemsPromise;
  }
  resolveItem(t5) {
    return this.itemLoader.load(t5);
  }
  constructor(t5, e6) {
    this.id = t5, this.url = e6, c(this, "itemsPromise"), c(this, "itemLoader", new d.default(async t6 => {
      let e7 = t6.map(t7 => {
          let e8 = O.fromString(t7);
          return {
            from: e8.offset,
            to: e8.offset + e8.length
          };
        }),
        r3 = await tM(this.url, e7);
      return r3.map((e8, r4) => {
        let n4 = new p(e8),
          i4 = tA.read(n4),
          s4 = t6[r4];
        return I(s4, "Missing pointer"), {
          pointer: s4,
          data: i4.getData()
        };
      });
    }, {
      maxBatchSize: 250
    }));
  }
};
var tP = class {
  async scanItems() {
    let t5 = await Promise.all(this.chunks.map(async t6 => t6.scanItems()));
    return t5.flat();
  }
  resolveItems(t5) {
    return Promise.all(t5.map(t6 => {
      let e6 = O.fromString(t6),
        r3 = this.chunks[e6.chunkId];
      return I(r3, "Missing chunk"), r3.resolveItem(t6);
    }));
  }
  compareItems(t5, e6) {
    let r3 = O.fromString(t5.pointer),
      n4 = O.fromString(e6.pointer);
    return r3.compare(n4);
  }
  compareValues(e6, r3, n4) {
    return t.compare(e6, r3, n4);
  }
  constructor(t5) {
    this.options = t5, c(this, "id"), c(this, "schema"), c(this, "indexes"), c(this, "resolveRichText"), c(this, "resolveVectorSetItem"), c(this, "chunks"), this.chunks = this.options.chunks.map((t6, e6) => new tO(e6, t6)), this.schema = t5.schema, this.indexes = t5.indexes, this.resolveRichText = t5.resolveRichText, this.resolveVectorSetItem = t5.resolveVectorSetItem, this.id = t5.id;
  }
};

// http-url:https://framerusercontent.com/modules/qhQiGAWFbghejOHA2qLN/3QLUwpxB0HNMpUBsu19D/Xd1J0o8me-1.js
import { jsx as e4 } from "react/jsx-runtime";
import { AutoBreakpointVariant as t3, ComponentPresetsConsumer as r2, Link as n2, motion as o2 } from "@proofly-framer/runtime";
import { isValidElement as i2 } from "react";
import { Fragment as p2, createElement as s2 } from "react";
var a2;
var l2 = "undefined" != typeof (typeof window !== "undefined" ? window : undefined);
var f2 = l2 && "function" == typeof (typeof window !== "undefined" ? window : undefined).requestIdleCallback;
var u2 = "preload";
function c2(e6) {
  return "object" == typeof e6 && null !== e6 && !i2(e6) && u2 in e6;
}
function m2(e6, ...t5) {
  if (!e6) throw Error("Assertion Error" + (t5.length > 0 ? ": " + t5.join(" ") : ""));
}
var d2 = ((a2 = d2 || {})[a2.Fragment = 1] = "Fragment", a2[a2.Link = 2] = "Link", a2[a2.Module = 3] = "Module", a2[a2.Tag = 4] = "Tag", a2[a2.Text = 5] = "Text", a2);
function g2(i4) {
  let a4 = new Map();
  return l4 => {
    let f4 = a4.get(l4);
    if (f4) return f4;
    let u4 = JSON.parse(l4),
      d4 = function a5(l5) {
        switch (l5[0]) {
          case 1:
            {
              let [, ...e6] = l5,
                t5 = e6.map(a5);
              return s2(p2, void 0, ...t5);
            }
          case 2:
            {
              let [, e6, ...t5] = l5,
                r3 = t5.map(a5);
              return s2(n2, e6, ...r3);
            }
          case 3:
            {
              let [, n4, o3, f5, u5] = l5;
              for (let e6 of f5) {
                let t5 = o3[e6];
                t5 && (o3[e6] = a5(t5));
              }
              for (let e6 of u5) {
                let t5 = o3[e6];
                if ("string" != typeof t5) continue;
                let r3 = i4[t5];
                r3 && (c2(r3) && r3.preload(), o3[e6] = r3);
              }
              let p4 = i4[n4];
              return m2(p4, "Module not found"), c2(p4) && p4.preload(), e4(r2, {
                componentIdentifier: n4,
                children: r3 => e4(t3, {
                  component: p4,
                  props: {
                    ...r3,
                    ...o3
                  }
                })
              });
            }
          case 4:
            {
              let [, e6, t5, ...r3] = l5,
                n4 = r3.map(a5);
              if ("a" === e6) return s2(o2.a, t5, ...n4);
              return s2(e6, t5, ...n4);
            }
          case 5:
            {
              let [, e6] = l5;
              return e6;
            }
        }
      }(u4);
    return a4.set(l4, d4), d4;
  };
}

// http-url:https://framerusercontent.com/modules/qhQiGAWFbghejOHA2qLN/3QLUwpxB0HNMpUBsu19D/Xd1J0o8me.js
var i3 = l3(() => Promise.resolve().then(() => (init_yZBQGZIRL(), yZBQGZIRL_exports)));
var n3 = {
  CKesnHXR4: {
    isNullable: true,
    type: t4.String
  },
  createdAt: {
    isNullable: true,
    type: t4.Date
  },
  id: {
    isNullable: false,
    type: t4.String
  },
  IInnB9Z9V: {
    isNullable: true,
    type: t4.ResponsiveImage
  },
  Jt0UQ1sQX: {
    isNullable: true,
    type: t4.String
  },
  LyABwAfNO: {
    isNullable: true,
    type: t4.ResponsiveImage
  },
  Md0mC9r2H: {
    isNullable: true,
    type: t4.String
  },
  nextItemId: {
    isNullable: true,
    type: t4.String
  },
  previousItemId: {
    isNullable: true,
    type: t4.String
  },
  rtqoiDzCB: {
    isNullable: true,
    type: t4.Date
  },
  RyNA95by4: {
    isNullable: true,
    type: t4.String
  },
  u8MqXPj6w: {
    isNullable: true,
    type: t4.RichText
  },
  updatedAt: {
    isNullable: true,
    type: t4.Date
  },
  XF106V4xQ: {
    isNullable: true,
    type: t4.String
  }
};
var c3 = ["id"];
var d3 = {
  type: 1
};
var u3 = ["previousItemId"];
var s3 = ["nextItemId"];
var f3 = ["id", "RyNA95by4"];
var p3 = ["RyNA95by4", "id"];
var y2 = ["Md0mC9r2H"];
var g3 = {
  type: 0
};
var h2 = ["Jt0UQ1sQX"];
var w2 = ["RyNA95by4"];
var N2 = ["rtqoiDzCB"];
var R2 = ["IInnB9Z9V"];
var I2 = ["XF106V4xQ"];
var S2 = ["CKesnHXR4"];
var X2 = ["LyABwAfNO"];
var x2 = ["u8MqXPj6w"];
var L2 = [];
var b2 = e6 => {
  let t5 = L2[e6];
  if (t5) return t5().then(e7 => e7.default);
};
var J2 = {
  "local-module:canvasComponent/yZBQGZIRL:default": i3
};
var A2 = g2(J2);
var U2 = new a3();
var C2 = {
  collectionByLocaleId: {
    default: new tP({
      chunks: [new URL("./Xd1J0o8me-chunk-default-0.framercms", "https://framerusercontent.com/modules/qhQiGAWFbghejOHA2qLN/3QLUwpxB0HNMpUBsu19D/Xd1J0o8me.js").href.replace("/modules/", "/cms/")],
      id: "42808368-92fc-4ea7-8401-f5f580f21cfbdefault",
      indexes: [new tN({
        collation: d3,
        collectionSchema: n3,
        fieldNames: c3,
        range: {
          from: 0,
          to: 505
        },
        url: new URL("./Xd1J0o8me-indexes-default-0.framercms", "https://framerusercontent.com/modules/qhQiGAWFbghejOHA2qLN/3QLUwpxB0HNMpUBsu19D/Xd1J0o8me.js").href.replace("/modules/", "/cms/")
      }), new tN({
        collation: d3,
        collectionSchema: n3,
        fieldNames: u3,
        range: {
          from: 505,
          to: 1009
        },
        url: new URL("./Xd1J0o8me-indexes-default-0.framercms", "https://framerusercontent.com/modules/qhQiGAWFbghejOHA2qLN/3QLUwpxB0HNMpUBsu19D/Xd1J0o8me.js").href.replace("/modules/", "/cms/")
      }), new tN({
        collation: d3,
        collectionSchema: n3,
        fieldNames: s3,
        range: {
          from: 1009,
          to: 1509
        },
        url: new URL("./Xd1J0o8me-indexes-default-0.framercms", "https://framerusercontent.com/modules/qhQiGAWFbghejOHA2qLN/3QLUwpxB0HNMpUBsu19D/Xd1J0o8me.js").href.replace("/modules/", "/cms/")
      }), new tN({
        collation: d3,
        collectionSchema: n3,
        fieldNames: f3,
        range: {
          from: 1509,
          to: 3172
        },
        url: new URL("./Xd1J0o8me-indexes-default-0.framercms", "https://framerusercontent.com/modules/qhQiGAWFbghejOHA2qLN/3QLUwpxB0HNMpUBsu19D/Xd1J0o8me.js").href.replace("/modules/", "/cms/")
      }), new tN({
        collation: d3,
        collectionSchema: n3,
        fieldNames: p3,
        range: {
          from: 3172,
          to: 4835
        },
        url: new URL("./Xd1J0o8me-indexes-default-0.framercms", "https://framerusercontent.com/modules/qhQiGAWFbghejOHA2qLN/3QLUwpxB0HNMpUBsu19D/Xd1J0o8me.js").href.replace("/modules/", "/cms/")
      }), new tN({
        collation: g3,
        collectionSchema: n3,
        fieldNames: y2,
        range: {
          from: 4835,
          to: 6430
        },
        url: new URL("./Xd1J0o8me-indexes-default-0.framercms", "https://framerusercontent.com/modules/qhQiGAWFbghejOHA2qLN/3QLUwpxB0HNMpUBsu19D/Xd1J0o8me.js").href.replace("/modules/", "/cms/")
      }), new tN({
        collation: g3,
        collectionSchema: n3,
        fieldNames: h2,
        range: {
          from: 6430,
          to: 8579
        },
        url: new URL("./Xd1J0o8me-indexes-default-0.framercms", "https://framerusercontent.com/modules/qhQiGAWFbghejOHA2qLN/3QLUwpxB0HNMpUBsu19D/Xd1J0o8me.js").href.replace("/modules/", "/cms/")
      }), new tN({
        collation: g3,
        collectionSchema: n3,
        fieldNames: w2,
        range: {
          from: 8579,
          to: 9956
        },
        url: new URL("./Xd1J0o8me-indexes-default-0.framercms", "https://framerusercontent.com/modules/qhQiGAWFbghejOHA2qLN/3QLUwpxB0HNMpUBsu19D/Xd1J0o8me.js").href.replace("/modules/", "/cms/")
      }), new tN({
        collation: g3,
        collectionSchema: n3,
        fieldNames: N2,
        range: {
          from: 9956,
          to: 10368
        },
        url: new URL("./Xd1J0o8me-indexes-default-0.framercms", "https://framerusercontent.com/modules/qhQiGAWFbghejOHA2qLN/3QLUwpxB0HNMpUBsu19D/Xd1J0o8me.js").href.replace("/modules/", "/cms/")
      }), new tN({
        collation: g3,
        collectionSchema: n3,
        fieldNames: R2,
        range: {
          from: 10368,
          to: 20714
        },
        url: new URL("./Xd1J0o8me-indexes-default-0.framercms", "https://framerusercontent.com/modules/qhQiGAWFbghejOHA2qLN/3QLUwpxB0HNMpUBsu19D/Xd1J0o8me.js").href.replace("/modules/", "/cms/")
      }), new tN({
        collation: g3,
        collectionSchema: n3,
        fieldNames: I2,
        range: {
          from: 20714,
          to: 21164
        },
        url: new URL("./Xd1J0o8me-indexes-default-0.framercms", "https://framerusercontent.com/modules/qhQiGAWFbghejOHA2qLN/3QLUwpxB0HNMpUBsu19D/Xd1J0o8me.js").href.replace("/modules/", "/cms/")
      }), new tN({
        collation: g3,
        collectionSchema: n3,
        fieldNames: S2,
        range: {
          from: 21164,
          to: 21824
        },
        url: new URL("./Xd1J0o8me-indexes-default-0.framercms", "https://framerusercontent.com/modules/qhQiGAWFbghejOHA2qLN/3QLUwpxB0HNMpUBsu19D/Xd1J0o8me.js").href.replace("/modules/", "/cms/")
      }), new tN({
        collation: g3,
        collectionSchema: n3,
        fieldNames: X2,
        range: {
          from: 21824,
          to: 30344
        },
        url: new URL("./Xd1J0o8me-indexes-default-0.framercms", "https://framerusercontent.com/modules/qhQiGAWFbghejOHA2qLN/3QLUwpxB0HNMpUBsu19D/Xd1J0o8me.js").href.replace("/modules/", "/cms/")
      }), new tN({
        collation: g3,
        collectionSchema: n3,
        fieldNames: x2,
        range: {
          from: 30344,
          to: 82647
        },
        url: new URL("./Xd1J0o8me-indexes-default-0.framercms", "https://framerusercontent.com/modules/qhQiGAWFbghejOHA2qLN/3QLUwpxB0HNMpUBsu19D/Xd1J0o8me.js").href.replace("/modules/", "/cms/")
      })],
      resolveRichText: A2,
      resolveVectorSetItem: b2,
      schema: n3
    })
  },
  displayName: "Blog",
  id: "42808368-92fc-4ea7-8401-f5f580f21cfb"
};
var Xd1J0o8me_default = C2;
e5(C2, {
  Md0mC9r2H: {
    defaultValue: "",
    title: "Title",
    type: t4.String
  },
  Jt0UQ1sQX: {
    defaultValue: "",
    title: "Short description",
    type: t4.String
  },
  RyNA95by4: {
    preventLocalization: true,
    title: "Slug",
    type: t4.String
  },
  rtqoiDzCB: {
    defaultValue: "",
    title: "Date",
    type: t4.Date
  },
  IInnB9Z9V: {
    title: "Image",
    type: t4.ResponsiveImage
  },
  XF106V4xQ: {
    defaultValue: "",
    title: "Category",
    type: t4.String
  },
  CKesnHXR4: {
    defaultValue: "",
    title: "Author",
    type: t4.String
  },
  LyABwAfNO: {
    title: "Author Image",
    type: t4.ResponsiveImage
  },
  u8MqXPj6w: {
    defaultValue: "",
    title: "Content",
    type: t4.RichText
  },
  createdAt: {
    title: "Created",
    type: t4.Date
  },
  updatedAt: {
    title: "Updated",
    type: t4.Date
  },
  previousItemId: {
    dataIdentifier: "local-module:collection/Xd1J0o8me:default",
    title: "Previous",
    type: t4.CollectionReference
  },
  nextItemId: {
    dataIdentifier: "local-module:collection/Xd1J0o8me:default",
    title: "Next",
    type: t4.CollectionReference
  }
});

// http-url:https://framerusercontent.com/modules/8IGKvfivqDrd8lwX8E2I/0TROeGiEJvIIoYVZIYCc/UrNHzCTiy.js
import { fontStore as fontStore3 } from "@proofly-framer/runtime";
fontStore3.loadFonts(["CUSTOM;Haffer Bold"]);
var fonts3 = [{
  explicitInter: true,
  fonts: [{
    family: "Haffer Bold",
    source: "custom",
    url: "https://framerusercontent.com/assets/eRqmC6W9PktN8mUcnwel9B6wmPs.woff"
  }]
}];
var css5 = ['.framer-ohnmF .framer-styles-preset-19ujo0x:not(.rich-text-wrapper), .framer-ohnmF .framer-styles-preset-19ujo0x.rich-text-wrapper h3 { --framer-font-family: "Haffer Bold", "Haffer Bold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 40px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 100%; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }', '@media (max-width: 1535px) and (min-width: 1280px) { .framer-ohnmF .framer-styles-preset-19ujo0x:not(.rich-text-wrapper), .framer-ohnmF .framer-styles-preset-19ujo0x.rich-text-wrapper h3 { --framer-font-family: "Haffer Bold", "Haffer Bold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 40px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 100%; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }', '@media (max-width: 1279px) and (min-width: 768px) { .framer-ohnmF .framer-styles-preset-19ujo0x:not(.rich-text-wrapper), .framer-ohnmF .framer-styles-preset-19ujo0x.rich-text-wrapper h3 { --framer-font-family: "Haffer Bold", "Haffer Bold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 36px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 100%; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }', '@media (max-width: 767px) and (min-width: 0px) { .framer-ohnmF .framer-styles-preset-19ujo0x:not(.rich-text-wrapper), .framer-ohnmF .framer-styles-preset-19ujo0x.rich-text-wrapper h3 { --framer-font-family: "Haffer Bold", "Haffer Bold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 100%; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }'];
var className3 = "framer-ohnmF";

// http-url:https://framerusercontent.com/modules/aPoI9NsE1LJfAcYGN4yK/8Lr63VGrsbhlEFc1jK3S/ggQm2GY_4.js
import { jsx as _jsx3, jsxs as _jsxs2 } from "react/jsx-runtime";
import { addFonts as addFonts2, addPropertyControls as addPropertyControls3, ControlType as ControlType3, cx as cx3, getFontsFromSharedStyle as getFontsFromSharedStyle2, Image, Link as Link2, RichText as RichText2, useComponentViewport as useComponentViewport2, useLocaleInfo as useLocaleInfo2, useVariantState as useVariantState2, withCSS as withCSS3 } from "@proofly-framer/runtime";
import { LayoutGroup as LayoutGroup2, motion as motion3, MotionConfigContext as MotionConfigContext2 } from "@proofly-framer/runtime";
import * as React3 from "react";

// http-url:https://framerusercontent.com/modules/qy8eVo5TXcYP2TWH72Db/lnFwfHBmEXS5R0BdeKYE/ferGDeq75.js
import { fontStore as fontStore4 } from "@proofly-framer/runtime";
fontStore4.loadFonts(["CUSTOM;Haffer Regular", "CUSTOM;Haffer Bold", "CUSTOM;Haffer Bold Italic", "CUSTOM;Haffer Regular Italic"]);
var fonts4 = [{
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
var css6 = ['.framer-z9vLR .framer-styles-preset-k8yxrn:not(.rich-text-wrapper), .framer-z9vLR .framer-styles-preset-k8yxrn.rich-text-wrapper p { --framer-font-family: "Haffer Regular", sans-serif; --framer-font-family-bold: "Haffer Bold", sans-serif; --framer-font-family-bold-italic: "Haffer Bold Italic", sans-serif; --framer-font-family-italic: "Haffer Regular Italic", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 430; --framer-font-weight-bold: 790; --framer-font-weight-bold-italic: 790; --framer-font-weight-italic: 430; --framer-letter-spacing: 0em; --framer-line-height: 130%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #eaeaeb; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; }', '@media (max-width: 1199px) and (min-width: 724px) { .framer-z9vLR .framer-styles-preset-k8yxrn:not(.rich-text-wrapper), .framer-z9vLR .framer-styles-preset-k8yxrn.rich-text-wrapper p { --framer-font-family: "Haffer Regular", sans-serif; --framer-font-family-bold: "Haffer Bold", sans-serif; --framer-font-family-bold-italic: "Haffer Bold Italic", sans-serif; --framer-font-family-italic: "Haffer Regular Italic", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 430; --framer-font-weight-bold: 790; --framer-font-weight-bold-italic: 790; --framer-font-weight-italic: 430; --framer-letter-spacing: 0em; --framer-line-height: 130%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #eaeaeb; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }', '@media (max-width: 723px) and (min-width: 0px) { .framer-z9vLR .framer-styles-preset-k8yxrn:not(.rich-text-wrapper), .framer-z9vLR .framer-styles-preset-k8yxrn.rich-text-wrapper p { --framer-font-family: "Haffer Regular", sans-serif; --framer-font-family-bold: "Haffer Bold", sans-serif; --framer-font-family-bold-italic: "Haffer Bold Italic", sans-serif; --framer-font-family-italic: "Haffer Regular Italic", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 430; --framer-font-weight-bold: 790; --framer-font-weight-bold-italic: 790; --framer-font-weight-italic: 430; --framer-letter-spacing: 0em; --framer-line-height: 130%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #eaeaeb; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }'];
var className4 = "framer-z9vLR";

// http-url:https://framerusercontent.com/modules/5b0cRZbgNRw1dCNVnxhv/mDSpobAAY3IZwQ4LzCUn/z4Urx0kPV.js
import { fontStore as fontStore5 } from "@proofly-framer/runtime";
fontStore5.loadFonts(["CUSTOM;Haffer Regular", "CUSTOMV2;Haffer Bold", "CUSTOMV2;Haffer Bold Italic", "CUSTOMV2;Haffer Regular Italic"]);
var fonts5 = [{
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
var css7 = ['.framer-tLH4r .framer-styles-preset-1e98430:not(.rich-text-wrapper), .framer-tLH4r .framer-styles-preset-1e98430.rich-text-wrapper h5 { --framer-font-family: "Haffer Regular", sans-serif; --framer-font-family-bold: "Haffer Bold", sans-serif; --framer-font-family-bold-italic: "Haffer Bold Italic", sans-serif; --framer-font-family-italic: "Haffer Regular Italic", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 430; --framer-font-weight-bold: 790; --framer-font-weight-bold-italic: 790; --framer-font-weight-italic: 430; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }', '@media (max-width: 768px) and (min-width: 0px) { .framer-tLH4r .framer-styles-preset-1e98430:not(.rich-text-wrapper), .framer-tLH4r .framer-styles-preset-1e98430.rich-text-wrapper h5 { --framer-font-family: "Haffer Regular", sans-serif; --framer-font-family-bold: "Haffer Bold", sans-serif; --framer-font-family-bold-italic: "Haffer Bold Italic", sans-serif; --framer-font-family-italic: "Haffer Regular Italic", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 430; --framer-font-weight-bold: 790; --framer-font-weight-bold-italic: 790; --framer-font-weight-italic: 430; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }'];
var className5 = "framer-tLH4r";

// http-url:https://framerusercontent.com/modules/aPoI9NsE1LJfAcYGN4yK/8Lr63VGrsbhlEFc1jK3S/ggQm2GY_4.js
var cycleOrder2 = ["a3CHgT8aH"];
var serializationHash2 = "framer-v1je0";
var variantClassNames2 = {
  a3CHgT8aH: "framer-v-1abae5s"
};
var transition12 = {
  damping: 60,
  delay: 0,
  mass: 1,
  stiffness: 500,
  type: "spring"
};
var toResponsiveImage = value => {
  if (typeof value === "object" && value !== null && typeof value.src === "string") {
    return value;
  }
  return typeof value === "string" ? {
    src: value
  } : void 0;
};
var Transition2 = ({
  value,
  children
}) => {
  const config = React3.useContext(MotionConfigContext2);
  const transition = value ?? config.transition;
  const contextValue = React3.useMemo(() => ({
    ...config,
    transition
  }), [JSON.stringify(transition)]);
  return <MotionConfigContext2.Provider value={contextValue}>{children}</MotionConfigContext2.Provider>;
};
var Variants2 = motion3(React3.Fragment);
var getProps3 = ({
  authorImage,
  authorName,
  height,
  id,
  image,
  link,
  title,
  width,
  ...props
}) => {
  return {
    ...props,
    AeTnLPbbQ: image ?? props.AeTnLPbbQ ?? {
      src: "https://framerusercontent.com/images/XnSOFVEyZS7WJ4LrLWjHaVIbyM.png?scale-down-to=512",
      srcSet: "https://framerusercontent.com/images/XnSOFVEyZS7WJ4LrLWjHaVIbyM.png?scale-down-to=1024 1011w,https://framerusercontent.com/images/XnSOFVEyZS7WJ4LrLWjHaVIbyM.png 1560w"
    },
    gxFOb9Xvl: title ?? props.gxFOb9Xvl ?? "Software integration with your business project",
    hi1Tl2FXN: authorImage ?? props.hi1Tl2FXN ?? {
      src: "https://framerusercontent.com/images/Tie3WGs98DYSfYuBB3CvwN9QP48.png"
    },
    STKBIxOe3: link ?? props.STKBIxOe3,
    Vssf0bHn1: authorName ?? props.Vssf0bHn1 ?? "Rayna Stanton"
  };
};
var createLayoutDependency2 = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component3 = React3.forwardRef(function (props, ref) {
  const {
    activeLocale,
    setLocale
  } = useLocaleInfo2();
  const {
    style,
    className: className7,
    layoutId,
    variant,
    AeTnLPbbQ,
    gxFOb9Xvl,
    hi1Tl2FXN,
    Vssf0bHn1,
    STKBIxOe3,
    ...restProps
  } = getProps3(props);
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
    defaultVariant: "a3CHgT8aH",
    variant,
    variantClassNames: variantClassNames2
  });
  const layoutDependency = createLayoutDependency2(props, variants);
  const ref1 = React3.useRef(null);
  const defaultLayoutId = React3.useId();
  const sharedStyleClassNames = [className5, className4];
  const componentViewport = useComponentViewport2();
  return <LayoutGroup2 id={layoutId ?? defaultLayoutId}>{<Variants2 animate={variants} initial={false}>{<Transition2 value={transition12}>{<Link2 href={STKBIxOe3} openInNewTab={false}>{_jsxs2(motion3.a, {
            ...restProps,
            ...gestureHandlers,
            background: {
              alt: "",
              fit: "fill"
            },
            className: `${cx3(serializationHash2, ...sharedStyleClassNames, "framer-1abae5s", className7, classNames)} framer-rpp4jt`,
            "data-framer-name": "Main",
            layoutDependency,
            layoutId: "a3CHgT8aH",
            ref: ref ?? ref1,
            style: {
              ...style
            },
            children: [_jsxs2(motion3.div, {
              className: "framer-7g8syx",
              layoutDependency,
              layoutId: "jlcUUu1MR",
              style: {
                borderBottomLeftRadius: 16,
                borderBottomRightRadius: 16,
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16
              },
              children: [_jsx3(motion3.div, {
                className: "framer-1jpumuu",
                "data-framer-name": "Shadow",
                layoutDependency,
                layoutId: "SEGFqMnXt",
                style: {
                  background: "linear-gradient(180deg, rgba(11, 12, 11, 0) 43.69369369369369%, rgb(11, 12, 11) 77%)"
                }
              }), <Image background={{
                alt: "",
                fit: "fill",
                sizes: componentViewport?.width || "100vw",
                ...toResponsiveImage(AeTnLPbbQ)
              }} className="framer-199ffck" data-framer-name="Image" layoutDependency={layoutDependency} layoutId="yPO3XBwxj" />]
            }), _jsxs2(motion3.div, {
              className: "framer-1qna5ii",
              "data-framer-name": "content",
              layoutDependency,
              layoutId: "tKrbdWzCd",
              children: [_jsx3(motion3.div, {
                className: "framer-x0gf08",
                "data-framer-name": "text",
                layoutDependency,
                layoutId: "a6dq6Xw8Z",
                children: <RichText2 __fromCanvasComponent className="framer-hdf0vk" data-framer-name="Title" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="BSapT4E5Q" style={{
                  "--framer-paragraph-spacing": "0px"
                }} text={gxFOb9Xvl} verticalAlignment="top" withExternalLayout>{<React3.Fragment>{_jsx3(motion3.h5, {
                      className: "framer-styles-preset-1e98430",
                      "data-styles-preset": "z4Urx0kPV",
                      style: {
                        "--framer-text-alignment": "left"
                      },
                      children: "Software integration with your business project"
                    })}</React3.Fragment>}</RichText2>
              }), _jsxs2(motion3.div, {
                className: "framer-10pdlgh",
                "data-framer-name": "author",
                layoutDependency,
                layoutId: "aFCqnk8vQ",
                children: [<Image background={{
                  alt: "",
                  fit: "fill",
                  sizes: "32px",
                  ...toResponsiveImage(hi1Tl2FXN)
                }} className="framer-7luwpx" data-framer-name="Author Image" layoutDependency={layoutDependency} layoutId="GiYq_KrYZ" style={{
                  borderBottomLeftRadius: 99,
                  borderBottomRightRadius: 99,
                  borderTopLeftRadius: 99,
                  borderTopRightRadius: 99
                }} />, <RichText2 __fromCanvasComponent className="framer-17j6fz1" data-framer-name="Author Name" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="ZW0TN23Fm" style={{
                  "--framer-paragraph-spacing": "0px"
                }} text={Vssf0bHn1} verticalAlignment="top" withExternalLayout>{<React3.Fragment>{_jsx3(motion3.p, {
                      className: "framer-styles-preset-k8yxrn",
                      "data-styles-preset": "ferGDeq75",
                      children: "Rayna Stanton"
                    })}</React3.Fragment>}</RichText2>]
              })]
            })]
          })}</Link2>}</Transition2>}</Variants2>}</LayoutGroup2>;
});
var css8 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-v1je0.framer-rpp4jt, .framer-v1je0 .framer-rpp4jt { display: block; }", ".framer-v1je0.framer-1abae5s { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-end; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: 389px; }", ".framer-v1je0 .framer-7g8syx { flex: none; height: 320px; overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }", ".framer-v1je0 .framer-1jpumuu { bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; z-index: 0; }", ".framer-v1je0 .framer-199ffck { aspect-ratio: 1.215625 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 320px); left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; z-index: 0; }", ".framer-v1je0 .framer-1qna5ii, .framer-v1je0 .framer-x0gf08 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-v1je0 .framer-hdf0vk { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-v1je0 .framer-10pdlgh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-v1je0 .framer-7luwpx { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 32px); overflow: hidden; position: relative; width: 32px; will-change: var(--framer-will-change-override, transform); }", ".framer-v1je0 .framer-17j6fz1 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-v1je0.framer-1abae5s, .framer-v1je0 .framer-1qna5ii, .framer-v1je0 .framer-x0gf08, .framer-v1je0 .framer-10pdlgh { gap: 0px; } .framer-v1je0.framer-1abae5s > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-v1je0.framer-1abae5s > :first-child, .framer-v1je0 .framer-1qna5ii > :first-child, .framer-v1je0 .framer-x0gf08 > :first-child { margin-top: 0px; } .framer-v1je0.framer-1abae5s > :last-child, .framer-v1je0 .framer-1qna5ii > :last-child, .framer-v1je0 .framer-x0gf08 > :last-child { margin-bottom: 0px; } .framer-v1je0 .framer-1qna5ii > *, .framer-v1je0 .framer-x0gf08 > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-v1je0 .framer-10pdlgh > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-v1je0 .framer-10pdlgh > :first-child { margin-left: 0px; } .framer-v1je0 .framer-10pdlgh > :last-child { margin-right: 0px; } }", ...css7, ...css6];
var FramerggQm2GY_4 = withCSS3(Component3, css8, "framer-v1je0");
var ggQm2GY_4_default = FramerggQm2GY_4;
FramerggQm2GY_4.displayName = "Blog/Card";
FramerggQm2GY_4.defaultProps = {
  height: 450,
  width: 389
};
addPropertyControls3(FramerggQm2GY_4, {
  AeTnLPbbQ: {
    __defaultAssetReference: "data:framer/asset-reference,XnSOFVEyZS7WJ4LrLWjHaVIbyM.png?originalFilename=Image.png&preferredSize=auto",
    title: "Image",
    type: ControlType3.ResponsiveImage
  },
  gxFOb9Xvl: {
    defaultValue: "Software integration with your business project",
    displayTextArea: false,
    title: "Title",
    type: ControlType3.String
  },
  hi1Tl2FXN: {
    __defaultAssetReference: "data:framer/asset-reference,Tie3WGs98DYSfYuBB3CvwN9QP48.png?originalFilename=Frame+77064139.png&preferredSize=auto",
    title: "Author Image",
    type: ControlType3.ResponsiveImage
  },
  Vssf0bHn1: {
    defaultValue: "Rayna Stanton",
    displayTextArea: false,
    title: "Author Name",
    type: ControlType3.String
  },
  STKBIxOe3: {
    title: "Link",
    type: ControlType3.Link
  }
});
addFonts2(FramerggQm2GY_4, [{
  explicitInter: true,
  fonts: [{
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
    url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQ bJvbw7SY1pQ.woff2",
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
  }]
}, ...getFontsFromSharedStyle2(fonts5), ...getFontsFromSharedStyle2(fonts4)], {
  supportsExplicitInterCodegen: true
});

// http-url:https://framerusercontent.com/modules/vKIe5ryUd6TMoV5bbtQR/PoCQExqcznl6qqhCOx8X/NIA2LSiQL.js
import { jsx as _jsx4, jsxs as _jsxs3 } from "react/jsx-runtime";
import { addFonts as addFonts3, addPropertyControls as addPropertyControls4, ControlType as ControlType4, cx as cx4, getFontsFromSharedStyle as getFontsFromSharedStyle3, RichText as RichText3, useActiveVariantCallback as useActiveVariantCallback2, useComponentViewport as useComponentViewport3, useLocaleInfo as useLocaleInfo3, useVariantState as useVariantState3, withCSS as withCSS4 } from "@proofly-framer/runtime";
import { LayoutGroup as LayoutGroup3, motion as motion4, MotionConfigContext as MotionConfigContext3 } from "@proofly-framer/runtime";
import * as React4 from "react";

// http-url:https://framerusercontent.com/modules/hrEYztSl8D8TyacXlaiy/DgASN1v42yT6tA5SiBwC/Wrgt1shwF.js
import { fontStore as fontStore6 } from "@proofly-framer/runtime";
fontStore6.loadFonts(["CUSTOM;Haffer Bold"]);
var fonts6 = [{
  explicitInter: true,
  fonts: [{
    family: "Haffer Bold",
    source: "custom",
    url: "https://framerusercontent.com/assets/eRqmC6W9PktN8mUcnwel9B6wmPs.woff"
  }]
}];
var css9 = ['.framer-Pou2l .framer-styles-preset-1sq323:not(.rich-text-wrapper), .framer-Pou2l .framer-styles-preset-1sq323.rich-text-wrapper p { --framer-font-family: "Haffer Bold", "Haffer Bold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }', '@media (max-width: 809px) and (min-width: 0px) { .framer-Pou2l .framer-styles-preset-1sq323:not(.rich-text-wrapper), .framer-Pou2l .framer-styles-preset-1sq323.rich-text-wrapper p { --framer-font-family: "Haffer Bold", "Haffer Bold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }'];
var className6 = "framer-Pou2l";

// http-url:https://framerusercontent.com/modules/vKIe5ryUd6TMoV5bbtQR/PoCQExqcznl6qqhCOx8X/NIA2LSiQL.js
var cycleOrder3 = ["KpcuynoY7", "V4xAYZNQE", "yZxybhQhU", "UbDFENOCE"];
var serializationHash3 = "framer-aEyzc";
var variantClassNames3 = {
  KpcuynoY7: "framer-v-cv0zg0",
  UbDFENOCE: "framer-v-1x20s42",
  V4xAYZNQE: "framer-v-lunmc0",
  yZxybhQhU: "framer-v-islpku"
};
function addPropertyOverrides2(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0 ? void 0 : variants.forEach(variant => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition13 = {
  damping: 60,
  delay: 0,
  mass: 1,
  stiffness: 500,
  type: "spring"
};
var radiusForCorner2 = (value, cornerIndex) => {
  if (typeof value === "number" && Number.isFinite(value)) return Math.max(0, value) + "px";
  if (typeof value !== "string" || typeof cornerIndex !== "number") return void 0;
  const segments = value.split(" ");
  return segments[cornerIndex] || segments[cornerIndex - 2] || segments[0];
};
var Transition3 = ({
  value,
  children
}) => {
  const config = React4.useContext(MotionConfigContext3);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React4.useMemo(() => ({
    ...config,
    transition
  }), [JSON.stringify(transition)]);
  return <MotionConfigContext3.Provider value={contextValue}>{children}</MotionConfigContext3.Provider>;
};
var Variants3 = motion4(React4.Fragment);
var humanReadableVariantMap2 = {
  "Active v2": "UbDFENOCE",
  "Disable v2": "yZxybhQhU",
  Active: "V4xAYZNQE",
  Disable: "KpcuynoY7"
};
var getProps4 = ({
  click,
  height,
  id,
  radius,
  title,
  width,
  ...props
}) => {
  var _ref, _ref1, _humanReadableVariantMap_props_variant, _ref2;
  return {
    ...props,
    OCwxvzhqM: click !== null && click !== void 0 ? click : props.OCwxvzhqM,
    ssa_z29zs: (_ref = title !== null && title !== void 0 ? title : props.ssa_z29zs) !== null && _ref !== void 0 ? _ref : "Development team",
    TZWm30yhb: (_ref1 = radius !== null && radius !== void 0 ? radius : props.TZWm30yhb) !== null && _ref1 !== void 0 ? _ref1 : "10px",
    variant: (_ref2 = (_humanReadableVariantMap_props_variant = humanReadableVariantMap2[props.variant]) !== null && _humanReadableVariantMap_props_variant !== void 0 ? _humanReadableVariantMap_props_variant : props.variant) !== null && _ref2 !== void 0 ? _ref2 : "KpcuynoY7"
  };
};
var createLayoutDependency3 = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component4 = React4.forwardRef(function (props, ref) {
  const {
    activeLocale,
    setLocale
  } = useLocaleInfo3();
  const {
    style,
    className: className7,
    layoutId,
    variant,
    ssa_z29zs,
    OCwxvzhqM,
    TZWm30yhb,
    ...restProps
  } = getProps4(props);
  const {
    baseVariant,
    classNames,
    gestureHandlers,
    gestureVariant,
    setGestureState,
    setVariant,
    variants
  } = useVariantState3({
    cycleOrder: cycleOrder3,
    defaultVariant: "KpcuynoY7",
    variant,
    variantClassNames: variantClassNames3
  });
  const layoutDependency = createLayoutDependency3(props, variants);
  const {
    activeVariantCallback,
    delay
  } = useActiveVariantCallback2(baseVariant);
  const onTapvpplrs = activeVariantCallback(async (...args) => {
    setGestureState({
      isPressed: false
    });
    if (OCwxvzhqM) {
      const res = await OCwxvzhqM(...args);
      if (res === false) return false;
    }
  });
  const ref1 = React4.useRef(null);
  const isDisplayed = () => {
    if (["yZxybhQhU", "UbDFENOCE"].includes(baseVariant)) return false;
    return true;
  };
  const defaultLayoutId = React4.useId();
  const sharedStyleClassNames = [className6];
  const componentViewport = useComponentViewport3();
  return <LayoutGroup3 id={layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId}>{<Variants3 animate={variants} initial={false}>{<Transition3 value={transition13}>{_jsxs3(motion4.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx4(serializationHash3, ...sharedStyleClassNames, "framer-cv0zg0", className7, classNames),
          "data-framer-name": "Disable",
          "data-highlight": true,
          layoutDependency,
          layoutId: "KpcuynoY7",
          onTap: onTapvpplrs,
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: {
            "--border-bottom-width": "0px",
            "--border-color": "rgba(0, 0, 0, 0)",
            "--border-left-width": "0px",
            "--border-right-width": "0px",
            "--border-style": "solid",
            "--border-top-width": "0px",
            backgroundColor: "rgba(0, 0, 0, 0)",
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            ...style
          },
          variants: {
            UbDFENOCE: {
              "--border-bottom-width": "1px",
              "--border-color": "rgba(182, 182, 185, 0)",
              "--border-left-width": "1px",
              "--border-right-width": "1px",
              "--border-style": "solid",
              "--border-top-width": "1px",
              backgroundColor: "var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(197, 249, 111))",
              borderBottomLeftRadius: radiusForCorner2(TZWm30yhb, 3),
              borderBottomRightRadius: radiusForCorner2(TZWm30yhb, 2),
              borderTopLeftRadius: radiusForCorner2(TZWm30yhb, 0),
              borderTopRightRadius: radiusForCorner2(TZWm30yhb, 1)
            },
            yZxybhQhU: {
              "--border-bottom-width": "1px",
              "--border-color": "var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(124, 124, 124))",
              "--border-left-width": "1px",
              "--border-right-width": "1px",
              "--border-style": "solid",
              "--border-top-width": "1px",
              borderBottomLeftRadius: radiusForCorner2(TZWm30yhb, 3),
              borderBottomRightRadius: radiusForCorner2(TZWm30yhb, 2),
              borderTopLeftRadius: radiusForCorner2(TZWm30yhb, 0),
              borderTopRightRadius: radiusForCorner2(TZWm30yhb, 1)
            }
          },
          ...addPropertyOverrides2({
            UbDFENOCE: {
              "data-border": true,
              "data-framer-name": "Active v2"
            },
            V4xAYZNQE: {
              "data-framer-name": "Active"
            },
            yZxybhQhU: {
              "data-border": true,
              "data-framer-name": "Disable v2"
            }
          }, baseVariant, gestureVariant),
          children: [<RichText3 __fromCanvasComponent className="framer-1waqwby" data-framer-name="Development team" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="Tumj1YRSK" style={{
            "--extracted-r6o4lv": "var(--token-2ae4d622-3758-4fad-a56d-08fa00cc7638, rgb(182, 182, 185))",
            "--framer-paragraph-spacing": "0px"
          }} text={ssa_z29zs} variants={{
            UbDFENOCE: {
              "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(10, 11, 10))"
            },
            V4xAYZNQE: {
              "--extracted-r6o4lv": "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))"
            }
          }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides2({
            UbDFENOCE: {
              children: <React4.Fragment>{_jsx4(motion4.p, {
                  className: "framer-styles-preset-1sq323",
                  "data-styles-preset": "Wrgt1shwF",
                  style: {
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(10, 11, 10)))"
                  },
                  children: "Development team"
                })}</React4.Fragment>
            },
            V4xAYZNQE: {
              children: <React4.Fragment>{_jsx4(motion4.p, {
                  className: "framer-styles-preset-1sq323",
                  "data-styles-preset": "Wrgt1shwF",
                  style: {
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))"
                  },
                  children: "Development team"
                })}</React4.Fragment>
            }
          }, baseVariant, gestureVariant)}>{<React4.Fragment>{_jsx4(motion4.p, {
                className: "framer-styles-preset-1sq323",
                "data-styles-preset": "Wrgt1shwF",
                style: {
                  "--framer-text-color": "var(--extracted-r6o4lv, var(--token-2ae4d622-3758-4fad-a56d-08fa00cc7638, rgb(182, 182, 185)))"
                },
                children: "Development team"
              })}</React4.Fragment>}</RichText3>, isDisplayed() && _jsx4(motion4.div, {
            className: "framer-1fazxe1",
            "data-framer-name": "Rectangle 22433",
            layoutDependency,
            layoutId: "aKgn75J2L",
            style: {
              backgroundColor: "var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(124, 124, 124))"
            },
            variants: {
              V4xAYZNQE: {
                backgroundColor: "var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(197, 249, 111))"
              }
            }
          })]
        })}</Transition3>}</Variants3>}</LayoutGroup3>;
});
var css10 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-aEyzc.framer-1frc08u, .framer-aEyzc .framer-1frc08u { display: block; }", ".framer-aEyzc.framer-cv0zg0 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-aEyzc .framer-1waqwby { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-aEyzc .framer-1fazxe1 { flex: none; height: 2px; position: relative; width: 100%; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-aEyzc.framer-cv0zg0 { gap: 0px; } .framer-aEyzc.framer-cv0zg0 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-aEyzc.framer-cv0zg0 > :first-child { margin-top: 0px; } .framer-aEyzc.framer-cv0zg0 > :last-child { margin-bottom: 0px; } }", ".framer-aEyzc.framer-v-islpku.framer-cv0zg0, .framer-aEyzc.framer-v-1x20s42.framer-cv0zg0 { padding: 16px 24px 16px 24px; }", ...css9, '.framer-aEyzc[data-border="true"]::after, .framer-aEyzc [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'];
var FramerNIA2LSiQL = withCSS4(Component4, css10, "framer-aEyzc");
var NIA2LSiQL_default = FramerNIA2LSiQL;
FramerNIA2LSiQL.displayName = "Tab";
FramerNIA2LSiQL.defaultProps = {
  height: 36,
  width: 184
};
addPropertyControls4(FramerNIA2LSiQL, {
  variant: {
    options: ["KpcuynoY7", "V4xAYZNQE", "yZxybhQhU", "UbDFENOCE"],
    optionTitles: ["Disable", "Active", "Disable v2", "Active v2"],
    title: "Variant",
    type: ControlType4.Enum
  },
  ssa_z29zs: {
    defaultValue: "Development team",
    displayTextArea: false,
    title: "Title",
    type: ControlType4.String
  },
  OCwxvzhqM: {
    title: "Click",
    type: ControlType4.EventHandler
  },
  TZWm30yhb: {
    defaultValue: "10px",
    title: "Radius",
    type: ControlType4.BorderRadius
  }
});
addFonts3(FramerNIA2LSiQL, [{
  explicitInter: true,
  fonts: [{
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
    url: "https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
    url: "https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+1F00-1FFF",
    url: "https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0370-03FF",
    url: "https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
    url: "https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    url: "https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
    url: "https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2",
    weight: "400"
  }]
}, ...getFontsFromSharedStyle3(fonts6)], {
  supportsExplicitInterCodegen: true
});

// http-url:https://framerusercontent.com/modules/7ivnQoKIW746u6BNAlxr/NcI5EcEDP22ctopwlcwJ/YHbXewHRr.js
init_QkI8Aa5rN();
import { jsx as _jsx5, jsxs as _jsxs4 } from "react/jsx-runtime";
import { addFonts as addFonts4, addPropertyControls as addPropertyControls5, ControlType as ControlType5, cx as cx5, getFontsFromSharedStyle as getFontsFromSharedStyle4, optimizeAppear, RichText as RichText4, useActiveVariantCallback as useActiveVariantCallback3, useComponentViewport as useComponentViewport4, useLocaleInfo as useLocaleInfo4, useVariantState as useVariantState4, withCSS as withCSS5, withFX } from "@proofly-framer/runtime";
import { LayoutGroup as LayoutGroup4, motion as motion5, MotionConfigContext as MotionConfigContext4 } from "@proofly-framer/runtime";
import * as React5 from "react";
import { jsx as _ctxJsx } from "react/jsx-runtime";
import { ContextProviders, useVariant } from "@proofly-framer/runtime";
var MotionDivWithFX = withFX(motion5.div);
var cycleOrder4 = ["FdT7iBApf", "hlVf9MYOU", "X2dtqOTcB"];
var serializationHash4 = "framer-8owbM";
var variantClassNames4 = {
  FdT7iBApf: "framer-v-13r0n0g",
  hlVf9MYOU: "framer-v-188b7v8",
  X2dtqOTcB: "framer-v-sbtw8o"
};
function addPropertyOverrides3(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0 ? void 0 : variants.forEach(variant => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition14 = {
  duration: 0,
  type: "tween"
};
var transition2 = {
  delay: 0,
  duration: 0.3,
  ease: [0.44, 0, 0.56, 1],
  type: "tween"
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
  scale: 1,
  skewX: 0,
  skewY: 0,
  x: 0,
  y: 0
};
var transition3 = {
  delay: 0,
  duration: 1,
  ease: [0, 0, 1, 1],
  type: "tween"
};
var animation2 = {
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
var Transition4 = ({
  value,
  children
}) => {
  const config = React5.useContext(MotionConfigContext4);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React5.useMemo(() => ({
    ...config,
    transition
  }), [JSON.stringify(transition)]);
  return <MotionConfigContext4.Provider value={contextValue}>{children}</MotionConfigContext4.Provider>;
};
var Variants4 = motion5(React5.Fragment);
var humanReadableVariantMap3 = {
  Default: "FdT7iBApf",
  Hidden: "X2dtqOTcB",
  Loading: "hlVf9MYOU"
};
var getProps5 = ({
  click,
  height,
  id,
  width,
  ...props
}) => {
  var _humanReadableVariantMap_props_variant, _ref;
  return {
    ...props,
    variant: (_ref = (_humanReadableVariantMap_props_variant = humanReadableVariantMap3[props.variant]) !== null && _humanReadableVariantMap_props_variant !== void 0 ? _humanReadableVariantMap_props_variant : props.variant) !== null && _ref !== void 0 ? _ref : "FdT7iBApf",
    Wld3NDzSj: click !== null && click !== void 0 ? click : props.Wld3NDzSj
  };
};
var createLayoutDependency4 = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component5 = React5.forwardRef(function (props, ref) {
  const {
    activeLocale,
    setLocale
  } = useLocaleInfo4();
  const {
    style,
    className: className7,
    layoutId,
    variant,
    Wld3NDzSj,
    ...restProps
  } = getProps5(props);
  const {
    baseVariant,
    classNames,
    gestureHandlers,
    gestureVariant,
    setGestureState,
    setVariant,
    variants
  } = useVariantState4({
    cycleOrder: cycleOrder4,
    defaultVariant: "FdT7iBApf",
    variant,
    variantClassNames: variantClassNames4
  });
  const layoutDependency = createLayoutDependency4(props, variants);
  const {
    activeVariantCallback,
    delay
  } = useActiveVariantCallback3(baseVariant);
  const onTapn9xadi = activeVariantCallback(async (...args) => {
    setGestureState({
      isPressed: false
    });
    if (Wld3NDzSj) {
      const res = await Wld3NDzSj(...args);
      if (res === false) return false;
    }
  });
  const isDisplayed = () => {
    if (baseVariant === "X2dtqOTcB") return false;
    return true;
  };
  const ref1 = React5.useRef(null);
  const isDisplayed1 = () => {
    if (baseVariant === "hlVf9MYOU") return false;
    return true;
  };
  const isDisplayed2 = () => {
    if (baseVariant === "hlVf9MYOU") return true;
    return false;
  };
  const defaultLayoutId = React5.useId();
  const sharedStyleClassNames = [className];
  const componentViewport = useComponentViewport4();
  return <LayoutGroup4 id={layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId}>{<Variants4 animate={variants} initial={false}>{isDisplayed() && <Transition4 value={transition14}>{_jsxs4(motion5.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx5(serializationHash4, ...sharedStyleClassNames, "framer-13r0n0g", className7, classNames),
          "data-framer-name": "Default",
          "data-highlight": true,
          layoutDependency,
          layoutId: "FdT7iBApf",
          onTap: onTapn9xadi,
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: {
            backgroundColor: "var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(197, 249, 111))",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            ...style
          },
          ...addPropertyOverrides3({
            hlVf9MYOU: {
              "data-framer-name": "Loading"
            }
          }, baseVariant, gestureVariant),
          children: [isDisplayed1() && <RichText4 __fromCanvasComponent className="framer-1ipkld0" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="xvcroG1Ya" verticalAlignment="top" withExternalLayout>{<React5.Fragment>{_jsx5(motion5.p, {
                className: "framer-styles-preset-mnimbo",
                "data-styles-preset": "QkI8Aa5rN",
                children: "Load More"
              })}</React5.Fragment>}</RichText4>, isDisplayed2() && <MotionDivWithFX __perspectiveFX={false} __smartComponentFX __targetOpacity={1} animate={optimizeAppear("animate", "1qobph6", animation, "13r0n0g")} className="framer-1qobph6" data-framer-appear-id="1qobph6" data-framer-name="Spinner" initial={optimizeAppear("initial", "1qobph6", animation1, "13r0n0g")} layoutDependency={layoutDependency} layoutId="gDwFHLm40" style={{
            mask: "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add",
            WebkitMask: "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add"
          }} {...addPropertyOverrides3({
            hlVf9MYOU: {
              "data-framer-appear-id": "1yncqdq",
              animate: optimizeAppear("animate", "1yncqdq", animation, "188b7v8"),
              initial: optimizeAppear("initial", "1yncqdq", animation1, "188b7v8")
            }
          }, baseVariant, gestureVariant)}>{<MotionDivWithFX __framer__loop={animation2} __framer__loopEffectEnabled __framer__loopRepeatDelay={0} __framer__loopRepeatType="loop" __framer__loopTransition={transition3} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-1fmciit" data-framer-name="Conic" layoutDependency={layoutDependency} layoutId="K6ObPLhwl" style={{
              background: 'conic-gradient(from 0deg at 50% 50%, rgba(10, 11, 10, 0) 0deg, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(10, 11, 10)) 342deg)'
            }}>{_jsx5(motion5.div, {
                className: "framer-omsa2u",
                "data-framer-name": "Round",
                layoutDependency,
                layoutId: "jo5pWuxfy",
                style: {
                  backgroundColor: "rgb(255, 255, 255)",
                  borderBottomLeftRadius: 1,
                  borderBottomRightRadius: 1,
                  borderTopLeftRadius: 1,
                  borderTopRightRadius: 1
                }
              })}</MotionDivWithFX>}</MotionDivWithFX>]
        })}</Transition4>}</Variants4>}</LayoutGroup4>;
});
var css11 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-8owbM.framer-1up57e6, .framer-8owbM .framer-1up57e6 { display: block; }", ".framer-8owbM.framer-13r0n0g { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 12px 16px 12px 16px; position: relative; width: min-content; }", ".framer-8owbM .framer-1ipkld0 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }", ".framer-8owbM .framer-1qobph6 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 20px); overflow: visible; position: relative; width: 20px; }", ".framer-8owbM .framer-1fmciit { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }", ".framer-8owbM .framer-omsa2u { flex: none; height: 2px; left: calc(50.00000000000002% - 2px / 2); overflow: visible; position: absolute; top: 0px; width: 2px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-8owbM.framer-13r0n0g { gap: 0px; } .framer-8owbM.framer-13r0n0g > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-8owbM.framer-13r0n0g > :first-child { margin-left: 0px; } .framer-8owbM.framer-13r0n0g > :last-child { margin-right: 0px; } }", ...css2];
var FramerYHbXewHRr = withCSS5(Component5, css11, "framer-8owbM");
var YHbXewHRr_default = FramerYHbXewHRr;
FramerYHbXewHRr.displayName = "Load More Button";
FramerYHbXewHRr.defaultProps = {
  height: 43,
  width: 108
};
addPropertyControls5(FramerYHbXewHRr, {
  variant: {
    options: ["FdT7iBApf", "hlVf9MYOU", "X2dtqOTcB"],
    optionTitles: ["Default", "Loading", "Hidden"],
    title: "Variant",
    type: ControlType5.Enum
  },
  Wld3NDzSj: {
    title: "Click",
    type: ControlType5.EventHandler
  }
});
addFonts4(FramerYHbXewHRr, [{
  explicitInter: true,
  fonts: [{
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
    url: "https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
    url: "https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+1F00-1FFF",
    url: "https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0370-03FF",
    url: "https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
    url: "https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    url: "https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
    url: "https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2",
    weight: "400"
  }]
}, ...getFontsFromSharedStyle4(fonts)], {
  supportsExplicitInterCodegen: true
});

// http-url:https://framerusercontent.com/modules/fLO7cQfzzutEFzybDV5O/OB55Pmajr1NjU6sMaGtv/ZzbMsXH1T.js
var TabFonts = getFonts2(NIA2LSiQL_default);
var BlogCardFonts = getFonts2(ggQm2GY_4_default);
var LoadMoreButtonFonts = getFonts2(YHbXewHRr_default);
var cycleOrder5 = ["bmxbJlBdJ", "Rn9cVraJb", "aKo1tWEXv", "iT2_wI9c6", "joJFxuI2x", "sViTHTOwc", "VzH73fCxD", "VX1ORlDeH", "e3Rhf2vYV"];
var serializationHash5 = "framer-DL1Uj";
var variantClassNames5 = {
  aKo1tWEXv: "framer-v-19smz0s",
  bmxbJlBdJ: "framer-v-td2zla",
  e3Rhf2vYV: "framer-v-14j1cgw",
  iT2_wI9c6: "framer-v-1kg71uj",
  joJFxuI2x: "framer-v-1s8fezn",
  Rn9cVraJb: "framer-v-1nbf5r8",
  sViTHTOwc: "framer-v-inv1u4",
  VX1ORlDeH: "framer-v-1de3q9q",
  VzH73fCxD: "framer-v-4nnf6v"
};
function addPropertyOverrides4(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach(variant => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition15 = {
  damping: 60,
  delay: 0,
  mass: 1,
  stiffness: 500,
  type: "spring"
};
var toResponsiveImage2 = value => {
  if (typeof value === "object" && value !== null && typeof value.src === "string") {
    return value;
  }
  return typeof value === "string" ? {
    src: value
  } : void 0;
};
var transformTemplate12 = (_2, t5) => `translateX(-50%) ${t5}`;
var loaderVariants = (repeaterState, variants, currentVariant) => {
  if (repeaterState.currentPage >= repeaterState.totalPages) return variants.disabled ?? currentVariant;
  if (repeaterState.isLoading) return variants.loading ?? currentVariant;
  return currentVariant;
};
var QueryData = ({
  query,
  children
}) => {
  const {
    paginatedQuery,
    paginationInfo,
    loadMore
  } = useLoadMorePaginatedQuery(query, 9, "QaSQ54AbN");
  const data = useQueryData(paginatedQuery);
  return children(data, paginationInfo, loadMore);
};
var Transition5 = ({
  value,
  children
}) => {
  const config = React6.useContext(MotionConfigContext5);
  const transition = value ?? config.transition;
  const contextValue = React6.useMemo(() => ({
    ...config,
    transition
  }), [JSON.stringify(transition)]);
  return <MotionConfigContext5.Provider value={contextValue}>{children}</MotionConfigContext5.Provider>;
};
var Variants5 = motion6(React6.Fragment);
var humanReadableVariantMap4 = {
  "All Mobile": "VzH73fCxD",
  "All Tablet": "iT2_wI9c6",
  "Dev Mobile": "VX1ORlDeH",
  "Dev Tablet": "joJFxuI2x",
  "Eng Mobile": "e3Rhf2vYV",
  "Eng Tablet": "sViTHTOwc",
  All: "bmxbJlBdJ",
  Dev: "Rn9cVraJb",
  Eng: "aKo1tWEXv"
};
var getProps6 = ({
  height,
  id,
  width,
  ...props
}) => {
  return {
    ...props,
    variant: humanReadableVariantMap4[props.variant] ?? props.variant ?? "bmxbJlBdJ"
  };
};
var createLayoutDependency5 = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component6 = React6.forwardRef(function (props, ref) {
  const {
    activeLocale,
    setLocale
  } = useLocaleInfo5();
  const {
    style,
    className: className7,
    layoutId,
    variant,
    IInnB9Z9VQaSQ54AbN,
    Md0mC9r2HQaSQ54AbN,
    LyABwAfNOQaSQ54AbN,
    CKesnHXR4QaSQ54AbN,
    RyNA95by4QaSQ54AbN,
    idQaSQ54AbN,
    ...restProps
  } = getProps6(props);
  const {
    baseVariant,
    classNames,
    gestureHandlers,
    gestureVariant,
    setGestureState,
    setVariant,
    variants
  } = useVariantState5({
    cycleOrder: cycleOrder5,
    defaultVariant: "bmxbJlBdJ",
    variant,
    variantClassNames: variantClassNames5
  });
  const layoutDependency = createLayoutDependency5(props, variants);
  const {
    activeVariantCallback,
    delay
  } = useActiveVariantCallback4(baseVariant);
  const OCwxvzhqM1vm8hu2 = activeVariantCallback(async (...args) => {
    setVariant("bmxbJlBdJ");
  });
  const OCwxvzhqM1lmhwax = activeVariantCallback(async (...args) => {
    setVariant("iT2_wI9c6");
  });
  const OCwxvzhqMph0g2a = activeVariantCallback(async (...args) => {
    setVariant("VzH73fCxD");
  });
  const OCwxvzhqMkkio1o = activeVariantCallback(async (...args) => {
    setVariant("Rn9cVraJb");
  });
  const OCwxvzhqM1rx3z0k = activeVariantCallback(async (...args) => {
    setVariant("joJFxuI2x");
  });
  const OCwxvzhqM1aqbzli = activeVariantCallback(async (...args) => {
    setVariant("VX1ORlDeH");
  });
  const OCwxvzhqM1c6t6uo = activeVariantCallback(async (...args) => {
    setVariant("aKo1tWEXv");
  });
  const OCwxvzhqM16ccvic = activeVariantCallback(async (...args) => {
    setVariant("sViTHTOwc");
  });
  const OCwxvzhqM193fbrn = activeVariantCallback(async (...args) => {
    setVariant("e3Rhf2vYV");
  });
  const Wld3NDzSj1u4o9hu = ({
    overlay,
    paginationInfo
  }) => activeVariantCallback(async (...args) => {
    paginationInfo();
  });
  const ref1 = React6.useRef(null);
  const router = useRouter();
  const isDisplayed = () => {
    if (["Rn9cVraJb", "aKo1tWEXv", "joJFxuI2x", "sViTHTOwc"].includes(baseVariant)) return false;
    return true;
  };
  const defaultLayoutId = React6.useId();
  const sharedStyleClassNames = [className3];
  const componentViewport = useComponentViewport5();
  return <LayoutGroup5 id={layoutId ?? defaultLayoutId}>{<Variants5 animate={variants} initial={false}>{<Transition5 value={transition15}>{_jsxs5(motion6.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx6(serializationHash5, ...sharedStyleClassNames, "framer-td2zla", className7, classNames),
          "data-framer-name": "All",
          layoutDependency,
          layoutId: "bmxbJlBdJ",
          ref: ref ?? ref1,
          style: {
            ...style
          },
          ...addPropertyOverrides4({
            aKo1tWEXv: {
              "data-framer-name": "Eng"
            },
            e3Rhf2vYV: {
              "data-framer-name": "Eng Mobile"
            },
            iT2_wI9c6: {
              "data-framer-name": "All Tablet"
            },
            joJFxuI2x: {
              "data-framer-name": "Dev Tablet"
            },
            Rn9cVraJb: {
              "data-framer-name": "Dev"
            },
            sViTHTOwc: {
              "data-framer-name": "Eng Tablet"
            },
            VX1ORlDeH: {
              "data-framer-name": "Dev Mobile"
            },
            VzH73fCxD: {
              "data-framer-name": "All Mobile"
            }
          }, baseVariant, gestureVariant),
          children: [_jsxs5(motion6.div, {
            className: "framer-14o3r3k",
            "data-framer-name": "heading+navigation",
            layoutDependency,
            layoutId: "xnCeH6hUV",
            children: [<RichText5 __fromCanvasComponent className="framer-eweh2i" data-framer-name="Our Tech Talents" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="qFtcM8Kfa" style={{
              "--framer-paragraph-spacing": "0px"
            }} verticalAlignment="center" withExternalLayout>{<React6.Fragment>{_jsx6(motion6.h3, {
                  className: "framer-styles-preset-19ujo0x",
                  "data-styles-preset": "UrNHzCTiy",
                  style: {
                    "--framer-text-alignment": "left"
                  },
                  children: "Read Our Blog"
                })}</React6.Fragment>}</RichText5>, _jsxs5(motion6.div, {
              className: "framer-mbw3sm",
              "data-framer-name": "navigation",
              "data-hide-scrollbars": true,
              layoutDependency,
              layoutId: "CrGBQ5V6v",
              children: [<ComponentViewportProvider>{_jsx6(motion6.div, {
                  className: "framer-eunqvs-container",
                  layoutDependency,
                  layoutId: "RfEtIZPvE-container",
                  children: <NIA2LSiQL_default height="100%" id="RfEtIZPvE" layoutId="RfEtIZPvE" OCwxvzhqM={OCwxvzhqM1vm8hu2} ssa_z29zs="All Blog Posts" TZWm30yhb="10px" variant="V4xAYZNQE" width="100%" {...addPropertyOverrides4({
                    aKo1tWEXv: {
                      variant: "KpcuynoY7"
                    },
                    e3Rhf2vYV: {
                      OCwxvzhqM: OCwxvzhqMph0g2a,
                      variant: "KpcuynoY7"
                    },
                    iT2_wI9c6: {
                      OCwxvzhqM: OCwxvzhqM1lmhwax
                    },
                    joJFxuI2x: {
                      OCwxvzhqM: OCwxvzhqM1lmhwax,
                      variant: "KpcuynoY7"
                    },
                    Rn9cVraJb: {
                      variant: "KpcuynoY7"
                    },
                    sViTHTOwc: {
                      OCwxvzhqM: OCwxvzhqM1lmhwax,
                      variant: "KpcuynoY7"
                    },
                    VX1ORlDeH: {
                      OCwxvzhqM: OCwxvzhqMph0g2a,
                      variant: "KpcuynoY7"
                    },
                    VzH73fCxD: {
                      OCwxvzhqM: OCwxvzhqMph0g2a
                    }
                  }, baseVariant, gestureVariant)} />
                })}</ComponentViewportProvider>, <ComponentViewportProvider>{_jsx6(motion6.div, {
                  className: "framer-174joj7-container",
                  layoutDependency,
                  layoutId: "rZHXjXnIt-container",
                  children: <NIA2LSiQL_default height="100%" id="rZHXjXnIt" layoutId="rZHXjXnIt" OCwxvzhqM={OCwxvzhqMkkio1o} ssa_z29zs="Development" TZWm30yhb="10px" variant="KpcuynoY7" width="100%" {...addPropertyOverrides4({
                    e3Rhf2vYV: {
                      OCwxvzhqM: OCwxvzhqM1aqbzli
                    },
                    iT2_wI9c6: {
                      OCwxvzhqM: OCwxvzhqM1rx3z0k
                    },
                    joJFxuI2x: {
                      OCwxvzhqM: OCwxvzhqM1rx3z0k,
                      variant: "V4xAYZNQE"
                    },
                    Rn9cVraJb: {
                      variant: "V4xAYZNQE"
                    },
                    sViTHTOwc: {
                      OCwxvzhqM: OCwxvzhqM1rx3z0k
                    },
                    VX1ORlDeH: {
                      OCwxvzhqM: OCwxvzhqM1aqbzli,
                      variant: "V4xAYZNQE"
                    },
                    VzH73fCxD: {
                      OCwxvzhqM: OCwxvzhqM1aqbzli
                    }
                  }, baseVariant, gestureVariant)} />
                })}</ComponentViewportProvider>, <ComponentViewportProvider>{_jsx6(motion6.div, {
                  className: "framer-znswq2-container",
                  layoutDependency,
                  layoutId: "W9PXBV5in-container",
                  children: <NIA2LSiQL_default height="100%" id="W9PXBV5in" layoutId="W9PXBV5in" OCwxvzhqM={OCwxvzhqM1c6t6uo} ssa_z29zs="Engineering" TZWm30yhb="10px" variant="KpcuynoY7" width="100%" {...addPropertyOverrides4({
                    aKo1tWEXv: {
                      variant: "V4xAYZNQE"
                    },
                    e3Rhf2vYV: {
                      OCwxvzhqM: OCwxvzhqM193fbrn,
                      variant: "V4xAYZNQE"
                    },
                    iT2_wI9c6: {
                      OCwxvzhqM: OCwxvzhqM16ccvic
                    },
                    joJFxuI2x: {
                      OCwxvzhqM: OCwxvzhqM16ccvic
                    },
                    sViTHTOwc: {
                      OCwxvzhqM: OCwxvzhqM16ccvic,
                      variant: "V4xAYZNQE"
                    },
                    VX1ORlDeH: {
                      OCwxvzhqM: OCwxvzhqM193fbrn
                    },
                    VzH73fCxD: {
                      OCwxvzhqM: OCwxvzhqM193fbrn
                    }
                  }, baseVariant, gestureVariant)} />
                })}</ComponentViewportProvider>]
            })]
          }), _jsx6(motion6.div, {
            className: "framer-alfm1t",
            layoutDependency,
            layoutId: "QaSQ54AbN",
            children: <QueryData query={{
              from: {
                data: Xd1J0o8me_default,
                type: "Collection"
              },
              offset: {
                type: "LiteralValue",
                value: 3
              },
              select: [{
                name: "IInnB9Z9V",
                type: "Identifier"
              }, {
                name: "Md0mC9r2H",
                type: "Identifier"
              }, {
                name: "LyABwAfNO",
                type: "Identifier"
              }, {
                name: "CKesnHXR4",
                type: "Identifier"
              }, {
                name: "RyNA95by4",
                type: "Identifier"
              }, {
                name: "id",
                type: "Identifier"
              }]
            }} {...addPropertyOverrides4({
              aKo1tWEXv: {
                query: {
                  from: {
                    data: Xd1J0o8me_default,
                    type: "Collection"
                  },
                  offset: {
                    type: "LiteralValue",
                    value: 0
                  },
                  select: [{
                    name: "IInnB9Z9V",
                    type: "Identifier"
                  }, {
                    name: "Md0mC9r2H",
                    type: "Identifier"
                  }, {
                    name: "LyABwAfNO",
                    type: "Identifier"
                  }, {
                    name: "CKesnHXR4",
                    type: "Identifier"
                  }, {
                    name: "RyNA95by4",
                    type: "Identifier"
                  }, {
                    name: "id",
                    type: "Identifier"
                  }],
                  where: {
                    left: {
                      name: "XF106V4xQ",
                      type: "Identifier"
                    },
                    operator: "==",
                    right: {
                      type: "LiteralValue",
                      value: "Engineering"
                    },
                    type: "BinaryOperation"
                  }
                }
              },
              e3Rhf2vYV: {
                query: {
                  from: {
                    data: Xd1J0o8me_default,
                    type: "Collection"
                  },
                  limit: {
                    type: "LiteralValue",
                    value: 5
                  },
                  select: [{
                    name: "IInnB9Z9V",
                    type: "Identifier"
                  }, {
                    name: "Md0mC9r2H",
                    type: "Identifier"
                  }, {
                    name: "LyABwAfNO",
                    type: "Identifier"
                  }, {
                    name: "CKesnHXR4",
                    type: "Identifier"
                  }, {
                    name: "RyNA95by4",
                    type: "Identifier"
                  }, {
                    name: "id",
                    type: "Identifier"
                  }],
                  where: {
                    left: {
                      name: "XF106V4xQ",
                      type: "Identifier"
                    },
                    operator: "==",
                    right: {
                      type: "LiteralValue",
                      value: "Engineering"
                    },
                    type: "BinaryOperation"
                  }
                }
              },
              iT2_wI9c6: {
                query: {
                  from: {
                    data: Xd1J0o8me_default,
                    type: "Collection"
                  },
                  limit: {
                    type: "LiteralValue",
                    value: 8
                  },
                  select: [{
                    name: "IInnB9Z9V",
                    type: "Identifier"
                  }, {
                    name: "Md0mC9r2H",
                    type: "Identifier"
                  }, {
                    name: "LyABwAfNO",
                    type: "Identifier"
                  }, {
                    name: "CKesnHXR4",
                    type: "Identifier"
                  }, {
                    name: "RyNA95by4",
                    type: "Identifier"
                  }, {
                    name: "id",
                    type: "Identifier"
                  }]
                }
              },
              joJFxuI2x: {
                query: {
                  from: {
                    data: Xd1J0o8me_default,
                    type: "Collection"
                  },
                  limit: {
                    type: "LiteralValue",
                    value: 8
                  },
                  select: [{
                    name: "IInnB9Z9V",
                    type: "Identifier"
                  }, {
                    name: "Md0mC9r2H",
                    type: "Identifier"
                  }, {
                    name: "LyABwAfNO",
                    type: "Identifier"
                  }, {
                    name: "CKesnHXR4",
                    type: "Identifier"
                  }, {
                    name: "RyNA95by4",
                    type: "Identifier"
                  }, {
                    name: "id",
                    type: "Identifier"
                  }],
                  where: {
                    left: {
                      name: "XF106V4xQ",
                      type: "Identifier"
                    },
                    operator: "==",
                    right: {
                      type: "LiteralValue",
                      value: "Development"
                    },
                    type: "BinaryOperation"
                  }
                }
              },
              Rn9cVraJb: {
                query: {
                  from: {
                    data: Xd1J0o8me_default,
                    type: "Collection"
                  },
                  offset: {
                    type: "LiteralValue",
                    value: 0
                  },
                  select: [{
                    name: "IInnB9Z9V",
                    type: "Identifier"
                  }, {
                    name: "Md0mC9r2H",
                    type: "Identifier"
                  }, {
                    name: "LyABwAfNO",
                    type: "Identifier"
                  }, {
                    name: "CKesnHXR4",
                    type: "Identifier"
                  }, {
                    name: "RyNA95by4",
                    type: "Identifier"
                  }, {
                    name: "id",
                    type: "Identifier"
                  }],
                  where: {
                    left: {
                      name: "XF106V4xQ",
                      type: "Identifier"
                    },
                    operator: "==",
                    right: {
                      type: "LiteralValue",
                      value: "Development"
                    },
                    type: "BinaryOperation"
                  }
                }
              },
              sViTHTOwc: {
                query: {
                  from: {
                    data: Xd1J0o8me_default,
                    type: "Collection"
                  },
                  select: [{
                    name: "IInnB9Z9V",
                    type: "Identifier"
                  }, {
                    name: "Md0mC9r2H",
                    type: "Identifier"
                  }, {
                    name: "LyABwAfNO",
                    type: "Identifier"
                  }, {
                    name: "CKesnHXR4",
                    type: "Identifier"
                  }, {
                    name: "RyNA95by4",
                    type: "Identifier"
                  }, {
                    name: "id",
                    type: "Identifier"
                  }],
                  where: {
                    left: {
                      name: "XF106V4xQ",
                      type: "Identifier"
                    },
                    operator: "==",
                    right: {
                      type: "LiteralValue",
                      value: "Engineering"
                    },
                    type: "BinaryOperation"
                  }
                }
              },
              VX1ORlDeH: {
                query: {
                  from: {
                    data: Xd1J0o8me_default,
                    type: "Collection"
                  },
                  limit: {
                    type: "LiteralValue",
                    value: 5
                  },
                  select: [{
                    name: "IInnB9Z9V",
                    type: "Identifier"
                  }, {
                    name: "Md0mC9r2H",
                    type: "Identifier"
                  }, {
                    name: "LyABwAfNO",
                    type: "Identifier"
                  }, {
                    name: "CKesnHXR4",
                    type: "Identifier"
                  }, {
                    name: "RyNA95by4",
                    type: "Identifier"
                  }, {
                    name: "id",
                    type: "Identifier"
                  }],
                  where: {
                    left: {
                      name: "XF106V4xQ",
                      type: "Identifier"
                    },
                    operator: "==",
                    right: {
                      type: "LiteralValue",
                      value: "Development"
                    },
                    type: "BinaryOperation"
                  }
                }
              },
              VzH73fCxD: {
                query: {
                  from: {
                    data: Xd1J0o8me_default,
                    type: "Collection"
                  },
                  limit: {
                    type: "LiteralValue",
                    value: 5
                  },
                  select: [{
                    name: "IInnB9Z9V",
                    type: "Identifier"
                  }, {
                    name: "Md0mC9r2H",
                    type: "Identifier"
                  }, {
                    name: "LyABwAfNO",
                    type: "Identifier"
                  }, {
                    name: "CKesnHXR4",
                    type: "Identifier"
                  }, {
                    name: "RyNA95by4",
                    type: "Identifier"
                  }, {
                    name: "id",
                    type: "Identifier"
                  }]
                }
              }
            }, baseVariant, gestureVariant)}>{(collection, paginationInfo, loadMore) => <>{collection.map(({
                  IInnB9Z9V: IInnB9Z9VQaSQ54AbN2,
                  Md0mC9r2H: Md0mC9r2HQaSQ54AbN2,
                  LyABwAfNO: LyABwAfNOQaSQ54AbN2,
                  CKesnHXR4: CKesnHXR4QaSQ54AbN2,
                  RyNA95by4: RyNA95by4QaSQ54AbN2,
                  id: idQaSQ54AbN2
                }, i4) => {
                  return <LayoutGroup5 id={`QaSQ54AbN-${idQaSQ54AbN2}`}>{<PathVariablesContext.Provider value={{
                      RyNA95by4: RyNA95by4QaSQ54AbN2
                    }}>{<ResolveLinks links={[{
                        href: {
                          pathVariables: {
                            RyNA95by4: RyNA95by4QaSQ54AbN2
                          },
                          webPageId: "ycndO5432"
                        },
                        implicitPathVariables: void 0
                      }, {
                        href: {
                          pathVariables: {
                            RyNA95by4: RyNA95by4QaSQ54AbN2
                          },
                          webPageId: "ycndO5432"
                        },
                        implicitPathVariables: void 0
                      }, {
                        href: {
                          pathVariables: {
                            RyNA95by4: RyNA95by4QaSQ54AbN2
                          },
                          webPageId: "ycndO5432"
                        },
                        implicitPathVariables: void 0
                      }, {
                        href: {
                          pathVariables: {
                            RyNA95by4: RyNA95by4QaSQ54AbN2
                          },
                          webPageId: "ycndO5432"
                        },
                        implicitPathVariables: void 0
                      }, {
                        href: {
                          pathVariables: {
                            RyNA95by4: RyNA95by4QaSQ54AbN2
                          },
                          webPageId: "ycndO5432"
                        },
                        implicitPathVariables: void 0
                      }, {
                        href: {
                          pathVariables: {
                            RyNA95by4: RyNA95by4QaSQ54AbN2
                          },
                          webPageId: "ycndO5432"
                        },
                        implicitPathVariables: void 0
                      }, {
                        href: {
                          pathVariables: {
                            RyNA95by4: RyNA95by4QaSQ54AbN2
                          },
                          webPageId: "ycndO5432"
                        },
                        implicitPathVariables: void 0
                      }, {
                        href: {
                          pathVariables: {
                            RyNA95by4: RyNA95by4QaSQ54AbN2
                          },
                          webPageId: "ycndO5432"
                        },
                        implicitPathVariables: void 0
                      }, {
                        href: {
                          pathVariables: {
                            RyNA95by4: RyNA95by4QaSQ54AbN2
                          },
                          webPageId: "ycndO5432"
                        },
                        implicitPathVariables: void 0
                      }]}>{resolvedLinks => <ComponentViewportProvider width={`max((${componentViewport?.width || "100vw"} - 160px) / 3, 200px)`} {...addPropertyOverrides4({
                          e3Rhf2vYV: {
                            width: `max(${componentViewport?.width || "100vw"} - 32px, 200px)`
                          },
                          iT2_wI9c6: {
                            width: `max((${componentViewport?.width || "100vw"} - 112px) / 2, 200px)`
                          },
                          joJFxuI2x: {
                            width: `max((${componentViewport?.width || "100vw"} - 112px) / 2, 200px)`
                          },
                          sViTHTOwc: {
                            width: `max((${componentViewport?.width || "100vw"} - 112px) / 2, 200px)`
                          },
                          VX1ORlDeH: {
                            width: `max(${componentViewport?.width || "100vw"} - 32px, 200px)`
                          },
                          VzH73fCxD: {
                            width: `max(${componentViewport?.width || "100vw"} - 32px, 200px)`
                          }
                        }, baseVariant, gestureVariant)}>{_jsx6(motion6.div, {
                            className: "framer-1xodiex-container",
                            layoutDependency,
                            layoutId: "tlf5MUhqZ-container",
                            children: _jsx6(ggQm2GY_4_default, {
                              AeTnLPbbQ: toResponsiveImage2(IInnB9Z9VQaSQ54AbN2),
                              gxFOb9Xvl: Md0mC9r2HQaSQ54AbN2,
                              height: "100%",
                              hi1Tl2FXN: toResponsiveImage2(LyABwAfNOQaSQ54AbN2),
                              id: "tlf5MUhqZ",
                              layoutId: "tlf5MUhqZ",
                              STKBIxOe3: resolvedLinks[0],
                              style: {
                                width: "100%"
                              },
                              Vssf0bHn1: CKesnHXR4QaSQ54AbN2,
                              width: "100%",
                              ...addPropertyOverrides4({
                                aKo1tWEXv: {
                                  STKBIxOe3: resolvedLinks[2]
                                },
                                e3Rhf2vYV: {
                                  STKBIxOe3: resolvedLinks[8],
                                  style: {
                                    height: "100%",
                                    width: "100%"
                                  }
                                },
                                iT2_wI9c6: {
                                  STKBIxOe3: resolvedLinks[3]
                                },
                                joJFxuI2x: {
                                  STKBIxOe3: resolvedLinks[4]
                                },
                                Rn9cVraJb: {
                                  STKBIxOe3: resolvedLinks[1]
                                },
                                sViTHTOwc: {
                                  STKBIxOe3: resolvedLinks[5]
                                },
                                VX1ORlDeH: {
                                  STKBIxOe3: resolvedLinks[7],
                                  style: {
                                    height: "100%",
                                    width: "100%"
                                  }
                                },
                                VzH73fCxD: {
                                  STKBIxOe3: resolvedLinks[6],
                                  style: {
                                    height: "100%",
                                    width: "100%"
                                  }
                                }
                              }, baseVariant, gestureVariant)
                            })
                          })}</ComponentViewportProvider>}</ResolveLinks>}</PathVariablesContext.Provider>}</LayoutGroup5>;
                })}{isDisplayed() && <ComponentViewportProvider>{_jsx6(motion6.div, {
                    className: "framer-ecqw6a-container",
                    layoutDependency,
                    layoutId: "c7Ip2lG7U-container",
                    transformTemplate: transformTemplate12,
                    children: <YHbXewHRr_default height="100%" id="c7Ip2lG7U" layoutId="c7Ip2lG7U" variant={loaderVariants(paginationInfo, {
                      disabled: "X2dtqOTcB",
                      loading: "hlVf9MYOU"
                    }, "FdT7iBApf")} width="100%" Wld3NDzSj={Wld3NDzSj1u4o9hu({
                      paginationInfo: loadMore
                    })} />
                  })}</ComponentViewportProvider>}</>}</QueryData>
          })]
        })}</Transition5>}</Variants5>}</LayoutGroup5>;
});
var css12 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-DL1Uj.framer-vxamlg, .framer-DL1Uj .framer-vxamlg { display: block; }", ".framer-DL1Uj.framer-td2zla { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: center; overflow: visible; padding: 120px 32px 120px 32px; position: relative; width: 1280px; }", ".framer-DL1Uj .framer-14o3r3k { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-DL1Uj .framer-eweh2i { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }", ".framer-DL1Uj .framer-mbw3sm { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-DL1Uj .framer-eunqvs-container, .framer-DL1Uj .framer-174joj7-container, .framer-DL1Uj .framer-znswq2-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-DL1Uj .framer-alfm1t { display: grid; flex: none; gap: 48px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(200px, 1fr)); height: min-content; justify-content: center; padding: 0px 0px 100px 0px; position: relative; width: 100%; }", ".framer-DL1Uj .framer-1xodiex-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }", ".framer-DL1Uj .framer-ecqw6a-container { bottom: 0px; flex: none; height: auto; left: 50%; position: absolute; width: auto; z-index: 5; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-DL1Uj.framer-td2zla, .framer-DL1Uj .framer-14o3r3k, .framer-DL1Uj .framer-mbw3sm { gap: 0px; } .framer-DL1Uj.framer-td2zla > * { margin: 0px; margin-bottom: calc(64px / 2); margin-top: calc(64px / 2); } .framer-DL1Uj.framer-td2zla > :first-child { margin-top: 0px; } .framer-DL1Uj.framer-td2zla > :last-child { margin-bottom: 0px; } .framer-DL1Uj .framer-14o3r3k > * { margin: 0px; margin-left: calc(64px / 2); margin-right: calc(64px / 2); } .framer-DL1Uj .framer-14o3r3k > :first-child, .framer-DL1Uj .framer-mbw3sm > :first-child { margin-left: 0px; } .framer-DL1Uj .framer-14o3r3k > :last-child, .framer-DL1Uj .framer-mbw3sm > :last-child { margin-right: 0px; } .framer-DL1Uj .framer-mbw3sm > * { margin: 0px; margin-left: calc(48px / 2); margin-right: calc(48px / 2); } }", ".framer-DL1Uj.framer-v-1kg71uj.framer-td2zla, .framer-DL1Uj.framer-v-1s8fezn.framer-td2zla, .framer-DL1Uj.framer-v-inv1u4.framer-td2zla { padding: 80px 32px 80px 32px; width: 704px; }", ".framer-DL1Uj.framer-v-1kg71uj .framer-14o3r3k { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 48px; }", ".framer-DL1Uj.framer-v-1kg71uj .framer-eweh2i, .framer-DL1Uj.framer-v-1s8fezn .framer-eweh2i, .framer-DL1Uj.framer-v-inv1u4 .framer-eweh2i, .framer-DL1Uj.framer-v-4nnf6v .framer-eweh2i, .framer-DL1Uj.framer-v-1de3q9q .framer-eweh2i, .framer-DL1Uj.framer-v-14j1cgw .framer-eweh2i { flex: none; width: 100%; }", ".framer-DL1Uj.framer-v-1kg71uj .framer-alfm1t, .framer-DL1Uj.framer-v-1s8fezn .framer-alfm1t, .framer-DL1Uj.framer-v-inv1u4 .framer-alfm1t { grid-template-columns: repeat(2, minmax(200px, 1fr)); }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-DL1Uj.framer-v-1kg71uj .framer-14o3r3k { gap: 0px; } .framer-DL1Uj.framer-v-1kg71uj .framer-14o3r3k > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-DL1Uj.framer-v-1kg71uj .framer-14o3r3k > :first-child { margin-top: 0px; } .framer-DL1Uj.framer-v-1kg71uj .framer-14o3r3k > :last-child { margin-bottom: 0px; } }", ".framer-DL1Uj.framer-v-1s8fezn .framer-14o3r3k, .framer-DL1Uj.framer-v-inv1u4 .framer-14o3r3k { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 48px; justify-content: flex-start; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-DL1Uj.framer-v-1s8fezn .framer-14o3r3k { gap: 0px; } .framer-DL1Uj.framer-v-1s8fezn .framer-14o3r3k > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-DL1Uj.framer-v-1s8fezn .framer-14o3r3k > :first-child { margin-top: 0px; } .framer-DL1Uj.framer-v-1s8fezn .framer-14o3r3k > :last-child { margin-bottom: 0px; } }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-DL1Uj.framer-v-inv1u4 .framer-14o3r3k { gap: 0px; } .framer-DL1Uj.framer-v-inv1u4 .framer-14o3r3k > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-DL1Uj.framer-v-inv1u4 .framer-14o3r3k > :first-child { margin-top: 0px; } .framer-DL1Uj.framer-v-inv1u4 .framer-14o3r3k > :last-child { margin-bottom: 0px; } }", ".framer-DL1Uj.framer-v-4nnf6v.framer-td2zla, .framer-DL1Uj.framer-v-1de3q9q.framer-td2zla, .framer-DL1Uj.framer-v-14j1cgw.framer-td2zla { gap: 48px; padding: 60px 16px 60px 16px; width: 288px; }", ".framer-DL1Uj.framer-v-4nnf6v .framer-14o3r3k { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 32px; }", ".framer-DL1Uj.framer-v-4nnf6v .framer-mbw3sm { gap: 32px; justify-content: flex-start; overflow: hidden; overflow-x: auto; width: 100%; }", ".framer-DL1Uj.framer-v-4nnf6v .framer-alfm1t, .framer-DL1Uj.framer-v-1de3q9q .framer-alfm1t, .framer-DL1Uj.framer-v-14j1cgw .framer-alfm1t { grid-template-columns: repeat(1, minmax(200px, 1fr)); }", ".framer-DL1Uj.framer-v-4nnf6v .framer-1xodiex-container, .framer-DL1Uj.framer-v-1de3q9q .framer-1xodiex-container, .framer-DL1Uj.framer-v-14j1cgw .framer-1xodiex-container { height: 300px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-DL1Uj.framer-v-4nnf6v.framer-td2zla, .framer-DL1Uj.framer-v-4nnf6v .framer-14o3r3k, .framer-DL1Uj.framer-v-4nnf6v .framer-mbw3sm { gap: 0px; } .framer-DL1Uj.framer-v-4nnf6v.framer-td2zla > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-DL1Uj.framer-v-4nnf6v.framer-td2zla > :first-child, .framer-DL1Uj.framer-v-4nnf6v .framer-14o3r3k > :first-child { margin-top: 0px; } .framer-DL1Uj.framer-v-4nnf6v.framer-td2zla > :last-child, .framer-DL1Uj.framer-v-4nnf6v .framer-14o3r3k > :last-child { margin-bottom: 0px; } .framer-DL1Uj.framer-v-4nnf6v .framer-14o3r3k > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-DL1Uj.framer-v-4nnf6v .framer-mbw3sm > * { margin: 0px; margin-left: calc(32px / 2); margin-right: calc(32px / 2); } .framer-DL1Uj.framer-v-4nnf6v .framer-mbw3sm > :first-child { margin-left: 0px; } .framer-DL1Uj.framer-v-4nnf6v .framer-mbw3sm > :last-child { margin-right: 0px; } }", ".framer-DL1Uj.framer-v-1de3q9q .framer-14o3r3k, .framer-DL1Uj.framer-v-14j1cgw .framer-14o3r3k { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 24px; justify-content: flex-start; }", ".framer-DL1Uj.framer-v-1de3q9q .framer-mbw3sm, .framer-DL1Uj.framer-v-14j1cgw .framer-mbw3sm { justify-content: flex-start; overflow: hidden; overflow-x: auto; width: 100%; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-DL1Uj.framer-v-1de3q9q.framer-td2zla, .framer-DL1Uj.framer-v-1de3q9q .framer-14o3r3k { gap: 0px; } .framer-DL1Uj.framer-v-1de3q9q.framer-td2zla > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-DL1Uj.framer-v-1de3q9q.framer-td2zla > :first-child, .framer-DL1Uj.framer-v-1de3q9q .framer-14o3r3k > :first-child { margin-top: 0px; } .framer-DL1Uj.framer-v-1de3q9q.framer-td2zla > :last-child, .framer-DL1Uj.framer-v-1de3q9q .framer-14o3r3k > :last-child { margin-bottom: 0px; } .framer-DL1Uj.framer-v-1de3q9q .framer-14o3r3k > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-DL1Uj.framer-v-14j1cgw.framer-td2zla, .framer-DL1Uj.framer-v-14j1cgw .framer-14o3r3k { gap: 0px; } .framer-DL1Uj.framer-v-14j1cgw.framer-td2zla > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-DL1Uj.framer-v-14j1cgw.framer-td2zla > :first-child, .framer-DL1Uj.framer-v-14j1cgw .framer-14o3r3k > :first-child { margin-top: 0px; } .framer-DL1Uj.framer-v-14j1cgw.framer-td2zla > :last-child, .framer-DL1Uj.framer-v-14j1cgw .framer-14o3r3k > :last-child { margin-bottom: 0px; } .framer-DL1Uj.framer-v-14j1cgw .framer-14o3r3k > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } }", ...css5, '.framer-DL1Uj[data-hide-scrollbars="true"]::-webkit-scrollbar, .framer-DL1Uj [data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }', '.framer-DL1Uj[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb, .framer-DL1Uj [data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }'];
var FramerZzbMsXH1T = withCSS6(Component6, css12, "framer-DL1Uj");
var ZzbMsXH1T_default = FramerZzbMsXH1T;
FramerZzbMsXH1T.displayName = "Blog/Prototype";
FramerZzbMsXH1T.defaultProps = {
  height: 1399,
  width: 1280
};
addPropertyControls6(FramerZzbMsXH1T, {
  variant: {
    options: ["bmxbJlBdJ", "Rn9cVraJb", "aKo1tWEXv", "iT2_wI9c6", "joJFxuI2x", "sViTHTOwc", "VzH73fCxD", "VX1ORlDeH", "e3Rhf2vYV"],
    optionTitles: ["All", "Dev", "Eng", "All Tablet", "Dev Tablet", "Eng Tablet", "All Mobile", "Dev Mobile", "Eng Mobile"],
    title: "Variant",
    type: ControlType6.Enum
  }
});
addFonts5(FramerZzbMsXH1T, [{
  explicitInter: true,
  fonts: [{
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
    url: "https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
    url: "https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+1F00-1FFF",
    url: "https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0370-03FF",
    url: "https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
    url: "https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    url: "https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2",
    weight: "400"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
    url: "https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2",
    weight: "400"
  }]
}, ...TabFonts, ...BlogCardFonts, ...LoadMoreButtonFonts, ...getFontsFromSharedStyle5(fonts3)], {
  supportsExplicitInterCodegen: true
});
var __FramerMetadata__2 = {
  "exports": {
    "default": {
      "type": "reactComponent",
      "name": "FramerZzbMsXH1T",
      "slots": [],
      "annotations": {
        "framerComponentViewportWidth": "true",
        "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"Rn9cVraJb":{"layout":["fixed","auto"]},"aKo1tWEXv":{"layout":["fixed","auto"]},"iT2_wI9c6":{"layout":["fixed","auto"]},"joJFxuI2x":{"layout":["fixed","auto"]},"sViTHTOwc":{"layout":["fixed","auto"]},"VzH73fCxD":{"layout":["fixed","auto"]},"VX1ORlDeH":{"layout":["fixed","auto"]},"e3Rhf2vYV":{"layout":["fixed","auto"]}}}',
        "framerIntrinsicWidth": "1280",
        "framerImmutableVariables": "true",
        "framerContractVersion": "1",
        "framerDisplayContentsDiv": "false",
        "framerIntrinsicHeight": "1399"
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
var _OriginalComponent = ZzbMsXH1T_default;
function BlogPrototypeWrapped(props) {
  var _variant = useVariant(props.variant);
  var _inner = (_variant !== undefined) ? { ...props, variant: _variant } : props;
  return _ctxJsx(ContextProviders, { children: _ctxJsx(_OriginalComponent, _inner) });
}
Object.assign(BlogPrototypeWrapped, _OriginalComponent);
export {  __FramerMetadata__2 as __FramerMetadata__,  BlogPrototypeWrapped as default   };