// Using functions and template literals, print out your first and last name.
//

import { strict as assert } from "assert";

// - Use a single function to generate your first name
function firstName(): string{
    return "Zahra";
}

// - Use a single function to generate your last name
function lastName(): string {
    return "Zvirdzinaite";
}

// - Use a single function to generate your full name by using the other
//   functions
function fullName(first: string, last: string): string {
    return `${first} ${last}`; 
}

// - Print out your full name using the functions

console.log(fullName(firstName(), lastName()));
