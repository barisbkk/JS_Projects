const header = document.querySelector(".header");
header.style.backgroundColor = "darkorange";
header.style.color = "white";
header.style.padding = "20px";
header.style.textAlign = "center";

const title = document.getElementById("title");
title.textContent = "Javascript Dom Assignment 1";

const navItem = document.querySelector(".nav-item");
navItem.style.display = "flex";
navItem.style.justifyContent = "center";
navItem.style.gap = "20px";
navItem.style.listStyle = "none";

const username = document.querySelector("#username");
const password = document.querySelector("#password");

username.value = "Anthony";
username.disabled = true;
password.value = "123456";
password.disabled = true;
password.type = "text";

const btn = document.querySelector(".btn");
btn.style.backgroundColor = "green";
btn.style.color = "white";
btn.style.padding = "15px 20px";
btn.style.borderRadius = "10px";
btn.style.border = "none";
btn.textContent = "Giriş Yap";
btn.style.cursor = "pointer";

const projects = document.getElementById("projects");
const h3 = document.querySelector("h3");
h3.textContent = "Js Dom Projects";
// const h3 = projects.firstElementChild
// h3.textContent = "Js Dom Projects"

const ul = document.querySelector("#projects ul");

ul.innerHTML += `
<li> Hello World! </li>
<li>Guess Number </li>
<li> Checkout Page</li>
<li>Gelir-Gider Projesi </li>
<li>Api Projects </li>
`;
