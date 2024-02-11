import { data } from "./data.js";

function randomArray(inputArray) {
    let rand;
    let output = [];
    let loop = inputArray.length;
    let copy = JSON.parse(JSON.stringify(inputArray));
    for (let i = 0; i < loop; i++) {
        rand = Math.floor(Math.random() * copy.length);
        output.push(copy.splice(rand, 1)[0]);
    };
    return output;
};

let target = document.body.getElementsByClassName("question-container");

let HTML = {
    target: target[1],
    header: data.html[0].header,
    fieldset: { open: data.html[0].qFieldset[0], close: data.html[0].qFieldset[1] },
    ansDiv: { open: data.html[0].qAnsDiv[0], close: data.html[0].qAnsDiv[1] },
    question(num) { return data.html[num + 1] }
};

let sOutput = "";
sOutput += HTML.header;
for (let i = 0; i < (data.html.length - 1); i++) {    
    let c = HTML.question(i);
    sOutput += c.qNumber + HTML.fieldset.open + c.qLegend + HTML.ansDiv.open;
    let altArray = JSON.parse(JSON.stringify(randomArray(c.qAnswer)));
    for (let j = 0; j < 4; j++) { sOutput += altArray[j].content };
    sOutput += HTML.ansDiv.close + HTML.fieldset.close;
};
HTML.target.innerHTML = sOutput;

let CSS = {
    target: target[2],
    header: data.css[0].header,
    fieldset: { open: data.css[0].qFieldset[0], close: data.css[0].qFieldset[1] },
    ansDiv: { open: data.html[0].qAnsDiv[0], close: data.html[0].qAnsDiv[1] },
    question(num) { return data.css[num + 1] }
};

sOutput = "";
sOutput += CSS.header;
for (let i = 0; i < (data.css.length - 1); i++) {    
    let c = CSS.question(i);
    sOutput += c.qNumber + CSS.fieldset.open + c.qLegend + CSS.ansDiv.open;
    let altArray = JSON.parse(JSON.stringify(randomArray(c.qAnswer)));
    for (let j = 0; j < 4; j++) { sOutput += altArray[j].content };
    sOutput += CSS.ansDiv.close + CSS.fieldset.close;
};
CSS.target.innerHTML = sOutput;