"use client"
// http-url:https://framerusercontent.com/modules/SlKNGR3e1DOVXrX5qFtx/PQRHgUBEy45sTVpbizbP/VG4Cdi1PG.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, getFontsFromSharedStyle, getLoadingLazyAtYPosition, Image, RichText, useActiveVariantCallback, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "@proofly-framer/runtime";
import { LayoutGroup, motion, MotionConfigContext } from "@proofly-framer/runtime";
import * as React from "react";

// http-url:https://framerusercontent.com/modules/4Gv6O9WcEjYFF3D7KrRp/D2m1QMhoIrhAelQp8PSY/mBypMumWB.js
import { fontStore } from "@proofly-framer/runtime";
import { jsx as _ctxJsx } from "react/jsx-runtime";
import { ContextProviders, useVariant } from "@proofly-framer/runtime";
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

// http-url:https://framerusercontent.com/modules/SlKNGR3e1DOVXrX5qFtx/PQRHgUBEy45sTVpbizbP/VG4Cdi1PG.js
var enabledGestures = {
  nNgDQrwry: {
    hover: true,
    pressed: true
  }
};
var serializationHash = "framer-z0xyd";
var variantClassNames = {
  nNgDQrwry: "framer-v-rop6p0"
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
var toResponsiveImage = value => {
  if (typeof value === "object" && value !== null && typeof value.src === "string") {
    return value;
  }
  return typeof value === "string" ? {
    src: value
  } : void 0;
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
var getProps = ({
  click,
  height,
  id,
  name1,
  picture,
  role,
  width,
  ...props
}) => {
  return {
    ...props,
    JXB6Jd6G9: click ?? props.JXB6Jd6G9,
    RFjLBCnQo: picture ?? props.RFjLBCnQo ?? {
      src: "https://framerusercontent.com/images/OdNHS7cE8IyL65pIQiXWJ6J23wA.png"
    },
    SwCKgp6TX: role ?? props.SwCKgp6TX ?? "CO-FOUNDER, PRESIDENT",
    w4hMM9O64: name1 ?? props.w4hMM9O64 ?? "Chris Nolte"
  };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Variants = motion.create(React.Fragment);
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
    w4hMM9O64,
    SwCKgp6TX,
    RFjLBCnQo,
    JXB6Jd6G9,
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
    defaultVariant: "nNgDQrwry",
    enabledGestures,
    variant,
    variantClassNames
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const {
    activeVariantCallback,
    delay
  } = useActiveVariantCallback(baseVariant);
  const onTapfgewhd = activeVariantCallback(async (...args) => {
    setGestureState({
      isPressed: false
    });
    if (JXB6Jd6G9) {
      const res = await JXB6Jd6G9(...args);
      if (res === false) return false;
    }
  });
  const sharedStyleClassNames = [className];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  const ref1 = React.useRef(null);
  const defaultLayoutId = React.useId();
  const componentViewport = useComponentViewport();
  return <LayoutGroup id={layoutId ?? defaultLayoutId}>{<Variants animate={variants} initial={false}>{<Transition value={transition1}>{_jsxs(motion.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx(scopingClassNames, "framer-rop6p0", className2, classNames),
          "data-framer-name": "Variant 1",
          "data-highlight": true,
          layoutDependency,
          layoutId: "nNgDQrwry",
          onTap: onTapfgewhd,
          ref: ref ?? ref1,
          style: {
            backgroundColor: "var(--token-7ce68db9-0723-4469-83ef-663a6e703840, rgb(43, 43, 61))",
            ...style
          },
          variants: {
            "nNgDQrwry-hover": {
              backgroundColor: "var(--token-8b7bf222-cf23-422b-9349-f0eb5832be6f, rgb(18, 9, 174))"
            },
            "nNgDQrwry-pressed": {
              backgroundColor: "var(--token-8b7bf222-cf23-422b-9349-f0eb5832be6f, rgb(18, 9, 174))"
            }
          },
          ...addPropertyOverrides({
            "nNgDQrwry-hover": {
              "data-framer-name": void 0
            },
            "nNgDQrwry-pressed": {
              "data-framer-name": void 0
            }
          }, baseVariant, gestureVariant),
          children: [<Image background={{
            alt: "",
            fit: "fill",
            intrinsicHeight: 240.5,
            intrinsicWidth: 240.5,
            loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 0 + (((componentViewport?.height || 235.5) - 0 - 298) / 2 + 0 + 0)),
            pixelHeight: 481,
            pixelWidth: 481,
            sizes: componentViewport?.width || "100vw",
            ...toResponsiveImage(RFjLBCnQo),
            ...{
              positionX: "center",
              positionY: "center"
            }
          }} className="framer-1vfqdx4" data-framer-name="Image" layoutDependency={layoutDependency} layoutId="yAIyCseMb" />, _jsxs(motion.div, {
            className: "framer-2lzihm",
            "data-framer-name": "name",
            layoutDependency,
            layoutId: "wkmqaSAPq",
            children: [<RichText __fromCanvasComponent className="framer-62fr4f" data-framer-name="Heading5" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="YEhq8UvdF" style={{
              "--framer-paragraph-spacing": "0px"
            }} text={w4hMM9O64} verticalAlignment="top" withExternalLayout>{<>{_jsxs(motion.h4, {
                  className: "framer-styles-preset-r2slzk",
                  "data-styles-preset": "mBypMumWB",
                  children: ["Chris ", _jsx(motion.br, {}), "Nolte"]
                })}</>}</RichText>, <RichText __fromCanvasComponent className="framer-1up00ns" data-framer-name="Subtitle2" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="yrVOStfJF" style={{
              "--extracted-r6o4lv": "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(224, 224, 255))",
              "--framer-paragraph-spacing": "0px"
            }} text={SwCKgp6TX} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.p, {
                  style: {
                    "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                    "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                    "--framer-font-size": "13px",
                    "--framer-line-height": "120%",
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(224, 224, 255)))"
                  },
                  children: "CO-FOUNDER, PRESIDENT"
                })}</>}</RichText>]
          })]
        })}</Transition>}</Variants>}</LayoutGroup>;
});
var css2 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-z0xyd.framer-aa850j, .framer-z0xyd .framer-aa850j { display: block; }", ".framer-z0xyd.framer-rop6p0 { align-content: flex-end; align-items: flex-end; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 199px; }", ".framer-z0xyd .framer-1vfqdx4 { flex: none; height: 150px; overflow: visible; position: relative; width: 100%; }", ".framer-z0xyd .framer-2lzihm { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 16px; position: relative; width: 100%; }", ".framer-z0xyd .framer-62fr4f, .framer-z0xyd .framer-1up00ns { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-z0xyd.framer-rop6p0, .framer-z0xyd .framer-2lzihm { gap: 0px; } .framer-z0xyd.framer-rop6p0 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-z0xyd.framer-rop6p0 > :first-child, .framer-z0xyd .framer-2lzihm > :first-child { margin-top: 0px; } .framer-z0xyd.framer-rop6p0 > :last-child, .framer-z0xyd .framer-2lzihm > :last-child { margin-bottom: 0px; } .framer-z0xyd .framer-2lzihm > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } }", ".framer-z0xyd.framer-v-rop6p0.hover .framer-1vfqdx4, .framer-z0xyd.framer-v-rop6p0.pressed .framer-1vfqdx4 { mix-blend-mode: screen; }", ...css];
var FramerVG4Cdi1PG = withCSS(Component, css2, "framer-z0xyd");
var VG4Cdi1PG_default = FramerVG4Cdi1PG;
FramerVG4Cdi1PG.displayName = "leadership card";
FramerVG4Cdi1PG.defaultProps = {
  height: 235.5,
  width: 199
};
addPropertyControls(FramerVG4Cdi1PG, {
  w4hMM9O64: {
    defaultValue: "Chris Nolte",
    displayTextArea: true,
    title: "Name",
    type: ControlType.String
  },
  SwCKgp6TX: {
    defaultValue: "CO-FOUNDER, PRESIDENT",
    displayTextArea: true,
    placeholder: "Role",
    title: "Role",
    type: ControlType.String
  },
  RFjLBCnQo: {
    __defaultAssetReference: "data:framer/asset-reference,OdNHS7cE8IyL65pIQiXWJ6J23wA.png?originalFilename=image.png&preferredSize=auto",
    title: "picture",
    type: ControlType.ResponsiveImage
  },
  JXB6Jd6G9: {
    title: "Click",
    type: ControlType.EventHandler
  }
});
addFonts(FramerVG4Cdi1PG, [{
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
      "name": "FramerVG4Cdi1PG",
      "slots": [],
      "annotations": {
        "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"JHnq176uB":{"layout":["fixed","auto"]},"kj1DFoKaR":{"layout":["fixed","auto"]}}}',
        "framerDisplayContentsDiv": "false",
        "framerImmutableVariables": "true",
        "framerVariables": '{"w4hMM9O64":"name1","SwCKgp6TX":"role","RFjLBCnQo":"picture","JXB6Jd6G9":"click"}',
        "framerIntrinsicHeight": "235.5",
        "framerContractVersion": "1",
        "framerIntrinsicWidth": "199",
        "framerComponentViewportWidth": "true"
      }
    },
    "__FramerMetadata__": {
      "type": "variable"
    }
  }
};
var _OriginalComponent = VG4Cdi1PG_default;
function LeadershipcardWrapped(props) {
  var _variant = useVariant(props.variant);
  var _inner = (_variant !== undefined) ? { ...props, variant: _variant } : props;
  return _ctxJsx(ContextProviders, { children: _ctxJsx(_OriginalComponent, _inner) });
}
Object.assign(LeadershipcardWrapped, _OriginalComponent);
export {  __FramerMetadata__,  LeadershipcardWrapped as default   };