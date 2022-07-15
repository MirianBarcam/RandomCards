/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let numbersCards = [
    "AS",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let familyCards = [
    {
      name: "♦",
      color: "red"
    },
    {
      name: "♥",
      color: "red"
    },
    {
      name: "♠",
      color: "black"
    },
    {
      name: "♣",
      color: "black"
    }
  ];

  let cardGenerator = () => {
    let card = {
      color: "",
      number: 0,
      family: ""
    };
    const positionRandomFamily = positionRandom(familyCards.length);
    card.color = familyCards[positionRandomFamily].color;
    card.family = familyCards[positionRandomFamily].name;
    card.number = numbersCards[positionRandom(numbersCards.length)];
    console.log(card);
    return card;
  };

  let positionRandom = nummax => {
    const num = Math.floor(Math.random() * nummax);
    return num;
  };

  let cardSelected = cardGenerator();
  let familyCardRandom = document.querySelectorAll(".palo");
  for (let i = 0; i < familyCardRandom.length; i++) {
    familyCardRandom[i].innerHTML = cardSelected.family;
  }
  let numCardRandom = document.querySelector(".num-card");
  numCardRandom.innerHTML = cardSelected.number;

  // btn.addEventListener("click", function() {
  //   let datos = phraseGenerate();
  //   document.getElementById("randomPerson").innerHTML = datos;
  // });
};
