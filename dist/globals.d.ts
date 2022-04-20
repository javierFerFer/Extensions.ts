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
declare const constJSON: JSON;
export { constJSON as JSON };
