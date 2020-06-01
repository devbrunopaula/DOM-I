const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

(function() {
  createLogo()
  navBuilder()
  cta(siteContent.cta)
  topContent(siteContent["main-content"])
 }())

 function createLogo(){
   // // Example: Update the img src for the logo
  let logo = document.getElementById("logo-img");
  logo.setAttribute('src', siteContent["nav"]["img-src"])
 }


function navBuilder() {
  const navItems = document.getElementsByTagName('a')
  
  for(let i = 0; i < navItems.length; i++){
    navItems[i].innerText = siteContent["nav"][`nav-item-${i+1}`]
  }
}


function cta(data) {
const ctaText = document.querySelector(".cta-text").children
const ctaImage = document.querySelector('#cta-img')
const r = data.h1.split(' ')
    ctaText[0].innerHTML += `<h1>${r[0]}</h1>
                             <h1>${r[1]}</h1>
                             <h1>${r[2]}</h1>`
ctaText[1].innerText = 'Get Started'
ctaImage.setAttribute('src', data["img-src"])
}

function topContent(data) {
  console.log(data)
  const textContent = document.querySelector('.text-content').children
  console.log(textContent)
  textContent[0].innerText = data["features-h4"]
  textContent[1].innerText =  data["features-content"]
}