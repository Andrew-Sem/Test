// Смена картинок
const arr = [
  "assets/images/example-1.png",
  "assets/images/example-2.png",
  "assets/images/example-3.png",
];

$(function () {
  $(".change__button").click(function () {
    const id = this.id;
    $("#my__image").attr("src", arr[id]);
  });
  const headerCityButton = $(".header__city-button");
  if (localStorage.getItem("user-location")) {
    headerCityButton.html(localStorage.getItem("user-location"));
  }
  headerCityButton.click(() => {
    const city = prompt("Укажите Ваш город");
    headerCityButton.html(city);
    localStorage.setItem("user-location", city);
  });
});

// Город

// const headerCityButton = document.querySelector(".header__city-button");

// if (localStorage.getItem("user-location")) {
//   headerCityButton.textContent = localStorage.getItem();
// }

// headerCityButton.addEventListener("click", () => {
//   const city = prompt("Укажите ваш город:");
//   headerCityButton.textContent = city;
//   localStorage.setItem("user-location", city);
// });
