
import { popup } from "./ui.js";
import { getdata, sendata } from "./data.js";
import { dataformel } from "./utils.js";
import { build } from "./prompt.js";
import { savetolocalStorage } from "./localstorage.js";

const formel = document.getElementById("formel");


const data = await getdata();

export const projet = await dataformel(formel);

export let prompt = build(projet);



savetolocalStorage(projet);

popup();

try {
    const result = await sendata(prompt);
    console.log("Gemini response:", result);
} catch (error) {
    console.error("API Error:", error);
}
