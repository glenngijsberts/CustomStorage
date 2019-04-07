"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CustomStorage =
/*#__PURE__*/
function () {
  function CustomStorage() {
    _classCallCheck(this, CustomStorage);
  }

  _createClass(CustomStorage, [{
    key: "get",
    value: function get(key) {
      var cached = JSON.parse(localStorage.getItem(key));

      if (!cached) {
        return null;
      }

      var expires = new Date(cached.expires);

      if (expires < new Date()) {
        localStorage.removeItem(key);
        return null;
      }

      return cached.value;
    }
  }, {
    key: "set",
    value: function set(key, value, timeInMinutes) {
      var currentTime = new Date().getTime();
      var expires = new Date(currentTime + timeInMinutes * 60000);
      localStorage.setItem(key, JSON.stringify({
        value: value,
        expires: expires
      }));
    }
  }, {
    key: "remove",
    value: function remove(key) {
      localStorage.removeItem(key);
    }
  }, {
    key: "clear",
    value: function clear() {
      localStorage.clear();
    }
  }]);

  return CustomStorage;
}();

var _default = new CustomStorage();

exports["default"] = _default;
