export let menuContent = document.createElement("div");
menuContent.setAttribute("id", "menuContent");
const title = document.createElement("h1");
title.textContent = "Menu";
const menuGrid = document.createElement("div");
menuGrid.setAttribute("id", "menuGrid");
const dishNames = ["Firewyrm Ember Stew", "Kraken Ink Noodles", "Griffon Wing Skewers", "Phoenix Ash Bread", 
                   "Basilisk Egg Tart", "Serpentfire Curry",]
const dishDescriptions = ["Slow-braised wrym meat with ashroot and ember pepper.", 
                          "Slick strands tossed in deep-seaa spices and shadow oil.",
                          "Charred with saffron spice and dusted in sky-salt.",
                          "Tangy, golden, and faintly crackling with energy.",
                          "Warm loaves that glow faintly and never truly burn.",
                          "Blazing hot stew brewed from jungle herbs and scaled meats.",];     

const populateGrid = function(){
    for(let i = 0; i < dishNames.length; i++){
        const item = document.createElement("h3");
        item.setAttribute("id", "item"+i);
        item.textContent = dishNames[i];
        const itemImg= document.createElement("img");
        const itemDescription = document.createElement("h4");
        itemDescription.textContent = dishDescriptions[i];

        item.appendChild(itemImg);
        item.appendChild(itemDescription);
        menuGrid.appendChild(item);
    }                     
}

populateGrid();

menuContent.appendChild(title); 
menuContent.appendChild(menuGrid);