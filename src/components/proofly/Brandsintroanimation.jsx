"use client"
// http-url:https://framerusercontent.com/modules/2I6g3VfasQyz7WTZu2s9/0cmaZnH4Kx3CSw6eyo7W/UjG1zwRhg.js
import { jsx as _jsx7, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls as addPropertyControls7, ControlType as ControlType7, cx as cx7, getFonts, RichText, SVG as SVG7, useActiveVariantCallback, useComponentViewport, useLocaleInfo, useOnVariantChange, useVariantState, withCSS as withCSS7, withFX } from "@proofly-framer/runtime";
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
const __svg_7 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 71.597 18.408" overflow="visible"><g><path d="M 0 0.001 L 7.669 0.001 C 10.773 0.001 12.866 1.805 12.866 4.499 C 12.866 6.1 11.832 7.548 10.47 8.133 C 12.412 8.692 13.85 10.445 13.85 12.478 C 13.85 15.68 11.353 17.789 7.72 17.789 L 0 17.789 Z M 9.032 5.134 C 9.032 4.118 8.199 3.406 7.039 3.406 L 4.011 3.406 L 4.011 6.862 L 7.039 6.862 C 8.199 6.862 9.032 6.176 9.032 5.134 Z M 9.839 12.173 C 9.839 10.903 8.805 10.039 7.316 10.039 L 4.011 10.039 L 4.011 14.384 L 7.316 14.384 C 8.805 14.384 9.839 13.469 9.839 12.173 Z" fill="var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)) /* {&quot;name&quot;:&quot;Gray 3&quot;} */"></path><path d="M 15.666 0 L 19.4 0 L 19.4 17.789 L 15.666 17.789 Z" fill="var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)) /* {&quot;name&quot;:&quot;Gray 3&quot;} */"></path><path d="M 20.964 11.776 C 20.964 7.913 23.815 5.194 27.726 5.194 C 31.661 5.194 34.487 7.913 34.487 11.776 C 34.487 15.664 31.636 18.408 27.726 18.408 C 23.79 18.408 20.964 15.638 20.964 11.776 Z M 30.753 11.776 C 30.753 9.743 29.517 8.371 27.726 8.371 C 25.934 8.371 24.723 9.717 24.723 11.776 C 24.723 13.834 25.934 15.232 27.726 15.232 C 29.517 15.232 30.753 13.834 30.753 11.776 Z" fill="var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)) /* {&quot;name&quot;:&quot;Gray 3&quot;} */"></path><path d="M 35.553 11.776 C 35.553 7.913 38.404 5.194 42.314 5.194 C 46.25 5.194 49.075 7.913 49.075 11.776 C 49.075 15.664 46.225 18.408 42.314 18.408 C 38.378 18.408 35.553 15.638 35.553 11.776 Z M 45.341 11.776 C 45.341 9.743 44.105 8.371 42.314 8.371 C 40.523 8.371 39.312 9.717 39.312 11.776 C 39.312 13.834 40.523 15.232 42.314 15.232 C 44.105 15.232 45.341 13.834 45.341 11.776 Z" fill="var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)) /* {&quot;name&quot;:&quot;Gray 3&quot;} */"></path><path d="M 71.597 9.579 L 71.597 17.788 L 67.889 17.788 L 67.889 10.393 C 67.889 8.919 67.132 8.055 65.921 8.055 C 64.332 8.055 63.474 9.529 63.474 11.409 L 63.474 17.788 L 59.74 17.788 L 59.74 10.393 C 59.74 8.919 59.034 8.055 57.797 8.055 C 56.208 8.055 55.325 9.529 55.325 11.409 L 55.325 17.788 L 51.591 17.788 L 51.591 4.98 L 55.325 4.98 L 55.325 6.53 C 56.057 5.514 57.52 4.777 59.21 4.777 C 60.875 4.777 62.338 5.564 62.818 6.657 C 63.776 5.564 65.391 4.777 66.93 4.777 C 69.655 4.777 71.597 6.581 71.597 9.579 Z" fill="var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)) /* {&quot;name&quot;:&quot;Gray 3&quot;} */"></path></g></svg>';
const __svg_8 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.85 17.789" overflow="visible"><path d="M 0 0 L 7.669 0 C 10.773 0 12.866 1.804 12.866 4.498 C 12.866 6.099 11.832 7.547 10.47 8.132 C 12.412 8.691 13.85 10.444 13.85 12.477 C 13.85 15.679 11.353 17.789 7.72 17.789 L 0 17.789 Z M 9.032 5.133 C 9.032 4.117 8.199 3.405 7.039 3.405 L 4.011 3.405 L 4.011 6.861 L 7.039 6.861 C 8.199 6.861 9.032 6.175 9.032 5.133 Z M 9.839 12.173 C 9.839 10.902 8.805 10.038 7.316 10.038 L 4.011 10.038 L 4.011 14.383 L 7.316 14.383 C 8.805 14.383 9.839 13.468 9.839 12.173 Z" fill="var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)) /* {&quot;name&quot;:&quot;Gray 3&quot;} */"></path></svg>';
const __svg_9 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.734 17.789" overflow="visible"><path d="M 0 0 L 3.734 0 L 3.734 17.789 L 0 17.789 Z" fill="var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)) /* {&quot;name&quot;:&quot;Gray 3&quot;} */"></path></svg>';
const __svg_10 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.522 13.214" overflow="visible"><path d="M 0 6.582 C 0 2.719 2.851 0 6.761 0 C 10.697 0 13.522 2.719 13.522 6.582 C 13.522 10.47 10.672 13.214 6.761 13.214 C 2.826 13.214 0 10.444 0 6.582 Z M 9.789 6.582 C 9.789 4.549 8.552 3.177 6.761 3.177 C 4.97 3.177 3.759 4.523 3.759 6.582 C 3.759 8.64 4.97 10.038 6.761 10.038 C 8.552 10.038 9.789 8.64 9.789 6.582 Z" fill="var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)) /* {&quot;name&quot;:&quot;Gray 3&quot;} */"></path></svg>';
const __svg_11 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.522 13.214" overflow="visible"><path d="M 0 6.582 C 0 2.719 2.851 0 6.761 0 C 10.697 0 13.522 2.719 13.522 6.582 C 13.522 10.47 10.672 13.214 6.761 13.214 C 2.826 13.214 0 10.444 0 6.582 Z M 9.789 6.582 C 9.789 4.549 8.552 3.177 6.761 3.177 C 4.97 3.177 3.759 4.523 3.759 6.582 C 3.759 8.64 4.97 10.038 6.761 10.038 C 8.553 10.038 9.789 8.64 9.789 6.582 Z" fill="var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)) /* {&quot;name&quot;:&quot;Gray 3&quot;} */"></path></svg>';
const __svg_12 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.006 13.011" overflow="visible"><path d="M 20.006 4.803 L 20.006 13.011 L 16.298 13.011 L 16.298 5.616 C 16.298 4.142 15.541 3.278 14.33 3.278 C 12.74 3.278 11.883 4.752 11.883 6.633 L 11.883 13.011 L 8.149 13.011 L 8.149 5.616 C 8.149 4.142 7.442 3.278 6.206 3.278 C 4.617 3.278 3.734 4.752 3.734 6.633 L 3.734 13.011 L 0 13.011 L 0 0.203 L 3.734 0.203 L 3.734 1.753 C 4.465 0.737 5.929 0 7.619 0 C 9.284 0 10.747 0.788 11.227 1.88 C 12.185 0.788 13.8 0 15.339 0 C 18.064 0 20.006 1.804 20.006 4.803 Z" fill="var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)) /* {&quot;name&quot;:&quot;Gray 3&quot;} */"></path></svg>';
const __svg_13 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 11.045 8.073" overflow="visible"><path d="M 10.348 1.808 L 6.927 5.254 L 8.778 0.751 L 7.867 0.371 L 6.016 4.874 L 6.016 0 L 5.03 0 L 5.03 4.874 L 3.178 0.371 L 2.267 0.751 L 4.119 5.254 L 0.697 1.808 L 0 2.51 L 5.523 8.073 L 11.045 2.51 Z" fill="var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)) /* {&quot;name&quot;:&quot;Gray 3&quot;} */"></path></svg>';
const __svg_14 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 177 99.5\" overflow=\"visible\"><path d=\"M 0 0 L 177 99.5\" fill=\"transparent\" stroke-width=\"2\" stroke=\"var(--token-72a14b31-6f29-4213-aff7-7a715cf36f11, rgb(252, 76, 1)) /* {&quot;name&quot;:&quot;DELIVERY&quot;} */\" stroke-dasharray=\"6\"></path></svg>";
const __svg_15 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 177 99.5\" overflow=\"visible\"><path d=\"M 0 99.5 L 177 0\" fill=\"transparent\" stroke-width=\"2\" stroke=\"var(--token-72a14b31-6f29-4213-aff7-7a715cf36f11, rgb(252, 76, 1)) /* {&quot;name&quot;:&quot;DELIVERY&quot;} */\" stroke-dasharray=\"6\"></path></svg>";
const __svg_16 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 177 99.5\" overflow=\"visible\"><path d=\"M 177 0 L 0 99.5\" fill=\"transparent\" stroke-width=\"2\" stroke=\"var(--token-72a14b31-6f29-4213-aff7-7a715cf36f11, rgb(252, 76, 1)) /* {&quot;name&quot;:&quot;DELIVERY&quot;} */\" stroke-dasharray=\"6\"></path></svg>";
const __svg_17 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 177 309\" overflow=\"visible\"><path d=\"M 177 0 L 0 309\" fill=\"transparent\" stroke-width=\"2\" stroke=\"var(--token-72a14b31-6f29-4213-aff7-7a715cf36f11, rgb(252, 76, 1)) /* {&quot;name&quot;:&quot;DELIVERY&quot;} */\" stroke-dasharray=\"6\"></path></svg>";
const __svg_18 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 177 309\" overflow=\"visible\"><path d=\"M 0 0 L 177 309\" fill=\"transparent\" stroke-width=\"2\" stroke=\"var(--token-72a14b31-6f29-4213-aff7-7a715cf36f11, rgb(252, 76, 1)) /* {&quot;name&quot;:&quot;DELIVERY&quot;} */\" stroke-dasharray=\"6\"></path></svg>";
const __svg_19 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 177 99.5\" overflow=\"visible\"><path d=\"M 177 99.5 L 0 0\" fill=\"transparent\" stroke-width=\"2\" stroke=\"var(--token-72a14b31-6f29-4213-aff7-7a715cf36f11, rgb(252, 76, 1)) /* {&quot;name&quot;:&quot;DELIVERY&quot;} */\" stroke-dasharray=\"6\"></path></svg>";
const __svg_20 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 177 310\" overflow=\"visible\"><path d=\"M 177 310 L 0 0\" fill=\"transparent\" stroke-width=\"2\" stroke=\"var(--token-72a14b31-6f29-4213-aff7-7a715cf36f11, rgb(252, 76, 1)) /* {&quot;name&quot;:&quot;DELIVERY&quot;} */\" stroke-dasharray=\"6\"></path></svg>";
const __svg_21 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 177 310\" overflow=\"visible\"><path d=\"M 0 310 L 177 0\" fill=\"transparent\" stroke-width=\"2\" stroke=\"var(--token-72a14b31-6f29-4213-aff7-7a715cf36f11, rgb(252, 76, 1)) /* {&quot;name&quot;:&quot;DELIVERY&quot;} */\" stroke-dasharray=\"6\"></path></svg>";
const __svg_22 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 1 206.5\" overflow=\"visible\"><path d=\"M 0 206.5 L 0 0\" fill=\"transparent\" stroke-width=\"2\" stroke=\"var(--token-72a14b31-6f29-4213-aff7-7a715cf36f11, rgb(252, 76, 1)) /* {&quot;name&quot;:&quot;DELIVERY&quot;} */\" stroke-dasharray=\"6\"></path></svg>";
const __svg_23 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 355.5 1\" overflow=\"visible\"><path d=\"M 355.5 0 L 0 0\" fill=\"transparent\" stroke-width=\"2\" stroke=\"var(--token-72a14b31-6f29-4213-aff7-7a715cf36f11, rgb(252, 76, 1)) /* {&quot;name&quot;:&quot;DELIVERY&quot;} */\" stroke-dasharray=\"6\"></path></svg>";
const __svg_24 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 1 206.5\" overflow=\"visible\"><path d=\"M 0 0 L 0 206.5\" fill=\"transparent\" stroke-width=\"2\" stroke=\"var(--token-72a14b31-6f29-4213-aff7-7a715cf36f11, rgb(252, 76, 1)) /* {&quot;name&quot;:&quot;DELIVERY&quot;} */\" stroke-dasharray=\"6\"></path></svg>";
const __svg_25 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 355.5 1\" overflow=\"visible\"><path d=\"M 0 0 L 355.5 0\" fill=\"transparent\" stroke-width=\"2\" stroke=\"var(--token-72a14b31-6f29-4213-aff7-7a715cf36f11, rgb(252, 76, 1)) /* {&quot;name&quot;:&quot;DELIVERY&quot;} */\" stroke-dasharray=\"6\"></path></svg>";
const __svg_26 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 355.5 208.5\" overflow=\"visible\"><path d=\"M 0 0 L 355.5 208.5\" fill=\"transparent\" stroke-width=\"2\" stroke=\"var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)) /* {&quot;name&quot;:&quot;Background&quot;} */\" stroke-dasharray=\"8\"></path></svg>";
const __svg_27 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 1 409.5\" overflow=\"visible\"><path d=\"M 0 409.5 L 0 0\" fill=\"transparent\" stroke-width=\"2\" stroke=\"var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)) /* {&quot;name&quot;:&quot;Background&quot;} */\" stroke-dasharray=\"9\"></path></svg>";
const __svg_28 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 355.5 208.5\" overflow=\"visible\"><path d=\"M 0 208.5 L 355.5 0\" fill=\"transparent\" stroke-width=\"2\" stroke=\"var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)) /* {&quot;name&quot;:&quot;Background&quot;} */\" stroke-dasharray=\"8\"></path></svg>";
const __svg_29 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 71.597 18.408\" overflow=\"visible\"><g><path d=\"M 0 0.001 L 7.669 0.001 C 10.773 0.001 12.866 1.805 12.866 4.499 C 12.866 6.1 11.832 7.548 10.47 8.133 C 12.412 8.692 13.85 10.445 13.85 12.478 C 13.85 15.68 11.353 17.789 7.72 17.789 L 0 17.789 Z M 9.032 5.134 C 9.032 4.118 8.199 3.406 7.039 3.406 L 4.011 3.406 L 4.011 6.862 L 7.039 6.862 C 8.199 6.862 9.032 6.176 9.032 5.134 Z M 9.839 12.173 C 9.839 10.903 8.805 10.039 7.316 10.039 L 4.011 10.039 L 4.011 14.384 L 7.316 14.384 C 8.805 14.384 9.839 13.469 9.839 12.173 Z\" fill=\"rgb(245,244,250)\"></path><path d=\"M 15.666 0 L 19.4 0 L 19.4 17.789 L 15.666 17.789 Z\" fill=\"rgb(245,244,250)\"></path><path d=\"M 20.964 11.776 C 20.964 7.913 23.815 5.194 27.726 5.194 C 31.661 5.194 34.487 7.913 34.487 11.776 C 34.487 15.664 31.636 18.408 27.726 18.408 C 23.79 18.408 20.964 15.638 20.964 11.776 Z M 30.753 11.776 C 30.753 9.743 29.517 8.371 27.726 8.371 C 25.934 8.371 24.723 9.717 24.723 11.776 C 24.723 13.834 25.934 15.232 27.726 15.232 C 29.517 15.232 30.753 13.834 30.753 11.776 Z\" fill=\"rgb(245,244,250)\"></path><path d=\"M 35.553 11.776 C 35.553 7.913 38.404 5.194 42.314 5.194 C 46.25 5.194 49.075 7.913 49.075 11.776 C 49.075 15.664 46.225 18.408 42.314 18.408 C 38.378 18.408 35.553 15.638 35.553 11.776 Z M 45.341 11.776 C 45.341 9.743 44.105 8.371 42.314 8.371 C 40.523 8.371 39.312 9.717 39.312 11.776 C 39.312 13.834 40.523 15.232 42.314 15.232 C 44.105 15.232 45.341 13.834 45.341 11.776 Z\" fill=\"rgb(245,244,250)\"></path><path d=\"M 71.597 9.579 L 71.597 17.788 L 67.889 17.788 L 67.889 10.393 C 67.889 8.919 67.132 8.055 65.921 8.055 C 64.332 8.055 63.474 9.529 63.474 11.409 L 63.474 17.788 L 59.74 17.788 L 59.74 10.393 C 59.74 8.919 59.034 8.055 57.797 8.055 C 56.208 8.055 55.325 9.529 55.325 11.409 L 55.325 17.788 L 51.591 17.788 L 51.591 4.98 L 55.325 4.98 L 55.325 6.53 C 56.057 5.514 57.52 4.777 59.21 4.777 C 60.875 4.777 62.338 5.564 62.818 6.657 C 63.776 5.564 65.391 4.777 66.93 4.777 C 69.655 4.777 71.597 6.581 71.597 9.579 Z\" fill=\"rgb(245,244,250)\"></path></g></svg>";
const __svg_30 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 13.85 17.789\" overflow=\"visible\"><path d=\"M 0 0 L 7.669 0 C 10.773 0 12.866 1.804 12.866 4.498 C 12.866 6.099 11.832 7.547 10.47 8.132 C 12.412 8.691 13.85 10.444 13.85 12.477 C 13.85 15.679 11.353 17.789 7.72 17.789 L 0 17.789 Z M 9.032 5.133 C 9.032 4.117 8.199 3.405 7.039 3.405 L 4.011 3.405 L 4.011 6.861 L 7.039 6.861 C 8.199 6.861 9.032 6.175 9.032 5.133 Z M 9.839 12.173 C 9.839 10.902 8.805 10.038 7.316 10.038 L 4.011 10.038 L 4.011 14.383 L 7.316 14.383 C 8.805 14.383 9.839 13.468 9.839 12.173 Z\" fill=\"rgb(245,244,250)\"></path></svg>";
const __svg_31 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 13.85 17.789\" overflow=\"visible\"><path d=\"M 0 0 L 7.669 0 C 10.773 0 12.866 1.804 12.866 4.498 C 12.866 6.099 11.832 7.547 10.47 8.132 C 12.412 8.691 13.85 10.444 13.85 12.477 C 13.85 15.679 11.353 17.789 7.72 17.789 L 0 17.789 Z\" fill=\"transparent\"></path></svg>";
const __svg_32 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 5.021 3.456\" overflow=\"visible\"><path d=\"M 5.021 1.728 C 5.021 0.711 4.188 0 3.027 0 L 0 0 L 0 3.456 L 3.027 3.456 C 4.188 3.456 5.021 2.77 5.021 1.728 Z\" fill=\"transparent\"></path></svg>";
const __svg_33 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 5.828 4.345\" overflow=\"visible\"><path d=\"M 5.828 2.135 C 5.828 0.864 4.794 0 3.305 0 L 0 0 L 0 4.345 L 3.305 4.345 C 4.794 4.345 5.828 3.431 5.828 2.135 Z\" fill=\"transparent\"></path></svg>";
const __svg_34 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 3.734 17.789\" overflow=\"visible\"><path d=\"M 0 0 L 3.734 0 L 3.734 17.789 L 0 17.789 Z\" fill=\"rgb(245,244,250)\"></path></svg>";
const __svg_35 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 13.522 13.214\" overflow=\"visible\"><path d=\"M 0 6.582 C 0 2.719 2.851 0 6.761 0 C 10.697 0 13.522 2.719 13.522 6.582 C 13.522 10.47 10.672 13.214 6.761 13.214 C 2.826 13.214 0 10.444 0 6.582 Z M 9.789 6.582 C 9.789 4.549 8.552 3.177 6.761 3.177 C 4.97 3.177 3.759 4.523 3.759 6.582 C 3.759 8.64 4.97 10.038 6.761 10.038 C 8.552 10.038 9.789 8.64 9.789 6.582 Z\" fill=\"rgb(245,244,250)\"></path></svg>";
const __svg_36 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 13.522 13.214\" overflow=\"visible\"><path d=\"M 0 6.582 C 0 2.719 2.851 0 6.761 0 C 10.697 0 13.522 2.719 13.522 6.582 C 13.522 10.47 10.672 13.214 6.761 13.214 C 2.826 13.214 0 10.444 0 6.582 Z\" fill=\"transparent\"></path></svg>";
const __svg_37 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 6.03 6.861\" overflow=\"visible\"><path d=\"M 6.03 3.405 C 6.03 1.372 4.793 0 3.002 0 C 1.211 0 0 1.347 0 3.405 C 0 5.464 1.211 6.861 3.002 6.861 C 4.793 6.861 6.03 5.464 6.03 3.405 Z\" fill=\"transparent\"></path></svg>";
const __svg_38 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 13.522 13.214\" overflow=\"visible\"><path d=\"M 0 6.582 C 0 2.719 2.851 0 6.761 0 C 10.697 0 13.522 2.719 13.522 6.582 C 13.522 10.47 10.672 13.214 6.761 13.214 C 2.826 13.214 0 10.444 0 6.582 Z M 9.789 6.582 C 9.789 4.549 8.552 3.177 6.761 3.177 C 4.97 3.177 3.759 4.523 3.759 6.582 C 3.759 8.64 4.97 10.038 6.761 10.038 C 8.553 10.038 9.789 8.64 9.789 6.582 Z\" fill=\"rgb(245,244,250)\"></path></svg>";
const __svg_39 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 13.522 13.214\" overflow=\"visible\"><path d=\"M 0 6.582 C 0 2.719 2.851 0 6.761 0 C 10.697 0 13.522 2.719 13.522 6.582 C 13.522 10.47 10.672 13.214 6.761 13.214 C 2.826 13.214 0 10.444 0 6.582 Z\" fill=\"transparent\"></path></svg>";
const __svg_40 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 6.029 6.861\" overflow=\"visible\"><path d=\"M 6.029 3.405 C 6.029 1.372 4.793 0 3.002 0 C 1.211 0 0 1.347 0 3.405 C 0 5.464 1.211 6.861 3.002 6.861 C 4.794 6.861 6.029 5.464 6.029 3.405 Z\" fill=\"transparent\"></path></svg>";
const __svg_41 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 20.006 13.011\" overflow=\"visible\"><path d=\"M 20.006 4.803 L 20.006 13.011 L 16.298 13.011 L 16.298 5.616 C 16.298 4.142 15.541 3.278 14.33 3.278 C 12.74 3.278 11.883 4.752 11.883 6.633 L 11.883 13.011 L 8.149 13.011 L 8.149 5.616 C 8.149 4.142 7.442 3.278 6.206 3.278 C 4.617 3.278 3.734 4.752 3.734 6.633 L 3.734 13.011 L 0 13.011 L 0 0.203 L 3.734 0.203 L 3.734 1.753 C 4.465 0.737 5.929 0 7.619 0 C 9.284 0 10.747 0.788 11.227 1.88 C 12.185 0.788 13.8 0 15.339 0 C 18.064 0 20.006 1.804 20.006 4.803 Z\" fill=\"rgb(245,244,250)\"></path></svg>";
const __svg_42 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 11.045 8.073\" overflow=\"visible\"><path d=\"M 10.348 1.808 L 6.927 5.254 L 8.778 0.751 L 7.867 0.371 L 6.016 4.874 L 6.016 0 L 5.03 0 L 5.03 4.874 L 3.178 0.371 L 2.267 0.751 L 4.119 5.254 L 0.697 1.808 L 0 2.51 L 5.523 8.073 L 11.045 2.51 Z\" fill=\"rgb(245,244,250)\"></path></svg>";


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

// http-url:https://framerusercontent.com/modules/2I6g3VfasQyz7WTZu2s9/0cmaZnH4Kx3CSw6eyo7W/UjG1zwRhg.js
var BoxesFonts = getFonts(kZLRHbEEz_default);
var MotionDivWithFX = withFX(motion7.div);
var WrenchFonts = getFonts(iUev6L3gl_default);
var EngineeringFonts = getFonts(MXmhQfjAM_default);
var EngineFonts = getFonts(S_bPD60mp_default);
var Component1Fonts = getFonts(IHS33mEeO_default);
var DeliveryFonts = getFonts(TdzQPBCMZ_default);
var cycleOrder = ["MwXnb1rsC", "s83oJ5HU3", "nbMMnIX8K"];
var serializationHash = "framer-jXdPc";
var variantClassNames = {
  MwXnb1rsC: "framer-v-1xuerfq",
  nbMMnIX8K: "framer-v-1f0zs8",
  s83oJ5HU3: "framer-v-1dzjjir"
};
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach(variant => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = {
  delay: 0,
  duration: 0.3,
  ease: [0.44, 0, 0.56, 1],
  type: "tween"
};
var transition2 = {
  damping: 15,
  delay: 0,
  mass: 1,
  stiffness: 196,
  type: "spring"
};
var animation = {
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
var transition3 = {
  bounce: 0.2,
  delay: 0.2,
  duration: 0.35,
  type: "spring"
};
var animation1 = {
  opacity: 0,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 0.5,
  skewX: 0,
  skewY: 0,
  transition: transition3,
  x: 0,
  y: 0
};
var animation2 = {
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
var transition4 = {
  delay: 0.6,
  duration: 0.3,
  ease: [0.44, 0, 0.56, 1],
  type: "tween"
};
var animation3 = {
  opacity: 0,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  skewX: 0,
  skewY: 0,
  transition: transition4,
  x: 0,
  y: 0
};
var animation4 = {
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
var transition5 = {
  delay: 0.55,
  duration: 0.3,
  ease: [0.44, 0, 0.56, 1],
  type: "tween"
};
var animation5 = {
  opacity: 0,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 0.2,
  skewX: 0,
  skewY: 0,
  transition: transition5,
  x: 0,
  y: 0
};
var transition6 = {
  bounce: 0.5,
  delay: 0.55,
  duration: 0.3,
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
  delay: 0.55,
  duration: 0.3,
  ease: [0.44, 0, 0.56, 1],
  type: "tween"
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
  "Variant 1": "MwXnb1rsC",
  "Variant 2": "s83oJ5HU3",
  Variant: "nbMMnIX8K"
};
var getProps7 = ({
  height,
  id,
  turnOnSize,
  width,
  ...props
}) => {
  return {
    ...props,
    MdDJP0CFd: turnOnSize ?? props.MdDJP0CFd ?? 12,
    variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "MwXnb1rsC"
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
    MdDJP0CFd,
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
    defaultVariant: "MwXnb1rsC",
    ref: refBinding,
    variant,
    variantClassNames
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const {
    activeVariantCallback,
    delay
  } = useActiveVariantCallback(baseVariant);
  const onAppearbe02sv = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("nbMMnIX8K", true), 600);
  });
  const onTap1su20b2 = activeVariantCallback(async (...args) => {
    setVariant("nbMMnIX8K");
  });
  const onTapuh8xe3 = activeVariantCallback(async (...args) => {
    setVariant("s83oJ5HU3");
  });
  useOnVariantChange(baseVariant, {
    default: onAppearbe02sv,
    s83oJ5HU3: void 0
  });
  const sharedStyleClassNames = [];
  const scopingClassNames = cx7(serializationHash, ...sharedStyleClassNames);
  const isDisplayed = () => {
    if (baseVariant === "s83oJ5HU3") return true;
    return false;
  };
  const isDisplayed1 = () => {
    if (["s83oJ5HU3", "nbMMnIX8K"].includes(baseVariant)) return true;
    return false;
  };
  const isDisplayed2 = () => {
    if (baseVariant === "s83oJ5HU3") return false;
    return true;
  };
  return <LayoutGroup id={layoutId ?? defaultLayoutId}>{<Variants animate={variants} initial={false}>{<Transition value={transition1} {...addPropertyOverrides({
        s83oJ5HU3: {
          value: transition2
        }
      }, baseVariant, gestureVariant)}>{_jsxs(motion7.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx7(scopingClassNames, "framer-1xuerfq", className, classNames),
          "data-framer-name": "Variant 1",
          "data-highlight": true,
          layoutDependency,
          layoutId: "MwXnb1rsC",
          ref: refBinding,
          style: {
            ...style
          },
          ...addPropertyOverrides({
            nbMMnIX8K: {
              "data-framer-name": void 0
            },
            s83oJ5HU3: {
              "data-framer-name": "Variant 2",
              "data-highlight": void 0
            }
          }, baseVariant, gestureVariant),
          children: [_jsxs(motion7.div, {
            className: "framer-1dd5r3f",
            "data-framer-name": "Group 744",
            layoutDependency,
            layoutId: "MwXnb1rsCPIShlRVZv",
            children: [<MotionDivWithFX __framer__animate={{
              transition: transition3
            }} __framer__animateOnce __framer__enter={animation} __framer__exit={animation1} __framer__styleAppearEffectEnabled __framer__threshold={0.5} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-b3ldj" data-framer-name="warehouse" layoutDependency={layoutDependency} layoutId="MwXnb1rsCjsA5JGU5B" style={{
              backgroundColor: "var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143))",
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              boxShadow: "0px 0.7226247621292714px 0.7226247621292714px -1.25px rgba(0, 0, 0, 0.18), 0px 2.7462399638921484px 2.7462399638921484px -2.5px rgba(0, 0, 0, 0.16), 0px 12px 12px -3.75px rgba(0, 0, 0, 0.06)",
              rotate: 0
            }} variants={{
              nbMMnIX8K: {
                rotate: 31
              }
            }}>{_jsx7(kZLRHbEEz_default, {
                animated: true,
                className: "framer-15n7836",
                layoutDependency,
                layoutId: "MwXnb1rsCByxmOQaxD",
                style: {
                  "--17yrnt4": "var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248))",
                  "--urmpk": 1.5
                }
              })}{<RichText __fromCanvasComponent className="framer-1r4sueu" data-framer-name="Warehouse" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="MwXnb1rsCLtJ1EB7BN" style={{
                "--extracted-r6o4lv": "var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248))",
                "--framer-paragraph-spacing": "2.5446794033050537px"
              }} verticalAlignment="top" withExternalLayout>{<React7.Fragment>{_jsx7(motion7.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-font-size": "12px",
                      "--framer-line-height": "120%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)))"
                    },
                    children: "Warehouse"
                  })}</React7.Fragment>}</RichText>}</MotionDivWithFX>, <MotionDivWithFX __framer__animate={{
              transition: transition3
            }} __framer__animateOnce __framer__enter={animation} __framer__exit={animation1} __framer__styleAppearEffectEnabled __framer__threshold={0.5} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-bfzzex" data-framer-name="after-sales" layoutDependency={layoutDependency} layoutId="MwXnb1rsCnhKrt4OLU" style={{
              backgroundColor: "var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143))",
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              boxShadow: "0px 0.7226247621292714px 0.7226247621292714px -1.25px rgba(0, 0, 0, 0.18), 0px 2.7462399638921484px 2.7462399638921484px -2.5px rgba(0, 0, 0, 0.16), 0px 12px 12px -3.75px rgba(0, 0, 0, 0.06)"
            }}>{_jsx7(iUev6L3gl_default, {
                animated: true,
                className: "framer-1bjld69",
                layoutDependency,
                layoutId: "MwXnb1rsCiwmWbSvgs",
                style: {
                  "--17yrnt4": "var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248))",
                  "--urmpk": 1.5
                }
              })}{<RichText __fromCanvasComponent className="framer-2isi6k" data-framer-name="After-Sales\u2028Service" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="MwXnb1rsCZZdVnjw2Y" style={{
                "--extracted-3sq8v0": "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(234, 234, 235))",
                "--extracted-r6o4lv": "var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248))",
                "--framer-paragraph-spacing": "2.5446794033050537px"
              }} verticalAlignment="top" withExternalLayout>{<React7.Fragment>{_jsxs(motion7.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-font-size": "10px",
                      "--framer-line-height": "120%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)))"
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
              transition: transition3
            }} __framer__animateOnce __framer__enter={animation} __framer__exit={animation1} __framer__styleAppearEffectEnabled __framer__threshold={0.5} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-jz5mjd" data-framer-name="engineering" layoutDependency={layoutDependency} layoutId="MwXnb1rsCT4SN8z7bp" style={{
              backgroundColor: "var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143))",
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              boxShadow: "0px 0.7226247621292714px 0.7226247621292714px -1.25px rgba(0, 0, 0, 0.18), 0px 2.7462399638921484px 2.7462399638921484px -2.5px rgba(0, 0, 0, 0.16), 0px 12px 12px -3.75px rgba(0, 0, 0, 0.06)"
            }}>{<MXmhQfjAM_default animated className="framer-1dj1350" layoutDependency={layoutDependency} layoutId="MwXnb1rsCoqbW8l7oP" style={{
                "--17yrnt4": "var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248))",
                "--urmpk": 1.5
              }} />}{<RichText __fromCanvasComponent className="framer-1j7fbhb" data-framer-name="Engineering" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="MwXnb1rsCdo9RL3Ji1" style={{
                "--extracted-r6o4lv": "var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248))",
                "--framer-paragraph-spacing": "2.5446794033050537px"
              }} verticalAlignment="top" withExternalLayout>{<React7.Fragment>{_jsx7(motion7.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-font-size": "12px",
                      "--framer-line-height": "120%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)))"
                    },
                    children: "Engineering"
                  })}</React7.Fragment>}</RichText>}</MotionDivWithFX>, <MotionDivWithFX __framer__animate={{
              transition: transition3
            }} __framer__animateOnce __framer__enter={animation} __framer__exit={animation1} __framer__styleAppearEffectEnabled __framer__threshold={0.5} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-3shm5a" data-framer-name="manufacturing" layoutDependency={layoutDependency} layoutId="MwXnb1rsCrrzSZw9De" style={{
              backgroundColor: "var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143))",
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              boxShadow: "0px 0.7226247621292714px 0.7226247621292714px -1.25px rgba(0, 0, 0, 0.18), 0px 2.7462399638921484px 2.7462399638921484px -2.5px rgba(0, 0, 0, 0.16), 0px 12px 12px -3.75px rgba(0, 0, 0, 0.06)",
              rotate: 0
            }} variants={{
              nbMMnIX8K: {
                rotate: 31
              }
            }}>{<S_bPD60mp_default animated className="framer-bj6ghh" layoutDependency={layoutDependency} layoutId="MwXnb1rsCfZ72d7Q5u" style={{
                "--17yrnt4": "var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248))",
                "--urmpk": 1.5
              }} />}{<RichText __fromCanvasComponent className="framer-1lgxl4n" data-framer-name="Manufacturing\u2028& Assembly" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="MwXnb1rsCLIqgnaNCJ" style={{
                "--extracted-3sq8v0": "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(234, 234, 235))",
                "--extracted-r6o4lv": "var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248))",
                "--framer-paragraph-spacing": "2.5446794033050537px"
              }} verticalAlignment="top" withExternalLayout>{<React7.Fragment>{_jsxs(motion7.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-font-size": "10px",
                      "--framer-line-height": "120%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)))"
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
              transition: transition3
            }} __framer__animateOnce __framer__enter={animation} __framer__exit={animation1} __framer__styleAppearEffectEnabled __framer__threshold={0.5} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-1r2tf25" data-framer-name="component" layoutDependency={layoutDependency} layoutId="MwXnb1rsCa2_NohHfR" style={{
              backgroundColor: "var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143))",
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              boxShadow: "0px 0.7226247621292714px 0.7226247621292714px -1.25px rgba(0, 0, 0, 0.18), 0px 2.7462399638921484px 2.7462399638921484px -2.5px rgba(0, 0, 0, 0.16), 0px 12px 12px -3.75px rgba(0, 0, 0, 0.06)"
            }}>{<IHS33mEeO_default animated className="framer-sy0xuo" layoutDependency={layoutDependency} layoutId="MwXnb1rsCau4eN5C_9" style={{
                "--17yrnt4": "var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248))",
                "--urmpk": 1.5
              }} />}{<RichText __fromCanvasComponent className="framer-17kdf99" data-framer-name="Component Sourcing" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="MwXnb1rsCcpAAJU1Rb" style={{
                "--extracted-r6o4lv": "var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248))",
                "--framer-paragraph-spacing": "2.5446794033050537px"
              }} verticalAlignment="top" withExternalLayout>{<React7.Fragment>{_jsx7(motion7.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-font-size": "12px",
                      "--framer-line-height": "120%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)))"
                    },
                    children: "Component Sourcing"
                  })}</React7.Fragment>}</RichText>}</MotionDivWithFX>, <MotionDivWithFX __framer__animate={{
              transition: transition3
            }} __framer__animateOnce __framer__enter={animation} __framer__exit={animation1} __framer__styleAppearEffectEnabled __framer__threshold={0.5} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-73wk29" data-framer-name="delivery" layoutDependency={layoutDependency} layoutId="MwXnb1rsCGGjglIQ_M" style={{
              backgroundColor: "var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143))",
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              boxShadow: "0px 0.7226247621292714px 0.7226247621292714px -1.25px rgba(0, 0, 0, 0.18), 0px 2.7462399638921484px 2.7462399638921484px -2.5px rgba(0, 0, 0, 0.16), 0px 12px 12px -3.75px rgba(0, 0, 0, 0.06)",
              rotate: 0
            }} variants={{
              nbMMnIX8K: {
                rotate: 9
              }
            }}>{<TdzQPBCMZ_default animated className="framer-rq3ggz" layoutDependency={layoutDependency} layoutId="MwXnb1rsCq06PdTfIW" style={{
                "--17yrnt4": "var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248))",
                "--urmpk": 1.5
              }} />}{<RichText __fromCanvasComponent className="framer-5sbiph" data-framer-name="Delivery" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="MwXnb1rsCVHok82oYK" style={{
                "--extracted-r6o4lv": "var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248))",
                "--framer-paragraph-spacing": "2.5446794033050537px"
              }} verticalAlignment="top" withExternalLayout>{<React7.Fragment>{_jsx7(motion7.p, {
                    style: {
                      "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                      "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                      "--framer-font-size": "12px",
                      "--framer-line-height": "120%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color": "var(--extracted-r6o4lv, var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)))"
                    },
                    children: "Delivery"
                  })}</React7.Fragment>}</RichText>}</MotionDivWithFX>]
          }), isDisplayed() && <MotionDivWithFX __framer__animate={{
            transition: transition4
          }} __framer__animateOnce={false} __framer__enter={animation2} __framer__exit={animation3} __framer__styleAppearEffectEnabled __framer__threshold={0.5} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-ypdvvj" data-framer-name="colored lines" layoutDependency={layoutDependency} layoutId="bHdlSLlhd">{<SVG7 className="framer-qylgc5" layoutDependency={layoutDependency} layoutId="JvyC1KMrp" opacity={1} requiresOverflowVisible svg={__svg_14} withExternalLayout />}{<SVG7 className="framer-1rwsdzk" layoutDependency={layoutDependency} layoutId="Y9RFZMrDO" opacity={1} requiresOverflowVisible svg={__svg_15} withExternalLayout />}{<SVG7 className="framer-1b0n1ae" layoutDependency={layoutDependency} layoutId="sHoWI5Bse" opacity={1} requiresOverflowVisible svg={__svg_16} withExternalLayout />}{<SVG7 className="framer-15uvvov" layoutDependency={layoutDependency} layoutId="ApmwNM8pB" opacity={1} requiresOverflowVisible svg={__svg_17} withExternalLayout />}{<SVG7 className="framer-m3pjtp" layoutDependency={layoutDependency} layoutId="pXg2qapdl" opacity={1} requiresOverflowVisible svg={__svg_18} withExternalLayout />}{<SVG7 className="framer-1wm1hvd" layoutDependency={layoutDependency} layoutId="pU6ryZbbc" opacity={1} requiresOverflowVisible svg={__svg_19} withExternalLayout />}{<SVG7 className="framer-xx280u" layoutDependency={layoutDependency} layoutId="GyKq0qhHC" opacity={1} requiresOverflowVisible svg={__svg_20} withExternalLayout />}{<SVG7 className="framer-nscc17" layoutDependency={layoutDependency} layoutId="ZwdGalJiu" opacity={1} requiresOverflowVisible svg={__svg_21} withExternalLayout />}{<SVG7 className="framer-p38bsl" layoutDependency={layoutDependency} layoutId="AHTUssI2D" opacity={1} requiresOverflowVisible svg={__svg_22} withExternalLayout />}{<SVG7 className="framer-1fgstdj" layoutDependency={layoutDependency} layoutId="ecW80rgtO" opacity={1} requiresOverflowVisible svg={__svg_23} withExternalLayout />}{<SVG7 className="framer-5lm48m" layoutDependency={layoutDependency} layoutId="qHeWymNj7" opacity={1} requiresOverflowVisible svg={__svg_24} withExternalLayout />}{<SVG7 className="framer-1yt4upt" layoutDependency={layoutDependency} layoutId="ASz4W9dGW" opacity={1} requiresOverflowVisible svg={__svg_25} withExternalLayout />}</MotionDivWithFX>, isDisplayed() && <MotionDivWithFX __framer__animate={{
            transition: transition5
          }} __framer__animateOnce __framer__enter={animation4} __framer__exit={animation5} __framer__styleAppearEffectEnabled __framer__threshold={0.5} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-6nokcb" data-framer-name="white lines" layoutDependency={layoutDependency} layoutId="PSxqAd0G3">{<SVG7 className="framer-1bn3yzw" layoutDependency={layoutDependency} layoutId="USsSvt0jR" opacity={1} requiresOverflowVisible svg={__svg_26} withExternalLayout />}{<SVG7 className="framer-z0btsd" layoutDependency={layoutDependency} layoutId="SBkHwHGVH" opacity={1} requiresOverflowVisible svg={__svg_27} withExternalLayout />}{<SVG7 className="framer-vir3r2" layoutDependency={layoutDependency} layoutId="gDczDrtZ4" opacity={1} requiresOverflowVisible svg={__svg_28} withExternalLayout />}</MotionDivWithFX>, isDisplayed1() && <MotionDivWithFX __framer__animate={{
            transition: transition6
          }} __framer__animateOnce __framer__enter={animation} __framer__exit={animation6} __framer__styleAppearEffectEnabled __framer__threshold={0.5} __perspectiveFX={false} __smartComponentFX __targetOpacity={1} className="framer-2szdxp" data-framer-name="bloom" layoutDependency={layoutDependency} layoutId="VeVSI7tJP" style={{
            background: "radial-gradient(100% 100% at 100% 0%, var(--token-d40a5262-b4fe-45d5-9e97-61d735d1744e, rgb(255, 152, 0)) 0%, var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62)) 100%)",
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            boxShadow: "0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06)"
          }} variants={{
            nbMMnIX8K: {
              background: "radial-gradient(100% 100% at 100% 0%, var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236)) 0%, var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236)) 100%)",
              boxShadow: "inset 0px 0px 8px 2px rgba(0, 0, 0, 0.06)"
            }
          }} {...addPropertyOverrides({
            nbMMnIX8K: {
              __framer__animate: {
                transition: transition7
              },
              __framer__exit: animation7,
              "data-highlight": true,
              onTap: onTapuh8xe3
            },
            s83oJ5HU3: {
              "data-highlight": true,
              onTap: onTap1su20b2
            }
          }, baseVariant, gestureVariant)}>{_jsxs(motion7.div, {
              className: "framer-nx9ur1",
              layoutDependency,
              layoutId: "W4cyJnV5u",
              children: [<SVG7 className="framer-1nzw1n5" layoutDependency={layoutDependency} layoutId="zxrVkEDyr" opacity={1} requiresOverflowVisible={false} svg={__svg_29} withExternalLayout {...addPropertyOverrides({
                nbMMnIX8K: {
                  svg: __svg_7
                }
              }, baseVariant, gestureVariant)}>{<SVG7 className="framer-1nxwiui" layoutDependency={layoutDependency} layoutId="Ah9gTKA6K" opacity={1} requiresOverflowVisible={false} svg={__svg_30} withExternalLayout {...addPropertyOverrides({
                  nbMMnIX8K: {
                    svg: __svg_8
                  }
                }, baseVariant, gestureVariant)}>{<SVG7 className="framer-j6ix8n" layoutDependency={layoutDependency} layoutId="pCAdcxfiE" opacity={1} requiresOverflowVisible={false} svg={__svg_31} withExternalLayout />}{<SVG7 className="framer-18y5zr7" layoutDependency={layoutDependency} layoutId="sYvhvNwlB" opacity={1} requiresOverflowVisible={false} svg={__svg_32} withExternalLayout />}{<SVG7 className="framer-1znl8u" layoutDependency={layoutDependency} layoutId="b0UAc2PUE" opacity={1} requiresOverflowVisible={false} svg={__svg_33} withExternalLayout />}</SVG7>}{<SVG7 className="framer-i6gkf2" layoutDependency={layoutDependency} layoutId="K2AZnGeQJ" opacity={1} requiresOverflowVisible={false} svg={__svg_34} withExternalLayout {...addPropertyOverrides({
                  nbMMnIX8K: {
                    svg: __svg_9
                  }
                }, baseVariant, gestureVariant)} />}{<SVG7 className="framer-mvj1r1" layoutDependency={layoutDependency} layoutId="ObtWn6h67" opacity={1} requiresOverflowVisible={false} svg={__svg_35} withExternalLayout {...addPropertyOverrides({
                  nbMMnIX8K: {
                    svg: __svg_10
                  }
                }, baseVariant, gestureVariant)}>{<SVG7 className="framer-19hkybh" layoutDependency={layoutDependency} layoutId="xyjoN9abe" opacity={1} requiresOverflowVisible={false} svg={__svg_36} withExternalLayout />}{<SVG7 className="framer-4v7sqg" layoutDependency={layoutDependency} layoutId="Cv9YuqJxg" opacity={1} requiresOverflowVisible={false} svg={__svg_37} withExternalLayout />}</SVG7>}{<SVG7 className="framer-1ie0rm7" layoutDependency={layoutDependency} layoutId="MlMYTzlJM" opacity={1} requiresOverflowVisible={false} svg={__svg_38} withExternalLayout {...addPropertyOverrides({
                  nbMMnIX8K: {
                    svg: __svg_11
                  }
                }, baseVariant, gestureVariant)}>{<SVG7 className="framer-6leyf6" layoutDependency={layoutDependency} layoutId="uzJblmSzh" opacity={1} requiresOverflowVisible={false} svg={__svg_39} withExternalLayout />}{<SVG7 className="framer-melvlu" layoutDependency={layoutDependency} layoutId="JSoReeZ8J" opacity={1} requiresOverflowVisible={false} svg={__svg_40} withExternalLayout />}</SVG7>}{<SVG7 className="framer-1l1zczq" layoutDependency={layoutDependency} layoutId="GEIlaN2Yj" opacity={1} requiresOverflowVisible={false} svg={__svg_41} withExternalLayout {...addPropertyOverrides({
                  nbMMnIX8K: {
                    svg: __svg_12
                  }
                }, baseVariant, gestureVariant)} />}</SVG7>, <SVG7 className="framer-gd5o5a" layoutDependency={layoutDependency} layoutId="Wob4RrfRM" opacity={1} requiresOverflowVisible={false} svg={__svg_42} withExternalLayout {...addPropertyOverrides({
                nbMMnIX8K: {
                  svg: __svg_13
                }
              }, baseVariant, gestureVariant)} />]
            })}{isDisplayed2() && <RichText __fromCanvasComponent className="framer-1e1qvc8" data-framer-name="Turn on" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="LAaj0fAUn" style={{
              "--extracted-r6o4lv": "var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143))",
              "--framer-paragraph-spacing": "2.5446794033050537px",
              "--variable-reference-MdDJP0CFd-UjG1zwRhg": MdDJP0CFd
            }} verticalAlignment="top" withExternalLayout>{<React7.Fragment>{_jsx7(motion7.p, {
                  style: {
                    "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                    "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                    "--framer-font-size": "calc(var(--variable-reference-MdDJP0CFd-UjG1zwRhg) * 1px)",
                    "--framer-line-height": "120%",
                    "--framer-text-alignment": "right",
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)))"
                  },
                  children: "Turn on →"
                })}</React7.Fragment>}</RichText>}</MotionDivWithFX>]
        })}</Transition>}</Variants>}</LayoutGroup>;
});
var css7 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-jXdPc.framer-1agn6sh, .framer-jXdPc .framer-1agn6sh { display: block; }", ".framer-jXdPc.framer-1xuerfq { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 488px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 490px; }", ".framer-jXdPc .framer-1dd5r3f { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 1; }", ".framer-jXdPc .framer-b3ldj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: 96px; justify-content: center; left: calc(50.11600928074248% - 96px / 2); overflow: visible; padding: 2.5446794033050537px; position: absolute; top: 0px; width: 96px; }", ".framer-jXdPc .framer-15n7836, .framer-jXdPc .framer-1bjld69, .framer-jXdPc .framer-1dj1350, .framer-jXdPc .framer-bj6ghh, .framer-jXdPc .framer-sy0xuo, .framer-jXdPc .framer-rq3ggz { flex: none; height: var(--framer-aspect-ratio-supported, 36px); position: relative; width: 36px; }", ".framer-jXdPc .framer-1r4sueu, .framer-jXdPc .framer-2isi6k, .framer-jXdPc .framer-1j7fbhb, .framer-jXdPc .framer-1lgxl4n, .framer-jXdPc .framer-5sbiph { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-jXdPc .framer-bfzzex { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: 96px; justify-content: center; left: calc(50.11600928074248% - 96px / 2); overflow: visible; padding: 4px; position: absolute; width: 96px; }", ".framer-jXdPc .framer-jz5mjd { align-content: center; align-items: center; bottom: 97px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: 96px; justify-content: center; left: 0px; overflow: visible; padding: 4px; position: absolute; width: 96px; }", ".framer-jXdPc .framer-3shm5a { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: 96px; justify-content: center; left: 0px; overflow: visible; padding: 4px; position: absolute; top: 92px; width: 96px; }", ".framer-jXdPc .framer-1r2tf25 { align-content: center; align-items: center; bottom: 96px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: 96px; justify-content: center; overflow: visible; padding: 4px; position: absolute; right: 0px; width: 96px; }", ".framer-jXdPc .framer-17kdf99 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 70px; word-break: break-word; word-wrap: break-word; }", ".framer-jXdPc .framer-73wk29 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: 96px; justify-content: center; overflow: visible; padding: 4px; position: absolute; right: 0px; top: 92px; width: 96px; }", ".framer-jXdPc .framer-ypdvvj { flex: none; height: 411px; left: calc(49.88399071925757% - 357px / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 411px / 2); width: 357px; z-index: 0; }", ".framer-jXdPc .framer-qylgc5 { height: 100px; left: 179px; position: absolute; top: 1px; width: 177px; }", ".framer-jXdPc .framer-1rwsdzk { height: 100px; left: 179px; position: absolute; top: 309px; width: 177px; }", ".framer-jXdPc .framer-1b0n1ae { height: 100px; left: 2px; position: absolute; top: 0px; width: 177px; }", ".framer-jXdPc .framer-15uvvov { height: 309px; left: 2px; position: absolute; top: 0px; width: 177px; }", ".framer-jXdPc .framer-m3pjtp { height: 309px; left: 179px; position: absolute; top: 0px; width: 177px; }", ".framer-jXdPc .framer-1wm1hvd { height: 100px; left: 2px; position: absolute; top: 311px; width: 177px; }", ".framer-jXdPc .framer-xx280u { height: 310px; left: 2px; position: absolute; top: 101px; width: 177px; }", ".framer-jXdPc .framer-nscc17 { height: 310px; left: 179px; position: absolute; top: 101px; width: 177px; }", ".framer-jXdPc .framer-p38bsl { height: 207px; left: 356px; position: absolute; top: 101px; width: 1px; }", ".framer-jXdPc .framer-1fgstdj { height: 1px; left: 0px; position: absolute; top: 307px; width: 356px; }", ".framer-jXdPc .framer-5lm48m { height: 207px; left: 0px; position: absolute; top: 101px; width: 1px; }", ".framer-jXdPc .framer-1yt4upt { height: 1px; left: 0px; position: absolute; top: 101px; width: 356px; }", ".framer-jXdPc .framer-6nokcb { flex: none; height: 410px; left: calc(50.11600928074248% - 356px / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 410px / 2); width: 356px; z-index: 0; }", ".framer-jXdPc .framer-1bn3yzw, .framer-jXdPc .framer-vir3r2 { height: 209px; left: 0px; position: absolute; top: 100px; width: 356px; }", ".framer-jXdPc .framer-z0btsd { height: 410px; left: 179px; position: absolute; top: 0px; width: 1px; }", ".framer-jXdPc .framer-2szdxp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 2.5446794033050537px; height: 96px; justify-content: center; overflow: visible; padding: 2.5446794033050537px; position: relative; width: 96px; z-index: 2; }", ".framer-jXdPc .framer-nx9ur1 { flex: none; height: 18px; overflow: visible; position: relative; width: 76px; }", ".framer-jXdPc .framer-1nzw1n5 { height: 19px; left: 1px; position: absolute; top: 1px; width: 72px; }", ".framer-jXdPc .framer-1nxwiui, .framer-jXdPc .framer-j6ix8n { height: 18px; left: 0px; position: absolute; top: 0px; width: 14px; }", ".framer-jXdPc .framer-18y5zr7 { height: 4px; left: 4px; position: absolute; top: 4px; width: 5px; }", ".framer-jXdPc .framer-1znl8u { height: 5px; left: 4px; position: absolute; top: 10px; width: 6px; }", ".framer-jXdPc .framer-i6gkf2 { height: 18px; left: 16px; position: absolute; top: 0px; width: 4px; }", ".framer-jXdPc .framer-mvj1r1 { height: 13px; left: 21px; position: absolute; top: 5px; width: 14px; }", ".framer-jXdPc .framer-19hkybh, .framer-jXdPc .framer-6leyf6 { height: 13px; left: 0px; position: absolute; top: 0px; width: 14px; }", ".framer-jXdPc .framer-4v7sqg, .framer-jXdPc .framer-melvlu { height: 7px; left: 4px; position: absolute; top: 3px; width: 6px; }", ".framer-jXdPc .framer-1ie0rm7 { height: 13px; left: 36px; position: absolute; top: 5px; width: 14px; }", ".framer-jXdPc .framer-1l1zczq { height: 13px; left: 52px; position: absolute; top: 5px; width: 20px; }", ".framer-jXdPc .framer-gd5o5a { height: 8px; left: 71px; position: absolute; top: 1px; width: 11px; }", ".framer-jXdPc .framer-1e1qvc8 { flex: none; height: auto; position: absolute; right: 106px; top: 41px; white-space: pre; width: auto; z-index: 1; }", ".framer-jXdPc.framer-v-1dzjjir .framer-1dd5r3f { order: 1; }", ".framer-jXdPc.framer-v-1dzjjir .framer-ypdvvj, .framer-jXdPc.framer-v-1f0zs8 .framer-1dd5r3f { order: 0; }", ".framer-jXdPc.framer-v-1dzjjir .framer-6nokcb { order: 2; }", ".framer-jXdPc.framer-v-1dzjjir .framer-2szdxp { cursor: pointer; order: 3; }", ".framer-jXdPc.framer-v-1f0zs8 .framer-b3ldj { left: calc(67.61710794297355% - 96px / 2); top: 376px; }", ".framer-jXdPc.framer-v-1f0zs8 .framer-bfzzex { left: calc(45.21384928716907% - 96px / 2); }", ".framer-jXdPc.framer-v-1f0zs8 .framer-jz5mjd, .framer-jXdPc.framer-v-1f0zs8 .framer-1r2tf25 { bottom: 0px; }", ".framer-jXdPc.framer-v-1f0zs8 .framer-3shm5a { bottom: 74px; left: 90px; top: unset; }", ".framer-jXdPc.framer-v-1f0zs8 .framer-73wk29 { bottom: 102px; right: 43px; top: unset; }", ".framer-jXdPc.framer-v-1f0zs8 .framer-2szdxp { cursor: pointer; left: calc(50.00000000000002% - 96px / 2); order: 1; position: absolute; top: 126px; }"];
var FramerUjG1zwRhg = withCSS7(Component7, css7, "framer-jXdPc");
var UjG1zwRhg_default = FramerUjG1zwRhg;
FramerUjG1zwRhg.displayName = "brands-intro-animation";
FramerUjG1zwRhg.defaultProps = {
  height: 488,
  width: 490
};
addPropertyControls7(FramerUjG1zwRhg, {
  variant: {
    options: ["MwXnb1rsC", "s83oJ5HU3", "nbMMnIX8K"],
    optionTitles: ["Variant 1", "Variant 2", "Variant"],
    title: "Variant",
    type: ControlType7.Enum
  },
  MdDJP0CFd: {
    defaultValue: 12,
    title: "turn on size",
    type: ControlType7.Number
  }
});
addFonts(FramerUjG1zwRhg, [{
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
    "default": {
      "type": "reactComponent",
      "name": "FramerUjG1zwRhg",
      "slots": [],
      "annotations": {
        "framerContractVersion": "1",
        "framerDisplayContentsDiv": "false",
        "framerIntrinsicWidth": "490",
        "framerIntrinsicHeight": "488",
        "framerImmutableVariables": "true",
        "framerColorSyntax": "true",
        "framerComponentViewportWidth": "true",
        "framerVariables": '{"MdDJP0CFd":"turnOnSize"}',
        "framerAutoSizeImages": "true",
        "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"s83oJ5HU3":{"layout":["fixed","fixed"]},"nbMMnIX8K":{"layout":["fixed","fixed"]}}}'
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
var _OriginalComponent = UjG1zwRhg_default;
function BrandsintroanimationWrapped(props) {
  var _variant = useVariant(props.variant);
  var _inner = (_variant !== undefined) ? { ...props, variant: _variant } : props;
  return _ctxJsx(ContextProviders, { children: _ctxJsx(_OriginalComponent, _inner) });
}
Object.assign(BrandsintroanimationWrapped, _OriginalComponent);
export {  __FramerMetadata__,  BrandsintroanimationWrapped as default   };