import star from "../images/star.png";
export let homeContent = document.createElement("div");

homeContent.setAttribute("id", "homeContent");
const title = document.createElement("h1");
title.textContent = "Elvin Emporium";
const starImage = document.createElement("img");
starImage.src = star;
const headline = document.createElement("h2");
headline.textContent = "Welcome to the finest tavern!"
const description = document.createElement("p");
description.textContent = "Treat your taste to the widest array of pleasures within any land with rare scents upon this air. \
Within this fine establishment lay sizzling meat from beasts far off lands and curious delicacies from places yet unknown.";

const addContent = function(){
    homeContent.appendChild(title);
    homeContent.appendChild(starImage);
    homeContent.appendChild(headline);
    homeContent.appendChild(description);
}

addContent();