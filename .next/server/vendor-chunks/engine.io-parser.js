"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/engine.io-parser";
exports.ids = ["vendor-chunks/engine.io-parser"];
exports.modules = {

/***/ "(ssr)/./node_modules/engine.io-parser/build/esm/commons.js":
/*!************************************************************!*\
  !*** ./node_modules/engine.io-parser/build/esm/commons.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ERROR_PACKET: () => (/* binding */ ERROR_PACKET),\n/* harmony export */   PACKET_TYPES: () => (/* binding */ PACKET_TYPES),\n/* harmony export */   PACKET_TYPES_REVERSE: () => (/* binding */ PACKET_TYPES_REVERSE)\n/* harmony export */ });\nconst PACKET_TYPES = Object.create(null); // no Map = no polyfill\nPACKET_TYPES[\"open\"] = \"0\";\nPACKET_TYPES[\"close\"] = \"1\";\nPACKET_TYPES[\"ping\"] = \"2\";\nPACKET_TYPES[\"pong\"] = \"3\";\nPACKET_TYPES[\"message\"] = \"4\";\nPACKET_TYPES[\"upgrade\"] = \"5\";\nPACKET_TYPES[\"noop\"] = \"6\";\nconst PACKET_TYPES_REVERSE = Object.create(null);\nObject.keys(PACKET_TYPES).forEach((key) => {\n    PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;\n});\nconst ERROR_PACKET = { type: \"error\", data: \"parser error\" };\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9idWlsZC9lc20vY29tbW9ucy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsdUJBQXVCO0FBQ3FDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnQtdGNjLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1wYXJzZXIvYnVpbGQvZXNtL2NvbW1vbnMuanM/NGEwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBQQUNLRVRfVFlQRVMgPSBPYmplY3QuY3JlYXRlKG51bGwpOyAvLyBubyBNYXAgPSBubyBwb2x5ZmlsbFxuUEFDS0VUX1RZUEVTW1wib3BlblwiXSA9IFwiMFwiO1xuUEFDS0VUX1RZUEVTW1wiY2xvc2VcIl0gPSBcIjFcIjtcblBBQ0tFVF9UWVBFU1tcInBpbmdcIl0gPSBcIjJcIjtcblBBQ0tFVF9UWVBFU1tcInBvbmdcIl0gPSBcIjNcIjtcblBBQ0tFVF9UWVBFU1tcIm1lc3NhZ2VcIl0gPSBcIjRcIjtcblBBQ0tFVF9UWVBFU1tcInVwZ3JhZGVcIl0gPSBcIjVcIjtcblBBQ0tFVF9UWVBFU1tcIm5vb3BcIl0gPSBcIjZcIjtcbmNvbnN0IFBBQ0tFVF9UWVBFU19SRVZFUlNFID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbk9iamVjdC5rZXlzKFBBQ0tFVF9UWVBFUykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgUEFDS0VUX1RZUEVTX1JFVkVSU0VbUEFDS0VUX1RZUEVTW2tleV1dID0ga2V5O1xufSk7XG5jb25zdCBFUlJPUl9QQUNLRVQgPSB7IHR5cGU6IFwiZXJyb3JcIiwgZGF0YTogXCJwYXJzZXIgZXJyb3JcIiB9O1xuZXhwb3J0IHsgUEFDS0VUX1RZUEVTLCBQQUNLRVRfVFlQRVNfUkVWRVJTRSwgRVJST1JfUEFDS0VUIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/engine.io-parser/build/esm/commons.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/engine.io-parser/build/esm/decodePacket.js":
/*!*****************************************************************!*\
  !*** ./node_modules/engine.io-parser/build/esm/decodePacket.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   decodePacket: () => (/* binding */ decodePacket)\n/* harmony export */ });\n/* harmony import */ var _commons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commons.js */ \"(ssr)/./node_modules/engine.io-parser/build/esm/commons.js\");\n\nconst decodePacket = (encodedPacket, binaryType) => {\n    if (typeof encodedPacket !== \"string\") {\n        return {\n            type: \"message\",\n            data: mapBinary(encodedPacket, binaryType),\n        };\n    }\n    const type = encodedPacket.charAt(0);\n    if (type === \"b\") {\n        const buffer = Buffer.from(encodedPacket.substring(1), \"base64\");\n        return {\n            type: \"message\",\n            data: mapBinary(buffer, binaryType),\n        };\n    }\n    if (!_commons_js__WEBPACK_IMPORTED_MODULE_0__.PACKET_TYPES_REVERSE[type]) {\n        return _commons_js__WEBPACK_IMPORTED_MODULE_0__.ERROR_PACKET;\n    }\n    return encodedPacket.length > 1\n        ? {\n            type: _commons_js__WEBPACK_IMPORTED_MODULE_0__.PACKET_TYPES_REVERSE[type],\n            data: encodedPacket.substring(1),\n        }\n        : {\n            type: _commons_js__WEBPACK_IMPORTED_MODULE_0__.PACKET_TYPES_REVERSE[type],\n        };\n};\nconst mapBinary = (data, binaryType) => {\n    switch (binaryType) {\n        case \"arraybuffer\":\n            if (data instanceof ArrayBuffer) {\n                // from WebSocket & binaryType \"arraybuffer\"\n                return data;\n            }\n            else if (Buffer.isBuffer(data)) {\n                // from HTTP long-polling\n                return data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength);\n            }\n            else {\n                // from WebTransport (Uint8Array)\n                return data.buffer;\n            }\n        case \"nodebuffer\":\n        default:\n            if (Buffer.isBuffer(data)) {\n                // from HTTP long-polling or WebSocket & binaryType \"nodebuffer\" (default)\n                return data;\n            }\n            else {\n                // from WebTransport (Uint8Array)\n                return Buffer.from(data);\n            }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9idWlsZC9lc20vZGVjb2RlUGFja2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQW1FO0FBQzVEO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsNkRBQW9CO0FBQzdCLGVBQWUscURBQVk7QUFDM0I7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDZEQUFvQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNkRBQW9CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC10Y2MvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9idWlsZC9lc20vZGVjb2RlUGFja2V0LmpzP2RjNTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRVJST1JfUEFDS0VULCBQQUNLRVRfVFlQRVNfUkVWRVJTRSwgfSBmcm9tIFwiLi9jb21tb25zLmpzXCI7XG5leHBvcnQgY29uc3QgZGVjb2RlUGFja2V0ID0gKGVuY29kZWRQYWNrZXQsIGJpbmFyeVR5cGUpID0+IHtcbiAgICBpZiAodHlwZW9mIGVuY29kZWRQYWNrZXQgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6IFwibWVzc2FnZVwiLFxuICAgICAgICAgICAgZGF0YTogbWFwQmluYXJ5KGVuY29kZWRQYWNrZXQsIGJpbmFyeVR5cGUpLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdCB0eXBlID0gZW5jb2RlZFBhY2tldC5jaGFyQXQoMCk7XG4gICAgaWYgKHR5cGUgPT09IFwiYlwiKSB7XG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGVuY29kZWRQYWNrZXQuc3Vic3RyaW5nKDEpLCBcImJhc2U2NFwiKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6IFwibWVzc2FnZVwiLFxuICAgICAgICAgICAgZGF0YTogbWFwQmluYXJ5KGJ1ZmZlciwgYmluYXJ5VHlwZSksXG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmICghUEFDS0VUX1RZUEVTX1JFVkVSU0VbdHlwZV0pIHtcbiAgICAgICAgcmV0dXJuIEVSUk9SX1BBQ0tFVDtcbiAgICB9XG4gICAgcmV0dXJuIGVuY29kZWRQYWNrZXQubGVuZ3RoID4gMVxuICAgICAgICA/IHtcbiAgICAgICAgICAgIHR5cGU6IFBBQ0tFVF9UWVBFU19SRVZFUlNFW3R5cGVdLFxuICAgICAgICAgICAgZGF0YTogZW5jb2RlZFBhY2tldC5zdWJzdHJpbmcoMSksXG4gICAgICAgIH1cbiAgICAgICAgOiB7XG4gICAgICAgICAgICB0eXBlOiBQQUNLRVRfVFlQRVNfUkVWRVJTRVt0eXBlXSxcbiAgICAgICAgfTtcbn07XG5jb25zdCBtYXBCaW5hcnkgPSAoZGF0YSwgYmluYXJ5VHlwZSkgPT4ge1xuICAgIHN3aXRjaCAoYmluYXJ5VHlwZSkge1xuICAgICAgICBjYXNlIFwiYXJyYXlidWZmZXJcIjpcbiAgICAgICAgICAgIGlmIChkYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICAgICAgICAvLyBmcm9tIFdlYlNvY2tldCAmIGJpbmFyeVR5cGUgXCJhcnJheWJ1ZmZlclwiXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChCdWZmZXIuaXNCdWZmZXIoZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAvLyBmcm9tIEhUVFAgbG9uZy1wb2xsaW5nXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyLnNsaWNlKGRhdGEuYnl0ZU9mZnNldCwgZGF0YS5ieXRlT2Zmc2V0ICsgZGF0YS5ieXRlTGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGZyb20gV2ViVHJhbnNwb3J0IChVaW50OEFycmF5KVxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBcIm5vZGVidWZmZXJcIjpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGlmIChCdWZmZXIuaXNCdWZmZXIoZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAvLyBmcm9tIEhUVFAgbG9uZy1wb2xsaW5nIG9yIFdlYlNvY2tldCAmIGJpbmFyeVR5cGUgXCJub2RlYnVmZmVyXCIgKGRlZmF1bHQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBmcm9tIFdlYlRyYW5zcG9ydCAoVWludDhBcnJheSlcbiAgICAgICAgICAgICAgICByZXR1cm4gQnVmZmVyLmZyb20oZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgfVxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/engine.io-parser/build/esm/decodePacket.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/engine.io-parser/build/esm/encodePacket.js":
/*!*****************************************************************!*\
  !*** ./node_modules/engine.io-parser/build/esm/encodePacket.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   encodePacket: () => (/* binding */ encodePacket),\n/* harmony export */   encodePacketToBinary: () => (/* binding */ encodePacketToBinary)\n/* harmony export */ });\n/* harmony import */ var _commons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commons.js */ \"(ssr)/./node_modules/engine.io-parser/build/esm/commons.js\");\n\nconst encodePacket = ({ type, data }, supportsBinary, callback) => {\n    if (data instanceof ArrayBuffer || ArrayBuffer.isView(data)) {\n        return callback(supportsBinary ? data : \"b\" + toBuffer(data, true).toString(\"base64\"));\n    }\n    // plain string\n    return callback(_commons_js__WEBPACK_IMPORTED_MODULE_0__.PACKET_TYPES[type] + (data || \"\"));\n};\nconst toBuffer = (data, forceBufferConversion) => {\n    if (Buffer.isBuffer(data) ||\n        (data instanceof Uint8Array && !forceBufferConversion)) {\n        return data;\n    }\n    else if (data instanceof ArrayBuffer) {\n        return Buffer.from(data);\n    }\n    else {\n        return Buffer.from(data.buffer, data.byteOffset, data.byteLength);\n    }\n};\nlet TEXT_ENCODER;\nfunction encodePacketToBinary(packet, callback) {\n    if (packet.data instanceof ArrayBuffer || ArrayBuffer.isView(packet.data)) {\n        return callback(toBuffer(packet.data, false));\n    }\n    encodePacket(packet, true, (encoded) => {\n        if (!TEXT_ENCODER) {\n            // lazily created for compatibility with Node.js 10\n            TEXT_ENCODER = new TextEncoder();\n        }\n        callback(TEXT_ENCODER.encode(encoded));\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9idWlsZC9lc20vZW5jb2RlUGFja2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QztBQUNyQyx3QkFBd0IsWUFBWTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxREFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC10Y2MvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9idWlsZC9lc20vZW5jb2RlUGFja2V0LmpzPzc1N2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUEFDS0VUX1RZUEVTIH0gZnJvbSBcIi4vY29tbW9ucy5qc1wiO1xuZXhwb3J0IGNvbnN0IGVuY29kZVBhY2tldCA9ICh7IHR5cGUsIGRhdGEgfSwgc3VwcG9ydHNCaW5hcnksIGNhbGxiYWNrKSA9PiB7XG4gICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciB8fCBBcnJheUJ1ZmZlci5pc1ZpZXcoZGF0YSkpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKHN1cHBvcnRzQmluYXJ5ID8gZGF0YSA6IFwiYlwiICsgdG9CdWZmZXIoZGF0YSwgdHJ1ZSkudG9TdHJpbmcoXCJiYXNlNjRcIikpO1xuICAgIH1cbiAgICAvLyBwbGFpbiBzdHJpbmdcbiAgICByZXR1cm4gY2FsbGJhY2soUEFDS0VUX1RZUEVTW3R5cGVdICsgKGRhdGEgfHwgXCJcIikpO1xufTtcbmNvbnN0IHRvQnVmZmVyID0gKGRhdGEsIGZvcmNlQnVmZmVyQ29udmVyc2lvbikgPT4ge1xuICAgIGlmIChCdWZmZXIuaXNCdWZmZXIoZGF0YSkgfHxcbiAgICAgICAgKGRhdGEgaW5zdGFuY2VvZiBVaW50OEFycmF5ICYmICFmb3JjZUJ1ZmZlckNvbnZlcnNpb24pKSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBlbHNlIGlmIChkYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgcmV0dXJuIEJ1ZmZlci5mcm9tKGRhdGEpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIEJ1ZmZlci5mcm9tKGRhdGEuYnVmZmVyLCBkYXRhLmJ5dGVPZmZzZXQsIGRhdGEuYnl0ZUxlbmd0aCk7XG4gICAgfVxufTtcbmxldCBURVhUX0VOQ09ERVI7XG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlUGFja2V0VG9CaW5hcnkocGFja2V0LCBjYWxsYmFjaykge1xuICAgIGlmIChwYWNrZXQuZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyIHx8IEFycmF5QnVmZmVyLmlzVmlldyhwYWNrZXQuZGF0YSkpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKHRvQnVmZmVyKHBhY2tldC5kYXRhLCBmYWxzZSkpO1xuICAgIH1cbiAgICBlbmNvZGVQYWNrZXQocGFja2V0LCB0cnVlLCAoZW5jb2RlZCkgPT4ge1xuICAgICAgICBpZiAoIVRFWFRfRU5DT0RFUikge1xuICAgICAgICAgICAgLy8gbGF6aWx5IGNyZWF0ZWQgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBOb2RlLmpzIDEwXG4gICAgICAgICAgICBURVhUX0VOQ09ERVIgPSBuZXcgVGV4dEVuY29kZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBjYWxsYmFjayhURVhUX0VOQ09ERVIuZW5jb2RlKGVuY29kZWQpKTtcbiAgICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/engine.io-parser/build/esm/encodePacket.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/engine.io-parser/build/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/engine.io-parser/build/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createPacketDecoderStream: () => (/* binding */ createPacketDecoderStream),\n/* harmony export */   createPacketEncoderStream: () => (/* binding */ createPacketEncoderStream),\n/* harmony export */   decodePacket: () => (/* reexport safe */ _decodePacket_js__WEBPACK_IMPORTED_MODULE_1__.decodePacket),\n/* harmony export */   decodePayload: () => (/* binding */ decodePayload),\n/* harmony export */   encodePacket: () => (/* reexport safe */ _encodePacket_js__WEBPACK_IMPORTED_MODULE_0__.encodePacket),\n/* harmony export */   encodePayload: () => (/* binding */ encodePayload),\n/* harmony export */   protocol: () => (/* binding */ protocol)\n/* harmony export */ });\n/* harmony import */ var _encodePacket_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./encodePacket.js */ \"(ssr)/./node_modules/engine.io-parser/build/esm/encodePacket.js\");\n/* harmony import */ var _decodePacket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decodePacket.js */ \"(ssr)/./node_modules/engine.io-parser/build/esm/decodePacket.js\");\n/* harmony import */ var _commons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commons.js */ \"(ssr)/./node_modules/engine.io-parser/build/esm/commons.js\");\n\n\n\nconst SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text\nconst encodePayload = (packets, callback) => {\n    // some packets may be added to the array while encoding, so the initial length must be saved\n    const length = packets.length;\n    const encodedPackets = new Array(length);\n    let count = 0;\n    packets.forEach((packet, i) => {\n        // force base64 encoding for binary packets\n        (0,_encodePacket_js__WEBPACK_IMPORTED_MODULE_0__.encodePacket)(packet, false, (encodedPacket) => {\n            encodedPackets[i] = encodedPacket;\n            if (++count === length) {\n                callback(encodedPackets.join(SEPARATOR));\n            }\n        });\n    });\n};\nconst decodePayload = (encodedPayload, binaryType) => {\n    const encodedPackets = encodedPayload.split(SEPARATOR);\n    const packets = [];\n    for (let i = 0; i < encodedPackets.length; i++) {\n        const decodedPacket = (0,_decodePacket_js__WEBPACK_IMPORTED_MODULE_1__.decodePacket)(encodedPackets[i], binaryType);\n        packets.push(decodedPacket);\n        if (decodedPacket.type === \"error\") {\n            break;\n        }\n    }\n    return packets;\n};\nfunction createPacketEncoderStream() {\n    return new TransformStream({\n        transform(packet, controller) {\n            (0,_encodePacket_js__WEBPACK_IMPORTED_MODULE_0__.encodePacketToBinary)(packet, (encodedPacket) => {\n                const payloadLength = encodedPacket.length;\n                let header;\n                // inspired by the WebSocket format: https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#decoding_payload_length\n                if (payloadLength < 126) {\n                    header = new Uint8Array(1);\n                    new DataView(header.buffer).setUint8(0, payloadLength);\n                }\n                else if (payloadLength < 65536) {\n                    header = new Uint8Array(3);\n                    const view = new DataView(header.buffer);\n                    view.setUint8(0, 126);\n                    view.setUint16(1, payloadLength);\n                }\n                else {\n                    header = new Uint8Array(9);\n                    const view = new DataView(header.buffer);\n                    view.setUint8(0, 127);\n                    view.setBigUint64(1, BigInt(payloadLength));\n                }\n                // first bit indicates whether the payload is plain text (0) or binary (1)\n                if (packet.data && typeof packet.data !== \"string\") {\n                    header[0] |= 0x80;\n                }\n                controller.enqueue(header);\n                controller.enqueue(encodedPacket);\n            });\n        },\n    });\n}\nlet TEXT_DECODER;\nfunction totalLength(chunks) {\n    return chunks.reduce((acc, chunk) => acc + chunk.length, 0);\n}\nfunction concatChunks(chunks, size) {\n    if (chunks[0].length === size) {\n        return chunks.shift();\n    }\n    const buffer = new Uint8Array(size);\n    let j = 0;\n    for (let i = 0; i < size; i++) {\n        buffer[i] = chunks[0][j++];\n        if (j === chunks[0].length) {\n            chunks.shift();\n            j = 0;\n        }\n    }\n    if (chunks.length && j < chunks[0].length) {\n        chunks[0] = chunks[0].slice(j);\n    }\n    return buffer;\n}\nfunction createPacketDecoderStream(maxPayload, binaryType) {\n    if (!TEXT_DECODER) {\n        TEXT_DECODER = new TextDecoder();\n    }\n    const chunks = [];\n    let state = 0 /* State.READ_HEADER */;\n    let expectedLength = -1;\n    let isBinary = false;\n    return new TransformStream({\n        transform(chunk, controller) {\n            chunks.push(chunk);\n            while (true) {\n                if (state === 0 /* State.READ_HEADER */) {\n                    if (totalLength(chunks) < 1) {\n                        break;\n                    }\n                    const header = concatChunks(chunks, 1);\n                    isBinary = (header[0] & 0x80) === 0x80;\n                    expectedLength = header[0] & 0x7f;\n                    if (expectedLength < 126) {\n                        state = 3 /* State.READ_PAYLOAD */;\n                    }\n                    else if (expectedLength === 126) {\n                        state = 1 /* State.READ_EXTENDED_LENGTH_16 */;\n                    }\n                    else {\n                        state = 2 /* State.READ_EXTENDED_LENGTH_64 */;\n                    }\n                }\n                else if (state === 1 /* State.READ_EXTENDED_LENGTH_16 */) {\n                    if (totalLength(chunks) < 2) {\n                        break;\n                    }\n                    const headerArray = concatChunks(chunks, 2);\n                    expectedLength = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length).getUint16(0);\n                    state = 3 /* State.READ_PAYLOAD */;\n                }\n                else if (state === 2 /* State.READ_EXTENDED_LENGTH_64 */) {\n                    if (totalLength(chunks) < 8) {\n                        break;\n                    }\n                    const headerArray = concatChunks(chunks, 8);\n                    const view = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length);\n                    const n = view.getUint32(0);\n                    if (n > Math.pow(2, 53 - 32) - 1) {\n                        // the maximum safe integer in JavaScript is 2^53 - 1\n                        controller.enqueue(_commons_js__WEBPACK_IMPORTED_MODULE_2__.ERROR_PACKET);\n                        break;\n                    }\n                    expectedLength = n * Math.pow(2, 32) + view.getUint32(4);\n                    state = 3 /* State.READ_PAYLOAD */;\n                }\n                else {\n                    if (totalLength(chunks) < expectedLength) {\n                        break;\n                    }\n                    const data = concatChunks(chunks, expectedLength);\n                    controller.enqueue((0,_decodePacket_js__WEBPACK_IMPORTED_MODULE_1__.decodePacket)(isBinary ? data : TEXT_DECODER.decode(data), binaryType));\n                    state = 0 /* State.READ_HEADER */;\n                }\n                if (expectedLength === 0 || expectedLength > maxPayload) {\n                    controller.enqueue(_commons_js__WEBPACK_IMPORTED_MODULE_2__.ERROR_PACKET);\n                    break;\n                }\n            }\n        },\n    });\n}\nconst protocol = 4;\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9idWlsZC9lc20vaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF1RTtBQUN0QjtBQUNKO0FBQzdDLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsOERBQVk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJCQUEyQjtBQUMvQyw4QkFBOEIsOERBQVk7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxZQUFZLHNFQUFvQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMscURBQVk7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsOERBQVk7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHFEQUFZO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDTztBQUM4RCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250LXRjYy8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tcGFyc2VyL2J1aWxkL2VzbS9pbmRleC5qcz9iMDVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVuY29kZVBhY2tldCwgZW5jb2RlUGFja2V0VG9CaW5hcnkgfSBmcm9tIFwiLi9lbmNvZGVQYWNrZXQuanNcIjtcbmltcG9ydCB7IGRlY29kZVBhY2tldCB9IGZyb20gXCIuL2RlY29kZVBhY2tldC5qc1wiO1xuaW1wb3J0IHsgRVJST1JfUEFDS0VULCB9IGZyb20gXCIuL2NvbW1vbnMuanNcIjtcbmNvbnN0IFNFUEFSQVRPUiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMzApOyAvLyBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRGVsaW1pdGVyI0FTQ0lJX2RlbGltaXRlZF90ZXh0XG5jb25zdCBlbmNvZGVQYXlsb2FkID0gKHBhY2tldHMsIGNhbGxiYWNrKSA9PiB7XG4gICAgLy8gc29tZSBwYWNrZXRzIG1heSBiZSBhZGRlZCB0byB0aGUgYXJyYXkgd2hpbGUgZW5jb2RpbmcsIHNvIHRoZSBpbml0aWFsIGxlbmd0aCBtdXN0IGJlIHNhdmVkXG4gICAgY29uc3QgbGVuZ3RoID0gcGFja2V0cy5sZW5ndGg7XG4gICAgY29uc3QgZW5jb2RlZFBhY2tldHMgPSBuZXcgQXJyYXkobGVuZ3RoKTtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIHBhY2tldHMuZm9yRWFjaCgocGFja2V0LCBpKSA9PiB7XG4gICAgICAgIC8vIGZvcmNlIGJhc2U2NCBlbmNvZGluZyBmb3IgYmluYXJ5IHBhY2tldHNcbiAgICAgICAgZW5jb2RlUGFja2V0KHBhY2tldCwgZmFsc2UsIChlbmNvZGVkUGFja2V0KSA9PiB7XG4gICAgICAgICAgICBlbmNvZGVkUGFja2V0c1tpXSA9IGVuY29kZWRQYWNrZXQ7XG4gICAgICAgICAgICBpZiAoKytjb3VudCA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZW5jb2RlZFBhY2tldHMuam9pbihTRVBBUkFUT1IpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuY29uc3QgZGVjb2RlUGF5bG9hZCA9IChlbmNvZGVkUGF5bG9hZCwgYmluYXJ5VHlwZSkgPT4ge1xuICAgIGNvbnN0IGVuY29kZWRQYWNrZXRzID0gZW5jb2RlZFBheWxvYWQuc3BsaXQoU0VQQVJBVE9SKTtcbiAgICBjb25zdCBwYWNrZXRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmNvZGVkUGFja2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBkZWNvZGVkUGFja2V0ID0gZGVjb2RlUGFja2V0KGVuY29kZWRQYWNrZXRzW2ldLCBiaW5hcnlUeXBlKTtcbiAgICAgICAgcGFja2V0cy5wdXNoKGRlY29kZWRQYWNrZXQpO1xuICAgICAgICBpZiAoZGVjb2RlZFBhY2tldC50eXBlID09PSBcImVycm9yXCIpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYWNrZXRzO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQYWNrZXRFbmNvZGVyU3RyZWFtKCkge1xuICAgIHJldHVybiBuZXcgVHJhbnNmb3JtU3RyZWFtKHtcbiAgICAgICAgdHJhbnNmb3JtKHBhY2tldCwgY29udHJvbGxlcikge1xuICAgICAgICAgICAgZW5jb2RlUGFja2V0VG9CaW5hcnkocGFja2V0LCAoZW5jb2RlZFBhY2tldCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBheWxvYWRMZW5ndGggPSBlbmNvZGVkUGFja2V0Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICBsZXQgaGVhZGVyO1xuICAgICAgICAgICAgICAgIC8vIGluc3BpcmVkIGJ5IHRoZSBXZWJTb2NrZXQgZm9ybWF0OiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2ViU29ja2V0c19BUEkvV3JpdGluZ19XZWJTb2NrZXRfc2VydmVycyNkZWNvZGluZ19wYXlsb2FkX2xlbmd0aFxuICAgICAgICAgICAgICAgIGlmIChwYXlsb2FkTGVuZ3RoIDwgMTI2KSB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciA9IG5ldyBVaW50OEFycmF5KDEpO1xuICAgICAgICAgICAgICAgICAgICBuZXcgRGF0YVZpZXcoaGVhZGVyLmJ1ZmZlcikuc2V0VWludDgoMCwgcGF5bG9hZExlbmd0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBheWxvYWRMZW5ndGggPCA2NTUzNikge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXIgPSBuZXcgVWludDhBcnJheSgzKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmlldyA9IG5ldyBEYXRhVmlldyhoZWFkZXIuYnVmZmVyKTtcbiAgICAgICAgICAgICAgICAgICAgdmlldy5zZXRVaW50OCgwLCAxMjYpO1xuICAgICAgICAgICAgICAgICAgICB2aWV3LnNldFVpbnQxNigxLCBwYXlsb2FkTGVuZ3RoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciA9IG5ldyBVaW50OEFycmF5KDkpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2aWV3ID0gbmV3IERhdGFWaWV3KGhlYWRlci5idWZmZXIpO1xuICAgICAgICAgICAgICAgICAgICB2aWV3LnNldFVpbnQ4KDAsIDEyNyk7XG4gICAgICAgICAgICAgICAgICAgIHZpZXcuc2V0QmlnVWludDY0KDEsIEJpZ0ludChwYXlsb2FkTGVuZ3RoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGZpcnN0IGJpdCBpbmRpY2F0ZXMgd2hldGhlciB0aGUgcGF5bG9hZCBpcyBwbGFpbiB0ZXh0ICgwKSBvciBiaW5hcnkgKDEpXG4gICAgICAgICAgICAgICAgaWYgKHBhY2tldC5kYXRhICYmIHR5cGVvZiBwYWNrZXQuZGF0YSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXJbMF0gfD0gMHg4MDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5lbnF1ZXVlKGhlYWRlcik7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5lbnF1ZXVlKGVuY29kZWRQYWNrZXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfSk7XG59XG5sZXQgVEVYVF9ERUNPREVSO1xuZnVuY3Rpb24gdG90YWxMZW5ndGgoY2h1bmtzKSB7XG4gICAgcmV0dXJuIGNodW5rcy5yZWR1Y2UoKGFjYywgY2h1bmspID0+IGFjYyArIGNodW5rLmxlbmd0aCwgMCk7XG59XG5mdW5jdGlvbiBjb25jYXRDaHVua3MoY2h1bmtzLCBzaXplKSB7XG4gICAgaWYgKGNodW5rc1swXS5sZW5ndGggPT09IHNpemUpIHtcbiAgICAgICAgcmV0dXJuIGNodW5rcy5zaGlmdCgpO1xuICAgIH1cbiAgICBjb25zdCBidWZmZXIgPSBuZXcgVWludDhBcnJheShzaXplKTtcbiAgICBsZXQgaiA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgYnVmZmVyW2ldID0gY2h1bmtzWzBdW2orK107XG4gICAgICAgIGlmIChqID09PSBjaHVua3NbMF0ubGVuZ3RoKSB7XG4gICAgICAgICAgICBjaHVua3Muc2hpZnQoKTtcbiAgICAgICAgICAgIGogPSAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChjaHVua3MubGVuZ3RoICYmIGogPCBjaHVua3NbMF0ubGVuZ3RoKSB7XG4gICAgICAgIGNodW5rc1swXSA9IGNodW5rc1swXS5zbGljZShqKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1ZmZlcjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQYWNrZXREZWNvZGVyU3RyZWFtKG1heFBheWxvYWQsIGJpbmFyeVR5cGUpIHtcbiAgICBpZiAoIVRFWFRfREVDT0RFUikge1xuICAgICAgICBURVhUX0RFQ09ERVIgPSBuZXcgVGV4dERlY29kZXIoKTtcbiAgICB9XG4gICAgY29uc3QgY2h1bmtzID0gW107XG4gICAgbGV0IHN0YXRlID0gMCAvKiBTdGF0ZS5SRUFEX0hFQURFUiAqLztcbiAgICBsZXQgZXhwZWN0ZWRMZW5ndGggPSAtMTtcbiAgICBsZXQgaXNCaW5hcnkgPSBmYWxzZTtcbiAgICByZXR1cm4gbmV3IFRyYW5zZm9ybVN0cmVhbSh7XG4gICAgICAgIHRyYW5zZm9ybShjaHVuaywgY29udHJvbGxlcikge1xuICAgICAgICAgICAgY2h1bmtzLnB1c2goY2h1bmspO1xuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUgPT09IDAgLyogU3RhdGUuUkVBRF9IRUFERVIgKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvdGFsTGVuZ3RoKGNodW5rcykgPCAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXIgPSBjb25jYXRDaHVua3MoY2h1bmtzLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgaXNCaW5hcnkgPSAoaGVhZGVyWzBdICYgMHg4MCkgPT09IDB4ODA7XG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkTGVuZ3RoID0gaGVhZGVyWzBdICYgMHg3ZjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4cGVjdGVkTGVuZ3RoIDwgMTI2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IDMgLyogU3RhdGUuUkVBRF9QQVlMT0FEICovO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGV4cGVjdGVkTGVuZ3RoID09PSAxMjYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gMSAvKiBTdGF0ZS5SRUFEX0VYVEVOREVEX0xFTkdUSF8xNiAqLztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gMiAvKiBTdGF0ZS5SRUFEX0VYVEVOREVEX0xFTkdUSF82NCAqLztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdGF0ZSA9PT0gMSAvKiBTdGF0ZS5SRUFEX0VYVEVOREVEX0xFTkdUSF8xNiAqLykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG90YWxMZW5ndGgoY2h1bmtzKSA8IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlckFycmF5ID0gY29uY2F0Q2h1bmtzKGNodW5rcywgMik7XG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkTGVuZ3RoID0gbmV3IERhdGFWaWV3KGhlYWRlckFycmF5LmJ1ZmZlciwgaGVhZGVyQXJyYXkuYnl0ZU9mZnNldCwgaGVhZGVyQXJyYXkubGVuZ3RoKS5nZXRVaW50MTYoMCk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gMyAvKiBTdGF0ZS5SRUFEX1BBWUxPQUQgKi87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0YXRlID09PSAyIC8qIFN0YXRlLlJFQURfRVhURU5ERURfTEVOR1RIXzY0ICovKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b3RhbExlbmd0aChjaHVua3MpIDwgOCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGVhZGVyQXJyYXkgPSBjb25jYXRDaHVua3MoY2h1bmtzLCA4KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmlldyA9IG5ldyBEYXRhVmlldyhoZWFkZXJBcnJheS5idWZmZXIsIGhlYWRlckFycmF5LmJ5dGVPZmZzZXQsIGhlYWRlckFycmF5Lmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG4gPSB2aWV3LmdldFVpbnQzMigwKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG4gPiBNYXRoLnBvdygyLCA1MyAtIDMyKSAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBtYXhpbXVtIHNhZmUgaW50ZWdlciBpbiBKYXZhU2NyaXB0IGlzIDJeNTMgLSAxXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmVucXVldWUoRVJST1JfUEFDS0VUKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkTGVuZ3RoID0gbiAqIE1hdGgucG93KDIsIDMyKSArIHZpZXcuZ2V0VWludDMyKDQpO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IDMgLyogU3RhdGUuUkVBRF9QQVlMT0FEICovO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvdGFsTGVuZ3RoKGNodW5rcykgPCBleHBlY3RlZExlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGNvbmNhdENodW5rcyhjaHVua3MsIGV4cGVjdGVkTGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5lbnF1ZXVlKGRlY29kZVBhY2tldChpc0JpbmFyeSA/IGRhdGEgOiBURVhUX0RFQ09ERVIuZGVjb2RlKGRhdGEpLCBiaW5hcnlUeXBlKSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gMCAvKiBTdGF0ZS5SRUFEX0hFQURFUiAqLztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGV4cGVjdGVkTGVuZ3RoID09PSAwIHx8IGV4cGVjdGVkTGVuZ3RoID4gbWF4UGF5bG9hZCkge1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmVucXVldWUoRVJST1JfUEFDS0VUKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0pO1xufVxuZXhwb3J0IGNvbnN0IHByb3RvY29sID0gNDtcbmV4cG9ydCB7IGVuY29kZVBhY2tldCwgZW5jb2RlUGF5bG9hZCwgZGVjb2RlUGFja2V0LCBkZWNvZGVQYXlsb2FkLCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/engine.io-parser/build/esm/index.js\n");

/***/ })

};
;