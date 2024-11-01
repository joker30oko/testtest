/*
 jQuery JavaScript Library v3.3.1
 https://jquery.com/

 Includes Sizzle.js
 https://sizzlejs.com/

 Copyright JS Foundation and other contributors
 Released under the MIT license
 https://jquery.org/license

 Date: 2018-01-20T17:24Z
 Sizzle CSS Selector Engine v2.3.3
 https://sizzlejs.com/

 Copyright jQuery Foundation and other contributors
 Released under the MIT license
 http://jquery.org/license

 Date: 2016-08-08
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.createTemplateTagFirstArg = function(b) {
    return b.raw = b
}
;
$jscomp.createTemplateTagFirstArgWithRaw = function(b, l) {
    b.raw = l;
    return b
}
;
$jscomp.arrayIteratorImpl = function(b) {
    var l = 0;
    return function() {
        return l < b.length ? {
            done: !1,
            value: b[l++]
        } : {
            done: !0
        }
    }
}
;
$jscomp.arrayIterator = function(b) {
    return {
        next: $jscomp.arrayIteratorImpl(b)
    }
}
;
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(b, l, y) {
    if (b == Array.prototype || b == Object.prototype)
        return b;
    b[l] = y.value;
    return b
}
;
$jscomp.getGlobal = function(b) {
    b = ["object" == typeof globalThis && globalThis, b, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var l = 0; l < b.length; ++l) {
        var y = b[l];
        if (y && y.Math == Math)
            return y
    }
    throw Error("Cannot find global object");
}
;
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function(b, l) {
    var y = $jscomp.propertyToPolyfillSymbol[l];
    if (null == y)
        return b[l];
    y = b[y];
    return void 0 !== y ? y : b[l]
};
$jscomp.polyfill = function(b, l, y, m) {
    l && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(b, l, y, m) : $jscomp.polyfillUnisolated(b, l, y, m))
}
;
$jscomp.polyfillUnisolated = function(b, l, y, m) {
    y = $jscomp.global;
    b = b.split(".");
    for (m = 0; m < b.length - 1; m++) {
        var u = b[m];
        if (!(u in y))
            return;
        y = y[u]
    }
    b = b[b.length - 1];
    m = y[b];
    l = l(m);
    l != m && null != l && $jscomp.defineProperty(y, b, {
        configurable: !0,
        writable: !0,
        value: l
    })
}
;
$jscomp.polyfillIsolated = function(b, l, y, m) {
    var u = b.split(".");
    b = 1 === u.length;
    m = u[0];
    m = !b && m in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
    for (var C = 0; C < u.length - 1; C++) {
        var v = u[C];
        if (!(v in m))
            return;
        m = m[v]
    }
    u = u[u.length - 1];
    y = $jscomp.IS_SYMBOL_NATIVE && "es6" === y ? m[u] : null;
    l = l(y);
    null != l && (b ? $jscomp.defineProperty($jscomp.polyfills, u, {
        configurable: !0,
        writable: !0,
        value: l
    }) : l !== y && ($jscomp.propertyToPolyfillSymbol[u] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(u) : $jscomp.POLYFILL_PREFIX + u,
    u = $jscomp.propertyToPolyfillSymbol[u],
    $jscomp.defineProperty(m, u, {
        configurable: !0,
        writable: !0,
        value: l
    })))
}
;
$jscomp.initSymbol = function() {}
;
$jscomp.polyfill("Symbol", function(b) {
    if (b)
        return b;
    var l = function(u, C) {
        this.$jscomp$symbol$id_ = u;
        $jscomp.defineProperty(this, "description", {
            configurable: !0,
            writable: !0,
            value: C
        })
    };
    l.prototype.toString = function() {
        return this.$jscomp$symbol$id_
    }
    ;
    var y = 0
      , m = function(u) {
        if (this instanceof m)
            throw new TypeError("Symbol is not a constructor");
        return new l("jscomp_symbol_" + (u || "") + "_" + y++,u)
    };
    return m
}, "es6", "es3");
$jscomp.initSymbolIterator = function() {}
;
$jscomp.polyfill("Symbol.iterator", function(b) {
    if (b)
        return b;
    b = Symbol("Symbol.iterator");
    for (var l = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), y = 0; y < l.length; y++) {
        var m = $jscomp.global[l[y]];
        "function" === typeof m && "function" != typeof m.prototype[b] && $jscomp.defineProperty(m.prototype, b, {
            configurable: !0,
            writable: !0,
            value: function() {
                return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))
            }
        })
    }
    return b
}, "es6", "es3");
$jscomp.initSymbolAsyncIterator = function() {}
;
$jscomp.iteratorPrototype = function(b) {
    b = {
        next: b
    };
    b[Symbol.iterator] = function() {
        return this
    }
    ;
    return b
}
;
$jscomp.findInternal = function(b, l, y) {
    b instanceof String && (b = String(b));
    for (var m = b.length, u = 0; u < m; u++) {
        var C = b[u];
        if (l.call(y, C, u, b))
            return {
                i: u,
                v: C
            }
    }
    return {
        i: -1,
        v: void 0
    }
}
;
$jscomp.polyfill("Array.prototype.find", function(b) {
    return b ? b : function(l, y) {
        return $jscomp.findInternal(this, l, y).v
    }
}, "es6", "es3");
$jscomp.makeIterator = function(b) {
    var l = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
    return l ? l.call(b) : $jscomp.arrayIterator(b)
}
;
$jscomp.FORCE_POLYFILL_PROMISE = !1;
$jscomp.polyfill("Promise", function(b) {
    function l() {
        this.batch_ = null
    }
    function y(v) {
        return v instanceof u ? v : new u(function(E, N) {
            E(v)
        }
        )
    }
    if (b && !$jscomp.FORCE_POLYFILL_PROMISE)
        return b;
    l.prototype.asyncExecute = function(v) {
        if (null == this.batch_) {
            this.batch_ = [];
            var E = this;
            this.asyncExecuteFunction(function() {
                E.executeBatch_()
            })
        }
        this.batch_.push(v)
    }
    ;
    var m = $jscomp.global.setTimeout;
    l.prototype.asyncExecuteFunction = function(v) {
        m(v, 0)
    }
    ;
    l.prototype.executeBatch_ = function() {
        for (; this.batch_ && this.batch_.length; ) {
            var v = this.batch_;
            this.batch_ = [];
            for (var E = 0; E < v.length; ++E) {
                var N = v[E];
                v[E] = null;
                try {
                    N()
                } catch (P) {
                    this.asyncThrow_(P)
                }
            }
        }
        this.batch_ = null
    }
    ;
    l.prototype.asyncThrow_ = function(v) {
        this.asyncExecuteFunction(function() {
            throw v;
        })
    }
    ;
    var u = function(v) {
        this.state_ = 0;
        this.result_ = void 0;
        this.onSettledCallbacks_ = [];
        var E = this.createResolveAndReject_();
        try {
            v(E.resolve, E.reject)
        } catch (N) {
            E.reject(N)
        }
    };
    u.prototype.createResolveAndReject_ = function() {
        function v(P) {
            return function(aa) {
                N || (N = !0,
                P.call(E, aa))
            }
        }
        var E = this
          , N = !1;
        return {
            resolve: v(this.resolveTo_),
            reject: v(this.reject_)
        }
    }
    ;
    u.prototype.resolveTo_ = function(v) {
        if (v === this)
            this.reject_(new TypeError("A Promise cannot resolve to itself"));
        else if (v instanceof u)
            this.settleSameAsPromise_(v);
        else {
            a: switch (typeof v) {
            case "object":
                var E = null != v;
                break a;
            case "function":
                E = !0;
                break a;
            default:
                E = !1
            }
            E ? this.resolveToNonPromiseObj_(v) : this.fulfill_(v)
        }
    }
    ;
    u.prototype.resolveToNonPromiseObj_ = function(v) {
        var E = void 0;
        try {
            E = v.then
        } catch (N) {
            this.reject_(N);
            return
        }
        "function" == typeof E ? this.settleSameAsThenable_(E, v) : this.fulfill_(v)
    }
    ;
    u.prototype.reject_ = function(v) {
        this.settle_(2, v)
    }
    ;
    u.prototype.fulfill_ = function(v) {
        this.settle_(1, v)
    }
    ;
    u.prototype.settle_ = function(v, E) {
        if (0 != this.state_)
            throw Error("Cannot settle(" + v + ", " + E + "): Promise already settled in state" + this.state_);
        this.state_ = v;
        this.result_ = E;
        this.executeOnSettledCallbacks_()
    }
    ;
    u.prototype.executeOnSettledCallbacks_ = function() {
        if (null != this.onSettledCallbacks_) {
            for (var v = 0; v < this.onSettledCallbacks_.length; ++v)
                C.asyncExecute(this.onSettledCallbacks_[v]);
            this.onSettledCallbacks_ = null
        }
    }
    ;
    var C = new l;
    u.prototype.settleSameAsPromise_ = function(v) {
        var E = this.createResolveAndReject_();
        v.callWhenSettled_(E.resolve, E.reject)
    }
    ;
    u.prototype.settleSameAsThenable_ = function(v, E) {
        var N = this.createResolveAndReject_();
        try {
            v.call(E, N.resolve, N.reject)
        } catch (P) {
            N.reject(P)
        }
    }
    ;
    u.prototype.then = function(v, E) {
        function N(F, J) {
            return "function" == typeof F ? function(T) {
                try {
                    P(F(T))
                } catch (X) {
                    aa(X)
                }
            }
            : J
        }
        var P, aa, R = new u(function(F, J) {
            P = F;
            aa = J
        }
        );
        this.callWhenSettled_(N(v, P), N(E, aa));
        return R
    }
    ;
    u.prototype.catch = function(v) {
        return this.then(void 0, v)
    }
    ;
    u.prototype.callWhenSettled_ = function(v, E) {
        function N() {
            switch (P.state_) {
            case 1:
                v(P.result_);
                break;
            case 2:
                E(P.result_);
                break;
            default:
                throw Error("Unexpected state: " + P.state_);
            }
        }
        var P = this;
        null == this.onSettledCallbacks_ ? C.asyncExecute(N) : this.onSettledCallbacks_.push(N)
    }
    ;
    u.resolve = y;
    u.reject = function(v) {
        return new u(function(E, N) {
            N(v)
        }
        )
    }
    ;
    u.race = function(v) {
        return new u(function(E, N) {
            for (var P = $jscomp.makeIterator(v), aa = P.next(); !aa.done; aa = P.next())
                y(aa.value).callWhenSettled_(E, N)
        }
        )
    }
    ;
    u.all = function(v) {
        var E = $jscomp.makeIterator(v)
          , N = E.next();
        return N.done ? y([]) : new u(function(P, aa) {
            function R(T) {
                return function(X) {
                    F[T] = X;
                    J--;
                    0 == J && P(F)
                }
            }
            var F = []
              , J = 0;
            do
                F.push(void 0),
                J++,
                y(N.value).callWhenSettled_(R(F.length - 1), aa),
                N = E.next();
            while (!N.done)
        }
        )
    }
    ;
    return u
}, "es6", "es3");
$jscomp.iteratorFromArray = function(b, l) {
    b instanceof String && (b += "");
    var y = 0
      , m = {
        next: function() {
            if (y < b.length) {
                var u = y++;
                return {
                    value: l(u, b[u]),
                    done: !1
                }
            }
            m.next = function() {
                return {
                    done: !0,
                    value: void 0
                }
            }
            ;
            return m.next()
        }
    };
    m[Symbol.iterator] = function() {
        return m
    }
    ;
    return m
}
;
$jscomp.polyfill("Array.prototype.values", function(b) {
    return b ? b : function() {
        return $jscomp.iteratorFromArray(this, function(l, y) {
            return y
        })
    }
}, "es8", "es3");
$jscomp.polyfill("Array.prototype.keys", function(b) {
    return b ? b : function() {
        return $jscomp.iteratorFromArray(this, function(l) {
            return l
        })
    }
}, "es6", "es3");
$jscomp.checkStringArgs = function(b, l, y) {
    if (null == b)
        throw new TypeError("The 'this' value for String.prototype." + y + " must not be null or undefined");
    if (l instanceof RegExp)
        throw new TypeError("First argument to String.prototype." + y + " must not be a regular expression");
    return b + ""
}
;
$jscomp.polyfill("String.prototype.endsWith", function(b) {
    return b ? b : function(l, y) {
        var m = $jscomp.checkStringArgs(this, l, "endsWith");
        l += "";
        void 0 === y && (y = m.length);
        y = Math.max(0, Math.min(y | 0, m.length));
        for (var u = l.length; 0 < u && 0 < y; )
            if (m[--y] != l[--u])
                return !1;
        return 0 >= u
    }
}, "es6", "es3");
(function(b, l) {
    "object" === typeof module && "object" === typeof module.exports ? module.exports = b.document ? l(b, !0) : function(y) {
        if (!y.document)
            throw Error("jQuery requires a window with a document");
        return l(y)
    }
    : l(b)
}
)("undefined" !== typeof window ? window : this, function(b, l) {
    function y(e, g, k) {
        g = g || Fa;
        var p, t = g.createElement("script");
        t.text = e;
        if (k)
            for (p in Db)
                k[p] && (t[p] = k[p]);
        g.head.appendChild(t).parentNode.removeChild(t)
    }
    function m(e) {
        return null == e ? e + "" : "object" === typeof e || "function" === typeof e ? yb[Kb.call(e)] || "object" : typeof e
    }
    function u(e) {
        var g = !!e && "length"in e && e.length
          , k = m(e);
        return ya(e) || jb(e) ? !1 : "array" === k || 0 === g || "number" === typeof g && 0 < g && g - 1 in e
    }
    function C(e, g) {
        return e.nodeName && e.nodeName.toLowerCase() === g.toLowerCase()
    }
    function v(e, g, k) {
        return ya(g) ? q.grep(e, function(p, t) {
            return !!g.call(p, t, p) !== k
        }) : g.nodeType ? q.grep(e, function(p) {
            return p === g !== k
        }) : "string" !== typeof g ? q.grep(e, function(p) {
            return -1 < zb.call(g, p) !== k
        }) : q.filter(g, e, k)
    }
    function E(e, g) {
        for (; (e = e[g]) && 1 !== e.nodeType; )
            ;
        return e
    }
    function N(e) {
        var g = {};
        q.each(e.match(Ab) || [], function(k, p) {
            g[p] = !0
        });
        return g
    }
    function P(e) {
        return e
    }
    function aa(e) {
        throw e;
    }
    function R(e, g, k, p) {
        var t;
        try {
            e && ya(t = e.promise) ? t.call(e).done(g).fail(k) : e && ya(t = e.then) ? t.call(e, g, k) : g.apply(void 0, [e].slice(p))
        } catch (x) {
            k.apply(void 0, [x])
        }
    }
    function F() {
        Fa.removeEventListener("DOMContentLoaded", F);
        b.removeEventListener("load", F);
        q.ready()
    }
    function J(e, g) {
        return g.toUpperCase()
    }
    function T(e) {
        return e.replace(Qc, "ms-").replace(Rc, J)
    }
    function X() {
        this.expando = q.expando + X.uid++
    }
    function O(e, g, k) {
        if (void 0 === k && 1 === e.nodeType)
            if (k = "data-" + g.replace(Sc, "-$&").toLowerCase(),
            k = e.getAttribute(k),
            "string" === typeof k) {
                try {
                    var p = k;
                    k = "true" === p ? !0 : "false" === p ? !1 : "null" === p ? null : p === +p + "" ? +p : Tc.test(p) ? JSON.parse(p) : p
                } catch (t) {}
                sb.set(e, g, k)
            } else
                k = void 0;
        return k
    }
    function ea(e, g, k, p) {
        var t, x = 20, B = p ? function() {
            return p.cur()
        }
        : function() {
            return q.css(e, g, "")
        }
        , K = B(), I = k && k[3] || (q.cssNumber[g] ? "" : "px"), M = (q.cssNumber[g] || "px" !== I && +K) && Sb.exec(q.css(e, g));
        if (M && M[3] !== I) {
            K /= 2;
            I = I || M[3];
            for (M = +K || 1; x--; )
                q.style(e, g, M + I),
                0 >= (1 - t) * (1 - (t = B() / K || .5)) && (x = 0),
                M /= t;
            M *= 2;
            q.style(e, g, M + I);
            k = k || []
        }
        if (k) {
            M = +M || +K || 0;
            var ba = k[1] ? M + (k[1] + 1) * k[2] : +k[2];
            p && (p.unit = I,
            p.start = M,
            p.end = ba)
        }
        return ba
    }
    function da(e, g) {
        for (var k, p, t = [], x = 0, B = e.length; x < B; x++)
            if (p = e[x],
            p.style)
                if (k = p.style.display,
                g) {
                    if ("none" === k && (t[x] = Ha.get(p, "display") || null,
                    t[x] || (p.style.display = "")),
                    "" === p.style.display && Yb(p)) {
                        k = x;
                        var K = p.ownerDocument;
                        p = p.nodeName;
                        var I = qc[p];
                        I || (K = K.body.appendChild(K.createElement(p)),
                        I = q.css(K, "display"),
                        K.parentNode.removeChild(K),
                        "none" === I && (I = "block"),
                        qc[p] = I);
                        K = I;
                        t[k] = K
                    }
                } else
                    "none" !== k && (t[x] = "none",
                    Ha.set(p, "display", k));
        for (x = 0; x < B; x++)
            null != t[x] && (e[x].style.display = t[x]);
        return e
    }
    function ka(e, g) {
        var k = "undefined" !== typeof e.getElementsByTagName ? e.getElementsByTagName(g || "*") : "undefined" !== typeof e.querySelectorAll ? e.querySelectorAll(g || "*") : [];
        return void 0 === g || g && C(e, g) ? q.merge([e], k) : k
    }
    function wa(e, g) {
        for (var k = 0, p = e.length; k < p; k++)
            Ha.set(e[k], "globalEval", !g || Ha.get(g[k], "globalEval"))
    }
    function S(e, g, k, p, t) {
        for (var x, B, K, I = g.createDocumentFragment(), M = [], ba = 0, la = e.length; ba < la; ba++)
            if ((x = e[ba]) || 0 === x)
                if ("object" === m(x))
                    q.merge(M, x.nodeType ? [x] : x);
                else if (Uc.test(x)) {
                    B = B || I.appendChild(g.createElement("div"));
                    K = (rc.exec(x) || ["", ""])[1].toLowerCase();
                    K = vb[K] || vb._default;
                    B.innerHTML = K[1] + q.htmlPrefilter(x) + K[2];
                    for (K = K[0]; K--; )
                        B = B.lastChild;
                    q.merge(M, B.childNodes);
                    B = I.firstChild;
                    B.textContent = ""
                } else
                    M.push(g.createTextNode(x));
        I.textContent = "";
        for (ba = 0; x = M[ba++]; )
            if (p && -1 < q.inArray(x, p))
                t && t.push(x);
            else if (e = q.contains(x.ownerDocument, x),
            B = ka(I.appendChild(x), "script"),
            e && wa(B),
            k)
                for (K = 0; x = B[K++]; )
                    sc.test(x.type || "") && k.push(x);
        return I
    }
    function Y() {
        return !0
    }
    function oa() {
        return !1
    }
    function ma() {
        try {
            return Fa.activeElement
        } catch (e) {}
    }
    function sa(e, g, k, p, t, x) {
        var B;
        if ("object" === typeof g) {
            "string" !== typeof k && (p = p || k,
            k = void 0);
            for (B in g)
                sa(e, B, k, p, g[B], x);
            return e
        }
        null == p && null == t ? (t = k,
        p = k = void 0) : null == t && ("string" === typeof k ? (t = p,
        p = void 0) : (t = p,
        p = k,
        k = void 0));
        if (!1 === t)
            t = oa;
        else if (!t)
            return e;
        if (1 === x) {
            var K = t;
            t = function(I) {
                q().off(I);
                return K.apply(this, arguments)
            }
            ;
            t.guid = K.guid || (K.guid = q.guid++)
        }
        return e.each(function() {
            q.event.add(this, g, t, p, k)
        })
    }
    function La(e, g) {
        return C(e, "table") && C(11 !== g.nodeType ? g : g.firstChild, "tr") ? q(e).children("tbody")[0] || e : e
    }
    function Na(e) {
        e.type = (null !== e.getAttribute("type")) + "/" + e.type;
        return e
    }
    function Ja(e) {
        "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type");
        return e
    }
    function Ba(e, g) {
        var k, p;
        if (1 === g.nodeType) {
            if (Ha.hasData(e)) {
                var t = Ha.access(e);
                var x = Ha.set(g, t);
                if (t = t.events)
                    for (p in delete x.handle,
                    x.events = {},
                    t)
                        for (x = 0,
                        k = t[p].length; x < k; x++)
                            q.event.add(g, p, t[p][x])
            }
            sb.hasData(e) && (e = sb.access(e),
            e = q.extend({}, e),
            sb.set(g, e))
        }
    }
    function fb(e, g, k, p) {
        g = pb.apply([], g);
        var t, x = 0, B = e.length, K = B - 1, I = g[0], M = ya(I);
        if (M || 1 < B && "string" === typeof I && !ua.checkClone && Vc.test(I))
            return e.each(function(Ua) {
                var Ca = e.eq(Ua);
                M && (g[0] = I.call(this, Ua, Ca.html()));
                fb(Ca, g, k, p)
            });
        if (B) {
            var ba = S(g, e[0].ownerDocument, !1, e, p);
            var la = ba.firstChild;
            1 === ba.childNodes.length && (ba = la);
            if (la || p) {
                la = q.map(ka(ba, "script"), Na);
                for (t = la.length; x < B; x++) {
                    var ra = ba;
                    x !== K && (ra = q.clone(ra, !0, !0),
                    t && q.merge(la, ka(ra, "script")));
                    k.call(e[x], ra, x)
                }
                if (t)
                    for (ba = la[la.length - 1].ownerDocument,
                    q.map(la, Ja),
                    x = 0; x < t; x++)
                        ra = la[x],
                        sc.test(ra.type || "") && !Ha.access(ra, "globalEval") && q.contains(ba, ra) && (ra.src && "module" !== (ra.type || "").toLowerCase() ? q._evalUrl && q._evalUrl(ra.src) : y(ra.textContent.replace(Wc, ""), ba, ra))
            }
        }
        return e
    }
    function a(e, g, k) {
        for (var p = g ? q.filter(g, e) : e, t = 0; null != (g = p[t]); t++)
            k || 1 !== g.nodeType || q.cleanData(ka(g)),
            g.parentNode && (k && q.contains(g.ownerDocument, g) && wa(ka(g, "script")),
            g.parentNode.removeChild(g));
        return e
    }
    function c(e, g, k) {
        var p = e.style;
        if (k = k || Zb(e)) {
            var t = k.getPropertyValue(g) || k[g];
            "" !== t || q.contains(e.ownerDocument, e) || (t = q.style(e, g));
            if (!ua.pixelBoxStyles() && gc.test(t) && Xc.test(g)) {
                e = p.width;
                g = p.minWidth;
                var x = p.maxWidth;
                p.minWidth = p.maxWidth = p.width = t;
                t = k.width;
                p.width = e;
                p.minWidth = g;
                p.maxWidth = x
            }
        }
        return void 0 !== t ? t + "" : t
    }
    function d(e, g) {
        return {
            get: function() {
                if (e())
                    delete this.get;
                else
                    return (this.get = g).apply(this, arguments)
            }
        }
    }
    function f(e) {
        var g = q.cssProps[e];
        if (!g) {
            g = q.cssProps;
            a: {
                var k = e;
                if (!(k in tc)) {
                    for (var p = k[0].toUpperCase() + k.slice(1), t = uc.length; t--; )
                        if (k = uc[t] + p,
                        k in tc)
                            break a;
                    k = void 0
                }
            }
            g = g[e] = k || e
        }
        return g
    }
    function h(e, g, k) {
        return (e = Sb.exec(g)) ? Math.max(0, e[2] - (k || 0)) + (e[3] || "px") : g
    }
    function n(e, g, k, p, t, x) {
        var B = "width" === g ? 1 : 0
          , K = 0
          , I = 0;
        if (k === (p ? "border" : "content"))
            return 0;
        for (; 4 > B; B += 2)
            "margin" === k && (I += q.css(e, k + Eb[B], !0, t)),
            p ? ("content" === k && (I -= q.css(e, "padding" + Eb[B], !0, t)),
            "margin" !== k && (I -= q.css(e, "border" + Eb[B] + "Width", !0, t))) : (I += q.css(e, "padding" + Eb[B], !0, t),
            "padding" !== k ? I += q.css(e, "border" + Eb[B] + "Width", !0, t) : K += q.css(e, "border" + Eb[B] + "Width", !0, t));
        !p && 0 <= x && (I += Math.max(0, Math.ceil(e["offset" + g[0].toUpperCase() + g.slice(1)] - x - I - K - .5)));
        return I
    }
    function r(e, g, k) {
        var p = Zb(e)
          , t = c(e, g, p)
          , x = "border-box" === q.css(e, "boxSizing", !1, p)
          , B = x;
        if (gc.test(t)) {
            if (!k)
                return t;
            t = "auto"
        }
        B = B && (ua.boxSizingReliable() || t === e.style[g]);
        if ("auto" === t || !parseFloat(t) && "inline" === q.css(e, "display", !1, p))
            t = e["offset" + g[0].toUpperCase() + g.slice(1)],
            B = !0;
        t = parseFloat(t) || 0;
        return t + n(e, g, k || (x ? "border" : "content"), B, p, t) + "px"
    }
    function z(e, g, k, p, t) {
        return new z.prototype.init(e,g,k,p,t)
    }
    function A() {
        $b && (!1 === Fa.hidden && b.requestAnimationFrame ? b.requestAnimationFrame(A) : b.setTimeout(A, q.fx.interval),
        q.fx.tick())
    }
    function L() {
        b.setTimeout(function() {
            Pb = void 0
        });
        return Pb = Date.now()
    }
    function U(e, g) {
        var k = 0
          , p = {
            height: e
        };
        for (g = g ? 1 : 0; 4 > k; k += 2 - g) {
            var t = Eb[k];
            p["margin" + t] = p["padding" + t] = e
        }
        g && (p.opacity = p.width = e);
        return p
    }
    function G(e, g, k) {
        for (var p, t = (V.tweeners[g] || []).concat(V.tweeners["*"]), x = 0, B = t.length; x < B; x++)
            if (p = t[x].call(k, g, e))
                return p
    }
    function Q(e, g) {
        var k, p;
        for (k in e) {
            var t = T(k);
            var x = g[t];
            var B = e[k];
            Array.isArray(B) && (x = B[1],
            B = e[k] = B[0]);
            k !== t && (e[t] = B,
            delete e[k]);
            if ((p = q.cssHooks[t]) && "expand"in p)
                for (k in B = p.expand(B),
                delete e[t],
                B)
                    k in e || (e[k] = B[k],
                    g[k] = x);
            else
                g[t] = x
        }
    }
    function V(e, g, k) {
        var p, t = 0, x = V.prefilters.length, B = q.Deferred().always(function() {
            delete K.elem
        }), K = function() {
            if (p)
                return !1;
            var M = Pb || L();
            M = Math.max(0, I.startTime + I.duration - M);
            for (var ba = 1 - (M / I.duration || 0), la = 0, ra = I.tweens.length; la < ra; la++)
                I.tweens[la].run(ba);
            B.notifyWith(e, [I, ba, M]);
            if (1 > ba && ra)
                return M;
            ra || B.notifyWith(e, [I, 1, 0]);
            B.resolveWith(e, [I]);
            return !1
        }, I = B.promise({
            elem: e,
            props: q.extend({}, g),
            opts: q.extend(!0, {
                specialEasing: {},
                easing: q.easing._default
            }, k),
            originalProperties: g,
            originalOptions: k,
            startTime: Pb || L(),
            duration: k.duration,
            tweens: [],
            createTween: function(M, ba) {
                M = q.Tween(e, I.opts, M, ba, I.opts.specialEasing[M] || I.opts.easing);
                I.tweens.push(M);
                return M
            },
            stop: function(M) {
                var ba = 0
                  , la = M ? I.tweens.length : 0;
                if (p)
                    return this;
                for (p = !0; ba < la; ba++)
                    I.tweens[ba].run(1);
                M ? (B.notifyWith(e, [I, 1, 0]),
                B.resolveWith(e, [I, M])) : B.rejectWith(e, [I, M]);
                return this
            }
        });
        k = I.props;
        for (Q(k, I.opts.specialEasing); t < x; t++)
            if (g = V.prefilters[t].call(I, e, k, I.opts))
                return ya(g.stop) && (q._queueHooks(I.elem, I.opts.queue).stop = g.stop.bind(g)),
                g;
        q.map(k, G, I);
        ya(I.opts.start) && I.opts.start.call(e, I);
        I.progress(I.opts.progress).done(I.opts.done, I.opts.complete).fail(I.opts.fail).always(I.opts.always);
        q.fx.timer(q.extend(K, {
            elem: e,
            anim: I,
            queue: I.opts.queue
        }));
        return I
    }
    function ca(e) {
        return (e.match(Ab) || []).join(" ")
    }
    function ia(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function na(e) {
        return Array.isArray(e) ? e : "string" === typeof e ? e.match(Ab) || [] : []
    }
    function ja(e, g, k, p) {
        var t;
        if (Array.isArray(g))
            q.each(g, function(x, B) {
                k || Yc.test(e) ? p(e, B) : ja(e + "[" + ("object" === typeof B && null != B ? x : "") + "]", B, k, p)
            });
        else if (k || "object" !== m(g))
            p(e, g);
        else
            for (t in g)
                ja(e + "[" + t + "]", g[t], k, p)
    }
    function ta(e) {
        return function(g, k) {
            "string" !== typeof g && (k = g,
            g = "*");
            var p = 0
              , t = g.toLowerCase().match(Ab) || [];
            if (ya(k))
                for (; g = t[p++]; )
                    "+" === g[0] ? (g = g.slice(1) || "*",
                    (e[g] = e[g] || []).unshift(k)) : (e[g] = e[g] || []).push(k)
        }
    }
    function qa(e, g, k, p) {
        function t(K) {
            var I;
            x[K] = !0;
            q.each(e[K] || [], function(M, ba) {
                M = ba(g, k, p);
                if ("string" === typeof M && !B && !x[M])
                    return g.dataTypes.unshift(M),
                    t(M),
                    !1;
                if (B)
                    return !(I = M)
            });
            return I
        }
        var x = {}
          , B = e === hc;
        return t(g.dataTypes[0]) || !x["*"] && t("*")
    }
    function Da(e, g) {
        var k, p, t = q.ajaxSettings.flatOptions || {};
        for (k in g)
            void 0 !== g[k] && ((t[k] ? e : p || (p = {}))[k] = g[k]);
        p && q.extend(!0, e, p);
        return e
    }
    var Ra = []
      , Fa = b.document
      , Oa = Object.getPrototypeOf
      , Ta = Ra.slice
      , pb = Ra.concat
      , tb = Ra.push
      , zb = Ra.indexOf
      , yb = {}
      , Kb = yb.toString
      , Ya = yb.hasOwnProperty
      , Pa = Ya.toString
      , kb = Pa.call(Object)
      , ua = {}
      , ya = function(e) {
        return "function" === typeof e && "number" !== typeof e.nodeType
    }
      , jb = function(e) {
        return null != e && e === e.window
    }
      , Db = {
        type: !0,
        src: !0,
        noModule: !0
    }
      , q = function(e, g) {
        return new q.fn.init(e,g)
    }
      , Tb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    q.fn = q.prototype = {
        jquery: "3.3.1",
        constructor: q,
        length: 0,
        toArray: function() {
            return Ta.call(this)
        },
        get: function(e) {
            return null == e ? Ta.call(this) : 0 > e ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            e = q.merge(this.constructor(), e);
            e.prevObject = this;
            return e
        },
        each: function(e) {
            return q.each(this, e)
        },
        map: function(e) {
            return this.pushStack(q.map(this, function(g, k) {
                return e.call(g, k, g)
            }))
        },
        slice: function() {
            return this.pushStack(Ta.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var g = this.length;
            e = +e + (0 > e ? g : 0);
            return this.pushStack(0 <= e && e < g ? [this[e]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: tb,
        sort: Ra.sort,
        splice: Ra.splice
    };
    q.extend = q.fn.extend = function() {
        var e, g, k, p = arguments[0] || {}, t = 1, x = arguments.length, B = !1;
        "boolean" === typeof p && (B = p,
        p = arguments[t] || {},
        t++);
        "object" === typeof p || ya(p) || (p = {});
        t === x && (p = this,
        t--);
        for (; t < x; t++)
            if (null != (e = arguments[t]))
                for (g in e) {
                    var K = p[g];
                    var I = e[g];
                    p !== I && (B && I && (q.isPlainObject(I) || (k = Array.isArray(I))) ? (k ? (k = !1,
                    K = K && Array.isArray(K) ? K : []) : K = K && q.isPlainObject(K) ? K : {},
                    p[g] = q.extend(B, K, I)) : void 0 !== I && (p[g] = I))
                }
        return p
    }
    ;
    q.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw Error(e);
        },
        noop: function() {},
        isPlainObject: function(e) {
            if (!e || "[object Object]" !== Kb.call(e))
                return !1;
            e = Oa(e);
            if (!e)
                return !0;
            e = Ya.call(e, "constructor") && e.constructor;
            return "function" === typeof e && Pa.call(e) === kb
        },
        isEmptyObject: function(e) {
            for (var g in e)
                return !1;
            return !0
        },
        globalEval: function(e) {
            y(e)
        },
        each: function(e, g) {
            var k, p = 0;
            if (u(e))
                for (k = e.length; p < k && !1 !== g.call(e[p], p, e[p]); p++)
                    ;
            else
                for (p in e)
                    if (!1 === g.call(e[p], p, e[p]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(Tb, "")
        },
        makeArray: function(e, g) {
            g = g || [];
            null != e && (u(Object(e)) ? q.merge(g, "string" === typeof e ? [e] : e) : tb.call(g, e));
            return g
        },
        inArray: function(e, g, k) {
            return null == g ? -1 : zb.call(g, e, k)
        },
        merge: function(e, g) {
            for (var k = +g.length, p = 0, t = e.length; p < k; p++)
                e[t++] = g[p];
            e.length = t;
            return e
        },
        grep: function(e, g, k) {
            for (var p = [], t = 0, x = e.length, B = !k; t < x; t++)
                k = !g(e[t], t),
                k !== B && p.push(e[t]);
            return p
        },
        map: function(e, g, k) {
            var p, t = 0, x = [];
            if (u(e))
                for (p = e.length; t < p; t++) {
                    var B = g(e[t], t, k);
                    null != B && x.push(B)
                }
            else
                for (t in e)
                    B = g(e[t], t, k),
                    null != B && x.push(B);
            return pb.apply([], x)
        },
        guid: 1,
        support: ua
    });
    "function" === typeof Symbol && (q.fn[Symbol.iterator] = Ra[Symbol.iterator]);
    q.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, g) {
        yb["[object " + g + "]"] = g.toLowerCase()
    });
    var ub = function(e) {
        function g(w, H, D, W) {
            var Z, fa, pa, xa, ha = H && H.ownerDocument, za = H ? H.nodeType : 9;
            D = D || [];
            if ("string" !== typeof w || !w || 1 !== za && 9 !== za && 11 !== za)
                return D;
            if (!W && ((H ? H.ownerDocument || H : cb) !== Ka && Lb(H),
            H = H || Ka,
            Sa)) {
                if (11 !== za && (xa = Zc.exec(w)))
                    if (Z = xa[1])
                        if (9 === za)
                            if (fa = H.getElementById(Z)) {
                                if (fa.id === Z)
                                    return D.push(fa),
                                    D
                            } else
                                return D;
                        else {
                            if (ha && (fa = ha.getElementById(Z)) && ob(H, fa) && fa.id === Z)
                                return D.push(fa),
                                D
                        }
                    else {
                        if (xa[2])
                            return Ib.apply(D, H.getElementsByTagName(w)),
                            D;
                        if ((Z = xa[3]) && ab.getElementsByClassName && H.getElementsByClassName)
                            return Ib.apply(D, H.getElementsByClassName(Z)),
                            D
                    }
                if (!(!ab.qsa || Mb[w + " "] || Va && Va.test(w))) {
                    if (1 !== za) {
                        ha = H;
                        var Ia = w
                    } else if ("object" !== H.nodeName.toLowerCase()) {
                        (pa = H.getAttribute("id")) ? pa = pa.replace(vc, wc) : H.setAttribute("id", pa = Ga);
                        fa = ac(w);
                        for (Z = fa.length; Z--; )
                            fa[Z] = "#" + pa + " " + Ua(fa[Z]);
                        Ia = fa.join(",");
                        ha = ic.test(w) && la(H.parentNode) || H
                    }
                    if (Ia)
                        try {
                            return Ib.apply(D, ha.querySelectorAll(Ia)),
                            D
                        } catch (va) {} finally {
                            pa === Ga && H.removeAttribute("id")
                        }
                }
            }
            return $c(w.replace(bc, "$1"), H, D, W)
        }
        function k() {
            function w(D, W) {
                H.push(D + " ") > Qa.cacheLength && delete w[H.shift()];
                return w[D + " "] = W
            }
            var H = [];
            return w
        }
        function p(w) {
            w[Ga] = !0;
            return w
        }
        function t(w) {
            var H = Ka.createElement("fieldset");
            try {
                return !!w(H)
            } catch (D) {
                return !1
            } finally {
                H.parentNode && H.parentNode.removeChild(H)
            }
        }
        function x(w, H) {
            w = w.split("|");
            for (var D = w.length; D--; )
                Qa.attrHandle[w[D]] = H
        }
        function B(w, H) {
            var D = H && w
              , W = D && 1 === w.nodeType && 1 === H.nodeType && w.sourceIndex - H.sourceIndex;
            if (W)
                return W;
            if (D)
                for (; D = D.nextSibling; )
                    if (D === H)
                        return -1;
            return w ? 1 : -1
        }
        function K(w) {
            return function(H) {
                return "input" === H.nodeName.toLowerCase() && H.type === w
            }
        }
        function I(w) {
            return function(H) {
                var D = H.nodeName.toLowerCase();
                return ("input" === D || "button" === D) && H.type === w
            }
        }
        function M(w) {
            return function(H) {
                return "form"in H ? H.parentNode && !1 === H.disabled ? "label"in H ? "label"in H.parentNode ? H.parentNode.disabled === w : H.disabled === w : H.isDisabled === w || H.isDisabled !== !w && ad(H) === w : H.disabled === w : "label"in H ? H.disabled === w : !1
            }
        }
        function ba(w) {
            return p(function(H) {
                H = +H;
                return p(function(D, W) {
                    for (var Z, fa = w([], D.length, H), pa = fa.length; pa--; )
                        D[Z = fa[pa]] && (D[Z] = !(W[Z] = D[Z]))
                })
            })
        }
        function la(w) {
            return w && "undefined" !== typeof w.getElementsByTagName && w
        }
        function ra() {}
        function Ua(w) {
            for (var H = 0, D = w.length, W = ""; H < D; H++)
                W += w[H].value;
            return W
        }
        function Ca(w, H, D) {
            var W = H.dir
              , Z = H.next
              , fa = Z || W
              , pa = D && "parentNode" === fa
              , xa = Qb++;
            return H.first ? function(ha, za, Ia) {
                for (; ha = ha[W]; )
                    if (1 === ha.nodeType || pa)
                        return w(ha, za, Ia);
                return !1
            }
            : function(ha, za, Ia) {
                var va, Wa = [gb, xa];
                if (Ia)
                    for (; ha = ha[W]; ) {
                        if ((1 === ha.nodeType || pa) && w(ha, za, Ia))
                            return !0
                    }
                else
                    for (; ha = ha[W]; )
                        if (1 === ha.nodeType || pa) {
                            var $a = ha[Ga] || (ha[Ga] = {});
                            $a = $a[ha.uniqueID] || ($a[ha.uniqueID] = {});
                            if (Z && Z === ha.nodeName.toLowerCase())
                                ha = ha[W] || ha;
                            else {
                                if ((va = $a[fa]) && va[0] === gb && va[1] === xa)
                                    return Wa[2] = va[2];
                                $a[fa] = Wa;
                                if (Wa[2] = w(ha, za, Ia))
                                    return !0
                            }
                        }
                return !1
            }
        }
        function lb(w) {
            return 1 < w.length ? function(H, D, W) {
                for (var Z = w.length; Z--; )
                    if (!w[Z](H, D, W))
                        return !1;
                return !0
            }
            : w[0]
        }
        function mb(w, H, D, W, Z) {
            for (var fa, pa = [], xa = 0, ha = w.length, za = null != H; xa < ha; xa++)
                if (fa = w[xa])
                    if (!D || D(fa, W, Z))
                        pa.push(fa),
                        za && H.push(xa);
            return pa
        }
        function wb(w, H, D, W, Z, fa) {
            W && !W[Ga] && (W = wb(W));
            Z && !Z[Ga] && (Z = wb(Z, fa));
            return p(function(pa, xa, ha, za) {
                var Ia, va = [], Wa = [], $a = xa.length, hb;
                if (!(hb = pa)) {
                    hb = H || "*";
                    for (var Ea = ha.nodeType ? [ha] : ha, Bb = [], bb = 0, cc = Ea.length; bb < cc; bb++)
                        g(hb, Ea[bb], Bb);
                    hb = Bb
                }
                hb = !w || !pa && H ? hb : mb(hb, va, w, ha, za);
                Ea = D ? Z || (pa ? w : $a || W) ? [] : xa : hb;
                D && D(hb, Ea, ha, za);
                if (W) {
                    var xb = mb(Ea, Wa);
                    W(xb, [], ha, za);
                    for (ha = xb.length; ha--; )
                        if (Ia = xb[ha])
                            Ea[Wa[ha]] = !(hb[Wa[ha]] = Ia)
                }
                if (pa) {
                    if (Z || w) {
                        if (Z) {
                            xb = [];
                            for (ha = Ea.length; ha--; )
                                (Ia = Ea[ha]) && xb.push(hb[ha] = Ia);
                            Z(null, Ea = [], xb, za)
                        }
                        for (ha = Ea.length; ha--; )
                            (Ia = Ea[ha]) && -1 < (xb = Z ? Nb(pa, Ia) : va[ha]) && (pa[xb] = !(xa[xb] = Ia))
                    }
                } else
                    Ea = mb(Ea === xa ? Ea.splice($a, Ea.length) : Ea),
                    Z ? Z(null, xa, Ea, za) : Ib.apply(xa, Ea)
            })
        }
        function Aa(w) {
            var H, D, W = w.length, Z = Qa.relative[w[0].type];
            var fa = Z || Qa.relative[" "];
            for (var pa = Z ? 1 : 0, xa = Ca(function(Ia) {
                return Ia === H
            }, fa, !0), ha = Ca(function(Ia) {
                return -1 < Nb(H, Ia)
            }, fa, !0), za = [function(Ia, va, Wa) {
                Ia = !Z && (Wa || va !== Ma) || ((H = va).nodeType ? xa(Ia, va, Wa) : ha(Ia, va, Wa));
                H = null;
                return Ia
            }
            ]; pa < W; pa++)
                if (fa = Qa.relative[w[pa].type])
                    za = [Ca(lb(za), fa)];
                else {
                    fa = Qa.filter[w[pa].type].apply(null, w[pa].matches);
                    if (fa[Ga]) {
                        for (D = ++pa; D < W && !Qa.relative[w[D].type]; D++)
                            ;
                        return wb(1 < pa && lb(za), 1 < pa && Ua(w.slice(0, pa - 1).concat({
                            value: " " === w[pa - 2].type ? "*" : ""
                        })).replace(bc, "$1"), fa, pa < D && Aa(w.slice(pa, D)), D < W && Aa(w = w.slice(D)), D < W && Ua(w))
                    }
                    za.push(fa)
                }
            return lb(za)
        }
        function ib(w, H) {
            var D = 0 < H.length
              , W = 0 < w.length
              , Z = function(fa, pa, xa, ha, za) {
                var Ia, va, Wa = 0, $a = "0", hb = fa && [], Ea = [], Bb = Ma, bb = fa || W && Qa.find.TAG("*", za), cc = gb += null == Bb ? 1 : Math.random() || .1, xb = bb.length;
                for (za && (Ma = pa === Ka || pa || za); $a !== xb && null != (Ia = bb[$a]); $a++) {
                    if (W && Ia) {
                        var jc = 0;
                        pa || Ia.ownerDocument === Ka || (Lb(Ia),
                        xa = !Sa);
                        for (; va = w[jc++]; )
                            if (va(Ia, pa || Ka, xa)) {
                                ha.push(Ia);
                                break
                            }
                        za && (gb = cc)
                    }
                    D && ((Ia = !va && Ia) && Wa--,
                    fa && hb.push(Ia))
                }
                Wa += $a;
                if (D && $a !== Wa) {
                    for (jc = 0; va = H[jc++]; )
                        va(hb, Ea, pa, xa);
                    if (fa) {
                        if (0 < Wa)
                            for (; $a--; )
                                hb[$a] || Ea[$a] || (Ea[$a] = bd.call(ha));
                        Ea = mb(Ea)
                    }
                    Ib.apply(ha, Ea);
                    za && !fa && 0 < Ea.length && 1 < Wa + H.length && g.uniqueSort(ha)
                }
                za && (gb = cc,
                Ma = Bb);
                return hb
            };
            return D ? p(Z) : Z
        }
        var nb, Ma, Za, db, Ka, Xa, Sa, Va, eb, qb, ob, Ga = "sizzle" + 1 * new Date, cb = e.document, gb = 0, Qb = 0, Cb = k(), rb = k(), Mb = k(), Jb = function(w, H) {
            w === H && (db = !0);
            return 0
        }, kc = {}.hasOwnProperty, Ob = [], bd = Ob.pop, cd = Ob.push, Ib = Ob.push, xc = Ob.slice, Nb = function(w, H) {
            for (var D = 0, W = w.length; D < W; D++)
                if (w[D] === H)
                    return D;
            return -1
        }, dd = /[\x20\t\r\n\f]+/g, bc = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g, ed = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/, fd = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/, gd = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g, hd = /:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/, id = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/, dc = {
            ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
            CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
            TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
            ATTR: /^\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\]/,
            PSEUDO: /^:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
            CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
            bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
            needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
        }, jd = /^(?:input|select|textarea|button)$/i, kd = /^h\d$/i, Ub = /^[^{]+\{\s*\[native \w/, Zc = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ic = /[+~]/, Fb = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig, Gb = function(w, H, D) {
            w = "0x" + H - 65536;
            return w !== w || D ? H : 0 > w ? String.fromCharCode(w + 65536) : String.fromCharCode(w >> 10 | 55296, w & 1023 | 56320)
        }, vc = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, wc = function(w, H) {
            return H ? "\x00" === w ? "\ufffd" : w.slice(0, -1) + "\\" + w.charCodeAt(w.length - 1).toString(16) + " " : "\\" + w
        }, yc = function() {
            Lb()
        }, ad = Ca(function(w) {
            return !0 === w.disabled && ("form"in w || "label"in w)
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            Ib.apply(Ob = xc.call(cb.childNodes), cb.childNodes),
            Ob[cb.childNodes.length].nodeType
        } catch (w) {
            Ib = {
                apply: Ob.length ? function(H, D) {
                    cd.apply(H, xc.call(D))
                }
                : function(H, D) {
                    for (var W = H.length, Z = 0; H[W++] = D[Z++]; )
                        ;
                    H.length = W - 1
                }
            }
        }
        var ab = g.support = {};
        var ld = g.isXML = function(w) {
            return (w = w && (w.ownerDocument || w).documentElement) ? "HTML" !== w.nodeName : !1
        }
        ;
        var Lb = g.setDocument = function(w) {
            var H;
            w = w ? w.ownerDocument || w : cb;
            if (w === Ka || 9 !== w.nodeType || !w.documentElement)
                return Ka;
            Ka = w;
            Xa = Ka.documentElement;
            Sa = !ld(Ka);
            cb !== Ka && (H = Ka.defaultView) && H.top !== H && (H.addEventListener ? H.addEventListener("unload", yc, !1) : H.attachEvent && H.attachEvent("onunload", yc));
            ab.attributes = t(function(D) {
                D.className = "i";
                return !D.getAttribute("className")
            });
            ab.getElementsByTagName = t(function(D) {
                D.appendChild(Ka.createComment(""));
                return !D.getElementsByTagName("*").length
            });
            ab.getElementsByClassName = Ub.test(Ka.getElementsByClassName);
            ab.getById = t(function(D) {
                Xa.appendChild(D).id = Ga;
                return !Ka.getElementsByName || !Ka.getElementsByName(Ga).length
            });
            ab.getById ? (Qa.filter.ID = function(D) {
                var W = D.replace(Fb, Gb);
                return function(Z) {
                    return Z.getAttribute("id") === W
                }
            }
            ,
            Qa.find.ID = function(D, W) {
                if ("undefined" !== typeof W.getElementById && Sa)
                    return (D = W.getElementById(D)) ? [D] : []
            }
            ) : (Qa.filter.ID = function(D) {
                var W = D.replace(Fb, Gb);
                return function(Z) {
                    return (Z = "undefined" !== typeof Z.getAttributeNode && Z.getAttributeNode("id")) && Z.value === W
                }
            }
            ,
            Qa.find.ID = function(D, W) {
                if ("undefined" !== typeof W.getElementById && Sa) {
                    var Z, fa = W.getElementById(D);
                    if (fa) {
                        if ((Z = fa.getAttributeNode("id")) && Z.value === D)
                            return [fa];
                        var pa = W.getElementsByName(D);
                        for (W = 0; fa = pa[W++]; )
                            if ((Z = fa.getAttributeNode("id")) && Z.value === D)
                                return [fa]
                    }
                    return []
                }
            }
            );
            Qa.find.TAG = ab.getElementsByTagName ? function(D, W) {
                if ("undefined" !== typeof W.getElementsByTagName)
                    return W.getElementsByTagName(D);
                if (ab.qsa)
                    return W.querySelectorAll(D)
            }
            : function(D, W) {
                var Z = []
                  , fa = 0;
                W = W.getElementsByTagName(D);
                if ("*" === D) {
                    for (; D = W[fa++]; )
                        1 === D.nodeType && Z.push(D);
                    return Z
                }
                return W
            }
            ;
            Qa.find.CLASS = ab.getElementsByClassName && function(D, W) {
                if ("undefined" !== typeof W.getElementsByClassName && Sa)
                    return W.getElementsByClassName(D)
            }
            ;
            eb = [];
            Va = [];
            if (ab.qsa = Ub.test(Ka.querySelectorAll))
                t(function(D) {
                    Xa.appendChild(D).innerHTML = "<a id='" + Ga + "'></a><select id='" + Ga + "-\r\\' msallowcapture=''><option selected=''></option></select>";
                    D.querySelectorAll("[msallowcapture^='']").length && Va.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                    D.querySelectorAll("[selected]").length || Va.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                    D.querySelectorAll("[id~=" + Ga + "-]").length || Va.push("~=");
                    D.querySelectorAll(":checked").length || Va.push(":checked");
                    D.querySelectorAll("a#" + Ga + "+*").length || Va.push(".#.+[+~]")
                }),
                t(function(D) {
                    D.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var W = Ka.createElement("input");
                    W.setAttribute("type", "hidden");
                    D.appendChild(W).setAttribute("name", "D");
                    D.querySelectorAll("[name=d]").length && Va.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
                    2 !== D.querySelectorAll(":enabled").length && Va.push(":enabled", ":disabled");
                    Xa.appendChild(D).disabled = !0;
                    2 !== D.querySelectorAll(":disabled").length && Va.push(":enabled", ":disabled");
                    D.querySelectorAll("*,:x");
                    Va.push(",.*:")
                });
            (ab.matchesSelector = Ub.test(qb = Xa.matches || Xa.webkitMatchesSelector || Xa.mozMatchesSelector || Xa.oMatchesSelector || Xa.msMatchesSelector)) && t(function(D) {
                ab.disconnectedMatch = qb.call(D, "*");
                qb.call(D, "[s!='']:x");
                eb.push("!=", ":((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)")
            });
            Va = Va.length && new RegExp(Va.join("|"));
            eb = eb.length && new RegExp(eb.join("|"));
            ob = (H = Ub.test(Xa.compareDocumentPosition)) || Ub.test(Xa.contains) ? function(D, W) {
                var Z = 9 === D.nodeType ? D.documentElement : D;
                W = W && W.parentNode;
                return D === W || !!(W && 1 === W.nodeType && (Z.contains ? Z.contains(W) : D.compareDocumentPosition && D.compareDocumentPosition(W) & 16))
            }
            : function(D, W) {
                if (W)
                    for (; W = W.parentNode; )
                        if (W === D)
                            return !0;
                return !1
            }
            ;
            Jb = H ? function(D, W) {
                if (D === W)
                    return db = !0,
                    0;
                var Z = !D.compareDocumentPosition - !W.compareDocumentPosition;
                if (Z)
                    return Z;
                Z = (D.ownerDocument || D) === (W.ownerDocument || W) ? D.compareDocumentPosition(W) : 1;
                return Z & 1 || !ab.sortDetached && W.compareDocumentPosition(D) === Z ? D === Ka || D.ownerDocument === cb && ob(cb, D) ? -1 : W === Ka || W.ownerDocument === cb && ob(cb, W) ? 1 : Za ? Nb(Za, D) - Nb(Za, W) : 0 : Z & 4 ? -1 : 1
            }
            : function(D, W) {
                if (D === W)
                    return db = !0,
                    0;
                var Z = 0
                  , fa = D.parentNode
                  , pa = W.parentNode
                  , xa = [D]
                  , ha = [W];
                if (!fa || !pa)
                    return D === Ka ? -1 : W === Ka ? 1 : fa ? -1 : pa ? 1 : Za ? Nb(Za, D) - Nb(Za, W) : 0;
                if (fa === pa)
                    return B(D, W);
                for (; D = D.parentNode; )
                    xa.unshift(D);
                for (D = W; D = D.parentNode; )
                    ha.unshift(D);
                for (; xa[Z] === ha[Z]; )
                    Z++;
                return Z ? B(xa[Z], ha[Z]) : xa[Z] === cb ? -1 : ha[Z] === cb ? 1 : 0
            }
            ;
            return Ka
        }
        ;
        g.matches = function(w, H) {
            return g(w, null, null, H)
        }
        ;
        g.matchesSelector = function(w, H) {
            (w.ownerDocument || w) !== Ka && Lb(w);
            H = H.replace(gd, "='$1']");
            if (!(!ab.matchesSelector || !Sa || Mb[H + " "] || eb && eb.test(H) || Va && Va.test(H)))
                try {
                    var D = qb.call(w, H);
                    if (D || ab.disconnectedMatch || w.document && 11 !== w.document.nodeType)
                        return D
                } catch (W) {}
            return 0 < g(H, Ka, null, [w]).length
        }
        ;
        g.contains = function(w, H) {
            (w.ownerDocument || w) !== Ka && Lb(w);
            return ob(w, H)
        }
        ;
        g.attr = function(w, H) {
            (w.ownerDocument || w) !== Ka && Lb(w);
            var D = Qa.attrHandle[H.toLowerCase()];
            D = D && kc.call(Qa.attrHandle, H.toLowerCase()) ? D(w, H, !Sa) : void 0;
            return void 0 !== D ? D : ab.attributes || !Sa ? w.getAttribute(H) : (D = w.getAttributeNode(H)) && D.specified ? D.value : null
        }
        ;
        g.escape = function(w) {
            return (w + "").replace(vc, wc)
        }
        ;
        g.error = function(w) {
            throw Error("Syntax error, unrecognized expression: " + w);
        }
        ;
        g.uniqueSort = function(w) {
            var H, D = [], W = 0, Z = 0;
            db = !ab.detectDuplicates;
            Za = !ab.sortStable && w.slice(0);
            w.sort(Jb);
            if (db) {
                for (; H = w[Z++]; )
                    H === w[Z] && (W = D.push(Z));
                for (; W--; )
                    w.splice(D[W], 1)
            }
            Za = null;
            return w
        }
        ;
        var lc = g.getText = function(w) {
            var H = ""
              , D = 0;
            var W = w.nodeType;
            if (!W)
                for (; W = w[D++]; )
                    H += lc(W);
            else if (1 === W || 9 === W || 11 === W) {
                if ("string" === typeof w.textContent)
                    return w.textContent;
                for (w = w.firstChild; w; w = w.nextSibling)
                    H += lc(w)
            } else if (3 === W || 4 === W)
                return w.nodeValue;
            return H
        }
        ;
        var Qa = g.selectors = {
            cacheLength: 50,
            createPseudo: p,
            match: dc,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(w) {
                    w[1] = w[1].replace(Fb, Gb);
                    w[3] = (w[3] || w[4] || w[5] || "").replace(Fb, Gb);
                    "~=" === w[2] && (w[3] = " " + w[3] + " ");
                    return w.slice(0, 4)
                },
                CHILD: function(w) {
                    w[1] = w[1].toLowerCase();
                    "nth" === w[1].slice(0, 3) ? (w[3] || g.error(w[0]),
                    w[4] = +(w[4] ? w[5] + (w[6] || 1) : 2 * ("even" === w[3] || "odd" === w[3])),
                    w[5] = +(w[7] + w[8] || "odd" === w[3])) : w[3] && g.error(w[0]);
                    return w
                },
                PSEUDO: function(w) {
                    var H, D = !w[6] && w[2];
                    if (dc.CHILD.test(w[0]))
                        return null;
                    w[3] ? w[2] = w[4] || w[5] || "" : D && hd.test(D) && (H = ac(D, !0)) && (H = D.indexOf(")", D.length - H) - D.length) && (w[0] = w[0].slice(0, H),
                    w[2] = D.slice(0, H));
                    return w.slice(0, 3)
                }
            },
            filter: {
                TAG: function(w) {
                    var H = w.replace(Fb, Gb).toLowerCase();
                    return "*" === w ? function() {
                        return !0
                    }
                    : function(D) {
                        return D.nodeName && D.nodeName.toLowerCase() === H
                    }
                },
                CLASS: function(w) {
                    var H = Cb[w + " "];
                    return H || (H = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + w + "([\\x20\\t\\r\\n\\f]|$)"),
                    Cb(w, function(D) {
                        return H.test("string" === typeof D.className && D.className || "undefined" !== typeof D.getAttribute && D.getAttribute("class") || "")
                    }))
                },
                ATTR: function(w, H, D) {
                    return function(W) {
                        W = g.attr(W, w);
                        if (null == W)
                            return "!=" === H;
                        if (!H)
                            return !0;
                        W += "";
                        return "=" === H ? W === D : "!=" === H ? W !== D : "^=" === H ? D && 0 === W.indexOf(D) : "*=" === H ? D && -1 < W.indexOf(D) : "$=" === H ? D && W.slice(-D.length) === D : "~=" === H ? -1 < (" " + W.replace(dd, " ") + " ").indexOf(D) : "|=" === H ? W === D || W.slice(0, D.length + 1) === D + "-" : !1
                    }
                },
                CHILD: function(w, H, D, W, Z) {
                    var fa = "nth" !== w.slice(0, 3)
                      , pa = "last" !== w.slice(-4)
                      , xa = "of-type" === H;
                    return 1 === W && 0 === Z ? function(ha) {
                        return !!ha.parentNode
                    }
                    : function(ha, za, Ia) {
                        var va, Wa;
                        za = fa !== pa ? "nextSibling" : "previousSibling";
                        var $a = ha.parentNode
                          , hb = xa && ha.nodeName.toLowerCase();
                        Ia = !Ia && !xa;
                        var Ea = !1;
                        if ($a) {
                            if (fa) {
                                for (; za; ) {
                                    for (va = ha; va = va[za]; )
                                        if (xa ? va.nodeName.toLowerCase() === hb : 1 === va.nodeType)
                                            return !1;
                                    var Bb = za = "only" === w && !Bb && "nextSibling"
                                }
                                return !0
                            }
                            Bb = [pa ? $a.firstChild : $a.lastChild];
                            if (pa && Ia) {
                                va = $a;
                                var bb = va[Ga] || (va[Ga] = {});
                                bb = bb[va.uniqueID] || (bb[va.uniqueID] = {});
                                Ea = bb[w] || [];
                                Ea = (Wa = Ea[0] === gb && Ea[1]) && Ea[2];
                                for (va = Wa && $a.childNodes[Wa]; va = ++Wa && va && va[za] || (Ea = Wa = 0) || Bb.pop(); )
                                    if (1 === va.nodeType && ++Ea && va === ha) {
                                        bb[w] = [gb, Wa, Ea];
                                        break
                                    }
                            } else if (Ia && (va = ha,
                            bb = va[Ga] || (va[Ga] = {}),
                            bb = bb[va.uniqueID] || (bb[va.uniqueID] = {}),
                            Ea = bb[w] || [],
                            Ea = Wa = Ea[0] === gb && Ea[1]),
                            !1 === Ea)
                                for (; (va = ++Wa && va && va[za] || (Ea = Wa = 0) || Bb.pop()) && ((xa ? va.nodeName.toLowerCase() !== hb : 1 !== va.nodeType) || !++Ea || (Ia && (bb = va[Ga] || (va[Ga] = {}),
                                bb = bb[va.uniqueID] || (bb[va.uniqueID] = {}),
                                bb[w] = [gb, Ea]),
                                va !== ha)); )
                                    ;
                            Ea -= Z;
                            return Ea === W || 0 === Ea % W && 0 <= Ea / W
                        }
                    }
                },
                PSEUDO: function(w, H) {
                    var D = Qa.pseudos[w] || Qa.setFilters[w.toLowerCase()] || g.error("unsupported pseudo: " + w);
                    if (D[Ga])
                        return D(H);
                    if (1 < D.length) {
                        var W = [w, w, "", H];
                        return Qa.setFilters.hasOwnProperty(w.toLowerCase()) ? p(function(Z, fa) {
                            for (var pa, xa = D(Z, H), ha = xa.length; ha--; )
                                pa = Nb(Z, xa[ha]),
                                Z[pa] = !(fa[pa] = xa[ha])
                        }) : function(Z) {
                            return D(Z, 0, W)
                        }
                    }
                    return D
                }
            },
            pseudos: {
                not: p(function(w) {
                    var H = []
                      , D = []
                      , W = zc(w.replace(bc, "$1"));
                    return W[Ga] ? p(function(Z, fa, pa, xa) {
                        xa = W(Z, null, xa, []);
                        for (var ha = Z.length; ha--; )
                            if (pa = xa[ha])
                                Z[ha] = !(fa[ha] = pa)
                    }) : function(Z, fa, pa) {
                        H[0] = Z;
                        W(H, null, pa, D);
                        H[0] = null;
                        return !D.pop()
                    }
                }),
                has: p(function(w) {
                    return function(H) {
                        return 0 < g(w, H).length
                    }
                }),
                contains: p(function(w) {
                    w = w.replace(Fb, Gb);
                    return function(H) {
                        return -1 < (H.textContent || H.innerText || lc(H)).indexOf(w)
                    }
                }),
                lang: p(function(w) {
                    id.test(w || "") || g.error("unsupported lang: " + w);
                    w = w.replace(Fb, Gb).toLowerCase();
                    return function(H) {
                        var D;
                        do
                            if (D = Sa ? H.lang : H.getAttribute("xml:lang") || H.getAttribute("lang"))
                                return D = D.toLowerCase(),
                                D === w || 0 === D.indexOf(w + "-");
                        while ((H = H.parentNode) && 1 === H.nodeType);
                        return !1
                    }
                }),
                target: function(w) {
                    var H = e.location && e.location.hash;
                    return H && H.slice(1) === w.id
                },
                root: function(w) {
                    return w === Xa
                },
                focus: function(w) {
                    return w === Ka.activeElement && (!Ka.hasFocus || Ka.hasFocus()) && !!(w.type || w.href || ~w.tabIndex)
                },
                enabled: M(!1),
                disabled: M(!0),
                checked: function(w) {
                    var H = w.nodeName.toLowerCase();
                    return "input" === H && !!w.checked || "option" === H && !!w.selected
                },
                selected: function(w) {
                    w.parentNode && w.parentNode.selectedIndex;
                    return !0 === w.selected
                },
                empty: function(w) {
                    for (w = w.firstChild; w; w = w.nextSibling)
                        if (6 > w.nodeType)
                            return !1;
                    return !0
                },
                parent: function(w) {
                    return !Qa.pseudos.empty(w)
                },
                header: function(w) {
                    return kd.test(w.nodeName)
                },
                input: function(w) {
                    return jd.test(w.nodeName)
                },
                button: function(w) {
                    var H = w.nodeName.toLowerCase();
                    return "input" === H && "button" === w.type || "button" === H
                },
                text: function(w) {
                    var H;
                    return "input" === w.nodeName.toLowerCase() && "text" === w.type && (null == (H = w.getAttribute("type")) || "text" === H.toLowerCase())
                },
                first: ba(function() {
                    return [0]
                }),
                last: ba(function(w, H) {
                    return [H - 1]
                }),
                eq: ba(function(w, H, D) {
                    return [0 > D ? D + H : D]
                }),
                even: ba(function(w, H) {
                    for (var D = 0; D < H; D += 2)
                        w.push(D);
                    return w
                }),
                odd: ba(function(w, H) {
                    for (var D = 1; D < H; D += 2)
                        w.push(D);
                    return w
                }),
                lt: ba(function(w, H, D) {
                    for (H = 0 > D ? D + H : D; 0 <= --H; )
                        w.push(H);
                    return w
                }),
                gt: ba(function(w, H, D) {
                    for (D = 0 > D ? D + H : D; ++D < H; )
                        w.push(D);
                    return w
                })
            }
        };
        Qa.pseudos.nth = Qa.pseudos.eq;
        for (nb in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            Qa.pseudos[nb] = K(nb);
        for (nb in {
            submit: !0,
            reset: !0
        })
            Qa.pseudos[nb] = I(nb);
        ra.prototype = Qa.filters = Qa.pseudos;
        Qa.setFilters = new ra;
        var ac = g.tokenize = function(w, H) {
            var D, W, Z, fa, pa;
            if (fa = rb[w + " "])
                return H ? 0 : fa.slice(0);
            fa = w;
            var xa = [];
            for (pa = Qa.preFilter; fa; ) {
                if (!ha || (D = ed.exec(fa)))
                    D && (fa = fa.slice(D[0].length) || fa),
                    xa.push(W = []);
                var ha = !1;
                if (D = fd.exec(fa))
                    ha = D.shift(),
                    W.push({
                        value: ha,
                        type: D[0].replace(bc, " ")
                    }),
                    fa = fa.slice(ha.length);
                for (Z in Qa.filter)
                    !(D = dc[Z].exec(fa)) || pa[Z] && !(D = pa[Z](D)) || (ha = D.shift(),
                    W.push({
                        value: ha,
                        type: Z,
                        matches: D
                    }),
                    fa = fa.slice(ha.length));
                if (!ha)
                    break
            }
            return H ? fa.length : fa ? g.error(w) : rb(w, xa).slice(0)
        }
        ;
        var zc = g.compile = function(w, H) {
            var D, W = [], Z = [], fa = Mb[w + " "];
            if (!fa) {
                H || (H = ac(w));
                for (D = H.length; D--; )
                    fa = Aa(H[D]),
                    fa[Ga] ? W.push(fa) : Z.push(fa);
                fa = Mb(w, ib(Z, W));
                fa.selector = w
            }
            return fa
        }
        ;
        var $c = g.select = function(w, H, D, W) {
            var Z, fa, pa, xa = "function" === typeof w && w, ha = !W && ac(w = xa.selector || w);
            D = D || [];
            if (1 === ha.length) {
                var za = ha[0] = ha[0].slice(0);
                if (2 < za.length && "ID" === (fa = za[0]).type && 9 === H.nodeType && Sa && Qa.relative[za[1].type]) {
                    H = (Qa.find.ID(fa.matches[0].replace(Fb, Gb), H) || [])[0];
                    if (!H)
                        return D;
                    xa && (H = H.parentNode);
                    w = w.slice(za.shift().value.length)
                }
                for (Z = dc.needsContext.test(w) ? 0 : za.length; Z--; ) {
                    fa = za[Z];
                    if (Qa.relative[pa = fa.type])
                        break;
                    if (pa = Qa.find[pa])
                        if (W = pa(fa.matches[0].replace(Fb, Gb), ic.test(za[0].type) && la(H.parentNode) || H)) {
                            za.splice(Z, 1);
                            w = W.length && Ua(za);
                            if (!w)
                                return Ib.apply(D, W),
                                D;
                            break
                        }
                }
            }
            (xa || zc(w, ha))(W, H, !Sa, D, !H || ic.test(w) && la(H.parentNode) || H);
            return D
        }
        ;
        ab.sortStable = Ga.split("").sort(Jb).join("") === Ga;
        ab.detectDuplicates = !!db;
        Lb();
        ab.sortDetached = t(function(w) {
            return w.compareDocumentPosition(Ka.createElement("fieldset")) & 1
        });
        t(function(w) {
            w.innerHTML = "<a href='#'></a>";
            return "#" === w.firstChild.getAttribute("href")
        }) || x("type|href|height|width", function(w, H, D) {
            if (!D)
                return w.getAttribute(H, "type" === H.toLowerCase() ? 1 : 2)
        });
        ab.attributes && t(function(w) {
            w.innerHTML = "<input/>";
            w.firstChild.setAttribute("value", "");
            return "" === w.firstChild.getAttribute("value")
        }) || x("value", function(w, H, D) {
            if (!D && "input" === w.nodeName.toLowerCase())
                return w.defaultValue
        });
        t(function(w) {
            return null == w.getAttribute("disabled")
        }) || x("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function(w, H, D) {
            var W;
            if (!D)
                return !0 === w[H] ? H.toLowerCase() : (W = w.getAttributeNode(H)) && W.specified ? W.value : null
        });
        return g
    }(b);
    q.find = ub;
    q.expr = ub.selectors;
    q.expr[":"] = q.expr.pseudos;
    q.uniqueSort = q.unique = ub.uniqueSort;
    q.text = ub.getText;
    q.isXMLDoc = ub.isXML;
    q.contains = ub.contains;
    q.escapeSelector = ub.escape;
    var Rb = function(e, g, k) {
        for (var p = [], t = void 0 !== k; (e = e[g]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (t && q(e).is(k))
                    break;
                p.push(e)
            }
        return p
    }
      , Ac = function(e, g) {
        for (var k = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== g && k.push(e);
        return k
    }
      , Bc = q.expr.match.needsContext
      , Cc = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    q.filter = function(e, g, k) {
        var p = g[0];
        k && (e = ":not(" + e + ")");
        return 1 === g.length && 1 === p.nodeType ? q.find.matchesSelector(p, e) ? [p] : [] : q.find.matches(e, q.grep(g, function(t) {
            return 1 === t.nodeType
        }))
    }
    ;
    q.fn.extend({
        find: function(e) {
            var g, k = this.length, p = this;
            if ("string" !== typeof e)
                return this.pushStack(q(e).filter(function() {
                    for (g = 0; g < k; g++)
                        if (q.contains(p[g], this))
                            return !0
                }));
            var t = this.pushStack([]);
            for (g = 0; g < k; g++)
                q.find(e, p[g], t);
            return 1 < k ? q.uniqueSort(t) : t
        },
        filter: function(e) {
            return this.pushStack(v(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(v(this, e || [], !0))
        },
        is: function(e) {
            return !!v(this, "string" === typeof e && Bc.test(e) ? q(e) : e || [], !1).length
        }
    });
    var md = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (q.fn.init = function(e, g, k) {
        if (!e)
            return this;
        k = k || nd;
        if ("string" === typeof e) {
            var p = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : md.exec(e);
            if (!p || !p[1] && g)
                return !g || g.jquery ? (g || k).find(e) : this.constructor(g).find(e);
            if (p[1]) {
                if (g = g instanceof q ? g[0] : g,
                q.merge(this, q.parseHTML(p[1], g && g.nodeType ? g.ownerDocument || g : Fa, !0)),
                Cc.test(p[1]) && q.isPlainObject(g))
                    for (p in g)
                        if (ya(this[p]))
                            this[p](g[p]);
                        else
                            this.attr(p, g[p])
            } else if (e = Fa.getElementById(p[2]))
                this[0] = e,
                this.length = 1;
            return this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : ya(e) ? void 0 !== k.ready ? k.ready(e) : e(q) : q.makeArray(e, this)
    }
    ).prototype = q.fn;
    var nd = q(Fa);
    var od = /^(?:parents|prev(?:Until|All))/
      , pd = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    q.fn.extend({
        has: function(e) {
            var g = q(e, this)
              , k = g.length;
            return this.filter(function() {
                for (var p = 0; p < k; p++)
                    if (q.contains(this, g[p]))
                        return !0
            })
        },
        closest: function(e, g) {
            var k, p = 0, t = this.length, x = [], B = "string" !== typeof e && q(e);
            if (!Bc.test(e))
                for (; p < t; p++)
                    for (k = this[p]; k && k !== g; k = k.parentNode)
                        if (11 > k.nodeType && (B ? -1 < B.index(k) : 1 === k.nodeType && q.find.matchesSelector(k, e))) {
                            x.push(k);
                            break
                        }
            return this.pushStack(1 < x.length ? q.uniqueSort(x) : x)
        },
        index: function(e) {
            return e ? "string" === typeof e ? zb.call(q(e), this[0]) : zb.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, g) {
            return this.pushStack(q.uniqueSort(q.merge(this.get(), q(e, g))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });
    q.each({
        parent: function(e) {
            return (e = e.parentNode) && 11 !== e.nodeType ? e : null
        },
        parents: function(e) {
            return Rb(e, "parentNode")
        },
        parentsUntil: function(e, g, k) {
            return Rb(e, "parentNode", k)
        },
        next: function(e) {
            return E(e, "nextSibling")
        },
        prev: function(e) {
            return E(e, "previousSibling")
        },
        nextAll: function(e) {
            return Rb(e, "nextSibling")
        },
        prevAll: function(e) {
            return Rb(e, "previousSibling")
        },
        nextUntil: function(e, g, k) {
            return Rb(e, "nextSibling", k)
        },
        prevUntil: function(e, g, k) {
            return Rb(e, "previousSibling", k)
        },
        siblings: function(e) {
            return Ac((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return Ac(e.firstChild)
        },
        contents: function(e) {
            if (C(e, "iframe"))
                return e.contentDocument;
            C(e, "template") && (e = e.content || e);
            return q.merge([], e.childNodes)
        }
    }, function(e, g) {
        q.fn[e] = function(k, p) {
            var t = q.map(this, g, k);
            "Until" !== e.slice(-5) && (p = k);
            p && "string" === typeof p && (t = q.filter(p, t));
            1 < this.length && (pd[e] || q.uniqueSort(t),
            od.test(e) && t.reverse());
            return this.pushStack(t)
        }
    });
    var Ab = /[^\x20\t\r\n\f]+/g;
    q.Callbacks = function(e) {
        e = "string" === typeof e ? N(e) : q.extend({}, e);
        var g, k, p, t, x = [], B = [], K = -1, I = function() {
            t = t || e.once;
            for (p = g = !0; B.length; K = -1)
                for (k = B.shift(); ++K < x.length; )
                    !1 === x[K].apply(k[0], k[1]) && e.stopOnFalse && (K = x.length,
                    k = !1);
            e.memory || (k = !1);
            g = !1;
            t && (x = k ? [] : "")
        }, M = {
            add: function() {
                x && (k && !g && (K = x.length - 1,
                B.push(k)),
                function ra(la) {
                    q.each(la, function(Ua, Ca) {
                        ya(Ca) ? e.unique && M.has(Ca) || x.push(Ca) : Ca && Ca.length && "string" !== m(Ca) && ra(Ca)
                    })
                }(arguments),
                k && !g && I());
                return this
            },
            remove: function() {
                q.each(arguments, function(ba, la) {
                    for (var ra; -1 < (ra = q.inArray(la, x, ra)); )
                        x.splice(ra, 1),
                        ra <= K && K--
                });
                return this
            },
            has: function(ba) {
                return ba ? -1 < q.inArray(ba, x) : 0 < x.length
            },
            empty: function() {
                x && (x = []);
                return this
            },
            disable: function() {
                t = B = [];
                x = k = "";
                return this
            },
            disabled: function() {
                return !x
            },
            lock: function() {
                t = B = [];
                k || g || (x = k = "");
                return this
            },
            locked: function() {
                return !!t
            },
            fireWith: function(ba, la) {
                t || (la = la || [],
                la = [ba, la.slice ? la.slice() : la],
                B.push(la),
                g || I());
                return this
            },
            fire: function() {
                M.fireWith(this, arguments);
                return this
            },
            fired: function() {
                return !!p
            }
        };
        return M
    }
    ;
    q.extend({
        Deferred: function(e) {
            var g = [["notify", "progress", q.Callbacks("memory"), q.Callbacks("memory"), 2], ["resolve", "done", q.Callbacks("once memory"), q.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", q.Callbacks("once memory"), q.Callbacks("once memory"), 1, "rejected"]]
              , k = "pending"
              , p = {
                state: function() {
                    return k
                },
                always: function() {
                    t.done(arguments).fail(arguments);
                    return this
                },
                "catch": function(x) {
                    return p.then(null, x)
                },
                pipe: function() {
                    var x = arguments;
                    return q.Deferred(function(B) {
                        q.each(g, function(K, I) {
                            var M = ya(x[I[4]]) && x[I[4]];
                            t[I[1]](function() {
                                var ba = M && M.apply(this, arguments);
                                if (ba && ya(ba.promise))
                                    ba.promise().progress(B.notify).done(B.resolve).fail(B.reject);
                                else
                                    B[I[0] + "With"](this, M ? [ba] : arguments)
                            })
                        });
                        x = null
                    }).promise()
                },
                then: function(x, B, K) {
                    function I(ba, la, ra, Ua) {
                        return function() {
                            var Ca = this
                              , lb = arguments
                              , mb = function() {
                                if (!(ba < M)) {
                                    var Aa = ra.apply(Ca, lb);
                                    if (Aa === la.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    var ib = Aa && ("object" === typeof Aa || "function" === typeof Aa) && Aa.then;
                                    ya(ib) ? Ua ? ib.call(Aa, I(M, la, P, Ua), I(M, la, aa, Ua)) : (M++,
                                    ib.call(Aa, I(M, la, P, Ua), I(M, la, aa, Ua), I(M, la, P, la.notifyWith))) : (ra !== P && (Ca = void 0,
                                    lb = [Aa]),
                                    (Ua || la.resolveWith)(Ca, lb))
                                }
                            }
                              , wb = Ua ? mb : function() {
                                try {
                                    mb()
                                } catch (Aa) {
                                    q.Deferred.exceptionHook && q.Deferred.exceptionHook(Aa, wb.stackTrace),
                                    ba + 1 >= M && (ra !== aa && (Ca = void 0,
                                    lb = [Aa]),
                                    la.rejectWith(Ca, lb))
                                }
                            }
                            ;
                            ba ? wb() : (q.Deferred.getStackHook && (wb.stackTrace = q.Deferred.getStackHook()),
                            b.setTimeout(wb))
                        }
                    }
                    var M = 0;
                    return q.Deferred(function(ba) {
                        g[0][3].add(I(0, ba, ya(K) ? K : P, ba.notifyWith));
                        g[1][3].add(I(0, ba, ya(x) ? x : P));
                        g[2][3].add(I(0, ba, ya(B) ? B : aa))
                    }).promise()
                },
                promise: function(x) {
                    return null != x ? q.extend(x, p) : p
                }
            }
              , t = {};
            q.each(g, function(x, B) {
                var K = B[2]
                  , I = B[5];
                p[B[1]] = K.add;
                I && K.add(function() {
                    k = I
                }, g[3 - x][2].disable, g[3 - x][3].disable, g[0][2].lock, g[0][3].lock);
                K.add(B[3].fire);
                t[B[0]] = function() {
                    t[B[0] + "With"](this === t ? void 0 : this, arguments);
                    return this
                }
                ;
                t[B[0] + "With"] = K.fireWith
            });
            p.promise(t);
            e && e.call(t, t);
            return t
        },
        when: function(e) {
            var g = arguments.length
              , k = g
              , p = Array(k)
              , t = Ta.call(arguments)
              , x = q.Deferred()
              , B = function(K) {
                return function(I) {
                    p[K] = this;
                    t[K] = 1 < arguments.length ? Ta.call(arguments) : I;
                    --g || x.resolveWith(p, t)
                }
            };
            if (1 >= g && (R(e, x.done(B(k)).resolve, x.reject, !g),
            "pending" === x.state() || ya(t[k] && t[k].then)))
                return x.then();
            for (; k--; )
                R(t[k], B(k), x.reject);
            return x.promise()
        }
    });
    var qd = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    q.Deferred.exceptionHook = function(e, g) {
        b.console && b.console.warn && e && qd.test(e.name) && b.console.warn("jQuery.Deferred exception: " + e.message, e.stack, g)
    }
    ;
    q.readyException = function(e) {
        b.setTimeout(function() {
            throw e;
        })
    }
    ;
    var mc = q.Deferred();
    q.fn.ready = function(e) {
        mc.then(e).catch(function(g) {
            q.readyException(g)
        });
        return this
    }
    ;
    q.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --q.readyWait : q.isReady) || (q.isReady = !0,
            !0 !== e && 0 < --q.readyWait || mc.resolveWith(Fa, [q]))
        }
    });
    q.ready.then = mc.then;
    "complete" === Fa.readyState || "loading" !== Fa.readyState && !Fa.documentElement.doScroll ? b.setTimeout(q.ready) : (Fa.addEventListener("DOMContentLoaded", F),
    b.addEventListener("load", F));
    var Hb = function(e, g, k, p, t, x, B) {
        var K = 0
          , I = e.length
          , M = null == k;
        if ("object" === m(k))
            for (K in t = !0,
            k)
                Hb(e, g, K, k[K], !0, x, B);
        else if (void 0 !== p && (t = !0,
        ya(p) || (B = !0),
        M && (B ? (g.call(e, p),
        g = null) : (M = g,
        g = function(ba, la, ra) {
            return M.call(q(ba), ra)
        }
        )),
        g))
            for (; K < I; K++)
                g(e[K], k, B ? p : p.call(e[K], K, g(e[K], k)));
        return t ? e : M ? g.call(e) : I ? g(e[0], k) : x
    }
      , Qc = /^-ms-/
      , Rc = /-([a-z])/g
      , ec = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    X.uid = 1;
    X.prototype = {
        cache: function(e) {
            var g = e[this.expando];
            g || (g = {},
            ec(e) && (e.nodeType ? e[this.expando] = g : Object.defineProperty(e, this.expando, {
                value: g,
                configurable: !0
            })));
            return g
        },
        set: function(e, g, k) {
            var p;
            e = this.cache(e);
            if ("string" === typeof g)
                e[T(g)] = k;
            else
                for (p in g)
                    e[T(p)] = g[p];
            return e
        },
        get: function(e, g) {
            return void 0 === g ? this.cache(e) : e[this.expando] && e[this.expando][T(g)]
        },
        access: function(e, g, k) {
            if (void 0 === g || g && "string" === typeof g && void 0 === k)
                return this.get(e, g);
            this.set(e, g, k);
            return void 0 !== k ? k : g
        },
        remove: function(e, g) {
            var k, p = e[this.expando];
            if (void 0 !== p) {
                if (void 0 !== g)
                    for (Array.isArray(g) ? g = g.map(T) : (g = T(g),
                    g = g in p ? [g] : g.match(Ab) || []),
                    k = g.length; k--; )
                        delete p[g[k]];
                if (void 0 === g || q.isEmptyObject(p))
                    e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]
            }
        },
        hasData: function(e) {
            e = e[this.expando];
            return void 0 !== e && !q.isEmptyObject(e)
        }
    };
    var Ha = new X
      , sb = new X
      , Tc = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Sc = /[A-Z]/g;
    q.extend({
        hasData: function(e) {
            return sb.hasData(e) || Ha.hasData(e)
        },
        data: function(e, g, k) {
            return sb.access(e, g, k)
        },
        removeData: function(e, g) {
            sb.remove(e, g)
        },
        _data: function(e, g, k) {
            return Ha.access(e, g, k)
        },
        _removeData: function(e, g) {
            Ha.remove(e, g)
        }
    });
    q.fn.extend({
        data: function(e, g) {
            var k, p = this[0], t = p && p.attributes;
            if (void 0 === e) {
                if (this.length) {
                    var x = sb.get(p);
                    if (1 === p.nodeType && !Ha.get(p, "hasDataAttrs")) {
                        for (k = t.length; k--; )
                            if (t[k]) {
                                var B = t[k].name;
                                0 === B.indexOf("data-") && (B = T(B.slice(5)),
                                O(p, B, x[B]))
                            }
                        Ha.set(p, "hasDataAttrs", !0)
                    }
                }
                return x
            }
            return "object" === typeof e ? this.each(function() {
                sb.set(this, e)
            }) : Hb(this, function(K) {
                if (p && void 0 === K) {
                    var I = sb.get(p, e);
                    if (void 0 !== I)
                        return I;
                    I = O(p, e);
                    if (void 0 !== I)
                        return I
                } else
                    this.each(function() {
                        sb.set(this, e, K)
                    })
            }, null, g, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                sb.remove(this, e)
            })
        }
    });
    q.extend({
        queue: function(e, g, k) {
            if (e) {
                g = (g || "fx") + "queue";
                var p = Ha.get(e, g);
                k && (!p || Array.isArray(k) ? p = Ha.access(e, g, q.makeArray(k)) : p.push(k));
                return p || []
            }
        },
        dequeue: function(e, g) {
            g = g || "fx";
            var k = q.queue(e, g)
              , p = k.length
              , t = k.shift()
              , x = q._queueHooks(e, g)
              , B = function() {
                q.dequeue(e, g)
            };
            "inprogress" === t && (t = k.shift(),
            p--);
            t && ("fx" === g && k.unshift("inprogress"),
            delete x.stop,
            t.call(e, B, x));
            !p && x && x.empty.fire()
        },
        _queueHooks: function(e, g) {
            var k = g + "queueHooks";
            return Ha.get(e, k) || Ha.access(e, k, {
                empty: q.Callbacks("once memory").add(function() {
                    Ha.remove(e, [g + "queue", k])
                })
            })
        }
    });
    q.fn.extend({
        queue: function(e, g) {
            var k = 2;
            "string" !== typeof e && (g = e,
            e = "fx",
            k--);
            return arguments.length < k ? q.queue(this[0], e) : void 0 === g ? this : this.each(function() {
                var p = q.queue(this, e, g);
                q._queueHooks(this, e);
                "fx" === e && "inprogress" !== p[0] && q.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                q.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, g) {
            var k, p = 1, t = q.Deferred(), x = this, B = this.length, K = function() {
                --p || t.resolveWith(x, [x])
            };
            "string" !== typeof e && (g = e,
            e = void 0);
            for (e = e || "fx"; B--; )
                (k = Ha.get(x[B], e + "queueHooks")) && k.empty && (p++,
                k.empty.add(K));
            K();
            return t.promise(g)
        }
    });
    var Dc = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , Sb = new RegExp("^(?:([+-])=|)(" + Dc + ")([a-z%]*)$","i")
      , Eb = ["Top", "Right", "Bottom", "Left"]
      , Yb = function(e, g) {
        e = g || e;
        return "none" === e.style.display || "" === e.style.display && q.contains(e.ownerDocument, e) && "none" === q.css(e, "display")
    }
      , Ec = function(e, g, k, p) {
        var t, x = {};
        for (t in g)
            x[t] = e.style[t],
            e.style[t] = g[t];
        k = k.apply(e, p || []);
        for (t in g)
            e.style[t] = x[t];
        return k
    }
      , qc = {};
    q.fn.extend({
        show: function() {
            return da(this, !0)
        },
        hide: function() {
            return da(this)
        },
        toggle: function(e) {
            return "boolean" === typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Yb(this) ? q(this).show() : q(this).hide()
            })
        }
    });
    var Fc = /^(?:checkbox|radio)$/i
      , rc = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
      , sc = /^$|^module$|\/(?:java|ecma)script/i
      , vb = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    vb.optgroup = vb.option;
    vb.tbody = vb.tfoot = vb.colgroup = vb.caption = vb.thead;
    vb.th = vb.td;
    var Uc = /<|&#?\w+;/;
    (function() {
        var e = Fa.createDocumentFragment().appendChild(Fa.createElement("div"))
          , g = Fa.createElement("input");
        g.setAttribute("type", "radio");
        g.setAttribute("checked", "checked");
        g.setAttribute("name", "t");
        e.appendChild(g);
        ua.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked;
        e.innerHTML = "<textarea>x</textarea>";
        ua.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }
    )();
    var fc = Fa.documentElement
      , rd = /^key/
      , sd = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Gc = /^([^.]*)(?:\.(.+)|)/;
    q.event = {
        global: {},
        add: function(e, g, k, p, t) {
            var x, B, K, I, M;
            if (K = Ha.get(e)) {
                if (k.handler) {
                    var ba = k;
                    k = ba.handler;
                    t = ba.selector
                }
                t && q.find.matchesSelector(fc, t);
                k.guid || (k.guid = q.guid++);
                (B = K.events) || (B = K.events = {});
                (x = K.handle) || (x = K.handle = function(Ca) {
                    return "undefined" !== typeof q && q.event.triggered !== Ca.type ? q.event.dispatch.apply(e, arguments) : void 0
                }
                );
                g = (g || "").match(Ab) || [""];
                for (K = g.length; K--; ) {
                    var la = Gc.exec(g[K]) || [];
                    var ra = I = la[1];
                    var Ua = (la[2] || "").split(".").sort();
                    ra && (la = q.event.special[ra] || {},
                    ra = (t ? la.delegateType : la.bindType) || ra,
                    la = q.event.special[ra] || {},
                    I = q.extend({
                        type: ra,
                        origType: I,
                        data: p,
                        handler: k,
                        guid: k.guid,
                        selector: t,
                        needsContext: t && q.expr.match.needsContext.test(t),
                        namespace: Ua.join(".")
                    }, ba),
                    (M = B[ra]) || (M = B[ra] = [],
                    M.delegateCount = 0,
                    la.setup && !1 !== la.setup.call(e, p, Ua, x) || e.addEventListener && e.addEventListener(ra, x)),
                    la.add && (la.add.call(e, I),
                    I.handler.guid || (I.handler.guid = k.guid)),
                    t ? M.splice(M.delegateCount++, 0, I) : M.push(I),
                    q.event.global[ra] = !0)
                }
            }
        },
        remove: function(e, g, k, p, t) {
            var x, B, K, I, M, ba = Ha.hasData(e) && Ha.get(e);
            if (ba && (K = ba.events)) {
                g = (g || "").match(Ab) || [""];
                for (I = g.length; I--; ) {
                    var la = Gc.exec(g[I]) || [];
                    var ra = M = la[1];
                    var Ua = (la[2] || "").split(".").sort();
                    if (ra) {
                        var Ca = q.event.special[ra] || {};
                        ra = (p ? Ca.delegateType : Ca.bindType) || ra;
                        var lb = K[ra] || [];
                        la = la[2] && new RegExp("(^|\\.)" + Ua.join("\\.(?:.*\\.|)") + "(\\.|$)");
                        for (B = x = lb.length; x--; ) {
                            var mb = lb[x];
                            !t && M !== mb.origType || k && k.guid !== mb.guid || la && !la.test(mb.namespace) || p && p !== mb.selector && ("**" !== p || !mb.selector) || (lb.splice(x, 1),
                            mb.selector && lb.delegateCount--,
                            Ca.remove && Ca.remove.call(e, mb))
                        }
                        B && !lb.length && (Ca.teardown && !1 !== Ca.teardown.call(e, Ua, ba.handle) || q.removeEvent(e, ra, ba.handle),
                        delete K[ra])
                    } else
                        for (ra in K)
                            q.event.remove(e, ra + g[I], k, p, !0)
                }
                q.isEmptyObject(K) && Ha.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var g = q.event.fix(e), k, p, t, x = Array(arguments.length);
            var B = (Ha.get(this, "events") || {})[g.type] || [];
            var K = q.event.special[g.type] || {};
            x[0] = g;
            for (k = 1; k < arguments.length; k++)
                x[k] = arguments[k];
            g.delegateTarget = this;
            if (!K.preDispatch || !1 !== K.preDispatch.call(this, g)) {
                var I = q.event.handlers.call(this, g, B);
                for (k = 0; (t = I[k++]) && !g.isPropagationStopped(); )
                    for (g.currentTarget = t.elem,
                    B = 0; (p = t.handlers[B++]) && !g.isImmediatePropagationStopped(); )
                        if (!g.rnamespace || g.rnamespace.test(p.namespace))
                            g.handleObj = p,
                            g.data = p.data,
                            p = ((q.event.special[p.origType] || {}).handle || p.handler).apply(t.elem, x),
                            void 0 !== p && !1 === (g.result = p) && (g.preventDefault(),
                            g.stopPropagation());
                K.postDispatch && K.postDispatch.call(this, g);
                return g.result
            }
        },
        handlers: function(e, g) {
            var k, p = [], t = g.delegateCount, x = e.target;
            if (t && x.nodeType && !("click" === e.type && 1 <= e.button))
                for (; x !== this; x = x.parentNode || this)
                    if (1 === x.nodeType && ("click" !== e.type || !0 !== x.disabled)) {
                        var B = [];
                        var K = {};
                        for (k = 0; k < t; k++) {
                            var I = g[k];
                            var M = I.selector + " ";
                            void 0 === K[M] && (K[M] = I.needsContext ? -1 < q(M, this).index(x) : q.find(M, this, null, [x]).length);
                            K[M] && B.push(I)
                        }
                        B.length && p.push({
                            elem: x,
                            handlers: B
                        })
                    }
            t < g.length && p.push({
                elem: this,
                handlers: g.slice(t)
            });
            return p
        },
        addProp: function(e, g) {
            Object.defineProperty(q.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: ya(g) ? function() {
                    if (this.originalEvent)
                        return g(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[e]
                }
                ,
                set: function(k) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: k
                    })
                }
            })
        },
        fix: function(e) {
            return e[q.expando] ? e : new q.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ma() && this.focus)
                        return this.focus(),
                        !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === ma() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && C(this, "input"))
                        return this.click(),
                        !1
                },
                _default: function(e) {
                    return C(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    };
    q.removeEvent = function(e, g, k) {
        e.removeEventListener && e.removeEventListener(g, k)
    }
    ;
    q.Event = function(e, g) {
        if (!(this instanceof q.Event))
            return new q.Event(e,g);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Y : oa,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e;
        g && q.extend(this, g);
        this.timeStamp = e && e.timeStamp || Date.now();
        this[q.expando] = !0
    }
    ;
    q.Event.prototype = {
        constructor: q.Event,
        isDefaultPrevented: oa,
        isPropagationStopped: oa,
        isImmediatePropagationStopped: oa,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Y;
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Y;
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Y;
            e && !this.isSimulated && e.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    q.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var g = e.button;
            return null == e.which && rd.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== g && sd.test(e.type) ? g & 1 ? 1 : g & 2 ? 3 : g & 4 ? 2 : 0 : e.which
        }
    }, q.event.addProp);
    q.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, g) {
        q.event.special[e] = {
            delegateType: g,
            bindType: g,
            handle: function(k) {
                var p = k.relatedTarget
                  , t = k.handleObj;
                if (!p || p !== this && !q.contains(this, p)) {
                    k.type = t.origType;
                    var x = t.handler.apply(this, arguments);
                    k.type = g
                }
                return x
            }
        }
    });
    q.fn.extend({
        on: function(e, g, k, p) {
            return sa(this, e, g, k, p)
        },
        one: function(e, g, k, p) {
            return sa(this, e, g, k, p, 1)
        },
        off: function(e, g, k) {
            if (e && e.preventDefault && e.handleObj) {
                var p = e.handleObj;
                q(e.delegateTarget).off(p.namespace ? p.origType + "." + p.namespace : p.origType, p.selector, p.handler);
                return this
            }
            if ("object" === typeof e) {
                for (p in e)
                    this.off(p, g, e[p]);
                return this
            }
            if (!1 === g || "function" === typeof g)
                k = g,
                g = void 0;
            !1 === k && (k = oa);
            return this.each(function() {
                q.event.remove(this, e, k, g)
            })
        }
    });
    var td = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , ud = /<script|<style|<link/i
      , Vc = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Wc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    q.extend({
        htmlPrefilter: function(e) {
            return e.replace(td, "<$1></$2>")
        },
        clone: function(e, g, k) {
            var p, t = e.cloneNode(!0), x = q.contains(e.ownerDocument, e);
            if (!(ua.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || q.isXMLDoc(e))) {
                var B = ka(t);
                var K = ka(e);
                var I = 0;
                for (p = K.length; I < p; I++) {
                    var M = K[I]
                      , ba = B[I]
                      , la = ba.nodeName.toLowerCase();
                    if ("input" === la && Fc.test(M.type))
                        ba.checked = M.checked;
                    else if ("input" === la || "textarea" === la)
                        ba.defaultValue = M.defaultValue
                }
            }
            if (g)
                if (k)
                    for (K = K || ka(e),
                    B = B || ka(t),
                    I = 0,
                    p = K.length; I < p; I++)
                        Ba(K[I], B[I]);
                else
                    Ba(e, t);
            B = ka(t, "script");
            0 < B.length && wa(B, !x && ka(e, "script"));
            return t
        },
        cleanData: function(e) {
            for (var g, k, p, t = q.event.special, x = 0; void 0 !== (k = e[x]); x++)
                if (ec(k)) {
                    if (g = k[Ha.expando]) {
                        if (g.events)
                            for (p in g.events)
                                t[p] ? q.event.remove(k, p) : q.removeEvent(k, p, g.handle);
                        k[Ha.expando] = void 0
                    }
                    k[sb.expando] && (k[sb.expando] = void 0)
                }
        }
    });
    q.fn.extend({
        detach: function(e) {
            return a(this, e, !0)
        },
        remove: function(e) {
            return a(this, e)
        },
        text: function(e) {
            return Hb(this, function(g) {
                return void 0 === g ? q.text(this) : this.empty().each(function() {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType)
                        this.textContent = g
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return fb(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || La(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return fb(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var g = La(this, e);
                    g.insertBefore(e, g.firstChild)
                }
            })
        },
        before: function() {
            return fb(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return fb(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, g = 0; null != (e = this[g]); g++)
                1 === e.nodeType && (q.cleanData(ka(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, g) {
            e = null == e ? !1 : e;
            g = null == g ? e : g;
            return this.map(function() {
                return q.clone(this, e, g)
            })
        },
        html: function(e) {
            return Hb(this, function(g) {
                var k = this[0] || {}
                  , p = 0
                  , t = this.length;
                if (void 0 === g && 1 === k.nodeType)
                    return k.innerHTML;
                if ("string" === typeof g && !ud.test(g) && !vb[(rc.exec(g) || ["", ""])[1].toLowerCase()]) {
                    g = q.htmlPrefilter(g);
                    try {
                        for (; p < t; p++)
                            k = this[p] || {},
                            1 === k.nodeType && (q.cleanData(ka(k, !1)),
                            k.innerHTML = g);
                        k = 0
                    } catch (x) {}
                }
                k && this.empty().append(g)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return fb(this, arguments, function(g) {
                var k = this.parentNode;
                0 > q.inArray(this, e) && (q.cleanData(ka(this)),
                k && k.replaceChild(g, this))
            }, e)
        }
    });
    q.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, g) {
        q.fn[e] = function(k) {
            for (var p = [], t = q(k), x = t.length - 1, B = 0; B <= x; B++)
                k = B === x ? this : this.clone(!0),
                q(t[B])[g](k),
                tb.apply(p, k.get());
            return this.pushStack(p)
        }
    });
    var gc = new RegExp("^(" + Dc + ")(?!px)[a-z%]+$","i")
      , Zb = function(e) {
        var g = e.ownerDocument.defaultView;
        g && g.opener || (g = b);
        return g.getComputedStyle(e)
    }
      , Xc = new RegExp(Eb.join("|"),"i");
    (function() {
        function e() {
            if (K) {
                B.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
                K.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
                fc.appendChild(B).appendChild(K);
                var I = b.getComputedStyle(K);
                g = "1%" !== I.top;
                x = 12 === Math.round(parseFloat(I.marginLeft));
                K.style.right = "60%";
                t = 36 === Math.round(parseFloat(I.right));
                k = 36 === Math.round(parseFloat(I.width));
                K.style.position = "absolute";
                p = 36 === K.offsetWidth || "absolute";
                fc.removeChild(B);
                K = null
            }
        }
        var g, k, p, t, x, B = Fa.createElement("div"), K = Fa.createElement("div");
        K.style && (K.style.backgroundClip = "content-box",
        K.cloneNode(!0).style.backgroundClip = "",
        ua.clearCloneStyle = "content-box" === K.style.backgroundClip,
        q.extend(ua, {
            boxSizingReliable: function() {
                e();
                return k
            },
            pixelBoxStyles: function() {
                e();
                return t
            },
            pixelPosition: function() {
                e();
                return g
            },
            reliableMarginLeft: function() {
                e();
                return x
            },
            scrollboxSize: function() {
                e();
                return p
            }
        }))
    }
    )();
    var vd = /^(none|table(?!-c[ea]).+)/
      , Hc = /^--/
      , wd = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Ic = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , uc = ["Webkit", "Moz", "ms"]
      , tc = Fa.createElement("div").style;
    q.extend({
        cssHooks: {
            opacity: {
                get: function(e, g) {
                    if (g)
                        return e = c(e, "opacity"),
                        "" === e ? "1" : e
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, g, k, p) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var t, x = T(g), B = Hc.test(g), K = e.style;
                B || (g = f(x));
                var I = q.cssHooks[g] || q.cssHooks[x];
                if (void 0 !== k) {
                    var M = typeof k;
                    "string" === M && (t = Sb.exec(k)) && t[1] && (k = ea(e, g, t),
                    M = "number");
                    null != k && k === k && ("number" === M && (k += t && t[3] || (q.cssNumber[x] ? "" : "px")),
                    ua.clearCloneStyle || "" !== k || 0 !== g.indexOf("background") || (K[g] = "inherit"),
                    I && "set"in I && void 0 === (k = I.set(e, k, p)) || (B ? K.setProperty(g, k) : K[g] = k))
                } else
                    return I && "get"in I && void 0 !== (t = I.get(e, !1, p)) ? t : K[g]
            }
        },
        css: function(e, g, k, p) {
            var t;
            var x = T(g);
            Hc.test(g) || (g = f(x));
            (x = q.cssHooks[g] || q.cssHooks[x]) && "get"in x && (t = x.get(e, !0, k));
            void 0 === t && (t = c(e, g, p));
            "normal" === t && g in Ic && (t = Ic[g]);
            return "" === k || k ? (e = parseFloat(t),
            !0 === k || isFinite(e) ? e || 0 : t) : t
        }
    });
    q.each(["height", "width"], function(e, g) {
        q.cssHooks[g] = {
            get: function(k, p, t) {
                if (p)
                    return !vd.test(q.css(k, "display")) || k.getClientRects().length && k.getBoundingClientRect().width ? r(k, g, t) : Ec(k, wd, function() {
                        return r(k, g, t)
                    })
            },
            set: function(k, p, t) {
                var x, B = Zb(k), K = "border-box" === q.css(k, "boxSizing", !1, B);
                t = t && n(k, g, t, K, B);
                K && ua.scrollboxSize() === B.position && (t -= Math.ceil(k["offset" + g[0].toUpperCase() + g.slice(1)] - parseFloat(B[g]) - n(k, g, "border", !1, B) - .5));
                t && (x = Sb.exec(p)) && "px" !== (x[3] || "px") && (k.style[g] = p,
                p = q.css(k, g));
                return h(k, p, t)
            }
        }
    });
    q.cssHooks.marginLeft = d(ua.reliableMarginLeft, function(e, g) {
        if (g)
            return (parseFloat(c(e, "marginLeft")) || e.getBoundingClientRect().left - Ec(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    });
    q.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, g) {
        q.cssHooks[e + g] = {
            expand: function(k) {
                var p = 0
                  , t = {};
                for (k = "string" === typeof k ? k.split(" ") : [k]; 4 > p; p++)
                    t[e + Eb[p] + g] = k[p] || k[p - 2] || k[0];
                return t
            }
        };
        "margin" !== e && (q.cssHooks[e + g].set = h)
    });
    q.fn.extend({
        css: function(e, g) {
            return Hb(this, function(k, p, t) {
                var x, B = {}, K = 0;
                if (Array.isArray(p)) {
                    t = Zb(k);
                    for (x = p.length; K < x; K++)
                        B[p[K]] = q.css(k, p[K], !1, t);
                    return B
                }
                return void 0 !== t ? q.style(k, p, t) : q.css(k, p)
            }, e, g, 1 < arguments.length)
        }
    });
    q.Tween = z;
    z.prototype = {
        constructor: z,
        init: function(e, g, k, p, t, x) {
            this.elem = e;
            this.prop = k;
            this.easing = t || q.easing._default;
            this.options = g;
            this.start = this.now = this.cur();
            this.end = p;
            this.unit = x || (q.cssNumber[k] ? "" : "px")
        },
        cur: function() {
            var e = z.propHooks[this.prop];
            return e && e.get ? e.get(this) : z.propHooks._default.get(this)
        },
        run: function(e) {
            var g, k = z.propHooks[this.prop];
            this.pos = this.options.duration ? g = q.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : g = e;
            this.now = (this.end - this.start) * g + this.start;
            this.options.step && this.options.step.call(this.elem, this.now, this);
            k && k.set ? k.set(this) : z.propHooks._default.set(this);
            return this
        }
    };
    z.prototype.init.prototype = z.prototype;
    z.propHooks = {
        _default: {
            get: function(e) {
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (e = q.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(e) {
                if (q.fx.step[e.prop])
                    q.fx.step[e.prop](e);
                else
                    1 !== e.elem.nodeType || null == e.elem.style[q.cssProps[e.prop]] && !q.cssHooks[e.prop] ? e.elem[e.prop] = e.now : q.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    };
    z.propHooks.scrollTop = z.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    };
    q.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    };
    q.fx = z.prototype.init;
    q.fx.step = {};
    var Pb, $b, xd = /^(?:toggle|show|hide)$/, yd = /queueHooks$/;
    q.Animation = q.extend(V, {
        tweeners: {
            "*": [function(e, g) {
                var k = this.createTween(e, g);
                ea(k.elem, e, Sb.exec(g), k);
                return k
            }
            ]
        },
        tweener: function(e, g) {
            ya(e) ? (g = e,
            e = ["*"]) : e = e.match(Ab);
            for (var k, p = 0, t = e.length; p < t; p++)
                k = e[p],
                V.tweeners[k] = V.tweeners[k] || [],
                V.tweeners[k].unshift(g)
        },
        prefilters: [function(e, g, k) {
            var p;
            var t = "width"in g || "height"in g;
            var x = this
              , B = {}
              , K = e.style
              , I = e.nodeType && Yb(e)
              , M = Ha.get(e, "fxshow");
            if (!k.queue) {
                var ba = q._queueHooks(e, "fx");
                if (null == ba.unqueued) {
                    ba.unqueued = 0;
                    var la = ba.empty.fire;
                    ba.empty.fire = function() {
                        ba.unqueued || la()
                    }
                }
                ba.unqueued++;
                x.always(function() {
                    x.always(function() {
                        ba.unqueued--;
                        q.queue(e, "fx").length || ba.empty.fire()
                    })
                })
            }
            for (p in g) {
                var ra = g[p];
                if (xd.test(ra)) {
                    delete g[p];
                    var Ua = Ua || "toggle" === ra;
                    if (ra === (I ? "hide" : "show"))
                        if ("show" === ra && M && void 0 !== M[p])
                            I = !0;
                        else
                            continue;
                    B[p] = M && M[p] || q.style(e, p)
                }
            }
            if ((g = !q.isEmptyObject(g)) || !q.isEmptyObject(B)) {
                if (t && 1 === e.nodeType) {
                    k.overflow = [K.overflow, K.overflowX, K.overflowY];
                    var Ca = M && M.display;
                    null == Ca && (Ca = Ha.get(e, "display"));
                    t = q.css(e, "display");
                    "none" === t && (Ca ? t = Ca : (da([e], !0),
                    Ca = e.style.display || Ca,
                    t = q.css(e, "display"),
                    da([e])));
                    ("inline" === t || "inline-block" === t && null != Ca) && "none" === q.css(e, "float") && (g || (x.done(function() {
                        K.display = Ca
                    }),
                    null == Ca && (t = K.display,
                    Ca = "none" === t ? "" : t)),
                    K.display = "inline-block")
                }
                k.overflow && (K.overflow = "hidden",
                x.always(function() {
                    K.overflow = k.overflow[0];
                    K.overflowX = k.overflow[1];
                    K.overflowY = k.overflow[2]
                }));
                g = !1;
                for (p in B)
                    g || (M ? "hidden"in M && (I = M.hidden) : M = Ha.access(e, "fxshow", {
                        display: Ca
                    }),
                    Ua && (M.hidden = !I),
                    I && da([e], !0),
                    x.done(function() {
                        I || da([e]);
                        Ha.remove(e, "fxshow");
                        for (p in B)
                            q.style(e, p, B[p])
                    })),
                    g = G(I ? M[p] : 0, p, x),
                    p in M || (M[p] = g.start,
                    I && (g.end = g.start,
                    g.start = 0))
            }
        }
        ],
        prefilter: function(e, g) {
            g ? V.prefilters.unshift(e) : V.prefilters.push(e)
        }
    });
    q.speed = function(e, g, k) {
        var p = e && "object" === typeof e ? q.extend({}, e) : {
            complete: k || !k && g || ya(e) && e,
            duration: e,
            easing: k && g || g && !ya(g) && g
        };
        q.fx.off ? p.duration = 0 : "number" !== typeof p.duration && (p.duration = p.duration in q.fx.speeds ? q.fx.speeds[p.duration] : q.fx.speeds._default);
        if (null == p.queue || !0 === p.queue)
            p.queue = "fx";
        p.old = p.complete;
        p.complete = function() {
            ya(p.old) && p.old.call(this);
            p.queue && q.dequeue(this, p.queue)
        }
        ;
        return p
    }
    ;
    q.fn.extend({
        fadeTo: function(e, g, k, p) {
            return this.filter(Yb).css("opacity", 0).show().end().animate({
                opacity: g
            }, e, k, p)
        },
        animate: function(e, g, k, p) {
            var t = q.isEmptyObject(e)
              , x = q.speed(g, k, p);
            g = function() {
                var B = V(this, q.extend({}, e), x);
                (t || Ha.get(this, "finish")) && B.stop(!0)
            }
            ;
            g.finish = g;
            return t || !1 === x.queue ? this.each(g) : this.queue(x.queue, g)
        },
        stop: function(e, g, k) {
            var p = function(t) {
                var x = t.stop;
                delete t.stop;
                x(k)
            };
            "string" !== typeof e && (k = g,
            g = e,
            e = void 0);
            g && !1 !== e && this.queue(e || "fx", []);
            return this.each(function() {
                var t = !0
                  , x = null != e && e + "queueHooks"
                  , B = q.timers
                  , K = Ha.get(this);
                if (x)
                    K[x] && K[x].stop && p(K[x]);
                else
                    for (x in K)
                        K[x] && K[x].stop && yd.test(x) && p(K[x]);
                for (x = B.length; x--; )
                    B[x].elem !== this || null != e && B[x].queue !== e || (B[x].anim.stop(k),
                    t = !1,
                    B.splice(x, 1));
                !t && k || q.dequeue(this, e)
            })
        },
        finish: function(e) {
            !1 !== e && (e = e || "fx");
            return this.each(function() {
                var g = Ha.get(this)
                  , k = g[e + "queue"];
                var p = g[e + "queueHooks"];
                var t = q.timers
                  , x = k ? k.length : 0;
                g.finish = !0;
                q.queue(this, e, []);
                p && p.stop && p.stop.call(this, !0);
                for (p = t.length; p--; )
                    t[p].elem === this && t[p].queue === e && (t[p].anim.stop(!0),
                    t.splice(p, 1));
                for (p = 0; p < x; p++)
                    k[p] && k[p].finish && k[p].finish.call(this);
                delete g.finish
            })
        }
    });
    q.each(["toggle", "show", "hide"], function(e, g) {
        var k = q.fn[g];
        q.fn[g] = function(p, t, x) {
            return null == p || "boolean" === typeof p ? k.apply(this, arguments) : this.animate(U(g, !0), p, t, x)
        }
    });
    q.each({
        slideDown: U("show"),
        slideUp: U("hide"),
        slideToggle: U("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, g) {
        q.fn[e] = function(k, p, t) {
            return this.animate(g, k, p, t)
        }
    });
    q.timers = [];
    q.fx.tick = function() {
        var e = 0
          , g = q.timers;
        for (Pb = Date.now(); e < g.length; e++) {
            var k = g[e];
            k() || g[e] !== k || g.splice(e--, 1)
        }
        g.length || q.fx.stop();
        Pb = void 0
    }
    ;
    q.fx.timer = function(e) {
        q.timers.push(e);
        q.fx.start()
    }
    ;
    q.fx.interval = 13;
    q.fx.start = function() {
        $b || ($b = !0,
        A())
    }
    ;
    q.fx.stop = function() {
        $b = null
    }
    ;
    q.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    q.fn.delay = function(e, g) {
        e = q.fx ? q.fx.speeds[e] || e : e;
        return this.queue(g || "fx", function(k, p) {
            var t = b.setTimeout(k, e);
            p.stop = function() {
                b.clearTimeout(t)
            }
        })
    }
    ;
    (function() {
        var e = Fa.createElement("input")
          , g = Fa.createElement("select").appendChild(Fa.createElement("option"));
        e.type = "checkbox";
        ua.checkOn = "" !== e.value;
        ua.optSelected = g.selected;
        e = Fa.createElement("input");
        e.value = "t";
        e.type = "radio";
        ua.radioValue = "t" === e.value
    }
    )();
    var Vb = q.expr.attrHandle;
    q.fn.extend({
        attr: function(e, g) {
            return Hb(this, q.attr, e, g, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                q.removeAttr(this, e)
            })
        }
    });
    q.extend({
        attr: function(e, g, k) {
            var p, t, x = e.nodeType;
            if (3 !== x && 8 !== x && 2 !== x) {
                if ("undefined" === typeof e.getAttribute)
                    return q.prop(e, g, k);
                1 === x && q.isXMLDoc(e) || (t = q.attrHooks[g.toLowerCase()] || (q.expr.match.bool.test(g) ? zd : void 0));
                if (void 0 !== k) {
                    if (null === k) {
                        q.removeAttr(e, g);
                        return
                    }
                    if (t && "set"in t && void 0 !== (p = t.set(e, k, g)))
                        return p;
                    e.setAttribute(g, k + "");
                    return k
                }
                if (t && "get"in t && null !== (p = t.get(e, g)))
                    return p;
                p = q.find.attr(e, g);
                return null == p ? void 0 : p
            }
        },
        attrHooks: {
            type: {
                set: function(e, g) {
                    if (!ua.radioValue && "radio" === g && C(e, "input")) {
                        var k = e.value;
                        e.setAttribute("type", g);
                        k && (e.value = k);
                        return g
                    }
                }
            }
        },
        removeAttr: function(e, g) {
            var k = 0
              , p = g && g.match(Ab);
            if (p && 1 === e.nodeType)
                for (; g = p[k++]; )
                    e.removeAttribute(g)
        }
    });
    var zd = {
        set: function(e, g, k) {
            !1 === g ? q.removeAttr(e, k) : e.setAttribute(k, k);
            return k
        }
    };
    q.each(q.expr.match.bool.source.match(/\w+/g), function(e, g) {
        var k = Vb[g] || q.find.attr;
        Vb[g] = function(p, t, x) {
            var B = t.toLowerCase();
            if (!x) {
                var K = Vb[B];
                Vb[B] = I;
                var I = null != k(p, t, x) ? B : null;
                Vb[B] = K
            }
            return I
        }
    });
    var Ad = /^(?:input|select|textarea|button)$/i
      , Bd = /^(?:a|area)$/i;
    q.fn.extend({
        prop: function(e, g) {
            return Hb(this, q.prop, e, g, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[q.propFix[e] || e]
            })
        }
    });
    q.extend({
        prop: function(e, g, k) {
            var p, t = e.nodeType;
            if (3 !== t && 8 !== t && 2 !== t) {
                if (1 !== t || !q.isXMLDoc(e)) {
                    g = q.propFix[g] || g;
                    var x = q.propHooks[g]
                }
                return void 0 !== k ? x && "set"in x && void 0 !== (p = x.set(e, k, g)) ? p : e[g] = k : x && "get"in x && null !== (p = x.get(e, g)) ? p : e[g]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var g = q.find.attr(e, "tabindex");
                    return g ? parseInt(g, 10) : Ad.test(e.nodeName) || Bd.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    ua.optSelected || (q.propHooks.selected = {
        get: function(e) {
            (e = e.parentNode) && e.parentNode && e.parentNode.selectedIndex;
            return null
        },
        set: function(e) {
            if (e = e.parentNode)
                e.selectedIndex,
                e.parentNode && e.parentNode.selectedIndex
        }
    });
    q.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function() {
        q.propFix[this.toLowerCase()] = this
    });
    q.fn.extend({
        addClass: function(e) {
            var g, k, p, t, x = 0;
            if (ya(e))
                return this.each(function(I) {
                    q(this).addClass(e.call(this, I, ia(this)))
                });
            var B = na(e);
            if (B.length)
                for (; g = this[x++]; ) {
                    var K = ia(g);
                    if (k = 1 === g.nodeType && " " + ca(K) + " ") {
                        for (t = 0; p = B[t++]; )
                            0 > k.indexOf(" " + p + " ") && (k += p + " ");
                        k = ca(k);
                        K !== k && g.setAttribute("class", k)
                    }
                }
            return this
        },
        removeClass: function(e) {
            var g, k, p, t, x = 0;
            if (ya(e))
                return this.each(function(I) {
                    q(this).removeClass(e.call(this, I, ia(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            var B = na(e);
            if (B.length)
                for (; g = this[x++]; ) {
                    var K = ia(g);
                    if (k = 1 === g.nodeType && " " + ca(K) + " ") {
                        for (t = 0; p = B[t++]; )
                            for (; -1 < k.indexOf(" " + p + " "); )
                                k = k.replace(" " + p + " ", " ");
                        k = ca(k);
                        K !== k && g.setAttribute("class", k)
                    }
                }
            return this
        },
        toggleClass: function(e, g) {
            var k = typeof e
              , p = "string" === k || Array.isArray(e);
            return "boolean" === typeof g && p ? g ? this.addClass(e) : this.removeClass(e) : ya(e) ? this.each(function(t) {
                q(this).toggleClass(e.call(this, t, ia(this), g), g)
            }) : this.each(function() {
                var t, x;
                if (p) {
                    var B = 0;
                    var K = q(this);
                    for (x = na(e); t = x[B++]; )
                        K.hasClass(t) ? K.removeClass(t) : K.addClass(t)
                } else if (void 0 === e || "boolean" === k)
                    (t = ia(this)) && Ha.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Ha.get(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            var g, k = 0;
            for (e = " " + e + " "; g = this[k++]; )
                if (1 === g.nodeType && -1 < (" " + ca(ia(g)) + " ").indexOf(e))
                    return !0;
            return !1
        }
    });
    var Cd = /\r/g;
    q.fn.extend({
        val: function(e) {
            var g, k, p = this[0];
            if (arguments.length) {
                var t = ya(e);
                return this.each(function(x) {
                    1 === this.nodeType && (x = t ? e.call(this, x, q(this).val()) : e,
                    null == x ? x = "" : "number" === typeof x ? x += "" : Array.isArray(x) && (x = q.map(x, function(B) {
                        return null == B ? "" : B + ""
                    })),
                    g = q.valHooks[this.type] || q.valHooks[this.nodeName.toLowerCase()],
                    g && "set"in g && void 0 !== g.set(this, x, "value") || (this.value = x))
                })
            }
            if (p) {
                if ((g = q.valHooks[p.type] || q.valHooks[p.nodeName.toLowerCase()]) && "get"in g && void 0 !== (k = g.get(p, "value")))
                    return k;
                k = p.value;
                return "string" === typeof k ? k.replace(Cd, "") : null == k ? "" : k
            }
        }
    });
    q.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var g = q.find.attr(e, "value");
                    return null != g ? g : ca(q.text(e))
                }
            },
            select: {
                get: function(e) {
                    var g = e.options
                      , k = e.selectedIndex
                      , p = "select-one" === e.type
                      , t = p ? null : []
                      , x = p ? k + 1 : g.length;
                    for (e = 0 > k ? x : p ? k : 0; e < x; e++) {
                        var B = g[e];
                        if (!(!B.selected && e !== k || B.disabled || B.parentNode.disabled && C(B.parentNode, "optgroup"))) {
                            B = q(B).val();
                            if (p)
                                return B;
                            t.push(B)
                        }
                    }
                    return t
                },
                set: function(e, g) {
                    for (var k, p = e.options, t = q.makeArray(g), x = p.length; x--; )
                        if (g = p[x],
                        g.selected = -1 < q.inArray(q.valHooks.option.get(g), t))
                            k = !0;
                    k || (e.selectedIndex = -1);
                    return t
                }
            }
        }
    });
    q.each(["radio", "checkbox"], function() {
        q.valHooks[this] = {
            set: function(e, g) {
                if (Array.isArray(g))
                    return e.checked = -1 < q.inArray(q(e).val(), g)
            }
        };
        ua.checkOn || (q.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    });
    ua.focusin = "onfocusin"in b;
    var Jc = /^(?:focusinfocus|focusoutblur)$/
      , Kc = function(e) {
        e.stopPropagation()
    };
    q.extend(q.event, {
        trigger: function(e, g, k, p) {
            var t, x, B, K = [k || Fa], I = Ya.call(e, "type") ? e.type : e;
            var M = Ya.call(e, "namespace") ? e.namespace.split(".") : [];
            var ba = B = t = k = k || Fa;
            if (3 !== k.nodeType && 8 !== k.nodeType && !Jc.test(I + q.event.triggered)) {
                -1 < I.indexOf(".") && (M = I.split("."),
                I = M.shift(),
                M.sort());
                var la = 0 > I.indexOf(":") && "on" + I;
                e = e[q.expando] ? e : new q.Event(I,"object" === typeof e && e);
                e.isTrigger = p ? 2 : 3;
                e.namespace = M.join(".");
                e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + M.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                e.result = void 0;
                e.target || (e.target = k);
                g = null == g ? [e] : q.makeArray(g, [e]);
                M = q.event.special[I] || {};
                if (p || !M.trigger || !1 !== M.trigger.apply(k, g)) {
                    if (!p && !M.noBubble && !jb(k)) {
                        var ra = M.delegateType || I;
                        Jc.test(ra + I) || (ba = ba.parentNode);
                        for (; ba; ba = ba.parentNode)
                            K.push(ba),
                            t = ba;
                        t === (k.ownerDocument || Fa) && K.push(t.defaultView || t.parentWindow || b)
                    }
                    for (t = 0; (ba = K[t++]) && !e.isPropagationStopped(); )
                        B = ba,
                        e.type = 1 < t ? ra : M.bindType || I,
                        (x = (Ha.get(ba, "events") || {})[e.type] && Ha.get(ba, "handle")) && x.apply(ba, g),
                        (x = la && ba[la]) && x.apply && ec(ba) && (e.result = x.apply(ba, g),
                        !1 === e.result && e.preventDefault());
                    e.type = I;
                    p || e.isDefaultPrevented() || M._default && !1 !== M._default.apply(K.pop(), g) || !ec(k) || !la || !ya(k[I]) || jb(k) || ((t = k[la]) && (k[la] = null),
                    q.event.triggered = I,
                    e.isPropagationStopped() && B.addEventListener(I, Kc),
                    k[I](),
                    e.isPropagationStopped() && B.removeEventListener(I, Kc),
                    q.event.triggered = void 0,
                    t && (k[la] = t));
                    return e.result
                }
            }
        },
        simulate: function(e, g, k) {
            e = q.extend(new q.Event, k, {
                type: e,
                isSimulated: !0
            });
            q.event.trigger(e, null, g)
        }
    });
    q.fn.extend({
        trigger: function(e, g) {
            return this.each(function() {
                q.event.trigger(e, g, this)
            })
        },
        triggerHandler: function(e, g) {
            var k = this[0];
            if (k)
                return q.event.trigger(e, g, k, !0)
        }
    });
    ua.focusin || q.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, g) {
        var k = function(p) {
            q.event.simulate(g, p.target, q.event.fix(p))
        };
        q.event.special[g] = {
            setup: function() {
                var p = this.ownerDocument || this
                  , t = Ha.access(p, g);
                t || p.addEventListener(e, k, !0);
                Ha.access(p, g, (t || 0) + 1)
            },
            teardown: function() {
                var p = this.ownerDocument || this
                  , t = Ha.access(p, g) - 1;
                t ? Ha.access(p, g, t) : (p.removeEventListener(e, k, !0),
                Ha.remove(p, g))
            }
        }
    });
    var Wb = b.location
      , Lc = Date.now()
      , nc = /\?/;
    q.parseXML = function(e) {
        if (!e || "string" !== typeof e)
            return null;
        try {
            var g = (new b.DOMParser).parseFromString(e, "text/xml")
        } catch (k) {
            g = void 0
        }
        g && !g.getElementsByTagName("parsererror").length || q.error("Invalid XML: " + e);
        return g
    }
    ;
    var Yc = /\[\]$/
      , Mc = /\r?\n/g
      , Dd = /^(?:submit|button|image|reset|file)$/i
      , Ed = /^(?:input|select|textarea|keygen)/i;
    q.param = function(e, g) {
        var k, p = [], t = function(x, B) {
            B = ya(B) ? B() : B;
            p[p.length] = encodeURIComponent(x) + "=" + encodeURIComponent(null == B ? "" : B)
        };
        if (Array.isArray(e) || e.jquery && !q.isPlainObject(e))
            q.each(e, function() {
                t(this.name, this.value)
            });
        else
            for (k in e)
                ja(k, e[k], g, t);
        return p.join("&")
    }
    ;
    q.fn.extend({
        serialize: function() {
            return q.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = q.prop(this, "elements");
                return e ? q.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !q(this).is(":disabled") && Ed.test(this.nodeName) && !Dd.test(e) && (this.checked || !Fc.test(e))
            }).map(function(e, g) {
                e = q(this).val();
                return null == e ? null : Array.isArray(e) ? q.map(e, function(k) {
                    return {
                        name: g.name,
                        value: k.replace(Mc, "\r\n")
                    }
                }) : {
                    name: g.name,
                    value: e.replace(Mc, "\r\n")
                }
            }).get()
        }
    });
    var Fd = /%20/g
      , Gd = /#.*$/
      , Hd = /([?&])_=[^&]*/
      , Id = /^(.*?):[ \t]*([^\r\n]*)$/mg
      , Jd = /^(?:GET|HEAD)$/
      , Kd = /^\/\//
      , Nc = {}
      , hc = {}
      , Oc = "*/".concat("*")
      , oc = Fa.createElement("a");
    oc.href = Wb.href;
    q.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Wb.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Wb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Oc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": q.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, g) {
            return g ? Da(Da(e, q.ajaxSettings), g) : Da(q.ajaxSettings, e)
        },
        ajaxPrefilter: ta(Nc),
        ajaxTransport: ta(hc),
        ajax: function(e, g) {
            function k(Ma, Za, db, Ka) {
                var Xa = Za;
                if (!nb) {
                    nb = !0;
                    B && b.clearTimeout(B);
                    p = void 0;
                    t = Ka || "";
                    Aa.readyState = 0 < Ma ? 4 : 0;
                    Ka = 200 <= Ma && 300 > Ma || 304 === Ma;
                    if (db) {
                        var Sa = M;
                        for (var Va = Aa, eb, qb, ob, Ga, cb = Sa.contents, gb = Sa.dataTypes; "*" === gb[0]; )
                            gb.shift(),
                            void 0 === eb && (eb = Sa.mimeType || Va.getResponseHeader("Content-Type"));
                        if (eb)
                            for (qb in cb)
                                if (cb[qb] && cb[qb].test(eb)) {
                                    gb.unshift(qb);
                                    break
                                }
                        if (gb[0]in db)
                            ob = gb[0];
                        else {
                            for (qb in db) {
                                if (!gb[0] || Sa.converters[qb + " " + gb[0]]) {
                                    ob = qb;
                                    break
                                }
                                Ga || (Ga = qb)
                            }
                            ob = ob || Ga
                        }
                        ob ? (ob !== gb[0] && gb.unshift(ob),
                        Sa = db[ob]) : Sa = void 0
                    }
                    a: {
                        db = M;
                        eb = Sa;
                        qb = Aa;
                        ob = Ka;
                        var Qb;
                        Va = {};
                        cb = db.dataTypes.slice();
                        if (cb[1])
                            for (rb in db.converters)
                                Va[rb.toLowerCase()] = db.converters[rb];
                        for (Ga = cb.shift(); Ga; ) {
                            db.responseFields[Ga] && (qb[db.responseFields[Ga]] = eb);
                            !Cb && ob && db.dataFilter && (eb = db.dataFilter(eb, db.dataType));
                            var Cb = Ga;
                            if (Ga = cb.shift())
                                if ("*" === Ga)
                                    Ga = Cb;
                                else if ("*" !== Cb && Cb !== Ga) {
                                    var rb = Va[Cb + " " + Ga] || Va["* " + Ga];
                                    if (!rb)
                                        for (Qb in Va)
                                            if (Sa = Qb.split(" "),
                                            Sa[1] === Ga && (rb = Va[Cb + " " + Sa[0]] || Va["* " + Sa[0]])) {
                                                !0 === rb ? rb = Va[Qb] : !0 !== Va[Qb] && (Ga = Sa[0],
                                                cb.unshift(Sa[1]));
                                                break
                                            }
                                    if (!0 !== rb)
                                        if (rb && db.throws)
                                            eb = rb(eb);
                                        else
                                            try {
                                                eb = rb(eb)
                                            } catch (kc) {
                                                Sa = {
                                                    state: "parsererror",
                                                    error: rb ? kc : "No conversion from " + Cb + " to " + Ga
                                                };
                                                break a
                                            }
                                }
                        }
                        Sa = {
                            state: "success",
                            data: eb
                        }
                    }
                    if (Ka)
                        if (M.ifModified && ((Xa = Aa.getResponseHeader("Last-Modified")) && (q.lastModified[ib] = Xa),
                        (Xa = Aa.getResponseHeader("etag")) && (q.etag[ib] = Xa)),
                        204 === Ma || "HEAD" === M.type)
                            Xa = "nocontent";
                        else if (304 === Ma)
                            Xa = "notmodified";
                        else {
                            Xa = Sa.state;
                            var Mb = Sa.data;
                            var Jb = Sa.error;
                            Ka = !Jb
                        }
                    else if (Jb = Xa,
                    Ma || !Xa)
                        Xa = "error",
                        0 > Ma && (Ma = 0);
                    Aa.status = Ma;
                    Aa.statusText = (Za || Xa) + "";
                    Ka ? ra.resolveWith(ba, [Mb, Xa, Aa]) : ra.rejectWith(ba, [Aa, Xa, Jb]);
                    Aa.statusCode(Ca);
                    Ca = void 0;
                    K && la.trigger(Ka ? "ajaxSuccess" : "ajaxError", [Aa, M, Ka ? Mb : Jb]);
                    Ua.fireWith(ba, [Aa, Xa]);
                    K && (la.trigger("ajaxComplete", [Aa, M]),
                    --q.active || q.event.trigger("ajaxStop"))
                }
            }
            "object" === typeof e && (g = e,
            e = void 0);
            g = g || {};
            var p, t, x, B, K, I, M = q.ajaxSetup({}, g), ba = M.context || M, la = M.context && (ba.nodeType || ba.jquery) ? q(ba) : q.event, ra = q.Deferred(), Ua = q.Callbacks("once memory"), Ca = M.statusCode || {}, lb = {}, mb = {}, wb = "canceled", Aa = {
                readyState: 0,
                getResponseHeader: function(Ma) {
                    var Za;
                    if (nb) {
                        if (!x)
                            for (x = {}; Za = Id.exec(t); )
                                x[Za[1].toLowerCase()] = Za[2];
                        Za = x[Ma.toLowerCase()]
                    }
                    return null == Za ? null : Za
                },
                getAllResponseHeaders: function() {
                    return nb ? t : null
                },
                setRequestHeader: function(Ma, Za) {
                    null == nb && (Ma = mb[Ma.toLowerCase()] = mb[Ma.toLowerCase()] || Ma,
                    lb[Ma] = Za);
                    return this
                },
                overrideMimeType: function(Ma) {
                    null == nb && (M.mimeType = Ma);
                    return this
                },
                statusCode: function(Ma) {
                    var Za;
                    if (Ma)
                        if (nb)
                            Aa.always(Ma[Aa.status]);
                        else
                            for (Za in Ma)
                                Ca[Za] = [Ca[Za], Ma[Za]];
                    return this
                },
                abort: function(Ma) {
                    Ma = Ma || wb;
                    p && p.abort(Ma);
                    k(0, Ma);
                    return this
                }
            };
            ra.promise(Aa);
            M.url = ((e || M.url || Wb.href) + "").replace(Kd, Wb.protocol + "//");
            M.type = g.method || g.type || M.method || M.type;
            M.dataTypes = (M.dataType || "*").toLowerCase().match(Ab) || [""];
            if (null == M.crossDomain) {
                e = Fa.createElement("a");
                try {
                    e.href = M.url,
                    e.href = e.href,
                    M.crossDomain = oc.protocol + "//" + oc.host !== e.protocol + "//" + e.host
                } catch (Ma) {
                    M.crossDomain = !0
                }
            }
            M.data && M.processData && "string" !== typeof M.data && (M.data = q.param(M.data, M.traditional));
            qa(Nc, M, g, Aa);
            if (nb)
                return Aa;
            (K = q.event && M.global) && 0 === q.active++ && q.event.trigger("ajaxStart");
            M.type = M.type.toUpperCase();
            M.hasContent = !Jd.test(M.type);
            var ib = M.url.replace(Gd, "");
            M.hasContent ? M.data && M.processData && 0 === (M.contentType || "").indexOf("application/x-www-form-urlencoded") && (M.data = M.data.replace(Fd, "+")) : (e = M.url.slice(ib.length),
            M.data && (M.processData || "string" === typeof M.data) && (ib += (nc.test(ib) ? "&" : "?") + M.data,
            delete M.data),
            !1 === M.cache && (ib = ib.replace(Hd, "$1"),
            e = (nc.test(ib) ? "&" : "?") + "_=" + Lc++ + e),
            M.url = ib + e);
            M.ifModified && (q.lastModified[ib] && Aa.setRequestHeader("If-Modified-Since", q.lastModified[ib]),
            q.etag[ib] && Aa.setRequestHeader("If-None-Match", q.etag[ib]));
            (M.data && M.hasContent && !1 !== M.contentType || g.contentType) && Aa.setRequestHeader("Content-Type", M.contentType);
            Aa.setRequestHeader("Accept", M.dataTypes[0] && M.accepts[M.dataTypes[0]] ? M.accepts[M.dataTypes[0]] + ("*" !== M.dataTypes[0] ? ", " + Oc + "; q=0.01" : "") : M.accepts["*"]);
            for (I in M.headers)
                Aa.setRequestHeader(I, M.headers[I]);
            if (M.beforeSend && (!1 === M.beforeSend.call(ba, Aa, M) || nb))
                return Aa.abort();
            wb = "abort";
            Ua.add(M.complete);
            Aa.done(M.success);
            Aa.fail(M.error);
            if (p = qa(hc, M, g, Aa)) {
                Aa.readyState = 1;
                K && la.trigger("ajaxSend", [Aa, M]);
                if (nb)
                    return Aa;
                M.async && 0 < M.timeout && (B = b.setTimeout(function() {
                    Aa.abort("timeout")
                }, M.timeout));
                try {
                    var nb = !1;
                    p.send(lb, k)
                } catch (Ma) {
                    if (nb)
                        throw Ma;
                    k(-1, Ma)
                }
            } else
                k(-1, "No Transport");
            return Aa
        },
        getJSON: function(e, g, k) {
            return q.get(e, g, k, "json")
        },
        getScript: function(e, g) {
            return q.get(e, void 0, g, "script")
        }
    });
    q.each(["get", "post"], function(e, g) {
        q[g] = function(k, p, t, x) {
            ya(p) && (x = x || t,
            t = p,
            p = void 0);
            return q.ajax(q.extend({
                url: k,
                type: g,
                dataType: x,
                data: p,
                success: t
            }, q.isPlainObject(k) && k))
        }
    });
    q._evalUrl = function(e) {
        return q.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ;
    q.fn.extend({
        wrapAll: function(e) {
            this[0] && (ya(e) && (e = e.call(this[0])),
            e = q(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && e.insertBefore(this[0]),
            e.map(function() {
                for (var g = this; g.firstElementChild; )
                    g = g.firstElementChild;
                return g
            }).append(this));
            return this
        },
        wrapInner: function(e) {
            return ya(e) ? this.each(function(g) {
                q(this).wrapInner(e.call(this, g))
            }) : this.each(function() {
                var g = q(this)
                  , k = g.contents();
                k.length ? k.wrapAll(e) : g.append(e)
            })
        },
        wrap: function(e) {
            var g = ya(e);
            return this.each(function(k) {
                q(this).wrapAll(g ? e.call(this, k) : e)
            })
        },
        unwrap: function(e) {
            this.parent(e).not("body").each(function() {
                q(this).replaceWith(this.childNodes)
            });
            return this
        }
    });
    q.expr.pseudos.hidden = function(e) {
        return !q.expr.pseudos.visible(e)
    }
    ;
    q.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ;
    q.ajaxSettings.xhr = function() {
        try {
            return new b.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Ld = {
        0: 200,
        1223: 204
    }
      , Xb = q.ajaxSettings.xhr();
    ua.cors = !!Xb && "withCredentials"in Xb;
    ua.ajax = Xb = !!Xb;
    q.ajaxTransport(function(e) {
        var g, k;
        if (ua.cors || Xb && !e.crossDomain)
            return {
                send: function(p, t) {
                    var x, B = e.xhr();
                    B.open(e.type, e.url, e.async, e.username, e.password);
                    if (e.xhrFields)
                        for (x in e.xhrFields)
                            B[x] = e.xhrFields[x];
                    e.mimeType && B.overrideMimeType && B.overrideMimeType(e.mimeType);
                    e.crossDomain || p["X-Requested-With"] || (p["X-Requested-With"] = "XMLHttpRequest");
                    for (x in p)
                        B.setRequestHeader(x, p[x]);
                    g = function(K) {
                        return function() {
                            g && (g = k = B.onload = B.onerror = B.onabort = B.ontimeout = B.onreadystatechange = null,
                            "abort" === K ? B.abort() : "error" === K ? "number" !== typeof B.status ? t(0, "error") : t(B.status, B.statusText) : t(Ld[B.status] || B.status, B.statusText, "text" !== (B.responseType || "text") || "string" !== typeof B.responseText ? {
                                binary: B.response
                            } : {
                                text: B.responseText
                            }, B.getAllResponseHeaders()))
                        }
                    }
                    ;
                    B.onload = g();
                    k = B.onerror = B.ontimeout = g("error");
                    void 0 !== B.onabort ? B.onabort = k : B.onreadystatechange = function() {
                        4 === B.readyState && b.setTimeout(function() {
                            g && k()
                        })
                    }
                    ;
                    g = g("abort");
                    try {
                        B.send(e.hasContent && e.data || null)
                    } catch (K) {
                        if (g)
                            throw K;
                    }
                },
                abort: function() {
                    g && g()
                }
            }
    });
    q.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    });
    q.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                q.globalEval(e);
                return e
            }
        }
    });
    q.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1);
        e.crossDomain && (e.type = "GET")
    });
    q.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var g, k;
            return {
                send: function(p, t) {
                    g = q("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", k = function(x) {
                        g.remove();
                        k = null;
                        x && t("error" === x.type ? 404 : 200, x.type)
                    }
                    );
                    Fa.head.appendChild(g[0])
                },
                abort: function() {
                    k && k()
                }
            }
        }
    });
    var Pc = []
      , pc = /(=)\?(?=&|$)|\?\?/;
    q.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Pc.pop() || q.expando + "_" + Lc++;
            this[e] = !0;
            return e
        }
    });
    q.ajaxPrefilter("json jsonp", function(e, g, k) {
        var p, t = !1 !== e.jsonp && (pc.test(e.url) ? "url" : "string" === typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && pc.test(e.data) && "data");
        if (t || "jsonp" === e.dataTypes[0]) {
            var x = e.jsonpCallback = ya(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback;
            t ? e[t] = e[t].replace(pc, "$1" + x) : !1 !== e.jsonp && (e.url += (nc.test(e.url) ? "&" : "?") + e.jsonp + "=" + x);
            e.converters["script json"] = function() {
                p || q.error(x + " was not called");
                return p[0]
            }
            ;
            e.dataTypes[0] = "json";
            var B = b[x];
            b[x] = function() {
                p = arguments
            }
            ;
            k.always(function() {
                void 0 === B ? q(b).removeProp(x) : b[x] = B;
                e[x] && (e.jsonpCallback = g.jsonpCallback,
                Pc.push(x));
                p && ya(B) && B(p[0]);
                p = B = void 0
            });
            return "script"
        }
    });
    ua.createHTMLDocument = function() {
        var e = Fa.implementation.createHTMLDocument("").body;
        e.innerHTML = "<form></form><form></form>";
        return 2 === e.childNodes.length
    }();
    q.parseHTML = function(e, g, k) {
        if ("string" !== typeof e)
            return [];
        "boolean" === typeof g && (k = g,
        g = !1);
        if (!g)
            if (ua.createHTMLDocument) {
                g = Fa.implementation.createHTMLDocument("");
                var p = g.createElement("base");
                p.href = Fa.location.href;
                g.head.appendChild(p)
            } else
                g = Fa;
        p = Cc.exec(e);
        k = !k && [];
        if (p)
            return [g.createElement(p[1])];
        p = S([e], g, k);
        k && k.length && q(k).remove();
        return q.merge([], p.childNodes)
    }
    ;
    q.fn.load = function(e, g, k) {
        var p, t, x = this, B = e.indexOf(" ");
        if (-1 < B) {
            var K = ca(e.slice(B));
            e = e.slice(0, B)
        }
        ya(g) ? (k = g,
        g = void 0) : g && "object" === typeof g && (p = "POST");
        0 < x.length && q.ajax({
            url: e,
            type: p || "GET",
            dataType: "html",
            data: g
        }).done(function(I) {
            t = arguments;
            x.html(K ? q("<div>").append(q.parseHTML(I)).find(K) : I)
        }).always(k && function(I, M) {
            x.each(function() {
                k.apply(this, t || [I.responseText, M, I])
            })
        }
        );
        return this
    }
    ;
    q.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, g) {
        q.fn[g] = function(k) {
            return this.on(g, k)
        }
    });
    q.expr.pseudos.animated = function(e) {
        return q.grep(q.timers, function(g) {
            return e === g.elem
        }).length
    }
    ;
    q.offset = {
        setOffset: function(e, g, k) {
            var p = q.css(e, "position")
              , t = q(e)
              , x = {};
            "static" === p && (e.style.position = "relative");
            var B = t.offset();
            var K = q.css(e, "top");
            var I = q.css(e, "left");
            ("absolute" === p || "fixed" === p) && -1 < (K + I).indexOf("auto") ? (I = t.position(),
            K = I.top,
            I = I.left) : (K = parseFloat(K) || 0,
            I = parseFloat(I) || 0);
            ya(g) && (g = g.call(e, k, q.extend({}, B)));
            null != g.top && (x.top = g.top - B.top + K);
            null != g.left && (x.left = g.left - B.left + I);
            "using"in g ? g.using.call(e, x) : t.css(x)
        }
    };
    q.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(p) {
                    q.offset.setOffset(this, e, p)
                });
            var g;
            if (g = this[0]) {
                if (!g.getClientRects().length)
                    return {
                        top: 0,
                        left: 0
                    };
                var k = g.getBoundingClientRect();
                g = g.ownerDocument.defaultView;
                return {
                    top: k.top + g.pageYOffset,
                    left: k.left + g.pageXOffset
                }
            }
        },
        position: function() {
            if (this[0]) {
                var e, g = this[0], k = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === q.css(g, "position"))
                    var p = g.getBoundingClientRect();
                else {
                    p = this.offset();
                    var t = g.ownerDocument;
                    for (e = g.offsetParent || t.documentElement; e && (e === t.body || e === t.documentElement) && "static" === q.css(e, "position"); )
                        e = e.parentNode;
                    e && e !== g && 1 === e.nodeType && (k = q(e).offset(),
                    k.top += q.css(e, "borderTopWidth", !0),
                    k.left += q.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: p.top - k.top - q.css(g, "marginTop", !0),
                    left: p.left - k.left - q.css(g, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === q.css(e, "position"); )
                    e = e.offsetParent;
                return e || fc
            })
        }
    });
    q.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, g) {
        var k = "pageYOffset" === g;
        q.fn[e] = function(p) {
            return Hb(this, function(t, x, B) {
                if (jb(t))
                    var K = t;
                else
                    9 === t.nodeType && (K = t.defaultView);
                if (void 0 === B)
                    return K ? K[g] : t[x];
                K ? K.scrollTo(k ? K.pageXOffset : B, k ? B : K.pageYOffset) : t[x] = B
            }, e, p, arguments.length)
        }
    });
    q.each(["top", "left"], function(e, g) {
        q.cssHooks[g] = d(ua.pixelPosition, function(k, p) {
            if (p)
                return p = c(k, g),
                gc.test(p) ? q(k).position()[g] + "px" : p
        })
    });
    q.each({
        Height: "height",
        Width: "width"
    }, function(e, g) {
        q.each({
            padding: "inner" + e,
            content: g,
            "": "outer" + e
        }, function(k, p) {
            q.fn[p] = function(t, x) {
                var B = arguments.length && (k || "boolean" !== typeof t)
                  , K = k || (!0 === t || !0 === x ? "margin" : "border");
                return Hb(this, function(I, M, ba) {
                    return jb(I) ? 0 === p.indexOf("outer") ? I["inner" + e] : I.document.documentElement["client" + e] : 9 === I.nodeType ? (M = I.documentElement,
                    Math.max(I.body["scroll" + e], M["scroll" + e], I.body["offset" + e], M["offset" + e], M["client" + e])) : void 0 === ba ? q.css(I, M, K) : q.style(I, M, ba, K)
                }, g, B ? t : void 0, B)
            }
        })
    });
    q.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, g) {
        q.fn[g] = function(k, p) {
            return 0 < arguments.length ? this.on(g, null, k, p) : this.trigger(g)
        }
    });
    q.fn.extend({
        hover: function(e, g) {
            return this.mouseenter(e).mouseleave(g || e)
        }
    });
    q.fn.extend({
        bind: function(e, g, k) {
            return this.on(e, null, g, k)
        },
        unbind: function(e, g) {
            return this.off(e, null, g)
        },
        delegate: function(e, g, k, p) {
            return this.on(g, e, k, p)
        },
        undelegate: function(e, g, k) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(g, e || "**", k)
        }
    });
    q.proxy = function(e, g) {
        if ("string" === typeof g) {
            var k = e[g];
            g = e;
            e = k
        }
        if (ya(e)) {
            var p = Ta.call(arguments, 2);
            k = function() {
                return e.apply(g || this, p.concat(Ta.call(arguments)))
            }
            ;
            k.guid = e.guid = e.guid || q.guid++;
            return k
        }
    }
    ;
    q.holdReady = function(e) {
        e ? q.readyWait++ : q.ready(!0)
    }
    ;
    q.isArray = Array.isArray;
    q.parseJSON = JSON.parse;
    q.nodeName = C;
    q.isFunction = ya;
    q.isWindow = jb;
    q.camelCase = T;
    q.type = m;
    q.now = Date.now;
    q.isNumeric = function(e) {
        var g = q.type(e);
        return ("number" === g || "string" === g) && !isNaN(e - parseFloat(e))
    }
    ;
    "function" === typeof define && define.amd && define("jquery", [], function() {
        return q
    });
    var Md = b.jQuery
      , Nd = b.$;
    q.noConflict = function(e) {
        b.$ === q && (b.$ = Nd);
        e && b.jQuery === q && (b.jQuery = Md);
        return q
    }
    ;
    l || (b.jQuery = b.$ = q);
    return q
});
Object.defineProperty(String.prototype, "format", {
    value: function() {
        for (var b = this, l = 0; l < arguments.length; l++)
            b = b.replace(new RegExp("\\{" + l + "\\}","gi"), arguments[l]);
        return b
    },
    enumerable: !1
});
Object.defineProperty(String.prototype, "superformat", {
    value: function(b) {
        var l = this, y;
        for (y in b)
            l = l.replace("{" + y + "}", b[y]);
        return l
    },
    enumerable: !1
});
!function(b, l) {
    "function" == typeof define && define.amd ? define("stackframe", [], l) : "object" == typeof exports ? module.exports = l() : b.StackFrame = l()
}(this, function() {
    function b(y) {
        return !isNaN(parseFloat(y)) && isFinite(y)
    }
    function l(y, m, u, C, v, E) {
        void 0 !== y && this.setFunctionName(y);
        void 0 !== m && this.setArgs(m);
        void 0 !== u && this.setFileName(u);
        void 0 !== C && this.setLineNumber(C);
        void 0 !== v && this.setColumnNumber(v);
        void 0 !== E && this.setSource(E)
    }
    return l.prototype = {
        getFunctionName: function() {
            return this.functionName
        },
        setFunctionName: function(y) {
            this.functionName = String(y)
        },
        getArgs: function() {
            return this.args
        },
        setArgs: function(y) {
            if ("[object Array]" !== Object.prototype.toString.call(y))
                throw new TypeError("Args must be an Array");
            this.args = y
        },
        getFileName: function() {
            return this.fileName
        },
        setFileName: function(y) {
            this.fileName = String(y)
        },
        getLineNumber: function() {
            return this.lineNumber
        },
        setLineNumber: function(y) {
            if (!b(y))
                throw new TypeError("Line Number must be a Number");
            this.lineNumber = Number(y)
        },
        getColumnNumber: function() {
            return this.columnNumber
        },
        setColumnNumber: function(y) {
            if (!b(y))
                throw new TypeError("Column Number must be a Number");
            this.columnNumber = Number(y)
        },
        getSource: function() {
            return this.source
        },
        setSource: function(y) {
            this.source = String(y)
        },
        toString: function() {
            var y = this.getFunctionName() || "{anonymous}"
              , m = "(" + (this.getArgs() || []).join(",") + ")"
              , u = this.getFileName() ? "@" + this.getFileName() : ""
              , C = b(this.getLineNumber()) ? ":" + this.getLineNumber() : ""
              , v = b(this.getColumnNumber()) ? ":" + this.getColumnNumber() : "";
            return y + m + u + C + v
        }
    },
    l
});
var SourceMap = function(b) {
    function l(m) {
        if (y[m])
            return y[m].exports;
        var u = y[m] = {
            exports: {},
            id: m,
            loaded: !1
        };
        return b[m].call(u.exports, u, u.exports, l),
        u.loaded = !0,
        u.exports
    }
    var y = {};
    return l.m = b,
    l.c = y,
    l.p = "",
    l(0)
}([function(b, l, y) {
    function m(F) {
        var J = F;
        return "string" == typeof F && (J = JSON.parse(F.replace(/^\)\]\}'/, ""))),
        null != J.sections ? new v(J) : new u(J)
    }
    function u(F) {
        var J = F;
        "string" == typeof F && (J = JSON.parse(F.replace(/^\)\]\}'/, "")));
        F = E.getArg(J, "version");
        var T = E.getArg(J, "sources")
          , X = E.getArg(J, "names", [])
          , O = E.getArg(J, "sourceRoot", null)
          , ea = E.getArg(J, "sourcesContent", null)
          , da = E.getArg(J, "mappings");
        J = E.getArg(J, "file", null);
        if (F != this._version)
            throw Error("Unsupported version: " + F);
        T = T.map(String).map(E.normalize).map(function(ka) {
            return O && E.isAbsolute(O) && E.isAbsolute(ka) ? E.relative(O, ka) : ka
        });
        this._names = P.fromArray(X.map(String), !0);
        this._sources = P.fromArray(T, !0);
        this.sourceRoot = O;
        this.sourcesContent = ea;
        this._mappings = da;
        this.file = J
    }
    function C() {
        this.generatedColumn = this.generatedLine = 0;
        this.name = this.originalColumn = this.originalLine = this.source = null
    }
    function v(F) {
        var J = F;
        "string" == typeof F && (J = JSON.parse(F.replace(/^\)\]\}'/, "")));
        F = E.getArg(J, "version");
        J = E.getArg(J, "sections");
        if (F != this._version)
            throw Error("Unsupported version: " + F);
        this._sources = new P;
        this._names = new P;
        var T = {
            line: -1,
            column: 0
        };
        this._sections = J.map(function(X) {
            if (X.url)
                throw Error("Support for url field in sections not implemented.");
            var O = E.getArg(X, "offset")
              , ea = E.getArg(O, "line")
              , da = E.getArg(O, "column");
            if (ea < T.line || ea === T.line && da < T.column)
                throw Error("Section offsets must be ordered and non-overlapping.");
            return T = O,
            {
                generatedOffset: {
                    generatedLine: ea + 1,
                    generatedColumn: da + 1
                },
                consumer: new m(E.getArg(X, "map"))
            }
        })
    }
    var E = y(1)
      , N = y(2)
      , P = y(3).ArraySet
      , aa = y(4)
      , R = y(6).quickSort;
    m.fromSourceMap = function(F) {
        return u.fromSourceMap(F)
    }
    ;
    m.prototype._version = 3;
    m.prototype.__generatedMappings = null;
    Object.defineProperty(m.prototype, "_generatedMappings", {
        get: function() {
            return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot),
            this.__generatedMappings
        }
    });
    m.prototype.__originalMappings = null;
    Object.defineProperty(m.prototype, "_originalMappings", {
        get: function() {
            return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot),
            this.__originalMappings
        }
    });
    m.prototype._charIsMappingSeparator = function(F, J) {
        F = F.charAt(J);
        return ";" === F || "," === F
    }
    ;
    m.prototype._parseMappings = function(F, J) {
        throw Error("Subclasses must implement _parseMappings");
    }
    ;
    m.GENERATED_ORDER = 1;
    m.ORIGINAL_ORDER = 2;
    m.GREATEST_LOWER_BOUND = 1;
    m.LEAST_UPPER_BOUND = 2;
    m.prototype.eachMapping = function(F, J, T) {
        J = J || null;
        switch (T || m.GENERATED_ORDER) {
        case m.GENERATED_ORDER:
            T = this._generatedMappings;
            break;
        case m.ORIGINAL_ORDER:
            T = this._originalMappings;
            break;
        default:
            throw Error("Unknown order of iteration.");
        }
        var X = this.sourceRoot;
        T.map(function(O) {
            var ea = null === O.source ? null : this._sources.at(O.source);
            return null != ea && null != X && (ea = E.join(X, ea)),
            {
                source: ea,
                generatedLine: O.generatedLine,
                generatedColumn: O.generatedColumn,
                originalLine: O.originalLine,
                originalColumn: O.originalColumn,
                name: null === O.name ? null : this._names.at(O.name)
            }
        }, this).forEach(F, J)
    }
    ;
    m.prototype.allGeneratedPositionsFor = function(F) {
        var J = E.getArg(F, "line")
          , T = {
            source: E.getArg(F, "source"),
            originalLine: J,
            originalColumn: E.getArg(F, "column", 0)
        };
        if (null != this.sourceRoot && (T.source = E.relative(this.sourceRoot, T.source)),
        !this._sources.has(T.source))
            return [];
        T.source = this._sources.indexOf(T.source);
        var X = [];
        T = this._findMapping(T, this._originalMappings, "originalLine", "originalColumn", E.compareByOriginalPositions, N.LEAST_UPPER_BOUND);
        if (0 <= T) {
            var O = this._originalMappings[T];
            if (void 0 === F.column)
                for (J = O.originalLine; O && O.originalLine === J; )
                    X.push({
                        line: E.getArg(O, "generatedLine", null),
                        column: E.getArg(O, "generatedColumn", null),
                        lastColumn: E.getArg(O, "lastGeneratedColumn", null)
                    }),
                    O = this._originalMappings[++T];
            else
                for (F = O.originalColumn; O && O.originalLine === J && O.originalColumn == F; )
                    X.push({
                        line: E.getArg(O, "generatedLine", null),
                        column: E.getArg(O, "generatedColumn", null),
                        lastColumn: E.getArg(O, "lastGeneratedColumn", null)
                    }),
                    O = this._originalMappings[++T]
        }
        return X
    }
    ;
    l.SourceMapConsumer = m;
    u.prototype = Object.create(m.prototype);
    u.prototype.consumer = m;
    u.fromSourceMap = function(F) {
        var J = Object.create(u.prototype)
          , T = J._names = P.fromArray(F._names.toArray(), !0)
          , X = J._sources = P.fromArray(F._sources.toArray(), !0);
        J.sourceRoot = F._sourceRoot;
        J.sourcesContent = F._generateSourcesContent(J._sources.toArray(), J.sourceRoot);
        J.file = F._file;
        F = F._mappings.toArray().slice();
        for (var O = J.__generatedMappings = [], ea = J.__originalMappings = [], da = 0, ka = F.length; ka > da; da++) {
            var wa = F[da]
              , S = new C;
            S.generatedLine = wa.generatedLine;
            S.generatedColumn = wa.generatedColumn;
            wa.source && (S.source = X.indexOf(wa.source),
            S.originalLine = wa.originalLine,
            S.originalColumn = wa.originalColumn,
            wa.name && (S.name = T.indexOf(wa.name)),
            ea.push(S));
            O.push(S)
        }
        return R(J.__originalMappings, E.compareByOriginalPositions),
        J
    }
    ;
    u.prototype._version = 3;
    Object.defineProperty(u.prototype, "sources", {
        get: function() {
            return this._sources.toArray().map(function(F) {
                return null != this.sourceRoot ? E.join(this.sourceRoot, F) : F
            }, this)
        }
    });
    u.prototype._parseMappings = function(F, J) {
        for (var T, X, O, ea, da = 1, ka = 0, wa = 0, S = 0, Y = 0, oa = 0, ma = F.length, sa = 0, La = {}, Na = {}, Ja = [], Ba = []; ma > sa; )
            if (";" === F.charAt(sa))
                da++,
                sa++,
                ka = 0;
            else if ("," === F.charAt(sa))
                sa++;
            else {
                J = new C;
                J.generatedLine = da;
                for (O = sa; ma > O && !this._charIsMappingSeparator(F, O); O++)
                    ;
                if (T = F.slice(sa, O),
                X = La[T])
                    sa += T.length;
                else {
                    for (X = []; O > sa; )
                        aa.decode(F, sa, Na),
                        ea = Na.value,
                        sa = Na.rest,
                        X.push(ea);
                    if (2 === X.length)
                        throw Error("Found a source, but no line and column");
                    if (3 === X.length)
                        throw Error("Found a source and line, but no column");
                    La[T] = X
                }
                J.generatedColumn = ka + X[0];
                ka = J.generatedColumn;
                1 < X.length && (J.source = Y + X[1],
                Y += X[1],
                J.originalLine = wa + X[2],
                wa = J.originalLine,
                J.originalLine += 1,
                J.originalColumn = S + X[3],
                S = J.originalColumn,
                4 < X.length && (J.name = oa + X[4],
                oa += X[4]));
                Ba.push(J);
                "number" == typeof J.originalLine && Ja.push(J)
            }
        R(Ba, E.compareByGeneratedPositionsDeflated);
        this.__generatedMappings = Ba;
        R(Ja, E.compareByOriginalPositions);
        this.__originalMappings = Ja
    }
    ;
    u.prototype._findMapping = function(F, J, T, X, O, ea) {
        if (0 >= F[T])
            throw new TypeError("Line must be greater than or equal to 1, got " + F[T]);
        if (0 > F[X])
            throw new TypeError("Column must be greater than or equal to 0, got " + F[X]);
        return N.search(F, J, O, ea)
    }
    ;
    u.prototype.computeColumnSpans = function() {
        for (var F = 0; F < this._generatedMappings.length; ++F) {
            var J = this._generatedMappings[F];
            if (F + 1 < this._generatedMappings.length) {
                var T = this._generatedMappings[F + 1];
                if (J.generatedLine === T.generatedLine) {
                    J.lastGeneratedColumn = T.generatedColumn - 1;
                    continue
                }
            }
            J.lastGeneratedColumn = 1 / 0
        }
    }
    ;
    u.prototype.originalPositionFor = function(F) {
        var J = {
            generatedLine: E.getArg(F, "line"),
            generatedColumn: E.getArg(F, "column")
        };
        F = this._findMapping(J, this._generatedMappings, "generatedLine", "generatedColumn", E.compareByGeneratedPositionsDeflated, E.getArg(F, "bias", m.GREATEST_LOWER_BOUND));
        if (0 <= F && (F = this._generatedMappings[F],
        F.generatedLine === J.generatedLine)) {
            J = E.getArg(F, "source", null);
            null !== J && (J = this._sources.at(J),
            null != this.sourceRoot && (J = E.join(this.sourceRoot, J)));
            var T = E.getArg(F, "name", null);
            return null !== T && (T = this._names.at(T)),
            {
                source: J,
                line: E.getArg(F, "originalLine", null),
                column: E.getArg(F, "originalColumn", null),
                name: T
            }
        }
        return {
            source: null,
            line: null,
            column: null,
            name: null
        }
    }
    ;
    u.prototype.hasContentsOfAllSources = function() {
        return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(F) {
            return null == F
        }) : !1
    }
    ;
    u.prototype.sourceContentFor = function(F, J) {
        if (!this.sourcesContent)
            return null;
        if (null != this.sourceRoot && (F = E.relative(this.sourceRoot, F)),
        this._sources.has(F))
            return this.sourcesContent[this._sources.indexOf(F)];
        var T;
        if (null != this.sourceRoot && (T = E.urlParse(this.sourceRoot))) {
            var X = F.replace(/^file:\/\//, "");
            if ("file" == T.scheme && this._sources.has(X))
                return this.sourcesContent[this._sources.indexOf(X)];
            if ((!T.path || "/" == T.path) && this._sources.has("/" + F))
                return this.sourcesContent[this._sources.indexOf("/" + F)]
        }
        if (J)
            return null;
        throw Error('"' + F + '" is not in the SourceMap.');
    }
    ;
    u.prototype.generatedPositionFor = function(F) {
        var J = E.getArg(F, "source");
        if (null != this.sourceRoot && (J = E.relative(this.sourceRoot, J)),
        !this._sources.has(J))
            return {
                line: null,
                column: null,
                lastColumn: null
            };
        J = this._sources.indexOf(J);
        J = {
            source: J,
            originalLine: E.getArg(F, "line"),
            originalColumn: E.getArg(F, "column")
        };
        F = this._findMapping(J, this._originalMappings, "originalLine", "originalColumn", E.compareByOriginalPositions, E.getArg(F, "bias", m.GREATEST_LOWER_BOUND));
        return 0 <= F && (F = this._originalMappings[F],
        F.source === J.source) ? {
            line: E.getArg(F, "generatedLine", null),
            column: E.getArg(F, "generatedColumn", null),
            lastColumn: E.getArg(F, "lastGeneratedColumn", null)
        } : {
            line: null,
            column: null,
            lastColumn: null
        }
    }
    ;
    l.BasicSourceMapConsumer = u;
    v.prototype = Object.create(m.prototype);
    v.prototype.constructor = m;
    v.prototype._version = 3;
    Object.defineProperty(v.prototype, "sources", {
        get: function() {
            for (var F = [], J = 0; J < this._sections.length; J++)
                for (var T = 0; T < this._sections[J].consumer.sources.length; T++)
                    F.push(this._sections[J].consumer.sources[T]);
            return F
        }
    });
    v.prototype.originalPositionFor = function(F) {
        var J = {
            generatedLine: E.getArg(F, "line"),
            generatedColumn: E.getArg(F, "column")
        }
          , T = N.search(J, this._sections, function(X, O) {
            var ea = X.generatedLine - O.generatedOffset.generatedLine;
            return ea ? ea : X.generatedColumn - O.generatedOffset.generatedColumn
        });
        return (T = this._sections[T]) ? T.consumer.originalPositionFor({
            line: J.generatedLine - (T.generatedOffset.generatedLine - 1),
            column: J.generatedColumn - (T.generatedOffset.generatedLine === J.generatedLine ? T.generatedOffset.generatedColumn - 1 : 0),
            bias: F.bias
        }) : {
            source: null,
            line: null,
            column: null,
            name: null
        }
    }
    ;
    v.prototype.hasContentsOfAllSources = function() {
        return this._sections.every(function(F) {
            return F.consumer.hasContentsOfAllSources()
        })
    }
    ;
    v.prototype.sourceContentFor = function(F, J) {
        for (var T = 0; T < this._sections.length; T++) {
            var X = this._sections[T].consumer.sourceContentFor(F, !0);
            if (X)
                return X
        }
        if (J)
            return null;
        throw Error('"' + F + '" is not in the SourceMap.');
    }
    ;
    v.prototype.generatedPositionFor = function(F) {
        for (var J = 0; J < this._sections.length; J++) {
            var T = this._sections[J];
            if (-1 !== T.consumer.sources.indexOf(E.getArg(F, "source"))) {
                var X = T.consumer.generatedPositionFor(F);
                if (X)
                    return {
                        line: X.line + (T.generatedOffset.generatedLine - 1),
                        column: X.column + (T.generatedOffset.generatedLine === X.line ? T.generatedOffset.generatedColumn - 1 : 0)
                    }
            }
        }
        return {
            line: null,
            column: null
        }
    }
    ;
    v.prototype._parseMappings = function(F, J) {
        this.__generatedMappings = [];
        this.__originalMappings = [];
        for (F = 0; F < this._sections.length; F++) {
            J = this._sections[F];
            for (var T = J.consumer._generatedMappings, X = 0; X < T.length; X++) {
                var O = T[X]
                  , ea = J.consumer._sources.at(O.source);
                null !== J.consumer.sourceRoot && (ea = E.join(J.consumer.sourceRoot, ea));
                this._sources.add(ea);
                ea = this._sources.indexOf(ea);
                var da = J.consumer._names.at(O.name);
                this._names.add(da);
                da = this._names.indexOf(da);
                O = {
                    source: ea,
                    generatedLine: O.generatedLine + (J.generatedOffset.generatedLine - 1),
                    generatedColumn: O.generatedColumn + (J.generatedOffset.generatedLine === O.generatedLine ? J.generatedOffset.generatedColumn - 1 : 0),
                    originalLine: O.originalLine,
                    originalColumn: O.originalColumn,
                    name: da
                };
                this.__generatedMappings.push(O);
                "number" == typeof O.originalLine && this.__originalMappings.push(O)
            }
        }
        R(this.__generatedMappings, E.compareByGeneratedPositionsDeflated);
        R(this.__originalMappings, E.compareByOriginalPositions)
    }
    ;
    l.IndexedSourceMapConsumer = v
}
, function(b, l) {
    function y(R) {
        return (R = R.match(P)) ? {
            scheme: R[1],
            auth: R[2],
            host: R[3],
            port: R[4],
            path: R[5]
        } : null
    }
    function m(R) {
        var F = "";
        return R.scheme && (F += R.scheme + ":"),
        F += "//",
        R.auth && (F += R.auth + "@"),
        R.host && (F += R.host),
        R.port && (F += ":" + R.port),
        R.path && (F += R.path),
        F
    }
    function u(R) {
        var F = R
          , J = y(R);
        if (J) {
            if (!J.path)
                return R;
            F = J.path
        }
        for (var T = l.isAbsolute(F), X = F.split(/\/+/), O = 0, ea = X.length - 1; 0 <= ea; ea--)
            R = X[ea],
            "." === R ? X.splice(ea, 1) : ".." === R ? O++ : 0 < O && ("" === R ? (X.splice(ea + 1, O),
            O = 0) : (X.splice(ea, 2),
            O--));
        return F = X.join("/"),
        "" === F && (F = T ? "/" : "."),
        J ? (J.path = F,
        m(J)) : F
    }
    function C(R) {
        return R
    }
    function v(R) {
        return N(R) ? "$" + R : R
    }
    function E(R) {
        return N(R) ? R.slice(1) : R
    }
    function N(R) {
        if (!R)
            return !1;
        var F = R.length;
        if (9 > F || 95 !== R.charCodeAt(F - 1) || 95 !== R.charCodeAt(F - 2) || 111 !== R.charCodeAt(F - 3) || 116 !== R.charCodeAt(F - 4) || 111 !== R.charCodeAt(F - 5) || 114 !== R.charCodeAt(F - 6) || 112 !== R.charCodeAt(F - 7) || 95 !== R.charCodeAt(F - 8) || 95 !== R.charCodeAt(F - 9))
            return !1;
        for (F -= 10; 0 <= F; F--)
            if (36 !== R.charCodeAt(F))
                return !1;
        return !0
    }
    l.getArg = function(R, F, J) {
        if (F in R)
            return R[F];
        if (3 === arguments.length)
            return J;
        throw Error('"' + F + '" is a required argument.');
    }
    ;
    var P = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/
      , aa = /^data:.+,.+$/;
    l.urlParse = y;
    l.urlGenerate = m;
    l.normalize = u;
    l.join = function(R, F) {
        "" === R && (R = ".");
        "" === F && (F = ".");
        var J = y(F)
          , T = y(R);
        if (T && (R = T.path || "/"),
        J && !J.scheme)
            return T && (J.scheme = T.scheme),
            m(J);
        if (J || F.match(aa))
            return F;
        if (T && !T.host && !T.path)
            return T.host = F,
            m(T);
        R = "/" === F.charAt(0) ? F : u(R.replace(/\/+$/, "") + "/" + F);
        return T ? (T.path = R,
        m(T)) : R
    }
    ;
    l.isAbsolute = function(R) {
        return "/" === R.charAt(0) || !!R.match(P)
    }
    ;
    l.relative = function(R, F) {
        "" === R && (R = ".");
        R = R.replace(/\/$/, "");
        for (var J = 0; 0 !== F.indexOf(R + "/"); ) {
            var T = R.lastIndexOf("/");
            if (0 > T || (R = R.slice(0, T),
            R.match(/^([^\/]+:\/)?\/*$/)))
                return F;
            ++J
        }
        return Array(J + 1).join("../") + F.substr(R.length + 1)
    }
    ;
    b = !("__proto__"in Object.create(null));
    l.toSetString = b ? C : v;
    l.fromSetString = b ? C : E;
    l.compareByOriginalPositions = function(R, F, J) {
        var T = R.source - F.source;
        return 0 !== T ? T : (T = R.originalLine - F.originalLine,
        0 !== T ? T : (T = R.originalColumn - F.originalColumn,
        0 !== T || J ? T : (T = R.generatedColumn - F.generatedColumn,
        0 !== T ? T : (T = R.generatedLine - F.generatedLine,
        0 !== T ? T : R.name - F.name))))
    }
    ;
    l.compareByGeneratedPositionsDeflated = function(R, F, J) {
        var T = R.generatedLine - F.generatedLine;
        return 0 !== T ? T : (T = R.generatedColumn - F.generatedColumn,
        0 !== T || J ? T : (T = R.source - F.source,
        0 !== T ? T : (T = R.originalLine - F.originalLine,
        0 !== T ? T : (T = R.originalColumn - F.originalColumn,
        0 !== T ? T : R.name - F.name))))
    }
    ;
    l.compareByGeneratedPositionsInflated = function(R, F) {
        var J = R.generatedLine - F.generatedLine;
        if (0 !== J)
            F = J;
        else if (J = R.generatedColumn - F.generatedColumn,
        0 !== J)
            F = J;
        else {
            J = R.source;
            var T = F.source;
            J = J === T ? 0 : J > T ? 1 : -1;
            0 !== J ? F = J : (J = R.originalLine - F.originalLine,
            0 !== J ? F = J : (J = R.originalColumn - F.originalColumn,
            0 !== J ? F = J : (R = R.name,
            F = F.name,
            F = R === F ? 0 : R > F ? 1 : -1)))
        }
        return F
    }
}
, function(b, l) {
    function y(m, u, C, v, E, N) {
        var P = Math.floor((u - m) / 2) + m
          , aa = E(C, v[P], !0);
        return 0 === aa ? P : 0 < aa ? 1 < u - P ? y(P, u, C, v, E, N) : N == l.LEAST_UPPER_BOUND ? u < v.length ? u : -1 : P : 1 < P - m ? y(m, P, C, v, E, N) : N == l.LEAST_UPPER_BOUND ? P : 0 > m ? -1 : m
    }
    l.GREATEST_LOWER_BOUND = 1;
    l.LEAST_UPPER_BOUND = 2;
    l.search = function(m, u, C, v) {
        if (0 === u.length)
            return -1;
        m = y(-1, u.length, m, u, C, v || l.GREATEST_LOWER_BOUND);
        if (0 > m)
            return -1;
        for (; 0 <= m - 1 && 0 === C(u[m], u[m - 1], !0); )
            --m;
        return m
    }
}
, function(b, l, y) {
    function m() {
        this._array = [];
        this._set = Object.create(null)
    }
    var u = y(1)
      , C = Object.prototype.hasOwnProperty;
    m.fromArray = function(v, E) {
        for (var N = new m, P = 0, aa = v.length; aa > P; P++)
            N.add(v[P], E);
        return N
    }
    ;
    m.prototype.size = function() {
        return Object.getOwnPropertyNames(this._set).length
    }
    ;
    m.prototype.add = function(v, E) {
        var N = u.toSetString(v)
          , P = C.call(this._set, N)
          , aa = this._array.length;
        P && !E || this._array.push(v);
        P || (this._set[N] = aa)
    }
    ;
    m.prototype.has = function(v) {
        v = u.toSetString(v);
        return C.call(this._set, v)
    }
    ;
    m.prototype.indexOf = function(v) {
        var E = u.toSetString(v);
        if (C.call(this._set, E))
            return this._set[E];
        throw Error('"' + v + '" is not in the set.');
    }
    ;
    m.prototype.at = function(v) {
        if (0 <= v && v < this._array.length)
            return this._array[v];
        throw Error("No element indexed by " + v);
    }
    ;
    m.prototype.toArray = function() {
        return this._array.slice()
    }
    ;
    l.ArraySet = m
}
, function(b, l, y) {
    var m = y(5);
    l.encode = function(u) {
        var C = ""
          , v = 0 > u ? (-u << 1) + 1 : u << 1;
        do
            u = v & 31,
            v >>>= 5,
            0 < v && (u |= 32),
            C += m.encode(u);
        while (0 < v);
        return C
    }
    ;
    l.decode = function(u, C, v) {
        var E, N = u.length, P = 0, aa = 0;
        do {
            if (C >= N)
                throw Error("Expected more digits in base 64 VLQ value.");
            if (E = m.decode(u.charCodeAt(C++)),
            -1 === E)
                throw Error("Invalid base64 digit: " + u.charAt(C - 1));
            var R = !!(E & 32);
            E &= 31;
            P += E << aa;
            aa += 5
        } while (R);
        u = P >> 1;
        v.value = 1 === (1 & P) ? -u : u;
        v.rest = C
    }
}
, function(b, l) {
    var y = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
    l.encode = function(m) {
        if (0 <= m && m < y.length)
            return y[m];
        throw new TypeError("Must be between 0 and 63: " + m);
    }
    ;
    l.decode = function(m) {
        return 65 <= m && 90 >= m ? m - 65 : 97 <= m && 122 >= m ? m - 97 + 26 : 48 <= m && 57 >= m ? m - 48 + 52 : 43 == m ? 62 : 47 == m ? 63 : -1
    }
}
, function(b, l) {
    function y(u, C, v) {
        var E = u[C];
        u[C] = u[v];
        u[v] = E
    }
    function m(u, C, v, E) {
        if (E > v) {
            var N = v - 1;
            y(u, Math.round(v + Math.random() * (E - v)), E);
            for (var P = u[E], aa = v; E > aa; aa++)
                0 >= C(u[aa], P) && (N += 1,
                y(u, N, aa));
            y(u, N + 1, aa);
            N += 1;
            m(u, C, v, N - 1);
            m(u, C, N + 1, E)
        }
    }
    l.quickSort = function(u, C) {
        m(u, C, 0, u.length - 1)
    }
}
]);
!function(b, l) {
    "function" == typeof define && define.amd ? define("stacktrace-gps", ["source-map", "stackframe"], l) : "object" == typeof exports ? module.exports = l(require("source-map/lib/source-map-consumer"), require("stackframe")) : b.StackTraceGPS = l(b.SourceMap || b.sourceMap, b.StackFrame)
}(this, function(b, l) {
    function y(v) {
        return new Promise(function(E, N) {
            var P = new XMLHttpRequest;
            P.open("get", v);
            P.onerror = N;
            P.onreadystatechange = function() {
                4 === P.readyState && (200 <= P.status && 300 > P.status ? E(P.responseText) : N(Error("HTTP status: " + P.status + " retrieving " + v)))
            }
            ;
            P.send()
        }
        )
    }
    function m(v) {
        if ("undefined" != typeof window && window.atob)
            return window.atob(v);
        throw Error("You must supply a polyfill for window.atob in this environment");
    }
    function u(v) {
        if ("object" != typeof v)
            throw new TypeError("Given StackFrame is not an object");
        if ("string" != typeof v.fileName)
            throw new TypeError("Given file name is not a String");
        if ("number" != typeof v.lineNumber || 0 !== v.lineNumber % 1 || 1 > v.lineNumber)
            throw new TypeError("Given line number must be a positive integer");
        if ("number" != typeof v.columnNumber || 0 !== v.columnNumber % 1 || 0 > v.columnNumber)
            throw new TypeError("Given column number must be a non-negative integer");
        return !0
    }
    function C(v) {
        if ((v = /\/\/[#@] ?sourceMappingURL=([^\s'"]+)\s*$/.exec(v)) && v[1])
            return v[1];
        throw Error("sourceMappingURL not found");
    }
    return function N(E) {
        return this instanceof N ? (E = E || {},
        this.sourceCache = E.sourceCache || {},
        this.ajax = E.ajax || y,
        this._atob = E.atob || m,
        this._get = function(P) {
            return new Promise(function(aa, R) {
                var F = "data:" === P.substr(0, 5);
                this.sourceCache[P] ? aa(this.sourceCache[P]) : E.offline && !F ? R(Error("Cannot make network requests in offline mode")) : F ? (F = P.match(/^data:application\/json;([\w=:"-]+;)*base64,/)) ? (R = P.substr(F[0].length),
                R = this._atob(R),
                this.sourceCache[P] = R,
                aa(R)) : R(Error("The encoding of the inline sourcemap is not supported")) : (F = this.ajax(P, {
                    method: "get"
                }),
                this.sourceCache[P] = F,
                F.then(aa, R))
            }
            .bind(this))
        }
        ,
        this.pinpoint = function(P) {
            return new Promise(function(aa, R) {
                this.getMappedLocation(P).then(function(F) {
                    function J() {
                        aa(F)
                    }
                    this.findFunctionName(F).then(aa, J)["catch"](J)
                }
                .bind(this), R)
            }
            .bind(this))
        }
        ,
        this.findFunctionName = function(P) {
            return new Promise(function(aa, R) {
                u(P);
                this._get(P.fileName).then(function(F) {
                    a: {
                        var J = P.lineNumber;
                        var T, X = /function\s+([^(]*?)\s*\(([^)]*)\)/, O = /['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*function\b/, ea = /['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*(?:eval|new Function)\b/;
                        F = F.split("\n");
                        for (var da = "", ka = Math.min(J, 20), wa = 0; ka > wa; ++wa) {
                            var S = F[J - wa - 1]
                              , Y = S.indexOf("//");
                            if (0 <= Y && (S = S.substr(0, Y)),
                            S) {
                                if (da = S + da,
                                T = O.exec(da),
                                T && T[1]) {
                                    J = T[1];
                                    break a
                                }
                                if (T = X.exec(da),
                                T && T[1]) {
                                    J = T[1];
                                    break a
                                }
                                if (T = ea.exec(da),
                                T && T[1]) {
                                    J = T[1];
                                    break a
                                }
                            }
                        }
                        J = void 0
                    }
                    aa(new l(J,P.args,P.fileName,P.lineNumber,P.columnNumber))
                }, R)["catch"](R)
            }
            .bind(this))
        }
        ,
        void (this.getMappedLocation = function(P) {
            return new Promise(function(aa, R) {
                if ("function" != typeof Object.defineProperty || "function" != typeof Object.create)
                    throw Error("Unable to consume source maps in older browsers");
                u(P);
                var F = this.sourceCache
                  , J = P.fileName;
                this._get(J).then(function(T) {
                    T = C(T);
                    var X = "data:" === T.substr(0, 5)
                      , O = J.substring(0, J.lastIndexOf("/") + 1);
                    "/" === T[0] || X || /^https?:\/\/|^\/\//i.test(T) || (T = O + T);
                    this._get(T).then(function(ea) {
                        var da = P.lineNumber
                          , ka = P.columnNumber;
                        if ("string" == typeof ea) {
                            var wa = ea.replace(/^\)\]\}'/, "");
                            if ("undefined" != typeof JSON && JSON.parse)
                                wa = JSON.parse(wa);
                            else
                                throw Error("You must supply a polyfill for JSON.parse in this environment");
                            ea = wa
                        }
                        "undefined" == typeof ea.sourceRoot && (ea.sourceRoot = O);
                        wa = P.args;
                        ea = new b.SourceMapConsumer(ea);
                        da = ea.originalPositionFor({
                            line: da,
                            column: ka
                        });
                        ka = ea.sourceContentFor(da.source);
                        da = (ka && (F[da.source] = ka),
                        new l(da.name,wa,da.source,da.line,da.column));
                        aa(da)
                    }, R)["catch"](R)
                }
                .bind(this), R)["catch"](R)
            }
            .bind(this))
        }
        )) : new N(E)
    }
});
(function(b, l) {
    "function" === typeof define && define.amd ? define("stack-generator", ["stackframe"], l) : "object" === typeof exports ? module.exports = l(require("stackframe")) : b.StackGenerator = l(b.StackFrame)
}
)(this, function(b) {
    return {
        backtrace: function(l) {
            var y = []
              , m = 10;
            "object" === typeof l && "number" === typeof l.maxStackSize && (m = l.maxStackSize);
            for (var u = arguments.callee; u && y.length < m; ) {
                for (var C = Array(u.arguments.length), v = 0; v < C.length; ++v)
                    C[v] = u.arguments[v];
                /function(?:\s+([\w$]+))+\s*\(/.test(u.toString()) ? y.push(new b(RegExp.$1 || void 0,C)) : y.push(new b(void 0,C));
                try {
                    u = u.caller
                } catch (E) {
                    break
                }
            }
            return y
        }
    }
});
(function(b, l) {
    "function" === typeof define && define.amd ? define("error-stack-parser", ["stackframe"], l) : "object" === typeof exports ? module.exports = l(require("stackframe")) : b.ErrorStackParser = l(b.StackFrame)
}
)(this, function(b) {
    function l(v, E, N) {
        if ("function" === typeof Array.prototype.map)
            return v.map(E, N);
        for (var P = Array(v.length), aa = 0; aa < v.length; aa++)
            P[aa] = E.call(N, v[aa]);
        return P
    }
    function y(v, E, N) {
        if ("function" === typeof Array.prototype.filter)
            return v.filter(E, N);
        for (var P = [], aa = 0; aa < v.length; aa++)
            E.call(N, v[aa]) && P.push(v[aa]);
        return P
    }
    var m = /(^|@)\S+:\d+/
      , u = /^\s*at .*(\S+:\d+|\(native\))/m
      , C = /^(eval@)?(\[native code\])?$/;
    return {
        parse: function(v) {
            if ("undefined" !== typeof v.stacktrace || "undefined" !== typeof v["opera#sourceloc"])
                return this.parseOpera(v);
            if (v.stack && v.stack.match(u))
                return this.parseV8OrIE(v);
            if (v.stack)
                return this.parseFFOrSafari(v);
            throw Error("Cannot parse given Error object");
        },
        extractLocation: function(v) {
            if (-1 === v.indexOf(":"))
                return [v];
            v = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(v.replace(/[\(\)]/g, ""));
            return [v[1], v[2] || void 0, v[3] || void 0]
        },
        parseV8OrIE: function(v) {
            v = y(v.stack.split("\n"), function(E) {
                return !!E.match(u)
            }, this);
            return l(v, function(E) {
                -1 < E.indexOf("(eval ") && (E = E.replace(/eval code/g, "eval").replace(/(\(eval at [^\()]*)|(\),.*$)/g, ""));
                var N = E.replace(/^\s+/, "").replace(/\(eval code/g, "(").split(/\s+/).slice(1)
                  , P = this.extractLocation(N.pop());
                N = N.join(" ") || void 0;
                a: {
                    var aa = ["eval", "<anonymous>"];
                    var R = P[0];
                    if ("function" === typeof Array.prototype.indexOf)
                        aa = aa.indexOf(R);
                    else {
                        for (var F = 0; F < aa.length; F++)
                            if (aa[F] === R) {
                                aa = F;
                                break a
                            }
                        aa = -1
                    }
                }
                return new b(N,void 0,-1 < aa ? void 0 : P[0],P[1],P[2],E)
            }, this)
        },
        parseFFOrSafari: function(v) {
            v = y(v.stack.split("\n"), function(E) {
                return !E.match(C)
            }, this);
            return l(v, function(E) {
                -1 < E.indexOf(" > eval") && (E = E.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1"));
                if (-1 === E.indexOf("@") && -1 === E.indexOf(":"))
                    return new b(E);
                var N = E.split("@")
                  , P = this.extractLocation(N.pop());
                N = N.join("@") || void 0;
                return new b(N,void 0,P[0],P[1],P[2],E)
            }, this)
        },
        parseOpera: function(v) {
            return !v.stacktrace || -1 < v.message.indexOf("\n") && v.message.split("\n").length > v.stacktrace.split("\n").length ? this.parseOpera9(v) : v.stack ? this.parseOpera11(v) : this.parseOpera10(v)
        },
        parseOpera9: function(v) {
            var E = /Line (\d+).*script (?:in )?(\S+)/i;
            v = v.message.split("\n");
            for (var N = [], P = 2, aa = v.length; P < aa; P += 2) {
                var R = E.exec(v[P]);
                R && N.push(new b(void 0,void 0,R[2],R[1],void 0,v[P]))
            }
            return N
        },
        parseOpera10: function(v) {
            var E = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
            v = v.stacktrace.split("\n");
            for (var N = [], P = 0, aa = v.length; P < aa; P += 2) {
                var R = E.exec(v[P]);
                R && N.push(new b(R[3] || void 0,void 0,R[2],R[1],void 0,v[P]))
            }
            return N
        },
        parseOpera11: function(v) {
            v = y(v.stack.split("\n"), function(E) {
                return !!E.match(m) && !E.match(/^Error created at/)
            }, this);
            return l(v, function(E) {
                var N = E.split("@")
                  , P = this.extractLocation(N.pop())
                  , aa = N.shift() || "";
                N = aa.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^\)]*\)/g, "") || void 0;
                var R;
                aa.match(/\(([^\)]*)\)/) && (R = aa.replace(/^[^\(]+\(([^\)]*)\)$/, "$1"));
                R = void 0 === R || "[arguments not available]" === R ? void 0 : R.split(",");
                return new b(N,R,P[0],P[1],P[2],E)
            }, this)
        }
    }
});
(function(b, l) {
    "function" === typeof define && define.amd ? define("stacktrace", ["error-stack-parser", "stack-generator", "stacktrace-gps"], l) : "object" === typeof exports ? module.exports = l(require("error-stack-parser"), require("stack-generator"), require("stacktrace-gps")) : b.StackTrace = l(b.ErrorStackParser, b.StackGenerator, b.StackTraceGPS)
}
)(this, function(b, l, y) {
    function m(N, P) {
        var aa = {};
        [N, P].forEach(function(R) {
            for (var F in R)
                R.hasOwnProperty(F) && (aa[F] = R[F]);
            return aa
        });
        return aa
    }
    function u(N) {
        return N.stack || N["opera#sourceloc"]
    }
    function C(N, P) {
        return "function" === typeof P ? N.filter(P) : N
    }
    var v = {
        filter: function(N) {
            return -1 === (N.functionName || "").indexOf("StackTrace$$") && -1 === (N.functionName || "").indexOf("ErrorStackParser$$") && -1 === (N.functionName || "").indexOf("StackTraceGPS$$") && -1 === (N.functionName || "").indexOf("StackGenerator$$")
        },
        sourceCache: {}
    }
      , E = function() {
        try {
            throw Error();
        } catch (N) {
            return N
        }
    };
    return {
        get: function(N) {
            var P = E();
            return u(P) ? this.fromError(P, N) : this.generateArtificially(N)
        },
        getSync: function(N) {
            N = m(v, N);
            var P = E();
            P = u(P) ? b.parse(P) : l.backtrace(N);
            return C(P, N.filter)
        },
        fromError: function(N, P) {
            P = m(v, P);
            var aa = new y(P);
            return new Promise(function(R) {
                var F = C(b.parse(N), P.filter);
                R(Promise.all(F.map(function(J) {
                    return new Promise(function(T) {
                        function X() {
                            T(J)
                        }
                        aa.pinpoint(J).then(T, X)["catch"](X)
                    }
                    )
                })))
            }
            .bind(this))
        },
        generateArtificially: function(N) {
            N = m(v, N);
            var P = l.backtrace(N);
            "function" === typeof N.filter && (P = P.filter(N.filter));
            return Promise.resolve(P)
        },
        instrument: function(N, P, aa, R) {
            if ("function" !== typeof N)
                throw Error("Cannot instrument non-function object");
            if ("function" === typeof N.__stacktraceOriginalFn)
                return N;
            var F = function() {
                try {
                    return this.get().then(P, aa)["catch"](aa),
                    N.apply(R || this, arguments)
                } catch (J) {
                    if (u(J))
                        this.fromError(J).then(P, aa)["catch"](aa);
                    throw J;
                }
            }
            .bind(this);
            F.__stacktraceOriginalFn = N;
            return F
        },
        deinstrument: function(N) {
            if ("function" !== typeof N)
                throw Error("Cannot de-instrument non-function object");
            return "function" === typeof N.__stacktraceOriginalFn ? N.__stacktraceOriginalFn : N
        },
        report: function(N, P, aa) {
            return new Promise(function(R, F) {
                var J = new XMLHttpRequest;
                J.onerror = F;
                J.onreadystatechange = function() {
                    4 === J.readyState && (200 <= J.status && 400 > J.status ? R(J.responseText) : F(Error("POST to " + P + " failed with status: " + J.status)))
                }
                ;
                J.open("post", P);
                J.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                var T = {
                    stack: N
                };
                void 0 !== aa && (T.message = aa);
                J.send("report=" + JSON.stringify(T))
            }
            )
        }
    }
});
function get_error(b, l, y) {
    b = b.map(function(m) {
        return m.toString()
    }).join("\n");
    report = {
        msg: l,
        file: y,
        stack: b
    };
    StackTrace.report(report, "/wauth/error_collector")
}
window.onerror = function(b, l, y, m, u) {
    StackTrace.fromError(u).then(function(C) {
        get_error(C, b, l)
    })
}
;
/*
 jQuery UI - v1.13.2 - 2023-08-31
 http://jqueryui.com
 Includes: widget.js, position.js, data.js, disable-selection.js, focusable.js, form-reset-mixin.js, jquery-patch.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/draggable.js, widgets/droppable.js, widgets/resizable.js, widgets/selectable.js, widgets/sortable.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/selectmenu.js, widgets/slider.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js
 Copyright jQuery Foundation and other contributors; Licensed MIT  jQuery UI Widget 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Position 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license

 http://api.jqueryui.com/position/
 jQuery UI :data 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Disable Selection 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Focusable 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Form Reset Mixin 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Support for jQuery core 1.8.x and newer 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license

 jQuery UI Keycode 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Labels 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Scroll Parent 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Tabbable 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Unique ID 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Mouse 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Draggable 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Droppable 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Resizable 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Selectable 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Sortable 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Accordion 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Menu 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Autocomplete 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Controlgroup 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Checkboxradio 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Button 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Datepicker 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Dialog 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Progressbar 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Selectmenu 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Slider 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Spinner 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Tabs 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Tooltip 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery Color Animations v2.2.0
 https://github.com/jquery/jquery-color

 Copyright OpenJS Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license

 Date: Sun May 10 09:02:36 2020 +0200
 jQuery UI Effects 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Effects Blind 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Effects Bounce 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Effects Clip 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Effects Drop 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Effects Explode 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Effects Fade 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Effects Fold 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Effects Highlight 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Effects Size 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Effects Scale 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Effects Puff 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Effects Pulsate 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Effects Shake 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Effects Slide 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Effects Transfer 1.13.2
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
(function(b) {
    "function" === typeof define && define.amd ? define(["jquery"], b) : b(jQuery)
}
)(function(b) {
    function l(a) {
        for (var c; a.length && a[0] !== document; ) {
            c = a.css("position");
            if ("absolute" === c || "relative" === c || "fixed" === c)
                if (c = parseInt(a.css("zIndex"), 10),
                !isNaN(c) && 0 !== c)
                    return c;
            a = a.parent()
        }
        return 0
    }
    function y() {
        this._curInst = null;
        this._keyEvent = !1;
        this._disabledInputs = [];
        this._inDialog = this._datepickerShowing = !1;
        this._mainDivId = "ui-datepicker-div";
        this._inlineClass = "ui-datepicker-inline";
        this._appendClass = "ui-datepicker-append";
        this._triggerClass = "ui-datepicker-trigger";
        this._dialogClass = "ui-datepicker-dialog";
        this._disableClass = "ui-datepicker-disabled";
        this._unselectableClass = "ui-datepicker-unselectable";
        this._currentClass = "ui-datepicker-current-day";
        this._dayOverClass = "ui-datepicker-days-cell-over";
        this.regional = [];
        this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: "January February March April May June July August September October November December".split(" "),
            monthNamesShort: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
            dayNames: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
            dayNamesShort: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
            dayNamesMin: "Su Mo Tu We Th Fr Sa".split(" "),
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: "",
            selectMonthLabel: "Select month",
            selectYearLabel: "Select year"
        };
        this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            onUpdateDatepicker: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        };
        b.extend(this._defaults, this.regional[""]);
        this.regional.en = b.extend(!0, {}, this.regional[""]);
        this.regional["en-US"] = b.extend(!0, {}, this.regional.en);
        this.dpDiv = m(b("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }
    function m(a) {
        return a.on("mouseout", "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a", function() {
            b(this).removeClass("ui-state-hover");
            -1 !== this.className.indexOf("ui-datepicker-prev") && b(this).removeClass("ui-datepicker-prev-hover");
            -1 !== this.className.indexOf("ui-datepicker-next") && b(this).removeClass("ui-datepicker-next-hover")
        }).on("mouseover", "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a", u)
    }
    function u() {
        b.datepicker._isDisabledDatepicker(da.inline ? da.dpDiv.parent()[0] : da.input[0]) || (b(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),
        b(this).addClass("ui-state-hover"),
        -1 !== this.className.indexOf("ui-datepicker-prev") && b(this).addClass("ui-datepicker-prev-hover"),
        -1 !== this.className.indexOf("ui-datepicker-next") && b(this).addClass("ui-datepicker-next-hover"))
    }
    function C(a, c) {
        b.extend(a, c);
        for (var d in c)
            null == c[d] && (a[d] = c[d]);
        return a
    }
    function v(a) {
        return function() {
            var c = this.element.val();
            a.apply(this, arguments);
            this._refresh();
            c !== this.element.val() && this._trigger("change")
        }
    }
    function E(a) {
        return null == a ? a + "" : "object" === typeof a ? wa[S.call(a)] || "object" : typeof a
    }
    function N(a, c, d) {
        var f = La[c.type] || {};
        if (null == a)
            return d || !c.def ? null : c.def;
        a = f.floor ? ~~a : parseFloat(a);
        return isNaN(a) ? c.def : f.mod ? (a + f.mod) % f.mod : Math.min(f.max, Math.max(0, a))
    }
    function P(a) {
        var c = ma()
          , d = c._rgba = [];
        a = a.toLowerCase();
        Ba(oa, function(f, h) {
            f = (f = h.re.exec(a)) && h.parse(f);
            h = h.space || "rgba";
            if (f)
                return f = c[h](f),
                c[sa[h].cache] = f[sa[h].cache],
                d = c._rgba = f._rgba,
                !1
        });
        return d.length ? ("0,0,0,0" === d.join() && ka.extend(d, fb.transparent),
        c) : fb[a]
    }
    function aa(a, c, d) {
        d = (d + 1) % 1;
        return 1 > 6 * d ? a + (c - a) * d * 6 : 1 > 2 * d ? c : 2 > 3 * d ? a + (c - a) * (2 / 3 - d) * 6 : a
    }
    b.ui = b.ui || {};
    b.ui.version = "1.13.2";
    var R = 0
      , F = Array.prototype.hasOwnProperty
      , J = Array.prototype.slice;
    b.cleanData = function(a) {
        return function(c) {
            var d, f, h;
            for (h = 0; null != (f = c[h]); h++)
                (d = b._data(f, "events")) && d.remove && b(f).triggerHandler("remove");
            a(c)
        }
    }(b.cleanData);
    b.widget = function(a, c, d) {
        var f = {}
          , h = a.split(".")[0];
        a = a.split(".")[1];
        var n = h + "-" + a;
        d || (d = c,
        c = b.Widget);
        Array.isArray(d) && (d = b.extend.apply(null, [{}].concat(d)));
        b.expr.pseudos[n.toLowerCase()] = function(L) {
            return !!b.data(L, n)
        }
        ;
        b[h] = b[h] || {};
        var r = b[h][a];
        var z = b[h][a] = function(L, U) {
            if (!this || !this._createWidget)
                return new z(L,U);
            arguments.length && this._createWidget(L, U)
        }
        ;
        b.extend(z, r, {
            version: d.version,
            _proto: b.extend({}, d),
            _childConstructors: []
        });
        var A = new c;
        A.options = b.widget.extend({}, A.options);
        b.each(d, function(L, U) {
            f[L] = "function" !== typeof U ? U : function() {
                function G() {
                    return c.prototype[L].apply(this, arguments)
                }
                function Q(V) {
                    return c.prototype[L].apply(this, V)
                }
                return function() {
                    var V = this._super
                      , ca = this._superApply;
                    this._super = G;
                    this._superApply = Q;
                    var ia = U.apply(this, arguments);
                    this._super = V;
                    this._superApply = ca;
                    return ia
                }
            }()
        });
        z.prototype = b.widget.extend(A, {
            widgetEventPrefix: r ? A.widgetEventPrefix || a : a
        }, f, {
            constructor: z,
            namespace: h,
            widgetName: a,
            widgetFullName: n
        });
        r ? (b.each(r._childConstructors, function(L, U) {
            L = U.prototype;
            b.widget(L.namespace + "." + L.widgetName, z, U._proto)
        }),
        delete r._childConstructors) : c._childConstructors.push(z);
        b.widget.bridge(a, z);
        return z
    }
    ;
    b.widget.extend = function(a) {
        for (var c = J.call(arguments, 1), d = 0, f = c.length, h, n; d < f; d++)
            for (h in c[d])
                n = c[d][h],
                F.call(c[d], h) && void 0 !== n && (b.isPlainObject(n) ? a[h] = b.isPlainObject(a[h]) ? b.widget.extend({}, a[h], n) : b.widget.extend({}, n) : a[h] = n);
        return a
    }
    ;
    b.widget.bridge = function(a, c) {
        var d = c.prototype.widgetFullName || a;
        b.fn[a] = function(f) {
            var h = "string" === typeof f
              , n = J.call(arguments, 1)
              , r = this;
            h ? this.length || "instance" !== f ? this.each(function() {
                var z = b.data(this, d);
                if ("instance" === f)
                    return r = z,
                    !1;
                if (!z)
                    return b.error("cannot call methods on " + a + " prior to initialization; attempted to call method '" + f + "'");
                if ("function" !== typeof z[f] || "_" === f.charAt(0))
                    return b.error("no such method '" + f + "' for " + a + " widget instance");
                var A = z[f].apply(z, n);
                if (A !== z && void 0 !== A)
                    return r = A && A.jquery ? r.pushStack(A.get()) : A,
                    !1
            }) : r = void 0 : (n.length && (f = b.widget.extend.apply(null, [f].concat(n))),
            this.each(function() {
                var z = b.data(this, d);
                z ? (z.option(f || {}),
                z._init && z._init()) : b.data(this, d, new c(f,this))
            }));
            return r
        }
    }
    ;
    b.Widget = function() {}
    ;
    b.Widget._childConstructors = [];
    b.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            classes: {},
            disabled: !1,
            create: null
        },
        _createWidget: function(a, c) {
            c = b(c || this.defaultElement || this)[0];
            this.element = b(c);
            this.uuid = R++;
            this.eventNamespace = "." + this.widgetName + this.uuid;
            this.bindings = b();
            this.hoverable = b();
            this.focusable = b();
            this.classesElementLookup = {};
            c !== this && (b.data(c, this.widgetFullName, this),
            this._on(!0, this.element, {
                remove: function(d) {
                    d.target === c && this.destroy()
                }
            }),
            this.document = b(c.style ? c.ownerDocument : c.document || c),
            this.window = b(this.document[0].defaultView || this.document[0].parentWindow));
            this.options = b.widget.extend({}, this.options, this._getCreateOptions(), a);
            this._create();
            this.options.disabled && this._setOptionDisabled(this.options.disabled);
            this._trigger("create", null, this._getCreateEventData());
            this._init()
        },
        _getCreateOptions: function() {
            return {}
        },
        _getCreateEventData: b.noop,
        _create: b.noop,
        _init: b.noop,
        destroy: function() {
            var a = this;
            this._destroy();
            b.each(this.classesElementLookup, function(c, d) {
                a._removeClass(d, c)
            });
            this.element.off(this.eventNamespace).removeData(this.widgetFullName);
            this.widget().off(this.eventNamespace).removeAttr("aria-disabled");
            this.bindings.off(this.eventNamespace)
        },
        _destroy: b.noop,
        widget: function() {
            return this.element
        },
        option: function(a, c) {
            var d = a, f;
            if (0 === arguments.length)
                return b.widget.extend({}, this.options);
            if ("string" === typeof a) {
                d = {};
                var h = a.split(".");
                a = h.shift();
                if (h.length) {
                    var n = d[a] = b.widget.extend({}, this.options[a]);
                    for (f = 0; f < h.length - 1; f++)
                        n[h[f]] = n[h[f]] || {},
                        n = n[h[f]];
                    a = h.pop();
                    if (1 === arguments.length)
                        return void 0 === n[a] ? null : n[a];
                    n[a] = c
                } else {
                    if (1 === arguments.length)
                        return void 0 === this.options[a] ? null : this.options[a];
                    d[a] = c
                }
            }
            this._setOptions(d);
            return this
        },
        _setOptions: function(a) {
            for (var c in a)
                this._setOption(c, a[c]);
            return this
        },
        _setOption: function(a, c) {
            "classes" === a && this._setOptionClasses(c);
            this.options[a] = c;
            "disabled" === a && this._setOptionDisabled(c);
            return this
        },
        _setOptionClasses: function(a) {
            var c;
            for (c in a) {
                var d = this.classesElementLookup[c];
                if (a[c] !== this.options.classes[c] && d && d.length) {
                    var f = b(d.get());
                    this._removeClass(d, c);
                    f.addClass(this._classes({
                        element: f,
                        keys: c,
                        classes: a,
                        add: !0
                    }))
                }
            }
        },
        _setOptionDisabled: function(a) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!a);
            a && (this._removeClass(this.hoverable, null, "ui-state-hover"),
            this._removeClass(this.focusable, null, "ui-state-focus"))
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _classes: function(a) {
            function c() {
                var n = [];
                a.element.each(function(r, z) {
                    b.map(h.classesElementLookup, function(A) {
                        return A
                    }).some(function(A) {
                        return A.is(z)
                    }) || n.push(z)
                });
                h._on(b(n), {
                    remove: "_untrackClassesElement"
                })
            }
            function d(n, r) {
                var z;
                for (z = 0; z < n.length; z++) {
                    var A = h.classesElementLookup[n[z]] || b();
                    a.add ? (c(),
                    A = b(b.uniqueSort(A.get().concat(a.element.get())))) : A = b(A.not(a.element).get());
                    h.classesElementLookup[n[z]] = A;
                    f.push(n[z]);
                    r && a.classes[n[z]] && f.push(a.classes[n[z]])
                }
            }
            var f = []
              , h = this;
            a = b.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, a);
            a.keys && d(a.keys.match(/\S+/g) || [], !0);
            a.extra && d(a.extra.match(/\S+/g) || []);
            return f.join(" ")
        },
        _untrackClassesElement: function(a) {
            var c = this;
            b.each(c.classesElementLookup, function(d, f) {
                -1 !== b.inArray(a.target, f) && (c.classesElementLookup[d] = b(f.not(a.target).get()))
            });
            this._off(b(a.target))
        },
        _removeClass: function(a, c, d) {
            return this._toggleClass(a, c, d, !1)
        },
        _addClass: function(a, c, d) {
            return this._toggleClass(a, c, d, !0)
        },
        _toggleClass: function(a, c, d, f) {
            f = "boolean" === typeof f ? f : d;
            var h = "string" === typeof a || null === a;
            a = {
                extra: h ? c : d,
                keys: h ? a : c,
                element: h ? this.element : a,
                add: f
            };
            a.element.toggleClass(this._classes(a), f);
            return this
        },
        _on: function(a, c, d) {
            var f, h = this;
            "boolean" !== typeof a && (d = c,
            c = a,
            a = !1);
            d ? (c = f = b(c),
            this.bindings = this.bindings.add(c)) : (d = c,
            c = this.element,
            f = this.widget());
            b.each(d, function(n, r) {
                function z() {
                    if (a || !0 !== h.options.disabled && !b(this).hasClass("ui-state-disabled"))
                        return ("string" === typeof r ? h[r] : r).apply(h, arguments)
                }
                "string" !== typeof r && (z.guid = r.guid = r.guid || z.guid || b.guid++);
                var A = n.match(/^([\w:-]*)\s*(.*)$/);
                n = A[1] + h.eventNamespace;
                if (A = A[2])
                    f.on(n, A, z);
                else
                    c.on(n, z)
            })
        },
        _off: function(a, c) {
            c = (c || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
            a.off(c);
            this.bindings = b(this.bindings.not(a).get());
            this.focusable = b(this.focusable.not(a).get());
            this.hoverable = b(this.hoverable.not(a).get())
        },
        _delay: function(a, c) {
            var d = this;
            return setTimeout(function() {
                return ("string" === typeof a ? d[a] : a).apply(d, arguments)
            }, c || 0)
        },
        _hoverable: function(a) {
            this.hoverable = this.hoverable.add(a);
            this._on(a, {
                mouseenter: function(c) {
                    this._addClass(b(c.currentTarget), null, "ui-state-hover")
                },
                mouseleave: function(c) {
                    this._removeClass(b(c.currentTarget), null, "ui-state-hover")
                }
            })
        },
        _focusable: function(a) {
            this.focusable = this.focusable.add(a);
            this._on(a, {
                focusin: function(c) {
                    this._addClass(b(c.currentTarget), null, "ui-state-focus")
                },
                focusout: function(c) {
                    this._removeClass(b(c.currentTarget), null, "ui-state-focus")
                }
            })
        },
        _trigger: function(a, c, d) {
            var f, h = this.options[a];
            d = d || {};
            c = b.Event(c);
            c.type = (a === this.widgetEventPrefix ? a : this.widgetEventPrefix + a).toLowerCase();
            c.target = this.element[0];
            if (a = c.originalEvent)
                for (f in a)
                    f in c || (c[f] = a[f]);
            this.element.trigger(c, d);
            return !("function" === typeof h && !1 === h.apply(this.element[0], [c].concat(d)) || c.isDefaultPrevented())
        }
    };
    b.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(a, c) {
        b.Widget.prototype["_" + a] = function(d, f, h) {
            "string" === typeof f && (f = {
                effect: f
            });
            var n = f ? !0 === f || "number" === typeof f ? c : f.effect || c : a;
            f = f || {};
            "number" === typeof f ? f = {
                duration: f
            } : !0 === f && (f = {});
            var r = !b.isEmptyObject(f);
            f.complete = h;
            f.delay && d.delay(f.delay);
            if (r && b.effects && b.effects.effect[n])
                d[a](f);
            else if (n !== a && d[n])
                d[n](f.duration, f.easing, h);
            else
                d.queue(function(z) {
                    b(this)[a]();
                    h && h.call(d[0]);
                    z()
                })
        }
    });
    (function() {
        function a(G, Q, V) {
            return [parseFloat(G[0]) * (L.test(G[0]) ? Q / 100 : 1), parseFloat(G[1]) * (L.test(G[1]) ? V / 100 : 1)]
        }
        function c(G) {
            var Q = G[0];
            return 9 === Q.nodeType ? {
                width: G.width(),
                height: G.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            } : null != Q && Q === Q.window ? {
                width: G.width(),
                height: G.height(),
                offset: {
                    top: G.scrollTop(),
                    left: G.scrollLeft()
                }
            } : Q.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: Q.pageY,
                    left: Q.pageX
                }
            } : {
                width: G.outerWidth(),
                height: G.outerHeight(),
                offset: G.offset()
            }
        }
        var d, f = Math.max, h = Math.abs, n = /left|center|right/, r = /top|center|bottom/, z = /[\+\-]\d+(\.[\d]+)?%?/, A = /^\w+/, L = /%$/, U = b.fn.position;
        b.position = {
            scrollbarWidth: function() {
                if (void 0 !== d)
                    return d;
                var G = b("<div style='display:block;position:absolute;width:200px;height:200px;overflow:hidden;'><div style='height:300px;width:auto;'></div></div>");
                var Q = G.children()[0];
                b("body").append(G);
                var V = Q.offsetWidth;
                G.css("overflow", "scroll");
                Q = Q.offsetWidth;
                V === Q && (Q = G[0].clientWidth);
                G.remove();
                return d = V - Q
            },
            getScrollInfo: function(G) {
                var Q = G.isWindow || G.isDocument ? "" : G.element.css("overflow-x")
                  , V = G.isWindow || G.isDocument ? "" : G.element.css("overflow-y");
                Q = "scroll" === Q || "auto" === Q && G.width < G.element[0].scrollWidth;
                return {
                    width: "scroll" === V || "auto" === V && G.height < G.element[0].scrollHeight ? b.position.scrollbarWidth() : 0,
                    height: Q ? b.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(G) {
                var Q = b(G || window);
                var V = Q[0];
                V = null != V && V === V.window;
                var ca = !!Q[0] && 9 === Q[0].nodeType;
                return {
                    element: Q,
                    isWindow: V,
                    isDocument: ca,
                    offset: V || ca ? {
                        left: 0,
                        top: 0
                    } : b(G).offset(),
                    scrollLeft: Q.scrollLeft(),
                    scrollTop: Q.scrollTop(),
                    width: Q.outerWidth(),
                    height: Q.outerHeight()
                }
            }
        };
        b.fn.position = function(G) {
            if (!G || !G.of)
                return U.apply(this, arguments);
            G = b.extend({}, G);
            var Q = "string" === typeof G.of ? b(document).find(G.of) : b(G.of)
              , V = b.position.getWithinInfo(G.within)
              , ca = b.position.getScrollInfo(V)
              , ia = (G.collision || "flip").split(" ")
              , na = {};
            var ja = c(Q);
            Q[0].preventDefault && (G.at = "left top");
            var ta = ja.width;
            var qa = ja.height;
            var Da = ja.offset;
            var Ra = b.extend({}, Da);
            b.each(["my", "at"], function() {
                var Oa = (G[this] || "").split(" ");
                1 === Oa.length && (Oa = n.test(Oa[0]) ? Oa.concat(["center"]) : r.test(Oa[0]) ? ["center"].concat(Oa) : ["center", "center"]);
                Oa[0] = n.test(Oa[0]) ? Oa[0] : "center";
                Oa[1] = r.test(Oa[1]) ? Oa[1] : "center";
                var Ta = z.exec(Oa[0]);
                var pb = z.exec(Oa[1]);
                na[this] = [Ta ? Ta[0] : 0, pb ? pb[0] : 0];
                G[this] = [A.exec(Oa[0])[0], A.exec(Oa[1])[0]]
            });
            1 === ia.length && (ia[1] = ia[0]);
            "right" === G.at[0] ? Ra.left += ta : "center" === G.at[0] && (Ra.left += ta / 2);
            "bottom" === G.at[1] ? Ra.top += qa : "center" === G.at[1] && (Ra.top += qa / 2);
            var Fa = a(na.at, ta, qa);
            Ra.left += Fa[0];
            Ra.top += Fa[1];
            return this.each(function() {
                var Oa, Ta = b(this), pb = Ta.outerWidth(), tb = Ta.outerHeight(), zb = parseInt(b.css(this, "marginLeft"), 10) || 0, yb = parseInt(b.css(this, "marginTop"), 10) || 0, Kb = pb + zb + (parseInt(b.css(this, "marginRight"), 10) || 0) + ca.width, Ya = tb + yb + (parseInt(b.css(this, "marginBottom"), 10) || 0) + ca.height, Pa = b.extend({}, Ra), kb = a(na.my, Ta.outerWidth(), Ta.outerHeight());
                "right" === G.my[0] ? Pa.left -= pb : "center" === G.my[0] && (Pa.left -= pb / 2);
                "bottom" === G.my[1] ? Pa.top -= tb : "center" === G.my[1] && (Pa.top -= tb / 2);
                Pa.left += kb[0];
                Pa.top += kb[1];
                var ua = {
                    marginLeft: zb,
                    marginTop: yb
                };
                b.each(["left", "top"], function(ya, jb) {
                    if (b.ui.position[ia[ya]])
                        b.ui.position[ia[ya]][jb](Pa, {
                            targetWidth: ta,
                            targetHeight: qa,
                            elemWidth: pb,
                            elemHeight: tb,
                            collisionPosition: ua,
                            collisionWidth: Kb,
                            collisionHeight: Ya,
                            offset: [Fa[0] + kb[0], Fa[1] + kb[1]],
                            my: G.my,
                            at: G.at,
                            within: V,
                            elem: Ta
                        })
                });
                G.using && (Oa = function(ya) {
                    var jb = Da.left - Pa.left
                      , Db = jb + ta - pb
                      , q = Da.top - Pa.top
                      , Tb = q + qa - tb
                      , ub = {
                        target: {
                            element: Q,
                            left: Da.left,
                            top: Da.top,
                            width: ta,
                            height: qa
                        },
                        element: {
                            element: Ta,
                            left: Pa.left,
                            top: Pa.top,
                            width: pb,
                            height: tb
                        },
                        horizontal: 0 > Db ? "left" : 0 < jb ? "right" : "center",
                        vertical: 0 > Tb ? "top" : 0 < q ? "bottom" : "middle"
                    };
                    ta < pb && h(jb + Db) < ta && (ub.horizontal = "center");
                    qa < tb && h(q + Tb) < qa && (ub.vertical = "middle");
                    f(h(jb), h(Db)) > f(h(q), h(Tb)) ? ub.important = "horizontal" : ub.important = "vertical";
                    G.using.call(this, ya, ub)
                }
                );
                Ta.offset(b.extend(Pa, {
                    using: Oa
                }))
            })
        }
        ;
        b.ui.position = {
            fit: {
                left: function(G, Q) {
                    var V = Q.within
                      , ca = V.isWindow ? V.scrollLeft : V.offset.left
                      , ia = V.width
                      , na = G.left - Q.collisionPosition.marginLeft;
                    V = ca - na;
                    var ja = na + Q.collisionWidth - ia - ca;
                    Q.collisionWidth > ia ? 0 < V && 0 >= ja ? (Q = G.left + V + Q.collisionWidth - ia - ca,
                    G.left += V - Q) : G.left = 0 < ja && 0 >= V ? ca : V > ja ? ca + ia - Q.collisionWidth : ca : G.left = 0 < V ? G.left + V : 0 < ja ? G.left - ja : f(G.left - na, G.left)
                },
                top: function(G, Q) {
                    var V = Q.within
                      , ca = V.isWindow ? V.scrollTop : V.offset.top
                      , ia = Q.within.height
                      , na = G.top - Q.collisionPosition.marginTop;
                    V = ca - na;
                    var ja = na + Q.collisionHeight - ia - ca;
                    Q.collisionHeight > ia ? 0 < V && 0 >= ja ? (Q = G.top + V + Q.collisionHeight - ia - ca,
                    G.top += V - Q) : G.top = 0 < ja && 0 >= V ? ca : V > ja ? ca + ia - Q.collisionHeight : ca : G.top = 0 < V ? G.top + V : 0 < ja ? G.top - ja : f(G.top - na, G.top)
                }
            },
            flip: {
                left: function(G, Q) {
                    var V = Q.within
                      , ca = V.offset.left + V.scrollLeft
                      , ia = V.width
                      , na = V.isWindow ? V.scrollLeft : V.offset.left
                      , ja = G.left - Q.collisionPosition.marginLeft;
                    V = ja - na;
                    var ta = ja + Q.collisionWidth - ia - na;
                    ja = "left" === Q.my[0] ? -Q.elemWidth : "right" === Q.my[0] ? Q.elemWidth : 0;
                    var qa = "left" === Q.at[0] ? Q.targetWidth : "right" === Q.at[0] ? -Q.targetWidth : 0
                      , Da = -2 * Q.offset[0];
                    if (0 > V) {
                        if (Q = G.left + ja + qa + Da + Q.collisionWidth - ia - ca,
                        0 > Q || Q < h(V))
                            G.left += ja + qa + Da
                    } else
                        0 < ta && (Q = G.left - Q.collisionPosition.marginLeft + ja + qa + Da - na,
                        0 < Q || h(Q) < ta) && (G.left += ja + qa + Da)
                },
                top: function(G, Q) {
                    var V = Q.within
                      , ca = V.offset.top + V.scrollTop
                      , ia = V.height
                      , na = V.isWindow ? V.scrollTop : V.offset.top
                      , ja = G.top - Q.collisionPosition.marginTop;
                    V = ja - na;
                    var ta = ja + Q.collisionHeight - ia - na;
                    ja = "top" === Q.my[1] ? -Q.elemHeight : "bottom" === Q.my[1] ? Q.elemHeight : 0;
                    var qa = "top" === Q.at[1] ? Q.targetHeight : "bottom" === Q.at[1] ? -Q.targetHeight : 0
                      , Da = -2 * Q.offset[1];
                    if (0 > V) {
                        if (Q = G.top + ja + qa + Da + Q.collisionHeight - ia - ca,
                        0 > Q || Q < h(V))
                            G.top += ja + qa + Da
                    } else
                        0 < ta && (Q = G.top - Q.collisionPosition.marginTop + ja + qa + Da - na,
                        0 < Q || h(Q) < ta) && (G.top += ja + qa + Da)
                }
            },
            flipfit: {
                left: function() {
                    b.ui.position.flip.left.apply(this, arguments);
                    b.ui.position.fit.left.apply(this, arguments)
                },
                top: function() {
                    b.ui.position.flip.top.apply(this, arguments);
                    b.ui.position.fit.top.apply(this, arguments)
                }
            }
        }
    }
    )();
    b.extend(b.expr.pseudos, {
        data: b.expr.createPseudo ? b.expr.createPseudo(function(a) {
            return function(c) {
                return !!b.data(c, a)
            }
        }) : function(a, c, d) {
            return !!b.data(a, d[3])
        }
    });
    b.fn.extend({
        disableSelection: function() {
            var a = "onselectstart"in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.on(a + ".ui-disableSelection", function(c) {
                    c.preventDefault()
                })
            }
        }(),
        enableSelection: function() {
            return this.off(".ui-disableSelection")
        }
    });
    b.ui.focusable = function(a, c) {
        var d = a.nodeName.toLowerCase();
        if ("area" === d) {
            c = a.parentNode;
            d = c.name;
            if (!a.href || !d || "map" !== c.nodeName.toLowerCase())
                return !1;
            a = b("img[usemap='#" + d + "']");
            return 0 < a.length && a.is(":visible")
        }
        /^(input|select|textarea|button|object)$/.test(d) ? (c = !a.disabled) && (d = b(a).closest("fieldset")[0]) && (c = !d.disabled) : c = "a" === d ? a.href || c : c;
        if (c = c && b(a).is(":visible")) {
            a = b(a);
            for (c = a.css("visibility"); "inherit" === c; )
                a = a.parent(),
                c = a.css("visibility");
            c = "visible" === c
        }
        return c
    }
    ;
    b.extend(b.expr.pseudos, {
        focusable: function(a) {
            return b.ui.focusable(a, null != b.attr(a, "tabindex"))
        }
    });
    b.fn._form = function() {
        return "string" === typeof this[0].form ? this.closest("form") : b(this[0].form)
    }
    ;
    b.ui.formResetMixin = {
        _formResetHandler: function() {
            var a = b(this);
            setTimeout(function() {
                var c = a.data("ui-form-reset-instances");
                b.each(c, function() {
                    this.refresh()
                })
            })
        },
        _bindFormResetHandler: function() {
            this.form = this.element._form();
            if (this.form.length) {
                var a = this.form.data("ui-form-reset-instances") || [];
                if (!a.length)
                    this.form.on("reset.ui-form-reset", this._formResetHandler);
                a.push(this);
                this.form.data("ui-form-reset-instances", a)
            }
        },
        _unbindFormResetHandler: function() {
            if (this.form.length) {
                var a = this.form.data("ui-form-reset-instances");
                a.splice(b.inArray(this, a), 1);
                a.length ? this.form.data("ui-form-reset-instances", a) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
            }
        }
    };
    b.expr.pseudos || (b.expr.pseudos = b.expr[":"]);
    b.uniqueSort || (b.uniqueSort = b.unique);
    if (!b.escapeSelector) {
        var T = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g
          , X = function(a, c) {
            return c ? "\x00" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
        };
        b.escapeSelector = function(a) {
            return (a + "").replace(T, X)
        }
    }
    b.fn.even && b.fn.odd || b.fn.extend({
        even: function() {
            return this.filter(function(a) {
                return 0 === a % 2
            })
        },
        odd: function() {
            return this.filter(function(a) {
                return 1 === a % 2
            })
        }
    });
    b.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    };
    b.fn.labels = function() {
        var a;
        if (!this.length)
            return this.pushStack([]);
        if (this[0].labels && this[0].labels.length)
            return this.pushStack(this[0].labels);
        var c = this.eq(0).parents("label");
        if (a = this.attr("id")) {
            var d = this.eq(0).parents().last();
            d = d.add(d.length ? d.siblings() : this.siblings());
            a = "label[for='" + b.escapeSelector(a) + "']";
            c = c.add(d.find(a).addBack(a))
        }
        return this.pushStack(c)
    }
    ;
    b.fn.scrollParent = function(a) {
        var c = this.css("position")
          , d = "absolute" === c
          , f = a ? /(auto|scroll|hidden)/ : /(auto|scroll)/;
        a = this.parents().filter(function() {
            var h = b(this);
            return d && "static" === h.css("position") ? !1 : f.test(h.css("overflow") + h.css("overflow-y") + h.css("overflow-x"))
        }).eq(0);
        return "fixed" !== c && a.length ? a : b(this[0].ownerDocument || document)
    }
    ;
    b.extend(b.expr.pseudos, {
        tabbable: function(a) {
            var c = b.attr(a, "tabindex")
              , d = null != c;
            return (!d || 0 <= c) && b.ui.focusable(a, d)
        }
    });
    b.fn.extend({
        uniqueId: function() {
            var a = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++a)
                })
            }
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && b(this).removeAttr("id")
            })
        }
    });
    b.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    var O = !1;
    b(document).on("mouseup", function() {
        O = !1
    });
    b.widget("ui.mouse", {
        version: "1.13.2",
        options: {
            cancel: "input, textarea, button, select, option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var a = this;
            this.element.on("mousedown." + this.widgetName, function(c) {
                return a._mouseDown(c)
            }).on("click." + this.widgetName, function(c) {
                if (!0 === b.data(c.target, a.widgetName + ".preventClickEvent"))
                    return b.removeData(c.target, a.widgetName + ".preventClickEvent"),
                    c.stopImmediatePropagation(),
                    !1
            });
            this.started = !1
        },
        _mouseDestroy: function() {
            this.element.off("." + this.widgetName);
            this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(a) {
            if (!O) {
                this._mouseMoved = !1;
                this._mouseStarted && this._mouseUp(a);
                this._mouseDownEvent = a;
                var c = this
                  , d = 1 === a.which
                  , f = "string" === typeof this.options.cancel && a.target.nodeName ? b(a.target).closest(this.options.cancel).length : !1;
                if (!d || f || !this._mouseCapture(a))
                    return !0;
                this.mouseDelayMet = !this.options.delay;
                this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    c.mouseDelayMet = !0
                }, this.options.delay));
                if (this._mouseDistanceMet(a) && this._mouseDelayMet(a) && (this._mouseStarted = !1 !== this._mouseStart(a),
                !this._mouseStarted))
                    return a.preventDefault(),
                    !0;
                !0 === b.data(a.target, this.widgetName + ".preventClickEvent") && b.removeData(a.target, this.widgetName + ".preventClickEvent");
                this._mouseMoveDelegate = function(h) {
                    return c._mouseMove(h)
                }
                ;
                this._mouseUpDelegate = function(h) {
                    return c._mouseUp(h)
                }
                ;
                this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate);
                a.preventDefault();
                return O = !0
            }
        },
        _mouseMove: function(a) {
            if (this._mouseMoved) {
                if (b.ui.ie && (!document.documentMode || 9 > document.documentMode) && !a.button)
                    return this._mouseUp(a);
                if (!a.which)
                    if (a.originalEvent.altKey || a.originalEvent.ctrlKey || a.originalEvent.metaKey || a.originalEvent.shiftKey)
                        this.ignoreMissingWhich = !0;
                    else if (!this.ignoreMissingWhich)
                        return this._mouseUp(a)
            }
            if (a.which || a.button)
                this._mouseMoved = !0;
            if (this._mouseStarted)
                return this._mouseDrag(a),
                a.preventDefault();
            this._mouseDistanceMet(a) && this._mouseDelayMet(a) && ((this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, a)) ? this._mouseDrag(a) : this._mouseUp(a));
            return !this._mouseStarted
        },
        _mouseUp: function(a) {
            this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);
            this._mouseStarted && (this._mouseStarted = !1,
            a.target === this._mouseDownEvent.target && b.data(a.target, this.widgetName + ".preventClickEvent", !0),
            this._mouseStop(a));
            this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer),
            delete this._mouseDelayTimer);
            O = this.ignoreMissingWhich = !1;
            a.preventDefault()
        },
        _mouseDistanceMet: function(a) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    });
    b.ui.plugin = {
        add: function(a, c, d) {
            var f;
            a = b.ui[a].prototype;
            for (f in d)
                a.plugins[f] = a.plugins[f] || [],
                a.plugins[f].push([c, d[f]])
        },
        call: function(a, c, d, f) {
            if ((c = a.plugins[c]) && (f || a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType))
                for (f = 0; f < c.length; f++)
                    a.options[c[f][0]] && c[f][1].apply(a.element, d)
        }
    };
    b.ui.safeActiveElement = function(a) {
        try {
            var c = a.activeElement
        } catch (d) {
            c = a.body
        }
        c || (c = a.body);
        c.nodeName || (c = a.body);
        return c
    }
    ;
    b.ui.safeBlur = function(a) {
        a && "body" !== a.nodeName.toLowerCase() && b(a).trigger("blur")
    }
    ;
    b.widget("ui.draggable", b.ui.mouse, {
        version: "1.13.2",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" === this.options.helper && this._setPositionRelative();
            this.options.addClasses && this._addClass("ui-draggable");
            this._setHandleClassName();
            this._mouseInit()
        },
        _setOption: function(a, c) {
            this._super(a, c);
            "handle" === a && (this._removeHandleClassName(),
            this._setHandleClassName())
        },
        _destroy: function() {
            (this.helper || this.element).is(".ui-draggable-dragging") ? this.destroyOnClear = !0 : (this._removeHandleClassName(),
            this._mouseDestroy())
        },
        _mouseCapture: function(a) {
            var c = this.options;
            if (this.helper || c.disabled || 0 < b(a.target).closest(".ui-resizable-handle").length)
                return !1;
            this.handle = this._getHandle(a);
            if (!this.handle)
                return !1;
            this._blurActiveElement(a);
            this._blockFrames(!0 === c.iframeFix ? "iframe" : c.iframeFix);
            return !0
        },
        _blockFrames: function(a) {
            this.iframeBlocks = this.document.find(a).map(function() {
                var c = b(this);
                return b("<div>").css("position", "absolute").appendTo(c.parent()).outerWidth(c.outerWidth()).outerHeight(c.outerHeight()).offset(c.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(),
            delete this.iframeBlocks)
        },
        _blurActiveElement: function(a) {
            var c = b.ui.safeActiveElement(this.document[0]);
            b(a.target).closest(c).length || b.ui.safeBlur(c)
        },
        _mouseStart: function(a) {
            var c = this.options;
            this.helper = this._createHelper(a);
            this._addClass(this.helper, "ui-draggable-dragging");
            this._cacheHelperProportions();
            b.ui.ddmanager && (b.ui.ddmanager.current = this);
            this._cacheMargins();
            this.cssPosition = this.helper.css("position");
            this.scrollParent = this.helper.scrollParent(!0);
            this.offsetParent = this.helper.offsetParent();
            this.hasFixedAncestor = 0 < this.helper.parents().filter(function() {
                return "fixed" === b(this).css("position")
            }).length;
            this.positionAbs = this.element.offset();
            this._refreshOffsets(a);
            this.originalPosition = this.position = this._generatePosition(a, !1);
            this.originalPageX = a.pageX;
            this.originalPageY = a.pageY;
            c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt);
            this._setContainment();
            if (!1 === this._trigger("start", a))
                return this._clear(),
                !1;
            this._cacheHelperProportions();
            b.ui.ddmanager && !c.dropBehaviour && b.ui.ddmanager.prepareOffsets(this, a);
            this._mouseDrag(a, !0);
            b.ui.ddmanager && b.ui.ddmanager.dragStart(this, a);
            return !0
        },
        _refreshOffsets: function(a) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: !1,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            };
            this.offset.click = {
                left: a.pageX - this.offset.left,
                top: a.pageY - this.offset.top
            }
        },
        _mouseDrag: function(a, c) {
            this.hasFixedAncestor && (this.offset.parent = this._getParentOffset());
            this.position = this._generatePosition(a, !0);
            this.positionAbs = this._convertPositionTo("absolute");
            if (!c) {
                c = this._uiHash();
                if (!1 === this._trigger("drag", a, c))
                    return this._mouseUp(new b.Event("mouseup",a)),
                    !1;
                this.position = c.position
            }
            this.helper[0].style.left = this.position.left + "px";
            this.helper[0].style.top = this.position.top + "px";
            b.ui.ddmanager && b.ui.ddmanager.drag(this, a);
            return !1
        },
        _mouseStop: function(a) {
            var c = this
              , d = !1;
            b.ui.ddmanager && !this.options.dropBehaviour && (d = b.ui.ddmanager.drop(this, a));
            this.dropped && (d = this.dropped,
            this.dropped = !1);
            "invalid" === this.options.revert && !d || "valid" === this.options.revert && d || !0 === this.options.revert || "function" === typeof this.options.revert && this.options.revert.call(this.element, d) ? b(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                !1 !== c._trigger("stop", a) && c._clear()
            }) : !1 !== this._trigger("stop", a) && this._clear();
            return !1
        },
        _mouseUp: function(a) {
            this._unblockFrames();
            b.ui.ddmanager && b.ui.ddmanager.dragStop(this, a);
            this.handleElement.is(a.target) && this.element.trigger("focus");
            return b.ui.mouse.prototype._mouseUp.call(this, a)
        },
        cancel: function() {
            this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new b.Event("mouseup",{
                target: this.element[0]
            })) : this._clear();
            return this
        },
        _getHandle: function(a) {
            return this.options.handle ? !!b(a.target).closest(this.element.find(this.options.handle)).length : !0
        },
        _setHandleClassName: function() {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element;
            this._addClass(this.handleElement, "ui-draggable-handle")
        },
        _removeHandleClassName: function() {
            this._removeClass(this.handleElement, "ui-draggable-handle")
        },
        _createHelper: function(a) {
            var c = this.options
              , d = "function" === typeof c.helper;
            a = d ? b(c.helper.apply(this.element[0], [a])) : "clone" === c.helper ? this.element.clone().removeAttr("id") : this.element;
            a.parents("body").length || a.appendTo("parent" === c.appendTo ? this.element[0].parentNode : c.appendTo);
            d && a[0] === this.element[0] && this._setPositionRelative();
            a[0] === this.element[0] || /(fixed|absolute)/.test(a.css("position")) || a.css("position", "absolute");
            return a
        },
        _setPositionRelative: function() {
            /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
        },
        _adjustOffsetFromHelper: function(a) {
            "string" === typeof a && (a = a.split(" "));
            Array.isArray(a) && (a = {
                left: +a[0],
                top: +a[1] || 0
            });
            "left"in a && (this.offset.click.left = a.left + this.margins.left);
            "right"in a && (this.offset.click.left = this.helperProportions.width - a.right + this.margins.left);
            "top"in a && (this.offset.click.top = a.top + this.margins.top);
            "bottom"in a && (this.offset.click.top = this.helperProportions.height - a.bottom + this.margins.top)
        },
        _isRootNode: function(a) {
            return /(html|body)/i.test(a.tagName) || a === this.document[0]
        },
        _getParentOffset: function() {
            var a = this.offsetParent.offset()
              , c = this.document[0];
            "absolute" === this.cssPosition && this.scrollParent[0] !== c && b.contains(this.scrollParent[0], this.offsetParent[0]) && (a.left += this.scrollParent.scrollLeft(),
            a.top += this.scrollParent.scrollTop());
            this._isRootNode(this.offsetParent[0]) && (a = {
                top: 0,
                left: 0
            });
            return {
                top: a.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: a.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" !== this.cssPosition)
                return {
                    top: 0,
                    left: 0
                };
            var a = this.element.position()
              , c = this._isRootNode(this.scrollParent[0]);
            return {
                top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + (c ? 0 : this.scrollParent.scrollTop()),
                left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + (c ? 0 : this.scrollParent.scrollLeft())
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var a;
            var c = this.options;
            var d = this.document[0];
            this.relativeContainer = null;
            if (c.containment)
                if ("window" === c.containment)
                    this.containment = [b(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, b(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, b(window).scrollLeft() + b(window).width() - this.helperProportions.width - this.margins.left, b(window).scrollTop() + (b(window).height() || d.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
                else if ("document" === c.containment)
                    this.containment = [0, 0, b(d).width() - this.helperProportions.width - this.margins.left, (b(d).height() || d.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
                else if (c.containment.constructor === Array)
                    this.containment = c.containment;
                else {
                    if ("parent" === c.containment && (c.containment = this.helper[0].parentNode),
                    d = b(c.containment),
                    a = d[0])
                        c = /(scroll|auto)/.test(d.css("overflow")),
                        this.containment = [(parseInt(d.css("borderLeftWidth"), 10) || 0) + (parseInt(d.css("paddingLeft"), 10) || 0), (parseInt(d.css("borderTopWidth"), 10) || 0) + (parseInt(d.css("paddingTop"), 10) || 0), (c ? Math.max(a.scrollWidth, a.offsetWidth) : a.offsetWidth) - (parseInt(d.css("borderRightWidth"), 10) || 0) - (parseInt(d.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (c ? Math.max(a.scrollHeight, a.offsetHeight) : a.offsetHeight) - (parseInt(d.css("borderBottomWidth"), 10) || 0) - (parseInt(d.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom],
                        this.relativeContainer = d
                }
            else
                this.containment = null
        },
        _convertPositionTo: function(a, c) {
            c || (c = this.position);
            a = "absolute" === a ? 1 : -1;
            var d = this._isRootNode(this.scrollParent[0]);
            return {
                top: c.top + this.offset.relative.top * a + this.offset.parent.top * a - ("fixed" === this.cssPosition ? -this.offset.scroll.top : d ? 0 : this.offset.scroll.top) * a,
                left: c.left + this.offset.relative.left * a + this.offset.parent.left * a - ("fixed" === this.cssPosition ? -this.offset.scroll.left : d ? 0 : this.offset.scroll.left) * a
            }
        },
        _generatePosition: function(a, c) {
            var d = this.options
              , f = this._isRootNode(this.scrollParent[0]);
            var h = a.pageX;
            var n = a.pageY;
            f && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            });
            if (c) {
                if (this.containment) {
                    if (this.relativeContainer) {
                        var r = this.relativeContainer.offset();
                        r = [this.containment[0] + r.left, this.containment[1] + r.top, this.containment[2] + r.left, this.containment[3] + r.top]
                    } else
                        r = this.containment;
                    a.pageX - this.offset.click.left < r[0] && (h = r[0] + this.offset.click.left);
                    a.pageY - this.offset.click.top < r[1] && (n = r[1] + this.offset.click.top);
                    a.pageX - this.offset.click.left > r[2] && (h = r[2] + this.offset.click.left);
                    a.pageY - this.offset.click.top > r[3] && (n = r[3] + this.offset.click.top)
                }
                d.grid && (n = d.grid[1] ? this.originalPageY + Math.round((n - this.originalPageY) / d.grid[1]) * d.grid[1] : this.originalPageY,
                n = r ? n - this.offset.click.top >= r[1] || n - this.offset.click.top > r[3] ? n : n - this.offset.click.top >= r[1] ? n - d.grid[1] : n + d.grid[1] : n,
                h = d.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / d.grid[0]) * d.grid[0] : this.originalPageX,
                h = r ? h - this.offset.click.left >= r[0] || h - this.offset.click.left > r[2] ? h : h - this.offset.click.left >= r[0] ? h - d.grid[0] : h + d.grid[0] : h);
                "y" === d.axis && (h = this.originalPageX);
                "x" === d.axis && (n = this.originalPageY)
            }
            return {
                top: n - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : f ? 0 : this.offset.scroll.top),
                left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : f ? 0 : this.offset.scroll.left)
            }
        },
        _clear: function() {
            this._removeClass(this.helper, "ui-draggable-dragging");
            this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove();
            this.helper = null;
            this.cancelHelperRemoval = !1;
            this.destroyOnClear && this.destroy()
        },
        _trigger: function(a, c, d) {
            d = d || this._uiHash();
            b.ui.plugin.call(this, a, [c, d, this], !0);
            /^(drag|start|stop)/.test(a) && (this.positionAbs = this._convertPositionTo("absolute"),
            d.offset = this.positionAbs);
            return b.Widget.prototype._trigger.call(this, a, c, d)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    });
    b.ui.plugin.add("draggable", "connectToSortable", {
        start: function(a, c, d) {
            var f = b.extend({}, c, {
                item: d.element
            });
            d.sortables = [];
            b(d.options.connectToSortable).each(function() {
                var h = b(this).sortable("instance");
                h && !h.options.disabled && (d.sortables.push(h),
                h.refreshPositions(),
                h._trigger("activate", a, f))
            })
        },
        stop: function(a, c, d) {
            var f = b.extend({}, c, {
                item: d.element
            });
            d.cancelHelperRemoval = !1;
            b.each(d.sortables, function() {
                this.isOver ? (this.isOver = 0,
                d.cancelHelperRemoval = !0,
                this.cancelHelperRemoval = !1,
                this._storedCSS = {
                    position: this.placeholder.css("position"),
                    top: this.placeholder.css("top"),
                    left: this.placeholder.css("left")
                },
                this._mouseStop(a),
                this.options.helper = this.options._helper) : (this.cancelHelperRemoval = !0,
                this._trigger("deactivate", a, f))
            })
        },
        drag: function(a, c, d) {
            b.each(d.sortables, function() {
                var f = !1
                  , h = this;
                h.positionAbs = d.positionAbs;
                h.helperProportions = d.helperProportions;
                h.offset.click = d.offset.click;
                h._intersectsWith(h.containerCache) && (f = !0,
                b.each(d.sortables, function() {
                    this.positionAbs = d.positionAbs;
                    this.helperProportions = d.helperProportions;
                    this.offset.click = d.offset.click;
                    this !== h && this._intersectsWith(this.containerCache) && b.contains(h.element[0], this.element[0]) && (f = !1);
                    return f
                }));
                f ? (h.isOver || (h.isOver = 1,
                d._parent = c.helper.parent(),
                h.currentItem = c.helper.appendTo(h.element).data("ui-sortable-item", !0),
                h.options._helper = h.options.helper,
                h.options.helper = function() {
                    return c.helper[0]
                }
                ,
                a.target = h.currentItem[0],
                h._mouseCapture(a, !0),
                h._mouseStart(a, !0, !0),
                h.offset.click.top = d.offset.click.top,
                h.offset.click.left = d.offset.click.left,
                h.offset.parent.left -= d.offset.parent.left - h.offset.parent.left,
                h.offset.parent.top -= d.offset.parent.top - h.offset.parent.top,
                d._trigger("toSortable", a),
                d.dropped = h.element,
                b.each(d.sortables, function() {
                    this.refreshPositions()
                }),
                d.currentItem = d.element,
                h.fromOutside = d),
                h.currentItem && (h._mouseDrag(a),
                c.position = h.position)) : h.isOver && (h.isOver = 0,
                h.cancelHelperRemoval = !0,
                h.options._revert = h.options.revert,
                h.options.revert = !1,
                h._trigger("out", a, h._uiHash(h)),
                h._mouseStop(a, !0),
                h.options.revert = h.options._revert,
                h.options.helper = h.options._helper,
                h.placeholder && h.placeholder.remove(),
                c.helper.appendTo(d._parent),
                d._refreshOffsets(a),
                c.position = d._generatePosition(a, !0),
                d._trigger("fromSortable", a),
                d.dropped = !1,
                b.each(d.sortables, function() {
                    this.refreshPositions()
                }))
            })
        }
    });
    b.ui.plugin.add("draggable", "cursor", {
        start: function(a, c, d) {
            a = b("body");
            d = d.options;
            a.css("cursor") && (d._cursor = a.css("cursor"));
            a.css("cursor", d.cursor)
        },
        stop: function(a, c, d) {
            a = d.options;
            a._cursor && b("body").css("cursor", a._cursor)
        }
    });
    b.ui.plugin.add("draggable", "opacity", {
        start: function(a, c, d) {
            a = b(c.helper);
            d = d.options;
            a.css("opacity") && (d._opacity = a.css("opacity"));
            a.css("opacity", d.opacity)
        },
        stop: function(a, c, d) {
            a = d.options;
            a._opacity && b(c.helper).css("opacity", a._opacity)
        }
    });
    b.ui.plugin.add("draggable", "scroll", {
        start: function(a, c, d) {
            d.scrollParentNotHidden || (d.scrollParentNotHidden = d.helper.scrollParent(!1));
            d.scrollParentNotHidden[0] !== d.document[0] && "HTML" !== d.scrollParentNotHidden[0].tagName && (d.overflowOffset = d.scrollParentNotHidden.offset())
        },
        drag: function(a, c, d) {
            c = d.options;
            var f = !1
              , h = d.scrollParentNotHidden[0]
              , n = d.document[0];
            h !== n && "HTML" !== h.tagName ? (c.axis && "x" === c.axis || (d.overflowOffset.top + h.offsetHeight - a.pageY < c.scrollSensitivity ? h.scrollTop = f = h.scrollTop + c.scrollSpeed : a.pageY - d.overflowOffset.top < c.scrollSensitivity && (h.scrollTop = f = h.scrollTop - c.scrollSpeed)),
            c.axis && "y" === c.axis || (d.overflowOffset.left + h.offsetWidth - a.pageX < c.scrollSensitivity ? h.scrollLeft = f = h.scrollLeft + c.scrollSpeed : a.pageX - d.overflowOffset.left < c.scrollSensitivity && (h.scrollLeft = f = h.scrollLeft - c.scrollSpeed))) : (c.axis && "x" === c.axis || (a.pageY - b(n).scrollTop() < c.scrollSensitivity ? f = b(n).scrollTop(b(n).scrollTop() - c.scrollSpeed) : b(window).height() - (a.pageY - b(n).scrollTop()) < c.scrollSensitivity && (f = b(n).scrollTop(b(n).scrollTop() + c.scrollSpeed))),
            c.axis && "y" === c.axis || (a.pageX - b(n).scrollLeft() < c.scrollSensitivity ? f = b(n).scrollLeft(b(n).scrollLeft() - c.scrollSpeed) : b(window).width() - (a.pageX - b(n).scrollLeft()) < c.scrollSensitivity && (f = b(n).scrollLeft(b(n).scrollLeft() + c.scrollSpeed))));
            !1 !== f && b.ui.ddmanager && !c.dropBehaviour && b.ui.ddmanager.prepareOffsets(d, a)
        }
    });
    b.ui.plugin.add("draggable", "snap", {
        start: function(a, c, d) {
            a = d.options;
            d.snapElements = [];
            b(a.snap.constructor !== String ? a.snap.items || ":data(ui-draggable)" : a.snap).each(function() {
                var f = b(this)
                  , h = f.offset();
                this !== d.element[0] && d.snapElements.push({
                    item: this,
                    width: f.outerWidth(),
                    height: f.outerHeight(),
                    top: h.top,
                    left: h.left
                })
            })
        },
        drag: function(a, c, d) {
            var f, h = d.options, n = h.snapTolerance, r = c.offset.left, z = r + d.helperProportions.width, A = c.offset.top, L = A + d.helperProportions.height;
            for (f = d.snapElements.length - 1; 0 <= f; f--) {
                var U = d.snapElements[f].left - d.margins.left;
                var G = U + d.snapElements[f].width;
                var Q = d.snapElements[f].top - d.margins.top;
                var V = Q + d.snapElements[f].height;
                if (z < U - n || r > G + n || L < Q - n || A > V + n || !b.contains(d.snapElements[f].item.ownerDocument, d.snapElements[f].item))
                    d.snapElements[f].snapping && d.options.snap.release && d.options.snap.release.call(d.element, a, b.extend(d._uiHash(), {
                        snapItem: d.snapElements[f].item
                    })),
                    d.snapElements[f].snapping = !1;
                else {
                    if ("inner" !== h.snapMode) {
                        var ca = Math.abs(Q - L) <= n;
                        var ia = Math.abs(V - A) <= n;
                        var na = Math.abs(U - z) <= n;
                        var ja = Math.abs(G - r) <= n;
                        ca && (c.position.top = d._convertPositionTo("relative", {
                            top: Q - d.helperProportions.height,
                            left: 0
                        }).top);
                        ia && (c.position.top = d._convertPositionTo("relative", {
                            top: V,
                            left: 0
                        }).top);
                        na && (c.position.left = d._convertPositionTo("relative", {
                            top: 0,
                            left: U - d.helperProportions.width
                        }).left);
                        ja && (c.position.left = d._convertPositionTo("relative", {
                            top: 0,
                            left: G
                        }).left)
                    }
                    var ta = ca || ia || na || ja;
                    "outer" !== h.snapMode && (ca = Math.abs(Q - A) <= n,
                    ia = Math.abs(V - L) <= n,
                    na = Math.abs(U - r) <= n,
                    ja = Math.abs(G - z) <= n,
                    ca && (c.position.top = d._convertPositionTo("relative", {
                        top: Q,
                        left: 0
                    }).top),
                    ia && (c.position.top = d._convertPositionTo("relative", {
                        top: V - d.helperProportions.height,
                        left: 0
                    }).top),
                    na && (c.position.left = d._convertPositionTo("relative", {
                        top: 0,
                        left: U
                    }).left),
                    ja && (c.position.left = d._convertPositionTo("relative", {
                        top: 0,
                        left: G - d.helperProportions.width
                    }).left));
                    !d.snapElements[f].snapping && (ca || ia || na || ja || ta) && d.options.snap.snap && d.options.snap.snap.call(d.element, a, b.extend(d._uiHash(), {
                        snapItem: d.snapElements[f].item
                    }));
                    d.snapElements[f].snapping = ca || ia || na || ja || ta
                }
            }
        }
    });
    b.ui.plugin.add("draggable", "stack", {
        start: function(a, c, d) {
            a = b.makeArray(b(d.options.stack)).sort(function(h, n) {
                return (parseInt(b(h).css("zIndex"), 10) || 0) - (parseInt(b(n).css("zIndex"), 10) || 0)
            });
            if (a.length) {
                var f = parseInt(b(a[0]).css("zIndex"), 10) || 0;
                b(a).each(function(h) {
                    b(this).css("zIndex", f + h)
                });
                this.css("zIndex", f + a.length)
            }
        }
    });
    b.ui.plugin.add("draggable", "zIndex", {
        start: function(a, c, d) {
            a = b(c.helper);
            d = d.options;
            a.css("zIndex") && (d._zIndex = a.css("zIndex"));
            a.css("zIndex", d.zIndex)
        },
        stop: function(a, c, d) {
            a = d.options;
            a._zIndex && b(c.helper).css("zIndex", a._zIndex)
        }
    });
    b.widget("ui.droppable", {
        version: "1.13.2",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            addClasses: !0,
            greedy: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var a, c = this.options, d = c.accept;
            this.isover = !1;
            this.isout = !0;
            this.accept = "function" === typeof d ? d : function(f) {
                return f.is(d)
            }
            ;
            this.proportions = function() {
                if (arguments.length)
                    a = arguments[0];
                else
                    return a ? a : a = {
                        width: this.element[0].offsetWidth,
                        height: this.element[0].offsetHeight
                    }
            }
            ;
            this._addToManager(c.scope);
            c.addClasses && this._addClass("ui-droppable")
        },
        _addToManager: function(a) {
            b.ui.ddmanager.droppables[a] = b.ui.ddmanager.droppables[a] || [];
            b.ui.ddmanager.droppables[a].push(this)
        },
        _splice: function(a) {
            for (var c = 0; c < a.length; c++)
                a[c] === this && a.splice(c, 1)
        },
        _destroy: function() {
            this._splice(b.ui.ddmanager.droppables[this.options.scope])
        },
        _setOption: function(a, c) {
            "accept" === a ? this.accept = "function" === typeof c ? c : function(d) {
                return d.is(c)
            }
            : "scope" === a && (this._splice(b.ui.ddmanager.droppables[this.options.scope]),
            this._addToManager(c));
            this._super(a, c)
        },
        _activate: function(a) {
            var c = b.ui.ddmanager.current;
            this._addActiveClass();
            c && this._trigger("activate", a, this.ui(c))
        },
        _deactivate: function(a) {
            var c = b.ui.ddmanager.current;
            this._removeActiveClass();
            c && this._trigger("deactivate", a, this.ui(c))
        },
        _over: function(a) {
            var c = b.ui.ddmanager.current;
            c && (c.currentItem || c.element)[0] !== this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this._addHoverClass(),
            this._trigger("over", a, this.ui(c)))
        },
        _out: function(a) {
            var c = b.ui.ddmanager.current;
            c && (c.currentItem || c.element)[0] !== this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this._removeHoverClass(),
            this._trigger("out", a, this.ui(c)))
        },
        _drop: function(a, c) {
            var d = c || b.ui.ddmanager.current
              , f = !1;
            if (!d || (d.currentItem || d.element)[0] === this.element[0])
                return !1;
            this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var h = b(this).droppable("instance");
                if (h.options.greedy && !h.options.disabled && h.options.scope === d.options.scope && h.accept.call(h.element[0], d.currentItem || d.element) && b.ui.intersect(d, b.extend(h, {
                    offset: h.element.offset()
                }), h.options.tolerance, a))
                    return f = !0,
                    !1
            });
            return f ? !1 : this.accept.call(this.element[0], d.currentItem || d.element) ? (this._removeActiveClass(),
            this._removeHoverClass(),
            this._trigger("drop", a, this.ui(d)),
            this.element) : !1
        },
        ui: function(a) {
            return {
                draggable: a.currentItem || a.element,
                helper: a.helper,
                position: a.position,
                offset: a.positionAbs
            }
        },
        _addHoverClass: function() {
            this._addClass("ui-droppable-hover")
        },
        _removeHoverClass: function() {
            this._removeClass("ui-droppable-hover")
        },
        _addActiveClass: function() {
            this._addClass("ui-droppable-active")
        },
        _removeActiveClass: function() {
            this._removeClass("ui-droppable-active")
        }
    });
    b.ui.intersect = function() {
        return function(a, c, d, f) {
            if (!c.offset)
                return !1;
            var h = (a.positionAbs || a.position.absolute).left + a.margins.left
              , n = (a.positionAbs || a.position.absolute).top + a.margins.top
              , r = h + a.helperProportions.width
              , z = n + a.helperProportions.height
              , A = c.offset.left
              , L = c.offset.top
              , U = A + c.proportions().width
              , G = L + c.proportions().height;
            switch (d) {
            case "fit":
                return A <= h && r <= U && L <= n && z <= G;
            case "intersect":
                return A < h + a.helperProportions.width / 2 && r - a.helperProportions.width / 2 < U && L < n + a.helperProportions.height / 2 && z - a.helperProportions.height / 2 < G;
            case "pointer":
                a = f.pageY;
                d = c.proportions().height;
                if (L = a >= L && a < L + d)
                    f = f.pageX,
                    c = c.proportions().width,
                    L = f >= A && f < A + c;
                return L;
            case "touch":
                return (n >= L && n <= G || z >= L && z <= G || n < L && z > G) && (h >= A && h <= U || r >= A && r <= U || h < A && r > U);
            default:
                return !1
            }
        }
    }();
    b.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(a, c) {
            var d, f = b.ui.ddmanager.droppables[a.options.scope] || [], h = c ? c.type : null, n = (a.currentItem || a.element).find(":data(ui-droppable)").addBack();
            var r = 0;
            a: for (; r < f.length; r++)
                if (!(f[r].options.disabled || a && !f[r].accept.call(f[r].element[0], a.currentItem || a.element))) {
                    for (d = 0; d < n.length; d++)
                        if (n[d] === f[r].element[0]) {
                            f[r].proportions().height = 0;
                            continue a
                        }
                    f[r].visible = "none" !== f[r].element.css("display");
                    f[r].visible && ("mousedown" === h && f[r]._activate.call(f[r], c),
                    f[r].offset = f[r].element.offset(),
                    f[r].proportions({
                        width: f[r].element[0].offsetWidth,
                        height: f[r].element[0].offsetHeight
                    }))
                }
        },
        drop: function(a, c) {
            var d = !1;
            b.each((b.ui.ddmanager.droppables[a.options.scope] || []).slice(), function() {
                this.options && (!this.options.disabled && this.visible && b.ui.intersect(a, this, this.options.tolerance, c) && (d = this._drop.call(this, c) || d),
                !this.options.disabled && this.visible && this.accept.call(this.element[0], a.currentItem || a.element) && (this.isout = !0,
                this.isover = !1,
                this._deactivate.call(this, c)))
            });
            return d
        },
        dragStart: function(a, c) {
            a.element.parentsUntil("body").on("scroll.droppable", function() {
                a.options.refreshPositions || b.ui.ddmanager.prepareOffsets(a, c)
            })
        },
        drag: function(a, c) {
            a.options.refreshPositions && b.ui.ddmanager.prepareOffsets(a, c);
            b.each(b.ui.ddmanager.droppables[a.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var d = b.ui.intersect(a, this, this.options.tolerance, c);
                    var f = !d && this.isover ? "isout" : d && !this.isover ? "isover" : null;
                    if (f) {
                        if (this.options.greedy) {
                            var h = this.options.scope;
                            d = this.element.parents(":data(ui-droppable)").filter(function() {
                                return b(this).droppable("instance").options.scope === h
                            });
                            if (d.length) {
                                var n = b(d[0]).droppable("instance");
                                n.greedyChild = "isover" === f
                            }
                        }
                        n && "isover" === f && (n.isover = !1,
                        n.isout = !0,
                        n._out.call(n, c));
                        this[f] = !0;
                        this["isout" === f ? "isover" : "isout"] = !1;
                        this["isover" === f ? "_over" : "_out"].call(this, c);
                        n && "isout" === f && (n.isout = !1,
                        n.isover = !0,
                        n._over.call(n, c))
                    }
                }
            })
        },
        dragStop: function(a, c) {
            a.element.parentsUntil("body").off("scroll.droppable");
            a.options.refreshPositions || b.ui.ddmanager.prepareOffsets(a, c)
        }
    };
    !1 !== b.uiBackCompat && b.widget("ui.droppable", b.ui.droppable, {
        options: {
            hoverClass: !1,
            activeClass: !1
        },
        _addActiveClass: function() {
            this._super();
            this.options.activeClass && this.element.addClass(this.options.activeClass)
        },
        _removeActiveClass: function() {
            this._super();
            this.options.activeClass && this.element.removeClass(this.options.activeClass)
        },
        _addHoverClass: function() {
            this._super();
            this.options.hoverClass && this.element.addClass(this.options.hoverClass)
        },
        _removeHoverClass: function() {
            this._super();
            this.options.hoverClass && this.element.removeClass(this.options.hoverClass)
        }
    });
    b.widget("ui.resizable", b.ui.mouse, {
        version: "1.13.2",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            classes: {
                "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
            },
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function(a) {
            return parseFloat(a) || 0
        },
        _isNumber: function(a) {
            return !isNaN(parseFloat(a))
        },
        _hasScroll: function(a, c) {
            if ("hidden" === b(a).css("overflow"))
                return !1;
            c = c && "left" === c ? "scrollLeft" : "scrollTop";
            var d = !1;
            if (0 < a[c])
                return !0;
            try {
                a[c] = 1,
                d = 0 < a[c],
                a[c] = 0
            } catch (f) {}
            return d
        },
        _create: function() {
            var a = this.options
              , c = this;
            this._addClass("ui-resizable");
            b.extend(this, {
                _aspectRatio: !!a.aspectRatio,
                aspectRatio: a.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: a.helper || a.ghost || a.animate ? a.helper || "ui-resizable-helper" : null
            });
            if (this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)) {
                this.element.wrap(b("<div class='ui-wrapper'></div>").css({
                    overflow: "hidden",
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                }));
                this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance"));
                this.elementIsWrapper = !0;
                var d = {
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom"),
                    marginLeft: this.originalElement.css("marginLeft")
                };
                this.element.css(d);
                this.originalElement.css("margin", 0);
                this.originalResizeStyle = this.originalElement.css("resize");
                this.originalElement.css("resize", "none");
                this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                }));
                this.originalElement.css(d);
                this._proportionallyResize()
            }
            this._setupHandles();
            if (a.autoHide)
                b(this.element).on("mouseenter", function() {
                    a.disabled || (c._removeClass("ui-resizable-autohide"),
                    c._handles.show())
                }).on("mouseleave", function() {
                    a.disabled || c.resizing || (c._addClass("ui-resizable-autohide"),
                    c._handles.hide())
                });
            this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            this._addedHandles.remove();
            var a = function(d) {
                b(d).removeData("resizable").removeData("ui-resizable").off(".resizable")
            };
            if (this.elementIsWrapper) {
                a(this.element);
                var c = this.element;
                this.originalElement.css({
                    position: c.css("position"),
                    width: c.outerWidth(),
                    height: c.outerHeight(),
                    top: c.css("top"),
                    left: c.css("left")
                }).insertAfter(c);
                c.remove()
            }
            this.originalElement.css("resize", this.originalResizeStyle);
            a(this.originalElement);
            return this
        },
        _setOption: function(a, c) {
            this._super(a, c);
            switch (a) {
            case "handles":
                this._removeHandles();
                this._setupHandles();
                break;
            case "aspectRatio":
                this._aspectRatio = !!c
            }
        },
        _setupHandles: function() {
            var a = this.options, c, d = this;
            this.handles = a.handles || (b(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se");
            this._handles = b();
            this._addedHandles = b();
            if (this.handles.constructor === String) {
                "all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw");
                var f = this.handles.split(",");
                this.handles = {};
                for (c = 0; c < f.length; c++) {
                    var h = String.prototype.trim.call(f[c]);
                    var n = "ui-resizable-" + h;
                    var r = b("<div>");
                    this._addClass(r, "ui-resizable-handle " + n);
                    r.css({
                        zIndex: a.zIndex
                    });
                    this.handles[h] = ".ui-resizable-" + h;
                    this.element.children(this.handles[h]).length || (this.element.append(r),
                    this._addedHandles = this._addedHandles.add(r))
                }
            }
            this._renderAxis = function(z) {
                var A;
                z = z || this.element;
                for (A in this.handles) {
                    if (this.handles[A].constructor === String)
                        this.handles[A] = this.element.children(this.handles[A]).first().show();
                    else if (this.handles[A].jquery || this.handles[A].nodeType)
                        this.handles[A] = b(this.handles[A]),
                        this._on(this.handles[A], {
                            mousedown: d._mouseDown
                        });
                    if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)) {
                        var L = b(this.handles[A], this.element);
                        var U = /sw|ne|nw|se|n|s/.test(A) ? L.outerHeight() : L.outerWidth();
                        L = ["padding", /ne|nw|n/.test(A) ? "Top" : /se|sw|s/.test(A) ? "Bottom" : /^e$/.test(A) ? "Right" : "Left"].join("");
                        z.css(L, U);
                        this._proportionallyResize()
                    }
                    this._handles = this._handles.add(this.handles[A])
                }
            }
            ;
            this._renderAxis(this.element);
            this._handles = this._handles.add(this.element.find(".ui-resizable-handle"));
            this._handles.disableSelection();
            this._handles.on("mouseover", function() {
                d.resizing || (this.className && (r = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),
                d.axis = r && r[1] ? r[1] : "se")
            });
            a.autoHide && (this._handles.hide(),
            this._addClass("ui-resizable-autohide"))
        },
        _removeHandles: function() {
            this._addedHandles.remove()
        },
        _mouseCapture: function(a) {
            var c, d = !1;
            for (c in this.handles) {
                var f = b(this.handles[c])[0];
                if (f === a.target || b.contains(f, a.target))
                    d = !0
            }
            return !this.options.disabled && d
        },
        _mouseStart: function(a) {
            var c = this.options
              , d = this.element;
            this.resizing = !0;
            this._renderProxy();
            var f = this._num(this.helper.css("left"));
            var h = this._num(this.helper.css("top"));
            c.containment && (f += b(c.containment).scrollLeft() || 0,
            h += b(c.containment).scrollTop() || 0);
            this.offset = this.helper.offset();
            this.position = {
                left: f,
                top: h
            };
            this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: d.width(),
                height: d.height()
            };
            this.originalSize = this._helper ? {
                width: d.outerWidth(),
                height: d.outerHeight()
            } : {
                width: d.width(),
                height: d.height()
            };
            this.sizeDiff = {
                width: d.outerWidth() - d.width(),
                height: d.outerHeight() - d.height()
            };
            this.originalPosition = {
                left: f,
                top: h
            };
            this.originalMousePosition = {
                left: a.pageX,
                top: a.pageY
            };
            this.aspectRatio = "number" === typeof c.aspectRatio ? c.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
            f = b(".ui-resizable-" + this.axis).css("cursor");
            b("body").css("cursor", "auto" === f ? this.axis + "-resize" : f);
            this._addClass("ui-resizable-resizing");
            this._propagate("start", a);
            return !0
        },
        _mouseDrag: function(a) {
            var c = this.originalMousePosition;
            var d = a.pageX - c.left || 0;
            c = a.pageY - c.top || 0;
            var f = this._change[this.axis];
            this._updatePrevProperties();
            if (!f)
                return !1;
            d = f.apply(this, [a, d, c]);
            this._updateVirtualBoundaries(a.shiftKey);
            if (this._aspectRatio || a.shiftKey)
                d = this._updateRatio(d, a);
            d = this._respectSize(d, a);
            this._updateCache(d);
            this._propagate("resize", a);
            d = this._applyChanges();
            !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize();
            b.isEmptyObject(d) || (this._updatePrevProperties(),
            this._trigger("resize", a, this.ui()),
            this._applyChanges());
            return !1
        },
        _mouseStop: function(a) {
            this.resizing = !1;
            var c, d = this.options;
            if (this._helper) {
                var f = this._proportionallyResizeElements;
                f = (c = f.length && /textarea/i.test(f[0].nodeName)) && this._hasScroll(f[0], "left") ? 0 : this.sizeDiff.height;
                c = c ? 0 : this.sizeDiff.width;
                c = {
                    width: this.helper.width() - c,
                    height: this.helper.height() - f
                };
                f = parseFloat(this.element.css("left")) + (this.position.left - this.originalPosition.left) || null;
                var h = parseFloat(this.element.css("top")) + (this.position.top - this.originalPosition.top) || null;
                d.animate || this.element.css(b.extend(c, {
                    top: h,
                    left: f
                }));
                this.helper.height(this.size.height);
                this.helper.width(this.size.width);
                this._helper && !d.animate && this._proportionallyResize()
            }
            b("body").css("cursor", "auto");
            this._removeClass("ui-resizable-resizing");
            this._propagate("stop", a);
            this._helper && this.helper.remove();
            return !1
        },
        _updatePrevProperties: function() {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            };
            this.prevSize = {
                width: this.size.width,
                height: this.size.height
            }
        },
        _applyChanges: function() {
            var a = {};
            this.position.top !== this.prevPosition.top && (a.top = this.position.top + "px");
            this.position.left !== this.prevPosition.left && (a.left = this.position.left + "px");
            this.size.width !== this.prevSize.width && (a.width = this.size.width + "px");
            this.size.height !== this.prevSize.height && (a.height = this.size.height + "px");
            this.helper.css(a);
            return a
        },
        _updateVirtualBoundaries: function(a) {
            var c = this.options;
            c = {
                minWidth: this._isNumber(c.minWidth) ? c.minWidth : 0,
                maxWidth: this._isNumber(c.maxWidth) ? c.maxWidth : Infinity,
                minHeight: this._isNumber(c.minHeight) ? c.minHeight : 0,
                maxHeight: this._isNumber(c.maxHeight) ? c.maxHeight : Infinity
            };
            if (this._aspectRatio || a) {
                a = c.minHeight * this.aspectRatio;
                var d = c.minWidth / this.aspectRatio;
                var f = c.maxHeight * this.aspectRatio;
                var h = c.maxWidth / this.aspectRatio;
                a > c.minWidth && (c.minWidth = a);
                d > c.minHeight && (c.minHeight = d);
                f < c.maxWidth && (c.maxWidth = f);
                h < c.maxHeight && (c.maxHeight = h)
            }
            this._vBoundaries = c
        },
        _updateCache: function(a) {
            this.offset = this.helper.offset();
            this._isNumber(a.left) && (this.position.left = a.left);
            this._isNumber(a.top) && (this.position.top = a.top);
            this._isNumber(a.height) && (this.size.height = a.height);
            this._isNumber(a.width) && (this.size.width = a.width)
        },
        _updateRatio: function(a) {
            var c = this.position
              , d = this.size
              , f = this.axis;
            this._isNumber(a.height) ? a.width = a.height * this.aspectRatio : this._isNumber(a.width) && (a.height = a.width / this.aspectRatio);
            "sw" === f && (a.left = c.left + (d.width - a.width),
            a.top = null);
            "nw" === f && (a.top = c.top + (d.height - a.height),
            a.left = c.left + (d.width - a.width));
            return a
        },
        _respectSize: function(a) {
            var c = this._vBoundaries
              , d = this.axis
              , f = this._isNumber(a.width) && c.maxWidth && c.maxWidth < a.width
              , h = this._isNumber(a.height) && c.maxHeight && c.maxHeight < a.height
              , n = this._isNumber(a.width) && c.minWidth && c.minWidth > a.width
              , r = this._isNumber(a.height) && c.minHeight && c.minHeight > a.height
              , z = this.originalPosition.left + this.originalSize.width
              , A = this.originalPosition.top + this.originalSize.height
              , L = /sw|nw|w/.test(d);
            d = /nw|ne|n/.test(d);
            n && (a.width = c.minWidth);
            r && (a.height = c.minHeight);
            f && (a.width = c.maxWidth);
            h && (a.height = c.maxHeight);
            n && L && (a.left = z - c.minWidth);
            f && L && (a.left = z - c.maxWidth);
            r && d && (a.top = A - c.minHeight);
            h && d && (a.top = A - c.maxHeight);
            a.width || a.height || a.left || !a.top ? a.width || a.height || a.top || !a.left || (a.left = null) : a.top = null;
            return a
        },
        _getPaddingPlusBorderDimensions: function(a) {
            var c = 0
              , d = []
              , f = [a.css("borderTopWidth"), a.css("borderRightWidth"), a.css("borderBottomWidth"), a.css("borderLeftWidth")];
            for (a = [a.css("paddingTop"), a.css("paddingRight"), a.css("paddingBottom"), a.css("paddingLeft")]; 4 > c; c++)
                d[c] = parseFloat(f[c]) || 0,
                d[c] += parseFloat(a[c]) || 0;
            return {
                height: d[0] + d[2],
                width: d[1] + d[3]
            }
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length)
                for (var a, c = 0, d = this.helper || this.element; c < this._proportionallyResizeElements.length; c++)
                    a = this._proportionallyResizeElements[c],
                    this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(a)),
                    a.css({
                        height: d.height() - this.outerDimensions.height || 0,
                        width: d.width() - this.outerDimensions.width || 0
                    })
        },
        _renderProxy: function() {
            var a = this.options;
            this.elementOffset = this.element.offset();
            this._helper ? (this.helper = this.helper || b("<div></div>").css({
                overflow: "hidden"
            }),
            this._addClass(this.helper, this._helper),
            this.helper.css({
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++a.zIndex
            }),
            this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(a, c) {
                return {
                    width: this.originalSize.width + c
                }
            },
            w: function(a, c) {
                return {
                    left: this.originalPosition.left + c,
                    width: this.originalSize.width - c
                }
            },
            n: function(a, c, d) {
                return {
                    top: this.originalPosition.top + d,
                    height: this.originalSize.height - d
                }
            },
            s: function(a, c, d) {
                return {
                    height: this.originalSize.height + d
                }
            },
            se: function(a, c, d) {
                return b.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [a, c, d]))
            },
            sw: function(a, c, d) {
                return b.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [a, c, d]))
            },
            ne: function(a, c, d) {
                return b.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [a, c, d]))
            },
            nw: function(a, c, d) {
                return b.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [a, c, d]))
            }
        },
        _propagate: function(a, c) {
            b.ui.plugin.call(this, a, [c, this.ui()]);
            "resize" !== a && this._trigger(a, c, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    });
    b.ui.plugin.add("resizable", "animate", {
        stop: function(a) {
            var c = b(this).resizable("instance")
              , d = c.options
              , f = c._proportionallyResizeElements
              , h = f.length && /textarea/i.test(f[0].nodeName)
              , n = h && c._hasScroll(f[0], "left") ? 0 : c.sizeDiff.height;
            h = {
                width: c.size.width - (h ? 0 : c.sizeDiff.width),
                height: c.size.height - n
            };
            n = parseFloat(c.element.css("left")) + (c.position.left - c.originalPosition.left) || null;
            var r = parseFloat(c.element.css("top")) + (c.position.top - c.originalPosition.top) || null;
            c.element.animate(b.extend(h, r && n ? {
                top: r,
                left: n
            } : {}), {
                duration: d.animateDuration,
                easing: d.animateEasing,
                step: function() {
                    var z = {
                        width: parseFloat(c.element.css("width")),
                        height: parseFloat(c.element.css("height")),
                        top: parseFloat(c.element.css("top")),
                        left: parseFloat(c.element.css("left"))
                    };
                    f && f.length && b(f[0]).css({
                        width: z.width,
                        height: z.height
                    });
                    c._updateCache(z);
                    c._propagate("resize", a)
                }
            })
        }
    });
    b.ui.plugin.add("resizable", "containment", {
        start: function() {
            var a = b(this).resizable("instance")
              , c = a.element;
            var d = a.options.containment;
            if (c = d instanceof b ? d.get(0) : /parent/.test(d) ? c.parent().get(0) : d)
                if (a.containerElement = b(c),
                /document/.test(d) || d === document)
                    a.containerOffset = {
                        left: 0,
                        top: 0
                    },
                    a.containerPosition = {
                        left: 0,
                        top: 0
                    },
                    a.parentData = {
                        element: b(document),
                        left: 0,
                        top: 0,
                        width: b(document).width(),
                        height: b(document).height() || document.body.parentNode.scrollHeight
                    };
                else {
                    var f = b(c);
                    var h = [];
                    b(["Top", "Right", "Left", "Bottom"]).each(function(z, A) {
                        h[z] = a._num(f.css("padding" + A))
                    });
                    a.containerOffset = f.offset();
                    a.containerPosition = f.position();
                    a.containerSize = {
                        height: f.innerHeight() - h[3],
                        width: f.innerWidth() - h[1]
                    };
                    d = a.containerOffset;
                    var n = a.containerSize.height;
                    var r = a.containerSize.width;
                    r = a._hasScroll(c, "left") ? c.scrollWidth : r;
                    n = a._hasScroll(c) ? c.scrollHeight : n;
                    a.parentData = {
                        element: c,
                        left: d.left,
                        top: d.top,
                        width: r,
                        height: n
                    }
                }
        },
        resize: function(a) {
            var c = b(this).resizable("instance");
            var d = c.options;
            var f = c.containerOffset;
            var h = c.position;
            a = c._aspectRatio || a.shiftKey;
            var n = {
                top: 0,
                left: 0
            }
              , r = c.containerElement
              , z = !0;
            r[0] !== document && /static/.test(r.css("position")) && (n = f);
            h.left < (c._helper ? f.left : 0) && (c.size.width += c._helper ? c.position.left - f.left : c.position.left - n.left,
            a && (c.size.height = c.size.width / c.aspectRatio,
            z = !1),
            c.position.left = d.helper ? f.left : 0);
            h.top < (c._helper ? f.top : 0) && (c.size.height += c._helper ? c.position.top - f.top : c.position.top,
            a && (c.size.width = c.size.height * c.aspectRatio,
            z = !1),
            c.position.top = c._helper ? f.top : 0);
            d = c.containerElement.get(0) === c.element.parent().get(0);
            h = /relative|absolute/.test(c.containerElement.css("position"));
            d && h ? (c.offset.left = c.parentData.left + c.position.left,
            c.offset.top = c.parentData.top + c.position.top) : (c.offset.left = c.element.offset().left,
            c.offset.top = c.element.offset().top);
            d = Math.abs(c.sizeDiff.width + (c._helper ? c.offset.left - n.left : c.offset.left - f.left));
            f = Math.abs(c.sizeDiff.height + (c._helper ? c.offset.top - n.top : c.offset.top - f.top));
            d + c.size.width >= c.parentData.width && (c.size.width = c.parentData.width - d,
            a && (c.size.height = c.size.width / c.aspectRatio,
            z = !1));
            f + c.size.height >= c.parentData.height && (c.size.height = c.parentData.height - f,
            a && (c.size.width = c.size.height * c.aspectRatio,
            z = !1));
            z || (c.position.left = c.prevPosition.left,
            c.position.top = c.prevPosition.top,
            c.size.width = c.prevSize.width,
            c.size.height = c.prevSize.height)
        },
        stop: function() {
            var a = b(this).resizable("instance")
              , c = a.options
              , d = a.containerOffset
              , f = a.containerPosition
              , h = a.containerElement
              , n = b(a.helper)
              , r = n.offset()
              , z = n.outerWidth() - a.sizeDiff.width;
            n = n.outerHeight() - a.sizeDiff.height;
            a._helper && !c.animate && /relative/.test(h.css("position")) && b(this).css({
                left: r.left - f.left - d.left,
                width: z,
                height: n
            });
            a._helper && !c.animate && /static/.test(h.css("position")) && b(this).css({
                left: r.left - f.left - d.left,
                width: z,
                height: n
            })
        }
    });
    b.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var a = b(this).resizable("instance").options;
            b(a.alsoResize).each(function() {
                var c = b(this);
                c.data("ui-resizable-alsoresize", {
                    width: parseFloat(c.width()),
                    height: parseFloat(c.height()),
                    left: parseFloat(c.css("left")),
                    top: parseFloat(c.css("top"))
                })
            })
        },
        resize: function(a, c) {
            a = b(this).resizable("instance");
            var d = a.originalSize
              , f = a.originalPosition
              , h = {
                height: a.size.height - d.height || 0,
                width: a.size.width - d.width || 0,
                top: a.position.top - f.top || 0,
                left: a.position.left - f.left || 0
            };
            b(a.options.alsoResize).each(function() {
                var n = b(this)
                  , r = b(this).data("ui-resizable-alsoresize")
                  , z = {}
                  , A = n.parents(c.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                b.each(A, function(L, U) {
                    (L = (r[U] || 0) + (h[U] || 0)) && 0 <= L && (z[U] = L || null)
                });
                n.css(z)
            })
        },
        stop: function() {
            b(this).removeData("ui-resizable-alsoresize")
        }
    });
    b.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var a = b(this).resizable("instance")
              , c = a.size;
            a.ghost = a.originalElement.clone();
            a.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: c.height,
                width: c.width,
                margin: 0,
                left: 0,
                top: 0
            });
            a._addClass(a.ghost, "ui-resizable-ghost");
            !1 !== b.uiBackCompat && "string" === typeof a.options.ghost && a.ghost.addClass(this.options.ghost);
            a.ghost.appendTo(a.helper)
        },
        resize: function() {
            var a = b(this).resizable("instance");
            a.ghost && a.ghost.css({
                position: "relative",
                height: a.size.height,
                width: a.size.width
            })
        },
        stop: function() {
            var a = b(this).resizable("instance");
            a.ghost && a.helper && a.helper.get(0).removeChild(a.ghost.get(0))
        }
    });
    b.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var a = b(this).resizable("instance")
              , c = a.options
              , d = a.size
              , f = a.originalSize
              , h = a.originalPosition
              , n = a.axis
              , r = "number" === typeof c.grid ? [c.grid, c.grid] : c.grid
              , z = r[0] || 1
              , A = r[1] || 1
              , L = Math.round((d.width - f.width) / z) * z;
            d = Math.round((d.height - f.height) / A) * A;
            var U = f.width + L
              , G = f.height + d
              , Q = c.maxWidth && c.maxWidth < U
              , V = c.maxHeight && c.maxHeight < G
              , ca = c.minWidth && c.minWidth > U
              , ia = c.minHeight && c.minHeight > G;
            c.grid = r;
            ca && (U += z);
            ia && (G += A);
            Q && (U -= z);
            V && (G -= A);
            if (/^(se|s|e)$/.test(n))
                a.size.width = U,
                a.size.height = G;
            else if (/^(ne)$/.test(n))
                a.size.width = U,
                a.size.height = G,
                a.position.top = h.top - d;
            else if (/^(sw)$/.test(n))
                a.size.width = U,
                a.size.height = G,
                a.position.left = h.left - L;
            else {
                if (0 >= G - A || 0 >= U - z)
                    var na = a._getPaddingPlusBorderDimensions(this);
                0 < G - A ? (a.size.height = G,
                a.position.top = h.top - d) : (G = A - na.height,
                a.size.height = G,
                a.position.top = h.top + f.height - G);
                0 < U - z ? (a.size.width = U,
                a.position.left = h.left - L) : (U = z - na.width,
                a.size.width = U,
                a.position.left = h.left + f.width - U)
            }
        }
    });
    b.widget("ui.selectable", b.ui.mouse, {
        version: "1.13.2",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var a = this;
            this._addClass("ui-selectable");
            this.dragged = !1;
            this.refresh = function() {
                a.elementPos = b(a.element[0]).offset();
                a.selectees = b(a.options.filter, a.element[0]);
                a._addClass(a.selectees, "ui-selectee");
                a.selectees.each(function() {
                    var c = b(this)
                      , d = c.offset()
                      , f = d.left - a.elementPos.left;
                    d = d.top - a.elementPos.top;
                    b.data(this, "selectable-item", {
                        element: this,
                        $element: c,
                        left: f,
                        top: d,
                        right: f + c.outerWidth(),
                        bottom: d + c.outerHeight(),
                        startselected: !1,
                        selected: c.hasClass("ui-selected"),
                        selecting: c.hasClass("ui-selecting"),
                        unselecting: c.hasClass("ui-unselecting")
                    })
                })
            }
            ;
            this.refresh();
            this._mouseInit();
            this.helper = b("<div>");
            this._addClass(this.helper, "ui-selectable-helper")
        },
        _destroy: function() {
            this.selectees.removeData("selectable-item");
            this._mouseDestroy()
        },
        _mouseStart: function(a) {
            var c = this
              , d = this.options;
            this.opos = [a.pageX, a.pageY];
            this.elementPos = b(this.element[0]).offset();
            this.options.disabled || (this.selectees = b(d.filter, this.element[0]),
            this._trigger("start", a),
            b(d.appendTo).append(this.helper),
            this.helper.css({
                left: a.pageX,
                top: a.pageY,
                width: 0,
                height: 0
            }),
            d.autoRefresh && this.refresh(),
            this.selectees.filter(".ui-selected").each(function() {
                var f = b.data(this, "selectable-item");
                f.startselected = !0;
                a.metaKey || a.ctrlKey || (c._removeClass(f.$element, "ui-selected"),
                f.selected = !1,
                c._addClass(f.$element, "ui-unselecting"),
                f.unselecting = !0,
                c._trigger("unselecting", a, {
                    unselecting: f.element
                }))
            }),
            b(a.target).parents().addBack().each(function() {
                var f = b.data(this, "selectable-item");
                if (f) {
                    var h = !a.metaKey && !a.ctrlKey || !f.$element.hasClass("ui-selected");
                    c._removeClass(f.$element, h ? "ui-unselecting" : "ui-selected")._addClass(f.$element, h ? "ui-selecting" : "ui-unselecting");
                    f.unselecting = !h;
                    f.selecting = h;
                    (f.selected = h) ? c._trigger("selecting", a, {
                        selecting: f.element
                    }) : c._trigger("unselecting", a, {
                        unselecting: f.element
                    });
                    return !1
                }
            }))
        },
        _mouseDrag: function(a) {
            this.dragged = !0;
            if (!this.options.disabled) {
                var c = this
                  , d = this.options
                  , f = this.opos[0]
                  , h = this.opos[1]
                  , n = a.pageX
                  , r = a.pageY;
                if (f > n) {
                    var z = n;
                    n = f;
                    f = z
                }
                h > r && (z = r,
                r = h,
                h = z);
                this.helper.css({
                    left: f,
                    top: h,
                    width: n - f,
                    height: r - h
                });
                this.selectees.each(function() {
                    var A = b.data(this, "selectable-item")
                      , L = !1;
                    if (A && A.element !== c.element[0]) {
                        var U = A.left + c.elementPos.left;
                        var G = A.right + c.elementPos.left;
                        var Q = A.top + c.elementPos.top;
                        var V = A.bottom + c.elementPos.top;
                        "touch" === d.tolerance ? L = !(U > n || G < f || Q > r || V < h) : "fit" === d.tolerance && (L = U > f && G < n && Q > h && V < r);
                        L ? (A.selected && (c._removeClass(A.$element, "ui-selected"),
                        A.selected = !1),
                        A.unselecting && (c._removeClass(A.$element, "ui-unselecting"),
                        A.unselecting = !1),
                        A.selecting || (c._addClass(A.$element, "ui-selecting"),
                        A.selecting = !0,
                        c._trigger("selecting", a, {
                            selecting: A.element
                        }))) : (A.selecting && ((a.metaKey || a.ctrlKey) && A.startselected ? (c._removeClass(A.$element, "ui-selecting"),
                        A.selecting = !1,
                        c._addClass(A.$element, "ui-selected"),
                        A.selected = !0) : (c._removeClass(A.$element, "ui-selecting"),
                        A.selecting = !1,
                        A.startselected && (c._addClass(A.$element, "ui-unselecting"),
                        A.unselecting = !0),
                        c._trigger("unselecting", a, {
                            unselecting: A.element
                        }))),
                        !A.selected || a.metaKey || a.ctrlKey || A.startselected || (c._removeClass(A.$element, "ui-selected"),
                        A.selected = !1,
                        c._addClass(A.$element, "ui-unselecting"),
                        A.unselecting = !0,
                        c._trigger("unselecting", a, {
                            unselecting: A.element
                        })))
                    }
                });
                return !1
            }
        },
        _mouseStop: function(a) {
            var c = this;
            this.dragged = !1;
            b(".ui-unselecting", this.element[0]).each(function() {
                var d = b.data(this, "selectable-item");
                c._removeClass(d.$element, "ui-unselecting");
                d.unselecting = !1;
                d.startselected = !1;
                c._trigger("unselected", a, {
                    unselected: d.element
                })
            });
            b(".ui-selecting", this.element[0]).each(function() {
                var d = b.data(this, "selectable-item");
                c._removeClass(d.$element, "ui-selecting")._addClass(d.$element, "ui-selected");
                d.selecting = !1;
                d.selected = !0;
                d.startselected = !0;
                c._trigger("selected", a, {
                    selected: d.element
                })
            });
            this._trigger("stop", a);
            this.helper.remove();
            return !1
        }
    });
    b.widget("ui.sortable", b.ui.mouse, {
        version: "1.13.2",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1E3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function(a, c, d) {
            return a >= c && a < c + d
        },
        _isFloating: function(a) {
            return /left|right/.test(a.css("float")) || /inline|table-cell/.test(a.css("display"))
        },
        _create: function() {
            this.containerCache = {};
            this._addClass("ui-sortable");
            this.refresh();
            this.offset = this.element.offset();
            this._mouseInit();
            this._setHandleClassName();
            this.ready = !0
        },
        _setOption: function(a, c) {
            this._super(a, c);
            "handle" === a && this._setHandleClassName()
        },
        _setHandleClassName: function() {
            var a = this;
            this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle");
            b.each(this.items, function() {
                a._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
            })
        },
        _destroy: function() {
            this._mouseDestroy();
            for (var a = this.items.length - 1; 0 <= a; a--)
                this.items[a].item.removeData(this.widgetName + "-item");
            return this
        },
        _mouseCapture: function(a, c) {
            var d = null
              , f = !1
              , h = this;
            if (this.reverting || this.options.disabled || "static" === this.options.type)
                return !1;
            this._refreshItems(a);
            b(a.target).parents().each(function() {
                if (b.data(this, h.widgetName + "-item") === h)
                    return d = b(this),
                    !1
            });
            b.data(a.target, h.widgetName + "-item") === h && (d = b(a.target));
            if (!d || this.options.handle && !c && (b(this.options.handle, d).find("*").addBack().each(function() {
                this === a.target && (f = !0)
            }),
            !f))
                return !1;
            this.currentItem = d;
            this._removeCurrentsFromItems();
            return !0
        },
        _mouseStart: function(a, c, d) {
            c = this.options;
            this.currentContainer = this;
            this.refreshPositions();
            this.appendTo = b("parent" !== c.appendTo ? c.appendTo : this.currentItem.parent());
            this.helper = this._createHelper(a);
            this._cacheHelperProportions();
            this._cacheMargins();
            this.offset = this.currentItem.offset();
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            };
            b.extend(this.offset, {
                click: {
                    left: a.pageX - this.offset.left,
                    top: a.pageY - this.offset.top
                },
                relative: this._getRelativeOffset()
            });
            this.helper.css("position", "absolute");
            this.cssPosition = this.helper.css("position");
            c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt);
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            };
            this.helper[0] !== this.currentItem[0] && this.currentItem.hide();
            this._createPlaceholder();
            this.scrollParent = this.placeholder.scrollParent();
            b.extend(this.offset, {
                parent: this._getParentOffset()
            });
            c.containment && this._setContainment();
            if (c.cursor && "auto" !== c.cursor) {
                var f = this.document.find("body");
                this.storedCursor = f.css("cursor");
                f.css("cursor", c.cursor);
                this.storedStylesheet = b("<style>*{ cursor: " + c.cursor + " !important; }</style>").appendTo(f)
            }
            c.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")),
            this.helper.css("zIndex", c.zIndex));
            c.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")),
            this.helper.css("opacity", c.opacity));
            this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset());
            this._trigger("start", a, this._uiHash());
            this._preserveHelperProportions || this._cacheHelperProportions();
            if (!d)
                for (d = this.containers.length - 1; 0 <= d; d--)
                    this.containers[d]._trigger("activate", a, this._uiHash(this));
            b.ui.ddmanager && (b.ui.ddmanager.current = this);
            b.ui.ddmanager && !c.dropBehaviour && b.ui.ddmanager.prepareOffsets(this, a);
            this.dragging = !0;
            this._addClass(this.helper, "ui-sortable-helper");
            this.helper.parent().is(this.appendTo) || (this.helper.detach().appendTo(this.appendTo),
            this.offset.parent = this._getParentOffset());
            this.position = this.originalPosition = this._generatePosition(a);
            this.originalPageX = a.pageX;
            this.originalPageY = a.pageY;
            this.lastPositionAbs = this.positionAbs = this._convertPositionTo("absolute");
            this._mouseDrag(a);
            return !0
        },
        _scroll: function(a) {
            var c = this.options
              , d = !1;
            this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - a.pageY < c.scrollSensitivity ? this.scrollParent[0].scrollTop = d = this.scrollParent[0].scrollTop + c.scrollSpeed : a.pageY - this.overflowOffset.top < c.scrollSensitivity && (this.scrollParent[0].scrollTop = d = this.scrollParent[0].scrollTop - c.scrollSpeed),
            this.overflowOffset.left + this.scrollParent[0].offsetWidth - a.pageX < c.scrollSensitivity ? this.scrollParent[0].scrollLeft = d = this.scrollParent[0].scrollLeft + c.scrollSpeed : a.pageX - this.overflowOffset.left < c.scrollSensitivity && (this.scrollParent[0].scrollLeft = d = this.scrollParent[0].scrollLeft - c.scrollSpeed)) : (a.pageY - this.document.scrollTop() < c.scrollSensitivity ? d = this.document.scrollTop(this.document.scrollTop() - c.scrollSpeed) : this.window.height() - (a.pageY - this.document.scrollTop()) < c.scrollSensitivity && (d = this.document.scrollTop(this.document.scrollTop() + c.scrollSpeed)),
            a.pageX - this.document.scrollLeft() < c.scrollSensitivity ? d = this.document.scrollLeft(this.document.scrollLeft() - c.scrollSpeed) : this.window.width() - (a.pageX - this.document.scrollLeft()) < c.scrollSensitivity && (d = this.document.scrollLeft(this.document.scrollLeft() + c.scrollSpeed)));
            return d
        },
        _mouseDrag: function(a) {
            var c;
            var d = this.options;
            this.position = this._generatePosition(a);
            this.positionAbs = this._convertPositionTo("absolute");
            this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px");
            this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px");
            d.scroll && !1 !== this._scroll(a) && (this._refreshItemPositions(!0),
            b.ui.ddmanager && !d.dropBehaviour && b.ui.ddmanager.prepareOffsets(this, a));
            this.dragDirection = {
                vertical: this._getDragVerticalDirection(),
                horizontal: this._getDragHorizontalDirection()
            };
            for (d = this.items.length - 1; 0 <= d; d--) {
                var f = this.items[d];
                var h = f.item[0];
                if ((c = this._intersectsWithPointer(f)) && f.instance === this.currentContainer && h !== this.currentItem[0] && this.placeholder[1 === c ? "next" : "prev"]()[0] !== h && !b.contains(this.placeholder[0], h) && ("semi-dynamic" === this.options.type ? !b.contains(this.element[0], h) : 1)) {
                    this.direction = 1 === c ? "down" : "up";
                    if ("pointer" === this.options.tolerance || this._intersectsWithSides(f))
                        this._rearrange(a, f);
                    else
                        break;
                    this._trigger("change", a, this._uiHash());
                    break
                }
            }
            this._contactContainers(a);
            b.ui.ddmanager && b.ui.ddmanager.drag(this, a);
            this._trigger("sort", a, this._uiHash());
            this.lastPositionAbs = this.positionAbs;
            return !1
        },
        _mouseStop: function(a, c) {
            if (a) {
                b.ui.ddmanager && !this.options.dropBehaviour && b.ui.ddmanager.drop(this, a);
                if (this.options.revert) {
                    var d = this;
                    c = this.placeholder.offset();
                    var f = this.options.axis
                      , h = {};
                    f && "x" !== f || (h.left = c.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft));
                    f && "y" !== f || (h.top = c.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop));
                    this.reverting = !0;
                    b(this.helper).animate(h, parseInt(this.options.revert, 10) || 500, function() {
                        d._clear(a)
                    })
                } else
                    this._clear(a, c);
                return !1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp(new b.Event("mouseup",{
                    target: null
                }));
                "original" === this.options.helper ? (this.currentItem.css(this._storedCSS),
                this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
                for (var a = this.containers.length - 1; 0 <= a; a--)
                    this.containers[a]._trigger("deactivate", null, this._uiHash(this)),
                    this.containers[a].containerCache.over && (this.containers[a]._trigger("out", null, this._uiHash(this)),
                    this.containers[a].containerCache.over = 0)
            }
            this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(),
            b.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }),
            this.domPosition.prev ? b(this.domPosition.prev).after(this.currentItem) : b(this.domPosition.parent).prepend(this.currentItem));
            return this
        },
        serialize: function(a) {
            var c = this._getItemsAsjQuery(a && a.connected)
              , d = [];
            a = a || {};
            b(c).each(function() {
                var f = (b(a.item || this).attr(a.attribute || "id") || "").match(a.expression || /(.+)[\-=_](.+)/);
                f && d.push((a.key || f[1] + "[]") + "=" + (a.key && a.expression ? f[1] : f[2]))
            });
            !d.length && a.key && d.push(a.key + "=");
            return d.join("&")
        },
        toArray: function(a) {
            var c = this._getItemsAsjQuery(a && a.connected)
              , d = [];
            a = a || {};
            c.each(function() {
                d.push(b(a.item || this).attr(a.attribute || "id") || "")
            });
            return d
        },
        _intersectsWith: function(a) {
            var c = this.positionAbs.left
              , d = c + this.helperProportions.width
              , f = this.positionAbs.top
              , h = f + this.helperProportions.height
              , n = a.left
              , r = n + a.width
              , z = a.top
              , A = z + a.height
              , L = this.offset.click.top
              , U = this.offset.click.left;
            L = "x" === this.options.axis || f + L > z && f + L < A;
            U = "y" === this.options.axis || c + U > n && c + U < r;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > a[this.floating ? "width" : "height"] ? L && U : n < c + this.helperProportions.width / 2 && d - this.helperProportions.width / 2 < r && z < f + this.helperProportions.height / 2 && h - this.helperProportions.height / 2 < A
        },
        _intersectsWithPointer: function(a) {
            var c = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, a.top, a.height);
            a = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, a.left, a.width);
            if (!c || !a)
                return !1;
            c = this.dragDirection.vertical;
            a = this.dragDirection.horizontal;
            return this.floating ? "right" === a || "down" === c ? 2 : 1 : c && ("down" === c ? 2 : 1)
        },
        _intersectsWithSides: function(a) {
            var c = this._isOverAxis(this.positionAbs.top + this.offset.click.top, a.top + a.height / 2, a.height);
            a = this._isOverAxis(this.positionAbs.left + this.offset.click.left, a.left + a.width / 2, a.width);
            var d = this.dragDirection.vertical
              , f = this.dragDirection.horizontal;
            return this.floating && f ? "right" === f && a || "left" === f && !a : d && ("down" === d && c || "up" === d && !c)
        },
        _getDragVerticalDirection: function() {
            var a = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== a && (0 < a ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var a = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== a && (0 < a ? "right" : "left")
        },
        refresh: function(a) {
            this._refreshItems(a);
            this._setHandleClassName();
            this.refreshPositions();
            return this
        },
        _connectWith: function() {
            var a = this.options;
            return a.connectWith.constructor === String ? [a.connectWith] : a.connectWith
        },
        _getItemsAsjQuery: function(a) {
            function c() {
                h.push(this)
            }
            var d, f, h = [], n = [], r = this._connectWith();
            if (r && a)
                for (a = r.length - 1; 0 <= a; a--) {
                    var z = b(r[a], this.document[0]);
                    for (d = z.length - 1; 0 <= d; d--)
                        (f = b.data(z[d], this.widgetFullName)) && f !== this && !f.options.disabled && n.push(["function" === typeof f.options.items ? f.options.items.call(f.element) : b(f.options.items, f.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), f])
                }
            n.push(["function" === typeof this.options.items ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : b(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
            for (a = n.length - 1; 0 <= a; a--)
                n[a][0].each(c);
            return b(h)
        },
        _removeCurrentsFromItems: function() {
            var a = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = b.grep(this.items, function(c) {
                for (var d = 0; d < a.length; d++)
                    if (a[d] === c.item[0])
                        return !1;
                return !0
            })
        },
        _refreshItems: function(a) {
            this.items = [];
            this.containers = [this];
            var c, d, f, h, n = this.items, r = [["function" === typeof this.options.items ? this.options.items.call(this.element[0], a, {
                item: this.currentItem
            }) : b(this.options.items, this.element), this]];
            if ((h = this._connectWith()) && this.ready)
                for (c = h.length - 1; 0 <= c; c--) {
                    var z = b(h[c], this.document[0]);
                    for (d = z.length - 1; 0 <= d; d--)
                        (f = b.data(z[d], this.widgetFullName)) && f !== this && !f.options.disabled && (r.push(["function" === typeof f.options.items ? f.options.items.call(f.element[0], a, {
                            item: this.currentItem
                        }) : b(f.options.items, f.element), f]),
                        this.containers.push(f))
                }
            for (c = r.length - 1; 0 <= c; c--)
                for (a = r[c][1],
                z = r[c][0],
                d = 0,
                h = z.length; d < h; d++)
                    f = b(z[d]),
                    f.data(this.widgetName + "-item", a),
                    n.push({
                        item: f,
                        instance: a,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
        },
        _refreshItemPositions: function(a) {
            var c;
            for (c = this.items.length - 1; 0 <= c; c--) {
                var d = this.items[c];
                if (!this.currentContainer || d.instance === this.currentContainer || d.item[0] === this.currentItem[0]) {
                    var f = this.options.toleranceElement ? b(this.options.toleranceElement, d.item) : d.item;
                    a || (d.width = f.outerWidth(),
                    d.height = f.outerHeight());
                    f = f.offset();
                    d.left = f.left;
                    d.top = f.top
                }
            }
        },
        refreshPositions: function(a) {
            this.floating = this.items.length ? "x" === this.options.axis || this._isFloating(this.items[0].item) : !1;
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            this._refreshItemPositions(a);
            if (this.options.custom && this.options.custom.refreshContainers)
                this.options.custom.refreshContainers.call(this);
            else
                for (a = this.containers.length - 1; 0 <= a; a--) {
                    var c = this.containers[a].element.offset();
                    this.containers[a].containerCache.left = c.left;
                    this.containers[a].containerCache.top = c.top;
                    this.containers[a].containerCache.width = this.containers[a].element.outerWidth();
                    this.containers[a].containerCache.height = this.containers[a].element.outerHeight()
                }
            return this
        },
        _createPlaceholder: function(a) {
            a = a || this;
            var c = a.options;
            if (!c.placeholder || c.placeholder.constructor === String) {
                var d = c.placeholder;
                var f = a.currentItem[0].nodeName.toLowerCase();
                c.placeholder = {
                    element: function() {
                        var h = b("<" + f + ">", a.document[0]);
                        a._addClass(h, "ui-sortable-placeholder", d || a.currentItem[0].className)._removeClass(h, "ui-sortable-helper");
                        "tbody" === f ? a._createTrPlaceholder(a.currentItem.find("tr").eq(0), b("<tr>", a.document[0]).appendTo(h)) : "tr" === f ? a._createTrPlaceholder(a.currentItem, h) : "img" === f && h.attr("src", a.currentItem.attr("src"));
                        d || h.css("visibility", "hidden");
                        return h
                    },
                    update: function(h, n) {
                        if (!d || c.forcePlaceholderSize)
                            n.height() && (!c.forcePlaceholderSize || "tbody" !== f && "tr" !== f) || n.height(a.currentItem.innerHeight() - parseInt(a.currentItem.css("paddingTop") || 0, 10) - parseInt(a.currentItem.css("paddingBottom") || 0, 10)),
                            n.width() || n.width(a.currentItem.innerWidth() - parseInt(a.currentItem.css("paddingLeft") || 0, 10) - parseInt(a.currentItem.css("paddingRight") || 0, 10))
                    }
                }
            }
            a.placeholder = b(c.placeholder.element.call(a.element, a.currentItem));
            a.currentItem.after(a.placeholder);
            c.placeholder.update(a, a.placeholder)
        },
        _createTrPlaceholder: function(a, c) {
            var d = this;
            a.children().each(function() {
                b("<td>&#160;</td>", d.document[0]).attr("colspan", b(this).attr("colspan") || 1).appendTo(c)
            })
        },
        _contactContainers: function(a) {
            var c, d, f, h = f = null;
            for (c = this.containers.length - 1; 0 <= c; c--)
                b.contains(this.currentItem[0], this.containers[c].element[0]) || (this._intersectsWith(this.containers[c].containerCache) ? f && b.contains(this.containers[c].element[0], f.element[0]) || (f = this.containers[c],
                h = c) : this.containers[c].containerCache.over && (this.containers[c]._trigger("out", a, this._uiHash(this)),
                this.containers[c].containerCache.over = 0));
            if (f)
                if (1 === this.containers.length)
                    this.containers[h].containerCache.over || (this.containers[h]._trigger("over", a, this._uiHash(this)),
                    this.containers[h].containerCache.over = 1);
                else {
                    c = 1E4;
                    var n = null;
                    f = (d = f.floating || this._isFloating(this.currentItem)) ? "left" : "top";
                    var r = d ? "width" : "height";
                    var z = d ? "pageX" : "pageY";
                    for (d = this.items.length - 1; 0 <= d; d--)
                        if (b.contains(this.containers[h].element[0], this.items[d].item[0]) && this.items[d].item[0] !== this.currentItem[0]) {
                            var A = this.items[d].item.offset()[f];
                            var L = !1;
                            a[z] - A > this.items[d][r] / 2 && (L = !0);
                            Math.abs(a[z] - A) < c && (c = Math.abs(a[z] - A),
                            n = this.items[d],
                            this.direction = L ? "up" : "down")
                        }
                    if (n || this.options.dropOnEmpty)
                        this.currentContainer === this.containers[h] ? this.currentContainer.containerCache.over || (this.containers[h]._trigger("over", a, this._uiHash()),
                        this.currentContainer.containerCache.over = 1) : (n ? this._rearrange(a, n, null, !0) : this._rearrange(a, null, this.containers[h].element, !0),
                        this._trigger("change", a, this._uiHash()),
                        this.containers[h]._trigger("change", a, this._uiHash(this)),
                        this.currentContainer = this.containers[h],
                        this.options.placeholder.update(this.currentContainer, this.placeholder),
                        this.scrollParent = this.placeholder.scrollParent(),
                        this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()),
                        this.containers[h]._trigger("over", a, this._uiHash(this)),
                        this.containers[h].containerCache.over = 1)
                }
        },
        _createHelper: function(a) {
            var c = this.options;
            a = "function" === typeof c.helper ? b(c.helper.apply(this.element[0], [a, this.currentItem])) : "clone" === c.helper ? this.currentItem.clone() : this.currentItem;
            a.parents("body").length || this.appendTo[0].appendChild(a[0]);
            a[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            });
            a[0].style.width && !c.forceHelperSize || a.width(this.currentItem.width());
            a[0].style.height && !c.forceHelperSize || a.height(this.currentItem.height());
            return a
        },
        _adjustOffsetFromHelper: function(a) {
            "string" === typeof a && (a = a.split(" "));
            Array.isArray(a) && (a = {
                left: +a[0],
                top: +a[1] || 0
            });
            "left"in a && (this.offset.click.left = a.left + this.margins.left);
            "right"in a && (this.offset.click.left = this.helperProportions.width - a.right + this.margins.left);
            "top"in a && (this.offset.click.top = a.top + this.margins.top);
            "bottom"in a && (this.offset.click.top = this.helperProportions.height - a.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var a = this.offsetParent.offset();
            "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && b.contains(this.scrollParent[0], this.offsetParent[0]) && (a.left += this.scrollParent.scrollLeft(),
            a.top += this.scrollParent.scrollTop());
            if (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && b.ui.ie)
                a = {
                    top: 0,
                    left: 0
                };
            return {
                top: a.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: a.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var a = this.currentItem.position();
                return {
                    top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var a = this.options;
            "parent" === a.containment && (a.containment = this.helper[0].parentNode);
            if ("document" === a.containment || "window" === a.containment)
                this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === a.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === a.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
            if (!/^(document|window|parent)$/.test(a.containment)) {
                var c = b(a.containment)[0];
                a = b(a.containment).offset();
                var d = "hidden" !== b(c).css("overflow");
                this.containment = [a.left + (parseInt(b(c).css("borderLeftWidth"), 10) || 0) + (parseInt(b(c).css("paddingLeft"), 10) || 0) - this.margins.left, a.top + (parseInt(b(c).css("borderTopWidth"), 10) || 0) + (parseInt(b(c).css("paddingTop"), 10) || 0) - this.margins.top, a.left + (d ? Math.max(c.scrollWidth, c.offsetWidth) : c.offsetWidth) - (parseInt(b(c).css("borderLeftWidth"), 10) || 0) - (parseInt(b(c).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, a.top + (d ? Math.max(c.scrollHeight, c.offsetHeight) : c.offsetHeight) - (parseInt(b(c).css("borderTopWidth"), 10) || 0) - (parseInt(b(c).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
            }
        },
        _convertPositionTo: function(a, c) {
            c || (c = this.position);
            a = "absolute" === a ? 1 : -1;
            var d = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && b.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent
              , f = /(html|body)/i.test(d[0].tagName);
            return {
                top: c.top + this.offset.relative.top * a + this.offset.parent.top * a - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : f ? 0 : d.scrollTop()) * a,
                left: c.left + this.offset.relative.left * a + this.offset.parent.left * a - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : f ? 0 : d.scrollLeft()) * a
            }
        },
        _generatePosition: function(a) {
            var c = this.options;
            var d = a.pageX;
            var f = a.pageY;
            var h = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && b.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent
              , n = /(html|body)/i.test(h[0].tagName);
            "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset());
            this.originalPosition && (this.containment && (a.pageX - this.offset.click.left < this.containment[0] && (d = this.containment[0] + this.offset.click.left),
            a.pageY - this.offset.click.top < this.containment[1] && (f = this.containment[1] + this.offset.click.top),
            a.pageX - this.offset.click.left > this.containment[2] && (d = this.containment[2] + this.offset.click.left),
            a.pageY - this.offset.click.top > this.containment[3] && (f = this.containment[3] + this.offset.click.top)),
            c.grid && (f = this.originalPageY + Math.round((f - this.originalPageY) / c.grid[1]) * c.grid[1],
            f = this.containment ? f - this.offset.click.top >= this.containment[1] && f - this.offset.click.top <= this.containment[3] ? f : f - this.offset.click.top >= this.containment[1] ? f - c.grid[1] : f + c.grid[1] : f,
            d = this.originalPageX + Math.round((d - this.originalPageX) / c.grid[0]) * c.grid[0],
            d = this.containment ? d - this.offset.click.left >= this.containment[0] && d - this.offset.click.left <= this.containment[2] ? d : d - this.offset.click.left >= this.containment[0] ? d - c.grid[0] : d + c.grid[0] : d));
            return {
                top: f - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : n ? 0 : h.scrollTop()),
                left: d - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : n ? 0 : h.scrollLeft())
            }
        },
        _rearrange: function(a, c, d, f) {
            d ? d[0].appendChild(this.placeholder[0]) : c.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? c.item[0] : c.item[0].nextSibling);
            var h = this.counter = this.counter ? ++this.counter : 1;
            this._delay(function() {
                h === this.counter && this.refreshPositions(!f)
            })
        },
        _clear: function(a, c) {
            function d(n, r, z) {
                return function(A) {
                    z._trigger(n, A, r._uiHash(r))
                }
            }
            this.reverting = !1;
            var f, h = [];
            !this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem);
            this._noFinalSort = null;
            if (this.helper[0] === this.currentItem[0]) {
                for (f in this._storedCSS)
                    if ("auto" === this._storedCSS[f] || "static" === this._storedCSS[f])
                        this._storedCSS[f] = "";
                this.currentItem.css(this._storedCSS);
                this._removeClass(this.currentItem, "ui-sortable-helper")
            } else
                this.currentItem.show();
            this.fromOutside && !c && h.push(function(n) {
                this._trigger("receive", n, this._uiHash(this.fromOutside))
            });
            !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || c || h.push(function(n) {
                this._trigger("update", n, this._uiHash())
            });
            this === this.currentContainer || c || (h.push(function(n) {
                this._trigger("remove", n, this._uiHash())
            }),
            h.push(function(n) {
                return function(r) {
                    n._trigger("receive", r, this._uiHash(this))
                }
            }
            .call(this, this.currentContainer)),
            h.push(function(n) {
                return function(r) {
                    n._trigger("update", r, this._uiHash(this))
                }
            }
            .call(this, this.currentContainer)));
            for (f = this.containers.length - 1; 0 <= f; f--)
                c || h.push(d("deactivate", this, this.containers[f])),
                this.containers[f].containerCache.over && (h.push(d("out", this, this.containers[f])),
                this.containers[f].containerCache.over = 0);
            this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor),
            this.storedStylesheet.remove());
            this._storedOpacity && this.helper.css("opacity", this._storedOpacity);
            this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex);
            this.dragging = !1;
            c || this._trigger("beforeStop", a, this._uiHash());
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
            this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(),
            this.helper = null);
            if (!c) {
                for (f = 0; f < h.length; f++)
                    h[f].call(this, a);
                this._trigger("stop", a, this._uiHash())
            }
            this.fromOutside = !1;
            return !this.cancelHelperRemoval
        },
        _trigger: function() {
            !1 === b.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
        },
        _uiHash: function(a) {
            var c = a || this;
            return {
                helper: c.helper,
                placeholder: c.placeholder || b([]),
                position: c.position,
                originalPosition: c.originalPosition,
                offset: c.positionAbs,
                item: c.currentItem,
                sender: a ? a.element : null
            }
        }
    });
    b.widget("ui.accordion", {
        version: "1.13.2",
        options: {
            active: 0,
            animate: {},
            classes: {
                "ui-accordion-header": "ui-corner-top",
                "ui-accordion-header-collapsed": "ui-corner-all",
                "ui-accordion-content": "ui-corner-bottom"
            },
            collapsible: !1,
            event: "click",
            header: function(a) {
                return a.find("> li > :first-child").add(a.find("> :not(li)").even())
            },
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        hideProps: {
            borderTopWidth: "hide",
            borderBottomWidth: "hide",
            paddingTop: "hide",
            paddingBottom: "hide",
            height: "hide"
        },
        showProps: {
            borderTopWidth: "show",
            borderBottomWidth: "show",
            paddingTop: "show",
            paddingBottom: "show",
            height: "show"
        },
        _create: function() {
            var a = this.options;
            this.prevShow = this.prevHide = b();
            this._addClass("ui-accordion", "ui-widget ui-helper-reset");
            this.element.attr("role", "tablist");
            a.collapsible || !1 !== a.active && null != a.active || (a.active = 0);
            this._processPanels();
            0 > a.active && (a.active += this.headers.length);
            this._refresh()
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: this.active.length ? this.active.next() : b()
            }
        },
        _createIcons: function() {
            var a = this.options.icons;
            if (a) {
                var c = b("<span>");
                this._addClass(c, "ui-accordion-header-icon", "ui-icon " + a.header);
                c.prependTo(this.headers);
                c = this.active.children(".ui-accordion-header-icon");
                this._removeClass(c, a.header)._addClass(c, null, a.activeHeader)._addClass(this.headers, "ui-accordion-icons")
            }
        },
        _destroyIcons: function() {
            this._removeClass(this.headers, "ui-accordion-icons");
            this.headers.children(".ui-accordion-header-icon").remove()
        },
        _destroy: function() {
            this.element.removeAttr("role");
            this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId();
            this._destroyIcons();
            var a = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId();
            "content" !== this.options.heightStyle && a.css("height", "")
        },
        _setOption: function(a, c) {
            "active" === a ? this._activate(c) : ("event" === a && (this.options.event && this._off(this.headers, this.options.event),
            this._setupEvents(c)),
            this._super(a, c),
            "collapsible" !== a || c || !1 !== this.options.active || this._activate(0),
            "icons" === a && (this._destroyIcons(),
            c && this._createIcons()))
        },
        _setOptionDisabled: function(a) {
            this._super(a);
            this.element.attr("aria-disabled", a);
            this._toggleClass(null, "ui-state-disabled", !!a);
            this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!a)
        },
        _keydown: function(a) {
            if (!a.altKey && !a.ctrlKey) {
                var c = b.ui.keyCode
                  , d = this.headers.length
                  , f = this.headers.index(a.target)
                  , h = !1;
                switch (a.keyCode) {
                case c.RIGHT:
                case c.DOWN:
                    h = this.headers[(f + 1) % d];
                    break;
                case c.LEFT:
                case c.UP:
                    h = this.headers[(f - 1 + d) % d];
                    break;
                case c.SPACE:
                case c.ENTER:
                    this._eventHandler(a);
                    break;
                case c.HOME:
                    h = this.headers[0];
                    break;
                case c.END:
                    h = this.headers[d - 1]
                }
                h && (b(a.target).attr("tabIndex", -1),
                b(h).attr("tabIndex", 0),
                b(h).trigger("focus"),
                a.preventDefault())
            }
        },
        _panelKeyDown: function(a) {
            a.keyCode === b.ui.keyCode.UP && a.ctrlKey && b(a.currentTarget).prev().trigger("focus")
        },
        refresh: function() {
            var a = this.options;
            this._processPanels();
            !1 === a.active && !0 === a.collapsible || !this.headers.length ? (a.active = !1,
            this.active = b()) : !1 === a.active ? this._activate(0) : this.active.length && !b.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (a.active = !1,
            this.active = b()) : this._activate(Math.max(0, a.active - 1)) : a.active = this.headers.index(this.active);
            this._destroyIcons();
            this._refresh()
        },
        _processPanels: function() {
            var a = this.headers
              , c = this.panels;
            this.headers = "function" === typeof this.options.header ? this.options.header(this.element) : this.element.find(this.options.header);
            this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default");
            this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide();
            this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content");
            c && (this._off(a.not(this.headers)),
            this._off(c.not(this.panels)))
        },
        _refresh: function() {
            var a = this.options
              , c = a.heightStyle
              , d = this.element.parent();
            this.active = this._findActive(a.active);
            this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed");
            this._addClass(this.active.next(), "ui-accordion-content-active");
            this.active.next().show();
            this.headers.attr("role", "tab").each(function() {
                var h = b(this)
                  , n = h.uniqueId().attr("id")
                  , r = h.next()
                  , z = r.uniqueId().attr("id");
                h.attr("aria-controls", z);
                r.attr("aria-labelledby", n)
            }).next().attr("role", "tabpanel");
            this.headers.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }).next().attr({
                "aria-hidden": "true"
            }).hide();
            this.active.length ? this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }).next().attr({
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0);
            this._createIcons();
            this._setupEvents(a.event);
            if ("fill" === c) {
                var f = d.height();
                this.element.siblings(":visible").each(function() {
                    var h = b(this)
                      , n = h.css("position");
                    "absolute" !== n && "fixed" !== n && (f -= h.outerHeight(!0))
                });
                this.headers.each(function() {
                    f -= b(this).outerHeight(!0)
                });
                this.headers.next().each(function() {
                    b(this).height(Math.max(0, f - b(this).innerHeight() + b(this).height()))
                }).css("overflow", "auto")
            } else
                "auto" === c && (f = 0,
                this.headers.next().each(function() {
                    var h = b(this).is(":visible");
                    h || b(this).show();
                    f = Math.max(f, b(this).css("height", "").height());
                    h || b(this).hide()
                }).height(f))
        },
        _activate: function(a) {
            a = this._findActive(a)[0];
            a !== this.active[0] && (a = a || this.active[0],
            this._eventHandler({
                target: a,
                currentTarget: a,
                preventDefault: b.noop
            }))
        },
        _findActive: function(a) {
            return "number" === typeof a ? this.headers.eq(a) : b()
        },
        _setupEvents: function(a) {
            var c = {
                keydown: "_keydown"
            };
            a && b.each(a.split(" "), function(d, f) {
                c[f] = "_eventHandler"
            });
            this._off(this.headers.add(this.headers.next()));
            this._on(this.headers, c);
            this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            });
            this._hoverable(this.headers);
            this._focusable(this.headers)
        },
        _eventHandler: function(a) {
            var c, d = this.options, f = this.active, h = b(a.currentTarget), n = (c = h[0] === f[0]) && d.collapsible, r = n ? b() : h.next(), z = f.next();
            r = {
                oldHeader: f,
                oldPanel: z,
                newHeader: n ? b() : h,
                newPanel: r
            };
            a.preventDefault();
            c && !d.collapsible || !1 === this._trigger("beforeActivate", a, r) || (d.active = n ? !1 : this.headers.index(h),
            this.active = c ? b() : h,
            this._toggle(r),
            this._removeClass(f, "ui-accordion-header-active", "ui-state-active"),
            d.icons && (a = f.children(".ui-accordion-header-icon"),
            this._removeClass(a, null, d.icons.activeHeader)._addClass(a, null, d.icons.header)),
            c || (this._removeClass(h, "ui-accordion-header-collapsed")._addClass(h, "ui-accordion-header-active", "ui-state-active"),
            d.icons && (c = h.children(".ui-accordion-header-icon"),
            this._removeClass(c, null, d.icons.header)._addClass(c, null, d.icons.activeHeader)),
            this._addClass(h.next(), "ui-accordion-content-active")))
        },
        _toggle: function(a) {
            var c = a.newPanel
              , d = this.prevShow.length ? this.prevShow : a.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0);
            this.prevShow = c;
            this.prevHide = d;
            this.options.animate ? this._animate(c, d, a) : (d.hide(),
            c.show(),
            this._toggleComplete(a));
            d.attr({
                "aria-hidden": "true"
            });
            d.prev().attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            });
            c.length && d.length ? d.prev().attr({
                tabIndex: -1,
                "aria-expanded": "false"
            }) : c.length && this.headers.filter(function() {
                return 0 === parseInt(b(this).attr("tabIndex"), 10)
            }).attr("tabIndex", -1);
            c.attr("aria-hidden", "false").prev().attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _animate: function(a, c, d) {
            var f, h, n = this, r = 0, z = a.css("box-sizing"), A = a.length && (!c.length || a.index() < c.index()), L = this.options.animate || {};
            A = A && L.down || L;
            var U = function() {
                n._toggleComplete(d)
            };
            "number" === typeof A && (h = A);
            "string" === typeof A && (f = A);
            f = f || A.easing || L.easing;
            h = h || A.duration || L.duration;
            if (!c.length)
                return a.animate(this.showProps, h, f, U);
            if (!a.length)
                return c.animate(this.hideProps, h, f, U);
            var G = a.show().outerHeight();
            c.animate(this.hideProps, {
                duration: h,
                easing: f,
                step: function(Q, V) {
                    V.now = Math.round(Q)
                }
            });
            a.hide().animate(this.showProps, {
                duration: h,
                easing: f,
                complete: U,
                step: function(Q, V) {
                    V.now = Math.round(Q);
                    "height" !== V.prop ? "content-box" === z && (r += V.now) : "content" !== n.options.heightStyle && (V.now = Math.round(G - c.outerHeight() - r),
                    r = 0)
                }
            })
        },
        _toggleComplete: function(a) {
            var c = a.oldPanel
              , d = c.prev();
            this._removeClass(c, "ui-accordion-content-active");
            this._removeClass(d, "ui-accordion-header-active")._addClass(d, "ui-accordion-header-collapsed");
            c.length && (c.parent()[0].className = c.parent()[0].className);
            this._trigger("activate", null, a)
        }
    });
    b.widget("ui.menu", {
        version: "1.13.2",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-caret-1-e"
            },
            items: "> *",
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element;
            this.mouseHandled = !1;
            this.lastMousePosition = {
                x: null,
                y: null
            };
            this.element.uniqueId().attr({
                role: this.options.role,
                tabIndex: 0
            });
            this._addClass("ui-menu", "ui-widget ui-widget-content");
            this._on({
                "mousedown .ui-menu-item": function(a) {
                    a.preventDefault();
                    this._activateItem(a)
                },
                "click .ui-menu-item": function(a) {
                    var c = b(a.target)
                      , d = b(b.ui.safeActiveElement(this.document[0]));
                    !this.mouseHandled && c.not(".ui-state-disabled").length && (this.select(a),
                    a.isPropagationStopped() || (this.mouseHandled = !0),
                    c.has(".ui-menu").length ? this.expand(a) : !this.element.is(":focus") && d.closest(".ui-menu").length && (this.element.trigger("focus", [!0]),
                    this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": "_activateItem",
                "mousemove .ui-menu-item": "_activateItem",
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(a, c) {
                    var d = this.active || this._menuItems().first();
                    c || this.focus(a, d)
                },
                blur: function(a) {
                    this._delay(function() {
                        b.contains(this.element[0], b.ui.safeActiveElement(this.document[0])) || this.collapseAll(a)
                    })
                },
                keydown: "_keydown"
            });
            this.refresh();
            this._on(this.document, {
                click: function(a) {
                    this._closeOnDocumentClick(a) && this.collapseAll(a, !0);
                    this.mouseHandled = !1
                }
            })
        },
        _activateItem: function(a) {
            if (!this.previousFilter && (a.clientX !== this.lastMousePosition.x || a.clientY !== this.lastMousePosition.y)) {
                this.lastMousePosition = {
                    x: a.clientX,
                    y: a.clientY
                };
                var c = b(a.target).closest(".ui-menu-item")
                  , d = b(a.currentTarget);
                c[0] !== d[0] || d.is(".ui-state-active") || (this._removeClass(d.siblings().children(".ui-state-active"), null, "ui-state-active"),
                this.focus(a, d))
            }
        },
        _destroy: function() {
            var a = this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show();
            a.children().each(function() {
                var c = b(this);
                c.data("ui-menu-submenu-caret") && c.remove()
            })
        },
        _keydown: function(a) {
            var c = !0;
            switch (a.keyCode) {
            case b.ui.keyCode.PAGE_UP:
                this.previousPage(a);
                break;
            case b.ui.keyCode.PAGE_DOWN:
                this.nextPage(a);
                break;
            case b.ui.keyCode.HOME:
                this._move("first", "first", a);
                break;
            case b.ui.keyCode.END:
                this._move("last", "last", a);
                break;
            case b.ui.keyCode.UP:
                this.previous(a);
                break;
            case b.ui.keyCode.DOWN:
                this.next(a);
                break;
            case b.ui.keyCode.LEFT:
                this.collapse(a);
                break;
            case b.ui.keyCode.RIGHT:
                this.active && !this.active.is(".ui-state-disabled") && this.expand(a);
                break;
            case b.ui.keyCode.ENTER:
            case b.ui.keyCode.SPACE:
                this._activate(a);
                break;
            case b.ui.keyCode.ESCAPE:
                this.collapse(a);
                break;
            default:
                c = !1;
                var d = this.previousFilter || "";
                var f = !1;
                var h = 96 <= a.keyCode && 105 >= a.keyCode ? (a.keyCode - 96).toString() : String.fromCharCode(a.keyCode);
                clearTimeout(this.filterTimer);
                h === d ? f = !0 : h = d + h;
                d = this._filterMenuItems(h);
                d = f && -1 !== d.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : d;
                d.length || (h = String.fromCharCode(a.keyCode),
                d = this._filterMenuItems(h));
                d.length ? (this.focus(a, d),
                this.previousFilter = h,
                this.filterTimer = this._delay(function() {
                    delete this.previousFilter
                }, 1E3)) : delete this.previousFilter
            }
            c && a.preventDefault()
        },
        _activate: function(a) {
            this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(a) : this.select(a))
        },
        refresh: function() {
            var a = this
              , c = this.options.icons.submenu;
            var d = this.element.find(this.options.menus);
            this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length);
            var f = d.filter(":not(.ui-menu)").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var n = b(this)
                  , r = n.prev()
                  , z = b("<span>").data("ui-menu-submenu-caret", !0);
                a._addClass(z, "ui-menu-icon", "ui-icon " + c);
                r.attr("aria-haspopup", "true").prepend(z);
                n.attr("aria-labelledby", r.attr("id"))
            });
            this._addClass(f, "ui-menu", "ui-widget ui-widget-content ui-front");
            f = d.add(this.element).find(this.options.items);
            f.not(".ui-menu-item").each(function() {
                var n = b(this);
                a._isDivider(n) && a._addClass(n, "ui-menu-divider", "ui-widget-content")
            });
            d = f.not(".ui-menu-item, .ui-menu-divider");
            var h = d.children().not(".ui-menu").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            });
            this._addClass(d, "ui-menu-item")._addClass(h, "ui-menu-item-wrapper");
            f.filter(".ui-state-disabled").attr("aria-disabled", "true");
            this.active && !b.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        _setOption: function(a, c) {
            if ("icons" === a) {
                var d = this.element.find(".ui-menu-icon");
                this._removeClass(d, null, this.options.icons.submenu)._addClass(d, null, c.submenu)
            }
            this._super(a, c)
        },
        _setOptionDisabled: function(a) {
            this._super(a);
            this.element.attr("aria-disabled", String(a));
            this._toggleClass(null, "ui-state-disabled", !!a)
        },
        focus: function(a, c) {
            this.blur(a, a && "focus" === a.type);
            this._scrollIntoView(c);
            this.active = c.first();
            var d = this.active.children(".ui-menu-item-wrapper");
            this._addClass(d, null, "ui-state-active");
            this.options.role && this.element.attr("aria-activedescendant", d.attr("id"));
            d = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper");
            this._addClass(d, null, "ui-state-active");
            a && "keydown" === a.type ? this._close() : this.timer = this._delay(function() {
                this._close()
            }, this.delay);
            d = c.children(".ui-menu");
            d.length && a && /^mouse/.test(a.type) && this._startOpening(d);
            this.activeMenu = c.parent();
            this._trigger("focus", a, {
                item: c
            })
        },
        _scrollIntoView: function(a) {
            if (this._hasScroll()) {
                var c = parseFloat(b.css(this.activeMenu[0], "borderTopWidth")) || 0;
                var d = parseFloat(b.css(this.activeMenu[0], "paddingTop")) || 0;
                c = a.offset().top - this.activeMenu.offset().top - c - d;
                d = this.activeMenu.scrollTop();
                var f = this.activeMenu.height();
                a = a.outerHeight();
                0 > c ? this.activeMenu.scrollTop(d + c) : c + a > f && this.activeMenu.scrollTop(d + c - f + a)
            }
        },
        blur: function(a, c) {
            c || clearTimeout(this.timer);
            this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"),
            this._trigger("blur", a, {
                item: this.active
            }),
            this.active = null)
        },
        _startOpening: function(a) {
            clearTimeout(this.timer);
            "true" === a.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close();
                this._open(a)
            }, this.delay))
        },
        _open: function(a) {
            var c = b.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer);
            this.element.find(".ui-menu").not(a.parents(".ui-menu")).hide().attr("aria-hidden", "true");
            a.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(c)
        },
        collapseAll: function(a, c) {
            clearTimeout(this.timer);
            this.timer = this._delay(function() {
                var d = c ? this.element : b(a && a.target).closest(this.element.find(".ui-menu"));
                d.length || (d = this.element);
                this._close(d);
                this.blur(a);
                this._removeClass(d.find(".ui-state-active"), null, "ui-state-active");
                this.activeMenu = d
            }, c ? 0 : this.delay)
        },
        _close: function(a) {
            a || (a = this.active ? this.active.parent() : this.element);
            a.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
        },
        _closeOnDocumentClick: function(a) {
            return !b(a.target).closest(".ui-menu").length
        },
        _isDivider: function(a) {
            return !/[^\-\u2014\u2013\s]/.test(a.text())
        },
        collapse: function(a) {
            var c = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            c && c.length && (this._close(),
            this.focus(a, c))
        },
        expand: function(a) {
            var c = this.active && this._menuItems(this.active.children(".ui-menu")).first();
            c && c.length && (this._open(c.parent()),
            this._delay(function() {
                this.focus(a, c)
            }))
        },
        next: function(a) {
            this._move("next", "first", a)
        },
        previous: function(a) {
            this._move("prev", "last", a)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _menuItems: function(a) {
            return (a || this.element).find(this.options.items).filter(".ui-menu-item")
        },
        _move: function(a, c, d) {
            var f;
            this.active && (f = "first" === a || "last" === a ? this.active["first" === a ? "prevAll" : "nextAll"](".ui-menu-item").last() : this.active[a + "All"](".ui-menu-item").first());
            f && f.length && this.active || (f = this._menuItems(this.activeMenu)[c]());
            this.focus(d, f)
        },
        nextPage: function(a) {
            var c;
            if (!this.active)
                this.next(a);
            else if (!this.isLastItem())
                if (this._hasScroll()) {
                    var d = this.active.offset().top;
                    var f = this.element.innerHeight();
                    0 === b.fn.jquery.indexOf("3.2.") && (f += this.element[0].offsetHeight - this.element.outerHeight());
                    this.active.nextAll(".ui-menu-item").each(function() {
                        c = b(this);
                        return 0 > c.offset().top - d - f
                    });
                    this.focus(a, c)
                } else
                    this.focus(a, this._menuItems(this.activeMenu)[this.active ? "last" : "first"]())
        },
        previousPage: function(a) {
            var c;
            if (!this.active)
                this.next(a);
            else if (!this.isFirstItem())
                if (this._hasScroll()) {
                    var d = this.active.offset().top;
                    var f = this.element.innerHeight();
                    0 === b.fn.jquery.indexOf("3.2.") && (f += this.element[0].offsetHeight - this.element.outerHeight());
                    this.active.prevAll(".ui-menu-item").each(function() {
                        c = b(this);
                        return 0 < c.offset().top - d + f
                    });
                    this.focus(a, c)
                } else
                    this.focus(a, this._menuItems(this.activeMenu).first())
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(a) {
            this.active = this.active || b(a.target).closest(".ui-menu-item");
            var c = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(a, !0);
            this._trigger("select", a, c)
        },
        _filterMenuItems: function(a) {
            a = a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
            var c = new RegExp("^" + a,"i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                return c.test(String.prototype.trim.call(b(this).children(".ui-menu-item-wrapper").text()))
            })
        }
    });
    b.widget("ui.autocomplete", {
        version: "1.13.2",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        liveRegionTimer: null,
        _create: function() {
            var a, c, d, f = this.element[0].nodeName.toLowerCase(), h = "textarea" === f;
            f = "input" === f;
            this.isMultiLine = h || !f && this._isContentEditable(this.element);
            this.valueMethod = this.element[h || f ? "val" : "text"];
            this.isNewMenu = !0;
            this._addClass("ui-autocomplete-input");
            this.element.attr("autocomplete", "off");
            this._on(this.element, {
                keydown: function(n) {
                    if (this.element.prop("readOnly"))
                        c = d = a = !0;
                    else {
                        c = d = a = !1;
                        var r = b.ui.keyCode;
                        switch (n.keyCode) {
                        case r.PAGE_UP:
                            a = !0;
                            this._move("previousPage", n);
                            break;
                        case r.PAGE_DOWN:
                            a = !0;
                            this._move("nextPage", n);
                            break;
                        case r.UP:
                            a = !0;
                            this._keyEvent("previous", n);
                            break;
                        case r.DOWN:
                            a = !0;
                            this._keyEvent("next", n);
                            break;
                        case r.ENTER:
                            this.menu.active && (a = !0,
                            n.preventDefault(),
                            this.menu.select(n));
                            break;
                        case r.TAB:
                            this.menu.active && this.menu.select(n);
                            break;
                        case r.ESCAPE:
                            this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term),
                            this.close(n),
                            n.preventDefault());
                            break;
                        default:
                            c = !0,
                            this._searchTimeout(n)
                        }
                    }
                },
                keypress: function(n) {
                    if (a)
                        a = !1,
                        this.isMultiLine && !this.menu.element.is(":visible") || n.preventDefault();
                    else if (!c) {
                        var r = b.ui.keyCode;
                        switch (n.keyCode) {
                        case r.PAGE_UP:
                            this._move("previousPage", n);
                            break;
                        case r.PAGE_DOWN:
                            this._move("nextPage", n);
                            break;
                        case r.UP:
                            this._keyEvent("previous", n);
                            break;
                        case r.DOWN:
                            this._keyEvent("next", n)
                        }
                    }
                },
                input: function(n) {
                    d ? (d = !1,
                    n.preventDefault()) : this._searchTimeout(n)
                },
                focus: function() {
                    this.selectedItem = null;
                    this.previous = this._value()
                },
                blur: function(n) {
                    clearTimeout(this.searching);
                    this.close(n);
                    this._change(n)
                }
            });
            this._initSource();
            this.menu = b("<ul>").appendTo(this._appendTo()).menu({
                role: null
            }).hide().attr({
                unselectable: "on"
            }).menu("instance");
            this._addClass(this.menu.element, "ui-autocomplete", "ui-front");
            this._on(this.menu.element, {
                mousedown: function(n) {
                    n.preventDefault()
                },
                menufocus: function(n, r) {
                    var z;
                    if (this.isNewMenu && (this.isNewMenu = !1,
                    n.originalEvent && /^mouse/.test(n.originalEvent.type))) {
                        this.menu.blur();
                        this.document.one("mousemove", function() {
                            b(n.target).trigger(n.originalEvent)
                        });
                        return
                    }
                    var A = r.item.data("ui-autocomplete-item");
                    !1 !== this._trigger("focus", n, {
                        item: A
                    }) && n.originalEvent && /^key/.test(n.originalEvent.type) && this._value(A.value);
                    (z = r.item.attr("aria-label") || A.value) && String.prototype.trim.call(z).length && (clearTimeout(this.liveRegionTimer),
                    this.liveRegionTimer = this._delay(function() {
                        this.liveRegion.html(b("<div>").text(z))
                    }, 100))
                },
                menuselect: function(n, r) {
                    var z = r.item.data("ui-autocomplete-item")
                      , A = this.previous;
                    this.element[0] !== b.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"),
                    this.previous = A,
                    this._delay(function() {
                        this.previous = A;
                        this.selectedItem = z
                    }));
                    !1 !== this._trigger("select", n, {
                        item: z
                    }) && this._value(z.value);
                    this.term = this._value();
                    this.close(n);
                    this.selectedItem = z
                }
            });
            this.liveRegion = b("<div>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body);
            this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible");
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching);
            this.element.removeAttr("autocomplete");
            this.menu.element.remove();
            this.liveRegion.remove()
        },
        _setOption: function(a, c) {
            this._super(a, c);
            "source" === a && this._initSource();
            "appendTo" === a && this.menu.element.appendTo(this._appendTo());
            "disabled" === a && c && this.xhr && this.xhr.abort()
        },
        _isEventTargetInWidget: function(a) {
            var c = this.menu.element[0];
            return a.target === this.element[0] || a.target === c || b.contains(c, a.target)
        },
        _closeOnClickOutside: function(a) {
            this._isEventTargetInWidget(a) || this.close()
        },
        _appendTo: function() {
            var a = this.options.appendTo;
            a && (a = a.jquery || a.nodeType ? b(a) : this.document.find(a).eq(0));
            a && a[0] || (a = this.element.closest(".ui-front, dialog"));
            a.length || (a = this.document[0].body);
            return a
        },
        _initSource: function() {
            var a = this;
            if (Array.isArray(this.options.source)) {
                var c = this.options.source;
                this.source = function(f, h) {
                    h(b.ui.autocomplete.filter(c, f.term))
                }
            } else if ("string" === typeof this.options.source) {
                var d = this.options.source;
                this.source = function(f, h) {
                    a.xhr && a.xhr.abort();
                    a.xhr = b.ajax({
                        url: d,
                        data: f,
                        dataType: "json",
                        success: function(n) {
                            h(n)
                        },
                        error: function() {
                            h([])
                        }
                    })
                }
            } else
                this.source = this.options.source
        },
        _searchTimeout: function(a) {
            clearTimeout(this.searching);
            this.searching = this._delay(function() {
                var c = this.term === this._value()
                  , d = this.menu.element.is(":visible")
                  , f = a.altKey || a.ctrlKey || a.metaKey || a.shiftKey;
                if (!c || c && !d && !f)
                    this.selectedItem = null,
                    this.search(null, a)
            }, this.options.delay)
        },
        search: function(a, c) {
            a = null != a ? a : this._value();
            this.term = this._value();
            if (a.length < this.options.minLength)
                return this.close(c);
            if (!1 !== this._trigger("search", c))
                return this._search(a)
        },
        _search: function(a) {
            this.pending++;
            this._addClass("ui-autocomplete-loading");
            this.cancelSearch = !1;
            this.source({
                term: a
            }, this._response())
        },
        _response: function() {
            var a = ++this.requestIndex;
            return function(c) {
                a === this.requestIndex && this.__response(c);
                this.pending--;
                this.pending || this._removeClass("ui-autocomplete-loading")
            }
            .bind(this)
        },
        __response: function(a) {
            a && (a = this._normalize(a));
            this._trigger("response", null, {
                content: a
            });
            !this.options.disabled && a && a.length && !this.cancelSearch ? (this._suggest(a),
            this._trigger("open")) : this._close()
        },
        close: function(a) {
            this.cancelSearch = !0;
            this._close(a)
        },
        _close: function(a) {
            this._off(this.document, "mousedown");
            this.menu.element.is(":visible") && (this.menu.element.hide(),
            this.menu.blur(),
            this.isNewMenu = !0,
            this._trigger("close", a))
        },
        _change: function(a) {
            this.previous !== this._value() && this._trigger("change", a, {
                item: this.selectedItem
            })
        },
        _normalize: function(a) {
            return a.length && a[0].label && a[0].value ? a : b.map(a, function(c) {
                return "string" === typeof c ? {
                    label: c,
                    value: c
                } : b.extend({}, c, {
                    label: c.label || c.value,
                    value: c.value || c.label
                })
            })
        },
        _suggest: function(a) {
            var c = this.menu.element.empty();
            this._renderMenu(c, a);
            this.isNewMenu = !0;
            this.menu.refresh();
            c.show();
            this._resizeMenu();
            c.position(b.extend({
                of: this.element
            }, this.options.position));
            this.options.autoFocus && this.menu.next();
            this._on(this.document, {
                mousedown: "_closeOnClickOutside"
            })
        },
        _resizeMenu: function() {
            var a = this.menu.element;
            a.outerWidth(Math.max(a.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(a, c) {
            var d = this;
            b.each(c, function(f, h) {
                d._renderItemData(a, h)
            })
        },
        _renderItemData: function(a, c) {
            return this._renderItem(a, c).data("ui-autocomplete-item", c)
        },
        _renderItem: function(a, c) {
            return b("<li>").append(b("<div>").text(c.label)).appendTo(a)
        },
        _move: function(a, c) {
            if (this.menu.element.is(":visible"))
                if (this.menu.isFirstItem() && /^previous/.test(a) || this.menu.isLastItem() && /^next/.test(a))
                    this.isMultiLine || this._value(this.term),
                    this.menu.blur();
                else
                    this.menu[a](c);
            else
                this.search(null, c)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(a, c) {
            if (!this.isMultiLine || this.menu.element.is(":visible"))
                this._move(a, c),
                c.preventDefault()
        },
        _isContentEditable: function(a) {
            if (!a.length)
                return !1;
            var c = a.prop("contentEditable");
            return "inherit" === c ? this._isContentEditable(a.parent()) : "true" === c
        }
    });
    b.extend(b.ui.autocomplete, {
        escapeRegex: function(a) {
            return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(a, c) {
            var d = new RegExp(b.ui.autocomplete.escapeRegex(c),"i");
            return b.grep(a, function(f) {
                return d.test(f.label || f.value || f)
            })
        }
    });
    b.widget("ui.autocomplete", b.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(a) {
                    return a + (1 < a ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(a) {
            this._superApply(arguments);
            if (!this.options.disabled && !this.cancelSearch) {
                var c = a && a.length ? this.options.messages.results(a.length) : this.options.messages.noResults;
                clearTimeout(this.liveRegionTimer);
                this.liveRegionTimer = this._delay(function() {
                    this.liveRegion.html(b("<div>").text(c))
                }, 100)
            }
        }
    });
    var ea = /ui-corner-([a-z]){2,6}/g;
    b.widget("ui.controlgroup", {
        version: "1.13.2",
        defaultElement: "<div>",
        options: {
            direction: "horizontal",
            disabled: null,
            onlyVisible: !0,
            items: {
                button: "input[type=button], input[type=submit], input[type=reset], button, a",
                controlgroupLabel: ".ui-controlgroup-label",
                checkboxradio: "input[type='checkbox'], input[type='radio']",
                selectmenu: "select",
                spinner: ".ui-spinner-input"
            }
        },
        _create: function() {
            this._enhance()
        },
        _enhance: function() {
            this.element.attr("role", "toolbar");
            this.refresh()
        },
        _destroy: function() {
            this._callChildMethod("destroy");
            this.childWidgets.removeData("ui-controlgroup-data");
            this.element.removeAttr("role");
            this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
        },
        _initWidgets: function() {
            var a = this
              , c = [];
            b.each(this.options.items, function(d, f) {
                var h = {};
                f && ("controlgroupLabel" === d ? (f = a.element.find(f),
                f.each(function() {
                    var n = b(this);
                    n.children(".ui-controlgroup-label-contents").length || n.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
                }),
                a._addClass(f, null, "ui-widget ui-widget-content ui-state-default"),
                c = c.concat(f.get())) : b.fn[d] && (h = a["_" + d + "Options"] ? a["_" + d + "Options"]("middle") : {
                    classes: {}
                },
                a.element.find(f).each(function() {
                    var n = b(this)
                      , r = n[d]("instance")
                      , z = b.widget.extend({}, h);
                    "button" === d && n.parent(".ui-spinner").length || (r || (r = n[d]()[d]("instance")),
                    r && (z.classes = a._resolveClassesValues(z.classes, r)),
                    n[d](z),
                    z = n[d]("widget"),
                    b.data(z[0], "ui-controlgroup-data", r ? r : n[d]("instance")),
                    c.push(z[0]))
                })))
            });
            this.childWidgets = b(b.uniqueSort(c));
            this._addClass(this.childWidgets, "ui-controlgroup-item")
        },
        _callChildMethod: function(a) {
            this.childWidgets.each(function() {
                var c = b(this).data("ui-controlgroup-data");
                if (c && c[a])
                    c[a]()
            })
        },
        _updateCornerClass: function(a, c) {
            c = this._buildSimpleOptions(c, "label").classes.label;
            this._removeClass(a, null, "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all");
            this._addClass(a, null, c)
        },
        _buildSimpleOptions: function(a, c) {
            var d = "vertical" === this.options.direction
              , f = {
                classes: {}
            };
            f.classes[c] = {
                middle: "",
                first: "ui-corner-" + (d ? "top" : "left"),
                last: "ui-corner-" + (d ? "bottom" : "right"),
                only: "ui-corner-all"
            }[a];
            return f
        },
        _spinnerOptions: function(a) {
            a = this._buildSimpleOptions(a, "ui-spinner");
            a.classes["ui-spinner-up"] = "";
            a.classes["ui-spinner-down"] = "";
            return a
        },
        _buttonOptions: function(a) {
            return this._buildSimpleOptions(a, "ui-button")
        },
        _checkboxradioOptions: function(a) {
            return this._buildSimpleOptions(a, "ui-checkboxradio-label")
        },
        _selectmenuOptions: function(a) {
            var c = "vertical" === this.options.direction;
            return {
                width: c ? "auto" : !1,
                classes: {
                    middle: {
                        "ui-selectmenu-button-open": "",
                        "ui-selectmenu-button-closed": ""
                    },
                    first: {
                        "ui-selectmenu-button-open": "ui-corner-" + (c ? "top" : "tl"),
                        "ui-selectmenu-button-closed": "ui-corner-" + (c ? "top" : "left")
                    },
                    last: {
                        "ui-selectmenu-button-open": c ? "" : "ui-corner-tr",
                        "ui-selectmenu-button-closed": "ui-corner-" + (c ? "bottom" : "right")
                    },
                    only: {
                        "ui-selectmenu-button-open": "ui-corner-top",
                        "ui-selectmenu-button-closed": "ui-corner-all"
                    }
                }[a]
            }
        },
        _resolveClassesValues: function(a, c) {
            var d = {};
            b.each(a, function(f) {
                var h = c.options.classes[f] || "";
                h = String.prototype.trim.call(h.replace(ea, ""));
                d[f] = (h + " " + a[f]).replace(/\s+/g, " ")
            });
            return d
        },
        _setOption: function(a, c) {
            "direction" === a && this._removeClass("ui-controlgroup-" + this.options.direction);
            this._super(a, c);
            "disabled" === a ? this._callChildMethod(c ? "disable" : "enable") : this.refresh()
        },
        refresh: function() {
            var a = this;
            this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction);
            "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix");
            this._initWidgets();
            var c = this.childWidgets;
            this.options.onlyVisible && (c = c.filter(":visible"));
            c.length && (b.each(["first", "last"], function(d, f) {
                (d = c[f]().data("ui-controlgroup-data")) && a["_" + d.widgetName + "Options"] ? (f = a["_" + d.widgetName + "Options"](1 === c.length ? "only" : f),
                f.classes = a._resolveClassesValues(f.classes, d),
                d.element[d.widgetName](f)) : a._updateCornerClass(c[f](), f)
            }),
            this._callChildMethod("refresh"))
        }
    });
    b.widget("ui.checkboxradio", [b.ui.formResetMixin, {
        version: "1.13.2",
        options: {
            disabled: null,
            label: null,
            icon: !0,
            classes: {
                "ui-checkboxradio-label": "ui-corner-all",
                "ui-checkboxradio-icon": "ui-corner-all"
            }
        },
        _getCreateOptions: function() {
            var a = this._super() || {};
            this._readType();
            var c = this.element.labels();
            this.label = b(c[c.length - 1]);
            this.label.length || b.error("No label found for checkboxradio widget");
            this.originalLabel = "";
            c = this.label.contents().not(this.element[0]);
            c.length && (this.originalLabel += c.clone().wrapAll("<div></div>").parent().html());
            this.originalLabel && (a.label = this.originalLabel);
            c = this.element[0].disabled;
            null != c && (a.disabled = c);
            return a
        },
        _create: function() {
            var a = this.element[0].checked;
            this._bindFormResetHandler();
            null == this.options.disabled && (this.options.disabled = this.element[0].disabled);
            this._setOption("disabled", this.options.disabled);
            this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible");
            this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget");
            "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label");
            this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel);
            this._enhance();
            a && this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active");
            this._on({
                change: "_toggleClasses",
                focus: function() {
                    this._addClass(this.label, null, "ui-state-focus ui-visual-focus")
                },
                blur: function() {
                    this._removeClass(this.label, null, "ui-state-focus ui-visual-focus")
                }
            })
        },
        _readType: function() {
            var a = this.element[0].nodeName.toLowerCase();
            this.type = this.element[0].type;
            "input" === a && /radio|checkbox/.test(this.type) || b.error("Can't create checkboxradio on element.nodeName=" + a + " and element.type=" + this.type)
        },
        _enhance: function() {
            this._updateIcon(this.element[0].checked)
        },
        widget: function() {
            return this.label
        },
        _getRadioGroup: function() {
            var a = this.element[0].name
              , c = "input[name='" + b.escapeSelector(a) + "']";
            return a ? (this.form.length ? b(this.form[0].elements).filter(c) : b(c).filter(function() {
                return 0 === b(this)._form().length
            })).not(this.element) : b([])
        },
        _toggleClasses: function() {
            var a = this.element[0].checked;
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", a);
            this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", a)._toggleClass(this.icon, null, "ui-icon-blank", !a);
            "radio" === this.type && this._getRadioGroup().each(function() {
                var c = b(this).checkboxradio("instance");
                c && c._removeClass(c.label, "ui-checkboxradio-checked", "ui-state-active")
            })
        },
        _destroy: function() {
            this._unbindFormResetHandler();
            this.icon && (this.icon.remove(),
            this.iconSpace.remove())
        },
        _setOption: function(a, c) {
            if ("label" !== a || c)
                this._super(a, c),
                "disabled" === a ? (this._toggleClass(this.label, null, "ui-state-disabled", c),
                this.element[0].disabled = c) : this.refresh()
        },
        _updateIcon: function(a) {
            var c = "ui-icon ui-icon-background ";
            this.options.icon ? (this.icon || (this.icon = b("<span>"),
            this.iconSpace = b("<span> </span>"),
            this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")),
            "checkbox" === this.type ? (c += a ? "ui-icon-check ui-state-checked" : "ui-icon-blank",
            this._removeClass(this.icon, null, a ? "ui-icon-blank" : "ui-icon-check")) : c += "ui-icon-blank",
            this._addClass(this.icon, "ui-checkboxradio-icon", c),
            a || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"),
            this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(),
            this.iconSpace.remove(),
            delete this.icon)
        },
        _updateLabel: function() {
            var a = this.label.contents().not(this.element[0]);
            this.icon && (a = a.not(this.icon[0]));
            this.iconSpace && (a = a.not(this.iconSpace[0]));
            a.remove();
            this.label.append(this.options.label)
        },
        refresh: function() {
            var a = this.element[0].checked
              , c = this.element[0].disabled;
            this._updateIcon(a);
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", a);
            null !== this.options.label && this._updateLabel();
            c !== this.options.disabled && this._setOptions({
                disabled: c
            })
        }
    }]);
    b.widget("ui.button", {
        version: "1.13.2",
        defaultElement: "<button>",
        options: {
            classes: {
                "ui-button": "ui-corner-all"
            },
            disabled: null,
            icon: null,
            iconPosition: "beginning",
            label: null,
            showLabel: !0
        },
        _getCreateOptions: function() {
            var a = this._super() || {};
            this.isInput = this.element.is("input");
            var c = this.element[0].disabled;
            null != c && (a.disabled = c);
            if (this.originalLabel = this.isInput ? this.element.val() : this.element.html())
                a.label = this.originalLabel;
            return a
        },
        _create: function() {
            !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0);
            null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1);
            this.hasTitle = !!this.element.attr("title");
            this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label));
            this._addClass("ui-button", "ui-widget");
            this._setOption("disabled", this.options.disabled);
            this._enhance();
            this.element.is("a") && this._on({
                keyup: function(a) {
                    a.keyCode === b.ui.keyCode.SPACE && (a.preventDefault(),
                    this.element[0].click ? this.element[0].click() : this.element.trigger("click"))
                }
            })
        },
        _enhance: function() {
            this.element.is("button") || this.element.attr("role", "button");
            this.options.icon && (this._updateIcon("icon", this.options.icon),
            this._updateTooltip())
        },
        _updateTooltip: function() {
            this.title = this.element.attr("title");
            this.options.showLabel || this.title || this.element.attr("title", this.options.label)
        },
        _updateIcon: function(a, c) {
            var d = (a = "iconPosition" !== a) ? this.options.iconPosition : c
              , f = "top" === d || "bottom" === d;
            this.icon ? a && this._removeClass(this.icon, null, this.options.icon) : (this.icon = b("<span>"),
            this._addClass(this.icon, "ui-button-icon", "ui-icon"),
            this.options.showLabel || this._addClass("ui-button-icon-only"));
            a && this._addClass(this.icon, null, c);
            this._attachIcon(d);
            f ? (this._addClass(this.icon, null, "ui-widget-icon-block"),
            this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = b("<span> </span>"),
            this._addClass(this.iconSpace, "ui-button-icon-space")),
            this._removeClass(this.icon, null, "ui-wiget-icon-block"),
            this._attachIconSpace(d))
        },
        _destroy: function() {
            this.element.removeAttr("role");
            this.icon && this.icon.remove();
            this.iconSpace && this.iconSpace.remove();
            this.hasTitle || this.element.removeAttr("title")
        },
        _attachIconSpace: function(a) {
            this.icon[/^(?:end|bottom)/.test(a) ? "before" : "after"](this.iconSpace)
        },
        _attachIcon: function(a) {
            this.element[/^(?:end|bottom)/.test(a) ? "append" : "prepend"](this.icon)
        },
        _setOptions: function(a) {
            var c = void 0 === a.icon ? this.options.icon : a.icon;
            (void 0 === a.showLabel ? this.options.showLabel : a.showLabel) || c || (a.showLabel = !0);
            this._super(a)
        },
        _setOption: function(a, c) {
            "icon" === a && (c ? this._updateIcon(a, c) : this.icon && (this.icon.remove(),
            this.iconSpace && this.iconSpace.remove()));
            "iconPosition" === a && this._updateIcon(a, c);
            "showLabel" === a && (this._toggleClass("ui-button-icon-only", null, !c),
            this._updateTooltip());
            "label" === a && (this.isInput ? this.element.val(c) : (this.element.html(c),
            this.icon && (this._attachIcon(this.options.iconPosition),
            this._attachIconSpace(this.options.iconPosition))));
            this._super(a, c);
            "disabled" === a && (this._toggleClass(null, "ui-state-disabled", c),
            (this.element[0].disabled = c) && this.element.trigger("blur"))
        },
        refresh: function() {
            var a = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
            a !== this.options.disabled && this._setOptions({
                disabled: a
            });
            this._updateTooltip()
        }
    });
    !1 !== b.uiBackCompat && (b.widget("ui.button", b.ui.button, {
        options: {
            text: !0,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text);
            !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel);
            this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary,
            this.options.iconPosition = "end");
            this._super()
        },
        _setOption: function(a, c) {
            "text" === a ? this._super("showLabel", c) : ("showLabel" === a && (this.options.text = c),
            "icon" === a && (this.options.icons.primary = c),
            "icons" === a && (c.primary ? (this._super("icon", c.primary),
            this._super("iconPosition", "beginning")) : c.secondary && (this._super("icon", c.secondary),
            this._super("iconPosition", "end"))),
            this._superApply(arguments))
        }
    }),
    b.fn.button = function(a) {
        return function(c) {
            var d = "string" === typeof c
              , f = Array.prototype.slice.call(arguments, 1)
              , h = this;
            d ? this.length || "instance" !== c ? this.each(function() {
                var n = b(this).attr("type");
                var r = b.data(this, "ui-" + ("checkbox" !== n && "radio" !== n ? "button" : "checkboxradio"));
                if ("instance" === c)
                    return h = r,
                    !1;
                if (!r)
                    return b.error("cannot call methods on button prior to initialization; attempted to call method '" + c + "'");
                if ("function" !== typeof r[c] || "_" === c.charAt(0))
                    return b.error("no such method '" + c + "' for button widget instance");
                n = r[c].apply(r, f);
                if (n !== r && void 0 !== n)
                    return h = n && n.jquery ? h.pushStack(n.get()) : n,
                    !1
            }) : h = void 0 : (f.length && (c = b.widget.extend.apply(null, [c].concat(f))),
            this.each(function() {
                var n = b(this).attr("type");
                n = "checkbox" !== n && "radio" !== n ? "button" : "checkboxradio";
                var r = b.data(this, "ui-" + n);
                r ? (r.option(c || {}),
                r._init && r._init()) : "button" === n ? a.call(b(this), c) : b(this).checkboxradio(b.extend({
                    icon: !1
                }, c))
            }));
            return h
        }
    }(b.fn.button),
    b.fn.buttonset = function() {
        b.ui.controlgroup || b.error("Controlgroup widget missing");
        if ("option" === arguments[0] && "items" === arguments[1] && arguments[2])
            return this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]);
        if ("option" === arguments[0] && "items" === arguments[1])
            return this.controlgroup.apply(this, [arguments[0], "items.button"]);
        "object" === typeof arguments[0] && arguments[0].items && (arguments[0].items = {
            button: arguments[0].items
        });
        return this.controlgroup.apply(this, arguments)
    }
    );
    b.extend(b.ui, {
        datepicker: {
            version: "1.13.2"
        }
    });
    var da;
    b.extend(y.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(a) {
            C(this._defaults, a || {});
            return this
        },
        _attachDatepicker: function(a, c) {
            var d = a.nodeName.toLowerCase();
            var f = "div" === d || "span" === d;
            a.id || (this.uuid += 1,
            a.id = "dp" + this.uuid);
            var h = this._newInst(b(a), f);
            h.settings = b.extend({}, c || {});
            "input" === d ? this._connectDatepicker(a, h) : f && this._inlineDatepicker(a, h)
        },
        _newInst: function(a, c) {
            return {
                id: a[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                input: a,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: c,
                dpDiv: c ? m(b("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function(a, c) {
            var d = b(a);
            c.append = b([]);
            c.trigger = b([]);
            d.hasClass(this.markerClassName) || (this._attachments(d, c),
            d.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp),
            this._autoSize(c),
            b.data(a, "datepicker", c),
            c.settings.disabled && this._disableDatepicker(a))
        },
        _attachments: function(a, c) {
            var d = this._get(c, "appendText");
            var f = this._get(c, "isRTL");
            c.append && c.append.remove();
            d && (c.append = b("<span>").addClass(this._appendClass).text(d),
            a[f ? "before" : "after"](c.append));
            a.off("focus", this._showDatepicker);
            c.trigger && c.trigger.remove();
            d = this._get(c, "showOn");
            if ("focus" === d || "both" === d)
                a.on("focus", this._showDatepicker);
            if ("button" === d || "both" === d) {
                d = this._get(c, "buttonText");
                var h = this._get(c, "buttonImage");
                this._get(c, "buttonImageOnly") ? c.trigger = b("<img>").addClass(this._triggerClass).attr({
                    src: h,
                    alt: d,
                    title: d
                }) : (c.trigger = b("<button type='button'>").addClass(this._triggerClass),
                h ? c.trigger.html(b("<img>").attr({
                    src: h,
                    alt: d,
                    title: d
                })) : c.trigger.text(d));
                a[f ? "before" : "after"](c.trigger);
                c.trigger.on("click", function() {
                    b.datepicker._datepickerShowing && b.datepicker._lastInput === a[0] ? b.datepicker._hideDatepicker() : (b.datepicker._datepickerShowing && b.datepicker._lastInput !== a[0] && b.datepicker._hideDatepicker(),
                    b.datepicker._showDatepicker(a[0]));
                    return !1
                })
            }
        },
        _autoSize: function(a) {
            if (this._get(a, "autoSize") && !a.inline) {
                var c, d, f, h = new Date(2009,11,20), n = this._get(a, "dateFormat");
                if (n.match(/[DM]/)) {
                    var r = function(z) {
                        for (f = d = c = 0; f < z.length; f++)
                            z[f].length > c && (c = z[f].length,
                            d = f);
                        return d
                    };
                    h.setMonth(r(this._get(a, n.match(/MM/) ? "monthNames" : "monthNamesShort")));
                    h.setDate(r(this._get(a, n.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - h.getDay())
                }
                a.input.attr("size", this._formatDate(a, h).length)
            }
        },
        _inlineDatepicker: function(a, c) {
            var d = b(a);
            d.hasClass(this.markerClassName) || (d.addClass(this.markerClassName).append(c.dpDiv),
            b.data(a, "datepicker", c),
            this._setDate(c, this._getDefaultDate(c), !0),
            this._updateDatepicker(c),
            this._updateAlternate(c),
            c.settings.disabled && this._disableDatepicker(a),
            c.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(a, c, d, f, h) {
            a = this._dialogInst;
            a || (this.uuid += 1,
            a = "dp" + this.uuid,
            this._dialogInput = b("<input type='text' id='" + a + "' style='position: absolute; top: -100px; width: 0px;'/>"),
            this._dialogInput.on("keydown", this._doKeyDown),
            b("body").append(this._dialogInput),
            a = this._dialogInst = this._newInst(this._dialogInput, !1),
            a.settings = {},
            b.data(this._dialogInput[0], "datepicker", a));
            C(a.settings, f || {});
            c = c && c.constructor === Date ? this._formatDate(a, c) : c;
            this._dialogInput.val(c);
            this._pos = h ? h.length ? h : [h.pageX, h.pageY] : null;
            if (!this._pos) {
                c = document.documentElement.clientWidth;
                f = document.documentElement.clientHeight;
                h = document.documentElement.scrollLeft || document.body.scrollLeft;
                var n = document.documentElement.scrollTop || document.body.scrollTop;
                this._pos = [c / 2 - 100 + h, f / 2 - 150 + n]
            }
            this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px");
            a.settings.onSelect = d;
            this._inDialog = !0;
            this.dpDiv.addClass(this._dialogClass);
            this._showDatepicker(this._dialogInput[0]);
            b.blockUI && b.blockUI(this.dpDiv);
            b.data(this._dialogInput[0], "datepicker", a);
            return this
        },
        _destroyDatepicker: function(a) {
            var c = b(a)
              , d = b.data(a, "datepicker");
            if (c.hasClass(this.markerClassName)) {
                var f = a.nodeName.toLowerCase();
                b.removeData(a, "datepicker");
                "input" === f ? (d.append.remove(),
                d.trigger.remove(),
                c.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : "div" !== f && "span" !== f || c.removeClass(this.markerClassName).empty();
                da === d && (this._curInst = da = null)
            }
        },
        _enableDatepicker: function(a) {
            var c = b(a)
              , d = b.data(a, "datepicker");
            if (c.hasClass(this.markerClassName)) {
                var f = a.nodeName.toLowerCase();
                if ("input" === f)
                    a.disabled = !1,
                    d.trigger.filter("button").each(function() {
                        this.disabled = !1
                    }).end().filter("img").css({
                        opacity: "1.0",
                        cursor: ""
                    });
                else if ("div" === f || "span" === f)
                    f = c.children("." + this._inlineClass),
                    f.children().removeClass("ui-state-disabled"),
                    f.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1);
                this._disabledInputs = b.map(this._disabledInputs, function(h) {
                    return h === a ? null : h
                })
            }
        },
        _disableDatepicker: function(a) {
            var c = b(a)
              , d = b.data(a, "datepicker");
            if (c.hasClass(this.markerClassName)) {
                var f = a.nodeName.toLowerCase();
                if ("input" === f)
                    a.disabled = !0,
                    d.trigger.filter("button").each(function() {
                        this.disabled = !0
                    }).end().filter("img").css({
                        opacity: "0.5",
                        cursor: "default"
                    });
                else if ("div" === f || "span" === f)
                    f = c.children("." + this._inlineClass),
                    f.children().addClass("ui-state-disabled"),
                    f.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0);
                this._disabledInputs = b.map(this._disabledInputs, function(h) {
                    return h === a ? null : h
                });
                this._disabledInputs[this._disabledInputs.length] = a
            }
        },
        _isDisabledDatepicker: function(a) {
            if (!a)
                return !1;
            for (var c = 0; c < this._disabledInputs.length; c++)
                if (this._disabledInputs[c] === a)
                    return !0;
            return !1
        },
        _getInst: function(a) {
            try {
                return b.data(a, "datepicker")
            } catch (c) {
                throw "Missing instance data for this datepicker";
            }
        },
        _optionDatepicker: function(a, c, d) {
            var f = this._getInst(a);
            if (2 === arguments.length && "string" === typeof c)
                return "defaults" === c ? b.extend({}, b.datepicker._defaults) : f ? "all" === c ? b.extend({}, f.settings) : this._get(f, c) : null;
            var h = c || {};
            "string" === typeof c && (h = {},
            h[c] = d);
            if (f) {
                this._curInst === f && this._hideDatepicker();
                var n = this._getDateDatepicker(a, !0);
                var r = this._getMinMaxDate(f, "min");
                var z = this._getMinMaxDate(f, "max");
                C(f.settings, h);
                null !== r && void 0 !== h.dateFormat && void 0 === h.minDate && (f.settings.minDate = this._formatDate(f, r));
                null !== z && void 0 !== h.dateFormat && void 0 === h.maxDate && (f.settings.maxDate = this._formatDate(f, z));
                "disabled"in h && (h.disabled ? this._disableDatepicker(a) : this._enableDatepicker(a));
                this._attachments(b(a), f);
                this._autoSize(f);
                this._setDate(f, n);
                this._updateAlternate(f);
                this._updateDatepicker(f)
            }
        },
        _changeDatepicker: function(a, c, d) {
            this._optionDatepicker(a, c, d)
        },
        _refreshDatepicker: function(a) {
            (a = this._getInst(a)) && this._updateDatepicker(a)
        },
        _setDateDatepicker: function(a, c) {
            if (a = this._getInst(a))
                this._setDate(a, c),
                this._updateDatepicker(a),
                this._updateAlternate(a)
        },
        _getDateDatepicker: function(a, c) {
            (a = this._getInst(a)) && !a.inline && this._setDateFromField(a, c);
            return a ? this._getDate(a) : null
        },
        _doKeyDown: function(a) {
            var c = b.datepicker._getInst(a.target);
            var d = !0;
            var f = c.dpDiv.is(".ui-datepicker-rtl");
            c._keyEvent = !0;
            if (b.datepicker._datepickerShowing)
                switch (a.keyCode) {
                case 9:
                    b.datepicker._hideDatepicker();
                    d = !1;
                    break;
                case 13:
                    return d = b("td." + b.datepicker._dayOverClass + ":not(." + b.datepicker._currentClass + ")", c.dpDiv),
                    d[0] && b.datepicker._selectDay(a.target, c.selectedMonth, c.selectedYear, d[0]),
                    (a = b.datepicker._get(c, "onSelect")) ? (d = b.datepicker._formatDate(c),
                    a.apply(c.input ? c.input[0] : null, [d, c])) : b.datepicker._hideDatepicker(),
                    !1;
                case 27:
                    b.datepicker._hideDatepicker();
                    break;
                case 33:
                    b.datepicker._adjustDate(a.target, a.ctrlKey ? -b.datepicker._get(c, "stepBigMonths") : -b.datepicker._get(c, "stepMonths"), "M");
                    break;
                case 34:
                    b.datepicker._adjustDate(a.target, a.ctrlKey ? +b.datepicker._get(c, "stepBigMonths") : +b.datepicker._get(c, "stepMonths"), "M");
                    break;
                case 35:
                    (a.ctrlKey || a.metaKey) && b.datepicker._clearDate(a.target);
                    d = a.ctrlKey || a.metaKey;
                    break;
                case 36:
                    (a.ctrlKey || a.metaKey) && b.datepicker._gotoToday(a.target);
                    d = a.ctrlKey || a.metaKey;
                    break;
                case 37:
                    (a.ctrlKey || a.metaKey) && b.datepicker._adjustDate(a.target, f ? 1 : -1, "D");
                    d = a.ctrlKey || a.metaKey;
                    a.originalEvent.altKey && b.datepicker._adjustDate(a.target, a.ctrlKey ? -b.datepicker._get(c, "stepBigMonths") : -b.datepicker._get(c, "stepMonths"), "M");
                    break;
                case 38:
                    (a.ctrlKey || a.metaKey) && b.datepicker._adjustDate(a.target, -7, "D");
                    d = a.ctrlKey || a.metaKey;
                    break;
                case 39:
                    (a.ctrlKey || a.metaKey) && b.datepicker._adjustDate(a.target, f ? -1 : 1, "D");
                    d = a.ctrlKey || a.metaKey;
                    a.originalEvent.altKey && b.datepicker._adjustDate(a.target, a.ctrlKey ? +b.datepicker._get(c, "stepBigMonths") : +b.datepicker._get(c, "stepMonths"), "M");
                    break;
                case 40:
                    (a.ctrlKey || a.metaKey) && b.datepicker._adjustDate(a.target, 7, "D");
                    d = a.ctrlKey || a.metaKey;
                    break;
                default:
                    d = !1
                }
            else
                36 === a.keyCode && a.ctrlKey ? b.datepicker._showDatepicker(this) : d = !1;
            d && (a.preventDefault(),
            a.stopPropagation())
        },
        _doKeyPress: function(a) {
            var c = b.datepicker._getInst(a.target);
            if (b.datepicker._get(c, "constrainInput")) {
                c = b.datepicker._possibleChars(b.datepicker._get(c, "dateFormat"));
                var d = String.fromCharCode(null == a.charCode ? a.keyCode : a.charCode);
                return a.ctrlKey || a.metaKey || " " > d || !c || -1 < c.indexOf(d)
            }
        },
        _doKeyUp: function(a) {
            var c;
            a = b.datepicker._getInst(a.target);
            if (a.input.val() !== a.lastVal)
                try {
                    if (c = b.datepicker.parseDate(b.datepicker._get(a, "dateFormat"), a.input ? a.input.val() : null, b.datepicker._getFormatConfig(a)))
                        b.datepicker._setDateFromField(a),
                        b.datepicker._updateAlternate(a),
                        b.datepicker._updateDatepicker(a)
                } catch (d) {}
            return !0
        },
        _showDatepicker: function(a) {
            a = a.target || a;
            "input" !== a.nodeName.toLowerCase() && (a = b("input", a.parentNode)[0]);
            if (!b.datepicker._isDisabledDatepicker(a) && b.datepicker._lastInput !== a) {
                var c = b.datepicker._getInst(a);
                b.datepicker._curInst && b.datepicker._curInst !== c && (b.datepicker._curInst.dpDiv.stop(!0, !0),
                c && b.datepicker._datepickerShowing && b.datepicker._hideDatepicker(b.datepicker._curInst.input[0]));
                var d = (d = b.datepicker._get(c, "beforeShow")) ? d.apply(a, [a, c]) : {};
                if (!1 !== d) {
                    C(c.settings, d);
                    c.lastVal = null;
                    b.datepicker._lastInput = a;
                    b.datepicker._setDateFromField(c);
                    b.datepicker._inDialog && (a.value = "");
                    b.datepicker._pos || (b.datepicker._pos = b.datepicker._findPos(a),
                    b.datepicker._pos[1] += a.offsetHeight);
                    var f = !1;
                    b(a).parents().each(function() {
                        f |= "fixed" === b(this).css("position");
                        return !f
                    });
                    d = {
                        left: b.datepicker._pos[0],
                        top: b.datepicker._pos[1]
                    };
                    b.datepicker._pos = null;
                    c.dpDiv.empty();
                    c.dpDiv.css({
                        position: "absolute",
                        display: "block",
                        top: "-1000px"
                    });
                    b.datepicker._updateDatepicker(c);
                    d = b.datepicker._checkOffset(c, d, f);
                    c.dpDiv.css({
                        position: b.datepicker._inDialog && b.blockUI ? "static" : f ? "fixed" : "absolute",
                        display: "none",
                        left: d.left + "px",
                        top: d.top + "px"
                    });
                    if (!c.inline) {
                        d = b.datepicker._get(c, "showAnim");
                        var h = b.datepicker._get(c, "duration");
                        c.dpDiv.css("z-index", l(b(a)) + 1);
                        b.datepicker._datepickerShowing = !0;
                        if (b.effects && b.effects.effect[d])
                            c.dpDiv.show(d, b.datepicker._get(c, "showOptions"), h);
                        else
                            c.dpDiv[d || "show"](d ? h : null);
                        b.datepicker._shouldFocusInput(c) && c.input.trigger("focus");
                        b.datepicker._curInst = c
                    }
                }
            }
        },
        _updateDatepicker: function(a) {
            this.maxRows = 4;
            da = a;
            a.dpDiv.empty().append(this._generateHTML(a));
            this._attachHandlers(a);
            var c = this._getNumberOfMonths(a)
              , d = c[1]
              , f = a.dpDiv.find("." + this._dayOverClass + " a")
              , h = b.datepicker._get(a, "onUpdateDatepicker");
            0 < f.length && u.apply(f.get(0));
            a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
            1 < d && a.dpDiv.addClass("ui-datepicker-multi-" + d).css("width", 17 * d + "em");
            a.dpDiv[(1 !== c[0] || 1 !== c[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi");
            a.dpDiv[(this._get(a, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
            a === b.datepicker._curInst && b.datepicker._datepickerShowing && b.datepicker._shouldFocusInput(a) && a.input.trigger("focus");
            if (a.yearshtml) {
                var n = a.yearshtml;
                setTimeout(function() {
                    n === a.yearshtml && a.yearshtml && a.dpDiv.find("select.ui-datepicker-year").first().replaceWith(a.yearshtml);
                    n = a.yearshtml = null
                }, 0)
            }
            h && h.apply(a.input ? a.input[0] : null, [a])
        },
        _shouldFocusInput: function(a) {
            return a.input && a.input.is(":visible") && !a.input.is(":disabled") && !a.input.is(":focus")
        },
        _checkOffset: function(a, c, d) {
            var f = a.dpDiv.outerWidth()
              , h = a.dpDiv.outerHeight()
              , n = a.input ? a.input.outerWidth() : 0
              , r = a.input ? a.input.outerHeight() : 0
              , z = document.documentElement.clientWidth + (d ? 0 : b(document).scrollLeft())
              , A = document.documentElement.clientHeight + (d ? 0 : b(document).scrollTop());
            c.left -= this._get(a, "isRTL") ? f - n : 0;
            c.left -= d && c.left === a.input.offset().left ? b(document).scrollLeft() : 0;
            c.top -= d && c.top === a.input.offset().top + r ? b(document).scrollTop() : 0;
            c.left -= Math.min(c.left, c.left + f > z && z > f ? Math.abs(c.left + f - z) : 0);
            c.top -= Math.min(c.top, c.top + h > A && A > h ? Math.abs(h + r) : 0);
            return c
        },
        _findPos: function(a) {
            var c = this._getInst(a);
            for (c = this._get(c, "isRTL"); a && ("hidden" === a.type || 1 !== a.nodeType || b.expr.pseudos.hidden(a)); )
                a = a[c ? "previousSibling" : "nextSibling"];
            a = b(a).offset();
            return [a.left, a.top]
        },
        _hideDatepicker: function(a) {
            var c = this._curInst;
            if (c && (!a || c === b.data(a, "datepicker")) && this._datepickerShowing) {
                a = this._get(c, "showAnim");
                var d = this._get(c, "duration");
                var f = function() {
                    b.datepicker._tidyDialog(c)
                };
                if (b.effects && (b.effects.effect[a] || b.effects[a]))
                    c.dpDiv.hide(a, b.datepicker._get(c, "showOptions"), d, f);
                else
                    c.dpDiv["slideDown" === a ? "slideUp" : "fadeIn" === a ? "fadeOut" : "hide"](a ? d : null, f);
                a || f();
                this._datepickerShowing = !1;
                (a = this._get(c, "onClose")) && a.apply(c.input ? c.input[0] : null, [c.input ? c.input.val() : "", c]);
                this._lastInput = null;
                this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }),
                b.blockUI && (b.unblockUI(),
                b("body").append(this.dpDiv)));
                this._inDialog = !1
            }
        },
        _tidyDialog: function(a) {
            a.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(a) {
            if (b.datepicker._curInst) {
                a = b(a.target);
                var c = b.datepicker._getInst(a[0]);
                (!(a[0].id === b.datepicker._mainDivId || 0 !== a.parents("#" + b.datepicker._mainDivId).length || a.hasClass(b.datepicker.markerClassName) || a.closest("." + b.datepicker._triggerClass).length || !b.datepicker._datepickerShowing || b.datepicker._inDialog && b.blockUI) || a.hasClass(b.datepicker.markerClassName) && b.datepicker._curInst !== c) && b.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(a, c, d) {
            a = b(a);
            var f = this._getInst(a[0]);
            this._isDisabledDatepicker(a[0]) || (this._adjustInstDate(f, c, d),
            this._updateDatepicker(f))
        },
        _gotoToday: function(a) {
            var c = b(a)
              , d = this._getInst(c[0]);
            this._get(d, "gotoCurrent") && d.currentDay ? (d.selectedDay = d.currentDay,
            d.drawMonth = d.selectedMonth = d.currentMonth,
            d.drawYear = d.selectedYear = d.currentYear) : (a = new Date,
            d.selectedDay = a.getDate(),
            d.drawMonth = d.selectedMonth = a.getMonth(),
            d.drawYear = d.selectedYear = a.getFullYear());
            this._notifyChange(d);
            this._adjustDate(c)
        },
        _selectMonthYear: function(a, c, d) {
            a = b(a);
            var f = this._getInst(a[0]);
            f["selected" + ("M" === d ? "Month" : "Year")] = f["draw" + ("M" === d ? "Month" : "Year")] = parseInt(c.options[c.selectedIndex].value, 10);
            this._notifyChange(f);
            this._adjustDate(a)
        },
        _selectDay: function(a, c, d, f) {
            var h = b(a);
            b(f).hasClass(this._unselectableClass) || this._isDisabledDatepicker(h[0]) || (h = this._getInst(h[0]),
            h.selectedDay = h.currentDay = parseInt(b("a", f).attr("data-date")),
            h.selectedMonth = h.currentMonth = c,
            h.selectedYear = h.currentYear = d,
            this._selectDate(a, this._formatDate(h, h.currentDay, h.currentMonth, h.currentYear)))
        },
        _clearDate: function(a) {
            a = b(a);
            this._selectDate(a, "")
        },
        _selectDate: function(a, c) {
            a = b(a);
            var d = this._getInst(a[0]);
            c = null != c ? c : this._formatDate(d);
            d.input && d.input.val(c);
            this._updateAlternate(d);
            (a = this._get(d, "onSelect")) ? a.apply(d.input ? d.input[0] : null, [c, d]) : d.input && d.input.trigger("change");
            d.inline ? this._updateDatepicker(d) : (this._hideDatepicker(),
            this._lastInput = d.input[0],
            "object" !== typeof d.input[0] && d.input.trigger("focus"),
            this._lastInput = null)
        },
        _updateAlternate: function(a) {
            var c = this._get(a, "altField");
            if (c) {
                var d = this._get(a, "altFormat") || this._get(a, "dateFormat");
                var f = this._getDate(a);
                a = this.formatDate(d, f, this._getFormatConfig(a));
                b(document).find(c).val(a)
            }
        },
        noWeekends: function(a) {
            a = a.getDay();
            return [0 < a && 6 > a, ""]
        },
        iso8601Week: function(a) {
            var c = new Date(a.getTime());
            c.setDate(c.getDate() + 4 - (c.getDay() || 7));
            a = c.getTime();
            c.setMonth(0);
            c.setDate(1);
            return Math.floor(Math.round((a - c) / 864E5) / 7) + 1
        },
        parseDate: function(a, c, d) {
            if (null == a || null == c)
                throw "Invalid arguments";
            c = "object" === typeof c ? c.toString() : c + "";
            if ("" === c)
                return null;
            var f, h = 0;
            var n = (d ? d.shortYearCutoff : null) || this._defaults.shortYearCutoff;
            n = "string" !== typeof n ? n : (new Date).getFullYear() % 100 + parseInt(n, 10);
            var r = (d ? d.dayNamesShort : null) || this._defaults.dayNamesShort;
            var z = (d ? d.dayNames : null) || this._defaults.dayNames
              , A = (d ? d.monthNamesShort : null) || this._defaults.monthNamesShort
              , L = (d ? d.monthNames : null) || this._defaults.monthNames
              , U = d = -1
              , G = -1
              , Q = -1
              , V = !1
              , ca = function(qa) {
                (qa = f + 1 < a.length && a.charAt(f + 1) === qa) && f++;
                return qa
            }
              , ia = function(qa) {
                var Da = ca(qa);
                Da = "@" === qa ? 14 : "!" === qa ? 20 : "y" === qa && Da ? 4 : "o" === qa ? 3 : 2;
                qa = new RegExp("^\\d{" + ("y" === qa ? Da : 1) + "," + Da + "}");
                qa = c.substring(h).match(qa);
                if (!qa)
                    throw "Missing number at position " + h;
                h += qa[0].length;
                return parseInt(qa[0], 10)
            }
              , na = function(qa, Da, Ra) {
                var Fa = -1;
                qa = b.map(ca(qa) ? Ra : Da, function(Oa, Ta) {
                    return [[Ta, Oa]]
                }).sort(function(Oa, Ta) {
                    return -(Oa[1].length - Ta[1].length)
                });
                b.each(qa, function(Oa, Ta) {
                    Oa = Ta[1];
                    if (c.substr(h, Oa.length).toLowerCase() === Oa.toLowerCase())
                        return Fa = Ta[0],
                        h += Oa.length,
                        !1
                });
                if (-1 !== Fa)
                    return Fa + 1;
                throw "Unknown name at position " + h;
            }
              , ja = function() {
                if (c.charAt(h) !== a.charAt(f))
                    throw "Unexpected literal at position " + h;
                h++
            };
            for (f = 0; f < a.length; f++)
                if (V)
                    "'" !== a.charAt(f) || ca("'") ? ja() : V = !1;
                else
                    switch (a.charAt(f)) {
                    case "d":
                        G = ia("d");
                        break;
                    case "D":
                        na("D", r, z);
                        break;
                    case "o":
                        Q = ia("o");
                        break;
                    case "m":
                        U = ia("m");
                        break;
                    case "M":
                        U = na("M", A, L);
                        break;
                    case "y":
                        d = ia("y");
                        break;
                    case "@":
                        var ta = new Date(ia("@"));
                        d = ta.getFullYear();
                        U = ta.getMonth() + 1;
                        G = ta.getDate();
                        break;
                    case "!":
                        ta = new Date((ia("!") - this._ticksTo1970) / 1E4);
                        d = ta.getFullYear();
                        U = ta.getMonth() + 1;
                        G = ta.getDate();
                        break;
                    case "'":
                        ca("'") ? ja() : V = !0;
                        break;
                    default:
                        ja()
                    }
            if (h < c.length && (r = c.substr(h),
            !/^\s+/.test(r)))
                throw "Extra/unparsed characters found in date: " + r;
            -1 === d ? d = (new Date).getFullYear() : 100 > d && (d += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (d <= n ? 0 : -100));
            if (-1 < Q) {
                U = 1;
                G = Q;
                do {
                    n = this._getDaysInMonth(d, U - 1);
                    if (G <= n)
                        break;
                    U++;
                    G -= n
                } while (1)
            }
            ta = this._daylightSavingAdjust(new Date(d,U - 1,G));
            if (ta.getFullYear() !== d || ta.getMonth() + 1 !== U || ta.getDate() !== G)
                throw "Invalid date";
            return ta
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 62135596800 * 1E7,
        formatDate: function(a, c, d) {
            if (!c)
                return "";
            var f, h = (d ? d.dayNamesShort : null) || this._defaults.dayNamesShort, n = (d ? d.dayNames : null) || this._defaults.dayNames, r = (d ? d.monthNamesShort : null) || this._defaults.monthNamesShort;
            d = (d ? d.monthNames : null) || this._defaults.monthNames;
            var z = function(Q) {
                (Q = f + 1 < a.length && a.charAt(f + 1) === Q) && f++;
                return Q
            }
              , A = function(Q, V, ca) {
                V = "" + V;
                if (z(Q))
                    for (; V.length < ca; )
                        V = "0" + V;
                return V
            }
              , L = function(Q, V, ca, ia) {
                return z(Q) ? ia[V] : ca[V]
            }
              , U = ""
              , G = !1;
            if (c)
                for (f = 0; f < a.length; f++)
                    if (G)
                        "'" !== a.charAt(f) || z("'") ? U += a.charAt(f) : G = !1;
                    else
                        switch (a.charAt(f)) {
                        case "d":
                            U += A("d", c.getDate(), 2);
                            break;
                        case "D":
                            U += L("D", c.getDay(), h, n);
                            break;
                        case "o":
                            U += A("o", Math.round(((new Date(c.getFullYear(),c.getMonth(),c.getDate())).getTime() - (new Date(c.getFullYear(),0,0)).getTime()) / 864E5), 3);
                            break;
                        case "m":
                            U += A("m", c.getMonth() + 1, 2);
                            break;
                        case "M":
                            U += L("M", c.getMonth(), r, d);
                            break;
                        case "y":
                            U += z("y") ? c.getFullYear() : (10 > c.getFullYear() % 100 ? "0" : "") + c.getFullYear() % 100;
                            break;
                        case "@":
                            U += c.getTime();
                            break;
                        case "!":
                            U += 1E4 * c.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            z("'") ? U += "'" : G = !0;
                            break;
                        default:
                            U += a.charAt(f)
                        }
            return U
        },
        _possibleChars: function(a) {
            var c, d = "", f = !1, h = function(n) {
                (n = c + 1 < a.length && a.charAt(c + 1) === n) && c++;
                return n
            };
            for (c = 0; c < a.length; c++)
                if (f)
                    "'" !== a.charAt(c) || h("'") ? d += a.charAt(c) : f = !1;
                else
                    switch (a.charAt(c)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        d += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        h("'") ? d += "'" : f = !0;
                        break;
                    default:
                        d += a.charAt(c)
                    }
            return d
        },
        _get: function(a, c) {
            return void 0 !== a.settings[c] ? a.settings[c] : this._defaults[c]
        },
        _setDateFromField: function(a, c) {
            if (a.input.val() !== a.lastVal) {
                var d = this._get(a, "dateFormat")
                  , f = a.lastVal = a.input ? a.input.val() : null
                  , h = this._getDefaultDate(a)
                  , n = h
                  , r = this._getFormatConfig(a);
                try {
                    n = this.parseDate(d, f, r) || h
                } catch (z) {
                    f = c ? "" : f
                }
                a.selectedDay = n.getDate();
                a.drawMonth = a.selectedMonth = n.getMonth();
                a.drawYear = a.selectedYear = n.getFullYear();
                a.currentDay = f ? n.getDate() : 0;
                a.currentMonth = f ? n.getMonth() : 0;
                a.currentYear = f ? n.getFullYear() : 0;
                this._adjustInstDate(a)
            }
        },
        _getDefaultDate: function(a) {
            return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date))
        },
        _determineDate: function(a, c, d) {
            var f = function(n) {
                var r = new Date;
                r.setDate(r.getDate() + n);
                return r
            }
              , h = function(n) {
                try {
                    return b.datepicker.parseDate(b.datepicker._get(a, "dateFormat"), n, b.datepicker._getFormatConfig(a))
                } catch (G) {}
                var r = (n.toLowerCase().match(/^c/) ? b.datepicker._getDate(a) : null) || new Date
                  , z = r.getFullYear()
                  , A = r.getMonth();
                r = r.getDate();
                for (var L = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, U = L.exec(n); U; ) {
                    switch (U[2] || "d") {
                    case "d":
                    case "D":
                        r += parseInt(U[1], 10);
                        break;
                    case "w":
                    case "W":
                        r += 7 * parseInt(U[1], 10);
                        break;
                    case "m":
                    case "M":
                        A += parseInt(U[1], 10);
                        r = Math.min(r, b.datepicker._getDaysInMonth(z, A));
                        break;
                    case "y":
                    case "Y":
                        z += parseInt(U[1], 10),
                        r = Math.min(r, b.datepicker._getDaysInMonth(z, A))
                    }
                    U = L.exec(n)
                }
                return new Date(z,A,r)
            };
            if (c = (c = null == c || "" === c ? d : "string" === typeof c ? h(c) : "number" === typeof c ? isNaN(c) ? d : f(c) : new Date(c.getTime())) && "Invalid Date" === c.toString() ? d : c)
                c.setHours(0),
                c.setMinutes(0),
                c.setSeconds(0),
                c.setMilliseconds(0);
            return this._daylightSavingAdjust(c)
        },
        _daylightSavingAdjust: function(a) {
            if (!a)
                return null;
            a.setHours(12 < a.getHours() ? a.getHours() + 2 : 0);
            return a
        },
        _setDate: function(a, c, d) {
            var f = !c
              , h = a.selectedMonth
              , n = a.selectedYear;
            c = this._restrictMinMax(a, this._determineDate(a, c, new Date));
            a.selectedDay = a.currentDay = c.getDate();
            a.drawMonth = a.selectedMonth = a.currentMonth = c.getMonth();
            a.drawYear = a.selectedYear = a.currentYear = c.getFullYear();
            h === a.selectedMonth && n === a.selectedYear || d || this._notifyChange(a);
            this._adjustInstDate(a);
            a.input && a.input.val(f ? "" : this._formatDate(a))
        },
        _getDate: function(a) {
            return !a.currentYear || a.input && "" === a.input.val() ? null : this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay))
        },
        _attachHandlers: function(a) {
            var c = this._get(a, "stepMonths")
              , d = "#" + a.id.replace(/\\\\/g, "\\");
            a.dpDiv.find("[data-handler]").map(function() {
                b(this).on(this.getAttribute("data-event"), {
                    prev: function() {
                        b.datepicker._adjustDate(d, -c, "M")
                    },
                    next: function() {
                        b.datepicker._adjustDate(d, +c, "M")
                    },
                    hide: function() {
                        b.datepicker._hideDatepicker()
                    },
                    today: function() {
                        b.datepicker._gotoToday(d)
                    },
                    selectDay: function() {
                        b.datepicker._selectDay(d, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this);
                        return !1
                    },
                    selectMonth: function() {
                        b.datepicker._selectMonthYear(d, this, "M");
                        return !1
                    },
                    selectYear: function() {
                        b.datepicker._selectMonthYear(d, this, "Y");
                        return !1
                    }
                }[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(a) {
            var c, d, f, h, n = new Date;
            n = this._daylightSavingAdjust(new Date(n.getFullYear(),n.getMonth(),n.getDate()));
            var r = this._get(a, "isRTL");
            var z = this._get(a, "showButtonPanel");
            var A = this._get(a, "hideIfNoPrevNext");
            var L = this._get(a, "navigationAsDateFormat");
            var U = this._getNumberOfMonths(a)
              , G = this._get(a, "showCurrentAtPos");
            var Q = this._get(a, "stepMonths");
            var V = 1 !== U[0] || 1 !== U[1]
              , ca = this._daylightSavingAdjust(a.currentDay ? new Date(a.currentYear,a.currentMonth,a.currentDay) : new Date(9999,9,9))
              , ia = this._getMinMaxDate(a, "min")
              , na = this._getMinMaxDate(a, "max");
            G = a.drawMonth - G;
            var ja = a.drawYear;
            0 > G && (G += 12,
            ja--);
            if (na) {
                var ta = this._daylightSavingAdjust(new Date(na.getFullYear(),na.getMonth() - U[0] * U[1] + 1,na.getDate()));
                for (ta = ia && ta < ia ? ia : ta; this._daylightSavingAdjust(new Date(ja,G,1)) > ta; )
                    G--,
                    0 > G && (G = 11,
                    ja--)
            }
            a.drawMonth = G;
            a.drawYear = ja;
            ta = this._get(a, "prevText");
            ta = L ? this.formatDate(ta, this._daylightSavingAdjust(new Date(ja,G - Q,1)), this._getFormatConfig(a)) : ta;
            ta = this._canAdjustMonth(a, -1, ja, G) ? b("<a>").attr({
                "class": "ui-datepicker-prev ui-corner-all",
                "data-handler": "prev",
                "data-event": "click",
                title: ta
            }).append(b("<span>").addClass("ui-icon ui-icon-circle-triangle-" + (r ? "e" : "w")).text(ta))[0].outerHTML : A ? "" : b("<a>").attr({
                "class": "ui-datepicker-prev ui-corner-all ui-state-disabled",
                title: ta
            }).append(b("<span>").addClass("ui-icon ui-icon-circle-triangle-" + (r ? "e" : "w")).text(ta))[0].outerHTML;
            var qa = this._get(a, "nextText");
            qa = L ? this.formatDate(qa, this._daylightSavingAdjust(new Date(ja,G + Q,1)), this._getFormatConfig(a)) : qa;
            A = this._canAdjustMonth(a, 1, ja, G) ? b("<a>").attr({
                "class": "ui-datepicker-next ui-corner-all",
                "data-handler": "next",
                "data-event": "click",
                title: qa
            }).append(b("<span>").addClass("ui-icon ui-icon-circle-triangle-" + (r ? "w" : "e")).text(qa))[0].outerHTML : A ? "" : b("<a>").attr({
                "class": "ui-datepicker-next ui-corner-all ui-state-disabled",
                title: qa
            }).append(b("<span>").attr("class", "ui-icon ui-icon-circle-triangle-" + (r ? "w" : "e")).text(qa))[0].outerHTML;
            Q = this._get(a, "currentText");
            qa = this._get(a, "gotoCurrent") && a.currentDay ? ca : n;
            Q = L ? this.formatDate(Q, qa, this._getFormatConfig(a)) : Q;
            var Da = "";
            a.inline || (Da = b("<button>").attr({
                type: "button",
                "class": "ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all",
                "data-handler": "hide",
                "data-event": "click"
            }).text(this._get(a, "closeText"))[0].outerHTML);
            L = "";
            z && (L = b("<div class='ui-datepicker-buttonpane ui-widget-content'>").append(r ? Da : "").append(this._isInRange(a, qa) ? b("<button>").attr({
                type: "button",
                "class": "ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all",
                "data-handler": "today",
                "data-event": "click"
            }).text(Q) : "").append(r ? "" : Da)[0].outerHTML);
            z = parseInt(this._get(a, "firstDay"), 10);
            z = isNaN(z) ? 0 : z;
            Q = this._get(a, "showWeek");
            qa = this._get(a, "dayNames");
            Da = this._get(a, "dayNamesMin");
            var Ra = this._get(a, "monthNames");
            var Fa = this._get(a, "monthNamesShort");
            var Oa = this._get(a, "beforeShowDay");
            var Ta = this._get(a, "showOtherMonths");
            var pb = this._get(a, "selectOtherMonths");
            var tb = this._getDefaultDate(a);
            var zb = "";
            for (c = 0; c < U[0]; c++) {
                var yb = "";
                this.maxRows = 4;
                for (d = 0; d < U[1]; d++) {
                    var Kb = this._daylightSavingAdjust(new Date(ja,G,a.selectedDay));
                    var Ya = " ui-corner-all";
                    var Pa = "";
                    if (V) {
                        Pa += "<div class='ui-datepicker-group";
                        if (1 < U[1])
                            switch (d) {
                            case 0:
                                Pa += " ui-datepicker-group-first";
                                Ya = " ui-corner-" + (r ? "right" : "left");
                                break;
                            case U[1] - 1:
                                Pa += " ui-datepicker-group-last";
                                Ya = " ui-corner-" + (r ? "left" : "right");
                                break;
                            default:
                                Pa += " ui-datepicker-group-middle",
                                Ya = ""
                            }
                        Pa += "'>"
                    }
                    Pa += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + Ya + "'>" + (/all|left/.test(Ya) && 0 === c ? r ? A : ta : "") + (/all|right/.test(Ya) && 0 === c ? r ? ta : A : "") + this._generateMonthYearHeader(a, G, ja, ia, na, 0 < c || 0 < d, Ra, Fa) + "</div><table class='ui-datepicker-calendar'><thead><tr>";
                    var kb = Q ? "<th class='ui-datepicker-week-col'>" + this._get(a, "weekHeader") + "</th>" : "";
                    for (Ya = 0; 7 > Ya; Ya++) {
                        var ua = (Ya + z) % 7;
                        kb += "<th scope='col'" + (5 <= (Ya + z + 6) % 7 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + qa[ua] + "'>" + Da[ua] + "</span></th>"
                    }
                    Pa += kb + "</tr></thead><tbody>";
                    kb = this._getDaysInMonth(ja, G);
                    ja === a.selectedYear && G === a.selectedMonth && (a.selectedDay = Math.min(a.selectedDay, kb));
                    Ya = (this._getFirstDayOfMonth(ja, G) - z + 7) % 7;
                    kb = Math.ceil((Ya + kb) / 7);
                    this.maxRows = kb = V ? this.maxRows > kb ? this.maxRows : kb : kb;
                    ua = this._daylightSavingAdjust(new Date(ja,G,1 - Ya));
                    for (f = 0; f < kb; f++) {
                        Pa += "<tr>";
                        var ya = Q ? "<td class='ui-datepicker-week-col'>" + this._get(a, "calculateWeek")(ua) + "</td>" : "";
                        for (Ya = 0; 7 > Ya; Ya++) {
                            var jb = Oa ? Oa.apply(a.input ? a.input[0] : null, [ua]) : [!0, ""];
                            var Db = (h = ua.getMonth() !== G) && !pb || !jb[0] || ia && ua < ia || na && ua > na;
                            ya += "<td class='" + (5 <= (Ya + z + 6) % 7 ? " ui-datepicker-week-end" : "") + (h ? " ui-datepicker-other-month" : "") + (ua.getTime() === Kb.getTime() && G === a.selectedMonth && a._keyEvent || tb.getTime() === ua.getTime() && tb.getTime() === Kb.getTime() ? " " + this._dayOverClass : "") + (Db ? " " + this._unselectableClass + " ui-state-disabled" : "") + (h && !Ta ? "" : " " + jb[1] + (ua.getTime() === ca.getTime() ? " " + this._currentClass : "") + (ua.getTime() === n.getTime() ? " ui-datepicker-today" : "")) + "'" + (h && !Ta || !jb[2] ? "" : " title='" + jb[2].replace(/'/g, "&#39;") + "'") + (Db ? "" : " data-handler='selectDay' data-event='click' data-month='" + ua.getMonth() + "' data-year='" + ua.getFullYear() + "'") + ">" + (h && !Ta ? "&#xa0;" : Db ? "<span class='ui-state-default'>" + ua.getDate() + "</span>" : "<a class='ui-state-default" + (ua.getTime() === n.getTime() ? " ui-state-highlight" : "") + (ua.getTime() === ca.getTime() ? " ui-state-active" : "") + (h ? " ui-priority-secondary" : "") + "' href='#' aria-current='" + (ua.getTime() === ca.getTime() ? "true" : "false") + "' data-date='" + ua.getDate() + "'>" + ua.getDate() + "</a>") + "</td>";
                            ua.setDate(ua.getDate() + 1);
                            ua = this._daylightSavingAdjust(ua)
                        }
                        Pa += ya + "</tr>"
                    }
                    G++;
                    11 < G && (G = 0,
                    ja++);
                    Pa += "</tbody></table>" + (V ? "</div>" + (0 < U[0] && d === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
                    yb += Pa
                }
                zb += yb
            }
            a._keyEvent = !1;
            return zb + L
        },
        _generateMonthYearHeader: function(a, c, d, f, h, n, r, z) {
            var A = this._get(a, "changeMonth")
              , L = this._get(a, "changeYear")
              , U = this._get(a, "showMonthAfterYear");
            var G = this._get(a, "selectMonthLabel");
            var Q = this._get(a, "selectYearLabel")
              , V = "<div class='ui-datepicker-title'>"
              , ca = "";
            if (n || !A)
                ca += "<span class='ui-datepicker-month'>" + r[c] + "</span>";
            else {
                r = f && f.getFullYear() === d;
                var ia = h && h.getFullYear() === d;
                ca += "<select class='ui-datepicker-month' aria-label='" + G + "' data-handler='selectMonth' data-event='change'>";
                for (G = 0; 12 > G; G++)
                    (!r || G >= f.getMonth()) && (!ia || G <= h.getMonth()) && (ca += "<option value='" + G + "'" + (G === c ? " selected='selected'" : "") + ">" + z[G] + "</option>");
                ca += "</select>"
            }
            U || (V += ca + (!n && A && L ? "" : "&#xa0;"));
            if (!a.yearshtml)
                if (a.yearshtml = "",
                n || !L)
                    V += "<span class='ui-datepicker-year'>" + d + "</span>";
                else {
                    z = this._get(a, "yearRange").split(":");
                    var na = (new Date).getFullYear();
                    r = function(ja) {
                        ja = ja.match(/c[+\-].*/) ? d + parseInt(ja.substring(1), 10) : ja.match(/[+\-].*/) ? na + parseInt(ja, 10) : parseInt(ja, 10);
                        return isNaN(ja) ? na : ja
                    }
                    ;
                    c = r(z[0]);
                    z = Math.max(c, r(z[1] || ""));
                    c = f ? Math.max(c, f.getFullYear()) : c;
                    z = h ? Math.min(z, h.getFullYear()) : z;
                    for (a.yearshtml += "<select class='ui-datepicker-year' aria-label='" + Q + "' data-handler='selectYear' data-event='change'>"; c <= z; c++)
                        a.yearshtml += "<option value='" + c + "'" + (c === d ? " selected='selected'" : "") + ">" + c + "</option>";
                    a.yearshtml += "</select>";
                    V += a.yearshtml;
                    a.yearshtml = null
                }
            V += this._get(a, "yearSuffix");
            U && (V += (!n && A && L ? "" : "&#xa0;") + ca);
            return V + "</div>"
        },
        _adjustInstDate: function(a, c, d) {
            var f = a.selectedYear + ("Y" === d ? c : 0)
              , h = a.selectedMonth + ("M" === d ? c : 0);
            c = Math.min(a.selectedDay, this._getDaysInMonth(f, h)) + ("D" === d ? c : 0);
            f = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(f,h,c)));
            a.selectedDay = f.getDate();
            a.drawMonth = a.selectedMonth = f.getMonth();
            a.drawYear = a.selectedYear = f.getFullYear();
            "M" !== d && "Y" !== d || this._notifyChange(a)
        },
        _restrictMinMax: function(a, c) {
            var d = this._getMinMaxDate(a, "min");
            a = this._getMinMaxDate(a, "max");
            c = d && c < d ? d : c;
            return a && c > a ? a : c
        },
        _notifyChange: function(a) {
            var c = this._get(a, "onChangeMonthYear");
            c && c.apply(a.input ? a.input[0] : null, [a.selectedYear, a.selectedMonth + 1, a])
        },
        _getNumberOfMonths: function(a) {
            a = this._get(a, "numberOfMonths");
            return null == a ? [1, 1] : "number" === typeof a ? [1, a] : a
        },
        _getMinMaxDate: function(a, c) {
            return this._determineDate(a, this._get(a, c + "Date"), null)
        },
        _getDaysInMonth: function(a, c) {
            return 32 - this._daylightSavingAdjust(new Date(a,c,32)).getDate()
        },
        _getFirstDayOfMonth: function(a, c) {
            return (new Date(a,c,1)).getDay()
        },
        _canAdjustMonth: function(a, c, d, f) {
            var h = this._getNumberOfMonths(a);
            d = this._daylightSavingAdjust(new Date(d,f + (0 > c ? c : h[0] * h[1]),1));
            0 > c && d.setDate(this._getDaysInMonth(d.getFullYear(), d.getMonth()));
            return this._isInRange(a, d)
        },
        _isInRange: function(a, c) {
            var d = this._getMinMaxDate(a, "min")
              , f = this._getMinMaxDate(a, "max")
              , h = null
              , n = null;
            if (a = this._get(a, "yearRange")) {
                a = a.split(":");
                var r = (new Date).getFullYear();
                h = parseInt(a[0], 10);
                n = parseInt(a[1], 10);
                a[0].match(/[+\-].*/) && (h += r);
                a[1].match(/[+\-].*/) && (n += r)
            }
            return (!d || c.getTime() >= d.getTime()) && (!f || c.getTime() <= f.getTime()) && (!h || c.getFullYear() >= h) && (!n || c.getFullYear() <= n)
        },
        _getFormatConfig: function(a) {
            var c = this._get(a, "shortYearCutoff");
            c = "string" !== typeof c ? c : (new Date).getFullYear() % 100 + parseInt(c, 10);
            return {
                shortYearCutoff: c,
                dayNamesShort: this._get(a, "dayNamesShort"),
                dayNames: this._get(a, "dayNames"),
                monthNamesShort: this._get(a, "monthNamesShort"),
                monthNames: this._get(a, "monthNames")
            }
        },
        _formatDate: function(a, c, d, f) {
            c || (a.currentDay = a.selectedDay,
            a.currentMonth = a.selectedMonth,
            a.currentYear = a.selectedYear);
            c = c ? "object" === typeof c ? c : this._daylightSavingAdjust(new Date(f,d,c)) : this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));
            return this.formatDate(this._get(a, "dateFormat"), c, this._getFormatConfig(a))
        }
    });
    b.fn.datepicker = function(a) {
        if (!this.length)
            return this;
        b.datepicker.initialized || (b(document).on("mousedown", b.datepicker._checkExternalClick),
        b.datepicker.initialized = !0);
        0 === b("#" + b.datepicker._mainDivId).length && b("body").append(b.datepicker.dpDiv);
        var c = Array.prototype.slice.call(arguments, 1);
        return "string" === typeof a && ("isDisabled" === a || "getDate" === a || "widget" === a) || "option" === a && 2 === arguments.length && "string" === typeof arguments[1] ? b.datepicker["_" + a + "Datepicker"].apply(b.datepicker, [this[0]].concat(c)) : this.each(function() {
            "string" === typeof a ? b.datepicker["_" + a + "Datepicker"].apply(b.datepicker, [this].concat(c)) : b.datepicker._attachDatepicker(this, a)
        })
    }
    ;
    b.datepicker = new y;
    b.datepicker.initialized = !1;
    b.datepicker.uuid = (new Date).getTime();
    b.datepicker.version = "1.13.2";
    b.widget("ui.dialog", {
        version: "1.13.2",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            classes: {
                "ui-dialog": "ui-corner-all",
                "ui-dialog-titlebar": "ui-corner-all"
            },
            closeOnEscape: !0,
            closeText: "Close",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(a) {
                    var c = b(this).css(a).offset().top;
                    0 > c && b(this).css("top", a.top - c)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        resizableRelatedOptions: {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            };
            this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            };
            this.originalTitle = this.element.attr("title");
            null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle);
            this.options.disabled && (this.options.disabled = !1);
            this._createWrapper();
            this.element.show().removeAttr("title").appendTo(this.uiDialog);
            this._addClass("ui-dialog-content", "ui-widget-content");
            this._createTitlebar();
            this._createButtonPane();
            this.options.draggable && b.fn.draggable && this._makeDraggable();
            this.options.resizable && b.fn.resizable && this._makeResizable();
            this._isOpen = !1;
            this._trackFocus()
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        _appendTo: function() {
            var a = this.options.appendTo;
            return a && (a.jquery || a.nodeType) ? b(a) : this.document.find(a || "body").eq(0)
        },
        _destroy: function() {
            var a = this.originalPosition;
            this._untrackInstance();
            this._destroyOverlay();
            this.element.removeUniqueId().css(this.originalCss).detach();
            this.uiDialog.remove();
            this.originalTitle && this.element.attr("title", this.originalTitle);
            var c = a.parent.children().eq(a.index);
            c.length && c[0] !== this.element[0] ? c.before(this.element) : a.parent.append(this.element)
        },
        widget: function() {
            return this.uiDialog
        },
        disable: b.noop,
        enable: b.noop,
        close: function(a) {
            var c = this;
            this._isOpen && !1 !== this._trigger("beforeClose", a) && (this._isOpen = !1,
            this._focusedElement = null,
            this._destroyOverlay(),
            this._untrackInstance(),
            this.opener.filter(":focusable").trigger("focus").length || b.ui.safeBlur(b.ui.safeActiveElement(this.document[0])),
            this._hide(this.uiDialog, this.options.hide, function() {
                c._trigger("close", a)
            }))
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function() {
            this._moveToTop()
        },
        _moveToTop: function(a, c) {
            var d = !1
              , f = this.uiDialog.siblings(".ui-front:visible").map(function() {
                return +b(this).css("z-index")
            }).get();
            f = Math.max.apply(null, f);
            f >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", f + 1),
            d = !0);
            d && !c && this._trigger("focus", a);
            return d
        },
        open: function() {
            var a = this;
            this._isOpen ? this._moveToTop() && this._focusTabbable() : (this._isOpen = !0,
            this.opener = b(b.ui.safeActiveElement(this.document[0])),
            this._size(),
            this._position(),
            this._createOverlay(),
            this._moveToTop(null, !0),
            this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1),
            this._show(this.uiDialog, this.options.show, function() {
                a._focusTabbable();
                a._trigger("focus")
            }),
            this._makeFocusTarget(),
            this._trigger("open"))
        },
        _focusTabbable: function() {
            var a = this._focusedElement;
            a || (a = this.element.find("[autofocus]"));
            a.length || (a = this.element.find(":tabbable"));
            a.length || (a = this.uiDialogButtonPane.find(":tabbable"));
            a.length || (a = this.uiDialogTitlebarClose.filter(":tabbable"));
            a.length || (a = this.uiDialog);
            a.eq(0).trigger("focus")
        },
        _restoreTabbableFocus: function() {
            var a = b.ui.safeActiveElement(this.document[0]);
            this.uiDialog[0] === a || b.contains(this.uiDialog[0], a) || this._focusTabbable()
        },
        _keepFocus: function(a) {
            a.preventDefault();
            this._restoreTabbableFocus();
            this._delay(this._restoreTabbableFocus)
        },
        _createWrapper: function() {
            this.uiDialog = b("<div>").hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo());
            this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front");
            this._on(this.uiDialog, {
                keydown: function(a) {
                    if (this.options.closeOnEscape && !a.isDefaultPrevented() && a.keyCode && a.keyCode === b.ui.keyCode.ESCAPE)
                        a.preventDefault(),
                        this.close(a);
                    else if (a.keyCode === b.ui.keyCode.TAB && !a.isDefaultPrevented()) {
                        var c = this.uiDialog.find(":tabbable")
                          , d = c.first()
                          , f = c.last();
                        a.target !== f[0] && a.target !== this.uiDialog[0] || a.shiftKey ? a.target !== d[0] && a.target !== this.uiDialog[0] || !a.shiftKey || (this._delay(function() {
                            f.trigger("focus")
                        }),
                        a.preventDefault()) : (this._delay(function() {
                            d.trigger("focus")
                        }),
                        a.preventDefault())
                    }
                },
                mousedown: function(a) {
                    this._moveToTop(a) && this._focusTabbable()
                }
            });
            this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            })
        },
        _createTitlebar: function() {
            this.uiDialogTitlebar = b("<div>");
            this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix");
            this._on(this.uiDialogTitlebar, {
                mousedown: function(c) {
                    b(c.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus")
                }
            });
            this.uiDialogTitlebarClose = b("<button type='button'></button>").button({
                label: b("<a>").text(this.options.closeText).html(),
                icon: "ui-icon-closethick",
                showLabel: !1
            }).appendTo(this.uiDialogTitlebar);
            this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close");
            this._on(this.uiDialogTitlebarClose, {
                click: function(c) {
                    c.preventDefault();
                    this.close(c)
                }
            });
            var a = b("<span>").uniqueId().prependTo(this.uiDialogTitlebar);
            this._addClass(a, "ui-dialog-title");
            this._title(a);
            this.uiDialogTitlebar.prependTo(this.uiDialog);
            this.uiDialog.attr({
                "aria-labelledby": a.attr("id")
            })
        },
        _title: function(a) {
            this.options.title ? a.text(this.options.title) : a.html("&#160;")
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = b("<div>");
            this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix");
            this.uiButtonSet = b("<div>").appendTo(this.uiDialogButtonPane);
            this._addClass(this.uiButtonSet, "ui-dialog-buttonset");
            this._createButtons()
        },
        _createButtons: function() {
            var a = this
              , c = this.options.buttons;
            this.uiDialogButtonPane.remove();
            this.uiButtonSet.empty();
            b.isEmptyObject(c) || Array.isArray(c) && !c.length ? this._removeClass(this.uiDialog, "ui-dialog-buttons") : (b.each(c, function(d, f) {
                f = "function" === typeof f ? {
                    click: f,
                    text: d
                } : f;
                f = b.extend({
                    type: "button"
                }, f);
                var h = f.click;
                d = {
                    icon: f.icon,
                    iconPosition: f.iconPosition,
                    showLabel: f.showLabel,
                    icons: f.icons,
                    text: f.text
                };
                delete f.click;
                delete f.icon;
                delete f.iconPosition;
                delete f.showLabel;
                delete f.icons;
                "boolean" === typeof f.text && delete f.text;
                b("<button></button>", f).button(d).appendTo(a.uiButtonSet).on("click", function() {
                    h.apply(a.element[0], arguments)
                })
            }),
            this._addClass(this.uiDialog, "ui-dialog-buttons"),
            this.uiDialogButtonPane.appendTo(this.uiDialog))
        },
        _makeDraggable: function() {
            function a(f) {
                return {
                    position: f.position,
                    offset: f.offset
                }
            }
            var c = this
              , d = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(f, h) {
                    c._addClass(b(this), "ui-dialog-dragging");
                    c._blockFrames();
                    c._trigger("dragStart", f, a(h))
                },
                drag: function(f, h) {
                    c._trigger("drag", f, a(h))
                },
                stop: function(f, h) {
                    var n = h.offset.left - c.document.scrollLeft()
                      , r = h.offset.top - c.document.scrollTop();
                    d.position = {
                        my: "left top",
                        at: "left" + (0 <= n ? "+" : "") + n + " top" + (0 <= r ? "+" : "") + r,
                        of: c.window
                    };
                    c._removeClass(b(this), "ui-dialog-dragging");
                    c._unblockFrames();
                    c._trigger("dragStop", f, a(h))
                }
            })
        },
        _makeResizable: function() {
            function a(n) {
                return {
                    originalPosition: n.originalPosition,
                    originalSize: n.originalSize,
                    position: n.position,
                    size: n.size
                }
            }
            var c = this
              , d = this.options
              , f = d.resizable
              , h = this.uiDialog.css("position");
            f = "string" === typeof f ? f : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: d.maxWidth,
                maxHeight: d.maxHeight,
                minWidth: d.minWidth,
                minHeight: this._minHeight(),
                handles: f,
                start: function(n, r) {
                    c._addClass(b(this), "ui-dialog-resizing");
                    c._blockFrames();
                    c._trigger("resizeStart", n, a(r))
                },
                resize: function(n, r) {
                    c._trigger("resize", n, a(r))
                },
                stop: function(n, r) {
                    var z = c.uiDialog.offset()
                      , A = z.left - c.document.scrollLeft();
                    z = z.top - c.document.scrollTop();
                    d.height = c.uiDialog.height();
                    d.width = c.uiDialog.width();
                    d.position = {
                        my: "left top",
                        at: "left" + (0 <= A ? "+" : "") + A + " top" + (0 <= z ? "+" : "") + z,
                        of: c.window
                    };
                    c._removeClass(b(this), "ui-dialog-resizing");
                    c._unblockFrames();
                    c._trigger("resizeStop", n, a(r))
                }
            }).css("position", h)
        },
        _trackFocus: function() {
            this._on(this.widget(), {
                focusin: function(a) {
                    this._makeFocusTarget();
                    this._focusedElement = b(a.target)
                }
            })
        },
        _makeFocusTarget: function() {
            this._untrackInstance();
            this._trackingInstances().unshift(this)
        },
        _untrackInstance: function() {
            var a = this._trackingInstances()
              , c = b.inArray(this, a);
            -1 !== c && a.splice(c, 1)
        },
        _trackingInstances: function() {
            var a = this.document.data("ui-dialog-instances");
            a || (a = [],
            this.document.data("ui-dialog-instances", a));
            return a
        },
        _minHeight: function() {
            var a = this.options;
            return "auto" === a.height ? a.minHeight : Math.min(a.minHeight, a.height)
        },
        _position: function() {
            var a = this.uiDialog.is(":visible");
            a || this.uiDialog.show();
            this.uiDialog.position(this.options.position);
            a || this.uiDialog.hide()
        },
        _setOptions: function(a) {
            var c = this
              , d = !1
              , f = {};
            b.each(a, function(h, n) {
                c._setOption(h, n);
                h in c.sizeRelatedOptions && (d = !0);
                h in c.resizableRelatedOptions && (f[h] = n)
            });
            d && (this._size(),
            this._position());
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", f)
        },
        _setOption: function(a, c) {
            var d, f = this.uiDialog;
            "disabled" !== a && (this._super(a, c),
            "appendTo" === a && this.uiDialog.appendTo(this._appendTo()),
            "buttons" === a && this._createButtons(),
            "closeText" === a && this.uiDialogTitlebarClose.button({
                label: b("<a>").text("" + this.options.closeText).html()
            }),
            "draggable" === a && ((d = f.is(":data(ui-draggable)")) && !c && f.draggable("destroy"),
            !d && c && this._makeDraggable()),
            "position" === a && this._position(),
            "resizable" === a && ((d = f.is(":data(ui-resizable)")) && !c && f.resizable("destroy"),
            d && "string" === typeof c && f.resizable("option", "handles", c),
            d || !1 === c || this._makeResizable()),
            "title" === a && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function() {
            var a = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            });
            a.minWidth > a.width && (a.width = a.minWidth);
            var c = this.uiDialog.css({
                height: "auto",
                width: a.width
            }).outerHeight();
            var d = Math.max(0, a.minHeight - c);
            var f = "number" === typeof a.maxHeight ? Math.max(0, a.maxHeight - c) : "none";
            "auto" === a.height ? this.element.css({
                minHeight: d,
                maxHeight: f,
                height: "auto"
            }) : this.element.height(Math.max(0, a.height - c));
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var a = b(this);
                return b("<div>").css({
                    position: "absolute",
                    width: a.outerWidth(),
                    height: a.outerHeight()
                }).appendTo(a.parent()).offset(a.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(),
            delete this.iframeBlocks)
        },
        _allowInteraction: function(a) {
            return b(a.target).closest(".ui-dialog").length ? !0 : !!b(a.target).closest(".ui-datepicker").length
        },
        _createOverlay: function() {
            if (this.options.modal) {
                var a = b.fn.jquery.substring(0, 4)
                  , c = !0;
                this._delay(function() {
                    c = !1
                });
                if (!this.document.data("ui-dialog-overlays"))
                    this.document.on("focusin.ui-dialog", function(d) {
                        if (!c) {
                            var f = this._trackingInstances()[0];
                            f._allowInteraction(d) || (d.preventDefault(),
                            f._focusTabbable(),
                            "3.4." !== a && "3.5." !== a || f._delay(f._restoreTabbableFocus))
                        }
                    }
                    .bind(this));
                this.overlay = b("<div>").appendTo(this._appendTo());
                this._addClass(this.overlay, null, "ui-widget-overlay ui-front");
                this._on(this.overlay, {
                    mousedown: "_keepFocus"
                });
                this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
            }
        },
        _destroyOverlay: function() {
            if (this.options.modal && this.overlay) {
                var a = this.document.data("ui-dialog-overlays") - 1;
                a ? this.document.data("ui-dialog-overlays", a) : (this.document.off("focusin.ui-dialog"),
                this.document.removeData("ui-dialog-overlays"));
                this.overlay.remove();
                this.overlay = null
            }
        }
    });
    !1 !== b.uiBackCompat && b.widget("ui.dialog", b.ui.dialog, {
        options: {
            dialogClass: ""
        },
        _createWrapper: function() {
            this._super();
            this.uiDialog.addClass(this.options.dialogClass)
        },
        _setOption: function(a, c) {
            "dialogClass" === a && this.uiDialog.removeClass(this.options.dialogClass).addClass(c);
            this._superApply(arguments)
        }
    });
    b.widget("ui.progressbar", {
        version: "1.13.2",
        options: {
            classes: {
                "ui-progressbar": "ui-corner-all",
                "ui-progressbar-value": "ui-corner-left",
                "ui-progressbar-complete": "ui-corner-right"
            },
            max: 100,
            value: 0,
            change: null,
            complete: null
        },
        min: 0,
        _create: function() {
            this.oldValue = this.options.value = this._constrainedValue();
            this.element.attr({
                role: "progressbar",
                "aria-valuemin": this.min
            });
            this._addClass("ui-progressbar", "ui-widget ui-widget-content");
            this.valueDiv = b("<div>").appendTo(this.element);
            this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header");
            this._refreshValue()
        },
        _destroy: function() {
            this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow");
            this.valueDiv.remove()
        },
        value: function(a) {
            if (void 0 === a)
                return this.options.value;
            this.options.value = this._constrainedValue(a);
            this._refreshValue()
        },
        _constrainedValue: function(a) {
            void 0 === a && (a = this.options.value);
            this.indeterminate = !1 === a;
            "number" !== typeof a && (a = 0);
            return this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, a))
        },
        _setOptions: function(a) {
            var c = a.value;
            delete a.value;
            this._super(a);
            this.options.value = this._constrainedValue(c);
            this._refreshValue()
        },
        _setOption: function(a, c) {
            "max" === a && (c = Math.max(this.min, c));
            this._super(a, c)
        },
        _setOptionDisabled: function(a) {
            this._super(a);
            this.element.attr("aria-disabled", a);
            this._toggleClass(null, "ui-state-disabled", !!a)
        },
        _percentage: function() {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        },
        _refreshValue: function() {
            var a = this.options.value
              , c = this._percentage();
            this.valueDiv.toggle(this.indeterminate || a > this.min).width(c.toFixed(0) + "%");
            this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, a === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate);
            this.indeterminate ? (this.element.removeAttr("aria-valuenow"),
            this.overlayDiv || (this.overlayDiv = b("<div>").appendTo(this.valueDiv),
            this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": a
            }),
            this.overlayDiv && (this.overlayDiv.remove(),
            this.overlayDiv = null));
            this.oldValue !== a && (this.oldValue = a,
            this._trigger("change"));
            a === this.options.max && this._trigger("complete")
        }
    });
    b.widget("ui.selectmenu", [b.ui.formResetMixin, {
        version: "1.13.2",
        defaultElement: "<select>",
        options: {
            appendTo: null,
            classes: {
                "ui-selectmenu-button-open": "ui-corner-top",
                "ui-selectmenu-button-closed": "ui-corner-all"
            },
            disabled: null,
            icons: {
                button: "ui-icon-triangle-1-s"
            },
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            width: !1,
            change: null,
            close: null,
            focus: null,
            open: null,
            select: null
        },
        _create: function() {
            var a = this.element.uniqueId().attr("id");
            this.ids = {
                element: a,
                button: a + "-button",
                menu: a + "-menu"
            };
            this._drawButton();
            this._drawMenu();
            this._bindFormResetHandler();
            this._rendered = !1;
            this.menuItems = b()
        },
        _drawButton: function() {
            var a = this
              , c = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
            this.labels = this.element.labels().attr("for", this.ids.button);
            this._on(this.labels, {
                click: function(f) {
                    this.button.trigger("focus");
                    f.preventDefault()
                }
            });
            this.element.hide();
            this.button = b("<span>", {
                tabindex: this.options.disabled ? -1 : 0,
                id: this.ids.button,
                role: "combobox",
                "aria-expanded": "false",
                "aria-autocomplete": "list",
                "aria-owns": this.ids.menu,
                "aria-haspopup": "true",
                title: this.element.attr("title")
            }).insertAfter(this.element);
            this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget");
            var d = b("<span>").appendTo(this.button);
            this._addClass(d, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button);
            this.buttonItem = this._renderButtonItem(c).appendTo(this.button);
            !1 !== this.options.width && this._resizeButton();
            this._on(this.button, this._buttonEvents);
            this.button.one("focusin", function() {
                a._rendered || a._refreshMenu()
            })
        },
        _drawMenu: function() {
            var a = this;
            this.menu = b("<ul>", {
                "aria-hidden": "true",
                "aria-labelledby": this.ids.button,
                id: this.ids.menu
            });
            this.menuWrap = b("<div>").append(this.menu);
            this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front");
            this.menuWrap.appendTo(this._appendTo());
            this.menuInstance = this.menu.menu({
                classes: {
                    "ui-menu": "ui-corner-bottom"
                },
                role: "listbox",
                select: function(c, d) {
                    c.preventDefault();
                    a._setSelection();
                    a._select(d.item.data("ui-selectmenu-item"), c)
                },
                focus: function(c, d) {
                    d = d.item.data("ui-selectmenu-item");
                    null != a.focusIndex && d.index !== a.focusIndex && (a._trigger("focus", c, {
                        item: d
                    }),
                    a.isOpen || a._select(d, c));
                    a.focusIndex = d.index;
                    a.button.attr("aria-activedescendant", a.menuItems.eq(d.index).attr("id"))
                }
            }).menu("instance");
            this.menuInstance._off(this.menu, "mouseleave");
            this.menuInstance._closeOnDocumentClick = function() {
                return !1
            }
            ;
            this.menuInstance._isDivider = function() {
                return !1
            }
        },
        refresh: function() {
            this._refreshMenu();
            this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {}));
            null === this.options.width && this._resizeButton()
        },
        _refreshMenu: function() {
            var a = this.element.find("option");
            this.menu.empty();
            this._parseOptions(a);
            this._renderMenu(this.menu, this.items);
            this.menuInstance.refresh();
            this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper");
            this._rendered = !0;
            a.length && (a = this._getSelectedItem(),
            this.menuInstance.focus(null, a),
            this._setAria(a.data("ui-selectmenu-item")),
            this._setOption("disabled", this.element.prop("disabled")))
        },
        open: function(a) {
            this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"),
            this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(),
            this.menuItems.length && (this.isOpen = !0,
            this._toggleAttr(),
            this._resizeMenu(),
            this._position(),
            this._on(this.document, this._documentClick),
            this._trigger("open", a)))
        },
        _position: function() {
            this.menuWrap.position(b.extend({
                of: this.button
            }, this.options.position))
        },
        close: function(a) {
            this.isOpen && (this.isOpen = !1,
            this._toggleAttr(),
            this.range = null,
            this._off(this.document),
            this._trigger("close", a))
        },
        widget: function() {
            return this.button
        },
        menuWidget: function() {
            return this.menu
        },
        _renderButtonItem: function(a) {
            var c = b("<span>");
            this._setText(c, a.label);
            this._addClass(c, "ui-selectmenu-text");
            return c
        },
        _renderMenu: function(a, c) {
            var d = this
              , f = "";
            b.each(c, function(h, n) {
                n.optgroup !== f && (h = b("<li>", {
                    text: n.optgroup
                }),
                d._addClass(h, "ui-selectmenu-optgroup", "ui-menu-divider" + (n.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")),
                h.appendTo(a),
                f = n.optgroup);
                d._renderItemData(a, n)
            })
        },
        _renderItemData: function(a, c) {
            return this._renderItem(a, c).data("ui-selectmenu-item", c)
        },
        _renderItem: function(a, c) {
            var d = b("<li>")
              , f = b("<div>", {
                title: c.element.attr("title")
            });
            c.disabled && this._addClass(d, null, "ui-state-disabled");
            this._setText(f, c.label);
            return d.append(f).appendTo(a)
        },
        _setText: function(a, c) {
            c ? a.text(c) : a.html("&#160;")
        },
        _move: function(a, c) {
            var d = ".ui-menu-item";
            if (this.isOpen)
                var f = this.menuItems.eq(this.focusIndex).parent("li");
            else
                f = this.menuItems.eq(this.element[0].selectedIndex).parent("li"),
                d += ":not(.ui-state-disabled)";
            a = "first" === a || "last" === a ? f["first" === a ? "prevAll" : "nextAll"](d).eq(-1) : f[a + "All"](d).eq(0);
            a.length && this.menuInstance.focus(c, a)
        },
        _getSelectedItem: function() {
            return this.menuItems.eq(this.element[0].selectedIndex).parent("li")
        },
        _toggle: function(a) {
            this[this.isOpen ? "close" : "open"](a)
        },
        _setSelection: function() {
            if (this.range) {
                if (window.getSelection) {
                    var a = window.getSelection();
                    a.removeAllRanges();
                    a.addRange(this.range)
                } else
                    this.range.select();
                this.button.trigger("focus")
            }
        },
        _documentClick: {
            mousedown: function(a) {
                this.isOpen && (b(a.target).closest(".ui-selectmenu-menu, #" + b.escapeSelector(this.ids.button)).length || this.close(a))
            }
        },
        _buttonEvents: {
            mousedown: function() {
                if (window.getSelection) {
                    var a = window.getSelection();
                    a.rangeCount && (this.range = a.getRangeAt(0))
                } else
                    this.range = document.selection.createRange()
            },
            click: function(a) {
                this._setSelection();
                this._toggle(a)
            },
            keydown: function(a) {
                var c = !0;
                switch (a.keyCode) {
                case b.ui.keyCode.TAB:
                case b.ui.keyCode.ESCAPE:
                    this.close(a);
                    c = !1;
                    break;
                case b.ui.keyCode.ENTER:
                    this.isOpen && this._selectFocusedItem(a);
                    break;
                case b.ui.keyCode.UP:
                    a.altKey ? this._toggle(a) : this._move("prev", a);
                    break;
                case b.ui.keyCode.DOWN:
                    a.altKey ? this._toggle(a) : this._move("next", a);
                    break;
                case b.ui.keyCode.SPACE:
                    this.isOpen ? this._selectFocusedItem(a) : this._toggle(a);
                    break;
                case b.ui.keyCode.LEFT:
                    this._move("prev", a);
                    break;
                case b.ui.keyCode.RIGHT:
                    this._move("next", a);
                    break;
                case b.ui.keyCode.HOME:
                case b.ui.keyCode.PAGE_UP:
                    this._move("first", a);
                    break;
                case b.ui.keyCode.END:
                case b.ui.keyCode.PAGE_DOWN:
                    this._move("last", a);
                    break;
                default:
                    this.menu.trigger(a),
                    c = !1
                }
                c && a.preventDefault()
            }
        },
        _selectFocusedItem: function(a) {
            var c = this.menuItems.eq(this.focusIndex).parent("li");
            c.hasClass("ui-state-disabled") || this._select(c.data("ui-selectmenu-item"), a)
        },
        _select: function(a, c) {
            var d = this.element[0].selectedIndex;
            this.element[0].selectedIndex = a.index;
            this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(a));
            this._setAria(a);
            this._trigger("select", c, {
                item: a
            });
            a.index !== d && this._trigger("change", c, {
                item: a
            });
            this.close(c)
        },
        _setAria: function(a) {
            a = this.menuItems.eq(a.index).attr("id");
            this.button.attr({
                "aria-labelledby": a,
                "aria-activedescendant": a
            });
            this.menu.attr("aria-activedescendant", a)
        },
        _setOption: function(a, c) {
            if ("icons" === a) {
                var d = this.button.find("span.ui-icon");
                this._removeClass(d, null, this.options.icons.button)._addClass(d, null, c.button)
            }
            this._super(a, c);
            "appendTo" === a && this.menuWrap.appendTo(this._appendTo());
            "width" === a && this._resizeButton()
        },
        _setOptionDisabled: function(a) {
            this._super(a);
            this.menuInstance.option("disabled", a);
            this.button.attr("aria-disabled", a);
            this._toggleClass(this.button, null, "ui-state-disabled", a);
            this.element.prop("disabled", a);
            a ? (this.button.attr("tabindex", -1),
            this.close()) : this.button.attr("tabindex", 0)
        },
        _appendTo: function() {
            var a = this.options.appendTo;
            a && (a = a.jquery || a.nodeType ? b(a) : this.document.find(a).eq(0));
            a && a[0] || (a = this.element.closest(".ui-front, dialog"));
            a.length || (a = this.document[0].body);
            return a
        },
        _toggleAttr: function() {
            this.button.attr("aria-expanded", this.isOpen);
            this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen);
            this.menu.attr("aria-hidden", !this.isOpen)
        },
        _resizeButton: function() {
            var a = this.options.width;
            !1 === a ? this.button.css("width", "") : (null === a && (a = this.element.show().outerWidth(),
            this.element.hide()),
            this.button.outerWidth(a))
        },
        _resizeMenu: function() {
            this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
        },
        _getCreateOptions: function() {
            var a = this._super();
            a.disabled = this.element.prop("disabled");
            return a
        },
        _parseOptions: function(a) {
            var c = this
              , d = [];
            a.each(function(f, h) {
                h.hidden || d.push(c._parseOption(b(h), f))
            });
            this.items = d
        },
        _parseOption: function(a, c) {
            var d = a.parent("optgroup");
            return {
                element: a,
                index: c,
                value: a.val(),
                label: a.text(),
                optgroup: d.attr("label") || "",
                disabled: d.prop("disabled") || a.prop("disabled")
            }
        },
        _destroy: function() {
            this._unbindFormResetHandler();
            this.menuWrap.remove();
            this.button.remove();
            this.element.show();
            this.element.removeUniqueId();
            this.labels.attr("for", this.ids.element)
        }
    }]);
    b.widget("ui.slider", b.ui.mouse, {
        version: "1.13.2",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            classes: {
                "ui-slider": "ui-corner-all",
                "ui-slider-handle": "ui-corner-all",
                "ui-slider-range": "ui-corner-all ui-widget-header"
            },
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function() {
            this._mouseSliding = this._keySliding = !1;
            this._animateOff = !0;
            this._handleIndex = null;
            this._detectOrientation();
            this._mouseInit();
            this._calculateNewMax();
            this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content");
            this._refresh();
            this._animateOff = !1
        },
        _refresh: function() {
            this._createRange();
            this._createHandles();
            this._setupEvents();
            this._refreshValue()
        },
        _createHandles: function() {
            var a = this.options;
            var c = this.element.find(".ui-slider-handle")
              , d = [];
            var f = a.values && a.values.length || 1;
            c.length > f && (c.slice(f).remove(),
            c = c.slice(0, f));
            for (a = c.length; a < f; a++)
                d.push("<span tabindex='0'></span>");
            this.handles = c.add(b(d.join("")).appendTo(this.element));
            this._addClass(this.handles, "ui-slider-handle", "ui-state-default");
            this.handle = this.handles.eq(0);
            this.handles.each(function(h) {
                b(this).data("ui-slider-handle-index", h).attr("tabIndex", 0)
            })
        },
        _createRange: function() {
            var a = this.options;
            a.range ? (!0 === a.range && (a.values ? a.values.length && 2 !== a.values.length ? a.values = [a.values[0], a.values[0]] : Array.isArray(a.values) && (a.values = a.values.slice(0)) : a.values = [this._valueMin(), this._valueMin()]),
            this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"),
            this.range.css({
                left: "",
                bottom: ""
            })) : (this.range = b("<div>").appendTo(this.element),
            this._addClass(this.range, "ui-slider-range")),
            "min" !== a.range && "max" !== a.range || this._addClass(this.range, "ui-slider-range-" + a.range)) : (this.range && this.range.remove(),
            this.range = null)
        },
        _setupEvents: function() {
            this._off(this.handles);
            this._on(this.handles, this._handleEvents);
            this._hoverable(this.handles);
            this._focusable(this.handles)
        },
        _destroy: function() {
            this.handles.remove();
            this.range && this.range.remove();
            this._mouseDestroy()
        },
        _mouseCapture: function(a) {
            var c, d, f = this, h = this.options;
            if (h.disabled)
                return !1;
            this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            };
            this.elementOffset = this.element.offset();
            var n = this._normValueFromMouse({
                x: a.pageX,
                y: a.pageY
            });
            var r = this._valueMax() - this._valueMin() + 1;
            this.handles.each(function(A) {
                var L = Math.abs(n - f.values(A));
                if (r > L || r === L && (A === f._lastChangedValue || f.values(A) === h.min))
                    r = L,
                    c = b(this),
                    d = A
            });
            if (!1 === this._start(a, d))
                return !1;
            this._mouseSliding = !0;
            this._handleIndex = d;
            this._addClass(c, null, "ui-state-active");
            c.trigger("focus");
            var z = c.offset();
            this._clickOffset = b(a.target).parents().addBack().is(".ui-slider-handle") ? {
                left: a.pageX - z.left - c.width() / 2,
                top: a.pageY - z.top - c.height() / 2 - (parseInt(c.css("borderTopWidth"), 10) || 0) - (parseInt(c.css("borderBottomWidth"), 10) || 0) + (parseInt(c.css("marginTop"), 10) || 0)
            } : {
                left: 0,
                top: 0
            };
            this.handles.hasClass("ui-state-hover") || this._slide(a, d, n);
            return this._animateOff = !0
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(a) {
            var c = this._normValueFromMouse({
                x: a.pageX,
                y: a.pageY
            });
            this._slide(a, this._handleIndex, c);
            return !1
        },
        _mouseStop: function(a) {
            this._removeClass(this.handles, null, "ui-state-active");
            this._mouseSliding = !1;
            this._stop(a, this._handleIndex);
            this._change(a, this._handleIndex);
            this._clickOffset = this._handleIndex = null;
            return this._animateOff = !1
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(a) {
            if ("horizontal" === this.orientation) {
                var c = this.elementSize.width;
                a = a.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)
            } else
                c = this.elementSize.height,
                a = a.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0);
            c = a / c;
            1 < c && (c = 1);
            0 > c && (c = 0);
            "vertical" === this.orientation && (c = 1 - c);
            a = this._valueMax() - this._valueMin();
            c = this._valueMin() + c * a;
            return this._trimAlignValue(c)
        },
        _uiHash: function(a, c, d) {
            var f = {
                handle: this.handles[a],
                handleIndex: a,
                value: void 0 !== c ? c : this.value()
            };
            this._hasMultipleValues() && (f.value = void 0 !== c ? c : this.values(a),
            f.values = d || this.values());
            return f
        },
        _hasMultipleValues: function() {
            return this.options.values && this.options.values.length
        },
        _start: function(a, c) {
            return this._trigger("start", a, this._uiHash(c))
        },
        _slide: function(a, c, d) {
            var f = this.value()
              , h = this.values();
            if (this._hasMultipleValues()) {
                var n = this.values(c ? 0 : 1);
                f = this.values(c);
                2 === this.options.values.length && !0 === this.options.range && (d = 0 === c ? Math.min(n, d) : Math.max(n, d));
                h[c] = d
            }
            d !== f && !1 !== this._trigger("slide", a, this._uiHash(c, d, h)) && (this._hasMultipleValues() ? this.values(c, d) : this.value(d))
        },
        _stop: function(a, c) {
            this._trigger("stop", a, this._uiHash(c))
        },
        _change: function(a, c) {
            this._keySliding || this._mouseSliding || (this._lastChangedValue = c,
            this._trigger("change", a, this._uiHash(c)))
        },
        value: function(a) {
            if (arguments.length)
                this.options.value = this._trimAlignValue(a),
                this._refreshValue(),
                this._change(null, 0);
            else
                return this._value()
        },
        values: function(a, c) {
            var d;
            if (1 < arguments.length)
                this.options.values[a] = this._trimAlignValue(c),
                this._refreshValue(),
                this._change(null, a);
            else if (arguments.length)
                if (Array.isArray(arguments[0])) {
                    var f = this.options.values;
                    var h = arguments[0];
                    for (d = 0; d < f.length; d += 1)
                        f[d] = this._trimAlignValue(h[d]),
                        this._change(null, d);
                    this._refreshValue()
                } else
                    return this._hasMultipleValues() ? this._values(a) : this.value();
            else
                return this._values()
        },
        _setOption: function(a, c) {
            var d = 0;
            "range" === a && !0 === this.options.range && ("min" === c ? (this.options.value = this._values(0),
            this.options.values = null) : "max" === c && (this.options.value = this._values(this.options.values.length - 1),
            this.options.values = null));
            Array.isArray(this.options.values) && (d = this.options.values.length);
            this._super(a, c);
            switch (a) {
            case "orientation":
                this._detectOrientation();
                this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation);
                this._refreshValue();
                this.options.range && this._refreshRange(c);
                this.handles.css("horizontal" === c ? "bottom" : "left", "");
                break;
            case "value":
                this._animateOff = !0;
                this._refreshValue();
                this._change(null, 0);
                this._animateOff = !1;
                break;
            case "values":
                this._animateOff = !0;
                this._refreshValue();
                for (a = d - 1; 0 <= a; a--)
                    this._change(null, a);
                this._animateOff = !1;
                break;
            case "step":
            case "min":
            case "max":
                this._animateOff = !0;
                this._calculateNewMax();
                this._refreshValue();
                this._animateOff = !1;
                break;
            case "range":
                this._animateOff = !0,
                this._refresh(),
                this._animateOff = !1
            }
        },
        _setOptionDisabled: function(a) {
            this._super(a);
            this._toggleClass(null, "ui-state-disabled", !!a)
        },
        _value: function() {
            var a = this.options.value;
            return a = this._trimAlignValue(a)
        },
        _values: function(a) {
            var c;
            if (arguments.length) {
                var d = this.options.values[a];
                return d = this._trimAlignValue(d)
            }
            if (this._hasMultipleValues()) {
                d = this.options.values.slice();
                for (c = 0; c < d.length; c += 1)
                    d[c] = this._trimAlignValue(d[c]);
                return d
            }
            return []
        },
        _trimAlignValue: function(a) {
            if (a <= this._valueMin())
                return this._valueMin();
            if (a >= this._valueMax())
                return this._valueMax();
            var c = 0 < this.options.step ? this.options.step : 1
              , d = (a - this._valueMin()) % c;
            a -= d;
            2 * Math.abs(d) >= c && (a += 0 < d ? c : -c);
            return parseFloat(a.toFixed(5))
        },
        _calculateNewMax: function() {
            var a = this.options.max
              , c = this._valueMin()
              , d = this.options.step;
            a = Math.round((a - c) / d) * d + c;
            a > this.options.max && (a -= d);
            this.max = parseFloat(a.toFixed(this._precision()))
        },
        _precision: function() {
            var a = this._precisionOf(this.options.step);
            null !== this.options.min && (a = Math.max(a, this._precisionOf(this.options.min)));
            return a
        },
        _precisionOf: function(a) {
            a = a.toString();
            var c = a.indexOf(".");
            return -1 === c ? 0 : a.length - c - 1
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.max
        },
        _refreshRange: function(a) {
            "vertical" === a && this.range.css({
                width: "",
                left: ""
            });
            "horizontal" === a && this.range.css({
                height: "",
                bottom: ""
            })
        },
        _refreshValue: function() {
            var a, c = this.options.range, d = this.options, f = this, h = this._animateOff ? !1 : d.animate, n = {};
            if (this._hasMultipleValues())
                this.handles.each(function(U) {
                    L = (f.values(U) - f._valueMin()) / (f._valueMax() - f._valueMin()) * 100;
                    n["horizontal" === f.orientation ? "left" : "bottom"] = L + "%";
                    b(this).stop(1, 1)[h ? "animate" : "css"](n, d.animate);
                    if (!0 === f.options.range)
                        if ("horizontal" === f.orientation) {
                            if (0 === U)
                                f.range.stop(1, 1)[h ? "animate" : "css"]({
                                    left: L + "%"
                                }, d.animate);
                            if (1 === U)
                                f.range[h ? "animate" : "css"]({
                                    width: L - a + "%"
                                }, {
                                    queue: !1,
                                    duration: d.animate
                                })
                        } else {
                            if (0 === U)
                                f.range.stop(1, 1)[h ? "animate" : "css"]({
                                    bottom: L + "%"
                                }, d.animate);
                            if (1 === U)
                                f.range[h ? "animate" : "css"]({
                                    height: L - a + "%"
                                }, {
                                    queue: !1,
                                    duration: d.animate
                                })
                        }
                    a = L
                });
            else {
                var r = this.value();
                var z = this._valueMin();
                var A = this._valueMax();
                var L = A !== z ? (r - z) / (A - z) * 100 : 0;
                n["horizontal" === this.orientation ? "left" : "bottom"] = L + "%";
                this.handle.stop(1, 1)[h ? "animate" : "css"](n, d.animate);
                if ("min" === c && "horizontal" === this.orientation)
                    this.range.stop(1, 1)[h ? "animate" : "css"]({
                        width: L + "%"
                    }, d.animate);
                if ("max" === c && "horizontal" === this.orientation)
                    this.range.stop(1, 1)[h ? "animate" : "css"]({
                        width: 100 - L + "%"
                    }, d.animate);
                if ("min" === c && "vertical" === this.orientation)
                    this.range.stop(1, 1)[h ? "animate" : "css"]({
                        height: L + "%"
                    }, d.animate);
                if ("max" === c && "vertical" === this.orientation)
                    this.range.stop(1, 1)[h ? "animate" : "css"]({
                        height: 100 - L + "%"
                    }, d.animate)
            }
        },
        _handleEvents: {
            keydown: function(a) {
                var c, d = b(a.target).data("ui-slider-handle-index");
                switch (a.keyCode) {
                case b.ui.keyCode.HOME:
                case b.ui.keyCode.END:
                case b.ui.keyCode.PAGE_UP:
                case b.ui.keyCode.PAGE_DOWN:
                case b.ui.keyCode.UP:
                case b.ui.keyCode.RIGHT:
                case b.ui.keyCode.DOWN:
                case b.ui.keyCode.LEFT:
                    if (a.preventDefault(),
                    !this._keySliding) {
                        this._keySliding = !0;
                        this._addClass(b(a.target), null, "ui-state-active");
                        var f = this._start(a, d);
                        if (!1 === f)
                            return
                    }
                }
                var h = this.options.step;
                f = this._hasMultipleValues() ? c = this.values(d) : c = this.value();
                switch (a.keyCode) {
                case b.ui.keyCode.HOME:
                    c = this._valueMin();
                    break;
                case b.ui.keyCode.END:
                    c = this._valueMax();
                    break;
                case b.ui.keyCode.PAGE_UP:
                    c = this._trimAlignValue(f + (this._valueMax() - this._valueMin()) / this.numPages);
                    break;
                case b.ui.keyCode.PAGE_DOWN:
                    c = this._trimAlignValue(f - (this._valueMax() - this._valueMin()) / this.numPages);
                    break;
                case b.ui.keyCode.UP:
                case b.ui.keyCode.RIGHT:
                    if (f === this._valueMax())
                        return;
                    c = this._trimAlignValue(f + h);
                    break;
                case b.ui.keyCode.DOWN:
                case b.ui.keyCode.LEFT:
                    if (f === this._valueMin())
                        return;
                    c = this._trimAlignValue(f - h)
                }
                this._slide(a, d, c)
            },
            keyup: function(a) {
                var c = b(a.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1,
                this._stop(a, c),
                this._change(a, c),
                this._removeClass(b(a.target), null, "ui-state-active"))
            }
        }
    });
    b.widget("ui.spinner", {
        version: "1.13.2",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            classes: {
                "ui-spinner": "ui-corner-all",
                "ui-spinner-down": "ui-corner-br",
                "ui-spinner-up": "ui-corner-tr"
            },
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._setOption("max", this.options.max);
            this._setOption("min", this.options.min);
            this._setOption("step", this.options.step);
            "" !== this.value() && this._value(this.element.val(), !0);
            this._draw();
            this._on(this._events);
            this._refresh();
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function() {
            var a = this._super()
              , c = this.element;
            b.each(["min", "max", "step"], function(d, f) {
                d = c.attr(f);
                null != d && d.length && (a[f] = d)
            });
            return a
        },
        _events: {
            keydown: function(a) {
                this._start(a) && this._keydown(a) && a.preventDefault()
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val()
            },
            blur: function(a) {
                this.cancelBlur ? delete this.cancelBlur : (this._stop(),
                this._refresh(),
                this.previous !== this.element.val() && this._trigger("change", a))
            },
            mousewheel: function(a, c) {
                var d = b.ui.safeActiveElement(this.document[0]);
                if (this.element[0] === d && c) {
                    if (!this.spinning && !this._start(a))
                        return !1;
                    this._spin((0 < c ? 1 : -1) * this.options.step, a);
                    clearTimeout(this.mousewheelTimer);
                    this.mousewheelTimer = this._delay(function() {
                        this.spinning && this._stop(a)
                    }, 100);
                    a.preventDefault()
                }
            },
            "mousedown .ui-spinner-button": function(a) {
                function c() {
                    this.element[0] !== b.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"),
                    this.previous = d,
                    this._delay(function() {
                        this.previous = d
                    }))
                }
                var d = this.element[0] === b.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val();
                a.preventDefault();
                c.call(this);
                this.cancelBlur = !0;
                this._delay(function() {
                    delete this.cancelBlur;
                    c.call(this)
                });
                !1 !== this._start(a) && this._repeat(null, b(a.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, a)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(a) {
                if (b(a.currentTarget).hasClass("ui-state-active")) {
                    if (!1 === this._start(a))
                        return !1;
                    this._repeat(null, b(a.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, a)
                }
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _enhance: function() {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>")
        },
        _draw: function() {
            this._enhance();
            this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content");
            this._addClass("ui-spinner-input");
            this.element.attr("role", "spinbutton");
            this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({
                classes: {
                    "ui-button": ""
                }
            });
            this._removeClass(this.buttons, "ui-corner-all");
            this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up");
            this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down");
            this.buttons.first().button({
                icon: this.options.icons.up,
                showLabel: !1
            });
            this.buttons.last().button({
                icon: this.options.icons.down,
                showLabel: !1
            });
            this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && 0 < this.uiSpinner.height() && this.uiSpinner.height(this.uiSpinner.height())
        },
        _keydown: function(a) {
            var c = this.options
              , d = b.ui.keyCode;
            switch (a.keyCode) {
            case d.UP:
                return this._repeat(null, 1, a),
                !0;
            case d.DOWN:
                return this._repeat(null, -1, a),
                !0;
            case d.PAGE_UP:
                return this._repeat(null, c.page, a),
                !0;
            case d.PAGE_DOWN:
                return this._repeat(null, -c.page, a),
                !0
            }
            return !1
        },
        _start: function(a) {
            if (!this.spinning && !1 === this._trigger("start", a))
                return !1;
            this.counter || (this.counter = 1);
            return this.spinning = !0
        },
        _repeat: function(a, c, d) {
            a = a || 500;
            clearTimeout(this.timer);
            this.timer = this._delay(function() {
                this._repeat(40, c, d)
            }, a);
            this._spin(c * this.options.step, d)
        },
        _spin: function(a, c) {
            var d = this.value() || 0;
            this.counter || (this.counter = 1);
            d = this._adjustValue(d + a * this._increment(this.counter));
            this.spinning && !1 === this._trigger("spin", c, {
                value: d
            }) || (this._value(d),
            this.counter++)
        },
        _increment: function(a) {
            var c = this.options.incremental;
            return c ? "function" === typeof c ? c(a) : Math.floor(a * a * a / 5E4 - a * a / 500 + 17 * a / 200 + 1) : 1
        },
        _precision: function() {
            var a = this._precisionOf(this.options.step);
            null !== this.options.min && (a = Math.max(a, this._precisionOf(this.options.min)));
            return a
        },
        _precisionOf: function(a) {
            a = a.toString();
            var c = a.indexOf(".");
            return -1 === c ? 0 : a.length - c - 1
        },
        _adjustValue: function(a) {
            var c = this.options;
            var d = null !== c.min ? c.min : 0;
            a = d + Math.round((a - d) / c.step) * c.step;
            a = parseFloat(a.toFixed(this._precision()));
            return null !== c.max && a > c.max ? c.max : null !== c.min && a < c.min ? c.min : a
        },
        _stop: function(a) {
            this.spinning && (clearTimeout(this.timer),
            clearTimeout(this.mousewheelTimer),
            this.counter = 0,
            this.spinning = !1,
            this._trigger("stop", a))
        },
        _setOption: function(a, c) {
            if ("culture" === a || "numberFormat" === a) {
                var d = this._parse(this.element.val());
                this.options[a] = c;
                this.element.val(this._format(d))
            } else
                "max" !== a && "min" !== a && "step" !== a || "string" !== typeof c || (c = this._parse(c)),
                "icons" === a && (d = this.buttons.first().find(".ui-icon"),
                this._removeClass(d, null, this.options.icons.up),
                this._addClass(d, null, c.up),
                d = this.buttons.last().find(".ui-icon"),
                this._removeClass(d, null, this.options.icons.down),
                this._addClass(d, null, c.down)),
                this._super(a, c)
        },
        _setOptionDisabled: function(a) {
            this._super(a);
            this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!a);
            this.element.prop("disabled", !!a);
            this.buttons.button(a ? "disable" : "enable")
        },
        _setOptions: v(function(a) {
            this._super(a)
        }),
        _parse: function(a) {
            "string" === typeof a && "" !== a && (a = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(a, 10, this.options.culture) : +a);
            return "" === a || isNaN(a) ? null : a
        },
        _format: function(a) {
            return "" === a ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(a, this.options.numberFormat, this.options.culture) : a
        },
        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        isValid: function() {
            var a = this.value();
            return null === a ? !1 : a === this._adjustValue(a)
        },
        _value: function(a, c) {
            if ("" !== a) {
                var d = this._parse(a);
                null !== d && (c || (d = this._adjustValue(d)),
                a = this._format(d))
            }
            this.element.val(a);
            this._refresh()
        },
        _destroy: function() {
            this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow");
            this.uiSpinner.replaceWith(this.element)
        },
        stepUp: v(function(a) {
            this._stepUp(a)
        }),
        _stepUp: function(a) {
            this._start() && (this._spin((a || 1) * this.options.step),
            this._stop())
        },
        stepDown: v(function(a) {
            this._stepDown(a)
        }),
        _stepDown: function(a) {
            this._start() && (this._spin((a || 1) * -this.options.step),
            this._stop())
        },
        pageUp: v(function(a) {
            this._stepUp((a || 1) * this.options.page)
        }),
        pageDown: v(function(a) {
            this._stepDown((a || 1) * this.options.page)
        }),
        value: function(a) {
            if (!arguments.length)
                return this._parse(this.element.val());
            v(this._value).call(this, a)
        },
        widget: function() {
            return this.uiSpinner
        }
    });
    !1 !== b.uiBackCompat && b.widget("ui.spinner", b.ui.spinner, {
        _enhance: function() {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
        },
        _uiSpinnerHtml: function() {
            return "<span>"
        },
        _buttonHtml: function() {
            return "<a></a><a></a>"
        }
    });
    b.widget("ui.tabs", {
        version: "1.13.2",
        delay: 300,
        options: {
            active: null,
            classes: {
                "ui-tabs": "ui-corner-all",
                "ui-tabs-nav": "ui-corner-all",
                "ui-tabs-panel": "ui-corner-bottom",
                "ui-tabs-tab": "ui-corner-top"
            },
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: function() {
            var a = /#.*$/;
            return function(c) {
                var d = c.href.replace(a, "");
                var f = location.href.replace(a, "");
                try {
                    d = decodeURIComponent(d)
                } catch (h) {}
                try {
                    f = decodeURIComponent(f)
                } catch (h) {}
                return 1 < c.hash.length && d === f
            }
        }(),
        _create: function() {
            var a = this
              , c = this.options;
            this.running = !1;
            this._addClass("ui-tabs", "ui-widget ui-widget-content");
            this._toggleClass("ui-tabs-collapsible", null, c.collapsible);
            this._processTabs();
            c.active = this._initialActive();
            Array.isArray(c.disabled) && (c.disabled = b.uniqueSort(c.disabled.concat(b.map(this.tabs.filter(".ui-state-disabled"), function(d) {
                return a.tabs.index(d)
            }))).sort());
            this.active = !1 !== this.options.active && this.anchors.length ? this._findActive(c.active) : b();
            this._refresh();
            this.active.length && this.load(c.active)
        },
        _initialActive: function() {
            var a = this.options.active
              , c = this.options.collapsible
              , d = location.hash.substring(1);
            null === a && (d && this.tabs.each(function(f, h) {
                if (b(h).attr("aria-controls") === d)
                    return a = f,
                    !1
            }),
            null === a && (a = this.tabs.index(this.tabs.filter(".ui-tabs-active"))),
            null === a || -1 === a) && (a = this.tabs.length ? 0 : !1);
            !1 !== a && (a = this.tabs.index(this.tabs.eq(a)),
            -1 === a && (a = c ? !1 : 0));
            !c && !1 === a && this.anchors.length && (a = 0);
            return a
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : b()
            }
        },
        _tabKeydown: function(a) {
            var c = b(b.ui.safeActiveElement(this.document[0])).closest("li")
              , d = this.tabs.index(c)
              , f = !0;
            if (!this._handlePageNav(a)) {
                switch (a.keyCode) {
                case b.ui.keyCode.RIGHT:
                case b.ui.keyCode.DOWN:
                    d++;
                    break;
                case b.ui.keyCode.UP:
                case b.ui.keyCode.LEFT:
                    f = !1;
                    d--;
                    break;
                case b.ui.keyCode.END:
                    d = this.anchors.length - 1;
                    break;
                case b.ui.keyCode.HOME:
                    d = 0;
                    break;
                case b.ui.keyCode.SPACE:
                    a.preventDefault();
                    clearTimeout(this.activating);
                    this._activate(d);
                    return;
                case b.ui.keyCode.ENTER:
                    a.preventDefault();
                    clearTimeout(this.activating);
                    this._activate(d === this.options.active ? !1 : d);
                    return;
                default:
                    return
                }
                a.preventDefault();
                clearTimeout(this.activating);
                d = this._focusNextTab(d, f);
                a.ctrlKey || a.metaKey || (c.attr("aria-selected", "false"),
                this.tabs.eq(d).attr("aria-selected", "true"),
                this.activating = this._delay(function() {
                    this.option("active", d)
                }, this.delay))
            }
        },
        _panelKeydown: function(a) {
            !this._handlePageNav(a) && a.ctrlKey && a.keyCode === b.ui.keyCode.UP && (a.preventDefault(),
            this.active.trigger("focus"))
        },
        _handlePageNav: function(a) {
            if (a.altKey && a.keyCode === b.ui.keyCode.PAGE_UP)
                return this._activate(this._focusNextTab(this.options.active - 1, !1)),
                !0;
            if (a.altKey && a.keyCode === b.ui.keyCode.PAGE_DOWN)
                return this._activate(this._focusNextTab(this.options.active + 1, !0)),
                !0
        },
        _findNextTab: function(a, c) {
            function d() {
                a > f && (a = 0);
                0 > a && (a = f);
                return a
            }
            for (var f = this.tabs.length - 1; -1 !== b.inArray(d(), this.options.disabled); )
                a = c ? a + 1 : a - 1;
            return a
        },
        _focusNextTab: function(a, c) {
            a = this._findNextTab(a, c);
            this.tabs.eq(a).trigger("focus");
            return a
        },
        _setOption: function(a, c) {
            "active" === a ? this._activate(c) : (this._super(a, c),
            "collapsible" === a && (this._toggleClass("ui-tabs-collapsible", null, c),
            c || !1 !== this.options.active || this._activate(0)),
            "event" === a && this._setupEvents(c),
            "heightStyle" === a && this._setupHeightStyle(c))
        },
        _sanitizeSelector: function(a) {
            return a ? a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function() {
            var a = this.options
              , c = this.tablist.children(":has(a[href])");
            a.disabled = b.map(c.filter(".ui-state-disabled"), function(d) {
                return c.index(d)
            });
            this._processTabs();
            !1 !== a.active && this.anchors.length ? this.active.length && !b.contains(this.tablist[0], this.active[0]) ? this.tabs.length === a.disabled.length ? (a.active = !1,
            this.active = b()) : this._activate(this._findNextTab(Math.max(0, a.active - 1), !1)) : a.active = this.tabs.index(this.active) : (a.active = !1,
            this.active = b());
            this._refresh()
        },
        _refresh: function() {
            this._setOptionDisabled(this.options.disabled);
            this._setupEvents(this.options.event);
            this._setupHeightStyle(this.options.heightStyle);
            this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            });
            this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-hidden": "true"
            });
            this.active.length ? (this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }),
            this._addClass(this.active, "ui-tabs-active", "ui-state-active"),
            this._getPanelForTab(this.active).show().attr({
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function() {
            var a = this
              , c = this.tabs
              , d = this.anchors
              , f = this.panels;
            this.tablist = this._getList().attr("role", "tablist");
            this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header");
            this.tablist.on("mousedown" + this.eventNamespace, "> li", function(h) {
                b(this).is(".ui-state-disabled") && h.preventDefault()
            }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function() {
                b(this).closest("li").is(".ui-state-disabled") && this.blur()
            });
            this.tabs = this.tablist.find("> li:has(a[href])").attr({
                role: "tab",
                tabIndex: -1
            });
            this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default");
            this.anchors = this.tabs.map(function() {
                return b("a", this)[0]
            }).attr({
                tabIndex: -1
            });
            this._addClass(this.anchors, "ui-tabs-anchor");
            this.panels = b();
            this.anchors.each(function(h, n) {
                var r = b(n).uniqueId().attr("id")
                  , z = b(n).closest("li")
                  , A = z.attr("aria-controls");
                if (a._isLocal(n)) {
                    h = n.hash;
                    n = h.substring(1);
                    var L = a.element.find(a._sanitizeSelector(h))
                } else
                    n = z.attr("aria-controls") || b({}).uniqueId()[0].id,
                    L = a.element.find("#" + n),
                    L.length || (L = a._createPanel(n),
                    L.insertAfter(a.panels[h - 1] || a.tablist)),
                    L.attr("aria-live", "polite");
                L.length && (a.panels = a.panels.add(L));
                A && z.data("ui-tabs-aria-controls", A);
                z.attr({
                    "aria-controls": n,
                    "aria-labelledby": r
                });
                L.attr("aria-labelledby", r)
            });
            this.panels.attr("role", "tabpanel");
            this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content");
            c && (this._off(c.not(this.tabs)),
            this._off(d.not(this.anchors)),
            this._off(f.not(this.panels)))
        },
        _getList: function() {
            return this.tablist || this.element.find("ol, ul").eq(0)
        },
        _createPanel: function(a) {
            return b("<div>").attr("id", a).data("ui-tabs-destroy", !0)
        },
        _setOptionDisabled: function(a) {
            var c, d;
            Array.isArray(a) && (a.length ? a.length === this.anchors.length && (a = !0) : a = !1);
            for (d = 0; c = this.tabs[d]; d++)
                c = b(c),
                !0 === a || -1 !== b.inArray(d, a) ? (c.attr("aria-disabled", "true"),
                this._addClass(c, null, "ui-state-disabled")) : (c.removeAttr("aria-disabled"),
                this._removeClass(c, null, "ui-state-disabled"));
            this.options.disabled = a;
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !0 === a)
        },
        _setupEvents: function(a) {
            var c = {};
            a && b.each(a.split(" "), function(d, f) {
                c[f] = "_eventHandler"
            });
            this._off(this.anchors.add(this.tabs).add(this.panels));
            this._on(!0, this.anchors, {
                click: function(d) {
                    d.preventDefault()
                }
            });
            this._on(this.anchors, c);
            this._on(this.tabs, {
                keydown: "_tabKeydown"
            });
            this._on(this.panels, {
                keydown: "_panelKeydown"
            });
            this._focusable(this.tabs);
            this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(a) {
            var c = this.element.parent();
            if ("fill" === a) {
                var d = c.height();
                d -= this.element.outerHeight() - this.element.height();
                this.element.siblings(":visible").each(function() {
                    var f = b(this)
                      , h = f.css("position");
                    "absolute" !== h && "fixed" !== h && (d -= f.outerHeight(!0))
                });
                this.element.children().not(this.panels).each(function() {
                    d -= b(this).outerHeight(!0)
                });
                this.panels.each(function() {
                    b(this).height(Math.max(0, d - b(this).innerHeight() + b(this).height()))
                }).css("overflow", "auto")
            } else
                "auto" === a && (d = 0,
                this.panels.each(function() {
                    d = Math.max(d, b(this).height("").height())
                }).height(d))
        },
        _eventHandler: function(a) {
            var c = this.options
              , d = this.active
              , f = b(a.currentTarget).closest("li")
              , h = f[0] === d[0]
              , n = h && c.collapsible
              , r = n ? b() : this._getPanelForTab(f)
              , z = d.length ? this._getPanelForTab(d) : b();
            d = {
                oldTab: d,
                oldPanel: z,
                newTab: n ? b() : f,
                newPanel: r
            };
            a.preventDefault();
            f.hasClass("ui-state-disabled") || f.hasClass("ui-tabs-loading") || this.running || h && !c.collapsible || !1 === this._trigger("beforeActivate", a, d) || (c.active = n ? !1 : this.tabs.index(f),
            this.active = h ? b() : f,
            this.xhr && this.xhr.abort(),
            z.length || r.length || b.error("jQuery UI Tabs: Mismatching fragment identifier."),
            r.length && this.load(this.tabs.index(f), a),
            this._toggle(a, d))
        },
        _toggle: function(a, c) {
            function d() {
                h.running = !1;
                h._trigger("activate", a, c)
            }
            function f() {
                h._addClass(c.newTab.closest("li"), "ui-tabs-active", "ui-state-active");
                n.length && h.options.show ? h._show(n, h.options.show, d) : (n.show(),
                d())
            }
            var h = this
              , n = c.newPanel
              , r = c.oldPanel;
            this.running = !0;
            r.length && this.options.hide ? this._hide(r, this.options.hide, function() {
                h._removeClass(c.oldTab.closest("li"), "ui-tabs-active", "ui-state-active");
                f()
            }) : (this._removeClass(c.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"),
            r.hide(),
            f());
            r.attr("aria-hidden", "true");
            c.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            });
            n.length && r.length ? c.oldTab.attr("tabIndex", -1) : n.length && this.tabs.filter(function() {
                return 0 === b(this).attr("tabIndex")
            }).attr("tabIndex", -1);
            n.attr("aria-hidden", "false");
            c.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _activate: function(a) {
            a = this._findActive(a);
            a[0] !== this.active[0] && (a.length || (a = this.active),
            a = a.find(".ui-tabs-anchor")[0],
            this._eventHandler({
                target: a,
                currentTarget: a,
                preventDefault: b.noop
            }))
        },
        _findActive: function(a) {
            return !1 === a ? b() : this.tabs.eq(a)
        },
        _getIndex: function(a) {
            "string" === typeof a && (a = this.anchors.index(this.anchors.filter("[href$='" + b.escapeSelector(a) + "']")));
            return a
        },
        _destroy: function() {
            this.xhr && this.xhr.abort();
            this.tablist.removeAttr("role").off(this.eventNamespace);
            this.anchors.removeAttr("role tabIndex").removeUniqueId();
            this.tabs.add(this.panels).each(function() {
                b.data(this, "ui-tabs-destroy") ? b(this).remove() : b(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
            });
            this.tabs.each(function() {
                var a = b(this)
                  , c = a.data("ui-tabs-aria-controls");
                c ? a.attr("aria-controls", c).removeData("ui-tabs-aria-controls") : a.removeAttr("aria-controls")
            });
            this.panels.show();
            "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function(a) {
            var c = this.options.disabled;
            !1 !== c && (void 0 === a ? c = !1 : (a = this._getIndex(a),
            c = Array.isArray(c) ? b.map(c, function(d) {
                return d !== a ? d : null
            }) : b.map(this.tabs, function(d, f) {
                return f !== a ? f : null
            })),
            this._setOptionDisabled(c))
        },
        disable: function(a) {
            var c = this.options.disabled;
            if (!0 !== c) {
                if (void 0 === a)
                    c = !0;
                else {
                    a = this._getIndex(a);
                    if (-1 !== b.inArray(a, c))
                        return;
                    c = Array.isArray(c) ? b.merge([a], c).sort() : [a]
                }
                this._setOptionDisabled(c)
            }
        },
        load: function(a, c) {
            a = this._getIndex(a);
            var d = this
              , f = this.tabs.eq(a);
            a = f.find(".ui-tabs-anchor");
            var h = this._getPanelForTab(f)
              , n = {
                tab: f,
                panel: h
            }
              , r = function(z, A) {
                "abort" === A && d.panels.stop(!1, !0);
                d._removeClass(f, "ui-tabs-loading");
                h.removeAttr("aria-busy");
                z === d.xhr && delete d.xhr
            };
            this._isLocal(a[0]) || (this.xhr = b.ajax(this._ajaxSettings(a, c, n))) && "canceled" !== this.xhr.statusText && (this._addClass(f, "ui-tabs-loading"),
            h.attr("aria-busy", "true"),
            this.xhr.done(function(z, A, L) {
                setTimeout(function() {
                    h.html(z);
                    d._trigger("load", c, n);
                    r(L, A)
                }, 1)
            }).fail(function(z, A) {
                setTimeout(function() {
                    r(z, A)
                }, 1)
            }))
        },
        _ajaxSettings: function(a, c, d) {
            var f = this;
            return {
                url: a.attr("href").replace(/#.*$/, ""),
                beforeSend: function(h, n) {
                    return f._trigger("beforeLoad", c, b.extend({
                        jqXHR: h,
                        ajaxSettings: n
                    }, d))
                }
            }
        },
        _getPanelForTab: function(a) {
            a = b(a).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + a))
        }
    });
    !1 !== b.uiBackCompat && b.widget("ui.tabs", b.ui.tabs, {
        _processTabs: function() {
            this._superApply(arguments);
            this._addClass(this.tabs, "ui-tab")
        }
    });
    b.widget("ui.tooltip", {
        version: "1.13.2",
        options: {
            classes: {
                "ui-tooltip": "ui-corner-all ui-widget-shadow"
            },
            content: function() {
                var a = b(this).attr("title");
                return b("<a>").text(a).html()
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: !0,
            track: !1,
            close: null,
            open: null
        },
        _addDescribedBy: function(a, c) {
            var d = (a.attr("aria-describedby") || "").split(/\s+/);
            d.push(c);
            a.data("ui-tooltip-id", c).attr("aria-describedby", String.prototype.trim.call(d.join(" ")))
        },
        _removeDescribedBy: function(a) {
            var c = a.data("ui-tooltip-id")
              , d = (a.attr("aria-describedby") || "").split(/\s+/);
            c = b.inArray(c, d);
            -1 !== c && d.splice(c, 1);
            a.removeData("ui-tooltip-id");
            (d = String.prototype.trim.call(d.join(" "))) ? a.attr("aria-describedby", d) : a.removeAttr("aria-describedby")
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            });
            this.tooltips = {};
            this.parents = {};
            this.liveRegion = b("<div>").attr({
                role: "log",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body);
            this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible");
            this.disabledTitles = b([])
        },
        _setOption: function(a, c) {
            var d = this;
            this._super(a, c);
            "content" === a && b.each(this.tooltips, function(f, h) {
                d._updateContent(h.element)
            })
        },
        _setOptionDisabled: function(a) {
            this[a ? "_disable" : "_enable"]()
        },
        _disable: function() {
            var a = this;
            b.each(this.tooltips, function(c, d) {
                c = b.Event("blur");
                c.target = c.currentTarget = d.element[0];
                a.close(c, !0)
            });
            this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function() {
                var c = b(this);
                if (c.is("[title]"))
                    return c.data("ui-tooltip-title", c.attr("title")).removeAttr("title")
            }))
        },
        _enable: function() {
            this.disabledTitles.each(function() {
                var a = b(this);
                a.data("ui-tooltip-title") && a.attr("title", a.data("ui-tooltip-title"))
            });
            this.disabledTitles = b([])
        },
        open: function(a) {
            var c = this
              , d = b(a ? a.target : this.element).closest(this.options.items);
            d.length && !d.data("ui-tooltip-id") && (d.attr("title") && d.data("ui-tooltip-title", d.attr("title")),
            d.data("ui-tooltip-open", !0),
            a && "mouseover" === a.type && d.parents().each(function() {
                var f = b(this);
                if (f.data("ui-tooltip-open")) {
                    var h = b.Event("blur");
                    h.target = h.currentTarget = this;
                    c.close(h, !0)
                }
                f.attr("title") && (f.uniqueId(),
                c.parents[this.id] = {
                    element: this,
                    title: f.attr("title")
                },
                f.attr("title", ""))
            }),
            this._registerCloseHandlers(a, d),
            this._updateContent(d, a))
        },
        _updateContent: function(a, c) {
            var d = this.options.content;
            var f = this
              , h = c ? c.type : null;
            if ("string" === typeof d || d.nodeType || d.jquery)
                return this._open(c, a, d);
            (d = d.call(a[0], function(n) {
                f._delay(function() {
                    a.data("ui-tooltip-open") && (c && (c.type = h),
                    this._open(c, a, n))
                })
            })) && this._open(c, a, d)
        },
        _open: function(a, c, d) {
            function f(A) {
                n.of = A;
                r.is(":hidden") || r.position(n)
            }
            var h, n = b.extend({}, this.options.position);
            if (d)
                if (h = this._find(c))
                    h.tooltip.find(".ui-tooltip-content").html(d);
                else {
                    c.is("[title]") && (a && "mouseover" === a.type ? c.attr("title", "") : c.removeAttr("title"));
                    h = this._tooltip(c);
                    var r = h.tooltip;
                    this._addDescribedBy(c, r.attr("id"));
                    r.find(".ui-tooltip-content").html(d);
                    this.liveRegion.children().hide();
                    d = b("<div>").html(r.find(".ui-tooltip-content").html());
                    d.removeAttr("name").find("[name]").removeAttr("name");
                    d.removeAttr("id").find("[id]").removeAttr("id");
                    d.appendTo(this.liveRegion);
                    this.options.track && a && /^mouse/.test(a.type) ? (this._on(this.document, {
                        mousemove: f
                    }),
                    f(a)) : r.position(b.extend({
                        of: c
                    }, this.options.position));
                    r.hide();
                    this._show(r, this.options.show);
                    if (this.options.track && this.options.show && this.options.show.delay)
                        var z = this.delayedShow = setInterval(function() {
                            r.is(":visible") && (f(n.of),
                            clearInterval(z))
                        }, 13);
                    this._trigger("open", a, {
                        tooltip: r
                    })
                }
        },
        _registerCloseHandlers: function(a, c) {
            var d = {
                keyup: function(f) {
                    f.keyCode === b.ui.keyCode.ESCAPE && (f = b.Event(f),
                    f.currentTarget = c[0],
                    this.close(f, !0))
                }
            };
            c[0] !== this.element[0] && (d.remove = function() {
                var f = this._find(c);
                f && this._removeTooltip(f.tooltip)
            }
            );
            a && "mouseover" !== a.type || (d.mouseleave = "close");
            a && "focusin" !== a.type || (d.focusout = "close");
            this._on(!0, c, d)
        },
        close: function(a) {
            var c = this
              , d = b(a ? a.currentTarget : this.element)
              , f = this._find(d);
            if (f) {
                var h = f.tooltip;
                f.closing || (clearInterval(this.delayedShow),
                d.data("ui-tooltip-title") && !d.attr("title") && d.attr("title", d.data("ui-tooltip-title")),
                this._removeDescribedBy(d),
                f.hiding = !0,
                h.stop(!0),
                this._hide(h, this.options.hide, function() {
                    c._removeTooltip(b(this))
                }),
                d.removeData("ui-tooltip-open"),
                this._off(d, "mouseleave focusout keyup"),
                d[0] !== this.element[0] && this._off(d, "remove"),
                this._off(this.document, "mousemove"),
                a && "mouseleave" === a.type && b.each(this.parents, function(n, r) {
                    b(r.element).attr("title", r.title);
                    delete c.parents[n]
                }),
                f.closing = !0,
                this._trigger("close", a, {
                    tooltip: h
                }),
                f.hiding || (f.closing = !1))
            } else
                d.removeData("ui-tooltip-open")
        },
        _tooltip: function(a) {
            var c = b("<div>").attr("role", "tooltip")
              , d = b("<div>").appendTo(c)
              , f = c.uniqueId().attr("id");
            this._addClass(d, "ui-tooltip-content");
            this._addClass(c, "ui-tooltip", "ui-widget ui-widget-content");
            c.appendTo(this._appendTo(a));
            return this.tooltips[f] = {
                element: a,
                tooltip: c
            }
        },
        _find: function(a) {
            return (a = a.data("ui-tooltip-id")) ? this.tooltips[a] : null
        },
        _removeTooltip: function(a) {
            clearInterval(this.delayedShow);
            a.remove();
            delete this.tooltips[a.attr("id")]
        },
        _appendTo: function(a) {
            a = a.closest(".ui-front, dialog");
            a.length || (a = this.document[0].body);
            return a
        },
        _destroy: function() {
            var a = this;
            b.each(this.tooltips, function(c, d) {
                var f = b.Event("blur");
                d = d.element;
                f.target = f.currentTarget = d[0];
                a.close(f, !0);
                b("#" + c).remove();
                d.data("ui-tooltip-title") && (d.attr("title") || d.attr("title", d.data("ui-tooltip-title")),
                d.removeData("ui-tooltip-title"))
            });
            this.liveRegion.remove()
        }
    });
    !1 !== b.uiBackCompat && b.widget("ui.tooltip", b.ui.tooltip, {
        options: {
            tooltipClass: null
        },
        _tooltip: function() {
            var a = this._superApply(arguments);
            this.options.tooltipClass && a.tooltip.addClass(this.options.tooltipClass);
            return a
        }
    });
    var ka = b
      , wa = {}
      , S = wa.toString
      , Y = /^([\-+])=\s*(\d+\.?\d*)/
      , oa = [{
        re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        parse: function(a) {
            return [a[1], a[2], a[3], a[4]]
        }
    }, {
        re: /rgba?\(\s*(\d+(?:\.\d+)?)%\s*,\s*(\d+(?:\.\d+)?)%\s*,\s*(\d+(?:\.\d+)?)%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        parse: function(a) {
            return [2.55 * a[1], 2.55 * a[2], 2.55 * a[3], a[4]]
        }
    }, {
        re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})?/,
        parse: function(a) {
            return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16), a[4] ? (parseInt(a[4], 16) / 255).toFixed(2) : 1]
        }
    }, {
        re: /#([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])?/,
        parse: function(a) {
            return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16), a[4] ? (parseInt(a[4] + a[4], 16) / 255).toFixed(2) : 1]
        }
    }, {
        re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)%\s*,\s*(\d+(?:\.\d+)?)%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        space: "hsla",
        parse: function(a) {
            return [a[1], a[2] / 100, a[3] / 100, a[4]]
        }
    }]
      , ma = ka.Color = function(a, c, d, f) {
        return new ka.Color.fn.parse(a,c,d,f)
    }
      , sa = {
        rgba: {
            props: {
                red: {
                    idx: 0,
                    type: "byte"
                },
                green: {
                    idx: 1,
                    type: "byte"
                },
                blue: {
                    idx: 2,
                    type: "byte"
                }
            }
        },
        hsla: {
            props: {
                hue: {
                    idx: 0,
                    type: "degrees"
                },
                saturation: {
                    idx: 1,
                    type: "percent"
                },
                lightness: {
                    idx: 2,
                    type: "percent"
                }
            }
        }
    }
      , La = {
        "byte": {
            floor: !0,
            max: 255
        },
        percent: {
            max: 1
        },
        degrees: {
            mod: 360,
            floor: !0
        }
    }
      , Na = ma.support = {}
      , Ja = ka("<p>")[0]
      , Ba = ka.each;
    Ja.style.cssText = "background-color:rgba(1,1,1,.5)";
    Na.rgba = -1 < Ja.style.backgroundColor.indexOf("rgba");
    Ba(sa, function(a, c) {
        c.cache = "_" + a;
        c.props.alpha = {
            idx: 3,
            type: "percent",
            def: 1
        }
    });
    ka.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, c) {
        wa["[object " + c + "]"] = c.toLowerCase()
    });
    ma.fn = ka.extend(ma.prototype, {
        parse: function(a, c, d, f) {
            if (void 0 === a)
                return this._rgba = [null, null, null, null],
                this;
            if (a.jquery || a.nodeType)
                a = ka(a).css(c),
                c = void 0;
            var h = this
              , n = E(a)
              , r = this._rgba = [];
            void 0 !== c && (a = [a, c, d, f],
            n = "array");
            if ("string" === n)
                return this.parse(P(a) || fb._default);
            if ("array" === n)
                return Ba(sa.rgba.props, function(z, A) {
                    r[A.idx] = N(a[A.idx], A)
                }),
                this;
            if ("object" === n)
                return a instanceof ma ? Ba(sa, function(z, A) {
                    a[A.cache] && (h[A.cache] = a[A.cache].slice())
                }) : Ba(sa, function(z, A) {
                    var L = A.cache;
                    Ba(A.props, function(U, G) {
                        if (!h[L] && A.to) {
                            if ("alpha" === U || null == a[U])
                                return;
                            h[L] = A.to(h._rgba)
                        }
                        h[L][G.idx] = N(a[U], G, !0)
                    });
                    h[L] && 0 > ka.inArray(null, h[L].slice(0, 3)) && (null == h[L][3] && (h[L][3] = 1),
                    A.from && (h._rgba = A.from(h[L])))
                }),
                this
        },
        is: function(a) {
            var c = ma(a)
              , d = !0
              , f = this;
            Ba(sa, function(h, n) {
                var r = c[n.cache];
                if (r) {
                    var z = f[n.cache] || n.to && n.to(f._rgba) || [];
                    Ba(n.props, function(A, L) {
                        if (null != r[L.idx])
                            return d = r[L.idx] === z[L.idx]
                    })
                }
                return d
            });
            return d
        },
        _space: function() {
            var a = []
              , c = this;
            Ba(sa, function(d, f) {
                c[f.cache] && a.push(d)
            });
            return a.pop()
        },
        transition: function(a, c) {
            var d = ma(a);
            a = d._space();
            var f = sa[a]
              , h = 0 === this.alpha() ? ma("transparent") : this
              , n = h[f.cache] || f.to(h._rgba)
              , r = n.slice();
            d = d[f.cache];
            Ba(f.props, function(z, A) {
                z = A.idx;
                var L = n[z]
                  , U = d[z]
                  , G = La[A.type] || {};
                null !== U && (null === L ? r[z] = U : (G.mod && (U - L > G.mod / 2 ? L += G.mod : L - U > G.mod / 2 && (L -= G.mod)),
                r[z] = N((U - L) * c + L, A)))
            });
            return this[a](r)
        },
        blend: function(a) {
            if (1 === this._rgba[3])
                return this;
            var c = this._rgba.slice()
              , d = c.pop()
              , f = ma(a)._rgba;
            return ma(ka.map(c, function(h, n) {
                return (1 - d) * f[n] + d * h
            }))
        },
        toRgbaString: function() {
            var a = "rgba("
              , c = ka.map(this._rgba, function(d, f) {
                return null != d ? d : 2 < f ? 1 : 0
            });
            1 === c[3] && (c.pop(),
            a = "rgb(");
            return a + c.join() + ")"
        },
        toHslaString: function() {
            var a = "hsla("
              , c = ka.map(this.hsla(), function(d, f) {
                null == d && (d = 2 < f ? 1 : 0);
                f && 3 > f && (d = Math.round(100 * d) + "%");
                return d
            });
            1 === c[3] && (c.pop(),
            a = "hsl(");
            return a + c.join() + ")"
        },
        toHexString: function(a) {
            var c = this._rgba.slice()
              , d = c.pop();
            a && c.push(~~(255 * d));
            return "#" + ka.map(c, function(f) {
                f = (f || 0).toString(16);
                return 1 === f.length ? "0" + f : f
            }).join("")
        },
        toString: function() {
            return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
        }
    });
    ma.fn.parse.prototype = ma.fn;
    sa.hsla.to = function(a) {
        if (null == a[0] || null == a[1] || null == a[2])
            return [null, null, null, a[3]];
        var c = a[0] / 255
          , d = a[1] / 255
          , f = a[2] / 255;
        a = a[3];
        var h = Math.max(c, d, f)
          , n = Math.min(c, d, f)
          , r = h - n
          , z = h + n
          , A = .5 * z;
        return [Math.round(n === h ? 0 : c === h ? 60 * (d - f) / r + 360 : d === h ? 60 * (f - c) / r + 120 : 60 * (c - d) / r + 240) % 360, 0 === r ? 0 : .5 >= A ? r / z : r / (2 - z), A, null == a ? 1 : a]
    }
    ;
    sa.hsla.from = function(a) {
        if (null == a[0] || null == a[1] || null == a[2])
            return [null, null, null, a[3]];
        var c = a[0] / 360
          , d = a[1]
          , f = a[2];
        a = a[3];
        d = .5 >= f ? f * (1 + d) : f + d - f * d;
        f = 2 * f - d;
        return [Math.round(255 * aa(f, d, c + 1 / 3)), Math.round(255 * aa(f, d, c)), Math.round(255 * aa(f, d, c - 1 / 3)), a]
    }
    ;
    Ba(sa, function(a, c) {
        var d = c.props
          , f = c.cache
          , h = c.to
          , n = c.from;
        ma.fn[a] = function(r) {
            h && !this[f] && (this[f] = h(this._rgba));
            if (void 0 === r)
                return this[f].slice();
            var z = E(r)
              , A = "array" === z || "object" === z ? r : arguments
              , L = this[f].slice();
            Ba(d, function(G, Q) {
                G = A["object" === z ? G : Q.idx];
                null == G && (G = L[Q.idx]);
                L[Q.idx] = N(G, Q)
            });
            if (n) {
                var U = ma(n(L));
                U[f] = L;
                return U
            }
            return ma(L)
        }
        ;
        Ba(d, function(r, z) {
            ma.fn[r] || (ma.fn[r] = function(A) {
                var L = E(A);
                var U = "alpha" === r ? this._hsla ? "hsla" : "rgba" : a;
                var G = this[U]();
                var Q = G[z.idx];
                if ("undefined" === L)
                    return Q;
                "function" === L && (A = A.call(this, Q),
                L = E(A));
                if (null == A && z.empty)
                    return this;
                "string" === L && (L = Y.exec(A)) && (A = Q + parseFloat(L[2]) * ("+" === L[1] ? 1 : -1));
                G[z.idx] = A;
                return this[U](G)
            }
            )
        })
    });
    ma.hook = function(a) {
        a = a.split(" ");
        Ba(a, function(c, d) {
            ka.cssHooks[d] = {
                set: function(f, h) {
                    var n, r = "";
                    if ("transparent" !== h && ("string" !== E(h) || (n = P(h)))) {
                        h = ma(n || h);
                        if (!Na.rgba && 1 !== h._rgba[3]) {
                            for (n = "backgroundColor" === d ? f.parentNode : f; ("" === r || "transparent" === r) && n && n.style; )
                                try {
                                    r = ka.css(n, "backgroundColor"),
                                    n = n.parentNode
                                } catch (z) {}
                            h = h.blend(r && "transparent" !== r ? r : "_default")
                        }
                        h = h.toRgbaString()
                    }
                    try {
                        f.style[d] = h
                    } catch (z) {}
                }
            };
            ka.fx.step[d] = function(f) {
                f.colorInit || (f.start = ma(f.elem, d),
                f.end = ma(f.end),
                f.colorInit = !0);
                ka.cssHooks[d].set(f.elem, f.start.transition(f.end, f.pos))
            }
        })
    }
    ;
    ma.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor");
    ka.cssHooks.borderColor = {
        expand: function(a) {
            var c = {};
            Ba(["Top", "Right", "Bottom", "Left"], function(d, f) {
                c["border" + f + "Color"] = a
            });
            return c
        }
    };
    var fb = ka.Color.names = {
        aqua: "#00ffff",
        black: "#000000",
        blue: "#0000ff",
        fuchsia: "#ff00ff",
        gray: "#808080",
        green: "#008000",
        lime: "#00ff00",
        maroon: "#800000",
        navy: "#000080",
        olive: "#808000",
        purple: "#800080",
        red: "#ff0000",
        silver: "#c0c0c0",
        teal: "#008080",
        white: "#ffffff",
        yellow: "#ffff00",
        transparent: [null, null, null, 0],
        _default: "#ffffff"
    };
    b.effects = {
        effect: {}
    };
    (function() {
        function a(h) {
            return h.replace(/-([\da-z])/gi, function(n, r) {
                return r.toUpperCase()
            })
        }
        function c(h) {
            var n = h.ownerDocument.defaultView ? h.ownerDocument.defaultView.getComputedStyle(h, null) : h.currentStyle
              , r = {};
            if (n && n.length && n[0] && n[n[0]])
                for (h = n.length; h--; ) {
                    var z = n[h];
                    "string" === typeof n[z] && (r[a(z)] = n[z])
                }
            else
                for (z in n)
                    "string" === typeof n[z] && (r[z] = n[z]);
            return r
        }
        var d = ["add", "remove", "toggle"]
          , f = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        b.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(h, n) {
            b.fx.step[n] = function(r) {
                if ("none" !== r.end && !r.setAttr || 1 === r.pos && !r.setAttr)
                    ka.style(r.elem, n, r.end),
                    r.setAttr = !0
            }
        });
        b.fn.addBack || (b.fn.addBack = function(h) {
            return this.add(null == h ? this.prevObject : this.prevObject.filter(h))
        }
        );
        b.effects.animateClass = function(h, n, r, z) {
            var A = b.speed(n, r, z);
            return this.queue(function() {
                var L = b(this)
                  , U = L.attr("class") || ""
                  , G = A.children ? L.find("*").addBack() : L;
                G = G.map(function() {
                    return {
                        el: b(this),
                        start: c(this)
                    }
                });
                var Q = function() {
                    b.each(d, function(V, ca) {
                        if (h[ca])
                            L[ca + "Class"](h[ca])
                    })
                };
                Q();
                G = G.map(function() {
                    this.end = c(this.el[0]);
                    var V = this.start, ca = this.end, ia = {}, na;
                    for (na in ca) {
                        var ja = ca[na];
                        V[na] === ja || f[na] || !b.fx.step[na] && isNaN(parseFloat(ja)) || (ia[na] = ja)
                    }
                    this.diff = ia;
                    return this
                });
                L.attr("class", U);
                G = G.map(function() {
                    var V = this
                      , ca = b.Deferred()
                      , ia = b.extend({}, A, {
                        queue: !1,
                        complete: function() {
                            ca.resolve(V)
                        }
                    });
                    this.el.animate(this.diff, ia);
                    return ca.promise()
                });
                b.when.apply(b, G.get()).done(function() {
                    Q();
                    b.each(arguments, function() {
                        var V = this.el;
                        b.each(this.diff, function(ca) {
                            V.css(ca, "")
                        })
                    });
                    A.complete.call(L[0])
                })
            })
        }
        ;
        b.fn.extend({
            addClass: function(h) {
                return function(n, r, z, A) {
                    return r ? b.effects.animateClass.call(this, {
                        add: n
                    }, r, z, A) : h.apply(this, arguments)
                }
            }(b.fn.addClass),
            removeClass: function(h) {
                return function(n, r, z, A) {
                    return 1 < arguments.length ? b.effects.animateClass.call(this, {
                        remove: n
                    }, r, z, A) : h.apply(this, arguments)
                }
            }(b.fn.removeClass),
            toggleClass: function(h) {
                return function(n, r, z, A, L) {
                    return "boolean" === typeof r || void 0 === r ? z ? b.effects.animateClass.call(this, r ? {
                        add: n
                    } : {
                        remove: n
                    }, z, A, L) : h.apply(this, arguments) : b.effects.animateClass.call(this, {
                        toggle: n
                    }, r, z, A)
                }
            }(b.fn.toggleClass),
            switchClass: function(h, n, r, z, A) {
                return b.effects.animateClass.call(this, {
                    add: n,
                    remove: h
                }, r, z, A)
            }
        })
    }
    )();
    (function() {
        function a(f, h, n, r) {
            b.isPlainObject(f) && (h = f,
            f = f.effect);
            f = {
                effect: f
            };
            null == h && (h = {});
            "function" === typeof h && (r = h,
            n = null,
            h = {});
            if ("number" === typeof h || b.fx.speeds[h])
                r = n,
                n = h,
                h = {};
            "function" === typeof n && (r = n,
            n = null);
            h && b.extend(f, h);
            n = n || h.duration;
            f.duration = b.fx.off ? 0 : "number" === typeof n ? n : n in b.fx.speeds ? b.fx.speeds[n] : b.fx.speeds._default;
            f.complete = r || h.complete;
            return f
        }
        function c(f) {
            return !f || "number" === typeof f || b.fx.speeds[f] || "string" === typeof f && !b.effects.effect[f] || "function" === typeof f || "object" === typeof f && !f.effect ? !0 : !1
        }
        function d(f, h) {
            var n = h.outerWidth();
            h = h.outerHeight();
            f = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(f) || ["", 0, n, h, 0];
            return {
                top: parseFloat(f[1]) || 0,
                right: "auto" === f[2] ? n : parseFloat(f[2]),
                bottom: "auto" === f[3] ? h : parseFloat(f[3]),
                left: parseFloat(f[4]) || 0
            }
        }
        b.expr && b.expr.pseudos && b.expr.pseudos.animated && (b.expr.pseudos.animated = function(f) {
            return function(h) {
                return !!b(h).data("ui-effects-animated") || f(h)
            }
        }(b.expr.pseudos.animated));
        !1 !== b.uiBackCompat && b.extend(b.effects, {
            save: function(f, h) {
                for (var n = 0, r = h.length; n < r; n++)
                    null !== h[n] && f.data("ui-effects-" + h[n], f[0].style[h[n]])
            },
            restore: function(f, h) {
                for (var n, r = 0, z = h.length; r < z; r++)
                    null !== h[r] && (n = f.data("ui-effects-" + h[r]),
                    f.css(h[r], n))
            },
            setMode: function(f, h) {
                "toggle" === h && (h = f.is(":hidden") ? "show" : "hide");
                return h
            },
            createWrapper: function(f) {
                if (f.parent().is(".ui-effects-wrapper"))
                    return f.parent();
                var h = {
                    width: f.outerWidth(!0),
                    height: f.outerHeight(!0),
                    "float": f.css("float")
                }
                  , n = b("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                })
                  , r = {
                    width: f.width(),
                    height: f.height()
                }
                  , z = document.activeElement;
                try {
                    z.id
                } catch (A) {
                    z = document.body
                }
                f.wrap(n);
                (f[0] === z || b.contains(f[0], z)) && b(z).trigger("focus");
                n = f.parent();
                "static" === f.css("position") ? (n.css({
                    position: "relative"
                }),
                f.css({
                    position: "relative"
                })) : (b.extend(h, {
                    position: f.css("position"),
                    zIndex: f.css("z-index")
                }),
                b.each(["top", "left", "bottom", "right"], function(A, L) {
                    h[L] = f.css(L);
                    isNaN(parseInt(h[L], 10)) && (h[L] = "auto")
                }),
                f.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                }));
                f.css(r);
                return n.css(h).show()
            },
            removeWrapper: function(f) {
                var h = document.activeElement;
                f.parent().is(".ui-effects-wrapper") && (f.parent().replaceWith(f),
                (f[0] === h || b.contains(f[0], h)) && b(h).trigger("focus"));
                return f
            }
        });
        b.extend(b.effects, {
            version: "1.13.2",
            define: function(f, h, n) {
                n || (n = h,
                h = "effect");
                b.effects.effect[f] = n;
                b.effects.effect[f].mode = h;
                return n
            },
            scaledDimensions: function(f, h, n) {
                if (0 === h)
                    return {
                        height: 0,
                        width: 0,
                        outerHeight: 0,
                        outerWidth: 0
                    };
                var r = "horizontal" !== n ? (h || 100) / 100 : 1;
                h = "vertical" !== n ? (h || 100) / 100 : 1;
                return {
                    height: f.height() * h,
                    width: f.width() * r,
                    outerHeight: f.outerHeight() * h,
                    outerWidth: f.outerWidth() * r
                }
            },
            clipToBox: function(f) {
                return {
                    width: f.clip.right - f.clip.left,
                    height: f.clip.bottom - f.clip.top,
                    left: f.clip.left,
                    top: f.clip.top
                }
            },
            unshift: function(f, h, n) {
                var r = f.queue();
                1 < h && r.splice.apply(r, [1, 0].concat(r.splice(h, n)));
                f.dequeue()
            },
            saveStyle: function(f) {
                f.data("ui-effects-style", f[0].style.cssText)
            },
            restoreStyle: function(f) {
                f[0].style.cssText = f.data("ui-effects-style") || "";
                f.removeData("ui-effects-style")
            },
            mode: function(f, h) {
                f = f.is(":hidden");
                "toggle" === h && (h = f ? "show" : "hide");
                if (f ? "hide" === h : "show" === h)
                    h = "none";
                return h
            },
            getBaseline: function(f, h) {
                switch (f[0]) {
                case "top":
                    var n = 0;
                    break;
                case "middle":
                    n = .5;
                    break;
                case "bottom":
                    n = 1;
                    break;
                default:
                    n = f[0] / h.height
                }
                switch (f[1]) {
                case "left":
                    f = 0;
                    break;
                case "center":
                    f = .5;
                    break;
                case "right":
                    f = 1;
                    break;
                default:
                    f = f[1] / h.width
                }
                return {
                    x: f,
                    y: n
                }
            },
            createPlaceholder: function(f) {
                var h = f.css("position")
                  , n = f.position();
                f.css({
                    marginTop: f.css("marginTop"),
                    marginBottom: f.css("marginBottom"),
                    marginLeft: f.css("marginLeft"),
                    marginRight: f.css("marginRight")
                }).outerWidth(f.outerWidth()).outerHeight(f.outerHeight());
                if (/^(static|relative)/.test(h)) {
                    h = "absolute";
                    var r = b("<" + f[0].nodeName + ">").insertAfter(f).css({
                        display: /^(inline|ruby)/.test(f.css("display")) ? "inline-block" : "block",
                        visibility: "hidden",
                        marginTop: f.css("marginTop"),
                        marginBottom: f.css("marginBottom"),
                        marginLeft: f.css("marginLeft"),
                        marginRight: f.css("marginRight"),
                        "float": f.css("float")
                    }).outerWidth(f.outerWidth()).outerHeight(f.outerHeight()).addClass("ui-effects-placeholder");
                    f.data("ui-effects-placeholder", r)
                }
                f.css({
                    position: h,
                    left: n.left,
                    top: n.top
                });
                return r
            },
            removePlaceholder: function(f) {
                var h = f.data("ui-effects-placeholder");
                h && (h.remove(),
                f.removeData("ui-effects-placeholder"))
            },
            cleanUp: function(f) {
                b.effects.restoreStyle(f);
                b.effects.removePlaceholder(f)
            },
            setTransition: function(f, h, n, r) {
                r = r || {};
                b.each(h, function(z, A) {
                    z = f.cssUnit(A);
                    0 < z[0] && (r[A] = z[0] * n + z[1])
                });
                return r
            }
        });
        b.fn.extend({
            effect: function() {
                function f(V) {
                    function ca() {
                        na.removeData("ui-effects-animated");
                        b.effects.cleanUp(na);
                        "hide" === h.mode && na.hide();
                        ia()
                    }
                    function ia() {
                        "function" === typeof L && L.call(na[0]);
                        "function" === typeof V && V()
                    }
                    var na = b(this);
                    h.mode = G.shift();
                    !1 === b.uiBackCompat || r ? "none" === h.mode ? (na[U](),
                    ia()) : n.call(na[0], h, ca) : (na.is(":hidden") ? "hide" === U : "show" === U) ? (na[U](),
                    ia()) : n.call(na[0], h, ia)
                }
                var h = a.apply(this, arguments)
                  , n = b.effects.effect[h.effect]
                  , r = n.mode
                  , z = h.queue
                  , A = z || "fx"
                  , L = h.complete
                  , U = h.mode
                  , G = []
                  , Q = function(V) {
                    var ca = b(this)
                      , ia = b.effects.mode(ca, U) || r;
                    ca.data("ui-effects-animated", !0);
                    G.push(ia);
                    r && ("show" === ia || ia === r && "hide" === ia) && ca.show();
                    r && "none" === ia || b.effects.saveStyle(ca);
                    "function" === typeof V && V()
                };
                return b.fx.off || !n ? U ? this[U](h.duration, L) : this.each(function() {
                    L && L.call(this)
                }) : !1 === z ? this.each(Q).each(f) : this.queue(A, Q).queue(A, f)
            },
            show: function(f) {
                return function(h) {
                    if (c(h))
                        return f.apply(this, arguments);
                    var n = a.apply(this, arguments);
                    n.mode = "show";
                    return this.effect.call(this, n)
                }
            }(b.fn.show),
            hide: function(f) {
                return function(h) {
                    if (c(h))
                        return f.apply(this, arguments);
                    var n = a.apply(this, arguments);
                    n.mode = "hide";
                    return this.effect.call(this, n)
                }
            }(b.fn.hide),
            toggle: function(f) {
                return function(h) {
                    if (c(h) || "boolean" === typeof h)
                        return f.apply(this, arguments);
                    var n = a.apply(this, arguments);
                    n.mode = "toggle";
                    return this.effect.call(this, n)
                }
            }(b.fn.toggle),
            cssUnit: function(f) {
                var h = this.css(f)
                  , n = [];
                b.each(["em", "px", "%", "pt"], function(r, z) {
                    0 < h.indexOf(z) && (n = [parseFloat(h), z])
                });
                return n
            },
            cssClip: function(f) {
                return f ? this.css("clip", "rect(" + f.top + "px " + f.right + "px " + f.bottom + "px " + f.left + "px)") : d(this.css("clip"), this)
            },
            transfer: function(f, h) {
                var n = b(this)
                  , r = b(f.to)
                  , z = "fixed" === r.css("position")
                  , A = b("body")
                  , L = z ? A.scrollTop() : 0;
                A = z ? A.scrollLeft() : 0;
                var U = r.offset();
                r = {
                    top: U.top - L,
                    left: U.left - A,
                    height: r.innerHeight(),
                    width: r.innerWidth()
                };
                U = n.offset();
                var G = b("<div class='ui-effects-transfer'></div>");
                G.appendTo("body").addClass(f.className).css({
                    top: U.top - L,
                    left: U.left - A,
                    height: n.innerHeight(),
                    width: n.innerWidth(),
                    position: z ? "fixed" : "absolute"
                }).animate(r, f.duration, f.easing, function() {
                    G.remove();
                    "function" === typeof h && h()
                })
            }
        });
        b.fx.step.clip = function(f) {
            f.clipInit || (f.start = b(f.elem).cssClip(),
            "string" === typeof f.end && (f.end = d(f.end, f.elem)),
            f.clipInit = !0);
            b(f.elem).cssClip({
                top: f.pos * (f.end.top - f.start.top) + f.start.top,
                right: f.pos * (f.end.right - f.start.right) + f.start.right,
                bottom: f.pos * (f.end.bottom - f.start.bottom) + f.start.bottom,
                left: f.pos * (f.end.left - f.start.left) + f.start.left
            })
        }
    }
    )();
    (function() {
        var a = {};
        b.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(c, d) {
            a[d] = function(f) {
                return Math.pow(f, c + 2)
            }
        });
        b.extend(a, {
            Sine: function(c) {
                return 1 - Math.cos(c * Math.PI / 2)
            },
            Circ: function(c) {
                return 1 - Math.sqrt(1 - c * c)
            },
            Elastic: function(c) {
                return 0 === c || 1 === c ? c : -Math.pow(2, 8 * (c - 1)) * Math.sin((80 * (c - 1) - 7.5) * Math.PI / 15)
            },
            Back: function(c) {
                return c * c * (3 * c - 2)
            },
            Bounce: function(c) {
                for (var d, f = 4; c < ((d = Math.pow(2, --f)) - 1) / 11; )
                    ;
                return 1 / Math.pow(4, 3 - f) - 7.5625 * Math.pow((3 * d - 2) / 22 - c, 2)
            }
        });
        b.each(a, function(c, d) {
            b.easing["easeIn" + c] = d;
            b.easing["easeOut" + c] = function(f) {
                return 1 - d(1 - f)
            }
            ;
            b.easing["easeInOut" + c] = function(f) {
                return .5 > f ? d(2 * f) / 2 : 1 - d(-2 * f + 2) / 2
            }
        })
    }
    )();
    b.effects.define("blind", "hide", function(a, c) {
        var d = {
            up: ["bottom", "top"],
            vertical: ["bottom", "top"],
            down: ["top", "bottom"],
            left: ["right", "left"],
            horizontal: ["right", "left"],
            right: ["left", "right"]
        }
          , f = b(this)
          , h = a.direction || "up"
          , n = f.cssClip()
          , r = {
            clip: b.extend({}, n)
        }
          , z = b.effects.createPlaceholder(f);
        r.clip[d[h][0]] = r.clip[d[h][1]];
        "show" === a.mode && (f.cssClip(r.clip),
        z && z.css(b.effects.clipToBox(r)),
        r.clip = n);
        z && z.animate(b.effects.clipToBox(r), a.duration, a.easing);
        f.animate(r, {
            queue: !1,
            duration: a.duration,
            easing: a.easing,
            complete: c
        })
    });
    b.effects.define("bounce", function(a, c) {
        var d = b(this)
          , f = a.mode
          , h = "hide" === f;
        var n = "show" === f;
        var r = a.direction || "up";
        f = a.distance;
        var z = a.times || 5
          , A = 2 * z + (n || h ? 1 : 0)
          , L = a.duration / A;
        a = a.easing;
        var U = "up" === r || "down" === r ? "top" : "left";
        r = "up" === r || "left" === r;
        var G = 0
          , Q = d.queue().length;
        b.effects.createPlaceholder(d);
        var V = d.css(U);
        f || (f = d["top" === U ? "outerHeight" : "outerWidth"]() / 3);
        n && (n = {
            opacity: 1
        },
        n[U] = V,
        d.css("opacity", 0).css(U, r ? 2 * -f : 2 * f).animate(n, L, a));
        h && (f /= Math.pow(2, z - 1));
        n = {};
        for (n[U] = V; G < z; G++)
            V = {},
            V[U] = (r ? "-=" : "+=") + f,
            d.animate(V, L, a).animate(n, L, a),
            f = h ? 2 * f : f / 2;
        h && (V = {
            opacity: 0
        },
        V[U] = (r ? "-=" : "+=") + f,
        d.animate(V, L, a));
        d.queue(c);
        b.effects.unshift(d, Q, A + 1)
    });
    b.effects.define("clip", "hide", function(a, c) {
        var d = {}
          , f = b(this);
        var h = a.direction || "vertical";
        var n = "both" === h
          , r = n || "horizontal" === h;
        n = n || "vertical" === h;
        h = f.cssClip();
        d.clip = {
            top: n ? (h.bottom - h.top) / 2 : h.top,
            right: r ? (h.right - h.left) / 2 : h.right,
            bottom: n ? (h.bottom - h.top) / 2 : h.bottom,
            left: r ? (h.right - h.left) / 2 : h.left
        };
        b.effects.createPlaceholder(f);
        "show" === a.mode && (f.cssClip(d.clip),
        d.clip = h);
        f.animate(d, {
            queue: !1,
            duration: a.duration,
            easing: a.easing,
            complete: c
        })
    });
    b.effects.define("drop", "hide", function(a, c) {
        var d = b(this)
          , f = "show" === a.mode;
        var h = a.direction || "left";
        var n = "up" === h || "down" === h ? "top" : "left"
          , r = "up" === h || "left" === h ? "-=" : "+="
          , z = "+=" === r ? "-=" : "+="
          , A = {
            opacity: 0
        };
        b.effects.createPlaceholder(d);
        h = a.distance || d["top" === n ? "outerHeight" : "outerWidth"](!0) / 2;
        A[n] = r + h;
        f && (d.css(A),
        A[n] = z + h,
        A.opacity = 1);
        d.animate(A, {
            queue: !1,
            duration: a.duration,
            easing: a.easing,
            complete: c
        })
    });
    b.effects.define("explode", "hide", function(a, c) {
        function d() {
            Q.push(this);
            Q.length === n * r && (z.css({
                visibility: "visible"
            }),
            b(Q).remove(),
            c())
        }
        var f, h, n = a.pieces ? Math.round(Math.sqrt(a.pieces)) : 3, r = n, z = b(this), A = "show" === a.mode, L = z.show().css("visibility", "hidden").offset(), U = Math.ceil(z.outerWidth() / r), G = Math.ceil(z.outerHeight() / n), Q = [];
        for (f = 0; f < n; f++) {
            var V = L.top + f * G;
            var ca = f - (n - 1) / 2;
            for (h = 0; h < r; h++) {
                var ia = L.left + h * U;
                var na = h - (r - 1) / 2;
                z.clone().appendTo("body").wrap("<div></div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -h * U,
                    top: -f * G
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: U,
                    height: G,
                    left: ia + (A ? na * U : 0),
                    top: V + (A ? ca * G : 0),
                    opacity: A ? 0 : 1
                }).animate({
                    left: ia + (A ? 0 : na * U),
                    top: V + (A ? 0 : ca * G),
                    opacity: A ? 1 : 0
                }, a.duration || 500, a.easing, d)
            }
        }
    });
    b.effects.define("fade", "toggle", function(a, c) {
        var d = "show" === a.mode;
        b(this).css("opacity", d ? 0 : 1).animate({
            opacity: d ? 1 : 0
        }, {
            queue: !1,
            duration: a.duration,
            easing: a.easing,
            complete: c
        })
    });
    b.effects.define("fold", "hide", function(a, c) {
        var d = b(this)
          , f = a.mode
          , h = "show" === f;
        f = "hide" === f;
        var n = a.size || 15
          , r = /([0-9]+)%/.exec(n)
          , z = a.horizFirst ? ["right", "bottom"] : ["bottom", "right"]
          , A = a.duration / 2
          , L = b.effects.createPlaceholder(d)
          , U = d.cssClip()
          , G = {
            clip: b.extend({}, U)
        }
          , Q = {
            clip: b.extend({}, U)
        }
          , V = [U[z[0]], U[z[1]]]
          , ca = d.queue().length;
        r && (n = parseInt(r[1], 10) / 100 * V[f ? 0 : 1]);
        G.clip[z[0]] = n;
        Q.clip[z[0]] = n;
        Q.clip[z[1]] = 0;
        h && (d.cssClip(Q.clip),
        L && L.css(b.effects.clipToBox(Q)),
        Q.clip = U);
        d.queue(function(ia) {
            L && L.animate(b.effects.clipToBox(G), A, a.easing).animate(b.effects.clipToBox(Q), A, a.easing);
            ia()
        }).animate(G, A, a.easing).animate(Q, A, a.easing).queue(c);
        b.effects.unshift(d, ca, 4)
    });
    b.effects.define("highlight", "show", function(a, c) {
        var d = b(this)
          , f = {
            backgroundColor: d.css("backgroundColor")
        };
        "hide" === a.mode && (f.opacity = 0);
        b.effects.saveStyle(d);
        d.css({
            backgroundImage: "none",
            backgroundColor: a.color || "#ffff99"
        }).animate(f, {
            queue: !1,
            duration: a.duration,
            easing: a.easing,
            complete: c
        })
    });
    b.effects.define("size", function(a, c) {
        var d = b(this)
          , f = ["fontSize"]
          , h = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"]
          , n = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"];
        var r = a.mode;
        var z = "effect" !== r
          , A = a.scale || "both";
        var L = a.origin || ["middle", "center"];
        var U = d.css("position")
          , G = d.position()
          , Q = b.effects.scaledDimensions(d)
          , V = a.from || Q
          , ca = a.to || b.effects.scaledDimensions(d, 0);
        b.effects.createPlaceholder(d);
        "show" === r && (r = V,
        V = ca,
        ca = r);
        var ia = V.height / Q.height;
        var na = V.width / Q.width;
        var ja = ca.height / Q.height;
        var ta = ca.width / Q.width;
        if ("box" === A || "both" === A)
            ia !== ja && (V = b.effects.setTransition(d, h, ia, V),
            ca = b.effects.setTransition(d, h, ja, ca)),
            na !== ta && (V = b.effects.setTransition(d, n, na, V),
            ca = b.effects.setTransition(d, n, ta, ca));
        "content" !== A && "both" !== A || ia === ja || (V = b.effects.setTransition(d, f, ia, V),
        ca = b.effects.setTransition(d, f, ja, ca));
        L && (L = b.effects.getBaseline(L, Q),
        V.top = (Q.outerHeight - V.outerHeight) * L.y + G.top,
        V.left = (Q.outerWidth - V.outerWidth) * L.x + G.left,
        ca.top = (Q.outerHeight - ca.outerHeight) * L.y + G.top,
        ca.left = (Q.outerWidth - ca.outerWidth) * L.x + G.left);
        delete V.outerHeight;
        delete V.outerWidth;
        d.css(V);
        if ("content" === A || "both" === A)
            h = h.concat(["marginTop", "marginBottom"]).concat(f),
            n = n.concat(["marginLeft", "marginRight"]),
            d.find("*[width]").each(function() {
                var qa = b(this)
                  , Da = b.effects.scaledDimensions(qa)
                  , Ra = {
                    height: Da.height * ia,
                    width: Da.width * na,
                    outerHeight: Da.outerHeight * ia,
                    outerWidth: Da.outerWidth * na
                };
                Da = {
                    height: Da.height * ja,
                    width: Da.width * ta,
                    outerHeight: Da.height * ja,
                    outerWidth: Da.width * ta
                };
                ia !== ja && (Ra = b.effects.setTransition(qa, h, ia, Ra),
                Da = b.effects.setTransition(qa, h, ja, Da));
                na !== ta && (Ra = b.effects.setTransition(qa, n, na, Ra),
                Da = b.effects.setTransition(qa, n, ta, Da));
                z && b.effects.saveStyle(qa);
                qa.css(Ra);
                qa.animate(Da, a.duration, a.easing, function() {
                    z && b.effects.restoreStyle(qa)
                })
            });
        d.animate(ca, {
            queue: !1,
            duration: a.duration,
            easing: a.easing,
            complete: function() {
                var qa = d.offset();
                0 === ca.opacity && d.css("opacity", V.opacity);
                z || (d.css("position", "static" === U ? "relative" : U).offset(qa),
                b.effects.saveStyle(d));
                c()
            }
        })
    });
    b.effects.define("scale", function(a, c) {
        var d = b(this)
          , f = a.mode;
        f = parseInt(a.percent, 10) || (0 === parseInt(a.percent, 10) ? 0 : "effect" !== f ? 0 : 100);
        d = b.extend(!0, {
            from: b.effects.scaledDimensions(d),
            to: b.effects.scaledDimensions(d, f, a.direction || "both"),
            origin: a.origin || ["middle", "center"]
        }, a);
        a.fade && (d.from.opacity = 1,
        d.to.opacity = 0);
        b.effects.effect.size.call(this, d, c)
    });
    b.effects.define("puff", "hide", function(a, c) {
        a = b.extend(!0, {}, a, {
            fade: !0,
            percent: parseInt(a.percent, 10) || 150
        });
        b.effects.effect.scale.call(this, a, c)
    });
    b.effects.define("pulsate", "show", function(a, c) {
        var d = b(this)
          , f = a.mode
          , h = "show" === f;
        f = 2 * (a.times || 5) + (h || "hide" === f ? 1 : 0);
        var n = a.duration / f
          , r = 0
          , z = 1
          , A = d.queue().length;
        if (h || !d.is(":visible"))
            d.css("opacity", 0).show(),
            r = 1;
        for (; z < f; z++)
            d.animate({
                opacity: r
            }, n, a.easing),
            r = 1 - r;
        d.animate({
            opacity: r
        }, n, a.easing);
        d.queue(c);
        b.effects.unshift(d, A, f + 1)
    });
    b.effects.define("shake", function(a, c) {
        var d = 1
          , f = b(this)
          , h = a.direction || "left"
          , n = a.distance || 20
          , r = a.times || 3
          , z = 2 * r + 1
          , A = Math.round(a.duration / z)
          , L = "up" === h || "down" === h ? "top" : "left";
        h = "up" === h || "left" === h;
        var U = {}
          , G = {}
          , Q = {}
          , V = f.queue().length;
        b.effects.createPlaceholder(f);
        U[L] = (h ? "-=" : "+=") + n;
        G[L] = (h ? "+=" : "-=") + 2 * n;
        Q[L] = (h ? "-=" : "+=") + 2 * n;
        for (f.animate(U, A, a.easing); d < r; d++)
            f.animate(G, A, a.easing).animate(Q, A, a.easing);
        f.animate(G, A, a.easing).animate(U, A / 2, a.easing).queue(c);
        b.effects.unshift(f, V, z + 1)
    });
    b.effects.define("slide", "show", function(a, c) {
        var d = b(this)
          , f = {
            up: ["bottom", "top"],
            down: ["top", "bottom"],
            left: ["right", "left"],
            right: ["left", "right"]
        }
          , h = a.mode
          , n = a.direction || "left"
          , r = "up" === n || "down" === n ? "top" : "left"
          , z = "up" === n || "left" === n
          , A = a.distance || d["top" === r ? "outerHeight" : "outerWidth"](!0)
          , L = {};
        b.effects.createPlaceholder(d);
        var U = d.cssClip();
        var G = d.position()[r];
        L[r] = (z ? -1 : 1) * A + G;
        L.clip = d.cssClip();
        L.clip[f[n][1]] = L.clip[f[n][0]];
        "show" === h && (d.cssClip(L.clip),
        d.css(r, L[r]),
        L.clip = U,
        L[r] = G);
        d.animate(L, {
            queue: !1,
            duration: a.duration,
            easing: a.easing,
            complete: c
        })
    });
    !1 !== b.uiBackCompat && b.effects.define("transfer", function(a, c) {
        b(this).transfer(a, c)
    })
});
/*
 jQuery blockUI plugin
 Version 2.66.0-2013.10.09
 Requires jQuery v1.7 or later

 Examples at: http://malsup.com/jquery/block/
 Copyright (c) 2007-2013 M. Alsup
 Dual licensed under the MIT and GPL licenses:
 http://www.opensource.org/licenses/mit-license.php
 http://www.gnu.org/licenses/gpl.html

 Thanks to Amir-Hossein Sobhi for some excellent contributions!
*/
(function() {
    function b(l) {
        function y(X, O) {
            var ea = X == window
              , da = O && void 0 !== O.message ? O.message : void 0;
            O = l.extend({}, l.blockUI.defaults, O || {});
            if (!O.ignoreIfBlocked || !l(X).data("blockUI.isBlocked")) {
                O.overlayCSS = l.extend({}, l.blockUI.defaults.overlayCSS, O.overlayCSS || {});
                var ka = l.extend({}, l.blockUI.defaults.css, O.css || {});
                O.onOverlayClick && (O.overlayCSS.cursor = "pointer");
                var wa = l.extend({}, l.blockUI.defaults.themedCSS, O.themedCSS || {});
                da = void 0 === da ? O.message : da;
                ea && J && m(window, {
                    fadeOut: 0
                });
                if (da && "string" != typeof da && (da.parentNode || da.jquery)) {
                    var S = da.jquery ? da[0] : da
                      , Y = {};
                    l(X).data("blockUI.history", Y);
                    Y.el = S;
                    Y.parent = S.parentNode;
                    Y.display = S.style.display;
                    Y.position = S.style.position;
                    Y.parent && Y.parent.removeChild(S)
                }
                l(X).data("blockUI.onUnblock", O.onUnblock);
                Y = O.baseZ;
                var oa = aa || O.forceIframe ? l('<iframe class="blockUI" style="z-index:' + Y++ + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + O.iframeSrc + '"></iframe>') : l('<div class="blockUI" style="display:none"></div>');
                S = O.theme ? l('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + Y++ + ';display:none"></div>') : l('<div class="blockUI blockOverlay" style="z-index:' + Y++ + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"><div id="please_wait_a_moment"><div class="circle_me"><span style="height: 155px; width: 155px; display: inline-block;" class="loader_bg"></span></div></div></div>');
                O.theme && ea ? (Y = '<div class="blockUI ' + O.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (Y + 10) + ';display:none;position:fixed">',
                O.title && (Y += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (O.title || "&nbsp;") + "</div>"),
                Y += '<div class="ui-widget-content ui-dialog-content"></div></div>') : O.theme ? (Y = '<div class="blockUI ' + O.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (Y + 10) + ';display:none;position:absolute">',
                O.title && (Y += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (O.title || "&nbsp;") + "</div>"),
                Y += '<div class="ui-widget-content ui-dialog-content"></div></div>') : Y = ea ? '<div class="blockUI ' + O.blockMsgClass + ' blockPage" style="z-index:' + (Y + 10) + ';display:none;position:fixed"></div>' : '<div class="blockUI ' + O.blockMsgClass + ' blockElement" style="z-index:' + (Y + 10) + ';display:none;position:absolute"></div>';
                Y = l(Y);
                da && (O.theme ? (Y.css(wa),
                Y.addClass("ui-widget-content")) : Y.css(ka));
                O.theme || S.css(O.overlayCSS);
                S.css("position", ea ? "fixed" : "absolute");
                (aa || O.forceIframe) && oa.css("opacity", 0);
                ka = [oa, S, Y];
                var ma = ea ? l("body") : l(X);
                l.each(ka, function() {
                    this.appendTo(ma)
                });
                O.theme && O.draggable && l.fn.draggable && Y.draggable({
                    handle: ".ui-dialog-titlebar",
                    cancel: "li"
                });
                wa = F && (!l.support.boxModel || 0 < l("object,embed", ea ? null : X).length);
                if (R || wa) {
                    ea && O.allowBodyStretch && l.support.boxModel && l("html,body").css("height", "100%");
                    if ((R || !l.support.boxModel) && !ea) {
                        wa = parseInt(l.css(X, "borderTopWidth"), 10) || 0;
                        var sa = parseInt(l.css(X, "borderLeftWidth"), 10) || 0
                          , La = wa ? "(0 - " + wa + ")" : 0
                          , Na = sa ? "(0 - " + sa + ")" : 0
                    }
                    l.each(ka, function(Ja, Ba) {
                        Ba = Ba[0].style;
                        Ba.position = "absolute";
                        2 > Ja ? (ea ? Ba.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + O.quirksmodeOffsetHack + ') + "px"') : Ba.setExpression("height", 'this.parentNode.offsetHeight + "px"'),
                        ea ? Ba.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : Ba.setExpression("width", 'this.parentNode.offsetWidth + "px"'),
                        Na && Ba.setExpression("left", Na),
                        La && Ba.setExpression("top", La)) : O.centerY ? (ea && Ba.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),
                        Ba.marginTop = 0) : !O.centerY && ea && (Ja = O.css && O.css.top ? parseInt(O.css.top, 10) : 0,
                        Ba.setExpression("top", "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + Ja + ') + "px"'))
                    })
                }
                da && (O.theme ? Y.find(".ui-widget-content").append(da) : Y.append(da),
                (da.jquery || da.nodeType) && l(da).show());
                (aa || O.forceIframe) && O.showOverlay && oa.show();
                if (O.fadeIn)
                    ka = O.onBlock ? O.onBlock : P,
                    oa = O.showOverlay && !da ? ka : P,
                    ka = da ? ka : P,
                    O.showOverlay && S._fadeIn(O.fadeIn, oa),
                    da && Y._fadeIn(O.fadeIn, ka);
                else if (O.showOverlay && S.show(),
                da && Y.show(),
                O.onBlock)
                    O.onBlock();
                C(1, X, O);
                ea ? (J = Y[0],
                T = l(O.focusableElements, J),
                O.focusInput && setTimeout(E, 20)) : N(Y[0], O.centerX, O.centerY);
                O.timeout && (da = setTimeout(function() {
                    ea ? l.unblockUI(O) : l(X).unblock(O)
                }, O.timeout),
                l(X).data("blockUI.timeout", da))
            }
        }
        function m(X, O) {
            var ea = X == window
              , da = l(X)
              , ka = da.data("blockUI.history")
              , wa = da.data("blockUI.timeout");
            wa && (clearTimeout(wa),
            da.removeData("blockUI.timeout"));
            O = l.extend({}, l.blockUI.defaults, O || {});
            C(0, X, O);
            null === O.onUnblock && (O.onUnblock = da.data("blockUI.onUnblock"),
            da.removeData("blockUI.onUnblock"));
            var S = ea ? l("body").children().filter(".blockUI").add("body > .blockUI") : da.find(">.blockUI");
            O.cursorReset && (1 < S.length && (S[1].style.cursor = O.cursorReset),
            2 < S.length && (S[2].style.cursor = O.cursorReset));
            ea && (J = T = null);
            if (O.fadeOut) {
                var Y = S.length;
                S.stop().fadeOut(O.fadeOut, function() {
                    0 === --Y && u(S, ka, O, X)
                })
            } else
                u(S, ka, O, X)
        }
        function u(X, O, ea, da) {
            var ka = l(da);
            if (!ka.data("blockUI.isBlocked")) {
                X.each(function(wa, S) {
                    this.parentNode && this.parentNode.removeChild(this)
                });
                O && O.el && (O.el.style.display = O.display,
                O.el.style.position = O.position,
                O.parent && O.parent.appendChild(O.el),
                ka.removeData("blockUI.history"));
                ka.data("blockUI.static") && ka.css("position", "static");
                if ("function" == typeof ea.onUnblock)
                    ea.onUnblock(da, ea);
                X = l(document.body);
                O = X.width();
                ea = X[0].style.width;
                X.width(O - 1).width(O);
                X[0].style.width = ea
            }
        }
        function C(X, O, ea) {
            var da = O == window;
            O = l(O);
            if (X || (!da || J) && (da || O.data("blockUI.isBlocked")))
                O.data("blockUI.isBlocked", X),
                da && ea.bindEvents && (!X || ea.showOverlay) && (X ? l(document).bind("mousedown mouseup keydown keypress keyup touchstart touchend touchmove", ea, v) : l(document).unbind("mousedown mouseup keydown keypress keyup touchstart touchend touchmove", v))
        }
        function v(X) {
            if ("keydown" === X.type && X.keyCode && 9 == X.keyCode && J && X.data.constrainTabKey) {
                var O = T
                  , ea = X.shiftKey && X.target === O[0];
                if (!X.shiftKey && X.target === O[O.length - 1] || ea)
                    return setTimeout(function() {
                        E(ea)
                    }, 10),
                    !1
            }
            O = X.data;
            var da = l(X.target);
            if (da.hasClass("blockOverlay") && O.onOverlayClick)
                O.onOverlayClick(X);
            return 0 < da.parents("div." + O.blockMsgClass).length ? !0 : 0 === da.parents().children().filter("div.blockUI").length
        }
        function E(X) {
            T && (X = T[!0 === X ? T.length - 1 : 0]) && X.focus()
        }
        function N(X, O, ea) {
            var da = X.parentNode
              , ka = X.style
              , wa = (da.offsetWidth - X.offsetWidth) / 2 - (parseInt(l.css(da, "borderLeftWidth"), 10) || 0);
            X = (da.offsetHeight - X.offsetHeight) / 2 - (parseInt(l.css(da, "borderTopWidth"), 10) || 0);
            O && (ka.left = 0 < wa ? wa + "px" : "0");
            ea && (ka.top = 0 < X ? X + "px" : "0")
        }
        l.fn._fadeIn = l.fn.fadeIn;
        var P = l.noop || function() {}
          , aa = /MSIE/.test(navigator.userAgent)
          , R = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent)
          , F = l.isFunction(document.createElement("div").style.setExpression);
        l.blockUI = function(X) {
            y(window, X)
        }
        ;
        l.unblockUI = function(X) {
            m(window, X)
        }
        ;
        l.growlUI = function(X, O, ea, da) {
            var ka = l('<div class="growlUI"></div>');
            X && ka.append("<h1>" + X + "</h1>");
            O && ka.append("<h2>" + O + "</h2>");
            void 0 === ea && (ea = 3E3);
            var wa = function(S) {
                S = S || {};
                l.blockUI({
                    message: ka,
                    fadeIn: "undefined" !== typeof S.fadeIn ? S.fadeIn : 700,
                    fadeOut: "undefined" !== typeof S.fadeOut ? S.fadeOut : 1E3,
                    timeout: "undefined" !== typeof S.timeout ? S.timeout : ea,
                    centerY: !1,
                    showOverlay: !1,
                    onUnblock: da,
                    css: l.blockUI.defaults.growlCSS
                })
            };
            wa();
            ka.css("opacity");
            ka.mouseover(function() {
                wa({
                    fadeIn: 0,
                    timeout: 3E4
                });
                var S = l(".blockMsg");
                S.stop();
                S.fadeTo(300, 1)
            }).mouseout(function() {
                l(".blockMsg").fadeOut(1E3)
            })
        }
        ;
        l.fn.block = function(X) {
            if (this[0] === window)
                return l.blockUI(X),
                this;
            var O = l.extend({}, l.blockUI.defaults, X || {});
            this.each(function() {
                var ea = l(this);
                O.ignoreIfBlocked && ea.data("blockUI.isBlocked") || ea.unblock({
                    fadeOut: 0
                })
            });
            return this.each(function() {
                "static" == l.css(this, "position") && (this.style.position = "relative",
                l(this).data("blockUI.static", !0));
                this.style.zoom = 1;
                y(this, X)
            })
        }
        ;
        l.fn.unblock = function(X) {
            return this[0] === window ? (l.unblockUI(X),
            this) : this.each(function() {
                m(this, X)
            })
        }
        ;
        l.blockUI.version = 2.66;
        l.blockUI.defaults = {
            message: "<h1>Please wait...</h1>",
            title: null,
            draggable: !0,
            theme: !1,
            css: {
                padding: 0,
                margin: 0,
                width: "30%",
                top: "40%",
                left: "35%",
                textAlign: "center",
                color: "#000",
                border: "3px solid #aaa",
                backgroundColor: "#fff",
                cursor: "wait"
            },
            themedCSS: {
                width: "30%",
                top: "40%",
                left: "35%"
            },
            overlayCSS: {
                backgroundColor: "#000",
                opacity: .5,
                cursor: "wait"
            },
            cursorReset: "default",
            growlCSS: {
                width: "350px",
                top: "10px",
                left: "",
                right: "10px",
                border: "none",
                padding: "5px",
                opacity: .6,
                cursor: "default",
                color: "#fff",
                backgroundColor: "#000",
                "-webkit-border-radius": "10px",
                "-moz-border-radius": "10px",
                "border-radius": "10px"
            },
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank",
            forceIframe: !1,
            baseZ: 1E4,
            centerX: !0,
            centerY: !0,
            allowBodyStretch: !0,
            bindEvents: !0,
            constrainTabKey: !0,
            fadeIn: 200,
            fadeOut: 400,
            timeout: 0,
            showOverlay: !0,
            focusInput: !0,
            focusableElements: ":input:enabled:visible",
            onBlock: null,
            onUnblock: null,
            onOverlayClick: null,
            quirksmodeOffsetHack: 4,
            blockMsgClass: "blockMsg",
            ignoreIfBlocked: !1
        };
        var J = null
          , T = []
    }
    "function" === typeof define && define.amd && define.amd.jQuery ? define(["jquery"], b) : b(jQuery)
}
)();
function add_qtip_tooltip(b, l, y) {
    "short" == y ? style = {
        classes: "tooltip"
    } : "long" == y && (style = {
        classes: "tooltip_long"
    });
    "top" == l ? position = {
        my: "bottom center",
        at: "top center"
    } : "left" == l ? position = {
        my: "center right",
        at: "center left"
    } : "right" == l ? position = {
        my: "center left",
        at: "center right"
    } : "bottom" == l && (position = {
        my: "top center",
        at: "bottom center"
    });
    b.qtip({
        content: {
            text: b.attr("data-tooltip")
        },
        position: position,
        style: style,
        hide: {
            event: "unfocus click mouseleave mouseup mousedown"
        }
    })
}
function add_jqueryui_tooltip(b, l, y) {
    "top" == l ? (position = {
        my: "center bottom-7",
        at: "center top"
    },
    classes = "tooltip_jqueryui tooltip_jqueryui_top") : "left" == l ? (position = {
        my: "left+7 center",
        at: "right center"
    },
    classes = "tooltip_jqueryui tooltip_jqueryui_left") : "right" == l ? (position = {
        my: "right-7 center",
        at: "left center"
    },
    classes = "tooltip_jqueryui tooltip_jqueryui_right") : "bottom" == l && (position = {
        my: "center top+7",
        at: "center bottom"
    },
    classes = "tooltip_jqueryui tooltip_jqueryui_bottom");
    $(b).tooltip({
        items: "[data-tooltip], [title]",
        tooltipClass: classes,
        show: !1,
        hide: !1,
        position: position,
        content: function() {
            var m = $(this);
            if (m.is("[data-tooltip]"))
                return m.attr("data-tooltip");
            if (m.is("[title]"))
                return m.attr("title")
        }
    })
}
function add_short_tooltip(b) {
    add_jqueryui_tooltip(b, "top", "short")
}
function add_long_tooltip(b) {
    add_qtip_tooltip(b, "top", "long")
}
function add_short_tooltip_left(b) {
    add_jqueryui_tooltip(b, "left", "short")
}
function add_short_tooltip_right(b) {
    add_jqueryui_tooltip(b, "right", "short")
}
function add_short_tooltip_bottom(b) {
    add_jqueryui_tooltip(b, "bottom", "short")
}
function add_image_tooltip(b) {
    b.qtip({
        content: {
            text: '<div class="image_tooltip_circle"><img src="{0}"></img></div>'.format(b.data("image_src"))
        },
        position: {
            my: "bottom center",
            at: "top center"
        },
        style: {
            classes: "image_tooltip"
        },
        hide: {
            event: "unfocus click mouseleave mouseup mousedown"
        }
    })
}
function wb_update_tooltips() {
    try {
        $(".has_short_tooltip").each(function() {
            add_short_tooltip($(this))
        }),
        $(".has_long_tooltip").each(function() {
            add_long_tooltip($(this))
        }),
        $(".has_short_tooltip_left").each(function() {
            add_short_tooltip_left($(this))
        }),
        $(".has_short_tooltip_right").each(function() {
            add_short_tooltip_right($(this))
        }),
        $(".has_short_tooltip_bottom").each(function() {
            add_short_tooltip_bottom($(this))
        }),
        $(".has_image_tooltip").each(function() {
            add_image_tooltip($(this))
        })
    } catch (b) {}
}
$(document).ready(function() {
    $("head").append("<style>@keyframes tooltip_refresh { 0% {} 100% {} } .has_short_tooltip, .has_short_tooltip_bottom, .has_short_tooltip_left, .has_short_tooltip_right, .has_image_tooltip { animation-duration: 0.001s; animation-name: tooltip_refresh; }</style>");
    try {
        wb_update_tooltips()
    } catch (b) {}
    $(document).bind("animationstart", function(b) {
        try {
            target = $(b.target),
            animation_name = b.originalEvent.animationName,
            "tooltip_refresh" == animation_name && (target.hasClass("has_short_tooltip") && add_short_tooltip(target),
            target.hasClass("has_short_tooltip_left") && add_short_tooltip_left(target),
            target.hasClass("has_short_tooltip_right") && add_short_tooltip_right(target),
            target.hasClass("has_short_tooltip_bottom") && add_short_tooltip_bottom(target),
            target.hasClass("has_image_tooltip") && has_image_tooltip(target))
        } catch (l) {}
    })
});
function ksIsValidPrice(b, l) {
    for (; 0 <= b.indexOf(","); )
        b = b.replace(",", ".");
    return !b || parseInt(b) != b && parseFloat(b) != b || !l && 0 > parseFloat(b) ? "no" : b
}
function isValidDate(b, l) {
    b = b.split("/");
    l = l.split("/");
    df = new Date(b[2],parseInt(b[1]) - 1,b[0]);
    dt = new Date(l[2],parseInt(l[1] - 1),l[0]);
    return dt.getTime() < df.getTime() ? !1 : !0
}
function isalnum(b) {
    return /^[a-z0-9]+$/i.test(b)
}
function ks_is_valid_date(b, l) {
    l = l || !1;
    var y = $(b).val()
      , m = !0;
    if (!y)
        return !1;
    "" != y && (l = moment(y, "DD/MM/YYYY", l),
    l.isValid() || (m = !1),
    y = $(b).attr("date-min") || "01/01/1900",
    y = "today" == y ? moment() : moment(y, "DD/MM/YYYY"),
    l.isAfter(y) || (m = !1),
    b = $(b).attr("date-max")) && (b = "today" == b ? moment() : moment(b, "DD/MM/YYYY"),
    l.isAfter(b) && (m = !1));
    return m
}
function ks_validate_date(b, l) {
    (l = ks_is_valid_date(b, l)) ? wbSetInputValidated(b) : wbSetInputUnvalidated(b);
    return l
}
function ksIsValidEmail(b, l) {
    if (l && 0 <= b.indexOf(",")) {
        b = b.split(",");
        for (l = 0; l < b.length; l++)
            if (!ksIsValidEmail(b[l]))
                return !1;
        return !0
    }
    b = b.trim();
    l = /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
    return b && l.test(b) ? !0 : !1
}
function range_dates_checker(b, l, y, m) {
    if (!b || !l)
        return !1;
    b = moment(b, "DD/MM/YYYY");
    if (!b.isValid())
        return !1;
    l = moment(l, "DD/MM/YYYY");
    if (!l.isValid() || m && b >= l || b > l)
        return !1;
    parseInt(y) != y && (y = 1E3);
    m = moment().startOf("day");
    m.add(-1 * y, "days");
    return b < m ? !1 : !0
}
function range_dates_strict_checker(b, l, y) {
    return range_dates_checker(b, l, y, !0)
}
function get_text_val_or_unvalidate(b, l) {
    var y = $(b).val().trim();
    if (!y || l && y.length > l)
        return wb_input_unvalidated_soft(b),
        "";
    wb_input_reset(b);
    return y
}
function get_text_email_or_unvalidate(b) {
    var l = $(b).val().trim();
    if (!l || !ksIsValidEmail(l))
        return wb_input_unvalidated_soft(b),
        "";
    wb_input_reset(b);
    return l
}
function get_positive_ranged_integer(b, l, y) {
    var m = $(b).val().trim()
      , u = parseInt(m);
    if (isNaN(u) || m != u || l == parseInt(l) && u < l || y == parseInt(y) && u > y)
        return wb_input_unvalidated_soft(b),
        "no";
    wb_input_reset(b);
    return u
}
function get_positive_integer_or_unvalidate(b) {
    return get_positive_ranged_integer(b, 1)
}
function get_integer_price_percentage_variation(b) {
    return get_positive_ranged_integer(-99)
}
function get_positive_number_or_unvalidate(b) {
    var l = $(b).val().trim();
    if (l && parseInt(l) == l)
        wb_input_reset(b);
    else
        return wb_input_unvalidated_soft(b),
        !1;
    return parseInt(l)
}
function ks_valid_ip(b) {
    b = b.split(".");
    return 4 != b.length ? !1 : b.every(function(l) {
        var y = parseInt(l);
        return y != l ? !1 : 0 <= y && 255 >= y
    })
}
function domainValidator(b) {
    return b ? /^(?!:\/\/)([a-zA-Z0-9-]+\.){0,5}[a-zA-Z0-9-][a-zA-Z0-9-]+\.[a-zA-Z]{2,64}?$/gi.test(b) : !1
}
function urlValidator(b) {
    if (0 <= b.indexOf(",")) {
        b = b.split(",");
        for (var l = 0; l < b.length; l++)
            if (!urlValidator(b[l]))
                return !1;
        return !0
    }
    b = b.trim();
    l = /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
    return b && l.test(b) ? !0 : !1
}
function isValidPercentage(b, l, y) {
    if (parseInt(b) != b)
        return !1;
    b = parseInt(b);
    var m = 0
      , u = 100;
    l && (m = 1);
    y && (u = 99);
    return b >= m && b <= u
}
function isPositiveInteger(b) {
    return parseInt(b) != b || 0 >= b ? !1 : parseInt(b)
}
function is_positive_float(b) {
    return parseFloat(b) != b || 0 >= b ? !1 : parseFloat(b)
}
function hideWarning(b) {
    $(b).closest(".js_warnbox").find(".warning").hide()
}
function showWarning(b) {
    $(b).closest(".js_warnbox").find(".warning").fadeIn()
}
function reset_validation(b) {
    $(b).find("input").each(function() {
        wb_input_reset(this);
        $(this).hasClass("hasWarning") && hideWarning(this.closest(".js_warnbox"))
    })
}
function checkFloat(b) {
    return /^[0-9]+([.][0-9]{2})?$/.test(b) ? parseFloat(b) : !1
}
function checkCAP(b) {
    return /^\d{5}$/.test(b) ? b : !1
}
function ksUniformPrice(b) {
    try {
        for (; 0 <= b.indexOf(","); )
            b = b.replace(",", ".")
    } catch (l) {}
    return !b || parseInt(b) != b && parseFloat(b) != b ? 0 : parseFloat(b)
}
function ksUniformInteger(b) {
    return parseInt(b) != b || 0 >= b ? 0 : parseInt(b)
}
function ksIsValidPhone(b) {
    return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(b)
}
function is_null_or_undefined(b) {
    return void 0 == b || null == b
}
function _is_ascii_string(b) {
    return /^[\x00-\x7F]*$/.test(b)
}
function get_text_ascii_val_or_unvalidate(b) {
    var l = get_text_val_or_unvalidate(b);
    if (!l)
        return "";
    if (_is_ascii_string(l))
        return l;
    wbSetInputUnvalidated(b);
    return ""
}
;/*
 mustache.js - Logic-less {{mustache}} templates with JavaScript
 http://github.com/janl/mustache.js
*/
(function(b, l) {
    "object" === typeof exports && exports && "string" !== typeof exports.nodeName ? l(exports) : "function" === typeof define && define.amd ? define(["exports"], l) : (b.Mustache = {},
    l(b.Mustache))
}
)(this, function(b) {
    function l(S) {
        return "function" === typeof S
    }
    function y(S) {
        return S.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
    }
    function m(S, Y) {
        return null != S && "object" === typeof S && Y in S
    }
    function u(S, Y) {
        function oa(n) {
            "string" === typeof n && (n = n.split(O, 2));
            if (!R(n) || 2 !== n.length)
                throw Error("Invalid tags: " + n);
            Ba = new RegExp(y(n[0]) + "\\s*");
            fb = new RegExp("\\s*" + y(n[1]));
            a = new RegExp("\\s*" + y("}" + n[1]))
        }
        if (!S)
            return [];
        var ma = [], sa = [], La = [], Na = !1, Ja = !1, Ba, fb, a;
        oa(Y || b.tags);
        S = new E(S);
        for (var c, d, f; !S.eos(); ) {
            Y = S.pos;
            if (d = S.scanUntil(Ba)) {
                f = 0;
                for (var h = d.length; f < h; ++f)
                    if (c = d.charAt(f),
                    F.call(J, c) ? Ja = !0 : La.push(sa.length),
                    sa.push(["text", c, Y, Y + 1]),
                    Y += 1,
                    "\n" === c) {
                        if (Na && !Ja)
                            for (; La.length; )
                                delete sa[La.pop()];
                        else
                            La = [];
                        Ja = Na = !1
                    }
            }
            if (!S.scan(Ba))
                break;
            Na = !0;
            c = S.scan(ka) || "name";
            S.scan(X);
            "=" === c ? (d = S.scanUntil(ea),
            S.scan(ea),
            S.scanUntil(fb)) : "{" === c ? (d = S.scanUntil(a),
            S.scan(da),
            S.scanUntil(fb),
            c = "&") : d = S.scanUntil(fb);
            if (!S.scan(fb))
                throw Error("Unclosed tag at " + S.pos);
            f = [c, d, Y, S.pos];
            sa.push(f);
            if ("#" === c || "^" === c)
                ma.push(f);
            else if ("/" === c) {
                c = ma.pop();
                if (!c)
                    throw Error('Unopened section "' + d + '" at ' + Y);
                if (c[1] !== d)
                    throw Error('Unclosed section "' + c[1] + '" at ' + Y);
            } else
                "name" === c || "{" === c || "&" === c ? Ja = !0 : "=" === c && oa(d)
        }
        if (c = ma.pop())
            throw Error('Unclosed section "' + c[1] + '" at ' + S.pos);
        return v(C(sa))
    }
    function C(S) {
        for (var Y = [], oa, ma, sa = 0, La = S.length; sa < La; ++sa)
            if (oa = S[sa])
                "text" === oa[0] && ma && "text" === ma[0] ? (ma[1] += oa[1],
                ma[3] = oa[3]) : (Y.push(oa),
                ma = oa);
        return Y
    }
    function v(S) {
        for (var Y = [], oa = Y, ma = [], sa, La = 0, Na = S.length; La < Na; ++La)
            switch (sa = S[La],
            sa[0]) {
            case "#":
            case "^":
                oa.push(sa);
                ma.push(sa);
                oa = sa[4] = [];
                break;
            case "/":
                oa = ma.pop();
                oa[5] = sa[2];
                oa = 0 < ma.length ? ma[ma.length - 1][4] : Y;
                break;
            default:
                oa.push(sa)
            }
        return Y
    }
    function E(S) {
        this.tail = this.string = S;
        this.pos = 0
    }
    function N(S, Y) {
        this.view = S;
        this.cache = {
            ".": this.view
        };
        this.parent = Y
    }
    function P() {
        this.cache = {}
    }
    var aa = Object.prototype.toString
      , R = Array.isArray || function(S) {
        return "[object Array]" === aa.call(S)
    }
      , F = RegExp.prototype.test
      , J = /\S/
      , T = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
        "`": "&#x60;",
        "=": "&#x3D;"
    }
      , X = /\s*/
      , O = /\s+/
      , ea = /\s*=/
      , da = /\s*\}/
      , ka = /#|\^|\/|>|\{|&|=|!/;
    E.prototype.eos = function() {
        return "" === this.tail
    }
    ;
    E.prototype.scan = function(S) {
        S = this.tail.match(S);
        if (!S || 0 !== S.index)
            return "";
        S = S[0];
        this.tail = this.tail.substring(S.length);
        this.pos += S.length;
        return S
    }
    ;
    E.prototype.scanUntil = function(S) {
        S = this.tail.search(S);
        switch (S) {
        case -1:
            var Y = this.tail;
            this.tail = "";
            break;
        case 0:
            Y = "";
            break;
        default:
            Y = this.tail.substring(0, S),
            this.tail = this.tail.substring(S)
        }
        this.pos += Y.length;
        return Y
    }
    ;
    N.prototype.push = function(S) {
        return new N(S,this)
    }
    ;
    N.prototype.lookup = function(S) {
        var Y = this.cache;
        if (Y.hasOwnProperty(S))
            var oa = Y[S];
        else {
            for (var ma = this, sa, La, Na = !1; ma; ) {
                if (0 < S.indexOf("."))
                    for (oa = ma.view,
                    sa = S.split("."),
                    La = 0; null != oa && La < sa.length; )
                        La === sa.length - 1 && (Na = m(oa, sa[La])),
                        oa = oa[sa[La++]];
                else
                    oa = ma.view[S],
                    Na = m(ma.view, S);
                if (Na)
                    break;
                ma = ma.parent
            }
            Y[S] = oa
        }
        l(oa) && (oa = oa.call(this.view));
        return oa
    }
    ;
    P.prototype.clearCache = function() {
        this.cache = {}
    }
    ;
    P.prototype.parse = function(S, Y) {
        var oa = this.cache
          , ma = oa[S];
        null == ma && (ma = oa[S + ":" + (Y || b.tags).join(":")] = u(S, Y));
        return ma
    }
    ;
    P.prototype.render = function(S, Y, oa) {
        var ma = this.parse(S);
        Y = Y instanceof N ? Y : new N(Y);
        return this.renderTokens(ma, Y, oa, S)
    }
    ;
    P.prototype.renderTokens = function(S, Y, oa, ma) {
        for (var sa = "", La, Na, Ja, Ba = 0, fb = S.length; Ba < fb; ++Ba)
            Ja = void 0,
            La = S[Ba],
            Na = La[0],
            "#" === Na ? Ja = this.renderSection(La, Y, oa, ma) : "^" === Na ? Ja = this.renderInverted(La, Y, oa, ma) : ">" === Na ? Ja = this.renderPartial(La, Y, oa, ma) : "&" === Na ? Ja = this.unescapedValue(La, Y) : "name" === Na ? Ja = this.escapedValue(La, Y) : "text" === Na && (Ja = this.rawValue(La)),
            void 0 !== Ja && (sa += Ja);
        return sa
    }
    ;
    P.prototype.renderSection = function(S, Y, oa, ma) {
        function sa(a) {
            return La.render(a, Y, oa)
        }
        var La = this
          , Na = ""
          , Ja = Y.lookup(S[1]);
        if (Ja) {
            if (R(Ja))
                for (var Ba = 0, fb = Ja.length; Ba < fb; ++Ba)
                    Na += this.renderTokens(S[4], Y.push(Ja[Ba]), oa, ma);
            else if ("object" === typeof Ja || "string" === typeof Ja || "number" === typeof Ja)
                Na += this.renderTokens(S[4], Y.push(Ja), oa, ma);
            else if (l(Ja)) {
                if ("string" !== typeof ma)
                    throw Error("Cannot use higher-order sections without the original template");
                Ja = Ja.call(Y.view, ma.slice(S[3], S[5]), sa);
                null != Ja && (Na += Ja)
            } else
                Na += this.renderTokens(S[4], Y, oa, ma);
            return Na
        }
    }
    ;
    P.prototype.renderInverted = function(S, Y, oa, ma) {
        var sa = Y.lookup(S[1]);
        if (!sa || R(sa) && 0 === sa.length)
            return this.renderTokens(S[4], Y, oa, ma)
    }
    ;
    P.prototype.renderPartial = function(S, Y, oa) {
        if (oa && (S = l(oa) ? oa(S[1]) : oa[S[1]],
        null != S))
            return this.renderTokens(this.parse(S), Y, oa, S)
    }
    ;
    P.prototype.unescapedValue = function(S, Y) {
        S = Y.lookup(S[1]);
        if (null != S)
            return S
    }
    ;
    P.prototype.escapedValue = function(S, Y) {
        S = Y.lookup(S[1]);
        if (null != S)
            return b.escape(S)
    }
    ;
    P.prototype.rawValue = function(S) {
        return S[1]
    }
    ;
    b.name = "mustache.js";
    b.version = "2.3.0";
    b.tags = ["{{", "}}"];
    var wa = new P;
    b.clearCache = function() {
        return wa.clearCache()
    }
    ;
    b.parse = function(S, Y) {
        return wa.parse(S, Y)
    }
    ;
    b.render = function(S, Y, oa) {
        if ("string" !== typeof S)
            throw Y = TypeError,
            S = R(S) ? "array" : typeof S,
            new Y('Invalid template! Template should be a "string" but "' + S + '" was given as the first argument for mustache#render(template, view, partials)');
        return wa.render(S, Y, oa)
    }
    ;
    b.to_html = function(S, Y, oa, ma) {
        S = b.render(S, Y, oa);
        if (l(ma))
            ma(S);
        else
            return S
    }
    ;
    b.escape = function(S) {
        return String(S).replace(/[&<>"'`=\/]/g, function(Y) {
            return T[Y]
        })
    }
    ;
    b.Scanner = E;
    b.Context = N;
    b.Writer = P;
    return b
});
_mstchparsed = [];
_mstchstored = [];
function wmustache_maybe_parse(b, l) {
    b = b.replace(/{{&gt;/g, "{{>");
    if (l && -1 != _mstchparsed.indexOf(l))
        return b;
    Mustache.parse(b);
    _mstchparsed.push(l);
    return b
}
function wmustache_decode(b) {
    b = $(b).html().trim();
    return JSON.parse(atob(b))
}
function wmustache_rendering() {
    $(".ks_mstch_mtemplate").each(function() {
        var b = $(this).children(":first");
        b = wmustache_decode(b);
        var l = b.tmpl;
        l = wmustache_maybe_parse(l, b._hash_);
        b = Mustache.render(l, b.json, b.partials);
        $(this).after(b);
        $(this).remove()
    });
    $(".ks_mstch_mtemplate_inc").each(function() {
        var b = $(this).children(":first")
          , l = b.attr("data-id");
        b = wmustache_decode(b);
        _mstchstored[l] = b;
        wmustache_maybe_parse(b, l);
        $(this).remove()
    });
    $(".ks_mstch_mtemplate_inc_data").each(function() {
        var b = $(this).children(":first")
          , l = b.attr("data-id");
        l = _mstchstored[l];
        b = wmustache_decode(b);
        b = Mustache.render(l, b);
        $(this).after(b).remove();
        $(this).remove()
    })
}
$(document).ready(function() {
    fake_animation_for_reload(".ks_mstch_mtemplate,.ks_mstch_mtemplate_inc,.ks_mstch_mtemplate_inc_data", wmustache_rendering, "ks_mstch_mtemplate_refresh");
    wmustache_rendering()
});
function fake_animation_for_reload(b, l, y) {
    var m = "fake_animation_" + b;
    window[m] || (y || (y = b + "_fake_refresh"),
    b = "<style> @keyframes " + y + " { 0% {outline-color: #000;} 100% {outline-color: #000;} }" + b + " {animation-duration: 0.001s; animation-name: " + y + ";}</style>",
    $("head").append(b),
    window[m] = !0,
    $(document).bind("animationstart", function(u) {
        var C = $(u.target);
        try {
            animation_name = u.originalEvent.animationName,
            animation_name == y && l(C)
        } catch (v) {}
    }))
}
;function wblocal() {
    var b = window.location.hostname;
    return 0 <= b.indexOf("localhost") || 0 <= b.indexOf("convento.wubook.net") || 0 <= b.indexOf("alpha.wubook.net")
}
function wblocal_ports() {
    for (var b = [11519, 11511], l = 0; l < b.length; l++)
        if (0 == window.location.href.indexOf("https://localhost:" + b[l]))
            return !0
}
function wb_hostname(b) {
    return wblocal() ? "https://localhost:" + (b || window.location.port) : "https://wubook.net"
}
function wb_hostname_path(b, l) {
    return wb_hostname(l) + b
}
;_wbloadimg = '<img src="/imgs/default/gear.png" class="wb_load" style="display:none"></img>';
$(document).ready(function() {
    $("body").append(_wbloadimg)
});
function find_classed_parent(b, l) {
    b = $(b);
    for (var y = 0; !b.hasClass(l) && 48 > y; )
        b = b.parent(),
        y += 1;
    return b.hasClass(l) ? b : !1
}
function jfind_parent(b, l, y) {
    b = $(b);
    for (var m = 0; !b.hasClass(l) && 48 > m; )
        b = b.parent(),
        m += 1;
    if (!b.hasClass(l))
        return !1;
    b = $(b);
    return y ? b.find(y) : b
}
jQuery.fn.extend({
    closestCousin: function(b) {
        for (var l = jQuery(this), y = 0; 0 == l.has(b).length && 48 > y; )
            l = l.parent(),
            y += 1;
        return l.has(b) ? l.find(b) : !1
    }
});
function el_next_in(b) {
    $(b).hide().next().fadeIn()
}
function el_next_out(b) {
    $(b).next().hide().prev().fadeIn()
}
function el_prev_in(b) {
    $(b).hide().prev().fadeIn()
}
function add_red_bg(b) {
    $(b).addClass("are_you_shure")
}
function remove_red_bg(b) {
    $(b).removeClass("are_you_shure")
}
function hideOrFade(b) {
    b = $(b);
    if (b.is(":visible"))
        return b.hide(),
        !0;
    b.fadeIn();
    var l = document.createTextNode(" ");
    b.append(l);
    return !1
}
function hideOrFadeJustOne(b, l) {
    if ($(b).is(":visible")) {
        var y = b;
        b = l
    } else
        y = l;
    $(y).hide();
    $(b).fadeIn()
}
function gear_parent(b, l) {
    b = l ? $(b).closest(l) : $(b).parent();
    0 == $(b).children("img").length && $(b).append('<img src="/imgs/default/gear.png" class="wb_load" style="display:none"></img>');
    $(b).children().finish();
    $(b).children("img").is(":visible") ? ($(b).children("img").hide(),
    $(b).children().not("img").fadeIn()) : ($(b).children().not("img").hide(),
    $(b).children("img").fadeIn())
}
function div_buttons_hiding(b, l) {
    l && "." != l.charAt(0) && (l = "." + l);
    gear_parent(b, l || ".div_buttons")
}
function buttons_hiding(b) {
    wblocal() && (b ? window._last_buttons_hiding = b : (buttons_hiding(_last_buttons_hiding),
    window._last_buttons_hiding = void 0));
    if (!$(b).is(":visible"))
        return $(b).next().hide().prev().fadeIn();
    var l = $(b).next();
    l.length && "img" == l[0].tagName.toLowerCase() || $(b).after('<img src="/imgs/default/gear.png" class="wb_load" style="display:none"></img>');
    $(b).hide().next().fadeIn();
    return $(b).next()
}
function init_masked_date(b) {
    jQuery(function(l) {
        l(b).mask("19/29/9999", {
            placeholder: "dd/mm/yyyy"
        })
    });
    $(b).off("change").on("change", function() {
        ks_validate_date(this)
    })
}
function copyToClipboard_jquery_sels(b, l) {
    b = $(b);
    l = $(l);
    b = b.val() || b.html();
    navigator.clipboard.writeText(b.trim());
    l.fadeIn();
    l.delay(1E3).fadeOut()
}
function copyToClipboard(b, l) {
    return copyToClipboard_jquery_sels("#" + b, "#" + l)
}
function __pprint(b) {
    return JSON.stringify(b, null, 4)
}
function pprint(b) {
    kas_log(JSON.stringify(b, null, 4))
}
function zreload_js() {
    $("script").each(function() {
        var b = $(this).attr("src");
        if (!b || "module" == $(this).attr("type"))
            return !0;
        b += "?a=" + Math.random();
        try {
            $.getScript(b)
        } catch (l) {}
    })
}
function ks_check_uncheck_all(b, l, y) {
    l || (l = $(b).closest("div"));
    b = l.find(":checkbox").length;
    var m = l.find(":checkbox:checked").length;
    b == m ? l.find(":checkbox").prop("checked", !1) : l.find(":checkbox").prop("checked", !0);
    y && y()
}
;function kas_qs(b, l) {
    b || (b = location.search);
    b = b.substr(1);
    if (b.length) {
        b = b.split("&");
        for (var y = {}, m = 0; m < b.length; m++) {
            for (var u = b[m].split("="), C = u[0], v = u[1], E = 2; E < u.length; E++)
                v += "=" + u[E];
            l ? y[C] = v : y[decodeURIComponent(C)] = decodeURIComponent(v)
        }
        return y
    }
}
function kas_to_qs(b, l, y) {
    l = l || {};
    var m = [], u;
    for (u in b)
        if (b.hasOwnProperty(u)) {
            var C = b[u];
            if (u in l)
                C = l[u](C);
            else if (C && C.constructor === Array || "object" == typeof C)
                C = JSON.stringify(C);
            C || 0 === C || (C = "");
            C = y ? u + "=" + C : encodeURIComponent(u) + "=" + encodeURIComponent(C);
            m.push(C)
        }
    return "?" + m.join("&")
}
function kas_qs_param(b) {
    var l = kas_qs();
    if (l)
        return l[b]
}
function kasGetURLParameters(b) {
    b || (b = location.search);
    b = b.substr(1);
    if (b.length)
        return JSON.parse('{"' + decodeURI(b.replace(/&/g, '","').replace(/=/g, '":"')) + '"}')
}
function kasGetURLParameter(b) {
    return decodeURI((RegExp("[?&]" + b + "=(.+?)(&|$)").exec(location.search) || [, ""])[1])
}
function kasPutURLParameter(b, l) {
    history.pushState({}, null, location.protocol + "//" + location.host + location.pathname + "?" + l + "=" + b)
}
function kasReplaceURLParameter(b, l) {
    var y = location.protocol + "//" + location.host + location.pathname
      , m = kasDelURLParameter(b);
    history.pushState({}, null, y + (m ? m + ("&" + b + "=" + l) : "?" + b + "=" + l))
}
function kasAddURLParameter(b, l) {
    var y = kasGetURLParameters();
    y || (y = {});
    y[b] = l;
    b = "?";
    for (var m in y)
        b += m + "=" + y[m] + "&";
    return b = b.slice(0, -1)
}
function kasBuildQsParts(b, l) {
    l || (l = {});
    for (var y in b)
        l[y] = b[y];
    b = "?";
    for (var m in l)
        b += m + "=" + l[m] + "&";
    return b = b.slice(0, -1)
}
function kasAddURLParameters(b) {
    var l = kasGetURLParameters();
    return kasBuildQsParts(b, l)
}
function kasDelURLParameter(b) {
    var l = kasGetURLParameters(), y = "?", m;
    for (m in l)
        m != b && (y += m + "=" + l[m] + "&");
    return y = y.slice(0, -1)
}
;function to_topper(b) {
    var l = $(b).closest(".js_table_input");
    b = l.find(".js_edit_info");
    l = l.find(".js_save_info");
    b.is(":visible") ? (b.hide(),
    l.fadeIn()) : (l.hide(),
    b.fadeIn())
}
function read_or_edit(b) {
    var l = $(b).closest(".js_table_input").find(".table_input")
      , y = l.find(".js_saved_field");
    l = l.find(".js_input_field");
    to_topper(b);
    y.is(":visible") ? (y.hide(),
    l.fadeIn()) : (l.hide(),
    y.fadeIn())
}
function expand_level_one(b) {
    b = $(b).closest(".js_trans_level_1");
    var l = b.find(".js_trans_level_2");
    b.toggleClass("active");
    hideOrFade(l)
}
function footer_fixed() {
    var b = $(window).height()
      , l = $("html").outerHeight(!0);
    0 <= b - l ? $("#wb_footer").addClass("fixed_footer") : $("#wb_footer").removeClass("fixed_footer")
}
$(window).resize(function() {
    footer_fixed()
});
$(document).ready(function() {
    footer_fixed()
});
$(window).click(function(b) {
    b.target.matches(".dropdown_button") || $(".dropdown_content").hide()
});
function expand_dropdown(b) {
    b = $(b).closest(".js_dropdown").find(".dropdown_content");
    b.is(":visible") ? b.hide() : ($(".dropdown_content").hide(),
    b.fadeIn(150))
}
function row_read_or_edit_result(b, l) {
    l = (void 0 === l ? 0 : l) ? ".fail" : ".done";
    b = $(b).find(".div_buttons");
    b.find("button").hide();
    b.find(l).fadeIn();
    b.find(l).delay(1E3).fadeOut();
    b.find("button").delay(2E3).fadeIn()
}
function row_read_or_edit(b) {
    var l = $(b).closest(".js_row_read_or_edit");
    b = l.find(".js_row_read");
    l = l.find(".js_row_edit");
    b.is(":visible") ? (b.hide(),
    l.fadeIn()) : (l.hide(),
    b.fadeIn())
}
function row_read_and_edit(b) {
    var l = $(b).closest(".js_row_read_and_edit");
    b = l.find(".js_row_read");
    l = l.find(".js_row_edit");
    b = b.find(".div_buttons");
    l.is(":visible") ? (l.hide(),
    b.find("button").show()) : (l.fadeIn(),
    b.find("button").hide())
}
function multiple_row_read_and_edit(b) {
    var l = $(b).closest(".js_row_read_and_edit");
    b = $(".js_row_read_and_edit_open");
    var y = l.find(".js_row_read");
    l = l.find(".js_row_edit");
    y = y.find(".div_buttons");
    y.find("button").show();
    l.is(":visible") ? ($(l).removeClass("js_row_read_and_edit_open"),
    l.hide(),
    y.find("button").show()) : (b.hide(),
    b.parent().find("button").show(),
    b.removeClass("js_row_read_and_edit_open"),
    $(l).addClass("js_row_read_and_edit_open"),
    l.fadeIn(),
    y.find("button").hide())
}
;function wb_input_unvalidated_soft(b) {
    $(b).removeClass("wb_input_validated_soft").addClass("wb_input_unvalidated_soft")
}
function wb_input_validated_soft(b) {
    $(b).removeClass("wb_input_validated_soft").addClass("wb_input_unvalidated_soft")
}
function wb_input_reset(b) {
    $(b).removeClass("wb_input_validated").removeClass("wb_input_unvalidated").removeClass("wb_input_unvalidated_soft").removeClass("wb_input_validated_soft")
}
wbSetInputUnvalidated = wb_input_unvalidated_soft;
wbSetInputValidated = wb_input_reset;
$.ajaxSetup({
    data: {
        _kscs_: ""
    }
});
function recoveryPsw(b) {
    b ? wauth_login(this, !0) : ($("#wb_login").hide(),
    $("#recovery_pswrd").fadeIn(),
    kasPutURLParameter("true", "recovery"))
}
function pleaseContactUs() {
    $("#wb_login").hide();
    $("#recovery_pswrd").hide();
    $("#please_contact_us").fadeIn()
}
function backRecovery() {
    $("#please_contact_us").hide();
    $("#wb_login").fadeIn();
    kasPutURLParameter("", "")
}
function showWauthLogin() {
    $("#wb_login_gear").hide();
    $("#wb_login_input").fadeIn()
}
function wauthSetLang() {
    var b = kasGetURLParameter("lang");
    b && $("#switchlang_log").val(b)
}
function wauthRecoverPsw() {
    kasGetURLParameter("recovery") && recoveryPsw()
}
function validateWauthLogin() {
    var b = !0
      , l = $("#wauth_user").val()
      , y = $("#wauth_password").val()
      , m = window.turnstile_login;
    l ? wb_input_reset("#wauth_user") : (wb_input_unvalidated_soft("#wauth_user"),
    b = !1);
    y ? wb_input_reset("#wauth_password") : (wb_input_unvalidated_soft("#wauth_password"),
    b = !1);
    if (!b)
        return !1;
    b = (new URLSearchParams(window.location.search)).get("autologin") || $("#autologin_selector").val();
    return {
        username: l,
        password: y,
        autologin: b,
        captcha: m
    }
}
function render_new_form() {
    var b = $("#wauth_user").val().trim()
      , l = $("#wadmin_login_if_banned_tmpl").html();
    b = Mustache.render(l, {
        account: b
    });
    l = $("#wadmin_login_if_banned");
    $("#wb_login").hide();
    l.hide().html(b).fadeIn()
}
function wauth_login(b, l) {
    l || navigator.webdriver ? render_new_form() : wauth_login_go(b)
}
function wauth_login_go(b) {
    div_buttons_hiding(b);
    block_ui();
    $("#login_loader").show();
    var l = validateWauthLogin();
    if (!l)
        return unblock_ui(),
        $("#login_loader").hide(),
        div_buttons_hiding(b);
    $.post("/wauth/wauth/rewlogin", l, function(y) {
        div_buttons_hiding(b);
        if (!y)
            return unblock_ui(),
            $("#login_loader").hide(),
            ks_alert(_auth_fail_);
        "stop" === y ? (unblock_ui(),
        $("#login_loader").hide(),
        wauth_login(b, !0)) : (y = redirectAfterLoginFromparams(),
        window.location.href = y)
    })
}
function cloginHandlingUrl() {
    var b = redirectAfterLoginFromparams();
    $.post("/wauth/wauth/rwcklg", function(l) {
        l ? window.location.href = b || "/wauth/wauth/" : showWauthLogin()
    })
}
function redirectAfterLoginFromparams() {
    var b = kasGetURLParameter("rt");
    return b ? b = decodeURIComponent(b) : (b = kasGetURLParameter("wtkt")) ? "/wauth/wauth/wopid?wtkt=" + b : (b = kasGetURLParameter("autologin") || $("#autologin_selector").val() || "auto",
    "/wauth/wauth/?autologin=" + b)
}
function wopid_or_clogin() {
    var b = 0 <= window.location.href.indexOf("/wauth/wopid")
      , l = 0 <= window.location.href.indexOf("clogin");
    if (!b && !l)
        return showWauthLogin();
    cloginHandlingUrl()
}
$(document).ready(function() {
    $("#wauth_user, #wauth_password").keyup(function(l) {
        13 == l.keyCode && wauth_login()
    });
    $(document).on("change", "#autologin_selector", function(l) {
        l = $(l.target).val();
        localStorage.setItem("last_login", l)
    });
    var b = localStorage.getItem("last_login");
    b && $("#autologin_selector").val(b)
});
function wadmin_banned_send_request(b) {
    var l = !0;
    b = $("#wauth_user").val();
    var y = $("#wauth_password").val()
      , m = $("#wadmin_login_if_banned_form")
      , u = $("#wauth_user_name_banned")
      , C = $("#wauth_user_surname_banned")
      , v = $("#wauth_user_email_banned")
      , E = $("#wauth_user_phone_banned")
      , N = $("#wauth_user_message_banned")
      , P = m.attr("data-acode");
    u = u.val().trim();
    C = C.val().trim();
    v = v.val().trim();
    E = E.val().trim();
    N = N.val().trim();
    u ? wb_input_reset("#wauth_user_name_banned") : wb_input_unvalidated_soft("#wauth_user_name_banned");
    C ? wb_input_reset("#wauth_user_surname_banned") : wb_input_unvalidated_soft("#wauth_user_surname_banned");
    v && ksIsValidEmail(v) ? wb_input_reset("#wauth_user_email_banned") : (v = "",
    wb_input_unvalidated_soft("#wauth_user_email_banned"));
    E && ksIsValidPhone(E) ? wb_input_reset("#wauth_user_phone_banned") : (E = "",
    wb_input_unvalidated_soft("#wauth_user_phone_banned"));
    N ? wb_input_reset("#wauth_user_message_banned") : wb_input_unvalidated_soft("#wauth_user_message_banned");
    u && C && v && E && N || (l = !1);
    if (!l)
        return !1;
    l = $("#wadmin_login_if_banned_form_sent_tmpl").html();
    var aa = kasGetURLParameter("lang");
    b = {
        username: b,
        password: y,
        lang: aa,
        account: P,
        name: u,
        surname: C,
        email: v,
        phone: E,
        message: N,
        step: "send_request"
    };
    var R = Mustache.render(l, b);
    $.post("/wauth/wauth/rewlogin", b, function(F) {
        m.html(R)
    })
}
window.turnstile_callback = function() {
    0 < $(".cloudflare_login").length && (window.turnstile_container_one = turnstile.render(".cloudflare_login", {
        sitekey: window.turnstile_public,
        theme: "light",
        callback: function(b) {
            window.turnstile_login = b
        }
    }))
}
;
/*
 jquery-confirm v3.3.0 (http://craftpip.github.io/jquery-confirm/)
 Author: Boniface Pereira
 Website: www.craftpip.com
 Contact: hey@craftpip.com

 Copyright 2013-2017 jquery-confirm
 Licensed under MIT (https://github.com/craftpip/jquery-confirm/blob/master/LICENSE)
*/
if ("undefined" === typeof jQuery)
    throw Error("jquery-confirm requires jQuery");
var jconfirm, Jconfirm;
(function(b, l) {
    b.fn.confirm = function(m, u) {
        "undefined" === typeof m && (m = {});
        "string" === typeof m && (m = {
            content: m,
            title: u ? u : !1
        });
        b(this).each(function() {
            var C = b(this);
            C.attr("jc-attached") ? console.warn("jConfirm has already been attached to this element ", C[0]) : (C.on("click", function(v) {
                v.preventDefault();
                v = b.extend({}, m);
                C.attr("data-title") && (v.title = C.attr("data-title"));
                C.attr("data-content") && (v.content = C.attr("data-content"));
                "undefined" == typeof v.buttons && (v.buttons = {});
                v.$target = C;
                if (C.attr("href") && 0 == Object.keys(v.buttons).length) {
                    var E = b.extend(!0, {}, jconfirm.pluginDefaults.defaultButtons, (jconfirm.defaults || {}).defaultButtons || {})
                      , N = Object.keys(E)[0];
                    v.buttons = E;
                    v.buttons[N].action = function() {
                        location.href = C.attr("href")
                    }
                }
                v.closeIcon = !1;
                b.confirm(v)
            }),
            C.attr("jc-attached", !0))
        });
        return b(this)
    }
    ;
    b.confirm = function(m, u) {
        "undefined" === typeof m && (m = {});
        "string" === typeof m && (m = {
            content: m,
            title: u ? u : !1
        });
        "object" != typeof m.buttons && (m.buttons = {});
        0 == Object.keys(m.buttons).length && (u = b.extend(!0, {}, jconfirm.pluginDefaults.defaultButtons, (jconfirm.defaults || {}).defaultButtons || {}),
        m.buttons = u);
        return jconfirm(m)
    }
    ;
    b.alert = function(m, u) {
        "undefined" === typeof m && (m = {});
        "string" === typeof m && (m = {
            content: m,
            title: u ? u : !1
        });
        "object" != typeof m.buttons && (m.buttons = {});
        if (0 == Object.keys(m.buttons).length) {
            u = b.extend(!0, {}, jconfirm.pluginDefaults.defaultButtons, (jconfirm.defaults || {}).defaultButtons || {});
            var C = Object.keys(u)[0];
            m.buttons[C] = u[C]
        }
        return jconfirm(m)
    }
    ;
    b.dialog = function(m, u) {
        "undefined" === typeof m && (m = {});
        "string" === typeof m && (m = {
            content: m,
            title: u ? u : !1,
            closeIcon: function() {}
        });
        m.buttons = {};
        "undefined" == typeof m.closeIcon && (m.closeIcon = function() {}
        );
        m.confirmKeys = [13];
        return jconfirm(m)
    }
    ;
    jconfirm = function(m) {
        "undefined" === typeof m && (m = {});
        var u = b.extend(!0, {}, jconfirm.pluginDefaults);
        jconfirm.defaults && (u = b.extend(!0, u, jconfirm.defaults));
        u = b.extend(!0, {}, u, m);
        m = new Jconfirm(u);
        jconfirm.instances.push(m);
        return m
    }
    ;
    Jconfirm = function(m) {
        b.extend(this, m);
        this._init()
    }
    ;
    Jconfirm.prototype = {
        _init: function() {
            var m = this;
            jconfirm.instances.length || (jconfirm.lastFocused = b("body").find(":focus"));
            this._id = Math.round(99999 * Math.random());
            this.contentParsed = b(document.createElement("div"));
            this.lazyOpen || setTimeout(function() {
                m.open()
            }, 0)
        },
        _buildHTML: function() {
            var m = this;
            this._parseAnimation(this.animation, "o");
            this._parseAnimation(this.closeAnimation, "c");
            this._parseBgDismissAnimation(this.backgroundDismissAnimation);
            this._parseColumnClass(this.columnClass);
            this._parseTheme(this.theme);
            this._parseType(this.type);
            var u = b(this.template);
            u.find(".jconfirm-box").addClass(this.animationParsed).addClass(this.backgroundDismissAnimationParsed).addClass(this.typeParsed);
            this.typeAnimated && u.find(".jconfirm-box").addClass("jconfirm-type-animated");
            this.useBootstrap ? (u.find(".jc-bs3-row").addClass(this.bootstrapClasses.row),
            u.find(".jc-bs3-row").addClass("justify-content-md-center justify-content-sm-center justify-content-xs-center justify-content-lg-center"),
            u.find(".jconfirm-box-container").addClass(this.columnClassParsed),
            this.containerFluid ? u.find(".jc-bs3-container").addClass(this.bootstrapClasses.containerFluid) : u.find(".jc-bs3-container").addClass(this.bootstrapClasses.container)) : u.find(".jconfirm-box").css("width", this.boxWidth);
            this.titleClass && u.find(".jconfirm-title-c").addClass(this.titleClass);
            u.addClass(this.themeParsed);
            var C = "jconfirm-box" + this._id;
            u.find(".jconfirm-box").attr("aria-labelledby", C).attr("tabindex", -1);
            u.find(".jconfirm-content").attr("id", C);
            null !== this.bgOpacity && u.find(".jconfirm-bg").css("opacity", this.bgOpacity);
            this.rtl && u.addClass("jconfirm-rtl");
            this.$el = u.appendTo(this.container);
            this.$jconfirmBoxContainer = this.$el.find(".jconfirm-box-container");
            this.$jconfirmBox = this.$body = this.$el.find(".jconfirm-box");
            this.$jconfirmBg = this.$el.find(".jconfirm-bg");
            this.$title = this.$el.find(".jconfirm-title");
            this.$titleContainer = this.$el.find(".jconfirm-title-c");
            this.$content = this.$el.find("div.jconfirm-content");
            this.$contentPane = this.$el.find(".jconfirm-content-pane");
            this.$icon = this.$el.find(".jconfirm-icon-c");
            this.$closeIcon = this.$el.find(".jconfirm-closeIcon");
            this.$holder = this.$el.find(".jconfirm-holder");
            this.$btnc = this.$el.find(".jconfirm-buttons");
            this.$scrollPane = this.$el.find(".jconfirm-scrollpane");
            m.setStartingPoint();
            this._contentReady = b.Deferred();
            this._modalReady = b.Deferred();
            this.$holder.css({
                "padding-top": this.offsetTop,
                "padding-bottom": this.offsetBottom
            });
            this.setTitle();
            this.setIcon();
            this._setButtons();
            this._parseContent();
            this.initDraggable();
            this.isAjax && this.showLoading(!1);
            b.when(this._contentReady, this._modalReady).then(function() {
                if (m.isAjaxLoading)
                    setTimeout(function() {
                        m.isAjaxLoading = !1;
                        m.setContent();
                        m.setTitle();
                        m.setIcon();
                        setTimeout(function() {
                            m.hideLoading(!1);
                            m._updateContentMaxHeight()
                        }, 100);
                        if ("function" === typeof m.onContentReady)
                            m.onContentReady()
                    }, 50);
                else if (m._updateContentMaxHeight(),
                m.setTitle(),
                m.setIcon(),
                "function" === typeof m.onContentReady)
                    m.onContentReady();
                m.autoClose && m._startCountDown()
            });
            this._watchContent();
            "none" === this.animation && (this.animationBounce = this.animationSpeed = 1);
            this.$body.css(this._getCSS(this.animationSpeed, this.animationBounce));
            this.$contentPane.css(this._getCSS(this.animationSpeed, 1));
            this.$jconfirmBg.css(this._getCSS(this.animationSpeed, 1));
            this.$jconfirmBoxContainer.css(this._getCSS(this.animationSpeed, 1))
        },
        _typePrefix: "jconfirm-type-",
        typeParsed: "",
        _parseType: function(m) {
            this.typeParsed = this._typePrefix + m
        },
        setType: function(m) {
            var u = this.typeParsed;
            this._parseType(m);
            this.$jconfirmBox.removeClass(u).addClass(this.typeParsed)
        },
        themeParsed: "",
        _themePrefix: "jconfirm-",
        setTheme: function(m) {
            var u = this.theme;
            this.theme = m || this.theme;
            this._parseTheme(this.theme);
            u && this.$el.removeClass(u);
            this.$el.addClass(this.themeParsed);
            this.theme = m
        },
        _parseTheme: function(m) {
            var u = this;
            m = m.split(",");
            b.each(m, function(C, v) {
                -1 === v.indexOf(u._themePrefix) && (m[C] = u._themePrefix + b.trim(v))
            });
            this.themeParsed = m.join(" ").toLowerCase()
        },
        backgroundDismissAnimationParsed: "",
        _bgDismissPrefix: "jconfirm-hilight-",
        _parseBgDismissAnimation: function(m) {
            var u = m.split(",")
              , C = this;
            b.each(u, function(v, E) {
                -1 === E.indexOf(C._bgDismissPrefix) && (u[v] = C._bgDismissPrefix + b.trim(E))
            });
            this.backgroundDismissAnimationParsed = u.join(" ").toLowerCase()
        },
        animationParsed: "",
        closeAnimationParsed: "",
        _animationPrefix: "jconfirm-animation-",
        setAnimation: function(m) {
            this.animation = m || this.animation;
            this._parseAnimation(this.animation, "o")
        },
        _parseAnimation: function(m, u) {
            u = u || "o";
            var C = m.split(",")
              , v = this;
            b.each(C, function(E, N) {
                -1 === N.indexOf(v._animationPrefix) && (C[E] = v._animationPrefix + b.trim(N))
            });
            m = C.join(" ").toLowerCase();
            "o" === u ? this.animationParsed = m : this.closeAnimationParsed = m;
            return m
        },
        setCloseAnimation: function(m) {
            this.closeAnimation = m || this.closeAnimation;
            this._parseAnimation(this.closeAnimation, "c")
        },
        setAnimationSpeed: function(m) {
            this.animationSpeed = m || this.animationSpeed
        },
        columnClassParsed: "",
        setColumnClass: function(m) {
            this.useBootstrap ? (this.columnClass = m || this.columnClass,
            this._parseColumnClass(this.columnClass),
            this.$jconfirmBoxContainer.addClass(this.columnClassParsed)) : console.warn("cannot set columnClass, useBootstrap is set to false")
        },
        _updateContentMaxHeight: function() {
            var m = b(l).height() - (this.$jconfirmBox.outerHeight() - this.$contentPane.outerHeight()) - (this.offsetTop + this.offsetBottom);
            this.$contentPane.css({
                "max-height": m + "px"
            })
        },
        setBoxWidth: function(m) {
            this.useBootstrap ? console.warn("cannot set boxWidth, useBootstrap is set to true") : (this.boxWidth = m,
            this.$jconfirmBox.css("width", m))
        },
        _parseColumnClass: function(m) {
            m = m.toLowerCase();
            switch (m) {
            case "xl":
            case "xlarge":
                m = "col-md-12";
                break;
            case "l":
            case "large":
                m = "col-md-8 col-md-offset-2";
                break;
            case "m":
            case "medium":
                m = "col-md-6 col-md-offset-3";
                break;
            case "s":
            case "small":
                m = "col-md-4 col-md-offset-4";
                break;
            case "xs":
            case "xsmall":
                m = "col-md-2 col-md-offset-5"
            }
            this.columnClassParsed = m
        },
        initDraggable: function() {
            var m = this
              , u = this.$titleContainer;
            this.resetDrag();
            this.draggable && (u.on("mousedown", function(C) {
                u.addClass("jconfirm-hand");
                m.mouseX = C.clientX;
                m.mouseY = C.clientY;
                m.isDrag = !0
            }),
            b(l).on("mousemove." + this._id, function(C) {
                m.isDrag && (m.movingX = C.clientX - m.mouseX + m.initialX,
                m.movingY = C.clientY - m.mouseY + m.initialY,
                m.setDrag())
            }),
            b(l).on("mouseup." + this._id, function() {
                u.removeClass("jconfirm-hand");
                m.isDrag && (m.isDrag = !1,
                m.initialX = m.movingX,
                m.initialY = m.movingY)
            }))
        },
        resetDrag: function() {
            this.isDrag = !1;
            this.mouseY = this.mouseX = this.movingY = this.movingX = this.initialY = this.initialX = 0;
            this.$jconfirmBoxContainer.css("transform", "translate(0px, 0px)")
        },
        setDrag: function() {
            if (this.draggable) {
                this.alignMiddle = !1;
                var m = this.$jconfirmBox.outerWidth()
                  , u = this.$jconfirmBox.outerHeight()
                  , C = b(l).width()
                  , v = b(l).height();
                if (0 === this.movingX % 1 || 0 === this.movingY % 1)
                    this.dragWindowBorder && (u = v / 2 - u / 2 - this.dragWindowGap,
                    m = C / 2 - m / 2 - this.dragWindowGap,
                    0 > m + this.movingX ? this.movingX = -m : 0 > m - this.movingX && (this.movingX = m),
                    0 > u + this.movingY ? this.movingY = -u : 0 > u - this.movingY && (this.movingY = u)),
                    this.$jconfirmBoxContainer.css("transform", "translate(" + this.movingX + "px, " + this.movingY + "px)")
            }
        },
        _scrollTop: function() {
            if ("undefined" !== typeof pageYOffset)
                return pageYOffset;
            var m = document.body
              , u = document.documentElement;
            u = u.clientHeight ? u : m;
            return u.scrollTop
        },
        _watchContent: function() {
            var m = this;
            this._timer && clearInterval(this._timer);
            var u = 0;
            this._timer = setInterval(function() {
                if (m.smoothContent) {
                    var C = m.$content.outerHeight() || 0;
                    C !== u && (m.$contentPane.css({
                        height: C
                    }).scrollTop(0),
                    u = C);
                    C = b(l).height();
                    m.offsetTop + m.offsetBottom + m.$jconfirmBox.height() - m.$contentPane.height() + m.$content.height() < C ? m.$contentPane.addClass("no-scroll") : m.$contentPane.removeClass("no-scroll")
                }
            }, this.watchInterval)
        },
        _overflowClass: "jconfirm-overflow",
        _hilightAnimating: !1,
        highlight: function() {
            this.hiLightModal()
        },
        hiLightModal: function() {
            var m = this;
            if (!this._hilightAnimating) {
                m.$body.addClass("hilight");
                var u = parseFloat(m.$body.css("animation-duration")) || 2;
                this._hilightAnimating = !0;
                setTimeout(function() {
                    m._hilightAnimating = !1;
                    m.$body.removeClass("hilight")
                }, 1E3 * u)
            }
        },
        _bindEvents: function() {
            var m = this;
            this.boxClicked = !1;
            this.$scrollPane.click(function(C) {
                if (!m.boxClicked) {
                    C = !1;
                    var v = "function" == typeof m.backgroundDismiss ? m.backgroundDismiss() : m.backgroundDismiss;
                    "string" == typeof v && "undefined" != typeof m.buttons[v] ? (C = v,
                    v = !1) : v = "undefined" == typeof v || 1 == !!v ? !0 : !1;
                    C && (C = m.buttons[C].action.apply(m),
                    v = "undefined" == typeof C || !!C);
                    v ? m.close() : m.hiLightModal()
                }
                m.boxClicked = !1
            });
            this.$jconfirmBox.click(function(C) {
                m.boxClicked = !0
            });
            var u = !1;
            b(l).on("jcKeyDown." + m._id, function(C) {
                u || (u = !0)
            });
            b(l).on("keyup." + m._id, function(C) {
                u && (m.reactOnKey(C),
                u = !1)
            });
            b(l).on("resize." + this._id, function() {
                m._updateContentMaxHeight();
                setTimeout(function() {
                    m.resetDrag()
                }, 100)
            })
        },
        _cubic_bezier: "0.36, 0.55, 0.19",
        _getCSS: function(m, u) {
            return {
                "-webkit-transition-duration": m / 1E3 + "s",
                "transition-duration": m / 1E3 + "s",
                "-webkit-transition-timing-function": "cubic-bezier(" + this._cubic_bezier + ", " + u + ")",
                "transition-timing-function": "cubic-bezier(" + this._cubic_bezier + ", " + u + ")"
            }
        },
        _setButtons: function() {
            var m = this
              , u = 0;
            "object" !== typeof this.buttons && (this.buttons = {});
            b.each(this.buttons, function(C, v) {
                u += 1;
                "function" === typeof v && (m.buttons[C] = v = {
                    action: v
                });
                m.buttons[C].text = v.text || C;
                m.buttons[C].btnClass = v.btnClass || "btn-default";
                m.buttons[C].action = v.action || function() {}
                ;
                m.buttons[C].keys = v.keys || [];
                m.buttons[C].isHidden = v.isHidden || !1;
                m.buttons[C].isDisabled = v.isDisabled || !1;
                b.each(m.buttons[C].keys, function(N, P) {
                    m.buttons[C].keys[N] = P.toLowerCase()
                });
                var E = b('<button type="button" class="btn"></button>').html(m.buttons[C].text).addClass(m.buttons[C].btnClass).prop("disabled", m.buttons[C].isDisabled).css("display", m.buttons[C].isHidden ? "none" : "").click(function(N) {
                    N.preventDefault();
                    N = m.buttons[C].action.apply(m, [m.buttons[C]]);
                    m.onAction.apply(m, [C, m.buttons[C]]);
                    m._stopCountDown();
                    ("undefined" === typeof N || N) && m.close()
                });
                m.buttons[C].el = E;
                m.buttons[C].setText = function(N) {
                    E.html(N)
                }
                ;
                m.buttons[C].addClass = function(N) {
                    E.addClass(N)
                }
                ;
                m.buttons[C].removeClass = function(N) {
                    E.removeClass(N)
                }
                ;
                m.buttons[C].disable = function() {
                    m.buttons[C].isDisabled = !0;
                    E.prop("disabled", !0)
                }
                ;
                m.buttons[C].enable = function() {
                    m.buttons[C].isDisabled = !1;
                    E.prop("disabled", !1)
                }
                ;
                m.buttons[C].show = function() {
                    m.buttons[C].isHidden = !1;
                    E.css("display", "")
                }
                ;
                m.buttons[C].hide = function() {
                    m.buttons[C].isHidden = !0;
                    E.css("display", "none")
                }
                ;
                m["$_" + C] = m["$$" + C] = E;
                m.$btnc.append(E)
            });
            0 === u && this.$btnc.hide();
            null === this.closeIcon && 0 === u && (this.closeIcon = !0);
            this.closeIcon ? (this.closeIconClass && this.$closeIcon.html('<i class="' + this.closeIconClass + '"></i>'),
            this.$closeIcon.click(function(C) {
                C.preventDefault();
                C = !1;
                var v = "function" == typeof m.closeIcon ? m.closeIcon() : m.closeIcon;
                "string" == typeof v && "undefined" != typeof m.buttons[v] ? (C = v,
                v = !1) : v = "undefined" == typeof v || 1 == !!v ? !0 : !1;
                C && (C = m.buttons[C].action.apply(m),
                v = "undefined" == typeof C || !!C);
                v && m.close()
            }),
            this.$closeIcon.show()) : this.$closeIcon.hide()
        },
        setTitle: function(m, u) {
            u = u || !1;
            "undefined" !== typeof m && ("string" == typeof m ? this.title = m : "function" == typeof m ? ("function" == typeof m.promise && console.error("Promise was returned from title function, this is not supported."),
            m = m(),
            this.title = "string" == typeof m ? m : !1) : this.title = !1);
            if (!this.isAjaxLoading || u)
                this.$title.html(this.title || ""),
                this.updateTitleContainer()
        },
        setIcon: function(m, u) {
            u = u || !1;
            "undefined" !== typeof m && ("string" == typeof m ? this.icon = m : "function" === typeof m ? (m = m(),
            this.icon = "string" == typeof m ? m : !1) : this.icon = !1);
            if (!this.isAjaxLoading || u)
                this.$icon.html(this.icon ? '<i class="' + this.icon + '"></i>' : ""),
                this.updateTitleContainer()
        },
        updateTitleContainer: function() {
            this.title || this.icon ? this.$titleContainer.show() : this.$titleContainer.hide()
        },
        setContentPrepend: function(m, u) {
            m && this.contentParsed.prepend(m)
        },
        setContentAppend: function(m) {
            m && this.contentParsed.append(m)
        },
        setContent: function(m, u) {
            u = !!u;
            var C = this;
            m && this.contentParsed.html("").append(m);
            if (!this.isAjaxLoading || u)
                this.$content.html(""),
                this.$content.append(this.contentParsed),
                setTimeout(function() {
                    C.$body.find("input[autofocus]:visible:first").focus()
                }, 100)
        },
        loadingSpinner: !1,
        showLoading: function(m) {
            this.loadingSpinner = !0;
            this.$jconfirmBox.addClass("loading");
            m && this.$btnc.find("button").prop("disabled", !0)
        },
        hideLoading: function(m) {
            this.loadingSpinner = !1;
            this.$jconfirmBox.removeClass("loading");
            m && this.$btnc.find("button").prop("disabled", !1)
        },
        ajaxResponse: !1,
        contentParsed: "",
        isAjax: !1,
        isAjaxLoading: !1,
        _parseContent: function() {
            var m = this;
            if ("function" == typeof this.content) {
                var u = this.content.apply(this);
                "string" == typeof u ? this.content = u : ("object" == typeof u && "function" == typeof u.always && (this.isAjaxLoading = this.isAjax = !0,
                u.always(function(C, v, E) {
                    m.ajaxResponse = {
                        data: C,
                        status: v,
                        xhr: E
                    };
                    m._contentReady.resolve(C, v, E);
                    "function" == typeof m.contentLoaded && m.contentLoaded(C, v, E)
                })),
                this.content = "&nbsp;")
            }
            "string" == typeof this.content && "url:" === this.content.substr(0, 4).toLowerCase() && (this.isAjaxLoading = this.isAjax = !0,
            u = this.content.substring(4, this.content.length),
            b.get(u).done(function(C) {
                m.contentParsed.html(C)
            }).always(function(C, v, E) {
                m.ajaxResponse = {
                    data: C,
                    status: v,
                    xhr: E
                };
                m._contentReady.resolve(C, v, E);
                "function" == typeof m.contentLoaded && m.contentLoaded(C, v, E)
            }));
            this.content || (this.content = "&nbsp;");
            this.isAjax || (this.contentParsed.html(this.content),
            this.setContent(),
            m._contentReady.resolve())
        },
        _stopCountDown: function() {
            clearInterval(this.autoCloseInterval);
            this.$cd && this.$cd.remove()
        },
        _startCountDown: function() {
            var m = this
              , u = this.autoClose.split("|");
            if (2 !== u.length)
                return console.error("Invalid option for autoClose. example 'close|10000'"),
                !1;
            var C = u[0];
            u = parseInt(u[1]);
            if ("undefined" === typeof this.buttons[C])
                return console.error("Invalid button key '" + C + "' for autoClose"),
                !1;
            var v = Math.ceil(u / 1E3);
            this.$cd = b('<span class="countdown"> (' + v + ")</span>").appendTo(this["$_" + C]);
            this.autoCloseInterval = setInterval(function() {
                m.$cd.html(" (" + --v + ") ");
                0 >= v && (m["$$" + C].trigger("click"),
                m._stopCountDown())
            }, 1E3)
        },
        _getKey: function(m) {
            switch (m) {
            case 192:
                return "tilde";
            case 13:
                return "enter";
            case 16:
                return "shift";
            case 9:
                return "tab";
            case 20:
                return "capslock";
            case 17:
                return "ctrl";
            case 91:
                return "win";
            case 18:
                return "alt";
            case 27:
                return "esc";
            case 32:
                return "space"
            }
            m = String.fromCharCode(m);
            return /^[A-z0-9]+$/.test(m) ? m.toLowerCase() : !1
        },
        reactOnKey: function(m) {
            var u = this
              , C = b(".jconfirm");
            if (C.eq(C.length - 1)[0] !== this.$el[0])
                return !1;
            m = m.which;
            if (this.$content.find(":input").is(":focus") && /13|32/.test(m))
                return !1;
            var v = this._getKey(m);
            "esc" === v && this.escapeKey && (!0 === this.escapeKey ? this.$scrollPane.trigger("click") : ("string" === typeof this.escapeKey || "function" === typeof this.escapeKey) && (m = "function" === typeof this.escapeKey ? this.escapeKey() : this.escapeKey) && ("undefined" === typeof this.buttons[m] ? console.warn("Invalid escapeKey, no buttons found with key " + m) : this["$_" + m].trigger("click")));
            b.each(this.buttons, function(E, N) {
                -1 != N.keys.indexOf(v) && u["$_" + E].trigger("click")
            })
        },
        setDialogCenter: function() {
            console.info("setDialogCenter is deprecated, dialogs are centered with CSS3 tables")
        },
        _unwatchContent: function() {
            clearInterval(this._timer)
        },
        close: function() {
            var m = this;
            if ("function" === typeof this.onClose)
                this.onClose();
            this._unwatchContent();
            b(l).unbind("resize." + this._id);
            b(l).unbind("keyup." + this._id);
            b(l).unbind("jcKeyDown." + this._id);
            this.draggable && (b(l).unbind("mousemove." + this._id),
            b(l).unbind("mouseup." + this._id),
            this.$titleContainer.unbind("mousedown"));
            m.$el.removeClass(m.loadedClass);
            b("body").removeClass("jconfirm-no-scroll-" + m._id);
            m.$jconfirmBoxContainer.removeClass("jconfirm-no-transition");
            setTimeout(function() {
                m.$body.addClass(m.closeAnimationParsed);
                m.$jconfirmBg.addClass("jconfirm-bg-h");
                setTimeout(function() {
                    m.$el.remove();
                    var u = jconfirm.instances.length - 1;
                    for (u; 0 <= u; u--)
                        jconfirm.instances[u]._id === m._id && jconfirm.instances.splice(u, 1);
                    if (!jconfirm.instances.length && m.scrollToPreviousElement && jconfirm.lastFocused && jconfirm.lastFocused.length && b.contains(document, jconfirm.lastFocused[0])) {
                        var C = jconfirm.lastFocused;
                        if (m.scrollToPreviousElementAnimate) {
                            u = b(l).scrollTop();
                            var v = jconfirm.lastFocused.offset().top
                              , E = b(l).height();
                            v > u && v < u + E ? C.focus() : (u = v - Math.round(E / 3),
                            b("html, body").animate({
                                scrollTop: u
                            }, m.animationSpeed, "swing", function() {
                                C.focus()
                            }))
                        } else
                            C.focus();
                        jconfirm.lastFocused = !1
                    }
                    if ("function" === typeof m.onDestroy)
                        m.onDestroy()
                }, .4 * ("none" === m.closeAnimation ? 1 : m.animationSpeed))
            }, 50);
            return !0
        },
        open: function() {
            if (this.isOpen())
                return !1;
            this._buildHTML();
            this._bindEvents();
            this._open();
            return !0
        },
        setStartingPoint: function() {
            if (!0 !== this.animateFromElement && this.animateFromElement) {
                var m = this.animateFromElement;
                jconfirm.lastClicked = !1
            } else if (jconfirm.lastClicked && !0 === this.animateFromElement)
                m = jconfirm.lastClicked,
                jconfirm.lastClicked = !1;
            else
                return !1;
            if (!m)
                return !1;
            var u = m.offset()
              , C = m.outerHeight() / 2;
            m = m.outerWidth() / 2;
            C -= this.$jconfirmBox.outerHeight() / 2;
            m -= this.$jconfirmBox.outerWidth() / 2;
            C = u.top + C;
            C -= this._scrollTop();
            u = u.left + m;
            m = b(l).height() / 2;
            var v = b(l).width() / 2
              , E = m - this.$jconfirmBox.outerHeight() / 2
              , N = v - this.$jconfirmBox.outerWidth() / 2;
            C -= E;
            u -= N;
            if (Math.abs(C) > m || Math.abs(u) > v)
                return !1;
            this.$jconfirmBoxContainer.css("transform", "translate(" + u + "px, " + C + "px)")
        },
        _open: function() {
            var m = this;
            if ("function" === typeof m.onOpenBefore)
                m.onOpenBefore();
            this.$body.removeClass(this.animationParsed);
            this.$jconfirmBg.removeClass("jconfirm-bg-h");
            this.$body.focus();
            m.$jconfirmBoxContainer.css("transform", "translate(0px, 0px)");
            setTimeout(function() {
                m.$body.css(m._getCSS(m.animationSpeed, 1));
                m.$body.css({
                    "transition-property": m.$body.css("transition-property") + ", margin"
                });
                m.$jconfirmBoxContainer.addClass("jconfirm-no-transition");
                m._modalReady.resolve();
                if ("function" === typeof m.onOpen)
                    m.onOpen();
                m.$el.addClass(m.loadedClass)
            }, this.animationSpeed)
        },
        loadedClass: "jconfirm-open",
        isClosed: function() {
            return !this.$el || "" === this.$el.css("display")
        },
        isOpen: function() {
            return !this.isClosed()
        },
        toggle: function() {
            this.isOpen() ? this.close() : this.open()
        }
    };
    jconfirm.instances = [];
    jconfirm.lastFocused = !1;
    jconfirm.pluginDefaults = {
        template: '<div class="jconfirm"><div class="jconfirm-bg jconfirm-bg-h"></div><div class="jconfirm-scrollpane"><div class="jconfirm-row"><div class="jconfirm-cell"><div class="jconfirm-holder"><div class="jc-bs3-container"><div class="jc-bs3-row"><div class="jconfirm-box-container jconfirm-animated"><div class="jconfirm-box" role="dialog" aria-labelledby="labelled" tabindex="-1"><div class="jconfirm-closeIcon">&times;</div><div class="jconfirm-title-c"><span class="jconfirm-icon-c"></span><span class="jconfirm-title"></span></div><div class="jconfirm-content-pane"><div class="jconfirm-content"></div></div><div class="jconfirm-buttons"></div><div class="jconfirm-clear"></div></div></div></div></div></div></div></div></div></div>',
        title: "Hello",
        titleClass: "",
        type: "default",
        typeAnimated: !0,
        draggable: !0,
        dragWindowGap: 15,
        dragWindowBorder: !0,
        animateFromElement: !0,
        alignMiddle: !0,
        smoothContent: !0,
        content: "Are you sure to continue?",
        buttons: {},
        defaultButtons: {
            ok: {
                action: function() {}
            },
            close: {
                action: function() {}
            }
        },
        contentLoaded: function() {},
        icon: "",
        lazyOpen: !1,
        bgOpacity: null,
        theme: "light",
        animation: "scale",
        closeAnimation: "scale",
        animationSpeed: 400,
        animationBounce: 1,
        escapeKey: !0,
        rtl: !1,
        container: "body",
        containerFluid: !1,
        backgroundDismiss: !1,
        backgroundDismissAnimation: "shake",
        autoClose: !1,
        closeIcon: null,
        closeIconClass: !1,
        watchInterval: 100,
        columnClass: "col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1",
        boxWidth: "50%",
        scrollToPreviousElement: !0,
        scrollToPreviousElementAnimate: !0,
        useBootstrap: !0,
        offsetTop: 40,
        offsetBottom: 40,
        bootstrapClasses: {
            container: "container",
            containerFluid: "container-fluid",
            row: "row"
        },
        onContentReady: function() {},
        onOpenBefore: function() {},
        onOpen: function() {},
        onClose: function() {},
        onDestroy: function() {},
        onAction: function() {}
    };
    var y = !1;
    b(l).on("keydown", function(m) {
        if (!y) {
            var u = !1;
            b(m.target).closest(".jconfirm-box").length && (u = !0);
            u && b(l).trigger("jcKeyDown");
            y = !0
        }
    });
    b(l).on("keyup", function() {
        y = !1
    });
    jconfirm.lastClicked = !1;
    b(document).on("mousedown", "button, a", function() {
        jconfirm.lastClicked = b(this)
    })
}
)(jQuery, window);
jconfirm.defaults = {
    scrollToPreviousElement: !1,
    boxWidth: "400px",
    animateFromElement: !1,
    animation: "top",
    useBootstrap: !1,
    titleClass: "ks_alert_title"
};
_BEIS_ALERTS_BTN_KLS = {
    cancel: void 0,
    confirm: void 0,
    dunno: void 0
};
function wrap_action(b, l, y) {
    b.disable();
    l(y)
}
function ks_confirm(b, l, y, m, u) {
    l || (l = function() {}
    );
    y || (y = {});
    if (!u) {
        u = {};
        var C = y.confirmbut || window._ks_confirm_confirm_ || "Confirm";
        u[y.cancelbut || window._ks_confirm_cancels_ || "Cancel"] = {
            btnClass: _BEIS_ALERTS_BTN_KLS.cancel ? _BEIS_ALERTS_BTN_KLS.cancel : "ksbtn-orange",
            action: function(v) {
                return wrap_action(v, l, !1)
            }
        };
        u[C] = {
            btnClass: _BEIS_ALERTS_BTN_KLS.confirm ? _BEIS_ALERTS_BTN_KLS.confirm : "ksbtn-green",
            action: function(v) {
                return wrap_action(v, l, !0)
            }
        }
    }
    b = {
        title: y.title || window._jsconfirmtitle_ || "Confirmation required",
        content: b,
        buttons: u,
        closeIcon: function() {
            l(!1)
        }
    };
    m && $.extend(b, m);
    return $.confirm(b)
}
function ks_confirm_inline(b, l, y, m, u) {
    l || (l = function() {}
    );
    y || (y = {});
    if (!u) {
        u = {};
        var C = y.confirmbut || window._ks_confirm_confirm_ || "Confirm";
        u[y.cancelbut || window._ks_confirm_cancels_ || "Cancel"] = {
            btnClass: _BEIS_ALERTS_BTN_KLS.cancel ? _BEIS_ALERTS_BTN_KLS.cancel : "ksbtn-orange",
            action: function(R) {
                return wrap_action(R, l, !1)
            }
        };
        u[C] = {
            btnClass: _BEIS_ALERTS_BTN_KLS.confirm ? _BEIS_ALERTS_BTN_KLS.confirm : "ksbtn-green",
            action: function(R) {
                return wrap_action(R, l, !0)
            }
        }
    }
    b = {
        title: y.title || window._jsconfirmtitle_ || "Confirmation required",
        content: b,
        buttons: u,
        closeIcon: function() {
            l(!1)
        }
    };
    m && $.extend(b, m);
    m = '\n  <div class="js_inline_confirm">\n    <div class="js_inline_confirm__title ks_alert_title">' + b.title + '</div>\n    <div class="js_inline_confirm__msg uk-margin-top">' + b.content + '</div>\n    <div class="js_inline_confirm__actions uk-text-right uk-margin-top jconfirm-buttons">\n    </div>\n    </div>\n  </div>\n  ';
    m = $(m);
    y = m.find(".js_inline_confirm__actions");
    b.buttons = b.buttons || {};
    u = {};
    for (var v in b.buttons) {
        u.$jscomp$loop$prop$btn_specs$10 = b.buttons[v];
        C = {
            "class": u.$jscomp$loop$prop$btn_specs$10.btnClass,
            type: "button"
        };
        var E = {
            click: function(R) {
                return function(F) {
                    var J = F.target;
                    J.disable = function() {
                        J.setAttribute("disabled", "disabled")
                    }
                    ;
                    R.$jscomp$loop$prop$btn_specs$10.action(J)
                }
            }(u)
        }
          , N = document.createElement("button");
        N.innerText = v;
        for (var P in C)
            N.setAttribute(P, C[P]);
        for (var aa in E)
            N.addEventListener(aa, E[aa]);
        y.append(N);
        u = {
            $jscomp$loop$prop$btn_specs$10: u.$jscomp$loop$prop$btn_specs$10
        }
    }
    return m
}
function ks_yes_no(b, l) {
    kopts = {
        cancelbut: window._ks_confirm_NO || "No",
        confirmbut: window._ks_confirm_YES || "Yes"
    };
    return ks_confirm(b, l, kopts)
}
function wrap_validation(b, l, y) {
    valres = l(y);
    if (!valres)
        return !1;
    b.disable()
}
function ks_confirm_validation(b, l, y, m) {
    y || (y = {
        cancelbut: window._ks_confirm_NO || "No",
        confirmbut: window._ks_confirm_YES || "Yes"
    });
    m || (m = {});
    buttons = {};
    buttons[y.cancelbut] = {
        btnClass: _BEIS_ALERTS_BTN_KLS.cancel ? _BEIS_ALERTS_BTN_KLS.cancel : "ksbtn-orange",
        action: function(u) {
            return wrap_action(u, l, !1)
        }
    };
    buttons[y.confirmbut] = {
        btnClass: _BEIS_ALERTS_BTN_KLS.confirm ? _BEIS_ALERTS_BTN_KLS.confirm : "ksbtn-green",
        action: function(u) {
            return wrap_validation(u, l, !0)
        }
    };
    return ks_confirm(b, l, y, m, buttons)
}
function ks_yes_no_dunno(b, l) {
    var y = {}
      , m = window._ks_confirm_YES || "Yes"
      , u = window._ks_confirm_DUNNO || "I do not know";
    y[window._ks_confirm_NO || "No"] = {
        btnClass: _BEIS_ALERTS_BTN_KLS.cancel ? _BEIS_ALERTS_BTN_KLS.cancel : "ksbtn-orange",
        action: function(C) {
            return wrap_action(C, l, "n")
        }
    };
    y[m] = {
        btnClass: _BEIS_ALERTS_BTN_KLS.confirm ? _BEIS_ALERTS_BTN_KLS.confirm : "ksbtn-green",
        action: function(C) {
            return wrap_action(C, l, "y")
        }
    };
    y[u] = {
        btnClass: _BEIS_ALERTS_BTN_KLS.dunno ? _BEIS_ALERTS_BTN_KLS.dunno : "ksbtn-gray",
        action: function(C) {
            return wrap_action(C, l, "?")
        }
    };
    ks_confirm(b, l, !1, !1, y)
}
function ks_confirm_modal(b, l, y, m, u, C) {
    var v = {};
    u = u || window._ks_confirm_confirm_ || "Confirm";
    v[m || window._ks_confirm_cancels_ || "Cancel"] = {
        btnClass: _BEIS_ALERTS_BTN_KLS.cancel ? _BEIS_ALERTS_BTN_KLS.cancel : "ksbtn-orange",
        action: function(E) {
            return wrap_action(E, l, !1)
        }
    };
    v[u] = {
        btnClass: _BEIS_ALERTS_BTN_KLS.confirm ? _BEIS_ALERTS_BTN_KLS.confirm : "ksbtn-green",
        action: function(E) {
            return wrap_action(E, l, !0)
        }
    };
    b = {
        title: y || window._jsconfirmtitle_ || "Confirmation required",
        content: b,
        buttons: v,
        closeIcon: function() {
            l(!1)
        }
    };
    C && $.extend(b, C);
    return $.confirm(b)
}
function three_confirm(b, l, y, m) {
    if (!l)
        return el_next_in(b);
    ks_confirm(y, function(u) {
        if (!u)
            return el_prev_in(b);
        el_next_in(b);
        return m()
    })
}
function ks_alert(b, l, y, m) {
    y ? (m = {},
    m.Ok = {
        btnClass: _BEIS_ALERTS_BTN_KLS.confirm ? _BEIS_ALERTS_BTN_KLS.confirm : "ksbtn-green",
        action: function(u) {
            return wrap_action(u, y)
        }
    },
    ks_confirm(b, y, {
        title: l
    }, !1, m)) : (b = {
        content: b,
        title: l || window._ks_alert_title_info || "Information",
        closeIcon: !0
    },
    m && $.extend(b, m),
    $.alert(b))
}
function ks_error(b, l) {
    ks_alert(b, (window._ks_alert_title_error || "Error") + " :(", !1, l)
}
function ks_warning(b) {
    ks_alert(b, window._ks_alert_title_warning || "Warning")
}
function ks_success(b, l) {
    ks_alert(b || "^_^", window._ks_alert_title_success || "Success", l)
}
function _soundTemplate(b, l) {
    $("." + b).remove();
    var y = cookied_get_frame_template("#" + b);
    l = Mustache.render(y, {
        text: l
    });
    $("body").append(l);
    return $("." + b)
}
function soundsGood(b) {
    b = _soundTemplate("sounds_good_template", b);
    b.fadeIn();
    b.delay(3E3).fadeOut()
}
function soundsNotGood(b) {
    _soundTemplate("sounds_bad_template", b).fadeIn()
}
function soundsWarning(b) {
    var l = _soundTemplate("sounds_warn_template");
    l.find(".warning_text").html(b);
    l.fadeIn()
}
function areYouSure(b, l, y, m) {
    var u = $(b).closest(l)
      , C = u.find(y);
    u.html();
    var v = u.find(".js_btn_inside_to_show").html();
    b = kas_gt("Are you sure");
    l = kas_gt("Yes");
    y = kas_gt("No");
    v || (v = '<div class="js_btn_inside_to_show uk-alert-warning uk-alert uk-margin-remove ks_padding_5">',
    v += '<div class="uk-grid uk-grid-xxsmall uk-flex-middle">',
    v += '<div class="uk-width-expand">',
    v += '<div class="uk-text-center">',
    v += b,
    v += "?</div>",
    v += "</div>",
    v += '<div class="uk-width-auto">',
    v += '<button class="ks_button js_btn_areyousure_no">',
    v += y,
    v += "</button>",
    v += "</div>",
    v += '<div class="uk-width-auto">',
    v += '<button class="ks_button js_btn_areyousure_yes">',
    v += l,
    v += "</button>",
    v += "</div>",
    v += "</div>",
    v += "</div>",
    $(u).append(v),
    $(u).find(".js_btn_areyousure_no").bind("click", function() {
        u.find(".js_btn_inside_to_show").hide();
        $(v).hide();
        C.fadeIn();
        m(!1)
    }),
    $(u).find(".js_btn_areyousure_yes").bind("click", function() {
        u.find(".js_btn_inside_to_show").hide();
        $(v).hide();
        C.fadeIn();
        m(!0)
    }));
    u.find(".js_btn_inside_to_show").fadeIn();
    C.hide()
}
;jQuery(document).ready(function(b) {
    b(window).on("popstate", function() {
        location.reload(!0)
    })
});
function set_main_menu(b) {
    $(".first_menu_item_link").removeClass("current");
    $(".first_menu_item_link." + b).addClass("current")
}
function rewauth_switch_lang(b) {
    var l = $(b).val();
    $(b).replaceWith('<img src="/imgs/default/load.png" class="wb_load" style="width:20px"></img>');
    b = {
        lang: l
    };
    $("#virtual_lang_selector").val(l);
    $.post("/wauth/wauth/dash/switchlang", b, function(y) {
        window.location.reload()
    })
}
function wauthRecoveryPwd(b) {
    (b = $("#wauth_recovery_acode").val()) ? (b = {
        acode: b
    },
    wb_input_reset("#wauth_recovery_acode"),
    $("#wauth_recovery_acode").val(""),
    $.post("/wauth/recovery/start", b, function(l, y, m) {
        "sent" == l ? ks_alert(_pwdtoberecovered) : "not_allowed" == l && ks_alert(_change_password_not_allowed)
    })) : wb_input_unvalidated_soft("#wauth_recovery_acode")
}
function pwdRecoveryHit(b) {
    var l = get_positive_number_or_unvalidate("#rec_sec_code")
      , y = get_text_val_or_unvalidate("#rec_sec_acode")
      , m = get_text_val_or_unvalidate("#rec_sec_pwd")
      , u = get_text_val_or_unvalidate("#rec_sec_repwd");
    l && m && u && (m != u || 8 > m.length || u != m ? (wb_input_unvalidated_soft("#rec_sec_pwd"),
    wb_input_unvalidated_soft("#rec_sec_repwd")) : (div_buttons_hiding(b),
    b = kasGetURLParameter("h"),
    $.post("/wauth/recovery/rst", {
        c: l,
        p: m,
        h: b,
        a: y
    }, function(C) {
        ks_alert(_pwdrecovered_, !1, function() {
            window.location.href = "/wauth/wauth/"
        })
    })))
}
function switchLogoutLang(b) {
    b = $(b).val();
    window.location.href = "/wauth/wauth/?lang=" + b
}
function block_ui(b) {
    b ? (b.after('<span class="gear_icon loader_bg" style="margin-left: 4px; margin-right: 4px; display: inline-block; width: 24px; height: 24px; vertical-align: middle;" span>'),
    0 < $("#ui_locked").length ? $("#ui_locked").show(0) : $("body").append('<div style="background: transparent; width: 100%; height: 100%; z-index: 10000; position: fixed; top: 0; left: 0; " id="ui_locked"></div>')) : ($("html").css("cursor", "wait"),
    $.blockUI())
}
function unblock_ui() {
    $("html").css("cursor", "auto");
    0 != $("#ui_locked").length && $("#ui_locked").is(":visible") ? ($("#ui_locked").stop().hide(0),
    $(".gear_icon").stop().hide(0).remove()) : $.unblockUI()
}
$.blockUI.defaults.overlayCSS.backgroundColor = "rgba(255,255,255,0.6)";
$.blockUI.defaults.overlayCSS.opacity = 1;
$.blockUI.defaults.message = "";
function two_factor_auth_validation(b, l, y) {
    var m = {
        confirmbut: _mod_2fa_button_confirm,
        cancelbut: _mod_2fa_button_cancel,
        title: _mod_2fa_title
    }
      , u = $("#js_two_factor_auth_code");
    window.pop_2fa = ks_confirm_validation(u.html(), function(C) {
        if (!C)
            return l && l(),
            window.pop_2fa && window.pop_2fa.close(),
            !0;
        C = $("#mod_one_time_password_code").val();
        "" === C ? wb_input_unvalidated_soft("#mod_one_time_password_code") : (y.otp_code = C,
        window.pop_2fa && window.pop_2fa.close(),
        b(y))
    }, m, !1)
}
function two_factor_auth_method(b, l, y, m, u) {
    var C = {
        confirmbut: _mod_2fa_button_confirm,
        cancelbut: _mod_2fa_button_cancel,
        title: _mod_2fa_title
    }
      , v = $("#js_two_factor_auth_method");
    window.pop_2fa = ks_confirm_validation(v.html(), function(E) {
        if (!E)
            return l && l(),
            !0;
        var N = $('input[name = "otp_method"]:checked');
        E = N.val();
        N = N.data("n");
        E = {
            method: E,
            n: N
        };
        m && (E.one_shot = 1);
        $.post("/wauth/wauth/dash/otp/auth", E, function(P) {
            window.pop_2fa.close();
            u || two_factor_auth_validation(b, l, y)
        })
    }, C, !1)
}
function two_factor_auth(b, l, y, m, u) {
    m = void 0 === m ? !1 : m;
    u = void 0 === u ? !1 : u;
    var C = {};
    m && (C.one_shot = 1);
    $.post("/wauth/wauth/dash/otp/auth", C, function(v) {
        1 == JSON.parse(v).auth_required ? two_factor_auth_method(b, l, y, m, u) : b(y)
    })
}
;function pinkEnableClickTipsBigBottomRight(b) {
    b = $(".pink_clicktip_big_bottom_right");
    pinkTooltipsGo(b, '<div class="fake_clicktip_big_bottom_right" onclick="resetAndShowBBR(this)">')
}
function resetAndShowBBR(b) {
    $(b).hasClass("tip_visualized") ? $(".fake_clicktip_big_bottom_right").removeClass("tip_visualized") : ($(".fake_clicktip_big_bottom_right").removeClass("tip_visualized"),
    $(b).toggleClass("tip_visualized"))
}
function pinkEnableClickTipsBigBottom(b) {
    b = $(".pink_clicktip_big_bottom");
    pinkTooltipsGo(b, '<div class="fake_clicktip_big_bottom" onclick="resetAndShowBB(this)">')
}
function resetAndShowBB(b) {
    $(b).hasClass("tip_visualized") ? $(".fake_clicktip_big_bottom").removeClass("tip_visualized") : ($(".fake_clicktip_big_bottom").removeClass("tip_visualized"),
    $(b).toggleClass("tip_visualized"))
}
function pinkEnableClickTips(b) {
    b = $(".pink_clicktip");
    pinkTooltipsGo(b, '<div class="fake_clicktip" onclick="resetAndShow(this)">')
}
function pinkEnableClickTipsLeft(b) {
    b = $(".pink_clicktip_left");
    pinkTooltipsGo(b, '<div class="fake_clicktip_left" onclick="resetAndShowLeft(this)">')
}
function resetAndShow(b) {
    $(b).hasClass("tip_visualized") ? $(".fake_clicktip").removeClass("tip_visualized") : ($(".fake_clicktip").removeClass("tip_visualized"),
    $(b).toggleClass("tip_visualized"))
}
function resetAndShowLeft(b) {
    $(b).hasClass("tip_visualized") ? $(".fake_clicktip_left").removeClass("tip_visualized") : ($(".fake_clicktip_left").removeClass("tip_visualized"),
    $(b).toggleClass("tip_visualized"))
}
function pinkEnableTooltips() {
    var b = $(".pink_tooltip");
    pinkTooltipsGo(b, '<div class="fake_tooltip">')
}
function pinkEnableTooltipsLeft() {
    var b = $(".pink_tooltip_left");
    pinkTooltipsGo(b, '<div class="fake_tooltip_left">')
}
function pinkEnableTooltipsRight() {
    var b = $(".pink_tooltip_right");
    pinkTooltipsGo(b, '<div class="fake_tooltip_right">')
}
function pinkEnableTooltipsBottom() {
    var b = $(".pink_tooltip_bottom");
    pinkTooltipsGo(b, '<div class="fake_tooltip_bottom">')
}
function pinkEnableTooltipsSideRight() {
    var b = $(".pink_tooltip_side_right");
    pinkTooltipsGo(b, '<div class="fake_tooltip_side_right">')
}
function pinkEnableTooltipsBottomRight() {
    var b = $(".pink_tooltip_bottom_right");
    pinkTooltipsGo(b, '<div class="fake_tooltip_bottom_right">')
}
function pinkTooltipsGo(b, l) {
    $(b).each(function() {
        $(this).removeClass("pink_tooltip");
        var y = $(this).attr("data-tooltip");
        $(this).removeAttr("data-tooltip");
        var m = $(this)[0].outerHTML;
        newhtml = l;
        newhtml += m;
        newhtml += '<div class="fake_tooltip_text">' + y + "</div></div>";
        $(this).replaceWith(newhtml)
    })
}
function pinkEnableGlobal() {
    pinkEnableTooltips();
    pinkEnableTooltipsRight();
    pinkEnableTooltipsLeft();
    pinkEnableTooltipsBottom();
    pinkEnableTooltipsSideRight();
    pinkEnableTooltipsBottomRight();
    pinkEnableClickTips();
    pinkEnableClickTipsLeft();
    pinkEnableClickTipsBigBottom();
    pinkEnableClickTipsBigBottomRight()
}
$(document).ready(function() {
    pinkEnableGlobal();
    fake_animation_for_reload(".pink_tooltip", pinkEnableGlobal, "ks_pinkttip_refresh")
});
function data_checked_init() {
    $('input[type="checkbox"]').each(function() {
        var b = $(this).attr("data-checked");
        try {
            $(this).removeAttr("data-checked")
        } catch (l) {}
        b && $(this).prop("checked", !0)
    })
}
$(document).ready(function() {
    data_checked_init()
});
fake_animation_for_reload('input[type="checkbox"]', data_checked_init);
function more_human_price_no_currency(b) {
    b = parseFloat(b);
    b = b.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    return b.endsWith(".00") ? b.slice(0, -3) : b
}
function more_human_price(b, l) {
    return more_human_price_no_currency(b) + " " + (l || "\u20ac")
}
function roundTwo(b) {
    return +(Math.round(b + "e+2") + "e-2")
}
function roundTo(b, l) {
    return +(Math.round(b + "e+" + l) + "e-" + l)
}
;function team_login() {
    var b = {
        confirmbut: _mod_tlogin_button_confirm,
        cancelbut: _mod_tlogin_button_cancel,
        title: _mod_tlogin_title
    }
      , l = $("#js_team_login");
    pop = ks_confirm_validation(l.html(), function(y) {
        if (!y)
            return !0;
        y = $("#mod_tlogin_username").val().trim();
        var m = $("#mod_tlogin_psw").val()
          , u = 0;
        "" === y ? (u = 1,
        wb_input_unvalidated_soft("#mod_tlogin_username")) : wb_input_reset("#mod_tlogin_username");
        "" === m ? (u = 1,
        wb_input_unvalidated_soft("#mod_tlogin_psw")) : wb_input_reset("#mod_tlogin_psw");
        1 != u && (div_buttons_hiding($(".jconfirm-buttons .ksbtn-green"), ".jconfirm-buttons"),
        $.post(access_control_data.paths.team_login, {
            username: y,
            psw: m
        }, function(C) {
            1 == JSON.parse(C).fail ? (pop.close(),
            ks_alert(_mod_tlogin_auth_failed)) : location.reload()
        }))
    }, b, !1)
}
function team_logout() {
    pop = ks_confirm_validation(_mod_tlogout_msg_logout, function(b) {
        if (!b)
            return !0;
        div_buttons_hiding($(".jconfirm-buttons .ksbtn-green"), ".jconfirm-buttons");
        $.post(access_control_data.paths.team_logout, function(l) {
            location.reload()
        })
    })
}
function team_login_if_guest_or_logout() {
    (_team_is_guest_ = !_team_current_uid_) ? team_login() : team_logout()
}
function team_change_psw(b) {
    var l = $(b).closest(".js_row_read_and_edit");
    l.find(".js_row_read");
    l = l.find(".js_row_edit");
    var y = l.find(".js_input_psw")
      , m = l.find(".js_input_psw_repeat");
    l = l.data("uid");
    var u = y.val()
      , C = m.val();
    "" == u ? (wb_input_unvalidated_soft(y),
    wb_input_unvalidated_soft(m)) : u != C ? wb_input_unvalidated_soft(m) : (l = {
        uid: l,
        psw: u,
        psw_repeat: C
    },
    div_buttons_hiding(b),
    one_shot = !0,
    verify_later = !1,
    two_factor_auth(function(v) {
        $.post(access_control_data.paths.admin_password_recovery, v, function(E) {
            if ("ko" == E)
                return div_buttons_hiding(b),
                ks_error("Something went wrong");
            y.val("");
            m.val("");
            wb_input_reset(y);
            wb_input_reset(m);
            div_buttons_hiding(b);
            row_read_and_edit(b);
            return ks_success("Password changed successfully")
        })
    }, function(v) {
        div_buttons_hiding(b)
    }, l, one_shot, verify_later))
}
function team_change_psw_cancel(b) {
    var l = $(b).closest(".js_row_read_and_edit").find(".js_row_edit")
      , y = l.find(".js_input_psw");
    l = l.find(".js_input_psw_repeat");
    y.val("");
    l.val("");
    wb_input_reset(y);
    wb_input_reset(l);
    row_read_and_edit(b)
}
jQuery(document).ready(function(b) {
    b(document).on("keyup", "#mod_tlogin_username, #mod_tlogin_psw", function(l) {
        13 == l.keyCode && b(".jconfirm-buttons .ksbtn-green").click()
    });
    b(".team_current_user").click(function(l) {
        team_login_if_guest_or_logout();
        l.preventDefault()
    })
});
/*
 js-cookie v3.0.5 | MIT */
!function(b, l) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = l() : "function" == typeof define && define.amd ? define(l) : (b = "undefined" != typeof globalThis ? globalThis : b || self,
    function() {
        var y = b.Cookies
          , m = b.Cookies = l();
        m.noConflict = function() {
            return b.Cookies = y,
            m
        }
    }())
}(this, function() {
    function b(l) {
        for (var y = 1; y < arguments.length; y++) {
            var m = arguments[y], u;
            for (u in m)
                l[u] = m[u]
        }
        return l
    }
    return function u(y, m) {
        function C(v, E, N) {
            if ("undefined" != typeof document) {
                "number" == typeof (N = b({}, m, N)).expires && (N.expires = new Date(Date.now() + 864E5 * N.expires));
                N.expires && (N.expires = N.expires.toUTCString());
                v = encodeURIComponent(v).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                var P = "", aa;
                for (aa in N)
                    N[aa] && (P += "; " + aa,
                    !0 !== N[aa] && (P += "=" + N[aa].split(";")[0]));
                return document.cookie = v + "=" + y.write(E, v) + P
            }
        }
        return Object.create({
            set: C,
            get: function(v) {
                if ("undefined" != typeof document && (!arguments.length || v)) {
                    for (var E = document.cookie ? document.cookie.split("; ") : [], N = {}, P = 0; P < E.length; P++) {
                        var aa = E[P].split("=")
                          , R = aa.slice(1).join("=");
                        try {
                            var F = decodeURIComponent(aa[0]);
                            if (N[F] = y.read(R, F),
                            v === F)
                                break
                        } catch (J) {}
                    }
                    return v ? N[v] : N
                }
            },
            remove: function(v, E) {
                C(v, "", b({}, E, {
                    expires: -1
                }))
            },
            withAttributes: function(v) {
                return u(this.converter, b({}, this.attributes, v))
            },
            withConverter: function(v) {
                return u(b({}, this.converter, v), this.attributes)
            }
        }, {
            attributes: {
                value: Object.freeze(m)
            },
            converter: {
                value: Object.freeze(y)
            }
        })
    }({
        read: function(y) {
            return '"' === y[0] && (y = y.slice(1, -1)),
            y.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
        },
        write: function(y) {
            return encodeURIComponent(y).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
        }
    }, {
        path: "/"
    })
});
