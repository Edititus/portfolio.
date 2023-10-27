'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });


// Portfolio Page
// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });


// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// cards portfolio 
const cardBox = document.querySelector(".project-list");

let dataCards = [
  {
    id: 1,
    thumb: './images/portfolio/docuhelp.ai.png',
    title: 'Docuhelp.ai',
    category: 'web development',
    url: 'https://docuhelp.ai/',
  },
  {
    id: 2,
    thumb: './images/portfolio/3d7tech.png',
    title: '3d7 tech',
    category: 'web development',
    url: 'https://uat.3d7tech.com/',
  },
  {
    id: 3,
    thumb: './images/portfolio/mindconnect.png',
    title: 'MindConnect',
    category: 'web development',
    url: 'https://mindconnect.netlify.app/',
  },
  {
    id: 4,
    thumb: './images/portfolio/noteapp1.png',
    title: 'Noteapp',
    category: 'web development',
    url: 'https://note-app-qde3.onrender.com/',
  },
];

cardBox.innerHTML = "";
// show cards
dataCards.map((dc) => {
  let newCard = `
  <div class="project-item active" data-filter-item data-category="${dc.category}" key="${dc.id}">
    <a href="${dc.url}" target="_blank">
      <figure class="project-img">
        <div class="project-item-icon-box">
          <ion-icon name="eye-outline"></ion-icon>
        </div>
        <img src="${dc.thumb}" alt="${dc.title}" loading="lazy">
      </figure>
      <h3 class="project-title">${dc.title}</h3>
      <p class="project-category">${dc.category}</p>
    </a>
  </div>
  `;
  
  cardBox.innerHTML += newCard;
  
  // filter variables
  const filterItems = document.querySelectorAll("[data-filter-item]");
  
  const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }
};

  // add event in all select items
  for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    
    filterFunc(selectedValue);

  });
}
});




// submit reset form (Contact Page)
const btnSub = document.querySelector(".form-btn"),
      form = document.querySelector(".form");

const nameVal = document.getElementById("name"),
      emailVal = document.getElementById("email"),
      message = document.getElementById("message");

btnSub.addEventListener('click', function handleClick(event) {
  // 👇️ if you are submitting a form (prevents page reload)
  event.preventDefault();
  
  if (!nameVal.value || !emailVal.value || !message.value) {
    alert("Please complete the fields that have not been filled in!")
    return false;
  }
  
  if (nameVal && emailVal && message) {
    form.submit();
  }
  // 👇️ clear input field
  form.reset();
});


// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}


/*=============== SCROLL REVEAL =============== */
ScrollReveal({
  reset: true,
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400
});

ScrollReveal().reveal('.contact-item', {
  delay: 600
});

ScrollReveal().reveal('.abt, .porto, .tleft, .skill-progress-fill', {
  origin: 'left'
});
ScrollReveal().reveal('.tright', {
  origin: 'right'
});
ScrollReveal().reveal('.service-item, .contact-item', {
  interval: 100,
});
