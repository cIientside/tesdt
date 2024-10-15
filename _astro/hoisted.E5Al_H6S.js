function B() {
    const e = document.querySelector("header")
      , t = document.createElement("div");
    t.style.position = "absolute",
    t.style.top = "0",
    t.style.height = "1px",
    document.body.prepend(t),
    new IntersectionObserver( ([o]) => {
        o.isIntersecting ? e.classList.remove("backdrop-blur-md") : e.classList.add("backdrop-blur-md")
    }
    ).observe(t)
}
function _() {
    let e = !1;
    const t = document.getElementById("navlinks")
      , n = document.getElementById("hamburger")
      , o = document.getElementById("navLayer")
      , r = [...t.querySelectorAll("ul > li > a")];
    function i() {
        e ? (t.classList.add("!visible", "!scale-100", "!opacity-100", "!lg:translate-y-0"),
        n.classList.add("toggled"),
        o.classList.add("origin-top", "scale-y-100")) : (t.classList.remove("!visible", "!scale-100", "!opacity-100", "!lg:translate-y-0"),
        n.classList.remove("toggled"),
        o.classList.remove("origin-top", "scale-y-100"))
    }
    n.addEventListener("click", () => {
        e = !e,
        i()
    }
    ),
    r.forEach(l => {
        l.addEventListener("click", () => {
            e = !1,
            i()
        }
        )
    }
    )
}
document.addEventListener("DOMContentLoaded", () => {
    B(),
    _()
}
);
document.addEventListener("astro:page-load", () => {
    B(),
    _()
}
);
const b = "data-astro-transition-persist";
function Z(e) {
    for (const t of document.scripts)
        for (const n of e.scripts)
            if (!n.hasAttribute("data-astro-rerun") && (!t.src && t.textContent === n.textContent || t.src && t.type === n.type && t.src === n.src)) {
                n.dataset.astroExec = "";
                break
            }
}
function ee(e) {
    const t = document.documentElement
      , n = [...t.attributes].filter( ({name: o}) => (t.removeAttribute(o),
    o.startsWith("data-astro-")));
    [...e.documentElement.attributes, ...n].forEach( ({name: o, value: r}) => t.setAttribute(o, r))
}
function te(e) {
    for (const t of Array.from(document.head.children)) {
        const n = re(t, e);
        n ? n.remove() : t.remove()
    }
    document.head.append(...e.head.children)
}
function ne(e, t) {
    t.replaceWith(e);
    for (const n of t.querySelectorAll(`[${b}]`)) {
        const o = n.getAttribute(b)
          , r = e.querySelector(`[${b}="${o}"]`);
        r && (r.replaceWith(n),
        r.localName === "astro-island" && ie(n) && (n.setAttribute("ssr", ""),
        n.setAttribute("props", r.getAttribute("props"))))
    }
}
const oe = () => {
    const e = document.activeElement;
    if (e?.closest(`[${b}]`)) {
        if (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement) {
            const t = e.selectionStart
              , n = e.selectionEnd;
            return () => k({
                activeElement: e,
                start: t,
                end: n
            })
        }
        return () => k({
            activeElement: e
        })
    } else
        return () => k({
            activeElement: null
        })
}
  , k = ({activeElement: e, start: t, end: n}) => {
    e && (e.focus(),
    (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement) && (typeof t == "number" && (e.selectionStart = t),
    typeof n == "number" && (e.selectionEnd = n)))
}
  , re = (e, t) => {
    const n = e.getAttribute(b)
      , o = n && t.head.querySelector(`[${b}="${n}"]`);
    if (o)
        return o;
    if (e.matches("link[rel=stylesheet]")) {
        const r = e.getAttribute("href");
        return t.head.querySelector(`link[rel=stylesheet][href="${r}"]`)
    }
    return null
}
  , ie = e => {
    const t = e.dataset.astroTransitionPersistProps;
    return t == null || t === "false"
}
  , se = e => {
    Z(e),
    ee(e),
    te(e);
    const t = oe();
    ne(e.body, document.body),
    t()
}
  , ae = "astro:before-preparation"
  , ce = "astro:after-preparation"
  , le = "astro:before-swap"
  , ue = "astro:after-swap"
  , de = e => document.dispatchEvent(new Event(e));
class $ extends Event {
    from;
    to;
    direction;
    navigationType;
    sourceElement;
    info;
    newDocument;
    signal;
    constructor(t, n, o, r, i, l, a, u, d, c) {
        super(t, n),
        this.from = o,
        this.to = r,
        this.direction = i,
        this.navigationType = l,
        this.sourceElement = a,
        this.info = u,
        this.newDocument = d,
        this.signal = c,
        Object.defineProperties(this, {
            from: {
                enumerable: !0
            },
            to: {
                enumerable: !0,
                writable: !0
            },
            direction: {
                enumerable: !0,
                writable: !0
            },
            navigationType: {
                enumerable: !0
            },
            sourceElement: {
                enumerable: !0
            },
            info: {
                enumerable: !0
            },
            newDocument: {
                enumerable: !0,
                writable: !0
            },
            signal: {
                enumerable: !0
            }
        })
    }
}
class fe extends $ {
    formData;
    loader;
    constructor(t, n, o, r, i, l, a, u, d, c) {
        super(ae, {
            cancelable: !0
        }, t, n, o, r, i, l, a, u),
        this.formData = d,
        this.loader = c.bind(this, this),
        Object.defineProperties(this, {
            formData: {
                enumerable: !0
            },
            loader: {
                enumerable: !0,
                writable: !0
            }
        })
    }
}
class me extends $ {
    direction;
    viewTransition;
    swap;
    constructor(t, n) {
        super(le, void 0, t.from, t.to, t.direction, t.navigationType, t.sourceElement, t.info, t.newDocument, t.signal),
        this.direction = t.direction,
        this.viewTransition = n,
        this.swap = () => se(this.newDocument),
        Object.defineProperties(this, {
            direction: {
                enumerable: !0
            },
            viewTransition: {
                enumerable: !0
            },
            swap: {
                enumerable: !0,
                writable: !0
            }
        })
    }
}
async function he(e, t, n, o, r, i, l, a, u) {
    const d = new fe(e,t,n,o,r,i,window.document,l,a,u);
    return document.dispatchEvent(d) && (await d.loader(),
    d.defaultPrevented || (de(ce),
    d.navigationType !== "traverse" && P({
        scrollX,
        scrollY
    }))),
    d
}
function pe(e, t) {
    const n = new me(e,t);
    return document.dispatchEvent(n),
    n.swap(),
    n
}
const ge = history.pushState.bind(history)
  , T = history.replaceState.bind(history)
  , P = e => {
    history.state && (history.scrollRestoration = "manual",
    T({
        ...history.state,
        ...e
    }, ""))
}
  , D = !!document.startViewTransition
  , x = () => !!document.querySelector('[name="astro-view-transitions-enabled"]')
  , U = (e, t) => e.pathname === t.pathname && e.search === t.search;
let f, g, A;
const V = e => document.dispatchEvent(new Event(e))
  , W = () => V("astro:page-load")
  , ye = () => {
    let e = document.createElement("div");
    e.setAttribute("aria-live", "assertive"),
    e.setAttribute("aria-atomic", "true"),
    e.className = "astro-route-announcer",
    document.body.append(e),
    setTimeout( () => {
        let t = document.title || document.querySelector("h1")?.textContent || location.pathname;
        e.textContent = t
    }
    , 60)
}
  , N = "data-astro-transition-persist"
  , O = "data-astro-transition"
  , R = "data-astro-transition-fallback";
let H, w = 0;
history.state ? (w = history.state.index,
scrollTo({
    left: history.state.scrollX,
    top: history.state.scrollY
})) : x() && (T({
    index: w,
    scrollX,
    scrollY
}, ""),
history.scrollRestoration = "manual");
async function be(e, t) {
    try {
        const n = await fetch(e, t)
          , r = (n.headers.get("content-type") ?? "").split(";", 1)[0].trim();
        return r !== "text/html" && r !== "application/xhtml+xml" ? null : {
            html: await n.text(),
            redirected: n.redirected ? n.url : void 0,
            mediaType: r
        }
    } catch {
        return null
    }
}
function j() {
    const e = document.querySelector('[name="astro-view-transitions-fallback"]');
    return e ? e.getAttribute("content") : "animate"
}
function we() {
    let e = Promise.resolve();
    for (const t of Array.from(document.scripts)) {
        if (t.dataset.astroExec === "")
            continue;
        const n = t.getAttribute("type");
        if (n && n !== "module" && n !== "text/javascript")
            continue;
        const o = document.createElement("script");
        o.innerHTML = t.innerHTML;
        for (const r of t.attributes) {
            if (r.name === "src") {
                const i = new Promise(l => {
                    o.onload = o.onerror = l
                }
                );
                e = e.then( () => i)
            }
            o.setAttribute(r.name, r.value)
        }
        o.dataset.astroExec = "",
        t.replaceWith(o)
    }
    return e
}
const K = (e, t, n, o, r) => {
    const i = U(t, e)
      , l = document.title;
    document.title = o;
    let a = !1;
    if (e.href !== location.href && !r)
        if (n.history === "replace") {
            const u = history.state;
            T({
                ...n.state,
                index: u.index,
                scrollX: u.scrollX,
                scrollY: u.scrollY
            }, "", e.href)
        } else
            ge({
                ...n.state,
                index: ++w,
                scrollX: 0,
                scrollY: 0
            }, "", e.href);
    if (document.title = l,
    A = e,
    i || (scrollTo({
        left: 0,
        top: 0,
        behavior: "instant"
    }),
    a = !0),
    r)
        scrollTo(r.scrollX, r.scrollY);
    else {
        if (e.hash) {
            history.scrollRestoration = "auto";
            const u = history.state;
            location.href = e.href,
            history.state || (T(u, ""),
            i && window.dispatchEvent(new PopStateEvent("popstate")))
        } else
            a || scrollTo({
                left: 0,
                top: 0,
                behavior: "instant"
            });
        history.scrollRestoration = "manual"
    }
}
;
function ve(e) {
    const t = [];
    for (const n of e.querySelectorAll("head link[rel=stylesheet]"))
        if (!document.querySelector(`[${N}="${n.getAttribute(N)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)) {
            const o = document.createElement("link");
            o.setAttribute("rel", "preload"),
            o.setAttribute("as", "style"),
            o.setAttribute("href", n.getAttribute("href")),
            t.push(new Promise(r => {
                ["load", "error"].forEach(i => o.addEventListener(i, r)),
                document.head.append(o)
            }
            ))
        }
    return t
}
async function C(e, t, n, o, r) {
    async function i(u) {
        function d(h) {
            const m = h.effect;
            return !m || !(m instanceof KeyframeEffect) || !m.target ? !1 : window.getComputedStyle(m.target, m.pseudoElement).animationIterationCount === "infinite"
        }
        const c = document.getAnimations();
        document.documentElement.setAttribute(R, u);
        const p = document.getAnimations().filter(h => !c.includes(h) && !d(h));
        return Promise.allSettled(p.map(h => h.finished))
    }
    if (r === "animate" && !n.transitionSkipped && !e.signal.aborted)
        try {
            await i("old")
        } catch {}
    const l = document.title
      , a = pe(e, n.viewTransition);
    K(a.to, a.from, t, l, o),
    V(ue),
    r === "animate" && (!n.transitionSkipped && !a.signal.aborted ? i("new").finally( () => n.viewTransitionFinished()) : n.viewTransitionFinished())
}
function Te() {
    return f?.controller.abort(),
    f = {
        controller: new AbortController
    }
}
async function G(e, t, n, o, r) {
    const i = Te();
    if (!x() || location.origin !== n.origin) {
        i === f && (f = void 0),
        location.href = n.href;
        return
    }
    const l = r ? "traverse" : o.history === "replace" ? "replace" : "push";
    if (l !== "traverse" && P({
        scrollX,
        scrollY
    }),
    U(t, n) && (e !== "back" && n.hash || e === "back" && t.hash)) {
        K(n, t, o, document.title, r),
        i === f && (f = void 0);
        return
    }
    const a = await he(t, n, e, l, o.sourceElement, o.info, i.controller.signal, o.formData, u);
    if (a.defaultPrevented || a.signal.aborted) {
        i === f && (f = void 0),
        a.signal.aborted || (location.href = n.href);
        return
    }
    async function u(s) {
        const p = s.to.href
          , h = {
            signal: s.signal
        };
        if (s.formData) {
            h.method = "POST";
            const y = s.sourceElement instanceof HTMLFormElement ? s.sourceElement : s.sourceElement instanceof HTMLElement && "form"in s.sourceElement ? s.sourceElement.form : s.sourceElement?.closest("form");
            h.body = y?.attributes.getNamedItem("enctype")?.value === "application/x-www-form-urlencoded" ? new URLSearchParams(s.formData) : s.formData
        }
        const m = await be(p, h);
        if (m === null) {
            s.preventDefault();
            return
        }
        if (m.redirected) {
            const y = new URL(m.redirected);
            if (y.origin !== s.to.origin) {
                s.preventDefault();
                return
            }
            s.to = y
        }
        if (H ??= new DOMParser,
        s.newDocument = H.parseFromString(m.html, m.mediaType),
        s.newDocument.querySelectorAll("noscript").forEach(y => y.remove()),
        !s.newDocument.querySelector('[name="astro-view-transitions-enabled"]') && !s.formData) {
            s.preventDefault();
            return
        }
        const L = ve(s.newDocument);
        L.length && !s.signal.aborted && await Promise.all(L)
    }
    async function d() {
        if (g && g.viewTransition) {
            try {
                g.viewTransition.skipTransition()
            } catch {}
            try {
                await g.viewTransition.updateCallbackDone
            } catch {}
        }
        return g = {
            transitionSkipped: !1
        }
    }
    const c = await d();
    if (a.signal.aborted) {
        i === f && (f = void 0);
        return
    }
    if (document.documentElement.setAttribute(O, a.direction),
    D)
        c.viewTransition = document.startViewTransition(async () => await C(a, o, c, r));
    else {
        const s = (async () => {
            await Promise.resolve(),
            await C(a, o, c, r, j())
        }
        )();
        c.viewTransition = {
            updateCallbackDone: s,
            ready: s,
            finished: new Promise(p => c.viewTransitionFinished = p),
            skipTransition: () => {
                c.transitionSkipped = !0,
                document.documentElement.removeAttribute(R)
            }
        }
    }
    c.viewTransition.updateCallbackDone.finally(async () => {
        await we(),
        W(),
        ye()
    }
    ),
    c.viewTransition.finished.finally( () => {
        c.viewTransition = void 0,
        c === g && (g = void 0),
        i === f && (f = void 0),
        document.documentElement.removeAttribute(O),
        document.documentElement.removeAttribute(R)
    }
    );
    try {
        await c.viewTransition.updateCallbackDone
    } catch (s) {
        const p = s;
        console.log("[astro]", p.name, p.message, p.stack)
    }
}
async function F(e, t) {
    await G("forward", A, new URL(e,location.href), t ?? {})
}
function Ee(e) {
    if (!x() && e.state) {
        location.reload();
        return
    }
    if (e.state === null)
        return;
    const t = history.state
      , n = t.index
      , o = n > w ? "forward" : "back";
    w = n,
    G(o, A, new URL(location.href), {}, t)
}
const X = () => {
    history.state && (scrollX !== history.state.scrollX || scrollY !== history.state.scrollY) && P({
        scrollX,
        scrollY
    })
}
;
{
    if (D || j() !== "none")
        if (A = new URL(location.href),
        addEventListener("popstate", Ee),
        addEventListener("load", W),
        "onscrollend"in window)
            addEventListener("scrollend", X);
        else {
            let e, t, n, o;
            const r = () => {
                if (o !== history.state?.index) {
                    clearInterval(e),
                    e = void 0;
                    return
                }
                if (t === scrollY && n === scrollX) {
                    clearInterval(e),
                    e = void 0,
                    X();
                    return
                } else
                    t = scrollY,
                    n = scrollX
            }
            ;
            addEventListener("scroll", () => {
                e === void 0 && (o = history.state.index,
                t = scrollY,
                n = scrollX,
                e = window.setInterval(r, 50))
            }
            , {
                passive: !0
            })
        }
    for (const e of document.scripts)
        e.dataset.astroExec = ""
}
const z = new Set
  , E = new WeakSet;
let I, J, Y = !1;
function Ae(e) {
    Y || (Y = !0,
    I ??= e?.prefetchAll,
    J ??= e?.defaultStrategy ?? "hover",
    Se(),
    Le(),
    ke(),
    Ie())
}
function Se() {
    for (const e of ["touchstart", "mousedown"])
        document.body.addEventListener(e, t => {
            v(t.target, "tap") && S(t.target.href, {
                ignoreSlowConnection: !0
            })
        }
        , {
            passive: !0
        })
}
function Le() {
    let e;
    document.body.addEventListener("focusin", o => {
        v(o.target, "hover") && t(o)
    }
    , {
        passive: !0
    }),
    document.body.addEventListener("focusout", n, {
        passive: !0
    }),
    M( () => {
        for (const o of document.getElementsByTagName("a"))
            E.has(o) || v(o, "hover") && (E.add(o),
            o.addEventListener("mouseenter", t, {
                passive: !0
            }),
            o.addEventListener("mouseleave", n, {
                passive: !0
            }))
    }
    );
    function t(o) {
        const r = o.target.href;
        e && clearTimeout(e),
        e = setTimeout( () => {
            S(r)
        }
        , 80)
    }
    function n() {
        e && (clearTimeout(e),
        e = 0)
    }
}
function ke() {
    let e;
    M( () => {
        for (const t of document.getElementsByTagName("a"))
            E.has(t) || v(t, "viewport") && (E.add(t),
            e ??= Re(),
            e.observe(t))
    }
    )
}
function Re() {
    const e = new WeakMap;
    return new IntersectionObserver( (t, n) => {
        for (const o of t) {
            const r = o.target
              , i = e.get(r);
            o.isIntersecting ? (i && clearTimeout(i),
            e.set(r, setTimeout( () => {
                n.unobserve(r),
                e.delete(r),
                S(r.href)
            }
            , 300))) : i && (clearTimeout(i),
            e.delete(r))
        }
    }
    )
}
function Ie() {
    M( () => {
        for (const e of document.getElementsByTagName("a"))
            v(e, "load") && S(e.href)
    }
    )
}
function S(e, t) {
    const n = t?.ignoreSlowConnection ?? !1;
    if (Pe(e, n))
        if (z.add(e),
        document.createElement("link").relList?.supports?.("prefetch") && t?.with !== "fetch") {
            const o = document.createElement("link");
            o.rel = "prefetch",
            o.setAttribute("href", e),
            document.head.append(o)
        } else
            fetch(e, {
                priority: "low"
            })
}
function Pe(e, t) {
    if (!navigator.onLine || !t && Q())
        return !1;
    try {
        const n = new URL(e,location.href);
        return location.origin === n.origin && (location.pathname !== n.pathname || location.search !== n.search) && !z.has(e)
    } catch {}
    return !1
}
function v(e, t) {
    if (e?.tagName !== "A")
        return !1;
    const n = e.dataset.astroPrefetch;
    return n === "false" ? !1 : t === "tap" && (n != null || I) && Q() ? !0 : n == null && I || n === "" ? t === J : n === t
}
function Q() {
    if ("connection"in navigator) {
        const e = navigator.connection;
        return e.saveData || /2g/.test(e.effectiveType)
    }
    return !1
}
function M(e) {
    e();
    let t = !1;
    document.addEventListener("astro:page-load", () => {
        if (!t) {
            t = !0;
            return
        }
        e()
    }
    )
}
function De() {
    const e = document.querySelector('[name="astro-view-transitions-fallback"]');
    return e ? e.getAttribute("content") : "animate"
}
function q(e) {
    return e.dataset.astroReload !== void 0
}
(D || De() !== "none") && (document.addEventListener("click", e => {
    let t = e.target;
    if (e.composed && (t = e.composedPath()[0]),
    t instanceof Element && (t = t.closest("a, area")),
    !(t instanceof HTMLAnchorElement) && !(t instanceof SVGAElement) && !(t instanceof HTMLAreaElement))
        return;
    const n = t instanceof HTMLElement ? t.target : t.target.baseVal
      , o = t instanceof HTMLElement ? t.href : t.href.baseVal
      , r = new URL(o,location.href).origin;
    q(t) || t.hasAttribute("download") || !t.href || n && n !== "_self" || r !== location.origin || e.button !== 0 || e.metaKey || e.ctrlKey || e.altKey || e.shiftKey || e.defaultPrevented || (e.preventDefault(),
    F(o, {
        history: t.dataset.astroHistory === "replace" ? "replace" : "auto",
        sourceElement: t
    }))
}
),
document.addEventListener("submit", e => {
    let t = e.target;
    if (t.tagName !== "FORM" || e.defaultPrevented || q(t))
        return;
    const n = t
      , o = e.submitter
      , r = new FormData(n,o)
      , i = typeof n.action == "string" ? n.action : n.getAttribute("action")
      , l = typeof n.method == "string" ? n.method : n.getAttribute("method");
    let a = o?.getAttribute("formaction") ?? i ?? location.pathname;
    const u = o?.getAttribute("formmethod") ?? l ?? "get";
    if (u === "dialog" || location.origin !== new URL(a,location.href).origin)
        return;
    const d = {
        sourceElement: o ?? n
    };
    if (u === "get") {
        const c = new URLSearchParams(r)
          , s = new URL(a);
        s.search = c.toString(),
        a = s.toString()
    } else
        d.formData = r;
    e.preventDefault(),
    F(a, d)
}
),
Ae({
    prefetchAll: !0
}));
