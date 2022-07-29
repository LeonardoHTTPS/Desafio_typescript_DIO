// Como podemos rodar isso em um arquivo .ts sem causar erros? 

import { NumberLiteralType } from "typescript";

let employee = {
    code: 10,
    name:'John'
};

let employee2: {code: number, name: string} = {
    code: 10,
    name: 'John'
}

interface employee {
    code: number,
    name: string
}

let employee3: employee = {
    code: 200,
    name: 'John'
}