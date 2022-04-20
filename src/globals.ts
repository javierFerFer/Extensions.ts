import { parseToObject } from "./JSON/JSON.extension";
import { Utilites } from './Utilities.model';

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

//#region assing to export variable
let Utilites: Utilites = {
  JSON: {
    parseToObject: parseToObject
  }
}

// Utilites = globalThis.JSON.parseToObject;
//#endregion

//#region EXPORTS

export { Utilites };

//#endregion


