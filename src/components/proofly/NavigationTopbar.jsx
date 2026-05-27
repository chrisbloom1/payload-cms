"use client"
// http-url:https://framerusercontent.com/modules/8DY6qJpLeos8BgSx6NsQ/CU6PYIZ9G94vtsVnME9M/vwOltRhhT.js
import { jsx as _jsx6, jsxs as _jsxs4 } from "react/jsx-runtime";
import { addFonts as addFonts5, addPropertyControls as addPropertyControls6, ComponentViewportProvider as ComponentViewportProvider2, ControlType as ControlType6, cx as cx6, getFonts as getFonts3, getFontsFromSharedStyle as getFontsFromSharedStyle3, Link as Link3, RichText as RichText3, SVG as SVG2, useActiveVariantCallback as useActiveVariantCallback3, useComponentViewport as useComponentViewport5, useLocaleInfo as useLocaleInfo5, useVariantState as useVariantState5, withCSS as withCSS6, withFX } from "@proofly-framer/runtime";
import { LayoutGroup as LayoutGroup5, motion as motion6, MotionConfigContext as MotionConfigContext5 } from "@proofly-framer/runtime";
import * as React6 from "react";

// Extracted SVG assets
const __svg_1 = '<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 5.5 5.25 L 0 10.5" fill="transparent" height="10.5px" id="pTO_zwTXv" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(13.75 6.75)" width="5.5px"/><path d="M 14.25 0 L 0 0" fill="transparent" height="1px" id="Jh7NTfV71" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(4.75 12)" width="14.25px"/></svg>';
const __svg_2 = "<svg width=\"323\" height=\"76\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#a)\"><path d=\"M0 .847h32.182c13.021 0 21.808 7.517 21.808 18.738 0 6.67-4.34 12.704-10.057 15.137 8.15 2.33 14.184 9.634 14.184 18.1 0 13.338-10.481 22.126-25.725 22.126H0V.847Zm37.9 21.385c0-4.234-3.494-7.197-8.365-7.197H16.831v14.398h12.704c4.87 0 8.364-2.861 8.364-7.201Zm3.386 29.326c0-5.294-4.34-8.895-10.588-8.895H16.831v18.105h13.872c6.243 0 10.583-3.81 10.583-9.21ZM65.736 0h15.668v74.952H65.736V0Zm23.711 48.17c0-16.09 11.96-27.418 28.373-27.418 16.514 0 28.372 11.328 28.372 27.418 0 16.199-11.965 27.633-28.372 27.633-16.515-.004-28.373-11.541-28.373-27.633Zm41.077 0c0-8.47-5.187-14.183-12.704-14.183-7.518 0-12.598 5.61-12.598 14.183 0 8.574 5.08 14.398 12.598 14.398 7.517 0 12.704-5.824 12.704-14.398Zm21.171 0c0-16.09 11.96-27.418 28.373-27.418 16.514 0 28.372 11.328 28.372 27.418 0 16.199-11.965 27.633-28.372 27.633-16.515-.004-28.373-11.541-28.373-27.633Zm41.077 0c0-8.47-5.187-14.183-12.704-14.183-7.518 0-12.598 5.605-12.598 14.183 0 8.574 5.08 14.398 12.598 14.398 7.517 0 12.704-5.824 12.704-14.398Zm107.661-7.41v34.192h-15.561V44.147c0-6.141-3.177-9.742-8.257-9.742-6.671 0-10.267 6.141-10.267 13.975v26.572H250.68V44.147c0-6.141-2.963-9.742-8.15-9.742-6.671 0-10.374 6.141-10.374 13.975v26.572h-15.668V21.599h15.668v6.456c3.07-4.233 9.211-7.303 16.305-7.303 6.987 0 13.128 3.28 15.138 7.834 4.024-4.554 10.797-7.834 17.254-7.834 11.429 0 19.58 7.513 19.58 20.008Z\" fill=\"#fff\"/><path d=\"M322.962 31.875h-15.673V15.668h-16.207V0h31.88v31.875Z\" fill=\"url(#b)\"/></g><defs><linearGradient id=\"b\" x1=\"307.022\" y1=\"0\" x2=\"307.022\" y2=\"31.875\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#FF5212\"/><stop offset=\"1\" stop-color=\"#FF195E\"/></linearGradient><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h323v76H0z\"/></clipPath></defs></svg>";
const __svg_3 = "<svg width=\"323\" height=\"76\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#a)\"><path d=\"M0 .847h32.182c13.021 0 21.808 7.517 21.808 18.738 0 6.67-4.34 12.704-10.057 15.137 8.15 2.33 14.184 9.634 14.184 18.1 0 13.338-10.481 22.126-25.725 22.126H0V.847Zm37.9 21.385c0-4.234-3.494-7.197-8.365-7.197H16.831v14.398h12.704c4.87 0 8.364-2.861 8.364-7.201Zm3.386 29.326c0-5.294-4.34-8.895-10.588-8.895H16.831v18.105h13.872c6.243 0 10.583-3.81 10.583-9.21ZM65.736 0h15.668v74.952H65.736V0Zm23.711 48.17c0-16.09 11.96-27.418 28.373-27.418 16.514 0 28.372 11.328 28.372 27.418 0 16.199-11.965 27.633-28.372 27.633-16.515-.004-28.373-11.541-28.373-27.633Zm41.077 0c0-8.47-5.187-14.183-12.704-14.183-7.518 0-12.598 5.61-12.598 14.183 0 8.574 5.08 14.398 12.598 14.398 7.517 0 12.704-5.824 12.704-14.398Zm21.171 0c0-16.09 11.96-27.418 28.373-27.418 16.514 0 28.372 11.328 28.372 27.418 0 16.199-11.965 27.633-28.372 27.633-16.515-.004-28.373-11.541-28.373-27.633Zm41.077 0c0-8.47-5.187-14.183-12.704-14.183-7.518 0-12.598 5.605-12.598 14.183 0 8.574 5.08 14.398 12.598 14.398 7.517 0 12.704-5.824 12.704-14.398Zm107.661-7.41v34.192h-15.561V44.147c0-6.141-3.177-9.742-8.257-9.742-6.671 0-10.267 6.141-10.267 13.975v26.572H250.68V44.147c0-6.141-2.963-9.742-8.15-9.742-6.671 0-10.374 6.141-10.374 13.975v26.572h-15.668V21.599h15.668v6.456c3.07-4.233 9.211-7.303 16.305-7.303 6.987 0 13.128 3.28 15.138 7.834 4.024-4.554 10.797-7.834 17.254-7.834 11.429 0 19.58 7.513 19.58 20.008Z\" fill=\"#fff\"/><path d=\"M322.962 31.875h-15.673V15.668h-16.207V0h31.88v31.875Z\" fill=\"url(#b)\"/></g><defs><linearGradient id=\"b\" x1=\"307.022\" y1=\"0\" x2=\"307.022\" y2=\"31.875\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#FF5212\"/><stop offset=\"1\" stop-color=\"#FF195E\"/></linearGradient><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h323v76H0z\"/></clipPath></defs></svg>";


// http-url:https://framerusercontent.com/modules/hgeSF0BKMgFnHMsI4lzF/wjzfasXY3IfLab2RiVX3/F9x4QnoDS.js
import { fontStore } from "@proofly-framer/runtime";
fontStore.loadFonts([]);
var fonts = [{
  explicitInter: true,
  fonts: []
}];
var css = ['.framer-ogr9j .framer-styles-preset-7o8msg:not(.rich-text-wrapper), .framer-ogr9j .framer-styles-preset-7o8msg.rich-text-wrapper a { --framer-link-current-text-color: var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, #ffffff); --framer-link-current-text-decoration: underline; --framer-link-hover-text-color: var(--token-2ae4d622-3758-4fad-a56d-08fa00cc7638, #adadc7); --framer-link-hover-text-decoration: underline; --framer-link-text-decoration: none; }'];
var className = "framer-ogr9j";

// http-url:https://framerusercontent.com/modules/8IGKvfivqDrd8lwX8E2I/0TROeGiEJvIIoYVZIYCc/UrNHzCTiy.js
import { fontStore as fontStore2 } from "@proofly-framer/runtime";
fontStore2.loadFonts(["CUSTOM;Haffer Bold"]);
var fonts2 = [{
  explicitInter: true,
  fonts: [{
    family: "Haffer Bold",
    source: "custom",
    url: "https://framerusercontent.com/assets/eRqmC6W9PktN8mUcnwel9B6wmPs.woff"
  }]
}];
var css2 = ['.framer-ohnmF .framer-styles-preset-19ujo0x:not(.rich-text-wrapper), .framer-ohnmF .framer-styles-preset-19ujo0x.rich-text-wrapper h3 { --framer-font-family: "Haffer Bold", "Haffer Bold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 40px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 100%; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }', '@media (max-width: 1535px) and (min-width: 1280px) { .framer-ohnmF .framer-styles-preset-19ujo0x:not(.rich-text-wrapper), .framer-ohnmF .framer-styles-preset-19ujo0x.rich-text-wrapper h3 { --framer-font-family: "Haffer Bold", "Haffer Bold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 40px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 100%; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }', '@media (max-width: 1279px) and (min-width: 768px) { .framer-ohnmF .framer-styles-preset-19ujo0x:not(.rich-text-wrapper), .framer-ohnmF .framer-styles-preset-19ujo0x.rich-text-wrapper h3 { --framer-font-family: "Haffer Bold", "Haffer Bold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 36px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 100%; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }', '@media (max-width: 767px) and (min-width: 0px) { .framer-ohnmF .framer-styles-preset-19ujo0x:not(.rich-text-wrapper), .framer-ohnmF .framer-styles-preset-19ujo0x.rich-text-wrapper h3 { --framer-font-family: "Haffer Bold", "Haffer Bold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 100%; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }'];
var className2 = "framer-ohnmF";

// http-url:https://framerusercontent.com/modules/7g5BRNeId9oR4L1iJ9ca/E815L5TFMonz1PhTCqRG/BM6dW4dQJ.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, useActiveVariantCallback, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "@proofly-framer/runtime";
import { LayoutGroup, motion, MotionConfigContext } from "@proofly-framer/runtime";
import * as React from "react";
var cycleOrder = ["giz4yYTJn", "at430vW36"];
var serializationHash = "framer-7L1CG";
var variantClassNames = {
  at430vW36: "framer-v-1ld6zf9",
  giz4yYTJn: "framer-v-1av4fzl"
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
var Variants = motion(React.Fragment);
var humanReadableVariantMap = {
  Close: "at430vW36",
  Menu: "giz4yYTJn"
};
var getProps = ({
  height,
  id,
  tap,
  width,
  ...props
}) => {
  var _humanReadableVariantMap_props_variant, _ref;
  return {
    ...props,
    variant: (_ref = (_humanReadableVariantMap_props_variant = humanReadableVariantMap[props.variant]) !== null && _humanReadableVariantMap_props_variant !== void 0 ? _humanReadableVariantMap_props_variant : props.variant) !== null && _ref !== void 0 ? _ref : "giz4yYTJn",
    XKaY3MrGu: tap !== null && tap !== void 0 ? tap : props.XKaY3MrGu
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
    className: className5,
    layoutId,
    variant,
    XKaY3MrGu,
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
    defaultVariant: "giz4yYTJn",
    variant,
    variantClassNames
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const {
    activeVariantCallback,
    delay
  } = useActiveVariantCallback(baseVariant);
  const onTapc2fruv = activeVariantCallback(async (...args) => {
    setGestureState({
      isPressed: false
    });
    if (XKaY3MrGu) {
      const res = await XKaY3MrGu(...args);
      if (res === false) return false;
    }
  });
  const ref1 = React.useRef(null);
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport();
  return <LayoutGroup id={layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId}>{<Variants animate={variants} initial={false}>{<Transition value={transition1}>{_jsxs(motion.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx(serializationHash, ...sharedStyleClassNames, "framer-1av4fzl", className5, classNames),
          "data-framer-name": "Menu",
          "data-highlight": true,
          layoutDependency,
          layoutId: "giz4yYTJn",
          onTap: onTapc2fruv,
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: {
            ...style
          },
          ...addPropertyOverrides({
            at430vW36: {
              "data-framer-name": "Close"
            }
          }, baseVariant, gestureVariant),
          children: [_jsx(motion.div, {
            className: "framer-195idzx",
            "data-framer-name": "Bottom",
            layoutDependency,
            layoutId: "Y8eu91fC7",
            style: {
              backgroundColor: "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))",
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              rotate: 0
            },
            variants: {
              at430vW36: {
                rotate: -45
              }
            }
          }), _jsx(motion.div, {
            className: "framer-1x62hc",
            "data-framer-name": "Top",
            layoutDependency,
            layoutId: "b0GU_P9Ca",
            style: {
              backgroundColor: "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))",
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              rotate: 0
            },
            variants: {
              at430vW36: {
                rotate: 45
              }
            }
          })]
        })}</Transition>}</Variants>}</LayoutGroup>;
});
var css3 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-7L1CG.framer-1q4vfm, .framer-7L1CG .framer-1q4vfm { display: block; }", ".framer-7L1CG.framer-1av4fzl { cursor: pointer; height: 44px; overflow: hidden; position: relative; width: 44px; }", ".framer-7L1CG .framer-195idzx { flex: none; height: 2px; left: calc(50.00000000000002% - 20px / 2); overflow: hidden; position: absolute; top: calc(62.50000000000002% - 2px / 2); width: 20px; will-change: var(--framer-will-change-override, transform); }", ".framer-7L1CG .framer-1x62hc { flex: none; height: 2px; left: calc(50.00000000000002% - 20px / 2); overflow: hidden; position: absolute; top: calc(37.50000000000002% - 2px / 2); width: 20px; will-change: var(--framer-will-change-override, transform); }", ".framer-7L1CG.framer-v-1ld6zf9.framer-1av4fzl { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 44px); }", ".framer-7L1CG.framer-v-1ld6zf9 .framer-195idzx, .framer-7L1CG.framer-v-1ld6zf9 .framer-1x62hc { top: calc(50.00000000000002% - 2px / 2); }"];
var FramerBM6dW4dQJ = withCSS(Component, css3, "framer-7L1CG");
var BM6dW4dQJ_default = FramerBM6dW4dQJ;
FramerBM6dW4dQJ.displayName = "Navigation/Menu Icon";
FramerBM6dW4dQJ.defaultProps = {
  height: 44,
  width: 44
};
addPropertyControls(FramerBM6dW4dQJ, {
  variant: {
    options: ["giz4yYTJn", "at430vW36"],
    optionTitles: ["Menu", "Close"],
    title: "Variant",
    type: ControlType.Enum
  },
  XKaY3MrGu: {
    title: "Tap",
    type: ControlType.EventHandler
  }
});
addFonts(FramerBM6dW4dQJ, [{
  explicitInter: true,
  fonts: []
}], {
  supportsExplicitInterCodegen: true
});

// http-url:https://framerusercontent.com/modules/1WH3cOPeHx85Dh864kVX/wLPpPHf8nCvd79n0kEH2/qCoYf_YMs.js
import { jsx as _jsx3, jsxs as _jsxs2 } from "react/jsx-runtime";
import { addFonts as addFonts3, addPropertyControls as addPropertyControls3, ComponentViewportProvider, ControlType as ControlType3, cx as cx3, getFonts, ResolveLinks, useComponentViewport as useComponentViewport3, useLocaleInfo as useLocaleInfo3, useRouter, useVariantState as useVariantState3, withCSS as withCSS3 } from "@proofly-framer/runtime";
import { LayoutGroup as LayoutGroup3, motion as motion3, MotionConfigContext as MotionConfigContext3 } from "@proofly-framer/runtime";
import * as React3 from "react";

// http-url:https://framerusercontent.com/modules/i2IT9dOQLGMB4XcsfifL/8StubFIyJPoLD80VJ5Mj/cjAIGZ7bO.js
import { jsx as _jsx2 } from "react/jsx-runtime";
import { addFonts as addFonts2, addPropertyControls as addPropertyControls2, ControlType as ControlType2, cx as cx2, getFontsFromSharedStyle, Link, RichText, useComponentViewport as useComponentViewport2, useLocaleInfo as useLocaleInfo2, useVariantState as useVariantState2, withCSS as withCSS2 } from "@proofly-framer/runtime";
import { LayoutGroup as LayoutGroup2, motion as motion2, MotionConfigContext as MotionConfigContext2 } from "@proofly-framer/runtime";
import * as React2 from "react";

// http-url:https://framerusercontent.com/modules/jtYjlqHZqHU87icHOGiw/OOuSnFcca3KULIr591Dj/QkI8Aa5rN.js
import { fontStore as fontStore3 } from "@proofly-framer/runtime";
fontStore3.loadFonts(["CUSTOM;Haffer Regular"]);
var fonts3 = [{
  explicitInter: true,
  fonts: [{
    family: "Haffer Regular",
    source: "custom",
    url: "https://framerusercontent.com/assets/tAGQcvN09kwW2QjPLqLO197UqBQ.woff"
  }]
}];
var css4 = ['.framer-aqieJ .framer-styles-preset-mnimbo:not(.rich-text-wrapper), .framer-aqieJ .framer-styles-preset-mnimbo.rich-text-wrapper p { --framer-font-family: "Haffer Regular", "Haffer Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, #0a0b0a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }'];
var className3 = "framer-aqieJ";

// http-url:https://framerusercontent.com/modules/i2IT9dOQLGMB4XcsfifL/8StubFIyJPoLD80VJ5Mj/cjAIGZ7bO.js
var enabledGestures = {
  W6pjYC2ge: {
    hover: true
  }
};
var cycleOrder2 = ["W6pjYC2ge", "m2T2PnX3b"];
var serializationHash2 = "framer-yES1V";
var variantClassNames2 = {
  m2T2PnX3b: "framer-v-16p84lo",
  W6pjYC2ge: "framer-v-ysmzw2"
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
  "Variant 2": "m2T2PnX3b",
  Default: "W6pjYC2ge"
};
var getProps2 = ({
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
    variant: (_ref1 = (_humanReadableVariantMap_props_variant = humanReadableVariantMap2[props.variant]) !== null && _humanReadableVariantMap_props_variant !== void 0 ? _humanReadableVariantMap_props_variant : props.variant) !== null && _ref1 !== void 0 ? _ref1 : "W6pjYC2ge"
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
    className: className5,
    layoutId,
    variant,
    da_sRoliP,
    NKxlkEiAh,
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
    defaultVariant: "W6pjYC2ge",
    enabledGestures,
    variant,
    variantClassNames: variantClassNames2
  });
  const layoutDependency = createLayoutDependency2(props, variants);
  const ref1 = React2.useRef(null);
  const defaultLayoutId = React2.useId();
  const sharedStyleClassNames = [className3];
  const componentViewport = useComponentViewport2();
  return <LayoutGroup2 id={layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId}>{<Variants2 animate={variants} initial={false}>{<Transition2 value={transition12}>{<Link href={NKxlkEiAh} openInNewTab={false}>{_jsx2(motion2.a, {
            ...restProps,
            ...gestureHandlers,
            className: `${cx2(serializationHash2, ...sharedStyleClassNames, "framer-ysmzw2", className5, classNames)} framer-3uyeef`,
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
            ...addPropertyOverrides2({
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
            }} text={da_sRoliP} verticalAlignment="center" withExternalLayout {...addPropertyOverrides2({
              m2T2PnX3b: {
                children: <React2.Fragment>{_jsx2(motion2.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                      "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                      "--framer-font-size": "28px",
                      "--framer-line-height": "120%",
                      "--framer-text-alignment": "left",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))"
                    },
                    children: "Home"
                  })}</React2.Fragment>,
                fonts: ["CUSTOM;Haffer Bold"]
              }
            }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsx2(motion2.p, {
                  className: "framer-styles-preset-mnimbo",
                  "data-styles-preset": "QkI8Aa5rN",
                  style: {
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))"
                  },
                  children: "Home"
                })}</React2.Fragment>}</RichText>
          })}</Link>}</Transition2>}</Variants2>}</LayoutGroup2>;
});
var css5 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-yES1V.framer-3uyeef, .framer-yES1V .framer-3uyeef { display: block; }", ".framer-yES1V.framer-ysmzw2 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 4px 10px 4px 10px; position: relative; text-decoration: none; width: min-content; }", ".framer-yES1V .framer-bxk5mn { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-yES1V.framer-ysmzw2 { gap: 0px; } .framer-yES1V.framer-ysmzw2 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-yES1V.framer-ysmzw2 > :first-child { margin-left: 0px; } .framer-yES1V.framer-ysmzw2 > :last-child { margin-right: 0px; } }", ".framer-yES1V.framer-v-16p84lo.framer-ysmzw2 { cursor: unset; padding: 4px 0px 4px 0px; }", ...css4];
var FramercjAIGZ7bO = withCSS2(Component2, css5, "framer-yES1V");
var cjAIGZ7bO_default = FramercjAIGZ7bO;
FramercjAIGZ7bO.displayName = "Navigation/Link";
FramercjAIGZ7bO.defaultProps = {
  height: 25,
  width: 64
};
addPropertyControls2(FramercjAIGZ7bO, {
  variant: {
    options: ["W6pjYC2ge", "m2T2PnX3b"],
    optionTitles: ["Default", "Variant 2"],
    title: "Variant",
    type: ControlType2.Enum
  },
  da_sRoliP: {
    defaultValue: "Home",
    displayTextArea: false,
    title: "Title",
    type: ControlType2.String
  },
  NKxlkEiAh: {
    title: "Link",
    type: ControlType2.Link
  }
});
addFonts2(FramercjAIGZ7bO, [{
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
}, ...getFontsFromSharedStyle(fonts3)], {
  supportsExplicitInterCodegen: true
});

// http-url:https://framerusercontent.com/modules/1WH3cOPeHx85Dh864kVX/wLPpPHf8nCvd79n0kEH2/qCoYf_YMs.js
var NavigationLinkFonts = getFonts(cjAIGZ7bO_default);
var cycleOrder3 = ["wAumL15_s", "CzX2r29jw"];
var serializationHash3 = "framer-7CyAf";
var variantClassNames3 = {
  CzX2r29jw: "framer-v-1run053",
  wAumL15_s: "framer-v-cus498"
};
function addPropertyOverrides3(overrides, ...variants) {
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
var Transition3 = ({
  value,
  children
}) => {
  const config = React3.useContext(MotionConfigContext3);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React3.useMemo(() => ({
    ...config,
    transition
  }), [JSON.stringify(transition)]);
  return <MotionConfigContext3.Provider value={contextValue}>{children}</MotionConfigContext3.Provider>;
};
var Variants3 = motion3.create(React3.Fragment);
var humanReadableVariantMap3 = {
  "Variant 1": "wAumL15_s",
  "Variant 2": "CzX2r29jw"
};
var getProps3 = ({
  height,
  id,
  width,
  ...props
}) => {
  var _humanReadableVariantMap_props_variant, _ref;
  return {
    ...props,
    variant: (_ref = (_humanReadableVariantMap_props_variant = humanReadableVariantMap3[props.variant]) !== null && _humanReadableVariantMap_props_variant !== void 0 ? _humanReadableVariantMap_props_variant : props.variant) !== null && _ref !== void 0 ? _ref : "wAumL15_s"
  };
};
var createLayoutDependency3 = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component3 = React3.forwardRef(function (props, ref) {
  const {
    activeLocale,
    setLocale
  } = useLocaleInfo3();
  const {
    style,
    className: className5,
    layoutId,
    variant,
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
  } = useVariantState3({
    cycleOrder: cycleOrder3,
    defaultVariant: "wAumL15_s",
    variant,
    variantClassNames: variantClassNames3
  });
  const layoutDependency = createLayoutDependency3(props, variants);
  const ref1 = React3.useRef(null);
  const router = useRouter();
  const defaultLayoutId = React3.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport3();
  return <LayoutGroup3 id={layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId}>{<Variants3 animate={variants} initial={false}>{<Transition3 value={transition13}>{_jsxs2(motion3.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx3(serializationHash3, ...sharedStyleClassNames, "framer-cus498", className5, classNames),
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
          ...addPropertyOverrides3({
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
          }]}>{resolvedLinks => <ComponentViewportProvider height={25} y={((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + (6 + (((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.height) || 37) - 12 - 25) / 2)} {...addPropertyOverrides3({
              CzX2r29jw: {
                y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 16 + 0
              }
            }, baseVariant, gestureVariant)}>{_jsx3(motion3.div, {
                className: "framer-18tx4up-container",
                layoutDependency,
                layoutId: "TFto6nviJ-container",
                children: _jsx3(cjAIGZ7bO_default, {
                  da_sRoliP: "Company",
                  height: "100%",
                  id: "TFto6nviJ",
                  layoutId: "TFto6nviJ",
                  NKxlkEiAh: resolvedLinks[0],
                  variant: "W6pjYC2ge",
                  width: "100%",
                  ...addPropertyOverrides3({
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
          }]}>{resolvedLinks1 => <ComponentViewportProvider height={25} y={((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + (6 + (((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.height) || 37) - 12 - 25) / 2)} {...addPropertyOverrides3({
              CzX2r29jw: {
                y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 16 + 31
              }
            }, baseVariant, gestureVariant)}>{_jsx3(motion3.div, {
                className: "framer-wtgkor-container",
                layoutDependency,
                layoutId: "mgFmhxDR4-container",
                children: _jsx3(cjAIGZ7bO_default, {
                  da_sRoliP: "Stories",
                  height: "100%",
                  id: "mgFmhxDR4",
                  layoutId: "mgFmhxDR4",
                  NKxlkEiAh: resolvedLinks1[0],
                  variant: "W6pjYC2ge",
                  width: "100%",
                  ...addPropertyOverrides3({
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
          }]}>{resolvedLinks2 => <ComponentViewportProvider height={25} y={((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + (6 + (((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.height) || 37) - 12 - 25) / 2)} {...addPropertyOverrides3({
              CzX2r29jw: {
                y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 16 + 62
              }
            }, baseVariant, gestureVariant)}>{_jsx3(motion3.div, {
                className: "framer-e72i62-container",
                layoutDependency,
                layoutId: "KdYQIhEhQ-container",
                children: _jsx3(cjAIGZ7bO_default, {
                  da_sRoliP: "Newsroom",
                  height: "100%",
                  id: "KdYQIhEhQ",
                  layoutId: "KdYQIhEhQ",
                  NKxlkEiAh: resolvedLinks2[0],
                  variant: "W6pjYC2ge",
                  width: "100%",
                  ...addPropertyOverrides3({
                    CzX2r29jw: {
                      NKxlkEiAh: resolvedLinks2[1],
                      variant: "m2T2PnX3b"
                    }
                  }, baseVariant, gestureVariant)
                })
              })}</ComponentViewportProvider>}</ResolveLinks>, <ComponentViewportProvider height={25} y={((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + (6 + (((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.height) || 37) - 12 - 25) / 2)} {...addPropertyOverrides3({
            CzX2r29jw: {
              y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 16 + 93
            }
          }, baseVariant, gestureVariant)}>{_jsx3(motion3.div, {
              className: "framer-fkpsgr-container",
              layoutDependency,
              layoutId: "SRAcwlTQL-container",
              children: _jsx3(cjAIGZ7bO_default, {
                da_sRoliP: "Contact Us",
                height: "100%",
                id: "SRAcwlTQL",
                layoutId: "SRAcwlTQL",
                variant: "W6pjYC2ge",
                width: "100%",
                ...addPropertyOverrides3({
                  CzX2r29jw: {
                    variant: "m2T2PnX3b"
                  }
                }, baseVariant, gestureVariant)
              })
            })}</ComponentViewportProvider>, <ComponentViewportProvider height={25} y={((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + (6 + (((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.height) || 37) - 12 - 25) / 2)} {...addPropertyOverrides3({
            CzX2r29jw: {
              y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 16 + 124
            }
          }, baseVariant, gestureVariant)}>{_jsx3(motion3.div, {
              className: "framer-15ks8cj-container",
              layoutDependency,
              layoutId: "OJzIJsp_O-container",
              children: _jsx3(cjAIGZ7bO_default, {
                da_sRoliP: "Login",
                height: "100%",
                id: "OJzIJsp_O",
                layoutId: "OJzIJsp_O",
                variant: "W6pjYC2ge",
                width: "100%",
                ...addPropertyOverrides3({
                  CzX2r29jw: {
                    variant: "m2T2PnX3b"
                  }
                }, baseVariant, gestureVariant)
              })
            })}</ComponentViewportProvider>]
        })}</Transition3>}</Variants3>}</LayoutGroup3>;
});
var css6 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-7CyAf.framer-1t7dwmf, .framer-7CyAf .framer-1t7dwmf { display: block; }", ".framer-7CyAf.framer-cus498 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: visible; padding: 6px; position: relative; width: min-content; }", ".framer-7CyAf .framer-18tx4up-container, .framer-7CyAf .framer-wtgkor-container, .framer-7CyAf .framer-e72i62-container, .framer-7CyAf .framer-fkpsgr-container, .framer-7CyAf .framer-15ks8cj-container { flex: none; height: auto; position: relative; width: auto; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-7CyAf.framer-cus498 { gap: 0px; } .framer-7CyAf.framer-cus498 > * { margin: 0px; margin-left: calc(6px / 2); margin-right: calc(6px / 2); } .framer-7CyAf.framer-cus498 > :first-child { margin-left: 0px; } .framer-7CyAf.framer-cus498 > :last-child { margin-right: 0px; } }", ".framer-7CyAf.framer-v-1run053.framer-cus498 { align-content: flex-start; align-items: flex-start; flex-direction: column; padding: 16px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-7CyAf.framer-v-1run053.framer-cus498 { gap: 0px; } .framer-7CyAf.framer-v-1run053.framer-cus498 > * { margin: 0px; margin-bottom: calc(6px / 2); margin-top: calc(6px / 2); } .framer-7CyAf.framer-v-1run053.framer-cus498 > :first-child { margin-top: 0px; } .framer-7CyAf.framer-v-1run053.framer-cus498 > :last-child { margin-bottom: 0px; } }"];
var FramerqCoYf_YMs = withCSS3(Component3, css6, "framer-7CyAf");
var qCoYf_YMs_default = FramerqCoYf_YMs;
FramerqCoYf_YMs.displayName = "Navigation/Menu";
FramerqCoYf_YMs.defaultProps = {
  height: 37,
  width: 465
};
addPropertyControls3(FramerqCoYf_YMs, {
  variant: {
    options: ["wAumL15_s", "CzX2r29jw"],
    optionTitles: ["Variant 1", "Variant 2"],
    title: "Variant",
    type: ControlType3.Enum
  }
});
addFonts3(FramerqCoYf_YMs, [{
  explicitInter: true,
  fonts: []
}, ...NavigationLinkFonts], {
  supportsExplicitInterCodegen: true
});

// http-url:https://framerusercontent.com/modules/tLVqKCltCYmTTKeYPY8O/61TR8ONf7Q5XYv19SfxW/yZBQGZIRL.js
import { jsx as _jsx5, jsxs as _jsxs3 } from "react/jsx-runtime";
import { addFonts as addFonts4, addPropertyControls as addPropertyControls5, ControlType as ControlType5, cx as cx5, getFonts as getFonts2, getFontsFromSharedStyle as getFontsFromSharedStyle2, Link as Link2, RichText as RichText2, useActiveVariantCallback as useActiveVariantCallback2, useComponentViewport as useComponentViewport4, useLocaleInfo as useLocaleInfo4, useVariantState as useVariantState4, withCSS as withCSS5 } from "@proofly-framer/runtime";
import { LayoutGroup as LayoutGroup4, motion as motion5, MotionConfigContext as MotionConfigContext4 } from "@proofly-framer/runtime";
import * as React5 from "react";
import { useRef as useRef4 } from "react";

// http-url:https://framerusercontent.com/modules/gGXLFANbZFKf2qU8bbVL/uQjjbN7Yn6nBRqTZdwzU/HoKrrnQcM.js
import { jsx as _jsx4 } from "react/jsx-runtime";
import { addPropertyControls as addPropertyControls4, ControlType as ControlType4, cx as cx4, motion as motion4, useSVGTemplate, withCSS as withCSS4 } from "@proofly-framer/runtime";
import * as React4 from "react";
import { forwardRef as forwardRef5 } from "react";
var mask = "var(--framer-icon-mask)";
var Base = forwardRef5(function (props, ref) {
  return <svg {...props} ref={ref}>{props.children}</svg>;
});
var MotionSVG = motion4.create(Base);
var SVG = forwardRef5((props, ref) => {
  const {
    animated,
    layoutId,
    children,
    ...rest
  } = props;
  return animated ? <MotionSVG {...rest} layoutId={layoutId} ref={ref}>{children}</MotionSVG> : <svg {...rest} ref={ref}>{children}</svg>;
});
var svg = __svg_1;
var getProps4 = ({
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
var Component4 = React4.forwardRef(function (props, ref) {
  const {
    style,
    className: className5,
    layoutId,
    variant,
    fICyAUQY1,
    lKf_CQTz5,
    BKVe8Pgvw,
    ...restProps
  } = getProps4(props);
  const href = useSVGTemplate("1173457374", svg);
  return <SVG {...restProps} className={cx4("framer-EcgqK", className5)} layoutId={layoutId} ref={ref} role="presentation" style={{
    "--1335ju": lKf_CQTz5,
    "--18mrqx2": fICyAUQY1,
    ...style
  }} viewBox="0 0 24 24">{<use href={href} />}</SVG>;
});
var css7 = [`.framer-EcgqK { -webkit-mask: ${mask}; aspect-ratio: 1; display: block; mask: ${mask}; width: 24px; }`];
var Icon = withCSS4(Component4, css7, "framer-EcgqK");
Icon.displayName = "Arrow Right";
var HoKrrnQcM_default = Icon;
addPropertyControls4(Icon, {
  fICyAUQY1: {
    defaultValue: "rgb(0, 0, 0)",
    hidden: false,
    title: "Stroke",
    type: ControlType4.Color
  },
  lKf_CQTz5: {
    defaultValue: 1.5,
    displayStepper: true,
    hidden: false,
    max: 4,
    min: 0,
    step: 0.5,
    title: "Width",
    type: ControlType4.Number
  },
  BKVe8Pgvw: {
    defaultValue: 1,
    displayStepper: true,
    hidden: true,
    max: 4,
    min: 1,
    title: "Dots",
    type: ControlType4.Number
  }
});

// http-url:https://framerusercontent.com/modules/Ae2JxZ1NzMSdVHWpQSYI/6DXq0VgytYexIhDwN2rC/YlBLAavU6.js
import { fontStore as fontStore4 } from "@proofly-framer/runtime";
import { jsx as _ctxJsx } from "react/jsx-runtime";
import { ContextProviders, useVariant } from "@proofly-framer/runtime";
fontStore4.loadFonts(["CUSTOM;Haffer Regular"]);
var fonts4 = [{
  explicitInter: true,
  fonts: [{
    family: "Haffer Regular",
    source: "custom",
    url: "https://framerusercontent.com/assets/tAGQcvN09kwW2QjPLqLO197UqBQ.woff"
  }]
}];
var css8 = ['.framer-RqrbG .framer-styles-preset-1ydx3rt:not(.rich-text-wrapper), .framer-RqrbG .framer-styles-preset-1ydx3rt.rich-text-wrapper p { --framer-font-family: "Haffer Regular", "Haffer Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, #0a0b0a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }', '@media (max-width: 767px) and (min-width: 0px) { .framer-RqrbG .framer-styles-preset-1ydx3rt:not(.rich-text-wrapper), .framer-RqrbG .framer-styles-preset-1ydx3rt.rich-text-wrapper p { --framer-font-family: "Haffer Regular", "Haffer Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, #0a0b0a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }'];
var className4 = "framer-RqrbG";

// http-url:https://framerusercontent.com/modules/tLVqKCltCYmTTKeYPY8O/61TR8ONf7Q5XYv19SfxW/yZBQGZIRL.js
var ArrowRightFonts = getFonts2(HoKrrnQcM_default);
var enabledGestures2 = {
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
var cycleOrder4 = ["ZmCP_eD3_", "llZeWFj0E", "tLEpsRpVS", "bHEcOt3us", "FbG4z2omJ", "coXNANDm3", "br7LBM8iN", "bMRQAPM8x"];
var serializationHash4 = "framer-BsBK3";
var variantClassNames4 = {
  bHEcOt3us: "framer-v-26utbf",
  bMRQAPM8x: "framer-v-19s4zot",
  br7LBM8iN: "framer-v-mfbo2h",
  coXNANDm3: "framer-v-6stzd3",
  FbG4z2omJ: "framer-v-nbkuw9",
  llZeWFj0E: "framer-v-1f8bjye",
  tLEpsRpVS: "framer-v-j08lig",
  ZmCP_eD3_: "framer-v-16c10ng"
};
function addPropertyOverrides4(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach(variant => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var radiusForCorner = (value, cornerIndex) => {
  if (typeof value === "number" && Number.isFinite(value)) return Math.max(0, value) + "px";
  if (typeof value !== "string" || typeof cornerIndex !== "number") return void 0;
  const segments = value.split(" ");
  return segments[cornerIndex] || segments[cornerIndex - 2] || segments[0];
};
var transition14 = {
  damping: 60,
  delay: 0,
  mass: 1,
  stiffness: 500,
  type: "spring"
};
var transformTemplate1 = (_, t) => `translateX(-50%) ${t}`;
var Transition4 = ({
  value,
  children
}) => {
  const config = React5.useContext(MotionConfigContext4);
  const transition = value ?? config.transition;
  const contextValue = React5.useMemo(() => ({
    ...config,
    transition
  }), [JSON.stringify(transition)]);
  return <MotionConfigContext4.Provider value={contextValue}>{children}</MotionConfigContext4.Provider>;
};
var Variants4 = motion5.create(React5.Fragment);
var humanReadableVariantMap4 = {
  "Just Icon": "bMRQAPM8x",
  "small-gradient": "coXNANDm3",
  "tiny stroke": "FbG4z2omJ",
  Big: "ZmCP_eD3_",
  Dark: "tLEpsRpVS",
  huge: "br7LBM8iN",
  Small: "llZeWFj0E",
  tiny: "bHEcOt3us"
};
var getProps5 = ({
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
    variant: humanReadableVariantMap4[props.variant] ?? props.variant ?? "ZmCP_eD3_",
    wN3STPwMb: border ?? props.wN3STPwMb ?? {
      borderColor: 'var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))',
      borderStyle: "solid",
      borderWidth: 0
    }
  };
};
var createLayoutDependency4 = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component5 = React5.forwardRef(function (props, ref) {
  const fallbackRef = useRef4(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React5.useId();
  const {
    activeLocale,
    setLocale
  } = useLocaleInfo4();
  const componentViewport = useComponentViewport4();
  const {
    style,
    className: className5,
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
  } = getProps5(props);
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
  } = useVariantState4({
    cycleOrder: cycleOrder4,
    defaultVariant: "ZmCP_eD3_",
    enabledGestures: enabledGestures2,
    ref: refBinding,
    variant,
    variantClassNames: variantClassNames4
  });
  const layoutDependency = createLayoutDependency4(props, variants);
  const {
    activeVariantCallback,
    delay
  } = useActiveVariantCallback2(baseVariant);
  const onTaphj2y62 = activeVariantCallback(async (...args) => {
    setGestureState({
      isPressed: false
    });
    if (du4PAlRaB) {
      const res = await du4PAlRaB(...args);
      if (res === false) return false;
    }
  });
  const sharedStyleClassNames = [className4, className3];
  const scopingClassNames = cx5(serializationHash4, ...sharedStyleClassNames);
  const isDisplayed = () => {
    if (baseVariant === "bMRQAPM8x") return true;
    return false;
  };
  const isDisplayed1 = () => {
    if (baseVariant === "bMRQAPM8x") return false;
    return true;
  };
  return <LayoutGroup4 id={layoutId ?? defaultLayoutId}>{<Variants4 animate={variants} initial={false}>{<Transition4 value={transition14}>{<Link2 href={qzxtK1_9Y} motionChild nodeId="ZmCP_eD3_" scopeId="yZBQGZIRL">{_jsxs3(motion5.a, {
            ...restProps,
            ...gestureHandlers,
            className: `${cx5(scopingClassNames, "framer-16c10ng", className5, classNames)} framer-3bbyhf`,
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
            ...addPropertyOverrides4({
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
            }} />, isDisplayed1() && <RichText2 __fromCanvasComponent className="framer-1nfv7fv" data-framer-name="Join the waitlist" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="hoHhg6wtS" style={{
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
            }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides4({
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
                children: <React5.Fragment>{_jsx5(motion5.p, {
                    className: "framer-styles-preset-mnimbo",
                    "data-styles-preset": "QkI8Aa5rN",
                    style: {
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))"
                    },
                    children: "Join the waitlist"
                  })}</React5.Fragment>
              },
              br7LBM8iN: {
                children: <React5.Fragment>{_jsx5(motion5.h3, {
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
                  })}</React5.Fragment>,
                fonts: ["CUSTOMV2;Haffer Regular"]
              },
              coXNANDm3: {
                children: <React5.Fragment>{_jsx5(motion5.p, {
                    className: "framer-styles-preset-mnimbo",
                    "data-styles-preset": "QkI8Aa5rN",
                    style: {
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)))"
                    },
                    children: "Login"
                  })}</React5.Fragment>
              },
              FbG4z2omJ: {
                children: <React5.Fragment>{_jsx5(motion5.p, {
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
                  })}</React5.Fragment>,
                fonts: ["CUSTOM;Haffer Regular"]
              },
              llZeWFj0E: {
                children: <React5.Fragment>{_jsx5(motion5.p, {
                    className: "framer-styles-preset-mnimbo",
                    "data-styles-preset": "QkI8Aa5rN",
                    style: {
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-P7ZHYgc9n-yZBQGZIRL))"
                    },
                    children: "Join the waitlist"
                  })}</React5.Fragment>
              },
              tLEpsRpVS: {
                children: <React5.Fragment>{_jsx5(motion5.p, {
                    className: "framer-styles-preset-mnimbo",
                    "data-styles-preset": "QkI8Aa5rN",
                    style: {
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))"
                    },
                    children: "Join the waitlist"
                  })}</React5.Fragment>
              }
            }, baseVariant, gestureVariant)}>{<React5.Fragment>{_jsx5(motion5.p, {
                  className: "framer-styles-preset-1ydx3rt",
                  "data-styles-preset": "YlBLAavU6",
                  style: {
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-P7ZHYgc9n-yZBQGZIRL))"
                  },
                  children: "Join the waitlist"
                })}</React5.Fragment>}</RichText2>, <RichText2 __fromCanvasComponent className="framer-129t4kk" data-framer-name="Join the waitlist" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="KLzc6sfs7" style={{
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
            }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides4({
              "bHEcOt3us-hover": {
                transformTemplate: void 0
              },
              "br7LBM8iN-hover": {
                children: <React5.Fragment>{_jsx5(motion5.h3, {
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
                  })}</React5.Fragment>,
                fonts: ["CUSTOMV2;Haffer Regular"],
                transformTemplate: void 0
              },
              "coXNANDm3-hover": {
                children: <React5.Fragment>{_jsx5(motion5.p, {
                    className: "framer-styles-preset-mnimbo",
                    "data-styles-preset": "QkI8Aa5rN",
                    style: {
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)))"
                    },
                    children: "Login"
                  })}</React5.Fragment>,
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
                children: <React5.Fragment>{_jsx5(motion5.p, {
                    className: "framer-styles-preset-mnimbo",
                    "data-styles-preset": "QkI8Aa5rN",
                    style: {
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))"
                    },
                    children: "Join the waitlist"
                  })}</React5.Fragment>
              },
              bMRQAPM8x: {
                children: <React5.Fragment>{_jsx5(motion5.p, {
                    className: "framer-styles-preset-mnimbo",
                    "data-styles-preset": "QkI8Aa5rN",
                    style: {
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))"
                    },
                    children: "Join the waitlist"
                  })}</React5.Fragment>
              },
              br7LBM8iN: {
                children: <React5.Fragment>{_jsx5(motion5.h3, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                      "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                      "--framer-font-size": "40px",
                      "--framer-line-height": "100%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-a0htzi, var(--variable-reference-P7ZHYgc9n-yZBQGZIRL))"
                    },
                    children: "Login"
                  })}</React5.Fragment>,
                fonts: ["CUSTOM;Haffer Bold"]
              },
              coXNANDm3: {
                children: <React5.Fragment>{_jsx5(motion5.p, {
                    className: "framer-styles-preset-mnimbo",
                    "data-styles-preset": "QkI8Aa5rN",
                    style: {
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-P7ZHYgc9n-yZBQGZIRL))"
                    },
                    children: "Join the waitlist"
                  })}</React5.Fragment>
              },
              FbG4z2omJ: {
                children: <React5.Fragment>{_jsx5(motion5.p, {
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
                  })}</React5.Fragment>,
                fonts: ["CUSTOM;Haffer Regular"]
              },
              llZeWFj0E: {
                children: <React5.Fragment>{_jsx5(motion5.p, {
                    className: "framer-styles-preset-mnimbo",
                    "data-styles-preset": "QkI8Aa5rN",
                    style: {
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-P7ZHYgc9n-yZBQGZIRL))"
                    },
                    children: "Join the waitlist"
                  })}</React5.Fragment>
              },
              tLEpsRpVS: {
                children: <React5.Fragment>{_jsx5(motion5.p, {
                    className: "framer-styles-preset-mnimbo",
                    "data-styles-preset": "QkI8Aa5rN",
                    style: {
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))"
                    },
                    children: "Join the waitlist"
                  })}</React5.Fragment>
              }
            }, baseVariant, gestureVariant)}>{<React5.Fragment>{_jsx5(motion5.p, {
                  className: "framer-styles-preset-1ydx3rt",
                  "data-styles-preset": "YlBLAavU6",
                  style: {
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-P7ZHYgc9n-yZBQGZIRL))"
                  },
                  children: "Join the waitlist"
                })}</React5.Fragment>}</RichText2>]
          })}</Link2>}</Transition4>}</Variants4>}</LayoutGroup4>;
});
var css9 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-BsBK3.framer-3bbyhf, .framer-BsBK3 .framer-3bbyhf { display: block; }", ".framer-BsBK3.framer-16c10ng { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 12px 16px 12px 16px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-BsBK3 .framer-1lw4bu5 { flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }", ".framer-BsBK3 .framer-1nfv7fv { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-BsBK3 .framer-129t4kk { bottom: -23px; flex: none; height: auto; left: 50%; position: absolute; white-space: pre; width: auto; z-index: 1; }", ".framer-BsBK3.framer-v-1f8bjye.framer-16c10ng, .framer-BsBK3.framer-v-6stzd3.framer-16c10ng { padding: 12px; }", ".framer-BsBK3.framer-v-26utbf.framer-16c10ng, .framer-BsBK3.framer-v-nbkuw9.framer-16c10ng { padding: 4px 8px 4px 8px; }", ".framer-BsBK3.framer-v-mfbo2h.framer-16c10ng { padding: 24px 32px 24px 32px; }", ".framer-BsBK3.framer-v-mfbo2h .framer-129t4kk { bottom: -42px; }", ".framer-BsBK3.framer-v-19s4zot.framer-16c10ng { width: 48px; }", ".framer-BsBK3.framer-v-16c10ng.hover .framer-1nfv7fv { left: 50%; order: 1; position: absolute; top: -24px; z-index: 1; }", ".framer-BsBK3.framer-v-16c10ng.hover .framer-129t4kk { bottom: unset; left: unset; order: 2; position: relative; }", ".framer-BsBK3.framer-v-1f8bjye.hover .framer-1nfv7fv, .framer-BsBK3.framer-v-6stzd3.hover .framer-1nfv7fv { left: 50%; position: absolute; top: -24px; z-index: 1; }", ".framer-BsBK3.framer-v-1f8bjye.hover .framer-129t4kk, .framer-BsBK3.framer-v-j08lig.hover .framer-129t4kk, .framer-BsBK3.framer-v-26utbf.hover .framer-129t4kk, .framer-BsBK3.framer-v-6stzd3.hover .framer-129t4kk, .framer-BsBK3.framer-v-mfbo2h.hover .framer-129t4kk { bottom: unset; left: unset; position: relative; }", ".framer-BsBK3.framer-v-j08lig.hover.framer-16c10ng { padding: 11px 16px 12px 16px; }", ".framer-BsBK3.framer-v-j08lig.hover .framer-1nfv7fv { left: 50%; position: absolute; top: -17px; z-index: 1; }", ".framer-BsBK3.framer-v-26utbf.hover .framer-1nfv7fv { left: 50%; position: absolute; top: -22px; z-index: 1; }", ".framer-BsBK3.framer-v-mfbo2h.hover .framer-1nfv7fv { left: 50%; position: absolute; top: -45px; z-index: 1; }", ...css8, ...css4, '.framer-BsBK3[data-border="true"]::after, .framer-BsBK3 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }'];
var FrameryZBQGZIRL = withCSS5(Component5, css9, "framer-BsBK3");
var yZBQGZIRL_default = FrameryZBQGZIRL;
FrameryZBQGZIRL.displayName = "Button";
FrameryZBQGZIRL.defaultProps = {
  height: 45.5,
  width: 85
};
addPropertyControls5(FrameryZBQGZIRL, {
  variant: {
    options: ["ZmCP_eD3_", "llZeWFj0E", "tLEpsRpVS", "bHEcOt3us", "FbG4z2omJ", "coXNANDm3", "br7LBM8iN", "bMRQAPM8x"],
    optionTitles: ["Big", "Small", "Dark", "tiny", "tiny stroke", "small-gradient", "huge", "Just Icon"],
    title: "Variant",
    type: ControlType5.Enum
  },
  qzxtK1_9Y: {
    title: "Link",
    type: ControlType5.Link
  },
  TiAMtDaz3: {
    defaultValue: "Login",
    displayTextArea: false,
    title: "Title",
    type: ControlType5.String
  },
  RQDpSij6V: {
    defaultValue: 'var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(255, 59, 50))',
    title: "Background",
    type: ControlType5.Color
  },
  P7ZHYgc9n: {
    defaultValue: 'var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))',
    title: "Title Color",
    type: ControlType5.Color
  },
  du4PAlRaB: {
    title: "Click",
    type: ControlType5.EventHandler
  },
  wN3STPwMb: {
    defaultValue: {
      borderColor: 'var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))',
      borderStyle: "solid",
      borderWidth: 0
    },
    title: "Border",
    type: ControlType5.Border
  },
  KhVtTQLb4: {
    defaultValue: "4px",
    title: "Radius",
    type: ControlType5.BorderRadius
  }
});
addFonts4(FrameryZBQGZIRL, [{
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
}, ...ArrowRightFonts, ...getFontsFromSharedStyle2(fonts4), ...getFontsFromSharedStyle2(fonts3)], {
  supportsExplicitInterCodegen: true
});

// http-url:https://framerusercontent.com/modules/8DY6qJpLeos8BgSx6NsQ/CU6PYIZ9G94vtsVnME9M/vwOltRhhT.js
var NavigationMenuIconFonts = getFonts3(BM6dW4dQJ_default);
var NavigationMenuFonts = getFonts3(qCoYf_YMs_default);
var RichTextWithFX = withFX(RichText3);
var ButtonFonts = getFonts3(yZBQGZIRL_default);
var MotionNavWithFX = withFX(motion6.nav);
var cycleOrder5 = ["vknkFEn9I", "rkAiYEczi", "m68no0X1X", "ArN0AKCa6", "AW_92XY5M"];
var serializationHash5 = "framer-h7mEU";
var variantClassNames5 = {
  ArN0AKCa6: "framer-v-lvom9m",
  AW_92XY5M: "framer-v-1babd65",
  m68no0X1X: "framer-v-yw591j",
  rkAiYEczi: "framer-v-1y27ync",
  vknkFEn9I: "framer-v-1h7jek3"
};
function addPropertyOverrides5(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach(variant => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition15 = {
  delay: 0,
  duration: 0.8,
  ease: [0.44, 0, 0.56, 1],
  type: "tween"
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
  y: -150
};
var transition2 = {
  duration: 0,
  type: "tween"
};
var transition3 = {
  delay: 0,
  duration: 0.3,
  ease: [0.44, 0, 0.56, 1],
  type: "tween"
};
var transition4 = {
  delay: 0.5,
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
  transition: transition4,
  x: 0,
  y: -150
};
var transition5 = {
  damping: 50,
  delay: 0.1,
  mass: 1,
  stiffness: 400,
  type: "spring"
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
var transition6 = {
  delay: 0.6,
  duration: 0.4,
  ease: [0.44, 0, 0.56, 1],
  type: "tween"
};
var animation2 = {
  opacity: 0,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  skewX: 0,
  skewY: 0,
  transition: transition6,
  x: 0,
  y: -150
};
var transition7 = {
  damping: 50,
  delay: 0.15,
  mass: 1,
  stiffness: 400,
  type: "spring"
};
var transition8 = {
  delay: 0.7,
  duration: 0.4,
  ease: [0.44, 0, 0.56, 1],
  type: "tween"
};
var animation3 = {
  opacity: 0,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  skewX: 0,
  skewY: 0,
  transition: transition8,
  x: 0,
  y: -150
};
var transition9 = {
  damping: 50,
  delay: 0.2,
  mass: 1,
  stiffness: 400,
  type: "spring"
};
var transition10 = {
  delay: 0.8,
  duration: 0.4,
  ease: [0.44, 0, 0.56, 1],
  type: "tween"
};
var animation4 = {
  opacity: 0,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  skewX: 0,
  skewY: 0,
  transition: transition10,
  x: 0,
  y: -150
};
var transition11 = {
  damping: 50,
  delay: 0.25,
  mass: 1,
  stiffness: 400,
  type: "spring"
};
var transition122 = {
  damping: 50,
  delay: 0,
  mass: 1,
  stiffness: 400,
  type: "spring"
};
var Variants5 = motion6(React6.Fragment);
var humanReadableVariantMap5 = {
  "Phone Open": "m68no0X1X",
  black: "AW_92XY5M",
  Close: "ArN0AKCa6",
  Desktop: "vknkFEn9I",
  Phone: "rkAiYEczi"
};
var getProps6 = ({
  close,
  height,
  id,
  openOverlay,
  width,
  ...props
}) => {
  return {
    ...props,
    ndvmM7YFX: close ?? props.ndvmM7YFX,
    RJ1C3SDsl: openOverlay ?? props.RJ1C3SDsl,
    variant: humanReadableVariantMap5[props.variant] ?? props.variant ?? "vknkFEn9I"
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
    className: className5,
    layoutId,
    variant,
    RJ1C3SDsl,
    ndvmM7YFX,
    ...restProps
  } = getProps6(props);
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
  } = useVariantState5({
    cycleOrder: cycleOrder5,
    defaultVariant: "vknkFEn9I",
    variant,
    variantClassNames: variantClassNames5
  });
  const layoutDependency = createLayoutDependency5(props, variants);
  const {
    activeVariantCallback,
    delay
  } = useActiveVariantCallback3(baseVariant);
  const XKaY3MrGuelz6ua = activeVariantCallback(async (...args) => {
    if (RJ1C3SDsl) {
      const res = await RJ1C3SDsl(...args);
      if (res === false) return false;
    }
  });
  const XKaY3MrGu1rnp7w1 = activeVariantCallback(async (...args) => {
    if (ndvmM7YFX) {
      const res = await ndvmM7YFX(...args);
      if (res === false) return false;
    }
  });
  const ref1 = React6.useRef(null);
  const isDisplayed = () => {
    if (baseVariant === "m68no0X1X") return false;
    return true;
  };
  const isDisplayed1 = () => {
    if (["rkAiYEczi", "ArN0AKCa6"].includes(baseVariant)) return true;
    return false;
  };
  const isDisplayed2 = () => {
    if (["rkAiYEczi", "m68no0X1X", "ArN0AKCa6"].includes(baseVariant)) return false;
    return true;
  };
  const isDisplayed3 = () => {
    if (baseVariant === "m68no0X1X") return true;
    return false;
  };
  const isDisplayed4 = () => {
    if (["rkAiYEczi", "ArN0AKCa6"].includes(baseVariant)) return false;
    return true;
  };
  const isDisplayed5 = () => {
    if (["rkAiYEczi", "m68no0X1X", "ArN0AKCa6"].includes(baseVariant)) return true;
    return false;
  };
  const defaultLayoutId = React6.useId();
  const sharedStyleClassNames = [className2, className];
  const componentViewport = useComponentViewport5();
  return <LayoutGroup5 id={layoutId ?? defaultLayoutId}>{<Variants5 animate={variants} initial={false}>{<Transition5 value={transition2} {...addPropertyOverrides5({
        m68no0X1X: {
          value: transition3
        }
      }, baseVariant, gestureVariant)}>{<MotionNavWithFX {...restProps} {...gestureHandlers} __framer__animate={{
          transition: transition15
        }} __framer__animateOnce={false} __framer__scrollDirection={{
          direction: "down",
          target: animation
        }} __framer__styleAppearEffectEnabled __framer__threshold={0.5} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className={cx6(serializationHash5, ...sharedStyleClassNames, "framer-1h7jek3", className5, classNames)} data-framer-name="Desktop" layoutDependency={layoutDependency} layoutId="vknkFEn9I" ref={ref ?? ref1} style={{
          backgroundColor: "var(--token-8b7bf222-cf23-422b-9349-f0eb5832be6f, rgb(18, 9, 174))",
          ...style
        }} variants={{
          AW_92XY5M: {
            backgroundColor: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(4, 22, 40))"
          },
          m68no0X1X: {
            backgroundColor: "rgba(0, 0, 0, 0)"
          }
        }} {...addPropertyOverrides5({
          ArN0AKCa6: {
            "data-framer-name": "Close"
          },
          AW_92XY5M: {
            "data-framer-name": "black"
          },
          m68no0X1X: {
            "data-framer-name": "Phone Open"
          },
          rkAiYEczi: {
            "data-framer-name": "Phone"
          }
        }, baseVariant, gestureVariant)}>{_jsxs4(motion6.div, {
            className: "framer-1eswwh4",
            layoutDependency,
            layoutId: "LgPzcPyE3",
            children: [isDisplayed() && <Link3 href={{
              webPageId: "yL4gWBfht"
            }} openInNewTab={false} {...addPropertyOverrides5({
              ArN0AKCa6: {
                href: void 0
              },
              rkAiYEczi: {
                href: void 0
              }
            }, baseVariant, gestureVariant)}>{_jsxs4(motion6.a, {
                className: "framer-13vkv8t framer-2s7m75",
                "data-framer-name": "Logo & Menu Icon",
                layoutDependency,
                layoutId: "v0F9iEPQK",
                style: {
                  backgroundColor: "rgba(0, 0, 0, 0)"
                },
                variants: {
                  ArN0AKCa6: {
                    backgroundColor: "rgba(10, 11, 10, 0)"
                  }
                },
                children: [isDisplayed1() && <ComponentViewportProvider2 {...addPropertyOverrides5({
                  ArN0AKCa6: {
                    height: 44,
                    y: (componentViewport?.y || 0) + 0 + (((componentViewport?.height || 64) - 0 - 64) / 2 + 0 + 0) + 0 + 10
                  },
                  rkAiYEczi: {
                    height: 44,
                    y: (componentViewport?.y || 0) + 0 + (((componentViewport?.height || 64) - 0 - 64) / 2 + 0 + 0) + 0 + 10
                  }
                }, baseVariant, gestureVariant)}>{_jsx6(motion6.div, {
                    className: "framer-17ri5mb-container",
                    "data-framer-name": "Menu Icon",
                    layoutDependency,
                    layoutId: "IU_mPZfZj-container",
                    name: "Menu Icon",
                    children: <BM6dW4dQJ_default height="100%" id="IU_mPZfZj" layoutId="IU_mPZfZj" name="Menu Icon" variant="giz4yYTJn" width="100%" {...addPropertyOverrides5({
                      ArN0AKCa6: {
                        variant: "at430vW36",
                        XKaY3MrGu: XKaY3MrGuelz6ua
                      },
                      rkAiYEczi: {
                        XKaY3MrGu: XKaY3MrGuelz6ua
                      }
                    }, baseVariant, gestureVariant)} />
                  })}</ComponentViewportProvider2>, <SVG2 className="framer-c0mgdo" data-framer-name="Graphic" fill="black" intrinsicHeight={76} intrinsicWidth={323} layoutDependency={layoutDependency} layoutId="gAS1w5cMB" svg={__svg_2} withExternalLayout />]
              })}</Link3>, isDisplayed2() && <ComponentViewportProvider2 height={37} y={(componentViewport?.y || 0) + (30 + ((componentViewport?.height || 74) - 60 - 54) / 2) + 8.5}>{_jsx6(motion6.div, {
                className: "framer-gdz00h-container",
                layoutDependency,
                layoutId: "yrPmlOsRx-container",
                children: _jsx6(qCoYf_YMs_default, {
                  height: "100%",
                  id: "yrPmlOsRx",
                  layoutId: "yrPmlOsRx",
                  width: "100%"
                })
              })}</ComponentViewportProvider2>, isDisplayed3() && _jsxs4(motion6.div, {
              className: "framer-1xdnklo",
              "data-framer-name": "Links Mobile",
              layoutDependency,
              layoutId: "AbXjxfWeH",
              children: [<Transition5 {...addPropertyOverrides5({
                m68no0X1X: {
                  value: transition5
                }
              }, baseVariant, gestureVariant)}>{<RichTextWithFX __framer__animate={{
                  transition: transition4
                }} __framer__animateOnce={false} __framer__enter={animation} __framer__exit={animation1} __framer__styleAppearEffectEnabled __framer__threshold={0.5} __fromCanvasComponent __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-qz7g45" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="j0ZpHfIkF" style={{
                  "--framer-paragraph-spacing": "0px"
                }} verticalAlignment="top" withExternalLayout>{<React6.Fragment>{_jsx6(motion6.h3, {
                      className: "framer-styles-preset-19ujo0x",
                      "data-styles-preset": "UrNHzCTiy",
                      children: <Link3 href={{
                        webPageId: "augiA20Il"
                      }} openInNewTab={false} smoothScroll={false}>{_jsx6(motion6.a, {
                          className: "framer-styles-preset-7o8msg",
                          "data-styles-preset": "F9x4QnoDS",
                          children: "Home"
                        })}</Link3>
                    })}</React6.Fragment>}</RichTextWithFX>}</Transition5>, <Transition5 {...addPropertyOverrides5({
                m68no0X1X: {
                  value: transition7
                }
              }, baseVariant, gestureVariant)}>{<RichTextWithFX __framer__animate={{
                  transition: transition6
                }} __framer__animateOnce={false} __framer__enter={animation} __framer__exit={animation2} __framer__styleAppearEffectEnabled __framer__threshold={0.5} __fromCanvasComponent __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-1tcvoe3" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="GRvcAvVer" style={{
                  "--framer-paragraph-spacing": "0px"
                }} verticalAlignment="top" withExternalLayout>{<React6.Fragment>{_jsx6(motion6.h3, {
                      className: "framer-styles-preset-19ujo0x",
                      "data-styles-preset": "UrNHzCTiy",
                      children: <Link3 href={{
                        webPageId: "augiA20Il"
                      }} openInNewTab={false} smoothScroll={false}>{_jsx6(motion6.a, {
                          className: "framer-styles-preset-7o8msg",
                          "data-styles-preset": "F9x4QnoDS",
                          children: "Company"
                        })}</Link3>
                    })}</React6.Fragment>}</RichTextWithFX>}</Transition5>, <Transition5 {...addPropertyOverrides5({
                m68no0X1X: {
                  value: transition9
                }
              }, baseVariant, gestureVariant)}>{<RichTextWithFX __framer__animate={{
                  transition: transition8
                }} __framer__animateOnce={false} __framer__enter={animation} __framer__exit={animation3} __framer__styleAppearEffectEnabled __framer__threshold={0.5} __fromCanvasComponent __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-11sfb6k" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="RsgWysDci" style={{
                  "--framer-paragraph-spacing": "0px"
                }} verticalAlignment="top" withExternalLayout>{<React6.Fragment>{_jsx6(motion6.h3, {
                      className: "framer-styles-preset-19ujo0x",
                      "data-styles-preset": "UrNHzCTiy",
                      children: <Link3 href={{
                        webPageId: "Qy9zYxbIQ"
                      }} openInNewTab={false} smoothScroll={false}>{_jsx6(motion6.a, {
                          className: "framer-styles-preset-7o8msg",
                          "data-styles-preset": "F9x4QnoDS",
                          children: "Stories"
                        })}</Link3>
                    })}</React6.Fragment>}</RichTextWithFX>}</Transition5>, <Transition5 {...addPropertyOverrides5({
                m68no0X1X: {
                  value: transition11
                }
              }, baseVariant, gestureVariant)}>{<RichTextWithFX __framer__animate={{
                  transition: transition10
                }} __framer__animateOnce={false} __framer__enter={animation} __framer__exit={animation4} __framer__styleAppearEffectEnabled __framer__threshold={0.5} __fromCanvasComponent __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-psdndr" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="dYEaiLN8x" style={{
                  "--framer-paragraph-spacing": "0px"
                }} verticalAlignment="top" withExternalLayout>{<React6.Fragment>{_jsx6(motion6.h3, {
                      className: "framer-styles-preset-19ujo0x",
                      "data-styles-preset": "UrNHzCTiy",
                      children: <Link3 href={{
                        webPageId: "Tr_tenZPs"
                      }} openInNewTab={false} smoothScroll={false}>{_jsx6(motion6.a, {
                          className: "framer-styles-preset-7o8msg",
                          "data-styles-preset": "F9x4QnoDS",
                          children: "Contact"
                        })}</Link3>
                    })}</React6.Fragment>}</RichTextWithFX>}</Transition5>]
            }), isDisplayed4() && <ComponentViewportProvider2 height={53} y={(componentViewport?.y || 0) + (30 + ((componentViewport?.height || 74) - 60 - 54) / 2) + 0.5} {...addPropertyOverrides5({
              m68no0X1X: {
                y: (componentViewport?.y || 0) + 0 + (((componentViewport?.height || 800) - 64 - (64 + Math.max(0, ((componentViewport?.height || 800) - 64 - 64) / 1) * 1 + 0)) / 2 + 64 + 0) + 80 + (0 + 282 + (Math.max(0, ((componentViewport?.height || 800) - 64 - 64) / 1) * 1 - 80 - 335) / 1 * 1)
              }
            }, baseVariant, gestureVariant)}>{_jsx6(motion6.div, {
                className: "framer-1r74r7y-container",
                layoutDependency,
                layoutId: "jTy15tCDq-container",
                children: _jsx6(yZBQGZIRL_default, {
                  height: "100%",
                  id: "jTy15tCDq",
                  layoutId: "jTy15tCDq",
                  P7ZHYgc9n: "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))",
                  RQDpSij6V: "var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(255, 59, 50))",
                  TiAMtDaz3: "Login",
                  variant: "llZeWFj0E",
                  width: "100%"
                })
              })}</ComponentViewportProvider2>]
          })}{isDisplayed5() && <Transition5 {...addPropertyOverrides5({
            ArN0AKCa6: {
              value: transition122
            },
            m68no0X1X: {
              value: transition122
            },
            rkAiYEczi: {
              value: transition122
            }
          }, baseVariant, gestureVariant)}>{_jsx6(motion6.div, {
              className: "framer-16p0ivu",
              "data-framer-name": "Backdrop",
              layoutDependency,
              layoutId: "J1uYNA6Yh",
              style: {
                backgroundColor: "rgb(0, 0, 0)",
                opacity: 1
              },
              variants: {
                ArN0AKCa6: {
                  opacity: 0
                },
                m68no0X1X: {
                  backgroundColor: "var(--token-8b7bf222-cf23-422b-9349-f0eb5832be6f, rgb(18, 9, 174))"
                },
                rkAiYEczi: {
                  opacity: 0
                }
              }
            })}</Transition5>}{isDisplayed3() && _jsxs4(motion6.div, {
            className: "framer-nkif37",
            "data-framer-name": "Logo & Menu Icon",
            layoutDependency,
            layoutId: "cjo9Ndo6A",
            style: {
              backgroundColor: "rgba(10, 11, 10, 0)"
            },
            children: [<ComponentViewportProvider2 height={44} {...addPropertyOverrides5({
              m68no0X1X: {
                y: (componentViewport?.y || 0) + 0 + (((componentViewport?.height || 800) - 64 - (64 + Math.max(0, ((componentViewport?.height || 800) - 64 - 64) / 1) * 1 + 0)) / 2 + 0 + 0) + 10
              }
            }, baseVariant, gestureVariant)}>{_jsx6(motion6.div, {
                className: "framer-1hr0d53-container",
                "data-framer-name": "Menu Icon",
                layoutDependency,
                layoutId: "UTB1rQnSd-container",
                name: "Menu Icon",
                children: <BM6dW4dQJ_default height="100%" id="UTB1rQnSd" layoutId="UTB1rQnSd" name="Menu Icon" variant="at430vW36" width="100%" XKaY3MrGu={XKaY3MrGu1rnp7w1} />
              })}</ComponentViewportProvider2>, <Link3 href={{
              webPageId: "yL4gWBfht"
            }}>{<SVG2 as="a" className="framer-a0hnmb framer-2s7m75" data-framer-name="Graphic" fill="black" intrinsicHeight={76} intrinsicWidth={323} layoutDependency={layoutDependency} layoutId="gSDEUWYSf" svg={__svg_3} withExternalLayout />}</Link3>]
          })}</MotionNavWithFX>}</Transition5>}</Variants5>}</LayoutGroup5>;
});
var css10 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-h7mEU.framer-2s7m75, .framer-h7mEU .framer-2s7m75 { display: block; }", ".framer-h7mEU.framer-1h7jek3 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: 74px; justify-content: center; overflow: visible; padding: 30px 32px 30px 32px; position: relative; width: 1280px; }", ".framer-h7mEU .framer-1eswwh4 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1440px; overflow: visible; padding: 0px; position: relative; width: 1px; }", ".framer-h7mEU .framer-13vkv8t { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 10px 0px 10px 0px; position: relative; text-decoration: none; width: min-content; z-index: 2; }", ".framer-h7mEU .framer-17ri5mb-container, .framer-h7mEU .framer-gdz00h-container, .framer-h7mEU .framer-1hr0d53-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-h7mEU .framer-c0mgdo { aspect-ratio: 4.25 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 34px); position: relative; width: 145px; z-index: 10; }", ".framer-h7mEU .framer-1xdnklo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-h7mEU .framer-qz7g45, .framer-h7mEU .framer-1tcvoe3, .framer-h7mEU .framer-11sfb6k, .framer-h7mEU .framer-psdndr { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }", ".framer-h7mEU .framer-1r74r7y-container { flex: none; height: auto; position: relative; width: auto; z-index: 2; }", ".framer-h7mEU .framer-16p0ivu { flex: none; height: calc(var(--framer-viewport-height, 100vh) * 1); left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 1; }", ".framer-h7mEU .framer-nkif37 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 10px 0px 10px 0px; position: relative; width: 1px; z-index: 2; }", ".framer-h7mEU .framer-a0hnmb { aspect-ratio: 4.25 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 20px); position: relative; text-decoration: none; width: 85px; z-index: 10; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-h7mEU.framer-1h7jek3, .framer-h7mEU .framer-1xdnklo { gap: 0px; } .framer-h7mEU.framer-1h7jek3 > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-h7mEU.framer-1h7jek3 > :first-child, .framer-h7mEU .framer-1xdnklo > :first-child { margin-left: 0px; } .framer-h7mEU.framer-1h7jek3 > :last-child, .framer-h7mEU .framer-1xdnklo > :last-child { margin-right: 0px; } .framer-h7mEU .framer-1xdnklo > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }", ".framer-h7mEU.framer-v-1y27ync.framer-1h7jek3, .framer-h7mEU.framer-v-lvom9m.framer-1h7jek3 { flex-direction: column; gap: 0px; height: min-content; padding: 0px 12px 0px 24px; width: 390px; }", ".framer-h7mEU.framer-v-1y27ync .framer-1eswwh4, .framer-h7mEU.framer-v-lvom9m .framer-1eswwh4 { flex: none; order: 2; width: 100%; }", ".framer-h7mEU.framer-v-1y27ync .framer-13vkv8t, .framer-h7mEU.framer-v-lvom9m .framer-13vkv8t { flex: 1 0 0px; overflow: hidden; width: 1px; }", ".framer-h7mEU.framer-v-1y27ync .framer-17ri5mb-container, .framer-h7mEU.framer-v-yw591j .framer-1tcvoe3, .framer-h7mEU.framer-v-yw591j .framer-16p0ivu, .framer-h7mEU.framer-v-yw591j .framer-1hr0d53-container, .framer-h7mEU.framer-v-lvom9m .framer-17ri5mb-container { order: 1; }", ".framer-h7mEU.framer-v-1y27ync .framer-c0mgdo, .framer-h7mEU.framer-v-lvom9m .framer-c0mgdo { height: var(--framer-aspect-ratio-supported, 20px); order: 0; width: 85px; }", ".framer-h7mEU.framer-v-1y27ync .framer-16p0ivu, .framer-h7mEU.framer-v-lvom9m .framer-16p0ivu { order: 1; pointer-events: none; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-h7mEU.framer-v-1y27ync.framer-1h7jek3 { gap: 0px; } .framer-h7mEU.framer-v-1y27ync.framer-1h7jek3 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-h7mEU.framer-v-1y27ync.framer-1h7jek3 > :first-child { margin-top: 0px; } .framer-h7mEU.framer-v-1y27ync.framer-1h7jek3 > :last-child { margin-bottom: 0px; } }", ".framer-h7mEU.framer-v-yw591j.framer-1h7jek3 { flex-direction: column; gap: 0px; height: 800px; max-height: calc(var(--framer-viewport-height, 100vh) * 1); min-height: calc(var(--framer-viewport-height, 100vh) * 1); overflow: hidden; padding: 0px 12px 64px 24px; width: 390px; }", ".framer-h7mEU.framer-v-yw591j .framer-1eswwh4 { align-content: flex-start; align-items: flex-start; flex-direction: column; height: 1px; order: 2; padding: 80px 0px 0px 0px; width: 100%; }", ".framer-h7mEU.framer-v-yw591j .framer-1xdnklo { align-content: flex-start; align-items: flex-start; flex-direction: column; justify-content: flex-start; padding: 20px 0px 40px 0px; width: 100%; z-index: 2; }", ".framer-h7mEU.framer-v-yw591j .framer-qz7g45, .framer-h7mEU.framer-v-yw591j .framer-a0hnmb { order: 0; }", ".framer-h7mEU.framer-v-yw591j .framer-11sfb6k { order: 2; }", ".framer-h7mEU.framer-v-yw591j .framer-psdndr { order: 3; }", ".framer-h7mEU.framer-v-yw591j .framer-nkif37 { flex: none; order: 0; width: 100%; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-h7mEU.framer-v-yw591j.framer-1h7jek3, .framer-h7mEU.framer-v-yw591j .framer-1eswwh4, .framer-h7mEU.framer-v-yw591j .framer-1xdnklo { gap: 0px; } .framer-h7mEU.framer-v-yw591j.framer-1h7jek3 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-h7mEU.framer-v-yw591j.framer-1h7jek3 > :first-child, .framer-h7mEU.framer-v-yw591j .framer-1xdnklo > :first-child { margin-top: 0px; } .framer-h7mEU.framer-v-yw591j.framer-1h7jek3 > :last-child, .framer-h7mEU.framer-v-yw591j .framer-1xdnklo > :last-child { margin-bottom: 0px; } .framer-h7mEU.framer-v-yw591j .framer-1eswwh4 > *, .framer-h7mEU.framer-v-yw591j .framer-1eswwh4 > :first-child, .framer-h7mEU.framer-v-yw591j .framer-1eswwh4 > :last-child { margin: 0px; } .framer-h7mEU.framer-v-yw591j .framer-1xdnklo > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-h7mEU.framer-v-lvom9m.framer-1h7jek3 { gap: 0px; } .framer-h7mEU.framer-v-lvom9m.framer-1h7jek3 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-h7mEU.framer-v-lvom9m.framer-1h7jek3 > :first-child { margin-top: 0px; } .framer-h7mEU.framer-v-lvom9m.framer-1h7jek3 > :last-child { margin-bottom: 0px; } }", ...css2, ...css];
var FramervwOltRhhT = withCSS6(Component6, css10, "framer-h7mEU");
var vwOltRhhT_default = FramervwOltRhhT;
FramervwOltRhhT.displayName = "Navigation/Topbar";
FramervwOltRhhT.defaultProps = {
  height: 74,
  width: 1280
};
addPropertyControls6(FramervwOltRhhT, {
  variant: {
    options: ["vknkFEn9I", "rkAiYEczi", "m68no0X1X", "ArN0AKCa6", "AW_92XY5M"],
    optionTitles: ["Desktop", "Phone", "Phone Open", "Close", "black"],
    title: "Variant",
    type: ControlType6.Enum
  },
  RJ1C3SDsl: {
    title: "Open Overlay",
    type: ControlType6.EventHandler
  },
  ndvmM7YFX: {
    title: "close",
    type: ControlType6.EventHandler
  }
});
addFonts5(FramervwOltRhhT, [{
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
  }]
}, ...NavigationMenuIconFonts, ...NavigationMenuFonts, ...ButtonFonts, ...getFontsFromSharedStyle3(fonts2), ...getFontsFromSharedStyle3(fonts)], {
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
      "name": "FramervwOltRhhT",
      "slots": [],
      "annotations": {
        "framerIntrinsicHeight": "74",
        "framerVariables": '{"RJ1C3SDsl":"openOverlay","ndvmM7YFX":"close"}',
        "framerContractVersion": "1",
        "framerIntrinsicWidth": "1280",
        "framerComponentViewportWidth": "true",
        "framerImmutableVariables": "true",
        "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"rkAiYEczi":{"layout":["fixed","auto"]},"m68no0X1X":{"layout":["fixed","fixed"],"constraints":[null,null,"100vh","100vh"]},"ArN0AKCa6":{"layout":["fixed","auto"]},"AW_92XY5M":{"layout":["fixed","fixed"]}}}',
        "framerDisplayContentsDiv": "false"
      }
    },
    "__FramerMetadata__": {
      "type": "variable"
    }
  }
};
var _OriginalComponent = vwOltRhhT_default;
function NavigationTopbarWrapped(props) {
  var _variant = useVariant(props.variant);
  var _inner = (_variant !== undefined) ? { ...props, variant: _variant } : props;
  return _ctxJsx(ContextProviders, { children: _ctxJsx(_OriginalComponent, _inner) });
}
Object.assign(NavigationTopbarWrapped, _OriginalComponent);
export {  __FramerMetadata__,  NavigationTopbarWrapped as default   };