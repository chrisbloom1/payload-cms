"use client"
// http-url:https://framerusercontent.com/modules/go19wFUog3DlLwsMmwwU/7jR58keqK8D8xbADO05C/KREkjwwQe.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, getLoadingLazyAtYPosition, Image, Link, RichText, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "@proofly-framer/runtime";
import { LayoutGroup, motion, MotionConfigContext } from "@proofly-framer/runtime";
import * as React from "react";
import { useRef } from "react";
import { jsx as _ctxJsx } from "react/jsx-runtime";
import { ContextProviders, useVariant } from "@proofly-framer/runtime";
var cycleOrder = ["AuiBWEf0e", "QBLpghYtX", "shPhA1N4O"];
var serializationHash = "framer-IbqNA";
var variantClassNames = {
  AuiBWEf0e: "framer-v-y38fe5",
  QBLpghYtX: "framer-v-3yh98u",
  shPhA1N4O: "framer-v-1xau9te"
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
  desktop: "AuiBWEf0e",
  phone: "shPhA1N4O",
  tablet: "QBLpghYtX"
};
var getProps = ({
  date,
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
      pixelHeight: 1580,
      pixelWidth: 1560,
      src: "https://framerusercontent.com/images/XnSOFVEyZS7WJ4LrLWjHaVIbyM.png?scale-down-to=512",
      srcSet: "https://framerusercontent.com/images/XnSOFVEyZS7WJ4LrLWjHaVIbyM.png?scale-down-to=1024 1011w,https://framerusercontent.com/images/XnSOFVEyZS7WJ4LrLWjHaVIbyM.png 1560w"
    },
    gxFOb9Xvl: title ?? props.gxFOb9Xvl ?? "Software integration with your business project",
    mJ1caDOMr: date ?? props.mJ1caDOMr ?? "today",
    STKBIxOe3: link ?? props.STKBIxOe3,
    variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "AuiBWEf0e"
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
    AeTnLPbbQ,
    gxFOb9Xvl,
    STKBIxOe3,
    mJ1caDOMr,
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
    defaultVariant: "AuiBWEf0e",
    ref: refBinding,
    variant,
    variantClassNames
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return <LayoutGroup id={layoutId ?? defaultLayoutId}>{<Variants animate={variants} initial={false}>{<Transition value={transition1}>{<Link href={STKBIxOe3} motionChild nodeId="AuiBWEf0e" openInNewTab={false} scopeId="KREkjwwQe">{_jsxs(motion.a, {
            ...restProps,
            ...gestureHandlers,
            className: `${cx(scopingClassNames, "framer-y38fe5", className, classNames)} framer-1v4i166`,
            "data-framer-name": "desktop",
            layoutDependency,
            layoutId: "AuiBWEf0e",
            ref: refBinding,
            style: {
              backgroundColor: "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))",
              ...style
            },
            ...addPropertyOverrides({
              QBLpghYtX: {
                "data-framer-name": "tablet"
              },
              shPhA1N4O: {
                "data-framer-name": "phone"
              }
            }, baseVariant, gestureVariant),
            children: [_jsxs(motion.div, {
              className: "framer-1utjjf9",
              layoutDependency,
              layoutId: "fj7VOc0w6",
              children: [_jsx(motion.div, {
                className: "framer-xwqz5o",
                "data-framer-name": "Shadow",
                layoutDependency,
                layoutId: "q6tWYMP9Z",
                style: {
                  background: "linear-gradient(180deg, rgba(11, 12, 11, 0) 43.69369369369369%, rgb(11, 12, 11) 77%)"
                }
              }), <Image background={{
                alt: "",
                fit: "fill",
                loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 0 + ((componentViewport?.height || 448) - 0 - (Math.max(0, ((componentViewport?.height || 448) - 0 - 208) / 1) * 1 + 208 + 0) + 0 + 0) + 0),
                sizes: componentViewport?.width || "100vw",
                ...toResponsiveImage(AeTnLPbbQ)
              }} className="framer-1tk4da" data-framer-name="Image" layoutDependency={layoutDependency} layoutId="EeFgDf3iH" {...addPropertyOverrides({
                QBLpghYtX: {
                  background: {
                    alt: "",
                    fit: "fill",
                    loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 0 + ((componentViewport?.height || 448) - 0 - (Math.max(0, ((componentViewport?.height || 448) - 0 - 189) / 1) * 1 + 189 + 0) + 0 + 0) + 0),
                    sizes: componentViewport?.width || "100vw",
                    ...toResponsiveImage(AeTnLPbbQ)
                  }
                },
                shPhA1N4O: {
                  background: {
                    alt: "",
                    fit: "fill",
                    loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 0 + ((componentViewport?.height || 448) - 0 - (Math.max(0, ((componentViewport?.height || 448) - 0 - 157) / 1) * 1 + 157 + 0) + 0 + 0) + 0),
                    sizes: componentViewport?.width || "100vw",
                    ...toResponsiveImage(AeTnLPbbQ)
                  }
                }
              }, baseVariant, gestureVariant)} />]
            }), _jsxs(motion.div, {
              className: "framer-z8ifij",
              "data-framer-name": "content",
              layoutDependency,
              layoutId: "YjTK162Dc",
              children: [<RichText __fromCanvasComponent className="framer-1np493g" data-framer-name="Title" fonts={["CUSTOM;Haffer Bold"]} layoutDependency={layoutDependency} layoutId="anGycA1ar" style={{
                "--extracted-1eung3n": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(4, 22, 40))",
                "--framer-paragraph-spacing": "0px"
              }} text={gxFOb9Xvl} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
                QBLpghYtX: {
                  children: <>{_jsx(motion.h4, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                        "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                        "--framer-font-size": "24px",
                        "--framer-line-height": "100%",
                        "--framer-text-color": "var(--extracted-1eung3n, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(4, 22, 40)))"
                      },
                      children: "Software integration with your business project"
                    })}</>
                },
                shPhA1N4O: {
                  children: <>{_jsx(motion.h4, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                        "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                        "--framer-font-size": "18px",
                        "--framer-line-height": "100%",
                        "--framer-text-color": "var(--extracted-1eung3n, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(4, 22, 40)))"
                      },
                      children: "Software integration with your business project"
                    })}</>
                }
              }, baseVariant, gestureVariant)}>{<>{_jsx(motion.h4, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                      "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                      "--framer-font-size": "30px",
                      "--framer-line-height": "100%",
                      "--framer-text-color": "var(--extracted-1eung3n, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(4, 22, 40)))"
                    },
                    children: "Software integration with your business project"
                  })}</>}</RichText>, <RichText __fromCanvasComponent className="framer-1pt9hpt" data-framer-name="Author Name" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="OZsMqjnfK" style={{
                "--extracted-r6o4lv": "var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(123, 123, 173))",
                "--framer-paragraph-spacing": "0px"
              }} text={mJ1caDOMr} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
                QBLpghYtX: {
                  children: <>{_jsx(motion.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "18px",
                        "--framer-line-height": "130%",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(123, 123, 173)))"
                      },
                      children: "today"
                    })}</>
                },
                shPhA1N4O: {
                  children: <>{_jsx(motion.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "14px",
                        "--framer-line-height": "130%",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(123, 123, 173)))"
                      },
                      children: "today"
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
                    children: "today"
                  })}</>}</RichText>]
            })]
          })}</Link>}</Transition>}</Variants>}</LayoutGroup>;
});
var css = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-IbqNA.framer-1v4i166, .framer-IbqNA .framer-1v4i166 { display: block; }", ".framer-IbqNA.framer-y38fe5 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 448px; justify-content: flex-end; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: 389px; }", ".framer-IbqNA .framer-1utjjf9 { flex: 1 0 0px; height: 1px; overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }", ".framer-IbqNA .framer-xwqz5o { bottom: 0px; flex: none; gap: 0px; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; z-index: 0; }", ".framer-IbqNA .framer-1tk4da { flex: none; gap: 0px; height: 100%; left: 0px; overflow: hidden; position: absolute; top: 0px; width: 100%; z-index: 0; }", ".framer-IbqNA .framer-z8ifij { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 16px; position: relative; width: 100%; }", ".framer-IbqNA .framer-1np493g, .framer-IbqNA .framer-1pt9hpt { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }"];
var FramerKREkjwwQe = withCSS(Component, css, "framer-IbqNA");
var KREkjwwQe_default = FramerKREkjwwQe;
FramerKREkjwwQe.displayName = "Blog/Card 2";
FramerKREkjwwQe.defaultProps = {
  height: 448,
  width: 389
};
addPropertyControls(FramerKREkjwwQe, {
  variant: {
    options: ["AuiBWEf0e", "QBLpghYtX", "shPhA1N4O"],
    optionTitles: ["desktop", "tablet", "phone"],
    title: "Variant",
    type: ControlType.Enum
  },
  AeTnLPbbQ: {
    __defaultAssetReference: "data:framer/asset-reference,XnSOFVEyZS7WJ4LrLWjHaVIbyM.png?originalFilename=Image.png&preferredSize=auto",
    title: "Image",
    type: ControlType.ResponsiveImage
  },
  gxFOb9Xvl: {
    defaultValue: "Software integration with your business project",
    displayTextArea: false,
    title: "Title",
    type: ControlType.String
  },
  STKBIxOe3: {
    title: "Link",
    type: ControlType.Link
  },
  mJ1caDOMr: {
    defaultValue: "today",
    displayTextArea: false,
    title: "Date",
    type: ControlType.String
  }
});
addFonts(FramerKREkjwwQe, [{
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
      "name": "FramerKREkjwwQe",
      "slots": [],
      "annotations": {
        "framerComponentViewportWidth": "true",
        "framerVariables": '{"AeTnLPbbQ":"image","gxFOb9Xvl":"title","STKBIxOe3":"link","mJ1caDOMr":"date"}',
        "framerColorSyntax": "true",
        "framerImmutableVariables": "true",
        "framerDisplayContentsDiv": "false",
        "framerIntrinsicHeight": "448",
        "framerContractVersion": "1",
        "framerIntrinsicWidth": "389",
        "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"QBLpghYtX":{"layout":["fixed","fixed"]},"shPhA1N4O":{"layout":["fixed","fixed"]}}}',
        "framerAutoSizeImages": "true"
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
var _OriginalComponent = KREkjwwQe_default;
function BlogCard2Wrapped(props) {
  var _variant = useVariant(props.variant);
  var _inner = (_variant !== undefined) ? { ...props, variant: _variant } : props;
  return _ctxJsx(ContextProviders, { children: _ctxJsx(_OriginalComponent, _inner) });
}
Object.assign(BlogCard2Wrapped, _OriginalComponent);
export {  __FramerMetadata__,  BlogCard2Wrapped as default   };