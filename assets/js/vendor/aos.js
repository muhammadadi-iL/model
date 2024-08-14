!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.AOS = t()
}(this, function () {
    "use strict";

    function w() {
        return W.Date.now()
    }

    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
        y = "Expected a function", o = NaN, n = "[object Symbol]", i = /^\s+|\s+$/g, a = /^[-+]0x[0-9a-f]+$/i,
        r = /^0b[01]+$/i, H = /^0o[0-7]+$/i, $ = parseInt, t = "object" == typeof e && e && e.Object === Object && e,
        s = "object" == typeof self && self && self.Object === Object && self, W = t || s || Function("return this")(),
        P = Object.prototype.toString, Y = Math.max, _ = Math.min;

    function B(n, o, e) {
        var i, a, r, s, c, u, d = 0, l = !1, m = !1, t = !0;
        if ("function" != typeof n) throw new TypeError(y);

        function f(e) {
            var t = i, o = a;
            return i = a = void 0, d = e, s = n.apply(o, t)
        }

        function p(e) {
            var t = e - u;
            return void 0 === u || o <= t || t < 0 || m && r <= e - d
        }

        function b() {
            var e, t = w();
            if (p(t)) return v(t);
            c = setTimeout(b, (e = o - (t - u), m ? _(e, r - (t - d)) : e))
        }

        function v(e) {
            return c = void 0, t && i ? f(e) : (i = a = void 0, s)
        }

        function g() {
            var e = w(), t = p(e);
            if (i = arguments, a = this, u = e, t) {
                if (void 0 === c) return d = e = u, c = setTimeout(b, o), l ? f(e) : s;
                if (m) return c = setTimeout(b, o), f(u)
            }
            return void 0 === c && (c = setTimeout(b, o)), s
        }

        return o = k(o) || 0, h(e) && (l = !!e.leading, r = (m = "maxWait" in e) ? Y(k(e.maxWait) || 0, o) : r, t = "trailing" in e ? !!e.trailing : t), g.cancel = function () {
            void 0 !== c && clearTimeout(c), i = u = a = c = void (d = 0)
        }, g.flush = function () {
            return void 0 === c ? s : v(w())
        }, g
    }

    function h(e) {
        var t = typeof e;
        return e && ("object" == t || "function" == t)
    }

    function k(e) {
        if ("number" == typeof e) return e;
        if ("symbol" == typeof (t = e) || t && "object" == typeof t && P.call(t) == n) return o;
        if ("string" != typeof (e = h(e) ? h(t = "function" == typeof e.valueOf ? e.valueOf() : e) ? t + "" : t : e)) return 0 === e ? e : +e;
        e = e.replace(i, "");
        var t = r.test(e);
        return t || H.test(e) ? $(e.slice(2), t ? 2 : 8) : a.test(e) ? o : +e
    }

    function x() {
        return U.Date.now()
    }

    var F = function (e, t, o) {
            var n = !0, i = !0;
            if ("function" != typeof e) throw new TypeError(y);
            return h(o) && (n = "leading" in o ? !!o.leading : n, i = "trailing" in o ? !!o.trailing : i), B(e, t, {
                leading: n,
                maxWait: t,
                trailing: i
            })
        }, c = NaN, I = "[object Symbol]", K = /^\s+|\s+$/g, G = /^[-+]0x[0-9a-f]+$/i, J = /^0b[01]+$/i, Q = /^0o[0-7]+$/i,
        R = parseInt, t = "object" == typeof e && e && e.Object === Object && e,
        s = "object" == typeof self && self && self.Object === Object && self, U = t || s || Function("return this")(),
        V = Object.prototype.toString, X = Math.max, Z = Math.min;

    function O(e) {
        var t = typeof e;
        return e && ("object" == t || "function" == t)
    }

    function j(e) {
        if ("number" == typeof e) return e;
        if ("symbol" == typeof (t = e) || t && "object" == typeof t && V.call(t) == I) return c;
        if ("string" != typeof (e = O(e) ? O(t = "function" == typeof e.valueOf ? e.valueOf() : e) ? t + "" : t : e)) return 0 === e ? e : +e;
        e = e.replace(K, "");
        var t = J.test(e);
        return t || Q.test(e) ? R(e.slice(2), t ? 2 : 8) : G.test(e) ? c : +e
    }

    function u(n, o, e) {
        var i, a, r, s, c, u, d = 0, l = !1, m = !1, t = !0;
        if ("function" != typeof n) throw new TypeError("Expected a function");

        function f(e) {
            var t = i, o = a;
            return i = a = void 0, d = e, s = n.apply(o, t)
        }

        function p(e) {
            var t = e - u;
            return void 0 === u || o <= t || t < 0 || m && r <= e - d
        }

        function b() {
            var e, t = x();
            if (p(t)) return v(t);
            c = setTimeout(b, (e = o - (t - u), m ? Z(e, r - (t - d)) : e))
        }

        function v(e) {
            return c = void 0, t && i ? f(e) : (i = a = void 0, s)
        }

        function g() {
            var e = x(), t = p(e);
            if (i = arguments, a = this, u = e, t) {
                if (void 0 === c) return d = e = u, c = setTimeout(b, o), l ? f(e) : s;
                if (m) return c = setTimeout(b, o), f(u)
            }
            return void 0 === c && (c = setTimeout(b, o)), s
        }

        return o = j(o) || 0, O(e) && (l = !!e.leading, r = (m = "maxWait" in e) ? X(j(e.maxWait) || 0, o) : r, t = "trailing" in e ? !!e.trailing : t), g.cancel = function () {
            void 0 !== c && clearTimeout(c), i = u = a = c = void (d = 0)
        }, g.flush = function () {
            return void 0 === c ? s : v(x())
        }, g
    }

    var d = function () {
    };

    function ee(e) {
        e && e.forEach(function (e) {
            var t = Array.prototype.slice.call(e.addedNodes), e = Array.prototype.slice.call(e.removedNodes);
            if (function e(t) {
                for (var o, n = void 0, n = 0; n < t.length; n += 1) {
                    if ((o = t[n]).dataset && o.dataset.aos) return 1;
                    if (o.children && e(o.children)) return 1
                }
            }(t.concat(e))) return d()
        })
    }

    function l() {
        return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
    }

    var te = function () {
            return !!l()
        }, oe = function (e, t) {
            var o = window.document, n = new (l())(ee);
            d = t, n.observe(o.documentElement, {childList: !0, subtree: !0, removedNodes: !0})
        }, e = function (e, t, o) {
            return t && m(e.prototype, t), o && m(e, o), e
        }, ne = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var o, n = arguments[t];
                for (o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        },
        ie = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
        ae = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        re = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
        se = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;

    function m(e, t) {
        for (var o = 0; o < t.length; o++) {
            var n = t[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function f() {
        return navigator.userAgent || navigator.vendor || window.opera || ""
    }

    function p(e, t) {
        var o = void 0;
        q.ie11() ? (o = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, {detail: t}) : o = new CustomEvent(e, {detail: t}), document.dispatchEvent(o)
    }

    function b(e) {
        for (var t = 0, o = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), o += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
        return {top: o, left: t}
    }

    function v(e, t, o) {
        if (void 0 !== (e = e.getAttribute("data-aos-" + t))) {
            if ("true" === e) return !0;
            if ("false" === e) return !1
        }
        return e || o
    }

    function g() {
        var e = document.querySelectorAll("[data-aos]");
        return Array.prototype.map.call(e, function (e) {
            return {node: e}
        })
    }

    function E() {
        return document.all && !window.atob
    }

    function N() {
        (M = 0 < arguments.length && void 0 !== arguments[0] && arguments[0] ? !0 : M) && (T = ce(T, S), L(T), window.addEventListener("scroll", F(function () {
            L(T, S.once)
        }, S.throttleDelay)))
    }

    function z() {
        if (T = g(), A(S.disable) || E()) return C();
        N()
    }

    function C() {
        T.forEach(function (e, t) {
            e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay"), S.initClassName && e.node.classList.remove(S.initClassName), S.animatedClassName && e.node.classList.remove(S.animatedClassName)
        })
    }

    function A(e) {
        return !0 === e || "mobile" === e && q.mobile() || "phone" === e && q.phone() || "tablet" === e && q.tablet() || "function" == typeof e && !0 === e()
    }

    e(D, [{
        key: "phone", value: function () {
            var e = f();
            return !(!ie.test(e) && !ae.test(e.substr(0, 4)))
        }
    }, {
        key: "mobile", value: function () {
            var e = f();
            return !(!re.test(e) && !se.test(e.substr(0, 4)))
        }
    }, {
        key: "tablet", value: function () {
            return this.mobile() && !this.phone()
        }
    }, {
        key: "ie11", value: function () {
            return "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style
        }
    }]);
    var q = new D, L = function (e) {
        return e.forEach(function (e, t) {
            var o = e, e = window.pageYOffset;

            function n() {
                var t, e;
                o.animated && (t = s, (e = a.animatedClassNames) && e.forEach(function (e) {
                    return t.classList.remove(e)
                }), p("aos:out", s), o.options.id && p("aos:in:" + o.options.id, s), o.animated = !1)
            }

            var i, a = o.options, r = o.position, s = o.node;
            o.data, a.mirror && e >= r.out && !a.once ? n() : e >= r.in ? o.animated || (i = s, (e = a.animatedClassNames) && e.forEach(function (e) {
                return i.classList.add(e)
            }), p("aos:in", s), o.options.id && p("aos:in:" + o.options.id, s), o.animated = !0) : o.animated && !a.once && n()
        })
    }, ce = function (e, u) {
        return e.forEach(function (e, t) {
            var o, n, i, a = v(e.node, "mirror", u.mirror), r = v(e.node, "once", u.once), s = v(e.node, "id"),
                c = u.useClassNames && e.node.getAttribute("data-aos"),
                c = [u.animatedClassName].concat(c ? c.split(" ") : []).filter(function (e) {
                    return "string" == typeof e
                });
            u.initClassName && e.node.classList.add(u.initClassName), e.position = {
                in: function (e, t, o) {
                    var n = window.innerHeight, i = v(e, "anchor"), a = v(e, "anchor-placement"),
                        t = Number(v(e, "offset", a ? 0 : t)), a = a || o, r = e,
                        s = (i && document.querySelectorAll(i) && (r = document.querySelectorAll(i)[0]), b(r).top - n);
                    switch (a) {
                        case"top-bottom":
                            break;
                        case"center-bottom":
                            s += r.offsetHeight / 2;
                            break;
                        case"bottom-bottom":
                            s += r.offsetHeight;
                            break;
                        case"top-center":
                            s += n / 2;
                            break;
                        case"center-center":
                            s += n / 2 + r.offsetHeight / 2;
                            break;
                        case"bottom-center":
                            s += n / 2 + r.offsetHeight;
                            break;
                        case"top-top":
                            s += n;
                            break;
                        case"bottom-top":
                            s += n + r.offsetHeight;
                            break;
                        case"center-top":
                            s += n + r.offsetHeight / 2
                    }
                    return s + t
                }(e.node, u.offset, u.anchorPlacement),
                out: a && (o = e.node, n = u.offset, window.innerHeight, i = v(o, "anchor"), n = v(o, "offset", n), i && document.querySelectorAll(i) && (o = document.querySelectorAll(i)[0]), b(o).top + o.offsetHeight - n)
            }, e.options = {once: r, mirror: a, animatedClassNames: c, id: s}
        }), e
    }, T = [], M = !1, S = {
        offset: 120,
        delay: 0,
        easing: "ease",
        duration: 400,
        disable: !1,
        once: !1,
        mirror: !1,
        anchorPlacement: "top-bottom",
        startEvent: "DOMContentLoaded",
        animatedClassName: "aos-animate",
        initClassName: "aos-init",
        useClassNames: !1,
        disableMutationObserver: !1,
        throttleDelay: 99,
        debounceDelay: 50
    };

    function D() {
        if (!(this instanceof D)) throw new TypeError("Cannot call a class as a function")
    }

    return {
        init: function (e) {
            return S = ne(S, e), T = g(), S.disableMutationObserver || te() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), S.disableMutationObserver = !0), S.disableMutationObserver || oe("[data-aos]", z), A(S.disable) || E() ? C() : (document.querySelector("body").setAttribute("data-aos-easing", S.easing), document.querySelector("body").setAttribute("data-aos-duration", S.duration), document.querySelector("body").setAttribute("data-aos-delay", S.delay), -1 === ["DOMContentLoaded", "load"].indexOf(S.startEvent) ? document.addEventListener(S.startEvent, function () {
                N(!0)
            }) : window.addEventListener("load", function () {
                N(!0)
            }), "DOMContentLoaded" === S.startEvent && -1 < ["complete", "interactive"].indexOf(document.readyState) && N(!0), window.addEventListener("resize", u(N, S.debounceDelay, !0)), window.addEventListener("orientationchange", u(N, S.debounceDelay, !0)), T)
        }, refresh: N, refreshHard: z
    }
});
