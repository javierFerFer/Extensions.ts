import * as moment from "moment";


/**
 * JSON extension to convert any object to interface with Date types
 * @template T type parameter
 * @param object Object to convert
 * @returns to object with Date types
 */
export function parseToObject <T>(object: T): T {
    for (const property in object) {
      if (typeof object[property] === "object") {
        object[property] = JSON.parseToObject<T[Extract<keyof T, string>]>(object[property]);
      }
  
      if (typeof object[property] === "string") {
        
        let isNumber = Number(object[property]);
        if (isNaN(isNumber)) {
          let isValidDate = moment(object[property], true).isValid();
          if (isValidDate) {
            let tryConverted = new Date(object[property] as unknown as string);
            if (!isNaN(tryConverted.getDate()))
              object[property] = new Date(object[property] as unknown as string) as unknown as T[Extract<keyof T, string>];
          }
        }
      }
    }
    return object;
  };