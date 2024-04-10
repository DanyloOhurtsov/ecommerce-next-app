"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(dashboard)/[storeId]/(routes)/orders/page",{

/***/ "(app-pages-browser)/./app/(dashboard)/[storeId]/(routes)/orders/_components/client.tsx":
/*!**************************************************************************!*\
  !*** ./app/(dashboard)/[storeId]/(routes)/orders/_components/client.tsx ***!
  \**************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_custom_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/custom/components */ \"(app-pages-browser)/./components/custom/components.ts\");\n/* harmony import */ var _components_ui_separator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/separator */ \"(app-pages-browser)/./components/ui/separator.tsx\");\n/* harmony import */ var _columns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./columns */ \"(app-pages-browser)/./app/(dashboard)/[storeId]/(routes)/orders/_components/columns.tsx\");\n/* harmony import */ var _components_ui_data_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/data-table */ \"(app-pages-browser)/./components/ui/data-table.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nconst OrderClient = (param)=>{\n    let { data } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_custom_components__WEBPACK_IMPORTED_MODULE_1__.Heading, {\n                title: \"Orders (\".concat(data.length, \")\"),\n                description: \"Manage orders for your store\"\n            }, void 0, false, {\n                fileName: \"/Users/danyloohurtsov/Desktop/Portfolio/ecommerce-next-app/app/(dashboard)/[storeId]/(routes)/orders/_components/client.tsx\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_separator__WEBPACK_IMPORTED_MODULE_2__.Separator, {}, void 0, false, {\n                fileName: \"/Users/danyloohurtsov/Desktop/Portfolio/ecommerce-next-app/app/(dashboard)/[storeId]/(routes)/orders/_components/client.tsx\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_data_table__WEBPACK_IMPORTED_MODULE_4__.DataTable, {\n                columns: _columns__WEBPACK_IMPORTED_MODULE_3__.columns,\n                data: data,\n                searchKey: \"products\"\n            }, void 0, false, {\n                fileName: \"/Users/danyloohurtsov/Desktop/Portfolio/ecommerce-next-app/app/(dashboard)/[storeId]/(routes)/orders/_components/client.tsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = OrderClient;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OrderClient);\nvar _c;\n$RefreshReg$(_c, \"OrderClient\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oZGFzaGJvYXJkKS9bc3RvcmVJZF0vKHJvdXRlcykvb3JkZXJzL19jb21wb25lbnRzL2NsaWVudC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUV5RDtBQUNIO0FBRUw7QUFDTTtBQU12RCxNQUFNSSxjQUFjO1FBQUMsRUFBRUMsSUFBSSxFQUFvQjtJQUMzQyxxQkFDSTs7MEJBQ0ksOERBQUNMLGtFQUFPQTtnQkFDSk0sT0FBTyxXQUF1QixPQUFaRCxLQUFLRSxNQUFNLEVBQUM7Z0JBQzlCQyxhQUFZOzs7Ozs7MEJBRWhCLDhEQUFDUCwrREFBU0E7Ozs7OzBCQUNWLDhEQUFDRSxnRUFBU0E7Z0JBQUNELFNBQVNBLDZDQUFPQTtnQkFBRUcsTUFBTUE7Z0JBQU1JLFdBQVU7Ozs7Ozs7O0FBRy9EO0tBWE1MO0FBYU4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwLyhkYXNoYm9hcmQpL1tzdG9yZUlkXS8ocm91dGVzKS9vcmRlcnMvX2NvbXBvbmVudHMvY2xpZW50LnRzeD8xOGE4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBIZWFkaW5nIH0gZnJvbSBcIkAvY29tcG9uZW50cy9jdXN0b20vY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgU2VwYXJhdG9yIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9zZXBhcmF0b3JcIjtcbmltcG9ydCB7IHVzZVBhcmFtcywgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgT3JkZXJDb2x1bW4sIGNvbHVtbnMgfSBmcm9tIFwiLi9jb2x1bW5zXCI7XG5pbXBvcnQgeyBEYXRhVGFibGUgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2RhdGEtdGFibGVcIjtcblxuaW50ZXJmYWNlIE9yZGVyQ2xpZW50UHJvcHMge1xuICAgIGRhdGE6IE9yZGVyQ29sdW1uW107XG59XG5cbmNvbnN0IE9yZGVyQ2xpZW50ID0gKHsgZGF0YSB9OiBPcmRlckNsaWVudFByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkaW5nXG4gICAgICAgICAgICAgICAgdGl0bGU9e2BPcmRlcnMgKCR7ZGF0YS5sZW5ndGh9KWB9XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJNYW5hZ2Ugb3JkZXJzIGZvciB5b3VyIHN0b3JlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8U2VwYXJhdG9yIC8+XG4gICAgICAgICAgICA8RGF0YVRhYmxlIGNvbHVtbnM9e2NvbHVtbnN9IGRhdGE9e2RhdGF9IHNlYXJjaEtleT1cInByb2R1Y3RzXCIgLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE9yZGVyQ2xpZW50O1xuIl0sIm5hbWVzIjpbIkhlYWRpbmciLCJTZXBhcmF0b3IiLCJjb2x1bW5zIiwiRGF0YVRhYmxlIiwiT3JkZXJDbGllbnQiLCJkYXRhIiwidGl0bGUiLCJsZW5ndGgiLCJkZXNjcmlwdGlvbiIsInNlYXJjaEtleSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(dashboard)/[storeId]/(routes)/orders/_components/client.tsx\n"));

/***/ })

});