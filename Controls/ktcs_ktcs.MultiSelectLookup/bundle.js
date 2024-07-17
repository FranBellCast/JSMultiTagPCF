/*! For license information please see bundle.js.LICENSE.txt */
var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad;
(() => {
  "use strict";
  var e = {
    d: (t, r) => {
      for (var n in r)
        e.o(r, n) &&
          !e.o(t, n) &&
          Object.defineProperty(t, n, { enumerable: !0, get: r[n] });
    },
  };
  (e.g = (function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == typeof window) return window;
    }
  })()),
    (e.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (e.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    });
  var t = {};
  e.r(t), e.d(t, { MultiSelectLookup: () => J });
  const r = React,
    n = FluentUIReactv940;
  var a = r.createContext(void 0),
    i = {},
    o =
      (a.Provider,
      () => {
        var e = {};
        return function (t, r) {
          void 0 === e[t.id] && (t.insertCSSRules(r), (e[t.id] = !0));
        };
      }),
    l = "undefined" == typeof window ? e.g : window,
    s = "@griffel/";
  function c(e, t) {
    return (
      l[Symbol.for(s + e)] || (l[Symbol.for(s + e)] = t), l[Symbol.for(s + e)]
    );
  }
  var u = c("DEFINITION_LOOKUP_TABLE", {}),
    d = "data-make-styles-bucket",
    f = 7,
    m = "___",
    h = m.length + f;
  function p(e, t) {
    return (
      m +
      (function (e) {
        var t = e.length;
        if (t === f) return e;
        for (var r = t; r < f; r++) e += "0";
        return e;
      })(
        (function (e) {
          for (var t, r = 0, n = 0, a = e.length; a >= 4; ++n, a -= 4)
            (t =
              1540483477 *
                (65535 &
                  (t =
                    (255 & e.charCodeAt(n)) |
                    ((255 & e.charCodeAt(++n)) << 8) |
                    ((255 & e.charCodeAt(++n)) << 16) |
                    ((255 & e.charCodeAt(++n)) << 24))) +
              ((59797 * (t >>> 16)) << 16)),
              (r =
                (1540483477 * (65535 & (t ^= t >>> 24)) +
                  ((59797 * (t >>> 16)) << 16)) ^
                (1540483477 * (65535 & r) + ((59797 * (r >>> 16)) << 16)));
          switch (a) {
            case 3:
              r ^= (255 & e.charCodeAt(n + 2)) << 16;
            case 2:
              r ^= (255 & e.charCodeAt(n + 1)) << 8;
            case 1:
              r =
                1540483477 * (65535 & (r ^= 255 & e.charCodeAt(n))) +
                ((59797 * (r >>> 16)) << 16);
          }
          return (
            ((r =
              1540483477 * (65535 & (r ^= r >>> 13)) +
              ((59797 * (r >>> 16)) << 16)) ^
              (r >>> 15)) >>>
            0
          ).toString(36);
        })(e + t)
      )
    );
  }
  function v(e, t) {
    var r = "";
    for (var n in e) {
      var a = e[n];
      if (a) {
        var i = Array.isArray(a);
        r += "rtl" === t ? (i ? a[1] : a) + " " : (i ? a[0] : a) + " ";
      }
    }
    return r.slice(0, -1);
  }
  function y(e, t) {
    var r = {};
    for (var n in e) {
      var a = v(e[n], t);
      if ("" !== a) {
        var i = p(a, t),
          o = i + " " + a;
        (u[i] = [e[n], t]), (r[n] = o);
      } else r[n] = "";
    }
    return r;
  }
  var b = r.useInsertionEffect ? r.useInsertionEffect : void 0;
  var g = [
    "r",
    "d",
    "l",
    "v",
    "w",
    "f",
    "i",
    "h",
    "a",
    "s",
    "k",
    "t",
    "m",
    "c",
  ].reduce((e, t, r) => ((e[t] = r), e), {});
  function w(e, t, r, n) {
    var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
      i = "m" === e,
      o = i ? e + a.m : e;
    if (!n.stylesheets[o]) {
      var l = t && t.createElement("style"),
        s = (function (e, t, r) {
          var n = [];
          if (((r[d] = t), e)) for (var a in r) e.setAttribute(a, r[a]);
          return {
            elementAttributes: r,
            insertRule: function (t) {
              return null != e && e.sheet
                ? e.sheet.insertRule(t, e.sheet.cssRules.length)
                : n.push(t);
            },
            element: e,
            bucketName: t,
            cssRules: () =>
              null != e && e.sheet
                ? Array.from(e.sheet.cssRules).map((e) => e.cssText)
                : n,
          };
        })(
          l,
          e,
          Object.assign({}, n.styleElementAttributes, i && { media: a.m })
        );
      (n.stylesheets[o] = s),
        t &&
          l &&
          t.head.insertBefore(
            l,
            (function (e, t, r, n, a) {
              var i = g[r],
                o = (e) => i - g[e.getAttribute(d)],
                l = e.head.querySelectorAll("[".concat(d, "]"));
              if ("m" === r && a) {
                var s = e.head.querySelectorAll(
                  "[".concat(d, '="').concat(r, '"]')
                );
                s.length &&
                  ((l = s), (o = (e) => n.compareMediaQueries(a.m, e.media)));
              }
              for (var c = l.length, u = c - 1; u >= 0; ) {
                var f = l.item(u);
                if (o(f) > 0) return f.nextSibling;
                u--;
              }
              return c > 0 ? l.item(0) : t ? t.nextSibling : null;
            })(t, r, e, n, a)
          );
    }
    return n.stylesheets[o];
  }
  function O(e, t) {
    try {
      e.insertRule(t);
    } catch (e) {}
  }
  ":(".concat(
    [
      "-moz-placeholder",
      "-moz-focus-inner",
      "-moz-focusring",
      "-ms-input-placeholder",
      "-moz-read-write",
      "-moz-read-only",
    ].join("|"),
    ")"
  );
  var S = 0,
    E = (e, t) => (e < t ? -1 : e > t ? 1 : 0);
  function C() {
    var e =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : "undefined" == typeof document
          ? void 0
          : document,
      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      {
        unstable_filterCSSRule: r,
        insertionPoint: n,
        styleElementAttributes: a,
        compareMediaQueries: i = E,
      } = t,
      o = {
        insertionCache: {},
        stylesheets: {},
        styleElementAttributes: Object.freeze(a),
        compareMediaQueries: i,
        id: "d".concat(S++),
        insertCSSRules(t) {
          for (var a in t)
            for (var i = t[a], l = 0, s = i.length; l < s; l++) {
              var [c, u] = ((f = i[l]), Array.isArray(f) ? f : [f]),
                d = w(a, e, n || null, o, u);
              o.insertionCache[c] ||
                ((o.insertionCache[c] = a), r ? r(c) && O(d, c) : O(d, c));
            }
          var f;
        },
      };
    return o;
  }
  var j = r.createContext(C()),
    R = r.createContext("ltr"),
    x = {},
    T = ["title", "primaryFill"];
  function A(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        r.push.apply(r, n);
    }
    return r;
  }
  function N(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? A(Object(r), !0).forEach(function (t) {
            var n, a, i, o;
            (n = e),
              (a = t),
              (i = r[t]),
              (a =
                "symbol" ==
                typeof (o = (function (e, t) {
                  if ("object" != typeof e || !e) return e;
                  var r = e[Symbol.toPrimitive];
                  if (void 0 !== r) {
                    var n = r.call(e, "string");
                    if ("object" != typeof n) return n;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return String(e);
                })(a))
                  ? o
                  : o + "") in n
                ? Object.defineProperty(n, a, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (n[a] = i);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : A(Object(r)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
  }
  var P,
    L =
      ((P = (function (e, t) {
        var r = (
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o
          )(),
          n = null,
          a = null;
        return function (i) {
          var { dir: o, renderer: l } = i,
            s = "ltr" === o;
          return (
            s ? null === n && (n = y(e, o)) : null === a && (a = y(e, o)),
            r(l, t),
            s ? n : a
          );
        };
      })(
        {
          root: { mc9l5x: "f1w7gpdv", Bg96gwp: "fez10in", ycbfsm: "fg4l7m0" },
          rtl: { Bz10aip: "f13rod7r" },
        },
        {
          d: [
            ".f1w7gpdv{display:inline;}",
            ".fez10in{line-height:0;}",
            ".f13rod7r{-webkit-transform:scaleX(-1);-moz-transform:scaleX(-1);-ms-transform:scaleX(-1);transform:scaleX(-1);}",
          ],
          t: [
            "@media (forced-colors: active){.fg4l7m0{forced-color-adjust:auto;}}",
          ],
        },
        () => {
          var e = {};
          return function (t, r) {
            b &&
            "undefined" != typeof window &&
            window.document &&
            window.document.createElement
              ? b(() => {
                  t.insertCSSRules(r);
                }, [t, r])
              : void 0 === e[t.id] && (t.insertCSSRules(r), (e[t.id] = !0));
          };
        }
      )),
      function () {
        var e = r.useContext(R),
          t = r.useContext(j);
        return P({ dir: e, renderer: t });
      }),
    I = (e, t) => {
      var { title: n, primaryFill: o = "currentColor" } = e,
        l = N(
          N(
            {},
            (function (e, t) {
              if (null == e) return {};
              var r,
                n,
                a = (function (e, t) {
                  if (null == e) return {};
                  var r,
                    n,
                    a = {},
                    i = Object.keys(e);
                  for (n = 0; n < i.length; n++)
                    (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                  return a;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                  (r = i[n]),
                    t.indexOf(r) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, r) &&
                        (a[r] = e[r]));
              }
              return a;
            })(e, T)
          ),
          {},
          { title: void 0, fill: o }
        ),
        s = L(),
        c = r.useContext(a) ? r.useContext(a) : i;
      return (
        (l.className = (function () {
          for (
            var e = arguments,
              t = null,
              r = "",
              n = "",
              a = new Array(arguments.length),
              i = function () {
                var t = e[o];
                if ("string" == typeof t && "" !== t) {
                  var i = t.indexOf(m);
                  if (-1 === i) r += t + " ";
                  else {
                    var l = t.substr(i, h);
                    i > 0 && (r += t.slice(0, i)), (n += l), (a[o] = l);
                  }
                }
              },
              o = 0;
            o < arguments.length;
            o++
          )
            i();
          if ("" === n) return r.slice(0, -1);
          var l = x[n];
          if (void 0 !== l) return r + l;
          for (var s = [], c = 0; c < arguments.length; c++) {
            var d = a[c];
            if (d) {
              var f = u[d];
              f && (s.push(f[0]), (t = f[1]));
            }
          }
          var y = Object.assign.apply(Object, [{}].concat(s)),
            b = v(y, t),
            g = p(b, t);
          return (b = g + " " + b), (x[n] = b), (u[g] = [y, t]), r + b;
        })(
          s.root,
          (null == t ? void 0 : t.flipInRtl) &&
            "rtl" === (null == c ? void 0 : c.textDirection) &&
            s.rtl,
          l.className
        )),
        n && (l["aria-label"] = n),
        l["aria-label"] || l["aria-labelledby"]
          ? (l.role = "img")
          : (l["aria-hidden"] = !0),
        l
      );
    };
  function k(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        r.push.apply(r, n);
    }
    return r;
  }
  function M(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? k(Object(r), !0).forEach(function (t) {
            var n, a, i, o;
            (n = e),
              (a = t),
              (i = r[t]),
              (a =
                "symbol" ==
                typeof (o = (function (e, t) {
                  if ("object" != typeof e || !e) return e;
                  var r = e[Symbol.toPrimitive];
                  if (void 0 !== r) {
                    var n = r.call(e, "string");
                    if ("object" != typeof n) return n;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return String(e);
                })(a))
                  ? o
                  : o + "") in n
                ? Object.defineProperty(n, a, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (n[a] = i);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : k(Object(r)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
  }
  var D = (e, t, n, a) => {
      var i = "1em" === t ? "20" : t,
        o = r.forwardRef((e, o) => {
          var l = M(
            M({}, I(e, { flipInRtl: null == a ? void 0 : a.flipInRtl })),
            {},
            {
              ref: o,
              width: t,
              height: t,
              viewBox: "0 0 ".concat(i, " ").concat(i),
              xmlns: "http://www.w3.org/2000/svg",
            }
          );
          return r.createElement(
            "svg",
            l,
            ...n.map((e) => r.createElement("path", { d: e, fill: l.fill }))
          );
        });
      return (o.displayName = e), o;
    },
    F = D("GlobeSearchRegular", "1em", [
      "M2.05 9.11a8 8 0 1 1 9.72 8.7 1.5 1.5 0 0 0-.2-1.87l-.02-.01c.16-.24.32-.52.47-.84.22-.46.4-1 .56-1.59H9.74c.12-.32.2-.65.23-1h2.82a14.86 14.86 0 0 0 0-5H7.21l-.05.31c-.31-.12-.64-.2-.98-.26l.01-.05H3.46l-.2.6c-.46.26-.87.6-1.21 1.01Zm9.97-4.2C11.41 3.59 10.66 3 10 3c-.66 0-1.4.59-2.02 1.9-.22.47-.4 1.01-.56 1.6h5.16a9.25 9.25 0 0 0-.56-1.6ZM6.4 6.5c.17-.74.4-1.42.68-2.01.19-.4.4-.78.64-1.1A7.02 7.02 0 0 0 3.94 6.5h2.45Zm9.67 7h-2.45c-.17.74-.4 1.42-.68 2.01-.19.4-.4.78-.64 1.1a7.02 7.02 0 0 0 3.77-3.11Zm-2.25-1h2.73a6.98 6.98 0 0 0 0-5h-2.73a15.97 15.97 0 0 1 0 5Zm2.25-6a7.02 7.02 0 0 0-3.77-3.12c.24.33.45.7.64 1.1.27.6.5 1.28.68 2.02h2.45ZM8.3 14.1a3.5 3.5 0 1 0-.7.7l2.55 2.55a.5.5 0 0 0 .7-.7L8.3 14.1ZM8 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z",
    ]),
    V = D("AddRegular", "1em", [
      "M10 2.5a.5.5 0 0 0-1 0V9H2.5a.5.5 0 0 0 0 1H9v6.5a.5.5 0 0 0 1 0V10h6.5a.5.5 0 0 0 0-1H10V2.5Z",
    ]),
    U = D("Dismiss12Regular", "12", [
      "m2.09 2.22.06-.07a.5.5 0 0 1 .63-.06l.07.06L6 5.29l3.15-3.14a.5.5 0 1 1 .7.7L6.71 6l3.14 3.15c.18.17.2.44.06.63l-.06.07a.5.5 0 0 1-.63.06l-.07-.06L6 6.71 2.85 9.85a.5.5 0 0 1-.7-.7L5.29 6 2.15 2.85a.5.5 0 0 1-.06-.63l.06-.07-.06.07Z",
    ]),
    z = function (e, t, r, n) {
      return new (r || (r = Promise))(function (a, i) {
        function o(e) {
          try {
            s(n.next(e));
          } catch (e) {
            i(e);
          }
        }
        function l(e) {
          try {
            s(n.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function s(e) {
          var t;
          e.done
            ? a(e.value)
            : ((t = e.value),
              t instanceof r
                ? t
                : new r(function (e) {
                    e(t);
                  })).then(o, l);
        }
        s((n = n.apply(e, t || [])).next());
      });
    };
  class B {
    constructor(e, t, r, n, a) {
      (this.initialResults = () =>
        z(this, void 0, void 0, function* () {
          return [];
        })),
        (this.search = (e) =>
          z(this, void 0, void 0, function* () {
            return [];
          })),
        (this.webApi = e),
        (this.tableName = t),
        (this.primaryColumn = r),
        (this.filter = n),
        (this.order = a);
    }
  }
  class _ extends B {
    constructor() {
      super(...arguments),
        (this.initialResults = () =>
          z(this, void 0, void 0, function* () {
            return yield this.webApi
              .retrieveMultipleRecords(
                this.tableName,
                "?$select="
                  .concat(this.primaryColumn, ",")
                  .concat(this.tableName, "id")
                  .concat(this.filter ? "&$filter=".concat(this.filter) : "")
                  .concat(this.order ? "&$orderby=".concat(this.order) : "")
              )
              .then(
                (e) => ((this.records = e.entities), e.entities),
                (e) => (console.error(e), [])
              );
          })),
        (this.search = (e) =>
          z(this, void 0, void 0, function* () {
            return this.records.filter((t) =>
              t[this.primaryColumn].toLowerCase().includes(e.toLowerCase())
            );
          }));
    }
  }
  class Z extends B {
    constructor(e, t, r, n, a) {
      var i =
          arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : [],
        o = arguments.length > 6 ? arguments[6] : void 0,
        l = arguments.length > 7 ? arguments[7] : void 0,
        s = arguments.length > 8 ? arguments[8] : void 0;
      super(e, t, r, n, a),
        (this.initialResults = () =>
          z(this, void 0, void 0, function* () {
            return new _(
              this.webApi,
              this.tableName,
              this.primaryColumn,
              this.filter,
              this.order
            )
              .initialResults()
              .then((e) => e);
          })),
        (this.search = (e) =>
          z(this, void 0, void 0, function* () {
            var t = [
                {
                  name: this.tableName,
                  filter: this.filter ? this.filter : void 0,
                  searchColumns:
                    this.searchColumns.length > 0 ? this.searchColumns : void 0,
                },
              ],
              r = {
                search: e,
                entities: JSON.stringify(t),
                options: JSON.stringify({
                  besteffortsearchenabled: this.bestEffort,
                  searchmode: this.matchWords,
                }),
                orderby: this.order ? JSON.stringify([this.order]) : void 0,
                count: !0,
              };
            return yield fetch(
              "".concat(this.clientURL, "/api/search/v2.0/query"),
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "OData-MaxVersion": "4.0",
                  "OData-Version": "4.0",
                  Accept: "application/json",
                },
                body: JSON.stringify(r),
              }
            )
              .then((e) => e.json())
              .then((e) =>
                JSON.parse(e.response).Value.map((e) => e.Attributes)
              )
              .catch((e) => {
                console.error("Error:", e);
              });
          })),
        (this.bestEffort = o),
        (this.matchWords = l),
        (this.clientURL = s),
        (this.searchColumns = i);
    }
  }
  var W = function (e, t, r, n) {
      return new (r || (r = Promise))(function (a, i) {
        function o(e) {
          try {
            s(n.next(e));
          } catch (e) {
            i(e);
          }
        }
        function l(e) {
          try {
            s(n.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function s(e) {
          var t;
          e.done
            ? a(e.value)
            : ((t = e.value),
              t instanceof r
                ? t
                : new r(function (e) {
                    e(t);
                  })).then(o, l);
        }
        s((n = n.apply(e, t || [])).next());
      });
    },
    X = (0, n.makeStyles)({
      root: {
        display: "grid",
        flexDirection: "row",
        gridTemplateRows: "repeat(1fr)",
        JustifyContent: "space-between",
        alignItems: "end",
        width: "100%",
        paddingTop: "8px",
        rowGap: "5px",
      },
      leftlabel: { display: "flex" },
      tagsList: {
        listStyleType: "none",
        marginBottom: n.tokens.spacingVerticalXXS,
        marginTop: 0,
        paddingTop: "3px",
        paddingLeft: 0,
        display: "flex",
        flexWrap: "wrap",
        gridGap: n.tokens.spacingHorizontalXXS,
      },
      wrapper: {
        columnGap: "15px",
        display: "flex",
        alignContent: "space-around",
      },
    }),
    H = (e) => {
      var t,
        [a, i] = r.useState(""),
        [o, l] = r.useState(""),
        [s, c] = r.useState(""),
        [u, d] = r.useState(""),
        [f, m] = r.useState(""),
        [h, p] = r.useState(!1),
        [v, y] = r.useState([]),
        [b, g] = r.useState([]),
        [w, O] = r.useState(!1),
        [S, E] = r.useState(!1),
        [C, j] = r.useState(""),
        [R, x] = r.useState(),
        [T, A] = r.useState(""),
        N = r.useRef(null),
        P = ((e, t) => {
          var [n, a] = r.useState(e);
          return (
            r.useEffect(() => {
              var t = setTimeout(() => {
                a(e);
              }, 400);
              return () => {
                clearTimeout(t);
              };
            }, [e, 400]),
            n
          );
        })(C),
        L = (0, n.useId)("Multiselect-Search"),
        I = "".concat(L, "-selection"),
        k = X();
      r.useEffect(() => {
        "advanced" === e.searchMode && e.webApi && e.items && e.clientURL && s
          ? x(
              new Z(
                e.webApi,
                e.items.getTargetEntityType(),
                s,
                e.filter,
                e.order,
                e.searchColumns.length > 0 ? e.searchColumns.split(",") : [],
                e.bestEffort,
                e.matchWords,
                e.clientURL
              )
            )
          : "simple" === e.searchMode &&
            e.webApi &&
            e.items &&
            e.clientURL &&
            s &&
            x(
              new _(
                e.webApi,
                e.items.getTargetEntityType(),
                s,
                e.filter,
                e.order
              )
            );
      }, [
        e.searchMode,
        e.webApi,
        e.items,
        s,
        e.filter,
        e.order,
        e.searchColumns,
        e.bestEffort,
        e.matchWords,
        e.searchMode,
        e.clientURL,
      ]),
        r.useEffect(() => {
          W(void 0, void 0, void 0, function* () {
            null == R ||
              R.initialResults().then(
                (e) => {
                  y(e);
                },
                (e) => {
                  console.error(e);
                }
              );
          });
        }, [R]),
        r.useEffect(() => {
          e.items &&
            e.utils
              .getEntityMetadata(e.items.getTargetEntityType())
              .then((e) => {
                c(e.PrimaryNameAttribute),
                  d(e.DisplayCollectionName),
                  m(e.DisplayName),
                  l(e.EntitySetName);
              });
        }, [e.items]),
        r.useEffect(() => {
          e.thisTableName &&
            e.utils.getEntityMetadata(e.thisTableName).then((e) => {
              i(e.EntitySetName);
            });
        }, [e.thisTableName]),
        r.useEffect(() => {
          e.items.sortedRecordIds.length > 0 &&
            "" !== s &&
            g(
              e.items.sortedRecordIds.map((t) =>
                e.items.records[t].getFormattedValue(s)
              )
            );
        }, [e.items, s]),
        r.useEffect(() => {
          P &&
            W(void 0, void 0, void 0, function* () {
              null == R ||
                R.search(P).then(
                  (e) => {
                    y(e);
                  },
                  (e) => {
                    console.error(e);
                  }
                );
            });
        }, [P]),
        r.useEffect(() => {
          W(void 0, void 0, void 0, function* () {
            null == R ||
              R.search(T).then(
                (e) => {
                  y(e);
                },
                (e) => {
                  console.error(e);
                }
              );
          });
        }, [T]);
      var M = (t) => {
          var r = [],
            n = [];
          t.length > 0
            ? 0 === b.length
              ? ((r = t), E(!0))
              : ((r = t.filter((e) => !b.includes(e))),
                (n = b.filter((e) => !t.includes(e))),
                E(!0))
            : ((n = b), E(!0)),
            r.map((r) => {
              var n = v.find((e) => {
                  if (e[s] === r) return !0;
                })["".concat(e.items.getTargetEntityType(), "id")],
                i = {
                  "@odata.id": ""
                    .concat(e.clientURL, "/api/data/v9.1/")
                    .concat(a, "(")
                    .concat(e.thisRecordId, ")"),
                };
              window
                .fetch(
                  ""
                    .concat(e.clientURL, "/api/data/v9.1/")
                    .concat(o, "(")
                    .concat(n, ")/")
                    .concat(e.relationshipName, "/$ref"),
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json; charset=utf-8",
                      Accept: "application/json",
                      "OData-MaxVersion": "4.0",
                      "OData-Version": "4.0",
                    },
                    body: JSON.stringify(i),
                  }
                )
                .then(() => D(t));
            }),
            n.map((r) => {
              var n = e.items.sortedRecordIds.find(
                (t) => e.items.records[t].getFormattedValue(s) === r
              );
              window
                .fetch(
                  ""
                    .concat(e.clientURL, "/api/data/v9.1/")
                    .concat(a, "(")
                    .concat(e.thisRecordId, ")/")
                    .concat(e.relationshipName, "(")
                    .concat(n, ")/$ref"),
                  {
                    method: "DELETE",
                    headers: {
                      "Content-Type": "application/json; charset=utf-8",
                      Accept: "application/json",
                      "OData-MaxVersion": "4.0",
                      "OData-Version": "4.0",
                    },
                  }
                )
                .then(() => D(t));
            });
        },
        D = (e) => {
          g(null != e ? e : []), E(!1);
        };
      return (
        r.useEffect(() => {
          w && (N.current && N.current.blur(), e.addNewCallback(), O(!1));
        }, [w]),
        r.createElement(
          n.FluentProvider,
          {
            theme: e.theme,
            style: { width: "100%" },
            className: "above" === e.labelLocation ? k.root : k.leftlabel,
          },
          r.createElement(
            n.Label,
            {
              style: {
                width:
                  null !== (t = e.labelWidth) && void 0 !== t ? t : "140px",
                paddingTop: "5px",
              },
            },
            e.label
          ),
          r.createElement(
            "div",
            { className: k.root, style: { width: "320px" } },
            r.createElement(
              n.Combobox,
              {
                ref: N,
                multiselect: !0,
                selectedOptions: b,
                appearance: "filled-lighter",
                "aria-labelledby": L,
                placeholder: h ? "" : "---",
                style: {
                  background: "#F5F5F5",
                  width: "300px",
                  paddingTop: "0px",
                },
                expandIcon: r.createElement(F, null),
                onFocus: (e) => {
                  p(!0);
                },
                onBlur: (e) => {
                  p(!1);
                },
                onInput: (t) => {
                  "advanced" === e.searchMode
                    ? j(t.target.value)
                    : A(t.target.value);
                },
                onOptionSelect: (e, t) => {
                  M(t.selectedOptions);
                },
                type: "search",
              },
              u &&
                r.createElement(
                  n.Text,
                  { style: { margin: "5px", padding: "5px" } },
                  "All ",
                  null != u ? u : ""
                ),
              v &&
                v.length > 0 &&
                v.map((e) => r.createElement(n.Option, { key: e[s] }, e[s])),
              e.allowAddNew &&
                r.createElement(
                  r.Fragment,
                  null,
                  r.createElement(n.Divider, null),
                  r.createElement(
                    "div",
                    { className: k.wrapper },
                    r.createElement(
                      n.Button,
                      {
                        icon: r.createElement(V, null),
                        appearance: "subtle",
                        onClick: () => O(!0),
                      },
                      "Nueva ",
                      null != f ? f : ""
                    )
                  )
                )
            ),
            S &&
              r.createElement(
                n.Field,
                { validationMessage: "saving...", validationState: "none" },
                r.createElement(n.ProgressBar, null)
              ),
            b.length
              ? r.createElement(
                  "ul",
                  { id: I, className: k.tagsList },
                  r.createElement(
                    "span",
                    { id: "".concat(L, "-remove"), hidden: !0 },
                    "Remove"
                  ),
                  b.map((t, a) =>
                    r.createElement(
                      "li",
                      { key: t },
                      r.createElement(
                        n.SplitButton,
                        {
                          size: "small",
                          shape: "circular",
                          appearance: "primary",
                          menuButton: {
                            style: {
                              color: "rgb(255, 178, 102)",
                              background: "rgb(235, 243, 252)",
                            },
                            onClick: () =>
                              ((e) => {
                                M(b.filter((t) => t !== e));
                              })(t),
                          },
                          menuIcon: r.createElement(U, null),
                          primaryActionButton: {
                            style: {
                              color: "rgb(17, 94, 163)",
                              background: "rgb(235, 243, 252)",
                            },
                            onClick: () =>
                              ((t) => {
                                e.navigateToRecord(
                                  e.items.getTargetEntityType(),
                                  e.items.sortedRecordIds.find(
                                    (r) =>
                                      e.items.records[r].getFormattedValue(
                                        s
                                      ) === t
                                  )
                                );
                              })(t),
                          },
                          id: "".concat(L, "-remove-").concat(a),
                          "aria-labelledby": ""
                            .concat(L, "-remove ")
                            .concat(L, "-remove-")
                            .concat(a),
                        },
                        t
                      )
                    )
                  )
                )
              : null
          )
        )
      );
    };
  class J {
    constructor() {}
    init(e, t, r) {
      this.notifyOutputChanged = t;
    }
    updateView(e) {
      var t, n;
      this.context = e;
      var a = {
        utils: e.utils,
        webApi: e.webAPI,
        currentUserId: e.userSettings.userId,
        clientURL: e.page.getClientUrl(),
        addNewCallback: this.addNewCallback.bind(this),
        allowAddNew: e.parameters.allowAddNew.raw,
        items: e.parameters.dataset,
        navigateToRecord: this.navigateToRecord.bind(this),
        theme:
          null === (t = e.fluentDesignLanguage) || void 0 === t
            ? void 0
            : t.tokenTheme,
        label: e.parameters.label.raw,
        thisTableName: e.page.entityTypeName,
        thisRecordId: e.page.entityId,
        relationshipName: e.parameters.relationship.raw,
        labelLocation:
          "0" === e.parameters.labelLocation.raw ? "above" : "left",
        labelWidth:
          null !== (n = e.parameters.labelWidth.raw) && void 0 !== n ? n : "",
        searchMode: "0" == e.parameters.searchMode.raw ? "simple" : "advanced",
        filter: e.parameters.customFilter.raw,
        order: e.parameters.customOrder.raw,
        bestEffort: !1,
        searchColumns: "",
        matchWords: "all",
      };
      return r.createElement(H, a);
    }
    addNewCallback() {
      var e = {
        entityName: this.context.parameters.dataset.getTargetEntityType(),
        useQuickCreateForm: !0,
      };
      this.context.navigation.openForm(e);
    }
    navigateToRecord(e, t) {
      var r = { entityName: e, entityId: t };
      this.context.navigation.openForm(r);
    }
    getOutputs() {
      return {};
    }
    destroy() {}
  }
  pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = t;
})();
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
  ComponentFramework.registerControl(
    "ktcs.MultiSelectLookup",
    pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.MultiSelectLookup
  );
} else {
  var ktcs = ktcs || {};
  ktcs.MultiSelectLookup =
    pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.MultiSelectLookup;
  pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}
