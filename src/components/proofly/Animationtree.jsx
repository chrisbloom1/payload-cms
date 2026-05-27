"use client"
// http-url:https://framerusercontent.com/modules/qYpbp11NIRijpBix4thv/EFgJXxfiOQMms8Vl3h1i/t57Caovbd.js
import { jsx as _jsx8, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls as addPropertyControls8, ControlType as ControlType8, cx as cx8, getFonts, RichText, SVG as SVG8, useComponentViewport, useLocaleInfo, useVariantState, withCSS as withCSS8, withFX } from "@proofly-framer/runtime";
import { LayoutGroup, motion as motion8, MotionConfigContext } from "@proofly-framer/runtime";
import * as React8 from "react";
import { useRef } from "react";

// Extracted SVG assets
const __svg_1 = '<svg display="block" role="presentation" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><g d="M 24.889 32 L 12.444 24.889 L 0 32 L 0 3.556 C 0 1.592 1.592 0 3.556 0 L 21.333 0 C 23.297 0 24.889 1.592 24.889 3.556 Z M 7.111 12.444 L 10.667 16 L 17.778 8.889" fill="transparent" height="32px" id="WQbVAwltU" transform="translate(6 2)" width="24.888888888888914px"><path d="M 24.889 32 L 12.444 24.889 L 0 32 L 0 3.556 C 0 1.592 1.592 0 3.556 0 L 21.333 0 C 23.297 0 24.889 1.592 24.889 3.556 Z" fill="transparent" height="32px" id="VbIHRVvW9" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--urmpk, 1)" stroke="var(--17yrnt4, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))" width="24.888888888888914px"/><path d="M 0 3.556 L 3.556 7.111 L 10.667 0" fill="transparent" height="7.111111111111111px" id="V7ETfpOSa" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--urmpk, 1)" stroke="var(--17yrnt4, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))" transform="translate(7.111 8.889)" width="10.666666666666742px"/></g></svg>';
const __svg_2 = '<svg display="block" role="presentation" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><path d="M 21.66 14.868 C 21.035 15.493 21.035 16.507 21.66 17.132 L 25.463 20.936 C 26.088 21.561 27.101 21.561 27.727 20.936 L 31.531 17.132 C 32.156 16.507 32.156 15.493 31.531 14.868 L 27.727 11.064 C 27.101 10.439 26.088 10.439 25.463 11.064 Z M 0.469 14.868 C -0.156 15.493 -0.156 16.507 0.469 17.132 L 4.273 20.936 C 4.899 21.561 5.912 21.561 6.537 20.936 L 10.342 17.132 C 10.966 16.507 10.966 15.493 10.342 14.868 L 6.537 11.064 C 5.912 10.439 4.899 10.439 4.273 11.064 Z M 11.064 25.463 C 10.763 25.763 10.594 26.171 10.594 26.596 C 10.594 27.02 10.763 27.428 11.064 27.728 L 14.868 31.531 C 15.493 32.156 16.507 32.156 17.132 31.531 L 20.936 27.728 C 21.237 27.428 21.406 27.02 21.406 26.596 C 21.406 26.171 21.237 25.763 20.936 25.463 L 17.132 21.66 C 16.507 21.035 15.493 21.035 14.868 21.66 Z M 11.064 4.273 C 10.439 4.899 10.439 5.912 11.064 6.537 L 14.868 10.34 C 15.493 10.965 16.507 10.965 17.132 10.34 L 20.936 6.537 C 21.561 5.912 21.561 4.899 20.936 4.273 L 17.132 0.469 C 16.507 -0.156 15.493 -0.156 14.868 0.469 Z" fill="transparent" height="32.00000071829613px" id="o8ct4xr08" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--urmpk, 1)" stroke="var(--17yrnt4, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))" transform="translate(2 2)" width="32.00000071829616px"/></svg>';
const __svg_3 = '<svg display="block" role="presentation" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><path d="M 20.316 6.885 C 19.707 7.507 19.707 8.502 20.316 9.124 L 22.876 11.684 C 23.498 12.293 24.493 12.293 25.115 11.684 L 30.084 6.717 C 30.596 6.202 31.464 6.365 31.656 7.066 C 32.643 10.654 31.466 14.489 28.637 16.907 C 25.807 19.325 21.835 19.889 18.445 18.354 L 5.791 31.007 C 4.466 32.332 2.318 32.332 0.993 31.007 C -0.331 29.681 -0.331 27.533 0.994 26.209 L 13.647 13.555 C 12.113 10.165 12.677 6.193 15.095 3.363 C 17.512 0.534 21.348 -0.643 24.936 0.344 C 25.637 0.536 25.8 1.403 25.286 1.918 Z" fill="transparent" height="32.00079982473413px" id="XxsuMo6Un" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--urmpk, 1)" stroke="var(--17yrnt4, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))" transform="translate(2 2)" width="32px"/></svg>';
const __svg_4 = '<svg display="block" role="presentation" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><g d="M 8 13.354 L 1.552 17.394 C 0.591 17.996 0.002 19.079 0 20.248 L 0 25.657 C 0.002 26.826 0.591 27.909 1.552 28.511 L 6.352 31.516 C 7.366 32.152 8.634 32.152 9.648 31.516 L 16 27.543 L 16 18.362 M 8 23.37 L 0.416 18.612 M 8 23.37 L 16 18.362 M 8 23.37 L 8 32 M 16 18.362 L 16 27.543 L 22.352 31.516 C 23.366 32.152 24.634 32.152 25.648 31.516 L 30.448 28.511 C 31.409 27.909 31.998 26.826 32 25.657 L 32 20.248 C 31.998 19.079 31.409 17.996 30.448 17.394 L 24 13.354 M 24 23.37 L 16 18.362 M 24 23.37 L 31.584 18.612 M 24 23.37 L 24 32 M 9.552 3.481 C 8.591 4.084 8.002 5.167 8 6.336 L 8 13.631 L 16 18.638 L 24 13.631 L 24 6.336 C 23.998 5.167 23.409 4.084 22.448 3.481 L 17.648 0.477 C 16.634 -0.159 15.366 -0.159 14.352 0.477 Z M 16 9.457 L 8.416 4.7 M 16 9.457 L 23.584 4.7 M 16 18.638 L 16 9.457" fill="transparent" height="31.99999989579471px" id="ZXWJnCU0j" transform="translate(2 2)" width="32px"><path d="M 8 0 L 1.552 4.04 C 0.591 4.642 0.002 5.725 0 6.894 L 0 12.303 C 0.002 13.472 0.591 14.555 1.552 15.157 L 6.352 18.162 C 7.366 18.797 8.634 18.797 9.648 18.162 L 16 14.189 L 16 5.008 M 8 10.016 L 0.416 5.258 M 8 10.016 L 16 5.008 M 8 10.016 L 8 18.646 M 16 5.008 L 16 14.189 L 22.352 18.162 C 23.366 18.797 24.634 18.797 25.648 18.162 L 30.448 15.157 C 31.409 14.555 31.998 13.472 32 12.303 L 32 6.894 C 31.998 5.725 31.409 4.642 30.448 4.04 L 24 0 M 24 10.016 L 16 5.008 M 24 10.016 L 31.584 5.258 M 24 10.016 L 24 18.646" fill="transparent" height="18.64580143998416px" id="cESgeJQau" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--urmpk, 1)" stroke="var(--17yrnt4, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))" transform="translate(0 13.354)" width="32px"/><path d="M 1.552 3.481 C 0.591 4.084 0.002 5.167 0 6.336 L 0 13.631 L 8 18.638 L 16 13.631 L 16 6.336 C 15.998 5.167 15.409 4.084 14.448 3.481 L 9.648 0.477 C 8.634 -0.159 7.366 -0.159 6.352 0.477 Z M 8 9.457 L 0.416 4.7 M 8 9.457 L 15.584 4.7 M 8 18.638 L 8 9.457" fill="transparent" height="18.638490910969075px" id="ZmEi4on1A" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--urmpk, 1)" stroke="var(--17yrnt4, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))" transform="translate(8 0)" width="16px"/></g></svg>';
const __svg_5 = '<svg display="block" role="presentation" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><path d="M 19.744 4.119 C 20.745 4.619 21.922 4.619 22.923 4.119 L 29.428 0.866 C 29.979 0.59 30.634 0.62 31.158 0.945 C 31.682 1.269 32.001 1.842 32 2.459 L 32 25.15 C 32 25.823 31.619 26.439 31.017 26.74 L 22.923 30.788 C 21.922 31.288 20.745 31.288 19.744 30.788 L 12.256 27.044 C 11.255 26.544 10.078 26.544 9.077 27.044 L 2.572 30.297 C 2.021 30.573 1.365 30.543 0.841 30.218 C 0.317 29.893 -0.002 29.319 0 28.702 L 0 6.012 C 0 5.339 0.381 4.724 0.983 4.423 L 9.077 0.375 C 10.078 -0.125 11.255 -0.125 12.256 0.375 Z M 21.333 4.494 L 21.333 31.161 M 10.667 0 L 10.667 26.667" fill="transparent" height="31.162538770137864px" id="BNhiuIpvx" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--urmpk, 1)" stroke="var(--17yrnt4, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))" transform="translate(2 2)" width="32px"/></svg>';
const __svg_6 = '<svg display="block" role="presentation" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><g d="M 16 28.8 C 23.069 28.8 28.8 23.069 28.8 16 C 28.8 8.931 23.069 3.2 16 3.2 C 8.931 3.2 3.2 8.931 3.2 16 C 3.2 23.069 8.931 28.8 16 28.8 Z M 16 19.2 C 17.767 19.2 19.2 17.767 19.2 16 C 19.2 14.233 17.767 12.8 16 12.8 C 14.233 12.8 12.8 14.233 12.8 16 C 12.8 17.767 14.233 19.2 16 19.2 Z M 16 0 L 16 3.2 M 16 32 L 16 28.8 M 24 29.856 L 22.4 27.088 M 14.4 13.232 L 8 2.144 M 29.856 24 L 27.088 22.4 M 2.144 8 L 4.912 9.6 M 19.2 16 L 32 16 M 0 16 L 3.2 16 M 29.856 8 L 27.088 9.6 M 2.144 24 L 4.912 22.4 M 24 2.144 L 22.4 4.912 M 14.4 18.768 L 8 29.856" fill="transparent" height="32.000001144409px" id="Z9hrnka8S" transform="translate(2 2)" width="31.999998855590775px"><path d="M 12.8 25.6 C 19.869 25.6 25.6 19.869 25.6 12.8 C 25.6 5.731 19.869 0 12.8 0 C 5.731 0 0 5.731 0 12.8 C 0 19.869 5.731 25.6 12.8 25.6 Z" fill="transparent" height="25.600000000000023px" id="fNaS7cN7b" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--urmpk, 1)" stroke="var(--17yrnt4, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))" transform="translate(3.2 3.2)" width="25.600000000000023px"/><path d="M 16 19.2 C 17.767 19.2 19.2 17.767 19.2 16 C 19.2 14.233 17.767 12.8 16 12.8 C 14.233 12.8 12.8 14.233 12.8 16 C 12.8 17.767 14.233 19.2 16 19.2 Z M 16 0 L 16 3.2 M 16 32 L 16 28.8 M 24 29.856 L 22.4 27.088 M 14.4 13.232 L 8 2.144 M 29.856 24 L 27.088 22.4 M 2.144 8 L 4.912 9.6 M 19.2 16 L 32 16 M 0 16 L 3.2 16 M 29.856 8 L 27.088 9.6 M 2.144 24 L 4.912 22.4 M 24 2.144 L 22.4 4.912 M 14.4 18.768 L 8 29.856" fill="transparent" height="32.000001144409px" id="rW82Cmejq" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--urmpk, 1)" stroke="var(--17yrnt4, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))" width="31.999998855590775px"/></g></svg>';
const __svg_7 = '<svg display="block" role="presentation" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><g d="M 20.8 22.4 L 24 25.6 L 30.4 19.2 M 28.8 12.797 L 28.8 9.597 C 28.799 8.455 28.189 7.4 27.2 6.829 L 16 0.429 C 15.01 -0.143 13.79 -0.143 12.8 0.429 L 1.6 6.829 C 0.611 7.4 0.001 8.455 0 9.597 L 0 22.397 C 0.001 23.539 0.611 24.594 1.6 25.165 L 12.8 31.565 C 13.79 32.136 15.01 32.136 16 31.565 L 19.2 29.741 M 7.2 3.629 L 21.6 11.869 M 0.8 8 L 14.736 16 L 28.672 8 M 14.736 32 L 14.736 16" fill="transparent" height="32px" id="az29_JDWk" transform="translate(3 2)" width="30.400001144409174px"><path d="M 0 3.2 L 3.2 6.4 L 9.6 0" fill="transparent" height="6.400000000000002px" id="xqydMRjqP" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--urmpk, 1)" stroke="var(--17yrnt4, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))" transform="translate(20.8 19.2)" width="9.599999999999994px"/><path d="M 28.8 12.797 L 28.8 9.597 C 28.799 8.455 28.189 7.4 27.2 6.829 L 16 0.429 C 15.01 -0.143 13.79 -0.143 12.8 0.429 L 1.6 6.829 C 0.611 7.4 0.001 8.455 0 9.597 L 0 22.397 C 0.001 23.539 0.611 24.594 1.6 25.165 L 12.8 31.565 C 13.79 32.136 15.01 32.136 16 31.565 L 19.2 29.741 M 7.2 3.629 L 21.6 11.869" fill="transparent" height="31.99343741577959px" id="dgIGdoGDW" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--urmpk, 1)" stroke="var(--17yrnt4, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))" width="28.80000000000001px"/><path d="M 0 0 L 13.936 8 L 27.872 0 M 13.936 24 L 13.936 8" fill="transparent" height="24px" id="fcbqraofJ" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--urmpk, 1)" stroke="var(--17yrnt4, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))" transform="translate(0.8 8)" width="27.8720000059605px"/></g></svg>';
const __svg_8 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 288 198" overflow="visible"><path d="M 0 16 C 0 7.163 7.163 0 16 0 L 272 0 C 280.837 0 288 7.163 288 16 L 288 182 C 288 190.837 280.837 198 272 198 L 16 198 C 7.163 198 0 190.837 0 182 Z" fill="transparent" stroke-width="2" stroke="var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62)) /* {&quot;name&quot;:&quot;SERVICE&quot;} */"></path></svg>';
const __svg_9 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 160" overflow="visible"><path d="M 0 0 L 0 160" fill="transparent" stroke-width="2" stroke="var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62)) /* {&quot;name&quot;:&quot;SERVICE&quot;} */"></path></svg>';
const __svg_10 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 358 242\" overflow=\"visible\"><path d=\"M 0 24 C 0 10.745 10.745 0 24 0 L 334 0 C 347.255 0 358 10.745 358 24 L 358 218 C 358 231.255 347.255 242 334 242 L 24 242 C 10.745 242 0 231.255 0 218 Z\" fill=\"transparent\" stroke-width=\"2\" stroke=\"var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62)) /* {&quot;name&quot;:&quot;SERVICE&quot;} */\"></path></svg>";
const __svg_11 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 1 194\" overflow=\"visible\"><path d=\"M 0 0 L 0 194\" fill=\"transparent\" stroke-width=\"2\" stroke=\"var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62)) /* {&quot;name&quot;:&quot;SERVICE&quot;} */\"></path></svg>";
const __svg_12 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 25 18\" overflow=\"visible\"><path d=\"M 23.422 4.03 L 15.678 11.715 L 19.869 1.675 L 17.807 0.827 L 13.616 10.867 L 13.616 0 L 11.384 0 L 11.384 10.867 L 7.193 0.827 L 5.131 1.675 L 9.322 11.715 L 1.578 4.03 L 0 5.596 L 12.5 18 L 25 5.596 Z\" fill=\"rgb(245,244,250)\"></path></svg>";


// http-url:https://framerusercontent.com/modules/FatiJ5QCh3m6kq9hBfmE/TRONfUaHBnWDnwkPCDh3/hhIXF2Zqp.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addPropertyControls, ControlType, cx, motion, useSVGTemplate, withCSS } from "@proofly-framer/runtime";
import * as React from "react";
import { forwardRef as forwardRef2 } from "react";
var mask = "var(--framer-icon-mask)";
var Base = forwardRef2(function (props, ref) {
  return <svg {...props} ref={ref}>{props.children}</svg>;
});
var MotionSVG = motion.create(Base);
var SVG = forwardRef2((props, ref) => {
  const {
    animated,
    layoutId,
    children,
    ...rest
  } = props;
  return animated ? <MotionSVG {...rest} layoutId={layoutId} ref={ref}>{children}</MotionSVG> : <svg {...rest} ref={ref}>{children}</svg>;
});
var svg = __svg_1;
var getProps = ({
  height,
  id,
  strokeWidth,
  vectorColor,
  width,
  ...props
}) => {
  return {
    ...props,
    aehKIzIL6: strokeWidth ?? props.aehKIzIL6 ?? 1,
    oCwLU7ISg: vectorColor ?? props.oCwLU7ISg ?? "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
  };
};
var Component = React.forwardRef(function (props, ref) {
  const {
    style,
    className,
    layoutId,
    variant,
    oCwLU7ISg,
    aehKIzIL6,
    ...restProps
  } = getProps(props);
  const href = useSVGTemplate("4238367726", svg);
  return <SVG {...restProps} className={cx("framer-sIyTe", className)} layoutId={layoutId} ref={ref} role="presentation" style={{
    "--17yrnt4": oCwLU7ISg,
    "--urmpk": aehKIzIL6,
    ...style
  }} viewBox="0 0 36 36">{<use href={href} />}</SVG>;
});
var css = [`.framer-sIyTe { -webkit-mask: ${mask}; aspect-ratio: 1; display: block; mask: ${mask}; width: 36px; }`];
var Icon = withCSS(Component, css, "framer-sIyTe");
Icon.displayName = "brand";
var hhIXF2Zqp_default = Icon;
addPropertyControls(Icon, {
  oCwLU7ISg: {
    defaultValue: 'var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))',
    hidden: false,
    title: "vector color",
    type: ControlType.Color
  },
  aehKIzIL6: {
    defaultValue: 1,
    hidden: false,
    min: 0,
    title: "stroke width",
    type: ControlType.Number
  }
});

// http-url:https://framerusercontent.com/modules/YfEYT8QkrGDaS9Lb0skA/BXDs6cAYAOGiPxX3IeBQ/IHS33mEeO.js
import { jsx as _jsx2 } from "react/jsx-runtime";
import { addPropertyControls as addPropertyControls2, ControlType as ControlType2, cx as cx2, motion as motion2, useSVGTemplate as useSVGTemplate2, withCSS as withCSS2 } from "@proofly-framer/runtime";
import * as React2 from "react";
import { forwardRef as forwardRef4 } from "react";
var mask2 = "var(--framer-icon-mask)";
var Base2 = forwardRef4(function (props, ref) {
  return <svg {...props} ref={ref}>{props.children}</svg>;
});
var MotionSVG2 = motion2.create(Base2);
var SVG2 = forwardRef4((props, ref) => {
  const {
    animated,
    layoutId,
    children,
    ...rest
  } = props;
  return animated ? <MotionSVG2 {...rest} layoutId={layoutId} ref={ref}>{children}</MotionSVG2> : <svg {...rest} ref={ref}>{children}</svg>;
});
var svg2 = __svg_2;
var getProps2 = ({
  height,
  id,
  strokeWidth,
  vectorColor,
  width,
  ...props
}) => {
  return {
    ...props,
    aehKIzIL6: strokeWidth ?? props.aehKIzIL6 ?? 1,
    oCwLU7ISg: vectorColor ?? props.oCwLU7ISg ?? "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
  };
};
var Component2 = React2.forwardRef(function (props, ref) {
  const {
    style,
    className,
    layoutId,
    variant,
    oCwLU7ISg,
    aehKIzIL6,
    ...restProps
  } = getProps2(props);
  const href = useSVGTemplate2("1284345466", svg2);
  return <SVG2 {...restProps} className={cx2("framer-b4RVU", className)} layoutId={layoutId} ref={ref} role="presentation" style={{
    "--17yrnt4": oCwLU7ISg,
    "--urmpk": aehKIzIL6,
    ...style
  }} viewBox="0 0 36 36">{<use href={href} />}</SVG2>;
});
var css2 = [`.framer-b4RVU { -webkit-mask: ${mask2}; aspect-ratio: 1; display: block; mask: ${mask2}; width: 36px; }`];
var Icon2 = withCSS2(Component2, css2, "framer-b4RVU");
Icon2.displayName = "component";
var IHS33mEeO_default = Icon2;
addPropertyControls2(Icon2, {
  oCwLU7ISg: {
    defaultValue: 'var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))',
    hidden: false,
    title: "vector color",
    type: ControlType2.Color
  },
  aehKIzIL6: {
    defaultValue: 1,
    hidden: false,
    min: 0,
    title: "stroke width",
    type: ControlType2.Number
  }
});

// http-url:https://framerusercontent.com/modules/JJWbXhmygT9aKZIdWP4K/YTGyh7S1apQZtHDtviDl/iUev6L3gl.js
import { jsx as _jsx3 } from "react/jsx-runtime";
import { addPropertyControls as addPropertyControls3, ControlType as ControlType3, cx as cx3, motion as motion3, useSVGTemplate as useSVGTemplate3, withCSS as withCSS3 } from "@proofly-framer/runtime";
import * as React3 from "react";
import { forwardRef as forwardRef6 } from "react";
var mask3 = "var(--framer-icon-mask)";
var Base3 = forwardRef6(function (props, ref) {
  return <svg {...props} ref={ref}>{props.children}</svg>;
});
var MotionSVG3 = motion3.create(Base3);
var SVG3 = forwardRef6((props, ref) => {
  const {
    animated,
    layoutId,
    children,
    ...rest
  } = props;
  return animated ? <MotionSVG3 {...rest} layoutId={layoutId} ref={ref}>{children}</MotionSVG3> : <svg {...rest} ref={ref}>{children}</svg>;
});
var svg3 = __svg_3;
var getProps3 = ({
  height,
  id,
  strokeWidth,
  vectorColor,
  width,
  ...props
}) => {
  return {
    ...props,
    aehKIzIL6: strokeWidth ?? props.aehKIzIL6 ?? 1,
    oCwLU7ISg: vectorColor ?? props.oCwLU7ISg ?? "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
  };
};
var Component3 = React3.forwardRef(function (props, ref) {
  const {
    style,
    className,
    layoutId,
    variant,
    oCwLU7ISg,
    aehKIzIL6,
    ...restProps
  } = getProps3(props);
  const href = useSVGTemplate3("2658297464", svg3);
  return <SVG3 {...restProps} className={cx3("framer-gfMgn", className)} layoutId={layoutId} ref={ref} role="presentation" style={{
    "--17yrnt4": oCwLU7ISg,
    "--urmpk": aehKIzIL6,
    ...style
  }} viewBox="0 0 36 36">{<use href={href} />}</SVG3>;
});
var css3 = [`.framer-gfMgn { -webkit-mask: ${mask3}; aspect-ratio: 1; display: block; mask: ${mask3}; width: 36px; }`];
var Icon3 = withCSS3(Component3, css3, "framer-gfMgn");
Icon3.displayName = "wrench";
var iUev6L3gl_default = Icon3;
addPropertyControls3(Icon3, {
  oCwLU7ISg: {
    defaultValue: 'var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))',
    hidden: false,
    title: "vector color",
    type: ControlType3.Color
  },
  aehKIzIL6: {
    defaultValue: 1,
    hidden: false,
    min: 0,
    title: "stroke width",
    type: ControlType3.Number
  }
});

// http-url:https://framerusercontent.com/modules/nPZNmBm82sghbKZaTNBL/beaKAnCSLDEORdNVZkqL/kZLRHbEEz.js
import { jsx as _jsx4 } from "react/jsx-runtime";
import { addPropertyControls as addPropertyControls4, ControlType as ControlType4, cx as cx4, motion as motion4, useSVGTemplate as useSVGTemplate4, withCSS as withCSS4 } from "@proofly-framer/runtime";
import * as React4 from "react";
import { forwardRef as forwardRef8 } from "react";
var mask4 = "var(--framer-icon-mask)";
var Base4 = forwardRef8(function (props, ref) {
  return <svg {...props} ref={ref}>{props.children}</svg>;
});
var MotionSVG4 = motion4.create(Base4);
var SVG4 = forwardRef8((props, ref) => {
  const {
    animated,
    layoutId,
    children,
    ...rest
  } = props;
  return animated ? <MotionSVG4 {...rest} layoutId={layoutId} ref={ref}>{children}</MotionSVG4> : <svg {...rest} ref={ref}>{children}</svg>;
});
var svg4 = __svg_4;
var getProps4 = ({
  height,
  id,
  strokeWidth,
  vectorColor,
  width,
  ...props
}) => {
  return {
    ...props,
    aehKIzIL6: strokeWidth ?? props.aehKIzIL6 ?? 1,
    oCwLU7ISg: vectorColor ?? props.oCwLU7ISg ?? "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
  };
};
var Component4 = React4.forwardRef(function (props, ref) {
  const {
    style,
    className,
    layoutId,
    variant,
    oCwLU7ISg,
    aehKIzIL6,
    ...restProps
  } = getProps4(props);
  const href = useSVGTemplate4("268734193", svg4);
  return <SVG4 {...restProps} className={cx4("framer-zFw1B", className)} layoutId={layoutId} ref={ref} role="presentation" style={{
    "--17yrnt4": oCwLU7ISg,
    "--urmpk": aehKIzIL6,
    ...style
  }} viewBox="0 0 36 36">{<use href={href} />}</SVG4>;
});
var css4 = [`.framer-zFw1B { -webkit-mask: ${mask4}; aspect-ratio: 1; display: block; mask: ${mask4}; width: 36px; }`];
var Icon4 = withCSS4(Component4, css4, "framer-zFw1B");
Icon4.displayName = "boxes";
var kZLRHbEEz_default = Icon4;
addPropertyControls4(Icon4, {
  oCwLU7ISg: {
    defaultValue: 'var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))',
    hidden: false,
    title: "vector color",
    type: ControlType4.Color
  },
  aehKIzIL6: {
    defaultValue: 1,
    hidden: false,
    min: 0,
    title: "stroke width",
    type: ControlType4.Number
  }
});

// http-url:https://framerusercontent.com/modules/7rMKhwjILRRjkpvpuA9s/qAKYS9dAUJ7DUBA1iA57/MXmhQfjAM.js
import { jsx as _jsx5 } from "react/jsx-runtime";
import { addPropertyControls as addPropertyControls5, ControlType as ControlType5, cx as cx5, motion as motion5, useSVGTemplate as useSVGTemplate5, withCSS as withCSS5 } from "@proofly-framer/runtime";
import * as React5 from "react";
import { forwardRef as forwardRef10 } from "react";
var mask5 = "var(--framer-icon-mask)";
var Base5 = forwardRef10(function (props, ref) {
  return <svg {...props} ref={ref}>{props.children}</svg>;
});
var MotionSVG5 = motion5.create(Base5);
var SVG5 = forwardRef10((props, ref) => {
  const {
    animated,
    layoutId,
    children,
    ...rest
  } = props;
  return animated ? <MotionSVG5 {...rest} layoutId={layoutId} ref={ref}>{children}</MotionSVG5> : <svg {...rest} ref={ref}>{children}</svg>;
});
var svg5 = __svg_5;
var getProps5 = ({
  height,
  id,
  strokeWidth,
  vectorColor,
  width,
  ...props
}) => {
  return {
    ...props,
    aehKIzIL6: strokeWidth ?? props.aehKIzIL6 ?? 1,
    oCwLU7ISg: vectorColor ?? props.oCwLU7ISg ?? "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
  };
};
var Component5 = React5.forwardRef(function (props, ref) {
  const {
    style,
    className,
    layoutId,
    variant,
    oCwLU7ISg,
    aehKIzIL6,
    ...restProps
  } = getProps5(props);
  const href = useSVGTemplate5("3086703992", svg5);
  return <SVG5 {...restProps} className={cx5("framer-D6C6T", className)} layoutId={layoutId} ref={ref} role="presentation" style={{
    "--17yrnt4": oCwLU7ISg,
    "--urmpk": aehKIzIL6,
    ...style
  }} viewBox="0 0 36 36">{<use href={href} />}</SVG5>;
});
var css5 = [`.framer-D6C6T { -webkit-mask: ${mask5}; aspect-ratio: 1; display: block; mask: ${mask5}; width: 36px; }`];
var Icon5 = withCSS5(Component5, css5, "framer-D6C6T");
Icon5.displayName = "engineering";
var MXmhQfjAM_default = Icon5;
addPropertyControls5(Icon5, {
  oCwLU7ISg: {
    defaultValue: 'var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))',
    hidden: false,
    title: "vector color",
    type: ControlType5.Color
  },
  aehKIzIL6: {
    defaultValue: 1,
    hidden: false,
    min: 0,
    title: "stroke width",
    type: ControlType5.Number
  }
});

// http-url:https://framerusercontent.com/modules/0a41ni2V5fVZIn5RPbep/tDE9YZNAVwozowbpgK4p/S_bPD60mp.js
import { jsx as _jsx6 } from "react/jsx-runtime";
import { addPropertyControls as addPropertyControls6, ControlType as ControlType6, cx as cx6, motion as motion6, useSVGTemplate as useSVGTemplate6, withCSS as withCSS6 } from "@proofly-framer/runtime";
import * as React6 from "react";
import { forwardRef as forwardRef12 } from "react";
var mask6 = "var(--framer-icon-mask)";
var Base6 = forwardRef12(function (props, ref) {
  return <svg {...props} ref={ref}>{props.children}</svg>;
});
var MotionSVG6 = motion6.create(Base6);
var SVG6 = forwardRef12((props, ref) => {
  const {
    animated,
    layoutId,
    children,
    ...rest
  } = props;
  return animated ? <MotionSVG6 {...rest} layoutId={layoutId} ref={ref}>{children}</MotionSVG6> : <svg {...rest} ref={ref}>{children}</svg>;
});
var svg6 = __svg_6;
var getProps6 = ({
  height,
  id,
  strokeWidth,
  vectorColor,
  width,
  ...props
}) => {
  return {
    ...props,
    aehKIzIL6: strokeWidth ?? props.aehKIzIL6 ?? 1,
    oCwLU7ISg: vectorColor ?? props.oCwLU7ISg ?? "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
  };
};
var Component6 = React6.forwardRef(function (props, ref) {
  const {
    style,
    className,
    layoutId,
    variant,
    oCwLU7ISg,
    aehKIzIL6,
    ...restProps
  } = getProps6(props);
  const href = useSVGTemplate6("4043011827", svg6);
  return <SVG6 {...restProps} className={cx6("framer-WHoVG", className)} layoutId={layoutId} ref={ref} role="presentation" style={{
    "--17yrnt4": oCwLU7ISg,
    "--urmpk": aehKIzIL6,
    ...style
  }} viewBox="0 0 36 36">{<use href={href} />}</SVG6>;
});
var css6 = [`.framer-WHoVG { -webkit-mask: ${mask6}; aspect-ratio: 1; display: block; mask: ${mask6}; width: 36px; }`];
var Icon6 = withCSS6(Component6, css6, "framer-WHoVG");
Icon6.displayName = "engine";
var S_bPD60mp_default = Icon6;
addPropertyControls6(Icon6, {
  oCwLU7ISg: {
    defaultValue: 'var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))',
    hidden: false,
    title: "vector color",
    type: ControlType6.Color
  },
  aehKIzIL6: {
    defaultValue: 1,
    hidden: false,
    min: 0,
    title: "stroke width",
    type: ControlType6.Number
  }
});

// http-url:https://framerusercontent.com/modules/DGhjQrvN4S7iQgOjbWwA/MXWoCXMkE7VpW7PMn4FT/TdzQPBCMZ.js
import { jsx as _jsx7 } from "react/jsx-runtime";
import { addPropertyControls as addPropertyControls7, ControlType as ControlType7, cx as cx7, motion as motion7, useSVGTemplate as useSVGTemplate7, withCSS as withCSS7 } from "@proofly-framer/runtime";
import * as React7 from "react";
import { forwardRef as forwardRef14 } from "react";
import { jsx as _ctxJsx } from "react/jsx-runtime";
import { ContextProviders, useVariant } from "@proofly-framer/runtime";
var mask7 = "var(--framer-icon-mask)";
var Base7 = forwardRef14(function (props, ref) {
  return <svg {...props} ref={ref}>{props.children}</svg>;
});
var MotionSVG7 = motion7.create(Base7);
var SVG7 = forwardRef14((props, ref) => {
  const {
    animated,
    layoutId,
    children,
    ...rest
  } = props;
  return animated ? <MotionSVG7 {...rest} layoutId={layoutId} ref={ref}>{children}</MotionSVG7> : <svg {...rest} ref={ref}>{children}</svg>;
});
var svg7 = __svg_7;
var getProps7 = ({
  height,
  id,
  strokeWidth,
  vectorColor,
  width,
  ...props
}) => {
  return {
    ...props,
    aehKIzIL6: strokeWidth ?? props.aehKIzIL6 ?? 1,
    oCwLU7ISg: vectorColor ?? props.oCwLU7ISg ?? "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
  };
};
var Component7 = React7.forwardRef(function (props, ref) {
  const {
    style,
    className,
    layoutId,
    variant,
    oCwLU7ISg,
    aehKIzIL6,
    ...restProps
  } = getProps7(props);
  const href = useSVGTemplate7("3772362401", svg7);
  return <SVG7 {...restProps} className={cx7("framer-zgg2C", className)} layoutId={layoutId} ref={ref} role="presentation" style={{
    "--17yrnt4": oCwLU7ISg,
    "--urmpk": aehKIzIL6,
    ...style
  }} viewBox="0 0 36 36">{<use href={href} />}</SVG7>;
});
var css7 = [`.framer-zgg2C { -webkit-mask: ${mask7}; aspect-ratio: 1; display: block; mask: ${mask7}; width: 36px; }`];
var Icon7 = withCSS7(Component7, css7, "framer-zgg2C");
Icon7.displayName = "delivery";
var TdzQPBCMZ_default = Icon7;
addPropertyControls7(Icon7, {
  oCwLU7ISg: {
    defaultValue: 'var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))',
    hidden: false,
    title: "vector color",
    type: ControlType7.Color
  },
  aehKIzIL6: {
    defaultValue: 1,
    hidden: false,
    min: 0,
    title: "stroke width",
    type: ControlType7.Number
  }
});

// http-url:https://framerusercontent.com/modules/qYpbp11NIRijpBix4thv/EFgJXxfiOQMms8Vl3h1i/t57Caovbd.js
var MotionDivWithFX = withFX(motion8.div);
var BoxesFonts = getFonts(kZLRHbEEz_default);
var WrenchFonts = getFonts(iUev6L3gl_default);
var EngineeringFonts = getFonts(MXmhQfjAM_default);
var EngineFonts = getFonts(S_bPD60mp_default);
var Component1Fonts = getFonts(IHS33mEeO_default);
var DeliveryFonts = getFonts(TdzQPBCMZ_default);
var BrandFonts = getFonts(hhIXF2Zqp_default);
var cycleOrder = ["SEfK8UYAT", "oAA3zFz8G"];
var serializationHash = "framer-FqVWY";
var variantClassNames = {
  oAA3zFz8G: "framer-v-fhk4ft",
  SEfK8UYAT: "framer-v-1pfjr42"
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
var animation = {
  opacity: 0,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  skewX: 0,
  skewY: 0,
  x: 0,
  y: 0
};
var transition2 = {
  delay: 1,
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
  transition: transition2,
  x: 0,
  y: 0
};
var transformTemplate1 = (_, t) => `translateX(-50%) ${t}`;
var transition3 = {
  delay: 1.2,
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
  transition: transition3,
  x: 0,
  y: 0
};
var animation3 = {
  opacity: 0,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 0.5,
  skewX: 0,
  skewY: 0,
  x: 0,
  y: 0
};
var transition4 = {
  bounce: 0.2,
  delay: 0.2,
  duration: 0.4,
  type: "spring"
};
var animation4 = {
  opacity: 0,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 0.5,
  skewX: 0,
  skewY: 0,
  transition: transition4,
  x: 0,
  y: 0
};
var transition5 = {
  bounce: 0.2,
  delay: 0.5,
  duration: 0.4,
  type: "spring"
};
var animation5 = {
  opacity: 0,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 0.5,
  skewX: 0,
  skewY: 0,
  transition: transition5,
  x: 0,
  y: 0
};
var transition6 = {
  bounce: 0.2,
  delay: 0.6,
  duration: 0.4,
  type: "spring"
};
var animation6 = {
  opacity: 0,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 0.5,
  skewX: 0,
  skewY: 0,
  transition: transition6,
  x: 0,
  y: 0
};
var transition7 = {
  bounce: 0.2,
  delay: 0.7,
  duration: 0.4,
  type: "spring"
};
var animation7 = {
  opacity: 0,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 0.5,
  skewX: 0,
  skewY: 0,
  transition: transition7,
  x: 0,
  y: 0
};
var transition8 = {
  bounce: 0.2,
  delay: 0.4,
  duration: 0.4,
  type: "spring"
};
var animation8 = {
  opacity: 0,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 0.5,
  skewX: 0,
  skewY: 0,
  transition: transition8,
  x: 0,
  y: 0
};
var transition9 = {
  bounce: 0.2,
  delay: 0.3,
  duration: 0.4,
  type: "spring"
};
var animation9 = {
  opacity: 0,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 0.5,
  skewX: 0,
  skewY: 0,
  transition: transition9,
  x: 0,
  y: 0
};
var transition10 = {
  bounce: 0.5,
  delay: 0.8,
  duration: 0.4,
  type: "spring"
};
var animation10 = {
  opacity: 0,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 0.5,
  skewX: 0,
  skewY: 0,
  transition: transition10,
  x: 0,
  y: 0
};
var Transition = ({
  value,
  children
}) => {
  const config = React8.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React8.useMemo(() => ({
    ...config,
    transition
  }), [JSON.stringify(transition)]);
  return <MotionConfigContext.Provider value={contextValue}>{children}</MotionConfigContext.Provider>;
};
var Variants = motion8.create(React8.Fragment);
var humanReadableVariantMap = {
  "Variant 1": "SEfK8UYAT",
  phone: "oAA3zFz8G"
};
var getProps8 = ({
  height,
  id,
  width,
  ...props
}) => {
  return {
    ...props,
    variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "SEfK8UYAT"
  };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component8 = React8.forwardRef(function (props, ref) {
  const fallbackRef = useRef(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React8.useId();
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
    ...restProps
  } = getProps8(props);
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
    defaultVariant: "SEfK8UYAT",
    ref: refBinding,
    variant,
    variantClassNames
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx8(serializationHash, ...sharedStyleClassNames);
  return <LayoutGroup id={layoutId ?? defaultLayoutId}>{<Variants animate={variants} initial={false}>{<Transition value={transition1}>{_jsx8(motion8.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx8(scopingClassNames, "framer-1pfjr42", className, classNames),
          "data-framer-name": "Variant 1",
          layoutDependency,
          layoutId: "SEfK8UYAT",
          ref: refBinding,
          style: {
            ...style
          },
          ...addPropertyOverrides({
            oAA3zFz8G: {
              "data-framer-name": "phone"
            }
          }, baseVariant, gestureVariant),
          children: _jsxs(motion8.div, {
            className: "framer-1u9cab5",
            "data-framer-name": "Group 744",
            layoutDependency,
            layoutId: "YXTJYgIcw",
            children: [<MotionDivWithFX __framer__animate={{
              transition: transition2
            }} __framer__animateOnce __framer__enter={animation} __framer__exit={animation1} __framer__styleAppearEffectEnabled __framer__threshold={0.5} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-1ck8u6c" data-framer-name="rec" layoutDependency={layoutDependency} layoutId="k_51jCmAa" transformTemplate={transformTemplate1}>{<SVG8 className="framer-1oyv6d2" layoutDependency={layoutDependency} layoutId="Ls1M5Ebnb" opacity={1} radius={24} requiresOverflowVisible svg={__svg_10} withExternalLayout {...addPropertyOverrides({
                oAA3zFz8G: {
                  radius: 16,
                  svg: __svg_8
                }
              }, baseVariant, gestureVariant)} />}</MotionDivWithFX>, <MotionDivWithFX __framer__animate={{
              transition: transition3
            }} __framer__animateOnce __framer__enter={animation} __framer__exit={animation2} __framer__styleAppearEffectEnabled __framer__threshold={0.5} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-sdgpnq" layoutDependency={layoutDependency} layoutId="uwMeRBZrT">{<SVG8 className="framer-1hxsnb4" layoutDependency={layoutDependency} layoutId="PyfD20tQN" opacity={1} requiresOverflowVisible svg={__svg_11} withExternalLayout {...addPropertyOverrides({
                oAA3zFz8G: {
                  svg: __svg_9
                }
              }, baseVariant, gestureVariant)} />}</MotionDivWithFX>, <MotionDivWithFX __framer__animate={{
              transition: transition4
            }} __framer__animateOnce __framer__enter={animation3} __framer__exit={animation4} __framer__styleAppearEffectEnabled __framer__threshold={0.5} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-6d1vlw" data-framer-name="warehouse" layoutDependency={layoutDependency} layoutId="dm47FVU8S" style={{
              backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))",
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              boxShadow: "0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06)"
            }}>{_jsx8(kZLRHbEEz_default, {
                animated: true,
                className: "framer-xjcuwv",
                layoutDependency,
                layoutId: "PEmh5x3ng",
                style: {
                  "--17yrnt4": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                  "--urmpk": 1.5
                }
              })}{<RichText __fromCanvasComponent className="framer-kmvp59" data-framer-name="Warehouse" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="uAf8wnbBe" style={{
                "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                "--framer-paragraph-spacing": "2.5446794033050537px"
              }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides({
                oAA3zFz8G: {
                  children: <React8.Fragment>{_jsx8(motion8.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "10px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "center",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                      },
                      children: "Warehouse"
                    })}</React8.Fragment>
                }
              }, baseVariant, gestureVariant)}>{<React8.Fragment>{_jsx8(motion8.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-font-size": "12px",
                      "--framer-line-height": "120%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                    },
                    children: "Warehouse"
                  })}</React8.Fragment>}</RichText>}</MotionDivWithFX>, <MotionDivWithFX __framer__animate={{
              transition: transition5
            }} __framer__animateOnce __framer__enter={animation3} __framer__exit={animation5} __framer__styleAppearEffectEnabled __framer__threshold={0.5} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-1qfjvjn" data-framer-name="after-sales" layoutDependency={layoutDependency} layoutId="e2w42iBs9" style={{
              backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))",
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              boxShadow: "0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06)"
            }}>{_jsx8(iUev6L3gl_default, {
                animated: true,
                className: "framer-ait9l",
                layoutDependency,
                layoutId: "SnnEKwSHw",
                style: {
                  "--17yrnt4": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                  "--urmpk": 1.5
                }
              })}{<RichText __fromCanvasComponent className="framer-1up8k99" data-framer-name="After-Sales\u2028Service" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="JjULwjpbz" style={{
                "--extracted-3sq8v0": "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(234, 234, 235))",
                "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                "--framer-paragraph-spacing": "2.5446794033050537px"
              }} variants={{
                oAA3zFz8G: {
                  "--extracted-1w3ko1f": "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(234, 234, 235))"
                }
              }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides({
                oAA3zFz8G: {
                  children: <React8.Fragment>{_jsxs(motion8.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "10px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "center",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                      },
                      children: ["After-Sales", _jsx8(motion8.span, {
                        style: {
                          "--framer-text-color": "var(--extracted-1w3ko1f, var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(234, 234, 235)))"
                        },
                        children: _jsx8(motion8.br, {})
                      }), "Service"]
                    })}</React8.Fragment>
                }
              }, baseVariant, gestureVariant)}>{<React8.Fragment>{_jsxs(motion8.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-font-size": "10px",
                      "--framer-line-height": "120%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                    },
                    children: [_jsx8(motion8.span, {
                      style: {
                        "--framer-font-size": "12px"
                      },
                      children: "After-Sales"
                    }), _jsx8(motion8.span, {
                      style: {
                        "--framer-font-size": "12px",
                        "--framer-text-color": "var(--extracted-3sq8v0, var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(234, 234, 235)))"
                      },
                      children: _jsx8(motion8.br, {})
                    }), _jsx8(motion8.span, {
                      style: {
                        "--framer-font-size": "12px"
                      },
                      children: "Service"
                    })]
                  })}</React8.Fragment>}</RichText>}</MotionDivWithFX>, <MotionDivWithFX __framer__animate={{
              transition: transition6
            }} __framer__animateOnce __framer__enter={animation3} __framer__exit={animation6} __framer__styleAppearEffectEnabled __framer__threshold={0.5} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-1ljgz7n" data-framer-name="engineering" layoutDependency={layoutDependency} layoutId="kOv9h2WBx" style={{
              backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))",
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              boxShadow: "0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06)"
            }}>{<MXmhQfjAM_default animated className="framer-ucricq" layoutDependency={layoutDependency} layoutId="A7v9M8kpz" style={{
                "--17yrnt4": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                "--urmpk": 1.5
              }} />}{<RichText __fromCanvasComponent className="framer-v3uk3a" data-framer-name="Engineering" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="x7yxhBxBV" style={{
                "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                "--framer-paragraph-spacing": "2.5446794033050537px"
              }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides({
                oAA3zFz8G: {
                  children: <React8.Fragment>{_jsx8(motion8.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "10px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "center",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                      },
                      children: "Engineering"
                    })}</React8.Fragment>
                }
              }, baseVariant, gestureVariant)}>{<React8.Fragment>{_jsx8(motion8.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-font-size": "12px",
                      "--framer-line-height": "120%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                    },
                    children: "Engineering"
                  })}</React8.Fragment>}</RichText>}</MotionDivWithFX>, <MotionDivWithFX __framer__animate={{
              transition: transition7
            }} __framer__animateOnce __framer__enter={animation3} __framer__exit={animation7} __framer__styleAppearEffectEnabled __framer__threshold={0.5} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-3ayc1g" data-framer-name="manufacturing" layoutDependency={layoutDependency} layoutId="sfJJQ5Efc" style={{
              backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))",
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              boxShadow: "0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06)"
            }}>{<S_bPD60mp_default animated className="framer-1t89azp" layoutDependency={layoutDependency} layoutId="EFs1V1JC4" style={{
                "--17yrnt4": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                "--urmpk": 1.5
              }} />}{<RichText __fromCanvasComponent className="framer-raam46" data-framer-name="Manufacturing\u2028& Assembly" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="rHLrWU8pA" style={{
                "--extracted-3sq8v0": "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(234, 234, 235))",
                "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                "--framer-paragraph-spacing": "2.5446794033050537px"
              }} variants={{
                oAA3zFz8G: {
                  "--extracted-1w3ko1f": "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(234, 234, 235))"
                }
              }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides({
                oAA3zFz8G: {
                  children: <React8.Fragment>{_jsxs(motion8.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "10px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "center",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                      },
                      children: ["Manufacturing", _jsx8(motion8.span, {
                        style: {
                          "--framer-text-color": "var(--extracted-1w3ko1f, var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(234, 234, 235)))"
                        },
                        children: _jsx8(motion8.br, {})
                      }), "& Assembly"]
                    })}</React8.Fragment>
                }
              }, baseVariant, gestureVariant)}>{<React8.Fragment>{_jsxs(motion8.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-font-size": "10px",
                      "--framer-line-height": "120%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                    },
                    children: [_jsx8(motion8.span, {
                      style: {
                        "--framer-font-size": "12px"
                      },
                      children: "Manufacturing"
                    }), _jsx8(motion8.span, {
                      style: {
                        "--framer-font-size": "12px",
                        "--framer-text-color": "var(--extracted-3sq8v0, var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(234, 234, 235)))"
                      },
                      children: _jsx8(motion8.br, {})
                    }), _jsx8(motion8.span, {
                      style: {
                        "--framer-font-size": "12px"
                      },
                      children: "& Assembly"
                    })]
                  })}</React8.Fragment>}</RichText>}</MotionDivWithFX>, <MotionDivWithFX __framer__animate={{
              transition: transition8
            }} __framer__animateOnce __framer__enter={animation3} __framer__exit={animation8} __framer__styleAppearEffectEnabled __framer__threshold={0.5} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-q8bdob" data-framer-name="component" layoutDependency={layoutDependency} layoutId="TV2kgKOl3" style={{
              backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))",
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              boxShadow: "0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06)"
            }}>{<IHS33mEeO_default animated className="framer-11mr77a" layoutDependency={layoutDependency} layoutId="HRq_nps5e" style={{
                "--17yrnt4": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                "--urmpk": 1.5
              }} />}{<RichText __fromCanvasComponent className="framer-wcnlm5" data-framer-name="Component Sourcing" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="T6sBw50iH" style={{
                "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                "--framer-paragraph-spacing": "2.5446794033050537px"
              }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides({
                oAA3zFz8G: {
                  children: <React8.Fragment>{_jsx8(motion8.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "10px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "center",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                      },
                      children: "Component Sourcing"
                    })}</React8.Fragment>
                }
              }, baseVariant, gestureVariant)}>{<React8.Fragment>{_jsx8(motion8.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-font-size": "12px",
                      "--framer-line-height": "120%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                    },
                    children: "Component Sourcing"
                  })}</React8.Fragment>}</RichText>}</MotionDivWithFX>, <MotionDivWithFX __framer__animate={{
              transition: transition9
            }} __framer__animateOnce __framer__enter={animation3} __framer__exit={animation9} __framer__styleAppearEffectEnabled __framer__threshold={0.5} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-1labshi" data-framer-name="delivery" layoutDependency={layoutDependency} layoutId="klrn3iVYB" style={{
              backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))",
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              boxShadow: "0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06)"
            }}>{<TdzQPBCMZ_default animated className="framer-pkmhmf" layoutDependency={layoutDependency} layoutId="a6hWLLDhj" style={{
                "--17yrnt4": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                "--urmpk": 1.5
              }} />}{<RichText __fromCanvasComponent className="framer-1p6rdf1" data-framer-name="Delivery" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="T6yVoPvsN" style={{
                "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                "--framer-paragraph-spacing": "2.5446794033050537px"
              }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides({
                oAA3zFz8G: {
                  children: <React8.Fragment>{_jsx8(motion8.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "10px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "center",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                      },
                      children: "Delivery"
                    })}</React8.Fragment>
                }
              }, baseVariant, gestureVariant)}>{<React8.Fragment>{_jsx8(motion8.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-font-size": "12px",
                      "--framer-line-height": "120%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                    },
                    children: "Delivery"
                  })}</React8.Fragment>}</RichText>}</MotionDivWithFX>, <MotionDivWithFX __framer__animate={{
              transition: transition10
            }} __framer__animateOnce __framer__enter={animation3} __framer__exit={animation10} __framer__styleAppearEffectEnabled __framer__threshold={0.5} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-jllcpd" data-framer-name="bloom" layoutDependency={layoutDependency} layoutId="SkdFeRj6K" style={{
              background: "radial-gradient(100% 100% at 100% 0%, var(--token-d40a5262-b4fe-45d5-9e97-61d735d1744e, rgb(255, 152, 0)) 0%, var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62)) 100%)",
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              boxShadow: "0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06)"
            }}>{_jsx8(motion8.div, {
                className: "framer-6jhs3f",
                layoutDependency,
                layoutId: "b47GdfMeW",
                children: <SVG8 className="framer-1f4hk8" layoutDependency={layoutDependency} layoutId="tjj411rDp" opacity={1} requiresOverflowVisible={false} svg={__svg_12} withExternalLayout />
              })}</MotionDivWithFX>, <MotionDivWithFX __framer__animate={{
              transition: transition4
            }} __framer__animateOnce __framer__enter={animation3} __framer__exit={animation4} __framer__styleAppearEffectEnabled __framer__threshold={0.5} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-mmzcga" data-framer-name="warehouse" layoutDependency={layoutDependency} layoutId="cmhFSi2Oc" style={{
              backgroundColor: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              boxShadow: "0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06)"
            }}>{_jsx8(hhIXF2Zqp_default, {
                animated: true,
                className: "framer-1uwhpqs",
                layoutDependency,
                layoutId: "ldwgM_W4s",
                style: {
                  "--17yrnt4": "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))",
                  "--urmpk": 1.5
                }
              })}{<RichText __fromCanvasComponent className="framer-122gndu" data-framer-name="Warehouse" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="Hq5DQUu30" style={{
                "--extracted-r6o4lv": "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))",
                "--framer-paragraph-spacing": "2.5446794033050537px"
              }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
                oAA3zFz8G: {
                  children: <React8.Fragment>{_jsx8(motion8.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "10px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "center",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))"
                      },
                      children: "BRANDS"
                    })}</React8.Fragment>
                }
              }, baseVariant, gestureVariant)}>{<React8.Fragment>{_jsx8(motion8.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-font-size": "12px",
                      "--framer-line-height": "120%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255)))"
                    },
                    children: "BRANDS"
                  })}</React8.Fragment>}</RichText>}</MotionDivWithFX>]
          })
        })}</Transition>}</Variants>}</LayoutGroup>;
});
var css8 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-FqVWY.framer-gtnx2l, .framer-FqVWY .framer-gtnx2l { display: block; }", ".framer-FqVWY.framer-1pfjr42 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 432px; }", ".framer-FqVWY .framer-1u9cab5 { flex: none; height: 486px; overflow: visible; position: relative; width: 431px; }", ".framer-FqVWY .framer-1ck8u6c { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 50%; overflow: visible; padding: 0px; position: absolute; width: min-content; }", ".framer-FqVWY .framer-1oyv6d2 { height: 242px; position: relative; width: 358px; }", ".framer-FqVWY .framer-sdgpnq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; top: 50px; width: 100%; }", ".framer-FqVWY .framer-1hxsnb4 { height: 194px; position: relative; width: 1px; }", ".framer-FqVWY .framer-6d1vlw { align-content: center; align-items: center; bottom: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 96px; justify-content: space-between; overflow: visible; padding: 12px 2.5446794033050537px 0px 2.5446794033050537px; position: absolute; right: 53px; width: 96px; }", ".framer-FqVWY .framer-xjcuwv, .framer-FqVWY .framer-ait9l, .framer-FqVWY .framer-ucricq, .framer-FqVWY .framer-1t89azp, .framer-FqVWY .framer-11mr77a, .framer-FqVWY .framer-pkmhmf, .framer-FqVWY .framer-1uwhpqs { flex: none; height: var(--framer-aspect-ratio-supported, 36px); position: relative; width: 36px; }", ".framer-FqVWY .framer-kmvp59, .framer-FqVWY .framer-1up8k99, .framer-FqVWY .framer-v3uk3a, .framer-FqVWY .framer-raam46, .framer-FqVWY .framer-1p6rdf1 { flex: 1 0 0px; height: 1px; position: relative; white-space: pre; width: auto; }", ".framer-FqVWY .framer-1qfjvjn { align-content: center; align-items: center; bottom: 130px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 96px; justify-content: space-between; overflow: visible; padding: 12px 4px 0px 4px; position: absolute; right: 53px; width: 96px; }", ".framer-FqVWY .framer-1ljgz7n { align-content: center; align-items: center; bottom: 130px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 96px; justify-content: space-between; left: calc(49.88399071925757% - 96px / 2); overflow: visible; padding: 12px 4px 0px 4px; position: absolute; width: 96px; }", ".framer-FqVWY .framer-3ayc1g { align-content: center; align-items: center; bottom: 130px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 96px; justify-content: space-between; left: 52px; overflow: visible; padding: 12px 4px 0px 4px; position: absolute; width: 96px; }", ".framer-FqVWY .framer-q8bdob { align-content: center; align-items: center; bottom: 17px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 96px; justify-content: space-between; left: calc(49.88399071925757% - 96px / 2); overflow: visible; padding: 12px 4px 0px 4px; position: absolute; width: 96px; }", ".framer-FqVWY .framer-wcnlm5 { flex: 1 0 0px; height: 1px; position: relative; white-space: pre-wrap; width: 70px; word-break: break-word; word-wrap: break-word; }", ".framer-FqVWY .framer-1labshi { align-content: center; align-items: center; bottom: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 96px; justify-content: space-between; left: 52px; overflow: visible; padding: 12px 4px 0px 4px; position: absolute; width: 96px; }", ".framer-FqVWY .framer-jllcpd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 2.5446794033050537px; height: 48px; justify-content: center; left: calc(50.11600928074248% - 48px / 2); overflow: visible; padding: 2.5446794033050537px; position: absolute; top: 138px; width: 48px; }", ".framer-FqVWY .framer-6jhs3f { flex: none; height: 18px; overflow: visible; position: relative; width: 76px; }", ".framer-FqVWY .framer-1f4hk8 { height: 18px; left: 26px; position: absolute; top: 1px; width: 25px; }", ".framer-FqVWY .framer-mmzcga { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: 96px; justify-content: center; left: calc(50.11600928074248% - 96px / 2); overflow: visible; padding: 2.5446794033050537px; position: absolute; top: 0px; width: 96px; }", ".framer-FqVWY .framer-122gndu { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-FqVWY.framer-v-fhk4ft.framer-1pfjr42 { width: 320px; }", ".framer-FqVWY.framer-v-fhk4ft .framer-1u9cab5 { height: 403px; width: 309px; }", ".framer-FqVWY.framer-v-fhk4ft .framer-1ck8u6c { bottom: 1px; left: 50%; }", ".framer-FqVWY.framer-v-fhk4ft .framer-1oyv6d2 { height: 198px; width: 288px; }", ".framer-FqVWY.framer-v-fhk4ft .framer-sdgpnq { right: 0px; top: 45px; width: unset; }", ".framer-FqVWY.framer-v-fhk4ft .framer-1hxsnb4 { height: 160px; }", ".framer-FqVWY.framer-v-fhk4ft .framer-6d1vlw { bottom: 19px; height: 76px; padding: 12px 2.5446794033050537px 4px 2.5446794033050537px; right: 24px; width: 76px; }", ".framer-FqVWY.framer-v-fhk4ft .framer-xjcuwv, .framer-FqVWY.framer-v-fhk4ft .framer-ait9l, .framer-FqVWY.framer-v-fhk4ft .framer-ucricq, .framer-FqVWY.framer-v-fhk4ft .framer-1t89azp, .framer-FqVWY.framer-v-fhk4ft .framer-11mr77a, .framer-FqVWY.framer-v-fhk4ft .framer-pkmhmf { height: var(--framer-aspect-ratio-supported, 24px); width: 24px; }", ".framer-FqVWY.framer-v-fhk4ft .framer-1qfjvjn { bottom: 109px; height: 76px; padding: 12px 4px 4px 4px; right: 24px; width: 76px; }", ".framer-FqVWY.framer-v-fhk4ft .framer-1ljgz7n { bottom: 109px; height: 76px; left: calc(50.161812297734656% - 76px / 2); padding: 12px 4px 4px 4px; width: 76px; }", ".framer-FqVWY.framer-v-fhk4ft .framer-3ayc1g { bottom: 109px; height: 76px; left: 25px; padding: 12px 4px 4px 4px; width: 77px; }", ".framer-FqVWY.framer-v-fhk4ft .framer-q8bdob { bottom: 19px; height: 76px; left: calc(50.161812297734656% - 76px / 2); padding: 12px 4px 4px 4px; width: 76px; }", ".framer-FqVWY.framer-v-fhk4ft .framer-1labshi { bottom: 19px; height: 76px; left: 25px; padding: 12px 4px 4px 4px; width: 77px; }", ".framer-FqVWY.framer-v-fhk4ft .framer-jllcpd { left: calc(49.838187702265394% - 48px / 2); top: 108px; }", ".framer-FqVWY.framer-v-fhk4ft .framer-mmzcga { height: 76px; left: calc(50.161812297734656% - 76px / 2); width: 76px; }"];
var Framert57Caovbd = withCSS8(Component8, css8, "framer-FqVWY");
var t57Caovbd_default = Framert57Caovbd;
Framert57Caovbd.displayName = "animation-tree";
Framert57Caovbd.defaultProps = {
  height: 486,
  width: 432
};
addPropertyControls8(Framert57Caovbd, {
  variant: {
    options: ["SEfK8UYAT", "oAA3zFz8G"],
    optionTitles: ["Variant 1", "phone"],
    title: "Variant",
    type: ControlType8.Enum
  }
});
addFonts(Framert57Caovbd, [{
  explicitInter: true,
  fonts: [{
    family: "Haffer Regular",
    source: "custom",
    url: "https://framerusercontent.com/assets/tAGQcvN09kwW2QjPLqLO197UqBQ.woff"
  }]
}, ...BoxesFonts, ...WrenchFonts, ...EngineeringFonts, ...EngineFonts, ...Component1Fonts, ...DeliveryFonts, ...BrandFonts], {
  supportsExplicitInterCodegen: true
});
var __FramerMetadata__ = {
  "exports": {
    "default": {
      "type": "reactComponent",
      "name": "Framert57Caovbd",
      "slots": [],
      "annotations": {
        "framerAutoSizeImages": "true",
        "framerColorSyntax": "true",
        "framerContractVersion": "1",
        "framerDisplayContentsDiv": "false",
        "framerIntrinsicHeight": "486",
        "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"oAA3zFz8G":{"layout":["fixed","auto"]}}}',
        "framerComponentViewportWidth": "true",
        "framerIntrinsicWidth": "432",
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
var _OriginalComponent = t57Caovbd_default;
function AnimationtreeWrapped(props) {
  var _variant = useVariant(props.variant);
  var _inner = (_variant !== undefined) ? { ...props, variant: _variant } : props;
  return _ctxJsx(ContextProviders, { children: _ctxJsx(_OriginalComponent, _inner) });
}
Object.assign(AnimationtreeWrapped, _OriginalComponent);
export {  __FramerMetadata__,  AnimationtreeWrapped as default   };