import { popup } from "./ui.js";   
import {getdata} from "./data.js"
import { dataformel } from "./utils.js"
import { build } from "./prompt.js";
const formel = document.getElementById("formel");
const projet  = await dataformel(formel)
let test = build(projet)
console.log(test)
popup() 
let data = getdata();