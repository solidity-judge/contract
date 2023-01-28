import { Contract, ethers } from 'ethers';
import request, { gql } from 'graphql-request';

var TestCaseVerdict;
(function (TestCaseVerdict) {
  TestCaseVerdict[TestCaseVerdict["Accepted"] = 0] = "Accepted";
  TestCaseVerdict[TestCaseVerdict["WrongAnswer"] = 1] = "WrongAnswer";
  TestCaseVerdict[TestCaseVerdict["Revert"] = 2] = "Revert";
})(TestCaseVerdict || (TestCaseVerdict = {}));

function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return exports;
  };
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function (method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function () {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function (record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  strings.raw = raw;
  return strings;
}

var solComp = null;
if (typeof window !== 'undefined') {
  solComp = /*#__PURE__*/require('@agnostico/browser-solidity-compiler');
}
function isSameAddress(a, b) {
  return a.toLowerCase() === b.toLowerCase();
}
var compilerVersion = '';
function getCompilerVersion() {
  return _getCompilerVersion.apply(this, arguments);
}
function _getCompilerVersion() {
  _getCompilerVersion = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var results;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!(compilerVersion !== '')) {
            _context.next = 2;
            break;
          }
          return _context.abrupt("return", compilerVersion);
        case 2:
          _context.next = 4;
          return solComp.getCompilerVersions();
        case 4:
          results = _context.sent;
          compilerVersion = results.releases[results.latestRelease];
          return _context.abrupt("return", compilerVersion);
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _getCompilerVersion.apply(this, arguments);
}
function compileSolidity(_x) {
  return _compileSolidity.apply(this, arguments);
}
function _compileSolidity() {
  _compileSolidity = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(source) {
    var _output$errors;
    var version, output, allErrors, errors, contracts, contractName;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return getCompilerVersion();
        case 2:
          version = _context2.sent;
          _context2.next = 5;
          return solComp.solidityCompiler({
            version: "https://binaries.soliditylang.org/bin/" + version,
            contractBody: source
          });
        case 5:
          output = _context2.sent;
          allErrors = (_output$errors = output['errors']) != null ? _output$errors : [];
          errors = allErrors.filter(function (x) {
            return x.severity === 'error';
          });
          if (!(errors.length > 0)) {
            _context2.next = 10;
            break;
          }
          return _context2.abrupt("return", {
            bytecode: '',
            errors: errors.map(function (x) {
              return {
                msg: x.formattedMessage,
                code: x.errorCode
              };
            })
          });
        case 10:
          contracts = output.contracts.Compiled_Contracts;
          _context2.t0 = _regeneratorRuntime().keys(contracts);
        case 12:
          if ((_context2.t1 = _context2.t0()).done) {
            _context2.next = 17;
            break;
          }
          contractName = _context2.t1.value;
          return _context2.abrupt("return", {
            bytecode: '0x' + contracts[contractName].evm.bytecode.object,
            errors: []
          });
        case 17:
          return _context2.abrupt("return", {
            bytecode: '',
            errors: [{
              msg: 'Compilation failed - no contract found',
              code: '6969'
            }]
          });
        case 18:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _compileSolidity.apply(this, arguments);
}

var gateFactory = "0x7A69a4d5EE5C617D00d92e4ddfa7becD9D7bfE73";
var problemFactory = "0xd767051791b6bb3a74cBdB7786345ec401E4F062";
var DEPLOYMENT = {
	gateFactory: gateFactory,
	problemFactory: problemFactory
};

var abi = [
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint8",
				name: "version",
				type: "uint8"
			}
		],
		name: "Initialized",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint256",
				name: "version",
				type: "uint256"
			},
			{
				components: [
					{
						internalType: "bytes",
						name: "input",
						type: "bytes"
					},
					{
						internalType: "bytes32",
						name: "output",
						type: "bytes32"
					},
					{
						internalType: "uint224",
						name: "gasLimit",
						type: "uint224"
					}
				],
				indexed: false,
				internalType: "struct TestCase[]",
				name: "tests",
				type: "tuple[]"
			}
		],
		name: "NewTestVersion",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "address",
				name: "contestant",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "version",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "point",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "enum Verdict[]",
				name: "verdicts",
				type: "uint8[]"
			}
		],
		name: "RunSolution",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "address",
				name: "contestant",
				type: "address"
			},
			{
				indexed: false,
				internalType: "address",
				name: "solution",
				type: "address"
			}
		],
		name: "UpdateSolution",
		type: "event"
	},
	{
		inputs: [
		],
		name: "MAX_OUTPUT_SIZE",
		outputs: [
			{
				internalType: "uint16",
				name: "",
				type: "uint16"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				internalType: "address",
				name: "solution",
				type: "address"
			}
		],
		name: "_updateSolution",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "bytes",
						name: "input",
						type: "bytes"
					},
					{
						internalType: "bytes32",
						name: "output",
						type: "bytes32"
					},
					{
						internalType: "uint224",
						name: "gasLimit",
						type: "uint224"
					}
				],
				internalType: "struct TestCase",
				name: "test",
				type: "tuple"
			}
		],
		name: "addTest",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "author",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "checker",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "contestants",
		outputs: [
			{
				internalType: "address",
				name: "solution",
				type: "address"
			},
			{
				internalType: "uint32",
				name: "point",
				type: "uint32"
			},
			{
				internalType: "uint32",
				name: "version",
				type: "uint32"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "gateFactory",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "solution",
				type: "address"
			}
		],
		name: "gateUpdateAndRunSolution",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "contestant",
				type: "address"
			}
		],
		name: "getContestantInfo",
		outputs: [
			{
				internalType: "address",
				name: "solution",
				type: "address"
			},
			{
				internalType: "uint32",
				name: "point",
				type: "uint32"
			},
			{
				internalType: "bool",
				name: "isPointUpToDate",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "id",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_id",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "_author",
				type: "address"
			},
			{
				internalType: "address",
				name: "_checker",
				type: "address"
			},
			{
				internalType: "address",
				name: "_gateFactory",
				type: "address"
			}
		],
		name: "initialize",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newChecker",
				type: "address"
			}
		],
		name: "modifyChecker",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "bytes",
						name: "input",
						type: "bytes"
					},
					{
						internalType: "bytes32",
						name: "output",
						type: "bytes32"
					},
					{
						internalType: "uint224",
						name: "gasLimit",
						type: "uint224"
					}
				],
				internalType: "struct TestCase[]",
				name: "newTests",
				type: "tuple[]"
			}
		],
		name: "replaceTests",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "contestant",
				type: "address"
			}
		],
		name: "runSolution",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "testLength",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "testVersion",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		name: "tests",
		outputs: [
			{
				internalType: "bytes",
				name: "input",
				type: "bytes"
			},
			{
				internalType: "bytes32",
				name: "output",
				type: "bytes32"
			},
			{
				internalType: "uint224",
				name: "gasLimit",
				type: "uint224"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "solution",
				type: "address"
			}
		],
		name: "updateAndRunSolution",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "solution",
				type: "address"
			}
		],
		name: "updateSolution",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	}
];

var abi$1 = [
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint256",
				name: "id",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "address",
				name: "solution",
				type: "address"
			}
		],
		name: "Deployment",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint8",
				name: "version",
				type: "uint8"
			}
		],
		name: "Initialized",
		type: "event"
	},
	{
		inputs: [
			{
				internalType: "bytes",
				name: "bytecode",
				type: "bytes"
			}
		],
		name: "deploy",
		outputs: [
			{
				internalType: "address",
				name: "solution",
				type: "address"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes",
				name: "bytecode",
				type: "bytes"
			},
			{
				internalType: "bytes",
				name: "input",
				type: "bytes"
			}
		],
		name: "deployAndRun",
		outputs: [
			{
				internalType: "bytes",
				name: "output",
				type: "bytes"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes",
				name: "bytecode",
				type: "bytes"
			},
			{
				internalType: "address",
				name: "problem",
				type: "address"
			}
		],
		name: "deployAndSubmit",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_user",
				type: "address"
			},
			{
				internalType: "string",
				name: "_username",
				type: "string"
			}
		],
		name: "initialize",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "nonce",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "solutionId",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "user",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "username",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	}
];

var abi$2 = [
	{
		inputs: [
		],
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "address",
				name: "previousAdmin",
				type: "address"
			},
			{
				indexed: false,
				internalType: "address",
				name: "newAdmin",
				type: "address"
			}
		],
		name: "AdminChanged",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "beacon",
				type: "address"
			}
		],
		name: "BeaconUpgraded",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				indexed: false,
				internalType: "string",
				name: "username",
				type: "string"
			},
			{
				indexed: false,
				internalType: "address",
				name: "gate",
				type: "address"
			}
		],
		name: "CreateGate",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint8",
				name: "version",
				type: "uint8"
			}
		],
		name: "Initialized",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address"
			}
		],
		name: "OwnershipTransferred",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "implementation",
				type: "address"
			}
		],
		name: "Upgraded",
		type: "event"
	},
	{
		inputs: [
		],
		name: "claimOwnership",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "username",
				type: "string"
			}
		],
		name: "createGate",
		outputs: [
			{
				internalType: "address",
				name: "gate",
				type: "address"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "gates",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "implementation",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_implementation",
				type: "address"
			}
		],
		name: "initialize",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "pendingOwner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "proxiableUUID",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newOwner",
				type: "address"
			},
			{
				internalType: "bool",
				name: "direct",
				type: "bool"
			},
			{
				internalType: "bool",
				name: "renounce",
				type: "bool"
			}
		],
		name: "transferOwnership",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newImplementation",
				type: "address"
			}
		],
		name: "upgradeBeacon",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newImplementation",
				type: "address"
			}
		],
		name: "upgradeTo",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newImplementation",
				type: "address"
			},
			{
				internalType: "bytes",
				name: "data",
				type: "bytes"
			}
		],
		name: "upgradeToAndCall",
		outputs: [
		],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				internalType: "address",
				name: "solution",
				type: "address"
			}
		],
		name: "verifySolution",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	}
];

var _templateObject;
var USERS_QUERY = /*#__PURE__*/gql(_templateObject || (_templateObject = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    query Users($limit: Int!, $skip: Int!) {\n        data: users(first: $limit, orderBy: syncingIndex, where: { syncingIndex_gt: $skip }) {\n            gate\n            username: id\n            address: user\n        }\n        total: bundle(id: \"users\") {\n            syncingIndex\n        }\n    }\n"])));

var SUBGRAPH_ENDPOINT = 'https://api.thegraph.com/subgraphs/name/leduythuccs/solidity-judge';

var UserSdk = /*#__PURE__*/function () {
  function UserSdk(signer) {
    this.signer = void 0;
    this.gateFactory = void 0;
    this.signer = signer;
    this.gateFactory = new Contract(DEPLOYMENT.gateFactory, abi$2, signer);
  }
  var _proto = UserSdk.prototype;
  _proto.getUsername = /*#__PURE__*/function () {
    var _getUsername = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(userAddr) {
      var userGate, gate;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return this.gateFactory.callStatic.gates(userAddr);
          case 2:
            userGate = _context.sent;
            if (!(userGate === ethers.constants.AddressZero)) {
              _context.next = 5;
              break;
            }
            return _context.abrupt("return", '');
          case 5:
            gate = new Contract(userGate, abi$1, this.signer);
            return _context.abrupt("return", gate.callStatic.username());
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee, this);
    }));
    function getUsername(_x) {
      return _getUsername.apply(this, arguments);
    }
    return getUsername;
  }();
  _proto.register = /*#__PURE__*/function () {
    var _register = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(username) {
      var userGate;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.t0 = this.gateFactory.callStatic;
            _context2.next = 3;
            return this.signer.getAddress();
          case 3:
            _context2.t1 = _context2.sent;
            _context2.next = 6;
            return _context2.t0.gates.call(_context2.t0, _context2.t1);
          case 6:
            userGate = _context2.sent;
            if (!(userGate !== ethers.constants.AddressZero)) {
              _context2.next = 9;
              break;
            }
            throw new Error('Already registered');
          case 9:
            return _context2.abrupt("return", this.gateFactory.createGate(username));
          case 10:
          case "end":
            return _context2.stop();
        }
      }, _callee2, this);
    }));
    function register(_x2) {
      return _register.apply(this, arguments);
    }
    return register;
  }();
  UserSdk.users = /*#__PURE__*/function () {
    var _users = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(_temp) {
      var _ref, _ref$limit, limit, _ref$skip, skip, results;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _ref = _temp === void 0 ? {} : _temp, _ref$limit = _ref.limit, limit = _ref$limit === void 0 ? 10 : _ref$limit, _ref$skip = _ref.skip, skip = _ref$skip === void 0 ? 0 : _ref$skip;
            _context3.next = 3;
            return request(SUBGRAPH_ENDPOINT, USERS_QUERY, {
              limit: limit,
              skip: skip
            });
          case 3:
            results = _context3.sent;
            return _context3.abrupt("return", {
              users: results.data,
              total: results.total.syncingIndex
            });
          case 5:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    function users(_x3) {
      return _users.apply(this, arguments);
    }
    return users;
  }();
  return UserSdk;
}();

var ProblemSDK = /*#__PURE__*/function () {
  function ProblemSDK(problemConfig, userAddr, signer) {
    this.problemConfig = void 0;
    this.userAddr = void 0;
    this.signer = void 0;
    this.gateFactory = void 0;
    this.problem = void 0;
    this.problemConfig = problemConfig;
    this.userAddr = userAddr;
    this.signer = signer;
    this.gateFactory = new Contract(DEPLOYMENT.gateFactory, abi$2, signer);
    this.problem = new Contract(problemConfig.address, abi, signer);
  }
  var _proto = ProblemSDK.prototype;
  _proto.addTest = /*#__PURE__*/function () {
    var _addTest = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(inputs, outputs, gasLimit) {
      var encodedInput, encodedOutput;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            encodedInput = this.encodeData(inputs, this.problemConfig.inputFormat);
            encodedOutput = ethers.utils.keccak256(this.encodeData(outputs, this.problemConfig.outputFormat));
            return _context.abrupt("return", this.problem.addTest({
              input: encodedInput,
              output: encodedOutput,
              gasLimit: gasLimit
            }));
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee, this);
    }));
    function addTest(_x, _x2, _x3) {
      return _addTest.apply(this, arguments);
    }
    return addTest;
  }();
  _proto.deployAndRunExample = /*#__PURE__*/function () {
    var _deployAndRunExample = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(inputs, bytecode) {
      var userGate, gate, encodedInput, encodedOutput;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return this.gateFactory.callStatic.gates(this.userAddr);
          case 2:
            userGate = _context2.sent;
            gate = new Contract(userGate, abi$1, this.signer);
            encodedInput = this.encodeData(inputs, this.problemConfig.inputFormat);
            _context2.next = 7;
            return gate.callStatic.deployAndRun(bytecode, encodedInput);
          case 7:
            encodedOutput = _context2.sent;
            return _context2.abrupt("return", this.decodeData(encodedOutput, this.problemConfig.outputFormat));
          case 9:
          case "end":
            return _context2.stop();
        }
      }, _callee2, this);
    }));
    function deployAndRunExample(_x4, _x5) {
      return _deployAndRunExample.apply(this, arguments);
    }
    return deployAndRunExample;
  }();
  _proto.submitSolution = /*#__PURE__*/function () {
    var _submitSolution = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(bytecode) {
      var userGate, gate;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return this.gateFactory.callStatic.gates(this.userAddr);
          case 2:
            userGate = _context3.sent;
            gate = new Contract(userGate, abi$1, this.signer);
            return _context3.abrupt("return", gate.deployAndSubmit(bytecode, this.problem.address));
          case 5:
          case "end":
            return _context3.stop();
        }
      }, _callee3, this);
    }));
    function submitSolution(_x6) {
      return _submitSolution.apply(this, arguments);
    }
    return submitSolution;
  }();
  _proto.getTests = /*#__PURE__*/function () {
    var _getTests = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(overrides) {
      var testCount, tests, i, test;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            if (overrides === void 0) {
              overrides = {};
            }
            _context4.next = 3;
            return this.problem.callStatic.testLength(overrides);
          case 3:
            testCount = _context4.sent.toNumber();
            tests = [];
            i = 0;
          case 6:
            if (!(i < testCount)) {
              _context4.next = 14;
              break;
            }
            _context4.next = 9;
            return this.problem.callStatic.tests(i, overrides);
          case 9:
            test = _context4.sent;
            tests.push({
              input: this.decodeData(test.input, this.problemConfig.inputFormat),
              gasLimit: test.gasLimit.toNumber()
            });
          case 11:
            i++;
            _context4.next = 6;
            break;
          case 14:
            return _context4.abrupt("return", tests);
          case 15:
          case "end":
            return _context4.stop();
        }
      }, _callee4, this);
    }));
    function getTests(_x7) {
      return _getTests.apply(this, arguments);
    }
    return getTests;
  }();
  _proto.parseSubmissionVerdict = /*#__PURE__*/function () {
    var _parseSubmissionVerdict = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(tx) {
      var _this = this;
      var txReceipt, filter, runSolutionEvents;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            if (!(typeof tx === 'string')) {
              _context5.next = 6;
              break;
            }
            _context5.next = 3;
            return this.signer.provider.getTransactionReceipt(tx);
          case 3:
            _context5.t0 = _context5.sent;
            _context5.next = 7;
            break;
          case 6:
            _context5.t0 = tx;
          case 7:
            txReceipt = _context5.t0;
            filter = this.problem.filters.RunSolution();
            runSolutionEvents = txReceipt.logs.filter(function (log) {
              return isSameAddress(log.topics[0], filter.topics[0]);
            }).map(function (log) {
              var raw = _this.problem["interface"].parseLog(log)['args'];
              var result = {
                contestant: raw.contestant,
                version: raw.version.toNumber(),
                point: raw.point.toNumber() / 100,
                verdicts: raw.verdicts
              };
              return result;
            });
            if (!(runSolutionEvents.length === 0)) {
              _context5.next = 12;
              break;
            }
            throw new Error('No RunSolution event found');
          case 12:
            _context5.t1 = _extends;
            _context5.t2 = {};
            _context5.t3 = runSolutionEvents[0];
            _context5.next = 17;
            return this.getTests({
              blockTag: txReceipt.blockNumber
            });
          case 17:
            _context5.t4 = _context5.sent;
            _context5.t5 = {
              tests: _context5.t4
            };
            return _context5.abrupt("return", (0, _context5.t1)(_context5.t2, _context5.t3, _context5.t5));
          case 20:
          case "end":
            return _context5.stop();
        }
      }, _callee5, this);
    }));
    function parseSubmissionVerdict(_x8) {
      return _parseSubmissionVerdict.apply(this, arguments);
    }
    return parseSubmissionVerdict;
  }();
  _proto.decodeData = function decodeData(data, format) {
    var decoded = ethers.utils.defaultAbiCoder.decode(format, data);
    return decoded.map(function (x) {
      if (Array.isArray(x)) {
        return x.map(function (y) {
          return y.toString();
        }).join(',');
      }
      return x.toString();
    });
  };
  _proto.encodeData = function encodeData(data, format) {
    return ethers.utils.defaultAbiCoder.encode(format, data);
  };
  return ProblemSDK;
}();

export { ProblemSDK, TestCaseVerdict, USERS_QUERY, UserSdk, compileSolidity, getCompilerVersion, isSameAddress };
//# sourceMappingURL=sdk.esm.js.map
