let container = document.querySelector(".container");
let form = document.getElementById("form");

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const data = new FormData(form);
  const dataObj = Object.fromEntries(data.entries());

  console.log(dataObj);

  let captcha = dataObj.captcha;
  let stressball = dataObj.stressball;
  let help = dataObj.help;
  let stackoverflow = dataObj.stackoverflow;
  let narrator = dataObj.narrator;
  let manual = dataObj.manual;
  let hexWhite = dataObj.hexWhite;
  let glitchy = dataObj.glitchy;
  let stoic = dataObj.stoic;
  let holyPixels = dataObj.holyPixels;
  let semanticSkeletons = dataObj.semanticSkeletons;
  console.log(semanticSkeletons);
  let snac = dataObj.snac;
  let tabbable = dataObj.tabbable;

  let madlib = `Face-to-screen, feeling like a ${captcha} in crisis as I tackled my first form. My screen reader lost it. Text, text, text - I was stuck. 
I grabbed my ${stressball} to calm myself, but seconds later hurled it across the room. I googled "${help}", hoping for clarity, but landed in a pile of ${stackoverflow} tabs. Some answers seemed helpful, some were from 2004. One word kept showing up: ARIA. I selected my go-to ${narrator}, ready to decode so I could begin coding. I asked. "Are we learning ARIA tags?" My instructor ${stoic} -ly replied, "Not in this Course." My brain blue-screened. 
I took a breath, leaned in, listened harder, and then I caught it - a faint 'boop', my  screen reader clue. Was this truly my text-box moment? No fix-it-all, but progress. 
I experienced ${glitchy} moments - either face-planting into frustration or vanishing into the void, where keystrokes go to die. To ease strain on my eyes, I set my background to ${hexWhite}. Google best practices? I had dental-chair flashbacks. 
If you're navigating by sound, ${holyPixels}! In the end, ${semanticSkeletons}. My solution? ${snac} my way through. Silver lining? It was ${tabbable}. Not by chance - but with ${manual} effort.`;

  let madlibPara = document.createElement("p");
  madlibPara.textContent = madlib;
  container.appendChild(madlibPara);
}
