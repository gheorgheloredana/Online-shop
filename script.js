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
    
    if (writeemail.value == ""){
    document.getElementById("newslettermail").style.backgroundColor = "rgb(247, 66, 66)",
    e.preventDefault()
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

toggleButton.addEventListener("click", () => {
navbarsections.classList.toggle("active");
})


