webpackHotUpdate("craig-blog",{

/***/ "./packages/jsnation-theme/src/components/post.js":
/*!********************************************************!*\
  !*** ./packages/jsnation-theme/src/components/post.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}var Post=(_ref)=>{var{state}=_ref;var data=state.source.get(state.router.link);var post=state.source[data.type][data.id];var author=state.source.author[post.author];return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"div\",null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"h2\",null,post.title.rendered),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(PostInfo,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"p\",null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"strong\",null,\"Posted: \"),post.date),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"p\",null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"strong\",null,\"Author: \"),author.name)),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"div\",{dangerouslySetInnerHTML:{__html:post.content.rendered}}));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(Post));var PostInfo=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"e17cof2w0\",label:\"PostInfo\"})( false?undefined:{name:\"f5nefx\",styles:\"background-image:linear-gradient(to right,#f4f4f4,#fff);margin-bottom:1em;padding:0.5em 0.5em 0.5em 0.5em;border-left:4px solid lightseagreen;front-size:0.8em;& > p{margin:0;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQ3JhaWdBbGxlblxcRG9jdW1lbnRzXFxBcHBzXFxjcmFpZy1ibG9nXFxwYWNrYWdlc1xcanNuYXRpb24tdGhlbWVcXHNyY1xcY29tcG9uZW50c1xccG9zdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QjJCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQ3JhaWdBbGxlblxcRG9jdW1lbnRzXFxBcHBzXFxjcmFpZy1ibG9nXFxwYWNrYWdlc1xcanNuYXRpb24tdGhlbWVcXHNyY1xcY29tcG9uZW50c1xccG9zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkIH0gZnJvbSBcImZyb250aXR5XCI7XHJcblxyXG5jb25zdCBQb3N0ID0gKHsgc3RhdGV9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xyXG4gICAgY29uc3QgcG9zdCA9IHN0YXRlLnNvdXJjZVtkYXRhLnR5cGVdW2RhdGEuaWRdO1xyXG4gICAgY29uc3QgYXV0aG9yID0gc3RhdGUuc291cmNlLmF1dGhvcltwb3N0LmF1dGhvcl07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDI+e3Bvc3QudGl0bGUucmVuZGVyZWR9PC9oMj5cclxuICAgICAgICAgICAgPFBvc3RJbmZvPlxyXG4gICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5Qb3N0ZWQ6IDwvc3Ryb25nPntwb3N0LmRhdGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5BdXRob3I6IDwvc3Ryb25nPnthdXRob3IubmFtZX08L3A+XHJcbiAgICAgICAgICAgIDwvUG9zdEluZm8+XHJcbiAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHBvc3QuY29udGVudC5yZW5kZXJlZH19IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoUG9zdCk7XHJcblxyXG5jb25zdCBQb3N0SW5mbyA9IHN0eWxlZC5kaXZgXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmNGY0ZjQsICNmZmYpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgcGFkZGluZzogMC41ZW0gMC41ZW0gMC41ZW0gMC41ZW07XHJcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIGxpZ2h0c2VhZ3JlZW47XHJcbiAgICBmcm9udC1zaXplOiAwLjhlbTtcclxuXHJcbiAgICAmID4gcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG5gIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9qc25hdGlvbi10aGVtZS9zcmMvY29tcG9uZW50cy9wb3N0LmpzP2VjZmEiXSwibmFtZXMiOlsiUG9zdCIsInN0YXRlIiwiZGF0YSIsInNvdXJjZSIsImdldCIsInJvdXRlciIsImxpbmsiLCJwb3N0IiwidHlwZSIsImlkIiwiYXV0aG9yIiwidGl0bGUiLCJyZW5kZXJlZCIsImRhdGUiLCJuYW1lIiwiX19odG1sIiwiY29udGVudCIsImNvbm5lY3QiLCJQb3N0SW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztxUkFHQSxHQUFNQSxLQUFJLENBQUcsUUFBYyxJQUFiLENBQUVDLEtBQUYsQ0FBYSxNQUV2QixHQUFNQyxLQUFJLENBQUdELEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxHQUFiLENBQWlCSCxLQUFLLENBQUNJLE1BQU4sQ0FBYUMsSUFBOUIsQ0FBYixDQUNBLEdBQU1DLEtBQUksQ0FBR04sS0FBSyxDQUFDRSxNQUFOLENBQWFELElBQUksQ0FBQ00sSUFBbEIsRUFBd0JOLElBQUksQ0FBQ08sRUFBN0IsQ0FBYixDQUNBLEdBQU1DLE9BQU0sQ0FBR1QsS0FBSyxDQUFDRSxNQUFOLENBQWFPLE1BQWIsQ0FBb0JILElBQUksQ0FBQ0csTUFBekIsQ0FBZixDQUVBLE1BQ0ksc0VBQ0ksb0VBQUtILElBQUksQ0FBQ0ksS0FBTCxDQUFXQyxRQUFoQixDQURKLENBRUksMERBQUMsUUFBRCxNQUNJLG1FQUFHLG1GQUFILENBQTZCTCxJQUFJLENBQUNNLElBQWxDLENBREosQ0FFSSxtRUFBRyxtRkFBSCxDQUE2QkgsTUFBTSxDQUFDSSxJQUFwQyxDQUZKLENBRkosQ0FNSSxpRUFBSyx1QkFBdUIsQ0FBRSxDQUFDQyxNQUFNLENBQUVSLElBQUksQ0FBQ1MsT0FBTCxDQUFhSixRQUF0QixDQUE5QixFQU5KLENBREosQ0FVSCxDQWhCRCxDQWtCZUssdUhBQU8sQ0FBQ2pCLElBQUQsQ0FBdEIsRUFFQSxHQUFNa0IsU0FBUSx5bkVBQWQiLCJmaWxlIjoiLi9wYWNrYWdlcy9qc25hdGlvbi10aGVtZS9zcmMvY29tcG9uZW50cy9wb3N0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcclxuXHJcbmNvbnN0IFBvc3QgPSAoeyBzdGF0ZX0pID0+IHtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XHJcbiAgICBjb25zdCBwb3N0ID0gc3RhdGUuc291cmNlW2RhdGEudHlwZV1bZGF0YS5pZF07XHJcbiAgICBjb25zdCBhdXRob3IgPSBzdGF0ZS5zb3VyY2UuYXV0aG9yW3Bvc3QuYXV0aG9yXTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMj57cG9zdC50aXRsZS5yZW5kZXJlZH08L2gyPlxyXG4gICAgICAgICAgICA8UG9zdEluZm8+XHJcbiAgICAgICAgICAgICAgICA8cD48c3Ryb25nPlBvc3RlZDogPC9zdHJvbmc+e3Bvc3QuZGF0ZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD48c3Ryb25nPkF1dGhvcjogPC9zdHJvbmc+e2F1dGhvci5uYW1lfTwvcD5cclxuICAgICAgICAgICAgPC9Qb3N0SW5mbz5cclxuICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogcG9zdC5jb250ZW50LnJlbmRlcmVkfX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChQb3N0KTtcclxuXHJcbmNvbnN0IFBvc3RJbmZvID0gc3R5bGVkLmRpdmBcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2Y0ZjRmNCwgI2ZmZik7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICBwYWRkaW5nOiAwLjVlbSAwLjVlbSAwLjVlbSAwLjVlbTtcclxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgbGlnaHRzZWFncmVlbjtcclxuICAgIGZyb250LXNpemU6IDAuOGVtO1xyXG5cclxuICAgICYgPiBwIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbmAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/jsnation-theme/src/components/post.js\n");

/***/ })

})