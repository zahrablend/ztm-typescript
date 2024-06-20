/* eslint-disable */
import { strict as assert } from "assert";

type Link = {
    title: string;
    url: string;
};

const microsoft = {
    title: "microsoft",
    url: "microsoft.com",
};

const typescript = {
    title: "TypeScript",
    url: "typescriptlang.org",
};

const links = [microsoft, typescript];
// access url property of typescript array
const tsUrl = links[1].url;

// edit a property
links[0].title = "Microsoft";