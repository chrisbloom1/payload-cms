"use client"
// http-url:https://framerusercontent.com/modules/pgT9NmyODgO9u6Irev3H/sw35PyYhEK7S0hCcSO7h/dVjNAfuSs.js
import { jsx as _jsx5, jsxs as _jsxs3 } from "react/jsx-runtime";
import { addFonts as addFonts3, addPropertyControls as addPropertyControls4, ComponentViewportProvider as ComponentViewportProvider2, ControlType as ControlType5, cx as cx3, getFonts as getFonts2, getFontsFromSharedStyle as getFontsFromSharedStyle3, RichText as RichText3, useActiveVariantCallback as useActiveVariantCallback3, useComponentViewport as useComponentViewport3, useLocaleInfo as useLocaleInfo3, useVariantState as useVariantState3, withCSS as withCSS3 } from "@proofly-framer/runtime";
import { LayoutGroup as LayoutGroup3, motion as motion3, MotionConfigContext as MotionConfigContext3 } from "@proofly-framer/runtime";
import * as React5 from "react";

// http-url:https://framerusercontent.com/modules/8IGKvfivqDrd8lwX8E2I/0TROeGiEJvIIoYVZIYCc/UrNHzCTiy.js
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
var css = ['.framer-ohnmF .framer-styles-preset-19ujo0x:not(.rich-text-wrapper), .framer-ohnmF .framer-styles-preset-19ujo0x.rich-text-wrapper h3 { --framer-font-family: "Haffer Bold", "Haffer Bold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 40px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 100%; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }', '@media (max-width: 1535px) and (min-width: 1280px) { .framer-ohnmF .framer-styles-preset-19ujo0x:not(.rich-text-wrapper), .framer-ohnmF .framer-styles-preset-19ujo0x.rich-text-wrapper h3 { --framer-font-family: "Haffer Bold", "Haffer Bold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 40px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 100%; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }', '@media (max-width: 1279px) and (min-width: 768px) { .framer-ohnmF .framer-styles-preset-19ujo0x:not(.rich-text-wrapper), .framer-ohnmF .framer-styles-preset-19ujo0x.rich-text-wrapper h3 { --framer-font-family: "Haffer Bold", "Haffer Bold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 36px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 100%; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }', '@media (max-width: 767px) and (min-width: 0px) { .framer-ohnmF .framer-styles-preset-19ujo0x:not(.rich-text-wrapper), .framer-ohnmF .framer-styles-preset-19ujo0x.rich-text-wrapper h3 { --framer-font-family: "Haffer Bold", "Haffer Bold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 100%; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }'];
var className = "framer-ohnmF";

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
import { fontStore as fontStore2 } from "@proofly-framer/runtime";
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

// http-url:https://framerusercontent.com/modules/hrEYztSl8D8TyacXlaiy/DgASN1v42yT6tA5SiBwC/Wrgt1shwF.js
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
var css3 = ['.framer-Pou2l .framer-styles-preset-1sq323:not(.rich-text-wrapper), .framer-Pou2l .framer-styles-preset-1sq323.rich-text-wrapper p { --framer-font-family: "Haffer Bold", "Haffer Bold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }', '@media (max-width: 809px) and (min-width: 0px) { .framer-Pou2l .framer-styles-preset-1sq323:not(.rich-text-wrapper), .framer-Pou2l .framer-styles-preset-1sq323.rich-text-wrapper p { --framer-font-family: "Haffer Bold", "Haffer Bold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }'];
var className3 = "framer-Pou2l";

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
    className: className4,
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
  const sharedStyleClassNames = [className3, className2];
  const componentViewport = useComponentViewport();
  return <LayoutGroup id={layoutId ?? defaultLayoutId}>{<Variants animate={variants} initial={false}>{<Transition value={transition1}>{_jsxs(motion.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx(serializationHash, ...sharedStyleClassNames, "framer-fi4xt9", className4, classNames),
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
var css4 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-Dg30Q.framer-10wj7on, .framer-Dg30Q .framer-10wj7on { display: block; }", ".framer-Dg30Q.framer-fi4xt9 { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: var(--1du2u4n); position: relative; width: 916px; }", ".framer-Dg30Q .framer-dcwwmg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-Dg30Q .framer-1l6775l { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }", ".framer-Dg30Q .framer-1p380b8-container { flex: none; height: 24px; position: relative; width: 24px; }", ".framer-Dg30Q .framer-5qjwol { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Dg30Q.framer-fi4xt9, .framer-Dg30Q .framer-dcwwmg { gap: 0px; } .framer-Dg30Q.framer-fi4xt9 > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-Dg30Q.framer-fi4xt9 > :first-child { margin-top: 0px; } .framer-Dg30Q.framer-fi4xt9 > :last-child { margin-bottom: 0px; } .framer-Dg30Q .framer-dcwwmg > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-Dg30Q .framer-dcwwmg > :first-child { margin-left: 0px; } .framer-Dg30Q .framer-dcwwmg > :last-child { margin-right: 0px; } }", ...css3, ...css2, '.framer-Dg30Q[data-border="true"]::after, .framer-Dg30Q [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'];
var FramerdnjmQyVTx = withCSS(Component, css4, "framer-Dg30Q");
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
}, ...FeatherFonts, ...getFontsFromSharedStyle(fonts3), ...getFontsFromSharedStyle(fonts2)], {
  supportsExplicitInterCodegen: true
});

// http-url:https://framerusercontent.com/modules/vKIe5ryUd6TMoV5bbtQR/PoCQExqcznl6qqhCOx8X/NIA2LSiQL.js
import { jsx as _jsx4, jsxs as _jsxs2 } from "react/jsx-runtime";
import { addFonts as addFonts2, addPropertyControls as addPropertyControls3, ControlType as ControlType4, cx as cx2, getFontsFromSharedStyle as getFontsFromSharedStyle2, RichText as RichText2, useActiveVariantCallback as useActiveVariantCallback2, useComponentViewport as useComponentViewport2, useLocaleInfo as useLocaleInfo2, useVariantState as useVariantState2, withCSS as withCSS2 } from "@proofly-framer/runtime";
import { LayoutGroup as LayoutGroup2, motion as motion2, MotionConfigContext as MotionConfigContext2 } from "@proofly-framer/runtime";
import * as React4 from "react";
import { jsx as _ctxJsx } from "react/jsx-runtime";
import { ContextProviders, useVariant } from "@proofly-framer/runtime";
var cycleOrder2 = ["KpcuynoY7", "V4xAYZNQE", "yZxybhQhU", "UbDFENOCE"];
var serializationHash2 = "framer-aEyzc";
var variantClassNames2 = {
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
var transition12 = {
  damping: 60,
  delay: 0,
  mass: 1,
  stiffness: 500,
  type: "spring"
};
var radiusForCorner = (value, cornerIndex) => {
  if (typeof value === "number" && Number.isFinite(value)) return Math.max(0, value) + "px";
  if (typeof value !== "string" || typeof cornerIndex !== "number") return void 0;
  const segments = value.split(" ");
  return segments[cornerIndex] || segments[cornerIndex - 2] || segments[0];
};
var Transition2 = ({
  value,
  children
}) => {
  const config = React4.useContext(MotionConfigContext2);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React4.useMemo(() => ({
    ...config,
    transition
  }), [JSON.stringify(transition)]);
  return <MotionConfigContext2.Provider value={contextValue}>{children}</MotionConfigContext2.Provider>;
};
var Variants2 = motion2(React4.Fragment);
var humanReadableVariantMap2 = {
  "Active v2": "UbDFENOCE",
  "Disable v2": "yZxybhQhU",
  Active: "V4xAYZNQE",
  Disable: "KpcuynoY7"
};
var getProps2 = ({
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
var createLayoutDependency2 = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component2 = React4.forwardRef(function (props, ref) {
  const {
    activeLocale,
    setLocale
  } = useLocaleInfo2();
  const {
    style,
    className: className4,
    layoutId,
    variant,
    ssa_z29zs,
    OCwxvzhqM,
    TZWm30yhb,
    ...restProps
  } = getProps2(props);
  const {
    baseVariant,
    classNames,
    gestureHandlers,
    gestureVariant,
    setGestureState,
    setVariant,
    variants
  } = useVariantState2({
    cycleOrder: cycleOrder2,
    defaultVariant: "KpcuynoY7",
    variant,
    variantClassNames: variantClassNames2
  });
  const layoutDependency = createLayoutDependency2(props, variants);
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
  const sharedStyleClassNames = [className3];
  const componentViewport = useComponentViewport2();
  return <LayoutGroup2 id={layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId}>{<Variants2 animate={variants} initial={false}>{<Transition2 value={transition12}>{_jsxs2(motion2.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx2(serializationHash2, ...sharedStyleClassNames, "framer-cv0zg0", className4, classNames),
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
              borderBottomLeftRadius: radiusForCorner(TZWm30yhb, 3),
              borderBottomRightRadius: radiusForCorner(TZWm30yhb, 2),
              borderTopLeftRadius: radiusForCorner(TZWm30yhb, 0),
              borderTopRightRadius: radiusForCorner(TZWm30yhb, 1)
            },
            yZxybhQhU: {
              "--border-bottom-width": "1px",
              "--border-color": "var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(124, 124, 124))",
              "--border-left-width": "1px",
              "--border-right-width": "1px",
              "--border-style": "solid",
              "--border-top-width": "1px",
              borderBottomLeftRadius: radiusForCorner(TZWm30yhb, 3),
              borderBottomRightRadius: radiusForCorner(TZWm30yhb, 2),
              borderTopLeftRadius: radiusForCorner(TZWm30yhb, 0),
              borderTopRightRadius: radiusForCorner(TZWm30yhb, 1)
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
          children: [<RichText2 __fromCanvasComponent className="framer-1waqwby" data-framer-name="Development team" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="Tumj1YRSK" style={{
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
              children: <React4.Fragment>{_jsx4(motion2.p, {
                  className: "framer-styles-preset-1sq323",
                  "data-styles-preset": "Wrgt1shwF",
                  style: {
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(10, 11, 10)))"
                  },
                  children: "Development team"
                })}</React4.Fragment>
            },
            V4xAYZNQE: {
              children: <React4.Fragment>{_jsx4(motion2.p, {
                  className: "framer-styles-preset-1sq323",
                  "data-styles-preset": "Wrgt1shwF",
                  style: {
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))"
                  },
                  children: "Development team"
                })}</React4.Fragment>
            }
          }, baseVariant, gestureVariant)}>{<React4.Fragment>{_jsx4(motion2.p, {
                className: "framer-styles-preset-1sq323",
                "data-styles-preset": "Wrgt1shwF",
                style: {
                  "--framer-text-color": "var(--extracted-r6o4lv, var(--token-2ae4d622-3758-4fad-a56d-08fa00cc7638, rgb(182, 182, 185)))"
                },
                children: "Development team"
              })}</React4.Fragment>}</RichText2>, isDisplayed() && _jsx4(motion2.div, {
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
        })}</Transition2>}</Variants2>}</LayoutGroup2>;
});
var css5 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-aEyzc.framer-1frc08u, .framer-aEyzc .framer-1frc08u { display: block; }", ".framer-aEyzc.framer-cv0zg0 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-aEyzc .framer-1waqwby { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-aEyzc .framer-1fazxe1 { flex: none; height: 2px; position: relative; width: 100%; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-aEyzc.framer-cv0zg0 { gap: 0px; } .framer-aEyzc.framer-cv0zg0 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-aEyzc.framer-cv0zg0 > :first-child { margin-top: 0px; } .framer-aEyzc.framer-cv0zg0 > :last-child { margin-bottom: 0px; } }", ".framer-aEyzc.framer-v-islpku.framer-cv0zg0, .framer-aEyzc.framer-v-1x20s42.framer-cv0zg0 { padding: 16px 24px 16px 24px; }", ...css3, '.framer-aEyzc[data-border="true"]::after, .framer-aEyzc [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'];
var FramerNIA2LSiQL = withCSS2(Component2, css5, "framer-aEyzc");
var NIA2LSiQL_default = FramerNIA2LSiQL;
FramerNIA2LSiQL.displayName = "Tab";
FramerNIA2LSiQL.defaultProps = {
  height: 36,
  width: 184
};
addPropertyControls3(FramerNIA2LSiQL, {
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
addFonts2(FramerNIA2LSiQL, [{
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
}, ...getFontsFromSharedStyle2(fonts3)], {
  supportsExplicitInterCodegen: true
});

// http-url:https://framerusercontent.com/modules/pgT9NmyODgO9u6Irev3H/sw35PyYhEK7S0hCcSO7h/dVjNAfuSs.js
var TabFonts = getFonts2(NIA2LSiQL_default);
var FAQAccordionFonts = getFonts2(dnjmQyVTx_default);
var cycleOrder3 = ["o1KtEY20K", "wyXry7tzi", "brf2lUrjV", "zsvGdkZxu", "ghKyLvclo", "sb_IwBSGZ", "LMwFKUBlV", "iU1SNHWeh", "Ik87pABXr"];
var serializationHash3 = "framer-ebnP1";
var variantClassNames3 = {
  brf2lUrjV: "framer-v-1orik8j",
  ghKyLvclo: "framer-v-f0wty6",
  Ik87pABXr: "framer-v-nr2c1o",
  iU1SNHWeh: "framer-v-1hgys3r",
  LMwFKUBlV: "framer-v-fw51np",
  o1KtEY20K: "framer-v-fym56o",
  sb_IwBSGZ: "framer-v-ai8qxf",
  wyXry7tzi: "framer-v-dldisx",
  zsvGdkZxu: "framer-v-1aiyj22"
};
function addPropertyOverrides3(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach(variant => variant && Object.assign(nextOverrides, overrides[variant]));
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
  const config = React5.useContext(MotionConfigContext3);
  const transition = value ?? config.transition;
  const contextValue = React5.useMemo(() => ({
    ...config,
    transition
  }), [JSON.stringify(transition)]);
  return <MotionConfigContext3.Provider value={contextValue}>{children}</MotionConfigContext3.Provider>;
};
var Variants3 = motion3(React5.Fragment);
var humanReadableVariantMap3 = {
  "Billing Mobile": "Ik87pABXr",
  "Billing Tablet": "sb_IwBSGZ",
  "General Mobile": "LMwFKUBlV",
  "General Tablet": "zsvGdkZxu",
  "Technical Mobile": "iU1SNHWeh",
  "Technical Tablet": "ghKyLvclo",
  Billing: "brf2lUrjV",
  General: "o1KtEY20K",
  Technical: "wyXry7tzi"
};
var getProps3 = ({
  height,
  id,
  width,
  ...props
}) => {
  return {
    ...props,
    variant: humanReadableVariantMap3[props.variant] ?? props.variant ?? "o1KtEY20K"
  };
};
var createLayoutDependency3 = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component3 = React5.forwardRef(function (props, ref) {
  const {
    activeLocale,
    setLocale
  } = useLocaleInfo3();
  const {
    style,
    className: className4,
    layoutId,
    variant,
    ...restProps
  } = getProps3(props);
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
    defaultVariant: "o1KtEY20K",
    variant,
    variantClassNames: variantClassNames3
  });
  const layoutDependency = createLayoutDependency3(props, variants);
  const {
    activeVariantCallback,
    delay
  } = useActiveVariantCallback3(baseVariant);
  const OCwxvzhqMe28wkr = activeVariantCallback(async (...args) => {
    setVariant("o1KtEY20K");
  });
  const OCwxvzhqMqpwqx8 = activeVariantCallback(async (...args) => {
    setVariant("zsvGdkZxu");
  });
  const OCwxvzhqMo8vx7h = activeVariantCallback(async (...args) => {
    setVariant("LMwFKUBlV");
  });
  const OCwxvzhqM1qrg29t = activeVariantCallback(async (...args) => {
    setVariant("wyXry7tzi");
  });
  const OCwxvzhqM1nwgov4 = activeVariantCallback(async (...args) => {
    setVariant("ghKyLvclo");
  });
  const OCwxvzhqMvyqgvk = activeVariantCallback(async (...args) => {
    setVariant("iU1SNHWeh");
  });
  const OCwxvzhqM18dg4wy = activeVariantCallback(async (...args) => {
    setVariant("brf2lUrjV");
  });
  const OCwxvzhqM96v4qn = activeVariantCallback(async (...args) => {
    setVariant("sb_IwBSGZ");
  });
  const OCwxvzhqM1h283rv = activeVariantCallback(async (...args) => {
    setVariant("Ik87pABXr");
  });
  const ref1 = React5.useRef(null);
  const defaultLayoutId = React5.useId();
  const sharedStyleClassNames = [className];
  const componentViewport = useComponentViewport3();
  return <LayoutGroup3 id={layoutId ?? defaultLayoutId}>{<Variants3 animate={variants} initial={false}>{<Transition3 value={transition13}>{_jsxs3(motion3.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx3(serializationHash3, ...sharedStyleClassNames, "framer-fym56o", className4, classNames),
          "data-framer-name": "General",
          layoutDependency,
          layoutId: "o1KtEY20K",
          ref: ref ?? ref1,
          style: {
            ...style
          },
          ...addPropertyOverrides3({
            brf2lUrjV: {
              "data-framer-name": "Billing"
            },
            ghKyLvclo: {
              "data-framer-name": "Technical Tablet"
            },
            Ik87pABXr: {
              "data-framer-name": "Billing Mobile"
            },
            iU1SNHWeh: {
              "data-framer-name": "Technical Mobile"
            },
            LMwFKUBlV: {
              "data-framer-name": "General Mobile"
            },
            sb_IwBSGZ: {
              "data-framer-name": "Billing Tablet"
            },
            wyXry7tzi: {
              "data-framer-name": "Technical"
            },
            zsvGdkZxu: {
              "data-framer-name": "General Tablet"
            }
          }, baseVariant, gestureVariant),
          children: [_jsxs3(motion3.div, {
            className: "framer-1rgqmis",
            "data-framer-name": "heading+navigation",
            layoutDependency,
            layoutId: "T9fdSXLLO",
            children: [_jsx5(motion3.div, {
              className: "framer-15grxgt",
              "data-framer-name": "Heading",
              layoutDependency,
              layoutId: "apW_te3q4",
              children: <RichText3 __fromCanvasComponent className="framer-bbcxy" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="AXZHqFSpR" style={{
                "--framer-paragraph-spacing": "0px"
              }} verticalAlignment="center" withExternalLayout>{<React5.Fragment>{_jsx5(motion3.h3, {
                    className: "framer-styles-preset-19ujo0x",
                    "data-styles-preset": "UrNHzCTiy",
                    style: {
                      "--framer-text-alignment": "center"
                    },
                    children: "Frequently Asked Questions"
                  })}</React5.Fragment>}</RichText3>
            }), _jsxs3(motion3.div, {
              className: "framer-mphys0",
              "data-framer-name": "navigation",
              "data-hide-scrollbars": true,
              layoutDependency,
              layoutId: "ZkYwhJRgJ",
              children: [<ComponentViewportProvider2 {...addPropertyOverrides3({
                ghKyLvclo: {
                  width: `max((${componentViewport?.width || "100vw"} - 128px) / 3, 1px)`
                },
                Ik87pABXr: {
                  width: `calc(${componentViewport?.width || "100vw"} - 32px)`
                },
                iU1SNHWeh: {
                  width: `calc(${componentViewport?.width || "100vw"} - 32px)`
                },
                LMwFKUBlV: {
                  width: `calc(${componentViewport?.width || "100vw"} - 32px)`
                },
                sb_IwBSGZ: {
                  width: `max((${componentViewport?.width || "100vw"} - 128px) / 3, 1px)`
                },
                zsvGdkZxu: {
                  width: `max((${componentViewport?.width || "100vw"} - 128px) / 3, 1px)`
                }
              }, baseVariant, gestureVariant)}>{_jsx5(motion3.div, {
                  className: "framer-15t89yf-container",
                  layoutDependency,
                  layoutId: "N1bCtdf2b-container",
                  children: <NIA2LSiQL_default height="100%" id="N1bCtdf2b" layoutId="N1bCtdf2b" OCwxvzhqM={OCwxvzhqMe28wkr} ssa_z29zs="General Information" TZWm30yhb="10px" variant="V4xAYZNQE" width="100%" {...addPropertyOverrides3({
                    brf2lUrjV: {
                      variant: "KpcuynoY7"
                    },
                    ghKyLvclo: {
                      OCwxvzhqM: OCwxvzhqMqpwqx8,
                      style: {
                        width: "100%"
                      },
                      variant: "yZxybhQhU"
                    },
                    Ik87pABXr: {
                      OCwxvzhqM: OCwxvzhqMo8vx7h,
                      style: {
                        width: "100%"
                      },
                      variant: "yZxybhQhU"
                    },
                    iU1SNHWeh: {
                      OCwxvzhqM: OCwxvzhqMo8vx7h,
                      style: {
                        width: "100%"
                      },
                      variant: "yZxybhQhU"
                    },
                    LMwFKUBlV: {
                      OCwxvzhqM: OCwxvzhqMo8vx7h,
                      style: {
                        width: "100%"
                      },
                      variant: "UbDFENOCE"
                    },
                    sb_IwBSGZ: {
                      OCwxvzhqM: OCwxvzhqMqpwqx8,
                      style: {
                        width: "100%"
                      },
                      variant: "yZxybhQhU"
                    },
                    wyXry7tzi: {
                      variant: "KpcuynoY7"
                    },
                    zsvGdkZxu: {
                      OCwxvzhqM: OCwxvzhqMqpwqx8,
                      style: {
                        width: "100%"
                      }
                    }
                  }, baseVariant, gestureVariant)} />
                })}</ComponentViewportProvider2>, <ComponentViewportProvider2 {...addPropertyOverrides3({
                ghKyLvclo: {
                  width: `max((${componentViewport?.width || "100vw"} - 128px) / 3, 1px)`
                },
                Ik87pABXr: {
                  width: `calc(${componentViewport?.width || "100vw"} - 32px)`
                },
                iU1SNHWeh: {
                  width: `calc(${componentViewport?.width || "100vw"} - 32px)`
                },
                LMwFKUBlV: {
                  width: `calc(${componentViewport?.width || "100vw"} - 32px)`
                },
                sb_IwBSGZ: {
                  width: `max((${componentViewport?.width || "100vw"} - 128px) / 3, 1px)`
                },
                zsvGdkZxu: {
                  width: `max((${componentViewport?.width || "100vw"} - 128px) / 3, 1px)`
                }
              }, baseVariant, gestureVariant)}>{_jsx5(motion3.div, {
                  className: "framer-9ssfrp-container",
                  layoutDependency,
                  layoutId: "RHQ_MOV7r-container",
                  children: <NIA2LSiQL_default height="100%" id="RHQ_MOV7r" layoutId="RHQ_MOV7r" OCwxvzhqM={OCwxvzhqM1qrg29t} ssa_z29zs="Technical Support" TZWm30yhb="10px" variant="KpcuynoY7" width="100%" {...addPropertyOverrides3({
                    ghKyLvclo: {
                      OCwxvzhqM: OCwxvzhqM1nwgov4,
                      style: {
                        width: "100%"
                      },
                      variant: "UbDFENOCE"
                    },
                    Ik87pABXr: {
                      OCwxvzhqM: OCwxvzhqMvyqgvk,
                      style: {
                        width: "100%"
                      }
                    },
                    iU1SNHWeh: {
                      OCwxvzhqM: OCwxvzhqMvyqgvk,
                      style: {
                        width: "100%"
                      },
                      variant: "UbDFENOCE"
                    },
                    LMwFKUBlV: {
                      OCwxvzhqM: OCwxvzhqMvyqgvk,
                      style: {
                        width: "100%"
                      }
                    },
                    sb_IwBSGZ: {
                      OCwxvzhqM: OCwxvzhqM1nwgov4,
                      style: {
                        width: "100%"
                      },
                      variant: "UbDFENOCE"
                    },
                    wyXry7tzi: {
                      variant: "V4xAYZNQE"
                    },
                    zsvGdkZxu: {
                      OCwxvzhqM: OCwxvzhqM1nwgov4,
                      style: {
                        width: "100%"
                      }
                    }
                  }, baseVariant, gestureVariant)} />
                })}</ComponentViewportProvider2>, <ComponentViewportProvider2 {...addPropertyOverrides3({
                ghKyLvclo: {
                  width: `max((${componentViewport?.width || "100vw"} - 128px) / 3, 1px)`
                },
                Ik87pABXr: {
                  width: `calc(${componentViewport?.width || "100vw"} - 32px)`
                },
                iU1SNHWeh: {
                  width: `calc(${componentViewport?.width || "100vw"} - 32px)`
                },
                LMwFKUBlV: {
                  width: `calc(${componentViewport?.width || "100vw"} - 32px)`
                },
                sb_IwBSGZ: {
                  width: `max((${componentViewport?.width || "100vw"} - 128px) / 3, 1px)`
                },
                zsvGdkZxu: {
                  width: `max((${componentViewport?.width || "100vw"} - 128px) / 3, 1px)`
                }
              }, baseVariant, gestureVariant)}>{_jsx5(motion3.div, {
                  className: "framer-9rhqvd-container",
                  layoutDependency,
                  layoutId: "K_VMqOtAJ-container",
                  children: <NIA2LSiQL_default height="100%" id="K_VMqOtAJ" layoutId="K_VMqOtAJ" OCwxvzhqM={OCwxvzhqM18dg4wy} ssa_z29zs="Billing Management" TZWm30yhb="10px" variant="KpcuynoY7" width="100%" {...addPropertyOverrides3({
                    brf2lUrjV: {
                      variant: "V4xAYZNQE"
                    },
                    ghKyLvclo: {
                      OCwxvzhqM: OCwxvzhqM96v4qn,
                      style: {
                        width: "100%"
                      }
                    },
                    Ik87pABXr: {
                      OCwxvzhqM: OCwxvzhqM1h283rv,
                      style: {
                        width: "100%"
                      },
                      variant: "UbDFENOCE"
                    },
                    iU1SNHWeh: {
                      OCwxvzhqM: OCwxvzhqM1h283rv,
                      style: {
                        width: "100%"
                      }
                    },
                    LMwFKUBlV: {
                      OCwxvzhqM: OCwxvzhqM1h283rv,
                      style: {
                        width: "100%"
                      }
                    },
                    sb_IwBSGZ: {
                      OCwxvzhqM: OCwxvzhqM96v4qn,
                      style: {
                        width: "100%"
                      },
                      variant: "yZxybhQhU"
                    },
                    zsvGdkZxu: {
                      OCwxvzhqM: OCwxvzhqM96v4qn,
                      style: {
                        width: "100%"
                      }
                    }
                  }, baseVariant, gestureVariant)} />
                })}</ComponentViewportProvider2>]
            })]
          }), _jsxs3(motion3.div, {
            className: "framer-sfwc6x",
            "data-framer-name": "Accordions",
            layoutDependency,
            layoutId: "fXwbcxBp7",
            children: [<ComponentViewportProvider2 width={`min(${componentViewport?.width || "100vw"} - 64px, 900px)`} {...addPropertyOverrides3({
              Ik87pABXr: {
                width: `min(${componentViewport?.width || "100vw"} - 32px, 900px)`
              },
              iU1SNHWeh: {
                width: `min(${componentViewport?.width || "100vw"} - 32px, 900px)`
              },
              LMwFKUBlV: {
                width: `min(${componentViewport?.width || "100vw"} - 32px, 900px)`
              }
            }, baseVariant, gestureVariant)}>{_jsx5(motion3.div, {
                className: "framer-1g817s0-container",
                layoutDependency,
                layoutId: "f4SKQYvfl-container",
                children: _jsx5(dnjmQyVTx_default, {
                  BKqc4FBYW: "What is Nicaea?",
                  gch9ImGt0: "30px",
                  height: "100%",
                  id: "f4SKQYvfl",
                  layoutId: "f4SKQYvfl",
                  rFqdOggUD: "Nicaea is a security-first identity and access management platform designed to provide robust protection, advanced telemetry, and seamless integration for businesses of all sizes.",
                  style: {
                    width: "100%"
                  },
                  variant: "BYKsytObg",
                  width: "100%",
                  ...addPropertyOverrides3({
                    brf2lUrjV: {
                      BKqc4FBYW: "How can I view my Nicaea billing statement?",
                      rFqdOggUD: 'To view your billing statement, log in to your Nicaea account and navigate to the "Billing" section. You can view and download your statements from there.'
                    },
                    ghKyLvclo: {
                      BKqc4FBYW: "How do I reset my password in Nicaea?",
                      rFqdOggUD: 'To reset your password, go to the login page and click on "Forgot Password." Follow the instructions to receive a password reset link via email.'
                    },
                    Ik87pABXr: {
                      BKqc4FBYW: "How can I view my Nicaea billing statement?",
                      gch9ImGt0: "20px",
                      rFqdOggUD: 'To view your billing statement, log in to your Nicaea account and navigate to the "Billing" section. You can view and download your statements from there.'
                    },
                    iU1SNHWeh: {
                      BKqc4FBYW: "How do I reset my password in Nicaea?",
                      gch9ImGt0: "20px",
                      rFqdOggUD: 'To reset your password, go to the login page and click on "Forgot Password." Follow the instructions to receive a password reset link via email.'
                    },
                    LMwFKUBlV: {
                      gch9ImGt0: "20px"
                    },
                    sb_IwBSGZ: {
                      BKqc4FBYW: "How can I view my Nicaea billing statement?",
                      rFqdOggUD: 'To view your billing statement, log in to your Nicaea account and navigate to the "Billing" section. You can view and download your statements from there.'
                    },
                    wyXry7tzi: {
                      BKqc4FBYW: "How do I reset my password in Nicaea?",
                      rFqdOggUD: 'To reset your password, go to the login page and click on "Forgot Password." Follow the instructions to receive a password reset link via email.'
                    }
                  }, baseVariant, gestureVariant)
                })
              })}</ComponentViewportProvider2>, <ComponentViewportProvider2 width={`min(${componentViewport?.width || "100vw"} - 64px, 900px)`} {...addPropertyOverrides3({
              Ik87pABXr: {
                width: `min(${componentViewport?.width || "100vw"} - 32px, 900px)`
              },
              iU1SNHWeh: {
                width: `min(${componentViewport?.width || "100vw"} - 32px, 900px)`
              },
              LMwFKUBlV: {
                width: `min(${componentViewport?.width || "100vw"} - 32px, 900px)`
              }
            }, baseVariant, gestureVariant)}>{_jsx5(motion3.div, {
                className: "framer-1gzxeer-container",
                layoutDependency,
                layoutId: "GojOddT84-container",
                children: _jsx5(dnjmQyVTx_default, {
                  BKqc4FBYW: "How does Nicaea differ from other identity management platforms?",
                  gch9ImGt0: "30px",
                  height: "100%",
                  id: "GojOddT84",
                  layoutId: "GojOddT84",
                  rFqdOggUD: "Nicaea prioritizes security at its core, offering advanced telemetry and flexible integration options. Unlike other platforms, Nicaea focuses on delivering precise control and comprehensive protection for all your identity and access management needs.",
                  style: {
                    width: "100%"
                  },
                  variant: "BYKsytObg",
                  width: "100%",
                  ...addPropertyOverrides3({
                    brf2lUrjV: {
                      BKqc4FBYW: "What payment methods does Nicaea accept?",
                      rFqdOggUD: 'Nicaea accepts various payment methods, including credit cards, debit cards, and ACH transfers. You can update your payment method in the "Billing" section of your account.'
                    },
                    ghKyLvclo: {
                      BKqc4FBYW: "How can I contact Nicaea technical support?",
                      rFqdOggUD: "You can contact Nicaea technical support through our support portal, via email at support@nicaea.com, or by calling our support hotline at 1-800-123-4567."
                    },
                    Ik87pABXr: {
                      BKqc4FBYW: "What payment methods does Nicaea accept?",
                      gch9ImGt0: "20px",
                      rFqdOggUD: 'Nicaea accepts various payment methods, including credit cards, debit cards, and ACH transfers. You can update your payment method in the "Billing" section of your account.'
                    },
                    iU1SNHWeh: {
                      BKqc4FBYW: "How can I contact Nicaea technical support?",
                      gch9ImGt0: "20px",
                      rFqdOggUD: "You can contact Nicaea technical support through our support portal, via email at support@nicaea.com, or by calling our support hotline at 1-800-123-4567."
                    },
                    LMwFKUBlV: {
                      gch9ImGt0: "20px"
                    },
                    sb_IwBSGZ: {
                      BKqc4FBYW: "What payment methods does Nicaea accept?",
                      rFqdOggUD: 'Nicaea accepts various payment methods, including credit cards, debit cards, and ACH transfers. You can update your payment method in the "Billing" section of your account.'
                    },
                    wyXry7tzi: {
                      BKqc4FBYW: "How can I contact Nicaea technical support?",
                      rFqdOggUD: "You can contact Nicaea technical support through our support portal, via email at support@nicaea.com, or by calling our support hotline at 1-800-123-4567."
                    }
                  }, baseVariant, gestureVariant)
                })
              })}</ComponentViewportProvider2>, <ComponentViewportProvider2 width={`min(${componentViewport?.width || "100vw"} - 64px, 900px)`} {...addPropertyOverrides3({
              Ik87pABXr: {
                width: `min(${componentViewport?.width || "100vw"} - 32px, 900px)`
              },
              iU1SNHWeh: {
                width: `min(${componentViewport?.width || "100vw"} - 32px, 900px)`
              },
              LMwFKUBlV: {
                width: `min(${componentViewport?.width || "100vw"} - 32px, 900px)`
              }
            }, baseVariant, gestureVariant)}>{_jsx5(motion3.div, {
                className: "framer-nmsjtt-container",
                layoutDependency,
                layoutId: "waQUNeFrp-container",
                children: _jsx5(dnjmQyVTx_default, {
                  BKqc4FBYW: "Who can benefit from using Nicaea?",
                  gch9ImGt0: "30px",
                  height: "100%",
                  id: "waQUNeFrp",
                  layoutId: "waQUNeFrp",
                  rFqdOggUD: "Nicaea is ideal for organizations of all sizes, from small businesses to large enterprises, that require secure and efficient identity and access management solutions. IT professionals, security engineers, and system administrators will find Nicaea particularly beneficial.",
                  style: {
                    width: "100%"
                  },
                  variant: "BYKsytObg",
                  width: "100%",
                  ...addPropertyOverrides3({
                    brf2lUrjV: {
                      BKqc4FBYW: "How do I update my billing information?",
                      rFqdOggUD: 'To update your billing information, go to the "Billing" section of your Nicaea account and click "Edit Billing Information." Enter your new details and save the changes.'
                    },
                    ghKyLvclo: {
                      BKqc4FBYW: "What should I do if I encounter a system error?",
                      rFqdOggUD: "If you encounter a system error, please document the error message and contact our technical support team with the details. Our team will assist you in resolving the issue promptly."
                    },
                    Ik87pABXr: {
                      BKqc4FBYW: "How do I update my billing information?",
                      gch9ImGt0: "20px",
                      rFqdOggUD: 'To update your billing information, go to the "Billing" section of your Nicaea account and click "Edit Billing Information." Enter your new details and save the changes.'
                    },
                    iU1SNHWeh: {
                      BKqc4FBYW: "What should I do if I encounter a system error?",
                      gch9ImGt0: "20px",
                      rFqdOggUD: "If you encounter a system error, please document the error message and contact our technical support team with the details. Our team will assist you in resolving the issue promptly."
                    },
                    LMwFKUBlV: {
                      gch9ImGt0: "20px"
                    },
                    sb_IwBSGZ: {
                      BKqc4FBYW: "How do I update my billing information?",
                      rFqdOggUD: 'To update your billing information, go to the "Billing" section of your Nicaea account and click "Edit Billing Information." Enter your new details and save the changes.'
                    },
                    wyXry7tzi: {
                      BKqc4FBYW: "What should I do if I encounter a system error?",
                      rFqdOggUD: "If you encounter a system error, please document the error message and contact our technical support team with the details. Our team will assist you in resolving the issue promptly."
                    }
                  }, baseVariant, gestureVariant)
                })
              })}</ComponentViewportProvider2>, <ComponentViewportProvider2 width={`min(${componentViewport?.width || "100vw"} - 64px, 900px)`} {...addPropertyOverrides3({
              Ik87pABXr: {
                width: `min(${componentViewport?.width || "100vw"} - 32px, 900px)`
              },
              iU1SNHWeh: {
                width: `min(${componentViewport?.width || "100vw"} - 32px, 900px)`
              },
              LMwFKUBlV: {
                width: `min(${componentViewport?.width || "100vw"} - 32px, 900px)`
              }
            }, baseVariant, gestureVariant)}>{_jsx5(motion3.div, {
                className: "framer-1ltxmlw-container",
                layoutDependency,
                layoutId: "Y9FL8NfJB-container",
                children: _jsx5(dnjmQyVTx_default, {
                  BKqc4FBYW: "What features does Nicaea offer?",
                  gch9ImGt0: "30px",
                  height: "100%",
                  id: "Y9FL8NfJB",
                  layoutId: "Y9FL8NfJB",
                  rFqdOggUD: "Nicaea offers a wide range of features, including multi-factor authentication (MFA), role-based access control (RBAC), advanced threat detection, real-time analytics, customizable reports, and seamless integration with third-party applications.",
                  style: {
                    width: "100%"
                  },
                  variant: "BYKsytObg",
                  width: "100%",
                  ...addPropertyOverrides3({
                    brf2lUrjV: {
                      BKqc4FBYW: "Can I switch my Nicaea subscription plan?",
                      rFqdOggUD: 'Yes, you can switch your subscription plan at any time. Go to the "Subscription" section in your account settings and select the plan you wish to switch to.'
                    },
                    ghKyLvclo: {
                      BKqc4FBYW: "How do I update my Nicaea software to the latest version?",
                      rFqdOggUD: 'Updates for Nicaea software can be found in the "Updates" section of the admin dashboard. Follow the on-screen instructions to download and install the latest version.'
                    },
                    Ik87pABXr: {
                      BKqc4FBYW: "Can I switch my Nicaea subscription plan?",
                      gch9ImGt0: "20px",
                      rFqdOggUD: 'Yes, you can switch your subscription plan at any time. Go to the "Subscription" section in your account settings and select the plan you wish to switch to.'
                    },
                    iU1SNHWeh: {
                      BKqc4FBYW: "How do I update my Nicaea software to the latest version?",
                      gch9ImGt0: "20px",
                      rFqdOggUD: 'Updates for Nicaea software can be found in the "Updates" section of the admin dashboard. Follow the on-screen instructions to download and install the latest version.'
                    },
                    LMwFKUBlV: {
                      gch9ImGt0: "20px"
                    },
                    sb_IwBSGZ: {
                      BKqc4FBYW: "Can I switch my Nicaea subscription plan?",
                      rFqdOggUD: 'Yes, you can switch your subscription plan at any time. Go to the "Subscription" section in your account settings and select the plan you wish to switch to.'
                    },
                    wyXry7tzi: {
                      BKqc4FBYW: "How do I update my Nicaea software to the latest version?",
                      rFqdOggUD: 'Updates for Nicaea software can be found in the "Updates" section of the admin dashboard. Follow the on-screen instructions to download and install the latest version.'
                    }
                  }, baseVariant, gestureVariant)
                })
              })}</ComponentViewportProvider2>, <ComponentViewportProvider2 width={`min(${componentViewport?.width || "100vw"} - 64px, 900px)`} {...addPropertyOverrides3({
              Ik87pABXr: {
                width: `min(${componentViewport?.width || "100vw"} - 32px, 900px)`
              },
              iU1SNHWeh: {
                width: `min(${componentViewport?.width || "100vw"} - 32px, 900px)`
              },
              LMwFKUBlV: {
                width: `min(${componentViewport?.width || "100vw"} - 32px, 900px)`
              }
            }, baseVariant, gestureVariant)}>{_jsx5(motion3.div, {
                className: "framer-rh3aub-container",
                layoutDependency,
                layoutId: "zNl0Pbd5Q-container",
                children: _jsx5(dnjmQyVTx_default, {
                  BKqc4FBYW: "Is Nicaea compliant with industry standards?",
                  gch9ImGt0: "30px",
                  height: "100%",
                  id: "zNl0Pbd5Q",
                  layoutId: "zNl0Pbd5Q",
                  rFqdOggUD: "Yes, Nicaea adheres to industry standards and best practices for security and compliance, ensuring your organization meets regulatory requirements and protects sensitive data effectively.",
                  style: {
                    width: "100%"
                  },
                  variant: "BYKsytObg",
                  width: "100%",
                  ...addPropertyOverrides3({
                    brf2lUrjV: {
                      BKqc4FBYW: "How do I cancel my Nicaea subscription?",
                      rFqdOggUD: 'To cancel your subscription, navigate to the "Subscription" section in your account settings and click "Cancel Subscription." Follow the prompts to complete the cancellation process.'
                    },
                    ghKyLvclo: {
                      BKqc4FBYW: "Can I customize the security settings in Nicaea?",
                      rFqdOggUD: 'Yes, Nicaea allows you to customize various security settings to match your organization\u2019s needs. Navigate to the "Security Settings" section in the admin dashboard to make changes.'
                    },
                    Ik87pABXr: {
                      BKqc4FBYW: "How do I cancel my Nicaea subscription?",
                      gch9ImGt0: "20px",
                      rFqdOggUD: 'To cancel your subscription, navigate to the "Subscription" section in your account settings and click "Cancel Subscription." Follow the prompts to complete the cancellation process.'
                    },
                    iU1SNHWeh: {
                      BKqc4FBYW: "Can I customize the security settings in Nicaea?",
                      gch9ImGt0: "20px",
                      rFqdOggUD: 'Yes, Nicaea allows you to customize various security settings to match your organization\u2019s needs. Navigate to the "Security Settings" section in the admin dashboard to make changes.'
                    },
                    LMwFKUBlV: {
                      gch9ImGt0: "20px"
                    },
                    sb_IwBSGZ: {
                      BKqc4FBYW: "How do I cancel my Nicaea subscription?",
                      rFqdOggUD: 'To cancel your subscription, navigate to the "Subscription" section in your account settings and click "Cancel Subscription." Follow the prompts to complete the cancellation process.'
                    },
                    wyXry7tzi: {
                      BKqc4FBYW: "Can I customize the security settings in Nicaea?",
                      rFqdOggUD: 'Yes, Nicaea allows you to customize various security settings to match your organization\u2019s needs. Navigate to the "Security Settings" section in the admin dashboard to make changes.'
                    }
                  }, baseVariant, gestureVariant)
                })
              })}</ComponentViewportProvider2>, <ComponentViewportProvider2 width={`min(${componentViewport?.width || "100vw"} - 64px, 900px)`} {...addPropertyOverrides3({
              Ik87pABXr: {
                width: `min(${componentViewport?.width || "100vw"} - 32px, 900px)`
              },
              iU1SNHWeh: {
                width: `min(${componentViewport?.width || "100vw"} - 32px, 900px)`
              },
              LMwFKUBlV: {
                width: `min(${componentViewport?.width || "100vw"} - 32px, 900px)`
              }
            }, baseVariant, gestureVariant)}>{_jsx5(motion3.div, {
                className: "framer-1umswu4-container",
                layoutDependency,
                layoutId: "XGKnRCmoP-container",
                children: _jsx5(dnjmQyVTx_default, {
                  BKqc4FBYW: "How can I request a demo of Nicaea?",
                  gch9ImGt0: "30px",
                  height: "100%",
                  id: "XGKnRCmoP",
                  layoutId: "XGKnRCmoP",
                  rFqdOggUD: 'You can request a demo by visiting our Contact page and clicking on the "Request a Demo" button. Fill out the form, and our team will get in touch with you to schedule a personalized demonstration.',
                  style: {
                    width: "100%"
                  },
                  variant: "BYKsytObg",
                  width: "100%",
                  ...addPropertyOverrides3({
                    brf2lUrjV: {
                      BKqc4FBYW: "Will I receive a refund if I cancel my subscription early?",
                      rFqdOggUD: 'Refunds for early cancellations depend on your subscription terms. Please review our refund policy in the "Billing" section or contact our billing support team for assistance.'
                    },
                    ghKyLvclo: {
                      BKqc4FBYW: "How do I add new users to my Nicaea account?",
                      rFqdOggUD: 'To add new users, go to the "User Management" section in the admin dashboard and click "Add User." Fill in the required information and set appropriate permissions for the new user.'
                    },
                    Ik87pABXr: {
                      BKqc4FBYW: "Will I receive a refund if I cancel my subscription early?",
                      gch9ImGt0: "20px",
                      rFqdOggUD: 'Refunds for early cancellations depend on your subscription terms. Please review our refund policy in the "Billing" section or contact our billing support team for assistance.'
                    },
                    iU1SNHWeh: {
                      BKqc4FBYW: "How do I add new users to my Nicaea account?",
                      gch9ImGt0: "20px",
                      rFqdOggUD: 'To add new users, go to the "User Management" section in the admin dashboard and click "Add User." Fill in the required information and set appropriate permissions for the new user.'
                    },
                    LMwFKUBlV: {
                      gch9ImGt0: "20px"
                    },
                    sb_IwBSGZ: {
                      BKqc4FBYW: "Will I receive a refund if I cancel my subscription early?",
                      rFqdOggUD: 'Refunds for early cancellations depend on your subscription terms. Please review our refund policy in the "Billing" section or contact our billing support team for assistance.'
                    },
                    wyXry7tzi: {
                      BKqc4FBYW: "How do I add new users to my Nicaea account?",
                      rFqdOggUD: 'To add new users, go to the "User Management" section in the admin dashboard and click "Add User." Fill in the required information and set appropriate permissions for the new user.'
                    }
                  }, baseVariant, gestureVariant)
                })
              })}</ComponentViewportProvider2>]
          })]
        })}</Transition3>}</Variants3>}</LayoutGroup3>;
});
var css6 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-ebnP1.framer-1mdn0wt, .framer-ebnP1 .framer-1mdn0wt { display: block; }", ".framer-ebnP1.framer-fym56o { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: center; overflow: visible; padding: 120px 32px 120px 32px; position: relative; width: 1280px; }", ".framer-ebnP1 .framer-1rgqmis { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 96px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-ebnP1 .framer-15grxgt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-ebnP1 .framer-bbcxy { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-ebnP1 .framer-mphys0 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-ebnP1 .framer-15t89yf-container, .framer-ebnP1 .framer-9ssfrp-container, .framer-ebnP1 .framer-9rhqvd-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-ebnP1 .framer-sfwc6x { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; max-width: 900px; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-ebnP1 .framer-1g817s0-container, .framer-ebnP1 .framer-1gzxeer-container, .framer-ebnP1 .framer-nmsjtt-container, .framer-ebnP1 .framer-1ltxmlw-container, .framer-ebnP1 .framer-rh3aub-container, .framer-ebnP1 .framer-1umswu4-container { flex: none; height: auto; position: relative; width: 100%; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-ebnP1.framer-fym56o, .framer-ebnP1 .framer-1rgqmis, .framer-ebnP1 .framer-15grxgt, .framer-ebnP1 .framer-mphys0, .framer-ebnP1 .framer-sfwc6x { gap: 0px; } .framer-ebnP1.framer-fym56o > * { margin: 0px; margin-bottom: calc(64px / 2); margin-top: calc(64px / 2); } .framer-ebnP1.framer-fym56o > :first-child, .framer-ebnP1 .framer-1rgqmis > :first-child, .framer-ebnP1 .framer-15grxgt > :first-child, .framer-ebnP1 .framer-sfwc6x > :first-child { margin-top: 0px; } .framer-ebnP1.framer-fym56o > :last-child, .framer-ebnP1 .framer-1rgqmis > :last-child, .framer-ebnP1 .framer-15grxgt > :last-child, .framer-ebnP1 .framer-sfwc6x > :last-child { margin-bottom: 0px; } .framer-ebnP1 .framer-1rgqmis > * { margin: 0px; margin-bottom: calc(96px / 2); margin-top: calc(96px / 2); } .framer-ebnP1 .framer-15grxgt > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-ebnP1 .framer-mphys0 > * { margin: 0px; margin-left: calc(32px / 2); margin-right: calc(32px / 2); } .framer-ebnP1 .framer-mphys0 > :first-child { margin-left: 0px; } .framer-ebnP1 .framer-mphys0 > :last-child { margin-right: 0px; } .framer-ebnP1 .framer-sfwc6x > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } }", ".framer-ebnP1.framer-v-dldisx .framer-1g817s0-container { order: 0; }", ".framer-ebnP1.framer-v-dldisx .framer-1gzxeer-container { order: 1; }", ".framer-ebnP1.framer-v-dldisx .framer-nmsjtt-container { order: 2; }", ".framer-ebnP1.framer-v-dldisx .framer-1ltxmlw-container { order: 3; }", ".framer-ebnP1.framer-v-dldisx .framer-rh3aub-container { order: 4; }", ".framer-ebnP1.framer-v-dldisx .framer-1umswu4-container { order: 5; }", ".framer-ebnP1.framer-v-1aiyj22.framer-fym56o, .framer-ebnP1.framer-v-f0wty6.framer-fym56o, .framer-ebnP1.framer-v-ai8qxf.framer-fym56o { padding: 80px 32px 80px 32px; width: 704px; }", ".framer-ebnP1.framer-v-1aiyj22 .framer-1rgqmis { align-content: flex-start; align-items: flex-start; gap: 48px; }", ".framer-ebnP1.framer-v-1aiyj22 .framer-mphys0, .framer-ebnP1.framer-v-f0wty6 .framer-mphys0, .framer-ebnP1.framer-v-ai8qxf .framer-mphys0, .framer-ebnP1.framer-v-fw51np .framer-15t89yf-container, .framer-ebnP1.framer-v-fw51np .framer-9ssfrp-container, .framer-ebnP1.framer-v-fw51np .framer-9rhqvd-container, .framer-ebnP1.framer-v-1hgys3r .framer-15t89yf-container, .framer-ebnP1.framer-v-1hgys3r .framer-9ssfrp-container, .framer-ebnP1.framer-v-1hgys3r .framer-9rhqvd-container, .framer-ebnP1.framer-v-nr2c1o .framer-15t89yf-container, .framer-ebnP1.framer-v-nr2c1o .framer-9ssfrp-container, .framer-ebnP1.framer-v-nr2c1o .framer-9rhqvd-container { width: 100%; }", ".framer-ebnP1.framer-v-1aiyj22 .framer-15t89yf-container, .framer-ebnP1.framer-v-1aiyj22 .framer-9ssfrp-container, .framer-ebnP1.framer-v-1aiyj22 .framer-9rhqvd-container, .framer-ebnP1.framer-v-f0wty6 .framer-15t89yf-container, .framer-ebnP1.framer-v-f0wty6 .framer-9ssfrp-container, .framer-ebnP1.framer-v-f0wty6 .framer-9rhqvd-container, .framer-ebnP1.framer-v-ai8qxf .framer-15t89yf-container, .framer-ebnP1.framer-v-ai8qxf .framer-9ssfrp-container, .framer-ebnP1.framer-v-ai8qxf .framer-9rhqvd-container { flex: 1 0 0px; width: 1px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-ebnP1.framer-v-1aiyj22 .framer-1rgqmis { gap: 0px; } .framer-ebnP1.framer-v-1aiyj22 .framer-1rgqmis > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-ebnP1.framer-v-1aiyj22 .framer-1rgqmis > :first-child { margin-top: 0px; } .framer-ebnP1.framer-v-1aiyj22 .framer-1rgqmis > :last-child { margin-bottom: 0px; } }", ".framer-ebnP1.framer-v-f0wty6 .framer-1rgqmis, .framer-ebnP1.framer-v-ai8qxf .framer-1rgqmis { align-content: flex-start; align-items: flex-start; gap: 48px; justify-content: flex-start; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-ebnP1.framer-v-f0wty6 .framer-1rgqmis { gap: 0px; } .framer-ebnP1.framer-v-f0wty6 .framer-1rgqmis > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-ebnP1.framer-v-f0wty6 .framer-1rgqmis > :first-child { margin-top: 0px; } .framer-ebnP1.framer-v-f0wty6 .framer-1rgqmis > :last-child { margin-bottom: 0px; } }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-ebnP1.framer-v-ai8qxf .framer-1rgqmis { gap: 0px; } .framer-ebnP1.framer-v-ai8qxf .framer-1rgqmis > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-ebnP1.framer-v-ai8qxf .framer-1rgqmis > :first-child { margin-top: 0px; } .framer-ebnP1.framer-v-ai8qxf .framer-1rgqmis > :last-child { margin-bottom: 0px; } }", ".framer-ebnP1.framer-v-fw51np.framer-fym56o, .framer-ebnP1.framer-v-1hgys3r.framer-fym56o, .framer-ebnP1.framer-v-nr2c1o.framer-fym56o { gap: 48px; padding: 60px 16px 60px 16px; width: 288px; }", ".framer-ebnP1.framer-v-fw51np .framer-1rgqmis, .framer-ebnP1.framer-v-1hgys3r .framer-1rgqmis, .framer-ebnP1.framer-v-nr2c1o .framer-1rgqmis { gap: 48px; }", ".framer-ebnP1.framer-v-fw51np .framer-mphys0, .framer-ebnP1.framer-v-1hgys3r .framer-mphys0, .framer-ebnP1.framer-v-nr2c1o .framer-mphys0 { align-content: center; align-items: center; flex-direction: column; justify-content: center; width: 100%; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-ebnP1.framer-v-fw51np.framer-fym56o, .framer-ebnP1.framer-v-fw51np .framer-1rgqmis, .framer-ebnP1.framer-v-fw51np .framer-mphys0 { gap: 0px; } .framer-ebnP1.framer-v-fw51np.framer-fym56o > *, .framer-ebnP1.framer-v-fw51np .framer-1rgqmis > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-ebnP1.framer-v-fw51np.framer-fym56o > :first-child, .framer-ebnP1.framer-v-fw51np .framer-1rgqmis > :first-child, .framer-ebnP1.framer-v-fw51np .framer-mphys0 > :first-child { margin-top: 0px; } .framer-ebnP1.framer-v-fw51np.framer-fym56o > :last-child, .framer-ebnP1.framer-v-fw51np .framer-1rgqmis > :last-child, .framer-ebnP1.framer-v-fw51np .framer-mphys0 > :last-child { margin-bottom: 0px; } .framer-ebnP1.framer-v-fw51np .framer-mphys0 > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-ebnP1.framer-v-1hgys3r.framer-fym56o, .framer-ebnP1.framer-v-1hgys3r .framer-1rgqmis, .framer-ebnP1.framer-v-1hgys3r .framer-mphys0 { gap: 0px; } .framer-ebnP1.framer-v-1hgys3r.framer-fym56o > *, .framer-ebnP1.framer-v-1hgys3r .framer-1rgqmis > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-ebnP1.framer-v-1hgys3r.framer-fym56o > :first-child, .framer-ebnP1.framer-v-1hgys3r .framer-1rgqmis > :first-child, .framer-ebnP1.framer-v-1hgys3r .framer-mphys0 > :first-child { margin-top: 0px; } .framer-ebnP1.framer-v-1hgys3r.framer-fym56o > :last-child, .framer-ebnP1.framer-v-1hgys3r .framer-1rgqmis > :last-child, .framer-ebnP1.framer-v-1hgys3r .framer-mphys0 > :last-child { margin-bottom: 0px; } .framer-ebnP1.framer-v-1hgys3r .framer-mphys0 > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-ebnP1.framer-v-nr2c1o.framer-fym56o, .framer-ebnP1.framer-v-nr2c1o .framer-1rgqmis, .framer-ebnP1.framer-v-nr2c1o .framer-mphys0 { gap: 0px; } .framer-ebnP1.framer-v-nr2c1o.framer-fym56o > *, .framer-ebnP1.framer-v-nr2c1o .framer-1rgqmis > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-ebnP1.framer-v-nr2c1o.framer-fym56o > :first-child, .framer-ebnP1.framer-v-nr2c1o .framer-1rgqmis > :first-child, .framer-ebnP1.framer-v-nr2c1o .framer-mphys0 > :first-child { margin-top: 0px; } .framer-ebnP1.framer-v-nr2c1o.framer-fym56o > :last-child, .framer-ebnP1.framer-v-nr2c1o .framer-1rgqmis > :last-child, .framer-ebnP1.framer-v-nr2c1o .framer-mphys0 > :last-child { margin-bottom: 0px; } .framer-ebnP1.framer-v-nr2c1o .framer-mphys0 > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } }", ...css, '.framer-ebnP1[data-hide-scrollbars="true"]::-webkit-scrollbar, .framer-ebnP1 [data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }', '.framer-ebnP1[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb, .framer-ebnP1 [data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }'];
var FramerdVjNAfuSs = withCSS3(Component3, css6, "framer-ebnP1");
var dVjNAfuSs_default = FramerdVjNAfuSs;
FramerdVjNAfuSs.displayName = "FAQ/Prototype";
FramerdVjNAfuSs.defaultProps = {
  height: 1068,
  width: 1280
};
addPropertyControls4(FramerdVjNAfuSs, {
  variant: {
    options: ["o1KtEY20K", "wyXry7tzi", "brf2lUrjV", "zsvGdkZxu", "ghKyLvclo", "sb_IwBSGZ", "LMwFKUBlV", "iU1SNHWeh", "Ik87pABXr"],
    optionTitles: ["General", "Technical", "Billing", "General Tablet", "Technical Tablet", "Billing Tablet", "General Mobile", "Technical Mobile", "Billing Mobile"],
    title: "Variant",
    type: ControlType5.Enum
  }
});
addFonts3(FramerdVjNAfuSs, [{
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
}, ...TabFonts, ...FAQAccordionFonts, ...getFontsFromSharedStyle3(fonts)], {
  supportsExplicitInterCodegen: true
});
var __FramerMetadata__ = {
  "exports": {
    "default": {
      "type": "reactComponent",
      "name": "FramerdVjNAfuSs",
      "slots": [],
      "annotations": {
        "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"wyXry7tzi":{"layout":["fixed","auto"]},"brf2lUrjV":{"layout":["fixed","auto"]},"zsvGdkZxu":{"layout":["fixed","auto"]},"ghKyLvclo":{"layout":["fixed","auto"]},"sb_IwBSGZ":{"layout":["fixed","auto"]},"LMwFKUBlV":{"layout":["fixed","auto"]},"iU1SNHWeh":{"layout":["fixed","auto"]},"Ik87pABXr":{"layout":["fixed","auto"]}}}',
        "framerComponentViewportWidth": "true",
        "framerIntrinsicHeight": "1068",
        "framerDisplayContentsDiv": "false",
        "framerIntrinsicWidth": "1280",
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
var _OriginalComponent = dVjNAfuSs_default;
function FAQPrototypeWrapped(props) {
  var _variant = useVariant(props.variant);
  var _inner = (_variant !== undefined) ? { ...props, variant: _variant } : props;
  return _ctxJsx(ContextProviders, { children: _ctxJsx(_OriginalComponent, _inner) });
}
Object.assign(FAQPrototypeWrapped, _OriginalComponent);
export {  __FramerMetadata__,  FAQPrototypeWrapped as default   };