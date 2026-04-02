import "./styles.css";

import { homeContent } from "./modules/home.js";
import { menuContent } from "./modules/menu.js";
import { contactContent } from "./modules/contact.js";

const content = document.getElementById("content");
const setContent = function(newContent){
    while(content.lastChild){
        content.removeChild(content.lastChild);
    }
    content.appendChild(newContent);
}

const homeButton = document.getElementById("home-btn");
homeButton.addEventListener("click", () => {
    setContent(homeContent)
})

const menuButton = document.getElementById("menu-btn");
menuButton.addEventListener("click", () => {
    setContent(menuContent);
})

const contactButton = document.getElementById("contact-btn");
contactButton.addEventListener("click", () => {
    setContent(contactContent);
})

setContent(homeContent);