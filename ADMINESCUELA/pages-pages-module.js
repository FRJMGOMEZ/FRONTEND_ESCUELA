(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "./node_modules/html2canvas/dist/html2canvas.js":
/*!******************************************************!*\
  !*** ./node_modules/html2canvas/dist/html2canvas.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * html2canvas 1.0.0-rc.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2019 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-line-break/dist/LineBreak.js":
/*!*******************************************************!*\
  !*** ./node_modules/css-line-break/dist/LineBreak.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.LineBreaker = exports.inlineBreakOpportunities = exports.lineBreakAtIndex = exports.codePointsToCharacterClasses = exports.UnicodeTrie = exports.BREAK_ALLOWED = exports.BREAK_NOT_ALLOWED = exports.BREAK_MANDATORY = exports.classes = exports.LETTER_NUMBER_MODIFIER = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _Trie = __webpack_require__(/*! ./Trie */ \"./node_modules/css-line-break/dist/Trie.js\");\n\nvar _linebreakTrie = __webpack_require__(/*! ./linebreak-trie */ \"./node_modules/css-line-break/dist/linebreak-trie.js\");\n\nvar _linebreakTrie2 = _interopRequireDefault(_linebreakTrie);\n\nvar _Util = __webpack_require__(/*! ./Util */ \"./node_modules/css-line-break/dist/Util.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar LETTER_NUMBER_MODIFIER = exports.LETTER_NUMBER_MODIFIER = 50;\n\n// Non-tailorable Line Breaking Classes\nvar BK = 1; //  Cause a line break (after)\nvar CR = 2; //  Cause a line break (after), except between CR and LF\nvar LF = 3; //  Cause a line break (after)\nvar CM = 4; //  Prohibit a line break between the character and the preceding character\nvar NL = 5; //  Cause a line break (after)\nvar SG = 6; //  Do not occur in well-formed text\nvar WJ = 7; //  Prohibit line breaks before and after\nvar ZW = 8; //  Provide a break opportunity\nvar GL = 9; //  Prohibit line breaks before and after\nvar SP = 10; // Enable indirect line breaks\nvar ZWJ = 11; // Prohibit line breaks within joiner sequences\n// Break Opportunities\nvar B2 = 12; //  Provide a line break opportunity before and after the character\nvar BA = 13; //  Generally provide a line break opportunity after the character\nvar BB = 14; //  Generally provide a line break opportunity before the character\nvar HY = 15; //  Provide a line break opportunity after the character, except in numeric context\nvar CB = 16; //   Provide a line break opportunity contingent on additional information\n// Characters Prohibiting Certain Breaks\nvar CL = 17; //  Prohibit line breaks before\nvar CP = 18; //  Prohibit line breaks before\nvar EX = 19; //  Prohibit line breaks before\nvar IN = 20; //  Allow only indirect line breaks between pairs\nvar NS = 21; //  Allow only indirect line breaks before\nvar OP = 22; //  Prohibit line breaks after\nvar QU = 23; //  Act like they are both opening and closing\n// Numeric Context\nvar IS = 24; //  Prevent breaks after any and before numeric\nvar NU = 25; //  Form numeric expressions for line breaking purposes\nvar PO = 26; //  Do not break following a numeric expression\nvar PR = 27; //  Do not break in front of a numeric expression\nvar SY = 28; //  Prevent a break before; and allow a break after\n// Other Characters\nvar AI = 29; //  Act like AL when the resolvedEAW is N; otherwise; act as ID\nvar AL = 30; //  Are alphabetic characters or symbols that are used with alphabetic characters\nvar CJ = 31; //  Treat as NS or ID for strict or normal breaking.\nvar EB = 32; //  Do not break from following Emoji Modifier\nvar EM = 33; //  Do not break from preceding Emoji Base\nvar H2 = 34; //  Form Korean syllable blocks\nvar H3 = 35; //  Form Korean syllable blocks\nvar HL = 36; //  Do not break around a following hyphen; otherwise act as Alphabetic\nvar ID = 37; //  Break before or after; except in some numeric context\nvar JL = 38; //  Form Korean syllable blocks\nvar JV = 39; //  Form Korean syllable blocks\nvar JT = 40; //  Form Korean syllable blocks\nvar RI = 41; //  Keep pairs together. For pairs; break before and after other classes\nvar SA = 42; //  Provide a line break opportunity contingent on additional, language-specific context analysis\nvar XX = 43; //  Have as yet unknown line breaking behavior or unassigned code positions\n\nvar classes = exports.classes = {\n    BK: BK,\n    CR: CR,\n    LF: LF,\n    CM: CM,\n    NL: NL,\n    SG: SG,\n    WJ: WJ,\n    ZW: ZW,\n    GL: GL,\n    SP: SP,\n    ZWJ: ZWJ,\n    B2: B2,\n    BA: BA,\n    BB: BB,\n    HY: HY,\n    CB: CB,\n    CL: CL,\n    CP: CP,\n    EX: EX,\n    IN: IN,\n    NS: NS,\n    OP: OP,\n    QU: QU,\n    IS: IS,\n    NU: NU,\n    PO: PO,\n    PR: PR,\n    SY: SY,\n    AI: AI,\n    AL: AL,\n    CJ: CJ,\n    EB: EB,\n    EM: EM,\n    H2: H2,\n    H3: H3,\n    HL: HL,\n    ID: ID,\n    JL: JL,\n    JV: JV,\n    JT: JT,\n    RI: RI,\n    SA: SA,\n    XX: XX\n};\n\nvar BREAK_MANDATORY = exports.BREAK_MANDATORY = '!';\nvar BREAK_NOT_ALLOWED = exports.BREAK_NOT_ALLOWED = '×';\nvar BREAK_ALLOWED = exports.BREAK_ALLOWED = '÷';\nvar UnicodeTrie = exports.UnicodeTrie = (0, _Trie.createTrieFromBase64)(_linebreakTrie2.default);\n\nvar ALPHABETICS = [AL, HL];\nvar HARD_LINE_BREAKS = [BK, CR, LF, NL];\nvar SPACE = [SP, ZW];\nvar PREFIX_POSTFIX = [PR, PO];\nvar LINE_BREAKS = HARD_LINE_BREAKS.concat(SPACE);\nvar KOREAN_SYLLABLE_BLOCK = [JL, JV, JT, H2, H3];\nvar HYPHEN = [HY, BA];\n\nvar codePointsToCharacterClasses = exports.codePointsToCharacterClasses = function codePointsToCharacterClasses(codePoints) {\n    var lineBreak = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'strict';\n\n    var types = [];\n    var indicies = [];\n    var categories = [];\n    codePoints.forEach(function (codePoint, index) {\n        var classType = UnicodeTrie.get(codePoint);\n        if (classType > LETTER_NUMBER_MODIFIER) {\n            categories.push(true);\n            classType -= LETTER_NUMBER_MODIFIER;\n        } else {\n            categories.push(false);\n        }\n\n        if (['normal', 'auto', 'loose'].indexOf(lineBreak) !== -1) {\n            // U+2010, – U+2013, 〜 U+301C, ゠ U+30A0\n            if ([0x2010, 0x2013, 0x301c, 0x30a0].indexOf(codePoint) !== -1) {\n                indicies.push(index);\n                return types.push(CB);\n            }\n        }\n\n        if (classType === CM || classType === ZWJ) {\n            // LB10 Treat any remaining combining mark or ZWJ as AL.\n            if (index === 0) {\n                indicies.push(index);\n                return types.push(AL);\n            }\n\n            // LB9 Do not break a combining character sequence; treat it as if it has the line breaking class of\n            // the base character in all of the following rules. Treat ZWJ as if it were CM.\n            var prev = types[index - 1];\n            if (LINE_BREAKS.indexOf(prev) === -1) {\n                indicies.push(indicies[index - 1]);\n                return types.push(prev);\n            }\n            indicies.push(index);\n            return types.push(AL);\n        }\n\n        indicies.push(index);\n\n        if (classType === CJ) {\n            return types.push(lineBreak === 'strict' ? NS : ID);\n        }\n\n        if (classType === SA) {\n            return types.push(AL);\n        }\n\n        if (classType === AI) {\n            return types.push(AL);\n        }\n\n        // For supplementary characters, a useful default is to treat characters in the range 10000..1FFFD as AL\n        // and characters in the ranges 20000..2FFFD and 30000..3FFFD as ID, until the implementation can be revised\n        // to take into account the actual line breaking properties for these characters.\n        if (classType === XX) {\n            if (codePoint >= 0x20000 && codePoint <= 0x2fffd || codePoint >= 0x30000 && codePoint <= 0x3fffd) {\n                return types.push(ID);\n            } else {\n                return types.push(AL);\n            }\n        }\n\n        types.push(classType);\n    });\n\n    return [indicies, types, categories];\n};\n\nvar isAdjacentWithSpaceIgnored = function isAdjacentWithSpaceIgnored(a, b, currentIndex, classTypes) {\n    var current = classTypes[currentIndex];\n    if (Array.isArray(a) ? a.indexOf(current) !== -1 : a === current) {\n        var i = currentIndex;\n        while (i <= classTypes.length) {\n            i++;\n            var next = classTypes[i];\n\n            if (next === b) {\n                return true;\n            }\n\n            if (next !== SP) {\n                break;\n            }\n        }\n    }\n\n    if (current === SP) {\n        var _i = currentIndex;\n\n        while (_i > 0) {\n            _i--;\n            var prev = classTypes[_i];\n\n            if (Array.isArray(a) ? a.indexOf(prev) !== -1 : a === prev) {\n                var n = currentIndex;\n                while (n <= classTypes.length) {\n                    n++;\n                    var _next = classTypes[n];\n\n                    if (_next === b) {\n                        return true;\n                    }\n\n                    if (_next !== SP) {\n                        break;\n                    }\n                }\n            }\n\n            if (prev !== SP) {\n                break;\n            }\n        }\n    }\n    return false;\n};\n\nvar previousNonSpaceClassType = function previousNonSpaceClassType(currentIndex, classTypes) {\n    var i = currentIndex;\n    while (i >= 0) {\n        var type = classTypes[i];\n        if (type === SP) {\n            i--;\n        } else {\n            return type;\n        }\n    }\n    return 0;\n};\n\nvar _lineBreakAtIndex = function _lineBreakAtIndex(codePoints, classTypes, indicies, index, forbiddenBreaks) {\n    if (indicies[index] === 0) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    var currentIndex = index - 1;\n    if (Array.isArray(forbiddenBreaks) && forbiddenBreaks[currentIndex] === true) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    var beforeIndex = currentIndex - 1;\n    var afterIndex = currentIndex + 1;\n    var current = classTypes[currentIndex];\n\n    // LB4 Always break after hard line breaks.\n    // LB5 Treat CR followed by LF, as well as CR, LF, and NL as hard line breaks.\n    var before = beforeIndex >= 0 ? classTypes[beforeIndex] : 0;\n    var next = classTypes[afterIndex];\n\n    if (current === CR && next === LF) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    if (HARD_LINE_BREAKS.indexOf(current) !== -1) {\n        return BREAK_MANDATORY;\n    }\n\n    // LB6 Do not break before hard line breaks.\n    if (HARD_LINE_BREAKS.indexOf(next) !== -1) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB7 Do not break before spaces or zero width space.\n    if (SPACE.indexOf(next) !== -1) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB8 Break before any character following a zero-width space, even if one or more spaces intervene.\n    if (previousNonSpaceClassType(currentIndex, classTypes) === ZW) {\n        return BREAK_ALLOWED;\n    }\n\n    // LB8a Do not break between a zero width joiner and an ideograph, emoji base or emoji modifier.\n    if (UnicodeTrie.get(codePoints[currentIndex]) === ZWJ && (next === ID || next === EB || next === EM)) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB11 Do not break before or after Word joiner and related characters.\n    if (current === WJ || next === WJ) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB12 Do not break after NBSP and related characters.\n    if (current === GL) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB12a Do not break before NBSP and related characters, except after spaces and hyphens.\n    if ([SP, BA, HY].indexOf(current) === -1 && next === GL) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB13 Do not break before ‘]’ or ‘!’ or ‘;’ or ‘/’, even after spaces.\n    if ([CL, CP, EX, IS, SY].indexOf(next) !== -1) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB14 Do not break after ‘[’, even after spaces.\n    if (previousNonSpaceClassType(currentIndex, classTypes) === OP) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB15 Do not break within ‘”[’, even with intervening spaces.\n    if (isAdjacentWithSpaceIgnored(QU, OP, currentIndex, classTypes)) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB16 Do not break between closing punctuation and a nonstarter (lb=NS), even with intervening spaces.\n    if (isAdjacentWithSpaceIgnored([CL, CP], NS, currentIndex, classTypes)) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB17 Do not break within ‘——’, even with intervening spaces.\n    if (isAdjacentWithSpaceIgnored(B2, B2, currentIndex, classTypes)) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB18 Break after spaces.\n    if (current === SP) {\n        return BREAK_ALLOWED;\n    }\n\n    // LB19 Do not break before or after quotation marks, such as ‘ ” ’.\n    if (current === QU || next === QU) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB20 Break before and after unresolved CB.\n    if (next === CB || current === CB) {\n        return BREAK_ALLOWED;\n    }\n\n    // LB21 Do not break before hyphen-minus, other hyphens, fixed-width spaces, small kana, and other non-starters, or after acute accents.\n    if ([BA, HY, NS].indexOf(next) !== -1 || current === BB) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB21a Don't break after Hebrew + Hyphen.\n    if (before === HL && HYPHEN.indexOf(current) !== -1) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB21b Don’t break between Solidus and Hebrew letters.\n    if (current === SY && next === HL) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB22 Do not break between two ellipses, or between letters, numbers or exclamations and ellipsis.\n    if (next === IN && ALPHABETICS.concat(IN, EX, NU, ID, EB, EM).indexOf(current) !== -1) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB23 Do not break between digits and letters.\n    if (ALPHABETICS.indexOf(next) !== -1 && current === NU || ALPHABETICS.indexOf(current) !== -1 && next === NU) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB23a Do not break between numeric prefixes and ideographs, or between ideographs and numeric postfixes.\n    if (current === PR && [ID, EB, EM].indexOf(next) !== -1 || [ID, EB, EM].indexOf(current) !== -1 && next === PO) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB24 Do not break between numeric prefix/postfix and letters, or between letters and prefix/postfix.\n    if (ALPHABETICS.indexOf(current) !== -1 && PREFIX_POSTFIX.indexOf(next) !== -1 || PREFIX_POSTFIX.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB25 Do not break between the following pairs of classes relevant to numbers:\n    if (\n    // (PR | PO) × ( OP | HY )? NU\n    [PR, PO].indexOf(current) !== -1 && (next === NU || [OP, HY].indexOf(next) !== -1 && classTypes[afterIndex + 1] === NU) ||\n    // ( OP | HY ) × NU\n    [OP, HY].indexOf(current) !== -1 && next === NU ||\n    // NU ×\t(NU | SY | IS)\n    current === NU && [NU, SY, IS].indexOf(next) !== -1) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // NU (NU | SY | IS)* × (NU | SY | IS | CL | CP)\n    if ([NU, SY, IS, CL, CP].indexOf(next) !== -1) {\n        var prevIndex = currentIndex;\n        while (prevIndex >= 0) {\n            var type = classTypes[prevIndex];\n            if (type === NU) {\n                return BREAK_NOT_ALLOWED;\n            } else if ([SY, IS].indexOf(type) !== -1) {\n                prevIndex--;\n            } else {\n                break;\n            }\n        }\n    }\n\n    // NU (NU | SY | IS)* (CL | CP)? × (PO | PR))\n    if ([PR, PO].indexOf(next) !== -1) {\n        var _prevIndex = [CL, CP].indexOf(current) !== -1 ? beforeIndex : currentIndex;\n        while (_prevIndex >= 0) {\n            var _type = classTypes[_prevIndex];\n            if (_type === NU) {\n                return BREAK_NOT_ALLOWED;\n            } else if ([SY, IS].indexOf(_type) !== -1) {\n                _prevIndex--;\n            } else {\n                break;\n            }\n        }\n    }\n\n    // LB26 Do not break a Korean syllable.\n    if (JL === current && [JL, JV, H2, H3].indexOf(next) !== -1 || [JV, H2].indexOf(current) !== -1 && [JV, JT].indexOf(next) !== -1 || [JT, H3].indexOf(current) !== -1 && next === JT) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB27 Treat a Korean Syllable Block the same as ID.\n    if (KOREAN_SYLLABLE_BLOCK.indexOf(current) !== -1 && [IN, PO].indexOf(next) !== -1 || KOREAN_SYLLABLE_BLOCK.indexOf(next) !== -1 && current === PR) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB28 Do not break between alphabetics (“at”).\n    if (ALPHABETICS.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB29 Do not break between numeric punctuation and alphabetics (“e.g.”).\n    if (current === IS && ALPHABETICS.indexOf(next) !== -1) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB30 Do not break between letters, numbers, or ordinary symbols and opening or closing parentheses.\n    if (ALPHABETICS.concat(NU).indexOf(current) !== -1 && next === OP || ALPHABETICS.concat(NU).indexOf(next) !== -1 && current === CP) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB30a Break between two regional indicator symbols if and only if there are an even number of regional\n    // indicators preceding the position of the break.\n    if (current === RI && next === RI) {\n        var i = indicies[currentIndex];\n        var count = 1;\n        while (i > 0) {\n            i--;\n            if (classTypes[i] === RI) {\n                count++;\n            } else {\n                break;\n            }\n        }\n        if (count % 2 !== 0) {\n            return BREAK_NOT_ALLOWED;\n        }\n    }\n\n    // LB30b Do not break between an emoji base and an emoji modifier.\n    if (current === EB && next === EM) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    return BREAK_ALLOWED;\n};\n\nvar lineBreakAtIndex = exports.lineBreakAtIndex = function lineBreakAtIndex(codePoints, index) {\n    // LB2 Never break at the start of text.\n    if (index === 0) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB3 Always break at the end of text.\n    if (index >= codePoints.length) {\n        return BREAK_MANDATORY;\n    }\n\n    var _codePointsToCharacte = codePointsToCharacterClasses(codePoints),\n        _codePointsToCharacte2 = _slicedToArray(_codePointsToCharacte, 2),\n        indicies = _codePointsToCharacte2[0],\n        classTypes = _codePointsToCharacte2[1];\n\n    return _lineBreakAtIndex(codePoints, classTypes, indicies, index);\n};\n\nvar cssFormattedClasses = function cssFormattedClasses(codePoints, options) {\n    if (!options) {\n        options = { lineBreak: 'normal', wordBreak: 'normal' };\n    }\n\n    var _codePointsToCharacte3 = codePointsToCharacterClasses(codePoints, options.lineBreak),\n        _codePointsToCharacte4 = _slicedToArray(_codePointsToCharacte3, 3),\n        indicies = _codePointsToCharacte4[0],\n        classTypes = _codePointsToCharacte4[1],\n        isLetterNumber = _codePointsToCharacte4[2];\n\n    if (options.wordBreak === 'break-all' || options.wordBreak === 'break-word') {\n        classTypes = classTypes.map(function (type) {\n            return [NU, AL, SA].indexOf(type) !== -1 ? ID : type;\n        });\n    }\n\n    var forbiddenBreakpoints = options.wordBreak === 'keep-all' ? isLetterNumber.map(function (isLetterNumber, i) {\n        return isLetterNumber && codePoints[i] >= 0x4e00 && codePoints[i] <= 0x9fff;\n    }) : null;\n\n    return [indicies, classTypes, forbiddenBreakpoints];\n};\n\nvar inlineBreakOpportunities = exports.inlineBreakOpportunities = function inlineBreakOpportunities(str, options) {\n    var codePoints = (0, _Util.toCodePoints)(str);\n    var output = BREAK_NOT_ALLOWED;\n\n    var _cssFormattedClasses = cssFormattedClasses(codePoints, options),\n        _cssFormattedClasses2 = _slicedToArray(_cssFormattedClasses, 3),\n        indicies = _cssFormattedClasses2[0],\n        classTypes = _cssFormattedClasses2[1],\n        forbiddenBreakpoints = _cssFormattedClasses2[2];\n\n    codePoints.forEach(function (codePoint, i) {\n        output += (0, _Util.fromCodePoint)(codePoint) + (i >= codePoints.length - 1 ? BREAK_MANDATORY : _lineBreakAtIndex(codePoints, classTypes, indicies, i + 1, forbiddenBreakpoints));\n    });\n\n    return output;\n};\n\nvar Break = function () {\n    function Break(codePoints, lineBreak, start, end) {\n        _classCallCheck(this, Break);\n\n        this._codePoints = codePoints;\n        this.required = lineBreak === BREAK_MANDATORY;\n        this.start = start;\n        this.end = end;\n    }\n\n    _createClass(Break, [{\n        key: 'slice',\n        value: function slice() {\n            return _Util.fromCodePoint.apply(undefined, _toConsumableArray(this._codePoints.slice(this.start, this.end)));\n        }\n    }]);\n\n    return Break;\n}();\n\nvar LineBreaker = exports.LineBreaker = function LineBreaker(str, options) {\n    var codePoints = (0, _Util.toCodePoints)(str);\n\n    var _cssFormattedClasses3 = cssFormattedClasses(codePoints, options),\n        _cssFormattedClasses4 = _slicedToArray(_cssFormattedClasses3, 3),\n        indicies = _cssFormattedClasses4[0],\n        classTypes = _cssFormattedClasses4[1],\n        forbiddenBreakpoints = _cssFormattedClasses4[2];\n\n    var length = codePoints.length;\n    var lastEnd = 0;\n    var nextIndex = 0;\n\n    return {\n        next: function next() {\n            if (nextIndex >= length) {\n                return { done: true };\n            }\n            var lineBreak = BREAK_NOT_ALLOWED;\n            while (nextIndex < length && (lineBreak = _lineBreakAtIndex(codePoints, classTypes, indicies, ++nextIndex, forbiddenBreakpoints)) === BREAK_NOT_ALLOWED) {}\n\n            if (lineBreak !== BREAK_NOT_ALLOWED || nextIndex === length) {\n                var value = new Break(codePoints, lineBreak, lastEnd, nextIndex);\n                lastEnd = nextIndex;\n                return { value: value, done: false };\n            }\n\n            return { done: true };\n        }\n    };\n};\n\n//# sourceURL=webpack://html2canvas/./node_modules/css-line-break/dist/LineBreak.js?");

/***/ }),

/***/ "./node_modules/css-line-break/dist/Trie.js":
/*!**************************************************!*\
  !*** ./node_modules/css-line-break/dist/Trie.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.Trie = exports.createTrieFromBase64 = exports.UTRIE2_INDEX_2_MASK = exports.UTRIE2_INDEX_2_BLOCK_LENGTH = exports.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = exports.UTRIE2_INDEX_1_OFFSET = exports.UTRIE2_UTF8_2B_INDEX_2_LENGTH = exports.UTRIE2_UTF8_2B_INDEX_2_OFFSET = exports.UTRIE2_INDEX_2_BMP_LENGTH = exports.UTRIE2_LSCP_INDEX_2_LENGTH = exports.UTRIE2_DATA_MASK = exports.UTRIE2_DATA_BLOCK_LENGTH = exports.UTRIE2_LSCP_INDEX_2_OFFSET = exports.UTRIE2_SHIFT_1_2 = exports.UTRIE2_INDEX_SHIFT = exports.UTRIE2_SHIFT_1 = exports.UTRIE2_SHIFT_2 = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Util = __webpack_require__(/*! ./Util */ \"./node_modules/css-line-break/dist/Util.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/** Shift size for getting the index-2 table offset. */\nvar UTRIE2_SHIFT_2 = exports.UTRIE2_SHIFT_2 = 5;\n\n/** Shift size for getting the index-1 table offset. */\nvar UTRIE2_SHIFT_1 = exports.UTRIE2_SHIFT_1 = 6 + 5;\n\n/**\n * Shift size for shifting left the index array values.\n * Increases possible data size with 16-bit index values at the cost\n * of compactability.\n * This requires data blocks to be aligned by UTRIE2_DATA_GRANULARITY.\n */\nvar UTRIE2_INDEX_SHIFT = exports.UTRIE2_INDEX_SHIFT = 2;\n\n/**\n * Difference between the two shift sizes,\n * for getting an index-1 offset from an index-2 offset. 6=11-5\n */\nvar UTRIE2_SHIFT_1_2 = exports.UTRIE2_SHIFT_1_2 = UTRIE2_SHIFT_1 - UTRIE2_SHIFT_2;\n\n/**\n * The part of the index-2 table for U+D800..U+DBFF stores values for\n * lead surrogate code _units_ not code _points_.\n * Values for lead surrogate code _points_ are indexed with this portion of the table.\n * Length=32=0x20=0x400>>UTRIE2_SHIFT_2. (There are 1024=0x400 lead surrogates.)\n */\nvar UTRIE2_LSCP_INDEX_2_OFFSET = exports.UTRIE2_LSCP_INDEX_2_OFFSET = 0x10000 >> UTRIE2_SHIFT_2;\n\n/** Number of entries in a data block. 32=0x20 */\nvar UTRIE2_DATA_BLOCK_LENGTH = exports.UTRIE2_DATA_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_2;\n/** Mask for getting the lower bits for the in-data-block offset. */\nvar UTRIE2_DATA_MASK = exports.UTRIE2_DATA_MASK = UTRIE2_DATA_BLOCK_LENGTH - 1;\n\nvar UTRIE2_LSCP_INDEX_2_LENGTH = exports.UTRIE2_LSCP_INDEX_2_LENGTH = 0x400 >> UTRIE2_SHIFT_2;\n/** Count the lengths of both BMP pieces. 2080=0x820 */\nvar UTRIE2_INDEX_2_BMP_LENGTH = exports.UTRIE2_INDEX_2_BMP_LENGTH = UTRIE2_LSCP_INDEX_2_OFFSET + UTRIE2_LSCP_INDEX_2_LENGTH;\n/**\n * The 2-byte UTF-8 version of the index-2 table follows at offset 2080=0x820.\n * Length 32=0x20 for lead bytes C0..DF, regardless of UTRIE2_SHIFT_2.\n */\nvar UTRIE2_UTF8_2B_INDEX_2_OFFSET = exports.UTRIE2_UTF8_2B_INDEX_2_OFFSET = UTRIE2_INDEX_2_BMP_LENGTH;\nvar UTRIE2_UTF8_2B_INDEX_2_LENGTH = exports.UTRIE2_UTF8_2B_INDEX_2_LENGTH = 0x800 >> 6; /* U+0800 is the first code point after 2-byte UTF-8 */\n/**\n * The index-1 table, only used for supplementary code points, at offset 2112=0x840.\n * Variable length, for code points up to highStart, where the last single-value range starts.\n * Maximum length 512=0x200=0x100000>>UTRIE2_SHIFT_1.\n * (For 0x100000 supplementary code points U+10000..U+10ffff.)\n *\n * The part of the index-2 table for supplementary code points starts\n * after this index-1 table.\n *\n * Both the index-1 table and the following part of the index-2 table\n * are omitted completely if there is only BMP data.\n */\nvar UTRIE2_INDEX_1_OFFSET = exports.UTRIE2_INDEX_1_OFFSET = UTRIE2_UTF8_2B_INDEX_2_OFFSET + UTRIE2_UTF8_2B_INDEX_2_LENGTH;\n\n/**\n * Number of index-1 entries for the BMP. 32=0x20\n * This part of the index-1 table is omitted from the serialized form.\n */\nvar UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = exports.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = 0x10000 >> UTRIE2_SHIFT_1;\n\n/** Number of entries in an index-2 block. 64=0x40 */\nvar UTRIE2_INDEX_2_BLOCK_LENGTH = exports.UTRIE2_INDEX_2_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_1_2;\n/** Mask for getting the lower bits for the in-index-2-block offset. */\nvar UTRIE2_INDEX_2_MASK = exports.UTRIE2_INDEX_2_MASK = UTRIE2_INDEX_2_BLOCK_LENGTH - 1;\n\nvar createTrieFromBase64 = exports.createTrieFromBase64 = function createTrieFromBase64(base64) {\n    var buffer = (0, _Util.decode)(base64);\n    var view32 = Array.isArray(buffer) ? (0, _Util.polyUint32Array)(buffer) : new Uint32Array(buffer);\n    var view16 = Array.isArray(buffer) ? (0, _Util.polyUint16Array)(buffer) : new Uint16Array(buffer);\n    var headerLength = 24;\n\n    var index = view16.slice(headerLength / 2, view32[4] / 2);\n    var data = view32[5] === 2 ? view16.slice((headerLength + view32[4]) / 2) : view32.slice(Math.ceil((headerLength + view32[4]) / 4));\n\n    return new Trie(view32[0], view32[1], view32[2], view32[3], index, data);\n};\n\nvar Trie = exports.Trie = function () {\n    function Trie(initialValue, errorValue, highStart, highValueIndex, index, data) {\n        _classCallCheck(this, Trie);\n\n        this.initialValue = initialValue;\n        this.errorValue = errorValue;\n        this.highStart = highStart;\n        this.highValueIndex = highValueIndex;\n        this.index = index;\n        this.data = data;\n    }\n\n    /**\n     * Get the value for a code point as stored in the Trie.\n     *\n     * @param codePoint the code point\n     * @return the value\n     */\n\n\n    _createClass(Trie, [{\n        key: 'get',\n        value: function get(codePoint) {\n            var ix = void 0;\n            if (codePoint >= 0) {\n                if (codePoint < 0x0d800 || codePoint > 0x0dbff && codePoint <= 0x0ffff) {\n                    // Ordinary BMP code point, excluding leading surrogates.\n                    // BMP uses a single level lookup.  BMP index starts at offset 0 in the Trie2 index.\n                    // 16 bit data is stored in the index array itself.\n                    ix = this.index[codePoint >> UTRIE2_SHIFT_2];\n                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);\n                    return this.data[ix];\n                }\n\n                if (codePoint <= 0xffff) {\n                    // Lead Surrogate Code Point.  A Separate index section is stored for\n                    // lead surrogate code units and code points.\n                    //   The main index has the code unit data.\n                    //   For this function, we need the code point data.\n                    // Note: this expression could be refactored for slightly improved efficiency, but\n                    //       surrogate code points will be so rare in practice that it's not worth it.\n                    ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET + (codePoint - 0xd800 >> UTRIE2_SHIFT_2)];\n                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);\n                    return this.data[ix];\n                }\n\n                if (codePoint < this.highStart) {\n                    // Supplemental code point, use two-level lookup.\n                    ix = UTRIE2_INDEX_1_OFFSET - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH + (codePoint >> UTRIE2_SHIFT_1);\n                    ix = this.index[ix];\n                    ix += codePoint >> UTRIE2_SHIFT_2 & UTRIE2_INDEX_2_MASK;\n                    ix = this.index[ix];\n                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);\n                    return this.data[ix];\n                }\n                if (codePoint <= 0x10ffff) {\n                    return this.data[this.highValueIndex];\n                }\n            }\n\n            // Fall through.  The code point is outside of the legal range of 0..0x10ffff.\n            return this.errorValue;\n        }\n    }]);\n\n    return Trie;\n}();\n\n//# sourceURL=webpack://html2canvas/./node_modules/css-line-break/dist/Trie.js?");

/***/ }),

/***/ "./node_modules/css-line-break/dist/Util.js":
/*!**************************************************!*\
  !*** ./node_modules/css-line-break/dist/Util.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar toCodePoints = exports.toCodePoints = function toCodePoints(str) {\n    var codePoints = [];\n    var i = 0;\n    var length = str.length;\n    while (i < length) {\n        var value = str.charCodeAt(i++);\n        if (value >= 0xd800 && value <= 0xdbff && i < length) {\n            var extra = str.charCodeAt(i++);\n            if ((extra & 0xfc00) === 0xdc00) {\n                codePoints.push(((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000);\n            } else {\n                codePoints.push(value);\n                i--;\n            }\n        } else {\n            codePoints.push(value);\n        }\n    }\n    return codePoints;\n};\n\nvar fromCodePoint = exports.fromCodePoint = function fromCodePoint() {\n    if (String.fromCodePoint) {\n        return String.fromCodePoint.apply(String, arguments);\n    }\n\n    var length = arguments.length;\n    if (!length) {\n        return '';\n    }\n\n    var codeUnits = [];\n\n    var index = -1;\n    var result = '';\n    while (++index < length) {\n        var codePoint = arguments.length <= index ? undefined : arguments[index];\n        if (codePoint <= 0xffff) {\n            codeUnits.push(codePoint);\n        } else {\n            codePoint -= 0x10000;\n            codeUnits.push((codePoint >> 10) + 0xd800, codePoint % 0x400 + 0xdc00);\n        }\n        if (index + 1 === length || codeUnits.length > 0x4000) {\n            result += String.fromCharCode.apply(String, codeUnits);\n            codeUnits.length = 0;\n        }\n    }\n    return result;\n};\n\nvar chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';\n\n// Use a lookup table to find the index.\nvar lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);\nfor (var i = 0; i < chars.length; i++) {\n    lookup[chars.charCodeAt(i)] = i;\n}\n\nvar decode = exports.decode = function decode(base64) {\n    var bufferLength = base64.length * 0.75,\n        len = base64.length,\n        i = void 0,\n        p = 0,\n        encoded1 = void 0,\n        encoded2 = void 0,\n        encoded3 = void 0,\n        encoded4 = void 0;\n\n    if (base64[base64.length - 1] === '=') {\n        bufferLength--;\n        if (base64[base64.length - 2] === '=') {\n            bufferLength--;\n        }\n    }\n\n    var buffer = typeof ArrayBuffer !== 'undefined' && typeof Uint8Array !== 'undefined' && typeof Uint8Array.prototype.slice !== 'undefined' ? new ArrayBuffer(bufferLength) : new Array(bufferLength);\n    var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);\n\n    for (i = 0; i < len; i += 4) {\n        encoded1 = lookup[base64.charCodeAt(i)];\n        encoded2 = lookup[base64.charCodeAt(i + 1)];\n        encoded3 = lookup[base64.charCodeAt(i + 2)];\n        encoded4 = lookup[base64.charCodeAt(i + 3)];\n\n        bytes[p++] = encoded1 << 2 | encoded2 >> 4;\n        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;\n        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;\n    }\n\n    return buffer;\n};\n\nvar polyUint16Array = exports.polyUint16Array = function polyUint16Array(buffer) {\n    var length = buffer.length;\n    var bytes = [];\n    for (var _i = 0; _i < length; _i += 2) {\n        bytes.push(buffer[_i + 1] << 8 | buffer[_i]);\n    }\n    return bytes;\n};\n\nvar polyUint32Array = exports.polyUint32Array = function polyUint32Array(buffer) {\n    var length = buffer.length;\n    var bytes = [];\n    for (var _i2 = 0; _i2 < length; _i2 += 4) {\n        bytes.push(buffer[_i2 + 3] << 24 | buffer[_i2 + 2] << 16 | buffer[_i2 + 1] << 8 | buffer[_i2]);\n    }\n    return bytes;\n};\n\n//# sourceURL=webpack://html2canvas/./node_modules/css-line-break/dist/Util.js?");

/***/ }),

/***/ "./node_modules/css-line-break/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/css-line-break/dist/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Util = __webpack_require__(/*! ./Util */ \"./node_modules/css-line-break/dist/Util.js\");\n\nObject.defineProperty(exports, 'toCodePoints', {\n  enumerable: true,\n  get: function get() {\n    return _Util.toCodePoints;\n  }\n});\nObject.defineProperty(exports, 'fromCodePoint', {\n  enumerable: true,\n  get: function get() {\n    return _Util.fromCodePoint;\n  }\n});\n\nvar _LineBreak = __webpack_require__(/*! ./LineBreak */ \"./node_modules/css-line-break/dist/LineBreak.js\");\n\nObject.defineProperty(exports, 'LineBreaker', {\n  enumerable: true,\n  get: function get() {\n    return _LineBreak.LineBreaker;\n  }\n});\n\n//# sourceURL=webpack://html2canvas/./node_modules/css-line-break/dist/index.js?");

/***/ }),

/***/ "./node_modules/css-line-break/dist/linebreak-trie.js":
/*!************************************************************!*\
  !*** ./node_modules/css-line-break/dist/linebreak-trie.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = 'KwAAAAAAAAAACA4AIDoAAPAfAAACAAAAAAAIABAAGABAAEgAUABYAF4AZgBeAGYAYABoAHAAeABeAGYAfACEAIAAiACQAJgAoACoAK0AtQC9AMUAXgBmAF4AZgBeAGYAzQDVAF4AZgDRANkA3gDmAOwA9AD8AAQBDAEUARoBIgGAAIgAJwEvATcBPwFFAU0BTAFUAVwBZAFsAXMBewGDATAAiwGTAZsBogGkAawBtAG8AcIBygHSAdoB4AHoAfAB+AH+AQYCDgIWAv4BHgImAi4CNgI+AkUCTQJTAlsCYwJrAnECeQKBAk0CiQKRApkCoQKoArACuALAAsQCzAIwANQC3ALkAjAA7AL0AvwCAQMJAxADGAMwACADJgMuAzYDPgOAAEYDSgNSA1IDUgNaA1oDYANiA2IDgACAAGoDgAByA3YDfgOAAIQDgACKA5IDmgOAAIAAogOqA4AAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAK8DtwOAAIAAvwPHA88D1wPfAyAD5wPsA/QD/AOAAIAABAQMBBIEgAAWBB4EJgQuBDMEIAM7BEEEXgBJBCADUQRZBGEEaQQwADAAcQQ+AXkEgQSJBJEEgACYBIAAoASoBK8EtwQwAL8ExQSAAIAAgACAAIAAgACgAM0EXgBeAF4AXgBeAF4AXgBeANUEXgDZBOEEXgDpBPEE+QQBBQkFEQUZBSEFKQUxBTUFPQVFBUwFVAVcBV4AYwVeAGsFcwV7BYMFiwWSBV4AmgWgBacFXgBeAF4AXgBeAKsFXgCyBbEFugW7BcIFwgXIBcIFwgXQBdQF3AXkBesF8wX7BQMGCwYTBhsGIwYrBjMGOwZeAD8GRwZNBl4AVAZbBl4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAGMGXgBqBnEGXgBeAF4AXgBeAF4AXgBeAF4AXgB5BoAG4wSGBo4GkwaAAIADHgR5AF4AXgBeAJsGgABGA4AAowarBrMGswagALsGwwbLBjAA0wbaBtoG3QbaBtoG2gbaBtoG2gblBusG8wb7BgMHCwcTBxsHCwcjBysHMAc1BzUHOgdCB9oGSgdSB1oHYAfaBloHaAfaBlIH2gbaBtoG2gbaBtoG2gbaBjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHbQdeAF4ANQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQd1B30HNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B4MH2gaKB68EgACAAIAAgACAAIAAgACAAI8HlwdeAJ8HpweAAIAArwe3B14AXgC/B8UHygcwANAH2AfgB4AA6AfwBz4B+AcACFwBCAgPCBcIogEYAR8IJwiAAC8INwg/CCADRwhPCFcIXwhnCEoDGgSAAIAAgABvCHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIhAiLCI4IMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAANQc1BzUHNQc1BzUHNQc1BzUHNQc1B54INQc1B6II2gaqCLIIugiAAIAAvgjGCIAAgACAAIAAgACAAIAAgACAAIAAywiHAYAA0wiAANkI3QjlCO0I9Aj8CIAAgACAAAIJCgkSCRoJIgknCTYHLwk3CZYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiAAIAAAAFAAXgBeAGAAcABeAHwAQACQAKAArQC9AJ4AXgBeAE0A3gBRAN4A7AD8AMwBGgEAAKcBNwEFAUwBXAF4QkhCmEKnArcCgAHHAsABz4LAAcABwAHAAd+C6ABoAG+C/4LAAcABwAHAAc+DF4MAAcAB54M3gweDV4Nng3eDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEeDqABVg6WDqABoQ6gAaABoAHXDvcONw/3DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DncPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB7cPPwlGCU4JMACAAIAAgABWCV4JYQmAAGkJcAl4CXwJgAkwADAAMAAwAIgJgACLCZMJgACZCZ8JowmrCYAAswkwAF4AXgB8AIAAuwkABMMJyQmAAM4JgADVCTAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAqwYWBNkIMAAwADAAMADdCeAJ6AnuCR4E9gkwAP4JBQoNCjAAMACAABUK0wiAAB0KJAosCjQKgAAwADwKQwqAAEsKvQmdCVMKWwowADAAgACAALcEMACAAGMKgABrCjAAMAAwADAAMAAwADAAMAAwADAAMAAeBDAAMAAwADAAMAAwADAAMAAwADAAMAAwAIkEPQFzCnoKiQSCCooKkAqJBJgKoAqkCokEGAGsCrQKvArBCjAAMADJCtEKFQHZCuEK/gHpCvEKMAAwADAAMACAAIwE+QowAIAAPwEBCzAAMAAwADAAMACAAAkLEQswAIAAPwEZCyELgAAOCCkLMAAxCzkLMAAwADAAMAAwADAAXgBeAEELMAAwADAAMAAwADAAMAAwAEkLTQtVC4AAXAtkC4AAiQkwADAAMAAwADAAMAAwADAAbAtxC3kLgAuFC4sLMAAwAJMLlwufCzAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAApwswADAAMACAAIAAgACvC4AAgACAAIAAgACAALcLMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAvwuAAMcLgACAAIAAgACAAIAAyguAAIAAgACAAIAA0QswADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAANkLgACAAIAA4AswADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACJCR4E6AswADAAhwHwC4AA+AsADAgMEAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMACAAIAAGAwdDCUMMAAwAC0MNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQw1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHPQwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADUHNQc1BzUHNQc1BzUHNQc2BzAAMAA5DDUHNQc1BzUHNQc1BzUHNQc1BzUHNQdFDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAATQxSDFoMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAF4AXgBeAF4AXgBeAF4AYgxeAGoMXgBxDHkMfwxeAIUMXgBeAI0MMAAwADAAMAAwAF4AXgCVDJ0MMAAwADAAMABeAF4ApQxeAKsMswy7DF4Awgy9DMoMXgBeAF4AXgBeAF4AXgBeAF4AXgDRDNkMeQBqCeAM3Ax8AOYM7Az0DPgMXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgCgAAANoAAHDQ4NFg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAeDSYNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAC4NMABeAF4ANg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAD4NRg1ODVYNXg1mDTAAbQ0wADAAMAAwADAAMAAwADAA2gbaBtoG2gbaBtoG2gbaBnUNeg3CBYANwgWFDdoGjA3aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gaUDZwNpA2oDdoG2gawDbcNvw3HDdoG2gbPDdYN3A3fDeYN2gbsDfMN2gbaBvoN/g3aBgYODg7aBl4AXgBeABYOXgBeACUG2gYeDl4AJA5eACwO2w3aBtoGMQ45DtoG2gbaBtoGQQ7aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B1EO2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQdZDjUHNQc1BzUHNQc1B2EONQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHaA41BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B3AO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B2EO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBkkOeA6gAKAAoAAwADAAMAAwAKAAoACgAKAAoACgAKAAgA4wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAD//wQABAAEAAQABAAEAAQABAAEAA0AAwABAAEAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAKABMAFwAeABsAGgAeABcAFgASAB4AGwAYAA8AGAAcAEsASwBLAEsASwBLAEsASwBLAEsAGAAYAB4AHgAeABMAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAFgAbABIAHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYADQARAB4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkAFgAaABsAGwAbAB4AHQAdAB4ATwAXAB4ADQAeAB4AGgAbAE8ATwAOAFAAHQAdAB0ATwBPABcATwBPAE8AFgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwArAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAAQABAANAA0ASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAUAArACsAKwArACsAKwArACsABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAGgAaAFAAUABQAFAAUABMAB4AGwBQAB4AKwArACsABAAEAAQAKwBQAFAAUABQAFAAUAArACsAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUAArAFAAUAArACsABAArAAQABAAEAAQABAArACsAKwArAAQABAArACsABAAEAAQAKwArACsABAArACsAKwArACsAKwArAFAAUABQAFAAKwBQACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwAEAAQAUABQAFAABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQAKwArAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeABsAKwArACsAKwArACsAKwBQAAQABAAEAAQABAAEACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAKwArACsAKwArACsAKwArAAQABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwAEAFAAKwBQAFAAUABQAFAAUAArACsAKwBQAFAAUAArAFAAUABQAFAAKwArACsAUABQACsAUAArAFAAUAArACsAKwBQAFAAKwArACsAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQAKwArACsABAAEAAQAKwAEAAQABAAEACsAKwBQACsAKwArACsAKwArAAQAKwArACsAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAB4AHgAeAB4AHgAeABsAHgArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArAFAAUABQACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAB4AUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArACsAKwArACsAKwArAFAAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwArAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAKwBcAFwAKwBcACsAKwBcACsAKwArACsAKwArAFwAXABcAFwAKwBcAFwAXABcAFwAXABcACsAXABcAFwAKwBcACsAXAArACsAXABcACsAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgArACoAKgBcACsAKwBcAFwAXABcAFwAKwBcACsAKgAqACoAKgAqACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAFwAXABcAFwAUAAOAA4ADgAOAB4ADgAOAAkADgAOAA0ACQATABMAEwATABMACQAeABMAHgAeAB4ABAAEAB4AHgAeAB4AHgAeAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUAANAAQAHgAEAB4ABAAWABEAFgARAAQABABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAAQABAAEAAQABAANAAQABABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsADQANAB4AHgAeAB4AHgAeAAQAHgAeAB4AHgAeAB4AKwAeAB4ADgAOAA0ADgAeAB4AHgAeAB4ACQAJACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgAeAB4AHgBcAFwAXABcAFwAXAAqACoAKgAqAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAKgAqACoAKgAqACoAKgBcAFwAXAAqACoAKgAqAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAXAAqAEsASwBLAEsASwBLAEsASwBLAEsAKgAqACoAKgAqACoAUABQAFAAUABQAFAAKwBQACsAKwArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQACsAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwAEAAQABAAeAA0AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAEQArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAADQANAA0AUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAA0ADQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoADQANABUAXAANAB4ADQAbAFwAKgArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAB4AHgATABMADQANAA4AHgATABMAHgAEAAQABAAJACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAUABQAFAAUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwAeACsAKwArABMAEwBLAEsASwBLAEsASwBLAEsASwBLAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwBcAFwAXABcAFwAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcACsAKwArACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwAeAB4AXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsABABLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKgAqACoAKgAqACoAKgBcACoAKgAqACoAKgAqACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAUABQAFAAUABQAFAAUAArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4ADQANAA0ADQAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAHgAeAB4AHgBQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwANAA0ADQANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwBQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsABAAEAAQAHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAABABQAFAAUABQAAQABAAEAFAAUAAEAAQABAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAKwBQACsAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAKwArAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAKwAeAB4AHgAeAB4AHgAeAA4AHgArAA0ADQANAA0ADQANAA0ACQANAA0ADQAIAAQACwAEAAQADQAJAA0ADQAMAB0AHQAeABcAFwAWABcAFwAXABYAFwAdAB0AHgAeABQAFAAUAA0AAQABAAQABAAEAAQABAAJABoAGgAaABoAGgAaABoAGgAeABcAFwAdABUAFQAeAB4AHgAeAB4AHgAYABYAEQAVABUAFQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgANAB4ADQANAA0ADQAeAA0ADQANAAcAHgAeAB4AHgArAAQABAAEAAQABAAEAAQABAAEAAQAUABQACsAKwBPAFAAUABQAFAAUAAeAB4AHgAWABEATwBQAE8ATwBPAE8AUABQAFAAUABQAB4AHgAeABYAEQArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGgAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgBQABoAHgAdAB4AUAAeABoAHgAeAB4AHgAeAB4AHgAeAB4ATwAeAFAAGwAeAB4AUABQAFAAUABQAB4AHgAeAB0AHQAeAFAAHgBQAB4AUAAeAFAATwBQAFAAHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AUABQAFAAUABPAE8AUABQAFAAUABQAE8AUABQAE8AUABPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAE8ATwBPAE8ATwBPAE8ATwBPAE8AUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAATwAeAB4AKwArACsAKwAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB0AHQAeAB4AHgAdAB0AHgAeAB0AHgAeAB4AHQAeAB0AGwAbAB4AHQAeAB4AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB0AHgAdAB4AHQAdAB0AHQAdAB0AHgAdAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAdAB0AHQAdAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAlACUAHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB0AHQAeAB4AHgAeAB0AHQAdAB4AHgAdAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB0AHQAeAB4AHQAeAB4AHgAeAB0AHQAeAB4AHgAeACUAJQAdAB0AJQAeACUAJQAlACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHQAdAB0AHgAdACUAHQAdAB4AHQAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHQAdAB0AHQAlAB4AJQAlACUAHQAlACUAHQAdAB0AJQAlAB0AHQAlAB0AHQAlACUAJQAeAB0AHgAeAB4AHgAdAB0AJQAdAB0AHQAdAB0AHQAlACUAJQAlACUAHQAlACUAIAAlAB0AHQAlACUAJQAlACUAJQAlACUAHgAeAB4AJQAlACAAIAAgACAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeABcAFwAXABcAFwAXAB4AEwATACUAHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACUAJQBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwArACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAE8ATwBPAE8ATwBPAE8ATwAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeACsAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUAArACsAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQBQAFAAUABQACsAKwArACsAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAABAAEAAQAKwAEAAQAKwArACsAKwArAAQABAAEAAQAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsABAAEAAQAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsADQANAA0ADQANAA0ADQANAB4AKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAUABQAFAAUABQAA0ADQANAA0ADQANABQAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwANAA0ADQANAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAeAAQABAAEAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLACsADQArAB4AKwArAAQABAAEAAQAUABQAB4AUAArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwAEAAQABAAEAAQABAAEAAQABAAOAA0ADQATABMAHgAeAB4ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0AUABQAFAAUAAEAAQAKwArAAQADQANAB4AUAArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXABcAA0ADQANACoASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUAArACsAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANACsADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEcARwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwAeAAQABAANAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAEAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUAArACsAUAArACsAUABQACsAKwBQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAeAB4ADQANAA0ADQAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAArAAQABAArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAEAAQABAAEAAQABAAEACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAFgAWAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAKwBQACsAKwArACsAKwArAFAAKwArACsAKwBQACsAUAArAFAAKwBQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQACsAUAArAFAAKwBQACsAUABQACsAUAArACsAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAUABQAFAAUAArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUAArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAlACUAJQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeACUAJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeACUAJQAlACUAJQAeACUAJQAlACUAJQAgACAAIAAlACUAIAAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIQAhACEAIQAhACUAJQAgACAAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAIAAlACUAJQAlACAAJQAgACAAIAAgACAAIAAgACAAIAAlACUAJQAgACUAJQAlACUAIAAgACAAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeACUAHgAlAB4AJQAlACUAJQAlACAAJQAlACUAJQAeACUAHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAIAAgACAAIAAgAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFwAXABcAFQAVABUAHgAeAB4AHgAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAlACAAIAAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsA';\n\n//# sourceURL=webpack://html2canvas/./node_modules/css-line-break/dist/linebreak-trie.js?");

/***/ }),

/***/ "./src/Angle.js":
/*!**********************!*\
  !*** ./src/Angle.js ***!
  \**********************/
/*! exports provided: parseAngle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseAngle\", function() { return parseAngle; });\n\n\nvar ANGLE = /([+-]?\\d*\\.?\\d+)(deg|grad|rad|turn)/i;\nvar parseAngle = function parseAngle(angle) {\n  var match = angle.match(ANGLE);\n\n  if (match) {\n    var value = parseFloat(match[1]);\n\n    switch (match[2].toLowerCase()) {\n      case 'deg':\n        return Math.PI * value / 180;\n\n      case 'grad':\n        return Math.PI / 200 * value;\n\n      case 'rad':\n        return value;\n\n      case 'turn':\n        return Math.PI * 2 * value;\n    }\n  }\n\n  return null;\n};\n\n//# sourceURL=webpack://html2canvas/./src/Angle.js?");

/***/ }),

/***/ "./src/Bounds.js":
/*!***********************!*\
  !*** ./src/Bounds.js ***!
  \***********************/
/*! exports provided: Bounds, parseBounds, calculatePaddingBox, calculateContentBox, parseDocumentSize, parsePathForBorder, calculateBorderBoxPath, calculatePaddingBoxPath, parseBoundCurves */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Bounds\", function() { return Bounds; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseBounds\", function() { return parseBounds; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculatePaddingBox\", function() { return calculatePaddingBox; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateContentBox\", function() { return calculateContentBox; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseDocumentSize\", function() { return parseDocumentSize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parsePathForBorder\", function() { return parsePathForBorder; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateBorderBoxPath\", function() { return calculateBorderBoxPath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculatePaddingBoxPath\", function() { return calculatePaddingBoxPath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseBoundCurves\", function() { return parseBoundCurves; });\n/* harmony import */ var _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawing/Vector */ \"./src/drawing/Vector.js\");\n/* harmony import */ var _drawing_BezierCurve__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawing/BezierCurve */ \"./src/drawing/BezierCurve.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar TOP = 0;\nvar RIGHT = 1;\nvar BOTTOM = 2;\nvar LEFT = 3;\nvar H = 0;\nvar V = 1;\nvar Bounds =\n/*#__PURE__*/\nfunction () {\n  function Bounds(x, y, w, h) {\n    _classCallCheck(this, Bounds);\n\n    this.left = x;\n    this.top = y;\n    this.width = w;\n    this.height = h;\n  }\n\n  _createClass(Bounds, null, [{\n    key: \"fromClientRect\",\n    value: function fromClientRect(clientRect, scrollX, scrollY) {\n      return new Bounds(clientRect.left + scrollX, clientRect.top + scrollY, clientRect.width, clientRect.height);\n    }\n  }]);\n\n  return Bounds;\n}();\nvar parseBounds = function parseBounds(node, scrollX, scrollY) {\n  return Bounds.fromClientRect(node.getBoundingClientRect(), scrollX, scrollY);\n};\nvar calculatePaddingBox = function calculatePaddingBox(bounds, borders) {\n  return new Bounds(bounds.left + borders[LEFT].borderWidth, bounds.top + borders[TOP].borderWidth, bounds.width - (borders[RIGHT].borderWidth + borders[LEFT].borderWidth), bounds.height - (borders[TOP].borderWidth + borders[BOTTOM].borderWidth));\n};\nvar calculateContentBox = function calculateContentBox(bounds, padding, borders) {\n  // TODO support percentage paddings\n  var paddingTop = padding[TOP].value;\n  var paddingRight = padding[RIGHT].value;\n  var paddingBottom = padding[BOTTOM].value;\n  var paddingLeft = padding[LEFT].value;\n  return new Bounds(bounds.left + paddingLeft + borders[LEFT].borderWidth, bounds.top + paddingTop + borders[TOP].borderWidth, bounds.width - (borders[RIGHT].borderWidth + borders[LEFT].borderWidth + paddingLeft + paddingRight), bounds.height - (borders[TOP].borderWidth + borders[BOTTOM].borderWidth + paddingTop + paddingBottom));\n};\nvar parseDocumentSize = function parseDocumentSize(document) {\n  var body = document.body;\n  var documentElement = document.documentElement;\n\n  if (!body || !documentElement) {\n    throw new Error( true ? \"Unable to get document size\" : undefined);\n  }\n\n  var width = Math.max(Math.max(body.scrollWidth, documentElement.scrollWidth), Math.max(body.offsetWidth, documentElement.offsetWidth), Math.max(body.clientWidth, documentElement.clientWidth));\n  var height = Math.max(Math.max(body.scrollHeight, documentElement.scrollHeight), Math.max(body.offsetHeight, documentElement.offsetHeight), Math.max(body.clientHeight, documentElement.clientHeight));\n  return new Bounds(0, 0, width, height);\n};\nvar parsePathForBorder = function parsePathForBorder(curves, borderSide) {\n  switch (borderSide) {\n    case TOP:\n      return createPathFromCurves(curves.topLeftOuter, curves.topLeftInner, curves.topRightOuter, curves.topRightInner);\n\n    case RIGHT:\n      return createPathFromCurves(curves.topRightOuter, curves.topRightInner, curves.bottomRightOuter, curves.bottomRightInner);\n\n    case BOTTOM:\n      return createPathFromCurves(curves.bottomRightOuter, curves.bottomRightInner, curves.bottomLeftOuter, curves.bottomLeftInner);\n\n    case LEFT:\n    default:\n      return createPathFromCurves(curves.bottomLeftOuter, curves.bottomLeftInner, curves.topLeftOuter, curves.topLeftInner);\n  }\n};\n\nvar createPathFromCurves = function createPathFromCurves(outer1, inner1, outer2, inner2) {\n  var path = [];\n\n  if (outer1 instanceof _drawing_BezierCurve__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n    path.push(outer1.subdivide(0.5, false));\n  } else {\n    path.push(outer1);\n  }\n\n  if (outer2 instanceof _drawing_BezierCurve__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n    path.push(outer2.subdivide(0.5, true));\n  } else {\n    path.push(outer2);\n  }\n\n  if (inner2 instanceof _drawing_BezierCurve__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n    path.push(inner2.subdivide(0.5, true).reverse());\n  } else {\n    path.push(inner2);\n  }\n\n  if (inner1 instanceof _drawing_BezierCurve__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n    path.push(inner1.subdivide(0.5, false).reverse());\n  } else {\n    path.push(inner1);\n  }\n\n  return path;\n};\n\nvar calculateBorderBoxPath = function calculateBorderBoxPath(curves) {\n  return [curves.topLeftOuter, curves.topRightOuter, curves.bottomRightOuter, curves.bottomLeftOuter];\n};\nvar calculatePaddingBoxPath = function calculatePaddingBoxPath(curves) {\n  return [curves.topLeftInner, curves.topRightInner, curves.bottomRightInner, curves.bottomLeftInner];\n};\nvar parseBoundCurves = function parseBoundCurves(bounds, borders, borderRadius) {\n  var tlh = borderRadius[CORNER.TOP_LEFT][H].getAbsoluteValue(bounds.width);\n  var tlv = borderRadius[CORNER.TOP_LEFT][V].getAbsoluteValue(bounds.height);\n  var trh = borderRadius[CORNER.TOP_RIGHT][H].getAbsoluteValue(bounds.width);\n  var trv = borderRadius[CORNER.TOP_RIGHT][V].getAbsoluteValue(bounds.height);\n  var brh = borderRadius[CORNER.BOTTOM_RIGHT][H].getAbsoluteValue(bounds.width);\n  var brv = borderRadius[CORNER.BOTTOM_RIGHT][V].getAbsoluteValue(bounds.height);\n  var blh = borderRadius[CORNER.BOTTOM_LEFT][H].getAbsoluteValue(bounds.width);\n  var blv = borderRadius[CORNER.BOTTOM_LEFT][V].getAbsoluteValue(bounds.height);\n  var factors = [];\n  factors.push((tlh + trh) / bounds.width);\n  factors.push((blh + brh) / bounds.width);\n  factors.push((tlv + blv) / bounds.height);\n  factors.push((trv + brv) / bounds.height);\n  var maxFactor = Math.max.apply(Math, factors);\n\n  if (maxFactor > 1) {\n    tlh /= maxFactor;\n    tlv /= maxFactor;\n    trh /= maxFactor;\n    trv /= maxFactor;\n    brh /= maxFactor;\n    brv /= maxFactor;\n    blh /= maxFactor;\n    blv /= maxFactor;\n  }\n\n  var topWidth = bounds.width - trh;\n  var rightHeight = bounds.height - brv;\n  var bottomWidth = bounds.width - brh;\n  var leftHeight = bounds.height - blv;\n  return {\n    topLeftOuter: tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left, bounds.top, tlh, tlv, CORNER.TOP_LEFT) : new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](bounds.left, bounds.top),\n    topLeftInner: tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borders[LEFT].borderWidth, bounds.top + borders[TOP].borderWidth, Math.max(0, tlh - borders[LEFT].borderWidth), Math.max(0, tlv - borders[TOP].borderWidth), CORNER.TOP_LEFT) : new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](bounds.left + borders[LEFT].borderWidth, bounds.top + borders[TOP].borderWidth),\n    topRightOuter: trh > 0 || trv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top, trh, trv, CORNER.TOP_RIGHT) : new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](bounds.left + bounds.width, bounds.top),\n    topRightInner: trh > 0 || trv > 0 ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width + borders[LEFT].borderWidth), bounds.top + borders[TOP].borderWidth, topWidth > bounds.width + borders[LEFT].borderWidth ? 0 : trh - borders[LEFT].borderWidth, trv - borders[TOP].borderWidth, CORNER.TOP_RIGHT) : new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](bounds.left + bounds.width - borders[RIGHT].borderWidth, bounds.top + borders[TOP].borderWidth),\n    bottomRightOuter: brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh, brv, CORNER.BOTTOM_RIGHT) : new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](bounds.left + bounds.width, bounds.top + bounds.height),\n    bottomRightInner: brh > 0 || brv > 0 ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - borders[LEFT].borderWidth), bounds.top + Math.min(rightHeight, bounds.height + borders[TOP].borderWidth), Math.max(0, brh - borders[RIGHT].borderWidth), brv - borders[BOTTOM].borderWidth, CORNER.BOTTOM_RIGHT) : new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](bounds.left + bounds.width - borders[RIGHT].borderWidth, bounds.top + bounds.height - borders[BOTTOM].borderWidth),\n    bottomLeftOuter: blh > 0 || blv > 0 ? getCurvePoints(bounds.left, bounds.top + leftHeight, blh, blv, CORNER.BOTTOM_LEFT) : new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](bounds.left, bounds.top + bounds.height),\n    bottomLeftInner: blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borders[LEFT].borderWidth, bounds.top + leftHeight, Math.max(0, blh - borders[LEFT].borderWidth), blv - borders[BOTTOM].borderWidth, CORNER.BOTTOM_LEFT) : new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](bounds.left + borders[LEFT].borderWidth, bounds.top + bounds.height - borders[BOTTOM].borderWidth)\n  };\n};\nvar CORNER = {\n  TOP_LEFT: 0,\n  TOP_RIGHT: 1,\n  BOTTOM_RIGHT: 2,\n  BOTTOM_LEFT: 3\n};\n\nvar getCurvePoints = function getCurvePoints(x, y, r1, r2, position) {\n  var kappa = 4 * ((Math.sqrt(2) - 1) / 3);\n  var ox = r1 * kappa; // control point offset horizontal\n\n  var oy = r2 * kappa; // control point offset vertical\n\n  var xm = x + r1; // x-middle\n\n  var ym = y + r2; // y-middle\n\n  switch (position) {\n    case CORNER.TOP_LEFT:\n      return new _drawing_BezierCurve__WEBPACK_IMPORTED_MODULE_1__[\"default\"](new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x, ym), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x, ym - oy), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](xm - ox, y), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](xm, y));\n\n    case CORNER.TOP_RIGHT:\n      return new _drawing_BezierCurve__WEBPACK_IMPORTED_MODULE_1__[\"default\"](new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x, y), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x + ox, y), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](xm, ym - oy), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](xm, ym));\n\n    case CORNER.BOTTOM_RIGHT:\n      return new _drawing_BezierCurve__WEBPACK_IMPORTED_MODULE_1__[\"default\"](new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](xm, y), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](xm, y + oy), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x + ox, ym), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x, ym));\n\n    case CORNER.BOTTOM_LEFT:\n    default:\n      return new _drawing_BezierCurve__WEBPACK_IMPORTED_MODULE_1__[\"default\"](new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](xm, ym), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](xm - ox, ym), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x, y + oy), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x, y));\n  }\n};\n\n//# sourceURL=webpack://html2canvas/./src/Bounds.js?");

/***/ }),

/***/ "./src/Clone.js":
/*!**********************!*\
  !*** ./src/Clone.js ***!
  \**********************/
/*! exports provided: DocumentCloner, cloneWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DocumentCloner\", function() { return DocumentCloner; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cloneWindow\", function() { return cloneWindow; });\n/* harmony import */ var _Bounds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bounds */ \"./src/Bounds.js\");\n/* harmony import */ var _Proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Proxy */ \"./src/Proxy.js\");\n/* harmony import */ var _ResourceLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResourceLoader */ \"./src/ResourceLoader.js\");\n/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Util */ \"./src/Util.js\");\n/* harmony import */ var _parsing_background__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parsing/background */ \"./src/parsing/background.js\");\n/* harmony import */ var _renderer_CanvasRenderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renderer/CanvasRenderer */ \"./src/renderer/CanvasRenderer.js\");\n/* harmony import */ var _PseudoNodeContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PseudoNodeContent */ \"./src/PseudoNodeContent.js\");\n\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\n\nvar IGNORE_ATTRIBUTE = 'data-html2canvas-ignore';\nvar DocumentCloner =\n/*#__PURE__*/\nfunction () {\n  function DocumentCloner(element, options, logger, copyInline, renderer) {\n    _classCallCheck(this, DocumentCloner);\n\n    this.referenceElement = element;\n    this.scrolledElements = [];\n    this.copyStyles = copyInline;\n    this.inlineImages = copyInline;\n    this.logger = logger;\n    this.options = options;\n    this.renderer = renderer;\n    this.resourceLoader = new _ResourceLoader__WEBPACK_IMPORTED_MODULE_2__[\"default\"](options, logger, window);\n    this.pseudoContentData = {\n      counters: {},\n      quoteDepth: 0\n    }; // $FlowFixMe\n\n    this.documentElement = this.cloneNode(element.ownerDocument.documentElement);\n  }\n\n  _createClass(DocumentCloner, [{\n    key: \"inlineAllImages\",\n    value: function inlineAllImages(node) {\n      var _this = this;\n\n      if (this.inlineImages && node) {\n        var style = node.style;\n        Promise.all(Object(_parsing_background__WEBPACK_IMPORTED_MODULE_4__[\"parseBackgroundImage\"])(style.backgroundImage).map(function (backgroundImage) {\n          if (backgroundImage.method === 'url') {\n            return _this.resourceLoader.inlineImage(backgroundImage.args[0]).then(function (img) {\n              return img && typeof img.src === 'string' ? \"url(\\\"\".concat(img.src, \"\\\")\") : 'none';\n            }).catch(function (e) {\n              if (true) {\n                _this.logger.log(\"Unable to load image\", e);\n              }\n            });\n          }\n\n          return Promise.resolve(\"\".concat(backgroundImage.prefix).concat(backgroundImage.method, \"(\").concat(backgroundImage.args.join(','), \")\"));\n        })).then(function (backgroundImages) {\n          if (backgroundImages.length > 1) {\n            // TODO Multiple backgrounds somehow broken in Chrome\n            style.backgroundColor = '';\n          }\n\n          style.backgroundImage = backgroundImages.join(',');\n        });\n\n        if (node instanceof HTMLImageElement) {\n          this.resourceLoader.inlineImage(node.src).then(function (img) {\n            if (img && node instanceof HTMLImageElement && node.parentNode) {\n              var parentNode = node.parentNode;\n              var clonedChild = Object(_Util__WEBPACK_IMPORTED_MODULE_3__[\"copyCSSStyles\"])(node.style, img.cloneNode(false));\n              parentNode.replaceChild(clonedChild, node);\n            }\n          }).catch(function (e) {\n            if (true) {\n              _this.logger.log(\"Unable to load image\", e);\n            }\n          });\n        }\n      }\n    }\n  }, {\n    key: \"inlineFonts\",\n    value: function inlineFonts(document) {\n      var _this2 = this;\n\n      return Promise.all(Array.from(document.styleSheets).map(function (sheet) {\n        if (sheet.href) {\n          return fetch(sheet.href).then(function (res) {\n            return res.text();\n          }).then(function (text) {\n            return createStyleSheetFontsFromText(text, sheet.href);\n          }).catch(function (e) {\n            if (true) {\n              _this2.logger.log(\"Unable to load stylesheet\", e);\n            }\n\n            return [];\n          });\n        }\n\n        return getSheetFonts(sheet, document);\n      })).then(function (fonts) {\n        return fonts.reduce(function (acc, font) {\n          return acc.concat(font);\n        }, []);\n      }).then(function (fonts) {\n        return Promise.all(fonts.map(function (font) {\n          return fetch(font.formats[0].src).then(function (response) {\n            return response.blob();\n          }).then(function (blob) {\n            return new Promise(function (resolve, reject) {\n              var reader = new FileReader();\n              reader.onerror = reject;\n\n              reader.onload = function () {\n                // $FlowFixMe\n                var result = reader.result;\n                resolve(result);\n              };\n\n              reader.readAsDataURL(blob);\n            });\n          }).then(function (dataUri) {\n            font.fontFace.setProperty('src', \"url(\\\"\".concat(dataUri, \"\\\")\"));\n            return \"@font-face {\".concat(font.fontFace.cssText, \" \");\n          });\n        }));\n      }).then(function (fontCss) {\n        var style = document.createElement('style');\n        style.textContent = fontCss.join('\\n');\n\n        _this2.documentElement.appendChild(style);\n      });\n    }\n  }, {\n    key: \"createElementClone\",\n    value: function createElementClone(node) {\n      var _this3 = this;\n\n      if (this.copyStyles && node instanceof HTMLCanvasElement) {\n        var img = node.ownerDocument.createElement('img');\n\n        try {\n          img.src = node.toDataURL();\n          return img;\n        } catch (e) {\n          if (true) {\n            this.logger.log(\"Unable to clone canvas contents, canvas is tainted\");\n          }\n        }\n      }\n\n      if (node instanceof HTMLIFrameElement) {\n        var tempIframe = node.cloneNode(false);\n        var iframeKey = generateIframeKey();\n        tempIframe.setAttribute('data-html2canvas-internal-iframe-key', iframeKey);\n\n        var _parseBounds = Object(_Bounds__WEBPACK_IMPORTED_MODULE_0__[\"parseBounds\"])(node, 0, 0),\n            width = _parseBounds.width,\n            height = _parseBounds.height;\n\n        this.resourceLoader.cache[iframeKey] = getIframeDocumentElement(node, this.options).then(function (documentElement) {\n          return _this3.renderer(documentElement, {\n            allowTaint: _this3.options.allowTaint,\n            backgroundColor: '#ffffff',\n            canvas: null,\n            imageTimeout: _this3.options.imageTimeout,\n            logging: _this3.options.logging,\n            proxy: _this3.options.proxy,\n            removeContainer: _this3.options.removeContainer,\n            scale: _this3.options.scale,\n            foreignObjectRendering: _this3.options.foreignObjectRendering,\n            useCORS: _this3.options.useCORS,\n            target: new _renderer_CanvasRenderer__WEBPACK_IMPORTED_MODULE_5__[\"default\"](),\n            width: width,\n            height: height,\n            x: 0,\n            y: 0,\n            windowWidth: documentElement.ownerDocument.defaultView.innerWidth,\n            windowHeight: documentElement.ownerDocument.defaultView.innerHeight,\n            scrollX: documentElement.ownerDocument.defaultView.pageXOffset,\n            scrollY: documentElement.ownerDocument.defaultView.pageYOffset\n          }, _this3.logger.child(iframeKey));\n        }).then(function (canvas) {\n          return new Promise(function (resolve, reject) {\n            var iframeCanvas = document.createElement('img');\n\n            iframeCanvas.onload = function () {\n              return resolve(canvas);\n            };\n\n            iframeCanvas.onerror = function (event) {\n              // Empty iframes may result in empty \"data:,\" URLs, which are invalid from the <img>'s point of view\n              // and instead of `onload` cause `onerror` and unhandled rejection warnings\n              // https://github.com/niklasvh/html2canvas/issues/1502\n              iframeCanvas.src == 'data:,' ? resolve(canvas) : reject(event);\n            };\n\n            iframeCanvas.src = canvas.toDataURL();\n\n            if (tempIframe.parentNode) {\n              tempIframe.parentNode.replaceChild(Object(_Util__WEBPACK_IMPORTED_MODULE_3__[\"copyCSSStyles\"])(node.ownerDocument.defaultView.getComputedStyle(node), iframeCanvas), tempIframe);\n            }\n          });\n        });\n        return tempIframe;\n      }\n\n      try {\n        if (node instanceof HTMLStyleElement && node.sheet && node.sheet.cssRules) {\n          var css = [].slice.call(node.sheet.cssRules, 0).reduce(function (css, rule) {\n            if (rule && rule.cssText) {\n              return css + rule.cssText;\n            }\n\n            return css;\n          }, '');\n          var style = node.cloneNode(false);\n          style.textContent = css;\n          return style;\n        }\n      } catch (e) {\n        // accessing node.sheet.cssRules throws a DOMException\n        this.logger.log('Unable to access cssRules property');\n\n        if (e.name !== 'SecurityError') {\n          this.logger.log(e);\n          throw e;\n        }\n      }\n\n      return node.cloneNode(false);\n    }\n  }, {\n    key: \"cloneNode\",\n    value: function cloneNode(node) {\n      var clone = node.nodeType === Node.TEXT_NODE ? document.createTextNode(node.nodeValue) : this.createElementClone(node);\n      var window = node.ownerDocument.defaultView;\n      var style = node instanceof window.HTMLElement ? window.getComputedStyle(node) : null;\n      var styleBefore = node instanceof window.HTMLElement ? window.getComputedStyle(node, ':before') : null;\n      var styleAfter = node instanceof window.HTMLElement ? window.getComputedStyle(node, ':after') : null;\n\n      if (this.referenceElement === node && clone instanceof window.HTMLElement) {\n        this.clonedReferenceElement = clone;\n      }\n\n      if (clone instanceof window.HTMLBodyElement) {\n        createPseudoHideStyles(clone);\n      }\n\n      var counters = Object(_PseudoNodeContent__WEBPACK_IMPORTED_MODULE_6__[\"parseCounterReset\"])(style, this.pseudoContentData);\n      var contentBefore = Object(_PseudoNodeContent__WEBPACK_IMPORTED_MODULE_6__[\"resolvePseudoContent\"])(node, styleBefore, this.pseudoContentData);\n\n      for (var child = node.firstChild; child; child = child.nextSibling) {\n        if (child.nodeType !== Node.ELEMENT_NODE || child.nodeName !== 'SCRIPT' && // $FlowFixMe\n        !child.hasAttribute(IGNORE_ATTRIBUTE) && (typeof this.options.ignoreElements !== 'function' || // $FlowFixMe\n        !this.options.ignoreElements(child))) {\n          if (!this.copyStyles || child.nodeName !== 'STYLE') {\n            clone.appendChild(this.cloneNode(child));\n          }\n        }\n      }\n\n      var contentAfter = Object(_PseudoNodeContent__WEBPACK_IMPORTED_MODULE_6__[\"resolvePseudoContent\"])(node, styleAfter, this.pseudoContentData);\n      Object(_PseudoNodeContent__WEBPACK_IMPORTED_MODULE_6__[\"popCounters\"])(counters, this.pseudoContentData);\n\n      if (node instanceof window.HTMLElement && clone instanceof window.HTMLElement) {\n        if (styleBefore) {\n          this.inlineAllImages(inlinePseudoElement(node, clone, styleBefore, contentBefore, PSEUDO_BEFORE));\n        }\n\n        if (styleAfter) {\n          this.inlineAllImages(inlinePseudoElement(node, clone, styleAfter, contentAfter, PSEUDO_AFTER));\n        }\n\n        if (style && this.copyStyles && !(node instanceof HTMLIFrameElement)) {\n          Object(_Util__WEBPACK_IMPORTED_MODULE_3__[\"copyCSSStyles\"])(style, clone);\n        }\n\n        this.inlineAllImages(clone);\n\n        if (node.scrollTop !== 0 || node.scrollLeft !== 0) {\n          this.scrolledElements.push([clone, node.scrollLeft, node.scrollTop]);\n        }\n\n        switch (node.nodeName) {\n          case 'CANVAS':\n            if (!this.copyStyles) {\n              cloneCanvasContents(node, clone);\n            }\n\n            break;\n\n          case 'TEXTAREA':\n          case 'SELECT':\n            clone.value = node.value;\n            break;\n        }\n      }\n\n      return clone;\n    }\n  }]);\n\n  return DocumentCloner;\n}();\n\nvar getSheetFonts = function getSheetFonts(sheet, document) {\n  // $FlowFixMe\n  return (sheet.cssRules ? Array.from(sheet.cssRules) : []).filter(function (rule) {\n    return rule.type === CSSRule.FONT_FACE_RULE;\n  }).map(function (rule) {\n    var src = Object(_parsing_background__WEBPACK_IMPORTED_MODULE_4__[\"parseBackgroundImage\"])(rule.style.getPropertyValue('src'));\n    var formats = [];\n\n    for (var i = 0; i < src.length; i++) {\n      if (src[i].method === 'url' && src[i + 1] && src[i + 1].method === 'format') {\n        var a = document.createElement('a');\n        a.href = src[i].args[0];\n\n        if (document.body) {\n          document.body.appendChild(a);\n        }\n\n        var font = {\n          src: a.href,\n          format: src[i + 1].args[0]\n        };\n        formats.push(font);\n      }\n    }\n\n    return {\n      // TODO select correct format for browser),\n      formats: formats.filter(function (font) {\n        return /^woff/i.test(font.format);\n      }),\n      fontFace: rule.style\n    };\n  }).filter(function (font) {\n    return font.formats.length;\n  });\n};\n\nvar createStyleSheetFontsFromText = function createStyleSheetFontsFromText(text, baseHref) {\n  var doc = document.implementation.createHTMLDocument('');\n  var base = document.createElement('base'); // $FlowFixMe\n\n  base.href = baseHref;\n  var style = document.createElement('style');\n  style.textContent = text;\n\n  if (doc.head) {\n    doc.head.appendChild(base);\n  }\n\n  if (doc.body) {\n    doc.body.appendChild(style);\n  }\n\n  return style.sheet ? getSheetFonts(style.sheet, doc) : [];\n};\n\nvar restoreOwnerScroll = function restoreOwnerScroll(ownerDocument, x, y) {\n  if (ownerDocument.defaultView && (x !== ownerDocument.defaultView.pageXOffset || y !== ownerDocument.defaultView.pageYOffset)) {\n    ownerDocument.defaultView.scrollTo(x, y);\n  }\n};\n\nvar cloneCanvasContents = function cloneCanvasContents(canvas, clonedCanvas) {\n  try {\n    if (clonedCanvas) {\n      clonedCanvas.width = canvas.width;\n      clonedCanvas.height = canvas.height;\n      var ctx = canvas.getContext('2d');\n      var clonedCtx = clonedCanvas.getContext('2d');\n\n      if (ctx) {\n        clonedCtx.putImageData(ctx.getImageData(0, 0, canvas.width, canvas.height), 0, 0);\n      } else {\n        clonedCtx.drawImage(canvas, 0, 0);\n      }\n    }\n  } catch (e) {}\n};\n\nvar inlinePseudoElement = function inlinePseudoElement(node, clone, style, contentItems, pseudoElt) {\n  if (!style || !style.content || style.content === 'none' || style.content === '-moz-alt-content' || style.display === 'none') {\n    return;\n  }\n\n  var anonymousReplacedElement = clone.ownerDocument.createElement('html2canvaspseudoelement');\n  Object(_Util__WEBPACK_IMPORTED_MODULE_3__[\"copyCSSStyles\"])(style, anonymousReplacedElement);\n\n  if (contentItems) {\n    var len = contentItems.length;\n\n    for (var i = 0; i < len; i++) {\n      var item = contentItems[i];\n\n      switch (item.type) {\n        case _PseudoNodeContent__WEBPACK_IMPORTED_MODULE_6__[\"PSEUDO_CONTENT_ITEM_TYPE\"].IMAGE:\n          var img = clone.ownerDocument.createElement('img');\n          img.src = Object(_parsing_background__WEBPACK_IMPORTED_MODULE_4__[\"parseBackgroundImage\"])(\"url(\".concat(item.value, \")\"))[0].args[0];\n          img.style.opacity = '1';\n          anonymousReplacedElement.appendChild(img);\n          break;\n\n        case _PseudoNodeContent__WEBPACK_IMPORTED_MODULE_6__[\"PSEUDO_CONTENT_ITEM_TYPE\"].TEXT:\n          anonymousReplacedElement.appendChild(clone.ownerDocument.createTextNode(item.value));\n          break;\n      }\n    }\n  }\n\n  anonymousReplacedElement.className = \"\".concat(PSEUDO_HIDE_ELEMENT_CLASS_BEFORE, \" \").concat(PSEUDO_HIDE_ELEMENT_CLASS_AFTER);\n  clone.className += pseudoElt === PSEUDO_BEFORE ? \" \".concat(PSEUDO_HIDE_ELEMENT_CLASS_BEFORE) : \" \".concat(PSEUDO_HIDE_ELEMENT_CLASS_AFTER);\n\n  if (pseudoElt === PSEUDO_BEFORE) {\n    clone.insertBefore(anonymousReplacedElement, clone.firstChild);\n  } else {\n    clone.appendChild(anonymousReplacedElement);\n  }\n\n  return anonymousReplacedElement;\n};\n\nvar URL_REGEXP = /^url\\((.+)\\)$/i;\nvar PSEUDO_BEFORE = ':before';\nvar PSEUDO_AFTER = ':after';\nvar PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = '___html2canvas___pseudoelement_before';\nvar PSEUDO_HIDE_ELEMENT_CLASS_AFTER = '___html2canvas___pseudoelement_after';\nvar PSEUDO_HIDE_ELEMENT_STYLE = \"{\\n    content: \\\"\\\" !important;\\n    display: none !important;\\n}\";\n\nvar createPseudoHideStyles = function createPseudoHideStyles(body) {\n  createStyles(body, \".\".concat(PSEUDO_HIDE_ELEMENT_CLASS_BEFORE).concat(PSEUDO_BEFORE).concat(PSEUDO_HIDE_ELEMENT_STYLE, \"\\n         .\").concat(PSEUDO_HIDE_ELEMENT_CLASS_AFTER).concat(PSEUDO_AFTER).concat(PSEUDO_HIDE_ELEMENT_STYLE));\n};\n\nvar createStyles = function createStyles(body, styles) {\n  var style = body.ownerDocument.createElement('style');\n  style.innerHTML = styles;\n  body.appendChild(style);\n};\n\nvar initNode = function initNode(_ref) {\n  var _ref2 = _slicedToArray(_ref, 3),\n      element = _ref2[0],\n      x = _ref2[1],\n      y = _ref2[2];\n\n  element.scrollLeft = x;\n  element.scrollTop = y;\n};\n\nvar generateIframeKey = function generateIframeKey() {\n  return Math.ceil(Date.now() + Math.random() * 10000000).toString(16);\n};\n\nvar DATA_URI_REGEXP = /^data:text\\/(.+);(base64)?,(.*)$/i;\n\nvar getIframeDocumentElement = function getIframeDocumentElement(node, options) {\n  try {\n    return Promise.resolve(node.contentWindow.document.documentElement);\n  } catch (e) {\n    return options.proxy ? Object(_Proxy__WEBPACK_IMPORTED_MODULE_1__[\"Proxy\"])(node.src, options).then(function (html) {\n      var match = html.match(DATA_URI_REGEXP);\n\n      if (!match) {\n        return Promise.reject();\n      }\n\n      return match[2] === 'base64' ? window.atob(decodeURIComponent(match[3])) : decodeURIComponent(match[3]);\n    }).then(function (html) {\n      return createIframeContainer(node.ownerDocument, Object(_Bounds__WEBPACK_IMPORTED_MODULE_0__[\"parseBounds\"])(node, 0, 0)).then(function (cloneIframeContainer) {\n        var cloneWindow = cloneIframeContainer.contentWindow;\n        var documentClone = cloneWindow.document;\n        documentClone.open();\n        documentClone.write(html);\n        var iframeLoad = iframeLoader(cloneIframeContainer).then(function () {\n          return documentClone.documentElement;\n        });\n        documentClone.close();\n        return iframeLoad;\n      });\n    }) : Promise.reject();\n  }\n};\n\nvar createIframeContainer = function createIframeContainer(ownerDocument, bounds) {\n  var cloneIframeContainer = ownerDocument.createElement('iframe');\n  cloneIframeContainer.className = 'html2canvas-container';\n  cloneIframeContainer.style.visibility = 'hidden';\n  cloneIframeContainer.style.position = 'fixed';\n  cloneIframeContainer.style.left = '-10000px';\n  cloneIframeContainer.style.top = '0px';\n  cloneIframeContainer.style.border = '0';\n  cloneIframeContainer.width = bounds.width.toString();\n  cloneIframeContainer.height = bounds.height.toString();\n  cloneIframeContainer.scrolling = 'no'; // ios won't scroll without it\n\n  cloneIframeContainer.setAttribute(IGNORE_ATTRIBUTE, 'true');\n\n  if (!ownerDocument.body) {\n    return Promise.reject( true ? \"Body element not found in Document that is getting rendered\" : undefined);\n  }\n\n  ownerDocument.body.appendChild(cloneIframeContainer);\n  return Promise.resolve(cloneIframeContainer);\n};\n\nvar iframeLoader = function iframeLoader(cloneIframeContainer) {\n  var cloneWindow = cloneIframeContainer.contentWindow;\n  var documentClone = cloneWindow.document;\n  return new Promise(function (resolve, reject) {\n    cloneWindow.onload = cloneIframeContainer.onload = documentClone.onreadystatechange = function () {\n      var interval = setInterval(function () {\n        if (documentClone.body.childNodes.length > 0 && documentClone.readyState === 'complete') {\n          clearInterval(interval);\n          resolve(cloneIframeContainer);\n        }\n      }, 50);\n    };\n  });\n};\n\nvar cloneWindow = function cloneWindow(ownerDocument, bounds, referenceElement, options, logger, renderer) {\n  var cloner = new DocumentCloner(referenceElement, options, logger, false, renderer);\n  var scrollX = ownerDocument.defaultView.pageXOffset;\n  var scrollY = ownerDocument.defaultView.pageYOffset;\n  return createIframeContainer(ownerDocument, bounds).then(function (cloneIframeContainer) {\n    var cloneWindow = cloneIframeContainer.contentWindow;\n    var documentClone = cloneWindow.document;\n    /* Chrome doesn't detect relative background-images assigned in inline <style> sheets when fetched through getComputedStyle\n         if window url is about:blank, we can assign the url to current by writing onto the document\n         */\n\n    var iframeLoad = iframeLoader(cloneIframeContainer).then(function () {\n      cloner.scrolledElements.forEach(initNode);\n      cloneWindow.scrollTo(bounds.left, bounds.top);\n\n      if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (cloneWindow.scrollY !== bounds.top || cloneWindow.scrollX !== bounds.left)) {\n        documentClone.documentElement.style.top = -bounds.top + 'px';\n        documentClone.documentElement.style.left = -bounds.left + 'px';\n        documentClone.documentElement.style.position = 'absolute';\n      }\n\n      var result = Promise.resolve([cloneIframeContainer, cloner.clonedReferenceElement, cloner.resourceLoader]);\n      var onclone = options.onclone;\n      return cloner.clonedReferenceElement instanceof cloneWindow.HTMLElement || cloner.clonedReferenceElement instanceof ownerDocument.defaultView.HTMLElement || cloner.clonedReferenceElement instanceof HTMLElement ? typeof onclone === 'function' ? Promise.resolve().then(function () {\n        return onclone(documentClone);\n      }).then(function () {\n        return result;\n      }) : result : Promise.reject( true ? \"Error finding the \".concat(referenceElement.nodeName, \" in the cloned document\") : undefined);\n    });\n    documentClone.open();\n    documentClone.write(\"\".concat(serializeDoctype(document.doctype), \"<html></html>\")); // Chrome scrolls the parent document for some reason after the write to the cloned window???\n\n    restoreOwnerScroll(referenceElement.ownerDocument, scrollX, scrollY);\n    documentClone.replaceChild(documentClone.adoptNode(cloner.documentElement), documentClone.documentElement);\n    documentClone.close();\n    return iframeLoad;\n  });\n};\n\nvar serializeDoctype = function serializeDoctype(doctype) {\n  var str = '';\n\n  if (doctype) {\n    str += '<!DOCTYPE ';\n\n    if (doctype.name) {\n      str += doctype.name;\n    }\n\n    if (doctype.internalSubset) {\n      str += doctype.internalSubset;\n    }\n\n    if (doctype.publicId) {\n      str += \"\\\"\".concat(doctype.publicId, \"\\\"\");\n    }\n\n    if (doctype.systemId) {\n      str += \"\\\"\".concat(doctype.systemId, \"\\\"\");\n    }\n\n    str += '>';\n  }\n\n  return str;\n};\n\n//# sourceURL=webpack://html2canvas/./src/Clone.js?");

/***/ }),

/***/ "./src/Color.js":
/*!**********************!*\
  !*** ./src/Color.js ***!
  \**********************/
/*! exports provided: default, TRANSPARENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Color; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TRANSPARENT\", function() { return TRANSPARENT; });\n // http://dev.w3.org/csswg/css-color/\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar HEX3 = /^#([a-f0-9]{3})$/i;\n\nvar hex3 = function hex3(value) {\n  var match = value.match(HEX3);\n\n  if (match) {\n    return [parseInt(match[1][0] + match[1][0], 16), parseInt(match[1][1] + match[1][1], 16), parseInt(match[1][2] + match[1][2], 16), null];\n  }\n\n  return false;\n};\n\nvar HEX6 = /^#([a-f0-9]{6})$/i;\n\nvar hex6 = function hex6(value) {\n  var match = value.match(HEX6);\n\n  if (match) {\n    return [parseInt(match[1].substring(0, 2), 16), parseInt(match[1].substring(2, 4), 16), parseInt(match[1].substring(4, 6), 16), null];\n  }\n\n  return false;\n};\n\nvar RGB = /^rgb\\(\\s*(\\d{1,3})\\s*,\\s*(\\d{1,3})\\s*,\\s*(\\d{1,3})\\s*\\)$/;\n\nvar rgb = function rgb(value) {\n  var match = value.match(RGB);\n\n  if (match) {\n    return [Number(match[1]), Number(match[2]), Number(match[3]), null];\n  }\n\n  return false;\n};\n\nvar RGBA = /^rgba\\(\\s*(\\d{1,3})\\s*,\\s*(\\d{1,3})\\s*,\\s*(\\d{1,3})\\s*,\\s*(\\d?\\.?\\d+)\\s*\\)$/;\n\nvar rgba = function rgba(value) {\n  var match = value.match(RGBA);\n\n  if (match && match.length > 4) {\n    return [Number(match[1]), Number(match[2]), Number(match[3]), Number(match[4])];\n  }\n\n  return false;\n};\n\nvar fromArray = function fromArray(array) {\n  return [Math.min(array[0], 255), Math.min(array[1], 255), Math.min(array[2], 255), array.length > 3 ? array[3] : null];\n};\n\nvar namedColor = function namedColor(name) {\n  var color = NAMED_COLORS[name.toLowerCase()];\n  return color ? color : false;\n};\n\nvar Color =\n/*#__PURE__*/\nfunction () {\n  function Color(value) {\n    _classCallCheck(this, Color);\n\n    var _ref = Array.isArray(value) ? fromArray(value) : hex3(value) || rgb(value) || rgba(value) || namedColor(value) || hex6(value) || [0, 0, 0, null],\n        _ref2 = _slicedToArray(_ref, 4),\n        r = _ref2[0],\n        g = _ref2[1],\n        b = _ref2[2],\n        a = _ref2[3];\n\n    this.r = r;\n    this.g = g;\n    this.b = b;\n    this.a = a;\n  }\n\n  _createClass(Color, [{\n    key: \"isTransparent\",\n    value: function isTransparent() {\n      return this.a === 0;\n    }\n  }, {\n    key: \"toString\",\n    value: function toString() {\n      return this.a !== null && this.a !== 1 ? \"rgba(\".concat(this.r, \",\").concat(this.g, \",\").concat(this.b, \",\").concat(this.a, \")\") : \"rgb(\".concat(this.r, \",\").concat(this.g, \",\").concat(this.b, \")\");\n    }\n  }]);\n\n  return Color;\n}();\n\n\nvar NAMED_COLORS = {\n  transparent: [0, 0, 0, 0],\n  aliceblue: [240, 248, 255, null],\n  antiquewhite: [250, 235, 215, null],\n  aqua: [0, 255, 255, null],\n  aquamarine: [127, 255, 212, null],\n  azure: [240, 255, 255, null],\n  beige: [245, 245, 220, null],\n  bisque: [255, 228, 196, null],\n  black: [0, 0, 0, null],\n  blanchedalmond: [255, 235, 205, null],\n  blue: [0, 0, 255, null],\n  blueviolet: [138, 43, 226, null],\n  brown: [165, 42, 42, null],\n  burlywood: [222, 184, 135, null],\n  cadetblue: [95, 158, 160, null],\n  chartreuse: [127, 255, 0, null],\n  chocolate: [210, 105, 30, null],\n  coral: [255, 127, 80, null],\n  cornflowerblue: [100, 149, 237, null],\n  cornsilk: [255, 248, 220, null],\n  crimson: [220, 20, 60, null],\n  cyan: [0, 255, 255, null],\n  darkblue: [0, 0, 139, null],\n  darkcyan: [0, 139, 139, null],\n  darkgoldenrod: [184, 134, 11, null],\n  darkgray: [169, 169, 169, null],\n  darkgreen: [0, 100, 0, null],\n  darkgrey: [169, 169, 169, null],\n  darkkhaki: [189, 183, 107, null],\n  darkmagenta: [139, 0, 139, null],\n  darkolivegreen: [85, 107, 47, null],\n  darkorange: [255, 140, 0, null],\n  darkorchid: [153, 50, 204, null],\n  darkred: [139, 0, 0, null],\n  darksalmon: [233, 150, 122, null],\n  darkseagreen: [143, 188, 143, null],\n  darkslateblue: [72, 61, 139, null],\n  darkslategray: [47, 79, 79, null],\n  darkslategrey: [47, 79, 79, null],\n  darkturquoise: [0, 206, 209, null],\n  darkviolet: [148, 0, 211, null],\n  deeppink: [255, 20, 147, null],\n  deepskyblue: [0, 191, 255, null],\n  dimgray: [105, 105, 105, null],\n  dimgrey: [105, 105, 105, null],\n  dodgerblue: [30, 144, 255, null],\n  firebrick: [178, 34, 34, null],\n  floralwhite: [255, 250, 240, null],\n  forestgreen: [34, 139, 34, null],\n  fuchsia: [255, 0, 255, null],\n  gainsboro: [220, 220, 220, null],\n  ghostwhite: [248, 248, 255, null],\n  gold: [255, 215, 0, null],\n  goldenrod: [218, 165, 32, null],\n  gray: [128, 128, 128, null],\n  green: [0, 128, 0, null],\n  greenyellow: [173, 255, 47, null],\n  grey: [128, 128, 128, null],\n  honeydew: [240, 255, 240, null],\n  hotpink: [255, 105, 180, null],\n  indianred: [205, 92, 92, null],\n  indigo: [75, 0, 130, null],\n  ivory: [255, 255, 240, null],\n  khaki: [240, 230, 140, null],\n  lavender: [230, 230, 250, null],\n  lavenderblush: [255, 240, 245, null],\n  lawngreen: [124, 252, 0, null],\n  lemonchiffon: [255, 250, 205, null],\n  lightblue: [173, 216, 230, null],\n  lightcoral: [240, 128, 128, null],\n  lightcyan: [224, 255, 255, null],\n  lightgoldenrodyellow: [250, 250, 210, null],\n  lightgray: [211, 211, 211, null],\n  lightgreen: [144, 238, 144, null],\n  lightgrey: [211, 211, 211, null],\n  lightpink: [255, 182, 193, null],\n  lightsalmon: [255, 160, 122, null],\n  lightseagreen: [32, 178, 170, null],\n  lightskyblue: [135, 206, 250, null],\n  lightslategray: [119, 136, 153, null],\n  lightslategrey: [119, 136, 153, null],\n  lightsteelblue: [176, 196, 222, null],\n  lightyellow: [255, 255, 224, null],\n  lime: [0, 255, 0, null],\n  limegreen: [50, 205, 50, null],\n  linen: [250, 240, 230, null],\n  magenta: [255, 0, 255, null],\n  maroon: [128, 0, 0, null],\n  mediumaquamarine: [102, 205, 170, null],\n  mediumblue: [0, 0, 205, null],\n  mediumorchid: [186, 85, 211, null],\n  mediumpurple: [147, 112, 219, null],\n  mediumseagreen: [60, 179, 113, null],\n  mediumslateblue: [123, 104, 238, null],\n  mediumspringgreen: [0, 250, 154, null],\n  mediumturquoise: [72, 209, 204, null],\n  mediumvioletred: [199, 21, 133, null],\n  midnightblue: [25, 25, 112, null],\n  mintcream: [245, 255, 250, null],\n  mistyrose: [255, 228, 225, null],\n  moccasin: [255, 228, 181, null],\n  navajowhite: [255, 222, 173, null],\n  navy: [0, 0, 128, null],\n  oldlace: [253, 245, 230, null],\n  olive: [128, 128, 0, null],\n  olivedrab: [107, 142, 35, null],\n  orange: [255, 165, 0, null],\n  orangered: [255, 69, 0, null],\n  orchid: [218, 112, 214, null],\n  palegoldenrod: [238, 232, 170, null],\n  palegreen: [152, 251, 152, null],\n  paleturquoise: [175, 238, 238, null],\n  palevioletred: [219, 112, 147, null],\n  papayawhip: [255, 239, 213, null],\n  peachpuff: [255, 218, 185, null],\n  peru: [205, 133, 63, null],\n  pink: [255, 192, 203, null],\n  plum: [221, 160, 221, null],\n  powderblue: [176, 224, 230, null],\n  purple: [128, 0, 128, null],\n  rebeccapurple: [102, 51, 153, null],\n  red: [255, 0, 0, null],\n  rosybrown: [188, 143, 143, null],\n  royalblue: [65, 105, 225, null],\n  saddlebrown: [139, 69, 19, null],\n  salmon: [250, 128, 114, null],\n  sandybrown: [244, 164, 96, null],\n  seagreen: [46, 139, 87, null],\n  seashell: [255, 245, 238, null],\n  sienna: [160, 82, 45, null],\n  silver: [192, 192, 192, null],\n  skyblue: [135, 206, 235, null],\n  slateblue: [106, 90, 205, null],\n  slategray: [112, 128, 144, null],\n  slategrey: [112, 128, 144, null],\n  snow: [255, 250, 250, null],\n  springgreen: [0, 255, 127, null],\n  steelblue: [70, 130, 180, null],\n  tan: [210, 180, 140, null],\n  teal: [0, 128, 128, null],\n  thistle: [216, 191, 216, null],\n  tomato: [255, 99, 71, null],\n  turquoise: [64, 224, 208, null],\n  violet: [238, 130, 238, null],\n  wheat: [245, 222, 179, null],\n  white: [255, 255, 255, null],\n  whitesmoke: [245, 245, 245, null],\n  yellow: [255, 255, 0, null],\n  yellowgreen: [154, 205, 50, null]\n};\nvar TRANSPARENT = new Color([0, 0, 0, 0]);\n\n//# sourceURL=webpack://html2canvas/./src/Color.js?");

/***/ }),

/***/ "./src/Feature.js":
/*!************************!*\
  !*** ./src/Feature.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _renderer_ForeignObjectRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderer/ForeignObjectRenderer */ \"./src/renderer/ForeignObjectRenderer.js\");\n\n\n\n\nvar testRangeBounds = function testRangeBounds(document) {\n  var TEST_HEIGHT = 123;\n\n  if (document.createRange) {\n    var range = document.createRange();\n\n    if (range.getBoundingClientRect) {\n      var testElement = document.createElement('boundtest');\n      testElement.style.height = \"\".concat(TEST_HEIGHT, \"px\");\n      testElement.style.display = 'block';\n      document.body.appendChild(testElement);\n      range.selectNode(testElement);\n      var rangeBounds = range.getBoundingClientRect();\n      var rangeHeight = Math.round(rangeBounds.height);\n      document.body.removeChild(testElement);\n\n      if (rangeHeight === TEST_HEIGHT) {\n        return true;\n      }\n    }\n  }\n\n  return false;\n};\n\nvar testCORS = function testCORS() {\n  return typeof new Image().crossOrigin !== 'undefined';\n};\n\nvar testResponseType = function testResponseType() {\n  return typeof new XMLHttpRequest().responseType === 'string';\n};\n\nvar testSVG = function testSVG(document) {\n  var img = new Image();\n  var canvas = document.createElement('canvas');\n  var ctx = canvas.getContext('2d');\n  img.src = \"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>\";\n\n  try {\n    ctx.drawImage(img, 0, 0);\n    canvas.toDataURL();\n  } catch (e) {\n    return false;\n  }\n\n  return true;\n};\n\nvar isGreenPixel = function isGreenPixel(data) {\n  return data[0] === 0 && data[1] === 255 && data[2] === 0 && data[3] === 255;\n};\n\nvar testForeignObject = function testForeignObject(document) {\n  var canvas = document.createElement('canvas');\n  var size = 100;\n  canvas.width = size;\n  canvas.height = size;\n  var ctx = canvas.getContext('2d');\n  ctx.fillStyle = 'rgb(0, 255, 0)';\n  ctx.fillRect(0, 0, size, size);\n  var img = new Image();\n  var greenImageSrc = canvas.toDataURL();\n  img.src = greenImageSrc;\n  var svg = Object(_renderer_ForeignObjectRenderer__WEBPACK_IMPORTED_MODULE_0__[\"createForeignObjectSVG\"])(size, size, 0, 0, img);\n  ctx.fillStyle = 'red';\n  ctx.fillRect(0, 0, size, size);\n  return Object(_renderer_ForeignObjectRenderer__WEBPACK_IMPORTED_MODULE_0__[\"loadSerializedSVG\"])(svg).then(function (img) {\n    ctx.drawImage(img, 0, 0);\n    var data = ctx.getImageData(0, 0, size, size).data;\n    ctx.fillStyle = 'red';\n    ctx.fillRect(0, 0, size, size);\n    var node = document.createElement('div');\n    node.style.backgroundImage = \"url(\".concat(greenImageSrc, \")\");\n    node.style.height = \"\".concat(size, \"px\"); // Firefox 55 does not render inline <img /> tags\n\n    return isGreenPixel(data) ? Object(_renderer_ForeignObjectRenderer__WEBPACK_IMPORTED_MODULE_0__[\"loadSerializedSVG\"])(Object(_renderer_ForeignObjectRenderer__WEBPACK_IMPORTED_MODULE_0__[\"createForeignObjectSVG\"])(size, size, 0, 0, node)) : Promise.reject(false);\n  }).then(function (img) {\n    ctx.drawImage(img, 0, 0); // Edge does not render background-images\n\n    return isGreenPixel(ctx.getImageData(0, 0, size, size).data);\n  }).catch(function (e) {\n    return false;\n  });\n};\n\nvar FEATURES = {\n  // $FlowFixMe - get/set properties not yet supported\n  get SUPPORT_RANGE_BOUNDS() {\n    'use strict';\n\n    var value = testRangeBounds(document);\n    Object.defineProperty(FEATURES, 'SUPPORT_RANGE_BOUNDS', {\n      value: value\n    });\n    return value;\n  },\n\n  // $FlowFixMe - get/set properties not yet supported\n  get SUPPORT_SVG_DRAWING() {\n    'use strict';\n\n    var value = testSVG(document);\n    Object.defineProperty(FEATURES, 'SUPPORT_SVG_DRAWING', {\n      value: value\n    });\n    return value;\n  },\n\n  // $FlowFixMe - get/set properties not yet supported\n  get SUPPORT_FOREIGNOBJECT_DRAWING() {\n    'use strict';\n\n    var value = typeof Array.from === 'function' && typeof window.fetch === 'function' ? testForeignObject(document) : Promise.resolve(false);\n    Object.defineProperty(FEATURES, 'SUPPORT_FOREIGNOBJECT_DRAWING', {\n      value: value\n    });\n    return value;\n  },\n\n  // $FlowFixMe - get/set properties not yet supported\n  get SUPPORT_CORS_IMAGES() {\n    'use strict';\n\n    var value = testCORS();\n    Object.defineProperty(FEATURES, 'SUPPORT_CORS_IMAGES', {\n      value: value\n    });\n    return value;\n  },\n\n  // $FlowFixMe - get/set properties not yet supported\n  get SUPPORT_RESPONSE_TYPE() {\n    'use strict';\n\n    var value = testResponseType();\n    Object.defineProperty(FEATURES, 'SUPPORT_RESPONSE_TYPE', {\n      value: value\n    });\n    return value;\n  },\n\n  // $FlowFixMe - get/set properties not yet supported\n  get SUPPORT_CORS_XHR() {\n    'use strict';\n\n    var value = 'withCredentials' in new XMLHttpRequest();\n    Object.defineProperty(FEATURES, 'SUPPORT_CORS_XHR', {\n      value: value\n    });\n    return value;\n  }\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (FEATURES);\n\n//# sourceURL=webpack://html2canvas/./src/Feature.js?");

/***/ }),

/***/ "./src/Font.js":
/*!*********************!*\
  !*** ./src/Font.js ***!
  \*********************/
/*! exports provided: FontMetrics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FontMetrics\", function() { return FontMetrics; });\n/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util */ \"./src/Util.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar SAMPLE_TEXT = 'Hidden Text';\n\nvar FontMetrics =\n/*#__PURE__*/\nfunction () {\n  function FontMetrics(document) {\n    _classCallCheck(this, FontMetrics);\n\n    this._data = {};\n    this._document = document;\n  }\n\n  _createClass(FontMetrics, [{\n    key: \"_parseMetrics\",\n    value: function _parseMetrics(font) {\n      var container = this._document.createElement('div');\n\n      var img = this._document.createElement('img');\n\n      var span = this._document.createElement('span');\n\n      var body = this._document.body;\n\n      if (!body) {\n        throw new Error( true ? 'No document found for font metrics' : undefined);\n      }\n\n      container.style.visibility = 'hidden';\n      container.style.fontFamily = font.fontFamily;\n      container.style.fontSize = font.fontSize;\n      container.style.margin = '0';\n      container.style.padding = '0';\n      body.appendChild(container);\n      img.src = _Util__WEBPACK_IMPORTED_MODULE_0__[\"SMALL_IMAGE\"];\n      img.width = 1;\n      img.height = 1;\n      img.style.margin = '0';\n      img.style.padding = '0';\n      img.style.verticalAlign = 'baseline';\n      span.style.fontFamily = font.fontFamily;\n      span.style.fontSize = font.fontSize;\n      span.style.margin = '0';\n      span.style.padding = '0';\n      span.appendChild(this._document.createTextNode(SAMPLE_TEXT));\n      container.appendChild(span);\n      container.appendChild(img);\n      var baseline = img.offsetTop - span.offsetTop + 2;\n      container.removeChild(span);\n      container.appendChild(this._document.createTextNode(SAMPLE_TEXT));\n      container.style.lineHeight = 'normal';\n      img.style.verticalAlign = 'super';\n      var middle = img.offsetTop - container.offsetTop + 2;\n      body.removeChild(container);\n      return {\n        baseline: baseline,\n        middle: middle\n      };\n    }\n  }, {\n    key: \"getMetrics\",\n    value: function getMetrics(font) {\n      var key = \"\".concat(font.fontFamily, \" \").concat(font.fontSize);\n\n      if (this._data[key] === undefined) {\n        this._data[key] = this._parseMetrics(font);\n      }\n\n      return this._data[key];\n    }\n  }]);\n\n  return FontMetrics;\n}();\n\n//# sourceURL=webpack://html2canvas/./src/Font.js?");

/***/ }),

/***/ "./src/Gradient.js":
/*!*************************!*\
  !*** ./src/Gradient.js ***!
  \*************************/
/*! exports provided: GRADIENT_TYPE, RADIAL_GRADIENT_SHAPE, LinearGradient, RadialGradient, parseGradient, transformWebkitRadialGradientArgs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GRADIENT_TYPE\", function() { return GRADIENT_TYPE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RADIAL_GRADIENT_SHAPE\", function() { return RADIAL_GRADIENT_SHAPE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LinearGradient\", function() { return LinearGradient; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RadialGradient\", function() { return RadialGradient; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseGradient\", function() { return parseGradient; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"transformWebkitRadialGradientArgs\", function() { return transformWebkitRadialGradientArgs; });\n/* harmony import */ var _NodeContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NodeContainer */ \"./src/NodeContainer.js\");\n/* harmony import */ var _Angle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Angle */ \"./src/Angle.js\");\n/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Color */ \"./src/Color.js\");\n/* harmony import */ var _Length__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Length */ \"./src/Length.js\");\n/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Util */ \"./src/Util.js\");\n\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\n\n\n\nvar SIDE_OR_CORNER = /^(to )?(left|top|right|bottom)( (left|top|right|bottom))?$/i;\nvar PERCENTAGE_ANGLES = /^([+-]?\\d*\\.?\\d+)% ([+-]?\\d*\\.?\\d+)%$/i;\nvar ENDS_WITH_LENGTH = /(px)|%|( 0)$/i;\nvar FROM_TO_COLORSTOP = /^(from|to|color-stop)\\((?:([\\d.]+)(%)?,\\s*)?(.+?)\\)$/i;\nvar RADIAL_SHAPE_DEFINITION = /^\\s*(circle|ellipse)?\\s*((?:([\\d.]+)(px|r?em|%)\\s*(?:([\\d.]+)(px|r?em|%))?)|closest-side|closest-corner|farthest-side|farthest-corner)?\\s*(?:at\\s*(?:(left|center|right)|([\\d.]+)(px|r?em|%))\\s+(?:(top|center|bottom)|([\\d.]+)(px|r?em|%)))?(?:\\s|$)/i;\nvar GRADIENT_TYPE = {\n  LINEAR_GRADIENT: 0,\n  RADIAL_GRADIENT: 1\n};\nvar RADIAL_GRADIENT_SHAPE = {\n  CIRCLE: 0,\n  ELLIPSE: 1\n};\nvar LENGTH_FOR_POSITION = {\n  left: new _Length__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('0%'),\n  top: new _Length__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('0%'),\n  center: new _Length__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('50%'),\n  right: new _Length__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('100%'),\n  bottom: new _Length__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('100%')\n};\nvar LinearGradient = function LinearGradient(colorStops, direction) {\n  _classCallCheck(this, LinearGradient);\n\n  this.type = GRADIENT_TYPE.LINEAR_GRADIENT;\n  this.colorStops = colorStops;\n  this.direction = direction;\n};\nvar RadialGradient = function RadialGradient(colorStops, shape, center, radius) {\n  _classCallCheck(this, RadialGradient);\n\n  this.type = GRADIENT_TYPE.RADIAL_GRADIENT;\n  this.colorStops = colorStops;\n  this.shape = shape;\n  this.center = center;\n  this.radius = radius;\n};\nvar parseGradient = function parseGradient(container, _ref, bounds) {\n  var args = _ref.args,\n      method = _ref.method,\n      prefix = _ref.prefix;\n\n  if (method === 'linear-gradient') {\n    return parseLinearGradient(args, bounds, !!prefix);\n  } else if (method === 'gradient' && args[0] === 'linear') {\n    // TODO handle correct angle\n    return parseLinearGradient(['to bottom'].concat(transformObsoleteColorStops(args.slice(3))), bounds, !!prefix);\n  } else if (method === 'radial-gradient') {\n    return parseRadialGradient(container, prefix === '-webkit-' ? transformWebkitRadialGradientArgs(args) : args, bounds);\n  } else if (method === 'gradient' && args[0] === 'radial') {\n    return parseRadialGradient(container, transformObsoleteColorStops(transformWebkitRadialGradientArgs(args.slice(1))), bounds);\n  }\n};\n\nvar parseColorStops = function parseColorStops(args, firstColorStopIndex, lineLength) {\n  var colorStops = [];\n\n  for (var i = firstColorStopIndex; i < args.length; i++) {\n    var value = args[i];\n    var HAS_LENGTH = ENDS_WITH_LENGTH.test(value);\n    var lastSpaceIndex = value.lastIndexOf(' ');\n    var color = new _Color__WEBPACK_IMPORTED_MODULE_2__[\"default\"](HAS_LENGTH ? value.substring(0, lastSpaceIndex) : value);\n    var stop = HAS_LENGTH ? new _Length__WEBPACK_IMPORTED_MODULE_3__[\"default\"](value.substring(lastSpaceIndex + 1)) : i === firstColorStopIndex ? new _Length__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('0%') : i === args.length - 1 ? new _Length__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('100%') : null;\n    colorStops.push({\n      color: color,\n      stop: stop\n    });\n  }\n\n  var absoluteValuedColorStops = colorStops.map(function (_ref2) {\n    var color = _ref2.color,\n        stop = _ref2.stop;\n    var absoluteStop = lineLength === 0 ? 0 : stop ? stop.getAbsoluteValue(lineLength) / lineLength : null;\n    return {\n      color: color,\n      // $FlowFixMe\n      stop: absoluteStop\n    };\n  });\n  var previousColorStop = absoluteValuedColorStops[0].stop;\n\n  for (var _i = 0; _i < absoluteValuedColorStops.length; _i++) {\n    if (previousColorStop !== null) {\n      var _stop = absoluteValuedColorStops[_i].stop;\n\n      if (_stop === null) {\n        var n = _i;\n\n        while (absoluteValuedColorStops[n].stop === null) {\n          n++;\n        }\n\n        var steps = n - _i + 1;\n        var nextColorStep = absoluteValuedColorStops[n].stop;\n        var stepSize = (nextColorStep - previousColorStop) / steps;\n\n        for (; _i < n; _i++) {\n          previousColorStop = absoluteValuedColorStops[_i].stop = previousColorStop + stepSize;\n        }\n      } else {\n        previousColorStop = _stop;\n      }\n    }\n  }\n\n  return absoluteValuedColorStops;\n};\n\nvar parseLinearGradient = function parseLinearGradient(args, bounds, hasPrefix) {\n  var angle = Object(_Angle__WEBPACK_IMPORTED_MODULE_1__[\"parseAngle\"])(args[0]);\n  var HAS_SIDE_OR_CORNER = SIDE_OR_CORNER.test(args[0]);\n  var HAS_DIRECTION = HAS_SIDE_OR_CORNER || angle !== null || PERCENTAGE_ANGLES.test(args[0]);\n  var direction = HAS_DIRECTION ? angle !== null ? calculateGradientDirection( // if there is a prefix, the 0° angle points due East (instead of North per W3C)\n  hasPrefix ? angle - Math.PI * 0.5 : angle, bounds) : HAS_SIDE_OR_CORNER ? parseSideOrCorner(args[0], bounds) : parsePercentageAngle(args[0], bounds) : calculateGradientDirection(Math.PI, bounds);\n  var firstColorStopIndex = HAS_DIRECTION ? 1 : 0; // TODO: Fix some inaccuracy with color stops with px values\n\n  var lineLength = Math.min(Object(_Util__WEBPACK_IMPORTED_MODULE_4__[\"distance\"])(Math.abs(direction.x0) + Math.abs(direction.x1), Math.abs(direction.y0) + Math.abs(direction.y1)), bounds.width * 2, bounds.height * 2);\n  return new LinearGradient(parseColorStops(args, firstColorStopIndex, lineLength), direction);\n};\n\nvar parseRadialGradient = function parseRadialGradient(container, args, bounds) {\n  var m = args[0].match(RADIAL_SHAPE_DEFINITION);\n  var shape = m && (m[1] === 'circle' || // explicit shape specification\n  m[3] !== undefined && m[5] === undefined) // only one radius coordinate\n  ? RADIAL_GRADIENT_SHAPE.CIRCLE : RADIAL_GRADIENT_SHAPE.ELLIPSE;\n  var radius = {};\n  var center = {};\n\n  if (m) {\n    // Radius\n    if (m[3] !== undefined) {\n      radius.x = Object(_Length__WEBPACK_IMPORTED_MODULE_3__[\"calculateLengthFromValueWithUnit\"])(container, m[3], m[4]).getAbsoluteValue(bounds.width);\n    }\n\n    if (m[5] !== undefined) {\n      radius.y = Object(_Length__WEBPACK_IMPORTED_MODULE_3__[\"calculateLengthFromValueWithUnit\"])(container, m[5], m[6]).getAbsoluteValue(bounds.height);\n    } // Position\n\n\n    if (m[7]) {\n      center.x = LENGTH_FOR_POSITION[m[7].toLowerCase()];\n    } else if (m[8] !== undefined) {\n      center.x = Object(_Length__WEBPACK_IMPORTED_MODULE_3__[\"calculateLengthFromValueWithUnit\"])(container, m[8], m[9]);\n    }\n\n    if (m[10]) {\n      center.y = LENGTH_FOR_POSITION[m[10].toLowerCase()];\n    } else if (m[11] !== undefined) {\n      center.y = Object(_Length__WEBPACK_IMPORTED_MODULE_3__[\"calculateLengthFromValueWithUnit\"])(container, m[11], m[12]);\n    }\n  }\n\n  var gradientCenter = {\n    x: center.x === undefined ? bounds.width / 2 : center.x.getAbsoluteValue(bounds.width),\n    y: center.y === undefined ? bounds.height / 2 : center.y.getAbsoluteValue(bounds.height)\n  };\n  var gradientRadius = calculateRadius(m && m[2] || 'farthest-corner', shape, gradientCenter, radius, bounds);\n  return new RadialGradient(parseColorStops(args, m ? 1 : 0, Math.min(gradientRadius.x, gradientRadius.y)), shape, gradientCenter, gradientRadius);\n};\n\nvar calculateGradientDirection = function calculateGradientDirection(radian, bounds) {\n  var width = bounds.width;\n  var height = bounds.height;\n  var HALF_WIDTH = width * 0.5;\n  var HALF_HEIGHT = height * 0.5;\n  var lineLength = Math.abs(width * Math.sin(radian)) + Math.abs(height * Math.cos(radian));\n  var HALF_LINE_LENGTH = lineLength / 2;\n  var x0 = HALF_WIDTH + Math.sin(radian) * HALF_LINE_LENGTH;\n  var y0 = HALF_HEIGHT - Math.cos(radian) * HALF_LINE_LENGTH;\n  var x1 = width - x0;\n  var y1 = height - y0;\n  return {\n    x0: x0,\n    x1: x1,\n    y0: y0,\n    y1: y1\n  };\n};\n\nvar parseTopRight = function parseTopRight(bounds) {\n  return Math.acos(bounds.width / 2 / (Object(_Util__WEBPACK_IMPORTED_MODULE_4__[\"distance\"])(bounds.width, bounds.height) / 2));\n};\n\nvar parseSideOrCorner = function parseSideOrCorner(side, bounds) {\n  switch (side) {\n    case 'bottom':\n    case 'to top':\n      return calculateGradientDirection(0, bounds);\n\n    case 'left':\n    case 'to right':\n      return calculateGradientDirection(Math.PI / 2, bounds);\n\n    case 'right':\n    case 'to left':\n      return calculateGradientDirection(3 * Math.PI / 2, bounds);\n\n    case 'top right':\n    case 'right top':\n    case 'to bottom left':\n    case 'to left bottom':\n      return calculateGradientDirection(Math.PI + parseTopRight(bounds), bounds);\n\n    case 'top left':\n    case 'left top':\n    case 'to bottom right':\n    case 'to right bottom':\n      return calculateGradientDirection(Math.PI - parseTopRight(bounds), bounds);\n\n    case 'bottom left':\n    case 'left bottom':\n    case 'to top right':\n    case 'to right top':\n      return calculateGradientDirection(parseTopRight(bounds), bounds);\n\n    case 'bottom right':\n    case 'right bottom':\n    case 'to top left':\n    case 'to left top':\n      return calculateGradientDirection(2 * Math.PI - parseTopRight(bounds), bounds);\n\n    case 'top':\n    case 'to bottom':\n    default:\n      return calculateGradientDirection(Math.PI, bounds);\n  }\n};\n\nvar parsePercentageAngle = function parsePercentageAngle(angle, bounds) {\n  var _angle$split$map = angle.split(' ').map(parseFloat),\n      _angle$split$map2 = _slicedToArray(_angle$split$map, 2),\n      left = _angle$split$map2[0],\n      top = _angle$split$map2[1];\n\n  var ratio = left / 100 * bounds.width / (top / 100 * bounds.height);\n  return calculateGradientDirection(Math.atan(isNaN(ratio) ? 1 : ratio) + Math.PI / 2, bounds);\n};\n\nvar findCorner = function findCorner(bounds, x, y, closest) {\n  var corners = [{\n    x: 0,\n    y: 0\n  }, {\n    x: 0,\n    y: bounds.height\n  }, {\n    x: bounds.width,\n    y: 0\n  }, {\n    x: bounds.width,\n    y: bounds.height\n  }]; // $FlowFixMe\n\n  return corners.reduce(function (stat, corner) {\n    var d = Object(_Util__WEBPACK_IMPORTED_MODULE_4__[\"distance\"])(x - corner.x, y - corner.y);\n\n    if (closest ? d < stat.optimumDistance : d > stat.optimumDistance) {\n      return {\n        optimumCorner: corner,\n        optimumDistance: d\n      };\n    }\n\n    return stat;\n  }, {\n    optimumDistance: closest ? Infinity : -Infinity,\n    optimumCorner: null\n  }).optimumCorner;\n};\n\nvar calculateRadius = function calculateRadius(extent, shape, center, radius, bounds) {\n  var x = center.x;\n  var y = center.y;\n  var rx = 0;\n  var ry = 0;\n\n  switch (extent) {\n    case 'closest-side':\n      // The ending shape is sized so that that it exactly meets the side of the gradient box closest to the gradient’s center.\n      // If the shape is an ellipse, it exactly meets the closest side in each dimension.\n      if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {\n        rx = ry = Math.min(Math.abs(x), Math.abs(x - bounds.width), Math.abs(y), Math.abs(y - bounds.height));\n      } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {\n        rx = Math.min(Math.abs(x), Math.abs(x - bounds.width));\n        ry = Math.min(Math.abs(y), Math.abs(y - bounds.height));\n      }\n\n      break;\n\n    case 'closest-corner':\n      // The ending shape is sized so that that it passes through the corner of the gradient box closest to the gradient’s center.\n      // If the shape is an ellipse, the ending shape is given the same aspect-ratio it would have if closest-side were specified.\n      if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {\n        rx = ry = Math.min(Object(_Util__WEBPACK_IMPORTED_MODULE_4__[\"distance\"])(x, y), Object(_Util__WEBPACK_IMPORTED_MODULE_4__[\"distance\"])(x, y - bounds.height), Object(_Util__WEBPACK_IMPORTED_MODULE_4__[\"distance\"])(x - bounds.width, y), Object(_Util__WEBPACK_IMPORTED_MODULE_4__[\"distance\"])(x - bounds.width, y - bounds.height));\n      } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {\n        // Compute the ratio ry/rx (which is to be the same as for \"closest-side\")\n        var c = Math.min(Math.abs(y), Math.abs(y - bounds.height)) / Math.min(Math.abs(x), Math.abs(x - bounds.width));\n        var corner = findCorner(bounds, x, y, true);\n        rx = Object(_Util__WEBPACK_IMPORTED_MODULE_4__[\"distance\"])(corner.x - x, (corner.y - y) / c);\n        ry = c * rx;\n      }\n\n      break;\n\n    case 'farthest-side':\n      // Same as closest-side, except the ending shape is sized based on the farthest side(s)\n      if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {\n        rx = ry = Math.max(Math.abs(x), Math.abs(x - bounds.width), Math.abs(y), Math.abs(y - bounds.height));\n      } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {\n        rx = Math.max(Math.abs(x), Math.abs(x - bounds.width));\n        ry = Math.max(Math.abs(y), Math.abs(y - bounds.height));\n      }\n\n      break;\n\n    case 'farthest-corner':\n      // Same as closest-corner, except the ending shape is sized based on the farthest corner.\n      // If the shape is an ellipse, the ending shape is given the same aspect ratio it would have if farthest-side were specified.\n      if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {\n        rx = ry = Math.max(Object(_Util__WEBPACK_IMPORTED_MODULE_4__[\"distance\"])(x, y), Object(_Util__WEBPACK_IMPORTED_MODULE_4__[\"distance\"])(x, y - bounds.height), Object(_Util__WEBPACK_IMPORTED_MODULE_4__[\"distance\"])(x - bounds.width, y), Object(_Util__WEBPACK_IMPORTED_MODULE_4__[\"distance\"])(x - bounds.width, y - bounds.height));\n      } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {\n        // Compute the ratio ry/rx (which is to be the same as for \"farthest-side\")\n        var _c = Math.max(Math.abs(y), Math.abs(y - bounds.height)) / Math.max(Math.abs(x), Math.abs(x - bounds.width));\n\n        var _corner = findCorner(bounds, x, y, false);\n\n        rx = Object(_Util__WEBPACK_IMPORTED_MODULE_4__[\"distance\"])(_corner.x - x, (_corner.y - y) / _c);\n        ry = _c * rx;\n      }\n\n      break;\n\n    default:\n      // pixel or percentage values\n      rx = radius.x || 0;\n      ry = radius.y !== undefined ? radius.y : rx;\n      break;\n  }\n\n  return {\n    x: rx,\n    y: ry\n  };\n};\n\nvar transformWebkitRadialGradientArgs = function transformWebkitRadialGradientArgs(args) {\n  var shape = '';\n  var radius = '';\n  var extent = '';\n  var position = '';\n  var idx = 0;\n  var POSITION = /^(left|center|right|\\d+(?:px|r?em|%)?)(?:\\s+(top|center|bottom|\\d+(?:px|r?em|%)?))?$/i;\n  var SHAPE_AND_EXTENT = /^(circle|ellipse)?\\s*(closest-side|closest-corner|farthest-side|farthest-corner|contain|cover)?$/i;\n  var RADIUS = /^\\d+(px|r?em|%)?(?:\\s+\\d+(px|r?em|%)?)?$/i;\n  var matchStartPosition = args[idx].match(POSITION);\n\n  if (matchStartPosition) {\n    idx++;\n  }\n\n  var matchShapeExtent = args[idx].match(SHAPE_AND_EXTENT);\n\n  if (matchShapeExtent) {\n    shape = matchShapeExtent[1] || '';\n    extent = matchShapeExtent[2] || '';\n\n    if (extent === 'contain') {\n      extent = 'closest-side';\n    } else if (extent === 'cover') {\n      extent = 'farthest-corner';\n    }\n\n    idx++;\n  }\n\n  var matchStartRadius = args[idx].match(RADIUS);\n\n  if (matchStartRadius) {\n    idx++;\n  }\n\n  var matchEndPosition = args[idx].match(POSITION);\n\n  if (matchEndPosition) {\n    idx++;\n  }\n\n  var matchEndRadius = args[idx].match(RADIUS);\n\n  if (matchEndRadius) {\n    idx++;\n  }\n\n  var matchPosition = matchEndPosition || matchStartPosition;\n\n  if (matchPosition && matchPosition[1]) {\n    position = matchPosition[1] + (/^\\d+$/.test(matchPosition[1]) ? 'px' : '');\n\n    if (matchPosition[2]) {\n      position += ' ' + matchPosition[2] + (/^\\d+$/.test(matchPosition[2]) ? 'px' : '');\n    }\n  }\n\n  var matchRadius = matchEndRadius || matchStartRadius;\n\n  if (matchRadius) {\n    radius = matchRadius[0];\n\n    if (!matchRadius[1]) {\n      radius += 'px';\n    }\n  }\n\n  if (position && !shape && !radius && !extent) {\n    radius = position;\n    position = '';\n  }\n\n  if (position) {\n    position = \"at \".concat(position);\n  }\n\n  return [[shape, extent, radius, position].filter(function (s) {\n    return !!s;\n  }).join(' ')].concat(args.slice(idx));\n};\n\nvar transformObsoleteColorStops = function transformObsoleteColorStops(args) {\n  return args.map(function (color) {\n    return color.match(FROM_TO_COLORSTOP);\n  }) // $FlowFixMe\n  .map(function (v, index) {\n    if (!v) {\n      return args[index];\n    }\n\n    switch (v[1]) {\n      case 'from':\n        return \"\".concat(v[4], \" 0%\");\n\n      case 'to':\n        return \"\".concat(v[4], \" 100%\");\n\n      case 'color-stop':\n        if (v[3] === '%') {\n          return \"\".concat(v[4], \" \").concat(v[2]);\n        }\n\n        return \"\".concat(v[4], \" \").concat(parseFloat(v[2]) * 100, \"%\");\n    }\n  });\n};\n\n//# sourceURL=webpack://html2canvas/./src/Gradient.js?");

/***/ }),

/***/ "./src/Input.js":
/*!**********************!*\
  !*** ./src/Input.js ***!
  \**********************/
/*! exports provided: INPUT_COLOR, INPUT_BORDERS, INPUT_BACKGROUND, getInputBorderRadius, inlineInputElement, inlineTextAreaElement, inlineSelectElement, reformatInputBounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INPUT_COLOR\", function() { return INPUT_COLOR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INPUT_BORDERS\", function() { return INPUT_BORDERS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INPUT_BACKGROUND\", function() { return INPUT_BACKGROUND; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getInputBorderRadius\", function() { return getInputBorderRadius; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inlineInputElement\", function() { return inlineInputElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inlineTextAreaElement\", function() { return inlineTextAreaElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inlineSelectElement\", function() { return inlineSelectElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reformatInputBounds\", function() { return reformatInputBounds; });\n/* harmony import */ var _TextContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextContainer */ \"./src/TextContainer.js\");\n/* harmony import */ var _parsing_background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsing/background */ \"./src/parsing/background.js\");\n/* harmony import */ var _parsing_border__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parsing/border */ \"./src/parsing/border.js\");\n/* harmony import */ var _drawing_Circle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drawing/Circle */ \"./src/drawing/Circle.js\");\n/* harmony import */ var _drawing_Vector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drawing/Vector */ \"./src/drawing/Vector.js\");\n/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Color */ \"./src/Color.js\");\n/* harmony import */ var _Length__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Length */ \"./src/Length.js\");\n/* harmony import */ var _Bounds__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Bounds */ \"./src/Bounds.js\");\n/* harmony import */ var _TextBounds__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TextBounds */ \"./src/TextBounds.js\");\n/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Util */ \"./src/Util.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nvar INPUT_COLOR = new _Color__WEBPACK_IMPORTED_MODULE_5__[\"default\"]([42, 42, 42]);\nvar INPUT_BORDER_COLOR = new _Color__WEBPACK_IMPORTED_MODULE_5__[\"default\"]([165, 165, 165]);\nvar INPUT_BACKGROUND_COLOR = new _Color__WEBPACK_IMPORTED_MODULE_5__[\"default\"]([222, 222, 222]);\nvar INPUT_BORDER = {\n  borderWidth: 1,\n  borderColor: INPUT_BORDER_COLOR,\n  borderStyle: _parsing_border__WEBPACK_IMPORTED_MODULE_2__[\"BORDER_STYLE\"].SOLID\n};\nvar INPUT_BORDERS = [INPUT_BORDER, INPUT_BORDER, INPUT_BORDER, INPUT_BORDER];\nvar INPUT_BACKGROUND = {\n  backgroundColor: INPUT_BACKGROUND_COLOR,\n  backgroundImage: [],\n  backgroundClip: _parsing_background__WEBPACK_IMPORTED_MODULE_1__[\"BACKGROUND_CLIP\"].PADDING_BOX,\n  backgroundOrigin: _parsing_background__WEBPACK_IMPORTED_MODULE_1__[\"BACKGROUND_ORIGIN\"].PADDING_BOX\n};\nvar RADIO_BORDER_RADIUS = new _Length__WEBPACK_IMPORTED_MODULE_6__[\"default\"]('50%');\nvar RADIO_BORDER_RADIUS_TUPLE = [RADIO_BORDER_RADIUS, RADIO_BORDER_RADIUS];\nvar INPUT_RADIO_BORDER_RADIUS = [RADIO_BORDER_RADIUS_TUPLE, RADIO_BORDER_RADIUS_TUPLE, RADIO_BORDER_RADIUS_TUPLE, RADIO_BORDER_RADIUS_TUPLE];\nvar CHECKBOX_BORDER_RADIUS = new _Length__WEBPACK_IMPORTED_MODULE_6__[\"default\"]('3px');\nvar CHECKBOX_BORDER_RADIUS_TUPLE = [CHECKBOX_BORDER_RADIUS, CHECKBOX_BORDER_RADIUS];\nvar INPUT_CHECKBOX_BORDER_RADIUS = [CHECKBOX_BORDER_RADIUS_TUPLE, CHECKBOX_BORDER_RADIUS_TUPLE, CHECKBOX_BORDER_RADIUS_TUPLE, CHECKBOX_BORDER_RADIUS_TUPLE];\nvar getInputBorderRadius = function getInputBorderRadius(node) {\n  return node.type === 'radio' ? INPUT_RADIO_BORDER_RADIUS : INPUT_CHECKBOX_BORDER_RADIUS;\n};\nvar inlineInputElement = function inlineInputElement(node, container) {\n  if (node.type === 'radio' || node.type === 'checkbox') {\n    if (node.checked) {\n      var size = Math.min(container.bounds.width, container.bounds.height);\n      container.childNodes.push(node.type === 'checkbox' ? [new _drawing_Vector__WEBPACK_IMPORTED_MODULE_4__[\"default\"](container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_4__[\"default\"](container.bounds.left + size * 0.16, container.bounds.top + size * 0.5549), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_4__[\"default\"](container.bounds.left + size * 0.27347, container.bounds.top + size * 0.44071), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_4__[\"default\"](container.bounds.left + size * 0.39694, container.bounds.top + size * 0.5649), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_4__[\"default\"](container.bounds.left + size * 0.72983, container.bounds.top + size * 0.23), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_4__[\"default\"](container.bounds.left + size * 0.84, container.bounds.top + size * 0.34085), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_4__[\"default\"](container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79)] : new _drawing_Circle__WEBPACK_IMPORTED_MODULE_3__[\"default\"](container.bounds.left + size / 4, container.bounds.top + size / 4, size / 4));\n    }\n  } else {\n    inlineFormElement(getInputValue(node), node, container, false);\n  }\n};\nvar inlineTextAreaElement = function inlineTextAreaElement(node, container) {\n  inlineFormElement(node.value, node, container, true);\n};\nvar inlineSelectElement = function inlineSelectElement(node, container) {\n  var option = node.options[node.selectedIndex || 0];\n  inlineFormElement(option ? option.text || '' : '', node, container, false);\n};\nvar reformatInputBounds = function reformatInputBounds(bounds) {\n  if (bounds.width > bounds.height) {\n    bounds.left += (bounds.width - bounds.height) / 2;\n    bounds.width = bounds.height;\n  } else if (bounds.width < bounds.height) {\n    bounds.top += (bounds.height - bounds.width) / 2;\n    bounds.height = bounds.width;\n  }\n\n  return bounds;\n};\n\nvar inlineFormElement = function inlineFormElement(value, node, container, allowLinebreak) {\n  var body = node.ownerDocument.body;\n\n  if (value.length > 0 && body) {\n    var wrapper = node.ownerDocument.createElement('html2canvaswrapper');\n    Object(_Util__WEBPACK_IMPORTED_MODULE_9__[\"copyCSSStyles\"])(node.ownerDocument.defaultView.getComputedStyle(node, null), wrapper);\n    wrapper.style.position = 'absolute';\n    wrapper.style.left = \"\".concat(container.bounds.left, \"px\");\n    wrapper.style.top = \"\".concat(container.bounds.top, \"px\");\n\n    if (!allowLinebreak) {\n      wrapper.style.whiteSpace = 'nowrap';\n    }\n\n    var text = node.ownerDocument.createTextNode(value);\n    wrapper.appendChild(text);\n    body.appendChild(wrapper);\n    container.childNodes.push(_TextContainer__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fromTextNode(text, container));\n    body.removeChild(wrapper);\n  }\n};\n\nvar getInputValue = function getInputValue(node) {\n  var value = node.type === 'password' ? new Array(node.value.length + 1).join(\"\\u2022\") : node.value;\n  return value.length === 0 ? node.placeholder || '' : value;\n};\n\n//# sourceURL=webpack://html2canvas/./src/Input.js?");

/***/ }),

/***/ "./src/Length.js":
/*!***********************!*\
  !*** ./src/Length.js ***!
  \***********************/
/*! exports provided: LENGTH_TYPE, default, calculateLengthFromValueWithUnit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LENGTH_TYPE\", function() { return LENGTH_TYPE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Length; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateLengthFromValueWithUnit\", function() { return calculateLengthFromValueWithUnit; });\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar LENGTH_WITH_UNIT = /([\\d.]+)(px|r?em|%)/i;\nvar LENGTH_TYPE = {\n  PX: 0,\n  PERCENTAGE: 1\n};\n\nvar Length =\n/*#__PURE__*/\nfunction () {\n  function Length(value) {\n    _classCallCheck(this, Length);\n\n    this.type = value.substr(value.length - 1) === '%' ? LENGTH_TYPE.PERCENTAGE : LENGTH_TYPE.PX;\n    var parsedValue = parseFloat(value);\n\n    if ( true && isNaN(parsedValue)) {\n      console.error(\"Invalid value given for Length: \\\"\".concat(value, \"\\\"\"));\n    }\n\n    this.value = isNaN(parsedValue) ? 0 : parsedValue;\n  }\n\n  _createClass(Length, [{\n    key: \"isPercentage\",\n    value: function isPercentage() {\n      return this.type === LENGTH_TYPE.PERCENTAGE;\n    }\n  }, {\n    key: \"getAbsoluteValue\",\n    value: function getAbsoluteValue(parentLength) {\n      return this.isPercentage() ? parentLength * (this.value / 100) : this.value;\n    }\n  }], [{\n    key: \"create\",\n    value: function create(v) {\n      return new Length(v);\n    }\n  }]);\n\n  return Length;\n}();\n\n\n\nvar getRootFontSize = function getRootFontSize(container) {\n  var parent = container.parent;\n  return parent ? getRootFontSize(parent) : parseFloat(container.style.font.fontSize);\n};\n\nvar calculateLengthFromValueWithUnit = function calculateLengthFromValueWithUnit(container, value, unit) {\n  switch (unit) {\n    case 'px':\n    case '%':\n      return new Length(value + unit);\n\n    case 'em':\n    case 'rem':\n      var length = new Length(value);\n      length.value *= unit === 'em' ? parseFloat(container.style.font.fontSize) : getRootFontSize(container);\n      return length;\n\n    default:\n      // TODO: handle correctly if unknown unit is used\n      return new Length('0');\n  }\n};\n\n//# sourceURL=webpack://html2canvas/./src/Length.js?");

/***/ }),

/***/ "./src/ListItem.js":
/*!*************************!*\
  !*** ./src/ListItem.js ***!
  \*************************/
/*! exports provided: getListOwner, inlineListItemElement, createCounterText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getListOwner\", function() { return getListOwner; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inlineListItemElement\", function() { return inlineListItemElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createCounterText\", function() { return createCounterText; });\n/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util */ \"./src/Util.js\");\n/* harmony import */ var _NodeContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NodeContainer */ \"./src/NodeContainer.js\");\n/* harmony import */ var _TextContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextContainer */ \"./src/TextContainer.js\");\n/* harmony import */ var _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parsing/listStyle */ \"./src/parsing/listStyle.js\");\n/* harmony import */ var _Unicode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Unicode */ \"./src/Unicode.js\");\n\n\n\n\n\n\n // Margin between the enumeration and the list item content\n\nvar MARGIN_RIGHT = 7;\nvar ancestorTypes = ['OL', 'UL', 'MENU'];\nvar getListOwner = function getListOwner(container) {\n  var parent = container.parent;\n\n  if (!parent) {\n    return null;\n  }\n\n  do {\n    var isAncestor = ancestorTypes.indexOf(parent.tagName) !== -1;\n\n    if (isAncestor) {\n      return parent;\n    }\n\n    parent = parent.parent;\n  } while (parent);\n\n  return container.parent;\n};\nvar inlineListItemElement = function inlineListItemElement(node, container, resourceLoader) {\n  var listStyle = container.style.listStyle;\n\n  if (!listStyle) {\n    return;\n  }\n\n  var style = node.ownerDocument.defaultView.getComputedStyle(node, null);\n  var wrapper = node.ownerDocument.createElement('html2canvaswrapper');\n  Object(_Util__WEBPACK_IMPORTED_MODULE_0__[\"copyCSSStyles\"])(style, wrapper);\n  wrapper.style.position = 'absolute';\n  wrapper.style.bottom = 'auto';\n  wrapper.style.display = 'block';\n  wrapper.style.letterSpacing = 'normal';\n\n  switch (listStyle.listStylePosition) {\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_POSITION\"].OUTSIDE:\n      wrapper.style.left = 'auto';\n      wrapper.style.right = \"\".concat(node.ownerDocument.defaultView.innerWidth - container.bounds.left - container.style.margin[1].getAbsoluteValue(container.bounds.width) + MARGIN_RIGHT, \"px\");\n      wrapper.style.textAlign = 'right';\n      break;\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_POSITION\"].INSIDE:\n      wrapper.style.left = \"\".concat(container.bounds.left - container.style.margin[3].getAbsoluteValue(container.bounds.width), \"px\");\n      wrapper.style.right = 'auto';\n      wrapper.style.textAlign = 'left';\n      break;\n  }\n\n  var text;\n  var MARGIN_TOP = container.style.margin[0].getAbsoluteValue(container.bounds.width);\n  var styleImage = listStyle.listStyleImage;\n\n  if (styleImage) {\n    if (styleImage.method === 'url') {\n      var image = node.ownerDocument.createElement('img');\n      image.src = styleImage.args[0];\n      wrapper.style.top = \"\".concat(container.bounds.top - MARGIN_TOP, \"px\");\n      wrapper.style.width = 'auto';\n      wrapper.style.height = 'auto';\n      wrapper.appendChild(image);\n    } else {\n      var size = parseFloat(container.style.font.fontSize) * 0.5;\n      wrapper.style.top = \"\".concat(container.bounds.top - MARGIN_TOP + container.bounds.height - 1.5 * size, \"px\");\n      wrapper.style.width = \"\".concat(size, \"px\");\n      wrapper.style.height = \"\".concat(size, \"px\");\n      wrapper.style.backgroundImage = style.listStyleImage;\n    }\n  } else if (typeof container.listIndex === 'number') {\n    text = node.ownerDocument.createTextNode(createCounterText(container.listIndex, listStyle.listStyleType, true));\n    wrapper.appendChild(text);\n    wrapper.style.top = \"\".concat(container.bounds.top - MARGIN_TOP, \"px\");\n  } // $FlowFixMe\n\n\n  var body = node.ownerDocument.body;\n  body.appendChild(wrapper);\n\n  if (text) {\n    container.childNodes.push(_TextContainer__WEBPACK_IMPORTED_MODULE_2__[\"default\"].fromTextNode(text, container));\n    body.removeChild(wrapper);\n  } else {\n    // $FlowFixMe\n    container.childNodes.push(new _NodeContainer__WEBPACK_IMPORTED_MODULE_1__[\"default\"](wrapper, container, resourceLoader, 0));\n  }\n};\nvar ROMAN_UPPER = {\n  integers: [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],\n  values: ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']\n};\nvar ARMENIAN = {\n  integers: [9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],\n  values: ['Ք', 'Փ', 'Ւ', 'Ց', 'Ր', 'Տ', 'Վ', 'Ս', 'Ռ', 'Ջ', 'Պ', 'Չ', 'Ո', 'Շ', 'Ն', 'Յ', 'Մ', 'Ճ', 'Ղ', 'Ձ', 'Հ', 'Կ', 'Ծ', 'Խ', 'Լ', 'Ի', 'Ժ', 'Թ', 'Ը', 'Է', 'Զ', 'Ե', 'Դ', 'Գ', 'Բ', 'Ա']\n};\nvar HEBREW = {\n  integers: [10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],\n  values: ['י׳', 'ט׳', 'ח׳', 'ז׳', 'ו׳', 'ה׳', 'ד׳', 'ג׳', 'ב׳', 'א׳', 'ת', 'ש', 'ר', 'ק', 'צ', 'פ', 'ע', 'ס', 'נ', 'מ', 'ל', 'כ', 'יט', 'יח', 'יז', 'טז', 'טו', 'י', 'ט', 'ח', 'ז', 'ו', 'ה', 'ד', 'ג', 'ב', 'א']\n};\nvar GEORGIAN = {\n  integers: [10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],\n  values: ['ჵ', 'ჰ', 'ჯ', 'ჴ', 'ხ', 'ჭ', 'წ', 'ძ', 'ც', 'ჩ', 'შ', 'ყ', 'ღ', 'ქ', 'ფ', 'ჳ', 'ტ', 'ს', 'რ', 'ჟ', 'პ', 'ო', 'ჲ', 'ნ', 'მ', 'ლ', 'კ', 'ი', 'თ', 'ჱ', 'ზ', 'ვ', 'ე', 'დ', 'გ', 'ბ', 'ა']\n};\n\nvar createAdditiveCounter = function createAdditiveCounter(value, min, max, symbols, fallback, suffix) {\n  if (value < min || value > max) {\n    return createCounterText(value, fallback, suffix.length > 0);\n  }\n\n  return symbols.integers.reduce(function (string, integer, index) {\n    while (value >= integer) {\n      value -= integer;\n      string += symbols.values[index];\n    }\n\n    return string;\n  }, '') + suffix;\n};\n\nvar createCounterStyleWithSymbolResolver = function createCounterStyleWithSymbolResolver(value, codePointRangeLength, isNumeric, resolver) {\n  var string = '';\n\n  do {\n    if (!isNumeric) {\n      value--;\n    }\n\n    string = resolver(value) + string;\n    value /= codePointRangeLength;\n  } while (value * codePointRangeLength >= codePointRangeLength);\n\n  return string;\n};\n\nvar createCounterStyleFromRange = function createCounterStyleFromRange(value, codePointRangeStart, codePointRangeEnd, isNumeric, suffix) {\n  var codePointRangeLength = codePointRangeEnd - codePointRangeStart + 1;\n  return (value < 0 ? '-' : '') + (createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, isNumeric, function (codePoint) {\n    return Object(_Unicode__WEBPACK_IMPORTED_MODULE_4__[\"fromCodePoint\"])(Math.floor(codePoint % codePointRangeLength) + codePointRangeStart);\n  }) + suffix);\n};\n\nvar createCounterStyleFromSymbols = function createCounterStyleFromSymbols(value, symbols) {\n  var suffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '. ';\n  var codePointRangeLength = symbols.length;\n  return createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, false, function (codePoint) {\n    return symbols[Math.floor(codePoint % codePointRangeLength)];\n  }) + suffix;\n};\n\nvar CJK_ZEROS = 1 << 0;\nvar CJK_TEN_COEFFICIENTS = 1 << 1;\nvar CJK_TEN_HIGH_COEFFICIENTS = 1 << 2;\nvar CJK_HUNDRED_COEFFICIENTS = 1 << 3;\n\nvar createCJKCounter = function createCJKCounter(value, numbers, multipliers, negativeSign, suffix, flags) {\n  if (value < -9999 || value > 9999) {\n    return createCounterText(value, _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].CJK_DECIMAL, suffix.length > 0);\n  }\n\n  var tmp = Math.abs(value);\n  var string = suffix;\n\n  if (tmp === 0) {\n    return numbers[0] + string;\n  }\n\n  for (var digit = 0; tmp > 0 && digit <= 4; digit++) {\n    var coefficient = tmp % 10;\n\n    if (coefficient === 0 && Object(_Util__WEBPACK_IMPORTED_MODULE_0__[\"contains\"])(flags, CJK_ZEROS) && string !== '') {\n      string = numbers[coefficient] + string;\n    } else if (coefficient > 1 || coefficient === 1 && digit === 0 || coefficient === 1 && digit === 1 && Object(_Util__WEBPACK_IMPORTED_MODULE_0__[\"contains\"])(flags, CJK_TEN_COEFFICIENTS) || coefficient === 1 && digit === 1 && Object(_Util__WEBPACK_IMPORTED_MODULE_0__[\"contains\"])(flags, CJK_TEN_HIGH_COEFFICIENTS) && value > 100 || coefficient === 1 && digit > 1 && Object(_Util__WEBPACK_IMPORTED_MODULE_0__[\"contains\"])(flags, CJK_HUNDRED_COEFFICIENTS)) {\n      string = numbers[coefficient] + (digit > 0 ? multipliers[digit - 1] : '') + string;\n    } else if (coefficient === 1 && digit > 0) {\n      string = multipliers[digit - 1] + string;\n    }\n\n    tmp = Math.floor(tmp / 10);\n  }\n\n  return (value < 0 ? negativeSign : '') + string;\n};\n\nvar CHINESE_INFORMAL_MULTIPLIERS = '十百千萬';\nvar CHINESE_FORMAL_MULTIPLIERS = '拾佰仟萬';\nvar JAPANESE_NEGATIVE = 'マイナス';\nvar KOREAN_NEGATIVE = '마이너스';\nvar createCounterText = function createCounterText(value, type, appendSuffix) {\n  var defaultSuffix = appendSuffix ? '. ' : '';\n  var cjkSuffix = appendSuffix ? '、' : '';\n  var koreanSuffix = appendSuffix ? ', ' : '';\n\n  switch (type) {\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].DISC:\n      return '•';\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].CIRCLE:\n      return '◦';\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].SQUARE:\n      return '◾';\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].DECIMAL_LEADING_ZERO:\n      var string = createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);\n      return string.length < 4 ? \"0\".concat(string) : string;\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].CJK_DECIMAL:\n      return createCounterStyleFromSymbols(value, '〇一二三四五六七八九', cjkSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].LOWER_ROMAN:\n      return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].DECIMAL, defaultSuffix).toLowerCase();\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].UPPER_ROMAN:\n      return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].DECIMAL, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].LOWER_GREEK:\n      return createCounterStyleFromRange(value, 945, 969, false, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].LOWER_ALPHA:\n      return createCounterStyleFromRange(value, 97, 122, false, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].UPPER_ALPHA:\n      return createCounterStyleFromRange(value, 65, 90, false, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].ARABIC_INDIC:\n      return createCounterStyleFromRange(value, 1632, 1641, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].ARMENIAN:\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].UPPER_ARMENIAN:\n      return createAdditiveCounter(value, 1, 9999, ARMENIAN, _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].DECIMAL, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].LOWER_ARMENIAN:\n      return createAdditiveCounter(value, 1, 9999, ARMENIAN, _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].DECIMAL, defaultSuffix).toLowerCase();\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].BENGALI:\n      return createCounterStyleFromRange(value, 2534, 2543, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].CAMBODIAN:\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].KHMER:\n      return createCounterStyleFromRange(value, 6112, 6121, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].CJK_EARTHLY_BRANCH:\n      return createCounterStyleFromSymbols(value, '子丑寅卯辰巳午未申酉戌亥', cjkSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].CJK_HEAVENLY_STEM:\n      return createCounterStyleFromSymbols(value, '甲乙丙丁戊己庚辛壬癸', cjkSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].CJK_IDEOGRAPHIC:\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].TRAD_CHINESE_INFORMAL:\n      return createCJKCounter(value, '零一二三四五六七八九', CHINESE_INFORMAL_MULTIPLIERS, '負', cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].TRAD_CHINESE_FORMAL:\n      return createCJKCounter(value, '零壹貳參肆伍陸柒捌玖', CHINESE_FORMAL_MULTIPLIERS, '負', cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].SIMP_CHINESE_INFORMAL:\n      return createCJKCounter(value, '零一二三四五六七八九', CHINESE_INFORMAL_MULTIPLIERS, '负', cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].SIMP_CHINESE_FORMAL:\n      return createCJKCounter(value, '零壹贰叁肆伍陆柒捌玖', CHINESE_FORMAL_MULTIPLIERS, '负', cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].JAPANESE_INFORMAL:\n      return createCJKCounter(value, '〇一二三四五六七八九', '十百千万', JAPANESE_NEGATIVE, cjkSuffix, 0);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].JAPANESE_FORMAL:\n      return createCJKCounter(value, '零壱弐参四伍六七八九', '拾百千万', JAPANESE_NEGATIVE, cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].KOREAN_HANGUL_FORMAL:\n      return createCJKCounter(value, '영일이삼사오육칠팔구', '십백천만', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].KOREAN_HANJA_INFORMAL:\n      return createCJKCounter(value, '零一二三四五六七八九', '十百千萬', KOREAN_NEGATIVE, koreanSuffix, 0);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].KOREAN_HANJA_FORMAL:\n      return createCJKCounter(value, '零壹貳參四五六七八九', '拾百千', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].DEVANAGARI:\n      return createCounterStyleFromRange(value, 0x966, 0x96f, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].GEORGIAN:\n      return createAdditiveCounter(value, 1, 19999, GEORGIAN, _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].DECIMAL, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].GUJARATI:\n      return createCounterStyleFromRange(value, 0xae6, 0xaef, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].GURMUKHI:\n      return createCounterStyleFromRange(value, 0xa66, 0xa6f, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].HEBREW:\n      return createAdditiveCounter(value, 1, 10999, HEBREW, _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].DECIMAL, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].HIRAGANA:\n      return createCounterStyleFromSymbols(value, 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん');\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].HIRAGANA_IROHA:\n      return createCounterStyleFromSymbols(value, 'いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす');\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].KANNADA:\n      return createCounterStyleFromRange(value, 0xce6, 0xcef, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].KATAKANA:\n      return createCounterStyleFromSymbols(value, 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン', cjkSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].KATAKANA_IROHA:\n      return createCounterStyleFromSymbols(value, 'イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス', cjkSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].LAO:\n      return createCounterStyleFromRange(value, 0xed0, 0xed9, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].MONGOLIAN:\n      return createCounterStyleFromRange(value, 0x1810, 0x1819, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].MYANMAR:\n      return createCounterStyleFromRange(value, 0x1040, 0x1049, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].ORIYA:\n      return createCounterStyleFromRange(value, 0xb66, 0xb6f, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].PERSIAN:\n      return createCounterStyleFromRange(value, 0x6f0, 0x6f9, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].TAMIL:\n      return createCounterStyleFromRange(value, 0xbe6, 0xbef, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].TELUGU:\n      return createCounterStyleFromRange(value, 0xc66, 0xc6f, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].THAI:\n      return createCounterStyleFromRange(value, 0xe50, 0xe59, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].TIBETAN:\n      return createCounterStyleFromRange(value, 0xf20, 0xf29, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].DECIMAL:\n    default:\n      return createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);\n  }\n};\n\n//# sourceURL=webpack://html2canvas/./src/ListItem.js?");

/***/ }),

/***/ "./src/Logger.js":
/*!***********************!*\
  !*** ./src/Logger.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Logger; });\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Logger =\n/*#__PURE__*/\nfunction () {\n  function Logger(enabled, id, start) {\n    _classCallCheck(this, Logger);\n\n    this.enabled = typeof window !== 'undefined' && enabled;\n    this.start = start ? start : Date.now();\n    this.id = id;\n  }\n\n  _createClass(Logger, [{\n    key: \"child\",\n    value: function child(id) {\n      return new Logger(this.enabled, id, this.start);\n    } // eslint-disable-next-line flowtype/no-weak-types\n\n  }, {\n    key: \"log\",\n    value: function log() {\n      if (this.enabled && window.console && window.console.log) {\n        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n          args[_key] = arguments[_key];\n        }\n\n        Function.prototype.bind.call(window.console.log, window.console).apply(window.console, [Date.now() - this.start + 'ms', this.id ? \"html2canvas (\".concat(this.id, \"):\") : 'html2canvas:'].concat([].slice.call(args, 0)));\n      }\n    } // eslint-disable-next-line flowtype/no-weak-types\n\n  }, {\n    key: \"error\",\n    value: function error() {\n      if (this.enabled && window.console && window.console.error) {\n        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n          args[_key2] = arguments[_key2];\n        }\n\n        Function.prototype.bind.call(window.console.error, window.console).apply(window.console, [Date.now() - this.start + 'ms', this.id ? \"html2canvas (\".concat(this.id, \"):\") : 'html2canvas:'].concat([].slice.call(args, 0)));\n      }\n    }\n  }]);\n\n  return Logger;\n}();\n\n\n\n//# sourceURL=webpack://html2canvas/./src/Logger.js?");

/***/ }),

/***/ "./src/NodeContainer.js":
/*!******************************!*\
  !*** ./src/NodeContainer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NodeContainer; });\n/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Color */ \"./src/Color.js\");\n/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Util */ \"./src/Util.js\");\n/* harmony import */ var _parsing_background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parsing/background */ \"./src/parsing/background.js\");\n/* harmony import */ var _parsing_border__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parsing/border */ \"./src/parsing/border.js\");\n/* harmony import */ var _parsing_borderRadius__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parsing/borderRadius */ \"./src/parsing/borderRadius.js\");\n/* harmony import */ var _parsing_display__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parsing/display */ \"./src/parsing/display.js\");\n/* harmony import */ var _parsing_float__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parsing/float */ \"./src/parsing/float.js\");\n/* harmony import */ var _parsing_font__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parsing/font */ \"./src/parsing/font.js\");\n/* harmony import */ var _parsing_letterSpacing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parsing/letterSpacing */ \"./src/parsing/letterSpacing.js\");\n/* harmony import */ var _parsing_lineBreak__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parsing/lineBreak */ \"./src/parsing/lineBreak.js\");\n/* harmony import */ var _parsing_listStyle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./parsing/listStyle */ \"./src/parsing/listStyle.js\");\n/* harmony import */ var _parsing_margin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./parsing/margin */ \"./src/parsing/margin.js\");\n/* harmony import */ var _parsing_overflow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./parsing/overflow */ \"./src/parsing/overflow.js\");\n/* harmony import */ var _parsing_overflowWrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./parsing/overflowWrap */ \"./src/parsing/overflowWrap.js\");\n/* harmony import */ var _parsing_padding__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./parsing/padding */ \"./src/parsing/padding.js\");\n/* harmony import */ var _parsing_position__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./parsing/position */ \"./src/parsing/position.js\");\n/* harmony import */ var _parsing_textDecoration__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./parsing/textDecoration */ \"./src/parsing/textDecoration.js\");\n/* harmony import */ var _parsing_textShadow__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./parsing/textShadow */ \"./src/parsing/textShadow.js\");\n/* harmony import */ var _parsing_textTransform__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./parsing/textTransform */ \"./src/parsing/textTransform.js\");\n/* harmony import */ var _parsing_transform__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./parsing/transform */ \"./src/parsing/transform.js\");\n/* harmony import */ var _parsing_visibility__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./parsing/visibility */ \"./src/parsing/visibility.js\");\n/* harmony import */ var _parsing_word_break__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./parsing/word-break */ \"./src/parsing/word-break.js\");\n/* harmony import */ var _parsing_zIndex__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./parsing/zIndex */ \"./src/parsing/zIndex.js\");\n/* harmony import */ var _Bounds__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Bounds */ \"./src/Bounds.js\");\n/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Input */ \"./src/Input.js\");\n/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ListItem */ \"./src/ListItem.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar INPUT_TAGS = ['INPUT', 'TEXTAREA', 'SELECT'];\n\nvar NodeContainer =\n/*#__PURE__*/\nfunction () {\n  function NodeContainer(node, parent, resourceLoader, index) {\n    var _this = this;\n\n    _classCallCheck(this, NodeContainer);\n\n    this.parent = parent;\n    this.tagName = node.tagName;\n    this.index = index;\n    this.childNodes = [];\n    this.listItems = [];\n\n    if (typeof node.start === 'number') {\n      this.listStart = node.start;\n    }\n\n    var defaultView = node.ownerDocument.defaultView;\n    var scrollX = defaultView.pageXOffset;\n    var scrollY = defaultView.pageYOffset;\n    var style = defaultView.getComputedStyle(node, null);\n    var display = Object(_parsing_display__WEBPACK_IMPORTED_MODULE_5__[\"parseDisplay\"])(style.display);\n    var IS_INPUT = node.type === 'radio' || node.type === 'checkbox';\n    var position = Object(_parsing_position__WEBPACK_IMPORTED_MODULE_15__[\"parsePosition\"])(style.position);\n    this.style = {\n      background: IS_INPUT ? _Input__WEBPACK_IMPORTED_MODULE_24__[\"INPUT_BACKGROUND\"] : Object(_parsing_background__WEBPACK_IMPORTED_MODULE_2__[\"parseBackground\"])(style, resourceLoader),\n      border: IS_INPUT ? _Input__WEBPACK_IMPORTED_MODULE_24__[\"INPUT_BORDERS\"] : Object(_parsing_border__WEBPACK_IMPORTED_MODULE_3__[\"parseBorder\"])(style),\n      borderRadius: (node instanceof defaultView.HTMLInputElement || node instanceof HTMLInputElement) && IS_INPUT ? Object(_Input__WEBPACK_IMPORTED_MODULE_24__[\"getInputBorderRadius\"])(node) : Object(_parsing_borderRadius__WEBPACK_IMPORTED_MODULE_4__[\"parseBorderRadius\"])(style),\n      color: IS_INPUT ? _Input__WEBPACK_IMPORTED_MODULE_24__[\"INPUT_COLOR\"] : new _Color__WEBPACK_IMPORTED_MODULE_0__[\"default\"](style.color),\n      display: display,\n      float: Object(_parsing_float__WEBPACK_IMPORTED_MODULE_6__[\"parseCSSFloat\"])(style.float),\n      font: Object(_parsing_font__WEBPACK_IMPORTED_MODULE_7__[\"parseFont\"])(style),\n      letterSpacing: Object(_parsing_letterSpacing__WEBPACK_IMPORTED_MODULE_8__[\"parseLetterSpacing\"])(style.letterSpacing),\n      listStyle: display === _parsing_display__WEBPACK_IMPORTED_MODULE_5__[\"DISPLAY\"].LIST_ITEM ? Object(_parsing_listStyle__WEBPACK_IMPORTED_MODULE_10__[\"parseListStyle\"])(style) : null,\n      lineBreak: Object(_parsing_lineBreak__WEBPACK_IMPORTED_MODULE_9__[\"parseLineBreak\"])(style.lineBreak),\n      margin: Object(_parsing_margin__WEBPACK_IMPORTED_MODULE_11__[\"parseMargin\"])(style),\n      opacity: parseFloat(style.opacity),\n      overflow: INPUT_TAGS.indexOf(node.tagName) === -1 ? Object(_parsing_overflow__WEBPACK_IMPORTED_MODULE_12__[\"parseOverflow\"])(style.overflow) : _parsing_overflow__WEBPACK_IMPORTED_MODULE_12__[\"OVERFLOW\"].HIDDEN,\n      overflowWrap: Object(_parsing_overflowWrap__WEBPACK_IMPORTED_MODULE_13__[\"parseOverflowWrap\"])(style.overflowWrap ? style.overflowWrap : style.wordWrap),\n      padding: Object(_parsing_padding__WEBPACK_IMPORTED_MODULE_14__[\"parsePadding\"])(style),\n      position: position,\n      textDecoration: Object(_parsing_textDecoration__WEBPACK_IMPORTED_MODULE_16__[\"parseTextDecoration\"])(style),\n      textShadow: Object(_parsing_textShadow__WEBPACK_IMPORTED_MODULE_17__[\"parseTextShadow\"])(style.textShadow),\n      textTransform: Object(_parsing_textTransform__WEBPACK_IMPORTED_MODULE_18__[\"parseTextTransform\"])(style.textTransform),\n      transform: Object(_parsing_transform__WEBPACK_IMPORTED_MODULE_19__[\"parseTransform\"])(style),\n      visibility: Object(_parsing_visibility__WEBPACK_IMPORTED_MODULE_20__[\"parseVisibility\"])(style.visibility),\n      wordBreak: Object(_parsing_word_break__WEBPACK_IMPORTED_MODULE_21__[\"parseWordBreak\"])(style.wordBreak),\n      zIndex: Object(_parsing_zIndex__WEBPACK_IMPORTED_MODULE_22__[\"parseZIndex\"])(position !== _parsing_position__WEBPACK_IMPORTED_MODULE_15__[\"POSITION\"].STATIC ? style.zIndex : 'auto')\n    };\n\n    if (this.isTransformed()) {\n      // getBoundingClientRect provides values post-transform, we want them without the transformation\n      node.style.transform = 'matrix(1,0,0,1,0,0)';\n    }\n\n    if (display === _parsing_display__WEBPACK_IMPORTED_MODULE_5__[\"DISPLAY\"].LIST_ITEM) {\n      var listOwner = Object(_ListItem__WEBPACK_IMPORTED_MODULE_25__[\"getListOwner\"])(this);\n\n      if (listOwner) {\n        var listIndex = listOwner.listItems.length;\n        listOwner.listItems.push(this);\n        this.listIndex = node.hasAttribute('value') && typeof node.value === 'number' ? node.value : listIndex === 0 ? typeof listOwner.listStart === 'number' ? listOwner.listStart : 1 : listOwner.listItems[listIndex - 1].listIndex + 1;\n      }\n    } // TODO move bound retrieval for all nodes to a later stage?\n\n\n    if (node.tagName === 'IMG') {\n      node.addEventListener('load', function () {\n        _this.bounds = Object(_Bounds__WEBPACK_IMPORTED_MODULE_23__[\"parseBounds\"])(node, scrollX, scrollY);\n        _this.curvedBounds = Object(_Bounds__WEBPACK_IMPORTED_MODULE_23__[\"parseBoundCurves\"])(_this.bounds, _this.style.border, _this.style.borderRadius);\n      });\n    }\n\n    this.image = getImage(node, resourceLoader);\n    this.bounds = IS_INPUT ? Object(_Input__WEBPACK_IMPORTED_MODULE_24__[\"reformatInputBounds\"])(Object(_Bounds__WEBPACK_IMPORTED_MODULE_23__[\"parseBounds\"])(node, scrollX, scrollY)) : Object(_Bounds__WEBPACK_IMPORTED_MODULE_23__[\"parseBounds\"])(node, scrollX, scrollY);\n    this.curvedBounds = Object(_Bounds__WEBPACK_IMPORTED_MODULE_23__[\"parseBoundCurves\"])(this.bounds, this.style.border, this.style.borderRadius);\n\n    if (true) {\n      this.name = \"\".concat(node.tagName.toLowerCase()).concat(node.id ? \"#\".concat(node.id) : '').concat(node.className.toString().split(' ').map(function (s) {\n        return s.length ? \".\".concat(s) : '';\n      }).join(''));\n    }\n  }\n\n  _createClass(NodeContainer, [{\n    key: \"getClipPaths\",\n    value: function getClipPaths() {\n      var parentClips = this.parent ? this.parent.getClipPaths() : [];\n      var isClipped = this.style.overflow !== _parsing_overflow__WEBPACK_IMPORTED_MODULE_12__[\"OVERFLOW\"].VISIBLE;\n      return isClipped ? parentClips.concat([Object(_Bounds__WEBPACK_IMPORTED_MODULE_23__[\"calculatePaddingBoxPath\"])(this.curvedBounds)]) : parentClips;\n    }\n  }, {\n    key: \"isInFlow\",\n    value: function isInFlow() {\n      return this.isRootElement() && !this.isFloating() && !this.isAbsolutelyPositioned();\n    }\n  }, {\n    key: \"isVisible\",\n    value: function isVisible() {\n      return !Object(_Util__WEBPACK_IMPORTED_MODULE_1__[\"contains\"])(this.style.display, _parsing_display__WEBPACK_IMPORTED_MODULE_5__[\"DISPLAY\"].NONE) && this.style.opacity > 0 && this.style.visibility === _parsing_visibility__WEBPACK_IMPORTED_MODULE_20__[\"VISIBILITY\"].VISIBLE;\n    }\n  }, {\n    key: \"isAbsolutelyPositioned\",\n    value: function isAbsolutelyPositioned() {\n      return this.style.position !== _parsing_position__WEBPACK_IMPORTED_MODULE_15__[\"POSITION\"].STATIC && this.style.position !== _parsing_position__WEBPACK_IMPORTED_MODULE_15__[\"POSITION\"].RELATIVE;\n    }\n  }, {\n    key: \"isPositioned\",\n    value: function isPositioned() {\n      return this.style.position !== _parsing_position__WEBPACK_IMPORTED_MODULE_15__[\"POSITION\"].STATIC;\n    }\n  }, {\n    key: \"isFloating\",\n    value: function isFloating() {\n      return this.style.float !== _parsing_float__WEBPACK_IMPORTED_MODULE_6__[\"FLOAT\"].NONE;\n    }\n  }, {\n    key: \"isRootElement\",\n    value: function isRootElement() {\n      return this.parent === null;\n    }\n  }, {\n    key: \"isTransformed\",\n    value: function isTransformed() {\n      return this.style.transform !== null;\n    }\n  }, {\n    key: \"isPositionedWithZIndex\",\n    value: function isPositionedWithZIndex() {\n      return this.isPositioned() && !this.style.zIndex.auto;\n    }\n  }, {\n    key: \"isInlineLevel\",\n    value: function isInlineLevel() {\n      return Object(_Util__WEBPACK_IMPORTED_MODULE_1__[\"contains\"])(this.style.display, _parsing_display__WEBPACK_IMPORTED_MODULE_5__[\"DISPLAY\"].INLINE) || Object(_Util__WEBPACK_IMPORTED_MODULE_1__[\"contains\"])(this.style.display, _parsing_display__WEBPACK_IMPORTED_MODULE_5__[\"DISPLAY\"].INLINE_BLOCK) || Object(_Util__WEBPACK_IMPORTED_MODULE_1__[\"contains\"])(this.style.display, _parsing_display__WEBPACK_IMPORTED_MODULE_5__[\"DISPLAY\"].INLINE_FLEX) || Object(_Util__WEBPACK_IMPORTED_MODULE_1__[\"contains\"])(this.style.display, _parsing_display__WEBPACK_IMPORTED_MODULE_5__[\"DISPLAY\"].INLINE_GRID) || Object(_Util__WEBPACK_IMPORTED_MODULE_1__[\"contains\"])(this.style.display, _parsing_display__WEBPACK_IMPORTED_MODULE_5__[\"DISPLAY\"].INLINE_LIST_ITEM) || Object(_Util__WEBPACK_IMPORTED_MODULE_1__[\"contains\"])(this.style.display, _parsing_display__WEBPACK_IMPORTED_MODULE_5__[\"DISPLAY\"].INLINE_TABLE);\n    }\n  }, {\n    key: \"isInlineBlockOrInlineTable\",\n    value: function isInlineBlockOrInlineTable() {\n      return Object(_Util__WEBPACK_IMPORTED_MODULE_1__[\"contains\"])(this.style.display, _parsing_display__WEBPACK_IMPORTED_MODULE_5__[\"DISPLAY\"].INLINE_BLOCK) || Object(_Util__WEBPACK_IMPORTED_MODULE_1__[\"contains\"])(this.style.display, _parsing_display__WEBPACK_IMPORTED_MODULE_5__[\"DISPLAY\"].INLINE_TABLE);\n    }\n  }]);\n\n  return NodeContainer;\n}();\n\n\n\nvar getImage = function getImage(node, resourceLoader) {\n  if (node instanceof node.ownerDocument.defaultView.SVGSVGElement || node instanceof SVGSVGElement) {\n    var s = new XMLSerializer();\n    return resourceLoader.loadImage(\"data:image/svg+xml,\".concat(encodeURIComponent(s.serializeToString(node))));\n  }\n\n  switch (node.tagName) {\n    case 'IMG':\n      // $FlowFixMe\n      var img = node;\n      return resourceLoader.loadImage(img.currentSrc || img.src);\n\n    case 'CANVAS':\n      // $FlowFixMe\n      var canvas = node;\n      return resourceLoader.loadCanvas(canvas);\n\n    case 'IFRAME':\n      var iframeKey = node.getAttribute('data-html2canvas-internal-iframe-key');\n\n      if (iframeKey) {\n        return iframeKey;\n      }\n\n      break;\n  }\n\n  return null;\n};\n\n//# sourceURL=webpack://html2canvas/./src/NodeContainer.js?");

/***/ }),

/***/ "./src/NodeParser.js":
/*!***************************!*\
  !*** ./src/NodeParser.js ***!
  \***************************/
/*! exports provided: NodeParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NodeParser\", function() { return NodeParser; });\n/* harmony import */ var _StackingContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StackingContext */ \"./src/StackingContext.js\");\n/* harmony import */ var _NodeContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NodeContainer */ \"./src/NodeContainer.js\");\n/* harmony import */ var _TextContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextContainer */ \"./src/TextContainer.js\");\n/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Input */ \"./src/Input.js\");\n/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ListItem */ \"./src/ListItem.js\");\n/* harmony import */ var _parsing_listStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parsing/listStyle */ \"./src/parsing/listStyle.js\");\n\n\n\n\n\n\n\n\nvar NodeParser = function NodeParser(node, resourceLoader, logger) {\n  if (true) {\n    logger.log(\"Starting node parsing\");\n  }\n\n  var index = 0;\n  var container = new _NodeContainer__WEBPACK_IMPORTED_MODULE_1__[\"default\"](node, null, resourceLoader, index++);\n  var stack = new _StackingContext__WEBPACK_IMPORTED_MODULE_0__[\"default\"](container, null, true);\n  parseNodeTree(node, container, stack, resourceLoader, index);\n\n  if (true) {\n    logger.log(\"Finished parsing node tree\");\n  }\n\n  return stack;\n};\nvar IGNORED_NODE_NAMES = ['SCRIPT', 'HEAD', 'TITLE', 'OBJECT', 'BR', 'OPTION'];\n\nvar parseNodeTree = function parseNodeTree(node, parent, stack, resourceLoader, index) {\n  if ( true && index > 50000) {\n    throw new Error(\"Recursion error while parsing node tree\");\n  }\n\n  for (var childNode = node.firstChild, nextNode; childNode; childNode = nextNode) {\n    nextNode = childNode.nextSibling;\n    var defaultView = childNode.ownerDocument.defaultView;\n\n    if (childNode instanceof defaultView.Text || childNode instanceof Text || defaultView.parent && childNode instanceof defaultView.parent.Text) {\n      if (childNode.data.trim().length > 0) {\n        parent.childNodes.push(_TextContainer__WEBPACK_IMPORTED_MODULE_2__[\"default\"].fromTextNode(childNode, parent));\n      }\n    } else if (childNode instanceof defaultView.HTMLElement || childNode instanceof HTMLElement || defaultView.parent && childNode instanceof defaultView.parent.HTMLElement) {\n      if (IGNORED_NODE_NAMES.indexOf(childNode.nodeName) === -1) {\n        var container = new _NodeContainer__WEBPACK_IMPORTED_MODULE_1__[\"default\"](childNode, parent, resourceLoader, index++);\n\n        if (container.isVisible()) {\n          if (childNode.tagName === 'INPUT') {\n            // $FlowFixMe\n            Object(_Input__WEBPACK_IMPORTED_MODULE_3__[\"inlineInputElement\"])(childNode, container);\n          } else if (childNode.tagName === 'TEXTAREA') {\n            // $FlowFixMe\n            Object(_Input__WEBPACK_IMPORTED_MODULE_3__[\"inlineTextAreaElement\"])(childNode, container);\n          } else if (childNode.tagName === 'SELECT') {\n            // $FlowFixMe\n            Object(_Input__WEBPACK_IMPORTED_MODULE_3__[\"inlineSelectElement\"])(childNode, container);\n          } else if (container.style.listStyle && container.style.listStyle.listStyleType !== _parsing_listStyle__WEBPACK_IMPORTED_MODULE_5__[\"LIST_STYLE_TYPE\"].NONE) {\n            Object(_ListItem__WEBPACK_IMPORTED_MODULE_4__[\"inlineListItemElement\"])(childNode, container, resourceLoader);\n          }\n\n          var SHOULD_TRAVERSE_CHILDREN = childNode.tagName !== 'TEXTAREA';\n          var treatAsRealStackingContext = createsRealStackingContext(container, childNode);\n\n          if (treatAsRealStackingContext || createsStackingContext(container)) {\n            // for treatAsRealStackingContext:false, any positioned descendants and descendants\n            // which actually create a new stacking context should be considered part of the parent stacking context\n            var parentStack = treatAsRealStackingContext || container.isPositioned() ? stack.getRealParentStackingContext() : stack;\n            var childStack = new _StackingContext__WEBPACK_IMPORTED_MODULE_0__[\"default\"](container, parentStack, treatAsRealStackingContext);\n            parentStack.contexts.push(childStack);\n\n            if (SHOULD_TRAVERSE_CHILDREN) {\n              parseNodeTree(childNode, container, childStack, resourceLoader, index);\n            }\n          } else {\n            stack.children.push(container);\n\n            if (SHOULD_TRAVERSE_CHILDREN) {\n              parseNodeTree(childNode, container, stack, resourceLoader, index);\n            }\n          }\n        }\n      }\n    } else if (childNode instanceof defaultView.SVGSVGElement || childNode instanceof SVGSVGElement || defaultView.parent && childNode instanceof defaultView.parent.SVGSVGElement) {\n      var _container = new _NodeContainer__WEBPACK_IMPORTED_MODULE_1__[\"default\"](childNode, parent, resourceLoader, index++);\n\n      var _treatAsRealStackingContext = createsRealStackingContext(_container, childNode);\n\n      if (_treatAsRealStackingContext || createsStackingContext(_container)) {\n        // for treatAsRealStackingContext:false, any positioned descendants and descendants\n        // which actually create a new stacking context should be considered part of the parent stacking context\n        var _parentStack = _treatAsRealStackingContext || _container.isPositioned() ? stack.getRealParentStackingContext() : stack;\n\n        var _childStack = new _StackingContext__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_container, _parentStack, _treatAsRealStackingContext);\n\n        _parentStack.contexts.push(_childStack);\n      } else {\n        stack.children.push(_container);\n      }\n    }\n  }\n};\n\nvar createsRealStackingContext = function createsRealStackingContext(container, node) {\n  return container.isRootElement() || container.isPositionedWithZIndex() || container.style.opacity < 1 || container.isTransformed() || isBodyWithTransparentRoot(container, node);\n};\n\nvar createsStackingContext = function createsStackingContext(container) {\n  return container.isPositioned() || container.isFloating();\n};\n\nvar isBodyWithTransparentRoot = function isBodyWithTransparentRoot(container, node) {\n  return node.nodeName === 'BODY' && container.parent instanceof _NodeContainer__WEBPACK_IMPORTED_MODULE_1__[\"default\"] && container.parent.style.background.backgroundColor.isTransparent();\n};\n\n//# sourceURL=webpack://html2canvas/./src/NodeParser.js?");

/***/ }),

/***/ "./src/Proxy.js":
/*!**********************!*\
  !*** ./src/Proxy.js ***!
  \**********************/
/*! exports provided: Proxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Proxy\", function() { return Proxy; });\n/* harmony import */ var _Feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Feature */ \"./src/Feature.js\");\n\n\n\nvar Proxy = function Proxy(src, options) {\n  if (!options.proxy) {\n    return Promise.reject( true ? 'No proxy defined' : undefined);\n  }\n\n  var proxy = options.proxy;\n  return new Promise(function (resolve, reject) {\n    var responseType = _Feature__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SUPPORT_CORS_XHR && _Feature__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SUPPORT_RESPONSE_TYPE ? 'blob' : 'text';\n    var xhr = _Feature__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SUPPORT_CORS_XHR ? new XMLHttpRequest() : new XDomainRequest();\n\n    xhr.onload = function () {\n      if (xhr instanceof XMLHttpRequest) {\n        if (xhr.status === 200) {\n          if (responseType === 'text') {\n            resolve(xhr.response);\n          } else {\n            var reader = new FileReader(); // $FlowFixMe\n\n            reader.addEventListener('load', function () {\n              return resolve(reader.result);\n            }, false); // $FlowFixMe\n\n            reader.addEventListener('error', function (e) {\n              return reject(e);\n            }, false);\n            reader.readAsDataURL(xhr.response);\n          }\n        } else {\n          reject( true ? \"Failed to proxy resource \".concat(src.substring(0, 256), \" with status code \").concat(xhr.status) : undefined);\n        }\n      } else {\n        resolve(xhr.responseText);\n      }\n    };\n\n    xhr.onerror = reject;\n    xhr.open('GET', \"\".concat(proxy, \"?url=\").concat(encodeURIComponent(src), \"&responseType=\").concat(responseType));\n\n    if (responseType !== 'text' && xhr instanceof XMLHttpRequest) {\n      xhr.responseType = responseType;\n    }\n\n    if (options.imageTimeout) {\n      var timeout = options.imageTimeout;\n      xhr.timeout = timeout;\n\n      xhr.ontimeout = function () {\n        return reject( true ? \"Timed out (\".concat(timeout, \"ms) proxying \").concat(src.substring(0, 256)) : undefined);\n      };\n    }\n\n    xhr.send();\n  });\n};\n\n//# sourceURL=webpack://html2canvas/./src/Proxy.js?");

/***/ }),

/***/ "./src/PseudoNodeContent.js":
/*!**********************************!*\
  !*** ./src/PseudoNodeContent.js ***!
  \**********************************/
/*! exports provided: PSEUDO_CONTENT_ITEM_TYPE, TOKEN_TYPE, parseCounterReset, popCounters, resolvePseudoContent, parseContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PSEUDO_CONTENT_ITEM_TYPE\", function() { return PSEUDO_CONTENT_ITEM_TYPE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TOKEN_TYPE\", function() { return TOKEN_TYPE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseCounterReset\", function() { return parseCounterReset; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"popCounters\", function() { return popCounters; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resolvePseudoContent\", function() { return resolvePseudoContent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseContent\", function() { return parseContent; });\n/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListItem */ \"./src/ListItem.js\");\n/* harmony import */ var _parsing_listStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsing/listStyle */ \"./src/parsing/listStyle.js\");\n\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nvar PSEUDO_CONTENT_ITEM_TYPE = {\n  TEXT: 0,\n  IMAGE: 1\n};\nvar TOKEN_TYPE = {\n  STRING: 0,\n  ATTRIBUTE: 1,\n  URL: 2,\n  COUNTER: 3,\n  COUNTERS: 4,\n  OPENQUOTE: 5,\n  CLOSEQUOTE: 6\n};\nvar parseCounterReset = function parseCounterReset(style, data) {\n  if (!style || !style.counterReset || style.counterReset === 'none') {\n    return [];\n  }\n\n  var counterNames = [];\n  var counterResets = style.counterReset.split(/\\s*,\\s*/);\n  var lenCounterResets = counterResets.length;\n\n  for (var i = 0; i < lenCounterResets; i++) {\n    var _counterResets$i$spli = counterResets[i].split(/\\s+/),\n        _counterResets$i$spli2 = _slicedToArray(_counterResets$i$spli, 2),\n        counterName = _counterResets$i$spli2[0],\n        initialValue = _counterResets$i$spli2[1];\n\n    counterNames.push(counterName);\n    var counter = data.counters[counterName];\n\n    if (!counter) {\n      counter = data.counters[counterName] = [];\n    }\n\n    counter.push(parseInt(initialValue || 0, 10));\n  }\n\n  return counterNames;\n};\nvar popCounters = function popCounters(counterNames, data) {\n  var lenCounters = counterNames.length;\n\n  for (var i = 0; i < lenCounters; i++) {\n    data.counters[counterNames[i]].pop();\n  }\n};\nvar resolvePseudoContent = function resolvePseudoContent(node, style, data) {\n  if (!style || !style.content || style.content === 'none' || style.content === '-moz-alt-content' || style.display === 'none') {\n    return null;\n  }\n\n  var tokens = parseContent(style.content);\n  var len = tokens.length;\n  var contentItems = [];\n  var s = ''; // increment the counter (if there is a \"counter-increment\" declaration)\n\n  var counterIncrement = style.counterIncrement;\n\n  if (counterIncrement && counterIncrement !== 'none') {\n    var _counterIncrement$spl = counterIncrement.split(/\\s+/),\n        _counterIncrement$spl2 = _slicedToArray(_counterIncrement$spl, 2),\n        counterName = _counterIncrement$spl2[0],\n        incrementValue = _counterIncrement$spl2[1];\n\n    var counter = data.counters[counterName];\n\n    if (counter) {\n      counter[counter.length - 1] += incrementValue === undefined ? 1 : parseInt(incrementValue, 10);\n    }\n  } // build the content string\n\n\n  for (var i = 0; i < len; i++) {\n    var token = tokens[i];\n\n    switch (token.type) {\n      case TOKEN_TYPE.STRING:\n        s += token.value || '';\n        break;\n\n      case TOKEN_TYPE.ATTRIBUTE:\n        if (node instanceof HTMLElement && token.value) {\n          s += node.getAttribute(token.value) || '';\n        }\n\n        break;\n\n      case TOKEN_TYPE.COUNTER:\n        var _counter = data.counters[token.name || ''];\n\n        if (_counter) {\n          s += formatCounterValue([_counter[_counter.length - 1]], '', token.format);\n        }\n\n        break;\n\n      case TOKEN_TYPE.COUNTERS:\n        var counters = data.counters[token.name || ''];\n\n        if (counters) {\n          s += formatCounterValue(counters, token.glue, token.format);\n        }\n\n        break;\n\n      case TOKEN_TYPE.OPENQUOTE:\n        s += getQuote(style, true, data.quoteDepth);\n        data.quoteDepth++;\n        break;\n\n      case TOKEN_TYPE.CLOSEQUOTE:\n        data.quoteDepth--;\n        s += getQuote(style, false, data.quoteDepth);\n        break;\n\n      case TOKEN_TYPE.URL:\n        if (s) {\n          contentItems.push({\n            type: PSEUDO_CONTENT_ITEM_TYPE.TEXT,\n            value: s\n          });\n          s = '';\n        }\n\n        contentItems.push({\n          type: PSEUDO_CONTENT_ITEM_TYPE.IMAGE,\n          value: token.value || ''\n        });\n        break;\n    }\n  }\n\n  if (s) {\n    contentItems.push({\n      type: PSEUDO_CONTENT_ITEM_TYPE.TEXT,\n      value: s\n    });\n  }\n\n  return contentItems;\n};\nvar parseContent = function parseContent(content, cache) {\n  if (cache && cache[content]) {\n    return cache[content];\n  }\n\n  var tokens = [];\n  var len = content.length;\n  var isString = false;\n  var isEscaped = false;\n  var isFunction = false;\n  var str = '';\n  var functionName = '';\n  var args = [];\n\n  for (var i = 0; i < len; i++) {\n    var c = content.charAt(i);\n\n    switch (c) {\n      case \"'\":\n      case '\"':\n        if (isEscaped) {\n          str += c;\n        } else {\n          isString = !isString;\n\n          if (!isFunction && !isString) {\n            tokens.push({\n              type: TOKEN_TYPE.STRING,\n              value: str\n            });\n            str = '';\n          }\n        }\n\n        break;\n\n      case '\\\\':\n        if (isEscaped) {\n          str += c;\n          isEscaped = false;\n        } else {\n          isEscaped = true;\n        }\n\n        break;\n\n      case '(':\n        if (isString) {\n          str += c;\n        } else {\n          isFunction = true;\n          functionName = str;\n          str = '';\n          args = [];\n        }\n\n        break;\n\n      case ')':\n        if (isString) {\n          str += c;\n        } else if (isFunction) {\n          if (str) {\n            args.push(str);\n          }\n\n          switch (functionName) {\n            case 'attr':\n              if (args.length > 0) {\n                tokens.push({\n                  type: TOKEN_TYPE.ATTRIBUTE,\n                  value: args[0]\n                });\n              }\n\n              break;\n\n            case 'counter':\n              if (args.length > 0) {\n                var counter = {\n                  type: TOKEN_TYPE.COUNTER,\n                  name: args[0]\n                };\n\n                if (args.length > 1) {\n                  counter.format = args[1];\n                }\n\n                tokens.push(counter);\n              }\n\n              break;\n\n            case 'counters':\n              if (args.length > 0) {\n                var counters = {\n                  type: TOKEN_TYPE.COUNTERS,\n                  name: args[0]\n                };\n\n                if (args.length > 1) {\n                  counters.glue = args[1];\n                }\n\n                if (args.length > 2) {\n                  counters.format = args[2];\n                }\n\n                tokens.push(counters);\n              }\n\n              break;\n\n            case 'url':\n              if (args.length > 0) {\n                tokens.push({\n                  type: TOKEN_TYPE.URL,\n                  value: args[0]\n                });\n              }\n\n              break;\n          }\n\n          isFunction = false;\n          str = '';\n        }\n\n        break;\n\n      case ',':\n        if (isString) {\n          str += c;\n        } else if (isFunction) {\n          args.push(str);\n          str = '';\n        }\n\n        break;\n\n      case ' ':\n      case '\\t':\n        if (isString) {\n          str += c;\n        } else if (str) {\n          addOtherToken(tokens, str);\n          str = '';\n        }\n\n        break;\n\n      default:\n        str += c;\n    }\n\n    if (c !== '\\\\') {\n      isEscaped = false;\n    }\n  }\n\n  if (str) {\n    addOtherToken(tokens, str);\n  }\n\n  if (cache) {\n    cache[content] = tokens;\n  }\n\n  return tokens;\n};\n\nvar addOtherToken = function addOtherToken(tokens, identifier) {\n  switch (identifier) {\n    case 'open-quote':\n      tokens.push({\n        type: TOKEN_TYPE.OPENQUOTE\n      });\n      break;\n\n    case 'close-quote':\n      tokens.push({\n        type: TOKEN_TYPE.CLOSEQUOTE\n      });\n      break;\n  }\n};\n\nvar getQuote = function getQuote(style, isOpening, quoteDepth) {\n  var quotes = style.quotes ? style.quotes.split(/\\s+/) : [\"'\\\"'\", \"'\\\"'\"];\n  var idx = quoteDepth * 2;\n\n  if (idx >= quotes.length) {\n    idx = quotes.length - 2;\n  }\n\n  if (!isOpening) {\n    ++idx;\n  }\n\n  return quotes[idx].replace(/^[\"']|[\"']$/g, '');\n};\n\nvar formatCounterValue = function formatCounterValue(counter, glue, format) {\n  var len = counter.length;\n  var result = '';\n\n  for (var i = 0; i < len; i++) {\n    if (i > 0) {\n      result += glue || '';\n    }\n\n    result += Object(_ListItem__WEBPACK_IMPORTED_MODULE_0__[\"createCounterText\"])(counter[i], Object(_parsing_listStyle__WEBPACK_IMPORTED_MODULE_1__[\"parseListStyleType\"])(format || 'decimal'), false);\n  }\n\n  return result;\n};\n\n//# sourceURL=webpack://html2canvas/./src/PseudoNodeContent.js?");

/***/ }),

/***/ "./src/Renderer.js":
/*!*************************!*\
  !*** ./src/Renderer.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Renderer; });\n/* harmony import */ var _Bounds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bounds */ \"./src/Bounds.js\");\n/* harmony import */ var _Font__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Font */ \"./src/Font.js\");\n/* harmony import */ var _Gradient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Gradient */ \"./src/Gradient.js\");\n/* harmony import */ var _TextContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextContainer */ \"./src/TextContainer.js\");\n/* harmony import */ var _parsing_background__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parsing/background */ \"./src/parsing/background.js\");\n/* harmony import */ var _parsing_border__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parsing/border */ \"./src/parsing/border.js\");\n\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\n\nvar Renderer =\n/*#__PURE__*/\nfunction () {\n  function Renderer(target, options) {\n    _classCallCheck(this, Renderer);\n\n    this.target = target;\n    this.options = options;\n    target.render(options);\n  }\n\n  _createClass(Renderer, [{\n    key: \"renderNode\",\n    value: function renderNode(container) {\n      if (container.isVisible()) {\n        this.renderNodeBackgroundAndBorders(container);\n        this.renderNodeContent(container);\n      }\n    }\n  }, {\n    key: \"renderNodeContent\",\n    value: function renderNodeContent(container) {\n      var _this = this;\n\n      var callback = function callback() {\n        if (container.childNodes.length) {\n          container.childNodes.forEach(function (child) {\n            if (child instanceof _TextContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\n              var style = child.parent.style;\n\n              _this.target.renderTextNode(child.bounds, style.color, style.font, style.textDecoration, style.textShadow);\n            } else {\n              _this.target.drawShape(child, container.style.color);\n            }\n          });\n        }\n\n        if (container.image) {\n          var _image = _this.options.imageStore.get(container.image);\n\n          if (_image) {\n            var contentBox = Object(_Bounds__WEBPACK_IMPORTED_MODULE_0__[\"calculateContentBox\"])(container.bounds, container.style.padding, container.style.border);\n\n            var _width = typeof _image.width === 'number' && _image.width > 0 ? _image.width : contentBox.width;\n\n            var _height = typeof _image.height === 'number' && _image.height > 0 ? _image.height : contentBox.height;\n\n            if (_width > 0 && _height > 0) {\n              _this.target.clip([Object(_Bounds__WEBPACK_IMPORTED_MODULE_0__[\"calculatePaddingBoxPath\"])(container.curvedBounds)], function () {\n                _this.target.drawImage(_image, new _Bounds__WEBPACK_IMPORTED_MODULE_0__[\"Bounds\"](0, 0, _width, _height), contentBox);\n              });\n            }\n          }\n        }\n      };\n\n      var paths = container.getClipPaths();\n\n      if (paths.length) {\n        this.target.clip(paths, callback);\n      } else {\n        callback();\n      }\n    }\n  }, {\n    key: \"renderNodeBackgroundAndBorders\",\n    value: function renderNodeBackgroundAndBorders(container) {\n      var _this2 = this;\n\n      var HAS_BACKGROUND = !container.style.background.backgroundColor.isTransparent() || container.style.background.backgroundImage.length;\n      var hasRenderableBorders = container.style.border.some(function (border) {\n        return border.borderStyle !== _parsing_border__WEBPACK_IMPORTED_MODULE_5__[\"BORDER_STYLE\"].NONE && !border.borderColor.isTransparent();\n      });\n\n      var callback = function callback() {\n        var backgroundPaintingArea = Object(_parsing_background__WEBPACK_IMPORTED_MODULE_4__[\"calculateBackgroungPaintingArea\"])(container.curvedBounds, container.style.background.backgroundClip);\n\n        if (HAS_BACKGROUND) {\n          _this2.target.clip([backgroundPaintingArea], function () {\n            if (!container.style.background.backgroundColor.isTransparent()) {\n              _this2.target.fill(container.style.background.backgroundColor);\n            }\n\n            _this2.renderBackgroundImage(container);\n          });\n        }\n\n        container.style.border.forEach(function (border, side) {\n          if (border.borderStyle !== _parsing_border__WEBPACK_IMPORTED_MODULE_5__[\"BORDER_STYLE\"].NONE && !border.borderColor.isTransparent()) {\n            _this2.renderBorder(border, side, container.curvedBounds);\n          }\n        });\n      };\n\n      if (HAS_BACKGROUND || hasRenderableBorders) {\n        var paths = container.parent ? container.parent.getClipPaths() : [];\n\n        if (paths.length) {\n          this.target.clip(paths, callback);\n        } else {\n          callback();\n        }\n      }\n    }\n  }, {\n    key: \"renderBackgroundImage\",\n    value: function renderBackgroundImage(container) {\n      var _this3 = this;\n\n      container.style.background.backgroundImage.slice(0).reverse().forEach(function (backgroundImage) {\n        if (backgroundImage.source.method === 'url' && backgroundImage.source.args.length) {\n          _this3.renderBackgroundRepeat(container, backgroundImage);\n        } else if (/gradient/i.test(backgroundImage.source.method)) {\n          _this3.renderBackgroundGradient(container, backgroundImage);\n        }\n      });\n    }\n  }, {\n    key: \"renderBackgroundRepeat\",\n    value: function renderBackgroundRepeat(container, background) {\n      var image = this.options.imageStore.get(background.source.args[0]);\n\n      if (image) {\n        var backgroundPositioningArea = Object(_parsing_background__WEBPACK_IMPORTED_MODULE_4__[\"calculateBackgroungPositioningArea\"])(container.style.background.backgroundOrigin, container.bounds, container.style.padding, container.style.border);\n        var backgroundImageSize = Object(_parsing_background__WEBPACK_IMPORTED_MODULE_4__[\"calculateBackgroundSize\"])(background, image, backgroundPositioningArea);\n        var position = Object(_parsing_background__WEBPACK_IMPORTED_MODULE_4__[\"calculateBackgroundPosition\"])(background.position, backgroundImageSize, backgroundPositioningArea);\n\n        var _path = Object(_parsing_background__WEBPACK_IMPORTED_MODULE_4__[\"calculateBackgroundRepeatPath\"])(background, position, backgroundImageSize, backgroundPositioningArea, container.bounds);\n\n        var _offsetX = Math.round(backgroundPositioningArea.left + position.x);\n\n        var _offsetY = Math.round(backgroundPositioningArea.top + position.y);\n\n        this.target.renderRepeat(_path, image, backgroundImageSize, _offsetX, _offsetY);\n      }\n    }\n  }, {\n    key: \"renderBackgroundGradient\",\n    value: function renderBackgroundGradient(container, background) {\n      var backgroundPositioningArea = Object(_parsing_background__WEBPACK_IMPORTED_MODULE_4__[\"calculateBackgroungPositioningArea\"])(container.style.background.backgroundOrigin, container.bounds, container.style.padding, container.style.border);\n      var backgroundImageSize = Object(_parsing_background__WEBPACK_IMPORTED_MODULE_4__[\"calculateGradientBackgroundSize\"])(background, backgroundPositioningArea);\n      var position = Object(_parsing_background__WEBPACK_IMPORTED_MODULE_4__[\"calculateBackgroundPosition\"])(background.position, backgroundImageSize, backgroundPositioningArea);\n      var gradientBounds = new _Bounds__WEBPACK_IMPORTED_MODULE_0__[\"Bounds\"](Math.round(backgroundPositioningArea.left + position.x), Math.round(backgroundPositioningArea.top + position.y), backgroundImageSize.width, backgroundImageSize.height);\n      var gradient = Object(_Gradient__WEBPACK_IMPORTED_MODULE_2__[\"parseGradient\"])(container, background.source, gradientBounds);\n\n      if (gradient) {\n        switch (gradient.type) {\n          case _Gradient__WEBPACK_IMPORTED_MODULE_2__[\"GRADIENT_TYPE\"].LINEAR_GRADIENT:\n            // $FlowFixMe\n            this.target.renderLinearGradient(gradientBounds, gradient);\n            break;\n\n          case _Gradient__WEBPACK_IMPORTED_MODULE_2__[\"GRADIENT_TYPE\"].RADIAL_GRADIENT:\n            // $FlowFixMe\n            this.target.renderRadialGradient(gradientBounds, gradient);\n            break;\n        }\n      }\n    }\n  }, {\n    key: \"renderBorder\",\n    value: function renderBorder(border, side, curvePoints) {\n      this.target.drawShape(Object(_Bounds__WEBPACK_IMPORTED_MODULE_0__[\"parsePathForBorder\"])(curvePoints, side), border.borderColor);\n    }\n  }, {\n    key: \"renderStack\",\n    value: function renderStack(stack) {\n      var _this4 = this;\n\n      if (stack.container.isVisible()) {\n        var _opacity = stack.getOpacity();\n\n        if (_opacity !== this._opacity) {\n          this.target.setOpacity(stack.getOpacity());\n          this._opacity = _opacity;\n        }\n\n        var transform = stack.container.style.transform;\n\n        if (transform !== null) {\n          this.target.transform(stack.container.bounds.left + transform.transformOrigin[0].value, stack.container.bounds.top + transform.transformOrigin[1].value, transform.transform, function () {\n            return _this4.renderStackContent(stack);\n          });\n        } else {\n          this.renderStackContent(stack);\n        }\n      }\n    }\n  }, {\n    key: \"renderStackContent\",\n    value: function renderStackContent(stack) {\n      var _splitStackingContext = splitStackingContexts(stack),\n          _splitStackingContext2 = _slicedToArray(_splitStackingContext, 5),\n          negativeZIndex = _splitStackingContext2[0],\n          zeroOrAutoZIndexOrTransformedOrOpacity = _splitStackingContext2[1],\n          positiveZIndex = _splitStackingContext2[2],\n          nonPositionedFloats = _splitStackingContext2[3],\n          nonPositionedInlineLevel = _splitStackingContext2[4];\n\n      var _splitDescendants = splitDescendants(stack),\n          _splitDescendants2 = _slicedToArray(_splitDescendants, 2),\n          inlineLevel = _splitDescendants2[0],\n          nonInlineLevel = _splitDescendants2[1]; // https://www.w3.org/TR/css-position-3/#painting-order\n      // 1. the background and borders of the element forming the stacking context.\n\n\n      this.renderNodeBackgroundAndBorders(stack.container); // 2. the child stacking contexts with negative stack levels (most negative first).\n\n      negativeZIndex.sort(sortByZIndex).forEach(this.renderStack, this); // 3. For all its in-flow, non-positioned, block-level descendants in tree order:\n\n      this.renderNodeContent(stack.container);\n      nonInlineLevel.forEach(this.renderNode, this); // 4. All non-positioned floating descendants, in tree order. For each one of these,\n      // treat the element as if it created a new stacking context, but any positioned descendants and descendants\n      // which actually create a new stacking context should be considered part of the parent stacking context,\n      // not this new one.\n\n      nonPositionedFloats.forEach(this.renderStack, this); // 5. the in-flow, inline-level, non-positioned descendants, including inline tables and inline blocks.\n\n      nonPositionedInlineLevel.forEach(this.renderStack, this);\n      inlineLevel.forEach(this.renderNode, this); // 6. All positioned, opacity or transform descendants, in tree order that fall into the following categories:\n      //  All positioned descendants with 'z-index: auto' or 'z-index: 0', in tree order.\n      //  For those with 'z-index: auto', treat the element as if it created a new stacking context,\n      //  but any positioned descendants and descendants which actually create a new stacking context should be\n      //  considered part of the parent stacking context, not this new one. For those with 'z-index: 0',\n      //  treat the stacking context generated atomically.\n      //\n      //  All opacity descendants with opacity less than 1\n      //\n      //  All transform descendants with transform other than none\n\n      zeroOrAutoZIndexOrTransformedOrOpacity.forEach(this.renderStack, this); // 7. Stacking contexts formed by positioned descendants with z-indices greater than or equal to 1 in z-index\n      // order (smallest first) then tree order.\n\n      positiveZIndex.sort(sortByZIndex).forEach(this.renderStack, this);\n    }\n  }, {\n    key: \"render\",\n    value: function render(stack) {\n      var _this5 = this;\n\n      if (this.options.backgroundColor) {\n        this.target.rectangle(this.options.x, this.options.y, this.options.width, this.options.height, this.options.backgroundColor);\n      }\n\n      this.renderStack(stack);\n      var target = this.target.getTarget();\n\n      if (true) {\n        return target.then(function (output) {\n          _this5.options.logger.log(\"Render completed\");\n\n          return output;\n        });\n      }\n\n      return target;\n    }\n  }]);\n\n  return Renderer;\n}();\n\n\n\nvar splitDescendants = function splitDescendants(stack) {\n  var inlineLevel = [];\n  var nonInlineLevel = [];\n  var length = stack.children.length;\n\n  for (var i = 0; i < length; i++) {\n    var child = stack.children[i];\n\n    if (child.isInlineLevel()) {\n      inlineLevel.push(child);\n    } else {\n      nonInlineLevel.push(child);\n    }\n  }\n\n  return [inlineLevel, nonInlineLevel];\n};\n\nvar splitStackingContexts = function splitStackingContexts(stack) {\n  var negativeZIndex = [];\n  var zeroOrAutoZIndexOrTransformedOrOpacity = [];\n  var positiveZIndex = [];\n  var nonPositionedFloats = [];\n  var nonPositionedInlineLevel = [];\n  var length = stack.contexts.length;\n\n  for (var i = 0; i < length; i++) {\n    var child = stack.contexts[i];\n\n    if (child.container.isPositioned() || child.container.style.opacity < 1 || child.container.isTransformed()) {\n      if (child.container.style.zIndex.order < 0) {\n        negativeZIndex.push(child);\n      } else if (child.container.style.zIndex.order > 0) {\n        positiveZIndex.push(child);\n      } else {\n        zeroOrAutoZIndexOrTransformedOrOpacity.push(child);\n      }\n    } else {\n      if (child.container.isFloating()) {\n        nonPositionedFloats.push(child);\n      } else {\n        nonPositionedInlineLevel.push(child);\n      }\n    }\n  }\n\n  return [negativeZIndex, zeroOrAutoZIndexOrTransformedOrOpacity, positiveZIndex, nonPositionedFloats, nonPositionedInlineLevel];\n};\n\nvar sortByZIndex = function sortByZIndex(a, b) {\n  if (a.container.style.zIndex.order > b.container.style.zIndex.order) {\n    return 1;\n  } else if (a.container.style.zIndex.order < b.container.style.zIndex.order) {\n    return -1;\n  }\n\n  return a.container.index > b.container.index ? 1 : -1;\n};\n\n//# sourceURL=webpack://html2canvas/./src/Renderer.js?");

/***/ }),

/***/ "./src/ResourceLoader.js":
/*!*******************************!*\
  !*** ./src/ResourceLoader.js ***!
  \*******************************/
/*! exports provided: default, ResourceStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ResourceLoader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ResourceStore\", function() { return ResourceStore; });\n/* harmony import */ var _Feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Feature */ \"./src/Feature.js\");\n/* harmony import */ var _Proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Proxy */ \"./src/Proxy.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar ResourceLoader =\n/*#__PURE__*/\nfunction () {\n  function ResourceLoader(options, logger, window) {\n    _classCallCheck(this, ResourceLoader);\n\n    this.options = options;\n    this._window = window;\n    this.origin = this.getOrigin(window.location.href);\n    this.cache = {};\n    this.logger = logger;\n    this._index = 0;\n  }\n\n  _createClass(ResourceLoader, [{\n    key: \"loadImage\",\n    value: function loadImage(src) {\n      var _this = this;\n\n      if (this.hasResourceInCache(src)) {\n        return src;\n      }\n\n      if (isBlobImage(src)) {\n        this.cache[src] = _loadImage(src, this.options.imageTimeout || 0);\n        return src;\n      }\n\n      if (!isSVG(src) || _Feature__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SUPPORT_SVG_DRAWING) {\n        if (this.options.allowTaint === true || isInlineImage(src) || this.isSameOrigin(src)) {\n          return this.addImage(src, src, false);\n        } else if (!this.isSameOrigin(src)) {\n          if (typeof this.options.proxy === 'string') {\n            this.cache[src] = Object(_Proxy__WEBPACK_IMPORTED_MODULE_1__[\"Proxy\"])(src, this.options).then(function (src) {\n              return _loadImage(src, _this.options.imageTimeout || 0);\n            });\n            return src;\n          } else if (this.options.useCORS === true && _Feature__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SUPPORT_CORS_IMAGES) {\n            return this.addImage(src, src, true);\n          }\n        }\n      }\n    }\n  }, {\n    key: \"inlineImage\",\n    value: function inlineImage(src) {\n      var _this2 = this;\n\n      if (isInlineImage(src)) {\n        return _loadImage(src, this.options.imageTimeout || 0);\n      }\n\n      if (this.hasResourceInCache(src)) {\n        return this.cache[src];\n      }\n\n      if (!this.isSameOrigin(src) && typeof this.options.proxy === 'string') {\n        return this.cache[src] = Object(_Proxy__WEBPACK_IMPORTED_MODULE_1__[\"Proxy\"])(src, this.options).then(function (src) {\n          return _loadImage(src, _this2.options.imageTimeout || 0);\n        });\n      }\n\n      return this.xhrImage(src);\n    }\n  }, {\n    key: \"xhrImage\",\n    value: function xhrImage(src) {\n      var _this3 = this;\n\n      this.cache[src] = new Promise(function (resolve, reject) {\n        var xhr = new XMLHttpRequest();\n\n        xhr.onreadystatechange = function () {\n          if (xhr.readyState === 4) {\n            if (xhr.status !== 200) {\n              reject(\"Failed to fetch image \".concat(src.substring(0, 256), \" with status code \").concat(xhr.status));\n            } else {\n              var reader = new FileReader();\n              reader.addEventListener('load', function () {\n                // $FlowFixMe\n                var result = reader.result;\n                resolve(result);\n              }, false);\n              reader.addEventListener('error', function (e) {\n                return reject(e);\n              }, false);\n              reader.readAsDataURL(xhr.response);\n            }\n          }\n        };\n\n        xhr.responseType = 'blob';\n\n        if (_this3.options.imageTimeout) {\n          var timeout = _this3.options.imageTimeout;\n          xhr.timeout = timeout;\n\n          xhr.ontimeout = function () {\n            return reject( true ? \"Timed out (\".concat(timeout, \"ms) fetching \").concat(src.substring(0, 256)) : undefined);\n          };\n        }\n\n        xhr.open('GET', src, true);\n        xhr.send();\n      }).then(function (src) {\n        return _loadImage(src, _this3.options.imageTimeout || 0);\n      });\n      return this.cache[src];\n    }\n  }, {\n    key: \"loadCanvas\",\n    value: function loadCanvas(node) {\n      var key = String(this._index++);\n      this.cache[key] = Promise.resolve(node);\n      return key;\n    }\n  }, {\n    key: \"hasResourceInCache\",\n    value: function hasResourceInCache(key) {\n      return typeof this.cache[key] !== 'undefined';\n    }\n  }, {\n    key: \"addImage\",\n    value: function addImage(key, src, useCORS) {\n      var _this4 = this;\n\n      if (true) {\n        this.logger.log(\"Added image \".concat(key.substring(0, 256)));\n      }\n\n      this.cache[key] = new Promise(function (resolve, reject) {\n        var img = new Image();\n\n        img.onload = function () {\n          return resolve(img);\n        }; //ios safari 10.3 taints canvas with data urls unless crossOrigin is set to anonymous\n\n\n        if (isInlineBase64Image(src) || useCORS) {\n          img.crossOrigin = 'anonymous';\n        }\n\n        img.onerror = reject;\n        img.src = src;\n\n        if (img.complete === true) {\n          // Inline XML images may fail to parse, throwing an Error later on\n          setTimeout(function () {\n            resolve(img);\n          }, 500);\n        }\n\n        if (_this4.options.imageTimeout) {\n          var timeout = _this4.options.imageTimeout;\n          setTimeout(function () {\n            return reject( true ? \"Timed out (\".concat(timeout, \"ms) fetching \").concat(src.substring(0, 256)) : undefined);\n          }, timeout);\n        }\n      });\n      return key;\n    }\n  }, {\n    key: \"isSameOrigin\",\n    value: function isSameOrigin(url) {\n      return this.getOrigin(url) === this.origin;\n    }\n  }, {\n    key: \"getOrigin\",\n    value: function getOrigin(url) {\n      var link = this._link || (this._link = this._window.document.createElement('a'));\n\n      link.href = url;\n      link.href = link.href; // IE9, LOL! - http://jsfiddle.net/niklasvh/2e48b/\n\n      return link.protocol + link.hostname + link.port;\n    }\n  }, {\n    key: \"ready\",\n    value: function ready() {\n      var _this5 = this;\n\n      var keys = Object.keys(this.cache);\n      var values = keys.map(function (str) {\n        return _this5.cache[str].catch(function (e) {\n          if (true) {\n            _this5.logger.log(\"Unable to load image\", e);\n          }\n\n          return null;\n        });\n      });\n      return Promise.all(values).then(function (images) {\n        if (true) {\n          _this5.logger.log(\"Finished loading \".concat(images.length, \" images\"), images);\n        }\n\n        return new ResourceStore(keys, images);\n      });\n    }\n  }]);\n\n  return ResourceLoader;\n}();\n\n\nvar ResourceStore =\n/*#__PURE__*/\nfunction () {\n  function ResourceStore(keys, resources) {\n    _classCallCheck(this, ResourceStore);\n\n    this._keys = keys;\n    this._resources = resources;\n  }\n\n  _createClass(ResourceStore, [{\n    key: \"get\",\n    value: function get(key) {\n      var index = this._keys.indexOf(key);\n\n      return index === -1 ? null : this._resources[index];\n    }\n  }]);\n\n  return ResourceStore;\n}();\nvar INLINE_SVG = /^data:image\\/svg\\+xml/i;\nvar INLINE_BASE64 = /^data:image\\/.*;base64,/i;\nvar INLINE_IMG = /^data:image\\/.*/i;\n\nvar isInlineImage = function isInlineImage(src) {\n  return INLINE_IMG.test(src);\n};\n\nvar isInlineBase64Image = function isInlineBase64Image(src) {\n  return INLINE_BASE64.test(src);\n};\n\nvar isBlobImage = function isBlobImage(src) {\n  return src.substr(0, 4) === 'blob';\n};\n\nvar isSVG = function isSVG(src) {\n  return src.substr(-3).toLowerCase() === 'svg' || INLINE_SVG.test(src);\n};\n\nvar _loadImage = function _loadImage(src, timeout) {\n  return new Promise(function (resolve, reject) {\n    var img = new Image();\n\n    img.onload = function () {\n      return resolve(img);\n    };\n\n    img.onerror = reject;\n    img.src = src;\n\n    if (img.complete === true) {\n      // Inline XML images may fail to parse, throwing an Error later on\n      setTimeout(function () {\n        resolve(img);\n      }, 500);\n    }\n\n    if (timeout) {\n      setTimeout(function () {\n        return reject( true ? \"Timed out (\".concat(timeout, \"ms) loading image\") : undefined);\n      }, timeout);\n    }\n  });\n};\n\n//# sourceURL=webpack://html2canvas/./src/ResourceLoader.js?");

/***/ }),

/***/ "./src/StackingContext.js":
/*!********************************!*\
  !*** ./src/StackingContext.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return StackingContext; });\n/* harmony import */ var _NodeContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NodeContainer */ \"./src/NodeContainer.js\");\n/* harmony import */ var _parsing_position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsing/position */ \"./src/parsing/position.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar StackingContext =\n/*#__PURE__*/\nfunction () {\n  function StackingContext(container, parent, treatAsRealStackingContext) {\n    _classCallCheck(this, StackingContext);\n\n    this.container = container;\n    this.parent = parent;\n    this.contexts = [];\n    this.children = [];\n    this.treatAsRealStackingContext = treatAsRealStackingContext;\n  }\n\n  _createClass(StackingContext, [{\n    key: \"getOpacity\",\n    value: function getOpacity() {\n      return this.parent ? this.container.style.opacity * this.parent.getOpacity() : this.container.style.opacity;\n    }\n  }, {\n    key: \"getRealParentStackingContext\",\n    value: function getRealParentStackingContext() {\n      return !this.parent || this.treatAsRealStackingContext ? this : this.parent.getRealParentStackingContext();\n    }\n  }]);\n\n  return StackingContext;\n}();\n\n\n\n//# sourceURL=webpack://html2canvas/./src/StackingContext.js?");

/***/ }),

/***/ "./src/TextBounds.js":
/*!***************************!*\
  !*** ./src/TextBounds.js ***!
  \***************************/
/*! exports provided: TextBounds, parseTextBounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TextBounds\", function() { return TextBounds; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseTextBounds\", function() { return parseTextBounds; });\n/* harmony import */ var _Bounds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bounds */ \"./src/Bounds.js\");\n/* harmony import */ var _parsing_textDecoration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsing/textDecoration */ \"./src/parsing/textDecoration.js\");\n/* harmony import */ var _Feature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Feature */ \"./src/Feature.js\");\n/* harmony import */ var _Unicode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Unicode */ \"./src/Unicode.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\n\n\nvar TextBounds = function TextBounds(text, bounds) {\n  _classCallCheck(this, TextBounds);\n\n  this.text = text;\n  this.bounds = bounds;\n};\nvar parseTextBounds = function parseTextBounds(value, parent, node) {\n  var letterRendering = parent.style.letterSpacing !== 0;\n  var textList = letterRendering ? Object(_Unicode__WEBPACK_IMPORTED_MODULE_3__[\"toCodePoints\"])(value).map(function (i) {\n    return Object(_Unicode__WEBPACK_IMPORTED_MODULE_3__[\"fromCodePoint\"])(i);\n  }) : Object(_Unicode__WEBPACK_IMPORTED_MODULE_3__[\"breakWords\"])(value, parent);\n  var length = textList.length;\n  var defaultView = node.parentNode ? node.parentNode.ownerDocument.defaultView : null;\n  var scrollX = defaultView ? defaultView.pageXOffset : 0;\n  var scrollY = defaultView ? defaultView.pageYOffset : 0;\n  var textBounds = [];\n  var offset = 0;\n\n  for (var i = 0; i < length; i++) {\n    var text = textList[i];\n\n    if (parent.style.textDecoration !== _parsing_textDecoration__WEBPACK_IMPORTED_MODULE_1__[\"TEXT_DECORATION\"].NONE || text.trim().length > 0) {\n      if (_Feature__WEBPACK_IMPORTED_MODULE_2__[\"default\"].SUPPORT_RANGE_BOUNDS) {\n        textBounds.push(new TextBounds(text, getRangeBounds(node, offset, text.length, scrollX, scrollY)));\n      } else {\n        var replacementNode = node.splitText(text.length);\n        textBounds.push(new TextBounds(text, getWrapperBounds(node, scrollX, scrollY)));\n        node = replacementNode;\n      }\n    } else if (!_Feature__WEBPACK_IMPORTED_MODULE_2__[\"default\"].SUPPORT_RANGE_BOUNDS) {\n      node = node.splitText(text.length);\n    }\n\n    offset += text.length;\n  }\n\n  return textBounds;\n};\n\nvar getWrapperBounds = function getWrapperBounds(node, scrollX, scrollY) {\n  var wrapper = node.ownerDocument.createElement('html2canvaswrapper');\n  wrapper.appendChild(node.cloneNode(true));\n  var parentNode = node.parentNode;\n\n  if (parentNode) {\n    parentNode.replaceChild(wrapper, node);\n    var bounds = Object(_Bounds__WEBPACK_IMPORTED_MODULE_0__[\"parseBounds\"])(wrapper, scrollX, scrollY);\n\n    if (wrapper.firstChild) {\n      parentNode.replaceChild(wrapper.firstChild, wrapper);\n    }\n\n    return bounds;\n  }\n\n  return new _Bounds__WEBPACK_IMPORTED_MODULE_0__[\"Bounds\"](0, 0, 0, 0);\n};\n\nvar getRangeBounds = function getRangeBounds(node, offset, length, scrollX, scrollY) {\n  var range = node.ownerDocument.createRange();\n  range.setStart(node, offset);\n  range.setEnd(node, offset + length);\n  return _Bounds__WEBPACK_IMPORTED_MODULE_0__[\"Bounds\"].fromClientRect(range.getBoundingClientRect(), scrollX, scrollY);\n};\n\n//# sourceURL=webpack://html2canvas/./src/TextBounds.js?");

/***/ }),

/***/ "./src/TextContainer.js":
/*!******************************!*\
  !*** ./src/TextContainer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TextContainer; });\n/* harmony import */ var _parsing_textTransform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parsing/textTransform */ \"./src/parsing/textTransform.js\");\n/* harmony import */ var _TextBounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextBounds */ \"./src/TextBounds.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar TextContainer =\n/*#__PURE__*/\nfunction () {\n  function TextContainer(text, parent, bounds) {\n    _classCallCheck(this, TextContainer);\n\n    this.text = text;\n    this.parent = parent;\n    this.bounds = bounds;\n  }\n\n  _createClass(TextContainer, null, [{\n    key: \"fromTextNode\",\n    value: function fromTextNode(node, parent) {\n      var text = transform(node.data, parent.style.textTransform);\n      return new TextContainer(text, parent, Object(_TextBounds__WEBPACK_IMPORTED_MODULE_1__[\"parseTextBounds\"])(text, parent, node));\n    }\n  }]);\n\n  return TextContainer;\n}();\n\n\nvar CAPITALIZE = /(^|\\s|:|-|\\(|\\))([a-z])/g;\n\nvar transform = function transform(text, _transform) {\n  switch (_transform) {\n    case _parsing_textTransform__WEBPACK_IMPORTED_MODULE_0__[\"TEXT_TRANSFORM\"].LOWERCASE:\n      return text.toLowerCase();\n\n    case _parsing_textTransform__WEBPACK_IMPORTED_MODULE_0__[\"TEXT_TRANSFORM\"].CAPITALIZE:\n      return text.replace(CAPITALIZE, capitalize);\n\n    case _parsing_textTransform__WEBPACK_IMPORTED_MODULE_0__[\"TEXT_TRANSFORM\"].UPPERCASE:\n      return text.toUpperCase();\n\n    default:\n      return text;\n  }\n};\n\nfunction capitalize(m, p1, p2) {\n  if (m.length > 0) {\n    return p1 + p2.toUpperCase();\n  }\n\n  return m;\n}\n\n//# sourceURL=webpack://html2canvas/./src/TextContainer.js?");

/***/ }),

/***/ "./src/Unicode.js":
/*!************************!*\
  !*** ./src/Unicode.js ***!
  \************************/
/*! exports provided: toCodePoints, fromCodePoint, breakWords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"breakWords\", function() { return breakWords; });\n/* harmony import */ var css_line_break__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css-line-break */ \"./node_modules/css-line-break/dist/index.js\");\n/* harmony import */ var css_line_break__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(css_line_break__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _parsing_overflowWrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsing/overflowWrap */ \"./src/parsing/overflowWrap.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"toCodePoints\", function() { return css_line_break__WEBPACK_IMPORTED_MODULE_0__[\"toCodePoints\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"fromCodePoint\", function() { return css_line_break__WEBPACK_IMPORTED_MODULE_0__[\"fromCodePoint\"]; });\n\n\n\n\n\n\nvar breakWords = function breakWords(str, parent) {\n  var breaker = Object(css_line_break__WEBPACK_IMPORTED_MODULE_0__[\"LineBreaker\"])(str, {\n    lineBreak: parent.style.lineBreak,\n    wordBreak: parent.style.overflowWrap === _parsing_overflowWrap__WEBPACK_IMPORTED_MODULE_1__[\"OVERFLOW_WRAP\"].BREAK_WORD ? 'break-word' : parent.style.wordBreak\n  });\n  var words = [];\n  var bk;\n\n  while (!(bk = breaker.next()).done) {\n    words.push(bk.value.slice());\n  }\n\n  return words;\n};\n\n//# sourceURL=webpack://html2canvas/./src/Unicode.js?");

/***/ }),

/***/ "./src/Util.js":
/*!*********************!*\
  !*** ./src/Util.js ***!
  \*********************/
/*! exports provided: contains, distance, copyCSSStyles, SMALL_IMAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contains\", function() { return contains; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"distance\", function() { return distance; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"copyCSSStyles\", function() { return copyCSSStyles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SMALL_IMAGE\", function() { return SMALL_IMAGE; });\n\n\nvar contains = function contains(bit, value) {\n  return (bit & value) !== 0;\n};\nvar distance = function distance(a, b) {\n  return Math.sqrt(a * a + b * b);\n};\nvar copyCSSStyles = function copyCSSStyles(style, target) {\n  // Edge does not provide value for cssText\n  for (var i = style.length - 1; i >= 0; i--) {\n    var property = style.item(i); // Safari shows pseudoelements if content is set\n\n    if (property !== 'content') {\n      target.style.setProperty(property, style.getPropertyValue(property));\n    }\n  }\n\n  return target;\n};\nvar SMALL_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';\n\n//# sourceURL=webpack://html2canvas/./src/Util.js?");

/***/ }),

/***/ "./src/Window.js":
/*!***********************!*\
  !*** ./src/Window.js ***!
  \***********************/
/*! exports provided: renderElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderElement\", function() { return renderElement; });\n/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logger */ \"./src/Logger.js\");\n/* harmony import */ var _NodeParser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NodeParser */ \"./src/NodeParser.js\");\n/* harmony import */ var _Renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Renderer */ \"./src/Renderer.js\");\n/* harmony import */ var _renderer_ForeignObjectRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderer/ForeignObjectRenderer */ \"./src/renderer/ForeignObjectRenderer.js\");\n/* harmony import */ var _Feature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Feature */ \"./src/Feature.js\");\n/* harmony import */ var _Bounds__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Bounds */ \"./src/Bounds.js\");\n/* harmony import */ var _Clone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Clone */ \"./src/Clone.js\");\n/* harmony import */ var _Font__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Font */ \"./src/Font.js\");\n/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Color */ \"./src/Color.js\");\n\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\n\nvar renderElement = function renderElement(element, options, logger) {\n  var ownerDocument = element.ownerDocument;\n  var windowBounds = new _Bounds__WEBPACK_IMPORTED_MODULE_5__[\"Bounds\"](options.scrollX, options.scrollY, options.windowWidth, options.windowHeight); // http://www.w3.org/TR/css3-background/#special-backgrounds\n\n  var documentBackgroundColor = ownerDocument.documentElement ? new _Color__WEBPACK_IMPORTED_MODULE_8__[\"default\"](getComputedStyle(ownerDocument.documentElement).backgroundColor) : _Color__WEBPACK_IMPORTED_MODULE_8__[\"TRANSPARENT\"];\n  var bodyBackgroundColor = ownerDocument.body ? new _Color__WEBPACK_IMPORTED_MODULE_8__[\"default\"](getComputedStyle(ownerDocument.body).backgroundColor) : _Color__WEBPACK_IMPORTED_MODULE_8__[\"TRANSPARENT\"];\n  var backgroundColor = element === ownerDocument.documentElement ? documentBackgroundColor.isTransparent() ? bodyBackgroundColor.isTransparent() ? options.backgroundColor ? new _Color__WEBPACK_IMPORTED_MODULE_8__[\"default\"](options.backgroundColor) : null : bodyBackgroundColor : documentBackgroundColor : options.backgroundColor ? new _Color__WEBPACK_IMPORTED_MODULE_8__[\"default\"](options.backgroundColor) : null;\n  return (options.foreignObjectRendering ? // $FlowFixMe\n  _Feature__WEBPACK_IMPORTED_MODULE_4__[\"default\"].SUPPORT_FOREIGNOBJECT_DRAWING : Promise.resolve(false)).then(function (supportForeignObject) {\n    return supportForeignObject ? function (cloner) {\n      if (true) {\n        logger.log(\"Document cloned, using foreignObject rendering\");\n      }\n\n      return cloner.inlineFonts(ownerDocument).then(function () {\n        return cloner.resourceLoader.ready();\n      }).then(function () {\n        var renderer = new _renderer_ForeignObjectRenderer__WEBPACK_IMPORTED_MODULE_3__[\"default\"](cloner.documentElement);\n        var defaultView = ownerDocument.defaultView;\n        var scrollX = defaultView.pageXOffset;\n        var scrollY = defaultView.pageYOffset;\n        var isDocument = element.tagName === 'HTML' || element.tagName === 'BODY';\n\n        var _ref = isDocument ? Object(_Bounds__WEBPACK_IMPORTED_MODULE_5__[\"parseDocumentSize\"])(ownerDocument) : Object(_Bounds__WEBPACK_IMPORTED_MODULE_5__[\"parseBounds\"])(element, scrollX, scrollY),\n            width = _ref.width,\n            height = _ref.height,\n            left = _ref.left,\n            top = _ref.top;\n\n        return renderer.render({\n          backgroundColor: backgroundColor,\n          logger: logger,\n          scale: options.scale,\n          x: typeof options.x === 'number' ? options.x : left,\n          y: typeof options.y === 'number' ? options.y : top,\n          width: typeof options.width === 'number' ? options.width : Math.ceil(width),\n          height: typeof options.height === 'number' ? options.height : Math.ceil(height),\n          windowWidth: options.windowWidth,\n          windowHeight: options.windowHeight,\n          scrollX: options.scrollX,\n          scrollY: options.scrollY\n        });\n      });\n    }(new _Clone__WEBPACK_IMPORTED_MODULE_6__[\"DocumentCloner\"](element, options, logger, true, renderElement)) : Object(_Clone__WEBPACK_IMPORTED_MODULE_6__[\"cloneWindow\"])(ownerDocument, windowBounds, element, options, logger, renderElement).then(function (_ref2) {\n      var _ref3 = _slicedToArray(_ref2, 3),\n          container = _ref3[0],\n          clonedElement = _ref3[1],\n          resourceLoader = _ref3[2];\n\n      if (true) {\n        logger.log(\"Document cloned, using computed rendering\");\n      }\n\n      var stack = Object(_NodeParser__WEBPACK_IMPORTED_MODULE_1__[\"NodeParser\"])(clonedElement, resourceLoader, logger);\n      var clonedDocument = clonedElement.ownerDocument;\n\n      if (backgroundColor === stack.container.style.background.backgroundColor) {\n        stack.container.style.background.backgroundColor = _Color__WEBPACK_IMPORTED_MODULE_8__[\"TRANSPARENT\"];\n      }\n\n      return resourceLoader.ready().then(function (imageStore) {\n        var fontMetrics = new _Font__WEBPACK_IMPORTED_MODULE_7__[\"FontMetrics\"](clonedDocument);\n\n        if (true) {\n          logger.log(\"Starting renderer\");\n        }\n\n        var defaultView = clonedDocument.defaultView;\n        var scrollX = defaultView.pageXOffset;\n        var scrollY = defaultView.pageYOffset;\n        var isDocument = clonedElement.tagName === 'HTML' || clonedElement.tagName === 'BODY';\n\n        var _ref4 = isDocument ? Object(_Bounds__WEBPACK_IMPORTED_MODULE_5__[\"parseDocumentSize\"])(ownerDocument) : Object(_Bounds__WEBPACK_IMPORTED_MODULE_5__[\"parseBounds\"])(clonedElement, scrollX, scrollY),\n            width = _ref4.width,\n            height = _ref4.height,\n            left = _ref4.left,\n            top = _ref4.top;\n\n        var renderOptions = {\n          backgroundColor: backgroundColor,\n          fontMetrics: fontMetrics,\n          imageStore: imageStore,\n          logger: logger,\n          scale: options.scale,\n          x: typeof options.x === 'number' ? options.x : left,\n          y: typeof options.y === 'number' ? options.y : top,\n          width: typeof options.width === 'number' ? options.width : Math.ceil(width),\n          height: typeof options.height === 'number' ? options.height : Math.ceil(height)\n        };\n\n        if (Array.isArray(options.target)) {\n          return Promise.all(options.target.map(function (target) {\n            var renderer = new _Renderer__WEBPACK_IMPORTED_MODULE_2__[\"default\"](target, renderOptions);\n            return renderer.render(stack);\n          }));\n        } else {\n          var renderer = new _Renderer__WEBPACK_IMPORTED_MODULE_2__[\"default\"](options.target, renderOptions);\n          var canvas = renderer.render(stack);\n\n          if (options.removeContainer === true) {\n            if (container.parentNode) {\n              container.parentNode.removeChild(container);\n            } else if (true) {\n              logger.log(\"Cannot detach cloned iframe as it is not in the DOM anymore\");\n            }\n          }\n\n          return canvas;\n        }\n      });\n    });\n  });\n};\n\n//# sourceURL=webpack://html2canvas/./src/Window.js?");

/***/ }),

/***/ "./src/drawing/BezierCurve.js":
/*!************************************!*\
  !*** ./src/drawing/BezierCurve.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BezierCurve; });\n/* harmony import */ var _Path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Path */ \"./src/drawing/Path.js\");\n/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vector */ \"./src/drawing/Vector.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar lerp = function lerp(a, b, t) {\n  return new _Vector__WEBPACK_IMPORTED_MODULE_1__[\"default\"](a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t);\n};\n\nvar BezierCurve =\n/*#__PURE__*/\nfunction () {\n  function BezierCurve(start, startControl, endControl, end) {\n    _classCallCheck(this, BezierCurve);\n\n    this.type = _Path__WEBPACK_IMPORTED_MODULE_0__[\"PATH\"].BEZIER_CURVE;\n    this.start = start;\n    this.startControl = startControl;\n    this.endControl = endControl;\n    this.end = end;\n  }\n\n  _createClass(BezierCurve, [{\n    key: \"subdivide\",\n    value: function subdivide(t, firstHalf) {\n      var ab = lerp(this.start, this.startControl, t);\n      var bc = lerp(this.startControl, this.endControl, t);\n      var cd = lerp(this.endControl, this.end, t);\n      var abbc = lerp(ab, bc, t);\n      var bccd = lerp(bc, cd, t);\n      var dest = lerp(abbc, bccd, t);\n      return firstHalf ? new BezierCurve(this.start, ab, abbc, dest) : new BezierCurve(dest, bccd, cd, this.end);\n    }\n  }, {\n    key: \"reverse\",\n    value: function reverse() {\n      return new BezierCurve(this.end, this.endControl, this.startControl, this.start);\n    }\n  }]);\n\n  return BezierCurve;\n}();\n\n\n\n//# sourceURL=webpack://html2canvas/./src/drawing/BezierCurve.js?");

/***/ }),

/***/ "./src/drawing/Circle.js":
/*!*******************************!*\
  !*** ./src/drawing/Circle.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Circle; });\n/* harmony import */ var _Path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Path */ \"./src/drawing/Path.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\nvar Circle = function Circle(x, y, radius) {\n  _classCallCheck(this, Circle);\n\n  this.type = _Path__WEBPACK_IMPORTED_MODULE_0__[\"PATH\"].CIRCLE;\n  this.x = x;\n  this.y = y;\n  this.radius = radius;\n\n  if (true) {\n    if (isNaN(x)) {\n      console.error(\"Invalid x value given for Circle\");\n    }\n\n    if (isNaN(y)) {\n      console.error(\"Invalid y value given for Circle\");\n    }\n\n    if (isNaN(radius)) {\n      console.error(\"Invalid radius value given for Circle\");\n    }\n  }\n};\n\n\n\n//# sourceURL=webpack://html2canvas/./src/drawing/Circle.js?");

/***/ }),

/***/ "./src/drawing/Path.js":
/*!*****************************!*\
  !*** ./src/drawing/Path.js ***!
  \*****************************/
/*! exports provided: PATH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PATH\", function() { return PATH; });\n\n\nvar PATH = {\n  VECTOR: 0,\n  BEZIER_CURVE: 1,\n  CIRCLE: 2\n};\n\n//# sourceURL=webpack://html2canvas/./src/drawing/Path.js?");

/***/ }),

/***/ "./src/drawing/Size.js":
/*!*****************************!*\
  !*** ./src/drawing/Size.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Size; });\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Size = function Size(width, height) {\n  _classCallCheck(this, Size);\n\n  this.width = width;\n  this.height = height;\n};\n\n\n\n//# sourceURL=webpack://html2canvas/./src/drawing/Size.js?");

/***/ }),

/***/ "./src/drawing/Vector.js":
/*!*******************************!*\
  !*** ./src/drawing/Vector.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Vector; });\n/* harmony import */ var _Path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Path */ \"./src/drawing/Path.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\nvar Vector = function Vector(x, y) {\n  _classCallCheck(this, Vector);\n\n  this.type = _Path__WEBPACK_IMPORTED_MODULE_0__[\"PATH\"].VECTOR;\n  this.x = x;\n  this.y = y;\n\n  if (true) {\n    if (isNaN(x)) {\n      console.error(\"Invalid x value given for Vector\");\n    }\n\n    if (isNaN(y)) {\n      console.error(\"Invalid y value given for Vector\");\n    }\n  }\n};\n\n\n\n//# sourceURL=webpack://html2canvas/./src/drawing/Vector.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _renderer_CanvasRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderer/CanvasRenderer */ \"./src/renderer/CanvasRenderer.js\");\n/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logger */ \"./src/Logger.js\");\n/* harmony import */ var _Window__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Window */ \"./src/Window.js\");\n\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar html2canvas = function html2canvas(element, conf) {\n  var config = conf || {};\n  var logger = new _Logger__WEBPACK_IMPORTED_MODULE_1__[\"default\"](typeof config.logging === 'boolean' ? config.logging : true);\n  logger.log(\"html2canvas \".concat(\"1.0.0-rc.1\"));\n\n  if ( true && typeof config.onrendered === 'function') {\n    logger.error(\"onrendered option is deprecated, html2canvas returns a Promise with the canvas as the value\");\n  }\n\n  var ownerDocument = element.ownerDocument;\n\n  if (!ownerDocument) {\n    return Promise.reject(\"Provided element is not within a Document\");\n  }\n\n  var defaultView = ownerDocument.defaultView;\n  var defaultOptions = {\n    allowTaint: false,\n    backgroundColor: '#ffffff',\n    imageTimeout: 15000,\n    logging: true,\n    proxy: null,\n    removeContainer: true,\n    foreignObjectRendering: false,\n    scale: defaultView.devicePixelRatio || 1,\n    target: new _renderer_CanvasRenderer__WEBPACK_IMPORTED_MODULE_0__[\"default\"](config.canvas),\n    useCORS: false,\n    windowWidth: defaultView.innerWidth,\n    windowHeight: defaultView.innerHeight,\n    scrollX: defaultView.pageXOffset,\n    scrollY: defaultView.pageYOffset\n  };\n  var result = Object(_Window__WEBPACK_IMPORTED_MODULE_2__[\"renderElement\"])(element, _objectSpread({}, defaultOptions, config), logger);\n\n  if (true) {\n    return result.catch(function (e) {\n      logger.error(e);\n      throw e;\n    });\n  }\n\n  return result;\n};\n\nhtml2canvas.CanvasRenderer = _renderer_CanvasRenderer__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n/* harmony default export */ __webpack_exports__[\"default\"] = (html2canvas);\n\n//# sourceURL=webpack://html2canvas/./src/index.js?");

/***/ }),

/***/ "./src/parsing/background.js":
/*!***********************************!*\
  !*** ./src/parsing/background.js ***!
  \***********************************/
/*! exports provided: BACKGROUND_REPEAT, BACKGROUND_SIZE, BACKGROUND_CLIP, BACKGROUND_ORIGIN, calculateBackgroundSize, calculateGradientBackgroundSize, calculateBackgroungPaintingArea, calculateBackgroungPositioningArea, calculateBackgroundPosition, calculateBackgroundRepeatPath, parseBackground, parseBackgroundImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BACKGROUND_REPEAT\", function() { return BACKGROUND_REPEAT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BACKGROUND_SIZE\", function() { return BACKGROUND_SIZE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BACKGROUND_CLIP\", function() { return BACKGROUND_CLIP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BACKGROUND_ORIGIN\", function() { return BACKGROUND_ORIGIN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateBackgroundSize\", function() { return calculateBackgroundSize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateGradientBackgroundSize\", function() { return calculateGradientBackgroundSize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateBackgroungPaintingArea\", function() { return calculateBackgroungPaintingArea; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateBackgroungPositioningArea\", function() { return calculateBackgroungPositioningArea; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateBackgroundPosition\", function() { return calculateBackgroundPosition; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateBackgroundRepeatPath\", function() { return calculateBackgroundRepeatPath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseBackground\", function() { return parseBackground; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseBackgroundImage\", function() { return parseBackgroundImage; });\n/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Color */ \"./src/Color.js\");\n/* harmony import */ var _Length__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Length */ \"./src/Length.js\");\n/* harmony import */ var _drawing_Size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../drawing/Size */ \"./src/drawing/Size.js\");\n/* harmony import */ var _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../drawing/Vector */ \"./src/drawing/Vector.js\");\n/* harmony import */ var _Bounds__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Bounds */ \"./src/Bounds.js\");\n/* harmony import */ var _padding__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./padding */ \"./src/parsing/padding.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\n\n\n\n\nvar BACKGROUND_REPEAT = {\n  REPEAT: 0,\n  NO_REPEAT: 1,\n  REPEAT_X: 2,\n  REPEAT_Y: 3\n};\nvar BACKGROUND_SIZE = {\n  AUTO: 0,\n  CONTAIN: 1,\n  COVER: 2,\n  LENGTH: 3\n};\nvar BACKGROUND_CLIP = {\n  BORDER_BOX: 0,\n  PADDING_BOX: 1,\n  CONTENT_BOX: 2\n};\nvar BACKGROUND_ORIGIN = BACKGROUND_CLIP;\nvar AUTO = 'auto';\n\nvar BackgroundSize = function BackgroundSize(size) {\n  _classCallCheck(this, BackgroundSize);\n\n  switch (size) {\n    case 'contain':\n      this.size = BACKGROUND_SIZE.CONTAIN;\n      break;\n\n    case 'cover':\n      this.size = BACKGROUND_SIZE.COVER;\n      break;\n\n    case 'auto':\n      this.size = BACKGROUND_SIZE.AUTO;\n      break;\n\n    default:\n      this.value = new _Length__WEBPACK_IMPORTED_MODULE_1__[\"default\"](size);\n  }\n};\n\nvar calculateBackgroundSize = function calculateBackgroundSize(backgroundImage, image, bounds) {\n  var width = 0;\n  var height = 0;\n  var size = backgroundImage.size;\n\n  if (size[0].size === BACKGROUND_SIZE.CONTAIN || size[0].size === BACKGROUND_SIZE.COVER) {\n    var targetRatio = bounds.width / bounds.height;\n    var currentRatio = image.width / image.height;\n    return targetRatio < currentRatio !== (size[0].size === BACKGROUND_SIZE.COVER) ? new _drawing_Size__WEBPACK_IMPORTED_MODULE_2__[\"default\"](bounds.width, bounds.width / currentRatio) : new _drawing_Size__WEBPACK_IMPORTED_MODULE_2__[\"default\"](bounds.height * currentRatio, bounds.height);\n  }\n\n  if (size[0].value) {\n    width = size[0].value.getAbsoluteValue(bounds.width);\n  }\n\n  if (size[0].size === BACKGROUND_SIZE.AUTO && size[1].size === BACKGROUND_SIZE.AUTO) {\n    height = image.height;\n  } else if (size[1].size === BACKGROUND_SIZE.AUTO) {\n    height = width / image.width * image.height;\n  } else if (size[1].value) {\n    height = size[1].value.getAbsoluteValue(bounds.height);\n  }\n\n  if (size[0].size === BACKGROUND_SIZE.AUTO) {\n    width = height / image.height * image.width;\n  }\n\n  return new _drawing_Size__WEBPACK_IMPORTED_MODULE_2__[\"default\"](width, height);\n};\nvar calculateGradientBackgroundSize = function calculateGradientBackgroundSize(backgroundImage, bounds) {\n  var size = backgroundImage.size;\n  var width = size[0].value ? size[0].value.getAbsoluteValue(bounds.width) : bounds.width;\n  var height = size[1].value ? size[1].value.getAbsoluteValue(bounds.height) : size[0].value ? width : bounds.height;\n  return new _drawing_Size__WEBPACK_IMPORTED_MODULE_2__[\"default\"](width, height);\n};\nvar AUTO_SIZE = new BackgroundSize(AUTO);\nvar calculateBackgroungPaintingArea = function calculateBackgroungPaintingArea(curves, clip) {\n  switch (clip) {\n    case BACKGROUND_CLIP.BORDER_BOX:\n      return Object(_Bounds__WEBPACK_IMPORTED_MODULE_4__[\"calculateBorderBoxPath\"])(curves);\n\n    case BACKGROUND_CLIP.PADDING_BOX:\n    default:\n      return Object(_Bounds__WEBPACK_IMPORTED_MODULE_4__[\"calculatePaddingBoxPath\"])(curves);\n  }\n};\nvar calculateBackgroungPositioningArea = function calculateBackgroungPositioningArea(backgroundOrigin, bounds, padding, border) {\n  var paddingBox = Object(_Bounds__WEBPACK_IMPORTED_MODULE_4__[\"calculatePaddingBox\"])(bounds, border);\n\n  switch (backgroundOrigin) {\n    case BACKGROUND_ORIGIN.BORDER_BOX:\n      return bounds;\n\n    case BACKGROUND_ORIGIN.CONTENT_BOX:\n      var paddingLeft = padding[_padding__WEBPACK_IMPORTED_MODULE_5__[\"PADDING_SIDES\"].LEFT].getAbsoluteValue(bounds.width);\n      var paddingRight = padding[_padding__WEBPACK_IMPORTED_MODULE_5__[\"PADDING_SIDES\"].RIGHT].getAbsoluteValue(bounds.width);\n      var paddingTop = padding[_padding__WEBPACK_IMPORTED_MODULE_5__[\"PADDING_SIDES\"].TOP].getAbsoluteValue(bounds.width);\n      var paddingBottom = padding[_padding__WEBPACK_IMPORTED_MODULE_5__[\"PADDING_SIDES\"].BOTTOM].getAbsoluteValue(bounds.width);\n      return new _Bounds__WEBPACK_IMPORTED_MODULE_4__[\"Bounds\"](paddingBox.left + paddingLeft, paddingBox.top + paddingTop, paddingBox.width - paddingLeft - paddingRight, paddingBox.height - paddingTop - paddingBottom);\n\n    case BACKGROUND_ORIGIN.PADDING_BOX:\n    default:\n      return paddingBox;\n  }\n};\nvar calculateBackgroundPosition = function calculateBackgroundPosition(position, size, bounds) {\n  return new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__[\"default\"](position[0].getAbsoluteValue(bounds.width - size.width), position[1].getAbsoluteValue(bounds.height - size.height));\n};\nvar calculateBackgroundRepeatPath = function calculateBackgroundRepeatPath(background, position, size, backgroundPositioningArea, bounds) {\n  var repeat = background.repeat;\n\n  switch (repeat) {\n    case BACKGROUND_REPEAT.REPEAT_X:\n      return [new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__[\"default\"](Math.round(bounds.left), Math.round(backgroundPositioningArea.top + position.y)), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__[\"default\"](Math.round(bounds.left + bounds.width), Math.round(backgroundPositioningArea.top + position.y)), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__[\"default\"](Math.round(bounds.left + bounds.width), Math.round(size.height + backgroundPositioningArea.top + position.y)), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__[\"default\"](Math.round(bounds.left), Math.round(size.height + backgroundPositioningArea.top + position.y))];\n\n    case BACKGROUND_REPEAT.REPEAT_Y:\n      return [new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__[\"default\"](Math.round(backgroundPositioningArea.left + position.x), Math.round(bounds.top)), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__[\"default\"](Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(bounds.top)), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__[\"default\"](Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(bounds.height + bounds.top)), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__[\"default\"](Math.round(backgroundPositioningArea.left + position.x), Math.round(bounds.height + bounds.top))];\n\n    case BACKGROUND_REPEAT.NO_REPEAT:\n      return [new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__[\"default\"](Math.round(backgroundPositioningArea.left + position.x), Math.round(backgroundPositioningArea.top + position.y)), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__[\"default\"](Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(backgroundPositioningArea.top + position.y)), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__[\"default\"](Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(backgroundPositioningArea.top + position.y + size.height)), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__[\"default\"](Math.round(backgroundPositioningArea.left + position.x), Math.round(backgroundPositioningArea.top + position.y + size.height))];\n\n    default:\n      return [new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__[\"default\"](Math.round(bounds.left), Math.round(bounds.top)), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__[\"default\"](Math.round(bounds.left + bounds.width), Math.round(bounds.top)), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__[\"default\"](Math.round(bounds.left + bounds.width), Math.round(bounds.height + bounds.top)), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__[\"default\"](Math.round(bounds.left), Math.round(bounds.height + bounds.top))];\n  }\n};\nvar parseBackground = function parseBackground(style, resourceLoader) {\n  return {\n    backgroundColor: new _Color__WEBPACK_IMPORTED_MODULE_0__[\"default\"](style.backgroundColor),\n    backgroundImage: parseBackgroundImages(style, resourceLoader),\n    backgroundClip: parseBackgroundClip(style.backgroundClip),\n    backgroundOrigin: parseBackgroundOrigin(style.backgroundOrigin)\n  };\n};\n\nvar parseBackgroundClip = function parseBackgroundClip(backgroundClip) {\n  switch (backgroundClip) {\n    case 'padding-box':\n      return BACKGROUND_CLIP.PADDING_BOX;\n\n    case 'content-box':\n      return BACKGROUND_CLIP.CONTENT_BOX;\n  }\n\n  return BACKGROUND_CLIP.BORDER_BOX;\n};\n\nvar parseBackgroundOrigin = function parseBackgroundOrigin(backgroundOrigin) {\n  switch (backgroundOrigin) {\n    case 'padding-box':\n      return BACKGROUND_ORIGIN.PADDING_BOX;\n\n    case 'content-box':\n      return BACKGROUND_ORIGIN.CONTENT_BOX;\n  }\n\n  return BACKGROUND_ORIGIN.BORDER_BOX;\n};\n\nvar parseBackgroundRepeat = function parseBackgroundRepeat(backgroundRepeat) {\n  switch (backgroundRepeat.trim()) {\n    case 'no-repeat':\n      return BACKGROUND_REPEAT.NO_REPEAT;\n\n    case 'repeat-x':\n    case 'repeat no-repeat':\n      return BACKGROUND_REPEAT.REPEAT_X;\n\n    case 'repeat-y':\n    case 'no-repeat repeat':\n      return BACKGROUND_REPEAT.REPEAT_Y;\n\n    case 'repeat':\n      return BACKGROUND_REPEAT.REPEAT;\n  }\n\n  if (true) {\n    console.error(\"Invalid background-repeat value \\\"\".concat(backgroundRepeat, \"\\\"\"));\n  }\n\n  return BACKGROUND_REPEAT.REPEAT;\n};\n\nvar parseBackgroundImages = function parseBackgroundImages(style, resourceLoader) {\n  var sources = parseBackgroundImage(style.backgroundImage).map(function (backgroundImage) {\n    if (backgroundImage.method === 'url') {\n      var key = resourceLoader.loadImage(backgroundImage.args[0]);\n      backgroundImage.args = key ? [key] : [];\n    }\n\n    return backgroundImage;\n  });\n  var positions = style.backgroundPosition.split(',');\n  var repeats = style.backgroundRepeat.split(',');\n  var sizes = style.backgroundSize.split(',');\n  return sources.map(function (source, index) {\n    var size = (sizes[index] || AUTO).trim().split(' ').map(parseBackgroundSize);\n    var position = (positions[index] || AUTO).trim().split(' ').map(parseBackgoundPosition);\n    return {\n      source: source,\n      repeat: parseBackgroundRepeat(typeof repeats[index] === 'string' ? repeats[index] : repeats[0]),\n      size: size.length < 2 ? [size[0], AUTO_SIZE] : [size[0], size[1]],\n      position: position.length < 2 ? [position[0], position[0]] : [position[0], position[1]]\n    };\n  });\n};\n\nvar parseBackgroundSize = function parseBackgroundSize(size) {\n  return size === 'auto' ? AUTO_SIZE : new BackgroundSize(size);\n};\n\nvar parseBackgoundPosition = function parseBackgoundPosition(position) {\n  switch (position) {\n    case 'bottom':\n    case 'right':\n      return new _Length__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('100%');\n\n    case 'left':\n    case 'top':\n      return new _Length__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('0%');\n\n    case 'auto':\n      return new _Length__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('0');\n  }\n\n  return new _Length__WEBPACK_IMPORTED_MODULE_1__[\"default\"](position);\n};\n\nvar parseBackgroundImage = function parseBackgroundImage(image) {\n  var whitespace = /^\\s$/;\n  var results = [];\n  var args = [];\n  var method = '';\n  var quote = null;\n  var definition = '';\n  var mode = 0;\n  var numParen = 0;\n\n  var appendResult = function appendResult() {\n    var prefix = '';\n\n    if (method) {\n      if (definition.substr(0, 1) === '\"') {\n        definition = definition.substr(1, definition.length - 2);\n      }\n\n      if (definition) {\n        args.push(definition.trim());\n      }\n\n      var prefix_i = method.indexOf('-', 1) + 1;\n\n      if (method.substr(0, 1) === '-' && prefix_i > 0) {\n        prefix = method.substr(0, prefix_i).toLowerCase();\n        method = method.substr(prefix_i);\n      }\n\n      method = method.toLowerCase();\n\n      if (method !== 'none') {\n        results.push({\n          prefix: prefix,\n          method: method,\n          args: args\n        });\n      }\n    }\n\n    args = [];\n    method = definition = '';\n  };\n\n  image.split('').forEach(function (c) {\n    if (mode === 0 && whitespace.test(c)) {\n      return;\n    }\n\n    switch (c) {\n      case '\"':\n        if (!quote) {\n          quote = c;\n        } else if (quote === c) {\n          quote = null;\n        }\n\n        break;\n\n      case '(':\n        if (quote) {\n          break;\n        } else if (mode === 0) {\n          mode = 1;\n          return;\n        } else {\n          numParen++;\n        }\n\n        break;\n\n      case ')':\n        if (quote) {\n          break;\n        } else if (mode === 1) {\n          if (numParen === 0) {\n            mode = 0;\n            appendResult();\n            return;\n          } else {\n            numParen--;\n          }\n        }\n\n        break;\n\n      case ',':\n        if (quote) {\n          break;\n        } else if (mode === 0) {\n          appendResult();\n          return;\n        } else if (mode === 1) {\n          if (numParen === 0 && !method.match(/^url$/i)) {\n            args.push(definition.trim());\n            definition = '';\n            return;\n          }\n        }\n\n        break;\n    }\n\n    if (mode === 0) {\n      method += c;\n    } else {\n      definition += c;\n    }\n  });\n  appendResult();\n  return results;\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/background.js?");

/***/ }),

/***/ "./src/parsing/border.js":
/*!*******************************!*\
  !*** ./src/parsing/border.js ***!
  \*******************************/
/*! exports provided: BORDER_STYLE, BORDER_SIDES, parseBorder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BORDER_STYLE\", function() { return BORDER_STYLE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BORDER_SIDES\", function() { return BORDER_SIDES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseBorder\", function() { return parseBorder; });\n/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Color */ \"./src/Color.js\");\n\n\n\nvar BORDER_STYLE = {\n  NONE: 0,\n  SOLID: 1\n};\nvar BORDER_SIDES = {\n  TOP: 0,\n  RIGHT: 1,\n  BOTTOM: 2,\n  LEFT: 3\n};\nvar SIDES = Object.keys(BORDER_SIDES).map(function (s) {\n  return s.toLowerCase();\n});\n\nvar parseBorderStyle = function parseBorderStyle(style) {\n  switch (style) {\n    case 'none':\n      return BORDER_STYLE.NONE;\n  }\n\n  return BORDER_STYLE.SOLID;\n};\n\nvar parseBorder = function parseBorder(style) {\n  return SIDES.map(function (side) {\n    var borderColor = new _Color__WEBPACK_IMPORTED_MODULE_0__[\"default\"](style.getPropertyValue(\"border-\".concat(side, \"-color\")));\n    var borderStyle = parseBorderStyle(style.getPropertyValue(\"border-\".concat(side, \"-style\")));\n    var borderWidth = parseFloat(style.getPropertyValue(\"border-\".concat(side, \"-width\")));\n    return {\n      borderColor: borderColor,\n      borderStyle: borderStyle,\n      borderWidth: isNaN(borderWidth) ? 0 : borderWidth\n    };\n  });\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/border.js?");

/***/ }),

/***/ "./src/parsing/borderRadius.js":
/*!*************************************!*\
  !*** ./src/parsing/borderRadius.js ***!
  \*************************************/
/*! exports provided: parseBorderRadius */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseBorderRadius\", function() { return parseBorderRadius; });\n/* harmony import */ var _Length__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Length */ \"./src/Length.js\");\n\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\nvar SIDES = ['top-left', 'top-right', 'bottom-right', 'bottom-left'];\nvar parseBorderRadius = function parseBorderRadius(style) {\n  return SIDES.map(function (side) {\n    var value = style.getPropertyValue(\"border-\".concat(side, \"-radius\"));\n\n    var _value$split$map = value.split(' ').map(_Length__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create),\n        _value$split$map2 = _slicedToArray(_value$split$map, 2),\n        horizontal = _value$split$map2[0],\n        vertical = _value$split$map2[1];\n\n    return typeof vertical === 'undefined' ? [horizontal, horizontal] : [horizontal, vertical];\n  });\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/borderRadius.js?");

/***/ }),

/***/ "./src/parsing/display.js":
/*!********************************!*\
  !*** ./src/parsing/display.js ***!
  \********************************/
/*! exports provided: DISPLAY, parseDisplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DISPLAY\", function() { return DISPLAY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseDisplay\", function() { return parseDisplay; });\n\n\nvar DISPLAY = {\n  NONE: 1 << 0,\n  BLOCK: 1 << 1,\n  INLINE: 1 << 2,\n  RUN_IN: 1 << 3,\n  FLOW: 1 << 4,\n  FLOW_ROOT: 1 << 5,\n  TABLE: 1 << 6,\n  FLEX: 1 << 7,\n  GRID: 1 << 8,\n  RUBY: 1 << 9,\n  SUBGRID: 1 << 10,\n  LIST_ITEM: 1 << 11,\n  TABLE_ROW_GROUP: 1 << 12,\n  TABLE_HEADER_GROUP: 1 << 13,\n  TABLE_FOOTER_GROUP: 1 << 14,\n  TABLE_ROW: 1 << 15,\n  TABLE_CELL: 1 << 16,\n  TABLE_COLUMN_GROUP: 1 << 17,\n  TABLE_COLUMN: 1 << 18,\n  TABLE_CAPTION: 1 << 19,\n  RUBY_BASE: 1 << 20,\n  RUBY_TEXT: 1 << 21,\n  RUBY_BASE_CONTAINER: 1 << 22,\n  RUBY_TEXT_CONTAINER: 1 << 23,\n  CONTENTS: 1 << 24,\n  INLINE_BLOCK: 1 << 25,\n  INLINE_LIST_ITEM: 1 << 26,\n  INLINE_TABLE: 1 << 27,\n  INLINE_FLEX: 1 << 28,\n  INLINE_GRID: 1 << 29\n};\n\nvar parseDisplayValue = function parseDisplayValue(display) {\n  switch (display) {\n    case 'block':\n      return DISPLAY.BLOCK;\n\n    case 'inline':\n      return DISPLAY.INLINE;\n\n    case 'run-in':\n      return DISPLAY.RUN_IN;\n\n    case 'flow':\n      return DISPLAY.FLOW;\n\n    case 'flow-root':\n      return DISPLAY.FLOW_ROOT;\n\n    case 'table':\n      return DISPLAY.TABLE;\n\n    case 'flex':\n      return DISPLAY.FLEX;\n\n    case 'grid':\n      return DISPLAY.GRID;\n\n    case 'ruby':\n      return DISPLAY.RUBY;\n\n    case 'subgrid':\n      return DISPLAY.SUBGRID;\n\n    case 'list-item':\n      return DISPLAY.LIST_ITEM;\n\n    case 'table-row-group':\n      return DISPLAY.TABLE_ROW_GROUP;\n\n    case 'table-header-group':\n      return DISPLAY.TABLE_HEADER_GROUP;\n\n    case 'table-footer-group':\n      return DISPLAY.TABLE_FOOTER_GROUP;\n\n    case 'table-row':\n      return DISPLAY.TABLE_ROW;\n\n    case 'table-cell':\n      return DISPLAY.TABLE_CELL;\n\n    case 'table-column-group':\n      return DISPLAY.TABLE_COLUMN_GROUP;\n\n    case 'table-column':\n      return DISPLAY.TABLE_COLUMN;\n\n    case 'table-caption':\n      return DISPLAY.TABLE_CAPTION;\n\n    case 'ruby-base':\n      return DISPLAY.RUBY_BASE;\n\n    case 'ruby-text':\n      return DISPLAY.RUBY_TEXT;\n\n    case 'ruby-base-container':\n      return DISPLAY.RUBY_BASE_CONTAINER;\n\n    case 'ruby-text-container':\n      return DISPLAY.RUBY_TEXT_CONTAINER;\n\n    case 'contents':\n      return DISPLAY.CONTENTS;\n\n    case 'inline-block':\n      return DISPLAY.INLINE_BLOCK;\n\n    case 'inline-list-item':\n      return DISPLAY.INLINE_LIST_ITEM;\n\n    case 'inline-table':\n      return DISPLAY.INLINE_TABLE;\n\n    case 'inline-flex':\n      return DISPLAY.INLINE_FLEX;\n\n    case 'inline-grid':\n      return DISPLAY.INLINE_GRID;\n  }\n\n  return DISPLAY.NONE;\n};\n\nvar setDisplayBit = function setDisplayBit(bit, display) {\n  return bit | parseDisplayValue(display);\n};\n\nvar parseDisplay = function parseDisplay(display) {\n  return display.split(' ').reduce(setDisplayBit, 0);\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/display.js?");

/***/ }),

/***/ "./src/parsing/float.js":
/*!******************************!*\
  !*** ./src/parsing/float.js ***!
  \******************************/
/*! exports provided: FLOAT, parseCSSFloat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FLOAT\", function() { return FLOAT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseCSSFloat\", function() { return parseCSSFloat; });\n\n\nvar FLOAT = {\n  NONE: 0,\n  LEFT: 1,\n  RIGHT: 2,\n  INLINE_START: 3,\n  INLINE_END: 4\n};\nvar parseCSSFloat = function parseCSSFloat(float) {\n  switch (float) {\n    case 'left':\n      return FLOAT.LEFT;\n\n    case 'right':\n      return FLOAT.RIGHT;\n\n    case 'inline-start':\n      return FLOAT.INLINE_START;\n\n    case 'inline-end':\n      return FLOAT.INLINE_END;\n  }\n\n  return FLOAT.NONE;\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/float.js?");

/***/ }),

/***/ "./src/parsing/font.js":
/*!*****************************!*\
  !*** ./src/parsing/font.js ***!
  \*****************************/
/*! exports provided: parseFont */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseFont\", function() { return parseFont; });\n\n\nvar parseFontWeight = function parseFontWeight(weight) {\n  switch (weight) {\n    case 'normal':\n      return 400;\n\n    case 'bold':\n      return 700;\n  }\n\n  var value = parseInt(weight, 10);\n  return isNaN(value) ? 400 : value;\n};\n\nvar parseFont = function parseFont(style) {\n  var fontFamily = style.fontFamily;\n  var fontSize = style.fontSize;\n  var fontStyle = style.fontStyle;\n  var fontVariant = style.fontVariant;\n  var fontWeight = parseFontWeight(style.fontWeight);\n  return {\n    fontFamily: fontFamily,\n    fontSize: fontSize,\n    fontStyle: fontStyle,\n    fontVariant: fontVariant,\n    fontWeight: fontWeight\n  };\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/font.js?");

/***/ }),

/***/ "./src/parsing/letterSpacing.js":
/*!**************************************!*\
  !*** ./src/parsing/letterSpacing.js ***!
  \**************************************/
/*! exports provided: parseLetterSpacing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseLetterSpacing\", function() { return parseLetterSpacing; });\n\n\nvar parseLetterSpacing = function parseLetterSpacing(letterSpacing) {\n  if (letterSpacing === 'normal') {\n    return 0;\n  }\n\n  var value = parseFloat(letterSpacing);\n  return isNaN(value) ? 0 : value;\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/letterSpacing.js?");

/***/ }),

/***/ "./src/parsing/lineBreak.js":
/*!**********************************!*\
  !*** ./src/parsing/lineBreak.js ***!
  \**********************************/
/*! exports provided: LINE_BREAK, parseLineBreak */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LINE_BREAK\", function() { return LINE_BREAK; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseLineBreak\", function() { return parseLineBreak; });\n\n\nvar LINE_BREAK = {\n  NORMAL: 'normal',\n  STRICT: 'strict'\n};\nvar parseLineBreak = function parseLineBreak(wordBreak) {\n  switch (wordBreak) {\n    case 'strict':\n      return LINE_BREAK.STRICT;\n\n    case 'normal':\n    default:\n      return LINE_BREAK.NORMAL;\n  }\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/lineBreak.js?");

/***/ }),

/***/ "./src/parsing/listStyle.js":
/*!**********************************!*\
  !*** ./src/parsing/listStyle.js ***!
  \**********************************/
/*! exports provided: LIST_STYLE_POSITION, LIST_STYLE_TYPE, parseListStyleType, parseListStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LIST_STYLE_POSITION\", function() { return LIST_STYLE_POSITION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LIST_STYLE_TYPE\", function() { return LIST_STYLE_TYPE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseListStyleType\", function() { return parseListStyleType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseListStyle\", function() { return parseListStyle; });\n/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background */ \"./src/parsing/background.js\");\n\n\n\nvar LIST_STYLE_POSITION = {\n  INSIDE: 0,\n  OUTSIDE: 1\n};\nvar LIST_STYLE_TYPE = {\n  NONE: -1,\n  DISC: 0,\n  CIRCLE: 1,\n  SQUARE: 2,\n  DECIMAL: 3,\n  CJK_DECIMAL: 4,\n  DECIMAL_LEADING_ZERO: 5,\n  LOWER_ROMAN: 6,\n  UPPER_ROMAN: 7,\n  LOWER_GREEK: 8,\n  LOWER_ALPHA: 9,\n  UPPER_ALPHA: 10,\n  ARABIC_INDIC: 11,\n  ARMENIAN: 12,\n  BENGALI: 13,\n  CAMBODIAN: 14,\n  CJK_EARTHLY_BRANCH: 15,\n  CJK_HEAVENLY_STEM: 16,\n  CJK_IDEOGRAPHIC: 17,\n  DEVANAGARI: 18,\n  ETHIOPIC_NUMERIC: 19,\n  GEORGIAN: 20,\n  GUJARATI: 21,\n  GURMUKHI: 22,\n  HEBREW: 22,\n  HIRAGANA: 23,\n  HIRAGANA_IROHA: 24,\n  JAPANESE_FORMAL: 25,\n  JAPANESE_INFORMAL: 26,\n  KANNADA: 27,\n  KATAKANA: 28,\n  KATAKANA_IROHA: 29,\n  KHMER: 30,\n  KOREAN_HANGUL_FORMAL: 31,\n  KOREAN_HANJA_FORMAL: 32,\n  KOREAN_HANJA_INFORMAL: 33,\n  LAO: 34,\n  LOWER_ARMENIAN: 35,\n  MALAYALAM: 36,\n  MONGOLIAN: 37,\n  MYANMAR: 38,\n  ORIYA: 39,\n  PERSIAN: 40,\n  SIMP_CHINESE_FORMAL: 41,\n  SIMP_CHINESE_INFORMAL: 42,\n  TAMIL: 43,\n  TELUGU: 44,\n  THAI: 45,\n  TIBETAN: 46,\n  TRAD_CHINESE_FORMAL: 47,\n  TRAD_CHINESE_INFORMAL: 48,\n  UPPER_ARMENIAN: 49,\n  DISCLOSURE_OPEN: 50,\n  DISCLOSURE_CLOSED: 51\n};\nvar parseListStyleType = function parseListStyleType(type) {\n  switch (type) {\n    case 'disc':\n      return LIST_STYLE_TYPE.DISC;\n\n    case 'circle':\n      return LIST_STYLE_TYPE.CIRCLE;\n\n    case 'square':\n      return LIST_STYLE_TYPE.SQUARE;\n\n    case 'decimal':\n      return LIST_STYLE_TYPE.DECIMAL;\n\n    case 'cjk-decimal':\n      return LIST_STYLE_TYPE.CJK_DECIMAL;\n\n    case 'decimal-leading-zero':\n      return LIST_STYLE_TYPE.DECIMAL_LEADING_ZERO;\n\n    case 'lower-roman':\n      return LIST_STYLE_TYPE.LOWER_ROMAN;\n\n    case 'upper-roman':\n      return LIST_STYLE_TYPE.UPPER_ROMAN;\n\n    case 'lower-greek':\n      return LIST_STYLE_TYPE.LOWER_GREEK;\n\n    case 'lower-alpha':\n      return LIST_STYLE_TYPE.LOWER_ALPHA;\n\n    case 'upper-alpha':\n      return LIST_STYLE_TYPE.UPPER_ALPHA;\n\n    case 'arabic-indic':\n      return LIST_STYLE_TYPE.ARABIC_INDIC;\n\n    case 'armenian':\n      return LIST_STYLE_TYPE.ARMENIAN;\n\n    case 'bengali':\n      return LIST_STYLE_TYPE.BENGALI;\n\n    case 'cambodian':\n      return LIST_STYLE_TYPE.CAMBODIAN;\n\n    case 'cjk-earthly-branch':\n      return LIST_STYLE_TYPE.CJK_EARTHLY_BRANCH;\n\n    case 'cjk-heavenly-stem':\n      return LIST_STYLE_TYPE.CJK_HEAVENLY_STEM;\n\n    case 'cjk-ideographic':\n      return LIST_STYLE_TYPE.CJK_IDEOGRAPHIC;\n\n    case 'devanagari':\n      return LIST_STYLE_TYPE.DEVANAGARI;\n\n    case 'ethiopic-numeric':\n      return LIST_STYLE_TYPE.ETHIOPIC_NUMERIC;\n\n    case 'georgian':\n      return LIST_STYLE_TYPE.GEORGIAN;\n\n    case 'gujarati':\n      return LIST_STYLE_TYPE.GUJARATI;\n\n    case 'gurmukhi':\n      return LIST_STYLE_TYPE.GURMUKHI;\n\n    case 'hebrew':\n      return LIST_STYLE_TYPE.HEBREW;\n\n    case 'hiragana':\n      return LIST_STYLE_TYPE.HIRAGANA;\n\n    case 'hiragana-iroha':\n      return LIST_STYLE_TYPE.HIRAGANA_IROHA;\n\n    case 'japanese-formal':\n      return LIST_STYLE_TYPE.JAPANESE_FORMAL;\n\n    case 'japanese-informal':\n      return LIST_STYLE_TYPE.JAPANESE_INFORMAL;\n\n    case 'kannada':\n      return LIST_STYLE_TYPE.KANNADA;\n\n    case 'katakana':\n      return LIST_STYLE_TYPE.KATAKANA;\n\n    case 'katakana-iroha':\n      return LIST_STYLE_TYPE.KATAKANA_IROHA;\n\n    case 'khmer':\n      return LIST_STYLE_TYPE.KHMER;\n\n    case 'korean-hangul-formal':\n      return LIST_STYLE_TYPE.KOREAN_HANGUL_FORMAL;\n\n    case 'korean-hanja-formal':\n      return LIST_STYLE_TYPE.KOREAN_HANJA_FORMAL;\n\n    case 'korean-hanja-informal':\n      return LIST_STYLE_TYPE.KOREAN_HANJA_INFORMAL;\n\n    case 'lao':\n      return LIST_STYLE_TYPE.LAO;\n\n    case 'lower-armenian':\n      return LIST_STYLE_TYPE.LOWER_ARMENIAN;\n\n    case 'malayalam':\n      return LIST_STYLE_TYPE.MALAYALAM;\n\n    case 'mongolian':\n      return LIST_STYLE_TYPE.MONGOLIAN;\n\n    case 'myanmar':\n      return LIST_STYLE_TYPE.MYANMAR;\n\n    case 'oriya':\n      return LIST_STYLE_TYPE.ORIYA;\n\n    case 'persian':\n      return LIST_STYLE_TYPE.PERSIAN;\n\n    case 'simp-chinese-formal':\n      return LIST_STYLE_TYPE.SIMP_CHINESE_FORMAL;\n\n    case 'simp-chinese-informal':\n      return LIST_STYLE_TYPE.SIMP_CHINESE_INFORMAL;\n\n    case 'tamil':\n      return LIST_STYLE_TYPE.TAMIL;\n\n    case 'telugu':\n      return LIST_STYLE_TYPE.TELUGU;\n\n    case 'thai':\n      return LIST_STYLE_TYPE.THAI;\n\n    case 'tibetan':\n      return LIST_STYLE_TYPE.TIBETAN;\n\n    case 'trad-chinese-formal':\n      return LIST_STYLE_TYPE.TRAD_CHINESE_FORMAL;\n\n    case 'trad-chinese-informal':\n      return LIST_STYLE_TYPE.TRAD_CHINESE_INFORMAL;\n\n    case 'upper-armenian':\n      return LIST_STYLE_TYPE.UPPER_ARMENIAN;\n\n    case 'disclosure-open':\n      return LIST_STYLE_TYPE.DISCLOSURE_OPEN;\n\n    case 'disclosure-closed':\n      return LIST_STYLE_TYPE.DISCLOSURE_CLOSED;\n\n    case 'none':\n    default:\n      return LIST_STYLE_TYPE.NONE;\n  }\n};\nvar parseListStyle = function parseListStyle(style) {\n  var listStyleImage = Object(_background__WEBPACK_IMPORTED_MODULE_0__[\"parseBackgroundImage\"])(style.getPropertyValue('list-style-image'));\n  return {\n    listStyleType: parseListStyleType(style.getPropertyValue('list-style-type')),\n    listStyleImage: listStyleImage.length ? listStyleImage[0] : null,\n    listStylePosition: parseListStylePosition(style.getPropertyValue('list-style-position'))\n  };\n};\n\nvar parseListStylePosition = function parseListStylePosition(position) {\n  switch (position) {\n    case 'inside':\n      return LIST_STYLE_POSITION.INSIDE;\n\n    case 'outside':\n    default:\n      return LIST_STYLE_POSITION.OUTSIDE;\n  }\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/listStyle.js?");

/***/ }),

/***/ "./src/parsing/margin.js":
/*!*******************************!*\
  !*** ./src/parsing/margin.js ***!
  \*******************************/
/*! exports provided: parseMargin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseMargin\", function() { return parseMargin; });\n/* harmony import */ var _Length__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Length */ \"./src/Length.js\");\n\n\n\nvar SIDES = ['top', 'right', 'bottom', 'left'];\nvar parseMargin = function parseMargin(style) {\n  return SIDES.map(function (side) {\n    return new _Length__WEBPACK_IMPORTED_MODULE_0__[\"default\"](style.getPropertyValue(\"margin-\".concat(side)));\n  });\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/margin.js?");

/***/ }),

/***/ "./src/parsing/overflow.js":
/*!*********************************!*\
  !*** ./src/parsing/overflow.js ***!
  \*********************************/
/*! exports provided: OVERFLOW, parseOverflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OVERFLOW\", function() { return OVERFLOW; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseOverflow\", function() { return parseOverflow; });\n\n\nvar OVERFLOW = {\n  VISIBLE: 0,\n  HIDDEN: 1,\n  SCROLL: 2,\n  AUTO: 3\n};\nvar parseOverflow = function parseOverflow(overflow) {\n  switch (overflow) {\n    case 'hidden':\n      return OVERFLOW.HIDDEN;\n\n    case 'scroll':\n      return OVERFLOW.SCROLL;\n\n    case 'auto':\n      return OVERFLOW.AUTO;\n\n    case 'visible':\n    default:\n      return OVERFLOW.VISIBLE;\n  }\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/overflow.js?");

/***/ }),

/***/ "./src/parsing/overflowWrap.js":
/*!*************************************!*\
  !*** ./src/parsing/overflowWrap.js ***!
  \*************************************/
/*! exports provided: OVERFLOW_WRAP, parseOverflowWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OVERFLOW_WRAP\", function() { return OVERFLOW_WRAP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseOverflowWrap\", function() { return parseOverflowWrap; });\n\n\nvar OVERFLOW_WRAP = {\n  NORMAL: 0,\n  BREAK_WORD: 1\n};\nvar parseOverflowWrap = function parseOverflowWrap(overflow) {\n  switch (overflow) {\n    case 'break-word':\n      return OVERFLOW_WRAP.BREAK_WORD;\n\n    case 'normal':\n    default:\n      return OVERFLOW_WRAP.NORMAL;\n  }\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/overflowWrap.js?");

/***/ }),

/***/ "./src/parsing/padding.js":
/*!********************************!*\
  !*** ./src/parsing/padding.js ***!
  \********************************/
/*! exports provided: PADDING_SIDES, parsePadding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PADDING_SIDES\", function() { return PADDING_SIDES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parsePadding\", function() { return parsePadding; });\n/* harmony import */ var _Length__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Length */ \"./src/Length.js\");\n\n\n\nvar PADDING_SIDES = {\n  TOP: 0,\n  RIGHT: 1,\n  BOTTOM: 2,\n  LEFT: 3\n};\nvar SIDES = ['top', 'right', 'bottom', 'left'];\nvar parsePadding = function parsePadding(style) {\n  return SIDES.map(function (side) {\n    return new _Length__WEBPACK_IMPORTED_MODULE_0__[\"default\"](style.getPropertyValue(\"padding-\".concat(side)));\n  });\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/padding.js?");

/***/ }),

/***/ "./src/parsing/position.js":
/*!*********************************!*\
  !*** ./src/parsing/position.js ***!
  \*********************************/
/*! exports provided: POSITION, parsePosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"POSITION\", function() { return POSITION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parsePosition\", function() { return parsePosition; });\n\n\nvar POSITION = {\n  STATIC: 0,\n  RELATIVE: 1,\n  ABSOLUTE: 2,\n  FIXED: 3,\n  STICKY: 4\n};\nvar parsePosition = function parsePosition(position) {\n  switch (position) {\n    case 'relative':\n      return POSITION.RELATIVE;\n\n    case 'absolute':\n      return POSITION.ABSOLUTE;\n\n    case 'fixed':\n      return POSITION.FIXED;\n\n    case 'sticky':\n      return POSITION.STICKY;\n  }\n\n  return POSITION.STATIC;\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/position.js?");

/***/ }),

/***/ "./src/parsing/textDecoration.js":
/*!***************************************!*\
  !*** ./src/parsing/textDecoration.js ***!
  \***************************************/
/*! exports provided: TEXT_DECORATION_STYLE, TEXT_DECORATION, TEXT_DECORATION_LINE, parseTextDecoration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TEXT_DECORATION_STYLE\", function() { return TEXT_DECORATION_STYLE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TEXT_DECORATION\", function() { return TEXT_DECORATION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TEXT_DECORATION_LINE\", function() { return TEXT_DECORATION_LINE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseTextDecoration\", function() { return parseTextDecoration; });\n/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Color */ \"./src/Color.js\");\n\n\n\nvar TEXT_DECORATION_STYLE = {\n  SOLID: 0,\n  DOUBLE: 1,\n  DOTTED: 2,\n  DASHED: 3,\n  WAVY: 4\n};\nvar TEXT_DECORATION = {\n  NONE: null\n};\nvar TEXT_DECORATION_LINE = {\n  UNDERLINE: 1,\n  OVERLINE: 2,\n  LINE_THROUGH: 3,\n  BLINK: 4\n};\n\nvar parseLine = function parseLine(line) {\n  switch (line) {\n    case 'underline':\n      return TEXT_DECORATION_LINE.UNDERLINE;\n\n    case 'overline':\n      return TEXT_DECORATION_LINE.OVERLINE;\n\n    case 'line-through':\n      return TEXT_DECORATION_LINE.LINE_THROUGH;\n  }\n\n  return TEXT_DECORATION_LINE.BLINK;\n};\n\nvar parseTextDecorationLine = function parseTextDecorationLine(line) {\n  if (line === 'none') {\n    return null;\n  }\n\n  return line.split(' ').map(parseLine);\n};\n\nvar parseTextDecorationStyle = function parseTextDecorationStyle(style) {\n  switch (style) {\n    case 'double':\n      return TEXT_DECORATION_STYLE.DOUBLE;\n\n    case 'dotted':\n      return TEXT_DECORATION_STYLE.DOTTED;\n\n    case 'dashed':\n      return TEXT_DECORATION_STYLE.DASHED;\n\n    case 'wavy':\n      return TEXT_DECORATION_STYLE.WAVY;\n  }\n\n  return TEXT_DECORATION_STYLE.SOLID;\n};\n\nvar parseTextDecoration = function parseTextDecoration(style) {\n  var textDecorationLine = parseTextDecorationLine(style.textDecorationLine ? style.textDecorationLine : style.textDecoration);\n\n  if (textDecorationLine === null) {\n    return TEXT_DECORATION.NONE;\n  }\n\n  var textDecorationColor = style.textDecorationColor ? new _Color__WEBPACK_IMPORTED_MODULE_0__[\"default\"](style.textDecorationColor) : null;\n  var textDecorationStyle = parseTextDecorationStyle(style.textDecorationStyle);\n  return {\n    textDecorationLine: textDecorationLine,\n    textDecorationColor: textDecorationColor,\n    textDecorationStyle: textDecorationStyle\n  };\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/textDecoration.js?");

/***/ }),

/***/ "./src/parsing/textShadow.js":
/*!***********************************!*\
  !*** ./src/parsing/textShadow.js ***!
  \***********************************/
/*! exports provided: parseTextShadow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseTextShadow\", function() { return parseTextShadow; });\n/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Color */ \"./src/Color.js\");\n\n\n\nvar NUMBER = /^([+-]|\\d|\\.)$/i;\nvar parseTextShadow = function parseTextShadow(textShadow) {\n  if (textShadow === 'none' || typeof textShadow !== 'string') {\n    return null;\n  }\n\n  var currentValue = '';\n  var isLength = false;\n  var values = [];\n  var shadows = [];\n  var numParens = 0;\n  var color = null;\n\n  var appendValue = function appendValue() {\n    if (currentValue.length) {\n      if (isLength) {\n        values.push(parseFloat(currentValue));\n      } else {\n        color = new _Color__WEBPACK_IMPORTED_MODULE_0__[\"default\"](currentValue);\n      }\n    }\n\n    isLength = false;\n    currentValue = '';\n  };\n\n  var appendShadow = function appendShadow() {\n    if (values.length && color !== null) {\n      shadows.push({\n        color: color,\n        offsetX: values[0] || 0,\n        offsetY: values[1] || 0,\n        blur: values[2] || 0\n      });\n    }\n\n    values.splice(0, values.length);\n    color = null;\n  };\n\n  for (var i = 0; i < textShadow.length; i++) {\n    var c = textShadow[i];\n\n    switch (c) {\n      case '(':\n        currentValue += c;\n        numParens++;\n        break;\n\n      case ')':\n        currentValue += c;\n        numParens--;\n        break;\n\n      case ',':\n        if (numParens === 0) {\n          appendValue();\n          appendShadow();\n        } else {\n          currentValue += c;\n        }\n\n        break;\n\n      case ' ':\n        if (numParens === 0) {\n          appendValue();\n        } else {\n          currentValue += c;\n        }\n\n        break;\n\n      default:\n        if (currentValue.length === 0 && NUMBER.test(c)) {\n          isLength = true;\n        }\n\n        currentValue += c;\n    }\n  }\n\n  appendValue();\n  appendShadow();\n\n  if (shadows.length === 0) {\n    return null;\n  }\n\n  return shadows;\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/textShadow.js?");

/***/ }),

/***/ "./src/parsing/textTransform.js":
/*!**************************************!*\
  !*** ./src/parsing/textTransform.js ***!
  \**************************************/
/*! exports provided: TEXT_TRANSFORM, parseTextTransform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TEXT_TRANSFORM\", function() { return TEXT_TRANSFORM; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseTextTransform\", function() { return parseTextTransform; });\n\n\nvar TEXT_TRANSFORM = {\n  NONE: 0,\n  LOWERCASE: 1,\n  UPPERCASE: 2,\n  CAPITALIZE: 3\n};\nvar parseTextTransform = function parseTextTransform(textTransform) {\n  switch (textTransform) {\n    case 'uppercase':\n      return TEXT_TRANSFORM.UPPERCASE;\n\n    case 'lowercase':\n      return TEXT_TRANSFORM.LOWERCASE;\n\n    case 'capitalize':\n      return TEXT_TRANSFORM.CAPITALIZE;\n  }\n\n  return TEXT_TRANSFORM.NONE;\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/textTransform.js?");

/***/ }),

/***/ "./src/parsing/transform.js":
/*!**********************************!*\
  !*** ./src/parsing/transform.js ***!
  \**********************************/
/*! exports provided: parseTransform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseTransform\", function() { return parseTransform; });\n/* harmony import */ var _Length__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Length */ \"./src/Length.js\");\n\n\n\n\nvar toFloat = function toFloat(s) {\n  return parseFloat(s.trim());\n};\n\nvar MATRIX = /(matrix|matrix3d)\\((.+)\\)/;\nvar parseTransform = function parseTransform(style) {\n  var transform = parseTransformMatrix(style.transform || style.webkitTransform || style.mozTransform || // $FlowFixMe\n  style.msTransform || // $FlowFixMe\n  style.oTransform);\n\n  if (transform === null) {\n    return null;\n  }\n\n  return {\n    transform: transform,\n    transformOrigin: parseTransformOrigin(style.transformOrigin || style.webkitTransformOrigin || style.mozTransformOrigin || // $FlowFixMe\n    style.msTransformOrigin || // $FlowFixMe\n    style.oTransformOrigin)\n  };\n}; // $FlowFixMe\n\nvar parseTransformOrigin = function parseTransformOrigin(origin) {\n  if (typeof origin !== 'string') {\n    var v = new _Length__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('0');\n    return [v, v];\n  }\n\n  var values = origin.split(' ').map(_Length__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create);\n  return [values[0], values[1]];\n}; // $FlowFixMe\n\n\nvar parseTransformMatrix = function parseTransformMatrix(transform) {\n  if (transform === 'none' || typeof transform !== 'string') {\n    return null;\n  }\n\n  var match = transform.match(MATRIX);\n\n  if (match) {\n    if (match[1] === 'matrix') {\n      var matrix = match[2].split(',').map(toFloat);\n      return [matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]];\n    } else {\n      var matrix3d = match[2].split(',').map(toFloat);\n      return [matrix3d[0], matrix3d[1], matrix3d[4], matrix3d[5], matrix3d[12], matrix3d[13]];\n    }\n  }\n\n  return null;\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/transform.js?");

/***/ }),

/***/ "./src/parsing/visibility.js":
/*!***********************************!*\
  !*** ./src/parsing/visibility.js ***!
  \***********************************/
/*! exports provided: VISIBILITY, parseVisibility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VISIBILITY\", function() { return VISIBILITY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseVisibility\", function() { return parseVisibility; });\n\n\nvar VISIBILITY = {\n  VISIBLE: 0,\n  HIDDEN: 1,\n  COLLAPSE: 2\n};\nvar parseVisibility = function parseVisibility(visibility) {\n  switch (visibility) {\n    case 'hidden':\n      return VISIBILITY.HIDDEN;\n\n    case 'collapse':\n      return VISIBILITY.COLLAPSE;\n\n    case 'visible':\n    default:\n      return VISIBILITY.VISIBLE;\n  }\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/visibility.js?");

/***/ }),

/***/ "./src/parsing/word-break.js":
/*!***********************************!*\
  !*** ./src/parsing/word-break.js ***!
  \***********************************/
/*! exports provided: WORD_BREAK, parseWordBreak */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WORD_BREAK\", function() { return WORD_BREAK; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseWordBreak\", function() { return parseWordBreak; });\n\n\nvar WORD_BREAK = {\n  NORMAL: 'normal',\n  BREAK_ALL: 'break-all',\n  KEEP_ALL: 'keep-all'\n};\nvar parseWordBreak = function parseWordBreak(wordBreak) {\n  switch (wordBreak) {\n    case 'break-all':\n      return WORD_BREAK.BREAK_ALL;\n\n    case 'keep-all':\n      return WORD_BREAK.KEEP_ALL;\n\n    case 'normal':\n    default:\n      return WORD_BREAK.NORMAL;\n  }\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/word-break.js?");

/***/ }),

/***/ "./src/parsing/zIndex.js":
/*!*******************************!*\
  !*** ./src/parsing/zIndex.js ***!
  \*******************************/
/*! exports provided: parseZIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseZIndex\", function() { return parseZIndex; });\n\n\nvar parseZIndex = function parseZIndex(zIndex) {\n  var auto = zIndex === 'auto';\n  return {\n    auto: auto,\n    order: auto ? 0 : parseInt(zIndex, 10)\n  };\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/zIndex.js?");

/***/ }),

/***/ "./src/renderer/CanvasRenderer.js":
/*!****************************************!*\
  !*** ./src/renderer/CanvasRenderer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CanvasRenderer; });\n/* harmony import */ var _drawing_Path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../drawing/Path */ \"./src/drawing/Path.js\");\n/* harmony import */ var _parsing_textDecoration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parsing/textDecoration */ \"./src/parsing/textDecoration.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar addColorStops = function addColorStops(gradient, canvasGradient) {\n  var maxStop = Math.max.apply(null, gradient.colorStops.map(function (colorStop) {\n    return colorStop.stop;\n  }));\n  var f = 1 / Math.max(1, maxStop);\n  gradient.colorStops.forEach(function (colorStop) {\n    canvasGradient.addColorStop(Math.floor(Math.max(0, f * colorStop.stop)), colorStop.color.toString());\n  });\n};\n\nvar CanvasRenderer =\n/*#__PURE__*/\nfunction () {\n  function CanvasRenderer(canvas) {\n    _classCallCheck(this, CanvasRenderer);\n\n    this.canvas = canvas ? canvas : document.createElement('canvas');\n  }\n\n  _createClass(CanvasRenderer, [{\n    key: \"render\",\n    value: function render(options) {\n      this.ctx = this.canvas.getContext('2d');\n      this.options = options;\n      this.canvas.width = Math.floor(options.width * options.scale);\n      this.canvas.height = Math.floor(options.height * options.scale);\n      this.canvas.style.width = \"\".concat(options.width, \"px\");\n      this.canvas.style.height = \"\".concat(options.height, \"px\");\n      this.ctx.scale(this.options.scale, this.options.scale);\n      this.ctx.translate(-options.x, -options.y);\n      this.ctx.textBaseline = 'bottom';\n      options.logger.log(\"Canvas renderer initialized (\".concat(options.width, \"x\").concat(options.height, \" at \").concat(options.x, \",\").concat(options.y, \") with scale \").concat(this.options.scale));\n    }\n  }, {\n    key: \"clip\",\n    value: function clip(clipPaths, callback) {\n      var _this = this;\n\n      if (clipPaths.length) {\n        this.ctx.save();\n        clipPaths.forEach(function (path) {\n          _this.path(path);\n\n          _this.ctx.clip();\n        });\n      }\n\n      callback();\n\n      if (clipPaths.length) {\n        this.ctx.restore();\n      }\n    }\n  }, {\n    key: \"drawImage\",\n    value: function drawImage(image, source, destination) {\n      this.ctx.drawImage(image, source.left, source.top, source.width, source.height, destination.left, destination.top, destination.width, destination.height);\n    }\n  }, {\n    key: \"drawShape\",\n    value: function drawShape(path, color) {\n      this.path(path);\n      this.ctx.fillStyle = color.toString();\n      this.ctx.fill();\n    }\n  }, {\n    key: \"fill\",\n    value: function fill(color) {\n      this.ctx.fillStyle = color.toString();\n      this.ctx.fill();\n    }\n  }, {\n    key: \"getTarget\",\n    value: function getTarget() {\n      this.canvas.getContext('2d').setTransform(1, 0, 0, 1, 0, 0);\n      return Promise.resolve(this.canvas);\n    }\n  }, {\n    key: \"path\",\n    value: function path(_path) {\n      var _this2 = this;\n\n      this.ctx.beginPath();\n\n      if (Array.isArray(_path)) {\n        _path.forEach(function (point, index) {\n          var start = point.type === _drawing_Path__WEBPACK_IMPORTED_MODULE_0__[\"PATH\"].VECTOR ? point : point.start;\n\n          if (index === 0) {\n            _this2.ctx.moveTo(start.x, start.y);\n          } else {\n            _this2.ctx.lineTo(start.x, start.y);\n          }\n\n          if (point.type === _drawing_Path__WEBPACK_IMPORTED_MODULE_0__[\"PATH\"].BEZIER_CURVE) {\n            _this2.ctx.bezierCurveTo(point.startControl.x, point.startControl.y, point.endControl.x, point.endControl.y, point.end.x, point.end.y);\n          }\n        });\n      } else {\n        this.ctx.arc(_path.x + _path.radius, _path.y + _path.radius, _path.radius, 0, Math.PI * 2, true);\n      }\n\n      this.ctx.closePath();\n    }\n  }, {\n    key: \"rectangle\",\n    value: function rectangle(x, y, width, height, color) {\n      this.ctx.fillStyle = color.toString();\n      this.ctx.fillRect(x, y, width, height);\n    }\n  }, {\n    key: \"renderLinearGradient\",\n    value: function renderLinearGradient(bounds, gradient) {\n      var linearGradient = this.ctx.createLinearGradient(bounds.left + gradient.direction.x1, bounds.top + gradient.direction.y1, bounds.left + gradient.direction.x0, bounds.top + gradient.direction.y0);\n      addColorStops(gradient, linearGradient);\n      this.ctx.fillStyle = linearGradient;\n      this.ctx.fillRect(bounds.left, bounds.top, bounds.width, bounds.height);\n    }\n  }, {\n    key: \"renderRadialGradient\",\n    value: function renderRadialGradient(bounds, gradient) {\n      var _this3 = this;\n\n      var x = bounds.left + gradient.center.x;\n      var y = bounds.top + gradient.center.y;\n      var radialGradient = this.ctx.createRadialGradient(x, y, 0, x, y, gradient.radius.x);\n\n      if (!radialGradient) {\n        return;\n      }\n\n      addColorStops(gradient, radialGradient);\n      this.ctx.fillStyle = radialGradient;\n\n      if (gradient.radius.x !== gradient.radius.y) {\n        // transforms for elliptical radial gradient\n        var midX = bounds.left + 0.5 * bounds.width;\n        var midY = bounds.top + 0.5 * bounds.height;\n        var f = gradient.radius.y / gradient.radius.x;\n        var invF = 1 / f;\n        this.transform(midX, midY, [1, 0, 0, f, 0, 0], function () {\n          return _this3.ctx.fillRect(bounds.left, invF * (bounds.top - midY) + midY, bounds.width, bounds.height * invF);\n        });\n      } else {\n        this.ctx.fillRect(bounds.left, bounds.top, bounds.width, bounds.height);\n      }\n    }\n  }, {\n    key: \"renderRepeat\",\n    value: function renderRepeat(path, image, imageSize, offsetX, offsetY) {\n      this.path(path);\n      this.ctx.fillStyle = this.ctx.createPattern(this.resizeImage(image, imageSize), 'repeat');\n      this.ctx.translate(offsetX, offsetY);\n      this.ctx.fill();\n      this.ctx.translate(-offsetX, -offsetY);\n    }\n  }, {\n    key: \"renderTextNode\",\n    value: function renderTextNode(textBounds, color, font, textDecoration, textShadows) {\n      var _this4 = this;\n\n      this.ctx.font = [font.fontStyle, font.fontVariant, font.fontWeight, font.fontSize, font.fontFamily].join(' ');\n      textBounds.forEach(function (text) {\n        _this4.ctx.fillStyle = color.toString();\n\n        if (textShadows && text.text.trim().length) {\n          textShadows.slice(0).reverse().forEach(function (textShadow) {\n            _this4.ctx.shadowColor = textShadow.color.toString();\n            _this4.ctx.shadowOffsetX = textShadow.offsetX * _this4.options.scale;\n            _this4.ctx.shadowOffsetY = textShadow.offsetY * _this4.options.scale;\n            _this4.ctx.shadowBlur = textShadow.blur;\n\n            _this4.ctx.fillText(text.text, text.bounds.left, text.bounds.top + text.bounds.height);\n          });\n          _this4.ctx.shadowColor = '';\n          _this4.ctx.shadowOffsetX = 0;\n          _this4.ctx.shadowOffsetY = 0;\n          _this4.ctx.shadowBlur = 0;\n        } else {\n          _this4.ctx.fillText(text.text, text.bounds.left, text.bounds.top + text.bounds.height);\n        }\n\n        if (textDecoration !== null) {\n          var textDecorationColor = textDecoration.textDecorationColor || color;\n          textDecoration.textDecorationLine.forEach(function (textDecorationLine) {\n            switch (textDecorationLine) {\n              case _parsing_textDecoration__WEBPACK_IMPORTED_MODULE_1__[\"TEXT_DECORATION_LINE\"].UNDERLINE:\n                // Draws a line at the baseline of the font\n                // TODO As some browsers display the line as more than 1px if the font-size is big,\n                // need to take that into account both in position and size\n                var _this4$options$fontMe = _this4.options.fontMetrics.getMetrics(font),\n                    baseline = _this4$options$fontMe.baseline;\n\n                _this4.rectangle(text.bounds.left, Math.round(text.bounds.top + baseline), text.bounds.width, 1, textDecorationColor);\n\n                break;\n\n              case _parsing_textDecoration__WEBPACK_IMPORTED_MODULE_1__[\"TEXT_DECORATION_LINE\"].OVERLINE:\n                _this4.rectangle(text.bounds.left, Math.round(text.bounds.top), text.bounds.width, 1, textDecorationColor);\n\n                break;\n\n              case _parsing_textDecoration__WEBPACK_IMPORTED_MODULE_1__[\"TEXT_DECORATION_LINE\"].LINE_THROUGH:\n                // TODO try and find exact position for line-through\n                var _this4$options$fontMe2 = _this4.options.fontMetrics.getMetrics(font),\n                    middle = _this4$options$fontMe2.middle;\n\n                _this4.rectangle(text.bounds.left, Math.ceil(text.bounds.top + middle), text.bounds.width, 1, textDecorationColor);\n\n                break;\n            }\n          });\n        }\n      });\n    }\n  }, {\n    key: \"resizeImage\",\n    value: function resizeImage(image, size) {\n      if (image.width === size.width && image.height === size.height) {\n        return image;\n      }\n\n      var canvas = this.canvas.ownerDocument.createElement('canvas');\n      canvas.width = size.width;\n      canvas.height = size.height;\n      var ctx = canvas.getContext('2d');\n      ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, size.width, size.height);\n      return canvas;\n    }\n  }, {\n    key: \"setOpacity\",\n    value: function setOpacity(opacity) {\n      this.ctx.globalAlpha = opacity;\n    }\n  }, {\n    key: \"transform\",\n    value: function transform(offsetX, offsetY, matrix, callback) {\n      this.ctx.save();\n      this.ctx.translate(offsetX, offsetY);\n      this.ctx.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);\n      this.ctx.translate(-offsetX, -offsetY);\n      callback();\n      this.ctx.restore();\n    }\n  }]);\n\n  return CanvasRenderer;\n}();\n\n\n\n//# sourceURL=webpack://html2canvas/./src/renderer/CanvasRenderer.js?");

/***/ }),

/***/ "./src/renderer/ForeignObjectRenderer.js":
/*!***********************************************!*\
  !*** ./src/renderer/ForeignObjectRenderer.js ***!
  \***********************************************/
/*! exports provided: default, createForeignObjectSVG, loadSerializedSVG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ForeignObjectRenderer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createForeignObjectSVG\", function() { return createForeignObjectSVG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadSerializedSVG\", function() { return loadSerializedSVG; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar ForeignObjectRenderer =\n/*#__PURE__*/\nfunction () {\n  function ForeignObjectRenderer(element) {\n    _classCallCheck(this, ForeignObjectRenderer);\n\n    this.element = element;\n  }\n\n  _createClass(ForeignObjectRenderer, [{\n    key: \"render\",\n    value: function render(options) {\n      var _this = this;\n\n      this.options = options;\n      this.canvas = document.createElement('canvas');\n      this.ctx = this.canvas.getContext('2d');\n      this.canvas.width = Math.floor(options.width) * options.scale;\n      this.canvas.height = Math.floor(options.height) * options.scale;\n      this.canvas.style.width = \"\".concat(options.width, \"px\");\n      this.canvas.style.height = \"\".concat(options.height, \"px\");\n      this.ctx.scale(options.scale, options.scale);\n      options.logger.log(\"ForeignObject renderer initialized (\".concat(options.width, \"x\").concat(options.height, \" at \").concat(options.x, \",\").concat(options.y, \") with scale \").concat(options.scale));\n      var svg = createForeignObjectSVG(Math.max(options.windowWidth, options.width) * options.scale, Math.max(options.windowHeight, options.height) * options.scale, options.scrollX * options.scale, options.scrollY * options.scale, this.element);\n      return loadSerializedSVG(svg).then(function (img) {\n        if (options.backgroundColor) {\n          _this.ctx.fillStyle = options.backgroundColor.toString();\n\n          _this.ctx.fillRect(0, 0, options.width * options.scale, options.height * options.scale);\n        }\n\n        _this.ctx.drawImage(img, -options.x * options.scale, -options.y * options.scale);\n\n        return _this.canvas;\n      });\n    }\n  }]);\n\n  return ForeignObjectRenderer;\n}();\n\n\nvar createForeignObjectSVG = function createForeignObjectSVG(width, height, x, y, node) {\n  var xmlns = 'http://www.w3.org/2000/svg';\n  var svg = document.createElementNS(xmlns, 'svg');\n  var foreignObject = document.createElementNS(xmlns, 'foreignObject');\n  svg.setAttributeNS(null, 'width', width);\n  svg.setAttributeNS(null, 'height', height);\n  foreignObject.setAttributeNS(null, 'width', '100%');\n  foreignObject.setAttributeNS(null, 'height', '100%');\n  foreignObject.setAttributeNS(null, 'x', x);\n  foreignObject.setAttributeNS(null, 'y', y);\n  foreignObject.setAttributeNS(null, 'externalResourcesRequired', 'true');\n  svg.appendChild(foreignObject);\n  foreignObject.appendChild(node);\n  return svg;\n};\nvar loadSerializedSVG = function loadSerializedSVG(svg) {\n  return new Promise(function (resolve, reject) {\n    var img = new Image();\n\n    img.onload = function () {\n      return resolve(img);\n    };\n\n    img.onerror = reject;\n    img.src = \"data:image/svg+xml;charset=utf-8,\".concat(encodeURIComponent(new XMLSerializer().serializeToString(svg)));\n  });\n};\n\n//# sourceURL=webpack://html2canvas/./src/renderer/ForeignObjectRenderer.js?");

/***/ })

/******/ })["default"];
});

/***/ }),

/***/ "./src/app/directives/project-role.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/directives/project-role.directive.ts ***!
  \******************************************************/
/*! exports provided: ProjectRoleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectRoleDirective", function() { return ProjectRoleDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/project.service */ "./src/app/providers/project.service.ts");
/* harmony import */ var _providers_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/user.service */ "./src/app/providers/user.service.ts");




var ProjectRoleDirective = /** @class */ (function () {
    function ProjectRoleDirective(_projectServices, _userServices, el, renderer) {
        this._projectServices = _projectServices;
        this._userServices = _userServices;
        this.el = el;
        this.renderer = renderer;
        if (!this._projectServices.administrators.map(function (adm) { return adm._id; }).includes(this._userServices.userOnline._id)) {
            this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
        }
    }
    ProjectRoleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appProjectRole]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectServices"], _providers_user_service__WEBPACK_IMPORTED_MODULE_3__["UserServices"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], ProjectRoleDirective);
    return ProjectRoleDirective;
}());



/***/ }),

/***/ "./src/app/guards/admin.guard.ts":
/*!***************************************!*\
  !*** ./src/app/guards/admin.guard.ts ***!
  \***************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/user.service */ "./src/app/providers/user.service.ts");




var AdminGuard = /** @class */ (function () {
    function AdminGuard(_userServices, router) {
        this._userServices = _userServices;
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function () {
        if (this._userServices.userOnline.role === 'ADMIN_ROLE') {
            return true;
        }
        else {
            this.router.navigate(['/dashboard']).then(function () {
                console.log('LOCKED BY GUARD');
            });
            return false;
        }
    };
    AdminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_user_service__WEBPACK_IMPORTED_MODULE_3__["UserServices"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/pages/addressBook/adressBook.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/addressBook/adressBook.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scrollable {\n  height: 55px; }\n\n.virtual-scroll {\n  height: 150px; }\n\n@media (min-height: 694px) {\n  .scrollable {\n    height: calc(1.1*55px); }\n  .virtual-scroll {\n    height: calc(1.1*150px); } }\n\n@media (min-height: 781px) {\n  .scrollable {\n    height: calc(1.25*55px); }\n  .virtual-scroll {\n    height: calc(1.25*150px); } }\n\n@media (min-height: 833px) {\n  .scrollable {\n    height: calc(1.35*55px); }\n  .virtual-scroll {\n    height: calc(1.35*150px); } }\n\n@media (min-height: 937px) {\n  .scrollable {\n    height: calc(1.5*55px); }\n  .virtual-scroll {\n    height: calc(1.5*150px); } }\n\n@media (min-height: 1250px) {\n  .scrollable {\n    height: calc(2*55px); }\n  .virtual-scroll {\n    height: calc(2*150px); } }\n\n@media (min-height: 1875px) {\n  .scrollable {\n    height: calc(3*55px); }\n  .virtual-scroll {\n    height: calc(3*150px); } }\n\n@media (min-height: 2500px) {\n  .scrollable {\n    height: calc(3.9*55px); }\n  .virtual-scroll {\n    height: calc(3.9*150px); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkcmVzc0Jvb2svQzpcXFVzZXJzXFwzNDY5NVxcRGVza3RvcFxcRFJBRlRcXENBUkdPIE1VU0lDXFxGUk9OVEVORF9FU0NVRUxBL3NyY1xcYXBwXFxwYWdlc1xcYWRkcmVzc0Jvb2tcXGFkcmVzc0Jvb2suc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVcsRUFDZDs7QUFDRDtFQUNJLGNBQ0osRUFBQzs7QUFHRDtFQUNNO0lBQ0YsdUJBQXFCLEVBQ3hCO0VBQ0Q7SUFDSSx3QkFBc0IsRUFDekIsRUFBQTs7QUFHRDtFQUNDO0lBQ0csd0JBQXNCLEVBQ3pCO0VBQ0Q7SUFDSSx5QkFBdUIsRUFDMUIsRUFBQTs7QUFHRDtFQUNDO0lBQ0csd0JBQXNCLEVBQ3pCO0VBQ0Q7SUFDSSx5QkFBdUIsRUFDMUIsRUFBQTs7QUFHRDtFQUNDO0lBQ0csdUJBQXFCLEVBQ3hCO0VBQ0Q7SUFDSSx3QkFBc0IsRUFDekIsRUFBQTs7QUFHRDtFQUNDO0lBQ0cscUJBQW1CLEVBQ3RCO0VBQ0Q7SUFDSSxzQkFBb0IsRUFDdkIsRUFBQTs7QUFHRDtFQUNFO0lBQ0UscUJBQW1CLEVBQ3RCO0VBQ0Q7SUFDSSxzQkFBb0IsRUFDdkIsRUFBQTs7QUFHRDtFQUNDO0lBQ0csdUJBQXFCLEVBQ3hCO0VBQ0Q7SUFDSSx3QkFBc0IsRUFDekIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZHJlc3NCb29rL2FkcmVzc0Jvb2suc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGxhYmxle1xyXG4gICAgaGVpZ2h0OjU1cHg7XHJcbn1cclxuLnZpcnR1YWwtc2Nyb2xse1xyXG4gICAgaGVpZ2h0OjE1MHB4XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDY5NHB4KSB7XHJcbiAgICAgIC5zY3JvbGxhYmxle1xyXG4gICAgaGVpZ2h0OmNhbGMoMS4xKjU1cHgpO1xyXG59ICBcclxuLnZpcnR1YWwtc2Nyb2xse1xyXG4gICAgaGVpZ2h0OmNhbGMoMS4xKjE1MHB4KVxyXG59XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLWhlaWdodDogNzgxcHgpIHtcclxuIC5zY3JvbGxhYmxle1xyXG4gICAgaGVpZ2h0OmNhbGMoMS4yNSo1NXB4KTtcclxufSAgXHJcbi52aXJ0dWFsLXNjcm9sbHtcclxuICAgIGhlaWdodDpjYWxjKDEuMjUqMTUwcHgpXHJcbn1cclxufVxyXG5cclxuQG1lZGlhIChtaW4taGVpZ2h0OiA4MzNweCkge1xyXG4gLnNjcm9sbGFibGV7XHJcbiAgICBoZWlnaHQ6Y2FsYygxLjM1KjU1cHgpO1xyXG59ICBcclxuLnZpcnR1YWwtc2Nyb2xse1xyXG4gICAgaGVpZ2h0OmNhbGMoMS4zNSoxNTBweClcclxufVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDkzN3B4KSB7XHJcbiAuc2Nyb2xsYWJsZXtcclxuICAgIGhlaWdodDpjYWxjKDEuNSo1NXB4KTtcclxufSAgXHJcbi52aXJ0dWFsLXNjcm9sbHtcclxuICAgIGhlaWdodDpjYWxjKDEuNSoxNTBweClcclxufVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDEyNTBweCkge1xyXG4gLnNjcm9sbGFibGV7XHJcbiAgICBoZWlnaHQ6Y2FsYygyKjU1cHgpO1xyXG59ICBcclxuLnZpcnR1YWwtc2Nyb2xse1xyXG4gICAgaGVpZ2h0OmNhbGMoMioxNTBweClcclxufVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDE4NzVweCkge1xyXG4gIC5zY3JvbGxhYmxle1xyXG4gICAgaGVpZ2h0OmNhbGMoMyo1NXB4KTtcclxufSAgXHJcbi52aXJ0dWFsLXNjcm9sbHtcclxuICAgIGhlaWdodDpjYWxjKDMqMTUwcHgpXHJcbn1cclxufVxyXG5cclxuQG1lZGlhIChtaW4taGVpZ2h0OiAyNTAwcHgpIHtcclxuIC5zY3JvbGxhYmxle1xyXG4gICAgaGVpZ2h0OmNhbGMoMy45KjU1cHgpO1xyXG59ICBcclxuLnZpcnR1YWwtc2Nyb2xse1xyXG4gICAgaGVpZ2h0OmNhbGMoMy45KjE1MHB4KVxyXG59XHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/addressBook/alumni/alumni.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/addressBook/alumni/alumni.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row animated fadeIn pagesContainerFixed \">\r\n    <div class='col-12'>\r\n      <div class=\"row\">\r\n        <div class=\"col-12  list-group\">\r\n          <h5 class='list-group-item-heading text-center mt-3 highlight'>ALUMNOS</h5>\r\n        <input #input placeholder=\"Buscar alumno\" class='pb-2 mt-2' type=\"text\" name=\"\" id=\"\">\r\n        <div class='d-flex justify-content-center'>\r\n            <button class='btn btn-warning mb-2 highlight' (click)='_alumniServices.searchAlumnis(input.value,0).subscribe();searchMode = true;from =0;getMode=false;_alumniServices.alumnis=[]'>BUSCAR\r\n                ALUMNOS</button>\r\n            <button (click)='from=0;searchMode=false;getMode=true;_alumniServices.getAlumnis().subscribe();_alumniServices.alumnis=[]' class='btn btn-warning mb-2 highlight'>TODOS</button>\r\n        </div>\r\n        <button (click)='postAlumni()' class='btn btn-warning m-2 highlight'>CREAR ALUMNO</button>\r\n        </div>\r\n        <div class=\"col-12\" style='background:#DCD4D2'>\r\n          <table class=' table mb-2 ' style='background:#F5F1E3;border:1px solid #F0B841'>\r\n            <tr>\r\n              <th>Nombre</th>\r\n              <th style='width:50% '>Materias</th>\r\n              <th></th>\r\n              <th></th>\r\n            </tr>\r\n            <tr *ngFor=\"let alumni of _alumniServices.alumnis  let i=index\">\r\n              <td>\r\n                <div><strong> {{alumni.indexcard['name']}}</strong></div>\r\n              </td>\r\n              <td style='width: 40% '>\r\n                <div class='scrollable' style=\"border:1px solid black;background:#F5F1E3\">\r\n                  <div class=\"d-flex justify-content-around\" *ngFor=\"let subject of _alumniServices.alumnis[i].subjects\">\r\n                    <a class=\"list-group-item list-group-item-action\">{{subject.name}}</a>\r\n                    <button (click)=\"_subjectServices.addOrDeleteAlumni(subject._id,alumni._id).subscribe()\"\r\n                      class='btn btn-warning m-2 '>X</button>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n              <td>\r\n                <div>\r\n                  <button (click)=' addSubject(alumni._id) ' class='btn btn-warning m-2 '>Añadir materia</button>\r\n                </div>\r\n              </td>\r\n              <td>\r\n                <div class='btn-group d-flex justify-content-end '>\r\n                  <button (click)=\"putAlumni(alumni.indexcard['_id']) \" class=\"btn btn-primary text-center\">\r\n                    <i class=\"fa fa-info fa-lg\"></i>\r\n                  </button>\r\n                  <button (click)='deleteAlumni(alumni._id) ' class=\"btn btn-danger text-center\">\r\n                    <i class=\"far fa-trash-alt\"></i>\r\n                  </button>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n          <div class='d-flex justify-content-around mb-2 '>\r\n            <button *ngIf=\"from && from > 0\" (click)='changeFrom(-5) ' class='btn btn-secondary '>Previous</button>\r\n            <button *ngIf=\"_alumniServices.count > from+5\" (click)='changeFrom(5) '\r\n              class='btn btn-secondary '>Following</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/addressBook/alumni/alumni.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/addressBook/alumni/alumni.component.ts ***!
  \**************************************************************/
/*! exports provided: AlumniComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlumniComponent", function() { return AlumniComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modals_subject_modal_subject_modal_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../modals/subject-modal/subject-modal-controller */ "./src/app/modals/subject-modal/subject-modal-controller.ts");
/* harmony import */ var src_app_modals_index_card_modal_indexcard_modal_controller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modals/index-card-modal/indexcard-modal-controller.service */ "./src/app/modals/index-card-modal/indexcard-modal-controller.service.ts");
/* harmony import */ var _providers_alumni_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/alumni.service */ "./src/app/providers/alumni.service.ts");
/* harmony import */ var src_app_providers_subject_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/subject.service */ "./src/app/providers/subject.service.ts");
/* harmony import */ var _providers_swal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/swal.service */ "./src/app/providers/swal.service.ts");







var AlumniComponent = /** @class */ (function () {
    function AlumniComponent(_alumniServices, _subjectServices, _subjectModalController, _indexcardModalController, _swalService) {
        this._alumniServices = _alumniServices;
        this._subjectServices = _subjectServices;
        this._subjectModalController = _subjectModalController;
        this._indexcardModalController = _indexcardModalController;
        this._swalService = _swalService;
        this.from = 0;
        this.getMode = true;
        this.searchMode = false;
    }
    AlumniComponent.prototype.ngOnInit = function () {
        this._alumniServices.getAlumnis().subscribe();
    };
    AlumniComponent.prototype.changeFrom = function (number) {
        if (this.from + number >= 0) {
            this.from += number;
        }
        if (this.searchMode) {
            this._alumniServices.searchAlumnis(this.input.nativeElement.value, this.from).subscribe(function () { });
        }
        else {
            this._alumniServices.getAlumnis(this.from).subscribe();
        }
    };
    AlumniComponent.prototype.postAlumni = function () {
        this._indexcardModalController.showModal();
        this._indexcardModalController.notification.emit('ALUMNI');
    };
    AlumniComponent.prototype.putAlumni = function (id) {
        this._indexcardModalController.showModal(id);
        this._indexcardModalController.notification.emit("ALUMNI");
    };
    AlumniComponent.prototype.addSubject = function (alumniId) {
        this._subjectModalController.showModal(alumniId);
        this._subjectModalController.notification.emit('ALUMNI');
    };
    AlumniComponent.prototype.deleteAlumni = function (id) {
        var _this = this;
        this._swalService.confirmDelete().then(function (response) {
            if (response) {
                _this._alumniServices.deleteAlumni(id).subscribe(function () {
                    _this._alumniServices.getAlumnis(_this.from).subscribe();
                });
            }
        });
    };
    AlumniComponent.prototype.ngOnDestroy = function () {
        this._alumniServices.alumnis = [];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AlumniComponent.prototype, "input", void 0);
    AlumniComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-alumni",
            template: __webpack_require__(/*! ./alumni.component.html */ "./src/app/pages/addressBook/alumni/alumni.component.html"),
            styles: [__webpack_require__(/*! ../adressBook.scss */ "./src/app/pages/addressBook/adressBook.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_alumni_service__WEBPACK_IMPORTED_MODULE_4__["AlumniServices"],
            src_app_providers_subject_service__WEBPACK_IMPORTED_MODULE_5__["SubjectServices"],
            _modals_subject_modal_subject_modal_controller__WEBPACK_IMPORTED_MODULE_2__["SubjectModalController"],
            src_app_modals_index_card_modal_indexcard_modal_controller_service__WEBPACK_IMPORTED_MODULE_3__["IndexcardModalController"],
            _providers_swal_service__WEBPACK_IMPORTED_MODULE_6__["SwalService"]])
    ], AlumniComponent);
    return AlumniComponent;
}());



/***/ }),

/***/ "./src/app/pages/addressBook/professor/professor.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/addressBook/professor/professor.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row animated fadeIn pagesContainerFixed\">\r\n    <div class='col-12 '>\r\n      <div class=\"row\">\r\n        <div class=\"col-12 list-group m-2\">\r\n          <h5 class='list-group-item-heading text-center highlight'>PROFESORES</h5>\r\n          <input #input placeholder=\"Buscar profesor\" type=\"text\" name=\"\" id=\"\">\r\n        </div>\r\n        <div class='col-12 d-flex justify-content-center m-1 mb-3'>\r\n            <button class='btn btn-warning highlight'\r\n              (click)='_professorServices.searchProfessors(input.value,0).subscribe();searchMode = true;from =0;getMode=false;_professorServices.professors=[]'>BUSCAR\r\n              PROFESORES</button>\r\n            <button\r\n              (click)='from=0;searchMode=false;getMode=true;_professorServices.getProfessors().subscribe();_professorServices.professors=[]'\r\n              class='btn btn-warning highlight'>TODOS</button>\r\n        </div>\r\n        <div class=\"col-12 list-group p-0\">\r\n                <button (click)='postProfessor()' class='btn btn-warning highlight'>CREAR PROFESOR</button>\r\n        </div>\r\n        </div>\r\n        <div class=\"col-12 mt-2\" style='background:#DCD4D2'>\r\n          <table class='table' style='background:#F5F1E3'>\r\n            <tr>\r\n              <th>Nombre</th>\r\n              <th style='width:50%'>Materias</th>\r\n              <th></th>\r\n              <th></th>\r\n            </tr>\r\n            <tr *ngFor=\"let professor of _professorServices.professors  let i=index\">\r\n              <td>\r\n                <div><strong> {{professor.indexcard['name']}}</strong></div>\r\n              </td>\r\n              <td style='width: 40%'>\r\n                <div class='scrollable' style=\"background:#F5F1E3\">\r\n                  <div class=\"d-flex justify-content-around\" *ngFor=\"let subject of _professorServices.professors[i].subjects\">\r\n                    <a class=\"list-group-item list-group-item-action\">{{subject.name}}</a>\r\n                    <button (click)=\"_subjectServices.addOrDeleteProfessor(subject._id,professor._id).subscribe()\"\r\n                      class='btn btn-warning '>X</button>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n              <td>\r\n                <div>\r\n                  <button (click)='addSubject(professor._id)' class='btn btn-warning highlight'>Añadir materia</button>\r\n                </div>\r\n              </td>\r\n              <td>\r\n                <div class='btn-group d-flex justify-content-end'>\r\n                  <button (click)=\"putProfessor(professor.indexcard['_id'])\" class=\"btn btn-primary text-center\">\r\n                    <i class=\"fa fa-info fa-lg\"></i>\r\n                  </button>\r\n                  <button (click)='deleteProfessor(professor._id)' class=\"btn btn-danger text-center\">\r\n                    <i class=\"far fa-trash-alt\"></i>\r\n                  </button>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n          <div class='d-flex justify-content-around '>\r\n            <button *ngIf=\"from && from > 0\" (click)='changeFrom(-5)' class='btn btn-secondary'>Previous</button>\r\n            <button *ngIf=\"_professorServices.count > from+5\" (click)='changeFrom(5)'\r\n              class='btn btn-secondary'>Following</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/addressBook/professor/professor.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/addressBook/professor/professor.component.ts ***!
  \********************************************************************/
/*! exports provided: ProfessorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorComponent", function() { return ProfessorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_modals_subject_modal_subject_modal_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modals/subject-modal/subject-modal-controller */ "./src/app/modals/subject-modal/subject-modal-controller.ts");
/* harmony import */ var src_app_modals_index_card_modal_indexcard_modal_controller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modals/index-card-modal/indexcard-modal-controller.service */ "./src/app/modals/index-card-modal/indexcard-modal-controller.service.ts");
/* harmony import */ var _providers_professor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/professor.service */ "./src/app/providers/professor.service.ts");
/* harmony import */ var _providers_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/user.service */ "./src/app/providers/user.service.ts");
/* harmony import */ var _providers_subject_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/subject.service */ "./src/app/providers/subject.service.ts");
/* harmony import */ var _providers_swal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../providers/swal.service */ "./src/app/providers/swal.service.ts");








var ProfessorComponent = /** @class */ (function () {
    function ProfessorComponent(_userServices, _professorServices, _subjectServices, _subjectModalController, _indexcardModalController, _swalService) {
        this._userServices = _userServices;
        this._professorServices = _professorServices;
        this._subjectServices = _subjectServices;
        this._subjectModalController = _subjectModalController;
        this._indexcardModalController = _indexcardModalController;
        this._swalService = _swalService;
        this.from = 0;
        this.searchMode = false;
        this.getMode = true;
    }
    ProfessorComponent.prototype.ngOnInit = function () {
        this._professorServices.getProfessors().subscribe();
    };
    ProfessorComponent.prototype.changeFrom = function (number) {
        if (this.from + number >= 0) {
            this.from += number;
        }
        if (this.searchMode) {
            this._professorServices
                .searchProfessors(this.input.nativeElement.value, this.from)
                .subscribe();
        }
        else {
            this._professorServices.getProfessors(this.from).subscribe();
        }
    };
    ProfessorComponent.prototype.postProfessor = function () {
        this._indexcardModalController.showModal();
        this._indexcardModalController.notification.emit("PROFESSOR");
    };
    ProfessorComponent.prototype.putProfessor = function (id) {
        this._indexcardModalController.showModal(id);
        this._indexcardModalController.notification.emit("PROFESSOR");
    };
    ProfessorComponent.prototype.deleteProfessor = function (id) {
        var _this = this;
        this._swalService.confirmDelete().then(function (res) {
            if (res) {
                _this._professorServices.deleteProfessor(id).subscribe(function () {
                    _this._professorServices.getProfessors(_this.from).subscribe();
                });
            }
        });
    };
    ProfessorComponent.prototype.addSubject = function (professorId) {
        this._subjectModalController.showModal(professorId);
        this._subjectModalController.notification.emit("PROFESSOR");
    };
    ProfessorComponent.prototype.ngOnDestroy = function () {
        this._professorServices.professors = [];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("input"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ProfessorComponent.prototype, "input", void 0);
    ProfessorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-professor",
            template: __webpack_require__(/*! ./professor.component.html */ "./src/app/pages/addressBook/professor/professor.component.html"),
            styles: [__webpack_require__(/*! ../adressBook.scss */ "./src/app/pages/addressBook/adressBook.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_user_service__WEBPACK_IMPORTED_MODULE_5__["UserServices"],
            _providers_professor_service__WEBPACK_IMPORTED_MODULE_4__["ProfessorsServices"],
            _providers_subject_service__WEBPACK_IMPORTED_MODULE_6__["SubjectServices"],
            src_app_modals_subject_modal_subject_modal_controller__WEBPACK_IMPORTED_MODULE_2__["SubjectModalController"],
            src_app_modals_index_card_modal_indexcard_modal_controller_service__WEBPACK_IMPORTED_MODULE_3__["IndexcardModalController"],
            _providers_swal_service__WEBPACK_IMPORTED_MODULE_7__["SwalService"]])
    ], ProfessorComponent);
    return ProfessorComponent;
}());



/***/ }),

/***/ "./src/app/pages/addressBook/subject/subject.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/addressBook/subject/subject.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row m-1 animated fadeIn pagesContainerFixed\">\r\n    <div class=\"col-12\">\r\n        <div class='list-group' >\r\n            <h5 class='list-group-item-heading text-center mt-3 highlight'>MATERIAS</h5>\r\n            <button (click)='postSubject()' class='btn btn-warning m-2 highlight'>CREAR MATERIA</button>\r\n            <div class=\"row card-group\">\r\n                <div *ngFor=\"let subject of _subjectServices.subjects\" class=\"card\" style='background:#F5F1E3'>\r\n                    <div (click)='selectSubject(subject._id)' class=\"card-body d-flex justify-content-center\">\r\n                        <a>{{subject.name}}</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"_subjectServices.subjectSelected\" class=\"row animated fadeIn\">\r\n                <div class=\"col-12\">\r\n                    <div class=\"card\" style='background:#F5F1E3;border:1px solid #F0B841'>\r\n                        <div class=\"card-header\" style='background:white'>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-11\">\r\n                                    <h5 class='text-center'>{{_subjectServices.subjectSelected.name.toUpperCase()}}</h5>\r\n                                </div>\r\n                                <div class=\"col-1 d-flex justify-content-end\">\r\n                                    <button (click)='deleteSubject(_subjectServices.subjectSelected._id)' class='text-left m-2 btn btn-danger'><i class=\"far fa-trash-alt\"></i></button>\r\n                                    <button (click)='putSubject(_subjectServices.subjectSelected._id)' class='m-2 btn btn-primary'><i class=\"fas fa-edit\"></i></button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-6\">\r\n                                    <div class='d-flex justify-content-around'>\r\n                                        <h6 class='text-center highlight'>PROFESORES</h6>\r\n                                    </div>\r\n                                    <div>\r\n                                        <button (click)='addProfessor(_subjectServices.subjectSelected._id)' class='btn btn-block btn-warning'>Añadir</button>\r\n                                    </div>\r\n                                    <cdk-virtual-scroll-viewport class=\"virtual-scroll\" itemSize='40px' style=\"border:1px solid black;background:#F5F1E3\">\r\n                                        <table class='table'>\r\n                                            <tr>\r\n                                                <td class=\"row\">\r\n                                                    <div *cdkVirtualFor=\"let professor of _subjectServices.subjectSelected.professors\" class='col-12 p-2 '>\r\n                                                        <div class=\"row d-flex flex-row justify-content-around\">\r\n                                                            <div class='pr-2'><a>{{professor.indexcard['name']}}</a></div>\r\n                                                            <div class='pl-5'><button (click)=\"_subjectServices.addOrDeleteProfessor(_subjectServices.subjectSelected._id,professor['_id']).subscribe()\" class='btn btn-danger'>x</button></div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </table>\r\n                                    </cdk-virtual-scroll-viewport>\r\n                                </div>\r\n                                <div class=\"col-6\">\r\n                                    <div>\r\n                                        <h6 class='text-center highlight'>ALUMNOS</h6>\r\n                                    </div>\r\n                                    <div>\r\n                                        <button (click)='addAlumni(_subjectServices.subjectSelected._id)' class='btn btn-block btn-warning'>Añadir</button>\r\n                                    </div>\r\n                                    <cdk-virtual-scroll-viewport class=\"virtual-scroll\" itemSize='40px' style=\"border:1px solid black;background:#F5F1E3\">\r\n                                        <table class='table' *ngIf=\"_subjectServices.subjectSelected.alumnis\">\r\n                                            <tr>\r\n                                                <td class=\"row\">\r\n                                                    <div *cdkVirtualFor=\"let alumni of _subjectServices.subjectSelected.alumnis\" class=\"col-12 pt-2\">\r\n                                                        <div class=\"row d-flex flex-row justify-content-around\">\r\n                                                            <div><a>{{alumni.indexcard['name']}}</a></div>\r\n                                                            <div><button (click)=\"_subjectServices.addOrDeleteAlumni(_subjectServices.subjectSelected._id,alumni['_id']).subscribe()\" class='btn btn-danger'>x</button></div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </table>\r\n                                    </cdk-virtual-scroll-viewport>\r\n                                </div>\r\n                                <div class=\"col-12 mt-2\">\r\n                                    <strong>Información útil:</strong>\r\n                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam laboriosam excepturi corrupti natus dolorum quos ratione nostrum earum officiis, quae ipsam culpa libero ut illo beatae obcaecati necessitatibus officia\r\n                                        neque.\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/addressBook/subject/subject.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/addressBook/subject/subject.component.ts ***!
  \****************************************************************/
/*! exports provided: SubjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectComponent", function() { return SubjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modals_subject_modal_subject_modal_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../modals/subject-modal/subject-modal-controller */ "./src/app/modals/subject-modal/subject-modal-controller.ts");
/* harmony import */ var _providers_subject_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/subject.service */ "./src/app/providers/subject.service.ts");
/* harmony import */ var _modals_alumni_modal_alumni_modal_controller_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../modals/alumni-modal/alumni-modal-controller.service */ "./src/app/modals/alumni-modal/alumni-modal-controller.service.ts");
/* harmony import */ var _modals_professor_modal_professor_modal_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../modals/professor-modal/professor-modal-controller */ "./src/app/modals/professor-modal/professor-modal-controller.ts");
/* harmony import */ var _providers_swal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/swal.service */ "./src/app/providers/swal.service.ts");







var SubjectComponent = /** @class */ (function () {
    function SubjectComponent(_subjectServices, _subjectModalController, _alumniModalController, _professorModalController, _swalServices) {
        this._subjectServices = _subjectServices;
        this._subjectModalController = _subjectModalController;
        this._alumniModalController = _alumniModalController;
        this._professorModalController = _professorModalController;
        this._swalServices = _swalServices;
        this.subjects = [];
        this.uploading = true;
    }
    SubjectComponent.prototype.ngOnInit = function () {
        this._subjectServices.getSubjects().subscribe();
    };
    SubjectComponent.prototype.selectSubject = function (id) {
        this._subjectServices.subjectSelected = this._subjectServices.subjects.filter(function (subject) { return subject._id === id; })[0];
        this.uploading = false;
    };
    SubjectComponent.prototype.postSubject = function () {
        this._subjectModalController.showModal();
        this._subjectModalController.notification.emit();
    };
    SubjectComponent.prototype.putSubject = function (id) {
        this._subjectModalController.showModal(id);
        this._subjectModalController.notification.emit();
    };
    SubjectComponent.prototype.deleteSubject = function (id) {
        var _this = this;
        this._swalServices.confirmDelete().then(function (res) {
            if (res) {
                _this._subjectServices.deleteSubject(id).subscribe(function () {
                    _this._subjectServices.getSubjects().subscribe();
                    _this._subjectServices.subjectSelected = undefined;
                });
            }
        });
    };
    SubjectComponent.prototype.addProfessor = function (id) {
        this._professorModalController.showModal(id);
        this._professorModalController.notification.emit();
    };
    SubjectComponent.prototype.addAlumni = function (id) {
        this._alumniModalController.showModal(id);
        this._alumniModalController.notification.emit();
    };
    SubjectComponent.prototype.ngOnDestroy = function () {
        this._subjectServices.subjects = [];
        this._subjectServices.subjectSelected = undefined;
    };
    SubjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-subject",
            template: __webpack_require__(/*! ./subject.component.html */ "./src/app/pages/addressBook/subject/subject.component.html"),
            styles: [__webpack_require__(/*! ../adressBook.scss */ "./src/app/pages/addressBook/adressBook.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_subject_service__WEBPACK_IMPORTED_MODULE_3__["SubjectServices"],
            _modals_subject_modal_subject_modal_controller__WEBPACK_IMPORTED_MODULE_2__["SubjectModalController"],
            _modals_alumni_modal_alumni_modal_controller_service__WEBPACK_IMPORTED_MODULE_4__["AlumnniModalController"],
            _modals_professor_modal_professor_modal_controller__WEBPACK_IMPORTED_MODULE_5__["ProfessorModalController"],
            _providers_swal_service__WEBPACK_IMPORTED_MODULE_6__["SwalService"]])
    ], SubjectComponent);
    return SubjectComponent;
}());



/***/ }),

/***/ "./src/app/pages/calendar/calendar.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/calendar/calendar.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <router-outlet [ngClass]=\"_spinnerServices.pageHidden\" >\r\n    </router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/calendar/calendar.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/calendar/calendar.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/calendar/calendar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/calendar/calendar.component.ts ***!
  \******************************************************/
/*! exports provided: CalendarManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarManagerComponent", function() { return CalendarManagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_calendar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/calendar.service */ "./src/app/providers/calendar.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_demo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/demo.service */ "./src/app/providers/demo.service.ts");
/* harmony import */ var _providers_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/spinner.service */ "./src/app/providers/spinner.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







var CalendarManagerComponent = /** @class */ (function () {
    function CalendarManagerComponent(_calendarServices, router, activatedRoute, _demoServices, _spinnerServices) {
        this._calendarServices = _calendarServices;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this._demoServices = _demoServices;
        this._spinnerServices = _spinnerServices;
    }
    CalendarManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["timer"])().subscribe(function () {
            _this._spinnerServices.openSpinner();
        });
        this._demoServices.calendarPopup();
        this.activatedRoute.params.subscribe(function (params) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var today_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (!params['weekId'] && !params['dayId'] && !this._calendarServices.currentDay && !this._calendarServices.currentWeek) {
                    today_1 = new Date();
                    today_1 = new Date(today_1.getFullYear(), today_1.getMonth(), today_1.getDate(), 6, 0, 0, 0);
                    this._calendarServices.getDayByDate(today_1.getTime()).subscribe(function (res) {
                        if (res === 'no-day') {
                            _this._calendarServices.postWeek(today_1).subscribe(function () {
                                _this._calendarServices.checkWeekDay().then(function (dayId) {
                                    _this._calendarServices.getDayById(dayId).subscribe(function () {
                                        _this.router.navigate(["./calendar", _this._calendarServices.currentWeek._id, _this._calendarServices.currentDay._id]);
                                        return;
                                    });
                                });
                            });
                        }
                        else {
                            var dayOfTheWeek = new Date(_this._calendarServices.currentDay.date).getDay();
                            _this._calendarServices.getWeekByDay(_this._calendarServices.currentDay._id, dayOfTheWeek).subscribe(function () {
                                _this.router.navigate(['./calendar', _this._calendarServices.currentWeek._id, _this._calendarServices.currentDay._id]);
                                return;
                            });
                        }
                    });
                }
                return [2 /*return*/];
            });
        }); });
        this._calendarServices.getPermanentEvents().subscribe();
    };
    CalendarManagerComponent.prototype.ngOnDestroy = function () {
        this._calendarServices.currentDay = undefined;
        this._calendarServices.currentWeek = undefined;
        this._calendarServices.permanentEvents = [];
        this._spinnerServices.closeSpinner();
    };
    CalendarManagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calendar',
            template: __webpack_require__(/*! ./calendar.component.html */ "./src/app/pages/calendar/calendar.component.html"),
            styles: [__webpack_require__(/*! ./calendar.component.scss */ "./src/app/pages/calendar/calendar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_providers_calendar_service__WEBPACK_IMPORTED_MODULE_2__["CalendarService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _providers_demo_service__WEBPACK_IMPORTED_MODULE_4__["DemoService"],
            _providers_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"]])
    ], CalendarManagerComponent);
    return CalendarManagerComponent;
}());



/***/ }),

/***/ "./src/app/pages/calendar/day/day.component.css":
/*!******************************************************!*\
  !*** ./src/app/pages/calendar/day/day.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    padding: 0px;\r\n    margin: 0px;\r\n    border: none;\r\n    font-size: 13px\r\n}\r\n\r\n.card-body {\r\n    height: 25px;\r\n    padding: 0px;\r\n    margin: 0px;\r\n    border: none;\r\n}\r\n\r\n.card-group {\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\n.day {\r\n    cursor: pointer\r\n}\r\n\r\n.date {\r\n    cursor: pointer;\r\n}\r\n\r\n.pagesContainerFixed{\r\nborder-right: 0px;\r\n}\r\n\r\n.scrollableTable tbody{\r\n        height:200px;\r\n        width: 100%;\r\n}\r\n\r\n.facilitiesRow{\r\n    height:47px;\r\n}\r\n\r\n.printable{\r\n        margin-top: 10px\r\n    }\r\n\r\n@media (min-height: 694px) {\r\n \r\n    .printable{\r\n        margin-top: 15px\r\n    }\r\n    \r\n}\r\n\r\n@media (min-height: 781px) {\r\n .scrollableTable tbody{\r\n        height:calc(1.25*200px)\r\n    } \r\n    .printable{\r\n        margin-top: 15px\r\n    }\r\n    .facilitiesRow{\r\n    height:calc(1.1*47px);\r\n}  \r\n}\r\n\r\n@media (min-height: 937px) {\r\n    .printable{\r\n        margin-top: 50px\r\n    }\r\n}\r\n\r\n@media (min-height: 1250px) {\r\n .scrollableTable tbody{\r\n        height:calc(2*200px)\r\n    } \r\n    .printable{\r\n        margin-top: 20px\r\n    }\r\n     .facilitiesRow{\r\n    height:calc(2*47px);\r\n}\r\n}\r\n\r\n@media (min-height: 1875px) {\r\n   .scrollableTable tbody{\r\n        height:calc(3*200px)\r\n    } \r\n    .printable{\r\n        margin-top: 25px\r\n    } \r\n     .facilitiesRow{\r\n    height:calc(3*47px);\r\n}\r\n}\r\n\r\n@media (min-height: 2500px) {\r\n .scrollableTable tbody{\r\n        height:calc(3.5*200px)\r\n    } \r\n    .printable{\r\n        margin-top: 70px\r\n    }\r\n     .facilitiesRow{\r\n    height:calc(3.5*47px);\r\n}\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FsZW5kYXIvZGF5L2RheS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtDQUNsQjs7QUFFRDtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osYUFBYTtDQUNoQjs7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxnQkFBZ0I7Q0FDbkI7O0FBRUQ7QUFDQSxrQkFBa0I7Q0FDakI7O0FBR0Q7UUFDUSxhQUFhO1FBQ2IsWUFBWTtDQUNuQjs7QUFFRDtJQUNJLFlBQVk7Q0FDZjs7QUFDRDtRQUNRLGdCQUFnQjtLQUNuQjs7QUFFSjs7SUFFRztRQUNJLGdCQUFnQjtLQUNuQjs7Q0FFSjs7QUFFRDtDQUNDO1FBQ08sdUJBQXVCO0tBQzFCO0lBQ0Q7UUFDSSxnQkFBZ0I7S0FDbkI7SUFDRDtJQUNBLHNCQUFzQjtDQUN6QjtDQUNBOztBQUVEO0lBQ0k7UUFDSSxnQkFBZ0I7S0FDbkI7Q0FDSjs7QUFFRDtDQUNDO1FBQ08sb0JBQW9CO0tBQ3ZCO0lBQ0Q7UUFDSSxnQkFBZ0I7S0FDbkI7S0FDQTtJQUNELG9CQUFvQjtDQUN2QjtDQUNBOztBQUVEO0dBQ0c7UUFDSyxvQkFBb0I7S0FDdkI7SUFDRDtRQUNJLGdCQUFnQjtLQUNuQjtLQUNBO0lBQ0Qsb0JBQW9CO0NBQ3ZCO0NBQ0E7O0FBRUQ7Q0FDQztRQUNPLHNCQUFzQjtLQUN6QjtJQUNEO1FBQ0ksZ0JBQWdCO0tBQ25CO0tBQ0E7SUFDRCxzQkFBc0I7Q0FDekI7Q0FDQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhbGVuZGFyL2RheS9kYXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxM3B4XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5jYXJkLWdyb3VwIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uZGF5IHtcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG59XHJcblxyXG4uZGF0ZSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5wYWdlc0NvbnRhaW5lckZpeGVke1xyXG5ib3JkZXItcmlnaHQ6IDBweDtcclxufVxyXG5cclxuXHJcbi5zY3JvbGxhYmxlVGFibGUgdGJvZHl7XHJcbiAgICAgICAgaGVpZ2h0OjIwMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG59IFxyXG5cclxuLmZhY2lsaXRpZXNSb3d7XHJcbiAgICBoZWlnaHQ6NDdweDtcclxufVxyXG4ucHJpbnRhYmxle1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHhcclxuICAgIH1cclxuXHJcbiBAbWVkaWEgKG1pbi1oZWlnaHQ6IDY5NHB4KSB7XHJcbiBcclxuICAgIC5wcmludGFibGV7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweFxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLWhlaWdodDogNzgxcHgpIHtcclxuIC5zY3JvbGxhYmxlVGFibGUgdGJvZHl7XHJcbiAgICAgICAgaGVpZ2h0OmNhbGMoMS4yNSoyMDBweClcclxuICAgIH0gXHJcbiAgICAucHJpbnRhYmxle1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHhcclxuICAgIH1cclxuICAgIC5mYWNpbGl0aWVzUm93e1xyXG4gICAgaGVpZ2h0OmNhbGMoMS4xKjQ3cHgpO1xyXG59ICBcclxufVxyXG5cclxuQG1lZGlhIChtaW4taGVpZ2h0OiA5MzdweCkge1xyXG4gICAgLnByaW50YWJsZXtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLWhlaWdodDogMTI1MHB4KSB7XHJcbiAuc2Nyb2xsYWJsZVRhYmxlIHRib2R5e1xyXG4gICAgICAgIGhlaWdodDpjYWxjKDIqMjAwcHgpXHJcbiAgICB9IFxyXG4gICAgLnByaW50YWJsZXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4XHJcbiAgICB9XHJcbiAgICAgLmZhY2lsaXRpZXNSb3d7XHJcbiAgICBoZWlnaHQ6Y2FsYygyKjQ3cHgpO1xyXG59XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLWhlaWdodDogMTg3NXB4KSB7XHJcbiAgIC5zY3JvbGxhYmxlVGFibGUgdGJvZHl7XHJcbiAgICAgICAgaGVpZ2h0OmNhbGMoMyoyMDBweClcclxuICAgIH0gXHJcbiAgICAucHJpbnRhYmxle1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHhcclxuICAgIH0gXHJcbiAgICAgLmZhY2lsaXRpZXNSb3d7XHJcbiAgICBoZWlnaHQ6Y2FsYygzKjQ3cHgpO1xyXG59XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLWhlaWdodDogMjUwMHB4KSB7XHJcbiAuc2Nyb2xsYWJsZVRhYmxlIHRib2R5e1xyXG4gICAgICAgIGhlaWdodDpjYWxjKDMuNSoyMDBweClcclxuICAgIH0gXHJcbiAgICAucHJpbnRhYmxle1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDcwcHhcclxuICAgIH1cclxuICAgICAuZmFjaWxpdGllc1Jvd3tcclxuICAgIGhlaWdodDpjYWxjKDMuNSo0N3B4KTtcclxufVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAiXX0= */"

/***/ }),

/***/ "./src/app/pages/calendar/day/day.component.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/calendar/day/day.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mr-1 ml-1 mt-0 p-0 animated fadeIn pagesContainerFixed\">\r\n        <div class=\"col-4 m-0 p-1\" >\r\n            <div *ngIf=\"prevWeek.length > 0 && nextWeek.length > 0\" class=\"row\">\r\n                <div class=\"col-12 animated shake\">\r\n                         <i style=\"color:blue\" (click)=\"_demoServices.calendarPopup(true)\" class=\"fas fa-info fa-lg m-4\"></i>\r\n                </div>\r\n                <div class=\"col-12 d-flex flex-column text-center mt-1\">\r\n                    <h5 *ngIf=\"_calendarServices.currentDay\" class=\"highlight\">{{_calendarServices.currentDay.date | date:'EEEE d MMMM , y'}}</h5>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                  <div class=\"row mt-0 d-flex justify-content-between\">\r\n                    <div class=\"ml-3\" style='display: flex'>\r\n                      <button [disabled]=\"inProgress\" [ngStyle]=\"{ 'opacity':buttonStyle()} \"  class='btn-warning highlight' (click)='toOtherWeek(prevWeek[0])'>\r\n                        {{prevWeek[0] | date:'dd MM yy'}} - {{prevWeek[1] | date:'dd MM yy'}}\r\n                      </button>\r\n                    </div>\r\n                    <div class=\"mr-3\" style='display:flex'>\r\n                      <button [disabled]=\"inProgress\" class='btn-warning highlight' [ngStyle]=\"{ 'opacity':buttonStyle()} \" (click)='toOtherWeek(nextWeek[0])'>\r\n                        {{nextWeek[0]| date:'dd MM yy'}} - {{nextWeek[1]| date:'dd MM yy'}}\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-12 d-flex justify-content-center mt-1\">\r\n                    <button class='btn btn-warning' (click)=' _calendarModalController.showModal()'><i class=\"fas fa-search \"></i></button>\r\n                </div>\r\n                <div class='col-12 mt-2 '>\r\n                    <h5 class='text-center highlight'>Eventos con permanencia</h5>\r\n                    <table class='table scrollableTable m-0' style=\"background:#F5F1E3\">\r\n                        <thead>\r\n                            <th style=\"width:25%\">Nombre</th>\r\n                            <th style=\"width:25%\">Inicio</th>\r\n                            <th style=\"width:25%\">Finalización</th>\r\n                            <th style=\"width:25%\"></th>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let event of _calendarServices.permanentEvents\">\r\n                                <td style=\"width:25%\">{{event.name}}</td>\r\n                                <td style=\"width:25%\">{{event.startDate | date }} a las {{event.position | timeConversor2: null}} </td>\r\n                                <td style=\"width:25%\">\r\n                                    <p *ngIf=\"event.endDate != null\">{{event.endDate | date }} a las\r\n                                        {{event.position | timeConversor2 : event.duration}}</p>\r\n                                    <p *ngIf=\"event.endDate === null\">Se prorroga indefinidamente</p>\r\n                                </td>\r\n                                <td style=\"width:25%\">\r\n                                    <button appRole class='bg-warning'\r\n                                        (click)='deletePermanentEvent(event._id)'><i class=\"far fa-trash-alt\"></i></button>\r\n                                    <button appRole class='bg-warning'\r\n                                        (click)='showEventPermanentInfo(event._id)'><i class=\"far fa-edit\"></i></button>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n                <div class='col-12 m-3 p-3 animated zoomIn'>\r\n                    <p style='color:red'>*Aquellos eventos con permanencia indefinida se definirán con el color rojo*</p>\r\n                    <p style='color:green'>*Aquellos eventos con permanencia definida en el tiempo se definirán con el color verde*</p>\r\n                    <p style='color:blue'>*Aquellos eventos cuya duración sea solo de un día se definirán con el color azul*</p>\r\n                </div>\r\n            </div>            \r\n        </div>\r\n        <div #printable class=\"col-8 printable\">\r\n            <div class=\"row\">\r\n              <div class=\"col-1\" style='background: #F0B841'>\r\n                <button class='btn btn-warning' (click)='snapshotCalendar()'><i class=\"fas fa-camera-retro\"></i></button>\r\n              </div>\r\n                <div class=\"col-11 \" style='background: #F0B841'>\r\n                    <div *ngIf=\"_calendarServices.currentWeek && _calendarServices.currentDay\" class=\"row m-0 p-0 d-flex justify-content-around\" style='height:30px'>\r\n                                <button *ngIf=\"_calendarServices.currentWeek.monday['_id'] !=_calendarServices.currentDay._id \" (click)=\"toOtherDay(_calendarServices.currentWeek.monday['_id'])\"  class='text-center day btn btn-warning'>\r\n                                    Lunes {{_calendarServices.currentWeek.monday['date']|date:'d'}}\r\n                                </button>\r\n                                <button *ngIf=\"_calendarServices.currentWeek.tuesday['_id']  !=_calendarServices.currentDay._id\" (click)=\"toOtherDay(_calendarServices.currentWeek.tuesday['_id'])\" class='text-center day btn btn-warning'>\r\n                                    Martes {{_calendarServices.currentWeek.tuesday['date']|date:'d'}}\r\n                                </button>\r\n                                <button  *ngIf=\"_calendarServices.currentWeek.wednesday['_id']  !=_calendarServices.currentDay._id \"  (click)=\"toOtherDay(_calendarServices.currentWeek.wednesday['_id'])\" class='text-center day btn btn-warning'>\r\n                                    Miércoles {{_calendarServices.currentWeek.wednesday['date']|date:'d'}}\r\n                                </button>\r\n                                <button *ngIf=\"_calendarServices.currentWeek.thursday['_id']  !=_calendarServices.currentDay._id\" (click)=\"toOtherDay(_calendarServices.currentWeek.thursday['_id'])\" class='text-center day btn btn-warning'>\r\n                                    Jueves {{_calendarServices.currentWeek.thursday['date']|date:'d'}}\r\n                                </button>\r\n                                <button *ngIf=\"_calendarServices.currentWeek.friday['_id']  !=_calendarServices.currentDay._id \" (click)=\"toOtherDay(_calendarServices.currentWeek.friday['_id'])\"  class='text-center day btn btn-warning'>\r\n                                    Viernes {{_calendarServices.currentWeek.friday['date']|date:'d'}}\r\n                                </button>\r\n                                <button *ngIf=\"_calendarServices.currentWeek.saturday['_id']  !=_calendarServices.currentDay._id \" (click)=\"toOtherDay(_calendarServices.currentWeek.saturday['_id'])\" class='text-center day btn btn-warning'>\r\n                                    Sábado {{_calendarServices.currentWeek.saturday['date']|date:'d'}}\r\n                                </button>\r\n                                <button *ngIf=\"_calendarServices.currentWeek.sunday['_id'] !=_calendarServices.currentDay._id \"   (click)=\"toOtherDay(_calendarServices.currentWeek.sunday['_id'])\" class='text-center day btn btn-warning'>\r\n                                    Domingo {{_calendarServices.currentWeek.sunday['date']|date:'d'}}\r\n                                </button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-1\" style='background: #F0B841'>\r\n                        <button *ngIf=\"facilitieFrom && facilitieFrom > 0\" (click)='switchFacilities(-5)' class='btn btn-warning'><i class=\"fas fa-arrow-left\"></i></button>\r\n                        <button *ngIf=\"_facilitieServices.count > facilitieFrom+5\" (click)='switchFacilities(5)' class='btn btn-warning'><i class=\"fas fa-arrow-right\"></i></button>\r\n                </div>\r\n                <div class=\"col-11 m-0 p-0\" >\r\n                    <div class=\"row d-flex justify-content-around card-group facilitiesRow \">\r\n                        <div *ngFor=\"let facilitie of _facilitieServices.facilities\" class=\"card\">\r\n                            <div class=\"card-body text-center \">\r\n                                {{facilitie.name}}\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div #dayPlace  class=\"col-12\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-1 m-0 p-0\">\r\n                            <div #rowDayPlace  class=\"row d-flex flex-column card-group p-0 m-0 \" style='height:520px;'>\r\n                                <div class=\"card \">\r\n                                    <div class=\"card-body text-center\">\r\n                                        8-9\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"card \">\r\n                                    <div class=\"card-body text-center \">\r\n                                        9-10\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"card \">\r\n                                    <div class=\"card-body text-center \">\r\n                                        10-11\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"card \">\r\n                                    <div class=\"card-body text-center \">\r\n                                        11-12\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"card \">\r\n                                    <div class=\"card-body text-center \">\r\n                                        12-13\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"card \">\r\n                                    <div class=\"card-body text-center \">\r\n                                        13-14\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"card \">\r\n                                    <div class=\"card-body text-center\">\r\n                                        14-15\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"card \">\r\n                                    <div class=\"card-body text-center \">\r\n                                        15-16\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"card \">\r\n                                    <div class=\"card-body text-center \">\r\n                                        16-17\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"card \">\r\n                                    <div class=\"card-body text-center \">\r\n                                        17-18\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"card \">\r\n                                    <div class=\"card-body text-center \">\r\n                                        18-19\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"card \">\r\n                                    <div class=\"card-body text-center \">\r\n                                        19-20\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"card \">\r\n                                    <div class=\"card-body text-center \">\r\n                                      20-21\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div (window:resize)=\"onResize($event)\"  *ngIf='!inProgress' class=\"col-11 m-0 p-0 d-flex justify-content-around animated fadeIn \" [ngStyle]=\"{'height': heightOfEventsFrame}\">\r\n                            <div *ngFor=\"let facilitie of _facilitieServices.facilities\" class=\"d-flex flex-column \">\r\n                                <app-event *ngIf=\"position >=0\" [facilitie]='facilitie' [position]='0' [hour]=\"_calendarServices.currentDay.hour0\" [ngStyle]=\"{ 'width': eventRowWidth} \"></app-event>\r\n                                <app-event *ngIf=\"position >=1\" [facilitie]='facilitie' [position]='1' [hour]=\"_calendarServices.currentDay.hour1 \"></app-event>\r\n                                <app-event *ngIf=\"position >=2\" [facilitie]='facilitie' [position]='2' [hour]=\"_calendarServices.currentDay.hour2 \"></app-event>\r\n                                <app-event *ngIf=\"position >=3\" [facilitie]='facilitie' [position]='3' [hour]=\"_calendarServices.currentDay.hour3 \"></app-event>\r\n                                <app-event *ngIf=\"position >=4\" [facilitie]='facilitie' [position]='4' [hour]=\"_calendarServices.currentDay.hour4 \"></app-event>\r\n                                <app-event *ngIf=\"position >=5\" [facilitie]='facilitie' [position]='5' [hour]=\"_calendarServices.currentDay.hour5 \"></app-event>\r\n                                <app-event *ngIf=\"position >=6\" [facilitie]='facilitie' [position]='6' [hour]=\"_calendarServices.currentDay.hour6 \"></app-event>\r\n                                <app-event *ngIf=\"position >=7\" [facilitie]='facilitie' [position]='7' [hour]=\"_calendarServices.currentDay.hour7 \"></app-event>\r\n                                <app-event *ngIf=\"position >=8\" [facilitie]='facilitie' [position]='8' [hour]=\"_calendarServices.currentDay.hour8 \"></app-event>\r\n                                <app-event *ngIf=\"position >=9\" [facilitie]='facilitie' [position]='9' [hour]=\"_calendarServices.currentDay.hour9 \"></app-event>\r\n                                <app-event *ngIf=\"position >=10\" [facilitie]='facilitie' [position]='10' [hour]=\"_calendarServices.currentDay.hour10 \"></app-event>\r\n                                <app-event *ngIf=\"position >=11\" [facilitie]='facilitie' [position]='11' [hour]=\"_calendarServices.currentDay.hour11 \"></app-event>\r\n                                <app-event *ngIf=\"position >=12\" [facilitie]='facilitie' [position]='12' [hour]=\"_calendarServices.currentDay.hour12 \"></app-event>\r\n                            </div>\r\n                        </div>\r\n                        <div  style=\"background:#F5F1E3\" *ngIf='inProgress' class=\"col-11 d-flex flex-column justify-content-center\">\r\n                            <div class=\"row d-flex justify-content-center\">\r\n                                <mat-spinner></mat-spinner>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/pages/calendar/day/day.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/calendar/day/day.component.ts ***!
  \*****************************************************/
/*! exports provided: DayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayComponent", function() { return DayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_calendar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/calendar.service */ "./src/app/providers/calendar.service.ts");
/* harmony import */ var _modals_calendar_modal_calendar_modal_controller_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../modals/calendar-modal/calendar-modal-controller.service */ "./src/app/modals/calendar-modal/calendar-modal-controller.service.ts");
/* harmony import */ var _providers_facilities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/facilities.service */ "./src/app/providers/facilities.service.ts");
/* harmony import */ var _modals_events_modal_events_modal_controller_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../modals/events-modal/events-modal-controller.service */ "./src/app/modals/events-modal/events-modal-controller.service.ts");
/* harmony import */ var _providers_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../providers/user.service */ "./src/app/providers/user.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _providers_demo_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../providers/demo.service */ "./src/app/providers/demo.service.ts");
/* harmony import */ var _providers_spinner_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../providers/spinner.service */ "./src/app/providers/spinner.service.ts");













var DayComponent = /** @class */ (function () {
    function DayComponent(activatedRoute, router, _modalEventController, _userServices, _calendarServices, _calendarModalController, _facilitieServices, _demoServices, _spinnerServices, renderer) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this._modalEventController = _modalEventController;
        this._userServices = _userServices;
        this._calendarServices = _calendarServices;
        this._calendarModalController = _calendarModalController;
        this._facilitieServices = _facilitieServices;
        this._demoServices = _demoServices;
        this._spinnerServices = _spinnerServices;
        this.renderer = renderer;
        this.inProgress = true;
        this.notification = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.prevWeek = [];
        this.nextWeek = [];
        this.eventSubscription = null;
        this.eventsSocket = null;
        this.facilitiesSocket = null;
        this.facilitieFrom = 0;
        this.position = 0;
    }
    DayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkWindowSize();
        this.getEventRowWidth();
        this.activatedRoute.params.subscribe(function (params) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var dayId, weekId;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, params['dayId']];
                    case 1:
                        dayId = _a.sent();
                        return [4 /*yield*/, params['weekId']];
                    case 2:
                        weekId = _a.sent();
                        if (dayId.length > 0 && weekId.length > 0) {
                            this._facilitieServices.getFacilities(this.facilitieFrom).subscribe(function () {
                                if (_this._calendarServices.currentDay && _this._calendarServices.currentWeek) {
                                    if (dayId === _this._calendarServices.currentDay._id) {
                                        dayId = undefined;
                                        weekId = undefined;
                                        _this.init();
                                        return;
                                    }
                                    else {
                                        if (weekId === _this._calendarServices.currentWeek._id) {
                                            _this._calendarServices.getDayById(dayId).subscribe(function () {
                                                dayId = undefined;
                                                weekId = undefined;
                                                _this.init();
                                                return;
                                            });
                                        }
                                        else {
                                            _this._calendarServices.getWeekById(weekId).subscribe(function () {
                                                _this._calendarServices.checkWeekDay(_this._calendarServices.currentDay.date.getDay()).then(function (dayId) {
                                                    _this._calendarServices.getDayById(dayId).subscribe(function () {
                                                        dayId = undefined;
                                                        weekId = undefined;
                                                        _this.init();
                                                        return;
                                                    });
                                                });
                                            });
                                        }
                                    }
                                }
                                else {
                                    _this._calendarServices.getWeekById(weekId).subscribe(function () {
                                        _this._calendarServices.getDayById(dayId).subscribe(function () {
                                            Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["timer"])().subscribe(function () {
                                                _this.init();
                                            });
                                        });
                                    });
                                }
                            });
                        }
                        return [2 /*return*/];
                }
            });
        }); });
        ////////////////////////////////////////////////////////
        this.facilitiesSocket = this._facilitieServices.facililiteSocket().subscribe(function () {
            _this.inProgress = true;
            setTimeout(function () {
                _this.resetEventRenderValues();
            });
        });
        ///////////////////////////////////////////////////////
        this.notification.subscribe(function (res) {
            _this.position = res.position + 1 || _this.position;
        });
        ///////////////////////////////////////////////////////
        this._calendarModalController.notification.subscribe(function () {
            _this.inProgress = true;
            _this._spinnerServices.openSpinner();
        });
        ///////////////////////////////////////////////////////
        this.eventsSocket = this._calendarServices.eventSocket().subscribe();
        ///////////////////////////////////////////////////////
        this.eventSubscription = this._calendarServices.events$.subscribe(function () {
            _this.inProgress = true;
            _this._spinnerServices.openSpinner();
            _this._calendarServices.getDayById(_this._calendarServices.currentDay._id).subscribe(function () {
                _this.init();
            });
        });
    };
    DayComponent.prototype.toOtherDay = function (dayId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.inProgress = true;
                        this._spinnerServices.openSpinner();
                        this._calendarServices.currentDay = undefined;
                        return [4 /*yield*/, this._calendarServices.getDayById(dayId).subscribe()];
                    case 1:
                        _a.sent();
                        this.router.navigate(["./calendar", this._calendarServices.currentWeek._id, dayId]);
                        return [2 /*return*/];
                }
            });
        });
    };
    DayComponent.prototype.toOtherWeek = function (date) {
        var _this = this;
        this.inProgress = true;
        this._spinnerServices.openSpinner();
        this._calendarServices.currentWeek = undefined;
        date = new Date(date);
        this._calendarServices.getWeekByDate(date.getTime()).subscribe(function (week) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["timer"])(300).subscribe(function () {
                if (week === 'no-week') {
                    _this._calendarServices.postWeek(date).subscribe(function () {
                        _this._calendarServices.checkWeekDay(new Date(_this._calendarServices.currentDay.date).getDay()).then(function (dayId) {
                            _this._calendarServices.getDayById(dayId).subscribe(function () {
                                _this.router.navigate(["./calendar", _this._calendarServices.currentWeek._id, dayId]);
                            });
                        });
                    });
                }
                else {
                    _this._calendarServices.checkWeekDay(new Date(_this._calendarServices.currentDay.date).getDay(), week).then(function (dayId) {
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["timer"])(300).subscribe(function () {
                            _this._calendarServices.getDayById(dayId).subscribe(function () {
                                _this.router.navigate(["./calendar", _this._calendarServices.currentWeek._id, dayId]);
                            });
                        });
                    });
                }
            });
        });
    };
    ////////// Init /////////
    DayComponent.prototype.init = function () {
        var _this = this;
        this._calendarServices.userIn().then(function () {
            _this.resetEventRenderValues();
            _this.getWeeksAroundDates();
        });
    };
    DayComponent.prototype.checkWindowSize = function () {
        if (window.innerHeight >= 781) {
            if (window.innerHeight >= 1250) {
                if (window.innerHeight >= 1875) {
                    if (window.innerHeight > 2500) {
                        this.renderer.setStyle(this.rowDayPlace.nativeElement, 'height', '2080px');
                        this.heightOfEventsFrame = 2080;
                        this.heightPerCard = 160;
                    }
                    else {
                        this.renderer.setStyle(this.rowDayPlace.nativeElement, 'height', '1560px');
                        this.heightOfEventsFrame = 1560;
                        this.heightPerCard = 120;
                    }
                }
                else {
                    this.renderer.setStyle(this.rowDayPlace.nativeElement, 'height', '1040px');
                    this.heightOfEventsFrame = 1040;
                    this.heightPerCard = 80;
                }
            }
            else {
                this.renderer.setStyle(this.rowDayPlace.nativeElement, 'height', '650px');
                this.heightOfEventsFrame = 650;
                this.heightPerCard = 50;
            }
        }
        else {
            this.renderer.setStyle(this.rowDayPlace.nativeElement, 'height', '520px');
            this.heightOfEventsFrame = 520;
            this.heightPerCard = 40;
        }
    };
    DayComponent.prototype.onResize = function (event) {
        this.checkWindowSize();
        this.getEventRowWidth();
        this.inProgress = true;
        this._spinnerServices.openSpinner();
        this.init();
    };
    DayComponent.prototype.resetEventRenderValues = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this._facilitieServices.facilities.forEach(function (facilitie) {
                            if (facilitie.status === false) {
                                _this._facilitieServices.facilities = _this._facilitieServices.facilities.filter(function (eachFacilitie) { return eachFacilitie._id != facilitie._id; });
                            }
                            else {
                                var space = _this.heightOfEventsFrame;
                                facilitie.space = space;
                            }
                        })];
                    case 1:
                        _b.sent();
                        _a = this;
                        return [4 /*yield*/, 0];
                    case 2:
                        _a.position = _b.sent();
                        this._spinnerServices.closeSpinner();
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["timer"])().subscribe(function () {
                            _this.inProgress = false;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    DayComponent.prototype.getWeeksAroundDates = function () {
        var weekDate = new Date(this._calendarServices.currentWeek.date);
        var date1 = new Date(weekDate.getFullYear(), weekDate.getMonth(), weekDate.getDate() - 7, 6, 0, 0, 0);
        var date2 = new Date(weekDate.getFullYear(), weekDate.getMonth(), weekDate.getDate() - 1, 6, 0, 0, 0);
        var date3 = new Date(weekDate.getFullYear(), weekDate.getMonth(), weekDate.getDate() + 7, 6, 0, 0, 0);
        var date4 = new Date(weekDate.getFullYear(), weekDate.getMonth(), weekDate.getDate() + 14, -30, 0, 0, 0);
        this.prevWeek = [date1, date2];
        this.nextWeek = [date3, date4];
    };
    DayComponent.prototype.getEventRowWidth = function () {
        this.eventRowWidth = Math.round(((this.dayPlace.nativeElement.offsetWidth / 13) * 12) / 5) + "px";
    };
    //////// After init ////////
    DayComponent.prototype.switchFacilities = function (number) {
        var _this = this;
        if (number === void 0) { number = 0; }
        if (this.facilitieFrom + number >= 0) {
            this.inProgress = true;
            this._spinnerServices.openSpinner();
            this._facilitieServices.facilities = [];
            this.facilitieFrom += number;
            this._facilitieServices.getFacilities(this.facilitieFrom).subscribe(function () {
                _this.init();
            });
        }
    };
    DayComponent.prototype.showEventPermanentInfo = function (id) {
        this._modalEventController.showModal(id);
        this._modalEventController.notification.emit();
    };
    DayComponent.prototype.deletePermanentEvent = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: '¿Estás segura/o?',
            text: "El evento se eliminará del sistema y por lo tanto de cualquier día en el que esté presente",
            type: 'warning',
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Eliminar'
        }).then(function (res) {
            if (res) {
                _this._calendarServices.deleteEvent(id).subscribe();
            }
        });
    };
    DayComponent.prototype.snapshotCalendar = function () {
        html2canvas__WEBPACK_IMPORTED_MODULE_10__(this.printable.nativeElement).then(function (canvas) {
            window.open().document.body.appendChild(canvas);
        });
    };
    DayComponent.prototype.buttonStyle = function () {
        if (this.inProgress) {
            return '0.3';
        }
        else {
            return '1';
        }
    };
    DayComponent.prototype.ngOnDestroy = function () {
        this._facilitieServices.facilities = [];
        this.eventSubscription.unsubscribe();
        this.eventsSocket.unsubscribe();
        this.facilitiesSocket.unsubscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('printable'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DayComponent.prototype, "printable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("dayPlace", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DayComponent.prototype, "dayPlace", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("rowDayPlace", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DayComponent.prototype, "rowDayPlace", void 0);
    DayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-day",
            template: __webpack_require__(/*! ./day.component.html */ "./src/app/pages/calendar/day/day.component.html"),
            styles: [__webpack_require__(/*! ./day.component.css */ "./src/app/pages/calendar/day/day.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _modals_events_modal_events_modal_controller_service__WEBPACK_IMPORTED_MODULE_6__["EventModalController"],
            _providers_user_service__WEBPACK_IMPORTED_MODULE_7__["UserServices"],
            _providers_calendar_service__WEBPACK_IMPORTED_MODULE_3__["CalendarService"],
            _modals_calendar_modal_calendar_modal_controller_service__WEBPACK_IMPORTED_MODULE_4__["CalendarModalController"],
            _providers_facilities_service__WEBPACK_IMPORTED_MODULE_5__["FacilitiesService"],
            _providers_demo_service__WEBPACK_IMPORTED_MODULE_11__["DemoService"],
            _providers_spinner_service__WEBPACK_IMPORTED_MODULE_12__["SpinnerService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], DayComponent);
    return DayComponent;
}());



/***/ }),

/***/ "./src/app/pages/calendar/day/event/event.component.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/calendar/day/event/event.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div #eventCard class=\"card-body d-flex flex-column justify-content-start text-center\" style='height: 0px'>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/calendar/day/event/event.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/calendar/day/event/event.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".empty {\n  background-color: #F5F1E3; }\n\n.link {\n  cursor: pointer; }\n\n.card {\n  padding: 0px;\n  margin: 0px;\n  border: none;\n  font-size: 10px; }\n\n.card-body {\n  height: 40px;\n  padding: 0px;\n  margin: 0px;\n  border: none; }\n\n.card-group {\n  margin: 0px;\n  padding: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FsZW5kYXIvZGF5L2V2ZW50L0M6XFxVc2Vyc1xcMzQ2OTVcXERlc2t0b3BcXERSQUZUXFxDQVJHTyBNVVNJQ1xcRlJPTlRFTkRfRVNDVUVMQS9zcmNcXGFwcFxccGFnZXNcXGNhbGVuZGFyXFxkYXlcXGV2ZW50XFxldmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUNKLEVBQUM7O0FBRUQ7RUFDSSxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLGFBQVk7RUFDWixZQUFXO0VBQ1gsYUFBWTtFQUNaLGdCQUNKLEVBQUM7O0FBRUQ7RUFDSSxhQUFZO0VBQ1osYUFBWTtFQUNaLFlBQVc7RUFDWCxhQUNKLEVBQUM7O0FBRUQ7RUFDSSxZQUFXO0VBQ1gsYUFBWSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FsZW5kYXIvZGF5L2V2ZW50L2V2ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVtcHR5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUYxRTNcclxufVxyXG5cclxuLmxpbmsge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTBweFxyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgYm9yZGVyOiBub25lXHJcbn1cclxuXHJcbi5jYXJkLWdyb3VwIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/calendar/day/event/event.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/calendar/day/event/event.component.ts ***!
  \*************************************************************/
/*! exports provided: EventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return EventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modals_events_modal_events_modal_controller_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../modals/events-modal/events-modal-controller.service */ "./src/app/modals/events-modal/events-modal-controller.service.ts");
/* harmony import */ var _day_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../day.component */ "./src/app/pages/calendar/day/day.component.ts");
/* harmony import */ var _providers_calendar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../providers/calendar.service */ "./src/app/providers/calendar.service.ts");
/* harmony import */ var _providers_swal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../providers/swal.service */ "./src/app/providers/swal.service.ts");
/* harmony import */ var _providers_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../providers/user.service */ "./src/app/providers/user.service.ts");







var EventComponent = /** @class */ (function () {
    function EventComponent(renderer, _modalEventController, dayComponent, _calendarServices, _swalServices, _userServices) {
        this.renderer = renderer;
        this._modalEventController = _modalEventController;
        this.dayComponent = dayComponent;
        this._calendarServices = _calendarServices;
        this._swalServices = _swalServices;
        this._userServices = _userServices;
        this.position = 0;
        this.ourEvents = {
            "0": undefined,
            "0.25": undefined,
            "0.5": undefined,
            "0.75": undefined
        };
        this.newDiv = this.renderer.createElement('div');
        this.newDiv1 = this.renderer.createElement('div');
        this.newDiv2 = this.renderer.createElement('div');
        this.newDiv3 = this.renderer.createElement('div');
    }
    EventComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.render().then(function () {
            _this.dayComponent.notification.emit({ position: _this.position });
        });
    };
    EventComponent.prototype.render = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var spaceWithoutEvents, _i, _a, event_1, facilitieId, child, plus;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.hour) return [3 /*break*/, 6];
                        spaceWithoutEvents = this.dayComponent.heightOfEventsFrame - ((this.position) * this.dayComponent.heightPerCard);
                        for (_i = 0, _a = this.hour; _i < _a.length; _i++) {
                            event_1 = _a[_i];
                            facilitieId = event_1.facilitie._id || event_1.facilitie || null;
                            if (facilitieId && facilitieId === this.facilitie._id) {
                                if (event_1.position === this.position) {
                                    this.ourEvents["0"] = event_1;
                                }
                                if (event_1.position === this.position + 0.25) {
                                    this.ourEvents["0.25"] = event_1;
                                }
                                if (event_1.position === this.position + 0.5) {
                                    this.ourEvents["0.5"] = event_1;
                                }
                                if (event_1.position === this.position + 0.75) {
                                    this.ourEvents["0.75"] = event_1;
                                }
                            }
                        }
                        if (!(this.ourEvents["0"] === undefined &&
                            this.ourEvents["0.25"] === undefined &&
                            this.ourEvents["0.5"] === undefined &&
                            this.ourEvents["0.75"] === undefined)) return [3 /*break*/, 1];
                        child = this.renderer.createElement("strong");
                        plus = document.createTextNode("+");
                        child.appendChild(plus);
                        child.setAttribute("id", "#child");
                        this.renderer.setStyle(child, 'font-size', '10px');
                        this.renderer.setStyle(child, "color", "black");
                        this.renderer.setStyle(child, "cursor", "pointer");
                        this.renderer.addClass(child, 'highlight');
                        if (Number(this.facilitie.space) === spaceWithoutEvents) {
                            if (this._userServices.checkRole()) {
                                this.renderer.appendChild(this.eventCard.nativeElement, child);
                                this.renderer.listen(this.eventCard.nativeElement, "click", function () {
                                    _this._modalEventController.hideModal();
                                    _this.createEvent(_this.position);
                                });
                            }
                            this.renderer.setStyle(this.eventCard.nativeElement, "height", this.dayComponent.heightPerCard + "px");
                            this.renderer.setStyle(this.eventCard.nativeElement, 'width', this.dayComponent.cardWidth);
                            this.renderer.setStyle(this.eventCard.nativeElement, "background-color", "#F5F1E3");
                            this.facilitie.space -= this.dayComponent.heightPerCard;
                            return [2 /*return*/];
                        }
                        else if ((Number(this.facilitie.space) != spaceWithoutEvents)) {
                            if (spaceWithoutEvents - this.facilitie.space >= this.dayComponent.heightPerCard) {
                                this.renderer.setStyle(this.eventCard.nativeElement, "height", "0");
                                this.renderer.setStyle(this.eventCard.nativeElement, "width", "0");
                                return [2 /*return*/];
                            }
                            else {
                                this.renderer.setStyle(this.eventCard.nativeElement, "height", this.dayComponent.heightPerCard - (spaceWithoutEvents - this.facilitie.space) + "px");
                                this.renderer.setStyle(this.eventCard.nativeElement, 'width', this.dayComponent.cardWidth);
                                this.position = this.position + (1 - ((this.facilitie.space + this.dayComponent.heightPerCard - spaceWithoutEvents) / this.dayComponent.heightPerCard));
                                this.facilitie.space -= this.dayComponent.heightPerCard - (spaceWithoutEvents - this.facilitie.space);
                                if (this._userServices.checkRole()) {
                                    this.renderer.appendChild(this.eventCard.nativeElement, child);
                                    this.renderer.listen(this.eventCard.nativeElement, "click", function () {
                                        _this._modalEventController.hideModal();
                                        _this.createEvent(_this.position);
                                    });
                                }
                                this.renderer.setStyle(this.eventCard.nativeElement, "background-color", "#F5F1E3");
                                return [2 /*return*/];
                            }
                        }
                        return [3 /*break*/, 6];
                    case 1: return [4 /*yield*/, this.setEvent(0)];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, this.setEvent(0.25)];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, this.setEvent(0.5)];
                    case 4:
                        _b.sent();
                        return [4 /*yield*/, this.setEvent(0.75)];
                    case 5:
                        _b.sent();
                        return [2 /*return*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    EventComponent.prototype.setEvent = function (eventPosition) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.ourEvents[eventPosition] != undefined)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.placeEvent(eventPosition)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.fixHeight(this.dayComponent.heightPerCard * this.ourEvents[eventPosition].duration)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 3: return [4 /*yield*/, this.checkSpace(eventPosition)];
                    case 4:
                        res = _a.sent();
                        if (!res) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.fixHeight(res["height"])];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.setEmptySpace(res["height"], res['position'])];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                    case 7: return [2 /*return*/];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    EventComponent.prototype.placeEvent = function (position) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var card;
            switch (position) {
                case 0:
                    card = _this.newDiv;
                    break;
                case 0.25:
                    card = _this.newDiv1;
                    break;
                case 0.5:
                    card = _this.newDiv2;
                    break;
                case 0.75:
                    card = _this.newDiv3;
                    break;
            }
            card = _this.renderer.createElement('div');
            _this.renderer.addClass(card, 'card');
            var cardBody = _this.renderer.createElement('div');
            _this.renderer.addClass(cardBody, 'card-body');
            _this.renderer.appendChild(card, cardBody);
            _this.renderer.setStyle(card, 'width', _this.dayComponent.cardWidth);
            _this.renderer.setStyle(cardBody, "height", _this.dayComponent.heightPerCard * _this.ourEvents[String(position)].duration + "px");
            if (_this.ourEvents[String(position)].permanent === true) {
                if (_this.ourEvents[String(position)].endDate === null) {
                    _this.renderer.setStyle(cardBody, "background-color", "#f45042");
                }
                else {
                    _this.renderer.setStyle(cardBody, "background-color", "#38a548");
                }
            }
            else {
                _this.renderer.setStyle(cardBody, "background-color", "#42b0f4");
            }
            var div = document.createElement('div');
            _this.renderer.addClass(div, 'd-flex');
            _this.renderer.addClass(div, 'justify-content-around');
            _this.renderer.setStyle(div, 'height', _this.dayComponent.heightPerCard * _this.ourEvents[String(position)].duration + "px");
            _this.renderer.appendChild(cardBody, div);
            var div2 = document.createElement('div');
            _this.renderer.addClass(div2, 'd-flex');
            _this.renderer.addClass(div2, 'flex-row');
            _this.renderer.addClass(div2, 'justify-content-start');
            var child1 = document.createElement("strong");
            _this.renderer.setStyle(child1, "cursor", "pointer");
            _this.renderer.setStyle(child1, 'font-size', '15px');
            _this.renderer.setStyle(child1, 'height', _this.dayComponent.heightPerCard * _this.ourEvents[String(position)].duration + "px");
            var name1 = document.createTextNode("" + _this.ourEvents[String(position)].name);
            child1.append(name1);
            _this.renderer.listen(child1, "click", function () {
                _this._modalEventController.hideModal();
                _this.showEventInfo(_this.ourEvents[String(position)]._id);
            });
            _this.renderer.appendChild(div2, child1);
            _this.renderer.appendChild(div, div2);
            if (_this._userServices.checkRole()) {
                var div3 = document.createElement('div');
                _this.renderer.addClass(div3, 'd-flex');
                _this.renderer.addClass(div3, 'flex-row');
                _this.renderer.addClass(div3, 'justify-content-start');
                var child2 = document.createElement('i');
                _this.renderer.setStyle(child2, "cursor", "pointer");
                _this.renderer.setStyle(child2, 'font-size', '15px');
                _this.renderer.addClass(child2, 'fas');
                _this.renderer.addClass(child2, 'fa-times');
                _this.renderer.listen(child2, "click", function () {
                    _this._swalServices.confirmDelete().then(function (res) {
                        _this._modalEventController.hideModal();
                        if (res) {
                            if (_this.ourEvents[String(position)].permanent) {
                                _this._calendarServices.pullEvent(_this._calendarServices.currentDay._id, _this.ourEvents[String(position)]._id).subscribe();
                            }
                            else {
                                _this._calendarServices.deleteEvent(_this.ourEvents[String(position)]._id).subscribe();
                            }
                        }
                    });
                });
                _this.renderer.appendChild(div3, child2);
                _this.renderer.appendChild(div, div3);
            }
            var parent = _this.renderer.parentNode(_this.eventCard.nativeElement);
            var parent2 = _this.renderer.parentNode(parent);
            switch (position) {
                case 0:
                    _this.renderer.appendChild(parent2, card);
                    break;
                case 0.25:
                    _this.renderer.appendChild(parent2, card);
                    break;
                case 0.5:
                    _this.renderer.appendChild(parent2, card);
                    break;
                case 0.75:
                    _this.renderer.appendChild(parent2, card);
                    break;
            }
            resolve();
        });
    };
    EventComponent.prototype.fixHeight = function (height) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.facilitie.space -= height;
            resolve();
        });
    };
    EventComponent.prototype.checkSpace = function (reference) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (reference + 0.25 < 1 && _this.ourEvents[String(reference + 0.25)] === undefined) {
                if (reference + 0.5 < 1 && _this.ourEvents[String(reference + 0.5)] === undefined) {
                    if (reference + 0.75 < 1 && _this.ourEvents[String(reference + 0.75)] === undefined) {
                        resolve();
                    }
                    else {
                        if ((_this.dayComponent.heightPerCard * (reference + 1) === (_this.dayComponent.heightPerCard * (13 - _this.position + 1) - _this.facilitie.space))) {
                            resolve({ height: _this.dayComponent.heightPerCard * 0.75, position: reference });
                        }
                        else {
                            resolve();
                        }
                    }
                }
                else {
                    if ((_this.dayComponent.heightPerCard * (reference + 1) === (_this.dayComponent.heightPerCard * (13 - _this.position + 1) - _this.facilitie.space))) {
                        resolve({ height: _this.dayComponent.heightPerCard * 0.5, position: reference });
                    }
                    else {
                        resolve();
                    }
                }
            }
            else {
                if ((_this.dayComponent.heightPerCard * (reference + 1) === (_this.dayComponent.heightPerCard * (13 - _this.position + 1) - _this.facilitie.space))) {
                    resolve({ height: _this.dayComponent.heightPerCard * 0.25, position: reference });
                }
                else {
                    resolve();
                }
            }
        });
    };
    EventComponent.prototype.setEmptySpace = function (height, position) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var division;
            switch (position) {
                case 0:
                    division = _this.newDiv;
                    break;
                case 0.25:
                    division = _this.newDiv1;
                    break;
                case 0.5:
                    division = _this.newDiv2;
                    break;
                case 0.75:
                    division = _this.newDiv3;
                    break;
            }
            _this.renderer.addClass(division, 'card');
            var cardBody = _this.renderer.createElement('div');
            _this.renderer.addClass(cardBody, 'card-body');
            _this.renderer.appendChild(division, cardBody);
            _this.renderer.setStyle(cardBody, 'height', height + "px");
            _this.renderer.setStyle(cardBody, 'width', _this.dayComponent.cardWidth);
            _this.renderer.setStyle(cardBody, "background-color", "#F5F1E3");
            _this.renderer.addClass(cardBody, 'd-flex');
            _this.renderer.addClass(cardBody, 'flex-column');
            _this.renderer.addClass(cardBody, 'justify-content-start');
            _this.renderer.addClass(cardBody, 'text-center');
            if (_this._userServices.checkRole()) {
                var child = document.createElement("strong");
                var name_1 = document.createTextNode("+");
                child.append(name_1);
                _this.renderer.setStyle(child, 'font-size', '10px');
                _this.renderer.setStyle(child, "color", "#f47742");
                _this.renderer.setStyle(child, "cursor", "pointer");
                _this.renderer.appendChild(cardBody, child);
                _this.renderer.listen(cardBody, "click", function () {
                    var positionSum = _this.position + position;
                    _this._modalEventController.hideModal();
                    _this.createEvent(positionSum);
                });
            }
            var parent = _this.renderer.parentNode(_this.eventCard.nativeElement);
            var parent2 = _this.renderer.parentNode(parent);
            if (position === 0) {
                _this.renderer.appendChild(parent2, division);
                resolve();
            }
            if (position === 0.25) {
                _this.renderer.appendChild(parent2, division);
                resolve();
            }
            if (position === 0.5) {
                _this.renderer.appendChild(parent2, division);
                resolve();
            }
            if (position === 0.75) {
                _this.renderer.appendChild(parent2, division);
                resolve();
            }
        });
    };
    EventComponent.prototype.createEvent = function (position) {
        this._modalEventController.showModal();
        this._modalEventController.notification.emit({ position: position, facilitieId: this.facilitie._id });
    };
    EventComponent.prototype.showEventInfo = function (id) {
        this._modalEventController.showModal(id);
        this._modalEventController.notification.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EventComponent.prototype, "facilitie", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], EventComponent.prototype, "position", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EventComponent.prototype, "hour", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("eventCard"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], EventComponent.prototype, "eventCard", void 0);
    EventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-event",
            template: __webpack_require__(/*! ./event.component.html */ "./src/app/pages/calendar/day/event/event.component.html"),
            styles: [__webpack_require__(/*! ./event.component.scss */ "./src/app/pages/calendar/day/event/event.component.scss")],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _modals_events_modal_events_modal_controller_service__WEBPACK_IMPORTED_MODULE_2__["EventModalController"],
            _day_component__WEBPACK_IMPORTED_MODULE_3__["DayComponent"],
            _providers_calendar_service__WEBPACK_IMPORTED_MODULE_4__["CalendarService"],
            _providers_swal_service__WEBPACK_IMPORTED_MODULE_5__["SwalService"],
            _providers_user_service__WEBPACK_IMPORTED_MODULE_6__["UserServices"]])
    ], EventComponent);
    return EventComponent;
}());



/***/ }),

/***/ "./src/app/pages/company/company.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/company/company.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row pagesContainerFixed animated fadeIn\">\r\n            <div class=\"col-12 pt-2 pb-2\" style=\"height:20%\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-6 d-flex justify-content-center\">\r\n                        <div class=\"row d-flex justify-content-around\">\r\n                            <div class=\" col-6 form-check\">\r\n                                <div class=\"d-flex flex-column\">\r\n                                    <div>\r\n                                        <mat-form-field class=\"datePickerContainer\" >\r\n                                            <input matInput class=\"datePickerInput\" [matDatepicker]=\"picker0\" placeholder=\"Elige una fecha\">\r\n                                            <mat-datepicker-toggle class=\"datePickerToggle\" matSuffix [for]=\"picker0\"></mat-datepicker-toggle>\r\n                                            <mat-datepicker  #picker0></mat-datepicker>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div>\r\n                                        <mat-form-field class=\"datePickerContainer\">\r\n                                            <input matInput [matDatepicker]=\"picker1\" placeholder=\"Elige una fecha\">\r\n                                            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                                            <mat-datepicker  #picker1></mat-datepicker>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-2 ml-2 d-flex flex-column justify-content-center\">\r\n                                <div>\r\n                                  <button (click)=\"generateChart()\" style=\"height:25px text-center\" class=\"btn btn-warning highlight\">Generar gráfico</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-5\">\r\n                        <div class=\"row btn btn-group\">\r\n                            <button (click)=\"changeSelection('payments')\" [ngStyle]=\"{'opacity': buttonsStyle('payments')}\" class=\"btn btn-warning highlight\">LIQUIDACIONES</button>\r\n                            <button (click)=\"changeSelection('incomes')\" [ngStyle]=\"{'opacity': buttonsStyle('incomes')}\" class=\"btn btn-warning highlight\">INGRESOS</button>\r\n                        </div>\r\n                        <div class=\"row mt-2 d-flex justify-content-center\">\r\n                            <div class=\"col-12  flex-column d-flex justify-content-center\">\r\n                                <div class=\"form-check\">\r\n                                    <input (change)=\"chartByChange()\" [(ngModel)]=\"chartBy\" class=\"form-check-input\" type=\"radio\" name=\"chartBy\" id=\"days\"\r\n                                        value=\"days\">\r\n                                    <label  class=\"form-check-label highlight\" for=\"days\">\r\n                                        MOSTRAR GRÁFICO POR DÍAS\r\n                                    </label>\r\n                                </div>\r\n                                <div class=\"form-check\">\r\n                                    <input (change)=\"chartByChange()\" [(ngModel)]=\"chartBy\" class=\"form-check-input\" type=\"radio\" name=\"chartBy\" id=\"weeks\"\r\n                                        value=\"weeks\">\r\n                                    <label class=\"form-check-label highlight\" for=\"weeks\">\r\n                                        MOSTRAR GRÁFICO POR SEMANAS\r\n                                    </label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                        <div class=\"col-1 d-flex justify-content-end align-items-center animated shake\">\r\n                            <i (click)=\"_demoServices.graphsPopup(true)\" class=\"fas fa-info fa-lg m-4\" style='cursor:pointer;color:blue'></i>\r\n                        </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-12 p-0 m-0\"style=\"height:80%\">\r\n                <app-incomes-chart *ngIf=\"chartSelected === 'incomes'\"></app-incomes-chart>\r\n                <app-payments-chart *ngIf=\"chartSelected === 'payments'\"></app-payments-chart>\r\n            </div>\r\n</div>\r\n   "

/***/ }),

/***/ "./src/app/pages/company/company.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/company/company.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".datePicker {\n  height: 50px;\n  width: 200px; }\n\n.datePickerInput {\n  height: 20px;\n  width: 140px; }\n\n@media (min-height: 694px) {\n  .datePickerContainer {\n    height: calc(1.1 *50px);\n    width: calc(1.1 *200px); }\n  .datePickerInput {\n    height: calc(1.1*20px);\n    width: calc(1.1*140px); } }\n\n@media (min-height: 781px) {\n  .datePickerContainer {\n    height: calc(1.25 *50px);\n    width: calc(1.25 *200px); }\n  .datePickerInput {\n    height: calc(1.25*20px);\n    width: calc(1.25*140px); } }\n\n@media (min-height: 833px) {\n  .datePickerContainer {\n    height: calc(1.35 *50px);\n    width: calc(1.35 *200px); }\n  .datePickerInput {\n    height: calc(1.35*20px);\n    width: calc(1.35*140px); } }\n\n@media (min-height: 937px) {\n  .datePickerContainer {\n    height: calc(1.5 *50px);\n    width: calc(1.5 *200px); }\n  .datePickerInput {\n    height: calc(1.5*20px);\n    width: calc(1.5*140px); } }\n\n@media (min-height: 1250px) {\n  .datePickerContainer {\n    height: calc(2 *50px);\n    width: calc(2 *200px); }\n  .datePickerInput {\n    height: calc(2*20px);\n    width: calc(2*140px); } }\n\n@media (min-height: 1875px) {\n  .datePickerContainer {\n    height: calc(3 *50px);\n    width: calc(3 * 200px); }\n  .datePickerInput {\n    height: calc(4*20px);\n    width: calc(4*140px); } }\n\n@media (min-height: 2500px) {\n  .datePickerContainer {\n    height: calc(3.9 *50px);\n    width: calc(3.9 *200px); }\n  .datePickerInput {\n    height: calc(4.5*20px);\n    width: calc(4.5*140px); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tcGFueS9DOlxcVXNlcnNcXDM0Njk1XFxEZXNrdG9wXFxEUkFGVFxcQ0FSR08gTVVTSUNcXEZST05URU5EX0VTQ1VFTEEvc3JjXFxhcHBcXHBhZ2VzXFxjb21wYW55XFxjb21wYW55LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBVztFQUNYLGFBQ0osRUFBQzs7QUFFRDtFQUNHLGFBQVc7RUFDWCxhQUNILEVBQUM7O0FBSUQ7RUFDRTtJQUNFLHdCQUFzQjtJQUN0Qix3QkFBc0IsRUFDekI7RUFDRDtJQUNHLHVCQUFxQjtJQUNyQix1QkFBcUIsRUFDdkIsRUFBQTs7QUFHRDtFQUNHO0lBQ0MseUJBQXVCO0lBQ3ZCLHlCQUF1QixFQUMxQjtFQUNEO0lBQ0csd0JBQXNCO0lBQ3RCLHdCQUFzQixFQUN4QixFQUFBOztBQUdEO0VBQ0U7SUFDRSx5QkFBdUI7SUFDdkIseUJBQXVCLEVBQzFCO0VBQ0Q7SUFDRyx3QkFBc0I7SUFDdEIsd0JBQXNCLEVBQ3hCLEVBQUE7O0FBR0Q7RUFDQztJQUNHLHdCQUFzQjtJQUN0Qix3QkFBc0IsRUFDekI7RUFDRDtJQUNHLHVCQUFxQjtJQUNyQix1QkFBcUIsRUFDdkIsRUFBQTs7QUFHRDtFQUNFO0lBQ0Usc0JBQW9CO0lBQ3BCLHNCQUFvQixFQUN2QjtFQUNEO0lBQ0cscUJBQW1CO0lBQ25CLHFCQUFtQixFQUNyQixFQUFBOztBQUdEO0VBQ0k7SUFDQSxzQkFBb0I7SUFDcEIsdUJBQXFCLEVBQ3hCO0VBQ0Q7SUFDRyxxQkFBbUI7SUFDbkIscUJBQW1CLEVBQ3JCLEVBQUE7O0FBR0Q7RUFDSTtJQUNBLHdCQUFzQjtJQUN0Qix3QkFBc0IsRUFDekI7RUFDRDtJQUNHLHVCQUFxQjtJQUNyQix1QkFBcUIsRUFDdkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBhbnkvY29tcGFueS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXRlUGlja2Vye1xyXG4gICAgaGVpZ2h0OjUwcHg7XHJcbiAgICB3aWR0aDoyMDBweFxyXG59XHJcblxyXG4uZGF0ZVBpY2tlcklucHV0e1xyXG4gICBoZWlnaHQ6MjBweDtcclxuICAgd2lkdGg6MTQwcHhcclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDY5NHB4KSB7XHJcbiAgLmRhdGVQaWNrZXJDb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6Y2FsYygxLjEgKjUwcHgpO1xyXG4gICAgd2lkdGg6Y2FsYygxLjEgKjIwMHB4KVxyXG59XHJcbi5kYXRlUGlja2VySW5wdXR7XHJcbiAgIGhlaWdodDpjYWxjKDEuMSoyMHB4KTtcclxuICAgd2lkdGg6Y2FsYygxLjEqMTQwcHgpO1xyXG59XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLWhlaWdodDogNzgxcHgpIHtcclxuICAgLmRhdGVQaWNrZXJDb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6Y2FsYygxLjI1ICo1MHB4KTtcclxuICAgIHdpZHRoOmNhbGMoMS4yNSAqMjAwcHgpXHJcbn1cclxuLmRhdGVQaWNrZXJJbnB1dHtcclxuICAgaGVpZ2h0OmNhbGMoMS4yNSoyMHB4KTtcclxuICAgd2lkdGg6Y2FsYygxLjI1KjE0MHB4KTtcclxufVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDgzM3B4KSB7XHJcbiAgLmRhdGVQaWNrZXJDb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6Y2FsYygxLjM1ICo1MHB4KTtcclxuICAgIHdpZHRoOmNhbGMoMS4zNSAqMjAwcHgpXHJcbn1cclxuLmRhdGVQaWNrZXJJbnB1dHtcclxuICAgaGVpZ2h0OmNhbGMoMS4zNSoyMHB4KTtcclxuICAgd2lkdGg6Y2FsYygxLjM1KjE0MHB4KTtcclxufVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDkzN3B4KSB7XHJcbiAuZGF0ZVBpY2tlckNvbnRhaW5lcntcclxuICAgIGhlaWdodDpjYWxjKDEuNSAqNTBweCk7XHJcbiAgICB3aWR0aDpjYWxjKDEuNSAqMjAwcHgpXHJcbn1cclxuLmRhdGVQaWNrZXJJbnB1dHtcclxuICAgaGVpZ2h0OmNhbGMoMS41KjIwcHgpO1xyXG4gICB3aWR0aDpjYWxjKDEuNSoxNDBweCk7XHJcbn1cclxufVxyXG5cclxuQG1lZGlhIChtaW4taGVpZ2h0OiAxMjUwcHgpIHtcclxuICAuZGF0ZVBpY2tlckNvbnRhaW5lcntcclxuICAgIGhlaWdodDpjYWxjKDIgKjUwcHgpO1xyXG4gICAgd2lkdGg6Y2FsYygyICoyMDBweClcclxufVxyXG4uZGF0ZVBpY2tlcklucHV0e1xyXG4gICBoZWlnaHQ6Y2FsYygyKjIwcHgpO1xyXG4gICB3aWR0aDpjYWxjKDIqMTQwcHgpO1xyXG59XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLWhlaWdodDogMTg3NXB4KSB7XHJcbiAgICAuZGF0ZVBpY2tlckNvbnRhaW5lcntcclxuICAgIGhlaWdodDpjYWxjKDMgKjUwcHgpO1xyXG4gICAgd2lkdGg6Y2FsYygzICogMjAwcHgpXHJcbn1cclxuLmRhdGVQaWNrZXJJbnB1dHtcclxuICAgaGVpZ2h0OmNhbGMoNCoyMHB4KTtcclxuICAgd2lkdGg6Y2FsYyg0KjE0MHB4KTtcclxufVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDI1MDBweCkge1xyXG4gICAgLmRhdGVQaWNrZXJDb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6Y2FsYygzLjkgKjUwcHgpO1xyXG4gICAgd2lkdGg6Y2FsYygzLjkgKjIwMHB4KVxyXG59XHJcbi5kYXRlUGlja2VySW5wdXR7XHJcbiAgIGhlaWdodDpjYWxjKDQuNSoyMHB4KTtcclxuICAgd2lkdGg6Y2FsYyg0LjUqMTQwcHgpO1xyXG59XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/company/company.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/company/company.component.ts ***!
  \****************************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_payments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/payments.service */ "./src/app/providers/payments.service.ts");
/* harmony import */ var src_app_pipes_days_of_week_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pipes/days-of-week.pipe */ "./src/app/pipes/days-of-week.pipe.ts");
/* harmony import */ var _providers_incomes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/incomes.service */ "./src/app/providers/incomes.service.ts");
/* harmony import */ var _providers_demo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/demo.service */ "./src/app/providers/demo.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var CompanyComponent = /** @class */ (function () {
    function CompanyComponent(_paymentServices, _incomeServices, _demoServices) {
        this._paymentServices = _paymentServices;
        this._incomeServices = _incomeServices;
        this._demoServices = _demoServices;
        this.filterPipe = new src_app_pipes_days_of_week_pipe__WEBPACK_IMPORTED_MODULE_3__["DaysOfWeekPipe"]();
        this.chartBy = 'weeks';
        this.chartSelected = 'payments';
        this.notification = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.labels = [];
    }
    CompanyComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this._demoServices.graphsPopup();
                return [2 /*return*/];
            });
        });
    };
    CompanyComponent.prototype.changeSelection = function (type) {
        var _this = this;
        this.chartSelected = undefined;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["timer"])(300).subscribe(function () {
            _this.chartSelected = type;
        });
    };
    CompanyComponent.prototype.chartByChange = function () {
        this.generateChart();
    };
    CompanyComponent.prototype.generateChart = function (selection) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.labels = [];
                        if (selection) {
                            this.chartSelected = selection;
                        }
                        ;
                        return [4 /*yield*/, this.checkDates()];
                    case 1:
                        _a.sent();
                        this.checkNumberOfDays().then(function (labelsNumber) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.setLabels(labelsNumber)];
                                    case 1:
                                        _a.sent();
                                        this.notification.emit(this.chartSelected);
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    CompanyComponent.prototype.checkDates = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var date1, _a, _b, _c, _d, _e, _f, _g, _h, _j;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_k) {
                switch (_k.label) {
                    case 0:
                        if (!(!this.picker1.startAt && !this.picker0.startAt)) return [3 /*break*/, 9];
                        date1 = new Date(new Date().getTime() - (86400000 * 14));
                        return [4 /*yield*/, new Date(date1.getFullYear(), date1.getMonth(), date1.getDate(), 0, 0, 0, 0)];
                    case 1:
                        date1 = _k.sent();
                        _a = this.chartSelected;
                        switch (_a) {
                            case 'payments': return [3 /*break*/, 2];
                            case 'incomes': return [3 /*break*/, 5];
                        }
                        return [3 /*break*/, 8];
                    case 2:
                        _b = this._paymentServices.inputs;
                        _c = 0;
                        return [4 /*yield*/, date1.getTime()];
                    case 3:
                        _b[_c] = _k.sent();
                        _d = this._paymentServices.inputs;
                        _e = 1;
                        return [4 /*yield*/, this._paymentServices.inputs[0]];
                    case 4:
                        _d[_e] = (_k.sent()) + (86400000 * 13);
                        return [3 /*break*/, 8];
                    case 5:
                        _f = this._incomeServices.inputs;
                        _g = 0;
                        return [4 /*yield*/, date1.getTime()];
                    case 6:
                        _f[_g] = _k.sent();
                        _h = this._incomeServices.inputs;
                        _j = 1;
                        return [4 /*yield*/, this._incomeServices.inputs[0]];
                    case 7:
                        _h[_j] = (_k.sent()) + (86400000 * 13);
                        return [3 /*break*/, 8];
                    case 8:
                        resolve();
                        return [3 /*break*/, 11];
                    case 9: return [4 /*yield*/, this.setDates().then(function () {
                            resolve();
                        })];
                    case 10:
                        _k.sent();
                        _k.label = 11;
                    case 11: return [2 /*return*/];
                }
            });
        }); });
    };
    CompanyComponent.prototype.setDates = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var _a, _b, _c, _d, _e, _f, _g, _h;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_j) {
                            switch (_j.label) {
                                case 0:
                                    if (!(this.chartSelected === 'incomes')) return [3 /*break*/, 3];
                                    _a = this._incomeServices.inputs;
                                    _b = 0;
                                    return [4 /*yield*/, new Date(this.picker0.startAt).getTime()];
                                case 1:
                                    _a[_b] = _j.sent();
                                    _c = this._incomeServices.inputs;
                                    _d = 1;
                                    return [4 /*yield*/, new Date(this.picker1.startAt).getTime()];
                                case 2:
                                    _c[_d] = _j.sent();
                                    resolve();
                                    return [3 /*break*/, 6];
                                case 3:
                                    if (!(this.chartSelected === 'payments')) return [3 /*break*/, 6];
                                    _e = this._paymentServices.inputs;
                                    _f = 0;
                                    return [4 /*yield*/, new Date(this.picker0.startAt).getTime()];
                                case 4:
                                    _e[_f] = _j.sent();
                                    _g = this._paymentServices.inputs;
                                    _h = 1;
                                    return [4 /*yield*/, new Date(this.picker1.startAt).getTime()];
                                case 5:
                                    _g[_h] = _j.sent();
                                    resolve();
                                    _j.label = 6;
                                case 6: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    CompanyComponent.prototype.checkNumberOfDays = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            switch (_this.chartSelected) {
                case 'payments':
                    if (_this.chartBy === 'weeks') {
                        var numbersOfWeeks = Math.ceil((_this._paymentServices.inputs[1] - _this._paymentServices.inputs[0]) / (86400000 * 7));
                        resolve(numbersOfWeeks);
                    }
                    else {
                        var numberOfDays = Math.ceil((_this._paymentServices.inputs[1] - _this._paymentServices.inputs[0]) / 86400000);
                        resolve(numberOfDays);
                    }
                    break;
                case 'incomes':
                    if (_this.chartBy === 'weeks') {
                        var numbersOfWeeks = Math.ceil((_this._incomeServices.inputs[1] - _this._incomeServices.inputs[0]) / (86400000 * 7));
                        resolve(numbersOfWeeks);
                    }
                    else {
                        var numberOfDays = Math.ceil((_this._incomeServices.inputs[1] - _this._incomeServices.inputs[0]) / 86400000);
                        resolve(numberOfDays);
                    }
            }
        });
    };
    CompanyComponent.prototype.setLabels = function (labelsNumber) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.chartSelected === 'payments') {
                _this.labels.push(new Date(_this._paymentServices.inputs[0]));
            }
            else if (_this.chartSelected === 'incomes') {
                _this.labels.push(new Date(_this._incomeServices.inputs[0]));
            }
            if (_this.chartBy === 'days') {
                for (var i = 1; i <= labelsNumber; i++) {
                    _this.labels.push(new Date(_this.labels[i - 1].getTime() + 86400000));
                }
                resolve();
            }
            else if (_this.chartBy === 'weeks') {
                for (var i = 1; i <= labelsNumber; i++) {
                    _this.labels.push(new Date(_this.labels[i - 1].getTime() + (86400000 * 7)));
                }
                resolve();
            }
        });
    };
    CompanyComponent.prototype.buttonsStyle = function (type) {
        if (type === 'payments') {
            if (this.chartSelected != 'payments') {
                return '0.5';
            }
        }
        else if (type === 'incomes') {
            if (this.chartSelected != 'incomes') {
                return '0.5';
            }
        }
    };
    CompanyComponent.prototype.ngOnDestroy = function () {
        this._incomeServices.incomeType = 'notLiquidated';
        this._paymentServices.paymentTypes = [];
        this._incomeServices.inputs = [];
        this._paymentServices.inputs = [];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("picker0"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepicker"])
    ], CompanyComponent.prototype, "picker0", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("picker1"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepicker"])
    ], CompanyComponent.prototype, "picker1", void 0);
    CompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-company',
            template: __webpack_require__(/*! ./company.component.html */ "./src/app/pages/company/company.component.html"),
            styles: [__webpack_require__(/*! ./company.component.scss */ "./src/app/pages/company/company.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_payments_service__WEBPACK_IMPORTED_MODULE_2__["PaymentsService"],
            _providers_incomes_service__WEBPACK_IMPORTED_MODULE_4__["IncomesService"],
            _providers_demo_service__WEBPACK_IMPORTED_MODULE_5__["DemoService"]])
    ], CompanyComponent);
    return CompanyComponent;
}());



/***/ }),

/***/ "./src/app/pages/company/incomes-chart/incomes-chart.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/pages/company/incomes-chart/incomes-chart.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scrollableTable tbody{\r\n    height:250px\r\n}\r\n\r\n\r\n@media (min-height: 694px) {\r\n .scrollableTable tbody{\r\n        height: calc(250*1.1px)\r\n    }\r\n  \r\n}\r\n\r\n\r\n@media (min-height: 781px) {\r\n .scrollableTable tbody{\r\n        height: calc(250*1.25px)\r\n    }\r\n   \r\n}\r\n\r\n\r\n@media (min-height: 833px) {\r\n .scrollableTable tbody{\r\n        height: calc(250*1.35px)\r\n    }\r\n  \r\n}\r\n\r\n\r\n@media (min-height: 937px) {\r\n .scrollableTable tbody{\r\n        height: calc(250*1.5px)\r\n    }\r\n  \r\n}\r\n\r\n\r\n@media (min-height: 1250px) {\r\n .scrollableTable tbody{\r\n        height: calc(250*2px)\r\n    }\r\n   \r\n}\r\n\r\n\r\n@media (min-height: 1875px) {\r\n    .scrollableTable tbody{\r\n        height: calc(250*3px)\r\n    }\r\n     \r\n}\r\n\r\n\r\n@media (min-height: 2500px) {\r\n .scrollableTable tbody{\r\n        height: calc(250*3.9px)\r\n    }\r\n \r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tcGFueS9pbmNvbWVzLWNoYXJ0L2luY29tZXMtY2hhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7Q0FDZjs7O0FBR0Q7Q0FDQztRQUNPLHVCQUF1QjtLQUMxQjs7Q0FFSjs7O0FBRUQ7Q0FDQztRQUNPLHdCQUF3QjtLQUMzQjs7Q0FFSjs7O0FBRUQ7Q0FDQztRQUNPLHdCQUF3QjtLQUMzQjs7Q0FFSjs7O0FBRUQ7Q0FDQztRQUNPLHVCQUF1QjtLQUMxQjs7Q0FFSjs7O0FBRUQ7Q0FDQztRQUNPLHFCQUFxQjtLQUN4Qjs7Q0FFSjs7O0FBRUQ7SUFDSTtRQUNJLHFCQUFxQjtLQUN4Qjs7Q0FFSjs7O0FBRUQ7Q0FDQztRQUNPLHVCQUF1QjtLQUMxQjs7Q0FFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBhbnkvaW5jb21lcy1jaGFydC9pbmNvbWVzLWNoYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xsYWJsZVRhYmxlIHRib2R5e1xyXG4gICAgaGVpZ2h0OjI1MHB4XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDY5NHB4KSB7XHJcbiAuc2Nyb2xsYWJsZVRhYmxlIHRib2R5e1xyXG4gICAgICAgIGhlaWdodDogY2FsYygyNTAqMS4xcHgpXHJcbiAgICB9XHJcbiAgXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLWhlaWdodDogNzgxcHgpIHtcclxuIC5zY3JvbGxhYmxlVGFibGUgdGJvZHl7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDI1MCoxLjI1cHgpXHJcbiAgICB9XHJcbiAgIFxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDgzM3B4KSB7XHJcbiAuc2Nyb2xsYWJsZVRhYmxlIHRib2R5e1xyXG4gICAgICAgIGhlaWdodDogY2FsYygyNTAqMS4zNXB4KVxyXG4gICAgfVxyXG4gIFxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDkzN3B4KSB7XHJcbiAuc2Nyb2xsYWJsZVRhYmxlIHRib2R5e1xyXG4gICAgICAgIGhlaWdodDogY2FsYygyNTAqMS41cHgpXHJcbiAgICB9XHJcbiAgXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLWhlaWdodDogMTI1MHB4KSB7XHJcbiAuc2Nyb2xsYWJsZVRhYmxlIHRib2R5e1xyXG4gICAgICAgIGhlaWdodDogY2FsYygyNTAqMnB4KVxyXG4gICAgfVxyXG4gICBcclxufVxyXG5cclxuQG1lZGlhIChtaW4taGVpZ2h0OiAxODc1cHgpIHtcclxuICAgIC5zY3JvbGxhYmxlVGFibGUgdGJvZHl7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDI1MCozcHgpXHJcbiAgICB9XHJcbiAgICAgXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLWhlaWdodDogMjUwMHB4KSB7XHJcbiAuc2Nyb2xsYWJsZVRhYmxlIHRib2R5e1xyXG4gICAgICAgIGhlaWdodDogY2FsYygyNTAqMy45cHgpXHJcbiAgICB9XHJcbiBcclxufVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/company/incomes-chart/incomes-chart.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/company/incomes-chart/incomes-chart.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-8\" >\r\n    <div class=\"row\">\r\n      <div class=\"col-1 d-flex flex-column justify-content-center m-0 p-0 \">\r\n       <!--\r\n<a (click)=\"moveLeft()\" class=\"text-right\"><i class=\"fas fa-arrow-left m-4\"></i></a>\r\n        <a (click)=\"moveLeft('forward')\" class=\"text-right\"><i class=\"fas fa-arrow-right m-4\"></i></a>\r\n       --> \r\n      </div>\r\n      <div class=\"col-10 p-5 mt-2 mb-2\" style=\"background:#008080;background:#008080; border:2px solid black;-webkit-box-shadow: 6px 10px 15px 0px rgba(0,0,0,0.75);-moz-box-shadow: 6px 10px 15px 0px rgba(0,0,0,0.75);box-shadow: 6px 10px 15px 0px rgba(0,0,0,0.75);\">\r\n        <app-line-chart #chart></app-line-chart>\r\n      </div>\r\n      <div class=\"col-1 d-flex flex-column justify-content-center m-0 p-0 \">\r\n        <!--\r\n            <a (click)=\"moveRight('forward')\" class=\"text-left m-4\"><i class=\"fas fa-arrow-right\"></i></a>\r\n        <a (click)=\"moveRight()\" class=\"text-left m-4\"><i class=\"fas fa-arrow-left\"></i></a>\r\n\r\n        -->\r\n      </div>\r\n      <div class=\"col-12 d-flex justify-content-center mt-3\">\r\n        <div class=\"form-check form-check-inline\">\r\n          <input [(ngModel)]=\"liquidated\" (change)=\"onSelection()\" class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox1\">\r\n          <label class=\"form-check-label\" for=\"inlineCheckbox1\">INGRESOS LIQUIDADOS</label>\r\n        </div>\r\n        <div class=\"form-check form-check-inline\">\r\n          <input [(ngModel)]=\"notLiquidated\" (change)=\"onSelection()\" class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox2\">\r\n          <label class=\"form-check-label\" for=\"inlineCheckbox2\">INGRESOS NO LIQUIDADOS</label>\r\n        </div>\r\n        <div class=\"form-check form-check-inline\">\r\n          <input [(ngModel)]=\"all\" (change)=\"onSelection()\" class=\"form-check-input\" type=\"checkbox\"\r\n            id=\"inlineCheckbox2\">\r\n          <label class=\"form-check-label\" for=\"inlineCheckbox2\">TODOS</label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    </div>\r\n    <div class=\"col-4\">\r\n      <table class=\"table scrollableTable mb-0\"\r\n        style=\"background: #F5F1E3\">\r\n        <thead class=\"d-flex justify-content-around\">\r\n          <th style=\"width:33%\">Origen</th>\r\n          <th style=\"width:33%\">Cantidad liquidada</th>\r\n          <th style=\"width:33%\">Cantidad por liquidar</th>\r\n        </thead>\r\n        <tbody class=\"mb-0\">\r\n          <tr *ngFor=\"let income of _incomeServices.incomes let i = index\"\r\n            class=\"d-flex justify-content-around\" style=\"width: 100%\">\r\n            <td style=\"width:33%\">{{income.debitor.name}}</td>\r\n            <td style=\"width:33%\">{{income.liquidatedAmount}}</td>\r\n            <td style=\"width:33%\">{{income.notLiquidatedAmount}}</td>\r\n          </tr>\r\n        </tbody>\r\n        <hr>\r\n        <div class=\"row m-3\" style='background:#F5F1E3;'>\r\n          <div class=\"col-2\"></div>\r\n          <div class=\"col-8 d-flex justify-content-around\">\r\n            <button (click)=\"switch(-5)\" *ngIf=\"_incomeServices.from > 0\" class=\"btn btn-warning\">PREV</button>\r\n            <button (click)=\"switch(5)\" *ngIf=\"_incomeServices.from + 5 <=  _incomeServices.count  \"\r\n              class=\"btn btn-warning\">NEXT</button>\r\n          </div>\r\n          <div class=\"col-2\"></div>\r\n        </div>\r\n      </table>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/company/incomes-chart/incomes-chart.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/company/incomes-chart/incomes-chart.component.ts ***!
  \************************************************************************/
/*! exports provided: IncomesChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomesChartComponent", function() { return IncomesChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _company_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../company.component */ "./src/app/pages/company/company.component.ts");
/* harmony import */ var src_app_shared_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/line-chart/line-chart.component */ "./src/app/shared/line-chart/line-chart.component.ts");
/* harmony import */ var src_app_providers_incomes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/incomes.service */ "./src/app/providers/incomes.service.ts");





var IncomesChartComponent = /** @class */ (function () {
    function IncomesChartComponent(companyComponent, _incomeServices) {
        this.companyComponent = companyComponent;
        this._incomeServices = _incomeServices;
        this.labels = [];
        this.data = [];
        this.liquidated = true;
        this.notLiquidated = true;
        this.all = true;
    }
    IncomesChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.companySubscription = this.companyComponent.notification.subscribe(function (selection) {
            if (selection === 'incomes') {
                _this.labels = [];
                _this.setIncomesData();
            }
        });
        this.onSelection();
    };
    IncomesChartComponent.prototype.onSelection = function () {
        if (this.liquidated && this.notLiquidated) {
            this._incomeServices.incomeType = 'all';
            this._incomeServices.from = 0;
        }
        else {
            if (this.all) {
                this._incomeServices.incomeType = 'all';
            }
            else {
                if (!this.liquidated) {
                    this._incomeServices.incomeType = "notLiquidated";
                }
                if (!this.notLiquidated) {
                    this._incomeServices.incomeType = "liquidated";
                }
            }
        }
        this.companyComponent.generateChart();
    };
    IncomesChartComponent.prototype.setIncomesData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var dataArray, dataLabels, dataColors, data, data, data, labels;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._incomeServices.searchIncomes().subscribe()];
                    case 1:
                        _a.sent();
                        dataArray = [];
                        dataLabels = [];
                        dataColors = [];
                        return [4 /*yield*/, this.companyComponent.labels.forEach(function (date, index) {
                                _this.labels[index] = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
                            })];
                    case 2:
                        _a.sent();
                        if (!this.all) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.incomesDataSearch('all')];
                    case 3:
                        data = _a.sent();
                        return [4 /*yield*/, dataArray.push(data)];
                    case 4:
                        _a.sent();
                        dataLabels.push('TODOS');
                        dataColors.push('red');
                        _a.label = 5;
                    case 5:
                        if (!this.liquidated) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.incomesDataSearch('liquidated')];
                    case 6:
                        data = _a.sent();
                        return [4 /*yield*/, dataArray.push(data)];
                    case 7:
                        _a.sent();
                        dataLabels.push('INGRESOS LIQUIDADOS');
                        dataColors.push('green');
                        _a.label = 8;
                    case 8:
                        if (!this.notLiquidated) return [3 /*break*/, 11];
                        return [4 /*yield*/, this.incomesDataSearch('notLiquidated')];
                    case 9:
                        data = _a.sent();
                        return [4 /*yield*/, dataArray.push(data)];
                    case 10:
                        _a.sent();
                        dataLabels.push('INGRESOS NO LIQUIDADOS');
                        dataColors.push('blue');
                        _a.label = 11;
                    case 11:
                        labels = this.labels;
                        this.chart.setInfo(labels, dataArray, dataLabels, dataColors, 'incomeChart');
                        return [2 /*return*/];
                }
            });
        });
    };
    IncomesChartComponent.prototype.incomesDataSearch = function (type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._incomeServices.incomeType = type;
            _this._incomeServices.getIncomesChartData().subscribe(function (incomes) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var data;
                var _this = this;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            data = [];
                            return [4 /*yield*/, this.companyComponent.labels.forEach(function (label, index) {
                                    data[index] = 0;
                                })];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.companyComponent.labels.forEach(function (label, index) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                    var _this = this;
                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, incomes.forEach(function (income) {
                                                    if (new Date(income.date).getTime() >= label.getTime() && new Date(income.date).getTime() < _this.companyComponent.labels[index + 1].getTime()) {
                                                        data[index] += income['amount'];
                                                    }
                                                })];
                                            case 1:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); })];
                        case 2:
                            _a.sent();
                            resolve(data);
                            return [2 /*return*/];
                    }
                });
            }); });
        });
    };
    IncomesChartComponent.prototype.moveRight = function (direction) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_j) {
                switch (_j.label) {
                    case 0:
                        if (!(this.companyComponent.chartBy === 'weeks')) return [3 /*break*/, 7];
                        if (!(direction === 'forward')) return [3 /*break*/, 3];
                        _a = this.companyComponent.picker0;
                        return [4 /*yield*/, new Date(this._incomeServices.inputs[0])];
                    case 1:
                        _a.startAt = _j.sent();
                        _b = this.companyComponent.picker1;
                        return [4 /*yield*/, new Date(this._incomeServices.inputs[1] + 604800000)];
                    case 2:
                        _b.startAt = _j.sent();
                        this.companyComponent.generateChart();
                        return [3 /*break*/, 6];
                    case 3:
                        _c = this.companyComponent.picker0;
                        return [4 /*yield*/, new Date(this._incomeServices.inputs[0])];
                    case 4:
                        _c.startAt = _j.sent();
                        _d = this.companyComponent.picker1;
                        return [4 /*yield*/, new Date(this._incomeServices.inputs[1] - 604800000)];
                    case 5:
                        _d.startAt = _j.sent();
                        this.companyComponent.generateChart();
                        _j.label = 6;
                    case 6: return [3 /*break*/, 13];
                    case 7:
                        if (!(direction === 'forward')) return [3 /*break*/, 10];
                        _e = this.companyComponent.picker0;
                        return [4 /*yield*/, new Date(this._incomeServices.inputs[0])];
                    case 8:
                        _e.startAt = _j.sent();
                        _f = this.companyComponent.picker1;
                        return [4 /*yield*/, new Date(this._incomeServices.inputs[1] + 86400000)];
                    case 9:
                        _f.startAt = _j.sent();
                        this.companyComponent.generateChart();
                        return [3 /*break*/, 13];
                    case 10:
                        _g = this.companyComponent.picker0;
                        return [4 /*yield*/, new Date(this._incomeServices.inputs[0])];
                    case 11:
                        _g.startAt = _j.sent();
                        _h = this.companyComponent.picker1;
                        return [4 /*yield*/, new Date(this._incomeServices.inputs[1] - 86400000)];
                    case 12:
                        _h.startAt = _j.sent();
                        this.companyComponent.generateChart();
                        _j.label = 13;
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    IncomesChartComponent.prototype.moveLeft = function (direction) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_j) {
                switch (_j.label) {
                    case 0:
                        if (!(this.companyComponent.chartBy === 'weeks')) return [3 /*break*/, 7];
                        if (!(direction === 'forward')) return [3 /*break*/, 3];
                        _a = this.companyComponent.picker0;
                        return [4 /*yield*/, new Date(this._incomeServices.inputs[0] + 604800000)];
                    case 1:
                        _a.startAt = _j.sent();
                        _b = this.companyComponent.picker1;
                        return [4 /*yield*/, new Date(this._incomeServices.inputs[1])];
                    case 2:
                        _b.startAt = _j.sent();
                        this.companyComponent.generateChart();
                        return [3 /*break*/, 6];
                    case 3:
                        _c = this.companyComponent.picker0;
                        return [4 /*yield*/, new Date(this._incomeServices.inputs[0] - 604800000)];
                    case 4:
                        _c.startAt = _j.sent();
                        _d = this.companyComponent.picker1;
                        return [4 /*yield*/, new Date(this._incomeServices.inputs[1])];
                    case 5:
                        _d.startAt = _j.sent();
                        this.companyComponent.generateChart();
                        _j.label = 6;
                    case 6: return [3 /*break*/, 13];
                    case 7:
                        if (!(direction === 'forward')) return [3 /*break*/, 10];
                        _e = this.companyComponent.picker0;
                        return [4 /*yield*/, new Date(this._incomeServices.inputs[0] + 86400000)];
                    case 8:
                        _e.startAt = _j.sent();
                        _f = this.companyComponent.picker1;
                        return [4 /*yield*/, new Date(this._incomeServices.inputs[1])];
                    case 9:
                        _f.startAt = _j.sent();
                        this.companyComponent.generateChart();
                        return [3 /*break*/, 13];
                    case 10:
                        _g = this.companyComponent.picker0;
                        return [4 /*yield*/, new Date(this._incomeServices.inputs[0] - 86400000)];
                    case 11:
                        _g.startAt = _j.sent();
                        _h = this.companyComponent.picker1;
                        return [4 /*yield*/, new Date(this._incomeServices.inputs[1])];
                    case 12:
                        _h.startAt = _j.sent();
                        this.companyComponent.generateChart();
                        _j.label = 13;
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    IncomesChartComponent.prototype.switch = function (amount) {
        this._incomeServices.from *= amount;
        this._incomeServices.searchIncomes().subscribe();
    };
    IncomesChartComponent.prototype.ngOnDestroy = function () {
        this.companySubscription.unsubscribe();
        this._incomeServices.incomeType = 'liquidated';
        this._incomeServices.count = 0;
        this._incomeServices.incomes = [];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chart'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_3__["LineChartComponent"])
    ], IncomesChartComponent.prototype, "chart", void 0);
    IncomesChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-incomes-chart',
            template: __webpack_require__(/*! ./incomes-chart.component.html */ "./src/app/pages/company/incomes-chart/incomes-chart.component.html"),
            styles: [__webpack_require__(/*! ./incomes-chart.component.css */ "./src/app/pages/company/incomes-chart/incomes-chart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_company_component__WEBPACK_IMPORTED_MODULE_2__["CompanyComponent"],
            src_app_providers_incomes_service__WEBPACK_IMPORTED_MODULE_4__["IncomesService"]])
    ], IncomesChartComponent);
    return IncomesChartComponent;
}());



/***/ }),

/***/ "./src/app/pages/company/payments-chart/payments-chart.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/company/payments-chart/payments-chart.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row m-0\" style=\"height:100%\">\r\n  <div class=\"col-8\">\r\n      <div class=\"row\">\r\n        <div class=\"col-1 d-flex flex-column justify-content-center m-0 p-0 \">\r\n          <!--\r\n          <a (click)=\"moveLeft()\" class=\"text-right\"><i class=\"fas fa-arrow-left m-4\"></i></a>\r\n          <a (click)=\"moveLeft('forward')\" class=\"text-right\"><i class=\"fas fa-arrow-right m-4\"></i></a>\r\n          -->\r\n        </div>\r\n        <div class=\"col-10 p-5 mt-2 mb-2\"style=\"background:#008080; border:2px solid black;-webkit-box-shadow: 6px 10px 15px 0px rgba(0,0,0,0.75);-moz-box-shadow: 6px 10px 15px 0px rgba(0,0,0,0.75);box-shadow: 6px 10px 15px 0px rgba(0,0,0,0.75);\">\r\n          <app-line-chart  #chart></app-line-chart>\r\n        </div>\r\n        <div class=\"col-1 d-flex flex-column justify-content-center m-0 p-0 \">\r\n          <!--\r\n          <a (click)=\"moveRight('forward')\" class=\"text-left m-4\"><i class=\"fas fa-arrow-right\"></i></a>\r\n          <a (click)=\"moveRight()\" class=\"text-left m-4\"><i class=\"fas fa-arrow-left\"></i></a>\r\n          -->\r\n        </div>\r\n        <div class=\"col-12 d-flex justify-content-center mt-2\">\r\n          <div class=\"form-check form-check-inline\">\r\n            <input [(ngModel)]=\"liquidated\" (change)=\"onSelection()\" class=\"form-check-input\" type=\"checkbox\"\r\n              id=\"inlineCheckbox1\">\r\n            <label class=\"form-check-label highlight\" for=\"inlineCheckbox1\">LIQUIDACIONES ARTISTAS LIQUIDADAS</label>\r\n          </div>\r\n          <div class=\"form-check form-check-inline\">\r\n            <input [(ngModel)]=\"notLiquidated\" (change)=\"onSelection()\" class=\"form-check-input\" type=\"checkbox\"\r\n              id=\"inlineCheckbox2\">\r\n            <label class=\"form-check-label highlight\" for=\"inlineCheckbox2\">LIQUIDACIONES ARTISTAS NO LIQUIDADAS</label>\r\n          </div>\r\n          <div class=\"form-check form-check-inline\">\r\n            <input [(ngModel)]=\"CARGO\" (change)=\"onSelection()\" class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox2\">\r\n            <label class=\"form-check-label highlight\" for=\"inlineCheckbox2\">CARGO</label>\r\n          </div>\r\n          <div class=\"form-check form-check-inline\">\r\n            <input [(ngModel)]=\"all\" (change)=\"onSelection()\" class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox2\">\r\n            <label class=\"form-check-label highlight\" for=\"inlineCheckbox2\">TODAS</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"col-4 mt-3\" *ngIf=\"showTable\">\r\n    <table class='table scrollableTable mb-0 mt-1' style='background: #F5F1E3'>\r\n      <thead class='mr-4 d-flex justify-content-around'>\r\n        <th style=\"width:25%\">Cantidad</th>\r\n        <th style=\"width:25%\">Fecha</th>\r\n        <th style=\"width:25%\">Track</th>\r\n        <th style=\"width:25%\" > <p *ngIf=\"_paymentServices.state != 'CARGO' \" >Artista</p> <p *ngIf=\"_paymentServices.state === 'CARGO' \" >CARGO MUSIC</p> </th>\r\n      </thead>\r\n      <tbody #tbody style='width:100%'>\r\n        <tr *ngFor=\"let payment of _paymentServices.payments\" class=\"d-flex justify-conten\r\n        t-around\">\r\n          <td style=\"width:25%\">{{payment.amount.toFixed(2)}}</td>\r\n          <td style=\"width:25%\">{{payment.date | date: 'M/d/y'}}</td>\r\n          <td style=\"width:25%\">{{payment.track.title}}</td>\r\n          <td style=\"width:25%\" > <p *ngIf=\"typeOfSearch != 'CARGOMUSIC' && payment.artist \">{{payment.artist.indexcard.name}}</p> \r\n                         <p *ngIf=\"typeOfSearch === 'CARGOMUSIC' \"> </p> </td>\r\n        </tr>\r\n      </tbody>\r\n      <hr>\r\n      <div class=\"row m-3\" style='background:#F5F1E3;'>\r\n        <div class=\"col-2\"></div>\r\n        <div class=\"col-8 d-flex justify-content-around\">\r\n          <button (click)=\"switchPage(-5)\" *ngIf=\"_paymentServices.from > 0\" class=\"btn btn-warning\">PREV</button>\r\n          <button (click)=\"switchPage(5)\" *ngIf=\"_paymentServices.from + 5 <  _paymentServices.count\"\r\n            class=\"btn btn-warning\">NEXT</button>\r\n        </div>\r\n      </div>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/company/payments-chart/payments-chart.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/company/payments-chart/payments-chart.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scrollableTable tbody {\n  height: 280px; }\n\n@media (min-height: 694px) {\n  .scrollableTable tbody {\n    height: calc(280*1.1px); } }\n\n@media (min-height: 781px) {\n  .scrollableTable tbody {\n    height: calc(280*1.25px); } }\n\n@media (min-height: 833px) {\n  .scrollableTable tbody {\n    height: calc(280*1.35px); } }\n\n@media (min-height: 937px) {\n  .scrollableTable tbody {\n    height: calc(280*1.50px); } }\n\n@media (min-height: 1250px) {\n  .scrollableTable tbody {\n    height: calc(280*2px); } }\n\n@media (min-height: 1875px) {\n  .scrollableTable tbody {\n    height: calc(280*2.90px); } }\n\n@media (min-height: 2500px) {\n  .scrollableTable tbody {\n    height: calc(280*3.90px); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tcGFueS9wYXltZW50cy1jaGFydC9DOlxcVXNlcnNcXDM0Njk1XFxEZXNrdG9wXFxEUkFGVFxcQ0FSR08gTVVTSUNcXEZST05URU5EX0VTQ1VFTEEvc3JjXFxhcHBcXHBhZ2VzXFxjb21wYW55XFxwYXltZW50cy1jaGFydFxccGF5bWVudHMtY2hhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUNKLEVBQUM7O0FBSUQ7RUFDQztJQUNPLHdCQUF1QixFQUMxQixFQUFBOztBQUlMO0VBQ0M7SUFDTyx5QkFBd0IsRUFDM0IsRUFBQTs7QUFJTDtFQUNDO0lBQ08seUJBQXdCLEVBQzNCLEVBQUE7O0FBSUw7RUFDQztJQUNPLHlCQUF3QixFQUMzQixFQUFBOztBQUlMO0VBQ0M7SUFDTyxzQkFBcUIsRUFDeEIsRUFBQTs7QUFJTDtFQUNJO0lBQ0kseUJBQXdCLEVBQzNCLEVBQUE7O0FBSUw7RUFDQztJQUNPLHlCQUF3QixFQUMzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29tcGFueS9wYXltZW50cy1jaGFydC9wYXltZW50cy1jaGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGxhYmxlVGFibGUgdGJvZHl7XHJcbiAgICBoZWlnaHQ6MjgwcHhcclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDY5NHB4KSB7XHJcbiAuc2Nyb2xsYWJsZVRhYmxlIHRib2R5e1xyXG4gICAgICAgIGhlaWdodDogY2FsYygyODAqMS4xcHgpXHJcbiAgICB9XHJcbiAgIFxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDc4MXB4KSB7XHJcbiAuc2Nyb2xsYWJsZVRhYmxlIHRib2R5e1xyXG4gICAgICAgIGhlaWdodDogY2FsYygyODAqMS4yNXB4KVxyXG4gICAgfVxyXG4gIFxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDgzM3B4KSB7XHJcbiAuc2Nyb2xsYWJsZVRhYmxlIHRib2R5e1xyXG4gICAgICAgIGhlaWdodDogY2FsYygyODAqMS4zNXB4KVxyXG4gICAgfVxyXG4gIFxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDkzN3B4KSB7XHJcbiAuc2Nyb2xsYWJsZVRhYmxlIHRib2R5e1xyXG4gICAgICAgIGhlaWdodDogY2FsYygyODAqMS41MHB4KVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLWhlaWdodDogMTI1MHB4KSB7XHJcbiAuc2Nyb2xsYWJsZVRhYmxlIHRib2R5e1xyXG4gICAgICAgIGhlaWdodDogY2FsYygyODAqMnB4KVxyXG4gICAgfVxyXG4gICBcclxufVxyXG5cclxuQG1lZGlhIChtaW4taGVpZ2h0OiAxODc1cHgpIHtcclxuICAgIC5zY3JvbGxhYmxlVGFibGUgdGJvZHl7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDI4MCoyLjkwcHgpXHJcbiAgICB9XHJcbiAgXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLWhlaWdodDogMjUwMHB4KSB7XHJcbiAuc2Nyb2xsYWJsZVRhYmxlIHRib2R5e1xyXG4gICAgICAgIGhlaWdodDogY2FsYygyODAqMy45MHB4KVxyXG4gICAgfVxyXG4gIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/company/payments-chart/payments-chart.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/company/payments-chart/payments-chart.component.ts ***!
  \**************************************************************************/
/*! exports provided: PaymentsChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsChartComponent", function() { return PaymentsChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_payments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/payments.service */ "./src/app/providers/payments.service.ts");
/* harmony import */ var _company_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../company.component */ "./src/app/pages/company/company.component.ts");
/* harmony import */ var _shared_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/line-chart/line-chart.component */ "./src/app/shared/line-chart/line-chart.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var PaymentsChartComponent = /** @class */ (function () {
    function PaymentsChartComponent(_paymentServices, companyComponent) {
        this._paymentServices = _paymentServices;
        this.companyComponent = companyComponent;
        this.labels = [];
        this.data = [];
        this.liquidated = true;
        this.notLiquidated = true;
        this.CARGO = true;
        this.all = true;
        this.showTable = false;
    }
    PaymentsChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.companySubscription = this.companyComponent.notification.subscribe(function (selection) {
            if (selection === 'payments') {
                _this.labels = [];
                Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])().subscribe(function () {
                    _this.setPaymentsData();
                });
            }
        });
        this.onSelection();
    };
    PaymentsChartComponent.prototype.onSelection = function () {
        this._paymentServices.from = 0;
        if (this.CARGO || this.liquidated || this.notLiquidated || this.all) {
            this.setpaymentTypes();
            this.companyComponent.generateChart();
        }
        else {
            this._paymentServices.paymentTypes = [];
            this.companyComponent.generateChart();
        }
    };
    PaymentsChartComponent.prototype.setpaymentTypes = function () {
        if (this.CARGO) {
            this._paymentServices.paymentTypes.push('CARGO');
        }
        else {
            this._paymentServices.paymentTypes = this._paymentServices.paymentTypes.filter(function (paymentTypes) { return paymentTypes != 'CARGO'; });
        }
        if (this.liquidated) {
            this._paymentServices.paymentTypes.push('sent');
        }
        else {
            this._paymentServices.paymentTypes = this._paymentServices.paymentTypes.filter(function (paymentTypes) { return paymentTypes != 'sent'; });
        }
        if (this.notLiquidated) {
            this._paymentServices.paymentTypes.push('notSent');
        }
        else {
            this._paymentServices.paymentTypes = this._paymentServices.paymentTypes.filter(function (paymentTypes) { return paymentTypes != 'notSent'; });
        }
        if (this.all) {
            this._paymentServices.paymentTypes = ['all'];
        }
        else {
            this._paymentServices.paymentTypes = this._paymentServices.paymentTypes.filter(function (paymentTypes) { return paymentTypes != 'all'; });
        }
    };
    PaymentsChartComponent.prototype.setPaymentsData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var dataArray, dataLabels, dataColors, data, data, data, data, labels;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this._paymentServices.paymentTypes.length > 0) {
                            this._paymentServices.searchPayments().subscribe(function () {
                                _this.showTable = true;
                            });
                        }
                        else {
                            this._paymentServices.payments = [];
                        }
                        return [4 /*yield*/, this.companyComponent.labels.forEach(function (date, index) {
                                _this.labels[index] = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
                            })];
                    case 1:
                        _a.sent();
                        dataArray = [];
                        dataLabels = [];
                        dataColors = [];
                        if (!this.all) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.paymentsDataSearch('all')];
                    case 2:
                        data = _a.sent();
                        return [4 /*yield*/, dataArray.push(data)];
                    case 3:
                        _a.sent();
                        dataLabels.push('TODOS');
                        dataColors.push('red');
                        _a.label = 4;
                    case 4:
                        if (!this.liquidated) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.paymentsDataSearch('sent')];
                    case 5:
                        data = _a.sent();
                        return [4 /*yield*/, dataArray.push(data)];
                    case 6:
                        _a.sent();
                        dataLabels.push('ARTISTAS LIQUIDADAS');
                        dataColors.push('green');
                        _a.label = 7;
                    case 7:
                        if (!this.notLiquidated) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.paymentsDataSearch('notSent')];
                    case 8:
                        data = _a.sent();
                        return [4 /*yield*/, dataArray.push(data)];
                    case 9:
                        _a.sent();
                        dataLabels.push('ARTISTAS NO LIQUIDADAS');
                        dataColors.push('blue');
                        _a.label = 10;
                    case 10:
                        if (!this.CARGO) return [3 /*break*/, 13];
                        return [4 /*yield*/, this.paymentsDataSearch('CARGO')];
                    case 11:
                        data = _a.sent();
                        return [4 /*yield*/, dataArray.push(data)];
                    case 12:
                        _a.sent();
                        dataLabels.push('CARGO');
                        dataColors.push('orange');
                        _a.label = 13;
                    case 13:
                        labels = this.labels;
                        this.chart.setInfo(labels, dataArray, dataLabels, dataColors, 'payments');
                        this.setpaymentTypes();
                        return [2 /*return*/];
                }
            });
        });
    };
    PaymentsChartComponent.prototype.paymentsDataSearch = function (paymentTypes) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this._paymentServices.paymentTypes = [paymentTypes];
                        _this._paymentServices.getPaymentsChartData().subscribe(function (payments) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var data;
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        data = [];
                                        return [4 /*yield*/, this.companyComponent.labels.forEach(function (label, index) {
                                                data[index] = 0;
                                            })];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, this.companyComponent.labels.forEach(function (label, index) {
                                                payments.forEach(function (payment) {
                                                    if (new Date(payment.date).getTime() >= label.getTime() && new Date(payment.date).getTime() < _this.companyComponent.labels[index + 1].getTime()) {
                                                        data[index] += payment.amount;
                                                    }
                                                });
                                            })];
                                    case 2:
                                        _a.sent();
                                        resolve(data);
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                    })];
            });
        });
    };
    PaymentsChartComponent.prototype.moveRight = function (direction) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_j) {
                switch (_j.label) {
                    case 0:
                        if (!(this.companyComponent.chartBy === 'weeks')) return [3 /*break*/, 7];
                        if (!(direction === 'forward')) return [3 /*break*/, 3];
                        _a = this.companyComponent.picker0;
                        return [4 /*yield*/, new Date(this._paymentServices.inputs[0])];
                    case 1:
                        _a.startAt = _j.sent();
                        _b = this.companyComponent.picker1;
                        return [4 /*yield*/, new Date(this._paymentServices.inputs[1] + 604800000)];
                    case 2:
                        _b.startAt = _j.sent();
                        this.companyComponent.generateChart();
                        return [3 /*break*/, 6];
                    case 3:
                        _c = this.companyComponent.picker0;
                        return [4 /*yield*/, new Date(this._paymentServices.inputs[0])];
                    case 4:
                        _c.startAt = _j.sent();
                        _d = this.companyComponent.picker1;
                        return [4 /*yield*/, new Date(this._paymentServices.inputs[1] - 604800000)];
                    case 5:
                        _d.startAt = _j.sent();
                        this.companyComponent.generateChart();
                        _j.label = 6;
                    case 6: return [3 /*break*/, 13];
                    case 7:
                        if (!(direction === 'forward')) return [3 /*break*/, 10];
                        _e = this.companyComponent.picker0;
                        return [4 /*yield*/, new Date(this._paymentServices.inputs[0])];
                    case 8:
                        _e.startAt = _j.sent();
                        _f = this.companyComponent.picker1;
                        return [4 /*yield*/, new Date(this._paymentServices.inputs[1] + 86400000)];
                    case 9:
                        _f.startAt = _j.sent();
                        this.companyComponent.generateChart();
                        return [3 /*break*/, 13];
                    case 10:
                        _g = this.companyComponent.picker0;
                        return [4 /*yield*/, new Date(this._paymentServices.inputs[0])];
                    case 11:
                        _g.startAt = _j.sent();
                        _h = this.companyComponent.picker1;
                        return [4 /*yield*/, new Date(this._paymentServices.inputs[1] - 86400000)];
                    case 12:
                        _h.startAt = _j.sent();
                        this.companyComponent.generateChart();
                        _j.label = 13;
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    PaymentsChartComponent.prototype.moveLeft = function (direction) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_j) {
                switch (_j.label) {
                    case 0:
                        if (!(this.companyComponent.chartBy === 'weeks')) return [3 /*break*/, 7];
                        if (!(direction === 'forward')) return [3 /*break*/, 3];
                        _a = this.companyComponent.picker0;
                        return [4 /*yield*/, new Date(this._paymentServices.inputs[0] + 604800000)];
                    case 1:
                        _a.startAt = _j.sent();
                        _b = this.companyComponent.picker1;
                        return [4 /*yield*/, new Date(this._paymentServices.inputs[1])];
                    case 2:
                        _b.startAt = _j.sent();
                        this.companyComponent.generateChart();
                        return [3 /*break*/, 6];
                    case 3:
                        _c = this.companyComponent.picker0;
                        return [4 /*yield*/, new Date(this._paymentServices.inputs[0] - 604800000)];
                    case 4:
                        _c.startAt = _j.sent();
                        _d = this.companyComponent.picker1;
                        return [4 /*yield*/, new Date(this._paymentServices.inputs[1])];
                    case 5:
                        _d.startAt = _j.sent();
                        this.companyComponent.generateChart();
                        _j.label = 6;
                    case 6: return [3 /*break*/, 13];
                    case 7:
                        if (!(direction === 'forward')) return [3 /*break*/, 10];
                        _e = this.companyComponent.picker0;
                        return [4 /*yield*/, new Date(this._paymentServices.inputs[0] + 86400000)];
                    case 8:
                        _e.startAt = _j.sent();
                        _f = this.companyComponent.picker1;
                        return [4 /*yield*/, new Date(this._paymentServices.inputs[1])];
                    case 9:
                        _f.startAt = _j.sent();
                        this.companyComponent.generateChart();
                        return [3 /*break*/, 13];
                    case 10:
                        _g = this.companyComponent.picker0;
                        return [4 /*yield*/, new Date(this._paymentServices.inputs[0] - 86400000)];
                    case 11:
                        _g.startAt = _j.sent();
                        _h = this.companyComponent.picker1;
                        return [4 /*yield*/, new Date(this._paymentServices.inputs[1])];
                    case 12:
                        _h.startAt = _j.sent();
                        this.companyComponent.generateChart();
                        _j.label = 13;
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    PaymentsChartComponent.prototype.switchPage = function (amount) {
        this._paymentServices.from += amount;
        this._paymentServices.searchPayments().subscribe();
    };
    PaymentsChartComponent.prototype.ngOnDestroy = function () {
        this.companySubscription.unsubscribe();
        this._paymentServices.payments = [];
        this._paymentServices.count = 0;
        this._paymentServices.from = 0;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chart'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shared_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_4__["LineChartComponent"])
    ], PaymentsChartComponent.prototype, "chart", void 0);
    PaymentsChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payments-chart',
            template: __webpack_require__(/*! ./payments-chart.component.html */ "./src/app/pages/company/payments-chart/payments-chart.component.html"),
            styles: [__webpack_require__(/*! ./payments-chart.component.scss */ "./src/app/pages/company/payments-chart/payments-chart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_providers_payments_service__WEBPACK_IMPORTED_MODULE_2__["PaymentsService"],
            _company_component__WEBPACK_IMPORTED_MODULE_3__["CompanyComponent"]])
    ], PaymentsChartComponent);
    return PaymentsChartComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row pagesContainerFixed animated fadeIn\">\r\n <div class=\"col-12\">\r\n    <div class=\"row mt-2\" >\r\n        <div class=\"col-12\" style='background:#F5F1E3;border:1px solid black'>\r\n          <div class=\"row p-2\">\r\n            <div class='col-11 d-flex justify-content-center'>\r\n                <h2 style=\"text-shadow: 1px 0 black\" class='text-center animated zoomIn'>¡{{hi()}} {{_userServices.userOnline.name}}...!</h2>\r\n            </div>\r\n            <div class=\"col-1 d-flex justify-content-end align-items-center animated shake\">\r\n                <i (click)=\"_demoServices.dashboardPopup(true)\" class=\"fas fa-info fa-lg\" style='cursor:pointer;color:blue'></i>\r\n            </div>\r\n          </div>\r\n       </div>\r\n      <div class='col-7  blackboard' >\r\n        <div class=\"row m-1 mt-3\" style=\"background:#008080;height:90%;border:2px solid black;-webkit-box-shadow: 6px 10px 15px 0px rgba(0,0,0,0.75);\">\r\n            <div *ngIf=\"!_dashboardServices.unreadMessages && !_dashboardServices.pendingTasks && !_dashboardServices.uncheckedTasks\" class=\"col-12\">\r\n                <h3 class='text-center'>No hay nuevas notificaciones\r\n                </h3>\r\n            </div>\r\n            <div class=\"col-12 animated bounceInUp bounce1 mt-3\"style=\"font-family: 'Mansalva', cursive;\" *ngIf=\"_dashboardServices.unreadMessages\">\r\n                <h5 class=\"text-center\" style=\"color:white\">TIENES MENSAJES NUEVOS...</h5>\r\n                    <table class='table scrollableTable'>\r\n                        <thead>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <td *ngFor=\"let project of _dashboardServices.projects\" class=\"\" style=\"background:#008080;font-family: 'Mansalva', cursive;\">\r\n                                    <div>\r\n                                        <p style=\"color:white\"><i class=\"far fa-bell fa-lg  fa-lg \" style=\"color:#F0B841\"></i> TIENES {{project.messages.length}} MENSAJES SIN LEER EN EL PROYECTO :<a\r\n                                                style='color: #F0B841;text-shadow: 1px 0 black' (click)='toProject(project._id)'>{{project.name.toUpperCase()}}</a>\r\n                                        </p>\r\n                                    </div>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n            </div>\r\n            <hr>\r\n            <div class=\"col-12 p-2\"  >\r\n                <div class=\"row\">\r\n                    <div class='col-12  animated bounceInUp bounce2 ' *ngIf=\"_dashboardServices.pendingTasks\">\r\n                        <h5 class=\"text-center\" style=\"color:white;font-family: 'Mansalva', cursive;\">TIENES TAREAS PENDIENTES DE COMPLETAR...</h5>\r\n                        <div >\r\n                            <table class='table scrollableTable'>\r\n                                <thead></thead>\r\n                                <tbody>\r\n                                    <tr>\r\n                                    <td *ngFor=\"let project of _dashboardServices.projects\" class=\"\"  style=\"background:#008080;font-family: 'Mansalva', cursive;\">\r\n                                        <div *ngIf=\"project.pendingTasks\">\r\n                                            <p style=\"color:white\"><i style=\"color:#F0B841\" class=\"far fa-bell fa-lg \"></i> {{checkTasksNumber(project.pendingTasks.length,'pending')}} \r\n                                                EN EL PROYECTO: <a style='color: #F0B841;text-shadow: 1px 0 black' (click)='toProject(project._id)'>{{project.name.toUpperCase()}}</a>\r\n                                            </p>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                    <div class='col-12 animated bounceInUp bounce3' *ngIf=\"_dashboardServices.uncheckedTasks\">\r\n                        <h5 class=\"text-center\" style=\"color:white;font-family: 'Mansalva', cursive;\">SE TE HAN ASIGNADO NUEVAS TAREAS...</h5>\r\n                        <div  >\r\n                            <table class='table scrollableTable'>\r\n                              <thead></thead>\r\n                                <tbody>\r\n                                    <tr>\r\n                                        <td *ngFor=\"let project of _dashboardServices.projects\" class=\"\"  style=\"background:#008080;font-family: 'Mansalva', cursive;\">\r\n                                            <p style=\"color:white\" *ngIf=\"project.uncheckedTasks\"><i style=\"color:#F0B841\" class=\"far fa-bell fa-lg \"></i>{{checkTasksNumber(project.uncheckedTasks.length,'unchecked')}} ASIGNADAS EN EL\r\n                                                PROYECTO: <a style='color: #F0B841;text-shadow: 1px 0 black' (click)='toProject(project._id)'>{{project.name.toUpperCase()}}</a>\r\n                                            </p>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                                \r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-5 \"  >\r\n        <div class=\"row mt-3\" style='background:#F5F1E3'>\r\n            <div class=\"col-12  \" style=\"height:30%\">\r\n                <div *ngIf=\"_dashboardServices.eventsToday.length > 0\" class=\"row d-flex justify-content-center\" style=\"height: 10%;background:#F0B841;\">\r\n                    <h5 style=\"color:black;text-shadow: 1px 0 black\" class='text-center pt-1'>ECHA UN VISTAZO A LOS EVENTOS PROGRAMADOS PARA HOY....</h5>\r\n                </div>\r\n                <div *ngIf=\"_dashboardServices.eventsToday.length > 0\" class=' row d-flex justify-content-around flex-row'>\r\n                    <table class='table scrollableTable'>\r\n                        <thead>\r\n                            <tr>\r\n                                <th>Nombre</th>\r\n                                <th>Instalación</th>\r\n                                <th>Inicio</th>\r\n                                <th>Finalización</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let todayEvent of _dashboardServices.eventsToday\">\r\n                                <td> <a (click)='toEvent(todayEvent.startDate)'class=\"animated bounce\" style='color: blue'>{{todayEvent.name}}</a></td>\r\n                                <td>{{todayEvent.facilitie['name']}}</td>\r\n                                <td> {{todayEvent.position | timeConversor2: null}}</td>\r\n                                <td>{{todayEvent.endDate | date: 'EEEE d MMMM' }}\r\n                                    {{todayEvent.position | timeConversor2 : todayEvent.duration}}\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-12 \" style=\"height:30%\">\r\n                <div *ngIf=\"_dashboardServices.eventsOnCourse.length > 0\" class=\"row d-flex justify-content-center\" style=\"height: 10%;background:#F0B841;\">\r\n                    <h5 style=\"color:black;text-shadow: 1px 0 black\" class='text-center pt-1'>REVISA LOS EVENTOS EN CURSO....</h5>\r\n                </div>\r\n                <div *ngIf=\"_dashboardServices.eventsOnCourse.length > 0\" class=' row d-flex justify-content-around flex-row'>\r\n                    <div class=\" col-12 \">\r\n                        <table class='table scrollableTable'>\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Nombre</th>\r\n                                    <th>Instalación</th>\r\n                                    <th>Inicio</th>\r\n                                    <th>Finalización</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr  *ngFor=\"let eventOnCourse of _dashboardServices.eventsOnCourse\">\r\n                                    <td > <a  (click)='toEvent(eventOnCourse.startDate)'\r\n                                            style='color: blue' class=\"animated bounce\">{{eventOnCourse.name}}\r\n                                        </a>\r\n                                    </td>\r\n                                    <td>{{eventOnCourse.facilitie['name']}}</td>\r\n                                    <td> {{eventOnCourse.startDate | date : 'EEEE d MMMM' }}\r\n                                        {{eventOnCourse.position | timeConversor2: null}}</td>\r\n                                    <td>{{eventOnCourse.endDate | date: 'EEEE d MMMM' }}\r\n                                        {{eventOnCourse.position | timeConversor2 : eventOnCourse.duration}}\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-12 \" style=\"height: 30%\">\r\n                <div *ngIf=\"_dashboardServices.eventsComming.length> 0\" class=\"row d-flex justify-content-center\" style=\"height: 10%;background:#F0B841;\">\r\n                <h5 style=\"color:black;text-shadow: 1px 0 black\" class='text-center pt-1'>AQUÍ TIENES LOS EVENTOS MÁS PRÓXIMOS....</h5>\r\n                </div>\r\n                <div *ngIf=\"_dashboardServices.eventsComming.length> 0\" class=' row d-flex justify-content-around flex-row'>\r\n                    <div class=\"col-12\">\r\n                        <table class='table scrollableTable'>\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Nombre</th>\r\n                                    <th>Instalación</th>\r\n                                    <th>Inicio</th>\r\n                                    <th>Finalización</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let eventComming of _dashboardServices.eventsComming\">\r\n                                    <td> <a (click)='toEvent(eventComming.startDate)' style='color: blue'>{{eventComming.name}}</a>\r\n                                    </td>\r\n                                    <td>{{eventComming.facilitie['name']}}</td>\r\n                                    <td>{{eventComming.startDate | date: 'EEEE d MMMM' }}\r\n                                        {{eventComming.position | timeConversor2: null}}\r\n                                    </td>\r\n                                    <td>{{eventComming.endDate | date: 'EEEE d MMMM' }}\r\n                                        {{eventComming.position | timeConversor2 : eventComming.duration}}\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>         \r\n        <div *ngIf=\"_dashboardServices.eventsComming.length === 0 && _dashboardServices.eventsOnCourse.length === 0 && _dashboardServices.eventsToday.length === 0\"\r\n            class=\"row\" style=\"height:100%\">\r\n            <h5 class='text-center'>No hay eventes recientes</h5>\r\n        </div>\r\n    </div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/user.service */ "./src/app/providers/user.service.ts");
/* harmony import */ var _providers_calendar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/calendar.service */ "./src/app/providers/calendar.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/dashboard.service */ "./src/app/providers/dashboard.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _providers_project_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../providers/project.service */ "./src/app/providers/project.service.ts");
/* harmony import */ var _providers_demo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../providers/demo.service */ "./src/app/providers/demo.service.ts");
/* harmony import */ var src_app_providers_spinner_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/providers/spinner.service */ "./src/app/providers/spinner.service.ts");










var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_userServices, _calendarServices, router, _dashboardServices, _projectServices, _demoServices, _spinnerServices) {
        this._userServices = _userServices;
        this._calendarServices = _calendarServices;
        this.router = router;
        this._dashboardServices = _dashboardServices;
        this._projectServices = _projectServices;
        this._demoServices = _demoServices;
        this._spinnerServices = _spinnerServices;
        this.dashboardSubscription = null;
        this.projectsUsersSocket = null;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        //////// USER IN DASHBOARD ROOM ///////
                        this._dashboardServices.dashboardIn();
                        ///////// GETTING USER PROJECTS ////////
                        _a = this._dashboardServices;
                        return [4 /*yield*/, JSON.parse(localStorage.getItem('user')).projects.map(function (project) { return project._id; })
                            ///////  UPDATING USER PROJECTS /////////
                        ];
                    case 1:
                        ///////// GETTING USER PROJECTS ////////
                        _a.userProjects = _b.sent();
                        ///////  UPDATING USER PROJECTS /////////
                        this.projectsUsersSocket = this._projectServices.usersSocket().subscribe(function () {
                            if (_this._dashboardServices.userProjects != JSON.parse(localStorage.getItem("user")).projects.map(function (project) { return project._id; })) {
                                _this.getTasksAndLastMessages();
                                _this._dashboardServices.userProjects = JSON.parse(localStorage.getItem('user')).projects.map(function (project) { return project._id; });
                            }
                        });
                        /////// UPDATING NOTIFICATIONS ////
                        this.dashboardSubscription = this._dashboardServices.dashboardSocket().subscribe();
                        //////// GETTING NOTIFICATIONS /////
                        this.getTasksAndLastMessages();
                        this._dashboardServices.getEvents().subscribe();
                        return [2 /*return*/];
                }
            });
        });
    };
    /////// LOGIC FUNCTIONS //////
    DashboardComponent.prototype.getTasksAndLastMessages = function () {
        var _this = this;
        this._dashboardServices.getTasks().subscribe();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["timer"])(300).subscribe(function () {
            _this._dashboardServices.getLastMessages().subscribe();
        });
    };
    /////// ROUTER FUNCTIONS //////
    DashboardComponent.prototype.toProject = function (projectId) {
        this.router.navigate(['/projects', projectId]);
    };
    DashboardComponent.prototype.toEvent = function (date) {
        var _this = this;
        date = new Date(date);
        date = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
        var today = new Date();
        today = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0, 0);
        if (date.getTime() < today.getTime()) {
            var numberOfWeeks = 10000;
            for (var i = 0; i <= numberOfWeeks; i++) {
                date = new Date(date.getTime() + 604800000);
                if (new Date().getTime() <= date.getTime()) {
                    date = new Date(date.getTime());
                    break;
                }
            }
        }
        date = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 6, 0, 0, 0);
        this._calendarServices.getDayByDate(date.getTime()).subscribe(function (res) {
            if (res === 'no-day') {
                _this._calendarServices.postWeek(date).subscribe(function () {
                    _this.router.navigate(['/calendar', _this._calendarServices.currentWeek._id, '']).then(function () {
                    });
                });
            }
            else {
                _this._calendarServices.getWeekByDay(_this._calendarServices.currentDay._id, new Date(_this._calendarServices.currentDay.date).getDay()).subscribe(function () {
                    _this.router.navigate(['/calendar', _this._calendarServices.currentWeek._id, _this._calendarServices.currentDay._id]).then(function () {
                    });
                });
            }
        });
    };
    /////// RENDER FUNCTIONS //////
    DashboardComponent.prototype.hi = function () {
        var today = new Date();
        if (today.getHours() >= 21 && today.getHours() < 5) {
            return "BUENAS NOCHES";
        }
        else if (today.getHours() > 5 && today.getHours() < 15) {
            return "BUENOS D\u00CDAS";
        }
        else {
            return "BUENAS TARDES";
        }
    };
    DashboardComponent.prototype.checkTasksNumber = function (tasks, type) {
        if (type === 'pending') {
            if (tasks === 1) {
                return " TIENES 1 TAREA PENDIENTE";
            }
            else {
                return "TIENES " + tasks + " TAREAS PENDIENTES";
            }
        }
        else if (type === 'unchecked') {
            if (tasks === 1) {
                return " TIENES 1 TAREA NUEVA";
            }
            else {
                return "TIENES " + tasks + " TAREAS NUEVAS";
            }
        }
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this._dashboardServices.dashboardOut();
        this.dashboardSubscription.unsubscribe();
        this.projectsUsersSocket.unsubscribe();
        this._dashboardServices.uncheckedTasks = false;
        this._dashboardServices.unreadMessages = false;
        this._dashboardServices.pendingTasks = false;
        this._dashboardServices.projects = [];
        this._dashboardServices.eventsComming = [];
        this._dashboardServices.eventsToday = [];
        this._dashboardServices.eventsOnCourse = [];
        this._dashboardServices.userProjects = [];
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.css */ "./src/app/pages/dashboard/dashboard.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_user_service__WEBPACK_IMPORTED_MODULE_2__["UserServices"],
            _providers_calendar_service__WEBPACK_IMPORTED_MODULE_3__["CalendarService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _providers_dashboard_service__WEBPACK_IMPORTED_MODULE_5__["DashboardService"],
            _providers_project_service__WEBPACK_IMPORTED_MODULE_7__["ProjectServices"],
            _providers_demo_service__WEBPACK_IMPORTED_MODULE_8__["DemoService"],
            src_app_providers_spinner_service__WEBPACK_IMPORTED_MODULE_9__["SpinnerService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.css":
/*!***********************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.scrollableTable tbody {\r\n    height:85px;\r\n    /* Just for the demo          */\r\n    overflow-y: auto;\r\n    /* Trigger vertical scroll    */\r\n    overflow-x: hidden;\r\n    /* Hide the horizontal scroll */\r\n}\r\n\r\n.bounce1 {\r\n   -webkit-animation-duration: 1.4s;\r\n   animation-duration: 1.4s;\r\n}\r\n\r\n.bounce2 {\r\n   -webkit-animation-duration: 1.8s;\r\n   animation-duration: 1.8s;\r\n}\r\n\r\n.bounce3 {\r\n   -webkit-animation-duration: 2s;\r\n   animation-duration: 2s;\r\n}\r\n\r\n.blackboard{\r\n    height:545px\r\n}\r\n\r\n/*MAIN REF  1210px  */\r\n\r\n@media (min-height: 694px) {\r\n .scrollableTable tbody {\r\n    height:calc(85*1.1px);\r\n    /* Just for the demo          */\r\n    overflow-y: auto;\r\n    /* Trigger vertical scroll    */\r\n    overflow-x: hidden;\r\n    /* Hide the horizontal scroll */\r\n}\r\n.blackboard{\r\n    height:calc(1.1*545px)\r\n}\r\n}\r\n\r\n@media (min-height: 781px){\r\n .scrollableTable tbody {\r\n    height:calc(85 * 1.25px);\r\n    /* Just for the demo          */\r\n    overflow-y: auto;\r\n    /* Trigger vertical scroll    */\r\n    overflow-x: hidden;\r\n    /* Hide the horizontal scroll */\r\n}\r\n.blackboard{\r\n    height:calc(1.25*545px)\r\n}\r\n}\r\n\r\n@media (min-height: 833px) {\r\n .scrollableTable tbody {\r\n    height:calc(85 * 1.35px);\r\n    /* Just for the demo          */\r\n    overflow-y: auto;\r\n    /* Trigger vertical scroll    */\r\n    overflow-x: hidden;\r\n    /* Hide the horizontal scroll */\r\n}\r\n.blackboard{\r\n    height:calc(1.35*545px)\r\n}\r\n}\r\n\r\n@media (min-height: 937px) {\r\n .scrollableTable tbody {\r\n    height:calc(85 * 1.50px);\r\n    /* Just for the demo          */\r\n    overflow-y: auto;\r\n    /* Trigger vertical scroll    */\r\n    overflow-x: hidden;\r\n    /* Hide the horizontal scroll */\r\n}\r\n.blackboard{\r\n    height:calc(1.5*545px)\r\n}\r\n}\r\n\r\n@media (min-height: 1250px) {\r\n .scrollableTable tbody {\r\n    height:calc(85* 2px);\r\n    /* Just for the demo          */\r\n    overflow-y: auto;\r\n    /* Trigger vertical scroll    */\r\n    overflow-x: hidden;\r\n    /* Hide the horizontal scroll */\r\n}\r\n.blackboard{\r\n    height:calc(2*545px)\r\n}\r\n}\r\n\r\n@media (min-height: 1875px) {\r\n    .scrollableTable tbody {\r\n    height:calc(85* 3px);\r\n    /* Just for the demo          */\r\n    overflow-y: auto;\r\n    /* Trigger vertical scroll    */\r\n    overflow-x: hidden;\r\n    /* Hide the horizontal scroll */\r\n}\r\n.blackboard{\r\n    height:calc(3*545px)\r\n}\r\n}\r\n\r\n@media (min-height: 2500px)  {\r\n .scrollableTable tbody {\r\n    height:calc(85* 3.90px);\r\n    /* Just for the demo          */\r\n    overflow-y: auto;\r\n    /* Trigger vertical scroll    */\r\n    overflow-x: hidden;\r\n    /* Hide the horizontal scroll */\r\n}\r\n.blackboard{\r\n    height:calc(3.9*545px)\r\n}\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxpQkFBaUI7SUFDakIsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtJQUNuQixnQ0FBZ0M7Q0FDbkM7O0FBRUQ7R0FDRyxpQ0FBaUM7R0FDakMseUJBQXlCO0NBQzNCOztBQUNEO0dBQ0csaUNBQWlDO0dBQ2pDLHlCQUF5QjtDQUMzQjs7QUFDRDtHQUNHLCtCQUErQjtHQUMvQix1QkFBdUI7Q0FDekI7O0FBQ0Q7SUFDSSxZQUFZO0NBQ2Y7O0FBQ0Qsc0JBQXNCOztBQUV0QjtDQUNDO0lBQ0csc0JBQXNCO0lBQ3RCLGdDQUFnQztJQUNoQyxpQkFBaUI7SUFDakIsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtJQUNuQixnQ0FBZ0M7Q0FDbkM7QUFDRDtJQUNJLHNCQUFzQjtDQUN6QjtDQUNBOztBQUNEO0NBQ0M7SUFDRyx5QkFBeUI7SUFDekIsZ0NBQWdDO0lBQ2hDLGlCQUFpQjtJQUNqQixnQ0FBZ0M7SUFDaEMsbUJBQW1CO0lBQ25CLGdDQUFnQztDQUNuQztBQUNEO0lBQ0ksdUJBQXVCO0NBQzFCO0NBQ0E7O0FBQ0Q7Q0FDQztJQUNHLHlCQUF5QjtJQUN6QixnQ0FBZ0M7SUFDaEMsaUJBQWlCO0lBQ2pCLGdDQUFnQztJQUNoQyxtQkFBbUI7SUFDbkIsZ0NBQWdDO0NBQ25DO0FBQ0Q7SUFDSSx1QkFBdUI7Q0FDMUI7Q0FDQTs7QUFFRDtDQUNDO0lBQ0cseUJBQXlCO0lBQ3pCLGdDQUFnQztJQUNoQyxpQkFBaUI7SUFDakIsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtJQUNuQixnQ0FBZ0M7Q0FDbkM7QUFDRDtJQUNJLHNCQUFzQjtDQUN6QjtDQUNBOztBQUdEO0NBQ0M7SUFDRyxxQkFBcUI7SUFDckIsZ0NBQWdDO0lBQ2hDLGlCQUFpQjtJQUNqQixnQ0FBZ0M7SUFDaEMsbUJBQW1CO0lBQ25CLGdDQUFnQztDQUNuQztBQUNEO0lBQ0ksb0JBQW9CO0NBQ3ZCO0NBQ0E7O0FBRUQ7SUFDSTtJQUNBLHFCQUFxQjtJQUNyQixnQ0FBZ0M7SUFDaEMsaUJBQWlCO0lBQ2pCLGdDQUFnQztJQUNoQyxtQkFBbUI7SUFDbkIsZ0NBQWdDO0NBQ25DO0FBQ0Q7SUFDSSxvQkFBb0I7Q0FDdkI7Q0FDQTs7QUFFRDtDQUNDO0lBQ0csd0JBQXdCO0lBQ3hCLGdDQUFnQztJQUNoQyxpQkFBaUI7SUFDakIsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtJQUNuQixnQ0FBZ0M7Q0FDbkM7QUFDRDtJQUNJLHNCQUFzQjtDQUN6QjtDQUNBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnNjcm9sbGFibGVUYWJsZSB0Ym9keSB7XHJcbiAgICBoZWlnaHQ6ODVweDtcclxuICAgIC8qIEp1c3QgZm9yIHRoZSBkZW1vICAgICAgICAgICovXHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgLyogVHJpZ2dlciB2ZXJ0aWNhbCBzY3JvbGwgICAgKi9cclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIC8qIEhpZGUgdGhlIGhvcml6b250YWwgc2Nyb2xsICovXHJcbn1cclxuXHJcbi5ib3VuY2UxIHtcclxuICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDEuNHM7XHJcbiAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMS40cztcclxufVxyXG4uYm91bmNlMiB7XHJcbiAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjhzO1xyXG4gICBhbmltYXRpb24tZHVyYXRpb246IDEuOHM7XHJcbn1cclxuLmJvdW5jZTMge1xyXG4gICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbiAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbn1cclxuLmJsYWNrYm9hcmR7XHJcbiAgICBoZWlnaHQ6NTQ1cHhcclxufVxyXG4vKk1BSU4gUkVGICAxMjEwcHggICovXHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDY5NHB4KSB7XHJcbiAuc2Nyb2xsYWJsZVRhYmxlIHRib2R5IHtcclxuICAgIGhlaWdodDpjYWxjKDg1KjEuMXB4KTtcclxuICAgIC8qIEp1c3QgZm9yIHRoZSBkZW1vICAgICAgICAgICovXHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgLyogVHJpZ2dlciB2ZXJ0aWNhbCBzY3JvbGwgICAgKi9cclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIC8qIEhpZGUgdGhlIGhvcml6b250YWwgc2Nyb2xsICovXHJcbn1cclxuLmJsYWNrYm9hcmR7XHJcbiAgICBoZWlnaHQ6Y2FsYygxLjEqNTQ1cHgpXHJcbn1cclxufVxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDc4MXB4KXtcclxuIC5zY3JvbGxhYmxlVGFibGUgdGJvZHkge1xyXG4gICAgaGVpZ2h0OmNhbGMoODUgKiAxLjI1cHgpO1xyXG4gICAgLyogSnVzdCBmb3IgdGhlIGRlbW8gICAgICAgICAgKi9cclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAvKiBUcmlnZ2VyIHZlcnRpY2FsIHNjcm9sbCAgICAqL1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgLyogSGlkZSB0aGUgaG9yaXpvbnRhbCBzY3JvbGwgKi9cclxufVxyXG4uYmxhY2tib2FyZHtcclxuICAgIGhlaWdodDpjYWxjKDEuMjUqNTQ1cHgpXHJcbn1cclxufVxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDgzM3B4KSB7XHJcbiAuc2Nyb2xsYWJsZVRhYmxlIHRib2R5IHtcclxuICAgIGhlaWdodDpjYWxjKDg1ICogMS4zNXB4KTtcclxuICAgIC8qIEp1c3QgZm9yIHRoZSBkZW1vICAgICAgICAgICovXHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgLyogVHJpZ2dlciB2ZXJ0aWNhbCBzY3JvbGwgICAgKi9cclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIC8qIEhpZGUgdGhlIGhvcml6b250YWwgc2Nyb2xsICovXHJcbn1cclxuLmJsYWNrYm9hcmR7XHJcbiAgICBoZWlnaHQ6Y2FsYygxLjM1KjU0NXB4KVxyXG59XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLWhlaWdodDogOTM3cHgpIHtcclxuIC5zY3JvbGxhYmxlVGFibGUgdGJvZHkge1xyXG4gICAgaGVpZ2h0OmNhbGMoODUgKiAxLjUwcHgpO1xyXG4gICAgLyogSnVzdCBmb3IgdGhlIGRlbW8gICAgICAgICAgKi9cclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAvKiBUcmlnZ2VyIHZlcnRpY2FsIHNjcm9sbCAgICAqL1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgLyogSGlkZSB0aGUgaG9yaXpvbnRhbCBzY3JvbGwgKi9cclxufVxyXG4uYmxhY2tib2FyZHtcclxuICAgIGhlaWdodDpjYWxjKDEuNSo1NDVweClcclxufVxyXG59XHJcblxyXG5cclxuQG1lZGlhIChtaW4taGVpZ2h0OiAxMjUwcHgpIHtcclxuIC5zY3JvbGxhYmxlVGFibGUgdGJvZHkge1xyXG4gICAgaGVpZ2h0OmNhbGMoODUqIDJweCk7XHJcbiAgICAvKiBKdXN0IGZvciB0aGUgZGVtbyAgICAgICAgICAqL1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIC8qIFRyaWdnZXIgdmVydGljYWwgc2Nyb2xsICAgICovXHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAvKiBIaWRlIHRoZSBob3Jpem9udGFsIHNjcm9sbCAqL1xyXG59XHJcbi5ibGFja2JvYXJke1xyXG4gICAgaGVpZ2h0OmNhbGMoMio1NDVweClcclxufVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDE4NzVweCkge1xyXG4gICAgLnNjcm9sbGFibGVUYWJsZSB0Ym9keSB7XHJcbiAgICBoZWlnaHQ6Y2FsYyg4NSogM3B4KTtcclxuICAgIC8qIEp1c3QgZm9yIHRoZSBkZW1vICAgICAgICAgICovXHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgLyogVHJpZ2dlciB2ZXJ0aWNhbCBzY3JvbGwgICAgKi9cclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIC8qIEhpZGUgdGhlIGhvcml6b250YWwgc2Nyb2xsICovXHJcbn1cclxuLmJsYWNrYm9hcmR7XHJcbiAgICBoZWlnaHQ6Y2FsYygzKjU0NXB4KVxyXG59XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLWhlaWdodDogMjUwMHB4KSAge1xyXG4gLnNjcm9sbGFibGVUYWJsZSB0Ym9keSB7XHJcbiAgICBoZWlnaHQ6Y2FsYyg4NSogMy45MHB4KTtcclxuICAgIC8qIEp1c3QgZm9yIHRoZSBkZW1vICAgICAgICAgICovXHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgLyogVHJpZ2dlciB2ZXJ0aWNhbCBzY3JvbGwgICAgKi9cclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIC8qIEhpZGUgdGhlIGhvcml6b250YWwgc2Nyb2xsICovXHJcbn1cclxuLmJsYWNrYm9hcmR7XHJcbiAgICBoZWlnaHQ6Y2FsYygzLjkqNTQ1cHgpXHJcbn1cclxufVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/facilities/facilities.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/facilities/facilities.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scrollableTable tbody{\r\n    height: 420px;\r\n}\r\n\r\n@media (min-height: 694px) {\r\n    .scrollableTable tbody{\r\n    height:calc(1.1*420px);\r\n}\r\n}\r\n\r\n@media (min-height: 781px) {\r\n  .scrollableTable tbody{\r\n    height:calc(1.25*420px);\r\n}\r\n}\r\n\r\n@media (min-height: 833px) {\r\n  .scrollableTable tbody{\r\n    height:calc(1.35*420px);\r\n}\r\n}\r\n\r\n@media (min-height: 937px) {\r\n  .scrollableTable tbody{\r\n    height:calc(1.5*420px);\r\n}\r\n}\r\n\r\n@media (min-height: 1250px) {\r\n  .scrollableTable tbody{\r\n    height:calc(2*420px);\r\n}\r\n}\r\n\r\n@media (min-height: 1875px) {\r\n    .scrollableTable tbody{\r\n    height:calc(3*420px);\r\n} \r\n}\r\n\r\n@media (min-height: 2500px) {\r\n  .scrollableTable tbody{\r\n    height:calc(3.9*420px);\r\n}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmFjaWxpdGllcy9mYWNpbGl0aWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0NBQ2pCOztBQUVEO0lBQ0k7SUFDQSx1QkFBdUI7Q0FDMUI7Q0FDQTs7QUFFRDtFQUNFO0lBQ0Usd0JBQXdCO0NBQzNCO0NBQ0E7O0FBRUQ7RUFDRTtJQUNFLHdCQUF3QjtDQUMzQjtDQUNBOztBQUVEO0VBQ0U7SUFDRSx1QkFBdUI7Q0FDMUI7Q0FDQTs7QUFFRDtFQUNFO0lBQ0UscUJBQXFCO0NBQ3hCO0NBQ0E7O0FBRUQ7SUFDSTtJQUNBLHFCQUFxQjtDQUN4QjtDQUNBOztBQUVEO0VBQ0U7SUFDRSx1QkFBdUI7Q0FDMUI7Q0FDQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZhY2lsaXRpZXMvZmFjaWxpdGllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcm9sbGFibGVUYWJsZSB0Ym9keXtcclxuICAgIGhlaWdodDogNDIwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLWhlaWdodDogNjk0cHgpIHtcclxuICAgIC5zY3JvbGxhYmxlVGFibGUgdGJvZHl7XHJcbiAgICBoZWlnaHQ6Y2FsYygxLjEqNDIwcHgpO1xyXG59XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLWhlaWdodDogNzgxcHgpIHtcclxuICAuc2Nyb2xsYWJsZVRhYmxlIHRib2R5e1xyXG4gICAgaGVpZ2h0OmNhbGMoMS4yNSo0MjBweCk7XHJcbn1cclxufVxyXG5cclxuQG1lZGlhIChtaW4taGVpZ2h0OiA4MzNweCkge1xyXG4gIC5zY3JvbGxhYmxlVGFibGUgdGJvZHl7XHJcbiAgICBoZWlnaHQ6Y2FsYygxLjM1KjQyMHB4KTtcclxufVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDkzN3B4KSB7XHJcbiAgLnNjcm9sbGFibGVUYWJsZSB0Ym9keXtcclxuICAgIGhlaWdodDpjYWxjKDEuNSo0MjBweCk7XHJcbn1cclxufVxyXG5cclxuQG1lZGlhIChtaW4taGVpZ2h0OiAxMjUwcHgpIHtcclxuICAuc2Nyb2xsYWJsZVRhYmxlIHRib2R5e1xyXG4gICAgaGVpZ2h0OmNhbGMoMio0MjBweCk7XHJcbn1cclxufVxyXG5cclxuQG1lZGlhIChtaW4taGVpZ2h0OiAxODc1cHgpIHtcclxuICAgIC5zY3JvbGxhYmxlVGFibGUgdGJvZHl7XHJcbiAgICBoZWlnaHQ6Y2FsYygzKjQyMHB4KTtcclxufSBcclxufVxyXG5cclxuQG1lZGlhIChtaW4taGVpZ2h0OiAyNTAwcHgpIHtcclxuICAuc2Nyb2xsYWJsZVRhYmxlIHRib2R5e1xyXG4gICAgaGVpZ2h0OmNhbGMoMy45KjQyMHB4KTtcclxufVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/facilities/facilities.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/facilities/facilities.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row animated fadeIn pagesContainerFixed\">\r\n    <div class=\"col-12\" >\r\n        <div class=\"row\">\r\n            <div class=\"col-12 list-group\">\r\n                <h5 class='list-group-item-heading text-center mt-3 highlight'>INSTALACIONES</h5>\r\n                <button (click)='postFacilitie()' class='btn btn-warning m-2 highlight'>CREAR INSTALACION</button>\r\n            </div>\r\n            <div class=\"col-12 animated fadeIn\" style='background:#DCD4D2'>\r\n                <table class='table scrollableTable' style='background:#F5F1E3;border:1px solid #F0B841'>\r\n                    <thead>\r\n                        <th>Nombre</th>\r\n                        <th>Estado</th>\r\n                        <th></th>\r\n                    </thead>   \r\n                    <tbody>\r\n                        <tr *ngFor=\"let facilitie of _facilitieServices.facilities let i=index\">\r\n                            <td>\r\n                                <div><strong> {{facilitie.name}}</strong></div>\r\n                            </td>\r\n                            <td>\r\n                                <label *ngIf=\"!facilitie.status\">\r\n                                    <button class='btn btn-warning highlight' (click)=changeStatus(facilitie)>Activar</button>\r\n                                </label>\r\n                                <label *ngIf=\"facilitie.status\">\r\n                                    <button class='btn btn-warning highlight' (click)=changeStatus(facilitie)>Desactivar</button>\r\n                                </label>\r\n                            </td>\r\n                            <td>\r\n                                <button (click)='putFacilitie(facilitie._id)' class=\"btn btn-primary\">\r\n                                    <i class=\"fas fa-edit\"></i>\r\n                                </button>\r\n                                <button (click)=\"deleteFacilitie(facilitie._id)\" class=\"btn btn-danger\">\r\n                                    <i class=\"far fa-trash-alt\"></i>\r\n                                </button>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>           \r\n                </table>\r\n                <div class='d-flex justify-content-around mb-2 '>\r\n                    <button *ngIf=\"from && from > 0\" (click)='changeFrom(-5) ' class='btn btn-secondary '>Previous</button>\r\n                    <button *ngIf=\"_facilitieServices.count > from+5\" (click)='changeFrom(5) '\r\n                        class='btn btn-secondary '>Following</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n   \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/facilities/facilities.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/facilities/facilities.component.ts ***!
  \**********************************************************/
/*! exports provided: FacilitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilitiesComponent", function() { return FacilitiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_facilities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/facilities.service */ "./src/app/providers/facilities.service.ts");
/* harmony import */ var _modals_facilities_modal_facilities_modal_controller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modals/facilities-modal/facilities-modal-controller.service */ "./src/app/modals/facilities-modal/facilities-modal-controller.service.ts");
/* harmony import */ var _providers_swal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/swal.service */ "./src/app/providers/swal.service.ts");





var FacilitiesComponent = /** @class */ (function () {
    function FacilitiesComponent(_facilitieServices, _facilitiesModalController, _swalServices) {
        this._facilitieServices = _facilitieServices;
        this._facilitiesModalController = _facilitiesModalController;
        this._swalServices = _swalServices;
        this.facilities = [];
        this.facilitiesSocket = null;
        this.from = 0;
    }
    FacilitiesComponent.prototype.ngOnInit = function () {
        this._facilitieServices.getFacilities().subscribe();
        this.facilitiesSocket = this._facilitieServices.facililiteSocket().subscribe();
    };
    FacilitiesComponent.prototype.putFacilitie = function (id) {
        this._facilitiesModalController.showModal(id);
        this._facilitiesModalController.notification.emit();
    };
    FacilitiesComponent.prototype.changeStatus = function (facilitie) {
        if (facilitie.status) {
            facilitie.status = false;
        }
        else {
            facilitie.status = true;
        }
        this._facilitieServices.putFacilitie(facilitie._id, facilitie).subscribe();
    };
    FacilitiesComponent.prototype.changeFrom = function (number) {
        if (this.from + number >= 0) {
            this.from += number;
        }
        this._facilitieServices.facilities = [];
        this._facilitieServices.getFacilities(this.from).subscribe();
    };
    FacilitiesComponent.prototype.deleteFacilitie = function (id) {
        var _this = this;
        this._swalServices.confirmDelete().then(function (res) {
            if (res) {
                _this._facilitieServices.deleteFacilitie(id).subscribe(function () {
                    _this._facilitieServices.getFacilities(_this.from).subscribe();
                });
            }
        });
    };
    FacilitiesComponent.prototype.postFacilitie = function () {
        this._facilitiesModalController.showModal();
        this._facilitiesModalController.notification.emit();
    };
    FacilitiesComponent.prototype.ngOnDestroy = function () {
        this._facilitieServices.facilities = [];
        this.facilitiesSocket.unsubscribe();
    };
    FacilitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-facilities',
            template: __webpack_require__(/*! ./facilities.component.html */ "./src/app/pages/facilities/facilities.component.html"),
            styles: [__webpack_require__(/*! ./facilities.component.css */ "./src/app/pages/facilities/facilities.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_facilities_service__WEBPACK_IMPORTED_MODULE_2__["FacilitiesService"],
            _modals_facilities_modal_facilities_modal_controller_service__WEBPACK_IMPORTED_MODULE_3__["FacilitiesModalController"],
            _providers_swal_service__WEBPACK_IMPORTED_MODULE_4__["SwalService"]])
    ], FacilitiesComponent);
    return FacilitiesComponent;
}());



/***/ }),

/***/ "./src/app/pages/manager/incomes/incomes.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/manager/incomes/incomes.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='row animated fadeIn pagesContainerFixed'>\r\n  <div class=\"col-12 d-flex flex-column justify-content-around\">\r\n    <div class=\"row\" style=\"height:20%\">\r\n      <div class='col-11 d-flex justify-content-center mt-1 mb-1'>\r\n        <button (click)=\"postIncome()\" class='btn btn-warning ml-5 highlight'>AÑADIR NUEVO INGRESO</button>\r\n      </div>\r\n      <div class=\"col-1 d-flex justify-content-end align-items-start animated shake\">\r\n        <i (click)=\"_demoServices.incomesPopup(true)\" class=\"fas fa-info fa-lg m-4\" style='cursor:pointer;color:blue'></i>\r\n      </div>\r\n      <div class=\"col-12\">\r\n        <div class=\"row d-flex justify-content-center\">\r\n          <div class=\"col-12 d-flex justify-content-center mr-5\">\r\n            <button class=\"btn btn-warning highlight\" [ngStyle]=\"{'opacity':buttonsStyles('liquidated')}\"\r\n              (click)=\"_incomeServices.incomeType='liquidated'\">INGRESOS LIQUIDADOS</button>\r\n            <button class=\"btn btn-warning highlight\" [ngStyle]=\"{'opacity':buttonsStyles('notLiquidated')}\"\r\n              (click)=\"_incomeServices.incomeType='notLiquidated'\">INGRESOS NO LIQUIDADOS</button>\r\n          </div>\r\n          <div class=\"col-2\"></div>\r\n          <div class=\"col-7 m-2\">\r\n            <div class=\"row d-flex justify-content-around\">\r\n              <div class=\"col-6 d-flex justify-content-around\">\r\n                <div class=\"form-check\">\r\n                  <input checked class=\"form-check-input\" type=\"radio\" name=\"origin\" id=\"origin\" value=\"origin\"\r\n                    [(ngModel)]=\"_incomeServices.searchCriteria\">\r\n                  <label class=\"form-check-label highlight\" for=\"origin\">\r\n                    Buscar por <a class=\"highlight\" routerLinkActive=\"router-link-active\" style='color:blue'>ORIGEN</a>\r\n                  </label>\r\n                </div>\r\n                <div class=\"form-check\">\r\n                  <input class=\"form-check-input\" type=\"radio\" name=\"amount\" id=\"amount\" value=\"amount\"\r\n                    [(ngModel)]=\"_incomeServices.searchCriteria\">\r\n                  <label class=\"form-check-label highlight\" for=\"amount\">\r\n                    Buscar por <a class=\"highlight\" routerLinkActive=\"router-link-active\" style='color:blue'>CANTIDAD</a>\r\n                  </label>\r\n                </div>\r\n                <div class=\"form-check\">\r\n                  <input class=\"form-check-input\" type=\"radio\" name=\"date\" id=\"date\" value=\"date\"\r\n                    [(ngModel)]=\"_incomeServices.searchCriteria\">\r\n                  <label class=\"form-check-label highlight\" for=\"date\">\r\n                    Buscar por <a class=\"highlight\" routerLinkActive=\"router-link-active\" style='color:blue'>FECHA</a>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-6 d-flex justify-content-center mb-2\" *ngIf=\"_incomeServices.searchCriteria\">\r\n                <div class='d-flex justify-content-center'>\r\n                  <input #input0 *ngIf=\"_incomeServices.searchCriteria === 'origin'\" #input type=\"text\" name=\"input\" id=\"\"\r\n                    placeholder=\"Introduce el nombre del deudor origen del ingreso\">\r\n                </div>\r\n                <div *ngIf=\"_incomeServices.searchCriteria === 'date'\" class=\"d-flex flex-column justify-content-center\">\r\n                  <div>\r\n                    <input #input0 type=\"text\" placeholder=\" De dd-mm-yyyy\">\r\n                  </div>\r\n                  <div>\r\n                    <input #input1 type=\"text\" placeholder=\"A dd-mm-yyyy\">\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"_incomeServices.searchCriteria === 'amount'\" class=\"d-flex flex-column justify-content-center\">\r\n                  <div>\r\n                    <input #input0 type=\"number\" placeholder=\"Introduce una cantidad mínima\">\r\n                  </div>\r\n                  <div>\r\n                    <input #input1 type=\"number\" placeholder=\"Introduce una cantidad máxima\">\r\n                  </div>\r\n                </div>\r\n                <div class='d-flex justify-content-center'>\r\n                  <button (click)=\"search()\" class='btn btn-warning highlight'>BUSCAR</button>\r\n                  <button (click)=\"_incomeServices.getIncomes().subscribe()\"  class='btn btn-warning highlight'>TODOS</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-2 d-flex justify-content-end align-items-start animated shake\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div  *ngIf=\"_incomeServices.incomeType \" class=\"row d-flex justify-content-center\" style=\"height:80%\">\r\n      <div class=\"col-12\">\r\n        <app-liquidated *ngIf=\"_incomeServices.incomeType === 'liquidated'\"></app-liquidated>\r\n        <app-not-liquidated *ngIf=\"_incomeServices.incomeType === 'notLiquidated'\"></app-not-liquidated>\r\n      </div>\r\n    </div>\r\n  </div> \r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/manager/incomes/incomes.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/manager/incomes/incomes.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hbmFnZXIvaW5jb21lcy9pbmNvbWVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/manager/incomes/incomes.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/manager/incomes/incomes.component.ts ***!
  \************************************************************/
/*! exports provided: IncomesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomesComponent", function() { return IncomesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_modals_income_modal_incomes_modal_controller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modals/income-modal/incomes-modal-controller.service */ "./src/app/modals/income-modal/incomes-modal-controller.service.ts");
/* harmony import */ var _providers_incomes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/incomes.service */ "./src/app/providers/incomes.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _providers_demo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/demo.service */ "./src/app/providers/demo.service.ts");







var IncomesComponent = /** @class */ (function () {
    function IncomesComponent(_incomeModalController, _incomeServices, _demoServices) {
        this._incomeModalController = _incomeModalController;
        this._incomeServices = _incomeServices;
        this._demoServices = _demoServices;
    }
    IncomesComponent.prototype.ngOnInit = function () {
        this._demoServices.incomesPopup();
        this._incomeServices.incomeType = 'notLiquidated';
    };
    IncomesComponent.prototype.postIncome = function () {
        this._incomeModalController.showModal();
        this._incomeModalController.notification.emit();
    };
    IncomesComponent.prototype.search = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (this._incomeServices.searchCriteria) {
                    case 'origin':
                        this._incomeServices.inputs[0] = this.input0.nativeElement.value;
                        this._incomeServices.searchIncomes().subscribe();
                        break;
                    case 'amount':
                        this._incomeServices.inputs[0] = String(this.input0.nativeElement.value);
                        this._incomeServices.inputs[1] = String(this.input1.nativeElement.value);
                        this._incomeServices.searchIncomes().subscribe();
                        break;
                    case 'date':
                        this.checkDateFormat().then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var values, _a, _b, values2, _c, _d;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_e) {
                                switch (_e.label) {
                                    case 0:
                                        values = this.input0.nativeElement.value.split('-');
                                        return [4 /*yield*/, values.forEach(function (value, index) {
                                                values[index] = Number(value);
                                            })];
                                    case 1:
                                        _e.sent();
                                        _a = this._incomeServices.inputs;
                                        _b = 0;
                                        return [4 /*yield*/, new Date(values[2], values[1] - 1, values[0]).getTime()];
                                    case 2:
                                        _a[_b] = _e.sent();
                                        values2 = this.input1.nativeElement.value.split('-');
                                        return [4 /*yield*/, values2.forEach(function (value, index) {
                                                values2[index] = Number(value);
                                            })];
                                    case 3:
                                        _e.sent();
                                        _c = this._incomeServices.inputs;
                                        _d = 1;
                                        return [4 /*yield*/, new Date(values2[2], values2[1] - 1, values2[0]).getTime()];
                                    case 4:
                                        _c[_d] = _e.sent();
                                        this._incomeServices.searchIncomes().subscribe();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        break;
                }
                return [2 /*return*/];
            });
        });
    };
    IncomesComponent.prototype.checkDateFormat = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var regExp = /(^(((0[1-9]|1[0-9]|2[0-8])[-](0[1-9]|1[012]))|((29|30|31)[-](0[13578]|1[02]))|((29|30)[-](0[4,6,9]|11)))[-](19|[2-9][0-9])\d\d$)|(^29[-]02[-](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/;
            if (regExp.test(_this.input0.nativeElement.value) && regExp.test(_this.input1.nativeElement.value)) {
                resolve(true);
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    text: 'Utiliza el formato indicado dd-mm-yyyy , gracias',
                    type: 'info',
                    showCloseButton: true
                });
            }
        });
    };
    IncomesComponent.prototype.buttonsStyles = function (type) {
        var _this = this;
        if (this._incomeServices.incomeType === '') {
            this._incomeServices.searchCriteria = 'origin';
            if (type === 'notLiquidated') {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(300).subscribe(function () {
                    _this._incomeServices.incomeType = 'notLiquidated';
                });
                return '1';
            }
            else {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(300).subscribe(function () {
                    _this._incomeServices.incomeType = 'notLiquidated';
                });
                return '0.5';
            }
        }
        else {
            if (type === 'liquidated') {
                if (this._incomeServices.incomeType != 'liquidated') {
                    return '0.5';
                }
            }
            else {
                if (this._incomeServices.incomeType != 'notLiquidated') {
                    return '0.5';
                }
                else {
                    return '1';
                }
            }
        }
    };
    IncomesComponent.prototype.ngOnDestroy = function () {
        this._incomeServices.incomeType = '';
        this._incomeServices.incomes;
        this._incomeServices.from = 0;
        this._incomeServices.searchCriteria = '';
        this._incomeServices.lastSearchCriteria = '';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("input0"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], IncomesComponent.prototype, "input0", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("input1"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], IncomesComponent.prototype, "input1", void 0);
    IncomesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-incomes',
            template: __webpack_require__(/*! ./incomes.component.html */ "./src/app/pages/manager/incomes/incomes.component.html"),
            styles: [__webpack_require__(/*! ./incomes.component.scss */ "./src/app/pages/manager/incomes/incomes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_modals_income_modal_incomes_modal_controller_service__WEBPACK_IMPORTED_MODULE_3__["IncomeModalController"],
            _providers_incomes_service__WEBPACK_IMPORTED_MODULE_4__["IncomesService"],
            _providers_demo_service__WEBPACK_IMPORTED_MODULE_6__["DemoService"]])
    ], IncomesComponent);
    return IncomesComponent;
}());



/***/ }),

/***/ "./src/app/pages/manager/incomes/liquidated/liquidated.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/manager/incomes/liquidated/liquidated.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"_incomeServices.incomes.length > 0\" class=\"row m-2 \" style=\"width:100%;height: 100%\">\r\n  <div class=\"col-12 p-0\">\r\n    <div class=\"row\">\r\n    <div class=\"col-12 d-flex justify-content-center\">\r\n      <h3 class=\"highlight\">Ingresos liquidados</h3>\r\n    </div>\r\n    <div class=\"col-12\">\r\n      <table  class='table scrollableTable mb-0' style='background: #F5F1E3'>\r\n        <thead  class='mr-4 d-flex justify-content-around'>\r\n          <th style=\"width:20%\">Origen</th>\r\n          <th style=\"width:20%\" >Cantidad</th>\r\n          <th style=\"width:60%\">Liquidaciones</th>\r\n        </thead>\r\n        <tbody  #tbody style='width:100%'>\r\n          <tr class=\"d-flex justify-content-around\" *ngFor=\"let income of _incomeServices.incomes let i=index\">\r\n            <td style=\"width:20%\">{{income.debitor?.name}}</td>\r\n            <td style=\"width:20%\">{{income.liquidatedAmount.toFixed(2)}}</td>\r\n            <td style=\"width:60%\">\r\n              <table class='table scrollableTable insideTable'>\r\n                <thead class=\"d-flex justify-content-around\">\r\n                  <th class='p-1' style=\"width:20%\">Fecha</th>\r\n                  <th class='p-1' style=\"width:20%\">Importe</th>\r\n                  <th class=\"p-1\" style=\"width:20%\">Artista</th>\r\n                  <th class='p-1' style=\"width:40%\">ID</th>\r\n                </thead>\r\n                <tbody >\r\n                  <tr *ngFor='let payment of _incomeServices.incomes[i].payments' class=\"d-flex justify-content-around\" style=\"width:100%\">\r\n                    <td style=\"width:20%\">{{payment.date | date}}</td>\r\n                    <td style=\"width:20%\">{{payment.amount.toFixed(2)}}</td>\r\n                    <td style=\"width:20%\">{{payment.artist?.indexcard?.name}}</td>\r\n                    <td style=\"width:40%\">{{payment._id}}</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n        <hr>\r\n        <div class=\"row m-3\" style='background:#F5F1E3;'>\r\n          <div class=\"col-2\"></div>\r\n          <div class=\"col-8 d-flex justify-content-around\">\r\n            <button (click)=\"switch(-5)\" *ngIf=\"_incomeServices.from > 0\" class=\"btn btn-warning\">PREV</button>\r\n            <button (click)=\"switch(5)\" *ngIf=\"  _incomeServices.count > _incomeServices.from + 5 \"  class=\"btn btn-warning\">NEXT</button>\r\n          </div>\r\n          <div class=\"col-2\"></div>\r\n        </div>\r\n      </table>\r\n    </div>\r\n    </div>\r\n  </div>\r\n</div>  "

/***/ }),

/***/ "./src/app/pages/manager/incomes/liquidated/liquidated.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/manager/incomes/liquidated/liquidated.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scrollableTable tbody {\n  height: 320px;\n  /* Just for the demo          */\n  overflow-y: auto;\n  /* Trigger vertical scroll    */\n  overflow-x: hidden;\n  /* Hide the horizontal scroll */ }\n\n.insideTable tbody {\n  height: 100px !important; }\n\n@media (min-height: 694px) {\n  .scrollableTable tbody {\n    height: calc(1.1*320px); }\n  .insideTable tbody {\n    height: calc(1.1*100px) !important; } }\n\n@media (min-height: 781px) {\n  .scrollableTable tbody {\n    height: calc(1.25*320px); }\n  .insideTable tbody {\n    height: calc(1.25*100px) !important; } }\n\n@media (min-height: 833px) {\n  .scrollableTable tbody {\n    height: calc(1.35*320px); }\n  .insideTable tbody {\n    height: calc(1.35*100px) !important; } }\n\n@media (min-height: 937px) {\n  .scrollableTable tbody {\n    height: calc(1.5*320px); }\n  .insideTable tbody {\n    height: calc(1.5*100px) !important; } }\n\n@media (min-height: 1250px) {\n  .scrollableTable tbody {\n    height: calc(2*320px); }\n  .insideTable tbody {\n    height: calc(2*100px) !important; } }\n\n@media (min-height: 1875px) {\n  .scrollableTable tbody {\n    height: calc(3*320px); }\n  .insideTable tbody {\n    height: calc(3*100px) !important; } }\n\n@media (min-height: 2500px) {\n  .scrollableTable tbody {\n    height: calc(3.9*320px); }\n  .insideTable tbody {\n    height: calc(3.9*100px) !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFuYWdlci9pbmNvbWVzL2xpcXVpZGF0ZWQvQzpcXFVzZXJzXFwzNDY5NVxcRGVza3RvcFxcRFJBRlRcXENBUkdPIE1VU0lDXFxGUk9OVEVORF9FU0NVRUxBL3NyY1xcYXBwXFxwYWdlc1xcbWFuYWdlclxcaW5jb21lc1xcbGlxdWlkYXRlZFxcbGlxdWlkYXRlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNLLGNBQWE7RUFDZCxnQ0FBZ0M7RUFDaEMsaUJBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyxtQkFBa0I7RUFDbEIsZ0NBQWdDLEVBQ25DOztBQUVEO0VBQ0kseUJBQ0osRUFBQzs7QUFHRDtFQUNJO0lBQ0ksd0JBQXNCLEVBQ3pCO0VBQ0Q7SUFDQSxtQ0FBa0MsRUFDckMsRUFBQTs7QUFHRDtFQUNFO0lBQ00seUJBQXVCLEVBQzFCO0VBQ0Q7SUFDQSxvQ0FBbUMsRUFDdEMsRUFBQTs7QUFHRDtFQUNFO0lBQ00seUJBQXVCLEVBQzFCO0VBQ0Q7SUFDQSxvQ0FBbUMsRUFDdEMsRUFBQTs7QUFHRDtFQUNFO0lBQ00sd0JBQXNCLEVBQ3pCO0VBQ0Q7SUFDQSxtQ0FBa0MsRUFDckMsRUFBQTs7QUFHRDtFQUNFO0lBQ00sc0JBQW9CLEVBQ3ZCO0VBQ0Q7SUFDQSxpQ0FBZ0MsRUFDbkMsRUFBQTs7QUFHRDtFQUNHO0lBQ0ssc0JBQW9CLEVBQ3ZCO0VBQ0Q7SUFDQSxpQ0FBZ0MsRUFDbkMsRUFBQTs7QUFHRDtFQUNFO0lBQ00sd0JBQXNCLEVBQ3pCO0VBQ0Q7SUFDQSxtQ0FBa0MsRUFDckMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hbmFnZXIvaW5jb21lcy9saXF1aWRhdGVkL2xpcXVpZGF0ZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xsYWJsZVRhYmxlIHRib2R5IHtcclxuICAgICBoZWlnaHQ6IDMyMHB4O1xyXG4gICAgLyogSnVzdCBmb3IgdGhlIGRlbW8gICAgICAgICAgKi9cclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAvKiBUcmlnZ2VyIHZlcnRpY2FsIHNjcm9sbCAgICAqL1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgLyogSGlkZSB0aGUgaG9yaXpvbnRhbCBzY3JvbGwgKi9cclxufVxyXG5cclxuLmluc2lkZVRhYmxlIHRib2R5e1xyXG4gICAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDY5NHB4KSB7XHJcbiAgICAuc2Nyb2xsYWJsZVRhYmxlIHRib2R5IHtcclxuICAgICAgICBoZWlnaHQ6Y2FsYygxLjEqMzIwcHgpXHJcbiAgICB9XHJcbiAgICAuaW5zaWRlVGFibGUgdGJvZHl7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMS4xKjEwMHB4KSAhaW1wb3J0YW50XHJcbn1cclxufVxyXG5cclxuQG1lZGlhIChtaW4taGVpZ2h0OiA3ODFweCkge1xyXG4gIC5zY3JvbGxhYmxlVGFibGUgdGJvZHkge1xyXG4gICAgICAgIGhlaWdodDpjYWxjKDEuMjUqMzIwcHgpXHJcbiAgICB9XHJcbiAgICAuaW5zaWRlVGFibGUgdGJvZHl7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMS4yNSoxMDBweCkgIWltcG9ydGFudFxyXG59XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLWhlaWdodDogODMzcHgpIHtcclxuICAuc2Nyb2xsYWJsZVRhYmxlIHRib2R5IHtcclxuICAgICAgICBoZWlnaHQ6Y2FsYygxLjM1KjMyMHB4KVxyXG4gICAgfVxyXG4gICAgLmluc2lkZVRhYmxlIHRib2R5e1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEuMzUqMTAwcHgpICFpbXBvcnRhbnRcclxufVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDkzN3B4KSB7XHJcbiAgLnNjcm9sbGFibGVUYWJsZSB0Ym9keSB7XHJcbiAgICAgICAgaGVpZ2h0OmNhbGMoMS41KjMyMHB4KVxyXG4gICAgfVxyXG4gICAgLmluc2lkZVRhYmxlIHRib2R5e1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEuNSoxMDBweCkgIWltcG9ydGFudFxyXG59XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLWhlaWdodDogMTI1MHB4KSB7XHJcbiAgLnNjcm9sbGFibGVUYWJsZSB0Ym9keSB7XHJcbiAgICAgICAgaGVpZ2h0OmNhbGMoMiozMjBweClcclxuICAgIH1cclxuICAgIC5pbnNpZGVUYWJsZSB0Ym9keXtcclxuICAgIGhlaWdodDogY2FsYygyKjEwMHB4KSAhaW1wb3J0YW50XHJcbn1cclxufVxyXG5cclxuQG1lZGlhIChtaW4taGVpZ2h0OiAxODc1cHgpIHtcclxuICAgLnNjcm9sbGFibGVUYWJsZSB0Ym9keSB7XHJcbiAgICAgICAgaGVpZ2h0OmNhbGMoMyozMjBweClcclxuICAgIH1cclxuICAgIC5pbnNpZGVUYWJsZSB0Ym9keXtcclxuICAgIGhlaWdodDogY2FsYygzKjEwMHB4KSAhaW1wb3J0YW50XHJcbn0gIFxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDI1MDBweCkge1xyXG4gIC5zY3JvbGxhYmxlVGFibGUgdGJvZHkge1xyXG4gICAgICAgIGhlaWdodDpjYWxjKDMuOSozMjBweClcclxuICAgIH1cclxuICAgIC5pbnNpZGVUYWJsZSB0Ym9keXtcclxuICAgIGhlaWdodDogY2FsYygzLjkqMTAwcHgpICFpbXBvcnRhbnRcclxufVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/manager/incomes/liquidated/liquidated.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/manager/incomes/liquidated/liquidated.component.ts ***!
  \**************************************************************************/
/*! exports provided: LiquidatedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiquidatedComponent", function() { return LiquidatedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_incomes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../providers/incomes.service */ "./src/app/providers/incomes.service.ts");
/* harmony import */ var _incomes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../incomes.component */ "./src/app/pages/manager/incomes/incomes.component.ts");




var LiquidatedComponent = /** @class */ (function () {
    function LiquidatedComponent(_incomeServices, incomesComponent) {
        this._incomeServices = _incomeServices;
        this.incomesComponent = incomesComponent;
    }
    LiquidatedComponent.prototype.ngOnInit = function () {
        this._incomeServices.from = 0;
        this._incomeServices.getIncomes().subscribe();
    };
    LiquidatedComponent.prototype.switch = function (amount) {
        this._incomeServices.from += amount;
        if (this._incomeServices.lastSearchCriteria === undefined) {
            this._incomeServices.getIncomes().subscribe();
        }
        else {
            this.incomesComponent.search();
        }
    };
    LiquidatedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-liquidated',
            template: __webpack_require__(/*! ./liquidated.component.html */ "./src/app/pages/manager/incomes/liquidated/liquidated.component.html"),
            styles: [__webpack_require__(/*! ./liquidated.component.scss */ "./src/app/pages/manager/incomes/liquidated/liquidated.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_incomes_service__WEBPACK_IMPORTED_MODULE_2__["IncomesService"],
            _incomes_component__WEBPACK_IMPORTED_MODULE_3__["IncomesComponent"]])
    ], LiquidatedComponent);
    return LiquidatedComponent;
}());



/***/ }),

/***/ "./src/app/pages/manager/incomes/not-liquidated/not-liquidated.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/pages/manager/incomes/not-liquidated/not-liquidated.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"_incomeServices.incomes.length > 0\" class=\"row m-2\" style=\"width:100%;height: 100%\">\r\n  <div class=\"col-12 p-0\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 d-flex justify-content-center\">\r\n        <h3  class=\"highlight\">Ingresos pendientes de liquidación</h3>\r\n      </div>\r\n      <div class=\"col-12\">\r\n        <table class=\"table scrollableTable mb-0\" style=\"background: #F5F1E3\">\r\n          <thead class=\"d-flex justify-content-around\">\r\n            <th style=\"width:10%\">Origen</th>\r\n            <th style=\"width:10%\">Cantidad liquidada</th>\r\n            <th style=\"width:10%\">Cantidad por liquidar</th>\r\n            <th style=\"width:10%\"></th>\r\n            <th style=\"width:60%\">Liquidaciones</th>\r\n          </thead>\r\n          <tbody class=\"mb-0\">\r\n            <tr *ngFor=\"let income of _incomeServices.incomes let i = index\"\r\n              class=\"d-flex justify-content-around\" style=\"width: 100%\">\r\n              <td style=\"width:10%\">{{income.debitor.name}}</td>\r\n              <td style=\"width:10%\">{{income.liquidatedAmount.toFixed(2)}}</td>\r\n              <td style=\"width:10%\">{{income.notLiquidatedAmount.toFixed(2)}}</td>\r\n              <td style=\"width:10%\">\r\n                <button (click)='postPayments(income._id)' class=\"btn btn-warning\">Liquidar</button>\r\n                <!--\r\n                  <button *ngIf=\"income.liquidatedAmount === 0\" class=\"btn btn-warning\"><i class=\"fas fa-edit\"></i></button>\r\n                -->\r\n              </td>\r\n              <td style=\"width:60%\">\r\n                <table class=' table scrollableTable insideTable' style='height:100px;width:100%'>\r\n                  <thead class=\"mr-3\" class=\"d-flex justify-content-around\">\r\n                    <th class=\"p-1\" style=\"width:20%\">Fecha</th>\r\n                    <th class=\"p-1\" style=\"width:20%\">Importe</th>\r\n                    <th class=\"p-1\" style=\"width:20%\">Artista</th>\r\n                    <th class=\"p-1\" style=\"width:40%\">ID</th>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let payment of _incomeServices.incomes[i].payments\"\r\n                      class=\"d-flex justify-content-around\" style=\"width:100%\">\r\n                      <td style=\"width:20%\">{{payment.date | date}}</td>\r\n                      <td style=\"width:20%\">{{payment.amount.toFixed(2)}}</td>\r\n                      <td *ngIf=\"payment.artist != null\" style=\"width:20%\">{{payment.artist?.indexcard['name']}}</td>\r\n                      <td style=\"width:40%\">{{payment._id}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n          <hr>\r\n          <div class=\"row m-3\" style='background:#F5F1E3;'>\r\n            <div class=\"col-2\"></div>\r\n            <div class=\"col-8 d-flex justify-content-around\">\r\n              <button (click)=\"switch(-5)\" *ngIf=\"_incomeServices.from > 0\" class=\"btn btn-warning\">PREV</button>\r\n              <button (click)=\"switch(5)\" *ngIf=\"_incomeServices.from + 5 <=  _incomeServices.count  \"\r\n                class=\"btn btn-warning\">NEXT</button>\r\n            </div>\r\n            <div class=\"col-2\"></div>\r\n          </div>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/manager/incomes/not-liquidated/not-liquidated.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/pages/manager/incomes/not-liquidated/not-liquidated.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scrollableTable tbody {\n  height: 320px;\n  /* Just for the demo          */\n  overflow-y: auto;\n  /* Trigger vertical scroll    */\n  overflow-x: hidden;\n  /* Hide the horizontal scroll */ }\n\n.insideTable tbody {\n  height: 100px !important; }\n\n@media (min-height: 694px) {\n  .scrollableTable tbody {\n    height: calc(1.1*320px); }\n  .insideTable tbody {\n    height: calc(1.1*100px) !important; } }\n\n@media (min-height: 781px) {\n  .scrollableTable tbody {\n    height: calc(1.25*320px); }\n  .insideTable tbody {\n    height: calc(1.25*100px) !important; } }\n\n@media (min-height: 833px) {\n  .scrollableTable tbody {\n    height: calc(1.35*320px); }\n  .insideTable tbody {\n    height: calc(1.35*100px) !important; } }\n\n@media (min-height: 937px) {\n  .scrollableTable tbody {\n    height: calc(1.5*320px); }\n  .insideTable tbody {\n    height: calc(1.5*100px) !important; } }\n\n@media (min-height: 1250px) {\n  .scrollableTable tbody {\n    height: calc(2*320px); }\n  .insideTable tbody {\n    height: calc(2*100px) !important; } }\n\n@media (min-height: 1875px) {\n  .scrollableTable tbody {\n    height: calc(3*320px); }\n  .insideTable tbody {\n    height: calc(3*100px) !important; } }\n\n@media (min-height: 2500px) {\n  .scrollableTable tbody {\n    height: calc(3.9*320px); }\n  .insideTable tbody {\n    height: calc(3.9*100px) !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFuYWdlci9pbmNvbWVzL25vdC1saXF1aWRhdGVkL0M6XFxVc2Vyc1xcMzQ2OTVcXERlc2t0b3BcXERSQUZUXFxDQVJHTyBNVVNJQ1xcRlJPTlRFTkRfRVNDVUVMQS9zcmNcXGFwcFxccGFnZXNcXG1hbmFnZXJcXGluY29tZXNcXG5vdC1saXF1aWRhdGVkXFxub3QtbGlxdWlkYXRlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNLLGNBQWE7RUFDZCxnQ0FBZ0M7RUFDaEMsaUJBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyxtQkFBa0I7RUFDbEIsZ0NBQWdDLEVBQ25DOztBQUVEO0VBQ0kseUJBQ0osRUFBQzs7QUFHRDtFQUNJO0lBQ0ksd0JBQXNCLEVBQ3pCO0VBQ0Q7SUFDQSxtQ0FBa0MsRUFDckMsRUFBQTs7QUFHRDtFQUNFO0lBQ00seUJBQXVCLEVBQzFCO0VBQ0Q7SUFDQSxvQ0FBbUMsRUFDdEMsRUFBQTs7QUFHRDtFQUNFO0lBQ00seUJBQXVCLEVBQzFCO0VBQ0Q7SUFDQSxvQ0FBbUMsRUFDdEMsRUFBQTs7QUFHRDtFQUNFO0lBQ00sd0JBQXNCLEVBQ3pCO0VBQ0Q7SUFDQSxtQ0FBa0MsRUFDckMsRUFBQTs7QUFHRDtFQUNFO0lBQ00sc0JBQW9CLEVBQ3ZCO0VBQ0Q7SUFDQSxpQ0FBZ0MsRUFDbkMsRUFBQTs7QUFHRDtFQUNHO0lBQ0ssc0JBQW9CLEVBQ3ZCO0VBQ0Q7SUFDQSxpQ0FBZ0MsRUFDbkMsRUFBQTs7QUFHRDtFQUNFO0lBQ00sd0JBQXNCLEVBQ3pCO0VBQ0Q7SUFDQSxtQ0FBa0MsRUFDckMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hbmFnZXIvaW5jb21lcy9ub3QtbGlxdWlkYXRlZC9ub3QtbGlxdWlkYXRlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGxhYmxlVGFibGUgdGJvZHkge1xyXG4gICAgIGhlaWdodDogMzIwcHg7XHJcbiAgICAvKiBKdXN0IGZvciB0aGUgZGVtbyAgICAgICAgICAqL1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIC8qIFRyaWdnZXIgdmVydGljYWwgc2Nyb2xsICAgICovXHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAvKiBIaWRlIHRoZSBob3Jpem9udGFsIHNjcm9sbCAqL1xyXG59XHJcblxyXG4uaW5zaWRlVGFibGUgdGJvZHl7XHJcbiAgICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnRcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWluLWhlaWdodDogNjk0cHgpIHtcclxuICAgIC5zY3JvbGxhYmxlVGFibGUgdGJvZHkge1xyXG4gICAgICAgIGhlaWdodDpjYWxjKDEuMSozMjBweClcclxuICAgIH1cclxuICAgIC5pbnNpZGVUYWJsZSB0Ym9keXtcclxuICAgIGhlaWdodDogY2FsYygxLjEqMTAwcHgpICFpbXBvcnRhbnRcclxufVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDc4MXB4KSB7XHJcbiAgLnNjcm9sbGFibGVUYWJsZSB0Ym9keSB7XHJcbiAgICAgICAgaGVpZ2h0OmNhbGMoMS4yNSozMjBweClcclxuICAgIH1cclxuICAgIC5pbnNpZGVUYWJsZSB0Ym9keXtcclxuICAgIGhlaWdodDogY2FsYygxLjI1KjEwMHB4KSAhaW1wb3J0YW50XHJcbn1cclxufVxyXG5cclxuQG1lZGlhIChtaW4taGVpZ2h0OiA4MzNweCkge1xyXG4gIC5zY3JvbGxhYmxlVGFibGUgdGJvZHkge1xyXG4gICAgICAgIGhlaWdodDpjYWxjKDEuMzUqMzIwcHgpXHJcbiAgICB9XHJcbiAgICAuaW5zaWRlVGFibGUgdGJvZHl7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMS4zNSoxMDBweCkgIWltcG9ydGFudFxyXG59XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLWhlaWdodDogOTM3cHgpIHtcclxuICAuc2Nyb2xsYWJsZVRhYmxlIHRib2R5IHtcclxuICAgICAgICBoZWlnaHQ6Y2FsYygxLjUqMzIwcHgpXHJcbiAgICB9XHJcbiAgICAuaW5zaWRlVGFibGUgdGJvZHl7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMS41KjEwMHB4KSAhaW1wb3J0YW50XHJcbn1cclxufVxyXG5cclxuQG1lZGlhIChtaW4taGVpZ2h0OiAxMjUwcHgpIHtcclxuICAuc2Nyb2xsYWJsZVRhYmxlIHRib2R5IHtcclxuICAgICAgICBoZWlnaHQ6Y2FsYygyKjMyMHB4KVxyXG4gICAgfVxyXG4gICAgLmluc2lkZVRhYmxlIHRib2R5e1xyXG4gICAgaGVpZ2h0OiBjYWxjKDIqMTAwcHgpICFpbXBvcnRhbnRcclxufVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDE4NzVweCkge1xyXG4gICAuc2Nyb2xsYWJsZVRhYmxlIHRib2R5IHtcclxuICAgICAgICBoZWlnaHQ6Y2FsYygzKjMyMHB4KVxyXG4gICAgfVxyXG4gICAgLmluc2lkZVRhYmxlIHRib2R5e1xyXG4gICAgaGVpZ2h0OiBjYWxjKDMqMTAwcHgpICFpbXBvcnRhbnRcclxufSAgXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLWhlaWdodDogMjUwMHB4KSB7XHJcbiAgLnNjcm9sbGFibGVUYWJsZSB0Ym9keSB7XHJcbiAgICAgICAgaGVpZ2h0OmNhbGMoMy45KjMyMHB4KVxyXG4gICAgfVxyXG4gICAgLmluc2lkZVRhYmxlIHRib2R5e1xyXG4gICAgaGVpZ2h0OiBjYWxjKDMuOSoxMDBweCkgIWltcG9ydGFudFxyXG59XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/manager/incomes/not-liquidated/not-liquidated.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/manager/incomes/not-liquidated/not-liquidated.component.ts ***!
  \**********************************************************************************/
/*! exports provided: NotLiquidatedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotLiquidatedComponent", function() { return NotLiquidatedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_incomes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../providers/incomes.service */ "./src/app/providers/incomes.service.ts");
/* harmony import */ var _modals_payment_modal_payment_modal_controller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../modals/payment-modal/payment-modal-controller.service */ "./src/app/modals/payment-modal/payment-modal-controller.service.ts");
/* harmony import */ var _incomes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../incomes.component */ "./src/app/pages/manager/incomes/incomes.component.ts");





var NotLiquidatedComponent = /** @class */ (function () {
    function NotLiquidatedComponent(_incomeServices, _paymentModalController, incomesComponent) {
        this._incomeServices = _incomeServices;
        this._paymentModalController = _paymentModalController;
        this.incomesComponent = incomesComponent;
    }
    NotLiquidatedComponent.prototype.ngOnInit = function () {
        this._incomeServices.from = 0;
        this._incomeServices.getIncomes().subscribe();
    };
    NotLiquidatedComponent.prototype.postPayments = function (incomeId) {
        this._paymentModalController.showModal(incomeId);
        this._paymentModalController.notification.emit();
    };
    NotLiquidatedComponent.prototype.switch = function (amount) {
        this._incomeServices.from += amount;
        if (this._incomeServices.lastSearchCriteria === undefined) {
            this._incomeServices.getIncomes().subscribe();
        }
        else {
            this.incomesComponent.search();
        }
    };
    NotLiquidatedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-liquidated',
            template: __webpack_require__(/*! ./not-liquidated.component.html */ "./src/app/pages/manager/incomes/not-liquidated/not-liquidated.component.html"),
            styles: [__webpack_require__(/*! ./not-liquidated.component.scss */ "./src/app/pages/manager/incomes/not-liquidated/not-liquidated.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_incomes_service__WEBPACK_IMPORTED_MODULE_2__["IncomesService"],
            _modals_payment_modal_payment_modal_controller_service__WEBPACK_IMPORTED_MODULE_3__["PaymentModalController"],
            _incomes_component__WEBPACK_IMPORTED_MODULE_4__["IncomesComponent"]])
    ], NotLiquidatedComponent);
    return NotLiquidatedComponent;
}());



/***/ }),

/***/ "./src/app/pages/manager/overview/albums/albums.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/manager/overview/albums/albums.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row m-1 mt-0 \" *ngIf=\"!albumId\">\r\n    <table class='table scrollableTable scrollableTableSearch'>\r\n        <thead>\r\n            <th>Título</th>\r\n            <th>Tracks</th>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let album of _managerServices.albums let i=index\">\r\n                <td><a (click)=\"overviewComponent.idNavigation(album._id,'album')\" style='color:blue'>{{album.title}}</a></td>\r\n                <td>\r\n                    <div class=\"scrollable\">\r\n                        <div *ngFor=\"let track of _managerServices.albums[i].tracks\">\r\n                            <a style=\"color:blue\" routerLinkActive=\"router-link-active\" (click)=\"overviewComponent.idNavigation(track._id,'track')\">\r\n                               {{track.title}}\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    <div class='d-flex justify-content-around m-2 '>\r\n        <button *ngIf=\"_managerServices.from && _managerServices.from > 0\" (click)='changeFrom(-6) ' class='btn btn-secondary '>Previous</button>\r\n        <button *ngIf=\"_managerServices.count > _managerServices.from + 6\" (click)='changeFrom(6) ' class='btn btn-secondary '>Following</button>\r\n    </div>\r\n</div>\r\n<div class=\"row m-1\"*ngIf=\"albumId\">\r\n  <div class=\"col-12\">\r\n    <div class=\"row\">\r\n      <div class=\"col-6\">\r\n        <button class=\"btn btn-danger\" (click)=\"deleteAlbum()\">X</button>\r\n        <button (click)='putAlbum()' class='btn btn-primary'><i class=\"fas fa-edit\"></i></button>\r\n      </div>\r\n      <div class=\"col-6 d-flex justify-content-end\">\r\n        FECHA DE CREACIÓN: {{_managerServices.album.date | date}}\r\n      </div>\r\n    <div class=\"col-12 d-flex justify-content-center\">\r\n        TRACKS\r\n    </div>\r\n    </div>\r\n  </div>\r\n    <div class=\"col-12\">\r\n        <table class='table scrollableTable'>\r\n            <thead>\r\n                <th>Título</th>\r\n                <th>Participantes</th>\r\n                <th>\r\n                    <div class=\"d-flex justify-content-around\">\r\n                        <button (click)='pushTrack()' class='btn btn-warning'>+PISTA</button>\r\n                    </div>\r\n                </th>\r\n            </thead>\r\n            <tbody *ngIf=\"albumId\">\r\n                <tr *ngFor=\"let track of _managerServices.album.tracks let i=index\">\r\n                    <td><a (click)=\"overviewComponent.idNavigation(track._id,'track')\" style='color:blue'>{{track.title}}</a>\r\n                    </td>\r\n                    <td>\r\n                        <div *ngIf=\"_managerServices.album.tracks[i].assignations.length > 0\" class='scrollable'>\r\n                            <div class='d-flex justify-content-between'\r\n                                *ngFor=\"let assignation of _managerServices.album.tracks[i].assignations\">\r\n                                <a (click)=\"overviewComponent.idNavigation(assignation.artist._id,'artist')\"\r\n                                    style='color:blue'>{{assignation.artist['indexcard'].name}} </a>\r\n                                <p> {{assignation.percent}}%</p>\r\n                            </div>\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                        <div class='d-flex justify-content-end'>\r\n                            <button (click)='putTrack(track._id)' class=\"btn btn-primary text-center\">\r\n                                <i class=\"fa fa-info fa-lg\"></i>\r\n                            </button>\r\n                            <button (click)='pullTrack(track._id)' class='btn btn-danger'>X</button>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/manager/overview/albums/albums.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/manager/overview/albums/albums.component.ts ***!
  \*******************************************************************/
/*! exports provided: AlbumsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumsComponent", function() { return AlbumsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../providers/manager.service */ "./src/app/providers/manager.service.ts");
/* harmony import */ var _modals_album_modal_album_modal_controller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../modals/album-modal/album-modal-controller.service */ "./src/app/modals/album-modal/album-modal-controller.service.ts");
/* harmony import */ var _modals_track_modal_track_modal_controller_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../modals/track-modal/track-modal-controller.service */ "./src/app/modals/track-modal/track-modal-controller.service.ts");
/* harmony import */ var src_app_providers_swal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/swal.service */ "./src/app/providers/swal.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _overview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../overview.component */ "./src/app/pages/manager/overview/overview.component.ts");








var AlbumsComponent = /** @class */ (function () {
    function AlbumsComponent(_managerServices, _albumModalController, overviewComponent, _trackModalController, _swalService) {
        this._managerServices = _managerServices;
        this._albumModalController = _albumModalController;
        this.overviewComponent = overviewComponent;
        this._trackModalController = _trackModalController;
        this._swalService = _swalService;
    }
    AlbumsComponent.prototype.putAlbum = function () {
        this._albumModalController.showModal(this.albumId);
        this._albumModalController.notification.emit();
    };
    AlbumsComponent.prototype.deleteAlbum = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: '¿Estás seguro/a?',
            text: "Los tracks del album que no tengan asignaciones a artistas se eliminarán",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar'
        }).then(function (result) {
            if (result.value) {
                _this._managerServices.deleteAlbum(_this.albumId).subscribe();
            }
        });
    };
    AlbumsComponent.prototype.pushTrack = function () {
        this._trackModalController.showModal();
        this._trackModalController.notification.emit();
    };
    AlbumsComponent.prototype.putTrack = function (trackId) {
        this._trackModalController.showModal(trackId);
        this._trackModalController.notification.emit();
    };
    AlbumsComponent.prototype.pullTrack = function (trackId) {
        var _this = this;
        this._swalService.confirmDelete().then(function (res) {
            if (res) {
                _this._managerServices.deleteTrack(trackId).subscribe();
            }
        });
    };
    AlbumsComponent.prototype.changeFrom = function (number) {
        if (this._managerServices.from + number >= 0) {
            this._managerServices.from += number;
        }
        this._managerServices.getOrSearch('albums');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AlbumsComponent.prototype, "input", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('albumId'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AlbumsComponent.prototype, "albumId", void 0);
    AlbumsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-albums',
            template: __webpack_require__(/*! ./albums.component.html */ "./src/app/pages/manager/overview/albums/albums.component.html"),
            styles: [__webpack_require__(/*! ../overview.component.scss */ "./src/app/pages/manager/overview/overview.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_manager_service__WEBPACK_IMPORTED_MODULE_2__["ManagerService"],
            _modals_album_modal_album_modal_controller_service__WEBPACK_IMPORTED_MODULE_3__["AlbumModalController"],
            _overview_component__WEBPACK_IMPORTED_MODULE_7__["OverviewComponent"],
            _modals_track_modal_track_modal_controller_service__WEBPACK_IMPORTED_MODULE_4__["TrackModalController"],
            src_app_providers_swal_service__WEBPACK_IMPORTED_MODULE_5__["SwalService"]])
    ], AlbumsComponent);
    return AlbumsComponent;
}());



/***/ }),

/***/ "./src/app/pages/manager/overview/artist/artist.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/manager/overview/artist/artist.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row m-1\" *ngIf=\"!artistId\" style=\"height:100%\">\r\n    <table class='table scrollableTable scrollableTableSearch'>\r\n        <thead>\r\n            <th>Nombre</th>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let artist of _managerServices.artists let i=index\">\r\n                <td> <a style=\"color:blue\" routerLinkActive=\"router-link-active\" (click)=\"overviewComponent.idNavigation(artist._id,'artist')\">{{artist.indexcard['name']}}</a> </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    <div class='d-flex justify-content-center mb-2 '>\r\n        <button *ngIf=\"_managerServices.from && _managerServices.from > 0\" (click)='changeFrom(-6) ' class='btn btn-secondary '>Previous</button>\r\n        <button *ngIf=\"_managerServices.count > _managerServices.from + 6\" (click)='changeFrom(6) ' class='btn btn-secondary '>Following</button>\r\n    </div>\r\n</div>\r\n<div class=\"row scrollableTable m-2\" *ngIf=\"artistId\">\r\n  <div class=\"col-12 d-flex justify-content-between\">\r\n    <div class=\"d-flex justify-content-start\">\r\n       <button (click)=\"deleteArtist()\" class=\"btn btn-danger\">X</button>\r\n       <button (click)=\"putArtist(_managerServices.artist.indexcard['_id'])\" class='btn btn-primary'><i class=\"fas fa-edit\"></i></button>\r\n    </div>\r\n    <div class='d-flex justify-content-end'>\r\n      <button (click)='showAssignations()' class=\"btn btn-warning\" >VER PARTICIPACIONES</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-12 d-flex justify-content-center\">\r\n    LIQUIDACIONES\r\n  </div>\r\n    <table class='table scrollableTable'>\r\n        <thead class=\"d-flex justify-content-around\">\r\n            <th style=\"width:33%\">Track</th>\r\n            <th style=\"width:33%\">Amount</th>\r\n            <th style=\"width:33%\">Date</th>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let payment of _managerServices.artist.payments\">\r\n                <td> <a (click)=\"_managerServices.idNavigation(payment.track['_id'],'artist')\">{{payment.track['title']}}</a> </td>\r\n                <td>\r\n                    <p>{{payment.amount}}</p>\r\n                </td>\r\n                <td>\r\n                    <p>{{payment.date | date}}</p>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    <div class='d-flex justify-content-center mb-2 '>\r\n        <button *ngIf=\"_managerServices.from && _managerServices.from > 0\" (click)='changeFrom(-6) ' class='btn btn-secondary '>Previous</button>\r\n        <button *ngIf=\"_managerServices.count > _managerServices.from + 6\" (click)='changeFrom(6) ' class='btn btn-secondary '>Following</button>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/manager/overview/artist/artist.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/manager/overview/artist/artist.component.ts ***!
  \*******************************************************************/
/*! exports provided: ArtistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistComponent", function() { return ArtistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../providers/manager.service */ "./src/app/providers/manager.service.ts");
/* harmony import */ var src_app_modals_index_card_modal_indexcard_modal_controller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modals/index-card-modal/indexcard-modal-controller.service */ "./src/app/modals/index-card-modal/indexcard-modal-controller.service.ts");
/* harmony import */ var _modals_track_modal_track_modal_controller_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../modals/track-modal/track-modal-controller.service */ "./src/app/modals/track-modal/track-modal-controller.service.ts");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var _modals_assignations_modal_assignations_modal_controller_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../modals/assignations-modal/assignations-modal-controller.service */ "./src/app/modals/assignations-modal/assignations-modal-controller.service.ts");
/* harmony import */ var _overview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../overview.component */ "./src/app/pages/manager/overview/overview.component.ts");








var ArtistComponent = /** @class */ (function () {
    function ArtistComponent(_managerServices, _indexcardModalController, _trackModalController, overviewComponent, _assignationsModalController) {
        this._managerServices = _managerServices;
        this._indexcardModalController = _indexcardModalController;
        this._trackModalController = _trackModalController;
        this.overviewComponent = overviewComponent;
        this._assignationsModalController = _assignationsModalController;
    }
    ArtistComponent.prototype.ngOnInit = function () {
        if (this.artistId) {
            this._managerServices.artist.payments = underscore__WEBPACK_IMPORTED_MODULE_5__["sortBy"](this._managerServices.artist.payments, function (payment) {
                return payment.track;
            });
        }
    };
    ArtistComponent.prototype.changeFrom = function (number) {
        if (this._managerServices.from + number >= 0) {
            this._managerServices.from += Number(number);
        }
        this._managerServices.getOrSearch('artists');
    };
    ArtistComponent.prototype.putArtist = function (id) {
        this._indexcardModalController.showModal(id);
        this._indexcardModalController.notification.emit('ARTIST');
    };
    ArtistComponent.prototype.deleteArtist = function () {
        this._managerServices.deleteArtist(this.artistId).subscribe();
    };
    ArtistComponent.prototype.showAssignations = function () {
        this._assignationsModalController.showModal(this.artistId);
        this._assignationsModalController.notification.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ArtistComponent.prototype, "input", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('artistId'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ArtistComponent.prototype, "artistId", void 0);
    ArtistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-artist',
            template: __webpack_require__(/*! ./artist.component.html */ "./src/app/pages/manager/overview/artist/artist.component.html"),
            styles: [__webpack_require__(/*! ../overview.component.scss */ "./src/app/pages/manager/overview/overview.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_manager_service__WEBPACK_IMPORTED_MODULE_2__["ManagerService"],
            src_app_modals_index_card_modal_indexcard_modal_controller_service__WEBPACK_IMPORTED_MODULE_3__["IndexcardModalController"],
            _modals_track_modal_track_modal_controller_service__WEBPACK_IMPORTED_MODULE_4__["TrackModalController"],
            _overview_component__WEBPACK_IMPORTED_MODULE_7__["OverviewComponent"],
            _modals_assignations_modal_assignations_modal_controller_service__WEBPACK_IMPORTED_MODULE_6__["AssignationsModalController"]])
    ], ArtistComponent);
    return ArtistComponent;
}());



/***/ }),

/***/ "./src/app/pages/manager/overview/overview.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/manager/overview/overview.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row pagesContainerFixed\" style='background:#DCD4D2'>\r\n  <div class=\"col-12\" style=\"height: 100%\">\r\n    <div class=\"row\"  style=\"height: 100%\">\r\n      <div class=\"col-12 mt-2\" style=\"height:15%\">\r\n        <div class=\"row\">\r\n          <div class=\"col-10 d-flex justify-content-around mb-2\">\r\n            <div class=\"form-check\">\r\n              <input class=\"form-check-input\" type=\"radio\" name=\"albums\" id=\"albums\" value=\"albums\"\r\n                [(ngModel)]=\"_managerServices.item\" checked>\r\n              <label class=\"form-check-label highlight\" for=\"albums\">\r\n                Buscar por <a class=\"highlight\" (click)=\"_managerServices.getOrSearch('albums')\" routerLinkActive=\"router-link-active\"\r\n                  style='color:blue'>ALBUMES</a>\r\n              </label>\r\n            </div>\r\n            <div class=\"form-check\">\r\n              <input class=\"form-check-input\" type=\"radio\" name=\"tracks\" id=\"tracks\" value=\"tracks\"\r\n                [(ngModel)]=\"_managerServices.item\">\r\n              <label class=\"form-check-label highlight\" for=\"tracks\">\r\n                Buscar por <a class=\"highlight\" (click)=\"_managerServices.getOrSearch('tracks')\" routerLinkActive=\"router-link-active\"\r\n                  style='color:blue'>PISTAS</a>\r\n              </label>\r\n            </div>\r\n            <div class=\"form-check\">\r\n              <input class=\"form-check-input highlight\" type=\"radio\" name=\"artists\" id=\"artists\" value=\"artists\"\r\n                [(ngModel)]=\"_managerServices.item\">\r\n              <label class=\"form-check-label\" for=\"artists\">\r\n                Buscar por <a class=\"highlight\" (click)=\"_managerServices.getOrSearch('artists')\" routerLinkActive=\"router-link-active\"\r\n                  style='color:blue'>ARTISTAS</a>\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-9 list-group\">\r\n            <input #input [placeholder]=\"placeHolderContent()\" type=\"text\" name=\"input\" id=\"\">\r\n          </div>\r\n          <div class=\"col-2 p-0 list-group\">\r\n            <div class='d-flex justify-content-center '>\r\n              <button (click)=\"_managerServices.getOrSearch(_managerServices.item,input.value)\"\r\n                class='btn btn-warning highlight'>BUSCAR</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-1 d-flex justify-content-end align-items-center animated shake\">\r\n             <i (click)=\"_demoServices.overviewPopup(true)\" class=\"fas fa-info fa-lg\" style='cursor:pointer;color:blue'></i>\r\n          </div>          \r\n          <div class=\"col-12 mb-1\">\r\n            <div class=\"row\">\r\n              <div class='col-3 d-flex justify-content-start '>\r\n                <div class=\"form-check\" style='width: 100%;'>\r\n                  <input [(ngModel)]=\"_managerServices.dataStored\" type=\"checkbox\" class=\"form-check-input\"\r\n                    id=\"exampleCheck1\">\r\n                  <label class=\"form-check-label highlight\" for=\"exampleCheck1\">Mantener búsqueda guardada</label>\r\n                </div>\r\n              </div>\r\n              <div class='col-9 d-flex justify-content-center'>\r\n                <button (click)='postAlbum()' class='btn btn-warning highlight'>NUEVO ALBUM</button>\r\n                <button (click)='postArtist()' class='btn btn-warning highlight'>NUEVO ARTISTA</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12\" style=\"height:85%\">\r\n        <div class=\"row overviewRow\" style=\"background-color:white\">\r\n          <div #searchGetColumn\r\n            *ngIf=\"_managerServices.albums.length != 0 || _managerServices.tracks.length != 0 || _managerServices.artists.length != 0\"\r\n            style='border:1px solid black; height:100%' class=\"col-12 p-0 d-flex flex-column\">\r\n            <div class='d-flex justify-content-end'>\r\n              <button\r\n                (click)=\"_managerServices.albums =[];_managerServices.tracks=[];_managerServices.artists=[];_managerServices.getOrSearch('#')\"\r\n                class='btn btn-danger '>X</button>\r\n            </div>\r\n            <app-albums *ngIf=\"_managerServices.albums.length != 0\"></app-albums>\r\n            <app-tracks *ngIf=\"_managerServices.tracks.length != 0\"></app-tracks>\r\n            <app-artist *ngIf=\"_managerServices.artists.length != 0\"></app-artist>\r\n          </div>\r\n          <div #navigateColumn *ngIf=\"_managerServices.album || _managerServices.track || _managerServices.artist \"\r\n            class='m-0 p-0 col-12' id=\"accordion2\" style='border:1px solid black;height:100%'>\r\n            <div *ngIf=\"_managerServices.album\" class=\"card m-0 p-0\">\r\n              <div class=\"card-header\" id=\"headingTwo\" style=\"background:#506fa1\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-10 d-flex justify-content-center\">\r\n                    <h5 class=\"mb-0\">\r\n                      <button class=\"btn btn-warning\" data-toggle=\"collapse\" data-target=\"#albumCollapse\" aria-expanded=\"true\"\r\n                        aria-controls=\"albumCollapse\">\r\n                        {{_managerServices.album.title}}\r\n                      </button>\r\n                    </h5>\r\n                  </div>\r\n                  <div class=\"col-2 d-flex justify-content-end\">\r\n                    <button (click)='_managerServices.album = undefined; _managerServices.idNavigation()'\r\n                      class='btn btn-danger '>X</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div id=\"albumCollapse\" #albumCollapseControl class=\"collapse\" aria-labelledby=\"headingTwo\"\r\n                data-parent=\"#accordion2\">\r\n                <app-albums [albumId]='_managerServices.album._id'></app-albums>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"_managerServices.track\" class=\"card\">\r\n              <div class=\"card-header\" id=\"headingThree\" style=\"background-color:#499969\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-10 d-flex justify-content-center\">\r\n                    <h5 class=\"mb-0\">\r\n                      <button class=\"btn btn-warning\" data-toggle=\"collapse\" data-target=\"#trackCollapse\" aria-expanded=\"true\"\r\n                        aria-controls=\"trackCollapse\">\r\n                        {{_managerServices.track.title}}\r\n                      </button>\r\n                    </h5>\r\n                  </div>\r\n                  <div class=\"col-2 d-flex justify-content-end\">\r\n                    <button (click)='_managerServices.track = undefined; _managerServices.idNavigation()'\r\n                      class='btn btn-danger '>X</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div id=\"trackCollapse\" #trackCollapseControl class=\"collapse\" aria-labelledby=\"headingThree\"\r\n                data-parent=\"#accordion2\">\r\n                <app-tracks [trackId]='_managerServices.track._id'></app-tracks>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"_managerServices.artist\" class=\"card\">\r\n              <div class=\"card-header\" id=\"headingFour\" style=\"background-color:#b06e45\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-10 d-flex justify-content-center\">\r\n                    <h5 class=\"mb-0\">\r\n                      <button class=\"btn btn-warning\" data-toggle=\"collapse\" data-target=\"#artistCollapse\"\r\n                        aria-expanded=\"true\" aria-controls=\"artistCollapse\">\r\n                        {{_managerServices.artist.indexcard['name']}}\r\n                      </button>\r\n                    </h5>\r\n                  </div>\r\n                  <div class=\"col-2 d-flex justify-content-end\">\r\n                    <button (click)='_managerServices.artist = undefined; _managerServices.idNavigation()'\r\n                      class='btn btn-danger '>X</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div id=\"artistCollapse\" #artistCollapseControl class=\"collapse\" aria-labelledby=\"headingFour\"\r\n                data-parent=\"#accordion2\">\r\n                <app-artist [artistId]='_managerServices.artist._id'></app-artist>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/manager/overview/overview.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/manager/overview/overview.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overviewRow {\n  height: 490px; }\n\n.scrollableTable tbody {\n  height: 185px; }\n\n.scrollableTableSearch tbody {\n  height: 370px !important; }\n\n.scrollable {\n  height: 80px; }\n\n@media (min-height: 694px) {\n  .overviewRow {\n    height: calc(1.1*490px); }\n  .scrollable {\n    height: calc(1.1*80px); }\n  .scrollableTable tbody {\n    height: calc(1.1*185px); }\n  .scrollableTableSearch tbody {\n    height: calc(1.1*370px) !important; } }\n\n@media (min-height: 781px) {\n  .overviewRow {\n    height: calc(1.25*490px); }\n  .scrollable {\n    height: calc(1.27*80px); }\n  .scrollableTable tbody {\n    height: calc(1.27*185px); }\n  .scrollableTableSearch tbody {\n    height: calc(1.25*370px) !important; } }\n\n@media (min-height: 833px) {\n  .overviewRow {\n    height: calc(1.35*490px); }\n  .scrollable {\n    height: calc(1.40*80px); }\n  .scrollableTable tbody {\n    height: calc(1.40*185px); }\n  .scrollableTableSearch tbody {\n    height: calc(1.35*370px) !important; } }\n\n@media (min-height: 937px) {\n  .overviewRow {\n    height: calc(1.5*490px); }\n  .scrollable {\n    height: calc(1.55*80px); }\n  .scrollableTable tbody {\n    height: calc(1.55*185px); }\n  .scrollableTableSearch tbody {\n    height: calc(1.5*370px) !important; } }\n\n@media (min-height: 1250px) {\n  .overviewRow {\n    height: calc(2*490px); }\n  .scrollable {\n    height: calc(2.1*80px); }\n  .scrollableTable tbody {\n    height: calc(2.1*185px); }\n  .scrollableTableSearch tbody {\n    height: calc(2*370px) !important; } }\n\n@media (min-height: 1875px) {\n  .overviewRow {\n    height: calc(3*490px); }\n  .scrollable {\n    height: calc(3.25*80px); }\n  .scrollableTable tbody {\n    height: calc(3.25*185px); }\n  .scrollableTableSearch tbody {\n    height: calc(3*370px) !important; } }\n\n@media (min-height: 2500px) {\n  .overviewRow {\n    height: calc(3.9*490px); }\n  .scrollable {\n    height: calc(4.1*80px); }\n  .scrollableTable tbody {\n    height: calc(4.1*185px); }\n  .scrollableTableSearch tbody {\n    height: calc(3.9*370px) !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFuYWdlci9vdmVydmlldy9DOlxcVXNlcnNcXDM0Njk1XFxEZXNrdG9wXFxEUkFGVFxcQ0FSR08gTVVTSUNcXEZST05URU5EX0VTQ1VFTEEvc3JjXFxhcHBcXHBhZ2VzXFxtYW5hZ2VyXFxvdmVydmlld1xcb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUVKLEVBQUM7O0FBQ0Q7RUFDSSxjQUNKLEVBQUM7O0FBQ0Q7RUFDSSx5QkFBc0IsRUFDekI7O0FBQ0Q7RUFDRyxhQUNILEVBQUM7O0FBR0Q7RUFDRTtJQUNFLHdCQUFzQixFQUN6QjtFQUNEO0lBQ0ksdUJBQXFCLEVBQ3hCO0VBQ0Q7SUFDSSx3QkFBc0IsRUFDekI7RUFDRDtJQUNJLG1DQUFnQyxFQUNuQyxFQUFBOztBQUdEO0VBQ0M7SUFDRyx5QkFBdUIsRUFDMUI7RUFDRDtJQUNJLHdCQUFzQixFQUN6QjtFQUNEO0lBQ0kseUJBQXVCLEVBQzFCO0VBQ0Q7SUFDSSxvQ0FBaUMsRUFDcEMsRUFBQTs7QUFHRDtFQUNDO0lBQ0cseUJBQXVCLEVBQzFCO0VBQ0Q7SUFDSSx3QkFBc0IsRUFDekI7RUFDRDtJQUNJLHlCQUF1QixFQUMxQjtFQUNEO0lBQ0ksb0NBQWlDLEVBQ3BDLEVBQUE7O0FBR0Q7RUFDQztJQUNHLHdCQUFzQixFQUN6QjtFQUNBO0lBQ0csd0JBQXNCLEVBQ3pCO0VBQ0Q7SUFDSSx5QkFBdUIsRUFDMUI7RUFDRDtJQUNJLG1DQUFnQyxFQUNuQyxFQUFBOztBQUdEO0VBQ0M7SUFDRyxzQkFBb0IsRUFDdkI7RUFDRDtJQUNJLHVCQUFxQixFQUN4QjtFQUNEO0lBQ0ksd0JBQXNCLEVBQ3pCO0VBQ0Q7SUFDSSxpQ0FBOEIsRUFDakMsRUFBQTs7QUFHRDtFQUNFO0lBQ0Usc0JBQW9CLEVBQ3ZCO0VBQ0M7SUFDRSx3QkFBc0IsRUFDekI7RUFDRDtJQUNJLHlCQUF1QixFQUMxQjtFQUNEO0lBQ0ksaUNBQThCLEVBQ2pDLEVBQUE7O0FBR0Q7RUFDQztJQUNHLHdCQUFzQixFQUN6QjtFQUNBO0lBQ0csdUJBQXFCLEVBQ3hCO0VBQ0Q7SUFDSSx3QkFBc0IsRUFDekI7RUFDRDtJQUNJLG1DQUFnQyxFQUNuQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFuYWdlci9vdmVydmlldy9vdmVydmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdmVydmlld1Jvd3tcclxuICAgIGhlaWdodDo0OTBweFxyXG5cclxufVxyXG4uc2Nyb2xsYWJsZVRhYmxlIHRib2R5e1xyXG4gICAgaGVpZ2h0OjE4NXB4XHJcbn1cclxuLnNjcm9sbGFibGVUYWJsZVNlYXJjaCB0Ym9keXtcclxuICAgIGhlaWdodDozNzBweCFpbXBvcnRhbnRcclxufVxyXG4uc2Nyb2xsYWJsZXtcclxuICAgaGVpZ2h0OjgwcHhcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWluLWhlaWdodDogNjk0cHgpIHtcclxuICAub3ZlcnZpZXdSb3d7XHJcbiAgICBoZWlnaHQ6Y2FsYygxLjEqNDkwcHgpXHJcbn1cclxuLnNjcm9sbGFibGV7XHJcbiAgICBoZWlnaHQ6Y2FsYygxLjEqODBweClcclxufVxyXG4uc2Nyb2xsYWJsZVRhYmxlIHRib2R5e1xyXG4gICAgaGVpZ2h0OmNhbGMoMS4xKjE4NXB4KVxyXG59XHJcbi5zY3JvbGxhYmxlVGFibGVTZWFyY2ggdGJvZHl7XHJcbiAgICBoZWlnaHQ6Y2FsYygxLjEqMzcwcHgpIWltcG9ydGFudFxyXG59XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLWhlaWdodDogNzgxcHgpIHtcclxuIC5vdmVydmlld1Jvd3tcclxuICAgIGhlaWdodDpjYWxjKDEuMjUqNDkwcHgpXHJcbn1cclxuLnNjcm9sbGFibGV7XHJcbiAgICBoZWlnaHQ6Y2FsYygxLjI3KjgwcHgpXHJcbn1cclxuLnNjcm9sbGFibGVUYWJsZSB0Ym9keXtcclxuICAgIGhlaWdodDpjYWxjKDEuMjcqMTg1cHgpXHJcbn1cclxuLnNjcm9sbGFibGVUYWJsZVNlYXJjaCB0Ym9keXtcclxuICAgIGhlaWdodDpjYWxjKDEuMjUqMzcwcHgpIWltcG9ydGFudFxyXG59XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLWhlaWdodDogODMzcHgpIHtcclxuIC5vdmVydmlld1Jvd3tcclxuICAgIGhlaWdodDpjYWxjKDEuMzUqNDkwcHgpXHJcbn1cclxuLnNjcm9sbGFibGV7XHJcbiAgICBoZWlnaHQ6Y2FsYygxLjQwKjgwcHgpXHJcbn1cclxuLnNjcm9sbGFibGVUYWJsZSB0Ym9keXtcclxuICAgIGhlaWdodDpjYWxjKDEuNDAqMTg1cHgpXHJcbn1cclxuLnNjcm9sbGFibGVUYWJsZVNlYXJjaCB0Ym9keXtcclxuICAgIGhlaWdodDpjYWxjKDEuMzUqMzcwcHgpIWltcG9ydGFudFxyXG59XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLWhlaWdodDogOTM3cHgpIHtcclxuIC5vdmVydmlld1Jvd3tcclxuICAgIGhlaWdodDpjYWxjKDEuNSo0OTBweClcclxufVxyXG4gLnNjcm9sbGFibGV7XHJcbiAgICBoZWlnaHQ6Y2FsYygxLjU1KjgwcHgpXHJcbn1cclxuLnNjcm9sbGFibGVUYWJsZSB0Ym9keXtcclxuICAgIGhlaWdodDpjYWxjKDEuNTUqMTg1cHgpXHJcbn1cclxuLnNjcm9sbGFibGVUYWJsZVNlYXJjaCB0Ym9keXtcclxuICAgIGhlaWdodDpjYWxjKDEuNSozNzBweCkhaW1wb3J0YW50XHJcbn1cclxufVxyXG5cclxuQG1lZGlhIChtaW4taGVpZ2h0OiAxMjUwcHgpIHtcclxuIC5vdmVydmlld1Jvd3tcclxuICAgIGhlaWdodDpjYWxjKDIqNDkwcHgpXHJcbn1cclxuLnNjcm9sbGFibGV7XHJcbiAgICBoZWlnaHQ6Y2FsYygyLjEqODBweClcclxufVxyXG4uc2Nyb2xsYWJsZVRhYmxlIHRib2R5e1xyXG4gICAgaGVpZ2h0OmNhbGMoMi4xKjE4NXB4KVxyXG59XHJcbi5zY3JvbGxhYmxlVGFibGVTZWFyY2ggdGJvZHl7XHJcbiAgICBoZWlnaHQ6Y2FsYygyKjM3MHB4KSFpbXBvcnRhbnRcclxufVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDE4NzVweCkge1xyXG4gIC5vdmVydmlld1Jvd3tcclxuICAgIGhlaWdodDpjYWxjKDMqNDkwcHgpXHJcbn1cclxuICAuc2Nyb2xsYWJsZXtcclxuICAgIGhlaWdodDpjYWxjKDMuMjUqODBweClcclxufVxyXG4uc2Nyb2xsYWJsZVRhYmxlIHRib2R5e1xyXG4gICAgaGVpZ2h0OmNhbGMoMy4yNSoxODVweClcclxufVxyXG4uc2Nyb2xsYWJsZVRhYmxlU2VhcmNoIHRib2R5e1xyXG4gICAgaGVpZ2h0OmNhbGMoMyozNzBweCkhaW1wb3J0YW50XHJcbn0gICAgXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLWhlaWdodDogMjUwMHB4KSB7XHJcbiAub3ZlcnZpZXdSb3d7XHJcbiAgICBoZWlnaHQ6Y2FsYygzLjkqNDkwcHgpXHJcbn1cclxuIC5zY3JvbGxhYmxle1xyXG4gICAgaGVpZ2h0OmNhbGMoNC4xKjgwcHgpXHJcbn1cclxuLnNjcm9sbGFibGVUYWJsZSB0Ym9keXtcclxuICAgIGhlaWdodDpjYWxjKDQuMSoxODVweClcclxufVxyXG4uc2Nyb2xsYWJsZVRhYmxlU2VhcmNoIHRib2R5e1xyXG4gICAgaGVpZ2h0OmNhbGMoMy45KjM3MHB4KSFpbXBvcnRhbnRcclxufSBcclxufVxyXG5cclxuICJdfQ== */"

/***/ }),

/***/ "./src/app/pages/manager/overview/overview.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/manager/overview/overview.component.ts ***!
  \**************************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/manager.service */ "./src/app/providers/manager.service.ts");
/* harmony import */ var src_app_modals_album_modal_album_modal_controller_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modals/album-modal/album-modal-controller.service */ "./src/app/modals/album-modal/album-modal-controller.service.ts");
/* harmony import */ var _modals_index_card_modal_indexcard_modal_controller_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../modals/index-card-modal/indexcard-modal-controller.service */ "./src/app/modals/index-card-modal/indexcard-modal-controller.service.ts");
/* harmony import */ var _providers_demo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/demo.service */ "./src/app/providers/demo.service.ts");







var OverviewComponent = /** @class */ (function () {
    function OverviewComponent(_ar, _managerServices, _albumsModalController, _indexcardModalController, renderer, _demoServices) {
        this._ar = _ar;
        this._managerServices = _managerServices;
        this._albumsModalController = _albumsModalController;
        this._indexcardModalController = _indexcardModalController;
        this.renderer = renderer;
        this._demoServices = _demoServices;
    }
    OverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._ar.params.subscribe(function (params) {
            var input = params['input'];
            if (input === '#') {
                input = '';
            }
            var item = params['item'];
            if (item === '#') {
                item = '';
            }
            _this._managerServices.item = item;
            var from = Number(params['from']);
            _this._managerServices.from = from;
            if (input) {
                _this._managerServices.searchItems(input, item, from).subscribe();
            }
            else {
                if (item) {
                    _this._managerServices.getItems(from).subscribe();
                }
            }
            var albumId = params['albumId'];
            var trackId = params['trackId'];
            var artistId = params['artistId'];
            if (albumId != '#') {
                if (_this._managerServices.album) {
                    if (_this._managerServices.album._id != albumId) {
                        _this._managerServices.getItemById(albumId, 'album').subscribe();
                    }
                }
                else {
                    _this._managerServices.getItemById(albumId, 'album').subscribe();
                }
            }
            if (trackId != '#') {
                if (_this._managerServices.track) {
                    if (_this._managerServices.track._id != trackId) {
                        _this._managerServices.getItemById(trackId, 'track').subscribe();
                    }
                }
                else {
                    _this._managerServices.getItemById(trackId, 'track').subscribe();
                }
            }
            if (artistId != '#') {
                if (_this._managerServices.artist) {
                    if (_this._managerServices.artist._id != artistId) {
                        _this._managerServices.getItemById(artistId, 'artist').subscribe();
                    }
                }
                else {
                    _this._managerServices.getItemById(artistId, 'artist').subscribe();
                }
            }
        });
        this._albumsModalController.notification.subscribe(function (id) {
            if (_this._albumsModalController.hidden) {
                if (!_this._managerServices.album) {
                    _this.idNavigation(id, 'album');
                }
            }
        });
        this._indexcardModalController.notification.subscribe(function (id) {
            if (_this._indexcardModalController.hidden) {
                if (!_this._managerServices.artist) {
                    _this.idNavigation(id, 'artist');
                }
            }
        });
        this._demoServices.overviewPopup();
    };
    OverviewComponent.prototype.ngAfterViewChecked = function () {
        this.columnsSize();
    };
    OverviewComponent.prototype.idNavigation = function (id, collection) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._managerServices.idNavigation(id, collection)];
                    case 1:
                        _a.sent();
                        setTimeout(function () {
                            _this.collapseAcordions(collection);
                        }, 200);
                        return [2 /*return*/];
                }
            });
        });
    };
    OverviewComponent.prototype.columnsSize = function () {
        if (this.searchGetColumn && !this.navigateColumn) {
            this.renderer.addClass(this.searchGetColumn.nativeElement, 'col-12');
        }
        else if (this.navigateColumn && !this.searchGetColumn) {
            this.renderer.addClass(this.navigateColumn.nativeElement, 'col-12');
        }
        else {
            if (this.searchGetColumn && this.navigateColumn) {
                this.renderer.removeClass(this.searchGetColumn.nativeElement, 'col-12');
                this.renderer.removeClass(this.navigateColumn.nativeElement, 'col-12');
                this.renderer.addClass(this.searchGetColumn.nativeElement, 'col-3');
                this.renderer.addClass(this.navigateColumn.nativeElement, 'col-9');
            }
        }
    };
    OverviewComponent.prototype.placeHolderContent = function () {
        var message;
        switch (this._managerServices.item) {
            case 'artists':
                message = 'Buscar por artistas';
                break;
            case 'albums':
                message = 'Buscar por albumes';
                break;
            case 'tracks':
                message = 'Buscar por pistas';
                break;
            default: message = 'Selecciona un criterio de búsqueda';
        }
        return message;
    };
    OverviewComponent.prototype.collapseAcordions = function (type) {
        switch (type) {
            case 'artist':
                this.renderer.addClass(this.artistCollapseControl.nativeElement, 'show');
                if (this.albumCollapseControl) {
                    this.renderer.removeClass(this.albumCollapseControl.nativeElement, 'show');
                    this.renderer.addClass(this.albumCollapseControl.nativeElement, 'hide');
                }
                if (this.trackCollapseControl) {
                    this.renderer.removeClass(this.trackCollapseControl.nativeElement, 'show');
                    this.renderer.addClass(this.trackCollapseControl.nativeElement, 'hide');
                }
                break;
            case 'album':
                this.renderer.addClass(this.albumCollapseControl.nativeElement, 'show');
                if (this.artistCollapseControl) {
                    this.renderer.removeClass(this.artistCollapseControl.nativeElement, 'show');
                    this.renderer.addClass(this.artistCollapseControl.nativeElement, 'hide');
                }
                if (this.trackCollapseControl) {
                    this.renderer.removeClass(this.trackCollapseControl.nativeElement, 'show');
                    this.renderer.addClass(this.trackCollapseControl.nativeElement, 'hide');
                }
                break;
            case 'track':
                this.renderer.addClass(this.trackCollapseControl.nativeElement, 'show');
                if (this.albumCollapseControl) {
                    this.renderer.removeClass(this.albumCollapseControl.nativeElement, 'show');
                    this.renderer.addClass(this.albumCollapseControl.nativeElement, 'hide');
                }
                if (this.artistCollapseControl) {
                    this.renderer.removeClass(this.artistCollapseControl.nativeElement, 'show');
                    this.renderer.addClass(this.artistCollapseControl.nativeElement, 'hide');
                }
                break;
        }
    };
    OverviewComponent.prototype.postAlbum = function () {
        this._albumsModalController.showModal();
        this._albumsModalController.notification.emit();
    };
    OverviewComponent.prototype.postArtist = function () {
        this._indexcardModalController.showModal();
        this._indexcardModalController.notification.emit('ARTIST');
    };
    OverviewComponent.prototype.ngOnDestroy = function () {
        if (!this._managerServices.dataStored) {
            this._managerServices.album = undefined;
            this._managerServices.track = undefined;
            this._managerServices.artist = undefined;
            this._managerServices.albums = [];
            this._managerServices.tracks = [];
            this._managerServices.artists = [];
            this._managerServices.input = undefined;
            this._managerServices.from = 0;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchGetColumn'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], OverviewComponent.prototype, "searchGetColumn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('navigateColumn'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], OverviewComponent.prototype, "navigateColumn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('albumCollapseControl'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], OverviewComponent.prototype, "albumCollapseControl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trackCollapseControl'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], OverviewComponent.prototype, "trackCollapseControl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('artistCollapseControl'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], OverviewComponent.prototype, "artistCollapseControl", void 0);
    OverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-overview',
            template: __webpack_require__(/*! ./overview.component.html */ "./src/app/pages/manager/overview/overview.component.html"),
            styles: [__webpack_require__(/*! ./overview.component.scss */ "./src/app/pages/manager/overview/overview.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _providers_manager_service__WEBPACK_IMPORTED_MODULE_3__["ManagerService"],
            src_app_modals_album_modal_album_modal_controller_service__WEBPACK_IMPORTED_MODULE_4__["AlbumModalController"],
            _modals_index_card_modal_indexcard_modal_controller_service__WEBPACK_IMPORTED_MODULE_5__["IndexcardModalController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _providers_demo_service__WEBPACK_IMPORTED_MODULE_6__["DemoService"]])
    ], OverviewComponent);
    return OverviewComponent;
}());



/***/ }),

/***/ "./src/app/pages/manager/overview/tracks/tracks.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/manager/overview/tracks/tracks.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row m-1\" *ngIf=\"!trackId\" style=\"height:100%\">\r\n    <div class='col-12'>\r\n        <table class='table scrollableTable scrollableTableSearch'>\r\n            <thead>\r\n                <th>Título</th>\r\n                <th>Album</th>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let track of _managerServices.tracks let i=index\">\r\n                    <td><a (click)=\"overviewComponent.idNavigation(track._id,'track')\" routerLinkActive=\"router-link-active\" style=\"color:blue\">{{track.title}}</a></td>\r\n                    <td *ngIf=\"track.album\">\r\n                        <a (click)=\"overviewComponent.idNavigation(track.album['_id'],'album')\" routerLinkActive=\"router-link-active\" style=\"color:blue\">{{track.album['title']}}</a>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <div class='d-flex justify-content-around mb-2 col-12'>\r\n        <button *ngIf=\"_managerServices.from && _managerServices.from > 0\" (click)='changeFrom(-6) ' class='btn btn-secondary '>Previous</button>\r\n        <button *ngIf=\"_managerServices.count > _managerServices.from + 6\" (click)='changeFrom(6) ' class='btn btn-secondary '>Following</button>\r\n    </div>\r\n</div>\r\n<div class=\"row scrollableTable ml-1 mr-1\" *ngIf=\"trackId\" style='border-top: 1px black'>\r\n    <div class=' col-12 d-flex justify-content-around '>\r\n       <div>\r\n        <button (click)='pushAssignation(trackId)' class='btn btn-primary'><i class=\"fas fa-edit\"></i></button>\r\n        <button (click)=\"deleteTrack()\" class=\"btn btn-danger\" >X</button>\r\n       </div>\r\n        <div>TITULO: {{_managerServices.track.title}}</div>\r\n        <div *ngIf=\"_managerServices.track.album\">\r\n            ALBUM:<a (click)=\"overviewComponent.idNavigation(_managerServices.track.album['_id'],'album')\" style='cursor:pointer;color:blue'> {{_managerServices.track.album['title']}}</a>\r\n          </div>\r\n          <div *ngIf=\"!_managerServices.track.album\">\r\n             <strong>EL ALBUM DEL TRACK FUE ELIMINADO</strong>\r\n          </div>\r\n    </div>\r\n    <div class=\"col-12 d-flex justify-content-center\">\r\n        <p>ARTISTAS PARTICIPANTES</p>\r\n    </div>\r\n    <table class='table scrollableTable'>\r\n        <thead>\r\n            <th>Nombre</th>\r\n            <th>CARGO {{_managerServices.track.percent}}%</th>\r\n        </thead>\r\n        <tbody *ngIf=\"trackId\">\r\n            <tr *ngFor=\"let assignation of _managerServices.track.assignations let i=index\">\r\n                <td>\r\n                    <a (click)=\"overviewComponent.idNavigation(assignation.artist['_id'],'artist')\" style=\"color:blue\" routerLinkActive=\"router-link-active\">{{assignation.artist['indexcard'].name}}</a>\r\n                </td>\r\n                <td>\r\n                    <p>\r\n                        {{assignation.percent}}%\r\n                    </p>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    <div class='d-flex justify-content-center mb-2 '>\r\n        <button *ngIf=\"_managerServices.from && _managerServices.from > 0\" (click)='changeFrom(-6) ' class='btn btn-secondary '>Previous</button>\r\n        <button *ngIf=\"_managerServices.count > _managerServices.from + 6\" (click)='changeFrom(6) ' class='btn btn-secondary '>Following</button>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/manager/overview/tracks/tracks.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/manager/overview/tracks/tracks.component.ts ***!
  \*******************************************************************/
/*! exports provided: TracksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TracksComponent", function() { return TracksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../providers/manager.service */ "./src/app/providers/manager.service.ts");
/* harmony import */ var _modals_track_modal_track_modal_controller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../modals/track-modal/track-modal-controller.service */ "./src/app/modals/track-modal/track-modal-controller.service.ts");
/* harmony import */ var src_app_modals_index_card_modal_indexcard_modal_controller_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modals/index-card-modal/indexcard-modal-controller.service */ "./src/app/modals/index-card-modal/indexcard-modal-controller.service.ts");
/* harmony import */ var src_app_providers_swal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/swal.service */ "./src/app/providers/swal.service.ts");
/* harmony import */ var _overview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../overview.component */ "./src/app/pages/manager/overview/overview.component.ts");







var TracksComponent = /** @class */ (function () {
    function TracksComponent(_managerServices, _trackModalController, overviewComponent, _indexcardModalController, _swalServices) {
        this._managerServices = _managerServices;
        this._trackModalController = _trackModalController;
        this.overviewComponent = overviewComponent;
        this._indexcardModalController = _indexcardModalController;
        this._swalServices = _swalServices;
    }
    TracksComponent.prototype.ngOnInit = function () {
    };
    TracksComponent.prototype.changeFrom = function (number) {
        if (this._managerServices.from + number >= 0) {
            this._managerServices.from += number;
        }
        this._managerServices.getOrSearch('tracks');
    };
    TracksComponent.prototype.putTrack = function (trackId) {
        this._trackModalController.showModal(trackId);
        this._trackModalController.notification.emit();
    };
    TracksComponent.prototype.deleteTrack = function () {
        var _this = this;
        this._swalServices.confirmDelete().then(function (res) {
            if (res) {
                _this._managerServices.deleteTrack(_this.trackId).subscribe();
            }
        });
    };
    TracksComponent.prototype.pushAssignation = function (trackId) {
        this._trackModalController.showModal(trackId);
        this._trackModalController.notification.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('trackId'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TracksComponent.prototype, "trackId", void 0);
    TracksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tracks',
            template: __webpack_require__(/*! ./tracks.component.html */ "./src/app/pages/manager/overview/tracks/tracks.component.html"),
            styles: [__webpack_require__(/*! ../overview.component.scss */ "./src/app/pages/manager/overview/overview.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_manager_service__WEBPACK_IMPORTED_MODULE_2__["ManagerService"],
            _modals_track_modal_track_modal_controller_service__WEBPACK_IMPORTED_MODULE_3__["TrackModalController"],
            _overview_component__WEBPACK_IMPORTED_MODULE_6__["OverviewComponent"],
            src_app_modals_index_card_modal_indexcard_modal_controller_service__WEBPACK_IMPORTED_MODULE_4__["IndexcardModalController"],
            src_app_providers_swal_service__WEBPACK_IMPORTED_MODULE_5__["SwalService"]])
    ], TracksComponent);
    return TracksComponent;
}());



/***/ }),

/***/ "./src/app/pages/manager/payments/payments.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/manager/payments/payments.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='row animated fadeIn pagesContainerFixed'>\r\n  <div class=\"col-12 mt-3\">\r\n    <div class=\"row d-flex justify-content-center\">\r\n      <div class=\"col-11 d-flex justify-content-around\">\r\n        <div class=\"row d-flex justify-content-around\">\r\n          <div class=\"col-3 d-flex justify-content-around m-0 p-0\">\r\n            <div class=\"form-check\">\r\n              <input checked class=\"form-check-input\" type=\"radio\" name=\"amount\" id=\"amount\" value=\"amount\"\r\n               [(ngModel)]=\"_paymentServices.paymentSearchCriteria\">\r\n              <label class=\"form-check-label highlight\" for=\"amount\">\r\n                Buscar por <a  class=\"highlight\" routerLinkActive=\"router-link-active\" style='color:blue'>CANTIDAD</a>\r\n              </label>\r\n            </div>\r\n            <div *ngIf=\"_paymentServices.paymentTypes.indexOf('CARGO') < 0\" class=\"form-check\">\r\n              <input class=\"form-check-input\" type=\"radio\" name=\"artist\" id=\"artist\" value=\"artist\"\r\n               [(ngModel)]=\"_paymentServices.paymentSearchCriteria\" >\r\n              <label  class=\"form-check-label highlight\" for=\"artist\">\r\n                Buscar por <a  class=\"highlight\" routerLinkActive=\"router-link-active\" style='color:blue'>ARTISTA</a>\r\n              </label>\r\n            </div>\r\n            <div class=\"form-check\">\r\n              <input class=\"form-check-input\" type=\"radio\" name=\"date\" id=\"date\" value=\"date\"\r\n               [(ngModel)]=\"_paymentServices.paymentSearchCriteria\">\r\n              <label class=\"form-check-label highlight\" for=\"date\">\r\n                Buscar por <a  class=\"highlight\" routerLinkActive=\"router-link-active\" style='color:blue'>FECHA</a>\r\n              </label>\r\n            </div>\r\n          </div>\r\n            <div class=\"col-5 d-flex justify-content-center mb-2\" >\r\n              <div class=\"row\">\r\n                   <div class=\"col-9 m-0 p-1  d-flex flex-column\">\r\n                        <div *ngIf=\"_paymentServices.paymentSearchCriteria === 'artist'\" class='d-flex justify-content-center'>\r\n                          <input #input0 type=\"text\" name=\"input\" id=\"\" placeholder=\"Introduce el nombre del artista\">\r\n                        </div>\r\n                        <div *ngIf=\"_paymentServices.paymentSearchCriteria === 'date'\" class=\"d-flex flex-column justify-content-center\">\r\n                          <div>\r\n                            <input #input0 type=\"text\" placeholder=\" De dd-mm-yyyy\">\r\n                          </div>\r\n                          <div>\r\n                            <input #input1 type=\"text\" placeholder=\"A dd-mm-yyyy\">\r\n                          </div>\r\n                        </div>\r\n                        <div *ngIf=\"_paymentServices.paymentSearchCriteria === 'amount'\" class=\"d-flex flex-column justify-content-center\">\r\n                          <div>\r\n                            <input #input0 type=\"number\" placeholder=\"Introduce una cantidad mínima\">\r\n                          </div>\r\n                          <div>\r\n                            <input #input1 type=\"number\" placeholder=\"Introduce una cantidad máxima\">\r\n                          </div>\r\n                        </div>\r\n                   </div>\r\n                  <div class=\"col-3 d-flex flex-column m-0 p-0\">\r\n                    <button (click)=\"searchPayment()\" class='btn btn-warning text-center mr-1'><i class=\"fas fa-search\"></i></button>\r\n                    <button class='btn btn-warning highlight p-0 mr-1' (click)=\"getAll()\"> <p class=\"text-center\">TODOS</p> </button>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-4\">\r\n            <div class=\"row d-flex justify-content-center\">\r\n              <div class=\"col-12 d-flex justify-content-center\">\r\n                <button [ngStyle]=\"{'opacity': buttonsStyle('all')}\" (click)=\"paymentTypeChange('all')\" class=\"btn btn-warning highlight\">Todos</button>\r\n                <button [ngStyle]=\"{'opacity': buttonsStyle('sent')}\" (click)=\"paymentTypeChange('sent')\"  class=\"btn btn-warning highlight\">Pagos enviados</button>\r\n                <button [ngStyle]=\"{'opacity': buttonsStyle('notSent')}\" (click)=\"paymentTypeChange('notSent')\"  class=\"btn btn-warning highlight\">Pagos no enviados</button>\r\n                <button [ngStyle]=\"{'opacity': buttonsStyle('CARGO')}\" (click)=\"paymentTypeChange('CARGO')\" class=\"btn btn-warning highlight\">CARGO</button>   \r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-1 d-flex justify-content-end animated shake\">\r\n        <i (click)=\"_demoServices.incomesPopup(true)\" class=\"fas fa-info fa-lg m-4\" style='cursor:pointer;color:blue'></i>\r\n      </div>\r\n      <div *ngIf=\"_paymentServices.payments.length >0\" class=\"col-12\">\r\n        <table class='table scrollableTable mb-0' style='background: #F5F1E3'>\r\n          <thead class='mr-4 d-flex justify-content-around'>\r\n            <th style=\"width:20%\">Cantidad</th>\r\n            <th style=\"width:20%\">Artista</th>\r\n            <th style=\"width:20%\">Fecha</th>\r\n            <th style=\"width:20%\">Track</th>\r\n            <th style=\"width:20%\"></th>\r\n          </thead>\r\n          <tbody #tbody style='width:100%'>\r\n            <tr *ngFor=\"let payment of _paymentServices.payments\" class=\"d-flex justify-content-around\">\r\n              <td style=\"width:20%\">{{payment.amount.toFixed(2)}}</td>\r\n              <td style=\"width:20%\"> <p *ngIf=\"payment.artist\" >{{payment.artist.indexcard.name}}</p> <p *ngIf=\"!payment.artist\">CARGO</p> </td>\r\n              <td style=\"width:20%\">{{payment.date || date}}</td>\r\n              <td style=\"width:20%\">{{payment.track.title}}</td>\r\n              <td style=\"width:20%\" *ngIf=\"!payment.sent\"> <button *ngIf=\"payment.artist\" (click)=\"_paymentServices.sendPaymentNotification(payment._id,_letterServices.letterSelectedId).subscribe()\" class=\"btn btn-warning highlight\">Enviar email</button></td>\r\n              <td style=\"width:20%\" *ngIf=\"payment.sent && !payment.sentDate\"> <p class=\"highlight\">¡Email enviado!</p></td>\r\n              <td style=\"width:20%\" *ngIf=\"payment.sent && payment.sentDate\"><p class=\"highlight\">\r\n                ¡Email enviado el día {{payment.sentDate | date}}\r\n              </p>!</td>\r\n            </tr>\r\n          </tbody>\r\n          <hr>\r\n          <div class=\"row m-3\" style='background:#F5F1E3;'>\r\n            <div class=\"col-2\"></div>\r\n            <div class=\"col-8 d-flex justify-content-around\">\r\n              <button (click)=\"switchPage(-5)\" *ngIf=\"_paymentServices.from > 0\"  class=\"btn btn-warning\">PREV</button>\r\n              <button (click)=\"switchPage(5)\" *ngIf=\"_paymentServices.from + 5 <=  _paymentServices.count\" class=\"btn btn-warning\">NEXT</button>\r\n            </div>\r\n            <div class=\"col-2\"></div>\r\n          </div>\r\n        </table>\r\n      </div>\r\n      <div class=\"col-12 m-0 p-0 d-flex justify-content-center\">\r\n        <span class=\"highlight\" style=\"color:red\">*Selecciona un modelo de email para enviar a los artistas*</span> \r\n      </div>\r\n      <div class=\"col-12 mt-0\">\r\n        <div class=\"row m-2\" style=\"background: #F5F1E3;border:solid black 1px\">\r\n          <div class=\"col-12 \" style=\"background:#ffc107\">\r\n            <div class=\"row\">\r\n              <div class=\"col-7 d-flex justify-content-center\">\r\n                <div>\r\n                  <label class=\"highlight\" for=\"letterModels\">Modelos disponibles</label>\r\n                  <select [(ngModel)]=\"_letterServices.letterSelectedId\" (ngModelChange)=\"_letterServices.selectLetter()\">\r\n                    <option  *ngFor=\"let letter of _letterServices.letters\" [value]=\"letter._id\">{{letter.name}}</option>\r\n                      <option value=\"undefined\"></option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"_letterServices.form\" class=\"col-5 d-flex justify-content-around\">\r\n                <button *ngIf=\"_letterServices.letterSelectedId\" (click)=\"_letterServices.setNewLetter()\"\r\n                  class=\"btn btn-primary highlight\">CREAR NUEVO MODELO EMAIL</button>\r\n                <button *ngIf=\"!_letterServices.form.pristine && _letterServices.form.value.content && _letterServices.form.value.user && _letterServices.form.value.name\" class=\"btn btn-primary highlight\"\r\n                  (click)=\"_letterServices.saveLetter().subscribe()\">GUARDAR</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-8 d-flex flex-column\">\r\n            <form ngNativeValidate action=\"\" [formGroup]='_letterServices.form' *ngIf=\"_letterServices.form\" id=\"letterModelForm\">\r\n            <div class=\"row m-1 d-flex justify-content-around\">\r\n              <label class=\"highlight\" *ngIf=\"_letterServices.letterSelectedId\" for=\"name\">Puedes modificar el nombre del modelo</label>\r\n              <label class=\"highlight\" *ngIf=\"!_letterServices.letterSelectedId\" for=\"name\">Introduce el nombre del nuevo modelo(campo obligatorio)</label>\r\n              <input formControlName='name' class=\"form-control\" name=\"name\" type=\"text\" id=\"name\" placeholder=\"nombre del modelo\"\r\n                [value]=\"_letterServices.form.value.name\">\r\n            </div>\r\n              <p class=\"text-center mb-0 highlight\">TEXTO PRINCIPAL(campo obligatorio)</p>\r\n           <div class=\"row d-flex justify-content-around\">\r\n            <span>[[nombre de artista]]</span>\r\n            <span> [[apellido de artista]] </span>\r\n            <span> [[email de artista]]</span>\r\n            <span> [[cantidad liquidación]]</span>\r\n            <span> [[título track]]</span>\r\n            <span>[[título albúm]]</span>\r\n           </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-12 d-flex justify-content-center mb-2\">\r\n                <textarea formControlName='content' class=\"form-control\" name=\"content\"  cols=\"100\" rows=\"5\"></textarea>\r\n              </div>\r\n            </div>\r\n        </form>\r\n          </div>\r\n          <div class=\"col-4\">\r\n            <form ngNativeValidate action=\"\" [formGroup]='_letterServices.form' *ngIf=\"_letterServices.form\" id=\"letterModelForm\">\r\n            <div class=\"row d-flex justify-content-center m-1\">\r\n              <label class=\"highlight\" for=\"usersEmails\">Email emisor(campo obligatorio)</label>\r\n              <select formControlName='user' class=\"form-control\" name=\"user\" >\r\n                <option *ngFor=\"let user of _letterServices.users\" [value]=\"user._id\">{{user.email}}</option>\r\n              </select>\r\n            </div>\r\n            <p class=\"text-center mb-0 highlight\">DATOS</p>\r\n            <div class=\"row d-flex justify-content-center mb-2\">\r\n              <textarea formControlName='bottom' class=\"form-control\" name=\"bottom\" cols=\"25\" rows=\"3\"></textarea>\r\n            </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/manager/payments/payments.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/manager/payments/payments.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scrollableTable tbody {\n  height: 120px;\n  /* Just for the demo          */\n  overflow-y: auto;\n  /* Trigger vertical scroll    */\n  overflow-x: hidden;\n  /* Hide the horizontal scroll */ }\n\n@media (min-height: 694px) {\n  .scrollableTable tbody {\n    height: calc(1.1*120px); } }\n\n@media (min-height: 781px) {\n  .scrollableTable tbody {\n    height: calc(1.25*120px); } }\n\n@media (min-height: 833px) {\n  .scrollableTable tbody {\n    height: calc(1.35*120px); } }\n\n@media (min-height: 937px) {\n  .scrollableTable tbody {\n    height: calc(1.5*120px); } }\n\n@media (min-height: 1250px) {\n  .scrollableTable tbody {\n    height: calc(2*120px); } }\n\n@media (min-height: 1875px) {\n  .scrollableTable tbody {\n    height: calc(3*120px); } }\n\n@media (min-height: 2500px) {\n  .scrollableTable tbody {\n    height: calc(3.9*120px); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFuYWdlci9wYXltZW50cy9DOlxcVXNlcnNcXDM0Njk1XFxEZXNrdG9wXFxEUkFGVFxcQ0FSR08gTVVTSUNcXEZST05URU5EX0VTQ1VFTEEvc3JjXFxhcHBcXHBhZ2VzXFxtYW5hZ2VyXFxwYXltZW50c1xccGF5bWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSyxjQUFhO0VBQ2QsZ0NBQWdDO0VBQ2hDLGlCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsbUJBQWtCO0VBQ2xCLGdDQUFnQyxFQUNuQzs7QUFHRDtFQUNDO0lBQ08sd0JBQXVCLEVBRTlCLEVBQUE7O0FBR0Q7RUFDQztJQUNPLHlCQUF3QixFQUUvQixFQUFBOztBQUdEO0VBQ0U7SUFDTSx5QkFBd0IsRUFFL0IsRUFBQTs7QUFHRDtFQUNDO0lBQ08sd0JBQXVCLEVBRTlCLEVBQUE7O0FBR0Q7RUFDQztJQUNPLHNCQUFxQixFQUU1QixFQUFBOztBQUdEO0VBQ0c7SUFDSyxzQkFBcUIsRUFFNUIsRUFBQTs7QUFHRDtFQUNDO0lBQ08sd0JBQXVCLEVBRTlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYW5hZ2VyL3BheW1lbnRzL3BheW1lbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5zY3JvbGxhYmxlVGFibGUgdGJvZHkge1xyXG4gICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAvKiBKdXN0IGZvciB0aGUgZGVtbyAgICAgICAgICAqL1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIC8qIFRyaWdnZXIgdmVydGljYWwgc2Nyb2xsICAgICovXHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAvKiBIaWRlIHRoZSBob3Jpem9udGFsIHNjcm9sbCAqL1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtaW4taGVpZ2h0OiA2OTRweCkge1xyXG4gLnNjcm9sbGFibGVUYWJsZSB0Ym9keSB7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEuMSoxMjBweClcclxuICAgICAgICBcclxufVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDc4MXB4KSB7XHJcbiAuc2Nyb2xsYWJsZVRhYmxlIHRib2R5IHtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMS4yNSoxMjBweClcclxuICAgICAgICBcclxufVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDgzM3B4KSB7XHJcbiAgLnNjcm9sbGFibGVUYWJsZSB0Ym9keSB7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEuMzUqMTIwcHgpXHJcbiAgICAgICAgXHJcbn1cclxufVxyXG5cclxuQG1lZGlhIChtaW4taGVpZ2h0OiA5MzdweCkge1xyXG4gLnNjcm9sbGFibGVUYWJsZSB0Ym9keSB7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEuNSoxMjBweClcclxuICAgICAgICBcclxufVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDEyNTBweCkge1xyXG4gLnNjcm9sbGFibGVUYWJsZSB0Ym9keSB7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDIqMTIwcHgpXHJcbiAgICAgICAgXHJcbn1cclxufVxyXG5cclxuQG1lZGlhIChtaW4taGVpZ2h0OiAxODc1cHgpIHtcclxuICAgLnNjcm9sbGFibGVUYWJsZSB0Ym9keSB7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDMqMTIwcHgpXHJcbiAgICAgICAgXHJcbn0gXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLWhlaWdodDogMjUwMHB4KSB7XHJcbiAuc2Nyb2xsYWJsZVRhYmxlIHRib2R5IHtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMy45KjEyMHB4KVxyXG4gICAgICAgIFxyXG59XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/manager/payments/payments.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/manager/payments/payments.component.ts ***!
  \**************************************************************/
/*! exports provided: PaymentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsComponent", function() { return PaymentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_payments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../providers/payments.service */ "./src/app/providers/payments.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _providers_letter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/letter.service */ "./src/app/providers/letter.service.ts");
/* harmony import */ var _providers_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/user.service */ "./src/app/providers/user.service.ts");
/* harmony import */ var _providers_demo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/demo.service */ "./src/app/providers/demo.service.ts");







var PaymentsComponent = /** @class */ (function () {
    function PaymentsComponent(_paymentServices, _letterServices, _userService, _demoServices) {
        this._paymentServices = _paymentServices;
        this._letterServices = _letterServices;
        this._userService = _userService;
        this._demoServices = _demoServices;
    }
    PaymentsComponent.prototype.ngOnInit = function () {
        //// Payments section ///
        this._letterServices.getUsers();
        this._letterServices.getLetters().subscribe();
        ///// Letter section /////
        this._paymentServices.searchMode = false;
        this._paymentServices.getPayments().subscribe();
        this._demoServices.paymentsPopup();
        this.paymentTypeChange('all');
    };
    PaymentsComponent.prototype.searchPayment = function () {
        var _this = this;
        this._paymentServices.searchMode = true;
        switch (this._paymentServices.paymentSearchCriteria) {
            case 'artist':
                this._paymentServices.inputs[0] = this.input0.nativeElement.value;
                this._paymentServices.searchPayments().subscribe();
                break;
            case 'amount':
                this._paymentServices.inputs[0] = String(this.input0.nativeElement.value);
                this._paymentServices.inputs[1] = String(this.input1.nativeElement.value);
                this._paymentServices.searchPayments().subscribe();
                break;
            case 'date':
                this.checkDateFormat().then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var values, _a, _b, values2, _c, _d;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_e) {
                        switch (_e.label) {
                            case 0:
                                values = this.input0.nativeElement.value.split('-');
                                return [4 /*yield*/, values.forEach(function (value, index) {
                                        values[index] = Number(value);
                                    })];
                            case 1:
                                _e.sent();
                                _a = this._paymentServices.inputs;
                                _b = 0;
                                return [4 /*yield*/, new Date(values[2], values[1] - 1, values[0]).getTime()];
                            case 2:
                                _a[_b] = _e.sent();
                                values2 = this.input1.nativeElement.value.split('-');
                                return [4 /*yield*/, values2.forEach(function (value, index) {
                                        values2[index] = Number(value);
                                    })];
                            case 3:
                                _e.sent();
                                _c = this._paymentServices.inputs;
                                _d = 1;
                                return [4 /*yield*/, new Date(values2[2], values2[1] - 1, values2[0]).getTime()];
                            case 4:
                                _c[_d] = _e.sent();
                                this._paymentServices.searchPayments().subscribe();
                                return [2 /*return*/];
                        }
                    });
                }); });
                break;
        }
    };
    PaymentsComponent.prototype.getAll = function () {
        this._paymentServices.getPayments().subscribe();
        this._paymentServices.searchMode = false;
        this.input0.nativeElement.value = '';
        if (this.input1) {
            this.input1.nativeElement.value = '';
        }
    };
    PaymentsComponent.prototype.checkDateFormat = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var regExp = /(^(((0[1-9]|1[0-9]|2[0-8])[-](0[1-9]|1[012]))|((29|30|31)[-](0[13578]|1[02]))|((29|30)[-](0[4,6,9]|11)))[-](19|[2-9][0-9])\d\d$)|(^29[-]02[-](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/;
            if (regExp.test(_this.input0.nativeElement.value) && regExp.test(_this.input1.nativeElement.value)) {
                resolve(true);
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    text: 'Utiliza el formato indicado dd-mm-yyyy , gracias',
                    type: 'info',
                    showCloseButton: true
                });
            }
        });
    };
    PaymentsComponent.prototype.buttonsStyle = function (type) {
        if (type === 'all') {
            if (this._paymentServices.paymentTypes.indexOf('all') == 0) {
                return '1';
            }
            else {
                return '0.5';
            }
        }
        else if (type === 'sent') {
            if (this._paymentServices.paymentTypes.indexOf('sent') == 0) {
                return '1';
            }
            else {
                return '0.5';
            }
        }
        else if (type === 'notSent') {
            if (this._paymentServices.paymentTypes.indexOf('notSent') == 0) {
                return '1';
            }
            else {
                return '0.5';
            }
        }
        else if (type === 'CARGO') {
            if (this._paymentServices.paymentTypes.indexOf('CARGO') == 0) {
                return '1';
            }
            else {
                return '0.5';
            }
        }
    };
    PaymentsComponent.prototype.paymentTypeChange = function (paymentType) {
        this._paymentServices.from = 0;
        this._paymentServices.paymentTypes = [paymentType];
        if (this._paymentServices.searchMode) {
            this.searchPayment();
        }
        else {
            this._paymentServices.getPayments().subscribe();
        }
    };
    PaymentsComponent.prototype.switchPage = function (amount) {
        this._paymentServices.from += amount;
        if (!this._paymentServices.searchMode) {
            this._paymentServices.getPayments().subscribe();
        }
        else {
            this.searchPayment();
        }
    };
    PaymentsComponent.prototype.ngOnDestroy = function () {
        this._paymentServices.payments = [];
        this._paymentServices.paymentSearchCriteria = 'amount';
        this._paymentServices.paymentTypes = ['all'];
        this._paymentServices.searchMode = false;
        this._paymentServices.inputs = [];
        this._paymentServices.from = 0;
        this._paymentServices.count = 0;
        this._letterServices.letterSelectedId = undefined;
        this._letterServices.users = [];
        this._letterServices.letters = [];
        this._letterServices.form = undefined;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input0'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PaymentsComponent.prototype, "input0", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input1'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PaymentsComponent.prototype, "input1", void 0);
    PaymentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payments',
            template: __webpack_require__(/*! ./payments.component.html */ "./src/app/pages/manager/payments/payments.component.html"),
            styles: [__webpack_require__(/*! ./payments.component.scss */ "./src/app/pages/manager/payments/payments.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_payments_service__WEBPACK_IMPORTED_MODULE_2__["PaymentsService"],
            _providers_letter_service__WEBPACK_IMPORTED_MODULE_4__["LetterService"],
            _providers_user_service__WEBPACK_IMPORTED_MODULE_5__["UserServices"],
            _providers_demo_service__WEBPACK_IMPORTED_MODULE_6__["DemoService"]])
    ], PaymentsComponent);
    return PaymentsComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _addressBook_subject_subject_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addressBook/subject/subject.component */ "./src/app/pages/addressBook/subject/subject.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users/users.component */ "./src/app/pages/users/users.component.ts");
/* harmony import */ var _addressBook_alumni_alumni_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addressBook/alumni/alumni.component */ "./src/app/pages/addressBook/alumni/alumni.component.ts");
/* harmony import */ var _addressBook_professor_professor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./addressBook/professor/professor.component */ "./src/app/pages/addressBook/professor/professor.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/pages/profile/profile.component.ts");
/* harmony import */ var _projects_mainProjects_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./projects/mainProjects.component */ "./src/app/pages/projects/mainProjects.component.ts");
/* harmony import */ var _projects_project_project_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./projects/project/project.component */ "./src/app/pages/projects/project/project.component.ts");
/* harmony import */ var _pages_routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages.routes */ "./src/app/pages/pages.routes.ts");
/* harmony import */ var _projects_project_images_images_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./projects/project/images/images.component */ "./src/app/pages/projects/project/images/images.component.ts");
/* harmony import */ var _projects_project_messages_messages_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./projects/project/messages/messages.component */ "./src/app/pages/projects/project/messages/messages.component.ts");
/* harmony import */ var _projects_project_files_files_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./projects/project/files/files.component */ "./src/app/pages/projects/project/files/files.component.ts");
/* harmony import */ var _calendar_day_day_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./calendar/day/day.component */ "./src/app/pages/calendar/day/day.component.ts");
/* harmony import */ var _facilities_facilities_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./facilities/facilities.component */ "./src/app/pages/facilities/facilities.component.ts");
/* harmony import */ var _calendar_day_event_event_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./calendar/day/event/event.component */ "./src/app/pages/calendar/day/event/event.component.ts");
/* harmony import */ var _projects_project_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./projects/project/tasks/tasks.component */ "./src/app/pages/projects/project/tasks/tasks.component.ts");
/* harmony import */ var _projects_project_project_events_project_events_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./projects/project/project-events/project-events.component */ "./src/app/pages/projects/project/project-events/project-events.component.ts");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./calendar/calendar.component */ "./src/app/pages/calendar/calendar.component.ts");
/* harmony import */ var _manager_overview_albums_albums_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./manager/overview/albums/albums.component */ "./src/app/pages/manager/overview/albums/albums.component.ts");
/* harmony import */ var _manager_incomes_incomes_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./manager/incomes/incomes.component */ "./src/app/pages/manager/incomes/incomes.component.ts");
/* harmony import */ var _manager_overview_tracks_tracks_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./manager/overview/tracks/tracks.component */ "./src/app/pages/manager/overview/tracks/tracks.component.ts");
/* harmony import */ var _manager_payments_payments_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./manager/payments/payments.component */ "./src/app/pages/manager/payments/payments.component.ts");
/* harmony import */ var _manager_overview_artist_artist_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./manager/overview/artist/artist.component */ "./src/app/pages/manager/overview/artist/artist.component.ts");
/* harmony import */ var _manager_incomes_not_liquidated_not_liquidated_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./manager/incomes/not-liquidated/not-liquidated.component */ "./src/app/pages/manager/incomes/not-liquidated/not-liquidated.component.ts");
/* harmony import */ var _manager_incomes_liquidated_liquidated_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./manager/incomes/liquidated/liquidated.component */ "./src/app/pages/manager/incomes/liquidated/liquidated.component.ts");
/* harmony import */ var _manager_overview_overview_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./manager/overview/overview.component */ "./src/app/pages/manager/overview/overview.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./company/company.component */ "./src/app/pages/company/company.component.ts");
/* harmony import */ var _company_incomes_chart_incomes_chart_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./company/incomes-chart/incomes-chart.component */ "./src/app/pages/company/incomes-chart/incomes-chart.component.ts");
/* harmony import */ var _company_payments_chart_payments_chart_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./company/payments-chart/payments-chart.component */ "./src/app/pages/company/payments-chart/payments-chart.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _visitors_visitors_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../visitors/visitors.component */ "./src/app/visitors/visitors.component.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _directives_project_role_directive__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../directives/project-role.directive */ "./src/app/directives/project-role.directive.ts");





///Manteinance//




//Main pages//




//Routes//



























var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _addressBook_alumni_alumni_component__WEBPACK_IMPORTED_MODULE_7__["AlumniComponent"],
                _addressBook_professor_professor_component__WEBPACK_IMPORTED_MODULE_8__["ProfessorComponent"],
                _addressBook_subject_subject_component__WEBPACK_IMPORTED_MODULE_5__["SubjectComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_6__["UsersComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
                _projects_mainProjects_component__WEBPACK_IMPORTED_MODULE_11__["MainProjectsComponent"],
                _projects_project_project_component__WEBPACK_IMPORTED_MODULE_12__["ProjectComponent"],
                _projects_project_images_images_component__WEBPACK_IMPORTED_MODULE_14__["ImagesComponent"],
                _projects_project_messages_messages_component__WEBPACK_IMPORTED_MODULE_15__["MessagesComponent"],
                _projects_project_files_files_component__WEBPACK_IMPORTED_MODULE_16__["FilesComponent"],
                _calendar_day_day_component__WEBPACK_IMPORTED_MODULE_17__["DayComponent"],
                _facilities_facilities_component__WEBPACK_IMPORTED_MODULE_18__["FacilitiesComponent"],
                _calendar_day_event_event_component__WEBPACK_IMPORTED_MODULE_19__["EventComponent"],
                _projects_project_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_20__["TasksComponent"],
                _projects_project_project_events_project_events_component__WEBPACK_IMPORTED_MODULE_21__["ProjectEventsComponent"],
                _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_22__["CalendarManagerComponent"],
                _manager_overview_albums_albums_component__WEBPACK_IMPORTED_MODULE_23__["AlbumsComponent"],
                _manager_overview_tracks_tracks_component__WEBPACK_IMPORTED_MODULE_25__["TracksComponent"],
                _manager_payments_payments_component__WEBPACK_IMPORTED_MODULE_26__["PaymentsComponent"],
                _manager_incomes_incomes_component__WEBPACK_IMPORTED_MODULE_24__["IncomesComponent"],
                _manager_payments_payments_component__WEBPACK_IMPORTED_MODULE_26__["PaymentsComponent"],
                _manager_overview_artist_artist_component__WEBPACK_IMPORTED_MODULE_27__["ArtistComponent"],
                _manager_incomes_not_liquidated_not_liquidated_component__WEBPACK_IMPORTED_MODULE_28__["NotLiquidatedComponent"],
                _manager_incomes_liquidated_liquidated_component__WEBPACK_IMPORTED_MODULE_29__["LiquidatedComponent"],
                _company_company_component__WEBPACK_IMPORTED_MODULE_32__["CompanyComponent"],
                _manager_overview_overview_component__WEBPACK_IMPORTED_MODULE_30__["OverviewComponent"],
                _company_incomes_chart_incomes_chart_component__WEBPACK_IMPORTED_MODULE_33__["IncomesChartComponent"],
                _company_payments_chart_payments_chart_component__WEBPACK_IMPORTED_MODULE_34__["PaymentsChartComponent"],
                _visitors_visitors_component__WEBPACK_IMPORTED_MODULE_37__["VisitorsComponent"],
                _directives_project_role_directive__WEBPACK_IMPORTED_MODULE_39__["ProjectRoleDirective"]
            ],
            imports: [
                _pages_routes__WEBPACK_IMPORTED_MODULE_13__["PAGESROUTES"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_31__["SharedModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_35__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_35__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_35__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_35__["MatFormFieldModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_36__["MatProgressSpinnerModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_38__["PipesModule"]
            ],
            exports: [],
            bootstrap: [],
            entryComponents: [_calendar_day_event_event_component__WEBPACK_IMPORTED_MODULE_19__["EventComponent"]]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.routes.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.routes.ts ***!
  \***************************************/
/*! exports provided: PAGESROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGESROUTES", function() { return PAGESROUTES; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/pages/profile/profile.component.ts");
/* harmony import */ var _projects_mainProjects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects/mainProjects.component */ "./src/app/pages/projects/mainProjects.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users/users.component */ "./src/app/pages/users/users.component.ts");
/* harmony import */ var _calendar_day_day_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar/day/day.component */ "./src/app/pages/calendar/day/day.component.ts");
/* harmony import */ var _facilities_facilities_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./facilities/facilities.component */ "./src/app/pages/facilities/facilities.component.ts");
/* harmony import */ var _addressBook_subject_subject_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addressBook/subject/subject.component */ "./src/app/pages/addressBook/subject/subject.component.ts");
/* harmony import */ var _addressBook_professor_professor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./addressBook/professor/professor.component */ "./src/app/pages/addressBook/professor/professor.component.ts");
/* harmony import */ var _addressBook_alumni_alumni_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./addressBook/alumni/alumni.component */ "./src/app/pages/addressBook/alumni/alumni.component.ts");
/* harmony import */ var _projects_project_project_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./projects/project/project.component */ "./src/app/pages/projects/project/project.component.ts");
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../guards/admin.guard */ "./src/app/guards/admin.guard.ts");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./calendar/calendar.component */ "./src/app/pages/calendar/calendar.component.ts");
/* harmony import */ var _manager_incomes_incomes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./manager/incomes/incomes.component */ "./src/app/pages/manager/incomes/incomes.component.ts");
/* harmony import */ var _manager_payments_payments_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./manager/payments/payments.component */ "./src/app/pages/manager/payments/payments.component.ts");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./company/company.component */ "./src/app/pages/company/company.component.ts");
/* harmony import */ var _manager_overview_overview_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./manager/overview/overview.component */ "./src/app/pages/manager/overview/overview.component.ts");
/* harmony import */ var _visitors_visitors_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../visitors/visitors.component */ "./src/app/visitors/visitors.component.ts");


















var pagesRoutes = [
    { path: "", redirectTo: "/dashboard", pathMatch: "full" },
    {
        path: "dashboard",
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"]
    },
    { path: "profile", component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"] },
    {
        path: "projects",
        component: _projects_mainProjects_component__WEBPACK_IMPORTED_MODULE_3__["MainProjectsComponent"],
        children: [{ path: ":id", component: _projects_project_project_component__WEBPACK_IMPORTED_MODULE_10__["ProjectComponent"] }]
    },
    {
        path: "subjects",
        canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]],
        component: _addressBook_subject_subject_component__WEBPACK_IMPORTED_MODULE_7__["SubjectComponent"]
    },
    {
        path: "professors",
        canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]],
        component: _addressBook_professor_professor_component__WEBPACK_IMPORTED_MODULE_8__["ProfessorComponent"]
    },
    {
        path: "alumnis",
        canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]],
        component: _addressBook_alumni_alumni_component__WEBPACK_IMPORTED_MODULE_9__["AlumniComponent"]
    },
    { path: "users",
        canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]],
        component: _users_users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"] },
    {
        path: "facilities",
        canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]],
        component: _facilities_facilities_component__WEBPACK_IMPORTED_MODULE_6__["FacilitiesComponent"]
    },
    {
        path: "calendar",
        component: _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_12__["CalendarManagerComponent"],
        children: [{ path: ":weekId/:dayId", component: _calendar_day_day_component__WEBPACK_IMPORTED_MODULE_5__["DayComponent"] }]
    },
    { path: 'overview/:item/:input/:from/:albumId/:trackId/:artistId',
        canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]],
        component: _manager_overview_overview_component__WEBPACK_IMPORTED_MODULE_16__["OverviewComponent"] },
    { path: 'incomes',
        canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]],
        component: _manager_incomes_incomes_component__WEBPACK_IMPORTED_MODULE_13__["IncomesComponent"] },
    { path: 'payments',
        canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]],
        component: _manager_payments_payments_component__WEBPACK_IMPORTED_MODULE_14__["PaymentsComponent"] },
    {
        path: 'company',
        canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]],
        component: _company_company_component__WEBPACK_IMPORTED_MODULE_15__["CompanyComponent"]
    },
    {
        path: "visitors",
        component: _visitors_visitors_component__WEBPACK_IMPORTED_MODULE_17__["VisitorsComponent"],
        data: { title: "VISITORS", description: "Visitors" }
    },
];
var PAGESROUTES = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(pagesRoutes);


/***/ }),

/***/ "./src/app/pages/profile/profile.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\nimg{\r\n    height:250px;\r\n    width:250px   \r\n}\r\n\r\n@media (min-height: 694px) {\r\nimg{\r\n    height:calc(1.1*250px);\r\n    width:calc(1.1*250px)   \r\n}\r\n}\r\n\r\n@media (min-height: 781px) {\r\n img{\r\n    height:calc(1.25*250px);\r\n    width:calc(1.25*250px)   \r\n}\r\n}\r\n\r\n@media (min-height: 833px) {\r\n img{\r\n    height:calc(1.35*250px);\r\n    width:calc(1.35*250px)   \r\n}\r\n}\r\n\r\n@media (min-height: 937px) {\r\n img{\r\n    height:calc(1.5*250px);\r\n    width:calc(1.5*250px)   \r\n}\r\n}\r\n\r\n@media (min-height: 1250px) {\r\n img{\r\n    height:calc(2*250px);\r\n    width:calc(2*250px)   \r\n}\r\n}\r\n\r\n@media (min-height: 1875px) {\r\n  img{\r\n    height:calc(3*250px);\r\n    width:calc(3*250px)   \r\n}  \r\n}\r\n\r\n@media (min-height: 2500px) {\r\n img{\r\n    height:calc(3.9*250px);\r\n    width:calc(3.9*250px)   \r\n}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0NBQ2Q7O0FBRUQ7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixxQkFBcUI7Q0FDeEI7Q0FDQTs7QUFFRDtDQUNDO0lBQ0csd0JBQXdCO0lBQ3hCLHNCQUFzQjtDQUN6QjtDQUNBOztBQUVEO0NBQ0M7SUFDRyx3QkFBd0I7SUFDeEIsc0JBQXNCO0NBQ3pCO0NBQ0E7O0FBRUQ7Q0FDQztJQUNHLHVCQUF1QjtJQUN2QixxQkFBcUI7Q0FDeEI7Q0FDQTs7QUFFRDtDQUNDO0lBQ0cscUJBQXFCO0lBQ3JCLG1CQUFtQjtDQUN0QjtDQUNBOztBQUVEO0VBQ0U7SUFDRSxxQkFBcUI7SUFDckIsbUJBQW1CO0NBQ3RCO0NBQ0E7O0FBRUQ7Q0FDQztJQUNHLHVCQUF1QjtJQUN2QixxQkFBcUI7Q0FDeEI7Q0FDQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5pbWd7XHJcbiAgICBoZWlnaHQ6MjUwcHg7XHJcbiAgICB3aWR0aDoyNTBweCAgIFxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDY5NHB4KSB7XHJcbmltZ3tcclxuICAgIGhlaWdodDpjYWxjKDEuMSoyNTBweCk7XHJcbiAgICB3aWR0aDpjYWxjKDEuMSoyNTBweCkgICBcclxufVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDc4MXB4KSB7XHJcbiBpbWd7XHJcbiAgICBoZWlnaHQ6Y2FsYygxLjI1KjI1MHB4KTtcclxuICAgIHdpZHRoOmNhbGMoMS4yNSoyNTBweCkgICBcclxufVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDgzM3B4KSB7XHJcbiBpbWd7XHJcbiAgICBoZWlnaHQ6Y2FsYygxLjM1KjI1MHB4KTtcclxuICAgIHdpZHRoOmNhbGMoMS4zNSoyNTBweCkgICBcclxufVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDkzN3B4KSB7XHJcbiBpbWd7XHJcbiAgICBoZWlnaHQ6Y2FsYygxLjUqMjUwcHgpO1xyXG4gICAgd2lkdGg6Y2FsYygxLjUqMjUwcHgpICAgXHJcbn1cclxufVxyXG5cclxuQG1lZGlhIChtaW4taGVpZ2h0OiAxMjUwcHgpIHtcclxuIGltZ3tcclxuICAgIGhlaWdodDpjYWxjKDIqMjUwcHgpO1xyXG4gICAgd2lkdGg6Y2FsYygyKjI1MHB4KSAgIFxyXG59XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLWhlaWdodDogMTg3NXB4KSB7XHJcbiAgaW1ne1xyXG4gICAgaGVpZ2h0OmNhbGMoMyoyNTBweCk7XHJcbiAgICB3aWR0aDpjYWxjKDMqMjUwcHgpICAgXHJcbn0gIFxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDI1MDBweCkge1xyXG4gaW1ne1xyXG4gICAgaGVpZ2h0OmNhbGMoMy45KjI1MHB4KTtcclxuICAgIHdpZHRoOmNhbGMoMy45KjI1MHB4KSAgIFxyXG59XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/profile/profile.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/profile/profile.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row animated fadeIn pagesContainerFixed \">\r\n        <div class='col-12 text-center m-2 d-flex justify-content-center'>\r\n            <div class='d-flex flex-column justify-content-center p-2'>\r\n                <div>\r\n                    <img class='img-fluid' [src]=\"_userServices.userOnline.img | imgPipe\">\r\n                </div>\r\n                <div>\r\n                    <a (click)='changeImg()'><strong style='cursor: pointer;'>CAMBIAR IMAGEN</strong></a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class='col-12 m-4'>\r\n          <div class=\"row d-flex flex-column\">\r\n            <div class=\"col-12 d-flex justify-content-center\">\r\n              <div class='form-group m-2'>\r\n                <label class='p-1' for=\"name\">Tu nombre</label>\r\n                <input id=\"name\" [(ngModel)]=\"_userServices.userOnline.name\">\r\n              </div>\r\n              <div class='form-group m-2'>\r\n                <label class='p-1' for=\"password\">Tu email</label>\r\n                <input id=\"password\" [(ngModel)]=\"_userServices.userOnline.email\" type=\"text\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-12 d-flex justify-content-center\">\r\n              <button (click)='editUser()' class='btn btn-warning mt-3' type='submit'><strong>GUARDAR CAMBIOS</strong> </button>\r\n              <button class='btn btn-warning mt-3' (click)='openPasswordModal()'><strong style='cursor: pointer;'>CAMBIAR\r\n                  PASSWORD</strong></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/user.service */ "./src/app/providers/user.service.ts");
/* harmony import */ var _modals_upload_files_modal_upload_files_modal_controller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modals/upload-files-modal/upload-files-modal-controller.service */ "./src/app/modals/upload-files-modal/upload-files-modal-controller.service.ts");
/* harmony import */ var _modals_password_modal_password_modal_controller_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modals/password-modal/password-modal-controller.service */ "./src/app/modals/password-modal/password-modal-controller.service.ts");
/* harmony import */ var _providers_files_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/files.service */ "./src/app/providers/files.service.ts");
/* harmony import */ var src_app_models_user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);








var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(_userServices, _uploadFilesModal, _passwordModalController, _filesService) {
        this._userServices = _userServices;
        this._uploadFilesModal = _uploadFilesModal;
        this._passwordModalController = _passwordModalController;
        this._filesService = _filesService;
        this.fileSubscription = null;
    }
    ProfileComponent.prototype.editUser = function () {
        var user = new src_app_models_user_model__WEBPACK_IMPORTED_MODULE_6__["User"](this._userServices.userOnline.name, this._userServices.userOnline.email);
        this._userServices.putUser(this._userServices.userOnline._id, user).subscribe(function () {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                text: "Cambios guardados",
                showCloseButton: true,
                type: "success"
            });
        });
    };
    ProfileComponent.prototype.changeImg = function () {
        var _this = this;
        this._uploadFilesModal.showModal(this._userServices.userOnline._id, 'User');
        this.fileSubscription = this._filesService.files$.subscribe(function (fileOrder) {
            if (fileOrder.order === 'post') {
                if (fileOrder.file.type === 'User') {
                    var user = _this._userServices.userOnline;
                    user.img = fileOrder.file._id;
                    _this._userServices.putUser(_this._userServices.userOnline._id, _this._userServices.userOnline).subscribe();
                    _this.fileSubscription.unsubscribe();
                }
            }
        });
    };
    ProfileComponent.prototype.openPasswordModal = function () {
        this._passwordModalController.showModal();
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/pages/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/pages/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_user_service__WEBPACK_IMPORTED_MODULE_2__["UserServices"],
            _modals_upload_files_modal_upload_files_modal_controller_service__WEBPACK_IMPORTED_MODULE_3__["UploadFilesModalController"],
            _modals_password_modal_password_modal_controller_service__WEBPACK_IMPORTED_MODULE_4__["PasswordModalController"],
            _providers_files_service__WEBPACK_IMPORTED_MODULE_5__["FilesServices"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/pages/projects/mainProjects.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/projects/mainProjects.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scrollable{\r\n    height:350px\r\n}\r\n\r\n.projectName{\r\n  font-size:20px\r\n}\r\n\r\n@media (min-height: 694px) {\r\n .scrollable{\r\n    height:calc(1.1*350px)\r\n}\r\n.projectName{\r\n  font-size:calc(1.1*20px)\r\n}\r\n}\r\n\r\n@media (min-height: 781px) {\r\n  .scrollable{\r\n    height:calc(1.25*350px)\r\n}\r\n.projectName{\r\n  font-size:calc(1.25*20px)\r\n}\r\n}\r\n\r\n@media (min-height: 833px) {\r\n  .scrollable{\r\n    height:calc(1.35*350px)\r\n}\r\n.projectName{\r\n  font-size:calc(1.35*20px)\r\n}\r\n}\r\n\r\n@media (min-height: 937px) {\r\n  .scrollable{\r\n    height:calc(1.5*350px)\r\n}\r\n.projectName{\r\n  font-size:calc(1.5*20px)\r\n}\r\n}\r\n\r\n@media (min-height: 1250px) {\r\n  .scrollable{\r\n    height:calc(2*350px)\r\n}\r\n.projectName{\r\n  font-size:calc(2*20px)\r\n}\r\n}\r\n\r\n@media (min-height: 1875px) {\r\n   .scrollable{\r\n    height:calc(3*350px)\r\n}\r\n.projectName{\r\n  font-size:calc(3*20px)\r\n}\r\n}\r\n\r\n@media (min-height: 2500px) {\r\n  .scrollable{\r\n    height:calc(3.9*350px)\r\n}\r\n.projectName{\r\n  font-size:calc(3.9*20px)\r\n}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvamVjdHMvbWFpblByb2plY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0NBQ2Y7O0FBRUQ7RUFDRSxjQUFjO0NBQ2Y7O0FBRUQ7Q0FDQztJQUNHLHNCQUFzQjtDQUN6QjtBQUNEO0VBQ0Usd0JBQXdCO0NBQ3pCO0NBQ0E7O0FBRUQ7RUFDRTtJQUNFLHVCQUF1QjtDQUMxQjtBQUNEO0VBQ0UseUJBQXlCO0NBQzFCO0NBQ0E7O0FBRUQ7RUFDRTtJQUNFLHVCQUF1QjtDQUMxQjtBQUNEO0VBQ0UseUJBQXlCO0NBQzFCO0NBQ0E7O0FBRUQ7RUFDRTtJQUNFLHNCQUFzQjtDQUN6QjtBQUNEO0VBQ0Usd0JBQXdCO0NBQ3pCO0NBQ0E7O0FBRUQ7RUFDRTtJQUNFLG9CQUFvQjtDQUN2QjtBQUNEO0VBQ0Usc0JBQXNCO0NBQ3ZCO0NBQ0E7O0FBRUQ7R0FDRztJQUNDLG9CQUFvQjtDQUN2QjtBQUNEO0VBQ0Usc0JBQXNCO0NBQ3ZCO0NBQ0E7O0FBRUQ7RUFDRTtJQUNFLHNCQUFzQjtDQUN6QjtBQUNEO0VBQ0Usd0JBQXdCO0NBQ3pCO0NBQ0EiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9qZWN0cy9tYWluUHJvamVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGxhYmxle1xyXG4gICAgaGVpZ2h0OjM1MHB4XHJcbn1cclxuXHJcbi5wcm9qZWN0TmFtZXtcclxuICBmb250LXNpemU6MjBweFxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDY5NHB4KSB7XHJcbiAuc2Nyb2xsYWJsZXtcclxuICAgIGhlaWdodDpjYWxjKDEuMSozNTBweClcclxufVxyXG4ucHJvamVjdE5hbWV7XHJcbiAgZm9udC1zaXplOmNhbGMoMS4xKjIwcHgpXHJcbn1cclxufVxyXG5cclxuQG1lZGlhIChtaW4taGVpZ2h0OiA3ODFweCkge1xyXG4gIC5zY3JvbGxhYmxle1xyXG4gICAgaGVpZ2h0OmNhbGMoMS4yNSozNTBweClcclxufVxyXG4ucHJvamVjdE5hbWV7XHJcbiAgZm9udC1zaXplOmNhbGMoMS4yNSoyMHB4KVxyXG59XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLWhlaWdodDogODMzcHgpIHtcclxuICAuc2Nyb2xsYWJsZXtcclxuICAgIGhlaWdodDpjYWxjKDEuMzUqMzUwcHgpXHJcbn1cclxuLnByb2plY3ROYW1le1xyXG4gIGZvbnQtc2l6ZTpjYWxjKDEuMzUqMjBweClcclxufVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDkzN3B4KSB7XHJcbiAgLnNjcm9sbGFibGV7XHJcbiAgICBoZWlnaHQ6Y2FsYygxLjUqMzUwcHgpXHJcbn1cclxuLnByb2plY3ROYW1le1xyXG4gIGZvbnQtc2l6ZTpjYWxjKDEuNSoyMHB4KVxyXG59XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLWhlaWdodDogMTI1MHB4KSB7XHJcbiAgLnNjcm9sbGFibGV7XHJcbiAgICBoZWlnaHQ6Y2FsYygyKjM1MHB4KVxyXG59XHJcbi5wcm9qZWN0TmFtZXtcclxuICBmb250LXNpemU6Y2FsYygyKjIwcHgpXHJcbn1cclxufVxyXG5cclxuQG1lZGlhIChtaW4taGVpZ2h0OiAxODc1cHgpIHtcclxuICAgLnNjcm9sbGFibGV7XHJcbiAgICBoZWlnaHQ6Y2FsYygzKjM1MHB4KVxyXG59XHJcbi5wcm9qZWN0TmFtZXtcclxuICBmb250LXNpemU6Y2FsYygzKjIwcHgpXHJcbn1cclxufVxyXG5cclxuQG1lZGlhIChtaW4taGVpZ2h0OiAyNTAwcHgpIHtcclxuICAuc2Nyb2xsYWJsZXtcclxuICAgIGhlaWdodDpjYWxjKDMuOSozNTBweClcclxufVxyXG4ucHJvamVjdE5hbWV7XHJcbiAgZm9udC1zaXplOmNhbGMoMy45KjIwcHgpXHJcbn1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/projects/mainProjects.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/projects/mainProjects.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row animated fadeIn pagesContainerFixed\">\r\n    <div class=\"col-12\" *ngIf=\"!_projectServices.projectSelectedId\">\r\n        <div class=\"row d-flex justify-content-center\">\r\n            <div class=\"col-12 d-flex justify-content-end animated shake\">\r\n                <i class=\"fas fa-info fa-lg m-4\"  (click)=\"_demoServices.projectsPopup(true)\" style='color:blue'></i>\r\n            </div>\r\n            <div class=' col-12 d-flex justify-content-center mt-3'>\r\n                <h4 class=\"highlight\">MIS PROYECTOS</h4>\r\n            </div>\r\n            <div  class='col-12 d-flex justify-content-center m-2 p-2 '>\r\n                <button appRole (click)='newProject() ' class='btn btn-warning highlight '>CREAR NUEVO PROYECTO</button>\r\n            </div>\r\n                <div *ngIf=\"_projectServices.projects.length > 0 \" class='scrollable' style=\"border:1px solid black;background:#F5F1E3\">\r\n                    <div *ngFor=\"let project of _projectServices.projects\">\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row text-center\">\r\n                                <div class=\"col-12 d-flex justify-content-center\">\r\n                                    <p>\r\n                                        <a (click)='toProject(project._id) '>\r\n                                            <p class=\"projectName animated tada highlight\" style='color:blue'>Navegar a {{project.name}}</p>\r\n                                        </a>\r\n                                    </p>\r\n                                </div>\r\n                                <div class=\"col-12 justify-content-center\">\r\n                                    <p>{{project.description}}</p>\r\n                                </div>\r\n                                <div class=\"col-12 justify-content-center\">\r\n                                    <button  (click)='changeProjectStatus(project._id) ' class='btn btn-warning highlight '>Activar</button>\r\n                                    <button appProjectRole (click)='changeProjectStatus(project._id) ' class='btn btn-warning highlight '>Desactivar</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <hr>\r\n                    </div>\r\n                </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-12\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/projects/mainProjects.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/projects/mainProjects.component.ts ***!
  \**********************************************************/
/*! exports provided: MainProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainProjectsComponent", function() { return MainProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modals_project_modal_project_modal_controller_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modals/project-modal/project-modal-controller.service */ "./src/app/modals/project-modal/project-modal-controller.service.ts");
/* harmony import */ var _providers_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/project.service */ "./src/app/providers/project.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_demo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/demo.service */ "./src/app/providers/demo.service.ts");
/* harmony import */ var _providers_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/user.service */ "./src/app/providers/user.service.ts");







var MainProjectsComponent = /** @class */ (function () {
    function MainProjectsComponent(_projectModalController, _projectServices, router, _demoServices, _userServices) {
        this._projectModalController = _projectModalController;
        this._projectServices = _projectServices;
        this.router = router;
        this._demoServices = _demoServices;
        this._userServices = _userServices;
        this.usersSocket = null;
        this.projectsSocket = null;
    }
    MainProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._demoServices.projectsPopup();
        this._projectServices.getProjects().subscribe(function () {
            _this.projectsSocket = _this._projectServices.projectsSocket().subscribe();
            _this.usersSocket = _this._projectServices.usersSocket().subscribe();
        });
    };
    MainProjectsComponent.prototype.toProject = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.router.navigate(['/projects', id]);
                return [2 /*return*/];
            });
        });
    };
    MainProjectsComponent.prototype.newProject = function () {
        this._projectModalController.showModal();
    };
    MainProjectsComponent.prototype.changeProjectStatus = function (id) {
        this._projectServices.changeProjectStatus(id).subscribe();
    };
    MainProjectsComponent.prototype.ngOnDestroy = function () {
        this._projectServices.projects = [];
        if (this.projectsSocket != null) {
            this.projectsSocket.unsubscribe();
        }
        if (this.usersSocket != null) {
            this.usersSocket.unsubscribe();
        }
    };
    MainProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mainProjects',
            template: __webpack_require__(/*! ./mainProjects.component.html */ "./src/app/pages/projects/mainProjects.component.html"),
            styles: [__webpack_require__(/*! ./mainProjects.component.css */ "./src/app/pages/projects/mainProjects.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_modals_project_modal_project_modal_controller_service__WEBPACK_IMPORTED_MODULE_2__["ProjectModalController"],
            _providers_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectServices"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _providers_demo_service__WEBPACK_IMPORTED_MODULE_5__["DemoService"],
            _providers_user_service__WEBPACK_IMPORTED_MODULE_6__["UserServices"]])
    ], MainProjectsComponent);
    return MainProjectsComponent;
}());



/***/ }),

/***/ "./src/app/pages/projects/project/files/files.component.css":
/*!******************************************************************!*\
  !*** ./src/app/pages/projects/project/files/files.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.imgSize{\r\n    height:110px;\r\n    width:110px\r\n}\r\n.card{\r\n    height:150px;\r\n    width:120px;\r\n}\r\n.scrollable{\r\n    height:400px\r\n}\r\n@media (min-height: 694px) {\r\n .imgSize{\r\n    height:calc(1.1*110px);\r\n    width:calc(1.1*110px)\r\n}\r\n.card{\r\n    height:calc(1.1*150px);\r\n    width:calc(1.1*120px);\r\n}\r\n.scrollable{\r\n    height:calc(1.1*400px);\r\n}\r\n}\r\n@media (min-height: 781px) {\r\n .imgSize{\r\n    height:calc(1.25*110px);\r\n    width:calc(1.25*110px)\r\n}\r\n.card{\r\n    height:calc(1.25*150px);\r\n    width:calc(1.25*120px);\r\n}\r\n.scrollable{\r\n    height:calc(1.25*400px);\r\n}\r\n}\r\n@media (min-height: 833px) {\r\n .imgSize{\r\n    height:calc(1.35*110px);\r\n    width:calc(1.35*110px)\r\n}\r\n.card{\r\n    height:calc(1.35*150px);\r\n    width:calc(1.35*120px);\r\n}\r\n.scrollable{\r\n    height:calc(1.35*400px);\r\n}\r\n}\r\n@media (min-height: 937px) {\r\n .imgSize{\r\n    height:calc(1.5*110px);\r\n    width:calc(1.5*110px)\r\n}\r\n.card{\r\n    height:calc(1.5*150px);\r\n    width:calc(1.5*120px);\r\n}\r\n.scrollable{\r\n    height:calc(1.5*400px);\r\n}\r\n}\r\n@media (min-height: 1250px) {\r\n .imgSize{\r\n    height:calc(2*110px);\r\n    width:calc(2*110px)\r\n}\r\n.card{\r\n    height:calc(2*150px);\r\n    width:calc(2*120px);\r\n}\r\n.scrollable{\r\n    height:calc(2*400px);\r\n}\r\n}\r\n@media (min-height: 1875px) {\r\n  .imgSize{\r\n    height:calc(3*110px);\r\n    width:calc(3*110px)\r\n}\r\n.card{\r\n    height:calc(3*150px);\r\n    width:calc(3*120px);\r\n}\r\n.scrollable{\r\n    height:calc(3*400px);\r\n}  \r\n}\r\n@media (min-height: 2500px) {\r\n .imgSize{\r\n    height:calc(3.9*110px);\r\n    width:calc(3.9*110px)\r\n}\r\n.card{\r\n    height:calc(3.9*150px);\r\n    width:calc(3.9*120px);\r\n}\r\n.scrollable{\r\n    height:calc(3.9*400px);\r\n}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvamVjdHMvcHJvamVjdC9maWxlcy9maWxlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGFBQWE7SUFDYixXQUFXO0NBQ2Q7QUFDRDtJQUNJLGFBQWE7SUFDYixZQUFZO0NBQ2Y7QUFFRDtJQUNJLFlBQVk7Q0FDZjtBQUVEO0NBQ0M7SUFDRyx1QkFBdUI7SUFDdkIscUJBQXFCO0NBQ3hCO0FBQ0Q7SUFDSSx1QkFBdUI7SUFDdkIsc0JBQXNCO0NBQ3pCO0FBQ0Q7SUFDSSx1QkFBdUI7Q0FDMUI7Q0FDQTtBQUVEO0NBQ0M7SUFDRyx3QkFBd0I7SUFDeEIsc0JBQXNCO0NBQ3pCO0FBQ0Q7SUFDSSx3QkFBd0I7SUFDeEIsdUJBQXVCO0NBQzFCO0FBQ0Q7SUFDSSx3QkFBd0I7Q0FDM0I7Q0FDQTtBQUVEO0NBQ0M7SUFDRyx3QkFBd0I7SUFDeEIsc0JBQXNCO0NBQ3pCO0FBQ0Q7SUFDSSx3QkFBd0I7SUFDeEIsdUJBQXVCO0NBQzFCO0FBQ0Q7SUFDSSx3QkFBd0I7Q0FDM0I7Q0FDQTtBQUVEO0NBQ0M7SUFDRyx1QkFBdUI7SUFDdkIscUJBQXFCO0NBQ3hCO0FBQ0Q7SUFDSSx1QkFBdUI7SUFDdkIsc0JBQXNCO0NBQ3pCO0FBQ0Q7SUFDSSx1QkFBdUI7Q0FDMUI7Q0FDQTtBQUVEO0NBQ0M7SUFDRyxxQkFBcUI7SUFDckIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxxQkFBcUI7SUFDckIsb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxxQkFBcUI7Q0FDeEI7Q0FDQTtBQUVEO0VBQ0U7SUFDRSxxQkFBcUI7SUFDckIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxxQkFBcUI7SUFDckIsb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxxQkFBcUI7Q0FDeEI7Q0FDQTtBQUVEO0NBQ0M7SUFDRyx1QkFBdUI7SUFDdkIscUJBQXFCO0NBQ3hCO0FBQ0Q7SUFDSSx1QkFBdUI7SUFDdkIsc0JBQXNCO0NBQ3pCO0FBQ0Q7SUFDSSx1QkFBdUI7Q0FDMUI7Q0FDQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2plY3RzL3Byb2plY3QvZmlsZXMvZmlsZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uaW1nU2l6ZXtcclxuICAgIGhlaWdodDoxMTBweDtcclxuICAgIHdpZHRoOjExMHB4XHJcbn1cclxuLmNhcmR7XHJcbiAgICBoZWlnaHQ6MTUwcHg7XHJcbiAgICB3aWR0aDoxMjBweDtcclxufVxyXG5cclxuLnNjcm9sbGFibGV7XHJcbiAgICBoZWlnaHQ6NDAwcHhcclxufVxyXG5cclxuQG1lZGlhIChtaW4taGVpZ2h0OiA2OTRweCkge1xyXG4gLmltZ1NpemV7XHJcbiAgICBoZWlnaHQ6Y2FsYygxLjEqMTEwcHgpO1xyXG4gICAgd2lkdGg6Y2FsYygxLjEqMTEwcHgpXHJcbn1cclxuLmNhcmR7XHJcbiAgICBoZWlnaHQ6Y2FsYygxLjEqMTUwcHgpO1xyXG4gICAgd2lkdGg6Y2FsYygxLjEqMTIwcHgpO1xyXG59XHJcbi5zY3JvbGxhYmxle1xyXG4gICAgaGVpZ2h0OmNhbGMoMS4xKjQwMHB4KTtcclxufVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDc4MXB4KSB7XHJcbiAuaW1nU2l6ZXtcclxuICAgIGhlaWdodDpjYWxjKDEuMjUqMTEwcHgpO1xyXG4gICAgd2lkdGg6Y2FsYygxLjI1KjExMHB4KVxyXG59XHJcbi5jYXJke1xyXG4gICAgaGVpZ2h0OmNhbGMoMS4yNSoxNTBweCk7XHJcbiAgICB3aWR0aDpjYWxjKDEuMjUqMTIwcHgpO1xyXG59XHJcbi5zY3JvbGxhYmxle1xyXG4gICAgaGVpZ2h0OmNhbGMoMS4yNSo0MDBweCk7XHJcbn1cclxufVxyXG5cclxuQG1lZGlhIChtaW4taGVpZ2h0OiA4MzNweCkge1xyXG4gLmltZ1NpemV7XHJcbiAgICBoZWlnaHQ6Y2FsYygxLjM1KjExMHB4KTtcclxuICAgIHdpZHRoOmNhbGMoMS4zNSoxMTBweClcclxufVxyXG4uY2FyZHtcclxuICAgIGhlaWdodDpjYWxjKDEuMzUqMTUwcHgpO1xyXG4gICAgd2lkdGg6Y2FsYygxLjM1KjEyMHB4KTtcclxufVxyXG4uc2Nyb2xsYWJsZXtcclxuICAgIGhlaWdodDpjYWxjKDEuMzUqNDAwcHgpO1xyXG59XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLWhlaWdodDogOTM3cHgpIHtcclxuIC5pbWdTaXple1xyXG4gICAgaGVpZ2h0OmNhbGMoMS41KjExMHB4KTtcclxuICAgIHdpZHRoOmNhbGMoMS41KjExMHB4KVxyXG59XHJcbi5jYXJke1xyXG4gICAgaGVpZ2h0OmNhbGMoMS41KjE1MHB4KTtcclxuICAgIHdpZHRoOmNhbGMoMS41KjEyMHB4KTtcclxufVxyXG4uc2Nyb2xsYWJsZXtcclxuICAgIGhlaWdodDpjYWxjKDEuNSo0MDBweCk7XHJcbn1cclxufVxyXG5cclxuQG1lZGlhIChtaW4taGVpZ2h0OiAxMjUwcHgpIHtcclxuIC5pbWdTaXple1xyXG4gICAgaGVpZ2h0OmNhbGMoMioxMTBweCk7XHJcbiAgICB3aWR0aDpjYWxjKDIqMTEwcHgpXHJcbn1cclxuLmNhcmR7XHJcbiAgICBoZWlnaHQ6Y2FsYygyKjE1MHB4KTtcclxuICAgIHdpZHRoOmNhbGMoMioxMjBweCk7XHJcbn1cclxuLnNjcm9sbGFibGV7XHJcbiAgICBoZWlnaHQ6Y2FsYygyKjQwMHB4KTtcclxufVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDE4NzVweCkge1xyXG4gIC5pbWdTaXple1xyXG4gICAgaGVpZ2h0OmNhbGMoMyoxMTBweCk7XHJcbiAgICB3aWR0aDpjYWxjKDMqMTEwcHgpXHJcbn1cclxuLmNhcmR7XHJcbiAgICBoZWlnaHQ6Y2FsYygzKjE1MHB4KTtcclxuICAgIHdpZHRoOmNhbGMoMyoxMjBweCk7XHJcbn1cclxuLnNjcm9sbGFibGV7XHJcbiAgICBoZWlnaHQ6Y2FsYygzKjQwMHB4KTtcclxufSAgXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLWhlaWdodDogMjUwMHB4KSB7XHJcbiAuaW1nU2l6ZXtcclxuICAgIGhlaWdodDpjYWxjKDMuOSoxMTBweCk7XHJcbiAgICB3aWR0aDpjYWxjKDMuOSoxMTBweClcclxufVxyXG4uY2FyZHtcclxuICAgIGhlaWdodDpjYWxjKDMuOSoxNTBweCk7XHJcbiAgICB3aWR0aDpjYWxjKDMuOSoxMjBweCk7XHJcbn1cclxuLnNjcm9sbGFibGV7XHJcbiAgICBoZWlnaHQ6Y2FsYygzLjkqNDAwcHgpO1xyXG59XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/projects/project/files/files.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/projects/project/files/files.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='row d-flex justify-content-center' style='background:#F5F1E3;display:block;height:100%'>\r\n    <div class=\"col-12 d-flex justify-content-center\" *ngIf=\"_projectServices.textFiles.length === 0\">\r\n        <h5>No hay archivos disponibles</h5>\r\n    </div>\r\n    <div class=\"col-12 d-flex flex-column justify-content-start scrollable\">   \r\n        <div class=\"row m-0 p-0 d-flex justify-content-center\">\r\n            <div *ngFor=\"let file of _projectServices.textFiles let i = index\">\r\n                <div class=\"card m-0 p-0 row d-flex flex-row\" *ngIf=\"i <= 5\">\r\n                    <div class=\"col-11 m-0 p-0\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-12\"><img (click)='showFile(file._id)' class='img-fluid imgSize'\r\n                                    [src]=\"file | imgPipe\"></div>\r\n                            <div class=\"col-12\"><small>{{file.title}}</small></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-1 m-0 p-0\" appProjectRole>\r\n                        <a (click)='deleteFile(file._id)' routerLinkActive=\"active\"><i class=\"fas fa-trash-alt\"></i></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row m-0 p-0 d-flex justify-content-center\">\r\n            <div *ngFor=\"let file of _projectServices.textFiles let i = index\">\r\n                <div class=\"card m-0 p-0 row d-flex flex-row\" *ngIf=\"i > 5 && i <= 11\">\r\n                    <div class=\"col-11 m-0 p-0\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-12\"><img (click)='showFile(file._id)' class='img-fluid imgSize'\r\n                                    [src]=\"file | imgPipe\"></div>\r\n                            <div class=\"col-12\"><small>{{file.title}}</small></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-1 m-0 p-0\" appProjectRole>\r\n                        <a (click)='deleteFile(file._id)' routerLinkActive=\"active\"><i class=\"fas fa-trash-alt\"></i></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row m-0 p-0 d-flex justify-content-center\">\r\n            <div *ngFor=\"let file of _projectServices.textFiles let i = index\">\r\n                <div class=\"card m-0 p-0 row d-flex flex-row\" *ngIf=\" i>11 && i <= 17\" >\r\n                    <div class=\"col-11 m-0 p-0\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-12\"><img (click)='showFile(file._id)' class='img-fluid imgSize'\r\n                                    [src]=\"file | imgPipe\"></div>\r\n                            <div class=\"col-12\"><small>{{file.title}}</small></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-1 m-0 p-0\" appProjectRole>\r\n                        <a (click)='deleteFile(file._id)' routerLinkActive=\"active\"><i class=\"fas fa-trash-alt\"></i></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row m-0 p-0 d-flex justify-content-center\">\r\n            <div *ngFor=\"let file of _projectServices.textFiles let i = index\">\r\n                <div class=\"card m-0 p-0 row d-flex flex-row\"*ngIf=\"i > 17 && i <= 23\">\r\n                    <div class=\"col-11 m-0 p-0\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-12\"><img (click)='showFile(file._id)' class='img-fluid imgSize'\r\n                                    [src]=\"file | imgPipe\"></div>\r\n                            <div class=\"col-12\"><small>{{file.title}}</small></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-1 m-0 p-0\" appProjectRole>\r\n                        <a (click)='deleteFile(file._id)' routerLinkActive=\"active\"><i class=\"fas fa-trash-alt\"></i></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row m-0 p-0 d-flex justify-content-center\">\r\n            <div *ngFor=\"let file of _projectServices.textFiles let i = index\">\r\n                <div class=\"card m-0 p-0 row d-flex flex-row\"  *ngIf=\"i > 23 && i <= 29\">\r\n                    <div class=\"col-11 m-0 p-0\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-12\"><img (click)='showFile(file._id)' class='img-fluid imgSize'\r\n                                    [src]=\"file | imgPipe\"></div>\r\n                            <div class=\"col-12\"><small>{{file.title}}</small></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-1 m-0 p-0\" appProjectRole>\r\n                        <a (click)='deleteFile(file._id)' routerLinkActive=\"active\"><i class=\"fas fa-trash-alt\"></i></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row m-0 p-0 d-flex justify-content-center\">\r\n            <div *ngFor=\"let file of _projectServices.textFiles let i = index\">\r\n                <div class=\"card m-0 p-0 row d-flex flex-row\" *ngIf=\"i > 29 && o <= 35\">\r\n                    <div class=\"col-11 m-0 p-0\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-12\"><img (click)='showFile(file._id)' class='img-fluid imgSize'\r\n                                    [src]=\"file | imgPipe\"></div>\r\n                            <div class=\"col-12\"><small>{{file.title}}</small></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-1 m-0 p-0\" appProjectRole>\r\n                        <a (click)='deleteFile(file._id)' routerLinkActive=\"active\"><i class=\"fas fa-trash-alt\"></i></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row m-0 p-0 d-flex justify-content-center\">\r\n            <div *ngFor=\"let file of _projectServices.textFiles let i = index\">\r\n                <div class=\"card m-0 p-0 row d-flex flex-row\" *ngIf=\"i > 35 && o <= 40\">\r\n                    <div class=\"col-11 m-0 p-0\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-12\"><img (click)='showFile(file._id)' class='img-fluid imgSize'\r\n                                    [src]=\"file | imgPipe\"></div>\r\n                            <div class=\"col-12\"><small>{{file.title}}</small></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-1 m-0 p-0\"appProjectRole>\r\n                        <a (click)='deleteFile(file._id)' routerLinkActive=\"active\"><i class=\"fas fa-trash-alt\"></i></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row m-0 p-0 d-flex justify-content-center\">\r\n            <div *ngFor=\"let file of _projectServices.textFiles let i = index\">\r\n                <div class=\"card m-0 p-0 row d-flex flex-row\" *ngIf=\"i > 40 && o <= 45\">\r\n                    <div class=\"col-11 m-0 p-0\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-12\"><img (click)='showFile(file._id)' class='img-fluid imgSize'\r\n                                    [src]=\"file | imgPipe\"></div>\r\n                            <div class=\"col-12\"><small>{{file.title}}</small></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-1 m-0 p-0\" appProjectRole>\r\n                        <a (click)='deleteFile(file._id)' routerLinkActive=\"active\"><i class=\"fas fa-trash-alt\"></i></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row m-0 p-0 d-flex justify-content-center\">\r\n            <div *ngFor=\"let file of _projectServices.textFiles let i = index\">\r\n                <div class=\"card m-0 p-0 row d-flex flex-row\" *ngIf=\"i > 45 && o <= 50\">\r\n                    <div class=\"col-11 m-0 p-0\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-12\"><img (click)='showFile(file._id)' class='img-fluid imgSize'\r\n                                    [src]=\"file | imgPipe\"></div>\r\n                            <div class=\"col-12\"><small>{{file.title}}</small></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-1 m-0 p-0\" appProjectRole>\r\n                        <a (click)='deleteFile(file._id)' routerLinkActive=\"active\"><i class=\"fas fa-trash-alt\"></i></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        \r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/projects/project/files/files.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/projects/project/files/files.component.ts ***!
  \*****************************************************************/
/*! exports provided: FilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesComponent", function() { return FilesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_files_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../providers/files.service */ "./src/app/providers/files.service.ts");
/* harmony import */ var _modals_show_files_modal_showfiles_modal_controller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../modals/show-files-modal/showfiles-modal-controller.service */ "./src/app/modals/show-files-modal/showfiles-modal-controller.service.ts");
/* harmony import */ var _providers_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../providers/project.service */ "./src/app/providers/project.service.ts");
/* harmony import */ var _providers_swal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../providers/swal.service */ "./src/app/providers/swal.service.ts");






var FilesComponent = /** @class */ (function () {
    function FilesComponent(_showFilesModalController, _projectServices, _filesServices, _swalServices) {
        this._showFilesModalController = _showFilesModalController;
        this._projectServices = _projectServices;
        this._filesServices = _filesServices;
        this._swalServices = _swalServices;
    }
    FilesComponent.prototype.showFile = function (id) {
        this._showFilesModalController.showModal(id);
        this._showFilesModalController.notification.emit();
    };
    FilesComponent.prototype.deleteFile = function (fileId) {
        var _this = this;
        this._swalServices.confirmDelete().then(function (res) {
            if (res) {
                _this._filesServices.deleteFile(fileId, _this._projectServices.projectSelectedId).subscribe();
            }
        });
    };
    FilesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-files",
            template: __webpack_require__(/*! ./files.component.html */ "./src/app/pages/projects/project/files/files.component.html"),
            styles: [__webpack_require__(/*! ./files.component.css */ "./src/app/pages/projects/project/files/files.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_modals_show_files_modal_showfiles_modal_controller_service__WEBPACK_IMPORTED_MODULE_3__["ShowFilesModalController"],
            _providers_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectServices"],
            _providers_files_service__WEBPACK_IMPORTED_MODULE_2__["FilesServices"],
            _providers_swal_service__WEBPACK_IMPORTED_MODULE_5__["SwalService"]])
    ], FilesComponent);
    return FilesComponent;
}());



/***/ }),

/***/ "./src/app/pages/projects/project/images/images.component.css":
/*!********************************************************************!*\
  !*** ./src/app/pages/projects/project/images/images.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.imgSize{\r\n    height:110px;\r\n    width:110px\r\n}\r\n\r\n.scrollable{\r\n    height:400px\r\n}\r\n\r\n@media (min-height: 694px) {\r\n .imgSize{\r\n    height:calc(1.1*110px);\r\n    width:calc(1.1*110px)\r\n}\r\n\r\n.scrollable{\r\n    height:calc(1.1*400px);\r\n}\r\n}\r\n\r\n@media (min-height: 781px) {\r\n .imgSize{\r\n    height:calc(1.25*110px);\r\n    width:calc(1.25*110px)\r\n}\r\n\r\n.scrollable{\r\n    height:calc(1.25*400px);\r\n}\r\n}\r\n\r\n@media (min-height: 833px) {\r\n .imgSize{\r\n    height:calc(1.35*110px);\r\n    width:calc(1.35*110px)\r\n}\r\n\r\n.scrollable{\r\n    height:calc(1.35*400px);\r\n}\r\n}\r\n\r\n@media (min-height: 937px) {\r\n .imgSize{\r\n    height:calc(1.5*110px);\r\n    width:calc(1.5*110px)\r\n}\r\n\r\n.scrollable{\r\n    height:calc(1.5*400px);\r\n}\r\n}\r\n\r\n@media (min-height: 1250px) {\r\n .imgSize{\r\n    height:calc(2*110px);\r\n    width:calc(2*110px)\r\n}\r\n\r\n.scrollable{\r\n    height:calc(2*400px);\r\n}\r\n}\r\n\r\n@media (min-height: 1875px) {\r\n  .imgSize{\r\n    height:calc(3*110px);\r\n    width:calc(3*110px)\r\n}\r\n\r\n.scrollable{\r\n    height:calc(3*400px);\r\n}  \r\n}\r\n\r\n@media (min-height: 2500px) {\r\n .imgSize{\r\n    height:calc(3.9*110px);\r\n    width:calc(3.9*110px)\r\n}\r\n\r\n.scrollable{\r\n    height:calc(3.9*400px);\r\n}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvamVjdHMvcHJvamVjdC9pbWFnZXMvaW1hZ2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLFlBQVk7Q0FDZjs7QUFHRDtDQUNDO0lBQ0csdUJBQXVCO0lBQ3ZCLHFCQUFxQjtDQUN4Qjs7QUFFRDtJQUNJLHVCQUF1QjtDQUMxQjtDQUNBOztBQUVEO0NBQ0M7SUFDRyx3QkFBd0I7SUFDeEIsc0JBQXNCO0NBQ3pCOztBQUVEO0lBQ0ksd0JBQXdCO0NBQzNCO0NBQ0E7O0FBRUQ7Q0FDQztJQUNHLHdCQUF3QjtJQUN4QixzQkFBc0I7Q0FDekI7O0FBRUQ7SUFDSSx3QkFBd0I7Q0FDM0I7Q0FDQTs7QUFFRDtDQUNDO0lBQ0csdUJBQXVCO0lBQ3ZCLHFCQUFxQjtDQUN4Qjs7QUFFRDtJQUNJLHVCQUF1QjtDQUMxQjtDQUNBOztBQUVEO0NBQ0M7SUFDRyxxQkFBcUI7SUFDckIsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0kscUJBQXFCO0NBQ3hCO0NBQ0E7O0FBRUQ7RUFDRTtJQUNFLHFCQUFxQjtJQUNyQixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxxQkFBcUI7Q0FDeEI7Q0FDQTs7QUFFRDtDQUNDO0lBQ0csdUJBQXVCO0lBQ3ZCLHFCQUFxQjtDQUN4Qjs7QUFFRDtJQUNJLHVCQUF1QjtDQUMxQjtDQUNBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvamVjdHMvcHJvamVjdC9pbWFnZXMvaW1hZ2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmltZ1NpemV7XHJcbiAgICBoZWlnaHQ6MTEwcHg7XHJcbiAgICB3aWR0aDoxMTBweFxyXG59XHJcblxyXG4uc2Nyb2xsYWJsZXtcclxuICAgIGhlaWdodDo0MDBweFxyXG59XHJcblxyXG5cclxuQG1lZGlhIChtaW4taGVpZ2h0OiA2OTRweCkge1xyXG4gLmltZ1NpemV7XHJcbiAgICBoZWlnaHQ6Y2FsYygxLjEqMTEwcHgpO1xyXG4gICAgd2lkdGg6Y2FsYygxLjEqMTEwcHgpXHJcbn1cclxuXHJcbi5zY3JvbGxhYmxle1xyXG4gICAgaGVpZ2h0OmNhbGMoMS4xKjQwMHB4KTtcclxufVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDc4MXB4KSB7XHJcbiAuaW1nU2l6ZXtcclxuICAgIGhlaWdodDpjYWxjKDEuMjUqMTEwcHgpO1xyXG4gICAgd2lkdGg6Y2FsYygxLjI1KjExMHB4KVxyXG59XHJcblxyXG4uc2Nyb2xsYWJsZXtcclxuICAgIGhlaWdodDpjYWxjKDEuMjUqNDAwcHgpO1xyXG59XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLWhlaWdodDogODMzcHgpIHtcclxuIC5pbWdTaXple1xyXG4gICAgaGVpZ2h0OmNhbGMoMS4zNSoxMTBweCk7XHJcbiAgICB3aWR0aDpjYWxjKDEuMzUqMTEwcHgpXHJcbn1cclxuXHJcbi5zY3JvbGxhYmxle1xyXG4gICAgaGVpZ2h0OmNhbGMoMS4zNSo0MDBweCk7XHJcbn1cclxufVxyXG5cclxuQG1lZGlhIChtaW4taGVpZ2h0OiA5MzdweCkge1xyXG4gLmltZ1NpemV7XHJcbiAgICBoZWlnaHQ6Y2FsYygxLjUqMTEwcHgpO1xyXG4gICAgd2lkdGg6Y2FsYygxLjUqMTEwcHgpXHJcbn1cclxuXHJcbi5zY3JvbGxhYmxle1xyXG4gICAgaGVpZ2h0OmNhbGMoMS41KjQwMHB4KTtcclxufVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDEyNTBweCkge1xyXG4gLmltZ1NpemV7XHJcbiAgICBoZWlnaHQ6Y2FsYygyKjExMHB4KTtcclxuICAgIHdpZHRoOmNhbGMoMioxMTBweClcclxufVxyXG5cclxuLnNjcm9sbGFibGV7XHJcbiAgICBoZWlnaHQ6Y2FsYygyKjQwMHB4KTtcclxufVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDE4NzVweCkge1xyXG4gIC5pbWdTaXple1xyXG4gICAgaGVpZ2h0OmNhbGMoMyoxMTBweCk7XHJcbiAgICB3aWR0aDpjYWxjKDMqMTEwcHgpXHJcbn1cclxuXHJcbi5zY3JvbGxhYmxle1xyXG4gICAgaGVpZ2h0OmNhbGMoMyo0MDBweCk7XHJcbn0gIFxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDI1MDBweCkge1xyXG4gLmltZ1NpemV7XHJcbiAgICBoZWlnaHQ6Y2FsYygzLjkqMTEwcHgpO1xyXG4gICAgd2lkdGg6Y2FsYygzLjkqMTEwcHgpXHJcbn1cclxuXHJcbi5zY3JvbGxhYmxle1xyXG4gICAgaGVpZ2h0OmNhbGMoMy45KjQwMHB4KTtcclxufVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/projects/project/images/images.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/projects/project/images/images.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='row d-flex justify-content-center' style='background:#F5F1E3;display:block;height:100%'>\r\n    <div class=\"col-12 d-flex justify-content-center\" *ngIf=\"_projectServices.imageFiles.length === 0\">\r\n        <h5>No hay imágenes disponibles</h5>\r\n    </div>\r\n    <div class=\"col-12 d-flex flex-column justify-content-start scrollable\">\r\n        <div class=\"row m-0 p-0 d-flex justify-content-center\">\r\n            <div *ngFor=\"let image of _projectServices.imageFiles let i=index\">\r\n                <div class=\"card m-0 p-0 row mt-2\" *ngIf=\"i <= 5\">\r\n                    <div class=\"col-11 p-0 m-0\">\r\n                        <img class='img-fluid imgSize' (click)='showFile(image._id)' [src]=\"image | imgPipe\">\r\n                    </div>\r\n                    <div appProjectRole class='col-1 p-0 m-0'>\r\n                        <a routerLinkActive=\"active\" (click)='deleteFile(image._id)'>x</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row m-0 p-0 d-flex justify-content-center\">\r\n            <div *ngFor=\"let image of _projectServices.imageFiles let i=index\">\r\n                <div class=\"card m-0 p-0 row mt-2\" *ngIf=\"i > 5 && i <= 11\">\r\n                    <div class=\"col-11 p-0 m-0\">\r\n                        <img class='img-fluid imgSize' (click)='showFile(image._id)' [src]=\"image | imgPipe\">\r\n                    </div>\r\n                    <div appProjectRole class='col-1 p-0 m-0'>\r\n                        <a routerLinkActive=\"active\" (click)='deleteFile(image._id)'>x</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row m-0 p-0 d-flex justify-content-center\">\r\n            <div *ngFor=\"let image of _projectServices.imageFiles let i=index\">\r\n                <div class=\"card m-0 p-0 row mt-2\" *ngIf=\" i>11 && i <= 17\">\r\n                    <div class=\"col-11 p-0 m-0\"> \r\n                        <img class='img-fluid imgSize' (click)='showFile(image._id)' [src]=\"image | imgPipe\">\r\n                    </div>\r\n                    <div appProjectRole class='col-1 p-0 m-0'>\r\n                        <a routerLinkActive=\"active\" (click)='deleteFile(image._id)'>x</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row m-0 p-0 d-flex justify-content-center\">\r\n            <div *ngFor=\"let image of _projectServices.imageFiles let i=index\">\r\n                <div class=\"card m-0 p-0 row mt-2\" *ngIf=\"i > 17 && i <= 23\">\r\n                    <div class=\"col-11 p-0 m-0\">\r\n                        <img class='img-fluid imgSize' (click)='showFile(image._id)' [src]=\"image | imgPipe\">\r\n                    </div>\r\n                    <div appProjectRole class='col-1 p-0 m-0'>\r\n                        <a routerLinkActive=\"active\" (click)='deleteFile(image._id)'>x</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row m-0 p-0 d-flex justify-content-center\">\r\n            <div *ngFor=\"let image of _projectServices.imageFiles let i=index\">\r\n                <div class=\"card m-0 p-0 row mt-2\" *ngIf=\"i > 23 && i <= 29\">\r\n                    <div class=\"col-11 p-0 m-0\">\r\n                        <img class='img-fluid imgSize' (click)='showFile(image._id)' [src]=\"image | imgPipe\">\r\n                    </div>\r\n                    <div appProjectRole class='col-1 p-0 m-0'>\r\n                        <a routerLinkActive=\"active\" (click)='deleteFile(image._id)'>x</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row m-0 p-0 d-flex justify-content-center\">\r\n            <div *ngFor=\"let image of _projectServices.imageFiles let i=index\">\r\n                <div class=\"card m-0 p-0 row mt-2\" *ngIf=\"i > 29 && o <= 35\">\r\n                    <div class=\"col-11 p-0 m-0\">\r\n                        <img class='img-fluid imgSize' (click)='showFile(image._id)' [src]=\"image | imgPipe\">\r\n                    </div>\r\n                    <div appProjectRole class='col-1 p-0 m-0'>\r\n                        <a routerLinkActive=\"active\" (click)='deleteFile(image._id)'>x</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/projects/project/images/images.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/projects/project/images/images.component.ts ***!
  \*******************************************************************/
/*! exports provided: ImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesComponent", function() { return ImagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modals_show_files_modal_showfiles_modal_controller_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../modals/show-files-modal/showfiles-modal-controller.service */ "./src/app/modals/show-files-modal/showfiles-modal-controller.service.ts");
/* harmony import */ var _providers_files_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../providers/files.service */ "./src/app/providers/files.service.ts");
/* harmony import */ var _providers_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../providers/project.service */ "./src/app/providers/project.service.ts");
/* harmony import */ var _providers_swal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../providers/swal.service */ "./src/app/providers/swal.service.ts");






var ImagesComponent = /** @class */ (function () {
    function ImagesComponent(_projectServices, _showFilesModalController, _filesServices, _swalServices) {
        this._projectServices = _projectServices;
        this._showFilesModalController = _showFilesModalController;
        this._filesServices = _filesServices;
        this._swalServices = _swalServices;
    }
    ImagesComponent.prototype.deleteFile = function (id) {
        var _this = this;
        this._swalServices.confirmDelete().then(function (res) {
            if (res) {
                _this._filesServices.deleteFile(id, _this._projectServices.projectSelectedId).subscribe();
            }
        });
    };
    ImagesComponent.prototype.showFile = function (id) {
        this._showFilesModalController.showModal(id);
        this._showFilesModalController.notification.emit();
    };
    ImagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-images',
            template: __webpack_require__(/*! ./images.component.html */ "./src/app/pages/projects/project/images/images.component.html"),
            styles: [__webpack_require__(/*! ./images.component.css */ "./src/app/pages/projects/project/images/images.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectServices"],
            _modals_show_files_modal_showfiles_modal_controller_service__WEBPACK_IMPORTED_MODULE_2__["ShowFilesModalController"],
            _providers_files_service__WEBPACK_IMPORTED_MODULE_3__["FilesServices"],
            _providers_swal_service__WEBPACK_IMPORTED_MODULE_5__["SwalService"]])
    ], ImagesComponent);
    return ImagesComponent;
}());



/***/ }),

/***/ "./src/app/pages/projects/project/messages/messages.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/projects/project/messages/messages.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row pt-2\" style='background:#F5F1E3;height:100%'>\r\n    <div class=\"col-12\">\r\n        <div class='col-12 scroll-box' #scroll>\r\n            <div *ngIf=\"messages.length > 0\" class='row d-flex justify-content-center'>\r\n                <button class='btn btn-warning' (click)='getMessages()' *ngIf=\"_chatServices.messagesCount > messages.length\">CARGAR MÁS</button>\r\n            </div>\r\n            <div *ngFor=\"let message of messages\">\r\n                <div class=\"card p-2\" [ngClass]=\"{'cardWithImage': message.file}\" >\r\n                    <div class=\"card-header m-0 p-0\" [ngClass]=\"{'text-right': message.user._id == _userServices.userOnline._id }\" style='background:white;border:none'>\r\n                        <strong [ngClass]=\"{'badge badge': message.user._id == _userServices.userOnline._id  , 'badge badge-warning': message.user._id != _userServices.userOnline._id  }\">{{message.user['name']}}</strong>\r\n                    </div>\r\n                    <div class=\"card-body m-0 pt-0 pb-0 \">\r\n                        <div class=\"row \" [ngClass]=\"{'justify-content-end': message.user._id == _userServices.userOnline._id }\">\r\n                            <div>\r\n                                <p>{{message.message}}</p>\r\n                            </div>\r\n                            <div class=\"col-12\"></div>\r\n                            <div *ngIf=\"message.file\">\r\n                                <img class=\"imgSize\" (click)=\"openFile(message.file['_id'])\" [src]=\"message.file|imgPipe : 'projectFiles'\" alt=\"\">\r\n                            </div>\r\n                            <div class=\"col-12\"></div>\r\n                            <div *ngIf=\"message.file\" style='border:none'>\r\n                                <span><small>{{message.file['title']}}</small></span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card-footer p-0 m-0 text-center\" style='background:white;border:none'>\r\n                        <span class='badge'>{{message.date|date:'medium'}}</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class='col-12 input-group mt-2 d-flex flex-row align-items-end' style=\"background:white\">\r\n        <div class='row' *ngIf=\"temporaryImg || fileUpload\" style='width:20%'>\r\n            <div class='col-7 p-0 m-0'>\r\n                <img  *ngIf=\"temporaryImg\" class='img-fluid imgSize m-2' [src]=\"temporaryImg | imgPipe\" alt=''>\r\n                <img   *ngIf='fileUpload' class='img-fluid imgSize m-2' [src]=\"fileUpload | imgPipe\" alt=\"\">\r\n            </div>\r\n            <div class=\"col-4 d-flex justify-content-center p-0 m-0\">\r\n                <label><input [(ngModel)]=\"download\" type=\"checkbox\">Permitir descarga</label>\r\n            </div>\r\n            <div class=\"col-1 p-0 m-0\">\r\n                <button class='btn btn-warning' (click)='fileUpload=null;temporaryImg=null'>x</button>\r\n            </div>\r\n            <div class=\"col-12\">\r\n                    <span> <small>{{fileTitle}}</small></span>\r\n            </div>\r\n            \r\n        </div>\r\n        <div [ngStyle]=\"{'width': temporaryImg || fileUpload ? '75%' : '100%'}\">\r\n            <textarea (keyup.enter)='sendMessage()' #input [(ngModel)]=\"message\" class='form-control ' value=\"\" placeholder=\"Send Message\" style=\"border: none\">\r\n            </textarea>\r\n        </div>\r\n    </div>\r\n    <div class=' col-12 input-group d-flex justify-content-around mt-2 '>\r\n        <div>\r\n            <label class=\"uploadBtnWrap bg-warning\" for=\"thefile\">\r\n                    <input enctype=\"multipart/form-data\" class='' type=\"file\" id=\"thefile\" (change)=' selectFile($event.target.files[0]) ' />\r\n                    <span class=\"btn highlight\">COMPARTIR ARCHIVO</span>\r\n                </label>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/projects/project/messages/messages.component.less":
/*!*************************************************************************!*\
  !*** ./src/app/pages/projects/project/messages/messages.component.less ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scroll-box {\n  overflow-y: scroll;\n  height: 320px;\n  padding: 1rem;\n}\n.uploadBtnWrap {\n  font-family: arial;\n  font-size: 12px;\n}\n.uploadBtnWrap .btn {\n  padding: 4px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  background: #f4f4f4;\n}\n.uploadBtnWrap input[type=\"file\"] {\n  display: none;\n}\n.cardWithImage {\n  height: 150px;\n}\n.form-control:focus {\n  border-color: white;\n  box-shadow: none;\n}\n.imgSize {\n  height: 65px;\n  width: 65px;\n}\n@media (min-height: 694px) {\n  .scroll-box {\n    height: calc(1.1*320px);\n  }\n  .imgSize {\n    height: calc(1.1*65px);\n    width: calc(1.1*65px);\n  }\n  .cardWithImage {\n    height: calc(1.1*150px);\n  }\n}\n@media (min-height: 781px) {\n  .scroll-box {\n    height: calc(1.25*320px);\n  }\n  .imgSize {\n    height: calc(1.25*65px);\n    width: calc(1.25*65px);\n  }\n  .cardWithImage {\n    height: calc(1.25*150px);\n  }\n}\n@media (min-height: 833px) {\n  .scroll-box {\n    height: calc(1.35*320px);\n  }\n  .imgSize {\n    height: calc(1.35*65px);\n    width: calc(1.35*65px);\n  }\n  .cardWithImage {\n    height: calc(1.35*150px);\n  }\n}\n@media (min-height: 937px) {\n  .scroll-box {\n    height: calc(1.5*320px);\n  }\n  .imgSize {\n    height: calc(1.5*65px);\n    width: calc(1.5*65px);\n  }\n  .cardWithImage {\n    height: calc(1.5*150px);\n  }\n}\n@media (min-height: 1250px) {\n  .scroll-box {\n    height: calc(2*320px);\n  }\n  .imgSize {\n    height: calc(2*65px);\n    width: calc(2*65px);\n  }\n  .cardWithImage {\n    height: calc(2.2*150px);\n  }\n}\n@media (min-height: 1875px) {\n  .scroll-box {\n    height: calc(3*320px);\n  }\n  .imgSize {\n    height: calc(3*65px);\n    width: calc(3*65px);\n  }\n  .cardWithImage {\n    height: calc(3.3*150px);\n  }\n}\n@media (min-height: 2500px) {\n  .scroll-box {\n    height: calc(3.9*320px);\n  }\n  .imgSize {\n    height: calc(3.9*65px);\n    width: calc(3.9*65px);\n  }\n  .cardWithImage {\n    height: calc(4.2*150px);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvamVjdHMvcHJvamVjdC9tZXNzYWdlcy9DOi9Vc2Vycy8zNDY5NS9EZXNrdG9wL0RSQUZUL0NBUkdPIE1VU0lDL0ZST05URU5EX0VTQ1VFTEEvc3JjL2FwcC9wYWdlcy9wcm9qZWN0cy9wcm9qZWN0L21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9wYWdlcy9wcm9qZWN0cy9wcm9qZWN0L21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtDQ0NIO0FER0Q7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0NDREg7QURERDtFQUlRLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7Q0NBUDtBRFBEO0VBVVEsY0FBQTtDQ0FQO0FESUQ7RUFDSSxjQUFBO0NDRkg7QURLRDtFQUNFLG9CQUFBO0VBRUEsaUJBQUE7Q0NIRDtBRE1EO0VBQ0ksYUFBQTtFQUNBLFlBQUE7Q0NKSDtBRE9EO0VBQ0M7SUFDRyx3QkFBQTtHQ0xEO0VEUUg7SUFDSSx1QkFBQTtJQUNBLHNCQUFBO0dDTkQ7RURRSDtJQUNJLHdCQUFBO0dDTkQ7Q0FDRjtBRFNEO0VBQ0M7SUFDRyx5QkFBQTtHQ1BEO0VEU0g7SUFDSSx3QkFBQTtJQUNBLHVCQUFBO0dDUEQ7RURTSDtJQUNJLHlCQUFBO0dDUEQ7Q0FDRjtBRFVEO0VBQ0M7SUFDRyx5QkFBQTtHQ1JEO0VEVUg7SUFDSSx3QkFBQTtJQUNBLHVCQUFBO0dDUkQ7RURVSDtJQUNJLHlCQUFBO0dDUkQ7Q0FDRjtBRFdEO0VBQ0U7SUFDRSx3QkFBQTtHQ1REO0VEV0g7SUFDSSx1QkFBQTtJQUNBLHNCQUFBO0dDVEQ7RURXSDtJQUNJLHdCQUFBO0dDVEQ7Q0FDRjtBRFlEO0VBQ0U7SUFDRSxzQkFBQTtHQ1ZEO0VEYUg7SUFDSSxxQkFBQTtJQUNBLG9CQUFBO0dDWEQ7RURhSDtJQUNJLHdCQUFBO0dDWEQ7Q0FDRjtBRGNEO0VBQ0k7SUFDQSxzQkFBQTtHQ1pEO0VEY0g7SUFDSSxxQkFBQTtJQUNBLG9CQUFBO0dDWkQ7RURjSDtJQUNJLHdCQUFBO0dDWkQ7Q0FDRjtBRGVEO0VBQ0U7SUFDRSx3QkFBQTtHQ2JEO0VEZUg7SUFDSSx1QkFBQTtJQUNBLHNCQUFBO0dDYkQ7RURlSDtJQUNJLHdCQUFBO0dDYkQ7Q0FDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2plY3RzL3Byb2plY3QvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xsLWJveCB7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIGhlaWdodDogMzIwcHg7XG4gICAgcGFkZGluZzogMXJlbTtcblxufVxuXG4udXBsb2FkQnRuV3JhcCB7XG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAuYnRuIHtcbiAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmNGY0ZjRcbiAgICB9XG4gICAgaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xuICAgICAgICBkaXNwbGF5OiBub25lXG4gICAgfVxufVxuXG4uY2FyZFdpdGhJbWFnZXtcbiAgICBoZWlnaHQ6MTUwcHg7XG59XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5pbWdTaXple1xuICAgIGhlaWdodDo2NXB4O1xuICAgIHdpZHRoOjY1cHhcbn1cblxuQG1lZGlhIChtaW4taGVpZ2h0OiA2OTRweCkge1xuIC5zY3JvbGwtYm94e1xuICAgIGhlaWdodDpjYWxjKDEuMSozMjBweClcbn1cblxuLmltZ1NpemV7XG4gICAgaGVpZ2h0OmNhbGMoMS4xKjY1cHgpO1xuICAgIHdpZHRoOmNhbGMoMS4xKjY1cHgpXG59XG4uY2FyZFdpdGhJbWFnZXtcbiAgICBoZWlnaHQ6Y2FsYygxLjEqMTUwcHgpO1xufVxufVxuXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDc4MXB4KSB7XG4gLnNjcm9sbC1ib3h7XG4gICAgaGVpZ2h0OmNhbGMoMS4yNSozMjBweClcbn1cbi5pbWdTaXple1xuICAgIGhlaWdodDpjYWxjKDEuMjUqNjVweCk7XG4gICAgd2lkdGg6Y2FsYygxLjI1KjY1cHgpXG59XG4uY2FyZFdpdGhJbWFnZXtcbiAgICBoZWlnaHQ6Y2FsYygxLjI1KjE1MHB4KTtcbn1cbn1cblxuQG1lZGlhIChtaW4taGVpZ2h0OiA4MzNweCkge1xuIC5zY3JvbGwtYm94e1xuICAgIGhlaWdodDpjYWxjKDEuMzUqMzIwcHgpXG59XG4uaW1nU2l6ZXtcbiAgICBoZWlnaHQ6Y2FsYygxLjM1KjY1cHgpO1xuICAgIHdpZHRoOmNhbGMoMS4zNSo2NXB4KVxufVxuLmNhcmRXaXRoSW1hZ2V7XG4gICAgaGVpZ2h0OmNhbGMoMS4zNSoxNTBweCk7XG59XG59XG5cbkBtZWRpYSAobWluLWhlaWdodDogOTM3cHgpIHtcbiAgLnNjcm9sbC1ib3h7XG4gICAgaGVpZ2h0OmNhbGMoMS41KjMyMHB4KVxufVxuLmltZ1NpemV7XG4gICAgaGVpZ2h0OmNhbGMoMS41KjY1cHgpO1xuICAgIHdpZHRoOmNhbGMoMS41KjY1cHgpXG59XG4uY2FyZFdpdGhJbWFnZXtcbiAgICBoZWlnaHQ6Y2FsYygxLjUqMTUwcHgpO1xufVxufVxuXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDEyNTBweCkge1xuICAuc2Nyb2xsLWJveHtcbiAgICBoZWlnaHQ6Y2FsYygyKjMyMHB4KVxufVxuXG4uaW1nU2l6ZXtcbiAgICBoZWlnaHQ6Y2FsYygyKjY1cHgpO1xuICAgIHdpZHRoOmNhbGMoMio2NXB4KVxufVxuLmNhcmRXaXRoSW1hZ2V7XG4gICAgaGVpZ2h0OmNhbGMoMi4yKjE1MHB4KTtcbn1cbn1cblxuQG1lZGlhIChtaW4taGVpZ2h0OiAxODc1cHgpIHtcbiAgICAuc2Nyb2xsLWJveHtcbiAgICBoZWlnaHQ6Y2FsYygzKjMyMHB4KVxufVxuLmltZ1NpemV7XG4gICAgaGVpZ2h0OmNhbGMoMyo2NXB4KTtcbiAgICB3aWR0aDpjYWxjKDMqNjVweClcbn0gXG4uY2FyZFdpdGhJbWFnZXtcbiAgICBoZWlnaHQ6Y2FsYygzLjMqMTUwcHgpO1xufVxufVxuXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDI1MDBweCkge1xuICAuc2Nyb2xsLWJveHtcbiAgICBoZWlnaHQ6Y2FsYygzLjkqMzIwcHgpXG59XG4uaW1nU2l6ZXtcbiAgICBoZWlnaHQ6Y2FsYygzLjkqNjVweCk7XG4gICAgd2lkdGg6Y2FsYygzLjkqNjVweClcbn1cbi5jYXJkV2l0aEltYWdle1xuICAgIGhlaWdodDpjYWxjKDQuMioxNTBweCk7XG59XG59XG5cbiIsIi5zY3JvbGwtYm94IHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBoZWlnaHQ6IDMyMHB4O1xuICBwYWRkaW5nOiAxcmVtO1xufVxuLnVwbG9hZEJ0bldyYXAge1xuICBmb250LWZhbWlseTogYXJpYWw7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi51cGxvYWRCdG5XcmFwIC5idG4ge1xuICBwYWRkaW5nOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcbn1cbi51cGxvYWRCdG5XcmFwIGlucHV0W3R5cGU9XCJmaWxlXCJdIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5jYXJkV2l0aEltYWdlIHtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uaW1nU2l6ZSB7XG4gIGhlaWdodDogNjVweDtcbiAgd2lkdGg6IDY1cHg7XG59XG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDY5NHB4KSB7XG4gIC5zY3JvbGwtYm94IHtcbiAgICBoZWlnaHQ6IGNhbGMoMS4xKjMyMHB4KTtcbiAgfVxuICAuaW1nU2l6ZSB7XG4gICAgaGVpZ2h0OiBjYWxjKDEuMSo2NXB4KTtcbiAgICB3aWR0aDogY2FsYygxLjEqNjVweCk7XG4gIH1cbiAgLmNhcmRXaXRoSW1hZ2Uge1xuICAgIGhlaWdodDogY2FsYygxLjEqMTUwcHgpO1xuICB9XG59XG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDc4MXB4KSB7XG4gIC5zY3JvbGwtYm94IHtcbiAgICBoZWlnaHQ6IGNhbGMoMS4yNSozMjBweCk7XG4gIH1cbiAgLmltZ1NpemUge1xuICAgIGhlaWdodDogY2FsYygxLjI1KjY1cHgpO1xuICAgIHdpZHRoOiBjYWxjKDEuMjUqNjVweCk7XG4gIH1cbiAgLmNhcmRXaXRoSW1hZ2Uge1xuICAgIGhlaWdodDogY2FsYygxLjI1KjE1MHB4KTtcbiAgfVxufVxuQG1lZGlhIChtaW4taGVpZ2h0OiA4MzNweCkge1xuICAuc2Nyb2xsLWJveCB7XG4gICAgaGVpZ2h0OiBjYWxjKDEuMzUqMzIwcHgpO1xuICB9XG4gIC5pbWdTaXplIHtcbiAgICBoZWlnaHQ6IGNhbGMoMS4zNSo2NXB4KTtcbiAgICB3aWR0aDogY2FsYygxLjM1KjY1cHgpO1xuICB9XG4gIC5jYXJkV2l0aEltYWdlIHtcbiAgICBoZWlnaHQ6IGNhbGMoMS4zNSoxNTBweCk7XG4gIH1cbn1cbkBtZWRpYSAobWluLWhlaWdodDogOTM3cHgpIHtcbiAgLnNjcm9sbC1ib3gge1xuICAgIGhlaWdodDogY2FsYygxLjUqMzIwcHgpO1xuICB9XG4gIC5pbWdTaXplIHtcbiAgICBoZWlnaHQ6IGNhbGMoMS41KjY1cHgpO1xuICAgIHdpZHRoOiBjYWxjKDEuNSo2NXB4KTtcbiAgfVxuICAuY2FyZFdpdGhJbWFnZSB7XG4gICAgaGVpZ2h0OiBjYWxjKDEuNSoxNTBweCk7XG4gIH1cbn1cbkBtZWRpYSAobWluLWhlaWdodDogMTI1MHB4KSB7XG4gIC5zY3JvbGwtYm94IHtcbiAgICBoZWlnaHQ6IGNhbGMoMiozMjBweCk7XG4gIH1cbiAgLmltZ1NpemUge1xuICAgIGhlaWdodDogY2FsYygyKjY1cHgpO1xuICAgIHdpZHRoOiBjYWxjKDIqNjVweCk7XG4gIH1cbiAgLmNhcmRXaXRoSW1hZ2Uge1xuICAgIGhlaWdodDogY2FsYygyLjIqMTUwcHgpO1xuICB9XG59XG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDE4NzVweCkge1xuICAuc2Nyb2xsLWJveCB7XG4gICAgaGVpZ2h0OiBjYWxjKDMqMzIwcHgpO1xuICB9XG4gIC5pbWdTaXplIHtcbiAgICBoZWlnaHQ6IGNhbGMoMyo2NXB4KTtcbiAgICB3aWR0aDogY2FsYygzKjY1cHgpO1xuICB9XG4gIC5jYXJkV2l0aEltYWdlIHtcbiAgICBoZWlnaHQ6IGNhbGMoMy4zKjE1MHB4KTtcbiAgfVxufVxuQG1lZGlhIChtaW4taGVpZ2h0OiAyNTAwcHgpIHtcbiAgLnNjcm9sbC1ib3gge1xuICAgIGhlaWdodDogY2FsYygzLjkqMzIwcHgpO1xuICB9XG4gIC5pbWdTaXplIHtcbiAgICBoZWlnaHQ6IGNhbGMoMy45KjY1cHgpO1xuICAgIHdpZHRoOiBjYWxjKDMuOSo2NXB4KTtcbiAgfVxuICAuY2FyZFdpdGhJbWFnZSB7XG4gICAgaGVpZ2h0OiBjYWxjKDQuMioxNTBweCk7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/projects/project/messages/messages.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/projects/project/messages/messages.component.ts ***!
  \***********************************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_message_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/message.model */ "./src/app/models/message.model.ts");
/* harmony import */ var _providers_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../providers/chat.service */ "./src/app/providers/chat.service.ts");
/* harmony import */ var _providers_files_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../providers/files.service */ "./src/app/providers/files.service.ts");
/* harmony import */ var _providers_project_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../providers/project.service */ "./src/app/providers/project.service.ts");
/* harmony import */ var _mainProjects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mainProjects.component */ "./src/app/pages/projects/mainProjects.component.ts");
/* harmony import */ var _providers_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../providers/user.service */ "./src/app/providers/user.service.ts");
/* harmony import */ var _modals_show_files_modal_showfiles_modal_controller_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../modals/show-files-modal/showfiles-modal-controller.service */ "./src/app/modals/show-files-modal/showfiles-modal-controller.service.ts");
/* harmony import */ var _project_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../project.component */ "./src/app/pages/projects/project/project.component.ts");
/* harmony import */ var _providers_swal_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../providers/swal.service */ "./src/app/providers/swal.service.ts");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");












var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(_filesServices, _chatServices, projectComponent, mainProjectsComponent, _projectServices, _userServices, _showFilesModalController, _swalServices) {
        this._filesServices = _filesServices;
        this._chatServices = _chatServices;
        this.projectComponent = projectComponent;
        this.mainProjectsComponent = mainProjectsComponent;
        this._projectServices = _projectServices;
        this._userServices = _userServices;
        this._showFilesModalController = _showFilesModalController;
        this._swalServices = _swalServices;
        this.messages = [];
        this.download = true;
        this.messagesSubscription = null;
        this.filesSubscription = null;
        this.socketSubscription = null;
        this.loading = false;
    }
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socketSubscription = this._chatServices.messagesSocket().subscribe();
        this.messagesSubscription = this._chatServices.messages$.subscribe(function (messageOrder) {
            if (messageOrder.order === 'post') {
                setTimeout(function () {
                    _this.scrollToBottom();
                });
                _this.messages.push(messageOrder.message);
            }
            else if (messageOrder.order === "delete") {
                _this.messages = _this.messages.filter(function (message) {
                    return message._id != messageOrder.message._id;
                });
            }
        });
        this.filesSubscription = this._filesServices.files$.subscribe(function (fileOrder) {
            if (fileOrder.order === "post") {
                var message = void 0;
                message = new src_app_models_message_model__WEBPACK_IMPORTED_MODULE_2__["Message"](_this._userServices.userOnline._id, _this._projectServices.projectSelectedId, _this.message, fileOrder.file._id);
                _this._chatServices.postMessage(message, _this._projectServices.projectSelectedId).subscribe();
            }
            else if (fileOrder.order === 'delete') {
                _this.messages.forEach(function (message) {
                    if (message.file) {
                        if (message.file._id === fileOrder.file._id) {
                            _this._chatServices.deleteMessage(message._id).subscribe();
                        }
                    }
                });
            }
        });
    };
    MessagesComponent.prototype.ngAfterViewInit = function () {
        this.getMessages();
    };
    MessagesComponent.prototype.getMessages = function () {
        var _this = this;
        this.checkFrom().then(function (from) {
            _this._chatServices.getMessages(_this._projectServices.projectSelectedId, from).subscribe(function (messages) {
                if (_this.messages.length === 0) {
                    _this.messages = underscore__WEBPACK_IMPORTED_MODULE_11__["sortBy"](messages, function (message) {
                        return message.date;
                    });
                    setTimeout(function () {
                        _this.scrollToBottom();
                        return;
                    });
                }
                else {
                    var percent_1 = _this.messages.length * 100 / _this._chatServices.messagesCount;
                    percent_1 = percent_1 / 100;
                    _this.messages.forEach(function (message) {
                        _this.messages.unshift(message);
                    });
                    setTimeout(function () {
                        _this.scroll.nativeElement.scrollTop = _this.scroll.nativeElement.scrollHeight * percent_1;
                        var heightPerCard = _this.scroll.nativeElement.scrollHeight / _this.messages.length;
                        _this.scroll.nativeElement.scrollTop -= heightPerCard * 3;
                    });
                }
            });
        });
    };
    MessagesComponent.prototype.checkFrom = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.messages.length === 0) {
                if (_this._chatServices.messagesCount <= 15) {
                    resolve(0);
                }
                else {
                    resolve(_this._chatServices.messagesCount - 15);
                }
            }
            else {
                if (_this._chatServices.messagesCount - _this.messages.length - 15 >= 0) {
                    resolve(_this._chatServices.messagesCount - _this.messages.length - 15);
                }
                else {
                    resolve(0);
                }
            }
        });
    };
    MessagesComponent.prototype.scrollToBottom = function () {
        this.scroll.nativeElement.scrollTop = this.scroll.nativeElement.scrollHeight;
    };
    MessagesComponent.prototype.selectFile = function (file) {
        var _this = this;
        if (!file) {
            this.imgUpload = null;
            return;
        }
        if (file.type.indexOf("pdf") >= 0) {
            this.fileTitle = file.name;
            this.fileUpload = file;
            this.imgUpload = null;
            this.temporaryImg = null;
        }
        else if (file.type.indexOf("image") >= 0) {
            this.imgUpload = file;
            this.fileTitle = file.name;
            var reader_1 = new FileReader();
            var urlImgTemp = reader_1.readAsDataURL(file);
            reader_1.onloadend = function () {
                _this.temporaryImg = reader_1.result;
            };
            this.fileUpload = null;
        }
        else {
            this._swalServices.notSupported;
        }
    };
    MessagesComponent.prototype.sendMessage = function () {
        var _this = this;
        if (this.imgUpload) {
            this._filesServices.uploadFile(this.imgUpload, "Project", this._projectServices.projectSelectedId, this.download);
            this.imgUpload = null;
            this.temporaryImg = null;
        }
        else if (this.fileUpload) {
            this._filesServices.uploadFile(this.fileUpload, "Project", this._projectServices.projectSelectedId, this.download);
            this.fileUpload = null;
        }
        else {
            if (this.message.trim().length > 0) {
                var message = new src_app_models_message_model__WEBPACK_IMPORTED_MODULE_2__["Message"](this._userServices.userOnline._id, this._projectServices.projectSelectedId, this.message);
                this._chatServices.postMessage(message, this._projectServices.projectSelectedId).subscribe(function () {
                    _this.message = '';
                });
            }
            else {
                return;
            }
        }
    };
    MessagesComponent.prototype.openFile = function (id) {
        this._showFilesModalController.showModal(id);
        this._showFilesModalController.notification.emit();
    };
    MessagesComponent.prototype.ngOnDestroy = function () {
        this.filesSubscription.unsubscribe();
        this.messagesSubscription.unsubscribe();
        this.socketSubscription.unsubscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("scroll"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MessagesComponent.prototype, "scroll", void 0);
    MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-messages",
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/pages/projects/project/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.less */ "./src/app/pages/projects/project/messages/messages.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_files_service__WEBPACK_IMPORTED_MODULE_4__["FilesServices"],
            _providers_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatServices"],
            _project_component__WEBPACK_IMPORTED_MODULE_9__["ProjectComponent"],
            _mainProjects_component__WEBPACK_IMPORTED_MODULE_6__["MainProjectsComponent"],
            _providers_project_service__WEBPACK_IMPORTED_MODULE_5__["ProjectServices"],
            _providers_user_service__WEBPACK_IMPORTED_MODULE_7__["UserServices"],
            _modals_show_files_modal_showfiles_modal_controller_service__WEBPACK_IMPORTED_MODULE_8__["ShowFilesModalController"],
            _providers_swal_service__WEBPACK_IMPORTED_MODULE_10__["SwalService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/pages/projects/project/project-events/project-events.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/projects/project/project-events/project-events.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style='background: #F5F1E3;height:100%'>\r\n    <div class='col-12' *ngIf=\"events.length > 0\">\r\n        <table class='table scrollableTable'>\r\n            <thead>\r\n                <tr>\r\n                    <th>Nombre</th>\r\n                    <th>Descripción</th>\r\n                    <th>Fecha de inicio</th>\r\n                    <th>Fecha de finalización</th>\r\n                    <th>Horario:</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let event of events\">\r\n                    <td><a style='color:blue' routerLinkActive=\"active\" (click)='toEvent(event.startDate)'>{{event.name}}</a></td>\r\n                    <td>\r\n                        {{event.description}}\r\n                    </td>\r\n                    <td>{{event.startDate | date}}</td>\r\n                    <td>{{event.endDate | date}}</td>\r\n                    <td>{{event.position | timeConversor2: null }} - {{event.position | timeConversor2: event.duration }} </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <div class='col-12 text-center' *ngIf=\"events.length === 0\">\r\n        <h5>No hay eventos asignados</h5>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/projects/project/project-events/project-events.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/projects/project/project-events/project-events.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scrollableTable tbody {\n  height: 400px; }\n\n@media (min-height: 694px) {\n  .scrollableTable tbody {\n    height: calc(1.1*400px); } }\n\n@media (min-height: 781px) {\n  .scrollableTable tbody {\n    height: calc(1.25*400px); } }\n\n@media (min-height: 833px) {\n  .scrollableTable tbody {\n    height: calc(1.35*400px); } }\n\n@media (min-height: 937px) {\n  .scrollableTable tbody {\n    height: calc(1.5*400px); } }\n\n@media (min-height: 1250px) {\n  .scrollableTable tbody {\n    height: calc(2*400px); } }\n\n@media (min-height: 1875px) {\n  .scrollableTable tbody {\n    height: calc(3*400px); } }\n\n@media (min-height: 2500px) {\n  .scrollableTable tbody {\n    height: calc(3.9*400px); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvamVjdHMvcHJvamVjdC9wcm9qZWN0LWV2ZW50cy9DOlxcVXNlcnNcXDM0Njk1XFxEZXNrdG9wXFxEUkFGVFxcQ0FSR08gTVVTSUNcXEZST05URU5EX0VTQ1VFTEEvc3JjXFxhcHBcXHBhZ2VzXFxwcm9qZWN0c1xccHJvamVjdFxccHJvamVjdC1ldmVudHNcXHByb2plY3QtZXZlbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssY0FBYSxFQUNqQjs7QUFHRDtFQUNDO0lBQ0ksd0JBQXNCLEVBQzFCLEVBQUE7O0FBR0Q7RUFDQztJQUNJLHlCQUF1QixFQUMzQixFQUFBOztBQUdEO0VBQ0M7SUFDSSx5QkFBdUIsRUFDM0IsRUFBQTs7QUFHRDtFQUNDO0lBQ0ksd0JBQXNCLEVBQzFCLEVBQUE7O0FBR0Q7RUFDQztJQUNJLHNCQUFvQixFQUN4QixFQUFBOztBQUdEO0VBQ0c7SUFDRSxzQkFBb0IsRUFDeEIsRUFBQTs7QUFHRDtFQUNDO0lBQ0ksd0JBQXNCLEVBQzFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9qZWN0cy9wcm9qZWN0L3Byb2plY3QtZXZlbnRzL3Byb2plY3QtZXZlbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcm9sbGFibGVUYWJsZSB0Ym9keSB7XHJcbiAgICAgaGVpZ2h0OiA0MDBweDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWluLWhlaWdodDogNjk0cHgpIHtcclxuIC5zY3JvbGxhYmxlVGFibGUgdGJvZHkge1xyXG4gICAgIGhlaWdodDpjYWxjKDEuMSo0MDBweCk7XHJcbn1cclxufVxyXG5cclxuQG1lZGlhIChtaW4taGVpZ2h0OiA3ODFweCkge1xyXG4gLnNjcm9sbGFibGVUYWJsZSB0Ym9keSB7XHJcbiAgICAgaGVpZ2h0OmNhbGMoMS4yNSo0MDBweCk7XHJcbn1cclxufVxyXG5cclxuQG1lZGlhIChtaW4taGVpZ2h0OiA4MzNweCkge1xyXG4gLnNjcm9sbGFibGVUYWJsZSB0Ym9keSB7XHJcbiAgICAgaGVpZ2h0OmNhbGMoMS4zNSo0MDBweCk7XHJcbn1cclxufVxyXG5cclxuQG1lZGlhIChtaW4taGVpZ2h0OiA5MzdweCkge1xyXG4gLnNjcm9sbGFibGVUYWJsZSB0Ym9keSB7XHJcbiAgICAgaGVpZ2h0OmNhbGMoMS41KjQwMHB4KTtcclxufVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDEyNTBweCkge1xyXG4gLnNjcm9sbGFibGVUYWJsZSB0Ym9keSB7XHJcbiAgICAgaGVpZ2h0OmNhbGMoMio0MDBweCk7XHJcbn1cclxufVxyXG5cclxuQG1lZGlhIChtaW4taGVpZ2h0OiAxODc1cHgpIHtcclxuICAgLnNjcm9sbGFibGVUYWJsZSB0Ym9keSB7XHJcbiAgICAgaGVpZ2h0OmNhbGMoMyo0MDBweCk7XHJcbn0gXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLWhlaWdodDogMjUwMHB4KSB7XHJcbiAuc2Nyb2xsYWJsZVRhYmxlIHRib2R5IHtcclxuICAgICBoZWlnaHQ6Y2FsYygzLjkqNDAwcHgpO1xyXG59XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/projects/project/project-events/project-events.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/projects/project/project-events/project-events.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ProjectEventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectEventsComponent", function() { return ProjectEventsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_calendar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../providers/calendar.service */ "./src/app/providers/calendar.service.ts");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var _providers_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../providers/project.service */ "./src/app/providers/project.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ProjectEventsComponent = /** @class */ (function () {
    function ProjectEventsComponent(_calendarServices, _projectServices, router) {
        this._calendarServices = _calendarServices;
        this._projectServices = _projectServices;
        this.router = router;
        this.events = [];
    }
    ProjectEventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._calendarServices.getEventsInProject(this._projectServices.projectSelectedId).subscribe(function (events) {
            _this.events = events;
            _this.events = underscore__WEBPACK_IMPORTED_MODULE_3__["sortBy"](_this.events, function (event) {
                return event.startDate;
            });
        });
    };
    ProjectEventsComponent.prototype.toEvent = function (date) {
        var _this = this;
        date = new Date(date);
        if (date.getTime() < new Date().getTime()) {
            date = new Date();
        }
        date = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 6, 0, 0, 0);
        this._calendarServices.getDayByDate(date.getTime()).subscribe(function (res) {
            _this._calendarServices.getWeekByDay(_this._calendarServices.currentDay._id, new Date(_this._calendarServices.currentDay.date).getDay()).subscribe(function () {
                _this.router.navigate(['/calendar', _this._calendarServices.currentWeek._id, _this._calendarServices.currentDay._id]).then(function () {
                });
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ProjectEventsComponent.prototype, "projectId", void 0);
    ProjectEventsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-project-events",
            template: __webpack_require__(/*! ./project-events.component.html */ "./src/app/pages/projects/project/project-events/project-events.component.html"),
            styles: [__webpack_require__(/*! ./project-events.component.scss */ "./src/app/pages/projects/project/project-events/project-events.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_calendar_service__WEBPACK_IMPORTED_MODULE_2__["CalendarService"],
            _providers_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectServices"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ProjectEventsComponent);
    return ProjectEventsComponent;
}());



/***/ }),

/***/ "./src/app/pages/projects/project/project.component.css":
/*!**************************************************************!*\
  !*** ./src/app/pages/projects/project/project.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user {\r\n    background: #1F0968;\r\n    color: white;\r\n    border: 1px solid black;\r\n    cursor: pointer;\r\n}\r\n\r\n.imgSize{\r\n   height:65px;\r\n   width:65px\r\n}\r\n\r\n.projectBottomFrame{\r\n    height:480px\r\n}\r\n\r\n.scrollableTable tbody{\r\n height:350px\r\n}\r\n\r\n@media (min-height: 694px) {\r\n     .projectBottomFrame{\r\n    height:calc(1.1*480px)\r\n}\r\n\r\n.scrollableTable tbody{\r\n height:calc(1.1*350px)\r\n}\r\n.imgSize{\r\n   height:calc(1.1*65px);\r\n   width:calc(1.1*65px)\r\n}\r\n\r\n}\r\n\r\n@media (min-height: 781px) {\r\n .projectBottomFrame{\r\n    height:calc(1.25*480px)\r\n}\r\n\r\n.scrollableTable tbody{\r\n height:calc(1.25*350px)\r\n}\r\n.imgSize{\r\n   height:calc(1.25*65px); \r\n   width:calc(1.25*65px)\r\n}\r\n}\r\n\r\n@media (min-height: 833px) {\r\n .projectBottomFrame{\r\n    height:calc(1.35*480px)\r\n}\r\n\r\n.scrollableTable tbody{\r\n height:calc(1.35*350px)\r\n}\r\n.imgSize{\r\n   height:calc(1.35*65px);\r\n   width:calc(1.35*65px)\r\n}\r\n}\r\n\r\n@media (min-height: 937px) {\r\n .projectBottomFrame{\r\n    height:calc(1.5*480px)\r\n}\r\n\r\n.scrollableTable tbody{\r\n height:calc(1.5*350px)\r\n}\r\n.imgSize{\r\n   height:calc(1.5*65px);\r\n   width:calc(1.5*65px)\r\n}\r\n}\r\n\r\n@media (min-height: 1250px) {\r\n .projectBottomFrame{\r\n    height:calc(2*480px)\r\n}\r\n\r\n.scrollableTable tbody{\r\n height:calc(2*350px)\r\n}\r\n.imgSize{\r\n   height:calc(2*65px);\r\n   width:calc(2*65px)\r\n}\r\n}\r\n\r\n@media (min-height: 1875px) {\r\n   .projectBottomFrame{\r\n    height:calc(3*480px)\r\n}\r\n\r\n.scrollableTable tbody{\r\n height:calc(3*350px)\r\n}\r\n.imgSize{\r\n   height:calc(3*65px);\r\n   width:calc(3*65px)\r\n} \r\n}\r\n\r\n@media (min-height: 2500px) {\r\n .projectBottomFrame{\r\n    height:calc(3.9*480px)\r\n}\r\n\r\n.scrollableTable tbody{\r\n height:calc(3.9*350px)\r\n}\r\n.imgSize{\r\n   height:calc(3.9*65px);\r\n   width:calc(3.9*65px)\r\n}\r\n}\r\n\r\n\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvamVjdHMvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixnQkFBZ0I7Q0FDbkI7O0FBRUQ7R0FDRyxZQUFZO0dBQ1osVUFBVTtDQUNaOztBQUVEO0lBQ0ksWUFBWTtDQUNmOztBQUdEO0NBQ0MsWUFBWTtDQUNaOztBQUVEO0tBQ0s7SUFDRCxzQkFBc0I7Q0FDekI7O0FBRUQ7Q0FDQyxzQkFBc0I7Q0FDdEI7QUFDRDtHQUNHLHNCQUFzQjtHQUN0QixvQkFBb0I7Q0FDdEI7O0NBRUE7O0FBRUQ7Q0FDQztJQUNHLHVCQUF1QjtDQUMxQjs7QUFFRDtDQUNDLHVCQUF1QjtDQUN2QjtBQUNEO0dBQ0csdUJBQXVCO0dBQ3ZCLHFCQUFxQjtDQUN2QjtDQUNBOztBQUVEO0NBQ0M7SUFDRyx1QkFBdUI7Q0FDMUI7O0FBRUQ7Q0FDQyx1QkFBdUI7Q0FDdkI7QUFDRDtHQUNHLHVCQUF1QjtHQUN2QixxQkFBcUI7Q0FDdkI7Q0FDQTs7QUFFRDtDQUNDO0lBQ0csc0JBQXNCO0NBQ3pCOztBQUVEO0NBQ0Msc0JBQXNCO0NBQ3RCO0FBQ0Q7R0FDRyxzQkFBc0I7R0FDdEIsb0JBQW9CO0NBQ3RCO0NBQ0E7O0FBRUQ7Q0FDQztJQUNHLG9CQUFvQjtDQUN2Qjs7QUFFRDtDQUNDLG9CQUFvQjtDQUNwQjtBQUNEO0dBQ0csb0JBQW9CO0dBQ3BCLGtCQUFrQjtDQUNwQjtDQUNBOztBQUVEO0dBQ0c7SUFDQyxvQkFBb0I7Q0FDdkI7O0FBRUQ7Q0FDQyxvQkFBb0I7Q0FDcEI7QUFDRDtHQUNHLG9CQUFvQjtHQUNwQixrQkFBa0I7Q0FDcEI7Q0FDQTs7QUFFRDtDQUNDO0lBQ0csc0JBQXNCO0NBQ3pCOztBQUVEO0NBQ0Msc0JBQXNCO0NBQ3RCO0FBQ0Q7R0FDRyxzQkFBc0I7R0FDdEIsb0JBQW9CO0NBQ3RCO0NBQ0EiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9qZWN0cy9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyIHtcclxuICAgIGJhY2tncm91bmQ6ICMxRjA5Njg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmltZ1NpemV7XHJcbiAgIGhlaWdodDo2NXB4O1xyXG4gICB3aWR0aDo2NXB4XHJcbn1cclxuXHJcbi5wcm9qZWN0Qm90dG9tRnJhbWV7XHJcbiAgICBoZWlnaHQ6NDgwcHhcclxufVxyXG5cclxuXHJcbi5zY3JvbGxhYmxlVGFibGUgdGJvZHl7XHJcbiBoZWlnaHQ6MzUwcHhcclxufVxyXG5cclxuQG1lZGlhIChtaW4taGVpZ2h0OiA2OTRweCkge1xyXG4gICAgIC5wcm9qZWN0Qm90dG9tRnJhbWV7XHJcbiAgICBoZWlnaHQ6Y2FsYygxLjEqNDgwcHgpXHJcbn1cclxuXHJcbi5zY3JvbGxhYmxlVGFibGUgdGJvZHl7XHJcbiBoZWlnaHQ6Y2FsYygxLjEqMzUwcHgpXHJcbn1cclxuLmltZ1NpemV7XHJcbiAgIGhlaWdodDpjYWxjKDEuMSo2NXB4KTtcclxuICAgd2lkdGg6Y2FsYygxLjEqNjVweClcclxufVxyXG5cclxufVxyXG5cclxuQG1lZGlhIChtaW4taGVpZ2h0OiA3ODFweCkge1xyXG4gLnByb2plY3RCb3R0b21GcmFtZXtcclxuICAgIGhlaWdodDpjYWxjKDEuMjUqNDgwcHgpXHJcbn1cclxuXHJcbi5zY3JvbGxhYmxlVGFibGUgdGJvZHl7XHJcbiBoZWlnaHQ6Y2FsYygxLjI1KjM1MHB4KVxyXG59XHJcbi5pbWdTaXple1xyXG4gICBoZWlnaHQ6Y2FsYygxLjI1KjY1cHgpOyBcclxuICAgd2lkdGg6Y2FsYygxLjI1KjY1cHgpXHJcbn1cclxufVxyXG5cclxuQG1lZGlhIChtaW4taGVpZ2h0OiA4MzNweCkge1xyXG4gLnByb2plY3RCb3R0b21GcmFtZXtcclxuICAgIGhlaWdodDpjYWxjKDEuMzUqNDgwcHgpXHJcbn1cclxuXHJcbi5zY3JvbGxhYmxlVGFibGUgdGJvZHl7XHJcbiBoZWlnaHQ6Y2FsYygxLjM1KjM1MHB4KVxyXG59XHJcbi5pbWdTaXple1xyXG4gICBoZWlnaHQ6Y2FsYygxLjM1KjY1cHgpO1xyXG4gICB3aWR0aDpjYWxjKDEuMzUqNjVweClcclxufVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDkzN3B4KSB7XHJcbiAucHJvamVjdEJvdHRvbUZyYW1le1xyXG4gICAgaGVpZ2h0OmNhbGMoMS41KjQ4MHB4KVxyXG59XHJcblxyXG4uc2Nyb2xsYWJsZVRhYmxlIHRib2R5e1xyXG4gaGVpZ2h0OmNhbGMoMS41KjM1MHB4KVxyXG59XHJcbi5pbWdTaXple1xyXG4gICBoZWlnaHQ6Y2FsYygxLjUqNjVweCk7XHJcbiAgIHdpZHRoOmNhbGMoMS41KjY1cHgpXHJcbn1cclxufVxyXG5cclxuQG1lZGlhIChtaW4taGVpZ2h0OiAxMjUwcHgpIHtcclxuIC5wcm9qZWN0Qm90dG9tRnJhbWV7XHJcbiAgICBoZWlnaHQ6Y2FsYygyKjQ4MHB4KVxyXG59XHJcblxyXG4uc2Nyb2xsYWJsZVRhYmxlIHRib2R5e1xyXG4gaGVpZ2h0OmNhbGMoMiozNTBweClcclxufVxyXG4uaW1nU2l6ZXtcclxuICAgaGVpZ2h0OmNhbGMoMio2NXB4KTtcclxuICAgd2lkdGg6Y2FsYygyKjY1cHgpXHJcbn1cclxufVxyXG5cclxuQG1lZGlhIChtaW4taGVpZ2h0OiAxODc1cHgpIHtcclxuICAgLnByb2plY3RCb3R0b21GcmFtZXtcclxuICAgIGhlaWdodDpjYWxjKDMqNDgwcHgpXHJcbn1cclxuXHJcbi5zY3JvbGxhYmxlVGFibGUgdGJvZHl7XHJcbiBoZWlnaHQ6Y2FsYygzKjM1MHB4KVxyXG59XHJcbi5pbWdTaXple1xyXG4gICBoZWlnaHQ6Y2FsYygzKjY1cHgpO1xyXG4gICB3aWR0aDpjYWxjKDMqNjVweClcclxufSBcclxufVxyXG5cclxuQG1lZGlhIChtaW4taGVpZ2h0OiAyNTAwcHgpIHtcclxuIC5wcm9qZWN0Qm90dG9tRnJhbWV7XHJcbiAgICBoZWlnaHQ6Y2FsYygzLjkqNDgwcHgpXHJcbn1cclxuXHJcbi5zY3JvbGxhYmxlVGFibGUgdGJvZHl7XHJcbiBoZWlnaHQ6Y2FsYygzLjkqMzUwcHgpXHJcbn1cclxuLmltZ1NpemV7XHJcbiAgIGhlaWdodDpjYWxjKDMuOSo2NXB4KTtcclxuICAgd2lkdGg6Y2FsYygzLjkqNjVweClcclxufVxyXG59XHJcblxyXG5cclxuICJdfQ== */"

/***/ }),

/***/ "./src/app/pages/projects/project/project.component.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/projects/project/project.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div *ngIf=\"page && _projectServices.projectSelectedId\" class=\"row animated fadeIn\" style='background-color: #DCD4D2;width:100%'>\r\n        <div class=' col-12 nav justify-content-around align-items-center p-2 ' style='background:#F0B841;color:black;width:100% '>\r\n            <div>\r\n                <a class='dropdown-toggle dropdown-toggle-split highlight' id='dp-proyectos' data-toggle=\"dropdown\">MIS PROYECTOS</a>\r\n                <div *ngIf=\"_projectServices.projects.length > 1\" class=\"dropdown-menu\" aria-labelledby=\"dp-proyectos\">\r\n                    <div *ngFor=\"let oneProject of _projectServices.projects\">\r\n                        <a *ngIf=\"oneProject._id != _projectServices.projectSelectedId\" (click)='toOtherProject(oneProject._id)' routerLinkActive=\"router-link-active\" class='dropdown-item highlight'>{{oneProject.name}}</a>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"_projectServices.projects.length == 1\" class=\"dropdown-menu\" aria-labelledby=\"dp-proyectos\">\r\n                    <div>\r\n                        <a class='dropdown-item highlight'>No participas en ningún otro proyecto</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div>\r\n                <a class=\"highlight\" [routerLink]=\"['/projects']\" (click)='this._projectServices.projectSelectedId=undefined' routerLinkActive=\"router-link-active\" routerLinkActive=\"router-link-active\" [routerLinkActive]>IR A MIS PROYECTOS</a>\r\n            </div>\r\n            <div>\r\n                <a class='dropdown-toggle dropdown-toggle-split highlight' id='dp-config' data-toggle=\"dropdown\">CONFIGURACION</a>\r\n                <div class=\"dropdown-menu\" aria-labelledby=\"dp-config\">\r\n\r\n                    <div appProjectRole>\r\n                        <a (click)=\"putProject(_projectServices.projectSelectedId)\" routerLinkActive=\"router-link-active\" class='dropdown-item highlight'>EDITAR PROYECTO</a>\r\n                    </div>\r\n                    <div appProjectRole>\r\n                        <a (click)='addAdmin()' routerLinkActive=\"router-link-active\" class='dropdown-item highlight'>AÑADIR ADMINISTRADOR</a>\r\n                    </div>\r\n                    <div *ngIf=\"_projectServices.participants.length > 1\">\r\n                        <a (click)='getOut()' routerLinkActive=\"router-link-active\" class='dropdown-item highlight'>SALIR DE PROYECTO</a>\r\n                    </div>\r\n                    <div appProjectRole>\r\n                        <a (click)='deleteProject(_projectServices.projectSelectedId)' routerLinkActive=\"router-link-active\" class='dropdown-item highlight'>ELIMINAR PROYECTO</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12\" >\r\n            <div class=\"row \">\r\n                <div class=\"col-12\" style='background:black;color:white '>\r\n                    <div class=\"row\">\r\n                        <div class='col-1 m-0 p-0 d-flex justify-content-center align-items-center animated shake'>\r\n                            <i (click)=\"_demoServices.oneProjectPopup(true)\"\r\n                                class=\"fas fa-info fa-lg\" style=\"color:#F0B841\"></i>\r\n                        </div>\r\n                        <div class='col-10 m-0 p-0 '>\r\n                            <h5 class='text-center highlight'>{{_projectServices.name}}</h5>\r\n                        </div>\r\n                        <div class='col-1 m-0 p-0 d-flex align-items-center'>\r\n                            <span appProjectRole *ngIf=\"_projectServices.status\"\r\n                                style='cursor: pointer; color:black' class='bg-warning highlight'\r\n                                (click)='changeProjectStatus()'>Activo</span>\r\n                            <span\r\n                                appProjectRole *ngIf=\"!_projectServices.status\"\r\n                                style='cursor: pointer; color:black' class='bg-warning highlight'\r\n                                (click)='changeProjectStatus()'>Inactivo</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-9 projectBottomFrame \">\r\n                    <div class=\"row mb-2\">\r\n                        <div class=\"col-12\">\r\n                            <nav class=\"navbar navbar-expand-lg navbar-light\" style=\"background:#F0B841;color:black\">\r\n                                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\r\n                                    aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                                    <span class=\"navbar-toggler-icon\"></span>\r\n                                </button>\r\n                                <div class=\"collapse navbar-collapse justify-content-around\" id=\"navbarNav\">\r\n            \r\n                                    <div>\r\n                                        <a class=\"highlight\" (click)=\"switchPage('chat')\">CHAT</a>\r\n                                    </div>\r\n                                    <div>\r\n                                        <a class=\"highlight\" (click)=\"switchPage('images')\">IMAGENES</a>\r\n                                    </div>\r\n                                    <div>\r\n                                        <a class=\"highlight\" (click)=\"switchPage('files')\">ARCHIVOS</a>\r\n                                    </div>\r\n                                    <div>\r\n                                        <a class=\"highlight\" (click)=\"switchPage('tasks')\">TAREAS</a>\r\n                                    </div>\r\n                                    <div>\r\n                                        <a class=\"highlight\" (click)=\"switchPage('events')\">EVENTOS</a>\r\n                                    </div>\r\n                                </div>\r\n                            </nav>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-12 mt-3\" style='background:#DCD4D2;border:1px solid #F0B841;height:100%'>\r\n                        <app-messages *ngIf=\"page === 'chat'\"></app-messages>\r\n                        <app-images *ngIf=\"page === 'images'\"></app-images>\r\n                        <app-files *ngIf=\"page === 'files'\"></app-files>\r\n                        <app-project-events *ngIf=\"page === 'events'\"></app-project-events>\r\n                        <app-tasks *ngIf=\"page === 'tasks'\"></app-tasks>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-3 pl-0\">\r\n                    <div class=\"row\">\r\n                        <div *ngIf=\"_projectServices.description\" class=\"col-12\">\r\n                            <h5 class='text-center highlight'>Descripción del proyecto:</h5>\r\n                            <p>{{_projectServices.description}}</p>\r\n                        </div>\r\n                        <div class='col-12'>\r\n                            <div class=\"d-flex justify-content-center\">\r\n                                <h5 class='text-center highlight'>PARTICIPANTES:</h5>\r\n                            </div>\r\n                            <div class='col-12' style=\"border:1px solid black;background:#F5F1E3\">\r\n                                <table class='table scrollableTable'>\r\n                                    <thead>                                        \r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let user of _projectServices.participants\">\r\n                                            <td class=\"p-0\" style=\"width:40%\">\r\n                                                <img class=\"imgSize img-fluid\" [src]=\"user.img | imgPipe\" alt=\"\">\r\n                                            </td>\r\n                                            <td style=\"width:30%\">\r\n                                                <p>{{user.name}}</p>\r\n                                            </td>\r\n                                            <td style=\"width:15%\" >\r\n                                                <i *ngIf=\"user.connected\" class=\"fas fa-eye\"></i>\r\n                                            </td>\r\n                                            <td style=\"width:15%\">\r\n                                                <p><button appProjectRole\r\n                                                        *ngIf=\" _userServices.userOnline._id != user._id\"\r\n                                                        (click)=\"removeParticipant(user._id)\" class='btn btn-danger'>X</button></p>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                            <div appProjectRole\r\n                                class='d-flex justify-content-center mt-2 '>\r\n                                <button (click)='addParticipant()' class='btn btn-warning highlight'>Añadir participante</button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-12\">\r\n                            * Por el momento, solo se permite el intercambios de archivos con formato: 'png', 'jpg', 'gif', 'jpeg' y\r\n                            'pdf'.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <hr>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/projects/project/project.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/projects/project/project.component.ts ***!
  \*************************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/project.service */ "./src/app/providers/project.service.ts");
/* harmony import */ var src_app_providers_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/user.service */ "./src/app/providers/user.service.ts");
/* harmony import */ var _modals_project_modal_project_modal_controller_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../modals/project-modal/project-modal-controller.service */ "./src/app/modals/project-modal/project-modal-controller.service.ts");
/* harmony import */ var src_app_modals_upload_files_modal_upload_files_modal_controller_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modals/upload-files-modal/upload-files-modal-controller.service */ "./src/app/modals/upload-files-modal/upload-files-modal-controller.service.ts");
/* harmony import */ var _modals_users_modal_userModalController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../modals/users-modal/userModalController */ "./src/app/modals/users-modal/userModalController.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mainProjects_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../mainProjects.component */ "./src/app/pages/projects/mainProjects.component.ts");
/* harmony import */ var src_app_providers_files_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/providers/files.service */ "./src/app/providers/files.service.ts");
/* harmony import */ var src_app_providers_demo_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/providers/demo.service */ "./src/app/providers/demo.service.ts");
/* harmony import */ var src_app_providers_tasks_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/providers/tasks.service */ "./src/app/providers/tasks.service.ts");













var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(_userServices, router, mainProjectsComponent, _projectServices, _projectModalController, _usersModalController, ar, _uploadFilesModalController, _filesService, _demoServices, _taskServices) {
        this._userServices = _userServices;
        this.router = router;
        this.mainProjectsComponent = mainProjectsComponent;
        this._projectServices = _projectServices;
        this._projectModalController = _projectModalController;
        this._usersModalController = _usersModalController;
        this.ar = ar;
        this._uploadFilesModalController = _uploadFilesModalController;
        this._filesService = _filesService;
        this._demoServices = _demoServices;
        this._taskServices = _taskServices;
        this.filesSocket = null;
        this.filesSubscription = null;
        this.usersSocket = null;
        this.tasksSocket = null;
        this.userOnline = this._userServices.userOnline;
    }
    ProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._demoServices.oneProjectPopup();
        this.usersSocket = this._projectServices.usersConnected().subscribe();
        this.ar.params.subscribe(function (params) {
            _this._projectServices.getProjectById(params['id']).subscribe(function () {
                _this._projectServices.userIn();
                _this.page = 'chat';
                _this._projectServices.projectSelectedId = params['id'];
            });
        });
        this.filesSocket = this._filesService.filesSocket().subscribe();
        this.filesSubscription = this._filesService.files$.subscribe(function (fileOrder) {
            if (fileOrder.order === 'delete') {
                if (_this._filesService.textFormats.indexOf(fileOrder.file['format']) >= 0) {
                    _this._projectServices.textFiles = _this._projectServices.textFiles.filter(function (file) { return file._id != fileOrder.file._id; });
                }
                else if (_this._filesService.imgFormats.indexOf(fileOrder.file['format']) >= 0) {
                    _this._projectServices.imageFiles = _this._projectServices.imageFiles.filter(function (file) { return file._id != fileOrder.file._id; });
                }
            }
            else if (fileOrder.order === 'post') {
                if (_this._filesService.textFormats.indexOf(fileOrder.file['format']) >= 0) {
                    _this._projectServices.textFiles.push(fileOrder.file);
                }
                else if (_this._filesService.imgFormats.indexOf(fileOrder.file['format']) >= 0) {
                    _this._projectServices.imageFiles.push(fileOrder.file);
                }
            }
            else if (fileOrder.order === 'push') {
                if (_this._filesService.textFormats.indexOf(fileOrder.file['format']) >= 0) {
                    _this._projectServices.textFiles.push(fileOrder.file);
                }
                else if (_this._filesService.imgFormats.indexOf(fileOrder.file['format']) >= 0) {
                    _this._projectServices.imageFiles.push(fileOrder.file);
                }
            }
        });
        this.tasksSocket = this._taskServices.taskSocket().subscribe();
    };
    ProjectComponent.prototype.ngAfterViewChecked = function () {
        this._projectServices.userIn();
    };
    ProjectComponent.prototype.putProject = function (id) {
        this._projectModalController.showModal(id);
        this._projectModalController.notification.emit();
    };
    ProjectComponent.prototype.addParticipant = function () {
        this._usersModalController.showModal('participant');
        this._usersModalController.notification.emit();
    };
    ProjectComponent.prototype.checkUserRole = function (id) {
        if (this._projectServices.administrators.map(function (user) { return user._id; }).indexOf(id) < 0) {
            return false;
        }
        else {
            return true;
        }
    };
    ProjectComponent.prototype.removeParticipant = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: '¿Estás seguro/a?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar'
        }).then(function (result) {
            if (result.value) {
                _this._projectServices.addOrRemoveParticipant(id).subscribe();
            }
        });
    };
    ProjectComponent.prototype.addAdmin = function () {
        this._usersModalController.notification.emit();
        this._usersModalController.showModal('admin');
    };
    ProjectComponent.prototype.switchPage = function (page) {
        this.page = page;
    };
    ProjectComponent.prototype.toOtherProject = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, null];
                    case 1:
                        _a.page = _b.sent();
                        this.router.navigate(['/projects', id]);
                        return [2 /*return*/];
                }
            });
        });
    };
    ProjectComponent.prototype.getOut = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: '¿Estás seguro/a?',
            text: "No podrás volver al projecto a no ser que otro admnistrador te vuelva a incluir",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar'
        }).then(function (result) {
            if (result.value) {
                _this._projectServices.addOrRemoveParticipant(_this._userServices.userOnline._id).subscribe(function () {
                    _this._projectServices.addOrRemoveAdmin(_this._userServices.userOnline._id).subscribe(function () {
                        _this.userOnline.projects = _this.userOnline.projects.filter(function (project) { return project != _this._projectServices.projectSelectedId; });
                        _this._userServices.saveInStorage(_this.userOnline._id, _this.userOnline, _this._userServices.token);
                        _this._projectServices.projects = _this._projectServices.projects.filter(function (project) { return project._id != _this._projectServices.projectSelectedId; });
                        setTimeout(function () {
                            _this.router.navigate(['projects']);
                        });
                    });
                });
            }
        });
    };
    ProjectComponent.prototype.deleteProject = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: '¿Estás seguro/a?',
            text: "Este cambio no se podrá revertir, además, si eliminas el projecto, también eliminarás toda la información almacenada en el mismo, puedes revisar la opción de DESACTIVAR, si quieres que los usuarios no admnistradores no puedan acceder al projecto durante el tiempo que determines.",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Entiendo, y quiero eliminarlo',
            cancelButtonText: 'Cancelar'
        }).then(function (result) {
            if (result.value) {
                _this._projectServices.deleteProject(id).subscribe(function () {
                    _this._projectServices.projects = _this._projectServices.projects.filter(function (project) { return project._id != id; });
                    _this.router.navigate(['/projects']).then(function () {
                        _this._projectServices.getProjects();
                    });
                });
            }
        });
    };
    ProjectComponent.prototype.changeProjectStatus = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: '¿Estás seguro/a?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar'
        }).then(function (result) {
            if (result.value) {
                _this._projectServices.changeProjectStatus(_this._projectServices.projectSelectedId).subscribe();
            }
        });
    };
    ProjectComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this._projectServices.userOut();
        this._projectServices.administrators = [];
        this._projectServices.participants = [];
        this._projectServices.name = undefined;
        this._projectServices.description = undefined;
        this._projectServices.projectImage = undefined;
        this._projectServices.groupTasks = [];
        this._projectServices.myTasks = [];
        this._projectServices.textFiles = [];
        this._projectServices.imageFiles = [];
        this.usersSocket.unsubscribe();
        this.filesSocket.unsubscribe();
        this.filesSubscription.unsubscribe();
        this.tasksSocket.unsubscribe();
        this._userServices.userOnline.projects.forEach(function (project, index) {
            if (project._id === _this._projectServices.projectSelectedId) {
                _this._projectServices.lastConnection().subscribe(function () {
                    _this._projectServices.projectSelectedId = undefined;
                });
            }
        });
    };
    ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-project",
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/pages/projects/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.css */ "./src/app/pages/projects/project/project.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_providers_user_service__WEBPACK_IMPORTED_MODULE_4__["UserServices"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _mainProjects_component__WEBPACK_IMPORTED_MODULE_9__["MainProjectsComponent"],
            _providers_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectServices"],
            _modals_project_modal_project_modal_controller_service__WEBPACK_IMPORTED_MODULE_5__["ProjectModalController"],
            _modals_users_modal_userModalController__WEBPACK_IMPORTED_MODULE_7__["UserModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_modals_upload_files_modal_upload_files_modal_controller_service__WEBPACK_IMPORTED_MODULE_6__["UploadFilesModalController"],
            src_app_providers_files_service__WEBPACK_IMPORTED_MODULE_10__["FilesServices"],
            src_app_providers_demo_service__WEBPACK_IMPORTED_MODULE_11__["DemoService"],
            src_app_providers_tasks_service__WEBPACK_IMPORTED_MODULE_12__["TasksService"]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/pages/projects/project/tasks/tasks.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/projects/project/tasks/tasks.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row d-flex d-flex\" style='background: #F5F1E3;height:100%'>\r\n    <div class='col-12 d-flex flex-column justify-content-start mb-1' >\r\n        <div class=\"row d-flex justify-content-center\" appProjectRole>\r\n            <button class='btn btn-warning highlight' (click)='postTask()'>Crear nueva tarea</button>\r\n        </div>\r\n        <div class=\"row d-flex justify-content-center\">\r\n                <h5 *ngIf=\"_projectServices.groupTasks.length>0 text-center\" class=\"highlight\">Tareas del grupo de trabajo</h5>\r\n        </div>\r\n        <div class=\"row justify-content-center\">\r\n            <input #input placeholder=\"Escribe el nombre del usuario\" type=\"text\">\r\n            <div class='btn-group'>\r\n                <button (click)='_taskServices.getTasksByUser(input.value).subscribe()' class='btn btn-warning highlight'>Buscar por usuario</button>\r\n                <button (click)='_taskServices.getTasksByProject().subscribe()' class='btn btn-warning highlight'>Todas</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"_projectServices.groupTasks.length>0\" style='border-bottom:1px solid black'>\r\n            <table class='table scrollableTableGroupTasks'>\r\n                <thead>\r\n                    <tr>\r\n                        <th style=\"height:14%\">Description</th>\r\n                        <th style=\"height:14%\">Asignado por:</th>\r\n                        <th style=\"height:14%\">Asignado a:</th>\r\n                        <th style=\"height:14%\">Fecha de creación:</th>\r\n                        <th style=\"height:14%\">Fecha límite:</th>\r\n                        <th style=\"height:14%\">¿OK?</th>\r\n                        <th style=\"height:14%\"></th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr [ngStyle]=\"{'background-color': checkTime(task.dateLimit)}\"\r\n                        *ngFor=\"let task of _projectServices.groupTasks\">\r\n                        <td style=\"max-width:'100%';word-break: break-all;height:14%\">{{task.description}}</td>\r\n                        <td style=\"height:14%\">{{task.assignedBy.name}}</td>\r\n                        <td style=\"height:14%\">{{task.user.name}}</td>\r\n                        <td style=\"height:14%\">{{task.date | date}}</td>\r\n                        <td style=\"height:14%\">{{task.dateLimit | date}}</td>\r\n                        <td style=\"height:14%\">\r\n                            <button [ngStyle]=\"{'background-color': taskColor(task)}\">\r\n                                <i *ngIf=\"task.ok\" class=\"fas fa-check-double\"></i>\r\n                                <i *ngIf=\"!task.ok && task.checked\" class=\"fas fa-check\"></i>\r\n                                <i *ngIf=\"!task.checked\" class=\"far fa-clock\"></i>\r\n                            </button>\r\n                        </td>\r\n                        <td style=\"height:14%\"><i appProjectRole\r\n                                class=\"far fa-trash-alt\" (click)='deleteTask(task._id)'></i>\r\n                            <i appProjectRole class=\"far fa-edit\" (click)='putTask(task._id)'></i>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n    <div class='col-12 d-flex flex-column justify-content-center mb-1 m-0'>\r\n        <div *ngIf=\"_projectServices.myTasks.length>0\" class=\"row d-flex justify-content-center\">\r\n                <h5 class=\"highlight\">Mis tareas</h5>\r\n        </div>    \r\n      <div  *ngIf=\"_projectServices.myTasks.length>0\">\r\n        <table class='table scrollableTableMyTasks'>\r\n            <thead>\r\n                <tr>\r\n                    <th style=\"height:14%\">Description</th>\r\n                    <th style=\"height:14%\">Asignado por:</th>\r\n                    <th style=\"height:14%\">Asignado a:</th>\r\n                    <th style=\"height:14%\">Fecha de creación:</th>\r\n                    <th style=\"height:14%\">Fecha límite:</th>\r\n                    <th style=\"height:14%\">¿OK?</th>\r\n                    <th style=\"height:14%\"></th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr [ngStyle]=\"{'background-color': checkTime(task.dateLimit)}\" *ngFor=\"let task of _projectServices.myTasks\">\r\n                    <td  style=\"max-width:'100%';word-break: break-all;height:14%\">{{task.description}}</td>\r\n                    <td style=\"height:14%\">{{task.assignedBy.name}}</td>\r\n                    <td style=\"height:14%\">{{task.user.name}}</td>\r\n                    <td style=\"height:14%\">{{task.date | date}}</td>\r\n                    <td style=\"height:14%\">{{task.dateLimit | date}}</td>\r\n                    <td style=\"height:14%\">\r\n                        <button [ngStyle]=\"{'background-color': taskColor(task)}\">\r\n                            <i  (click)='taskDone(task._id)' *ngIf=\"task.ok\" class=\"fas fa-check-double\"></i>\r\n                            <i (click)='taskDone(task._id)' *ngIf=\"!task.ok && task.checked\" class=\"fas fa-check\"></i>\r\n                            <i  *ngIf=\"!task.checked\" class=\"far fa-clock\"></i>\r\n                        </button>\r\n                    </td>\r\n                    <td style=\"height:14%\"><i  (click)='deleteTask(task._id)' class=\"far fa-trash-alt\"></i>\r\n                         <i appProjectRole (click)='putTask(task._id)' class=\"far fa-edit\"></i>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <div class=\" col-12 d-flex justify-content-center\"\r\n        *ngIf=\"_projectServices.myTasks.length === 0 && _projectServices.groupTasks.length === 0\">\r\n        <h5 class=\"highlight\" >No hay tareas asignadas</h5>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/projects/project/tasks/tasks.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/projects/project/tasks/tasks.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scrollableTableGroupTasks thead,\n.scrollableTableGroupTasks tbody {\n  display: block; }\n\n.scrollableTableGroupTasks table {\n  width: 100%;\n  /* Optional */ }\n\n.scrollableTableGroupTasks tbody td,\n.scrollableTableGroupTasks thead th {\n  width: 10%;\n  /* Optional */ }\n\n.scrollableTableMyTasks thead,\n.scrollableTableMyTasks tbody {\n  display: block; }\n\n.scrollableTableMyTasks table {\n  width: 100%;\n  /* Optional */ }\n\n.scrollableTableMyTasks tbody td,\n.scrollableTableMyTasks thead th {\n  width: 10%;\n  /* Optional */ }\n\n.scrollableTableMyTasks tbody {\n  height: 50px;\n  /* Just for the demo          */\n  overflow-y: auto;\n  /* Trigger vertical scroll    */\n  overflow-x: hidden;\n  /* Hide the horizontal scroll */ }\n\n.scrollableTableGroupTasks tbody {\n  height: 120px;\n  /* Just for the demo          */\n  overflow-y: auto;\n  /* Trigger vertical scroll    */\n  overflow-x: hidden;\n  /* Hide the horizontal scroll */ }\n\n@media (min-height: 694px) {\n  .scrollableTableMyTasks tbody {\n    height: calc(1.1 *50px); }\n  .scrollableTableGroupTasks tbody {\n    height: calc(1.1*120px); } }\n\n@media (min-height: 781px) {\n  .scrollableTableMyTasks tbody {\n    height: calc(1.25 *50px); }\n  .scrollableTableGroupTasks tbody {\n    height: calc(1.25*120px); } }\n\n@media (min-height: 833px) {\n  .scrollableTableMyTasks tbody {\n    height: calc(1.35 *50px); }\n  .scrollableTableGroupTasks tbody {\n    height: calc(1.35*120px); } }\n\n@media (min-height: 937px) {\n  .scrollableTableMyTasks tbody {\n    height: calc(1.5 *50px); }\n  .scrollableTableGroupTasks tbody {\n    height: calc(1.5*120px); } }\n\n@media (min-height: 1250px) {\n  .scrollableTableMyTasks tbody {\n    height: calc(2 *50px); }\n  .scrollableTableGroupTasks tbody {\n    height: calc(2*120px); } }\n\n@media (min-height: 1875px) {\n  .scrollableTableMyTasks tbody {\n    height: calc(3 *50px); }\n  .scrollableTableGroupTasks tbody {\n    height: calc(3*120px); } }\n\n@media (min-height: 2500px) {\n  .scrollableTableMyTasks tbody {\n    height: calc(3.9 *50px); }\n  .scrollableTableGroupTasks tbody {\n    height: calc(3.9*120px); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvamVjdHMvcHJvamVjdC90YXNrcy9DOlxcVXNlcnNcXDM0Njk1XFxEZXNrdG9wXFxEUkFGVFxcQ0FSR08gTVVTSUNcXEZST05URU5EX0VTQ1VFTEEvc3JjXFxhcHBcXHBhZ2VzXFxwcm9qZWN0c1xccHJvamVjdFxcdGFza3NcXHRhc2tzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBOztFQUVJLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxZQUFXO0VBQ1gsY0FBYyxFQUNqQjs7QUFFRDs7RUFFSSxXQUFVO0VBQ1YsY0FBYyxFQUNqQjs7QUFHRDs7RUFFSSxlQUFjLEVBQ2pCOztBQUVEO0VBQ0ksWUFBVztFQUNYLGNBQWMsRUFDakI7O0FBRUQ7O0VBRUksV0FBVTtFQUNWLGNBQWMsRUFDakI7O0FBRUQ7RUFDSyxhQUFZO0VBQ2IsZ0NBQWdDO0VBQ2hDLGlCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsbUJBQWtCO0VBQ2xCLGdDQUFnQyxFQUNuQzs7QUFFRDtFQUNLLGNBQWE7RUFDZCxnQ0FBZ0M7RUFDaEMsaUJBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyxtQkFBa0I7RUFDbEIsZ0NBQWdDLEVBQ25DOztBQUVEO0VBQ0M7SUFDTyx3QkFBc0IsRUFDekI7RUFDRDtJQUNDLHdCQUF1QixFQUN2QixFQUFBOztBQUdMO0VBQ0M7SUFDTyx5QkFBdUIsRUFDMUI7RUFDRDtJQUNDLHlCQUF3QixFQUN4QixFQUFBOztBQUdMO0VBQ0M7SUFDTyx5QkFBdUIsRUFDMUI7RUFDRDtJQUNDLHlCQUF3QixFQUN4QixFQUFBOztBQUdMO0VBQ0M7SUFDTyx3QkFBc0IsRUFDekI7RUFDRDtJQUNDLHdCQUF1QixFQUN2QixFQUFBOztBQUdMO0VBQ0M7SUFDTyxzQkFBb0IsRUFDdkI7RUFDRDtJQUNDLHNCQUFxQixFQUNyQixFQUFBOztBQUdMO0VBQ0c7SUFDSyxzQkFBb0IsRUFDdkI7RUFDRDtJQUNDLHNCQUFxQixFQUNyQixFQUFBOztBQUdMO0VBQ0M7SUFDTyx3QkFBc0IsRUFDekI7RUFDRDtJQUNDLHdCQUF1QixFQUN2QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvamVjdHMvcHJvamVjdC90YXNrcy90YXNrcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLnNjcm9sbGFibGVUYWJsZUdyb3VwVGFza3MgdGhlYWQsXHJcbi5zY3JvbGxhYmxlVGFibGVHcm91cFRhc2tzIHRib2R5IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uc2Nyb2xsYWJsZVRhYmxlR3JvdXBUYXNrcyB0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIE9wdGlvbmFsICovXHJcbn1cclxuXHJcbi5zY3JvbGxhYmxlVGFibGVHcm91cFRhc2tzIHRib2R5IHRkLFxyXG4uc2Nyb2xsYWJsZVRhYmxlR3JvdXBUYXNrcyB0aGVhZCB0aCB7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgLyogT3B0aW9uYWwgKi9cclxufVxyXG5cclxuXHJcbi5zY3JvbGxhYmxlVGFibGVNeVRhc2tzIHRoZWFkLFxyXG4uc2Nyb2xsYWJsZVRhYmxlTXlUYXNrcyB0Ym9keSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnNjcm9sbGFibGVUYWJsZU15VGFza3MgdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvKiBPcHRpb25hbCAqL1xyXG59XHJcblxyXG4uc2Nyb2xsYWJsZVRhYmxlTXlUYXNrcyB0Ym9keSB0ZCxcclxuLnNjcm9sbGFibGVUYWJsZU15VGFza3MgdGhlYWQgdGgge1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIC8qIE9wdGlvbmFsICovXHJcbn1cclxuXHJcbi5zY3JvbGxhYmxlVGFibGVNeVRhc2tzIHRib2R5IHtcclxuICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAvKiBKdXN0IGZvciB0aGUgZGVtbyAgICAgICAgICAqL1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIC8qIFRyaWdnZXIgdmVydGljYWwgc2Nyb2xsICAgICovXHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAvKiBIaWRlIHRoZSBob3Jpem9udGFsIHNjcm9sbCAqL1xyXG59XHJcblxyXG4uc2Nyb2xsYWJsZVRhYmxlR3JvdXBUYXNrcyB0Ym9keSB7XHJcbiAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIC8qIEp1c3QgZm9yIHRoZSBkZW1vICAgICAgICAgICovXHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgLyogVHJpZ2dlciB2ZXJ0aWNhbCBzY3JvbGwgICAgKi9cclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIC8qIEhpZGUgdGhlIGhvcml6b250YWwgc2Nyb2xsICovXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLWhlaWdodDogNjk0cHgpIHtcclxuIC5zY3JvbGxhYmxlVGFibGVNeVRhc2tzIHRib2R5IHtcclxuICAgICAgICBoZWlnaHQ6Y2FsYygxLjEgKjUwcHgpXHJcbiAgICB9XHJcbiAgICAuc2Nyb2xsYWJsZVRhYmxlR3JvdXBUYXNrcyB0Ym9keSB7XHJcbiAgICAgaGVpZ2h0OiBjYWxjKDEuMSoxMjBweCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLWhlaWdodDogNzgxcHgpIHtcclxuIC5zY3JvbGxhYmxlVGFibGVNeVRhc2tzIHRib2R5IHtcclxuICAgICAgICBoZWlnaHQ6Y2FsYygxLjI1ICo1MHB4KVxyXG4gICAgfVxyXG4gICAgLnNjcm9sbGFibGVUYWJsZUdyb3VwVGFza3MgdGJvZHkge1xyXG4gICAgIGhlaWdodDogY2FsYygxLjI1KjEyMHB4KTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4taGVpZ2h0OiA4MzNweCkge1xyXG4gLnNjcm9sbGFibGVUYWJsZU15VGFza3MgdGJvZHkge1xyXG4gICAgICAgIGhlaWdodDpjYWxjKDEuMzUgKjUwcHgpXHJcbiAgICB9XHJcbiAgICAuc2Nyb2xsYWJsZVRhYmxlR3JvdXBUYXNrcyB0Ym9keSB7XHJcbiAgICAgaGVpZ2h0OiBjYWxjKDEuMzUqMTIwcHgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDkzN3B4KSB7XHJcbiAuc2Nyb2xsYWJsZVRhYmxlTXlUYXNrcyB0Ym9keSB7XHJcbiAgICAgICAgaGVpZ2h0OmNhbGMoMS41ICo1MHB4KVxyXG4gICAgfVxyXG4gICAgLnNjcm9sbGFibGVUYWJsZUdyb3VwVGFza3MgdGJvZHkge1xyXG4gICAgIGhlaWdodDogY2FsYygxLjUqMTIwcHgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDEyNTBweCkge1xyXG4gLnNjcm9sbGFibGVUYWJsZU15VGFza3MgdGJvZHkge1xyXG4gICAgICAgIGhlaWdodDpjYWxjKDIgKjUwcHgpXHJcbiAgICB9XHJcbiAgICAuc2Nyb2xsYWJsZVRhYmxlR3JvdXBUYXNrcyB0Ym9keSB7XHJcbiAgICAgaGVpZ2h0OiBjYWxjKDIqMTIwcHgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDE4NzVweCkge1xyXG4gICAuc2Nyb2xsYWJsZVRhYmxlTXlUYXNrcyB0Ym9keSB7XHJcbiAgICAgICAgaGVpZ2h0OmNhbGMoMyAqNTBweClcclxuICAgIH1cclxuICAgIC5zY3JvbGxhYmxlVGFibGVHcm91cFRhc2tzIHRib2R5IHtcclxuICAgICBoZWlnaHQ6IGNhbGMoMyoxMjBweCk7XHJcbiAgICB9IFxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDI1MDBweCkge1xyXG4gLnNjcm9sbGFibGVUYWJsZU15VGFza3MgdGJvZHkge1xyXG4gICAgICAgIGhlaWdodDpjYWxjKDMuOSAqNTBweClcclxuICAgIH1cclxuICAgIC5zY3JvbGxhYmxlVGFibGVHcm91cFRhc2tzIHRib2R5IHtcclxuICAgICBoZWlnaHQ6IGNhbGMoMy45KjEyMHB4KTtcclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/projects/project/tasks/tasks.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/projects/project/tasks/tasks.component.ts ***!
  \*****************************************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../providers/project.service */ "./src/app/providers/project.service.ts");
/* harmony import */ var _modals_task_modal_task_modal_controller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../modals/task-modal/task-modal-controller.service */ "./src/app/modals/task-modal/task-modal-controller.service.ts");
/* harmony import */ var _providers_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../providers/user.service */ "./src/app/providers/user.service.ts");
/* harmony import */ var _providers_swal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../providers/swal.service */ "./src/app/providers/swal.service.ts");
/* harmony import */ var _providers_tasks_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../providers/tasks.service */ "./src/app/providers/tasks.service.ts");







var TasksComponent = /** @class */ (function () {
    function TasksComponent(_projectServices, _taskModalController, _userServices, _swalService, _taskServices) {
        this._projectServices = _projectServices;
        this._taskModalController = _taskModalController;
        this._userServices = _userServices;
        this._swalService = _swalService;
        this._taskServices = _taskServices;
    }
    TasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._projectServices.myTasks.forEach(function (task, index) {
            if (!task.checked && task.user._id === _this._userServices.userOnline._id) {
                _this._taskServices.taskChecked(task._id).subscribe(function () {
                    _this._projectServices.myTasks[index].checked = true;
                });
            }
        });
    };
    TasksComponent.prototype.postTask = function () {
        this._taskModalController.showModal();
        this._taskModalController.notification.emit();
    };
    TasksComponent.prototype.deleteTask = function (id) {
        var _this = this;
        this._swalService.confirmDelete().then(function (res) {
            if (res) {
                _this._taskServices.deleteTask(id).subscribe(function () {
                    _this._projectServices.myTasks = _this._projectServices.myTasks.filter(function (task) { return task._id != id; });
                    _this._projectServices.groupTasks = _this._projectServices.groupTasks.filter(function (task) { return task._id != id; });
                });
            }
        });
    };
    TasksComponent.prototype.putTask = function (id) {
        this._taskModalController.showModal(id);
        this._taskModalController.notification.emit();
    };
    TasksComponent.prototype.taskDone = function (taskId) {
        this._taskServices.taskDone(taskId).subscribe();
    };
    TasksComponent.prototype.taskColor = function (task) {
        if (task.ok) {
            return 'green';
        }
        else {
            return 'red';
        }
    };
    TasksComponent.prototype.checkTime = function (date) {
        var today = new Date();
        today = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 6, 0, 0, 0);
        if (new Date(date).getTime() < today.getTime()) {
            return '#E88C5A';
        }
    };
    TasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tasks',
            template: __webpack_require__(/*! ./tasks.component.html */ "./src/app/pages/projects/project/tasks/tasks.component.html"),
            styles: [__webpack_require__(/*! ./tasks.component.scss */ "./src/app/pages/projects/project/tasks/tasks.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectServices"],
            _modals_task_modal_task_modal_controller_service__WEBPACK_IMPORTED_MODULE_3__["TaskModalController"],
            _providers_user_service__WEBPACK_IMPORTED_MODULE_4__["UserServices"],
            _providers_swal_service__WEBPACK_IMPORTED_MODULE_5__["SwalService"],
            _providers_tasks_service__WEBPACK_IMPORTED_MODULE_6__["TasksService"]])
    ], TasksComponent);
    return TasksComponent;
}());



/***/ }),

/***/ "./src/app/pages/users/users.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/users/users.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row animated fadeIn pagesContainerFixed\" >\r\n<div class=\"col-12\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class='list-group'>\r\n            <h3 class='list-group-item-heading text-center highlight'>MANTENIMIENTO DE USUARIOS</h3>\r\n            <div class='d-flex flex-row justify-content-center'>\r\n                <div class='d-flex'>\r\n                    <input #input placeholder=\"Buscar usuario\" class=' list-group-item' type=\"text\">\r\n                    <button class='btn btn-warning highlight ' (click)='searchMode=true;getMode=false;from=0;_userServices.searchUsers(input.value).subscribe()'>BUSCAR USUARIOS</button>\r\n                    <button class='btn btn-warning highlight' (click)='searchMode=false;getMode=true;from=0;_userServices.getUsers().subscribe()'>TODOS</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-12\" style='background:#F5F1E3'>\r\n        <table class='table scrollableTable'>\r\n            <thead>\r\n                <th>Imagen</th>\r\n                <th>Email</th>\r\n                <th>Nombre</th>\r\n                <th>Rol</th>\r\n                <th>Estado</th>\r\n                <th></th>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let user of _userServices.users\">\r\n                    <td>\r\n                        <img class='img-fluid' style='cursor: pointer ' [src]=\"user.img | imgPipe:'users'\"\r\n                            class='img100 img-circle'>\r\n                    </td>\r\n                    <td>{{user.email}}</td>\r\n                    <td>{{user.name}}</td>\r\n                    <td>\r\n                        <select [(ngModel)]='user.role' name=\"role\" class='form-control'\r\n                            (change)=\"_userServices.changeRole(user._id,user.role).subscribe()\">\r\n                            <option value=\"USER_ROLE\">USER_ROLE</option>\r\n                            <option value=\"ADMIN_ROLE\">ADMIN_ROLE</option>\r\n                        </select>\r\n                    </td>\r\n                    <td *ngIf=\"_userServices.checkRole()\">\r\n                        <button *ngIf=\"!user.status\" class='btn btn-warning'\r\n                            (click)=\"_userServices.changeUserStatus(user._id).subscribe()\" name=\"grantAccess\"\r\n                            value=\"grantAccess\">activar</button>\r\n                        <button *ngIf=\"user.status\" class='btn btn-warning'\r\n                            (click)=\"_userServices.changeUserStatus(user._id).subscribe()\" name=\"grantAccess\"\r\n                            value=\"grantAccess\">desactivar</button>\r\n                    </td>\r\n                    <td *ngIf=\"_userServices.checkRole()\">\r\n                        <div class=\"col-12 d-flex flex-row\">\r\n                            <button (click)='deleteUser(user._id)' class='btn btn-danger'>\r\n                                <i class=\"far fa-trash-alt\"></i>\r\n                            </button>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n        <div class='d-flex justify-content-around'>\r\n            <button *ngIf=\"from && from > 0\" (click)='changeFrom(-5)' class='btn btn-warning'>PREV</button>\r\n            <button *ngIf=\"_userServices.count > from+5\" (click)='changeFrom(5)' class='btn btn-warning'>NEXT</button>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/users/users.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/users/users.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scrollableTable tbody {\n  height: 420px; }\n\nimg {\n  height: 100px;\n  width: 100px; }\n\n@media (min-height: 694px) {\n  img {\n    height: calc(1.1*100px);\n    width: calc(1.1*100px); }\n  .scrollableTable tbody {\n    height: calc(1.1*420px); } }\n\n@media (min-height: 781px) {\n  img {\n    height: calc(1.25*100px);\n    width: calc(1.25*100px); }\n  .scrollableTable tbody {\n    height: calc(1.25*420px); } }\n\n@media (min-height: 833px) {\n  img {\n    height: calc(1.35*100px);\n    width: calc(1.35*100px); }\n  .scrollableTable tbody {\n    height: calc(1.35*420px); } }\n\n@media (min-height: 937px) {\n  img {\n    height: calc(1.5*100px);\n    width: calc(1.5*100px); }\n  .scrollableTable tbody {\n    height: calc(1.5*420px); } }\n\n@media (min-height: 1250px) {\n  img {\n    height: calc(2*100px);\n    width: calc(2*100px); }\n  .scrollableTable tbody {\n    height: calc(2*420px); } }\n\n@media (min-height: 1875px) {\n  img {\n    height: calc(3*100px);\n    width: calc(3*100px); }\n  .scrollableTable tbody {\n    height: calc(3*420px); } }\n\n@media (min-height: 2500px) {\n  img {\n    height: calc(3.9*100px);\n    width: calc(3.9*100px); }\n  .scrollableTable tbody {\n    height: calc(3.9*420px); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlcnMvQzpcXFVzZXJzXFwzNDY5NVxcRGVza3RvcFxcRFJBRlRcXENBUkdPIE1VU0lDXFxGUk9OVEVORF9FU0NVRUxBL3NyY1xcYXBwXFxwYWdlc1xcdXNlcnNcXHVzZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYSxFQUNoQjs7QUFFRDtFQUNJLGNBQVk7RUFDWixhQUNKLEVBQUM7O0FBRUQ7RUFDQTtJQUNJLHdCQUFzQjtJQUN0Qix1QkFBcUIsRUFDeEI7RUFDRTtJQUNDLHdCQUF1QixFQUMxQixFQUFBOztBQUdEO0VBQ0M7SUFDRyx5QkFBdUI7SUFDdkIsd0JBQXNCLEVBQ3pCO0VBQ0Q7SUFDSSx5QkFBd0IsRUFDM0IsRUFBQTs7QUFHRDtFQUNDO0lBQ0cseUJBQXVCO0lBQ3ZCLHdCQUFzQixFQUN6QjtFQUNEO0lBQ0kseUJBQXdCLEVBQzNCLEVBQUE7O0FBR0Q7RUFDQztJQUNHLHdCQUFzQjtJQUN0Qix1QkFBcUIsRUFDeEI7RUFDRDtJQUNJLHdCQUF1QixFQUMxQixFQUFBOztBQUdEO0VBQ0M7SUFDRyxzQkFBb0I7SUFDcEIscUJBQW1CLEVBQ3RCO0VBQ0Q7SUFDSSxzQkFBcUIsRUFDeEIsRUFBQTs7QUFHRDtFQUNFO0lBQ0Usc0JBQW9CO0lBQ3BCLHFCQUFtQixFQUN0QjtFQUNEO0lBQ0ksc0JBQXFCLEVBQ3hCLEVBQUE7O0FBR0Q7RUFDQztJQUNHLHdCQUFzQjtJQUN0Qix1QkFBcUIsRUFDeEI7RUFDRDtJQUNJLHdCQUF1QixFQUMxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXNlcnMvdXNlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xsYWJsZVRhYmxlIHRib2R5e1xyXG4gICAgaGVpZ2h0OiA0MjBweDtcclxufVxyXG5cclxuaW1ne1xyXG4gICAgaGVpZ2h0OjEwMHB4O1xyXG4gICAgd2lkdGg6MTAwcHggICBcclxufVxyXG5cclxuQG1lZGlhIChtaW4taGVpZ2h0OiA2OTRweCkge1xyXG5pbWd7XHJcbiAgICBoZWlnaHQ6Y2FsYygxLjEqMTAwcHgpO1xyXG4gICAgd2lkdGg6Y2FsYygxLjEqMTAwcHgpICAgXHJcbn1cclxuICAgLnNjcm9sbGFibGVUYWJsZSB0Ym9keXtcclxuICAgIGhlaWdodDogY2FsYygxLjEqNDIwcHgpO1xyXG59XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLWhlaWdodDogNzgxcHgpIHtcclxuIGltZ3tcclxuICAgIGhlaWdodDpjYWxjKDEuMjUqMTAwcHgpO1xyXG4gICAgd2lkdGg6Y2FsYygxLjI1KjEwMHB4KSAgIFxyXG59XHJcbi5zY3JvbGxhYmxlVGFibGUgdGJvZHl7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMS4yNSo0MjBweCk7XHJcbn1cclxufVxyXG5cclxuQG1lZGlhIChtaW4taGVpZ2h0OiA4MzNweCkge1xyXG4gaW1ne1xyXG4gICAgaGVpZ2h0OmNhbGMoMS4zNSoxMDBweCk7XHJcbiAgICB3aWR0aDpjYWxjKDEuMzUqMTAwcHgpICAgXHJcbn1cclxuLnNjcm9sbGFibGVUYWJsZSB0Ym9keXtcclxuICAgIGhlaWdodDogY2FsYygxLjM1KjQyMHB4KTtcclxufVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDkzN3B4KSB7XHJcbiBpbWd7XHJcbiAgICBoZWlnaHQ6Y2FsYygxLjUqMTAwcHgpO1xyXG4gICAgd2lkdGg6Y2FsYygxLjUqMTAwcHgpICAgXHJcbn1cclxuLnNjcm9sbGFibGVUYWJsZSB0Ym9keXtcclxuICAgIGhlaWdodDogY2FsYygxLjUqNDIwcHgpO1xyXG59XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLWhlaWdodDogMTI1MHB4KSB7XHJcbiBpbWd7XHJcbiAgICBoZWlnaHQ6Y2FsYygyKjEwMHB4KTtcclxuICAgIHdpZHRoOmNhbGMoMioxMDBweCkgICBcclxufVxyXG4uc2Nyb2xsYWJsZVRhYmxlIHRib2R5e1xyXG4gICAgaGVpZ2h0OiBjYWxjKDIqNDIwcHgpO1xyXG59XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLWhlaWdodDogMTg3NXB4KSB7XHJcbiAgaW1ne1xyXG4gICAgaGVpZ2h0OmNhbGMoMyoxMDBweCk7XHJcbiAgICB3aWR0aDpjYWxjKDMqMTAwcHgpICAgXHJcbn1cclxuLnNjcm9sbGFibGVUYWJsZSB0Ym9keXtcclxuICAgIGhlaWdodDogY2FsYygzKjQyMHB4KTtcclxufSAgXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLWhlaWdodDogMjUwMHB4KSB7XHJcbiBpbWd7XHJcbiAgICBoZWlnaHQ6Y2FsYygzLjkqMTAwcHgpO1xyXG4gICAgd2lkdGg6Y2FsYygzLjkqMTAwcHgpICAgXHJcbn1cclxuLnNjcm9sbGFibGVUYWJsZSB0Ym9keXtcclxuICAgIGhlaWdodDogY2FsYygzLjkqNDIwcHgpO1xyXG59XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/users/users.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/users/users.component.ts ***!
  \************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/user.service */ "./src/app/providers/user.service.ts");
/* harmony import */ var _modals_upload_files_modal_upload_files_modal_controller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modals/upload-files-modal/upload-files-modal-controller.service */ "./src/app/modals/upload-files-modal/upload-files-modal-controller.service.ts");
/* harmony import */ var _providers_swal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/swal.service */ "./src/app/providers/swal.service.ts");
/* harmony import */ var _providers_files_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/files.service */ "./src/app/providers/files.service.ts");






var UsersComponent = /** @class */ (function () {
    function UsersComponent(_userServices, _uploadFilesModalController, _fileServices, _swalServices) {
        this._userServices = _userServices;
        this._uploadFilesModalController = _uploadFilesModalController;
        this._fileServices = _fileServices;
        this._swalServices = _swalServices;
        this.from = 0;
        this.searchMode = false;
        this.getMode = false;
        this.fileSubscription = null;
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.getMode = true;
        this._userServices.getUsers().subscribe();
    };
    UsersComponent.prototype.changeFrom = function (number) {
        if (this.from + number >= 0) {
            this.from += number;
        }
        if (this.getMode) {
            this._userServices.getUsers(this.from).subscribe();
        }
        if (this.searchMode) {
            this._userServices.searchUsers(this.input.nativeElement.value, this.from).subscribe();
        }
    };
    UsersComponent.prototype.changeImg = function (id) {
        var _this = this;
        this._uploadFilesModalController.showModal(id, 'users');
        this.fileSubscription = this._fileServices.files$.subscribe(function (fileOrder) {
            if (fileOrder.order === 'post') {
                if (fileOrder.file.type === 'users') {
                    _this._userServices.users.forEach(function (user, index) {
                        if (user._id === id) {
                            _this._userServices.users[index].img = fileOrder.file;
                        }
                    });
                    _this.fileSubscription.unsubscribe();
                }
            }
        });
    };
    UsersComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this._swalServices.confirmDelete().then(function (res) {
            if (res) {
                _this._userServices.deleteUser(id).subscribe(function () {
                    _this._userServices.getUsers(_this.from).subscribe();
                });
            }
        });
    };
    UsersComponent.prototype.ngOnDestroy = function () {
        this.from = 0;
        this._userServices.users = [];
        this.getMode = false;
        this.searchMode = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], UsersComponent.prototype, "input", void 0);
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/pages/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.scss */ "./src/app/pages/users/users.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_user_service__WEBPACK_IMPORTED_MODULE_2__["UserServices"],
            _modals_upload_files_modal_upload_files_modal_controller_service__WEBPACK_IMPORTED_MODULE_3__["UploadFilesModalController"],
            _providers_files_service__WEBPACK_IMPORTED_MODULE_5__["FilesServices"],
            _providers_swal_service__WEBPACK_IMPORTED_MODULE_4__["SwalService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/providers/dashboard.service.ts":
/*!************************************************!*\
  !*** ./src/app/providers/dashboard.service.ts ***!
  \************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/providers/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/config */ "./src/app/config/config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







var DashboardService = /** @class */ (function () {
    function DashboardService(socket, _userServices, http) {
        this.socket = socket;
        this._userServices = _userServices;
        this.http = http;
        this.projects = [];
        this.unreadMessages = false;
        this.uncheckedTasks = false;
        this.pendingTasks = false;
        this.eventsComming = [];
        this.eventsToday = [];
        this.eventsOnCourse = [];
    }
    DashboardService.prototype.dashboardIn = function () {
        var payload = { user: this._userServices.userOnline._id };
        this.socket.emit("dashboardIn", payload);
    };
    DashboardService.prototype.getLastMessages = function () {
        var _this = this;
        var url = _config_config__WEBPACK_IMPORTED_MODULE_5__["URL_SERVICES"] + "lastMessages";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]().set('token', localStorage.getItem('token'));
        return this.http.get(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.projects.forEach(function (project) {
                            project.messages = [];
                        })];
                    case 1:
                        _a.sent();
                        if (res.messages === 0) {
                            this.unreadMessages = false;
                        }
                        res.messages.forEach(function (message) {
                            message.project.messages = [];
                            if (_this.projects.length === 0) {
                                message.project.messages.push(message.message);
                                _this.unreadMessages = true;
                                _this.projects.push(message.project);
                            }
                            else {
                                if (_this.projects.map(function (project) { return project._id; }).indexOf(message.project._id) < 0) {
                                    message.project.messages.push(message.message);
                                    _this.unreadMessages = true;
                                    _this.projects.push(message.project);
                                }
                                else {
                                    var index = _this.projects.map(function (project) { return project._id; }).indexOf(message.project._id);
                                    if (_this.projects[index].messages === undefined) {
                                        _this.projects[index].messages = [];
                                        _this.projects[index].messages.push(message.message);
                                        _this.unreadMessages = true;
                                    }
                                    else {
                                        _this.projects[index].messages.push(message.message);
                                        _this.unreadMessages = true;
                                    }
                                }
                            }
                        });
                        return [2 /*return*/];
                }
            });
        }); }));
    };
    DashboardService.prototype.getTasks = function () {
        var _this = this;
        var url = _config_config__WEBPACK_IMPORTED_MODULE_5__["URL_SERVICES"] + "tasks";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]().set('token', localStorage.getItem('token'));
        return this.http.get(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.projects.forEach(function (project) {
                            project.uncheckedTasks = [];
                            project.pendingTasks = [];
                        })];
                    case 1:
                        _a.sent();
                        if (res.tasks.length === 0) {
                            this.uncheckedTasks = false;
                            this.pendingTasks = false;
                        }
                        else {
                            res.tasks.forEach(function (task) {
                                if (_this.projects.length === 0) {
                                    if (!task.checked) {
                                        task.project.uncheckedTasks = [];
                                        task.project.uncheckedTasks.push(task.description);
                                        _this.uncheckedTasks = true;
                                        _this.projects.push(task.project);
                                        if (!task.project.pendingTasks) {
                                            task.project.pendingTasks = [];
                                        }
                                        return;
                                    }
                                    else if (!task.ok) {
                                        task.project.pendingTasks = [];
                                        task.project.pendingTasks.push(task.description);
                                        _this.pendingTasks = true;
                                        _this.projects.push(task.project);
                                        if (!task.project.uncheckedTasks) {
                                            task.project.uncheckedTasks = [];
                                        }
                                        return;
                                    }
                                }
                                else {
                                    if (_this.projects.map(function (project) { return project._id; }).indexOf(task.project._id) < 0) {
                                        if (!task.checked) {
                                            task.project.uncheckedTasks = [];
                                            task.project.uncheckedTasks.push(task.description);
                                            _this.uncheckedTasks = true;
                                            _this.projects.push(task.project);
                                        }
                                        else {
                                            task.project.pendingTasks = [];
                                            task.project.pendingTasks.push(task.description);
                                            _this.pendingTasks = true;
                                            _this.projects.push(task.project);
                                        }
                                    }
                                    else {
                                        var index = _this.projects.map(function (project) { return project._id; }).indexOf(task.project._id);
                                        if (!task.checked) {
                                            if (_this.projects[index].uncheckedTasks.length === 0) {
                                                _this.projects[index].uncheckedTasks = [];
                                                _this.uncheckedTasks = true;
                                                _this.projects[index].uncheckedTasks.push(task.description);
                                            }
                                            else {
                                                _this.projects[index].uncheckedTasks.push(task.description);
                                            }
                                        }
                                        else {
                                            if (_this.projects[index].pendingTasks.length === 0) {
                                                _this.projects[index].pendingTasks = [];
                                                _this.projects[index].pendingTasks.push(task.description);
                                                _this.pendingTasks = true;
                                            }
                                            else {
                                                _this.projects[index].pendingTasks.push(task.description);
                                            }
                                        }
                                    }
                                }
                            });
                        }
                        return [2 /*return*/];
                }
            });
        }); }));
    };
    DashboardService.prototype.getEvents = function () {
        var _this = this;
        var url = _config_config__WEBPACK_IMPORTED_MODULE_5__["URL_SERVICES"] + "events";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]().set('token', localStorage.getItem('token'));
        return this.http.get(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.eventsToday = [];
            _this.eventsOnCourse = [];
            _this.eventsComming = [];
            res.events.forEach(function (event) {
                if (new Date(event.startDate).getDate() === new Date().getDate() && new Date(event.startDate).getMonth() === new Date().getMonth()) {
                    _this.eventsToday.push(event);
                }
                else {
                    if (new Date(event.startDate).getTime() > new Date().getTime()) {
                        _this.eventsComming.push(event);
                    }
                    else if (new Date(event.startDate).getTime() < new Date().getTime() && new Date(event.endDate).getTime() > new Date().getTime()) {
                        _this.eventsOnCourse.push(event);
                    }
                }
            });
        }));
    };
    DashboardService.prototype.dashboardSocket = function () {
        var _this = this;
        return this.socket.fromEvent("dashboard").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (payload) {
            if (payload.item === "event") {
                _this.getEvents().subscribe();
            }
            else if (payload.item === "task") {
                if (_this.userProjects.indexOf(payload.room) >= 0) {
                    _this.getTasks().subscribe();
                }
            }
            else if (payload.item === "message") {
                if (_this.userProjects.indexOf(payload.room) >= 0) {
                    _this.getLastMessages().subscribe();
                }
            }
        }));
    };
    DashboardService.prototype.dashboardOut = function () {
        var payload = { user: this._userServices.userOnline._id };
        this.socket.emit("dashboardOut", payload);
    };
    DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserServices"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "./src/app/providers/letter.service.ts":
/*!*********************************************!*\
  !*** ./src/app/providers/letter.service.ts ***!
  \*********************************************/
/*! exports provided: LetterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetterService", function() { return LetterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/providers/user.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/config */ "./src/app/config/config.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);









var LetterService = /** @class */ (function () {
    function LetterService(_userServices, http) {
        this._userServices = _userServices;
        this.http = http;
        this.users = [];
        this.letters = [];
    }
    LetterService.prototype.getUsers = function () {
        var _this = this;
        this._userServices.getUsers().subscribe(function () {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])().subscribe(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var _a;
                var _this = this;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this._userServices.users.filter(function (user) { return user.role === 'ADMIN_ROLE' && user._id != _this._userServices.userOnline._id; })];
                        case 1:
                            _a.users = _b.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
    };
    LetterService.prototype.getLetters = function () {
        var _this = this;
        var url = _config_config__WEBPACK_IMPORTED_MODULE_5__["URL_SERVICES"] + "letters";
        return this.http.get(url, { headers: this._userServices.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
            _this.letters = res.letters;
            if (_this.letters.length > 0) {
                _this.letterSelectedId = _this.letters[_this.letters.length - 1]._id;
                _this.selectLetter();
            }
            else {
                _this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
                    name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
                    user: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].email]),
                    content: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
                    bottom: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required)
                });
                _this.setNewLetter();
            }
        }));
    };
    LetterService.prototype.selectLetter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var letterSelected;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
                            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
                            user: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].email]),
                            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
                            bottom: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required)
                        });
                        letterSelected = this.letters.filter(function (letter) { return letter._id === _this.letterSelectedId; })[0];
                        if (!letterSelected) return [3 /*break*/, 3];
                        return [4 /*yield*/, letterSelected.content.forEach(function (extract, index) {
                                letterSelected.content[index] = letterSelected.content[index].split('\n').join(' ');
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, letterSelected.bottom.forEach(function (extract, index) {
                                letterSelected.bottom[index] = letterSelected.bottom[index].split('\n').join(' ');
                            })];
                    case 2:
                        _a.sent();
                        this.form.setValue({
                            name: letterSelected.name,
                            user: letterSelected.user,
                            content: letterSelected.content.join('\n'),
                            bottom: letterSelected.bottom.join('\n'),
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        this.setNewLetter();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LetterService.prototype.setNewLetter = function () {
        this.letterSelectedId = undefined;
        this.form.setValue({
            name: '',
            user: '',
            content: '',
            bottom: '',
        });
    };
    LetterService.prototype.saveLetter = function () {
        var _this = this;
        var newLetter = { content: [], bottom: [], user: undefined, name: undefined };
        var value = this.form.value;
        newLetter.content = value.content.split('\n');
        newLetter.content.forEach(function (extract, index) {
            newLetter.content[index].split(' ').join('\n');
        });
        newLetter.bottom = value.bottom.split('\n');
        newLetter.bottom.forEach(function (extract, index) {
            newLetter.bottom[index].split(' ').join('\n');
        });
        newLetter.user = value.user;
        newLetter.name = value.name;
        if (!this.letterSelectedId) {
            var url = _config_config__WEBPACK_IMPORTED_MODULE_5__["URL_SERVICES"] + "letter";
            return this.http.post(url, newLetter, { headers: this._userServices.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                _this.letters.push(res.letter);
                _this.letterSelectedId = res.letter._id;
                _this.selectLetter();
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                    text: "Nuevo modelo " + _this.form.value.name + " creado",
                    showCloseButton: true,
                    type: "success"
                });
            }));
        }
        else {
            var url = _config_config__WEBPACK_IMPORTED_MODULE_5__["URL_SERVICES"] + "letter/" + this.letterSelectedId;
            return this.http.put(url, newLetter, { headers: this._userServices.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                _this.letters.forEach(function (letter, index) {
                    if (letter._id === res.letter._id) {
                        _this.letters[index] = res.letter;
                    }
                });
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                    text: "Modelo " + _this.form.value.name + " modificado",
                    showCloseButton: true,
                    type: "success"
                }).then(function () {
                    _this.selectLetter();
                });
            }));
        }
    };
    LetterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserServices"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], LetterService);
    return LetterService;
}());



/***/ }),

/***/ "./src/app/providers/visitors.service.ts":
/*!***********************************************!*\
  !*** ./src/app/providers/visitors.service.ts ***!
  \***********************************************/
/*! exports provided: VisitorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorsService", function() { return VisitorsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/config */ "./src/app/config/config.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.service */ "./src/app/providers/user.service.ts");






var VisitorsService = /** @class */ (function () {
    function VisitorsService(http, _userServices) {
        this.http = http;
        this._userServices = _userServices;
    }
    VisitorsService.prototype.getVisitors = function () {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICES"] + "visitors";
        return this.http.get(url, { headers: this._userServices.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res.visitors;
        }));
    };
    VisitorsService.prototype.deleteVisitor = function (visitorId) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICES"] + "visitor/" + visitorId;
        return this.http.delete(url, { headers: this._userServices.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res.visitor;
        }));
    };
    VisitorsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _user_service__WEBPACK_IMPORTED_MODULE_5__["UserServices"]])
    ], VisitorsService);
    return VisitorsService;
}());



/***/ }),

/***/ "./src/app/visitors/visitors.component.html":
/*!**************************************************!*\
  !*** ./src/app/visitors/visitors.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-12\">\r\n      <table class=\"table scrollableTable\">\r\n        <thead class=\"d-flex jusitfy-content-around\">\r\n          <th style=\"width:33%\">Email</th>\r\n          <th style=\"width:33%\">Fecha</th>\r\n          <th style = 'width:33%'></th>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let visit of visitors\" class=\"d-flex jusitfy-content-around\">\r\n            <td style=\"width:33%\">{{visit.email}}</td>\r\n            <td style=\"width:33%\">{{visit.date | date:'medium'}}</td>\r\n            <td (click)=\"deleteVisitor(visit._id)\" style=\"width:33%\"><i class=\"fas fa-trash-alt\" ></i></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/visitors/visitors.component.scss":
/*!**************************************************!*\
  !*** ./src/app/visitors/visitors.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Zpc2l0b3JzL3Zpc2l0b3JzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/visitors/visitors.component.ts":
/*!************************************************!*\
  !*** ./src/app/visitors/visitors.component.ts ***!
  \************************************************/
/*! exports provided: VisitorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorsComponent", function() { return VisitorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_visitors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/visitors.service */ "./src/app/providers/visitors.service.ts");



var VisitorsComponent = /** @class */ (function () {
    function VisitorsComponent(_visitorsServices) {
        this._visitorsServices = _visitorsServices;
        this.visitors = [];
    }
    VisitorsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._visitorsServices.getVisitors().subscribe(function (visitors) {
            _this.visitors = visitors;
        });
    };
    VisitorsComponent.prototype.deleteVisitor = function (id) {
        var _this = this;
        this._visitorsServices.deleteVisitor(id).subscribe(function (visitor) {
            _this.visitors = _this.visitors.filter(function (eachVisitor) { return eachVisitor._id != visitor._id; });
        });
    };
    VisitorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-visitors',
            template: __webpack_require__(/*! ./visitors.component.html */ "./src/app/visitors/visitors.component.html"),
            styles: [__webpack_require__(/*! ./visitors.component.scss */ "./src/app/visitors/visitors.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_visitors_service__WEBPACK_IMPORTED_MODULE_2__["VisitorsService"]])
    ], VisitorsComponent);
    return VisitorsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pages-module.js.map