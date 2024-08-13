// const { check } = require("prettier");

const btn = document.querySelector("#btn");
const saveBtn = document.querySelector("#saveBtn");
const checkbox = document.querySelector("checkbox");
const booksCont = document.querySelector("#books");
// const delBtn = document.querySelector("#delBtn");
// console.log(delBtn)
const inpName = document.querySelector(".inpName");
const inpAuthor = document.querySelector(".inpAuthor");
const inpGenre = document.querySelector(".inpGenre");
const inpYear = document.querySelector(".inpYear");

let books = JSON.parse(localStorage.getItem("library")) || [];

if (books.length > 0) {
  const innerHTML = books.reduce((acc, item) => {
    return (
      acc +
      `<ul>
          <li>${item.name}</li>
          <li>${item.author}</li>
          <li>${item.genre}</li>
          <li>${item.yaer}</li>
          <li><input id="checkbox" type="checkbox" name="" id=""></li>   
          <button id="delBtn">удалить книгу</button>
          </ul>`
    );
  }, "");
  booksCont.innerHTML = innerHTML;
}
{
  /* <li><input id="checkbox" type="checkbox" name="" id=""></li> */
}
btn.addEventListener("click", () => {
  const dataInpName = inpName.value;
  const dataInpAuthor = inpAuthor.value;
  const dataInpGenre = inpGenre.value;
  const dataInpYear = inpYear.value;
  if (
    dataInpName === "" ||
    dataInpGenre === "" ||
    dataInpAuthor == "" ||
    dataInpYear === isNaN
  ) {
    alert("Введите данные");
  } else {
    books.push({
      name: dataInpName,
      author: dataInpAuthor,
      genre: dataInpGenre,
      year: dataInpYear,
      status: false,
    });
  }
  const ul = document.createElement("ul");

  const innerHTML = books.reduce((acc, item) => {
    return (
      acc +
      `<ul>
        <li>${item.name}</li>
        <li>${item.author}</li>
        <li>${item.genre}</li>
        <li>${item.yaer}</li>
        <li><input id="checkbox" type="checkbox" name="" id=""></li>   
        <button id="delBtn">удалить книгу</button>         
        </ul>`
    );
  }, "");

  booksCont.innerHTML = innerHTML;

  inpName.value = "";
  inpAuthor.value = "";
  inpGenre.value = "";
  inpYear.value = "";
});

saveBtn.onclick = function () {
  localStorage.setItem("library", JSON.stringify(books));
};
const delBtn = document.querySelector("#delBtn");

delBtn.addEventListener("click", () => {
  console.log(delBtn);
  localStorage.removeItem("library", JSON.stringify(books));
});
