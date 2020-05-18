import * as d3 from "d3";

let animals = d3
  .scaleOrdinal()
  .domain(["cat", "dog", "cow", "fox"])
  .range(["meow", "woof", "moo", "???"]);

let linear = d3
  .scaleLinear()
  .domain([0, 200, 400])
  .range([10, 500, 5000]);

const div = document.createElement("div");
div.innerHTML = [animals("dog"), linear(0), linear(150), linear(100)];
document.body.appendChild(div);
