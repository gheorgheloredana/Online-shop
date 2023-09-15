//functie scrolltotop

const chevronup = document.getElementById("chevron-up");


window.addEventListener("scroll", checkHeight)

function checkHeight(){
    if (window.scrollY < 300){
        chevronup.style.display = "none";
    }
    else{
        chevronup.style.display = "flex";
    }
}

chevronup.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})


//functie banner
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const banner = ["PROMOTIONS UP TO -50%! WE HAVE ADDED MORE ITEMS!"];

const el = document.getElementById("banner");
   
let sleepTime = 70;

let BannerText = 0;

const writeLoop = async () => {
    while (true) {
        let curentBanner = banner[BannerText];

        for (let i = 0; i < curentBanner.length; i++ ) {
            el.innerText = curentBanner.substring(0, i + 1);
            await sleep (sleepTime);
        }

        await sleep(sleepTime * 10);
    }
};

writeLoop();


//functie newsletter
const writeemail= document.getElementById("newslettermail")

newsletterbutton.addEventListener("click", (e) => {
    
    if (!writeemail.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){ 
    document.getElementById("newslettermail").style.borderColor = "rgb(247, 66, 66)";

    e.preventDefault()
    }
    else {
        alert("You have subscribed to our newsletter!");
        }
});


//functie aria-current

document.querySelectorAll(".nav__link").forEach((link) => {
    if (link.href === window.location.href) {
        link.setAttribute("aria-current", "page");
    }
});

//functie toggle

const toggleButton = document.querySelector(".toggle-button");
const navbarsections = document.querySelector(".sections");
const closebutton = document.querySelector("#closetogglebutton");

toggleButton.addEventListener("click", () => {
navbarsections.classList.toggle("active");

})

closebutton.addEventListener("click", () => {
    navbarsections.classList.remove("active");
})

//functie add to cart

let cart = document.querySelectorAll(".productpage");

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");

  if (productNumbers) {
    document.querySelector(".icontext span").textContent = productNumbers;
  }
}

function cartNumbers(product) {
  let productNumbers = localStorage.getItem("cartNumbers");

  productNumbers = parseInt(productNumbers);
  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".icontext span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".icontext span").textContent = 1;
  }

  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems[product.tag] = product;
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
  let cartCost = localStorage.getItem("totalCost");

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}

let products = [
  {
    name: "Brielle Shimmer Dress - Wild Aster",
    tag: "BrielleShimmerDress",
    price: 35,
    inCart: 0
  },
  {
    name: "Brielle Dress - Pink Grapefruit",
    tag: "BrielleDress",
    price: 25,
    inCart: 0
  }
];

for (let i = 0; i < cart.length; i++) {
  cart[i].addEventListener("click", () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
  });
}


onLoadCartNumbers();
displayCart();

//functie login form

const email = document.getElementById("loginemail");
const password = document.getElementById("loginpassword");
const loginform = document.querySelector(".login");
const loginerror = document.getElementById("error");

loginform.addEventListener("submit", (e) => {
    let messages = []
    

if (email.value === '' || email.value == null ){
    messages.push("Email is required");
}

if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    messages.push("Please enter a valid email address!");
}

if (password.value === '' || password.value == null ){
    messages.push("Password is required");
}
if (password.value.length <= 6 || password.value.length >= 15){
    messages.push("Password must be at least 6 characters and less than 15 characters!");
}

if (
    (password.value.length >= 6 && password.value.length <= 15) && 
    (email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
){
    alert("Login successful!");
}

if(messages.length > 0){
    e.preventDefault()
    loginerror.innerText = messages.join(". ");
}
})


//functie Sign Up form

const username = document.getElementById("username");
const signupemail = document.getElementById("signupemail");
const signuppassword = document.getElementById("signuppassword");
const signupform = document.querySelector(".register");
const signuperror = document.getElementById("errorsignup");
const terms = document.querySelector(".checkbox");

signupform.addEventListener("submit", (e) => {
    let messagessignup = []
    
if (username.value === '' || email.value == null ){
        messagessignup.push("Please enter username!");
    }

if (signupemail.value === '' || email.value == null ){
    messagessignup.push("Email is required");
}

if (!signupemail.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    messagessignup.push("Please enter a valid email address!");
}

if (signuppassword.value === '' || signuppassword.value == null ){
     messagessignup.push("Password is required");
}  

if (signuppassword.value.length <= 6 || signuppassword.value.length >= 15){
     messagessignup.push("Password must be at least 6 characters and less than 15 characters!");
}
if(!terms.checked){
    messagessignup.push("You mush agree to terms and conditions!");
}

if (
    (signuppassword.value.length >= 6 && signuppassword.value.length <= 15) &&
    signupemail.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/) &&
    terms.checked &&
    (username.value !== '' && email.value !== null)
  ) {
    alert("Registration successful!");
  }

if(messagessignup.length > 0){
    e.preventDefault()
    signuperror.innerText = messagessignup.join(". ");
}
})