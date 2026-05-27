"use client"
// http-url:https://framerusercontent.com/modules/aPoI9NsE1LJfAcYGN4yK/8Lr63VGrsbhlEFc1jK3S/ggQm2GY_4.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, getFontsFromSharedStyle, Image, Link, RichText, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "@proofly-framer/runtime";
import { LayoutGroup, motion, MotionConfigContext } from "@proofly-framer/runtime";
import * as React from "react";

// http-url:https://framerusercontent.com/modules/qy8eVo5TXcYP2TWH72Db/lnFwfHBmEXS5R0BdeKYE/ferGDeq75.js
import { fontStore } from "@proofly-framer/runtime";
fontStore.loadFonts(["CUSTOM;Haffer Regular", "CUSTOM;Haffer Bold", "CUSTOM;Haffer Bold Italic", "CUSTOM;Haffer Regular Italic"]);
var fonts = [{
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
var css = ['.framer-z9vLR .framer-styles-preset-k8yxrn:not(.rich-text-wrapper), .framer-z9vLR .framer-styles-preset-k8yxrn.rich-text-wrapper p { --framer-font-family: "Haffer Regular", sans-serif; --framer-font-family-bold: "Haffer Bold", sans-serif; --framer-font-family-bold-italic: "Haffer Bold Italic", sans-serif; --framer-font-family-italic: "Haffer Regular Italic", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 430; --framer-font-weight-bold: 790; --framer-font-weight-bold-italic: 790; --framer-font-weight-italic: 430; --framer-letter-spacing: 0em; --framer-line-height: 130%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #eaeaeb; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; }', '@media (max-width: 1199px) and (min-width: 724px) { .framer-z9vLR .framer-styles-preset-k8yxrn:not(.rich-text-wrapper), .framer-z9vLR .framer-styles-preset-k8yxrn.rich-text-wrapper p { --framer-font-family: "Haffer Regular", sans-serif; --framer-font-family-bold: "Haffer Bold", sans-serif; --framer-font-family-bold-italic: "Haffer Bold Italic", sans-serif; --framer-font-family-italic: "Haffer Regular Italic", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 430; --framer-font-weight-bold: 790; --framer-font-weight-bold-italic: 790; --framer-font-weight-italic: 430; --framer-letter-spacing: 0em; --framer-line-height: 130%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #eaeaeb; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }', '@media (max-width: 723px) and (min-width: 0px) { .framer-z9vLR .framer-styles-preset-k8yxrn:not(.rich-text-wrapper), .framer-z9vLR .framer-styles-preset-k8yxrn.rich-text-wrapper p { --framer-font-family: "Haffer Regular", sans-serif; --framer-font-family-bold: "Haffer Bold", sans-serif; --framer-font-family-bold-italic: "Haffer Bold Italic", sans-serif; --framer-font-family-italic: "Haffer Regular Italic", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 430; --framer-font-weight-bold: 790; --framer-font-weight-bold-italic: 790; --framer-font-weight-italic: 430; --framer-letter-spacing: 0em; --framer-line-height: 130%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #eaeaeb; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }'];
var className = "framer-z9vLR";

// http-url:https://framerusercontent.com/modules/5b0cRZbgNRw1dCNVnxhv/mDSpobAAY3IZwQ4LzCUn/z4Urx0kPV.js
import { fontStore as fontStore2 } from "@proofly-framer/runtime";
import { jsx as _ctxJsx } from "react/jsx-runtime";
import { ContextProviders, useVariant } from "@proofly-framer/runtime";
fontStore2.loadFonts(["CUSTOM;Haffer Regular", "CUSTOMV2;Haffer Bold", "CUSTOMV2;Haffer Bold Italic", "CUSTOMV2;Haffer Regular Italic"]);
var fonts2 = [{
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
var css2 = ['.framer-tLH4r .framer-styles-preset-1e98430:not(.rich-text-wrapper), .framer-tLH4r .framer-styles-preset-1e98430.rich-text-wrapper h5 { --framer-font-family: "Haffer Regular", sans-serif; --framer-font-family-bold: "Haffer Bold", sans-serif; --framer-font-family-bold-italic: "Haffer Bold Italic", sans-serif; --framer-font-family-italic: "Haffer Regular Italic", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 430; --framer-font-weight-bold: 790; --framer-font-weight-bold-italic: 790; --framer-font-weight-italic: 430; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }', '@media (max-width: 768px) and (min-width: 0px) { .framer-tLH4r .framer-styles-preset-1e98430:not(.rich-text-wrapper), .framer-tLH4r .framer-styles-preset-1e98430.rich-text-wrapper h5 { --framer-font-family: "Haffer Regular", sans-serif; --framer-font-family-bold: "Haffer Bold", sans-serif; --framer-font-family-bold-italic: "Haffer Bold Italic", sans-serif; --framer-font-family-italic: "Haffer Regular Italic", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 430; --framer-font-weight-bold: 790; --framer-font-weight-bold-italic: 790; --framer-font-weight-italic: 430; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }'];
var className2 = "framer-tLH4r";

// http-url:https://framerusercontent.com/modules/aPoI9NsE1LJfAcYGN4yK/8Lr63VGrsbhlEFc1jK3S/ggQm2GY_4.js
var cycleOrder = ["a3CHgT8aH"];
var serializationHash = "framer-v1je0";
var variantClassNames = {
  a3CHgT8aH: "framer-v-1abae5s"
};
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
var Variants = motion(React.Fragment);
var getProps = ({
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
    AeTnLPbbQ,
    gxFOb9Xvl,
    hi1Tl2FXN,
    Vssf0bHn1,
    STKBIxOe3,
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
    defaultVariant: "a3CHgT8aH",
    variant,
    variantClassNames
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const ref1 = React.useRef(null);
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [className2, className];
  const componentViewport = useComponentViewport();
  return <LayoutGroup id={layoutId ?? defaultLayoutId}>{<Variants animate={variants} initial={false}>{<Transition value={transition1}>{<Link href={STKBIxOe3} openInNewTab={false}>{_jsxs(motion.a, {
            ...restProps,
            ...gestureHandlers,
            background: {
              alt: "",
              fit: "fill"
            },
            className: `${cx(serializationHash, ...sharedStyleClassNames, "framer-1abae5s", className3, classNames)} framer-rpp4jt`,
            "data-framer-name": "Main",
            layoutDependency,
            layoutId: "a3CHgT8aH",
            ref: ref ?? ref1,
            style: {
              ...style
            },
            children: [_jsxs(motion.div, {
              className: "framer-7g8syx",
              layoutDependency,
              layoutId: "jlcUUu1MR",
              style: {
                borderBottomLeftRadius: 16,
                borderBottomRightRadius: 16,
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16
              },
              children: [_jsx(motion.div, {
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
            }), _jsxs(motion.div, {
              className: "framer-1qna5ii",
              "data-framer-name": "content",
              layoutDependency,
              layoutId: "tKrbdWzCd",
              children: [_jsx(motion.div, {
                className: "framer-x0gf08",
                "data-framer-name": "text",
                layoutDependency,
                layoutId: "a6dq6Xw8Z",
                children: <RichText __fromCanvasComponent className="framer-hdf0vk" data-framer-name="Title" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="BSapT4E5Q" style={{
                  "--framer-paragraph-spacing": "0px"
                }} text={gxFOb9Xvl} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.h5, {
                      className: "framer-styles-preset-1e98430",
                      "data-styles-preset": "z4Urx0kPV",
                      style: {
                        "--framer-text-alignment": "left"
                      },
                      children: "Software integration with your business project"
                    })}</>}</RichText>
              }), _jsxs(motion.div, {
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
                }} />, <RichText __fromCanvasComponent className="framer-17j6fz1" data-framer-name="Author Name" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="ZW0TN23Fm" style={{
                  "--framer-paragraph-spacing": "0px"
                }} text={Vssf0bHn1} verticalAlignment="top" withExternalLayout>{<>{_jsx(motion.p, {
                      className: "framer-styles-preset-k8yxrn",
                      "data-styles-preset": "ferGDeq75",
                      children: "Rayna Stanton"
                    })}</>}</RichText>]
              })]
            })]
          })}</Link>}</Transition>}</Variants>}</LayoutGroup>;
});
var css3 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-v1je0.framer-rpp4jt, .framer-v1je0 .framer-rpp4jt { display: block; }", ".framer-v1je0.framer-1abae5s { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-end; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: 389px; }", ".framer-v1je0 .framer-7g8syx { flex: none; height: 320px; overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }", ".framer-v1je0 .framer-1jpumuu { bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; z-index: 0; }", ".framer-v1je0 .framer-199ffck { aspect-ratio: 1.215625 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 320px); left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; z-index: 0; }", ".framer-v1je0 .framer-1qna5ii, .framer-v1je0 .framer-x0gf08 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-v1je0 .framer-hdf0vk { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-v1je0 .framer-10pdlgh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-v1je0 .framer-7luwpx { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 32px); overflow: hidden; position: relative; width: 32px; will-change: var(--framer-will-change-override, transform); }", ".framer-v1je0 .framer-17j6fz1 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-v1je0.framer-1abae5s, .framer-v1je0 .framer-1qna5ii, .framer-v1je0 .framer-x0gf08, .framer-v1je0 .framer-10pdlgh { gap: 0px; } .framer-v1je0.framer-1abae5s > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-v1je0.framer-1abae5s > :first-child, .framer-v1je0 .framer-1qna5ii > :first-child, .framer-v1je0 .framer-x0gf08 > :first-child { margin-top: 0px; } .framer-v1je0.framer-1abae5s > :last-child, .framer-v1je0 .framer-1qna5ii > :last-child, .framer-v1je0 .framer-x0gf08 > :last-child { margin-bottom: 0px; } .framer-v1je0 .framer-1qna5ii > *, .framer-v1je0 .framer-x0gf08 > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-v1je0 .framer-10pdlgh > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-v1je0 .framer-10pdlgh > :first-child { margin-left: 0px; } .framer-v1je0 .framer-10pdlgh > :last-child { margin-right: 0px; } }", ...css2, ...css];
var FramerggQm2GY_4 = withCSS(Component, css3, "framer-v1je0");
var ggQm2GY_4_default = FramerggQm2GY_4;
FramerggQm2GY_4.displayName = "Blog/Card";
FramerggQm2GY_4.defaultProps = {
  height: 450,
  width: 389
};
addPropertyControls(FramerggQm2GY_4, {
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
  hi1Tl2FXN: {
    __defaultAssetReference: "data:framer/asset-reference,Tie3WGs98DYSfYuBB3CvwN9QP48.png?originalFilename=Frame+77064139.png&preferredSize=auto",
    title: "Author Image",
    type: ControlType.ResponsiveImage
  },
  Vssf0bHn1: {
    defaultValue: "Rayna Stanton",
    displayTextArea: false,
    title: "Author Name",
    type: ControlType.String
  },
  STKBIxOe3: {
    title: "Link",
    type: ControlType.Link
  }
});
addFonts(FramerggQm2GY_4, [{
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
}, ...getFontsFromSharedStyle(fonts2), ...getFontsFromSharedStyle(fonts)], {
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
      "name": "FramerggQm2GY_4",
      "slots": [],
      "annotations": {
        "framerContractVersion": "1",
        "framerIntrinsicHeight": "450",
        "framerDisplayContentsDiv": "false",
        "framerIntrinsicWidth": "389",
        "framerVariables": '{"AeTnLPbbQ":"image","gxFOb9Xvl":"title","hi1Tl2FXN":"authorImage","Vssf0bHn1":"authorName","STKBIxOe3":"link"}',
        "framerImmutableVariables": "true",
        "framerComponentViewportWidth": "true",
        "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]}}}'
      }
    },
    "__FramerMetadata__": {
      "type": "variable"
    }
  }
};
var _OriginalComponent = ggQm2GY_4_default;
function BlogCardWrapped(props) {
  var _variant = useVariant(props.variant);
  var _inner = (_variant !== undefined) ? { ...props, variant: _variant } : props;
  return _ctxJsx(ContextProviders, { children: _ctxJsx(_OriginalComponent, _inner) });
}
Object.assign(BlogCardWrapped, _OriginalComponent);
export {  __FramerMetadata__,  BlogCardWrapped as default   };