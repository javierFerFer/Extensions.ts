//TODO: Check how to add testing for this

import {JSON} from '../globals';

let Persona = {
    age: 2,
    birthDate: new Date(),
    name: 'Javi',
    isUp: true,
    isNull: undefined
}
type person = typeof Persona;

// let json: any = JSON.stringify(Persona);
let json: any = Persona;
json.birthDate = "2022-04-20T20:38:30.549Z";
console.log(json);
let parsed:person = JSON.parseToObject<person>(json);
console.log(parsed);