"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseToObject = void 0;
const moment = require("moment");
/**
 * JSON extension to convert any object to interface with Date types
 * @template T type parameter
 * @param object Object to convert
 * @returns to object with Date types
 */
function parseToObject(object) {
    for (const property in object) {
        if (typeof object[property] === "object") {
            object[property] = JSON.parseToObject(object[property]);
        }
        if (typeof object[property] === "string") {
            let isNumber = Number(object[property]);
            if (isNaN(isNumber)) {
                let isValidDate = moment(object[property], true).isValid();
                if (isValidDate) {
                    let tryConverted = new Date(object[property]);
                    if (!isNaN(tryConverted.getDate()))
                        object[property] = new Date(object[property]);
                }
            }
        }
    }
    return object;
}
exports.parseToObject = parseToObject;
;
