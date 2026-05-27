"use client"
// http-url:https://framerusercontent.com/modules/jP2Qw7SYGWWAfJJ5yM35/guoEWj99XjNSYHwDahb8/G7V81eT9D.js
import { jsx as _jsx2, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls as addPropertyControls2, ControlType as ControlType2, cx as cx2, getFonts, RichText, SVG as SVG2, useActiveVariantCallback, useComponentViewport, useLocaleInfo, useOnVariantChange, useVariantState, withCSS as withCSS2 } from "@proofly-framer/runtime";
import { LayoutGroup, motion as motion2, MotionConfigContext } from "@proofly-framer/runtime";
import * as React2 from "react";
import { useRef } from "react";

// Extracted SVG assets
const __svg_1 = '<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 10.5 0 L 0 10.5" fill="transparent" height="10.5px" id="dJkACGH8G" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(6.75 6.75)" width="10.5px"/><path d="M 0 0 L 10.5 10.5" fill="transparent" height="10.5px" id="pgy_UnrTc" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(6.75 6.75)" width="10.5px"/></svg>';
const __svg_2 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12 12" overflow="visible"><path d="M 6 0 C 9.314 0 12 2.686 12 6 C 12 9.314 9.314 12 6 12 C 2.686 12 0 9.314 0 6 C 0 2.686 2.686 0 6 0 Z" fill="var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)) /* {&quot;name&quot;:&quot;Off-White&quot;} */" stroke-width="1.5" stroke="var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)) /* {&quot;name&quot;:&quot;Background&quot;} */"></path></svg>';
const __svg_3 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12 12" overflow="visible"><path d="M 6 0 C 9.314 0 12 2.686 12 6 C 12 9.314 9.314 12 6 12 C 2.686 12 0 9.314 0 6 C 0 2.686 2.686 0 6 0 Z" fill="var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)) /* {&quot;name&quot;:&quot;Off-White&quot;} */" stroke-width="1.5" stroke="var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)) /* {&quot;name&quot;:&quot;Background&quot;} */"></path></svg>';
const __svg_4 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12 12" overflow="visible"><path d="M 6 0 C 9.314 0 12 2.686 12 6 C 12 9.314 9.314 12 6 12 C 2.686 12 0 9.314 0 6 C 0 2.686 2.686 0 6 0 Z" fill="var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)) /* {&quot;name&quot;:&quot;Off-White&quot;} */" stroke-width="1.5" stroke="var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)) /* {&quot;name&quot;:&quot;Background&quot;} */"></path></svg>';
const __svg_5 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 16 16\" overflow=\"visible\"><path d=\"M 8 0 C 12.418 0 16 3.582 16 8 C 16 12.418 12.418 16 8 16 C 3.582 16 0 12.418 0 8 C 0 3.582 3.582 0 8 0 Z\" fill=\"var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)) /* {&quot;name&quot;:&quot;Off-White&quot;} */\" stroke-width=\"2\" stroke=\"var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)) /* {&quot;name&quot;:&quot;Background&quot;} */\"></path></svg>";


// http-url:https://framerusercontent.com/modules/gMuDqyz8yu59jm7MoNhj/Bx9TuXcQ73YY8xGchlYh/GWRfWbnWp.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addPropertyControls, ControlType, cx, motion, useSVGTemplate, withCSS } from "@proofly-framer/runtime";
import * as React from "react";
import { forwardRef as forwardRef2 } from "react";
import { jsx as _ctxJsx } from "react/jsx-runtime";
import { ContextProviders, useVariant } from "@proofly-framer/runtime";
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
var Component = React.forwardRef(function (props, ref) {
  const {
    style,
    className,
    layoutId,
    variant,
    fICyAUQY1,
    lKf_CQTz5,
    BKVe8Pgvw,
    ...restProps
  } = getProps(props);
  const href = useSVGTemplate("3527454627", svg);
  return <SVG {...restProps} className={cx("framer-KpKpK", className)} layoutId={layoutId} ref={ref} role="presentation" style={{
    "--1335ju": lKf_CQTz5,
    "--18mrqx2": fICyAUQY1,
    ...style
  }} viewBox="0 0 24 24">{<use href={href} />}</SVG>;
});
var css = [`.framer-KpKpK { -webkit-mask: ${mask}; aspect-ratio: 1; display: block; mask: ${mask}; width: 24px; }`];
var Icon = withCSS(Component, css, "framer-KpKpK");
Icon.displayName = "Close";
var GWRfWbnWp_default = Icon;
addPropertyControls(Icon, {
  fICyAUQY1: {
    defaultValue: "rgb(0, 0, 0)",
    hidden: false,
    title: "Stroke",
    type: ControlType.Color
  },
  lKf_CQTz5: {
    defaultValue: 1.5,
    displayStepper: true,
    hidden: false,
    max: 4,
    min: 0,
    step: 0.5,
    title: "Width",
    type: ControlType.Number
  },
  BKVe8Pgvw: {
    defaultValue: 1,
    displayStepper: true,
    hidden: true,
    max: 4,
    min: 1,
    title: "Dots",
    type: ControlType.Number
  }
});

// http-url:https://framerusercontent.com/modules/jP2Qw7SYGWWAfJJ5yM35/guoEWj99XjNSYHwDahb8/G7V81eT9D.js
var CloseFonts = getFonts(GWRfWbnWp_default);
var cycleOrder = ["zTLL_g3_b", "vXIgZ_zWs", "cJ_ETOfI0", "WmXwkozqk", "uln0CdeSq", "ymrABKbDJ"];
var serializationHash = "framer-iRkKX";
var variantClassNames = {
  cJ_ETOfI0: "framer-v-v58h3n",
  uln0CdeSq: "framer-v-b5y86m",
  vXIgZ_zWs: "framer-v-1vns9ir",
  WmXwkozqk: "framer-v-k6qia9",
  ymrABKbDJ: "framer-v-hvatz0",
  zTLL_g3_b: "framer-v-1gn4yr9"
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
  const config = React2.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React2.useMemo(() => ({
    ...config,
    transition
  }), [JSON.stringify(transition)]);
  return <MotionConfigContext.Provider value={contextValue}>{children}</MotionConfigContext.Provider>;
};
var Variants = motion2.create(React2.Fragment);
var humanReadableVariantMap = {
  "Variant 2": "vXIgZ_zWs",
  "Variant 3": "cJ_ETOfI0",
  "Variant 5": "uln0CdeSq",
  "Variant 6": "ymrABKbDJ",
  desk: "zTLL_g3_b",
  phone: "WmXwkozqk"
};
var getProps2 = ({
  height,
  id,
  width,
  ...props
}) => {
  return {
    ...props,
    variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "zTLL_g3_b"
  };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component2 = React2.forwardRef(function (props, ref) {
  const fallbackRef = useRef(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React2.useId();
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
  } = getProps2(props);
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
    defaultVariant: "zTLL_g3_b",
    ref: refBinding,
    variant,
    variantClassNames
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const {
    activeVariantCallback,
    delay
  } = useActiveVariantCallback(baseVariant);
  const onAppearjuuath = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("vXIgZ_zWs", true), 2e3);
  });
  const onAppear1tdl2ra = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("cJ_ETOfI0", true), 2e3);
  });
  const onAppear9ike3e = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("zTLL_g3_b", true), 2e3);
  });
  const onAppeargzay91 = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("uln0CdeSq", true), 2e3);
  });
  const onAppear1fmaxfu = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("ymrABKbDJ", true), 2e3);
  });
  const onAppearp51ghe = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("WmXwkozqk", true), 2e3);
  });
  useOnVariantChange(baseVariant, {
    cJ_ETOfI0: onAppear9ike3e,
    default: onAppearjuuath,
    uln0CdeSq: onAppear1fmaxfu,
    vXIgZ_zWs: onAppear1tdl2ra,
    WmXwkozqk: onAppeargzay91,
    ymrABKbDJ: onAppearp51ghe
  });
  const sharedStyleClassNames = [];
  const scopingClassNames = cx2(serializationHash, ...sharedStyleClassNames);
  return <LayoutGroup id={layoutId ?? defaultLayoutId}>{<Variants animate={variants} initial={false}>{<Transition value={transition1}>{_jsx2(motion2.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx2(scopingClassNames, "framer-1gn4yr9", className, classNames),
          "data-framer-name": "desk",
          "data-highlight": true,
          layoutDependency,
          layoutId: "zTLL_g3_b",
          ref: refBinding,
          style: {
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            ...style
          },
          ...addPropertyOverrides({
            cJ_ETOfI0: {
              "data-framer-name": "Variant 3"
            },
            uln0CdeSq: {
              "data-framer-name": "Variant 5"
            },
            vXIgZ_zWs: {
              "data-framer-name": "Variant 2"
            },
            WmXwkozqk: {
              "data-framer-name": "phone"
            },
            ymrABKbDJ: {
              "data-framer-name": "Variant 6"
            }
          }, baseVariant, gestureVariant),
          children: _jsx2(motion2.div, {
            className: "framer-lcmuvl",
            "data-border": true,
            "data-framer-name": "border",
            layoutDependency,
            layoutId: "Stf358ngw",
            style: {
              "--border-bottom-width": "2px",
              "--border-color": "var(--token-d29c90a1-1235-46d8-abcf-63afa67478e3, rgb(254, 5, 62))",
              "--border-left-width": "2px",
              "--border-right-width": "2px",
              "--border-style": "solid",
              "--border-top-width": "2px",
              borderBottomLeftRadius: 14,
              borderBottomRightRadius: 14,
              borderTopLeftRadius: 14,
              borderTopRightRadius: 14
            },
            children: _jsxs(motion2.div, {
              className: "framer-c5gro1",
              layoutDependency,
              layoutId: "zTLL_g3_bm1AD_bi0H",
              style: {
                backgroundColor: "var(--token-a62a5b4e-4bad-40b4-8d83-debd27240e62, rgb(255, 255, 255))",
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                boxShadow: "0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06)"
              },
              children: [_jsxs(motion2.div, {
                className: "framer-1n3ihkn",
                layoutDependency,
                layoutId: "zTLL_g3_bsZ1ScHKZ8",
                children: [_jsxs(motion2.div, {
                  className: "framer-99xisx",
                  layoutDependency,
                  layoutId: "zTLL_g3_bpA5YZPj3D",
                  children: [<RichText __fromCanvasComponent className="framer-14i6lma" data-framer-name="Delivery" fonts={["CUSTOM;Haffer Bold"]} layoutDependency={layoutDependency} layoutId="zTLL_g3_btHV3lspgb" style={{
                    "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                    "--framer-paragraph-spacing": "2.5446794033050537px"
                  }} verticalAlignment="top" withExternalLayout>{<React2.Fragment>{_jsx2(motion2.p, {
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                          "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                          "--framer-font-size": "18px",
                          "--framer-line-height": "120%",
                          "--framer-text-alignment": "left",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                        },
                        children: "Terms"
                      })}</React2.Fragment>}</RichText>, <RichText __fromCanvasComponent className="framer-1swqnx3" data-framer-name="Delivery" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="zTLL_g3_bFdS6ie62W" style={{
                    "--extracted-r6o4lv": "var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143))",
                    "--framer-paragraph-spacing": "2.5446794033050537px"
                  }} verticalAlignment="top" withExternalLayout>{<React2.Fragment>{_jsx2(motion2.p, {
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                          "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                          "--framer-font-size": "12px",
                          "--framer-line-height": "120%",
                          "--framer-text-alignment": "left",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)))"
                        },
                        children: "Change net payment terms"
                      })}</React2.Fragment>}</RichText>]
                }), _jsx2(motion2.div, {
                  className: "framer-16olo0s",
                  "data-border": true,
                  layoutDependency,
                  layoutId: "zTLL_g3_bcwdC6TyrF",
                  style: {
                    "--border-bottom-width": "1px",
                    "--border-color": "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))",
                    "--border-left-width": "1px",
                    "--border-right-width": "1px",
                    "--border-style": "solid",
                    "--border-top-width": "1px",
                    borderBottomLeftRadius: 17,
                    borderBottomRightRadius: 17,
                    borderTopLeftRadius: 17,
                    borderTopRightRadius: 17
                  },
                  children: <GWRfWbnWp_default animated className="framer-1iq8z1b" layoutDependency={layoutDependency} layoutId="zTLL_g3_bgSDAGLDvR" style={{
                    "--1335ju": 1.5,
                    "--18mrqx2": "rgb(0, 0, 0)",
                    "--3it368": 1
                  }} />
                })]
              }), _jsxs(motion2.div, {
                className: "framer-8mmhbr",
                layoutDependency,
                layoutId: "zTLL_g3_bgY5Fxe1t_",
                children: [_jsx2(motion2.div, {
                  className: "framer-blbvy8",
                  layoutDependency,
                  layoutId: "zTLL_g3_bhaT1cVwhN",
                  children: _jsxs(motion2.div, {
                    className: "framer-11huqcw",
                    layoutDependency,
                    layoutId: "zTLL_g3_bFagAGloD_",
                    style: {
                      backgroundColor: "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))",
                      borderBottomLeftRadius: 50,
                      borderBottomRightRadius: 50,
                      borderTopLeftRadius: 50,
                      borderTopRightRadius: 50
                    },
                    children: [_jsx2(motion2.div, {
                      className: "framer-19zqxc",
                      layoutDependency,
                      layoutId: "zTLL_g3_bxGN5w5c1Z",
                      style: {
                        backgroundColor: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                        borderBottomLeftRadius: 4,
                        borderBottomRightRadius: 4,
                        borderTopLeftRadius: 4,
                        borderTopRightRadius: 4
                      }
                    }), _jsx2(motion2.div, {
                      className: "framer-n78mak",
                      layoutDependency,
                      layoutId: "zTLL_g3_bt8jdfwlgk",
                      children: <SVG2 className="framer-77lbcg" layoutDependency={layoutDependency} layoutId="zTLL_g3_bJqk9gZaxX" opacity={1} requiresOverflowVisible svg={__svg_5} withExternalLayout {...addPropertyOverrides({
                        uln0CdeSq: {
                          svg: __svg_2
                        },
                        WmXwkozqk: {
                          svg: __svg_3
                        },
                        ymrABKbDJ: {
                          svg: __svg_4
                        }
                      }, baseVariant, gestureVariant)} />
                    })]
                  })
                }), _jsxs(motion2.div, {
                  className: "framer-21szq0",
                  layoutDependency,
                  layoutId: "zTLL_g3_bpyVuij098",
                  children: [_jsxs(motion2.div, {
                    className: "framer-1o28xg5",
                    layoutDependency,
                    layoutId: "zTLL_g3_bAC63BEpOU",
                    style: {
                      opacity: 1
                    },
                    variants: {
                      cJ_ETOfI0: {
                        opacity: 0.5
                      },
                      uln0CdeSq: {
                        opacity: 0.5
                      },
                      vXIgZ_zWs: {
                        opacity: 0.5
                      },
                      WmXwkozqk: {
                        opacity: 1
                      },
                      ymrABKbDJ: {
                        opacity: 0.5
                      }
                    },
                    children: [<RichText __fromCanvasComponent className="framer-1d9b4gt" data-framer-name="Delivery" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="zTLL_g3_bNIfQTEtyY" style={{
                      "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                      "--framer-paragraph-spacing": "2.5446794033050537px"
                    }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
                      uln0CdeSq: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                              "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                              "--framer-font-size": "10px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                            },
                            children: "Pay Now"
                          })}</React2.Fragment>
                      },
                      WmXwkozqk: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                              "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                              "--framer-font-size": "10px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                            },
                            children: "Pay Now"
                          })}</React2.Fragment>
                      },
                      ymrABKbDJ: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                              "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                              "--framer-font-size": "10px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                            },
                            children: "Pay Now"
                          })}</React2.Fragment>
                      }
                    }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsx2(motion2.p, {
                          style: {
                            "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                            "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                            "--framer-font-size": "12px",
                            "--framer-line-height": "120%",
                            "--framer-text-alignment": "center",
                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                          },
                          children: "Pay Now"
                        })}</React2.Fragment>}</RichText>, <RichText __fromCanvasComponent className="framer-n9uwzx" data-framer-name="Delivery" fonts={["CUSTOM;Haffer Bold"]} layoutDependency={layoutDependency} layoutId="zTLL_g3_ble9wN_Uzl" style={{
                      "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                      "--framer-paragraph-spacing": "2.5446794033050537px"
                    }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
                      uln0CdeSq: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                              "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                              "--framer-font-size": "10px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                            },
                            children: "-150.00"
                          })}</React2.Fragment>
                      },
                      WmXwkozqk: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                              "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                              "--framer-font-size": "10px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                            },
                            children: "-150.00"
                          })}</React2.Fragment>
                      },
                      ymrABKbDJ: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                              "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                              "--framer-font-size": "10px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                            },
                            children: "-150.00"
                          })}</React2.Fragment>
                      }
                    }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsx2(motion2.p, {
                          style: {
                            "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                            "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                            "--framer-font-size": "12px",
                            "--framer-line-height": "120%",
                            "--framer-text-alignment": "center",
                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                          },
                          children: "-150.00"
                        })}</React2.Fragment>}</RichText>, <RichText __fromCanvasComponent className="framer-gucnk8" data-framer-name="Delivery" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="zTLL_g3_bI8_XmjlaV" style={{
                      "--extracted-r6o4lv": "var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143))",
                      "--framer-paragraph-spacing": "2.5446794033050537px"
                    }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
                      uln0CdeSq: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                              "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                              "--framer-font-size": "10px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)))"
                            },
                            children: "(-1.5%)"
                          })}</React2.Fragment>
                      },
                      WmXwkozqk: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                              "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                              "--framer-font-size": "10px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)))"
                            },
                            children: "(-1.5%)"
                          })}</React2.Fragment>
                      },
                      ymrABKbDJ: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                              "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                              "--framer-font-size": "10px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)))"
                            },
                            children: "(-1.5%)"
                          })}</React2.Fragment>
                      }
                    }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsx2(motion2.p, {
                          style: {
                            "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                            "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                            "--framer-font-size": "12px",
                            "--framer-line-height": "120%",
                            "--framer-text-alignment": "center",
                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)))"
                          },
                          children: "(-1.5%)"
                        })}</React2.Fragment>}</RichText>]
                  }), _jsxs(motion2.div, {
                    className: "framer-dfkdw9",
                    layoutDependency,
                    layoutId: "zTLL_g3_bHUGwLxrO1",
                    style: {
                      opacity: 0.5
                    },
                    variants: {
                      uln0CdeSq: {
                        opacity: 1
                      },
                      vXIgZ_zWs: {
                        opacity: 1
                      }
                    },
                    children: [<RichText __fromCanvasComponent className="framer-1bikhx1" data-framer-name="Delivery" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="zTLL_g3_bCDvObeboU" style={{
                      "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                      "--framer-paragraph-spacing": "2.5446794033050537px"
                    }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
                      uln0CdeSq: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                              "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                              "--framer-font-size": "10px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                            },
                            children: "Net 15"
                          })}</React2.Fragment>
                      },
                      WmXwkozqk: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                              "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                              "--framer-font-size": "10px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                            },
                            children: "Net 15"
                          })}</React2.Fragment>
                      },
                      ymrABKbDJ: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                              "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                              "--framer-font-size": "10px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                            },
                            children: "Net 15"
                          })}</React2.Fragment>
                      }
                    }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsx2(motion2.p, {
                          style: {
                            "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                            "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                            "--framer-font-size": "12px",
                            "--framer-line-height": "120%",
                            "--framer-text-alignment": "center",
                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                          },
                          children: "Net 15"
                        })}</React2.Fragment>}</RichText>, <RichText __fromCanvasComponent className="framer-1s7p9g7" data-framer-name="Delivery" fonts={["CUSTOM;Haffer Bold"]} layoutDependency={layoutDependency} layoutId="zTLL_g3_bZLPOBd4VT" style={{
                      "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                      "--framer-paragraph-spacing": "2.5446794033050537px"
                    }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
                      uln0CdeSq: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                              "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                              "--framer-font-size": "10px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                            },
                            children: "+0.00"
                          })}</React2.Fragment>
                      },
                      WmXwkozqk: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                              "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                              "--framer-font-size": "10px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                            },
                            children: "+0.00"
                          })}</React2.Fragment>
                      },
                      ymrABKbDJ: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                              "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                              "--framer-font-size": "10px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                            },
                            children: "+0.00"
                          })}</React2.Fragment>
                      }
                    }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsx2(motion2.p, {
                          style: {
                            "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                            "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                            "--framer-font-size": "12px",
                            "--framer-line-height": "120%",
                            "--framer-text-alignment": "center",
                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                          },
                          children: "+0.00"
                        })}</React2.Fragment>}</RichText>, <RichText __fromCanvasComponent className="framer-r3wg6p" data-framer-name="Delivery" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="zTLL_g3_bbc1rzFnva" style={{
                      "--extracted-r6o4lv": "var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143))",
                      "--framer-paragraph-spacing": "2.5446794033050537px"
                    }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
                      uln0CdeSq: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                              "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                              "--framer-font-size": "10px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)))"
                            },
                            children: "(0%)"
                          })}</React2.Fragment>
                      },
                      WmXwkozqk: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                              "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                              "--framer-font-size": "10px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)))"
                            },
                            children: "(0%)"
                          })}</React2.Fragment>
                      },
                      ymrABKbDJ: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                              "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                              "--framer-font-size": "10px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)))"
                            },
                            children: "(0%)"
                          })}</React2.Fragment>
                      }
                    }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsx2(motion2.p, {
                          style: {
                            "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                            "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                            "--framer-font-size": "12px",
                            "--framer-line-height": "120%",
                            "--framer-text-alignment": "center",
                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)))"
                          },
                          children: "(0%)"
                        })}</React2.Fragment>}</RichText>]
                  }), _jsxs(motion2.div, {
                    className: "framer-m1vopw",
                    layoutDependency,
                    layoutId: "zTLL_g3_bCPySusjFE",
                    style: {
                      opacity: 0.5
                    },
                    children: [<RichText __fromCanvasComponent className="framer-1gkyklh" data-framer-name="Delivery" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="zTLL_g3_bXQwJVoYkE" style={{
                      "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                      "--framer-paragraph-spacing": "2.5446794033050537px"
                    }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
                      uln0CdeSq: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                              "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                              "--framer-font-size": "10px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                            },
                            children: "Net 30"
                          })}</React2.Fragment>
                      },
                      WmXwkozqk: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                              "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                              "--framer-font-size": "10px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                            },
                            children: "Net 30"
                          })}</React2.Fragment>
                      },
                      ymrABKbDJ: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                              "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                              "--framer-font-size": "10px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                            },
                            children: "Net 30"
                          })}</React2.Fragment>
                      }
                    }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsx2(motion2.p, {
                          style: {
                            "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                            "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                            "--framer-font-size": "12px",
                            "--framer-line-height": "120%",
                            "--framer-text-alignment": "center",
                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                          },
                          children: "Net 30"
                        })}</React2.Fragment>}</RichText>, <RichText __fromCanvasComponent className="framer-htmay7" data-framer-name="Delivery" fonts={["CUSTOM;Haffer Bold"]} layoutDependency={layoutDependency} layoutId="zTLL_g3_bUigNNIU_L" style={{
                      "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                      "--framer-paragraph-spacing": "2.5446794033050537px"
                    }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
                      uln0CdeSq: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                              "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                              "--framer-font-size": "10px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                            },
                            children: "+200.00"
                          })}</React2.Fragment>
                      },
                      WmXwkozqk: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                              "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                              "--framer-font-size": "10px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                            },
                            children: "+200.00"
                          })}</React2.Fragment>
                      },
                      ymrABKbDJ: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                              "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                              "--framer-font-size": "10px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                            },
                            children: "+200.00"
                          })}</React2.Fragment>
                      }
                    }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsx2(motion2.p, {
                          style: {
                            "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                            "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                            "--framer-font-size": "12px",
                            "--framer-line-height": "120%",
                            "--framer-text-alignment": "center",
                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                          },
                          children: "+200.00"
                        })}</React2.Fragment>}</RichText>, <RichText __fromCanvasComponent className="framer-m4i0jz" data-framer-name="Delivery" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="zTLL_g3_beob4kpd38" style={{
                      "--extracted-r6o4lv": "var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143))",
                      "--framer-paragraph-spacing": "2.5446794033050537px"
                    }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
                      uln0CdeSq: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                              "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                              "--framer-font-size": "10px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)))"
                            },
                            children: "(+2.0%)"
                          })}</React2.Fragment>
                      },
                      WmXwkozqk: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                              "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                              "--framer-font-size": "10px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)))"
                            },
                            children: "(+2.0%)"
                          })}</React2.Fragment>
                      },
                      ymrABKbDJ: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                              "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                              "--framer-font-size": "10px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)))"
                            },
                            children: "(+2.0%)"
                          })}</React2.Fragment>
                      }
                    }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsx2(motion2.p, {
                          style: {
                            "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                            "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                            "--framer-font-size": "12px",
                            "--framer-line-height": "120%",
                            "--framer-text-alignment": "center",
                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)))"
                          },
                          children: "(+2.0%)"
                        })}</React2.Fragment>}</RichText>]
                  }), _jsxs(motion2.div, {
                    className: "framer-3tvwr1",
                    layoutDependency,
                    layoutId: "zTLL_g3_bO_JUqmXQY",
                    style: {
                      opacity: 0.5
                    },
                    variants: {
                      cJ_ETOfI0: {
                        opacity: 1
                      },
                      ymrABKbDJ: {
                        opacity: 1
                      }
                    },
                    children: [<RichText __fromCanvasComponent className="framer-1ysmiqb" data-framer-name="Delivery" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="zTLL_g3_bLRHaoS2w4" style={{
                      "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                      "--framer-paragraph-spacing": "2.5446794033050537px"
                    }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
                      uln0CdeSq: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                              "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                              "--framer-font-size": "10px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                            },
                            children: "Net 90"
                          })}</React2.Fragment>
                      },
                      WmXwkozqk: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                              "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                              "--framer-font-size": "10px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                            },
                            children: "Net 90"
                          })}</React2.Fragment>
                      },
                      ymrABKbDJ: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                              "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                              "--framer-font-size": "10px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                            },
                            children: "Net 90"
                          })}</React2.Fragment>
                      }
                    }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsx2(motion2.p, {
                          style: {
                            "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                            "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                            "--framer-font-size": "12px",
                            "--framer-line-height": "120%",
                            "--framer-text-alignment": "center",
                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                          },
                          children: "Net 90"
                        })}</React2.Fragment>}</RichText>, <RichText __fromCanvasComponent className="framer-b0u6bi" data-framer-name="Delivery" fonts={["CUSTOM;Haffer Bold"]} layoutDependency={layoutDependency} layoutId="zTLL_g3_bgRwS4M3wa" style={{
                      "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                      "--framer-paragraph-spacing": "2.5446794033050537px"
                    }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
                      uln0CdeSq: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                              "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                              "--framer-font-size": "10px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                            },
                            children: "+600.00"
                          })}</React2.Fragment>
                      },
                      WmXwkozqk: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                              "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                              "--framer-font-size": "10px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                            },
                            children: "+600.00"
                          })}</React2.Fragment>
                      },
                      ymrABKbDJ: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                              "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                              "--framer-font-size": "10px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                            },
                            children: "+600.00"
                          })}</React2.Fragment>
                      }
                    }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsx2(motion2.p, {
                          style: {
                            "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                            "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                            "--framer-font-size": "12px",
                            "--framer-line-height": "120%",
                            "--framer-text-alignment": "center",
                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                          },
                          children: "+600.00"
                        })}</React2.Fragment>}</RichText>, <RichText __fromCanvasComponent className="framer-240wfk" data-framer-name="Delivery" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="zTLL_g3_bJ0LOAc2p4" style={{
                      "--extracted-r6o4lv": "var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143))",
                      "--framer-paragraph-spacing": "2.5446794033050537px"
                    }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
                      uln0CdeSq: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                              "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                              "--framer-font-size": "10px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)))"
                            },
                            children: "(+6%)"
                          })}</React2.Fragment>
                      },
                      WmXwkozqk: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                              "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                              "--framer-font-size": "10px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)))"
                            },
                            children: "(+6%)"
                          })}</React2.Fragment>
                      },
                      ymrABKbDJ: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                              "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                              "--framer-font-size": "10px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)))"
                            },
                            children: "(+6%)"
                          })}</React2.Fragment>
                      }
                    }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsx2(motion2.p, {
                          style: {
                            "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                            "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                            "--framer-font-size": "12px",
                            "--framer-line-height": "120%",
                            "--framer-text-alignment": "center",
                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)))"
                          },
                          children: "(+6%)"
                        })}</React2.Fragment>}</RichText>]
                  }), _jsxs(motion2.div, {
                    className: "framer-6axuu4",
                    layoutDependency,
                    layoutId: "zTLL_g3_beGVD0Bj5W",
                    style: {
                      opacity: 0.5
                    },
                    children: [<RichText __fromCanvasComponent className="framer-1ag1g73" data-framer-name="Delivery" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="zTLL_g3_bAMICCImQR" style={{
                      "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                      "--framer-paragraph-spacing": "2.5446794033050537px"
                    }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
                      uln0CdeSq: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                              "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                              "--framer-font-size": "10px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                            },
                            children: "Net 120"
                          })}</React2.Fragment>
                      },
                      WmXwkozqk: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                              "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                              "--framer-font-size": "10px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                            },
                            children: "Net 120"
                          })}</React2.Fragment>
                      },
                      ymrABKbDJ: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                              "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                              "--framer-font-size": "10px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                            },
                            children: "Net 120"
                          })}</React2.Fragment>
                      }
                    }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsx2(motion2.p, {
                          style: {
                            "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                            "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                            "--framer-font-size": "12px",
                            "--framer-line-height": "120%",
                            "--framer-text-alignment": "center",
                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                          },
                          children: "Net 120"
                        })}</React2.Fragment>}</RichText>, <RichText __fromCanvasComponent className="framer-1ph6uy3" data-framer-name="Delivery" fonts={["CUSTOM;Haffer Bold"]} layoutDependency={layoutDependency} layoutId="zTLL_g3_bzdu1qlReV" style={{
                      "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                      "--framer-paragraph-spacing": "2.5446794033050537px"
                    }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
                      uln0CdeSq: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                              "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                              "--framer-font-size": "10px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                            },
                            children: "+800.00"
                          })}</React2.Fragment>
                      },
                      WmXwkozqk: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                              "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                              "--framer-font-size": "10px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                            },
                            children: "+800.00"
                          })}</React2.Fragment>
                      },
                      ymrABKbDJ: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                              "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                              "--framer-font-size": "10px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                            },
                            children: "+800.00"
                          })}</React2.Fragment>
                      }
                    }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsx2(motion2.p, {
                          style: {
                            "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                            "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                            "--framer-font-size": "12px",
                            "--framer-line-height": "120%",
                            "--framer-text-alignment": "center",
                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                          },
                          children: "+800.00"
                        })}</React2.Fragment>}</RichText>, <RichText __fromCanvasComponent className="framer-9yiqb3" data-framer-name="Delivery" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="zTLL_g3_bfib23KCnY" style={{
                      "--extracted-r6o4lv": "var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143))",
                      "--framer-paragraph-spacing": "2.5446794033050537px"
                    }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
                      uln0CdeSq: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                              "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                              "--framer-font-size": "10px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)))"
                            },
                            children: "(+8.0%)"
                          })}</React2.Fragment>
                      },
                      WmXwkozqk: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                              "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                              "--framer-font-size": "10px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)))"
                            },
                            children: "(+8.0%)"
                          })}</React2.Fragment>
                      },
                      ymrABKbDJ: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                              "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                              "--framer-font-size": "10px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)))"
                            },
                            children: "(+8.0%)"
                          })}</React2.Fragment>
                      }
                    }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsx2(motion2.p, {
                          style: {
                            "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                            "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                            "--framer-font-size": "12px",
                            "--framer-line-height": "120%",
                            "--framer-text-alignment": "center",
                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)))"
                          },
                          children: "(+8.0%)"
                        })}</React2.Fragment>}</RichText>]
                  })]
                })]
              }), _jsxs(motion2.div, {
                className: "framer-1ei934k",
                "data-border": true,
                layoutDependency,
                layoutId: "zTLL_g3_bUtqnrmUEf",
                style: {
                  "--border-bottom-width": "0px",
                  "--border-color": "var(--token-00177e2c-b71a-4918-aaf7-10f1a0f84aad, rgb(220, 235, 236))",
                  "--border-left-width": "0px",
                  "--border-right-width": "0px",
                  "--border-style": "solid",
                  "--border-top-width": "1px"
                },
                children: [_jsxs(motion2.div, {
                  className: "framer-a06kk0",
                  layoutDependency,
                  layoutId: "HzaZ3BJla",
                  children: [<RichText __fromCanvasComponent className="framer-1nhwcyt" data-framer-name="Delivery" fonts={["CUSTOM;Haffer Bold"]} layoutDependency={layoutDependency} layoutId="zTLL_g3_bp3Sb3_bKg" style={{
                    "--extracted-r6o4lv": "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                    "--framer-paragraph-spacing": "2.5446794033050537px"
                  }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
                    cJ_ETOfI0: {
                      children: <React2.Fragment>{_jsx2(motion2.p, {
                          style: {
                            "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                            "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                            "--framer-font-size": "18px",
                            "--framer-line-height": "120%",
                            "--framer-text-alignment": "left",
                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                          },
                          children: "$10,600.00"
                        })}</React2.Fragment>
                    },
                    uln0CdeSq: {
                      children: <React2.Fragment>{_jsx2(motion2.p, {
                          style: {
                            "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                            "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                            "--framer-font-size": "18px",
                            "--framer-line-height": "120%",
                            "--framer-text-alignment": "left",
                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                          },
                          children: "$10,000.00"
                        })}</React2.Fragment>
                    },
                    vXIgZ_zWs: {
                      children: <React2.Fragment>{_jsx2(motion2.p, {
                          style: {
                            "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                            "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                            "--framer-font-size": "18px",
                            "--framer-line-height": "120%",
                            "--framer-text-alignment": "left",
                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                          },
                          children: "$10,000.00"
                        })}</React2.Fragment>
                    },
                    ymrABKbDJ: {
                      children: <React2.Fragment>{_jsx2(motion2.p, {
                          style: {
                            "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                            "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                            "--framer-font-size": "18px",
                            "--framer-line-height": "120%",
                            "--framer-text-alignment": "left",
                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                          },
                          children: "$10,600.00"
                        })}</React2.Fragment>
                    }
                  }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsx2(motion2.p, {
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBCb2xk",
                          "--framer-font-family": '"Haffer Bold", "Haffer Bold Placeholder", sans-serif',
                          "--framer-font-size": "18px",
                          "--framer-line-height": "120%",
                          "--framer-text-alignment": "left",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66)))"
                        },
                        children: "$9,850.00"
                      })}</React2.Fragment>}</RichText>, _jsx2(motion2.div, {
                    className: "framer-p2cua9",
                    layoutDependency,
                    layoutId: "zTLL_g3_bkuQFNhYQi",
                    children: <RichText __fromCanvasComponent className="framer-13jonfh" data-framer-name="Delivery" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="zTLL_g3_bcmpZUk5hC" style={{
                      "--extracted-r6o4lv": "var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143))",
                      "--framer-paragraph-spacing": "2.5446794033050537px"
                    }} verticalAlignment="top" withExternalLayout {...addPropertyOverrides({
                      cJ_ETOfI0: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                              "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                              "--framer-font-size": "12px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "left",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)))"
                            },
                            children: "Due in 90 days"
                          })}</React2.Fragment>
                      },
                      uln0CdeSq: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                              "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                              "--framer-font-size": "12px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "left",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)))"
                            },
                            children: "Due in 15 days"
                          })}</React2.Fragment>
                      },
                      vXIgZ_zWs: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                              "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                              "--framer-font-size": "12px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "left",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)))"
                            },
                            children: "Due in 15 days"
                          })}</React2.Fragment>
                      },
                      ymrABKbDJ: {
                        children: <React2.Fragment>{_jsx2(motion2.p, {
                            style: {
                              "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                              "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                              "--framer-font-size": "12px",
                              "--framer-line-height": "120%",
                              "--framer-text-alignment": "left",
                              "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)))"
                            },
                            children: "Due in 90 days"
                          })}</React2.Fragment>
                      }
                    }, baseVariant, gestureVariant)}>{<React2.Fragment>{_jsx2(motion2.p, {
                          style: {
                            "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                            "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                            "--framer-font-size": "12px",
                            "--framer-line-height": "120%",
                            "--framer-text-alignment": "left",
                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6fd3de1e-1b13-4bd5-b721-6a4a53348221, rgb(119, 111, 143)))"
                          },
                          children: "Due today"
                        })}</React2.Fragment>}</RichText>
                  })]
                }), _jsx2(motion2.div, {
                  className: "framer-1gaxbfb",
                  layoutDependency,
                  layoutId: "zTLL_g3_bNkna8OGme",
                  style: {
                    backgroundColor: "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(34, 23, 66))",
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4,
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4
                  },
                  children: <RichText __fromCanvasComponent className="framer-18shrx9" data-framer-name="Delivery" fonts={["CUSTOM;Haffer Regular"]} layoutDependency={layoutDependency} layoutId="zTLL_g3_blL2bAcTs2" style={{
                    "--extracted-r6o4lv": "var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248))",
                    "--framer-paragraph-spacing": "2.5446794033050537px"
                  }} verticalAlignment="top" withExternalLayout>{<React2.Fragment>{_jsx2(motion2.p, {
                        style: {
                          "--font-selector": "Q1VTVE9NO0hhZmZlciBSZWd1bGFy",
                          "--framer-font-family": '"Haffer Regular", "Haffer Regular Placeholder", sans-serif',
                          "--framer-font-size": "12px",
                          "--framer-line-height": "120%",
                          "--framer-text-alignment": "left",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-fc055746-14f5-4ad8-a648-dc72569c723d, rgb(246, 246, 248)))"
                        },
                        children: "Set Terms"
                      })}</React2.Fragment>}</RichText>
                })]
              })]
            })
          })
        })}</Transition>}</Variants>}</LayoutGroup>;
});
var css2 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-iRkKX.framer-1dpst41, .framer-iRkKX .framer-1dpst41 { display: block; }", ".framer-iRkKX.framer-1gn4yr9 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 431px; }", ".framer-iRkKX .framer-lcmuvl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 16px; position: relative; width: 431px; }", ".framer-iRkKX .framer-c5gro1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 10px; position: relative; width: 399px; will-change: var(--framer-will-change-override, transform); }", ".framer-iRkKX .framer-1n3ihkn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-iRkKX .framer-99xisx { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 219px; }", ".framer-iRkKX .framer-14i6lma { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 66px; word-break: break-word; word-wrap: break-word; }", ".framer-iRkKX .framer-1swqnx3 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 219px; word-break: break-word; word-wrap: break-word; }", ".framer-iRkKX .framer-16olo0s { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 34px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 34px; will-change: var(--framer-will-change-override, transform); }", ".framer-iRkKX .framer-1iq8z1b { flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }", ".framer-iRkKX .framer-8mmhbr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-iRkKX .framer-blbvy8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-iRkKX .framer-11huqcw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 8px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 80%; }", ".framer-iRkKX .framer-19zqxc { flex: none; height: 100%; overflow: hidden; position: relative; width: 0%; will-change: var(--framer-will-change-override, transform); }", ".framer-iRkKX .framer-n78mak { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 16px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 0px; }", ".framer-iRkKX .framer-77lbcg { height: 16px; position: relative; width: 16px; }", ".framer-iRkKX .framer-21szq0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 43px; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-iRkKX .framer-1o28xg5, .framer-iRkKX .framer-dfkdw9, .framer-iRkKX .framer-m1vopw, .framer-iRkKX .framer-3tvwr1, .framer-iRkKX .framer-6axuu4 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }", ".framer-iRkKX .framer-1d9b4gt, .framer-iRkKX .framer-n9uwzx, .framer-iRkKX .framer-gucnk8, .framer-iRkKX .framer-1bikhx1, .framer-iRkKX .framer-1s7p9g7, .framer-iRkKX .framer-r3wg6p, .framer-iRkKX .framer-1gkyklh, .framer-iRkKX .framer-htmay7, .framer-iRkKX .framer-m4i0jz, .framer-iRkKX .framer-1ysmiqb, .framer-iRkKX .framer-b0u6bi, .framer-iRkKX .framer-240wfk, .framer-iRkKX .framer-1ag1g73, .framer-iRkKX .framer-1ph6uy3, .framer-iRkKX .framer-9yiqb3, .framer-iRkKX .framer-13jonfh { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-iRkKX .framer-1ei934k { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 20px 0px 0px 0px; position: relative; width: 100%; }", ".framer-iRkKX .framer-a06kk0 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: 1px; }", ".framer-iRkKX .framer-1nhwcyt { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 105px; word-break: break-word; word-wrap: break-word; }", ".framer-iRkKX .framer-p2cua9 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 1px 0px; position: relative; width: 100%; }", ".framer-iRkKX .framer-1gaxbfb { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 10px; position: relative; width: min-content; }", ".framer-iRkKX .framer-18shrx9 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-iRkKX.framer-v-1vns9ir .framer-19zqxc, .framer-iRkKX.framer-v-b5y86m .framer-19zqxc { width: 25%; }", ".framer-iRkKX.framer-v-v58h3n .framer-19zqxc, .framer-iRkKX.framer-v-hvatz0 .framer-19zqxc { width: 75%; }", ".framer-iRkKX.framer-v-k6qia9.framer-1gn4yr9, .framer-iRkKX.framer-v-b5y86m.framer-1gn4yr9, .framer-iRkKX.framer-v-hvatz0.framer-1gn4yr9 { height: 200px; width: 320px; }", ".framer-iRkKX.framer-v-k6qia9 .framer-lcmuvl, .framer-iRkKX.framer-v-b5y86m .framer-lcmuvl, .framer-iRkKX.framer-v-hvatz0 .framer-lcmuvl { flex: 1 0 0px; height: 100%; padding: 8px; width: 1px; }", ".framer-iRkKX.framer-v-k6qia9 .framer-c5gro1, .framer-iRkKX.framer-v-b5y86m .framer-c5gro1, .framer-iRkKX.framer-v-hvatz0 .framer-c5gro1 { flex: 1 0 0px; gap: unset; height: 1px; justify-content: space-between; padding: 4px 8px 8px 8px; width: 100%; }", ".framer-iRkKX.framer-v-k6qia9 .framer-99xisx { flex: 1 0 0px; width: 1px; }", ".framer-iRkKX.framer-v-k6qia9 .framer-77lbcg, .framer-iRkKX.framer-v-b5y86m .framer-77lbcg, .framer-iRkKX.framer-v-hvatz0 .framer-77lbcg { height: 12px; width: 12px; }", ".framer-iRkKX.framer-v-k6qia9 .framer-1ei934k, .framer-iRkKX.framer-v-b5y86m .framer-1ei934k, .framer-iRkKX.framer-v-hvatz0 .framer-1ei934k { padding: 8px 0px 0px 0px; }", '.framer-iRkKX[data-border="true"]::after, .framer-iRkKX [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }'];
var FramerG7V81eT9D = withCSS2(Component2, css2, "framer-iRkKX");
var G7V81eT9D_default = FramerG7V81eT9D;
FramerG7V81eT9D.displayName = "mockup terms";
FramerG7V81eT9D.defaultProps = {
  height: 254,
  width: 431
};
addPropertyControls2(FramerG7V81eT9D, {
  variant: {
    options: ["zTLL_g3_b", "vXIgZ_zWs", "cJ_ETOfI0", "WmXwkozqk", "uln0CdeSq", "ymrABKbDJ"],
    optionTitles: ["desk", "Variant 2", "Variant 3", "phone", "Variant 5", "Variant 6"],
    title: "Variant",
    type: ControlType2.Enum
  }
});
addFonts(FramerG7V81eT9D, [{
  explicitInter: true,
  fonts: [{
    cssFamilyName: "Haffer Bold",
    source: "custom",
    style: "normal",
    uiFamilyName: "Haffer",
    url: "https://framerusercontent.com/assets/eRqmC6W9PktN8mUcnwel9B6wmPs.woff",
    weight: "790"
  }, {
    cssFamilyName: "Haffer Regular",
    source: "custom",
    style: "normal",
    uiFamilyName: "Haffer",
    url: "https://framerusercontent.com/assets/tAGQcvN09kwW2QjPLqLO197UqBQ.woff",
    weight: "430"
  }]
}, ...CloseFonts], {
  supportsExplicitInterCodegen: true
});
var __FramerMetadata__ = {
  "exports": {
    "default": {
      "type": "reactComponent",
      "name": "FramerG7V81eT9D",
      "slots": [],
      "annotations": {
        "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"vXIgZ_zWs":{"layout":["fixed","auto"]},"cJ_ETOfI0":{"layout":["fixed","auto"]},"WmXwkozqk":{"layout":["fixed","fixed"]},"uln0CdeSq":{"layout":["fixed","fixed"]},"ymrABKbDJ":{"layout":["fixed","fixed"]}}}',
        "framerAutoSizeImages": "true",
        "framerImmutableVariables": "true",
        "framerIntrinsicHeight": "254",
        "framerColorSyntax": "true",
        "framerIntrinsicWidth": "431",
        "framerDisplayContentsDiv": "false",
        "framerComponentViewportWidth": "true",
        "framerContractVersion": "1"
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
var _OriginalComponent = G7V81eT9D_default;
function MockuptermsWrapped(props) {
  var _variant = useVariant(props.variant);
  var _inner = (_variant !== undefined) ? { ...props, variant: _variant } : props;
  return _ctxJsx(ContextProviders, { children: _ctxJsx(_OriginalComponent, _inner) });
}
Object.assign(MockuptermsWrapped, _OriginalComponent);
export {  __FramerMetadata__,  MockuptermsWrapped as default   };