// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"js/bundle.js":[function(require,module,exports) {
!function (n) {
  var t = {};function e(o) {
    if (t[o]) return t[o].exports;var r = t[o] = { i: o, l: !1, exports: {} };return n[o].call(r.exports, r, r.exports, e), r.l = !0, r.exports;
  }e.m = n, e.c = t, e.d = function (n, t, o) {
    e.o(n, t) || Object.defineProperty(n, t, { enumerable: !0, get: o });
  }, e.r = function (n) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n, "__esModule", { value: !0 });
  }, e.t = function (n, t) {
    if (1 & t && (n = e(n)), 8 & t) return n;if (4 & t && "object" == typeof n && n && n.__esModule) return n;var o = Object.create(null);if (e.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: n }), 2 & t && "string" != typeof n) for (var r in n) e.d(o, r, function (t) {
      return n[t];
    }.bind(null, r));return o;
  }, e.n = function (n) {
    var t = n && n.__esModule ? function () {
      return n.default;
    } : function () {
      return n;
    };return e.d(t, "a", t), t;
  }, e.o = function (n, t) {
    return Object.prototype.hasOwnProperty.call(n, t);
  }, e.p = "/dist", e(e.s = 0);
}([function (n, t, e) {
  "use strict";
  e.r(t);e(1);console.log("hello i am here");
}, function (n, t, e) {
  var o = e(2);"string" == typeof o && (o = [[n.i, o, ""]]);var r = { hmr: !0, transform: void 0, insertInto: void 0 };e(4)(o, r);o.locals && (n.exports = o.locals);
}, function (n, t, e) {
  (n.exports = e(3)(!1)).push([n.i, "@charset \"UTF-8\";\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after {\n  content: '';\n  content: none; }\n\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n@media (min-width: 1025px) {\n  .atomic-grid--fr2 {\n    grid-template-columns: repeat(2, 1fr); } }\n\n.atomic-grid--unit {\n  width: 100%; }\n\n.atomic-align--left {\n  float: left;\n  margin-right: 30px; }\n\n.atomic-align--right {\n  float: right;\n  margin-left: 30px; }\n\n.atomic-align--center {\n  margin: 0 auto; }\n\n.atomic-size--half {\n  max-width: 50%; }\n\n.atomic-size--narrow {\n  width: 60%; }\n\n@media (min-width: 1025px) {\n  .atomic-text--narrow {\n    padding-top: 5%; } }\n\n.atomic-clear--both:after {\n  content: '';\n  display: table;\n  clear: both; }\n\n.atomic-borderTop {\n  padding-top: 30px;\n  border-top: 1px solid rgba(17, 26, 11, 0.5); }\n\n.button__button {\n  display: block;\n  border-radius: 0.2em;\n  border: solid 1px black;\n  padding: 7px 17px;\n  margin-top: 40px;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 400;\n  text-transform: none;\n  line-height: 1.35;\n  letter-spacing: normal;\n  text-decoration: none;\n  text-align: center;\n  color: black;\n  transition: color .15s linear, background-color .15s ease-in-out, border-color .15s ease-in-out; }\n  .button__button--cta {\n    overflow: hidden;\n    border: 2px solid #82919b;\n    border-radius: 40px;\n    width: auto;\n    padding: 8px 20px 9px 20px;\n    text-align: center;\n    font-size: 16px;\n    line-height: 1;\n    color: #82919b;\n    vertical-align: middle;\n    text-decoration: none; }\n    .button__button--cta:before {\n      content: '\\2665'; }\n\n.footer__base .panel__base {\n  padding-top: 30px; }\n\n.footer__list {\n  text-align: center;\n  padding-bottom: 30px; }\n\n.footer__listItem {\n  display: inline-block; }\n\n.footer__link {\n  color: #e3e4e4;\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1;\n  padding: 0 5px;\n  -webkit-font-smoothing: antialiased; }\n\n.grid__base {\n  display: grid; }\n\n.header__base {\n  position: relative; }\n  .header__base .panel__base {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translateX(-50%);\n    padding-top: 0; }\n\n.header__img {\n  width: 100%; }\n\n.header__hl {\n  max-height: 3em;\n  color: white;\n  font-size: 50px;\n  font-style: normal;\n  font-weight: 100;\n  text-transform: none;\n  line-height: 1.0465;\n  letter-spacing: normal;\n  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25); }\n  @media (min-width: 1025px) {\n    .header__hl {\n      font-size: 50px; } }\n\n.header__subHl {\n  color: white;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 300;\n  text-transform: uppercase;\n  line-height: 1.605;\n  letter-spacing: normal;\n  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25); }\n  @media (min-width: 1025px) {\n    .header__subHl {\n      max-height: 5em; } }\n\n.body__base {\n  background-color: #35414d;\n  font-family: \"proxima-nova,sans-serif\"; }\n\n.main__base {\n  background-color: #FFFFFF;\n  position: relative;\n  padding-bottom: 80px; }\n\n.panel__base {\n  padding-top: 80px; }\n\n.textimage__base--right, .textimage__base--left {\n  width: 50%; }\n\n.textimage__img + .textimage__wrapper .textimage__txt {\n  padding-top: 40px; }\n\n.textimage__txt {\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 300;\n  text-transform: none;\n  line-height: 1.6;\n  letter-spacing: normal;\n  color: #111a0b; }\n  .textimage__txt strong {\n    font-weight: bold; }\n  .textimage__txt i {\n    font-style: italic; }\n  .textimage__txt a {\n    color: #529fc6;\n    text-decoration: underline; }\n\n.video__base {\n  position: relative;\n  width: 100%; }\n\n.video__video {\n  position: relative;\n  display: block; }\n", ""]);
}, function (n, t) {
  n.exports = function (n) {
    var t = [];return t.toString = function () {
      return this.map(function (t) {
        var e = function (n, t) {
          var e = n[1] || "",
              o = n[3];if (!o) return e;if (t && "function" == typeof btoa) {
            var r = function (n) {
              return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */";
            }(o),
                i = o.sources.map(function (n) {
              return "/*# sourceURL=" + o.sourceRoot + n + " */";
            });return [e].concat(i).concat([r]).join("\n");
          }return [e].join("\n");
        }(t, n);return t[2] ? "@media " + t[2] + "{" + e + "}" : e;
      }).join("");
    }, t.i = function (n, e) {
      "string" == typeof n && (n = [[null, n, ""]]);for (var o = {}, r = 0; r < this.length; r++) {
        var i = this[r][0];"number" == typeof i && (o[i] = !0);
      }for (r = 0; r < n.length; r++) {
        var a = n[r];"number" == typeof a[0] && o[a[0]] || (e && !a[2] ? a[2] = e : e && (a[2] = "(" + a[2] + ") and (" + e + ")"), t.push(a));
      }
    }, t;
  };
}, function (n, t, e) {
  var o = {},
      r = function (n) {
    var t;return function () {
      return void 0 === t && (t = n.apply(this, arguments)), t;
    };
  }(function () {
    return window && document && document.all && !window.atob;
  }),
      i = function (n) {
    var t = {};return function (n, e) {
      if ("function" == typeof n) return n();if (void 0 === t[n]) {
        var o = function (n, t) {
          return t ? t.querySelector(n) : document.querySelector(n);
        }.call(this, n, e);if (window.HTMLIFrameElement && o instanceof window.HTMLIFrameElement) try {
          o = o.contentDocument.head;
        } catch (n) {
          o = null;
        }t[n] = o;
      }return t[n];
    };
  }(),
      a = null,
      s = 0,
      l = [],
      c = e(5);function f(n, t) {
    for (var e = 0; e < n.length; e++) {
      var r = n[e],
          i = o[r.id];if (i) {
        i.refs++;for (var a = 0; a < i.parts.length; a++) i.parts[a](r.parts[a]);for (; a < r.parts.length; a++) i.parts.push(m(r.parts[a], t));
      } else {
        var s = [];for (a = 0; a < r.parts.length; a++) s.push(m(r.parts[a], t));o[r.id] = { id: r.id, refs: 1, parts: s };
      }
    }
  }function d(n, t) {
    for (var e = [], o = {}, r = 0; r < n.length; r++) {
      var i = n[r],
          a = t.base ? i[0] + t.base : i[0],
          s = { css: i[1], media: i[2], sourceMap: i[3] };o[a] ? o[a].parts.push(s) : e.push(o[a] = { id: a, parts: [s] });
    }return e;
  }function u(n, t) {
    var e = i(n.insertInto);if (!e) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o = l[l.length - 1];if ("top" === n.insertAt) o ? o.nextSibling ? e.insertBefore(t, o.nextSibling) : e.appendChild(t) : e.insertBefore(t, e.firstChild), l.push(t);else if ("bottom" === n.insertAt) e.appendChild(t);else {
      if ("object" != typeof n.insertAt || !n.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r = i(n.insertAt.before, e);e.insertBefore(t, r);
    }
  }function p(n) {
    if (null === n.parentNode) return !1;n.parentNode.removeChild(n);var t = l.indexOf(n);t >= 0 && l.splice(t, 1);
  }function h(n) {
    var t = document.createElement("style");if (void 0 === n.attrs.type && (n.attrs.type = "text/css"), void 0 === n.attrs.nonce) {
      var o = function () {
        0;return e.nc;
      }();o && (n.attrs.nonce = o);
    }return b(t, n.attrs), u(n, t), t;
  }function b(n, t) {
    Object.keys(t).forEach(function (e) {
      n.setAttribute(e, t[e]);
    });
  }function m(n, t) {
    var e, o, r, i;if (t.transform && n.css) {
      if (!(i = t.transform(n.css))) return function () {};n.css = i;
    }if (t.singleton) {
      var l = s++;e = a || (a = h(t)), o = x.bind(null, e, l, !1), r = x.bind(null, e, l, !0);
    } else n.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (e = function (n) {
      var t = document.createElement("link");return void 0 === n.attrs.type && (n.attrs.type = "text/css"), n.attrs.rel = "stylesheet", b(t, n.attrs), u(n, t), t;
    }(t), o = function (n, t, e) {
      var o = e.css,
          r = e.sourceMap,
          i = void 0 === t.convertToAbsoluteUrls && r;(t.convertToAbsoluteUrls || i) && (o = c(o));r && (o += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");var a = new Blob([o], { type: "text/css" }),
          s = n.href;n.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s);
    }.bind(null, e, t), r = function () {
      p(e), e.href && URL.revokeObjectURL(e.href);
    }) : (e = h(t), o = function (n, t) {
      var e = t.css,
          o = t.media;o && n.setAttribute("media", o);if (n.styleSheet) n.styleSheet.cssText = e;else {
        for (; n.firstChild;) n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e));
      }
    }.bind(null, e), r = function () {
      p(e);
    });return o(n), function (t) {
      if (t) {
        if (t.css === n.css && t.media === n.media && t.sourceMap === n.sourceMap) return;o(n = t);
      } else r();
    };
  }n.exports = function (n, t) {
    if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");(t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = r()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");var e = d(n, t);return f(e, t), function (n) {
      for (var r = [], i = 0; i < e.length; i++) {
        var a = e[i];(s = o[a.id]).refs--, r.push(s);
      }n && f(d(n, t), t);for (i = 0; i < r.length; i++) {
        var s;if (0 === (s = r[i]).refs) {
          for (var l = 0; l < s.parts.length; l++) s.parts[l]();delete o[s.id];
        }
      }
    };
  };var g = function () {
    var n = [];return function (t, e) {
      return n[t] = e, n.filter(Boolean).join("\n");
    };
  }();function x(n, t, e, o) {
    var r = e ? "" : o.css;if (n.styleSheet) n.styleSheet.cssText = g(t, r);else {
      var i = document.createTextNode(r),
          a = n.childNodes;a[t] && n.removeChild(a[t]), a.length ? n.insertBefore(i, a[t]) : n.appendChild(i);
    }
  }
}, function (n, t) {
  n.exports = function (n) {
    var t = "undefined" != typeof window && window.location;if (!t) throw new Error("fixUrls requires window.location");if (!n || "string" != typeof n) return n;var e = t.protocol + "//" + t.host,
        o = e + t.pathname.replace(/\/[^\/]*$/, "/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (n, t) {
      var r,
          i = t.trim().replace(/^"(.*)"$/, function (n, t) {
        return t;
      }).replace(/^'(.*)'$/, function (n, t) {
        return t;
      });return (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? n : (r = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? e + i : o + i.replace(/^\.\//, ""), "url(" + JSON.stringify(r) + ")")
      );
    });
  };
}]);
},{}]},{},["js/bundle.js"], null)
//# sourceMappingURL=/bundle.ca9514b6.map