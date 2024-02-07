const list = document.querySelector("ul");
const li = document.createElement("li");
let valueArr = [];


li.style.setProperty("--height", "20");
list.appendChild(li);

setInterval(genererSoejle, 1000)



function genererSoejle() {
  valueArr.push(Math.round(Math.random() * 100));
  console.log(valueArr)


  const li = document.createElement("li");
  //Her fik jeg height til at blive valueArr, ved at sætte funktionen til at finde lenght på valueArr, og putte den i var(height). Jeg minusser med -1, fordi at den tæller 0 med i lenght.
  li.style.setProperty("--height", valueArr[valueArr.length - 1]);
  list.appendChild(li);

  console.log("genererSoejle")

  //Her lavede jeg en "if", hvor jeg beder op at hvis value-lenght er over 20, så vil den slette, det første item i array. Jeg lavede en variable, som hedder firstLi, til at fange "li", så jeg kan slette den.
  if (valueArr.length > 20) {
    console.log("STOP!");
    valueArr.shift();
    const firstLi = list.querySelector("li");
    list.removeChild(firstLi);
  }
}
