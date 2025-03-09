const pizzaData = [
  {
    title: "3 chese",
    photo:
      "https://assets.dots.live/misteram-public/018ecd78-c4b9-72c1-a31d-77ed7535d0b4-826x0.png",
    description:
      "Чудовий спосіб відсвяткувати Cheese Pizza Day — приготувати піцу з сирам Моцарела, Еделпілц, Чедарелла.",
    price: "30$",
  },
  {
    title: "Сицилійська піца",
    photo: "https://origami.lviv.ua/image/vmmcrksfcd/sycylijska-small.jpg",
    description:
      "куряче філе, болгарський перець, цибуля кримська, ананас, соус кисло-солодкий, моцарела, пармезан, спеції, соус",
    price: "10$",
  },
  {
    title: "Піца Маргарита",
    photo:
      "https://kvadratsushi.com/wp-content/uploads/2018/06/Margarita_1200x800.jpg",
    description: "Базилік, Моцарела, Помідори, Соус",
    price: "40$",
  },
  {
    title: "Пепероні",
    photo: "https://roll-club.dp.ua/wp-content/uploads/2023/05/5-2.jpg",
    description:
      "моцарелла, печериці, салямі, соус песто, томатний соус, орегано",
    price: "15$",
  },
];
const pizzaMap = pizzaData.map((pizza) => {
  return `<li class="item" >
            <h2 class="title">${pizza.title}</h2>
            <img src="${pizza.photo}" alt="" class="img">
            <p class="text">${pizza.description}</p>
            <p class="price">${pizza.price}</p>
            <button type="button" class="btn" >Почитати детальніше</button>
        </li>`;
});
console.log(pizzaMap);
const pizzaDom = pizzaMap.join("");
const list = document.querySelector(".list");
list.innerHTML = pizzaDom;

const openButton = document.querySelector(".btn")
const backdrop = document.querySelector(".backdrop")
const closeButton = document.querySelector(".close-btn") 

list.addEventListener("click", (e) => {
  console.log(e.target)
  if(e.target.nodeName === "BUTTON"){
    backdrop.style.display = "block";
    backdrop.style.pointerEvents = "visible";
  }
})

closeButton.addEventListener("click", () => {
  backdrop.style.display = "none";
  backdrop.style.pointerEvents = "none";
})

