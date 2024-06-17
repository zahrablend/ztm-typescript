/* eslint-disable */
import { strict as assert } from "assert";

// Boolean logic is a fundamental concept that involves evaluating true/false
// statements. It is a system of logical thought that uses true and false
// values to make deductions or draw conclusions. Boolean logic is used to
// express conditions and make decisions based on the truth or falsehood of
// these conditions.

const yes = true;
const no = false;

const age = 18;
const canPurchase = age >= 18;
assert.equal(canPurchase, true);

const denyPurchase = age < 18;
assert.equal(denyPurchase, false);

const favoriteColor = "yellow";
const isFavorite = favoriteColor === "yellow";
assert.equal(isFavorite, true);

const two = 2;
const isNotThree = (1 + two) !== 10;
assert.equal(isNotThree, true);

// Equality operators:
// <
// <=
// >
// >=
// ===
// !==


