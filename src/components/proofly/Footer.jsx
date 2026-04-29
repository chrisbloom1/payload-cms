"use client"
// http-url:https://framerusercontent.com/modules/pgETCqzK2pq83kQir7vT/huvVCzYUd7v4K3DBT7eO/Nay6sUX2m.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, getFontsFromSharedStyle, Link, RichText, SVG, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "@proofly-framer/runtime";
import { LayoutGroup, motion, MotionConfigContext } from "@proofly-framer/runtime";
import * as React from "react";
import { useRef } from "react";

// Extracted SVG assets
const __svg_1 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 226 50\"><g><defs><linearGradient id=\"idss11355357260_1g902684843\" x1=\"0.49661691542288544\" x2=\"0.5012935323383085\" y1=\"-0.18\" y2=\"0.76\"><stop offset=\"0\" stop-color=\"rgb(255,152,0)\" stop-opacity=\"1\"></stop><stop offset=\"1\" stop-color=\"rgb(238,39,55)\" stop-opacity=\"1\"></stop></linearGradient></defs><path d=\"M 223.063 5.107 L 213.559 14.625 L 218.703 2.189 L 216.172 1.14 L 211.029 13.575 L 211.029 0.115 L 208.289 0.115 L 208.289 13.575 L 203.146 1.14 L 200.615 2.189 L 205.759 14.625 L 196.255 5.107 L 194.318 7.047 L 209.659 22.411 L 225 7.047 Z\" fill=\"url(#idss11355357260_1g902684843)\"></path></g><path d=\"M 0 0.139 L 21.304 0.139 C 29.924 0.139 35.74 5.122 35.74 12.561 C 35.74 16.983 32.867 20.983 29.083 22.597 C 34.479 24.141 38.474 28.984 38.474 34.599 C 38.474 43.441 31.536 49.267 21.444 49.267 L 0 49.267 Z M 25.088 14.315 C 25.088 11.509 22.776 9.543 19.552 9.543 L 11.143 9.543 L 11.143 19.088 L 19.552 19.088 C 22.776 19.088 25.088 17.193 25.088 14.315 Z M 27.331 33.757 C 27.331 30.247 24.458 27.861 20.323 27.861 L 11.143 27.861 L 11.143 39.863 L 20.323 39.863 C 24.458 39.863 27.331 37.336 27.331 33.756 Z M 43.518 0.139 L 53.889 0.139 L 53.889 49.267 L 43.518 49.267 Z M 59.215 31.511 C 59.215 20.843 67.134 13.333 77.996 13.333 C 88.928 13.333 96.777 20.843 96.777 31.511 C 96.777 42.249 88.858 49.828 77.996 49.828 C 67.063 49.828 59.215 42.179 59.215 31.511 Z M 86.405 31.511 C 86.405 25.896 82.972 22.106 77.996 22.106 C 73.02 22.106 69.656 25.826 69.656 31.511 C 69.656 37.196 73.02 41.055 77.996 41.055 C 82.972 41.055 86.405 37.195 86.405 31.511 Z M 100.421 31.511 C 100.421 20.843 108.34 13.333 119.202 13.333 C 130.135 13.333 137.984 20.843 137.984 31.511 C 137.984 42.249 130.065 49.828 119.202 49.828 C 108.27 49.828 100.421 42.179 100.421 31.511 Z M 127.612 31.511 C 127.612 25.896 124.177 22.106 119.202 22.106 C 114.227 22.106 110.862 25.826 110.862 31.511 C 110.862 37.196 114.226 41.055 119.202 41.055 C 124.178 41.055 127.612 37.195 127.612 31.511 Z M 198.882 26.597 L 198.882 49.267 L 188.58 49.267 L 188.58 28.843 C 188.58 24.773 186.478 22.387 183.114 22.387 C 178.699 22.387 176.316 26.457 176.316 31.651 L 176.316 49.267 L 165.944 49.267 L 165.944 28.843 C 165.944 24.773 163.982 22.387 160.549 22.387 C 156.133 22.387 153.68 26.457 153.68 31.651 L 153.68 49.267 L 143.309 49.267 L 143.309 13.895 L 153.68 13.895 L 153.68 18.176 C 155.713 15.369 159.777 13.333 164.472 13.333 C 169.098 13.333 173.162 15.509 174.494 18.527 C 177.158 15.509 181.642 13.333 185.917 13.333 C 193.485 13.333 198.882 18.316 198.882 26.597 Z\" fill=\"var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)) /* {&quot;name&quot;:&quot;Background&quot;} */\"></path></svg>";
const __svg_2 = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc.--><path d=\"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z\"/></svg>";


// http-url:https://framerusercontent.com/modules/hgeSF0BKMgFnHMsI4lzF/wjzfasXY3IfLab2RiVX3/F9x4QnoDS.js
import { fontStore } from "@proofly-framer/runtime";
fontStore.loadFonts([]);
var fonts = [{
  explicitInter: true,
  fonts: []
}];
var css = ['.framer-ogr9j .framer-styles-preset-7o8msg:not(.rich-text-wrapper), .framer-ogr9j .framer-styles-preset-7o8msg.rich-text-wrapper a { --framer-link-current-text-color: var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, #ffffff); --framer-link-current-text-decoration: underline; --framer-link-hover-text-color: var(--token-2ae4d622-3758-4fad-a56d-08fa00cc7638, #adadc7); --framer-link-hover-text-decoration: underline; --framer-link-text-decoration: none; }'];
var className = "framer-ogr9j";

// http-url:https://framerusercontent.com/modules/po958ofTgBMLe6tlXILL/zjjtzEdpho00jVsBUiVi/NFWdOZg9G.js
import { fontStore as fontStore2 } from "@proofly-framer/runtime";
fontStore2.loadFonts([]);
var fonts2 = [{
  explicitInter: true,
  fonts: []
}];
var css2 = [".framer-JfgIA .framer-styles-preset-14s7icc:not(.rich-text-wrapper), .framer-JfgIA .framer-styles-preset-14s7icc.rich-text-wrapper a { --framer-link-hover-text-decoration: underline; }"];
var className2 = "framer-JfgIA";

// http-url:https://framerusercontent.com/modules/5b0cRZbgNRw1dCNVnxhv/mDSpobAAY3IZwQ4LzCUn/z4Urx0kPV.js
import { fontStore as fontStore3 } from "@proofly-framer/runtime";
import { jsx as _ctxJsx } from "react/jsx-runtime";
import { ContextProviders, useVariant } from "@proofly-framer/runtime";
fontStore3.loadFonts(["CUSTOM;Haffer Regular", "CUSTOMV2;Haffer Bold", "CUSTOMV2;Haffer Bold Italic", "CUSTOMV2;Haffer Regular Italic"]);
var fonts3 = [{
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
var css3 = ['.framer-tLH4r .framer-styles-preset-1e98430:not(.rich-text-wrapper), .framer-tLH4r .framer-styles-preset-1e98430.rich-text-wrapper h5 { --framer-font-family: "Haffer Regular", sans-serif; --framer-font-family-bold: "Haffer Bold", sans-serif; --framer-font-family-bold-italic: "Haffer Bold Italic", sans-serif; --framer-font-family-italic: "Haffer Regular Italic", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 430; --framer-font-weight-bold: 790; --framer-font-weight-bold-italic: 790; --framer-font-weight-italic: 430; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }', '@media (max-width: 768px) and (min-width: 0px) { .framer-tLH4r .framer-styles-preset-1e98430:not(.rich-text-wrapper), .framer-tLH4r .framer-styles-preset-1e98430.rich-text-wrapper h5 { --framer-font-family: "Haffer Regular", sans-serif; --framer-font-family-bold: "Haffer Bold", sans-serif; --framer-font-family-bold-italic: "Haffer Bold Italic", sans-serif; --framer-font-family-italic: "Haffer Regular Italic", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 430; --framer-font-weight-bold: 790; --framer-font-weight-bold-italic: 790; --framer-font-weight-italic: 430; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }'];
var className3 = "framer-tLH4r";

// http-url:https://framerusercontent.com/modules/pgETCqzK2pq83kQir7vT/huvVCzYUd7v4K3DBT7eO/Nay6sUX2m.js
var cycleOrder = ["e6HBFILgg", "qD82lUNa5", "k2EEDG6yC", "iEdt0B9M3"];
var serializationHash = "framer-Necrt";
var variantClassNames = {
  e6HBFILgg: "framer-v-1us6xi2",
  iEdt0B9M3: "framer-v-1hcj7r",
  k2EEDG6yC: "framer-v-15a5vh8",
  qD82lUNa5: "framer-v-how45k"
};
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach(variant => variant && Object.assign(nextOverrides, overrides[variant]));
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
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({
    ...config,
    transition
  }), [JSON.stringify(transition)]);
  return <MotionConfigContext.Provider value={contextValue}>{children}</MotionConfigContext.Provider>;
};
var humanReadableVariantMap = {
  Desktop: "e6HBFILgg",
  Laptop: "iEdt0B9M3",
  Phone: "k2EEDG6yC",
  Tablet: "qD82lUNa5"
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
    variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "e6HBFILgg"
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
    className: className4,
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
    defaultVariant: "e6HBFILgg",
    ref: refBinding,
    variant,
    variantClassNames
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [className3, className2, className];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return <LayoutGroup id={layoutId ?? defaultLayoutId}>{<Variants animate={variants} initial={false}>{<Transition value={transition1}>{_jsx(motion.footer, {
          ...restProps,
          ...gestureHandlers,
          className: cx(scopingClassNames, "framer-1us6xi2", className4, classNames),
          "data-framer-name": "Desktop",
          layoutDependency,
          layoutId: "e6HBFILgg",
          ref: refBinding,
          style: {
            backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))",
            ...style
          },
          ...addPropertyOverrides({
            iEdt0B9M3: {
              "data-framer-name": "Laptop"
            },
            k2EEDG6yC: {
              "data-framer-name": "Phone"
            },
            qD82lUNa5: {
              "data-framer-name": "Tablet"
            }
          }, baseVariant, gestureVariant),
          children: _jsxs(motion.div, {
            className: "framer-1e19kjx",
            "data-border": true,
            "data-framer-name": "Container",
            layoutDependency,
            layoutId: "b3UPCD10g",
            style: {
              "--border-bottom-width": "0px",
              "--border-color": "rgba(255, 255, 255, 0.1)",
              "--border-left-width": "0px",
              "--border-right-width": "0px",
              "--border-style": "solid",
              "--border-top-width": "0px"
            },
            children: [_jsxs(motion.div, {
              className: "framer-o5kah8",
              layoutDependency,
              layoutId: "anzF151Pp",
              children: [_jsxs(motion.div, {
                className: "framer-e2pp5j",
                layoutDependency,
                layoutId: "GjXjx5OaF",
                children: [_jsxs(motion.div, {
                  className: "framer-1efaqel",
                  layoutDependency,
                  layoutId: "lUGEb75Jb",
                  children: [_jsx(motion.div, {
                    className: "framer-67nroa",
                    layoutDependency,
                    layoutId: "pnEtdnfpe",
                    style: {
                      scale: 1
                    },
                    variants: {
                      iEdt0B9M3: {
                        scale: 1
                      },
                      k2EEDG6yC: {
                        scale: 0.75
                      }
                    },
                    children: <Link href={{
                      webPageId: "ijdDBqxJ7"
                    }} motionChild nodeId="VlS_1_Ir7" openInNewTab={false} scopeId="Nay6sUX2m">{<SVG as="a" className="framer-103olwo framer-1hiochl" data-framer-name="Graphic" layout="position" layoutDependency={layoutDependency} layoutId="VlS_1_Ir7" opacity={1} svg={__svg_1} svgContentId={11355357260} withExternalLayout />}</Link>
                  }), <RichText __fromCanvasComponent className="framer-1mx91ih" data-framer-name="Copyright" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="nstqNRMyO" style={{
                    "--extracted-1w3ko1f": "rgb(234, 234, 235)",
                    "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
                  }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
                    k2EEDG6yC: {
                      children: <>{_jsxs(motion.p, {
                          style: {
                            "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                            "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                            "--framer-line-height": "110%",
                            "--framer-text-alignment": "center",
                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                          },
                          children: ["2050 15th St", _jsx(motion.span, {
                            style: {
                              "--framer-text-color": "var(--extracted-1w3ko1f, rgb(234, 234, 235))"
                            },
                            children: _jsx(motion.br, {})
                          }), "Detroit, MI 48216"]
                        })}</>
                    }
                  }, baseVariant, gestureVariant)}>{<>{_jsxs(motion.p, {
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                          "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                          "--framer-line-height": "110%",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                        },
                        children: ["2050 15th St", _jsx(motion.span, {
                          style: {
                            "--framer-text-color": "var(--extracted-1w3ko1f, rgb(234, 234, 235))"
                          },
                          children: _jsx(motion.br, {})
                        }), "Detroit, MI 48216"]
                      })}</>}</RichText>, <RichText __fromCanvasComponent className="framer-6h45qm" data-framer-name="Copyright" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="lj7YLMA6H" style={{
                    "--extracted-1w3ko1f": "rgb(234, 234, 235)",
                    "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
                  }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
                    k2EEDG6yC: {
                      children: <>{_jsxs(motion.p, {
                          style: {
                            "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                            "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                            "--framer-line-height": "110%",
                            "--framer-text-alignment": "center",
                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                          },
                          children: ["19 Morris Ave", _jsx(motion.span, {
                            style: {
                              "--framer-text-color": "var(--extracted-1w3ko1f, rgb(234, 234, 235))"
                            },
                            children: _jsx(motion.br, {})
                          }), "Brooklyn, NY 10019"]
                        })}</>
                    }
                  }, baseVariant, gestureVariant)}>{<>{_jsxs(motion.p, {
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                          "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                          "--framer-line-height": "110%",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                        },
                        children: ["19 Morris Ave", _jsx(motion.span, {
                          style: {
                            "--framer-text-color": "var(--extracted-1w3ko1f, rgb(234, 234, 235))"
                          },
                          children: _jsx(motion.br, {})
                        }), "Brooklyn, NY 10019"]
                      })}</>}</RichText>]
                }), _jsx(motion.div, {
                  className: "framer-1k4yb1t",
                  layoutDependency,
                  layoutId: "lVovqtnBC",
                  children: <Link href="https://www.linkedin.com/company/bloomus" motionChild nodeId="bhOKQTkc9" scopeId="Nay6sUX2m">{_jsx(motion.a, {
                      className: "framer-l4qyc8 framer-1hiochl",
                      layoutDependency,
                      layoutId: "bhOKQTkc9",
                      children: <SVG className="framer-1nrk3z4" data-framer-name="Linkedin" fill="var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))" intrinsicHeight={512} intrinsicWidth={448} layoutDependency={layoutDependency} layoutId="Oq29_LUpv" svg={__svg_2} withExternalLayout />
                    })}</Link>
                })]
              }), _jsx(motion.div, {
                className: "framer-1pzd2tr",
                layoutDependency,
                layoutId: "Eik8EO0mE",
                children: _jsxs(motion.div, {
                  className: "framer-11xuyt3",
                  layoutDependency,
                  layoutId: "uO9pJKmej",
                  children: [_jsxs(motion.div, {
                    className: "framer-19scyi2",
                    layoutDependency,
                    layoutId: "hwvgd_DlI",
                    children: [<RichText __fromCanvasComponent className="framer-1cotuyf" data-framer-name="Copyright" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="xKWptrWKC" style={{
                      "--extracted-1lwpl3i": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
                    }} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.h5, {
                          className: "framer-styles-preset-1e98430",
                          "data-styles-preset": "z4Urx0kPV",
                          style: {
                            "--framer-text-color": "var(--extracted-1lwpl3i, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                          },
                          children: "BLOOM"
                        })}</>}</RichText>, <RichText __fromCanvasComponent className="framer-ik7yf4" data-framer-name="Copyright" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="ZhHagpfTp" style={{
                      "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
                    }} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.p, {
                          style: {
                            "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                            "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                            "--framer-line-height": "110%",
                            "--framer-text-alignment": "left",
                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                          },
                          children: <Link href={{
                            webPageId: "augiA20Il"
                          }} motionChild nodeId="ZhHagpfTp" openInNewTab={false} relValues={[]} scopeId="Nay6sUX2m" smoothScroll={false}>{_jsx(motion.a, {
                              className: "framer-styles-preset-14s7icc",
                              "data-styles-preset": "NFWdOZg9G",
                              children: "Company"
                            })}</Link>
                        })}</>}</RichText>, <RichText __fromCanvasComponent className="framer-4wesbt" data-framer-name="Copyright" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="NAWcVw75P" style={{
                      "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
                    }} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.p, {
                          style: {
                            "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                            "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                            "--framer-line-height": "110%",
                            "--framer-text-alignment": "left",
                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                          },
                          children: <Link href={{
                            webPageId: "XzIlki2Ym"
                          }} motionChild nodeId="NAWcVw75P" openInNewTab={false} relValues={[]} scopeId="Nay6sUX2m" smoothScroll={false}>{_jsx(motion.a, {
                              className: "framer-styles-preset-14s7icc",
                              "data-styles-preset": "NFWdOZg9G",
                              children: "For Brands"
                            })}</Link>
                        })}</>}</RichText>, <RichText __fromCanvasComponent className="framer-w394u1" data-framer-name="Copyright" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="numvJXj4p" style={{
                      "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
                    }} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.p, {
                          style: {
                            "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                            "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                            "--framer-line-height": "110%",
                            "--framer-text-alignment": "left",
                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                          },
                          children: <Link href={{
                            webPageId: "s2mtaO1Iz"
                          }} motionChild nodeId="numvJXj4p" openInNewTab={false} relValues={[]} scopeId="Nay6sUX2m" smoothScroll={false}>{_jsx(motion.a, {
                              className: "framer-styles-preset-14s7icc",
                              "data-styles-preset": "NFWdOZg9G",
                              children: "For Providers"
                            })}</Link>
                        })}</>}</RichText>, <RichText __fromCanvasComponent className="framer-2cap0h" data-framer-name="Copyright" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="hvErOTRTn" style={{
                      "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
                    }} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.p, {
                          style: {
                            "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                            "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                            "--framer-line-height": "110%",
                            "--framer-text-alignment": "left",
                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                          },
                          children: <Link href={{
                            webPageId: "ma6_zFJtf"
                          }} motionChild nodeId="hvErOTRTn" openInNewTab={false} relValues={[]} scopeId="Nay6sUX2m" smoothScroll={false}>{_jsx(motion.a, {
                              className: "framer-styles-preset-14s7icc",
                              "data-styles-preset": "NFWdOZg9G",
                              children: "Contact Us"
                            })}</Link>
                        })}</>}</RichText>]
                  }), _jsxs(motion.div, {
                    className: "framer-1ords6o",
                    layoutDependency,
                    layoutId: "x1dq7Xmp0",
                    children: [<RichText __fromCanvasComponent className="framer-sa3gon" data-framer-name="Copyright" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="UKAYv0D4m" style={{
                      "--extracted-1lwpl3i": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
                    }} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.h5, {
                          className: "framer-styles-preset-1e98430",
                          "data-styles-preset": "z4Urx0kPV",
                          style: {
                            "--framer-text-color": "var(--extracted-1lwpl3i, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                          },
                          children: "UPDATES"
                        })}</>}</RichText>, <RichText __fromCanvasComponent className="framer-577oov" data-framer-name="Copyright" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="N3VVeWVOI" style={{
                      "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
                    }} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.p, {
                          style: {
                            "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                            "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                            "--framer-line-height": "110%",
                            "--framer-text-alignment": "left",
                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                          },
                          children: <Link href={{
                            webPageId: "QhUQvRE6T"
                          }} motionChild nodeId="N3VVeWVOI" openInNewTab={false} relValues={[]} scopeId="Nay6sUX2m" smoothScroll={false}>{_jsx(motion.a, {
                              className: "framer-styles-preset-14s7icc",
                              "data-styles-preset": "NFWdOZg9G",
                              children: "News"
                            })}</Link>
                        })}</>}</RichText>, <RichText __fromCanvasComponent className="framer-zki5fi" data-framer-name="Copyright" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="bVOIqQTAt" style={{
                      "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
                    }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
                      k2EEDG6yC: {
                        children: <>{_jsx(motion.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                              "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                              "--framer-line-height": "110%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                            },
                            children: <Link href={{
                              webPageId: "Qy9zYxbIQ"
                            }} motionChild nodeId="bVOIqQTAt" openInNewTab={false} relValues={[]} scopeId="Nay6sUX2m" smoothScroll={false}>{_jsx(motion.a, {
                                className: "framer-styles-preset-14s7icc",
                                "data-styles-preset": "NFWdOZg9G",
                                children: "Customer Stories"
                              })}</Link>
                          })}</>
                      }
                    }, baseVariant, gestureVariant)}>{<>{_jsx(motion.p, {
                          style: {
                            "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                            "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                            "--framer-line-height": "110%",
                            "--framer-text-alignment": "left",
                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                          },
                          children: <Link href={{
                            webPageId: "Qy9zYxbIQ"
                          }} motionChild nodeId="bVOIqQTAt" openInNewTab={false} relValues={[]} scopeId="Nay6sUX2m" smoothScroll={false}>{_jsx(motion.a, {
                              className: "framer-styles-preset-14s7icc",
                              "data-styles-preset": "NFWdOZg9G",
                              children: "Customer Stories"
                            })}</Link>
                        })}</>}</RichText>]
                  })]
                })
              })]
            }), _jsxs(motion.div, {
              className: "framer-2irztm",
              layoutDependency,
              layoutId: "JY18bFiAX",
              children: [<RichText __fromCanvasComponent className="framer-v39o98" data-framer-name="Copyright" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="ZLGSkfT8m" style={{
                "--extracted-r6o4lv": "var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143))"
              }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
                k2EEDG6yC: {
                  children: <>{_jsxs(motion.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "12px",
                        "--framer-line-height": "110%",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)))"
                      },
                      children: ["Bloom ", <Link href="https://babarogic.com/" motionChild nodeId="ZLGSkfT8m" openInNewTab relValues={[]} scopeId="Nay6sUX2m" smoothScroll={false}>{_jsx(motion.a, {
                          className: "framer-styles-preset-7o8msg",
                          "data-styles-preset": "F9x4QnoDS",
                          children: "\xA9 202"
                        })}</Link>, "5"]
                    })}</>
                }
              }, baseVariant, gestureVariant)}>{<>{_jsxs(motion.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-line-height": "110%",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)))"
                    },
                    children: ["Bloom ", <Link href="https://babarogic.com/" motionChild nodeId="ZLGSkfT8m" openInNewTab relValues={[]} scopeId="Nay6sUX2m" smoothScroll={false}>{_jsx(motion.a, {
                        className: "framer-styles-preset-7o8msg",
                        "data-styles-preset": "F9x4QnoDS",
                        children: "\xA9 202"
                      })}</Link>, "5"]
                  })}</>}</RichText>, _jsxs(motion.div, {
                className: "framer-176yq15",
                layoutDependency,
                layoutId: "j5RNrt9pq",
                children: [<RichText __fromCanvasComponent className="framer-1st3g9y" data-framer-name="Copyright" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="ajPNYhttK" style={{
                  "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
                }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
                  k2EEDG6yC: {
                    children: <>{_jsx(motion.p, {
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                          "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                          "--framer-font-size": "12px",
                          "--framer-line-height": "110%",
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                        },
                        children: <Link href={{
                          webPageId: "jmsce1KtU"
                        }} motionChild nodeId="ajPNYhttK" openInNewTab={false} relValues={[]} scopeId="Nay6sUX2m" smoothScroll={false}>{_jsx(motion.a, {
                            className: "framer-styles-preset-14s7icc",
                            "data-styles-preset": "NFWdOZg9G",
                            children: "Privacy"
                          })}</Link>
                      })}</>
                  }
                }, baseVariant, gestureVariant)}>{<>{_jsx(motion.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-line-height": "110%",
                        "--framer-text-alignment": "center",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                      },
                      children: <Link href={{
                        webPageId: "jmsce1KtU"
                      }} motionChild nodeId="ajPNYhttK" openInNewTab={false} relValues={[]} scopeId="Nay6sUX2m" smoothScroll={false}>{_jsx(motion.a, {
                          className: "framer-styles-preset-14s7icc",
                          "data-styles-preset": "NFWdOZg9G",
                          children: "Privacy"
                        })}</Link>
                    })}</>}</RichText>, <RichText __fromCanvasComponent className="framer-1hcnlgb" data-framer-name="Copyright" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="Zxf8s2Qub" style={{
                  "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
                }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
                  k2EEDG6yC: {
                    children: <>{_jsx(motion.p, {
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                          "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                          "--framer-font-size": "12px",
                          "--framer-line-height": "110%",
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                        },
                        children: "Terms"
                      })}</>
                  }
                }, baseVariant, gestureVariant)}>{<>{_jsx(motion.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-line-height": "110%",
                        "--framer-text-alignment": "center",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                      },
                      children: "Terms"
                    })}</>}</RichText>]
              })]
            })]
          })
        })}</Transition>}</Variants>}</LayoutGroup>;
});
var css4 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-Necrt.framer-1hiochl, .framer-Necrt .framer-1hiochl { display: block; }", ".framer-Necrt.framer-1us6xi2 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; height: 553px; justify-content: space-around; overflow: visible; padding: 0px; position: relative; width: 1248px; }", ".framer-Necrt .framer-1e19kjx { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 1px; justify-content: space-around; max-width: 1280px; overflow: visible; padding: 32px 0px 32px 0px; position: relative; width: 100%; }", ".framer-Necrt .framer-o5kah8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1280px; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-Necrt .framer-e2pp5j { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-Necrt .framer-1efaqel { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 16px; position: relative; width: auto; }", ".framer-Necrt .framer-67nroa { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-Necrt .framer-103olwo { flex: none; height: 50px; position: relative; text-decoration: none; width: 226px; }", ".framer-Necrt .framer-1mx91ih, .framer-Necrt .framer-6h45qm, .framer-Necrt .framer-1cotuyf, .framer-Necrt .framer-ik7yf4, .framer-Necrt .framer-4wesbt, .framer-Necrt .framer-w394u1, .framer-Necrt .framer-2cap0h, .framer-Necrt .framer-sa3gon, .framer-Necrt .framer-577oov, .framer-Necrt .framer-zki5fi, .framer-Necrt .framer-1st3g9y, .framer-Necrt .framer-1hcnlgb { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-Necrt .framer-1k4yb1t { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }", ".framer-Necrt .framer-l4qyc8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 68px; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: 68px; }", ".framer-Necrt .framer-1nrk3z4 { aspect-ratio: 0.875 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 41px); position: relative; width: 36px; }", ".framer-Necrt .framer-1pzd2tr { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }", ".framer-Necrt .framer-11xuyt3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: flex-end; overflow: visible; padding: 36px 16px 36px 16px; position: relative; width: 100%; }", ".framer-Necrt .framer-19scyi2, .framer-Necrt .framer-1ords6o { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 200px; }", ".framer-Necrt .framer-2irztm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 16px; position: relative; width: 100%; }", ".framer-Necrt .framer-v39o98 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }", ".framer-Necrt .framer-176yq15 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-Necrt.framer-v-how45k.framer-1us6xi2 { height: min-content; padding: 32px; width: 810px; }", ".framer-Necrt.framer-v-how45k .framer-1e19kjx { flex: none; gap: 32px; height: min-content; justify-content: flex-start; }", ".framer-Necrt.framer-v-how45k .framer-o5kah8 { max-width: 1152px; order: 0; }", ".framer-Necrt.framer-v-how45k .framer-1efaqel { padding: 8px; }", ".framer-Necrt.framer-v-how45k .framer-l4qyc8 { height: 44px; width: 44px; }", ".framer-Necrt.framer-v-how45k .framer-1nrk3z4 { height: var(--framer-aspect-ratio-supported, 32px); width: 28px; }", ".framer-Necrt.framer-v-how45k .framer-11xuyt3 { gap: 48px; }", ".framer-Necrt.framer-v-how45k .framer-19scyi2, .framer-Necrt.framer-v-how45k .framer-1ords6o { width: min-content; }", ".framer-Necrt.framer-v-how45k .framer-2irztm { max-width: 1152px; order: 1; }", ".framer-Necrt.framer-v-15a5vh8.framer-1us6xi2 { gap: 0px; height: min-content; justify-content: center; padding: 32px 16px 16px 24px; width: 390px; }", ".framer-Necrt.framer-v-15a5vh8 .framer-1e19kjx { align-content: center; align-items: center; flex: none; gap: 32px; height: min-content; justify-content: center; padding: 16px 0px 16px 0px; }", ".framer-Necrt.framer-v-15a5vh8 .framer-o5kah8 { align-content: center; align-items: center; flex-direction: column; order: 0; }", ".framer-Necrt.framer-v-15a5vh8 .framer-e2pp5j { align-content: center; align-items: center; width: 100%; }", ".framer-Necrt.framer-v-15a5vh8 .framer-1efaqel { align-content: center; align-items: center; align-self: unset; width: 100%; }", ".framer-Necrt.framer-v-15a5vh8 .framer-67nroa { padding: 0px 0px 0px 22px; width: min-content; }", ".framer-Necrt.framer-v-15a5vh8 .framer-1k4yb1t { width: 100%; }", ".framer-Necrt.framer-v-15a5vh8 .framer-l4qyc8 { flex: 1 0 0px; width: 1px; }", ".framer-Necrt.framer-v-15a5vh8 .framer-1pzd2tr { flex: none; width: 100%; }", ".framer-Necrt.framer-v-15a5vh8 .framer-11xuyt3 { align-content: center; align-items: center; flex-direction: column; gap: 43px; justify-content: center; padding: 0px; }", ".framer-Necrt.framer-v-15a5vh8 .framer-19scyi2, .framer-Necrt.framer-v-15a5vh8 .framer-1ords6o { align-content: center; align-items: center; padding: 32px 0px 0px 0px; width: 100%; }", ".framer-Necrt.framer-v-15a5vh8 .framer-2irztm { order: 1; }", ".framer-Necrt.framer-v-1hcj7r .framer-1e19kjx { align-content: center; align-items: center; padding: 32px 64px 32px 64px; }", ".framer-Necrt.framer-v-1hcj7r .framer-o5kah8, .framer-Necrt.framer-v-1hcj7r .framer-2irztm { max-width: 1152px; }", ...css3, ...css2, ...css, '.framer-Necrt[data-border="true"]::after, .framer-Necrt [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }'];
var FramerNay6sUX2m = withCSS(Component, css4, "framer-Necrt");
var Nay6sUX2m_default = FramerNay6sUX2m;
FramerNay6sUX2m.displayName = "Footer";
FramerNay6sUX2m.defaultProps = {
  height: 553,
  width: 1248
};
addPropertyControls(FramerNay6sUX2m, {
  variant: {
    options: ["e6HBFILgg", "qD82lUNa5", "k2EEDG6yC", "iEdt0B9M3"],
    optionTitles: ["Desktop", "Tablet", "Phone", "Laptop"],
    title: "Variant",
    type: ControlType.Enum
  }
});
addFonts(FramerNay6sUX2m, [{
  explicitInter: true,
  fonts: [{
    cssFamilyName: "Haffer Regular",
    source: "custom",
    style: "normal",
    uiFamilyName: "Haffer",
    url: "https://framerusercontent.com/assets/tAGQcvN09kwW2QjPLqLO197UqBQ.woff",
    weight: "430"
  }, {
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
  }]
}, ...getFontsFromSharedStyle(fonts3), ...getFontsFromSharedStyle(fonts2), ...getFontsFromSharedStyle(fonts)], {
  supportsExplicitInterCodegen: true
});
var __FramerMetadata__ = {
  "exports": {
    "default": {
      "type": "reactComponent",
      "name": "FramerNay6sUX2m",
      "slots": [],
      "annotations": {
        "framerContractVersion": "1",
        "framerIntrinsicHeight": "553",
        "framerComponentViewportWidth": "true",
        "framerImmutableVariables": "true",
        "framerIntrinsicWidth": "1248",
        "framerAutoSizeImages": "true",
        "framerColorSyntax": "true",
        "framerDisplayContentsDiv": "false",
        "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"qD82lUNa5":{"layout":["fixed","auto"]},"k2EEDG6yC":{"layout":["fixed","auto"]},"iEdt0B9M3":{"layout":["fixed","fixed"]}}}'
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
var _OriginalComponent = Nay6sUX2m_default;
function FooterWrapped(props) {
  var _variant = useVariant(props.variant);
  var _inner = (_variant !== undefined) ? { ...props, variant: _variant } : props;
  return _ctxJsx(ContextProviders, { children: _ctxJsx(_OriginalComponent, _inner) });
}
Object.assign(FooterWrapped, _OriginalComponent);
export {  __FramerMetadata__,  FooterWrapped as default   };