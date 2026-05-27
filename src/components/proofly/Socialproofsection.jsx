"use client"
// http-url:https://framerusercontent.com/modules/mj5yMhmzFTKX0CtL0dUA/GBMC7yCPfIJ6Sxzij1db/oKd_eXMbQ.js
import { jsx as _jsx2, jsxs as _jsxs2 } from "react/jsx-runtime";
import { addFonts, addPropertyControls as addPropertyControls2, ComponentViewportProvider, ControlType as ControlType5, cx, getFonts, getFontsFromSharedStyle, Image, RichText, SmartComponentScopedContainer, SVG, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "@proofly-framer/runtime";
import { LayoutGroup, motion as motion2, MotionConfigContext } from "@proofly-framer/runtime";
import * as React3 from "react";
import { useRef as useRef4 } from "react";

// Extracted SVG assets
const __svg_1 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 119 15\"><path d=\"M 28.279 6.324 L 28.284 8.65 C 28.291 12.08 25.512 14.865 22.082 14.865 L 0.031 14.865 L 0 0.135 L 22.077 0.135 C 25.497 0.135 28.272 2.904 28.279 6.324 Z M 22.094 4.011 L 3.876 4.011 L 3.876 10.988 L 22.094 10.988 C 23.379 10.988 24.42 9.947 24.42 8.663 L 24.42 6.337 C 24.42 5.052 23.379 4.011 22.094 4.011 Z\" fill=\"var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)) /* {&quot;name&quot;:&quot;Background&quot;} */\"></path><path d=\"M 58.531 8.639 L 58.531 0.135 L 54.655 0.135 L 54.655 8.663 C 54.655 9.947 53.613 10.988 52.329 10.988 L 36.824 10.988 C 35.54 10.988 34.498 9.947 34.498 8.663 L 34.498 0.135 L 30.622 0.135 L 30.622 8.656 C 30.622 12.084 33.403 14.862 36.831 14.858 L 52.336 14.841 C 55.758 14.837 58.531 12.062 58.531 8.639 Z M 88.765 4.011 L 88.765 0.135 L 65.508 0.135 C 62.939 0.135 60.857 2.218 60.857 4.786 C 60.857 7.355 62.939 9.438 65.508 9.438 L 84.114 9.438 C 84.542 9.438 84.889 9.785 84.889 10.213 C 84.889 10.641 84.542 10.988 84.114 10.988 L 60.857 10.988 L 60.857 14.865 L 84.114 14.865 C 86.683 14.865 88.765 12.782 88.765 10.213 C 88.765 7.644 86.683 5.562 84.114 5.562 L 65.508 5.562 C 65.08 5.562 64.733 5.215 64.733 4.786 C 64.733 4.358 65.08 4.011 65.508 4.011 Z M 119 0.135 L 91.091 0.135 L 91.091 4.011 L 103.107 4.011 L 103.107 14.865 L 106.984 14.865 L 106.984 4.011 L 119 4.011 Z\" fill=\"var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)) /* {&quot;name&quot;:&quot;Background&quot;} */\"></path></svg>";
const __svg_2 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 120 12\"><path d=\"M 0 11.076 L 0 1.465 L 3.942 1.465 L 7.632 8.162 L 11.304 1.456 L 15.283 1.456 L 15.283 11.08 L 12.395 11.08 L 12.395 4.626 L 8.975 11.107 L 6.27 11.107 L 2.916 4.754 L 2.916 11.076 Z M 34.693 1.292 C 33.191 1.292 28.782 1.673 28.782 6.279 C 28.782 10.886 33.191 11.266 34.693 11.266 C 36.195 11.266 40.604 10.886 40.604 6.279 C 40.604 1.673 36.195 1.292 34.693 1.292 Z M 34.693 8.655 C 33.978 8.655 31.877 8.474 31.877 6.279 C 31.877 4.085 33.978 3.903 34.693 3.903 C 35.408 3.903 37.509 4.085 37.509 6.279 C 37.509 8.474 35.408 8.655 34.693 8.655 Z M 22.086 1.292 C 20.584 1.292 16.175 1.673 16.175 6.279 C 16.175 10.886 20.584 11.266 22.086 11.266 C 23.588 11.266 27.997 10.886 27.997 6.279 C 27.997 1.673 23.588 1.292 22.086 1.292 Z M 22.086 8.655 C 21.371 8.655 19.27 8.474 19.27 6.279 C 19.27 4.085 21.371 3.903 22.086 3.903 C 22.801 3.903 24.902 4.085 24.902 6.279 C 24.902 8.474 22.801 8.655 22.086 8.655 Z M 41.441 11.08 L 41.441 1.458 L 45.335 1.458 L 49.958 5.07 L 49.958 1.455 L 52.842 1.455 L 52.842 11.08 L 49.956 11.08 L 49.956 8.448 L 44.38 4.228 L 44.38 11.08 Z M 63.243 6.116 C 64.068 5.79 64.468 5.124 64.468 3.922 C 64.468 2.028 63.474 1.465 61.392 1.465 L 54.219 1.465 L 54.219 11.08 L 61.562 11.08 C 63.751 11.08 64.797 10.49 64.797 8.505 C 64.797 7.123 64.29 6.417 63.243 6.116 Z M 57.149 3.889 L 60.469 3.889 C 61.085 3.889 61.529 4.107 61.529 4.598 C 61.529 5.089 61.085 5.307 60.469 5.307 L 57.149 5.307 L 57.149 3.889 Z M 60.705 8.654 L 57.149 8.654 L 57.149 7.135 L 60.705 7.135 C 61.365 7.135 61.84 7.369 61.84 7.894 C 61.84 8.42 61.365 8.654 60.705 8.654 Z M 65.98 1.484 L 68.86 1.484 L 68.86 11.079 L 65.98 11.079 Z M 70.142 1.488 L 73.044 1.488 L 73.044 5.047 L 74.613 5.047 C 74.771 5.047 74.923 4.982 75.032 4.868 L 78.283 1.463 L 81.848 1.463 L 77.435 6.155 L 82.049 11.08 L 78.396 11.08 L 75.051 7.672 C 74.941 7.561 74.792 7.498 74.637 7.498 L 73.08 7.498 L 73.08 11.08 L 70.142 11.08 Z\" fill=\"var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)) /* {&quot;name&quot;:&quot;Background&quot;} */\"></path><path d=\"M 82.707 1.465 L 82.707 5.268 L 80.41 5.268 L 80.41 7.22 L 82.735 7.22 L 82.735 11.08 L 92.604 11.08 L 92.604 8.718 L 85.695 8.718 L 85.695 7.197 L 92.233 7.197 L 92.233 5.246 L 85.7 5.246 L 85.7 3.829 L 92.604 3.829 L 92.604 1.465 L 82.707 1.465 Z M 102.954 4.164 L 103.676 2.162 C 103.676 2.162 101.86 1.273 98.858 1.273 C 95.856 1.273 93.633 2.218 93.633 4.349 C 93.633 8.685 100.841 6.925 100.841 8.296 C 100.841 9.037 99.266 9.093 98.488 9.093 C 96.208 9.093 94.337 8.222 94.337 8.222 L 93.614 10.223 C 93.614 10.223 95.43 11.266 98.432 11.266 C 101.999 11.266 103.876 10.097 103.876 8.037 C 103.876 3.481 96.561 5.84 96.561 4.09 C 96.561 3.348 98.024 3.342 98.803 3.342 C 101.082 3.342 102.954 4.164 102.954 4.164 Z M 117.617 5.277 C 115.614 1.648 114.588 -0.166 113.401 -0.165 C 112.214 -0.166 111.188 1.648 109.185 5.277 C 107.253 8.776 106.3 10.545 106.936 11.496 C 107.356 12.123 108.129 12.191 113.401 12.156 C 118.673 12.191 119.446 12.123 119.866 11.496 C 120.502 10.545 119.549 8.776 117.617 5.277 Z M 114.802 5.28 C 114.676 5.186 114.492 5.228 114.424 5.368 L 113.648 6.952 C 113.59 7.071 113.447 7.127 113.32 7.079 L 111.919 6.557 C 111.781 6.505 111.627 6.527 111.509 6.615 L 109.42 8.172 C 111.318 4.481 112.71 2.021 113.401 2.021 C 113.99 2.021 115.085 3.803 116.569 6.61 L 114.802 5.28 Z\" fill=\"var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)) /* {&quot;name&quot;:&quot;Background&quot;} */\"></path></svg>";
const __svg_3 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 114 16\"><path d=\"M 108.158 7.702 L 113.9 7.702 L 113.9 8.161 C 113.9 9.205 113.776 10.129 113.531 10.932 C 113.291 11.676 112.886 12.372 112.316 13.02 C 111.026 14.471 109.386 15.197 107.394 15.197 C 105.45 15.197 103.786 14.495 102.4 13.092 C 101.015 11.682 100.322 9.991 100.322 8.017 C 100.322 6.001 101.027 4.292 102.436 2.888 C 103.846 1.479 105.561 0.774 107.583 0.774 C 108.669 0.774 109.682 0.996 110.624 1.44 C 111.524 1.884 112.409 2.603 113.278 3.599 L 111.785 5.03 C 110.645 3.512 109.257 2.753 107.619 2.753 C 106.149 2.753 104.916 3.26 103.921 4.274 C 102.925 5.27 102.427 6.517 102.427 8.017 C 102.427 9.565 102.982 10.839 104.092 11.841 C 105.129 12.771 106.254 13.236 107.466 13.236 C 108.497 13.236 109.424 12.888 110.246 12.192 C 111.068 11.49 111.527 10.65 111.623 9.673 L 108.158 9.673 Z M 82.346 14.936 L 82.346 0.099 L 92.477 10.698 L 92.477 1.044 L 94.574 1.044 L 94.574 15.782 L 84.442 5.21 L 84.442 14.936 Z M 74.13 1.044 L 74.13 14.936 L 72.033 14.936 L 72.033 1.044 Z M 55.173 1.044 L 59.015 10.671 L 62.911 1.044 L 65.205 1.044 L 58.97 15.98 L 52.878 1.044 Z M 46.413 3.014 L 40.843 3.014 L 40.843 6.352 L 46.251 6.352 L 46.251 8.323 L 40.843 8.323 L 40.843 12.966 L 46.413 12.966 L 46.413 14.936 L 38.747 14.936 L 38.747 1.044 L 46.413 1.044 Z M 29.331 11.562 L 23.383 11.562 L 21.836 14.936 L 19.577 14.936 L 26.452 0.171 L 33.083 14.936 L 30.789 14.936 Z M 28.476 9.592 L 26.416 4.868 L 24.256 9.592 Z M 0 14.936 L 2.924 0 L 7.693 10.797 L 12.633 0 L 15.26 14.936 L 13.11 14.936 L 11.769 6.55 L 7.657 15.575 L 3.662 6.541 L 2.168 14.936 Z\" fill=\"var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)) /* {&quot;name&quot;:&quot;Background&quot;} */\"></path></svg>";


// http-url:https://framerusercontent.com/modules/UIrMjSS6ZX89L0CsT8k6/ZtFjxnixyznUo5AKQme5/Carousel.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Children, useCallback as useCallback2, useLayoutEffect, useEffect as useEffect7, useState as useState3, useRef as useRef3, cloneElement } from "react";
import { addPropertyControls, ControlType as ControlType4, RenderTarget as RenderTarget3 } from "@proofly-framer/runtime";

// http-url:https://esm.sh/@motionone/utils@10.18.0/es2022/utils.mjs
function h(o, r) {
  o.indexOf(r) === -1 && o.push(r);
}
var x = (o, r, e2) => Math.min(Math.max(e2, o), r);
var b = {
  duration: 0.3,
  delay: 0,
  endDelay: 0,
  repeat: 0,
  easing: "ease"
};
var s = o => typeof o == "number";
var a = o => Array.isArray(o) && !s(o[0]);
var l = (o, r, e2) => {
  let t2 = r - o;
  return ((e2 - o) % t2 + t2) % t2 + o;
};
function g(o, r) {
  return a(o) ? o[l(0, o.length, r)] : o;
}
var i = (o, r, e2) => -e2 * o + e2 * r + o;
var O = () => {};
var u = o => o;
var f = (o, r, e2) => r - o === 0 ? 1 : (e2 - o) / (r - o);
function m(o, r) {
  let e2 = o[o.length - 1];
  for (let t2 = 1; t2 <= r; t2++) {
    let p = f(0, r, t2);
    o.push(i(e2, 1, p));
  }
}
function d(o) {
  let r = [0];
  return m(r, o - 1), r;
}
function S(o, r = d(o.length), e2 = u) {
  let t2 = o.length,
    p = t2 - r.length;
  return p > 0 && m(r, p), y => {
    let n = 0;
    for (; n < t2 - 2 && !(y < r[n + 1]); n++);
    let c = x(0, 1, f(r[n], r[n + 1], y));
    return c = g(e2, n)(c), i(o[n], o[n + 1], c);
  };
}
var A = o => Array.isArray(o) && s(o[0]);
var F = o => typeof o == "object" && !!o.createAnimation;
var I = o => typeof o == "function";
var v = o => typeof o == "string";
var N = {
  ms: o => o * 1e3,
  s: o => o / 1e3
};
function R(o, r) {
  return r ? o * (1e3 / r) : 0;
}

// http-url:https://esm.sh/@motionone/easing@10.18.0/es2022/easing.mjs
var s2 = (n, e2, t2) => (((1 - 3 * t2 + 3 * e2) * n + (3 * t2 - 6 * e2)) * n + 3 * e2) * n;
var f2 = 1e-7;
var d2 = 12;
function b2(n, e2, t2, r, o) {
  let i2,
    c,
    u2 = 0;
  do c = e2 + (t2 - e2) / 2, i2 = s2(c, r, o) - n, i2 > 0 ? t2 = c : e2 = c; while (Math.abs(i2) > f2 && ++u2 < d2);
  return c;
}
function l2(n, e2, t2, r) {
  if (n === e2 && t2 === r) return u;
  let o = i2 => b2(i2, 0, 1, n, t2);
  return i2 => i2 === 0 || i2 === 1 ? i2 : s2(o(i2), e2, r);
}
var h2 = (n, e2 = "end") => t2 => {
  t2 = e2 === "end" ? Math.min(t2, 0.999) : Math.max(t2, 1e-3);
  let r = t2 * n,
    o = e2 === "end" ? Math.floor(r) : Math.ceil(r);
  return x(0, 1, o / n);
};

// http-url:https://esm.sh/@motionone/animation@10.18.0/es2022/animation.mjs
var w = {
  ease: l2(0.25, 0.1, 0.25, 1),
  "ease-in": l2(0.42, 0, 1, 1),
  "ease-in-out": l2(0.42, 0, 0.58, 1),
  "ease-out": l2(0, 0, 0.58, 1)
};
var M = /\((.*?)\)/;
function m2(s3) {
  if (I(s3)) return s3;
  if (A(s3)) return l2(...s3);
  let t2 = w[s3];
  if (t2) return t2;
  if (s3.startsWith("steps")) {
    let a2 = M.exec(s3);
    if (a2) {
      let e2 = a2[1].split(",");
      return h2(parseFloat(e2[0]), e2[1].trim());
    }
  }
  return u;
}
var T = class {
  constructor(t2, a2 = [0, 1], {
    easing: e2,
    duration: l3 = b.duration,
    delay: p = b.delay,
    endDelay: S4 = b.endDelay,
    repeat: R3 = b.repeat,
    offset: A2,
    direction: c = "normal",
    autoplay: x3 = true
  } = {}) {
    if (this.startTime = null, this.rate = 1, this.t = 0, this.cancelTimestamp = null, this.easing = u, this.duration = 0, this.totalDuration = 0, this.repeat = 0, this.playState = "idle", this.finished = new Promise((r, h4) => {
      this.resolve = r, this.reject = h4;
    }), e2 = e2 || b.easing, F(e2)) {
      let r = e2.createAnimation(a2);
      e2 = r.easing, a2 = r.keyframes || a2, l3 = r.duration || l3;
    }
    this.repeat = R3, this.easing = a(e2) ? u : m2(e2), this.updateDuration(l3);
    let E2 = S(a2, A2, a(e2) ? e2.map(m2) : u);
    this.tick = r => {
      var h4;
      p = p;
      let i2 = 0;
      this.pauseTime !== void 0 ? i2 = this.pauseTime : i2 = (r - this.startTime) * this.rate, this.t = i2, i2 /= 1e3, i2 = Math.max(i2 - p, 0), this.playState === "finished" && this.pauseTime === void 0 && (i2 = this.totalDuration);
      let f3 = i2 / this.duration,
        g2 = Math.floor(f3),
        n = f3 % 1;
      !n && f3 >= 1 && (n = 1), n === 1 && g2--;
      let y = g2 % 2;
      (c === "reverse" || c === "alternate" && y || c === "alternate-reverse" && !y) && (n = 1 - n);
      let q3 = i2 >= this.totalDuration ? 1 : Math.min(n, 1),
        v2 = E2(this.easing(q3));
      t2(v2), this.pauseTime === void 0 && (this.playState === "finished" || i2 >= this.totalDuration + S4) ? (this.playState = "finished", (h4 = this.resolve) === null || h4 === void 0 || h4.call(this, v2)) : this.playState !== "idle" && (this.frameRequestId = requestAnimationFrame(this.tick));
    }, x3 && this.play();
  }
  play() {
    let t2 = performance.now();
    this.playState = "running", this.pauseTime !== void 0 ? this.startTime = t2 - this.pauseTime : this.startTime || (this.startTime = t2), this.cancelTimestamp = this.startTime, this.pauseTime = void 0, this.frameRequestId = requestAnimationFrame(this.tick);
  }
  pause() {
    this.playState = "paused", this.pauseTime = this.t;
  }
  finish() {
    this.playState = "finished", this.tick(0);
  }
  stop() {
    var t2;
    this.playState = "idle", this.frameRequestId !== void 0 && cancelAnimationFrame(this.frameRequestId), (t2 = this.reject) === null || t2 === void 0 || t2.call(this, false);
  }
  cancel() {
    this.stop(), this.tick(this.cancelTimestamp);
  }
  reverse() {
    this.rate *= -1;
  }
  commitStyles() {}
  updateDuration(t2) {
    this.duration = t2, this.totalDuration = t2 * (this.repeat + 1);
  }
  get currentTime() {
    return this.t;
  }
  set currentTime(t2) {
    this.pauseTime !== void 0 || this.rate === 0 ? this.pauseTime = t2 : this.startTime = performance.now() - t2 / this.rate;
  }
  get playbackRate() {
    return this.rate;
  }
  set playbackRate(t2) {
    this.rate = t2;
  }
};

// http-url:https://esm.sh/@motionone/generators@10.18.0/es2022/generators.mjs
var S2 = 5;
function x2(t2, o, r) {
  let s3 = Math.max(o - S2, 0);
  return R(r - t2(s3), o - s3);
}
var h3 = {
  stiffness: 100,
  damping: 10,
  mass: 1
};
var w2 = (t2 = h3.stiffness, o = h3.damping, r = h3.mass) => o / (2 * Math.sqrt(t2 * r));
function k(t2, o, r) {
  return t2 < o && r >= o || t2 > o && r <= o;
}
var V = ({
  stiffness: t2 = h3.stiffness,
  damping: o = h3.damping,
  mass: r = h3.mass,
  from: s3 = 0,
  to: n = 1,
  velocity: u2 = 0,
  restSpeed: l3,
  restDistance: d3
} = {}) => {
  u2 = u2 ? N.s(u2) : 0;
  let c = {
      done: false,
      hasReachedTarget: false,
      current: s3,
      target: n
    },
    p = n - s3,
    m3 = Math.sqrt(t2 / r) / 1e3,
    a2 = w2(t2, o, r),
    T2 = Math.abs(p) < 5;
  l3 || (l3 = T2 ? 0.01 : 2), d3 || (d3 = T2 ? 5e-3 : 0.5);
  let M3;
  if (a2 < 1) {
    let i2 = m3 * Math.sqrt(1 - a2 * a2);
    M3 = f3 => n - Math.exp(-a2 * m3 * f3) * ((-u2 + a2 * m3 * p) / i2 * Math.sin(i2 * f3) + p * Math.cos(i2 * f3));
  } else M3 = i2 => n - Math.exp(-m3 * i2) * (p + (-u2 + m3 * p) * i2);
  return i2 => {
    c.current = M3(i2);
    let f3 = i2 === 0 ? u2 : x2(M3, i2, c.current),
      g2 = Math.abs(f3) <= l3,
      y = Math.abs(n - c.current) <= d3;
    return c.done = g2 && y, c.hasReachedTarget = k(s3, n, c.current), c;
  };
};
var L = ({
  from: t2 = 0,
  velocity: o = 0,
  power: r = 0.8,
  decay: s3 = 0.325,
  bounceDamping: n,
  bounceStiffness: u2,
  changeTarget: l3,
  min: d3,
  max: c,
  restDistance: p = 0.5,
  restSpeed: m3
}) => {
  s3 = N.ms(s3);
  let a2 = {
      hasReachedTarget: false,
      done: false,
      current: t2,
      target: t2
    },
    T2 = e2 => d3 !== void 0 && e2 < d3 || c !== void 0 && e2 > c,
    M3 = e2 => d3 === void 0 ? c : c === void 0 || Math.abs(d3 - e2) < Math.abs(c - e2) ? d3 : c,
    i2 = r * o,
    f3 = t2 + i2,
    g2 = l3 === void 0 ? f3 : l3(f3);
  a2.target = g2, g2 !== f3 && (i2 = g2 - t2);
  let y = e2 => -i2 * Math.exp(-e2 / s3),
    D = e2 => g2 + y(e2),
    G = e2 => {
      let b3 = y(e2),
        K2 = D(e2);
      a2.done = Math.abs(b3) <= p, a2.current = a2.done ? g2 : K2;
    },
    R3,
    B2,
    F2 = e2 => {
      T2(a2.current) && (R3 = e2, B2 = V({
        from: a2.current,
        to: M3(a2.current),
        velocity: x2(D, e2, a2.current),
        damping: n,
        stiffness: u2,
        restDistance: p,
        restSpeed: m3
      }));
    };
  return F2(0), e2 => {
    let b3 = false;
    return !B2 && R3 === void 0 && (b3 = true, G(e2), F2(e2)), R3 !== void 0 && e2 > R3 ? (a2.hasReachedTarget = true, B2(e2 - R3)) : (a2.hasReachedTarget = false, !b3 && G(e2), a2);
  };
};
var q = 10;
var $ = 1e4;
function j(t2, o = u) {
  let r,
    s3 = q,
    n = t2(0),
    u2 = [o(n.current)];
  for (; !n.done && s3 < $;) n = t2(s3), u2.push(o(n.done ? n.target : n.current)), r === void 0 && n.hasReachedTarget && (r = s3), s3 += q;
  let l3 = s3 - q;
  return u2.length === 1 && u2.push(n.current), {
    keyframes: u2,
    duration: l3 / 1e3,
    overshootDuration: (r ?? l3) / 1e3
  };
}

// http-url:https://esm.sh/@motionone/types@10.17.1/es2022/types.mjs
var t = class {
  setAnimation(i2) {
    this.animation = i2, i2?.finished.then(() => this.clearAnimation()).catch(() => {});
  }
  clearAnimation() {
    this.animation = this.generator = void 0;
  }
};

// http-url:https://esm.sh/hey-listen@1.0.8/es2022/hey-listen.mjs
var e = function () {};

// http-url:https://esm.sh/tslib@2.8.1/es2022/tslib.mjs
function S3(e2, t2) {
  var r = {};
  for (var n in e2) Object.prototype.hasOwnProperty.call(e2, n) && t2.indexOf(n) < 0 && (r[n] = e2[n]);
  if (e2 != null && typeof Object.getOwnPropertySymbols == "function") for (var i2 = 0, n = Object.getOwnPropertySymbols(e2); i2 < n.length; i2++) t2.indexOf(n[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, n[i2]) && (r[n[i2]] = e2[n[i2]]);
  return r;
}

// http-url:https://esm.sh/@motionone/dom@10.18.0/es2022/dom.mjs
var ft = new WeakMap();
function j2(t2) {
  return ft.has(t2) || ft.set(t2, {
    transforms: [],
    values: new Map()
  }), ft.get(t2);
}
function Vt(t2, e2) {
  return t2.has(e2) || t2.set(e2, new t()), t2.get(e2);
}
var he = ["", "X", "Y", "Z"];
var ve = ["translate", "scale", "rotate", "skew"];
var z = {
  x: "translateX",
  y: "translateY",
  z: "translateZ"
};
var Wt = {
  syntax: "<angle>",
  initialValue: "0deg",
  toDefaultUnit: t2 => t2 + "deg"
};
var ye = {
  translate: {
    syntax: "<length-percentage>",
    initialValue: "0px",
    toDefaultUnit: t2 => t2 + "px"
  },
  rotate: Wt,
  scale: {
    syntax: "<number>",
    initialValue: 1,
    toDefaultUnit: u
  },
  skew: Wt
};
var L2 = new Map();
var H = t2 => `--motion-${t2}`;
var Y = ["x", "y", "z"];
ve.forEach(t2 => {
  he.forEach(e2 => {
    Y.push(t2 + e2), L2.set(H(t2 + e2), ye[t2]);
  });
});
var xe = (t2, e2) => Y.indexOf(t2) - Y.indexOf(e2);
var we = new Set(Y);
var $2 = t2 => we.has(t2);
var Mt = (t2, e2) => {
  z[e2] && (e2 = z[e2]);
  let {
    transforms: n
  } = j2(t2);
  h(n, e2), t2.style.transform = lt(n);
};
var lt = t2 => t2.sort(xe).reduce(Ee, "").trim();
var Ee = (t2, e2) => `${t2} ${e2}(var(${H(e2)}))`;
var R2 = t2 => t2.startsWith("--");
var Pt = new Set();
function Nt(t2) {
  if (!Pt.has(t2)) {
    Pt.add(t2);
    try {
      let {
        syntax: e2,
        initialValue: n
      } = L2.has(t2) ? L2.get(t2) : {};
      CSS.registerProperty({
        name: t2,
        inherits: false,
        syntax: e2,
        initialValue: n
      });
    } catch {}
  }
}
var mt = (t2, e2) => document.createElement("div").animate(t2, e2);
var It = {
  cssRegisterProperty: () => typeof CSS < "u" && Object.hasOwnProperty.call(CSS, "registerProperty"),
  waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
  partialKeyframes: () => {
    try {
      mt({
        opacity: [1]
      });
    } catch {
      return false;
    }
    return true;
  },
  finished: () => !!mt({
    opacity: [0, 1]
  }, {
    duration: 1e-3
  }).finished,
  linearEasing: () => {
    try {
      mt({
        opacity: 0
      }, {
        easing: "linear(0, 1)"
      });
    } catch {
      return false;
    }
    return true;
  }
};
var ut = {};
var V2 = {};
for (let t2 in It) V2[t2] = () => (ut[t2] === void 0 && (ut[t2] = It[t2]()), ut[t2]);
var Te = 0.015;
var Le = (t2, e2) => {
  let n = "",
    r = Math.round(e2 / Te);
  for (let o = 0; o < r; o++) n += t2(f(0, r - 1, o)) + ", ";
  return n.substring(0, n.length - 2);
};
var pt = (t2, e2) => I(t2) ? V2.linearEasing() ? `linear(${Le(t2, e2)})` : b.easing : A(t2) ? De(t2) : t2;
var De = ([t2, e2, n, r]) => `cubic-bezier(${t2}, ${e2}, ${n}, ${r})`;
function _t(t2, e2) {
  for (let n = 0; n < t2.length; n++) t2[n] === null && (t2[n] = n ? t2[n - 1] : e2());
  return t2;
}
var J = t2 => Array.isArray(t2) ? t2 : [t2];
function W(t2) {
  return z[t2] && (t2 = z[t2]), $2(t2) ? H(t2) : t2;
}
var M2 = {
  get: (t2, e2) => {
    e2 = W(e2);
    let n = R2(e2) ? t2.style.getPropertyValue(e2) : getComputedStyle(t2)[e2];
    if (!n && n !== 0) {
      let r = L2.get(e2);
      r && (n = r.initialValue);
    }
    return n;
  },
  set: (t2, e2, n) => {
    e2 = W(e2), R2(e2) ? t2.style.setProperty(e2, n) : t2.style[e2] = n;
  }
};
function Q(t2, e2 = true) {
  if (!(!t2 || t2.playState === "finished")) try {
    t2.stop ? t2.stop() : (e2 && t2.commitStyles(), t2.cancel());
  } catch {}
}
function tt(t2, e2) {
  var n;
  let r = e2?.toDefaultUnit || u,
    o = t2[t2.length - 1];
  if (v(o)) {
    let i2 = ((n = o.match(/(-?[\d.]+)([a-z%]*)/)) === null || n === void 0 ? void 0 : n[2]) || "";
    i2 && (r = s3 => s3 + i2);
  }
  return r;
}
function We() {
  return window.__MOTION_DEV_TOOLS_RECORD;
}
function B(t2, e2, n, r = {}, o) {
  let i2 = We(),
    s3 = r.record !== false && i2,
    l3,
    {
      duration: u2 = b.duration,
      delay: a2 = b.delay,
      endDelay: c = b.endDelay,
      repeat: d3 = b.repeat,
      easing: f3 = b.easing,
      persist: O2 = false,
      direction: S4,
      offset: m3,
      allowWebkitAcceleration: g2 = false,
      autoplay: x3 = true
    } = r,
    A2 = j2(t2),
    w3 = $2(e2),
    T2 = V2.waapi();
  w3 && Mt(t2, e2);
  let E2 = W(e2),
    b3 = Vt(A2.values, E2),
    p = L2.get(E2);
  return Q(b3.animation, !(F(f3) && b3.generator) && r.record !== false), () => {
    let v2 = () => {
        var y, C;
        return (C = (y = M2.get(t2, E2)) !== null && y !== void 0 ? y : p?.initialValue) !== null && C !== void 0 ? C : 0;
      },
      h4 = _t(J(n), v2),
      _ = tt(h4, p);
    if (F(f3)) {
      let y = f3.createAnimation(h4, e2 !== "opacity", v2, E2, b3);
      f3 = y.easing, h4 = y.keyframes || h4, u2 = y.duration || u2;
    }
    if (R2(E2) && (V2.cssRegisterProperty() ? Nt(E2) : T2 = false), w3 && !V2.linearEasing() && (I(f3) || a(f3) && f3.some(I)) && (T2 = false), T2) {
      p && (h4 = h4.map(D => s(D) ? p.toDefaultUnit(D) : D)), h4.length === 1 && (!V2.partialKeyframes() || s3) && h4.unshift(v2());
      let y = {
        delay: N.ms(a2),
        duration: N.ms(u2),
        endDelay: N.ms(c),
        easing: a(f3) ? void 0 : pt(f3, u2),
        direction: S4,
        iterations: d3 + 1,
        fill: "both"
      };
      l3 = t2.animate({
        [E2]: h4,
        offset: m3,
        easing: a(f3) ? f3.map(D => pt(D, u2)) : void 0
      }, y), l3.finished || (l3.finished = new Promise((D, X) => {
        l3.onfinish = D, l3.oncancel = X;
      }));
      let C = h4[h4.length - 1];
      l3.finished.then(() => {
        O2 || (M2.set(t2, E2, C), l3.cancel());
      }).catch(O), g2 || (l3.playbackRate = 1.000001);
    } else if (o && w3) h4 = h4.map(y => typeof y == "string" ? parseFloat(y) : y), h4.length === 1 && h4.unshift(parseFloat(v2())), l3 = new o(y => {
      M2.set(t2, E2, _ ? _(y) : y);
    }, h4, Object.assign(Object.assign({}, r), {
      duration: u2,
      easing: f3
    }));else {
      let y = h4[h4.length - 1];
      M2.set(t2, E2, p && s(y) ? p.toDefaultUnit(y) : y);
    }
    return s3 && i2(t2, e2, h4, {
      duration: u2,
      delay: a2,
      easing: f3,
      repeat: d3,
      offset: m3
    }, "motion-one"), b3.setAnimation(l3), l3 && !x3 && l3.pause(), l3;
  };
}
var U = (t2, e2) => t2[e2] ? Object.assign(Object.assign({}, t2), t2[e2]) : Object.assign({}, t2);
function P(t2, e2) {
  var n;
  return typeof t2 == "string" ? e2 ? ((n = e2[t2]) !== null && n !== void 0 || (e2[t2] = document.querySelectorAll(t2)), t2 = e2[t2]) : t2 = document.querySelectorAll(t2) : t2 instanceof Element && (t2 = [t2]), Array.from(t2 || []);
}
var Ne = t2 => t2();
var K = (t2, e2, n = b.duration) => new Proxy({
  animations: t2.map(Ne).filter(Boolean),
  duration: n,
  options: e2
}, _e);
var Ie = t2 => t2.animations[0];
var _e = {
  get: (t2, e2) => {
    let n = Ie(t2);
    switch (e2) {
      case "duration":
        return t2.duration;
      case "currentTime":
        return N.s(n?.[e2] || 0);
      case "playbackRate":
      case "playState":
        return n?.[e2];
      case "finished":
        return t2.finished || (t2.finished = Promise.all(t2.animations.map(Be)).catch(O)), t2.finished;
      case "stop":
        return () => {
          t2.animations.forEach(r => Q(r));
        };
      case "forEachNative":
        return r => {
          t2.animations.forEach(o => r(o, t2));
        };
      default:
        return typeof n?.[e2] > "u" ? void 0 : () => t2.animations.forEach(r => r[e2]());
    }
  },
  set: (t2, e2, n) => {
    switch (e2) {
      case "currentTime":
        n = N.ms(n);
      case "playbackRate":
        for (let r = 0; r < t2.animations.length; r++) t2.animations[r][e2] = n;
        return true;
    }
    return false;
  }
};
var Be = t2 => t2.finished;
function et(t2, e2, n) {
  return I(t2) ? t2(e2, n) : t2;
}
function ht(t2) {
  return function (n, r, o = {}) {
    n = P(n);
    let i2 = n.length;
    e(!!i2, "No valid element provided."), e(!!r, "No keyframes defined.");
    let s3 = [];
    for (let l3 = 0; l3 < i2; l3++) {
      let u2 = n[l3];
      for (let a2 in r) {
        let c = U(o, a2);
        c.delay = et(c.delay, l3, i2);
        let d3 = B(u2, a2, r[a2], c, t2);
        s3.push(d3);
      }
    }
    return K(s3, o, o.duration);
  };
}
var Ge = ht(T);
function Gt(t2) {
  return s(t2) && !isNaN(t2);
}
function xt(t2) {
  return v(t2) ? parseFloat(t2) : t2;
}
function nt(t2) {
  let e2 = new WeakMap();
  return (n = {}) => {
    let r = new Map(),
      o = (s3 = 0, l3 = 100, u2 = 0, a2 = false) => {
        let c = `${s3}-${l3}-${u2}-${a2}`;
        return r.has(c) || r.set(c, t2(Object.assign({
          from: s3,
          to: l3,
          velocity: u2
        }, n))), r.get(c);
      },
      i2 = (s3, l3) => (e2.has(s3) || e2.set(s3, j(s3, l3)), e2.get(s3));
    return {
      createAnimation: (s3, l3 = true, u2, a2, c) => {
        let d3,
          f3,
          O2,
          S4 = 0,
          m3 = u,
          g2 = s3.length;
        if (l3) {
          m3 = tt(s3, a2 ? L2.get(W(a2)) : void 0);
          let x3 = s3[g2 - 1];
          if (O2 = xt(x3), g2 > 1 && s3[0] !== null) f3 = xt(s3[0]);else {
            let A2 = c?.generator;
            if (A2) {
              let {
                  animation: w3,
                  generatorStartTime: T2
                } = c,
                E2 = w3?.startTime || T2 || 0,
                b3 = w3?.currentTime || performance.now() - E2,
                p = A2(b3).current;
              f3 = p, S4 = x2(v2 => A2(v2).current, b3, p);
            } else u2 && (f3 = xt(u2()));
          }
        }
        if (Gt(f3) && Gt(O2)) {
          let x3 = o(f3, O2, S4, a2?.includes("scale"));
          d3 = Object.assign(Object.assign({}, i2(x3, m3)), {
            easing: "linear"
          }), c && (c.generator = x3, c.generatorStartTime = performance.now());
        }
        return d3 || (d3 = {
          easing: "ease",
          duration: i2(o(0, 100)).overshootDuration
        }), d3;
      }
    };
  };
}
var hn = nt(V);
var yn = nt(L);
var wn = {
  any: 0,
  all: 1
};
function wt(t2, e2, {
  root: n,
  margin: r,
  amount: o = "any"
} = {}) {
  if (typeof IntersectionObserver > "u") return () => {};
  let i2 = P(t2),
    s3 = new WeakMap(),
    l3 = a2 => {
      a2.forEach(c => {
        let d3 = s3.get(c.target);
        if (c.isIntersecting !== !!d3) if (c.isIntersecting) {
          let f3 = e2(c);
          I(f3) ? s3.set(c.target, f3) : u2.unobserve(c.target);
        } else d3 && (d3(c), s3.delete(c.target));
      });
    },
    u2 = new IntersectionObserver(l3, {
      root: n,
      rootMargin: r,
      threshold: typeof o == "number" ? o : wn[o]
    });
  return i2.forEach(a2 => u2.observe(a2)), () => u2.disconnect();
}
var rt = new WeakMap();
var N2;
function En(t2, e2) {
  if (e2) {
    let {
      inlineSize: n,
      blockSize: r
    } = e2[0];
    return {
      width: n,
      height: r
    };
  } else return t2 instanceof SVGElement && "getBBox" in t2 ? t2.getBBox() : {
    width: t2.offsetWidth,
    height: t2.offsetHeight
  };
}
function Sn({
  target: t2,
  contentRect: e2,
  borderBoxSize: n
}) {
  var r;
  (r = rt.get(t2)) === null || r === void 0 || r.forEach(o => {
    o({
      target: t2,
      contentSize: e2,
      get size() {
        return En(t2, n);
      }
    });
  });
}
function bn(t2) {
  t2.forEach(Sn);
}
function On() {
  typeof ResizeObserver > "u" || (N2 = new ResizeObserver(bn));
}
function Kt(t2, e2) {
  N2 || On();
  let n = P(t2);
  return n.forEach(r => {
    let o = rt.get(r);
    o || (o = new Set(), rt.set(r, o)), o.add(e2), N2?.observe(r);
  }), () => {
    n.forEach(r => {
      let o = rt.get(r);
      o?.delete(e2), o?.size || N2?.unobserve(r);
    });
  };
}
var ot = new Set();
var q2;
function An() {
  q2 = () => {
    let t2 = {
        width: window.innerWidth,
        height: window.innerHeight
      },
      e2 = {
        target: window,
        size: t2,
        contentSize: t2
      };
    ot.forEach(n => n(e2));
  }, window.addEventListener("resize", q2);
}
function qt(t2) {
  return ot.add(t2), q2 || An(), () => {
    ot.delete(t2), !ot.size && q2 && (q2 = void 0);
  };
}
function Et(t2, e2) {
  return I(t2) ? qt(t2) : Kt(t2, e2);
}
var Cn = 50;
var kt = () => ({
  current: 0,
  offset: [],
  progress: 0,
  scrollLength: 0,
  targetOffset: 0,
  targetLength: 0,
  containerLength: 0,
  velocity: 0
});
var Xt = () => ({
  time: 0,
  x: kt(),
  y: kt()
});
var zn = {
  x: {
    length: "Width",
    position: "Left"
  },
  y: {
    length: "Height",
    position: "Top"
  }
};
function Zt(t2, e2, n, r) {
  let o = n[e2],
    {
      length: i2,
      position: s3
    } = zn[e2],
    l3 = o.current,
    u2 = n.time;
  o.current = t2[`scroll${s3}`], o.scrollLength = t2[`scroll${i2}`] - t2[`client${i2}`], o.offset.length = 0, o.offset[0] = 0, o.offset[1] = o.scrollLength, o.progress = f(0, o.scrollLength, o.current);
  let a2 = r - u2;
  o.velocity = a2 > Cn ? 0 : R(o.current - l3, a2);
}
function Yt(t2, e2, n) {
  Zt(t2, "x", e2, n), Zt(t2, "y", e2, n), e2.time = n;
}
function Jt(t2, e2) {
  let n = {
      x: 0,
      y: 0
    },
    r = t2;
  for (; r && r !== e2;) if (r instanceof HTMLElement) n.x += r.offsetLeft, n.y += r.offsetTop, r = r.offsetParent;else if (r instanceof SVGGraphicsElement && "getBBox" in r) {
    let {
      top: o,
      left: i2
    } = r.getBBox();
    for (n.x += i2, n.y += o; r && r.tagName !== "svg";) r = r.parentNode;
  }
  return n;
}
var St = {
  Enter: [[0, 1], [1, 1]],
  Exit: [[0, 0], [1, 0]],
  Any: [[1, 0], [0, 1]],
  All: [[0, 0], [1, 1]]
};
var it = {
  start: 0,
  center: 0.5,
  end: 1
};
function bt(t2, e2, n = 0) {
  let r = 0;
  if (it[t2] !== void 0 && (t2 = it[t2]), v(t2)) {
    let o = parseFloat(t2);
    t2.endsWith("px") ? r = o : t2.endsWith("%") ? t2 = o / 100 : t2.endsWith("vw") ? r = o / 100 * document.documentElement.clientWidth : t2.endsWith("vh") ? r = o / 100 * document.documentElement.clientHeight : t2 = o;
  }
  return s(t2) && (r = e2 * t2), n + r;
}
var Nn = [0, 0];
function Qt(t2, e2, n, r) {
  let o = Array.isArray(t2) ? t2 : Nn,
    i2 = 0,
    s3 = 0;
  return s(t2) ? o = [t2, t2] : v(t2) && (t2 = t2.trim(), t2.includes(" ") ? o = t2.split(" ") : o = [t2, it[t2] ? t2 : "0"]), i2 = bt(o[0], n, r), s3 = bt(o[1], e2), i2 - s3;
}
var Bn = {
  x: 0,
  y: 0
};
function te(t2, e2, n) {
  let {
      offset: r = St.All
    } = n,
    {
      target: o = t2,
      axis: i2 = "y"
    } = n,
    s3 = i2 === "y" ? "height" : "width",
    l3 = o !== t2 ? Jt(o, t2) : Bn,
    u2 = o === t2 ? {
      width: t2.scrollWidth,
      height: t2.scrollHeight
    } : {
      width: o.clientWidth,
      height: o.clientHeight
    },
    a2 = {
      width: t2.clientWidth,
      height: t2.clientHeight
    };
  e2[i2].offset.length = 0;
  let c = !e2[i2].interpolate,
    d3 = r.length;
  for (let f3 = 0; f3 < d3; f3++) {
    let O2 = Qt(r[f3], a2[s3], u2[s3], l3[i2]);
    !c && O2 !== e2[i2].interpolatorOffsets[f3] && (c = true), e2[i2].offset[f3] = O2;
  }
  c && (e2[i2].interpolate = S(d(d3), e2[i2].offset), e2[i2].interpolatorOffsets = [...e2[i2].offset]), e2[i2].progress = e2[i2].interpolate(e2[i2].current);
}
function $n(t2, e2 = t2, n) {
  if (n.x.targetOffset = 0, n.y.targetOffset = 0, e2 !== t2) {
    let r = e2;
    for (; r && r != t2;) n.x.targetOffset += r.offsetLeft, n.y.targetOffset += r.offsetTop, r = r.offsetParent;
  }
  n.x.targetLength = e2 === t2 ? e2.scrollWidth : e2.clientWidth, n.y.targetLength = e2 === t2 ? e2.scrollHeight : e2.clientHeight, n.x.containerLength = t2.clientWidth, n.y.containerLength = t2.clientHeight;
}
function ee2(t2, e2, n, r = {}) {
  let o = r.axis || "y";
  return {
    measure: () => $n(t2, r.target, n),
    update: i2 => {
      Yt(t2, n, i2), (r.offset || r.target) && te(t2, n, r);
    },
    notify: I(e2) ? () => e2(n) : Un(e2, n[o])
  };
}
function Un(t2, e2) {
  return t2.pause(), t2.forEachNative((n, {
    easing: r
  }) => {
    var o, i2;
    if (n.updateDuration) r || (n.easing = u), n.updateDuration(1);else {
      let s3 = {
        duration: 1e3
      };
      r || (s3.easing = "linear"), (i2 = (o = n.effect) === null || o === void 0 ? void 0 : o.updateTiming) === null || i2 === void 0 || i2.call(o, s3);
    }
  }), () => {
    t2.currentTime = e2.progress;
  };
}
var k2 = new WeakMap();
var ne = new WeakMap();
var Ot = new WeakMap();
var re = t2 => t2 === document.documentElement ? window : t2;
function Rn(t2, e2 = {}) {
  var {
      container: n = document.documentElement
    } = e2,
    r = S3(e2, ["container"]);
  let o = Ot.get(n);
  o || (o = new Set(), Ot.set(n, o));
  let i2 = Xt(),
    s3 = ee2(n, t2, i2, r);
  if (o.add(s3), !k2.has(n)) {
    let a2 = () => {
      let d3 = performance.now();
      for (let f3 of o) f3.measure();
      for (let f3 of o) f3.update(d3);
      for (let f3 of o) f3.notify();
    };
    k2.set(n, a2);
    let c = re(n);
    window.addEventListener("resize", a2, {
      passive: true
    }), n !== document.documentElement && ne.set(n, Et(n, a2)), c.addEventListener("scroll", a2, {
      passive: true
    });
  }
  let l3 = k2.get(n),
    u2 = requestAnimationFrame(l3);
  return () => {
    var a2;
    typeof t2 != "function" && t2.stop(), cancelAnimationFrame(u2);
    let c = Ot.get(n);
    if (!c || (c.delete(s3), c.size)) return;
    let d3 = k2.get(n);
    k2.delete(n), d3 && (re(n).removeEventListener("scroll", d3), (a2 = ne.get(n)) === null || a2 === void 0 || a2(), window.removeEventListener("resize", d3));
  };
}
function Z(t2, e2, n) {
  t2.dispatchEvent(new CustomEvent(e2, {
    detail: {
      originalEvent: n
    }
  }));
}
function Lt(t2, e2, n) {
  t2.dispatchEvent(new CustomEvent(e2, {
    detail: {
      originalEntry: n
    }
  }));
}
var ce = {
  isActive: t2 => !!t2.inView,
  subscribe: (t2, {
    enable: e2,
    disable: n
  }, {
    inViewOptions: r = {}
  }) => {
    let {
        once: o
      } = r,
      i2 = S3(r, ["once"]);
    return wt(t2, s3 => {
      if (e2(), Lt(t2, "viewenter", s3), !o) return l3 => {
        n(), Lt(t2, "viewleave", l3);
      };
    }, i2);
  }
};
var fe = (t2, e2, n) => r => {
  r.pointerType && r.pointerType !== "mouse" || (n(), Z(t2, e2, r));
};
var le = {
  isActive: t2 => !!t2.hover,
  subscribe: (t2, {
    enable: e2,
    disable: n
  }) => {
    let r = fe(t2, "hoverstart", e2),
      o = fe(t2, "hoverend", n);
    return t2.addEventListener("pointerenter", r), t2.addEventListener("pointerleave", o), () => {
      t2.removeEventListener("pointerenter", r), t2.removeEventListener("pointerleave", o);
    };
  }
};
var me = {
  isActive: t2 => !!t2.press,
  subscribe: (t2, {
    enable: e2,
    disable: n
  }) => {
    let r = i2 => {
        n(), Z(t2, "pressend", i2), window.removeEventListener("pointerup", r);
      },
      o = i2 => {
        e2(), Z(t2, "pressstart", i2), window.addEventListener("pointerup", r);
      };
    return t2.addEventListener("pointerdown", o), () => {
      t2.removeEventListener("pointerdown", o), window.removeEventListener("pointerup", r);
    };
  }
};
var at = {
  inView: ce,
  hover: le,
  press: me
};
var ue = ["initial", "animate", ...Object.keys(at), "exit"];

// http-url:https://framerusercontent.com/modules/UIrMjSS6ZX89L0CsT8k6/ZtFjxnixyznUo5AKQme5/Carousel.js
import { animate as animate2, motion, useMotionValue, useTransform, useReducedMotion } from "@proofly-framer/runtime";

// http-url:https://framerusercontent.com/modules/VTUDdizacRHpwbkOamr7/AykinQJbgwl92LvMGZwu/constants.js
import { ControlType } from "@proofly-framer/runtime";
var containerStyles = {
  position: "relative",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
var emptyStateStyle = {
  ...containerStyles,
  borderRadius: 6,
  background: "rgba(136, 85, 255, 0.3)",
  color: "#85F",
  border: "1px dashed #85F",
  flexDirection: "column"
};
var defaultEvents = {
  onClick: {
    type: ControlType.EventHandler
  },
  onMouseEnter: {
    type: ControlType.EventHandler
  },
  onMouseLeave: {
    type: ControlType.EventHandler
  }
};
var fontSizeOptions = {
  type: ControlType.Number,
  title: "Font Size",
  min: 2,
  max: 200,
  step: 1,
  displayStepper: true
};
var fontControls = {
  font: {
    type: ControlType.Boolean,
    title: "Font",
    defaultValue: false,
    disabledTitle: "Default",
    enabledTitle: "Custom"
  },
  fontFamily: {
    type: ControlType.String,
    title: "Family",
    placeholder: "Inter",
    hidden: ({
      font
    }) => !font
  },
  fontWeight: {
    type: ControlType.Enum,
    title: "Weight",
    options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    optionTitles: ["Thin", "Extra-light", "Light", "Regular", "Medium", "Semi-bold", "Bold", "Extra-bold", "Black"],
    hidden: ({
      font
    }) => !font
  }
};

// http-url:https://framerusercontent.com/modules/D4TWeLfcxT6Tysr2BlYg/iZjmqdxVx1EOiM3k1FaW/useOnNavigationTargetChange.js
import { useIsInCurrentNavigationTarget } from "@proofly-framer/runtime";
import { useEffect } from "react";

// http-url:https://framerusercontent.com/modules/ExNgrA7EJTKUPpH6vIlN/eiOrSJ2Ab5M9jPCvVwUz/useConstant.js
import { useRef } from "react";

// http-url:https://framerusercontent.com/modules/D2Lz5CmnNVPZFFiZXalt/QaCzPbriZBfXWZIIycFI/colorFromToken.js
import { Color } from "@proofly-framer/runtime";

// http-url:https://framerusercontent.com/modules/3mKFSGQqKHV82uOV1eBc/5fbRLvOpxZC0JOXugvwm/isMotionValue.js
import { MotionValue } from "@proofly-framer/runtime";

// http-url:https://framerusercontent.com/modules/xDiQsqBGXzmMsv7AlEVy/uhunpMiNsbXxzjlXsg1y/useUniqueClassName.js
import * as React from "react";

// http-url:https://framerusercontent.com/modules/ETACN5BJyFTSo0VVDJfu/NHRqowOiXkF9UwOzczF7/variantUtils.js
import { ControlType as ControlType2 } from "@proofly-framer/runtime";

// http-url:https://framerusercontent.com/modules/eMBrwoqQK7h6mEeGQUH8/GuplvPJVjmxpk9zqOTcb/isBrowser.js
import { useMemo } from "react";

// http-url:https://framerusercontent.com/modules/v9AWX2URmiYsHf7GbctE/XxKAZ9KlhWqf5x1JMyyF/useOnChange.js
import { useEffect as useEffect3 } from "react";

// http-url:https://framerusercontent.com/modules/kNDwabfjDEb3vUxkQlZS/fSIr3AOAYbGlfSPgXpYu/useAutoMotionValue.js
import { useCallback, useEffect as useEffect4, useRef as useRef2 } from "react";
import { motionValue, animate, RenderTarget } from "@proofly-framer/runtime";

// http-url:https://framerusercontent.com/modules/cuQH4dmpDnV8YK1mSgQX/KqRXqunFjE6ufhpc7ZRu/useFontControls.js
import { fontStore } from "@proofly-framer/runtime";
import { useEffect as useEffect5 } from "react";

// http-url:https://framerusercontent.com/modules/afBE9Yx1W6bY5q32qPxe/m3q7puE2tbo1S2C0s0CT/useRenderTarget.js
import { useMemo as useMemo2 } from "react";
import { RenderTarget as RenderTarget2 } from "@proofly-framer/runtime";

// http-url:https://framerusercontent.com/modules/zGkoP8tPDCkoBzMdt5uq/0zFSjxIYliHxrQQnryFX/useControlledState.js
import * as React2 from "react";

// http-url:https://framerusercontent.com/modules/5SM58HxZHxjjv7aLMOgQ/WXz9i6mVki0bBCrKdqB3/propUtils.js
import { useMemo as useMemo3 } from "react";
import { ControlType as ControlType3 } from "@proofly-framer/runtime";
var borderRadiusControl = {
  borderRadius: {
    title: "Radius",
    type: ControlType3.FusedNumber,
    toggleKey: "isMixedBorderRadius",
    toggleTitles: ["Radius", "Radius per corner"],
    valueKeys: ["topLeftRadius", "topRightRadius", "bottomRightRadius", "bottomLeftRadius"],
    valueLabels: ["TL", "TR", "BR", "BL"],
    min: 0
  }
};
function usePadding(props) {
  const {
    padding,
    paddingPerSide,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft
  } = props;
  const paddingValue = useMemo3(() => paddingPerSide ? `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px` : padding, [padding, paddingPerSide, paddingTop, paddingRight, paddingBottom, paddingLeft]);
  return paddingValue;
}
var paddingControl = {
  padding: {
    type: ControlType3.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
    title: "Padding"
  }
};

// http-url:https://framerusercontent.com/modules/UIrMjSS6ZX89L0CsT8k6/ZtFjxnixyznUo5AKQme5/Carousel.js
function calcMaskWidth([inset, width]) {
  return inset + (100 - inset) * (width / 100) * 0.5;
}
function useIsMouse() {
  const [isMouseDevice, setIsMouseDevice] = useState3(false);
  useLayoutEffect(() => {
    setIsMouseDevice(window.matchMedia("(pointer:fine)").matches);
  }, []);
  return isMouseDevice;
}
function checkLimit(progress, target, {
  edgeOpacity,
  moreItems,
  buttonRef
}, transition) {
  if (moreItems.current && progress === target) {
    moreItems.current = false;
    animate2(edgeOpacity, 1, transition);
    buttonRef.current.setAttribute("disabled", "");
  } else if (!moreItems.current && progress !== target) {
    moreItems.current = true;
    animate2(edgeOpacity, 0, transition);
    buttonRef.current.removeAttribute("disabled");
  }
}
function useGUI(initialMoreItems, initialAlpha) {
  const moreItems = useRef3(initialMoreItems);
  const edgeOpacity = useMotionValue(moreItems.current ? 0 : 1);
  const fadeOpacity = useTransform(edgeOpacity, [0, 1], [initialAlpha || 0, 1]);
  const buttonOpacity = useTransform(edgeOpacity, v2 => 1 - v2);
  const buttonRef = useRef3(null);
  const pointerEvents = useTransform(buttonOpacity, v2 => v2 > 0.2 ? "auto" : "none");
  const cursor = useTransform(pointerEvents, v2 => v2 === "auto" ? "pointer" : "default");
  const buttonStyle = {
    ...baseButtonStyles,
    opacity: buttonOpacity,
    pointerEvents,
    cursor
  };
  return {
    moreItems,
    fadeOpacity,
    edgeOpacity,
    buttonStyle,
    buttonRef
  };
}
function setAriaVisible({
  element
}) {
  element.setAttribute("aria-hidden", false);
}
function useScrollLimits(container, axis, scrollInfo, updateCurrentScroll, targetScroll, checkLimits, measureItems) {
  useEffect7(() => {
    if (!container.current) return;
    const updateScrollInfo = info => {
      scrollInfo.current = info[axis];
      if (info[axis].current === targetScroll.current) {
        targetScroll.current = void 0;
      }
      updateCurrentScroll(info[axis].current);
      checkLimits();
    };
    const stopScroll = Rn(updateScrollInfo, {
      container: container.current,
      axis
    });
    const stopResize = Et(container.current, () => {
      measureItems();
      checkLimits();
    });
    return () => {
      stopScroll();
      stopResize();
    };
  }, [checkLimits, measureItems]);
}
function Carousel({
  slots,
  gap,
  axis,
  align,
  sizingObject,
  fadeObject,
  arrowObject,
  snapObject,
  progressObject,
  ariaLabel,
  borderRadius,
  effectsObject,
  ...props
}) {
  const filteredSlots = slots.filter(Boolean);
  const numItems = Children.count(filteredSlots);
  const isCanvas = RenderTarget3.current() === RenderTarget3.canvas;
  const padding = usePadding(props);
  const axisLabel = axis ? "x" : "y";
  const {
    fadeContent,
    fadeWidth,
    fadeInset,
    fadeTransition,
    fadeAlpha
  } = fadeObject;
  const {
    snap,
    snapEdge,
    fluid
  } = snapObject;
  const {
    widthType,
    widthInset,
    widthColumns,
    heightType,
    heightInset,
    heightRows
  } = sizingObject;
  const {
    showScrollbar,
    showProgressDots,
    dotSize,
    dotsInset,
    dotsRadius,
    dotsPadding,
    dotsGap,
    dotsFill,
    dotsBackground,
    dotsActiveOpacity,
    dotsOpacity,
    dotsBlur
  } = progressObject;
  const {
    showMouseControls,
    arrowSize,
    arrowRadius,
    arrowFill,
    leftArrow,
    rightArrow,
    arrowPadding
  } = arrowObject;
  const scrollInfo = useRef3(void 0);
  const targetScroll = useRef3(void 0);
  const currentScroll = useMotionValue(0);
  const updateCurrentScroll = newScroll => {
    currentScroll.set(targetScroll.current !== void 0 ? targetScroll.current : newScroll);
  };
  const isMouseDevice = useIsMouse();
  const start = useGUI(false, fadeAlpha);
  const end = useGUI(true, fadeAlpha);
  const startMaskInset = useMotionValue(fadeInset * 0.5);
  const endMaskInset = useTransform(startMaskInset, v2 => 100 - v2);
  const baseWidth = useMotionValue(fadeWidth);
  const startMaskWidth = useTransform([startMaskInset, baseWidth], calcMaskWidth);
  const endMaskWidth = useTransform(startMaskWidth, v2 => 100 - v2);
  const direction = useMotionValue(axis ? "right" : "bottom");
  const mask = useTransform([direction, start.fadeOpacity, startMaskInset, startMaskWidth, end.fadeOpacity, endMaskInset, endMaskWidth], latest => {
    return `linear-gradient(to ${latest[0]}, rgb(0, 0, 0, ${latest[1]}) ${latest[2]}%, rgb(0, 0, 0, 1) ${latest[3]}%, rgba(0, 0, 0, 1) ${latest[6]}%, rgb(0, 0, 0, ${latest[4]}) ${latest[5]}%)`;
  });
  const carouselRef = useRef3(null);
  const [numPages, setNumPages] = useState3(isCanvas ? 4 : 1);
  const itemStyle = {
    scrollSnapAlign: snapEdge,
    flexShrink: 0
  };
  const childStyle = {};
  if (align === "stretch") {
    if (axis) {
      childStyle.height = "100%";
      itemStyle.height = "auto";
    } else {
      childStyle.width = "100%";
      itemStyle.width = "auto";
    }
  }
  if (!fluid) {
    itemStyle.scrollSnapStop = "always";
  }
  if (widthType === "stretch") {
    itemStyle.width = `calc(100% - ${widthInset || 0}px)`;
    childStyle.width = "100%";
  } else if (widthType === "columns") {
    itemStyle.width = `calc(${100 / widthColumns}% - ${gap}px + ${gap / widthColumns}px)`;
    childStyle.width = "100%";
  }
  if (heightType === "stretch") {
    itemStyle.height = `calc(100% - ${heightInset || 0}px)`;
    childStyle.height = "100%";
  } else if (heightType === "rows") {
    itemStyle.height = `calc(${100 / heightRows}% - ${gap}px + ${gap / heightRows}px)`;
    childStyle.height = "100%";
  }
  const scrollOverflow = isCanvas ? "hidden" : "auto";
  const containerStyle = {
    ...baseContainerStyle,
    padding
  };
  const carouselStyle = {
    ...baseCarouselStyle,
    gap,
    alignItems: align,
    flexDirection: axis ? "row" : "column",
    overflowX: axis ? scrollOverflow : "hidden",
    overflowY: axis ? "hidden" : scrollOverflow,
    scrollSnapType: snap ? `${axisLabel} mandatory` : void 0,
    WebkitOverflowScrolling: "touch",
    WebkitMaskImage: fadeContent ? mask : void 0,
    MozMaskImage: fadeContent ? mask : void 0,
    maskImage: fadeContent ? mask : void 0,
    borderRadius
  };
  const carouselA11y = {
    ["aria-roledescription"]: "carousel"
  };
  if (ariaLabel) {
    carouselA11y["aria-title"] = ariaLabel;
  }
  const itemA11y = {};
  if (align === "stretch") {
    itemA11y["aria-role"] = "group";
    itemA11y["aria-roledescription"] = "slide";
  }
  if (!isCanvas) {
    const itemSizes = useRef3([]);
    useScrollLimits(carouselRef, axisLabel, scrollInfo, updateCurrentScroll, targetScroll, useCallback2(() => {
      if (!scrollInfo.current) return;
      const {
        targetLength,
        containerLength,
        scrollLength
      } = scrollInfo.current;
      const current = currentScroll.get();
      if (!targetLength && !containerLength) return;
      if (targetLength > containerLength) {
        checkLimit(current, 0, start, fadeTransition);
        checkLimit(current, scrollLength, end, fadeTransition);
        for (let i2 = 0; i2 < itemSizes.current.length; i2++) {
          const {
            element,
            start: start2,
            end: end2
          } = itemSizes.current[i2];
          if (end2 < current || start2 > current + containerLength) {
            element.setAttribute("aria-hidden", true);
          } else {
            element.setAttribute("aria-hidden", false);
          }
        }
      } else {
        checkLimit(0, 0, start, fadeTransition);
        checkLimit(1, 1, end, fadeTransition);
        itemSizes.current.forEach(setAriaVisible);
      }
      let newNumPages = Math.ceil(targetLength / containerLength);
      if (!isNaN(newNumPages)) {
        if (newNumPages / numItems > 0.65) newNumPages = numItems;
        if (newNumPages !== numPages) setNumPages(newNumPages);
      }
    }, [numPages]), useCallback2(() => {
      if (!carouselRef.current) return;
      itemSizes.current = Array.from(carouselRef.current.children).map(element => {
        return axis ? {
          element,
          start: element.offsetLeft,
          end: element.offsetLeft + element.offsetWidth
        } : {
          element,
          start: element.offsetTop,
          end: element.offsetTop + element.offsetHeight
        };
      });
    }, []));
  }
  if (isCanvas) {
    useEffect7(() => {
      baseWidth.set(fadeWidth);
    }, [fadeWidth]);
    useEffect7(() => {
      startMaskInset.set(fadeInset * 0.5);
    }, [fadeInset]);
    useEffect7(() => {
      direction.set(axis ? "right" : "bottom");
    }, [axis]);
  }
  const findNextItem = (delta, target) => {
    if (!scrollInfo.current) return;
    const {
      current
    } = scrollInfo.current;
    const {
      children
    } = carouselRef.current;
    let scrollTarget;
    let i2 = delta === 1 ? 0 : children.length - 1;
    while (scrollTarget === void 0) {
      const item = children[i2];
      const start2 = axis ? item.offsetLeft : item.offsetTop;
      const length = axis ? item.offsetWidth : item.offsetHeight;
      const end2 = start2 + length;
      const threshold = 0.05;
      if (delta === 1) {
        const visibility = f(start2, end2, target);
        if (visibility < 1 - threshold) {
          scrollTarget = start2;
        } else if (i2 === children.length - 1) {
          scrollTarget = end2;
        }
      } else if (delta === -1) {
        const visibility = f(start2, end2, target);
        if (visibility > threshold) {
          scrollTarget = end2;
        } else if (i2 === 0) {
          scrollTarget = start2;
        }
      }
      i2 += delta;
    }
    return scrollTarget;
  };
  const isReducedMotion = useReducedMotion();
  const goto = scrollTo => {
    targetScroll.current = scrollTo;
    const options = axis ? {
      left: scrollTo
    } : {
      top: scrollTo
    };
    carouselRef.current.scrollTo({
      ...options,
      behavior: isReducedMotion ? "auto" : "smooth"
    });
  };
  const gotoPage = page => {
    if (!scrollInfo.current) return;
    const {
      scrollLength
    } = scrollInfo.current;
    goto(page * (scrollLength / (numPages - 1)));
  };
  const gotoDelta = delta => () => {
    if (!scrollInfo.current) return;
    const {
      containerLength,
      scrollLength
    } = scrollInfo.current;
    const current = currentScroll.get();
    const pageLength = scrollLength / numPages;
    const currentPage = x(0, numPages - 1, Math.floor(current / pageLength));
    gotoPage(currentPage + delta);
  };
  if (numItems === 0) {
    return <Placeholder />;
  }
  const dots = [];
  const dotsBlurStyle = {};
  if (numPages > 1 && showProgressDots && !showScrollbar) {
    for (let i2 = 0; i2 < numPages; i2++) {
      const isSelected = isCanvas && !i2 || false;
      dots.push(<Dot dotStyle={{
        ...dotStyle,
        width: dotSize,
        height: dotSize,
        backgroundColor: dotsFill
      }} buttonStyle={baseButtonStyles} isSelected={isSelected} selectedOpacity={dotsActiveOpacity} opacity={dotsOpacity} onClick={() => gotoPage(i2)} currentScroll={currentScroll} scrollInfo={scrollInfo} total={numPages} index={i2} gap={dotsGap} padding={dotsPadding} axis={axis} />);
    }
    if (dotsBlur) {
      dotsBlurStyle.backdropFilter = dotsBlurStyle.WebkitBackdropFilter = dotsBlurStyle.MozBackdropFilter = `blur(${dotsBlur}px)`;
    }
  }
  return <section style={containerStyle} {...carouselA11y}>{_jsx(motion.ul, {
      ref: carouselRef,
      style: carouselStyle,
      className: "framer--carousel",
      "data-show-scrollbar": showScrollbar,
      "aria-atomic": "false",
      "aria-live": "polite",
      onWheel: () => targetScroll.current = void 0,
      children: Children.map(filteredSlots, (child, index) => {
        var _child_props;
        return <li key={index} style={itemStyle} {...itemA11y} aria-label={`${index + 1} of ${numItems}`}>{cloneElement(child, {
            ...child.props,
            style: {
              ...((_child_props = child.props) === null || _child_props === void 0 ? void 0 : _child_props.style),
              ...childStyle
            }
          })}</li>;
      })
    })}{<fieldset style={{
      ...controlsStyles,
      padding: arrowPadding,
      display: "flex",
      flexDirection: axis ? "row" : "column"
    }} aria-label="Carousel pagination controls" className="framer--carousel-controls" data-show-mouse-controls={showMouseControls}>{_jsx(motion.button, {
        ref: start.buttonRef,
        type: "button",
        style: {
          ...start.buttonStyle,
          backgroundColor: arrowFill,
          width: arrowSize,
          height: arrowSize,
          borderRadius: arrowRadius,
          rotate: !axis ? 90 : 0,
          display: showMouseControls ? "block" : "none"
        },
        onClick: gotoDelta(-1),
        "aria-label": "Previous",
        whileTap: {
          scale: 0.9
        },
        transition: {
          duration: 0.05
        },
        children: <img alt="" width={arrowSize} height={arrowSize} src={leftArrow || "https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg"} />
      })}{_jsx(motion.button, {
        ref: end.buttonRef,
        type: "button",
        style: {
          ...end.buttonStyle,
          backgroundColor: arrowFill,
          width: arrowSize,
          height: arrowSize,
          borderRadius: arrowRadius,
          rotate: !axis ? 90 : 0,
          display: showMouseControls ? "block" : "none"
        },
        onClick: gotoDelta(1),
        "aria-label": "Next",
        whileTap: {
          scale: 0.9
        },
        transition: {
          duration: 0.05
        },
        children: <img alt="" width={arrowSize} height={arrowSize} src={rightArrow || "https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg"} />
      })}{dots.length > 1 ? <div style={{
        ...dotsContainerStyle,
        left: axis ? "50%" : dotsInset,
        top: !axis ? "50%" : "unset",
        transform: axis ? "translateX(-50%)" : "translateY(-50%)",
        flexDirection: axis ? "row" : "column",
        bottom: axis ? dotsInset : "unset",
        borderRadius: dotsRadius,
        backgroundColor: dotsBackground,
        ...dotsBlurStyle
      }}>{dots}</div> : null}</fieldset>}{<MouseStyles />}</section>;
}
Carousel.defaultProps = {
  gap: 10,
  padding: 10,
  progressObject: {
    showScrollbar: false,
    showProgressDots: false
  },
  sizingObject: {
    widthType: "auto",
    widthOffset: 0,
    widthColumns: 2,
    heightType: "auto",
    heightOffset: 0,
    heightRows: 2
  },
  borderRadius: 0
};
addPropertyControls(Carousel, {
  slots: {
    type: ControlType4.Array,
    title: "Children",
    control: {
      type: ControlType4.ComponentInstance
    }
  },
  axis: {
    type: ControlType4.Enum,
    title: "Direction",
    options: [true, false],
    optionIcons: ["direction-horizontal", "direction-vertical"],
    displaySegmentedControl: true
  },
  align: {
    type: ControlType4.Enum,
    title: "Align",
    options: ["flex-start", "center", "flex-end"],
    optionIcons: {
      axis: {
        true: ["align-top", "align-middle", "align-bottom"],
        false: ["align-left", "align-center", "align-right"]
      }
    },
    defaultValue: "center",
    displaySegmentedControl: true
  },
  gap: {
    type: ControlType4.Number,
    title: "Gap"
  },
  ...paddingControl,
  sizingObject: {
    type: ControlType4.Object,
    title: "Sizing",
    controls: {
      widthType: {
        type: ControlType4.Enum,
        title: "Width",
        options: ["auto", "stretch", "columns"],
        optionTitles: ["Auto", "Stretch", "Columns"],
        defaultValue: "auto"
      },
      widthInset: {
        type: ControlType4.Number,
        title: "Inset",
        min: 0,
        max: 500,
        defaultValue: 0,
        hidden: props => props.widthType !== "stretch"
      },
      widthColumns: {
        type: ControlType4.Number,
        title: "Columns",
        min: 1,
        max: 10,
        defaultValue: 2,
        displayStepper: true,
        hidden: props => props.widthType !== "columns"
      },
      heightType: {
        type: ControlType4.Enum,
        title: "Height",
        options: ["auto", "stretch", "rows"],
        optionTitles: ["Auto", "Stretch", "Rows"],
        defaultValue: "auto"
      },
      heightInset: {
        type: ControlType4.Number,
        title: "Inset",
        min: 0,
        max: 500,
        defaultValue: 0,
        hidden: props => props.heightType !== "stretch"
      },
      heightRows: {
        type: ControlType4.Number,
        title: "Rows",
        min: 1,
        max: 10,
        defaultValue: 2,
        displayStepper: true,
        hidden: props => props.heightType !== "rows"
      }
    }
  },
  snapObject: {
    type: ControlType4.Object,
    title: "Snapping",
    controls: {
      snap: {
        type: ControlType4.Boolean,
        title: "Enable"
      },
      snapEdge: {
        type: ControlType4.Enum,
        title: "Edge",
        options: ["start", "center", "end"],
        optionTitles: ["Left", "Center", "Right"],
        defaultValue: "center",
        hidden: props => !props.snap
      },
      fluid: {
        type: ControlType4.Boolean,
        title: "Fluid",
        defaultValue: false,
        hidden: props => !props.snap
      }
    }
  },
  fadeObject: {
    type: ControlType4.Object,
    title: "Fading",
    controls: {
      fadeContent: {
        type: ControlType4.Boolean,
        title: "Enable",
        defaultValue: false
      },
      fadeWidth: {
        type: ControlType4.Number,
        title: "Width",
        defaultValue: 25,
        min: 0,
        max: 100,
        unit: "%",
        hidden: props => !props.fadeContent
      },
      fadeInset: {
        type: ControlType4.Number,
        title: "Inset",
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: "%",
        hidden: props => !props.fadeContent
      },
      fadeAlpha: {
        type: ControlType4.Number,
        title: "Opacity",
        hidden: props => !props.fadeContent,
        min: 0,
        max: 1,
        step: 0.05,
        defaultValue: 0
      },
      fadeTransition: {
        type: ControlType4.Transition,
        title: "Transition",
        hidden: props => !props.fadeContent
      }
    }
  },
  progressObject: {
    type: ControlType4.Object,
    title: "Progress",
    controls: {
      showScrollbar: {
        type: ControlType4.Boolean,
        title: "Scroll Bar",
        defaultValue: false
      },
      showProgressDots: {
        type: ControlType4.Boolean,
        title: "Dots",
        defaultValue: false,
        hidden: props => props.showScrollbar
      },
      dotSize: {
        type: ControlType4.Number,
        title: "Size",
        min: 1,
        max: 100,
        defaultValue: 10,
        displayStepper: true,
        hidden: props => !props.showProgressDots || props.showScrollbar
      },
      dotsInset: {
        type: ControlType4.Number,
        title: "Inset",
        min: 0,
        max: 100,
        defaultValue: 10,
        displayStepper: true,
        hidden: props => !props.showProgressDots || props.showScrollbar
      },
      dotsGap: {
        type: ControlType4.Number,
        title: "Gap",
        min: 0,
        max: 100,
        defaultValue: 10,
        displayStepper: true,
        hidden: props => !props.showProgressDots || props.showScrollbar
      },
      dotsPadding: {
        type: ControlType4.Number,
        title: "Padding",
        min: 0,
        max: 100,
        defaultValue: 10,
        displayStepper: true,
        hidden: props => !props.showProgressDots || props.showScrollbar
      },
      dotsFill: {
        type: ControlType4.Color,
        title: "Fill",
        defaultValue: "#fff",
        hidden: props => !props.showProgressDots || props.showScrollbar
      },
      dotsBackground: {
        type: ControlType4.Color,
        title: "Backdrop",
        defaultValue: "rgba(0,0,0,0.2)",
        hidden: props => !props.showProgressDots || props.showScrollbar
      },
      dotsRadius: {
        type: ControlType4.Number,
        title: "Radius",
        min: 0,
        max: 200,
        defaultValue: 50,
        hidden: props => !props.showProgressDots || props.showScrollbar
      },
      dotsOpacity: {
        type: ControlType4.Number,
        title: "Opacity",
        min: 0,
        max: 1,
        defaultValue: 0.5,
        step: 0.1,
        displayStepper: true,
        hidden: props => !props.showProgressDots || props.showScrollbar
      },
      dotsActiveOpacity: {
        type: ControlType4.Number,
        title: "Current",
        min: 0,
        max: 1,
        defaultValue: 1,
        step: 0.1,
        displayStepper: true,
        hidden: props => !props.showProgressDots || props.showScrollbar
      },
      dotsBlur: {
        type: ControlType4.Number,
        title: "Blur",
        min: 0,
        max: 50,
        defaultValue: 4,
        step: 1,
        hidden: props => !props.showProgressDots || props.showScrollbar
      }
    }
  },
  arrowObject: {
    type: ControlType4.Object,
    title: "Arrows",
    controls: {
      showMouseControls: {
        type: ControlType4.Boolean,
        title: "Show",
        defaultValue: true
      },
      arrowFill: {
        type: ControlType4.Color,
        title: "Fill",
        defaultValue: "rgba(0,0,0,0.2)",
        hidden: props => !props.showMouseControls
      },
      leftArrow: {
        type: ControlType4.Image,
        title: "Previous",
        hidden: props => !props.showMouseControls
      },
      rightArrow: {
        type: ControlType4.Image,
        title: "Next",
        hidden: props => !props.showMouseControls
      },
      arrowSize: {
        type: ControlType4.Number,
        title: "Size",
        min: 0,
        max: 200,
        displayStepper: true,
        defaultValue: 40,
        hidden: props => !props.showMouseControls
      },
      arrowRadius: {
        type: ControlType4.Number,
        title: "Radius",
        min: 0,
        max: 500,
        defaultValue: 40,
        hidden: props => !props.showMouseControls
      },
      arrowPadding: {
        type: ControlType4.Number,
        title: "Inset",
        min: 0,
        max: 100,
        defaultValue: 20,
        displayStepper: true,
        hidden: props => !props.showMouseControls
      }
    }
  },
  ariaLabel: {
    type: ControlType4.String,
    title: "Aria Label",
    placeholder: "Movies..."
  },
  borderRadius: {
    type: ControlType4.Number,
    title: "Radius",
    min: 0,
    max: 500,
    displayStepper: true,
    defaultValue: 0
  }
});
function Dot({
  currentScroll,
  scrollInfo,
  isSelected,
  selectedOpacity,
  opacity: unselectedOpacity,
  total,
  index,
  dotStyle: dotStyle2,
  buttonStyle,
  gap,
  padding,
  axis,
  ...props
}) {
  const opacity = useTransform(currentScroll, v2 => {
    var _scrollInfo_current, _scrollInfo_current1;
    if (!((_scrollInfo_current = scrollInfo.current) === null || _scrollInfo_current === void 0 ? void 0 : _scrollInfo_current.scrollLength)) {
      return index === 0 ? selectedOpacity : unselectedOpacity;
    }
    const pageLength = ((_scrollInfo_current1 = scrollInfo.current) === null || _scrollInfo_current1 === void 0 ? void 0 : _scrollInfo_current1.scrollLength) / total;
    const minScroll = pageLength * index;
    const maxScroll = minScroll + pageLength;
    const isSelected2 = v2 >= minScroll && (index < total - 1 ? v2 < maxScroll : index === total - 1);
    return isSelected2 ? selectedOpacity : unselectedOpacity;
  });
  const inlinePadding = gap / 2;
  let top = !axis && index > 0 ? inlinePadding : padding;
  let bottom = !axis && index !== total - 1 ? inlinePadding : padding;
  let right = axis && index !== total - 1 ? inlinePadding : padding;
  let left = axis && index > 0 ? inlinePadding : padding;
  return <button aria-label={`Scroll to page ${index + 1}`} type="button" {...props} style={{
    ...buttonStyle,
    padding: `${top}px ${right}px ${bottom}px ${left}px`
  }}>{_jsx(motion.div, {
      style: {
        ...dotStyle2,
        opacity
      }
    })}</button>;
}
function Placeholder() {
  return <section style={placeholderStyles}>{<div style={emojiStyles}>✨</div>}{<p style={titleStyles}>Connect to Content</p>}{<p style={subtitleStyles}>Add layers or components to swipe between.</p>}</section>;
}
function MouseStyles() {
  return <div dangerouslySetInnerHTML={{
    __html: `<style>@media (pointer: fine) {
                .framer--carousel[data-show-scrollbar="false"]::-webkit-scrollbar {
                    display: none;
                    -webkit-appearance: none;
                    width: 0;
                    height: 0;
                }

                .framer--carousel[data-show-scrollbar="false"]::-webkit-scrollbar-thumb {
                    display: none;
                }

                .framer--carousel[data-show-scrollbar="false"] {
                    scrollbar-width: none;
                    scrollbar-height: none;
                }
            }</style>`
  }} />;
}
var placeholderStyles = {
  display: "flex",
  width: "100%",
  height: "100%",
  placeContent: "center",
  placeItems: "center",
  flexDirection: "column",
  color: "#96F",
  background: "rgba(136, 85, 255, 0.1)",
  fontSize: 11,
  overflow: "hidden",
  padding: "20px 20px 30px 20px"
};
var emojiStyles = {
  fontSize: 32,
  marginBottom: 10
};
var titleStyles = {
  margin: 0,
  marginBottom: 10,
  fontWeight: 600,
  textAlign: "center"
};
var subtitleStyles = {
  margin: 0,
  opacity: 0.7,
  maxWidth: 130,
  lineHeight: 1.5,
  textAlign: "center"
};
var baseContainerStyle = {
  display: "flex",
  overflow: "hidden",
  width: "100%",
  height: "100%",
  position: "relative"
};
var baseCarouselStyle = {
  padding: 0,
  margin: 0,
  listStyle: "none",
  position: "relative",
  display: "flex",
  flex: "1 1 100%",
  width: "100%",
  height: "100%"
};
var baseButtonStyles = {
  border: "none",
  display: "flex",
  placeContent: "center",
  placeItems: "center",
  overflow: "hidden",
  background: "transparent",
  cursor: "pointer",
  margin: 0,
  padding: 0
};
var controlsStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  pointerEvents: "none",
  border: 0,
  padding: 0,
  margin: 0
};
var dotsContainerStyle = {
  display: "flex",
  placeContent: "center",
  placeItems: "center",
  overflow: "hidden",
  position: "absolute",
  pointerEvents: "auto"
};
var dotStyle = {
  borderRadius: "50%",
  background: "white",
  cursor: "pointer",
  border: "none",
  placeContent: "center",
  placeItems: "center",
  padding: 0
};

// http-url:https://framerusercontent.com/modules/qy8eVo5TXcYP2TWH72Db/lnFwfHBmEXS5R0BdeKYE/ferGDeq75.js
import { fontStore as fontStore2 } from "@proofly-framer/runtime";
fontStore2.loadFonts(["CUSTOM;Haffer Regular", "CUSTOM;Haffer Bold", "CUSTOM;Haffer Bold Italic", "CUSTOM;Haffer Regular Italic"]);
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

// http-url:https://framerusercontent.com/modules/zg2eX91MMKVjR7Bs5ras/JqLhicMJ1tTM5wW56DJq/fOTtXmCE4.js
import { fontStore as fontStore3 } from "@proofly-framer/runtime";
fontStore3.loadFonts(["CUSTOM;Haffer Bold", "CUSTOM;Haffer Bold", "CUSTOM;Haffer Bold Italic", "CUSTOM;Haffer Regular Italic"]);
var fonts2 = [{
  explicitInter: true,
  fonts: [{
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
var css2 = ['.framer-cVlFz .framer-styles-preset-rp61ro:not(.rich-text-wrapper), .framer-cVlFz .framer-styles-preset-rp61ro.rich-text-wrapper h2 { --framer-font-family: "Haffer Bold", sans-serif; --framer-font-family-bold: "Haffer Bold", sans-serif; --framer-font-family-bold-italic: "Haffer Bold Italic", sans-serif; --framer-font-family-italic: "Haffer Regular Italic", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 36px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 790; --framer-font-weight-bold: 790; --framer-font-weight-bold-italic: 790; --framer-font-weight-italic: 430; --framer-letter-spacing: 0.01em; --framer-line-height: 100%; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; }', '@media (max-width: 1199px) and (min-width: 724px) { .framer-cVlFz .framer-styles-preset-rp61ro:not(.rich-text-wrapper), .framer-cVlFz .framer-styles-preset-rp61ro.rich-text-wrapper h2 { --framer-font-family: "Haffer Bold", sans-serif; --framer-font-family-bold: "Haffer Bold", sans-serif; --framer-font-family-bold-italic: "Haffer Bold Italic", sans-serif; --framer-font-family-italic: "Haffer Regular Italic", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 32px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 790; --framer-font-weight-bold: 790; --framer-font-weight-bold-italic: 790; --framer-font-weight-italic: 430; --framer-letter-spacing: 0.01em; --framer-line-height: 100%; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }', '@media (max-width: 723px) and (min-width: 0px) { .framer-cVlFz .framer-styles-preset-rp61ro:not(.rich-text-wrapper), .framer-cVlFz .framer-styles-preset-rp61ro.rich-text-wrapper h2 { --framer-font-family: "Haffer Bold", sans-serif; --framer-font-family-bold: "Haffer Bold", sans-serif; --framer-font-family-bold-italic: "Haffer Bold Italic", sans-serif; --framer-font-family-italic: "Haffer Regular Italic", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 790; --framer-font-weight-bold: 790; --framer-font-weight-bold-italic: 790; --framer-font-weight-italic: 430; --framer-letter-spacing: 0.01em; --framer-line-height: 100%; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }'];
var className2 = "framer-cVlFz";

// http-url:https://framerusercontent.com/modules/5b0cRZbgNRw1dCNVnxhv/mDSpobAAY3IZwQ4LzCUn/z4Urx0kPV.js
import { fontStore as fontStore4 } from "@proofly-framer/runtime";
import { jsx as _ctxJsx } from "react/jsx-runtime";
import { ContextProviders, useVariant } from "@proofly-framer/runtime";
fontStore4.loadFonts(["CUSTOM;Haffer Regular", "CUSTOMV2;Haffer Bold", "CUSTOMV2;Haffer Bold Italic", "CUSTOMV2;Haffer Regular Italic"]);
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

// http-url:https://framerusercontent.com/modules/mj5yMhmzFTKX0CtL0dUA/GBMC7yCPfIJ6Sxzij1db/oKd_eXMbQ.js
var CarouselFonts = getFonts(Carousel);
var cycleOrder = ["svAJL9BkB", "hvsCbeL5x", "bCDJCaRQJ"];
var serializationHash = "framer-zt1Ec";
var variantClassNames = {
  bCDJCaRQJ: "framer-v-tdv2f0",
  hvsCbeL5x: "framer-v-16xqaza",
  svAJL9BkB: "framer-v-174240v"
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
var humanReadableVariantMap = {
  Desktop: "svAJL9BkB",
  Laptop: "hvsCbeL5x",
  Tablet: "bCDJCaRQJ"
};
var Variants = motion2.create(React3.Fragment);
var getProps = ({
  height,
  id,
  width,
  ...props
}) => {
  return {
    ...props,
    variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "svAJL9BkB"
  };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = React3.forwardRef(function (props, ref) {
  const fallbackRef = useRef4(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React3.useId();
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
    defaultVariant: "svAJL9BkB",
    ref: refBinding,
    variant,
    variantClassNames
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [className2, className3, className];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return <LayoutGroup id={layoutId ?? defaultLayoutId}>{<Variants animate={variants} initial={false}>{<Transition value={transition1}>{_jsxs2(motion2.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx(scopingClassNames, "framer-174240v", className4, classNames),
          "data-framer-name": "Desktop",
          layoutDependency,
          layoutId: "svAJL9BkB",
          ref: refBinding,
          style: {
            ...style
          },
          ...addPropertyOverrides({
            bCDJCaRQJ: {
              "data-framer-name": "Tablet"
            },
            hvsCbeL5x: {
              "data-framer-name": "Laptop"
            }
          }, baseVariant, gestureVariant),
          children: [_jsx2(motion2.div, {
            className: "framer-8g222",
            layoutDependency,
            layoutId: "oMUG6945R",
            children: <RichText __fromCanvasComponent className="framer-1jlhplk" data-framer-name="h" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="OE9IKZUC0" style={{
              "--extracted-1of0zx5": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))"
            }} verticalAlignment="top" withExternalLayout>{<React3.Fragment>{_jsx2(motion2.h2, {
                  className: "framer-styles-preset-rp61ro",
                  "data-styles-preset": "fOTtXmCE4",
                  style: {
                    "--framer-text-alignment": "center",
                    "--framer-text-color": "var(--extracted-1of0zx5, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                  },
                  children: "What our members say"
                })}</React3.Fragment>}</RichText>
          }), <ComponentViewportProvider>{<SmartComponentScopedContainer className="framer-10z4ovr-container" isAuthoredByUser isModuleExternal layoutDependency={layoutDependency} layoutId="TOFue8Znu-container" nodeId="TOFue8Znu" rendersWithMotion scopeId="oKd_eXMbQ">{<Carousel align="center" ariaLabel="" arrowObject={{
                arrowFill: "var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248))",
                arrowPadding: 20,
                arrowRadius: 40,
                arrowSize: 40,
                leftArrow: "https://framerusercontent.com/images/SMHuSZLYpFcPh8kr2kcPDAqoEnc.svg?width=42&height=42",
                rightArrow: "https://framerusercontent.com/images/q4cPPE5ZjhdTDB2iAoolHSLsmkI.svg?width=42&height=42",
                showMouseControls: true
              }} axis borderRadius={0} fadeObject={{
                fadeAlpha: 0,
                fadeContent: true,
                fadeInset: 0,
                fadeTransition: {
                  damping: 60,
                  delay: 0,
                  mass: 1,
                  stiffness: 500,
                  type: "spring"
                },
                fadeWidth: 25
              }} gap={32} height="100%" id="TOFue8Znu" layoutId="TOFue8Znu" padding={0} paddingBottom={0} paddingLeft={0} paddingPerSide={false} paddingRight={0} paddingTop={0} progressObject={{
                dotsActiveOpacity: 1,
                dotsBackground: "rgba(0, 0, 0, 0.2)",
                dotsBlur: 4,
                dotsFill: "rgb(255, 255, 255)",
                dotsGap: 10,
                dotsInset: 10,
                dotSize: 10,
                dotsOpacity: 0.5,
                dotsPadding: 10,
                dotsRadius: 50,
                showProgressDots: true,
                showScrollbar: true
              }} sizingObject={{
                heightInset: 0,
                heightRows: 2,
                heightType: "auto",
                widthColumns: 2,
                widthInset: 200,
                widthType: "stretch"
              }} slots={[_jsx2(motion2.div, {
                className: "framer-2egxvm",
                "data-framer-name": "dust",
                layoutDependency,
                layoutId: "nug4KDI77",
                style: {
                  backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))",
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8
                },
                children: _jsx2(motion2.div, {
                  className: "framer-lq47tz",
                  "data-framer-name": "Container",
                  layoutDependency,
                  layoutId: "C2Y4yBUub",
                  children: _jsxs2(motion2.div, {
                    className: "framer-2eekim",
                    "data-framer-name": "content-txt",
                    layoutDependency,
                    layoutId: "OxbAEdQkc",
                    children: [_jsx2(motion2.div, {
                      className: "framer-16fveja",
                      "data-framer-name": "Logo wrap",
                      layoutDependency,
                      layoutId: "z5jtyjMV3",
                      children: _jsx2(motion2.div, {
                        className: "framer-nyevkt",
                        "data-framer-name": "dust",
                        layoutDependency,
                        layoutId: "jOO7b8y2u",
                        children: <SVG className="framer-n2kx7l" data-framer-name="Dust" layout="position" layoutDependency={layoutDependency} layoutId="Yr1jbQd38" opacity={1} svg={__svg_1} svgContentId={9392016815} withExternalLayout />
                      })
                    }), _jsx2(motion2.div, {
                      className: "framer-v4dh5a",
                      "data-framer-name": "Testimonial",
                      layoutDependency,
                      layoutId: "PhYOiQrn3",
                      children: <RichText __fromCanvasComponent className="framer-zfmowk" data-framer-name="Supporting text" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="jpYbd03eL" style={{
                        "--extracted-1eung3n": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                        "--framer-paragraph-spacing": "18px"
                      }} verticalAlignment="top" withExternalLayout>{<React3.Fragment>{_jsx2(motion2.h4, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                              "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                              "--framer-font-size": "24px",
                              "--framer-line-height": "100%",
                              "--framer-text-color": "var(--extracted-1eung3n, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                            },
                            children: "Bloom is leading the pack by building an amazing ecosystem that will allow us to achieve our goals, both near-term and at scale."
                          })}</React3.Fragment>}</RichText>
                    }), _jsx2(motion2.div, {
                      className: "framer-1q89gwf",
                      "data-framer-name": "author",
                      layoutDependency,
                      layoutId: "eiAqOJdpq",
                      children: _jsxs2(motion2.div, {
                        className: "framer-16srfwt",
                        "data-framer-name": "author",
                        layoutDependency,
                        layoutId: "SccRvD1CF",
                        children: [<Image background={{
                          alt: "",
                          fit: "fill",
                          pixelHeight: 168,
                          pixelWidth: 299,
                          sizes: "60px",
                          src: "https://framerusercontent.com/images/AIpD75SpsDO2jAOb6CqneQYZkVU.jpeg?width=299&height=168"
                        }} className="framer-1jlfhfr" data-framer-name="Persons" layoutDependency={layoutDependency} layoutId="qJ3yzgYs3" style={{
                          borderBottomLeftRadius: 100,
                          borderBottomRightRadius: 100,
                          borderTopLeftRadius: 100,
                          borderTopRightRadius: 100
                        }} />, _jsxs2(motion2.div, {
                          className: "framer-8i6piw",
                          "data-framer-name": "name",
                          layoutDependency,
                          layoutId: "DcpZasM3u",
                          children: [<RichText __fromCanvasComponent className="framer-1gcod39" data-framer-name="Heading5" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="V6m6oY4rR" style={{
                            "--extracted-1lwpl3i": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                            "--framer-paragraph-spacing": "0px"
                          }} verticalAlignment="top" withExternalLayout>{<React3.Fragment>{_jsx2(motion2.h5, {
                                className: "framer-styles-preset-1e98430",
                                "data-styles-preset": "z4Urx0kPV",
                                style: {
                                  "--framer-text-color": "var(--extracted-1lwpl3i, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                                },
                                children: "Colin Godby"
                              })}</React3.Fragment>}</RichText>, <RichText __fromCanvasComponent className="framer-bcq3ze" data-framer-name="Subtitle2" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="ke3jExqcE" style={{
                            "--extracted-r6o4lv": "var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143))",
                            "--framer-paragraph-spacing": "0px"
                          }} verticalAlignment="top" withExternalLayout>{<React3.Fragment>{_jsx2(motion2.p, {
                                className: "framer-styles-preset-k8yxrn",
                                "data-styles-preset": "ferGDeq75",
                                style: {
                                  "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)))"
                                },
                                children: "CEO and Founder"
                              })}</React3.Fragment>}</RichText>]
                        })]
                      })
                    })]
                  })
                })
              }), _jsx2(motion2.div, {
                className: "framer-kqr7fu",
                "data-framer-name": "moonbikes",
                layoutDependency,
                layoutId: "POPzJYG6j",
                style: {
                  backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))",
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8
                },
                children: _jsx2(motion2.div, {
                  className: "framer-v8eiek",
                  "data-framer-name": "Container",
                  layoutDependency,
                  layoutId: "EHdk8aKjw",
                  children: _jsxs2(motion2.div, {
                    className: "framer-1wn3uz9",
                    "data-framer-name": "content-txt",
                    layoutDependency,
                    layoutId: "XOisZ5SDc",
                    children: [_jsx2(motion2.div, {
                      className: "framer-hkq218",
                      "data-framer-name": "Logo wrap",
                      layoutDependency,
                      layoutId: "jKCWgsR3i",
                      children: <SVG className="framer-130e29" data-framer-name="MOONBIKES" layout="position" layoutDependency={layoutDependency} layoutId="Pei8F0wA6" opacity={1} svg={__svg_2} svgContentId={9696308266} withExternalLayout />
                    }), _jsx2(motion2.div, {
                      className: "framer-mhxsoj",
                      "data-framer-name": "Testimonial",
                      layoutDependency,
                      layoutId: "b3d_DjLBc",
                      children: <RichText __fromCanvasComponent className="framer-cj2iii" data-framer-name="Supporting text" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="f4W2RKC5_" style={{
                        "--extracted-1eung3n": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                        "--framer-paragraph-spacing": "18px"
                      }} verticalAlignment="top" withExternalLayout>{<React3.Fragment>{_jsx2(motion2.h4, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                              "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                              "--framer-font-size": "24px",
                              "--framer-line-height": "110%",
                              "--framer-text-color": "var(--extracted-1eung3n, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                            },
                            children: "This partnership represents an important step for Moonbikes\u2019 next chapter. By leveraging Bloom\u2019s platform we are confident in our ability to accelerate growth in the U.S., streamline operations, and enhance our customer experience. We are excited to continue to deliver sustainable, all-electric, winter snow sports offerings in North America while expanding our innovation in the mobility space"
                          })}</React3.Fragment>}</RichText>
                    }), _jsx2(motion2.div, {
                      className: "framer-3xhfeo",
                      "data-framer-name": "author",
                      layoutDependency,
                      layoutId: "BLz6zmW3R",
                      children: _jsxs2(motion2.div, {
                        className: "framer-19pj1fz",
                        "data-framer-name": "author",
                        layoutDependency,
                        layoutId: "KjemY0gi9",
                        children: [<Image background={{
                          alt: "",
                          fit: "fill",
                          pixelHeight: 384,
                          pixelWidth: 565,
                          sizes: "60px",
                          src: "https://framerusercontent.com/images/qMiAR0JeIGm8An5u8WpsDdrclg0.png?width=565&height=384",
                          srcSet: "https://framerusercontent.com/images/qMiAR0JeIGm8An5u8WpsDdrclg0.png?scale-down-to=512&width=565&height=384 512w,https://framerusercontent.com/images/qMiAR0JeIGm8An5u8WpsDdrclg0.png?width=565&height=384 565w"
                        }} className="framer-16fuw30" data-framer-name="Persons" layoutDependency={layoutDependency} layoutId="X2d8ArLea" style={{
                          borderBottomLeftRadius: 100,
                          borderBottomRightRadius: 100,
                          borderTopLeftRadius: 100,
                          borderTopRightRadius: 100
                        }} />, _jsxs2(motion2.div, {
                          className: "framer-dkr9oh",
                          "data-framer-name": "name",
                          layoutDependency,
                          layoutId: "dkzS_AjMt",
                          children: [<RichText __fromCanvasComponent className="framer-1e8opt4" data-framer-name="Heading5" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="ujfUuiaFq" style={{
                            "--extracted-1lwpl3i": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                            "--framer-paragraph-spacing": "0px"
                          }} verticalAlignment="top" withExternalLayout>{<React3.Fragment>{_jsx2(motion2.h5, {
                                className: "framer-styles-preset-1e98430",
                                "data-styles-preset": "z4Urx0kPV",
                                style: {
                                  "--framer-text-color": "var(--extracted-1lwpl3i, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                                },
                                children: "Nicolas Muron"
                              })}</React3.Fragment>}</RichText>, <RichText __fromCanvasComponent className="framer-m9d6fk" data-framer-name="Subtitle2" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="RrdDAQZNq" style={{
                            "--extracted-r6o4lv": "var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143))",
                            "--framer-paragraph-spacing": "0px"
                          }} verticalAlignment="top" withExternalLayout>{<React3.Fragment>{_jsx2(motion2.p, {
                                className: "framer-styles-preset-k8yxrn",
                                "data-styles-preset": "ferGDeq75",
                                style: {
                                  "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)))"
                                },
                                children: "CEO and Founder"
                              })}</React3.Fragment>}</RichText>]
                        })]
                      })
                    })]
                  })
                })
              }), _jsx2(motion2.div, {
                className: "framer-1bvr7t",
                "data-framer-name": "maeving",
                layoutDependency,
                layoutId: "MQVUrr9Ly",
                style: {
                  backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))",
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8
                },
                children: _jsx2(motion2.div, {
                  className: "framer-1mz7bmv",
                  "data-framer-name": "Container",
                  layoutDependency,
                  layoutId: "vCu1bn_nO",
                  children: _jsxs2(motion2.div, {
                    className: "framer-165du0d",
                    "data-framer-name": "content-txt",
                    layoutDependency,
                    layoutId: "R7rXOC789",
                    children: [_jsx2(motion2.div, {
                      className: "framer-1l3jfkt",
                      "data-framer-name": "Logo wrap",
                      layoutDependency,
                      layoutId: "vPUUJNsnF",
                      children: <SVG className="framer-10uau66" data-framer-name="Graphic" layout="position" layoutDependency={layoutDependency} layoutId="ZzeNWF4ZN" opacity={1} svg={__svg_3} svgContentId={11650091099} withExternalLayout />
                    }), _jsx2(motion2.div, {
                      className: "framer-1vr9cig",
                      "data-framer-name": "Testimonial",
                      layoutDependency,
                      layoutId: "sbvvaAcn3",
                      children: <RichText __fromCanvasComponent className="framer-18bkhh5" data-framer-name="Supporting text" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="FZWtMgyqm" style={{
                        "--extracted-1eung3n": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                        "--framer-paragraph-spacing": "18px"
                      }} verticalAlignment="top" withExternalLayout>{<React3.Fragment>{_jsx2(motion2.h4, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                              "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                              "--framer-font-size": "24px",
                              "--framer-line-height": "110%",
                              "--framer-text-color": "var(--extracted-1eung3n, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                            },
                            children: "This partnership has been instrumental for Maeving as we bring our Built in Britain electric motorcycles to the U.S. By leveraging Bloom\u2019s platform, we can scale quickly, streamline our operations, and deliver an exceptional experience to our riders. We\u2019re excited to expand our reach and make Maeving accessible to more and more riders."
                          })}</React3.Fragment>}</RichText>
                    }), _jsx2(motion2.div, {
                      className: "framer-6tew8l",
                      "data-framer-name": "author",
                      layoutDependency,
                      layoutId: "vgCJMZd4T",
                      children: _jsxs2(motion2.div, {
                        className: "framer-f1flf3",
                        "data-framer-name": "author",
                        layoutDependency,
                        layoutId: "ZSyNJtTo8",
                        children: [<Image background={{
                          alt: "",
                          fit: "fill",
                          pixelHeight: 640,
                          pixelWidth: 640,
                          sizes: "60px",
                          src: "https://framerusercontent.com/images/RApZ3676OhWOx6T1V3ThQkfsZo.jpeg?width=640&height=640",
                          srcSet: "https://framerusercontent.com/images/RApZ3676OhWOx6T1V3ThQkfsZo.jpeg?scale-down-to=512&width=640&height=640 512w,https://framerusercontent.com/images/RApZ3676OhWOx6T1V3ThQkfsZo.jpeg?width=640&height=640 640w"
                        }} className="framer-ta1qu" data-framer-name="Persons" layoutDependency={layoutDependency} layoutId="gwI_fdeev" style={{
                          borderBottomLeftRadius: 80,
                          borderBottomRightRadius: 80,
                          borderTopLeftRadius: 80,
                          borderTopRightRadius: 80
                        }} />, _jsxs2(motion2.div, {
                          className: "framer-19q2u3m",
                          "data-framer-name": "name",
                          layoutDependency,
                          layoutId: "HDVmuolOr",
                          children: [<RichText __fromCanvasComponent className="framer-1w8f17e" data-framer-name="Heading5" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="e5hVvsop4" style={{
                            "--extracted-1lwpl3i": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                            "--framer-paragraph-spacing": "0px"
                          }} verticalAlignment="top" withExternalLayout>{<React3.Fragment>{_jsx2(motion2.h5, {
                                className: "framer-styles-preset-1e98430",
                                "data-styles-preset": "z4Urx0kPV",
                                style: {
                                  "--framer-text-color": "var(--extracted-1lwpl3i, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                                },
                                children: "Augustin Brajeux"
                              })}</React3.Fragment>}</RichText>, <RichText __fromCanvasComponent className="framer-5nsro9" data-framer-name="Subtitle2" fonts={["Inter"]} layoutDependency={layoutDependency} layoutId="br49ko5TA" style={{
                            "--extracted-r6o4lv": "var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143))",
                            "--framer-paragraph-spacing": "0px"
                          }} verticalAlignment="top" withExternalLayout>{<React3.Fragment>{_jsx2(motion2.p, {
                                className: "framer-styles-preset-k8yxrn",
                                "data-styles-preset": "ferGDeq75",
                                style: {
                                  "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)))"
                                },
                                children: "US General Manager"
                              })}</React3.Fragment>}</RichText>]
                        })]
                      })
                    })]
                  })
                })
              })]} snapObject={{
                fluid: false,
                snap: true,
                snapEdge: "center"
              }} style={{
                maxWidth: "100%",
                width: "100%"
              }} width="100%" {...addPropertyOverrides({
                bCDJCaRQJ: {
                  fadeObject: {
                    fadeAlpha: 0,
                    fadeContent: true,
                    fadeInset: 0,
                    fadeTransition: {
                      damping: 60,
                      delay: 0,
                      mass: 1,
                      stiffness: 500,
                      type: "spring"
                    },
                    fadeWidth: 7
                  },
                  sizingObject: {
                    heightInset: 0,
                    heightRows: 2,
                    heightType: "auto",
                    widthColumns: 2,
                    widthInset: 70,
                    widthType: "stretch"
                  }
                },
                hvsCbeL5x: {
                  sizingObject: {
                    heightInset: 0,
                    heightRows: 2,
                    heightType: "auto",
                    widthColumns: 2,
                    widthInset: 150,
                    widthType: "stretch"
                  }
                }
              }, baseVariant, gestureVariant)} />}</SmartComponentScopedContainer>}</ComponentViewportProvider>]
        })}</Transition>}</Variants>}</LayoutGroup>;
});
var css4 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-zt1Ec.framer-ds2tle, .framer-zt1Ec .framer-ds2tle { display: block; }", ".framer-zt1Ec.framer-174240v { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; overflow: hidden; padding: 48px; position: relative; width: 1200px; }", ".framer-zt1Ec .framer-8g222 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 24px 0px 0px; position: relative; width: 100%; }", ".framer-zt1Ec .framer-1jlhplk { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 728px; word-break: break-word; word-wrap: break-word; }", ".framer-zt1Ec .framer-10z4ovr-container { flex: none; height: auto; max-width: 1280px; position: relative; width: 100%; }", ".framer-zt1Ec .framer-2egxvm, .framer-zt1Ec .framer-kqr7fu, .framer-zt1Ec .framer-1bvr7t { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 72px; height: 480px; justify-content: center; overflow: hidden; padding: 40px; position: relative; width: 1080px; will-change: var(--framer-will-change-override, transform); }", ".framer-zt1Ec .framer-lq47tz, .framer-zt1Ec .framer-v8eiek, .framer-zt1Ec .framer-1mz7bmv { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }", ".framer-zt1Ec .framer-2eekim, .framer-zt1Ec .framer-1wn3uz9, .framer-zt1Ec .framer-165du0d { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 100%; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 1px; }", ".framer-zt1Ec .framer-16fveja, .framer-zt1Ec .framer-hkq218, .framer-zt1Ec .framer-1l3jfkt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-zt1Ec .framer-nyevkt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }", ".framer-zt1Ec .framer-n2kx7l { flex: none; height: 15px; position: relative; width: 119px; }", ".framer-zt1Ec .framer-v4dh5a, .framer-zt1Ec .framer-mhxsoj, .framer-zt1Ec .framer-1vr9cig { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-zt1Ec .framer-zfmowk, .framer-zt1Ec .framer-cj2iii, .framer-zt1Ec .framer-18bkhh5 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 94%; word-break: break-word; word-wrap: break-word; }", ".framer-zt1Ec .framer-1q89gwf, .framer-zt1Ec .framer-3xhfeo, .framer-zt1Ec .framer-6tew8l { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-zt1Ec .framer-16srfwt, .framer-zt1Ec .framer-19pj1fz, .framer-zt1Ec .framer-f1flf3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-zt1Ec .framer-1jlfhfr, .framer-zt1Ec .framer-16fuw30 { aspect-ratio: 1 / 1; flex: none; gap: 0px; height: var(--framer-aspect-ratio-supported, 60px); overflow: hidden; position: relative; width: 60px; will-change: var(--framer-will-change-override, transform); }", ".framer-zt1Ec .framer-8i6piw, .framer-zt1Ec .framer-dkr9oh, .framer-zt1Ec .framer-19q2u3m { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-zt1Ec .framer-1gcod39, .framer-zt1Ec .framer-bcq3ze, .framer-zt1Ec .framer-1e8opt4, .framer-zt1Ec .framer-m9d6fk, .framer-zt1Ec .framer-1w8f17e, .framer-zt1Ec .framer-5nsro9 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-zt1Ec .framer-130e29 { flex: none; height: 12px; position: relative; width: 120px; }", ".framer-zt1Ec .framer-10uau66 { flex: none; height: 16px; position: relative; width: 114px; }", ".framer-zt1Ec .framer-ta1qu { aspect-ratio: 1 / 1; flex: none; gap: 0px; height: var(--framer-aspect-ratio-supported, 46px); overflow: hidden; position: relative; width: 60px; will-change: var(--framer-will-change-override, transform); }", ".framer-zt1Ec.framer-v-16xqaza.framer-174240v { padding: 64px; width: 1280px; }", ".framer-zt1Ec.framer-v-tdv2f0.framer-174240v { padding: 32px; width: 832px; }", ...css2, ...css3, ...css];
var FrameroKd_eXMbQ = withCSS(Component, css4, "framer-zt1Ec");
var oKd_eXMbQ_default = FrameroKd_eXMbQ;
FrameroKd_eXMbQ.displayName = "social proof section";
FrameroKd_eXMbQ.defaultProps = {
  height: 660,
  width: 1200
};
addPropertyControls2(FrameroKd_eXMbQ, {
  variant: {
    options: ["svAJL9BkB", "hvsCbeL5x", "bCDJCaRQJ"],
    optionTitles: ["Desktop", "Laptop", "Tablet"],
    title: "Variant",
    type: ControlType5.Enum
  }
});
addFonts(FrameroKd_eXMbQ, [{
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
  }]
}, ...CarouselFonts, ...getFontsFromSharedStyle(fonts2), ...getFontsFromSharedStyle(fonts3), ...getFontsFromSharedStyle(fonts)], {
  supportsExplicitInterCodegen: true
});
var __FramerMetadata__ = {
  "exports": {
    "default": {
      "type": "reactComponent",
      "name": "FrameroKd_eXMbQ",
      "slots": [],
      "annotations": {
        "framerColorSyntax": "true",
        "framerIntrinsicHeight": "660",
        "framerComponentViewportWidth": "true",
        "framerImmutableVariables": "true",
        "framerContractVersion": "1",
        "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"hvsCbeL5x":{"layout":["fixed","auto"]},"bCDJCaRQJ":{"layout":["fixed","auto"]}}}',
        "framerDisplayContentsDiv": "false",
        "framerAutoSizeImages": "true",
        "framerIntrinsicWidth": "1200"
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
var _OriginalComponent = oKd_eXMbQ_default;
function SocialproofsectionWrapped(props) {
  var _variant = useVariant(props.variant);
  var _inner = (_variant !== undefined) ? { ...props, variant: _variant } : props;
  return _ctxJsx(ContextProviders, { children: _ctxJsx(_OriginalComponent, _inner) });
}
Object.assign(SocialproofsectionWrapped, _OriginalComponent);
export {  __FramerMetadata__,  SocialproofsectionWrapped as default   };