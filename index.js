const swiper = new Swiper(".swiper", {
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
});

const goButton = document.querySelector("#gobutton");
const emailInput = document.querySelector(".email");
const errorText = document.querySelector(".errortext");

goButton.addEventListener("click", () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {
        errorText.style.display = "none"
        emailInput.classList.remove("error");;
        return (true);
    };
    errorText.style.display = "block";
    emailInput.classList.add("error");
    setTimeout(() => {
        errorText.style.display = "none"
        emailInput.classList.remove("error")
    }, 5000);
    return (false);
});

const hamburgerMenu = document.querySelector(".menu");
const navigation = document.querySelector(".flexheader");
const icon = document.querySelector(".hamburger");
    
hamburgerMenu.addEventListener("click", () => {
    if (hamburgerMenu.classList.contains("visible") == true) {
        navigation.removeAttribute("id", "done");
        icon.src = "images/icon-hamburger.svg";
        hamburgerMenu.classList.remove("visible");
        return;
    } else {
        navigation.setAttribute("id", "done");
        icon.src = "images/icon-close.svg";
        hamburgerMenu.classList.add("visible");
        return;
    };
});

