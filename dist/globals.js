"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSON = void 0;
const JSON_extension_1 = require("./JSON/JSON.extension");
//#endregion
//#region assing to global interface
// JSON extension to convert any object to interface with Date types
JSON.parseToObject = JSON_extension_1.parseToObject;
//#endregion
//#region CONSTANTS
const constJSON = globalThis.JSON;
exports.JSON = constJSON;
//#endregion
