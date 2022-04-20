import { parseToObject } from "./JSON/JSON.extension";


//#region GLOBAL

declare global {
  export interface JSON {
    /**
     * JSON extension to convert any object to interface with Date types
     * @template T type parameter
     * @param object Object to convert
     * @returns to object with Date types
     */
    parseToObject<T>(object: T): T;
  }
}

//#endregion

//#region assing to global interface

// JSON extension to convert any object to interface with Date types
JSON.parseToObject = parseToObject;

//#endregion

//#region CONSTANTS

const constJSON = globalThis.JSON;

//#endregion

//#region EXPORTS

export {constJSON as JSON};

//#endregion


