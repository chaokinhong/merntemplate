"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signUp = exports.signIn = exports.likePost = exports.deletePost = exports.updatePost = exports.createPost = exports.fetchPosts = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// url pointing to backend route
// https://hope-it-works.herokuapp.com/posts
var API = _axios["default"].create({
  baseURL: "http://localhost:5000"
});

API.interceptors.request.use(function (req) {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = "Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token);
  }

  return req;
});

var fetchPosts = function fetchPosts() {
  return API.get("/posts");
};

exports.fetchPosts = fetchPosts;

var createPost = function createPost(newPost) {
  return API.post("/posts", newPost);
};

exports.createPost = createPost;

var updatePost = function updatePost(id, updatedPost) {
  return API.patch("/posts/".concat(id), updatedPost);
};

exports.updatePost = updatePost;

var deletePost = function deletePost(id) {
  return API["delete"]("/posts/".concat(id));
};

exports.deletePost = deletePost;

var likePost = function likePost(id) {
  return API.patch("/posts/".concat(id, "/likePost"));
};

exports.likePost = likePost;

var signIn = function signIn(formData) {
  return API.post("/user/signin", formData);
};

exports.signIn = signIn;

var signUp = function signUp(formData) {
  return API.post("/user/signup", formData);
};

exports.signUp = signUp;