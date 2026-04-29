"use client"
// http-url:https://framerusercontent.com/modules/mVcfps3GFafedoSfyRDx/Dh2tZStUAppV5VFjVh5w/dnjmQyVTx.js
import { jsx as _jsx3, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls as addPropertyControls2, ComponentViewportProvider, ControlType as ControlType3, cx, getFonts, getFontsFromSharedStyle, RichText, useActiveVariantCallback, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "@proofly-framer/runtime";
import { LayoutGroup, motion, MotionConfigContext } from "@proofly-framer/runtime";
import * as React3 from "react";

// http-url:https://framerusercontent.com/modules/f0DboytQenYh21kfme7W/zb1zVBMZJKgPMiedOi0y/Feather.js
import { jsx as _jsx2 } from "react/jsx-runtime";
import * as React2 from "react";
import { useState, useEffect, useRef } from "react";
import { addPropertyControls, ControlType as ControlType2, RenderTarget } from "@proofly-framer/runtime";

// http-url:https://framerusercontent.com/modules/DyldKav0OOAWR3bCAlhK/8c3l9FzyOlGpbPncYhfc/nullstate.js
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
var containerStyles = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
var emptyStateStyle = {
  ...containerStyles,
  borderRadius: 6,
  background: "rgba(149, 149, 149, 0.1)",
  border: "1px dashed rgba(149, 149, 149, 0.15)",
  color: "#a5a5a5",
  flexDirection: "column"
};
var NullState = React.forwardRef((_, ref) => {
  return <div style={emptyStateStyle} ref={ref} />;
});

// http-url:https://framerusercontent.com/modules/8tFVJ9SCM5akQRM0UzVD/YkxZV5bKC4LrRDEdvAgQ/home.js
var r;
var s = o => {
  if (!r) {
    const n = o.forwardRef(({
      color: t = "currentColor",
      size: e = 24,
      ...i
    }, l) => {
      return o.createElement("svg", {
        ref: l,
        xmlns: "http://www.w3.org/2000/svg",
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...i
      }, o.createElement("path", {
        d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
      }), o.createElement("polyline", {
        points: "9 22 9 12 15 12 15 22"
      }));
    });
    n.displayName = "Home", r = n;
  }
  return r;
};

// http-url:https://framerusercontent.com/modules/Ma20hU0GGRxLxZphbywl/OSpwWF91FHPVFyQJjMHt/utils.js
import { useMemo } from "react";
import { ControlType } from "@proofly-framer/runtime";
var defaultEvents = {
  onClick: {
    type: ControlType.EventHandler
  },
  onMouseDown: {
    type: ControlType.EventHandler
  },
  onMouseUp: {
    type: ControlType.EventHandler
  },
  onMouseEnter: {
    type: ControlType.EventHandler
  },
  onMouseLeave: {
    type: ControlType.EventHandler
  }
};
var findByArray = (arr, search) => arr.find(a => a.toLowerCase().includes(search));
function useIconSelection(iconKeys2, selectByList, iconSearch = "", iconSelection, lowercaseIconKeyPairs2) {
  const iconSearchResult = useMemo(() => {
    if (iconSearch == null || (iconSearch === null || iconSearch === void 0 ? void 0 : iconSearch.length) === 0) return null;
    const iconSearchTerm = iconSearch.toLowerCase().replace(/-|\s/g, "");
    var _iconSearchTerm;
    const searchResult = (_iconSearchTerm = lowercaseIconKeyPairs2[iconSearchTerm]) !== null && _iconSearchTerm !== void 0 ? _iconSearchTerm : findByArray(iconKeys2, iconSearchTerm);
    return searchResult;
  }, [iconSelection, iconSearch]);
  const name = selectByList ? iconSelection : iconSearchResult;
  return name;
}

// http-url:https://framerusercontent.com/modules/f0DboytQenYh21kfme7W/zb1zVBMZJKgPMiedOi0y/Feather.js
var iconKeys = ["activity", "airplay", "alert-circle", "alert-octagon", "alert-triangle", "align-center", "align-justify", "align-left", "align-right", "anchor", "aperture", "archive", "arrow-down", "arrow-down-circle", "arrow-down-left", "arrow-down-right", "arrow-left", "arrow-left-circle", "arrow-right", "arrow-right-circle", "arrow-up", "arrow-up-circle", "arrow-up-left", "arrow-up-right", "at-sign", "award", "bar-chart", "bar-chart-2", "battery", "battery-charging", "bell", "bell-off", "bluetooth", "bold", "book", "book-open", "bookmark", "box", "briefcase", "calendar", "camera", "camera-off", "cast", "check", "check-circle", "check-square", "chevron-down", "chevron-left", "chevron-right", "chevron-up", "chevrons-down", "chevrons-left", "chevrons-right", "chevrons-up", "chrome", "circle", "clipboard", "clock", "cloud", "cloud-drizzle", "cloud-lightning", "cloud-off", "cloud-rain", "cloud-snow", "code", "codepen", "codesandbox", "coffee", "columns", "command", "compass", "copy", "corner-down-left", "corner-down-right", "corner-left-down", "corner-left-up", "corner-right-down", "corner-right-up", "corner-up-left", "corner-up-right", "cpu", "credit-card", "crop", "crosshair", "database", "delete", "disc", "divide", "divide-circle", "divide-square", "dollar-sign", "download", "download-cloud", "dribbble", "droplet", "edit", "edit-2", "edit-3", "external-link", "eye", "eye-off", "facebook", "fast-forward", "feather", "figma", "file", "file-minus", "file-plus", "file-text", "film", "filter", "flag", "folder", "folder-minus", "folder-plus", "framer", "frown", "gift", "git-branch", "git-commit", "git-merge", "git-pull-request", "github", "gitlab", "globe", "grid", "hard-drive", "hash", "headphones", "heart", "help-circle", "hexagon", "home", "image", "inbox", "info", "instagram", "italic", "key", "layers", "layout", "life-buoy", "link", "link-2", "linkedin", "list", "loader", "lock", "log-in", "log-out", "mail", "map", "map-pin", "maximize", "maximize-2", "meh", "menu", "message-circle", "message-square", "mic", "mic-off", "minimize", "minimize-2", "minus", "minus-circle", "minus-square", "monitor", "moon", "more-horizontal", "more-vertical", "mouse-pointer", "move", "music", "navigation", "navigation-2", "octagon", "package", "paperclip", "pause", "pause-circle", "pen-tool", "percent", "phone", "phone-call", "phone-forwarded", "phone-incoming", "phone-missed", "phone-off", "phone-outgoing", "pie-chart", "play", "play-circle", "plus", "plus-circle", "plus-square", "pocket", "power", "printer", "radio", "refresh-ccw", "refresh-cw", "repeat", "rewind", "rotate-ccw", "rotate-cw", "rss", "save", "scissors", "search", "send", "server", "settings", "share", "share-2", "shield", "shield-off", "shopping-bag", "shopping-cart", "shuffle", "sidebar", "skip-back", "skip-forward", "slack", "slash", "sliders", "smartphone", "smile", "speaker", "square", "star", "stop-circle", "sun", "sunrise", "sunset", "tablet", "tag", "target", "terminal", "thermometer", "thumbs-down", "thumbs-up", "toggle-left", "toggle-right", "tool", "trash", "trash-2", "trello", "trending-down", "trending-up", "triangle", "truck", "tv", "twitch", "twitter", "type", "umbrella", "underline", "unlock", "upload", "upload-cloud", "user", "user-check", "user-minus", "user-plus", "user-x", "users", "video", "video-off", "voicemail", "volume", "volume-1", "volume-2", "volume-x", "watch", "wifi", "wifi-off", "wind", "x", "x-circle", "x-octagon", "x-square", "youtube", "zap", "zap-off", "zoom-in", "zoom-out"];
var moduleBaseUrl = "https://framer.com/m/feather-icons/";
var uppercaseIconKeys = iconKeys.map(name => name.charAt(0).toUpperCase() + name.slice(1));
var lowercaseIconKeyPairs = iconKeys.reduce((res, key) => {
  res[key.toLowerCase()] = key;
  return res;
}, {});
function Icon(props) {
  const {
    color,
    selectByList,
    iconSearch,
    iconSelection,
    onClick,
    onMouseDown,
    onMouseUp,
    onMouseEnter,
    onMouseLeave,
    mirrored
  } = props;
  const isMounted = useRef(false);
  const iconKey = useIconSelection(iconKeys, selectByList, iconSearch, iconSelection, lowercaseIconKeyPairs);
  const [SelectedIcon, setSelectedIcon] = useState(iconKey === "Home" ? s(React2) : null);
  async function importModule() {
    let active = true;
    try {
      const iconModuleUrl = `${moduleBaseUrl}${iconKey}.js@0.0.29`;
      const module = await import(/* webpackIgnore: true */
      iconModuleUrl);
      if (active) setSelectedIcon(module.default(React2));
    } catch (e) {
      console.log(e);
      if (active) setSelectedIcon(null);
    }
    return () => {
      active = false;
    };
  }
  useEffect(() => {
    importModule();
  }, [iconKey]);
  const isOnCanvas = RenderTarget.current() === RenderTarget.canvas;
  const emptyState = isOnCanvas ? <NullState /> : null;
  return <div style={{
    display: "contents"
  }} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>{SelectedIcon ? <SelectedIcon style={{
      width: "100%",
      height: "100%",
      transform: mirrored ? "scale(-1, 1)" : void 0
    }} color={color} /> : emptyState}</div>;
}
Icon.displayName = "Feather";
Icon.defaultProps = {
  width: 24,
  height: 24,
  iconSelection: "home",
  iconSearch: "Home",
  color: "#66F",
  selectByList: true,
  mirrored: false
};
addPropertyControls(Icon, {
  selectByList: {
    type: ControlType2.Boolean,
    title: "Select",
    enabledTitle: "List",
    disabledTitle: "Search",
    defaultValue: Icon.defaultProps.selectByList
  },
  iconSelection: {
    type: ControlType2.Enum,
    options: iconKeys,
    optionTitles: uppercaseIconKeys,
    defaultValue: Icon.defaultProps.iconSelection,
    title: "Name",
    hidden: ({
      selectByList
    }) => !selectByList,
    description: "Find every icon name on the [Feather site](https://feathericons.com/)"
  },
  iconSearch: {
    type: ControlType2.String,
    title: "Name",
    placeholder: "Menu, Wifi, Box\u2026",
    hidden: ({
      selectByList
    }) => selectByList
  },
  mirrored: {
    type: ControlType2.Boolean,
    enabledTitle: "Yes",
    disabledTitle: "No",
    defaultValue: Icon.defaultProps.mirrored
  },
  color: {
    type: ControlType2.Color,
    title: "Color",
    defaultValue: Icon.defaultProps.color
  },
  ...defaultEvents
});

// http-url:https://framerusercontent.com/modules/1yPBes2MOQpyJo6DFDOk/MdZClTJzdIorZJNcVjTw/UDEB09jjg.js
import { fontStore } from "@proofly-framer/runtime";
fontStore.loadFonts(["CUSTOM;Haffer Regular"]);
var fonts = [{
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
var css = ['.framer-6hVw8 .framer-styles-preset-1p8b08q:not(.rich-text-wrapper), .framer-6hVw8 .framer-styles-preset-1p8b08q.rich-text-wrapper p { --framer-font-family: "Haffer Regular", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 430; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, #eaeaeb); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; }', '@media (max-width: 810px) and (min-width: 510px) { .framer-6hVw8 .framer-styles-preset-1p8b08q:not(.rich-text-wrapper), .framer-6hVw8 .framer-styles-preset-1p8b08q.rich-text-wrapper p { --framer-font-family: "Haffer Regular", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 430; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, #eaeaeb); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }', '@media (max-width: 509px) and (min-width: 0px) { .framer-6hVw8 .framer-styles-preset-1p8b08q:not(.rich-text-wrapper), .framer-6hVw8 .framer-styles-preset-1p8b08q.rich-text-wrapper p { --framer-font-family: "Haffer Regular", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 430; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, #eaeaeb); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }'];
var className = "framer-6hVw8";

// http-url:https://framerusercontent.com/modules/hrEYztSl8D8TyacXlaiy/DgASN1v42yT6tA5SiBwC/Wrgt1shwF.js
import { fontStore as fontStore2 } from "@proofly-framer/runtime";
import { jsx as _ctxJsx } from "react/jsx-runtime";
import { ContextProviders, useVariant } from "@proofly-framer/runtime";
fontStore2.loadFonts(["CUSTOM;Haffer Bold"]);
var fonts2 = [{
  explicitInter: true,
  fonts: [{
    family: "Haffer Bold",
    source: "custom",
    url: "https://framerusercontent.com/assets/eRqmC6W9PktN8mUcnwel9B6wmPs.woff"
  }]
}];
var css2 = ['.framer-Pou2l .framer-styles-preset-1sq323:not(.rich-text-wrapper), .framer-Pou2l .framer-styles-preset-1sq323.rich-text-wrapper p { --framer-font-family: "Haffer Bold", "Haffer Bold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }', '@media (max-width: 809px) and (min-width: 0px) { .framer-Pou2l .framer-styles-preset-1sq323:not(.rich-text-wrapper), .framer-Pou2l .framer-styles-preset-1sq323.rich-text-wrapper p { --framer-font-family: "Haffer Bold", "Haffer Bold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }'];
var className2 = "framer-Pou2l";

// http-url:https://framerusercontent.com/modules/mVcfps3GFafedoSfyRDx/Dh2tZStUAppV5VFjVh5w/dnjmQyVTx.js
var FeatherFonts = getFonts(Icon);
var cycleOrder = ["BYKsytObg", "besngrNer"];
var serializationHash = "framer-Dg30Q";
var variantClassNames = {
  besngrNer: "framer-v-p2jzun",
  BYKsytObg: "framer-v-fi4xt9"
};
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach(variant => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var numberToPixelString = value => {
  if (typeof value !== "number") return value;
  if (!Number.isFinite(value)) return void 0;
  return Math.max(0, value) + "px";
};
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
  const config = React3.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React3.useMemo(() => ({
    ...config,
    transition
  }), [JSON.stringify(transition)]);
  return <MotionConfigContext.Provider value={contextValue}>{children}</MotionConfigContext.Provider>;
};
var Variants = motion(React3.Fragment);
var humanReadableVariantMap = {
  Closed: "BYKsytObg",
  Opened: "besngrNer"
};
var getProps = ({
  answer,
  height,
  id,
  padding,
  question,
  width,
  ...props
}) => {
  return {
    ...props,
    BKqc4FBYW: question ?? props.BKqc4FBYW ?? "How does Nikea differ from other identity management platforms?",
    gch9ImGt0: padding ?? props.gch9ImGt0 ?? "30px",
    rFqdOggUD: answer ?? props.rFqdOggUD ?? "Nikea prioritizes security at its core, offering advanced telemetry and flexible integration options. Unlike other platforms, Nikea focuses on delivering precise control and comprehensive protection for all your identity and access management needs.",
    variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "BYKsytObg"
  };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = React3.forwardRef(function (props, ref) {
  const {
    activeLocale,
    setLocale
  } = useLocaleInfo();
  const {
    style,
    className: className3,
    layoutId,
    variant,
    BKqc4FBYW,
    rFqdOggUD,
    gch9ImGt0,
    ...restProps
  } = getProps(props);
  const {
    baseVariant,
    classNames,
    gestureHandlers,
    gestureVariant,
    setGestureState,
    setVariant,
    variants
  } = useVariantState({
    cycleOrder,
    defaultVariant: "BYKsytObg",
    variant,
    variantClassNames
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const {
    activeVariantCallback,
    delay
  } = useActiveVariantCallback(baseVariant);
  const onTapgiz758 = activeVariantCallback(async (...args) => {
    setGestureState({
      isPressed: false
    });
    setVariant("besngrNer");
  });
  const onTapvz01s6 = activeVariantCallback(async (...args) => {
    setGestureState({
      isPressed: false
    });
    setVariant("BYKsytObg");
  });
  const ref1 = React3.useRef(null);
  const isDisplayed = () => {
    if (baseVariant === "besngrNer") return true;
    return false;
  };
  const defaultLayoutId = React3.useId();
  const sharedStyleClassNames = [className2, className];
  const componentViewport = useComponentViewport();
  return <LayoutGroup id={layoutId ?? defaultLayoutId}>{<Variants animate={variants} initial={false}>{<Transition value={transition1}>{_jsxs(motion.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx(serializationHash, ...sharedStyleClassNames, "framer-fi4xt9", className3, classNames),
          "data-border": true,
          "data-framer-name": "Closed",
          "data-highlight": true,
          layoutDependency,
          layoutId: "BYKsytObg",
          onTap: onTapgiz758,
          ref: ref ?? ref1,
          style: {
            "--1du2u4n": numberToPixelString(gch9ImGt0),
            "--border-bottom-width": "1.5px",
            "--border-color": "rgba(255, 255, 255, 0.05)",
            "--border-left-width": "1.5px",
            "--border-right-width": "1.5px",
            "--border-style": "solid",
            "--border-top-width": "1.5px",
            backgroundColor: "rgb(38, 38, 39)",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            ...style
          },
          ...addPropertyOverrides({
            besngrNer: {
              "data-framer-name": "Opened",
              onTap: onTapvz01s6
            }
          }, baseVariant, gestureVariant),
          children: [_jsxs(motion.div, {
            className: "framer-dcwwmg",
            "data-framer-name": "Question wrap",
            layoutDependency,
            layoutId: "WIHs7Aqql",
            children: [<RichText __fromCanvasComponent className="framer-1l6775l" data-framer-name="Question" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="eg9i1KnSY" style={{
              "--framer-paragraph-spacing": "0px"
            }} text={BKqc4FBYW} verticalAlignment="top" withExternalLayout>{<React3.Fragment>{_jsx3(motion.p, {
                  className: "framer-styles-preset-1sq323",
                  "data-styles-preset": "Wrgt1shwF",
                  style: {
                    "--framer-text-alignment": "left"
                  },
                  children: "How does Nikea differ from other identity management platforms?"
                })}</React3.Fragment>}</RichText>, <ComponentViewportProvider>{_jsx3(motion.div, {
                className: "framer-1p380b8-container",
                layoutDependency,
                layoutId: "TfZn46uKR-container",
                children: <Icon color="var(--token-2ae4d622-3758-4fad-a56d-08fa00cc7638, rgb(182, 182, 185))" height="100%" iconSearch="Home" iconSelection="plus" id="TfZn46uKR" layoutId="TfZn46uKR" mirrored={false} selectByList style={{
                  height: "100%",
                  width: "100%"
                }} width="100%" {...addPropertyOverrides({
                  besngrNer: {
                    iconSelection: "minus"
                  }
                }, baseVariant, gestureVariant)} />
              })}</ComponentViewportProvider>]
          }), isDisplayed() && <RichText __fromCanvasComponent className="framer-5qjwol" data-framer-name="Supporting text" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="LFyOYv6uI" style={{
            "--extracted-r6o4lv": "var(--token-2ae4d622-3758-4fad-a56d-08fa00cc7638, rgb(182, 182, 185))",
            "--framer-paragraph-spacing": "0px"
          }} text={rFqdOggUD} verticalAlignment="top" withExternalLayout>{<React3.Fragment>{_jsx3(motion.p, {
                className: "framer-styles-preset-1p8b08q",
                "data-styles-preset": "UDEB09jjg",
                style: {
                  "--framer-text-color": "var(--extracted-r6o4lv, var(--token-2ae4d622-3758-4fad-a56d-08fa00cc7638, rgb(182, 182, 185)))"
                },
                children: "Nikea prioritizes security at its core, offering advanced telemetry and flexible integration options. Unlike other platforms, Nikea focuses on delivering precise control and comprehensive protection for all your identity and access management needs."
              })}</React3.Fragment>}</RichText>]
        })}</Transition>}</Variants>}</LayoutGroup>;
});
var css3 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-Dg30Q.framer-10wj7on, .framer-Dg30Q .framer-10wj7on { display: block; }", ".framer-Dg30Q.framer-fi4xt9 { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: var(--1du2u4n); position: relative; width: 916px; }", ".framer-Dg30Q .framer-dcwwmg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-Dg30Q .framer-1l6775l { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }", ".framer-Dg30Q .framer-1p380b8-container { flex: none; height: 24px; position: relative; width: 24px; }", ".framer-Dg30Q .framer-5qjwol { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Dg30Q.framer-fi4xt9, .framer-Dg30Q .framer-dcwwmg { gap: 0px; } .framer-Dg30Q.framer-fi4xt9 > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-Dg30Q.framer-fi4xt9 > :first-child { margin-top: 0px; } .framer-Dg30Q.framer-fi4xt9 > :last-child { margin-bottom: 0px; } .framer-Dg30Q .framer-dcwwmg > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-Dg30Q .framer-dcwwmg > :first-child { margin-left: 0px; } .framer-Dg30Q .framer-dcwwmg > :last-child { margin-right: 0px; } }", ...css2, ...css, '.framer-Dg30Q[data-border="true"]::after, .framer-Dg30Q [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'];
var FramerdnjmQyVTx = withCSS(Component, css3, "framer-Dg30Q");
var dnjmQyVTx_default = FramerdnjmQyVTx;
FramerdnjmQyVTx.displayName = "FAQ/Accordion";
FramerdnjmQyVTx.defaultProps = {
  height: 84,
  width: 916
};
addPropertyControls2(FramerdnjmQyVTx, {
  variant: {
    options: ["BYKsytObg", "besngrNer"],
    optionTitles: ["Closed", "Opened"],
    title: "Variant",
    type: ControlType3.Enum
  },
  BKqc4FBYW: {
    defaultValue: "How does Nikea differ from other identity management platforms?",
    displayTextArea: false,
    title: "Question",
    type: ControlType3.String
  },
  rFqdOggUD: {
    defaultValue: "Nikea prioritizes security at its core, offering advanced telemetry and flexible integration options. Unlike other platforms, Nikea focuses on delivering precise control and comprehensive protection for all your identity and access management needs.",
    displayTextArea: false,
    title: "Answer",
    type: ControlType3.String
  },
  gch9ImGt0: {
    defaultValue: "30px",
    title: "Padding",
    type: ControlType3.Padding
  }
});
addFonts(FramerdnjmQyVTx, [{
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
}, ...FeatherFonts, ...getFontsFromSharedStyle(fonts2), ...getFontsFromSharedStyle(fonts)], {
  supportsExplicitInterCodegen: true
});
var __FramerMetadata__ = {
  "exports": {
    "default": {
      "type": "reactComponent",
      "name": "FramerdnjmQyVTx",
      "slots": [],
      "annotations": {
        "framerIntrinsicWidth": "916",
        "framerDisplayContentsDiv": "false",
        "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"besngrNer":{"layout":["fixed","auto"]}}}',
        "framerComponentViewportWidth": "true",
        "framerVariables": '{"BKqc4FBYW":"question","rFqdOggUD":"answer","gch9ImGt0":"padding"}',
        "framerIntrinsicHeight": "84",
        "framerContractVersion": "1",
        "framerImmutableVariables": "true"
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
var _OriginalComponent = dnjmQyVTx_default;
function FAQAccordionWrapped(props) {
  var _variant = useVariant(props.variant);
  var _inner = (_variant !== undefined) ? { ...props, variant: _variant } : props;
  return _ctxJsx(ContextProviders, { children: _ctxJsx(_OriginalComponent, _inner) });
}
Object.assign(FAQAccordionWrapped, _OriginalComponent);
export {  __FramerMetadata__,  FAQAccordionWrapped as default   };