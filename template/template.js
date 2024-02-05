// CLONING.
// Først vælger vi <template>'s content//
const template = document.querySelector("template").content;
console.log(template);

//Her begynder vi at clone vores template. True betyder, at vi gerne vil have det hele med. "Børnene med"
const copy =template.cloneNode(true);

//Her laver vi en ændring i vores clone.
copy.querySelector("h2").textContent = "Så KØRER BUSSEN"



// Her finder vi ud af, hvor i DOM (i din html-kode) du gerne vil sætte det ind. Til at forklare det laver vi en grid inde i HTML. 

const parent = document.querySelector(".grid");
parent.appendChild(copy);




