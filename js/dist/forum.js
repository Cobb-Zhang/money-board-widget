/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common/components/MoneyBoardListItem.js":
/*!*****************************************************!*\
  !*** ./src/common/components/MoneyBoardListItem.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MoneyLeaderboardListItem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Link */ "flarum/components/Link");
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/avatar */ "flarum/helpers/avatar");
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/helpers/username */ "flarum/helpers/username");
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_username__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_5__);






var MoneyLeaderboardListItem = /*#__PURE__*/function (_Component) {
  function MoneyLeaderboardListItem() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(MoneyLeaderboardListItem, _Component);
  var _proto = MoneyLeaderboardListItem.prototype;
  _proto.view = function view() {
    var _this$attrs = this.attrs,
      leaderboardListItem = _this$attrs.leaderboardListItem,
      rankID = _this$attrs.rankID;
    var moneyName = flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().forum.attribute('antoinefr-money.moneyname') || '[money]';
    var moneyValue = leaderboardListItem.attribute("money");
    // const moneyText = app.forum.attribute('moneyLeaderBoardHideMoneyText') === "1" ? moneyValue : moneyName.replace('[money]', moneyValue);
    var moneyText = moneyValue;
    var trophyClass = "MoneyLeaderboardListItemTrophyNone";
    var rankClass = "MoneyLeaderboardListItemRankTop";
    if (rankID === 1) {
      trophyClass = "MoneyLeaderboardListItemTrophyGold";
    } else if (rankID === 2) {
      trophyClass = "MoneyLeaderboardListItemTrophySilver";
    } else if (rankID === 3) {
      trophyClass = "MoneyLeaderboardListItemTrophyBronze";
    } else {
      rankClass = "MoneyLeaderboardListItemRankLower";
    }
    var avatarWithFrame, usernameWithColor;
    return m("div", {
      className: "MoneyLeaderboardListItemContainer"
    }, m("div", {
      "class": "MoneyLeaderboardListHeaderRank"
    }, m("div", {
      "class": rankClass
    }, rankID), m("div", {
      "class": trophyClass
    }, m("i", {
      "class": "fas fa-trophy"
    }))), m("div", {
      "class": "MoneyLeaderboardListHeaderUser"
    }, m((flarum_components_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: flarum_common_app__WEBPACK_IMPORTED_MODULE_5___default().route.user(leaderboardListItem),
      className: "transferHistoryUser",
      style: "color:var(--heading-color)"
    }, flarum_helpers_username__WEBPACK_IMPORTED_MODULE_4___default()(leaderboardListItem))), m("div", {
      "class": "MoneyLeaderboardListHeaderMoney"
    }, moneyText));
  };
  return MoneyLeaderboardListItem;
}((flarum_Component__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/common/components/MoneyLeaderboardWidget.js":
/*!*********************************************************!*\
  !*** ./src/common/components/MoneyLeaderboardWidget.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyWidget)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_extensions_afrux_forum_widgets_core_common_components_Widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/extensions/afrux-forum-widgets-core/common/components/Widget */ "flarum/extensions/afrux-forum-widgets-core/common/components/Widget");
/* harmony import */ var flarum_extensions_afrux_forum_widgets_core_common_components_Widget__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_extensions_afrux_forum_widgets_core_common_components_Widget__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _MoneyBoardListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MoneyBoardListItem */ "./src/common/components/MoneyBoardListItem.js");





var MyWidget = /*#__PURE__*/function (_Widget) {
  function MyWidget() {
    return _Widget.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(MyWidget, _Widget);
  var _proto = MyWidget.prototype;
  _proto.oninit = function oninit(vnode) {
    var _this$moneyBoardList, _this$attrs$state, _this$attrs$state$isL, _this$attrs$state2, _this$attrs$state2$ha;
    _Widget.prototype.oninit.call(this, vnode);
    this.maxLoadCount = flarum_common_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute("leaderboardMaxLoadCount") || 10;
    this.initloadCount = 20;
    (_this$moneyBoardList = this.moneyBoardList) != null ? _this$moneyBoardList : this.moneyBoardList = [];
    this.totalLoadCount = 0;
    this.moreResults = false;
    (_this$attrs$state$isL = (_this$attrs$state = this.attrs.state).isLoading) != null ? _this$attrs$state$isL : _this$attrs$state.isLoading = true;
    (_this$attrs$state2$ha = (_this$attrs$state2 = this.attrs.state).hasLoaded) != null ? _this$attrs$state2$ha : _this$attrs$state2.hasLoaded = false;
    this.loadResults(0, this.initloadCount);
  };
  _proto.oncreate = function oncreate(vnode) {
    _Widget.prototype.oncreate.call(this, vnode);
  };
  _proto.className = function className() {
    return 'cobbz-leaderboardWidget';
  };
  _proto.icon = function icon() {
    // Widget icon.
    return 'fas fa-sort-amount-up';
  };
  _proto.title = function title() {
    // Widget title.
    // Can return empty for a titleless widget.
    return flarum_common_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('cobbz-money-board-widget.forum.leaderboard-name');
  };
  _proto.description = function description() {
    return '';
  };
  _proto.content = function content() {
    // 如果没有加载出来显示这个
    var rankID = 0;
    var loading;
    if (this.attrs.state.isLoading) {
      loading = m((flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3___default()), null);
    }
    return m("div", {
      className: "cobbz-money-board-widget"
    }, m("div", {
      "class": "MoneyBoardContainer"
    }, m("div", {
      "class": "MoneyLeaderboardListHeader"
    }, m("div", {
      "class": "MoneyLeaderboardListHeaderRank"
    }, flarum_common_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans("cobbz-money-board-widget.forum.leaderboard-list-rank")), m("div", {
      "class": "MoneyLeaderboardListHeaderUser"
    }, flarum_common_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans("cobbz-money-board-widget.forum.leaderboard-list-user")), m("div", {
      "class": "MoneyLeaderboardListHeaderMoney"
    }, flarum_common_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans("cobbz-money-board-widget.forum.leaderboard-list-money"))), m("ul", {
      "class": "MoneyLeaderboardList"
    }, this.moneyBoardList.map(function (leaderboardListItem) {
      rankID++;
      return m("li", {
        "class": "MoneyLeaderboardListItems"
      }, _MoneyBoardListItem__WEBPACK_IMPORTED_MODULE_4__["default"].component({
        leaderboardListItem: leaderboardListItem,
        rankID: rankID
      }));
    })), loading && m("div", {
      className: "MoneyLeaderboard-loadMore"
    }, loading)));
  };
  _proto.parseResults = function parseResults(results) {
    this.moreResults = !!results.payload.links && !!results.payload.links.next;
    [].push.apply(this.moneyBoardList, results);
    this.attrs.state.isLoading = false;
    m.redraw();
    return results;
  };
  _proto.loadResults = function loadResults(offset, loadCount) {
    if (offset === void 0) {
      offset = 0;
    }
    if (loadCount === void 0) {
      loadCount = 20;
    }
    if (this.maxLoadCount === this.totalLoadCount) {
      return;
    }
    var limit = loadCount;
    if (this.maxLoadCount < this.totalLoadCount + loadCount) {
      limit = this.maxLoadCount - this.totalLoadCount;
      this.totalLoadCount = this.maxLoadCount;
    }
    this.totalLoadCount += loadCount;
    return flarum_common_app__WEBPACK_IMPORTED_MODULE_2___default().store.find("moneyboard", {
      page: {
        offset: offset,
        limit: limit
      }
    })["catch"](function () {}).then(this.parseResults.bind(this));
  };
  return MyWidget;
}((flarum_extensions_afrux_forum_widgets_core_common_components_Widget__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/common/index.ts":
/*!*****************************!*\
  !*** ./src/common/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_0__);

flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('cobbz/money-board-widget', function () {
  console.log('[cobbz/money-board-widget] Hello, forum and admin!');
});

/***/ }),

/***/ "./src/common/registerWidget.js":
/*!**************************************!*\
  !*** ./src/common/registerWidget.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_extensions_afrux_forum_widgets_core_common_extend_Widgets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extensions/afrux-forum-widgets-core/common/extend/Widgets */ "flarum/extensions/afrux-forum-widgets-core/common/extend/Widgets");
/* harmony import */ var flarum_extensions_afrux_forum_widgets_core_common_extend_Widgets__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extensions_afrux_forum_widgets_core_common_extend_Widgets__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MoneyLeaderboardWidget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/MoneyLeaderboardWidget */ "./src/common/components/MoneyLeaderboardWidget.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(app) {
  new (flarum_extensions_afrux_forum_widgets_core_common_extend_Widgets__WEBPACK_IMPORTED_MODULE_0___default())().add({
    key: 'onlineUsers',
    component: _components_MoneyLeaderboardWidget__WEBPACK_IMPORTED_MODULE_1__["default"],
    // Can be a callback that returns a boolean value.
    // example: () => app.forum.attribute('myCustomExtension.mySetting')
    isDisabled: false,
    // Is this a one time use widget ? leave true if you don't know.
    isUnique: true,
    // The following values are default values that can be changed by the admin.
    placement: 'end',
    position: 1
  }).extend(app, 'cobbz-money-board-widget');
}
;

/***/ }),

/***/ "./src/forum/index.ts":
/*!****************************!*\
  !*** ./src/forum/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_registerWidget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/registerWidget */ "./src/common/registerWidget.js");


flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('cobbz/money-board-widget', function () {
  (0,_common_registerWidget__WEBPACK_IMPORTED_MODULE_1__["default"])((flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default()));
});

/***/ }),

/***/ "flarum/Component":
/*!**************************************************!*\
  !*** external "flarum.core.compat['Component']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['Component'];

/***/ }),

/***/ "flarum/common/app":
/*!***************************************************!*\
  !*** external "flarum.core.compat['common/app']" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/app'];

/***/ }),

/***/ "flarum/common/components/LoadingIndicator":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['common/components/LoadingIndicator']" ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/LoadingIndicator'];

/***/ }),

/***/ "flarum/components/Link":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Link']" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/Link'];

/***/ }),

/***/ "flarum/extensions/afrux-forum-widgets-core/common/components/Widget":
/*!*****************************************************************************************************!*\
  !*** external "flarum.core.compat['extensions/afrux-forum-widgets-core/common/components/Widget']" ***!
  \*****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['extensions/afrux-forum-widgets-core/common/components/Widget'];

/***/ }),

/***/ "flarum/extensions/afrux-forum-widgets-core/common/extend/Widgets":
/*!**************************************************************************************************!*\
  !*** external "flarum.core.compat['extensions/afrux-forum-widgets-core/common/extend/Widgets']" ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['extensions/afrux-forum-widgets-core/common/extend/Widgets'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/helpers/avatar":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['helpers/avatar']" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['helpers/avatar'];

/***/ }),

/***/ "flarum/helpers/username":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['helpers/username']" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['helpers/username'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, o);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ "./src/common/index.ts");
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.ts");


})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map