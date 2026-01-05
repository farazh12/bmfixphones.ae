var cd = (e) => {
    throw TypeError(e);
};
var Ql = (e, t, n) => t.has(e) || cd("Cannot " + n);
var j = (e, t, n) => (Ql(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
    ne = (e, t, n) =>
        t.has(e)
            ? cd("Cannot add the same private member more than once")
            : t instanceof WeakSet
              ? t.add(e)
              : t.set(e, n),
    q = (e, t, n, r) => (Ql(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n),
    De = (e, t, n) => (Ql(e, t, "access private method"), n);
var Us = (e, t, n, r) => ({
    set _(o) {
        q(e, t, o, n);
    },
    get _() {
        return j(e, t, r);
    },
});
function Gv(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const s = Object.getOwnPropertyDescriptor(r, o);
                    s && Object.defineProperty(e, o, s.get ? s : { enumerable: !0, get: () => r[o] });
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
    new MutationObserver((o) => {
        for (const s of o)
            if (s.type === "childList")
                for (const i of s.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(o) {
        const s = {};
        return (
            o.integrity && (s.integrity = o.integrity),
            o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
            o.crossOrigin === "use-credentials"
                ? (s.credentials = "include")
                : o.crossOrigin === "anonymous"
                  ? (s.credentials = "omit")
                  : (s.credentials = "same-origin"),
            s
        );
    }
    function r(o) {
        if (o.ep) return;
        o.ep = !0;
        const s = n(o);
        fetch(o.href, s);
    }
})();
function wp(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var bp = { exports: {} },
    il = {},
    Sp = { exports: {} },
    Z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ts = Symbol.for("react.element"),
    Kv = Symbol.for("react.portal"),
    Yv = Symbol.for("react.fragment"),
    qv = Symbol.for("react.strict_mode"),
    Xv = Symbol.for("react.profiler"),
    Zv = Symbol.for("react.provider"),
    Jv = Symbol.for("react.context"),
    ey = Symbol.for("react.forward_ref"),
    ty = Symbol.for("react.suspense"),
    ny = Symbol.for("react.memo"),
    ry = Symbol.for("react.lazy"),
    dd = Symbol.iterator;
function oy(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (dd && e[dd]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var Cp = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    Ep = Object.assign,
    kp = {};
function yo(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = kp), (this.updater = n || Cp);
}
yo.prototype.isReactComponent = {};
yo.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
    this.updater.enqueueSetState(this, e, t, "setState");
};
yo.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Np() {}
Np.prototype = yo.prototype;
function Fu(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = kp), (this.updater = n || Cp);
}
var zu = (Fu.prototype = new Np());
zu.constructor = Fu;
Ep(zu, yo.prototype);
zu.isPureReactComponent = !0;
var fd = Array.isArray,
    Pp = Object.prototype.hasOwnProperty,
    $u = { current: null },
    Tp = { key: !0, ref: !0, __self: !0, __source: !0 };
function jp(e, t, n) {
    var r,
        o = {},
        s = null,
        i = null;
    if (t != null)
        for (r in (t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (s = "" + t.key), t))
            Pp.call(t, r) && !Tp.hasOwnProperty(r) && (o[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1) o.children = n;
    else if (1 < l) {
        for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
        o.children = a;
    }
    if (e && e.defaultProps) for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
    return { $$typeof: Ts, type: e, key: s, ref: i, props: o, _owner: $u.current };
}
function sy(e, t) {
    return { $$typeof: Ts, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Bu(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Ts;
}
function iy(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
        "$" +
        e.replace(/[=:]/g, function (n) {
            return t[n];
        })
    );
}
var pd = /\/+/g;
function Gl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? iy("" + e.key) : t.toString(36);
}
function di(e, t, n, r, o) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var i = !1;
    if (e === null) i = !0;
    else
        switch (s) {
            case "string":
            case "number":
                i = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case Ts:
                    case Kv:
                        i = !0;
                }
        }
    if (i)
        return (
            (i = e),
            (o = o(i)),
            (e = r === "" ? "." + Gl(i, 0) : r),
            fd(o)
                ? ((n = ""),
                  e != null && (n = e.replace(pd, "$&/") + "/"),
                  di(o, t, n, "", function (u) {
                      return u;
                  }))
                : o != null &&
                  (Bu(o) &&
                      (o = sy(
                          o,
                          n + (!o.key || (i && i.key === o.key) ? "" : ("" + o.key).replace(pd, "$&/") + "/") + e
                      )),
                  t.push(o)),
            1
        );
    if (((i = 0), (r = r === "" ? "." : r + ":"), fd(e)))
        for (var l = 0; l < e.length; l++) {
            s = e[l];
            var a = r + Gl(s, l);
            i += di(s, t, n, a, o);
        }
    else if (((a = oy(e)), typeof a == "function"))
        for (e = a.call(e), l = 0; !(s = e.next()).done; )
            (s = s.value), (a = r + Gl(s, l++)), (i += di(s, t, n, a, o));
    else if (s === "object")
        throw (
            ((t = String(e)),
            Error(
                "Objects are not valid as a React child (found: " +
                    (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) +
                    "). If you meant to render a collection of children, use an array instead."
            ))
        );
    return i;
}
function Vs(e, t, n) {
    if (e == null) return e;
    var r = [],
        o = 0;
    return (
        di(e, r, "", "", function (s) {
            return t.call(n, s, o++);
        }),
        r
    );
}
function ly(e) {
    if (e._status === -1) {
        var t = e._result;
        (t = t()),
            t.then(
                function (n) {
                    (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
                },
                function (n) {
                    (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
                }
            ),
            e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
}
var Ye = { current: null },
    fi = { transition: null },
    ay = { ReactCurrentDispatcher: Ye, ReactCurrentBatchConfig: fi, ReactCurrentOwner: $u };
function Rp() {
    throw Error("act(...) is not supported in production builds of React.");
}
Z.Children = {
    map: Vs,
    forEach: function (e, t, n) {
        Vs(
            e,
            function () {
                t.apply(this, arguments);
            },
            n
        );
    },
    count: function (e) {
        var t = 0;
        return (
            Vs(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            Vs(e, function (t) {
                return t;
            }) || []
        );
    },
    only: function (e) {
        if (!Bu(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e;
    },
};
Z.Component = yo;
Z.Fragment = Yv;
Z.Profiler = Xv;
Z.PureComponent = Fu;
Z.StrictMode = qv;
Z.Suspense = ty;
Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ay;
Z.act = Rp;
Z.cloneElement = function (e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Ep({}, e.props),
        o = e.key,
        s = e.ref,
        i = e._owner;
    if (t != null) {
        if (
            (t.ref !== void 0 && ((s = t.ref), (i = $u.current)),
            t.key !== void 0 && (o = "" + t.key),
            e.type && e.type.defaultProps)
        )
            var l = e.type.defaultProps;
        for (a in t) Pp.call(t, a) && !Tp.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
    }
    var a = arguments.length - 2;
    if (a === 1) r.children = n;
    else if (1 < a) {
        l = Array(a);
        for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
        r.children = l;
    }
    return { $$typeof: Ts, type: e.type, key: o, ref: s, props: r, _owner: i };
};
Z.createContext = function (e) {
    return (
        (e = {
            $$typeof: Jv,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
        }),
        (e.Provider = { $$typeof: Zv, _context: e }),
        (e.Consumer = e)
    );
};
Z.createElement = jp;
Z.createFactory = function (e) {
    var t = jp.bind(null, e);
    return (t.type = e), t;
};
Z.createRef = function () {
    return { current: null };
};
Z.forwardRef = function (e) {
    return { $$typeof: ey, render: e };
};
Z.isValidElement = Bu;
Z.lazy = function (e) {
    return { $$typeof: ry, _payload: { _status: -1, _result: e }, _init: ly };
};
Z.memo = function (e, t) {
    return { $$typeof: ny, type: e, compare: t === void 0 ? null : t };
};
Z.startTransition = function (e) {
    var t = fi.transition;
    fi.transition = {};
    try {
        e();
    } finally {
        fi.transition = t;
    }
};
Z.unstable_act = Rp;
Z.useCallback = function (e, t) {
    return Ye.current.useCallback(e, t);
};
Z.useContext = function (e) {
    return Ye.current.useContext(e);
};
Z.useDebugValue = function () {};
Z.useDeferredValue = function (e) {
    return Ye.current.useDeferredValue(e);
};
Z.useEffect = function (e, t) {
    return Ye.current.useEffect(e, t);
};
Z.useId = function () {
    return Ye.current.useId();
};
Z.useImperativeHandle = function (e, t, n) {
    return Ye.current.useImperativeHandle(e, t, n);
};
Z.useInsertionEffect = function (e, t) {
    return Ye.current.useInsertionEffect(e, t);
};
Z.useLayoutEffect = function (e, t) {
    return Ye.current.useLayoutEffect(e, t);
};
Z.useMemo = function (e, t) {
    return Ye.current.useMemo(e, t);
};
Z.useReducer = function (e, t, n) {
    return Ye.current.useReducer(e, t, n);
};
Z.useRef = function (e) {
    return Ye.current.useRef(e);
};
Z.useState = function (e) {
    return Ye.current.useState(e);
};
Z.useSyncExternalStore = function (e, t, n) {
    return Ye.current.useSyncExternalStore(e, t, n);
};
Z.useTransition = function () {
    return Ye.current.useTransition();
};
Z.version = "18.3.1";
Sp.exports = Z;
var b = Sp.exports;
const M = wp(b),
    Uu = Gv({ __proto__: null, default: M }, [b]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var uy = b,
    cy = Symbol.for("react.element"),
    dy = Symbol.for("react.fragment"),
    fy = Object.prototype.hasOwnProperty,
    py = uy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    hy = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ap(e, t, n) {
    var r,
        o = {},
        s = null,
        i = null;
    n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (i = t.ref);
    for (r in t) fy.call(t, r) && !hy.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
    return { $$typeof: cy, type: e, key: s, ref: i, props: o, _owner: py.current };
}
il.Fragment = dy;
il.jsx = Ap;
il.jsxs = Ap;
bp.exports = il;
var d = bp.exports,
    Op = { exports: {} },
    mt = {},
    Mp = { exports: {} },
    _p = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
    function t(P, T) {
        var I = P.length;
        P.push(T);
        e: for (; 0 < I; ) {
            var V = (I - 1) >>> 1,
                $ = P[V];
            if (0 < o($, T)) (P[V] = T), (P[I] = $), (I = V);
            else break e;
        }
    }
    function n(P) {
        return P.length === 0 ? null : P[0];
    }
    function r(P) {
        if (P.length === 0) return null;
        var T = P[0],
            I = P.pop();
        if (I !== T) {
            P[0] = I;
            e: for (var V = 0, $ = P.length, Q = $ >>> 1; V < Q; ) {
                var G = 2 * (V + 1) - 1,
                    se = P[G],
                    ve = G + 1,
                    Y = P[ve];
                if (0 > o(se, I))
                    ve < $ && 0 > o(Y, se) ? ((P[V] = Y), (P[ve] = I), (V = ve)) : ((P[V] = se), (P[G] = I), (V = G));
                else if (ve < $ && 0 > o(Y, I)) (P[V] = Y), (P[ve] = I), (V = ve);
                else break e;
            }
        }
        return T;
    }
    function o(P, T) {
        var I = P.sortIndex - T.sortIndex;
        return I !== 0 ? I : P.id - T.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        e.unstable_now = function () {
            return s.now();
        };
    } else {
        var i = Date,
            l = i.now();
        e.unstable_now = function () {
            return i.now() - l;
        };
    }
    var a = [],
        u = [],
        c = 1,
        f = null,
        g = 3,
        h = !1,
        w = !1,
        v = !1,
        x = typeof setTimeout == "function" ? setTimeout : null,
        m = typeof clearTimeout == "function" ? clearTimeout : null,
        p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0 &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function y(P) {
        for (var T = n(u); T !== null; ) {
            if (T.callback === null) r(u);
            else if (T.startTime <= P) r(u), (T.sortIndex = T.expirationTime), t(a, T);
            else break;
            T = n(u);
        }
    }
    function S(P) {
        if (((v = !1), y(P), !w))
            if (n(a) !== null) (w = !0), B(C);
            else {
                var T = n(u);
                T !== null && U(S, T.startTime - P);
            }
    }
    function C(P, T) {
        (w = !1), v && ((v = !1), m(N), (N = -1)), (h = !0);
        var I = g;
        try {
            for (y(T), f = n(a); f !== null && (!(f.expirationTime > T) || (P && !D())); ) {
                var V = f.callback;
                if (typeof V == "function") {
                    (f.callback = null), (g = f.priorityLevel);
                    var $ = V(f.expirationTime <= T);
                    (T = e.unstable_now()), typeof $ == "function" ? (f.callback = $) : f === n(a) && r(a), y(T);
                } else r(a);
                f = n(a);
            }
            if (f !== null) var Q = !0;
            else {
                var G = n(u);
                G !== null && U(S, G.startTime - T), (Q = !1);
            }
            return Q;
        } finally {
            (f = null), (g = I), (h = !1);
        }
    }
    var E = !1,
        k = null,
        N = -1,
        R = 5,
        A = -1;
    function D() {
        return !(e.unstable_now() - A < R);
    }
    function L() {
        if (k !== null) {
            var P = e.unstable_now();
            A = P;
            var T = !0;
            try {
                T = k(!0, P);
            } finally {
                T ? H() : ((E = !1), (k = null));
            }
        } else E = !1;
    }
    var H;
    if (typeof p == "function")
        H = function () {
            p(L);
        };
    else if (typeof MessageChannel < "u") {
        var O = new MessageChannel(),
            W = O.port2;
        (O.port1.onmessage = L),
            (H = function () {
                W.postMessage(null);
            });
    } else
        H = function () {
            x(L, 0);
        };
    function B(P) {
        (k = P), E || ((E = !0), H());
    }
    function U(P, T) {
        N = x(function () {
            P(e.unstable_now());
        }, T);
    }
    (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (P) {
            P.callback = null;
        }),
        (e.unstable_continueExecution = function () {
            w || h || ((w = !0), B(C));
        }),
        (e.unstable_forceFrameRate = function (P) {
            0 > P || 125 < P
                ? console.error(
                      "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                  )
                : (R = 0 < P ? Math.floor(1e3 / P) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return g;
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return n(a);
        }),
        (e.unstable_next = function (P) {
            switch (g) {
                case 1:
                case 2:
                case 3:
                    var T = 3;
                    break;
                default:
                    T = g;
            }
            var I = g;
            g = T;
            try {
                return P();
            } finally {
                g = I;
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (P, T) {
            switch (P) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    P = 3;
            }
            var I = g;
            g = P;
            try {
                return T();
            } finally {
                g = I;
            }
        }),
        (e.unstable_scheduleCallback = function (P, T, I) {
            var V = e.unstable_now();
            switch (
                (typeof I == "object" && I !== null
                    ? ((I = I.delay), (I = typeof I == "number" && 0 < I ? V + I : V))
                    : (I = V),
                P)
            ) {
                case 1:
                    var $ = -1;
                    break;
                case 2:
                    $ = 250;
                    break;
                case 5:
                    $ = 1073741823;
                    break;
                case 4:
                    $ = 1e4;
                    break;
                default:
                    $ = 5e3;
            }
            return (
                ($ = I + $),
                (P = { id: c++, callback: T, priorityLevel: P, startTime: I, expirationTime: $, sortIndex: -1 }),
                I > V
                    ? ((P.sortIndex = I),
                      t(u, P),
                      n(a) === null && P === n(u) && (v ? (m(N), (N = -1)) : (v = !0), U(S, I - V)))
                    : ((P.sortIndex = $), t(a, P), w || h || ((w = !0), B(C))),
                P
            );
        }),
        (e.unstable_shouldYield = D),
        (e.unstable_wrapCallback = function (P) {
            var T = g;
            return function () {
                var I = g;
                g = T;
                try {
                    return P.apply(this, arguments);
                } finally {
                    g = I;
                }
            };
        });
})(_p);
Mp.exports = _p;
var my = Mp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gy = b,
    pt = my;
function _(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
}
var Lp = new Set(),
    ts = {};
function Pr(e, t) {
    ao(e, t), ao(e + "Capture", t);
}
function ao(e, t) {
    for (ts[e] = t, e = 0; e < t.length; e++) Lp.add(t[e]);
}
var gn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Na = Object.prototype.hasOwnProperty,
    vy =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    hd = {},
    md = {};
function yy(e) {
    return Na.call(md, e) ? !0 : Na.call(hd, e) ? !1 : vy.test(e) ? (md[e] = !0) : ((hd[e] = !0), !1);
}
function xy(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r
                ? !1
                : n !== null
                  ? !n.acceptsBooleans
                  : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
        default:
            return !1;
    }
}
function wy(e, t, n, r) {
    if (t === null || typeof t > "u" || xy(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t;
        }
    return !1;
}
function qe(e, t, n, r, o, s, i) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = r),
        (this.attributeNamespace = o),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = s),
        (this.removeEmptyString = i);
}
var Ie = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
        Ie[e] = new qe(e, 0, !1, e, null, !1, !1);
    });
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
].forEach(function (e) {
    var t = e[0];
    Ie[t] = new qe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    Ie[e] = new qe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    Ie[e] = new qe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
        Ie[e] = new qe(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    Ie[e] = new qe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
    Ie[e] = new qe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
    Ie[e] = new qe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
    Ie[e] = new qe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Vu = /[\-:]([a-z])/g;
function Wu(e) {
    return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(Vu, Wu);
        Ie[t] = new qe(t, 1, !1, e, null, !1, !1);
    });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
    var t = e.replace(Vu, Wu);
    Ie[t] = new qe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(Vu, Wu);
    Ie[t] = new qe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    Ie[e] = new qe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ie.xlinkHref = new qe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
    Ie[e] = new qe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Hu(e, t, n, r) {
    var o = Ie.hasOwnProperty(t) ? Ie[t] : null;
    (o !== null
        ? o.type !== 0
        : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
        (wy(t, n, o, r) && (n = null),
        r || o === null
            ? yy(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            : o.mustUseProperty
              ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
              : ((t = o.attributeName),
                (r = o.attributeNamespace),
                n === null
                    ? e.removeAttribute(t)
                    : ((o = o.type),
                      (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
                      r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Sn = gy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Ws = Symbol.for("react.element"),
    Mr = Symbol.for("react.portal"),
    _r = Symbol.for("react.fragment"),
    Qu = Symbol.for("react.strict_mode"),
    Pa = Symbol.for("react.profiler"),
    Ip = Symbol.for("react.provider"),
    Dp = Symbol.for("react.context"),
    Gu = Symbol.for("react.forward_ref"),
    Ta = Symbol.for("react.suspense"),
    ja = Symbol.for("react.suspense_list"),
    Ku = Symbol.for("react.memo"),
    On = Symbol.for("react.lazy"),
    Fp = Symbol.for("react.offscreen"),
    gd = Symbol.iterator;
function To(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (gd && e[gd]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var ge = Object.assign,
    Kl;
function Fo(e) {
    if (Kl === void 0)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Kl = (t && t[1]) || "";
        }
    return (
        `
` +
        Kl +
        e
    );
}
var Yl = !1;
function ql(e, t) {
    if (!e || Yl) return "";
    Yl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (
                ((t = function () {
                    throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                    set: function () {
                        throw Error();
                    },
                }),
                typeof Reflect == "object" && Reflect.construct)
            ) {
                try {
                    Reflect.construct(t, []);
                } catch (u) {
                    var r = u;
                }
                Reflect.construct(e, [], t);
            } else {
                try {
                    t.call();
                } catch (u) {
                    r = u;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            } catch (u) {
                r = u;
            }
            e();
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (
                var o = u.stack.split(`
`),
                    s = r.stack.split(`
`),
                    i = o.length - 1,
                    l = s.length - 1;
                1 <= i && 0 <= l && o[i] !== s[l];

            )
                l--;
            for (; 1 <= i && 0 <= l; i--, l--)
                if (o[i] !== s[l]) {
                    if (i !== 1 || l !== 1)
                        do
                            if ((i--, l--, 0 > l || o[i] !== s[l])) {
                                var a =
                                    `
` + o[i].replace(" at new ", " at ");
                                return (
                                    e.displayName &&
                                        a.includes("<anonymous>") &&
                                        (a = a.replace("<anonymous>", e.displayName)),
                                    a
                                );
                            }
                        while (1 <= i && 0 <= l);
                    break;
                }
        }
    } finally {
        (Yl = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? Fo(e) : "";
}
function by(e) {
    switch (e.tag) {
        case 5:
            return Fo(e.type);
        case 16:
            return Fo("Lazy");
        case 13:
            return Fo("Suspense");
        case 19:
            return Fo("SuspenseList");
        case 0:
        case 2:
        case 15:
            return (e = ql(e.type, !1)), e;
        case 11:
            return (e = ql(e.type.render, !1)), e;
        case 1:
            return (e = ql(e.type, !0)), e;
        default:
            return "";
    }
}
function Ra(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case _r:
            return "Fragment";
        case Mr:
            return "Portal";
        case Pa:
            return "Profiler";
        case Qu:
            return "StrictMode";
        case Ta:
            return "Suspense";
        case ja:
            return "SuspenseList";
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case Dp:
                return (e.displayName || "Context") + ".Consumer";
            case Ip:
                return (e._context.displayName || "Context") + ".Provider";
            case Gu:
                var t = e.render;
                return (
                    (e = e.displayName),
                    e || ((e = t.displayName || t.name || ""), (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
                    e
                );
            case Ku:
                return (t = e.displayName || null), t !== null ? t : Ra(e.type) || "Memo";
            case On:
                (t = e._payload), (e = e._init);
                try {
                    return Ra(e(t));
                } catch {}
        }
    return null;
}
function Sy(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return (
                (e = t.render),
                (e = e.displayName || e.name || ""),
                t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
            );
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Ra(t);
        case 8:
            return t === Qu ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t;
    }
    return null;
}
function Zn(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return "";
    }
}
function zp(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Cy(e) {
    var t = zp(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get,
            s = n.set;
        return (
            Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return o.call(this);
                },
                set: function (i) {
                    (r = "" + i), s.call(this, i);
                },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
                getValue: function () {
                    return r;
                },
                setValue: function (i) {
                    r = "" + i;
                },
                stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                },
            }
        );
    }
}
function Hs(e) {
    e._valueTracker || (e._valueTracker = Cy(e));
}
function $p(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = zp(e) ? (e.checked ? "true" : "false") : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function Ni(e) {
    if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
    try {
        return e.activeElement || e.body;
    } catch {
        return e.body;
    }
}
function Aa(e, t) {
    var n = t.checked;
    return ge({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked,
    });
}
function vd(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    (n = Zn(t.value != null ? t.value : n)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
        });
}
function Bp(e, t) {
    (t = t.checked), t != null && Hu(e, "checked", t, !1);
}
function Oa(e, t) {
    Bp(e, t);
    var n = Zn(t.value),
        r = t.type;
    if (n != null)
        r === "number"
            ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
            : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return;
    }
    t.hasOwnProperty("value")
        ? Ma(e, t.type, n)
        : t.hasOwnProperty("defaultValue") && Ma(e, t.type, Zn(t.defaultValue)),
        t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function yd(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!((r !== "submit" && r !== "reset") || (t.value !== void 0 && t.value !== null))) return;
        (t = "" + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
    }
    (n = e.name),
        n !== "" && (e.name = ""),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        n !== "" && (e.name = n);
}
function Ma(e, t, n) {
    (t !== "number" || Ni(e.ownerDocument) !== e) &&
        (n == null
            ? (e.defaultValue = "" + e._wrapperState.initialValue)
            : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var zo = Array.isArray;
function Hr(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            (o = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0);
    } else {
        for (n = "" + Zn(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                (e[o].selected = !0), r && (e[o].defaultSelected = !0);
                return;
            }
            t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
    }
}
function _a(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
    return ge({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function xd(e, t) {
    var n = t.value;
    if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
            if (t != null) throw Error(_(92));
            if (zo(n)) {
                if (1 < n.length) throw Error(_(93));
                n = n[0];
            }
            t = n;
        }
        t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: Zn(n) };
}
function Up(e, t) {
    var n = Zn(t.value),
        r = Zn(t.defaultValue);
    n != null &&
        ((n = "" + n),
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = "" + r);
}
function wd(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Vp(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}
function La(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
        ? Vp(t)
        : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
          ? "http://www.w3.org/1999/xhtml"
          : e;
}
var Qs,
    Wp = (function (e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
            ? function (t, n, r, o) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return e(t, n, r, o);
                  });
              }
            : e;
    })(function (e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
        else {
            for (
                Qs = Qs || document.createElement("div"),
                    Qs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
                    t = Qs.firstChild;
                e.firstChild;

            )
                e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
    });
function ns(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return;
        }
    }
    e.textContent = t;
}
var Wo = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
    },
    Ey = ["Webkit", "ms", "Moz", "O"];
Object.keys(Wo).forEach(function (e) {
    Ey.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Wo[t] = Wo[e]);
    });
});
function Hp(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
        ? ""
        : n || typeof t != "number" || t === 0 || (Wo.hasOwnProperty(e) && Wo[e])
          ? ("" + t).trim()
          : t + "px";
}
function Qp(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                o = Hp(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
        }
}
var ky = ge(
    { menuitem: !0 },
    {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
    }
);
function Ia(e, t) {
    if (t) {
        if (ky[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(_(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(_(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
                throw Error(_(61));
        }
        if (t.style != null && typeof t.style != "object") throw Error(_(62));
    }
}
function Da(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0;
    }
}
var Fa = null;
function Yu(e) {
    return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    );
}
var za = null,
    Qr = null,
    Gr = null;
function bd(e) {
    if ((e = As(e))) {
        if (typeof za != "function") throw Error(_(280));
        var t = e.stateNode;
        t && ((t = dl(t)), za(e.stateNode, e.type, t));
    }
}
function Gp(e) {
    Qr ? (Gr ? Gr.push(e) : (Gr = [e])) : (Qr = e);
}
function Kp() {
    if (Qr) {
        var e = Qr,
            t = Gr;
        if (((Gr = Qr = null), bd(e), t)) for (e = 0; e < t.length; e++) bd(t[e]);
    }
}
function Yp(e, t) {
    return e(t);
}
function qp() {}
var Xl = !1;
function Xp(e, t, n) {
    if (Xl) return e(t, n);
    Xl = !0;
    try {
        return Yp(e, t, n);
    } finally {
        (Xl = !1), (Qr !== null || Gr !== null) && (qp(), Kp());
    }
}
function rs(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = dl(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) ||
                ((e = e.type), (r = !(e === "button" || e === "input" || e === "select" || e === "textarea"))),
                (e = !r);
            break e;
        default:
            e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(_(231, t, typeof n));
    return n;
}
var $a = !1;
if (gn)
    try {
        var jo = {};
        Object.defineProperty(jo, "passive", {
            get: function () {
                $a = !0;
            },
        }),
            window.addEventListener("test", jo, jo),
            window.removeEventListener("test", jo, jo);
    } catch {
        $a = !1;
    }
function Ny(e, t, n, r, o, s, i, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u);
    } catch (c) {
        this.onError(c);
    }
}
var Ho = !1,
    Pi = null,
    Ti = !1,
    Ba = null,
    Py = {
        onError: function (e) {
            (Ho = !0), (Pi = e);
        },
    };
function Ty(e, t, n, r, o, s, i, l, a) {
    (Ho = !1), (Pi = null), Ny.apply(Py, arguments);
}
function jy(e, t, n, r, o, s, i, l, a) {
    if ((Ty.apply(this, arguments), Ho)) {
        if (Ho) {
            var u = Pi;
            (Ho = !1), (Pi = null);
        } else throw Error(_(198));
        Ti || ((Ti = !0), (Ba = u));
    }
}
function Tr(e) {
    var t = e,
        n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
        e = t;
        do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
        while (e);
    }
    return t.tag === 3 ? n : null;
}
function Zp(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
    }
    return null;
}
function Sd(e) {
    if (Tr(e) !== e) throw Error(_(188));
}
function Ry(e) {
    var t = e.alternate;
    if (!t) {
        if (((t = Tr(e)), t === null)) throw Error(_(188));
        return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null) break;
        var s = o.alternate;
        if (s === null) {
            if (((r = o.return), r !== null)) {
                n = r;
                continue;
            }
            break;
        }
        if (o.child === s.child) {
            for (s = o.child; s; ) {
                if (s === n) return Sd(o), e;
                if (s === r) return Sd(o), t;
                s = s.sibling;
            }
            throw Error(_(188));
        }
        if (n.return !== r.return) (n = o), (r = s);
        else {
            for (var i = !1, l = o.child; l; ) {
                if (l === n) {
                    (i = !0), (n = o), (r = s);
                    break;
                }
                if (l === r) {
                    (i = !0), (r = o), (n = s);
                    break;
                }
                l = l.sibling;
            }
            if (!i) {
                for (l = s.child; l; ) {
                    if (l === n) {
                        (i = !0), (n = s), (r = o);
                        break;
                    }
                    if (l === r) {
                        (i = !0), (r = s), (n = o);
                        break;
                    }
                    l = l.sibling;
                }
                if (!i) throw Error(_(189));
            }
        }
        if (n.alternate !== r) throw Error(_(190));
    }
    if (n.tag !== 3) throw Error(_(188));
    return n.stateNode.current === n ? e : t;
}
function Jp(e) {
    return (e = Ry(e)), e !== null ? eh(e) : null;
}
function eh(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
        var t = eh(e);
        if (t !== null) return t;
        e = e.sibling;
    }
    return null;
}
var th = pt.unstable_scheduleCallback,
    Cd = pt.unstable_cancelCallback,
    Ay = pt.unstable_shouldYield,
    Oy = pt.unstable_requestPaint,
    be = pt.unstable_now,
    My = pt.unstable_getCurrentPriorityLevel,
    qu = pt.unstable_ImmediatePriority,
    nh = pt.unstable_UserBlockingPriority,
    ji = pt.unstable_NormalPriority,
    _y = pt.unstable_LowPriority,
    rh = pt.unstable_IdlePriority,
    ll = null,
    en = null;
function Ly(e) {
    if (en && typeof en.onCommitFiberRoot == "function")
        try {
            en.onCommitFiberRoot(ll, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
}
var zt = Math.clz32 ? Math.clz32 : Fy,
    Iy = Math.log,
    Dy = Math.LN2;
function Fy(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Iy(e) / Dy) | 0)) | 0;
}
var Gs = 64,
    Ks = 4194304;
function $o(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e;
    }
}
function Ri(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        o = e.suspendedLanes,
        s = e.pingedLanes,
        i = n & 268435455;
    if (i !== 0) {
        var l = i & ~o;
        l !== 0 ? (r = $o(l)) : ((s &= i), s !== 0 && (r = $o(s)));
    } else (i = n & ~o), i !== 0 ? (r = $o(i)) : s !== 0 && (r = $o(s));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & o) && ((o = r & -r), (s = t & -t), o >= s || (o === 16 && (s & 4194240) !== 0)))
        return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - zt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
    return r;
}
function zy(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1;
    }
}
function $y(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
        var i = 31 - zt(s),
            l = 1 << i,
            a = o[i];
        a === -1 ? (!(l & n) || l & r) && (o[i] = zy(l, t)) : a <= t && (e.expiredLanes |= l), (s &= ~l);
    }
}
function Ua(e) {
    return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function oh() {
    var e = Gs;
    return (Gs <<= 1), !(Gs & 4194240) && (Gs = 64), e;
}
function Zl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function js(e, t, n) {
    (e.pendingLanes |= t),
        t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - zt(t)),
        (e[t] = n);
}
function By(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= t),
        (e.mutableReadLanes &= t),
        (e.entangledLanes &= t),
        (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - zt(n),
            s = 1 << o;
        (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~s);
    }
}
function Xu(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - zt(n),
            o = 1 << r;
        (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
    }
}
var oe = 0;
function sh(e) {
    return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ih,
    Zu,
    lh,
    ah,
    uh,
    Va = !1,
    Ys = [],
    Wn = null,
    Hn = null,
    Qn = null,
    os = new Map(),
    ss = new Map(),
    _n = [],
    Uy =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
            " "
        );
function Ed(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Wn = null;
            break;
        case "dragenter":
        case "dragleave":
            Hn = null;
            break;
        case "mouseover":
        case "mouseout":
            Qn = null;
            break;
        case "pointerover":
        case "pointerout":
            os.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            ss.delete(t.pointerId);
    }
}
function Ro(e, t, n, r, o, s) {
    return e === null || e.nativeEvent !== s
        ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [o] }),
          t !== null && ((t = As(t)), t !== null && Zu(t)),
          e)
        : ((e.eventSystemFlags |= r), (t = e.targetContainers), o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function Vy(e, t, n, r, o) {
    switch (t) {
        case "focusin":
            return (Wn = Ro(Wn, e, t, n, r, o)), !0;
        case "dragenter":
            return (Hn = Ro(Hn, e, t, n, r, o)), !0;
        case "mouseover":
            return (Qn = Ro(Qn, e, t, n, r, o)), !0;
        case "pointerover":
            var s = o.pointerId;
            return os.set(s, Ro(os.get(s) || null, e, t, n, r, o)), !0;
        case "gotpointercapture":
            return (s = o.pointerId), ss.set(s, Ro(ss.get(s) || null, e, t, n, r, o)), !0;
    }
    return !1;
}
function ch(e) {
    var t = ur(e.target);
    if (t !== null) {
        var n = Tr(t);
        if (n !== null) {
            if (((t = n.tag), t === 13)) {
                if (((t = Zp(n)), t !== null)) {
                    (e.blockedOn = t),
                        uh(e.priority, function () {
                            lh(n);
                        });
                    return;
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return;
            }
        }
    }
    e.blockedOn = null;
}
function pi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Wa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            (Fa = r), n.target.dispatchEvent(r), (Fa = null);
        } else return (t = As(n)), t !== null && Zu(t), (e.blockedOn = n), !1;
        t.shift();
    }
    return !0;
}
function kd(e, t, n) {
    pi(e) && n.delete(t);
}
function Wy() {
    (Va = !1),
        Wn !== null && pi(Wn) && (Wn = null),
        Hn !== null && pi(Hn) && (Hn = null),
        Qn !== null && pi(Qn) && (Qn = null),
        os.forEach(kd),
        ss.forEach(kd);
}
function Ao(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null), Va || ((Va = !0), pt.unstable_scheduleCallback(pt.unstable_NormalPriority, Wy)));
}
function is(e) {
    function t(o) {
        return Ao(o, e);
    }
    if (0 < Ys.length) {
        Ao(Ys[0], e);
        for (var n = 1; n < Ys.length; n++) {
            var r = Ys[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (
        Wn !== null && Ao(Wn, e),
            Hn !== null && Ao(Hn, e),
            Qn !== null && Ao(Qn, e),
            os.forEach(t),
            ss.forEach(t),
            n = 0;
        n < _n.length;
        n++
    )
        (r = _n[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < _n.length && ((n = _n[0]), n.blockedOn === null); ) ch(n), n.blockedOn === null && _n.shift();
}
var Kr = Sn.ReactCurrentBatchConfig,
    Ai = !0;
function Hy(e, t, n, r) {
    var o = oe,
        s = Kr.transition;
    Kr.transition = null;
    try {
        (oe = 1), Ju(e, t, n, r);
    } finally {
        (oe = o), (Kr.transition = s);
    }
}
function Qy(e, t, n, r) {
    var o = oe,
        s = Kr.transition;
    Kr.transition = null;
    try {
        (oe = 4), Ju(e, t, n, r);
    } finally {
        (oe = o), (Kr.transition = s);
    }
}
function Ju(e, t, n, r) {
    if (Ai) {
        var o = Wa(e, t, n, r);
        if (o === null) aa(e, t, r, Oi, n), Ed(e, r);
        else if (Vy(o, e, t, n, r)) r.stopPropagation();
        else if ((Ed(e, r), t & 4 && -1 < Uy.indexOf(e))) {
            for (; o !== null; ) {
                var s = As(o);
                if ((s !== null && ih(s), (s = Wa(e, t, n, r)), s === null && aa(e, t, r, Oi, n), s === o)) break;
                o = s;
            }
            o !== null && r.stopPropagation();
        } else aa(e, t, r, null, n);
    }
}
var Oi = null;
function Wa(e, t, n, r) {
    if (((Oi = null), (e = Yu(r)), (e = ur(e)), e !== null))
        if (((t = Tr(e)), t === null)) e = null;
        else if (((n = t.tag), n === 13)) {
            if (((e = Zp(t)), e !== null)) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return (Oi = e), null;
}
function dh(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (My()) {
                case qu:
                    return 1;
                case nh:
                    return 4;
                case ji:
                case _y:
                    return 16;
                case rh:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var Bn = null,
    ec = null,
    hi = null;
function fh() {
    if (hi) return hi;
    var e,
        t = ec,
        n = t.length,
        r,
        o = "value" in Bn ? Bn.value : Bn.textContent,
        s = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === o[s - r]; r++);
    return (hi = o.slice(e, 1 < r ? 1 - r : void 0));
}
function mi(e) {
    var t = e.keyCode;
    return (
        "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    );
}
function qs() {
    return !0;
}
function Nd() {
    return !1;
}
function gt(e) {
    function t(n, r, o, s, i) {
        (this._reactName = n),
            (this._targetInst = o),
            (this.type = r),
            (this.nativeEvent = s),
            (this.target = i),
            (this.currentTarget = null);
        for (var l in e) e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(s) : s[l]));
        return (
            (this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1)
                ? qs
                : Nd),
            (this.isPropagationStopped = Nd),
            this
        );
    }
    return (
        ge(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n &&
                    (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
                    (this.isDefaultPrevented = qs));
            },
            stopPropagation: function () {
                var n = this.nativeEvent;
                n &&
                    (n.stopPropagation
                        ? n.stopPropagation()
                        : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
                    (this.isPropagationStopped = qs));
            },
            persist: function () {},
            isPersistent: qs,
        }),
        t
    );
}
var xo = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    tc = gt(xo),
    Rs = ge({}, xo, { view: 0, detail: 0 }),
    Gy = gt(Rs),
    Jl,
    ea,
    Oo,
    al = ge({}, Rs, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: nc,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0
                ? e.fromElement === e.srcElement
                    ? e.toElement
                    : e.fromElement
                : e.relatedTarget;
        },
        movementX: function (e) {
            return "movementX" in e
                ? e.movementX
                : (e !== Oo &&
                      (Oo && e.type === "mousemove"
                          ? ((Jl = e.screenX - Oo.screenX), (ea = e.screenY - Oo.screenY))
                          : (ea = Jl = 0),
                      (Oo = e)),
                  Jl);
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : ea;
        },
    }),
    Pd = gt(al),
    Ky = ge({}, al, { dataTransfer: 0 }),
    Yy = gt(Ky),
    qy = ge({}, Rs, { relatedTarget: 0 }),
    ta = gt(qy),
    Xy = ge({}, xo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Zy = gt(Xy),
    Jy = ge({}, xo, {
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        },
    }),
    e0 = gt(Jy),
    t0 = ge({}, xo, { data: 0 }),
    Td = gt(t0),
    n0 = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
    },
    r0 = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
    },
    o0 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function s0(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = o0[e]) ? !!t[e] : !1;
}
function nc() {
    return s0;
}
var i0 = ge({}, Rs, {
        key: function (e) {
            if (e.key) {
                var t = n0[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress"
                ? ((e = mi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
                : e.type === "keydown" || e.type === "keyup"
                  ? r0[e.keyCode] || "Unidentified"
                  : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: nc,
        charCode: function (e) {
            return e.type === "keypress" ? mi(e) : 0;
        },
        keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function (e) {
            return e.type === "keypress" ? mi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
    }),
    l0 = gt(i0),
    a0 = ge({}, al, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
    }),
    jd = gt(a0),
    u0 = ge({}, Rs, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: nc,
    }),
    c0 = gt(u0),
    d0 = ge({}, xo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    f0 = gt(d0),
    p0 = ge({}, al, {
        deltaX: function (e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function (e) {
            return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                  ? -e.wheelDeltaY
                  : "wheelDelta" in e
                    ? -e.wheelDelta
                    : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    h0 = gt(p0),
    m0 = [9, 13, 27, 32],
    rc = gn && "CompositionEvent" in window,
    Qo = null;
gn && "documentMode" in document && (Qo = document.documentMode);
var g0 = gn && "TextEvent" in window && !Qo,
    ph = gn && (!rc || (Qo && 8 < Qo && 11 >= Qo)),
    Rd = " ",
    Ad = !1;
function hh(e, t) {
    switch (e) {
        case "keyup":
            return m0.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1;
    }
}
function mh(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Lr = !1;
function v0(e, t) {
    switch (e) {
        case "compositionend":
            return mh(t);
        case "keypress":
            return t.which !== 32 ? null : ((Ad = !0), Rd);
        case "textInput":
            return (e = t.data), e === Rd && Ad ? null : e;
        default:
            return null;
    }
}
function y0(e, t) {
    if (Lr)
        return e === "compositionend" || (!rc && hh(e, t)) ? ((e = fh()), (hi = ec = Bn = null), (Lr = !1), e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which);
            }
            return null;
        case "compositionend":
            return ph && t.locale !== "ko" ? null : t.data;
        default:
            return null;
    }
}
var x0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
};
function Od(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!x0[e.type] : t === "textarea";
}
function gh(e, t, n, r) {
    Gp(r),
        (t = Mi(t, "onChange")),
        0 < t.length && ((n = new tc("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
}
var Go = null,
    ls = null;
function w0(e) {
    Ph(e, 0);
}
function ul(e) {
    var t = Fr(e);
    if ($p(t)) return e;
}
function b0(e, t) {
    if (e === "change") return t;
}
var vh = !1;
if (gn) {
    var na;
    if (gn) {
        var ra = "oninput" in document;
        if (!ra) {
            var Md = document.createElement("div");
            Md.setAttribute("oninput", "return;"), (ra = typeof Md.oninput == "function");
        }
        na = ra;
    } else na = !1;
    vh = na && (!document.documentMode || 9 < document.documentMode);
}
function _d() {
    Go && (Go.detachEvent("onpropertychange", yh), (ls = Go = null));
}
function yh(e) {
    if (e.propertyName === "value" && ul(ls)) {
        var t = [];
        gh(t, ls, e, Yu(e)), Xp(w0, t);
    }
}
function S0(e, t, n) {
    e === "focusin" ? (_d(), (Go = t), (ls = n), Go.attachEvent("onpropertychange", yh)) : e === "focusout" && _d();
}
function C0(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return ul(ls);
}
function E0(e, t) {
    if (e === "click") return ul(t);
}
function k0(e, t) {
    if (e === "input" || e === "change") return ul(t);
}
function N0(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ut = typeof Object.is == "function" ? Object.is : N0;
function as(e, t) {
    if (Ut(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!Na.call(t, o) || !Ut(e[o], t[o])) return !1;
    }
    return !0;
}
function Ld(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function Id(e, t) {
    var n = Ld(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
            e = r;
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e;
                }
                n = n.parentNode;
            }
            n = void 0;
        }
        n = Ld(n);
    }
}
function xh(e, t) {
    return e && t
        ? e === t
            ? !0
            : e && e.nodeType === 3
              ? !1
              : t && t.nodeType === 3
                ? xh(e, t.parentNode)
                : "contains" in e
                  ? e.contains(t)
                  : e.compareDocumentPosition
                    ? !!(e.compareDocumentPosition(t) & 16)
                    : !1
        : !1;
}
function wh() {
    for (var e = window, t = Ni(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string";
        } catch {
            n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Ni(e.document);
    }
    return t;
}
function oc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
        t &&
        ((t === "input" &&
            (e.type === "text" ||
                e.type === "search" ||
                e.type === "tel" ||
                e.type === "url" ||
                e.type === "password")) ||
            t === "textarea" ||
            e.contentEditable === "true")
    );
}
function P0(e) {
    var t = wh(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && xh(n.ownerDocument.documentElement, n)) {
        if (r !== null && oc(n)) {
            if (((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n))
                (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
            else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
                e = e.getSelection();
                var o = n.textContent.length,
                    s = Math.min(r.start, o);
                (r = r.end === void 0 ? s : Math.min(r.end, o)),
                    !e.extend && s > r && ((o = r), (r = s), (s = o)),
                    (o = Id(n, s));
                var i = Id(n, r);
                o &&
                    i &&
                    (e.rangeCount !== 1 ||
                        e.anchorNode !== o.node ||
                        e.anchorOffset !== o.offset ||
                        e.focusNode !== i.node ||
                        e.focusOffset !== i.offset) &&
                    ((t = t.createRange()),
                    t.setStart(o.node, o.offset),
                    e.removeAllRanges(),
                    s > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
            }
        }
        for (t = [], e = n; (e = e.parentNode); )
            e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
            (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
    }
}
var T0 = gn && "documentMode" in document && 11 >= document.documentMode,
    Ir = null,
    Ha = null,
    Ko = null,
    Qa = !1;
function Dd(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Qa ||
        Ir == null ||
        Ir !== Ni(r) ||
        ((r = Ir),
        "selectionStart" in r && oc(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
              (r = {
                  anchorNode: r.anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
              })),
        (Ko && as(Ko, r)) ||
            ((Ko = r),
            (r = Mi(Ha, "onSelect")),
            0 < r.length &&
                ((t = new tc("onSelect", "select", null, t, n)), e.push({ event: t, listeners: r }), (t.target = Ir))));
}
function Xs(e, t) {
    var n = {};
    return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
}
var Dr = {
        animationend: Xs("Animation", "AnimationEnd"),
        animationiteration: Xs("Animation", "AnimationIteration"),
        animationstart: Xs("Animation", "AnimationStart"),
        transitionend: Xs("Transition", "TransitionEnd"),
    },
    oa = {},
    bh = {};
gn &&
    ((bh = document.createElement("div").style),
    "AnimationEvent" in window ||
        (delete Dr.animationend.animation, delete Dr.animationiteration.animation, delete Dr.animationstart.animation),
    "TransitionEvent" in window || delete Dr.transitionend.transition);
function cl(e) {
    if (oa[e]) return oa[e];
    if (!Dr[e]) return e;
    var t = Dr[e],
        n;
    for (n in t) if (t.hasOwnProperty(n) && n in bh) return (oa[e] = t[n]);
    return e;
}
var Sh = cl("animationend"),
    Ch = cl("animationiteration"),
    Eh = cl("animationstart"),
    kh = cl("transitionend"),
    Nh = new Map(),
    Fd =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
            " "
        );
function rr(e, t) {
    Nh.set(e, t), Pr(t, [e]);
}
for (var sa = 0; sa < Fd.length; sa++) {
    var ia = Fd[sa],
        j0 = ia.toLowerCase(),
        R0 = ia[0].toUpperCase() + ia.slice(1);
    rr(j0, "on" + R0);
}
rr(Sh, "onAnimationEnd");
rr(Ch, "onAnimationIteration");
rr(Eh, "onAnimationStart");
rr("dblclick", "onDoubleClick");
rr("focusin", "onFocus");
rr("focusout", "onBlur");
rr(kh, "onTransitionEnd");
ao("onMouseEnter", ["mouseout", "mouseover"]);
ao("onMouseLeave", ["mouseout", "mouseover"]);
ao("onPointerEnter", ["pointerout", "pointerover"]);
ao("onPointerLeave", ["pointerout", "pointerover"]);
Pr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Pr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Pr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Pr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Pr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Pr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Bo =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " "
        ),
    A0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Bo));
function zd(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), jy(r, t, void 0, e), (e.currentTarget = null);
}
function Ph(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            o = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                    var l = r[i],
                        a = l.instance,
                        u = l.currentTarget;
                    if (((l = l.listener), a !== s && o.isPropagationStopped())) break e;
                    zd(o, l, u), (s = a);
                }
            else
                for (i = 0; i < r.length; i++) {
                    if (
                        ((l = r[i]),
                        (a = l.instance),
                        (u = l.currentTarget),
                        (l = l.listener),
                        a !== s && o.isPropagationStopped())
                    )
                        break e;
                    zd(o, l, u), (s = a);
                }
        }
    }
    if (Ti) throw ((e = Ba), (Ti = !1), (Ba = null), e);
}
function ce(e, t) {
    var n = t[Xa];
    n === void 0 && (n = t[Xa] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Th(t, e, 2, !1), n.add(r));
}
function la(e, t, n) {
    var r = 0;
    t && (r |= 4), Th(n, e, r, t);
}
var Zs = "_reactListening" + Math.random().toString(36).slice(2);
function us(e) {
    if (!e[Zs]) {
        (e[Zs] = !0),
            Lp.forEach(function (n) {
                n !== "selectionchange" && (A0.has(n) || la(n, !1, e), la(n, !0, e));
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Zs] || ((t[Zs] = !0), la("selectionchange", !1, t));
    }
}
function Th(e, t, n, r) {
    switch (dh(t)) {
        case 1:
            var o = Hy;
            break;
        case 4:
            o = Qy;
            break;
        default:
            o = Ju;
    }
    (n = o.bind(null, t, n, e)),
        (o = void 0),
        !$a || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (o = !0),
        r
            ? o !== void 0
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
            : o !== void 0
              ? e.addEventListener(t, n, { passive: o })
              : e.addEventListener(t, n, !1);
}
function aa(e, t, n, r, o) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (;;) {
            if (r === null) return;
            var i = r.tag;
            if (i === 3 || i === 4) {
                var l = r.stateNode.containerInfo;
                if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
                if (i === 4)
                    for (i = r.return; i !== null; ) {
                        var a = i.tag;
                        if (
                            (a === 3 || a === 4) &&
                            ((a = i.stateNode.containerInfo), a === o || (a.nodeType === 8 && a.parentNode === o))
                        )
                            return;
                        i = i.return;
                    }
                for (; l !== null; ) {
                    if (((i = ur(l)), i === null)) return;
                    if (((a = i.tag), a === 5 || a === 6)) {
                        r = s = i;
                        continue e;
                    }
                    l = l.parentNode;
                }
            }
            r = r.return;
        }
    Xp(function () {
        var u = s,
            c = Yu(n),
            f = [];
        e: {
            var g = Nh.get(e);
            if (g !== void 0) {
                var h = tc,
                    w = e;
                switch (e) {
                    case "keypress":
                        if (mi(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        h = l0;
                        break;
                    case "focusin":
                        (w = "focus"), (h = ta);
                        break;
                    case "focusout":
                        (w = "blur"), (h = ta);
                        break;
                    case "beforeblur":
                    case "afterblur":
                        h = ta;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        h = Pd;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        h = Yy;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        h = c0;
                        break;
                    case Sh:
                    case Ch:
                    case Eh:
                        h = Zy;
                        break;
                    case kh:
                        h = f0;
                        break;
                    case "scroll":
                        h = Gy;
                        break;
                    case "wheel":
                        h = h0;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        h = e0;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        h = jd;
                }
                var v = (t & 4) !== 0,
                    x = !v && e === "scroll",
                    m = v ? (g !== null ? g + "Capture" : null) : g;
                v = [];
                for (var p = u, y; p !== null; ) {
                    y = p;
                    var S = y.stateNode;
                    if (
                        (y.tag === 5 &&
                            S !== null &&
                            ((y = S), m !== null && ((S = rs(p, m)), S != null && v.push(cs(p, S, y)))),
                        x)
                    )
                        break;
                    p = p.return;
                }
                0 < v.length && ((g = new h(g, w, null, n, c)), f.push({ event: g, listeners: v }));
            }
        }
        if (!(t & 7)) {
            e: {
                if (
                    ((g = e === "mouseover" || e === "pointerover"),
                    (h = e === "mouseout" || e === "pointerout"),
                    g && n !== Fa && (w = n.relatedTarget || n.fromElement) && (ur(w) || w[vn]))
                )
                    break e;
                if (
                    (h || g) &&
                    ((g = c.window === c ? c : (g = c.ownerDocument) ? g.defaultView || g.parentWindow : window),
                    h
                        ? ((w = n.relatedTarget || n.toElement),
                          (h = u),
                          (w = w ? ur(w) : null),
                          w !== null && ((x = Tr(w)), w !== x || (w.tag !== 5 && w.tag !== 6)) && (w = null))
                        : ((h = null), (w = u)),
                    h !== w)
                ) {
                    if (
                        ((v = Pd),
                        (S = "onMouseLeave"),
                        (m = "onMouseEnter"),
                        (p = "mouse"),
                        (e === "pointerout" || e === "pointerover") &&
                            ((v = jd), (S = "onPointerLeave"), (m = "onPointerEnter"), (p = "pointer")),
                        (x = h == null ? g : Fr(h)),
                        (y = w == null ? g : Fr(w)),
                        (g = new v(S, p + "leave", h, n, c)),
                        (g.target = x),
                        (g.relatedTarget = y),
                        (S = null),
                        ur(c) === u &&
                            ((v = new v(m, p + "enter", w, n, c)), (v.target = y), (v.relatedTarget = x), (S = v)),
                        (x = S),
                        h && w)
                    )
                        t: {
                            for (v = h, m = w, p = 0, y = v; y; y = Or(y)) p++;
                            for (y = 0, S = m; S; S = Or(S)) y++;
                            for (; 0 < p - y; ) (v = Or(v)), p--;
                            for (; 0 < y - p; ) (m = Or(m)), y--;
                            for (; p--; ) {
                                if (v === m || (m !== null && v === m.alternate)) break t;
                                (v = Or(v)), (m = Or(m));
                            }
                            v = null;
                        }
                    else v = null;
                    h !== null && $d(f, g, h, v, !1), w !== null && x !== null && $d(f, x, w, v, !0);
                }
            }
            e: {
                if (
                    ((g = u ? Fr(u) : window),
                    (h = g.nodeName && g.nodeName.toLowerCase()),
                    h === "select" || (h === "input" && g.type === "file"))
                )
                    var C = b0;
                else if (Od(g))
                    if (vh) C = k0;
                    else {
                        C = C0;
                        var E = S0;
                    }
                else
                    (h = g.nodeName) &&
                        h.toLowerCase() === "input" &&
                        (g.type === "checkbox" || g.type === "radio") &&
                        (C = E0);
                if (C && (C = C(e, u))) {
                    gh(f, C, n, c);
                    break e;
                }
                E && E(e, g, u),
                    e === "focusout" &&
                        (E = g._wrapperState) &&
                        E.controlled &&
                        g.type === "number" &&
                        Ma(g, "number", g.value);
            }
            switch (((E = u ? Fr(u) : window), e)) {
                case "focusin":
                    (Od(E) || E.contentEditable === "true") && ((Ir = E), (Ha = u), (Ko = null));
                    break;
                case "focusout":
                    Ko = Ha = Ir = null;
                    break;
                case "mousedown":
                    Qa = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    (Qa = !1), Dd(f, n, c);
                    break;
                case "selectionchange":
                    if (T0) break;
                case "keydown":
                case "keyup":
                    Dd(f, n, c);
            }
            var k;
            if (rc)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var N = "onCompositionStart";
                            break e;
                        case "compositionend":
                            N = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            N = "onCompositionUpdate";
                            break e;
                    }
                    N = void 0;
                }
            else
                Lr
                    ? hh(e, n) && (N = "onCompositionEnd")
                    : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
            N &&
                (ph &&
                    n.locale !== "ko" &&
                    (Lr || N !== "onCompositionStart"
                        ? N === "onCompositionEnd" && Lr && (k = fh())
                        : ((Bn = c), (ec = "value" in Bn ? Bn.value : Bn.textContent), (Lr = !0))),
                (E = Mi(u, N)),
                0 < E.length &&
                    ((N = new Td(N, e, null, n, c)),
                    f.push({ event: N, listeners: E }),
                    k ? (N.data = k) : ((k = mh(n)), k !== null && (N.data = k)))),
                (k = g0 ? v0(e, n) : y0(e, n)) &&
                    ((u = Mi(u, "onBeforeInput")),
                    0 < u.length &&
                        ((c = new Td("onBeforeInput", "beforeinput", null, n, c)),
                        f.push({ event: c, listeners: u }),
                        (c.data = k)));
        }
        Ph(f, t);
    });
}
function cs(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function Mi(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e,
            s = o.stateNode;
        o.tag === 5 &&
            s !== null &&
            ((o = s),
            (s = rs(e, n)),
            s != null && r.unshift(cs(e, s, o)),
            (s = rs(e, t)),
            s != null && r.push(cs(e, s, o))),
            (e = e.return);
    }
    return r;
}
function Or(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
}
function $d(e, t, n, r, o) {
    for (var s = t._reactName, i = []; n !== null && n !== r; ) {
        var l = n,
            a = l.alternate,
            u = l.stateNode;
        if (a !== null && a === r) break;
        l.tag === 5 &&
            u !== null &&
            ((l = u),
            o
                ? ((a = rs(n, s)), a != null && i.unshift(cs(n, a, l)))
                : o || ((a = rs(n, s)), a != null && i.push(cs(n, a, l)))),
            (n = n.return);
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
}
var O0 = /\r\n?/g,
    M0 = /\u0000|\uFFFD/g;
function Bd(e) {
    return (typeof e == "string" ? e : "" + e)
        .replace(
            O0,
            `
`
        )
        .replace(M0, "");
}
function Js(e, t, n) {
    if (((t = Bd(t)), Bd(e) !== t && n)) throw Error(_(425));
}
function _i() {}
var Ga = null,
    Ka = null;
function Ya(e, t) {
    return (
        e === "textarea" ||
        e === "noscript" ||
        typeof t.children == "string" ||
        typeof t.children == "number" ||
        (typeof t.dangerouslySetInnerHTML == "object" &&
            t.dangerouslySetInnerHTML !== null &&
            t.dangerouslySetInnerHTML.__html != null)
    );
}
var qa = typeof setTimeout == "function" ? setTimeout : void 0,
    _0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ud = typeof Promise == "function" ? Promise : void 0,
    L0 =
        typeof queueMicrotask == "function"
            ? queueMicrotask
            : typeof Ud < "u"
              ? function (e) {
                    return Ud.resolve(null).then(e).catch(I0);
                }
              : qa;
function I0(e) {
    setTimeout(function () {
        throw e;
    });
}
function ua(e, t) {
    var n = t,
        r = 0;
    do {
        var o = n.nextSibling;
        if ((e.removeChild(n), o && o.nodeType === 8))
            if (((n = o.data), n === "/$")) {
                if (r === 0) {
                    e.removeChild(o), is(t);
                    return;
                }
                r--;
            } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
        n = o;
    } while (n);
    is(t);
}
function Gn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
            if (t === "/$") return null;
        }
    }
    return e;
}
function Vd(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--;
            } else n === "/$" && t++;
        }
        e = e.previousSibling;
    }
    return null;
}
var wo = Math.random().toString(36).slice(2),
    Zt = "__reactFiber$" + wo,
    ds = "__reactProps$" + wo,
    vn = "__reactContainer$" + wo,
    Xa = "__reactEvents$" + wo,
    D0 = "__reactListeners$" + wo,
    F0 = "__reactHandles$" + wo;
function ur(e) {
    var t = e[Zt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[vn] || n[Zt])) {
            if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
                for (e = Vd(e); e !== null; ) {
                    if ((n = e[Zt])) return n;
                    e = Vd(e);
                }
            return t;
        }
        (e = n), (n = e.parentNode);
    }
    return null;
}
function As(e) {
    return (e = e[Zt] || e[vn]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function Fr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(_(33));
}
function dl(e) {
    return e[ds] || null;
}
var Za = [],
    zr = -1;
function or(e) {
    return { current: e };
}
function de(e) {
    0 > zr || ((e.current = Za[zr]), (Za[zr] = null), zr--);
}
function le(e, t) {
    zr++, (Za[zr] = e.current), (e.current = t);
}
var Jn = {},
    Ue = or(Jn),
    tt = or(!1),
    wr = Jn;
function uo(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Jn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var o = {},
        s;
    for (s in n) o[s] = t[s];
    return (
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
        o
    );
}
function nt(e) {
    return (e = e.childContextTypes), e != null;
}
function Li() {
    de(tt), de(Ue);
}
function Wd(e, t, n) {
    if (Ue.current !== Jn) throw Error(_(168));
    le(Ue, t), le(tt, n);
}
function jh(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
    r = r.getChildContext();
    for (var o in r) if (!(o in t)) throw Error(_(108, Sy(e) || "Unknown", o));
    return ge({}, n, r);
}
function Ii(e) {
    return (
        (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Jn),
        (wr = Ue.current),
        le(Ue, e),
        le(tt, tt.current),
        !0
    );
}
function Hd(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(_(169));
    n ? ((e = jh(e, t, wr)), (r.__reactInternalMemoizedMergedChildContext = e), de(tt), de(Ue), le(Ue, e)) : de(tt),
        le(tt, n);
}
var dn = null,
    fl = !1,
    ca = !1;
function Rh(e) {
    dn === null ? (dn = [e]) : dn.push(e);
}
function z0(e) {
    (fl = !0), Rh(e);
}
function sr() {
    if (!ca && dn !== null) {
        ca = !0;
        var e = 0,
            t = oe;
        try {
            var n = dn;
            for (oe = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0);
                while (r !== null);
            }
            (dn = null), (fl = !1);
        } catch (o) {
            throw (dn !== null && (dn = dn.slice(e + 1)), th(qu, sr), o);
        } finally {
            (oe = t), (ca = !1);
        }
    }
    return null;
}
var $r = [],
    Br = 0,
    Di = null,
    Fi = 0,
    yt = [],
    xt = 0,
    br = null,
    pn = 1,
    hn = "";
function lr(e, t) {
    ($r[Br++] = Fi), ($r[Br++] = Di), (Di = e), (Fi = t);
}
function Ah(e, t, n) {
    (yt[xt++] = pn), (yt[xt++] = hn), (yt[xt++] = br), (br = e);
    var r = pn;
    e = hn;
    var o = 32 - zt(r) - 1;
    (r &= ~(1 << o)), (n += 1);
    var s = 32 - zt(t) + o;
    if (30 < s) {
        var i = o - (o % 5);
        (s = (r & ((1 << i) - 1)).toString(32)),
            (r >>= i),
            (o -= i),
            (pn = (1 << (32 - zt(t) + o)) | (n << o) | r),
            (hn = s + e);
    } else (pn = (1 << s) | (n << o) | r), (hn = e);
}
function sc(e) {
    e.return !== null && (lr(e, 1), Ah(e, 1, 0));
}
function ic(e) {
    for (; e === Di; ) (Di = $r[--Br]), ($r[Br] = null), (Fi = $r[--Br]), ($r[Br] = null);
    for (; e === br; )
        (br = yt[--xt]), (yt[xt] = null), (hn = yt[--xt]), (yt[xt] = null), (pn = yt[--xt]), (yt[xt] = null);
}
var ct = null,
    ut = null,
    fe = !1,
    Ft = null;
function Oh(e, t) {
    var n = wt(5, null, null, 0);
    (n.elementType = "DELETED"),
        (n.stateNode = t),
        (n.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Qd(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
                t !== null ? ((e.stateNode = t), (ct = e), (ut = Gn(t.firstChild)), !0) : !1
            );
        case 6:
            return (
                (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
                t !== null ? ((e.stateNode = t), (ct = e), (ut = null), !0) : !1
            );
        case 13:
            return (
                (t = t.nodeType !== 8 ? null : t),
                t !== null
                    ? ((n = br !== null ? { id: pn, overflow: hn } : null),
                      (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                      (n = wt(18, null, null, 0)),
                      (n.stateNode = t),
                      (n.return = e),
                      (e.child = n),
                      (ct = e),
                      (ut = null),
                      !0)
                    : !1
            );
        default:
            return !1;
    }
}
function Ja(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function eu(e) {
    if (fe) {
        var t = ut;
        if (t) {
            var n = t;
            if (!Qd(e, t)) {
                if (Ja(e)) throw Error(_(418));
                t = Gn(n.nextSibling);
                var r = ct;
                t && Qd(e, t) ? Oh(r, n) : ((e.flags = (e.flags & -4097) | 2), (fe = !1), (ct = e));
            }
        } else {
            if (Ja(e)) throw Error(_(418));
            (e.flags = (e.flags & -4097) | 2), (fe = !1), (ct = e);
        }
    }
}
function Gd(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    ct = e;
}
function ei(e) {
    if (e !== ct) return !1;
    if (!fe) return Gd(e), (fe = !0), !1;
    var t;
    if (
        ((t = e.tag !== 3) &&
            !(t = e.tag !== 5) &&
            ((t = e.type), (t = t !== "head" && t !== "body" && !Ya(e.type, e.memoizedProps))),
        t && (t = ut))
    ) {
        if (Ja(e)) throw (Mh(), Error(_(418)));
        for (; t; ) Oh(e, t), (t = Gn(t.nextSibling));
    }
    if ((Gd(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(_(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            ut = Gn(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
                }
                e = e.nextSibling;
            }
            ut = null;
        }
    } else ut = ct ? Gn(e.stateNode.nextSibling) : null;
    return !0;
}
function Mh() {
    for (var e = ut; e; ) e = Gn(e.nextSibling);
}
function co() {
    (ut = ct = null), (fe = !1);
}
function lc(e) {
    Ft === null ? (Ft = [e]) : Ft.push(e);
}
var $0 = Sn.ReactCurrentBatchConfig;
function Mo(e, t, n) {
    if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
        if (n._owner) {
            if (((n = n._owner), n)) {
                if (n.tag !== 1) throw Error(_(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(_(147, e));
            var o = r,
                s = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s
                ? t.ref
                : ((t = function (i) {
                      var l = o.refs;
                      i === null ? delete l[s] : (l[s] = i);
                  }),
                  (t._stringRef = s),
                  t);
        }
        if (typeof e != "string") throw Error(_(284));
        if (!n._owner) throw Error(_(290, e));
    }
    return e;
}
function ti(e, t) {
    throw (
        ((e = Object.prototype.toString.call(t)),
        Error(_(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
    );
}
function Kd(e) {
    var t = e._init;
    return t(e._payload);
}
function _h(e) {
    function t(m, p) {
        if (e) {
            var y = m.deletions;
            y === null ? ((m.deletions = [p]), (m.flags |= 16)) : y.push(p);
        }
    }
    function n(m, p) {
        if (!e) return null;
        for (; p !== null; ) t(m, p), (p = p.sibling);
        return null;
    }
    function r(m, p) {
        for (m = new Map(); p !== null; ) p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling);
        return m;
    }
    function o(m, p) {
        return (m = Xn(m, p)), (m.index = 0), (m.sibling = null), m;
    }
    function s(m, p, y) {
        return (
            (m.index = y),
            e
                ? ((y = m.alternate),
                  y !== null ? ((y = y.index), y < p ? ((m.flags |= 2), p) : y) : ((m.flags |= 2), p))
                : ((m.flags |= 1048576), p)
        );
    }
    function i(m) {
        return e && m.alternate === null && (m.flags |= 2), m;
    }
    function l(m, p, y, S) {
        return p === null || p.tag !== 6
            ? ((p = va(y, m.mode, S)), (p.return = m), p)
            : ((p = o(p, y)), (p.return = m), p);
    }
    function a(m, p, y, S) {
        var C = y.type;
        return C === _r
            ? c(m, p, y.props.children, S, y.key)
            : p !== null &&
                (p.elementType === C || (typeof C == "object" && C !== null && C.$$typeof === On && Kd(C) === p.type))
              ? ((S = o(p, y.props)), (S.ref = Mo(m, p, y)), (S.return = m), S)
              : ((S = Si(y.type, y.key, y.props, null, m.mode, S)), (S.ref = Mo(m, p, y)), (S.return = m), S);
    }
    function u(m, p, y, S) {
        return p === null ||
            p.tag !== 4 ||
            p.stateNode.containerInfo !== y.containerInfo ||
            p.stateNode.implementation !== y.implementation
            ? ((p = ya(y, m.mode, S)), (p.return = m), p)
            : ((p = o(p, y.children || [])), (p.return = m), p);
    }
    function c(m, p, y, S, C) {
        return p === null || p.tag !== 7
            ? ((p = xr(y, m.mode, S, C)), (p.return = m), p)
            : ((p = o(p, y)), (p.return = m), p);
    }
    function f(m, p, y) {
        if ((typeof p == "string" && p !== "") || typeof p == "number")
            return (p = va("" + p, m.mode, y)), (p.return = m), p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case Ws:
                    return (
                        (y = Si(p.type, p.key, p.props, null, m.mode, y)), (y.ref = Mo(m, null, p)), (y.return = m), y
                    );
                case Mr:
                    return (p = ya(p, m.mode, y)), (p.return = m), p;
                case On:
                    var S = p._init;
                    return f(m, S(p._payload), y);
            }
            if (zo(p) || To(p)) return (p = xr(p, m.mode, y, null)), (p.return = m), p;
            ti(m, p);
        }
        return null;
    }
    function g(m, p, y, S) {
        var C = p !== null ? p.key : null;
        if ((typeof y == "string" && y !== "") || typeof y == "number") return C !== null ? null : l(m, p, "" + y, S);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
                case Ws:
                    return y.key === C ? a(m, p, y, S) : null;
                case Mr:
                    return y.key === C ? u(m, p, y, S) : null;
                case On:
                    return (C = y._init), g(m, p, C(y._payload), S);
            }
            if (zo(y) || To(y)) return C !== null ? null : c(m, p, y, S, null);
            ti(m, y);
        }
        return null;
    }
    function h(m, p, y, S, C) {
        if ((typeof S == "string" && S !== "") || typeof S == "number")
            return (m = m.get(y) || null), l(p, m, "" + S, C);
        if (typeof S == "object" && S !== null) {
            switch (S.$$typeof) {
                case Ws:
                    return (m = m.get(S.key === null ? y : S.key) || null), a(p, m, S, C);
                case Mr:
                    return (m = m.get(S.key === null ? y : S.key) || null), u(p, m, S, C);
                case On:
                    var E = S._init;
                    return h(m, p, y, E(S._payload), C);
            }
            if (zo(S) || To(S)) return (m = m.get(y) || null), c(p, m, S, C, null);
            ti(p, S);
        }
        return null;
    }
    function w(m, p, y, S) {
        for (var C = null, E = null, k = p, N = (p = 0), R = null; k !== null && N < y.length; N++) {
            k.index > N ? ((R = k), (k = null)) : (R = k.sibling);
            var A = g(m, k, y[N], S);
            if (A === null) {
                k === null && (k = R);
                break;
            }
            e && k && A.alternate === null && t(m, k),
                (p = s(A, p, N)),
                E === null ? (C = A) : (E.sibling = A),
                (E = A),
                (k = R);
        }
        if (N === y.length) return n(m, k), fe && lr(m, N), C;
        if (k === null) {
            for (; N < y.length; N++)
                (k = f(m, y[N], S)), k !== null && ((p = s(k, p, N)), E === null ? (C = k) : (E.sibling = k), (E = k));
            return fe && lr(m, N), C;
        }
        for (k = r(m, k); N < y.length; N++)
            (R = h(k, m, N, y[N], S)),
                R !== null &&
                    (e && R.alternate !== null && k.delete(R.key === null ? N : R.key),
                    (p = s(R, p, N)),
                    E === null ? (C = R) : (E.sibling = R),
                    (E = R));
        return (
            e &&
                k.forEach(function (D) {
                    return t(m, D);
                }),
            fe && lr(m, N),
            C
        );
    }
    function v(m, p, y, S) {
        var C = To(y);
        if (typeof C != "function") throw Error(_(150));
        if (((y = C.call(y)), y == null)) throw Error(_(151));
        for (var E = (C = null), k = p, N = (p = 0), R = null, A = y.next(); k !== null && !A.done; N++, A = y.next()) {
            k.index > N ? ((R = k), (k = null)) : (R = k.sibling);
            var D = g(m, k, A.value, S);
            if (D === null) {
                k === null && (k = R);
                break;
            }
            e && k && D.alternate === null && t(m, k),
                (p = s(D, p, N)),
                E === null ? (C = D) : (E.sibling = D),
                (E = D),
                (k = R);
        }
        if (A.done) return n(m, k), fe && lr(m, N), C;
        if (k === null) {
            for (; !A.done; N++, A = y.next())
                (A = f(m, A.value, S)),
                    A !== null && ((p = s(A, p, N)), E === null ? (C = A) : (E.sibling = A), (E = A));
            return fe && lr(m, N), C;
        }
        for (k = r(m, k); !A.done; N++, A = y.next())
            (A = h(k, m, N, A.value, S)),
                A !== null &&
                    (e && A.alternate !== null && k.delete(A.key === null ? N : A.key),
                    (p = s(A, p, N)),
                    E === null ? (C = A) : (E.sibling = A),
                    (E = A));
        return (
            e &&
                k.forEach(function (L) {
                    return t(m, L);
                }),
            fe && lr(m, N),
            C
        );
    }
    function x(m, p, y, S) {
        if (
            (typeof y == "object" && y !== null && y.type === _r && y.key === null && (y = y.props.children),
            typeof y == "object" && y !== null)
        ) {
            switch (y.$$typeof) {
                case Ws:
                    e: {
                        for (var C = y.key, E = p; E !== null; ) {
                            if (E.key === C) {
                                if (((C = y.type), C === _r)) {
                                    if (E.tag === 7) {
                                        n(m, E.sibling), (p = o(E, y.props.children)), (p.return = m), (m = p);
                                        break e;
                                    }
                                } else if (
                                    E.elementType === C ||
                                    (typeof C == "object" && C !== null && C.$$typeof === On && Kd(C) === E.type)
                                ) {
                                    n(m, E.sibling),
                                        (p = o(E, y.props)),
                                        (p.ref = Mo(m, E, y)),
                                        (p.return = m),
                                        (m = p);
                                    break e;
                                }
                                n(m, E);
                                break;
                            } else t(m, E);
                            E = E.sibling;
                        }
                        y.type === _r
                            ? ((p = xr(y.props.children, m.mode, S, y.key)), (p.return = m), (m = p))
                            : ((S = Si(y.type, y.key, y.props, null, m.mode, S)),
                              (S.ref = Mo(m, p, y)),
                              (S.return = m),
                              (m = S));
                    }
                    return i(m);
                case Mr:
                    e: {
                        for (E = y.key; p !== null; ) {
                            if (p.key === E)
                                if (
                                    p.tag === 4 &&
                                    p.stateNode.containerInfo === y.containerInfo &&
                                    p.stateNode.implementation === y.implementation
                                ) {
                                    n(m, p.sibling), (p = o(p, y.children || [])), (p.return = m), (m = p);
                                    break e;
                                } else {
                                    n(m, p);
                                    break;
                                }
                            else t(m, p);
                            p = p.sibling;
                        }
                        (p = ya(y, m.mode, S)), (p.return = m), (m = p);
                    }
                    return i(m);
                case On:
                    return (E = y._init), x(m, p, E(y._payload), S);
            }
            if (zo(y)) return w(m, p, y, S);
            if (To(y)) return v(m, p, y, S);
            ti(m, y);
        }
        return (typeof y == "string" && y !== "") || typeof y == "number"
            ? ((y = "" + y),
              p !== null && p.tag === 6
                  ? (n(m, p.sibling), (p = o(p, y)), (p.return = m), (m = p))
                  : (n(m, p), (p = va(y, m.mode, S)), (p.return = m), (m = p)),
              i(m))
            : n(m, p);
    }
    return x;
}
var fo = _h(!0),
    Lh = _h(!1),
    zi = or(null),
    $i = null,
    Ur = null,
    ac = null;
function uc() {
    ac = Ur = $i = null;
}
function cc(e) {
    var t = zi.current;
    de(zi), (e._currentValue = t);
}
function tu(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if (
            ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
                : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
        )
            break;
        e = e.return;
    }
}
function Yr(e, t) {
    ($i = e),
        (ac = Ur = null),
        (e = e.dependencies),
        e !== null && e.firstContext !== null && (e.lanes & t && (et = !0), (e.firstContext = null));
}
function St(e) {
    var t = e._currentValue;
    if (ac !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), Ur === null)) {
            if ($i === null) throw Error(_(308));
            (Ur = e), ($i.dependencies = { lanes: 0, firstContext: e });
        } else Ur = Ur.next = e;
    return t;
}
var cr = null;
function dc(e) {
    cr === null ? (cr = [e]) : cr.push(e);
}
function Ih(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? ((n.next = n), dc(t)) : ((n.next = o.next), (o.next = n)), (t.interleaved = n), yn(e, r);
}
function yn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
        (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
}
var Mn = !1;
function fc(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function Dh(e, t) {
    (e = e.updateQueue),
        t.updateQueue === e &&
            (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
            });
}
function mn(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Kn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), ee & 2)) {
        var o = r.pending;
        return o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)), (r.pending = t), yn(e, n);
    }
    return (
        (o = r.interleaved),
        o === null ? ((t.next = t), dc(r)) : ((t.next = o.next), (o.next = t)),
        (r.interleaved = t),
        yn(e, n)
    );
}
function gi(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), Xu(e, n);
    }
}
function Yd(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
        var o = null,
            s = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null,
                };
                s === null ? (o = s = i) : (s = s.next = i), (n = n.next);
            } while (n !== null);
            s === null ? (o = s = t) : (s = s.next = t);
        } else o = s = t;
        (n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: s, shared: r.shared, effects: r.effects }),
            (e.updateQueue = n);
        return;
    }
    (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function Bi(e, t, n, r) {
    var o = e.updateQueue;
    Mn = !1;
    var s = o.firstBaseUpdate,
        i = o.lastBaseUpdate,
        l = o.shared.pending;
    if (l !== null) {
        o.shared.pending = null;
        var a = l,
            u = a.next;
        (a.next = null), i === null ? (s = u) : (i.next = u), (i = a);
        var c = e.alternate;
        c !== null &&
            ((c = c.updateQueue),
            (l = c.lastBaseUpdate),
            l !== i && (l === null ? (c.firstBaseUpdate = u) : (l.next = u), (c.lastBaseUpdate = a)));
    }
    if (s !== null) {
        var f = o.baseState;
        (i = 0), (c = u = a = null), (l = s);
        do {
            var g = l.lane,
                h = l.eventTime;
            if ((r & g) === g) {
                c !== null &&
                    (c = c.next =
                        { eventTime: h, lane: 0, tag: l.tag, payload: l.payload, callback: l.callback, next: null });
                e: {
                    var w = e,
                        v = l;
                    switch (((g = t), (h = n), v.tag)) {
                        case 1:
                            if (((w = v.payload), typeof w == "function")) {
                                f = w.call(h, f, g);
                                break e;
                            }
                            f = w;
                            break e;
                        case 3:
                            w.flags = (w.flags & -65537) | 128;
                        case 0:
                            if (((w = v.payload), (g = typeof w == "function" ? w.call(h, f, g) : w), g == null))
                                break e;
                            f = ge({}, f, g);
                            break e;
                        case 2:
                            Mn = !0;
                    }
                }
                l.callback !== null &&
                    l.lane !== 0 &&
                    ((e.flags |= 64), (g = o.effects), g === null ? (o.effects = [l]) : g.push(l));
            } else
                (h = { eventTime: h, lane: g, tag: l.tag, payload: l.payload, callback: l.callback, next: null }),
                    c === null ? ((u = c = h), (a = f)) : (c = c.next = h),
                    (i |= g);
            if (((l = l.next), l === null)) {
                if (((l = o.shared.pending), l === null)) break;
                (g = l), (l = g.next), (g.next = null), (o.lastBaseUpdate = g), (o.shared.pending = null);
            }
        } while (!0);
        if (
            (c === null && (a = f),
            (o.baseState = a),
            (o.firstBaseUpdate = u),
            (o.lastBaseUpdate = c),
            (t = o.shared.interleaved),
            t !== null)
        ) {
            o = t;
            do (i |= o.lane), (o = o.next);
            while (o !== t);
        } else s === null && (o.shared.lanes = 0);
        (Cr |= i), (e.lanes = i), (e.memoizedState = f);
    }
}
function qd(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                o = r.callback;
            if (o !== null) {
                if (((r.callback = null), (r = n), typeof o != "function")) throw Error(_(191, o));
                o.call(r);
            }
        }
}
var Os = {},
    tn = or(Os),
    fs = or(Os),
    ps = or(Os);
function dr(e) {
    if (e === Os) throw Error(_(174));
    return e;
}
function pc(e, t) {
    switch ((le(ps, t), le(fs, e), le(tn, Os), (e = t.nodeType), e)) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : La(null, "");
            break;
        default:
            (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = La(t, e));
    }
    de(tn), le(tn, t);
}
function po() {
    de(tn), de(fs), de(ps);
}
function Fh(e) {
    dr(ps.current);
    var t = dr(tn.current),
        n = La(t, e.type);
    t !== n && (le(fs, e), le(tn, n));
}
function hc(e) {
    fs.current === e && (de(tn), de(fs));
}
var pe = or(0);
function Ui(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")) return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t;
        } else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null;
            t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
}
var da = [];
function mc() {
    for (var e = 0; e < da.length; e++) da[e]._workInProgressVersionPrimary = null;
    da.length = 0;
}
var vi = Sn.ReactCurrentDispatcher,
    fa = Sn.ReactCurrentBatchConfig,
    Sr = 0,
    me = null,
    Pe = null,
    Ae = null,
    Vi = !1,
    Yo = !1,
    hs = 0,
    B0 = 0;
function Fe() {
    throw Error(_(321));
}
function gc(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Ut(e[n], t[n])) return !1;
    return !0;
}
function vc(e, t, n, r, o, s) {
    if (
        ((Sr = s),
        (me = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (vi.current = e === null || e.memoizedState === null ? H0 : Q0),
        (e = n(r, o)),
        Yo)
    ) {
        s = 0;
        do {
            if (((Yo = !1), (hs = 0), 25 <= s)) throw Error(_(301));
            (s += 1), (Ae = Pe = null), (t.updateQueue = null), (vi.current = G0), (e = n(r, o));
        } while (Yo);
    }
    if (((vi.current = Wi), (t = Pe !== null && Pe.next !== null), (Sr = 0), (Ae = Pe = me = null), (Vi = !1), t))
        throw Error(_(300));
    return e;
}
function yc() {
    var e = hs !== 0;
    return (hs = 0), e;
}
function Kt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ae === null ? (me.memoizedState = Ae = e) : (Ae = Ae.next = e), Ae;
}
function Ct() {
    if (Pe === null) {
        var e = me.alternate;
        e = e !== null ? e.memoizedState : null;
    } else e = Pe.next;
    var t = Ae === null ? me.memoizedState : Ae.next;
    if (t !== null) (Ae = t), (Pe = e);
    else {
        if (e === null) throw Error(_(310));
        (Pe = e),
            (e = {
                memoizedState: Pe.memoizedState,
                baseState: Pe.baseState,
                baseQueue: Pe.baseQueue,
                queue: Pe.queue,
                next: null,
            }),
            Ae === null ? (me.memoizedState = Ae = e) : (Ae = Ae.next = e);
    }
    return Ae;
}
function ms(e, t) {
    return typeof t == "function" ? t(e) : t;
}
function pa(e) {
    var t = Ct(),
        n = t.queue;
    if (n === null) throw Error(_(311));
    n.lastRenderedReducer = e;
    var r = Pe,
        o = r.baseQueue,
        s = n.pending;
    if (s !== null) {
        if (o !== null) {
            var i = o.next;
            (o.next = s.next), (s.next = i);
        }
        (r.baseQueue = o = s), (n.pending = null);
    }
    if (o !== null) {
        (s = o.next), (r = r.baseState);
        var l = (i = null),
            a = null,
            u = s;
        do {
            var c = u.lane;
            if ((Sr & c) === c)
                a !== null &&
                    (a = a.next =
                        {
                            lane: 0,
                            action: u.action,
                            hasEagerState: u.hasEagerState,
                            eagerState: u.eagerState,
                            next: null,
                        }),
                    (r = u.hasEagerState ? u.eagerState : e(r, u.action));
            else {
                var f = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                };
                a === null ? ((l = a = f), (i = r)) : (a = a.next = f), (me.lanes |= c), (Cr |= c);
            }
            u = u.next;
        } while (u !== null && u !== s);
        a === null ? (i = r) : (a.next = l),
            Ut(r, t.memoizedState) || (et = !0),
            (t.memoizedState = r),
            (t.baseState = i),
            (t.baseQueue = a),
            (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
        o = e;
        do (s = o.lane), (me.lanes |= s), (Cr |= s), (o = o.next);
        while (o !== e);
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function ha(e) {
    var t = Ct(),
        n = t.queue;
    if (n === null) throw Error(_(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        o = n.pending,
        s = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var i = (o = o.next);
        do (s = e(s, i.action)), (i = i.next);
        while (i !== o);
        Ut(s, t.memoizedState) || (et = !0),
            (t.memoizedState = s),
            t.baseQueue === null && (t.baseState = s),
            (n.lastRenderedState = s);
    }
    return [s, r];
}
function zh() {}
function $h(e, t) {
    var n = me,
        r = Ct(),
        o = t(),
        s = !Ut(r.memoizedState, o);
    if (
        (s && ((r.memoizedState = o), (et = !0)),
        (r = r.queue),
        xc(Vh.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || s || (Ae !== null && Ae.memoizedState.tag & 1))
    ) {
        if (((n.flags |= 2048), gs(9, Uh.bind(null, n, r, o, t), void 0, null), Oe === null)) throw Error(_(349));
        Sr & 30 || Bh(n, t, o);
    }
    return o;
}
function Bh(e, t, n) {
    (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = me.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }), (me.updateQueue = t), (t.stores = [e]))
            : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Uh(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Wh(t) && Hh(e);
}
function Vh(e, t, n) {
    return n(function () {
        Wh(t) && Hh(e);
    });
}
function Wh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Ut(e, n);
    } catch {
        return !0;
    }
}
function Hh(e) {
    var t = yn(e, 1);
    t !== null && $t(t, e, 1, -1);
}
function Xd(e) {
    var t = Kt();
    return (
        typeof e == "function" && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: ms,
            lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = W0.bind(null, me, e)),
        [t.memoizedState, e]
    );
}
function gs(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        (t = me.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }), (me.updateQueue = t), (t.lastEffect = e.next = e))
            : ((n = t.lastEffect),
              n === null
                  ? (t.lastEffect = e.next = e)
                  : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
        e
    );
}
function Qh() {
    return Ct().memoizedState;
}
function yi(e, t, n, r) {
    var o = Kt();
    (me.flags |= e), (o.memoizedState = gs(1 | t, n, void 0, r === void 0 ? null : r));
}
function pl(e, t, n, r) {
    var o = Ct();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (Pe !== null) {
        var i = Pe.memoizedState;
        if (((s = i.destroy), r !== null && gc(r, i.deps))) {
            o.memoizedState = gs(t, n, s, r);
            return;
        }
    }
    (me.flags |= e), (o.memoizedState = gs(1 | t, n, s, r));
}
function Zd(e, t) {
    return yi(8390656, 8, e, t);
}
function xc(e, t) {
    return pl(2048, 8, e, t);
}
function Gh(e, t) {
    return pl(4, 2, e, t);
}
function Kh(e, t) {
    return pl(4, 4, e, t);
}
function Yh(e, t) {
    if (typeof t == "function")
        return (
            (e = e()),
            t(e),
            function () {
                t(null);
            }
        );
    if (t != null)
        return (
            (e = e()),
            (t.current = e),
            function () {
                t.current = null;
            }
        );
}
function qh(e, t, n) {
    return (n = n != null ? n.concat([e]) : null), pl(4, 4, Yh.bind(null, t, e), n);
}
function wc() {}
function Xh(e, t) {
    var n = Ct();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && gc(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Zh(e, t) {
    var n = Ct();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && gc(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Jh(e, t, n) {
    return Sr & 21
        ? (Ut(n, t) || ((n = oh()), (me.lanes |= n), (Cr |= n), (e.baseState = !0)), t)
        : (e.baseState && ((e.baseState = !1), (et = !0)), (e.memoizedState = n));
}
function U0(e, t) {
    var n = oe;
    (oe = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = fa.transition;
    fa.transition = {};
    try {
        e(!1), t();
    } finally {
        (oe = n), (fa.transition = r);
    }
}
function em() {
    return Ct().memoizedState;
}
function V0(e, t, n) {
    var r = qn(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), tm(e))) nm(t, n);
    else if (((n = Ih(e, t, n, r)), n !== null)) {
        var o = Ke();
        $t(n, e, r, o), rm(n, t, r);
    }
}
function W0(e, t, n) {
    var r = qn(e),
        o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (tm(e)) nm(t, o);
    else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && ((s = t.lastRenderedReducer), s !== null))
            try {
                var i = t.lastRenderedState,
                    l = s(i, n);
                if (((o.hasEagerState = !0), (o.eagerState = l), Ut(l, i))) {
                    var a = t.interleaved;
                    a === null ? ((o.next = o), dc(t)) : ((o.next = a.next), (a.next = o)), (t.interleaved = o);
                    return;
                }
            } catch {
            } finally {
            }
        (n = Ih(e, t, o, r)), n !== null && ((o = Ke()), $t(n, e, r, o), rm(n, t, r));
    }
}
function tm(e) {
    var t = e.alternate;
    return e === me || (t !== null && t === me);
}
function nm(e, t) {
    Yo = Vi = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function rm(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), Xu(e, n);
    }
}
var Wi = {
        readContext: St,
        useCallback: Fe,
        useContext: Fe,
        useEffect: Fe,
        useImperativeHandle: Fe,
        useInsertionEffect: Fe,
        useLayoutEffect: Fe,
        useMemo: Fe,
        useReducer: Fe,
        useRef: Fe,
        useState: Fe,
        useDebugValue: Fe,
        useDeferredValue: Fe,
        useTransition: Fe,
        useMutableSource: Fe,
        useSyncExternalStore: Fe,
        useId: Fe,
        unstable_isNewReconciler: !1,
    },
    H0 = {
        readContext: St,
        useCallback: function (e, t) {
            return (Kt().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: St,
        useEffect: Zd,
        useImperativeHandle: function (e, t, n) {
            return (n = n != null ? n.concat([e]) : null), yi(4194308, 4, Yh.bind(null, t, e), n);
        },
        useLayoutEffect: function (e, t) {
            return yi(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return yi(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = Kt();
            return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
        },
        useReducer: function (e, t, n) {
            var r = Kt();
            return (
                (t = n !== void 0 ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = V0.bind(null, me, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            var t = Kt();
            return (e = { current: e }), (t.memoizedState = e);
        },
        useState: Xd,
        useDebugValue: wc,
        useDeferredValue: function (e) {
            return (Kt().memoizedState = e);
        },
        useTransition: function () {
            var e = Xd(!1),
                t = e[0];
            return (e = U0.bind(null, e[1])), (Kt().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = me,
                o = Kt();
            if (fe) {
                if (n === void 0) throw Error(_(407));
                n = n();
            } else {
                if (((n = t()), Oe === null)) throw Error(_(349));
                Sr & 30 || Bh(r, t, n);
            }
            o.memoizedState = n;
            var s = { value: n, getSnapshot: t };
            return (
                (o.queue = s),
                Zd(Vh.bind(null, r, s, e), [e]),
                (r.flags |= 2048),
                gs(9, Uh.bind(null, r, s, n, t), void 0, null),
                n
            );
        },
        useId: function () {
            var e = Kt(),
                t = Oe.identifierPrefix;
            if (fe) {
                var n = hn,
                    r = pn;
                (n = (r & ~(1 << (32 - zt(r) - 1))).toString(32) + n),
                    (t = ":" + t + "R" + n),
                    (n = hs++),
                    0 < n && (t += "H" + n.toString(32)),
                    (t += ":");
            } else (n = B0++), (t = ":" + t + "r" + n.toString(32) + ":");
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    Q0 = {
        readContext: St,
        useCallback: Xh,
        useContext: St,
        useEffect: xc,
        useImperativeHandle: qh,
        useInsertionEffect: Gh,
        useLayoutEffect: Kh,
        useMemo: Zh,
        useReducer: pa,
        useRef: Qh,
        useState: function () {
            return pa(ms);
        },
        useDebugValue: wc,
        useDeferredValue: function (e) {
            var t = Ct();
            return Jh(t, Pe.memoizedState, e);
        },
        useTransition: function () {
            var e = pa(ms)[0],
                t = Ct().memoizedState;
            return [e, t];
        },
        useMutableSource: zh,
        useSyncExternalStore: $h,
        useId: em,
        unstable_isNewReconciler: !1,
    },
    G0 = {
        readContext: St,
        useCallback: Xh,
        useContext: St,
        useEffect: xc,
        useImperativeHandle: qh,
        useInsertionEffect: Gh,
        useLayoutEffect: Kh,
        useMemo: Zh,
        useReducer: ha,
        useRef: Qh,
        useState: function () {
            return ha(ms);
        },
        useDebugValue: wc,
        useDeferredValue: function (e) {
            var t = Ct();
            return Pe === null ? (t.memoizedState = e) : Jh(t, Pe.memoizedState, e);
        },
        useTransition: function () {
            var e = ha(ms)[0],
                t = Ct().memoizedState;
            return [e, t];
        },
        useMutableSource: zh,
        useSyncExternalStore: $h,
        useId: em,
        unstable_isNewReconciler: !1,
    };
function Mt(e, t) {
    if (e && e.defaultProps) {
        (t = ge({}, t)), (e = e.defaultProps);
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t;
    }
    return t;
}
function nu(e, t, n, r) {
    (t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : ge({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n);
}
var hl = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? Tr(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = Ke(),
            o = qn(e),
            s = mn(r, o);
        (s.payload = t), n != null && (s.callback = n), (t = Kn(e, s, o)), t !== null && ($t(t, e, o, r), gi(t, e, o));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = Ke(),
            o = qn(e),
            s = mn(r, o);
        (s.tag = 1),
            (s.payload = t),
            n != null && (s.callback = n),
            (t = Kn(e, s, o)),
            t !== null && ($t(t, e, o, r), gi(t, e, o));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = Ke(),
            r = qn(e),
            o = mn(n, r);
        (o.tag = 2), t != null && (o.callback = t), (t = Kn(e, o, r)), t !== null && ($t(t, e, r, n), gi(t, e, r));
    },
};
function Jd(e, t, n, r, o, s, i) {
    return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == "function"
            ? e.shouldComponentUpdate(r, s, i)
            : t.prototype && t.prototype.isPureReactComponent
              ? !as(n, r) || !as(o, s)
              : !0
    );
}
function om(e, t, n) {
    var r = !1,
        o = Jn,
        s = t.contextType;
    return (
        typeof s == "object" && s !== null
            ? (s = St(s))
            : ((o = nt(t) ? wr : Ue.current), (r = t.contextTypes), (s = (r = r != null) ? uo(e, o) : Jn)),
        (t = new t(n, s)),
        (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = hl),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = o),
            (e.__reactInternalMemoizedMaskedChildContext = s)),
        t
    );
}
function ef(e, t, n, r) {
    (e = t.state),
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && hl.enqueueReplaceState(t, t.state, null);
}
function ru(e, t, n, r) {
    var o = e.stateNode;
    (o.props = n), (o.state = e.memoizedState), (o.refs = {}), fc(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? (o.context = St(s)) : ((s = nt(t) ? wr : Ue.current), (o.context = uo(e, s))),
        (o.state = e.memoizedState),
        (s = t.getDerivedStateFromProps),
        typeof s == "function" && (nu(e, t, s, n), (o.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
            typeof o.getSnapshotBeforeUpdate == "function" ||
            (typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function") ||
            ((t = o.state),
            typeof o.componentWillMount == "function" && o.componentWillMount(),
            typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
            t !== o.state && hl.enqueueReplaceState(o, o.state, null),
            Bi(e, n, o, r),
            (o.state = e.memoizedState)),
        typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function ho(e, t) {
    try {
        var n = "",
            r = t;
        do (n += by(r)), (r = r.return);
        while (r);
        var o = n;
    } catch (s) {
        o =
            `
Error generating stack: ` +
            s.message +
            `
` +
            s.stack;
    }
    return { value: e, source: t, stack: o, digest: null };
}
function ma(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ou(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var K0 = typeof WeakMap == "function" ? WeakMap : Map;
function sm(e, t, n) {
    (n = mn(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
        (n.callback = function () {
            Qi || ((Qi = !0), (hu = r)), ou(e, t);
        }),
        n
    );
}
function im(e, t, n) {
    (n = mn(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        (n.payload = function () {
            return r(o);
        }),
            (n.callback = function () {
                ou(e, t);
            });
    }
    var s = e.stateNode;
    return (
        s !== null &&
            typeof s.componentDidCatch == "function" &&
            (n.callback = function () {
                ou(e, t), typeof r != "function" && (Yn === null ? (Yn = new Set([this])) : Yn.add(this));
                var i = t.stack;
                this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
            }),
        n
    );
}
function tf(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new K0();
        var o = new Set();
        r.set(t, o);
    } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
    o.has(n) || (o.add(n), (e = ax.bind(null, e, t, n)), t.then(e, e));
}
function nf(e) {
    do {
        var t;
        if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
        e = e.return;
    } while (e !== null);
    return null;
}
function rf(e, t, n, r, o) {
    return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = o), e)
        : (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = mn(-1, 1)), (t.tag = 2), Kn(n, t, 1))),
                (n.lanes |= 1)),
          e);
}
var Y0 = Sn.ReactCurrentOwner,
    et = !1;
function Qe(e, t, n, r) {
    t.child = e === null ? Lh(t, null, n, r) : fo(t, e.child, n, r);
}
function of(e, t, n, r, o) {
    n = n.render;
    var s = t.ref;
    return (
        Yr(t, o),
        (r = vc(e, t, n, r, s, o)),
        (n = yc()),
        e !== null && !et
            ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), xn(e, t, o))
            : (fe && n && sc(t), (t.flags |= 1), Qe(e, t, r, o), t.child)
    );
}
function sf(e, t, n, r, o) {
    if (e === null) {
        var s = n.type;
        return typeof s == "function" &&
            !Tc(s) &&
            s.defaultProps === void 0 &&
            n.compare === null &&
            n.defaultProps === void 0
            ? ((t.tag = 15), (t.type = s), lm(e, t, s, r, o))
            : ((e = Si(n.type, null, r, t, t.mode, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((s = e.child), !(e.lanes & o))) {
        var i = s.memoizedProps;
        if (((n = n.compare), (n = n !== null ? n : as), n(i, r) && e.ref === t.ref)) return xn(e, t, o);
    }
    return (t.flags |= 1), (e = Xn(s, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function lm(e, t, n, r, o) {
    if (e !== null) {
        var s = e.memoizedProps;
        if (as(s, r) && e.ref === t.ref)
            if (((et = !1), (t.pendingProps = r = s), (e.lanes & o) !== 0)) e.flags & 131072 && (et = !0);
            else return (t.lanes = e.lanes), xn(e, t, o);
    }
    return su(e, t, n, r, o);
}
function am(e, t, n) {
    var r = t.pendingProps,
        o = r.children,
        s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), le(Wr, lt), (lt |= n);
        else {
            if (!(n & 1073741824))
                return (
                    (e = s !== null ? s.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
                    (t.updateQueue = null),
                    le(Wr, lt),
                    (lt |= e),
                    null
                );
            (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                (r = s !== null ? s.baseLanes : n),
                le(Wr, lt),
                (lt |= r);
        }
    else s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n), le(Wr, lt), (lt |= r);
    return Qe(e, t, o, n), t.child;
}
function um(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function su(e, t, n, r, o) {
    var s = nt(n) ? wr : Ue.current;
    return (
        (s = uo(t, s)),
        Yr(t, o),
        (n = vc(e, t, n, r, s, o)),
        (r = yc()),
        e !== null && !et
            ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), xn(e, t, o))
            : (fe && r && sc(t), (t.flags |= 1), Qe(e, t, n, o), t.child)
    );
}
function lf(e, t, n, r, o) {
    if (nt(n)) {
        var s = !0;
        Ii(t);
    } else s = !1;
    if ((Yr(t, o), t.stateNode === null)) xi(e, t), om(t, n, r), ru(t, n, r, o), (r = !0);
    else if (e === null) {
        var i = t.stateNode,
            l = t.memoizedProps;
        i.props = l;
        var a = i.context,
            u = n.contextType;
        typeof u == "object" && u !== null ? (u = St(u)) : ((u = nt(n) ? wr : Ue.current), (u = uo(t, u)));
        var c = n.getDerivedStateFromProps,
            f = typeof c == "function" || typeof i.getSnapshotBeforeUpdate == "function";
        f ||
            (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
                typeof i.componentWillReceiveProps != "function") ||
            ((l !== r || a !== u) && ef(t, i, r, u)),
            (Mn = !1);
        var g = t.memoizedState;
        (i.state = g),
            Bi(t, r, i, o),
            (a = t.memoizedState),
            l !== r || g !== a || tt.current || Mn
                ? (typeof c == "function" && (nu(t, n, c, r), (a = t.memoizedState)),
                  (l = Mn || Jd(t, n, l, r, g, a, u))
                      ? (f ||
                            (typeof i.UNSAFE_componentWillMount != "function" &&
                                typeof i.componentWillMount != "function") ||
                            (typeof i.componentWillMount == "function" && i.componentWillMount(),
                            typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()),
                        typeof i.componentDidMount == "function" && (t.flags |= 4194308))
                      : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
                        (t.memoizedProps = r),
                        (t.memoizedState = a)),
                  (i.props = r),
                  (i.state = a),
                  (i.context = u),
                  (r = l))
                : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), (r = !1));
    } else {
        (i = t.stateNode),
            Dh(e, t),
            (l = t.memoizedProps),
            (u = t.type === t.elementType ? l : Mt(t.type, l)),
            (i.props = u),
            (f = t.pendingProps),
            (g = i.context),
            (a = n.contextType),
            typeof a == "object" && a !== null ? (a = St(a)) : ((a = nt(n) ? wr : Ue.current), (a = uo(t, a)));
        var h = n.getDerivedStateFromProps;
        (c = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function") ||
            (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
                typeof i.componentWillReceiveProps != "function") ||
            ((l !== f || g !== a) && ef(t, i, r, a)),
            (Mn = !1),
            (g = t.memoizedState),
            (i.state = g),
            Bi(t, r, i, o);
        var w = t.memoizedState;
        l !== f || g !== w || tt.current || Mn
            ? (typeof h == "function" && (nu(t, n, h, r), (w = t.memoizedState)),
              (u = Mn || Jd(t, n, u, r, g, w, a) || !1)
                  ? (c ||
                        (typeof i.UNSAFE_componentWillUpdate != "function" &&
                            typeof i.componentWillUpdate != "function") ||
                        (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, a),
                        typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, a)),
                    typeof i.componentDidUpdate == "function" && (t.flags |= 4),
                    typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
                  : (typeof i.componentDidUpdate != "function" ||
                        (l === e.memoizedProps && g === e.memoizedState) ||
                        (t.flags |= 4),
                    typeof i.getSnapshotBeforeUpdate != "function" ||
                        (l === e.memoizedProps && g === e.memoizedState) ||
                        (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = w)),
              (i.props = r),
              (i.state = w),
              (i.context = a),
              (r = u))
            : (typeof i.componentDidUpdate != "function" ||
                  (l === e.memoizedProps && g === e.memoizedState) ||
                  (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                  (l === e.memoizedProps && g === e.memoizedState) ||
                  (t.flags |= 1024),
              (r = !1));
    }
    return iu(e, t, n, r, s, o);
}
function iu(e, t, n, r, o, s) {
    um(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return o && Hd(t, n, !1), xn(e, t, s);
    (r = t.stateNode), (Y0.current = t);
    var l = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
        (t.flags |= 1),
        e !== null && i ? ((t.child = fo(t, e.child, null, s)), (t.child = fo(t, null, l, s))) : Qe(e, t, l, s),
        (t.memoizedState = r.state),
        o && Hd(t, n, !0),
        t.child
    );
}
function cm(e) {
    var t = e.stateNode;
    t.pendingContext ? Wd(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Wd(e, t.context, !1),
        pc(e, t.containerInfo);
}
function af(e, t, n, r, o) {
    return co(), lc(o), (t.flags |= 256), Qe(e, t, n, r), t.child;
}
var lu = { dehydrated: null, treeContext: null, retryLane: 0 };
function au(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function dm(e, t, n) {
    var r = t.pendingProps,
        o = pe.current,
        s = !1,
        i = (t.flags & 128) !== 0,
        l;
    if (
        ((l = i) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
        l ? ((s = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (o |= 1),
        le(pe, o & 1),
        e === null)
    )
        return (
            eu(t),
            (e = t.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null)
                ? (t.mode & 1 ? (e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
                : ((i = r.children),
                  (e = r.fallback),
                  s
                      ? ((r = t.mode),
                        (s = t.child),
                        (i = { mode: "hidden", children: i }),
                        !(r & 1) && s !== null ? ((s.childLanes = 0), (s.pendingProps = i)) : (s = vl(i, r, 0, null)),
                        (e = xr(e, r, n, null)),
                        (s.return = t),
                        (e.return = t),
                        (s.sibling = e),
                        (t.child = s),
                        (t.child.memoizedState = au(n)),
                        (t.memoizedState = lu),
                        e)
                      : bc(t, i))
        );
    if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null))) return q0(e, t, i, r, l, o, n);
    if (s) {
        (s = r.fallback), (i = t.mode), (o = e.child), (l = o.sibling);
        var a = { mode: "hidden", children: r.children };
        return (
            !(i & 1) && t.child !== o
                ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = a), (t.deletions = null))
                : ((r = Xn(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
            l !== null ? (s = Xn(l, s)) : ((s = xr(s, i, n, null)), (s.flags |= 2)),
            (s.return = t),
            (r.return = t),
            (r.sibling = s),
            (t.child = r),
            (r = s),
            (s = t.child),
            (i = e.child.memoizedState),
            (i = i === null ? au(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }),
            (s.memoizedState = i),
            (s.childLanes = e.childLanes & ~n),
            (t.memoizedState = lu),
            r
        );
    }
    return (
        (s = e.child),
        (e = s.sibling),
        (r = Xn(s, { mode: "visible", children: r.children })),
        !(t.mode & 1) && (r.lanes = n),
        (r.return = t),
        (r.sibling = null),
        e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r
    );
}
function bc(e, t) {
    return (t = vl({ mode: "visible", children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function ni(e, t, n, r) {
    return (
        r !== null && lc(r),
        fo(t, e.child, null, n),
        (e = bc(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
    );
}
function q0(e, t, n, r, o, s, i) {
    if (n)
        return t.flags & 256
            ? ((t.flags &= -257), (r = ma(Error(_(422)))), ni(e, t, i, r))
            : t.memoizedState !== null
              ? ((t.child = e.child), (t.flags |= 128), null)
              : ((s = r.fallback),
                (o = t.mode),
                (r = vl({ mode: "visible", children: r.children }, o, 0, null)),
                (s = xr(s, o, i, null)),
                (s.flags |= 2),
                (r.return = t),
                (s.return = t),
                (r.sibling = s),
                (t.child = r),
                t.mode & 1 && fo(t, e.child, null, i),
                (t.child.memoizedState = au(i)),
                (t.memoizedState = lu),
                s);
    if (!(t.mode & 1)) return ni(e, t, i, null);
    if (o.data === "$!") {
        if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
        return (r = l), (s = Error(_(419))), (r = ma(s, r, void 0)), ni(e, t, i, r);
    }
    if (((l = (i & e.childLanes) !== 0), et || l)) {
        if (((r = Oe), r !== null)) {
            switch (i & -i) {
                case 4:
                    o = 2;
                    break;
                case 16:
                    o = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    o = 32;
                    break;
                case 536870912:
                    o = 268435456;
                    break;
                default:
                    o = 0;
            }
            (o = o & (r.suspendedLanes | i) ? 0 : o),
                o !== 0 && o !== s.retryLane && ((s.retryLane = o), yn(e, o), $t(r, e, o, -1));
        }
        return Pc(), (r = ma(Error(_(421)))), ni(e, t, i, r);
    }
    return o.data === "$?"
        ? ((t.flags |= 128), (t.child = e.child), (t = ux.bind(null, e)), (o._reactRetry = t), null)
        : ((e = s.treeContext),
          (ut = Gn(o.nextSibling)),
          (ct = t),
          (fe = !0),
          (Ft = null),
          e !== null && ((yt[xt++] = pn), (yt[xt++] = hn), (yt[xt++] = br), (pn = e.id), (hn = e.overflow), (br = t)),
          (t = bc(t, r.children)),
          (t.flags |= 4096),
          t);
}
function uf(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), tu(e.return, t, n);
}
function ga(e, t, n, r, o) {
    var s = e.memoizedState;
    s === null
        ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o })
        : ((s.isBackwards = t),
          (s.rendering = null),
          (s.renderingStartTime = 0),
          (s.last = r),
          (s.tail = n),
          (s.tailMode = o));
}
function fm(e, t, n) {
    var r = t.pendingProps,
        o = r.revealOrder,
        s = r.tail;
    if ((Qe(e, t, r.children, n), (r = pe.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && uf(e, n, t);
                else if (e.tag === 19) uf(e, n, t);
                else if (e.child !== null) {
                    (e.child.return = e), (e = e.child);
                    continue;
                }
                if (e === t) break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
            }
        r &= 1;
    }
    if ((le(pe, r), !(t.mode & 1))) t.memoizedState = null;
    else
        switch (o) {
            case "forwards":
                for (n = t.child, o = null; n !== null; )
                    (e = n.alternate), e !== null && Ui(e) === null && (o = n), (n = n.sibling);
                (n = o),
                    n === null ? ((o = t.child), (t.child = null)) : ((o = n.sibling), (n.sibling = null)),
                    ga(t, !1, o, n, s);
                break;
            case "backwards":
                for (n = null, o = t.child, t.child = null; o !== null; ) {
                    if (((e = o.alternate), e !== null && Ui(e) === null)) {
                        t.child = o;
                        break;
                    }
                    (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                }
                ga(t, !0, n, null, s);
                break;
            case "together":
                ga(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function xi(e, t) {
    !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function xn(e, t, n) {
    if ((e !== null && (t.dependencies = e.dependencies), (Cr |= t.lanes), !(n & t.childLanes))) return null;
    if (e !== null && t.child !== e.child) throw Error(_(153));
    if (t.child !== null) {
        for (e = t.child, n = Xn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
            (e = e.sibling), (n = n.sibling = Xn(e, e.pendingProps)), (n.return = t);
        n.sibling = null;
    }
    return t.child;
}
function X0(e, t, n) {
    switch (t.tag) {
        case 3:
            cm(t), co();
            break;
        case 5:
            Fh(t);
            break;
        case 1:
            nt(t.type) && Ii(t);
            break;
        case 4:
            pc(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                o = t.memoizedProps.value;
            le(zi, r._currentValue), (r._currentValue = o);
            break;
        case 13:
            if (((r = t.memoizedState), r !== null))
                return r.dehydrated !== null
                    ? (le(pe, pe.current & 1), (t.flags |= 128), null)
                    : n & t.child.childLanes
                      ? dm(e, t, n)
                      : (le(pe, pe.current & 1), (e = xn(e, t, n)), e !== null ? e.sibling : null);
            le(pe, pe.current & 1);
            break;
        case 19:
            if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
                if (r) return fm(e, t, n);
                t.flags |= 128;
            }
            if (
                ((o = t.memoizedState),
                o !== null && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
                le(pe, pe.current),
                r)
            )
                break;
            return null;
        case 22:
        case 23:
            return (t.lanes = 0), am(e, t, n);
    }
    return xn(e, t, n);
}
var pm, uu, hm, mm;
pm = function (e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
        }
        if (n === t) break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) return;
            n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
    }
};
uu = function () {};
hm = function (e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        (e = t.stateNode), dr(tn.current);
        var s = null;
        switch (n) {
            case "input":
                (o = Aa(e, o)), (r = Aa(e, r)), (s = []);
                break;
            case "select":
                (o = ge({}, o, { value: void 0 })), (r = ge({}, r, { value: void 0 })), (s = []);
                break;
            case "textarea":
                (o = _a(e, o)), (r = _a(e, r)), (s = []);
                break;
            default:
                typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = _i);
        }
        Ia(n, r);
        var i;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var l = o[u];
                    for (i in l) l.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
                } else
                    u !== "dangerouslySetInnerHTML" &&
                        u !== "children" &&
                        u !== "suppressContentEditableWarning" &&
                        u !== "suppressHydrationWarning" &&
                        u !== "autoFocus" &&
                        (ts.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (((l = o != null ? o[u] : void 0), r.hasOwnProperty(u) && a !== l && (a != null || l != null)))
                if (u === "style")
                    if (l) {
                        for (i in l) !l.hasOwnProperty(i) || (a && a.hasOwnProperty(i)) || (n || (n = {}), (n[i] = ""));
                        for (i in a) a.hasOwnProperty(i) && l[i] !== a[i] && (n || (n = {}), (n[i] = a[i]));
                    } else n || (s || (s = []), s.push(u, n)), (n = a);
                else
                    u === "dangerouslySetInnerHTML"
                        ? ((a = a ? a.__html : void 0),
                          (l = l ? l.__html : void 0),
                          a != null && l !== a && (s = s || []).push(u, a))
                        : u === "children"
                          ? (typeof a != "string" && typeof a != "number") || (s = s || []).push(u, "" + a)
                          : u !== "suppressContentEditableWarning" &&
                            u !== "suppressHydrationWarning" &&
                            (ts.hasOwnProperty(u)
                                ? (a != null && u === "onScroll" && ce("scroll", e), s || l === a || (s = []))
                                : (s = s || []).push(u, a));
        }
        n && (s = s || []).push("style", n);
        var u = s;
        (t.updateQueue = u) && (t.flags |= 4);
    }
};
mm = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
};
function _o(e, t) {
    if (!fe)
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
                n === null ? (e.tail = null) : (n.sibling = null);
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
                r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
        }
}
function ze(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            (n |= o.lanes | o.childLanes),
                (r |= o.subtreeFlags & 14680064),
                (r |= o.flags & 14680064),
                (o.return = e),
                (o = o.sibling);
    else
        for (o = e.child; o !== null; )
            (n |= o.lanes | o.childLanes), (r |= o.subtreeFlags), (r |= o.flags), (o.return = e), (o = o.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Z0(e, t, n) {
    var r = t.pendingProps;
    switch ((ic(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return ze(t), null;
        case 1:
            return nt(t.type) && Li(), ze(t), null;
        case 3:
            return (
                (r = t.stateNode),
                po(),
                de(tt),
                de(Ue),
                mc(),
                r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (e === null || e.child === null) &&
                    (ei(t)
                        ? (t.flags |= 4)
                        : e === null ||
                          (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                          ((t.flags |= 1024), Ft !== null && (vu(Ft), (Ft = null)))),
                uu(e, t),
                ze(t),
                null
            );
        case 5:
            hc(t);
            var o = dr(ps.current);
            if (((n = t.type), e !== null && t.stateNode != null))
                hm(e, t, n, r, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(_(166));
                    return ze(t), null;
                }
                if (((e = dr(tn.current)), ei(t))) {
                    (r = t.stateNode), (n = t.type);
                    var s = t.memoizedProps;
                    switch (((r[Zt] = t), (r[ds] = s), (e = (t.mode & 1) !== 0), n)) {
                        case "dialog":
                            ce("cancel", r), ce("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            ce("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (o = 0; o < Bo.length; o++) ce(Bo[o], r);
                            break;
                        case "source":
                            ce("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            ce("error", r), ce("load", r);
                            break;
                        case "details":
                            ce("toggle", r);
                            break;
                        case "input":
                            vd(r, s), ce("invalid", r);
                            break;
                        case "select":
                            (r._wrapperState = { wasMultiple: !!s.multiple }), ce("invalid", r);
                            break;
                        case "textarea":
                            xd(r, s), ce("invalid", r);
                    }
                    Ia(n, s), (o = null);
                    for (var i in s)
                        if (s.hasOwnProperty(i)) {
                            var l = s[i];
                            i === "children"
                                ? typeof l == "string"
                                    ? r.textContent !== l &&
                                      (s.suppressHydrationWarning !== !0 && Js(r.textContent, l, e),
                                      (o = ["children", l]))
                                    : typeof l == "number" &&
                                      r.textContent !== "" + l &&
                                      (s.suppressHydrationWarning !== !0 && Js(r.textContent, l, e),
                                      (o = ["children", "" + l]))
                                : ts.hasOwnProperty(i) && l != null && i === "onScroll" && ce("scroll", r);
                        }
                    switch (n) {
                        case "input":
                            Hs(r), yd(r, s, !0);
                            break;
                        case "textarea":
                            Hs(r), wd(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof s.onClick == "function" && (r.onclick = _i);
                    }
                    (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
                } else {
                    (i = o.nodeType === 9 ? o : o.ownerDocument),
                        e === "http://www.w3.org/1999/xhtml" && (e = Vp(n)),
                        e === "http://www.w3.org/1999/xhtml"
                            ? n === "script"
                                ? ((e = i.createElement("div")),
                                  (e.innerHTML = "<script></script>"),
                                  (e = e.removeChild(e.firstChild)))
                                : typeof r.is == "string"
                                  ? (e = i.createElement(n, { is: r.is }))
                                  : ((e = i.createElement(n)),
                                    n === "select" &&
                                        ((i = e), r.multiple ? (i.multiple = !0) : r.size && (i.size = r.size)))
                            : (e = i.createElementNS(e, n)),
                        (e[Zt] = t),
                        (e[ds] = r),
                        pm(e, t, !1, !1),
                        (t.stateNode = e);
                    e: {
                        switch (((i = Da(n, r)), n)) {
                            case "dialog":
                                ce("cancel", e), ce("close", e), (o = r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                ce("load", e), (o = r);
                                break;
                            case "video":
                            case "audio":
                                for (o = 0; o < Bo.length; o++) ce(Bo[o], e);
                                o = r;
                                break;
                            case "source":
                                ce("error", e), (o = r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                ce("error", e), ce("load", e), (o = r);
                                break;
                            case "details":
                                ce("toggle", e), (o = r);
                                break;
                            case "input":
                                vd(e, r), (o = Aa(e, r)), ce("invalid", e);
                                break;
                            case "option":
                                o = r;
                                break;
                            case "select":
                                (e._wrapperState = { wasMultiple: !!r.multiple }),
                                    (o = ge({}, r, { value: void 0 })),
                                    ce("invalid", e);
                                break;
                            case "textarea":
                                xd(e, r), (o = _a(e, r)), ce("invalid", e);
                                break;
                            default:
                                o = r;
                        }
                        Ia(n, o), (l = o);
                        for (s in l)
                            if (l.hasOwnProperty(s)) {
                                var a = l[s];
                                s === "style"
                                    ? Qp(e, a)
                                    : s === "dangerouslySetInnerHTML"
                                      ? ((a = a ? a.__html : void 0), a != null && Wp(e, a))
                                      : s === "children"
                                        ? typeof a == "string"
                                            ? (n !== "textarea" || a !== "") && ns(e, a)
                                            : typeof a == "number" && ns(e, "" + a)
                                        : s !== "suppressContentEditableWarning" &&
                                          s !== "suppressHydrationWarning" &&
                                          s !== "autoFocus" &&
                                          (ts.hasOwnProperty(s)
                                              ? a != null && s === "onScroll" && ce("scroll", e)
                                              : a != null && Hu(e, s, a, i));
                            }
                        switch (n) {
                            case "input":
                                Hs(e), yd(e, r, !1);
                                break;
                            case "textarea":
                                Hs(e), wd(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + Zn(r.value));
                                break;
                            case "select":
                                (e.multiple = !!r.multiple),
                                    (s = r.value),
                                    s != null
                                        ? Hr(e, !!r.multiple, s, !1)
                                        : r.defaultValue != null && Hr(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof o.onClick == "function" && (e.onclick = _i);
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1;
                        }
                    }
                    r && (t.flags |= 4);
                }
                t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
            }
            return ze(t), null;
        case 6:
            if (e && t.stateNode != null) mm(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(_(166));
                if (((n = dr(ps.current)), dr(tn.current), ei(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[Zt] = t),
                        (s = r.nodeValue !== n) && ((e = ct), e !== null))
                    )
                        switch (e.tag) {
                            case 3:
                                Js(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 &&
                                    Js(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                    s && (t.flags |= 4);
                } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[Zt] = t), (t.stateNode = r);
            }
            return ze(t), null;
        case 13:
            if (
                (de(pe),
                (r = t.memoizedState),
                e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
            ) {
                if (fe && ut !== null && t.mode & 1 && !(t.flags & 128)) Mh(), co(), (t.flags |= 98560), (s = !1);
                else if (((s = ei(t)), r !== null && r.dehydrated !== null)) {
                    if (e === null) {
                        if (!s) throw Error(_(318));
                        if (((s = t.memoizedState), (s = s !== null ? s.dehydrated : null), !s)) throw Error(_(317));
                        s[Zt] = t;
                    } else co(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
                    ze(t), (s = !1);
                } else Ft !== null && (vu(Ft), (Ft = null)), (s = !0);
                if (!s) return t.flags & 65536 ? t : null;
            }
            return t.flags & 128
                ? ((t.lanes = n), t)
                : ((r = r !== null),
                  r !== (e !== null && e.memoizedState !== null) &&
                      r &&
                      ((t.child.flags |= 8192),
                      t.mode & 1 && (e === null || pe.current & 1 ? Te === 0 && (Te = 3) : Pc())),
                  t.updateQueue !== null && (t.flags |= 4),
                  ze(t),
                  null);
        case 4:
            return po(), uu(e, t), e === null && us(t.stateNode.containerInfo), ze(t), null;
        case 10:
            return cc(t.type._context), ze(t), null;
        case 17:
            return nt(t.type) && Li(), ze(t), null;
        case 19:
            if ((de(pe), (s = t.memoizedState), s === null)) return ze(t), null;
            if (((r = (t.flags & 128) !== 0), (i = s.rendering), i === null))
                if (r) _o(s, !1);
                else {
                    if (Te !== 0 || (e !== null && e.flags & 128))
                        for (e = t.child; e !== null; ) {
                            if (((i = Ui(e)), i !== null)) {
                                for (
                                    t.flags |= 128,
                                        _o(s, !1),
                                        r = i.updateQueue,
                                        r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                                        t.subtreeFlags = 0,
                                        r = n,
                                        n = t.child;
                                    n !== null;

                                )
                                    (s = n),
                                        (e = r),
                                        (s.flags &= 14680066),
                                        (i = s.alternate),
                                        i === null
                                            ? ((s.childLanes = 0),
                                              (s.lanes = e),
                                              (s.child = null),
                                              (s.subtreeFlags = 0),
                                              (s.memoizedProps = null),
                                              (s.memoizedState = null),
                                              (s.updateQueue = null),
                                              (s.dependencies = null),
                                              (s.stateNode = null))
                                            : ((s.childLanes = i.childLanes),
                                              (s.lanes = i.lanes),
                                              (s.child = i.child),
                                              (s.subtreeFlags = 0),
                                              (s.deletions = null),
                                              (s.memoizedProps = i.memoizedProps),
                                              (s.memoizedState = i.memoizedState),
                                              (s.updateQueue = i.updateQueue),
                                              (s.type = i.type),
                                              (e = i.dependencies),
                                              (s.dependencies =
                                                  e === null
                                                      ? null
                                                      : { lanes: e.lanes, firstContext: e.firstContext })),
                                        (n = n.sibling);
                                return le(pe, (pe.current & 1) | 2), t.child;
                            }
                            e = e.sibling;
                        }
                    s.tail !== null && be() > mo && ((t.flags |= 128), (r = !0), _o(s, !1), (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (((e = Ui(i)), e !== null)) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            (n = e.updateQueue),
                            n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                            _o(s, !0),
                            s.tail === null && s.tailMode === "hidden" && !i.alternate && !fe)
                        )
                            return ze(t), null;
                    } else
                        2 * be() - s.renderingStartTime > mo &&
                            n !== 1073741824 &&
                            ((t.flags |= 128), (r = !0), _o(s, !1), (t.lanes = 4194304));
                s.isBackwards
                    ? ((i.sibling = t.child), (t.child = i))
                    : ((n = s.last), n !== null ? (n.sibling = i) : (t.child = i), (s.last = i));
            }
            return s.tail !== null
                ? ((t = s.tail),
                  (s.rendering = t),
                  (s.tail = t.sibling),
                  (s.renderingStartTime = be()),
                  (t.sibling = null),
                  (n = pe.current),
                  le(pe, r ? (n & 1) | 2 : n & 1),
                  t)
                : (ze(t), null);
        case 22:
        case 23:
            return (
                Nc(),
                (r = t.memoizedState !== null),
                e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
                r && t.mode & 1 ? lt & 1073741824 && (ze(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ze(t),
                null
            );
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(_(156, t.tag));
}
function J0(e, t) {
    switch ((ic(t), t.tag)) {
        case 1:
            return nt(t.type) && Li(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
        case 3:
            return (
                po(),
                de(tt),
                de(Ue),
                mc(),
                (e = t.flags),
                e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 5:
            return hc(t), null;
        case 13:
            if ((de(pe), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
                if (t.alternate === null) throw Error(_(340));
                co();
            }
            return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
        case 19:
            return de(pe), null;
        case 4:
            return po(), null;
        case 10:
            return cc(t.type._context), null;
        case 22:
        case 23:
            return Nc(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var ri = !1,
    Be = !1,
    ex = typeof WeakSet == "function" ? WeakSet : Set,
    F = null;
function Vr(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null);
            } catch (r) {
                we(e, t, r);
            }
        else n.current = null;
}
function cu(e, t, n) {
    try {
        n();
    } catch (r) {
        we(e, t, r);
    }
}
var cf = !1;
function tx(e, t) {
    if (((Ga = Ai), (e = wh()), oc(e))) {
        if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
        else
            e: {
                n = ((n = e.ownerDocument) && n.defaultView) || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset,
                        s = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, s.nodeType;
                    } catch {
                        n = null;
                        break e;
                    }
                    var i = 0,
                        l = -1,
                        a = -1,
                        u = 0,
                        c = 0,
                        f = e,
                        g = null;
                    t: for (;;) {
                        for (
                            var h;
                            f !== n || (o !== 0 && f.nodeType !== 3) || (l = i + o),
                                f !== s || (r !== 0 && f.nodeType !== 3) || (a = i + r),
                                f.nodeType === 3 && (i += f.nodeValue.length),
                                (h = f.firstChild) !== null;

                        )
                            (g = f), (f = h);
                        for (;;) {
                            if (f === e) break t;
                            if (
                                (g === n && ++u === o && (l = i),
                                g === s && ++c === r && (a = i),
                                (h = f.nextSibling) !== null)
                            )
                                break;
                            (f = g), (g = f.parentNode);
                        }
                        f = h;
                    }
                    n = l === -1 || a === -1 ? null : { start: l, end: a };
                } else n = null;
            }
        n = n || { start: 0, end: 0 };
    } else n = null;
    for (Ka = { focusedElem: e, selectionRange: n }, Ai = !1, F = t; F !== null; )
        if (((t = F), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (F = e);
        else
            for (; F !== null; ) {
                t = F;
                try {
                    var w = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (w !== null) {
                                    var v = w.memoizedProps,
                                        x = w.memoizedState,
                                        m = t.stateNode,
                                        p = m.getSnapshotBeforeUpdate(t.elementType === t.type ? v : Mt(t.type, v), x);
                                    m.__reactInternalSnapshotBeforeUpdate = p;
                                }
                                break;
                            case 3:
                                var y = t.stateNode.containerInfo;
                                y.nodeType === 1
                                    ? (y.textContent = "")
                                    : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(_(163));
                        }
                } catch (S) {
                    we(t, t.return, S);
                }
                if (((e = t.sibling), e !== null)) {
                    (e.return = t.return), (F = e);
                    break;
                }
                F = t.return;
            }
    return (w = cf), (cf = !1), w;
}
function qo(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var o = (r = r.next);
        do {
            if ((o.tag & e) === e) {
                var s = o.destroy;
                (o.destroy = void 0), s !== void 0 && cu(t, n, s);
            }
            o = o.next;
        } while (o !== r);
    }
}
function ml(e, t) {
    if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
        var n = (t = t.next);
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
            }
            n = n.next;
        } while (n !== t);
    }
}
function du(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n;
        }
        typeof t == "function" ? t(e) : (t.current = e);
    }
}
function gm(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), gm(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
            ((t = e.stateNode), t !== null && (delete t[Zt], delete t[ds], delete t[Xa], delete t[D0], delete t[F0])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
function vm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function df(e) {
    e: for (;;) {
        for (; e.sibling === null; ) {
            if (e.return === null || vm(e.return)) return null;
            e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
    }
}
function fu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode),
            t
                ? n.nodeType === 8
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
                  (n = n._reactRootContainer),
                  n != null || t.onclick !== null || (t.onclick = _i));
    else if (r !== 4 && ((e = e.child), e !== null))
        for (fu(e, t, n), e = e.sibling; e !== null; ) fu(e, t, n), (e = e.sibling);
}
function pu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
        for (pu(e, t, n), e = e.sibling; e !== null; ) pu(e, t, n), (e = e.sibling);
}
var _e = null,
    Dt = !1;
function Tn(e, t, n) {
    for (n = n.child; n !== null; ) ym(e, t, n), (n = n.sibling);
}
function ym(e, t, n) {
    if (en && typeof en.onCommitFiberUnmount == "function")
        try {
            en.onCommitFiberUnmount(ll, n);
        } catch {}
    switch (n.tag) {
        case 5:
            Be || Vr(n, t);
        case 6:
            var r = _e,
                o = Dt;
            (_e = null),
                Tn(e, t, n),
                (_e = r),
                (Dt = o),
                _e !== null &&
                    (Dt
                        ? ((e = _e),
                          (n = n.stateNode),
                          e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
                        : _e.removeChild(n.stateNode));
            break;
        case 18:
            _e !== null &&
                (Dt
                    ? ((e = _e),
                      (n = n.stateNode),
                      e.nodeType === 8 ? ua(e.parentNode, n) : e.nodeType === 1 && ua(e, n),
                      is(e))
                    : ua(_e, n.stateNode));
            break;
        case 4:
            (r = _e), (o = Dt), (_e = n.stateNode.containerInfo), (Dt = !0), Tn(e, t, n), (_e = r), (Dt = o);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Be && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
                o = r = r.next;
                do {
                    var s = o,
                        i = s.destroy;
                    (s = s.tag), i !== void 0 && (s & 2 || s & 4) && cu(n, t, i), (o = o.next);
                } while (o !== r);
            }
            Tn(e, t, n);
            break;
        case 1:
            if (!Be && (Vr(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
                try {
                    (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
                } catch (l) {
                    we(n, t, l);
                }
            Tn(e, t, n);
            break;
        case 21:
            Tn(e, t, n);
            break;
        case 22:
            n.mode & 1 ? ((Be = (r = Be) || n.memoizedState !== null), Tn(e, t, n), (Be = r)) : Tn(e, t, n);
            break;
        default:
            Tn(e, t, n);
    }
}
function ff(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new ex()),
            t.forEach(function (r) {
                var o = cx.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(o, o));
            });
    }
}
function At(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var s = e,
                    i = t,
                    l = i;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                        case 5:
                            (_e = l.stateNode), (Dt = !1);
                            break e;
                        case 3:
                            (_e = l.stateNode.containerInfo), (Dt = !0);
                            break e;
                        case 4:
                            (_e = l.stateNode.containerInfo), (Dt = !0);
                            break e;
                    }
                    l = l.return;
                }
                if (_e === null) throw Error(_(160));
                ym(s, i, o), (_e = null), (Dt = !1);
                var a = o.alternate;
                a !== null && (a.return = null), (o.return = null);
            } catch (u) {
                we(o, t, u);
            }
        }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) xm(t, e), (t = t.sibling);
}
function xm(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((At(t, e), Gt(e), r & 4)) {
                try {
                    qo(3, e, e.return), ml(3, e);
                } catch (v) {
                    we(e, e.return, v);
                }
                try {
                    qo(5, e, e.return);
                } catch (v) {
                    we(e, e.return, v);
                }
            }
            break;
        case 1:
            At(t, e), Gt(e), r & 512 && n !== null && Vr(n, n.return);
            break;
        case 5:
            if ((At(t, e), Gt(e), r & 512 && n !== null && Vr(n, n.return), e.flags & 32)) {
                var o = e.stateNode;
                try {
                    ns(o, "");
                } catch (v) {
                    we(e, e.return, v);
                }
            }
            if (r & 4 && ((o = e.stateNode), o != null)) {
                var s = e.memoizedProps,
                    i = n !== null ? n.memoizedProps : s,
                    l = e.type,
                    a = e.updateQueue;
                if (((e.updateQueue = null), a !== null))
                    try {
                        l === "input" && s.type === "radio" && s.name != null && Bp(o, s), Da(l, i);
                        var u = Da(l, s);
                        for (i = 0; i < a.length; i += 2) {
                            var c = a[i],
                                f = a[i + 1];
                            c === "style"
                                ? Qp(o, f)
                                : c === "dangerouslySetInnerHTML"
                                  ? Wp(o, f)
                                  : c === "children"
                                    ? ns(o, f)
                                    : Hu(o, c, f, u);
                        }
                        switch (l) {
                            case "input":
                                Oa(o, s);
                                break;
                            case "textarea":
                                Up(o, s);
                                break;
                            case "select":
                                var g = o._wrapperState.wasMultiple;
                                o._wrapperState.wasMultiple = !!s.multiple;
                                var h = s.value;
                                h != null
                                    ? Hr(o, !!s.multiple, h, !1)
                                    : g !== !!s.multiple &&
                                      (s.defaultValue != null
                                          ? Hr(o, !!s.multiple, s.defaultValue, !0)
                                          : Hr(o, !!s.multiple, s.multiple ? [] : "", !1));
                        }
                        o[ds] = s;
                    } catch (v) {
                        we(e, e.return, v);
                    }
            }
            break;
        case 6:
            if ((At(t, e), Gt(e), r & 4)) {
                if (e.stateNode === null) throw Error(_(162));
                (o = e.stateNode), (s = e.memoizedProps);
                try {
                    o.nodeValue = s;
                } catch (v) {
                    we(e, e.return, v);
                }
            }
            break;
        case 3:
            if ((At(t, e), Gt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
                try {
                    is(t.containerInfo);
                } catch (v) {
                    we(e, e.return, v);
                }
            break;
        case 4:
            At(t, e), Gt(e);
            break;
        case 13:
            At(t, e),
                Gt(e),
                (o = e.child),
                o.flags & 8192 &&
                    ((s = o.memoizedState !== null),
                    (o.stateNode.isHidden = s),
                    !s || (o.alternate !== null && o.alternate.memoizedState !== null) || (Ec = be())),
                r & 4 && ff(e);
            break;
        case 22:
            if (
                ((c = n !== null && n.memoizedState !== null),
                e.mode & 1 ? ((Be = (u = Be) || c), At(t, e), (Be = u)) : At(t, e),
                Gt(e),
                r & 8192)
            ) {
                if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !c && e.mode & 1))
                    for (F = e, c = e.child; c !== null; ) {
                        for (f = F = c; F !== null; ) {
                            switch (((g = F), (h = g.child), g.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    qo(4, g, g.return);
                                    break;
                                case 1:
                                    Vr(g, g.return);
                                    var w = g.stateNode;
                                    if (typeof w.componentWillUnmount == "function") {
                                        (r = g), (n = g.return);
                                        try {
                                            (t = r),
                                                (w.props = t.memoizedProps),
                                                (w.state = t.memoizedState),
                                                w.componentWillUnmount();
                                        } catch (v) {
                                            we(r, n, v);
                                        }
                                    }
                                    break;
                                case 5:
                                    Vr(g, g.return);
                                    break;
                                case 22:
                                    if (g.memoizedState !== null) {
                                        hf(f);
                                        continue;
                                    }
                            }
                            h !== null ? ((h.return = g), (F = h)) : hf(f);
                        }
                        c = c.sibling;
                    }
                e: for (c = null, f = e; ; ) {
                    if (f.tag === 5) {
                        if (c === null) {
                            c = f;
                            try {
                                (o = f.stateNode),
                                    u
                                        ? ((s = o.style),
                                          typeof s.setProperty == "function"
                                              ? s.setProperty("display", "none", "important")
                                              : (s.display = "none"))
                                        : ((l = f.stateNode),
                                          (a = f.memoizedProps.style),
                                          (i = a != null && a.hasOwnProperty("display") ? a.display : null),
                                          (l.style.display = Hp("display", i)));
                            } catch (v) {
                                we(e, e.return, v);
                            }
                        }
                    } else if (f.tag === 6) {
                        if (c === null)
                            try {
                                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                            } catch (v) {
                                we(e, e.return, v);
                            }
                    } else if (
                        ((f.tag !== 22 && f.tag !== 23) || f.memoizedState === null || f === e) &&
                        f.child !== null
                    ) {
                        (f.child.return = f), (f = f.child);
                        continue;
                    }
                    if (f === e) break e;
                    for (; f.sibling === null; ) {
                        if (f.return === null || f.return === e) break e;
                        c === f && (c = null), (f = f.return);
                    }
                    c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
                }
            }
            break;
        case 19:
            At(t, e), Gt(e), r & 4 && ff(e);
            break;
        case 21:
            break;
        default:
            At(t, e), Gt(e);
    }
}
function Gt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (vm(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(_(160));
            }
            switch (r.tag) {
                case 5:
                    var o = r.stateNode;
                    r.flags & 32 && (ns(o, ""), (r.flags &= -33));
                    var s = df(e);
                    pu(e, s, o);
                    break;
                case 3:
                case 4:
                    var i = r.stateNode.containerInfo,
                        l = df(e);
                    fu(e, l, i);
                    break;
                default:
                    throw Error(_(161));
            }
        } catch (a) {
            we(e, e.return, a);
        }
        e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
}
function nx(e, t, n) {
    (F = e), wm(e);
}
function wm(e, t, n) {
    for (var r = (e.mode & 1) !== 0; F !== null; ) {
        var o = F,
            s = o.child;
        if (o.tag === 22 && r) {
            var i = o.memoizedState !== null || ri;
            if (!i) {
                var l = o.alternate,
                    a = (l !== null && l.memoizedState !== null) || Be;
                l = ri;
                var u = Be;
                if (((ri = i), (Be = a) && !u))
                    for (F = o; F !== null; )
                        (i = F),
                            (a = i.child),
                            i.tag === 22 && i.memoizedState !== null
                                ? mf(o)
                                : a !== null
                                  ? ((a.return = i), (F = a))
                                  : mf(o);
                for (; s !== null; ) (F = s), wm(s), (s = s.sibling);
                (F = o), (ri = l), (Be = u);
            }
            pf(e);
        } else o.subtreeFlags & 8772 && s !== null ? ((s.return = o), (F = s)) : pf(e);
    }
}
function pf(e) {
    for (; F !== null; ) {
        var t = F;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Be || ml(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !Be)
                                if (n === null) r.componentDidMount();
                                else {
                                    var o = t.elementType === t.type ? n.memoizedProps : Mt(t.type, n.memoizedProps);
                                    r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                                }
                            var s = t.updateQueue;
                            s !== null && qd(t, s, r);
                            break;
                        case 3:
                            var i = t.updateQueue;
                            if (i !== null) {
                                if (((n = null), t.child !== null))
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode;
                                    }
                                qd(t, i, n);
                            }
                            break;
                        case 5:
                            var l = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = l;
                                var a = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        a.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        a.src && (n.src = a.src);
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var u = t.alternate;
                                if (u !== null) {
                                    var c = u.memoizedState;
                                    if (c !== null) {
                                        var f = c.dehydrated;
                                        f !== null && is(f);
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(_(163));
                    }
                Be || (t.flags & 512 && du(t));
            } catch (g) {
                we(t, t.return, g);
            }
        }
        if (t === e) {
            F = null;
            break;
        }
        if (((n = t.sibling), n !== null)) {
            (n.return = t.return), (F = n);
            break;
        }
        F = t.return;
    }
}
function hf(e) {
    for (; F !== null; ) {
        var t = F;
        if (t === e) {
            F = null;
            break;
        }
        var n = t.sibling;
        if (n !== null) {
            (n.return = t.return), (F = n);
            break;
        }
        F = t.return;
    }
}
function mf(e) {
    for (; F !== null; ) {
        var t = F;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        ml(4, t);
                    } catch (a) {
                        we(t, n, a);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var o = t.return;
                        try {
                            r.componentDidMount();
                        } catch (a) {
                            we(t, o, a);
                        }
                    }
                    var s = t.return;
                    try {
                        du(t);
                    } catch (a) {
                        we(t, s, a);
                    }
                    break;
                case 5:
                    var i = t.return;
                    try {
                        du(t);
                    } catch (a) {
                        we(t, i, a);
                    }
            }
        } catch (a) {
            we(t, t.return, a);
        }
        if (t === e) {
            F = null;
            break;
        }
        var l = t.sibling;
        if (l !== null) {
            (l.return = t.return), (F = l);
            break;
        }
        F = t.return;
    }
}
var rx = Math.ceil,
    Hi = Sn.ReactCurrentDispatcher,
    Sc = Sn.ReactCurrentOwner,
    bt = Sn.ReactCurrentBatchConfig,
    ee = 0,
    Oe = null,
    Ee = null,
    Le = 0,
    lt = 0,
    Wr = or(0),
    Te = 0,
    vs = null,
    Cr = 0,
    gl = 0,
    Cc = 0,
    Xo = null,
    Je = null,
    Ec = 0,
    mo = 1 / 0,
    cn = null,
    Qi = !1,
    hu = null,
    Yn = null,
    oi = !1,
    Un = null,
    Gi = 0,
    Zo = 0,
    mu = null,
    wi = -1,
    bi = 0;
function Ke() {
    return ee & 6 ? be() : wi !== -1 ? wi : (wi = be());
}
function qn(e) {
    return e.mode & 1
        ? ee & 2 && Le !== 0
            ? Le & -Le
            : $0.transition !== null
              ? (bi === 0 && (bi = oh()), bi)
              : ((e = oe), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : dh(e.type))), e)
        : 1;
}
function $t(e, t, n, r) {
    if (50 < Zo) throw ((Zo = 0), (mu = null), Error(_(185)));
    js(e, n, r),
        (!(ee & 2) || e !== Oe) &&
            (e === Oe && (!(ee & 2) && (gl |= n), Te === 4 && Ln(e, Le)),
            rt(e, r),
            n === 1 && ee === 0 && !(t.mode & 1) && ((mo = be() + 500), fl && sr()));
}
function rt(e, t) {
    var n = e.callbackNode;
    $y(e, t);
    var r = Ri(e, e === Oe ? Le : 0);
    if (r === 0) n !== null && Cd(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && Cd(n), t === 1))
            e.tag === 0 ? z0(gf.bind(null, e)) : Rh(gf.bind(null, e)),
                L0(function () {
                    !(ee & 6) && sr();
                }),
                (n = null);
        else {
            switch (sh(r)) {
                case 1:
                    n = qu;
                    break;
                case 4:
                    n = nh;
                    break;
                case 16:
                    n = ji;
                    break;
                case 536870912:
                    n = rh;
                    break;
                default:
                    n = ji;
            }
            n = Tm(n, bm.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = n);
    }
}
function bm(e, t) {
    if (((wi = -1), (bi = 0), ee & 6)) throw Error(_(327));
    var n = e.callbackNode;
    if (qr() && e.callbackNode !== n) return null;
    var r = Ri(e, e === Oe ? Le : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Ki(e, r);
    else {
        t = r;
        var o = ee;
        ee |= 2;
        var s = Cm();
        (Oe !== e || Le !== t) && ((cn = null), (mo = be() + 500), yr(e, t));
        do
            try {
                ix();
                break;
            } catch (l) {
                Sm(e, l);
            }
        while (!0);
        uc(), (Hi.current = s), (ee = o), Ee !== null ? (t = 0) : ((Oe = null), (Le = 0), (t = Te));
    }
    if (t !== 0) {
        if ((t === 2 && ((o = Ua(e)), o !== 0 && ((r = o), (t = gu(e, o)))), t === 1))
            throw ((n = vs), yr(e, 0), Ln(e, r), rt(e, be()), n);
        if (t === 6) Ln(e, r);
        else {
            if (
                ((o = e.current.alternate),
                !(r & 30) &&
                    !ox(o) &&
                    ((t = Ki(e, r)), t === 2 && ((s = Ua(e)), s !== 0 && ((r = s), (t = gu(e, s)))), t === 1))
            )
                throw ((n = vs), yr(e, 0), Ln(e, r), rt(e, be()), n);
            switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(_(345));
                case 2:
                    ar(e, Je, cn);
                    break;
                case 3:
                    if ((Ln(e, r), (r & 130023424) === r && ((t = Ec + 500 - be()), 10 < t))) {
                        if (Ri(e, 0) !== 0) break;
                        if (((o = e.suspendedLanes), (o & r) !== r)) {
                            Ke(), (e.pingedLanes |= e.suspendedLanes & o);
                            break;
                        }
                        e.timeoutHandle = qa(ar.bind(null, e, Je, cn), t);
                        break;
                    }
                    ar(e, Je, cn);
                    break;
                case 4:
                    if ((Ln(e, r), (r & 4194240) === r)) break;
                    for (t = e.eventTimes, o = -1; 0 < r; ) {
                        var i = 31 - zt(r);
                        (s = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~s);
                    }
                    if (
                        ((r = o),
                        (r = be() - r),
                        (r =
                            (120 > r
                                ? 120
                                : 480 > r
                                  ? 480
                                  : 1080 > r
                                    ? 1080
                                    : 1920 > r
                                      ? 1920
                                      : 3e3 > r
                                        ? 3e3
                                        : 4320 > r
                                          ? 4320
                                          : 1960 * rx(r / 1960)) - r),
                        10 < r)
                    ) {
                        e.timeoutHandle = qa(ar.bind(null, e, Je, cn), r);
                        break;
                    }
                    ar(e, Je, cn);
                    break;
                case 5:
                    ar(e, Je, cn);
                    break;
                default:
                    throw Error(_(329));
            }
        }
    }
    return rt(e, be()), e.callbackNode === n ? bm.bind(null, e) : null;
}
function gu(e, t) {
    var n = Xo;
    return (
        e.current.memoizedState.isDehydrated && (yr(e, t).flags |= 256),
        (e = Ki(e, t)),
        e !== 2 && ((t = Je), (Je = n), t !== null && vu(t)),
        e
    );
}
function vu(e) {
    Je === null ? (Je = e) : Je.push.apply(Je, e);
}
function ox(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && ((n = n.stores), n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r],
                        s = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!Ut(s(), o)) return !1;
                    } catch {
                        return !1;
                    }
                }
        }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
        else {
            if (t === e) break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return !0;
                t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
        }
    }
    return !0;
}
function Ln(e, t) {
    for (t &= ~Cc, t &= ~gl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
        var n = 31 - zt(t),
            r = 1 << n;
        (e[n] = -1), (t &= ~r);
    }
}
function gf(e) {
    if (ee & 6) throw Error(_(327));
    qr();
    var t = Ri(e, 0);
    if (!(t & 1)) return rt(e, be()), null;
    var n = Ki(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Ua(e);
        r !== 0 && ((t = r), (n = gu(e, r)));
    }
    if (n === 1) throw ((n = vs), yr(e, 0), Ln(e, t), rt(e, be()), n);
    if (n === 6) throw Error(_(345));
    return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), ar(e, Je, cn), rt(e, be()), null;
}
function kc(e, t) {
    var n = ee;
    ee |= 1;
    try {
        return e(t);
    } finally {
        (ee = n), ee === 0 && ((mo = be() + 500), fl && sr());
    }
}
function Er(e) {
    Un !== null && Un.tag === 0 && !(ee & 6) && qr();
    var t = ee;
    ee |= 1;
    var n = bt.transition,
        r = oe;
    try {
        if (((bt.transition = null), (oe = 1), e)) return e();
    } finally {
        (oe = r), (bt.transition = n), (ee = t), !(ee & 6) && sr();
    }
}
function Nc() {
    (lt = Wr.current), de(Wr);
}
function yr(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), _0(n)), Ee !== null))
        for (n = Ee.return; n !== null; ) {
            var r = n;
            switch ((ic(r), r.tag)) {
                case 1:
                    (r = r.type.childContextTypes), r != null && Li();
                    break;
                case 3:
                    po(), de(tt), de(Ue), mc();
                    break;
                case 5:
                    hc(r);
                    break;
                case 4:
                    po();
                    break;
                case 13:
                    de(pe);
                    break;
                case 19:
                    de(pe);
                    break;
                case 10:
                    cc(r.type._context);
                    break;
                case 22:
                case 23:
                    Nc();
            }
            n = n.return;
        }
    if (
        ((Oe = e),
        (Ee = e = Xn(e.current, null)),
        (Le = lt = t),
        (Te = 0),
        (vs = null),
        (Cc = gl = Cr = 0),
        (Je = Xo = null),
        cr !== null)
    ) {
        for (t = 0; t < cr.length; t++)
            if (((n = cr[t]), (r = n.interleaved), r !== null)) {
                n.interleaved = null;
                var o = r.next,
                    s = n.pending;
                if (s !== null) {
                    var i = s.next;
                    (s.next = o), (r.next = i);
                }
                n.pending = r;
            }
        cr = null;
    }
    return e;
}
function Sm(e, t) {
    do {
        var n = Ee;
        try {
            if ((uc(), (vi.current = Wi), Vi)) {
                for (var r = me.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null), (r = r.next);
                }
                Vi = !1;
            }
            if (
                ((Sr = 0),
                (Ae = Pe = me = null),
                (Yo = !1),
                (hs = 0),
                (Sc.current = null),
                n === null || n.return === null)
            ) {
                (Te = 1), (vs = t), (Ee = null);
                break;
            }
            e: {
                var s = e,
                    i = n.return,
                    l = n,
                    a = t;
                if (((t = Le), (l.flags |= 32768), a !== null && typeof a == "object" && typeof a.then == "function")) {
                    var u = a,
                        c = l,
                        f = c.tag;
                    if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var g = c.alternate;
                        g
                            ? ((c.updateQueue = g.updateQueue),
                              (c.memoizedState = g.memoizedState),
                              (c.lanes = g.lanes))
                            : ((c.updateQueue = null), (c.memoizedState = null));
                    }
                    var h = nf(i);
                    if (h !== null) {
                        (h.flags &= -257), rf(h, i, l, s, t), h.mode & 1 && tf(s, u, t), (t = h), (a = u);
                        var w = t.updateQueue;
                        if (w === null) {
                            var v = new Set();
                            v.add(a), (t.updateQueue = v);
                        } else w.add(a);
                        break e;
                    } else {
                        if (!(t & 1)) {
                            tf(s, u, t), Pc();
                            break e;
                        }
                        a = Error(_(426));
                    }
                } else if (fe && l.mode & 1) {
                    var x = nf(i);
                    if (x !== null) {
                        !(x.flags & 65536) && (x.flags |= 256), rf(x, i, l, s, t), lc(ho(a, l));
                        break e;
                    }
                }
                (s = a = ho(a, l)), Te !== 4 && (Te = 2), Xo === null ? (Xo = [s]) : Xo.push(s), (s = i);
                do {
                    switch (s.tag) {
                        case 3:
                            (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                            var m = sm(s, a, t);
                            Yd(s, m);
                            break e;
                        case 1:
                            l = a;
                            var p = s.type,
                                y = s.stateNode;
                            if (
                                !(s.flags & 128) &&
                                (typeof p.getDerivedStateFromError == "function" ||
                                    (y !== null &&
                                        typeof y.componentDidCatch == "function" &&
                                        (Yn === null || !Yn.has(y))))
                            ) {
                                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                                var S = im(s, l, t);
                                Yd(s, S);
                                break e;
                            }
                    }
                    s = s.return;
                } while (s !== null);
            }
            km(n);
        } catch (C) {
            (t = C), Ee === n && n !== null && (Ee = n = n.return);
            continue;
        }
        break;
    } while (!0);
}
function Cm() {
    var e = Hi.current;
    return (Hi.current = Wi), e === null ? Wi : e;
}
function Pc() {
    (Te === 0 || Te === 3 || Te === 2) && (Te = 4),
        Oe === null || (!(Cr & 268435455) && !(gl & 268435455)) || Ln(Oe, Le);
}
function Ki(e, t) {
    var n = ee;
    ee |= 2;
    var r = Cm();
    (Oe !== e || Le !== t) && ((cn = null), yr(e, t));
    do
        try {
            sx();
            break;
        } catch (o) {
            Sm(e, o);
        }
    while (!0);
    if ((uc(), (ee = n), (Hi.current = r), Ee !== null)) throw Error(_(261));
    return (Oe = null), (Le = 0), Te;
}
function sx() {
    for (; Ee !== null; ) Em(Ee);
}
function ix() {
    for (; Ee !== null && !Ay(); ) Em(Ee);
}
function Em(e) {
    var t = Pm(e.alternate, e, lt);
    (e.memoizedProps = e.pendingProps), t === null ? km(e) : (Ee = t), (Sc.current = null);
}
function km(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
            if (((n = J0(n, t)), n !== null)) {
                (n.flags &= 32767), (Ee = n);
                return;
            }
            if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            else {
                (Te = 6), (Ee = null);
                return;
            }
        } else if (((n = Z0(n, t, lt)), n !== null)) {
            Ee = n;
            return;
        }
        if (((t = t.sibling), t !== null)) {
            Ee = t;
            return;
        }
        Ee = t = e;
    } while (t !== null);
    Te === 0 && (Te = 5);
}
function ar(e, t, n) {
    var r = oe,
        o = bt.transition;
    try {
        (bt.transition = null), (oe = 1), lx(e, t, n, r);
    } finally {
        (bt.transition = o), (oe = r);
    }
    return null;
}
function lx(e, t, n, r) {
    do qr();
    while (Un !== null);
    if (ee & 6) throw Error(_(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(_(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var s = n.lanes | n.childLanes;
    if (
        (By(e, s),
        e === Oe && ((Ee = Oe = null), (Le = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
            oi ||
            ((oi = !0),
            Tm(ji, function () {
                return qr(), null;
            })),
        (s = (n.flags & 15990) !== 0),
        n.subtreeFlags & 15990 || s)
    ) {
        (s = bt.transition), (bt.transition = null);
        var i = oe;
        oe = 1;
        var l = ee;
        (ee |= 4),
            (Sc.current = null),
            tx(e, n),
            xm(n, e),
            P0(Ka),
            (Ai = !!Ga),
            (Ka = Ga = null),
            (e.current = n),
            nx(n),
            Oy(),
            (ee = l),
            (oe = i),
            (bt.transition = s);
    } else e.current = n;
    if (
        (oi && ((oi = !1), (Un = e), (Gi = o)),
        (s = e.pendingLanes),
        s === 0 && (Yn = null),
        Ly(n.stateNode),
        rt(e, be()),
        t !== null)
    )
        for (r = e.onRecoverableError, n = 0; n < t.length; n++)
            (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
    if (Qi) throw ((Qi = !1), (e = hu), (hu = null), e);
    return (
        Gi & 1 && e.tag !== 0 && qr(),
        (s = e.pendingLanes),
        s & 1 ? (e === mu ? Zo++ : ((Zo = 0), (mu = e))) : (Zo = 0),
        sr(),
        null
    );
}
function qr() {
    if (Un !== null) {
        var e = sh(Gi),
            t = bt.transition,
            n = oe;
        try {
            if (((bt.transition = null), (oe = 16 > e ? 16 : e), Un === null)) var r = !1;
            else {
                if (((e = Un), (Un = null), (Gi = 0), ee & 6)) throw Error(_(331));
                var o = ee;
                for (ee |= 4, F = e.current; F !== null; ) {
                    var s = F,
                        i = s.child;
                    if (F.flags & 16) {
                        var l = s.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var u = l[a];
                                for (F = u; F !== null; ) {
                                    var c = F;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            qo(8, c, s);
                                    }
                                    var f = c.child;
                                    if (f !== null) (f.return = c), (F = f);
                                    else
                                        for (; F !== null; ) {
                                            c = F;
                                            var g = c.sibling,
                                                h = c.return;
                                            if ((gm(c), c === u)) {
                                                F = null;
                                                break;
                                            }
                                            if (g !== null) {
                                                (g.return = h), (F = g);
                                                break;
                                            }
                                            F = h;
                                        }
                                }
                            }
                            var w = s.alternate;
                            if (w !== null) {
                                var v = w.child;
                                if (v !== null) {
                                    w.child = null;
                                    do {
                                        var x = v.sibling;
                                        (v.sibling = null), (v = x);
                                    } while (v !== null);
                                }
                            }
                            F = s;
                        }
                    }
                    if (s.subtreeFlags & 2064 && i !== null) (i.return = s), (F = i);
                    else
                        e: for (; F !== null; ) {
                            if (((s = F), s.flags & 2048))
                                switch (s.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        qo(9, s, s.return);
                                }
                            var m = s.sibling;
                            if (m !== null) {
                                (m.return = s.return), (F = m);
                                break e;
                            }
                            F = s.return;
                        }
                }
                var p = e.current;
                for (F = p; F !== null; ) {
                    i = F;
                    var y = i.child;
                    if (i.subtreeFlags & 2064 && y !== null) (y.return = i), (F = y);
                    else
                        e: for (i = p; F !== null; ) {
                            if (((l = F), l.flags & 2048))
                                try {
                                    switch (l.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            ml(9, l);
                                    }
                                } catch (C) {
                                    we(l, l.return, C);
                                }
                            if (l === i) {
                                F = null;
                                break e;
                            }
                            var S = l.sibling;
                            if (S !== null) {
                                (S.return = l.return), (F = S);
                                break e;
                            }
                            F = l.return;
                        }
                }
                if (((ee = o), sr(), en && typeof en.onPostCommitFiberRoot == "function"))
                    try {
                        en.onPostCommitFiberRoot(ll, e);
                    } catch {}
                r = !0;
            }
            return r;
        } finally {
            (oe = n), (bt.transition = t);
        }
    }
    return !1;
}
function vf(e, t, n) {
    (t = ho(n, t)), (t = sm(e, t, 1)), (e = Kn(e, t, 1)), (t = Ke()), e !== null && (js(e, 1, t), rt(e, t));
}
function we(e, t, n) {
    if (e.tag === 3) vf(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                vf(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (
                    typeof t.type.getDerivedStateFromError == "function" ||
                    (typeof r.componentDidCatch == "function" && (Yn === null || !Yn.has(r)))
                ) {
                    (e = ho(n, e)),
                        (e = im(t, e, 1)),
                        (t = Kn(t, e, 1)),
                        (e = Ke()),
                        t !== null && (js(t, 1, e), rt(t, e));
                    break;
                }
            }
            t = t.return;
        }
}
function ax(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
        (t = Ke()),
        (e.pingedLanes |= e.suspendedLanes & n),
        Oe === e &&
            (Le & n) === n &&
            (Te === 4 || (Te === 3 && (Le & 130023424) === Le && 500 > be() - Ec) ? yr(e, 0) : (Cc |= n)),
        rt(e, t);
}
function Nm(e, t) {
    t === 0 && (e.mode & 1 ? ((t = Ks), (Ks <<= 1), !(Ks & 130023424) && (Ks = 4194304)) : (t = 1));
    var n = Ke();
    (e = yn(e, t)), e !== null && (js(e, t, n), rt(e, n));
}
function ux(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), Nm(e, n);
}
function cx(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                o = e.memoizedState;
            o !== null && (n = o.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(_(314));
    }
    r !== null && r.delete(t), Nm(e, n);
}
var Pm;
Pm = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || tt.current) et = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return (et = !1), X0(e, t, n);
            et = !!(e.flags & 131072);
        }
    else (et = !1), fe && t.flags & 1048576 && Ah(t, Fi, t.index);
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            xi(e, t), (e = t.pendingProps);
            var o = uo(t, Ue.current);
            Yr(t, n), (o = vc(null, t, r, e, o, n));
            var s = yc();
            return (
                (t.flags |= 1),
                typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      nt(r) ? ((s = !0), Ii(t)) : (s = !1),
                      (t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
                      fc(t),
                      (o.updater = hl),
                      (t.stateNode = o),
                      (o._reactInternals = t),
                      ru(t, r, e, n),
                      (t = iu(null, t, r, !0, s, n)))
                    : ((t.tag = 0), fe && s && sc(t), Qe(null, t, o, n), (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch (
                    (xi(e, t),
                    (e = t.pendingProps),
                    (o = r._init),
                    (r = o(r._payload)),
                    (t.type = r),
                    (o = t.tag = fx(r)),
                    (e = Mt(r, e)),
                    o)
                ) {
                    case 0:
                        t = su(null, t, r, e, n);
                        break e;
                    case 1:
                        t = lf(null, t, r, e, n);
                        break e;
                    case 11:
                        t = of(null, t, r, e, n);
                        break e;
                    case 14:
                        t = sf(null, t, r, Mt(r.type, e), n);
                        break e;
                }
                throw Error(_(306, r, ""));
            }
            return t;
        case 0:
            return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : Mt(r, o)), su(e, t, r, o, n);
        case 1:
            return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : Mt(r, o)), lf(e, t, r, o, n);
        case 3:
            e: {
                if ((cm(t), e === null)) throw Error(_(387));
                (r = t.pendingProps), (s = t.memoizedState), (o = s.element), Dh(e, t), Bi(t, r, null, n);
                var i = t.memoizedState;
                if (((r = i.element), s.isDehydrated))
                    if (
                        ((s = {
                            element: r,
                            isDehydrated: !1,
                            cache: i.cache,
                            pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                            transitions: i.transitions,
                        }),
                        (t.updateQueue.baseState = s),
                        (t.memoizedState = s),
                        t.flags & 256)
                    ) {
                        (o = ho(Error(_(423)), t)), (t = af(e, t, r, n, o));
                        break e;
                    } else if (r !== o) {
                        (o = ho(Error(_(424)), t)), (t = af(e, t, r, n, o));
                        break e;
                    } else
                        for (
                            ut = Gn(t.stateNode.containerInfo.firstChild),
                                ct = t,
                                fe = !0,
                                Ft = null,
                                n = Lh(t, null, r, n),
                                t.child = n;
                            n;

                        )
                            (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
                else {
                    if ((co(), r === o)) {
                        t = xn(e, t, n);
                        break e;
                    }
                    Qe(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                Fh(t),
                e === null && eu(t),
                (r = t.type),
                (o = t.pendingProps),
                (s = e !== null ? e.memoizedProps : null),
                (i = o.children),
                Ya(r, o) ? (i = null) : s !== null && Ya(r, s) && (t.flags |= 32),
                um(e, t),
                Qe(e, t, i, n),
                t.child
            );
        case 6:
            return e === null && eu(t), null;
        case 13:
            return dm(e, t, n);
        case 4:
            return (
                pc(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                e === null ? (t.child = fo(t, null, r, n)) : Qe(e, t, r, n),
                t.child
            );
        case 11:
            return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : Mt(r, o)), of(e, t, r, o, n);
        case 7:
            return Qe(e, t, t.pendingProps, n), t.child;
        case 8:
            return Qe(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return Qe(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (
                    ((r = t.type._context),
                    (o = t.pendingProps),
                    (s = t.memoizedProps),
                    (i = o.value),
                    le(zi, r._currentValue),
                    (r._currentValue = i),
                    s !== null)
                )
                    if (Ut(s.value, i)) {
                        if (s.children === o.children && !tt.current) {
                            t = xn(e, t, n);
                            break e;
                        }
                    } else
                        for (s = t.child, s !== null && (s.return = t); s !== null; ) {
                            var l = s.dependencies;
                            if (l !== null) {
                                i = s.child;
                                for (var a = l.firstContext; a !== null; ) {
                                    if (a.context === r) {
                                        if (s.tag === 1) {
                                            (a = mn(-1, n & -n)), (a.tag = 2);
                                            var u = s.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var c = u.pending;
                                                c === null ? (a.next = a) : ((a.next = c.next), (c.next = a)),
                                                    (u.pending = a);
                                            }
                                        }
                                        (s.lanes |= n),
                                            (a = s.alternate),
                                            a !== null && (a.lanes |= n),
                                            tu(s.return, n, t),
                                            (l.lanes |= n);
                                        break;
                                    }
                                    a = a.next;
                                }
                            } else if (s.tag === 10) i = s.type === t.type ? null : s.child;
                            else if (s.tag === 18) {
                                if (((i = s.return), i === null)) throw Error(_(341));
                                (i.lanes |= n),
                                    (l = i.alternate),
                                    l !== null && (l.lanes |= n),
                                    tu(i, n, t),
                                    (i = s.sibling);
                            } else i = s.child;
                            if (i !== null) i.return = s;
                            else
                                for (i = s; i !== null; ) {
                                    if (i === t) {
                                        i = null;
                                        break;
                                    }
                                    if (((s = i.sibling), s !== null)) {
                                        (s.return = i.return), (i = s);
                                        break;
                                    }
                                    i = i.return;
                                }
                            s = i;
                        }
                Qe(e, t, o.children, n), (t = t.child);
            }
            return t;
        case 9:
            return (
                (o = t.type),
                (r = t.pendingProps.children),
                Yr(t, n),
                (o = St(o)),
                (r = r(o)),
                (t.flags |= 1),
                Qe(e, t, r, n),
                t.child
            );
        case 14:
            return (r = t.type), (o = Mt(r, t.pendingProps)), (o = Mt(r.type, o)), sf(e, t, r, o, n);
        case 15:
            return lm(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : Mt(r, o)),
                xi(e, t),
                (t.tag = 1),
                nt(r) ? ((e = !0), Ii(t)) : (e = !1),
                Yr(t, n),
                om(t, r, o),
                ru(t, r, o, n),
                iu(null, t, r, !0, e, n)
            );
        case 19:
            return fm(e, t, n);
        case 22:
            return am(e, t, n);
    }
    throw Error(_(156, t.tag));
};
function Tm(e, t) {
    return th(e, t);
}
function dx(e, t, n, r) {
    (this.tag = e),
        (this.key = n),
        (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}
function wt(e, t, n, r) {
    return new dx(e, t, n, r);
}
function Tc(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
}
function fx(e) {
    if (typeof e == "function") return Tc(e) ? 1 : 0;
    if (e != null) {
        if (((e = e.$$typeof), e === Gu)) return 11;
        if (e === Ku) return 14;
    }
    return 2;
}
function Xn(e, t) {
    var n = e.alternate;
    return (
        n === null
            ? ((n = wt(e.tag, t, e.key, e.mode)),
              (n.elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
        (n.flags = e.flags & 14680064),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
    );
}
function Si(e, t, n, r, o, s) {
    var i = 2;
    if (((r = e), typeof e == "function")) Tc(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else
        e: switch (e) {
            case _r:
                return xr(n.children, o, s, t);
            case Qu:
                (i = 8), (o |= 8);
                break;
            case Pa:
                return (e = wt(12, n, t, o | 2)), (e.elementType = Pa), (e.lanes = s), e;
            case Ta:
                return (e = wt(13, n, t, o)), (e.elementType = Ta), (e.lanes = s), e;
            case ja:
                return (e = wt(19, n, t, o)), (e.elementType = ja), (e.lanes = s), e;
            case Fp:
                return vl(n, o, s, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case Ip:
                            i = 10;
                            break e;
                        case Dp:
                            i = 9;
                            break e;
                        case Gu:
                            i = 11;
                            break e;
                        case Ku:
                            i = 14;
                            break e;
                        case On:
                            (i = 16), (r = null);
                            break e;
                    }
                throw Error(_(130, e == null ? e : typeof e, ""));
        }
    return (t = wt(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = s), t;
}
function xr(e, t, n, r) {
    return (e = wt(7, e, r, t)), (e.lanes = n), e;
}
function vl(e, t, n, r) {
    return (e = wt(22, e, r, t)), (e.elementType = Fp), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function va(e, t, n) {
    return (e = wt(6, e, null, t)), (e.lanes = n), e;
}
function ya(e, t, n) {
    return (
        (t = wt(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = n),
        (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
        t
    );
}
function px(e, t, n, r, o) {
    (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = Zl(0)),
        (this.expirationTimes = Zl(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = Zl(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = o),
        (this.mutableSourceEagerHydrationData = null);
}
function jc(e, t, n, r, o, s, i, l, a) {
    return (
        (e = new px(e, t, n, l, a)),
        t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
        (s = wt(3, null, null, t)),
        (e.current = s),
        (s.stateNode = e),
        (s.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        fc(s),
        e
    );
}
function hx(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Mr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function jm(e) {
    if (!e) return Jn;
    e = e._reactInternals;
    e: {
        if (Tr(e) !== e || e.tag !== 1) throw Error(_(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (nt(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            t = t.return;
        } while (t !== null);
        throw Error(_(171));
    }
    if (e.tag === 1) {
        var n = e.type;
        if (nt(n)) return jh(e, n, t);
    }
    return t;
}
function Rm(e, t, n, r, o, s, i, l, a) {
    return (
        (e = jc(n, r, !0, e, o, s, i, l, a)),
        (e.context = jm(null)),
        (n = e.current),
        (r = Ke()),
        (o = qn(n)),
        (s = mn(r, o)),
        (s.callback = t ?? null),
        Kn(n, s, o),
        (e.current.lanes = o),
        js(e, o, r),
        rt(e, r),
        e
    );
}
function yl(e, t, n, r) {
    var o = t.current,
        s = Ke(),
        i = qn(o);
    return (
        (n = jm(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = mn(s, i)),
        (t.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        (e = Kn(o, t, i)),
        e !== null && ($t(e, o, i, s), gi(e, o, i)),
        i
    );
}
function Yi(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode;
    }
}
function yf(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
    }
}
function Rc(e, t) {
    yf(e, t), (e = e.alternate) && yf(e, t);
}
function mx() {
    return null;
}
var Am =
    typeof reportError == "function"
        ? reportError
        : function (e) {
              console.error(e);
          };
function Ac(e) {
    this._internalRoot = e;
}
xl.prototype.render = Ac.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(_(409));
    yl(e, t, null, null);
};
xl.prototype.unmount = Ac.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Er(function () {
            yl(null, e, null, null);
        }),
            (t[vn] = null);
    }
};
function xl(e) {
    this._internalRoot = e;
}
xl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = ah();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < _n.length && t !== 0 && t < _n[n].priority; n++);
        _n.splice(n, 0, e), n === 0 && ch(e);
    }
};
function Oc(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function wl(e) {
    return !(
        !e ||
        (e.nodeType !== 1 &&
            e.nodeType !== 9 &&
            e.nodeType !== 11 &&
            (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
}
function xf() {}
function gx(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var s = r;
            r = function () {
                var u = Yi(i);
                s.call(u);
            };
        }
        var i = Rm(t, r, e, 0, null, !1, !1, "", xf);
        return (e._reactRootContainer = i), (e[vn] = i.current), us(e.nodeType === 8 ? e.parentNode : e), Er(), i;
    }
    for (; (o = e.lastChild); ) e.removeChild(o);
    if (typeof r == "function") {
        var l = r;
        r = function () {
            var u = Yi(a);
            l.call(u);
        };
    }
    var a = jc(e, 0, !1, null, null, !1, !1, "", xf);
    return (
        (e._reactRootContainer = a),
        (e[vn] = a.current),
        us(e.nodeType === 8 ? e.parentNode : e),
        Er(function () {
            yl(t, a, n, r);
        }),
        a
    );
}
function bl(e, t, n, r, o) {
    var s = n._reactRootContainer;
    if (s) {
        var i = s;
        if (typeof o == "function") {
            var l = o;
            o = function () {
                var a = Yi(i);
                l.call(a);
            };
        }
        yl(t, i, e, o);
    } else i = gx(n, t, e, o, r);
    return Yi(i);
}
ih = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = $o(t.pendingLanes);
                n !== 0 && (Xu(t, n | 1), rt(t, be()), !(ee & 6) && ((mo = be() + 500), sr()));
            }
            break;
        case 13:
            Er(function () {
                var r = yn(e, 1);
                if (r !== null) {
                    var o = Ke();
                    $t(r, e, 1, o);
                }
            }),
                Rc(e, 1);
    }
};
Zu = function (e) {
    if (e.tag === 13) {
        var t = yn(e, 134217728);
        if (t !== null) {
            var n = Ke();
            $t(t, e, 134217728, n);
        }
        Rc(e, 134217728);
    }
};
lh = function (e) {
    if (e.tag === 13) {
        var t = qn(e),
            n = yn(e, t);
        if (n !== null) {
            var r = Ke();
            $t(n, e, t, r);
        }
        Rc(e, t);
    }
};
ah = function () {
    return oe;
};
uh = function (e, t) {
    var n = oe;
    try {
        return (oe = e), t();
    } finally {
        oe = n;
    }
};
za = function (e, t, n) {
    switch (t) {
        case "input":
            if ((Oa(e, n), (t = n.name), n.type === "radio" && t != null)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                    n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0;
                    t < n.length;
                    t++
                ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var o = dl(r);
                        if (!o) throw Error(_(90));
                        $p(r), Oa(r, o);
                    }
                }
            }
            break;
        case "textarea":
            Up(e, n);
            break;
        case "select":
            (t = n.value), t != null && Hr(e, !!n.multiple, t, !1);
    }
};
Yp = kc;
qp = Er;
var vx = { usingClientEntryPoint: !1, Events: [As, Fr, dl, Gp, Kp, kc] },
    Lo = { findFiberByHostInstance: ur, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" },
    yx = {
        bundleType: Lo.bundleType,
        version: Lo.version,
        rendererPackageName: Lo.rendererPackageName,
        rendererConfig: Lo.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Sn.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return (e = Jp(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: Lo.findFiberByHostInstance || mx,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var si = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!si.isDisabled && si.supportsFiber)
        try {
            (ll = si.inject(yx)), (en = si);
        } catch {}
}
mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vx;
mt.createPortal = function (e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Oc(t)) throw Error(_(200));
    return hx(e, t, null, n);
};
mt.createRoot = function (e, t) {
    if (!Oc(e)) throw Error(_(299));
    var n = !1,
        r = "",
        o = Am;
    return (
        t != null &&
            (t.unstable_strictMode === !0 && (n = !0),
            t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
            t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
        (t = jc(e, 1, !1, null, null, n, !1, r, o)),
        (e[vn] = t.current),
        us(e.nodeType === 8 ? e.parentNode : e),
        new Ac(t)
    );
};
mt.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(_(188)) : ((e = Object.keys(e).join(",")), Error(_(268, e)));
    return (e = Jp(t)), (e = e === null ? null : e.stateNode), e;
};
mt.flushSync = function (e) {
    return Er(e);
};
mt.hydrate = function (e, t, n) {
    if (!wl(t)) throw Error(_(200));
    return bl(null, e, t, !0, n);
};
mt.hydrateRoot = function (e, t, n) {
    if (!Oc(e)) throw Error(_(405));
    var r = (n != null && n.hydratedSources) || null,
        o = !1,
        s = "",
        i = Am;
    if (
        (n != null &&
            (n.unstable_strictMode === !0 && (o = !0),
            n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
        (t = Rm(t, null, e, 1, n ?? null, o, !1, s, i)),
        (e[vn] = t.current),
        us(e),
        r)
    )
        for (e = 0; e < r.length; e++)
            (n = r[e]),
                (o = n._getVersion),
                (o = o(n._source)),
                t.mutableSourceEagerHydrationData == null
                    ? (t.mutableSourceEagerHydrationData = [n, o])
                    : t.mutableSourceEagerHydrationData.push(n, o);
    return new xl(t);
};
mt.render = function (e, t, n) {
    if (!wl(t)) throw Error(_(200));
    return bl(null, e, t, !1, n);
};
mt.unmountComponentAtNode = function (e) {
    if (!wl(e)) throw Error(_(40));
    return e._reactRootContainer
        ? (Er(function () {
              bl(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[vn] = null);
              });
          }),
          !0)
        : !1;
};
mt.unstable_batchedUpdates = kc;
mt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!wl(n)) throw Error(_(200));
    if (e == null || e._reactInternals === void 0) throw Error(_(38));
    return bl(e, t, n, !1, r);
};
mt.version = "18.3.1-next-f1338f8080-20240426";
function Om() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Om);
        } catch (e) {
            console.error(e);
        }
}
Om(), (Op.exports = mt);
var Ms = Op.exports;
const Mm = wp(Ms);
var _m,
    wf = Ms;
(_m = wf.createRoot), wf.hydrateRoot;
const xx = 1,
    wx = 1e6;
let xa = 0;
function bx() {
    return (xa = (xa + 1) % Number.MAX_SAFE_INTEGER), xa.toString();
}
const wa = new Map(),
    bf = (e) => {
        if (wa.has(e)) return;
        const t = setTimeout(() => {
            wa.delete(e), Jo({ type: "REMOVE_TOAST", toastId: e });
        }, wx);
        wa.set(e, t);
    },
    Sx = (e, t) => {
        switch (t.type) {
            case "ADD_TOAST":
                return { ...e, toasts: [t.toast, ...e.toasts].slice(0, xx) };
            case "UPDATE_TOAST":
                return { ...e, toasts: e.toasts.map((n) => (n.id === t.toast.id ? { ...n, ...t.toast } : n)) };
            case "DISMISS_TOAST": {
                const { toastId: n } = t;
                return (
                    n
                        ? bf(n)
                        : e.toasts.forEach((r) => {
                              bf(r.id);
                          }),
                    { ...e, toasts: e.toasts.map((r) => (r.id === n || n === void 0 ? { ...r, open: !1 } : r)) }
                );
            }
            case "REMOVE_TOAST":
                return t.toastId === void 0
                    ? { ...e, toasts: [] }
                    : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
        }
    },
    Ci = [];
let Ei = { toasts: [] };
function Jo(e) {
    (Ei = Sx(Ei, e)),
        Ci.forEach((t) => {
            t(Ei);
        });
}
function Cx({ ...e }) {
    const t = bx(),
        n = (o) => Jo({ type: "UPDATE_TOAST", toast: { ...o, id: t } }),
        r = () => Jo({ type: "DISMISS_TOAST", toastId: t });
    return (
        Jo({
            type: "ADD_TOAST",
            toast: {
                ...e,
                id: t,
                open: !0,
                onOpenChange: (o) => {
                    o || r();
                },
            },
        }),
        { id: t, dismiss: r, update: n }
    );
}
function Ex() {
    const [e, t] = b.useState(Ei);
    return (
        b.useEffect(
            () => (
                Ci.push(t),
                () => {
                    const n = Ci.indexOf(t);
                    n > -1 && Ci.splice(n, 1);
                }
            ),
            [e]
        ),
        { ...e, toast: Cx, dismiss: (n) => Jo({ type: "DISMISS_TOAST", toastId: n }) }
    );
}
function Se(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
    return function (o) {
        if ((e == null || e(o), n === !1 || !o.defaultPrevented)) return t == null ? void 0 : t(o);
    };
}
function Sf(e, t) {
    if (typeof e == "function") return e(t);
    e != null && (e.current = t);
}
function Lm(...e) {
    return (t) => {
        let n = !1;
        const r = e.map((o) => {
            const s = Sf(o, t);
            return !n && typeof s == "function" && (n = !0), s;
        });
        if (n)
            return () => {
                for (let o = 0; o < r.length; o++) {
                    const s = r[o];
                    typeof s == "function" ? s() : Sf(e[o], null);
                }
            };
    };
}
function ht(...e) {
    return b.useCallback(Lm(...e), e);
}
function bo(e, t = []) {
    let n = [];
    function r(s, i) {
        const l = b.createContext(i),
            a = n.length;
        n = [...n, i];
        const u = (f) => {
            var m;
            const { scope: g, children: h, ...w } = f,
                v = ((m = g == null ? void 0 : g[e]) == null ? void 0 : m[a]) || l,
                x = b.useMemo(() => w, Object.values(w));
            return d.jsx(v.Provider, { value: x, children: h });
        };
        u.displayName = s + "Provider";
        function c(f, g) {
            var v;
            const h = ((v = g == null ? void 0 : g[e]) == null ? void 0 : v[a]) || l,
                w = b.useContext(h);
            if (w) return w;
            if (i !== void 0) return i;
            throw new Error(`\`${f}\` must be used within \`${s}\``);
        }
        return [u, c];
    }
    const o = () => {
        const s = n.map((i) => b.createContext(i));
        return function (l) {
            const a = (l == null ? void 0 : l[e]) || s;
            return b.useMemo(() => ({ [`__scope${e}`]: { ...l, [e]: a } }), [l, a]);
        };
    };
    return (o.scopeName = e), [r, kx(o, ...t)];
}
function kx(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
        const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
        return function (s) {
            const i = r.reduce((l, { useScope: a, scopeName: u }) => {
                const f = a(s)[`__scope${u}`];
                return { ...l, ...f };
            }, {});
            return b.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
        };
    };
    return (n.scopeName = t.scopeName), n;
}
function qi(e) {
    const t = Px(e),
        n = b.forwardRef((r, o) => {
            const { children: s, ...i } = r,
                l = b.Children.toArray(s),
                a = l.find(jx);
            if (a) {
                const u = a.props.children,
                    c = l.map((f) =>
                        f === a
                            ? b.Children.count(u) > 1
                                ? b.Children.only(null)
                                : b.isValidElement(u)
                                  ? u.props.children
                                  : null
                            : f
                    );
                return d.jsx(t, { ...i, ref: o, children: b.isValidElement(u) ? b.cloneElement(u, void 0, c) : null });
            }
            return d.jsx(t, { ...i, ref: o, children: s });
        });
    return (n.displayName = `${e}.Slot`), n;
}
var Nx = qi("Slot");
function Px(e) {
    const t = b.forwardRef((n, r) => {
        const { children: o, ...s } = n;
        if (b.isValidElement(o)) {
            const i = Ax(o),
                l = Rx(s, o.props);
            return o.type !== b.Fragment && (l.ref = r ? Lm(r, i) : i), b.cloneElement(o, l);
        }
        return b.Children.count(o) > 1 ? b.Children.only(null) : null;
    });
    return (t.displayName = `${e}.SlotClone`), t;
}
var Im = Symbol("radix.slottable");
function Tx(e) {
    const t = ({ children: n }) => d.jsx(d.Fragment, { children: n });
    return (t.displayName = `${e}.Slottable`), (t.__radixId = Im), t;
}
function jx(e) {
    return b.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Im;
}
function Rx(e, t) {
    const n = { ...t };
    for (const r in t) {
        const o = e[r],
            s = t[r];
        /^on[A-Z]/.test(r)
            ? o && s
                ? (n[r] = (...l) => {
                      const a = s(...l);
                      return o(...l), a;
                  })
                : o && (n[r] = o)
            : r === "style"
              ? (n[r] = { ...o, ...s })
              : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
    }
    return { ...e, ...n };
}
function Ax(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n
        ? e.ref
        : ((t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get),
          (n = t && "isReactWarning" in t && t.isReactWarning),
          n ? e.props.ref : e.props.ref || e.ref);
}
function Dm(e) {
    const t = e + "CollectionProvider",
        [n, r] = bo(t),
        [o, s] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
        i = (v) => {
            const { scope: x, children: m } = v,
                p = M.useRef(null),
                y = M.useRef(new Map()).current;
            return d.jsx(o, { scope: x, itemMap: y, collectionRef: p, children: m });
        };
    i.displayName = t;
    const l = e + "CollectionSlot",
        a = qi(l),
        u = M.forwardRef((v, x) => {
            const { scope: m, children: p } = v,
                y = s(l, m),
                S = ht(x, y.collectionRef);
            return d.jsx(a, { ref: S, children: p });
        });
    u.displayName = l;
    const c = e + "CollectionItemSlot",
        f = "data-radix-collection-item",
        g = qi(c),
        h = M.forwardRef((v, x) => {
            const { scope: m, children: p, ...y } = v,
                S = M.useRef(null),
                C = ht(x, S),
                E = s(c, m);
            return (
                M.useEffect(() => (E.itemMap.set(S, { ref: S, ...y }), () => void E.itemMap.delete(S))),
                d.jsx(g, { [f]: "", ref: C, children: p })
            );
        });
    h.displayName = c;
    function w(v) {
        const x = s(e + "CollectionConsumer", v);
        return M.useCallback(() => {
            const p = x.collectionRef.current;
            if (!p) return [];
            const y = Array.from(p.querySelectorAll(`[${f}]`));
            return Array.from(x.itemMap.values()).sort((E, k) => y.indexOf(E.ref.current) - y.indexOf(k.ref.current));
        }, [x.collectionRef, x.itemMap]);
    }
    return [{ Provider: i, Slot: u, ItemSlot: h }, w, r];
}
var Ox = [
        "a",
        "button",
        "div",
        "form",
        "h2",
        "h3",
        "img",
        "input",
        "label",
        "li",
        "nav",
        "ol",
        "p",
        "select",
        "span",
        "svg",
        "ul",
    ],
    je = Ox.reduce((e, t) => {
        const n = qi(`Primitive.${t}`),
            r = b.forwardRef((o, s) => {
                const { asChild: i, ...l } = o,
                    a = i ? n : t;
                return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), d.jsx(a, { ...l, ref: s });
            });
        return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
    }, {});
function Fm(e, t) {
    e && Ms.flushSync(() => e.dispatchEvent(t));
}
function er(e) {
    const t = b.useRef(e);
    return (
        b.useEffect(() => {
            t.current = e;
        }),
        b.useMemo(
            () =>
                (...n) => {
                    var r;
                    return (r = t.current) == null ? void 0 : r.call(t, ...n);
                },
            []
        )
    );
}
function Mx(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = er(e);
    b.useEffect(() => {
        const r = (o) => {
            o.key === "Escape" && n(o);
        };
        return (
            t.addEventListener("keydown", r, { capture: !0 }),
            () => t.removeEventListener("keydown", r, { capture: !0 })
        );
    }, [n, t]);
}
var _x = "DismissableLayer",
    yu = "dismissableLayer.update",
    Lx = "dismissableLayer.pointerDownOutside",
    Ix = "dismissableLayer.focusOutside",
    Cf,
    zm = b.createContext({ layers: new Set(), layersWithOutsidePointerEventsDisabled: new Set(), branches: new Set() }),
    Mc = b.forwardRef((e, t) => {
        const {
                disableOutsidePointerEvents: n = !1,
                onEscapeKeyDown: r,
                onPointerDownOutside: o,
                onFocusOutside: s,
                onInteractOutside: i,
                onDismiss: l,
                ...a
            } = e,
            u = b.useContext(zm),
            [c, f] = b.useState(null),
            g = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document),
            [, h] = b.useState({}),
            w = ht(t, (k) => f(k)),
            v = Array.from(u.layers),
            [x] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
            m = v.indexOf(x),
            p = c ? v.indexOf(c) : -1,
            y = u.layersWithOutsidePointerEventsDisabled.size > 0,
            S = p >= m,
            C = Fx((k) => {
                const N = k.target,
                    R = [...u.branches].some((A) => A.contains(N));
                !S || R || (o == null || o(k), i == null || i(k), k.defaultPrevented || l == null || l());
            }, g),
            E = zx((k) => {
                const N = k.target;
                [...u.branches].some((A) => A.contains(N)) ||
                    (s == null || s(k), i == null || i(k), k.defaultPrevented || l == null || l());
            }, g);
        return (
            Mx((k) => {
                p === u.layers.size - 1 && (r == null || r(k), !k.defaultPrevented && l && (k.preventDefault(), l()));
            }, g),
            b.useEffect(() => {
                if (c)
                    return (
                        n &&
                            (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                                ((Cf = g.body.style.pointerEvents), (g.body.style.pointerEvents = "none")),
                            u.layersWithOutsidePointerEventsDisabled.add(c)),
                        u.layers.add(c),
                        Ef(),
                        () => {
                            n &&
                                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                                (g.body.style.pointerEvents = Cf);
                        }
                    );
            }, [c, g, n, u]),
            b.useEffect(
                () => () => {
                    c && (u.layers.delete(c), u.layersWithOutsidePointerEventsDisabled.delete(c), Ef());
                },
                [c, u]
            ),
            b.useEffect(() => {
                const k = () => h({});
                return document.addEventListener(yu, k), () => document.removeEventListener(yu, k);
            }, []),
            d.jsx(je.div, {
                ...a,
                ref: w,
                style: { pointerEvents: y ? (S ? "auto" : "none") : void 0, ...e.style },
                onFocusCapture: Se(e.onFocusCapture, E.onFocusCapture),
                onBlurCapture: Se(e.onBlurCapture, E.onBlurCapture),
                onPointerDownCapture: Se(e.onPointerDownCapture, C.onPointerDownCapture),
            })
        );
    });
Mc.displayName = _x;
var Dx = "DismissableLayerBranch",
    $m = b.forwardRef((e, t) => {
        const n = b.useContext(zm),
            r = b.useRef(null),
            o = ht(t, r);
        return (
            b.useEffect(() => {
                const s = r.current;
                if (s)
                    return (
                        n.branches.add(s),
                        () => {
                            n.branches.delete(s);
                        }
                    );
            }, [n.branches]),
            d.jsx(je.div, { ...e, ref: o })
        );
    });
$m.displayName = Dx;
function Fx(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = er(e),
        r = b.useRef(!1),
        o = b.useRef(() => {});
    return (
        b.useEffect(() => {
            const s = (l) => {
                    if (l.target && !r.current) {
                        let a = function () {
                            Bm(Lx, n, u, { discrete: !0 });
                        };
                        const u = { originalEvent: l };
                        l.pointerType === "touch"
                            ? (t.removeEventListener("click", o.current),
                              (o.current = a),
                              t.addEventListener("click", o.current, { once: !0 }))
                            : a();
                    } else t.removeEventListener("click", o.current);
                    r.current = !1;
                },
                i = window.setTimeout(() => {
                    t.addEventListener("pointerdown", s);
                }, 0);
            return () => {
                window.clearTimeout(i),
                    t.removeEventListener("pointerdown", s),
                    t.removeEventListener("click", o.current);
            };
        }, [t, n]),
        { onPointerDownCapture: () => (r.current = !0) }
    );
}
function zx(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = er(e),
        r = b.useRef(!1);
    return (
        b.useEffect(() => {
            const o = (s) => {
                s.target && !r.current && Bm(Ix, n, { originalEvent: s }, { discrete: !1 });
            };
            return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
        }, [t, n]),
        { onFocusCapture: () => (r.current = !0), onBlurCapture: () => (r.current = !1) }
    );
}
function Ef() {
    const e = new CustomEvent(yu);
    document.dispatchEvent(e);
}
function Bm(e, t, n, { discrete: r }) {
    const o = n.originalEvent.target,
        s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
    t && o.addEventListener(e, t, { once: !0 }), r ? Fm(o, s) : o.dispatchEvent(s);
}
var $x = Mc,
    Bx = $m,
    rn = globalThis != null && globalThis.document ? b.useLayoutEffect : () => {},
    Ux = "Portal",
    Um = b.forwardRef((e, t) => {
        var l;
        const { container: n, ...r } = e,
            [o, s] = b.useState(!1);
        rn(() => s(!0), []);
        const i = n || (o && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body));
        return i ? Mm.createPortal(d.jsx(je.div, { ...r, ref: t }), i) : null;
    });
Um.displayName = Ux;
function Vx(e, t) {
    return b.useReducer((n, r) => t[n][r] ?? n, e);
}
var Sl = (e) => {
    const { present: t, children: n } = e,
        r = Wx(t),
        o = typeof n == "function" ? n({ present: r.isPresent }) : b.Children.only(n),
        s = ht(r.ref, Hx(o));
    return typeof n == "function" || r.isPresent ? b.cloneElement(o, { ref: s }) : null;
};
Sl.displayName = "Presence";
function Wx(e) {
    const [t, n] = b.useState(),
        r = b.useRef(null),
        o = b.useRef(e),
        s = b.useRef("none"),
        i = e ? "mounted" : "unmounted",
        [l, a] = Vx(i, {
            mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
            unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
            unmounted: { MOUNT: "mounted" },
        });
    return (
        b.useEffect(() => {
            const u = ii(r.current);
            s.current = l === "mounted" ? u : "none";
        }, [l]),
        rn(() => {
            const u = r.current,
                c = o.current;
            if (c !== e) {
                const g = s.current,
                    h = ii(u);
                e
                    ? a("MOUNT")
                    : h === "none" || (u == null ? void 0 : u.display) === "none"
                      ? a("UNMOUNT")
                      : a(c && g !== h ? "ANIMATION_OUT" : "UNMOUNT"),
                    (o.current = e);
            }
        }, [e, a]),
        rn(() => {
            if (t) {
                let u;
                const c = t.ownerDocument.defaultView ?? window,
                    f = (h) => {
                        const v = ii(r.current).includes(h.animationName);
                        if (h.target === t && v && (a("ANIMATION_END"), !o.current)) {
                            const x = t.style.animationFillMode;
                            (t.style.animationFillMode = "forwards"),
                                (u = c.setTimeout(() => {
                                    t.style.animationFillMode === "forwards" && (t.style.animationFillMode = x);
                                }));
                        }
                    },
                    g = (h) => {
                        h.target === t && (s.current = ii(r.current));
                    };
                return (
                    t.addEventListener("animationstart", g),
                    t.addEventListener("animationcancel", f),
                    t.addEventListener("animationend", f),
                    () => {
                        c.clearTimeout(u),
                            t.removeEventListener("animationstart", g),
                            t.removeEventListener("animationcancel", f),
                            t.removeEventListener("animationend", f);
                    }
                );
            } else a("ANIMATION_END");
        }, [t, a]),
        {
            isPresent: ["mounted", "unmountSuspended"].includes(l),
            ref: b.useCallback((u) => {
                (r.current = u ? getComputedStyle(u) : null), n(u);
            }, []),
        }
    );
}
function ii(e) {
    return (e == null ? void 0 : e.animationName) || "none";
}
function Hx(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n
        ? e.ref
        : ((t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get),
          (n = t && "isReactWarning" in t && t.isReactWarning),
          n ? e.props.ref : e.props.ref || e.ref);
}
var Qx = Uu[" useInsertionEffect ".trim().toString()] || rn;
function Cl({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
    const [o, s, i] = Gx({ defaultProp: t, onChange: n }),
        l = e !== void 0,
        a = l ? e : o;
    {
        const c = b.useRef(e !== void 0);
        b.useEffect(() => {
            const f = c.current;
            f !== l &&
                console.warn(
                    `${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${l ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
                ),
                (c.current = l);
        }, [l, r]);
    }
    const u = b.useCallback(
        (c) => {
            var f;
            if (l) {
                const g = Kx(c) ? c(e) : c;
                g !== e && ((f = i.current) == null || f.call(i, g));
            } else s(c);
        },
        [l, e, s, i]
    );
    return [a, u];
}
function Gx({ defaultProp: e, onChange: t }) {
    const [n, r] = b.useState(e),
        o = b.useRef(n),
        s = b.useRef(t);
    return (
        Qx(() => {
            s.current = t;
        }, [t]),
        b.useEffect(() => {
            var i;
            o.current !== n && ((i = s.current) == null || i.call(s, n), (o.current = n));
        }, [n, o]),
        [n, r, s]
    );
}
function Kx(e) {
    return typeof e == "function";
}
var Yx = Object.freeze({
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
    }),
    qx = "VisuallyHidden",
    El = b.forwardRef((e, t) => d.jsx(je.span, { ...e, ref: t, style: { ...Yx, ...e.style } }));
El.displayName = qx;
var Xx = El,
    _c = "ToastProvider",
    [Lc, Zx, Jx] = Dm("Toast"),
    [Vm, TE] = bo("Toast", [Jx]),
    [e1, kl] = Vm(_c),
    Wm = (e) => {
        const {
                __scopeToast: t,
                label: n = "Notification",
                duration: r = 5e3,
                swipeDirection: o = "right",
                swipeThreshold: s = 50,
                children: i,
            } = e,
            [l, a] = b.useState(null),
            [u, c] = b.useState(0),
            f = b.useRef(!1),
            g = b.useRef(!1);
        return (
            n.trim() || console.error(`Invalid prop \`label\` supplied to \`${_c}\`. Expected non-empty \`string\`.`),
            d.jsx(Lc.Provider, {
                scope: t,
                children: d.jsx(e1, {
                    scope: t,
                    label: n,
                    duration: r,
                    swipeDirection: o,
                    swipeThreshold: s,
                    toastCount: u,
                    viewport: l,
                    onViewportChange: a,
                    onToastAdd: b.useCallback(() => c((h) => h + 1), []),
                    onToastRemove: b.useCallback(() => c((h) => h - 1), []),
                    isFocusedToastEscapeKeyDownRef: f,
                    isClosePausedRef: g,
                    children: i,
                }),
            })
        );
    };
Wm.displayName = _c;
var Hm = "ToastViewport",
    t1 = ["F8"],
    xu = "toast.viewportPause",
    wu = "toast.viewportResume",
    Qm = b.forwardRef((e, t) => {
        const { __scopeToast: n, hotkey: r = t1, label: o = "Notifications ({hotkey})", ...s } = e,
            i = kl(Hm, n),
            l = Zx(n),
            a = b.useRef(null),
            u = b.useRef(null),
            c = b.useRef(null),
            f = b.useRef(null),
            g = ht(t, f, i.onViewportChange),
            h = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
            w = i.toastCount > 0;
        b.useEffect(() => {
            const x = (m) => {
                var y;
                r.length !== 0 && r.every((S) => m[S] || m.code === S) && ((y = f.current) == null || y.focus());
            };
            return document.addEventListener("keydown", x), () => document.removeEventListener("keydown", x);
        }, [r]),
            b.useEffect(() => {
                const x = a.current,
                    m = f.current;
                if (w && x && m) {
                    const p = () => {
                            if (!i.isClosePausedRef.current) {
                                const E = new CustomEvent(xu);
                                m.dispatchEvent(E), (i.isClosePausedRef.current = !0);
                            }
                        },
                        y = () => {
                            if (i.isClosePausedRef.current) {
                                const E = new CustomEvent(wu);
                                m.dispatchEvent(E), (i.isClosePausedRef.current = !1);
                            }
                        },
                        S = (E) => {
                            !x.contains(E.relatedTarget) && y();
                        },
                        C = () => {
                            x.contains(document.activeElement) || y();
                        };
                    return (
                        x.addEventListener("focusin", p),
                        x.addEventListener("focusout", S),
                        x.addEventListener("pointermove", p),
                        x.addEventListener("pointerleave", C),
                        window.addEventListener("blur", p),
                        window.addEventListener("focus", y),
                        () => {
                            x.removeEventListener("focusin", p),
                                x.removeEventListener("focusout", S),
                                x.removeEventListener("pointermove", p),
                                x.removeEventListener("pointerleave", C),
                                window.removeEventListener("blur", p),
                                window.removeEventListener("focus", y);
                        }
                    );
                }
            }, [w, i.isClosePausedRef]);
        const v = b.useCallback(
            ({ tabbingDirection: x }) => {
                const p = l().map((y) => {
                    const S = y.ref.current,
                        C = [S, ...h1(S)];
                    return x === "forwards" ? C : C.reverse();
                });
                return (x === "forwards" ? p.reverse() : p).flat();
            },
            [l]
        );
        return (
            b.useEffect(() => {
                const x = f.current;
                if (x) {
                    const m = (p) => {
                        var C, E, k;
                        const y = p.altKey || p.ctrlKey || p.metaKey;
                        if (p.key === "Tab" && !y) {
                            const N = document.activeElement,
                                R = p.shiftKey;
                            if (p.target === x && R) {
                                (C = u.current) == null || C.focus();
                                return;
                            }
                            const L = v({ tabbingDirection: R ? "backwards" : "forwards" }),
                                H = L.findIndex((O) => O === N);
                            ba(L.slice(H + 1))
                                ? p.preventDefault()
                                : R
                                  ? (E = u.current) == null || E.focus()
                                  : (k = c.current) == null || k.focus();
                        }
                    };
                    return x.addEventListener("keydown", m), () => x.removeEventListener("keydown", m);
                }
            }, [l, v]),
            d.jsxs(Bx, {
                ref: a,
                role: "region",
                "aria-label": o.replace("{hotkey}", h),
                tabIndex: -1,
                style: { pointerEvents: w ? void 0 : "none" },
                children: [
                    w &&
                        d.jsx(bu, {
                            ref: u,
                            onFocusFromOutsideViewport: () => {
                                const x = v({ tabbingDirection: "forwards" });
                                ba(x);
                            },
                        }),
                    d.jsx(Lc.Slot, { scope: n, children: d.jsx(je.ol, { tabIndex: -1, ...s, ref: g }) }),
                    w &&
                        d.jsx(bu, {
                            ref: c,
                            onFocusFromOutsideViewport: () => {
                                const x = v({ tabbingDirection: "backwards" });
                                ba(x);
                            },
                        }),
                ],
            })
        );
    });
Qm.displayName = Hm;
var Gm = "ToastFocusProxy",
    bu = b.forwardRef((e, t) => {
        const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e,
            s = kl(Gm, n);
        return d.jsx(El, {
            "aria-hidden": !0,
            tabIndex: 0,
            ...o,
            ref: t,
            style: { position: "fixed" },
            onFocus: (i) => {
                var u;
                const l = i.relatedTarget;
                !((u = s.viewport) != null && u.contains(l)) && r();
            },
        });
    });
bu.displayName = Gm;
var _s = "Toast",
    n1 = "toast.swipeStart",
    r1 = "toast.swipeMove",
    o1 = "toast.swipeCancel",
    s1 = "toast.swipeEnd",
    Km = b.forwardRef((e, t) => {
        const { forceMount: n, open: r, defaultOpen: o, onOpenChange: s, ...i } = e,
            [l, a] = Cl({ prop: r, defaultProp: o ?? !0, onChange: s, caller: _s });
        return d.jsx(Sl, {
            present: n || l,
            children: d.jsx(a1, {
                open: l,
                ...i,
                ref: t,
                onClose: () => a(!1),
                onPause: er(e.onPause),
                onResume: er(e.onResume),
                onSwipeStart: Se(e.onSwipeStart, (u) => {
                    u.currentTarget.setAttribute("data-swipe", "start");
                }),
                onSwipeMove: Se(e.onSwipeMove, (u) => {
                    const { x: c, y: f } = u.detail.delta;
                    u.currentTarget.setAttribute("data-swipe", "move"),
                        u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${c}px`),
                        u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${f}px`);
                }),
                onSwipeCancel: Se(e.onSwipeCancel, (u) => {
                    u.currentTarget.setAttribute("data-swipe", "cancel"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
                }),
                onSwipeEnd: Se(e.onSwipeEnd, (u) => {
                    const { x: c, y: f } = u.detail.delta;
                    u.currentTarget.setAttribute("data-swipe", "end"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                        u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${c}px`),
                        u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${f}px`),
                        a(!1);
                }),
            }),
        });
    });
Km.displayName = _s;
var [i1, l1] = Vm(_s, { onClose() {} }),
    a1 = b.forwardRef((e, t) => {
        const {
                __scopeToast: n,
                type: r = "foreground",
                duration: o,
                open: s,
                onClose: i,
                onEscapeKeyDown: l,
                onPause: a,
                onResume: u,
                onSwipeStart: c,
                onSwipeMove: f,
                onSwipeCancel: g,
                onSwipeEnd: h,
                ...w
            } = e,
            v = kl(_s, n),
            [x, m] = b.useState(null),
            p = ht(t, (O) => m(O)),
            y = b.useRef(null),
            S = b.useRef(null),
            C = o || v.duration,
            E = b.useRef(0),
            k = b.useRef(C),
            N = b.useRef(0),
            { onToastAdd: R, onToastRemove: A } = v,
            D = er(() => {
                var W;
                (x == null ? void 0 : x.contains(document.activeElement)) && ((W = v.viewport) == null || W.focus()),
                    i();
            }),
            L = b.useCallback(
                (O) => {
                    !O ||
                        O === 1 / 0 ||
                        (window.clearTimeout(N.current),
                        (E.current = new Date().getTime()),
                        (N.current = window.setTimeout(D, O)));
                },
                [D]
            );
        b.useEffect(() => {
            const O = v.viewport;
            if (O) {
                const W = () => {
                        L(k.current), u == null || u();
                    },
                    B = () => {
                        const U = new Date().getTime() - E.current;
                        (k.current = k.current - U), window.clearTimeout(N.current), a == null || a();
                    };
                return (
                    O.addEventListener(xu, B),
                    O.addEventListener(wu, W),
                    () => {
                        O.removeEventListener(xu, B), O.removeEventListener(wu, W);
                    }
                );
            }
        }, [v.viewport, C, a, u, L]),
            b.useEffect(() => {
                s && !v.isClosePausedRef.current && L(C);
            }, [s, C, v.isClosePausedRef, L]),
            b.useEffect(() => (R(), () => A()), [R, A]);
        const H = b.useMemo(() => (x ? tg(x) : null), [x]);
        return v.viewport
            ? d.jsxs(d.Fragment, {
                  children: [
                      H &&
                          d.jsx(u1, {
                              __scopeToast: n,
                              role: "status",
                              "aria-live": r === "foreground" ? "assertive" : "polite",
                              "aria-atomic": !0,
                              children: H,
                          }),
                      d.jsx(i1, {
                          scope: n,
                          onClose: D,
                          children: Ms.createPortal(
                              d.jsx(Lc.ItemSlot, {
                                  scope: n,
                                  children: d.jsx($x, {
                                      asChild: !0,
                                      onEscapeKeyDown: Se(l, () => {
                                          v.isFocusedToastEscapeKeyDownRef.current || D(),
                                              (v.isFocusedToastEscapeKeyDownRef.current = !1);
                                      }),
                                      children: d.jsx(je.li, {
                                          role: "status",
                                          "aria-live": "off",
                                          "aria-atomic": !0,
                                          tabIndex: 0,
                                          "data-state": s ? "open" : "closed",
                                          "data-swipe-direction": v.swipeDirection,
                                          ...w,
                                          ref: p,
                                          style: { userSelect: "none", touchAction: "none", ...e.style },
                                          onKeyDown: Se(e.onKeyDown, (O) => {
                                              O.key === "Escape" &&
                                                  (l == null || l(O.nativeEvent),
                                                  O.nativeEvent.defaultPrevented ||
                                                      ((v.isFocusedToastEscapeKeyDownRef.current = !0), D()));
                                          }),
                                          onPointerDown: Se(e.onPointerDown, (O) => {
                                              O.button === 0 && (y.current = { x: O.clientX, y: O.clientY });
                                          }),
                                          onPointerMove: Se(e.onPointerMove, (O) => {
                                              if (!y.current) return;
                                              const W = O.clientX - y.current.x,
                                                  B = O.clientY - y.current.y,
                                                  U = !!S.current,
                                                  P = ["left", "right"].includes(v.swipeDirection),
                                                  T = ["left", "up"].includes(v.swipeDirection) ? Math.min : Math.max,
                                                  I = P ? T(0, W) : 0,
                                                  V = P ? 0 : T(0, B),
                                                  $ = O.pointerType === "touch" ? 10 : 2,
                                                  Q = { x: I, y: V },
                                                  G = { originalEvent: O, delta: Q };
                                              U
                                                  ? ((S.current = Q), li(r1, f, G, { discrete: !1 }))
                                                  : kf(Q, v.swipeDirection, $)
                                                    ? ((S.current = Q),
                                                      li(n1, c, G, { discrete: !1 }),
                                                      O.target.setPointerCapture(O.pointerId))
                                                    : (Math.abs(W) > $ || Math.abs(B) > $) && (y.current = null);
                                          }),
                                          onPointerUp: Se(e.onPointerUp, (O) => {
                                              const W = S.current,
                                                  B = O.target;
                                              if (
                                                  (B.hasPointerCapture(O.pointerId) &&
                                                      B.releasePointerCapture(O.pointerId),
                                                  (S.current = null),
                                                  (y.current = null),
                                                  W)
                                              ) {
                                                  const U = O.currentTarget,
                                                      P = { originalEvent: O, delta: W };
                                                  kf(W, v.swipeDirection, v.swipeThreshold)
                                                      ? li(s1, h, P, { discrete: !0 })
                                                      : li(o1, g, P, { discrete: !0 }),
                                                      U.addEventListener("click", (T) => T.preventDefault(), {
                                                          once: !0,
                                                      });
                                              }
                                          }),
                                      }),
                                  }),
                              }),
                              v.viewport
                          ),
                      }),
                  ],
              })
            : null;
    }),
    u1 = (e) => {
        const { __scopeToast: t, children: n, ...r } = e,
            o = kl(_s, t),
            [s, i] = b.useState(!1),
            [l, a] = b.useState(!1);
        return (
            f1(() => i(!0)),
            b.useEffect(() => {
                const u = window.setTimeout(() => a(!0), 1e3);
                return () => window.clearTimeout(u);
            }, []),
            l
                ? null
                : d.jsx(Um, {
                      asChild: !0,
                      children: d.jsx(El, { ...r, children: s && d.jsxs(d.Fragment, { children: [o.label, " ", n] }) }),
                  })
        );
    },
    c1 = "ToastTitle",
    Ym = b.forwardRef((e, t) => {
        const { __scopeToast: n, ...r } = e;
        return d.jsx(je.div, { ...r, ref: t });
    });
Ym.displayName = c1;
var d1 = "ToastDescription",
    qm = b.forwardRef((e, t) => {
        const { __scopeToast: n, ...r } = e;
        return d.jsx(je.div, { ...r, ref: t });
    });
qm.displayName = d1;
var Xm = "ToastAction",
    Zm = b.forwardRef((e, t) => {
        const { altText: n, ...r } = e;
        return n.trim()
            ? d.jsx(eg, { altText: n, asChild: !0, children: d.jsx(Ic, { ...r, ref: t }) })
            : (console.error(`Invalid prop \`altText\` supplied to \`${Xm}\`. Expected non-empty \`string\`.`), null);
    });
Zm.displayName = Xm;
var Jm = "ToastClose",
    Ic = b.forwardRef((e, t) => {
        const { __scopeToast: n, ...r } = e,
            o = l1(Jm, n);
        return d.jsx(eg, {
            asChild: !0,
            children: d.jsx(je.button, { type: "button", ...r, ref: t, onClick: Se(e.onClick, o.onClose) }),
        });
    });
Ic.displayName = Jm;
var eg = b.forwardRef((e, t) => {
    const { __scopeToast: n, altText: r, ...o } = e;
    return d.jsx(je.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t,
    });
});
function tg(e) {
    const t = [];
    return (
        Array.from(e.childNodes).forEach((r) => {
            if ((r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), p1(r))) {
                const o = r.ariaHidden || r.hidden || r.style.display === "none",
                    s = r.dataset.radixToastAnnounceExclude === "";
                if (!o)
                    if (s) {
                        const i = r.dataset.radixToastAnnounceAlt;
                        i && t.push(i);
                    } else t.push(...tg(r));
            }
        }),
        t
    );
}
function li(e, t, n, { discrete: r }) {
    const o = n.originalEvent.currentTarget,
        s = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
    t && o.addEventListener(e, t, { once: !0 }), r ? Fm(o, s) : o.dispatchEvent(s);
}
var kf = (e, t, n = 0) => {
    const r = Math.abs(e.x),
        o = Math.abs(e.y),
        s = r > o;
    return t === "left" || t === "right" ? s && r > n : !s && o > n;
};
function f1(e = () => {}) {
    const t = er(e);
    rn(() => {
        let n = 0,
            r = 0;
        return (
            (n = window.requestAnimationFrame(() => (r = window.requestAnimationFrame(t)))),
            () => {
                window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
            }
        );
    }, [t]);
}
function p1(e) {
    return e.nodeType === e.ELEMENT_NODE;
}
function h1(e) {
    const t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (r) => {
                const o = r.tagName === "INPUT" && r.type === "hidden";
                return r.disabled || r.hidden || o
                    ? NodeFilter.FILTER_SKIP
                    : r.tabIndex >= 0
                      ? NodeFilter.FILTER_ACCEPT
                      : NodeFilter.FILTER_SKIP;
            },
        });
    for (; n.nextNode(); ) t.push(n.currentNode);
    return t;
}
function ba(e) {
    const t = document.activeElement;
    return e.some((n) => (n === t ? !0 : (n.focus(), document.activeElement !== t)));
}
var m1 = Wm,
    ng = Qm,
    rg = Km,
    og = Ym,
    sg = qm,
    ig = Zm,
    lg = Ic;
function ag(e) {
    var t,
        n,
        r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++) e[t] && (n = ag(e[t])) && (r && (r += " "), (r += n));
        } else for (n in e) e[n] && (r && (r += " "), (r += n));
    return r;
}
function ug() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
        (e = arguments[n]) && (t = ag(e)) && (r && (r += " "), (r += t));
    return r;
}
const Nf = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
    Pf = ug,
    cg = (e, t) => (n) => {
        var r;
        if ((t == null ? void 0 : t.variants) == null)
            return Pf(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
        const { variants: o, defaultVariants: s } = t,
            i = Object.keys(o).map((u) => {
                const c = n == null ? void 0 : n[u],
                    f = s == null ? void 0 : s[u];
                if (c === null) return null;
                const g = Nf(c) || Nf(f);
                return o[u][g];
            }),
            l =
                n &&
                Object.entries(n).reduce((u, c) => {
                    let [f, g] = c;
                    return g === void 0 || (u[f] = g), u;
                }, {}),
            a =
                t == null || (r = t.compoundVariants) === null || r === void 0
                    ? void 0
                    : r.reduce((u, c) => {
                          let { class: f, className: g, ...h } = c;
                          return Object.entries(h).every((w) => {
                              let [v, x] = w;
                              return Array.isArray(x) ? x.includes({ ...s, ...l }[v]) : { ...s, ...l }[v] === x;
                          })
                              ? [...u, f, g]
                              : u;
                      }, []);
        return Pf(e, i, a, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const g1 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    dg = (...e) =>
        e
            .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
            .join(" ")
            .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var v1 = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const y1 = b.forwardRef(
    (
        {
            color: e = "currentColor",
            size: t = 24,
            strokeWidth: n = 2,
            absoluteStrokeWidth: r,
            className: o = "",
            children: s,
            iconNode: i,
            ...l
        },
        a
    ) =>
        b.createElement(
            "svg",
            {
                ref: a,
                ...v1,
                width: t,
                height: t,
                stroke: e,
                strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
                className: dg("lucide", o),
                ...l,
            },
            [...i.map(([u, c]) => b.createElement(u, c)), ...(Array.isArray(s) ? s : [s])]
        )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ke = (e, t) => {
    const n = b.forwardRef(({ className: r, ...o }, s) =>
        b.createElement(y1, { ref: s, iconNode: t, className: dg(`lucide-${g1(e)}`, r), ...o })
    );
    return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const x1 = ke("ArrowLeft", [
    ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
    ["path", { d: "M19 12H5", key: "x3x0zl" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ys = ke("ArrowRight", [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const w1 = ke("Award", [
    [
        "path",
        {
            d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
            key: "1yiouv",
        },
    ],
    ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const b1 = ke("BadgeCheck", [
    [
        "path",
        {
            d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
            key: "3c2336",
        },
    ],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const S1 = ke("Building2", [
    ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
    ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
    ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
    ["path", { d: "M10 6h4", key: "1itunk" }],
    ["path", { d: "M10 10h4", key: "tcdvrf" }],
    ["path", { d: "M10 14h4", key: "kelpxr" }],
    ["path", { d: "M10 18h4", key: "1ulq68" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const C1 = ke("ChevronDown", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dc = ke("Clock", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const E1 = ke("ExternalLink", [
    ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
    ["path", { d: "M10 14 21 3", key: "gplh6r" }],
    ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const k1 = ke("Gift", [
    ["rect", { x: "3", y: "8", width: "18", height: "4", rx: "1", key: "bkv52" }],
    ["path", { d: "M12 8v13", key: "1c76mn" }],
    ["path", { d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7", key: "6wjy6b" }],
    ["path", { d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5", key: "1ihvrl" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const N1 = ke("Mail", [
    ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
    ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fc = ke("MapPin", [
    [
        "path",
        {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z",
        },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const P1 = ke("Menu", [
    ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
    ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
    ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zc = ke("Phone", [
    [
        "path",
        {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
            key: "foiqr5",
        },
    ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const T1 = ke("Quote", [
    [
        "path",
        {
            d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
            key: "rib7q0",
        },
    ],
    [
        "path",
        {
            d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
            key: "1ymkrd",
        },
    ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const j1 = ke("Shield", [
    [
        "path",
        {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y",
        },
    ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const R1 = ke("Smartphone", [
    ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
    ["path", { d: "M12 18h.01", key: "mhygvu" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tf = ke("Star", [
    [
        "path",
        {
            d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
            key: "r04s7s",
        },
    ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Su = ke("Truck", [
    ["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2", key: "wrbu53" }],
    ["path", { d: "M15 18H9", key: "1lyqi6" }],
    ["path", { d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14", key: "lysw3i" }],
    ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }],
    ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const A1 = ke("Users", [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fg = ke("X", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
    ]),
    $c = "-",
    O1 = (e) => {
        const t = _1(e),
            { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
        return {
            getClassGroupId: (i) => {
                const l = i.split($c);
                return l[0] === "" && l.length !== 1 && l.shift(), pg(l, t) || M1(i);
            },
            getConflictingClassGroupIds: (i, l) => {
                const a = n[i] || [];
                return l && r[i] ? [...a, ...r[i]] : a;
            },
        };
    },
    pg = (e, t) => {
        var i;
        if (e.length === 0) return t.classGroupId;
        const n = e[0],
            r = t.nextPart.get(n),
            o = r ? pg(e.slice(1), r) : void 0;
        if (o) return o;
        if (t.validators.length === 0) return;
        const s = e.join($c);
        return (i = t.validators.find(({ validator: l }) => l(s))) == null ? void 0 : i.classGroupId;
    },
    jf = /^\[(.+)\]$/,
    M1 = (e) => {
        if (jf.test(e)) {
            const t = jf.exec(e)[1],
                n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
            if (n) return "arbitrary.." + n;
        }
    },
    _1 = (e) => {
        const { theme: t, prefix: n } = e,
            r = { nextPart: new Map(), validators: [] };
        return (
            I1(Object.entries(e.classGroups), n).forEach(([s, i]) => {
                Cu(i, r, s, t);
            }),
            r
        );
    },
    Cu = (e, t, n, r) => {
        e.forEach((o) => {
            if (typeof o == "string") {
                const s = o === "" ? t : Rf(t, o);
                s.classGroupId = n;
                return;
            }
            if (typeof o == "function") {
                if (L1(o)) {
                    Cu(o(r), t, n, r);
                    return;
                }
                t.validators.push({ validator: o, classGroupId: n });
                return;
            }
            Object.entries(o).forEach(([s, i]) => {
                Cu(i, Rf(t, s), n, r);
            });
        });
    },
    Rf = (e, t) => {
        let n = e;
        return (
            t.split($c).forEach((r) => {
                n.nextPart.has(r) || n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
                    (n = n.nextPart.get(r));
            }),
            n
        );
    },
    L1 = (e) => e.isThemeGetter,
    I1 = (e, t) =>
        t
            ? e.map(([n, r]) => {
                  const o = r.map((s) =>
                      typeof s == "string"
                          ? t + s
                          : typeof s == "object"
                            ? Object.fromEntries(Object.entries(s).map(([i, l]) => [t + i, l]))
                            : s
                  );
                  return [n, o];
              })
            : e,
    D1 = (e) => {
        if (e < 1) return { get: () => {}, set: () => {} };
        let t = 0,
            n = new Map(),
            r = new Map();
        const o = (s, i) => {
            n.set(s, i), t++, t > e && ((t = 0), (r = n), (n = new Map()));
        };
        return {
            get(s) {
                let i = n.get(s);
                if (i !== void 0) return i;
                if ((i = r.get(s)) !== void 0) return o(s, i), i;
            },
            set(s, i) {
                n.has(s) ? n.set(s, i) : o(s, i);
            },
        };
    },
    hg = "!",
    F1 = (e) => {
        const { separator: t, experimentalParseClassName: n } = e,
            r = t.length === 1,
            o = t[0],
            s = t.length,
            i = (l) => {
                const a = [];
                let u = 0,
                    c = 0,
                    f;
                for (let x = 0; x < l.length; x++) {
                    let m = l[x];
                    if (u === 0) {
                        if (m === o && (r || l.slice(x, x + s) === t)) {
                            a.push(l.slice(c, x)), (c = x + s);
                            continue;
                        }
                        if (m === "/") {
                            f = x;
                            continue;
                        }
                    }
                    m === "[" ? u++ : m === "]" && u--;
                }
                const g = a.length === 0 ? l : l.substring(c),
                    h = g.startsWith(hg),
                    w = h ? g.substring(1) : g,
                    v = f && f > c ? f - c : void 0;
                return { modifiers: a, hasImportantModifier: h, baseClassName: w, maybePostfixModifierPosition: v };
            };
        return n ? (l) => n({ className: l, parseClassName: i }) : i;
    },
    z1 = (e) => {
        if (e.length <= 1) return e;
        const t = [];
        let n = [];
        return (
            e.forEach((r) => {
                r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
            }),
            t.push(...n.sort()),
            t
        );
    },
    $1 = (e) => ({ cache: D1(e.cacheSize), parseClassName: F1(e), ...O1(e) }),
    B1 = /\s+/,
    U1 = (e, t) => {
        const { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o } = t,
            s = [],
            i = e.trim().split(B1);
        let l = "";
        for (let a = i.length - 1; a >= 0; a -= 1) {
            const u = i[a],
                { modifiers: c, hasImportantModifier: f, baseClassName: g, maybePostfixModifierPosition: h } = n(u);
            let w = !!h,
                v = r(w ? g.substring(0, h) : g);
            if (!v) {
                if (!w) {
                    l = u + (l.length > 0 ? " " + l : l);
                    continue;
                }
                if (((v = r(g)), !v)) {
                    l = u + (l.length > 0 ? " " + l : l);
                    continue;
                }
                w = !1;
            }
            const x = z1(c).join(":"),
                m = f ? x + hg : x,
                p = m + v;
            if (s.includes(p)) continue;
            s.push(p);
            const y = o(v, w);
            for (let S = 0; S < y.length; ++S) {
                const C = y[S];
                s.push(m + C);
            }
            l = u + (l.length > 0 ? " " + l : l);
        }
        return l;
    };
function V1() {
    let e = 0,
        t,
        n,
        r = "";
    for (; e < arguments.length; ) (t = arguments[e++]) && (n = mg(t)) && (r && (r += " "), (r += n));
    return r;
}
const mg = (e) => {
    if (typeof e == "string") return e;
    let t,
        n = "";
    for (let r = 0; r < e.length; r++) e[r] && (t = mg(e[r])) && (n && (n += " "), (n += t));
    return n;
};
function W1(e, ...t) {
    let n,
        r,
        o,
        s = i;
    function i(a) {
        const u = t.reduce((c, f) => f(c), e());
        return (n = $1(u)), (r = n.cache.get), (o = n.cache.set), (s = l), l(a);
    }
    function l(a) {
        const u = r(a);
        if (u) return u;
        const c = U1(a, n);
        return o(a, c), c;
    }
    return function () {
        return s(V1.apply(null, arguments));
    };
}
const ue = (e) => {
        const t = (n) => n[e] || [];
        return (t.isThemeGetter = !0), t;
    },
    gg = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    H1 = /^\d+\/\d+$/,
    Q1 = new Set(["px", "full", "screen"]),
    G1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    K1 =
        /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    Y1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    q1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    X1 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    an = (e) => Xr(e) || Q1.has(e) || H1.test(e),
    jn = (e) => So(e, "length", sw),
    Xr = (e) => !!e && !Number.isNaN(Number(e)),
    Sa = (e) => So(e, "number", Xr),
    Io = (e) => !!e && Number.isInteger(Number(e)),
    Z1 = (e) => e.endsWith("%") && Xr(e.slice(0, -1)),
    X = (e) => gg.test(e),
    Rn = (e) => G1.test(e),
    J1 = new Set(["length", "size", "percentage"]),
    ew = (e) => So(e, J1, vg),
    tw = (e) => So(e, "position", vg),
    nw = new Set(["image", "url"]),
    rw = (e) => So(e, nw, lw),
    ow = (e) => So(e, "", iw),
    Do = () => !0,
    So = (e, t, n) => {
        const r = gg.exec(e);
        return r ? (r[1] ? (typeof t == "string" ? r[1] === t : t.has(r[1])) : n(r[2])) : !1;
    },
    sw = (e) => K1.test(e) && !Y1.test(e),
    vg = () => !1,
    iw = (e) => q1.test(e),
    lw = (e) => X1.test(e),
    aw = () => {
        const e = ue("colors"),
            t = ue("spacing"),
            n = ue("blur"),
            r = ue("brightness"),
            o = ue("borderColor"),
            s = ue("borderRadius"),
            i = ue("borderSpacing"),
            l = ue("borderWidth"),
            a = ue("contrast"),
            u = ue("grayscale"),
            c = ue("hueRotate"),
            f = ue("invert"),
            g = ue("gap"),
            h = ue("gradientColorStops"),
            w = ue("gradientColorStopPositions"),
            v = ue("inset"),
            x = ue("margin"),
            m = ue("opacity"),
            p = ue("padding"),
            y = ue("saturate"),
            S = ue("scale"),
            C = ue("sepia"),
            E = ue("skew"),
            k = ue("space"),
            N = ue("translate"),
            R = () => ["auto", "contain", "none"],
            A = () => ["auto", "hidden", "clip", "visible", "scroll"],
            D = () => ["auto", X, t],
            L = () => [X, t],
            H = () => ["", an, jn],
            O = () => ["auto", Xr, X],
            W = () => [
                "bottom",
                "center",
                "left",
                "left-bottom",
                "left-top",
                "right",
                "right-bottom",
                "right-top",
                "top",
            ],
            B = () => ["solid", "dashed", "dotted", "double", "none"],
            U = () => [
                "normal",
                "multiply",
                "screen",
                "overlay",
                "darken",
                "lighten",
                "color-dodge",
                "color-burn",
                "hard-light",
                "soft-light",
                "difference",
                "exclusion",
                "hue",
                "saturation",
                "color",
                "luminosity",
            ],
            P = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
            T = () => ["", "0", X],
            I = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            V = () => [Xr, X];
        return {
            cacheSize: 500,
            separator: ":",
            theme: {
                colors: [Do],
                spacing: [an, jn],
                blur: ["none", "", Rn, X],
                brightness: V(),
                borderColor: [e],
                borderRadius: ["none", "", "full", Rn, X],
                borderSpacing: L(),
                borderWidth: H(),
                contrast: V(),
                grayscale: T(),
                hueRotate: V(),
                invert: T(),
                gap: L(),
                gradientColorStops: [e],
                gradientColorStopPositions: [Z1, jn],
                inset: D(),
                margin: D(),
                opacity: V(),
                padding: L(),
                saturate: V(),
                scale: V(),
                sepia: T(),
                skew: V(),
                space: L(),
                translate: L(),
            },
            classGroups: {
                aspect: [{ aspect: ["auto", "square", "video", X] }],
                container: ["container"],
                columns: [{ columns: [Rn] }],
                "break-after": [{ "break-after": I() }],
                "break-before": [{ "break-before": I() }],
                "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }],
                "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
                box: [{ box: ["border", "content"] }],
                display: [
                    "block",
                    "inline-block",
                    "inline",
                    "flex",
                    "inline-flex",
                    "table",
                    "inline-table",
                    "table-caption",
                    "table-cell",
                    "table-column",
                    "table-column-group",
                    "table-footer-group",
                    "table-header-group",
                    "table-row-group",
                    "table-row",
                    "flow-root",
                    "grid",
                    "inline-grid",
                    "contents",
                    "list-item",
                    "hidden",
                ],
                float: [{ float: ["right", "left", "none", "start", "end"] }],
                clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }],
                "object-position": [{ object: [...W(), X] }],
                overflow: [{ overflow: A() }],
                "overflow-x": [{ "overflow-x": A() }],
                "overflow-y": [{ "overflow-y": A() }],
                overscroll: [{ overscroll: R() }],
                "overscroll-x": [{ "overscroll-x": R() }],
                "overscroll-y": [{ "overscroll-y": R() }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{ inset: [v] }],
                "inset-x": [{ "inset-x": [v] }],
                "inset-y": [{ "inset-y": [v] }],
                start: [{ start: [v] }],
                end: [{ end: [v] }],
                top: [{ top: [v] }],
                right: [{ right: [v] }],
                bottom: [{ bottom: [v] }],
                left: [{ left: [v] }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{ z: ["auto", Io, X] }],
                basis: [{ basis: D() }],
                "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }],
                "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
                flex: [{ flex: ["1", "auto", "initial", "none", X] }],
                grow: [{ grow: T() }],
                shrink: [{ shrink: T() }],
                order: [{ order: ["first", "last", "none", Io, X] }],
                "grid-cols": [{ "grid-cols": [Do] }],
                "col-start-end": [{ col: ["auto", { span: ["full", Io, X] }, X] }],
                "col-start": [{ "col-start": O() }],
                "col-end": [{ "col-end": O() }],
                "grid-rows": [{ "grid-rows": [Do] }],
                "row-start-end": [{ row: ["auto", { span: [Io, X] }, X] }],
                "row-start": [{ "row-start": O() }],
                "row-end": [{ "row-end": O() }],
                "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }],
                "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", X] }],
                "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", X] }],
                gap: [{ gap: [g] }],
                "gap-x": [{ "gap-x": [g] }],
                "gap-y": [{ "gap-y": [g] }],
                "justify-content": [{ justify: ["normal", ...P()] }],
                "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }],
                "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }],
                "align-content": [{ content: ["normal", ...P(), "baseline"] }],
                "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }],
                "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }],
                "place-content": [{ "place-content": [...P(), "baseline"] }],
                "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }],
                "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }],
                p: [{ p: [p] }],
                px: [{ px: [p] }],
                py: [{ py: [p] }],
                ps: [{ ps: [p] }],
                pe: [{ pe: [p] }],
                pt: [{ pt: [p] }],
                pr: [{ pr: [p] }],
                pb: [{ pb: [p] }],
                pl: [{ pl: [p] }],
                m: [{ m: [x] }],
                mx: [{ mx: [x] }],
                my: [{ my: [x] }],
                ms: [{ ms: [x] }],
                me: [{ me: [x] }],
                mt: [{ mt: [x] }],
                mr: [{ mr: [x] }],
                mb: [{ mb: [x] }],
                ml: [{ ml: [x] }],
                "space-x": [{ "space-x": [k] }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{ "space-y": [k] }],
                "space-y-reverse": ["space-y-reverse"],
                w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", X, t] }],
                "min-w": [{ "min-w": [X, t, "min", "max", "fit"] }],
                "max-w": [{ "max-w": [X, t, "none", "full", "min", "max", "fit", "prose", { screen: [Rn] }, Rn] }],
                h: [{ h: [X, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
                "min-h": [{ "min-h": [X, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
                "max-h": [{ "max-h": [X, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
                size: [{ size: [X, t, "auto", "min", "max", "fit"] }],
                "font-size": [{ text: ["base", Rn, jn] }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [
                    {
                        font: [
                            "thin",
                            "extralight",
                            "light",
                            "normal",
                            "medium",
                            "semibold",
                            "bold",
                            "extrabold",
                            "black",
                            Sa,
                        ],
                    },
                ],
                "font-family": [{ font: [Do] }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", X] }],
                "line-clamp": [{ "line-clamp": ["none", Xr, Sa] }],
                leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", an, X] }],
                "list-image": [{ "list-image": ["none", X] }],
                "list-style-type": [{ list: ["none", "disc", "decimal", X] }],
                "list-style-position": [{ list: ["inside", "outside"] }],
                "placeholder-color": [{ placeholder: [e] }],
                "placeholder-opacity": [{ "placeholder-opacity": [m] }],
                "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }],
                "text-color": [{ text: [e] }],
                "text-opacity": [{ "text-opacity": [m] }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{ decoration: [...B(), "wavy"] }],
                "text-decoration-thickness": [{ decoration: ["auto", "from-font", an, jn] }],
                "underline-offset": [{ "underline-offset": ["auto", an, X] }],
                "text-decoration-color": [{ decoration: [e] }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
                indent: [{ indent: L() }],
                "vertical-align": [
                    { align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", X] },
                ],
                whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }],
                break: [{ break: ["normal", "words", "all", "keep"] }],
                hyphens: [{ hyphens: ["none", "manual", "auto"] }],
                content: [{ content: ["none", X] }],
                "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
                "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
                "bg-opacity": [{ "bg-opacity": [m] }],
                "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
                "bg-position": [{ bg: [...W(), tw] }],
                "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }],
                "bg-size": [{ bg: ["auto", "cover", "contain", ew] }],
                "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, rw] }],
                "bg-color": [{ bg: [e] }],
                "gradient-from-pos": [{ from: [w] }],
                "gradient-via-pos": [{ via: [w] }],
                "gradient-to-pos": [{ to: [w] }],
                "gradient-from": [{ from: [h] }],
                "gradient-via": [{ via: [h] }],
                "gradient-to": [{ to: [h] }],
                rounded: [{ rounded: [s] }],
                "rounded-s": [{ "rounded-s": [s] }],
                "rounded-e": [{ "rounded-e": [s] }],
                "rounded-t": [{ "rounded-t": [s] }],
                "rounded-r": [{ "rounded-r": [s] }],
                "rounded-b": [{ "rounded-b": [s] }],
                "rounded-l": [{ "rounded-l": [s] }],
                "rounded-ss": [{ "rounded-ss": [s] }],
                "rounded-se": [{ "rounded-se": [s] }],
                "rounded-ee": [{ "rounded-ee": [s] }],
                "rounded-es": [{ "rounded-es": [s] }],
                "rounded-tl": [{ "rounded-tl": [s] }],
                "rounded-tr": [{ "rounded-tr": [s] }],
                "rounded-br": [{ "rounded-br": [s] }],
                "rounded-bl": [{ "rounded-bl": [s] }],
                "border-w": [{ border: [l] }],
                "border-w-x": [{ "border-x": [l] }],
                "border-w-y": [{ "border-y": [l] }],
                "border-w-s": [{ "border-s": [l] }],
                "border-w-e": [{ "border-e": [l] }],
                "border-w-t": [{ "border-t": [l] }],
                "border-w-r": [{ "border-r": [l] }],
                "border-w-b": [{ "border-b": [l] }],
                "border-w-l": [{ "border-l": [l] }],
                "border-opacity": [{ "border-opacity": [m] }],
                "border-style": [{ border: [...B(), "hidden"] }],
                "divide-x": [{ "divide-x": [l] }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{ "divide-y": [l] }],
                "divide-y-reverse": ["divide-y-reverse"],
                "divide-opacity": [{ "divide-opacity": [m] }],
                "divide-style": [{ divide: B() }],
                "border-color": [{ border: [o] }],
                "border-color-x": [{ "border-x": [o] }],
                "border-color-y": [{ "border-y": [o] }],
                "border-color-s": [{ "border-s": [o] }],
                "border-color-e": [{ "border-e": [o] }],
                "border-color-t": [{ "border-t": [o] }],
                "border-color-r": [{ "border-r": [o] }],
                "border-color-b": [{ "border-b": [o] }],
                "border-color-l": [{ "border-l": [o] }],
                "divide-color": [{ divide: [o] }],
                "outline-style": [{ outline: ["", ...B()] }],
                "outline-offset": [{ "outline-offset": [an, X] }],
                "outline-w": [{ outline: [an, jn] }],
                "outline-color": [{ outline: [e] }],
                "ring-w": [{ ring: H() }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{ ring: [e] }],
                "ring-opacity": [{ "ring-opacity": [m] }],
                "ring-offset-w": [{ "ring-offset": [an, jn] }],
                "ring-offset-color": [{ "ring-offset": [e] }],
                shadow: [{ shadow: ["", "inner", "none", Rn, ow] }],
                "shadow-color": [{ shadow: [Do] }],
                opacity: [{ opacity: [m] }],
                "mix-blend": [{ "mix-blend": [...U(), "plus-lighter", "plus-darker"] }],
                "bg-blend": [{ "bg-blend": U() }],
                filter: [{ filter: ["", "none"] }],
                blur: [{ blur: [n] }],
                brightness: [{ brightness: [r] }],
                contrast: [{ contrast: [a] }],
                "drop-shadow": [{ "drop-shadow": ["", "none", Rn, X] }],
                grayscale: [{ grayscale: [u] }],
                "hue-rotate": [{ "hue-rotate": [c] }],
                invert: [{ invert: [f] }],
                saturate: [{ saturate: [y] }],
                sepia: [{ sepia: [C] }],
                "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
                "backdrop-blur": [{ "backdrop-blur": [n] }],
                "backdrop-brightness": [{ "backdrop-brightness": [r] }],
                "backdrop-contrast": [{ "backdrop-contrast": [a] }],
                "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
                "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
                "backdrop-invert": [{ "backdrop-invert": [f] }],
                "backdrop-opacity": [{ "backdrop-opacity": [m] }],
                "backdrop-saturate": [{ "backdrop-saturate": [y] }],
                "backdrop-sepia": [{ "backdrop-sepia": [C] }],
                "border-collapse": [{ border: ["collapse", "separate"] }],
                "border-spacing": [{ "border-spacing": [i] }],
                "border-spacing-x": [{ "border-spacing-x": [i] }],
                "border-spacing-y": [{ "border-spacing-y": [i] }],
                "table-layout": [{ table: ["auto", "fixed"] }],
                caption: [{ caption: ["top", "bottom"] }],
                transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", X] }],
                duration: [{ duration: V() }],
                ease: [{ ease: ["linear", "in", "out", "in-out", X] }],
                delay: [{ delay: V() }],
                animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", X] }],
                transform: [{ transform: ["", "gpu", "none"] }],
                scale: [{ scale: [S] }],
                "scale-x": [{ "scale-x": [S] }],
                "scale-y": [{ "scale-y": [S] }],
                rotate: [{ rotate: [Io, X] }],
                "translate-x": [{ "translate-x": [N] }],
                "translate-y": [{ "translate-y": [N] }],
                "skew-x": [{ "skew-x": [E] }],
                "skew-y": [{ "skew-y": [E] }],
                "transform-origin": [
                    {
                        origin: [
                            "center",
                            "top",
                            "top-right",
                            "right",
                            "bottom-right",
                            "bottom",
                            "bottom-left",
                            "left",
                            "top-left",
                            X,
                        ],
                    },
                ],
                accent: [{ accent: ["auto", e] }],
                appearance: [{ appearance: ["none", "auto"] }],
                cursor: [
                    {
                        cursor: [
                            "auto",
                            "default",
                            "pointer",
                            "wait",
                            "text",
                            "move",
                            "help",
                            "not-allowed",
                            "none",
                            "context-menu",
                            "progress",
                            "cell",
                            "crosshair",
                            "vertical-text",
                            "alias",
                            "copy",
                            "no-drop",
                            "grab",
                            "grabbing",
                            "all-scroll",
                            "col-resize",
                            "row-resize",
                            "n-resize",
                            "e-resize",
                            "s-resize",
                            "w-resize",
                            "ne-resize",
                            "nw-resize",
                            "se-resize",
                            "sw-resize",
                            "ew-resize",
                            "ns-resize",
                            "nesw-resize",
                            "nwse-resize",
                            "zoom-in",
                            "zoom-out",
                            X,
                        ],
                    },
                ],
                "caret-color": [{ caret: [e] }],
                "pointer-events": [{ "pointer-events": ["none", "auto"] }],
                resize: [{ resize: ["none", "y", "x", ""] }],
                "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
                "scroll-m": [{ "scroll-m": L() }],
                "scroll-mx": [{ "scroll-mx": L() }],
                "scroll-my": [{ "scroll-my": L() }],
                "scroll-ms": [{ "scroll-ms": L() }],
                "scroll-me": [{ "scroll-me": L() }],
                "scroll-mt": [{ "scroll-mt": L() }],
                "scroll-mr": [{ "scroll-mr": L() }],
                "scroll-mb": [{ "scroll-mb": L() }],
                "scroll-ml": [{ "scroll-ml": L() }],
                "scroll-p": [{ "scroll-p": L() }],
                "scroll-px": [{ "scroll-px": L() }],
                "scroll-py": [{ "scroll-py": L() }],
                "scroll-ps": [{ "scroll-ps": L() }],
                "scroll-pe": [{ "scroll-pe": L() }],
                "scroll-pt": [{ "scroll-pt": L() }],
                "scroll-pr": [{ "scroll-pr": L() }],
                "scroll-pb": [{ "scroll-pb": L() }],
                "scroll-pl": [{ "scroll-pl": L() }],
                "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
                "snap-stop": [{ snap: ["normal", "always"] }],
                "snap-type": [{ snap: ["none", "x", "y", "both"] }],
                "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
                touch: [{ touch: ["auto", "none", "manipulation"] }],
                "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
                "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{ select: ["none", "text", "all", "auto"] }],
                "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", X] }],
                fill: [{ fill: [e, "none"] }],
                "stroke-w": [{ stroke: [an, jn, Sa] }],
                stroke: [{ stroke: [e, "none"] }],
                sr: ["sr-only", "not-sr-only"],
                "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
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
                rounded: [
                    "rounded-s",
                    "rounded-e",
                    "rounded-t",
                    "rounded-r",
                    "rounded-b",
                    "rounded-l",
                    "rounded-ss",
                    "rounded-se",
                    "rounded-ee",
                    "rounded-es",
                    "rounded-tl",
                    "rounded-tr",
                    "rounded-br",
                    "rounded-bl",
                ],
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
                "border-color": [
                    "border-color-s",
                    "border-color-e",
                    "border-color-t",
                    "border-color-r",
                    "border-color-b",
                    "border-color-l",
                ],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                "scroll-m": [
                    "scroll-mx",
                    "scroll-my",
                    "scroll-ms",
                    "scroll-me",
                    "scroll-mt",
                    "scroll-mr",
                    "scroll-mb",
                    "scroll-ml",
                ],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": [
                    "scroll-px",
                    "scroll-py",
                    "scroll-ps",
                    "scroll-pe",
                    "scroll-pt",
                    "scroll-pr",
                    "scroll-pb",
                    "scroll-pl",
                ],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"],
            },
            conflictingClassGroupModifiers: { "font-size": ["leading"] },
        };
    },
    uw = W1(aw);
function Me(...e) {
    return uw(ug(e));
}
const cw = m1,
    yg = b.forwardRef(({ className: e, ...t }, n) =>
        d.jsx(ng, {
            ref: n,
            className: Me(
                "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
                e
            ),
            ...t,
        })
    );
yg.displayName = ng.displayName;
const dw = cg(
        "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
        {
            variants: {
                variant: {
                    default: "border bg-background text-foreground",
                    destructive: "destructive group border-destructive bg-destructive text-destructive-foreground",
                },
            },
            defaultVariants: { variant: "default" },
        }
    ),
    xg = b.forwardRef(({ className: e, variant: t, ...n }, r) =>
        d.jsx(rg, { ref: r, className: Me(dw({ variant: t }), e), ...n })
    );
xg.displayName = rg.displayName;
const fw = b.forwardRef(({ className: e, ...t }, n) =>
    d.jsx(ig, {
        ref: n,
        className: Me(
            "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
            e
        ),
        ...t,
    })
);
fw.displayName = ig.displayName;
const wg = b.forwardRef(({ className: e, ...t }, n) =>
    d.jsx(lg, {
        ref: n,
        className: Me(
            "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
            e
        ),
        "toast-close": "",
        ...t,
        children: d.jsx(fg, { className: "h-4 w-4" }),
    })
);
wg.displayName = lg.displayName;
const bg = b.forwardRef(({ className: e, ...t }, n) =>
    d.jsx(og, { ref: n, className: Me("text-sm font-semibold", e), ...t })
);
bg.displayName = og.displayName;
const Sg = b.forwardRef(({ className: e, ...t }, n) =>
    d.jsx(sg, { ref: n, className: Me("text-sm opacity-90", e), ...t })
);
Sg.displayName = sg.displayName;
function pw() {
    const { toasts: e } = Ex();
    return d.jsxs(cw, {
        children: [
            e.map(function ({ id: t, title: n, description: r, action: o, ...s }) {
                return d.jsxs(
                    xg,
                    {
                        ...s,
                        children: [
                            d.jsxs("div", {
                                className: "grid gap-1",
                                children: [n && d.jsx(bg, { children: n }), r && d.jsx(Sg, { children: r })],
                            }),
                            o,
                            d.jsx(wg, {}),
                        ],
                    },
                    t
                );
            }),
            d.jsx(yg, {}),
        ],
    });
}
var Af = ["light", "dark"],
    hw = "(prefers-color-scheme: dark)",
    mw = b.createContext(void 0),
    gw = { setTheme: (e) => {}, themes: [] },
    vw = () => {
        var e;
        return (e = b.useContext(mw)) != null ? e : gw;
    };
b.memo(
    ({
        forcedTheme: e,
        storageKey: t,
        attribute: n,
        enableSystem: r,
        enableColorScheme: o,
        defaultTheme: s,
        value: i,
        attrs: l,
        nonce: a,
    }) => {
        let u = s === "system",
            c =
                n === "class"
                    ? `var d=document.documentElement,c=d.classList;${`c.remove(${l.map((w) => `'${w}'`).join(",")})`};`
                    : `var d=document.documentElement,n='${n}',s='setAttribute';`,
            f = o
                ? Af.includes(s) && s
                    ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'`
                    : "if(e==='light'||e==='dark')d.style.colorScheme=e"
                : "",
            g = (w, v = !1, x = !0) => {
                let m = i ? i[w] : w,
                    p = v ? w + "|| ''" : `'${m}'`,
                    y = "";
                return (
                    o && x && !v && Af.includes(w) && (y += `d.style.colorScheme = '${w}';`),
                    n === "class" ? (v || m ? (y += `c.add(${p})`) : (y += "null")) : m && (y += `d[s](n,${p})`),
                    y
                );
            },
            h = e
                ? `!function(){${c}${g(e)}}()`
                : r
                  ? `!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${hw}',m=window.matchMedia(t);if(m.media!==t||m.matches){${g("dark")}}else{${g("light")}}}else if(e){${i ? `var x=${JSON.stringify(i)};` : ""}${g(i ? "x[e]" : "e", !0)}}${u ? "" : "else{" + g(s, !1, !1) + "}"}${f}}catch(e){}}()`
                  : `!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${i ? `var x=${JSON.stringify(i)};` : ""}${g(i ? "x[e]" : "e", !0)}}else{${g(s, !1, !1)};}${f}}catch(t){}}();`;
        return b.createElement("script", { nonce: a, dangerouslySetInnerHTML: { __html: h } });
    }
);
var yw = (e) => {
        switch (e) {
            case "success":
                return bw;
            case "info":
                return Cw;
            case "warning":
                return Sw;
            case "error":
                return Ew;
            default:
                return null;
        }
    },
    xw = Array(12).fill(0),
    ww = ({ visible: e, className: t }) =>
        M.createElement(
            "div",
            { className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "), "data-visible": e },
            M.createElement(
                "div",
                { className: "sonner-spinner" },
                xw.map((n, r) => M.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${r}` }))
            )
        ),
    bw = M.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" },
        M.createElement("path", {
            fillRule: "evenodd",
            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
            clipRule: "evenodd",
        })
    ),
    Sw = M.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" },
        M.createElement("path", {
            fillRule: "evenodd",
            d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
            clipRule: "evenodd",
        })
    ),
    Cw = M.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" },
        M.createElement("path", {
            fillRule: "evenodd",
            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
            clipRule: "evenodd",
        })
    ),
    Ew = M.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" },
        M.createElement("path", {
            fillRule: "evenodd",
            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
            clipRule: "evenodd",
        })
    ),
    kw = M.createElement(
        "svg",
        {
            xmlns: "http://www.w3.org/2000/svg",
            width: "12",
            height: "12",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
        },
        M.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        M.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
    ),
    Nw = () => {
        let [e, t] = M.useState(document.hidden);
        return (
            M.useEffect(() => {
                let n = () => {
                    t(document.hidden);
                };
                return (
                    document.addEventListener("visibilitychange", n),
                    () => window.removeEventListener("visibilitychange", n)
                );
            }, []),
            e
        );
    },
    Eu = 1,
    Pw = class {
        constructor() {
            (this.subscribe = (e) => (
                this.subscribers.push(e),
                () => {
                    let t = this.subscribers.indexOf(e);
                    this.subscribers.splice(t, 1);
                }
            )),
                (this.publish = (e) => {
                    this.subscribers.forEach((t) => t(e));
                }),
                (this.addToast = (e) => {
                    this.publish(e), (this.toasts = [...this.toasts, e]);
                }),
                (this.create = (e) => {
                    var t;
                    let { message: n, ...r } = e,
                        o =
                            typeof (e == null ? void 0 : e.id) == "number" ||
                            ((t = e.id) == null ? void 0 : t.length) > 0
                                ? e.id
                                : Eu++,
                        s = this.toasts.find((l) => l.id === o),
                        i = e.dismissible === void 0 ? !0 : e.dismissible;
                    return (
                        this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
                        s
                            ? (this.toasts = this.toasts.map((l) =>
                                  l.id === o
                                      ? (this.publish({ ...l, ...e, id: o, title: n }),
                                        { ...l, ...e, id: o, dismissible: i, title: n })
                                      : l
                              ))
                            : this.addToast({ title: n, ...r, dismissible: i, id: o }),
                        o
                    );
                }),
                (this.dismiss = (e) => (
                    this.dismissedToasts.add(e),
                    e ||
                        this.toasts.forEach((t) => {
                            this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
                        }),
                    this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
                    e
                )),
                (this.message = (e, t) => this.create({ ...t, message: e })),
                (this.error = (e, t) => this.create({ ...t, message: e, type: "error" })),
                (this.success = (e, t) => this.create({ ...t, type: "success", message: e })),
                (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
                (this.warning = (e, t) => this.create({ ...t, type: "warning", message: e })),
                (this.loading = (e, t) => this.create({ ...t, type: "loading", message: e })),
                (this.promise = (e, t) => {
                    if (!t) return;
                    let n;
                    t.loading !== void 0 &&
                        (n = this.create({
                            ...t,
                            promise: e,
                            type: "loading",
                            message: t.loading,
                            description: typeof t.description != "function" ? t.description : void 0,
                        }));
                    let r = e instanceof Promise ? e : e(),
                        o = n !== void 0,
                        s,
                        i = r
                            .then(async (a) => {
                                if (((s = ["resolve", a]), M.isValidElement(a)))
                                    (o = !1), this.create({ id: n, type: "default", message: a });
                                else if (jw(a) && !a.ok) {
                                    o = !1;
                                    let u =
                                            typeof t.error == "function"
                                                ? await t.error(`HTTP error! status: ${a.status}`)
                                                : t.error,
                                        c =
                                            typeof t.description == "function"
                                                ? await t.description(`HTTP error! status: ${a.status}`)
                                                : t.description;
                                    this.create({ id: n, type: "error", message: u, description: c });
                                } else if (t.success !== void 0) {
                                    o = !1;
                                    let u = typeof t.success == "function" ? await t.success(a) : t.success,
                                        c = typeof t.description == "function" ? await t.description(a) : t.description;
                                    this.create({ id: n, type: "success", message: u, description: c });
                                }
                            })
                            .catch(async (a) => {
                                if (((s = ["reject", a]), t.error !== void 0)) {
                                    o = !1;
                                    let u = typeof t.error == "function" ? await t.error(a) : t.error,
                                        c = typeof t.description == "function" ? await t.description(a) : t.description;
                                    this.create({ id: n, type: "error", message: u, description: c });
                                }
                            })
                            .finally(() => {
                                var a;
                                o && (this.dismiss(n), (n = void 0)), (a = t.finally) == null || a.call(t);
                            }),
                        l = () => new Promise((a, u) => i.then(() => (s[0] === "reject" ? u(s[1]) : a(s[1]))).catch(u));
                    return typeof n != "string" && typeof n != "number"
                        ? { unwrap: l }
                        : Object.assign(n, { unwrap: l });
                }),
                (this.custom = (e, t) => {
                    let n = (t == null ? void 0 : t.id) || Eu++;
                    return this.create({ jsx: e(n), id: n, ...t }), n;
                }),
                (this.getActiveToasts = () => this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
                (this.subscribers = []),
                (this.toasts = []),
                (this.dismissedToasts = new Set());
        }
    },
    Ze = new Pw(),
    Tw = (e, t) => {
        let n = (t == null ? void 0 : t.id) || Eu++;
        return Ze.addToast({ title: e, ...t, id: n }), n;
    },
    jw = (e) =>
        e &&
        typeof e == "object" &&
        "ok" in e &&
        typeof e.ok == "boolean" &&
        "status" in e &&
        typeof e.status == "number",
    Rw = Tw,
    Aw = () => Ze.toasts,
    Ow = () => Ze.getActiveToasts();
Object.assign(
    Rw,
    {
        success: Ze.success,
        info: Ze.info,
        warning: Ze.warning,
        error: Ze.error,
        custom: Ze.custom,
        message: Ze.message,
        promise: Ze.promise,
        dismiss: Ze.dismiss,
        loading: Ze.loading,
    },
    { getHistory: Aw, getToasts: Ow }
);
function Mw(e, { insertAt: t } = {}) {
    if (typeof document > "u") return;
    let n = document.head || document.getElementsByTagName("head")[0],
        r = document.createElement("style");
    (r.type = "text/css"),
        t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
        r.styleSheet ? (r.styleSheet.cssText = e) : r.appendChild(document.createTextNode(e));
}
Mw(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function ai(e) {
    return e.label !== void 0;
}
var _w = 3,
    Lw = "32px",
    Iw = "16px",
    Of = 4e3,
    Dw = 356,
    Fw = 14,
    zw = 20,
    $w = 200;
function Ot(...e) {
    return e.filter(Boolean).join(" ");
}
function Bw(e) {
    let [t, n] = e.split("-"),
        r = [];
    return t && r.push(t), n && r.push(n), r;
}
var Uw = (e) => {
    var t, n, r, o, s, i, l, a, u, c, f;
    let {
            invert: g,
            toast: h,
            unstyled: w,
            interacting: v,
            setHeights: x,
            visibleToasts: m,
            heights: p,
            index: y,
            toasts: S,
            expanded: C,
            removeToast: E,
            defaultRichColors: k,
            closeButton: N,
            style: R,
            cancelButtonStyle: A,
            actionButtonStyle: D,
            className: L = "",
            descriptionClassName: H = "",
            duration: O,
            position: W,
            gap: B,
            loadingIcon: U,
            expandByDefault: P,
            classNames: T,
            icons: I,
            closeButtonAriaLabel: V = "Close toast",
            pauseWhenPageIsHidden: $,
        } = e,
        [Q, G] = M.useState(null),
        [se, ve] = M.useState(null),
        [Y, ye] = M.useState(!1),
        [Re, Ce] = M.useState(!1),
        [te, z] = M.useState(!1),
        [J, ae] = M.useState(!1),
        [Ne, Ve] = M.useState(!1),
        [st, it] = M.useState(0),
        [We, Qt] = M.useState(0),
        Et = M.useRef(h.duration || O || Of),
        jr = M.useRef(null),
        kt = M.useRef(null),
        Ds = y === 0,
        Fs = y + 1 <= m,
        Xe = h.type,
        ln = h.dismissible !== !1,
        Ul = h.className || "",
        ko = h.descriptionClassName || "",
        Nt = M.useMemo(() => p.findIndex((K) => K.toastId === h.id) || 0, [p, h.id]),
        No = M.useMemo(() => {
            var K;
            return (K = h.closeButton) != null ? K : N;
        }, [h.closeButton, N]),
        Rr = M.useMemo(() => h.duration || O || Of, [h.duration, O]),
        Cn = M.useRef(0),
        En = M.useRef(0),
        zs = M.useRef(0),
        kn = M.useRef(null),
        [Vl, Wl] = W.split("-"),
        Po = M.useMemo(() => p.reduce((K, re, ie) => (ie >= Nt ? K : K + re.height), 0), [p, Nt]),
        $s = Nw(),
        Bs = h.invert || g,
        Ar = Xe === "loading";
    (En.current = M.useMemo(() => Nt * B + Po, [Nt, Po])),
        M.useEffect(() => {
            Et.current = Rr;
        }, [Rr]),
        M.useEffect(() => {
            ye(!0);
        }, []),
        M.useEffect(() => {
            let K = kt.current;
            if (K) {
                let re = K.getBoundingClientRect().height;
                return (
                    Qt(re),
                    x((ie) => [{ toastId: h.id, height: re, position: h.position }, ...ie]),
                    () => x((ie) => ie.filter((Tt) => Tt.toastId !== h.id))
                );
            }
        }, [x, h.id]),
        M.useLayoutEffect(() => {
            if (!Y) return;
            let K = kt.current,
                re = K.style.height;
            K.style.height = "auto";
            let ie = K.getBoundingClientRect().height;
            (K.style.height = re),
                Qt(ie),
                x((Tt) =>
                    Tt.find((jt) => jt.toastId === h.id)
                        ? Tt.map((jt) => (jt.toastId === h.id ? { ...jt, height: ie } : jt))
                        : [{ toastId: h.id, height: ie, position: h.position }, ...Tt]
                );
        }, [Y, h.title, h.description, x, h.id]);
    let Pt = M.useCallback(() => {
        Ce(!0),
            it(En.current),
            x((K) => K.filter((re) => re.toastId !== h.id)),
            setTimeout(() => {
                E(h);
            }, $w);
    }, [h, E, x, En]);
    M.useEffect(() => {
        if ((h.promise && Xe === "loading") || h.duration === 1 / 0 || h.type === "loading") return;
        let K;
        return (
            C || v || ($ && $s)
                ? (() => {
                      if (zs.current < Cn.current) {
                          let re = new Date().getTime() - Cn.current;
                          Et.current = Et.current - re;
                      }
                      zs.current = new Date().getTime();
                  })()
                : Et.current !== 1 / 0 &&
                  ((Cn.current = new Date().getTime()),
                  (K = setTimeout(() => {
                      var re;
                      (re = h.onAutoClose) == null || re.call(h, h), Pt();
                  }, Et.current))),
            () => clearTimeout(K)
        );
    }, [C, v, h, Xe, $, $s, Pt]),
        M.useEffect(() => {
            h.delete && Pt();
        }, [Pt, h.delete]);
    function Hl() {
        var K, re, ie;
        return I != null && I.loading
            ? M.createElement(
                  "div",
                  {
                      className: Ot(
                          T == null ? void 0 : T.loader,
                          (K = h == null ? void 0 : h.classNames) == null ? void 0 : K.loader,
                          "sonner-loader"
                      ),
                      "data-visible": Xe === "loading",
                  },
                  I.loading
              )
            : U
              ? M.createElement(
                    "div",
                    {
                        className: Ot(
                            T == null ? void 0 : T.loader,
                            (re = h == null ? void 0 : h.classNames) == null ? void 0 : re.loader,
                            "sonner-loader"
                        ),
                        "data-visible": Xe === "loading",
                    },
                    U
                )
              : M.createElement(ww, {
                    className: Ot(
                        T == null ? void 0 : T.loader,
                        (ie = h == null ? void 0 : h.classNames) == null ? void 0 : ie.loader
                    ),
                    visible: Xe === "loading",
                });
    }
    return M.createElement(
        "li",
        {
            tabIndex: 0,
            ref: kt,
            className: Ot(
                L,
                Ul,
                T == null ? void 0 : T.toast,
                (t = h == null ? void 0 : h.classNames) == null ? void 0 : t.toast,
                T == null ? void 0 : T.default,
                T == null ? void 0 : T[Xe],
                (n = h == null ? void 0 : h.classNames) == null ? void 0 : n[Xe]
            ),
            "data-sonner-toast": "",
            "data-rich-colors": (r = h.richColors) != null ? r : k,
            "data-styled": !(h.jsx || h.unstyled || w),
            "data-mounted": Y,
            "data-promise": !!h.promise,
            "data-swiped": Ne,
            "data-removed": Re,
            "data-visible": Fs,
            "data-y-position": Vl,
            "data-x-position": Wl,
            "data-index": y,
            "data-front": Ds,
            "data-swiping": te,
            "data-dismissible": ln,
            "data-type": Xe,
            "data-invert": Bs,
            "data-swipe-out": J,
            "data-swipe-direction": se,
            "data-expanded": !!(C || (P && Y)),
            style: {
                "--index": y,
                "--toasts-before": y,
                "--z-index": S.length - y,
                "--offset": `${Re ? st : En.current}px`,
                "--initial-height": P ? "auto" : `${We}px`,
                ...R,
                ...h.style,
            },
            onDragEnd: () => {
                z(!1), G(null), (kn.current = null);
            },
            onPointerDown: (K) => {
                Ar ||
                    !ln ||
                    ((jr.current = new Date()),
                    it(En.current),
                    K.target.setPointerCapture(K.pointerId),
                    K.target.tagName !== "BUTTON" && (z(!0), (kn.current = { x: K.clientX, y: K.clientY })));
            },
            onPointerUp: () => {
                var K, re, ie, Tt;
                if (J || !ln) return;
                kn.current = null;
                let jt = Number(
                        ((K = kt.current) == null
                            ? void 0
                            : K.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0
                    ),
                    Nn = Number(
                        ((re = kt.current) == null
                            ? void 0
                            : re.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0
                    ),
                    ir = new Date().getTime() - ((ie = jr.current) == null ? void 0 : ie.getTime()),
                    Rt = Q === "x" ? jt : Nn,
                    Pn = Math.abs(Rt) / ir;
                if (Math.abs(Rt) >= zw || Pn > 0.11) {
                    it(En.current),
                        (Tt = h.onDismiss) == null || Tt.call(h, h),
                        ve(Q === "x" ? (jt > 0 ? "right" : "left") : Nn > 0 ? "down" : "up"),
                        Pt(),
                        ae(!0),
                        Ve(!1);
                    return;
                }
                z(!1), G(null);
            },
            onPointerMove: (K) => {
                var re, ie, Tt, jt;
                if (!kn.current || !ln || ((re = window.getSelection()) == null ? void 0 : re.toString().length) > 0)
                    return;
                let Nn = K.clientY - kn.current.y,
                    ir = K.clientX - kn.current.x,
                    Rt = (ie = e.swipeDirections) != null ? ie : Bw(W);
                !Q && (Math.abs(ir) > 1 || Math.abs(Nn) > 1) && G(Math.abs(ir) > Math.abs(Nn) ? "x" : "y");
                let Pn = { x: 0, y: 0 };
                Q === "y"
                    ? (Rt.includes("top") || Rt.includes("bottom")) &&
                      ((Rt.includes("top") && Nn < 0) || (Rt.includes("bottom") && Nn > 0)) &&
                      (Pn.y = Nn)
                    : Q === "x" &&
                      (Rt.includes("left") || Rt.includes("right")) &&
                      ((Rt.includes("left") && ir < 0) || (Rt.includes("right") && ir > 0)) &&
                      (Pn.x = ir),
                    (Math.abs(Pn.x) > 0 || Math.abs(Pn.y) > 0) && Ve(!0),
                    (Tt = kt.current) == null || Tt.style.setProperty("--swipe-amount-x", `${Pn.x}px`),
                    (jt = kt.current) == null || jt.style.setProperty("--swipe-amount-y", `${Pn.y}px`);
            },
        },
        No && !h.jsx
            ? M.createElement(
                  "button",
                  {
                      "aria-label": V,
                      "data-disabled": Ar,
                      "data-close-button": !0,
                      onClick:
                          Ar || !ln
                              ? () => {}
                              : () => {
                                    var K;
                                    Pt(), (K = h.onDismiss) == null || K.call(h, h);
                                },
                      className: Ot(
                          T == null ? void 0 : T.closeButton,
                          (o = h == null ? void 0 : h.classNames) == null ? void 0 : o.closeButton
                      ),
                  },
                  (s = I == null ? void 0 : I.close) != null ? s : kw
              )
            : null,
        h.jsx || b.isValidElement(h.title)
            ? h.jsx
                ? h.jsx
                : typeof h.title == "function"
                  ? h.title()
                  : h.title
            : M.createElement(
                  M.Fragment,
                  null,
                  Xe || h.icon || h.promise
                      ? M.createElement(
                            "div",
                            {
                                "data-icon": "",
                                className: Ot(
                                    T == null ? void 0 : T.icon,
                                    (i = h == null ? void 0 : h.classNames) == null ? void 0 : i.icon
                                ),
                            },
                            h.promise || (h.type === "loading" && !h.icon) ? h.icon || Hl() : null,
                            h.type !== "loading" ? h.icon || (I == null ? void 0 : I[Xe]) || yw(Xe) : null
                        )
                      : null,
                  M.createElement(
                      "div",
                      {
                          "data-content": "",
                          className: Ot(
                              T == null ? void 0 : T.content,
                              (l = h == null ? void 0 : h.classNames) == null ? void 0 : l.content
                          ),
                      },
                      M.createElement(
                          "div",
                          {
                              "data-title": "",
                              className: Ot(
                                  T == null ? void 0 : T.title,
                                  (a = h == null ? void 0 : h.classNames) == null ? void 0 : a.title
                              ),
                          },
                          typeof h.title == "function" ? h.title() : h.title
                      ),
                      h.description
                          ? M.createElement(
                                "div",
                                {
                                    "data-description": "",
                                    className: Ot(
                                        H,
                                        ko,
                                        T == null ? void 0 : T.description,
                                        (u = h == null ? void 0 : h.classNames) == null ? void 0 : u.description
                                    ),
                                },
                                typeof h.description == "function" ? h.description() : h.description
                            )
                          : null
                  ),
                  b.isValidElement(h.cancel)
                      ? h.cancel
                      : h.cancel && ai(h.cancel)
                        ? M.createElement(
                              "button",
                              {
                                  "data-button": !0,
                                  "data-cancel": !0,
                                  style: h.cancelButtonStyle || A,
                                  onClick: (K) => {
                                      var re, ie;
                                      ai(h.cancel) &&
                                          ln &&
                                          ((ie = (re = h.cancel).onClick) == null || ie.call(re, K), Pt());
                                  },
                                  className: Ot(
                                      T == null ? void 0 : T.cancelButton,
                                      (c = h == null ? void 0 : h.classNames) == null ? void 0 : c.cancelButton
                                  ),
                              },
                              h.cancel.label
                          )
                        : null,
                  b.isValidElement(h.action)
                      ? h.action
                      : h.action && ai(h.action)
                        ? M.createElement(
                              "button",
                              {
                                  "data-button": !0,
                                  "data-action": !0,
                                  style: h.actionButtonStyle || D,
                                  onClick: (K) => {
                                      var re, ie;
                                      ai(h.action) &&
                                          ((ie = (re = h.action).onClick) == null || ie.call(re, K),
                                          !K.defaultPrevented && Pt());
                                  },
                                  className: Ot(
                                      T == null ? void 0 : T.actionButton,
                                      (f = h == null ? void 0 : h.classNames) == null ? void 0 : f.actionButton
                                  ),
                              },
                              h.action.label
                          )
                        : null
              )
    );
};
function Mf() {
    if (typeof window > "u" || typeof document > "u") return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
function Vw(e, t) {
    let n = {};
    return (
        [e, t].forEach((r, o) => {
            let s = o === 1,
                i = s ? "--mobile-offset" : "--offset",
                l = s ? Iw : Lw;
            function a(u) {
                ["top", "right", "bottom", "left"].forEach((c) => {
                    n[`${i}-${c}`] = typeof u == "number" ? `${u}px` : u;
                });
            }
            typeof r == "number" || typeof r == "string"
                ? a(r)
                : typeof r == "object"
                  ? ["top", "right", "bottom", "left"].forEach((u) => {
                        r[u] === void 0
                            ? (n[`${i}-${u}`] = l)
                            : (n[`${i}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]);
                    })
                  : a(l);
        }),
        n
    );
}
var Ww = b.forwardRef(function (e, t) {
    let {
            invert: n,
            position: r = "bottom-right",
            hotkey: o = ["altKey", "KeyT"],
            expand: s,
            closeButton: i,
            className: l,
            offset: a,
            mobileOffset: u,
            theme: c = "light",
            richColors: f,
            duration: g,
            style: h,
            visibleToasts: w = _w,
            toastOptions: v,
            dir: x = Mf(),
            gap: m = Fw,
            loadingIcon: p,
            icons: y,
            containerAriaLabel: S = "Notifications",
            pauseWhenPageIsHidden: C,
        } = e,
        [E, k] = M.useState([]),
        N = M.useMemo(
            () => Array.from(new Set([r].concat(E.filter(($) => $.position).map(($) => $.position)))),
            [E, r]
        ),
        [R, A] = M.useState([]),
        [D, L] = M.useState(!1),
        [H, O] = M.useState(!1),
        [W, B] = M.useState(
            c !== "system"
                ? c
                : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
                  ? "dark"
                  : "light"
        ),
        U = M.useRef(null),
        P = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
        T = M.useRef(null),
        I = M.useRef(!1),
        V = M.useCallback(($) => {
            k((Q) => {
                var G;
                return (
                    ((G = Q.find((se) => se.id === $.id)) != null && G.delete) || Ze.dismiss($.id),
                    Q.filter(({ id: se }) => se !== $.id)
                );
            });
        }, []);
    return (
        M.useEffect(
            () =>
                Ze.subscribe(($) => {
                    if ($.dismiss) {
                        k((Q) => Q.map((G) => (G.id === $.id ? { ...G, delete: !0 } : G)));
                        return;
                    }
                    setTimeout(() => {
                        Mm.flushSync(() => {
                            k((Q) => {
                                let G = Q.findIndex((se) => se.id === $.id);
                                return G !== -1 ? [...Q.slice(0, G), { ...Q[G], ...$ }, ...Q.slice(G + 1)] : [$, ...Q];
                            });
                        });
                    });
                }),
            []
        ),
        M.useEffect(() => {
            if (c !== "system") {
                B(c);
                return;
            }
            if (
                (c === "system" &&
                    (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
                        ? B("dark")
                        : B("light")),
                typeof window > "u")
            )
                return;
            let $ = window.matchMedia("(prefers-color-scheme: dark)");
            try {
                $.addEventListener("change", ({ matches: Q }) => {
                    B(Q ? "dark" : "light");
                });
            } catch {
                $.addListener(({ matches: G }) => {
                    try {
                        B(G ? "dark" : "light");
                    } catch (se) {
                        console.error(se);
                    }
                });
            }
        }, [c]),
        M.useEffect(() => {
            E.length <= 1 && L(!1);
        }, [E]),
        M.useEffect(() => {
            let $ = (Q) => {
                var G, se;
                o.every((ve) => Q[ve] || Q.code === ve) && (L(!0), (G = U.current) == null || G.focus()),
                    Q.code === "Escape" &&
                        (document.activeElement === U.current ||
                            ((se = U.current) != null && se.contains(document.activeElement))) &&
                        L(!1);
            };
            return document.addEventListener("keydown", $), () => document.removeEventListener("keydown", $);
        }, [o]),
        M.useEffect(() => {
            if (U.current)
                return () => {
                    T.current && (T.current.focus({ preventScroll: !0 }), (T.current = null), (I.current = !1));
                };
        }, [U.current]),
        M.createElement(
            "section",
            {
                ref: t,
                "aria-label": `${S} ${P}`,
                tabIndex: -1,
                "aria-live": "polite",
                "aria-relevant": "additions text",
                "aria-atomic": "false",
                suppressHydrationWarning: !0,
            },
            N.map(($, Q) => {
                var G;
                let [se, ve] = $.split("-");
                return E.length
                    ? M.createElement(
                          "ol",
                          {
                              key: $,
                              dir: x === "auto" ? Mf() : x,
                              tabIndex: -1,
                              ref: U,
                              className: l,
                              "data-sonner-toaster": !0,
                              "data-theme": W,
                              "data-y-position": se,
                              "data-lifted": D && E.length > 1 && !s,
                              "data-x-position": ve,
                              style: {
                                  "--front-toast-height": `${((G = R[0]) == null ? void 0 : G.height) || 0}px`,
                                  "--width": `${Dw}px`,
                                  "--gap": `${m}px`,
                                  ...h,
                                  ...Vw(a, u),
                              },
                              onBlur: (Y) => {
                                  I.current &&
                                      !Y.currentTarget.contains(Y.relatedTarget) &&
                                      ((I.current = !1),
                                      T.current && (T.current.focus({ preventScroll: !0 }), (T.current = null)));
                              },
                              onFocus: (Y) => {
                                  (Y.target instanceof HTMLElement && Y.target.dataset.dismissible === "false") ||
                                      I.current ||
                                      ((I.current = !0), (T.current = Y.relatedTarget));
                              },
                              onMouseEnter: () => L(!0),
                              onMouseMove: () => L(!0),
                              onMouseLeave: () => {
                                  H || L(!1);
                              },
                              onDragEnd: () => L(!1),
                              onPointerDown: (Y) => {
                                  (Y.target instanceof HTMLElement && Y.target.dataset.dismissible === "false") ||
                                      O(!0);
                              },
                              onPointerUp: () => O(!1),
                          },
                          E.filter((Y) => (!Y.position && Q === 0) || Y.position === $).map((Y, ye) => {
                              var Re, Ce;
                              return M.createElement(Uw, {
                                  key: Y.id,
                                  icons: y,
                                  index: ye,
                                  toast: Y,
                                  defaultRichColors: f,
                                  duration: (Re = v == null ? void 0 : v.duration) != null ? Re : g,
                                  className: v == null ? void 0 : v.className,
                                  descriptionClassName: v == null ? void 0 : v.descriptionClassName,
                                  invert: n,
                                  visibleToasts: w,
                                  closeButton: (Ce = v == null ? void 0 : v.closeButton) != null ? Ce : i,
                                  interacting: H,
                                  position: $,
                                  style: v == null ? void 0 : v.style,
                                  unstyled: v == null ? void 0 : v.unstyled,
                                  classNames: v == null ? void 0 : v.classNames,
                                  cancelButtonStyle: v == null ? void 0 : v.cancelButtonStyle,
                                  actionButtonStyle: v == null ? void 0 : v.actionButtonStyle,
                                  removeToast: V,
                                  toasts: E.filter((te) => te.position == Y.position),
                                  heights: R.filter((te) => te.position == Y.position),
                                  setHeights: A,
                                  expandByDefault: s,
                                  gap: m,
                                  loadingIcon: p,
                                  expanded: D,
                                  pauseWhenPageIsHidden: C,
                                  swipeDirections: e.swipeDirections,
                              });
                          })
                      )
                    : null;
            })
        )
    );
});
const Hw = ({ ...e }) => {
    const { theme: t = "system" } = vw();
    return d.jsx(Ww, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
            },
        },
        ...e,
    });
};
var Qw = Uu[" useId ".trim().toString()] || (() => {}),
    Gw = 0;
function Cg(e) {
    const [t, n] = b.useState(Qw());
    return (
        rn(() => {
            n((r) => r ?? String(Gw++));
        }, [e]),
        t ? `radix-${t}` : ""
    );
}
const Kw = ["top", "right", "bottom", "left"],
    tr = Math.min,
    at = Math.max,
    Xi = Math.round,
    ui = Math.floor,
    nn = (e) => ({ x: e, y: e }),
    Yw = { left: "right", right: "left", bottom: "top", top: "bottom" },
    qw = { start: "end", end: "start" };
function ku(e, t, n) {
    return at(e, tr(t, n));
}
function wn(e, t) {
    return typeof e == "function" ? e(t) : e;
}
function bn(e) {
    return e.split("-")[0];
}
function Co(e) {
    return e.split("-")[1];
}
function Bc(e) {
    return e === "x" ? "y" : "x";
}
function Uc(e) {
    return e === "y" ? "height" : "width";
}
const Xw = new Set(["top", "bottom"]);
function Jt(e) {
    return Xw.has(bn(e)) ? "y" : "x";
}
function Vc(e) {
    return Bc(Jt(e));
}
function Zw(e, t, n) {
    n === void 0 && (n = !1);
    const r = Co(e),
        o = Vc(e),
        s = Uc(o);
    let i = o === "x" ? (r === (n ? "end" : "start") ? "right" : "left") : r === "start" ? "bottom" : "top";
    return t.reference[s] > t.floating[s] && (i = Zi(i)), [i, Zi(i)];
}
function Jw(e) {
    const t = Zi(e);
    return [Nu(e), t, Nu(t)];
}
function Nu(e) {
    return e.replace(/start|end/g, (t) => qw[t]);
}
const _f = ["left", "right"],
    Lf = ["right", "left"],
    eb = ["top", "bottom"],
    tb = ["bottom", "top"];
function nb(e, t, n) {
    switch (e) {
        case "top":
        case "bottom":
            return n ? (t ? Lf : _f) : t ? _f : Lf;
        case "left":
        case "right":
            return t ? eb : tb;
        default:
            return [];
    }
}
function rb(e, t, n, r) {
    const o = Co(e);
    let s = nb(bn(e), n === "start", r);
    return o && ((s = s.map((i) => i + "-" + o)), t && (s = s.concat(s.map(Nu)))), s;
}
function Zi(e) {
    return e.replace(/left|right|bottom|top/g, (t) => Yw[t]);
}
function ob(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Eg(e) {
    return typeof e != "number" ? ob(e) : { top: e, right: e, bottom: e, left: e };
}
function Ji(e) {
    const { x: t, y: n, width: r, height: o } = e;
    return { width: r, height: o, top: n, left: t, right: t + r, bottom: n + o, x: t, y: n };
}
function If(e, t, n) {
    let { reference: r, floating: o } = e;
    const s = Jt(t),
        i = Vc(t),
        l = Uc(i),
        a = bn(t),
        u = s === "y",
        c = r.x + r.width / 2 - o.width / 2,
        f = r.y + r.height / 2 - o.height / 2,
        g = r[l] / 2 - o[l] / 2;
    let h;
    switch (a) {
        case "top":
            h = { x: c, y: r.y - o.height };
            break;
        case "bottom":
            h = { x: c, y: r.y + r.height };
            break;
        case "right":
            h = { x: r.x + r.width, y: f };
            break;
        case "left":
            h = { x: r.x - o.width, y: f };
            break;
        default:
            h = { x: r.x, y: r.y };
    }
    switch (Co(t)) {
        case "start":
            h[i] -= g * (n && u ? -1 : 1);
            break;
        case "end":
            h[i] += g * (n && u ? -1 : 1);
            break;
    }
    return h;
}
const sb = async (e, t, n) => {
    const { placement: r = "bottom", strategy: o = "absolute", middleware: s = [], platform: i } = n,
        l = s.filter(Boolean),
        a = await (i.isRTL == null ? void 0 : i.isRTL(t));
    let u = await i.getElementRects({ reference: e, floating: t, strategy: o }),
        { x: c, y: f } = If(u, r, a),
        g = r,
        h = {},
        w = 0;
    for (let v = 0; v < l.length; v++) {
        const { name: x, fn: m } = l[v],
            {
                x: p,
                y,
                data: S,
                reset: C,
            } = await m({
                x: c,
                y: f,
                initialPlacement: r,
                placement: g,
                strategy: o,
                middlewareData: h,
                rects: u,
                platform: i,
                elements: { reference: e, floating: t },
            });
        (c = p ?? c),
            (f = y ?? f),
            (h = { ...h, [x]: { ...h[x], ...S } }),
            C &&
                w <= 50 &&
                (w++,
                typeof C == "object" &&
                    (C.placement && (g = C.placement),
                    C.rects &&
                        (u =
                            C.rects === !0
                                ? await i.getElementRects({ reference: e, floating: t, strategy: o })
                                : C.rects),
                    ({ x: c, y: f } = If(u, g, a))),
                (v = -1));
    }
    return { x: c, y: f, placement: g, strategy: o, middlewareData: h };
};
async function xs(e, t) {
    var n;
    t === void 0 && (t = {});
    const { x: r, y: o, platform: s, rects: i, elements: l, strategy: a } = e,
        {
            boundary: u = "clippingAncestors",
            rootBoundary: c = "viewport",
            elementContext: f = "floating",
            altBoundary: g = !1,
            padding: h = 0,
        } = wn(t, e),
        w = Eg(h),
        x = l[g ? (f === "floating" ? "reference" : "floating") : f],
        m = Ji(
            await s.getClippingRect({
                element:
                    (n = await (s.isElement == null ? void 0 : s.isElement(x))) == null || n
                        ? x
                        : x.contextElement ||
                          (await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(l.floating))),
                boundary: u,
                rootBoundary: c,
                strategy: a,
            })
        ),
        p = f === "floating" ? { x: r, y: o, width: i.floating.width, height: i.floating.height } : i.reference,
        y = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l.floating)),
        S = (await (s.isElement == null ? void 0 : s.isElement(y)))
            ? (await (s.getScale == null ? void 0 : s.getScale(y))) || { x: 1, y: 1 }
            : { x: 1, y: 1 },
        C = Ji(
            s.convertOffsetParentRelativeRectToViewportRelativeRect
                ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
                      elements: l,
                      rect: p,
                      offsetParent: y,
                      strategy: a,
                  })
                : p
        );
    return {
        top: (m.top - C.top + w.top) / S.y,
        bottom: (C.bottom - m.bottom + w.bottom) / S.y,
        left: (m.left - C.left + w.left) / S.x,
        right: (C.right - m.right + w.right) / S.x,
    };
}
const ib = (e) => ({
        name: "arrow",
        options: e,
        async fn(t) {
            const { x: n, y: r, placement: o, rects: s, platform: i, elements: l, middlewareData: a } = t,
                { element: u, padding: c = 0 } = wn(e, t) || {};
            if (u == null) return {};
            const f = Eg(c),
                g = { x: n, y: r },
                h = Vc(o),
                w = Uc(h),
                v = await i.getDimensions(u),
                x = h === "y",
                m = x ? "top" : "left",
                p = x ? "bottom" : "right",
                y = x ? "clientHeight" : "clientWidth",
                S = s.reference[w] + s.reference[h] - g[h] - s.floating[w],
                C = g[h] - s.reference[h],
                E = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
            let k = E ? E[y] : 0;
            (!k || !(await (i.isElement == null ? void 0 : i.isElement(E)))) && (k = l.floating[y] || s.floating[w]);
            const N = S / 2 - C / 2,
                R = k / 2 - v[w] / 2 - 1,
                A = tr(f[m], R),
                D = tr(f[p], R),
                L = A,
                H = k - v[w] - D,
                O = k / 2 - v[w] / 2 + N,
                W = ku(L, O, H),
                B = !a.arrow && Co(o) != null && O !== W && s.reference[w] / 2 - (O < L ? A : D) - v[w] / 2 < 0,
                U = B ? (O < L ? O - L : O - H) : 0;
            return {
                [h]: g[h] + U,
                data: { [h]: W, centerOffset: O - W - U, ...(B && { alignmentOffset: U }) },
                reset: B,
            };
        },
    }),
    lb = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: "flip",
                options: e,
                async fn(t) {
                    var n, r;
                    const {
                            placement: o,
                            middlewareData: s,
                            rects: i,
                            initialPlacement: l,
                            platform: a,
                            elements: u,
                        } = t,
                        {
                            mainAxis: c = !0,
                            crossAxis: f = !0,
                            fallbackPlacements: g,
                            fallbackStrategy: h = "bestFit",
                            fallbackAxisSideDirection: w = "none",
                            flipAlignment: v = !0,
                            ...x
                        } = wn(e, t);
                    if ((n = s.arrow) != null && n.alignmentOffset) return {};
                    const m = bn(o),
                        p = Jt(l),
                        y = bn(l) === l,
                        S = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)),
                        C = g || (y || !v ? [Zi(l)] : Jw(l)),
                        E = w !== "none";
                    !g && E && C.push(...rb(l, v, w, S));
                    const k = [l, ...C],
                        N = await xs(t, x),
                        R = [];
                    let A = ((r = s.flip) == null ? void 0 : r.overflows) || [];
                    if ((c && R.push(N[m]), f)) {
                        const O = Zw(o, i, S);
                        R.push(N[O[0]], N[O[1]]);
                    }
                    if (((A = [...A, { placement: o, overflows: R }]), !R.every((O) => O <= 0))) {
                        var D, L;
                        const O = (((D = s.flip) == null ? void 0 : D.index) || 0) + 1,
                            W = k[O];
                        if (
                            W &&
                            (!(f === "alignment" ? p !== Jt(W) : !1) ||
                                A.every((P) => P.overflows[0] > 0 && Jt(P.placement) === p))
                        )
                            return { data: { index: O, overflows: A }, reset: { placement: W } };
                        let B =
                            (L = A.filter((U) => U.overflows[0] <= 0).sort(
                                (U, P) => U.overflows[1] - P.overflows[1]
                            )[0]) == null
                                ? void 0
                                : L.placement;
                        if (!B)
                            switch (h) {
                                case "bestFit": {
                                    var H;
                                    const U =
                                        (H = A.filter((P) => {
                                            if (E) {
                                                const T = Jt(P.placement);
                                                return T === p || T === "y";
                                            }
                                            return !0;
                                        })
                                            .map((P) => [
                                                P.placement,
                                                P.overflows.filter((T) => T > 0).reduce((T, I) => T + I, 0),
                                            ])
                                            .sort((P, T) => P[1] - T[1])[0]) == null
                                            ? void 0
                                            : H[0];
                                    U && (B = U);
                                    break;
                                }
                                case "initialPlacement":
                                    B = l;
                                    break;
                            }
                        if (o !== B) return { reset: { placement: B } };
                    }
                    return {};
                },
            }
        );
    };
function Df(e, t) {
    return { top: e.top - t.height, right: e.right - t.width, bottom: e.bottom - t.height, left: e.left - t.width };
}
function Ff(e) {
    return Kw.some((t) => e[t] >= 0);
}
const ab = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: "hide",
                options: e,
                async fn(t) {
                    const { rects: n } = t,
                        { strategy: r = "referenceHidden", ...o } = wn(e, t);
                    switch (r) {
                        case "referenceHidden": {
                            const s = await xs(t, { ...o, elementContext: "reference" }),
                                i = Df(s, n.reference);
                            return { data: { referenceHiddenOffsets: i, referenceHidden: Ff(i) } };
                        }
                        case "escaped": {
                            const s = await xs(t, { ...o, altBoundary: !0 }),
                                i = Df(s, n.floating);
                            return { data: { escapedOffsets: i, escaped: Ff(i) } };
                        }
                        default:
                            return {};
                    }
                },
            }
        );
    },
    kg = new Set(["left", "top"]);
async function ub(e, t) {
    const { placement: n, platform: r, elements: o } = e,
        s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
        i = bn(n),
        l = Co(n),
        a = Jt(n) === "y",
        u = kg.has(i) ? -1 : 1,
        c = s && a ? -1 : 1,
        f = wn(t, e);
    let {
        mainAxis: g,
        crossAxis: h,
        alignmentAxis: w,
    } = typeof f == "number"
        ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
        : { mainAxis: f.mainAxis || 0, crossAxis: f.crossAxis || 0, alignmentAxis: f.alignmentAxis };
    return (
        l && typeof w == "number" && (h = l === "end" ? w * -1 : w), a ? { x: h * c, y: g * u } : { x: g * u, y: h * c }
    );
}
const cb = function (e) {
        return (
            e === void 0 && (e = 0),
            {
                name: "offset",
                options: e,
                async fn(t) {
                    var n, r;
                    const { x: o, y: s, placement: i, middlewareData: l } = t,
                        a = await ub(t, e);
                    return i === ((n = l.offset) == null ? void 0 : n.placement) &&
                        (r = l.arrow) != null &&
                        r.alignmentOffset
                        ? {}
                        : { x: o + a.x, y: s + a.y, data: { ...a, placement: i } };
                },
            }
        );
    },
    db = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: "shift",
                options: e,
                async fn(t) {
                    const { x: n, y: r, placement: o } = t,
                        {
                            mainAxis: s = !0,
                            crossAxis: i = !1,
                            limiter: l = {
                                fn: (x) => {
                                    let { x: m, y: p } = x;
                                    return { x: m, y: p };
                                },
                            },
                            ...a
                        } = wn(e, t),
                        u = { x: n, y: r },
                        c = await xs(t, a),
                        f = Jt(bn(o)),
                        g = Bc(f);
                    let h = u[g],
                        w = u[f];
                    if (s) {
                        const x = g === "y" ? "top" : "left",
                            m = g === "y" ? "bottom" : "right",
                            p = h + c[x],
                            y = h - c[m];
                        h = ku(p, h, y);
                    }
                    if (i) {
                        const x = f === "y" ? "top" : "left",
                            m = f === "y" ? "bottom" : "right",
                            p = w + c[x],
                            y = w - c[m];
                        w = ku(p, w, y);
                    }
                    const v = l.fn({ ...t, [g]: h, [f]: w });
                    return { ...v, data: { x: v.x - n, y: v.y - r, enabled: { [g]: s, [f]: i } } };
                },
            }
        );
    },
    fb = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                options: e,
                fn(t) {
                    const { x: n, y: r, placement: o, rects: s, middlewareData: i } = t,
                        { offset: l = 0, mainAxis: a = !0, crossAxis: u = !0 } = wn(e, t),
                        c = { x: n, y: r },
                        f = Jt(o),
                        g = Bc(f);
                    let h = c[g],
                        w = c[f];
                    const v = wn(l, t),
                        x = typeof v == "number" ? { mainAxis: v, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...v };
                    if (a) {
                        const y = g === "y" ? "height" : "width",
                            S = s.reference[g] - s.floating[y] + x.mainAxis,
                            C = s.reference[g] + s.reference[y] - x.mainAxis;
                        h < S ? (h = S) : h > C && (h = C);
                    }
                    if (u) {
                        var m, p;
                        const y = g === "y" ? "width" : "height",
                            S = kg.has(bn(o)),
                            C =
                                s.reference[f] -
                                s.floating[y] +
                                ((S && ((m = i.offset) == null ? void 0 : m[f])) || 0) +
                                (S ? 0 : x.crossAxis),
                            E =
                                s.reference[f] +
                                s.reference[y] +
                                (S ? 0 : ((p = i.offset) == null ? void 0 : p[f]) || 0) -
                                (S ? x.crossAxis : 0);
                        w < C ? (w = C) : w > E && (w = E);
                    }
                    return { [g]: h, [f]: w };
                },
            }
        );
    },
    pb = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: "size",
                options: e,
                async fn(t) {
                    var n, r;
                    const { placement: o, rects: s, platform: i, elements: l } = t,
                        { apply: a = () => {}, ...u } = wn(e, t),
                        c = await xs(t, u),
                        f = bn(o),
                        g = Co(o),
                        h = Jt(o) === "y",
                        { width: w, height: v } = s.floating;
                    let x, m;
                    f === "top" || f === "bottom"
                        ? ((x = f),
                          (m =
                              g === ((await (i.isRTL == null ? void 0 : i.isRTL(l.floating))) ? "start" : "end")
                                  ? "left"
                                  : "right"))
                        : ((m = f), (x = g === "end" ? "top" : "bottom"));
                    const p = v - c.top - c.bottom,
                        y = w - c.left - c.right,
                        S = tr(v - c[x], p),
                        C = tr(w - c[m], y),
                        E = !t.middlewareData.shift;
                    let k = S,
                        N = C;
                    if (
                        ((n = t.middlewareData.shift) != null && n.enabled.x && (N = y),
                        (r = t.middlewareData.shift) != null && r.enabled.y && (k = p),
                        E && !g)
                    ) {
                        const A = at(c.left, 0),
                            D = at(c.right, 0),
                            L = at(c.top, 0),
                            H = at(c.bottom, 0);
                        h
                            ? (N = w - 2 * (A !== 0 || D !== 0 ? A + D : at(c.left, c.right)))
                            : (k = v - 2 * (L !== 0 || H !== 0 ? L + H : at(c.top, c.bottom)));
                    }
                    await a({ ...t, availableWidth: N, availableHeight: k });
                    const R = await i.getDimensions(l.floating);
                    return w !== R.width || v !== R.height ? { reset: { rects: !0 } } : {};
                },
            }
        );
    };
function Nl() {
    return typeof window < "u";
}
function Eo(e) {
    return Ng(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function dt(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function sn(e) {
    var t;
    return (t = (Ng(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ng(e) {
    return Nl() ? e instanceof Node || e instanceof dt(e).Node : !1;
}
function Vt(e) {
    return Nl() ? e instanceof Element || e instanceof dt(e).Element : !1;
}
function on(e) {
    return Nl() ? e instanceof HTMLElement || e instanceof dt(e).HTMLElement : !1;
}
function zf(e) {
    return !Nl() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof dt(e).ShadowRoot;
}
const hb = new Set(["inline", "contents"]);
function Ls(e) {
    const { overflow: t, overflowX: n, overflowY: r, display: o } = Wt(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !hb.has(o);
}
const mb = new Set(["table", "td", "th"]);
function gb(e) {
    return mb.has(Eo(e));
}
const vb = [":popover-open", ":modal"];
function Pl(e) {
    return vb.some((t) => {
        try {
            return e.matches(t);
        } catch {
            return !1;
        }
    });
}
const yb = ["transform", "translate", "scale", "rotate", "perspective"],
    xb = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
    wb = ["paint", "layout", "strict", "content"];
function Wc(e) {
    const t = Hc(),
        n = Vt(e) ? Wt(e) : e;
    return (
        yb.some((r) => (n[r] ? n[r] !== "none" : !1)) ||
        (n.containerType ? n.containerType !== "normal" : !1) ||
        (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
        (!t && (n.filter ? n.filter !== "none" : !1)) ||
        xb.some((r) => (n.willChange || "").includes(r)) ||
        wb.some((r) => (n.contain || "").includes(r))
    );
}
function bb(e) {
    let t = nr(e);
    for (; on(t) && !go(t); ) {
        if (Wc(t)) return t;
        if (Pl(t)) return null;
        t = nr(t);
    }
    return null;
}
function Hc() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Sb = new Set(["html", "body", "#document"]);
function go(e) {
    return Sb.has(Eo(e));
}
function Wt(e) {
    return dt(e).getComputedStyle(e);
}
function Tl(e) {
    return Vt(e)
        ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
        : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function nr(e) {
    if (Eo(e) === "html") return e;
    const t = e.assignedSlot || e.parentNode || (zf(e) && e.host) || sn(e);
    return zf(t) ? t.host : t;
}
function Pg(e) {
    const t = nr(e);
    return go(t) ? (e.ownerDocument ? e.ownerDocument.body : e.body) : on(t) && Ls(t) ? t : Pg(t);
}
function ws(e, t, n) {
    var r;
    t === void 0 && (t = []), n === void 0 && (n = !0);
    const o = Pg(e),
        s = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
        i = dt(o);
    if (s) {
        const l = Pu(i);
        return t.concat(i, i.visualViewport || [], Ls(o) ? o : [], l && n ? ws(l) : []);
    }
    return t.concat(o, ws(o, [], n));
}
function Pu(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Tg(e) {
    const t = Wt(e);
    let n = parseFloat(t.width) || 0,
        r = parseFloat(t.height) || 0;
    const o = on(e),
        s = o ? e.offsetWidth : n,
        i = o ? e.offsetHeight : r,
        l = Xi(n) !== s || Xi(r) !== i;
    return l && ((n = s), (r = i)), { width: n, height: r, $: l };
}
function Qc(e) {
    return Vt(e) ? e : e.contextElement;
}
function Zr(e) {
    const t = Qc(e);
    if (!on(t)) return nn(1);
    const n = t.getBoundingClientRect(),
        { width: r, height: o, $: s } = Tg(t);
    let i = (s ? Xi(n.width) : n.width) / r,
        l = (s ? Xi(n.height) : n.height) / o;
    return (!i || !Number.isFinite(i)) && (i = 1), (!l || !Number.isFinite(l)) && (l = 1), { x: i, y: l };
}
const Cb = nn(0);
function jg(e) {
    const t = dt(e);
    return !Hc() || !t.visualViewport ? Cb : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Eb(e, t, n) {
    return t === void 0 && (t = !1), !n || (t && n !== dt(e)) ? !1 : t;
}
function kr(e, t, n, r) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    const o = e.getBoundingClientRect(),
        s = Qc(e);
    let i = nn(1);
    t && (r ? Vt(r) && (i = Zr(r)) : (i = Zr(e)));
    const l = Eb(s, n, r) ? jg(s) : nn(0);
    let a = (o.left + l.x) / i.x,
        u = (o.top + l.y) / i.y,
        c = o.width / i.x,
        f = o.height / i.y;
    if (s) {
        const g = dt(s),
            h = r && Vt(r) ? dt(r) : r;
        let w = g,
            v = Pu(w);
        for (; v && r && h !== w; ) {
            const x = Zr(v),
                m = v.getBoundingClientRect(),
                p = Wt(v),
                y = m.left + (v.clientLeft + parseFloat(p.paddingLeft)) * x.x,
                S = m.top + (v.clientTop + parseFloat(p.paddingTop)) * x.y;
            (a *= x.x), (u *= x.y), (c *= x.x), (f *= x.y), (a += y), (u += S), (w = dt(v)), (v = Pu(w));
        }
    }
    return Ji({ width: c, height: f, x: a, y: u });
}
function Gc(e, t) {
    const n = Tl(e).scrollLeft;
    return t ? t.left + n : kr(sn(e)).left + n;
}
function Rg(e, t, n) {
    n === void 0 && (n = !1);
    const r = e.getBoundingClientRect(),
        o = r.left + t.scrollLeft - (n ? 0 : Gc(e, r)),
        s = r.top + t.scrollTop;
    return { x: o, y: s };
}
function kb(e) {
    let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
    const s = o === "fixed",
        i = sn(r),
        l = t ? Pl(t.floating) : !1;
    if (r === i || (l && s)) return n;
    let a = { scrollLeft: 0, scrollTop: 0 },
        u = nn(1);
    const c = nn(0),
        f = on(r);
    if ((f || (!f && !s)) && ((Eo(r) !== "body" || Ls(i)) && (a = Tl(r)), on(r))) {
        const h = kr(r);
        (u = Zr(r)), (c.x = h.x + r.clientLeft), (c.y = h.y + r.clientTop);
    }
    const g = i && !f && !s ? Rg(i, a, !0) : nn(0);
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - a.scrollLeft * u.x + c.x + g.x,
        y: n.y * u.y - a.scrollTop * u.y + c.y + g.y,
    };
}
function Nb(e) {
    return Array.from(e.getClientRects());
}
function Pb(e) {
    const t = sn(e),
        n = Tl(e),
        r = e.ownerDocument.body,
        o = at(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
        s = at(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let i = -n.scrollLeft + Gc(e);
    const l = -n.scrollTop;
    return (
        Wt(r).direction === "rtl" && (i += at(t.clientWidth, r.clientWidth) - o), { width: o, height: s, x: i, y: l }
    );
}
function Tb(e, t) {
    const n = dt(e),
        r = sn(e),
        o = n.visualViewport;
    let s = r.clientWidth,
        i = r.clientHeight,
        l = 0,
        a = 0;
    if (o) {
        (s = o.width), (i = o.height);
        const u = Hc();
        (!u || (u && t === "fixed")) && ((l = o.offsetLeft), (a = o.offsetTop));
    }
    return { width: s, height: i, x: l, y: a };
}
const jb = new Set(["absolute", "fixed"]);
function Rb(e, t) {
    const n = kr(e, !0, t === "fixed"),
        r = n.top + e.clientTop,
        o = n.left + e.clientLeft,
        s = on(e) ? Zr(e) : nn(1),
        i = e.clientWidth * s.x,
        l = e.clientHeight * s.y,
        a = o * s.x,
        u = r * s.y;
    return { width: i, height: l, x: a, y: u };
}
function $f(e, t, n) {
    let r;
    if (t === "viewport") r = Tb(e, n);
    else if (t === "document") r = Pb(sn(e));
    else if (Vt(t)) r = Rb(t, n);
    else {
        const o = jg(e);
        r = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
    }
    return Ji(r);
}
function Ag(e, t) {
    const n = nr(e);
    return n === t || !Vt(n) || go(n) ? !1 : Wt(n).position === "fixed" || Ag(n, t);
}
function Ab(e, t) {
    const n = t.get(e);
    if (n) return n;
    let r = ws(e, [], !1).filter((l) => Vt(l) && Eo(l) !== "body"),
        o = null;
    const s = Wt(e).position === "fixed";
    let i = s ? nr(e) : e;
    for (; Vt(i) && !go(i); ) {
        const l = Wt(i),
            a = Wc(i);
        !a && l.position === "fixed" && (o = null),
            (s ? !a && !o : (!a && l.position === "static" && !!o && jb.has(o.position)) || (Ls(i) && !a && Ag(e, i)))
                ? (r = r.filter((c) => c !== i))
                : (o = l),
            (i = nr(i));
    }
    return t.set(e, r), r;
}
function Ob(e) {
    let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
    const i = [...(n === "clippingAncestors" ? (Pl(t) ? [] : Ab(t, this._c)) : [].concat(n)), r],
        l = i[0],
        a = i.reduce(
            (u, c) => {
                const f = $f(t, c, o);
                return (
                    (u.top = at(f.top, u.top)),
                    (u.right = tr(f.right, u.right)),
                    (u.bottom = tr(f.bottom, u.bottom)),
                    (u.left = at(f.left, u.left)),
                    u
                );
            },
            $f(t, l, o)
        );
    return { width: a.right - a.left, height: a.bottom - a.top, x: a.left, y: a.top };
}
function Mb(e) {
    const { width: t, height: n } = Tg(e);
    return { width: t, height: n };
}
function _b(e, t, n) {
    const r = on(t),
        o = sn(t),
        s = n === "fixed",
        i = kr(e, !0, s, t);
    let l = { scrollLeft: 0, scrollTop: 0 };
    const a = nn(0);
    function u() {
        a.x = Gc(o);
    }
    if (r || (!r && !s))
        if (((Eo(t) !== "body" || Ls(o)) && (l = Tl(t)), r)) {
            const h = kr(t, !0, s, t);
            (a.x = h.x + t.clientLeft), (a.y = h.y + t.clientTop);
        } else o && u();
    s && !r && o && u();
    const c = o && !r && !s ? Rg(o, l) : nn(0),
        f = i.left + l.scrollLeft - a.x - c.x,
        g = i.top + l.scrollTop - a.y - c.y;
    return { x: f, y: g, width: i.width, height: i.height };
}
function Ca(e) {
    return Wt(e).position === "static";
}
function Bf(e, t) {
    if (!on(e) || Wt(e).position === "fixed") return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return sn(e) === n && (n = n.ownerDocument.body), n;
}
function Og(e, t) {
    const n = dt(e);
    if (Pl(e)) return n;
    if (!on(e)) {
        let o = nr(e);
        for (; o && !go(o); ) {
            if (Vt(o) && !Ca(o)) return o;
            o = nr(o);
        }
        return n;
    }
    let r = Bf(e, t);
    for (; r && gb(r) && Ca(r); ) r = Bf(r, t);
    return r && go(r) && Ca(r) && !Wc(r) ? n : r || bb(e) || n;
}
const Lb = async function (e) {
    const t = this.getOffsetParent || Og,
        n = this.getDimensions,
        r = await n(e.floating);
    return {
        reference: _b(e.reference, await t(e.floating), e.strategy),
        floating: { x: 0, y: 0, width: r.width, height: r.height },
    };
};
function Ib(e) {
    return Wt(e).direction === "rtl";
}
const Db = {
    convertOffsetParentRelativeRectToViewportRelativeRect: kb,
    getDocumentElement: sn,
    getClippingRect: Ob,
    getOffsetParent: Og,
    getElementRects: Lb,
    getClientRects: Nb,
    getDimensions: Mb,
    getScale: Zr,
    isElement: Vt,
    isRTL: Ib,
};
function Mg(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Fb(e, t) {
    let n = null,
        r;
    const o = sn(e);
    function s() {
        var l;
        clearTimeout(r), (l = n) == null || l.disconnect(), (n = null);
    }
    function i(l, a) {
        l === void 0 && (l = !1), a === void 0 && (a = 1), s();
        const u = e.getBoundingClientRect(),
            { left: c, top: f, width: g, height: h } = u;
        if ((l || t(), !g || !h)) return;
        const w = ui(f),
            v = ui(o.clientWidth - (c + g)),
            x = ui(o.clientHeight - (f + h)),
            m = ui(c),
            y = { rootMargin: -w + "px " + -v + "px " + -x + "px " + -m + "px", threshold: at(0, tr(1, a)) || 1 };
        let S = !0;
        function C(E) {
            const k = E[0].intersectionRatio;
            if (k !== a) {
                if (!S) return i();
                k
                    ? i(!1, k)
                    : (r = setTimeout(() => {
                          i(!1, 1e-7);
                      }, 1e3));
            }
            k === 1 && !Mg(u, e.getBoundingClientRect()) && i(), (S = !1);
        }
        try {
            n = new IntersectionObserver(C, { ...y, root: o.ownerDocument });
        } catch {
            n = new IntersectionObserver(C, y);
        }
        n.observe(e);
    }
    return i(!0), s;
}
function zb(e, t, n, r) {
    r === void 0 && (r = {});
    const {
            ancestorScroll: o = !0,
            ancestorResize: s = !0,
            elementResize: i = typeof ResizeObserver == "function",
            layoutShift: l = typeof IntersectionObserver == "function",
            animationFrame: a = !1,
        } = r,
        u = Qc(e),
        c = o || s ? [...(u ? ws(u) : []), ...ws(t)] : [];
    c.forEach((m) => {
        o && m.addEventListener("scroll", n, { passive: !0 }), s && m.addEventListener("resize", n);
    });
    const f = u && l ? Fb(u, n) : null;
    let g = -1,
        h = null;
    i &&
        ((h = new ResizeObserver((m) => {
            let [p] = m;
            p &&
                p.target === u &&
                h &&
                (h.unobserve(t),
                cancelAnimationFrame(g),
                (g = requestAnimationFrame(() => {
                    var y;
                    (y = h) == null || y.observe(t);
                }))),
                n();
        })),
        u && !a && h.observe(u),
        h.observe(t));
    let w,
        v = a ? kr(e) : null;
    a && x();
    function x() {
        const m = kr(e);
        v && !Mg(v, m) && n(), (v = m), (w = requestAnimationFrame(x));
    }
    return (
        n(),
        () => {
            var m;
            c.forEach((p) => {
                o && p.removeEventListener("scroll", n), s && p.removeEventListener("resize", n);
            }),
                f == null || f(),
                (m = h) == null || m.disconnect(),
                (h = null),
                a && cancelAnimationFrame(w);
        }
    );
}
const $b = cb,
    Bb = db,
    Ub = lb,
    Vb = pb,
    Wb = ab,
    Uf = ib,
    Hb = fb,
    Qb = (e, t, n) => {
        const r = new Map(),
            o = { platform: Db, ...n },
            s = { ...o.platform, _c: r };
        return sb(e, t, { ...o, platform: s });
    };
var Gb = typeof document < "u",
    Kb = function () {},
    ki = Gb ? b.useLayoutEffect : Kb;
function el(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (typeof e == "function" && e.toString() === t.toString()) return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (((n = e.length), n !== t.length)) return !1;
            for (r = n; r-- !== 0; ) if (!el(e[r], t[r])) return !1;
            return !0;
        }
        if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length)) return !1;
        for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
        for (r = n; r-- !== 0; ) {
            const s = o[r];
            if (!(s === "_owner" && e.$$typeof) && !el(e[s], t[s])) return !1;
        }
        return !0;
    }
    return e !== e && t !== t;
}
function _g(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Vf(e, t) {
    const n = _g(e);
    return Math.round(t * n) / n;
}
function Ea(e) {
    const t = b.useRef(e);
    return (
        ki(() => {
            t.current = e;
        }),
        t
    );
}
function Yb(e) {
    e === void 0 && (e = {});
    const {
            placement: t = "bottom",
            strategy: n = "absolute",
            middleware: r = [],
            platform: o,
            elements: { reference: s, floating: i } = {},
            transform: l = !0,
            whileElementsMounted: a,
            open: u,
        } = e,
        [c, f] = b.useState({ x: 0, y: 0, strategy: n, placement: t, middlewareData: {}, isPositioned: !1 }),
        [g, h] = b.useState(r);
    el(g, r) || h(r);
    const [w, v] = b.useState(null),
        [x, m] = b.useState(null),
        p = b.useCallback((P) => {
            P !== E.current && ((E.current = P), v(P));
        }, []),
        y = b.useCallback((P) => {
            P !== k.current && ((k.current = P), m(P));
        }, []),
        S = s || w,
        C = i || x,
        E = b.useRef(null),
        k = b.useRef(null),
        N = b.useRef(c),
        R = a != null,
        A = Ea(a),
        D = Ea(o),
        L = Ea(u),
        H = b.useCallback(() => {
            if (!E.current || !k.current) return;
            const P = { placement: t, strategy: n, middleware: g };
            D.current && (P.platform = D.current),
                Qb(E.current, k.current, P).then((T) => {
                    const I = { ...T, isPositioned: L.current !== !1 };
                    O.current &&
                        !el(N.current, I) &&
                        ((N.current = I),
                        Ms.flushSync(() => {
                            f(I);
                        }));
                });
        }, [g, t, n, D, L]);
    ki(() => {
        u === !1 && N.current.isPositioned && ((N.current.isPositioned = !1), f((P) => ({ ...P, isPositioned: !1 })));
    }, [u]);
    const O = b.useRef(!1);
    ki(
        () => (
            (O.current = !0),
            () => {
                O.current = !1;
            }
        ),
        []
    ),
        ki(() => {
            if ((S && (E.current = S), C && (k.current = C), S && C)) {
                if (A.current) return A.current(S, C, H);
                H();
            }
        }, [S, C, H, A, R]);
    const W = b.useMemo(() => ({ reference: E, floating: k, setReference: p, setFloating: y }), [p, y]),
        B = b.useMemo(() => ({ reference: S, floating: C }), [S, C]),
        U = b.useMemo(() => {
            const P = { position: n, left: 0, top: 0 };
            if (!B.floating) return P;
            const T = Vf(B.floating, c.x),
                I = Vf(B.floating, c.y);
            return l
                ? {
                      ...P,
                      transform: "translate(" + T + "px, " + I + "px)",
                      ...(_g(B.floating) >= 1.5 && { willChange: "transform" }),
                  }
                : { position: n, left: T, top: I };
        }, [n, l, B.floating, c.x, c.y]);
    return b.useMemo(() => ({ ...c, update: H, refs: W, elements: B, floatingStyles: U }), [c, H, W, B, U]);
}
const qb = (e) => {
        function t(n) {
            return {}.hasOwnProperty.call(n, "current");
        }
        return {
            name: "arrow",
            options: e,
            fn(n) {
                const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
                return r && t(r)
                    ? r.current != null
                        ? Uf({ element: r.current, padding: o }).fn(n)
                        : {}
                    : r
                      ? Uf({ element: r, padding: o }).fn(n)
                      : {};
            },
        };
    },
    Xb = (e, t) => ({ ...$b(e), options: [e, t] }),
    Zb = (e, t) => ({ ...Bb(e), options: [e, t] }),
    Jb = (e, t) => ({ ...Hb(e), options: [e, t] }),
    e2 = (e, t) => ({ ...Ub(e), options: [e, t] }),
    t2 = (e, t) => ({ ...Vb(e), options: [e, t] }),
    n2 = (e, t) => ({ ...Wb(e), options: [e, t] }),
    r2 = (e, t) => ({ ...qb(e), options: [e, t] });
var o2 = "Arrow",
    Lg = b.forwardRef((e, t) => {
        const { children: n, width: r = 10, height: o = 5, ...s } = e;
        return d.jsx(je.svg, {
            ...s,
            ref: t,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? n : d.jsx("polygon", { points: "0,0 30,0 15,10" }),
        });
    });
Lg.displayName = o2;
var s2 = Lg;
function i2(e) {
    const [t, n] = b.useState(void 0);
    return (
        rn(() => {
            if (e) {
                n({ width: e.offsetWidth, height: e.offsetHeight });
                const r = new ResizeObserver((o) => {
                    if (!Array.isArray(o) || !o.length) return;
                    const s = o[0];
                    let i, l;
                    if ("borderBoxSize" in s) {
                        const a = s.borderBoxSize,
                            u = Array.isArray(a) ? a[0] : a;
                        (i = u.inlineSize), (l = u.blockSize);
                    } else (i = e.offsetWidth), (l = e.offsetHeight);
                    n({ width: i, height: l });
                });
                return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
            } else n(void 0);
        }, [e]),
        t
    );
}
var Ig = "Popper",
    [Dg, Fg] = bo(Ig),
    [jE, zg] = Dg(Ig),
    $g = "PopperAnchor",
    Bg = b.forwardRef((e, t) => {
        const { __scopePopper: n, virtualRef: r, ...o } = e,
            s = zg($g, n),
            i = b.useRef(null),
            l = ht(t, i);
        return (
            b.useEffect(() => {
                s.onAnchorChange((r == null ? void 0 : r.current) || i.current);
            }),
            r ? null : d.jsx(je.div, { ...o, ref: l })
        );
    });
Bg.displayName = $g;
var Kc = "PopperContent",
    [l2, a2] = Dg(Kc),
    Ug = b.forwardRef((e, t) => {
        var Y, ye, Re, Ce, te, z;
        const {
                __scopePopper: n,
                side: r = "bottom",
                sideOffset: o = 0,
                align: s = "center",
                alignOffset: i = 0,
                arrowPadding: l = 0,
                avoidCollisions: a = !0,
                collisionBoundary: u = [],
                collisionPadding: c = 0,
                sticky: f = "partial",
                hideWhenDetached: g = !1,
                updatePositionStrategy: h = "optimized",
                onPlaced: w,
                ...v
            } = e,
            x = zg(Kc, n),
            [m, p] = b.useState(null),
            y = ht(t, (J) => p(J)),
            [S, C] = b.useState(null),
            E = i2(S),
            k = (E == null ? void 0 : E.width) ?? 0,
            N = (E == null ? void 0 : E.height) ?? 0,
            R = r + (s !== "center" ? "-" + s : ""),
            A = typeof c == "number" ? c : { top: 0, right: 0, bottom: 0, left: 0, ...c },
            D = Array.isArray(u) ? u : [u],
            L = D.length > 0,
            H = { padding: A, boundary: D.filter(c2), altBoundary: L },
            {
                refs: O,
                floatingStyles: W,
                placement: B,
                isPositioned: U,
                middlewareData: P,
            } = Yb({
                strategy: "fixed",
                placement: R,
                whileElementsMounted: (...J) => zb(...J, { animationFrame: h === "always" }),
                elements: { reference: x.anchor },
                middleware: [
                    Xb({ mainAxis: o + N, alignmentAxis: i }),
                    a && Zb({ mainAxis: !0, crossAxis: !1, limiter: f === "partial" ? Jb() : void 0, ...H }),
                    a && e2({ ...H }),
                    t2({
                        ...H,
                        apply: ({ elements: J, rects: ae, availableWidth: Ne, availableHeight: Ve }) => {
                            const { width: st, height: it } = ae.reference,
                                We = J.floating.style;
                            We.setProperty("--radix-popper-available-width", `${Ne}px`),
                                We.setProperty("--radix-popper-available-height", `${Ve}px`),
                                We.setProperty("--radix-popper-anchor-width", `${st}px`),
                                We.setProperty("--radix-popper-anchor-height", `${it}px`);
                        },
                    }),
                    S && r2({ element: S, padding: l }),
                    d2({ arrowWidth: k, arrowHeight: N }),
                    g && n2({ strategy: "referenceHidden", ...H }),
                ],
            }),
            [T, I] = Hg(B),
            V = er(w);
        rn(() => {
            U && (V == null || V());
        }, [U, V]);
        const $ = (Y = P.arrow) == null ? void 0 : Y.x,
            Q = (ye = P.arrow) == null ? void 0 : ye.y,
            G = ((Re = P.arrow) == null ? void 0 : Re.centerOffset) !== 0,
            [se, ve] = b.useState();
        return (
            rn(() => {
                m && ve(window.getComputedStyle(m).zIndex);
            }, [m]),
            d.jsx("div", {
                ref: O.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: {
                    ...W,
                    transform: U ? W.transform : "translate(0, -200%)",
                    minWidth: "max-content",
                    zIndex: se,
                    "--radix-popper-transform-origin": [
                        (Ce = P.transformOrigin) == null ? void 0 : Ce.x,
                        (te = P.transformOrigin) == null ? void 0 : te.y,
                    ].join(" "),
                    ...(((z = P.hide) == null ? void 0 : z.referenceHidden) && {
                        visibility: "hidden",
                        pointerEvents: "none",
                    }),
                },
                dir: e.dir,
                children: d.jsx(l2, {
                    scope: n,
                    placedSide: T,
                    onArrowChange: C,
                    arrowX: $,
                    arrowY: Q,
                    shouldHideArrow: G,
                    children: d.jsx(je.div, {
                        "data-side": T,
                        "data-align": I,
                        ...v,
                        ref: y,
                        style: { ...v.style, animation: U ? void 0 : "none" },
                    }),
                }),
            })
        );
    });
Ug.displayName = Kc;
var Vg = "PopperArrow",
    u2 = { top: "bottom", right: "left", bottom: "top", left: "right" },
    Wg = b.forwardRef(function (t, n) {
        const { __scopePopper: r, ...o } = t,
            s = a2(Vg, r),
            i = u2[s.placedSide];
        return d.jsx("span", {
            ref: s.onArrowChange,
            style: {
                position: "absolute",
                left: s.arrowX,
                top: s.arrowY,
                [i]: 0,
                transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[s.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)",
                }[s.placedSide],
                visibility: s.shouldHideArrow ? "hidden" : void 0,
            },
            children: d.jsx(s2, { ...o, ref: n, style: { ...o.style, display: "block" } }),
        });
    });
Wg.displayName = Vg;
function c2(e) {
    return e !== null;
}
var d2 = (e) => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var x, m, p;
        const { placement: n, rects: r, middlewareData: o } = t,
            i = ((x = o.arrow) == null ? void 0 : x.centerOffset) !== 0,
            l = i ? 0 : e.arrowWidth,
            a = i ? 0 : e.arrowHeight,
            [u, c] = Hg(n),
            f = { start: "0%", center: "50%", end: "100%" }[c],
            g = (((m = o.arrow) == null ? void 0 : m.x) ?? 0) + l / 2,
            h = (((p = o.arrow) == null ? void 0 : p.y) ?? 0) + a / 2;
        let w = "",
            v = "";
        return (
            u === "bottom"
                ? ((w = i ? f : `${g}px`), (v = `${-a}px`))
                : u === "top"
                  ? ((w = i ? f : `${g}px`), (v = `${r.floating.height + a}px`))
                  : u === "right"
                    ? ((w = `${-a}px`), (v = i ? f : `${h}px`))
                    : u === "left" && ((w = `${r.floating.width + a}px`), (v = i ? f : `${h}px`)),
            { data: { x: w, y: v } }
        );
    },
});
function Hg(e) {
    const [t, n = "center"] = e.split("-");
    return [t, n];
}
var f2 = Bg,
    p2 = Ug,
    h2 = Wg,
    [jl, RE] = bo("Tooltip", [Fg]),
    Yc = Fg(),
    Qg = "TooltipProvider",
    m2 = 700,
    Wf = "tooltip.open",
    [g2, Gg] = jl(Qg),
    Kg = (e) => {
        const {
                __scopeTooltip: t,
                delayDuration: n = m2,
                skipDelayDuration: r = 300,
                disableHoverableContent: o = !1,
                children: s,
            } = e,
            i = b.useRef(!0),
            l = b.useRef(!1),
            a = b.useRef(0);
        return (
            b.useEffect(() => {
                const u = a.current;
                return () => window.clearTimeout(u);
            }, []),
            d.jsx(g2, {
                scope: t,
                isOpenDelayedRef: i,
                delayDuration: n,
                onOpen: b.useCallback(() => {
                    window.clearTimeout(a.current), (i.current = !1);
                }, []),
                onClose: b.useCallback(() => {
                    window.clearTimeout(a.current), (a.current = window.setTimeout(() => (i.current = !0), r));
                }, [r]),
                isPointerInTransitRef: l,
                onPointerInTransitChange: b.useCallback((u) => {
                    l.current = u;
                }, []),
                disableHoverableContent: o,
                children: s,
            })
        );
    };
Kg.displayName = Qg;
var Yg = "Tooltip",
    [AE, Rl] = jl(Yg),
    Tu = "TooltipTrigger",
    v2 = b.forwardRef((e, t) => {
        const { __scopeTooltip: n, ...r } = e,
            o = Rl(Tu, n),
            s = Gg(Tu, n),
            i = Yc(n),
            l = b.useRef(null),
            a = ht(t, l, o.onTriggerChange),
            u = b.useRef(!1),
            c = b.useRef(!1),
            f = b.useCallback(() => (u.current = !1), []);
        return (
            b.useEffect(() => () => document.removeEventListener("pointerup", f), [f]),
            d.jsx(f2, {
                asChild: !0,
                ...i,
                children: d.jsx(je.button, {
                    "aria-describedby": o.open ? o.contentId : void 0,
                    "data-state": o.stateAttribute,
                    ...r,
                    ref: a,
                    onPointerMove: Se(e.onPointerMove, (g) => {
                        g.pointerType !== "touch" &&
                            !c.current &&
                            !s.isPointerInTransitRef.current &&
                            (o.onTriggerEnter(), (c.current = !0));
                    }),
                    onPointerLeave: Se(e.onPointerLeave, () => {
                        o.onTriggerLeave(), (c.current = !1);
                    }),
                    onPointerDown: Se(e.onPointerDown, () => {
                        o.open && o.onClose(),
                            (u.current = !0),
                            document.addEventListener("pointerup", f, { once: !0 });
                    }),
                    onFocus: Se(e.onFocus, () => {
                        u.current || o.onOpen();
                    }),
                    onBlur: Se(e.onBlur, o.onClose),
                    onClick: Se(e.onClick, o.onClose),
                }),
            })
        );
    });
v2.displayName = Tu;
var y2 = "TooltipPortal",
    [OE, x2] = jl(y2, { forceMount: void 0 }),
    vo = "TooltipContent",
    qg = b.forwardRef((e, t) => {
        const n = x2(vo, e.__scopeTooltip),
            { forceMount: r = n.forceMount, side: o = "top", ...s } = e,
            i = Rl(vo, e.__scopeTooltip);
        return d.jsx(Sl, {
            present: r || i.open,
            children: i.disableHoverableContent
                ? d.jsx(Xg, { side: o, ...s, ref: t })
                : d.jsx(w2, { side: o, ...s, ref: t }),
        });
    }),
    w2 = b.forwardRef((e, t) => {
        const n = Rl(vo, e.__scopeTooltip),
            r = Gg(vo, e.__scopeTooltip),
            o = b.useRef(null),
            s = ht(t, o),
            [i, l] = b.useState(null),
            { trigger: a, onClose: u } = n,
            c = o.current,
            { onPointerInTransitChange: f } = r,
            g = b.useCallback(() => {
                l(null), f(!1);
            }, [f]),
            h = b.useCallback(
                (w, v) => {
                    const x = w.currentTarget,
                        m = { x: w.clientX, y: w.clientY },
                        p = k2(m, x.getBoundingClientRect()),
                        y = N2(m, p),
                        S = P2(v.getBoundingClientRect()),
                        C = j2([...y, ...S]);
                    l(C), f(!0);
                },
                [f]
            );
        return (
            b.useEffect(() => () => g(), [g]),
            b.useEffect(() => {
                if (a && c) {
                    const w = (x) => h(x, c),
                        v = (x) => h(x, a);
                    return (
                        a.addEventListener("pointerleave", w),
                        c.addEventListener("pointerleave", v),
                        () => {
                            a.removeEventListener("pointerleave", w), c.removeEventListener("pointerleave", v);
                        }
                    );
                }
            }, [a, c, h, g]),
            b.useEffect(() => {
                if (i) {
                    const w = (v) => {
                        const x = v.target,
                            m = { x: v.clientX, y: v.clientY },
                            p = (a == null ? void 0 : a.contains(x)) || (c == null ? void 0 : c.contains(x)),
                            y = !T2(m, i);
                        p ? g() : y && (g(), u());
                    };
                    return (
                        document.addEventListener("pointermove", w),
                        () => document.removeEventListener("pointermove", w)
                    );
                }
            }, [a, c, i, u, g]),
            d.jsx(Xg, { ...e, ref: s })
        );
    }),
    [b2, S2] = jl(Yg, { isInside: !1 }),
    C2 = Tx("TooltipContent"),
    Xg = b.forwardRef((e, t) => {
        const {
                __scopeTooltip: n,
                children: r,
                "aria-label": o,
                onEscapeKeyDown: s,
                onPointerDownOutside: i,
                ...l
            } = e,
            a = Rl(vo, n),
            u = Yc(n),
            { onClose: c } = a;
        return (
            b.useEffect(() => (document.addEventListener(Wf, c), () => document.removeEventListener(Wf, c)), [c]),
            b.useEffect(() => {
                if (a.trigger) {
                    const f = (g) => {
                        const h = g.target;
                        h != null && h.contains(a.trigger) && c();
                    };
                    return (
                        window.addEventListener("scroll", f, { capture: !0 }),
                        () => window.removeEventListener("scroll", f, { capture: !0 })
                    );
                }
            }, [a.trigger, c]),
            d.jsx(Mc, {
                asChild: !0,
                disableOutsidePointerEvents: !1,
                onEscapeKeyDown: s,
                onPointerDownOutside: i,
                onFocusOutside: (f) => f.preventDefault(),
                onDismiss: c,
                children: d.jsxs(p2, {
                    "data-state": a.stateAttribute,
                    ...u,
                    ...l,
                    ref: t,
                    style: {
                        ...l.style,
                        "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                        "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                        "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                        "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                        "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)",
                    },
                    children: [
                        d.jsx(C2, { children: r }),
                        d.jsx(b2, {
                            scope: n,
                            isInside: !0,
                            children: d.jsx(Xx, { id: a.contentId, role: "tooltip", children: o || r }),
                        }),
                    ],
                }),
            })
        );
    });
qg.displayName = vo;
var Zg = "TooltipArrow",
    E2 = b.forwardRef((e, t) => {
        const { __scopeTooltip: n, ...r } = e,
            o = Yc(n);
        return S2(Zg, n).isInside ? null : d.jsx(h2, { ...o, ...r, ref: t });
    });
E2.displayName = Zg;
function k2(e, t) {
    const n = Math.abs(t.top - e.y),
        r = Math.abs(t.bottom - e.y),
        o = Math.abs(t.right - e.x),
        s = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, s)) {
        case s:
            return "left";
        case o:
            return "right";
        case n:
            return "top";
        case r:
            return "bottom";
        default:
            throw new Error("unreachable");
    }
}
function N2(e, t, n = 5) {
    const r = [];
    switch (t) {
        case "top":
            r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
            break;
        case "bottom":
            r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
            break;
        case "left":
            r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
            break;
        case "right":
            r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
            break;
    }
    return r;
}
function P2(e) {
    const { top: t, right: n, bottom: r, left: o } = e;
    return [
        { x: o, y: t },
        { x: n, y: t },
        { x: n, y: r },
        { x: o, y: r },
    ];
}
function T2(e, t) {
    const { x: n, y: r } = e;
    let o = !1;
    for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
        const l = t[s],
            a = t[i],
            u = l.x,
            c = l.y,
            f = a.x,
            g = a.y;
        c > r != g > r && n < ((f - u) * (r - c)) / (g - c) + u && (o = !o);
    }
    return o;
}
function j2(e) {
    const t = e.slice();
    return t.sort((n, r) => (n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0)), R2(t);
}
function R2(e) {
    if (e.length <= 1) return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2; ) {
            const s = t[t.length - 1],
                i = t[t.length - 2];
            if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) t.pop();
            else break;
        }
        t.push(o);
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2; ) {
            const s = n[n.length - 1],
                i = n[n.length - 2];
            if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) n.pop();
            else break;
        }
        n.push(o);
    }
    return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var A2 = Kg,
    Jg = qg;
const O2 = A2,
    M2 = b.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
        d.jsx(Jg, {
            ref: r,
            sideOffset: t,
            className: Me(
                "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                e
            ),
            ...n,
        })
    );
M2.displayName = Jg.displayName;
var Al = class {
        constructor() {
            (this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this));
        }
        subscribe(e) {
            return (
                this.listeners.add(e),
                this.onSubscribe(),
                () => {
                    this.listeners.delete(e), this.onUnsubscribe();
                }
            );
        }
        hasListeners() {
            return this.listeners.size > 0;
        }
        onSubscribe() {}
        onUnsubscribe() {}
    },
    Ol = typeof window > "u" || "Deno" in globalThis;
function _t() {}
function _2(e, t) {
    return typeof e == "function" ? e(t) : e;
}
function L2(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function I2(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0);
}
function ju(e, t) {
    return typeof e == "function" ? e(t) : e;
}
function D2(e, t) {
    return typeof e == "function" ? e(t) : e;
}
function Hf(e, t) {
    const { type: n = "all", exact: r, fetchStatus: o, predicate: s, queryKey: i, stale: l } = e;
    if (i) {
        if (r) {
            if (t.queryHash !== qc(i, t.options)) return !1;
        } else if (!Ss(t.queryKey, i)) return !1;
    }
    if (n !== "all") {
        const a = t.isActive();
        if ((n === "active" && !a) || (n === "inactive" && a)) return !1;
    }
    return !((typeof l == "boolean" && t.isStale() !== l) || (o && o !== t.state.fetchStatus) || (s && !s(t)));
}
function Qf(e, t) {
    const { exact: n, status: r, predicate: o, mutationKey: s } = e;
    if (s) {
        if (!t.options.mutationKey) return !1;
        if (n) {
            if (bs(t.options.mutationKey) !== bs(s)) return !1;
        } else if (!Ss(t.options.mutationKey, s)) return !1;
    }
    return !((r && t.state.status !== r) || (o && !o(t)));
}
function qc(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || bs)(e);
}
function bs(e) {
    return JSON.stringify(e, (t, n) =>
        Ru(n)
            ? Object.keys(n)
                  .sort()
                  .reduce((r, o) => ((r[o] = n[o]), r), {})
            : n
    );
}
function Ss(e, t) {
    return e === t
        ? !0
        : typeof e != typeof t
          ? !1
          : e && t && typeof e == "object" && typeof t == "object"
            ? Object.keys(t).every((n) => Ss(e[n], t[n]))
            : !1;
}
function ev(e, t) {
    if (e === t) return e;
    const n = Gf(e) && Gf(t);
    if (n || (Ru(e) && Ru(t))) {
        const r = n ? e : Object.keys(e),
            o = r.length,
            s = n ? t : Object.keys(t),
            i = s.length,
            l = n ? [] : {},
            a = new Set(r);
        let u = 0;
        for (let c = 0; c < i; c++) {
            const f = n ? c : s[c];
            ((!n && a.has(f)) || n) && e[f] === void 0 && t[f] === void 0
                ? ((l[f] = void 0), u++)
                : ((l[f] = ev(e[f], t[f])), l[f] === e[f] && e[f] !== void 0 && u++);
        }
        return o === i && u === o ? e : l;
    }
    return t;
}
function Gf(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Ru(e) {
    if (!Kf(e)) return !1;
    const t = e.constructor;
    if (t === void 0) return !0;
    const n = t.prototype;
    return !(!Kf(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function Kf(e) {
    return Object.prototype.toString.call(e) === "[object Object]";
}
function F2(e) {
    return new Promise((t) => {
        setTimeout(t, e);
    });
}
function z2(e, t, n) {
    return typeof n.structuralSharing == "function"
        ? n.structuralSharing(e, t)
        : n.structuralSharing !== !1
          ? ev(e, t)
          : t;
}
function $2(e, t, n = 0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r;
}
function B2(e, t, n = 0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r;
}
var Xc = Symbol();
function tv(e, t) {
    return !e.queryFn && t != null && t.initialPromise
        ? () => t.initialPromise
        : !e.queryFn || e.queryFn === Xc
          ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
          : e.queryFn;
}
var fr,
    In,
    eo,
    fp,
    U2 =
        ((fp = class extends Al {
            constructor() {
                super();
                ne(this, fr);
                ne(this, In);
                ne(this, eo);
                q(this, eo, (t) => {
                    if (!Ol && window.addEventListener) {
                        const n = () => t();
                        return (
                            window.addEventListener("visibilitychange", n, !1),
                            () => {
                                window.removeEventListener("visibilitychange", n);
                            }
                        );
                    }
                });
            }
            onSubscribe() {
                j(this, In) || this.setEventListener(j(this, eo));
            }
            onUnsubscribe() {
                var t;
                this.hasListeners() || ((t = j(this, In)) == null || t.call(this), q(this, In, void 0));
            }
            setEventListener(t) {
                var n;
                q(this, eo, t),
                    (n = j(this, In)) == null || n.call(this),
                    q(
                        this,
                        In,
                        t((r) => {
                            typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
                        })
                    );
            }
            setFocused(t) {
                j(this, fr) !== t && (q(this, fr, t), this.onFocus());
            }
            onFocus() {
                const t = this.isFocused();
                this.listeners.forEach((n) => {
                    n(t);
                });
            }
            isFocused() {
                var t;
                return typeof j(this, fr) == "boolean"
                    ? j(this, fr)
                    : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
            }
        }),
        (fr = new WeakMap()),
        (In = new WeakMap()),
        (eo = new WeakMap()),
        fp),
    nv = new U2(),
    to,
    Dn,
    no,
    pp,
    V2 =
        ((pp = class extends Al {
            constructor() {
                super();
                ne(this, to, !0);
                ne(this, Dn);
                ne(this, no);
                q(this, no, (t) => {
                    if (!Ol && window.addEventListener) {
                        const n = () => t(!0),
                            r = () => t(!1);
                        return (
                            window.addEventListener("online", n, !1),
                            window.addEventListener("offline", r, !1),
                            () => {
                                window.removeEventListener("online", n), window.removeEventListener("offline", r);
                            }
                        );
                    }
                });
            }
            onSubscribe() {
                j(this, Dn) || this.setEventListener(j(this, no));
            }
            onUnsubscribe() {
                var t;
                this.hasListeners() || ((t = j(this, Dn)) == null || t.call(this), q(this, Dn, void 0));
            }
            setEventListener(t) {
                var n;
                q(this, no, t), (n = j(this, Dn)) == null || n.call(this), q(this, Dn, t(this.setOnline.bind(this)));
            }
            setOnline(t) {
                j(this, to) !== t &&
                    (q(this, to, t),
                    this.listeners.forEach((r) => {
                        r(t);
                    }));
            }
            isOnline() {
                return j(this, to);
            }
        }),
        (to = new WeakMap()),
        (Dn = new WeakMap()),
        (no = new WeakMap()),
        pp),
    tl = new V2();
function W2() {
    let e, t;
    const n = new Promise((o, s) => {
        (e = o), (t = s);
    });
    (n.status = "pending"), n.catch(() => {});
    function r(o) {
        Object.assign(n, o), delete n.resolve, delete n.reject;
    }
    return (
        (n.resolve = (o) => {
            r({ status: "fulfilled", value: o }), e(o);
        }),
        (n.reject = (o) => {
            r({ status: "rejected", reason: o }), t(o);
        }),
        n
    );
}
function H2(e) {
    return Math.min(1e3 * 2 ** e, 3e4);
}
function rv(e) {
    return (e ?? "online") === "online" ? tl.isOnline() : !0;
}
var ov = class extends Error {
    constructor(e) {
        super("CancelledError"),
            (this.revert = e == null ? void 0 : e.revert),
            (this.silent = e == null ? void 0 : e.silent);
    }
};
function ka(e) {
    return e instanceof ov;
}
function sv(e) {
    let t = !1,
        n = 0,
        r = !1,
        o;
    const s = W2(),
        i = (v) => {
            var x;
            r || (g(new ov(v)), (x = e.abort) == null || x.call(e));
        },
        l = () => {
            t = !0;
        },
        a = () => {
            t = !1;
        },
        u = () => nv.isFocused() && (e.networkMode === "always" || tl.isOnline()) && e.canRun(),
        c = () => rv(e.networkMode) && e.canRun(),
        f = (v) => {
            var x;
            r || ((r = !0), (x = e.onSuccess) == null || x.call(e, v), o == null || o(), s.resolve(v));
        },
        g = (v) => {
            var x;
            r || ((r = !0), (x = e.onError) == null || x.call(e, v), o == null || o(), s.reject(v));
        },
        h = () =>
            new Promise((v) => {
                var x;
                (o = (m) => {
                    (r || u()) && v(m);
                }),
                    (x = e.onPause) == null || x.call(e);
            }).then(() => {
                var v;
                (o = void 0), r || (v = e.onContinue) == null || v.call(e);
            }),
        w = () => {
            if (r) return;
            let v;
            const x = n === 0 ? e.initialPromise : void 0;
            try {
                v = x ?? e.fn();
            } catch (m) {
                v = Promise.reject(m);
            }
            Promise.resolve(v)
                .then(f)
                .catch((m) => {
                    var E;
                    if (r) return;
                    const p = e.retry ?? (Ol ? 0 : 3),
                        y = e.retryDelay ?? H2,
                        S = typeof y == "function" ? y(n, m) : y,
                        C = p === !0 || (typeof p == "number" && n < p) || (typeof p == "function" && p(n, m));
                    if (t || !C) {
                        g(m);
                        return;
                    }
                    n++,
                        (E = e.onFail) == null || E.call(e, n, m),
                        F2(S)
                            .then(() => (u() ? void 0 : h()))
                            .then(() => {
                                t ? g(m) : w();
                            });
                });
        };
    return {
        promise: s,
        cancel: i,
        continue: () => (o == null || o(), s),
        cancelRetry: l,
        continueRetry: a,
        canStart: c,
        start: () => (c() ? w() : h().then(w), s),
    };
}
var Q2 = (e) => setTimeout(e, 0);
function G2() {
    let e = [],
        t = 0,
        n = (l) => {
            l();
        },
        r = (l) => {
            l();
        },
        o = Q2;
    const s = (l) => {
            t
                ? e.push(l)
                : o(() => {
                      n(l);
                  });
        },
        i = () => {
            const l = e;
            (e = []),
                l.length &&
                    o(() => {
                        r(() => {
                            l.forEach((a) => {
                                n(a);
                            });
                        });
                    });
        };
    return {
        batch: (l) => {
            let a;
            t++;
            try {
                a = l();
            } finally {
                t--, t || i();
            }
            return a;
        },
        batchCalls:
            (l) =>
            (...a) => {
                s(() => {
                    l(...a);
                });
            },
        schedule: s,
        setNotifyFunction: (l) => {
            n = l;
        },
        setBatchNotifyFunction: (l) => {
            r = l;
        },
        setScheduler: (l) => {
            o = l;
        },
    };
}
var Ge = G2(),
    pr,
    hp,
    iv =
        ((hp = class {
            constructor() {
                ne(this, pr);
            }
            destroy() {
                this.clearGcTimeout();
            }
            scheduleGc() {
                this.clearGcTimeout(),
                    L2(this.gcTime) &&
                        q(
                            this,
                            pr,
                            setTimeout(() => {
                                this.optionalRemove();
                            }, this.gcTime)
                        );
            }
            updateGcTime(e) {
                this.gcTime = Math.max(this.gcTime || 0, e ?? (Ol ? 1 / 0 : 5 * 60 * 1e3));
            }
            clearGcTimeout() {
                j(this, pr) && (clearTimeout(j(this, pr)), q(this, pr, void 0));
            }
        }),
        (pr = new WeakMap()),
        hp),
    ro,
    hr,
    vt,
    mr,
    $e,
    Ns,
    gr,
    Lt,
    un,
    mp,
    K2 =
        ((mp = class extends iv {
            constructor(t) {
                super();
                ne(this, Lt);
                ne(this, ro);
                ne(this, hr);
                ne(this, vt);
                ne(this, mr);
                ne(this, $e);
                ne(this, Ns);
                ne(this, gr);
                q(this, gr, !1),
                    q(this, Ns, t.defaultOptions),
                    this.setOptions(t.options),
                    (this.observers = []),
                    q(this, mr, t.client),
                    q(this, vt, j(this, mr).getQueryCache()),
                    (this.queryKey = t.queryKey),
                    (this.queryHash = t.queryHash),
                    q(this, ro, q2(this.options)),
                    (this.state = t.state ?? j(this, ro)),
                    this.scheduleGc();
            }
            get meta() {
                return this.options.meta;
            }
            get promise() {
                var t;
                return (t = j(this, $e)) == null ? void 0 : t.promise;
            }
            setOptions(t) {
                (this.options = { ...j(this, Ns), ...t }), this.updateGcTime(this.options.gcTime);
            }
            optionalRemove() {
                !this.observers.length && this.state.fetchStatus === "idle" && j(this, vt).remove(this);
            }
            setData(t, n) {
                const r = z2(this.state.data, t, this.options);
                return (
                    De(this, Lt, un).call(this, {
                        data: r,
                        type: "success",
                        dataUpdatedAt: n == null ? void 0 : n.updatedAt,
                        manual: n == null ? void 0 : n.manual,
                    }),
                    r
                );
            }
            setState(t, n) {
                De(this, Lt, un).call(this, { type: "setState", state: t, setStateOptions: n });
            }
            cancel(t) {
                var r, o;
                const n = (r = j(this, $e)) == null ? void 0 : r.promise;
                return (o = j(this, $e)) == null || o.cancel(t), n ? n.then(_t).catch(_t) : Promise.resolve();
            }
            destroy() {
                super.destroy(), this.cancel({ silent: !0 });
            }
            reset() {
                this.destroy(), this.setState(j(this, ro));
            }
            isActive() {
                return this.observers.some((t) => D2(t.options.enabled, this) !== !1);
            }
            isDisabled() {
                return this.getObserversCount() > 0
                    ? !this.isActive()
                    : this.options.queryFn === Xc || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
            }
            isStatic() {
                return this.getObserversCount() > 0
                    ? this.observers.some((t) => ju(t.options.staleTime, this) === "static")
                    : !1;
            }
            isStale() {
                return this.getObserversCount() > 0
                    ? this.observers.some((t) => t.getCurrentResult().isStale)
                    : this.state.data === void 0 || this.state.isInvalidated;
            }
            isStaleByTime(t = 0) {
                return this.state.data === void 0
                    ? !0
                    : t === "static"
                      ? !1
                      : this.state.isInvalidated
                        ? !0
                        : !I2(this.state.dataUpdatedAt, t);
            }
            onFocus() {
                var n;
                const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
                t == null || t.refetch({ cancelRefetch: !1 }), (n = j(this, $e)) == null || n.continue();
            }
            onOnline() {
                var n;
                const t = this.observers.find((r) => r.shouldFetchOnReconnect());
                t == null || t.refetch({ cancelRefetch: !1 }), (n = j(this, $e)) == null || n.continue();
            }
            addObserver(t) {
                this.observers.includes(t) ||
                    (this.observers.push(t),
                    this.clearGcTimeout(),
                    j(this, vt).notify({ type: "observerAdded", query: this, observer: t }));
            }
            removeObserver(t) {
                this.observers.includes(t) &&
                    ((this.observers = this.observers.filter((n) => n !== t)),
                    this.observers.length ||
                        (j(this, $e) && (j(this, gr) ? j(this, $e).cancel({ revert: !0 }) : j(this, $e).cancelRetry()),
                        this.scheduleGc()),
                    j(this, vt).notify({ type: "observerRemoved", query: this, observer: t }));
            }
            getObserversCount() {
                return this.observers.length;
            }
            invalidate() {
                this.state.isInvalidated || De(this, Lt, un).call(this, { type: "invalidate" });
            }
            fetch(t, n) {
                var u, c, f;
                if (this.state.fetchStatus !== "idle") {
                    if (this.state.data !== void 0 && n != null && n.cancelRefetch) this.cancel({ silent: !0 });
                    else if (j(this, $e)) return j(this, $e).continueRetry(), j(this, $e).promise;
                }
                if ((t && this.setOptions(t), !this.options.queryFn)) {
                    const g = this.observers.find((h) => h.options.queryFn);
                    g && this.setOptions(g.options);
                }
                const r = new AbortController(),
                    o = (g) => {
                        Object.defineProperty(g, "signal", { enumerable: !0, get: () => (q(this, gr, !0), r.signal) });
                    },
                    s = () => {
                        const g = tv(this.options, n),
                            w = (() => {
                                const v = { client: j(this, mr), queryKey: this.queryKey, meta: this.meta };
                                return o(v), v;
                            })();
                        return q(this, gr, !1), this.options.persister ? this.options.persister(g, w, this) : g(w);
                    },
                    l = (() => {
                        const g = {
                            fetchOptions: n,
                            options: this.options,
                            queryKey: this.queryKey,
                            client: j(this, mr),
                            state: this.state,
                            fetchFn: s,
                        };
                        return o(g), g;
                    })();
                (u = this.options.behavior) == null || u.onFetch(l, this),
                    q(this, hr, this.state),
                    (this.state.fetchStatus === "idle" ||
                        this.state.fetchMeta !== ((c = l.fetchOptions) == null ? void 0 : c.meta)) &&
                        De(this, Lt, un).call(this, {
                            type: "fetch",
                            meta: (f = l.fetchOptions) == null ? void 0 : f.meta,
                        });
                const a = (g) => {
                    var h, w, v, x;
                    (ka(g) && g.silent) || De(this, Lt, un).call(this, { type: "error", error: g }),
                        ka(g) ||
                            ((w = (h = j(this, vt).config).onError) == null || w.call(h, g, this),
                            (x = (v = j(this, vt).config).onSettled) == null || x.call(v, this.state.data, g, this)),
                        this.scheduleGc();
                };
                return (
                    q(
                        this,
                        $e,
                        sv({
                            initialPromise: n == null ? void 0 : n.initialPromise,
                            fn: l.fetchFn,
                            abort: r.abort.bind(r),
                            onSuccess: (g) => {
                                var h, w, v, x;
                                if (g === void 0) {
                                    a(new Error(`${this.queryHash} data is undefined`));
                                    return;
                                }
                                try {
                                    this.setData(g);
                                } catch (m) {
                                    a(m);
                                    return;
                                }
                                (w = (h = j(this, vt).config).onSuccess) == null || w.call(h, g, this),
                                    (x = (v = j(this, vt).config).onSettled) == null ||
                                        x.call(v, g, this.state.error, this),
                                    this.scheduleGc();
                            },
                            onError: a,
                            onFail: (g, h) => {
                                De(this, Lt, un).call(this, { type: "failed", failureCount: g, error: h });
                            },
                            onPause: () => {
                                De(this, Lt, un).call(this, { type: "pause" });
                            },
                            onContinue: () => {
                                De(this, Lt, un).call(this, { type: "continue" });
                            },
                            retry: l.options.retry,
                            retryDelay: l.options.retryDelay,
                            networkMode: l.options.networkMode,
                            canRun: () => !0,
                        })
                    ),
                    j(this, $e).start()
                );
            }
        }),
        (ro = new WeakMap()),
        (hr = new WeakMap()),
        (vt = new WeakMap()),
        (mr = new WeakMap()),
        ($e = new WeakMap()),
        (Ns = new WeakMap()),
        (gr = new WeakMap()),
        (Lt = new WeakSet()),
        (un = function (t) {
            const n = (r) => {
                switch (t.type) {
                    case "failed":
                        return { ...r, fetchFailureCount: t.failureCount, fetchFailureReason: t.error };
                    case "pause":
                        return { ...r, fetchStatus: "paused" };
                    case "continue":
                        return { ...r, fetchStatus: "fetching" };
                    case "fetch":
                        return { ...r, ...Y2(r.data, this.options), fetchMeta: t.meta ?? null };
                    case "success":
                        return (
                            q(this, hr, void 0),
                            {
                                ...r,
                                data: t.data,
                                dataUpdateCount: r.dataUpdateCount + 1,
                                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                                error: null,
                                isInvalidated: !1,
                                status: "success",
                                ...(!t.manual && {
                                    fetchStatus: "idle",
                                    fetchFailureCount: 0,
                                    fetchFailureReason: null,
                                }),
                            }
                        );
                    case "error":
                        const o = t.error;
                        return ka(o) && o.revert && j(this, hr)
                            ? { ...j(this, hr), fetchStatus: "idle" }
                            : {
                                  ...r,
                                  error: o,
                                  errorUpdateCount: r.errorUpdateCount + 1,
                                  errorUpdatedAt: Date.now(),
                                  fetchFailureCount: r.fetchFailureCount + 1,
                                  fetchFailureReason: o,
                                  fetchStatus: "idle",
                                  status: "error",
                              };
                    case "invalidate":
                        return { ...r, isInvalidated: !0 };
                    case "setState":
                        return { ...r, ...t.state };
                }
            };
            (this.state = n(this.state)),
                Ge.batch(() => {
                    this.observers.forEach((r) => {
                        r.onQueryUpdate();
                    }),
                        j(this, vt).notify({ query: this, type: "updated", action: t });
                });
        }),
        mp);
function Y2(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: rv(t.networkMode) ? "fetching" : "paused",
        ...(e === void 0 && { error: null, status: "pending" }),
    };
}
function q2(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData,
        n = t !== void 0,
        r = n ? (typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt) : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? (r ?? Date.now()) : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle",
    };
}
var Yt,
    gp,
    X2 =
        ((gp = class extends Al {
            constructor(t = {}) {
                super();
                ne(this, Yt);
                (this.config = t), q(this, Yt, new Map());
            }
            build(t, n, r) {
                const o = n.queryKey,
                    s = n.queryHash ?? qc(o, n);
                let i = this.get(s);
                return (
                    i ||
                        ((i = new K2({
                            client: t,
                            queryKey: o,
                            queryHash: s,
                            options: t.defaultQueryOptions(n),
                            state: r,
                            defaultOptions: t.getQueryDefaults(o),
                        })),
                        this.add(i)),
                    i
                );
            }
            add(t) {
                j(this, Yt).has(t.queryHash) ||
                    (j(this, Yt).set(t.queryHash, t), this.notify({ type: "added", query: t }));
            }
            remove(t) {
                const n = j(this, Yt).get(t.queryHash);
                n &&
                    (t.destroy(),
                    n === t && j(this, Yt).delete(t.queryHash),
                    this.notify({ type: "removed", query: t }));
            }
            clear() {
                Ge.batch(() => {
                    this.getAll().forEach((t) => {
                        this.remove(t);
                    });
                });
            }
            get(t) {
                return j(this, Yt).get(t);
            }
            getAll() {
                return [...j(this, Yt).values()];
            }
            find(t) {
                const n = { exact: !0, ...t };
                return this.getAll().find((r) => Hf(n, r));
            }
            findAll(t = {}) {
                const n = this.getAll();
                return Object.keys(t).length > 0 ? n.filter((r) => Hf(t, r)) : n;
            }
            notify(t) {
                Ge.batch(() => {
                    this.listeners.forEach((n) => {
                        n(t);
                    });
                });
            }
            onFocus() {
                Ge.batch(() => {
                    this.getAll().forEach((t) => {
                        t.onFocus();
                    });
                });
            }
            onOnline() {
                Ge.batch(() => {
                    this.getAll().forEach((t) => {
                        t.onOnline();
                    });
                });
            }
        }),
        (Yt = new WeakMap()),
        gp),
    qt,
    He,
    vr,
    Xt,
    An,
    vp,
    Z2 =
        ((vp = class extends iv {
            constructor(t) {
                super();
                ne(this, Xt);
                ne(this, qt);
                ne(this, He);
                ne(this, vr);
                (this.mutationId = t.mutationId),
                    q(this, He, t.mutationCache),
                    q(this, qt, []),
                    (this.state = t.state || J2()),
                    this.setOptions(t.options),
                    this.scheduleGc();
            }
            setOptions(t) {
                (this.options = t), this.updateGcTime(this.options.gcTime);
            }
            get meta() {
                return this.options.meta;
            }
            addObserver(t) {
                j(this, qt).includes(t) ||
                    (j(this, qt).push(t),
                    this.clearGcTimeout(),
                    j(this, He).notify({ type: "observerAdded", mutation: this, observer: t }));
            }
            removeObserver(t) {
                q(
                    this,
                    qt,
                    j(this, qt).filter((n) => n !== t)
                ),
                    this.scheduleGc(),
                    j(this, He).notify({ type: "observerRemoved", mutation: this, observer: t });
            }
            optionalRemove() {
                j(this, qt).length || (this.state.status === "pending" ? this.scheduleGc() : j(this, He).remove(this));
            }
            continue() {
                var t;
                return ((t = j(this, vr)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables);
            }
            async execute(t) {
                var s, i, l, a, u, c, f, g, h, w, v, x, m, p, y, S, C, E, k, N;
                const n = () => {
                    De(this, Xt, An).call(this, { type: "continue" });
                };
                q(
                    this,
                    vr,
                    sv({
                        fn: () =>
                            this.options.mutationFn
                                ? this.options.mutationFn(t)
                                : Promise.reject(new Error("No mutationFn found")),
                        onFail: (R, A) => {
                            De(this, Xt, An).call(this, { type: "failed", failureCount: R, error: A });
                        },
                        onPause: () => {
                            De(this, Xt, An).call(this, { type: "pause" });
                        },
                        onContinue: n,
                        retry: this.options.retry ?? 0,
                        retryDelay: this.options.retryDelay,
                        networkMode: this.options.networkMode,
                        canRun: () => j(this, He).canRun(this),
                    })
                );
                const r = this.state.status === "pending",
                    o = !j(this, vr).canStart();
                try {
                    if (r) n();
                    else {
                        De(this, Xt, An).call(this, { type: "pending", variables: t, isPaused: o }),
                            await ((i = (s = j(this, He).config).onMutate) == null ? void 0 : i.call(s, t, this));
                        const A = await ((a = (l = this.options).onMutate) == null ? void 0 : a.call(l, t));
                        A !== this.state.context &&
                            De(this, Xt, An).call(this, { type: "pending", context: A, variables: t, isPaused: o });
                    }
                    const R = await j(this, vr).start();
                    return (
                        await ((c = (u = j(this, He).config).onSuccess) == null
                            ? void 0
                            : c.call(u, R, t, this.state.context, this)),
                        await ((g = (f = this.options).onSuccess) == null
                            ? void 0
                            : g.call(f, R, t, this.state.context)),
                        await ((w = (h = j(this, He).config).onSettled) == null
                            ? void 0
                            : w.call(h, R, null, this.state.variables, this.state.context, this)),
                        await ((x = (v = this.options).onSettled) == null
                            ? void 0
                            : x.call(v, R, null, t, this.state.context)),
                        De(this, Xt, An).call(this, { type: "success", data: R }),
                        R
                    );
                } catch (R) {
                    try {
                        throw (
                            (await ((p = (m = j(this, He).config).onError) == null
                                ? void 0
                                : p.call(m, R, t, this.state.context, this)),
                            await ((S = (y = this.options).onError) == null
                                ? void 0
                                : S.call(y, R, t, this.state.context)),
                            await ((E = (C = j(this, He).config).onSettled) == null
                                ? void 0
                                : E.call(C, void 0, R, this.state.variables, this.state.context, this)),
                            await ((N = (k = this.options).onSettled) == null
                                ? void 0
                                : N.call(k, void 0, R, t, this.state.context)),
                            R)
                        );
                    } finally {
                        De(this, Xt, An).call(this, { type: "error", error: R });
                    }
                } finally {
                    j(this, He).runNext(this);
                }
            }
        }),
        (qt = new WeakMap()),
        (He = new WeakMap()),
        (vr = new WeakMap()),
        (Xt = new WeakSet()),
        (An = function (t) {
            const n = (r) => {
                switch (t.type) {
                    case "failed":
                        return { ...r, failureCount: t.failureCount, failureReason: t.error };
                    case "pause":
                        return { ...r, isPaused: !0 };
                    case "continue":
                        return { ...r, isPaused: !1 };
                    case "pending":
                        return {
                            ...r,
                            context: t.context,
                            data: void 0,
                            failureCount: 0,
                            failureReason: null,
                            error: null,
                            isPaused: t.isPaused,
                            status: "pending",
                            variables: t.variables,
                            submittedAt: Date.now(),
                        };
                    case "success":
                        return {
                            ...r,
                            data: t.data,
                            failureCount: 0,
                            failureReason: null,
                            error: null,
                            status: "success",
                            isPaused: !1,
                        };
                    case "error":
                        return {
                            ...r,
                            data: void 0,
                            error: t.error,
                            failureCount: r.failureCount + 1,
                            failureReason: t.error,
                            isPaused: !1,
                            status: "error",
                        };
                }
            };
            (this.state = n(this.state)),
                Ge.batch(() => {
                    j(this, qt).forEach((r) => {
                        r.onMutationUpdate(t);
                    }),
                        j(this, He).notify({ mutation: this, type: "updated", action: t });
                });
        }),
        vp);
function J2() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0,
    };
}
var fn,
    It,
    Ps,
    yp,
    eS =
        ((yp = class extends Al {
            constructor(t = {}) {
                super();
                ne(this, fn);
                ne(this, It);
                ne(this, Ps);
                (this.config = t), q(this, fn, new Set()), q(this, It, new Map()), q(this, Ps, 0);
            }
            build(t, n, r) {
                const o = new Z2({
                    mutationCache: this,
                    mutationId: ++Us(this, Ps)._,
                    options: t.defaultMutationOptions(n),
                    state: r,
                });
                return this.add(o), o;
            }
            add(t) {
                j(this, fn).add(t);
                const n = ci(t);
                if (typeof n == "string") {
                    const r = j(this, It).get(n);
                    r ? r.push(t) : j(this, It).set(n, [t]);
                }
                this.notify({ type: "added", mutation: t });
            }
            remove(t) {
                if (j(this, fn).delete(t)) {
                    const n = ci(t);
                    if (typeof n == "string") {
                        const r = j(this, It).get(n);
                        if (r)
                            if (r.length > 1) {
                                const o = r.indexOf(t);
                                o !== -1 && r.splice(o, 1);
                            } else r[0] === t && j(this, It).delete(n);
                    }
                }
                this.notify({ type: "removed", mutation: t });
            }
            canRun(t) {
                const n = ci(t);
                if (typeof n == "string") {
                    const r = j(this, It).get(n),
                        o = r == null ? void 0 : r.find((s) => s.state.status === "pending");
                    return !o || o === t;
                } else return !0;
            }
            runNext(t) {
                var r;
                const n = ci(t);
                if (typeof n == "string") {
                    const o = (r = j(this, It).get(n)) == null ? void 0 : r.find((s) => s !== t && s.state.isPaused);
                    return (o == null ? void 0 : o.continue()) ?? Promise.resolve();
                } else return Promise.resolve();
            }
            clear() {
                Ge.batch(() => {
                    j(this, fn).forEach((t) => {
                        this.notify({ type: "removed", mutation: t });
                    }),
                        j(this, fn).clear(),
                        j(this, It).clear();
                });
            }
            getAll() {
                return Array.from(j(this, fn));
            }
            find(t) {
                const n = { exact: !0, ...t };
                return this.getAll().find((r) => Qf(n, r));
            }
            findAll(t = {}) {
                return this.getAll().filter((n) => Qf(t, n));
            }
            notify(t) {
                Ge.batch(() => {
                    this.listeners.forEach((n) => {
                        n(t);
                    });
                });
            }
            resumePausedMutations() {
                const t = this.getAll().filter((n) => n.state.isPaused);
                return Ge.batch(() => Promise.all(t.map((n) => n.continue().catch(_t))));
            }
        }),
        (fn = new WeakMap()),
        (It = new WeakMap()),
        (Ps = new WeakMap()),
        yp);
function ci(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id;
}
function Yf(e) {
    return {
        onFetch: (t, n) => {
            var c, f, g, h, w;
            const r = t.options,
                o =
                    (g = (f = (c = t.fetchOptions) == null ? void 0 : c.meta) == null ? void 0 : f.fetchMore) == null
                        ? void 0
                        : g.direction,
                s = ((h = t.state.data) == null ? void 0 : h.pages) || [],
                i = ((w = t.state.data) == null ? void 0 : w.pageParams) || [];
            let l = { pages: [], pageParams: [] },
                a = 0;
            const u = async () => {
                let v = !1;
                const x = (y) => {
                        Object.defineProperty(y, "signal", {
                            enumerable: !0,
                            get: () => (
                                t.signal.aborted
                                    ? (v = !0)
                                    : t.signal.addEventListener("abort", () => {
                                          v = !0;
                                      }),
                                t.signal
                            ),
                        });
                    },
                    m = tv(t.options, t.fetchOptions),
                    p = async (y, S, C) => {
                        if (v) return Promise.reject();
                        if (S == null && y.pages.length) return Promise.resolve(y);
                        const k = (() => {
                                const D = {
                                    client: t.client,
                                    queryKey: t.queryKey,
                                    pageParam: S,
                                    direction: C ? "backward" : "forward",
                                    meta: t.options.meta,
                                };
                                return x(D), D;
                            })(),
                            N = await m(k),
                            { maxPages: R } = t.options,
                            A = C ? B2 : $2;
                        return { pages: A(y.pages, N, R), pageParams: A(y.pageParams, S, R) };
                    };
                if (o && s.length) {
                    const y = o === "backward",
                        S = y ? tS : qf,
                        C = { pages: s, pageParams: i },
                        E = S(r, C);
                    l = await p(C, E, y);
                } else {
                    const y = e ?? s.length;
                    do {
                        const S = a === 0 ? (i[0] ?? r.initialPageParam) : qf(r, l);
                        if (a > 0 && S == null) break;
                        (l = await p(l, S)), a++;
                    } while (a < y);
                }
                return l;
            };
            t.options.persister
                ? (t.fetchFn = () => {
                      var v, x;
                      return (x = (v = t.options).persister) == null
                          ? void 0
                          : x.call(
                                v,
                                u,
                                { client: t.client, queryKey: t.queryKey, meta: t.options.meta, signal: t.signal },
                                n
                            );
                  })
                : (t.fetchFn = u);
        },
    };
}
function qf(e, { pages: t, pageParams: n }) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function tS(e, { pages: t, pageParams: n }) {
    var r;
    return t.length > 0 ? ((r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n)) : void 0;
}
var xe,
    Fn,
    zn,
    oo,
    so,
    $n,
    io,
    lo,
    xp,
    nS =
        ((xp = class {
            constructor(e = {}) {
                ne(this, xe);
                ne(this, Fn);
                ne(this, zn);
                ne(this, oo);
                ne(this, so);
                ne(this, $n);
                ne(this, io);
                ne(this, lo);
                q(this, xe, e.queryCache || new X2()),
                    q(this, Fn, e.mutationCache || new eS()),
                    q(this, zn, e.defaultOptions || {}),
                    q(this, oo, new Map()),
                    q(this, so, new Map()),
                    q(this, $n, 0);
            }
            mount() {
                Us(this, $n)._++,
                    j(this, $n) === 1 &&
                        (q(
                            this,
                            io,
                            nv.subscribe(async (e) => {
                                e && (await this.resumePausedMutations(), j(this, xe).onFocus());
                            })
                        ),
                        q(
                            this,
                            lo,
                            tl.subscribe(async (e) => {
                                e && (await this.resumePausedMutations(), j(this, xe).onOnline());
                            })
                        ));
            }
            unmount() {
                var e, t;
                Us(this, $n)._--,
                    j(this, $n) === 0 &&
                        ((e = j(this, io)) == null || e.call(this),
                        q(this, io, void 0),
                        (t = j(this, lo)) == null || t.call(this),
                        q(this, lo, void 0));
            }
            isFetching(e) {
                return j(this, xe).findAll({ ...e, fetchStatus: "fetching" }).length;
            }
            isMutating(e) {
                return j(this, Fn).findAll({ ...e, status: "pending" }).length;
            }
            getQueryData(e) {
                var n;
                const t = this.defaultQueryOptions({ queryKey: e });
                return (n = j(this, xe).get(t.queryHash)) == null ? void 0 : n.state.data;
            }
            ensureQueryData(e) {
                const t = this.defaultQueryOptions(e),
                    n = j(this, xe).build(this, t),
                    r = n.state.data;
                return r === void 0
                    ? this.fetchQuery(e)
                    : (e.revalidateIfStale && n.isStaleByTime(ju(t.staleTime, n)) && this.prefetchQuery(t),
                      Promise.resolve(r));
            }
            getQueriesData(e) {
                return j(this, xe)
                    .findAll(e)
                    .map(({ queryKey: t, state: n }) => {
                        const r = n.data;
                        return [t, r];
                    });
            }
            setQueryData(e, t, n) {
                const r = this.defaultQueryOptions({ queryKey: e }),
                    o = j(this, xe).get(r.queryHash),
                    s = o == null ? void 0 : o.state.data,
                    i = _2(t, s);
                if (i !== void 0)
                    return j(this, xe)
                        .build(this, r)
                        .setData(i, { ...n, manual: !0 });
            }
            setQueriesData(e, t, n) {
                return Ge.batch(() =>
                    j(this, xe)
                        .findAll(e)
                        .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)])
                );
            }
            getQueryState(e) {
                var n;
                const t = this.defaultQueryOptions({ queryKey: e });
                return (n = j(this, xe).get(t.queryHash)) == null ? void 0 : n.state;
            }
            removeQueries(e) {
                const t = j(this, xe);
                Ge.batch(() => {
                    t.findAll(e).forEach((n) => {
                        t.remove(n);
                    });
                });
            }
            resetQueries(e, t) {
                const n = j(this, xe);
                return Ge.batch(
                    () => (
                        n.findAll(e).forEach((r) => {
                            r.reset();
                        }),
                        this.refetchQueries({ type: "active", ...e }, t)
                    )
                );
            }
            cancelQueries(e, t = {}) {
                const n = { revert: !0, ...t },
                    r = Ge.batch(() =>
                        j(this, xe)
                            .findAll(e)
                            .map((o) => o.cancel(n))
                    );
                return Promise.all(r).then(_t).catch(_t);
            }
            invalidateQueries(e, t = {}) {
                return Ge.batch(
                    () => (
                        j(this, xe)
                            .findAll(e)
                            .forEach((n) => {
                                n.invalidate();
                            }),
                        (e == null ? void 0 : e.refetchType) === "none"
                            ? Promise.resolve()
                            : this.refetchQueries(
                                  {
                                      ...e,
                                      type:
                                          (e == null ? void 0 : e.refetchType) ??
                                          (e == null ? void 0 : e.type) ??
                                          "active",
                                  },
                                  t
                              )
                    )
                );
            }
            refetchQueries(e, t = {}) {
                const n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
                    r = Ge.batch(() =>
                        j(this, xe)
                            .findAll(e)
                            .filter((o) => !o.isDisabled() && !o.isStatic())
                            .map((o) => {
                                let s = o.fetch(void 0, n);
                                return (
                                    n.throwOnError || (s = s.catch(_t)),
                                    o.state.fetchStatus === "paused" ? Promise.resolve() : s
                                );
                            })
                    );
                return Promise.all(r).then(_t);
            }
            fetchQuery(e) {
                const t = this.defaultQueryOptions(e);
                t.retry === void 0 && (t.retry = !1);
                const n = j(this, xe).build(this, t);
                return n.isStaleByTime(ju(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data);
            }
            prefetchQuery(e) {
                return this.fetchQuery(e).then(_t).catch(_t);
            }
            fetchInfiniteQuery(e) {
                return (e.behavior = Yf(e.pages)), this.fetchQuery(e);
            }
            prefetchInfiniteQuery(e) {
                return this.fetchInfiniteQuery(e).then(_t).catch(_t);
            }
            ensureInfiniteQueryData(e) {
                return (e.behavior = Yf(e.pages)), this.ensureQueryData(e);
            }
            resumePausedMutations() {
                return tl.isOnline() ? j(this, Fn).resumePausedMutations() : Promise.resolve();
            }
            getQueryCache() {
                return j(this, xe);
            }
            getMutationCache() {
                return j(this, Fn);
            }
            getDefaultOptions() {
                return j(this, zn);
            }
            setDefaultOptions(e) {
                q(this, zn, e);
            }
            setQueryDefaults(e, t) {
                j(this, oo).set(bs(e), { queryKey: e, defaultOptions: t });
            }
            getQueryDefaults(e) {
                const t = [...j(this, oo).values()],
                    n = {};
                return (
                    t.forEach((r) => {
                        Ss(e, r.queryKey) && Object.assign(n, r.defaultOptions);
                    }),
                    n
                );
            }
            setMutationDefaults(e, t) {
                j(this, so).set(bs(e), { mutationKey: e, defaultOptions: t });
            }
            getMutationDefaults(e) {
                const t = [...j(this, so).values()],
                    n = {};
                return (
                    t.forEach((r) => {
                        Ss(e, r.mutationKey) && Object.assign(n, r.defaultOptions);
                    }),
                    n
                );
            }
            defaultQueryOptions(e) {
                if (e._defaulted) return e;
                const t = { ...j(this, zn).queries, ...this.getQueryDefaults(e.queryKey), ...e, _defaulted: !0 };
                return (
                    t.queryHash || (t.queryHash = qc(t.queryKey, t)),
                    t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
                    t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
                    !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
                    t.queryFn === Xc && (t.enabled = !1),
                    t
                );
            }
            defaultMutationOptions(e) {
                return e != null && e._defaulted
                    ? e
                    : {
                          ...j(this, zn).mutations,
                          ...((e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey)),
                          ...e,
                          _defaulted: !0,
                      };
            }
            clear() {
                j(this, xe).clear(), j(this, Fn).clear();
            }
        }),
        (xe = new WeakMap()),
        (Fn = new WeakMap()),
        (zn = new WeakMap()),
        (oo = new WeakMap()),
        (so = new WeakMap()),
        ($n = new WeakMap()),
        (io = new WeakMap()),
        (lo = new WeakMap()),
        xp),
    rS = b.createContext(void 0),
    oS = ({ client: e, children: t }) => (
        b.useEffect(
            () => (
                e.mount(),
                () => {
                    e.unmount();
                }
            ),
            [e]
        ),
        d.jsx(rS.Provider, { value: e, children: t })
    );
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function nl() {
    return (
        (nl = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        nl.apply(this, arguments)
    );
}
var Vn;
(function (e) {
    (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Vn || (Vn = {}));
const Xf = "popstate";
function sS(e) {
    e === void 0 && (e = {});
    function t(r, o) {
        let { pathname: s, search: i, hash: l } = r.location;
        return Au(
            "",
            { pathname: s, search: i, hash: l },
            (o.state && o.state.usr) || null,
            (o.state && o.state.key) || "default"
        );
    }
    function n(r, o) {
        return typeof o == "string" ? o : av(o);
    }
    return lS(t, n, null, e);
}
function ot(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function lv(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t);
        } catch {}
    }
}
function iS() {
    return Math.random().toString(36).substr(2, 8);
}
function Zf(e, t) {
    return { usr: e.state, key: e.key, idx: t };
}
function Au(e, t, n, r) {
    return (
        n === void 0 && (n = null),
        nl(
            { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
            typeof t == "string" ? Ml(t) : t,
            { state: n, key: (t && t.key) || r || iS() }
        )
    );
}
function av(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return (
        n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
        r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
        t
    );
}
function Ml(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
        let r = e.indexOf("?");
        r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
    }
    return t;
}
function lS(e, t, n, r) {
    r === void 0 && (r = {});
    let { window: o = document.defaultView, v5Compat: s = !1 } = r,
        i = o.history,
        l = Vn.Pop,
        a = null,
        u = c();
    u == null && ((u = 0), i.replaceState(nl({}, i.state, { idx: u }), ""));
    function c() {
        return (i.state || { idx: null }).idx;
    }
    function f() {
        l = Vn.Pop;
        let x = c(),
            m = x == null ? null : x - u;
        (u = x), a && a({ action: l, location: v.location, delta: m });
    }
    function g(x, m) {
        l = Vn.Push;
        let p = Au(v.location, x, m);
        u = c() + 1;
        let y = Zf(p, u),
            S = v.createHref(p);
        try {
            i.pushState(y, "", S);
        } catch (C) {
            if (C instanceof DOMException && C.name === "DataCloneError") throw C;
            o.location.assign(S);
        }
        s && a && a({ action: l, location: v.location, delta: 1 });
    }
    function h(x, m) {
        l = Vn.Replace;
        let p = Au(v.location, x, m);
        u = c();
        let y = Zf(p, u),
            S = v.createHref(p);
        i.replaceState(y, "", S), s && a && a({ action: l, location: v.location, delta: 0 });
    }
    function w(x) {
        let m = o.location.origin !== "null" ? o.location.origin : o.location.href,
            p = typeof x == "string" ? x : av(x);
        return (
            (p = p.replace(/ $/, "%20")),
            ot(m, "No window.location.(origin|href) available to create URL for href: " + p),
            new URL(p, m)
        );
    }
    let v = {
        get action() {
            return l;
        },
        get location() {
            return e(o, i);
        },
        listen(x) {
            if (a) throw new Error("A history only accepts one active listener");
            return (
                o.addEventListener(Xf, f),
                (a = x),
                () => {
                    o.removeEventListener(Xf, f), (a = null);
                }
            );
        },
        createHref(x) {
            return t(o, x);
        },
        createURL: w,
        encodeLocation(x) {
            let m = w(x);
            return { pathname: m.pathname, search: m.search, hash: m.hash };
        },
        push: g,
        replace: h,
        go(x) {
            return i.go(x);
        },
    };
    return v;
}
var Jf;
(function (e) {
    (e.data = "data"), (e.deferred = "deferred"), (e.redirect = "redirect"), (e.error = "error");
})(Jf || (Jf = {}));
function aS(e, t, n) {
    return n === void 0 && (n = "/"), uS(e, t, n, !1);
}
function uS(e, t, n, r) {
    let o = typeof t == "string" ? Ml(t) : t,
        s = dv(o.pathname || "/", n);
    if (s == null) return null;
    let i = uv(e);
    cS(i);
    let l = null;
    for (let a = 0; l == null && a < i.length; ++a) {
        let u = bS(s);
        l = xS(i[a], u, r);
    }
    return l;
}
function uv(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let o = (s, i, l) => {
        let a = {
            relativePath: l === void 0 ? s.path || "" : l,
            caseSensitive: s.caseSensitive === !0,
            childrenIndex: i,
            route: s,
        };
        a.relativePath.startsWith("/") &&
            (ot(
                a.relativePath.startsWith(r),
                'Absolute route path "' +
                    a.relativePath +
                    '" nested under path ' +
                    ('"' + r + '" is not valid. An absolute child route path ') +
                    "must start with the combined path of all its parent routes."
            ),
            (a.relativePath = a.relativePath.slice(r.length)));
        let u = Jr([r, a.relativePath]),
            c = n.concat(a);
        s.children &&
            s.children.length > 0 &&
            (ot(
                s.index !== !0,
                "Index routes must not have child routes. Please remove " +
                    ('all child routes from route path "' + u + '".')
            ),
            uv(s.children, t, c, u)),
            !(s.path == null && !s.index) && t.push({ path: u, score: vS(u, s.index), routesMeta: c });
    };
    return (
        e.forEach((s, i) => {
            var l;
            if (s.path === "" || !((l = s.path) != null && l.includes("?"))) o(s, i);
            else for (let a of cv(s.path)) o(s, i, a);
        }),
        t
    );
}
function cv(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t,
        o = n.endsWith("?"),
        s = n.replace(/\?$/, "");
    if (r.length === 0) return o ? [s, ""] : [s];
    let i = cv(r.join("/")),
        l = [];
    return (
        l.push(...i.map((a) => (a === "" ? s : [s, a].join("/")))),
        o && l.push(...i),
        l.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
    );
}
function cS(e) {
    e.sort((t, n) =>
        t.score !== n.score
            ? n.score - t.score
            : yS(
                  t.routesMeta.map((r) => r.childrenIndex),
                  n.routesMeta.map((r) => r.childrenIndex)
              )
    );
}
const dS = /^:[\w-]+$/,
    fS = 3,
    pS = 2,
    hS = 1,
    mS = 10,
    gS = -2,
    ep = (e) => e === "*";
function vS(e, t) {
    let n = e.split("/"),
        r = n.length;
    return (
        n.some(ep) && (r += gS),
        t && (r += pS),
        n.filter((o) => !ep(o)).reduce((o, s) => o + (dS.test(s) ? fS : s === "" ? hS : mS), r)
    );
}
function yS(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function xS(e, t, n) {
    let { routesMeta: r } = e,
        o = {},
        s = "/",
        i = [];
    for (let l = 0; l < r.length; ++l) {
        let a = r[l],
            u = l === r.length - 1,
            c = s === "/" ? t : t.slice(s.length) || "/",
            f = tp({ path: a.relativePath, caseSensitive: a.caseSensitive, end: u }, c),
            g = a.route;
        if (
            (!f &&
                u &&
                n &&
                !r[r.length - 1].route.index &&
                (f = tp({ path: a.relativePath, caseSensitive: a.caseSensitive, end: !1 }, c)),
            !f)
        )
            return null;
        Object.assign(o, f.params),
            i.push({ params: o, pathname: Jr([s, f.pathname]), pathnameBase: SS(Jr([s, f.pathnameBase])), route: g }),
            f.pathnameBase !== "/" && (s = Jr([s, f.pathnameBase]));
    }
    return i;
}
function tp(e, t) {
    typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = wS(e.path, e.caseSensitive, e.end),
        o = t.match(n);
    if (!o) return null;
    let s = o[0],
        i = s.replace(/(.)\/+$/, "$1"),
        l = o.slice(1);
    return {
        params: r.reduce((u, c, f) => {
            let { paramName: g, isOptional: h } = c;
            if (g === "*") {
                let v = l[f] || "";
                i = s.slice(0, s.length - v.length).replace(/(.)\/+$/, "$1");
            }
            const w = l[f];
            return h && !w ? (u[g] = void 0) : (u[g] = (w || "").replace(/%2F/g, "/")), u;
        }, {}),
        pathname: s,
        pathnameBase: i,
        pattern: e,
    };
}
function wS(e, t, n) {
    t === void 0 && (t = !1),
        n === void 0 && (n = !0),
        lv(
            e === "*" || !e.endsWith("*") || e.endsWith("/*"),
            'Route path "' +
                e +
                '" will be treated as if it were ' +
                ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
                "always follow a `/` in the pattern. To get rid of this warning, " +
                ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
        );
    let r = [],
        o =
            "^" +
            e
                .replace(/\/*\*?$/, "")
                .replace(/^\/*/, "/")
                .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
                .replace(
                    /\/:([\w-]+)(\?)?/g,
                    (i, l, a) => (r.push({ paramName: l, isOptional: a != null }), a ? "/?([^\\/]+)?" : "/([^\\/]+)")
                );
    return (
        e.endsWith("*")
            ? (r.push({ paramName: "*" }), (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
            : n
              ? (o += "\\/*$")
              : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
        [new RegExp(o, t ? void 0 : "i"), r]
    );
}
function bS(e) {
    try {
        return e
            .split("/")
            .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
            .join("/");
    } catch (t) {
        return (
            lv(
                !1,
                'The URL path "' +
                    e +
                    '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
                    ("encoding (" + t + ").")
            ),
            e
        );
    }
}
function dv(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/";
}
const Jr = (e) => e.join("/").replace(/\/\/+/g, "/"),
    SS = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function CS(e) {
    return (
        e != null &&
        typeof e.status == "number" &&
        typeof e.statusText == "string" &&
        typeof e.internal == "boolean" &&
        "data" in e
    );
}
const fv = ["post", "put", "patch", "delete"];
new Set(fv);
const ES = ["get", ...fv];
new Set(ES);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function rl() {
    return (
        (rl = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        rl.apply(this, arguments)
    );
}
const kS = b.createContext(null),
    NS = b.createContext(null),
    pv = b.createContext(null),
    _l = b.createContext(null),
    Ll = b.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
    hv = b.createContext(null);
function Zc() {
    return b.useContext(_l) != null;
}
function mv() {
    return Zc() || ot(!1), b.useContext(_l).location;
}
function PS(e, t) {
    return TS(e, t);
}
function TS(e, t, n, r) {
    Zc() || ot(!1);
    let { navigator: o } = b.useContext(pv),
        { matches: s } = b.useContext(Ll),
        i = s[s.length - 1],
        l = i ? i.params : {};
    i && i.pathname;
    let a = i ? i.pathnameBase : "/";
    i && i.route;
    let u = mv(),
        c;
    if (t) {
        var f;
        let x = typeof t == "string" ? Ml(t) : t;
        a === "/" || ((f = x.pathname) != null && f.startsWith(a)) || ot(!1), (c = x);
    } else c = u;
    let g = c.pathname || "/",
        h = g;
    if (a !== "/") {
        let x = a.replace(/^\//, "").split("/");
        h = "/" + g.replace(/^\//, "").split("/").slice(x.length).join("/");
    }
    let w = aS(e, { pathname: h }),
        v = MS(
            w &&
                w.map((x) =>
                    Object.assign({}, x, {
                        params: Object.assign({}, l, x.params),
                        pathname: Jr([a, o.encodeLocation ? o.encodeLocation(x.pathname).pathname : x.pathname]),
                        pathnameBase:
                            x.pathnameBase === "/"
                                ? a
                                : Jr([
                                      a,
                                      o.encodeLocation ? o.encodeLocation(x.pathnameBase).pathname : x.pathnameBase,
                                  ]),
                    })
                ),
            s,
            n,
            r
        );
    return t && v
        ? b.createElement(
              _l.Provider,
              {
                  value: {
                      location: rl({ pathname: "/", search: "", hash: "", state: null, key: "default" }, c),
                      navigationType: Vn.Pop,
                  },
              },
              v
          )
        : v;
}
function jS() {
    let e = DS(),
        t = CS(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
    return b.createElement(
        b.Fragment,
        null,
        b.createElement("h2", null, "Unexpected Application Error!"),
        b.createElement("h3", { style: { fontStyle: "italic" } }, t),
        n ? b.createElement("pre", { style: o }, n) : null,
        null
    );
}
const RS = b.createElement(jS, null);
class AS extends b.Component {
    constructor(t) {
        super(t), (this.state = { location: t.location, revalidation: t.revalidation, error: t.error });
    }
    static getDerivedStateFromError(t) {
        return { error: t };
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || (n.revalidation !== "idle" && t.revalidation === "idle")
            ? { error: t.error, location: t.location, revalidation: t.revalidation }
            : {
                  error: t.error !== void 0 ? t.error : n.error,
                  location: n.location,
                  revalidation: t.revalidation || n.revalidation,
              };
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n);
    }
    render() {
        return this.state.error !== void 0
            ? b.createElement(
                  Ll.Provider,
                  { value: this.props.routeContext },
                  b.createElement(hv.Provider, { value: this.state.error, children: this.props.component })
              )
            : this.props.children;
    }
}
function OS(e) {
    let { routeContext: t, match: n, children: r } = e,
        o = b.useContext(kS);
    return (
        o &&
            o.static &&
            o.staticContext &&
            (n.route.errorElement || n.route.ErrorBoundary) &&
            (o.staticContext._deepestRenderedBoundaryId = n.route.id),
        b.createElement(Ll.Provider, { value: t }, r)
    );
}
function MS(e, t, n, r) {
    var o;
    if ((t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null)) {
        var s;
        if (!n) return null;
        if (n.errors) e = n.matches;
        else if ((s = r) != null && s.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else return null;
    }
    let i = e,
        l = (o = n) == null ? void 0 : o.errors;
    if (l != null) {
        let c = i.findIndex((f) => f.route.id && (l == null ? void 0 : l[f.route.id]) !== void 0);
        c >= 0 || ot(!1), (i = i.slice(0, Math.min(i.length, c + 1)));
    }
    let a = !1,
        u = -1;
    if (n && r && r.v7_partialHydration)
        for (let c = 0; c < i.length; c++) {
            let f = i[c];
            if (((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c), f.route.id)) {
                let { loaderData: g, errors: h } = n,
                    w = f.route.loader && g[f.route.id] === void 0 && (!h || h[f.route.id] === void 0);
                if (f.route.lazy || w) {
                    (a = !0), u >= 0 ? (i = i.slice(0, u + 1)) : (i = [i[0]]);
                    break;
                }
            }
        }
    return i.reduceRight((c, f, g) => {
        let h,
            w = !1,
            v = null,
            x = null;
        n &&
            ((h = l && f.route.id ? l[f.route.id] : void 0),
            (v = f.route.errorElement || RS),
            a &&
                (u < 0 && g === 0
                    ? ((w = !0), (x = null))
                    : u === g && ((w = !0), (x = f.route.hydrateFallbackElement || null))));
        let m = t.concat(i.slice(0, g + 1)),
            p = () => {
                let y;
                return (
                    h
                        ? (y = v)
                        : w
                          ? (y = x)
                          : f.route.Component
                            ? (y = b.createElement(f.route.Component, null))
                            : f.route.element
                              ? (y = f.route.element)
                              : (y = c),
                    b.createElement(OS, {
                        match: f,
                        routeContext: { outlet: c, matches: m, isDataRoute: n != null },
                        children: y,
                    })
                );
            };
        return n && (f.route.ErrorBoundary || f.route.errorElement || g === 0)
            ? b.createElement(AS, {
                  location: n.location,
                  revalidation: n.revalidation,
                  component: v,
                  error: h,
                  children: p(),
                  routeContext: { outlet: null, matches: m, isDataRoute: !0 },
              })
            : p();
    }, null);
}
var Ou = (function (e) {
    return (
        (e.UseBlocker = "useBlocker"),
        (e.UseLoaderData = "useLoaderData"),
        (e.UseActionData = "useActionData"),
        (e.UseRouteError = "useRouteError"),
        (e.UseNavigation = "useNavigation"),
        (e.UseRouteLoaderData = "useRouteLoaderData"),
        (e.UseMatches = "useMatches"),
        (e.UseRevalidator = "useRevalidator"),
        (e.UseNavigateStable = "useNavigate"),
        (e.UseRouteId = "useRouteId"),
        e
    );
})(Ou || {});
function _S(e) {
    let t = b.useContext(NS);
    return t || ot(!1), t;
}
function LS(e) {
    let t = b.useContext(Ll);
    return t || ot(!1), t;
}
function IS(e) {
    let t = LS(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || ot(!1), n.route.id;
}
function DS() {
    var e;
    let t = b.useContext(hv),
        n = _S(Ou.UseRouteError),
        r = IS(Ou.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function FS(e, t) {
    e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath;
}
function Mu(e) {
    ot(!1);
}
function zS(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: o = Vn.Pop,
        navigator: s,
        static: i = !1,
        future: l,
    } = e;
    Zc() && ot(!1);
    let a = t.replace(/^\/*/, "/"),
        u = b.useMemo(
            () => ({ basename: a, navigator: s, static: i, future: rl({ v7_relativeSplatPath: !1 }, l) }),
            [a, l, s, i]
        );
    typeof r == "string" && (r = Ml(r));
    let { pathname: c = "/", search: f = "", hash: g = "", state: h = null, key: w = "default" } = r,
        v = b.useMemo(() => {
            let x = dv(c, a);
            return x == null
                ? null
                : { location: { pathname: x, search: f, hash: g, state: h, key: w }, navigationType: o };
        }, [a, c, f, g, h, w, o]);
    return v == null
        ? null
        : b.createElement(pv.Provider, { value: u }, b.createElement(_l.Provider, { children: n, value: v }));
}
function $S(e) {
    let { children: t, location: n } = e;
    return PS(_u(t), n);
}
new Promise(() => {});
function _u(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return (
        b.Children.forEach(e, (r, o) => {
            if (!b.isValidElement(r)) return;
            let s = [...t, o];
            if (r.type === b.Fragment) {
                n.push.apply(n, _u(r.props.children, s));
                return;
            }
            r.type !== Mu && ot(!1), !r.props.index || !r.props.children || ot(!1);
            let i = {
                id: r.props.id || s.join("-"),
                caseSensitive: r.props.caseSensitive,
                element: r.props.element,
                Component: r.props.Component,
                index: r.props.index,
                path: r.props.path,
                loader: r.props.loader,
                action: r.props.action,
                errorElement: r.props.errorElement,
                ErrorBoundary: r.props.ErrorBoundary,
                hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
                shouldRevalidate: r.props.shouldRevalidate,
                handle: r.props.handle,
                lazy: r.props.lazy,
            };
            r.props.children && (i.children = _u(r.props.children, s)), n.push(i);
        }),
        n
    );
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const BS = "6";
try {
    window.__reactRouterVersion = BS;
} catch {}
const US = "startTransition",
    np = Uu[US];
function VS(e) {
    let { basename: t, children: n, future: r, window: o } = e,
        s = b.useRef();
    s.current == null && (s.current = sS({ window: o, v5Compat: !0 }));
    let i = s.current,
        [l, a] = b.useState({ action: i.action, location: i.location }),
        { v7_startTransition: u } = r || {},
        c = b.useCallback(
            (f) => {
                u && np ? np(() => a(f)) : a(f);
            },
            [a, u]
        );
    return (
        b.useLayoutEffect(() => i.listen(c), [i, c]),
        b.useEffect(() => FS(r), [r]),
        b.createElement(zS, {
            basename: t,
            children: n,
            location: l.location,
            navigationType: l.action,
            navigator: i,
            future: r,
        })
    );
}
var rp;
(function (e) {
    (e.UseScrollRestoration = "useScrollRestoration"),
        (e.UseSubmit = "useSubmit"),
        (e.UseSubmitFetcher = "useSubmitFetcher"),
        (e.UseFetcher = "useFetcher"),
        (e.useViewTransitionState = "useViewTransitionState");
})(rp || (rp = {}));
var op;
(function (e) {
    (e.UseFetcher = "useFetcher"), (e.UseFetchers = "useFetchers"), (e.UseScrollRestoration = "useScrollRestoration");
})(op || (op = {}));
const WS = cg(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-heading",
        {
            variants: {
                variant: {
                    default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg",
                    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                    outline:
                        "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
                    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                    ghost: "hover:bg-accent hover:text-accent-foreground",
                    link: "text-primary underline-offset-4 hover:underline",
                    accent: "bg-accent text-white hover:shadow-glow hover:scale-[1.02] active:scale-[0.98]",
                    hero: "bg-accent text-white hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] shadow-lg",
                    heroOutline:
                        "border-2 border-white/40 bg-white/10 text-white hover:bg-white/20 hover:border-white/60 backdrop-blur-sm",
                    service:
                        "bg-cyan text-white hover:bg-cyan/90 hover:shadow-md hover:scale-[1.01] active:scale-[0.99]",
                    cyan: "bg-cyan text-white hover:bg-cyan/90 hover:shadow-cyan-glow hover:scale-[1.02] active:scale-[0.98]",
                },
                size: {
                    default: "h-11 px-6 py-2",
                    sm: "h-9 rounded-md px-4",
                    lg: "h-14 rounded-lg px-8 text-base",
                    xl: "h-16 rounded-xl px-10 text-lg",
                    icon: "h-10 w-10",
                },
            },
            defaultVariants: { variant: "default", size: "default" },
        }
    ),
    ft = b.forwardRef(({ className: e, variant: t, size: n, asChild: r = !1, ...o }, s) => {
        const i = r ? Nx : "button";
        return d.jsx(i, { className: Me(WS({ variant: t, size: n, className: e })), ref: s, ...o });
    });
ft.displayName = "Button";
const HS = "/assets/logo-header-color-DSdCrlEa.png",
    sp = [
        { label: "Our Services", href: "#services" },
        { label: "Why Choose Us", href: "#why-choose-us" },
        { label: "Testimonials", href: "#reviews" },
        { label: "Our Location", href: "#location" },
        { label: "Contact Us", href: "#contact" },
    ],
    QS = () => {
        const [e, t] = b.useState(!1);
        return d.jsx("header", {
            className: "bg-card/95 border-b border-border sticky top-0 z-50 backdrop-blur-md",
            children: d.jsxs("div", {
                className: "container",
                children: [
                    d.jsxs("div", {
                        className: "flex items-center justify-between h-24 py-3",
                        children: [
                            d.jsx("a", {
                                href: "/",
                                className: "flex items-center gap-2",
                                children: d.jsx("img", { src: HS, alt: "BMFixPhones Logo", className: "h-28 w-auto" }),
                            }),
                            d.jsx("nav", {
                                className: "hidden lg:flex items-center gap-5",
                                children: sp.map((n) =>
                                    d.jsx(
                                        "a",
                                        {
                                            href: n.href,
                                            className:
                                                "text-sm font-bold text-muted-foreground hover:text-foreground transition-colors",
                                            children: n.label,
                                        },
                                        n.href
                                    )
                                ),
                            }),
                            d.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    d.jsxs("a", {
                                        href: "tel:+971501675005",
                                        className:
                                            "hidden sm:flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors",
                                        children: [
                                            d.jsx(zc, { className: "w-3.5 h-3.5" }),
                                            d.jsx("span", { className: "text-xs font-medium", children: "Call Us" }),
                                        ],
                                    }),
                                    d.jsx("a", {
                                        href: "https://web.whatsapp.com/send?phone=971501675005&text=",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: d.jsxs(ft, {
                                            size: "sm",
                                            className:
                                                "hidden sm:inline-flex text-sm px-4 py-1.5 h-8 gap-1.5 bg-[#25D366] hover:bg-[#128C7E] text-white border-none",
                                            children: [
                                                d.jsx("svg", {
                                                    className: "w-4 h-4",
                                                    viewBox: "0 0 24 24",
                                                    fill: "currentColor",
                                                    children: d.jsx("path", {
                                                        d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
                                                    }),
                                                }),
                                                "Get Price",
                                            ],
                                        }),
                                    }),
                                    d.jsx("button", {
                                        className: "lg:hidden p-2 text-muted-foreground hover:text-foreground",
                                        onClick: () => t(!e),
                                        "aria-label": "Toggle menu",
                                        children: e
                                            ? d.jsx(fg, { className: "w-6 h-6" })
                                            : d.jsx(P1, { className: "w-6 h-6" }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    e &&
                        d.jsx("nav", {
                            className: "lg:hidden py-4 border-t border-border",
                            children: d.jsxs("div", {
                                className: "flex flex-col gap-3",
                                children: [
                                    sp.map((n) =>
                                        d.jsx(
                                            "a",
                                            {
                                                href: n.href,
                                                className:
                                                    "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2",
                                                onClick: () => t(!1),
                                                children: n.label,
                                            },
                                            n.href
                                        )
                                    ),
                                    d.jsx(ft, {
                                        variant: "accent",
                                        size: "sm",
                                        className: "mt-2 w-fit",
                                        children: "Get Price",
                                    }),
                                ],
                            }),
                        }),
                ],
            }),
        });
    };
function GS(e) {
    return Object.prototype.toString.call(e) === "[object Object]";
}
function ip(e) {
    return GS(e) || Array.isArray(e);
}
function KS() {
    return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Jc(e, t) {
    const n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    const o = JSON.stringify(Object.keys(e.breakpoints || {})),
        s = JSON.stringify(Object.keys(t.breakpoints || {}));
    return o !== s
        ? !1
        : n.every((i) => {
              const l = e[i],
                  a = t[i];
              return typeof l == "function" ? `${l}` == `${a}` : !ip(l) || !ip(a) ? l === a : Jc(l, a);
          });
}
function lp(e) {
    return e
        .concat()
        .sort((t, n) => (t.name > n.name ? 1 : -1))
        .map((t) => t.options);
}
function YS(e, t) {
    if (e.length !== t.length) return !1;
    const n = lp(e),
        r = lp(t);
    return n.every((o, s) => {
        const i = r[s];
        return Jc(o, i);
    });
}
function ed(e) {
    return typeof e == "number";
}
function Lu(e) {
    return typeof e == "string";
}
function Il(e) {
    return typeof e == "boolean";
}
function ap(e) {
    return Object.prototype.toString.call(e) === "[object Object]";
}
function he(e) {
    return Math.abs(e);
}
function td(e) {
    return Math.sign(e);
}
function es(e, t) {
    return he(e - t);
}
function qS(e, t) {
    if (e === 0 || t === 0 || he(e) <= he(t)) return 0;
    const n = es(he(e), he(t));
    return he(n / e);
}
function XS(e) {
    return Math.round(e * 100) / 100;
}
function Cs(e) {
    return Es(e).map(Number);
}
function Bt(e) {
    return e[Is(e)];
}
function Is(e) {
    return Math.max(0, e.length - 1);
}
function nd(e, t) {
    return t === Is(e);
}
function up(e, t = 0) {
    return Array.from(Array(e), (n, r) => t + r);
}
function Es(e) {
    return Object.keys(e);
}
function gv(e, t) {
    return [e, t].reduce(
        (n, r) => (
            Es(r).forEach((o) => {
                const s = n[o],
                    i = r[o],
                    l = ap(s) && ap(i);
                n[o] = l ? gv(s, i) : i;
            }),
            n
        ),
        {}
    );
}
function Iu(e, t) {
    return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function ZS(e, t) {
    const n = { start: r, center: o, end: s };
    function r() {
        return 0;
    }
    function o(a) {
        return s(a) / 2;
    }
    function s(a) {
        return t - a;
    }
    function i(a, u) {
        return Lu(e) ? n[e](a) : e(t, a, u);
    }
    return { measure: i };
}
function ks() {
    let e = [];
    function t(o, s, i, l = { passive: !0 }) {
        let a;
        if ("addEventListener" in o) o.addEventListener(s, i, l), (a = () => o.removeEventListener(s, i, l));
        else {
            const u = o;
            u.addListener(i), (a = () => u.removeListener(i));
        }
        return e.push(a), r;
    }
    function n() {
        e = e.filter((o) => o());
    }
    const r = { add: t, clear: n };
    return r;
}
function JS(e, t, n, r) {
    const o = ks(),
        s = 1e3 / 60;
    let i = null,
        l = 0,
        a = 0;
    function u() {
        o.add(e, "visibilitychange", () => {
            e.hidden && w();
        });
    }
    function c() {
        h(), o.clear();
    }
    function f(x) {
        if (!a) return;
        i || ((i = x), n(), n());
        const m = x - i;
        for (i = x, l += m; l >= s; ) n(), (l -= s);
        const p = l / s;
        r(p), a && (a = t.requestAnimationFrame(f));
    }
    function g() {
        a || (a = t.requestAnimationFrame(f));
    }
    function h() {
        t.cancelAnimationFrame(a), (i = null), (l = 0), (a = 0);
    }
    function w() {
        (i = null), (l = 0);
    }
    return { init: u, destroy: c, start: g, stop: h, update: n, render: r };
}
function eC(e, t) {
    const n = t === "rtl",
        r = e === "y",
        o = r ? "y" : "x",
        s = r ? "x" : "y",
        i = !r && n ? -1 : 1,
        l = c(),
        a = f();
    function u(w) {
        const { height: v, width: x } = w;
        return r ? v : x;
    }
    function c() {
        return r ? "top" : n ? "right" : "left";
    }
    function f() {
        return r ? "bottom" : n ? "left" : "right";
    }
    function g(w) {
        return w * i;
    }
    return { scroll: o, cross: s, startEdge: l, endEdge: a, measureSize: u, direction: g };
}
function Nr(e = 0, t = 0) {
    const n = he(e - t);
    function r(u) {
        return u < e;
    }
    function o(u) {
        return u > t;
    }
    function s(u) {
        return r(u) || o(u);
    }
    function i(u) {
        return s(u) ? (r(u) ? e : t) : u;
    }
    function l(u) {
        return n ? u - n * Math.ceil((u - t) / n) : u;
    }
    return { length: n, max: t, min: e, constrain: i, reachedAny: s, reachedMax: o, reachedMin: r, removeOffset: l };
}
function vv(e, t, n) {
    const { constrain: r } = Nr(0, e),
        o = e + 1;
    let s = i(t);
    function i(g) {
        return n ? he((o + g) % o) : r(g);
    }
    function l() {
        return s;
    }
    function a(g) {
        return (s = i(g)), f;
    }
    function u(g) {
        return c().set(l() + g);
    }
    function c() {
        return vv(e, l(), n);
    }
    const f = { get: l, set: a, add: u, clone: c };
    return f;
}
function tC(e, t, n, r, o, s, i, l, a, u, c, f, g, h, w, v, x, m, p) {
    const { cross: y, direction: S } = e,
        C = ["INPUT", "SELECT", "TEXTAREA"],
        E = { passive: !1 },
        k = ks(),
        N = ks(),
        R = Nr(50, 225).constrain(h.measure(20)),
        A = { mouse: 300, touch: 400 },
        D = { mouse: 500, touch: 600 },
        L = w ? 43 : 25;
    let H = !1,
        O = 0,
        W = 0,
        B = !1,
        U = !1,
        P = !1,
        T = !1;
    function I(z) {
        if (!p) return;
        function J(Ne) {
            (Il(p) || p(z, Ne)) && ve(Ne);
        }
        const ae = t;
        k.add(ae, "dragstart", (Ne) => Ne.preventDefault(), E)
            .add(ae, "touchmove", () => {}, E)
            .add(ae, "touchend", () => {})
            .add(ae, "touchstart", J)
            .add(ae, "mousedown", J)
            .add(ae, "touchcancel", ye)
            .add(ae, "contextmenu", ye)
            .add(ae, "click", Re, !0);
    }
    function V() {
        k.clear(), N.clear();
    }
    function $() {
        const z = T ? n : t;
        N.add(z, "touchmove", Y, E).add(z, "touchend", ye).add(z, "mousemove", Y, E).add(z, "mouseup", ye);
    }
    function Q(z) {
        const J = z.nodeName || "";
        return C.includes(J);
    }
    function G() {
        return (w ? D : A)[T ? "mouse" : "touch"];
    }
    function se(z, J) {
        const ae = f.add(td(z) * -1),
            Ne = c.byDistance(z, !w).distance;
        return w || he(z) < R ? Ne : x && J ? Ne * 0.5 : c.byIndex(ae.get(), 0).distance;
    }
    function ve(z) {
        const J = Iu(z, r);
        (T = J),
            (P = w && J && !z.buttons && H),
            (H = es(o.get(), i.get()) >= 2),
            !(J && z.button !== 0) &&
                (Q(z.target) ||
                    ((B = !0),
                    s.pointerDown(z),
                    u.useFriction(0).useDuration(0),
                    o.set(i),
                    $(),
                    (O = s.readPoint(z)),
                    (W = s.readPoint(z, y)),
                    g.emit("pointerDown")));
    }
    function Y(z) {
        if (!Iu(z, r) && z.touches.length >= 2) return ye(z);
        const ae = s.readPoint(z),
            Ne = s.readPoint(z, y),
            Ve = es(ae, O),
            st = es(Ne, W);
        if (!U && !T && (!z.cancelable || ((U = Ve > st), !U))) return ye(z);
        const it = s.pointerMove(z);
        Ve > v && (P = !0), u.useFriction(0.3).useDuration(0.75), l.start(), o.add(S(it)), z.preventDefault();
    }
    function ye(z) {
        const ae = c.byDistance(0, !1).index !== f.get(),
            Ne = s.pointerUp(z) * G(),
            Ve = se(S(Ne), ae),
            st = qS(Ne, Ve),
            it = L - 10 * st,
            We = m + st / 50;
        (U = !1),
            (B = !1),
            N.clear(),
            u.useDuration(it).useFriction(We),
            a.distance(Ve, !w),
            (T = !1),
            g.emit("pointerUp");
    }
    function Re(z) {
        P && (z.stopPropagation(), z.preventDefault(), (P = !1));
    }
    function Ce() {
        return B;
    }
    return { init: I, destroy: V, pointerDown: Ce };
}
function nC(e, t) {
    let r, o;
    function s(f) {
        return f.timeStamp;
    }
    function i(f, g) {
        const w = `client${(g || e.scroll) === "x" ? "X" : "Y"}`;
        return (Iu(f, t) ? f : f.touches[0])[w];
    }
    function l(f) {
        return (r = f), (o = f), i(f);
    }
    function a(f) {
        const g = i(f) - i(o),
            h = s(f) - s(r) > 170;
        return (o = f), h && (r = f), g;
    }
    function u(f) {
        if (!r || !o) return 0;
        const g = i(o) - i(r),
            h = s(f) - s(r),
            w = s(f) - s(o) > 170,
            v = g / h;
        return h && !w && he(v) > 0.1 ? v : 0;
    }
    return { pointerDown: l, pointerMove: a, pointerUp: u, readPoint: i };
}
function rC() {
    function e(n) {
        const { offsetTop: r, offsetLeft: o, offsetWidth: s, offsetHeight: i } = n;
        return { top: r, right: o + s, bottom: r + i, left: o, width: s, height: i };
    }
    return { measure: e };
}
function oC(e) {
    function t(r) {
        return e * (r / 100);
    }
    return { measure: t };
}
function sC(e, t, n, r, o, s, i) {
    const l = [e].concat(r);
    let a,
        u,
        c = [],
        f = !1;
    function g(x) {
        return o.measureSize(i.measure(x));
    }
    function h(x) {
        if (!s) return;
        (u = g(e)), (c = r.map(g));
        function m(p) {
            for (const y of p) {
                if (f) return;
                const S = y.target === e,
                    C = r.indexOf(y.target),
                    E = S ? u : c[C],
                    k = g(S ? e : r[C]);
                if (he(k - E) >= 0.5) {
                    x.reInit(), t.emit("resize");
                    break;
                }
            }
        }
        (a = new ResizeObserver((p) => {
            (Il(s) || s(x, p)) && m(p);
        })),
            n.requestAnimationFrame(() => {
                l.forEach((p) => a.observe(p));
            });
    }
    function w() {
        (f = !0), a && a.disconnect();
    }
    return { init: h, destroy: w };
}
function iC(e, t, n, r, o, s) {
    let i = 0,
        l = 0,
        a = o,
        u = s,
        c = e.get(),
        f = 0;
    function g() {
        const E = r.get() - e.get(),
            k = !a;
        let N = 0;
        return (
            k
                ? ((i = 0), n.set(r), e.set(r), (N = E))
                : (n.set(e), (i += E / a), (i *= u), (c += i), e.add(i), (N = c - f)),
            (l = td(N)),
            (f = c),
            C
        );
    }
    function h() {
        const E = r.get() - t.get();
        return he(E) < 0.001;
    }
    function w() {
        return a;
    }
    function v() {
        return l;
    }
    function x() {
        return i;
    }
    function m() {
        return y(o);
    }
    function p() {
        return S(s);
    }
    function y(E) {
        return (a = E), C;
    }
    function S(E) {
        return (u = E), C;
    }
    const C = {
        direction: v,
        duration: w,
        velocity: x,
        seek: g,
        settled: h,
        useBaseFriction: p,
        useBaseDuration: m,
        useFriction: S,
        useDuration: y,
    };
    return C;
}
function lC(e, t, n, r, o) {
    const s = o.measure(10),
        i = o.measure(50),
        l = Nr(0.1, 0.99);
    let a = !1;
    function u() {
        return !(a || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
    }
    function c(h) {
        if (!u()) return;
        const w = e.reachedMin(t.get()) ? "min" : "max",
            v = he(e[w] - t.get()),
            x = n.get() - t.get(),
            m = l.constrain(v / i);
        n.subtract(x * m), !h && he(x) < s && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
    }
    function f(h) {
        a = !h;
    }
    return { shouldConstrain: u, constrain: c, toggleActive: f };
}
function aC(e, t, n, r, o) {
    const s = Nr(-t + e, 0),
        i = f(),
        l = c(),
        a = g();
    function u(w, v) {
        return es(w, v) <= 1;
    }
    function c() {
        const w = i[0],
            v = Bt(i),
            x = i.lastIndexOf(w),
            m = i.indexOf(v) + 1;
        return Nr(x, m);
    }
    function f() {
        return n
            .map((w, v) => {
                const { min: x, max: m } = s,
                    p = s.constrain(w),
                    y = !v,
                    S = nd(n, v);
                return y ? m : S || u(x, p) ? x : u(m, p) ? m : p;
            })
            .map((w) => parseFloat(w.toFixed(3)));
    }
    function g() {
        if (t <= e + o) return [s.max];
        if (r === "keepSnaps") return i;
        const { min: w, max: v } = l;
        return i.slice(w, v);
    }
    return { snapsContained: a, scrollContainLimit: l };
}
function uC(e, t, n) {
    const r = t[0],
        o = n ? r - e : Bt(t);
    return { limit: Nr(o, r) };
}
function cC(e, t, n, r) {
    const s = t.min + 0.1,
        i = t.max + 0.1,
        { reachedMin: l, reachedMax: a } = Nr(s, i);
    function u(g) {
        return g === 1 ? a(n.get()) : g === -1 ? l(n.get()) : !1;
    }
    function c(g) {
        if (!u(g)) return;
        const h = e * (g * -1);
        r.forEach((w) => w.add(h));
    }
    return { loop: c };
}
function dC(e) {
    const { max: t, length: n } = e;
    function r(s) {
        const i = s - t;
        return n ? i / -n : 0;
    }
    return { get: r };
}
function fC(e, t, n, r, o) {
    const { startEdge: s, endEdge: i } = e,
        { groupSlides: l } = o,
        a = f().map(t.measure),
        u = g(),
        c = h();
    function f() {
        return l(r)
            .map((v) => Bt(v)[i] - v[0][s])
            .map(he);
    }
    function g() {
        return r.map((v) => n[s] - v[s]).map((v) => -he(v));
    }
    function h() {
        return l(u)
            .map((v) => v[0])
            .map((v, x) => v + a[x]);
    }
    return { snaps: u, snapsAligned: c };
}
function pC(e, t, n, r, o, s) {
    const { groupSlides: i } = o,
        { min: l, max: a } = r,
        u = c();
    function c() {
        const g = i(s),
            h = !e || t === "keepSnaps";
        return n.length === 1
            ? [s]
            : h
              ? g
              : g.slice(l, a).map((w, v, x) => {
                    const m = !v,
                        p = nd(x, v);
                    if (m) {
                        const y = Bt(x[0]) + 1;
                        return up(y);
                    }
                    if (p) {
                        const y = Is(s) - Bt(x)[0] + 1;
                        return up(y, Bt(x)[0]);
                    }
                    return w;
                });
    }
    return { slideRegistry: u };
}
function hC(e, t, n, r, o) {
    const { reachedAny: s, removeOffset: i, constrain: l } = r;
    function a(w) {
        return w.concat().sort((v, x) => he(v) - he(x))[0];
    }
    function u(w) {
        const v = e ? i(w) : l(w),
            x = t.map((p, y) => ({ diff: c(p - v, 0), index: y })).sort((p, y) => he(p.diff) - he(y.diff)),
            { index: m } = x[0];
        return { index: m, distance: v };
    }
    function c(w, v) {
        const x = [w, w + n, w - n];
        if (!e) return w;
        if (!v) return a(x);
        const m = x.filter((p) => td(p) === v);
        return m.length ? a(m) : Bt(x) - n;
    }
    function f(w, v) {
        const x = t[w] - o.get(),
            m = c(x, v);
        return { index: w, distance: m };
    }
    function g(w, v) {
        const x = o.get() + w,
            { index: m, distance: p } = u(x),
            y = !e && s(x);
        if (!v || y) return { index: m, distance: w };
        const S = t[m] - p,
            C = w + c(S, 0);
        return { index: m, distance: C };
    }
    return { byDistance: g, byIndex: f, shortcut: c };
}
function mC(e, t, n, r, o, s, i) {
    function l(f) {
        const g = f.distance,
            h = f.index !== t.get();
        s.add(g),
            g && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())),
            h && (n.set(t.get()), t.set(f.index), i.emit("select"));
    }
    function a(f, g) {
        const h = o.byDistance(f, g);
        l(h);
    }
    function u(f, g) {
        const h = t.clone().set(f),
            w = o.byIndex(h.get(), g);
        l(w);
    }
    return { distance: a, index: u };
}
function gC(e, t, n, r, o, s, i, l) {
    const a = { passive: !0, capture: !0 };
    let u = 0;
    function c(h) {
        if (!l) return;
        function w(v) {
            if (new Date().getTime() - u > 10) return;
            i.emit("slideFocusStart"), (e.scrollLeft = 0);
            const p = n.findIndex((y) => y.includes(v));
            ed(p) && (o.useDuration(0), r.index(p, 0), i.emit("slideFocus"));
        }
        s.add(document, "keydown", f, !1),
            t.forEach((v, x) => {
                s.add(
                    v,
                    "focus",
                    (m) => {
                        (Il(l) || l(h, m)) && w(x);
                    },
                    a
                );
            });
    }
    function f(h) {
        h.code === "Tab" && (u = new Date().getTime());
    }
    return { init: c };
}
function Uo(e) {
    let t = e;
    function n() {
        return t;
    }
    function r(a) {
        t = i(a);
    }
    function o(a) {
        t += i(a);
    }
    function s(a) {
        t -= i(a);
    }
    function i(a) {
        return ed(a) ? a : a.get();
    }
    return { get: n, set: r, add: o, subtract: s };
}
function yv(e, t) {
    const n = e.scroll === "x" ? i : l,
        r = t.style;
    let o = null,
        s = !1;
    function i(g) {
        return `translate3d(${g}px,0px,0px)`;
    }
    function l(g) {
        return `translate3d(0px,${g}px,0px)`;
    }
    function a(g) {
        if (s) return;
        const h = XS(e.direction(g));
        h !== o && ((r.transform = n(h)), (o = h));
    }
    function u(g) {
        s = !g;
    }
    function c() {
        s || ((r.transform = ""), t.getAttribute("style") || t.removeAttribute("style"));
    }
    return { clear: c, to: a, toggleActive: u };
}
function vC(e, t, n, r, o, s, i, l, a) {
    const c = Cs(o),
        f = Cs(o).reverse(),
        g = m().concat(p());
    function h(k, N) {
        return k.reduce((R, A) => R - o[A], N);
    }
    function w(k, N) {
        return k.reduce((R, A) => (h(R, N) > 0 ? R.concat([A]) : R), []);
    }
    function v(k) {
        return s.map((N, R) => ({ start: N - r[R] + 0.5 + k, end: N + t - 0.5 + k }));
    }
    function x(k, N, R) {
        const A = v(N);
        return k.map((D) => {
            const L = R ? 0 : -n,
                H = R ? n : 0,
                O = R ? "end" : "start",
                W = A[D][O];
            return {
                index: D,
                loopPoint: W,
                slideLocation: Uo(-1),
                translate: yv(e, a[D]),
                target: () => (l.get() > W ? L : H),
            };
        });
    }
    function m() {
        const k = i[0],
            N = w(f, k);
        return x(N, n, !1);
    }
    function p() {
        const k = t - i[0] - 1,
            N = w(c, k);
        return x(N, -n, !0);
    }
    function y() {
        return g.every(({ index: k }) => {
            const N = c.filter((R) => R !== k);
            return h(N, t) <= 0.1;
        });
    }
    function S() {
        g.forEach((k) => {
            const { target: N, translate: R, slideLocation: A } = k,
                D = N();
            D !== A.get() && (R.to(D), A.set(D));
        });
    }
    function C() {
        g.forEach((k) => k.translate.clear());
    }
    return { canLoop: y, clear: C, loop: S, loopPoints: g };
}
function yC(e, t, n) {
    let r,
        o = !1;
    function s(a) {
        if (!n) return;
        function u(c) {
            for (const f of c)
                if (f.type === "childList") {
                    a.reInit(), t.emit("slidesChanged");
                    break;
                }
        }
        (r = new MutationObserver((c) => {
            o || ((Il(n) || n(a, c)) && u(c));
        })),
            r.observe(e, { childList: !0 });
    }
    function i() {
        r && r.disconnect(), (o = !0);
    }
    return { init: s, destroy: i };
}
function xC(e, t, n, r) {
    const o = {};
    let s = null,
        i = null,
        l,
        a = !1;
    function u() {
        (l = new IntersectionObserver(
            (w) => {
                a ||
                    (w.forEach((v) => {
                        const x = t.indexOf(v.target);
                        o[x] = v;
                    }),
                    (s = null),
                    (i = null),
                    n.emit("slidesInView"));
            },
            { root: e.parentElement, threshold: r }
        )),
            t.forEach((w) => l.observe(w));
    }
    function c() {
        l && l.disconnect(), (a = !0);
    }
    function f(w) {
        return Es(o).reduce((v, x) => {
            const m = parseInt(x),
                { isIntersecting: p } = o[m];
            return ((w && p) || (!w && !p)) && v.push(m), v;
        }, []);
    }
    function g(w = !0) {
        if (w && s) return s;
        if (!w && i) return i;
        const v = f(w);
        return w && (s = v), w || (i = v), v;
    }
    return { init: u, destroy: c, get: g };
}
function wC(e, t, n, r, o, s) {
    const { measureSize: i, startEdge: l, endEdge: a } = e,
        u = n[0] && o,
        c = w(),
        f = v(),
        g = n.map(i),
        h = x();
    function w() {
        if (!u) return 0;
        const p = n[0];
        return he(t[l] - p[l]);
    }
    function v() {
        if (!u) return 0;
        const p = s.getComputedStyle(Bt(r));
        return parseFloat(p.getPropertyValue(`margin-${a}`));
    }
    function x() {
        return n
            .map((p, y, S) => {
                const C = !y,
                    E = nd(S, y);
                return C ? g[y] + c : E ? g[y] + f : S[y + 1][l] - p[l];
            })
            .map(he);
    }
    return { slideSizes: g, slideSizesWithGaps: h, startGap: c, endGap: f };
}
function bC(e, t, n, r, o, s, i, l, a) {
    const { startEdge: u, endEdge: c, direction: f } = e,
        g = ed(n);
    function h(m, p) {
        return Cs(m)
            .filter((y) => y % p === 0)
            .map((y) => m.slice(y, y + p));
    }
    function w(m) {
        return m.length
            ? Cs(m)
                  .reduce((p, y, S) => {
                      const C = Bt(p) || 0,
                          E = C === 0,
                          k = y === Is(m),
                          N = o[u] - s[C][u],
                          R = o[u] - s[y][c],
                          A = !r && E ? f(i) : 0,
                          D = !r && k ? f(l) : 0,
                          L = he(R - D - (N + A));
                      return S && L > t + a && p.push(y), k && p.push(m.length), p;
                  }, [])
                  .map((p, y, S) => {
                      const C = Math.max(S[y - 1] || 0);
                      return m.slice(C, p);
                  })
            : [];
    }
    function v(m) {
        return g ? h(m, n) : w(m);
    }
    return { groupSlides: v };
}
function SC(e, t, n, r, o, s, i) {
    const {
            align: l,
            axis: a,
            direction: u,
            startIndex: c,
            loop: f,
            duration: g,
            dragFree: h,
            dragThreshold: w,
            inViewThreshold: v,
            slidesToScroll: x,
            skipSnaps: m,
            containScroll: p,
            watchResize: y,
            watchSlides: S,
            watchDrag: C,
            watchFocus: E,
        } = s,
        k = 2,
        N = rC(),
        R = N.measure(t),
        A = n.map(N.measure),
        D = eC(a, u),
        L = D.measureSize(R),
        H = oC(L),
        O = ZS(l, L),
        W = !f && !!p,
        B = f || !!p,
        { slideSizes: U, slideSizesWithGaps: P, startGap: T, endGap: I } = wC(D, R, A, n, B, o),
        V = bC(D, L, x, f, R, A, T, I, k),
        { snaps: $, snapsAligned: Q } = fC(D, O, R, A, V),
        G = -Bt($) + Bt(P),
        { snapsContained: se, scrollContainLimit: ve } = aC(L, G, Q, p, k),
        Y = W ? se : Q,
        { limit: ye } = uC(G, Y, f),
        Re = vv(Is(Y), c, f),
        Ce = Re.clone(),
        te = Cs(n),
        z = ({ dragHandler: Nt, scrollBody: No, scrollBounds: Rr, options: { loop: Cn } }) => {
            Cn || Rr.constrain(Nt.pointerDown()), No.seek();
        },
        J = (
            {
                scrollBody: Nt,
                translate: No,
                location: Rr,
                offsetLocation: Cn,
                previousLocation: En,
                scrollLooper: zs,
                slideLooper: kn,
                dragHandler: Vl,
                animation: Wl,
                eventHandler: Po,
                scrollBounds: $s,
                options: { loop: Bs },
            },
            Ar
        ) => {
            const Pt = Nt.settled(),
                Hl = !$s.shouldConstrain(),
                K = Bs ? Pt : Pt && Hl,
                re = K && !Vl.pointerDown();
            re && Wl.stop();
            const ie = Rr.get() * Ar + En.get() * (1 - Ar);
            Cn.set(ie),
                Bs && (zs.loop(Nt.direction()), kn.loop()),
                No.to(Cn.get()),
                re && Po.emit("settle"),
                K || Po.emit("scroll");
        },
        ae = JS(
            r,
            o,
            () => z(ko),
            (Nt) => J(ko, Nt)
        ),
        Ne = 0.68,
        Ve = Y[Re.get()],
        st = Uo(Ve),
        it = Uo(Ve),
        We = Uo(Ve),
        Qt = Uo(Ve),
        Et = iC(st, We, it, Qt, g, Ne),
        jr = hC(f, Y, G, ye, Qt),
        kt = mC(ae, Re, Ce, Et, jr, Qt, i),
        Ds = dC(ye),
        Fs = ks(),
        Xe = xC(t, n, i, v),
        { slideRegistry: ln } = pC(W, p, Y, ve, V, te),
        Ul = gC(e, n, ln, kt, Et, Fs, i, E),
        ko = {
            ownerDocument: r,
            ownerWindow: o,
            eventHandler: i,
            containerRect: R,
            slideRects: A,
            animation: ae,
            axis: D,
            dragHandler: tC(D, e, r, o, Qt, nC(D, o), st, ae, kt, Et, jr, Re, i, H, h, w, m, Ne, C),
            eventStore: Fs,
            percentOfView: H,
            index: Re,
            indexPrevious: Ce,
            limit: ye,
            location: st,
            offsetLocation: We,
            previousLocation: it,
            options: s,
            resizeHandler: sC(t, i, o, n, D, y, N),
            scrollBody: Et,
            scrollBounds: lC(ye, We, Qt, Et, H),
            scrollLooper: cC(G, ye, We, [st, We, it, Qt]),
            scrollProgress: Ds,
            scrollSnapList: Y.map(Ds.get),
            scrollSnaps: Y,
            scrollTarget: jr,
            scrollTo: kt,
            slideLooper: vC(D, L, G, U, P, $, Y, We, n),
            slideFocus: Ul,
            slidesHandler: yC(t, i, S),
            slidesInView: Xe,
            slideIndexes: te,
            slideRegistry: ln,
            slidesToScroll: V,
            target: Qt,
            translate: yv(D, t),
        };
    return ko;
}
function CC() {
    let e = {},
        t;
    function n(u) {
        t = u;
    }
    function r(u) {
        return e[u] || [];
    }
    function o(u) {
        return r(u).forEach((c) => c(t, u)), a;
    }
    function s(u, c) {
        return (e[u] = r(u).concat([c])), a;
    }
    function i(u, c) {
        return (e[u] = r(u).filter((f) => f !== c)), a;
    }
    function l() {
        e = {};
    }
    const a = { init: n, emit: o, off: i, on: s, clear: l };
    return a;
}
const EC = {
    align: "center",
    axis: "x",
    container: null,
    slides: null,
    containScroll: "trimSnaps",
    direction: "ltr",
    slidesToScroll: 1,
    inViewThreshold: 0,
    breakpoints: {},
    dragFree: !1,
    dragThreshold: 10,
    loop: !1,
    skipSnaps: !1,
    duration: 25,
    startIndex: 0,
    active: !0,
    watchDrag: !0,
    watchResize: !0,
    watchSlides: !0,
    watchFocus: !0,
};
function kC(e) {
    function t(s, i) {
        return gv(s, i || {});
    }
    function n(s) {
        const i = s.breakpoints || {},
            l = Es(i)
                .filter((a) => e.matchMedia(a).matches)
                .map((a) => i[a])
                .reduce((a, u) => t(a, u), {});
        return t(s, l);
    }
    function r(s) {
        return s
            .map((i) => Es(i.breakpoints || {}))
            .reduce((i, l) => i.concat(l), [])
            .map(e.matchMedia);
    }
    return { mergeOptions: t, optionsAtMedia: n, optionsMediaQueries: r };
}
function NC(e) {
    let t = [];
    function n(s, i) {
        return (
            (t = i.filter(({ options: l }) => e.optionsAtMedia(l).active !== !1)),
            t.forEach((l) => l.init(s, e)),
            i.reduce((l, a) => Object.assign(l, { [a.name]: a }), {})
        );
    }
    function r() {
        t = t.filter((s) => s.destroy());
    }
    return { init: n, destroy: r };
}
function ol(e, t, n) {
    const r = e.ownerDocument,
        o = r.defaultView,
        s = kC(o),
        i = NC(s),
        l = ks(),
        a = CC(),
        { mergeOptions: u, optionsAtMedia: c, optionsMediaQueries: f } = s,
        { on: g, off: h, emit: w } = a,
        v = D;
    let x = !1,
        m,
        p = u(EC, ol.globalOptions),
        y = u(p),
        S = [],
        C,
        E,
        k;
    function N() {
        const { container: te, slides: z } = y;
        E = (Lu(te) ? e.querySelector(te) : te) || e.children[0];
        const ae = Lu(z) ? E.querySelectorAll(z) : z;
        k = [].slice.call(ae || E.children);
    }
    function R(te) {
        const z = SC(e, E, k, r, o, te, a);
        if (te.loop && !z.slideLooper.canLoop()) {
            const J = Object.assign({}, te, { loop: !1 });
            return R(J);
        }
        return z;
    }
    function A(te, z) {
        x ||
            ((p = u(p, te)),
            (y = c(p)),
            (S = z || S),
            N(),
            (m = R(y)),
            f([p, ...S.map(({ options: J }) => J)]).forEach((J) => l.add(J, "change", D)),
            y.active &&
                (m.translate.to(m.location.get()),
                m.animation.init(),
                m.slidesInView.init(),
                m.slideFocus.init(Ce),
                m.eventHandler.init(Ce),
                m.resizeHandler.init(Ce),
                m.slidesHandler.init(Ce),
                m.options.loop && m.slideLooper.loop(),
                E.offsetParent && k.length && m.dragHandler.init(Ce),
                (C = i.init(Ce, S))));
    }
    function D(te, z) {
        const J = V();
        L(), A(u({ startIndex: J }, te), z), a.emit("reInit");
    }
    function L() {
        m.dragHandler.destroy(),
            m.eventStore.clear(),
            m.translate.clear(),
            m.slideLooper.clear(),
            m.resizeHandler.destroy(),
            m.slidesHandler.destroy(),
            m.slidesInView.destroy(),
            m.animation.destroy(),
            i.destroy(),
            l.clear();
    }
    function H() {
        x || ((x = !0), l.clear(), L(), a.emit("destroy"), a.clear());
    }
    function O(te, z, J) {
        !y.active ||
            x ||
            (m.scrollBody.useBaseFriction().useDuration(z === !0 ? 0 : y.duration), m.scrollTo.index(te, J || 0));
    }
    function W(te) {
        const z = m.index.add(1).get();
        O(z, te, -1);
    }
    function B(te) {
        const z = m.index.add(-1).get();
        O(z, te, 1);
    }
    function U() {
        return m.index.add(1).get() !== V();
    }
    function P() {
        return m.index.add(-1).get() !== V();
    }
    function T() {
        return m.scrollSnapList;
    }
    function I() {
        return m.scrollProgress.get(m.offsetLocation.get());
    }
    function V() {
        return m.index.get();
    }
    function $() {
        return m.indexPrevious.get();
    }
    function Q() {
        return m.slidesInView.get();
    }
    function G() {
        return m.slidesInView.get(!1);
    }
    function se() {
        return C;
    }
    function ve() {
        return m;
    }
    function Y() {
        return e;
    }
    function ye() {
        return E;
    }
    function Re() {
        return k;
    }
    const Ce = {
        canScrollNext: U,
        canScrollPrev: P,
        containerNode: ye,
        internalEngine: ve,
        destroy: H,
        off: h,
        on: g,
        emit: w,
        plugins: se,
        previousScrollSnap: $,
        reInit: v,
        rootNode: Y,
        scrollNext: W,
        scrollPrev: B,
        scrollProgress: I,
        scrollSnapList: T,
        scrollTo: O,
        selectedScrollSnap: V,
        slideNodes: Re,
        slidesInView: Q,
        slidesNotInView: G,
    };
    return A(t, n), setTimeout(() => a.emit("init"), 0), Ce;
}
ol.globalOptions = void 0;
function Dl(e = {}, t = []) {
    const n = b.useRef(e),
        r = b.useRef(t),
        [o, s] = b.useState(),
        [i, l] = b.useState(),
        a = b.useCallback(() => {
            o && o.reInit(n.current, r.current);
        }, [o]);
    return (
        b.useEffect(() => {
            Jc(n.current, e) || ((n.current = e), a());
        }, [e, a]),
        b.useEffect(() => {
            YS(r.current, t) || ((r.current = t), a());
        }, [t, a]),
        b.useEffect(() => {
            if (KS() && i) {
                ol.globalOptions = Dl.globalOptions;
                const u = ol(i, n.current, r.current);
                return s(u), () => u.destroy();
            } else s(void 0);
        }, [i, s]),
        [l, o]
    );
}
Dl.globalOptions = void 0;
const PC = "/assets/hero-bg-Bl12wE3h.jpg",
    TC = "/assets/hero-bg-2-CilzjGMb.jpg",
    jC = "/assets/hero-bg-3-ufTrUBSe.jpg",
    RC = "/assets/hero-bg-4-B509AOf3.jpg",
    cp = [PC, TC, jC, RC],
    AC = () => {
        const [e, t] = Dl({ loop: !0 }),
            [n, r] = b.useState(0),
            o = b.useCallback(() => {
                t && r(t.selectedScrollSnap());
            }, [t]);
        return (
            b.useEffect(() => {
                if (!t) return;
                o(), t.on("select", o);
                const s = setInterval(() => {
                    t.scrollNext();
                }, 5e3);
                return () => {
                    t.off("select", o), clearInterval(s);
                };
            }, [t, o]),
            d.jsxs("section", {
                className: "relative overflow-hidden",
                children: [
                    d.jsx("div", {
                        className: "absolute inset-0",
                        ref: e,
                        children: d.jsx("div", {
                            className: "flex h-full",
                            children: cp.map((s, i) =>
                                d.jsx(
                                    "div",
                                    {
                                        className: "flex-[0_0_100%] min-w-0 relative",
                                        children: d.jsx("div", {
                                            className:
                                                "absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700",
                                            style: { backgroundImage: `url(${s})` },
                                        }),
                                    },
                                    i
                                )
                            ),
                        }),
                    }),
                    d.jsx("div", { className: "absolute inset-0 bg-primary/60" }),
                    d.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/50 to-primary/40",
                    }),
                    d.jsxs("div", {
                        className: "absolute inset-0 opacity-20",
                        children: [
                            d.jsx("div", {
                                className: "absolute top-20 left-10 w-64 h-64 rounded-full bg-accent blur-3xl",
                            }),
                            d.jsx("div", {
                                className:
                                    "absolute bottom-10 right-10 w-96 h-96 rounded-full bg-primary-foreground blur-3xl",
                            }),
                        ],
                    }),
                    d.jsx("div", {
                        className: "container relative z-10 py-16 md:py-24 lg:py-32",
                        children: d.jsxs("div", {
                            className: "max-w-4xl mx-auto text-center",
                            children: [
                                d.jsxs("div", {
                                    className:
                                        "animate-fade-in inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6",
                                    children: [
                                        d.jsx(Dc, { className: "w-4 h-4 text-cyan" }),
                                        d.jsx("span", {
                                            className: "text-white text-sm font-medium font-body",
                                            children: "Same Day Repair Service in Dubai",
                                        }),
                                    ],
                                }),
                                d.jsx("h1", {
                                    className:
                                        "animate-fade-in-delay-1 font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4",
                                    children: "Mobile, Tablet and Laptop Repair in Dubai",
                                }),
                                d.jsx("p", {
                                    className:
                                        "animate-fade-in-delay-2 text-xl md:text-2xl text-white/90 font-medium mb-4 font-body",
                                    children: "Fix Your Phone Today, Not Tomorrow",
                                }),
                                d.jsxs("div", {
                                    className:
                                        "animate-fade-in-delay-2 inline-flex items-center gap-2 text-cyan font-semibold text-lg mb-8",
                                    children: [
                                        d.jsx(Su, { className: "w-5 h-5 animate-blink" }),
                                        d.jsx("span", {
                                            className: "animate-blink font-body",
                                            children: "Free Pickup and Delivery (Same Day)",
                                        }),
                                    ],
                                }),
                                d.jsxs("div", {
                                    className: "animate-fade-in-delay-3 flex flex-col sm:flex-row gap-4 justify-center",
                                    children: [
                                        d.jsx("a", {
                                            href: "https://web.whatsapp.com/send?phone=971501675005&text=",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: d.jsx(ft, {
                                                variant: "hero",
                                                size: "xl",
                                                children: "Get Instant Price",
                                            }),
                                        }),
                                        d.jsx("a", {
                                            href: "tel:+971501675005",
                                            children: d.jsx(ft, {
                                                variant: "heroOutline",
                                                size: "xl",
                                                children: "Book Free Pickup",
                                            }),
                                        }),
                                    ],
                                }),
                                d.jsxs("div", {
                                    className:
                                        "animate-fade-in-delay-3 mt-12 flex flex-wrap justify-center gap-6 text-white/80 text-sm font-body",
                                    children: [
                                        d.jsxs("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                d.jsx("div", { className: "w-2 h-2 rounded-full bg-cyan" }),
                                                d.jsx("span", { children: "100% Genuine Parts" }),
                                            ],
                                        }),
                                        d.jsxs("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                d.jsx("div", { className: "w-2 h-2 rounded-full bg-cyan" }),
                                                d.jsx("span", { children: "Warranty Included" }),
                                            ],
                                        }),
                                        d.jsxs("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                d.jsx("div", { className: "w-2 h-2 rounded-full bg-cyan" }),
                                                d.jsx("span", { children: "Pay After Repair" }),
                                            ],
                                        }),
                                    ],
                                }),
                                d.jsx("div", {
                                    className: "animate-fade-in-delay-3 mt-8 flex justify-center gap-2",
                                    children: cp.map((s, i) =>
                                        d.jsx(
                                            "button",
                                            {
                                                onClick: () => (t == null ? void 0 : t.scrollTo(i)),
                                                className: `w-2 h-2 rounded-full transition-all duration-300 ${i === n ? "bg-cyan w-6" : "bg-white/30 hover:bg-white/50"}`,
                                                "aria-label": `Go to slide ${i + 1}`,
                                            },
                                            i
                                        )
                                    ),
                                }),
                            ],
                        }),
                    }),
                ],
            })
        );
    },
    OC = "/assets/service-screen-C1oG_v0e.jpg",
    MC = "/assets/service-battery-BlHazxMT.jpg",
    _C = "/assets/service-body-CFrdxQE8.jpg",
    LC = "/assets/service-water-DP0Zhi1L.jpg",
    IC = "/assets/service-camera-CV5oj6_1.jpg",
    DC = "/assets/service-speaker-CFAiZFlY.jpg",
    FC = "/assets/service-wifi-0TRaJxKO.jpg",
    zC = "/assets/service-backcover-COphfPPK.jpg",
    $C = [
        {
            image: OC,
            title: "Screen Repair",
            description:
                "Cracked or broken screen? We fix all types of screens for phones, tablets, and laptops with original parts.",
            cta: "Get Price for Screen",
        },
        {
            image: MC,
            title: "Battery Replacement",
            description:
                "Device not holding charge? Get a genuine battery replacement and restore your device's full power.",
            cta: "Get Price for Battery",
        },
        {
            image: _C,
            title: "Body Cover / Back Cover",
            description:
                "Damaged back cover or body? We replace it with original parts to make your device look new again.",
            cta: "Get Price for Body Cover",
        },
        {
            image: LC,
            title: "Water Damage Test",
            description:
                "Dropped your device in water? Our experts will test and repair water damage to save your device.",
            cta: "Get Price for Water Test",
        },
        {
            image: IC,
            title: "Camera Repair",
            description: "Blurry photos or camera not working? We fix front and back cameras for all device models.",
            cta: "Get Price for Camera",
        },
        {
            image: DC,
            title: "Speaker Repair",
            description: "No sound or distorted audio? We repair and replace speakers to restore clear sound quality.",
            cta: "Get Price for Speaker",
        },
        {
            image: FC,
            title: "WiFi Card Repair",
            description: "WiFi not connecting? We fix WiFi card issues so you can stay connected without problems.",
            cta: "Get Price for Wifi Card",
        },
        {
            image: zC,
            title: "Back Cover Replacement",
            description:
                "Need a new back cover? We have original covers for most phone models available for same-day replacement.",
            cta: "Get Price",
        },
    ],
    BC = () =>
        d.jsx("section", {
            id: "services",
            className: "py-16 md:py-24 bg-background",
            children: d.jsxs("div", {
                className: "container",
                children: [
                    d.jsxs("div", {
                        className: "text-center mb-12",
                        children: [
                            d.jsx("h2", {
                                className: "font-heading text-3xl md:text-4xl font-bold text-foreground mb-4",
                                children: "Our Repair Services",
                            }),
                            d.jsx("p", {
                                className: "text-muted-foreground text-lg max-w-2xl mx-auto font-body",
                                children:
                                    "Professional repair services for all your devices. Fast turnaround with genuine parts and warranty.",
                            }),
                        ],
                    }),
                    d.jsx("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
                        children: $C.map((e, t) =>
                            d.jsxs(
                                "div",
                                {
                                    className:
                                        "group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border hover:border-cyan/30 flex flex-col",
                                    style: { animationDelay: `${t * 0.05}s` },
                                    children: [
                                        d.jsxs("div", {
                                            className: "relative h-48 overflow-hidden",
                                            children: [
                                                d.jsx("img", {
                                                    src: e.image,
                                                    alt: e.title,
                                                    className:
                                                        "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                                                }),
                                                d.jsx("div", {
                                                    className:
                                                        "absolute inset-0 bg-gradient-to-t from-card/80 to-transparent",
                                                }),
                                            ],
                                        }),
                                        d.jsxs("div", {
                                            className: "p-5 flex flex-col flex-grow",
                                            children: [
                                                d.jsx("h3", {
                                                    className:
                                                        "font-heading text-lg font-semibold text-foreground mb-2",
                                                    children: e.title,
                                                }),
                                                d.jsx("p", {
                                                    className: "text-muted-foreground text-sm mb-4 flex-grow font-body",
                                                    children: e.description,
                                                }),
                                                d.jsxs(ft, {
                                                    variant: "service",
                                                    className: "w-full group/btn",
                                                    children: [
                                                        e.cta,
                                                        d.jsx(ys, {
                                                            className:
                                                                "w-4 h-4 transition-transform group-hover/btn:translate-x-1",
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                },
                                e.title
                            )
                        ),
                    }),
                ],
            }),
        }),
    UC = () =>
        d.jsx("section", {
            className: "py-16 md:py-24 bg-secondary",
            children: d.jsx("div", {
                className: "container",
                children: d.jsx("div", {
                    className: "max-w-4xl mx-auto",
                    children: d.jsx("div", {
                        className: "bg-card rounded-2xl shadow-xl overflow-hidden",
                        children: d.jsxs("div", {
                            className: "grid md:grid-cols-2 gap-0",
                            children: [
                                d.jsxs("div", {
                                    className: "p-8 md:p-12 flex flex-col justify-center",
                                    children: [
                                        d.jsxs("div", {
                                            className:
                                                "inline-flex items-center gap-2 bg-cyan/10 rounded-full px-4 py-2 mb-6 w-fit",
                                            children: [
                                                d.jsx(Su, { className: "w-4 h-4 text-cyan" }),
                                                d.jsx("span", {
                                                    className: "text-cyan font-semibold text-sm font-body",
                                                    children: "Free Service",
                                                }),
                                            ],
                                        }),
                                        d.jsx("h2", {
                                            className:
                                                "font-heading text-3xl md:text-4xl font-bold text-foreground mb-4",
                                            children: "Free Pickup and Delivery (Same Day)",
                                        }),
                                        d.jsx("p", {
                                            className: "text-muted-foreground text-lg mb-6 font-body",
                                            children:
                                                "We collect your device, repair it fast, and return it the same day. No need to visit a shop or wait in line.",
                                        }),
                                        d.jsxs("div", {
                                            className: "flex flex-col sm:flex-row gap-4 mb-8",
                                            children: [
                                                d.jsxs("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        d.jsx("div", {
                                                            className:
                                                                "w-10 h-10 rounded-full bg-cyan/10 flex items-center justify-center",
                                                            children: d.jsx(Dc, { className: "w-5 h-5 text-cyan" }),
                                                        }),
                                                        d.jsx("span", {
                                                            className: "text-foreground font-medium font-body",
                                                            children: "Same Day Return",
                                                        }),
                                                    ],
                                                }),
                                                d.jsxs("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        d.jsx("div", {
                                                            className:
                                                                "w-10 h-10 rounded-full bg-cyan/10 flex items-center justify-center",
                                                            children: d.jsx(j1, { className: "w-5 h-5 text-cyan" }),
                                                        }),
                                                        d.jsx("span", {
                                                            className: "text-foreground font-medium font-body",
                                                            children: "Safe Handling",
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        d.jsxs(ft, {
                                            variant: "cyan",
                                            size: "lg",
                                            className: "w-fit",
                                            children: ["Book Free Pickup Now", d.jsx(ys, { className: "w-4 h-4" })],
                                        }),
                                    ],
                                }),
                                d.jsx("div", {
                                    className: "bg-hero-gradient p-8 md:p-12 flex items-center justify-center",
                                    children: d.jsxs("div", {
                                        className: "text-center",
                                        children: [
                                            d.jsx("div", {
                                                className:
                                                    "w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-6 animate-pulse-glow",
                                                children: d.jsx(Su, { className: "w-12 h-12 text-white" }),
                                            }),
                                            d.jsxs("div", {
                                                className: "space-y-2 text-white",
                                                children: [
                                                    d.jsx("p", {
                                                        className: "text-lg font-medium font-heading",
                                                        children: "How It Works",
                                                    }),
                                                    d.jsxs("div", {
                                                        className:
                                                            "flex flex-col gap-3 text-sm text-white/80 font-body",
                                                        children: [
                                                            d.jsxs("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    d.jsx("span", {
                                                                        className:
                                                                            "w-6 h-6 rounded-full bg-cyan text-white flex items-center justify-center text-xs font-bold",
                                                                        children: "1",
                                                                    }),
                                                                    d.jsx("span", {
                                                                        children: "Book your free pickup",
                                                                    }),
                                                                ],
                                                            }),
                                                            d.jsxs("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    d.jsx("span", {
                                                                        className:
                                                                            "w-6 h-6 rounded-full bg-cyan text-white flex items-center justify-center text-xs font-bold",
                                                                        children: "2",
                                                                    }),
                                                                    d.jsx("span", {
                                                                        children: "We collect your device",
                                                                    }),
                                                                ],
                                                            }),
                                                            d.jsxs("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    d.jsx("span", {
                                                                        className:
                                                                            "w-6 h-6 rounded-full bg-cyan text-white flex items-center justify-center text-xs font-bold",
                                                                        children: "3",
                                                                    }),
                                                                    d.jsx("span", {
                                                                        children: "Fast repair at our center",
                                                                    }),
                                                                ],
                                                            }),
                                                            d.jsxs("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    d.jsx("span", {
                                                                        className:
                                                                            "w-6 h-6 rounded-full bg-cyan text-white flex items-center justify-center text-xs font-bold",
                                                                        children: "4",
                                                                    }),
                                                                    d.jsx("span", {
                                                                        children: "Same day delivery back",
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    }),
                }),
            }),
        }),
    xv = b.createContext(null);
function Fl() {
    const e = b.useContext(xv);
    if (!e) throw new Error("useCarousel must be used within a <Carousel />");
    return e;
}
const wv = b.forwardRef(
    ({ orientation: e = "horizontal", opts: t, setApi: n, plugins: r, className: o, children: s, ...i }, l) => {
        const [a, u] = Dl({ ...t, axis: e === "horizontal" ? "x" : "y" }, r),
            [c, f] = b.useState(!1),
            [g, h] = b.useState(!1),
            w = b.useCallback((p) => {
                p && (f(p.canScrollPrev()), h(p.canScrollNext()));
            }, []),
            v = b.useCallback(() => {
                u == null || u.scrollPrev();
            }, [u]),
            x = b.useCallback(() => {
                u == null || u.scrollNext();
            }, [u]),
            m = b.useCallback(
                (p) => {
                    p.key === "ArrowLeft"
                        ? (p.preventDefault(), v())
                        : p.key === "ArrowRight" && (p.preventDefault(), x());
                },
                [v, x]
            );
        return (
            b.useEffect(() => {
                !u || !n || n(u);
            }, [u, n]),
            b.useEffect(() => {
                if (u)
                    return (
                        w(u),
                        u.on("reInit", w),
                        u.on("select", w),
                        () => {
                            u == null || u.off("select", w);
                        }
                    );
            }, [u, w]),
            d.jsx(xv.Provider, {
                value: {
                    carouselRef: a,
                    api: u,
                    opts: t,
                    orientation: e || ((t == null ? void 0 : t.axis) === "y" ? "vertical" : "horizontal"),
                    scrollPrev: v,
                    scrollNext: x,
                    canScrollPrev: c,
                    canScrollNext: g,
                },
                children: d.jsx("div", {
                    ref: l,
                    onKeyDownCapture: m,
                    className: Me("relative", o),
                    role: "region",
                    "aria-roledescription": "carousel",
                    ...i,
                    children: s,
                }),
            })
        );
    }
);
wv.displayName = "Carousel";
const bv = b.forwardRef(({ className: e, ...t }, n) => {
    const { carouselRef: r, orientation: o } = Fl();
    return d.jsx("div", {
        ref: r,
        className: "overflow-hidden",
        children: d.jsx("div", {
            ref: n,
            className: Me("flex", o === "horizontal" ? "-ml-4" : "-mt-4 flex-col", e),
            ...t,
        }),
    });
});
bv.displayName = "CarouselContent";
const Sv = b.forwardRef(({ className: e, ...t }, n) => {
    const { orientation: r } = Fl();
    return d.jsx("div", {
        ref: n,
        role: "group",
        "aria-roledescription": "slide",
        className: Me("min-w-0 shrink-0 grow-0 basis-full", r === "horizontal" ? "pl-4" : "pt-4", e),
        ...t,
    });
});
Sv.displayName = "CarouselItem";
const Cv = b.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
    const { orientation: s, scrollPrev: i, canScrollPrev: l } = Fl();
    return d.jsxs(ft, {
        ref: o,
        variant: t,
        size: n,
        className: Me(
            "absolute h-8 w-8 rounded-full",
            s === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
            e
        ),
        disabled: !l,
        onClick: i,
        ...r,
        children: [
            d.jsx(x1, { className: "h-4 w-4" }),
            d.jsx("span", { className: "sr-only", children: "Previous slide" }),
        ],
    });
});
Cv.displayName = "CarouselPrevious";
const Ev = b.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
    const { orientation: s, scrollNext: i, canScrollNext: l } = Fl();
    return d.jsxs(ft, {
        ref: o,
        variant: t,
        size: n,
        className: Me(
            "absolute h-8 w-8 rounded-full",
            s === "horizontal"
                ? "-right-12 top-1/2 -translate-y-1/2"
                : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
            e
        ),
        disabled: !l,
        onClick: i,
        ...r,
        children: [
            d.jsx(ys, { className: "h-4 w-4" }),
            d.jsx("span", { className: "sr-only", children: "Next slide" }),
        ],
    });
});
Ev.displayName = "CarouselNext";
const VC = {
    active: !0,
    breakpoints: {},
    delay: 4e3,
    jump: !1,
    playOnInit: !0,
    stopOnFocusIn: !0,
    stopOnInteraction: !0,
    stopOnMouseEnter: !1,
    stopOnLastSnap: !1,
    rootNode: null,
};
function WC(e, t) {
    const n = e.scrollSnapList();
    return typeof t == "number" ? n.map(() => t) : t(n, e);
}
function HC(e, t) {
    const n = e.rootNode();
    return (t && t(n)) || n;
}
function rd(e = {}) {
    let t,
        n,
        r,
        o,
        s = null,
        i = 0,
        l = !1,
        a = !1,
        u = !1,
        c = !1;
    function f(O, W) {
        n = O;
        const { mergeOptions: B, optionsAtMedia: U } = W,
            P = B(VC, rd.globalOptions),
            T = B(P, e);
        if (((t = U(T)), n.scrollSnapList().length <= 1)) return;
        (c = t.jump), (r = !1), (o = WC(n, t.delay));
        const { eventStore: I, ownerDocument: V } = n.internalEngine(),
            $ = !!n.internalEngine().options.watchDrag,
            Q = HC(n, t.rootNode);
        I.add(V, "visibilitychange", m),
            $ && n.on("pointerDown", y),
            $ && !t.stopOnInteraction && n.on("pointerUp", S),
            t.stopOnMouseEnter && I.add(Q, "mouseenter", C),
            t.stopOnMouseEnter && !t.stopOnInteraction && I.add(Q, "mouseleave", E),
            t.stopOnFocusIn && n.on("slideFocusStart", x),
            t.stopOnFocusIn && !t.stopOnInteraction && I.add(n.containerNode(), "focusout", v),
            t.playOnInit && v();
    }
    function g() {
        n.off("pointerDown", y).off("pointerUp", S).off("slideFocusStart", x), x(), (r = !0), (l = !1);
    }
    function h() {
        const { ownerWindow: O } = n.internalEngine();
        O.clearTimeout(i),
            (i = O.setTimeout(D, o[n.selectedScrollSnap()])),
            (s = new Date().getTime()),
            n.emit("autoplay:timerset");
    }
    function w() {
        const { ownerWindow: O } = n.internalEngine();
        O.clearTimeout(i), (i = 0), (s = null), n.emit("autoplay:timerstopped");
    }
    function v() {
        if (!r) {
            if (p()) {
                u = !0;
                return;
            }
            l || n.emit("autoplay:play"), h(), (l = !0);
        }
    }
    function x() {
        r || (l && n.emit("autoplay:stop"), w(), (l = !1));
    }
    function m() {
        if (p()) return (u = l), x();
        u && v();
    }
    function p() {
        const { ownerDocument: O } = n.internalEngine();
        return O.visibilityState === "hidden";
    }
    function y() {
        a || x();
    }
    function S() {
        a || v();
    }
    function C() {
        (a = !0), x();
    }
    function E() {
        (a = !1), v();
    }
    function k(O) {
        typeof O < "u" && (c = O), v();
    }
    function N() {
        l && x();
    }
    function R() {
        l && v();
    }
    function A() {
        return l;
    }
    function D() {
        const { index: O } = n.internalEngine(),
            W = O.clone().add(1).get(),
            B = n.scrollSnapList().length - 1,
            U = t.stopOnLastSnap && W === B;
        if ((n.canScrollNext() ? n.scrollNext(c) : n.scrollTo(0, c), n.emit("autoplay:select"), U)) return x();
        v();
    }
    function L() {
        if (!s) return null;
        const O = o[n.selectedScrollSnap()],
            W = new Date().getTime() - s;
        return O - W;
    }
    return {
        name: "autoplay",
        options: e,
        init: f,
        destroy: g,
        play: k,
        stop: N,
        reset: R,
        isPlaying: A,
        timeUntilNext: L,
    };
}
rd.globalOptions = void 0;
const dp = [
        {
            name: "Sherrie",
            rating: 5,
            review: "Very fast service.... my phone was fixed and delivered back to me within a few hours. Great company if you are in a rush and need your phone fixing swiftly.",
        },
        {
            name: "Paulina Crosby-Bennin",
            rating: 5,
            review: "Brilliant service. I was scared at first that my phone will be stolen but I am so pleased with the service. I recommend this company to anyone who has a phone issue in Dubai.",
        },
        {
            name: "Daniel Nieto",
            rating: 5,
            review: "Superb service. Needed my Samsung Galaxy S24+ fixed as one of the microphones stopped working. Where Samsung told me it could not be done (it's an American spec phone) they were able to fix it. The suggestion Samsung gave me was to travel to the USA and then get the phone serviced there, what they should've recommended is to take it to Baitul Madina.",
        },
        {
            name: "Jarryn Van Dyk",
            rating: 5,
            review: "Sent my laptop in for repair as it was not switching on. My laptop was collected within 20 minutes after contacting them. The problem was diagnosed quickly and the repair was done. I received my laptop the same day. Great service, quality repair and fast.",
        },
    ],
    QC = () =>
        d.jsxs("section", {
            id: "reviews",
            className: "py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden",
            children: [
                d.jsx("div", {
                    className:
                        "absolute top-0 left-0 w-72 h-72 bg-cyan/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2",
                }),
                d.jsx("div", {
                    className:
                        "absolute bottom-0 right-0 w-96 h-96 bg-magenta/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2",
                }),
                d.jsxs("div", {
                    className: "container relative z-10",
                    children: [
                        d.jsxs("div", {
                            className: "text-center mb-14",
                            children: [
                                d.jsx("span", {
                                    className:
                                        "inline-block px-4 py-1.5 bg-cyan/10 text-cyan text-sm font-semibold rounded-full mb-4 font-body",
                                    children: "Customer Reviews",
                                }),
                                d.jsxs("div", {
                                    className: "inline-flex items-center gap-1.5 mb-5 justify-center w-full",
                                    children: [
                                        [...Array(5)].map((e, t) =>
                                            d.jsx(
                                                Tf,
                                                { className: "w-7 h-7 fill-accent text-accent drop-shadow-sm" },
                                                t
                                            )
                                        ),
                                        d.jsx("span", {
                                            className: "ml-2 text-foreground font-bold text-xl font-heading",
                                            children: "5.0",
                                        }),
                                    ],
                                }),
                                d.jsx("h2", {
                                    className: "font-heading text-3xl md:text-5xl font-bold text-foreground mb-4",
                                    children: "What Our Customers Say",
                                }),
                                d.jsx("p", {
                                    className: "text-muted-foreground text-lg max-w-2xl mx-auto font-body",
                                    children: "Known in Dubai for delivering consistent, trustworthy repair results.",
                                }),
                            ],
                        }),
                        d.jsxs("div", {
                            className: "max-w-4xl mx-auto px-4 sm:px-8 md:px-20",
                            children: [
                                d.jsxs(wv, {
                                    opts: { align: "center", loop: !0 },
                                    plugins: [rd({ delay: 4e3, stopOnInteraction: !1, stopOnMouseEnter: !0 })],
                                    className: "w-full",
                                    children: [
                                        d.jsx(bv, {
                                            children: dp.map((e, t) =>
                                                d.jsx(
                                                    Sv,
                                                    {
                                                        children: d.jsxs("div", {
                                                            className:
                                                                "group bg-card rounded-2xl p-5 sm:p-8 md:p-10 shadow-xl border border-border/50 relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-cyan/30 mx-2 sm:mx-0",
                                                            children: [
                                                                d.jsx("div", {
                                                                    className:
                                                                        "absolute inset-0 bg-gradient-to-br from-cyan/5 via-transparent to-magenta/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                                                                }),
                                                                d.jsx(T1, {
                                                                    className:
                                                                        "absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-16 sm:h-16 text-cyan/10 group-hover:text-cyan/20 transition-colors duration-300",
                                                                }),
                                                                d.jsxs("div", {
                                                                    className: "relative z-10",
                                                                    children: [
                                                                        d.jsx("div", {
                                                                            className:
                                                                                "flex items-center gap-1 mb-4 sm:mb-6",
                                                                            children: [...Array(e.rating)].map((n, r) =>
                                                                                d.jsx(
                                                                                    Tf,
                                                                                    {
                                                                                        className:
                                                                                            "w-4 h-4 sm:w-5 sm:h-5 fill-accent text-accent",
                                                                                        style: {
                                                                                            animationDelay: `${r * 100}ms`,
                                                                                        },
                                                                                    },
                                                                                    r
                                                                                )
                                                                            ),
                                                                        }),
                                                                        d.jsxs("p", {
                                                                            className:
                                                                                "text-foreground text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed font-medium font-body pr-6 sm:pr-8",
                                                                            children: ['"', e.review, '"'],
                                                                        }),
                                                                        d.jsxs("div", {
                                                                            className:
                                                                                "flex items-center gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-border/50",
                                                                            children: [
                                                                                d.jsx("div", {
                                                                                    className:
                                                                                        "w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-cyan to-magenta flex items-center justify-center shadow-lg flex-shrink-0",
                                                                                    children: d.jsx("span", {
                                                                                        className:
                                                                                            "text-white font-bold text-base sm:text-lg font-heading",
                                                                                        children: e.name.charAt(0),
                                                                                    }),
                                                                                }),
                                                                                d.jsxs("div", {
                                                                                    children: [
                                                                                        d.jsx("p", {
                                                                                            className:
                                                                                                "font-heading font-bold text-foreground text-base sm:text-lg",
                                                                                            children: e.name,
                                                                                        }),
                                                                                        d.jsxs("p", {
                                                                                            className:
                                                                                                "text-cyan text-xs sm:text-sm font-medium flex items-center gap-1 font-body",
                                                                                            children: [
                                                                                                d.jsx("svg", {
                                                                                                    className:
                                                                                                        "w-3 h-3 sm:w-4 sm:h-4",
                                                                                                    viewBox:
                                                                                                        "0 0 24 24",
                                                                                                    fill: "currentColor",
                                                                                                    children: d.jsx(
                                                                                                        "path",
                                                                                                        {
                                                                                                            d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
                                                                                                        }
                                                                                                    ),
                                                                                                }),
                                                                                                "Verified Customer",
                                                                                            ],
                                                                                        }),
                                                                                    ],
                                                                                }),
                                                                            ],
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    },
                                                    t
                                                )
                                            ),
                                        }),
                                        d.jsx(Cv, {
                                            className:
                                                "hidden md:flex -left-12 bg-card shadow-lg border-border/50 hover:bg-cyan hover:text-white",
                                        }),
                                        d.jsx(Ev, {
                                            className:
                                                "hidden md:flex -right-12 bg-card shadow-lg border-border/50 hover:bg-cyan hover:text-white",
                                        }),
                                    ],
                                }),
                                d.jsx("div", {
                                    className: "flex justify-center gap-2 mt-8",
                                    children: dp.map((e, t) =>
                                        d.jsx("div", { className: "w-2 h-2 rounded-full bg-border" }, t)
                                    ),
                                }),
                            ],
                        }),
                        d.jsx("div", {
                            className: "text-center mt-12",
                            children: d.jsxs("a", {
                                href: "https://maps.app.goo.gl/SJ6WggxusXHVqYUR8",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className:
                                    "inline-flex items-center gap-2 px-6 py-3 bg-cyan/10 hover:bg-cyan/20 text-cyan font-semibold rounded-full transition-all duration-300 hover:scale-105 font-body",
                                children: [
                                    d.jsx("svg", {
                                        className: "w-5 h-5",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        children: d.jsx("path", {
                                            d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
                                        }),
                                    }),
                                    d.jsx("span", { children: "See More Reviews on Google" }),
                                    d.jsx("svg", {
                                        className: "w-4 h-4",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: d.jsx("path", { d: "M7 17L17 7M17 7H7M17 7V17" }),
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
            ],
        }),
    GC = () =>
        d.jsx("section", {
            id: "location",
            className: "py-16 md:py-24 bg-secondary",
            children: d.jsxs("div", {
                className: "container",
                children: [
                    d.jsxs("div", {
                        className: "text-center mb-12",
                        children: [
                            d.jsx("h2", {
                                className: "font-heading text-3xl md:text-4xl font-bold text-foreground mb-4",
                                children: "Visit Our Shop",
                            }),
                            d.jsx("p", {
                                className: "text-muted-foreground text-lg max-w-2xl mx-auto",
                                children: "Located in Dubai for your convenience. Drop by or schedule a free pickup.",
                            }),
                        ],
                    }),
                    d.jsx("div", {
                        className: "max-w-5xl mx-auto",
                        children: d.jsxs("div", {
                            className: "bg-card rounded-2xl shadow-xl overflow-hidden border border-border",
                            children: [
                                d.jsx("div", {
                                    className: "aspect-video w-full",
                                    children: d.jsx("iframe", {
                                        src: "https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Baitul+madina+mobiles+phones+and+laptop+repair,Meena+Bazaar,Bur+Dubai,Dubai&zoom=17",
                                        width: "100%",
                                        height: "100%",
                                        style: { border: 0 },
                                        allowFullScreen: !0,
                                        loading: "lazy",
                                        referrerPolicy: "no-referrer-when-downgrade",
                                        title: "Baitul Madina Mobile Phones Location",
                                        className: "w-full h-full",
                                    }),
                                }),
                                d.jsxs("div", {
                                    className:
                                        "p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 bg-card",
                                    children: [
                                        d.jsxs("div", {
                                            className: "flex items-center gap-4 text-center md:text-left",
                                            children: [
                                                d.jsx("div", {
                                                    className:
                                                        "w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0",
                                                    children: d.jsx(Fc, { className: "w-6 h-6 text-accent" }),
                                                }),
                                                d.jsxs("div", {
                                                    children: [
                                                        d.jsx("h3", {
                                                            className: "font-heading font-semibold text-foreground",
                                                            children: "Baitul Madina Mobiles & Laptop Repair",
                                                        }),
                                                        d.jsx("p", {
                                                            className: "text-muted-foreground text-sm",
                                                            children:
                                                                "Saleh Behzad BLDG, Meena Bazaar, Bur Dubai, Dubai",
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        d.jsx("a", {
                                            href: "https://maps.app.goo.gl/TySQxBtAAuMBokpF6",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: d.jsxs(ft, {
                                                variant: "accent",
                                                className: "gap-2",
                                                children: ["Get Directions", d.jsx(E1, { className: "w-4 h-4" })],
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        }),
    KC = [
        {
            icon: R1,
            title: "Wide Range of Devices",
            description:
                "We repair all brands and models of phones, tablets, and laptops. From Apple to Samsung, we have you covered.",
        },
        {
            icon: b1,
            title: "100% Genuine Parts",
            description:
                "Every repair uses original parts with warranty. We never compromise on quality to ensure your device works perfectly.",
        },
        {
            icon: w1,
            title: "Certified Technicians",
            description:
                "Your expensive device is in safe hands. Our certified technicians have years of experience handling all types of repairs.",
        },
        {
            icon: k1,
            title: "Exclusive Deals and Offers",
            description:
                "Regular customers get special discounts and offers. Save money while getting the best repair service in Dubai.",
        },
        {
            icon: A1,
            title: "Customer-Focused Service",
            description:
                "We put you first. Clear pricing, honest advice, and transparent service. No hidden fees or surprises.",
        },
        {
            icon: Fc,
            title: "Doorstep Pickup",
            description:
                "No need to travel. We pick up your device from your home or office and deliver it back after repair.",
        },
    ],
    YC = () =>
        d.jsxs("section", {
            id: "why-choose-us",
            className: "py-16 md:py-24 bg-primary relative overflow-hidden",
            children: [
                d.jsxs("div", {
                    className: "absolute inset-0 opacity-10",
                    children: [
                        d.jsx("div", { className: "absolute top-10 left-20 w-64 h-64 rounded-full bg-cyan blur-3xl" }),
                        d.jsx("div", {
                            className: "absolute bottom-10 right-20 w-48 h-48 rounded-full bg-magenta blur-3xl",
                        }),
                    ],
                }),
                d.jsxs("div", {
                    className: "container relative z-10",
                    children: [
                        d.jsxs("div", {
                            className: "text-center mb-12",
                            children: [
                                d.jsx("h2", {
                                    className: "font-heading text-3xl md:text-4xl font-bold text-white mb-4",
                                    children: "Why Choose Us",
                                }),
                                d.jsx("p", {
                                    className: "text-white/80 text-lg max-w-2xl mx-auto font-body",
                                    children:
                                        "Trusted by thousands of customers in Dubai for reliable and professional device repair services.",
                                }),
                            ],
                        }),
                        d.jsx("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto",
                            children: KC.map((e) =>
                                d.jsxs(
                                    "div",
                                    {
                                        className: "flex gap-4",
                                        children: [
                                            d.jsx("div", {
                                                className: "flex-shrink-0",
                                                children: d.jsx("div", {
                                                    className:
                                                        "w-12 h-12 rounded-xl bg-cyan/20 flex items-center justify-center",
                                                    children: d.jsx(e.icon, { className: "w-6 h-6 text-cyan" }),
                                                }),
                                            }),
                                            d.jsxs("div", {
                                                children: [
                                                    d.jsx("h3", {
                                                        className: "font-heading text-lg font-semibold text-white mb-2",
                                                        children: e.title,
                                                    }),
                                                    d.jsx("p", {
                                                        className: "text-white/70 text-sm leading-relaxed font-body",
                                                        children: e.description,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    },
                                    e.title
                                )
                            ),
                        }),
                    ],
                }),
            ],
        }),
    qC = () =>
        d.jsx("section", {
            className: "py-12 bg-primary",
            children: d.jsxs("div", {
                className: "container",
                children: [
                    d.jsx("div", {
                        className: "text-center mb-8",
                        children: d.jsx("p", {
                            className: "text-primary-foreground/70 text-sm uppercase tracking-wider font-medium",
                            children: "Operated By",
                        }),
                    }),
                    d.jsx("div", {
                        className: "flex items-center justify-center",
                        children: d.jsxs("div", {
                            className: "flex items-center gap-3 text-primary-foreground",
                            children: [
                                d.jsx("div", {
                                    className: "w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center",
                                    children: d.jsx(S1, { className: "w-5 h-5 text-accent" }),
                                }),
                                d.jsx("div", {
                                    children: d.jsx("p", {
                                        className: "font-heading font-semibold text-sm md:text-base",
                                        children: "Baitul Madina Mobile Phones and Accessories Trading",
                                    }),
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        });
var zl = "Collapsible",
    [XC, kv] = bo(zl),
    [ZC, od] = XC(zl),
    Nv = b.forwardRef((e, t) => {
        const { __scopeCollapsible: n, open: r, defaultOpen: o, disabled: s, onOpenChange: i, ...l } = e,
            [a, u] = Cl({ prop: r, defaultProp: o ?? !1, onChange: i, caller: zl });
        return d.jsx(ZC, {
            scope: n,
            disabled: s,
            contentId: Cg(),
            open: a,
            onOpenToggle: b.useCallback(() => u((c) => !c), [u]),
            children: d.jsx(je.div, { "data-state": id(a), "data-disabled": s ? "" : void 0, ...l, ref: t }),
        });
    });
Nv.displayName = zl;
var Pv = "CollapsibleTrigger",
    Tv = b.forwardRef((e, t) => {
        const { __scopeCollapsible: n, ...r } = e,
            o = od(Pv, n);
        return d.jsx(je.button, {
            type: "button",
            "aria-controls": o.contentId,
            "aria-expanded": o.open || !1,
            "data-state": id(o.open),
            "data-disabled": o.disabled ? "" : void 0,
            disabled: o.disabled,
            ...r,
            ref: t,
            onClick: Se(e.onClick, o.onOpenToggle),
        });
    });
Tv.displayName = Pv;
var sd = "CollapsibleContent",
    jv = b.forwardRef((e, t) => {
        const { forceMount: n, ...r } = e,
            o = od(sd, e.__scopeCollapsible);
        return d.jsx(Sl, {
            present: n || o.open,
            children: ({ present: s }) => d.jsx(JC, { ...r, ref: t, present: s }),
        });
    });
jv.displayName = sd;
var JC = b.forwardRef((e, t) => {
    const { __scopeCollapsible: n, present: r, children: o, ...s } = e,
        i = od(sd, n),
        [l, a] = b.useState(r),
        u = b.useRef(null),
        c = ht(t, u),
        f = b.useRef(0),
        g = f.current,
        h = b.useRef(0),
        w = h.current,
        v = i.open || l,
        x = b.useRef(v),
        m = b.useRef(void 0);
    return (
        b.useEffect(() => {
            const p = requestAnimationFrame(() => (x.current = !1));
            return () => cancelAnimationFrame(p);
        }, []),
        rn(() => {
            const p = u.current;
            if (p) {
                (m.current = m.current || {
                    transitionDuration: p.style.transitionDuration,
                    animationName: p.style.animationName,
                }),
                    (p.style.transitionDuration = "0s"),
                    (p.style.animationName = "none");
                const y = p.getBoundingClientRect();
                (f.current = y.height),
                    (h.current = y.width),
                    x.current ||
                        ((p.style.transitionDuration = m.current.transitionDuration),
                        (p.style.animationName = m.current.animationName)),
                    a(r);
            }
        }, [i.open, r]),
        d.jsx(je.div, {
            "data-state": id(i.open),
            "data-disabled": i.disabled ? "" : void 0,
            id: i.contentId,
            hidden: !v,
            ...s,
            ref: c,
            style: {
                "--radix-collapsible-content-height": g ? `${g}px` : void 0,
                "--radix-collapsible-content-width": w ? `${w}px` : void 0,
                ...e.style,
            },
            children: v && o,
        })
    );
});
function id(e) {
    return e ? "open" : "closed";
}
var eE = Nv,
    tE = Tv,
    nE = jv,
    rE = b.createContext(void 0);
function oE(e) {
    const t = b.useContext(rE);
    return e || t || "ltr";
}
var Ht = "Accordion",
    sE = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
    [ld, iE, lE] = Dm(Ht),
    [$l, ME] = bo(Ht, [lE, kv]),
    ad = kv(),
    Rv = M.forwardRef((e, t) => {
        const { type: n, ...r } = e,
            o = r,
            s = r;
        return d.jsx(ld.Provider, {
            scope: e.__scopeAccordion,
            children: n === "multiple" ? d.jsx(dE, { ...s, ref: t }) : d.jsx(cE, { ...o, ref: t }),
        });
    });
Rv.displayName = Ht;
var [Av, aE] = $l(Ht),
    [Ov, uE] = $l(Ht, { collapsible: !1 }),
    cE = M.forwardRef((e, t) => {
        const { value: n, defaultValue: r, onValueChange: o = () => {}, collapsible: s = !1, ...i } = e,
            [l, a] = Cl({ prop: n, defaultProp: r ?? "", onChange: o, caller: Ht });
        return d.jsx(Av, {
            scope: e.__scopeAccordion,
            value: M.useMemo(() => (l ? [l] : []), [l]),
            onItemOpen: a,
            onItemClose: M.useCallback(() => s && a(""), [s, a]),
            children: d.jsx(Ov, { scope: e.__scopeAccordion, collapsible: s, children: d.jsx(Mv, { ...i, ref: t }) }),
        });
    }),
    dE = M.forwardRef((e, t) => {
        const { value: n, defaultValue: r, onValueChange: o = () => {}, ...s } = e,
            [i, l] = Cl({ prop: n, defaultProp: r ?? [], onChange: o, caller: Ht }),
            a = M.useCallback((c) => l((f = []) => [...f, c]), [l]),
            u = M.useCallback((c) => l((f = []) => f.filter((g) => g !== c)), [l]);
        return d.jsx(Av, {
            scope: e.__scopeAccordion,
            value: i,
            onItemOpen: a,
            onItemClose: u,
            children: d.jsx(Ov, { scope: e.__scopeAccordion, collapsible: !0, children: d.jsx(Mv, { ...s, ref: t }) }),
        });
    }),
    [fE, Bl] = $l(Ht),
    Mv = M.forwardRef((e, t) => {
        const { __scopeAccordion: n, disabled: r, dir: o, orientation: s = "vertical", ...i } = e,
            l = M.useRef(null),
            a = ht(l, t),
            u = iE(n),
            f = oE(o) === "ltr",
            g = Se(e.onKeyDown, (h) => {
                var N;
                if (!sE.includes(h.key)) return;
                const w = h.target,
                    v = u().filter((R) => {
                        var A;
                        return !((A = R.ref.current) != null && A.disabled);
                    }),
                    x = v.findIndex((R) => R.ref.current === w),
                    m = v.length;
                if (x === -1) return;
                h.preventDefault();
                let p = x;
                const y = 0,
                    S = m - 1,
                    C = () => {
                        (p = x + 1), p > S && (p = y);
                    },
                    E = () => {
                        (p = x - 1), p < y && (p = S);
                    };
                switch (h.key) {
                    case "Home":
                        p = y;
                        break;
                    case "End":
                        p = S;
                        break;
                    case "ArrowRight":
                        s === "horizontal" && (f ? C() : E());
                        break;
                    case "ArrowDown":
                        s === "vertical" && C();
                        break;
                    case "ArrowLeft":
                        s === "horizontal" && (f ? E() : C());
                        break;
                    case "ArrowUp":
                        s === "vertical" && E();
                        break;
                }
                const k = p % m;
                (N = v[k].ref.current) == null || N.focus();
            });
        return d.jsx(fE, {
            scope: n,
            disabled: r,
            direction: o,
            orientation: s,
            children: d.jsx(ld.Slot, {
                scope: n,
                children: d.jsx(je.div, { ...i, "data-orientation": s, ref: a, onKeyDown: r ? void 0 : g }),
            }),
        });
    }),
    sl = "AccordionItem",
    [pE, ud] = $l(sl),
    _v = M.forwardRef((e, t) => {
        const { __scopeAccordion: n, value: r, ...o } = e,
            s = Bl(sl, n),
            i = aE(sl, n),
            l = ad(n),
            a = Cg(),
            u = (r && i.value.includes(r)) || !1,
            c = s.disabled || e.disabled;
        return d.jsx(pE, {
            scope: n,
            open: u,
            disabled: c,
            triggerId: a,
            children: d.jsx(eE, {
                "data-orientation": s.orientation,
                "data-state": $v(u),
                ...l,
                ...o,
                ref: t,
                disabled: c,
                open: u,
                onOpenChange: (f) => {
                    f ? i.onItemOpen(r) : i.onItemClose(r);
                },
            }),
        });
    });
_v.displayName = sl;
var Lv = "AccordionHeader",
    Iv = M.forwardRef((e, t) => {
        const { __scopeAccordion: n, ...r } = e,
            o = Bl(Ht, n),
            s = ud(Lv, n);
        return d.jsx(je.h3, {
            "data-orientation": o.orientation,
            "data-state": $v(s.open),
            "data-disabled": s.disabled ? "" : void 0,
            ...r,
            ref: t,
        });
    });
Iv.displayName = Lv;
var Du = "AccordionTrigger",
    Dv = M.forwardRef((e, t) => {
        const { __scopeAccordion: n, ...r } = e,
            o = Bl(Ht, n),
            s = ud(Du, n),
            i = uE(Du, n),
            l = ad(n);
        return d.jsx(ld.ItemSlot, {
            scope: n,
            children: d.jsx(tE, {
                "aria-disabled": (s.open && !i.collapsible) || void 0,
                "data-orientation": o.orientation,
                id: s.triggerId,
                ...l,
                ...r,
                ref: t,
            }),
        });
    });
Dv.displayName = Du;
var Fv = "AccordionContent",
    zv = M.forwardRef((e, t) => {
        const { __scopeAccordion: n, ...r } = e,
            o = Bl(Ht, n),
            s = ud(Fv, n),
            i = ad(n);
        return d.jsx(nE, {
            role: "region",
            "aria-labelledby": s.triggerId,
            "data-orientation": o.orientation,
            ...i,
            ...r,
            ref: t,
            style: {
                "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
                "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
                ...e.style,
            },
        });
    });
zv.displayName = Fv;
function $v(e) {
    return e ? "open" : "closed";
}
var hE = Rv,
    mE = _v,
    gE = Iv,
    Bv = Dv,
    Uv = zv;
const vE = hE,
    Vv = b.forwardRef(({ className: e, ...t }, n) => d.jsx(mE, { ref: n, className: Me("border-b", e), ...t }));
Vv.displayName = "AccordionItem";
const Wv = b.forwardRef(({ className: e, children: t, ...n }, r) =>
    d.jsx(gE, {
        className: "flex",
        children: d.jsxs(Bv, {
            ref: r,
            className: Me(
                "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
                e
            ),
            ...n,
            children: [t, d.jsx(C1, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })],
        }),
    })
);
Wv.displayName = Bv.displayName;
const Hv = b.forwardRef(({ className: e, children: t, ...n }, r) =>
    d.jsx(Uv, {
        ref: r,
        className:
            "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        ...n,
        children: d.jsx("div", { className: Me("pb-4 pt-0", e), children: t }),
    })
);
Hv.displayName = Uv.displayName;
const yE = [
        {
            question: "How long does the repair take?",
            answer: "Most repairs are completed within 1-3 hours. For complex issues like water damage or motherboard repairs, it may take up to 24 hours. We always inform you of the estimated time before starting the repair.",
        },
        {
            question: "Do you use original parts?",
            answer: "Yes, we only use 100% genuine and original parts for all repairs. Every part comes with a warranty, so you can trust the quality of our work.",
        },
        {
            question: "Is the pickup and delivery really free?",
            answer: "Yes, pickup and delivery is completely free across Dubai. We collect your device from your location, repair it at our center, and return it the same day at no extra cost.",
        },
        {
            question: "When do I need to pay?",
            answer: "You pay only after the repair is complete and you are satisfied with the work. We believe in earning your trust first. No advance payment required.",
        },
        {
            question: "What devices do you repair?",
            answer: "We repair all types of smartphones, tablets, and laptops. This includes Apple, Samsung, Huawei, OnePlus, Xiaomi, OPPO, and many other brands. Contact us to check if we service your device model.",
        },
        {
            question: "What if the repair does not fix my problem?",
            answer: "All our repairs come with a warranty. If the same issue returns within the warranty period, we will fix it again at no extra charge. Your satisfaction is our priority.",
        },
    ],
    xE = () =>
        d.jsx("section", {
            className: "py-16 md:py-24 bg-background",
            children: d.jsx("div", {
                className: "container",
                children: d.jsxs("div", {
                    className: "max-w-3xl mx-auto",
                    children: [
                        d.jsxs("div", {
                            className: "text-center mb-12",
                            children: [
                                d.jsx("h2", {
                                    className: "font-heading text-3xl md:text-4xl font-bold text-foreground mb-4",
                                    children: "Frequently Asked Questions",
                                }),
                                d.jsx("p", {
                                    className: "text-muted-foreground text-lg font-body",
                                    children:
                                        "Got questions? We have answers. Find out everything you need to know about our repair service.",
                                }),
                            ],
                        }),
                        d.jsx(vE, {
                            type: "single",
                            collapsible: !0,
                            className: "space-y-4",
                            children: yE.map((e, t) =>
                                d.jsxs(
                                    Vv,
                                    {
                                        value: `item-${t}`,
                                        className:
                                            "bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow data-[state=open]:border-cyan/30",
                                        children: [
                                            d.jsx(Wv, {
                                                className:
                                                    "text-left font-heading font-semibold text-foreground hover:no-underline py-5",
                                                children: e.question,
                                            }),
                                            d.jsx(Hv, {
                                                className: "text-muted-foreground pb-5 font-body",
                                                children: e.answer,
                                            }),
                                        ],
                                    },
                                    t
                                )
                            ),
                        }),
                    ],
                }),
            }),
        }),
    Vo = b.forwardRef(({ className: e, type: t, ...n }, r) =>
        d.jsx("input", {
            type: t,
            className: Me(
                "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                e
            ),
            ref: r,
            ...n,
        })
    );
Vo.displayName = "Input";
const Qv = b.forwardRef(({ className: e, ...t }, n) =>
    d.jsx("textarea", {
        className: Me(
            "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            e
        ),
        ref: n,
        ...t,
    })
);
Qv.displayName = "Textarea";
const wE = () => {
        const [e, t] = b.useState({ name: "", phone: "", email: "", deviceName: "", message: "" }),
            n = (o) => {
                o.preventDefault();
                const s = `Name: ${e.name}%0APhone: +971${e.phone}%0AEmail: ${e.email}%0ADevice: ${e.deviceName}%0AMessage: ${e.message}`;
                window.open(`https://web.whatsapp.com/send?phone=971501675005&text=${s}`, "_blank");
            },
            r = (o) => {
                t({ ...e, [o.target.name]: o.target.value });
            };
        return d.jsxs("section", {
            id: "contact",
            className: "py-16 md:py-24 bg-hero-gradient relative overflow-hidden",
            children: [
                d.jsxs("div", {
                    className: "absolute inset-0 opacity-10",
                    children: [
                        d.jsx("div", { className: "absolute top-10 right-20 w-64 h-64 rounded-full bg-cyan blur-3xl" }),
                        d.jsx("div", {
                            className: "absolute bottom-10 left-20 w-48 h-48 rounded-full bg-magenta blur-3xl",
                        }),
                    ],
                }),
                d.jsx("div", {
                    className: "container relative z-10",
                    children: d.jsxs("div", {
                        className: "grid lg:grid-cols-2 gap-12 items-center",
                        children: [
                            d.jsxs("div", {
                                className:
                                    "bg-card/95 backdrop-blur-sm rounded-2xl p-8 shadow-elegant order-2 lg:order-1",
                                children: [
                                    d.jsx("h3", {
                                        className: "font-heading text-2xl font-bold text-foreground text-center mb-2",
                                        children: "Get Instant 10% Discount",
                                    }),
                                    d.jsx("p", {
                                        className: "text-muted-foreground text-center mb-6 font-body",
                                        children: "on all online bookings",
                                    }),
                                    d.jsxs("form", {
                                        onSubmit: n,
                                        className: "space-y-4",
                                        children: [
                                            d.jsx(Vo, {
                                                name: "name",
                                                placeholder: "Name",
                                                value: e.name,
                                                onChange: r,
                                                required: !0,
                                                className: "bg-background font-body",
                                            }),
                                            d.jsxs("div", {
                                                className: "flex gap-2",
                                                children: [
                                                    d.jsx("div", {
                                                        className:
                                                            "flex items-center bg-background border border-input rounded-md px-3 text-sm text-muted-foreground whitespace-nowrap font-body",
                                                        children: "🇦🇪 +971",
                                                    }),
                                                    d.jsx(Vo, {
                                                        name: "phone",
                                                        type: "tel",
                                                        placeholder: "Phone Number",
                                                        value: e.phone,
                                                        onChange: r,
                                                        required: !0,
                                                        className: "bg-background flex-1 font-body",
                                                    }),
                                                ],
                                            }),
                                            d.jsx(Vo, {
                                                name: "email",
                                                type: "email",
                                                placeholder: "Email",
                                                value: e.email,
                                                onChange: r,
                                                required: !0,
                                                className: "bg-background font-body",
                                            }),
                                            d.jsx(Vo, {
                                                name: "deviceName",
                                                placeholder: "Device Name (e.g., iPhone 15 Pro)",
                                                value: e.deviceName,
                                                onChange: r,
                                                required: !0,
                                                className: "bg-background font-body",
                                            }),
                                            d.jsx(Qv, {
                                                name: "message",
                                                placeholder: "Message",
                                                value: e.message,
                                                onChange: r,
                                                rows: 4,
                                                className: "bg-background resize-none font-body",
                                            }),
                                            d.jsxs(ft, {
                                                type: "submit",
                                                variant: "accent",
                                                size: "lg",
                                                className: "w-full",
                                                children: ["Submit & Get 10% Off", d.jsx(ys, { className: "w-4 h-4" })],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            d.jsxs("div", {
                                className: "text-center lg:text-left order-1 lg:order-2",
                                children: [
                                    d.jsxs("div", {
                                        className:
                                            "inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6",
                                        children: [
                                            d.jsx(zc, { className: "w-4 h-4 text-cyan" }),
                                            d.jsx("span", {
                                                className: "text-white text-sm font-medium font-body",
                                                children: "Get Started Today",
                                            }),
                                        ],
                                    }),
                                    d.jsx("h2", {
                                        className:
                                            "font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4",
                                        children: "Ready to Repair Your Device?",
                                    }),
                                    d.jsx("p", {
                                        className: "text-white/80 text-lg md:text-xl mb-8 font-body",
                                        children: "Fast repair, genuine parts, free pickup, same day delivery.",
                                    }),
                                    d.jsxs("div", {
                                        className: "flex flex-col sm:flex-row gap-4 justify-center lg:justify-start",
                                        children: [
                                            d.jsx("a", {
                                                href: "https://web.whatsapp.com/send?phone=971501675005&text=",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: d.jsxs(ft, {
                                                    variant: "hero",
                                                    size: "xl",
                                                    className: "animate-pulse-glow",
                                                    children: [
                                                        "Get Instant Price Now",
                                                        d.jsx(ys, { className: "w-5 h-5" }),
                                                    ],
                                                }),
                                            }),
                                            d.jsx("a", {
                                                href: "tel:+971501675005",
                                                children: d.jsx(ft, {
                                                    variant: "heroOutline",
                                                    size: "xl",
                                                    children: "Book Free Pickup",
                                                }),
                                            }),
                                        ],
                                    }),
                                    d.jsx("p", {
                                        className: "mt-8 text-white/60 text-sm font-body",
                                        children: "No payment required until repair is complete",
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            ],
        });
    },
    bE = "/assets/logo-footer-white-ldDrUubp.png",
    SE = () =>
        d.jsx("footer", {
            id: "contact",
            className: "bg-primary text-white",
            children: d.jsxs("div", {
                className: "container py-12",
                children: [
                    d.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                        children: [
                            d.jsxs("div", {
                                children: [
                                    d.jsx("img", {
                                        src: bE,
                                        alt: "BMFixPhones Logo",
                                        className: "h-[120px] w-auto mb-4",
                                    }),
                                    d.jsx("p", {
                                        className: "text-white/70 text-sm leading-relaxed font-body",
                                        children:
                                            "Your trusted partner for mobile, tablet, and laptop repairs in Dubai. Fast, reliable, and affordable service.",
                                    }),
                                ],
                            }),
                            d.jsxs("div", {
                                children: [
                                    d.jsx("h4", {
                                        className: "font-heading font-semibold text-lg mb-4",
                                        children: "Services",
                                    }),
                                    d.jsxs("ul", {
                                        className: "space-y-2 text-sm text-white/70 font-body",
                                        children: [
                                            d.jsx("li", { children: "Screen Repair" }),
                                            d.jsx("li", { children: "Battery Replacement" }),
                                            d.jsx("li", { children: "Water Damage Repair" }),
                                            d.jsx("li", { children: "Camera Repair" }),
                                            d.jsx("li", { children: "Speaker Repair" }),
                                        ],
                                    }),
                                ],
                            }),
                            d.jsxs("div", {
                                children: [
                                    d.jsx("h4", {
                                        className: "font-heading font-semibold text-lg mb-4",
                                        children: "Contact",
                                    }),
                                    d.jsxs("ul", {
                                        className: "space-y-3 text-sm text-white/70 font-body",
                                        children: [
                                            d.jsxs("li", {
                                                className: "flex items-start gap-2",
                                                children: [
                                                    d.jsx(Fc, { className: "w-4 h-4 mt-0.5 flex-shrink-0 text-cyan" }),
                                                    d.jsx("span", { children: "Dubai, United Arab Emirates" }),
                                                ],
                                            }),
                                            d.jsxs("li", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    d.jsx(zc, { className: "w-4 h-4 flex-shrink-0 text-cyan" }),
                                                    d.jsx("span", { children: "Contact for phone number" }),
                                                ],
                                            }),
                                            d.jsxs("li", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    d.jsx(N1, { className: "w-4 h-4 flex-shrink-0 text-cyan" }),
                                                    d.jsx("span", { children: "info@bmfixphones.ae" }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            d.jsxs("div", {
                                children: [
                                    d.jsx("h4", {
                                        className: "font-heading font-semibold text-lg mb-4",
                                        children: "Business Hours",
                                    }),
                                    d.jsxs("ul", {
                                        className: "space-y-2 text-sm text-white/70 font-body",
                                        children: [
                                            d.jsxs("li", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    d.jsx(Dc, { className: "w-4 h-4 flex-shrink-0 text-cyan" }),
                                                    d.jsx("span", { children: "Mon - Sat: 9AM - 9PM" }),
                                                ],
                                            }),
                                            d.jsx("li", { className: "pl-6", children: "Sunday: 10AM - 6PM" }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    d.jsx("div", {
                        className: "border-t border-white/10 mt-8 pt-8",
                        children: d.jsxs("div", {
                            className: "flex flex-col md:flex-row justify-between items-center gap-4",
                            children: [
                                d.jsx("p", {
                                    className: "text-white/50 text-sm text-center md:text-left font-body",
                                    children: "Baitul Madina Mobile Phones and Accessories Trading",
                                }),
                                d.jsx("p", {
                                    className: "text-white/50 text-sm font-body",
                                    children: "All rights reserved.",
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        }),
    CE = () =>
        d.jsxs("div", {
            className: "min-h-screen bg-background",
            children: [
                d.jsx(QS, {}),
                d.jsxs("main", {
                    children: [
                        d.jsx(AC, {}),
                        d.jsx(BC, {}),
                        d.jsx(YC, {}),
                        d.jsx(UC, {}),
                        d.jsx(QC, {}),
                        d.jsx(GC, {}),
                        d.jsx(qC, {}),
                        d.jsx(xE, {}),
                        d.jsx(wE, {}),
                    ],
                }),
                d.jsx(SE, {}),
            ],
        }),
    EE = () => {
        const e = mv();
        return ()
    },
    kE = new nS(),
    NE = () =>
        d.jsx(oS, {
            client: kE,
            children: d.jsxs(O2, {
                children: [
                    d.jsx(pw, {}),
                    d.jsx(Hw, {}),
                    d.jsx(VS, {
                        children: d.jsxs($S, {
                            children: [
                                d.jsx(Mu, { path: "/", element: d.jsx(CE, {}) }),
                                d.jsx(Mu, { path: "*", element: d.jsx(EE, {}) }),
                            ],
                        }),
                    }),
                ],
            }),
        });
_m(document.getElementById("root")).render(d.jsx(NE, {}));
