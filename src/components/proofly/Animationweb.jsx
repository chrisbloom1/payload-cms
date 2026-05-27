"use client"
// http-url:https://framerusercontent.com/modules/wsYj4m2fNzs59inTVc5v/cRWq8ePTkg6x151qHfnR/mFZoa_YQL.js
import { jsx as _jsx7, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls as addPropertyControls7, ControlType as ControlType7, cx as cx7, getFonts, RichText, SVG as SVG7, useComponentViewport, useLocaleInfo, useVariantState, withCSS as withCSS7, withFX } from "@proofly-framer/runtime";
import { LayoutGroup, motion as motion7, MotionConfigContext } from "@proofly-framer/runtime";
import * as React7 from "react";
import { useRef } from "react";

// Extracted SVG assets
const __svg_1 = '<svg display="block" role="presentation" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><path d="M 21.66 14.868 C 21.035 15.493 21.035 16.507 21.66 17.132 L 25.463 20.936 C 26.088 21.561 27.101 21.561 27.727 20.936 L 31.531 17.132 C 32.156 16.507 32.156 15.493 31.531 14.868 L 27.727 11.064 C 27.101 10.439 26.088 10.439 25.463 11.064 Z M 0.469 14.868 C -0.156 15.493 -0.156 16.507 0.469 17.132 L 4.273 20.936 C 4.899 21.561 5.912 21.561 6.537 20.936 L 10.342 17.132 C 10.966 16.507 10.966 15.493 10.342 14.868 L 6.537 11.064 C 5.912 10.439 4.899 10.439 4.273 11.064 Z M 11.064 25.463 C 10.763 25.763 10.594 26.171 10.594 26.596 C 10.594 27.02 10.763 27.428 11.064 27.728 L 14.868 31.531 C 15.493 32.156 16.507 32.156 17.132 31.531 L 20.936 27.728 C 21.237 27.428 21.406 27.02 21.406 26.596 C 21.406 26.171 21.237 25.763 20.936 25.463 L 17.132 21.66 C 16.507 21.035 15.493 21.035 14.868 21.66 Z M 11.064 4.273 C 10.439 4.899 10.439 5.912 11.064 6.537 L 14.868 10.34 C 15.493 10.965 16.507 10.965 17.132 10.34 L 20.936 6.537 C 21.561 5.912 21.561 4.899 20.936 4.273 L 17.132 0.469 C 16.507 -0.156 15.493 -0.156 14.868 0.469 Z" fill="transparent" height="32.00000071829613px" id="o8ct4xr08" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--urmpk, 1)" stroke="var(--17yrnt4, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))" transform="translate(2 2)" width="32.00000071829616px"/></svg>';
const __svg_2 = '<svg display="block" role="presentation" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><path d="M 20.316 6.885 C 19.707 7.507 19.707 8.502 20.316 9.124 L 22.876 11.684 C 23.498 12.293 24.493 12.293 25.115 11.684 L 30.084 6.717 C 30.596 6.202 31.464 6.365 31.656 7.066 C 32.643 10.654 31.466 14.489 28.637 16.907 C 25.807 19.325 21.835 19.889 18.445 18.354 L 5.791 31.007 C 4.466 32.332 2.318 32.332 0.993 31.007 C -0.331 29.681 -0.331 27.533 0.994 26.209 L 13.647 13.555 C 12.113 10.165 12.677 6.193 15.095 3.363 C 17.512 0.534 21.348 -0.643 24.936 0.344 C 25.637 0.536 25.8 1.403 25.286 1.918 Z" fill="transparent" height="32.00079982473413px" id="XxsuMo6Un" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--urmpk, 1)" stroke="var(--17yrnt4, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))" transform="translate(2 2)" width="32px"/></svg>';
const __svg_3 = '<svg display="block" role="presentation" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><g d="M 8 13.354 L 1.552 17.394 C 0.591 17.996 0.002 19.079 0 20.248 L 0 25.657 C 0.002 26.826 0.591 27.909 1.552 28.511 L 6.352 31.516 C 7.366 32.152 8.634 32.152 9.648 31.516 L 16 27.543 L 16 18.362 M 8 23.37 L 0.416 18.612 M 8 23.37 L 16 18.362 M 8 23.37 L 8 32 M 16 18.362 L 16 27.543 L 22.352 31.516 C 23.366 32.152 24.634 32.152 25.648 31.516 L 30.448 28.511 C 31.409 27.909 31.998 26.826 32 25.657 L 32 20.248 C 31.998 19.079 31.409 17.996 30.448 17.394 L 24 13.354 M 24 23.37 L 16 18.362 M 24 23.37 L 31.584 18.612 M 24 23.37 L 24 32 M 9.552 3.481 C 8.591 4.084 8.002 5.167 8 6.336 L 8 13.631 L 16 18.638 L 24 13.631 L 24 6.336 C 23.998 5.167 23.409 4.084 22.448 3.481 L 17.648 0.477 C 16.634 -0.159 15.366 -0.159 14.352 0.477 Z M 16 9.457 L 8.416 4.7 M 16 9.457 L 23.584 4.7 M 16 18.638 L 16 9.457" fill="transparent" height="31.99999989579471px" id="ZXWJnCU0j" transform="translate(2 2)" width="32px"><path d="M 8 0 L 1.552 4.04 C 0.591 4.642 0.002 5.725 0 6.894 L 0 12.303 C 0.002 13.472 0.591 14.555 1.552 15.157 L 6.352 18.162 C 7.366 18.797 8.634 18.797 9.648 18.162 L 16 14.189 L 16 5.008 M 8 10.016 L 0.416 5.258 M 8 10.016 L 16 5.008 M 8 10.016 L 8 18.646 M 16 5.008 L 16 14.189 L 22.352 18.162 C 23.366 18.797 24.634 18.797 25.648 18.162 L 30.448 15.157 C 31.409 14.555 31.998 13.472 32 12.303 L 32 6.894 C 31.998 5.725 31.409 4.642 30.448 4.04 L 24 0 M 24 10.016 L 16 5.008 M 24 10.016 L 31.584 5.258 M 24 10.016 L 24 18.646" fill="transparent" height="18.64580143998416px" id="cESgeJQau" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--urmpk, 1)" stroke="var(--17yrnt4, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))" transform="translate(0 13.354)" width="32px"/><path d="M 1.552 3.481 C 0.591 4.084 0.002 5.167 0 6.336 L 0 13.631 L 8 18.638 L 16 13.631 L 16 6.336 C 15.998 5.167 15.409 4.084 14.448 3.481 L 9.648 0.477 C 8.634 -0.159 7.366 -0.159 6.352 0.477 Z M 8 9.457 L 0.416 4.7 M 8 9.457 L 15.584 4.7 M 8 18.638 L 8 9.457" fill="transparent" height="18.638490910969075px" id="ZmEi4on1A" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--urmpk, 1)" stroke="var(--17yrnt4, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))" transform="translate(8 0)" width="16px"/></g></svg>';
const __svg_4 = '<svg display="block" role="presentation" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><path d="M 19.744 4.119 C 20.745 4.619 21.922 4.619 22.923 4.119 L 29.428 0.866 C 29.979 0.59 30.634 0.62 31.158 0.945 C 31.682 1.269 32.001 1.842 32 2.459 L 32 25.15 C 32 25.823 31.619 26.439 31.017 26.74 L 22.923 30.788 C 21.922 31.288 20.745 31.288 19.744 30.788 L 12.256 27.044 C 11.255 26.544 10.078 26.544 9.077 27.044 L 2.572 30.297 C 2.021 30.573 1.365 30.543 0.841 30.218 C 0.317 29.893 -0.002 29.319 0 28.702 L 0 6.012 C 0 5.339 0.381 4.724 0.983 4.423 L 9.077 0.375 C 10.078 -0.125 11.255 -0.125 12.256 0.375 Z M 21.333 4.494 L 21.333 31.161 M 10.667 0 L 10.667 26.667" fill="transparent" height="31.162538770137864px" id="BNhiuIpvx" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--urmpk, 1)" stroke="var(--17yrnt4, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))" transform="translate(2 2)" width="32px"/></svg>';
const __svg_5 = '<svg display="block" role="presentation" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><g d="M 16 28.8 C 23.069 28.8 28.8 23.069 28.8 16 C 28.8 8.931 23.069 3.2 16 3.2 C 8.931 3.2 3.2 8.931 3.2 16 C 3.2 23.069 8.931 28.8 16 28.8 Z M 16 19.2 C 17.767 19.2 19.2 17.767 19.2 16 C 19.2 14.233 17.767 12.8 16 12.8 C 14.233 12.8 12.8 14.233 12.8 16 C 12.8 17.767 14.233 19.2 16 19.2 Z M 16 0 L 16 3.2 M 16 32 L 16 28.8 M 24 29.856 L 22.4 27.088 M 14.4 13.232 L 8 2.144 M 29.856 24 L 27.088 22.4 M 2.144 8 L 4.912 9.6 M 19.2 16 L 32 16 M 0 16 L 3.2 16 M 29.856 8 L 27.088 9.6 M 2.144 24 L 4.912 22.4 M 24 2.144 L 22.4 4.912 M 14.4 18.768 L 8 29.856" fill="transparent" height="32.000001144409px" id="Z9hrnka8S" transform="translate(2 2)" width="31.999998855590775px"><path d="M 12.8 25.6 C 19.869 25.6 25.6 19.869 25.6 12.8 C 25.6 5.731 19.869 0 12.8 0 C 5.731 0 0 5.731 0 12.8 C 0 19.869 5.731 25.6 12.8 25.6 Z" fill="transparent" height="25.600000000000023px" id="fNaS7cN7b" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--urmpk, 1)" stroke="var(--17yrnt4, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))" transform="translate(3.2 3.2)" width="25.600000000000023px"/><path d="M 16 19.2 C 17.767 19.2 19.2 17.767 19.2 16 C 19.2 14.233 17.767 12.8 16 12.8 C 14.233 12.8 12.8 14.233 12.8 16 C 12.8 17.767 14.233 19.2 16 19.2 Z M 16 0 L 16 3.2 M 16 32 L 16 28.8 M 24 29.856 L 22.4 27.088 M 14.4 13.232 L 8 2.144 M 29.856 24 L 27.088 22.4 M 2.144 8 L 4.912 9.6 M 19.2 16 L 32 16 M 0 16 L 3.2 16 M 29.856 8 L 27.088 9.6 M 2.144 24 L 4.912 22.4 M 24 2.144 L 22.4 4.912 M 14.4 18.768 L 8 29.856" fill="transparent" height="32.000001144409px" id="rW82Cmejq" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--urmpk, 1)" stroke="var(--17yrnt4, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))" width="31.999998855590775px"/></g></svg>';
const __svg_6 = '<svg display="block" role="presentation" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><g d="M 20.8 22.4 L 24 25.6 L 30.4 19.2 M 28.8 12.797 L 28.8 9.597 C 28.799 8.455 28.189 7.4 27.2 6.829 L 16 0.429 C 15.01 -0.143 13.79 -0.143 12.8 0.429 L 1.6 6.829 C 0.611 7.4 0.001 8.455 0 9.597 L 0 22.397 C 0.001 23.539 0.611 24.594 1.6 25.165 L 12.8 31.565 C 13.79 32.136 15.01 32.136 16 31.565 L 19.2 29.741 M 7.2 3.629 L 21.6 11.869 M 0.8 8 L 14.736 16 L 28.672 8 M 14.736 32 L 14.736 16" fill="transparent" height="32px" id="az29_JDWk" transform="translate(3 2)" width="30.400001144409174px"><path d="M 0 3.2 L 3.2 6.4 L 9.6 0" fill="transparent" height="6.400000000000002px" id="xqydMRjqP" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--urmpk, 1)" stroke="var(--17yrnt4, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))" transform="translate(20.8 19.2)" width="9.599999999999994px"/><path d="M 28.8 12.797 L 28.8 9.597 C 28.799 8.455 28.189 7.4 27.2 6.829 L 16 0.429 C 15.01 -0.143 13.79 -0.143 12.8 0.429 L 1.6 6.829 C 0.611 7.4 0.001 8.455 0 9.597 L 0 22.397 C 0.001 23.539 0.611 24.594 1.6 25.165 L 12.8 31.565 C 13.79 32.136 15.01 32.136 16 31.565 L 19.2 29.741 M 7.2 3.629 L 21.6 11.869" fill="transparent" height="31.99343741577959px" id="dgIGdoGDW" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--urmpk, 1)" stroke="var(--17yrnt4, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))" width="28.80000000000001px"/><path d="M 0 0 L 13.936 8 L 27.872 0 M 13.936 24 L 13.936 8" fill="transparent" height="24px" id="fcbqraofJ" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--urmpk, 1)" stroke="var(--17yrnt4, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))" transform="translate(0.8 8)" width="27.8720000059605px"/></g></svg>';
const __svg_7 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 125.613 70.535" overflow="visible"><path d="M 0 0 L 125.613 70.535" fill="transparent" stroke-width="2" stroke="var(--token-72a14b31-6f29-4213-aff7-7a715cf36f11, rgb(252, 76, 1)) /* {&quot;name&quot;:&quot;DELIVERY&quot;} */" stroke-dasharray="5"></path></svg>';
const __svg_8 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 125.613 70.535" overflow="visible"><path d="M 0 70.535 L 125.613 0" fill="transparent" stroke-width="2" stroke="var(--token-72a14b31-6f29-4213-aff7-7a715cf36f11, rgb(252, 76, 1)) /* {&quot;name&quot;:&quot;DELIVERY&quot;} */" stroke-dasharray="5"></path></svg>';
const __svg_9 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 125.613 70.535" overflow="visible"><path d="M 125.613 0 L 0 70.535" fill="transparent" stroke-width="2" stroke="var(--token-72a14b31-6f29-4213-aff7-7a715cf36f11, rgb(252, 76, 1)) /* {&quot;name&quot;:&quot;DELIVERY&quot;} */" stroke-dasharray="5"></path></svg>';
const __svg_10 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 125.613 219.048" overflow="visible"><path d="M 125.613 0 L 0 219.048" fill="transparent" stroke-width="2" stroke="var(--token-72a14b31-6f29-4213-aff7-7a715cf36f11, rgb(252, 76, 1)) /* {&quot;name&quot;:&quot;DELIVERY&quot;} */" stroke-dasharray="5"></path></svg>';
const __svg_11 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 125.613 219.048" overflow="visible"><path d="M 0 0 L 125.613 219.048" fill="transparent" stroke-width="2" stroke="var(--token-72a14b31-6f29-4213-aff7-7a715cf36f11, rgb(252, 76, 1)) /* {&quot;name&quot;:&quot;DELIVERY&quot;} */" stroke-dasharray="5"></path></svg>';
const __svg_12 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 125.613 70.535" overflow="visible"><path d="M 125.613 70.535 L 0 0" fill="transparent" stroke-width="2" stroke="var(--token-72a14b31-6f29-4213-aff7-7a715cf36f11, rgb(252, 76, 1)) /* {&quot;name&quot;:&quot;DELIVERY&quot;} */" stroke-dasharray="5"></path></svg>';
const __svg_13 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 125.613 219.756" overflow="visible"><path d="M 125.613 219.756 L 0 0" fill="transparent" stroke-width="2" stroke="var(--token-72a14b31-6f29-4213-aff7-7a715cf36f11, rgb(252, 76, 1)) /* {&quot;name&quot;:&quot;DELIVERY&quot;} */" stroke-dasharray="5"></path></svg>';
const __svg_14 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 125.613 219.756" overflow="visible"><path d="M 0 219.756 L 125.613 0" fill="transparent" stroke-width="2" stroke="var(--token-72a14b31-6f29-4213-aff7-7a715cf36f11, rgb(252, 76, 1)) /* {&quot;name&quot;:&quot;DELIVERY&quot;} */" stroke-dasharray="5"></path></svg>';
const __svg_15 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 146.386" overflow="visible"><path d="M 0 146.386 L 0 0" fill="transparent" stroke-width="2" stroke="var(--token-72a14b31-6f29-4213-aff7-7a715cf36f11, rgb(252, 76, 1)) /* {&quot;name&quot;:&quot;DELIVERY&quot;} */" stroke-dasharray="5"></path></svg>';
const __svg_16 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 252.29 1" overflow="visible"><path d="M 252.29 0 L 0 0" fill="transparent" stroke-width="2" stroke="var(--token-72a14b31-6f29-4213-aff7-7a715cf36f11, rgb(252, 76, 1)) /* {&quot;name&quot;:&quot;DELIVERY&quot;} */" stroke-dasharray="5"></path></svg>';
const __svg_17 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 146.386" overflow="visible"><path d="M 0 0 L 0 146.386" fill="transparent" stroke-width="2" stroke="var(--token-72a14b31-6f29-4213-aff7-7a715cf36f11, rgb(252, 76, 1)) /* {&quot;name&quot;:&quot;DELIVERY&quot;} */" stroke-dasharray="5"></path></svg>';
const __svg_18 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 252.29 1" overflow="visible"><path d="M 0 0 L 252.29 0" fill="transparent" stroke-width="2" stroke="var(--token-72a14b31-6f29-4213-aff7-7a715cf36f11, rgb(252, 76, 1)) /* {&quot;name&quot;:&quot;DELIVERY&quot;} */" stroke-dasharray="5"></path></svg>';
const __svg_19 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 260 152.238" overflow="visible"><path d="M 0 0 L 260 152.238" fill="transparent" stroke-width="3" stroke="var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)) /* {&quot;name&quot;:&quot;Background&quot;} */" stroke-dasharray="6"></path></svg>';
const __svg_20 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 299" overflow="visible"><path d="M 0 299 L 0 0" fill="transparent" stroke-width="3" stroke="var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)) /* {&quot;name&quot;:&quot;Background&quot;} */" stroke-dasharray="6"></path></svg>';
const __svg_21 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 260 152.238" overflow="visible"><path d="M 0 152.238 L 260 0" fill="transparent" stroke-width="3" stroke="var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)) /* {&quot;name&quot;:&quot;Background&quot;} */" stroke-dasharray="6"></path></svg>';
const __svg_22 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 55.656 14" overflow="visible"><g><path d="M 0 0.001 L 5.962 0.001 C 8.374 0.001 10.002 1.373 10.002 3.422 C 10.002 4.639 9.198 5.741 8.139 6.185 C 9.649 6.61 10.767 7.944 10.767 9.49 C 10.767 11.925 8.825 13.529 6.001 13.529 L 0 13.529 Z M 7.021 3.905 C 7.021 3.132 6.374 2.59 5.471 2.59 L 3.118 2.59 L 3.118 5.219 L 5.471 5.219 C 6.374 5.219 7.021 4.697 7.021 3.905 Z M 7.648 9.258 C 7.648 8.292 6.844 7.635 5.687 7.635 L 3.118 7.635 L 3.118 10.94 L 5.687 10.94 C 6.844 10.94 7.648 10.244 7.648 9.258 Z" fill="var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)) /* {&quot;name&quot;:&quot;Off-White&quot;} */"></path><path d="M 12.178 0 L 15.081 0 L 15.081 13.529 L 12.178 13.529 Z" fill="var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)) /* {&quot;name&quot;:&quot;Off-White&quot;} */"></path><path d="M 16.297 8.956 C 16.297 6.018 18.513 3.95 21.552 3.95 C 24.612 3.95 26.808 6.018 26.808 8.956 C 26.808 11.913 24.592 14 21.552 14 C 18.493 14 16.297 11.893 16.297 8.956 Z M 23.906 8.956 C 23.906 7.41 22.945 6.366 21.552 6.366 C 20.16 6.366 19.219 7.39 19.219 8.956 C 19.219 10.521 20.16 11.584 21.552 11.584 C 22.945 11.584 23.906 10.521 23.906 8.956 Z" fill="var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)) /* {&quot;name&quot;:&quot;Off-White&quot;} */"></path><path d="M 27.637 8.956 C 27.637 6.018 29.853 3.95 32.892 3.95 C 35.952 3.95 38.148 6.018 38.148 8.956 C 38.148 11.913 35.932 14 32.892 14 C 29.833 14 27.637 11.893 27.637 8.956 Z M 35.246 8.956 C 35.246 7.41 34.285 6.366 32.892 6.366 C 31.5 6.366 30.559 7.39 30.559 8.956 C 30.559 10.521 31.5 11.584 32.892 11.584 C 34.285 11.584 35.246 10.521 35.246 8.956 Z" fill="var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)) /* {&quot;name&quot;:&quot;Off-White&quot;} */"></path><path d="M 55.656 7.285 L 55.656 13.528 L 52.773 13.528 L 52.773 7.904 C 52.773 6.783 52.184 6.126 51.243 6.126 C 50.008 6.126 49.341 7.247 49.341 8.677 L 49.341 13.528 L 46.438 13.528 L 46.438 7.904 C 46.438 6.783 45.889 6.126 44.928 6.126 C 43.693 6.126 43.006 7.247 43.006 8.677 L 43.006 13.528 L 40.104 13.528 L 40.104 3.787 L 43.006 3.787 L 43.006 4.966 C 43.575 4.193 44.713 3.633 46.027 3.633 C 47.321 3.633 48.458 4.232 48.831 5.063 C 49.576 4.232 50.831 3.633 52.028 3.633 C 54.146 3.633 55.656 5.005 55.656 7.285 Z" fill="var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)) /* {&quot;name&quot;:&quot;Off-White&quot;} */"></path></g></svg>';
const __svg_23 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10.767 13.529" overflow="visible"><path d="M 0 0 L 5.962 0 C 8.374 0 10.002 1.372 10.002 3.421 C 10.002 4.638 9.198 5.74 8.139 6.185 C 9.649 6.61 10.767 7.943 10.767 9.489 C 10.767 11.925 8.825 13.529 6.001 13.529 L 0 13.529 Z M 7.021 3.904 C 7.021 3.131 6.374 2.59 5.471 2.59 L 3.118 2.59 L 3.118 5.218 L 5.471 5.218 C 6.374 5.218 7.021 4.696 7.021 3.904 Z M 7.648 9.257 C 7.648 8.291 6.844 7.634 5.687 7.634 L 3.118 7.634 L 3.118 10.939 L 5.687 10.939 C 6.844 10.939 7.648 10.243 7.648 9.257 Z" fill="var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)) /* {&quot;name&quot;:&quot;Off-White&quot;} */"></path></svg>';
const __svg_24 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10.767 13.529" overflow="visible"><path d="M 0 0 L 5.962 0 C 8.374 0 10.002 1.372 10.002 3.421 C 10.002 4.638 9.198 5.74 8.139 6.185 C 9.649 6.61 10.767 7.943 10.767 9.489 C 10.767 11.925 8.825 13.529 6.001 13.529 L 0 13.529 Z" fill="transparent"></path></svg>';
const __svg_25 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.903 2.628" overflow="visible"><path d="M 3.903 1.314 C 3.903 0.541 3.255 0 2.353 0 L 0 0 L 0 2.628 L 2.353 2.628 C 3.255 2.628 3.903 2.107 3.903 1.314 Z" fill="transparent"></path></svg>';
const __svg_26 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.53 3.305" overflow="visible"><path d="M 4.53 1.623 C 4.53 0.657 3.726 0 2.569 0 L 0 0 L 0 3.305 L 2.569 3.305 C 3.726 3.305 4.53 2.609 4.53 1.623 Z" fill="transparent"></path></svg>';
const __svg_27 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.902 13.529" overflow="visible"><path d="M 0 0 L 2.902 0 L 2.902 13.529 L 0 13.529 Z" fill="var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)) /* {&quot;name&quot;:&quot;Off-White&quot;} */"></path></svg>';
const __svg_28 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10.512 10.05" overflow="visible"><path d="M 0 5.006 C 0 2.068 2.216 0 5.256 0 C 8.315 0 10.512 2.068 10.512 5.006 C 10.512 7.962 8.296 10.05 5.256 10.05 C 2.196 10.05 0 7.943 0 5.006 Z M 7.609 5.006 C 7.609 3.459 6.648 2.416 5.256 2.416 C 3.863 2.416 2.922 3.44 2.922 5.006 C 2.922 6.571 3.863 7.634 5.256 7.634 C 6.648 7.634 7.609 6.571 7.609 5.006 Z" fill="var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)) /* {&quot;name&quot;:&quot;Off-White&quot;} */"></path></svg>';
const __svg_29 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10.512 10.05" overflow="visible"><path d="M 0 5.006 C 0 2.068 2.216 0 5.256 0 C 8.315 0 10.512 2.068 10.512 5.006 C 10.512 7.962 8.296 10.05 5.256 10.05 C 2.196 10.05 0 7.943 0 5.006 Z" fill="transparent"></path></svg>';
const __svg_30 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.687 5.218" overflow="visible"><path d="M 4.687 2.59 C 4.687 1.044 3.726 0 2.334 0 C 0.941 0 0 1.024 0 2.59 C 0 4.155 0.941 5.218 2.334 5.218 C 3.726 5.218 4.687 4.155 4.687 2.59 Z" fill="transparent"></path></svg>';
const __svg_31 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10.512 10.05" overflow="visible"><path d="M 0 5.006 C 0 2.068 2.216 0 5.256 0 C 8.315 0 10.512 2.068 10.512 5.006 C 10.512 7.962 8.296 10.05 5.256 10.05 C 2.196 10.05 0 7.943 0 5.006 Z M 7.609 5.006 C 7.609 3.459 6.648 2.416 5.256 2.416 C 3.864 2.416 2.922 3.44 2.922 5.006 C 2.922 6.571 3.863 7.634 5.256 7.634 C 6.648 7.634 7.609 6.571 7.609 5.006 Z" fill="var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)) /* {&quot;name&quot;:&quot;Off-White&quot;} */"></path></svg>';
const __svg_32 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10.512 10.05" overflow="visible"><path d="M 0 5.006 C 0 2.068 2.216 0 5.256 0 C 8.315 0 10.512 2.068 10.512 5.006 C 10.512 7.962 8.296 10.05 5.256 10.05 C 2.196 10.05 0 7.943 0 5.006 Z" fill="transparent"></path></svg>';
const __svg_33 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.687 5.218" overflow="visible"><path d="M 4.687 2.59 C 4.687 1.044 3.726 0 2.334 0 C 0.941 0 0 1.024 0 2.59 C 0 4.155 0.941 5.218 2.334 5.218 C 3.726 5.218 4.687 4.155 4.687 2.59 Z" fill="transparent"></path></svg>';
const __svg_34 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15.552 9.895" overflow="visible"><path d="M 15.552 3.653 L 15.552 9.895 L 12.669 9.895 L 12.669 4.271 C 12.669 3.15 12.08 2.493 11.139 2.493 C 9.904 2.493 9.237 3.614 9.237 5.044 L 9.237 9.895 L 6.334 9.895 L 6.334 4.271 C 6.334 3.15 5.785 2.493 4.824 2.493 C 3.589 2.493 2.902 3.614 2.902 5.044 L 2.902 9.895 L 0 9.895 L 0 0.155 L 2.902 0.155 L 2.902 1.334 C 3.471 0.56 4.609 0 5.923 0 C 7.217 0 8.354 0.599 8.727 1.43 C 9.472 0.599 10.727 0 11.924 0 C 14.042 0 15.552 1.372 15.552 3.653 Z" fill="var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)) /* {&quot;name&quot;:&quot;Off-White&quot;} */"></path></svg>';
const __svg_35 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8.586 6.14" overflow="visible"><path d="M 8.044 1.375 L 5.384 3.996 L 6.824 0.571 L 6.116 0.282 L 4.676 3.707 L 4.676 0 L 3.91 0 L 3.91 3.707 L 2.47 0.282 L 1.762 0.571 L 3.202 3.996 L 0.542 1.375 L 0 1.909 L 4.293 6.14 L 8.586 1.909 Z" fill="var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)) /* {&quot;name&quot;:&quot;Off-White&quot;} */"></path></svg>';
const __svg_36 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 177 99.5\" overflow=\"visible\"><path d=\"M 0 0 L 177 99.5\" fill=\"transparent\" stroke-width=\"2\" stroke=\"var(--token-72a14b31-6f29-4213-aff7-7a715cf36f11, rgb(252, 76, 1)) /* {&quot;name&quot;:&quot;DELIVERY&quot;} */\" stroke-dasharray=\"5\"></path></svg>";
const __svg_37 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 177 99.5\" overflow=\"visible\"><path d=\"M 0 99.5 L 177 0\" fill=\"transparent\" stroke-width=\"2\" stroke=\"var(--token-72a14b31-6f29-4213-aff7-7a715cf36f11, rgb(252, 76, 1)) /* {&quot;name&quot;:&quot;DELIVERY&quot;} */\" stroke-dasharray=\"5\"></path></svg>";
const __svg_38 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 177 99.5\" overflow=\"visible\"><path d=\"M 177 0 L 0 99.5\" fill=\"transparent\" stroke-width=\"2\" stroke=\"var(--token-72a14b31-6f29-4213-aff7-7a715cf36f11, rgb(252, 76, 1)) /* {&quot;name&quot;:&quot;DELIVERY&quot;} */\" stroke-dasharray=\"5\"></path></svg>";
const __svg_39 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 177 309\" overflow=\"visible\"><path d=\"M 177 0 L 0 309\" fill=\"transparent\" stroke-width=\"2\" stroke=\"var(--token-72a14b31-6f29-4213-aff7-7a715cf36f11, rgb(252, 76, 1)) /* {&quot;name&quot;:&quot;DELIVERY&quot;} */\" stroke-dasharray=\"5\"></path></svg>";
const __svg_40 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 177 309\" overflow=\"visible\"><path d=\"M 0 0 L 177 309\" fill=\"transparent\" stroke-width=\"2\" stroke=\"var(--token-72a14b31-6f29-4213-aff7-7a715cf36f11, rgb(252, 76, 1)) /* {&quot;name&quot;:&quot;DELIVERY&quot;} */\" stroke-dasharray=\"5\"></path></svg>";
const __svg_41 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 177 99.5\" overflow=\"visible\"><path d=\"M 177 99.5 L 0 0\" fill=\"transparent\" stroke-width=\"2\" stroke=\"var(--token-72a14b31-6f29-4213-aff7-7a715cf36f11, rgb(252, 76, 1)) /* {&quot;name&quot;:&quot;DELIVERY&quot;} */\" stroke-dasharray=\"5\"></path></svg>";
const __svg_42 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 177 310\" overflow=\"visible\"><path d=\"M 177 310 L 0 0\" fill=\"transparent\" stroke-width=\"2\" stroke=\"var(--token-72a14b31-6f29-4213-aff7-7a715cf36f11, rgb(252, 76, 1)) /* {&quot;name&quot;:&quot;DELIVERY&quot;} */\" stroke-dasharray=\"5\"></path></svg>";
const __svg_43 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 177 310\" overflow=\"visible\"><path d=\"M 0 310 L 177 0\" fill=\"transparent\" stroke-width=\"2\" stroke=\"var(--token-72a14b31-6f29-4213-aff7-7a715cf36f11, rgb(252, 76, 1)) /* {&quot;name&quot;:&quot;DELIVERY&quot;} */\" stroke-dasharray=\"5\"></path></svg>";
const __svg_44 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 1 206.5\" overflow=\"visible\"><path d=\"M 0 206.5 L 0 0\" fill=\"transparent\" stroke-width=\"2\" stroke=\"var(--token-72a14b31-6f29-4213-aff7-7a715cf36f11, rgb(252, 76, 1)) /* {&quot;name&quot;:&quot;DELIVERY&quot;} */\" stroke-dasharray=\"5\"></path></svg>";
const __svg_45 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 355.5 1\" overflow=\"visible\"><path d=\"M 355.5 0 L 0 0\" fill=\"transparent\" stroke-width=\"2\" stroke=\"var(--token-72a14b31-6f29-4213-aff7-7a715cf36f11, rgb(252, 76, 1)) /* {&quot;name&quot;:&quot;DELIVERY&quot;} */\" stroke-dasharray=\"5\"></path></svg>";
const __svg_46 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 1 206.5\" overflow=\"visible\"><path d=\"M 0 0 L 0 206.5\" fill=\"transparent\" stroke-width=\"2\" stroke=\"var(--token-72a14b31-6f29-4213-aff7-7a715cf36f11, rgb(252, 76, 1)) /* {&quot;name&quot;:&quot;DELIVERY&quot;} */\" stroke-dasharray=\"5\"></path></svg>";
const __svg_47 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 355.5 1\" overflow=\"visible\"><path d=\"M 0 0 L 355.5 0\" fill=\"transparent\" stroke-width=\"2\" stroke=\"var(--token-72a14b31-6f29-4213-aff7-7a715cf36f11, rgb(252, 76, 1)) /* {&quot;name&quot;:&quot;DELIVERY&quot;} */\" stroke-dasharray=\"5\"></path></svg>";
const __svg_48 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 355.5 208.5\" overflow=\"visible\"><path d=\"M 0 0 L 355.5 208.5\" fill=\"transparent\" stroke-width=\"3\" stroke=\"var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)) /* {&quot;name&quot;:&quot;Background&quot;} */\" stroke-dasharray=\"6\"></path></svg>";
const __svg_49 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 1 409.5\" overflow=\"visible\"><path d=\"M 0 409.5 L 0 0\" fill=\"transparent\" stroke-width=\"3\" stroke=\"var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)) /* {&quot;name&quot;:&quot;Background&quot;} */\" stroke-dasharray=\"6\"></path></svg>";
const __svg_50 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 355.5 208.5\" overflow=\"visible\"><path d=\"M 0 208.5 L 355.5 0\" fill=\"transparent\" stroke-width=\"3\" stroke=\"var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)) /* {&quot;name&quot;:&quot;Background&quot;} */\" stroke-dasharray=\"6\"></path></svg>";
const __svg_51 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 71.597 18.408\" overflow=\"visible\"><g><path d=\"M 0 0.001 L 7.669 0.001 C 10.773 0.001 12.866 1.805 12.866 4.499 C 12.866 6.1 11.832 7.548 10.47 8.133 C 12.412 8.692 13.85 10.445 13.85 12.478 C 13.85 15.68 11.353 17.789 7.72 17.789 L 0 17.789 Z M 9.032 5.134 C 9.032 4.118 8.199 3.406 7.039 3.406 L 4.011 3.406 L 4.011 6.862 L 7.039 6.862 C 8.199 6.862 9.032 6.176 9.032 5.134 Z M 9.839 12.173 C 9.839 10.903 8.805 10.039 7.316 10.039 L 4.011 10.039 L 4.011 14.384 L 7.316 14.384 C 8.805 14.384 9.839 13.469 9.839 12.173 Z\" fill=\"var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)) /* {&quot;name&quot;:&quot;Off-White&quot;} */\"></path><path d=\"M 15.666 0 L 19.4 0 L 19.4 17.789 L 15.666 17.789 Z\" fill=\"var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)) /* {&quot;name&quot;:&quot;Off-White&quot;} */\"></path><path d=\"M 20.964 11.776 C 20.964 7.913 23.815 5.194 27.726 5.194 C 31.661 5.194 34.487 7.913 34.487 11.776 C 34.487 15.664 31.636 18.408 27.726 18.408 C 23.79 18.408 20.964 15.638 20.964 11.776 Z M 30.753 11.776 C 30.753 9.743 29.517 8.371 27.726 8.371 C 25.934 8.371 24.723 9.717 24.723 11.776 C 24.723 13.834 25.934 15.232 27.726 15.232 C 29.517 15.232 30.753 13.834 30.753 11.776 Z\" fill=\"var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)) /* {&quot;name&quot;:&quot;Off-White&quot;} */\"></path><path d=\"M 35.553 11.776 C 35.553 7.913 38.404 5.194 42.314 5.194 C 46.25 5.194 49.075 7.913 49.075 11.776 C 49.075 15.664 46.225 18.408 42.314 18.408 C 38.378 18.408 35.553 15.638 35.553 11.776 Z M 45.341 11.776 C 45.341 9.743 44.105 8.371 42.314 8.371 C 40.523 8.371 39.312 9.717 39.312 11.776 C 39.312 13.834 40.523 15.232 42.314 15.232 C 44.105 15.232 45.341 13.834 45.341 11.776 Z\" fill=\"var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)) /* {&quot;name&quot;:&quot;Off-White&quot;} */\"></path><path d=\"M 71.597 9.579 L 71.597 17.788 L 67.889 17.788 L 67.889 10.393 C 67.889 8.919 67.132 8.055 65.921 8.055 C 64.332 8.055 63.474 9.529 63.474 11.409 L 63.474 17.788 L 59.74 17.788 L 59.74 10.393 C 59.74 8.919 59.034 8.055 57.797 8.055 C 56.208 8.055 55.325 9.529 55.325 11.409 L 55.325 17.788 L 51.591 17.788 L 51.591 4.98 L 55.325 4.98 L 55.325 6.53 C 56.057 5.514 57.52 4.777 59.21 4.777 C 60.875 4.777 62.338 5.564 62.818 6.657 C 63.776 5.564 65.391 4.777 66.93 4.777 C 69.655 4.777 71.597 6.581 71.597 9.579 Z\" fill=\"var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)) /* {&quot;name&quot;:&quot;Off-White&quot;} */\"></path></g></svg>";
const __svg_52 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 13.85 17.789\" overflow=\"visible\"><path d=\"M 0 0 L 7.669 0 C 10.773 0 12.866 1.804 12.866 4.498 C 12.866 6.099 11.832 7.547 10.47 8.132 C 12.412 8.691 13.85 10.444 13.85 12.477 C 13.85 15.679 11.353 17.789 7.72 17.789 L 0 17.789 Z M 9.032 5.133 C 9.032 4.117 8.199 3.405 7.039 3.405 L 4.011 3.405 L 4.011 6.861 L 7.039 6.861 C 8.199 6.861 9.032 6.175 9.032 5.133 Z M 9.839 12.173 C 9.839 10.902 8.805 10.038 7.316 10.038 L 4.011 10.038 L 4.011 14.383 L 7.316 14.383 C 8.805 14.383 9.839 13.468 9.839 12.173 Z\" fill=\"var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)) /* {&quot;name&quot;:&quot;Off-White&quot;} */\"></path></svg>";
const __svg_53 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 13.85 17.789\" overflow=\"visible\"><path d=\"M 0 0 L 7.669 0 C 10.773 0 12.866 1.804 12.866 4.498 C 12.866 6.099 11.832 7.547 10.47 8.132 C 12.412 8.691 13.85 10.444 13.85 12.477 C 13.85 15.679 11.353 17.789 7.72 17.789 L 0 17.789 Z\" fill=\"transparent\"></path></svg>";
const __svg_54 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 5.021 3.456\" overflow=\"visible\"><path d=\"M 5.021 1.728 C 5.021 0.711 4.188 0 3.027 0 L 0 0 L 0 3.456 L 3.027 3.456 C 4.188 3.456 5.021 2.77 5.021 1.728 Z\" fill=\"transparent\"></path></svg>";
const __svg_55 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 5.828 4.345\" overflow=\"visible\"><path d=\"M 5.828 2.135 C 5.828 0.864 4.794 0 3.305 0 L 0 0 L 0 4.345 L 3.305 4.345 C 4.794 4.345 5.828 3.431 5.828 2.135 Z\" fill=\"transparent\"></path></svg>";
const __svg_56 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 3.734 17.789\" overflow=\"visible\"><path d=\"M 0 0 L 3.734 0 L 3.734 17.789 L 0 17.789 Z\" fill=\"var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)) /* {&quot;name&quot;:&quot;Off-White&quot;} */\"></path></svg>";
const __svg_57 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 13.522 13.214\" overflow=\"visible\"><path d=\"M 0 6.582 C 0 2.719 2.851 0 6.761 0 C 10.697 0 13.522 2.719 13.522 6.582 C 13.522 10.47 10.672 13.214 6.761 13.214 C 2.826 13.214 0 10.444 0 6.582 Z M 9.789 6.582 C 9.789 4.549 8.552 3.177 6.761 3.177 C 4.97 3.177 3.759 4.523 3.759 6.582 C 3.759 8.64 4.97 10.038 6.761 10.038 C 8.552 10.038 9.789 8.64 9.789 6.582 Z\" fill=\"var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)) /* {&quot;name&quot;:&quot;Off-White&quot;} */\"></path></svg>";
const __svg_58 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 13.522 13.214\" overflow=\"visible\"><path d=\"M 0 6.582 C 0 2.719 2.851 0 6.761 0 C 10.697 0 13.522 2.719 13.522 6.582 C 13.522 10.47 10.672 13.214 6.761 13.214 C 2.826 13.214 0 10.444 0 6.582 Z\" fill=\"transparent\"></path></svg>";
const __svg_59 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 6.03 6.861\" overflow=\"visible\"><path d=\"M 6.03 3.405 C 6.03 1.372 4.793 0 3.002 0 C 1.211 0 0 1.347 0 3.405 C 0 5.464 1.211 6.861 3.002 6.861 C 4.793 6.861 6.03 5.464 6.03 3.405 Z\" fill=\"transparent\"></path></svg>";
const __svg_60 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 13.522 13.214\" overflow=\"visible\"><path d=\"M 0 6.582 C 0 2.719 2.851 0 6.761 0 C 10.697 0 13.522 2.719 13.522 6.582 C 13.522 10.47 10.672 13.214 6.761 13.214 C 2.826 13.214 0 10.444 0 6.582 Z M 9.789 6.582 C 9.789 4.549 8.552 3.177 6.761 3.177 C 4.97 3.177 3.759 4.523 3.759 6.582 C 3.759 8.64 4.97 10.038 6.761 10.038 C 8.553 10.038 9.789 8.64 9.789 6.582 Z\" fill=\"var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)) /* {&quot;name&quot;:&quot;Off-White&quot;} */\"></path></svg>";
const __svg_61 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 13.522 13.214\" overflow=\"visible\"><path d=\"M 0 6.582 C 0 2.719 2.851 0 6.761 0 C 10.697 0 13.522 2.719 13.522 6.582 C 13.522 10.47 10.672 13.214 6.761 13.214 C 2.826 13.214 0 10.444 0 6.582 Z\" fill=\"transparent\"></path></svg>";
const __svg_62 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 6.029 6.861\" overflow=\"visible\"><path d=\"M 6.029 3.405 C 6.029 1.372 4.793 0 3.002 0 C 1.211 0 0 1.347 0 3.405 C 0 5.464 1.211 6.861 3.002 6.861 C 4.794 6.861 6.029 5.464 6.029 3.405 Z\" fill=\"transparent\"></path></svg>";
const __svg_63 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 20.006 13.011\" overflow=\"visible\"><path d=\"M 20.006 4.803 L 20.006 13.011 L 16.298 13.011 L 16.298 5.616 C 16.298 4.142 15.541 3.278 14.33 3.278 C 12.74 3.278 11.883 4.752 11.883 6.633 L 11.883 13.011 L 8.149 13.011 L 8.149 5.616 C 8.149 4.142 7.442 3.278 6.206 3.278 C 4.617 3.278 3.734 4.752 3.734 6.633 L 3.734 13.011 L 0 13.011 L 0 0.203 L 3.734 0.203 L 3.734 1.753 C 4.465 0.737 5.929 0 7.619 0 C 9.284 0 10.747 0.788 11.227 1.88 C 12.185 0.788 13.8 0 15.339 0 C 18.064 0 20.006 1.804 20.006 4.803 Z\" fill=\"var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)) /* {&quot;name&quot;:&quot;Off-White&quot;} */\"></path></svg>";
const __svg_64 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 11.045 8.073\" overflow=\"visible\"><path d=\"M 10.348 1.808 L 6.927 5.254 L 8.778 0.751 L 7.867 0.371 L 6.016 4.874 L 6.016 0 L 5.03 0 L 5.03 4.874 L 3.178 0.371 L 2.267 0.751 L 4.119 5.254 L 0.697 1.808 L 0 2.51 L 5.523 8.073 L 11.045 2.51 Z\" fill=\"var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)) /* {&quot;name&quot;:&quot;Off-White&quot;} */\"></path></svg>";


// http-url:https://framerusercontent.com/modules/YfEYT8QkrGDaS9Lb0skA/BXDs6cAYAOGiPxX3IeBQ/IHS33mEeO.js
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
  const href = useSVGTemplate("1284345466", svg);
  return <SVG {...restProps} className={cx("framer-b4RVU", className)} layoutId={layoutId} ref={ref} role="presentation" style={{
    "--17yrnt4": oCwLU7ISg,
    "--urmpk": aehKIzIL6,
    ...style
  }} viewBox="0 0 36 36">{<use href={href} />}</SVG>;
});
var css = [`.framer-b4RVU { -webkit-mask: ${mask}; aspect-ratio: 1; display: block; mask: ${mask}; width: 36px; }`];
var Icon = withCSS(Component, css, "framer-b4RVU");
Icon.displayName = "component";
var IHS33mEeO_default = Icon;
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

// http-url:https://framerusercontent.com/modules/JJWbXhmygT9aKZIdWP4K/YTGyh7S1apQZtHDtviDl/iUev6L3gl.js
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
  const href = useSVGTemplate2("2658297464", svg2);
  return <SVG2 {...restProps} className={cx2("framer-gfMgn", className)} layoutId={layoutId} ref={ref} role="presentation" style={{
    "--17yrnt4": oCwLU7ISg,
    "--urmpk": aehKIzIL6,
    ...style
  }} viewBox="0 0 36 36">{<use href={href} />}</SVG2>;
});
var css2 = [`.framer-gfMgn { -webkit-mask: ${mask2}; aspect-ratio: 1; display: block; mask: ${mask2}; width: 36px; }`];
var Icon2 = withCSS2(Component2, css2, "framer-gfMgn");
Icon2.displayName = "wrench";
var iUev6L3gl_default = Icon2;
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

// http-url:https://framerusercontent.com/modules/nPZNmBm82sghbKZaTNBL/beaKAnCSLDEORdNVZkqL/kZLRHbEEz.js
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
  const href = useSVGTemplate3("268734193", svg3);
  return <SVG3 {...restProps} className={cx3("framer-zFw1B", className)} layoutId={layoutId} ref={ref} role="presentation" style={{
    "--17yrnt4": oCwLU7ISg,
    "--urmpk": aehKIzIL6,
    ...style
  }} viewBox="0 0 36 36">{<use href={href} />}</SVG3>;
});
var css3 = [`.framer-zFw1B { -webkit-mask: ${mask3}; aspect-ratio: 1; display: block; mask: ${mask3}; width: 36px; }`];
var Icon3 = withCSS3(Component3, css3, "framer-zFw1B");
Icon3.displayName = "boxes";
var kZLRHbEEz_default = Icon3;
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

// http-url:https://framerusercontent.com/modules/7rMKhwjILRRjkpvpuA9s/qAKYS9dAUJ7DUBA1iA57/MXmhQfjAM.js
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
  const href = useSVGTemplate4("3086703992", svg4);
  return <SVG4 {...restProps} className={cx4("framer-D6C6T", className)} layoutId={layoutId} ref={ref} role="presentation" style={{
    "--17yrnt4": oCwLU7ISg,
    "--urmpk": aehKIzIL6,
    ...style
  }} viewBox="0 0 36 36">{<use href={href} />}</SVG4>;
});
var css4 = [`.framer-D6C6T { -webkit-mask: ${mask4}; aspect-ratio: 1; display: block; mask: ${mask4}; width: 36px; }`];
var Icon4 = withCSS4(Component4, css4, "framer-D6C6T");
Icon4.displayName = "engineering";
var MXmhQfjAM_default = Icon4;
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

// http-url:https://framerusercontent.com/modules/0a41ni2V5fVZIn5RPbep/tDE9YZNAVwozowbpgK4p/S_bPD60mp.js
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
  const href = useSVGTemplate5("4043011827", svg5);
  return <SVG5 {...restProps} className={cx5("framer-WHoVG", className)} layoutId={layoutId} ref={ref} role="presentation" style={{
    "--17yrnt4": oCwLU7ISg,
    "--urmpk": aehKIzIL6,
    ...style
  }} viewBox="0 0 36 36">{<use href={href} />}</SVG5>;
});
var css5 = [`.framer-WHoVG { -webkit-mask: ${mask5}; aspect-ratio: 1; display: block; mask: ${mask5}; width: 36px; }`];
var Icon5 = withCSS5(Component5, css5, "framer-WHoVG");
Icon5.displayName = "engine";
var S_bPD60mp_default = Icon5;
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

// http-url:https://framerusercontent.com/modules/DGhjQrvN4S7iQgOjbWwA/MXWoCXMkE7VpW7PMn4FT/TdzQPBCMZ.js
import { jsx as _jsx6 } from "react/jsx-runtime";
import { addPropertyControls as addPropertyControls6, ControlType as ControlType6, cx as cx6, motion as motion6, useSVGTemplate as useSVGTemplate6, withCSS as withCSS6 } from "@proofly-framer/runtime";
import * as React6 from "react";
import { forwardRef as forwardRef12 } from "react";
import { jsx as _ctxJsx } from "react/jsx-runtime";
import { ContextProviders, useVariant } from "@proofly-framer/runtime";
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
  const href = useSVGTemplate6("3772362401", svg6);
  return <SVG6 {...restProps} className={cx6("framer-zgg2C", className)} layoutId={layoutId} ref={ref} role="presentation" style={{
    "--17yrnt4": oCwLU7ISg,
    "--urmpk": aehKIzIL6,
    ...style
  }} viewBox="0 0 36 36">{<use href={href} />}</SVG6>;
});
var css6 = [`.framer-zgg2C { -webkit-mask: ${mask6}; aspect-ratio: 1; display: block; mask: ${mask6}; width: 36px; }`];
var Icon6 = withCSS6(Component6, css6, "framer-zgg2C");
Icon6.displayName = "delivery";
var TdzQPBCMZ_default = Icon6;
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

// http-url:https://framerusercontent.com/modules/wsYj4m2fNzs59inTVc5v/cRWq8ePTkg6x151qHfnR/mFZoa_YQL.js
var MotionDivWithFX = withFX(motion7.div);
var BoxesFonts = getFonts(kZLRHbEEz_default);
var WrenchFonts = getFonts(iUev6L3gl_default);
var EngineeringFonts = getFonts(MXmhQfjAM_default);
var EngineFonts = getFonts(S_bPD60mp_default);
var Component1Fonts = getFonts(IHS33mEeO_default);
var DeliveryFonts = getFonts(TdzQPBCMZ_default);
var cycleOrder = ["n1N7kZ2oz", "pzh8QG8Al"];
var serializationHash = "framer-wEk0V";
var variantClassNames = {
  n1N7kZ2oz: "framer-v-14rpo9m",
  pzh8QG8Al: "framer-v-1lv5nx4"
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
  delay: 1.5,
  duration: 0.5,
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
var animation2 = {
  opacity: 0,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 0.2,
  skewX: 0,
  skewY: 0,
  x: 0,
  y: 0
};
var transition3 = {
  delay: 1,
  duration: 0.5,
  ease: [0.44, 0, 0.56, 1],
  type: "tween"
};
var animation3 = {
  opacity: 0,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 0.2,
  skewX: 0,
  skewY: 0,
  transition: transition3,
  x: 0,
  y: 0
};
var animation4 = {
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
var animation5 = {
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
var animation6 = {
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
var animation7 = {
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
var animation8 = {
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
var animation9 = {
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
var animation10 = {
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
var animation11 = {
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
  const config = React7.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React7.useMemo(() => ({
    ...config,
    transition
  }), [JSON.stringify(transition)]);
  return <MotionConfigContext.Provider value={contextValue}>{children}</MotionConfigContext.Provider>;
};
var Variants = motion7.create(React7.Fragment);
var humanReadableVariantMap = {
  hexagon: "n1N7kZ2oz",
  PHONE: "pzh8QG8Al"
};
var getProps7 = ({
  height,
  id,
  width,
  ...props
}) => {
  return {
    ...props,
    variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "n1N7kZ2oz"
  };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component7 = React7.forwardRef(function (props, ref) {
  const fallbackRef = useRef(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React7.useId();
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
  } = getProps7(props);
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
    defaultVariant: "n1N7kZ2oz",
    ref: refBinding,
    variant,
    variantClassNames
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx7(serializationHash, ...sharedStyleClassNames);
  return <LayoutGroup id={layoutId ?? defaultLayoutId}>{<Variants animate={variants} initial={false}>{<Transition value={transition1}>{_jsx7(motion7.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx7(scopingClassNames, "framer-14rpo9m", className, classNames),
          "data-framer-name": "hexagon",
          layoutDependency,
          layoutId: "n1N7kZ2oz",
          ref: refBinding,
          style: {
            ...style
          },
          ...addPropertyOverrides({
            pzh8QG8Al: {
              "data-framer-name": "PHONE"
            }
          }, baseVariant, gestureVariant),
          children: _jsxs(motion7.div, {
            className: "framer-kibctf",
            "data-framer-name": "Group 744",
            layoutDependency,
            layoutId: "mgvcnyDRS",
            children: [<MotionDivWithFX __framer__animate={{
              transition: transition2
            }} __framer__animateOnce __framer__enter={animation} __framer__exit={animation1} __framer__styleAppearEffectEnabled __framer__threshold={0.5} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-10a6tag" data-framer-name="colored lines" layoutDependency={layoutDependency} layoutId="TifPnxImE">{<SVG7 className="framer-agh76d" layoutDependency={layoutDependency} layoutId="iAo5f2zXe" opacity={1} requiresOverflowVisible svg={__svg_36} withExternalLayout {...addPropertyOverrides({
                pzh8QG8Al: {
                  svg: __svg_7
                }
              }, baseVariant, gestureVariant)} />}{<SVG7 className="framer-adu295" layoutDependency={layoutDependency} layoutId="Ds6CvO2RI" opacity={1} requiresOverflowVisible svg={__svg_37} withExternalLayout {...addPropertyOverrides({
                pzh8QG8Al: {
                  svg: __svg_8
                }
              }, baseVariant, gestureVariant)} />}{<SVG7 className="framer-1l151mh" layoutDependency={layoutDependency} layoutId="dfackeYph" opacity={1} requiresOverflowVisible svg={__svg_38} withExternalLayout {...addPropertyOverrides({
                pzh8QG8Al: {
                  svg: __svg_9
                }
              }, baseVariant, gestureVariant)} />}{<SVG7 className="framer-snchpx" layoutDependency={layoutDependency} layoutId="dHvNhyabK" opacity={1} requiresOverflowVisible svg={__svg_39} withExternalLayout {...addPropertyOverrides({
                pzh8QG8Al: {
                  svg: __svg_10
                }
              }, baseVariant, gestureVariant)} />}{<SVG7 className="framer-3cu6jl" layoutDependency={layoutDependency} layoutId="nhtf8g6L1" opacity={1} requiresOverflowVisible svg={__svg_40} withExternalLayout {...addPropertyOverrides({
                pzh8QG8Al: {
                  svg: __svg_11
                }
              }, baseVariant, gestureVariant)} />}{<SVG7 className="framer-1c7dq0x" layoutDependency={layoutDependency} layoutId="iFHzRQWGn" opacity={1} requiresOverflowVisible svg={__svg_41} withExternalLayout {...addPropertyOverrides({
                pzh8QG8Al: {
                  svg: __svg_12
                }
              }, baseVariant, gestureVariant)} />}{<SVG7 className="framer-1got45w" layoutDependency={layoutDependency} layoutId="gAC2V4HQO" opacity={1} requiresOverflowVisible svg={__svg_42} withExternalLayout {...addPropertyOverrides({
                pzh8QG8Al: {
                  svg: __svg_13
                }
              }, baseVariant, gestureVariant)} />}{<SVG7 className="framer-1div7jl" layoutDependency={layoutDependency} layoutId="eSs_RsyZj" opacity={1} requiresOverflowVisible svg={__svg_43} withExternalLayout {...addPropertyOverrides({
                pzh8QG8Al: {
                  svg: __svg_14
                }
              }, baseVariant, gestureVariant)} />}{<SVG7 className="framer-9anr5s" layoutDependency={layoutDependency} layoutId="ysOGZowOM" opacity={1} requiresOverflowVisible svg={__svg_44} withExternalLayout {...addPropertyOverrides({
                pzh8QG8Al: {
                  svg: __svg_15
                }
              }, baseVariant, gestureVariant)} />}{<SVG7 className="framer-15cgjzu" layoutDependency={layoutDependency} layoutId="HBwhKwzgr" opacity={1} requiresOverflowVisible svg={__svg_45} withExternalLayout {...addPropertyOverrides({
                pzh8QG8Al: {
                  svg: __svg_16
                }
              }, baseVariant, gestureVariant)} />}{<SVG7 className="framer-a6qow0" layoutDependency={layoutDependency} layoutId="Jc5vRyx_x" opacity={1} requiresOverflowVisible svg={__svg_46} withExternalLayout {...addPropertyOverrides({
                pzh8QG8Al: {
                  svg: __svg_17
                }
              }, baseVariant, gestureVariant)} />}{<SVG7 className="framer-gt1s12" layoutDependency={layoutDependency} layoutId="tXTGXTb14" opacity={1} requiresOverflowVisible svg={__svg_47} withExternalLayout {...addPropertyOverrides({
                pzh8QG8Al: {
                  svg: __svg_18
                }
              }, baseVariant, gestureVariant)} />}</MotionDivWithFX>, <MotionDivWithFX __framer__animate={{
              transition: transition3
            }} __framer__animateOnce __framer__enter={animation2} __framer__exit={animation3} __framer__styleAppearEffectEnabled __framer__threshold={0.5} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-1idhm2o" data-framer-name="white lines" layoutDependency={layoutDependency} layoutId="KBeAPXljx">{<SVG7 className="framer-6qr6gq" layoutDependency={layoutDependency} layoutId="c8tAHMImS" opacity={1} requiresOverflowVisible svg={__svg_48} withExternalLayout {...addPropertyOverrides({
                pzh8QG8Al: {
                  svg: __svg_19
                }
              }, baseVariant, gestureVariant)} />}{<SVG7 className="framer-1652fz8" layoutDependency={layoutDependency} layoutId="yMkYMKATN" opacity={1} requiresOverflowVisible svg={__svg_49} withExternalLayout {...addPropertyOverrides({
                pzh8QG8Al: {
                  svg: __svg_20
                }
              }, baseVariant, gestureVariant)} />}{<SVG7 className="framer-tmh7vq" layoutDependency={layoutDependency} layoutId="sXR03pUzY" opacity={1} requiresOverflowVisible svg={__svg_50} withExternalLayout {...addPropertyOverrides({
                pzh8QG8Al: {
                  svg: __svg_21
                }
              }, baseVariant, gestureVariant)} />}</MotionDivWithFX>, <MotionDivWithFX __framer__animate={{
              transition: transition4
            }} __framer__animateOnce __framer__enter={animation4} __framer__exit={animation5} __framer__styleAppearEffectEnabled __framer__threshold={0.5} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-1awllap" data-framer-name="warehouse" layoutDependency={layoutDependency} layoutId="s8kc8a881" style={{
              backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))",
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              boxShadow: "0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06)"
            }}>{_jsx7(kZLRHbEEz_default, {
                animated: true,
                className: "framer-jw4ucp",
                layoutDependency,
                layoutId: "xJlXLHWWg",
                style: {
                  "--17yrnt4": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                  "--urmpk": 1.5
                }
              })}{<RichText __fromCanvasComponent className="framer-1vlb4gy" data-framer-name="Warehouse" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="U0WiN4hqV" style={{
                "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                "--framer-paragraph-spacing": "2.5446794033050537px"
              }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides({
                pzh8QG8Al: {
                  children: <React7.Fragment>{_jsx7(motion7.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "10px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "center",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                      },
                      children: "Warehouse"
                    })}</React7.Fragment>
                }
              }, baseVariant, gestureVariant)}>{<React7.Fragment>{_jsx7(motion7.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-font-size": "12px",
                      "--framer-line-height": "120%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                    },
                    children: "Warehouse"
                  })}</React7.Fragment>}</RichText>}</MotionDivWithFX>, <MotionDivWithFX __framer__animate={{
              transition: transition5
            }} __framer__animateOnce __framer__enter={animation4} __framer__exit={animation6} __framer__styleAppearEffectEnabled __framer__threshold={0.5} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-1xzoej6" data-framer-name="after-sales" layoutDependency={layoutDependency} layoutId="Nc6TXYGGU" style={{
              backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))",
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              boxShadow: "0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06)"
            }}>{_jsx7(iUev6L3gl_default, {
                animated: true,
                className: "framer-py6qyy",
                layoutDependency,
                layoutId: "WCJozw3eD",
                style: {
                  "--17yrnt4": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                  "--urmpk": 1.5
                }
              })}{<RichText __fromCanvasComponent className="framer-1dgcbju" data-framer-name="After-Sales\u2028Service" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="HjKI4sD1V" style={{
                "--extracted-3sq8v0": "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(234, 234, 235))",
                "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                "--framer-paragraph-spacing": "2.5446794033050537px"
              }} variants={{
                pzh8QG8Al: {
                  "--extracted-1w3ko1f": "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(234, 234, 235))"
                }
              }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides({
                pzh8QG8Al: {
                  children: <React7.Fragment>{_jsxs(motion7.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "10px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "center",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                      },
                      children: ["After-Sales", _jsx7(motion7.span, {
                        style: {
                          "--framer-text-color": "var(--extracted-1w3ko1f, var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(234, 234, 235)))"
                        },
                        children: _jsx7(motion7.br, {})
                      }), "Service"]
                    })}</React7.Fragment>
                }
              }, baseVariant, gestureVariant)}>{<React7.Fragment>{_jsxs(motion7.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-font-size": "10px",
                      "--framer-line-height": "120%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                    },
                    children: [_jsx7(motion7.span, {
                      style: {
                        "--framer-font-size": "12px"
                      },
                      children: "After-Sales"
                    }), _jsx7(motion7.span, {
                      style: {
                        "--framer-font-size": "12px",
                        "--framer-text-color": "var(--extracted-3sq8v0, var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(234, 234, 235)))"
                      },
                      children: _jsx7(motion7.br, {})
                    }), _jsx7(motion7.span, {
                      style: {
                        "--framer-font-size": "12px"
                      },
                      children: "Service"
                    })]
                  })}</React7.Fragment>}</RichText>}</MotionDivWithFX>, <MotionDivWithFX __framer__animate={{
              transition: transition6
            }} __framer__animateOnce __framer__enter={animation4} __framer__exit={animation7} __framer__styleAppearEffectEnabled __framer__threshold={0.5} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-19wdizr" data-framer-name="engineering" layoutDependency={layoutDependency} layoutId="lojFMug3W" style={{
              backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))",
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              boxShadow: "0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06)"
            }}>{<MXmhQfjAM_default animated className="framer-rnhou6" layoutDependency={layoutDependency} layoutId="ZSKJ4dLcl" style={{
                "--17yrnt4": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                "--urmpk": 1.5
              }} />}{<RichText __fromCanvasComponent className="framer-rfmxqs" data-framer-name="Engineering" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="tM2G8tdXA" style={{
                "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                "--framer-paragraph-spacing": "2.5446794033050537px"
              }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides({
                pzh8QG8Al: {
                  children: <React7.Fragment>{_jsx7(motion7.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "10px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "center",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                      },
                      children: "Engineering"
                    })}</React7.Fragment>
                }
              }, baseVariant, gestureVariant)}>{<React7.Fragment>{_jsx7(motion7.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-font-size": "12px",
                      "--framer-line-height": "120%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                    },
                    children: "Engineering"
                  })}</React7.Fragment>}</RichText>}</MotionDivWithFX>, <MotionDivWithFX __framer__animate={{
              transition: transition7
            }} __framer__animateOnce __framer__enter={animation4} __framer__exit={animation8} __framer__styleAppearEffectEnabled __framer__threshold={0.5} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-1jkrcr4" data-framer-name="manufacturing" layoutDependency={layoutDependency} layoutId="DuKuYvUlZ" style={{
              backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))",
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              boxShadow: "0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06)"
            }}>{<S_bPD60mp_default animated className="framer-1hd99pg" layoutDependency={layoutDependency} layoutId="RKMisfQ6g" style={{
                "--17yrnt4": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                "--urmpk": 1.5
              }} />}{<RichText __fromCanvasComponent className="framer-pzar8d" data-framer-name="Manufacturing\u2028& Assembly" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="fxA2fvY0G" style={{
                "--extracted-3sq8v0": "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(234, 234, 235))",
                "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                "--framer-paragraph-spacing": "2.5446794033050537px"
              }} variants={{
                pzh8QG8Al: {
                  "--extracted-1w3ko1f": "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(234, 234, 235))"
                }
              }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides({
                pzh8QG8Al: {
                  children: <React7.Fragment>{_jsxs(motion7.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "10px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "center",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                      },
                      children: ["Manufacturing", _jsx7(motion7.span, {
                        style: {
                          "--framer-text-color": "var(--extracted-1w3ko1f, var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(234, 234, 235)))"
                        },
                        children: _jsx7(motion7.br, {})
                      }), "& Assembly"]
                    })}</React7.Fragment>
                }
              }, baseVariant, gestureVariant)}>{<React7.Fragment>{_jsxs(motion7.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-font-size": "10px",
                      "--framer-line-height": "120%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                    },
                    children: [_jsx7(motion7.span, {
                      style: {
                        "--framer-font-size": "12px"
                      },
                      children: "Manufacturing"
                    }), _jsx7(motion7.span, {
                      style: {
                        "--framer-font-size": "12px",
                        "--framer-text-color": "var(--extracted-3sq8v0, var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(234, 234, 235)))"
                      },
                      children: _jsx7(motion7.br, {})
                    }), _jsx7(motion7.span, {
                      style: {
                        "--framer-font-size": "12px"
                      },
                      children: "& Assembly"
                    })]
                  })}</React7.Fragment>}</RichText>}</MotionDivWithFX>, <MotionDivWithFX __framer__animate={{
              transition: transition8
            }} __framer__animateOnce __framer__enter={animation4} __framer__exit={animation9} __framer__styleAppearEffectEnabled __framer__threshold={0.5} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-6wwae7" data-framer-name="component" layoutDependency={layoutDependency} layoutId="VP8s4xE12" style={{
              backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))",
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              boxShadow: "0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06)"
            }}>{<IHS33mEeO_default animated className="framer-etbzbn" layoutDependency={layoutDependency} layoutId="QfXuYKCxd" style={{
                "--17yrnt4": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                "--urmpk": 1.5
              }} />}{<RichText __fromCanvasComponent className="framer-1w43sz" data-framer-name="Component Sourcing" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="QVVPxdDax" style={{
                "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                "--framer-paragraph-spacing": "2.5446794033050537px"
              }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides({
                pzh8QG8Al: {
                  children: <React7.Fragment>{_jsx7(motion7.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "10px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "center",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                      },
                      children: "Component Sourcing"
                    })}</React7.Fragment>
                }
              }, baseVariant, gestureVariant)}>{<React7.Fragment>{_jsx7(motion7.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-font-size": "12px",
                      "--framer-line-height": "120%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                    },
                    children: "Component Sourcing"
                  })}</React7.Fragment>}</RichText>}</MotionDivWithFX>, <MotionDivWithFX __framer__animate={{
              transition: transition9
            }} __framer__animateOnce __framer__enter={animation4} __framer__exit={animation10} __framer__styleAppearEffectEnabled __framer__threshold={0.5} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-ln59lh" data-framer-name="delivery" layoutDependency={layoutDependency} layoutId="sVmLdJ1OE" style={{
              backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))",
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              boxShadow: "0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06)"
            }}>{<TdzQPBCMZ_default animated className="framer-1a8xirp" layoutDependency={layoutDependency} layoutId="c36ORGC55" style={{
                "--17yrnt4": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                "--urmpk": 1.5
              }} />}{<RichText __fromCanvasComponent className="framer-1mqqkz7" data-framer-name="Delivery" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="wrfqOLtB_" style={{
                "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                "--framer-paragraph-spacing": "2.5446794033050537px"
              }} verticalAlignment="center" withExternalLayout {...addPropertyOverrides({
                pzh8QG8Al: {
                  children: <React7.Fragment>{_jsx7(motion7.p, {
                      style: {
                        "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                        "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                        "--framer-font-size": "10px",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "center",
                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                      },
                      children: "Delivery"
                    })}</React7.Fragment>
                }
              }, baseVariant, gestureVariant)}>{<React7.Fragment>{_jsx7(motion7.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-font-size": "12px",
                      "--framer-line-height": "120%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                    },
                    children: "Delivery"
                  })}</React7.Fragment>}</RichText>}</MotionDivWithFX>, <MotionDivWithFX __framer__animate={{
              transition: transition10
            }} __framer__animateOnce __framer__enter={animation4} __framer__exit={animation11} __framer__styleAppearEffectEnabled __framer__threshold={0.5} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-ny4to5" data-framer-name="bloom" layoutDependency={layoutDependency} layoutId="eCxcuHjb8" style={{
              background: "radial-gradient(100% 100% at 100% 0%, var(--token-d40a5262-b4fe-45d5-9e97-61d735d1744e, rgb(255, 152, 0)) 0%, var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62)) 100%)",
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              boxShadow: "0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06)"
            }}>{_jsxs(motion7.div, {
                className: "framer-r8gp0r",
                layoutDependency,
                layoutId: "kdcK2X1qf",
                children: [<SVG7 className="framer-1jbby1x" layoutDependency={layoutDependency} layoutId="J7WeJc7el" opacity={1} requiresOverflowVisible={false} svg={__svg_51} withExternalLayout {...addPropertyOverrides({
                  pzh8QG8Al: {
                    svg: __svg_22
                  }
                }, baseVariant, gestureVariant)}>{<SVG7 className="framer-sunyog" layoutDependency={layoutDependency} layoutId="qlhB2auAd" opacity={1} requiresOverflowVisible={false} svg={__svg_52} withExternalLayout {...addPropertyOverrides({
                    pzh8QG8Al: {
                      svg: __svg_23
                    }
                  }, baseVariant, gestureVariant)}>{<SVG7 className="framer-49xep2" layoutDependency={layoutDependency} layoutId="G7V0xGa2F" opacity={1} requiresOverflowVisible={false} svg={__svg_53} withExternalLayout {...addPropertyOverrides({
                      pzh8QG8Al: {
                        svg: __svg_24
                      }
                    }, baseVariant, gestureVariant)} />}{<SVG7 className="framer-qj7c3s" layoutDependency={layoutDependency} layoutId="DaE7lnQju" opacity={1} requiresOverflowVisible={false} svg={__svg_54} withExternalLayout {...addPropertyOverrides({
                      pzh8QG8Al: {
                        svg: __svg_25
                      }
                    }, baseVariant, gestureVariant)} />}{<SVG7 className="framer-7chu8m" layoutDependency={layoutDependency} layoutId="mXmR1thi_" opacity={1} requiresOverflowVisible={false} svg={__svg_55} withExternalLayout {...addPropertyOverrides({
                      pzh8QG8Al: {
                        svg: __svg_26
                      }
                    }, baseVariant, gestureVariant)} />}</SVG7>}{<SVG7 className="framer-12zkaso" layoutDependency={layoutDependency} layoutId="R_fzrG22m" opacity={1} requiresOverflowVisible={false} svg={__svg_56} withExternalLayout {...addPropertyOverrides({
                    pzh8QG8Al: {
                      svg: __svg_27
                    }
                  }, baseVariant, gestureVariant)} />}{<SVG7 className="framer-ekpzr0" layoutDependency={layoutDependency} layoutId="P_cfgwj7H" opacity={1} requiresOverflowVisible={false} svg={__svg_57} withExternalLayout {...addPropertyOverrides({
                    pzh8QG8Al: {
                      svg: __svg_28
                    }
                  }, baseVariant, gestureVariant)}>{<SVG7 className="framer-13qj69y" layoutDependency={layoutDependency} layoutId="QfdM9FXXR" opacity={1} requiresOverflowVisible={false} svg={__svg_58} withExternalLayout {...addPropertyOverrides({
                      pzh8QG8Al: {
                        svg: __svg_29
                      }
                    }, baseVariant, gestureVariant)} />}{<SVG7 className="framer-9fqaw6" layoutDependency={layoutDependency} layoutId="vO8SdaAXS" opacity={1} requiresOverflowVisible={false} svg={__svg_59} withExternalLayout {...addPropertyOverrides({
                      pzh8QG8Al: {
                        svg: __svg_30
                      }
                    }, baseVariant, gestureVariant)} />}</SVG7>}{<SVG7 className="framer-1ttyolz" layoutDependency={layoutDependency} layoutId="DWYRLcFVX" opacity={1} requiresOverflowVisible={false} svg={__svg_60} withExternalLayout {...addPropertyOverrides({
                    pzh8QG8Al: {
                      svg: __svg_31
                    }
                  }, baseVariant, gestureVariant)}>{<SVG7 className="framer-a6mwek" layoutDependency={layoutDependency} layoutId="j7WxSpDcd" opacity={1} requiresOverflowVisible={false} svg={__svg_61} withExternalLayout {...addPropertyOverrides({
                      pzh8QG8Al: {
                        svg: __svg_32
                      }
                    }, baseVariant, gestureVariant)} />}{<SVG7 className="framer-1vrvjcm" layoutDependency={layoutDependency} layoutId="wrS0333U9" opacity={1} requiresOverflowVisible={false} svg={__svg_62} withExternalLayout {...addPropertyOverrides({
                      pzh8QG8Al: {
                        svg: __svg_33
                      }
                    }, baseVariant, gestureVariant)} />}</SVG7>}{<SVG7 className="framer-13vf8ap" layoutDependency={layoutDependency} layoutId="jfX7BhM_l" opacity={1} requiresOverflowVisible={false} svg={__svg_63} withExternalLayout {...addPropertyOverrides({
                    pzh8QG8Al: {
                      svg: __svg_34
                    }
                  }, baseVariant, gestureVariant)} />}</SVG7>, <SVG7 className="framer-e6pdnq" layoutDependency={layoutDependency} layoutId="zSc0mFqJP" opacity={1} requiresOverflowVisible={false} svg={__svg_64} withExternalLayout {...addPropertyOverrides({
                  pzh8QG8Al: {
                    svg: __svg_35
                  }
                }, baseVariant, gestureVariant)} />]
              })}</MotionDivWithFX>]
          })
        })}</Transition>}</Variants>}</LayoutGroup>;
});
var css7 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-wEk0V.framer-1riuj8z, .framer-wEk0V .framer-1riuj8z { display: block; }", ".framer-wEk0V.framer-14rpo9m { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 431px; }", ".framer-wEk0V .framer-kibctf { flex: none; height: 486px; overflow: visible; position: relative; width: 431px; }", ".framer-wEk0V .framer-10a6tag { flex: none; height: 411px; left: calc(49.88399071925757% - 357px / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 411px / 2); width: 357px; }", ".framer-wEk0V .framer-agh76d { height: 100px; left: 179px; position: absolute; top: 1px; width: 177px; }", ".framer-wEk0V .framer-adu295 { height: 100px; left: 179px; position: absolute; top: 309px; width: 177px; }", ".framer-wEk0V .framer-1l151mh { height: 100px; left: 2px; position: absolute; top: 0px; width: 177px; }", ".framer-wEk0V .framer-snchpx { height: 309px; left: 2px; position: absolute; top: 0px; width: 177px; }", ".framer-wEk0V .framer-3cu6jl { height: 309px; left: 179px; position: absolute; top: 0px; width: 177px; }", ".framer-wEk0V .framer-1c7dq0x { height: 100px; left: 2px; position: absolute; top: 311px; width: 177px; }", ".framer-wEk0V .framer-1got45w { height: 310px; left: 2px; position: absolute; top: 101px; width: 177px; }", ".framer-wEk0V .framer-1div7jl { height: 310px; left: 179px; position: absolute; top: 101px; width: 177px; }", ".framer-wEk0V .framer-9anr5s { height: 207px; left: 356px; position: absolute; top: 101px; width: 1px; }", ".framer-wEk0V .framer-15cgjzu { height: 1px; left: 0px; position: absolute; top: 307px; width: 356px; }", ".framer-wEk0V .framer-a6qow0 { height: 207px; left: 0px; position: absolute; top: 101px; width: 1px; }", ".framer-wEk0V .framer-gt1s12 { height: 1px; left: 0px; position: absolute; top: 101px; width: 356px; }", ".framer-wEk0V .framer-1idhm2o { flex: none; height: 410px; left: calc(49.88399071925757% - 356px / 2); overflow: visible; position: absolute; top: calc(50.205761316872454% - 410px / 2); width: 356px; }", ".framer-wEk0V .framer-6qr6gq, .framer-wEk0V .framer-tmh7vq { height: 209px; left: 0px; position: absolute; top: 100px; width: 356px; }", ".framer-wEk0V .framer-1652fz8 { height: 410px; left: 179px; position: absolute; top: 0px; width: 1px; }", ".framer-wEk0V .framer-1awllap { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 96px; justify-content: space-between; left: calc(50.11600928074248% - 96px / 2); overflow: visible; padding: 16px 2.5446794033050537px 0px 2.5446794033050537px; position: absolute; top: 0px; width: 96px; }", ".framer-wEk0V .framer-jw4ucp, .framer-wEk0V .framer-py6qyy, .framer-wEk0V .framer-rnhou6, .framer-wEk0V .framer-1hd99pg, .framer-wEk0V .framer-etbzbn, .framer-wEk0V .framer-1a8xirp { flex: none; height: var(--framer-aspect-ratio-supported, 36px); position: relative; width: 36px; }", ".framer-wEk0V .framer-1vlb4gy, .framer-wEk0V .framer-1dgcbju, .framer-wEk0V .framer-rfmxqs, .framer-wEk0V .framer-pzar8d, .framer-wEk0V .framer-1mqqkz7 { flex: 1 0 0px; height: 1px; position: relative; white-space: pre; width: auto; }", ".framer-wEk0V .framer-1xzoej6 { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 96px; justify-content: space-between; left: calc(50.11600928074248% - 96px / 2); overflow: visible; padding: 16px 4px 0px 4px; position: absolute; width: 96px; }", ".framer-wEk0V .framer-19wdizr { align-content: center; align-items: center; bottom: 97px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 96px; justify-content: space-between; left: 0px; overflow: visible; padding: 16px 4px 0px 4px; position: absolute; width: 96px; }", ".framer-wEk0V .framer-1jkrcr4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 96px; justify-content: space-between; left: 0px; overflow: visible; padding: 16px 4px 0px 4px; position: absolute; top: 92px; width: 96px; }", ".framer-wEk0V .framer-6wwae7 { align-content: center; align-items: center; bottom: 96px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 96px; justify-content: space-between; overflow: visible; padding: 16px 4px 0px 4px; position: absolute; right: 0px; width: 96px; }", ".framer-wEk0V .framer-1w43sz { flex: 1 0 0px; height: 1px; position: relative; white-space: pre-wrap; width: 70px; word-break: break-word; word-wrap: break-word; }", ".framer-wEk0V .framer-ln59lh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 96px; justify-content: space-between; overflow: visible; padding: 16px 4px 0px 4px; position: absolute; right: 0px; top: 92px; width: 96px; }", ".framer-wEk0V .framer-ny4to5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 2.5446794033050537px; height: 96px; justify-content: center; left: calc(49.88399071925757% - 96px / 2); overflow: visible; padding: 2.5446794033050537px; position: absolute; top: calc(50.00000000000002% - 96px / 2); width: 96px; }", ".framer-wEk0V .framer-r8gp0r { flex: none; height: 18px; overflow: visible; position: relative; width: 76px; }", ".framer-wEk0V .framer-1jbby1x { height: 19px; left: 1px; position: absolute; top: 1px; width: 72px; }", ".framer-wEk0V .framer-sunyog, .framer-wEk0V .framer-49xep2 { height: 18px; left: 0px; position: absolute; top: 0px; width: 14px; }", ".framer-wEk0V .framer-qj7c3s { height: 4px; left: 4px; position: absolute; top: 4px; width: 5px; }", ".framer-wEk0V .framer-7chu8m { height: 5px; left: 4px; position: absolute; top: 10px; width: 6px; }", ".framer-wEk0V .framer-12zkaso { height: 18px; left: 16px; position: absolute; top: 0px; width: 4px; }", ".framer-wEk0V .framer-ekpzr0 { height: 13px; left: 21px; position: absolute; top: 5px; width: 14px; }", ".framer-wEk0V .framer-13qj69y, .framer-wEk0V .framer-a6mwek { height: 13px; left: 0px; position: absolute; top: 0px; width: 14px; }", ".framer-wEk0V .framer-9fqaw6, .framer-wEk0V .framer-1vrvjcm { height: 7px; left: 4px; position: absolute; top: 3px; width: 6px; }", ".framer-wEk0V .framer-1ttyolz { height: 13px; left: 36px; position: absolute; top: 5px; width: 14px; }", ".framer-wEk0V .framer-13vf8ap { height: 13px; left: 52px; position: absolute; top: 5px; width: 20px; }", ".framer-wEk0V .framer-e6pdnq { height: 8px; left: 71px; position: absolute; top: 1px; width: 11px; }", ".framer-wEk0V.framer-v-1lv5nx4.framer-14rpo9m { width: 320px; }", ".framer-wEk0V.framer-v-1lv5nx4 .framer-kibctf { height: 427px; width: 320px; }", ".framer-wEk0V.framer-v-1lv5nx4 .framer-10a6tag { left: -18px; right: -18px; top: calc(49.648711943793934% - 411px / 2); width: unset; }", ".framer-wEk0V.framer-v-1lv5nx4 .framer-agh76d { height: 71px; top: 61px; width: 126px; }", ".framer-wEk0V.framer-v-1lv5nx4 .framer-adu295 { height: 71px; top: 279px; width: 126px; }", ".framer-wEk0V.framer-v-1lv5nx4 .framer-1l151mh { height: 71px; left: 53px; top: 60px; width: 126px; }", ".framer-wEk0V.framer-v-1lv5nx4 .framer-snchpx { height: 219px; left: 53px; top: 60px; width: 126px; }", ".framer-wEk0V.framer-v-1lv5nx4 .framer-3cu6jl { height: 219px; top: 60px; width: 126px; }", ".framer-wEk0V.framer-v-1lv5nx4 .framer-1c7dq0x { height: 71px; left: 53px; top: 281px; width: 126px; }", ".framer-wEk0V.framer-v-1lv5nx4 .framer-1got45w { height: 220px; left: 53px; top: 131px; width: 126px; }", ".framer-wEk0V.framer-v-1lv5nx4 .framer-1div7jl { height: 220px; top: 131px; width: 126px; }", ".framer-wEk0V.framer-v-1lv5nx4 .framer-9anr5s { height: 147px; left: 304px; top: 131px; }", ".framer-wEk0V.framer-v-1lv5nx4 .framer-15cgjzu { left: 52px; top: 277px; width: 253px; }", ".framer-wEk0V.framer-v-1lv5nx4 .framer-a6qow0 { height: 147px; left: 52px; top: 131px; }", ".framer-wEk0V.framer-v-1lv5nx4 .framer-gt1s12 { left: 52px; top: 131px; width: 253px; }", ".framer-wEk0V.framer-v-1lv5nx4 .framer-1idhm2o { left: -18px; right: -18px; top: calc(49.88290398126466% - 410px / 2); width: unset; }", ".framer-wEk0V.framer-v-1lv5nx4 .framer-6qr6gq, .framer-wEk0V.framer-v-1lv5nx4 .framer-tmh7vq { height: 152px; left: 48px; top: 128px; width: 260px; }", ".framer-wEk0V.framer-v-1lv5nx4 .framer-1652fz8 { height: 299px; left: 178px; top: 55px; }", ".framer-wEk0V.framer-v-1lv5nx4 .framer-1awllap { height: 76px; left: calc(50.31250000000003% - 76px / 2); top: -1px; width: 76px; }", ".framer-wEk0V.framer-v-1lv5nx4 .framer-jw4ucp, .framer-wEk0V.framer-v-1lv5nx4 .framer-py6qyy, .framer-wEk0V.framer-v-1lv5nx4 .framer-rnhou6, .framer-wEk0V.framer-v-1lv5nx4 .framer-1hd99pg, .framer-wEk0V.framer-v-1lv5nx4 .framer-etbzbn, .framer-wEk0V.framer-v-1lv5nx4 .framer-1a8xirp { height: var(--framer-aspect-ratio-supported, 24px); width: 24px; }", ".framer-wEk0V.framer-v-1lv5nx4 .framer-1xzoej6 { bottom: 2px; height: 76px; left: calc(50.31250000000003% - 76px / 2); width: 76px; }", ".framer-wEk0V.framer-v-1lv5nx4 .framer-19wdizr { bottom: 99px; height: 76px; left: 8px; width: 76px; }", ".framer-wEk0V.framer-v-1lv5nx4 .framer-1jkrcr4 { height: 76px; left: 8px; top: 91px; width: 76px; }", ".framer-wEk0V.framer-v-1lv5nx4 .framer-6wwae7 { bottom: 98px; height: 76px; right: 8px; width: 76px; }", ".framer-wEk0V.framer-v-1lv5nx4 .framer-ln59lh { height: 76px; right: 8px; top: 91px; width: 76px; }", ".framer-wEk0V.framer-v-1lv5nx4 .framer-ny4to5 { height: 76px; left: calc(50.00000000000002% - 76px / 2); top: calc(49.648711943793934% - 76px / 2); width: 76px; }", ".framer-wEk0V.framer-v-1lv5nx4 .framer-1jbby1x { height: 14px; left: 10px; top: 3px; width: 56px; }", ".framer-wEk0V.framer-v-1lv5nx4 .framer-sunyog, .framer-wEk0V.framer-v-1lv5nx4 .framer-49xep2 { height: 14px; width: 11px; }", ".framer-wEk0V.framer-v-1lv5nx4 .framer-qj7c3s { height: 3px; left: 3px; top: 3px; width: 4px; }", ".framer-wEk0V.framer-v-1lv5nx4 .framer-7chu8m { height: 4px; left: 3px; top: 8px; width: 5px; }", ".framer-wEk0V.framer-v-1lv5nx4 .framer-12zkaso { height: 14px; left: 12px; width: 3px; }", ".framer-wEk0V.framer-v-1lv5nx4 .framer-ekpzr0 { height: 10px; left: 17px; top: 4px; width: 11px; }", ".framer-wEk0V.framer-v-1lv5nx4 .framer-13qj69y, .framer-wEk0V.framer-v-1lv5nx4 .framer-a6mwek { height: 10px; width: 11px; }", ".framer-wEk0V.framer-v-1lv5nx4 .framer-9fqaw6, .framer-wEk0V.framer-v-1lv5nx4 .framer-1vrvjcm { height: 5px; left: 3px; top: 3px; width: 5px; }", ".framer-wEk0V.framer-v-1lv5nx4 .framer-1ttyolz { height: 10px; left: 28px; top: 4px; width: 11px; }", ".framer-wEk0V.framer-v-1lv5nx4 .framer-13vf8ap { height: 10px; left: 40px; top: 4px; width: 16px; }", ".framer-wEk0V.framer-v-1lv5nx4 .framer-e6pdnq { height: 6px; left: 64px; top: 3px; width: 9px; }"];
var FramermFZoa_YQL = withCSS7(Component7, css7, "framer-wEk0V");
var mFZoa_YQL_default = FramermFZoa_YQL;
FramermFZoa_YQL.displayName = "animation-web";
FramermFZoa_YQL.defaultProps = {
  height: 486,
  width: 431
};
addPropertyControls7(FramermFZoa_YQL, {
  variant: {
    options: ["n1N7kZ2oz", "pzh8QG8Al"],
    optionTitles: ["hexagon", "PHONE"],
    title: "Variant",
    type: ControlType7.Enum
  }
});
addFonts(FramermFZoa_YQL, [{
  explicitInter: true,
  fonts: [{
    family: "Haffer Regular",
    source: "custom",
    url: "https://framerusercontent.com/assets/tAGQcvN09kwW2QjPLqLO197UqBQ.woff"
  }]
}, ...BoxesFonts, ...WrenchFonts, ...EngineeringFonts, ...EngineFonts, ...Component1Fonts, ...DeliveryFonts], {
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
      "name": "FramermFZoa_YQL",
      "slots": [],
      "annotations": {
        "framerIntrinsicWidth": "431",
        "framerContractVersion": "1",
        "framerDisplayContentsDiv": "false",
        "framerIntrinsicHeight": "486",
        "framerImmutableVariables": "true",
        "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"pzh8QG8Al":{"layout":["fixed","auto"]}}}',
        "framerComponentViewportWidth": "true",
        "framerAutoSizeImages": "true",
        "framerColorSyntax": "true"
      }
    },
    "__FramerMetadata__": {
      "type": "variable"
    }
  }
};
var _OriginalComponent = mFZoa_YQL_default;
function AnimationwebWrapped(props) {
  var _variant = useVariant(props.variant);
  var _inner = (_variant !== undefined) ? { ...props, variant: _variant } : props;
  return _ctxJsx(ContextProviders, { children: _ctxJsx(_OriginalComponent, _inner) });
}
Object.assign(AnimationwebWrapped, _OriginalComponent);
export {  __FramerMetadata__,  AnimationwebWrapped as default   };