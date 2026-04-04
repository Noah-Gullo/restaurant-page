import backgroundImage from "./background.png";
export let homeContent = document.createElement("div");

homeContent.setAttribute("id", "homeContent");
const title = document.createElement("h1");
title.textContent = "Elvin Emporium";
document.body.style.backgroundImage = backgroundImage;

homeContent.appendChild(title);