import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here

  const card = document.querySelector(".card");
  const number = document.querySelector("#number");
  const topSuit = document.querySelector(".top-suit");
  const bottomSuit = document.querySelector(".bottom-suit");

  const listSuits = [
    {symbol: "♦", class: "diamond" }, 
    {symbol: "♥", class: "heart" }, 
    {symbol: "♠", class: "spade" }, 
    {symbol: "♣", class: "club" }
  ];
  const randomSuit = listSuits[Math.floor(Math.random() * listSuits.length)];

  const listNumber = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const randomNumber = listNumber[Math.floor(Math.random() * listNumber.length)];

  topSuit.innerText = randomSuit.symbol;
  bottomSuit.innerText = randomSuit.symbol;
  number.innerText = randomNumber;

  card.className = "card";
  card.classList.add(randomSuit.class);

  console.log(randomSuit);


};
