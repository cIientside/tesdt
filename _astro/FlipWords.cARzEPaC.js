import {r as x} from "./index.DhYZZe0J.js";
var Us = {
    exports: {}
}
  , oe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wr = x
  , Tr = Symbol.for("react.element")
  , Pr = Symbol.for("react.fragment")
  , Sr = Object.prototype.hasOwnProperty
  , Cr = wr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , Ar = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function zs(t, e, n) {
    var s, i = {}, o = null, r = null;
    n !== void 0 && (o = "" + n),
    e.key !== void 0 && (o = "" + e.key),
    e.ref !== void 0 && (r = e.ref);
    for (s in e)
        Sr.call(e, s) && !Ar.hasOwnProperty(s) && (i[s] = e[s]);
    if (t && t.defaultProps)
        for (s in e = t.defaultProps,
        e)
            i[s] === void 0 && (i[s] = e[s]);
    return {
        $$typeof: Tr,
        type: t,
        key: o,
        ref: r,
        props: i,
        _owner: Cr.current
    }
}
oe.Fragment = Pr;
oe.jsx = zs;
oe.jsxs = zs;
Us.exports = oe;
var _ = Us.exports;
const He = x.createContext({
    transformPagePoint: t => t,
    isStatic: !1,
    reducedMotion: "never"
})
  , ae = x.createContext({})
  , le = x.createContext(null)
  , Xe = typeof window < "u"
  , Ws = Xe ? x.useLayoutEffect : x.useEffect
  , Gs = x.createContext({
    strict: !1
})
  , ce = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , Vr = "framerAppearId"
  , Ks = "data-" + ce(Vr)
  , Mr = {
    skipAnimations: !1,
    useManualTiming: !1
};
function Rr(t) {
    let e = new Set
      , n = new Set
      , s = !1
      , i = !1;
    const o = new WeakSet;
    let r = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };
    function a(c) {
        o.has(c) && (l.schedule(c),
        t()),
        c(r)
    }
    const l = {
        schedule: (c, h=!1, u=!1) => {
            const f = u && s ? e : n;
            return h && o.add(c),
            f.has(c) || f.add(c),
            c
        }
        ,
        cancel: c => {
            n.delete(c),
            o.delete(c)
        }
        ,
        process: c => {
            if (r = c,
            s) {
                i = !0;
                return
            }
            s = !0,
            [e,n] = [n, e],
            n.clear(),
            e.forEach(a),
            s = !1,
            i && (i = !1,
            l.process(c))
        }
    };
    return l
}
const Ht = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"]
  , Dr = 40;
function $s(t, e) {
    let n = !1
      , s = !0;
    const i = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , o = () => n = !0
      , r = Ht.reduce( (m, v) => (m[v] = Rr(o),
    m), {})
      , {read: a, resolveKeyframes: l, update: c, preRender: h, render: u, postRender: d} = r
      , f = () => {
        const m = performance.now();
        n = !1,
        i.delta = s ? 1e3 / 60 : Math.max(Math.min(m - i.timestamp, Dr), 1),
        i.timestamp = m,
        i.isProcessing = !0,
        a.process(i),
        l.process(i),
        c.process(i),
        h.process(i),
        u.process(i),
        d.process(i),
        i.isProcessing = !1,
        n && e && (s = !1,
        t(f))
    }
      , p = () => {
        n = !0,
        s = !0,
        i.isProcessing || t(f)
    }
    ;
    return {
        schedule: Ht.reduce( (m, v) => {
            const b = r[v];
            return m[v] = (w, P=!1, R=!1) => (n || p(),
            b.schedule(w, P, R)),
            m
        }
        , {}),
        cancel: m => {
            for (let v = 0; v < Ht.length; v++)
                r[Ht[v]].cancel(m)
        }
        ,
        state: i,
        steps: r
    }
}
const {schedule: Ye, cancel: Fu} = $s(queueMicrotask, !1);
function yt(t) {
    return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current")
}
const Hs = x.createContext({});
let Sn = !1;
function Er(t, e, n, s, i) {
    var o;
    const {visualElement: r} = x.useContext(ae)
      , a = x.useContext(Gs)
      , l = x.useContext(le)
      , c = x.useContext(He).reducedMotion
      , h = x.useRef();
    s = s || a.renderer,
    !h.current && s && (h.current = s(t, {
        visualState: e,
        parent: r,
        props: n,
        presenceContext: l,
        blockInitialAnimation: l ? l.initial === !1 : !1,
        reducedMotionConfig: c
    }));
    const u = h.current
      , d = x.useContext(Hs);
    u && !u.projection && i && (u.type === "html" || u.type === "svg") && kr(h.current, n, i, d),
    x.useInsertionEffect( () => {
        u && u.update(n, l)
    }
    );
    const f = n[Ks]
      , p = x.useRef(!!f && !window.MotionHandoffIsComplete && ((o = window.MotionHasOptimisedAnimation) === null || o === void 0 ? void 0 : o.call(window, f)));
    return Ws( () => {
        u && (u.updateFeatures(),
        Ye.render(u.render),
        p.current && u.animationState && u.animationState.animateChanges())
    }
    ),
    x.useEffect( () => {
        u && (!p.current && u.animationState && u.animationState.animateChanges(),
        p.current = !1,
        Sn || (Sn = !0,
        queueMicrotask(Lr)))
    }
    ),
    u
}
function Lr() {
    window.MotionHandoffIsComplete = !0
}
function kr(t, e, n, s) {
    const {layoutId: i, layout: o, drag: r, dragConstraints: a, layoutScroll: l, layoutRoot: c} = e;
    t.projection = new n(t.latestValues,e["data-framer-portal-id"] ? void 0 : Xs(t.parent)),
    t.projection.setOptions({
        layoutId: i,
        layout: o,
        alwaysMeasureLayout: !!r || a && yt(a),
        visualElement: t,
        animationType: typeof o == "string" ? o : "both",
        initialPromotionConfig: s,
        layoutScroll: l,
        layoutRoot: c
    })
}
function Xs(t) {
    if (t)
        return t.options.allowProjection !== !1 ? t.projection : Xs(t.parent)
}
function Fr(t, e, n) {
    return x.useCallback(s => {
        s && t.mount && t.mount(s),
        e && (s ? e.mount(s) : e.unmount()),
        n && (typeof n == "function" ? n(s) : yt(n) && (n.current = s))
    }
    , [e])
}
function It(t) {
    return typeof t == "string" || Array.isArray(t)
}
function Ot(t) {
    return t !== null && typeof t == "object" && typeof t.start == "function"
}
const qe = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , Ze = ["initial", ...qe];
function ue(t) {
    return Ot(t.animate) || Ze.some(e => It(t[e]))
}
function Ys(t) {
    return !!(ue(t) || t.variants)
}
function jr(t, e) {
    if (ue(t)) {
        const {initial: n, animate: s} = t;
        return {
            initial: n === !1 || It(n) ? n : void 0,
            animate: It(s) ? s : void 0
        }
    }
    return t.inherit !== !1 ? e : {}
}
function Br(t) {
    const {initial: e, animate: n} = jr(t, x.useContext(ae));
    return x.useMemo( () => ({
        initial: e,
        animate: n
    }), [Cn(e), Cn(n)])
}
function Cn(t) {
    return Array.isArray(t) ? t.join(" ") : t
}
const An = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , Pt = {};
for (const t in An)
    Pt[t] = {
        isEnabled: e => An[t].some(n => !!e[n])
    };
function Ir(t) {
    for (const e in t)
        Pt[e] = {
            ...Pt[e],
            ...t[e]
        }
}
const Je = x.createContext({})
  , Or = Symbol.for("motionComponentSymbol")
  , O = t => t;
let Ee = O;
function Nr({preloadedFeatures: t, createVisualElement: e, useRender: n, useVisualState: s, Component: i}) {
    t && Ir(t);
    function o(a, l) {
        let c;
        const h = {
            ...x.useContext(He),
            ...a,
            layoutId: _r(a)
        }
          , {isStatic: u} = h
          , d = Br(a)
          , f = s(a, u);
        if (!u && Xe) {
            Ur();
            const p = zr(h);
            c = p.MeasureLayout,
            d.visualElement = Er(i, f, h, e, p.ProjectionNode)
        }
        return _.jsxs(ae.Provider, {
            value: d,
            children: [c && d.visualElement ? _.jsx(c, {
                visualElement: d.visualElement,
                ...h
            }) : null, n(i, a, Fr(f, d.visualElement, l), f, u, d.visualElement)]
        })
    }
    const r = x.forwardRef(o);
    return r[Or] = i,
    r
}
function _r({layoutId: t}) {
    const e = x.useContext(Je).id;
    return e && t !== void 0 ? e + "-" + t : t
}
function Ur(t, e) {
    x.useContext(Gs).strict
}
function zr(t) {
    const {drag: e, layout: n} = Pt;
    if (!e && !n)
        return {};
    const s = {
        ...e,
        ...n
    };
    return {
        MeasureLayout: e?.isEnabled(t) || n?.isEnabled(t) ? s.MeasureLayout : void 0,
        ProjectionNode: s.ProjectionNode
    }
}
function Wr(t) {
    function e(s, i={}) {
        return Nr(t(s, i))
    }
    if (typeof Proxy > "u")
        return e;
    const n = new Map;
    return new Proxy(e,{
        get: (s, i) => (n.has(i) || n.set(i, e(i)),
        n.get(i))
    })
}
const Gr = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function Qe(t) {
    return typeof t != "string" || t.includes("-") ? !1 : !!(Gr.indexOf(t) > -1 || /[A-Z]/u.test(t))
}
const te = {};
function Kr(t) {
    Object.assign(te, t)
}
const zt = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , at = new Set(zt);
function qs(t, {layout: e, layoutId: n}) {
    return at.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!te[t] || t === "opacity")
}
const I = t => !!(t && t.getVelocity)
  , Zs = (t, e) => e && typeof t == "number" ? e.transform(t) : t
  , rt = (t, e, n) => n > e ? e : n < t ? t : n
  , Ct = {
    test: t => typeof t == "number",
    parse: parseFloat,
    transform: t => t
}
  , kt = {
    ...Ct,
    transform: t => rt(0, 1, t)
}
  , Xt = {
    ...Ct,
    default: 1
}
  , Ft = t => Math.round(t * 1e5) / 1e5
  , tn = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu
  , $r = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu
  , Hr = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function Wt(t) {
    return typeof t == "string"
}
function Xr(t) {
    return t == null
}
const Gt = t => ({
    test: e => Wt(e) && e.endsWith(t) && e.split(" ").length === 1,
    parse: parseFloat,
    transform: e => `${e}${t}`
})
  , it = Gt("deg")
  , $ = Gt("%")
  , T = Gt("px")
  , Yr = Gt("vh")
  , qr = Gt("vw")
  , Vn = {
    ...$,
    parse: t => $.parse(t) / 100,
    transform: t => $.transform(t * 100)
}
  , Mn = {
    ...Ct,
    transform: Math.round
}
  , en = {
    borderWidth: T,
    borderTopWidth: T,
    borderRightWidth: T,
    borderBottomWidth: T,
    borderLeftWidth: T,
    borderRadius: T,
    radius: T,
    borderTopLeftRadius: T,
    borderTopRightRadius: T,
    borderBottomRightRadius: T,
    borderBottomLeftRadius: T,
    width: T,
    maxWidth: T,
    height: T,
    maxHeight: T,
    size: T,
    top: T,
    right: T,
    bottom: T,
    left: T,
    padding: T,
    paddingTop: T,
    paddingRight: T,
    paddingBottom: T,
    paddingLeft: T,
    margin: T,
    marginTop: T,
    marginRight: T,
    marginBottom: T,
    marginLeft: T,
    rotate: it,
    rotateX: it,
    rotateY: it,
    rotateZ: it,
    scale: Xt,
    scaleX: Xt,
    scaleY: Xt,
    scaleZ: Xt,
    skew: it,
    skewX: it,
    skewY: it,
    distance: T,
    translateX: T,
    translateY: T,
    translateZ: T,
    x: T,
    y: T,
    z: T,
    perspective: T,
    transformPerspective: T,
    opacity: kt,
    originX: Vn,
    originY: Vn,
    originZ: T,
    zIndex: Mn,
    backgroundPositionX: T,
    backgroundPositionY: T,
    fillOpacity: kt,
    strokeOpacity: kt,
    numOctaves: Mn
}
  , Zr = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , Jr = zt.length;
function Qr(t, e, n) {
    let s = ""
      , i = !0;
    for (let o = 0; o < Jr; o++) {
        const r = zt[o]
          , a = t[r];
        if (a === void 0)
            continue;
        let l = !0;
        if (typeof a == "number" ? l = a === (r.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0,
        !l || n) {
            const c = Zs(a, en[r]);
            if (!l) {
                i = !1;
                const h = Zr[r] || r;
                s += `${h}(${c}) `
            }
            n && (e[r] = c)
        }
    }
    return s = s.trim(),
    n ? s = n(e, i ? "" : s) : i && (s = "none"),
    s
}
const Js = t => e => typeof e == "string" && e.startsWith(t)
  , Qs = Js("--")
  , to = Js("var(--")
  , nn = t => to(t) ? eo.test(t.split("/*")[0].trim()) : !1
  , eo = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function sn(t, e, n) {
    const {style: s, vars: i, transformOrigin: o} = t;
    let r = !1
      , a = !1;
    for (const l in e) {
        const c = e[l];
        if (at.has(l)) {
            r = !0;
            continue
        } else if (Qs(l)) {
            i[l] = c;
            continue
        } else {
            const h = Zs(c, en[l]);
            l.startsWith("origin") ? (a = !0,
            o[l] = h) : s[l] = h
        }
    }
    if (e.transform || (r || n ? s.transform = Qr(e, t.transform, n) : s.transform && (s.transform = "none")),
    a) {
        const {originX: l="50%", originY: c="50%", originZ: h=0} = o;
        s.transformOrigin = `${l} ${c} ${h}`
    }
}
const rn = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function ti(t, e, n) {
    for (const s in e)
        !I(e[s]) && !qs(s, n) && (t[s] = e[s])
}
function no({transformTemplate: t}, e) {
    return x.useMemo( () => {
        const n = rn();
        return sn(n, e, t),
        Object.assign({}, n.vars, n.style)
    }
    , [e])
}
function so(t, e) {
    const n = t.style || {}
      , s = {};
    return ti(s, n, t),
    Object.assign(s, no(t, e)),
    s
}
function io(t, e) {
    const n = {}
      , s = so(t, e);
    return t.drag && t.dragListener !== !1 && (n.draggable = !1,
    s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none",
    s.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`),
    t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0),
    n.style = s,
    n
}
const ro = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function ee(t) {
    return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || ro.has(t)
}
let ei = t => !ee(t);
function oo(t) {
    t && (ei = e => e.startsWith("on") ? !ee(e) : t(e))
}
try {
    oo(require("@emotion/is-prop-valid").default)
} catch {}
function ao(t, e, n) {
    const s = {};
    for (const i in t)
        i === "values" && typeof t.values == "object" || (ei(i) || n === !0 && ee(i) || !e && !ee(i) || t.draggable && i.startsWith("onDrag")) && (s[i] = t[i]);
    return s
}
function Rn(t, e, n) {
    return typeof t == "string" ? t : T.transform(e + n * t)
}
function lo(t, e, n) {
    const s = Rn(e, t.x, t.width)
      , i = Rn(n, t.y, t.height);
    return `${s} ${i}`
}
const co = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , uo = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function ho(t, e, n=1, s=0, i=!0) {
    t.pathLength = 1;
    const o = i ? co : uo;
    t[o.offset] = T.transform(-s);
    const r = T.transform(e)
      , a = T.transform(n);
    t[o.array] = `${r} ${a}`
}
function on(t, {attrX: e, attrY: n, attrScale: s, originX: i, originY: o, pathLength: r, pathSpacing: a=1, pathOffset: l=0, ...c}, h, u) {
    if (sn(t, c, u),
    h) {
        t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
        return
    }
    t.attrs = t.style,
    t.style = {};
    const {attrs: d, style: f, dimensions: p} = t;
    d.transform && (p && (f.transform = d.transform),
    delete d.transform),
    p && (i !== void 0 || o !== void 0 || f.transform) && (f.transformOrigin = lo(p, i !== void 0 ? i : .5, o !== void 0 ? o : .5)),
    e !== void 0 && (d.x = e),
    n !== void 0 && (d.y = n),
    s !== void 0 && (d.scale = s),
    r !== void 0 && ho(d, r, a, l, !1)
}
const ni = () => ({
    ...rn(),
    attrs: {}
})
  , an = t => typeof t == "string" && t.toLowerCase() === "svg";
function fo(t, e, n, s) {
    const i = x.useMemo( () => {
        const o = ni();
        return on(o, e, an(s), t.transformTemplate),
        {
            ...o.attrs,
            style: {
                ...o.style
            }
        }
    }
    , [e]);
    if (t.style) {
        const o = {};
        ti(o, t.style, t),
        i.style = {
            ...o,
            ...i.style
        }
    }
    return i
}
function po(t=!1) {
    return (n, s, i, {latestValues: o}, r) => {
        const l = (Qe(n) ? fo : io)(s, o, r, n)
          , c = ao(s, typeof n == "string", t)
          , h = n !== x.Fragment ? {
            ...c,
            ...l,
            ref: i
        } : {}
          , {children: u} = s
          , d = x.useMemo( () => I(u) ? u.get() : u, [u]);
        return x.createElement(n, {
            ...h,
            children: d
        })
    }
}
function si(t, {style: e, vars: n}, s, i) {
    Object.assign(t.style, e, i && i.getProjectionStyles(s));
    for (const o in n)
        t.style.setProperty(o, n[o])
}
const ii = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function ri(t, e, n, s) {
    si(t, e, void 0, s);
    for (const i in e.attrs)
        t.setAttribute(ii.has(i) ? i : ce(i), e.attrs[i])
}
function ln(t, e, n) {
    var s;
    const {style: i} = t
      , o = {};
    for (const r in i)
        (I(i[r]) || e.style && I(e.style[r]) || qs(r, t) || ((s = n?.getValue(r)) === null || s === void 0 ? void 0 : s.liveStyle) !== void 0) && (o[r] = i[r]);
    return n && i && typeof i.willChange == "string" && (n.applyWillChange = !1),
    o
}
function oi(t, e, n) {
    const s = ln(t, e, n);
    for (const i in t)
        if (I(t[i]) || I(e[i])) {
            const o = zt.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
            s[o] = t[i]
        }
    return s
}
function Dn(t) {
    const e = [{}, {}];
    return t?.values.forEach( (n, s) => {
        e[0][s] = n.get(),
        e[1][s] = n.getVelocity()
    }
    ),
    e
}
function cn(t, e, n, s) {
    if (typeof e == "function") {
        const [i,o] = Dn(s);
        e = e(n !== void 0 ? n : t.custom, i, o)
    }
    if (typeof e == "string" && (e = t.variants && t.variants[e]),
    typeof e == "function") {
        const [i,o] = Dn(s);
        e = e(n !== void 0 ? n : t.custom, i, o)
    }
    return e
}
function un(t) {
    const e = x.useRef(null);
    return e.current === null && (e.current = t()),
    e.current
}
const Le = t => Array.isArray(t)
  , mo = t => !!(t && typeof t == "object" && t.mix && t.toValue)
  , go = t => Le(t) ? t[t.length - 1] || 0 : t;
function Zt(t) {
    const e = I(t) ? t.get() : t;
    return mo(e) ? e.toValue() : e
}
const ai = new Set(["opacity", "clipPath", "filter", "transform"]);
function li(t) {
    if (at.has(t))
        return "transform";
    if (ai.has(t))
        return ce(t)
}
function he(t, e) {
    t.indexOf(e) === -1 && t.push(e)
}
function de(t, e) {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1)
}
function yo({applyWillChange: t=!1, scrapeMotionValuesFromProps: e, createRenderState: n, onMount: s}, i, o, r, a) {
    const l = {
        latestValues: bo(i, o, r, a ? !1 : t, e),
        renderState: n()
    };
    return s && (l.mount = c => s(i, c, l)),
    l
}
const ci = t => (e, n) => {
    const s = x.useContext(ae)
      , i = x.useContext(le)
      , o = () => yo(t, e, s, i, n);
    return n ? o() : un(o)
}
;
function vo(t, e) {
    const n = li(e);
    n && he(t, n)
}
function En(t, e, n) {
    const s = Array.isArray(e) ? e : [e];
    for (let i = 0; i < s.length; i++) {
        const o = cn(t, s[i]);
        if (o) {
            const {transitionEnd: r, transition: a, ...l} = o;
            n(l, r)
        }
    }
}
function bo(t, e, n, s, i) {
    var o;
    const r = {}
      , a = []
      , l = s && ((o = t.style) === null || o === void 0 ? void 0 : o.willChange) === void 0
      , c = i(t, {});
    for (const y in c)
        r[y] = Zt(c[y]);
    let {initial: h, animate: u} = t;
    const d = ue(t)
      , f = Ys(t);
    e && f && !d && t.inherit !== !1 && (h === void 0 && (h = e.initial),
    u === void 0 && (u = e.animate));
    let p = n ? n.initial === !1 : !1;
    p = p || h === !1;
    const g = p ? u : h;
    return g && typeof g != "boolean" && !Ot(g) && En(t, g, (y, m) => {
        for (const v in y) {
            let b = y[v];
            if (Array.isArray(b)) {
                const w = p ? b.length - 1 : 0;
                b = b[w]
            }
            b !== null && (r[v] = b)
        }
        for (const v in m)
            r[v] = m[v]
    }
    ),
    l && (u && h !== !1 && !Ot(u) && En(t, u, y => {
        for (const m in y)
            vo(a, m)
    }
    ),
    a.length && (r.willChange = a.join(","))),
    r
}
const {schedule: A, cancel: et, state: k, steps: ge} = $s(typeof requestAnimationFrame < "u" ? requestAnimationFrame : O, !0)
  , xo = {
    useVisualState: ci({
        scrapeMotionValuesFromProps: oi,
        createRenderState: ni,
        onMount: (t, e, {renderState: n, latestValues: s}) => {
            A.read( () => {
                try {
                    n.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect()
                } catch {
                    n.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }
                }
            }
            ),
            A.render( () => {
                on(n, s, an(e.tagName), t.transformTemplate),
                ri(e, n)
            }
            )
        }
    })
}
  , wo = {
    useVisualState: ci({
        applyWillChange: !0,
        scrapeMotionValuesFromProps: ln,
        createRenderState: rn
    })
};
function To(t, {forwardMotionProps: e=!1}, n, s) {
    return {
        ...Qe(t) ? xo : wo,
        preloadedFeatures: n,
        useRender: po(e),
        createVisualElement: s,
        Component: t
    }
}
function Y(t, e, n, s={
    passive: !0
}) {
    return t.addEventListener(e, n, s),
    () => t.removeEventListener(e, n)
}
const ui = t => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1;
function fe(t, e="page") {
    return {
        point: {
            x: t[`${e}X`],
            y: t[`${e}Y`]
        }
    }
}
const Po = t => e => ui(e) && t(e, fe(e));
function q(t, e, n, s) {
    return Y(t, e, Po(n), s)
}
const So = (t, e) => n => e(t(n))
  , Z = (...t) => t.reduce(So);
function hi(t) {
    let e = null;
    return () => {
        const n = () => {
            e = null
        }
        ;
        return e === null ? (e = t,
        n) : !1
    }
}
const Ln = hi("dragHorizontal")
  , kn = hi("dragVertical");
function di(t) {
    let e = !1;
    if (t === "y")
        e = kn();
    else if (t === "x")
        e = Ln();
    else {
        const n = Ln()
          , s = kn();
        n && s ? e = () => {
            n(),
            s()
        }
        : (n && n(),
        s && s())
    }
    return e
}
function fi() {
    const t = di(!0);
    return t ? (t(),
    !1) : !0
}
class lt {
    constructor(e) {
        this.isMounted = !1,
        this.node = e
    }
    update() {}
}
function Fn(t, e) {
    const n = e ? "pointerenter" : "pointerleave"
      , s = e ? "onHoverStart" : "onHoverEnd"
      , i = (o, r) => {
        if (o.pointerType === "touch" || fi())
            return;
        const a = t.getProps();
        t.animationState && a.whileHover && t.animationState.setActive("whileHover", e);
        const l = a[s];
        l && A.postRender( () => l(o, r))
    }
    ;
    return q(t.current, n, i, {
        passive: !t.getProps()[s]
    })
}
class Co extends lt {
    mount() {
        this.unmount = Z(Fn(this.node, !0), Fn(this.node, !1))
    }
    unmount() {}
}
class Ao extends lt {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let e = !1;
        try {
            e = this.node.current.matches(":focus-visible")
        } catch {
            e = !0
        }
        !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = Z(Y(this.node.current, "focus", () => this.onFocus()), Y(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
const pi = (t, e) => e ? t === e ? !0 : pi(t, e.parentElement) : !1;
function ye(t, e) {
    if (!e)
        return;
    const n = new PointerEvent("pointer" + t);
    e(n, fe(n))
}
class Vo extends lt {
    constructor() {
        super(...arguments),
        this.removeStartListeners = O,
        this.removeEndListeners = O,
        this.removeAccessibleListeners = O,
        this.startPointerPress = (e, n) => {
            if (this.isPressing)
                return;
            this.removeEndListeners();
            const s = this.node.getProps()
              , o = q(window, "pointerup", (a, l) => {
                if (!this.checkPressEnd())
                    return;
                const {onTap: c, onTapCancel: h, globalTapTarget: u} = this.node.getProps()
                  , d = !u && !pi(this.node.current, a.target) ? h : c;
                d && A.update( () => d(a, l))
            }
            , {
                passive: !(s.onTap || s.onPointerUp)
            })
              , r = q(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
                passive: !(s.onTapCancel || s.onPointerCancel)
            });
            this.removeEndListeners = Z(o, r),
            this.startPress(e, n)
        }
        ,
        this.startAccessiblePress = () => {
            const e = o => {
                if (o.key !== "Enter" || this.isPressing)
                    return;
                const r = a => {
                    a.key !== "Enter" || !this.checkPressEnd() || ye("up", (l, c) => {
                        const {onTap: h} = this.node.getProps();
                        h && A.postRender( () => h(l, c))
                    }
                    )
                }
                ;
                this.removeEndListeners(),
                this.removeEndListeners = Y(this.node.current, "keyup", r),
                ye("down", (a, l) => {
                    this.startPress(a, l)
                }
                )
            }
              , n = Y(this.node.current, "keydown", e)
              , s = () => {
                this.isPressing && ye("cancel", (o, r) => this.cancelPress(o, r))
            }
              , i = Y(this.node.current, "blur", s);
            this.removeAccessibleListeners = Z(n, i)
        }
    }
    startPress(e, n) {
        this.isPressing = !0;
        const {onTapStart: s, whileTap: i} = this.node.getProps();
        i && this.node.animationState && this.node.animationState.setActive("whileTap", !0),
        s && A.postRender( () => s(e, n))
    }
    checkPressEnd() {
        return this.removeEndListeners(),
        this.isPressing = !1,
        this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1),
        !fi()
    }
    cancelPress(e, n) {
        if (!this.checkPressEnd())
            return;
        const {onTapCancel: s} = this.node.getProps();
        s && A.postRender( () => s(e, n))
    }
    mount() {
        const e = this.node.getProps()
          , n = q(e.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
            passive: !(e.onTapStart || e.onPointerStart)
        })
          , s = Y(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = Z(n, s)
    }
    unmount() {
        this.removeStartListeners(),
        this.removeEndListeners(),
        this.removeAccessibleListeners()
    }
}
const ke = new WeakMap
  , ve = new WeakMap
  , Mo = t => {
    const e = ke.get(t.target);
    e && e(t)
}
  , Ro = t => {
    t.forEach(Mo)
}
;
function Do({root: t, ...e}) {
    const n = t || document;
    ve.has(n) || ve.set(n, {});
    const s = ve.get(n)
      , i = JSON.stringify(e);
    return s[i] || (s[i] = new IntersectionObserver(Ro,{
        root: t,
        ...e
    })),
    s[i]
}
function Eo(t, e, n) {
    const s = Do(e);
    return ke.set(t, n),
    s.observe(t),
    () => {
        ke.delete(t),
        s.unobserve(t)
    }
}
const Lo = {
    some: 0,
    all: 1
};
class ko extends lt {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: e={}} = this.node.getProps()
          , {root: n, margin: s, amount: i="some", once: o} = e
          , r = {
            root: n ? n.current : void 0,
            rootMargin: s,
            threshold: typeof i == "number" ? i : Lo[i]
        }
          , a = l => {
            const {isIntersecting: c} = l;
            if (this.isInView === c || (this.isInView = c,
            o && !c && this.hasEnteredView))
                return;
            c && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", c);
            const {onViewportEnter: h, onViewportLeave: u} = this.node.getProps()
              , d = c ? h : u;
            d && d(l)
        }
        ;
        return Eo(this.node.current, r, a)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: e, prevProps: n} = this.node;
        ["amount", "margin", "root"].some(Fo(e, n)) && this.startObserver()
    }
    unmount() {}
}
function Fo({viewport: t={}}, {viewport: e={}}={}) {
    return n => t[n] !== e[n]
}
const jo = {
    inView: {
        Feature: ko
    },
    tap: {
        Feature: Vo
    },
    focus: {
        Feature: Ao
    },
    hover: {
        Feature: Co
    }
};
function mi(t, e) {
    if (!Array.isArray(e))
        return !1;
    const n = e.length;
    if (n !== t.length)
        return !1;
    for (let s = 0; s < n; s++)
        if (e[s] !== t[s])
            return !1;
    return !0
}
function pe(t, e, n) {
    const s = t.getProps();
    return cn(s, e, n !== void 0 ? n : s.custom, t)
}
const J = t => t * 1e3
  , Q = t => t / 1e3
  , Bo = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , Io = t => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , Oo = {
    type: "keyframes",
    duration: .8
}
  , No = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , _o = (t, {keyframes: e}) => e.length > 2 ? Oo : at.has(t) ? t.startsWith("scale") ? Io(e[1]) : Bo : No;
function Uo({when: t, delay: e, delayChildren: n, staggerChildren: s, staggerDirection: i, repeat: o, repeatType: r, repeatDelay: a, from: l, elapsed: c, ...h}) {
    return !!Object.keys(h).length
}
function hn(t, e) {
    return t[e] || t.default || t
}
const zo = t => t !== null;
function me(t, {repeat: e, repeatType: n="loop"}, s) {
    const i = t.filter(zo)
      , o = e && n !== "loop" && e % 2 === 1 ? 0 : i.length - 1;
    return !o || s === void 0 ? i[o] : s
}
const gi = t => /^0[^.\s]+$/u.test(t);
function Wo(t) {
    return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || gi(t) : !0
}
const yi = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t)
  , Go = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Ko(t) {
    const e = Go.exec(t);
    if (!e)
        return [, ];
    const [,n,s,i] = e;
    return [`--${n ?? s}`, i]
}
function vi(t, e, n=1) {
    const [s,i] = Ko(t);
    if (!s)
        return;
    const o = window.getComputedStyle(e).getPropertyValue(s);
    if (o) {
        const r = o.trim();
        return yi(r) ? parseFloat(r) : r
    }
    return nn(i) ? vi(i, e, n + 1) : i
}
const $o = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"])
  , jn = t => t === Ct || t === T
  , Bn = (t, e) => parseFloat(t.split(", ")[e])
  , In = (t, e) => (n, {transform: s}) => {
    if (s === "none" || !s)
        return 0;
    const i = s.match(/^matrix3d\((.+)\)$/u);
    if (i)
        return Bn(i[1], e);
    {
        const o = s.match(/^matrix\((.+)\)$/u);
        return o ? Bn(o[1], t) : 0
    }
}
  , Ho = new Set(["x", "y", "z"])
  , Xo = zt.filter(t => !Ho.has(t));
function Yo(t) {
    const e = [];
    return Xo.forEach(n => {
        const s = t.getValue(n);
        s !== void 0 && (e.push([n, s.get()]),
        s.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
    e
}
const St = {
    width: ({x: t}, {paddingLeft: e="0", paddingRight: n="0"}) => t.max - t.min - parseFloat(e) - parseFloat(n),
    height: ({y: t}, {paddingTop: e="0", paddingBottom: n="0"}) => t.max - t.min - parseFloat(e) - parseFloat(n),
    top: (t, {top: e}) => parseFloat(e),
    left: (t, {left: e}) => parseFloat(e),
    bottom: ({y: t}, {top: e}) => parseFloat(e) + (t.max - t.min),
    right: ({x: t}, {left: e}) => parseFloat(e) + (t.max - t.min),
    x: In(4, 13),
    y: In(5, 14)
};
St.translateX = St.x;
St.translateY = St.y;
const bi = t => e => e.test(t)
  , qo = {
    test: t => t === "auto",
    parse: t => t
}
  , xi = [Ct, T, $, it, qr, Yr, qo]
  , On = t => xi.find(bi(t))
  , mt = new Set;
let Fe = !1
  , je = !1;
function wi() {
    if (je) {
        const t = Array.from(mt).filter(s => s.needsMeasurement)
          , e = new Set(t.map(s => s.element))
          , n = new Map;
        e.forEach(s => {
            const i = Yo(s);
            i.length && (n.set(s, i),
            s.render())
        }
        ),
        t.forEach(s => s.measureInitialState()),
        e.forEach(s => {
            s.render();
            const i = n.get(s);
            i && i.forEach( ([o,r]) => {
                var a;
                (a = s.getValue(o)) === null || a === void 0 || a.set(r)
            }
            )
        }
        ),
        t.forEach(s => s.measureEndState()),
        t.forEach(s => {
            s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY)
        }
        )
    }
    je = !1,
    Fe = !1,
    mt.forEach(t => t.complete()),
    mt.clear()
}
function Ti() {
    mt.forEach(t => {
        t.readKeyframes(),
        t.needsMeasurement && (je = !0)
    }
    )
}
function Zo() {
    Ti(),
    wi()
}
class dn {
    constructor(e, n, s, i, o, r=!1) {
        this.isComplete = !1,
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.isScheduled = !1,
        this.unresolvedKeyframes = [...e],
        this.onComplete = n,
        this.name = s,
        this.motionValue = i,
        this.element = o,
        this.isAsync = r
    }
    scheduleResolve() {
        this.isScheduled = !0,
        this.isAsync ? (mt.add(this),
        Fe || (Fe = !0,
        A.read(Ti),
        A.resolveKeyframes(wi))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: e, name: n, element: s, motionValue: i} = this;
        for (let o = 0; o < e.length; o++)
            if (e[o] === null)
                if (o === 0) {
                    const r = i?.get()
                      , a = e[e.length - 1];
                    if (r !== void 0)
                        e[0] = r;
                    else if (s && n) {
                        const l = s.readValue(n, a);
                        l != null && (e[0] = l)
                    }
                    e[0] === void 0 && (e[0] = a),
                    i && r === void 0 && i.set(e[0])
                } else
                    e[o] = e[o - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0,
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
        mt.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1,
        mt.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const fn = (t, e) => n => !!(Wt(n) && Hr.test(n) && n.startsWith(t) || e && !Xr(n) && Object.prototype.hasOwnProperty.call(n, e))
  , Pi = (t, e, n) => s => {
    if (!Wt(s))
        return s;
    const [i,o,r,a] = s.match(tn);
    return {
        [t]: parseFloat(i),
        [e]: parseFloat(o),
        [n]: parseFloat(r),
        alpha: a !== void 0 ? parseFloat(a) : 1
    }
}
  , Jo = t => rt(0, 255, t)
  , be = {
    ...Ct,
    transform: t => Math.round(Jo(t))
}
  , pt = {
    test: fn("rgb", "red"),
    parse: Pi("red", "green", "blue"),
    transform: ({red: t, green: e, blue: n, alpha: s=1}) => "rgba(" + be.transform(t) + ", " + be.transform(e) + ", " + be.transform(n) + ", " + Ft(kt.transform(s)) + ")"
};
function Qo(t) {
    let e = ""
      , n = ""
      , s = ""
      , i = "";
    return t.length > 5 ? (e = t.substring(1, 3),
    n = t.substring(3, 5),
    s = t.substring(5, 7),
    i = t.substring(7, 9)) : (e = t.substring(1, 2),
    n = t.substring(2, 3),
    s = t.substring(3, 4),
    i = t.substring(4, 5),
    e += e,
    n += n,
    s += s,
    i += i),
    {
        red: parseInt(e, 16),
        green: parseInt(n, 16),
        blue: parseInt(s, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const Be = {
    test: fn("#"),
    parse: Qo,
    transform: pt.transform
}
  , vt = {
    test: fn("hsl", "hue"),
    parse: Pi("hue", "saturation", "lightness"),
    transform: ({hue: t, saturation: e, lightness: n, alpha: s=1}) => "hsla(" + Math.round(t) + ", " + $.transform(Ft(e)) + ", " + $.transform(Ft(n)) + ", " + Ft(kt.transform(s)) + ")"
}
  , B = {
    test: t => pt.test(t) || Be.test(t) || vt.test(t),
    parse: t => pt.test(t) ? pt.parse(t) : vt.test(t) ? vt.parse(t) : Be.parse(t),
    transform: t => Wt(t) ? t : t.hasOwnProperty("red") ? pt.transform(t) : vt.transform(t)
};
function ta(t) {
    var e, n;
    return isNaN(t) && Wt(t) && (((e = t.match(tn)) === null || e === void 0 ? void 0 : e.length) || 0) + (((n = t.match($r)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const Si = "number"
  , Ci = "color"
  , ea = "var"
  , na = "var("
  , Nn = "${}"
  , sa = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Nt(t) {
    const e = t.toString()
      , n = []
      , s = {
        color: [],
        number: [],
        var: []
    }
      , i = [];
    let o = 0;
    const a = e.replace(sa, l => (B.test(l) ? (s.color.push(o),
    i.push(Ci),
    n.push(B.parse(l))) : l.startsWith(na) ? (s.var.push(o),
    i.push(ea),
    n.push(l)) : (s.number.push(o),
    i.push(Si),
    n.push(parseFloat(l))),
    ++o,
    Nn)).split(Nn);
    return {
        values: n,
        split: a,
        indexes: s,
        types: i
    }
}
function Ai(t) {
    return Nt(t).values
}
function Vi(t) {
    const {split: e, types: n} = Nt(t)
      , s = e.length;
    return i => {
        let o = "";
        for (let r = 0; r < s; r++)
            if (o += e[r],
            i[r] !== void 0) {
                const a = n[r];
                a === Si ? o += Ft(i[r]) : a === Ci ? o += B.transform(i[r]) : o += i[r]
            }
        return o
    }
}
const ia = t => typeof t == "number" ? 0 : t;
function ra(t) {
    const e = Ai(t);
    return Vi(t)(e.map(ia))
}
const ot = {
    test: ta,
    parse: Ai,
    createTransformer: Vi,
    getAnimatableNone: ra
}
  , oa = new Set(["brightness", "contrast", "saturate", "opacity"]);
function aa(t) {
    const [e,n] = t.slice(0, -1).split("(");
    if (e === "drop-shadow")
        return t;
    const [s] = n.match(tn) || [];
    if (!s)
        return t;
    const i = n.replace(s, "");
    let o = oa.has(e) ? 1 : 0;
    return s !== n && (o *= 100),
    e + "(" + o + i + ")"
}
const la = /\b([a-z-]*)\(.*?\)/gu
  , Ie = {
    ...ot,
    getAnimatableNone: t => {
        const e = t.match(la);
        return e ? e.map(aa).join(" ") : t
    }
}
  , ca = {
    ...en,
    color: B,
    backgroundColor: B,
    outlineColor: B,
    fill: B,
    stroke: B,
    borderColor: B,
    borderTopColor: B,
    borderRightColor: B,
    borderBottomColor: B,
    borderLeftColor: B,
    filter: Ie,
    WebkitFilter: Ie
}
  , pn = t => ca[t];
function Mi(t, e) {
    let n = pn(t);
    return n !== Ie && (n = ot),
    n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
}
const ua = new Set(["auto", "none", "0"]);
function ha(t, e, n) {
    let s = 0, i;
    for (; s < t.length && !i; ) {
        const o = t[s];
        typeof o == "string" && !ua.has(o) && Nt(o).values.length && (i = t[s]),
        s++
    }
    if (i && n)
        for (const o of e)
            t[o] = Mi(n, i)
}
class Ri extends dn {
    constructor(e, n, s, i, o) {
        super(e, n, s, i, o, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: e, element: n, name: s} = this;
        if (!n || !n.current)
            return;
        super.readKeyframes();
        for (let l = 0; l < e.length; l++) {
            let c = e[l];
            if (typeof c == "string" && (c = c.trim(),
            nn(c))) {
                const h = vi(c, n.current);
                h !== void 0 && (e[l] = h),
                l === e.length - 1 && (this.finalKeyframe = c)
            }
        }
        if (this.resolveNoneKeyframes(),
        !$o.has(s) || e.length !== 2)
            return;
        const [i,o] = e
          , r = On(i)
          , a = On(o);
        if (r !== a)
            if (jn(r) && jn(a))
                for (let l = 0; l < e.length; l++) {
                    const c = e[l];
                    typeof c == "string" && (e[l] = parseFloat(c))
                }
            else
                this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: e, name: n} = this
          , s = [];
        for (let i = 0; i < e.length; i++)
            Wo(e[i]) && s.push(i);
        s.length && ha(e, s, n)
    }
    measureInitialState() {
        const {element: e, unresolvedKeyframes: n, name: s} = this;
        if (!e || !e.current)
            return;
        s === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = St[s](e.measureViewportBox(), window.getComputedStyle(e.current)),
        n[0] = this.measuredOrigin;
        const i = n[n.length - 1];
        i !== void 0 && e.getValue(s, i).jump(i, !1)
    }
    measureEndState() {
        var e;
        const {element: n, name: s, unresolvedKeyframes: i} = this;
        if (!n || !n.current)
            return;
        const o = n.getValue(s);
        o && o.jump(this.measuredOrigin, !1);
        const r = i.length - 1
          , a = i[r];
        i[r] = St[s](n.measureViewportBox(), window.getComputedStyle(n.current)),
        a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
        !((e = this.removedTransforms) === null || e === void 0) && e.length && this.removedTransforms.forEach( ([l,c]) => {
            n.getValue(l).set(c)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
function Di(t) {
    let e;
    return () => (e === void 0 && (e = t()),
    e)
}
let Jt;
function da() {
    Jt = void 0
}
const tt = {
    now: () => (Jt === void 0 && tt.set(k.isProcessing || Mr.useManualTiming ? k.timestamp : performance.now()),
    Jt),
    set: t => {
        Jt = t,
        queueMicrotask(da)
    }
}
  , _n = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (ot.test(t) || t === "0") && !t.startsWith("url("));
function fa(t) {
    const e = t[0];
    if (t.length === 1)
        return !0;
    for (let n = 0; n < t.length; n++)
        if (t[n] !== e)
            return !0
}
function pa(t, e, n, s) {
    const i = t[0];
    if (i === null)
        return !1;
    if (e === "display" || e === "visibility")
        return !0;
    const o = t[t.length - 1]
      , r = _n(i, e)
      , a = _n(o, e);
    return !r || !a ? !1 : fa(t) || n === "spring" && s
}
const ma = 40;
class Ei {
    constructor({autoplay: e=!0, delay: n=0, type: s="keyframes", repeat: i=0, repeatDelay: o=0, repeatType: r="loop", ...a}) {
        this.isStopped = !1,
        this.hasAttemptedResolve = !1,
        this.createdAt = tt.now(),
        this.options = {
            autoplay: e,
            delay: n,
            type: s,
            repeat: i,
            repeatDelay: o,
            repeatType: r,
            ...a
        },
        this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt ? this.resolvedAt - this.createdAt > ma ? this.resolvedAt : this.createdAt : this.createdAt
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && Zo(),
        this._resolved
    }
    onKeyframesResolved(e, n) {
        this.resolvedAt = tt.now(),
        this.hasAttemptedResolve = !0;
        const {name: s, type: i, velocity: o, delay: r, onComplete: a, onUpdate: l, isGenerator: c} = this.options;
        if (!c && !pa(e, s, i, o))
            if (r)
                this.options.duration = 0;
            else {
                l?.(me(e, this.options, n)),
                a?.(),
                this.resolveFinishedPromise();
                return
            }
        const h = this.initPlayback(e, n);
        h !== !1 && (this._resolved = {
            keyframes: e,
            finalKeyframe: n,
            ...h
        },
        this.onPostResolved())
    }
    onPostResolved() {}
    then(e, n) {
        return this.currentFinishedPromise.then(e, n)
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(e => {
            this.resolveFinishedPromise = e
        }
        )
    }
}
function Li(t, e) {
    return e ? t * (1e3 / e) : 0
}
const ga = 5;
function ki(t, e, n) {
    const s = Math.max(e - ga, 0);
    return Li(n - t(s), e - s)
}
const xe = .001
  , ya = .01
  , va = 10
  , ba = .05
  , xa = 1;
function wa({duration: t=800, bounce: e=.25, velocity: n=0, mass: s=1}) {
    let i, o, r = 1 - e;
    r = rt(ba, xa, r),
    t = rt(ya, va, Q(t)),
    r < 1 ? (i = c => {
        const h = c * r
          , u = h * t
          , d = h - n
          , f = Oe(c, r)
          , p = Math.exp(-u);
        return xe - d / f * p
    }
    ,
    o = c => {
        const u = c * r * t
          , d = u * n + n
          , f = Math.pow(r, 2) * Math.pow(c, 2) * t
          , p = Math.exp(-u)
          , g = Oe(Math.pow(c, 2), r);
        return (-i(c) + xe > 0 ? -1 : 1) * ((d - f) * p) / g
    }
    ) : (i = c => {
        const h = Math.exp(-c * t)
          , u = (c - n) * t + 1;
        return -xe + h * u
    }
    ,
    o = c => {
        const h = Math.exp(-c * t)
          , u = (n - c) * (t * t);
        return h * u
    }
    );
    const a = 5 / t
      , l = Pa(i, o, a);
    if (t = J(t),
    isNaN(l))
        return {
            stiffness: 100,
            damping: 10,
            duration: t
        };
    {
        const c = Math.pow(l, 2) * s;
        return {
            stiffness: c,
            damping: r * 2 * Math.sqrt(s * c),
            duration: t
        }
    }
}
const Ta = 12;
function Pa(t, e, n) {
    let s = n;
    for (let i = 1; i < Ta; i++)
        s = s - t(s) / e(s);
    return s
}
function Oe(t, e) {
    return t * Math.sqrt(1 - e * e)
}
const Sa = ["duration", "bounce"]
  , Ca = ["stiffness", "damping", "mass"];
function Un(t, e) {
    return e.some(n => t[n] !== void 0)
}
function Aa(t) {
    let e = {
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1,
        ...t
    };
    if (!Un(t, Ca) && Un(t, Sa)) {
        const n = wa(t);
        e = {
            ...e,
            ...n,
            mass: 1
        },
        e.isResolvedFromDuration = !0
    }
    return e
}
function Fi({keyframes: t, restDelta: e, restSpeed: n, ...s}) {
    const i = t[0]
      , o = t[t.length - 1]
      , r = {
        done: !1,
        value: i
    }
      , {stiffness: a, damping: l, mass: c, duration: h, velocity: u, isResolvedFromDuration: d} = Aa({
        ...s,
        velocity: -Q(s.velocity || 0)
    })
      , f = u || 0
      , p = l / (2 * Math.sqrt(a * c))
      , g = o - i
      , y = Q(Math.sqrt(a / c))
      , m = Math.abs(g) < 5;
    n || (n = m ? .01 : 2),
    e || (e = m ? .005 : .5);
    let v;
    if (p < 1) {
        const b = Oe(y, p);
        v = w => {
            const P = Math.exp(-p * y * w);
            return o - P * ((f + p * y * g) / b * Math.sin(b * w) + g * Math.cos(b * w))
        }
    } else if (p === 1)
        v = b => o - Math.exp(-y * b) * (g + (f + y * g) * b);
    else {
        const b = y * Math.sqrt(p * p - 1);
        v = w => {
            const P = Math.exp(-p * y * w)
              , R = Math.min(b * w, 300);
            return o - P * ((f + p * y * g) * Math.sinh(R) + b * g * Math.cosh(R)) / b
        }
    }
    return {
        calculatedDuration: d && h || null,
        next: b => {
            const w = v(b);
            if (d)
                r.done = b >= h;
            else {
                let P = 0;
                p < 1 && (P = b === 0 ? J(f) : ki(v, b, w));
                const R = Math.abs(P) <= n
                  , U = Math.abs(o - w) <= e;
                r.done = R && U
            }
            return r.value = r.done ? o : w,
            r
        }
    }
}
function zn({keyframes: t, velocity: e=0, power: n=.8, timeConstant: s=325, bounceDamping: i=10, bounceStiffness: o=500, modifyTarget: r, min: a, max: l, restDelta: c=.5, restSpeed: h}) {
    const u = t[0]
      , d = {
        done: !1,
        value: u
    }
      , f = C => a !== void 0 && C < a || l !== void 0 && C > l
      , p = C => a === void 0 ? l : l === void 0 || Math.abs(a - C) < Math.abs(l - C) ? a : l;
    let g = n * e;
    const y = u + g
      , m = r === void 0 ? y : r(y);
    m !== y && (g = m - u);
    const v = C => -g * Math.exp(-C / s)
      , b = C => m + v(C)
      , w = C => {
        const F = v(C)
          , j = b(C);
        d.done = Math.abs(F) <= c,
        d.value = d.done ? m : j
    }
    ;
    let P, R;
    const U = C => {
        f(d.value) && (P = C,
        R = Fi({
            keyframes: [d.value, p(d.value)],
            velocity: ki(b, C, d.value),
            damping: i,
            stiffness: o,
            restDelta: c,
            restSpeed: h
        }))
    }
    ;
    return U(0),
    {
        calculatedDuration: null,
        next: C => {
            let F = !1;
            return !R && P === void 0 && (F = !0,
            w(C),
            U(C)),
            P !== void 0 && C >= P ? R.next(C - P) : (!F && w(C),
            d)
        }
    }
}
const ji = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t
  , Va = 1e-7
  , Ma = 12;
function Ra(t, e, n, s, i) {
    let o, r, a = 0;
    do
        r = e + (n - e) / 2,
        o = ji(r, s, i) - t,
        o > 0 ? n = r : e = r;
    while (Math.abs(o) > Va && ++a < Ma);
    return r
}
function Kt(t, e, n, s) {
    if (t === e && n === s)
        return O;
    const i = o => Ra(o, 0, 1, t, n);
    return o => o === 0 || o === 1 ? o : ji(i(o), e, s)
}
const Da = Kt(.42, 0, 1, 1)
  , Ea = Kt(0, 0, .58, 1)
  , Bi = Kt(.42, 0, .58, 1)
  , La = t => Array.isArray(t) && typeof t[0] != "number"
  , Ii = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
  , Oi = t => e => 1 - t(1 - e)
  , mn = t => 1 - Math.sin(Math.acos(t))
  , Ni = Oi(mn)
  , ka = Ii(mn)
  , _i = Kt(.33, 1.53, .69, .99)
  , gn = Oi(_i)
  , Fa = Ii(gn)
  , ja = t => (t *= 2) < 1 ? .5 * gn(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
  , Wn = {
    linear: O,
    easeIn: Da,
    easeInOut: Bi,
    easeOut: Ea,
    circIn: mn,
    circInOut: ka,
    circOut: Ni,
    backIn: gn,
    backInOut: Fa,
    backOut: _i,
    anticipate: ja
}
  , Gn = t => {
    if (Array.isArray(t)) {
        Ee(t.length === 4);
        const [e,n,s,i] = t;
        return Kt(e, n, s, i)
    } else if (typeof t == "string")
        return Ee(Wn[t] !== void 0),
        Wn[t];
    return t
}
  , _t = (t, e, n) => {
    const s = e - t;
    return s === 0 ? 1 : (n - t) / s
}
  , D = (t, e, n) => t + (e - t) * n;
function we(t, e, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
}
function Ba({hue: t, saturation: e, lightness: n, alpha: s}) {
    t /= 360,
    e /= 100,
    n /= 100;
    let i = 0
      , o = 0
      , r = 0;
    if (!e)
        i = o = r = n;
    else {
        const a = n < .5 ? n * (1 + e) : n + e - n * e
          , l = 2 * n - a;
        i = we(l, a, t + 1 / 3),
        o = we(l, a, t),
        r = we(l, a, t - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(o * 255),
        blue: Math.round(r * 255),
        alpha: s
    }
}
function ne(t, e) {
    return n => n > 0 ? e : t
}
const Te = (t, e, n) => {
    const s = t * t
      , i = n * (e * e - s) + s;
    return i < 0 ? 0 : Math.sqrt(i)
}
  , Ia = [Be, pt, vt]
  , Oa = t => Ia.find(e => e.test(t));
function Kn(t) {
    const e = Oa(t);
    if (!e)
        return !1;
    let n = e.parse(t);
    return e === vt && (n = Ba(n)),
    n
}
const $n = (t, e) => {
    const n = Kn(t)
      , s = Kn(e);
    if (!n || !s)
        return ne(t, e);
    const i = {
        ...n
    };
    return o => (i.red = Te(n.red, s.red, o),
    i.green = Te(n.green, s.green, o),
    i.blue = Te(n.blue, s.blue, o),
    i.alpha = D(n.alpha, s.alpha, o),
    pt.transform(i))
}
  , Ne = new Set(["none", "hidden"]);
function Na(t, e) {
    return Ne.has(t) ? n => n <= 0 ? t : e : n => n >= 1 ? e : t
}
function _a(t, e) {
    return n => D(t, e, n)
}
function yn(t) {
    return typeof t == "number" ? _a : typeof t == "string" ? nn(t) ? ne : B.test(t) ? $n : Wa : Array.isArray(t) ? Ui : typeof t == "object" ? B.test(t) ? $n : Ua : ne
}
function Ui(t, e) {
    const n = [...t]
      , s = n.length
      , i = t.map( (o, r) => yn(o)(o, e[r]));
    return o => {
        for (let r = 0; r < s; r++)
            n[r] = i[r](o);
        return n
    }
}
function Ua(t, e) {
    const n = {
        ...t,
        ...e
    }
      , s = {};
    for (const i in n)
        t[i] !== void 0 && e[i] !== void 0 && (s[i] = yn(t[i])(t[i], e[i]));
    return i => {
        for (const o in s)
            n[o] = s[o](i);
        return n
    }
}
function za(t, e) {
    var n;
    const s = []
      , i = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let o = 0; o < e.values.length; o++) {
        const r = e.types[o]
          , a = t.indexes[r][i[r]]
          , l = (n = t.values[a]) !== null && n !== void 0 ? n : 0;
        s[o] = l,
        i[r]++
    }
    return s
}
const Wa = (t, e) => {
    const n = ot.createTransformer(e)
      , s = Nt(t)
      , i = Nt(e);
    return s.indexes.var.length === i.indexes.var.length && s.indexes.color.length === i.indexes.color.length && s.indexes.number.length >= i.indexes.number.length ? Ne.has(t) && !i.values.length || Ne.has(e) && !s.values.length ? Na(t, e) : Z(Ui(za(s, i), i.values), n) : ne(t, e)
}
;
function zi(t, e, n) {
    return typeof t == "number" && typeof e == "number" && typeof n == "number" ? D(t, e, n) : yn(t)(t, e)
}
function Ga(t, e, n) {
    const s = []
      , i = n || zi
      , o = t.length - 1;
    for (let r = 0; r < o; r++) {
        let a = i(t[r], t[r + 1]);
        if (e) {
            const l = Array.isArray(e) ? e[r] || O : e;
            a = Z(l, a)
        }
        s.push(a)
    }
    return s
}
function Ka(t, e, {clamp: n=!0, ease: s, mixer: i}={}) {
    const o = t.length;
    if (Ee(o === e.length),
    o === 1)
        return () => e[0];
    if (o === 2 && t[0] === t[1])
        return () => e[1];
    t[0] > t[o - 1] && (t = [...t].reverse(),
    e = [...e].reverse());
    const r = Ga(e, s, i)
      , a = r.length
      , l = c => {
        let h = 0;
        if (a > 1)
            for (; h < t.length - 2 && !(c < t[h + 1]); h++)
                ;
        const u = _t(t[h], t[h + 1], c);
        return r[h](u)
    }
    ;
    return n ? c => l(rt(t[0], t[o - 1], c)) : l
}
function $a(t, e) {
    const n = t[t.length - 1];
    for (let s = 1; s <= e; s++) {
        const i = _t(0, e, s);
        t.push(D(n, 1, i))
    }
}
function Ha(t) {
    const e = [0];
    return $a(e, t.length - 1),
    e
}
function Xa(t, e) {
    return t.map(n => n * e)
}
function Ya(t, e) {
    return t.map( () => e || Bi).splice(0, t.length - 1)
}
function se({duration: t=300, keyframes: e, times: n, ease: s="easeInOut"}) {
    const i = La(s) ? s.map(Gn) : Gn(s)
      , o = {
        done: !1,
        value: e[0]
    }
      , r = Xa(n && n.length === e.length ? n : Ha(e), t)
      , a = Ka(r, e, {
        ease: Array.isArray(i) ? i : Ya(e, i)
    });
    return {
        calculatedDuration: t,
        next: l => (o.value = a(l),
        o.done = l >= t,
        o)
    }
}
const Hn = 2e4;
function qa(t) {
    let e = 0;
    const n = 50;
    let s = t.next(e);
    for (; !s.done && e < Hn; )
        e += n,
        s = t.next(e);
    return e >= Hn ? 1 / 0 : e
}
const Za = t => {
    const e = ({timestamp: n}) => t(n);
    return {
        start: () => A.update(e, !0),
        stop: () => et(e),
        now: () => k.isProcessing ? k.timestamp : tt.now()
    }
}
  , Ja = {
    decay: zn,
    inertia: zn,
    tween: se,
    keyframes: se,
    spring: Fi
}
  , Qa = t => t / 100;
class vn extends Ei {
    constructor(e) {
        super(e),
        this.holdTime = null,
        this.cancelTime = null,
        this.currentTime = 0,
        this.playbackSpeed = 1,
        this.pendingPlayState = "running",
        this.startTime = null,
        this.state = "idle",
        this.stop = () => {
            if (this.resolver.cancel(),
            this.isStopped = !0,
            this.state === "idle")
                return;
            this.teardown();
            const {onStop: l} = this.options;
            l && l()
        }
        ;
        const {name: n, motionValue: s, element: i, keyframes: o} = this.options
          , r = i?.KeyframeResolver || dn
          , a = (l, c) => this.onKeyframesResolved(l, c);
        this.resolver = new r(o,a,n,s,i),
        this.resolver.scheduleResolve()
    }
    initPlayback(e) {
        const {type: n="keyframes", repeat: s=0, repeatDelay: i=0, repeatType: o, velocity: r=0} = this.options
          , a = Ja[n] || se;
        let l, c;
        a !== se && typeof e[0] != "number" && (l = Z(Qa, zi(e[0], e[1])),
        e = [0, 100]);
        const h = a({
            ...this.options,
            keyframes: e
        });
        o === "mirror" && (c = a({
            ...this.options,
            keyframes: [...e].reverse(),
            velocity: -r
        })),
        h.calculatedDuration === null && (h.calculatedDuration = qa(h));
        const {calculatedDuration: u} = h
          , d = u + i
          , f = d * (s + 1) - i;
        return {
            generator: h,
            mirroredGenerator: c,
            mapPercentToKeyframes: l,
            calculatedDuration: u,
            resolvedDuration: d,
            totalDuration: f
        }
    }
    onPostResolved() {
        const {autoplay: e=!0} = this.options;
        this.play(),
        this.pendingPlayState === "paused" || !e ? this.pause() : this.state = this.pendingPlayState
    }
    tick(e, n=!1) {
        const {resolved: s} = this;
        if (!s) {
            const {keyframes: C} = this.options;
            return {
                done: !0,
                value: C[C.length - 1]
            }
        }
        const {finalKeyframe: i, generator: o, mirroredGenerator: r, mapPercentToKeyframes: a, keyframes: l, calculatedDuration: c, totalDuration: h, resolvedDuration: u} = s;
        if (this.startTime === null)
            return o.next(0);
        const {delay: d, repeat: f, repeatType: p, repeatDelay: g, onUpdate: y} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - h / this.speed, this.startTime)),
        n ? this.currentTime = e : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;
        const m = this.currentTime - d * (this.speed >= 0 ? 1 : -1)
          , v = this.speed >= 0 ? m < 0 : m > h;
        this.currentTime = Math.max(m, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = h);
        let b = this.currentTime
          , w = o;
        if (f) {
            const C = Math.min(this.currentTime, h) / u;
            let F = Math.floor(C)
              , j = C % 1;
            !j && C >= 1 && (j = 1),
            j === 1 && F--,
            F = Math.min(F, f + 1),
            !!(F % 2) && (p === "reverse" ? (j = 1 - j,
            g && (j -= g / u)) : p === "mirror" && (w = r)),
            b = rt(0, 1, j) * u
        }
        const P = v ? {
            done: !1,
            value: l[0]
        } : w.next(b);
        a && (P.value = a(P.value));
        let {done: R} = P;
        !v && c !== null && (R = this.speed >= 0 ? this.currentTime >= h : this.currentTime <= 0);
        const U = this.holdTime === null && (this.state === "finished" || this.state === "running" && R);
        return U && i !== void 0 && (P.value = me(l, this.options, i)),
        y && y(P.value),
        U && this.finish(),
        P
    }
    get duration() {
        const {resolved: e} = this;
        return e ? Q(e.calculatedDuration) : 0
    }
    get time() {
        return Q(this.currentTime)
    }
    set time(e) {
        e = J(e),
        this.currentTime = e,
        this.holdTime !== null || this.speed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(e) {
        const n = this.playbackSpeed !== e;
        this.playbackSpeed = e,
        n && (this.time = Q(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(),
        !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped)
            return;
        const {driver: e=Za, onPlay: n, startTime: s} = this.options;
        this.driver || (this.driver = e(o => this.tick(o))),
        n && n();
        const i = this.driver.now();
        this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = i) : this.startTime = s ?? this.calcStartTime(),
        this.state === "finished" && this.updateFinishedPromise(),
        this.cancelTime = this.startTime,
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        var e;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused",
        this.holdTime = (e = this.currentTime) !== null && e !== void 0 ? e : 0
    }
    complete() {
        this.state !== "running" && this.play(),
        this.pendingPlayState = this.state = "finished",
        this.holdTime = null
    }
    finish() {
        this.teardown(),
        this.state = "finished";
        const {onComplete: e} = this.options;
        e && e()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        this.startTime = this.cancelTime = null,
        this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(e) {
        return this.startTime = 0,
        this.tick(e, !0)
    }
}
const Wi = t => Array.isArray(t) && typeof t[0] == "number";
function Gi(t) {
    return !!(!t || typeof t == "string" && t in bn || Wi(t) || Array.isArray(t) && t.every(Gi))
}
const Et = ([t,e,n,s]) => `cubic-bezier(${t}, ${e}, ${n}, ${s})`
  , bn = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Et([0, .65, .55, 1]),
    circOut: Et([.55, 0, 1, .45]),
    backIn: Et([.31, .01, .66, -.59]),
    backOut: Et([.33, 1.53, .69, .99])
};
function tl(t) {
    return Ki(t) || bn.easeOut
}
function Ki(t) {
    if (t)
        return Wi(t) ? Et(t) : Array.isArray(t) ? t.map(tl) : bn[t]
}
function el(t, e, n, {delay: s=0, duration: i=300, repeat: o=0, repeatType: r="loop", ease: a, times: l}={}) {
    const c = {
        [e]: n
    };
    l && (c.offset = l);
    const h = Ki(a);
    return Array.isArray(h) && (c.easing = h),
    t.animate(c, {
        delay: s,
        duration: i,
        easing: Array.isArray(h) ? "linear" : h,
        fill: "both",
        iterations: o + 1,
        direction: r === "reverse" ? "alternate" : "normal"
    })
}
const nl = Di( () => Object.hasOwnProperty.call(Element.prototype, "animate"))
  , ie = 10
  , sl = 2e4;
function il(t) {
    return t.type === "spring" || !Gi(t.ease)
}
function rl(t, e) {
    const n = new vn({
        ...e,
        keyframes: t,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let s = {
        done: !1,
        value: t[0]
    };
    const i = [];
    let o = 0;
    for (; !s.done && o < sl; )
        s = n.sample(o),
        i.push(s.value),
        o += ie;
    return {
        times: void 0,
        keyframes: i,
        duration: o - ie,
        ease: "linear"
    }
}
class Xn extends Ei {
    constructor(e) {
        super(e);
        const {name: n, motionValue: s, element: i, keyframes: o} = this.options;
        this.resolver = new Ri(o, (r, a) => this.onKeyframesResolved(r, a),n,s,i),
        this.resolver.scheduleResolve()
    }
    initPlayback(e, n) {
        var s;
        let {duration: i=300, times: o, ease: r, type: a, motionValue: l, name: c, startTime: h} = this.options;
        if (!(!((s = l.owner) === null || s === void 0) && s.current))
            return !1;
        if (il(this.options)) {
            const {onComplete: d, onUpdate: f, motionValue: p, element: g, ...y} = this.options
              , m = rl(e, y);
            e = m.keyframes,
            e.length === 1 && (e[1] = e[0]),
            i = m.duration,
            o = m.times,
            r = m.ease,
            a = "keyframes"
        }
        const u = el(l.owner.current, c, e, {
            ...this.options,
            duration: i,
            times: o,
            ease: r
        });
        return u.startTime = h ?? this.calcStartTime(),
        this.pendingTimeline ? (u.timeline = this.pendingTimeline,
        this.pendingTimeline = void 0) : u.onfinish = () => {
            const {onComplete: d} = this.options;
            l.set(me(e, this.options, n)),
            d && d(),
            this.cancel(),
            this.resolveFinishedPromise()
        }
        ,
        {
            animation: u,
            duration: i,
            times: o,
            type: a,
            ease: r,
            keyframes: e
        }
    }
    get duration() {
        const {resolved: e} = this;
        if (!e)
            return 0;
        const {duration: n} = e;
        return Q(n)
    }
    get time() {
        const {resolved: e} = this;
        if (!e)
            return 0;
        const {animation: n} = e;
        return Q(n.currentTime || 0)
    }
    set time(e) {
        const {resolved: n} = this;
        if (!n)
            return;
        const {animation: s} = n;
        s.currentTime = J(e)
    }
    get speed() {
        const {resolved: e} = this;
        if (!e)
            return 1;
        const {animation: n} = e;
        return n.playbackRate
    }
    set speed(e) {
        const {resolved: n} = this;
        if (!n)
            return;
        const {animation: s} = n;
        s.playbackRate = e
    }
    get state() {
        const {resolved: e} = this;
        if (!e)
            return "idle";
        const {animation: n} = e;
        return n.playState
    }
    get startTime() {
        const {resolved: e} = this;
        if (!e)
            return null;
        const {animation: n} = e;
        return n.startTime
    }
    attachTimeline(e) {
        if (!this._resolved)
            this.pendingTimeline = e;
        else {
            const {resolved: n} = this;
            if (!n)
                return O;
            const {animation: s} = n;
            s.timeline = e,
            s.onfinish = null
        }
        return O
    }
    play() {
        if (this.isStopped)
            return;
        const {resolved: e} = this;
        if (!e)
            return;
        const {animation: n} = e;
        n.playState === "finished" && this.updateFinishedPromise(),
        n.play()
    }
    pause() {
        const {resolved: e} = this;
        if (!e)
            return;
        const {animation: n} = e;
        n.pause()
    }
    stop() {
        if (this.resolver.cancel(),
        this.isStopped = !0,
        this.state === "idle")
            return;
        this.resolveFinishedPromise(),
        this.updateFinishedPromise();
        const {resolved: e} = this;
        if (!e)
            return;
        const {animation: n, keyframes: s, duration: i, type: o, ease: r, times: a} = e;
        if (n.playState === "idle" || n.playState === "finished")
            return;
        if (this.time) {
            const {motionValue: c, onUpdate: h, onComplete: u, element: d, ...f} = this.options
              , p = new vn({
                ...f,
                keyframes: s,
                duration: i,
                type: o,
                ease: r,
                times: a,
                isGenerator: !0
            })
              , g = J(this.time);
            c.setWithVelocity(p.sample(g - ie).value, p.sample(g).value, ie)
        }
        const {onStop: l} = this.options;
        l && l(),
        this.cancel()
    }
    complete() {
        const {resolved: e} = this;
        e && e.animation.finish()
    }
    cancel() {
        const {resolved: e} = this;
        e && e.animation.cancel()
    }
    static supports(e) {
        const {motionValue: n, name: s, repeatDelay: i, repeatType: o, damping: r, type: a} = e;
        return nl() && s && ai.has(s) && n && n.owner && n.owner.current instanceof HTMLElement && !n.owner.getProps().onUpdate && !i && o !== "mirror" && r !== 0 && a !== "inertia"
    }
}
function ol(t, e) {
    let n;
    const s = () => {
        const {currentTime: i} = e
          , r = (i === null ? 0 : i.value) / 100;
        n !== r && t(r),
        n = r
    }
    ;
    return A.update(s, !0),
    () => et(s)
}
const al = Di( () => window.ScrollTimeline !== void 0);
class ll {
    constructor(e) {
        this.stop = () => this.runAll("stop"),
        this.animations = e.filter(Boolean)
    }
    then(e, n) {
        return Promise.all(this.animations).then(e).catch(n)
    }
    getAll(e) {
        return this.animations[0][e]
    }
    setAll(e, n) {
        for (let s = 0; s < this.animations.length; s++)
            this.animations[s][e] = n
    }
    attachTimeline(e) {
        const n = this.animations.map(s => {
            if (al() && s.attachTimeline)
                s.attachTimeline(e);
            else
                return s.pause(),
                ol(i => {
                    s.time = s.duration * i
                }
                , e)
        }
        );
        return () => {
            n.forEach( (s, i) => {
                s && s(),
                this.animations[i].stop()
            }
            )
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(e) {
        this.setAll("time", e)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(e) {
        this.setAll("speed", e)
    }
    get startTime() {
        return this.getAll("startTime")
    }
    get duration() {
        let e = 0;
        for (let n = 0; n < this.animations.length; n++)
            e = Math.max(e, this.animations[n].duration);
        return e
    }
    runAll(e) {
        this.animations.forEach(n => n[e]())
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}
const xn = (t, e, n, s={}, i, o, r) => a => {
    const l = hn(s, t) || {}
      , c = l.delay || s.delay || 0;
    let {elapsed: h=0} = s;
    h = h - J(c);
    let u = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: e.getVelocity(),
        ...l,
        delay: -h,
        onUpdate: f => {
            e.set(f),
            l.onUpdate && l.onUpdate(f)
        }
        ,
        onComplete: () => {
            a(),
            l.onComplete && l.onComplete(),
            r && r()
        }
        ,
        onStop: r,
        name: t,
        motionValue: e,
        element: o ? void 0 : i
    };
    Uo(l) || (u = {
        ...u,
        ..._o(t, u)
    }),
    u.duration && (u.duration = J(u.duration)),
    u.repeatDelay && (u.repeatDelay = J(u.repeatDelay)),
    u.from !== void 0 && (u.keyframes[0] = u.from);
    let d = !1;
    if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (u.duration = 0,
    u.delay === 0 && (d = !0)),
    d && !o && e.get() !== void 0) {
        const f = me(u.keyframes, l);
        if (f !== void 0)
            return A.update( () => {
                u.onUpdate(f),
                u.onComplete()
            }
            ),
            new ll([])
    }
    return !o && Xn.supports(u) ? new Xn(u) : new vn(u)
}
;
class wn {
    constructor() {
        this.subscriptions = []
    }
    add(e) {
        return he(this.subscriptions, e),
        () => de(this.subscriptions, e)
    }
    notify(e, n, s) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1)
                this.subscriptions[0](e, n, s);
            else
                for (let o = 0; o < i; o++) {
                    const r = this.subscriptions[o];
                    r && r(e, n, s)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const Yn = 30
  , cl = t => !isNaN(parseFloat(t));
class $i {
    constructor(e, n={}) {
        this.version = "11.3.30",
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = (s, i=!0) => {
            const o = tt.now();
            this.updatedAt !== o && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(s),
            this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
            i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(e),
        this.owner = n.owner
    }
    setCurrent(e) {
        this.current = e,
        this.updatedAt = tt.now(),
        this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = cl(this.current))
    }
    setPrevFrameValue(e=this.current) {
        this.prevFrameValue = e,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(e) {
        return this.on("change", e)
    }
    on(e, n) {
        this.events[e] || (this.events[e] = new wn);
        const s = this.events[e].add(n);
        return e === "change" ? () => {
            s(),
            A.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : s
    }
    clearListeners() {
        for (const e in this.events)
            this.events[e].clear()
    }
    attach(e, n) {
        this.passiveEffect = e,
        this.stopPassiveEffect = n
    }
    set(e, n=!0) {
        !n || !this.passiveEffect ? this.updateAndNotify(e, n) : this.passiveEffect(e, this.updateAndNotify)
    }
    setWithVelocity(e, n, s) {
        this.set(n),
        this.prev = void 0,
        this.prevFrameValue = e,
        this.prevUpdatedAt = this.updatedAt - s
    }
    jump(e, n=!0) {
        this.updateAndNotify(e),
        this.prev = e,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        n && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const e = tt.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Yn)
            return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, Yn);
        return Li(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(e) {
        return this.stop(),
        new Promise(n => {
            this.hasAnimated = !0,
            this.animation = e(n),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function Ut(t, e) {
    return new $i(t,e)
}
function ul(t, e, n) {
    t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, Ut(n))
}
function hl(t, e) {
    const n = pe(t, e);
    let {transitionEnd: s={}, transition: i={}, ...o} = n || {};
    o = {
        ...o,
        ...s
    };
    for (const r in o) {
        const a = go(o[r]);
        ul(t, r, a)
    }
}
function Hi(t) {
    return t.getProps()[Ks]
}
class dl extends $i {
    constructor() {
        super(...arguments),
        this.output = [],
        this.counts = new Map
    }
    add(e) {
        const n = li(e);
        if (!n)
            return;
        const s = this.counts.get(n) || 0;
        this.counts.set(n, s + 1),
        s === 0 && (this.output.push(n),
        this.update());
        let i = !1;
        return () => {
            if (i)
                return;
            i = !0;
            const o = this.counts.get(n) - 1;
            this.counts.set(n, o),
            o === 0 && (de(this.output, n),
            this.update())
        }
    }
    update() {
        this.set(this.output.length ? this.output.join(", ") : "auto")
    }
}
function fl(t) {
    return !!(I(t) && t.add)
}
function _e(t, e) {
    var n;
    if (!t.applyWillChange)
        return;
    let s = t.getValue("willChange");
    if (!s && !(!((n = t.props.style) === null || n === void 0) && n.willChange) && (s = new dl("auto"),
    t.addValue("willChange", s)),
    fl(s))
        return s.add(e)
}
function pl({protectedKeys: t, needsAnimating: e}, n) {
    const s = t.hasOwnProperty(n) && e[n] !== !0;
    return e[n] = !1,
    s
}
function Xi(t, e, {delay: n=0, transitionOverride: s, type: i}={}) {
    var o;
    let {transition: r=t.getDefaultTransition(), transitionEnd: a, ...l} = e;
    s && (r = s);
    const c = []
      , h = i && t.animationState && t.animationState.getState()[i];
    for (const u in l) {
        const d = t.getValue(u, (o = t.latestValues[u]) !== null && o !== void 0 ? o : null)
          , f = l[u];
        if (f === void 0 || h && pl(h, u))
            continue;
        const p = {
            delay: n,
            ...hn(r || {}, u)
        };
        let g = !1;
        if (window.MotionHandoffAnimation) {
            const m = Hi(t);
            if (m) {
                const v = window.MotionHandoffAnimation(m, u, A);
                v !== null && (p.startTime = v,
                g = !0)
            }
        }
        d.start(xn(u, d, f, t.shouldReduceMotion && at.has(u) ? {
            type: !1
        } : p, t, g, _e(t, u)));
        const y = d.animation;
        y && c.push(y)
    }
    return a && Promise.all(c).then( () => {
        A.update( () => {
            a && hl(t, a)
        }
        )
    }
    ),
    c
}
function Ue(t, e, n={}) {
    var s;
    const i = pe(t, e, n.type === "exit" ? (s = t.presenceContext) === null || s === void 0 ? void 0 : s.custom : void 0);
    let {transition: o=t.getDefaultTransition() || {}} = i || {};
    n.transitionOverride && (o = n.transitionOverride);
    const r = i ? () => Promise.all(Xi(t, i, n)) : () => Promise.resolve()
      , a = t.variantChildren && t.variantChildren.size ? (c=0) => {
        const {delayChildren: h=0, staggerChildren: u, staggerDirection: d} = o;
        return ml(t, e, h + c, u, d, n)
    }
    : () => Promise.resolve()
      , {when: l} = o;
    if (l) {
        const [c,h] = l === "beforeChildren" ? [r, a] : [a, r];
        return c().then( () => h())
    } else
        return Promise.all([r(), a(n.delay)])
}
function ml(t, e, n=0, s=0, i=1, o) {
    const r = []
      , a = (t.variantChildren.size - 1) * s
      , l = i === 1 ? (c=0) => c * s : (c=0) => a - c * s;
    return Array.from(t.variantChildren).sort(gl).forEach( (c, h) => {
        c.notify("AnimationStart", e),
        r.push(Ue(c, e, {
            ...o,
            delay: n + l(h)
        }).then( () => c.notify("AnimationComplete", e)))
    }
    ),
    Promise.all(r)
}
function gl(t, e) {
    return t.sortNodePosition(e)
}
function yl(t, e, n={}) {
    t.notify("AnimationStart", e);
    let s;
    if (Array.isArray(e)) {
        const i = e.map(o => Ue(t, o, n));
        s = Promise.all(i)
    } else if (typeof e == "string")
        s = Ue(t, e, n);
    else {
        const i = typeof e == "function" ? pe(t, e, n.custom) : e;
        s = Promise.all(Xi(t, i, n))
    }
    return s.then( () => {
        t.notify("AnimationComplete", e)
    }
    )
}
const vl = [...qe].reverse()
  , bl = qe.length;
function xl(t) {
    return e => Promise.all(e.map( ({animation: n, options: s}) => yl(t, n, s)))
}
function wl(t) {
    let e = xl(t)
      , n = qn()
      , s = !0;
    const i = l => (c, h) => {
        var u;
        const d = pe(t, h, l === "exit" ? (u = t.presenceContext) === null || u === void 0 ? void 0 : u.custom : void 0);
        if (d) {
            const {transition: f, transitionEnd: p, ...g} = d;
            c = {
                ...c,
                ...g,
                ...p
            }
        }
        return c
    }
    ;
    function o(l) {
        e = l(t)
    }
    function r(l) {
        const c = t.getProps()
          , h = t.getVariantContext(!0) || {}
          , u = []
          , d = new Set;
        let f = {}
          , p = 1 / 0;
        for (let y = 0; y < bl; y++) {
            const m = vl[y]
              , v = n[m]
              , b = c[m] !== void 0 ? c[m] : h[m]
              , w = It(b)
              , P = m === l ? v.isActive : null;
            P === !1 && (p = y);
            let R = b === h[m] && b !== c[m] && w;
            if (R && s && t.manuallyAnimateOnMount && (R = !1),
            v.protectedKeys = {
                ...f
            },
            !v.isActive && P === null || !b && !v.prevProp || Ot(b) || typeof b == "boolean")
                continue;
            let C = Tl(v.prevProp, b) || m === l && v.isActive && !R && w || y > p && w
              , F = !1;
            const j = Array.isArray(b) ? b : [b];
            let K = j.reduce(i(m), {});
            P === !1 && (K = {});
            const {prevResolvedValues: V={}} = v
              , $t = {
                ...V,
                ...K
            }
              , ct = L => {
                C = !0,
                d.has(L) && (F = !0,
                d.delete(L)),
                v.needsAnimating[L] = !0;
                const N = t.getValue(L);
                N && (N.liveStyle = !1)
            }
            ;
            for (const L in $t) {
                const N = K[L]
                  , gt = V[L];
                if (f.hasOwnProperty(L))
                    continue;
                let ut = !1;
                Le(N) && Le(gt) ? ut = !mi(N, gt) : ut = N !== gt,
                ut ? N != null ? ct(L) : d.add(L) : N !== void 0 && d.has(L) ? ct(L) : v.protectedKeys[L] = !0
            }
            v.prevProp = b,
            v.prevResolvedValues = K,
            v.isActive && (f = {
                ...f,
                ...K
            }),
            s && t.blockInitialAnimation && (C = !1),
            C && (!R || F) && u.push(...j.map(L => ({
                animation: L,
                options: {
                    type: m
                }
            })))
        }
        if (d.size) {
            const y = {};
            d.forEach(m => {
                const v = t.getBaseTarget(m)
                  , b = t.getValue(m);
                b && (b.liveStyle = !0),
                y[m] = v ?? null
            }
            ),
            u.push({
                animation: y
            })
        }
        let g = !!u.length;
        return s && (c.initial === !1 || c.initial === c.animate) && !t.manuallyAnimateOnMount && (g = !1),
        s = !1,
        g ? e(u) : Promise.resolve()
    }
    function a(l, c) {
        var h;
        if (n[l].isActive === c)
            return Promise.resolve();
        (h = t.variantChildren) === null || h === void 0 || h.forEach(d => {
            var f;
            return (f = d.animationState) === null || f === void 0 ? void 0 : f.setActive(l, c)
        }
        ),
        n[l].isActive = c;
        const u = r(l);
        for (const d in n)
            n[d].protectedKeys = {};
        return u
    }
    return {
        animateChanges: r,
        setActive: a,
        setAnimateFunction: o,
        getState: () => n,
        reset: () => {
            n = qn(),
            s = !0
        }
    }
}
function Tl(t, e) {
    return typeof e == "string" ? e !== t : Array.isArray(e) ? !mi(e, t) : !1
}
function ht(t=!1) {
    return {
        isActive: t,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function qn() {
    return {
        animate: ht(!0),
        whileInView: ht(),
        whileHover: ht(),
        whileTap: ht(),
        whileDrag: ht(),
        whileFocus: ht(),
        exit: ht()
    }
}
class Pl extends lt {
    constructor(e) {
        super(e),
        e.animationState || (e.animationState = wl(e))
    }
    updateAnimationControlsSubscription() {
        const {animate: e} = this.node.getProps();
        Ot(e) && (this.unmountControls = e.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: e} = this.node.getProps()
          , {animate: n} = this.node.prevProps || {};
        e !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var e;
        this.node.animationState.reset(),
        (e = this.unmountControls) === null || e === void 0 || e.call(this)
    }
}
let Sl = 0;
class Cl extends lt {
    constructor() {
        super(...arguments),
        this.id = Sl++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: e, onExitComplete: n} = this.node.presenceContext
          , {isPresent: s} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || e === s)
            return;
        const i = this.node.animationState.setActive("exit", !e);
        n && !e && i.then( () => n(this.id))
    }
    mount() {
        const {register: e} = this.node.presenceContext || {};
        e && (this.unmount = e(this.id))
    }
    unmount() {}
}
const Al = {
    animation: {
        Feature: Pl
    },
    exit: {
        Feature: Cl
    }
}
  , Zn = (t, e) => Math.abs(t - e);
function Vl(t, e) {
    const n = Zn(t.x, e.x)
      , s = Zn(t.y, e.y);
    return Math.sqrt(n ** 2 + s ** 2)
}
class Yi {
    constructor(e, n, {transformPagePoint: s, contextWindow: i, dragSnapToOrigin: o=!1}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const u = Se(this.lastMoveEventInfo, this.history)
              , d = this.startEvent !== null
              , f = Vl(u.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!d && !f)
                return;
            const {point: p} = u
              , {timestamp: g} = k;
            this.history.push({
                ...p,
                timestamp: g
            });
            const {onStart: y, onMove: m} = this.handlers;
            d || (y && y(this.lastMoveEvent, u),
            this.startEvent = this.lastMoveEvent),
            m && m(this.lastMoveEvent, u)
        }
        ,
        this.handlePointerMove = (u, d) => {
            this.lastMoveEvent = u,
            this.lastMoveEventInfo = Pe(d, this.transformPagePoint),
            A.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (u, d) => {
            this.end();
            const {onEnd: f, onSessionEnd: p, resumeAnimation: g} = this.handlers;
            if (this.dragSnapToOrigin && g && g(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const y = Se(u.type === "pointercancel" ? this.lastMoveEventInfo : Pe(d, this.transformPagePoint), this.history);
            this.startEvent && f && f(u, y),
            p && p(u, y)
        }
        ,
        !ui(e))
            return;
        this.dragSnapToOrigin = o,
        this.handlers = n,
        this.transformPagePoint = s,
        this.contextWindow = i || window;
        const r = fe(e)
          , a = Pe(r, this.transformPagePoint)
          , {point: l} = a
          , {timestamp: c} = k;
        this.history = [{
            ...l,
            timestamp: c
        }];
        const {onSessionStart: h} = n;
        h && h(e, Se(a, this.history)),
        this.removeListeners = Z(q(this.contextWindow, "pointermove", this.handlePointerMove), q(this.contextWindow, "pointerup", this.handlePointerUp), q(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(e) {
        this.handlers = e
    }
    end() {
        this.removeListeners && this.removeListeners(),
        et(this.updatePoint)
    }
}
function Pe(t, e) {
    return e ? {
        point: e(t.point)
    } : t
}
function Jn(t, e) {
    return {
        x: t.x - e.x,
        y: t.y - e.y
    }
}
function Se({point: t}, e) {
    return {
        point: t,
        delta: Jn(t, qi(e)),
        offset: Jn(t, Ml(e)),
        velocity: Rl(e, .1)
    }
}
function Ml(t) {
    return t[0]
}
function qi(t) {
    return t[t.length - 1]
}
function Rl(t, e) {
    if (t.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = t.length - 1
      , s = null;
    const i = qi(t);
    for (; n >= 0 && (s = t[n],
    !(i.timestamp - s.timestamp > J(e))); )
        n--;
    if (!s)
        return {
            x: 0,
            y: 0
        };
    const o = Q(i.timestamp - s.timestamp);
    if (o === 0)
        return {
            x: 0,
            y: 0
        };
    const r = {
        x: (i.x - s.x) / o,
        y: (i.y - s.y) / o
    };
    return r.x === 1 / 0 && (r.x = 0),
    r.y === 1 / 0 && (r.y = 0),
    r
}
const Zi = 1e-4
  , Dl = 1 - Zi
  , El = 1 + Zi
  , Ji = .01
  , Ll = 0 - Ji
  , kl = 0 + Ji;
function z(t) {
    return t.max - t.min
}
function Fl(t, e, n) {
    return Math.abs(t - e) <= n
}
function Qn(t, e, n, s=.5) {
    t.origin = s,
    t.originPoint = D(e.min, e.max, t.origin),
    t.scale = z(n) / z(e),
    t.translate = D(n.min, n.max, t.origin) - t.originPoint,
    (t.scale >= Dl && t.scale <= El || isNaN(t.scale)) && (t.scale = 1),
    (t.translate >= Ll && t.translate <= kl || isNaN(t.translate)) && (t.translate = 0)
}
function jt(t, e, n, s) {
    Qn(t.x, e.x, n.x, s ? s.originX : void 0),
    Qn(t.y, e.y, n.y, s ? s.originY : void 0)
}
function ts(t, e, n) {
    t.min = n.min + e.min,
    t.max = t.min + z(e)
}
function jl(t, e, n) {
    ts(t.x, e.x, n.x),
    ts(t.y, e.y, n.y)
}
function es(t, e, n) {
    t.min = e.min - n.min,
    t.max = t.min + z(e)
}
function Bt(t, e, n) {
    es(t.x, e.x, n.x),
    es(t.y, e.y, n.y)
}
function Bl(t, {min: e, max: n}, s) {
    return e !== void 0 && t < e ? t = s ? D(e, t, s.min) : Math.max(t, e) : n !== void 0 && t > n && (t = s ? D(n, t, s.max) : Math.min(t, n)),
    t
}
function ns(t, e, n) {
    return {
        min: e !== void 0 ? t.min + e : void 0,
        max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
    }
}
function Il(t, {top: e, left: n, bottom: s, right: i}) {
    return {
        x: ns(t.x, n, i),
        y: ns(t.y, e, s)
    }
}
function ss(t, e) {
    let n = e.min - t.min
      , s = e.max - t.max;
    return e.max - e.min < t.max - t.min && ([n,s] = [s, n]),
    {
        min: n,
        max: s
    }
}
function Ol(t, e) {
    return {
        x: ss(t.x, e.x),
        y: ss(t.y, e.y)
    }
}
function Nl(t, e) {
    let n = .5;
    const s = z(t)
      , i = z(e);
    return i > s ? n = _t(e.min, e.max - s, t.min) : s > i && (n = _t(t.min, t.max - i, e.min)),
    rt(0, 1, n)
}
function _l(t, e) {
    const n = {};
    return e.min !== void 0 && (n.min = e.min - t.min),
    e.max !== void 0 && (n.max = e.max - t.min),
    n
}
const ze = .35;
function Ul(t=ze) {
    return t === !1 ? t = 0 : t === !0 && (t = ze),
    {
        x: is(t, "left", "right"),
        y: is(t, "top", "bottom")
    }
}
function is(t, e, n) {
    return {
        min: rs(t, e),
        max: rs(t, n)
    }
}
function rs(t, e) {
    return typeof t == "number" ? t : t[e] || 0
}
const os = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , bt = () => ({
    x: os(),
    y: os()
})
  , as = () => ({
    min: 0,
    max: 0
})
  , E = () => ({
    x: as(),
    y: as()
});
function G(t) {
    return [t("x"), t("y")]
}
function Qi({top: t, left: e, right: n, bottom: s}) {
    return {
        x: {
            min: e,
            max: n
        },
        y: {
            min: t,
            max: s
        }
    }
}
function zl({x: t, y: e}) {
    return {
        top: e.min,
        right: t.max,
        bottom: e.max,
        left: t.min
    }
}
function Wl(t, e) {
    if (!e)
        return t;
    const n = e({
        x: t.left,
        y: t.top
    })
      , s = e({
        x: t.right,
        y: t.bottom
    });
    return {
        top: n.y,
        left: n.x,
        bottom: s.y,
        right: s.x
    }
}
function Ce(t) {
    return t === void 0 || t === 1
}
function We({scale: t, scaleX: e, scaleY: n}) {
    return !Ce(t) || !Ce(e) || !Ce(n)
}
function dt(t) {
    return We(t) || tr(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
}
function tr(t) {
    return ls(t.x) || ls(t.y)
}
function ls(t) {
    return t && t !== "0%"
}
function re(t, e, n) {
    const s = t - n
      , i = e * s;
    return n + i
}
function cs(t, e, n, s, i) {
    return i !== void 0 && (t = re(t, i, s)),
    re(t, n, s) + e
}
function Ge(t, e=0, n=1, s, i) {
    t.min = cs(t.min, e, n, s, i),
    t.max = cs(t.max, e, n, s, i)
}
function er(t, {x: e, y: n}) {
    Ge(t.x, e.translate, e.scale, e.originPoint),
    Ge(t.y, n.translate, n.scale, n.originPoint)
}
const us = .999999999999
  , hs = 1.0000000000001;
function Gl(t, e, n, s=!1) {
    const i = n.length;
    if (!i)
        return;
    e.x = e.y = 1;
    let o, r;
    for (let a = 0; a < i; a++) {
        o = n[a],
        r = o.projectionDelta;
        const {visualElement: l} = o.options;
        l && l.props.style && l.props.style.display === "contents" || (s && o.options.layoutScroll && o.scroll && o !== o.root && wt(t, {
            x: -o.scroll.offset.x,
            y: -o.scroll.offset.y
        }),
        r && (e.x *= r.x.scale,
        e.y *= r.y.scale,
        er(t, r)),
        s && dt(o.latestValues) && wt(t, o.latestValues))
    }
    e.x < hs && e.x > us && (e.x = 1),
    e.y < hs && e.y > us && (e.y = 1)
}
function xt(t, e) {
    t.min = t.min + e,
    t.max = t.max + e
}
function ds(t, e, n, s, i=.5) {
    const o = D(t.min, t.max, i);
    Ge(t, e, n, o, s)
}
function wt(t, e) {
    ds(t.x, e.x, e.scaleX, e.scale, e.originX),
    ds(t.y, e.y, e.scaleY, e.scale, e.originY)
}
function nr(t, e) {
    return Qi(Wl(t.getBoundingClientRect(), e))
}
function Kl(t, e, n) {
    const s = nr(t, n)
      , {scroll: i} = e;
    return i && (xt(s.x, i.offset.x),
    xt(s.y, i.offset.y)),
    s
}
const sr = ({current: t}) => t ? t.ownerDocument.defaultView : null
  , $l = new WeakMap;
class Hl {
    constructor(e) {
        this.openGlobalLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = E(),
        this.visualElement = e
    }
    start(e, {snapToCursor: n=!1}={}) {
        const {presenceContext: s} = this.visualElement;
        if (s && s.isPresent === !1)
            return;
        const i = h => {
            const {dragSnapToOrigin: u} = this.getProps();
            u ? this.pauseAnimation() : this.stopAnimation(),
            n && this.snapToCursor(fe(h, "page").point)
        }
          , o = (h, u) => {
            var d;
            const {drag: f, dragPropagation: p, onDragStart: g} = this.getProps();
            if (f && !p && (this.openGlobalLock && this.openGlobalLock(),
            this.openGlobalLock = di(f),
            !this.openGlobalLock))
                return;
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            G(m => {
                let v = this.getAxisMotionValue(m).get() || 0;
                if ($.test(v)) {
                    const {projection: b} = this.visualElement;
                    if (b && b.layout) {
                        const w = b.layout.layoutBox[m];
                        w && (v = z(w) * (parseFloat(v) / 100))
                    }
                }
                this.originPoint[m] = v
            }
            ),
            g && A.postRender( () => g(h, u)),
            (d = this.removeWillChange) === null || d === void 0 || d.call(this),
            this.removeWillChange = _e(this.visualElement, "transform");
            const {animationState: y} = this.visualElement;
            y && y.setActive("whileDrag", !0)
        }
          , r = (h, u) => {
            const {dragPropagation: d, dragDirectionLock: f, onDirectionLock: p, onDrag: g} = this.getProps();
            if (!d && !this.openGlobalLock)
                return;
            const {offset: y} = u;
            if (f && this.currentDirection === null) {
                this.currentDirection = Xl(y),
                this.currentDirection !== null && p && p(this.currentDirection);
                return
            }
            this.updateAxis("x", u.point, y),
            this.updateAxis("y", u.point, y),
            this.visualElement.render(),
            g && g(h, u)
        }
          , a = (h, u) => this.stop(h, u)
          , l = () => G(h => {
            var u;
            return this.getAnimationState(h) === "paused" && ((u = this.getAxisMotionValue(h).animation) === null || u === void 0 ? void 0 : u.play())
        }
        )
          , {dragSnapToOrigin: c} = this.getProps();
        this.panSession = new Yi(e,{
            onSessionStart: i,
            onStart: o,
            onMove: r,
            onSessionEnd: a,
            resumeAnimation: l
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: c,
            contextWindow: sr(this.visualElement)
        })
    }
    stop(e, n) {
        var s;
        (s = this.removeWillChange) === null || s === void 0 || s.call(this);
        const i = this.isDragging;
        if (this.cancel(),
        !i)
            return;
        const {velocity: o} = n;
        this.startAnimation(o);
        const {onDragEnd: r} = this.getProps();
        r && A.postRender( () => r(e, n))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: e, animationState: n} = this.visualElement;
        e && (e.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: s} = this.getProps();
        !s && this.openGlobalLock && (this.openGlobalLock(),
        this.openGlobalLock = null),
        n && n.setActive("whileDrag", !1)
    }
    updateAxis(e, n, s) {
        const {drag: i} = this.getProps();
        if (!s || !Yt(e, i, this.currentDirection))
            return;
        const o = this.getAxisMotionValue(e);
        let r = this.originPoint[e] + s[e];
        this.constraints && this.constraints[e] && (r = Bl(r, this.constraints[e], this.elastic[e])),
        o.set(r)
    }
    resolveConstraints() {
        var e;
        const {dragConstraints: n, dragElastic: s} = this.getProps()
          , i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (e = this.visualElement.projection) === null || e === void 0 ? void 0 : e.layout
          , o = this.constraints;
        n && yt(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = Il(i.layoutBox, n) : this.constraints = !1,
        this.elastic = Ul(s),
        o !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && G(r => {
            this.constraints !== !1 && this.getAxisMotionValue(r) && (this.constraints[r] = _l(i.layoutBox[r], this.constraints[r]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: e, onMeasureDragConstraints: n} = this.getProps();
        if (!e || !yt(e))
            return !1;
        const s = e.current
          , {projection: i} = this.visualElement;
        if (!i || !i.layout)
            return !1;
        const o = Kl(s, i.root, this.visualElement.getTransformPagePoint());
        let r = Ol(i.layout.layoutBox, o);
        if (n) {
            const a = n(zl(r));
            this.hasMutatedConstraints = !!a,
            a && (r = Qi(a))
        }
        return r
    }
    startAnimation(e) {
        const {drag: n, dragMomentum: s, dragElastic: i, dragTransition: o, dragSnapToOrigin: r, onDragTransitionEnd: a} = this.getProps()
          , l = this.constraints || {}
          , c = G(h => {
            if (!Yt(h, n, this.currentDirection))
                return;
            let u = l && l[h] || {};
            r && (u = {
                min: 0,
                max: 0
            });
            const d = i ? 200 : 1e6
              , f = i ? 40 : 1e7
              , p = {
                type: "inertia",
                velocity: s ? e[h] : 0,
                bounceStiffness: d,
                bounceDamping: f,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...o,
                ...u
            };
            return this.startAxisValueAnimation(h, p)
        }
        );
        return Promise.all(c).then(a)
    }
    startAxisValueAnimation(e, n) {
        const s = this.getAxisMotionValue(e);
        return s.start(xn(e, s, 0, n, this.visualElement, !1, _e(this.visualElement, e)))
    }
    stopAnimation() {
        G(e => this.getAxisMotionValue(e).stop())
    }
    pauseAnimation() {
        G(e => {
            var n;
            return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.pause()
        }
        )
    }
    getAnimationState(e) {
        var n;
        return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.state
    }
    getAxisMotionValue(e) {
        const n = `_drag${e.toUpperCase()}`
          , s = this.visualElement.getProps()
          , i = s[n];
        return i || this.visualElement.getValue(e, (s.initial ? s.initial[e] : void 0) || 0)
    }
    snapToCursor(e) {
        G(n => {
            const {drag: s} = this.getProps();
            if (!Yt(n, s, this.currentDirection))
                return;
            const {projection: i} = this.visualElement
              , o = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {min: r, max: a} = i.layout.layoutBox[n];
                o.set(e[n] - D(r, a, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: e, dragConstraints: n} = this.getProps()
          , {projection: s} = this.visualElement;
        if (!yt(n) || !s || !this.constraints)
            return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        G(r => {
            const a = this.getAxisMotionValue(r);
            if (a && this.constraints !== !1) {
                const l = a.get();
                i[r] = Nl({
                    min: l,
                    max: l
                }, this.constraints[r])
            }
        }
        );
        const {transformTemplate: o} = this.visualElement.getProps();
        this.visualElement.current.style.transform = o ? o({}, "") : "none",
        s.root && s.root.updateScroll(),
        s.updateLayout(),
        this.resolveConstraints(),
        G(r => {
            if (!Yt(r, e, null))
                return;
            const a = this.getAxisMotionValue(r)
              , {min: l, max: c} = this.constraints[r];
            a.set(D(l, c, i[r]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        $l.set(this.visualElement, this);
        const e = this.visualElement.current
          , n = q(e, "pointerdown", l => {
            const {drag: c, dragListener: h=!0} = this.getProps();
            c && h && this.start(l)
        }
        )
          , s = () => {
            const {dragConstraints: l} = this.getProps();
            yt(l) && l.current && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: i} = this.visualElement
          , o = i.addEventListener("measure", s);
        i && !i.layout && (i.root && i.root.updateScroll(),
        i.updateLayout()),
        A.read(s);
        const r = Y(window, "resize", () => this.scalePositionWithinConstraints())
          , a = i.addEventListener("didUpdate", ({delta: l, hasLayoutChanged: c}) => {
            this.isDragging && c && (G(h => {
                const u = this.getAxisMotionValue(h);
                u && (this.originPoint[h] += l[h].translate,
                u.set(u.get() + l[h].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return () => {
            r(),
            n(),
            o(),
            a && a()
        }
    }
    getProps() {
        const e = this.visualElement.getProps()
          , {drag: n=!1, dragDirectionLock: s=!1, dragPropagation: i=!1, dragConstraints: o=!1, dragElastic: r=ze, dragMomentum: a=!0} = e;
        return {
            ...e,
            drag: n,
            dragDirectionLock: s,
            dragPropagation: i,
            dragConstraints: o,
            dragElastic: r,
            dragMomentum: a
        }
    }
}
function Yt(t, e, n) {
    return (e === !0 || e === t) && (n === null || n === t)
}
function Xl(t, e=10) {
    let n = null;
    return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"),
    n
}
class Yl extends lt {
    constructor(e) {
        super(e),
        this.removeGroupControls = O,
        this.removeListeners = O,
        this.controls = new Hl(e)
    }
    mount() {
        const {dragControls: e} = this.node.getProps();
        e && (this.removeGroupControls = e.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || O
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const fs = t => (e, n) => {
    t && A.postRender( () => t(e, n))
}
;
class ql extends lt {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = O
    }
    onPointerDown(e) {
        this.session = new Yi(e,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: sr(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: e, onPanStart: n, onPan: s, onPanEnd: i} = this.node.getProps();
        return {
            onSessionStart: fs(e),
            onStart: fs(n),
            onMove: s,
            onEnd: (o, r) => {
                delete this.session,
                i && A.postRender( () => i(o, r))
            }
        }
    }
    mount() {
        this.removePointerDownListener = q(this.node.current, "pointerdown", e => this.onPointerDown(e))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
function Zl() {
    const t = x.useContext(le);
    if (t === null)
        return [!0, null];
    const {isPresent: e, onExitComplete: n, register: s} = t
      , i = x.useId();
    x.useEffect( () => s(i), []);
    const o = x.useCallback( () => n && n(i), [i, n]);
    return !e && n ? [!1, o] : [!0]
}
const Qt = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function ps(t, e) {
    return e.max === e.min ? 0 : t / (e.max - e.min) * 100
}
const Mt = {
    correct: (t, e) => {
        if (!e.target)
            return t;
        if (typeof t == "string")
            if (T.test(t))
                t = parseFloat(t);
            else
                return t;
        const n = ps(t, e.target.x)
          , s = ps(t, e.target.y);
        return `${n}% ${s}%`
    }
}
  , Jl = {
    correct: (t, {treeScale: e, projectionDelta: n}) => {
        const s = t
          , i = ot.parse(t);
        if (i.length > 5)
            return s;
        const o = ot.createTransformer(t)
          , r = typeof i[0] != "number" ? 1 : 0
          , a = n.x.scale * e.x
          , l = n.y.scale * e.y;
        i[0 + r] /= a,
        i[1 + r] /= l;
        const c = D(a, l, .5);
        return typeof i[2 + r] == "number" && (i[2 + r] /= c),
        typeof i[3 + r] == "number" && (i[3 + r] /= c),
        o(i)
    }
};
class Ql extends x.Component {
    componentDidMount() {
        const {visualElement: e, layoutGroup: n, switchLayoutGroup: s, layoutId: i} = this.props
          , {projection: o} = e;
        Kr(tc),
        o && (n.group && n.group.add(o),
        s && s.register && i && s.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        o.setOptions({
            ...o.options,
            onExitComplete: () => this.safeToRemove()
        })),
        Qt.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(e) {
        const {layoutDependency: n, visualElement: s, drag: i, isPresent: o} = this.props
          , r = s.projection;
        return r && (r.isPresent = o,
        i || e.layoutDependency !== n || n === void 0 ? r.willUpdate() : this.safeToRemove(),
        e.isPresent !== o && (o ? r.promote() : r.relegate() || A.postRender( () => {
            const a = r.getStack();
            (!a || !a.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: e} = this.props.visualElement;
        e && (e.root.didUpdate(),
        Ye.postRender( () => {
            !e.currentAnimation && e.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: e, layoutGroup: n, switchLayoutGroup: s} = this.props
          , {projection: i} = e;
        i && (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        s && s.deregister && s.deregister(i))
    }
    safeToRemove() {
        const {safeToRemove: e} = this.props;
        e && e()
    }
    render() {
        return null
    }
}
function ir(t) {
    const [e,n] = Zl()
      , s = x.useContext(Je);
    return _.jsx(Ql, {
        ...t,
        layoutGroup: s,
        switchLayoutGroup: x.useContext(Hs),
        isPresent: e,
        safeToRemove: n
    })
}
const tc = {
    borderRadius: {
        ...Mt,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: Mt,
    borderTopRightRadius: Mt,
    borderBottomLeftRadius: Mt,
    borderBottomRightRadius: Mt,
    boxShadow: Jl
}
  , rr = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , ec = rr.length
  , ms = t => typeof t == "string" ? parseFloat(t) : t
  , gs = t => typeof t == "number" || T.test(t);
function nc(t, e, n, s, i, o) {
    i ? (t.opacity = D(0, n.opacity !== void 0 ? n.opacity : 1, sc(s)),
    t.opacityExit = D(e.opacity !== void 0 ? e.opacity : 1, 0, ic(s))) : o && (t.opacity = D(e.opacity !== void 0 ? e.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, s));
    for (let r = 0; r < ec; r++) {
        const a = `border${rr[r]}Radius`;
        let l = ys(e, a)
          , c = ys(n, a);
        if (l === void 0 && c === void 0)
            continue;
        l || (l = 0),
        c || (c = 0),
        l === 0 || c === 0 || gs(l) === gs(c) ? (t[a] = Math.max(D(ms(l), ms(c), s), 0),
        ($.test(c) || $.test(l)) && (t[a] += "%")) : t[a] = c
    }
    (e.rotate || n.rotate) && (t.rotate = D(e.rotate || 0, n.rotate || 0, s))
}
function ys(t, e) {
    return t[e] !== void 0 ? t[e] : t.borderRadius
}
const sc = or(0, .5, Ni)
  , ic = or(.5, .95, O);
function or(t, e, n) {
    return s => s < t ? 0 : s > e ? 1 : n(_t(t, e, s))
}
function vs(t, e) {
    t.min = e.min,
    t.max = e.max
}
function W(t, e) {
    vs(t.x, e.x),
    vs(t.y, e.y)
}
function bs(t, e) {
    t.translate = e.translate,
    t.scale = e.scale,
    t.originPoint = e.originPoint,
    t.origin = e.origin
}
function xs(t, e, n, s, i) {
    return t -= e,
    t = re(t, 1 / n, s),
    i !== void 0 && (t = re(t, 1 / i, s)),
    t
}
function rc(t, e=0, n=1, s=.5, i, o=t, r=t) {
    if ($.test(e) && (e = parseFloat(e),
    e = D(r.min, r.max, e / 100) - r.min),
    typeof e != "number")
        return;
    let a = D(o.min, o.max, s);
    t === o && (a -= e),
    t.min = xs(t.min, e, n, a, i),
    t.max = xs(t.max, e, n, a, i)
}
function ws(t, e, [n,s,i], o, r) {
    rc(t, e[n], e[s], e[i], e.scale, o, r)
}
const oc = ["x", "scaleX", "originX"]
  , ac = ["y", "scaleY", "originY"];
function Ts(t, e, n, s) {
    ws(t.x, e, oc, n ? n.x : void 0, s ? s.x : void 0),
    ws(t.y, e, ac, n ? n.y : void 0, s ? s.y : void 0)
}
function Ps(t) {
    return t.translate === 0 && t.scale === 1
}
function ar(t) {
    return Ps(t.x) && Ps(t.y)
}
function Ss(t, e) {
    return t.min === e.min && t.max === e.max
}
function lc(t, e) {
    return Ss(t.x, e.x) && Ss(t.y, e.y)
}
function Cs(t, e) {
    return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
}
function lr(t, e) {
    return Cs(t.x, e.x) && Cs(t.y, e.y)
}
function As(t) {
    return z(t.x) / z(t.y)
}
function Vs(t, e) {
    return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
}
class cc {
    constructor() {
        this.members = []
    }
    add(e) {
        he(this.members, e),
        e.scheduleRender()
    }
    remove(e) {
        if (de(this.members, e),
        e === this.prevLead && (this.prevLead = void 0),
        e === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(e) {
        const n = this.members.findIndex(i => e === i);
        if (n === 0)
            return !1;
        let s;
        for (let i = n; i >= 0; i--) {
            const o = this.members[i];
            if (o.isPresent !== !1) {
                s = o;
                break
            }
        }
        return s ? (this.promote(s),
        !0) : !1
    }
    promote(e, n) {
        const s = this.lead;
        if (e !== s && (this.prevLead = s,
        this.lead = e,
        e.show(),
        s)) {
            s.instance && s.scheduleRender(),
            e.scheduleRender(),
            e.resumeFrom = s,
            n && (e.resumeFrom.preserveOpacity = !0),
            s.snapshot && (e.snapshot = s.snapshot,
            e.snapshot.latestValues = s.animationValues || s.latestValues),
            e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            const {crossfade: i} = e.options;
            i === !1 && s.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(e => {
            const {options: n, resumingFrom: s} = e;
            n.onExitComplete && n.onExitComplete(),
            s && s.options.onExitComplete && s.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(e => {
            e.instance && e.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function uc(t, e, n) {
    let s = "";
    const i = t.x.translate / e.x
      , o = t.y.translate / e.y
      , r = n?.z || 0;
    if ((i || o || r) && (s = `translate3d(${i}px, ${o}px, ${r}px) `),
    (e.x !== 1 || e.y !== 1) && (s += `scale(${1 / e.x}, ${1 / e.y}) `),
    n) {
        const {transformPerspective: c, rotate: h, rotateX: u, rotateY: d, skewX: f, skewY: p} = n;
        c && (s = `perspective(${c}px) ${s}`),
        h && (s += `rotate(${h}deg) `),
        u && (s += `rotateX(${u}deg) `),
        d && (s += `rotateY(${d}deg) `),
        f && (s += `skewX(${f}deg) `),
        p && (s += `skewY(${p}deg) `)
    }
    const a = t.x.scale * e.x
      , l = t.y.scale * e.y;
    return (a !== 1 || l !== 1) && (s += `scale(${a}, ${l})`),
    s || "none"
}
const hc = (t, e) => t.depth - e.depth;
class dc {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(e) {
        he(this.children, e),
        this.isDirty = !0
    }
    remove(e) {
        de(this.children, e),
        this.isDirty = !0
    }
    forEach(e) {
        this.isDirty && this.children.sort(hc),
        this.isDirty = !1,
        this.children.forEach(e)
    }
}
function fc(t, e) {
    const n = tt.now()
      , s = ({timestamp: i}) => {
        const o = i - n;
        o >= e && (et(s),
        t(o - e))
    }
    ;
    return A.read(s, !0),
    () => et(s)
}
function pc(t) {
    return t instanceof SVGElement && t.tagName !== "svg"
}
function mc(t, e, n) {
    const s = I(t) ? t : Ut(t);
    return s.start(xn("", s, e, n)),
    s.animation
}
const ft = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
}
  , Lt = typeof window < "u" && window.MotionDebug !== void 0
  , Ae = ["", "X", "Y", "Z"]
  , gc = {
    visibility: "hidden"
}
  , Ms = 1e3;
let yc = 0;
function Ve(t, e, n, s) {
    const {latestValues: i} = e;
    i[t] && (n[t] = i[t],
    e.setStaticValue(t, 0),
    s && (s[t] = 0))
}
function cr(t) {
    if (t.hasCheckedOptimisedAppear = !0,
    t.root === t)
        return;
    const {visualElement: e} = t.options;
    if (!e)
        return;
    const n = Hi(e);
    window.MotionHasOptimisedTransformAnimation(n) && window.MotionCancelOptimisedTransform(n);
    const {parent: s} = t;
    s && !s.hasCheckedOptimisedAppear && cr(s)
}
function ur({attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: s, resetTransform: i}) {
    return class {
        constructor(r={}, a=e?.()) {
            this.id = yc++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                Lt && (ft.totalNodes = ft.resolvedTargetDeltas = ft.recalculatedProjection = 0),
                this.nodes.forEach(xc),
                this.nodes.forEach(Cc),
                this.nodes.forEach(Ac),
                this.nodes.forEach(wc),
                Lt && window.MotionDebug.record(ft)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = r,
            this.root = a ? a.root || a : this,
            this.path = a ? [...a.path, a] : [],
            this.parent = a,
            this.depth = a ? a.depth + 1 : 0;
            for (let l = 0; l < this.path.length; l++)
                this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new dc)
        }
        addEventListener(r, a) {
            return this.eventHandlers.has(r) || this.eventHandlers.set(r, new wn),
            this.eventHandlers.get(r).add(a)
        }
        notifyListeners(r, ...a) {
            const l = this.eventHandlers.get(r);
            l && l.notify(...a)
        }
        hasListeners(r) {
            return this.eventHandlers.has(r)
        }
        mount(r, a=this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = pc(r),
            this.instance = r;
            const {layoutId: l, layout: c, visualElement: h} = this.options;
            if (h && !h.current && h.mount(r),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            a && (c || l) && (this.isLayoutDirty = !0),
            t) {
                let u;
                const d = () => this.root.updateBlockedByResize = !1;
                t(r, () => {
                    this.root.updateBlockedByResize = !0,
                    u && u(),
                    u = fc(d, 250),
                    Qt.hasAnimatedSinceResize && (Qt.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(Ds))
                }
                )
            }
            l && this.root.registerSharedNode(l, this),
            this.options.animate !== !1 && h && (l || c) && this.addEventListener("didUpdate", ({delta: u, hasLayoutChanged: d, hasRelativeTargetChanged: f, layout: p}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const g = this.options.transition || h.getDefaultTransition() || Ec
                  , {onLayoutAnimationStart: y, onLayoutAnimationComplete: m} = h.getProps()
                  , v = !this.targetLayout || !lr(this.targetLayout, p) || f
                  , b = !d && f;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || b || d && (v || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0),
                    this.setAnimationOrigin(u, b);
                    const w = {
                        ...hn(g, "layout"),
                        onPlay: y,
                        onComplete: m
                    };
                    (h.shouldReduceMotion || this.options.layoutRoot) && (w.delay = 0,
                    w.type = !1),
                    this.startAnimation(w)
                } else
                    d || Ds(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = p
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const r = this.getStack();
            r && r.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            et(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(Vc),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: r} = this.options;
            return r && r.getProps().transformTemplate
        }
        willUpdate(r=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedTransform && !this.hasCheckedOptimisedAppear && cr(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let h = 0; h < this.path.length; h++) {
                const u = this.path[h];
                u.shouldResetTransform = !0,
                u.updateScroll("snapshot"),
                u.options.layoutRoot && u.willUpdate(!1)
            }
            const {layoutId: a, layout: l} = this.options;
            if (a === void 0 && !l)
                return;
            const c = this.getTransformTemplate();
            this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            r && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(Rs);
                return
            }
            this.isUpdating || this.nodes.forEach(Pc),
            this.isUpdating = !1,
            this.nodes.forEach(Sc),
            this.nodes.forEach(vc),
            this.nodes.forEach(bc),
            this.clearAllSnapshots();
            const a = tt.now();
            k.delta = rt(0, 1e3 / 60, a - k.timestamp),
            k.timestamp = a,
            k.isProcessing = !0,
            ge.update.process(k),
            ge.preRender.process(k),
            ge.render.process(k),
            k.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            Ye.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(Tc),
            this.sharedNodes.forEach(Mc)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            A.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            A.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++)
                    this.path[l].updateScroll();
            const r = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = E(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: a} = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, r ? r.layoutBox : void 0)
        }
        updateScroll(r="measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === r && (a = !1),
            a) {
                const l = s(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: r,
                    isRoot: l,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : l
                }
            }
        }
        resetTransform() {
            if (!i)
                return;
            const r = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , a = this.projectionDelta && !ar(this.projectionDelta)
              , l = this.getTransformTemplate()
              , c = l ? l(this.latestValues, "") : void 0
              , h = c !== this.prevTransformTemplateValue;
            r && (a || dt(this.latestValues) || h) && (i(this.instance, c),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(r=!0) {
            const a = this.measurePageBox();
            let l = this.removeElementScroll(a);
            return r && (l = this.removeTransform(l)),
            Lc(l),
            {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var r;
            const {visualElement: a} = this.options;
            if (!a)
                return E();
            const l = a.measureViewportBox();
            if (!(((r = this.scroll) === null || r === void 0 ? void 0 : r.wasRoot) || this.path.some(kc))) {
                const {scroll: h} = this.root;
                h && (xt(l.x, h.offset.x),
                xt(l.y, h.offset.y))
            }
            return l
        }
        removeElementScroll(r) {
            var a;
            const l = E();
            if (W(l, r),
            !((a = this.scroll) === null || a === void 0) && a.wasRoot)
                return l;
            for (let c = 0; c < this.path.length; c++) {
                const h = this.path[c]
                  , {scroll: u, options: d} = h;
                h !== this.root && u && d.layoutScroll && (u.wasRoot && W(l, r),
                xt(l.x, u.offset.x),
                xt(l.y, u.offset.y))
            }
            return l
        }
        applyTransform(r, a=!1) {
            const l = E();
            W(l, r);
            for (let c = 0; c < this.path.length; c++) {
                const h = this.path[c];
                !a && h.options.layoutScroll && h.scroll && h !== h.root && wt(l, {
                    x: -h.scroll.offset.x,
                    y: -h.scroll.offset.y
                }),
                dt(h.latestValues) && wt(l, h.latestValues)
            }
            return dt(this.latestValues) && wt(l, this.latestValues),
            l
        }
        removeTransform(r) {
            const a = E();
            W(a, r);
            for (let l = 0; l < this.path.length; l++) {
                const c = this.path[l];
                if (!c.instance || !dt(c.latestValues))
                    continue;
                We(c.latestValues) && c.updateSnapshot();
                const h = E()
                  , u = c.measurePageBox();
                W(h, u),
                Ts(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, h)
            }
            return dt(this.latestValues) && Ts(a, this.latestValues),
            a
        }
        setTargetDelta(r) {
            this.targetDelta = r,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(r) {
            this.options = {
                ...this.options,
                ...r,
                crossfade: r.crossfade !== void 0 ? r.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== k.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(r=!1) {
            var a;
            const l = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
            const c = !!this.resumingFrom || this !== l;
            if (!(r || c && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: u, layoutId: d} = this.options;
            if (!(!this.layout || !(u || d))) {
                if (this.resolvedRelativeTargetAt = k.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const f = this.getClosestProjectingParent();
                    f && f.layout && this.animationProgress !== 1 ? (this.relativeParent = f,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = E(),
                    this.relativeTargetOrigin = E(),
                    Bt(this.relativeTargetOrigin, this.layout.layoutBox, f.layout.layoutBox),
                    W(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = E(),
                    this.targetWithTransforms = E()),
                    this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                    jl(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : W(this.target, this.layout.layoutBox),
                    er(this.target, this.targetDelta)) : W(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const f = this.getClosestProjectingParent();
                        f && !!f.resumingFrom == !!this.resumingFrom && !f.options.layoutScroll && f.target && this.animationProgress !== 1 ? (this.relativeParent = f,
                        this.forceRelativeParentToResolveTarget(),
                        this.relativeTarget = E(),
                        this.relativeTargetOrigin = E(),
                        Bt(this.relativeTargetOrigin, this.target, f.target),
                        W(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    Lt && ft.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || We(this.parent.latestValues) || tr(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var r;
            const a = this.getLead()
              , l = !!this.resumingFrom || this !== a;
            let c = !0;
            if ((this.isProjectionDirty || !((r = this.parent) === null || r === void 0) && r.isProjectionDirty) && (c = !1),
            l && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1),
            this.resolvedRelativeTargetAt === k.timestamp && (c = !1),
            c)
                return;
            const {layout: h, layoutId: u} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(h || u))
                return;
            W(this.layoutCorrected, this.layout.layoutBox);
            const d = this.treeScale.x
              , f = this.treeScale.y;
            Gl(this.layoutCorrected, this.treeScale, this.path, l),
            a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox,
            a.targetWithTransforms = E());
            const {target: p} = a;
            if (!p) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (bs(this.prevProjectionDelta.x, this.projectionDelta.x),
            bs(this.prevProjectionDelta.y, this.projectionDelta.y)),
            jt(this.projectionDelta, this.layoutCorrected, p, this.latestValues),
            (this.treeScale.x !== d || this.treeScale.y !== f || !Vs(this.projectionDelta.x, this.prevProjectionDelta.x) || !Vs(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", p)),
            Lt && ft.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(r=!0) {
            var a;
            if ((a = this.options.visualElement) === null || a === void 0 || a.scheduleRender(),
            r) {
                const l = this.getStack();
                l && l.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = bt(),
            this.projectionDelta = bt(),
            this.projectionDeltaWithTransform = bt()
        }
        setAnimationOrigin(r, a=!1) {
            const l = this.snapshot
              , c = l ? l.latestValues : {}
              , h = {
                ...this.latestValues
            }
              , u = bt();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !a;
            const d = E()
              , f = l ? l.source : void 0
              , p = this.layout ? this.layout.source : void 0
              , g = f !== p
              , y = this.getStack()
              , m = !y || y.members.length <= 1
              , v = !!(g && !m && this.options.crossfade === !0 && !this.path.some(Dc));
            this.animationProgress = 0;
            let b;
            this.mixTargetDelta = w => {
                const P = w / 1e3;
                Es(u.x, r.x, P),
                Es(u.y, r.y, P),
                this.setTargetDelta(u),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Bt(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                Rc(this.relativeTarget, this.relativeTargetOrigin, d, P),
                b && lc(this.relativeTarget, b) && (this.isProjectionDirty = !1),
                b || (b = E()),
                W(b, this.relativeTarget)),
                g && (this.animationValues = h,
                nc(h, c, this.latestValues, P, v, m)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = P
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(r) {
            this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation && (et(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = A.update( () => {
                Qt.hasAnimatedSinceResize = !0,
                this.currentAnimation = mc(0, Ms, {
                    ...r,
                    onUpdate: a => {
                        this.mixTargetDelta(a),
                        r.onUpdate && r.onUpdate(a)
                    }
                    ,
                    onComplete: () => {
                        r.onComplete && r.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const r = this.getStack();
            r && r.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Ms),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const r = this.getLead();
            let {targetWithTransforms: a, target: l, layout: c, latestValues: h} = r;
            if (!(!a || !l || !c)) {
                if (this !== r && this.layout && c && hr(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
                    l = this.target || E();
                    const u = z(this.layout.layoutBox.x);
                    l.x.min = r.target.x.min,
                    l.x.max = l.x.min + u;
                    const d = z(this.layout.layoutBox.y);
                    l.y.min = r.target.y.min,
                    l.y.max = l.y.min + d
                }
                W(a, l),
                wt(a, h),
                jt(this.projectionDeltaWithTransform, this.layoutCorrected, a, h)
            }
        }
        registerSharedNode(r, a) {
            this.sharedNodes.has(r) || this.sharedNodes.set(r, new cc),
            this.sharedNodes.get(r).add(a);
            const c = a.options.initialPromotionConfig;
            a.promote({
                transition: c ? c.transition : void 0,
                preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(a) : void 0
            })
        }
        isLead() {
            const r = this.getStack();
            return r ? r.lead === this : !0
        }
        getLead() {
            var r;
            const {layoutId: a} = this.options;
            return a ? ((r = this.getStack()) === null || r === void 0 ? void 0 : r.lead) || this : this
        }
        getPrevLead() {
            var r;
            const {layoutId: a} = this.options;
            return a ? (r = this.getStack()) === null || r === void 0 ? void 0 : r.prevLead : void 0
        }
        getStack() {
            const {layoutId: r} = this.options;
            if (r)
                return this.root.sharedNodes.get(r)
        }
        promote({needsReset: r, transition: a, preserveFollowOpacity: l}={}) {
            const c = this.getStack();
            c && c.promote(this, l),
            r && (this.projectionDelta = void 0,
            this.needsReset = !0),
            a && this.setOptions({
                transition: a
            })
        }
        relegate() {
            const r = this.getStack();
            return r ? r.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: r} = this.options;
            if (!r)
                return;
            let a = !1;
            const {latestValues: l} = r;
            if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0),
            !a)
                return;
            const c = {};
            l.z && Ve("z", r, c, this.animationValues);
            for (let h = 0; h < Ae.length; h++)
                Ve(`rotate${Ae[h]}`, r, c, this.animationValues),
                Ve(`skew${Ae[h]}`, r, c, this.animationValues);
            r.render();
            for (const h in c)
                r.setStaticValue(h, c[h]),
                this.animationValues && (this.animationValues[h] = c[h]);
            r.scheduleRender()
        }
        getProjectionStyles(r) {
            var a, l;
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return gc;
            const c = {
                visibility: ""
            }
              , h = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                c.opacity = "",
                c.pointerEvents = Zt(r?.pointerEvents) || "",
                c.transform = h ? h(this.latestValues, "") : "none",
                c;
            const u = this.getLead();
            if (!this.projectionDelta || !this.layout || !u.target) {
                const g = {};
                return this.options.layoutId && (g.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                g.pointerEvents = Zt(r?.pointerEvents) || ""),
                this.hasProjected && !dt(this.latestValues) && (g.transform = h ? h({}, "") : "none",
                this.hasProjected = !1),
                g
            }
            const d = u.animationValues || u.latestValues;
            this.applyTransformsToTarget(),
            c.transform = uc(this.projectionDeltaWithTransform, this.treeScale, d),
            h && (c.transform = h(d, c.transform));
            const {x: f, y: p} = this.projectionDelta;
            c.transformOrigin = `${f.origin * 100}% ${p.origin * 100}% 0`,
            u.animationValues ? c.opacity = u === this ? (l = (a = d.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : c.opacity = u === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
            for (const g in te) {
                if (d[g] === void 0)
                    continue;
                const {correct: y, applyTo: m} = te[g]
                  , v = c.transform === "none" ? d[g] : y(d[g], u);
                if (m) {
                    const b = m.length;
                    for (let w = 0; w < b; w++)
                        c[m[w]] = v
                } else
                    c[g] = v
            }
            return this.options.layoutId && (c.pointerEvents = u === this ? Zt(r?.pointerEvents) || "" : "none"),
            c
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(r => {
                var a;
                return (a = r.currentAnimation) === null || a === void 0 ? void 0 : a.stop()
            }
            ),
            this.root.nodes.forEach(Rs),
            this.root.sharedNodes.clear()
        }
    }
}
function vc(t) {
    t.updateLayout()
}
function bc(t) {
    var e;
    const n = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
    if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
        const {layoutBox: s, measuredBox: i} = t.layout
          , {animationType: o} = t.options
          , r = n.source !== t.layout.source;
        o === "size" ? G(u => {
            const d = r ? n.measuredBox[u] : n.layoutBox[u]
              , f = z(d);
            d.min = s[u].min,
            d.max = d.min + f
        }
        ) : hr(o, n.layoutBox, s) && G(u => {
            const d = r ? n.measuredBox[u] : n.layoutBox[u]
              , f = z(s[u]);
            d.max = d.min + f,
            t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0,
            t.relativeTarget[u].max = t.relativeTarget[u].min + f)
        }
        );
        const a = bt();
        jt(a, s, n.layoutBox);
        const l = bt();
        r ? jt(l, t.applyTransform(i, !0), n.measuredBox) : jt(l, s, n.layoutBox);
        const c = !ar(a);
        let h = !1;
        if (!t.resumeFrom) {
            const u = t.getClosestProjectingParent();
            if (u && !u.resumeFrom) {
                const {snapshot: d, layout: f} = u;
                if (d && f) {
                    const p = E();
                    Bt(p, n.layoutBox, d.layoutBox);
                    const g = E();
                    Bt(g, s, f.layoutBox),
                    lr(p, g) || (h = !0),
                    u.options.layoutRoot && (t.relativeTarget = g,
                    t.relativeTargetOrigin = p,
                    t.relativeParent = u)
                }
            }
        }
        t.notifyListeners("didUpdate", {
            layout: s,
            snapshot: n,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: c,
            hasRelativeTargetChanged: h
        })
    } else if (t.isLead()) {
        const {onExitComplete: s} = t.options;
        s && s()
    }
    t.options.transition = void 0
}
function xc(t) {
    Lt && ft.totalNodes++,
    t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
    t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)),
    t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
}
function wc(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
}
function Tc(t) {
    t.clearSnapshot()
}
function Rs(t) {
    t.clearMeasurements()
}
function Pc(t) {
    t.isLayoutDirty = !1
}
function Sc(t) {
    const {visualElement: e} = t.options;
    e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
    t.resetTransform()
}
function Ds(t) {
    t.finishAnimation(),
    t.targetDelta = t.relativeTarget = t.target = void 0,
    t.isProjectionDirty = !0
}
function Cc(t) {
    t.resolveTargetDelta()
}
function Ac(t) {
    t.calcProjection()
}
function Vc(t) {
    t.resetSkewAndRotation()
}
function Mc(t) {
    t.removeLeadSnapshot()
}
function Es(t, e, n) {
    t.translate = D(e.translate, 0, n),
    t.scale = D(e.scale, 1, n),
    t.origin = e.origin,
    t.originPoint = e.originPoint
}
function Ls(t, e, n, s) {
    t.min = D(e.min, n.min, s),
    t.max = D(e.max, n.max, s)
}
function Rc(t, e, n, s) {
    Ls(t.x, e.x, n.x, s),
    Ls(t.y, e.y, n.y, s)
}
function Dc(t) {
    return t.animationValues && t.animationValues.opacityExit !== void 0
}
const Ec = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , ks = t => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t)
  , Fs = ks("applewebkit/") && !ks("chrome/") ? Math.round : O;
function js(t) {
    t.min = Fs(t.min),
    t.max = Fs(t.max)
}
function Lc(t) {
    js(t.x),
    js(t.y)
}
function hr(t, e, n) {
    return t === "position" || t === "preserve-aspect" && !Fl(As(e), As(n), .2)
}
function kc(t) {
    var e;
    return t !== t.root && ((e = t.scroll) === null || e === void 0 ? void 0 : e.wasRoot)
}
const Fc = ur({
    attachResizeListener: (t, e) => Y(t, "resize", e),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , Me = {
    current: void 0
}
  , dr = ur({
    measureScroll: t => ({
        x: t.scrollLeft,
        y: t.scrollTop
    }),
    defaultParent: () => {
        if (!Me.current) {
            const t = new Fc({});
            t.mount(window),
            t.setOptions({
                layoutScroll: !0
            }),
            Me.current = t
        }
        return Me.current
    }
    ,
    resetTransform: (t, e) => {
        t.style.transform = e !== void 0 ? e : "none"
    }
    ,
    checkIsScrollRoot: t => window.getComputedStyle(t).position === "fixed"
})
  , jc = {
    pan: {
        Feature: ql
    },
    drag: {
        Feature: Yl,
        ProjectionNode: dr,
        MeasureLayout: ir
    }
}
  , Ke = {
    current: null
}
  , fr = {
    current: !1
};
function Bc() {
    if (fr.current = !0,
    !!Xe)
        if (window.matchMedia) {
            const t = window.matchMedia("(prefers-reduced-motion)")
              , e = () => Ke.current = t.matches;
            t.addListener(e),
            e()
        } else
            Ke.current = !1
}
function Ic(t, e, n) {
    for (const s in e) {
        const i = e[s]
          , o = n[s];
        if (I(i))
            t.addValue(s, i);
        else if (I(o))
            t.addValue(s, Ut(i, {
                owner: t
            }));
        else if (o !== i)
            if (t.hasValue(s)) {
                const r = t.getValue(s);
                r.liveStyle === !0 ? r.jump(i) : r.hasAnimated || r.set(i)
            } else {
                const r = t.getStaticValue(s);
                t.addValue(s, Ut(r !== void 0 ? r : i, {
                    owner: t
                }))
            }
    }
    for (const s in n)
        e[s] === void 0 && t.removeValue(s);
    return e
}
const Bs = new WeakMap
  , Oc = [...xi, B, ot]
  , Nc = t => Oc.find(bi(t))
  , Is = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"]
  , _c = Ze.length;
class Uc {
    scrapeMotionValuesFromProps(e, n, s) {
        return {}
    }
    constructor({parent: e, props: n, presenceContext: s, reducedMotionConfig: i, blockInitialAnimation: o, visualState: r}, a={}) {
        this.applyWillChange = !1,
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.KeyframeResolver = dn,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.isRenderScheduled = !1,
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.isRenderScheduled = !1,
        this.scheduleRender = () => {
            this.isRenderScheduled || (this.isRenderScheduled = !0,
            A.render(this.render, !1, !0))
        }
        ;
        const {latestValues: l, renderState: c} = r;
        this.latestValues = l,
        this.baseTarget = {
            ...l
        },
        this.initialValues = n.initial ? {
            ...l
        } : {},
        this.renderState = c,
        this.parent = e,
        this.props = n,
        this.presenceContext = s,
        this.depth = e ? e.depth + 1 : 0,
        this.reducedMotionConfig = i,
        this.options = a,
        this.blockInitialAnimation = !!o,
        this.isControllingVariants = ue(n),
        this.isVariantNode = Ys(n),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(e && e.current);
        const {willChange: h, ...u} = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const d in u) {
            const f = u[d];
            l[d] !== void 0 && I(f) && f.set(l[d], !1)
        }
    }
    mount(e) {
        this.current = e,
        Bs.set(e, this),
        this.projection && !this.projection.instance && this.projection.mount(e),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (n, s) => this.bindToMotionValue(s, n)),
        fr.current || Bc(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Ke.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        Bs.delete(this.current),
        this.projection && this.projection.unmount(),
        et(this.notifyUpdate),
        et(this.render),
        this.valueSubscriptions.forEach(e => e()),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const e in this.events)
            this.events[e].clear();
        for (const e in this.features) {
            const n = this.features[e];
            n && (n.unmount(),
            n.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(e, n) {
        this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
        const s = at.has(e)
          , i = n.on("change", r => {
            this.latestValues[e] = r,
            this.props.onUpdate && A.preRender(this.notifyUpdate),
            s && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , o = n.on("renderRequest", this.scheduleRender);
        this.valueSubscriptions.set(e, () => {
            i(),
            o(),
            n.owner && n.stop()
        }
        )
    }
    sortNodePosition(e) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current)
    }
    updateFeatures() {
        let e = "animation";
        for (e in Pt) {
            const n = Pt[e];
            if (!n)
                continue;
            const {isEnabled: s, Feature: i} = n;
            if (!this.features[e] && i && s(this.props) && (this.features[e] = new i(this)),
            this.features[e]) {
                const o = this.features[e];
                o.isMounted ? o.update() : (o.mount(),
                o.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : E()
    }
    getStaticValue(e) {
        return this.latestValues[e]
    }
    setStaticValue(e, n) {
        this.latestValues[e] = n
    }
    update(e, n) {
        (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = e,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = n;
        for (let s = 0; s < Is.length; s++) {
            const i = Is[s];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
            delete this.propEventSubscriptions[i]);
            const o = "on" + i
              , r = e[o];
            r && (this.propEventSubscriptions[i] = this.on(i, r))
        }
        this.prevMotionValues = Ic(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(e) {
        return this.props.variants ? this.props.variants[e] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    getVariantContext(e=!1) {
        if (e)
            return this.parent ? this.parent.getVariantContext() : void 0;
        if (!this.isControllingVariants) {
            const s = this.parent ? this.parent.getVariantContext() || {} : {};
            return this.props.initial !== void 0 && (s.initial = this.props.initial),
            s
        }
        const n = {};
        for (let s = 0; s < _c; s++) {
            const i = Ze[s]
              , o = this.props[i];
            (It(o) || o === !1) && (n[i] = o)
        }
        return n
    }
    addVariantChild(e) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(e),
            () => n.variantChildren.delete(e)
    }
    addValue(e, n) {
        const s = this.values.get(e);
        n !== s && (s && this.removeValue(e),
        this.bindToMotionValue(e, n),
        this.values.set(e, n),
        this.latestValues[e] = n.get())
    }
    removeValue(e) {
        this.values.delete(e);
        const n = this.valueSubscriptions.get(e);
        n && (n(),
        this.valueSubscriptions.delete(e)),
        delete this.latestValues[e],
        this.removeValueFromRenderState(e, this.renderState)
    }
    hasValue(e) {
        return this.values.has(e)
    }
    getValue(e, n) {
        if (this.props.values && this.props.values[e])
            return this.props.values[e];
        let s = this.values.get(e);
        return s === void 0 && n !== void 0 && (s = Ut(n === null ? void 0 : n, {
            owner: this
        }),
        this.addValue(e, s)),
        s
    }
    readValue(e, n) {
        var s;
        let i = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (s = this.getBaseTargetFromProps(this.props, e)) !== null && s !== void 0 ? s : this.readValueFromInstance(this.current, e, this.options);
        return i != null && (typeof i == "string" && (yi(i) || gi(i)) ? i = parseFloat(i) : !Nc(i) && ot.test(n) && (i = Mi(e, n)),
        this.setBaseTarget(e, I(i) ? i.get() : i)),
        I(i) ? i.get() : i
    }
    setBaseTarget(e, n) {
        this.baseTarget[e] = n
    }
    getBaseTarget(e) {
        var n;
        const {initial: s} = this.props;
        let i;
        if (typeof s == "string" || typeof s == "object") {
            const r = cn(this.props, s, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
            r && (i = r[e])
        }
        if (s && i !== void 0)
            return i;
        const o = this.getBaseTargetFromProps(this.props, e);
        return o !== void 0 && !I(o) ? o : this.initialValues[e] !== void 0 && i === void 0 ? void 0 : this.baseTarget[e]
    }
    on(e, n) {
        return this.events[e] || (this.events[e] = new wn),
        this.events[e].add(n)
    }
    notify(e, ...n) {
        this.events[e] && this.events[e].notify(...n)
    }
}
class pr extends Uc {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = Ri
    }
    sortInstanceNodePosition(e, n) {
        return e.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(e, n) {
        return e.style ? e.style[n] : void 0
    }
    removeValueFromRenderState(e, {vars: n, style: s}) {
        delete n[e],
        delete s[e]
    }
}
function zc(t) {
    return window.getComputedStyle(t)
}
class Wc extends pr {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.applyWillChange = !0,
        this.renderInstance = si
    }
    readValueFromInstance(e, n) {
        if (at.has(n)) {
            const s = pn(n);
            return s && s.default || 0
        } else {
            const s = zc(e)
              , i = (Qs(n) ? s.getPropertyValue(n) : s[n]) || 0;
            return typeof i == "string" ? i.trim() : i
        }
    }
    measureInstanceViewportBox(e, {transformPagePoint: n}) {
        return nr(e, n)
    }
    build(e, n, s) {
        sn(e, n, s.transformTemplate)
    }
    scrapeMotionValuesFromProps(e, n, s) {
        return ln(e, n, s)
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: e} = this.props;
        I(e) && (this.childSubscription = e.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
}
class Gc extends pr {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = E
    }
    getBaseTargetFromProps(e, n) {
        return e[n]
    }
    readValueFromInstance(e, n) {
        if (at.has(n)) {
            const s = pn(n);
            return s && s.default || 0
        }
        return n = ii.has(n) ? n : ce(n),
        e.getAttribute(n)
    }
    scrapeMotionValuesFromProps(e, n, s) {
        return oi(e, n, s)
    }
    build(e, n, s) {
        on(e, n, this.isSVGTag, s.transformTemplate)
    }
    renderInstance(e, n, s, i) {
        ri(e, n, s, i)
    }
    mount(e) {
        this.isSVGTag = an(e.tagName),
        super.mount(e)
    }
}
const Kc = (t, e) => Qe(t) ? new Gc(e) : new Wc(e,{
    allowProjection: t !== x.Fragment
})
  , $c = {
    layout: {
        ProjectionNode: dr,
        MeasureLayout: ir
    }
}
  , Hc = {
    ...Al,
    ...jo,
    ...jc,
    ...$c
}
  , Re = Wr( (t, e) => To(t, e, Hc, Kc));
class Xc extends x.Component {
    getSnapshotBeforeUpdate(e) {
        const n = this.props.childRef.current;
        if (n && e.isPresent && !this.props.isPresent) {
            const s = this.props.sizeRef.current;
            s.height = n.offsetHeight || 0,
            s.width = n.offsetWidth || 0,
            s.top = n.offsetTop,
            s.left = n.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function Yc({children: t, isPresent: e}) {
    const n = x.useId()
      , s = x.useRef(null)
      , i = x.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0
    })
      , {nonce: o} = x.useContext(He);
    return x.useInsertionEffect( () => {
        const {width: r, height: a, top: l, left: c} = i.current;
        if (e || !s.current || !r || !a)
            return;
        s.current.dataset.motionPopId = n;
        const h = document.createElement("style");
        return o && (h.nonce = o),
        document.head.appendChild(h),
        h.sheet && h.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${r}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),
        () => {
            document.head.removeChild(h)
        }
    }
    , [e]),
    _.jsx(Xc, {
        isPresent: e,
        childRef: s,
        sizeRef: i,
        children: x.cloneElement(t, {
            ref: s
        })
    })
}
const qc = ({children: t, initial: e, isPresent: n, onExitComplete: s, custom: i, presenceAffectsLayout: o, mode: r}) => {
    const a = un(Zc)
      , l = x.useId()
      , c = x.useMemo( () => ({
        id: l,
        initial: e,
        isPresent: n,
        custom: i,
        onExitComplete: h => {
            a.set(h, !0);
            for (const u of a.values())
                if (!u)
                    return;
            s && s()
        }
        ,
        register: h => (a.set(h, !1),
        () => a.delete(h))
    }), o ? [Math.random()] : [n]);
    return x.useMemo( () => {
        a.forEach( (h, u) => a.set(u, !1))
    }
    , [n]),
    x.useEffect( () => {
        !n && !a.size && s && s()
    }
    , [n]),
    r === "popLayout" && (t = _.jsx(Yc, {
        isPresent: n,
        children: t
    })),
    _.jsx(le.Provider, {
        value: c,
        children: t
    })
}
;
function Zc() {
    return new Map
}
const qt = t => t.key || "";
function Os(t) {
    const e = [];
    return x.Children.forEach(t, n => {
        x.isValidElement(n) && e.push(n)
    }
    ),
    e
}
const Jc = ({children: t, exitBeforeEnter: e, custom: n, initial: s=!0, onExitComplete: i, presenceAffectsLayout: o=!0, mode: r="sync"}) => {
    const a = x.useMemo( () => Os(t), [t])
      , l = a.map(qt)
      , c = x.useRef(!0)
      , h = x.useRef(a)
      , u = un( () => new Map)
      , [d,f] = x.useState(a)
      , [p,g] = x.useState(a);
    Ws( () => {
        c.current = !1,
        h.current = a;
        for (let v = 0; v < p.length; v++) {
            const b = qt(p[v]);
            l.includes(b) ? u.delete(b) : u.get(b) !== !0 && u.set(b, !1)
        }
    }
    , [p, l.length, l.join("-")]);
    const y = [];
    if (a !== d) {
        let v = [...a];
        for (let b = 0; b < p.length; b++) {
            const w = p[b]
              , P = qt(w);
            l.includes(P) || (v.splice(b, 0, w),
            y.push(w))
        }
        r === "wait" && y.length && (v = y),
        g(Os(v)),
        f(a);
        return
    }
    const {forceRender: m} = x.useContext(Je);
    return _.jsx(_.Fragment, {
        children: p.map(v => {
            const b = qt(v)
              , w = a === p || l.includes(b)
              , P = () => {
                if (u.has(b))
                    u.set(b, !0);
                else
                    return;
                let R = !0;
                u.forEach(U => {
                    U || (R = !1)
                }
                ),
                R && (m?.(),
                g(h.current),
                i && i())
            }
            ;
            return _.jsx(qc, {
                isPresent: w,
                initial: !c.current || s ? void 0 : !1,
                custom: w ? void 0 : n,
                presenceAffectsLayout: o,
                mode: r,
                onExitComplete: w ? void 0 : P,
                children: v
            }, b)
        }
        )
    })
}
;
function mr(t) {
    var e, n, s = "";
    if (typeof t == "string" || typeof t == "number")
        s += t;
    else if (typeof t == "object")
        if (Array.isArray(t)) {
            var i = t.length;
            for (e = 0; e < i; e++)
                t[e] && (n = mr(t[e])) && (s && (s += " "),
                s += n)
        } else
            for (n in t)
                t[n] && (s && (s += " "),
                s += n);
    return s
}
function Qc() {
    for (var t, e, n = 0, s = "", i = arguments.length; n < i; n++)
        (t = arguments[n]) && (e = mr(t)) && (s && (s += " "),
        s += e);
    return s
}
const Tn = "-"
  , tu = t => {
    const e = nu(t)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: s} = t;
    return {
        getClassGroupId: r => {
            const a = r.split(Tn);
            return a[0] === "" && a.length !== 1 && a.shift(),
            gr(a, e) || eu(r)
        }
        ,
        getConflictingClassGroupIds: (r, a) => {
            const l = n[r] || [];
            return a && s[r] ? [...l, ...s[r]] : l
        }
    }
}
  , gr = (t, e) => {
    if (t.length === 0)
        return e.classGroupId;
    const n = t[0]
      , s = e.nextPart.get(n)
      , i = s ? gr(t.slice(1), s) : void 0;
    if (i)
        return i;
    if (e.validators.length === 0)
        return;
    const o = t.join(Tn);
    return e.validators.find( ({validator: r}) => r(o))?.classGroupId
}
  , Ns = /^\[(.+)\]$/
  , eu = t => {
    if (Ns.test(t)) {
        const e = Ns.exec(t)[1]
          , n = e?.substring(0, e.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
  , nu = t => {
    const {theme: e, prefix: n} = t
      , s = {
        nextPart: new Map,
        validators: []
    };
    return iu(Object.entries(t.classGroups), n).forEach( ([o,r]) => {
        $e(r, s, o, e)
    }
    ),
    s
}
  , $e = (t, e, n, s) => {
    t.forEach(i => {
        if (typeof i == "string") {
            const o = i === "" ? e : _s(e, i);
            o.classGroupId = n;
            return
        }
        if (typeof i == "function") {
            if (su(i)) {
                $e(i(s), e, n, s);
                return
            }
            e.validators.push({
                validator: i,
                classGroupId: n
            });
            return
        }
        Object.entries(i).forEach( ([o,r]) => {
            $e(r, _s(e, o), n, s)
        }
        )
    }
    )
}
  , _s = (t, e) => {
    let n = t;
    return e.split(Tn).forEach(s => {
        n.nextPart.has(s) || n.nextPart.set(s, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(s)
    }
    ),
    n
}
  , su = t => t.isThemeGetter
  , iu = (t, e) => e ? t.map( ([n,s]) => {
    const i = s.map(o => typeof o == "string" ? e + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map( ([r,a]) => [e + r, a])) : o);
    return [n, i]
}
) : t
  , ru = t => {
    if (t < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let e = 0
      , n = new Map
      , s = new Map;
    const i = (o, r) => {
        n.set(o, r),
        e++,
        e > t && (e = 0,
        s = n,
        n = new Map)
    }
    ;
    return {
        get(o) {
            let r = n.get(o);
            if (r !== void 0)
                return r;
            if ((r = s.get(o)) !== void 0)
                return i(o, r),
                r
        },
        set(o, r) {
            n.has(o) ? n.set(o, r) : i(o, r)
        }
    }
}
  , yr = "!"
  , ou = t => {
    const {separator: e, experimentalParseClassName: n} = t
      , s = e.length === 1
      , i = e[0]
      , o = e.length
      , r = a => {
        const l = [];
        let c = 0, h = 0, u;
        for (let y = 0; y < a.length; y++) {
            let m = a[y];
            if (c === 0) {
                if (m === i && (s || a.slice(y, y + o) === e)) {
                    l.push(a.slice(h, y)),
                    h = y + o;
                    continue
                }
                if (m === "/") {
                    u = y;
                    continue
                }
            }
            m === "[" ? c++ : m === "]" && c--
        }
        const d = l.length === 0 ? a : a.substring(h)
          , f = d.startsWith(yr)
          , p = f ? d.substring(1) : d
          , g = u && u > h ? u - h : void 0;
        return {
            modifiers: l,
            hasImportantModifier: f,
            baseClassName: p,
            maybePostfixModifierPosition: g
        }
    }
    ;
    return n ? a => n({
        className: a,
        parseClassName: r
    }) : r
}
  , au = t => {
    if (t.length <= 1)
        return t;
    const e = [];
    let n = [];
    return t.forEach(s => {
        s[0] === "[" ? (e.push(...n.sort(), s),
        n = []) : n.push(s)
    }
    ),
    e.push(...n.sort()),
    e
}
  , lu = t => ({
    cache: ru(t.cacheSize),
    parseClassName: ou(t),
    ...tu(t)
})
  , cu = /\s+/
  , uu = (t, e) => {
    const {parseClassName: n, getClassGroupId: s, getConflictingClassGroupIds: i} = e
      , o = []
      , r = t.trim().split(cu);
    let a = "";
    for (let l = r.length - 1; l >= 0; l -= 1) {
        const c = r[l]
          , {modifiers: h, hasImportantModifier: u, baseClassName: d, maybePostfixModifierPosition: f} = n(c);
        let p = !!f
          , g = s(p ? d.substring(0, f) : d);
        if (!g) {
            if (!p) {
                a = c + (a.length > 0 ? " " + a : a);
                continue
            }
            if (g = s(d),
            !g) {
                a = c + (a.length > 0 ? " " + a : a);
                continue
            }
            p = !1
        }
        const y = au(h).join(":")
          , m = u ? y + yr : y
          , v = m + g;
        if (o.includes(v))
            continue;
        o.push(v);
        const b = i(g, p);
        for (let w = 0; w < b.length; ++w) {
            const P = b[w];
            o.push(m + P)
        }
        a = c + (a.length > 0 ? " " + a : a)
    }
    return a
}
;
function hu() {
    let t = 0, e, n, s = "";
    for (; t < arguments.length; )
        (e = arguments[t++]) && (n = vr(e)) && (s && (s += " "),
        s += n);
    return s
}
const vr = t => {
    if (typeof t == "string")
        return t;
    let e, n = "";
    for (let s = 0; s < t.length; s++)
        t[s] && (e = vr(t[s])) && (n && (n += " "),
        n += e);
    return n
}
;
function du(t, ...e) {
    let n, s, i, o = r;
    function r(l) {
        const c = e.reduce( (h, u) => u(h), t());
        return n = lu(c),
        s = n.cache.get,
        i = n.cache.set,
        o = a,
        a(l)
    }
    function a(l) {
        const c = s(l);
        if (c)
            return c;
        const h = uu(l, n);
        return i(l, h),
        h
    }
    return function() {
        return o(hu.apply(null, arguments))
    }
}
const M = t => {
    const e = n => n[t] || [];
    return e.isThemeGetter = !0,
    e
}
  , br = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , fu = /^\d+\/\d+$/
  , pu = new Set(["px", "full", "screen"])
  , mu = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , gu = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , yu = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , vu = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , bu = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , X = t => Tt(t) || pu.has(t) || fu.test(t)
  , nt = t => At(t, "length", Vu)
  , Tt = t => !!t && !Number.isNaN(Number(t))
  , De = t => At(t, "number", Tt)
  , Rt = t => !!t && Number.isInteger(Number(t))
  , xu = t => t.endsWith("%") && Tt(t.slice(0, -1))
  , S = t => br.test(t)
  , st = t => mu.test(t)
  , wu = new Set(["length", "size", "percentage"])
  , Tu = t => At(t, wu, xr)
  , Pu = t => At(t, "position", xr)
  , Su = new Set(["image", "url"])
  , Cu = t => At(t, Su, Ru)
  , Au = t => At(t, "", Mu)
  , Dt = () => !0
  , At = (t, e, n) => {
    const s = br.exec(t);
    return s ? s[1] ? typeof e == "string" ? s[1] === e : e.has(s[1]) : n(s[2]) : !1
}
  , Vu = t => gu.test(t) && !yu.test(t)
  , xr = () => !1
  , Mu = t => vu.test(t)
  , Ru = t => bu.test(t)
  , Du = () => {
    const t = M("colors")
      , e = M("spacing")
      , n = M("blur")
      , s = M("brightness")
      , i = M("borderColor")
      , o = M("borderRadius")
      , r = M("borderSpacing")
      , a = M("borderWidth")
      , l = M("contrast")
      , c = M("grayscale")
      , h = M("hueRotate")
      , u = M("invert")
      , d = M("gap")
      , f = M("gradientColorStops")
      , p = M("gradientColorStopPositions")
      , g = M("inset")
      , y = M("margin")
      , m = M("opacity")
      , v = M("padding")
      , b = M("saturate")
      , w = M("scale")
      , P = M("sepia")
      , R = M("skew")
      , U = M("space")
      , C = M("translate")
      , F = () => ["auto", "contain", "none"]
      , j = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , K = () => ["auto", S, e]
      , V = () => [S, e]
      , $t = () => ["", X, nt]
      , ct = () => ["auto", Tt, S]
      , L = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , N = () => ["solid", "dashed", "dotted", "double", "none"]
      , gt = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , ut = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , Vt = () => ["", "0", S]
      , Pn = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , H = () => [Tt, S];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [Dt],
            spacing: [X, nt],
            blur: ["none", "", st, S],
            brightness: H(),
            borderColor: [t],
            borderRadius: ["none", "", "full", st, S],
            borderSpacing: V(),
            borderWidth: $t(),
            contrast: H(),
            grayscale: Vt(),
            hueRotate: H(),
            invert: Vt(),
            gap: V(),
            gradientColorStops: [t],
            gradientColorStopPositions: [xu, nt],
            inset: K(),
            margin: K(),
            opacity: H(),
            padding: V(),
            saturate: H(),
            scale: H(),
            sepia: Vt(),
            skew: H(),
            space: V(),
            translate: V()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", S]
            }],
            container: ["container"],
            columns: [{
                columns: [st]
            }],
            "break-after": [{
                "break-after": Pn()
            }],
            "break-before": [{
                "break-before": Pn()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...L(), S]
            }],
            overflow: [{
                overflow: j()
            }],
            "overflow-x": [{
                "overflow-x": j()
            }],
            "overflow-y": [{
                "overflow-y": j()
            }],
            overscroll: [{
                overscroll: F()
            }],
            "overscroll-x": [{
                "overscroll-x": F()
            }],
            "overscroll-y": [{
                "overscroll-y": F()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [g]
            }],
            "inset-x": [{
                "inset-x": [g]
            }],
            "inset-y": [{
                "inset-y": [g]
            }],
            start: [{
                start: [g]
            }],
            end: [{
                end: [g]
            }],
            top: [{
                top: [g]
            }],
            right: [{
                right: [g]
            }],
            bottom: [{
                bottom: [g]
            }],
            left: [{
                left: [g]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", Rt, S]
            }],
            basis: [{
                basis: K()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", S]
            }],
            grow: [{
                grow: Vt()
            }],
            shrink: [{
                shrink: Vt()
            }],
            order: [{
                order: ["first", "last", "none", Rt, S]
            }],
            "grid-cols": [{
                "grid-cols": [Dt]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", Rt, S]
                }, S]
            }],
            "col-start": [{
                "col-start": ct()
            }],
            "col-end": [{
                "col-end": ct()
            }],
            "grid-rows": [{
                "grid-rows": [Dt]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [Rt, S]
                }, S]
            }],
            "row-start": [{
                "row-start": ct()
            }],
            "row-end": [{
                "row-end": ct()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", S]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", S]
            }],
            gap: [{
                gap: [d]
            }],
            "gap-x": [{
                "gap-x": [d]
            }],
            "gap-y": [{
                "gap-y": [d]
            }],
            "justify-content": [{
                justify: ["normal", ...ut()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...ut(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...ut(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [v]
            }],
            px: [{
                px: [v]
            }],
            py: [{
                py: [v]
            }],
            ps: [{
                ps: [v]
            }],
            pe: [{
                pe: [v]
            }],
            pt: [{
                pt: [v]
            }],
            pr: [{
                pr: [v]
            }],
            pb: [{
                pb: [v]
            }],
            pl: [{
                pl: [v]
            }],
            m: [{
                m: [y]
            }],
            mx: [{
                mx: [y]
            }],
            my: [{
                my: [y]
            }],
            ms: [{
                ms: [y]
            }],
            me: [{
                me: [y]
            }],
            mt: [{
                mt: [y]
            }],
            mr: [{
                mr: [y]
            }],
            mb: [{
                mb: [y]
            }],
            ml: [{
                ml: [y]
            }],
            "space-x": [{
                "space-x": [U]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [U]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", S, e]
            }],
            "min-w": [{
                "min-w": [S, e, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [S, e, "none", "full", "min", "max", "fit", "prose", {
                    screen: [st]
                }, st]
            }],
            h: [{
                h: [S, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [S, e, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [S, e, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [S, e, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", st, nt]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", De]
            }],
            "font-family": [{
                font: [Dt]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", S]
            }],
            "line-clamp": [{
                "line-clamp": ["none", Tt, De]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", X, S]
            }],
            "list-image": [{
                "list-image": ["none", S]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", S]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [t]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [m]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [t]
            }],
            "text-opacity": [{
                "text-opacity": [m]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...N(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", X, nt]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", X, S]
            }],
            "text-decoration-color": [{
                decoration: [t]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: V()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", S]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", S]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [m]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...L(), Pu]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", Tu]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, Cu]
            }],
            "bg-color": [{
                bg: [t]
            }],
            "gradient-from-pos": [{
                from: [p]
            }],
            "gradient-via-pos": [{
                via: [p]
            }],
            "gradient-to-pos": [{
                to: [p]
            }],
            "gradient-from": [{
                from: [f]
            }],
            "gradient-via": [{
                via: [f]
            }],
            "gradient-to": [{
                to: [f]
            }],
            rounded: [{
                rounded: [o]
            }],
            "rounded-s": [{
                "rounded-s": [o]
            }],
            "rounded-e": [{
                "rounded-e": [o]
            }],
            "rounded-t": [{
                "rounded-t": [o]
            }],
            "rounded-r": [{
                "rounded-r": [o]
            }],
            "rounded-b": [{
                "rounded-b": [o]
            }],
            "rounded-l": [{
                "rounded-l": [o]
            }],
            "rounded-ss": [{
                "rounded-ss": [o]
            }],
            "rounded-se": [{
                "rounded-se": [o]
            }],
            "rounded-ee": [{
                "rounded-ee": [o]
            }],
            "rounded-es": [{
                "rounded-es": [o]
            }],
            "rounded-tl": [{
                "rounded-tl": [o]
            }],
            "rounded-tr": [{
                "rounded-tr": [o]
            }],
            "rounded-br": [{
                "rounded-br": [o]
            }],
            "rounded-bl": [{
                "rounded-bl": [o]
            }],
            "border-w": [{
                border: [a]
            }],
            "border-w-x": [{
                "border-x": [a]
            }],
            "border-w-y": [{
                "border-y": [a]
            }],
            "border-w-s": [{
                "border-s": [a]
            }],
            "border-w-e": [{
                "border-e": [a]
            }],
            "border-w-t": [{
                "border-t": [a]
            }],
            "border-w-r": [{
                "border-r": [a]
            }],
            "border-w-b": [{
                "border-b": [a]
            }],
            "border-w-l": [{
                "border-l": [a]
            }],
            "border-opacity": [{
                "border-opacity": [m]
            }],
            "border-style": [{
                border: [...N(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [a]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [a]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [m]
            }],
            "divide-style": [{
                divide: N()
            }],
            "border-color": [{
                border: [i]
            }],
            "border-color-x": [{
                "border-x": [i]
            }],
            "border-color-y": [{
                "border-y": [i]
            }],
            "border-color-t": [{
                "border-t": [i]
            }],
            "border-color-r": [{
                "border-r": [i]
            }],
            "border-color-b": [{
                "border-b": [i]
            }],
            "border-color-l": [{
                "border-l": [i]
            }],
            "divide-color": [{
                divide: [i]
            }],
            "outline-style": [{
                outline: ["", ...N()]
            }],
            "outline-offset": [{
                "outline-offset": [X, S]
            }],
            "outline-w": [{
                outline: [X, nt]
            }],
            "outline-color": [{
                outline: [t]
            }],
            "ring-w": [{
                ring: $t()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [t]
            }],
            "ring-opacity": [{
                "ring-opacity": [m]
            }],
            "ring-offset-w": [{
                "ring-offset": [X, nt]
            }],
            "ring-offset-color": [{
                "ring-offset": [t]
            }],
            shadow: [{
                shadow: ["", "inner", "none", st, Au]
            }],
            "shadow-color": [{
                shadow: [Dt]
            }],
            opacity: [{
                opacity: [m]
            }],
            "mix-blend": [{
                "mix-blend": [...gt(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": gt()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [s]
            }],
            contrast: [{
                contrast: [l]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", st, S]
            }],
            grayscale: [{
                grayscale: [c]
            }],
            "hue-rotate": [{
                "hue-rotate": [h]
            }],
            invert: [{
                invert: [u]
            }],
            saturate: [{
                saturate: [b]
            }],
            sepia: [{
                sepia: [P]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [s]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [l]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [c]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [h]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [u]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [m]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [b]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [P]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [r]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [r]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [r]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", S]
            }],
            duration: [{
                duration: H()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", S]
            }],
            delay: [{
                delay: H()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", S]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [w]
            }],
            "scale-x": [{
                "scale-x": [w]
            }],
            "scale-y": [{
                "scale-y": [w]
            }],
            rotate: [{
                rotate: [Rt, S]
            }],
            "translate-x": [{
                "translate-x": [C]
            }],
            "translate-y": [{
                "translate-y": [C]
            }],
            "skew-x": [{
                "skew-x": [R]
            }],
            "skew-y": [{
                "skew-y": [R]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", S]
            }],
            accent: [{
                accent: ["auto", t]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", S]
            }],
            "caret-color": [{
                caret: [t]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": V()
            }],
            "scroll-mx": [{
                "scroll-mx": V()
            }],
            "scroll-my": [{
                "scroll-my": V()
            }],
            "scroll-ms": [{
                "scroll-ms": V()
            }],
            "scroll-me": [{
                "scroll-me": V()
            }],
            "scroll-mt": [{
                "scroll-mt": V()
            }],
            "scroll-mr": [{
                "scroll-mr": V()
            }],
            "scroll-mb": [{
                "scroll-mb": V()
            }],
            "scroll-ml": [{
                "scroll-ml": V()
            }],
            "scroll-p": [{
                "scroll-p": V()
            }],
            "scroll-px": [{
                "scroll-px": V()
            }],
            "scroll-py": [{
                "scroll-py": V()
            }],
            "scroll-ps": [{
                "scroll-ps": V()
            }],
            "scroll-pe": [{
                "scroll-pe": V()
            }],
            "scroll-pt": [{
                "scroll-pt": V()
            }],
            "scroll-pr": [{
                "scroll-pr": V()
            }],
            "scroll-pb": [{
                "scroll-pb": V()
            }],
            "scroll-pl": [{
                "scroll-pl": V()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", S]
            }],
            fill: [{
                fill: [t, "none"]
            }],
            "stroke-w": [{
                stroke: [X, nt, De]
            }],
            stroke: [{
                stroke: [t, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , Eu = du(Du);
function Lu(...t) {
    return Eu(Qc(t))
}
const Bu = ({words: t, duration: e=3e3, className: n}) => {
    const [s,i] = x.useState(t[0])
      , [o,r] = x.useState(!1)
      , a = x.useCallback( () => {
        const l = t[t.indexOf(s) + 1] || t[0];
        i(l),
        r(!0)
    }
    , [s, t]);
    return x.useEffect( () => {
        o || setTimeout( () => {
            a()
        }
        , e)
    }
    , [o, e, a]),
    _.jsx(Jc, {
        onExitComplete: () => {
            r(!1)
        }
        ,
        children: _.jsx(Re.div, {
            initial: {
                opacity: 0,
                y: 10
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            },
            exit: {
                opacity: 0,
                y: -40,
                x: 40,
                filter: "blur(8px)",
                scale: 2,
                position: "absolute"
            },
            className: Lu("z-10 inline-block relative text-left text-neutral-100 px-2", n),
            children: s.split(" ").map( (l, c) => _.jsxs(Re.span, {
                initial: {
                    opacity: 0,
                    y: 10,
                    filter: "blur(8px)"
                },
                animate: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)"
                },
                transition: {
                    delay: c * .3,
                    duration: .3
                },
                className: "inline-block whitespace-nowrap",
                children: [l.split("").map( (h, u) => _.jsx(Re.span, {
                    initial: {
                        opacity: 0,
                        y: 10,
                        filter: "blur(8px)"
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)"
                    },
                    transition: {
                        delay: c * .3 + u * .05,
                        duration: .2
                    },
                    className: "inline-block",
                    children: h
                }, l + u)), _.jsx("span", {
                    className: "inline-block",
                    children: " "
                })]
            }, l + c))
        }, s)
    })
}
;
export {Bu as FlipWordsComponent};
