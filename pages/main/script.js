const petsList = [
  {
    name: "Katrine",
    img: "../../assets/images/katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Jennifer",
    img: "../../assets/images/jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Woody",
    img: "../../assets/images/woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"],
  },
  {
    name: "Sophia",
    img: "../../assets/images/sophia.png",
    type: "Dog",
    breed: "Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Scarlett",
    img: "../../assets/images/scarlett.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"],
  },

  {
    name: "Timmy",
    img: "../../assets/images/timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"],
  },
  {
    name: "Freddie",
    img: "../../assets/images/freddie.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Charly",
    img: "../../assets/images/charly.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
  },
];

//Burger
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav_link");
const body = document.querySelector("body");
const burgerOverlay = document.querySelector(".burger-overlay");

function toggleMenu() {
  burger.classList.toggle("open");
  nav.classList.toggle("open");
  body.classList.toggle("lock");
  burgerOverlay.classList.toggle("_active");
}

burger.addEventListener("click", toggleMenu);
burgerOverlay.addEventListener("click", closeMenu);

navLinks.forEach((el) => el.addEventListener("click", closeMenu));

function closeMenu(event) {
  if (event.target.classList.contains("nav_link") || event.target.classList.contains("_active")) {
    burger.classList.remove("open");
    nav.classList.remove("open");
    burgerOverlay.classList.remove("_active");
    body.classList.remove("lock");
  }
}

//Popup
const popup = document.querySelector(".popup");
const popupContainer = popup.querySelector(".popup-wrapper");
const petsContainer = document.querySelector(".pets-list");
const btnClose = popup.querySelector(".close");
const popupOverlay = document.querySelector(".popup-overlay");

function openPopup() {
  body.classList.add("lock");
  popupOverlay.classList.add("_active");
  popup.classList.add("active");
}

petsContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("pet_item") || event.target.parentElement.classList.contains("pet_item")) {
    openPopup();
    const petName = event.target.parentElement.getAttribute("data-name") || event.target.getAttribute("date-name");
    const petInfo = petsList.find((item) => {
      return item.name === petName;
    });
    const pagePopup = `
    <div class="popup-container">
      <div class="popup-image">
        <img class="image" src="${petInfo.img}" alt="${petInfo.name}">
      </div>
      <div class="pets-text">
        <h3 class="popup-title">${petInfo.name}</h3>
        <div class="popup-subtitle">${petInfo.type} - ${petInfo.breed}</div>
        <div class="popup-information">${petInfo.description}</div>
        <ul class="popup-list">
          <li class="popup-item"><span class="color"><b>Age:</b> ${petInfo.age}</span></li>
          <li class="popup-item"><span class="color"><b>Inoculations:</b> ${petInfo.inoculations}</span></li>
          <li class="popup-item"><span class="color"><b>Diseases:</b> ${petInfo.diseases}</span></li>
          <li class="popup-item"><span class="color"><b>Parasites:</b> ${petInfo.parasites}</span></li>
        </ul>
      </div>
    </div>
`;
    popupContainer.innerHTML = pagePopup;
  }
});

function closePopup() {
  body.classList.remove("lock");
  popupOverlay.classList.remove("_active");
  popup.classList.remove("active");
}

btnClose.addEventListener("click", closePopup);
popupOverlay.addEventListener("click", closePopup);

popupOverlay.addEventListener("mouseenter", (event) => {
  btnClose.classList.add("hover");
});

popupOverlay.addEventListener("mouseleave", (event) => {
  btnClose.classList.remove("hover");
});

//Carusel
const list = document.getElementById("pets-list");
const left = document.querySelector("#leftButton");
const right = document.querySelector("#rightButton");

const leftBtn = document.querySelector("#leftBtn");
const rightBtn = document.querySelector("#rightBtn");

const leftPart = document.querySelector("#left-part");
const activePart = document.querySelector("#active-part");
const rightPart = document.querySelector("#right-part");

left.addEventListener("click", () => {
  list.classList.add("left");
});

right.addEventListener("click", () => {
  list.classList.add("right");
});

leftBtn.addEventListener("click", () => {
  list.classList.add("left");
});

rightBtn.addEventListener("click", () => {
  list.classList.add("right");
});

activePart.innerHTML = "";

let template = `<div class="pet_item" data-name="${petsList[0].name}">
  <img src="${petsList[0].img}" alt="${petsList[0].name}">
  <p class="pet__name">${petsList[0].name}</p>
  <button class="learn__more">Learn more</button>
  </div>
  <div class="pet_item" data-name="${petsList[1].name}">
  <img src="${petsList[1].img}" alt="${petsList[1].name}">
  <p class="pet__name">${petsList[1].name}</p>
  <button class="learn__more">Learn more</button>
  </div>
  <div class="pet_item" data-name="${petsList[2].name}">
  <img src="${petsList[2].img}" alt="${petsList[2].name}">
  <p class="pet__name">${petsList[2].name}</p>
  <button class="learn__more">Learn more</button>
  </div>`;

activePart.insertAdjacentHTML("afterbegin", template);

list.addEventListener("animationend", (event) => {
  if (event.animationName === "left") {
    list.classList.remove("left");
  } else {
    list.classList.remove("right");
  }

  activePart.innerHTML = "";

  let getRandom = function (min = 0, max = 7) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let one = Math.floor(Math.random() * (max - min + 1)) + min;
    let two = Math.floor(Math.random() * (max - min + 1)) + min;
    let three = Math.floor(Math.random() * (max - min + 1)) + min;
    if (one === two) return getRandom();
    if (two === three) return getRandom();
    if (three === one) return getRandom();
    return [one, two, three];
  };

  let template = "";
  let arr = getRandom();
  arr.map((val) => {
    let info = petsList[val];
    template += `<div class="pet_item" data-name="${info.name}">
                    <img src="${info.img}" alt="${info.name}">
                    <p class="pet__name">${info.name}</p>
                    <button class="learn__more">Learn more</button>
                  </div>`;
  });

  activePart.insertAdjacentHTML("afterbegin", template);
});
