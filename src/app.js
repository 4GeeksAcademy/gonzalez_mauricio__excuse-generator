/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["the dog", "my grandma", "the mailman", "my tooth"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car", "the bus"];
  let when = ["i do at afternoon", "when i have a son", "at night"];

  [
    "before the class",
    "when i was sleeping",
    "while i was exercising",
    "while i was praying"
  ];

  function generateExcuse() {
    const generateRamdomArray = () => {
      return;
    };

    let randomwho = Math.floor(Math.random() * who.length);
    let randomaction = Math.floor(Math.random() * action.length);
    let randomwhat = Math.floor(Math.random() * what.length);
    let randomwhen = Math.floor(Math.random() * when.length);

    let excuse =
      who[randomwho] +
      " " +
      action[randomaction] +
      " " +
      what[randomwhat] +
      " " +
      when[randomwhen];

    return excuse;
  }
  document.getElementById("excuse").innerHTML = generateExcuse();
};
