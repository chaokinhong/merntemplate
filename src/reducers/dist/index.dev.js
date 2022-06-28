"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _posts = _interopRequireDefault(require("./posts"));

var _auth = _interopRequireDefault(require("./auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  posts: _posts["default"],
  authReducer: _auth["default"]
};
exports["default"] = _default;