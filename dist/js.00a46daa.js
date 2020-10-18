// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
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
      localRequire.cache = {};

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

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
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
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/questions&answers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noobAlertGIFS = exports.quizQuestions = void 0;
var quizQuestions = [{
  number: 1,
  question: "What is the best shoe?",
  answers: {
    a: "Vans",
    b: "Crocs",
    c: "Socks & Sandals",
    d: "My bare toes"
  },
  correctAnswer: "Crocs"
}, {
  number: 2,
  question: "How do you fly?",
  answers: {
    a: "Extremely built up flatulence",
    b: "Airplane",
    c: "My inner chicken",
    d: "Helicopter"
  },
  correctAnswer: "Extremely built up flatulence"
}, {
  number: 3,
  question: "Do you like free stuff?",
  answers: {
    a: "No",
    b: "Only if it's on sale",
    c: "Yes",
    d: "YES"
  },
  correctAnswer: "YES"
}, {
  number: 4,
  question: "What is the best way to cut your bagels?",
  answers: {
    a: "Halves",
    b: "Thirds",
    c: "Quarters",
    d: "I chomp it whole"
  },
  correctAnswer: "Quarters"
}, {
  number: 5,
  question: "When eating a bowl of cereal, what do you pour first?",
  answers: {
    a: "Milk",
    b: "Cereal",
    c: "Both because I'm an expert multitasker",
    d: "Spoon"
  },
  correctAnswer: "Milk"
}, {
  number: 6,
  question: "What is the best breakfast?",
  answers: {
    a: "Green Eggs & Ham",
    b: "Red Eggs & Spam",
    c: "Oatmeal",
    d: "Untoasted toast, Choi style"
  },
  correctAnswer: "Oatmeal"
}, {
  number: 7,
  question: "Do you know how to use chopsticks?",
  answers: {
    a: "Yes, um duhh",
    b: "No",
    c: "Only one singular chopstick",
    d: "That's racist"
  },
  correctAnswer: "No"
}, {
  number: 8,
  question: "Do you eat or drink soup?",
  answers: {
    a: "Slurrrppp",
    b: "Drink",
    c: "Eat",
    d: "Nonstop chug"
  },
  correctAnswer: "Slurrrppp"
}, {
  number: 9,
  question: "Hey, you've got something on your shirt - ",
  answers: {
    a: "WOOP!",
    b: "DONE GOOFED!",
    c: "BAHAHAHA!",
    d: "That's embarassing"
  },
  correctAnswer: "WOOP!"
}, {
  number: 10,
  question: "Can you ride a bike?",
  answers: {
    a: "I am Karen Choi",
    b: "hard pass",
    c: "Yes",
    d: "Duh"
  },
  correctAnswer: "Yes"
}];
exports.quizQuestions = quizQuestions;
var noobAlertGIFS = ["https://i.postimg.cc/d17DFwPg/massive-Noob-Alert.gif", "https://i.postimg.cc/s2mG1Sgd/banananoob.gif", "https://i.postimg.cc/wMP9wjMf/obama-Noob-gif.gif", "https://i.postimg.cc/52yRxSPC/amateur-Noob.gif", "https://i.postimg.cc/4xHQLLLB/cool-Beans.gif"];
exports.noobAlertGIFS = noobAlertGIFS;
},{}],"js/DOM.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DOMSelectors = void 0;
var DOMSelectors = {
  quizContainer: document.querySelector("#quiz"),
  resultsContainer: document.querySelector(".results"),
  results: document.querySelector(".message"),
  submitButton: document.querySelector("#submit"),
  closeResults: document.querySelector(".close")
};
exports.DOMSelectors = DOMSelectors;
},{}],"js/index.js":[function(require,module,exports) {
"use strict";

var _questionsAnswers = require("./questions&answers");

var _DOM = require("./DOM");

console.log("connected");

var init = function init() {
  _questionsAnswers.quizQuestions.forEach(function (item) {
    return _DOM.DOMSelectors.quizContainer.insertAdjacentHTML("beforeend", "<div class=\"question\" id=\"".concat(item.number, "\" >\n              <div class=\"questionAsked\" >").concat(item.question, "</div>\n              <br>\n              <div class=\"choicesContainer\" >\n                <div class=\"row\" >              \n                    <input type=\"radio\" name=\"").concat(item.number, "\" value=\"").concat(item.answers.a, "\">\n                    <label for=\"").concat(item.answers.a, "\">").concat(item.answers.a, "</label>\n                </div>\n\n                <div class=\"row\" >              \n                <input type=\"radio\" name=\"").concat(item.number, "\" value=\"").concat(item.answers.b, "\">\n                <label for=\"").concat(item.answers, "\">").concat(item.answers.b, "</label>\n                </div>\n\n                <div class=\"row\" >              \n                <input type=\"radio\" name=\"").concat(item.number, "\"  value=\"").concat(item.answers.c, "\">\n                <label for=\"").concat(item.answers, "\">").concat(item.answers.c, "</label>\n                </div>\n\n                <div class=\"row\" >              \n                <input type=\"radio\" name=\"").concat(item.number, "\"  value=\"").concat(item.answers.d, "\">\n                <label for=\"").concat(item.answers, "\">").concat(item.answers.d, "</label>\n                </div>\n              \n              </div>\n            </div>"));
  });

  var submitQuiz = function submitQuiz() {
    var quizScore = 0;

    _questionsAnswers.quizQuestions.forEach(function (question) {
      var answerSelected = document.querySelector("input[name=\"".concat(question.number, "\"]:checked")).value;

      if (answerSelected === "".concat(question.correctAnswer)) {
        quizScore++;
        document.getElementById("".concat(question.number)).style.backgroundColor = "rgb(10,200,110)";
      } else {
        document.getElementById("".concat(question.number)).style.backgroundColor = "rgb(200,100,110)";
      }
    });

    function noobLevel() {
      var noobAlertMessage;
      var noobAlertMedia;
      _DOM.DOMSelectors.resultsContainer.style.display = "block";

      if ("".concat(quizScore) >= "8") {
        noobAlertMessage = "NO NOOBYNESS HERE";
        noobAlertMedia = _questionsAnswers.noobAlertGIFS[4];
      } else if ("".concat(quizScore) >= "6") {
        noobAlertMessage = "AMATEUR NOOB";
        noobAlertMedia = _questionsAnswers.noobAlertGIFS[3];
      } else if ("".concat(quizScore) >= "4") {
        noobAlertMessage = "MINOR NOOB ALERT";
        noobAlertMedia = _questionsAnswers.noobAlertGIFS[2];
      } else if ("".concat(quizScore) >= "2") {
        noobAlertMessage = "MAJOR NOOB ALERT";
        noobAlertMedia = _questionsAnswers.noobAlertGIFS[1];
      } else {
        noobAlertMessage = "MASSIVE NOOB ALERT!! BEWARE!!";
        noobAlertMedia = _questionsAnswers.noobAlertGIFS[0];
      }

      _DOM.DOMSelectors.results.innerHTML = "";

      _DOM.DOMSelectors.results.insertAdjacentHTML("beforeend", "<div class=\"noobAlert\" >\n      <div>Your Score is ".concat(quizScore, "/").concat(_questionsAnswers.quizQuestions.length, "</div>\n      <div> ").concat(noobAlertMessage, " </div>\n      <img  class=\"noobAlertMedia\" src=\"").concat(noobAlertMedia, "\" >\n      </div> \n      "));
    }

    noobLevel();
  };

  _DOM.DOMSelectors.submitButton.addEventListener("click", submitQuiz);

  function closeResults() {
    _DOM.DOMSelectors.resultsContainer.style.display = "none";
  }

  _DOM.DOMSelectors.closeResults.addEventListener("click", closeResults);
};

init();
},{"./questions&answers":"js/questions&answers.js","./DOM":"js/DOM.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52152" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map