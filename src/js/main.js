// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
// select span
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // linksContainer.classList.toggle("show-links");

  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
  // console.log(linksContainer.getBoundingClientRect());
});

// ********** fixed navbar ************

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  // setup back to top link

  if (scrollHeight > 500) {
    console.log("helo");

    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainer.style.height = 0;
  });
});
// calculate heights

// ******************** Service section **************
const serviceRender = [
  {
    icon: "./asset/images/content-image.svg",
    title: "content management",
    summary:
      "I build contents for sites i develop.Being the web developer, I work together with clients to create appealling contents.",
  },
  {
    icon: "./asset/images/backend-logo.svg",
    title: "backend developement",
    summary:
      "I build contents for sites i develop.Being the web developer, I work together with clients to create appealling contents.",
  },
  {
    icon: "./asset/images/backend-logo.svg",
    title: "frontend developement",
    summary:
      "I build contents for sites i develop.Being the web developer, I work together with clients to create appealling contents.",
  },
  {
    icon: "./asset/images/backend-logo.svg",
    title: "search engine optimization",
    summary:
      "I build contents for sites i develop.Being the web developer, I work together with clients to create appealling contents.",
  },
];

const contacts = [
  {
    header: "Location",
    icon: "./asset/images/location-logo.svg",
    address: "55 Apata street shomolu, Lagos Nigeria",
  },
  {
    header: "Email Address",
    icon: "./asset/images/email-logo.svg",
    address: "ohida2001@gmail.com, mongodbms@gmail.com",
  },
  {
    header: "Contact Details",
    icon: "./asset/images/phone-logo.svg",
    address: "Contact 1: (+234) 9075617573 ,Contact 2: (+234) 8136074233",
  },
];

const socialMedialImages = [
  "./asset/images/facebook-logo.svg",
  "./asset//images/instagram-logo.svg",
  "./asset//images/twitter-logo.svg",
  "./asset/images/linkedin-log.svg",
  "./asset/images/github-logo.svg",
  "./asset/images/dribble-logo.svg",
  "./asset/images/youtube-logo.svg",
  "./asset/images/printest-logo.svg",
];

const imagesContainer = document.querySelector(".social-media");

socialMedialImages.forEach((image) => {
  imagesContainer.innerHTML += ` <img src=${image} alt="social-medial-logo">`;
});

const contactContainer = document.querySelector(".contact-details");

contacts.forEach((contact) => {
  const adress = contact.address.split(",");
  contactContainer.innerHTML += `
    <div class="detail">
        <img src=${contact.icon} alt="logo">
        <h5>${contact.header}</h5>
       <p>
        <span>${adress[0]}</span>
        <span>${adress[1]}</span>
    </p>
 
</div>
    `;
});

const services = document.querySelector(".services");
serviceRender.forEach((service) => {
  services.innerHTML += `
    <div class="service-item">
                <img src=${service.icon} alt=${service.title}-logo>
                <h4>${service.title}</h4>
                <p>${service.summary}</p>
            </div>
    `;
});

// Skills

const skills = [
  {
    skill: "html",
    performance: 80,
  },
  {
    skill: "css",
    performance: 70,
  },
  {
    skill: "Javascript",
    performance: 60,
  },
  {
    skill: "React",
    performance: 50,
  },
  {
    skill: "Java",
    performance: 80,
  },
  {
    skill: "Springboot",
    performance: 70,
  },
  {
    skill: "Python",
    performance: 60,
  },

  {
    skill: "Django",
    performance: 50,
  },
  {
    skill: "Relationa DB",
    performance: 70,
  },
  {
    skill: "Non-Relation DB",
    performance: 60,
  },
];

const skillsContainer = document.querySelector(".skills");

skills.forEach(skill => {
  skillsContainer.innerHTML += `
  <div class="skill-container">
       <div class="skill">${skill.skill}</div>
       <div class="skill-progress">${skill.performance}%</div>
   </div>
  `
});

const skillDocument = document.querySelectorAll(".skill-progress");
for (let index = 0; index < skillDocument.length; index++) {
  const element = skillDocument[index];
  element.style.width = `${skills[index].performance}%`
}
