"use client"
// http-url:https://framerusercontent.com/modules/j84LjY0eCmhCprbBXuU3/orQf7qcGpCyjXPnZA6XO/tS8pKENYq.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, getFontsFromSharedStyle, getLoadingLazyAtYPosition, Image, RichText, useActiveVariantCallback, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "@proofly-framer/runtime";
import { LayoutGroup, motion, MotionConfigContext } from "@proofly-framer/runtime";
import * as React from "react";

// http-url:https://framerusercontent.com/modules/4Gv6O9WcEjYFF3D7KrRp/D2m1QMhoIrhAelQp8PSY/mBypMumWB.js
import { fontStore } from "@proofly-framer/runtime";
fontStore.loadFonts(["CUSTOM;Haffer Bold"]);
var fonts = [{
  explicitInter: true,
  fonts: [{
    family: "Haffer Bold",
    source: "custom",
    url: "https://framerusercontent.com/assets/eRqmC6W9PktN8mUcnwel9B6wmPs.woff"
  }]
}];
var css = ['.framer-RGOBY .framer-styles-preset-r2slzk:not(.rich-text-wrapper), .framer-RGOBY .framer-styles-preset-r2slzk.rich-text-wrapper h4 { --framer-font-family: "Haffer Bold", "Haffer Bold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 30px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 100%; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }', '@media (max-width: 1279px) and (min-width: 768px) { .framer-RGOBY .framer-styles-preset-r2slzk:not(.rich-text-wrapper), .framer-RGOBY .framer-styles-preset-r2slzk.rich-text-wrapper h4 { --framer-font-family: "Haffer Bold", "Haffer Bold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 28px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 100%; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }', '@media (max-width: 767px) and (min-width: 0px) { .framer-RGOBY .framer-styles-preset-r2slzk:not(.rich-text-wrapper), .framer-RGOBY .framer-styles-preset-r2slzk.rich-text-wrapper h4 { --framer-font-family: "Haffer Bold", "Haffer Bold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 100%; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }'];
var className = "framer-RGOBY";

// http-url:https://framerusercontent.com/modules/1yPBes2MOQpyJo6DFDOk/MdZClTJzdIorZJNcVjTw/UDEB09jjg.js
import { fontStore as fontStore2 } from "@proofly-framer/runtime";
import { jsx as _ctxJsx } from "react/jsx-runtime";
import { ContextProviders, useVariant } from "@proofly-framer/runtime";
fontStore2.loadFonts(["CUSTOM;Haffer Regular"]);
var fonts2 = [{
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
var css2 = ['.framer-6hVw8 .framer-styles-preset-1p8b08q:not(.rich-text-wrapper), .framer-6hVw8 .framer-styles-preset-1p8b08q.rich-text-wrapper p { --framer-font-family: "Haffer Regular", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 430; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, #eaeaeb); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; }', '@media (max-width: 810px) and (min-width: 510px) { .framer-6hVw8 .framer-styles-preset-1p8b08q:not(.rich-text-wrapper), .framer-6hVw8 .framer-styles-preset-1p8b08q.rich-text-wrapper p { --framer-font-family: "Haffer Regular", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 430; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, #eaeaeb); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }', '@media (max-width: 509px) and (min-width: 0px) { .framer-6hVw8 .framer-styles-preset-1p8b08q:not(.rich-text-wrapper), .framer-6hVw8 .framer-styles-preset-1p8b08q.rich-text-wrapper p { --framer-font-family: "Haffer Regular", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 430; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, #eaeaeb); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }'];
var className2 = "framer-6hVw8";

// http-url:https://framerusercontent.com/modules/j84LjY0eCmhCprbBXuU3/orQf7qcGpCyjXPnZA6XO/tS8pKENYq.js
var serializationHash = "framer-nDmeh";
var variantClassNames = {
  gZQAMFVm8: "framer-v-1h1llju"
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
var Variants = motion(React.Fragment);
var getProps = ({
  click,
  height,
  id,
  width,
  ...props
}) => {
  return {
    ...props,
    mtAFY53Fk: click ?? props.mtAFY53Fk
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
    className: className3,
    layoutId,
    variant,
    mtAFY53Fk,
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
    defaultVariant: "gZQAMFVm8",
    variant,
    variantClassNames
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const {
    activeVariantCallback,
    delay
  } = useActiveVariantCallback(baseVariant);
  const onTapb6kfat = activeVariantCallback(async (...args) => {
    setGestureState({
      isPressed: false
    });
    if (mtAFY53Fk) {
      const res = await mtAFY53Fk(...args);
      if (res === false) return false;
    }
  });
  const ref1 = React.useRef(null);
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [className, className2];
  const componentViewport = useComponentViewport();
  return <LayoutGroup id={layoutId ?? defaultLayoutId}>{<Variants animate={variants} initial={false}>{<Transition value={transition1}>{_jsxs(motion.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx(serializationHash, ...sharedStyleClassNames, "framer-1h1llju", className3, classNames),
          "data-framer-name": "Variant 1",
          "data-highlight": true,
          layoutDependency,
          layoutId: "gZQAMFVm8",
          onTap: onTapb6kfat,
          ref: ref ?? ref1,
          style: {
            backgroundColor: "var(--token-7ce68db9-0723-4469-83ef-663a6e703840, rgb(43, 43, 61))",
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            ...style
          },
          children: [<Image background={{
            alt: "",
            fit: "fill",
            intrinsicHeight: 240.5,
            intrinsicWidth: 240.5,
            loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 0 + ((componentViewport?.height || 398) - 0 - ((componentViewport?.height || 398) - 0) * 1)),
            pixelHeight: 237,
            pixelWidth: 227,
            positionX: "center",
            positionY: "center",
            src: "https://framerusercontent.com/images/WjXJl1WWrMSn70pYDfpwLg7EQt4.png"
          }} className="framer-1wd6xod" data-framer-name="Image" layoutDependency={layoutDependency} layoutId="BDR6qwp58" />, _jsxs(motion.div, {
            className: "framer-1wmlswh",
            "data-framer-name": "name",
            layoutDependency,
            layoutId: "nFDtfAmh0",
            children: [<RichText __fromCanvasComponent className="framer-y1zfpv" data-framer-name="Heading5" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="IP7f3mhUr" style={{
              "--framer-paragraph-spacing": "0px"
            }} verticalAlignment="top" withExternalLayout>{<>{_jsxs(motion.h4, {
                  className: "framer-styles-preset-r2slzk",
                  "data-styles-preset": "mBypMumWB",
                  children: ["Justin ", _jsx(motion.br, {}), "Kosmides"]
                })}</>}</RichText>, <RichText __fromCanvasComponent className="framer-1crqunb" data-framer-name="Subtitle2" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="AB5XqSVNG" style={{
              "--extracted-r6o4lv": "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(224, 224, 255))",
              "--framer-paragraph-spacing": "0px"
            }} verticalAlignment="top" withExternalLayout>{<>{_jsxs(motion.p, {
                  style: {
                    "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                    "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                    "--framer-font-size": "13px",
                    "--framer-line-height": "120%",
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(224, 224, 255)))"
                  },
                  children: ["CO-FOUNDER, ", _jsx(motion.br, {}), "CHIEF EXECUTIVE OFFICER"]
                })}</>}</RichText>, <RichText __fromCanvasComponent className="framer-1lz104h" data-framer-name="Subtitle2" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="ahboEaZTn" style={{
              "--extracted-r6o4lv": "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))",
              "--framer-paragraph-spacing": "0px"
            }} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.p, {
                  className: "framer-styles-preset-1p8b08q",
                  "data-styles-preset": "UDEB09jjg",
                  style: {
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))"
                  },
                  children: "A seasoned investment banker, discovered his passion for e-biking while living in Brooklyn. Justin joined Vela, a Sao Paulo-based e-bike manufacturer, as CEO in 2020. Justin moved Vela\u2019s primary manufacturing to Detroit in 2022 to ensure reliable supply lines. Inspired by collaboration at Brooklyn Newlab and the Michigan Central incubator, Justin partnered with Chris Nolte in 2023 to found Bloom, optimizing logistics and fostering domestic production to raise industry standards."
                })}</>}</RichText>]
          })]
        })}</Transition>}</Variants>}</LayoutGroup>;
});
var css3 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-nDmeh.framer-6tzfes, .framer-nDmeh .framer-6tzfes { display: block; }", ".framer-nDmeh.framer-1h1llju { align-content: flex-end; align-items: flex-end; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 398px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 519px; will-change: var(--framer-will-change-override, transform); }", ".framer-nDmeh .framer-1wd6xod { flex: none; height: 100%; overflow: visible; position: relative; width: 175px; }", ".framer-nDmeh .framer-1wmlswh { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 16px; position: relative; width: 1px; }", ".framer-nDmeh .framer-y1zfpv, .framer-nDmeh .framer-1crqunb, .framer-nDmeh .framer-1lz104h { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-nDmeh.framer-1h1llju, .framer-nDmeh .framer-1wmlswh { gap: 0px; } .framer-nDmeh.framer-1h1llju > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-nDmeh.framer-1h1llju > :first-child { margin-left: 0px; } .framer-nDmeh.framer-1h1llju > :last-child { margin-right: 0px; } .framer-nDmeh .framer-1wmlswh > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-nDmeh .framer-1wmlswh > :first-child { margin-top: 0px; } .framer-nDmeh .framer-1wmlswh > :last-child { margin-bottom: 0px; } }", ...css, ...css2];
var FramertS8pKENYq = withCSS(Component, css3, "framer-nDmeh");
var tS8pKENYq_default = FramertS8pKENYq;
FramertS8pKENYq.displayName = "leadership card text";
FramertS8pKENYq.defaultProps = {
  height: 398,
  width: 519
};
addPropertyControls(FramertS8pKENYq, {
  mtAFY53Fk: {
    title: "Click",
    type: ControlType.EventHandler
  }
});
addFonts(FramertS8pKENYq, [{
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
}, ...getFontsFromSharedStyle(fonts), ...getFontsFromSharedStyle(fonts2)], {
  supportsExplicitInterCodegen: true
});
var __FramerMetadata__ = {
  "exports": {
    "default": {
      "type": "reactComponent",
      "name": "FramertS8pKENYq",
      "slots": [],
      "annotations": {
        "framerIntrinsicWidth": "519",
        "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]}}}',
        "framerComponentViewportWidth": "true",
        "framerVariables": '{"mtAFY53Fk":"click"}',
        "framerImmutableVariables": "true",
        "framerContractVersion": "1",
        "framerIntrinsicHeight": "398",
        "framerDisplayContentsDiv": "false"
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
var _OriginalComponent = tS8pKENYq_default;
function LeadershipcardtextWrapped(props) {
  var _variant = useVariant(props.variant);
  var _inner = (_variant !== undefined) ? { ...props, variant: _variant } : props;
  return _ctxJsx(ContextProviders, { children: _ctxJsx(_OriginalComponent, _inner) });
}
Object.assign(LeadershipcardtextWrapped, _OriginalComponent);
export {  __FramerMetadata__,  LeadershipcardtextWrapped as default   };