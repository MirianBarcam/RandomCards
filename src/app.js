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

  let positionRandom = nummax => {
    const num = Math.floor(Math.random() * nummax);
    return num;
  };

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

  const update = () => {
    let cardSelected = cardGenerator();
    let familyCardRandom = document.querySelectorAll(".family");

    for (let i = 0; i < familyCardRandom.length; i++) {
      if (cardSelected.color === "red") {
        familyCardRandom[i].classList.add("red");
      }
      familyCardRandom[i].innerHTML = cardSelected.family;
    }

    let numCardRandom = document.querySelector(".num-card");

    if (cardSelected.number === "AS") {
      const familyAs = cardSelected.family;
      cardSelected.number = familyAs;
    }
    if (cardSelected.color == "red") {
      numCardRandom.classList.add("red");
    }
    numCardRandom.innerHTML = cardSelected.number;
  };

  document.getElementById("click").addEventListener("click", update);
  update();
  let counter = 10;
  let counterElement = document.querySelector(".counter");
  const updateCounter = () => {
    if (counter < 0) {
      counter = 10;
      update();
    }
    counterElement.innerHTML = counter;
    counter--;
  };
  setInterval(updateCounter, 1000);

  const changeSize = () => {
    let cardSize = document.querySelector(".container-card");
    let inputWidthValue = document.querySelector(".input-width").value;
    let inputHeightValue = document.querySelector(".input-height").value;

    cardSize.style.width = inputWidthValue + "em";
    cardSize.style.height = inputHeightValue + "em";
    console.log(
      "Hago algo cuando le das al boton",
      inputHeightValue,
      inputWidthValue
    );
  };

  document.getElementById("clickSize").addEventListener("click", changeSize);
};
