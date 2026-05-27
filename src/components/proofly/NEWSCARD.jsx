"use client"
// http-url:https://framerusercontent.com/modules/dekkLO5f8v9LsoSpv3YK/0LZvrrA6EBNITTkbhfpO/Svfqt7Bim.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, getLoadingLazyAtYPosition, Image, Link, RichText, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "@proofly-framer/runtime";
import { LayoutGroup, motion, MotionConfigContext } from "@proofly-framer/runtime";
import * as React from "react";
import { useRef } from "react";
import { jsx as _ctxJsx } from "react/jsx-runtime";
import { ContextProviders, useVariant } from "@proofly-framer/runtime";
var cycleOrder = ["hbp6vBCSR", "lq_CPL6bp", "sNCK9BxW5"];
var serializationHash = "framer-45ayr";
var variantClassNames = {
  hbp6vBCSR: "framer-v-9q94bk",
  lq_CPL6bp: "framer-v-1s476q6",
  sNCK9BxW5: "framer-v-171dxkf"
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
var Variants = motion.create(React.Fragment);
var humanReadableVariantMap = {
  "Variant 1": "hbp6vBCSR",
  phone: "sNCK9BxW5",
  tablet: "lq_CPL6bp"
};
var getProps = ({
  date,
  height,
  id,
  image,
  link,
  logo,
  text,
  width,
  ...props
}) => {
  return {
    ...props,
    lAfOLA4gi: logo ?? props.lAfOLA4gi ?? {
      pixelHeight: 78,
      pixelWidth: 498,
      src: "https://framerusercontent.com/images/5gyAzQ00yglJMh3XRI0EhP03GhM.png"
    },
    mG4tg1A4j: image ?? props.mG4tg1A4j ?? {
      pixelHeight: 576,
      pixelWidth: 1024,
      src: "https://framerusercontent.com/images/k0QohdlIsWSDTb1rtQg8McUyKI.jpg?scale-down-to=512",
      srcSet: "https://framerusercontent.com/images/k0QohdlIsWSDTb1rtQg8McUyKI.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/k0QohdlIsWSDTb1rtQg8McUyKI.jpg 1024w"
    },
    o6HUsG8vd: date ?? props.o6HUsG8vd ?? "date",
    PYSsRTedk: link ?? props.PYSsRTedk,
    variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "hbp6vBCSR",
    Vt6tv9N_W: text ?? props.Vt6tv9N_W ?? "News title"
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
    PYSsRTedk,
    mG4tg1A4j,
    Vt6tv9N_W,
    o6HUsG8vd,
    lAfOLA4gi,
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
    defaultVariant: "hbp6vBCSR",
    ref: refBinding,
    variant,
    variantClassNames
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return <LayoutGroup id={layoutId ?? defaultLayoutId}>{<Variants animate={variants} initial={false}>{<Transition value={transition1}>{<Link href={PYSsRTedk} motionChild nodeId="hbp6vBCSR" openInNewTab scopeId="Svfqt7Bim">{_jsxs(motion.a, {
            ...restProps,
            ...gestureHandlers,
            className: `${cx(scopingClassNames, "framer-9q94bk", className, classNames)} framer-16m60ri`,
            "data-framer-name": "Variant 1",
            layoutDependency,
            layoutId: "hbp6vBCSR",
            ref: refBinding,
            style: {
              backgroundColor: "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))",
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              ...style
            },
            ...addPropertyOverrides({
              lq_CPL6bp: {
                "data-framer-name": "tablet"
              },
              sNCK9BxW5: {
                "data-framer-name": "phone"
              }
            }, baseVariant, gestureVariant),
            children: [_jsxs(motion.div, {
              className: "framer-4nqcnt",
              layoutDependency,
              layoutId: "VXxRKAvBa",
              children: [_jsx(motion.div, {
                className: "framer-q8sbro",
                "data-framer-name": "Shadow",
                layoutDependency,
                layoutId: "mRK2oe6hb",
                style: {
                  background: "linear-gradient(180deg, rgba(11, 12, 11, 0) 43.69369369369369%, rgb(11, 12, 11) 77%)"
                }
              }), <Image background={{
                alt: "",
                fit: "fill",
                loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 0 + ((componentViewport?.height || 448) - 0 - (Math.max(0, ((componentViewport?.height || 448) - 0 - 214) / 1) * 1 + 214 + 0) + 0 + 0) + 0),
                sizes: componentViewport?.width || "100vw",
                ...toResponsiveImage(mG4tg1A4j),
                ...{
                  positionX: "center",
                  positionY: "center"
                }
              }} className="framer-1q6z9vx" data-framer-name="Image" layoutDependency={layoutDependency} layoutId="HNSDasIfV" {...addPropertyOverrides({
                lq_CPL6bp: {
                  background: {
                    alt: "",
                    fit: "fill",
                    loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 0 + ((componentViewport?.height || 448) - 0 - (Math.max(0, ((componentViewport?.height || 448) - 0 - 193.8) / 1) * 1 + 193.8 + 0) + 0 + 0) + 0),
                    sizes: componentViewport?.width || "100vw",
                    ...toResponsiveImage(mG4tg1A4j),
                    ...{
                      positionX: "center",
                      positionY: "center"
                    }
                  }
                },
                sNCK9BxW5: {
                  background: {
                    alt: "",
                    fit: "fill",
                    loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 0 + ((componentViewport?.height || 448) - 0 - (Math.max(0, ((componentViewport?.height || 448) - 0 - 160.6) / 1) * 1 + 160.6 + 0) + 0 + 0) + 0),
                    sizes: componentViewport?.width || "100vw",
                    ...toResponsiveImage(mG4tg1A4j),
                    ...{
                      positionX: "center",
                      positionY: "center"
                    }
                  }
                }
              }, baseVariant, gestureVariant)} />]
            }), _jsxs(motion.div, {
              className: "framer-13ri3d3",
              "data-framer-name": "content",
              layoutDependency,
              layoutId: "jT_sW_xNN",
              children: [<RichText __fromCanvasComponent className="framer-o8k27s" data-framer-name="Title" fonts={["CUSTOM;Haffer Bold"]} layoutDependency={layoutDependency} layoutId="mp7gRCh1m" style={{
                "--extracted-1lwpl3i": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(4, 22, 40))",
                "--framer-paragraph-spacing": "0px"
              }} text={Vt6tv9N_W} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
                lq_CPL6bp: {
                  children: <>{_jsx(motion.h5, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                        "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                        "--framer-font-size": "24px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "left",
                        "--framer-text-color": "var(--extracted-1lwpl3i, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(4, 22, 40)))"
                      },
                      children: "News title"
                    })}</>
                },
                sNCK9BxW5: {
                  children: <>{_jsx(motion.h5, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                        "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                        "--framer-font-size": "18px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "left",
                        "--framer-text-color": "var(--extracted-1lwpl3i, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(4, 22, 40)))"
                      },
                      children: "News title"
                    })}</>
                }
              }, baseVariant, gestureVariant)}>{<>{_jsx(motion.h5, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                      "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                      "--framer-font-size": "30px",
                      "--framer-line-height": "120%",
                      "--framer-text-alignment": "left",
                      "--framer-text-color": "var(--extracted-1lwpl3i, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(4, 22, 40)))"
                    },
                    children: "News title"
                  })}</>}</RichText>, _jsxs(motion.div, {
                className: "framer-c1i364",
                layoutDependency,
                layoutId: "H0Zr1rLSz",
                children: [<RichText __fromCanvasComponent className="framer-1ly0q5" data-framer-name="Author Name" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="KkP59z8ul" style={{
                  "--extracted-r6o4lv": "var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(123, 123, 173))",
                  "--framer-paragraph-spacing": "0px"
                }} text={o6HUsG8vd} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
                  lq_CPL6bp: {
                    children: <>{_jsx(motion.p, {
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                          "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                          "--framer-font-size": "18px",
                          "--framer-line-height": "130%",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(123, 123, 173)))"
                        },
                        children: "date"
                      })}</>
                  },
                  sNCK9BxW5: {
                    children: <>{_jsx(motion.p, {
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                          "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                          "--framer-font-size": "14px",
                          "--framer-line-height": "130%",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(123, 123, 173)))"
                        },
                        children: "date"
                      })}</>
                  }
                }, baseVariant, gestureVariant)}>{<>{_jsx(motion.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "20px",
                        "--framer-line-height": "130%",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(123, 123, 173)))"
                      },
                      children: "date"
                    })}</>}</RichText>, <Image background={{
                  alt: "",
                  fit: "fit",
                  loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 0 + ((componentViewport?.height || 448) - 0 - (Math.max(0, ((componentViewport?.height || 448) - 0 - 214) / 1) * 1 + 214 + 0) + Math.max(0, ((componentViewport?.height || 448) - 0 - 214) / 1) * 1 + 0) + 16 + 52 + 0 + 96),
                  pixelHeight: 78,
                  pixelWidth: 498,
                  sizes: "134px",
                  ...toResponsiveImage(lAfOLA4gi),
                  ...{
                    positionX: "center",
                    positionY: "center"
                  }
                }} className="framer-1hnx5bp" layoutDependency={layoutDependency} layoutId="TyGdvxKlU" {...addPropertyOverrides({
                  lq_CPL6bp: {
                    background: {
                      alt: "",
                      fit: "fit",
                      loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 0 + ((componentViewport?.height || 448) - 0 - (Math.max(0, ((componentViewport?.height || 448) - 0 - 193.8) / 1) * 1 + 193.8 + 0) + Math.max(0, ((componentViewport?.height || 448) - 0 - 193.8) / 1) * 1 + 0) + 16 + 44.8 + 45.5),
                      pixelHeight: 78,
                      pixelWidth: 498,
                      sizes: "85px",
                      ...toResponsiveImage(lAfOLA4gi),
                      ...{
                        positionX: "center",
                        positionY: "center"
                      }
                    }
                  },
                  sNCK9BxW5: {
                    background: {
                      alt: "",
                      fit: "fit",
                      loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 0 + ((componentViewport?.height || 448) - 0 - (Math.max(0, ((componentViewport?.height || 448) - 0 - 160.6) / 1) * 1 + 160.6 + 0) + Math.max(0, ((componentViewport?.height || 448) - 0 - 160.6) / 1) * 1 + 0) + 16 + 37.6 + 32.5),
                      pixelHeight: 78,
                      pixelWidth: 498,
                      sizes: "85px",
                      ...toResponsiveImage(lAfOLA4gi),
                      ...{
                        positionX: "center",
                        positionY: "center"
                      }
                    }
                  }
                }, baseVariant, gestureVariant)} />]
              })]
            })]
          })}</Link>}</Transition>}</Variants>}</LayoutGroup>;
});
var css = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-45ayr.framer-16m60ri, .framer-45ayr .framer-16m60ri { display: block; }", ".framer-45ayr.framer-9q94bk { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 448px; justify-content: flex-end; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: 411px; will-change: var(--framer-will-change-override, transform); }", ".framer-45ayr .framer-4nqcnt { flex: 1 0 0px; height: 1px; overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }", ".framer-45ayr .framer-q8sbro { bottom: 0px; flex: none; gap: 0px; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; z-index: 0; }", ".framer-45ayr .framer-1q6z9vx { flex: none; gap: 0px; height: 100%; left: 0px; overflow: hidden; position: absolute; top: 0px; width: 100%; z-index: 0; }", ".framer-45ayr .framer-13ri3d3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 16px; position: relative; width: 100%; }", ".framer-45ayr .framer-o8k27s { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-45ayr .framer-c1i364 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-45ayr .framer-1ly0q5 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }", ".framer-45ayr .framer-1hnx5bp { flex: none; height: 34px; position: relative; width: 134px; }", ".framer-45ayr.framer-v-1s476q6 .framer-c1i364, .framer-45ayr.framer-v-171dxkf .framer-c1i364 { align-content: center; align-items: center; }", ".framer-45ayr.framer-v-1s476q6 .framer-1hnx5bp, .framer-45ayr.framer-v-171dxkf .framer-1hnx5bp { height: 26px; width: 85px; }"];
var FramerSvfqt7Bim = withCSS(Component, css, "framer-45ayr");
var Svfqt7Bim_default = FramerSvfqt7Bim;
FramerSvfqt7Bim.displayName = "NEWS CARD";
FramerSvfqt7Bim.defaultProps = {
  height: 448,
  width: 411
};
addPropertyControls(FramerSvfqt7Bim, {
  variant: {
    options: ["hbp6vBCSR", "lq_CPL6bp", "sNCK9BxW5"],
    optionTitles: ["Variant 1", "tablet", "phone"],
    title: "Variant",
    type: ControlType.Enum
  },
  PYSsRTedk: {
    title: "Link",
    type: ControlType.Link
  },
  mG4tg1A4j: {
    __defaultAssetReference: "data:framer/asset-reference,k0QohdlIsWSDTb1rtQg8McUyKI.jpg?originalFilename=i-3-91139240-detroit-ebike-startup.jpg&preferredSize=auto",
    title: "Image",
    type: ControlType.ResponsiveImage
  },
  Vt6tv9N_W: {
    defaultValue: "News title",
    displayTextArea: true,
    placeholder: "News title",
    title: "Text",
    type: ControlType.String
  },
  o6HUsG8vd: {
    defaultValue: "date",
    displayTextArea: false,
    title: "date",
    type: ControlType.String
  },
  lAfOLA4gi: {
    __defaultAssetReference: "data:framer/asset-reference,5gyAzQ00yglJMh3XRI0EhP03GhM.png?originalFilename=fastcologo.png&preferredSize=auto",
    title: "logo",
    type: ControlType.ResponsiveImage
  }
});
addFonts(FramerSvfqt7Bim, [{
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
    "default": {
      "type": "reactComponent",
      "name": "FramerSvfqt7Bim",
      "slots": [],
      "annotations": {
        "framerIntrinsicHeight": "448",
        "framerIntrinsicWidth": "411",
        "framerImmutableVariables": "true",
        "framerComponentViewportWidth": "true",
        "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"lq_CPL6bp":{"layout":["fixed","fixed"]},"sNCK9BxW5":{"layout":["fixed","fixed"]}}}',
        "framerAutoSizeImages": "true",
        "framerColorSyntax": "true",
        "framerContractVersion": "1",
        "framerVariables": '{"PYSsRTedk":"link","mG4tg1A4j":"image","Vt6tv9N_W":"text","o6HUsG8vd":"date","lAfOLA4gi":"logo"}',
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
var _OriginalComponent = Svfqt7Bim_default;
function NEWSCARDWrapped(props) {
  var _variant = useVariant(props.variant);
  var _inner = (_variant !== undefined) ? { ...props, variant: _variant } : props;
  return _ctxJsx(ContextProviders, { children: _ctxJsx(_OriginalComponent, _inner) });
}
Object.assign(NEWSCARDWrapped, _OriginalComponent);
export {  __FramerMetadata__,  NEWSCARDWrapped as default   };