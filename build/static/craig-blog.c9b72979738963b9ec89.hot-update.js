webpackHotUpdate("craig-blog",{

/***/ "./packages/jsnation-theme/src/components/index.js":
/*!*********************************************************!*\
  !*** ./packages/jsnation-theme/src/components/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./link */ \"./packages/jsnation-theme/src/components/link.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list */ \"./packages/jsnation-theme/src/components/list.js\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post */ \"./packages/jsnation-theme/src/components/post.js\");\n/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page */ \"./packages/jsnation-theme/src/components/page.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}var _ref= false?undefined:{name:\"1ru6a4a-Root\",styles:\"html{font-family:sans-serif;};label:Root;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQ3JhaWdBbGxlblxcRG9jdW1lbnRzXFxBcHBzXFxjcmFpZy1ibG9nXFxwYWNrYWdlc1xcanNuYXRpb24tdGhlbWVcXHNyY1xcY29tcG9uZW50c1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV3FCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQ3JhaWdBbGxlblxcRG9jdW1lbnRzXFxBcHBzXFxjcmFpZy1ibG9nXFxwYWNrYWdlc1xcanNuYXRpb24tdGhlbWVcXHNyY1xcY29tcG9uZW50c1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0LCBHbG9iYWwsIGNzcywgc3R5bGVkIH0gZnJvbSBcImZyb250aXR5XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwiLi9saW5rXCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCIuL2xpc3RcIjtcclxuaW1wb3J0IFBvc3QgZnJvbSBcIi4vcG9zdFwiO1xyXG5pbXBvcnQgUGFnZSBmcm9tIFwiLi9wYWdlXCI7XHJcblxyXG5jb25zdCBSb290ID0gKHsgc3RhdGUgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8R2xvYmFsXHJcbiAgICAgICAgICBzdHlsZXM9e2Nzc2BcclxuICAgICAgICAgICAgaHRtbCB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aDE+Q3JhaWcgQWxsZW48L2gxPlxyXG4gICAgICAgIDxwPkN1cnJlbnQgVVJMOiB7c3RhdGUucm91dGVyLmxpbmt9PC9wPlxyXG4gICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+SG9tZTwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wYWdlLzJcIj5Nb3JlIFBvc3RzPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiY29udGFjdFwiPkNvbnRhY3Q8L0xpbms+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgIHtzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKS5pc0FyY2hpdmUgJiYgPExpc3QgLz59XHJcbiAgICAgICAgICAgIHtzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKS5pc1Bvc3RUeXBlICYmIDxQb3N0IC8+fVxyXG4gICAgICAgICAgICB7c3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluaykuaXNQYWdlVHlwZSAmJiA8UGFnZSAvPn1cclxuICAgICAgICAgICAge3N0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspLmlzNDA0ICYmIDxQYWdlNDA0IC8+fVxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFJvb3QpO1xyXG5cclxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjXHJcbmAiXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__};var Root=(_ref2)=>{var{state}=_ref2;return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"Global\"],{styles:_ref}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"h1\",null,\"Craig Allen\"),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"p\",null,\"Current URL: \",state.router.link),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"nav\",null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{href:\"/\"},\"Home\"),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{href:\"/page/2\"},\"More Posts\"),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{href:\"contact\"},\"Contact\")),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"hr\",null),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"main\",null,state.source.get(state.router.link).isArchive&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_list__WEBPACK_IMPORTED_MODULE_5__[\"default\"],null),state.source.get(state.router.link).isPostType&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_post__WEBPACK_IMPORTED_MODULE_6__[\"default\"],null),state.source.get(state.router.link).isPageType&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_page__WEBPACK_IMPORTED_MODULE_7__[\"default\"],null),state.source.get(state.router.link).is404&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(Page404,null)));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Root));var Header=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"header\",{target:\"ecj0j5k0\",label:\"Header\"})( false?undefined:{name:\"2vdfmp\",styles:\"background-color:#\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQ3JhaWdBbGxlblxcRG9jdW1lbnRzXFxBcHBzXFxjcmFpZy1ibG9nXFxwYWNrYWdlc1xcanNuYXRpb24tdGhlbWVcXHNyY1xcY29tcG9uZW50c1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUM0QiIsImZpbGUiOiJDOlxcVXNlcnNcXENyYWlnQWxsZW5cXERvY3VtZW50c1xcQXBwc1xcY3JhaWctYmxvZ1xccGFja2FnZXNcXGpzbmF0aW9uLXRoZW1lXFxzcmNcXGNvbXBvbmVudHNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCwgR2xvYmFsLCBjc3MsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIi4vbGlua1wiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9saXN0XCI7XHJcbmltcG9ydCBQb3N0IGZyb20gXCIuL3Bvc3RcIjtcclxuaW1wb3J0IFBhZ2UgZnJvbSBcIi4vcGFnZVwiO1xyXG5cclxuY29uc3QgUm9vdCA9ICh7IHN0YXRlIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPEdsb2JhbFxyXG4gICAgICAgICAgc3R5bGVzPXtjc3NgXHJcbiAgICAgICAgICAgIGh0bWwge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGgxPkNyYWlnIEFsbGVuPC9oMT5cclxuICAgICAgICA8cD5DdXJyZW50IFVSTDoge3N0YXRlLnJvdXRlci5saW5rfTwvcD5cclxuICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPkhvbWU8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcGFnZS8yXCI+TW9yZSBQb3N0czwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cImNvbnRhY3RcIj5Db250YWN0PC9MaW5rPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDxociAvPlxyXG4gICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICB7c3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluaykuaXNBcmNoaXZlICYmIDxMaXN0IC8+fVxyXG4gICAgICAgICAgICB7c3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluaykuaXNQb3N0VHlwZSAmJiA8UG9zdCAvPn1cclxuICAgICAgICAgICAge3N0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspLmlzUGFnZVR5cGUgJiYgPFBhZ2UgLz59XHJcbiAgICAgICAgICAgIHtzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKS5pczQwNCAmJiA8UGFnZTQwNCAvPn1cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChSb290KTtcclxuXHJcbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI1xyXG5gIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9qc25hdGlvbi10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcz83MDRjIl0sIm5hbWVzIjpbIlJvb3QiLCJzdGF0ZSIsInJvdXRlciIsImxpbmsiLCJzb3VyY2UiLCJnZXQiLCJpc0FyY2hpdmUiLCJpc1Bvc3RUeXBlIiwiaXNQYWdlVHlwZSIsImlzNDA0IiwiY29ubmVjdCIsIkhlYWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7dzdFQU9BLEdBQU1BLEtBQUksQ0FBRyxTQUFlLElBQWQsQ0FBRUMsS0FBRixDQUFjLE9BQ3hCLE1BQ0Usc0hBQ0UsMERBQUMsb0RBQUQsRUFDRSxNQUFNLEtBRFIsRUFERixDQVFFLGtGQVJGLENBU0UsbUZBQWlCQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsSUFBOUIsQ0FURixDQVVFLHFFQUNJLDBEQUFDLDZDQUFELEVBQU0sSUFBSSxDQUFDLEdBQVgsU0FESixDQUVJLDBEQUFDLDZDQUFELEVBQU0sSUFBSSxDQUFDLFNBQVgsZUFGSixDQUdJLDBEQUFDLDZDQUFELEVBQU0sSUFBSSxDQUFDLFNBQVgsWUFISixDQVZGLENBZUUsb0VBZkYsQ0FnQkUsc0VBQ0tGLEtBQUssQ0FBQ0csTUFBTixDQUFhQyxHQUFiLENBQWlCSixLQUFLLENBQUNDLE1BQU4sQ0FBYUMsSUFBOUIsRUFBb0NHLFNBQXBDLEVBQWlELDBEQUFDLDZDQUFELE1BRHRELENBRUtMLEtBQUssQ0FBQ0csTUFBTixDQUFhQyxHQUFiLENBQWlCSixLQUFLLENBQUNDLE1BQU4sQ0FBYUMsSUFBOUIsRUFBb0NJLFVBQXBDLEVBQWtELDBEQUFDLDZDQUFELE1BRnZELENBR0tOLEtBQUssQ0FBQ0csTUFBTixDQUFhQyxHQUFiLENBQWlCSixLQUFLLENBQUNDLE1BQU4sQ0FBYUMsSUFBOUIsRUFBb0NLLFVBQXBDLEVBQWtELDBEQUFDLDZDQUFELE1BSHZELENBSUtQLEtBQUssQ0FBQ0csTUFBTixDQUFhQyxHQUFiLENBQWlCSixLQUFLLENBQUNDLE1BQU4sQ0FBYUMsSUFBOUIsRUFBb0NNLEtBQXBDLEVBQTZDLDBEQUFDLE9BQUQsTUFKbEQsQ0FoQkYsQ0FERixDQXlCRCxDQTFCSCxDQTRCZUMsdUhBQU8sQ0FBQ1YsSUFBRCxDQUF0QixFQUVBLEdBQU1XLE9BQU0sZ3ZFQUFaIiwiZmlsZSI6Ii4vcGFja2FnZXMvanNuYXRpb24tdGhlbWUvc3JjL2NvbXBvbmVudHMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0LCBHbG9iYWwsIGNzcywgc3R5bGVkIH0gZnJvbSBcImZyb250aXR5XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwiLi9saW5rXCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCIuL2xpc3RcIjtcclxuaW1wb3J0IFBvc3QgZnJvbSBcIi4vcG9zdFwiO1xyXG5pbXBvcnQgUGFnZSBmcm9tIFwiLi9wYWdlXCI7XHJcblxyXG5jb25zdCBSb290ID0gKHsgc3RhdGUgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8R2xvYmFsXHJcbiAgICAgICAgICBzdHlsZXM9e2Nzc2BcclxuICAgICAgICAgICAgaHRtbCB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aDE+Q3JhaWcgQWxsZW48L2gxPlxyXG4gICAgICAgIDxwPkN1cnJlbnQgVVJMOiB7c3RhdGUucm91dGVyLmxpbmt9PC9wPlxyXG4gICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+SG9tZTwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wYWdlLzJcIj5Nb3JlIFBvc3RzPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiY29udGFjdFwiPkNvbnRhY3Q8L0xpbms+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgIHtzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKS5pc0FyY2hpdmUgJiYgPExpc3QgLz59XHJcbiAgICAgICAgICAgIHtzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKS5pc1Bvc3RUeXBlICYmIDxQb3N0IC8+fVxyXG4gICAgICAgICAgICB7c3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluaykuaXNQYWdlVHlwZSAmJiA8UGFnZSAvPn1cclxuICAgICAgICAgICAge3N0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspLmlzNDA0ICYmIDxQYWdlNDA0IC8+fVxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFJvb3QpO1xyXG5cclxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjXHJcbmAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/jsnation-theme/src/components/index.js\n");

/***/ })

})