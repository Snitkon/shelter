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
  console.log(event);
  if (event.target.classList.contains("pet_item") || event.target.parentElement.classList.contains("pet_item")) {
    openPopup();
    const petName = event.target.parentElement.getAttribute("data-name") || event.target.getAttribute("date-name");
    const petInfo = petsList.find((item) => {
      return item.name === petName;
    });
    const pagePopup = `
    <div class="popup-container">
      <div class="popup-image">
        <img class="image" src="${petInfo.img}" alt="petsImage">
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

//Pagination
const list = document.getElementById("pets-list");
const numberPage = document.getElementById("page-number");
const btnPrev = document.querySelector("#prev-button");
const btnNext = document.querySelector("#next-button");
const lastPage = document.querySelector("#last-page");
const firstPage = document.querySelector("#first-page");

let page = 1
let quantityPage
let widthWindowSite = window.innerWidth



function shuffleNew(arr) {
  const values = [...arr].map((el) => el);
  const result = [...Array(8)].map(() => values.splice(Math.floor(Math.random() * values.length), 1)[0]);
  return result;
}

function arrayNew(arr) {
  const petsListNew = [];
  for (let i = 0; i < 6; i++) {
  let shufflePetsList = shuffleNew(arr);
    shufflePetsList.map((el) => {
      petsListNew.push(el);
    });
  }
  return petsListNew;
}

const newPetsList = arrayNew(petsList);
function randerPage(numberPage) {
  let template = "";
  let startCard;
  let lastCard
  switch (true) {
    case widthWindowSite >= 1280:
      quantityPage = 6;
      quantityCard = 8;

      startCard = (numberPage * quantityCard) - 1;
      lastCard = startCard - 7;

      for (let i = startCard; i >= lastCard; i--) {
        template += `<div class="pet_item" data-name="${newPetsList[i].name}">
                    <img src="${newPetsList[i].img}" alt="${newPetsList[i].name}">
                    <p class="pet__name">${newPetsList[i].name}</p>
                    <button class="learn__more">Learn more</button>
                  </div>`;
      }
      list.innerHTML = template;
      break;
    case widthWindowSite >= 768 && widthWindowSite < 1280:
      quantityPage = 8;
      quantityCard = 6;

      startCard = (numberPage * quantityCard) - 1;
      lastCard = startCard - 5;

      for (let i = startCard; i >= lastCard; i--) {
        template += `<div class="pet_item" data-name="${newPetsList[i].name}">
                    <img src="${newPetsList[i].img}" alt="${newPetsList[i].name}">
                    <p class="pet__name">${newPetsList[i].name}</p>
                    <button class="learn__more">Learn more</button>
                  </div>`;
      }
      list.innerHTML = template;
      break;
    case widthWindowSite >= 320 && widthWindowSite < 768:
      quantityPage = 16;
      quantityCard = 3;

      startCard = (numberPage * quantityCard) - 1;
      lastCard = startCard - 2;

      for (let i = startCard; i >= lastCard; i--) {
        template += `<div class="pet_item" data-name="${newPetsList[i].name}">
                    <img src="${newPetsList[i].img}" alt="${newPetsList[i].name}">
                    <p class="pet__name">${newPetsList[i].name}</p>
                    <button class="learn__more">Learn more</button>
                  </div>`;
      }
      list.innerHTML = template;
      break;
  }
}

randerPage(page);
btnPrev.addEventListener("click", () => {
  page -= 1;
  numberPage.innerHTML = String(page);
  randerPage(page);

  if(page === 1) {
    btnPrev.setAttribute("disabled", "disabled");
    firstPage.setAttribute("disabled", "disabled");
  } else if (page > 1) {
    btnNext.removeAttribute("disabled", "disabled");
    lastPage.removeAttribute("disabled", "disabled");
  }

})

btnNext.addEventListener("click", () => {
  page += 1
  numberPage.innerHTML = String(page)
  randerPage(page);

  if (page === quantityPage) {
    btnNext.setAttribute("disabled", "disabled");
    lastPage.setAttribute("disabled", "disabled");
  } else if (page < quantityPage) {
    btnPrev.removeAttribute("disabled", "disabled");
    firstPage.removeAttribute("disabled", "disabled");
  }
})

lastPage.addEventListener("click", () => {
  numberPage.innerHTML = String((page = quantityPage));
  randerPage(page);

    if (page === quantityPage) {
      btnNext.setAttribute("disabled", "disabled");
      lastPage.setAttribute("disabled", "disabled");
      btnPrev.removeAttribute("disabled", "disabled");
      firstPage.removeAttribute("disabled", "disabled");
    }
})

firstPage.addEventListener("click", () => {
  numberPage.innerHTML = String(page = 1)
  randerPage(page);

    if (page === 1) {
      btnPrev.setAttribute("disabled", "disabled");
      firstPage.setAttribute("disabled", "disabled");
      btnNext.removeAttribute("disabled", "disabled");
      lastPage.removeAttribute("disabled", "disabled");
    }
})