/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/api_util.js":
/*!******************************!*\
  !*** ./frontend/api_util.js ***!
  \******************************/
/***/ ((module) => {

const APIUtil = {
    followUser: id => {
      return $.ajax({
        url: `/users/${id}/follow`,
        dataType: 'json',
        method: 'post'
      });
    },
  
    unfollowUser: id => {
        return $.ajax({
            url: `/users/${id}/follow`,
            dataType: 'json',
            method: 'delete'
          });
    }
  };
  
  module.exports = APIUtil;

/***/ }),

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const APIUtil = __webpack_require__(/*! ./api_util */ "./frontend/api_util.js");

class FollowToggle {
    constructor(el) {
        this.el = $(el);
        this.userId = this.el.data('user-id');
        this.followState = this.el.data('initial-follow-state');
        this.render();
        this.el.on('click', this.handleClick.bind(this));
    };
    render() {
        if (this.followState === "Following") {
            this.el.html('Unfollow');
        } else if (this.followState === "Not following") {
            this.el.html('Follow');
        }
    };    
    handleClick(e) {
        e.preventDefault();
        let that = this;
        if (this.followState === "Following") {
            APIUtil.unfollowUser(this.userId)
                .then(function () {
                    that.followState = "Not following";
                    that.render();
                });
        } else if (this.followState === "Not following") {
            APIUtil.followUser(this.userId)
                .then(function () {
                    that.followState = "Following";
                    that.render();
                });
        }
    };
}
// if (this.followState === "Following") {
//     APIUtil.unfollowUser(this.userId)
//         .then(function () {
//             that.followState = "Not following";
//             that.render();
//         });
// } else if (this.followState === "Not following") {
//     APIUtil.followUser(this.userId)
//         .then(function () {
//             that.followState = "Following";
//             that.render();
//         });
// }

module.exports = FollowToggle;

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
const FollowToggle = __webpack_require__(/*! ./follow_toggle */ "./frontend/follow_toggle.js");

$(function () {

    $('.follow-toggle').each(function (idx, el) {
        return new FollowToggle(el);
    });
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map