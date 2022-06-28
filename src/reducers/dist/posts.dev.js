"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var _default = function _default() {
  var posts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;

    case "UPDATE":
    case "LIKE":
      return posts.map(function (post) {
        return post._id === action.payload._id ? action.payload : post;
      });

    case "CREATE":
      return [].concat(_toConsumableArray(posts), [action.payload]);

    case "DELETE":
      return posts.filter(function (post) {
        return post._id !== action.payload;
      });

    default:
      return posts;
  }
};

exports["default"] = _default;