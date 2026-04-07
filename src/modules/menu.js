import firewrym from "../images/firewyrm.png";
import kraken from "../images/kraken.png";
import griffin from "../images/griffin.png";
import phoenix from "../images/phoenix.png";
import basilisk from "../images/basilisk.png";
import serpent from "../images/serpent.png";
import coin from "../images/coin.png";

export let menuContent = document.createElement("div");
menuContent.setAttribute("id", "menuContent");
const title = document.createElement("h1");
title.textContent = "Menu";
const menuGrid = document.createElement("div");
menuGrid.setAttribute("id", "menuGrid");
const itemNames = ["Firewyrm Ember Stew", "Kraken Ink Noodles", "Griffon Wing Skewers", "Phoenix Ash Bread", 
                   "Basilisk Egg Tart", "Serpentfire Soup",];
const itemDescriptions = ["Slow-braised wrym meat with ashroot and ember pepper.", 
                          "Slick strands tossed in deep-sea spices and shadow oil.",
                          "Charred with saffron spice and dusted in sky-salt.",
                          "Tangy, golden, and faintly crackling with glowing energy.",
                          "Warm loaves that glow faintly and never truly burns.",
                          "Blazing hot stew brewed from jungle herbs and scaled meats.",]; 
const itemPrices = ["100", "500", "250", "75", "125", "50",];
const itemImages = [firewrym, kraken, griffin, phoenix, basilisk, serpent];

const populateGrid = function(){
    for(let i = 0; i < itemNames.length; i++){
        const item = document.createElement("h3");
        item.setAttribute("id", "item"+i);
        item.textContent = itemNames[i];
        const itemImg = document.createElement("img");
        itemImg.setAttribute("alt", "Picture of dish here");
        itemImg.src = itemImages[i];
        const itemDescription = document.createElement("h4");
        itemDescription.textContent = itemDescriptions[i];
        const priceContainer = document.createElement("div");
        priceContainer.setAttribute("class", "price");
        const currencyImg = document.createElement("img");
        currencyImg.src = coin;
        const itemPrice = document.createElement("p");
        itemPrice.textContent = "x" + itemPrices[i];
        priceContainer.appendChild(currencyImg);
        priceContainer.appendChild(itemPrice);

        item.appendChild(itemImg);
        item.appendChild(itemDescription);
        item.append(priceContainer);
        menuGrid.appendChild(item);
    }                     
}

populateGrid();

menuContent.appendChild(title); 
menuContent.appendChild(menuGrid);