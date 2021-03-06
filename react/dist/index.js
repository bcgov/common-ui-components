module.exports = (function(e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var o = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  return (
    (r.m = e),
    (r.c = t),
    (r.d = function(e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (r.t = function(e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var o in e)
          r.d(
            n,
            o,
            function(t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (r.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return r.d(t, 'a', t), t;
    }),
    (r.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ''),
    r((r.s = 3))
  );
})([
  function(e, t, r) {
    'use strict';
    e.exports = r(1);
  },
  function(e, t, r) {
    'use strict';
    /** @license React v16.5.2
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var n = r(2),
      o = 'function' == typeof Symbol && Symbol.for,
      u = o ? Symbol.for('react.element') : 60103,
      i = o ? Symbol.for('react.portal') : 60106,
      l = o ? Symbol.for('react.fragment') : 60107,
      c = o ? Symbol.for('react.strict_mode') : 60108,
      a = o ? Symbol.for('react.profiler') : 60114,
      f = o ? Symbol.for('react.provider') : 60109,
      p = o ? Symbol.for('react.context') : 60110,
      s = o ? Symbol.for('react.async_mode') : 60111,
      y = o ? Symbol.for('react.forward_ref') : 60112;
    o && Symbol.for('react.placeholder');
    var d = 'function' == typeof Symbol && Symbol.iterator;
    function b(e) {
      for (
        var t = arguments.length - 1,
          r = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
          n = 0;
        n < t;
        n++
      )
        r += '&args[]=' + encodeURIComponent(arguments[n + 1]);
      !(function(e, t, r, n, o, u, i, l) {
        if (!e) {
          if (((e = void 0), void 0 === t))
            e = Error(
              'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
            );
          else {
            var c = [r, n, o, u, i, l],
              a = 0;
            (e = Error(
              t.replace(/%s/g, function() {
                return c[a++];
              })
            )).name = 'Invariant Violation';
          }
          throw ((e.framesToPop = 1), e);
        }
      })(
        !1,
        'Minified React error #' +
          e +
          '; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ',
        r
      );
    }
    var v = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {},
      },
      m = {};
    function h(e, t, r) {
      (this.props = e),
        (this.context = t),
        (this.refs = m),
        (this.updater = r || v);
    }
    function g() {}
    function _(e, t, r) {
      (this.props = e),
        (this.context = t),
        (this.refs = m),
        (this.updater = r || v);
    }
    (h.prototype.isReactComponent = {}),
      (h.prototype.setState = function(e, t) {
        'object' != typeof e && 'function' != typeof e && null != e && b('85'),
          this.updater.enqueueSetState(this, e, t, 'setState');
      }),
      (h.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
      }),
      (g.prototype = h.prototype);
    var O = (_.prototype = new g());
    (O.constructor = _), n(O, h.prototype), (O.isPureReactComponent = !0);
    var j = { current: null, currentDispatcher: null },
      S = Object.prototype.hasOwnProperty,
      w = { key: !0, ref: !0, __self: !0, __source: !0 };
    function x(e, t, r) {
      var n = void 0,
        o = {},
        i = null,
        l = null;
      if (null != t)
        for (n in (void 0 !== t.ref && (l = t.ref),
        void 0 !== t.key && (i = '' + t.key),
        t))
          S.call(t, n) && !w.hasOwnProperty(n) && (o[n] = t[n]);
      var c = arguments.length - 2;
      if (1 === c) o.children = r;
      else if (1 < c) {
        for (var a = Array(c), f = 0; f < c; f++) a[f] = arguments[f + 2];
        o.children = a;
      }
      if (e && e.defaultProps)
        for (n in (c = e.defaultProps)) void 0 === o[n] && (o[n] = c[n]);
      return {
        $$typeof: u,
        type: e,
        key: i,
        ref: l,
        props: o,
        _owner: j.current,
      };
    }
    function P(e) {
      return 'object' == typeof e && null !== e && e.$$typeof === u;
    }
    var k = /\/+/g,
      E = [];
    function $(e, t, r, n) {
      if (E.length) {
        var o = E.pop();
        return (
          (o.result = e),
          (o.keyPrefix = t),
          (o.func = r),
          (o.context = n),
          (o.count = 0),
          o
        );
      }
      return { result: e, keyPrefix: t, func: r, context: n, count: 0 };
    }
    function C(e) {
      (e.result = null),
        (e.keyPrefix = null),
        (e.func = null),
        (e.context = null),
        (e.count = 0),
        10 > E.length && E.push(e);
    }
    function R(e, t, r) {
      return null == e
        ? 0
        : (function e(t, r, n, o) {
            var l = typeof t;
            ('undefined' !== l && 'boolean' !== l) || (t = null);
            var c = !1;
            if (null === t) c = !0;
            else
              switch (l) {
                case 'string':
                case 'number':
                  c = !0;
                  break;
                case 'object':
                  switch (t.$$typeof) {
                    case u:
                    case i:
                      c = !0;
                  }
              }
            if (c) return n(o, t, '' === r ? '.' + A(t, 0) : r), 1;
            if (((c = 0), (r = '' === r ? '.' : r + ':'), Array.isArray(t)))
              for (var a = 0; a < t.length; a++) {
                var f = r + A((l = t[a]), a);
                c += e(l, f, n, o);
              }
            else if (
              ((f =
                null === t || 'object' != typeof t
                  ? null
                  : 'function' == typeof (f = (d && t[d]) || t['@@iterator'])
                    ? f
                    : null),
              'function' == typeof f)
            )
              for (t = f.call(t), a = 0; !(l = t.next()).done; )
                c += e((l = l.value), (f = r + A(l, a++)), n, o);
            else
              'object' === l &&
                b(
                  '31',
                  '[object Object]' == (n = '' + t)
                    ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                    : n,
                  ''
                );
            return c;
          })(e, '', t, r);
    }
    function A(e, t) {
      return 'object' == typeof e && null !== e && null != e.key
        ? (function(e) {
            var t = { '=': '=0', ':': '=2' };
            return (
              '$' +
              ('' + e).replace(/[=:]/g, function(e) {
                return t[e];
              })
            );
          })(e.key)
        : t.toString(36);
    }
    function M(e, t) {
      e.func.call(e.context, t, e.count++);
    }
    function T(e, t, r) {
      var n = e.result,
        o = e.keyPrefix;
      (e = e.func.call(e.context, t, e.count++)),
        Array.isArray(e)
          ? q(e, n, r, function(e) {
              return e;
            })
          : null != e &&
            (P(e) &&
              (e = (function(e, t) {
                return {
                  $$typeof: u,
                  type: e.type,
                  key: t,
                  ref: e.ref,
                  props: e.props,
                  _owner: e._owner,
                };
              })(
                e,
                o +
                  (!e.key || (t && t.key === e.key)
                    ? ''
                    : ('' + e.key).replace(k, '$&/') + '/') +
                  r
              )),
            n.push(e));
    }
    function q(e, t, r, n, o) {
      var u = '';
      null != r && (u = ('' + r).replace(k, '$&/') + '/'),
        R(e, T, (t = $(t, u, n, o))),
        C(t);
    }
    var N = {
        Children: {
          map: function(e, t, r) {
            if (null == e) return e;
            var n = [];
            return q(e, n, null, t, r), n;
          },
          forEach: function(e, t, r) {
            if (null == e) return e;
            R(e, M, (t = $(null, null, t, r))), C(t);
          },
          count: function(e) {
            return R(
              e,
              function() {
                return null;
              },
              null
            );
          },
          toArray: function(e) {
            var t = [];
            return (
              q(e, t, null, function(e) {
                return e;
              }),
              t
            );
          },
          only: function(e) {
            return P(e) || b('143'), e;
          },
        },
        createRef: function() {
          return { current: null };
        },
        Component: h,
        PureComponent: _,
        createContext: function(e, t) {
          return (
            void 0 === t && (t = null),
            ((e = {
              $$typeof: p,
              _calculateChangedBits: t,
              _currentValue: e,
              _currentValue2: e,
              Provider: null,
              Consumer: null,
              unstable_read: null,
            }).Provider = { $$typeof: f, _context: e }),
            (e.Consumer = e),
            (e.unstable_read = function(e, t) {
              var r = j.currentDispatcher;
              return null === r && b('277'), r.readContext(e, t);
            }.bind(null, e)),
            e
          );
        },
        forwardRef: function(e) {
          return { $$typeof: y, render: e };
        },
        Fragment: l,
        StrictMode: c,
        unstable_AsyncMode: s,
        unstable_Profiler: a,
        createElement: x,
        cloneElement: function(e, t, r) {
          (null === e || void 0 === e) && b('267', e);
          var o = void 0,
            i = n({}, e.props),
            l = e.key,
            c = e.ref,
            a = e._owner;
          if (null != t) {
            void 0 !== t.ref && ((c = t.ref), (a = j.current)),
              void 0 !== t.key && (l = '' + t.key);
            var f = void 0;
            for (o in (e.type &&
              e.type.defaultProps &&
              (f = e.type.defaultProps),
            t))
              S.call(t, o) &&
                !w.hasOwnProperty(o) &&
                (i[o] = void 0 === t[o] && void 0 !== f ? f[o] : t[o]);
          }
          if (1 === (o = arguments.length - 2)) i.children = r;
          else if (1 < o) {
            f = Array(o);
            for (var p = 0; p < o; p++) f[p] = arguments[p + 2];
            i.children = f;
          }
          return {
            $$typeof: u,
            type: e.type,
            key: l,
            ref: c,
            props: i,
            _owner: a,
          };
        },
        createFactory: function(e) {
          var t = x.bind(null, e);
          return (t.type = e), t;
        },
        isValidElement: P,
        version: '16.5.2',
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
          ReactCurrentOwner: j,
          assign: n,
        },
      },
      U = { default: N },
      I = (U && N) || U;
    e.exports = I.default || I;
  },
  function(e, t, r) {
    'use strict';
    /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var n =
        Object.getOwnPropertySymbols,
      o = Object.prototype.hasOwnProperty,
      u = Object.prototype.propertyIsEnumerable;
    e.exports = (function() {
      try {
        if (!Object.assign) return !1;
        var e = new String('abc');
        if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0]))
          return !1;
        for (var t = {}, r = 0; r < 10; r++)
          t['_' + String.fromCharCode(r)] = r;
        if (
          '0123456789' !==
          Object.getOwnPropertyNames(t)
            .map(function(e) {
              return t[e];
            })
            .join('')
        )
          return !1;
        var n = {};
        return (
          'abcdefghijklmnopqrst'.split('').forEach(function(e) {
            n[e] = e;
          }),
          'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, n)).join('')
        );
      } catch (e) {
        return !1;
      }
    })()
      ? Object.assign
      : function(e, t) {
          for (
            var r,
              i,
              l = (function(e) {
                if (null === e || void 0 === e)
                  throw new TypeError(
                    'Object.assign cannot be called with null or undefined'
                  );
                return Object(e);
              })(e),
              c = 1;
            c < arguments.length;
            c++
          ) {
            for (var a in (r = Object(arguments[c])))
              o.call(r, a) && (l[a] = r[a]);
            if (n) {
              i = n(r);
              for (var f = 0; f < i.length; f++)
                u.call(r, i[f]) && (l[i[f]] = r[i[f]]);
            }
          }
          return l;
        };
  },
  function(e, t, r) {
    'use strict';
    r.r(t);
    var n = r(0),
      o = r.n(n);
    function u(e) {
      return (u =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            })(e);
    }
    function i(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    function l(e) {
      return (l = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function c(e, t) {
      return (c =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function a(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    var f = (function(e) {
      function t() {
        var e, r;
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        })(this, t);
        for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
          o[i] = arguments[i];
        return (
          (function(e, t, r) {
            t in e
              ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = r);
          })(
            a(
              a(
                (r = (function(e, t) {
                  return !t || ('object' !== u(t) && 'function' != typeof t)
                    ? a(e)
                    : t;
                })(this, (e = l(t)).call.apply(e, [this].concat(o))))
              )
            ),
            'state',
            { a: !0 }
          ),
          r
        );
      }
      return (
        (function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && c(e, t);
        })(t, n['Component']),
        (function(e, t, r) {
          t && i(e.prototype, t), r && i(e, r);
        })(t, [
          {
            key: 'render',
            value: function() {
              return (
                console.log(this.state.a),
                o.a.createElement(
                  'div',
                  { className: 'hexgrid-outer' },
                  o.a.createElement(
                    'div',
                    { className: 'hexgrid' },
                    o.a.createElement('div', null, '1'),
                    o.a.createElement('div', null, '1'),
                    o.a.createElement('div', null, '1'),
                    o.a.createElement('div', null, '1'),
                    o.a.createElement('div', null, '1')
                  )
                )
              );
            },
          },
        ]),
        t
      );
    })();
    r.d(t, 'x1', function() {
      return p;
    }),
      r.d(t, 'x2', function() {
        return s;
      }),
      r.d(t, 'Hexgrid', function() {
        return f;
      });
    var p = o.a.createElement('div', null),
      s = o.a.createElement('div', null, 'test');
  },
]);
//# sourceMappingURL=index.js.map
