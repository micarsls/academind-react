//Primitives: number, string, boolean

let age: number;
age = 12;

let userName: string;
userName = 'Mica';

let isMica: boolean;
isMica = true;

//More Complex Types: array, objects

let hobbies: string[];
hobbies = ['Sports', 'Cooking']

let person: {
    name: string,
    age: number
};

person = {
    name: 'Mica',
    age: 32
};

let people: {
    name: string,
    age: number
}[];

//Type Interference
let course = 'React - The Complete Guide';

//course = 1234;

//Union Types
let course1: string | number = 'React - The Complete Guide';
course1 = 1234;
let fullName: string | string[];

//Type Aliases
type Person = {
    name: string,
    age: number
};

let person1: Person;

let people1: Person[];

// Function & Types

function add(a: number, b: number) {
    return a + b;
}

function print(value: any){
    console.log(value);
}

//Generics

function insertAtBeginning<T>(array: T[], value: T){
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

let numbers: Array<number> = [1, 2, 3];
let numbers2: number[] = [1, 2, 3];
const stringArray2 = insertAtBeginning<string>(['a', 'b', 'c'], 'd');

