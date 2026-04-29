"use client"
// http-url:https://framerusercontent.com/modules/rOBpjc6KZHw4sFVHx81J/j0d7GA56hykfmxtEFrFn/sr21IGsuy.js
import { jsx as _jsx6, jsxs as _jsxs3 } from "react/jsx-runtime";
import { addFonts as addFonts3, addPropertyControls as addPropertyControls5, ComponentViewportProvider as ComponentViewportProvider2, ControlType as ControlType6, cx as cx4, getFonts as getFonts3, getFontsFromSharedStyle as getFontsFromSharedStyle3, getPropertyControls, RichText as RichText3, useComponentViewport as useComponentViewport3, useLocaleInfo as useLocaleInfo3, useVariantState as useVariantState3, withCSS as withCSS4 } from "@proofly-framer/runtime";
import { LayoutGroup as LayoutGroup3, motion as motion5, MotionConfigContext as MotionConfigContext3 } from "@proofly-framer/runtime";
import * as React6 from "react";

// Extracted SVG assets
const __svg_1 = '<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 5.5 5.25 L 0 10.5" fill="transparent" height="10.5px" id="pTO_zwTXv" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(13.75 6.75)" width="5.5px"/><path d="M 14.25 0 L 0 0" fill="transparent" height="1px" id="Jh7NTfV71" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(4.75 12)" width="14.25px"/></svg>';


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

// http-url:https://framerusercontent.com/modules/5b0cRZbgNRw1dCNVnxhv/mDSpobAAY3IZwQ4LzCUn/z4Urx0kPV.js
import { fontStore as fontStore4 } from "@proofly-framer/runtime";
fontStore4.loadFonts(["CUSTOM;Haffer Regular", "CUSTOMV2;Haffer Bold", "CUSTOMV2;Haffer Bold Italic", "CUSTOMV2;Haffer Regular Italic"]);
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
var css4 = ['.framer-tLH4r .framer-styles-preset-1e98430:not(.rich-text-wrapper), .framer-tLH4r .framer-styles-preset-1e98430.rich-text-wrapper h5 { --framer-font-family: "Haffer Regular", sans-serif; --framer-font-family-bold: "Haffer Bold", sans-serif; --framer-font-family-bold-italic: "Haffer Bold Italic", sans-serif; --framer-font-family-italic: "Haffer Regular Italic", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 430; --framer-font-weight-bold: 790; --framer-font-weight-bold-italic: 790; --framer-font-weight-italic: 430; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }', '@media (max-width: 768px) and (min-width: 0px) { .framer-tLH4r .framer-styles-preset-1e98430:not(.rich-text-wrapper), .framer-tLH4r .framer-styles-preset-1e98430.rich-text-wrapper h5 { --framer-font-family: "Haffer Regular", sans-serif; --framer-font-family-bold: "Haffer Bold", sans-serif; --framer-font-family-bold-italic: "Haffer Bold Italic", sans-serif; --framer-font-family-italic: "Haffer Regular Italic", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 430; --framer-font-weight-bold: 790; --framer-font-weight-bold-italic: 790; --framer-font-weight-italic: 430; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }'];
var className4 = "framer-tLH4r";

// http-url:https://framerusercontent.com/modules/b6BVH2NX752rxYq1kPjw/xedxKhywbearE4Sacg0T/P6yU1EFQs.js
import { jsx as _jsx3, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls as addPropertyControls2, ComponentViewportProvider, ControlType as ControlType3, cx, getFonts, getFontsFromSharedStyle, RichText, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "@proofly-framer/runtime";
import { LayoutGroup, motion as motion2, MotionConfigContext } from "@proofly-framer/runtime";
import * as React3 from "react";

// http-url:https://framerusercontent.com/modules/6Ldpz1V0DkD45gXvi67I/PCgBX5d6MdQT7E7nhdXn/Material.js
import { jsx as _jsx2 } from "react/jsx-runtime";
import * as React2 from "react";
import { useState, useEffect, useMemo as useMemo2, useRef } from "react";
import { addPropertyControls, ControlType as ControlType2, motion, RenderTarget } from "@proofly-framer/runtime";

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

// http-url:https://framerusercontent.com/modules/k399eGMURCHWWRLAoIxM/p9v7bm2MbEZyYo9ppZtD/Home.js
var o = e => {
  return e;
};
var t;
var h = e => {
  return t || (t = o(e.createElement("path", {
    d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
  }), "Home")), t;
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
function getIconSelection(iconKeys2, selectByList, iconSearch = "", iconSelection, lowercaseIconKeyPairs2) {
  if (selectByList) return iconSelection;
  if (iconSearch == null || (iconSearch === null || iconSearch === void 0 ? void 0 : iconSearch.length) === 0) return null;
  const iconSearchTerm = iconSearch.toLowerCase().replace(/-|\s/g, "");
  var _iconSearchTerm;
  const searchResult = (_iconSearchTerm = lowercaseIconKeyPairs2[iconSearchTerm]) !== null && _iconSearchTerm !== void 0 ? _iconSearchTerm : findByArray(iconKeys2, iconSearchTerm);
  return searchResult;
}
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

// http-url:https://framerusercontent.com/modules/6Ldpz1V0DkD45gXvi67I/PCgBX5d6MdQT7E7nhdXn/Material.js
var moduleBaseUrl = "https://framer.com/m/material-icons/";
var icons = {
  AcUnit: 15,
  AccessAlarm: 15,
  AccessAlarms: 15,
  AccessTime: 15,
  AccessTimeFilled: 0,
  Accessibility: 7,
  AccessibilityNew: 0,
  Accessible: 15,
  AccessibleForward: 0,
  AccountBalance: 2,
  AccountBalanceWallet: 0,
  AccountBox: 15,
  AccountCircle: 7,
  AccountTree: 15,
  AdUnits: 15,
  Adb: 15,
  Add: 15,
  AddAPhoto: 15,
  AddAlarm: 15,
  AddAlert: 15,
  AddBox: 15,
  AddBusiness: 15,
  AddCircle: 15,
  AddCircleOutline: 0,
  AddComment: 15,
  AddIcCall: 15,
  AddLink: 15,
  AddLocation: 15,
  AddLocationAlt: 2,
  AddModerator: 15,
  AddPhotoAlternate: 0,
  AddReaction: 15,
  AddRoad: 15,
  AddShoppingCart: 2,
  AddTask: 15,
  AddToDrive: 15,
  AddToHomeScreen: 2,
  AddToPhotos: 15,
  AddToQueue: 15,
  Addchart: 15,
  Adjust: 15,
  AdminPanelSettings: 0,
  Agriculture: 15,
  Air: 15,
  AirlineSeatFlat: 2,
  AirplaneTicket: 2,
  AirplanemodeActive: 0,
  AirplanemodeInactive: 0,
  Airplay: 15,
  AirportShuttle: 2,
  Alarm: 15,
  AlarmAdd: 15,
  AlarmOff: 15,
  AlarmOn: 15,
  Album: 15,
  AlignHorizontalLeft: 0,
  AlignHorizontalRight: 0,
  AlignVerticalBottom: 0,
  AlignVerticalCenter: 0,
  AlignVerticalTop: 0,
  AllInbox: 15,
  AllInclusive: 15,
  AllOut: 15,
  AltRoute: 15,
  AlternateEmail: 2,
  Analytics: 15,
  Anchor: 15,
  Android: 15,
  Animation: 15,
  Announcement: 15,
  Aod: 15,
  Apartment: 15,
  Api: 15,
  AppBlocking: 15,
  AppRegistration: 2,
  AppSettingsAlt: 2,
  Apple: 0,
  Approval: 15,
  Apps: 15,
  Architecture: 15,
  Archive: 15,
  ArrowBack: 15,
  ArrowBackIos: 15,
  ArrowBackIosNew: 2,
  ArrowCircleDown: 2,
  ArrowCircleUp: 7,
  ArrowDownward: 7,
  ArrowDropDown: 7,
  ArrowDropDownCircle: 0,
  ArrowDropUp: 15,
  ArrowForward: 15,
  ArrowForwardIos: 2,
  ArrowLeft: 15,
  ArrowRight: 15,
  ArrowRightAlt: 7,
  ArrowUpward: 15,
  ArtTrack: 15,
  Article: 15,
  AspectRatio: 15,
  Assessment: 15,
  Assignment: 15,
  AssignmentInd: 7,
  AssignmentLate: 2,
  AssignmentReturn: 0,
  AssignmentReturned: 0,
  AssignmentTurnedIn: 0,
  Assistant: 15,
  AssistantDirection: 0,
  AssistantPhoto: 2,
  Atm: 15,
  AttachEmail: 15,
  AttachFile: 15,
  AttachMoney: 15,
  Attachment: 15,
  Attractions: 15,
  Attribution: 15,
  Audiotrack: 15,
  AutoAwesome: 15,
  AutoAwesomeMosaic: 0,
  AutoAwesomeMotion: 0,
  AutoDelete: 15,
  AutoFixHigh: 15,
  AutoFixNormal: 7,
  AutoFixOff: 15,
  AutoGraph: 15,
  AutoStories: 15,
  AutofpsSelect: 7,
  Autorenew: 15,
  AvTimer: 15,
  BabyChangingStation: 0,
  Backpack: 15,
  Backspace: 15,
  Backup: 15,
  BackupTable: 15,
  Badge: 15,
  BakeryDining: 15,
  Balcony: 15,
  Ballot: 15,
  BarChart: 15,
  BatchPrediction: 2,
  Bathroom: 15,
  Bathtub: 15,
  Battery20: 15,
  Battery30: 15,
  Battery50: 15,
  Battery60: 15,
  Battery80: 15,
  Battery90: 15,
  BatteryAlert: 15,
  BatteryCharging20: 0,
  BatteryCharging30: 0,
  BatteryCharging50: 0,
  BatteryCharging60: 0,
  BatteryCharging80: 0,
  BatteryCharging90: 0,
  BatteryChargingFull: 0,
  BatteryFull: 15,
  BatterySaver: 15,
  BatteryStd: 15,
  BatteryUnknown: 2,
  BeachAccess: 15,
  Bed: 15,
  BedroomBaby: 15,
  BedroomChild: 15,
  BedroomParent: 7,
  Bedtime: 15,
  Beenhere: 15,
  Bento: 15,
  BikeScooter: 15,
  Biotech: 15,
  Blender: 15,
  Block: 15,
  Bloodtype: 15,
  Bluetooth: 15,
  BluetoothAudio: 2,
  BluetoothConnected: 0,
  BluetoothDisabled: 0,
  BluetoothDrive: 2,
  BluetoothSearching: 0,
  BlurCircular: 15,
  BlurLinear: 15,
  BlurOff: 15,
  BlurOn: 15,
  Bolt: 15,
  Book: 15,
  BookOnline: 15,
  Bookmark: 15,
  BookmarkAdd: 15,
  BookmarkAdded: 7,
  BookmarkBorder: 2,
  BookmarkRemove: 2,
  Bookmarks: 15,
  BorderAll: 15,
  BorderBottom: 15,
  BorderClear: 15,
  BorderColor: 15,
  BorderHorizontal: 0,
  BorderInner: 15,
  BorderLeft: 15,
  BorderOuter: 15,
  BorderRight: 15,
  BorderStyle: 15,
  BorderTop: 15,
  BorderVertical: 2,
  BrandingWatermark: 0,
  BreakfastDining: 2,
  Brightness1: 15,
  Brightness2: 15,
  Brightness3: 15,
  Brightness4: 15,
  Brightness5: 15,
  Brightness6: 15,
  Brightness7: 15,
  BrightnessAuto: 2,
  BrightnessHigh: 2,
  BrightnessLow: 7,
  BrightnessMedium: 0,
  BrokenImage: 15,
  BrowserNotSupported: 0,
  BrunchDining: 15,
  Brush: 15,
  BubbleChart: 15,
  BugReport: 15,
  Build: 15,
  BuildCircle: 15,
  Bungalow: 15,
  BurstMode: 15,
  BusAlert: 15,
  Business: 15,
  BusinessCenter: 2,
  Cabin: 15,
  Cable: 15,
  Cached: 15,
  Cake: 15,
  Calculate: 15,
  CalendarToday: 7,
  CalendarViewDay: 2,
  CalendarViewMonth: 0,
  CalendarViewWeek: 0,
  Call: 15,
  CallEnd: 15,
  CallMade: 15,
  CallMerge: 15,
  CallMissed: 15,
  CallMissedOutgoing: 0,
  CallReceived: 15,
  CallSplit: 15,
  CallToAction: 15,
  Camera: 15,
  CameraAlt: 15,
  CameraEnhance: 7,
  CameraFront: 15,
  CameraIndoor: 15,
  CameraOutdoor: 7,
  CameraRear: 15,
  CameraRoll: 15,
  Cameraswitch: 15,
  Campaign: 15,
  Cancel: 15,
  CancelPresentation: 0,
  CancelScheduleSend: 0,
  CarRental: 15,
  CarRepair: 15,
  CardGiftcard: 15,
  CardMembership: 2,
  CardTravel: 15,
  Carpenter: 15,
  Cases: 15,
  Casino: 15,
  Cast: 15,
  CastConnected: 7,
  CastForEducation: 0,
  CatchingPokemon: 2,
  Category: 15,
  Celebration: 15,
  CellWifi: 15,
  CenterFocusStrong: 0,
  CenterFocusWeak: 2,
  Chair: 15,
  ChairAlt: 15,
  Chalet: 15,
  ChangeCircle: 15,
  ChangeHistory: 7,
  ChargingStation: 2,
  Chat: 15,
  ChatBubble: 15,
  ChatBubbleOutline: 0,
  Check: 15,
  CheckBox: 15,
  CheckBoxOutlineBlank: 0,
  CheckCircle: 15,
  CheckCircleOutline: 0,
  Checkroom: 15,
  ChevronLeft: 15,
  ChevronRight: 15,
  ChildCare: 15,
  ChildFriendly: 7,
  ChromeReaderMode: 0,
  Circle: 15,
  CircleNotifications: 0,
  Class: 15,
  CleanHands: 15,
  CleaningServices: 0,
  Clear: 15,
  ClearAll: 15,
  Close: 15,
  CloseFullscreen: 2,
  ClosedCaption: 7,
  ClosedCaptionOff: 0,
  Cloud: 15,
  CloudCircle: 15,
  CloudDone: 15,
  CloudDownload: 7,
  CloudOff: 15,
  CloudQueue: 15,
  CloudUpload: 15,
  Code: 15,
  CodeOff: 15,
  Coffee: 15,
  CoffeeMaker: 15,
  Collections: 15,
  CollectionsBookmark: 0,
  ColorLens: 15,
  Colorize: 15,
  Comment: 15,
  CommentBank: 15,
  Commute: 15,
  Compare: 15,
  CompareArrows: 7,
  CompassCalibration: 0,
  Compress: 15,
  Computer: 15,
  ConfirmationNumber: 0,
  ConnectedTv: 15,
  Construction: 15,
  ContactMail: 15,
  ContactPage: 15,
  ContactPhone: 15,
  ContactSupport: 2,
  Contactless: 15,
  Contacts: 15,
  ContentCopy: 15,
  ContentCut: 15,
  ContentPaste: 15,
  ContentPasteOff: 2,
  ControlCamera: 7,
  ControlPoint: 15,
  CopyAll: 15,
  Copyright: 15,
  Coronavirus: 15,
  CorporateFare: 7,
  Cottage: 15,
  Countertops: 15,
  Create: 15,
  CreateNewFolder: 2,
  CreditCard: 15,
  CreditCardOff: 7,
  CreditScore: 15,
  Crib: 15,
  Crop: 15,
  Crop169: 15,
  Crop32: 15,
  Crop54: 15,
  Crop75: 15,
  CropDin: 15,
  CropFree: 15,
  CropLandscape: 7,
  CropOriginal: 15,
  CropPortrait: 15,
  CropRotate: 15,
  CropSquare: 15,
  Dangerous: 15,
  DarkMode: 15,
  Dashboard: 15,
  DashboardCustomize: 0,
  DataSaverOff: 15,
  DataSaverOn: 15,
  DataUsage: 15,
  DateRange: 15,
  Deck: 15,
  Dehaze: 15,
  Delete: 15,
  DeleteForever: 7,
  DeleteOutline: 7,
  DeleteSweep: 15,
  DeliveryDining: 2,
  DepartureBoard: 2,
  Description: 15,
  DesignServices: 2,
  DesktopMac: 15,
  DesktopWindows: 2,
  Details: 15,
  DeveloperBoard: 2,
  DeveloperBoardOff: 0,
  DeveloperMode: 7,
  DeviceHub: 15,
  DeviceThermostat: 0,
  DeviceUnknown: 7,
  Devices: 15,
  DevicesOther: 15,
  DialerSip: 15,
  Dialpad: 15,
  Dining: 15,
  DinnerDining: 15,
  Directions: 15,
  DirectionsBike: 2,
  DirectionsBoat: 2,
  DirectionsBoatFilled: 0,
  DirectionsBus: 7,
  DirectionsBusFilled: 0,
  DirectionsCar: 7,
  DirectionsCarFilled: 0,
  DirectionsOff: 7,
  DirectionsRailway: 0,
  DirectionsRun: 7,
  DirectionsSubway: 0,
  DirectionsTransit: 0,
  DirectionsWalk: 2,
  DirtyLens: 15,
  DisabledByDefault: 0,
  DiscFull: 15,
  Dns: 15,
  DoDisturb: 15,
  DoDisturbAlt: 15,
  DoDisturbOff: 15,
  DoDisturbOn: 15,
  DoNotDisturb: 15,
  DoNotDisturbAlt: 2,
  DoNotDisturbOff: 2,
  DoNotDisturbOn: 2,
  DoNotStep: 15,
  DoNotTouch: 15,
  Dock: 15,
  DocumentScanner: 2,
  Domain: 15,
  DomainDisabled: 2,
  DomainVerification: 0,
  Done: 15,
  DoneAll: 15,
  DoneOutline: 15,
  DonutLarge: 15,
  DonutSmall: 15,
  DoorBack: 15,
  DoorFront: 15,
  DoorSliding: 15,
  Doorbell: 15,
  DoubleArrow: 15,
  DownhillSkiing: 2,
  Download: 15,
  DownloadDone: 15,
  DownloadForOffline: 0,
  Downloading: 15,
  Drafts: 15,
  DragHandle: 15,
  DragIndicator: 7,
  DriveEta: 15,
  DriveFileMove: 7,
  DriveFolderUpload: 0,
  Dry: 15,
  DryCleaning: 15,
  Duo: 15,
  Dvr: 15,
  DynamicFeed: 15,
  DynamicForm: 15,
  EMobiledata: 15,
  Earbuds: 15,
  EarbudsBattery: 2,
  East: 15,
  Eco: 15,
  EdgesensorHigh: 2,
  EdgesensorLow: 7,
  Edit: 15,
  EditAttributes: 2,
  EditLocation: 15,
  EditLocationAlt: 2,
  EditNotifications: 0,
  EditOff: 15,
  EditRoad: 15,
  EightK: 15,
  EightKPlus: 15,
  EightMp: 15,
  EightteenMp: 15,
  Eject: 15,
  Elderly: 15,
  ElectricBike: 15,
  ElectricCar: 15,
  ElectricMoped: 7,
  ElectricRickshaw: 0,
  ElectricScooter: 2,
  ElectricalServices: 0,
  Elevator: 15,
  ElevenMp: 15,
  Email: 15,
  EmojiEmotions: 7,
  EmojiEvents: 15,
  EmojiFlags: 15,
  EmojiFoodBeverage: 0,
  EmojiNature: 15,
  EmojiObjects: 15,
  EmojiPeople: 15,
  EmojiSymbols: 15,
  EmojiTransportation: 0,
  Engineering: 15,
  EnhancedEncryption: 0,
  Equalizer: 15,
  Error: 15,
  ErrorOutline: 15,
  Escalator: 15,
  EscalatorWarning: 0,
  Euro: 15,
  EuroSymbol: 15,
  EvStation: 15,
  Event: 15,
  EventAvailable: 2,
  EventBusy: 15,
  EventNote: 15,
  EventSeat: 15,
  ExitToApp: 15,
  Expand: 15,
  ExpandLess: 15,
  ExpandMore: 15,
  Explicit: 15,
  Explore: 15,
  ExploreOff: 15,
  Exposure: 15,
  Extension: 15,
  ExtensionOff: 15,
  Face: 15,
  FaceRetouchingOff: 0,
  Facebook: 15,
  FactCheck: 15,
  FamilyRestroom: 2,
  FastForward: 15,
  FastRewind: 15,
  Fastfood: 15,
  Favorite: 15,
  FavoriteBorder: 2,
  FeaturedPlayList: 0,
  FeaturedVideo: 7,
  Feed: 15,
  Feedback: 15,
  Female: 15,
  Fence: 15,
  Festival: 15,
  FiberDvr: 15,
  FiberManualRecord: 0,
  FiberNew: 15,
  FiberPin: 15,
  FiberSmartRecord: 0,
  FileCopy: 15,
  FileDownload: 15,
  FileDownloadDone: 0,
  FileDownloadOff: 2,
  FilePresent: 15,
  FileUpload: 15,
  Filter: 15,
  Filter1: 15,
  Filter2: 15,
  Filter3: 15,
  Filter4: 15,
  Filter5: 15,
  Filter6: 15,
  Filter7: 15,
  Filter8: 15,
  Filter9: 15,
  Filter9Plus: 15,
  FilterAlt: 15,
  FilterBAndW: 15,
  FilterCenterFocus: 0,
  FilterDrama: 15,
  FilterFrames: 15,
  FilterHdr: 15,
  FilterList: 15,
  FilterNone: 15,
  FilterTiltShift: 2,
  FilterVintage: 7,
  FindInPage: 15,
  FindReplace: 15,
  Fingerprint: 15,
  FireExtinguisher: 0,
  Fireplace: 15,
  FirstPage: 15,
  FitScreen: 15,
  FitnessCenter: 7,
  FiveG: 15,
  FiveK: 15,
  FiveKPlus: 15,
  FiveMp: 15,
  FivteenMp: 15,
  Flag: 15,
  Flaky: 15,
  Flare: 15,
  FlashAuto: 15,
  FlashOff: 15,
  FlashOn: 15,
  FlashlightOff: 7,
  FlashlightOn: 15,
  Flatware: 15,
  Flight: 15,
  FlightLand: 15,
  FlightTakeoff: 7,
  Flip: 15,
  FlipCameraAndroid: 0,
  FlipCameraIos: 7,
  FlipToBack: 15,
  FlipToFront: 15,
  Flourescent: 15,
  FlutterDash: 15,
  FmdBad: 15,
  FmdGood: 15,
  Folder: 15,
  FolderOpen: 15,
  FolderShared: 15,
  FolderSpecial: 7,
  FollowTheSigns: 2,
  FontDownload: 15,
  FontDownloadOff: 2,
  FoodBank: 15,
  FormatAlignCenter: 0,
  FormatAlignJustify: 0,
  FormatAlignLeft: 2,
  FormatAlignRight: 0,
  FormatBold: 15,
  FormatClear: 15,
  FormatColorFill: 2,
  FormatColorReset: 0,
  FormatColorText: 2,
  FormatIndentDecrease: 0,
  FormatIndentIncrease: 0,
  FormatItalic: 15,
  FormatLineSpacing: 0,
  FormatListBulleted: 0,
  FormatListNumbered: 0,
  FormatPaint: 15,
  FormatQuote: 15,
  FormatShapes: 15,
  FormatSize: 15,
  FormatStrikethrough: 0,
  FormatUnderlined: 0,
  Forum: 15,
  Forward: 15,
  Forward10: 15,
  Forward30: 15,
  Forward5: 15,
  ForwardToInbox: 2,
  Foundation: 15,
  FourGMobiledata: 2,
  FourGPlusMobiledata: 0,
  FourK: 15,
  FourKPlus: 15,
  FourMp: 15,
  FourteenMp: 15,
  FreeBreakfast: 7,
  Fullscreen: 15,
  FullscreenExit: 2,
  Functions: 15,
  GMobiledata: 15,
  GTranslate: 15,
  Gamepad: 15,
  Games: 15,
  Garage: 15,
  Gavel: 15,
  Gesture: 15,
  GetApp: 15,
  Gif: 15,
  GitHub: 0,
  Gite: 15,
  GolfCourse: 15,
  Google: 0,
  GppBad: 15,
  GppGood: 15,
  GppMaybe: 15,
  GpsFixed: 15,
  GpsNotFixed: 15,
  GpsOff: 15,
  Grade: 15,
  Gradient: 15,
  Grading: 15,
  Grain: 15,
  GraphicEq: 15,
  Grass: 15,
  Grid3x3: 15,
  Grid4x4: 15,
  GridGoldenratio: 2,
  GridOff: 15,
  GridOn: 15,
  GridView: 15,
  Group: 15,
  GroupAdd: 15,
  GroupWork: 15,
  Groups: 15,
  HMobiledata: 15,
  HPlusMobiledata: 2,
  Hail: 15,
  Handyman: 15,
  Hardware: 15,
  Hd: 15,
  HdrAuto: 15,
  HdrAutoSelect: 7,
  HdrEnhancedSelect: 0,
  HdrOff: 15,
  HdrOffSelect: 15,
  HdrOn: 15,
  HdrOnSelect: 15,
  HdrPlus: 15,
  HdrStrong: 15,
  HdrWeak: 15,
  Headphones: 15,
  HeadphonesBattery: 0,
  Headset: 15,
  HeadsetMic: 15,
  HeadsetOff: 15,
  Healing: 15,
  HealthAndSafety: 2,
  Hearing: 15,
  HearingDisabled: 2,
  Height: 15,
  Help: 15,
  HelpCenter: 15,
  HelpOutline: 15,
  Hevc: 15,
  HideImage: 15,
  HideSource: 15,
  HighQuality: 15,
  Highlight: 15,
  HighlightAlt: 15,
  HighlightOff: 15,
  Hiking: 15,
  History: 15,
  HistoryEdu: 15,
  HistoryToggleOff: 0,
  HolidayVillage: 2,
  Home: 15,
  HomeMax: 15,
  HomeMini: 15,
  HomeRepairService: 0,
  HomeWork: 15,
  HorizontalRule: 2,
  HorizontalSplit: 2,
  HotTub: 15,
  Hotel: 15,
  HourglassBottom: 2,
  HourglassDisabled: 0,
  HourglassEmpty: 2,
  HourglassFull: 7,
  HourglassTop: 15,
  House: 15,
  HouseSiding: 15,
  Houseboat: 15,
  HowToReg: 15,
  HowToVote: 15,
  Http: 15,
  Https: 15,
  Hvac: 15,
  IceSkating: 15,
  Icecream: 15,
  Image: 15,
  ImageAspectRatio: 0,
  ImageNotSupported: 0,
  ImageSearch: 15,
  ImagesearchRoller: 0,
  ImportContacts: 2,
  ImportExport: 15,
  ImportantDevices: 0,
  Inbox: 15,
  Info: 15,
  Input: 15,
  InsertChart: 15,
  InsertComment: 7,
  InsertDriveFile: 2,
  InsertEmoticon: 2,
  InsertInvitation: 0,
  InsertLink: 15,
  InsertPhoto: 15,
  Insights: 15,
  Instagram: 0,
  Inventory: 15,
  Inventory2: 15,
  InvertColors: 15,
  InvertColorsOff: 2,
  IosShare: 15,
  Iron: 15,
  Iso: 15,
  Kayaking: 15,
  Keyboard: 15,
  KeyboardAlt: 15,
  KeyboardArrowDown: 0,
  KeyboardArrowLeft: 0,
  KeyboardArrowRight: 0,
  KeyboardArrowUp: 2,
  KeyboardBackspace: 0,
  KeyboardCapslock: 0,
  KeyboardHide: 15,
  KeyboardReturn: 2,
  KeyboardTab: 15,
  KeyboardVoice: 7,
  KingBed: 15,
  Kitchen: 15,
  Kitesurfing: 15,
  Label: 15,
  LabelImportant: 2,
  LabelOff: 15,
  Landscape: 15,
  Language: 15,
  Laptop: 15,
  LaptopChromebook: 0,
  LaptopMac: 15,
  LaptopWindows: 7,
  LastPage: 15,
  Launch: 15,
  Layers: 15,
  LayersClear: 15,
  Leaderboard: 15,
  LeakAdd: 15,
  LeakRemove: 15,
  LegendToggle: 15,
  Lens: 15,
  LensBlur: 15,
  LibraryAdd: 15,
  LibraryAddCheck: 2,
  LibraryBooks: 15,
  LibraryMusic: 15,
  Light: 15,
  LightMode: 15,
  Lightbulb: 15,
  LineStyle: 15,
  LineWeight: 15,
  LinearScale: 15,
  Link: 15,
  LinkOff: 15,
  LinkedCamera: 15,
  LinkedIn: 0,
  Liquor: 15,
  List: 15,
  ListAlt: 15,
  LiveHelp: 15,
  LiveTv: 15,
  Living: 15,
  LocalActivity: 7,
  LocalAirport: 15,
  LocalAtm: 15,
  LocalBar: 15,
  LocalCafe: 15,
  LocalCarWash: 15,
  LocalDining: 15,
  LocalDrink: 15,
  LocalFireDepartment: 0,
  LocalFlorist: 15,
  LocalGasStation: 2,
  LocalGroceryStore: 0,
  LocalHospital: 7,
  LocalHotel: 15,
  LocalLaundryService: 0,
  LocalLibrary: 15,
  LocalMall: 15,
  LocalMovies: 15,
  LocalOffer: 15,
  LocalParking: 15,
  LocalPharmacy: 7,
  LocalPhone: 15,
  LocalPizza: 15,
  LocalPlay: 15,
  LocalPolice: 15,
  LocalPostOffice: 2,
  LocalPrintshop: 2,
  LocalSee: 15,
  LocalShipping: 7,
  LocalTaxi: 15,
  LocationCity: 15,
  LocationDisabled: 0,
  LocationOff: 15,
  LocationOn: 15,
  LocationSearching: 0,
  Lock: 15,
  LockClock: 15,
  LockOpen: 15,
  Login: 15,
  Logout: 15,
  Looks: 15,
  Looks3: 15,
  Looks4: 15,
  Looks5: 15,
  Looks6: 15,
  LooksOne: 15,
  LooksTwo: 15,
  Loop: 15,
  Loupe: 15,
  LowPriority: 15,
  Loyalty: 15,
  LteMobiledata: 7,
  LtePlusMobiledata: 0,
  Luggage: 15,
  LunchDining: 15,
  Mail: 15,
  MailOutline: 15,
  Male: 15,
  ManageAccounts: 2,
  ManageSearch: 15,
  Map: 15,
  MapsHomeWork: 15,
  MapsUgc: 15,
  Margin: 15,
  MarkAsUnread: 15,
  MarkChatRead: 15,
  MarkChatUnread: 2,
  MarkEmailRead: 7,
  MarkEmailUnread: 2,
  Markunread: 15,
  MarkunreadMailbox: 0,
  Masks: 15,
  Maximize: 15,
  MediaBluetoothOff: 0,
  MediaBluetoothOn: 0,
  Mediation: 15,
  MedicalServices: 2,
  Medication: 15,
  MeetingRoom: 15,
  Memory: 15,
  Menu: 15,
  MenuBook: 15,
  MenuOpen: 15,
  MergeType: 15,
  Message: 15,
  Mic: 15,
  MicExternalOff: 2,
  MicExternalOn: 7,
  MicNone: 15,
  MicOff: 15,
  Microwave: 15,
  MilitaryTech: 15,
  Minimize: 15,
  MissedVideoCall: 2,
  Mms: 15,
  MobileFriendly: 2,
  MobileOff: 15,
  MobileScreenShare: 0,
  MobiledataOff: 7,
  Mode: 15,
  ModeComment: 15,
  ModeEdit: 15,
  ModeEditOutline: 2,
  ModeNight: 15,
  ModeStandby: 15,
  ModelTraining: 7,
  MonetizationOn: 2,
  Money: 15,
  MoneyOff: 15,
  MoneyOffCsred: 7,
  Monitor: 15,
  MonitorWeight: 7,
  MonochromePhotos: 0,
  Mood: 15,
  MoodBad: 15,
  Moped: 15,
  More: 15,
  MoreHoriz: 15,
  MoreTime: 15,
  MoreVert: 15,
  MotionPhotosAuto: 0,
  MotionPhotosOff: 2,
  Mouse: 15,
  MoveToInbox: 15,
  Movie: 15,
  MovieCreation: 7,
  MovieFilter: 15,
  Moving: 15,
  Mp: 15,
  MultilineChart: 2,
  MultipleStop: 15,
  Museum: 15,
  MusicNote: 15,
  MusicOff: 15,
  MusicVideo: 15,
  MyLocation: 15,
  Nat: 15,
  Nature: 15,
  NaturePeople: 15,
  NavigateBefore: 2,
  NavigateNext: 15,
  Navigation: 15,
  NearMe: 15,
  NearMeDisabled: 2,
  NearbyError: 15,
  NearbyOff: 15,
  NetworkCell: 15,
  NetworkCheck: 15,
  NetworkLocked: 7,
  NetworkWifi: 15,
  NewReleases: 15,
  NextPlan: 15,
  NextWeek: 15,
  Nfc: 15,
  NightShelter: 15,
  Nightlife: 15,
  Nightlight: 15,
  NightlightRound: 2,
  NightsStay: 15,
  NineK: 15,
  NineKPlus: 15,
  NineMp: 15,
  NineteenMp: 15,
  NoAccounts: 15,
  NoBackpack: 15,
  NoCell: 15,
  NoDrinks: 15,
  NoEncryption: 15,
  NoFlash: 15,
  NoFood: 15,
  NoLuggage: 15,
  NoMeals: 15,
  NoMeetingRoom: 7,
  NoPhotography: 7,
  NoSim: 15,
  NoStroller: 15,
  NoTransfer: 15,
  NordicWalking: 7,
  North: 15,
  NorthEast: 15,
  NorthWest: 15,
  NotAccessible: 7,
  NotInterested: 7,
  NotListedLocation: 0,
  NotStarted: 15,
  Note: 15,
  NoteAdd: 15,
  NoteAlt: 15,
  Notes: 15,
  NotificationAdd: 2,
  Notifications: 7,
  NotificationsActive: 0,
  NotificationsNone: 0,
  NotificationsOff: 0,
  NotificationsPaused: 0,
  OfflineBolt: 15,
  OfflinePin: 15,
  OfflineShare: 15,
  OndemandVideo: 7,
  OneK: 15,
  OneKPlus: 15,
  OneKk: 15,
  OnlinePrediction: 0,
  Opacity: 15,
  OpenInBrowser: 7,
  OpenInFull: 15,
  OpenInNew: 15,
  OpenInNewOff: 15,
  OpenWith: 15,
  OtherHouses: 15,
  Outbound: 15,
  Outbox: 15,
  OutdoorGrill: 15,
  Outlet: 15,
  Padding: 15,
  Pages: 15,
  Pageview: 15,
  Paid: 15,
  Palette: 15,
  PanTool: 15,
  Panorama: 15,
  PanoramaFishEye: 2,
  PanoramaHorizontal: 0,
  PanoramaPhotosphere: 0,
  PanoramaVertical: 0,
  PanoramaWideAngle: 0,
  Paragliding: 15,
  Park: 15,
  PartyMode: 15,
  Password: 15,
  Pattern: 15,
  Pause: 15,
  PauseCircle: 15,
  PauseCircleFilled: 0,
  PauseCircleOutline: 0,
  PausePresentation: 0,
  Payment: 15,
  Payments: 15,
  PedalBike: 15,
  Pending: 15,
  PendingActions: 2,
  People: 15,
  PeopleAlt: 15,
  PeopleOutline: 7,
  PermCameraMic: 7,
  PermContactCalendar: 0,
  PermDataSetting: 2,
  PermIdentity: 15,
  PermMedia: 15,
  PermPhoneMsg: 15,
  PermScanWifi: 15,
  Person: 15,
  PersonAdd: 15,
  PersonAddAlt: 15,
  PersonAddAlt1: 7,
  PersonAddDisabled: 0,
  PersonOff: 15,
  PersonOutline: 7,
  PersonPin: 15,
  PersonPinCircle: 2,
  PersonRemove: 15,
  PersonRemoveAlt1: 0,
  PersonSearch: 15,
  PersonalVideo: 7,
  PestControl: 15,
  PestControlRodent: 0,
  Pets: 15,
  Phone: 15,
  PhoneAndroid: 15,
  PhoneCallback: 7,
  PhoneDisabled: 7,
  PhoneEnabled: 15,
  PhoneForwarded: 2,
  PhoneInTalk: 15,
  PhoneIphone: 15,
  PhoneLocked: 15,
  PhoneMissed: 15,
  PhonePaused: 15,
  Phonelink: 15,
  PhonelinkErase: 2,
  PhonelinkLock: 7,
  PhonelinkOff: 15,
  PhonelinkRing: 7,
  PhonelinkSetup: 2,
  Photo: 15,
  PhotoAlbum: 15,
  PhotoCamera: 15,
  PhotoCameraBack: 2,
  PhotoCameraFront: 0,
  PhotoFilter: 15,
  PhotoLibrary: 15,
  PhotoSizeSelectLarge: 0,
  PhotoSizeSelectSmall: 0,
  Piano: 15,
  PianoOff: 15,
  PictureAsPdf: 15,
  PictureInPicture: 0,
  PictureInPictureAlt: 0,
  PieChart: 15,
  PieChartOutline: 2,
  Pin: 15,
  PinDrop: 15,
  Pinterest: 0,
  PivotTableChart: 2,
  Place: 15,
  Plagiarism: 15,
  PlayArrow: 15,
  PlayCircle: 15,
  PlayCircleFilled: 0,
  PlayCircleOutline: 0,
  PlayDisabled: 15,
  PlayForWork: 15,
  PlayLesson: 15,
  PlaylistAdd: 15,
  PlaylistAddCheck: 0,
  PlaylistPlay: 15,
  Plumbing: 15,
  PlusOne: 15,
  Podcasts: 15,
  PointOfSale: 15,
  Policy: 15,
  Poll: 15,
  Pool: 15,
  PortableWifiOff: 2,
  Portrait: 15,
  PostAdd: 15,
  Power: 15,
  PowerInput: 15,
  PowerOff: 15,
  PowerSettingsNew: 0,
  PregnantWoman: 7,
  PresentToAll: 15,
  Preview: 15,
  PriceChange: 15,
  PriceCheck: 15,
  Print: 15,
  PrintDisabled: 7,
  PriorityHigh: 15,
  PrivacyTip: 15,
  Psychology: 15,
  Public: 15,
  PublicOff: 15,
  Publish: 15,
  PublishedWithChanges: 0,
  PushPin: 15,
  QrCode: 15,
  QrCode2: 15,
  QrCodeScanner: 7,
  QueryBuilder: 15,
  QueryStats: 15,
  QuestionAnswer: 2,
  Queue: 15,
  QueueMusic: 15,
  QueuePlayNext: 7,
  Quickreply: 15,
  Quiz: 15,
  RMobiledata: 15,
  Radar: 15,
  Radio: 15,
  RadioButtonChecked: 0,
  RadioButtonUnchecked: 0,
  RailwayAlert: 15,
  RamenDining: 15,
  RateReview: 15,
  RawOff: 15,
  RawOn: 15,
  ReadMore: 15,
  Receipt: 15,
  ReceiptLong: 15,
  RecentActors: 15,
  Recommend: 15,
  RecordVoiceOver: 2,
  Reddit: 0,
  Redeem: 15,
  Redo: 15,
  ReduceCapacity: 2,
  Refresh: 15,
  RememberMe: 15,
  Remove: 15,
  RemoveCircle: 15,
  RemoveCircleOutline: 0,
  RemoveDone: 15,
  RemoveFromQueue: 2,
  RemoveModerator: 2,
  RemoveRedEye: 15,
  RemoveShoppingCart: 0,
  Reorder: 15,
  Repeat: 15,
  RepeatOn: 15,
  RepeatOne: 15,
  RepeatOneOn: 15,
  Replay: 15,
  Replay10: 15,
  Replay30: 15,
  Replay5: 15,
  ReplayCircleFilled: 0,
  Reply: 15,
  ReplyAll: 15,
  Report: 15,
  ReportGmailerrorred: 0,
  ReportOff: 15,
  ReportProblem: 7,
  RequestPage: 15,
  RequestQuote: 15,
  ResetTv: 15,
  RestartAlt: 15,
  Restaurant: 15,
  RestaurantMenu: 2,
  Restore: 15,
  RestoreFromTrash: 0,
  RestorePage: 15,
  Reviews: 15,
  RiceBowl: 15,
  RingVolume: 15,
  Roofing: 15,
  Room: 15,
  RoomPreferences: 2,
  RoomService: 15,
  Rotate90DegreesCcw: 0,
  RotateLeft: 15,
  RotateRight: 15,
  Router: 15,
  Rowing: 15,
  RssFeed: 15,
  Rsvp: 15,
  Rtt: 15,
  Rule: 15,
  RuleFolder: 15,
  RunCircle: 15,
  RunningWithErrors: 0,
  RvHookup: 15,
  SafetyDivider: 7,
  Sailing: 15,
  Sanitizer: 15,
  Satellite: 15,
  Save: 15,
  SaveAlt: 15,
  SavedSearch: 15,
  Savings: 15,
  Scanner: 15,
  ScatterPlot: 15,
  Schedule: 15,
  ScheduleSend: 15,
  Schema: 15,
  School: 15,
  Science: 15,
  Score: 15,
  ScreenLockLandscape: 0,
  ScreenLockPortrait: 0,
  ScreenLockRotation: 0,
  ScreenRotation: 2,
  ScreenSearchDesktop: 0,
  ScreenShare: 15,
  Screenshot: 15,
  Sd: 15,
  SdCard: 15,
  SdCardAlert: 15,
  SdStorage: 15,
  Search: 15,
  SearchOff: 15,
  Security: 15,
  SecurityUpdate: 2,
  SecurityUpdateGood: 0,
  Segment: 15,
  SelectAll: 15,
  SelfImprovement: 2,
  Sell: 15,
  Send: 15,
  SendAndArchive: 2,
  SendToMobile: 15,
  SensorDoor: 15,
  SensorWindow: 15,
  Sensors: 15,
  SensorsOff: 15,
  SentimentNeutral: 0,
  SentimentSatisfied: 0,
  SetMeal: 15,
  Settings: 15,
  SettingsApplications: 0,
  SettingsBluetooth: 0,
  SettingsBrightness: 0,
  SettingsCell: 15,
  SettingsEthernet: 0,
  SettingsInputAntenna: 0,
  SettingsInputHdmi: 0,
  SettingsInputSvideo: 0,
  SettingsOverscan: 0,
  SettingsPhone: 7,
  SettingsPower: 7,
  SettingsRemote: 2,
  SettingsSuggest: 2,
  SettingsVoice: 7,
  SevenK: 15,
  SevenKPlus: 15,
  SevenMp: 15,
  SeventeenMp: 15,
  Share: 15,
  ShareLocation: 7,
  Shield: 15,
  Shop: 15,
  Shop2: 15,
  ShopTwo: 15,
  ShoppingBag: 15,
  ShoppingBasket: 2,
  ShoppingCart: 15,
  ShortText: 15,
  Shortcut: 15,
  ShowChart: 15,
  Shower: 15,
  Shuffle: 15,
  ShuffleOn: 15,
  ShutterSpeed: 15,
  Sick: 15,
  SignalCellular0Bar: 0,
  SignalCellular1Bar: 0,
  SignalCellular2Bar: 0,
  SignalCellular3Bar: 0,
  SignalCellular4Bar: 0,
  SignalCellularAlt: 0,
  SignalCellularNoSim: 0,
  SignalCellularNodata: 0,
  SignalCellularNull: 0,
  SignalCellularOff: 0,
  SignalWifi0Bar: 2,
  SignalWifi1Bar: 2,
  SignalWifi1BarLock: 0,
  SignalWifi2Bar: 2,
  SignalWifi2BarLock: 0,
  SignalWifi3Bar: 2,
  SignalWifi3BarLock: 0,
  SignalWifi4Bar: 2,
  SignalWifi4BarLock: 0,
  SignalWifiBad: 7,
  SignalWifiOff: 7,
  SimCard: 15,
  SimCardAlert: 15,
  SimCardDownload: 2,
  SingleBed: 15,
  Sip: 15,
  SixK: 15,
  SixKPlus: 15,
  SixMp: 15,
  SixteenMp: 15,
  SixtyFps: 15,
  SixtyFpsSelect: 2,
  Skateboarding: 7,
  SkipNext: 15,
  SkipPrevious: 15,
  Sledding: 15,
  Slideshow: 15,
  SlowMotionVideo: 2,
  SmartButton: 15,
  SmartDisplay: 15,
  SmartScreen: 15,
  SmartToy: 15,
  Smartphone: 15,
  SmokeFree: 15,
  SmokingRooms: 15,
  Sms: 15,
  SmsFailed: 15,
  SnippetFolder: 7,
  Snooze: 15,
  Snowboarding: 15,
  Snowmobile: 15,
  Snowshoeing: 15,
  Soap: 15,
  SocialDistance: 2,
  Sort: 15,
  SortByAlpha: 15,
  Source: 15,
  South: 15,
  SouthEast: 15,
  SouthWest: 15,
  Spa: 15,
  SpaceBar: 15,
  Speaker: 15,
  SpeakerGroup: 15,
  SpeakerNotes: 15,
  SpeakerNotesOff: 2,
  SpeakerPhone: 15,
  Speed: 15,
  Spellcheck: 15,
  Splitscreen: 15,
  Sports: 15,
  SportsBar: 15,
  SportsBaseball: 2,
  SportsBasketball: 0,
  SportsCricket: 7,
  SportsEsports: 7,
  SportsFootball: 2,
  SportsGolf: 15,
  SportsHandball: 2,
  SportsHockey: 15,
  SportsKabaddi: 7,
  SportsMma: 15,
  SportsMotorsports: 0,
  SportsRugby: 15,
  SportsScore: 15,
  SportsSoccer: 15,
  SportsTennis: 15,
  SportsVolleyball: 0,
  SquareFoot: 15,
  StackedBarChart: 2,
  StackedLineChart: 0,
  Stairs: 15,
  Star: 15,
  StarBorder: 15,
  StarBorderPurple500: 0,
  StarHalf: 15,
  StarOutline: 15,
  StarPurple500: 7,
  StarRate: 15,
  Stars: 15,
  StayCurrentLandscape: 0,
  StayCurrentPortrait: 0,
  StayPrimaryLandscape: 0,
  StayPrimaryPortrait: 0,
  StickyNote2: 15,
  Stop: 15,
  StopCircle: 15,
  StopScreenShare: 2,
  Storage: 15,
  Store: 15,
  StoreMallDirectory: 0,
  Storefront: 15,
  Storm: 15,
  Straighten: 15,
  Stream: 15,
  Streetview: 15,
  StrikethroughS: 2,
  Stroller: 15,
  Style: 15,
  Subject: 15,
  Subscript: 15,
  Subscriptions: 7,
  Subtitles: 15,
  SubtitlesOff: 15,
  Subway: 15,
  Summarize: 15,
  Superscript: 15,
  SupervisedUserCircle: 0,
  SupervisorAccount: 0,
  Support: 15,
  SupportAgent: 15,
  Surfing: 15,
  SurroundSound: 7,
  SwapCalls: 15,
  SwapHoriz: 15,
  SwapHorizontalCircle: 0,
  SwapVert: 15,
  SwapVerticalCircle: 0,
  Swipe: 15,
  SwitchAccount: 7,
  SwitchCamera: 15,
  SwitchLeft: 15,
  SwitchRight: 15,
  SwitchVideo: 15,
  Sync: 15,
  SyncAlt: 15,
  SyncDisabled: 15,
  SyncProblem: 15,
  SystemSecurityUpdate: 0,
  SystemUpdate: 15,
  SystemUpdateAlt: 2,
  Tab: 15,
  TabUnselected: 7,
  TableChart: 15,
  TableRows: 15,
  TableView: 15,
  Tablet: 15,
  TabletAndroid: 7,
  TabletMac: 15,
  Tag: 15,
  TagFaces: 15,
  TakeoutDining: 7,
  TapAndPlay: 15,
  Tapas: 15,
  Task: 15,
  TaskAlt: 15,
  TaxiAlert: 15,
  Telegram: 0,
  TenMp: 15,
  Terrain: 15,
  TextFields: 15,
  TextFormat: 15,
  TextRotateUp: 15,
  TextRotateVertical: 0,
  TextRotationAngleup: 0,
  TextRotationDown: 0,
  TextRotationNone: 0,
  TextSnippet: 15,
  Textsms: 15,
  Texture: 15,
  TheaterComedy: 7,
  Theaters: 15,
  Thermostat: 15,
  ThermostatAuto: 2,
  ThirteenMp: 15,
  ThirtyFps: 15,
  ThirtyFpsSelect: 2,
  ThreeDRotation: 2,
  ThreeGMobiledata: 0,
  ThreeK: 15,
  ThreeKPlus: 15,
  ThreeMp: 15,
  ThreeP: 15,
  ThreeSixty: 15,
  ThumbDown: 15,
  ThumbDownAlt: 15,
  ThumbDownOffAlt: 2,
  ThumbUp: 15,
  ThumbUpAlt: 15,
  ThumbUpOffAlt: 7,
  ThumbsUpDown: 15,
  TimeToLeave: 15,
  Timelapse: 15,
  Timeline: 15,
  Timer: 15,
  Timer10: 15,
  Timer10Select: 7,
  Timer3: 15,
  Timer3Select: 15,
  TimerOff: 15,
  TimesOneMobiledata: 0,
  Title: 15,
  Toc: 15,
  Today: 15,
  ToggleOff: 15,
  ToggleOn: 15,
  Toll: 15,
  Tonality: 15,
  Topic: 15,
  TouchApp: 15,
  Tour: 15,
  Toys: 15,
  TrackChanges: 15,
  Traffic: 15,
  Train: 15,
  Tram: 15,
  Transform: 15,
  Transgender: 15,
  TransitEnterexit: 0,
  Translate: 15,
  TravelExplore: 7,
  TrendingDown: 15,
  TrendingFlat: 15,
  TrendingUp: 15,
  TripOrigin: 15,
  Try: 15,
  Tty: 15,
  Tune: 15,
  Tungsten: 15,
  TurnedIn: 15,
  TurnedInNot: 15,
  Tv: 15,
  TvOff: 15,
  TwelveMp: 15,
  TwentyFourMp: 15,
  TwentyOneMp: 15,
  TwentyThreeMp: 7,
  TwentyTwoMp: 15,
  TwentyZeroMp: 15,
  Twitter: 0,
  TwoK: 15,
  TwoKPlus: 15,
  TwoMp: 15,
  TwoWheeler: 15,
  Umbrella: 15,
  Unarchive: 15,
  Undo: 15,
  UnfoldLess: 15,
  UnfoldMore: 15,
  Unpublished: 15,
  Unsubscribe: 15,
  Upcoming: 15,
  Update: 15,
  UpdateDisabled: 2,
  Upgrade: 15,
  Upload: 15,
  UploadFile: 15,
  Usb: 15,
  UsbOff: 15,
  Verified: 15,
  VerifiedUser: 15,
  VerticalAlignBottom: 0,
  VerticalAlignCenter: 0,
  VerticalAlignTop: 0,
  VerticalSplit: 7,
  Vibration: 15,
  VideoCall: 15,
  VideoCameraBack: 2,
  VideoCameraFront: 0,
  VideoLabel: 15,
  VideoLibrary: 15,
  VideoSettings: 7,
  VideoStable: 15,
  Videocam: 15,
  VideocamOff: 15,
  VideogameAsset: 2,
  VideogameAssetOff: 0,
  ViewAgenda: 15,
  ViewArray: 15,
  ViewCarousel: 15,
  ViewColumn: 15,
  ViewComfy: 15,
  ViewCompact: 15,
  ViewDay: 15,
  ViewHeadline: 15,
  ViewInAr: 15,
  ViewList: 15,
  ViewModule: 15,
  ViewQuilt: 15,
  ViewSidebar: 15,
  ViewStream: 15,
  ViewWeek: 15,
  Vignette: 15,
  Villa: 15,
  Visibility: 15,
  VisibilityOff: 7,
  VoiceChat: 15,
  VoiceOverOff: 15,
  Voicemail: 15,
  VolumeDown: 15,
  VolumeMute: 15,
  VolumeOff: 15,
  VolumeUp: 15,
  VolunteerActivism: 0,
  VpnKey: 15,
  VpnLock: 15,
  Vrpano: 15,
  Wallpaper: 15,
  Warning: 15,
  WarningAmber: 15,
  Wash: 15,
  Watch: 15,
  WatchLater: 15,
  Water: 15,
  WaterDamage: 15,
  WaterfallChart: 2,
  Waves: 15,
  WbAuto: 15,
  WbCloudy: 15,
  WbIncandescent: 2,
  WbIridescent: 15,
  WbShade: 15,
  WbSunny: 15,
  WbTwilight: 15,
  Wc: 15,
  Web: 15,
  WebAsset: 15,
  WebAssetOff: 15,
  Weekend: 15,
  West: 15,
  WhatsApp: 0,
  Whatshot: 15,
  WheelchairPickup: 0,
  WhereToVote: 15,
  Widgets: 15,
  Wifi: 15,
  WifiCalling: 15,
  WifiCalling3: 15,
  WifiLock: 15,
  WifiOff: 15,
  WifiProtectedSetup: 0,
  WifiTethering: 7,
  WifiTetheringOff: 0,
  Window: 15,
  WineBar: 15,
  Work: 15,
  WorkOff: 15,
  WorkOutline: 15,
  Workspaces: 15,
  WrapText: 15,
  WrongLocation: 7,
  Wysiwyg: 15,
  Yard: 15,
  YouTube: 0,
  YoutubeSearchedFor: 0,
  ZoomIn: 15,
  ZoomOut: 15,
  ZoomOutMap: 15
};
var iconKeys = Object.keys(icons);
var weightOptions = ["Filled", "TwoTone", "Sharp", "Rounded", "Outlined"];
var styleKeyOptions = {
  15: [...weightOptions],
  7: ["Filled", "TwoTone", "Sharp", "Rounded"],
  2: ["Filled", "Sharp"]
};
var styleOptionPropKeys = Object.keys(styleKeyOptions).map(optionKey => `iconStyle${optionKey}`);
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
    mirrored,
    style
  } = props;
  const isMounted = useRef(false);
  const iconKey = useIconSelection(iconKeys, selectByList, iconSearch, iconSelection, lowercaseIconKeyPairs);
  const styleOptionProps = styleOptionPropKeys.map(prop => props[prop]);
  const iconStyle = useMemo2(() => {
    const iconStyleKey = icons[iconKey];
    if (!iconStyleKey) return;
    const activeStyle = props[`iconStyle${iconStyleKey}`];
    if (activeStyle === "Filled") return;
    return activeStyle;
  }, [...styleOptionProps]);
  const [SelectedIcon, setSelectedIcon] = useState(iconKey === "Home" ? h(React2) : null);
  async function importModule() {
    if (typeof icons[iconKey] !== "number") {
      setSelectedIcon(null);
      return;
    }
    try {
      const style2 = iconStyle ? iconStyle : "";
      const iconModuleUrl = `${moduleBaseUrl}${iconKey}${style2}.js@0.0.32`;
      const module = await import(/* webpackIgnore: true */
      iconModuleUrl);
      if (isMounted.current) setSelectedIcon(module.default(React2));
    } catch {
      if (isMounted.current) setSelectedIcon(null);
    }
  }
  useEffect(() => {
    isMounted.current = true;
    importModule();
    return () => {
      isMounted.current = false;
    };
  }, [iconKey, ...styleOptionProps]);
  const isOnCanvas = RenderTarget.current() === RenderTarget.canvas;
  const emptyState = isOnCanvas ? <NullState /> : null;
  return _jsx2(motion.div, {
    style: {
      display: "contents"
    },
    onClick,
    onMouseEnter,
    onMouseLeave,
    onMouseDown,
    onMouseUp,
    children: SelectedIcon ? <svg xmlns="http://www.w3.org/2000/svg" style={{
      userSelect: "none",
      width: "100%",
      height: "100%",
      display: "inline-block",
      fill: color,
      flexShrink: 0,
      transform: mirrored ? "scale(-1, 1)" : void 0,
      ...style
    }} focusable="false" viewBox="0 0 24 24" color={color}>{SelectedIcon}</svg> : emptyState
  });
}
Icon.displayName = "Material";
Icon.defaultProps = {
  width: 24,
  height: 24,
  iconSelection: "Home",
  iconSearch: "Home",
  color: "#66F",
  selectByList: true,
  weight: "Filled",
  mirrored: false
};
function hideStyleOptions(props, styleOptions) {
  const {
    selectByList,
    iconSearch,
    iconSelection
  } = props;
  const styleOptionsNumber = parseInt(styleOptions);
  const name = getIconSelection(iconKeys, selectByList, iconSearch, iconSelection, lowercaseIconKeyPairs);
  const icon = icons[name];
  if (!icon || styleOptionsNumber === 0) return true;
  if (icon === styleOptionsNumber) return false;else return true;
}
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
    defaultValue: Icon.defaultProps.iconSelection,
    title: "Name",
    hidden: ({
      selectByList
    }) => !selectByList,
    description: "Find every icon name on the [Material site](https://fonts.google.com/icons)"
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
  ...Object.keys(styleKeyOptions).reduce((result, optionKey) => {
    result[`iconStyle${optionKey}`] = {
      type: ControlType2.Enum,
      title: "Style",
      defaultValue: "Filled",
      options: styleKeyOptions[optionKey],
      hidden: props => hideStyleOptions(props, optionKey)
    };
    return result;
  }, {}),
  ...defaultEvents
});

// http-url:https://framerusercontent.com/modules/b6BVH2NX752rxYq1kPjw/xedxKhywbearE4Sacg0T/P6yU1EFQs.js
var MaterialFonts = getFonts(Icon);
var cycleOrder = ["yqVL7bhyU", "VURHk1q7I"];
var serializationHash = "framer-d1com";
var variantClassNames = {
  VURHk1q7I: "framer-v-10fwz60",
  yqVL7bhyU: "framer-v-zq57kp"
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
var numberToPixelString = value => {
  if (typeof value !== "number") return value;
  if (!Number.isFinite(value)) return void 0;
  return Math.max(0, value) + "px";
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
var Variants = motion2(React3.Fragment);
var humanReadableVariantMap = {
  no: "yqVL7bhyU",
  yes: "VURHk1q7I"
};
var getProps = ({
  height,
  iconColor,
  iconPadding,
  id,
  textColor,
  title,
  width,
  ...props
}) => {
  return {
    ...props,
    B8e5giMAo: textColor ?? props.B8e5giMAo ?? "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(234, 234, 235))",
    inSq_WnrT: title ?? props.inSq_WnrT ?? "Up to 50 users",
    PiExLueGf: iconPadding ?? props.PiExLueGf ?? "0px 0px 0px 0px",
    variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "yqVL7bhyU",
    VMnWb3StF: iconColor ?? props.VMnWb3StF ?? "var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(197, 249, 111))"
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
    className: className7,
    layoutId,
    variant,
    inSq_WnrT,
    VMnWb3StF,
    B8e5giMAo,
    PiExLueGf,
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
    defaultVariant: "yqVL7bhyU",
    variant,
    variantClassNames
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const ref1 = React3.useRef(null);
  const defaultLayoutId = React3.useId();
  const sharedStyleClassNames = [className];
  const componentViewport = useComponentViewport();
  return <LayoutGroup id={layoutId ?? defaultLayoutId}>{<Variants animate={variants} initial={false}>{<Transition value={transition1}>{_jsxs(motion2.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx(serializationHash, ...sharedStyleClassNames, "framer-zq57kp", className7, classNames),
          "data-framer-name": "no",
          layoutDependency,
          layoutId: "yqVL7bhyU",
          ref: ref ?? ref1,
          style: {
            ...style
          },
          ...addPropertyOverrides({
            VURHk1q7I: {
              "data-framer-name": "yes"
            }
          }, baseVariant, gestureVariant),
          children: [_jsx3(motion2.div, {
            className: "framer-mly8pc",
            layoutDependency,
            layoutId: "f3V_0FBAb",
            style: {
              "--1h08x8d": numberToPixelString(PiExLueGf)
            },
            children: <ComponentViewportProvider>{_jsx3(motion2.div, {
                className: "framer-1fa7n5q-container",
                layoutDependency,
                layoutId: "Zpf1nrVpo-container",
                children: <Icon color="var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(124, 124, 124))" height="100%" iconSearch="Home" iconSelection="Close" iconStyle15="Filled" iconStyle2="Filled" iconStyle7="Filled" id="Zpf1nrVpo" layoutId="Zpf1nrVpo" mirrored={false} selectByList style={{
                  height: "100%",
                  width: "100%"
                }} width="100%" {...addPropertyOverrides({
                  VURHk1q7I: {
                    color: VMnWb3StF,
                    iconSelection: "Check"
                  }
                }, baseVariant, gestureVariant)} />
              })}</ComponentViewportProvider>
          }), <RichText __fromCanvasComponent className="framer-91jjm" data-framer-name="Text" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="WTHNZA3mD" style={{
            "--extracted-r6o4lv": "var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(124, 124, 124))",
            "--framer-paragraph-spacing": "0px",
            "--variable-reference-B8e5giMAo-P6yU1EFQs": B8e5giMAo
          }} text={inSq_WnrT} variants={{
            VURHk1q7I: {
              "--extracted-r6o4lv": "var(--variable-reference-B8e5giMAo-P6yU1EFQs)",
              "--variable-reference-B8e5giMAo-P6yU1EFQs": B8e5giMAo
            }
          }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
            VURHk1q7I: {
              children: <React3.Fragment>{_jsx3(motion2.p, {
                  className: "framer-styles-preset-1p8b08q",
                  "data-styles-preset": "UDEB09jjg",
                  style: {
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-B8e5giMAo-P6yU1EFQs))"
                  },
                  children: "Up to 50 users"
                })}</React3.Fragment>
            }
          }, baseVariant, gestureVariant)}>{<React3.Fragment>{_jsx3(motion2.p, {
                className: "framer-styles-preset-1p8b08q",
                "data-styles-preset": "UDEB09jjg",
                style: {
                  "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(124, 124, 124)))"
                },
                children: "Up to 50 users"
              })}</React3.Fragment>}</RichText>]
        })}</Transition>}</Variants>}</LayoutGroup>;
});
var css5 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-d1com.framer-1b1chqp, .framer-d1com .framer-1b1chqp { display: block; }", ".framer-d1com.framer-zq57kp { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 210px; }", ".framer-d1com .framer-mly8pc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: var(--1h08x8d); position: relative; width: min-content; }", ".framer-d1com .framer-1fa7n5q-container { flex: none; height: 24px; position: relative; width: 24px; }", ".framer-d1com .framer-91jjm { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-d1com.framer-zq57kp, .framer-d1com .framer-mly8pc { gap: 0px; } .framer-d1com.framer-zq57kp > *, .framer-d1com .framer-mly8pc > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-d1com.framer-zq57kp > :first-child, .framer-d1com .framer-mly8pc > :first-child { margin-left: 0px; } .framer-d1com.framer-zq57kp > :last-child, .framer-d1com .framer-mly8pc > :last-child { margin-right: 0px; } }", ...css];
var FramerP6yU1EFQs = withCSS(Component, css5, "framer-d1com");
var P6yU1EFQs_default = FramerP6yU1EFQs;
FramerP6yU1EFQs.displayName = "Pricing/Features";
FramerP6yU1EFQs.defaultProps = {
  height: 24,
  width: 210
};
addPropertyControls2(FramerP6yU1EFQs, {
  variant: {
    options: ["yqVL7bhyU", "VURHk1q7I"],
    optionTitles: ["no", "yes"],
    title: "Variant",
    type: ControlType3.Enum
  },
  inSq_WnrT: {
    defaultValue: "Up to 50 users",
    displayTextArea: false,
    title: "Title",
    type: ControlType3.String
  },
  VMnWb3StF: {
    defaultValue: 'var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(197, 249, 111))',
    title: "Icon Color",
    type: ControlType3.Color
  },
  B8e5giMAo: {
    defaultValue: 'var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(234, 234, 235))',
    title: "Text Color",
    type: ControlType3.Color
  },
  PiExLueGf: {
    defaultValue: "0px 0px 0px 0px",
    title: "Icon Padding",
    type: ControlType3.Padding
  }
});
addFonts(FramerP6yU1EFQs, [{
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
}, ...MaterialFonts, ...getFontsFromSharedStyle(fonts)], {
  supportsExplicitInterCodegen: true
});

// http-url:https://framerusercontent.com/modules/tLVqKCltCYmTTKeYPY8O/61TR8ONf7Q5XYv19SfxW/yZBQGZIRL.js
import { jsx as _jsx5, jsxs as _jsxs2 } from "react/jsx-runtime";
import { addFonts as addFonts2, addPropertyControls as addPropertyControls4, ControlType as ControlType5, cx as cx3, getFonts as getFonts2, getFontsFromSharedStyle as getFontsFromSharedStyle2, Link, RichText as RichText2, useActiveVariantCallback, useComponentViewport as useComponentViewport2, useLocaleInfo as useLocaleInfo2, useVariantState as useVariantState2, withCSS as withCSS3 } from "@proofly-framer/runtime";
import { LayoutGroup as LayoutGroup2, motion as motion4, MotionConfigContext as MotionConfigContext2 } from "@proofly-framer/runtime";
import * as React5 from "react";
import { useRef as useRef3 } from "react";

// http-url:https://framerusercontent.com/modules/gGXLFANbZFKf2qU8bbVL/uQjjbN7Yn6nBRqTZdwzU/HoKrrnQcM.js
import { jsx as _jsx4 } from "react/jsx-runtime";
import { addPropertyControls as addPropertyControls3, ControlType as ControlType4, cx as cx2, motion as motion3, useSVGTemplate, withCSS as withCSS2 } from "@proofly-framer/runtime";
import * as React4 from "react";
import { forwardRef as forwardRef4 } from "react";
var mask = "var(--framer-icon-mask)";
var Base = forwardRef4(function (props, ref) {
  return <svg {...props} ref={ref}>{props.children}</svg>;
});
var MotionSVG = motion3.create(Base);
var SVG = forwardRef4((props, ref) => {
  const {
    animated,
    layoutId,
    children,
    ...rest
  } = props;
  return animated ? <MotionSVG {...rest} layoutId={layoutId} ref={ref}>{children}</MotionSVG> : <svg {...rest} ref={ref}>{children}</svg>;
});
var svg = __svg_1;
var getProps2 = ({
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
var Component2 = React4.forwardRef(function (props, ref) {
  const {
    style,
    className: className7,
    layoutId,
    variant,
    fICyAUQY1,
    lKf_CQTz5,
    BKVe8Pgvw,
    ...restProps
  } = getProps2(props);
  const href = useSVGTemplate("1173457374", svg);
  return <SVG {...restProps} className={cx2("framer-EcgqK", className7)} layoutId={layoutId} ref={ref} role="presentation" style={{
    "--1335ju": lKf_CQTz5,
    "--18mrqx2": fICyAUQY1,
    ...style
  }} viewBox="0 0 24 24">{<use href={href} />}</SVG>;
});
var css6 = [`.framer-EcgqK { -webkit-mask: ${mask}; aspect-ratio: 1; display: block; mask: ${mask}; width: 24px; }`];
var Icon2 = withCSS2(Component2, css6, "framer-EcgqK");
Icon2.displayName = "Arrow Right";
var HoKrrnQcM_default = Icon2;
addPropertyControls3(Icon2, {
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

// http-url:https://framerusercontent.com/modules/jtYjlqHZqHU87icHOGiw/OOuSnFcca3KULIr591Dj/QkI8Aa5rN.js
import { fontStore as fontStore5 } from "@proofly-framer/runtime";
fontStore5.loadFonts(["CUSTOM;Haffer Regular"]);
var fonts5 = [{
  explicitInter: true,
  fonts: [{
    family: "Haffer Regular",
    source: "custom",
    url: "https://framerusercontent.com/assets/tAGQcvN09kwW2QjPLqLO197UqBQ.woff"
  }]
}];
var css7 = ['.framer-aqieJ .framer-styles-preset-mnimbo:not(.rich-text-wrapper), .framer-aqieJ .framer-styles-preset-mnimbo.rich-text-wrapper p { --framer-font-family: "Haffer Regular", "Haffer Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, #0a0b0a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }'];
var className5 = "framer-aqieJ";

// http-url:https://framerusercontent.com/modules/Ae2JxZ1NzMSdVHWpQSYI/6DXq0VgytYexIhDwN2rC/YlBLAavU6.js
import { fontStore as fontStore6 } from "@proofly-framer/runtime";
import { jsx as _ctxJsx } from "react/jsx-runtime";
import { ContextProviders, useVariant } from "@proofly-framer/runtime";
fontStore6.loadFonts(["CUSTOM;Haffer Regular"]);
var fonts6 = [{
  explicitInter: true,
  fonts: [{
    family: "Haffer Regular",
    source: "custom",
    url: "https://framerusercontent.com/assets/tAGQcvN09kwW2QjPLqLO197UqBQ.woff"
  }]
}];
var css8 = ['.framer-RqrbG .framer-styles-preset-1ydx3rt:not(.rich-text-wrapper), .framer-RqrbG .framer-styles-preset-1ydx3rt.rich-text-wrapper p { --framer-font-family: "Haffer Regular", "Haffer Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, #0a0b0a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }', '@media (max-width: 767px) and (min-width: 0px) { .framer-RqrbG .framer-styles-preset-1ydx3rt:not(.rich-text-wrapper), .framer-RqrbG .framer-styles-preset-1ydx3rt.rich-text-wrapper p { --framer-font-family: "Haffer Regular", "Haffer Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, #0a0b0a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }'];
var className6 = "framer-RqrbG";

// http-url:https://framerusercontent.com/modules/tLVqKCltCYmTTKeYPY8O/61TR8ONf7Q5XYv19SfxW/yZBQGZIRL.js
var ArrowRightFonts = getFonts2(HoKrrnQcM_default);
var enabledGestures = {
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
var cycleOrder2 = ["ZmCP_eD3_", "llZeWFj0E", "tLEpsRpVS", "bHEcOt3us", "FbG4z2omJ", "coXNANDm3", "br7LBM8iN", "bMRQAPM8x"];
var serializationHash2 = "framer-BsBK3";
var variantClassNames2 = {
  bHEcOt3us: "framer-v-26utbf",
  bMRQAPM8x: "framer-v-19s4zot",
  br7LBM8iN: "framer-v-mfbo2h",
  coXNANDm3: "framer-v-6stzd3",
  FbG4z2omJ: "framer-v-nbkuw9",
  llZeWFj0E: "framer-v-1f8bjye",
  tLEpsRpVS: "framer-v-j08lig",
  ZmCP_eD3_: "framer-v-16c10ng"
};
function addPropertyOverrides2(overrides, ...variants) {
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
var transition12 = {
  damping: 60,
  delay: 0,
  mass: 1,
  stiffness: 500,
  type: "spring"
};
var transformTemplate1 = (_, t2) => `translateX(-50%) ${t2}`;
var Transition2 = ({
  value,
  children
}) => {
  const config = React5.useContext(MotionConfigContext2);
  const transition = value ?? config.transition;
  const contextValue = React5.useMemo(() => ({
    ...config,
    transition
  }), [JSON.stringify(transition)]);
  return <MotionConfigContext2.Provider value={contextValue}>{children}</MotionConfigContext2.Provider>;
};
var Variants2 = motion4.create(React5.Fragment);
var humanReadableVariantMap2 = {
  "Just Icon": "bMRQAPM8x",
  "small-gradient": "coXNANDm3",
  "tiny stroke": "FbG4z2omJ",
  Big: "ZmCP_eD3_",
  Dark: "tLEpsRpVS",
  huge: "br7LBM8iN",
  Small: "llZeWFj0E",
  tiny: "bHEcOt3us"
};
var getProps3 = ({
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
    variant: humanReadableVariantMap2[props.variant] ?? props.variant ?? "ZmCP_eD3_",
    wN3STPwMb: border ?? props.wN3STPwMb ?? {
      borderColor: 'var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))',
      borderStyle: "solid",
      borderWidth: 0
    }
  };
};
var createLayoutDependency2 = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component3 = React5.forwardRef(function (props, ref) {
  const fallbackRef = useRef3(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React5.useId();
  const {
    activeLocale,
    setLocale
  } = useLocaleInfo2();
  const componentViewport = useComponentViewport2();
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
    defaultVariant: "ZmCP_eD3_",
    enabledGestures,
    ref: refBinding,
    variant,
    variantClassNames: variantClassNames2
  });
  const layoutDependency = createLayoutDependency2(props, variants);
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
  const sharedStyleClassNames = [className6, className5];
  const scopingClassNames = cx3(serializationHash2, ...sharedStyleClassNames);
  const isDisplayed = () => {
    if (baseVariant === "bMRQAPM8x") return true;
    return false;
  };
  const isDisplayed1 = () => {
    if (baseVariant === "bMRQAPM8x") return false;
    return true;
  };
  return <LayoutGroup2 id={layoutId ?? defaultLayoutId}>{<Variants2 animate={variants} initial={false}>{<Transition2 value={transition12}>{<Link href={qzxtK1_9Y} motionChild nodeId="ZmCP_eD3_" scopeId="yZBQGZIRL">{_jsxs2(motion4.a, {
            ...restProps,
            ...gestureHandlers,
            className: `${cx3(scopingClassNames, "framer-16c10ng", className7, classNames)} framer-3bbyhf`,
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
            ...addPropertyOverrides2({
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
            }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides2({
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
                children: <React5.Fragment>{_jsx5(motion4.p, {
                    className: "framer-styles-preset-mnimbo",
                    "data-styles-preset": "QkI8Aa5rN",
                    style: {
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))"
                    },
                    children: "Join the waitlist"
                  })}</React5.Fragment>
              },
              br7LBM8iN: {
                children: <React5.Fragment>{_jsx5(motion4.h3, {
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
                children: <React5.Fragment>{_jsx5(motion4.p, {
                    className: "framer-styles-preset-mnimbo",
                    "data-styles-preset": "QkI8Aa5rN",
                    style: {
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)))"
                    },
                    children: "Login"
                  })}</React5.Fragment>
              },
              FbG4z2omJ: {
                children: <React5.Fragment>{_jsx5(motion4.p, {
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
                children: <React5.Fragment>{_jsx5(motion4.p, {
                    className: "framer-styles-preset-mnimbo",
                    "data-styles-preset": "QkI8Aa5rN",
                    style: {
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-P7ZHYgc9n-yZBQGZIRL))"
                    },
                    children: "Join the waitlist"
                  })}</React5.Fragment>
              },
              tLEpsRpVS: {
                children: <React5.Fragment>{_jsx5(motion4.p, {
                    className: "framer-styles-preset-mnimbo",
                    "data-styles-preset": "QkI8Aa5rN",
                    style: {
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))"
                    },
                    children: "Join the waitlist"
                  })}</React5.Fragment>
              }
            }, baseVariant, gestureVariant)}>{<React5.Fragment>{_jsx5(motion4.p, {
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
            }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides2({
              "bHEcOt3us-hover": {
                transformTemplate: void 0
              },
              "br7LBM8iN-hover": {
                children: <React5.Fragment>{_jsx5(motion4.h3, {
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
                children: <React5.Fragment>{_jsx5(motion4.p, {
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
                children: <React5.Fragment>{_jsx5(motion4.p, {
                    className: "framer-styles-preset-mnimbo",
                    "data-styles-preset": "QkI8Aa5rN",
                    style: {
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))"
                    },
                    children: "Join the waitlist"
                  })}</React5.Fragment>
              },
              bMRQAPM8x: {
                children: <React5.Fragment>{_jsx5(motion4.p, {
                    className: "framer-styles-preset-mnimbo",
                    "data-styles-preset": "QkI8Aa5rN",
                    style: {
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))"
                    },
                    children: "Join the waitlist"
                  })}</React5.Fragment>
              },
              br7LBM8iN: {
                children: <React5.Fragment>{_jsx5(motion4.h3, {
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
                children: <React5.Fragment>{_jsx5(motion4.p, {
                    className: "framer-styles-preset-mnimbo",
                    "data-styles-preset": "QkI8Aa5rN",
                    style: {
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-P7ZHYgc9n-yZBQGZIRL))"
                    },
                    children: "Join the waitlist"
                  })}</React5.Fragment>
              },
              FbG4z2omJ: {
                children: <React5.Fragment>{_jsx5(motion4.p, {
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
                children: <React5.Fragment>{_jsx5(motion4.p, {
                    className: "framer-styles-preset-mnimbo",
                    "data-styles-preset": "QkI8Aa5rN",
                    style: {
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-P7ZHYgc9n-yZBQGZIRL))"
                    },
                    children: "Join the waitlist"
                  })}</React5.Fragment>
              },
              tLEpsRpVS: {
                children: <React5.Fragment>{_jsx5(motion4.p, {
                    className: "framer-styles-preset-mnimbo",
                    "data-styles-preset": "QkI8Aa5rN",
                    style: {
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))"
                    },
                    children: "Join the waitlist"
                  })}</React5.Fragment>
              }
            }, baseVariant, gestureVariant)}>{<React5.Fragment>{_jsx5(motion4.p, {
                  className: "framer-styles-preset-1ydx3rt",
                  "data-styles-preset": "YlBLAavU6",
                  style: {
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-P7ZHYgc9n-yZBQGZIRL))"
                  },
                  children: "Join the waitlist"
                })}</React5.Fragment>}</RichText2>]
          })}</Link>}</Transition2>}</Variants2>}</LayoutGroup2>;
});
var css9 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-BsBK3.framer-3bbyhf, .framer-BsBK3 .framer-3bbyhf { display: block; }", ".framer-BsBK3.framer-16c10ng { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 12px 16px 12px 16px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-BsBK3 .framer-1lw4bu5 { flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }", ".framer-BsBK3 .framer-1nfv7fv { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-BsBK3 .framer-129t4kk { bottom: -23px; flex: none; height: auto; left: 50%; position: absolute; white-space: pre; width: auto; z-index: 1; }", ".framer-BsBK3.framer-v-1f8bjye.framer-16c10ng, .framer-BsBK3.framer-v-6stzd3.framer-16c10ng { padding: 12px; }", ".framer-BsBK3.framer-v-26utbf.framer-16c10ng, .framer-BsBK3.framer-v-nbkuw9.framer-16c10ng { padding: 4px 8px 4px 8px; }", ".framer-BsBK3.framer-v-mfbo2h.framer-16c10ng { padding: 24px 32px 24px 32px; }", ".framer-BsBK3.framer-v-mfbo2h .framer-129t4kk { bottom: -42px; }", ".framer-BsBK3.framer-v-19s4zot.framer-16c10ng { width: 48px; }", ".framer-BsBK3.framer-v-16c10ng.hover .framer-1nfv7fv { left: 50%; order: 1; position: absolute; top: -24px; z-index: 1; }", ".framer-BsBK3.framer-v-16c10ng.hover .framer-129t4kk { bottom: unset; left: unset; order: 2; position: relative; }", ".framer-BsBK3.framer-v-1f8bjye.hover .framer-1nfv7fv, .framer-BsBK3.framer-v-6stzd3.hover .framer-1nfv7fv { left: 50%; position: absolute; top: -24px; z-index: 1; }", ".framer-BsBK3.framer-v-1f8bjye.hover .framer-129t4kk, .framer-BsBK3.framer-v-j08lig.hover .framer-129t4kk, .framer-BsBK3.framer-v-26utbf.hover .framer-129t4kk, .framer-BsBK3.framer-v-6stzd3.hover .framer-129t4kk, .framer-BsBK3.framer-v-mfbo2h.hover .framer-129t4kk { bottom: unset; left: unset; position: relative; }", ".framer-BsBK3.framer-v-j08lig.hover.framer-16c10ng { padding: 11px 16px 12px 16px; }", ".framer-BsBK3.framer-v-j08lig.hover .framer-1nfv7fv { left: 50%; position: absolute; top: -17px; z-index: 1; }", ".framer-BsBK3.framer-v-26utbf.hover .framer-1nfv7fv { left: 50%; position: absolute; top: -22px; z-index: 1; }", ".framer-BsBK3.framer-v-mfbo2h.hover .framer-1nfv7fv { left: 50%; position: absolute; top: -45px; z-index: 1; }", ...css8, ...css7, '.framer-BsBK3[data-border="true"]::after, .framer-BsBK3 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }'];
var FrameryZBQGZIRL = withCSS3(Component3, css9, "framer-BsBK3");
var yZBQGZIRL_default = FrameryZBQGZIRL;
FrameryZBQGZIRL.displayName = "Button";
FrameryZBQGZIRL.defaultProps = {
  height: 45.5,
  width: 85
};
addPropertyControls4(FrameryZBQGZIRL, {
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
addFonts2(FrameryZBQGZIRL, [{
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
}, ...ArrowRightFonts, ...getFontsFromSharedStyle2(fonts6), ...getFontsFromSharedStyle2(fonts5)], {
  supportsExplicitInterCodegen: true
});

// http-url:https://framerusercontent.com/modules/rOBpjc6KZHw4sFVHx81J/j0d7GA56hykfmxtEFrFn/sr21IGsuy.js
var PricingFeaturesFonts = getFonts3(P6yU1EFQs_default);
var ButtonFonts = getFonts3(yZBQGZIRL_default);
var PricingFeaturesControls = getPropertyControls(P6yU1EFQs_default);
var cycleOrder3 = ["UrwkLTzY9", "nNN9kttST"];
var serializationHash3 = "framer-AEVEQ";
var variantClassNames3 = {
  nNN9kttST: "framer-v-17vg6rz",
  UrwkLTzY9: "framer-v-z6o2ze"
};
function addPropertyOverrides3(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach(variant => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var numberToPixelString2 = value => {
  if (typeof value !== "number") return value;
  if (!Number.isFinite(value)) return void 0;
  return Math.max(0, value) + "px";
};
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
  const config = React6.useContext(MotionConfigContext3);
  const transition = value ?? config.transition;
  const contextValue = React6.useMemo(() => ({
    ...config,
    transition
  }), [JSON.stringify(transition)]);
  return <MotionConfigContext3.Provider value={contextValue}>{children}</MotionConfigContext3.Provider>;
};
var Variants3 = motion5(React6.Fragment);
var humanReadableEnumMap = {
  no: "yqVL7bhyU",
  yes: "VURHk1q7I"
};
var humanReadableVariantMap3 = {
  Best: "nNN9kttST",
  Dark: "UrwkLTzY9"
};
var getProps4 = ({
  description,
  featureType1,
  featureType2,
  featureType3,
  featureType4,
  featureType5,
  featureType6,
  featureType7,
  featureType8,
  height,
  id,
  padding,
  plan,
  price,
  width,
  ...props
}) => {
  return {
    ...props,
    cMcOzUso_: humanReadableEnumMap[featureType5] ?? featureType5 ?? props.cMcOzUso_ ?? "yqVL7bhyU",
    HV8ml1zvB: humanReadableEnumMap[featureType2] ?? featureType2 ?? props.HV8ml1zvB ?? "VURHk1q7I",
    KGggzmhgx: humanReadableEnumMap[featureType8] ?? featureType8 ?? props.KGggzmhgx ?? "yqVL7bhyU",
    MDqd__phv: humanReadableEnumMap[featureType1] ?? featureType1 ?? props.MDqd__phv ?? "VURHk1q7I",
    nfSxsMfYW: humanReadableEnumMap[featureType7] ?? featureType7 ?? props.nfSxsMfYW ?? "yqVL7bhyU",
    pgRnizZz6: humanReadableEnumMap[featureType4] ?? featureType4 ?? props.pgRnizZz6 ?? "yqVL7bhyU",
    Qanv3e3_O: description ?? props.Qanv3e3_O ?? "Essential features for secure identity management.",
    SdC3IHUXg: padding ?? props.SdC3IHUXg ?? "40px 30px 40px 30px",
    Tz8hG8kuX: plan ?? props.Tz8hG8kuX ?? "Core",
    u8PtWwE7E: humanReadableEnumMap[featureType6] ?? featureType6 ?? props.u8PtWwE7E ?? "yqVL7bhyU",
    uP4enigWJ: humanReadableEnumMap[featureType3] ?? featureType3 ?? props.uP4enigWJ ?? "yqVL7bhyU",
    variant: humanReadableVariantMap3[props.variant] ?? props.variant ?? "UrwkLTzY9",
    x4z6pi3Q6: price ?? props.x4z6pi3Q6 ?? "790\u20AC"
  };
};
var createLayoutDependency3 = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component4 = React6.forwardRef(function (props, ref) {
  const {
    activeLocale,
    setLocale
  } = useLocaleInfo3();
  const {
    style,
    className: className7,
    layoutId,
    variant,
    x4z6pi3Q6,
    Tz8hG8kuX,
    Qanv3e3_O,
    MDqd__phv,
    HV8ml1zvB,
    uP4enigWJ,
    pgRnizZz6,
    cMcOzUso_,
    u8PtWwE7E,
    nfSxsMfYW,
    KGggzmhgx,
    SdC3IHUXg,
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
    defaultVariant: "UrwkLTzY9",
    variant,
    variantClassNames: variantClassNames3
  });
  const layoutDependency = createLayoutDependency3(props, variants);
  const ref1 = React6.useRef(null);
  const isDisplayed = () => {
    if (baseVariant === "nNN9kttST") return true;
    return false;
  };
  const defaultLayoutId = React6.useId();
  const sharedStyleClassNames = [className2, className4, className3, className];
  const componentViewport = useComponentViewport3();
  return <LayoutGroup3 id={layoutId ?? defaultLayoutId}>{<Variants3 animate={variants} initial={false}>{<Transition3 value={transition13}>{_jsxs3(motion5.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx4(serializationHash3, ...sharedStyleClassNames, "framer-z6o2ze", className7, classNames),
          "data-border": true,
          "data-framer-name": "Dark",
          layoutDependency,
          layoutId: "UrwkLTzY9",
          ref: ref ?? ref1,
          style: {
            "--14yv0k4": numberToPixelString2(SdC3IHUXg),
            "--border-bottom-width": "1px",
            "--border-color": "rgba(255, 255, 255, 0.05)",
            "--border-left-width": "1px",
            "--border-right-width": "1px",
            "--border-style": "solid",
            "--border-top-width": "1px",
            backgroundColor: "var(--token-fbb606eb-e17b-428a-9dbb-6a2bf2de20a4, rgb(24, 24, 25))",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            boxShadow: "none",
            ...style
          },
          variants: {
            nNN9kttST: {
              backgroundColor: "var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(197, 249, 111))",
              boxShadow: "0px 4px 64px 0px rgba(194, 247, 114, 0.4)"
            }
          },
          ...addPropertyOverrides3({
            nNN9kttST: {
              "data-framer-name": "Best"
            }
          }, baseVariant, gestureVariant),
          children: [isDisplayed() && _jsx6(motion5.div, {
            className: "framer-pthlxt",
            "data-framer-name": "Tag",
            layoutDependency,
            layoutId: "ZvIpSedbl",
            style: {
              backgroundColor: "rgb(89, 108, 59)",
              borderBottomLeftRadius: 16,
              borderTopRightRadius: 16
            },
            children: <RichText3 __fromCanvasComponent className="framer-1q6ug3k" data-framer-name="Text" fonts={["Inter-SemiBold"]} layoutDependency={layoutDependency} layoutId="z3t27gV1y" style={{
              "--extracted-r6o4lv": "rgb(255, 255, 255)",
              "--framer-paragraph-spacing": "14px"
            }} verticalAlignment="top" withExternalLayout>{<React6.Fragment>{_jsx6(motion5.p, {
                  style: {
                    "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                    "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                    "--framer-font-size": "14px",
                    "--framer-font-weight": "600",
                    "--framer-line-height": "20px",
                    "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))"
                  },
                  children: "Most Popular"
                })}</React6.Fragment>}</RichText3>
          }), _jsxs3(motion5.div, {
            className: "framer-1n71oa2",
            "data-framer-name": "Header",
            layoutDependency,
            layoutId: "CPJQOmLY9",
            children: [_jsxs3(motion5.div, {
              className: "framer-141vxwj",
              "data-framer-name": "Frame 30",
              layoutDependency,
              layoutId: "znmf4Br3R",
              children: [<RichText3 __fromCanvasComponent className="framer-1tgpczw" data-framer-name="Price" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="UBQQlqNpn" style={{
                "--framer-paragraph-spacing": "0px"
              }} text={x4z6pi3Q6} variants={{
                nNN9kttST: {
                  "--extracted-a0htzi": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(10, 11, 10))"
                }
              }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides3({
                nNN9kttST: {
                  children: <React6.Fragment>{_jsx6(motion5.h3, {
                      className: "framer-styles-preset-19ujo0x",
                      "data-styles-preset": "UrNHzCTiy",
                      style: {
                        "--framer-text-color": "var(--extracted-a0htzi, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(10, 11, 10)))"
                      },
                      children: "790\u20AC"
                    })}</React6.Fragment>
                }
              }, baseVariant, gestureVariant)}>{<React6.Fragment>{_jsx6(motion5.h3, {
                    className: "framer-styles-preset-19ujo0x",
                    "data-styles-preset": "UrNHzCTiy",
                    children: "790\u20AC"
                  })}</React6.Fragment>}</RichText3>, _jsx6(motion5.div, {
                className: "framer-13uolsi",
                "data-framer-name": "year wrap",
                layoutDependency,
                layoutId: "RGxbiKQbz",
                children: <RichText3 __fromCanvasComponent className="framer-iy5gl7" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="GlNoBE4QP" style={{
                  "--framer-paragraph-spacing": "0px"
                }} variants={{
                  nNN9kttST: {
                    "--extracted-1lwpl3i": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(10, 11, 10))"
                  }
                }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides3({
                  nNN9kttST: {
                    children: <React6.Fragment>{_jsx6(motion5.h5, {
                        className: "framer-styles-preset-1e98430",
                        "data-styles-preset": "z4Urx0kPV",
                        style: {
                          "--framer-text-color": "var(--extracted-1lwpl3i, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(10, 11, 10)))"
                        },
                        children: "/yr"
                      })}</React6.Fragment>
                  }
                }, baseVariant, gestureVariant)}>{<React6.Fragment>{_jsx6(motion5.h5, {
                      className: "framer-styles-preset-1e98430",
                      "data-styles-preset": "z4Urx0kPV",
                      children: "/yr"
                    })}</React6.Fragment>}</RichText3>
              })]
            }), _jsxs3(motion5.div, {
              className: "framer-mfyb0m",
              "data-framer-name": "Heading and supporting text",
              layoutDependency,
              layoutId: "lLqyKc_Wz",
              children: [<RichText3 __fromCanvasComponent className="framer-1649kji" data-framer-name="Heading" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="laOlJvdM2" style={{
                "--framer-paragraph-spacing": "0px"
              }} text={Tz8hG8kuX} variants={{
                nNN9kttST: {
                  "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(10, 11, 10))"
                }
              }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides3({
                nNN9kttST: {
                  children: <React6.Fragment>{_jsx6(motion5.p, {
                      className: "framer-styles-preset-1sq323",
                      "data-styles-preset": "Wrgt1shwF",
                      style: {
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(10, 11, 10)))"
                      },
                      children: "Core"
                    })}</React6.Fragment>
                }
              }, baseVariant, gestureVariant)}>{<React6.Fragment>{_jsx6(motion5.p, {
                    className: "framer-styles-preset-1sq323",
                    "data-styles-preset": "Wrgt1shwF",
                    children: "Core"
                  })}</React6.Fragment>}</RichText3>, <RichText3 __fromCanvasComponent className="framer-yuqzpw" data-framer-name="Supporting text" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="W7HPpOJH9" style={{
                "--extracted-r6o4lv": "var(--token-2ae4d622-3758-4fad-a56d-08fa00cc7638, rgb(182, 182, 185))",
                "--framer-paragraph-spacing": "0px"
              }} text={Qanv3e3_O} variants={{
                nNN9kttST: {
                  "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(10, 11, 10))"
                }
              }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides3({
                nNN9kttST: {
                  children: <React6.Fragment>{_jsx6(motion5.p, {
                      className: "framer-styles-preset-1p8b08q",
                      "data-styles-preset": "UDEB09jjg",
                      style: {
                        "--framer-text-alignment": "center",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(10, 11, 10)))"
                      },
                      children: "Essential features for secure identity management."
                    })}</React6.Fragment>
                }
              }, baseVariant, gestureVariant)}>{<React6.Fragment>{_jsx6(motion5.p, {
                    className: "framer-styles-preset-1p8b08q",
                    "data-styles-preset": "UDEB09jjg",
                    style: {
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-2ae4d622-3758-4fad-a56d-08fa00cc7638, rgb(182, 182, 185)))"
                    },
                    children: "Essential features for secure identity management."
                  })}</React6.Fragment>}</RichText3>]
            })]
          }), _jsxs3(motion5.div, {
            className: "framer-nry2b0",
            "data-framer-name": "Content",
            layoutDependency,
            layoutId: "GenuaDkYI",
            children: [<ComponentViewportProvider2 width={`calc(${componentViewport?.width || "100vw"} - ${SdC3IHUXg * 2}px)`}>{_jsx6(motion5.div, {
                className: "framer-m1uzk6-container",
                layoutDependency,
                layoutId: "A8CeODsag-container",
                children: <P6yU1EFQs_default B8e5giMAo="var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(234, 234, 235))" height="100%" id="A8CeODsag" inSq_WnrT="Up to 50 users" layoutId="A8CeODsag" PiExLueGf="0px 0px 0px 0px" style={{
                  width: "100%"
                }} variant={MDqd__phv} VMnWb3StF="var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(197, 249, 111))" width="100%" {...addPropertyOverrides3({
                  nNN9kttST: {
                    B8e5giMAo: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(10, 11, 10))",
                    VMnWb3StF: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(10, 11, 10))"
                  }
                }, baseVariant, gestureVariant)} />
              })}</ComponentViewportProvider2>, <ComponentViewportProvider2 width={`calc(${componentViewport?.width || "100vw"} - ${SdC3IHUXg * 2}px)`}>{_jsx6(motion5.div, {
                className: "framer-11hah8-container",
                layoutDependency,
                layoutId: "GjSXtc1KZ-container",
                children: <P6yU1EFQs_default B8e5giMAo="var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(234, 234, 235))" height="100%" id="GjSXtc1KZ" inSq_WnrT="Basic identity and access management" layoutId="GjSXtc1KZ" PiExLueGf="0px 0px 0px 0px" style={{
                  width: "100%"
                }} variant={HV8ml1zvB} VMnWb3StF="var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(197, 249, 111))" width="100%" {...addPropertyOverrides3({
                  nNN9kttST: {
                    B8e5giMAo: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(10, 11, 10))",
                    VMnWb3StF: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(10, 11, 10))"
                  }
                }, baseVariant, gestureVariant)} />
              })}</ComponentViewportProvider2>, <ComponentViewportProvider2 width={`calc(${componentViewport?.width || "100vw"} - ${SdC3IHUXg * 2}px)`}>{_jsx6(motion5.div, {
                className: "framer-17xo3wk-container",
                layoutDependency,
                layoutId: "BvU2DvGoQ-container",
                children: <P6yU1EFQs_default B8e5giMAo="var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(234, 234, 235))" height="100%" id="BvU2DvGoQ" inSq_WnrT="Standard security features" layoutId="BvU2DvGoQ" PiExLueGf="0px 0px 0px 0px" style={{
                  width: "100%"
                }} variant={uP4enigWJ} VMnWb3StF="var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(197, 249, 111))" width="100%" {...addPropertyOverrides3({
                  nNN9kttST: {
                    B8e5giMAo: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(10, 11, 10))",
                    variant: "VURHk1q7I",
                    VMnWb3StF: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(10, 11, 10))"
                  }
                }, baseVariant, gestureVariant)} />
              })}</ComponentViewportProvider2>, <ComponentViewportProvider2 width={`calc(${componentViewport?.width || "100vw"} - ${SdC3IHUXg * 2}px)`}>{_jsx6(motion5.div, {
                className: "framer-1rg288b-container",
                layoutDependency,
                layoutId: "FAYusIaOK-container",
                children: <P6yU1EFQs_default B8e5giMAo="var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(234, 234, 235))" height="100%" id="FAYusIaOK" inSq_WnrT="Email support" layoutId="FAYusIaOK" PiExLueGf="0px 0px 0px 0px" style={{
                  width: "100%"
                }} variant={pgRnizZz6} VMnWb3StF="var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(197, 249, 111))" width="100%" {...addPropertyOverrides3({
                  nNN9kttST: {
                    B8e5giMAo: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(10, 11, 10))",
                    variant: "VURHk1q7I",
                    VMnWb3StF: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(10, 11, 10))"
                  }
                }, baseVariant, gestureVariant)} />
              })}</ComponentViewportProvider2>, <ComponentViewportProvider2 width={`calc(${componentViewport?.width || "100vw"} - ${SdC3IHUXg * 2}px)`}>{_jsx6(motion5.div, {
                className: "framer-w7f23e-container",
                layoutDependency,
                layoutId: "jBceI2zS8-container",
                children: <P6yU1EFQs_default B8e5giMAo="var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(234, 234, 235))" height="100%" id="jBceI2zS8" inSq_WnrT="Basic telemetry and reporting" layoutId="jBceI2zS8" PiExLueGf="0px 0px 0px 0px" style={{
                  width: "100%"
                }} variant={cMcOzUso_} VMnWb3StF="var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(197, 249, 111))" width="100%" {...addPropertyOverrides3({
                  nNN9kttST: {
                    B8e5giMAo: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(10, 11, 10))",
                    variant: "VURHk1q7I",
                    VMnWb3StF: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(10, 11, 10))"
                  }
                }, baseVariant, gestureVariant)} />
              })}</ComponentViewportProvider2>, <ComponentViewportProvider2 width={`calc(${componentViewport?.width || "100vw"} - ${SdC3IHUXg * 2}px)`}>{_jsx6(motion5.div, {
                className: "framer-hxizro-container",
                layoutDependency,
                layoutId: "A1o0T0cL7-container",
                children: <P6yU1EFQs_default B8e5giMAo="var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(234, 234, 235))" height="100%" id="A1o0T0cL7" inSq_WnrT="Private Assistance" layoutId="A1o0T0cL7" PiExLueGf="0px 0px 0px 0px" style={{
                  width: "100%"
                }} variant={u8PtWwE7E} VMnWb3StF="var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(197, 249, 111))" width="100%" {...addPropertyOverrides3({
                  nNN9kttST: {
                    VMnWb3StF: "var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(124, 124, 124))"
                  }
                }, baseVariant, gestureVariant)} />
              })}</ComponentViewportProvider2>, <ComponentViewportProvider2 width={`calc(${componentViewport?.width || "100vw"} - ${SdC3IHUXg * 2}px)`}>{_jsx6(motion5.div, {
                className: "framer-vglkgm-container",
                layoutDependency,
                layoutId: "GCXV4JhWT-container",
                children: <P6yU1EFQs_default B8e5giMAo="var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(234, 234, 235))" height="100%" id="GCXV4JhWT" inSq_WnrT="Unlimited Requests" layoutId="GCXV4JhWT" PiExLueGf="0px 0px 0px 0px" style={{
                  width: "100%"
                }} variant={nfSxsMfYW} VMnWb3StF="var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(197, 249, 111))" width="100%" {...addPropertyOverrides3({
                  nNN9kttST: {
                    VMnWb3StF: "var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(124, 124, 124))"
                  }
                }, baseVariant, gestureVariant)} />
              })}</ComponentViewportProvider2>, <ComponentViewportProvider2 width={`calc(${componentViewport?.width || "100vw"} - ${SdC3IHUXg * 2}px)`}>{_jsx6(motion5.div, {
                className: "framer-gbdbst-container",
                layoutDependency,
                layoutId: "Q_3may8yZ-container",
                children: <P6yU1EFQs_default B8e5giMAo="var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(234, 234, 235))" height="100%" id="Q_3may8yZ" inSq_WnrT="Standard security features" layoutId="Q_3may8yZ" PiExLueGf="0px 0px 0px 0px" style={{
                  width: "100%"
                }} variant={KGggzmhgx} VMnWb3StF="var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(197, 249, 111))" width="100%" {...addPropertyOverrides3({
                  nNN9kttST: {
                    VMnWb3StF: "var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(124, 124, 124))"
                  }
                }, baseVariant, gestureVariant)} />
              })}</ComponentViewportProvider2>]
          }), <ComponentViewportProvider2 width={`calc(${componentViewport?.width || "100vw"} - ${SdC3IHUXg * 2}px)`}>{_jsx6(motion5.div, {
              className: "framer-876kvp-container",
              layoutDependency,
              layoutId: "HbN7Yb0Cy-container",
              children: _jsx6(yZBQGZIRL_default, {
                height: "100%",
                id: "HbN7Yb0Cy",
                layoutId: "HbN7Yb0Cy",
                P7ZHYgc9n: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(10, 11, 10))",
                qzxtK1_9Y: "cal.com",
                RQDpSij6V: "rgb(197, 249, 111)",
                style: {
                  width: "100%"
                },
                TiAMtDaz3: "Get Started",
                variant: "llZeWFj0E",
                width: "100%",
                ...addPropertyOverrides3({
                  nNN9kttST: {
                    P7ZHYgc9n: "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))",
                    RQDpSij6V: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(10, 11, 10))",
                    variant: "tLEpsRpVS"
                  }
                }, baseVariant, gestureVariant)
              })
            })}</ComponentViewportProvider2>]
        })}</Transition3>}</Variants3>}</LayoutGroup3>;
});
var css10 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-AEVEQ.framer-yacrs8, .framer-AEVEQ .framer-yacrs8 { display: block; }", ".framer-AEVEQ.framer-z6o2ze { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: var(--14yv0k4); position: relative; width: 395px; }", ".framer-AEVEQ .framer-pthlxt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 5px; position: absolute; right: 0px; top: 0px; width: 112px; z-index: 1; }", ".framer-AEVEQ .framer-1q6ug3k, .framer-AEVEQ .framer-1tgpczw, .framer-AEVEQ .framer-iy5gl7 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-AEVEQ .framer-1n71oa2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-AEVEQ .framer-141vxwj { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-AEVEQ .framer-13uolsi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 8px 0px; position: relative; width: min-content; }", ".framer-AEVEQ .framer-mfyb0m { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-AEVEQ .framer-1649kji { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 331px; word-break: break-word; word-wrap: break-word; }", ".framer-AEVEQ .framer-yuqzpw { flex: none; height: auto; max-width: 276px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-AEVEQ .framer-nry2b0 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-AEVEQ .framer-m1uzk6-container, .framer-AEVEQ .framer-11hah8-container, .framer-AEVEQ .framer-17xo3wk-container, .framer-AEVEQ .framer-1rg288b-container, .framer-AEVEQ .framer-w7f23e-container, .framer-AEVEQ .framer-hxizro-container, .framer-AEVEQ .framer-vglkgm-container, .framer-AEVEQ .framer-gbdbst-container, .framer-AEVEQ .framer-876kvp-container { flex: none; height: auto; position: relative; width: 100%; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-AEVEQ.framer-z6o2ze, .framer-AEVEQ .framer-pthlxt, .framer-AEVEQ .framer-1n71oa2, .framer-AEVEQ .framer-141vxwj, .framer-AEVEQ .framer-13uolsi, .framer-AEVEQ .framer-mfyb0m, .framer-AEVEQ .framer-nry2b0 { gap: 0px; } .framer-AEVEQ.framer-z6o2ze > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-AEVEQ.framer-z6o2ze > :first-child, .framer-AEVEQ .framer-1n71oa2 > :first-child, .framer-AEVEQ .framer-mfyb0m > :first-child, .framer-AEVEQ .framer-nry2b0 > :first-child { margin-top: 0px; } .framer-AEVEQ.framer-z6o2ze > :last-child, .framer-AEVEQ .framer-1n71oa2 > :last-child, .framer-AEVEQ .framer-mfyb0m > :last-child, .framer-AEVEQ .framer-nry2b0 > :last-child { margin-bottom: 0px; } .framer-AEVEQ .framer-pthlxt > *, .framer-AEVEQ .framer-13uolsi > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-AEVEQ .framer-pthlxt > :first-child, .framer-AEVEQ .framer-141vxwj > :first-child, .framer-AEVEQ .framer-13uolsi > :first-child { margin-left: 0px; } .framer-AEVEQ .framer-pthlxt > :last-child, .framer-AEVEQ .framer-141vxwj > :last-child, .framer-AEVEQ .framer-13uolsi > :last-child { margin-right: 0px; } .framer-AEVEQ .framer-1n71oa2 > *, .framer-AEVEQ .framer-nry2b0 > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-AEVEQ .framer-141vxwj > * { margin: 0px; margin-left: calc(12px / 2); margin-right: calc(12px / 2); } .framer-AEVEQ .framer-mfyb0m > * { margin: 0px; margin-bottom: calc(4px / 2); margin-top: calc(4px / 2); } }", ...css2, ...css4, ...css3, ...css, '.framer-AEVEQ[data-border="true"]::after, .framer-AEVEQ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'];
var Framersr21IGsuy = withCSS4(Component4, css10, "framer-AEVEQ");
var sr21IGsuy_default = Framersr21IGsuy;
Framersr21IGsuy.displayName = "Pricing/Card";
Framersr21IGsuy.defaultProps = {
  height: 639,
  width: 395
};
addPropertyControls5(Framersr21IGsuy, {
  variant: {
    options: ["UrwkLTzY9", "nNN9kttST"],
    optionTitles: ["Dark", "Best"],
    title: "Variant",
    type: ControlType6.Enum
  },
  x4z6pi3Q6: {
    defaultValue: "790\u20AC",
    displayTextArea: false,
    title: "Price",
    type: ControlType6.String
  },
  Tz8hG8kuX: {
    defaultValue: "Core",
    displayTextArea: false,
    title: "Plan",
    type: ControlType6.String
  },
  Qanv3e3_O: {
    defaultValue: "Essential features for secure identity management.",
    displayTextArea: false,
    title: "Description",
    type: ControlType6.String
  },
  MDqd__phv: PricingFeaturesControls?.["variant"] && {
    ...PricingFeaturesControls["variant"],
    defaultValue: "VURHk1q7I",
    description: void 0,
    hidden: void 0,
    title: "Feature type 1"
  },
  HV8ml1zvB: PricingFeaturesControls?.["variant"] && {
    ...PricingFeaturesControls["variant"],
    defaultValue: "VURHk1q7I",
    description: void 0,
    hidden: void 0,
    title: "Feature type 2"
  },
  uP4enigWJ: PricingFeaturesControls?.["variant"] && {
    ...PricingFeaturesControls["variant"],
    defaultValue: "yqVL7bhyU",
    description: void 0,
    hidden: void 0,
    title: "Feature type 3"
  },
  pgRnizZz6: PricingFeaturesControls?.["variant"] && {
    ...PricingFeaturesControls["variant"],
    defaultValue: "yqVL7bhyU",
    description: void 0,
    hidden: void 0,
    title: "Feature type 4"
  },
  cMcOzUso_: PricingFeaturesControls?.["variant"] && {
    ...PricingFeaturesControls["variant"],
    defaultValue: "yqVL7bhyU",
    description: void 0,
    hidden: void 0,
    title: "Feature type 5"
  },
  u8PtWwE7E: PricingFeaturesControls?.["variant"] && {
    ...PricingFeaturesControls["variant"],
    defaultValue: "yqVL7bhyU",
    description: void 0,
    hidden: void 0,
    title: "Feature type 6"
  },
  nfSxsMfYW: PricingFeaturesControls?.["variant"] && {
    ...PricingFeaturesControls["variant"],
    defaultValue: "yqVL7bhyU",
    description: void 0,
    hidden: void 0,
    title: "Feature type 7"
  },
  KGggzmhgx: PricingFeaturesControls?.["variant"] && {
    ...PricingFeaturesControls["variant"],
    defaultValue: "yqVL7bhyU",
    description: void 0,
    hidden: void 0,
    title: "Feature type 8"
  },
  SdC3IHUXg: {
    defaultValue: "40px 30px 40px 30px",
    title: "Padding",
    type: ControlType6.Padding
  }
});
addFonts3(Framersr21IGsuy, [{
  explicitInter: true,
  fonts: [{
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
    url: "https://app.framerstatic.com/Inter-SemiBold.cyrillic-ext-C7KWUKA7.woff2",
    weight: "600"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
    url: "https://app.framerstatic.com/Inter-SemiBold.cyrillic-JWV7SOZ6.woff2",
    weight: "600"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+1F00-1FFF",
    url: "https://app.framerstatic.com/Inter-SemiBold.greek-ext-FBKSFTSU.woff2",
    weight: "600"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0370-03FF",
    url: "https://app.framerstatic.com/Inter-SemiBold.greek-EQ3PSENU.woff2",
    weight: "600"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
    url: "https://app.framerstatic.com/Inter-SemiBold.latin-ext-ULRSO3ZR.woff2",
    weight: "600"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    url: "https://app.framerstatic.com/Inter-SemiBold.latin-RDYY2AG2.woff2",
    weight: "600"
  }, {
    family: "Inter",
    source: "framer",
    style: "normal",
    unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
    url: "https://app.framerstatic.com/Inter-SemiBold.vietnamese-ESQNSEQ3.woff2",
    weight: "600"
  }, {
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
}, ...PricingFeaturesFonts, ...ButtonFonts, ...getFontsFromSharedStyle3(fonts2), ...getFontsFromSharedStyle3(fonts4), ...getFontsFromSharedStyle3(fonts3), ...getFontsFromSharedStyle3(fonts)], {
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
      "name": "Framersr21IGsuy",
      "slots": [],
      "annotations": {
        "framerImmutableVariables": "true",
        "framerDisplayContentsDiv": "false",
        "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"nNN9kttST":{"layout":["fixed","auto"]}}}',
        "framerContractVersion": "1",
        "framerVariables": '{"x4z6pi3Q6":"price","Tz8hG8kuX":"plan","Qanv3e3_O":"description","MDqd__phv":"featureType1","HV8ml1zvB":"featureType2","uP4enigWJ":"featureType3","pgRnizZz6":"featureType4","cMcOzUso_":"featureType5","u8PtWwE7E":"featureType6","nfSxsMfYW":"featureType7","KGggzmhgx":"featureType8","SdC3IHUXg":"padding"}',
        "framerIntrinsicWidth": "395",
        "framerComponentViewportWidth": "true",
        "framerIntrinsicHeight": "639"
      }
    },
    "__FramerMetadata__": {
      "type": "variable"
    }
  }
};
var _OriginalComponent = sr21IGsuy_default;
function PricingCardWrapped(props) {
  var _variant = useVariant(props.variant);
  var _inner = (_variant !== undefined) ? { ...props, variant: _variant } : props;
  return _ctxJsx(ContextProviders, { children: _ctxJsx(_OriginalComponent, _inner) });
}
Object.assign(PricingCardWrapped, _OriginalComponent);
export {  __FramerMetadata__,  PricingCardWrapped as default   };