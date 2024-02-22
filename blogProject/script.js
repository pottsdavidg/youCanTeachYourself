import { app } from "./data/app.js";

document.getElementById("search").addEventListener("click", () => {
    console.log(document.getElementById("search").dataset.mydata);
});

