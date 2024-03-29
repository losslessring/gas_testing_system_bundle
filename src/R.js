(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = global || self, factory(global.R = {}));
})(this, function(exports2) {
  "use strict";
  var F = function F2() {
    return false;
  };
  var T = function T2() {
    return true;
  };
  var __ = {
    "@@functional/placeholder": true
  };
  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  function _isPlaceholder(a) {
    return a != null && _typeof(a) === "object" && a["@@functional/placeholder"] === true;
  }
  function _curry1(fn) {
    return function f1(a) {
      if (arguments.length === 0 || _isPlaceholder(a)) {
        return f1;
      } else {
        return fn.apply(this, arguments);
      }
    };
  }
  function _curry2(fn) {
    return function f2(a, b) {
      switch (arguments.length) {
        case 0:
          return f2;
        case 1:
          return _isPlaceholder(a) ? f2 : _curry1(function(_b) {
            return fn(a, _b);
          });
        default:
          return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function(_a) {
            return fn(_a, b);
          }) : _isPlaceholder(b) ? _curry1(function(_b) {
            return fn(a, _b);
          }) : fn(a, b);
      }
    };
  }
  var add = _curry2(function add2(a, b) {
    return Number(a) + Number(b);
  });
  function _concat(set1, set2) {
    set1 = set1 || [];
    set2 = set2 || [];
    var idx;
    var len1 = set1.length;
    var len2 = set2.length;
    var result = [];
    idx = 0;
    while (idx < len1) {
      result[result.length] = set1[idx];
      idx += 1;
    }
    idx = 0;
    while (idx < len2) {
      result[result.length] = set2[idx];
      idx += 1;
    }
    return result;
  }
  function _arity(n, fn) {
    switch (n) {
      case 0:
        return function() {
          return fn.apply(this, arguments);
        };
      case 1:
        return function(a0) {
          return fn.apply(this, arguments);
        };
      case 2:
        return function(a0, a1) {
          return fn.apply(this, arguments);
        };
      case 3:
        return function(a0, a1, a2) {
          return fn.apply(this, arguments);
        };
      case 4:
        return function(a0, a1, a2, a3) {
          return fn.apply(this, arguments);
        };
      case 5:
        return function(a0, a1, a2, a3, a4) {
          return fn.apply(this, arguments);
        };
      case 6:
        return function(a0, a1, a2, a3, a4, a5) {
          return fn.apply(this, arguments);
        };
      case 7:
        return function(a0, a1, a2, a3, a4, a5, a6) {
          return fn.apply(this, arguments);
        };
      case 8:
        return function(a0, a1, a2, a3, a4, a5, a6, a7) {
          return fn.apply(this, arguments);
        };
      case 9:
        return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
          return fn.apply(this, arguments);
        };
      case 10:
        return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
          return fn.apply(this, arguments);
        };
      default:
        throw new Error("First argument to _arity must be a non-negative integer no greater than ten");
    }
  }
  function _curryN(length2, received, fn) {
    return function() {
      var combined = [];
      var argsIdx = 0;
      var left = length2;
      var combinedIdx = 0;
      while (combinedIdx < received.length || argsIdx < arguments.length) {
        var result;
        if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {
          result = received[combinedIdx];
        } else {
          result = arguments[argsIdx];
          argsIdx += 1;
        }
        combined[combinedIdx] = result;
        if (!_isPlaceholder(result)) {
          left -= 1;
        }
        combinedIdx += 1;
      }
      return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length2, combined, fn));
    };
  }
  var curryN = _curry2(function curryN2(length2, fn) {
    if (length2 === 1) {
      return _curry1(fn);
    }
    return _arity(length2, _curryN(length2, [], fn));
  });
  var addIndex = _curry1(function addIndex2(fn) {
    return curryN(fn.length, function() {
      var idx = 0;
      var origFn = arguments[0];
      var list = arguments[arguments.length - 1];
      var args = Array.prototype.slice.call(arguments, 0);
      args[0] = function() {
        var result = origFn.apply(this, _concat(arguments, [idx, list]));
        idx += 1;
        return result;
      };
      return fn.apply(this, args);
    });
  });
  var addIndexRight = _curry1(function addIndex2(fn) {
    return curryN(fn.length, function() {
      var origFn = arguments[0];
      var list = arguments[arguments.length - 1];
      var idx = list.length - 1;
      var args = Array.prototype.slice.call(arguments, 0);
      args[0] = function() {
        var result = origFn.apply(this, _concat(arguments, [idx, list]));
        idx -= 1;
        return result;
      };
      return fn.apply(this, args);
    });
  });
  function _curry3(fn) {
    return function f3(a, b, c) {
      switch (arguments.length) {
        case 0:
          return f3;
        case 1:
          return _isPlaceholder(a) ? f3 : _curry2(function(_b, _c) {
            return fn(a, _b, _c);
          });
        case 2:
          return _isPlaceholder(a) && _isPlaceholder(b) ? f3 : _isPlaceholder(a) ? _curry2(function(_a, _c) {
            return fn(_a, b, _c);
          }) : _isPlaceholder(b) ? _curry2(function(_b, _c) {
            return fn(a, _b, _c);
          }) : _curry1(function(_c) {
            return fn(a, b, _c);
          });
        default:
          return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3 : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function(_a, _b) {
            return fn(_a, _b, c);
          }) : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function(_a, _c) {
            return fn(_a, b, _c);
          }) : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function(_b, _c) {
            return fn(a, _b, _c);
          }) : _isPlaceholder(a) ? _curry1(function(_a) {
            return fn(_a, b, c);
          }) : _isPlaceholder(b) ? _curry1(function(_b) {
            return fn(a, _b, c);
          }) : _isPlaceholder(c) ? _curry1(function(_c) {
            return fn(a, b, _c);
          }) : fn(a, b, c);
      }
    };
  }
  var adjust = _curry3(function adjust2(idx, fn, list) {
    var len = list.length;
    if (idx >= len || idx < -len) {
      return list;
    }
    var _idx = (len + idx) % len;
    var _list = _concat(list);
    _list[_idx] = fn(list[_idx]);
    return _list;
  });
  var _isArray = Array.isArray || function _isArray2(val) {
    return val != null && val.length >= 0 && Object.prototype.toString.call(val) === "[object Array]";
  };
  function _isTransformer(obj) {
    return obj != null && typeof obj["@@transducer/step"] === "function";
  }
  function _dispatchable(methodNames, transducerCreator, fn) {
    return function() {
      if (arguments.length === 0) {
        return fn();
      }
      var obj = arguments[arguments.length - 1];
      if (!_isArray(obj)) {
        var idx = 0;
        while (idx < methodNames.length) {
          if (typeof obj[methodNames[idx]] === "function") {
            return obj[methodNames[idx]].apply(obj, Array.prototype.slice.call(arguments, 0, -1));
          }
          idx += 1;
        }
        if (_isTransformer(obj)) {
          var transducer = transducerCreator.apply(null, Array.prototype.slice.call(arguments, 0, -1));
          return transducer(obj);
        }
      }
      return fn.apply(this, arguments);
    };
  }
  function _reduced(x) {
    return x && x["@@transducer/reduced"] ? x : {
      "@@transducer/value": x,
      "@@transducer/reduced": true
    };
  }
  var _xfBase = {
    init: function init2() {
      return this.xf["@@transducer/init"]();
    },
    result: function result(_result) {
      return this.xf["@@transducer/result"](_result);
    }
  };
  function XAll(f, xf) {
    this.xf = xf;
    this.f = f;
    this.all = true;
  }
  XAll.prototype["@@transducer/init"] = _xfBase.init;
  XAll.prototype["@@transducer/result"] = function(result) {
    if (this.all) {
      result = this.xf["@@transducer/step"](result, true);
    }
    return this.xf["@@transducer/result"](result);
  };
  XAll.prototype["@@transducer/step"] = function(result, input) {
    if (!this.f(input)) {
      this.all = false;
      result = _reduced(this.xf["@@transducer/step"](result, false));
    }
    return result;
  };
  function _xall(f) {
    return function(xf) {
      return new XAll(f, xf);
    };
  }
  var all = _curry2(_dispatchable(["all"], _xall, function all2(fn, list) {
    var idx = 0;
    while (idx < list.length) {
      if (!fn(list[idx])) {
        return false;
      }
      idx += 1;
    }
    return true;
  }));
  function _arrayFromIterator(iter) {
    var list = [];
    var next;
    while (!(next = iter.next()).done) {
      list.push(next.value);
    }
    return list;
  }
  function _includesWith(pred, x, list) {
    var idx = 0;
    var len = list.length;
    while (idx < len) {
      if (pred(x, list[idx])) {
        return true;
      }
      idx += 1;
    }
    return false;
  }
  function _functionName(f) {
    var match2 = String(f).match(/^function (\w*)/);
    return match2 == null ? "" : match2[1];
  }
  function _has(prop2, obj) {
    return Object.prototype.hasOwnProperty.call(obj, prop2);
  }
  function _objectIs(a, b) {
    if (a === b) {
      return a !== 0 || 1 / a === 1 / b;
    } else {
      return a !== a && b !== b;
    }
  }
  var _objectIs$1 = typeof Object.is === "function" ? Object.is : _objectIs;
  var toString = Object.prototype.toString;
  var _isArguments = function() {
    return toString.call(arguments) === "[object Arguments]" ? function _isArguments2(x) {
      return toString.call(x) === "[object Arguments]";
    } : function _isArguments2(x) {
      return _has("callee", x);
    };
  }();
  var hasEnumBug = !{
    toString: null
  }.propertyIsEnumerable("toString");
  var nonEnumerableProps = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
  var hasArgsEnumBug = function() {
    return arguments.propertyIsEnumerable("length");
  }();
  var contains = function contains2(list, item) {
    var idx = 0;
    while (idx < list.length) {
      if (list[idx] === item) {
        return true;
      }
      idx += 1;
    }
    return false;
  };
  var keys = typeof Object.keys === "function" && !hasArgsEnumBug ? _curry1(function keys2(obj) {
    return Object(obj) !== obj ? [] : Object.keys(obj);
  }) : _curry1(function keys2(obj) {
    if (Object(obj) !== obj) {
      return [];
    }
    var prop2, nIdx;
    var ks = [];
    var checkArgsLength = hasArgsEnumBug && _isArguments(obj);
    for (prop2 in obj) {
      if (_has(prop2, obj) && (!checkArgsLength || prop2 !== "length")) {
        ks[ks.length] = prop2;
      }
    }
    if (hasEnumBug) {
      nIdx = nonEnumerableProps.length - 1;
      while (nIdx >= 0) {
        prop2 = nonEnumerableProps[nIdx];
        if (_has(prop2, obj) && !contains(ks, prop2)) {
          ks[ks.length] = prop2;
        }
        nIdx -= 1;
      }
    }
    return ks;
  });
  var type = _curry1(function type2(val) {
    return val === null ? "Null" : val === void 0 ? "Undefined" : Object.prototype.toString.call(val).slice(8, -1);
  });
  function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
    var a = _arrayFromIterator(aIterator);
    var b = _arrayFromIterator(bIterator);
    function eq(_a, _b) {
      return _equals(_a, _b, stackA.slice(), stackB.slice());
    }
    return !_includesWith(function(b2, aItem) {
      return !_includesWith(eq, aItem, b2);
    }, b, a);
  }
  function _equals(a, b, stackA, stackB) {
    if (_objectIs$1(a, b)) {
      return true;
    }
    var typeA = type(a);
    if (typeA !== type(b)) {
      return false;
    }
    if (typeof a["fantasy-land/equals"] === "function" || typeof b["fantasy-land/equals"] === "function") {
      return typeof a["fantasy-land/equals"] === "function" && a["fantasy-land/equals"](b) && typeof b["fantasy-land/equals"] === "function" && b["fantasy-land/equals"](a);
    }
    if (typeof a.equals === "function" || typeof b.equals === "function") {
      return typeof a.equals === "function" && a.equals(b) && typeof b.equals === "function" && b.equals(a);
    }
    switch (typeA) {
      case "Arguments":
      case "Array":
      case "Object":
        if (typeof a.constructor === "function" && _functionName(a.constructor) === "Promise") {
          return a === b;
        }
        break;
      case "Boolean":
      case "Number":
      case "String":
        if (!(_typeof(a) === _typeof(b) && _objectIs$1(a.valueOf(), b.valueOf()))) {
          return false;
        }
        break;
      case "Date":
        if (!_objectIs$1(a.valueOf(), b.valueOf())) {
          return false;
        }
        break;
      case "Error":
        return a.name === b.name && a.message === b.message;
      case "RegExp":
        if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
          return false;
        }
        break;
    }
    var idx = stackA.length - 1;
    while (idx >= 0) {
      if (stackA[idx] === a) {
        return stackB[idx] === b;
      }
      idx -= 1;
    }
    switch (typeA) {
      case "Map":
        if (a.size !== b.size) {
          return false;
        }
        return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));
      case "Set":
        if (a.size !== b.size) {
          return false;
        }
        return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));
      case "Arguments":
      case "Array":
      case "Object":
      case "Boolean":
      case "Number":
      case "String":
      case "Date":
      case "Error":
      case "RegExp":
      case "Int8Array":
      case "Uint8Array":
      case "Uint8ClampedArray":
      case "Int16Array":
      case "Uint16Array":
      case "Int32Array":
      case "Uint32Array":
      case "Float32Array":
      case "Float64Array":
      case "ArrayBuffer":
        break;
      default:
        return false;
    }
    var keysA = keys(a);
    if (keysA.length !== keys(b).length) {
      return false;
    }
    var extendedStackA = stackA.concat([a]);
    var extendedStackB = stackB.concat([b]);
    idx = keysA.length - 1;
    while (idx >= 0) {
      var key = keysA[idx];
      if (!(_has(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {
        return false;
      }
      idx -= 1;
    }
    return true;
  }
  var equals = _curry2(function equals2(a, b) {
    return _equals(a, b, [], []);
  });
  function _indexOf(list, a, idx) {
    var inf, item;
    if (typeof list.indexOf === "function") {
      switch (_typeof(a)) {
        case "number":
          if (a === 0) {
            inf = 1 / a;
            while (idx < list.length) {
              item = list[idx];
              if (item === 0 && 1 / item === inf) {
                return idx;
              }
              idx += 1;
            }
            return -1;
          } else if (a !== a) {
            while (idx < list.length) {
              item = list[idx];
              if (typeof item === "number" && item !== item) {
                return idx;
              }
              idx += 1;
            }
            return -1;
          }
          return list.indexOf(a, idx);
        case "string":
        case "boolean":
        case "function":
        case "undefined":
          return list.indexOf(a, idx);
        case "object":
          if (a === null) {
            return list.indexOf(a, idx);
          }
      }
    }
    while (idx < list.length) {
      if (equals(list[idx], a)) {
        return idx;
      }
      idx += 1;
    }
    return -1;
  }
  function _includes(a, list) {
    return _indexOf(list, a, 0) >= 0;
  }
  function _map(fn, functor) {
    var idx = 0;
    var len = functor.length;
    var result = Array(len);
    while (idx < len) {
      result[idx] = fn(functor[idx]);
      idx += 1;
    }
    return result;
  }
  function _quote(s) {
    var escaped = s.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
    return '"' + escaped.replace(/"/g, '\\"') + '"';
  }
  var pad = function pad2(n) {
    return (n < 10 ? "0" : "") + n;
  };
  var _toISOString = typeof Date.prototype.toISOString === "function" ? function _toISOString2(d) {
    return d.toISOString();
  } : function _toISOString2(d) {
    return d.getUTCFullYear() + "-" + pad(d.getUTCMonth() + 1) + "-" + pad(d.getUTCDate()) + "T" + pad(d.getUTCHours()) + ":" + pad(d.getUTCMinutes()) + ":" + pad(d.getUTCSeconds()) + "." + (d.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
  };
  function _complement(f) {
    return function() {
      return !f.apply(this, arguments);
    };
  }
  function _arrayReduce(reducer, acc, list) {
    var index = 0;
    var length2 = list.length;
    while (index < length2) {
      acc = reducer(acc, list[index]);
      index += 1;
    }
    return acc;
  }
  function _filter(fn, list) {
    var idx = 0;
    var len = list.length;
    var result = [];
    while (idx < len) {
      if (fn(list[idx])) {
        result[result.length] = list[idx];
      }
      idx += 1;
    }
    return result;
  }
  function _isObject(x) {
    return Object.prototype.toString.call(x) === "[object Object]";
  }
  function XFilter(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFilter.prototype["@@transducer/init"] = _xfBase.init;
  XFilter.prototype["@@transducer/result"] = _xfBase.result;
  XFilter.prototype["@@transducer/step"] = function(result, input) {
    return this.f(input) ? this.xf["@@transducer/step"](result, input) : result;
  };
  function _xfilter(f) {
    return function(xf) {
      return new XFilter(f, xf);
    };
  }
  var filter = _curry2(_dispatchable(["fantasy-land/filter", "filter"], _xfilter, function(pred, filterable) {
    return _isObject(filterable) ? _arrayReduce(function(acc, key) {
      if (pred(filterable[key])) {
        acc[key] = filterable[key];
      }
      return acc;
    }, {}, keys(filterable)) : (
      // else
      _filter(pred, filterable)
    );
  }));
  var reject = _curry2(function reject2(pred, filterable) {
    return filter(_complement(pred), filterable);
  });
  function _toString(x, seen) {
    var recur = function recur2(y) {
      var xs = seen.concat([x]);
      return _includes(y, xs) ? "<Circular>" : _toString(y, xs);
    };
    var mapPairs = function mapPairs2(obj, keys2) {
      return _map(function(k) {
        return _quote(k) + ": " + recur(obj[k]);
      }, keys2.slice().sort());
    };
    switch (Object.prototype.toString.call(x)) {
      case "[object Arguments]":
        return "(function() { return arguments; }(" + _map(recur, x).join(", ") + "))";
      case "[object Array]":
        return "[" + _map(recur, x).concat(mapPairs(x, reject(function(k) {
          return /^\d+$/.test(k);
        }, keys(x)))).join(", ") + "]";
      case "[object Boolean]":
        return _typeof(x) === "object" ? "new Boolean(" + recur(x.valueOf()) + ")" : x.toString();
      case "[object Date]":
        return "new Date(" + (isNaN(x.valueOf()) ? recur(NaN) : _quote(_toISOString(x))) + ")";
      case "[object Map]":
        return "new Map(" + recur(Array.from(x)) + ")";
      case "[object Null]":
        return "null";
      case "[object Number]":
        return _typeof(x) === "object" ? "new Number(" + recur(x.valueOf()) + ")" : 1 / x === -Infinity ? "-0" : x.toString(10);
      case "[object Set]":
        return "new Set(" + recur(Array.from(x).sort()) + ")";
      case "[object String]":
        return _typeof(x) === "object" ? "new String(" + recur(x.valueOf()) + ")" : _quote(x);
      case "[object Undefined]":
        return "undefined";
      default:
        if (typeof x.toString === "function") {
          var repr = x.toString();
          if (repr !== "[object Object]") {
            return repr;
          }
        }
        return "{" + mapPairs(x, keys(x)).join(", ") + "}";
    }
  }
  var toString$1 = _curry1(function toString2(val) {
    return _toString(val, []);
  });
  var max = _curry2(function max2(a, b) {
    if (a === b) {
      return b;
    }
    function safeMax(x, y) {
      if (x > y !== y > x) {
        return y > x ? y : x;
      }
      return void 0;
    }
    var maxByValue = safeMax(a, b);
    if (maxByValue !== void 0) {
      return maxByValue;
    }
    var maxByType = safeMax(_typeof(a), _typeof(b));
    if (maxByType !== void 0) {
      return maxByType === _typeof(a) ? a : b;
    }
    var stringA = toString$1(a);
    var maxByStringValue = safeMax(stringA, toString$1(b));
    if (maxByStringValue !== void 0) {
      return maxByStringValue === stringA ? a : b;
    }
    return b;
  });
  function XMap(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XMap.prototype["@@transducer/init"] = _xfBase.init;
  XMap.prototype["@@transducer/result"] = _xfBase.result;
  XMap.prototype["@@transducer/step"] = function(result, input) {
    return this.xf["@@transducer/step"](result, this.f(input));
  };
  var _xmap = function _xmap2(f) {
    return function(xf) {
      return new XMap(f, xf);
    };
  };
  var map = _curry2(_dispatchable(["fantasy-land/map", "map"], _xmap, function map2(fn, functor) {
    switch (Object.prototype.toString.call(functor)) {
      case "[object Function]":
        return curryN(functor.length, function() {
          return fn.call(this, functor.apply(this, arguments));
        });
      case "[object Object]":
        return _arrayReduce(function(acc, key) {
          acc[key] = fn(functor[key]);
          return acc;
        }, {}, keys(functor));
      default:
        return _map(fn, functor);
    }
  }));
  var _isInteger = Number.isInteger || function _isInteger2(n) {
    return n << 0 === n;
  };
  function _isString(x) {
    return Object.prototype.toString.call(x) === "[object String]";
  }
  var nth = _curry2(function nth2(offset, list) {
    var idx = offset < 0 ? list.length + offset : offset;
    return _isString(list) ? list.charAt(idx) : list[idx];
  });
  var prop = _curry2(function prop2(p, obj) {
    if (obj == null) {
      return;
    }
    return _isInteger(p) ? nth(p, obj) : obj[p];
  });
  var pluck = _curry2(function pluck2(p, list) {
    return map(prop(p), list);
  });
  var _isArrayLike = _curry1(function isArrayLike(x) {
    if (_isArray(x)) {
      return true;
    }
    if (!x) {
      return false;
    }
    if (_typeof(x) !== "object") {
      return false;
    }
    if (_isString(x)) {
      return false;
    }
    if (x.length === 0) {
      return true;
    }
    if (x.length > 0) {
      return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
    }
    return false;
  });
  var symIterator = typeof Symbol !== "undefined" ? Symbol.iterator : "@@iterator";
  function _createReduce(arrayReduce, methodReduce, iterableReduce) {
    return function _reduce2(xf, acc, list) {
      if (_isArrayLike(list)) {
        return arrayReduce(xf, acc, list);
      }
      if (list == null) {
        return acc;
      }
      if (typeof list["fantasy-land/reduce"] === "function") {
        return methodReduce(xf, acc, list, "fantasy-land/reduce");
      }
      if (list[symIterator] != null) {
        return iterableReduce(xf, acc, list[symIterator]());
      }
      if (typeof list.next === "function") {
        return iterableReduce(xf, acc, list);
      }
      if (typeof list.reduce === "function") {
        return methodReduce(xf, acc, list, "reduce");
      }
      throw new TypeError("reduce: list must be array or iterable");
    };
  }
  function _xArrayReduce(xf, acc, list) {
    var idx = 0;
    var len = list.length;
    while (idx < len) {
      acc = xf["@@transducer/step"](acc, list[idx]);
      if (acc && acc["@@transducer/reduced"]) {
        acc = acc["@@transducer/value"];
        break;
      }
      idx += 1;
    }
    return xf["@@transducer/result"](acc);
  }
  var bind = _curry2(function bind2(fn, thisObj) {
    return _arity(fn.length, function() {
      return fn.apply(thisObj, arguments);
    });
  });
  function _xIterableReduce(xf, acc, iter) {
    var step = iter.next();
    while (!step.done) {
      acc = xf["@@transducer/step"](acc, step.value);
      if (acc && acc["@@transducer/reduced"]) {
        acc = acc["@@transducer/value"];
        break;
      }
      step = iter.next();
    }
    return xf["@@transducer/result"](acc);
  }
  function _xMethodReduce(xf, acc, obj, methodName) {
    return xf["@@transducer/result"](obj[methodName](bind(xf["@@transducer/step"], xf), acc));
  }
  var _xReduce = _createReduce(_xArrayReduce, _xMethodReduce, _xIterableReduce);
  function XWrap(fn) {
    this.f = fn;
  }
  XWrap.prototype["@@transducer/init"] = function() {
    throw new Error("init not implemented on XWrap");
  };
  XWrap.prototype["@@transducer/result"] = function(acc) {
    return acc;
  };
  XWrap.prototype["@@transducer/step"] = function(acc, x) {
    return this.f(acc, x);
  };
  function _xwrap(fn) {
    return new XWrap(fn);
  }
  var reduce = _curry3(function(xf, acc, list) {
    return _xReduce(typeof xf === "function" ? _xwrap(xf) : xf, acc, list);
  });
  var allPass = _curry1(function allPass2(preds) {
    return curryN(reduce(max, 0, pluck("length", preds)), function() {
      var idx = 0;
      var len = preds.length;
      while (idx < len) {
        if (!preds[idx].apply(this, arguments)) {
          return false;
        }
        idx += 1;
      }
      return true;
    });
  });
  var always = _curry1(function always2(val) {
    return function() {
      return val;
    };
  });
  var and = _curry2(function and2(a, b) {
    return a && b;
  });
  function XAny(f, xf) {
    this.xf = xf;
    this.f = f;
    this.any = false;
  }
  XAny.prototype["@@transducer/init"] = _xfBase.init;
  XAny.prototype["@@transducer/result"] = function(result) {
    if (!this.any) {
      result = this.xf["@@transducer/step"](result, false);
    }
    return this.xf["@@transducer/result"](result);
  };
  XAny.prototype["@@transducer/step"] = function(result, input) {
    if (this.f(input)) {
      this.any = true;
      result = _reduced(this.xf["@@transducer/step"](result, true));
    }
    return result;
  };
  function _xany(f) {
    return function(xf) {
      return new XAny(f, xf);
    };
  }
  var any = _curry2(_dispatchable(["any"], _xany, function any2(fn, list) {
    var idx = 0;
    while (idx < list.length) {
      if (fn(list[idx])) {
        return true;
      }
      idx += 1;
    }
    return false;
  }));
  var anyPass = _curry1(function anyPass2(preds) {
    return curryN(reduce(max, 0, pluck("length", preds)), function() {
      var idx = 0;
      var len = preds.length;
      while (idx < len) {
        if (preds[idx].apply(this, arguments)) {
          return true;
        }
        idx += 1;
      }
      return false;
    });
  });
  function _iterableReduce(reducer, acc, iter) {
    var step = iter.next();
    while (!step.done) {
      acc = reducer(acc, step.value);
      step = iter.next();
    }
    return acc;
  }
  function _methodReduce(reducer, acc, obj, methodName) {
    return obj[methodName](reducer, acc);
  }
  var _reduce = _createReduce(_arrayReduce, _methodReduce, _iterableReduce);
  var ap = _curry2(function ap2(applyF, applyX) {
    return typeof applyX["fantasy-land/ap"] === "function" ? applyX["fantasy-land/ap"](applyF) : typeof applyF.ap === "function" ? applyF.ap(applyX) : typeof applyF === "function" ? function(x) {
      return applyF(x)(applyX(x));
    } : _reduce(function(acc, f) {
      return _concat(acc, map(f, applyX));
    }, [], applyF);
  });
  function _aperture(n, list) {
    var idx = 0;
    var limit = list.length - (n - 1);
    var acc = new Array(limit >= 0 ? limit : 0);
    while (idx < limit) {
      acc[idx] = Array.prototype.slice.call(list, idx, idx + n);
      idx += 1;
    }
    return acc;
  }
  function XAperture(n, xf) {
    this.xf = xf;
    this.pos = 0;
    this.full = false;
    this.acc = new Array(n);
  }
  XAperture.prototype["@@transducer/init"] = _xfBase.init;
  XAperture.prototype["@@transducer/result"] = function(result) {
    this.acc = null;
    return this.xf["@@transducer/result"](result);
  };
  XAperture.prototype["@@transducer/step"] = function(result, input) {
    this.store(input);
    return this.full ? this.xf["@@transducer/step"](result, this.getCopy()) : result;
  };
  XAperture.prototype.store = function(input) {
    this.acc[this.pos] = input;
    this.pos += 1;
    if (this.pos === this.acc.length) {
      this.pos = 0;
      this.full = true;
    }
  };
  XAperture.prototype.getCopy = function() {
    return _concat(Array.prototype.slice.call(this.acc, this.pos), Array.prototype.slice.call(this.acc, 0, this.pos));
  };
  function _xaperture(n) {
    return function(xf) {
      return new XAperture(n, xf);
    };
  }
  var aperture = _curry2(_dispatchable([], _xaperture, _aperture));
  var append = _curry2(function append2(el, list) {
    return _concat(list, [el]);
  });
  var apply = _curry2(function apply2(fn, args) {
    return fn.apply(this, args);
  });
  var values = _curry1(function values2(obj) {
    var props2 = keys(obj);
    var len = props2.length;
    var vals = [];
    var idx = 0;
    while (idx < len) {
      vals[idx] = obj[props2[idx]];
      idx += 1;
    }
    return vals;
  });
  function mapValues(fn, obj) {
    return _isArray(obj) ? obj.map(fn) : keys(obj).reduce(function(acc, key) {
      acc[key] = fn(obj[key]);
      return acc;
    }, {});
  }
  var applySpec = _curry1(function applySpec2(spec) {
    spec = mapValues(function(v) {
      return typeof v == "function" ? v : applySpec2(v);
    }, spec);
    return curryN(reduce(max, 0, pluck("length", values(spec))), function() {
      var args = arguments;
      return mapValues(function(f) {
        return apply(f, args);
      }, spec);
    });
  });
  var applyTo = _curry2(function applyTo2(x, f) {
    return f(x);
  });
  var ascend = _curry3(function ascend2(fn, a, b) {
    var aa = fn(a);
    var bb = fn(b);
    return aa < bb ? -1 : aa > bb ? 1 : 0;
  });
  function _assoc(prop2, val, obj) {
    if (_isInteger(prop2) && _isArray(obj)) {
      var arr = [].concat(obj);
      arr[prop2] = val;
      return arr;
    }
    var result = {};
    for (var p in obj) {
      result[p] = obj[p];
    }
    result[prop2] = val;
    return result;
  }
  var isNil = _curry1(function isNil2(x) {
    return x == null;
  });
  var assocPath = _curry3(function assocPath2(path2, val, obj) {
    if (path2.length === 0) {
      return val;
    }
    var idx = path2[0];
    if (path2.length > 1) {
      var nextObj = !isNil(obj) && _has(idx, obj) && _typeof(obj[idx]) === "object" ? obj[idx] : _isInteger(path2[1]) ? [] : {};
      val = assocPath2(Array.prototype.slice.call(path2, 1), val, nextObj);
    }
    return _assoc(idx, val, obj);
  });
  var assoc = _curry3(function assoc2(prop2, val, obj) {
    return assocPath([prop2], val, obj);
  });
  var nAry = _curry2(function nAry2(n, fn) {
    switch (n) {
      case 0:
        return function() {
          return fn.call(this);
        };
      case 1:
        return function(a0) {
          return fn.call(this, a0);
        };
      case 2:
        return function(a0, a1) {
          return fn.call(this, a0, a1);
        };
      case 3:
        return function(a0, a1, a2) {
          return fn.call(this, a0, a1, a2);
        };
      case 4:
        return function(a0, a1, a2, a3) {
          return fn.call(this, a0, a1, a2, a3);
        };
      case 5:
        return function(a0, a1, a2, a3, a4) {
          return fn.call(this, a0, a1, a2, a3, a4);
        };
      case 6:
        return function(a0, a1, a2, a3, a4, a5) {
          return fn.call(this, a0, a1, a2, a3, a4, a5);
        };
      case 7:
        return function(a0, a1, a2, a3, a4, a5, a6) {
          return fn.call(this, a0, a1, a2, a3, a4, a5, a6);
        };
      case 8:
        return function(a0, a1, a2, a3, a4, a5, a6, a7) {
          return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7);
        };
      case 9:
        return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
          return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8);
        };
      case 10:
        return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
          return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
        };
      default:
        throw new Error("First argument to nAry must be a non-negative integer no greater than ten");
    }
  });
  var binary = _curry1(function binary2(fn) {
    return nAry(2, fn);
  });
  function _isFunction(x) {
    var type2 = Object.prototype.toString.call(x);
    return type2 === "[object Function]" || type2 === "[object AsyncFunction]" || type2 === "[object GeneratorFunction]" || type2 === "[object AsyncGeneratorFunction]";
  }
  var liftN = _curry2(function liftN2(arity, fn) {
    var lifted = curryN(arity, fn);
    return curryN(arity, function() {
      return _arrayReduce(ap, map(lifted, arguments[0]), Array.prototype.slice.call(arguments, 1));
    });
  });
  var lift = _curry1(function lift2(fn) {
    return liftN(fn.length, fn);
  });
  var both = _curry2(function both2(f, g) {
    return _isFunction(f) ? function _both() {
      return f.apply(this, arguments) && g.apply(this, arguments);
    } : lift(and)(f, g);
  });
  var call = _curry1(function call2(fn) {
    return fn.apply(this, Array.prototype.slice.call(arguments, 1));
  });
  function _makeFlat(recursive) {
    return function flatt(list) {
      var value, jlen, j;
      var result = [];
      var idx = 0;
      var ilen = list.length;
      while (idx < ilen) {
        if (_isArrayLike(list[idx])) {
          value = recursive ? flatt(list[idx]) : list[idx];
          j = 0;
          jlen = value.length;
          while (j < jlen) {
            result[result.length] = value[j];
            j += 1;
          }
        } else {
          result[result.length] = list[idx];
        }
        idx += 1;
      }
      return result;
    };
  }
  function _forceReduced(x) {
    return {
      "@@transducer/value": x,
      "@@transducer/reduced": true
    };
  }
  var tInit = "@@transducer/init";
  var tStep = "@@transducer/step";
  var tResult = "@@transducer/result";
  function XPreservingReduced(xf) {
    this.xf = xf;
  }
  XPreservingReduced.prototype[tInit] = _xfBase.init;
  XPreservingReduced.prototype[tResult] = _xfBase.result;
  XPreservingReduced.prototype[tStep] = function(result, input) {
    var ret = this.xf[tStep](result, input);
    return ret["@@transducer/reduced"] ? _forceReduced(ret) : ret;
  };
  function XFlatCat(xf) {
    this.xf = new XPreservingReduced(xf);
  }
  XFlatCat.prototype[tInit] = _xfBase.init;
  XFlatCat.prototype[tResult] = _xfBase.result;
  XFlatCat.prototype[tStep] = function(result, input) {
    return !_isArrayLike(input) ? _xArrayReduce(this.xf, result, [input]) : _xReduce(this.xf, result, input);
  };
  var _flatCat = function _xcat(xf) {
    return new XFlatCat(xf);
  };
  function _xchain(f) {
    return function(xf) {
      return _xmap(f)(_flatCat(xf));
    };
  }
  var chain = _curry2(_dispatchable(["fantasy-land/chain", "chain"], _xchain, function chain2(fn, monad) {
    if (typeof monad === "function") {
      return function(x) {
        return fn(monad(x))(x);
      };
    }
    return _makeFlat(false)(map(fn, monad));
  }));
  var clamp = _curry3(function clamp2(min2, max2, value) {
    if (min2 > max2) {
      throw new Error("min must not be greater than max in clamp(min, max, value)");
    }
    return value < min2 ? min2 : value > max2 ? max2 : value;
  });
  function _cloneRegExp(pattern) {
    return new RegExp(pattern.source, pattern.flags ? pattern.flags : (pattern.global ? "g" : "") + (pattern.ignoreCase ? "i" : "") + (pattern.multiline ? "m" : "") + (pattern.sticky ? "y" : "") + (pattern.unicode ? "u" : "") + (pattern.dotAll ? "s" : ""));
  }
  function _clone(value, deep, map2) {
    map2 || (map2 = new _ObjectMap());
    if (_isPrimitive(value)) {
      return value;
    }
    var copy = function copy2(copiedValue) {
      var cachedCopy = map2.get(value);
      if (cachedCopy) {
        return cachedCopy;
      }
      map2.set(value, copiedValue);
      for (var key in value) {
        if (Object.prototype.hasOwnProperty.call(value, key)) {
          copiedValue[key] = deep ? _clone(value[key], true, map2) : value[key];
        }
      }
      return copiedValue;
    };
    switch (type(value)) {
      case "Object":
        return copy(Object.create(Object.getPrototypeOf(value)));
      case "Array":
        return copy([]);
      case "Date":
        return new Date(value.valueOf());
      case "RegExp":
        return _cloneRegExp(value);
      case "Int8Array":
      case "Uint8Array":
      case "Uint8ClampedArray":
      case "Int16Array":
      case "Uint16Array":
      case "Int32Array":
      case "Uint32Array":
      case "Float32Array":
      case "Float64Array":
      case "BigInt64Array":
      case "BigUint64Array":
        return value.slice();
      default:
        return value;
    }
  }
  function _isPrimitive(param) {
    var type2 = _typeof(param);
    return param == null || type2 != "object" && type2 != "function";
  }
  function _ObjectMap() {
    this.map = {};
    this.length = 0;
  }
  _ObjectMap.prototype.set = function(key, value) {
    var hashedKey = this.hash(key);
    var bucket = this.map[hashedKey];
    if (!bucket) {
      this.map[hashedKey] = bucket = [];
    }
    bucket.push([key, value]);
    this.length += 1;
  };
  _ObjectMap.prototype.hash = function(key) {
    var hashedKey = [];
    for (var value in key) {
      hashedKey.push(Object.prototype.toString.call(key[value]));
    }
    return hashedKey.join();
  };
  _ObjectMap.prototype.get = function(key) {
    if (this.length <= 180) {
      for (var p in this.map) {
        var _bucket = this.map[p];
        for (var i = 0; i < _bucket.length; i += 1) {
          var element = _bucket[i];
          if (element[0] === key) {
            return element[1];
          }
        }
      }
      return;
    }
    var hashedKey = this.hash(key);
    var bucket = this.map[hashedKey];
    if (!bucket) {
      return;
    }
    for (var _i = 0; _i < bucket.length; _i += 1) {
      var _element = bucket[_i];
      if (_element[0] === key) {
        return _element[1];
      }
    }
  };
  var clone = _curry1(function clone2(value) {
    return value != null && typeof value.clone === "function" ? value.clone() : _clone(value, true);
  });
  var collectBy = _curry2(function collectBy2(fn, list) {
    var group = _reduce(function(o2, x) {
      var tag2 = fn(x);
      if (o2[tag2] === void 0) {
        o2[tag2] = [];
      }
      o2[tag2].push(x);
      return o2;
    }, {}, list);
    var newList = [];
    for (var tag in group) {
      newList.push(group[tag]);
    }
    return newList;
  });
  var comparator = _curry1(function comparator2(pred) {
    return function(a, b) {
      return pred(a, b) ? -1 : pred(b, a) ? 1 : 0;
    };
  });
  var not = _curry1(function not2(a) {
    return !a;
  });
  var complement = lift(not);
  function _pipe(f, g) {
    return function() {
      return g.call(this, f.apply(this, arguments));
    };
  }
  function _checkForMethod(methodname, fn) {
    return function() {
      var length2 = arguments.length;
      if (length2 === 0) {
        return fn();
      }
      var obj = arguments[length2 - 1];
      return _isArray(obj) || typeof obj[methodname] !== "function" ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length2 - 1));
    };
  }
  var slice = _curry3(_checkForMethod("slice", function slice2(fromIndex, toIndex, list) {
    return Array.prototype.slice.call(list, fromIndex, toIndex);
  }));
  var tail = _curry1(_checkForMethod("tail", slice(1, Infinity)));
  function pipe() {
    if (arguments.length === 0) {
      throw new Error("pipe requires at least one argument");
    }
    return _arity(arguments[0].length, reduce(_pipe, arguments[0], tail(arguments)));
  }
  var reverse = _curry1(function reverse2(list) {
    return _isString(list) ? list.split("").reverse().join("") : Array.prototype.slice.call(list, 0).reverse();
  });
  function compose() {
    if (arguments.length === 0) {
      throw new Error("compose requires at least one argument");
    }
    return pipe.apply(this, reverse(arguments));
  }
  var head = nth(0);
  function _identity(x) {
    return x;
  }
  var identity = _curry1(_identity);
  var pipeWith = _curry2(function pipeWith2(xf, list) {
    if (list.length <= 0) {
      return identity;
    }
    var headList = head(list);
    var tailList = tail(list);
    return _arity(headList.length, function() {
      return _reduce(function(result, f) {
        return xf.call(this, f, result);
      }, headList.apply(this, arguments), tailList);
    });
  });
  var composeWith = _curry2(function composeWith2(xf, list) {
    return pipeWith.apply(this, [xf, reverse(list)]);
  });
  var concat = _curry2(function concat2(a, b) {
    if (_isArray(a)) {
      if (_isArray(b)) {
        return a.concat(b);
      }
      throw new TypeError(toString$1(b) + " is not an array");
    }
    if (_isString(a)) {
      if (_isString(b)) {
        return a + b;
      }
      throw new TypeError(toString$1(b) + " is not a string");
    }
    if (a != null && _isFunction(a["fantasy-land/concat"])) {
      return a["fantasy-land/concat"](b);
    }
    if (a != null && _isFunction(a.concat)) {
      return a.concat(b);
    }
    throw new TypeError(toString$1(a) + ' does not have a method named "concat" or "fantasy-land/concat"');
  });
  var cond = _curry1(function cond2(pairs) {
    var arity = reduce(max, 0, map(function(pair2) {
      return pair2[0].length;
    }, pairs));
    return _arity(arity, function() {
      var idx = 0;
      while (idx < pairs.length) {
        if (pairs[idx][0].apply(this, arguments)) {
          return pairs[idx][1].apply(this, arguments);
        }
        idx += 1;
      }
    });
  });
  var curry = _curry1(function curry2(fn) {
    return curryN(fn.length, fn);
  });
  var constructN = _curry2(function constructN2(n, Fn) {
    if (n > 10) {
      throw new Error("Constructor with greater than ten arguments");
    }
    if (n === 0) {
      return function() {
        return new Fn();
      };
    }
    return curry(nAry(n, function($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
      switch (n) {
        case 1:
          return new Fn($0);
        case 2:
          return new Fn($0, $1);
        case 3:
          return new Fn($0, $1, $2);
        case 4:
          return new Fn($0, $1, $2, $3);
        case 5:
          return new Fn($0, $1, $2, $3, $4);
        case 6:
          return new Fn($0, $1, $2, $3, $4, $5);
        case 7:
          return new Fn($0, $1, $2, $3, $4, $5, $6);
        case 8:
          return new Fn($0, $1, $2, $3, $4, $5, $6, $7);
        case 9:
          return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8);
        case 10:
          return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8, $9);
      }
    }));
  });
  var construct = _curry1(function construct2(Fn) {
    return constructN(Fn.length, Fn);
  });
  var converge = _curry2(function converge2(after, fns) {
    return curryN(reduce(max, 0, pluck("length", fns)), function() {
      var args = arguments;
      var context = this;
      return after.apply(context, _map(function(fn) {
        return fn.apply(context, args);
      }, fns));
    });
  });
  var count = curry(function(pred, list) {
    return _reduce(function(a, e) {
      return pred(e) ? a + 1 : a;
    }, 0, list);
  });
  function XReduceBy(valueFn, valueAcc, keyFn, xf) {
    this.valueFn = valueFn;
    this.valueAcc = valueAcc;
    this.keyFn = keyFn;
    this.xf = xf;
    this.inputs = {};
  }
  XReduceBy.prototype["@@transducer/init"] = _xfBase.init;
  XReduceBy.prototype["@@transducer/result"] = function(result) {
    var key;
    for (key in this.inputs) {
      if (_has(key, this.inputs)) {
        result = this.xf["@@transducer/step"](result, this.inputs[key]);
        if (result["@@transducer/reduced"]) {
          result = result["@@transducer/value"];
          break;
        }
      }
    }
    this.inputs = null;
    return this.xf["@@transducer/result"](result);
  };
  XReduceBy.prototype["@@transducer/step"] = function(result, input) {
    var key = this.keyFn(input);
    this.inputs[key] = this.inputs[key] || [key, _clone(this.valueAcc, false)];
    this.inputs[key][1] = this.valueFn(this.inputs[key][1], input);
    return result;
  };
  function _xreduceBy(valueFn, valueAcc, keyFn) {
    return function(xf) {
      return new XReduceBy(valueFn, valueAcc, keyFn, xf);
    };
  }
  var reduceBy = _curryN(4, [], _dispatchable([], _xreduceBy, function reduceBy2(valueFn, valueAcc, keyFn, list) {
    var xf = _xwrap(function(acc, elt) {
      var key = keyFn(elt);
      var value = valueFn(_has(key, acc) ? acc[key] : _clone(valueAcc, false), elt);
      if (value && value["@@transducer/reduced"]) {
        return _reduced(acc);
      }
      acc[key] = value;
      return acc;
    });
    return _xReduce(xf, {}, list);
  }));
  var countBy = reduceBy(function(acc, elem) {
    return acc + 1;
  }, 0);
  var dec = add(-1);
  var defaultTo = _curry2(function defaultTo2(d, v) {
    return v == null || v !== v ? d : v;
  });
  var descend = _curry3(function descend2(fn, a, b) {
    var aa = fn(a);
    var bb = fn(b);
    return aa > bb ? -1 : aa < bb ? 1 : 0;
  });
  function _Set() {
    this._nativeSet = typeof Set === "function" ? /* @__PURE__ */ new Set() : null;
    this._items = {};
  }
  _Set.prototype.add = function(item) {
    return !hasOrAdd(item, true, this);
  };
  _Set.prototype.has = function(item) {
    return hasOrAdd(item, false, this);
  };
  function hasOrAdd(item, shouldAdd, set2) {
    var type2 = _typeof(item);
    var prevSize, newSize;
    switch (type2) {
      case "string":
      case "number":
        if (item === 0 && 1 / item === -Infinity) {
          if (set2._items["-0"]) {
            return true;
          } else {
            if (shouldAdd) {
              set2._items["-0"] = true;
            }
            return false;
          }
        }
        if (set2._nativeSet !== null) {
          if (shouldAdd) {
            prevSize = set2._nativeSet.size;
            set2._nativeSet.add(item);
            newSize = set2._nativeSet.size;
            return newSize === prevSize;
          } else {
            return set2._nativeSet.has(item);
          }
        } else {
          if (!(type2 in set2._items)) {
            if (shouldAdd) {
              set2._items[type2] = {};
              set2._items[type2][item] = true;
            }
            return false;
          } else if (item in set2._items[type2]) {
            return true;
          } else {
            if (shouldAdd) {
              set2._items[type2][item] = true;
            }
            return false;
          }
        }
      case "boolean":
        if (type2 in set2._items) {
          var bIdx = item ? 1 : 0;
          if (set2._items[type2][bIdx]) {
            return true;
          } else {
            if (shouldAdd) {
              set2._items[type2][bIdx] = true;
            }
            return false;
          }
        } else {
          if (shouldAdd) {
            set2._items[type2] = item ? [false, true] : [true, false];
          }
          return false;
        }
      case "function":
        if (set2._nativeSet !== null) {
          if (shouldAdd) {
            prevSize = set2._nativeSet.size;
            set2._nativeSet.add(item);
            newSize = set2._nativeSet.size;
            return newSize === prevSize;
          } else {
            return set2._nativeSet.has(item);
          }
        } else {
          if (!(type2 in set2._items)) {
            if (shouldAdd) {
              set2._items[type2] = [item];
            }
            return false;
          }
          if (!_includes(item, set2._items[type2])) {
            if (shouldAdd) {
              set2._items[type2].push(item);
            }
            return false;
          }
          return true;
        }
      case "undefined":
        if (set2._items[type2]) {
          return true;
        } else {
          if (shouldAdd) {
            set2._items[type2] = true;
          }
          return false;
        }
      case "object":
        if (item === null) {
          if (!set2._items["null"]) {
            if (shouldAdd) {
              set2._items["null"] = true;
            }
            return false;
          }
          return true;
        }
      default:
        type2 = Object.prototype.toString.call(item);
        if (!(type2 in set2._items)) {
          if (shouldAdd) {
            set2._items[type2] = [item];
          }
          return false;
        }
        if (!_includes(item, set2._items[type2])) {
          if (shouldAdd) {
            set2._items[type2].push(item);
          }
          return false;
        }
        return true;
    }
  }
  var difference = _curry2(function difference2(first, second) {
    var out = [];
    var idx = 0;
    var firstLen = first.length;
    var secondLen = second.length;
    var toFilterOut = new _Set();
    for (var i = 0; i < secondLen; i += 1) {
      toFilterOut.add(second[i]);
    }
    while (idx < firstLen) {
      if (toFilterOut.add(first[idx])) {
        out[out.length] = first[idx];
      }
      idx += 1;
    }
    return out;
  });
  var differenceWith = _curry3(function differenceWith2(pred, first, second) {
    var out = [];
    var idx = 0;
    var firstLen = first.length;
    while (idx < firstLen) {
      if (!_includesWith(pred, first[idx], second) && !_includesWith(pred, first[idx], out)) {
        out.push(first[idx]);
      }
      idx += 1;
    }
    return out;
  });
  var remove = _curry3(function remove2(start, count2, list) {
    var result = Array.prototype.slice.call(list, 0);
    result.splice(start, count2);
    return result;
  });
  function _dissoc(prop2, obj) {
    if (obj == null) {
      return obj;
    }
    if (_isInteger(prop2) && _isArray(obj)) {
      return remove(prop2, 1, obj);
    }
    var result = {};
    for (var p in obj) {
      result[p] = obj[p];
    }
    delete result[prop2];
    return result;
  }
  function _shallowCloneObject(prop2, obj) {
    if (_isInteger(prop2) && _isArray(obj)) {
      return [].concat(obj);
    }
    var result = {};
    for (var p in obj) {
      result[p] = obj[p];
    }
    return result;
  }
  var dissocPath = _curry2(function dissocPath2(path2, obj) {
    if (obj == null) {
      return obj;
    }
    switch (path2.length) {
      case 0:
        return obj;
      case 1:
        return _dissoc(path2[0], obj);
      default:
        var head2 = path2[0];
        var tail2 = Array.prototype.slice.call(path2, 1);
        if (obj[head2] == null) {
          return _shallowCloneObject(head2, obj);
        } else {
          return assoc(head2, dissocPath2(tail2, obj[head2]), obj);
        }
    }
  });
  var dissoc = _curry2(function dissoc2(prop2, obj) {
    return dissocPath([prop2], obj);
  });
  var divide = _curry2(function divide2(a, b) {
    return a / b;
  });
  function XDrop(n, xf) {
    this.xf = xf;
    this.n = n;
  }
  XDrop.prototype["@@transducer/init"] = _xfBase.init;
  XDrop.prototype["@@transducer/result"] = _xfBase.result;
  XDrop.prototype["@@transducer/step"] = function(result, input) {
    if (this.n > 0) {
      this.n -= 1;
      return result;
    }
    return this.xf["@@transducer/step"](result, input);
  };
  function _xdrop(n) {
    return function(xf) {
      return new XDrop(n, xf);
    };
  }
  var drop = _curry2(_dispatchable(["drop"], _xdrop, function drop2(n, xs) {
    return slice(Math.max(0, n), Infinity, xs);
  }));
  function XTake(n, xf) {
    this.xf = xf;
    this.n = n;
    this.i = 0;
  }
  XTake.prototype["@@transducer/init"] = _xfBase.init;
  XTake.prototype["@@transducer/result"] = _xfBase.result;
  XTake.prototype["@@transducer/step"] = function(result, input) {
    this.i += 1;
    var ret = this.n === 0 ? result : this.xf["@@transducer/step"](result, input);
    return this.n >= 0 && this.i >= this.n ? _reduced(ret) : ret;
  };
  function _xtake(n) {
    return function(xf) {
      return new XTake(n, xf);
    };
  }
  var take = _curry2(_dispatchable(["take"], _xtake, function take2(n, xs) {
    return slice(0, n < 0 ? Infinity : n, xs);
  }));
  function dropLast(n, xs) {
    return take(n < xs.length ? xs.length - n : 0, xs);
  }
  function XDropLast(n, xf) {
    if (n <= 0) {
      return xf;
    }
    this.xf = xf;
    this.pos = 0;
    this.full = false;
    this.acc = new Array(n);
  }
  XDropLast.prototype["@@transducer/init"] = _xfBase.init;
  XDropLast.prototype["@@transducer/result"] = function(result) {
    this.acc = null;
    return this.xf["@@transducer/result"](result);
  };
  XDropLast.prototype["@@transducer/step"] = function(result, input) {
    if (this.full) {
      result = this.xf["@@transducer/step"](result, this.acc[this.pos]);
    }
    this.store(input);
    return result;
  };
  XDropLast.prototype.store = function(input) {
    this.acc[this.pos] = input;
    this.pos += 1;
    if (this.pos === this.acc.length) {
      this.pos = 0;
      this.full = true;
    }
  };
  function _xdropLast(n) {
    return function(xf) {
      return new XDropLast(n, xf);
    };
  }
  var dropLast$1 = _curry2(_dispatchable([], _xdropLast, dropLast));
  function dropLastWhile(pred, xs) {
    var idx = xs.length - 1;
    while (idx >= 0 && pred(xs[idx])) {
      idx -= 1;
    }
    return slice(0, idx + 1, xs);
  }
  function XDropLastWhile(fn, xf) {
    this.f = fn;
    this.retained = [];
    this.xf = xf;
  }
  XDropLastWhile.prototype["@@transducer/init"] = _xfBase.init;
  XDropLastWhile.prototype["@@transducer/result"] = function(result) {
    this.retained = null;
    return this.xf["@@transducer/result"](result);
  };
  XDropLastWhile.prototype["@@transducer/step"] = function(result, input) {
    return this.f(input) ? this.retain(result, input) : this.flush(result, input);
  };
  XDropLastWhile.prototype.flush = function(result, input) {
    result = _xReduce(this.xf, result, this.retained);
    this.retained = [];
    return this.xf["@@transducer/step"](result, input);
  };
  XDropLastWhile.prototype.retain = function(result, input) {
    this.retained.push(input);
    return result;
  };
  function _xdropLastWhile(fn) {
    return function(xf) {
      return new XDropLastWhile(fn, xf);
    };
  }
  var dropLastWhile$1 = _curry2(_dispatchable([], _xdropLastWhile, dropLastWhile));
  function XDropRepeatsWith(pred, xf) {
    this.xf = xf;
    this.pred = pred;
    this.lastValue = void 0;
    this.seenFirstValue = false;
  }
  XDropRepeatsWith.prototype["@@transducer/init"] = _xfBase.init;
  XDropRepeatsWith.prototype["@@transducer/result"] = _xfBase.result;
  XDropRepeatsWith.prototype["@@transducer/step"] = function(result, input) {
    var sameAsLast = false;
    if (!this.seenFirstValue) {
      this.seenFirstValue = true;
    } else if (this.pred(this.lastValue, input)) {
      sameAsLast = true;
    }
    this.lastValue = input;
    return sameAsLast ? result : this.xf["@@transducer/step"](result, input);
  };
  function _xdropRepeatsWith(pred) {
    return function(xf) {
      return new XDropRepeatsWith(pred, xf);
    };
  }
  var last = nth(-1);
  var dropRepeatsWith = _curry2(_dispatchable([], _xdropRepeatsWith, function dropRepeatsWith2(pred, list) {
    var result = [];
    var idx = 1;
    var len = list.length;
    if (len !== 0) {
      result[0] = list[0];
      while (idx < len) {
        if (!pred(last(result), list[idx])) {
          result[result.length] = list[idx];
        }
        idx += 1;
      }
    }
    return result;
  }));
  var dropRepeats = _curry1(_dispatchable([], function() {
    return _xdropRepeatsWith(equals);
  }, dropRepeatsWith(equals)));
  var eqBy = _curry3(function eqBy2(f, x, y) {
    return equals(f(x), f(y));
  });
  var dropRepeatsBy = _curry2(function(fn, list) {
    return _dispatchable([], function() {
      return _xdropRepeatsWith(eqBy(fn));
    }, dropRepeatsWith(eqBy(fn)))(list);
  });
  function XDropWhile(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XDropWhile.prototype["@@transducer/init"] = _xfBase.init;
  XDropWhile.prototype["@@transducer/result"] = _xfBase.result;
  XDropWhile.prototype["@@transducer/step"] = function(result, input) {
    if (this.f) {
      if (this.f(input)) {
        return result;
      }
      this.f = null;
    }
    return this.xf["@@transducer/step"](result, input);
  };
  function _xdropWhile(f) {
    return function(xf) {
      return new XDropWhile(f, xf);
    };
  }
  var dropWhile = _curry2(_dispatchable(["dropWhile"], _xdropWhile, function dropWhile2(pred, xs) {
    var idx = 0;
    var len = xs.length;
    while (idx < len && pred(xs[idx])) {
      idx += 1;
    }
    return slice(idx, Infinity, xs);
  }));
  var or = _curry2(function or2(a, b) {
    return a || b;
  });
  var either = _curry2(function either2(f, g) {
    return _isFunction(f) ? function _either() {
      return f.apply(this, arguments) || g.apply(this, arguments);
    } : lift(or)(f, g);
  });
  function _isTypedArray(val) {
    var type2 = Object.prototype.toString.call(val);
    return type2 === "[object Uint8ClampedArray]" || type2 === "[object Int8Array]" || type2 === "[object Uint8Array]" || type2 === "[object Int16Array]" || type2 === "[object Uint16Array]" || type2 === "[object Int32Array]" || type2 === "[object Uint32Array]" || type2 === "[object Float32Array]" || type2 === "[object Float64Array]" || type2 === "[object BigInt64Array]" || type2 === "[object BigUint64Array]";
  }
  var empty = _curry1(function empty2(x) {
    return x != null && typeof x["fantasy-land/empty"] === "function" ? x["fantasy-land/empty"]() : x != null && x.constructor != null && typeof x.constructor["fantasy-land/empty"] === "function" ? x.constructor["fantasy-land/empty"]() : x != null && typeof x.empty === "function" ? x.empty() : x != null && x.constructor != null && typeof x.constructor.empty === "function" ? x.constructor.empty() : _isArray(x) ? [] : _isString(x) ? "" : _isObject(x) ? {} : _isArguments(x) ? function() {
      return arguments;
    }() : _isTypedArray(x) ? x.constructor.from("") : void 0;
  });
  var takeLast = _curry2(function takeLast2(n, xs) {
    return drop(n >= 0 ? xs.length - n : 0, xs);
  });
  var endsWith = _curry2(function(suffix, list) {
    return equals(takeLast(suffix.length, list), suffix);
  });
  var eqProps = _curry3(function eqProps2(prop2, obj1, obj2) {
    return equals(obj1[prop2], obj2[prop2]);
  });
  var evolve = _curry2(function evolve2(transformations, object) {
    if (!_isObject(object) && !_isArray(object)) {
      return object;
    }
    var result = object instanceof Array ? [] : {};
    var transformation, key, type2;
    for (key in object) {
      transformation = transformations[key];
      type2 = _typeof(transformation);
      result[key] = type2 === "function" ? transformation(object[key]) : transformation && type2 === "object" ? evolve2(transformation, object[key]) : object[key];
    }
    return result;
  });
  function XFind(f, xf) {
    this.xf = xf;
    this.f = f;
    this.found = false;
  }
  XFind.prototype["@@transducer/init"] = _xfBase.init;
  XFind.prototype["@@transducer/result"] = function(result) {
    if (!this.found) {
      result = this.xf["@@transducer/step"](result, void 0);
    }
    return this.xf["@@transducer/result"](result);
  };
  XFind.prototype["@@transducer/step"] = function(result, input) {
    if (this.f(input)) {
      this.found = true;
      result = _reduced(this.xf["@@transducer/step"](result, input));
    }
    return result;
  };
  function _xfind(f) {
    return function(xf) {
      return new XFind(f, xf);
    };
  }
  var find = _curry2(_dispatchable(["find"], _xfind, function find2(fn, list) {
    var idx = 0;
    var len = list.length;
    while (idx < len) {
      if (fn(list[idx])) {
        return list[idx];
      }
      idx += 1;
    }
  }));
  function XFindIndex(f, xf) {
    this.xf = xf;
    this.f = f;
    this.idx = -1;
    this.found = false;
  }
  XFindIndex.prototype["@@transducer/init"] = _xfBase.init;
  XFindIndex.prototype["@@transducer/result"] = function(result) {
    if (!this.found) {
      result = this.xf["@@transducer/step"](result, -1);
    }
    return this.xf["@@transducer/result"](result);
  };
  XFindIndex.prototype["@@transducer/step"] = function(result, input) {
    this.idx += 1;
    if (this.f(input)) {
      this.found = true;
      result = _reduced(this.xf["@@transducer/step"](result, this.idx));
    }
    return result;
  };
  function _xfindIndex(f) {
    return function(xf) {
      return new XFindIndex(f, xf);
    };
  }
  var findIndex = _curry2(_dispatchable([], _xfindIndex, function findIndex2(fn, list) {
    var idx = 0;
    var len = list.length;
    while (idx < len) {
      if (fn(list[idx])) {
        return idx;
      }
      idx += 1;
    }
    return -1;
  }));
  function XFindLast(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFindLast.prototype["@@transducer/init"] = _xfBase.init;
  XFindLast.prototype["@@transducer/result"] = function(result) {
    return this.xf["@@transducer/result"](this.xf["@@transducer/step"](result, this.last));
  };
  XFindLast.prototype["@@transducer/step"] = function(result, input) {
    if (this.f(input)) {
      this.last = input;
    }
    return result;
  };
  function _xfindLast(f) {
    return function(xf) {
      return new XFindLast(f, xf);
    };
  }
  var findLast = _curry2(_dispatchable([], _xfindLast, function findLast2(fn, list) {
    var idx = list.length - 1;
    while (idx >= 0) {
      if (fn(list[idx])) {
        return list[idx];
      }
      idx -= 1;
    }
  }));
  function XFindLastIndex(f, xf) {
    this.xf = xf;
    this.f = f;
    this.idx = -1;
    this.lastIdx = -1;
  }
  XFindLastIndex.prototype["@@transducer/init"] = _xfBase.init;
  XFindLastIndex.prototype["@@transducer/result"] = function(result) {
    return this.xf["@@transducer/result"](this.xf["@@transducer/step"](result, this.lastIdx));
  };
  XFindLastIndex.prototype["@@transducer/step"] = function(result, input) {
    this.idx += 1;
    if (this.f(input)) {
      this.lastIdx = this.idx;
    }
    return result;
  };
  function _xfindLastIndex(f) {
    return function(xf) {
      return new XFindLastIndex(f, xf);
    };
  }
  var findLastIndex = _curry2(_dispatchable([], _xfindLastIndex, function findLastIndex2(fn, list) {
    var idx = list.length - 1;
    while (idx >= 0) {
      if (fn(list[idx])) {
        return idx;
      }
      idx -= 1;
    }
    return -1;
  }));
  var flatten = _curry1(_makeFlat(true));
  var flip = _curry1(function flip2(fn) {
    return curryN(fn.length, function(a, b) {
      var args = Array.prototype.slice.call(arguments, 0);
      args[0] = b;
      args[1] = a;
      return fn.apply(this, args);
    });
  });
  var forEach = _curry2(_checkForMethod("forEach", function forEach2(fn, list) {
    var len = list.length;
    var idx = 0;
    while (idx < len) {
      fn(list[idx]);
      idx += 1;
    }
    return list;
  }));
  var forEachObjIndexed = _curry2(function forEachObjIndexed2(fn, obj) {
    var keyList = keys(obj);
    var idx = 0;
    while (idx < keyList.length) {
      var key = keyList[idx];
      fn(obj[key], key, obj);
      idx += 1;
    }
    return obj;
  });
  var fromPairs = _curry1(function fromPairs2(pairs) {
    var result = {};
    var idx = 0;
    while (idx < pairs.length) {
      result[pairs[idx][0]] = pairs[idx][1];
      idx += 1;
    }
    return result;
  });
  var groupBy = _curry2(_checkForMethod("groupBy", reduceBy(function(acc, item) {
    acc.push(item);
    return acc;
  }, [])));
  var groupWith = _curry2(function(fn, list) {
    var res = [];
    var idx = 0;
    var len = list.length;
    while (idx < len) {
      var nextidx = idx + 1;
      while (nextidx < len && fn(list[nextidx - 1], list[nextidx])) {
        nextidx += 1;
      }
      res.push(list.slice(idx, nextidx));
      idx = nextidx;
    }
    return res;
  });
  var gt = _curry2(function gt2(a, b) {
    return a > b;
  });
  var gte = _curry2(function gte2(a, b) {
    return a >= b;
  });
  var hasPath = _curry2(function hasPath2(_path, obj) {
    if (_path.length === 0 || isNil(obj)) {
      return false;
    }
    var val = obj;
    var idx = 0;
    while (idx < _path.length) {
      if (!isNil(val) && _has(_path[idx], val)) {
        val = val[_path[idx]];
        idx += 1;
      } else {
        return false;
      }
    }
    return true;
  });
  var has = _curry2(function has2(prop2, obj) {
    return hasPath([prop2], obj);
  });
  var hasIn = _curry2(function hasIn2(prop2, obj) {
    if (isNil(obj)) {
      return false;
    }
    return prop2 in obj;
  });
  var identical = function identical2(a, b) {
    switch (arguments.length) {
      case 0:
        return identical2;
      case 1:
        return function() {
          return function unaryIdentical(_b) {
            switch (arguments.length) {
              case 0:
                return unaryIdentical;
              default:
                return _objectIs$1(a, _b);
            }
          };
        }();
      default:
        return _objectIs$1(a, b);
    }
  };
  var ifElse = _curry3(function ifElse2(condition, onTrue, onFalse) {
    return curryN(Math.max(condition.length, onTrue.length, onFalse.length), function _ifElse() {
      return condition.apply(this, arguments) ? onTrue.apply(this, arguments) : onFalse.apply(this, arguments);
    });
  });
  var inc = add(1);
  var includes = _curry2(_includes);
  var indexBy = reduceBy(function(acc, elem) {
    return elem;
  }, null);
  var indexOf = _curry2(function indexOf2(target, xs) {
    return typeof xs.indexOf === "function" && !_isArray(xs) ? xs.indexOf(target) : _indexOf(xs, target, 0);
  });
  var init = slice(0, -1);
  var innerJoin = _curry3(function innerJoin2(pred, xs, ys) {
    return _filter(function(x) {
      return _includesWith(pred, x, ys);
    }, xs);
  });
  var insert = _curry3(function insert2(idx, elt, list) {
    idx = idx < list.length && idx >= 0 ? idx : list.length;
    var result = Array.prototype.slice.call(list, 0);
    result.splice(idx, 0, elt);
    return result;
  });
  var insertAll = _curry3(function insertAll2(idx, elts, list) {
    idx = idx < list.length && idx >= 0 ? idx : list.length;
    return [].concat(Array.prototype.slice.call(list, 0, idx), elts, Array.prototype.slice.call(list, idx));
  });
  function XUniqBy(f, xf) {
    this.xf = xf;
    this.f = f;
    this.set = new _Set();
  }
  XUniqBy.prototype["@@transducer/init"] = _xfBase.init;
  XUniqBy.prototype["@@transducer/result"] = _xfBase.result;
  XUniqBy.prototype["@@transducer/step"] = function(result, input) {
    return this.set.add(this.f(input)) ? this.xf["@@transducer/step"](result, input) : result;
  };
  function _xuniqBy(f) {
    return function(xf) {
      return new XUniqBy(f, xf);
    };
  }
  var uniqBy = _curry2(_dispatchable([], _xuniqBy, function(fn, list) {
    var set2 = new _Set();
    var result = [];
    var idx = 0;
    var appliedItem, item;
    while (idx < list.length) {
      item = list[idx];
      appliedItem = fn(item);
      if (set2.add(appliedItem)) {
        result.push(item);
      }
      idx += 1;
    }
    return result;
  }));
  var uniq = uniqBy(identity);
  var intersection = _curry2(function intersection2(list1, list2) {
    var toKeep = new _Set();
    for (var i = 0; i < list1.length; i += 1) {
      toKeep.add(list1[i]);
    }
    return uniq(_filter(toKeep.has.bind(toKeep), list2));
  });
  var intersperse = _curry2(_checkForMethod("intersperse", function intersperse2(separator, list) {
    var out = [];
    var idx = 0;
    var length2 = list.length;
    while (idx < length2) {
      if (idx === length2 - 1) {
        out.push(list[idx]);
      } else {
        out.push(list[idx], separator);
      }
      idx += 1;
    }
    return out;
  }));
  function _objectAssign(target) {
    if (target == null) {
      throw new TypeError("Cannot convert undefined or null to object");
    }
    var output = Object(target);
    var idx = 1;
    var length2 = arguments.length;
    while (idx < length2) {
      var source = arguments[idx];
      if (source != null) {
        for (var nextKey in source) {
          if (_has(nextKey, source)) {
            output[nextKey] = source[nextKey];
          }
        }
      }
      idx += 1;
    }
    return output;
  }
  var _objectAssign$1 = typeof Object.assign === "function" ? Object.assign : _objectAssign;
  var objOf = _curry2(function objOf2(key, val) {
    var obj = {};
    obj[key] = val;
    return obj;
  });
  var _stepCatArray = {
    "@@transducer/init": Array,
    "@@transducer/step": function transducerStep(xs, x) {
      xs.push(x);
      return xs;
    },
    "@@transducer/result": _identity
  };
  var _stepCatString = {
    "@@transducer/init": String,
    "@@transducer/step": function transducerStep(a, b) {
      return a + b;
    },
    "@@transducer/result": _identity
  };
  var _stepCatObject = {
    "@@transducer/init": Object,
    "@@transducer/step": function transducerStep(result, input) {
      return _objectAssign$1(result, _isArrayLike(input) ? objOf(input[0], input[1]) : input);
    },
    "@@transducer/result": _identity
  };
  function _stepCat(obj) {
    if (_isTransformer(obj)) {
      return obj;
    }
    if (_isArrayLike(obj)) {
      return _stepCatArray;
    }
    if (typeof obj === "string") {
      return _stepCatString;
    }
    if (_typeof(obj) === "object") {
      return _stepCatObject;
    }
    throw new Error("Cannot create transformer for " + obj);
  }
  var into = _curry3(function into2(acc, transducer, list) {
    var xf = transducer(_isTransformer(acc) ? acc : _stepCat(acc));
    return _xReduce(xf, xf["@@transducer/init"](), list);
  });
  var invert = _curry1(function invert2(obj) {
    var props2 = keys(obj);
    var len = props2.length;
    var idx = 0;
    var out = {};
    while (idx < len) {
      var key = props2[idx];
      var val = obj[key];
      var list = _has(val, out) ? out[val] : out[val] = [];
      list[list.length] = key;
      idx += 1;
    }
    return out;
  });
  var invertObj = _curry1(function invertObj2(obj) {
    var props2 = keys(obj);
    var len = props2.length;
    var idx = 0;
    var out = {};
    while (idx < len) {
      var key = props2[idx];
      out[obj[key]] = key;
      idx += 1;
    }
    return out;
  });
  var invoker = _curry2(function invoker2(arity, method) {
    return curryN(arity + 1, function() {
      var target = arguments[arity];
      if (target != null && _isFunction(target[method])) {
        return target[method].apply(target, Array.prototype.slice.call(arguments, 0, arity));
      }
      throw new TypeError(toString$1(target) + ' does not have a method named "' + method + '"');
    });
  });
  var is = _curry2(function is2(Ctor, val) {
    return val instanceof Ctor || val != null && (val.constructor === Ctor || Ctor.name === "Object" && _typeof(val) === "object");
  });
  var isEmpty = _curry1(function isEmpty2(x) {
    return x != null && equals(x, empty(x));
  });
  var isNotNil = _curry1(function isNotNil2(x) {
    return !isNil(x);
  });
  var join = invoker(1, "join");
  var juxt = _curry1(function juxt2(fns) {
    return converge(function() {
      return Array.prototype.slice.call(arguments, 0);
    }, fns);
  });
  var keysIn = _curry1(function keysIn2(obj) {
    var prop2;
    var ks = [];
    for (prop2 in obj) {
      ks[ks.length] = prop2;
    }
    return ks;
  });
  var lastIndexOf = _curry2(function lastIndexOf2(target, xs) {
    if (typeof xs.lastIndexOf === "function" && !_isArray(xs)) {
      return xs.lastIndexOf(target);
    } else {
      var idx = xs.length - 1;
      while (idx >= 0) {
        if (equals(xs[idx], target)) {
          return idx;
        }
        idx -= 1;
      }
      return -1;
    }
  });
  function _isNumber(x) {
    return Object.prototype.toString.call(x) === "[object Number]";
  }
  var length = _curry1(function length2(list) {
    return list != null && _isNumber(list.length) ? list.length : NaN;
  });
  var lens = _curry2(function lens2(getter, setter) {
    return function(toFunctorFn) {
      return function(target) {
        return map(function(focus) {
          return setter(focus, target);
        }, toFunctorFn(getter(target)));
      };
    };
  });
  var update = _curry3(function update2(idx, x, list) {
    return adjust(idx, always(x), list);
  });
  var lensIndex = _curry1(function lensIndex2(n) {
    return lens(nth(n), update(n));
  });
  var paths = _curry2(function paths2(pathsArray, obj) {
    return pathsArray.map(function(paths3) {
      var val = obj;
      var idx = 0;
      var p;
      while (idx < paths3.length) {
        if (val == null) {
          return;
        }
        p = paths3[idx];
        val = _isInteger(p) ? nth(p, val) : val[p];
        idx += 1;
      }
      return val;
    });
  });
  var path = _curry2(function path2(pathAr, obj) {
    return paths([pathAr], obj)[0];
  });
  var lensPath = _curry1(function lensPath2(p) {
    return lens(path(p), assocPath(p));
  });
  var lensProp = _curry1(function lensProp2(k) {
    return lens(prop(k), assoc(k));
  });
  var lt = _curry2(function lt2(a, b) {
    return a < b;
  });
  var lte = _curry2(function lte2(a, b) {
    return a <= b;
  });
  var mapAccum = _curry3(function mapAccum2(fn, acc, list) {
    var idx = 0;
    var len = list.length;
    var result = [];
    var tuple = [acc];
    while (idx < len) {
      tuple = fn(tuple[0], list[idx]);
      result[idx] = tuple[1];
      idx += 1;
    }
    return [tuple[0], result];
  });
  var mapAccumRight = _curry3(function mapAccumRight2(fn, acc, list) {
    var idx = list.length - 1;
    var result = [];
    var tuple = [acc];
    while (idx >= 0) {
      tuple = fn(tuple[0], list[idx]);
      result[idx] = tuple[1];
      idx -= 1;
    }
    return [tuple[0], result];
  });
  var mapObjIndexed = _curry2(function mapObjIndexed2(fn, obj) {
    return _arrayReduce(function(acc, key) {
      acc[key] = fn(obj[key], key, obj);
      return acc;
    }, {}, keys(obj));
  });
  var match = _curry2(function match2(rx, str) {
    return str.match(rx) || [];
  });
  var mathMod = _curry2(function mathMod2(m, p) {
    if (!_isInteger(m)) {
      return NaN;
    }
    if (!_isInteger(p) || p < 1) {
      return NaN;
    }
    return (m % p + p) % p;
  });
  var maxBy = _curry3(function maxBy2(f, a, b) {
    var resultB = f(b);
    return max(f(a), resultB) === resultB ? b : a;
  });
  var sum = reduce(add, 0);
  var mean = _curry1(function mean2(list) {
    return sum(list) / list.length;
  });
  var median = _curry1(function median2(list) {
    var len = list.length;
    if (len === 0) {
      return NaN;
    }
    var width = 2 - len % 2;
    var idx = (len - width) / 2;
    return mean(Array.prototype.slice.call(list, 0).sort(function(a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    }).slice(idx, idx + width));
  });
  var memoizeWith = _curry2(function memoizeWith2(keyGen, fn) {
    var cache = {};
    return _arity(fn.length, function() {
      var key = keyGen.apply(this, arguments);
      if (!_has(key, cache)) {
        cache[key] = fn.apply(this, arguments);
      }
      return cache[key];
    });
  });
  var mergeAll = _curry1(function mergeAll2(list) {
    return _objectAssign$1.apply(null, [{}].concat(list));
  });
  var mergeWithKey = _curry3(function mergeWithKey2(fn, l, r) {
    var result = {};
    var k;
    l = l || {};
    r = r || {};
    for (k in l) {
      if (_has(k, l)) {
        result[k] = _has(k, r) ? fn(k, l[k], r[k]) : l[k];
      }
    }
    for (k in r) {
      if (_has(k, r) && !_has(k, result)) {
        result[k] = r[k];
      }
    }
    return result;
  });
  var mergeDeepWithKey = _curry3(function mergeDeepWithKey2(fn, lObj, rObj) {
    return mergeWithKey(function(k, lVal, rVal) {
      if (_isObject(lVal) && _isObject(rVal)) {
        return mergeDeepWithKey2(fn, lVal, rVal);
      } else {
        return fn(k, lVal, rVal);
      }
    }, lObj, rObj);
  });
  var mergeDeepLeft = _curry2(function mergeDeepLeft2(lObj, rObj) {
    return mergeDeepWithKey(function(k, lVal, rVal) {
      return lVal;
    }, lObj, rObj);
  });
  var mergeDeepRight = _curry2(function mergeDeepRight2(lObj, rObj) {
    return mergeDeepWithKey(function(k, lVal, rVal) {
      return rVal;
    }, lObj, rObj);
  });
  var mergeDeepWith = _curry3(function mergeDeepWith2(fn, lObj, rObj) {
    return mergeDeepWithKey(function(k, lVal, rVal) {
      return fn(lVal, rVal);
    }, lObj, rObj);
  });
  var mergeLeft = _curry2(function mergeLeft2(l, r) {
    return _objectAssign$1({}, r, l);
  });
  var mergeRight = _curry2(function mergeRight2(l, r) {
    return _objectAssign$1({}, l, r);
  });
  var mergeWith = _curry3(function mergeWith2(fn, l, r) {
    return mergeWithKey(function(_, _l, _r) {
      return fn(_l, _r);
    }, l, r);
  });
  var min = _curry2(function min2(a, b) {
    if (a === b) {
      return a;
    }
    function safeMin(x, y) {
      if (x < y !== y < x) {
        return y < x ? y : x;
      }
      return void 0;
    }
    var minByValue = safeMin(a, b);
    if (minByValue !== void 0) {
      return minByValue;
    }
    var minByType = safeMin(_typeof(a), _typeof(b));
    if (minByType !== void 0) {
      return minByType === _typeof(a) ? a : b;
    }
    var stringA = toString$1(a);
    var minByStringValue = safeMin(stringA, toString$1(b));
    if (minByStringValue !== void 0) {
      return minByStringValue === stringA ? a : b;
    }
    return a;
  });
  var minBy = _curry3(function minBy2(f, a, b) {
    var resultB = f(b);
    return min(f(a), resultB) === resultB ? b : a;
  });
  function _modify(prop2, fn, obj) {
    if (_isInteger(prop2) && _isArray(obj)) {
      var arr = [].concat(obj);
      arr[prop2] = fn(arr[prop2]);
      return arr;
    }
    var result = {};
    for (var p in obj) {
      result[p] = obj[p];
    }
    result[prop2] = fn(result[prop2]);
    return result;
  }
  var modifyPath = _curry3(function modifyPath2(path2, fn, object) {
    if (!_isObject(object) && !_isArray(object) || path2.length === 0) {
      return object;
    }
    var idx = path2[0];
    if (!_has(idx, object)) {
      return object;
    }
    if (path2.length === 1) {
      return _modify(idx, fn, object);
    }
    var val = modifyPath2(Array.prototype.slice.call(path2, 1), fn, object[idx]);
    if (val === object[idx]) {
      return object;
    }
    return _assoc(idx, val, object);
  });
  var modify = _curry3(function modify2(prop2, fn, object) {
    return modifyPath([prop2], fn, object);
  });
  var modulo = _curry2(function modulo2(a, b) {
    return a % b;
  });
  var move = _curry3(function(from, to, list) {
    var length2 = list.length;
    var result = list.slice();
    var positiveFrom = from < 0 ? length2 + from : from;
    var positiveTo = to < 0 ? length2 + to : to;
    var item = result.splice(positiveFrom, 1);
    return positiveFrom < 0 || positiveFrom >= list.length || positiveTo < 0 || positiveTo >= list.length ? list : [].concat(result.slice(0, positiveTo)).concat(item).concat(result.slice(positiveTo, list.length));
  });
  var multiply = _curry2(function multiply2(a, b) {
    return a * b;
  });
  var _this = void 0;
  var partialObject = _curry2(function(f, o2) {
    return function(props2) {
      return f.call(_this, mergeDeepRight(o2, props2));
    };
  });
  var negate = _curry1(function negate2(n) {
    return -n;
  });
  var none = _curry2(function none2(fn, input) {
    return all(_complement(fn), input);
  });
  var nthArg = _curry1(function nthArg2(n) {
    var arity = n < 0 ? 1 : n + 1;
    return curryN(arity, function() {
      return nth(n, arguments);
    });
  });
  var o = _curry3(function o2(f, g, x) {
    return f(g(x));
  });
  var of = _curry2(function of2(Ctor, val) {
    return typeof Ctor["fantasy-land/of"] === "function" ? Ctor["fantasy-land/of"](val) : typeof Ctor.of === "function" ? Ctor.of(val) : [val];
  });
  var omit = _curry2(function omit2(names, obj) {
    var result = {};
    var index = {};
    var idx = 0;
    var len = names.length;
    while (idx < len) {
      index[names[idx]] = 1;
      idx += 1;
    }
    for (var prop2 in obj) {
      if (!index.hasOwnProperty(prop2)) {
        result[prop2] = obj[prop2];
      }
    }
    return result;
  });
  var on = _curryN(4, [], function on2(f, g, a, b) {
    return f(g(a), g(b));
  });
  var once = _curry1(function once2(fn) {
    var called = false;
    var result;
    return _arity(fn.length, function() {
      if (called) {
        return result;
      }
      called = true;
      result = fn.apply(this, arguments);
      return result;
    });
  });
  function _assertPromise(name, p) {
    if (p == null || !_isFunction(p.then)) {
      throw new TypeError("`" + name + "` expected a Promise, received " + _toString(p, []));
    }
  }
  var otherwise = _curry2(function otherwise2(f, p) {
    _assertPromise("otherwise", p);
    return p.then(null, f);
  });
  var Identity = function Identity2(x) {
    return {
      value: x,
      map: function map2(f) {
        return Identity2(f(x));
      }
    };
  };
  var over = _curry3(function over2(lens2, f, x) {
    return lens2(function(y) {
      return Identity(f(y));
    })(x).value;
  });
  var pair = _curry2(function pair2(fst, snd) {
    return [fst, snd];
  });
  function _createPartialApplicator(concat2) {
    return _curry2(function(fn, args) {
      return _arity(Math.max(0, fn.length - args.length), function() {
        return fn.apply(this, concat2(args, arguments));
      });
    });
  }
  var partial = _createPartialApplicator(_concat);
  var partialRight = _createPartialApplicator(flip(_concat));
  var partition = juxt([filter, reject]);
  var pathEq = _curry3(function pathEq2(val, _path, obj) {
    return equals(path(_path, obj), val);
  });
  var pathOr = _curry3(function pathOr2(d, p, obj) {
    return defaultTo(d, path(p, obj));
  });
  var pathSatisfies = _curry3(function pathSatisfies2(pred, propPath, obj) {
    return pred(path(propPath, obj));
  });
  var pick = _curry2(function pick2(names, obj) {
    var result = {};
    var idx = 0;
    while (idx < names.length) {
      if (names[idx] in obj) {
        result[names[idx]] = obj[names[idx]];
      }
      idx += 1;
    }
    return result;
  });
  var pickAll = _curry2(function pickAll2(names, obj) {
    var result = {};
    var idx = 0;
    var len = names.length;
    while (idx < len) {
      var name = names[idx];
      result[name] = obj[name];
      idx += 1;
    }
    return result;
  });
  var pickBy = _curry2(function pickBy2(test2, obj) {
    var result = {};
    for (var prop2 in obj) {
      if (test2(obj[prop2], prop2, obj)) {
        result[prop2] = obj[prop2];
      }
    }
    return result;
  });
  var prepend = _curry2(function prepend2(el, list) {
    return _concat([el], list);
  });
  var product = reduce(multiply, 1);
  var useWith = _curry2(function useWith2(fn, transformers) {
    return curryN(transformers.length, function() {
      var args = [];
      var idx = 0;
      while (idx < transformers.length) {
        args.push(transformers[idx].call(this, arguments[idx]));
        idx += 1;
      }
      return fn.apply(this, args.concat(Array.prototype.slice.call(arguments, transformers.length)));
    });
  });
  var project = useWith(_map, [pickAll, identity]);
  function _promap(f, g, profunctor) {
    return function(x) {
      return g(profunctor(f(x)));
    };
  }
  function XPromap(f, g, xf) {
    this.xf = xf;
    this.f = f;
    this.g = g;
  }
  XPromap.prototype["@@transducer/init"] = _xfBase.init;
  XPromap.prototype["@@transducer/result"] = _xfBase.result;
  XPromap.prototype["@@transducer/step"] = function(result, input) {
    return this.xf["@@transducer/step"](result, _promap(this.f, this.g, input));
  };
  function _xpromap(f, g) {
    return function(xf) {
      return new XPromap(f, g, xf);
    };
  }
  var promap = _curry3(_dispatchable(["fantasy-land/promap", "promap"], _xpromap, _promap));
  var propEq = _curry3(function propEq2(val, name, obj) {
    return equals(val, prop(name, obj));
  });
  var propIs = _curry3(function propIs2(type2, name, obj) {
    return is(type2, prop(name, obj));
  });
  var propOr = _curry3(function propOr2(val, p, obj) {
    return defaultTo(val, prop(p, obj));
  });
  var propSatisfies = _curry3(function propSatisfies2(pred, name, obj) {
    return pred(prop(name, obj));
  });
  var props = _curry2(function props2(ps, obj) {
    return ps.map(function(p) {
      return path([p], obj);
    });
  });
  var range = _curry2(function range2(from, to) {
    if (!(_isNumber(from) && _isNumber(to))) {
      throw new TypeError("Both arguments to range must be numbers");
    }
    var result = [];
    var n = from;
    while (n < to) {
      result.push(n);
      n += 1;
    }
    return result;
  });
  var reduceRight = _curry3(function reduceRight2(fn, acc, list) {
    var idx = list.length - 1;
    while (idx >= 0) {
      acc = fn(list[idx], acc);
      if (acc && acc["@@transducer/reduced"]) {
        acc = acc["@@transducer/value"];
        break;
      }
      idx -= 1;
    }
    return acc;
  });
  var reduceWhile = _curryN(4, [], function _reduceWhile(pred, fn, a, list) {
    var xf = _xwrap(function(acc, x) {
      return pred(acc, x) ? fn(acc, x) : _reduced(acc);
    });
    return _xReduce(xf, a, list);
  });
  var reduced = _curry1(_reduced);
  var times = _curry2(function times2(fn, n) {
    var len = Number(n);
    var idx = 0;
    var list;
    if (len < 0 || isNaN(len)) {
      throw new RangeError("n must be a non-negative number");
    }
    list = [];
    while (idx < len) {
      list.push(fn(idx));
      idx += 1;
    }
    return list;
  });
  var repeat = _curry2(function repeat2(value, n) {
    return times(always(value), n);
  });
  var replace = _curry3(function replace2(regex, replacement, str) {
    return str.replace(regex, replacement);
  });
  var tInit$1 = "@@transducer/init";
  var tStep$1 = "@@transducer/step";
  function XScan(reducer, acc, xf) {
    this.xf = xf;
    this.f = reducer;
    this.acc = acc;
  }
  XScan.prototype[tInit$1] = function() {
    return this.xf[tStep$1](this.xf[tInit$1](), this.acc);
  };
  XScan.prototype["@@transducer/result"] = _xfBase.result;
  XScan.prototype[tStep$1] = function(result, input) {
    if (result["@@transducer/reduced"]) {
      return result;
    }
    this.acc = this.f(this.acc, input);
    return this.xf[tStep$1](result, this.acc);
  };
  var _xscan = _curry3(function _xscan2(reducer, acc, xf) {
    return new XScan(reducer, acc, xf);
  });
  var scan = _curry3(_dispatchable([], _xscan, function scan2(fn, acc, list) {
    var idx = 0;
    var len = list.length;
    var result = [acc];
    while (idx < len) {
      acc = fn(acc, list[idx]);
      result[idx + 1] = acc;
      idx += 1;
    }
    return result;
  }));
  var sequence = _curry2(function sequence2(F2, traversable) {
    var of2 = typeof F2["fantasy-land/of"] === "function" ? F2["fantasy-land/of"] : typeof F2.of === "function" ? F2.of : F2;
    var TypeRep = {
      "fantasy-land/of": of2
    };
    return typeof traversable["fantasy-land/traverse"] === "function" ? traversable["fantasy-land/traverse"](TypeRep, _identity) : typeof traversable.traverse === "function" ? traversable.traverse(TypeRep, _identity) : reduceRight(function(x, acc) {
      return ap(map(prepend, x), acc);
    }, of2([]), traversable);
  });
  var set = _curry3(function set2(lens2, v, x) {
    return over(lens2, always(v), x);
  });
  var sort = _curry2(function sort2(comparator2, list) {
    return Array.prototype.slice.call(list, 0).sort(comparator2);
  });
  var sortBy = _curry2(function sortBy2(fn, list) {
    return Array.prototype.slice.call(list, 0).sort(function(a, b) {
      var aa = fn(a);
      var bb = fn(b);
      return aa < bb ? -1 : aa > bb ? 1 : 0;
    });
  });
  var sortWith = _curry2(function sortWith2(fns, list) {
    return Array.prototype.slice.call(list, 0).sort(function(a, b) {
      var result = 0;
      var i = 0;
      while (result === 0 && i < fns.length) {
        result = fns[i](a, b);
        i += 1;
      }
      return result;
    });
  });
  var split = invoker(1, "split");
  var splitAt = _curry2(function splitAt2(index, array) {
    return [slice(0, index, array), slice(index, length(array), array)];
  });
  var splitEvery = _curry2(function splitEvery2(n, list) {
    if (n <= 0) {
      throw new Error("First argument to splitEvery must be a positive integer");
    }
    var result = [];
    var idx = 0;
    while (idx < list.length) {
      result.push(slice(idx, idx += n, list));
    }
    return result;
  });
  var splitWhen = _curry2(function splitWhen2(pred, list) {
    var idx = 0;
    var len = list.length;
    var prefix = [];
    while (idx < len && !pred(list[idx])) {
      prefix.push(list[idx]);
      idx += 1;
    }
    return [prefix, Array.prototype.slice.call(list, idx)];
  });
  var splitWhenever = _curryN(2, [], function splitWhenever2(pred, list) {
    var acc = [];
    var curr = [];
    for (var i = 0; i < list.length; i = i + 1) {
      if (!pred(list[i])) {
        curr.push(list[i]);
      }
      if ((i < list.length - 1 && pred(list[i + 1]) || i === list.length - 1) && curr.length > 0) {
        acc.push(curr);
        curr = [];
      }
    }
    return acc;
  });
  var startsWith = _curry2(function(prefix, list) {
    return equals(take(prefix.length, list), prefix);
  });
  var subtract = _curry2(function subtract2(a, b) {
    return Number(a) - Number(b);
  });
  var swapObject = function swapObject2(indexA, indexB, o2) {
    var copy = clone(o2);
    var properties = Object.getOwnPropertyNames(copy);
    if (properties.includes(indexA) && properties.includes(indexB)) {
      var tmp = copy[indexA];
      copy[indexA] = copy[indexB];
      copy[indexB] = tmp;
    }
    return copy;
  };
  var swapList = function swapList2(indexA, indexB, list) {
    var length2 = list.length;
    var result = list.slice();
    var positiveIndexA = indexA < 0 ? length2 + indexA : indexA;
    var positiveIndexB = indexB < 0 ? length2 + indexB : indexB;
    var positiveMin = Math.min(positiveIndexA, positiveIndexB);
    var positiveMax = Math.max(positiveIndexA, positiveIndexB);
    if (positiveIndexA < 0 || positiveIndexA > length2) {
      return result;
    }
    if (positiveIndexB < 0 || positiveIndexB > length2) {
      return result;
    }
    if (positiveIndexA === positiveIndexB) {
      return result;
    }
    result = [].concat(result.slice(0, positiveMin)).concat(result[positiveMax]).concat(result.slice(positiveMin + 1, positiveMax)).concat(result[positiveMin]).concat(result.slice(positiveMax + 1, length2));
    return result;
  };
  var swapString = function swapString2(indexA, indexB, s) {
    var result = swapList(indexA, indexB, s);
    return _isArray(result) ? result.join("") : result;
  };
  var swap = _curry3(function(indexA, indexB, o2) {
    if (_isArray(o2)) {
      return swapList(indexA, indexB, o2);
    } else if (_isString(o2)) {
      return swapString(indexA, indexB, o2);
    } else {
      return swapObject(indexA, indexB, o2);
    }
  });
  var symmetricDifference = _curry2(function symmetricDifference2(list1, list2) {
    return concat(difference(list1, list2), difference(list2, list1));
  });
  var symmetricDifferenceWith = _curry3(function symmetricDifferenceWith2(pred, list1, list2) {
    return concat(differenceWith(pred, list1, list2), differenceWith(pred, list2, list1));
  });
  var takeLastWhile = _curry2(function takeLastWhile2(fn, xs) {
    var idx = xs.length - 1;
    while (idx >= 0 && fn(xs[idx])) {
      idx -= 1;
    }
    return slice(idx + 1, Infinity, xs);
  });
  function XTakeWhile(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XTakeWhile.prototype["@@transducer/init"] = _xfBase.init;
  XTakeWhile.prototype["@@transducer/result"] = _xfBase.result;
  XTakeWhile.prototype["@@transducer/step"] = function(result, input) {
    return this.f(input) ? this.xf["@@transducer/step"](result, input) : _reduced(result);
  };
  function _xtakeWhile(f) {
    return function(xf) {
      return new XTakeWhile(f, xf);
    };
  }
  var takeWhile = _curry2(_dispatchable(["takeWhile"], _xtakeWhile, function takeWhile2(fn, xs) {
    var idx = 0;
    var len = xs.length;
    while (idx < len && fn(xs[idx])) {
      idx += 1;
    }
    return slice(0, idx, xs);
  }));
  function XTap(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XTap.prototype["@@transducer/init"] = _xfBase.init;
  XTap.prototype["@@transducer/result"] = _xfBase.result;
  XTap.prototype["@@transducer/step"] = function(result, input) {
    this.f(input);
    return this.xf["@@transducer/step"](result, input);
  };
  function _xtap(f) {
    return function(xf) {
      return new XTap(f, xf);
    };
  }
  var tap = _curry2(_dispatchable([], _xtap, function tap2(fn, x) {
    fn(x);
    return x;
  }));
  function _isRegExp(x) {
    return Object.prototype.toString.call(x) === "[object RegExp]";
  }
  var test = _curry2(function test2(pattern, str) {
    if (!_isRegExp(pattern)) {
      throw new TypeError("\u2018test\u2019 requires a value of type RegExp as its first argument; received " + toString$1(pattern));
    }
    return _cloneRegExp(pattern).test(str);
  });
  var andThen = _curry2(function andThen2(f, p) {
    _assertPromise("andThen", p);
    return p.then(f);
  });
  var toLower = invoker(0, "toLowerCase");
  var toPairs = _curry1(function toPairs2(obj) {
    var pairs = [];
    for (var prop2 in obj) {
      if (_has(prop2, obj)) {
        pairs[pairs.length] = [prop2, obj[prop2]];
      }
    }
    return pairs;
  });
  var toPairsIn = _curry1(function toPairsIn2(obj) {
    var pairs = [];
    for (var prop2 in obj) {
      pairs[pairs.length] = [prop2, obj[prop2]];
    }
    return pairs;
  });
  var toUpper = invoker(0, "toUpperCase");
  var transduce = curryN(4, function transduce2(xf, fn, acc, list) {
    return _xReduce(xf(typeof fn === "function" ? _xwrap(fn) : fn), acc, list);
  });
  var transpose = _curry1(function transpose2(outerlist) {
    var i = 0;
    var result = [];
    while (i < outerlist.length) {
      var innerlist = outerlist[i];
      var j = 0;
      while (j < innerlist.length) {
        if (typeof result[j] === "undefined") {
          result[j] = [];
        }
        result[j].push(innerlist[j]);
        j += 1;
      }
      i += 1;
    }
    return result;
  });
  var traverse = _curry3(function traverse2(F2, f, traversable) {
    var of2 = typeof F2["fantasy-land/of"] === "function" ? F2["fantasy-land/of"] : typeof F2.of === "function" ? F2.of : F2;
    var TypeRep = {
      "fantasy-land/of": of2
    };
    return typeof traversable["fantasy-land/traverse"] === "function" ? traversable["fantasy-land/traverse"](TypeRep, f) : typeof traversable.traverse === "function" ? traversable.traverse(TypeRep, f) : sequence(TypeRep, map(f, traversable));
  });
  var ws = "	\n\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
  var zeroWidth = "\u200B";
  var hasProtoTrim = typeof String.prototype.trim === "function";
  var trim = !hasProtoTrim || ws.trim() || !zeroWidth.trim() ? _curry1(function trim2(str) {
    var beginRx = new RegExp("^[" + ws + "][" + ws + "]*");
    var endRx = new RegExp("[" + ws + "][" + ws + "]*$");
    return str.replace(beginRx, "").replace(endRx, "");
  }) : _curry1(function trim2(str) {
    return str.trim();
  });
  var tryCatch = _curry2(function _tryCatch(tryer, catcher) {
    return _arity(tryer.length, function() {
      try {
        return tryer.apply(this, arguments);
      } catch (e) {
        return catcher.apply(this, _concat([e], arguments));
      }
    });
  });
  var unapply = _curry1(function unapply2(fn) {
    return function() {
      return fn(Array.prototype.slice.call(arguments, 0));
    };
  });
  var unary = _curry1(function unary2(fn) {
    return nAry(1, fn);
  });
  var uncurryN = _curry2(function uncurryN2(depth, fn) {
    return curryN(depth, function() {
      var currentDepth = 1;
      var value = fn;
      var idx = 0;
      var endIdx;
      while (currentDepth <= depth && typeof value === "function") {
        endIdx = currentDepth === depth ? arguments.length : idx + value.length;
        value = value.apply(this, Array.prototype.slice.call(arguments, idx, endIdx));
        currentDepth += 1;
        idx = endIdx;
      }
      return value;
    });
  });
  var unfold = _curry2(function unfold2(fn, seed) {
    var pair2 = fn(seed);
    var result = [];
    while (pair2 && pair2.length) {
      result[result.length] = pair2[0];
      pair2 = fn(pair2[1]);
    }
    return result;
  });
  var union = _curry2(compose(uniq, _concat));
  function XUniqWith(pred, xf) {
    this.xf = xf;
    this.pred = pred;
    this.items = [];
  }
  XUniqWith.prototype["@@transducer/init"] = _xfBase.init;
  XUniqWith.prototype["@@transducer/result"] = _xfBase.result;
  XUniqWith.prototype["@@transducer/step"] = function(result, input) {
    if (_includesWith(this.pred, input, this.items)) {
      return result;
    } else {
      this.items.push(input);
      return this.xf["@@transducer/step"](result, input);
    }
  };
  function _xuniqWith(pred) {
    return function(xf) {
      return new XUniqWith(pred, xf);
    };
  }
  var uniqWith = _curry2(_dispatchable([], _xuniqWith, function(pred, list) {
    var idx = 0;
    var len = list.length;
    var result = [];
    var item;
    while (idx < len) {
      item = list[idx];
      if (!_includesWith(pred, item, result)) {
        result[result.length] = item;
      }
      idx += 1;
    }
    return result;
  }));
  var unionWith = _curry3(function unionWith2(pred, list1, list2) {
    return uniqWith(pred, _concat(list1, list2));
  });
  var unless = _curry3(function unless2(pred, whenFalseFn, x) {
    return pred(x) ? x : whenFalseFn(x);
  });
  var unnest = chain(_identity);
  var until = _curry3(function until2(pred, fn, init2) {
    var val = init2;
    while (!pred(val)) {
      val = fn(val);
    }
    return val;
  });
  var unwind = _curry2(function(key, object) {
    if (!(key in object && _isArray(object[key]))) {
      return [object];
    }
    return _map(function(item) {
      return _assoc(key, item, object);
    }, object[key]);
  });
  var valuesIn = _curry1(function valuesIn2(obj) {
    var prop2;
    var vs = [];
    for (prop2 in obj) {
      vs[vs.length] = obj[prop2];
    }
    return vs;
  });
  var Const = function Const2(x) {
    return {
      value: x,
      "fantasy-land/map": function fantasyLandMap() {
        return this;
      }
    };
  };
  var view = _curry2(function view2(lens2, x) {
    return lens2(Const)(x).value;
  });
  var when = _curry3(function when2(pred, whenTrueFn, x) {
    return pred(x) ? whenTrueFn(x) : x;
  });
  var where = _curry2(function where2(spec, testObj) {
    for (var prop2 in spec) {
      if (_has(prop2, spec) && !spec[prop2](testObj[prop2])) {
        return false;
      }
    }
    return true;
  });
  var whereAny = _curry2(function whereAny2(spec, testObj) {
    for (var prop2 in spec) {
      if (_has(prop2, spec) && spec[prop2](testObj[prop2])) {
        return true;
      }
    }
    return false;
  });
  var whereEq = _curry2(function whereEq2(spec, testObj) {
    return where(map(equals, spec), testObj);
  });
  var without = _curry2(function without2(xs, list) {
    var toRemove = new _Set();
    for (var i = 0; i < xs.length; i += 1) {
      toRemove.add(xs[i]);
    }
    return reject(toRemove.has.bind(toRemove), list);
  });
  var xor = _curry2(function xor2(a, b) {
    return Boolean(!a ^ !b);
  });
  var xprod = _curry2(function xprod2(a, b) {
    var idx = 0;
    var ilen = a.length;
    var j;
    var jlen = b.length;
    var result = [];
    while (idx < ilen) {
      j = 0;
      while (j < jlen) {
        result[result.length] = [a[idx], b[j]];
        j += 1;
      }
      idx += 1;
    }
    return result;
  });
  var zip = _curry2(function zip2(a, b) {
    var rv = [];
    var idx = 0;
    var len = Math.min(a.length, b.length);
    while (idx < len) {
      rv[idx] = [a[idx], b[idx]];
      idx += 1;
    }
    return rv;
  });
  var zipObj = _curry2(function zipObj2(keys2, values2) {
    var idx = 0;
    var len = Math.min(keys2.length, values2.length);
    var out = {};
    while (idx < len) {
      out[keys2[idx]] = values2[idx];
      idx += 1;
    }
    return out;
  });
  var zipWith = _curry3(function zipWith2(fn, a, b) {
    var rv = [];
    var idx = 0;
    var len = Math.min(a.length, b.length);
    while (idx < len) {
      rv[idx] = fn(a[idx], b[idx]);
      idx += 1;
    }
    return rv;
  });
  var thunkify = _curry1(function thunkify2(fn) {
    return curryN(fn.length, function createThunk() {
      var fnArgs = arguments;
      return function invokeThunk() {
        return fn.apply(this, fnArgs);
      };
    });
  });
  exports2.F = F;
  exports2.T = T;
  exports2.__ = __;
  exports2.add = add;
  exports2.addIndex = addIndex;
  exports2.addIndexRight = addIndexRight;
  exports2.adjust = adjust;
  exports2.all = all;
  exports2.allPass = allPass;
  exports2.always = always;
  exports2.and = and;
  exports2.andThen = andThen;
  exports2.any = any;
  exports2.anyPass = anyPass;
  exports2.ap = ap;
  exports2.aperture = aperture;
  exports2.append = append;
  exports2.apply = apply;
  exports2.applySpec = applySpec;
  exports2.applyTo = applyTo;
  exports2.ascend = ascend;
  exports2.assoc = assoc;
  exports2.assocPath = assocPath;
  exports2.binary = binary;
  exports2.bind = bind;
  exports2.both = both;
  exports2.call = call;
  exports2.chain = chain;
  exports2.clamp = clamp;
  exports2.clone = clone;
  exports2.collectBy = collectBy;
  exports2.comparator = comparator;
  exports2.complement = complement;
  exports2.compose = compose;
  exports2.composeWith = composeWith;
  exports2.concat = concat;
  exports2.cond = cond;
  exports2.construct = construct;
  exports2.constructN = constructN;
  exports2.converge = converge;
  exports2.count = count;
  exports2.countBy = countBy;
  exports2.curry = curry;
  exports2.curryN = curryN;
  exports2.dec = dec;
  exports2.defaultTo = defaultTo;
  exports2.descend = descend;
  exports2.difference = difference;
  exports2.differenceWith = differenceWith;
  exports2.dissoc = dissoc;
  exports2.dissocPath = dissocPath;
  exports2.divide = divide;
  exports2.drop = drop;
  exports2.dropLast = dropLast$1;
  exports2.dropLastWhile = dropLastWhile$1;
  exports2.dropRepeats = dropRepeats;
  exports2.dropRepeatsBy = dropRepeatsBy;
  exports2.dropRepeatsWith = dropRepeatsWith;
  exports2.dropWhile = dropWhile;
  exports2.either = either;
  exports2.empty = empty;
  exports2.endsWith = endsWith;
  exports2.eqBy = eqBy;
  exports2.eqProps = eqProps;
  exports2.equals = equals;
  exports2.evolve = evolve;
  exports2.filter = filter;
  exports2.find = find;
  exports2.findIndex = findIndex;
  exports2.findLast = findLast;
  exports2.findLastIndex = findLastIndex;
  exports2.flatten = flatten;
  exports2.flip = flip;
  exports2.forEach = forEach;
  exports2.forEachObjIndexed = forEachObjIndexed;
  exports2.fromPairs = fromPairs;
  exports2.groupBy = groupBy;
  exports2.groupWith = groupWith;
  exports2.gt = gt;
  exports2.gte = gte;
  exports2.has = has;
  exports2.hasIn = hasIn;
  exports2.hasPath = hasPath;
  exports2.head = head;
  exports2.identical = identical;
  exports2.identity = identity;
  exports2.ifElse = ifElse;
  exports2.inc = inc;
  exports2.includes = includes;
  exports2.indexBy = indexBy;
  exports2.indexOf = indexOf;
  exports2.init = init;
  exports2.innerJoin = innerJoin;
  exports2.insert = insert;
  exports2.insertAll = insertAll;
  exports2.intersection = intersection;
  exports2.intersperse = intersperse;
  exports2.into = into;
  exports2.invert = invert;
  exports2.invertObj = invertObj;
  exports2.invoker = invoker;
  exports2.is = is;
  exports2.isEmpty = isEmpty;
  exports2.isNil = isNil;
  exports2.isNotNil = isNotNil;
  exports2.join = join;
  exports2.juxt = juxt;
  exports2.keys = keys;
  exports2.keysIn = keysIn;
  exports2.last = last;
  exports2.lastIndexOf = lastIndexOf;
  exports2.length = length;
  exports2.lens = lens;
  exports2.lensIndex = lensIndex;
  exports2.lensPath = lensPath;
  exports2.lensProp = lensProp;
  exports2.lift = lift;
  exports2.liftN = liftN;
  exports2.lt = lt;
  exports2.lte = lte;
  exports2.map = map;
  exports2.mapAccum = mapAccum;
  exports2.mapAccumRight = mapAccumRight;
  exports2.mapObjIndexed = mapObjIndexed;
  exports2.match = match;
  exports2.mathMod = mathMod;
  exports2.max = max;
  exports2.maxBy = maxBy;
  exports2.mean = mean;
  exports2.median = median;
  exports2.memoizeWith = memoizeWith;
  exports2.mergeAll = mergeAll;
  exports2.mergeDeepLeft = mergeDeepLeft;
  exports2.mergeDeepRight = mergeDeepRight;
  exports2.mergeDeepWith = mergeDeepWith;
  exports2.mergeDeepWithKey = mergeDeepWithKey;
  exports2.mergeLeft = mergeLeft;
  exports2.mergeRight = mergeRight;
  exports2.mergeWith = mergeWith;
  exports2.mergeWithKey = mergeWithKey;
  exports2.min = min;
  exports2.minBy = minBy;
  exports2.modify = modify;
  exports2.modifyPath = modifyPath;
  exports2.modulo = modulo;
  exports2.move = move;
  exports2.multiply = multiply;
  exports2.nAry = nAry;
  exports2.negate = negate;
  exports2.none = none;
  exports2.not = not;
  exports2.nth = nth;
  exports2.nthArg = nthArg;
  exports2.o = o;
  exports2.objOf = objOf;
  exports2.of = of;
  exports2.omit = omit;
  exports2.on = on;
  exports2.once = once;
  exports2.or = or;
  exports2.otherwise = otherwise;
  exports2.over = over;
  exports2.pair = pair;
  exports2.partial = partial;
  exports2.partialObject = partialObject;
  exports2.partialRight = partialRight;
  exports2.partition = partition;
  exports2.path = path;
  exports2.pathEq = pathEq;
  exports2.pathOr = pathOr;
  exports2.pathSatisfies = pathSatisfies;
  exports2.paths = paths;
  exports2.pick = pick;
  exports2.pickAll = pickAll;
  exports2.pickBy = pickBy;
  exports2.pipe = pipe;
  exports2.pipeWith = pipeWith;
  exports2.pluck = pluck;
  exports2.prepend = prepend;
  exports2.product = product;
  exports2.project = project;
  exports2.promap = promap;
  exports2.prop = prop;
  exports2.propEq = propEq;
  exports2.propIs = propIs;
  exports2.propOr = propOr;
  exports2.propSatisfies = propSatisfies;
  exports2.props = props;
  exports2.range = range;
  exports2.reduce = reduce;
  exports2.reduceBy = reduceBy;
  exports2.reduceRight = reduceRight;
  exports2.reduceWhile = reduceWhile;
  exports2.reduced = reduced;
  exports2.reject = reject;
  exports2.remove = remove;
  exports2.repeat = repeat;
  exports2.replace = replace;
  exports2.reverse = reverse;
  exports2.scan = scan;
  exports2.sequence = sequence;
  exports2.set = set;
  exports2.slice = slice;
  exports2.sort = sort;
  exports2.sortBy = sortBy;
  exports2.sortWith = sortWith;
  exports2.split = split;
  exports2.splitAt = splitAt;
  exports2.splitEvery = splitEvery;
  exports2.splitWhen = splitWhen;
  exports2.splitWhenever = splitWhenever;
  exports2.startsWith = startsWith;
  exports2.subtract = subtract;
  exports2.sum = sum;
  exports2.swap = swap;
  exports2.symmetricDifference = symmetricDifference;
  exports2.symmetricDifferenceWith = symmetricDifferenceWith;
  exports2.tail = tail;
  exports2.take = take;
  exports2.takeLast = takeLast;
  exports2.takeLastWhile = takeLastWhile;
  exports2.takeWhile = takeWhile;
  exports2.tap = tap;
  exports2.test = test;
  exports2.thunkify = thunkify;
  exports2.times = times;
  exports2.toLower = toLower;
  exports2.toPairs = toPairs;
  exports2.toPairsIn = toPairsIn;
  exports2.toString = toString$1;
  exports2.toUpper = toUpper;
  exports2.transduce = transduce;
  exports2.transpose = transpose;
  exports2.traverse = traverse;
  exports2.trim = trim;
  exports2.tryCatch = tryCatch;
  exports2.type = type;
  exports2.unapply = unapply;
  exports2.unary = unary;
  exports2.uncurryN = uncurryN;
  exports2.unfold = unfold;
  exports2.union = union;
  exports2.unionWith = unionWith;
  exports2.uniq = uniq;
  exports2.uniqBy = uniqBy;
  exports2.uniqWith = uniqWith;
  exports2.unless = unless;
  exports2.unnest = unnest;
  exports2.until = until;
  exports2.unwind = unwind;
  exports2.update = update;
  exports2.useWith = useWith;
  exports2.values = values;
  exports2.valuesIn = valuesIn;
  exports2.view = view;
  exports2.when = when;
  exports2.where = where;
  exports2.whereAny = whereAny;
  exports2.whereEq = whereEq;
  exports2.without = without;
  exports2.xor = xor;
  exports2.xprod = xprod;
  exports2.zip = zip;
  exports2.zipObj = zipObj;
  exports2.zipWith = zipWith;
  Object.defineProperty(exports2, "__esModule", { value: true });
});
