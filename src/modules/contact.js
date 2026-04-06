export let contactContent = document.createElement("div");
contactContent.setAttribute("id", "contactContent");
const title = document.createElement("h1");
title.textContent = "Contact";
const info = document.createElement("h3");
info.textContent = "Contact us via sending stone, horse, telepathy, messenger pigion, rider, or more. Business hours are below:";

const avaliableTimes = document.createElement("ul");
const ashenhold = document.createElement("li");
const moonday = document.createElement("li");
const towerday = document.createElement("li");
const wrymsday = document.createElement("li");
const lunara = document.createElement("li");
const spirefall = document.createElement("li");
const silverswake = document.createElement("li");
const godsday = document.createElement("li");

const specifyTimes = function(){
    ashenhold.textContent = "Ashenhold: Midmorning to Evenfall";
    moonday.textContent = "Moonday: First Light to Dusk";
    towerday.textContent = "Towerday: First Light to Dusk";
    wrymsday.textContent = "Wrymsday: First Light to Dusk";
    lunara.textContent = "Lunara: First Light to Dusk";
    spirefall.textContent = "Spirefall: First Light to Dusk";
    silverswake.textContent = "Silverswake: Midmorning to Evenfall";
    godsday.textContent = "Godsday: Closed";
}

const addDays = function(){
    avaliableTimes.appendChild(ashenhold);
    avaliableTimes.appendChild(wrymsday);
    avaliableTimes.appendChild(towerday);
    avaliableTimes.appendChild(wrymsday);
    avaliableTimes.appendChild(lunara);
    avaliableTimes.appendChild(spirefall);
    avaliableTimes.appendChild(silverswake);
    avaliableTimes.appendChild(godsday);
}

const holidayNote = document.createElement("h4");
holidayNote.textContent = "Note we are closed for the following holidays: Day of Silver Tides, The Witching Bloom, Crownfall Eve, Storms Revel, First Dawn, and Frost Awakening.";

const addContent = function(){
    contactContent.appendChild(title); 
    contactContent.appendChild(info);
    contactContent.appendChild(avaliableTimes);
    contactContent.appendChild(holidayNote);
}

specifyTimes();
addDays();
addContent();